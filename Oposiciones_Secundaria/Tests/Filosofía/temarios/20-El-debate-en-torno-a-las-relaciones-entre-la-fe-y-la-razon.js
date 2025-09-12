// temarios/20-El-debate-en-torno-a-las-relaciones-entre-la-fe-y-la-razon.js
var PREGUNTAS = [
  {
    enunciado: "En el debate fe–razón, ¿qué se entiende por ‘fe’ en sentido filosófico-teológico?",
    correcta: "Una adhesión confiada a verdades reveladas que comporta dimensión personal y comunitaria",
    incorrectas: [
      "Un estado emocional pasajero sin implicaciones cognitivas",
      "Un hábito meramente estético sin contenido de verdad"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la ‘razón’ en el marco del problema fe–razón?",
    correcta: "La capacidad de investigar, argumentar y fundamentar juicios con pretensión de verdad",
    incorrectas: [
      "La aceptación acrítica de tradiciones por mera costumbre",
      "La sustitución completa del lenguaje por gestos simbólicos"
    ]
  },
  {
    enunciado: "Según la perspectiva agustiniana, ¿cómo se relacionan fe y razón?",
    correcta: "La fe ilumina a la razón y la razón ayuda a comprender más plenamente la fe",
    incorrectas: [
      "La fe y la razón son ámbitos incompatibles que deben separarse de modo absoluto",
      "La razón elimina la necesidad de fe en cualquier asunto humano"
    ]
  },
  {
    enunciado: "¿Qué fórmula resume el programa intelectual de San Agustín?",
    correcta: "Cree para entender y entiende para creer",
    incorrectas: [
      "Duda de todo y no aceptes nada",
      "Obedece para comprender y no cuestiones jamás"
    ]
  },
  {
    enunciado: "¿Qué distingue a Tomás de Aquino respecto a la relación fe–razón?",
    correcta: "La distinción entre verdades accesibles a la razón y verdades reveladas, con armonía última entre ambas",
    incorrectas: [
      "La identificación de toda verdad con la fe, negando el valor de la razón",
      "La supremacía absoluta de la razón que anula la revelación"
    ]
  },
  {
    enunciado: "¿Qué son las ‘preámbulos de la fe’ (praeambula fidei) en Tomás de Aquino?",
    correcta: "Verdades que la razón puede alcanzar y que preparan para acoger las verdades reveladas",
    incorrectas: [
      "Afirmaciones irracionales que contradicen deliberadamente la filosofía",
      "Dogmas que solo se aceptan por autoridad y sin examen racional"
    ]
  },
  {
    enunciado: "¿Qué postura adopta Guillermo de Ockham sobre fe y razón?",
    correcta: "Sostiene una separación más estricta entre los ámbitos de la fe y la razón",
    incorrectas: [
      "Propone que la razón subsuma por completo a la fe en un sistema único",
      "Afirma que la fe puede demostrarse geométricamente como un teorema"
    ]
  },
  {
    enunciado: "¿Qué rasgo define al fideísmo?",
    correcta: "La primacía de la fe y el escepticismo sobre la capacidad de la razón para alcanzar la verdad religiosa",
    incorrectas: [
      "La equiparación de fe y ciencia como métodos idénticos",
      "La negación de toda forma de creencia religiosa"
    ]
  },
  {
    enunciado: "¿Qué rasgo define, en sentido amplio, al racionalismo en este debate?",
    correcta: "La confianza en la razón como criterio último de verdad, recelando de los dogmas revelados",
    incorrectas: [
      "La identificación entre verdad y consenso social inmediato",
      "La reducción de la razón a emoción estética"
    ]
  },
  {
    enunciado: "¿Qué idea central defiende Descartes respecto a la autonomía de la razón?",
    correcta: "La razón, mediante el método, debe proceder con evidencia y claridad distintas de la autoridad tradicional",
    incorrectas: [
      "La razón solo tiene validez cuando confirma sin examen las tradiciones",
      "La evidencia racional es innecesaria si existe costumbre social"
    ]
  },
  {
    enunciado: "¿Cómo sitúa Kant la religión en relación con la razón?",
    correcta: "Formula una ‘religión dentro de los límites de la mera razón’, subrayando la primacía práctica",
    incorrectas: [
      "Declara que la razón teórica demuestra exhaustivamente todos los dogmas religiosos",
      "Sostiene que la religión es incognoscible y carente de significado moral"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñan las ‘vías’ tomistas en el problema fe–razón?",
    correcta: "Son argumentos racionales que muestran la credibilidad de la existencia de Dios como fundamento del ser",
    incorrectas: [
      "Son relatos míticos destinados a conmover sin validez lógica",
      "Son decretos eclesiásticos sin contenido filosófico alguno"
    ]
  },
  {
    enunciado: "¿Cuál es la tesis común de la escolástica clásica sobre fe y razón?",
    correcta: "No puede existir contradicción última entre verdad de fe y verdad de razón",
    incorrectas: [
      "La fe y la razón son verdades paralelas y contradictorias por naturaleza",
      "La razón debe negar toda proposición religiosa por principio"
    ]
  },
  {
    enunciado: "¿Qué se atribuye al averroísmo latino en la universidad medieval respecto a ‘doble verdad’?",
    correcta: "Se debate la tesis de una doble vía de verdad filosófica y teológica, con tensiones interpretativas",
    incorrectas: [
      "La afirmación medieval unánime de que toda verdad es doble por definición",
      "La defensa explícita de Averroes de dos verdades contradictorias como doctrina oficial"
    ]
  },
  {
    enunciado: "¿Qué aporta Maimónides al diálogo fe–razón?",
    correcta: "Propone una lectura filosófica de la Escritura, armonizando Aristóteles con la tradición judía",
    incorrectas: [
      "Rechaza la filosofía griega por considerarla incompatible con cualquier religión",
      "Reduce la fe a un conjunto de ritos sin contenido intelectual"
    ]
  },
  {
    enunciado: "¿Qué tesis sostiene Avicena respecto a Dios y el ser?",
    correcta: "Desarrolla la distinción entre esencia y existencia y concibe a Dios como el Ser Necesario",
    incorrectas: [
      "Identifica a Dios con la suma de los particulares sensibles",
      "Sostiene que la existencia es una mera ilusión lingüística"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracteriza a Averroes en la relación filosofía–religión?",
    correcta: "Defiende la compatibilidad entre filosofía aristotélica e Islam y jerarquiza los modos de discurso",
    incorrectas: [
      "Sostiene que la filosofía debe prohibirse por contradecir toda religión",
      "Declara que la razón no tiene competencia para interpretar textos"
    ]
  },
  {
    enunciado: "¿Cómo aborda Hume los milagros en su crítica a la religión?",
    correcta: "Cuestiona la credibilidad de los testimonios sobre milagros apelando a la probabilidad y la experiencia",
    incorrectas: [
      "Acepta todos los relatos milagrosos por principio de autoridad",
      "Niega la experiencia como criterio en cuestiones religiosas y morales"
    ]
  },
  {
    enunciado: "¿Qué propone Pascal con su célebre ‘apuesta’?",
    correcta: "Sostiene que, en condiciones de incertidumbre, creer puede ser racional por la esperanza de un bien infinito",
    incorrectas: [
      "Afirma que creer es siempre irracional, aunque útil políticamente",
      "Sostiene que la fe debe basarse exclusivamente en demostraciones geométricas"
    ]
  },
  {
    enunciado: "¿Cómo se entiende el ‘salto’ en Kierkegaard respecto a la fe?",
    correcta: "La fe implica un salto existencial más allá de la pura racionalidad objetivante",
    incorrectas: [
      "La fe es la conclusión necesaria de un silogismo matemático",
      "La fe es un hábito social que no compromete la existencia personal"
    ]
  },
  {
    enunciado: "¿Qué crítica formula Nietzsche a la religión tradicional?",
    correcta: "La considera expresión de una moral reactiva y de ilusiones metafísicas que niegan la vida",
    incorrectas: [
      "La interpreta como culminación de la voluntad de poder afirmativa",
      "La describe como ciencia empírica de leyes naturales"
    ]
  },
  {
    enunciado: "¿Cómo interpreta Marx el fenómeno religioso?",
    correcta: "Como superestructura ideológica vinculada a condiciones materiales y alienación",
    incorrectas: [
      "Como método experimental para descubrir leyes físicas",
      "Como prueba irrefutable de la existencia de valores absolutos"
    ]
  },
  {
    enunciado: "¿Qué lectura ofrece Freud sobre la fe religiosa?",
    correcta: "La entiende como ilusión proyectiva con raíces en necesidades psíquicas",
    incorrectas: [
      "La define como mecanismo de defensa superado por la lógica formal",
      "La identifica con un instinto biológico desprovisto de simbolismo"
    ]
  },
  {
    enunciado: "¿Qué tesis resume ‘Fides et Ratio’ (1998) de Juan Pablo II?",
    correcta: "Fe y razón son dos vías complementarias que cooperan en la búsqueda de la verdad",
    incorrectas: [
      "La fe debe sustituir a la razón por ser más rápida y segura",
      "La razón debe expulsar toda referencia religiosa del horizonte humano"
    ]
  },
  {
    enunciado: "¿Qué enfatiza Joseph Ratzinger/Benedicto XVI en el diálogo fe–razón?",
    correcta: "La necesidad de una razón abierta a la verdad y de una fe purificada por la crítica racional",
    incorrectas: [
      "La renuncia completa de la fe a cualquier pretensión de verdad",
      "La clausura de la razón en el relativismo como ideal cultural"
    ]
  },
  {
    enunciado: "¿Qué propone Stephen Jay Gould con el ‘NOMA’ sobre ciencia y religión?",
    correcta: "Que ciencia y religión ocupan magisterios no superpuestos y tratan cuestiones diferentes",
    incorrectas: [
      "Que la ciencia debe dirimir dogmas religiosos mediante experimentos controlados",
      "Que la religión debe definir leyes físicas con autoridad doctrinal"
    ]
  },
  {
    enunciado: "¿Qué aspecto del caso Galileo es relevante para el problema fe–razón?",
    correcta: "Ilustra tensiones históricas entre interpretaciones bíblicas y nuevos modelos científicos",
    incorrectas: [
      "Demuestra que la ciencia medieval fue oficialmente heliocéntrica",
      "Prueba que la Biblia siempre se leyó de modo literalista en la Iglesia"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa la ‘teología natural’ en la relación fe–razón?",
    correcta: "Busca, con la sola razón, argumentos acerca de Dios y del sentido del ser",
    incorrectas: [
      "Rechaza cualquier uso de la razón en materia religiosa",
      "Sustituye los textos sagrados por axiomas geométricos"
    ]
  },
  {
    enunciado: "¿Qué plantea Alvin Plantinga en la epistemología reformada sobre creencia en Dios?",
    correcta: "Que la creencia en Dios puede ser propiamente básica y racional sin pruebas inferenciales",
    incorrectas: [
      "Que toda creencia religiosa es necesariamente irracional",
      "Que solo las pruebas empíricas sensoriales legitiman cualquier creencia"
    ]
  },
  {
    enunciado: "¿Qué defendió William K. Clifford frente a la creencia religiosa?",
    correcta: "Que es inmoral creer con base insuficiente, exigiendo evidencia estricta",
    incorrectas: [
      "Que creer sin evidencia es siempre lo más prudente",
      "Que la ética es ajena a la formación de creencias"
    ]
  },
  {
    enunciado: "¿Qué replica William James en ‘La voluntad de creer’?",
    correcta: "Que, en opciones vivas y forzosas, puede ser legítimo creer pragmáticamente ante evidencia inconclusa",
    incorrectas: [
      "Que toda creencia debe esperar pruebas matemáticas definitivas",
      "Que solo el consenso social convierte en racional una creencia"
    ]
  },
  {
    enunciado: "¿Qué subraya el personalismo (Maritain, Mounier) en el diálogo fe–razón?",
    correcta: "La dignidad de la persona como horizonte que pide razón abierta y fe vivida",
    incorrectas: [
      "La reducción de la persona a su utilidad productiva",
      "La indiferencia entre verdad y error como ideal educativo"
    ]
  },
  {
    enunciado: "¿Qué afirma el positivismo lógico sobre los enunciados religiosos?",
    correcta: "Los considera carentes de sentido cognitivo por no ser verificables empíricamente",
    incorrectas: [
      "Los declara científicamente confirmados por consenso",
      "Los define como hipótesis físicas refutables en laboratorio"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la hermenéutica en la relación fe–razón?",
    correcta: "Aporta métodos de interpretación crítica de textos y tradiciones para un diálogo informado",
    incorrectas: [
      "Sustituye el texto por opiniones improvisadas sin método",
      "Excluye la razón y la historia de toda interpretación"
    ]
  },
  {
    enunciado: "¿Cómo contribuye Lemaître, sacerdote y físico, al diálogo contemporáneo?",
    correcta: "Desarrolla el modelo del ‘átomo primitivo’, mostrando compatibilidad entre trabajo científico y fe personal",
    incorrectas: [
      "Sostiene que la cosmología moderna refuta toda pregunta filosófica",
      "Demuestra que la Biblia es un manual de física teórica"
    ]
  },
  {
    enunciado: "¿Qué idea expresa Unamuno sobre fe y duda?",
    correcta: "Presenta la fe como lucha existencial atravesada por duda y anhelo de inmortalidad",
    incorrectas: [
      "Reduce la fe a formalidad social sin conflicto interior",
      "Identifica fe con certeza matemática incontrovertible"
    ]
  },
  {
    enunciado: "¿Qué advierte Ortega y Gasset con su noción de ‘creencias’ y ‘razón vital’?",
    correcta: "Que la razón se enraíza en creencias previas que sustentan la vida histórica de cada persona",
    incorrectas: [
      "Que la razón opera en el vacío sin condicionamientos culturales",
      "Que las creencias no influyen en la orientación de la razón"
    ]
  },
  {
    enunciado: "¿Qué dimensión ética se deriva del adecuado diálogo fe–razón?",
    correcta: "Favorece el respeto a la verdad, la libertad de conciencia y el debate público responsable",
    incorrectas: [
      "Impone uniformidad de pensamiento y censura del disenso",
      "Declara irrelevantes las convicciones en la vida social"
    ]
  },
  {
    enunciado: "¿Qué riesgo comporta el fideísmo extremo para la vida intelectual?",
    correcta: "Puede derivar en antiintelectualismo y rechazo del examen crítico",
    incorrectas: [
      "Fortalece la investigación científica con nuevos métodos",
      "Garantiza el acuerdo universal sin discusión"
    ]
  },
  {
    enunciado: "¿Qué riesgo comporta el racionalismo autosuficiente para la comprensión humana?",
    correcta: "Puede clausurar preguntas de sentido y reducir la realidad a lo mensurable",
    incorrectas: [
      "Proporciona automáticamente una ética compartida por todas las culturas",
      "Impulsa la apertura a tradiciones sin examen racional"
    ]
  },
  {
    enunciado: "¿Cuál es una síntesis ampliamente aceptada hoy sobre fe y razón?",
    correcta: "Son dimensiones distintas y complementarias, susceptibles de mutua purificación y enriquecimiento",
    incorrectas: [
      "Son vías necesariamente opuestas cuya convivencia es imposible",
      "Son equivalentes y deben confundirse en un único método"
    ]
  },
  {
    enunciado: "¿Qué criterio operativo ayuda a evitar conflictos aparentes entre ciencia y teología?",
    correcta: "Distinguir niveles de discurso y método, respetando ámbitos y verificaciones propios",
    incorrectas: [
      "Uniformar todos los lenguajes en un único protocolo empírico",
      "Suponer que la fe dicta resultados experimentales concretos"
    ]
  }
];
