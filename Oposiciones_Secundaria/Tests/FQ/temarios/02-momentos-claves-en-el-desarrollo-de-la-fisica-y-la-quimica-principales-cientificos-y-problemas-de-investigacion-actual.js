// temarios/02-momentos-claves-en-el-desarrollo-de-la-fisica-y-la-quimica-principales-cientificos-y-problemas-de-investigacion-actual.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué aporta el enfoque histórico al estudio de Física y Química en la educación?",
    correcta: "Ayuda a comprender conceptos actuales mostrando cómo surgieron, se depuraron y se validaron",
    incorrectas: [
      "Sustituye la necesidad de aprender contenidos formales",
      "Evita tratar la dimensión experimental de las ciencias"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracteriza el avance científico según la historiografía reciente?",
    correcta: "Combinación de acumulación gradual y rupturas conceptuales",
    incorrectas: [
      "Progreso exclusivamente lineal y acumulativo",
      "Ciclos aleatorios sin relación con la evidencia"
    ]
  },
  {
    enunciado: "¿Qué transformó la revolución copernicana?",
    correcta: "El modelo cosmológico, pasando del geocentrismo al heliocentrismo",
    incorrectas: [
      "La naturaleza química de los elementos",
      "La definición de la carga eléctrica elemental"
    ]
  },
  {
    enunciado: "¿Qué destacó Galileo en la práctica científica?",
    correcta: "La experimentación cuantitativa y la matematización del movimiento",
    incorrectas: [
      "La subordinación del experimento a la autoridad textual",
      "La renuncia al uso de instrumentos de medición"
    ]
  },
  {
    enunciado: "¿Qué sintetiza Newton en los Principia?",
    correcta: "Una dinámica general con leyes del movimiento y gravitación universal",
    incorrectas: [
      "Una teoría química de las afinidades",
      "Una explicación biológica del origen de las especies"
    ]
  },
  {
    enunciado: "¿Qué problema termodinámico estudió Carnot al inicio del siglo XIX?",
    correcta: "El rendimiento máximo teórico de las máquinas térmicas",
    incorrectas: [
      "La estructura nuclear del átomo",
      "La síntesis orgánica de biomoléculas"
    ]
  },
  {
    enunciado: "¿Qué logro teórico culmina Maxwell?",
    correcta: "La unificación de electricidad, magnetismo y óptica en el campo electromagnético",
    incorrectas: [
      "La formulación de la mecánica matricial",
      "La hipótesis del flogisto en la combustión"
    ]
  },
  {
    enunciado: "¿Qué introduce Einstein en 1905 con la relatividad especial?",
    correcta: "La invariancia de la velocidad de la luz y la relatividad del tiempo y del espacio",
    incorrectas: [
      "La cuantización del espín nuclear",
      "La periodicidad de los elementos químicos"
    ]
  },
  {
    enunciado: "¿Qué principio limita la precisión conjunta de magnitudes en microfísica?",
    correcta: "El principio de incertidumbre de Heisenberg",
    incorrectas: [
      "El principio de exclusión de Lavoisier",
      "El principio de interferencia de Avogadro"
    ]
  },
  {
    enunciado: "¿Qué propósito tiene el Modelo Estándar en Física?",
    correcta: "Describir partículas elementales y sus interacciones fundamentales (excepto la gravedad)",
    incorrectas: [
      "Explicar la síntesis industrial de polímeros",
      "Definir la tabla periódica completa"
    ]
  },
  {
    enunciado: "¿Qué papel jugó la alquimia en la génesis de la Química?",
    correcta: "Proveyó técnicas de laboratorio y vocabulario, aunque con metas transmutatorias",
    incorrectas: [
      "Descartó el uso de balanzas y mediciones cuantitativas",
      "Sustituyó la observación por la pura especulación matemática"
    ]
  },
  {
    enunciado: "¿Qué hito se asocia a Lavoisier en el siglo XVIII?",
    correcta: "La ley de conservación de la masa y la reinterpretación de la combustión mediante el oxígeno",
    incorrectas: [
      "La confirmación del flogisto",
      "La teoría planetaria heliocéntrica"
    ]
  },
  {
    enunciado: "¿Qué propone Dalton a comienzos del siglo XIX?",
    correcta: "Una teoría atómica que explica las leyes ponderales",
    incorrectas: [
      "La estructura de doble hélice del ADN",
      "La unificación electromagnética"
    ]
  },
  {
    enunciado: "¿Qué aportó Mendeleiev con su tabla periódica?",
    correcta: "Ordenó los elementos según periodicidad de propiedades y predijo elementos aún no descubiertos",
    incorrectas: [
      "Clasificó los elementos por color aparente",
      "Negó la existencia de elementos desconocidos"
    ]
  },
  {
    enunciado: "¿Qué mostró Wöhler con la síntesis de urea (1828)?",
    correcta: "Que un compuesto 'orgánico' podía obtenerse a partir de sustancias 'inorgánicas'",
    incorrectas: [
      "Que los compuestos orgánicos carecen de carbono",
      "Que la vida no depende de reacciones químicas"
    ]
  },
  {
    enunciado: "¿Qué área consolidó Linus Pauling en el siglo XX?",
    correcta: "La explicación del enlace químico y la estructura molecular",
    incorrectas: [
      "La teoría geocéntrica revisada",
      "La imposibilidad de difracción de rayos X"
    ]
  },
  {
    enunciado: "¿Qué herramienta permitió resolver estructuras cristalinas con precisión atómica?",
    correcta: "La cristalografía de rayos X",
    incorrectas: [
      "El péndulo simple",
      "La balanza de torsión de Cavendish"
    ]
  },
  {
    enunciado: "¿Qué investigaron Marie y Pierre Curie de forma pionera?",
    correcta: "La radiactividad y nuevos elementos como el polonio y el radio",
    incorrectas: [
      "La superconductividad a alta temperatura",
      "La espectroscopía de RMN"
    ]
  },
  {
    enunciado: "¿Cuál es un problema abierto central en Física actual?",
    correcta: "La naturaleza de la materia oscura y la energía oscura",
    incorrectas: [
      "La validez del geocentrismo en el sistema solar",
      "La existencia del flogisto en combustiones modernas"
    ]
  },
  {
    enunciado: "¿Qué reto persigue la computación cuántica?",
    correcta: "Aprovechar el entrelazamiento y la superposición para resolver problemas intratables clásicamente",
    incorrectas: [
      "Eliminar toda necesidad de corrección de errores",
      "Sustituir la química por completo en el laboratorio"
    ]
  },
  {
    enunciado: "¿Qué pregunta clave guía la física de neutrinos actual?",
    correcta: "Determinar la jerarquía de masas y la posible violación de CP leptónica",
    incorrectas: [
      "Confirmar que los neutrinos tienen carga eléctrica positiva",
      "Probar que los neutrinos no atraviesan la materia"
    ]
  },
  {
    enunciado: "¿Qué se busca en la unificación de fuerzas fundamentales?",
    correcta: "Un marco que describa coherentemente interacciones electrodébiles, fuerte y gravedad",
    incorrectas: [
      "Una ley que prohíba la mecánica cuántica",
      "Un modelo exclusivamente fenomenológico sin base teórica"
    ]
  },
  {
    enunciado: "¿Qué línea puntera existe en materiales de estado sólido?",
    correcta: "Estudio de fases topológicas y superconductividad no convencional",
    incorrectas: [
      "Rechazo del concepto de banda electrónica",
      "Negación de la difracción de electrones"
    ]
  },
  {
    enunciado: "¿Qué objetivos persigue la Química Verde?",
    correcta: "Reducir residuos, usar disolventes benignos y optimizar la economía atómica",
    incorrectas: [
      "Aumentar la toxicidad para mejorar el rendimiento",
      "Evitar la medición de impactos ambientales"
    ]
  },
  {
    enunciado: "¿Qué es un MOF (Metal–Organic Framework) en Química de materiales?",
    correcta: "Un sólido poroso cristalino con nodos metálicos y ligandos orgánicos para captura y separación",
    incorrectas: [
      "Un polímero líquido sin estructura",
      "Un gas noble utilizado como catalizador universal"
    ]
  },
  {
    enunciado: "¿Qué rol tiene la catálisis en la transición energética?",
    correcta: "Habilitar reacciones eficientes como HER/OER/ORR para hidrógeno verde y combustibles limpios",
    incorrectas: [
      "Aumentar deliberadamente las barreras de activación",
      "Evitar la electrólisis y procesos fotoquímicos"
    ]
  },
  {
    enunciado: "¿Qué busca la reducción electroquímica de CO₂?",
    correcta: "Convertir CO₂ en productos útiles (CO, combustibles, alcoholes) con alta selectividad",
    incorrectas: [
      "Aumentar las emisiones netas de carbono",
      "Oxidar el CO₂ hasta generar más CO₂"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la organocatálisis asimétrica moderna?",
    correcta: "Uso de pequeñas moléculas orgánicas para inducir enantioselectividad sin metales",
    incorrectas: [
      "Necesidad imprescindible de metales nobles",
      "Imposibilidad de controlar la quiralidad del producto"
    ]
  },
  {
    enunciado: "¿Qué ventaja aportan las perovskitas en fotovoltaica?",
    correcta: "Alta eficiencia potencial con procesos de fabricación relativamente sencillos",
    incorrectas: [
      "Estabilidad infinita sin investigación adicional",
      "Imposibilidad de sintonizar su banda prohibida"
    ]
  },
  {
    enunciado: "¿Qué papel juega la química bioortogonal (clic) en biomedicina?",
    correcta: "Permite reacciones selectivas en sistemas vivos para etiquetado y bioconjugación",
    incorrectas: [
      "Impide el seguimiento de biomoléculas",
      "Requiere siempre metales pesados tóxicos"
    ]
  },
  {
    enunciado: "¿Qué tension cosmológica actual enfrenta la comunidad científica?",
    correcta: "La discrepancia en la medida de H₀ entre métodos locales y cosmológicos",
    incorrectas: [
      "La imposibilidad de medir el corrimiento al rojo",
      "La inexistencia de supernovas tipo Ia"
    ]
  },
  {
    enunciado: "¿Qué aportan las ondas gravitacionales a la Física?",
    correcta: "Una ventana multimensajero para estudiar fusiones compactas y probar la relatividad general",
    incorrectas: [
      "Prueban que la gravedad actúa instantáneamente",
      "Sustituyen la espectroscopía electromagnética"
    ]
  },
  {
    enunciado: "¿Qué conecta la metrología con el progreso científico?",
    correcta: "La mejora de instrumentos y estándares reduce incertidumbre y habilita nuevas teorías",
    incorrectas: [
      "La medición es irrelevante cuando hay consenso",
      "Los estándares impiden comparar resultados"
    ]
  },
  {
    enunciado: "¿Qué enseñó el caso flogisto → oxígeno para la didáctica de la ciencia?",
    correcta: "Que los marcos teóricos pueden ser reemplazados por modelos con mayor poder explicativo y predictivo",
    incorrectas: [
      "Que los cambios de teoría no afectan a la experimentación",
      "Que la evidencia es secundaria frente a la tradición"
    ]
  },
  {
    enunciado: "¿Qué diferencia a una ley empírica de un modelo mecanístico?",
    correcta: "La ley resume regularidades; el modelo propone mecanismos que las explican",
    incorrectas: [
      "La ley siempre es falsa y el modelo siempre verdadero",
      "Ambas son meras descripciones literarias"
    ]
  },
  {
    enunciado: "¿Qué reto comparte la ciencia abierta en Física y Química?",
    correcta: "Datos FAIR, reproducibilidad y acceso a infraestructuras para validar resultados",
    incorrectas: [
      "Sustituir la revisión por pares por votaciones públicas",
      "Evitar la publicación de datos negativos"
    ]
  },
  {
    enunciado: "¿Qué ilustran los grandes instrumentos (LHC, sincrotrones) sobre la ciencia moderna?",
    correcta: "La necesidad de colaboraciones internacionales y alta especialización técnica",
    incorrectas: [
      "Que el trabajo individual es siempre suficiente",
      "Que los experimentos a gran escala eliminan la teoría"
    ]
  },
  {
    enunciado: "¿Qué principio químico subyace a las leyes ponderales clásicas?",
    correcta: "La conservación de la masa en sistemas cerrados durante las reacciones",
    incorrectas: [
      "La creación de masa a partir de energía térmica corriente",
      "La destrucción de masa en reacciones endotérmicas"
    ]
  },
  {
    enunciado: "¿Qué contribución esencial realizó Avogadro?",
    correcta: "Estableció que volúmenes iguales de gases a mismas condiciones contienen el mismo número de partículas",
    incorrectas: [
      "Demostró el principio de incertidumbre",
      "Descubrió el electrón mediante rayos catódicos"
    ]
  },
  {
    enunciado: "¿Qué aportó Faraday a la Química y la Física?",
    correcta: "Desarrolló la electroquímica y el concepto de líneas de fuerza eléctricas y magnéticas",
    incorrectas: [
      "Formuló la ecuación de Schrödinger",
      "Introdujo la tabla periódica moderna"
    ]
  },
  {
    enunciado: "¿Qué ejemplifica la integración Física–Química en problemas actuales?",
    correcta: "Diseño de catalizadores para conversión energética apoyado en espectroscopía y teoría cuántica",
    incorrectas: [
      "Desarrollo de tecnologías sin base experimental",
      "Separación estricta de disciplinas para evitar solapamientos"
    ]
  }
];
