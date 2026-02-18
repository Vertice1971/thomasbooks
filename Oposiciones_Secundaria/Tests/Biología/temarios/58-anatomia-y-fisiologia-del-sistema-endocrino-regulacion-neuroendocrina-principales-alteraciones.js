// temarios/58-anatomia-y-fisiologia-del-sistema-endocrino-regulacion-neuroendocrina-principales-alteraciones.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define al sistema endocrino en el ser humano?",
    correcta: "Un conjunto de glándulas y células que secretan hormonas al torrente sanguíneo para regular funciones del organismo",
    incorrectas: [
      "Una red de neuronas que transmite impulsos mediante sinapsis eléctricas exclusivamente",
      "Un sistema de conductos exocrinos que vierten enzimas al tubo digestivo"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de una hormona?",
    correcta: "Actuar como mensajero químico que modula la actividad de células diana a baja concentración",
    incorrectas: [
      "Servir de sustrato energético inmediato para el músculo esquelético",
      "Formar la matriz estructural de tejidos conectivos"
    ]
  },
  {
    enunciado: "¿Qué eje regula de forma jerárquica múltiples glándulas periféricas?",
    correcta: "El eje hipotálamo–hipófisis–glándulas diana",
    incorrectas: [
      "El eje médula espinal–ganglio dorsal–músculo",
      "El eje tálamo–corteza–cerebelo"
    ]
  },
  {
    enunciado: "¿Qué hormonas libera la neurohipófisis hacia la sangre?",
    correcta: "Vasopresina (ADH) y oxitocina",
    incorrectas: [
      "Prolactina y hormona del crecimiento",
      "TSH y ACTH"
    ]
  },
  {
    enunciado: "¿Qué hormonas sintetiza la adenohipófisis?",
    correcta: "GH, PRL, TSH, ACTH, FSH y LH",
    incorrectas: [
      "ADH y oxitocina",
      "T3 y T4"
    ]
  },
  {
    enunciado: "¿Cuál es la naturaleza química más frecuente de las hormonas hipofisarias tróficas?",
    correcta: "Hormonas peptídicas o proteicas",
    incorrectas: [
      "Hormonas esteroideas derivadas del colesterol",
      "Eicosanoides derivados del ácido araquidónico"
    ]
  },
  {
    enunciado: "¿Qué hormonas tiroideas regulan el metabolismo basal?",
    correcta: "Tiroxina (T4) y triyodotironina (T3)",
    incorrectas: [
      "Calcitonina y parathormona",
      "Insulina y glucagón"
    ]
  },
  {
    enunciado: "¿Qué célula de las paratiroides aumenta el calcio plasmático?",
    correcta: "La célula principal que secreta parathormona",
    incorrectas: [
      "La célula C que secreta calcitonina",
      "El macrófago paratiroideo que libera vitamina D activa"
    ]
  },
  {
    enunciado: "¿Qué zona de la glándula suprarrenal produce glucocorticoides como el cortisol?",
    correcta: "La zona fasciculada de la corteza suprarrenal",
    incorrectas: [
      "La médula suprarrenal",
      "La zona glomerulosa exclusivamente para catecolaminas"
    ]
  },
  {
    enunciado: "¿Qué hormona mineralocorticoide regula el balance de sodio y potasio?",
    correcta: "Aldosterona",
    incorrectas: [
      "Cortisol",
      "Prolactina"
    ]
  },
  {
    enunciado: "¿Qué hormonas secreta la médula suprarrenal ante el estrés agudo?",
    correcta: "Adrenalina y noradrenalina",
    incorrectas: [
      "Cortisol y aldosterona",
      "GH y TSH"
    ]
  },
  {
    enunciado: "¿Qué células pancreáticas producen insulina?",
    correcta: "Las células beta de los islotes de Langerhans",
    incorrectas: [
      "Las células alfa de los islotes",
      "Los acinos exocrinos pancreáticos"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la insulina sobre la glucemia?",
    correcta: "Disminuye la glucemia al facilitar la captación de glucosa y la síntesis de glucógeno",
    incorrectas: [
      "Aumenta la glucemia estimulando la gluconeogénesis hepática",
      "No tiene efecto significativo sobre el metabolismo de la glucosa"
    ]
  },
  {
    enunciado: "¿Qué hormona pancreática eleva la glucemia movilizando reservas?",
    correcta: "Glucagón",
    incorrectas: [
      "Somatostatina",
      "Calcitonina"
    ]
  },
  {
    enunciado: "¿Qué hormonas sexuales producen principalmente los ovarios?",
    correcta: "Estrógenos y progesterona",
    incorrectas: [
      "Testosterona y inhibina B exclusivamente",
      "Prolactina y oxitocina"
    ]
  },
  {
    enunciado: "¿Qué hormona esteroidea predomina en los testículos?",
    correcta: "Testosterona",
    incorrectas: [
      "Progesterona",
      "TSH"
    ]
  },
  {
    enunciado: "¿Qué glándula se asocia a la secreción de melatonina y ritmos circadianos?",
    correcta: "La glándula pineal",
    incorrectas: [
      "La glándula timo",
      "El cuerpo carotídeo"
    ]
  },
  {
    enunciado: "¿Qué describe mejor a una hormona hidrosoluble?",
    correcta: "Se une a receptores de membrana y activa segundos mensajeros intracelulares",
    incorrectas: [
      "Atraviesa la membrana y se une a receptores nucleares regulando la transcripción",
      "Se almacena en tejido adiposo por ser lipofílica y de acción prolongada"
    ]
  },
  {
    enunciado: "¿Qué describe mejor a una hormona liposoluble esteroidea?",
    correcta: "Difunde a través de la membrana y modula la expresión génica vía receptores intracelulares",
    incorrectas: [
      "Activa únicamente canales iónicos dependientes de voltaje",
      "Se inactiva de inmediato en plasma sin transportadores"
    ]
  },
  {
    enunciado: "¿Cuál es el mecanismo de control más habitual en endocrinología?",
    correcta: "La retroalimentación negativa sobre el eje regulador",
    incorrectas: [
      "La retroalimentación positiva sostenida en todos los ejes",
      "La regulación por reflejos medulares sin mediación hormonal"
    ]
  },
  {
    enunciado: "¿Qué ejemplo clásico de retroalimentación positiva existe en fisiología hormonal?",
    correcta: "El pico preovulatorio de LH inducido por estrógenos elevados",
    incorrectas: [
      "La inhibición de TSH por T3 y T4",
      "La supresión de ACTH por cortisol"
    ]
  },
  {
    enunciado: "¿Qué hormonas hipotalámicas regulan a la adenohipófisis?",
    correcta: "Hormonas liberadoras e inhibidoras que viajan por el sistema porta hipofisario",
    incorrectas: [
      "Catecolaminas a través del nervio óptico",
      "Hormonas tiroideas por el líquido cefalorraquídeo"
    ]
  },
  {
    enunciado: "¿Qué componente del sistema nervioso autónomo estimula la médula suprarrenal?",
    correcta: "Las fibras preganglionares simpáticas",
    incorrectas: [
      "Las fibras posganglionares parasimpáticas",
      "Las interneuronas del asta posterior medular"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al hipotiroidismo primario en analítica?",
    correcta: "TSH elevada con T4 libre disminuida",
    incorrectas: [
      "TSH baja con T4 libre alta",
      "TSH y T4 libre normales con T3 elevada de forma aislada"
    ]
  },
  {
    enunciado: "¿Qué cuadro clínico es típico del hipertiroidismo?",
    correcta: "Pérdida de peso con apetito aumentado, taquicardia e intolerancia al calor",
    incorrectas: [
      "Aumento de peso, bradicardia e intolerancia al frío",
      "Edema generalizado con hiperkalemia severa"
    ]
  },
  {
    enunciado: "¿Qué define a la diabetes mellitus tipo 1?",
    correcta: "Destrucción autoinmune de células beta con déficit absoluto de insulina",
    incorrectas: [
      "Resistencia a la insulina con hiperinsulinemia compensadora inicial",
      "Defecto exclusivo en la secreción de glucagón"
    ]
  },
  {
    enunciado: "¿Qué rasgo predomina en la diabetes mellitus tipo 2?",
    correcta: "Resistencia a la insulina en tejidos periféricos con relativo déficit secretor progresivo",
    incorrectas: [
      "Ausencia completa de producción de insulina desde el debut",
      "Hiperfunción tiroidea secundaria"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al síndrome de Cushing endógeno?",
    correcta: "Exceso crónico de cortisol con obesidad centrípeta, estrías y fragilidad cutánea",
    incorrectas: [
      "Déficit de cortisol con hiperpigmentación y adelgazamiento",
      "Hipersecreción de aldosterona con hiperkalemia"
    ]
  },
  {
    enunciado: "¿Qué signo es típico de la enfermedad de Addison?",
    correcta: "Insuficiencia suprarrenal primaria con hiperpigmentación e hipotensión",
    incorrectas: [
      "Hipertensión resistente con alcalosis metabólica",
      "Síndrome nefrótico con proteinuria masiva"
    ]
  },
  {
    enunciado: "¿Qué alteración se asocia a exceso de GH en adultos?",
    correcta: "Acromegalia con crecimiento de partes acras y visceromegalias",
    incorrectas: [
      "Gigantismo con aumento de talla por epífisis abiertas",
      "Enanismo hipofisario con talla baja desde la infancia"
    ]
  },
  {
    enunciado: "¿Qué fenómeno provoca el yodo en exceso sobre la síntesis de hormonas tiroideas?",
    correcta: "Efecto Wolff–Chaikoff con bloqueo transitorio de organificación del yodo",
    incorrectas: [
      "Estimulación permanente de TPO y liberación continua de T3",
      "Conversión acelerada de T4 a T3 por desyodinasas en todos los tejidos"
    ]
  },
  {
    enunciado: "¿Qué describe la resistencia a la insulina?",
    correcta: "Una menor respuesta de los tejidos diana a niveles fisiológicos de insulina",
    incorrectas: [
      "Una secreción exagerada de insulina por células alfa",
      "Una incapacidad del glucagón para unirse a sus receptores hepáticos"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el cortisol en situaciones de estrés prolongado?",
    correcta: "Aumenta la gluconeogénesis, moviliza energía y puede suprimir la respuesta inmune",
    incorrectas: [
      "Disminuye la glucemia y potencia la inflamación aguda",
      "Bloquea la lipólisis y favorece el anabolismo proteico muscular"
    ]
  },
  {
    enunciado: "¿Qué hallazgo analítico sugiere hiperaldosteronismo primario?",
    correcta: "Hipokalemia con alcalosis metabólica e hipertensión arterial",
    incorrectas: [
      "Hiperkalemia con hipotensión y acidosis metabólica",
      "Hipoglucemia con hiperlactatemia"
    ]
  },
  {
    enunciado: "¿Qué evento hormonal facilita la eyección láctea posparto?",
    correcta: "La liberación pulsátil de oxitocina que contrae las células mioepiteliales",
    incorrectas: [
      "La inhibición de prolactina por dopamina",
      "La secreción de TSH que aumenta la síntesis de caseína"
    ]
  },
  {
    enunciado: "¿Qué describe el síndrome metabólico relacionado con endocrinología?",
    correcta: "Un conjunto de factores de riesgo como obesidad central, resistencia a insulina, dislipemia e hipertensión",
    incorrectas: [
      "Una triada de hipocalcemia, tetania y cataratas",
      "Una combinación de hipertiroidismo, bocio y mixedema"
    ]
  },
  {
    enunciado: "¿Qué hormona favorece directamente la reabsorción de agua en el riñón?",
    correcta: "La vasopresina (ADH) actuando en los túbulos colectores",
    incorrectas: [
      "La oxitocina actuando en el asa de Henle",
      "La prolactina actuando en el glomérulo"
    ]
  },
  {
    enunciado: "¿Qué hormona disminuye el calcio plasmático favoreciendo la mineralización ósea?",
    correcta: "La calcitonina secretada por células C tiroideas",
    incorrectas: [
      "La parathormona secretada por paratiroides",
      "La aldosterona secretada por zona reticular"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la señalización por segundos mensajeros como AMPc?",
    correcta: "Una cascada intracelular activada por receptores acoplados a proteínas G",
    incorrectas: [
      "Una dimerización nuclear de receptores esteroideos unidos a ADN",
      "Una fosforilación independiente de receptor traslocado al núcleo"
    ]
  },
  {
    enunciado: "¿Qué intervención de estilo de vida ayuda a prevenir alteraciones endocrinas comunes?",
    correcta: "Alimentación equilibrada y ejercicio regular para reducir resistencia a la insulina y obesidad",
    incorrectas: [
      "Restricción severa de líquidos para mejorar la función tiroidea",
      "Consumo elevado de azúcares simples para estimular la secreción de insulina"
    ]
  }
];
