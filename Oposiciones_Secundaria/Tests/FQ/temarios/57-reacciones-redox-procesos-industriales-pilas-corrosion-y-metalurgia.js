// temarios/57-reacciones-redox-procesos-industriales-pilas-corrosion-y-metalurgia.js
var PREGUNTAS = [
  {
    enunciado: "En una reacción redox, la oxidación se define como:",
    correcta: "Pérdida de electrones por una especie",
    incorrectas: ["Ganancia de electrones por una especie", "Reacción ácido–base"]
  },
  {
    enunciado: "La reducción se define como:",
    correcta: "Ganancia de electrones por una especie",
    incorrectas: ["Pérdida de electrones", "Transferencia de protón"]
  },
  {
    enunciado: "El agente oxidante es la especie que:",
    correcta: "Se reduce y acepta electrones",
    incorrectas: ["Se oxida y cede electrones", "Permanece inerte"]
  },
  {
    enunciado: "El agente reductor es la especie que:",
    correcta: "Se oxida y cede electrones",
    incorrectas: ["Se reduce y acepta electrones", "No cambia su número de oxidación"]
  },
  {
    enunciado: "Regla de N.O.: el oxígeno suele tener −2 salvo, entre otros, en:",
    correcta: "Peróxidos (−1) y en OF2 (+2)",
    incorrectas: ["Todos los óxidos (−2) sin excepción", "Ozono (−3) siempre"]
  },
  {
    enunciado: "Regla de N.O.: el hidrógeno tiene +1 excepto cuando forma:",
    correcta: "Hidruros metálicos (−1)",
    incorrectas: ["Cualquier compuesto orgánico (0)", "Ácidos minerales (−1)"]
  },
  {
    enunciado: "En el método ion–electrón en medio ácido, la secuencia correcta es:",
    correcta: "Separar semirreacciones, balancear átomos, H2O/O/H+, balancear e− y sumar",
    incorrectas: [
      "Ajustar primero cargas con OH− y al final H+",
      "Sumar las semirreacciones sin balancear e−"
    ]
  },
  {
    enunciado: "Para ajustar en medio básico con el método ion–electrón se debe:",
    correcta: "Añadir OH− para neutralizar H+ y convertirlos en H2O",
    incorrectas: [
      "Añadir H+ hasta igualar cargas negativas",
      "No usar agua en ningún paso"
    ]
  },
  {
    enunciado: "La ecuación de Nernst para un electrodo genérico es:",
    correcta: "E = E° − (RT/nF) ln Q",
    incorrectas: ["E = E° + RT·Q", "E = −nF/RT · ln Q"]
  },
  {
    enunciado: "Relación termodinámica entre ΔG y el potencial de celda E:",
    correcta: "ΔG = −n F E",
    incorrectas: ["ΔG = n F E", "ΔG = −R T E"]
  },
  {
    enunciado: "En una pila galvánica, el ánodo es el electrodo donde:",
    correcta: "Ocurre la oxidación y su polo es negativo",
    incorrectas: ["Ocurre la reducción y su polo es positivo", "No hay transferencia electrónica"]
  },
  {
    enunciado: "Notación de celda correcta para Daniell convencional:",
    correcta: "Zn(s) | Zn2+(aq) || Cu2+(aq) | Cu(s)",
    incorrectas: ["Cu(s) | Cu2+ || Zn2+ | Zn(s)", "Zn2+ | Zn(s) || Cu(s) | Cu2+(aq)"]
  },
  {
    enunciado: "El potencial de celda depende de:",
    correcta: "Las actividades de las especies (no solo concentraciones formales)",
    incorrectas: ["La masa de los electrodos únicamente", "El volumen del vaso de precipitados"]
  },
  {
    enunciado: "Si en una pila Q disminuye (más reactivos), entonces a T constante:",
    correcta: "E aumenta (más espontaneidad hacia productos)",
    incorrectas: ["E disminuye necesariamente", "E no depende de Q"]
  },
  {
    enunciado: "En una pila de concentración con el mismo par redox, el potencial es:",
    correcta: "E = (RT/nF) ln(a_cátodo/a_ánodo)",
    incorrectas: ["E = nF/RT · ln Q", "E independe de las actividades"]
  },
  {
    enunciado: "Primera ley de Faraday (electrólisis):",
    correcta: "La masa depositada es proporcional a la carga pasada (I·t)",
    incorrectas: ["La masa es proporcional al potencial aplicado", "La masa es inversamente proporcional al tiempo"]
  },
  {
    enunciado: "Los moles de electrones transferidos en una electrólisis vienen dados por:",
    correcta: "n(e−) = (I·t)/F",
    incorrectas: ["n(e−) = (F·t)/I", "n(e−) = I/(t·F)"]
  },
  {
    enunciado: "En una celda electrolítica, el ánodo es:",
    correcta: "El electrodo positivo (oxidación)",
    incorrectas: ["El electrodo negativo (reducción)", "Neutro"]
  },
  {
    enunciado: "En el proceso cloro–sosa con membrana se obtienen principalmente:",
    correcta: "Cl2(g) en ánodo, H2(g) y NaOH(aq) en cátodo",
    incorrectas: ["HCl(aq) y NaClO3(aq)", "Na metálico y O2(g)"]
  },
  {
    enunciado: "En Hall–Héroult, la criolita fundida sirve para:",
    correcta: "Disolver Al2O3 y disminuir la T de fusión y la resistividad",
    incorrectas: ["Oxidar el ánodo de carbono", "Pasivar el cátodo de aluminio"]
  },
  {
    enunciado: "La corrosión metálica se interpreta mejor como:",
    correcta: "Un proceso electroquímico con micro-pilas anódicas/catódicas",
    incorrectas: ["Un fenómeno puramente térmico", "Una simple evaporación del metal"]
  },
  {
    enunciado: "La corrosión por picaduras (pitting) se ve favorecida por:",
    correcta: "Presencia de iones cloruro y rupturas locales de la pasiva",
    incorrectas: ["Altas concentraciones de nitrato protector", "Ambientes totalmente libres de agua"]
  },
  {
    enunciado: "La corrosión galvánica aparece cuando:",
    correcta: "Se acoplan metales de diferente potencial en el mismo electrolito",
    incorrectas: ["Ambos metales son idénticos", "No existe contacto eléctrico"]
  },
  {
    enunciado: "Protección catódica por ánodos de sacrificio usa típicamente:",
    correcta: "Zn, Mg o Al como ánodos consumibles",
    incorrectas: ["Cu o Au por su nobleza", "Cátodos de grafito como sacrificio"]
  },
  {
    enunciado: "Un diagrama de Pourbaix (E–pH) permite:",
    correcta: "Identificar regiones de inmunidad, corrosión y pasivación",
    incorrectas: ["Medir la velocidad de corrosión directamente", "Predecir la dureza del metal"]
  },
  {
    enunciado: "Una estrategia general de mitigación de corrosión es:",
    correcta: "Recubrir superficies (metálicos/orgánicos) y usar inhibidores adecuados",
    incorrectas: ["Incrementar cloruros para estabilizar la pasiva", "Evitar toda ventilación"]
  },
  {
    enunciado: "Agente reductor predominante en el alto horno para Fe2O3 → Fe es:",
    correcta: "CO(g) (y CO/H2 según condiciones)",
    incorrectas: ["Cl2(g)", "N2(g)"]
  },
  {
    enunciado: "Los diagramas de Ellingham ayudan a decidir:",
    correcta: "La factibilidad termodinámica de reducir óxidos a una T dada",
    incorrectas: ["La conductividad térmica de un metal", "La granulometría óptima del mineral"]
  },
  {
    enunciado: "Reacción global de una PEM fuel cell (hidrógeno):",
    correcta: "H2 + 1/2 O2 → H2O(l/g)",
    incorrectas: ["2H2O → 2H2 + O2 (espontánea)", "H2 + O2 → H2O2"]
  },
  {
    enunciado: "En baterías plomo–ácido durante la descarga, el producto sólido común es:",
    correcta: "PbSO4 en ambos electrodos",
    incorrectas: ["PbO2 en ambos", "Pb metálico en ambos"]
  },
  {
    enunciado: "En baterías Li-ion, el mecanismo principal de (des)carga es:",
    correcta: "Intercalación/desintercalación de Li+ en materiales de electrodo",
    incorrectas: ["Plating de Li masivo como mecanismo deseado", "Reacciones gaseosas exclusivamente"]
  },
  {
    enunciado: "Las sobrepotenciales que afectan Ereal incluyen:",
    correcta: "Activación, concentración y caída óhmica",
    incorrectas: ["Solo activación, no existe caída óhmica", "Únicamente polarización térmica"]
  },
  {
    enunciado: "Electrodo de referencia con potencial definido 0,000 V por convenio:",
    correcta: "SHE (electrodo estándar de hidrógeno)",
    incorrectas: ["Ag/AgCl", "Calomel saturado"]
  },
  {
    enunciado: "El puente salino/membrana en una celda sirve para:",
    correcta: "Cerrar el circuito iónico y minimizar potenciales de unión",
    incorrectas: ["Aumentar la resistencia interna", "Oxidar el ánodo automáticamente"]
  },
  {
    enunciado: "Al balancear una reacción redox con semirreacciones se debe:",
    correcta: "Igualar y cancelar el número de electrones transferidos",
    incorrectas: ["Sumar electrones a ambos lados", "Ignorar el balance de oxígeno"]
  },
  {
    enunciado: "En el electrorefino de cobre:",
    correcta: "El ánodo de Cu impuro se disuelve y Cu puro se deposita en el cátodo",
    incorrectas: ["El Cu se deposita en el ánodo", "No hay transferencia de masa"]
  },
  {
    enunciado: "La corrosión por aireación diferencial (hendiduras/crevice) se debe a:",
    correcta: "Diferencias locales de oxígeno que establecen micro-pilas",
    incorrectas: ["Exceso homogéneo de inhibidor", "Altas temperaturas uniformes"]
  },
  {
    enunciado: "Efecto de la temperatura en Nernst:",
    correcta: "RT/nF aumenta con T y el término de corrección por Q pesa más",
    incorrectas: ["RT/nF disminuye con T", "E ya no depende de Q a T alta"]
  },
  {
    enunciado: "En electrólisis alcalina del agua, se obtienen como productos:",
    correcta: "H2 en cátodo y O2 en ánodo",
    incorrectas: ["O2 en cátodo y H2 en ánodo", "Cl2 en ambos electrodos"]
  },
  {
    enunciado: "El potencial estándar de celda se calcula como:",
    correcta: "E°celda = E°cátodo − E°ánodo",
    incorrectas: ["E°celda = E°ánodo − E°cátodo", "E°celda = E°cátodo + E°ánodo siempre"]
  }
];
