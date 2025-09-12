// temarios/71-La-filosofia-de-fin-de-siglo-hermeneutica-y-posmodernidad.js
// Basado en la plantilla 0-Plantilla-temario.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza a la filosofía de fin de siglo XX?",
    correcta: "La crisis de los grandes relatos y el giro hacia el lenguaje y la interpretación",
    incorrectas: [
      "El retorno a la metafísica medieval",
      "La confianza absoluta en la razón ilustrada"
    ]
  },
  {
    enunciado: "¿Qué estudia la hermenéutica filosófica?",
    correcta: "La interpretación y el proceso de comprensión de textos, cultura y existencia",
    incorrectas: [
      "El método experimental de las ciencias naturales",
      "La deducción matemática aplicada a la lógica"
    ]
  },
  {
    enunciado: "¿Qué autor representa la hermenéutica filosófica con la obra 'Verdad y método'?",
    correcta: "Hans-Georg Gadamer",
    incorrectas: [
      "Paul Ricoeur",
      "Jean-François Lyotard"
    ]
  },
  {
    enunciado: "¿Qué significa la fusión de horizontes en Gadamer?",
    correcta: "El encuentro entre el horizonte del intérprete y el del texto en el proceso de comprensión",
    incorrectas: [
      "La imposición de un horizonte sobre otro",
      "La anulación del horizonte histórico del texto"
    ]
  },
  {
    enunciado: "¿Qué aporta Paul Ricoeur a la hermenéutica?",
    correcta: "Una hermenéutica del símbolo y del texto, integrando explicación y comprensión",
    incorrectas: [
      "La teoría de la deconstrucción",
      "La crítica al poder disciplinario"
    ]
  },
  {
    enunciado: "¿Qué obra de Lyotard expone la condición posmoderna?",
    correcta: "La condición posmoderna (1979)",
    incorrectas: [
      "La sociedad abierta y sus enemigos",
      "De la gramatología"
    ]
  },
  {
    enunciado: "¿Qué significa la incredulidad hacia los metarrelatos en Lyotard?",
    correcta: "El rechazo de grandes narrativas totalizadoras como el progreso o la emancipación universal",
    incorrectas: [
      "La sustitución de todos los relatos por un relato único",
      "La negación del lenguaje como medio de comunicación"
    ]
  },
  {
    enunciado: "¿Qué autor introduce el concepto de episteme y genealogía del poder-saber?",
    correcta: "Michel Foucault",
    incorrectas: [
      "Jacques Derrida",
      "Hans-Georg Gadamer"
    ]
  },
  {
    enunciado: "¿Qué instituciones analiza Foucault como dispositivos de control?",
    correcta: "La prisión, la escuela, el hospital",
    incorrectas: [
      "La familia, la religión, el arte",
      "La ciencia, la política y la filosofía"
    ]
  },
  {
    enunciado: "¿Qué propone Derrida con la deconstrucción?",
    correcta: "Una lectura crítica que desvela tensiones y oposiciones ocultas en los textos",
    incorrectas: [
      "Un método lógico-matemático de análisis",
      "Una síntesis definitiva de todas las corrientes"
    ]
  },
  {
    enunciado: "¿Qué significa el logocentrismo criticado por Derrida?",
    correcta: "La primacía otorgada a la palabra y a la presencia como fundamento de la verdad",
    incorrectas: [
      "La centralidad de los juegos de lenguaje",
      "La importancia del mito en la cultura"
    ]
  },
  {
    enunciado: "¿Qué plantea Gianni Vattimo con el pensamiento débil?",
    correcta: "Una filosofía que renuncia a fundamentos absolutos y abraza la pluralidad",
    incorrectas: [
      "Una propuesta de metafísica fuerte y definitiva",
      "Un retorno a la escolástica medieval"
    ]
  },
  {
    enunciado: "¿Qué significa para Rorty la crítica a la filosofía como espejo de la naturaleza?",
    correcta: "La filosofía no debe pretender reflejar una realidad objetiva, sino dialogar con prácticas culturales",
    incorrectas: [
      "La filosofía debe fundarse solo en la naturaleza",
      "La filosofía es una ciencia exacta de la verdad"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre hermenéutica y posmodernidad?",
    correcta: "Ambas coinciden en criticar la objetividad absoluta y defender la pluralidad de interpretaciones",
    incorrectas: [
      "Ambas defienden un único punto de vista universal",
      "Ambas rechazan la importancia del lenguaje"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica hay entre hermenéutica y posmodernidad?",
    correcta: "La hermenéutica mantiene la apuesta por el diálogo y la comprensión; la posmodernidad enfatiza la dispersión",
    incorrectas: [
      "La hermenéutica es irracional y la posmodernidad racional",
      "La hermenéutica niega la historia y la posmodernidad la afirma"
    ]
  },
  {
    enunciado: "¿Qué concepto central de Gadamer subraya la historicidad de la comprensión?",
    correcta: "La conciencia de la historia efectual",
    incorrectas: [
      "El eterno retorno",
      "La tabula rasa"
    ]
  },
  {
    enunciado: "¿Qué influencia tuvo Nietzsche en la posmodernidad?",
    correcta: "Su crítica a la verdad absoluta y su perspectivismo inspiraron la pluralidad posmoderna",
    incorrectas: [
      "Su defensa de la metafísica tradicional",
      "Su confianza en un progreso universal"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la hermenéutica frente al positivismo?",
    correcta: "Ofrece una racionalidad histórica y situada frente al empirismo reduccionista",
    incorrectas: [
      "Rechaza toda forma de racionalidad",
      "Se limita al método experimental"
    ]
  },
  {
    enunciado: "¿Qué significa différance en Derrida?",
    correcta: "El diferimiento y la diferencia en la producción de sentido",
    incorrectas: [
      "La coincidencia total de significado y significante",
      "La identidad fija de cada término lingüístico"
    ]
  },
  {
    enunciado: "¿Qué significa episteme en Foucault?",
    correcta: "El marco histórico de saber que define lo pensable en una época",
    incorrectas: [
      "La esencia eterna de la verdad",
      "La ciencia particular de cada disciplina"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al relativismo posmoderno?",
    correcta: "La ausencia de verdades universales y la multiplicidad de perspectivas",
    incorrectas: [
      "La imposición de una verdad absoluta",
      "La defensa de un único método científico"
    ]
  },
  {
    enunciado: "¿Qué obra de Gadamer desarrolla la hermenéutica filosófica?",
    correcta: "Verdad y método",
    incorrectas: [
      "El ser y la nada",
      "La condición posmoderna"
    ]
  },
  {
    enunciado: "¿Qué crítica hace Habermas a la posmodernidad?",
    correcta: "Que conduce al relativismo y pone en riesgo la validez universal del discurso racional",
    incorrectas: [
      "Que restaura la metafísica clásica",
      "Que exagera la confianza en el método científico"
    ]
  },
  {
    enunciado: "¿Qué significa el término metanarrativa?",
    correcta: "Un relato totalizador que pretende dar sentido completo a la historia",
    incorrectas: [
      "Una narración de ficción literaria",
      "Un análisis psicológico de relatos individuales"
    ]
  },
  {
    enunciado: "¿Qué significa 'pensamiento débil' en Vattimo?",
    correcta: "Aceptar la fragilidad de los fundamentos y apostar por una ontología flexible",
    incorrectas: [
      "Una renuncia absoluta a la filosofía",
      "Una defensa de verdades universales rígidas"
    ]
  },
  {
    enunciado: "¿Qué rol tiene el lenguaje en la hermenéutica?",
    correcta: "Es el medio fundamental donde se da la comprensión y el sentido",
    incorrectas: [
      "Es accesorio, secundario a la experiencia pura",
      "Es un obstáculo para la verdad"
    ]
  },
  {
    enunciado: "¿Qué significa genealogía en Foucault?",
    correcta: "Un método para rastrear el origen histórico de prácticas y discursos de poder",
    incorrectas: [
      "La búsqueda de verdades eternas",
      "La narración lineal de la historia"
    ]
  },
  {
    enunciado: "¿Qué obra de Derrida expone su crítica al logocentrismo?",
    correcta: "De la gramatología",
    incorrectas: [
      "La rebelión de las masas",
      "Verdad y método"
    ]
  },
  {
    enunciado: "¿Qué significa posmodernidad en Lyotard?",
    correcta: "Una condición cultural marcada por la incredulidad hacia los grandes relatos",
    incorrectas: [
      "Una vuelta a los valores universales del Renacimiento",
      "Un nuevo sistema metafísico universal"
    ]
  },
  {
    enunciado: "¿Qué significa hermenéutica como filosofía práctica?",
    correcta: "Que orienta la comprensión de la vida y la cultura desde la interpretación",
    incorrectas: [
      "Que se limita a analizar fórmulas lógicas",
      "Que rechaza la historia como fuente de sentido"
    ]
  },
  {
    enunciado: "¿Qué crítica hace Derrida al estructuralismo?",
    correcta: "Que fija estructuras cerradas sin reconocer la diferencia y el juego del sentido",
    incorrectas: [
      "Que es demasiado abierto al relativismo",
      "Que carece de interés por el lenguaje"
    ]
  },
  {
    enunciado: "¿Qué significa que la verdad es construcción interpretativa en la posmodernidad?",
    correcta: "Que no existe una verdad única, sino múltiples interpretaciones según contextos",
    incorrectas: [
      "Que la verdad es idéntica al poder político",
      "Que la verdad es fija e inmutable"
    ]
  },
  {
    enunciado: "¿Qué significa la historicidad de la comprensión en hermenéutica?",
    correcta: "Que todo entender está condicionado por la historia del intérprete",
    incorrectas: [
      "Que la comprensión es atemporal y fija",
      "Que la historia no influye en la interpretación"
    ]
  },
  {
    enunciado: "¿Qué autor desarrolla la idea de pensamiento débil en el ámbito italiano?",
    correcta: "Gianni Vattimo",
    incorrectas: [
      "Richard Rorty",
      "Paul Ricoeur"
    ]
  },
  {
    enunciado: "¿Qué significa que la filosofía de fin de siglo influyó en las ciencias sociales?",
    correcta: "Introdujo la interpretación, el discurso y la crítica del poder en su metodología",
    incorrectas: [
      "Rechazó el análisis cultural en la investigación",
      "Impuso un único método científico universal"
    ]
  },
  {
    enunciado: "¿Qué significa el término différance en Derrida?",
    correcta: "La imposibilidad de un significado final, siempre diferido y en juego",
    incorrectas: [
      "La coincidencia plena del signo con el significado",
      "La certeza de la verdad absoluta"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la hermenéutica frente a la posmodernidad?",
    correcta: "Su confianza en el diálogo y en la comprensión compartida",
    incorrectas: [
      "Su rechazo de toda racionalidad",
      "Su defensa del nihilismo radical"
    ]
  }
];
