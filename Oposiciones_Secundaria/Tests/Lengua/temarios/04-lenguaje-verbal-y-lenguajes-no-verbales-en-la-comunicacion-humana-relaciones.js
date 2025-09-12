// temarios/04-lenguaje-verbal-y-lenguajes-no-verbales-en-la-comunicacion-humana-relaciones.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza de forma general la comunicación humana contemporánea?",
    correcta: "Es multimodal: integra simultáneamente componentes verbales y no verbales en la interacción.",
    incorrectas: [
      "Se reduce a la transmisión escrita de información sin dimensión corporal.",
      "Es exclusivamente auditiva y prescinde de lo visual y lo prosódico."
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo distintivo del lenguaje verbal frente a otros sistemas?",
    correcta: "La doble articulación que permite formar significados a partir de unidades sin significado.",
    incorrectas: [
      "La ausencia total de arbitrariedad en los signos lingüísticos.",
      "La imposibilidad de referirse a hechos no presentes (desplazamiento)."
    ]
  },
  {
    enunciado: "¿Qué función cumple la prosodia dentro del lenguaje verbal?",
    correcta: "Aporta información sobre énfasis, actitud e intención y conecta con lo paralingüístico.",
    incorrectas: [
      "Sustituye por completo la sintaxis de las oraciones.",
      "Evita que un mismo enunciado tenga distintas interpretaciones."
    ]
  },
  {
    enunciado: "Según Jakobson, ¿qué función se orienta a verificar y mantener el canal abierto?",
    correcta: "La función fática.",
    incorrectas: [
      "La función referencial.",
      "La función poética."
    ]
  },
  {
    enunciado: "¿Qué triada propone Bühler en su modelo del lenguaje?",
    correcta: "Función expresiva, apelativa y representativa.",
    incorrectas: [
      "Función estética, técnica y lúdica.",
      "Función deíctica, anafórica y catafórica."
    ]
  },
  {
    enunciado: "¿Qué se entiende por paralenguaje en comunicación?",
    correcta: "Las cualidades de la voz y sonidos asociados que modulan el mensaje sin ser léxicos.",
    incorrectas: [
      "El conjunto de reglas ortográficas de una lengua.",
      "La sintaxis de las oraciones complejas."
    ]
  },
  {
    enunciado: "¿Qué estudia la kinésica dentro de la comunicación no verbal?",
    correcta: "Gestos, posturas, orientación corporal y expresiones faciales.",
    incorrectas: [
      "Los turnos de palabra en el diálogo escrito.",
      "La distribución de párrafos en un texto expositivo."
    ]
  },
  {
    enunciado: "¿Qué categorías de gesto proponen Ekman y Friesen?",
    correcta: "Emblemas, ilustradores, reguladores, manifestadores de afecto y adaptadores.",
    incorrectas: [
      "Deícticos, anafóricos, catafóricos y correferenciales.",
      "Fonéticos, morfológicos, sintácticos y semánticos."
    ]
  },
  {
    enunciado: "¿Qué define la proxémica según Edward T. Hall?",
    correcta: "El estudio del uso del espacio interpersonal y sus significados culturales.",
    incorrectas: [
      "El análisis exclusivo de la entonación en el discurso público.",
      "La norma de acentuación gráfica en la escritura académica."
    ]
  },
  {
    enunciado: "¿Qué es la oculesia en términos comunicativos?",
    correcta: "El estudio de la mirada y su gestión como recurso interactivo.",
    incorrectas: [
      "La organización del tiempo en una agenda escolar.",
      "La codificación de colores en mapas conceptuales."
    ]
  },
  {
    enunciado: "¿Qué estudia la cronémica?",
    correcta: "El uso del tiempo en la interacción: ritmos, pausas, puntualidad y latencias.",
    incorrectas: [
      "La distribución del espacio en el aula.",
      "La correspondencia entre sonidos y grafías."
    ]
  },
  {
    enunciado: "¿Qué abarca la háptica en comunicación no verbal?",
    correcta: "El contacto físico y su función social y afectiva en la interacción.",
    incorrectas: [
      "La selección de sinónimos en redacciones formales.",
      "La transcripción fonética de los alófonos."
    ]
  },
  {
    enunciado: "¿Qué papel juegan apariencia y artefactos en la comunicación?",
    correcta: "Transmiten información sobre identidad, rol y contexto a través de vestimenta y objetos.",
    incorrectas: [
      "Carecen de significado y no influyen en la interpretación.",
      "Únicamente actúan como barreras físicas del sonido."
    ]
  },
  {
    enunciado: "¿Qué relación describe Knapp como 'repetición' entre lo verbal y lo no verbal?",
    correcta: "El canal no verbal refuerza explícitamente el contenido del mensaje verbal.",
    incorrectas: [
      "El canal no verbal contradice deliberadamente el contenido verbal.",
      "El canal verbal sustituye cualquier expresión no verbal."
    ]
  },
  {
    enunciado: "¿Qué implica la incongruencia entre canales verbal y no verbal?",
    correcta: "Genera inferencias pragmáticas que suelen privilegiar lo no verbal para interpretar la intención.",
    incorrectas: [
      "No afecta a la interpretación del mensaje si el texto es gramaticalmente correcto.",
      "Obliga a aceptar literalmente el contenido verbal."
    ]
  },
  {
    enunciado: "¿Cuál es la función de los 'reguladores' gestuales descritos por Ekman y Friesen?",
    correcta: "Gestionar el turno de palabra y la dinámica de inicio, mantenimiento o cierre de la interacción.",
    incorrectas: [
      "Expresar emociones básicas mediante microexpresiones involuntarias.",
      "Sustituir léxico especializado en conversaciones técnicas."
    ]
  },
  {
    enunciado: "¿Qué propone la Teoría de la Violación de Expectativas (EVT) de Burgoon?",
    correcta: "Que romper expectativas proxémicas o conductuales intensifica la evaluación, positiva o negativa, según contexto y valencia del interactuante.",
    incorrectas: [
      "Que las expectativas no intervienen en la interpretación social de los mensajes.",
      "Que toda violación de expectativas produce automáticamente rechazo."
    ]
  },
  {
    enunciado: "¿Qué es el FACS en el estudio de la comunicación no verbal?",
    correcta: "Un sistema de codificación de acciones faciales para describir movimientos musculares observables.",
    incorrectas: [
      "Un método para medir la intensidad del sonido en decibelios.",
      "Un conjunto de reglas de cortesía para entrevistas formales."
    ]
  },
  {
    enunciado: "¿Cómo debe interpretarse la conocida regla 7–38–55 de Mehrabian?",
    correcta: "Como válida solo en mensajes afectivos ambiguos con incongruencia; no describe toda comunicación.",
    incorrectas: [
      "Como una ley universal aplicable a cualquier situación comunicativa.",
      "Como evidencia de que las palabras carecen de importancia en el discurso."
    ]
  },
  {
    enunciado: "¿Qué son las 'reglas de exhibición' culturales en expresión emocional?",
    correcta: "Normas aprendidas que regulan cuándo, cómo y con quién mostrar o inhibir emociones.",
    incorrectas: [
      "Rasgos biológicos que impiden cualquier variación cultural.",
      "Conjunto de sinónimos para nombrar estados afectivos."
    ]
  },
  {
    enunciado: "¿Cómo se relaciona la gestión de la 'imagen' (face) con lo no verbal?",
    correcta: "Posturas, miradas y distancia contribuyen a proteger la imagen propia y ajena en la interacción.",
    incorrectas: [
      "La imagen interpersonal depende solo del contenido proposicional.",
      "Los elementos no verbales no pueden amenazar la cortesía."
    ]
  },
  {
    enunciado: "En entornos digitales, ¿qué función cumplen emojis y reacciones?",
    correcta: "Actúan como marcadores paralingüísticos que desambigüan tono e intención.",
    incorrectas: [
      "Sustituyen la argumentación y hacen innecesario el texto.",
      "Tienen un significado idéntico en todas las culturas y contextos."
    ]
  },
  {
    enunciado: "¿Qué medida didáctica favorece la competencia multimodal del alumnado?",
    correcta: "Rúbricas que evalúen adecuación, claridad, prosodia, gestualidad y apoyos visuales en presentaciones.",
    incorrectas: [
      "Exámenes que penalicen cualquier uso de apoyos visuales.",
      "Actividades que prohíban el contacto visual por norma."
    ]
  },
  {
    enunciado: "¿Qué componentes prosódicos son más relevantes para marcar énfasis?",
    correcta: "Variaciones en entonación, intensidad, duración y ritmo.",
    incorrectas: [
      "La puntuación escrita exclusiva del texto proyectado.",
      "El tamaño de la fuente en las diapositivas."
    ]
  },
  {
    enunciado: "¿Qué función puede tener el silencio en la interacción?",
    correcta: "Puede señalar cesión de turno, énfasis, desacuerdo o reflexión según contexto.",
    incorrectas: [
      "Siempre indica incomprensión y debe evitarse.",
      "Carece de valor comunicativo y solo pausa la respiración."
    ]
  },
  {
    enunciado: "Según Hall, ¿cómo varían las distancias interpersonales entre culturas?",
    correcta: "Existen patrones culturales que hacen aceptables distancias más cortas o largas según contexto y rol.",
    incorrectas: [
      "Todas las culturas comparten idénticas distancias íntima y social.",
      "La distancia interpersonal está fijada biológicamente sin variación."
    ]
  },
  {
    enunciado: "¿Qué conductas no verbales suelen acentuar información clave en una explicación oral?",
    correcta: "Subidas de tono, pausas estratégicas y gestos ilustradores sincronizados con palabras clave.",
    incorrectas: [
      "Monotonía prosódica y manos inmóviles a la espalda.",
      "Evitar cualquier movimiento para no distraer al público."
    ]
  },
  {
    enunciado: "¿Qué muestran los estudios de McNeill y Kendon sobre gesto y habla?",
    correcta: "Que el gesto se coordina temporalmente con el habla y coexpresa significado.",
    incorrectas: [
      "Que el gesto es un ruido motor irrelevante para el mensaje.",
      "Que el gesto solo aparece en ausencia de lenguaje verbal."
    ]
  },
  {
    enunciado: "¿Qué variación cultural suele observarse en el contacto visual?",
    correcta: "El contacto directo sostenido puede considerarse respeto en unas culturas e invasivo en otras.",
    incorrectas: [
      "El contacto visual prolongado significa lo mismo en todo el mundo.",
      "El contacto visual no influye en la percepción interpersonal."
    ]
  },
  {
    enunciado: "¿Qué herramientas se usan habitualmente para análisis multimodal empírico?",
    correcta: "PRAAT para prosodia y ELAN para anotación sincronizada de audio-vídeo.",
    incorrectas: [
      "Correctores ortográficos para detectar gestos y miradas.",
      "Glosarios de sinónimos para medir distancia interpersonal."
    ]
  },
  {
    enunciado: "¿Qué adaptación es pertinente en alumnado con necesidades específicas de comunicación?",
    correcta: "Apoyos visuales claros, coherencia prosódica y reducción de ambigüedad no verbal.",
    incorrectas: [
      "Incrementar la velocidad del habla para estimular atención.",
      "Eliminar cualquier gesto para no sobrecargar estímulos."
    ]
  },
  {
    enunciado: "¿Qué aporta la 'gramática del diseño visual' de Kress y van Leeuwen?",
    correcta: "Criterios como saliencia, composición e interacción de elementos para leer imágenes.",
    incorrectas: [
      "Una lista de conectores textuales para redacciones.",
      "Un manual de puntuación para la escritura académica."
    ]
  },
  {
    enunciado: "En cronémica, ¿qué diferencia hay entre culturas monocromáticas y policromáticas?",
    correcta: "Las primeras priorizan secuencialidad y agenda; las segundas toleran simultaneidad e interrupciones.",
    incorrectas: [
      "Las monocromáticas prohíben la puntualidad y las policromáticas la exigen siempre.",
      "No existen diferencias temporales significativas entre culturas."
    ]
  },
  {
    enunciado: "¿Qué ajustes mejoran la comunicación no verbal en videoconferencias educativas?",
    correcta: "Encuadre estable, iluminación frontal, mirada a cámara y pausas para latencias.",
    incorrectas: [
      "Hablar sin pausas para evitar silencios incómodos.",
      "Reducir la iluminación para minimizar distracciones."
    ]
  },
  {
    enunciado: "¿Qué axioma de Watzlawick es especialmente pertinente para lo no verbal?",
    correcta: "Es imposible no comunicarse: toda conducta en interacción comunica algo.",
    incorrectas: [
      "Solo las palabras comunican; el cuerpo es neutro.",
      "La comunicación solo existe si hay intención explícita."
    ]
  },
  {
    enunciado: "¿Cómo contribuyen los marcadores no verbales a la función fática?",
    correcta: "Cabeceos, miradas y 'ajá' vocales mantienen y verifican el canal interactivo.",
    incorrectas: [
      "Solo los saludos escritos cumplen la función fática.",
      "Cualquier gesto interrumpe el canal y debe evitarse."
    ]
  },
  {
    enunciado: "¿Qué señales no verbales suelen asociarse a estatus y poder en interacción?",
    correcta: "Posturas expansivas, uso del espacio y control de turnos con pausas seguras.",
    incorrectas: [
      "Mirada constantemente baja y cuerpo encogido.",
      "Hablar muy rápido para ceder cuanto antes la palabra."
    ]
  },
  {
    enunciado: "¿Qué principio ético-legal debe observarse al grabar conductas no verbales en el aula?",
    correcta: "Solicitar consentimiento informado y respetar privacidad y derechos de imagen.",
    incorrectas: [
      "Grabar siempre sin avisar para evitar sesgos.",
      "Compartir libremente los vídeos en redes por su valor didáctico."
    ]
  }
];
