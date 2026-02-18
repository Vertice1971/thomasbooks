// temarios/66-evolucion-de-la-concepcion-de-ciencia.js
// 40 preguntas sobre: “Evolución de la concepción de ciencia. Revoluciones científicas y cambios de paradigmas en Biología y Geología. La ciencia como proceso en construcción. Científicos y condicionamientos sociales. Actitudes científicas en la vida cotidiana”.
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo caracteriza la concepción de ciencia en la Antigüedad clásica?",
    correcta: "Racionalización del saber apoyada en la observación y la argumentación",
    incorrectas: [
      "Experimentación controlada con instrumentos estandarizados",
      "Negación de toda especulación teórica"
    ]
  },
  {
    enunciado: "¿Qué impulsa el Renacimiento respecto al hacer científico?",
    correcta: "El experimentalismo y la matematización de la naturaleza",
    incorrectas: [
      "La subordinación del conocimiento a la autoridad textual",
      "La renuncia a formular hipótesis contrastables"
    ]
  },
  {
    enunciado: "¿Qué novedad metodológica se asocia a la ciencia moderna?",
    correcta: "Articulación del método hipotético-deductivo contrastado empíricamente",
    incorrectas: [
      "El reemplazo de la evidencia por la tradición",
      "La equivalencia entre opinión y dato"
    ]
  },
  {
    enunciado: "¿Qué significa que el conocimiento científico es provisional?",
    correcta: "Que es revisable y susceptible de mejora o sustitución",
    incorrectas: [
      "Que carece de validez práctica",
      "Que depende solo de creencias personales"
    ]
  },
  {
    enunciado: "Según Kuhn, ¿qué es un paradigma?",
    correcta: "Un conjunto compartido de teorías, problemas tipo y métodos de una comunidad científica",
    incorrectas: [
      "Una hipótesis individual sin consenso",
      "Un dogma inmutable ajeno a la evidencia"
    ]
  },
  {
    enunciado: "¿Qué distingue ciencia normal de ciencia revolucionaria en Kuhn?",
    correcta: "La normal resuelve rompecabezas dentro del paradigma; la revolucionaria lo reemplaza",
    incorrectas: [
      "La normal es social y la revolucionaria individual",
      "La normal es empírica y la revolucionaria no lo es"
    ]
  },
  {
    enunciado: "¿Qué papel juegan las anomalías en la dinámica científica kuhniana?",
    correcta: "Se acumulan y pueden desencadenar una crisis del paradigma",
    incorrectas: [
      "Se ignoran por definición",
      "Confirman automáticamente la teoría vigente"
    ]
  },
  {
    enunciado: "¿Qué énfasis aporta el falsacionismo metodológico de Popper?",
    correcta: "La importancia de la refutación potencial de las teorías",
    incorrectas: [
      "La verificación definitiva mediante inducción",
      "La equivalencia entre pruebas y autoridad"
    ]
  },
  {
    enunciado: "¿Qué enfrentamiento en Biología ejemplifica un cambio de paradigma?",
    correcta: "Del fijismo al evolucionismo darwiniano",
    incorrectas: [
      "Del actualismo al catastrofismo",
      "Del neptunismo al plutonismo"
    ]
  },
  {
    enunciado: "¿Qué hito geológico supuso una revolución conceptual en el siglo XX?",
    correcta: "La teoría de la tectónica de placas",
    incorrectas: [
      "La clasificación linneana",
      "La síntesis moderna de la evolución"
    ]
  },
  {
    enunciado: "¿Qué oposición geológica preparó el terreno para la tectónica de placas?",
    correcta: "Deriva continental frente a fijismo de los continentes",
    incorrectas: [
      "Vitalismo frente a mecanicismo",
      "Fijismo biológico frente a darwinismo"
    ]
  },
  {
    enunciado: "¿Qué implica considerar la ciencia como proceso en construcción?",
    correcta: "Que teoría, observación y tecnología se co-modulan históricamente",
    incorrectas: [
      "Que las teorías verdaderas no cambian jamás",
      "Que la creatividad es irrelevante en ciencia"
    ]
  },
  {
    enunciado: "¿Cuál es la relación adecuada entre datos y teoría?",
    correcta: "Los datos se interpretan a la luz de marcos teóricos que también pueden revisarse",
    incorrectas: [
      "Los datos carecen de interpretación",
      "La teoría decide los datos que existen"
    ]
  },
  {
    enunciado: "¿Qué rol tiene la reproducibilidad en ciencia?",
    correcta: "Aumentar la fiabilidad al replicar resultados independientemente",
    incorrectas: [
      "Sustituir la revisión por pares",
      "Evitar el registro de procedimientos"
    ]
  },
  {
    enunciado: "¿Qué componente creativo es clave en la investigación?",
    correcta: "La generación de hipótesis e inferencias explicativas plausibles",
    incorrectas: [
      "La eliminación de todo razonamiento abductivo",
      "La supresión de modelos idealizados"
    ]
  },
  {
    enunciado: "¿Qué ejemplo muestra revisión teórica en Biología?",
    correcta: "La Síntesis Moderna integrando genética mendeliana y selección natural",
    incorrectas: [
      "La eliminación de la evolución de la biología",
      "La adopción del fijismo por consenso"
    ]
  },
  {
    enunciado: "¿Qué tensión metodológica es típica en Geología histórica?",
    correcta: "Catastrofismo frente a actualismo",
    incorrectas: [
      "Vitalismo frente a reduccionismo químico",
      "Innatis mo frente a conductismo"
    ]
  },
  {
    enunciado: "¿Qué señala el empirismo respecto al origen del conocimiento científico?",
    correcta: "La primacía de la experiencia y la observación",
    incorrectas: [
      "La autosuficiencia de la pura deducción",
      "La irrelevancia de la medición cuantitativa"
    ]
  },
  {
    enunciado: "¿Qué subraya el racionalismo en la ciencia?",
    correcta: "La estructura lógica y la deducción como guías del conocer",
    incorrectas: [
      "La imposibilidad de matematizar fenómenos",
      "La equivalencia entre mito y ciencia"
    ]
  },
  {
    enunciado: "¿Qué significa objetividad operacional en investigación?",
    correcta: "Procedimientos explícitos que otros pueden auditar y replicar",
    incorrectas: [
      "Neutralidad absoluta del investigador",
      "Ausencia de decisiones metodológicas"
    ]
  },
  {
    enunciado: "¿Qué son los condicionamientos sociales de la ciencia?",
    correcta: "Factores de contexto como financiación, política, cultura e intereses",
    incorrectas: [
      "Errores individuales sin impacto estructural",
      "Dogmas externos que la ciencia nunca negocia"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la ética de la investigación?",
    correcta: "Conjunto de principios para proteger personas, animales, datos y ambiente",
    incorrectas: [
      "Opcionalidad de consentimientos informados",
      "Prioridad absoluta a resultados sobre derechos"
    ]
  },
  {
    enunciado: "¿Qué norma científica resalta Robert K. Merton?",
    correcta: "Comunalismo del conocimiento (difusión y acceso compartido)",
    incorrectas: [
      "Secreto sistemático como regla general",
      "Primacía de la autoridad sobre la evidencia"
    ]
  },
  {
    enunciado: "¿Qué problema pretende mitigar la revisión por pares?",
    correcta: "Sesgos, errores metodológicos y conclusiones no sustentadas",
    incorrectas: [
      "La replicación independiente",
      "El registro abierto de datos"
    ]
  },
  {
    enunciado: "¿Qué sesgo cognitivo puede afectar a científicos y ciudadanía?",
    correcta: "Confirmación: buscar o valorar más lo que confirma la creencia previa",
    incorrectas: [
      "Aleatoriedad perfecta en el juicio humano",
      "Imposibilidad de medir sesgos"
    ]
  },
  {
    enunciado: "¿Qué actitud científica conviene practicar en la vida cotidiana?",
    correcta: "Escepticismo informado y valoración de la calidad de la evidencia",
    incorrectas: [
      "Relativismo total entre opiniones y pruebas",
      "Aceptación automática de titulares"
    ]
  },
  {
    enunciado: "¿Qué diferencia un estudio observacional de un ensayo controlado?",
    correcta: "En el ensayo se manipula la variable independiente y se asignan grupos",
    incorrectas: [
      "El observacional siempre implica aleatorización",
      "En el ensayo no se formulan hipótesis"
    ]
  },
  {
    enunciado: "¿Qué es una predicción arriesgada en términos metodológicos?",
    correcta: "Una consecuencia poco probable que, de cumplirse, apoya fuertemente la teoría",
    incorrectas: [
      "Un resultado compatible con cualquier teoría",
      "Un enunciado no contrastable"
    ]
  },
  {
    enunciado: "¿Qué papel tienen los modelos en ciencia?",
    correcta: "Simplificar y representar aspectos del sistema para explicar y predecir",
    incorrectas: [
      "Reemplazar los datos empíricos",
      "Evitar la contrastación cuantitativa"
    ]
  },
  {
    enunciado: "¿Qué conflicto paradigmático marcó el paso a la biología molecular?",
    correcta: "Del vitalismo a un enfoque mecanicista-informacional del ser vivo",
    incorrectas: [
      "Del actualismo al catastrofismo",
      "Del neptunismo al plutonismo"
    ]
  },
  {
    enunciado: "¿Qué cambio epistemológico acompañó la tectónica de placas?",
    correcta: "De explicaciones estáticas a una visión dinámica y global de la litosfera",
    incorrectas: [
      "De una Tierra móvil a una completamente rígida",
      "De mediciones cuantitativas a cualitativas"
    ]
  },
  {
    enunciado: "¿Qué significa 'carga teórica de la observación'?",
    correcta: "Las observaciones están influidas por los conceptos y expectativas previas",
    incorrectas: [
      "Los datos existen sin instrumentos ni marcos",
      "Toda observación es neutral e idéntica para cualquiera"
    ]
  },
  {
    enunciado: "¿Qué buena práctica fomenta la integridad científica?",
    correcta: "Registro abierto de protocolos, datos y código cuando sea posible",
    incorrectas: [
      "Publicación selectiva solo de resultados positivos",
      "Cambiar hipótesis tras ver los datos sin declararlo (HARKing)"
    ]
  },
  {
    enunciado: "¿Qué relación se busca entre ciencia y ciudadanía democrática?",
    correcta: "Decisiones informadas basadas en evidencias y deliberación pública",
    incorrectas: [
      "Tecnocracia opaca sin rendición de cuentas",
      "Desinformación como estrategia política"
    ]
  },
  {
    enunciado: "¿Qué distingue una pseudociencia de la ciencia?",
    correcta: "Inmunización frente a refutaciones y falta de métodos de contraste",
    incorrectas: [
      "Uso de lenguaje técnico y gráficos",
      "Popularidad mediática del tema"
    ]
  },
  {
    enunciado: "¿Qué práctica ayuda a reducir sesgos de publicación?",
    correcta: "Pre-registro de hipótesis, variables y análisis",
    incorrectas: [
      "Ajustar análisis hasta obtener significación",
      "Excluir datos sin criterio explícito"
    ]
  },
  {
    enunciado: "¿Qué justifica el uso de incertidumbre en informes científicos?",
    correcta: "Comunicar el grado de confianza y los límites de la inferencia",
    incorrectas: [
      "Restar credibilidad por principio",
      "Evitar que se tomen decisiones"
    ]
  },
  {
    enunciado: "En el aula, ¿qué actitud conviene promover para alfabetización científica?",
    correcta: "Curiosidad, cooperación, argumentación con datos y revisión de ideas",
    incorrectas: [
      "Memorización acrítica de definiciones",
      "Competencia sin discusión ni evidencias"
    ]
  },
  {
    enunciado: "¿Qué muestra la historia de la ciencia sobre el progreso del conocimiento?",
    correcta: "Avanza con acumulación, revisiones profundas y ocasionales revoluciones",
    incorrectas: [
      "Progresa solo por consenso político",
      "Es un camino lineal sin retrocesos"
    ]
  },
  {
    enunciado: "¿Qué condición hace robusta una explicación científica en Biología o Geología?",
    correcta: "Que integre múltiples líneas de evidencia independientes",
    incorrectas: [
      "Que dependa de un único estudio irrepetible",
      "Que solo se base en autoridad"
    ]
  },
  {
    enunciado: "¿Qué principio práctico aplicar ante afirmaciones extraordinarias?",
    correcta: "Exigir evidencia proporcionalmente fuerte antes de aceptarlas",
    incorrectas: [
      "Aceptar por anécdotas o intuición",
      "Descartar toda contrastación"
    ]
  }
];
