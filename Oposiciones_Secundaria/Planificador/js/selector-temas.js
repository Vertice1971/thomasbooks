(function(){

  function initSelector() {
    const select = document.getElementById("especialidadSelect");
    const container = document.getElementById("temasContainer");

    if (!select || !container) return;

    // Cargar especialidades
    Object.keys(temasPorEspecialidad).forEach(key => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = key;
      select.appendChild(opt);
    });

    select.addEventListener("change", () => {
      renderTemas(select.value);
    });

    renderTemas(select.value);

    // Botones de preselección
    const btnAll   = document.getElementById("btnSelectAll");
    const btnClear = document.getElementById("btnClearSelection");
    const btnRange = document.getElementById("btnSelectRange");

    if (btnAll) {
      btnAll.addEventListener("click", selectAllTopics);
    }

    if (btnClear) {
      btnClear.addEventListener("click", clearSelection);
    }

    if (btnRange) {
      btnRange.addEventListener("click", () => {
        const start = parseInt(document.getElementById("rangeStart").value);
        const end   = parseInt(document.getElementById("rangeEnd").value);
        selectRange(start, end);
      });
    }
  }

  function renderTemas(especialidad) {
    const container = document.getElementById("temasContainer");
    container.innerHTML = "";

    const lista = temasPorEspecialidad[especialidad] || [];

    lista.forEach((tema, idx) => {

      const row = document.createElement("div");

      row.innerHTML = `
        <label style="display:block;margin-bottom:4px">
          <input type="checkbox" value="${idx}">
          ${tema}
        </label>
      `;

      container.appendChild(row);
    });

    // Evento change para contador
    container
      .querySelectorAll("input[type='checkbox']")
      .forEach(ch => {
        ch.addEventListener("change", updateCounter);
      });

    updateCounter();
  }

  function updateCounter() {
    const counter = document.getElementById("topicsCounter");
    if (!counter) return;

    const count = document.querySelectorAll(
      "#temasContainer input[type='checkbox']:checked"
    ).length;

    counter.textContent = count;
  }

  function selectAllTopics() {
    document
      .querySelectorAll("#temasContainer input[type='checkbox']")
      .forEach(ch => ch.checked = true);

    updateCounter();
  }

  function clearSelection() {
    document
      .querySelectorAll("#temasContainer input[type='checkbox']")
      .forEach(ch => ch.checked = false);

    updateCounter();
  }

  function selectRange(start, end) {

    if (isNaN(start) || isNaN(end)) return;
    if (start > end) return;

    const especialidad = document.getElementById("especialidadSelect").value;
    const lista = temasPorEspecialidad[especialidad] || [];

    const checks = document.querySelectorAll("#temasContainer input[type='checkbox']");

    checks.forEach((ch, idx) => {

      const texto = lista[idx];
      const number = parseInt(texto.split(".")[0]);

      if (number >= start && number <= end) {
        ch.checked = true;
      }

    });

    updateCounter();
  }

  function getSelectedTopics() {
    const especialidad = document.getElementById("especialidadSelect").value;
    const lista = temasPorEspecialidad[especialidad] || [];
    const checks = document.querySelectorAll("#temasContainer input:checked");

    return Array.from(checks).map(ch => {
      const texto = lista[ch.value];
      const number = parseInt(texto.split(".")[0]);
      return { number, title: texto };
    });
  }

  window.getSelectedTopics = getSelectedTopics;
  window.initSelector = initSelector;

})();
