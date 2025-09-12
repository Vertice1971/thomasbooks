// temarios/11-Conocimiento-y-lenguaje-el-problema-de-los-conceptos-universales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué enuncia el problema clásico de los universales?",
    correcta: "Cómo pueden aplicarse términos generales a múltiples particulares sin perder referencia",
    incorrectas: [
      "Cómo traducir cualquier idioma a símbolos lógicos de primer orden",
      "Cómo medir empíricamente las ideas innatas en la psicología"
    ]
  },
  {
    enunciado: "¿Qué sostiene el realismo fuerte acerca de los universales?",
    correcta: "Que existen con independencia de la mente y de las cosas particulares",
    incorrectas: [
      "Que son meras etiquetas útiles para clasificar experiencias",
      "Que son ficciones poéticas sin función cognitiva"
    ]
  },
  {
    enunciado: "¿Qué afirmaría un nominalista medieval como Roscelino?",
    correcta: "Que los universales no son entidades sino nombres aplicados a muchos",
    incorrectas: [
      "Que existen en un mundo suprasensible independiente",
      "Que son intuiciones eidéticas accesibles por reducción fenomenológica"
    ]
  },
  {
    enunciado: "¿Qué posición adopta el conceptualismo de Abelardo?",
    correcta: "Los universales son conceptos mentales con base en similitudes reales",
    incorrectas: [
      "Los universales son accidentes materiales de los cuerpos",
      "Los universales son actos del lenguaje carentes de contenido mental"
    ]
  },
  {
    enunciado: "Según el realismo moderado aristotélico-tomista, los universales...",
    correcta: "Existen en las cosas y en el entendimiento por abstracción",
    incorrectas: [
      "Existen solo en la mente divina y nunca en la humana",
      "Existen como sustancias separadas por sí mismas"
    ]
  },
  {
    enunciado: "¿Qué obra introduce canónicamente el problema de los universales en la tradición latina?",
    correcta: "La Isagoge de Porfirio",
    incorrectas: [
      "El Discurso del método de Descartes",
      "La Crítica de la razón pura de Kant"
    ]
  },
  {
    enunciado: "Para Platón, las Ideas universales son...",
    correcta: "Realidades inteligibles, eternas y separadas de lo sensible",
    incorrectas: [
      "Convenciones lingüísticas dependientes del uso social",
      "Impresiones vívidas que acompañan a la percepción"
    ]
  },
  {
    enunciado: "¿Cómo explica Aristóteles la captación de lo universal?",
    correcta: "Por abstracción intelectual a partir de lo sensible",
    incorrectas: [
      "Por reminiscencia de un mundo preterrenal",
      "Por una iluminación sobrenatural ocasional"
    ]
  },
  {
    enunciado: "En Ockham, ¿qué estatuto ontológico tienen los universales?",
    correcta: "No tienen entidad propia; solo hay individuos y términos mentales o lingüísticos",
    incorrectas: [
      "Son formas sustanciales compartidas por los individuos",
      "Son sustancias separadas que causan las similitudes"
    ]
  },
  {
    enunciado: "¿Qué son los 'lekta' estoicos en relación con lo universal?",
    correcta: "Contenidos significativos incorpóreos de lo dicho",
    incorrectas: [
      "Esencias eternas subsistentes en sí",
      "Cualidades sensibles comunes a todos los cuerpos"
    ]
  },
  {
    enunciado: "¿Qué problema lógico-semántico vincula universales y predicación?",
    correcta: "Cómo un mismo predicado puede ser verdadero de múltiples sujetos",
    incorrectas: [
      "Cómo convertir proposiciones en imperativos morales",
      "Cómo derivar axiomas a partir de teoremas empíricos"
    ]
  },
  {
    enunciado: "¿Cuál es la tesis de Locke sobre las ideas generales?",
    correcta: "Surgen por abstracción a partir de ideas particulares",
    incorrectas: [
      "Son innatas y preexisten a toda experiencia",
      "Son meros sonidos que nada representan"
    ]
  },
  {
    enunciado: "Para Hume, los universales son...",
    correcta: "Hábitos de asociación que permiten usar términos generales",
    incorrectas: [
      "Entidades numéricamente idénticas presentes en muchas cosas",
      "Causas eficientes de la inducción científica"
    ]
  },
  {
    enunciado: "¿Qué papel cumplen las categorías en Kant?",
    correcta: "Funciones a priori del entendimiento que hacen posible el conocimiento universal",
    incorrectas: [
      "Correspondencias místicas entre mente y cosmos",
      "Reglas empíricas extraídas de la costumbre"
    ]
  },
  {
    enunciado: "En Husserl, las esencias universales se captan mediante...",
    correcta: "Intuición eidética tras la reducción fenomenológica",
    incorrectas: [
      "Inferencia abductiva desde leyes naturales",
      "Simple generalización inductiva"
    ]
  },
  {
    enunciado: "¿Qué defiende el realismo de propiedades de D. M. Armstrong?",
    correcta: "Que existen universales como propiedades necesarias para explicar regularidades",
    incorrectas: [
      "Que toda propiedad es un individuo irrepetible",
      "Que las leyes son meros acuerdos lingüísticos"
    ]
  },
  {
    enunciado: "¿Qué proponen las teorías de tropos?",
    correcta: "Que solo existen particulares cualitativos; las propiedades son tropos individuales",
    incorrectas: [
      "Que las propiedades son conjuntos de observaciones",
      "Que las esencias se identifican con definiciones nominales"
    ]
  },
  {
    enunciado: "¿Qué objeción levanta Quine contra los universales?",
    correcta: "Que su postulación ontológica es dudosa y debe justificarse por indispensabilidad",
    incorrectas: [
      "Que contradicen el principio de no contradicción",
      "Que impiden la existencia de conjuntos infinitos"
    ]
  },
  {
    enunciado: "¿Qué ilustra el problema 'grue' de Goodman?",
    correcta: "Que la inducción depende de la proyección de predicados y su 'entrenamiento'",
    incorrectas: [
      "Que los universales solo existen si son verdes",
      "Que los enunciados analíticos pueden ser falsos"
    ]
  },
  {
    enunciado: "En Frege, el sentido y la referencia muestran que...",
    correcta: "Los términos generales tienen condiciones de aplicación y valor semántico",
    incorrectas: [
      "El significado depende solo de la imagen mental del hablante",
      "Los nombres propios carecen de referencia objetiva"
    ]
  },
  {
    enunciado: "Para Russell, los universales se vinculan a...",
    correcta: "Relaciones y propiedades necesarias para el análisis lógico",
    incorrectas: [
      "Afectos subjetivos que guían el uso del lenguaje",
      "Constructos sociales sin correlato lógico"
    ]
  },
  {
    enunciado: "Según Saussure, el valor de un término universal deriva de...",
    correcta: "Su posición diferencial en el sistema de la lengua",
    incorrectas: [
      "La cantidad de objetos del mundo a los que señala",
      "La intensidad con que es pronunciado"
    ]
  },
  {
    enunciado: "La hipótesis Sapir-Whorf sugiere que...",
    correcta: "Las categorías lingüísticas influyen en la categorización cognitiva",
    incorrectas: [
      "Todas las lenguas comparten idénticos universales semánticos",
      "El pensamiento es totalmente independiente del lenguaje"
    ]
  },
  {
    enunciado: "¿Qué postula Chomsky sobre los universales lingüísticos?",
    correcta: "Una Gramática Universal con principios innatos que constriñen las lenguas posibles",
    incorrectas: [
      "Que las lenguas derivan de convenciones puramente históricas sin restricciones",
      "Que la adquisición requiere listas exhaustivas de reglas explícitas"
    ]
  },
  {
    enunciado: "En la semántica cognitiva (Lakoff y Johnson), los universales conceptuales se explican por...",
    correcta: "Esquemas de imagen y metáforas encarnadas comunes",
    incorrectas: [
      "Definiciones aristotélicas estrictas en todas las culturas",
      "Tablas de verdad proposicionales exclusivamente"
    ]
  },
  {
    enunciado: "Wierzbicka y la 'Metalengua Semántica Natural' proponen...",
    correcta: "Un conjunto reducido de primitivos semánticos universales",
    incorrectas: [
      "Que no hay ningún significado compartido entre lenguas",
      "Que todo significado es idéntico a su traducción literal"
    ]
  },
  {
    enunciado: "¿Qué aporta Peirce al tratar universales y signos?",
    correcta: "Una teoría triádica en la que las leyes y hábitos tienen carácter general",
    incorrectas: [
      "Una reducción del signo a mera denotación directa",
      "La tesis de que los índices son universales puros"
    ]
  },
  {
    enunciado: "¿Por qué las leyes científicas parecen exigir universales?",
    correcta: "Porque generalizan propiedades y relaciones aplicables a infinitos casos",
    incorrectas: [
      "Porque describen solo un acontecimiento irrepetible",
      "Porque dependen del habla individual del científico"
    ]
  },
  {
    enunciado: "En lógica de predicados, la cuantificación ilustra que...",
    correcta: "Los predicados universales requieren dominio y condiciones de verdad generales",
    incorrectas: [
      "Los cuantificadores eliminan la necesidad de predicados",
      "Toda universalidad es eliminable por paráfrasis nominal"
    ]
  },
  {
    enunciado: "¿Qué son los trascendentales en la escolástica (uno, verdad, bien)?",
    correcta: "Atributos universales del ente que trascienden las categorías",
    incorrectas: [
      "Géneros supremos de la psicología empírica",
      "Predicados vacíos sin extensión ni comprensión"
    ]
  },
  {
    enunciado: "¿Qué distingue un universal lógico de un universal metafísico?",
    correcta: "El primero pertenece a la forma del pensar; el segundo a la estructura del ser",
    incorrectas: [
      "El lógico es sensible y el metafísico es imaginario",
      "El lógico es individual y el metafísico es particular"
    ]
  },
  {
    enunciado: "¿Qué relación plantea el problema uno–múltiple?",
    correcta: "Cómo lo uno (universal) se comunica a lo múltiple (particulares) sin dividirse",
    incorrectas: [
      "Cómo los particulares crean universales por generación espontánea",
      "Cómo los universales destruyen la individualidad numérica"
    ]
  },
  {
    enunciado: "¿Qué es la 'abstracción' en la tradición aristotélico-tomista?",
    correcta: "Separación intelectual de lo formal común a partir de lo sensible",
    incorrectas: [
      "Eliminación psicológica de toda imagen en la memoria",
      "Negación voluntarista de los individuos concretos"
    ]
  },
  {
    enunciado: "¿Qué objeción se hace al nominalismo radical respecto de la ciencia?",
    correcta: "Dificulta explicar regularidades y leyes sin propiedades compartidas",
    incorrectas: [
      "Vuelve imposible la sintaxis de las lenguas naturales",
      "Impide el uso de nombres propios en lógica"
    ]
  },
  {
    enunciado: "¿Cómo se vincula la hermenéutica de Gadamer con la universalidad?",
    correcta: "La universalidad se entiende como horizonte de sentido históricamente mediado",
    incorrectas: [
      "Como esencia fija accesible por definición matemática",
      "Como pura convención sin verdad posible"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre definición nominal y real en escolástica?",
    correcta: "La nominal explica el significado del término; la real expone la esencia",
    incorrectas: [
      "La nominal es empírica y la real es retórica",
      "La nominal usa ejemplos y la real prohíbe ejemplos"
    ]
  },
  {
    enunciado: "¿Qué problema práctico del lenguaje muestra la polisemia en relación con universales?",
    correcta: "Un mismo término universal puede tener sentidos distintos según el contexto",
    incorrectas: [
      "Los universales son siempre unívocos por naturaleza",
      "La ambigüedad solo aparece en nombres propios"
    ]
  },
  {
    enunciado: "¿Qué significa 'in rebus' al hablar de universales?",
    correcta: "Que lo universal está en las cosas como forma común",
    incorrectas: [
      "Que lo universal está fuera de toda cosa y solo en el lenguaje",
      "Que lo universal es idéntico numéricamente a cada individuo"
    ]
  },
  {
    enunciado: "¿Qué papel atribuye Putnam a la indispensabilidad en ontología?",
    correcta: "Aceptar entidades si son necesarias en las mejores teorías científicas",
    incorrectas: [
      "Rechazar toda entidad no directamente observable",
      "Admitir entidades por tradición cultural"
    ]
  },
  {
    enunciado: "¿Por qué la predicación múltiple es central en el problema?",
    correcta: "Porque explica cómo un mismo predicado se aplica a diversos individuos",
    incorrectas: [
      "Porque muestra que todo predicado es ambiguo",
      "Porque elimina la necesidad de cuantificadores"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre universales y clasificación científica?",
    correcta: "Las taxonomías presuponen propiedades compartidas para agrupar casos",
    incorrectas: [
      "La clasificación científica prescinde de toda noción de semejanza",
      "Las taxonomías se basan solo en criterios estéticos"
    ]
  }
];
