// temarios/27-Nacimiento-y-expansion-del-islam.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué hecho marca convencionalmente el inicio del calendario islámico (Hégira)?",
    correcta: "La emigración de Mahoma y la primera comunidad a Medina en 622",
    incorrectas: [
      "La conquista de La Meca en 630",
      "La muerte de Mahoma en 632"
    ]
  },
  {
    enunciado: "¿Cuál es la fuente doctrinal primaria del Islam para la fe y la práctica?",
    correcta: "El Corán",
    incorrectas: [
      "La Torá",
      "El Nuevo Testamento"
    ]
  },
  {
    enunciado: "¿Qué conjunto de prácticas y dichos del Profeta complementa al Corán en la normativa islámica?",
    correcta: "La Sunna recogida en los hadices",
    incorrectas: [
      "La Mishná",
      "Los Vedas"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes NO es uno de los cinco pilares del Islam?",
    correcta: "La peregrinación anual obligatoria a Jerusalén",
    incorrectas: [
      "La profesión de fe (shahada)",
      "El ayuno en Ramadán (sawm)"
    ]
  },
  {
    enunciado: "¿Qué ciudad era el principal centro religioso y comercial de Arabia antes del Islam?",
    correcta: "La Meca",
    incorrectas: [
      "Damasco",
      "Bagdad"
    ]
  },
  {
    enunciado: "¿Cómo se denomina la comunidad de creyentes que, en el Islam, integra dimensión espiritual y política?",
    correcta: "Umma",
    incorrectas: [
      "Sinagoga",
      "Ekklesía"
    ]
  },
  {
    enunciado: "¿Qué grupo dirige el mundo islámico inmediatamente tras la muerte de Mahoma en 632?",
    correcta: "Los cuatro califas bien guiados (Rashidun)",
    incorrectas: [
      "Los abasíes desde Bagdad",
      "Los omeyas desde Córdoba"
    ]
  },
  {
    enunciado: "¿Qué batallas facilitaron la expansión inicial sobre imperios vecinos en el siglo VII?",
    correcta: "Yarmuk contra Bizancio y Qadisiyya contra Persia",
    incorrectas: [
      "Poitiers y Hastings",
      "Lepanto y Manzikert"
    ]
  },
  {
    enunciado: "¿Qué dinastía fijó su capital en Damasco y extendió el imperio hasta Hispania y Asia Central?",
    correcta: "Los omeyas (661–750)",
    incorrectas: [
      "Los fatimíes",
      "Los almorávides"
    ]
  },
  {
    enunciado: "¿Qué dinastía instauró su capital en Bagdad y encabezó un amplio florecimiento cultural?",
    correcta: "Los abasíes (750–1258)",
    incorrectas: [
      "Los ayubíes",
      "Los gaznavíes"
    ]
  },
  {
    enunciado: "¿Qué institución administrativa registraba tropas y pagos en la temprana organización califal?",
    correcta: "El dīwān",
    incorrectas: [
      "La curia",
      "La intendencia feudal"
    ]
  },
  {
    enunciado: "¿Cómo se denomina el impuesto personal pagado por los no musulmanes protegidos (dhimmíes)?",
    correcta: "Yizia (jizya)",
    incorrectas: [
      "Zakāt",
      "Jums"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento permitió la difusión del papel en el mundo islámico y revolucionó la administración del saber?",
    correcta: "La adopción del papel tras su llegada desde Asia central en el siglo VIII",
    incorrectas: [
      "La invención del pergamino en al‑Ándalus en el siglo X",
      "La imprenta de tipos móviles en Bagdad en el siglo IX"
    ]
  },
  {
    enunciado: "¿Qué escuela jurídica NO pertenece al sunnismo clásico?",
    correcta: "Ya'farí",
    incorrectas: [
      "Hanafí",
      "Malikí"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica dio origen a la división sunní‑chií?",
    correcta: "El desacuerdo sobre la sucesión legítima del liderazgo tras Mahoma",
    incorrectas: [
      "Una disputa sobre la autenticidad del Corán",
      "La negación de la peregrinación a La Meca"
    ]
  },
  {
    enunciado: "¿Qué figura y documento articularon la convivencia de clanes en Medina al inicio del Islam?",
    correcta: "Mahoma y la llamada 'Constitución de Medina'",
    incorrectas: [
      "Omar y la 'Carta de Jerusalén'",
      "Alí y el 'Pacto de Najrān'"
    ]
  },
  {
    enunciado: "¿Qué batalla del 624 consolidó a la comunidad de Medina frente a sus adversarios mequíes?",
    correcta: "Badr",
    incorrectas: [
      "Uhud",
      "Jamal"
    ]
  },
  {
    enunciado: "¿Qué edificio sagrado alberga la Kaaba, meta de la peregrinación islámica?",
    correcta: "La Gran Mezquita de La Meca",
    incorrectas: [
      "La Mezquita de Damasco",
      "La Mezquita de Córdoba"
    ]
  },
  {
    enunciado: "¿Qué componentes arquitectónicos son característicos de una mezquita mayor?",
    correcta: "Mihrab, minbar y alminar (minarete)",
    incorrectas: [
      "Ábside, girola y triforio",
      "Nártex, baptisterio y retablo"
    ]
  },
  {
    enunciado: "¿Qué ruta comercial fue estratégica para conectar el mundo islámico con África subsahariana?",
    correcta: "Las rutas transaharianas de oro y sal",
    incorrectas: [
      "La ruta báltica del ámbar",
      "El Camino de la Seda marítimo exclusivo de China medieval"
    ]
  },
  {
    enunciado: "¿Quién fundó el Emirato independiente de Córdoba en 756 tras la caída omeya en Oriente?",
    correcta: "ʿAbd al‑Raḥmān I",
    incorrectas: [
      "Almanzor",
      "Muʿāwiya I"
    ]
  },
  {
    enunciado: "¿Qué califa proclamó el Califato de Córdoba en 929, elevando el rango político de al‑Ándalus?",
    correcta: "ʿAbd al‑Raḥmān III",
    incorrectas: [
      "Hisham II",
      "Al‑Ḥakam II"
    ]
  },
  {
    enunciado: "¿Cuál fue un centro intelectual señero del mundo abasí donde se tradujeron obras griegas y persas?",
    correcta: "La Casa de la Sabiduría (Bayt al‑Ḥikma) en Bagdad",
    incorrectas: [
      "La Biblioteca de Alejandría helenística en su apogeo",
      "La Universidad de Bolonia medieval"
    ]
  },
  {
    enunciado: "¿Qué autor desarrolló el álgebra en el siglo IX dentro del ámbito abasí?",
    correcta: "Al‑Juarismi",
    incorrectas: [
      "Averroes (Ibn Rushd)",
      "Ibn Ḥazm"
    ]
  },
  {
    enunciado: "¿Qué pensador andalusí es clave para la recepción de Aristóteles en Occidente medieval?",
    correcta: "Averroes (Ibn Rushd)",
    incorrectas: [
      "Ibn Jaldún",
      "Ibn Battuta"
    ]
  },
  {
    enunciado: "¿Qué obra geográfica del siglo XII, elaborada en Sicilia, recoge un mapa del mundo islámico y cristiano?",
    correcta: "El 'Libro de Roger' de al‑Idrīsī",
    incorrectas: [
      "La 'Geografía' de Ptolomeo (siglo II)",
      "El 'Imago Mundi' de Honorio de Autun"
    ]
  },
  {
    enunciado: "¿Qué elemento favoreció el comercio del Océano Índico en época islámica?",
    correcta: "El aprovechamiento de los monzones para la navegación",
    incorrectas: [
      "La propulsión a vapor en navíos mercantes",
      "El astrolabio magnético de precisión cuántica"
    ]
  },
  {
    enunciado: "¿Qué estatuto protegía a judíos y cristianos como 'gentes del Libro' en dominios islámicos?",
    correcta: "La dhimma, con derechos y obligaciones específicos",
    incorrectas: [
      "El edicto de expulsión",
      "La ciudadanía plena automática"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento frenó el avance omeya al norte de los Pirineos en 732?",
    correcta: "La batalla de Poitiers o Tours",
    incorrectas: [
      "La batalla de Las Navas de Tolosa",
      "La batalla de Manzikert"
    ]
  },
  {
    enunciado: "¿Qué disciplina médica alcanzó gran desarrollo con figuras como al‑Rāzī (Rhazes) y Avicena (Ibn Sīnā)?",
    correcta: "La medicina clínica y la farmacopea",
    incorrectas: [
      "La cirugía cardiovascular moderna",
      "La anestesia inhalatoria de laboratorio"
    ]
  },
  {
    enunciado: "¿Qué corriente espiritual islámica enfatiza la experiencia interior y las prácticas de perfeccionamiento del alma?",
    correcta: "El sufismo",
    incorrectas: [
      "El estoicismo",
      "El maniqueísmo"
    ]
  },
  {
    enunciado: "¿Cuál fue una capital omeya monumental en Siria con gran mezquita y palacio?",
    correcta: "Damasco",
    incorrectas: [
      "Samarcanda",
      "El Cairo fatimí"
    ]
  },
  {
    enunciado: "¿Qué instituciones educativas se consolidaron desde el siglo XI para el estudio del derecho y la teología?",
    correcta: "Las madrasas",
    incorrectas: [
      "Los liceos romanos",
      "Las logias gremiales de mercaderes"
    ]
  },
  {
    enunciado: "¿Qué término designa la ley islámica derivada de las fuentes reveladas e interpretaciones jurídicas?",
    correcta: "Sharía",
    incorrectas: [
      "Halajá",
      "Canon law"
    ]
  },
  {
    enunciado: "¿Qué figura judicial aplicaba el derecho islámico en las ciudades y provincias?",
    correcta: "El cadí (qāḍī)",
    incorrectas: [
      "El legado pontificio",
      "El procónsul"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracteriza la expansión inicial del Islam en el siglo VII‑VIII?",
    correcta: "Una combinación de negociación, pactos y campañas militares",
    incorrectas: [
      "La anulación de toda diversidad lingüística",
      "La conversión forzosa universal e inmediata"
    ]
  },
  {
    enunciado: "¿Qué elemento arquitectónico singular de al‑Ándalus testimonia la madurez artística andalusí?",
    correcta: "La ampliación omeya y califal de la Mezquita de Córdoba",
    incorrectas: [
      "La cúpula de Santa Sofía bizantina",
      "La Torre de Londres normanda"
    ]
  },
  {
    enunciado: "¿Qué obra histórica del siglo XIV interpreta cíclicamente el auge y declive de poderes?",
    correcta: "La 'Muqaddima' de Ibn Jaldún",
    incorrectas: [
      "El 'Kitāb al‑Aghānī'",
      "La 'Crónica de Alfonso X'"
    ]
  },
  {
    enunciado: "¿Qué relación mantuvo el Islam con los saberes antiguos grecolatinos?",
    correcta: "Traducción, asimilación y desarrollo crítico de filosofía y ciencias",
    incorrectas: [
      "Destrucción sistemática de bibliotecas clásicas",
      "Sustitución del árabe por el latín en todo el Imperio"
    ]
  },
  {
    enunciado: "¿Qué figura recuperó Jerusalén para el Islam en 1187, en el contexto de las cruzadas?",
    correcta: "Ṣalāḥ al‑Dīn (Saladino)",
    incorrectas: [
      "Tamerlán",
      "Bāyazid I"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes afirmaciones resume mejor el impacto del Islam en la Edad Media?",
    correcta: "Impulsó redes comerciales y centros de saber que conectaron continentes",
    incorrectas: [
      "Aisló las rutas mediterráneas y frenó toda transmisión cultural",
      "Sustituyó completamente las culturas locales por una única tradición"
    ]
  }
];
