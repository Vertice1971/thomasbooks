'use strict';

/* ============================================================
   EXPORTACIÓN CALENDARIO MENSUAL — A4 LANDSCAPE
   ============================================================ */

function exportCalendar(plan, cfg, fmt){

  if (!plan || !plan.days || !cfg || !cfg.startDate) return;

  const startDate = new Date(cfg.startDate);

  /* ============================================================
     MAPEAR DÍAS DEL PLAN A FECHAS REALES
     ============================================================ */

  const dateMap = {};

  plan.days.forEach(d => {
    const real = new Date(startDate);
    real.setDate(startDate.getDate() + (d.day - 1));
    const key = real.toISOString().split('T')[0];
    dateMap[key] = d;
  });

  /* ============================================================
     CALCULAR MESES A GENERAR
     ============================================================ */

  const firstDate = new Date(startDate);
  const lastDate = new Date(startDate);
  lastDate.setDate(startDate.getDate() + plan.days.length - 1);

  const months = [];
  let cursor = new Date(firstDate.getFullYear(), firstDate.getMonth(), 1);

  while (cursor <= lastDate){
    months.push(new Date(cursor));
    cursor.setMonth(cursor.getMonth() + 1);
  }

  /* ============================================================
     VENTANA DE IMPRESIÓN
     ============================================================ */

  const win = window.open('', '_blank');

  win.document.write(`
  <html>
  <head>
    <title>Calendario de estudio</title>
    <style>

      @page {
        size: A4 landscape;
        margin: 10mm;
      }

      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }

      .month {
        page-break-after: always;
        break-after: page;
      }

      .month h2 {
        text-align: center;
        margin: 0 0 10px 0;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
      }

      thead {
        display: table-header-group;
      }

      /* CLAVE: NO CORTAR SEMANAS */
      tr {
        break-inside: avoid;
        page-break-inside: avoid;
      }

      /* CLAVE: NO CORTAR CELDAS */
      td, th {
        border: 1px solid #000;
        vertical-align: top;
        height: 110px;
        padding: 4px;
        font-size: 12px;
        break-inside: avoid;
        page-break-inside: avoid;
      }

      th {
        background: #eee;
        text-align: center;
        font-weight: bold;
      }

      .day-number {
        font-weight: bold;
        margin-bottom: 3px;
      }

      .activity {
        font-size: 11px;
        line-height: 1.2;
      }

    </style>
  </head>
  <body>
  `);

  /* ============================================================
     GENERAR CADA MES
     ============================================================ */

  months.forEach(monthDate => {

    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const monthName = firstDay.toLocaleDateString('es-ES', { month: 'long' });
    const title = monthName.charAt(0).toUpperCase() + monthName.slice(1) + ' ' + year;

    win.document.write(`<div class="month">`);
    win.document.write(`<h2>${title}</h2>`);

    win.document.write(`<table>`);

    win.document.write(`
      <thead>
        <tr>
          <th>L</th><th>M</th><th>X</th>
          <th>J</th><th>V</th><th>S</th><th>D</th>
        </tr>
      </thead>
      <tbody>
    `);

    const startOffset = (firstDay.getDay() + 6) % 7;
    let currentDay = 1;

    for (let row = 0; row < 6; row++){

      win.document.write('<tr>');

      for (let col = 0; col < 7; col++){

        if ((row === 0 && col < startOffset) || currentDay > lastDay.getDate()){
          win.document.write('<td></td>');
        }
        else {

          const currentDate = new Date(year, month, currentDay);
          const key = currentDate.toISOString().split('T')[0];
          const planDay = dateMap[key];

          win.document.write('<td>');
          win.document.write(`<div class="day-number">${currentDay}</div>`);

          if (planDay){

            if (planDay.isRest){
              win.document.write(`<div class="activity">Descanso</div>`);
            }
            else {

              planDay.activities.forEach(a => {

                let text = '';

                if (a.type === 'study'){
                  const match = a.text.match(/\d+/);
                  if (match) text = `T.${match[0]} — ${fmt(a.h)}`;
                }

                if (a.type === 'review'){
                  const match = a.text.match(/\d+/);
                  if (match) text = `R T.${match[0]} — ${fmt(a.h)}`;
                }

                if (a.type === 'final'){
                  text = `Repaso final — ${fmt(a.h)}`;
                }

                if (text){
                  win.document.write(`<div class="activity">${text}</div>`);
                }

              });

            }

          }

          win.document.write('</td>');
          currentDay++;
        }

      }

      win.document.write('</tr>');
    }

    win.document.write('</tbody></table>');
    win.document.write('</div>');
  });

  win.document.write(`
    <script>
      window.onload = function(){
        window.print();
      }
    <\/script>
  `);

  win.document.write('</body></html>');
  win.document.close();
}