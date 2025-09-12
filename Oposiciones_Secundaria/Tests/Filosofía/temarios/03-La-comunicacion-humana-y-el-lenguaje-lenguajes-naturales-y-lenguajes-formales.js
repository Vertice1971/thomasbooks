var PREGUNTAS = [
  {
    enunciado: "¿Qué distingue al lenguaje humano frente a la comunicación animal?",
    correcta: "Su capacidad simbólica, creativa y de doble articulación",
    incorrectas: [
      "Su dependencia exclusiva de estímulos inmediatos",
      "La ausencia de arbitrariedad en sus signos"
    ]
  },
  {
    enunciado: "¿Qué elementos básicos componen el proceso de comunicación según el modelo clásico?",
    correcta: "Emisor, receptor, mensaje, canal, código y contexto",
    incorrectas: [
      "Emisor, oyente, texto y gramática",
      "Lengua, sociedad, cultura y escritura"
    ]
  },
  {
    enunciado: "¿Qué función del lenguaje describe el mundo y transmite información objetiva?",
    correcta: "La función representativa o referencial",
    incorrectas: [
      "La función expresiva",
      "La función fática"
    ]
  },
  {
    enunciado: "¿Qué función del lenguaje busca influir sobre el receptor?",
    correcta: "La función apelativa o conativa",
    incorrectas: [
      "La función representativa",
      "La función metalingüística"
    ]
  },
  {
    enunciado: "¿Qué función del lenguaje analiza y comenta el propio código lingüístico?",
    correcta: "La función metalingüística",
    incorrectas: [
      "La función fática",
      "La función poética"
    ]
  },
  {
    enunciado: "¿Qué función del lenguaje mantiene y refuerza el canal de comunicación?",
    correcta: "La función fática",
    incorrectas: [
      "La función apelativa",
      "La función representativa"
    ]
  },
  {
    enunciado: "¿Qué autor distinguió entre lengua y habla?",
    correcta: "Ferdinand de Saussure",
    incorrectas: [
      "Noam Chomsky",
      "Roman Jakobson"
    ]
  },
  {
    enunciado: "¿Qué es el signo lingüístico según Saussure?",
    correcta: "La unión de significante y significado",
    incorrectas: [
      "Una simple referencia a objetos materiales",
      "Un gesto universal de comunicación"
    ]
  },
  {
    enunciado: "¿Qué filósofo sostuvo que los límites de mi lenguaje son los límites de mi mundo?",
    correcta: "Ludwig Wittgenstein",
    incorrectas: [
      "John Searle",
      "J. L. Austin"
    ]
  },
  {
    enunciado: "¿Qué estudia la pragmática del lenguaje?",
    correcta: "El uso del lenguaje en contextos concretos",
    incorrectas: [
      "Las estructuras universales del pensamiento",
      "La historia de la escritura"
    ]
  },
  {
    enunciado: "¿Qué autor formuló la teoría de los actos de habla?",
    correcta: "J. L. Austin",
    incorrectas: [
      "Noam Chomsky",
      "Michel Foucault"
    ]
  },
  {
    enunciado: "¿Qué autor desarrolló la hipótesis de la relatividad lingüística?",
    correcta: "Sapir y Whorf",
    incorrectas: [
      "Piaget y Vygotski",
      "Chomsky y Hockett"
    ]
  },
  {
    enunciado: "¿Qué defendió Vygotski en relación entre lenguaje y pensamiento?",
    correcta: "El lenguaje es base del pensamiento socializado",
    incorrectas: [
      "El pensamiento se desarrolla siempre antes del lenguaje",
      "El lenguaje es independiente de la vida social"
    ]
  },
  {
    enunciado: "¿Qué autor sostuvo que el pensamiento precede al lenguaje en el niño?",
    correcta: "Jean Piaget",
    incorrectas: [
      "Lev Vygotski",
      "Noam Chomsky"
    ]
  },
  {
    enunciado: "¿Qué propiedad del lenguaje humano permite referirse a objetos no presentes?",
    correcta: "El desplazamiento",
    incorrectas: [
      "La redundancia",
      "La iconicidad"
    ]
  },
  {
    enunciado: "¿Qué propiedad del lenguaje humano permite crear infinitos mensajes a partir de elementos finitos?",
    correcta: "La productividad",
    incorrectas: [
      "La motivación",
      "La linealidad"
    ]
  },
  {
    enunciado: "¿Qué propiedad del signo lingüístico indica que la relación significante-significado es convencional?",
    correcta: "La arbitrariedad",
    incorrectas: [
      "La motivación",
      "La sinonimia"
    ]
  },
  {
    enunciado: "¿Qué autor propuso la noción de doble articulación del lenguaje?",
    correcta: "André Martinet",
    incorrectas: [
      "Roman Jakobson",
      "Noam Chomsky"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los lenguajes naturales?",
    correcta: "Son evolutivos, sociales y culturalmente transmitidos",
    incorrectas: [
      "Son sistemas artificiales de notación",
      "Carecen de polisemia y ambigüedad"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los lenguajes formales?",
    correcta: "Poseen reglas explícitas y sintaxis rigurosa sin ambigüedad",
    incorrectas: [
      "Se desarrollan espontáneamente en comunidades humanas",
      "Tienen riqueza expresiva y polisemia"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a un lenguaje formal?",
    correcta: "La lógica simbólica",
    incorrectas: [
      "El español",
      "El latín clásico"
    ]
  },
  {
    enunciado: "¿Qué filósofo desarrolló la escritura conceptual o 'Begriffsschrift'?",
    correcta: "Gottlob Frege",
    incorrectas: [
      "Bertrand Russell",
      "Alfred Tarski"
    ]
  },
  {
    enunciado: "¿Qué autores escribieron los 'Principia Mathematica'?",
    correcta: "Russell y Whitehead",
    incorrectas: [
      "Frege y Peano",
      "Kant y Hegel"
    ]
  },
  {
    enunciado: "¿Qué autor propuso una concepción semántica de la verdad?",
    correcta: "Alfred Tarski",
    incorrectas: [
      "Ludwig Wittgenstein",
      "Charles Sanders Peirce"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal existe entre lenguajes naturales y formales?",
    correcta: "Los naturales son expresivos y contextuales, los formales precisos y sin ambigüedad",
    incorrectas: [
      "Los naturales carecen de gramática, los formales sí la tienen",
      "Los naturales son fijos, los formales evolucionan espontáneamente"
    ]
  },
  {
    enunciado: "¿Qué estudia la semiótica?",
    correcta: "Los sistemas de signos en la comunicación humana y no humana",
    incorrectas: [
      "La evolución genética del habla",
      "La enseñanza de lenguas extranjeras"
    ]
  },
  {
    enunciado: "¿Qué autor escribió el 'Tratado de semiótica general'?",
    correcta: "Umberto Eco",
    incorrectas: [
      "Roland Barthes",
      "Michel Foucault"
    ]
  },
  {
    enunciado: "¿Qué autor sostuvo que todo es signo en la cultura?",
    correcta: "Roland Barthes",
    incorrectas: [
      "Saussure",
      "Derrida"
    ]
  },
  {
    enunciado: "¿Qué filósofo analizó el lenguaje en términos de juegos de lenguaje?",
    correcta: "Wittgenstein en su segunda etapa",
    incorrectas: [
      "Wittgenstein en el Tractatus",
      "Karl Popper"
    ]
  },
  {
    enunciado: "¿Qué filósofo definió al ser humano como 'animal que habla'?",
    correcta: "Aristóteles",
    incorrectas: [
      "Platón",
      "Descartes"
    ]
  },
  {
    enunciado: "¿Qué autor aplicó la lingüística al análisis de la cultura de masas?",
    correcta: "Roland Barthes",
    incorrectas: [
      "Claude Lévi-Strauss",
      "Jürgen Habermas"
    ]
  },
  {
    enunciado: "¿Qué autor defendió que la comunicación incluye implicaturas conversacionales?",
    correcta: "H. P. Grice",
    incorrectas: [
      "John Searle",
      "Michel Foucault"
    ]
  },
  {
    enunciado: "¿Qué filósofo analizó los límites del lenguaje en el Tractatus?",
    correcta: "Wittgenstein",
    incorrectas: [
      "Kant",
      "Heidegger"
    ]
  },
  {
    enunciado: "¿Qué filósofo desarrolló la teoría de los actos de habla indirectos?",
    correcta: "John Searle",
    incorrectas: [
      "Austin",
      "Chomsky"
    ]
  },
  {
    enunciado: "¿Qué autor revolucionó la lingüística con la teoría de la gramática generativa?",
    correcta: "Noam Chomsky",
    incorrectas: [
      "Saussure",
      "Jakobson"
    ]
  },
  {
    enunciado: "¿Qué filósofo norteamericano defendió la importancia de la verdad y la interpretación en el lenguaje?",
    correcta: "Donald Davidson",
    incorrectas: [
      "Richard Rorty",
      "Willard Quine"
    ]
  },
  {
    enunciado: "¿Qué filósofo introdujo la noción de semiosis ilimitada?",
    correcta: "Charles Sanders Peirce",
    incorrectas: [
      "Umberto Eco",
      "Saussure"
    ]
  },
  {
    enunciado: "¿Qué filósofo propuso la noción de discurso como práctica de poder?",
    correcta: "Michel Foucault",
    incorrectas: [
      "Derrida",
      "Habermas"
    ]
  },
  {
    enunciado: "¿Qué filósofo planteó la deconstrucción del lenguaje?",
    correcta: "Jacques Derrida",
    incorrectas: [
      "Jean-François Lyotard",
      "Gilles Deleuze"
    ]
  }
];
