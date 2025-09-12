// temarios/13-Los-limites-del-conocimiento-humano-y-el-problema-de-lo-irracional.js
var PREGUNTAS = [
  {
    enunciado: "El conocimiento humano está limitado por las capacidades de la razón y por la estructura del mundo.",
    correcta: "Verdadero.",
    incorrectas: [
      "Falso, el conocimiento humano es ilimitado y sin fronteras.",
      "Falso, el conocimiento humano depende únicamente de la fe religiosa."
    ]
  },
  {
    enunciado: "Lo irracional puede entenderse como aquello inaccesible a la razón o contradictorio con ella.",
    correcta: "Lo irracional es lo que excede o contradice los principios de la razón.",
    incorrectas: [
      "Lo irracional es siempre sinónimo de absurdo vulgar.",
      "Lo irracional es todo lo que no puede ser percibido por los sentidos."
    ]
  },
  {
    enunciado: "En la filosofía moderna, los límites del conocimiento se entienden como internos a la propia razón.",
    correcta: "La razón se autoanaliza y reconoce sus propias limitaciones.",
    incorrectas: [
      "Los límites se entienden únicamente como externos impuestos por la sociedad.",
      "La filosofía moderna rechaza toda idea de límite al conocimiento."
    ]
  },
  {
    enunciado: "Descartes abordó los límites del conocimiento a través de la duda metódica.",
    correcta: "Descartes utilizó la duda para alcanzar certezas indudables como el cogito.",
    incorrectas: [
      "Descartes sostuvo que la razón es incapaz de alcanzar ninguna certeza.",
      "Descartes identificó la verdad con la fe sin pasar por la duda."
    ]
  },
  {
    enunciado: "Kant subrayó la distinción entre fenómeno y noúmeno para explicar los límites del conocimiento.",
    correcta: "El ser humano solo puede conocer fenómenos y no la cosa en sí.",
    incorrectas: [
      "El ser humano conoce directamente el noúmeno sin restricciones.",
      "Fenómeno y noúmeno son términos intercambiables sin distinción."
    ]
  },
  {
    enunciado: "Hume vinculó los límites del conocimiento con la imposibilidad de justificar la causalidad necesaria.",
    correcta: "La causalidad es un hábito psicológico derivado de la costumbre.",
    incorrectas: [
      "La causalidad es un principio a priori innato en el ser humano.",
      "La causalidad se demuestra con un único experimento concluyente."
    ]
  },
  {
    enunciado: "Schopenhauer identificó lo irracional con la Voluntad como esencia del mundo.",
    correcta: "La Voluntad es un principio ciego e irracional que se manifiesta en la naturaleza.",
    incorrectas: [
      "La Voluntad es la razón pura que organiza la ciencia.",
      "La Voluntad es la suma de percepciones empíricas."
    ]
  },
  {
    enunciado: "Nietzsche vinculó lo irracional con la vida, la voluntad de poder y el perspectivismo.",
    correcta: "Lo irracional aparece como fuerza vital más allá de la lógica conceptual.",
    incorrectas: [
      "Nietzsche defendió que todo se explica con leyes racionales universales.",
      "Nietzsche sostuvo que la vida es siempre lógica y sistemática."
    ]
  },
  {
    enunciado: "En la Edad Media, los límites del conocimiento se concebían más en relación con la trascendencia divina.",
    correcta: "El conocimiento humano se entendía subordinado a la revelación y la fe.",
    incorrectas: [
      "Los límites se concebían como simples errores de cálculo matemático.",
      "Se pensaba que el conocimiento humano era absoluto e ilimitado."
    ]
  },
  {
    enunciado: "El arte y la fe han sido considerados ámbitos de lo irracional en la historia del pensamiento.",
    correcta: "Son experiencias que trascienden o no se ajustan plenamente a la lógica formal.",
    incorrectas: [
      "El arte y la fe son siempre demostrables mediante silogismos matemáticos.",
      "El arte y la fe son sinónimos exactos de conocimiento científico."
    ]
  },
  {
    enunciado: "La irracionalidad puede significar tanto límite de la razón como contradicción lógica.",
    correcta: "Lo irracional puede ser inaccesible o incompatible con la razón.",
    incorrectas: [
      "Lo irracional siempre coincide con lo falso y lo erróneo.",
      "Lo irracional se identifica con todo lo desconocido científicamente."
    ]
  },
  {
    enunciado: "El empirismo defendió que los límites del conocimiento se encuentran en la experiencia.",
    correcta: "Todo conocimiento procede de la experiencia sensible.",
    incorrectas: [
      "El empirismo defendió la existencia de verdades innatas absolutas.",
      "El empirismo identificó la fe con la única fuente de conocimiento."
    ]
  },
  {
    enunciado: "El racionalismo clásico tendió a confiar en la capacidad ilimitada de la razón.",
    correcta: "La razón podía alcanzar verdades universales y necesarias.",
    incorrectas: [
      "El racionalismo negó el papel de la razón en el conocimiento.",
      "El racionalismo redujo la razón a un hábito psicológico."
    ]
  },
  {
    enunciado: "En la cultura contemporánea, la tensión entre racionalidad e irracionalidad sigue presente.",
    correcta: "Se manifiesta en debates sobre ciencia, religión, arte y filosofía.",
    incorrectas: [
      "Se ha resuelto en favor de la eliminación total de lo irracional.",
      "Se limita solo al ámbito de las matemáticas y la física."
    ]
  },
  {
    enunciado: "La ciencia moderna reconoce la existencia de límites epistemológicos y ontológicos.",
    correcta: "Existen realidades incognoscibles y barreras metodológicas insuperables.",
    incorrectas: [
      "La ciencia moderna afirma conocer absolutamente todo lo real.",
      "Los límites de la ciencia se reducen a problemas económicos."
    ]
  },
  {
    enunciado: "La noción de lo incognoscible aparece vinculada al reconocimiento de límites cognitivos.",
    correcta: "Hay aspectos de la realidad que escapan definitivamente al conocimiento humano.",
    incorrectas: [
      "Todo lo real es siempre plenamente cognoscible.",
      "Lo incognoscible es un mito sin base filosófica."
    ]
  },
  {
    enunciado: "El irracionalismo filosófico valora positivamente lo irracional frente a la razón.",
    correcta: "Algunos autores sostienen que la vida se comprende mejor más allá de la razón.",
    incorrectas: [
      "El irracionalismo defiende que la razón es siempre superior a todo.",
      "El irracionalismo se identifica con el positivismo lógico."
    ]
  },
  {
    enunciado: "El absurdo puede considerarse una forma de irracionalidad en filosofía contemporánea.",
    correcta: "El absurdo expresa la falta de sentido ante la existencia humana.",
    incorrectas: [
      "El absurdo es un principio lógico universalmente válido.",
      "El absurdo es un axioma matemático reconocido."
    ]
  },
  {
    enunciado: "La mística ha sido vista como ámbito que supera los límites de la razón.",
    correcta: "La experiencia mística se entiende como conocimiento inefable y no racional.",
    incorrectas: [
      "La mística se explica como deducción lógica estricta.",
      "La mística es una ciencia experimental verificable."
    ]
  },
  {
    enunciado: "La magia y lo sobrenatural han sido considerados históricamente formas de lo irracional.",
    correcta: "Son prácticas ajenas a la lógica formal y a la explicación científica.",
    incorrectas: [
      "Son expresiones rigurosas de la lógica matemática.",
      "Son paradigmas universales de conocimiento racional."
    ]
  },
  {
    enunciado: "La filosofía contemporánea ha tematizado los límites del lenguaje como límites del conocimiento.",
    correcta: "Wittgenstein señaló que los límites del lenguaje son los límites del mundo.",
    incorrectas: [
      "Wittgenstein afirmó que el lenguaje carece de límites.",
      "Wittgenstein identificó lenguaje y ciencia exacta sin más."
    ]
  },
  {
    enunciado: "Kierkegaard vinculó lo irracional con la fe como salto cualitativo.",
    correcta: "La fe es un acto que trasciende la razón objetiva.",
    incorrectas: [
      "La fe se identifica con la razón lógica universal.",
      "La fe se reduce a un cálculo racional de probabilidades."
    ]
  },
  {
    enunciado: "La filosofía de la existencia acentuó los límites de la razón para comprender la vida humana.",
    correcta: "Señaló la insuficiencia de la razón para captar la totalidad de la existencia.",
    incorrectas: [
      "Identificó razón y vida como sinónimos absolutos.",
      "Negó la existencia de límites en la experiencia humana."
    ]
  },
  {
    enunciado: "Freud exploró lo irracional en el ámbito del inconsciente.",
    correcta: "El inconsciente contiene fuerzas no gobernadas por la razón consciente.",
    incorrectas: [
      "El inconsciente es siempre completamente racional.",
      "El inconsciente es idéntico a la lógica matemática."
    ]
  },
  {
    enunciado: "El romanticismo valoró lo irracional como vía de acceso a la verdad estética.",
    correcta: "El arte y la emoción se colocaron por encima de la razón discursiva.",
    incorrectas: [
      "El romanticismo identificó la razón con la única forma de belleza.",
      "El romanticismo negó la existencia de emociones en la vida."
    ]
  },
  {
    enunciado: "En el siglo XX, algunos pensadores como Adorno analizaron lo irracional en la sociedad.",
    correcta: "La irracionalidad puede institucionalizarse en la cultura y la política.",
    incorrectas: [
      "Adorno defendió la absoluta racionalidad de todas las sociedades modernas.",
      "Adorno redujo lo irracional a un error matemático."
    ]
  },
  {
    enunciado: "El límite del conocimiento se expresa también en la imposibilidad de conocer el sentido último del mundo.",
    correcta: "El ser humano no puede acceder a un conocimiento absoluto y definitivo.",
    incorrectas: [
      "El sentido último es plenamente demostrable por la ciencia natural.",
      "El ser humano conoce de manera exhaustiva todo lo real."
    ]
  },
  {
    enunciado: "La crítica posmoderna pone en cuestión la idea de una racionalidad universal.",
    correcta: "Se sostiene la pluralidad de racionalidades y la imposibilidad de un fundamento único.",
    incorrectas: [
      "Afirma la existencia de una única razón universal indiscutible.",
      "Identifica racionalidad y dogma religioso sin matices."
    ]
  },
  {
    enunciado: "El agnosticismo reconoce los límites del conocimiento humano frente a lo absoluto.",
    correcta: "Afirma que no podemos conocer realidades trascendentes.",
    incorrectas: [
      "Defiende que poseemos un conocimiento total de lo divino.",
      "Niega cualquier límite al entendimiento humano."
    ]
  },
  {
    enunciado: "Lo irracional en la filosofía puede tener un valor positivo como apertura a dimensiones no reductibles.",
    correcta: "Puede interpretarse como acceso a experiencias estéticas o espirituales.",
    incorrectas: [
      "Siempre se interpreta negativamente como error cognitivo.",
      "Se identifica únicamente con contradicciones lógicas."
    ]
  },
  {
    enunciado: "El escepticismo antiguo defendía los límites del conocimiento humano mediante la suspensión del juicio.",
    correcta: "La ataraxia se alcanzaba reconociendo la imposibilidad de un conocimiento absoluto.",
    incorrectas: [
      "El escepticismo afirmaba la existencia de certezas universales.",
      "El escepticismo coincidía con el dogmatismo racionalista."
    ]
  },
  {
    enunciado: "El problema de lo irracional afecta tanto a la epistemología como a la filosofía práctica.",
    correcta: "Incide en cómo entendemos el conocimiento, la ética y la acción humana.",
    incorrectas: [
      "Se limita exclusivamente a la lógica matemática.",
      "Es irrelevante para la ética y la vida práctica."
    ]
  },
  {
    enunciado: "Lo irracional no siempre es sinónimo de lo falso o lo erróneo.",
    correcta: "Puede ser simplemente lo inaccesible a la razón humana.",
    incorrectas: [
      "Todo lo irracional es falso por definición.",
      "Lo irracional es siempre un error de percepción."
    ]
  },
  {
    enunciado: "La filosofía actual considera los límites del conocimiento un tema abierto y en debate.",
    correcta: "Se reconoce la necesidad de reflexionar continuamente sobre nuestras capacidades cognitivas.",
    incorrectas: [
      "Se considera un tema superado y sin interés filosófico.",
      "Se rechaza cualquier análisis de los límites del saber."
    ]
  },
  {
    enunciado: "Comprender los límites del conocimiento permite avanzar con conciencia crítica en ciencia y filosofía.",
    correcta: "Reconocer los límites ayuda a evitar dogmatismos y falsas certezas.",
    incorrectas: [
      "Reconocer los límites impide todo progreso científico.",
      "Reconocer los límites elimina la validez de la filosofía."
    ]
  }
];
