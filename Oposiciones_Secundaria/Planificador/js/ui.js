'use strict';

let plan = null;
let cfg = null;

/* =======================================================
   UTILIDADES
   ======================================================= */

function fmt(h){
  const m = Math.round(h*60);
  const H = Math.floor(m/60);
  const M = m%60;
  if(H===0) return `${M}m`;
  return M===0 ? `${H}h` : `${H}h ${M}m`;
}

function setDefaultStartDate(){
  const input = document.getElementById('startDate');
  if(!input) return;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth()+1).padStart(2,'0');
  const dd = String(tomorrow.getDate()).padStart(2,'0');

  input.value = `${yyyy}-${mm}-${dd}`;
}

function formatRealDate(dateObj){
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  let text = dateObj.toLocaleDateString('es-ES', options);

  text = text
    .replace(',', '')
    .replace(/ de /g, ' ');

  return text.charAt(0).toUpperCase() + text.slice(1);
}

function computeRealDate(dayNumber){
  if(!cfg || !cfg.startDate) return null;

  const base = new Date(cfg.startDate);
  const real = new Date(base);
  real.setDate(base.getDate() + (dayNumber - 1));
  return real;
}

/* =======================================================
   INPUTS
   ======================================================= */

function getInputs(){
  return {
    startDate: document.getElementById('startDate').value,
    days: parseInt(document.getElementById('days').value),
    hours: parseFloat(document.getElementById('hours').value),
    hpt: parseFloat(document.getElementById('hoursPerTopic').value),
    restDays: parseInt(document.getElementById('restDays').value),
    reviewTimeH: parseFloat(document.getElementById('reviewTime').value),
    reviewCycle: parseInt(document.getElementById('reviewCycle').value),
    finalDays: parseInt(document.getElementById('finalDays').value),
  };
}

/* =======================================================
   GENERAR
   ======================================================= */

function generate(){

  const selected = window.getSelectedTopics ? getSelectedTopics() : [];

  if (!selected || selected.length === 0){
    alert("Selecciona al menos un tema.");
    return;
  }

  const c = getInputs();
  c.topics = selected.length;
  c.topicsList = selected;

  cfg = c;
  plan = buildPlan(c);

  render(plan);
}

function render(plan){
  if (!plan || !plan.days) return;
  renderTopicsState(plan);
  renderTimeline(plan);
}

/* =======================================================
   ESTADO DE TEMAS
   ======================================================= */

function renderTopicsState(plan){

  let container = document.getElementById('topicsState');

  if (!container){
    container = document.createElement('div');
    container.id = 'topicsState';
    container.style.marginBottom = '30px';
    document.getElementById('timeline').before(container);
  }

  container.innerHTML = '<h3>Estado de los temas</h3>';

  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(80px, 1fr))';
  grid.style.gap = '6px';

  plan.topics.forEach(t => {

    const cell = document.createElement('div');
    cell.style.padding = '6px';
    cell.style.border = '1px solid #ddd';
    cell.style.borderRadius = '4px';
    cell.style.textAlign = 'center';
    cell.style.fontSize = '0.8rem';

    if (!t.done){
      const pct = Math.round(t.progress * 100);
      cell.innerHTML = `
        <div>T${t.id}</div>
        <div style="opacity:.6">${pct>0 ? pct+'%' : '—'}</div>
      `;
    } else {
      cell.style.background = '#e8f5ee';
      cell.innerHTML = `
        <div><strong>T${t.id}</strong></div>
        <div>${t.reviewsCount}×</div>
      `;
    }

    grid.appendChild(cell);
  });

  container.appendChild(grid);
}

/* =======================================================
   TIMELINE CON FECHA REAL
   ======================================================= */

function renderTimeline(plan){

  const container = document.getElementById('timeline');
  container.innerHTML = '';

  plan.days.forEach(d => {

    const card = document.createElement('div');
    card.className = 'day-card';

    const header = document.createElement('div');
    header.className = 'day-header';

    const num = document.createElement('div');
    num.className = 'day-num';

    const realDate = computeRealDate(d.day);

    if(realDate){
      num.textContent = formatRealDate(realDate);
    } else {
      num.textContent = `Día ${d.day}`;
    }

    header.appendChild(num);
    card.appendChild(header);

    const body = document.createElement('div');
    body.className = 'day-body';

    if (d.isRest){
      body.textContent = 'Descanso';
    } else {

      d.activities.forEach(a => {

        const row = document.createElement('div');
        row.className = 'activity-row';

        if (a.type === 'study') row.classList.add('act-study');
        if (a.type === 'review') row.classList.add('act-review');
        if (a.type === 'final') row.classList.add('act-final');

        const left = document.createElement('div');
        left.innerHTML = `
          <div class="act-title">${a.text}</div>
          <div class="act-detail">${a.detail || ''}</div>
        `;

        const right = document.createElement('div');
        right.className = 'act-time';
        right.textContent = fmt(a.h);

        row.appendChild(left);
        row.appendChild(right);
        body.appendChild(row);
      });
    }

    card.appendChild(body);
    container.appendChild(card);
  });
}

/* =======================================================
   BOTONES
   ======================================================= */

document.getElementById('btnGenerate')
  .addEventListener('click', generate);

document.getElementById('btnExportPdf')
  .addEventListener('click', () => exportCalendar(plan, cfg, fmt));

document.getElementById('btnPrintCalendar')
  .addEventListener('click', () => exportCalendar(plan, cfg, fmt));


document.addEventListener("DOMContentLoaded", function(){
  setDefaultStartDate();
});