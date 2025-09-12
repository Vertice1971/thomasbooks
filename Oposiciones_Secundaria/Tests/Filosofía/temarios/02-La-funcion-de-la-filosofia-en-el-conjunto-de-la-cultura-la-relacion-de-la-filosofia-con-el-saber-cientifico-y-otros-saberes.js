var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función general de la filosofía dentro de la cultura?",
    correcta: "Ofrecer una visión crítica, integradora y de orientación sobre los saberes",
    incorrectas: [
      "Sustituir completamente a la ciencia en la búsqueda de la verdad",
      "Reducirse a transmitir dogmas religiosos"
    ]
  },
  {
    enunciado: "¿Qué entendemos por cultura en relación con la filosofía?",
    correcta: "El conjunto de producciones simbólicas y prácticas humanas donde la filosofía ocupa un lugar central",
    incorrectas: [
      "La simple acumulación de conocimientos técnicos",
      "El arte separado de toda reflexión racional"
    ]
  },
  {
    enunciado: "¿Qué función crítica cumple la filosofía en la cultura?",
    correcta: "Desenmascarar prejuicios, ideologías y dogmatismos",
    incorrectas: [
      "Afirmar la validez de toda tradición sin cuestionarla",
      "Negar la existencia de distintas formas de conocimiento"
    ]
  },
  {
    enunciado: "¿Qué filósofo definió la filosofía como ciencia del ser en cuanto ser?",
    correcta: "Aristóteles",
    incorrectas: [
      "Platón",
      "Santo Tomás de Aquino"
    ]
  },
  {
    enunciado: "¿Qué significa que la filosofía tenga una función normativa?",
    correcta: "Que orienta la acción humana en ámbitos éticos y políticos",
    incorrectas: [
      "Que dicta leyes jurídicas directamente",
      "Que sustituye a la religión en todos sus aspectos"
    ]
  },
  {
    enunciado: "¿Qué autor moderno introdujo el método de la duda como base de la ciencia?",
    correcta: "René Descartes",
    incorrectas: [
      "Francis Bacon",
      "David Hume"
    ]
  },
  {
    enunciado: "¿Qué defendía el empirismo frente al racionalismo?",
    correcta: "Que el conocimiento procede de la experiencia sensible",
    incorrectas: [
      "Que las ideas innatas son la base del conocimiento",
      "Que la fe es el único origen de la verdad"
    ]
  },
  {
    enunciado: "¿Qué función cumple la filosofía respecto a los límites del conocimiento científico?",
    correcta: "Reconocer y analizar las preguntas que la ciencia no puede responder",
    incorrectas: [
      "Ampliar el campo experimental de las ciencias naturales",
      "Eliminar toda reflexión sobre ética y valores"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al positivismo de Comte?",
    correcta: "Reducir el conocimiento válido a lo empírico y verificable",
    incorrectas: [
      "Reivindicar lo trascendente frente a lo sensible",
      "Explicar la realidad desde categorías metafísicas"
    ]
  },
  {
    enunciado: "¿Qué filósofo formuló el falsacionismo como criterio científico?",
    correcta: "Karl Popper",
    incorrectas: [
      "Thomas Kuhn",
      "Paul Feyerabend"
    ]
  },
  {
    enunciado: "¿Qué concepto central introdujo Thomas Kuhn en su filosofía de la ciencia?",
    correcta: "El paradigma científico y sus revoluciones",
    incorrectas: [
      "La inducción como base del conocimiento",
      "La supremacía de la lógica formal"
    ]
  },
  {
    enunciado: "¿Qué defendía Feyerabend en 'Contra el método'?",
    correcta: "Un pluralismo metodológico en la ciencia",
    incorrectas: [
      "Una única lógica válida para todo conocimiento",
      "La eliminación de toda crítica a la ciencia"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene la filosofía con la ética?",
    correcta: "Reflexiona sobre los valores y orienta la acción moral",
    incorrectas: [
      "Sustituye los códigos jurídicos vigentes",
      "Rechaza toda norma práctica"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene la filosofía con la política?",
    correcta: "Analiza y fundamenta conceptos como justicia, poder o libertad",
    incorrectas: [
      "Se limita a narrar hechos históricos",
      "Dicta directamente la legislación positiva"
    ]
  },
  {
    enunciado: "¿Qué filósofo escribió 'Teoría de la justicia'?",
    correcta: "John Rawls",
    incorrectas: [
      "Jürgen Habermas",
      "Karl Marx"
    ]
  },
  {
    enunciado: "¿Qué filósofo defendió la razón comunicativa frente al instrumentalismo?",
    correcta: "Jürgen Habermas",
    incorrectas: [
      "Theodor Adorno",
      "Martin Heidegger"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la filosofía en relación con la religión?",
    correcta: "Dialogar críticamente y reflexionar sobre la experiencia religiosa",
    incorrectas: [
      "Reducirse a catecismo teológico",
      "Negar sin más toda dimensión espiritual"
    ]
  },
  {
    enunciado: "¿Qué filósofo medieval definió la filosofía como sierva de la teología?",
    correcta: "Santo Tomás de Aquino",
    incorrectas: [
      "San Agustín",
      "Guillermo de Ockham"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene la filosofía con la estética?",
    correcta: "Reflexiona sobre la belleza, lo sublime y la experiencia artística",
    incorrectas: [
      "Sustituye la producción artística por teorías",
      "Rechaza lo sensible en favor de lo abstracto"
    ]
  },
  {
    enunciado: "¿Qué autor reflexionó sobre la técnica como modo de desvelamiento del ser?",
    correcta: "Martin Heidegger",
    incorrectas: [
      "Herbert Marcuse",
      "Hannah Arendt"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene la filosofía con la historia?",
    correcta: "Analiza el sentido y la interpretación de los hechos históricos",
    incorrectas: [
      "Se limita a recopilar cronologías",
      "Niega la importancia de la memoria cultural"
    ]
  },
  {
    enunciado: "¿Qué filósofo destacó la importancia de la memoria y la tradición en la hermenéutica?",
    correcta: "Hans-Georg Gadamer",
    incorrectas: [
      "Paul Ricoeur",
      "Michel Foucault"
    ]
  },
  {
    enunciado: "¿Qué significa que la filosofía tenga una función creativa en la cultura?",
    correcta: "Que abre nuevos paradigmas culturales, estéticos y sociales",
    incorrectas: [
      "Que impone dogmas universales",
      "Que limita la creatividad artística"
    ]
  },
  {
    enunciado: "¿Qué filósofo definió al ser humano como animal simbólico?",
    correcta: "Ernst Cassirer",
    incorrectas: [
      "Aristóteles",
      "Nietzsche"
    ]
  },
  {
    enunciado: "¿Qué autor escribió 'El cultivo de la humanidad' defendiendo la filosofía en la educación?",
    correcta: "Martha Nussbaum",
    incorrectas: [
      "Judith Butler",
      "Susan Haack"
    ]
  },
  {
    enunciado: "¿Qué filósofo es considerado fundador de la sociología positivista?",
    correcta: "Auguste Comte",
    incorrectas: [
      "Émile Durkheim",
      "Max Weber"
    ]
  },
  {
    enunciado: "¿Qué filósofo formuló la teoría del interés cognoscitivo?",
    correcta: "Jürgen Habermas",
    incorrectas: [
      "Karl Popper",
      "Wilhelm Dilthey"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene la filosofía con la antropología?",
    correcta: "Reflexiona sobre la naturaleza, cultura y sentido del ser humano",
    incorrectas: [
      "Se limita a la descripción de costumbres",
      "Reduce al hombre a su dimensión biológica"
    ]
  },
  {
    enunciado: "¿Qué filósofo escribió 'La condición humana' analizando el trabajo, la acción y la labor?",
    correcta: "Hannah Arendt",
    incorrectas: [
      "Karl Marx",
      "Simone Weil"
    ]
  },
  {
    enunciado: "¿Qué autor propuso que la historia de la ciencia avanza por revoluciones científicas?",
    correcta: "Thomas Kuhn",
    incorrectas: [
      "Karl Popper",
      "Immanuel Kant"
    ]
  },
  {
    enunciado: "¿Qué filósofo planteó la importancia del pluralismo metodológico en ciencia?",
    correcta: "Paul Feyerabend",
    incorrectas: [
      "Francis Bacon",
      "Wilhelm Windelband"
    ]
  },
  {
    enunciado: "¿Qué significa que la filosofía sea un saber de segundo grado?",
    correcta: "Que reflexiona sobre los fundamentos y métodos de otros saberes",
    incorrectas: [
      "Que depende totalmente de la ciencia empírica",
      "Que carece de autonomía propia"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene la filosofía con la bioética?",
    correcta: "Analiza críticamente los dilemas morales de la biomedicina y la vida humana",
    incorrectas: [
      "Sustituye las decisiones médicas concretas",
      "Se limita a aprobar toda innovación tecnológica"
    ]
  },
  {
    enunciado: "¿Qué filósofo defendió que la filosofía debía orientar a la humanidad hacia la emancipación?",
    correcta: "Herbert Marcuse",
    incorrectas: [
      "Karl Popper",
      "Claude Lévi-Strauss"
    ]
  },
  {
    enunciado: "¿Qué filósofo introdujo la noción de 'razón instrumental' criticando la ciencia moderna?",
    correcta: "Max Horkheimer",
    incorrectas: [
      "Émile Durkheim",
      "Gaston Bachelard"
    ]
  },
  {
    enunciado: "¿Qué filósofo escribió 'Misión de la universidad' reflexionando sobre la función cultural de la filosofía?",
    correcta: "Ortega y Gasset",
    incorrectas: [
      "Unamuno",
      "Zubiri"
    ]
  },
  {
    enunciado: "¿Qué función tiene la filosofía frente a la fragmentación del saber en la modernidad?",
    correcta: "Integrar y unificar los distintos conocimientos en una visión de conjunto",
    incorrectas: [
      "Aceptar la fragmentación sin crítica",
      "Eliminar los saberes particulares en favor de la metafísica"
    ]
  },
  {
    enunciado: "¿Qué filósofo señaló que la ciencia necesita de la ética y la filosofía para orientar su uso?",
    correcta: "Hans Jonas",
    incorrectas: [
      "Karl Marx",
      "Sigmund Freud"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la relación de la filosofía con la tecnología?",
    correcta: "Reflexionar sobre sus implicaciones éticas, sociales y culturales",
    incorrectas: [
      "Convertirse en ingeniería aplicada",
      "Negar todo avance técnico"
    ]
  }
];
