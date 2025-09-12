// temarios/65-La-fenomenologia-de-husserl.js
// Basado en la plantilla 0-Plantilla-temario.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el objetivo central de la fenomenología husserliana?",
    correcta: "Constituir una ciencia rigurosa de los fenómenos tal como se dan a la conciencia",
    incorrectas: [
      "Sustituir la física natural por una metafísica dogmática",
      "Reducir la filosofía a una rama de la psicología empírica"
    ]
  },
  {
    enunciado: "¿Qué significa 'intencionalidad' en Husserl?",
    correcta: "Que toda conciencia es siempre conciencia de algo",
    incorrectas: [
      "Que la mente humana posee ideas innatas universales",
      "Que el pensamiento se explica únicamente por procesos cerebrales"
    ]
  },
  {
    enunciado: "¿Qué busca la reducción fenomenológica o epojé?",
    correcta: "Suspender el juicio sobre la existencia empírica para describir los fenómenos en su aparecer",
    incorrectas: [
      "Negar definitivamente la existencia del mundo externo",
      "Confirmar empíricamente las leyes de la física"
    ]
  },
  {
    enunciado: "¿Qué problema aborda Husserl en 'Investigaciones lógicas'?",
    correcta: "La crítica al psicologismo y la fundamentación objetiva de la lógica",
    incorrectas: [
      "La formulación del primer sistema axiomático en geometría",
      "La justificación teológica de la moral"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'mundo de la vida' (Lebenswelt)?",
    correcta: "Es el horizonte previo y originario de toda experiencia, base de la ciencia y de la racionalidad",
    incorrectas: [
      "Un conjunto de ficciones literarias sin valor filosófico",
      "La suma de representaciones científicas ya elaboradas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por reducción trascendental en Husserl?",
    correcta: "Indagar en las condiciones subjetivas que hacen posible la objetividad del conocimiento",
    incorrectas: [
      "Demostrar la existencia de sustancias inmutables",
      "Reducir la filosofía a observaciones experimentales"
    ]
  },
  {
    enunciado: "¿Qué influencias filosóficas marcan el inicio del pensamiento de Husserl?",
    correcta: "Descartes, Kant y Brentano, en particular la noción de intencionalidad",
    incorrectas: [
      "Epicuro, Aristóteles y San Agustín",
      "Comte, Marx y Darwin en clave positivista"
    ]
  },
  {
    enunciado: "¿Qué tesis principal defiende Husserl contra el psicologismo?",
    correcta: "Que las leyes lógicas poseen validez ideal independiente de procesos psicológicos",
    incorrectas: [
      "Que la verdad depende del consenso social",
      "Que los actos psíquicos son equivalentes a los juicios lógicos"
    ]
  },
  {
    enunciado: "¿Qué aporta la fenomenología eidética?",
    correcta: "La captación de las esencias de los objetos y vivencias",
    incorrectas: [
      "La descripción exclusiva de fenómenos físicos",
      "La validación empírica de hipótesis matemáticas"
    ]
  },
  {
    enunciado: "¿Qué plantea Husserl en 'La crisis de las ciencias europeas'?",
    correcta: "Una crítica al positivismo y la recuperación del mundo vivido como fundamento de la racionalidad",
    incorrectas: [
      "Una defensa de la primacía de la física sobre toda otra ciencia",
      "Un alegato en favor de la metafísica medieval"
    ]
  },
  {
    enunciado: "¿Qué problema suscita la intersubjetividad en la fenomenología?",
    correcta: "Explicar cómo la experiencia individual funda un sentido común compartido",
    incorrectas: [
      "Determinar la superioridad de unas ciencias sobre otras",
      "Negar la existencia del yo en la conciencia"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene la fenomenología con el idealismo?",
    correcta: "Tiende hacia un idealismo trascendental al situar en la conciencia la constitución del sentido",
    incorrectas: [
      "Es un materialismo que reduce todo a procesos cerebrales",
      "Afirma un realismo ingenuo de las cosas tal como aparecen"
    ]
  },
  {
    enunciado: "¿Qué pretende Husserl con la radicalidad cartesiana?",
    correcta: "Un fundamento indudable del conocimiento partiendo de la conciencia",
    incorrectas: [
      "Un retorno a la metafísica escolástica medieval",
      "Un método de verificación exclusivamente físico"
    ]
  },
  {
    enunciado: "¿Qué crítica realiza Husserl a las ciencias positivas?",
    correcta: "Que olvidan el mundo vivido y absolutizan sus métodos limitados",
    incorrectas: [
      "Que emplean demasiado razonamiento lógico",
      "Que no respetan la tradición escolástica"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la noción husserliana de fenómeno?",
    correcta: "Lo que se da a la conciencia en su aparecer intencional",
    incorrectas: [
      "La cosa en sí incognoscible",
      "Una ilusión sensible sin contenido de verdad"
    ]
  },
  {
    enunciado: "¿Qué influencia tuvo la fenomenología en la filosofía posterior?",
    correcta: "Inspiró corrientes como la ontología de Heidegger, el existencialismo y la hermenéutica",
    incorrectas: [
      "Reactivó el dogmatismo metafísico del siglo XVII",
      "Fue absorbida sin cambios por la filosofía analítica"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la descripción en el método fenomenológico?",
    correcta: "Constituye el núcleo de la fenomenología como ciencia descriptiva de la conciencia",
    incorrectas: [
      "Es un recurso literario sin relevancia filosófica",
      "Sirve únicamente como introducción a la especulación metafísica"
    ]
  },
  {
    enunciado: "¿Qué distingue a la fenomenología trascendental de la eidética?",
    correcta: "La primera indaga en las condiciones de posibilidad del conocimiento; la segunda en las esencias de los fenómenos",
    incorrectas: [
      "La primera estudia la naturaleza física, la segunda el alma",
      "La primera es ciencia natural, la segunda ciencia exacta"
    ]
  },
  {
    enunciado: "¿Qué significa que la fenomenología es una 'ciencia de esencias'?",
    correcta: "Que busca estructuras universales de la experiencia más allá de casos empíricos particulares",
    incorrectas: [
      "Que establece leyes físicas aplicables a todos los cuerpos",
      "Que niega la posibilidad de verdades universales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al método descriptivo de Husserl frente al explicativo de las ciencias?",
    correcta: "Suspende las explicaciones causales para atender a la vivencia tal como se da",
    incorrectas: [
      "Se limita a enumerar fenómenos externos",
      "Explica la conciencia desde bases fisiológicas"
    ]
  },
  {
    enunciado: "¿Cómo influyó Franz Brentano en Husserl?",
    correcta: "Introdujo la noción de intencionalidad como estructura esencial de la conciencia",
    incorrectas: [
      "Rechazó la existencia de toda conciencia intencional",
      "Redujo la filosofía a observación física"
    ]
  },
  {
    enunciado: "¿Qué tensiones internas enfrenta la fenomenología de Husserl?",
    correcta: "Las dificultades metodológicas y la oscilación entre idealismo y realismo",
    incorrectas: [
      "La falta total de impacto en filósofos posteriores",
      "La incompatibilidad absoluta con la ciencia natural"
    ]
  },
  {
    enunciado: "¿Qué significa que la fenomenología pretende ser 'ciencia estricta'?",
    correcta: "Que aspira a fundamentar la filosofía con el mismo rigor que las matemáticas o la lógica",
    incorrectas: [
      "Que busca sustituir a la religión como moral social",
      "Que intenta reducir la filosofía a experimentos empíricos"
    ]
  },
  {
    enunciado: "¿Qué aporta Husserl al concepto de racionalidad europea en 'La Crisis'?",
    correcta: "La necesidad de recuperar el mundo de la vida como fundamento de la ciencia",
    incorrectas: [
      "El regreso a una metafísica teológica",
      "La defensa de un relativismo cultural absoluto"
    ]
  },
  {
    enunciado: "¿Qué significa 'epojé' en términos prácticos?",
    correcta: "La puesta entre paréntesis de la actitud natural para describir el modo de aparecer de los fenómenos",
    incorrectas: [
      "La negación radical de toda experiencia sensible",
      "El olvido total de la realidad empírica"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene 'Ideas' en el pensamiento de Husserl?",
    correcta: "Marca el giro hacia la fenomenología trascendental y sistemática",
    incorrectas: [
      "Se limita a exponer anécdotas biográficas",
      "Es una recopilación de cartas sin valor filosófico"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el análisis intencional de la conciencia?",
    correcta: "La correlación entre actos de conciencia y objetos intencionales",
    incorrectas: [
      "La separación radical entre mente y mundo",
      "La identificación del objeto con una sustancia fija"
    ]
  },
  {
    enunciado: "¿Qué dificultades presenta la fenomenología para su aplicación práctica?",
    correcta: "La complejidad de su método y la abstracción de sus conceptos",
    incorrectas: [
      "La ausencia de rigor lógico en sus análisis",
      "La falta de reconocimiento académico en Europa"
    ]
  },
  {
    enunciado: "¿Qué significa 'radicalidad cartesiana' en Husserl?",
    correcta: "Llevar a fondo la exigencia de fundamentación absoluta del conocimiento",
    incorrectas: [
      "Aplicar el mecanicismo físico de Descartes a la psicología",
      "Someter la filosofía a la teología cristiana"
    ]
  },
  {
    enunciado: "¿Cómo se diferencia la fenomenología de Husserl de la psicología empírica?",
    correcta: "La primera describe estructuras esenciales de la conciencia, la segunda estudia hechos psíquicos particulares",
    incorrectas: [
      "La primera investiga conductas animales, la segunda vivencias humanas",
      "La primera analiza emociones, la segunda solo percepciones"
    ]
  },
  {
    enunciado: "¿Qué función cumple la 'descripción eidética' en la fenomenología?",
    correcta: "Permite captar las esencias universales a partir de la variación imaginaria",
    incorrectas: [
      "Proporciona leyes físicas universales",
      "Explica la evolución de las especies"
    ]
  },
  {
    enunciado: "¿Qué significa que la fenomenología sea 'trascendental'?",
    correcta: "Que indaga en las condiciones de posibilidad de la experiencia y el conocimiento",
    incorrectas: [
      "Que postula entidades metafísicas incognoscibles",
      "Que niega todo valor a la experiencia empírica"
    ]
  },
  {
    enunciado: "¿Qué problema filosófico resuelve la fenomenología al abordar la intencionalidad?",
    correcta: "Supera la escisión entre sujeto y objeto mostrando su correlación en la vivencia",
    incorrectas: [
      "Prueba la independencia total del objeto respecto del sujeto",
      "Elimina toda diferencia entre mente y cuerpo"
    ]
  },
  {
    enunciado: "¿Qué significa que el conocimiento tiene una 'estructura noemática-noética'?",
    correcta: "Que todo acto de conciencia (noesis) se refiere a un objeto intencional (noema)",
    incorrectas: [
      "Que el conocimiento se reduce a sensaciones materiales",
      "Que el conocimiento es siempre un proceso inconsciente"
    ]
  },
  {
    enunciado: "¿Qué pretende Husserl con su apelación a una 'filosofía primera'?",
    correcta: "Establecer una base radicalmente segura para todo saber",
    incorrectas: [
      "Sustituir las ciencias empíricas por teología",
      "Formular una ética normativa universal"
    ]
  },
  {
    enunciado: "¿Qué autores continúan o transforman la fenomenología husserliana?",
    correcta: "Heidegger, Sartre, Merleau-Ponty y Ricoeur",
    incorrectas: [
      "Locke, Hume y Berkeley",
      "Marx, Engels y Lenin"
    ]
  },
  {
    enunciado: "¿Qué valor se reconoce a la fenomenología en la filosofía contemporánea?",
    correcta: "Un aporte decisivo a la descripción rigurosa de la experiencia y al diálogo con ciencias humanas",
    incorrectas: [
      "Una breve moda sin continuidad intelectual",
      "Una doctrina que defiende el materialismo mecanicista"
    ]
  }
];
