// temarios/04-Sentido-y-referencia-teorias-del-significado.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el problema central que plantea la filosofía del lenguaje respecto al significado?",
    correcta: "Determinar qué es significar y cómo se relacionan las expresiones lingüísticas con la realidad",
    incorrectas: [
      "Analizar exclusivamente la evolución histórica de las lenguas",
      "Reducir el lenguaje a un simple fenómeno psicológico individual"
    ]
  },
  {
    enunciado: "¿Qué distingue Frege entre 'Sinn' y 'Bedeutung'?",
    correcta: "El sentido es el modo de presentación y la referencia es el objeto designado",
    incorrectas: [
      "El sentido corresponde a la realidad material y la referencia a una idea mental",
      "El sentido es el uso social y la referencia la convención lingüística"
    ]
  },
  {
    enunciado: "¿Qué ejemplo utilizó Frege para ilustrar la diferencia entre sentido y referencia?",
    correcta: "La estrella de la mañana y la estrella de la tarde, con sentidos distintos pero misma referencia",
    incorrectas: [
      "La luna llena y la luna nueva, con referencias distintas pero mismo sentido",
      "El sol y la luna, con idéntico sentido y diferente referencia"
    ]
  },
  {
    enunciado: "¿Qué autor defendió que el significado de una palabra es la idea que provoca en la mente?",
    correcta: "John Locke",
    incorrectas: [
      "Gottlob Frege",
      "Ludwig Wittgenstein tardío"
    ]
  },
  {
    enunciado: "¿En qué consiste la teoría referencial simple del significado?",
    correcta: "El significado de una expresión es aquello a lo que se refiere",
    incorrectas: [
      "El significado depende únicamente del uso contextual",
      "El significado está siempre determinado por las condiciones de verdad"
    ]
  },
  {
    enunciado: "¿Qué problema surge con la teoría referencial simple?",
    correcta: "No explica adecuadamente las expresiones sin referente como ficciones o nombres vacíos",
    incorrectas: [
      "Supone que todo significado se origina en actos ilocutivos",
      "Niega la posibilidad de un lenguaje lógico formal"
    ]
  },
  {
    enunciado: "¿Qué filósofo desarrolló la teoría de las descripciones definidas?",
    correcta: "Bertrand Russell",
    incorrectas: [
      "Immanuel Kant",
      "Hans-Georg Gadamer"
    ]
  },
  {
    enunciado: "Según Russell, ¿qué ocurre con frases como 'El actual rey de Francia es calvo'?",
    correcta: "Son proposiciones falsas porque su sujeto carece de referente",
    incorrectas: [
      "Son verdaderas por convención lingüística",
      "No tienen valor de verdad porque son tautologías"
    ]
  },
  {
    enunciado: "¿Quién formuló la teoría semántica de la verdad mediante definiciones T?",
    correcta: "Alfred Tarski",
    incorrectas: [
      "J. L. Austin",
      "Saussure"
    ]
  },
  {
    enunciado: "¿Qué defendía Wittgenstein en sus Investigaciones filosóficas?",
    correcta: "Que el significado de una palabra está en su uso en los juegos de lenguaje",
    incorrectas: [
      "Que el significado depende únicamente de su estructura lógica interna",
      "Que el significado se encuentra en las imágenes mentales asociadas"
    ]
  },
  {
    enunciado: "¿Qué autor introdujo la teoría de los actos de habla?",
    correcta: "J. L. Austin",
    incorrectas: [
      "Aristóteles",
      "Michel Foucault"
    ]
  },
  {
    enunciado: "¿Cuál es la aportación principal de John Searle a la teoría de los actos de habla?",
    correcta: "El análisis de las reglas constitutivas y la intencionalidad en los actos lingüísticos",
    incorrectas: [
      "La identificación de las categorías gramaticales",
      "La formulación del principio de cooperación conversacional"
    ]
  },
  {
    enunciado: "¿Quién elaboró la teoría de las implicaturas conversacionales?",
    correcta: "Paul Grice",
    incorrectas: [
      "Noam Chomsky",
      "Thomas Kuhn"
    ]
  },
  {
    enunciado: "¿Qué significa la máxima de cooperación en Grice?",
    correcta: "Que los hablantes tienden a ser informativos, claros, veraces y relevantes",
    incorrectas: [
      "Que los hablantes buscan siempre mantener la armonía emocional",
      "Que el significado se reduce al referente material de las palabras"
    ]
  },
  {
    enunciado: "¿Qué autor defendió que los nombres propios son designadores rígidos?",
    correcta: "Saul Kripke",
    incorrectas: [
      "Wilhelm Dilthey",
      "Charles Sanders Peirce"
    ]
  },
  {
    enunciado: "¿Qué experimento mental propuso Hilary Putnam para cuestionar el descriptivismo?",
    correcta: "El experimento de la Tierra Gemela sobre el agua y su composición química",
    incorrectas: [
      "El dilema del tranvía y sus bifurcaciones éticas",
      "El cerebro en una cubeta conectado a un ordenador"
    ]
  },
  {
    enunciado: "¿Qué defiende el externalismo semántico?",
    correcta: "Que el significado depende también del entorno social y natural, no solo de la mente individual",
    incorrectas: [
      "Que todo significado es un producto exclusivo de procesos cerebrales internos",
      "Que el lenguaje no tiene relación alguna con la realidad"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña Donald Davidson en la filosofía del lenguaje?",
    correcta: "Propone una teoría del significado basada en la noción de verdad como criterio interpretativo",
    incorrectas: [
      "Defiende que todo lenguaje es pura retórica sin verdad",
      "Reduce el significado a los gestos corporales y no verbales"
    ]
  },
  {
    enunciado: "¿Cómo define Peirce el signo en su semiótica?",
    correcta: "Como una relación triádica entre representamen, objeto e interpretante",
    incorrectas: [
      "Como un simple vínculo entre palabra y cosa",
      "Como la conexión entre estímulo y respuesta psicológica"
    ]
  },
  {
    enunciado: "¿Qué autor desarrolló la idea de metáforas conceptuales en la semántica cognitiva?",
    correcta: "George Lakoff y Mark Johnson",
    incorrectas: [
      "Rudolf Carnap",
      "Karl Popper"
    ]
  },
  {
    enunciado: "¿Cuál es el papel de la metáfora según Lakoff y Johnson?",
    correcta: "Estructura nuestro pensamiento y da forma a cómo comprendemos la realidad",
    incorrectas: [
      "Es solo un recurso literario sin relevancia cognitiva",
      "Se limita a expresar emociones sin contenido conceptual"
    ]
  },
  {
    enunciado: "¿Qué problema plantean las expresiones vacías?",
    correcta: "Que no tienen referente pero parecen tener sentido significativo",
    incorrectas: [
      "Que no pueden usarse en lógica matemática",
      "Que impiden toda comunicación social"
    ]
  },
  {
    enunciado: "¿Qué aportó David Lewis a la teoría del significado?",
    correcta: "El análisis de mundos posibles y contrafácticos en semántica modal",
    incorrectas: [
      "La teoría de las descripciones definidas",
      "El concepto de metáfora conceptual"
    ]
  },
  {
    enunciado: "¿Qué estudia la indexicalidad en semántica?",
    correcta: "Los términos cuyo significado depende del contexto de uso, como 'yo' o 'aquí'",
    incorrectas: [
      "Los términos lógicos universales como 'todo' o 'nada'",
      "Las expresiones que designan objetos abstractos"
    ]
  },
  {
    enunciado: "¿Qué aportó David Kaplan al análisis de la indexicalidad?",
    correcta: "Una teoría formal de los demostrativos y deícticos en lógica del lenguaje natural",
    incorrectas: [
      "La teoría de las cadenas causales de referencia",
      "La noción de acto perlocutivo en la comunicación"
    ]
  },
  {
    enunciado: "¿Qué tesis sostiene la hermenéutica de Gadamer sobre el significado?",
    correcta: "Que el lenguaje es medio universal de la comprensión y está ligado a la tradición histórica",
    incorrectas: [
      "Que el lenguaje carece de todo peso ontológico",
      "Que la interpretación es siempre subjetiva y arbitraria"
    ]
  },
  {
    enunciado: "¿Qué sostiene la crítica de Quine a la semántica tradicional?",
    correcta: "Que no existen significados estables y la traducción radical muestra la indeterminación del significado",
    incorrectas: [
      "Que el lenguaje humano puede reducirse a símbolos matemáticos",
      "Que el sentido y la referencia coinciden siempre en toda expresión"
    ]
  },
  {
    enunciado: "¿Qué argumento formuló Searle contra la IA fuerte?",
    correcta: "El de la habitación china, mostrando que manipular símbolos no equivale a comprender significado",
    incorrectas: [
      "El experimento del cerebro en una cubeta",
      "La paradoja de los cuervos de Hempel"
    ]
  },
  {
    enunciado: "¿Cómo se entiende el 'giro lingüístico' en filosofía?",
    correcta: "El paso de los problemas ontológicos clásicos al análisis del lenguaje como clave de la filosofía",
    incorrectas: [
      "El abandono total de la lógica en favor de la retórica",
      "El retorno a la metafísica medieval como fundamento del saber"
    ]
  },
  {
    enunciado: "¿Qué dimensión del lenguaje estudia la semántica?",
    correcta: "La relación entre signos y aquello que designan",
    incorrectas: [
      "La relación entre signos y los hablantes",
      "La relación entre signos y sus efectos psicológicos"
    ]
  },
  {
    enunciado: "¿Qué dimensión del lenguaje estudia la pragmática?",
    correcta: "El uso de los signos en contexto comunicativo",
    incorrectas: [
      "La estructura interna de las palabras",
      "Las transformaciones fonéticas a lo largo del tiempo"
    ]
  },
  {
    enunciado: "¿Qué dimensión estudia la sintaxis?",
    correcta: "La relación formal entre signos en una lengua",
    incorrectas: [
      "La relación entre lenguaje y pensamiento",
      "La interpretación histórica de los textos"
    ]
  },
  {
    enunciado: "¿Qué filósofo propuso la noción de 'lenguaje privado' como imposible?",
    correcta: "Wittgenstein en sus Investigaciones filosóficas",
    incorrectas: [
      "Heidegger en Ser y tiempo",
      "Descartes en sus Meditaciones metafísicas"
    ]
  },
  {
    enunciado: "¿Qué defiende el cognitivismo lingüístico?",
    correcta: "Que el significado surge de procesos mentales y estructuras cognitivas compartidas",
    incorrectas: [
      "Que el lenguaje solo puede estudiarse como convención social",
      "Que el significado es puramente arbitrario"
    ]
  },
  {
    enunciado: "¿Qué relación establece la semiótica de Umberto Eco con el significado?",
    correcta: "Que los signos se interpretan en cadenas infinitas de significación cultural",
    incorrectas: [
      "Que el significado se agota en la referencia material",
      "Que solo los signos matemáticos poseen significado real"
    ]
  },
  {
    enunciado: "¿Qué distingue la perspectiva internalista de la externalista en semántica?",
    correcta: "El internalismo sitúa el significado en la mente, el externalismo lo vincula al entorno",
    incorrectas: [
      "El internalismo estudia la pragmática y el externalismo la semiótica",
      "El internalismo se centra en la sintaxis y el externalismo en la fonética"
    ]
  },
  {
    enunciado: "¿Qué implicación tiene el debate actual sobre significado y comunicación?",
    correcta: "Que comprender el lenguaje exige integrar dimensiones lógicas, semánticas, pragmáticas y cognitivas",
    incorrectas: [
      "Que el significado se reduce a la etimología de las palabras",
      "Que la comunicación depende solo de la gramática formal"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al problema del significado en filosofía contemporánea?",
    correcta: "Su abordaje interdisciplinar desde lógica, lingüística, psicología y ciencias cognitivas",
    incorrectas: [
      "Su reducción al estudio exclusivo de la gramática latina",
      "Su identificación con la historia de las religiones"
    ]
  }
];
