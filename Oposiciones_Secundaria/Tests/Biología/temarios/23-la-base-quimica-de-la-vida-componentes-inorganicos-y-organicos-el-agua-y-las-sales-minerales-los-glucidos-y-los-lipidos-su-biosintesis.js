// temarios/23-la-base-quimica-de-la-vida-componentes-inorganicos-y-organicos-el-agua-y-las-sales-minerales-los-glucidos-y-los-lipidos-su-biosintesis.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuáles son los bioelementos primarios más abundantes en la materia viva?",
    correcta: "C, H, O y N",
    incorrectas: [
      "Na, K, Ca y Cl",
      "Fe, Zn, Cu y Mn"
    ]
  },
  {
    enunciado: "¿Qué propiedad del agua se relaciona directamente con su elevada capacidad para moderar la temperatura?",
    correcta: "Alto calor específico y de vaporización",
    incorrectas: [
      "Baja tensión superficial",
      "Menor densidad a 4 °C que a 0 °C"
    ]
  },
  {
    enunciado: "La máxima densidad del agua a 4 °C es importante porque…",
    correcta: "Favorece que las masas de agua no se congelen desde el fondo en climas fríos",
    incorrectas: [
      "Disminuye la presión osmótica intracelular",
      "Aumenta la constante dieléctrica del vacío"
    ]
  },
  {
    enunciado: "¿Cuál es el principal efecto del 'efecto hidrofóbico' en biología?",
    correcta: "Impulsar el autoensamblaje de bicapas y el plegamiento proteico",
    incorrectas: [
      "Hidratar preferentemente grupos polares",
      "Romper enlaces peptídicos por hidrólisis"
    ]
  },
  {
    enunciado: "Un sistema tampón eficaz alrededor de pH 7 en el citosol suele implicar…",
    correcta: "El par fosfato diácido/monohidrogenofosfato",
    incorrectas: [
      "Ácido clorhídrico/hipoclorito",
      "Ácido acético/acetato con pKa 9,8"
    ]
  },
  {
    enunciado: "¿Qué función iónica está correctamente emparejada?",
    correcta: "Ca²⁺: señalización intracelular y coagulación",
    incorrectas: [
      "Na⁺: cofactor de ATP enzimático universal",
      "Fe³⁺: tampón fosfato citosólico"
    ]
  },
  {
    enunciado: "Las sales minerales precipitadas cumplen sobre todo funciones…",
    correcta: "Estructurales (hueso, diente) y de depósito",
    incorrectas: [
      "Exclusivamente catalíticas enzimáticas",
      "De transporte activo a través de la membrana"
    ]
  },
  {
    enunciado: "Respecto a monosacáridos, la diferencia entre formas α y β se debe a…",
    correcta: "La orientación del grupo anomérico en el carbono hemiacetal",
    incorrectas: [
      "El número de carbonos de la molécula",
      "La presencia de grupos fosfato obligatoria"
    ]
  },
  {
    enunciado: "¿Cuál es el enlace característico de la celulosa?",
    correcta: "β(1→4) entre glucosas",
    incorrectas: [
      "α(1→4) entre glucosas",
      "α(1→6) exclusivamente"
    ]
  },
  {
    enunciado: "El glucógeno se diferencia del almidón por…",
    correcta: "Mayor grado de ramificación (enlaces α(1→6) más frecuentes)",
    incorrectas: [
      "Ser un homopolisacárido de fructosa",
      "Presentar enlaces β(1→4) predominantes"
    ]
  },
  {
    enunciado: "Un disacárido con enlace α(1→2) entre glucosa y fructosa es…",
    correcta: "Sacarosa",
    incorrectas: [
      "Lactosa",
      "Maltosa"
    ]
  },
  {
    enunciado: "¿Qué función NO es típica de los glúcidos?",
    correcta: "Cofactor metálico catalítico",
    incorrectas: [
      "Reserva energética y combustible",
      "Estructural (celulosa, quitina)"
    ]
  },
  {
    enunciado: "Los triacilglicéridos destacan como reserva porque…",
    correcta: "Almacenan mucha energía por gramo y son anhidros",
    incorrectas: [
      "Forman bicapas de membrana por sí solos",
      "Tienen carga neta negativa a pH fisiológico"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un lípido anfipático clave de membrana?",
    correcta: "Fosfatidilcolina",
    incorrectas: [
      "Triacilglicérido",
      "Colágeno"
    ]
  },
  {
    enunciado: "El colesterol en membranas celulares…",
    correcta: "Modula la fluidez y reduce la permeabilidad a solutos pequeños",
    incorrectas: [
      "Rompe la bicapa formando poros permanentes",
      "Es imprescindible en mitocondrias bacterianas"
    ]
  },
  {
    enunciado: "Los ácidos grasos ω-3 de cadena larga (EPA/DHA) son relevantes por…",
    correcta: "Su papel en membranas neuronales y señalización eicosanoide",
    incorrectas: [
      "Ser los únicos lípidos que forman micelas",
      "Aportar fósforo al ciclo de Calvin"
    ]
  },
  {
    enunciado: "En plantas, la fuente primaria de glúcidos procede de…",
    correcta: "La fijación de CO₂ en el ciclo de Calvin-Benson",
    incorrectas: [
      "La gluconeogénesis hepática",
      "La β-oxidación peroxisomal"
    ]
  },
  {
    enunciado: "¿Qué enzima fija CO₂ en el ciclo de Calvin?",
    correcta: "RuBisCO",
    incorrectas: [
      "PEP carboxilasa (propia de C₄/CAM en etapa previa)",
      "ATP sintasa"
    ]
  },
  {
    enunciado: "En animales, la síntesis neta de glucosa a partir de lactato se denomina…",
    correcta: "Gluconeogénesis",
    incorrectas: [
      "Glucogenólisis",
      "Fermentación alcohólica"
    ]
  },
  {
    enunciado: "Una enzima irreversibile de la gluconeogénesis es…",
    correcta: "Fructosa-1,6-bisfosfatasa",
    incorrectas: [
      "Fosfofructoquinasa-1 (PFK-1)",
      "Hexoquinasa"
    ]
  },
  {
    enunciado: "La vía de las pentosas fosfato produce principalmente…",
    correcta: "NADPH y ribosa-5-fosfato",
    incorrectas: [
      "FADH₂ y acetil-CoA",
      "ATP y citrato"
    ]
  },
  {
    enunciado: "La síntesis de ácidos grasos (de novo) comienza con…",
    correcta: "Carboxilación de acetil-CoA a malonil-CoA (ACC)",
    incorrectas: [
      "Descarboxilación de malato a piruvato",
      "β-oxidación mitocondrial"
    ]
  },
  {
    enunciado: "El complejo ácido graso sintasa (FAS) utiliza como poder reductor…",
    correcta: "NADPH",
    incorrectas: [
      "NADH exclusivamente",
      "FADH₂ exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué molécula inhibe la entrada de acil-CoA a la mitocondria coordinando síntesis vs oxidación?",
    correcta: "Malonil-CoA (inhibición de CPT-I)",
    incorrectas: [
      "Carnitina",
      "Ubiquinona"
    ]
  },
  {
    enunciado: "La síntesis de triacilglicéridos sigue la secuencia…",
    correcta: "Glicerol-3-P → ácido fosfatídico → DAG → TAG",
    incorrectas: [
      "Glicerol-3-P → DAG → ácido fosfatídico → TAG",
      "DAG → glicerol-3-P → TAG → ácido fosfatídico"
    ]
  },
  {
    enunciado: "La regulación hormonal que favorece lipogénesis y glucogénesis es…",
    correcta: "Insulina",
    incorrectas: [
      "Glucagón",
      "Adrenalina en ayuno"
    ]
  },
  {
    enunciado: "¿Qué factor energético celular inhibe la acetil-CoA carboxilasa (ACC)?",
    correcta: "Fosforilación mediada por AMPK (alto AMP)",
    incorrectas: [
      "Citrato citosólico (la activa)",
      "ADP-ribosilación por PARP"
    ]
  },
  {
    enunciado: "Una consecuencia de aumentar dobles enlaces cis en fosfolípidos es…",
    correcta: "Mayor fluidez de membrana a una temperatura dada",
    incorrectas: [
      "Menor permeabilidad al agua",
      "Cristalización de la bicapa a 37 °C"
    ]
  },
  {
    enunciado: "¿Qué define a un lípido como anfipático?",
    correcta: "Poseer regiones hidrofóbicas e hidrofílicas en la misma molécula",
    incorrectas: [
      "Ser totalmente insoluble en disolventes apolares",
      "Tener carga positiva neta a todo pH"
    ]
  },
  {
    enunciado: "Los fosfoinosítidos (ej. PIP2) son importantes porque…",
    correcta: "Generan segundos mensajeros (IP3 y DAG) tras la acción de fosfolipasa C",
    incorrectas: [
      "Se usan únicamente como combustibles",
      "Forman fibras estructurales extracelulares"
    ]
  },
  {
    enunciado: "La sacarosa en plantas actúa principalmente como…",
    correcta: "Forma de transporte de carbono entre órganos",
    incorrectas: [
      "Polímero de reserva en plastidios",
      "Coenzima oxidada"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal hay entre amilosa y amilopectina?",
    correcta: "La amilosa es lineal (α1→4) y la amilopectina está ramificada (α1→6)",
    incorrectas: [
      "Amilosa posee enlaces β y amilopectina enlaces α",
      "Amilopectina es un disacárido"
    ]
  },
  {
    enunciado: "¿Qué afirma correctamente sobre la lactosa?",
    correcta: "Es un disacárido de glucosa y galactosa con enlace β(1→4)",
    incorrectas: [
      "Es glucosa+fructosa α(1→2)",
      "Es un monosacárido cetosa"
    ]
  },
  {
    enunciado: "El glicerol-3-fosfato para la síntesis de TAG en hígado puede derivar de…",
    correcta: "La reducción de dihidroxiacetona fosfato (DHAP)",
    incorrectas: [
      "La descarboxilación de oxaloacetato a acetona",
      "La oxidación de NADPH a NADP⁺ en mitocondria"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes NO es un lípido complejo de membrana?",
    correcta: "Triacilglicérido",
    incorrectas: [
      "Fosfatidiletanolamina",
      "Esfingomielina"
    ]
  },
  {
    enunciado: "Los esteroles e isoprenoides se sintetizan a partir de…",
    correcta: "La vía del mevalonato (acetil-CoA → HMG-CoA → mevalonato)",
    incorrectas: [
      "La vía de Embden-Meyerhof directamente",
      "La β-oxidación"
    ]
  },
  {
    enunciado: "En condiciones de ayuno, el glucagón tiende a…",
    correcta: "Activar glucogenólisis y lipólisis, e inhibir la lipogénesis",
    incorrectas: [
      "Estimular síntesis de ácidos grasos en tejido adiposo",
      "Aumentar la síntesis de glucógeno en hígado"
    ]
  },
  {
    enunciado: "La función del NADPH en biosíntesis de lípidos es…",
    correcta: "Aportar poder reductor para las reacciones de FAS y desaturasas",
    incorrectas: [
      "Transportar electrones a la cadena respiratoria para generar ATP",
      "Actuar como aceptor final de electrones en mitocondria"
    ]
  }
];
