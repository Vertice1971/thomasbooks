'use strict';

/**
 * Motor de planificación: Planificador de Oposiciones
 * Versión 2.1 (repaso final = 1 vuelta completa) + prioridad absoluta de estudio + repaso elástico
 *
 * Mantiene INTACTA la fase final:
 * - Sin descansos
 * - Sin límite diario
 * - Solo repaso
 * - TODOS los temas exactamente UNA vez, repartidos proporcionalmente
 *
 * Ajustes para evitar temas sin estudiar (Fixes aplicados):
 * - Tolerancia microscópica (1e-4) en el presupuesto para no dejar temas al 99.9%.
 * - Aprovechamiento del 100% de la jornada: si no hay suficientes repasos, el tiempo sobrante se inyecta al estudio.
 */
function buildPlan(c) {

  const MAX_REVIEWS_PER_DAY    = 15;  // solo fase normal
  const MAX_REVIEWS_PER_TOPIC  = 8;
  const MAX_INTERVAL_DAYS      = 120;

  const SPACED_INTERVALS = [7, 21, 45, 90, 150, 240];
  const intervalScale = (c.reviewCycle || 14) / 14;

  const rawList = Array.isArray(c.topicsList) ? c.topicsList : null;

  const ts = (rawList && rawList.length)
    ? rawList.map(t => ({
        id: Number.isFinite(t.number) ? t.number : null,
        title: (t.title || '').trim() || `Tema ${t.number}`,
        progress: 0,
        done: false,
        completionDay: null,
        reviewsCount: 0,
        lastReviewDay: null,
        nextReviewDay: null,
        mandatory24h: false
      })).filter(t => t.id !== null)
    : Array.from({ length: c.topics || 0 }, (_, i) => {
        const id = i + 1;
        return {
          id,
          title: `Tema ${id}`,
          progress: 0,
          done: false,
          completionDay: null,
          reviewsCount: 0,
          lastReviewDay: null,
          nextReviewDay: null,
          mandatory24h: false
        };
      });

  const topicsCount   = ts.length;
  const totalDays     = Number(c.days) || 0;
  const finalDays     = Number(c.finalDays) || 0;
  const maxDailyH     = Number(c.hours) || 0;
  const hoursPerTopic = Number(c.hpt) || 0;
  const reviewTimeH   = Number(c.reviewTimeH) || 1;

  // Repaso elástico (fase normal)
  const MIN_REVIEW_H = Number(c.minReviewH) || Math.min(0.25, reviewTimeH);
  const MAX_REVIEW_SHARE_WHILE_STUDY = 0.25; 

  function isRestDay(dayNum) {
    if (!c.restDays) return false;
    const dow = (dayNum - 1) % 7;
    if (c.restDays === 1) return dow === 6; // domingo
    if (c.restDays === 2) return dow >= 5;  // sábado y domingo
    return false;
  }

  function isFinalDay(dayNum) {
    return finalDays > 0 && dayNum > (totalDays - finalDays);
  }

  function countEffectiveStudyDaysNormal() {
    const lastNonFinal = totalDays - finalDays;
    let cnt = 0;
    for (let d = 1; d <= lastNonFinal; d++) if (!isRestDay(d)) cnt++;
    return Math.max(1, cnt);
  }

  function remainingStudyHours() {
    let sum = 0;
    for (const t of ts) {
      if (t.done) continue;
      sum += hoursPerTopic * (1 - t.progress);
    }
    return sum;
  }

  function remainingEffectiveStudyDays(fromDay) {
    const lastNonFinal = totalDays - finalDays;
    if (fromDay > lastNonFinal) return 0;
    let cnt = 0;
    for (let d = fromDay; d <= lastNonFinal; d++) if (!isRestDay(d)) cnt++;
    return Math.max(1, cnt);
  }

  function firstPassReviewCapPerDay() {
    return Math.max(1, Math.floor((maxDailyH * 0.40) / reviewTimeH));
  }

  function doReview(topic, dayNum) {
    if (topic.reviewsCount >= MAX_REVIEWS_PER_TOPIC) return;

    topic.reviewsCount++;
    topic.lastReviewDay = dayNum;
    topic.mandatory24h = false;

    if (topic.reviewsCount >= MAX_REVIEWS_PER_TOPIC) {
      topic.nextReviewDay = null;
      return;
    }

    const idx = topic.reviewsCount - 1;
    const base = (idx < SPACED_INTERVALS.length) ? SPACED_INTERVALS[idx] : MAX_INTERVAL_DAYS;
    const offset = Math.min(MAX_INTERVAL_DAYS, Math.max(1, Math.round(base * intervalScale)));

    topic.nextReviewDay = dayNum + offset;
  }

  function getMandatory24h(dayNum) {
    return ts.filter(t =>
      t.done &&
      t.mandatory24h &&
      t.nextReviewDay !== null &&
      t.nextReviewDay <= dayNum &&
      t.reviewsCount < MAX_REVIEWS_PER_TOPIC
    );
  }

  function getOverdue(dayNum) {
    return ts.filter(t =>
      t.done &&
      !t.mandatory24h &&
      t.nextReviewDay !== null &&
      dayNum >= t.nextReviewDay &&
      t.reviewsCount < MAX_REVIEWS_PER_TOPIC
    );
  }

  function sortOverdue(list) {
    return list.sort((a, b) => {
      if (a.nextReviewDay !== b.nextReviewDay) return a.nextReviewDay - b.nextReviewDay;
      return a.reviewsCount - b.reviewsCount;
    });
  }

  const effectiveStudyDaysFirstPass = countEffectiveStudyDaysNormal();
  const requiredDailyStudy = (topicsCount * hoursPerTopic) / effectiveStudyDaysFirstPass;

  const dayLines = [];
  let currentTopicIdx = 0;
  let allStudied = false;
  let allStudiedDay = null;

  const finalPlan = new Map();
  if (finalDays > 0) {
    const firstFinalDay = (totalDays - finalDays) + 1;
    let idx = 0;
    for (let d = firstFinalDay; d <= totalDays; d++) {
      const daysLeft = totalDays - d + 1;
      const topicsLeft = topicsCount - idx;
      const countToday = Math.ceil(topicsLeft / daysLeft);

      const slice = [];
      for (let k = 0; k < countToday && idx < topicsCount; k++, idx++) {
        slice.push(idx);
      }
      finalPlan.set(d, slice);
    }
  }

  let sumStudyTarget = 0;
  let countStudyTargetDays = 0;

  for (let day = 1; day <= totalDays; day++) {

    const final = isFinalDay(day);

    /* =========================== FASE FINAL (SOLO REPASO, SIN DESCANSOS) =========================== */
    if (final) {
      const activities = [];
      let reviewH = 0;

      const indices = finalPlan.get(day) || [];
      for (const i of indices) {
        const t = ts[i];
        activities.push({
          type: 'final',
          text: `Repaso final – Tema ${t.id}`,
          detail: `${t.title} · vuelta final`,
          h: reviewTimeH
        });

        t.lastReviewDay = day;
        reviewH += reviewTimeH;
      }

      dayLines.push({ day, isRest: false, isFinal: true, activities, totalH: reviewH, studyH: 0, reviewH });
      continue;
    }

    /* =========================== FASE NORMAL =========================== */

    const rest = isRestDay(day);
    if (rest) {
      dayLines.push({ day, isRest: true, isFinal: false, activities: [], totalH: 0, studyH: 0, reviewH: 0 });
      continue;
    }

    const activities = [];
    let studyH = 0;
    let reviewH = 0;
    let remaining = maxDailyH;

    let mustStudyH = 0;
    let reviewBudgetH = maxDailyH;

    if (!allStudied) {
      const remH = remainingStudyHours();
      const remD = remainingEffectiveStudyDays(day);
      const catchUpPerDay = remH / remD;

      // 1. Calculamos el mínimo estricto
      let baseStudy = Math.max(requiredDailyStudy, catchUpPerDay);
      
      // 2. Garantizamos que el resto del día que NO es repaso, sea para avanzar temario
      let guaranteedStudy = maxDailyH * (1 - MAX_REVIEW_SHARE_WHILE_STUDY);
      
      mustStudyH = Math.min(maxDailyH, Math.max(baseStudy, guaranteedStudy));
      reviewBudgetH = Math.max(0, maxDailyH - mustStudyH);

      sumStudyTarget += mustStudyH;
      countStudyTargetDays++;
    } else {
      mustStudyH = 0;
      reviewBudgetH = maxDailyH;
    }

    /* --- (1) ESTUDIO NUEVO BLINDADO --- */
    if (!allStudied) {

      let studyBudget = Math.min(mustStudyH, remaining);
      if (studyBudget < 0) studyBudget = 0;

      // FIX: Tolerancia microscópica (1e-4) para asegurar que el presupuesto agota la fracción.
      while (studyBudget >= 1e-4 && currentTopicIdx < topicsCount) {

        const t = ts[currentTopicIdx];
        const needed = hoursPerTopic * (1 - t.progress);

        if (needed <= 1e-9) { currentTopicIdx++; continue; }

        const block = Math.min(studyBudget, needed);
        if (block <= 0) break;

        const wasEmpty = t.progress <= 1e-9;
        t.progress = Math.min(1, t.progress + (block / hoursPerTopic));
        const completing = t.progress >= 0.9999;

        let label;
        if (wasEmpty && completing) label = `Estudiar Tema ${t.id} completo`;
        else if (wasEmpty)          label = `Comenzar Tema ${t.id}`;
        else if (completing)        label = `Completar Tema ${t.id}`;
        else                        label = `Continuar Tema ${t.id}`;

        activities.push({
          type: 'study',
          text: label,
          detail: `${t.title} · avance ${Math.round(t.progress * 100)}%`,
          h: block
        });

        studyH += block;
        studyBudget -= block;
        remaining -= block;

        if (completing && !t.done) {
          t.done = true;
          t.completionDay = day;
          t.mandatory24h = true;
          t.nextReviewDay = day + 1;
          currentTopicIdx++;

          if (currentTopicIdx >= topicsCount) {
            allStudied = true;
            allStudiedDay = day;
            reviewBudgetH = remaining; // Inyecta el sobrante a los repasos al terminar de estudiar todo
          }
        } else if (completing) {
          currentTopicIdx++;
        }
      }
    } else {
      reviewBudgetH = remaining;
    }

    /* --- (2) REPASO 24H (ELÁSTICO) --- */
    const mandatory = getMandatory24h(day);
    for (const t of mandatory) {
      if (reviewBudgetH < MIN_REVIEW_H - 1e-6) break;
      if (remaining < MIN_REVIEW_H - 1e-6) break;

      const h = Math.min(reviewTimeH, reviewBudgetH, remaining);
      if (h < MIN_REVIEW_H - 1e-6) break;

      activities.push({
        type: 'review',
        text: `Repaso 24h – Tema ${t.id}`,
        detail: `${t.title} · fijación inicial`,
        h
      });

      doReview(t, day);
      reviewBudgetH -= h;
      remaining -= h;
      reviewH += h;
    }

    /* --- (3) REPASOS VENCIDOS (ELÁSTICO) --- */
    let reviewCap = allStudied ? MAX_REVIEWS_PER_DAY : firstPassReviewCapPerDay();
    const overdue = sortOverdue(getOverdue(day));
    let reviewCount = 0;

    for (const t of overdue) {
      if (reviewCount >= reviewCap) break;
      if (reviewBudgetH < MIN_REVIEW_H - 1e-6) break;
      if (remaining < MIN_REVIEW_H - 1e-6) break;

      const h = Math.min(reviewTimeH, reviewBudgetH, remaining);
      if (h < MIN_REVIEW_H - 1e-6) break;

      activities.push({
        type: 'review',
        text: `Repasar Tema ${t.id}`,
        detail: `${t.title} · iteración nº ${t.reviewsCount + 1}`,
        h
      });

      doReview(t, day);
      reviewBudgetH -= h;
      remaining -= h;
      reviewH += h;
      reviewCount++;
    }

    dayLines.push({
      day,
      isRest: false,
      isFinal: false,
      activities,
      totalH: studyH + reviewH,
      studyH,
      reviewH
    });
  }

  const adjustedDailyStudy = countStudyTargetDays > 0 ? (sumStudyTarget / countStudyTargetDays) : requiredDailyStudy;

  let finalTouches = 0;
  if (finalDays > 0) {
    const firstFinalDay = (totalDays - finalDays) + 1;
    for (let d = firstFinalDay; d <= totalDays; d++) {
      finalTouches += (finalPlan.get(d) || []).length;
    }
  }
  const finalCoversAllTopicsOnce = (finalDays === 0) ? false : (finalTouches === topicsCount);

  return {
    days: dayLines,
    topics: ts,
    allStudiedDay,
    adjustedDailyStudy,
    finalCoversAllTopicsOnce
  };
}