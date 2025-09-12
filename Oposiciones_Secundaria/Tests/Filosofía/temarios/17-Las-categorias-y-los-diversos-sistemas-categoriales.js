// temarios/17-Las-categorias-y-los-diversos-sistemas-categoriales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por 'categorías' en filosofía cuando se las define como géneros supremos?",
    correcta: "Estructuras conceptuales fundamentales con las que clasificamos los entes y sus modos de ser",
    incorrectas: [
      "Listas empíricas de objetos físicos ordenados por tamaño",
      "Convenciones retóricas para embellecer el lenguaje literario"
    ]
  },
  {
    enunciado: "¿Cuál es la obra clásica donde Aristóteles expone de forma sistemática sus categorías?",
    correcta: "En 'Categorías', complementada por desarrollos en la 'Metafísica'",
    incorrectas: [
      "En 'La República', libro VII",
      "En 'De anima' libros II y III exclusivamente"
    ]
  },
  {
    enunciado: "En el sistema aristotélico, ¿qué lugar ocupa la substancia respecto a las demás categorías?",
    correcta: "Es la categoría principal de la que las demás se dicen y a la que accidentalmente se refieren",
    incorrectas: [
      "Es un accidente cuantitativo entre otros",
      "Es un sinónimo de causa eficiente"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes NO pertenece al elenco tradicional de categorías aristotélicas?",
    correcta: "Posibilidad",
    incorrectas: [
      "Cantidad",
      "Relación"
    ]
  },
  {
    enunciado: "¿Qué pretende Kant al reconfigurar el concepto de categorías?",
    correcta: "Establecerlas como conceptos puros del entendimiento que condicionan la experiencia posible",
    incorrectas: [
      "Reducirlas a hábitos lingüísticos arbitrarios sin base cognitiva",
      "Identificarlas con ideas regulativas de la razón práctica"
    ]
  },
  {
    enunciado: "¿Cómo agrupa Kant sus categorías en la 'Crítica de la razón pura'?",
    correcta: "En cuatro clases: cantidad, cualidad, relación y modalidad",
    incorrectas: [
      "En dos clases: esencia y accidente",
      "En cinco clases: forma, materia, causa, fin y posibilidad"
    ]
  },
  {
    enunciado: "¿Qué relación establece Kant entre las tablas de juicios y las categorías?",
    correcta: "Las categorías derivan sistemáticamente de las funciones lógicas del juicio",
    incorrectas: [
      "Las categorías se obtienen por inducción empírica a partir de los juicios morales",
      "No existe relación; son listas independientes"
    ]
  },
  {
    enunciado: "¿Cuál es la finalidad principal de postular categorías en ontología clásica?",
    correcta: "Dar cuenta de los modos fundamentales de ser y de predicación",
    incorrectas: [
      "Explicar la validez de las normas jurídicas positivas",
      "Determinar los procedimientos de laboratorio en ciencias naturales"
    ]
  },
  {
    enunciado: "¿Qué autor entiende las categorías como momentos del despliegue dialéctico del concepto?",
    correcta: "Hegel",
    incorrectas: [
      "Ockham",
      "Popper"
    ]
  },
  {
    enunciado: "¿Qué distingue a la fenomenología al hablar de categorías (Husserl, Scheler, Hartmann)?",
    correcta: "Diferencia entre categorías formales y materiales en correlación intencional",
    incorrectas: [
      "Identifica categorías con meras descripciones literales de hechos físicos",
      "Niega toda posibilidad de categorías universales"
    ]
  },
  {
    enunciado: "¿Qué problema central atraviesa el debate sobre la naturaleza de las categorías?",
    correcta: "Si son rasgos del ser o formas del pensar y del lenguaje",
    incorrectas: [
      "Si son fenómenos exclusivamente químicos",
      "Si pueden sustituir a las leyes matemáticas"
    ]
  },
  {
    enunciado: "¿Qué papel juegan las categorías en la organización del discurso científico según concepciones contemporáneas?",
    correcta: "Estructuran dominios, conceptos y relaciones permitiendo teorizar con coherencia",
    incorrectas: [
      "Sustituyen a los experimentos al proporcionar resultados numéricos",
      "Eliminan la necesidad de modelos y leyes"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia básica entre categorías aristotélicas y kantianas?",
    correcta: "Las aristotélicas se refieren a modos del ser; las kantianas a condiciones del conocer",
    incorrectas: [
      "Las aristotélicas son psicológicas y las kantianas biológicas",
      "No hay diferencias sustantivas entre ambas"
    ]
  },
  {
    enunciado: "¿Qué autor vincula fuertemente categorías, lenguaje y mundo a través del análisis lógico?",
    correcta: "Frege, con su distinción entre objeto y función",
    incorrectas: [
      "Agustín de Hipona, con la teoría de los signos sacramentales",
      "Bacon, con los ídolos del mercado"
    ]
  },
  {
    enunciado: "¿Cómo entiende Strawson la ontología en 'Individuals'?",
    correcta: "Como un esquema categorial que identifica clases básicas de entidades y relaciones",
    incorrectas: [
      "Como un catálogo histórico de inventos tecnológicos",
      "Como una reducción de todo a datos sensoriales sin estructura"
    ]
  },
  {
    enunciado: "¿Qué tesis de Quine afecta a la discusión categorial?",
    correcta: "La indeterminación de la traducción y la relatividad ontológica cuestionan esquemas únicos",
    incorrectas: [
      "La imposibilidad de cuantificar en la lógica de primer orden",
      "La defensa del esencialismo aristotélico sin matices"
    ]
  },
  {
    enunciado: "¿Qué propone Lakoff sobre la categorización?",
    correcta: "Que se basa en marcos y prototipos cognitivos, no solo en definiciones clásicas",
    incorrectas: [
      "Que depende exclusivamente de axiomas geométricos",
      "Que es ajena a la experiencia corporal y cultural"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupan las categorías en el materialismo filosófico de Gustavo Bueno?",
    correcta: "Se articulan como cierres operatorios específicos de campos científicos",
    incorrectas: [
      "Son imágenes poéticas de inspiración romántica",
      "Se reducen a etiquetas de sentido común sin rigor"
    ]
  },
  {
    enunciado: "¿Cuál es una implicación pedagógica del estudio de las categorías en Bachillerato?",
    correcta: "Favorecer la clarificación conceptual y la argumentación rigurosa en diversas áreas",
    incorrectas: [
      "Reemplazar la experimentación científica por memorización",
      "Limitar el análisis filosófico a anécdotas históricas"
    ]
  },
  {
    enunciado: "En Aristóteles, ¿qué ejemplo ilustra la categoría 'relación'?",
    correcta: "Ser doble de, ser mayor que",
    incorrectas: [
      "Estar sentado como postura natural esencial",
      "Moverse localmente por necesidad lógica"
    ]
  },
  {
    enunciado: "¿Cuál de estas tríadas kantianas corresponde a la clase de relación?",
    correcta: "Sustancia-accidente, causa-efecto, acción recíproca",
    incorrectas: [
      "Unidad-pluralidad-totalidad",
      "Posibilidad-existencia-necesidad"
    ]
  },
  {
    enunciado: "¿Qué problema afronta la 'deducción trascendental' kantiana respecto a las categorías?",
    correcta: "Justificar su validez objetiva para toda experiencia posible",
    incorrectas: [
      "Refutar la geometría euclidiana",
      "Demostrar la existencia de sustancias simples"
    ]
  },
  {
    enunciado: "En la escolástica, ¿qué función tiene la teoría de las categorías?",
    correcta: "Servir de marco terminológico y ontológico para teología y metafísica",
    incorrectas: [
      "Sustituir los silogismos por probabilidades estadísticas",
      "Negar la distinción entre esencia y existencia"
    ]
  },
  {
    enunciado: "¿Qué crítica hace Heidegger a la tradición categorial?",
    correcta: "Que olvida la pregunta por el ser al fijarse en entes y sus determinaciones",
    incorrectas: [
      "Que usa demasiadas matemáticas en metafísica",
      "Que confunde ética con lógica deóntica"
    ]
  },
  {
    enunciado: "¿Qué señala la hipótesis Sapir-Whorf respecto a categorías y lenguaje?",
    correcta: "Que la estructura lingüística puede influir en cómo categorizamos la realidad",
    incorrectas: [
      "Que todas las lenguas comparten idéntica categorización",
      "Que la categorización depende solo de la genética"
    ]
  },
  {
    enunciado: "¿Cómo se vinculan categorías y modelos científicos en filosofía de la ciencia?",
    correcta: "Las categorías delimitan entidades y relaciones que los modelos articulan formalmente",
    incorrectas: [
      "Los modelos eliminan la necesidad de categorías",
      "Las categorías sustituyen a las mediciones empíricas"
    ]
  },
  {
    enunciado: "Según Kuhn, ¿cómo afectan los cambios de paradigma a la categorización científica?",
    correcta: "Reestructuran taxonomías y significados básicos dentro de la comunidad científica",
    incorrectas: [
      "Solo alteran la ortografía de los términos técnicos",
      "No afectan al significado, solo a los instrumentos"
    ]
  },
  {
    enunciado: "¿Qué aporta Lakatos al debate sobre estructuras categoriales en ciencia?",
    correcta: "La noción de programas de investigación con núcleo firme y cinturón protector",
    incorrectas: [
      "La reducción de toda teoría a enunciados observacionales",
      "La imposibilidad de contrastación empírica"
    ]
  },
  {
    enunciado: "¿Qué sostiene Feyerabend que incide en la rigidez de esquemas categoriales?",
    correcta: "Un pluralismo metodológico que cuestiona reglas universales fijas",
    incorrectas: [
      "La necesidad de un único método lógico-matemático",
      "La equivalencia entre categorías y leyes penales"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de categoría gramatical que interactúa con categorías lógicas?",
    correcta: "Sustantivo como portador de referencia frente a predicados que atribuyen propiedades",
    incorrectas: [
      "Artículos definidos como operadores booleanos universales",
      "Interjecciones como cuantificadores de segundo orden"
    ]
  },
  {
    enunciado: "¿Qué problema surge al confundir categorías ontológicas con categorías lingüísticas?",
    correcta: "Se corre el riesgo de tomar rasgos del idioma por rasgos del ser",
    incorrectas: [
      "Se logra una traducción perfecta entre lenguas",
      "Se garantiza la verdad de toda proposición"
    ]
  },
  {
    enunciado: "¿Qué pretende una 'ontología categorial mínima' en metafísica analítica contemporánea?",
    correcta: "Postular solo las clases de entidades indispensables para explicar el mundo",
    incorrectas: [
      "Admitir entidades míticas por razones estéticas",
      "Negar la existencia de objetos materiales"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes autores ha defendido ontologías articuladas por tipos o niveles (por ejemplo, 4-categorías)?",
    correcta: "E. J. Lowe",
    incorrectas: [
      "J. L. Austin en 'Cómo hacer cosas con palabras'",
      "Thomas Kuhn en 'La estructura de las revoluciones científicas'"
    ]
  },
  {
    enunciado: "¿Qué discusión abre Kit Fine sobre fundamentación y categorías?",
    correcta: "La prioridad de la relación de fundamentación respecto a la mera pertenencia de clases",
    incorrectas: [
      "La reducción de la lógica modal a ética normativa",
      "La imposibilidad de distinguir esencia y accidente"
    ]
  },
  {
    enunciado: "¿Por qué Platón suele considerarse un antecedente de la reflexión categorial?",
    correcta: "Porque distingue géneros supremos en el 'Sofista' que condicionan la participación de los entes",
    incorrectas: [
      "Porque identifica las categorías con los números pitagóricos",
      "Porque niega toda estructura común en los conceptos"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre categorización y prototipos en psicología cognitiva?",
    correcta: "Las categorías se organizan alrededor de ejemplares más representativos",
    incorrectas: [
      "Las categorías son conjuntos cerrados por definición matemática estricta",
      "Los prototipos solo se aplican a categorías morales"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñan las categorías en la argumentación filosófica?",
    correcta: "Aportan criterios de clasificación y pertinencia para premisas y conclusiones",
    incorrectas: [
      "Sustituyen las reglas lógicas de inferencia",
      "Garantizan la verdad de cualquier premisa"
    ]
  },
  {
    enunciado: "En Aristóteles, ¿qué caracteriza a 'cantidad' frente a 'cualidad'?",
    correcta: "Cantidad se refiere a lo numerable o mensurable; cualidad a modos de ser como capacidades o disposiciones",
    incorrectas: [
      "Cantidad designa emociones y cualidad designa lugares",
      "Cantidad y cualidad son idénticas en todos los casos"
    ]
  },
  {
    enunciado: "¿Cuál es un riesgo de los esquemas categoriales excesivamente rígidos?",
    correcta: "Impedir la detección de novedades conceptuales o fenómenos liminales",
    incorrectas: [
      "Aumentar sin límite la creatividad científica",
      "Eliminar los sesgos de confirmación automáticamente"
    ]
  },
  {
    enunciado: "¿Cómo influyen las categorías en la construcción de definiciones filosóficas?",
    correcta: "Orientan qué rasgos son esenciales y qué relaciones son relevantes",
    incorrectas: [
      "Obligan a que toda definición sea circular",
      "Exigen que toda definición incluya datos estadísticos"
    ]
  },
  {
    enunciado: "¿Por qué las categorías siguen siendo relevantes en la investigación interdisciplinar?",
    correcta: "Porque facilitan traducir y articular conceptos entre campos distintos",
    incorrectas: [
      "Porque sustituyen la evidencia empírica en todas las disciplinas",
      "Porque imponen una única taxonomía válida para todo saber"
    ]
  },
  {
    enunciado: "¿Qué criterio práctico ayuda a evaluar un sistema categorial?",
    correcta: "Su poder explicativo y su capacidad para integrar nuevos casos sin incoherencias",
    incorrectas: [
      "La antigüedad del esquema, independientemente de su utilidad",
      "El número de nombres propios que incluye"
    ]
  }
];
