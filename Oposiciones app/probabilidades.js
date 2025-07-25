(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const selectEspecialidad = document.getElementById('especialidad');
    const form = document.getElementById('especialidad-form');
    let probBtn = null;

    // Aparece al seleccionar especialidad
    selectEspecialidad.addEventListener('change', () => {
      if (selectEspecialidad.value && !probBtn) {
        const btnParte2 = document.getElementById('btn-parte-2');
        const cont = document.querySelector('.container');
        
        // Crear botón Probabilidades
        probBtn = document.createElement('button');
        probBtn.id = 'btn-probabilidades';
        probBtn.type = 'button';
        probBtn.textContent = 'Probabilidades';
        probBtn.className = 'boton-naranja';

        // Posicionar junto a "Pasar a Parte 2"
        if (btnParte2) {
          const top = btnParte2.offsetTop;
          probBtn.style.cssText = `
            position:absolute;
            top:${top}px;
            right:1em;
          `;
        } else {
          probBtn.style.cssText = 'position:absolute; top:2em; right:1em;';
        }
        cont.appendChild(probBtn);

        probBtn.addEventListener('click', () => mostrarModalProbabilidades());
      }
    });

    // Desaparece al generar números
    form.addEventListener('submit', () => {
      if (probBtn) {
        probBtn.remove();
        probBtn = null;
      }
    });

    // Funciones auxiliares
    function mostrarModalProbabilidades() {
      const especialidad = selectEspecialidad.value;
      const totalTemas = (window.temasPorEspecialidad && especialidad)
        ? window.temasPorEspecialidad[especialidad].length : 0;
      
      // Overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position:fixed; top:0; left:0; width:100vw; height:100vh;
        background:rgba(0,0,0,0.5); display:flex;
        align-items:center; justify-content:center; z-index:10000;
      `;

      // Modal
      const modal = document.createElement('div');
      modal.style.cssText = `
        background:#fff; padding:2em; border-radius:8px; width:320px;
        box-shadow:0 2px 8px rgba(0,0,0,0.3); text-align:center;
      `;
      modal.innerHTML = `
        <h3>Calcular Probabilidades</h3>
        <label>Temas estudiados:<br><input type="number" id="input-estudiados" min="0" max="${totalTemas}" value="0" style="width:100%; margin-top:0.5em;"></label>
        <label style="margin-top:1em; display:block;">Temas en el sorteo:<br><input type="number" id="input-sorteo" min="1" max="${totalTemas}" value="4" style="width:100%; margin-top:0.5em;"></label>
        <button type="button" id="calcular-prob" style="margin-top:1em;">Calcular</button>
        <p id="resultado-prob" style="margin-top:1em; font-weight:bold;"></p>
        <button type="button" id="cerrar-prob" class="boton-rojo" style="margin-top:1em;">Cerrar</button>
      `;
      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      // Cerrar modal
      const closeModal = () => overlay.remove();
      modal.querySelector('#cerrar-prob').addEventListener('click', closeModal);

      // Calcular probabilidad
      modal.querySelector('#calcular-prob').addEventListener('click', () => {
        const m = parseInt(modal.querySelector('#input-estudiados').value, 10);
        const k = parseInt(modal.querySelector('#input-sorteo').value, 10);
        const n = totalTemas;
        const resultado = modal.querySelector('#resultado-prob');

        if (isNaN(m) || isNaN(k) || m < 0 || k < 1 || m > n || k > n) {
          resultado.textContent = 'Valores inválidos';
          return;
        }
        const p = 1 - comb(n - m, k) / comb(n, k);
        resultado.textContent = (p * 100).toFixed(2) + '%';

        // Cierre automático tras 6s
        setTimeout(closeModal, 6000);
      });
    }

    // Cálculo combinatorio seguro
    function comb(n, k) {
      if (k < 0 || k > n) return 0;
      k = Math.min(k, n - k);
      let res = 1;
      for (let i = 1; i <= k; i++) {
        res = res * (n - k + i) / i;
      }
      return res;
    }
  });
})();
