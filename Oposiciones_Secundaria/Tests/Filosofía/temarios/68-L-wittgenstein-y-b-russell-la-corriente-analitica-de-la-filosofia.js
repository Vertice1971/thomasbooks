// temarios/68-L-wittgenstein-y-b-russell-la-corriente-analitica-de-la-filosofia.js
// Basado en la plantilla 0-Plantilla-temario.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza a la filosofía analítica en su surgimiento?",
    correcta: "La reacción contra el idealismo y la búsqueda de claridad mediante lógica y análisis del lenguaje",
    incorrectas: [
      "La defensa del irracionalismo romántico",
      "La recuperación de la metafísica medieval"
    ]
  },
  {
    enunciado: "¿Qué defendía el atomismo lógico de Bertrand Russell?",
    correcta: "Que el mundo está compuesto por hechos simples representables por proposiciones lógicas",
    incorrectas: [
      "Que la realidad última es espiritual e indivisible",
      "Que solo las ciencias empíricas explican la totalidad del mundo"
    ]
  },
  {
    enunciado: "¿Qué entienden Russell y los primeros analíticos por hechos?",
    correcta: "Entidades objetivas e independientes que constituyen la realidad",
    incorrectas: [
      "Experiencias subjetivas sin correlato externo",
      "Ideas innatas de origen platónico"
    ]
  },
  {
    enunciado: "¿Qué obra monumental escribió Russell con Alfred North Whitehead?",
    correcta: "Principia Mathematica",
    incorrectas: [
      "Tractatus Logico-Philosophicus",
      "Investigaciones Filosóficas"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la lógica formal en la corriente analítica?",
    correcta: "Es la herramienta principal para clarificar el pensamiento y el lenguaje",
    incorrectas: [
      "Es un recurso literario para adornar discursos",
      "Es secundaria frente a la intuición artística"
    ]
  },
  {
    enunciado: "¿Qué etapa representa el primer Wittgenstein?",
    correcta: "El Tractatus Logico-Philosophicus y la idea de isomorfismo entre lenguaje y mundo",
    incorrectas: [
      "Las Investigaciones Filosóficas y los juegos de lenguaje",
      "El giro hermenéutico de la posguerra"
    ]
  },
  {
    enunciado: "¿Cómo concibe el mundo el Tractatus de Wittgenstein?",
    correcta: "Como la totalidad de los hechos, no de las cosas",
    incorrectas: [
      "Como la suma de objetos materiales",
      "Como una construcción puramente mental"
    ]
  },
  {
    enunciado: "¿Qué significa que el lenguaje es 'figura' del mundo en el Tractatus?",
    correcta: "Que la proposición lógica retrata la estructura del hecho al que corresponde",
    incorrectas: [
      "Que el lenguaje crea la realidad a su antojo",
      "Que el lenguaje es un mero cúmulo de metáforas"
    ]
  },
  {
    enunciado: "¿Qué límites señala Wittgenstein en el Tractatus?",
    correcta: "Los límites del lenguaje son los límites del mundo y del sentido",
    incorrectas: [
      "Los límites del conocimiento son solo empíricos",
      "Los límites del mundo están en la percepción sensorial"
    ]
  },
  {
    enunciado: "¿Qué aporta el segundo Wittgenstein en las Investigaciones Filosóficas?",
    correcta: "La noción de juegos de lenguaje y la idea de que el significado depende del uso",
    incorrectas: [
      "La defensa del atomismo lógico",
      "La idea de que el lenguaje solo puede ser formal"
    ]
  },
  {
    enunciado: "¿Qué significa que el significado es uso?",
    correcta: "Que el sentido de las palabras depende de las prácticas sociales en que se emplean",
    incorrectas: [
      "Que cada palabra tiene un significado fijo y eterno",
      "Que el uso es irrelevante para la filosofía"
    ]
  },
  {
    enunciado: "¿Qué crítica hace el segundo Wittgenstein a la filosofía tradicional?",
    correcta: "Que los problemas filosóficos son malentendidos del lenguaje",
    incorrectas: [
      "Que la filosofía debe abandonar todo análisis del lenguaje",
      "Que los problemas filosóficos se resuelven con fe"
    ]
  },
  {
    enunciado: "¿Qué es un juego de lenguaje?",
    correcta: "Una práctica lingüística regulada por reglas compartidas en un contexto de vida",
    incorrectas: [
      "Un artificio lógico sin relación con la vida",
      "Un divertimento literario sin normas"
    ]
  },
  {
    enunciado: "¿Cómo se relaciona Russell con el realismo?",
    correcta: "Defiende que la realidad existe independientemente de la mente",
    incorrectas: [
      "Afirma que todo ser es creación de la conciencia",
      "Sostiene un idealismo espiritualista"
    ]
  },
  {
    enunciado: "¿Qué diferencia central hay entre el primer y el segundo Wittgenstein?",
    correcta: "El primero concibe el lenguaje como espejo lógico; el segundo lo entiende como uso social",
    incorrectas: [
      "El primero niega la lógica y el segundo la acepta",
      "El primero se centra en ética y el segundo en metafísica"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue el análisis lógico del lenguaje en Russell?",
    correcta: "Eliminar ambigüedades y clarificar proposiciones",
    incorrectas: [
      "Crear un lenguaje poético universal",
      "Negar la existencia de la realidad externa"
    ]
  },
  {
    enunciado: "¿Qué aportó Russell a la teoría de las descripciones?",
    correcta: "Una solución a problemas de referencia en expresiones con términos sin objeto real",
    incorrectas: [
      "Una defensa de la teoría aristotélica de las categorías",
      "Una crítica radical a la matemática"
    ]
  },
  {
    enunciado: "¿Qué tipo de filosofía impulsaron Russell y Wittgenstein?",
    correcta: "Una filosofía analítica centrada en el análisis del lenguaje",
    incorrectas: [
      "Una filosofía de la sospecha",
      "Una filosofía hermenéutica"
    ]
  },
  {
    enunciado: "¿Qué problema pretende resolver la filosofía analítica?",
    correcta: "La confusión conceptual causada por un uso inadecuado del lenguaje",
    incorrectas: [
      "El fundamento de la fe religiosa",
      "La demostración de la inmortalidad del alma"
    ]
  },
  {
    enunciado: "¿Qué significa que las proposiciones tienen sentido en el Tractatus?",
    correcta: "Que describen estados de cosas posibles en el mundo",
    incorrectas: [
      "Que expresan únicamente sentimientos subjetivos",
      "Que remiten a entidades metafísicas eternas"
    ]
  },
  {
    enunciado: "¿Qué distingue a la filosofía analítica de otras corrientes contemporáneas?",
    correcta: "Su énfasis en la claridad, la lógica y el lenguaje",
    incorrectas: [
      "Su rechazo de toda ciencia empírica",
      "Su identificación con el irracionalismo vitalista"
    ]
  },
  {
    enunciado: "¿Qué implica el principio de verificabilidad relacionado con el positivismo lógico?",
    correcta: "Que una proposición solo tiene sentido si es verificable empírica o lógicamente",
    incorrectas: [
      "Que todo enunciado religioso es verdadero",
      "Que todo lo pensado es necesariamente real"
    ]
  },
  {
    enunciado: "¿Cómo influyó Wittgenstein en la filosofía posterior?",
    correcta: "Marcó el paso del análisis lógico al análisis del uso del lenguaje",
    incorrectas: [
      "Restauró la metafísica medieval",
      "Defendió la primacía de la fe religiosa"
    ]
  },
  {
    enunciado: "¿Qué significa el realismo pluralista de Russell?",
    correcta: "Que la realidad está formada por múltiples hechos independientes",
    incorrectas: [
      "Que todo procede de una sustancia única",
      "Que el mundo depende de la conciencia"
    ]
  },
  {
    enunciado: "¿Qué filósofo influyó en el joven Wittgenstein y en Russell con su lógica?",
    correcta: "Gottlob Frege",
    incorrectas: [
      "Immanuel Kant",
      "Georg Wilhelm Friedrich Hegel"
    ]
  },
  {
    enunciado: "¿Qué significa que la filosofía debe 'mostrar' y no 'decir' en el Tractatus?",
    correcta: "Que lo más profundo no puede expresarse en proposiciones, solo se muestra en el límite del lenguaje",
    incorrectas: [
      "Que la filosofía debe callar todo enunciado lógico",
      "Que el lenguaje carece de valor expresivo"
    ]
  },
  {
    enunciado: "¿Qué papel juega la matemática en el proyecto de Russell?",
    correcta: "Es el modelo de rigor que debe alcanzar la filosofía",
    incorrectas: [
      "Es un lenguaje inútil para la ciencia",
      "Es una mera convención sin contenido objetivo"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre el lenguaje y los hechos en el Tractatus?",
    correcta: "La estructura lógica de la proposición refleja la estructura del hecho",
    incorrectas: [
      "El lenguaje crea mágicamente la realidad",
      "El lenguaje es totalmente arbitrario"
    ]
  },
  {
    enunciado: "¿Qué significa la noción de 'juegos de lenguaje'?",
    correcta: "Conjunto de prácticas lingüísticas con reglas diversas según contextos",
    incorrectas: [
      "Lenguaje universal válido en todo contexto",
      "Sistema lógico único para describir la realidad"
    ]
  },
  {
    enunciado: "¿Qué buscaba Russell al construir un lenguaje ideal?",
    correcta: "Representar la realidad con precisión eliminando ambigüedades",
    incorrectas: [
      "Crear un idioma artificial para la literatura",
      "Sustituir las lenguas naturales por símbolos místicos"
    ]
  },
  {
    enunciado: "¿Qué significa el análisis filosófico para la tradición analítica?",
    correcta: "Aclarar conceptos y eliminar confusiones",
    incorrectas: [
      "Probar doctrinas metafísicas absolutas",
      "Establecer dogmas religiosos universales"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el segundo Wittgenstein con la práctica social?",
    correcta: "El significado surge del uso social compartido del lenguaje",
    incorrectas: [
      "El significado es una idea privada",
      "El lenguaje carece de dimensión social"
    ]
  },
  {
    enunciado: "¿Qué filosofía se opone a la claridad defendida por los analíticos?",
    correcta: "La filosofía continental que enfatiza el sentido histórico y metafísico",
    incorrectas: [
      "La filosofía moderna de la ciencia",
      "La lógica simbólica"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre proposiciones tautológicas y empíricas en el Tractatus?",
    correcta: "Las tautologías son verdades lógicas sin contenido fáctico; las empíricas describen hechos posibles",
    incorrectas: [
      "Las tautologías son enunciados religiosos; las empíricas son metafísicas",
      "Ambas expresan lo mismo en distinto estilo"
    ]
  },
  {
    enunciado: "¿Qué significa que el lenguaje tiene una función terapéutica en el segundo Wittgenstein?",
    correcta: "Que la filosofía disuelve problemas al aclarar cómo usamos las palabras",
    incorrectas: [
      "Que la filosofía debe curar enfermedades físicas",
      "Que el lenguaje reemplaza a la psicología"
    ]
  },
  {
    enunciado: "¿Qué aspecto del lenguaje subraya Wittgenstein en sus Investigaciones?",
    correcta: "La diversidad y flexibilidad de usos según contextos",
    incorrectas: [
      "La rigidez de un sistema lógico universal",
      "La fijeza de significados eternos"
    ]
  },
  {
    enunciado: "¿Qué significa el 'isomorfismo' en el primer Wittgenstein?",
    correcta: "La correspondencia estructural entre lenguaje y mundo",
    incorrectas: [
      "La creación artística del mundo mediante metáforas",
      "La imposibilidad de cualquier relación entre lenguaje y realidad"
    ]
  },
  {
    enunciado: "¿Qué significa la expresión del Tractatus: 'De lo que no se puede hablar, mejor es callar'?",
    correcta: "Que hay límites del lenguaje más allá de los cuales no hay proposiciones con sentido",
    incorrectas: [
      "Que la filosofía debe abandonar la lógica",
      "Que toda palabra carece de significado"
    ]
  }
];
