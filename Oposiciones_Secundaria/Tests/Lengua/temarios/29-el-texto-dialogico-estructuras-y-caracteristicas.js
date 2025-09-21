// temarios/29-el-texto-dialogico-estructuras-y-caracteristicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por texto dialógico en lingüística del discurso?",
    correcta: "Una interacción cooperativa entre al menos dos interlocutores que co-construyen significado mediante alternancia de turnos.",
    incorrectas: [
      "Un monólogo interior sin presencia de interlocutores ni alternancia de turnos.",
      "Una sucesión de definiciones enciclopédicas sin intención interactiva."
    ]
  },
  {
    enunciado: "Indica la diferencia básica entre diálogo y monólogo.",
    correcta: "El diálogo implica alternancia de turnos y negociación de sentido; el monólogo no requiere alternancia ni ajuste mutuo.",
    incorrectas: [
      "El diálogo solo usa preguntas retóricas y el monólogo solo afirmaciones categóricas.",
      "El diálogo es exclusivamente oral y el monólogo exclusivamente escrito."
    ]
  },
  {
    enunciado: "¿Cómo se relacionan 'diálogo' y 'conversación' en el estudio textual?",
    correcta: "El diálogo es una unidad textual interactiva; la conversación es un tipo de actividad discursiva con funciones y géneros propios.",
    incorrectas: [
      "Son términos estrictamente sinónimos sin matiz alguno.",
      "El término 'conversación' se aplica solo a textos literarios y 'diálogo' al habla coloquial."
    ]
  },
  {
    enunciado: "En la organización del diálogo, ¿qué es un acto de habla?",
    correcta: "La unidad mínima comunicativa que realiza una función ilocutiva como afirmar, preguntar o pedir.",
    incorrectas: [
      "Una secuencia larga de intervenciones que incluye varios turnos.",
      "Un recurso tipográfico que marca los cambios de tema en un texto escrito."
    ]
  },
  {
    enunciado: "¿Qué se denomina intervención o turno en el texto dialógico?",
    correcta: "La porción de habla producida por un participante hasta que otro toma la palabra o la cede.",
    incorrectas: [
      "La suma de todos los actos de habla de una conversación completa.",
      "El silencio prolongado entre párrafos de un texto expositivo."
    ]
  },
  {
    enunciado: "Define 'par adyacente' en análisis de la conversación.",
    correcta: "Una secuencia de dos intervenciones emparejadas como saludo–saludo o pregunta–respuesta.",
    incorrectas: [
      "Una lista de marcadores del discurso sin relación con turnos concretos.",
      "Un monólogo con dos párrafos consecutivos del mismo hablante."
    ]
  },
  {
    enunciado: "Señala el ejemplo que ilustra un par adyacente prototípico.",
    correcta: "A: «¿Vienes?» B: «Sí, ahora mismo».",
    incorrectas: [
      "A: «¡Qué calor!» A: «¡Muchísimo!»",
      "A: «Buenos días». A: «Hasta luego»."
    ]
  },
  {
    enunciado: "Según la 'organización de preferencia', ¿qué caracteriza una respuesta preferida?",
    correcta: "Suele ser pronta, breve y congruente con la primera parte del par.",
    incorrectas: [
      "Suele ser tardía, prolija y siempre en desacuerdo.",
      "Carece de relación con la intervención que la antecede."
    ]
  },
  {
    enunciado: "Una respuesta no preferida en conversación se manifiesta típicamente mediante:",
    correcta: "Retraso, mitigación, explicaciones o justificaciones antes del desacuerdo.",
    incorrectas: [
      "Aceptación inmediata y entusiasta sin marcas de cortesía.",
      "Silencio absoluto seguido de un cambio brusco de tema no marcado."
    ]
  },
  {
    enunciado: "¿Qué es la 'reparación' conversacional?",
    correcta: "El conjunto de procedimientos para resolver problemas de habla, audición o comprensión durante la interacción.",
    incorrectas: [
      "La repetición ornamental de un tópico para embellecer el discurso.",
      "El turno obligatorio del moderador al final de cada debate."
    ]
  },
  {
    enunciado: "Identifica un marcador típico de reparación o reformulación en español.",
    correcta: "«Quiero decir… / o sea…».",
    incorrectas: [
      "«Por consiguiente…».",
      "«En primer lugar…». "
    ]
  },
  {
    enunciado: "En el sistema de toma de turnos, ¿qué mecanismos son habituales?",
    correcta: "Auto-selección del hablante o selección del siguiente por parte del hablante actual.",
    incorrectas: [
      "Asignación fija de turnos al inicio sin posibilidad de variación.",
      "Prohibición de autocorrecciones durante cada intervención."
    ]
  },
  {
    enunciado: "¿Qué función cumplen los backchannels («ajá», «sí», «claro»)?",
    correcta: "Señalan seguimiento y apoyo sin tomar plenamente el turno.",
    incorrectas: [
      "Introducen necesariamente un desacuerdo fuerte.",
      "Marcan el final obligado de la conversación."
    ]
  },
  {
    enunciado: "La deixis personal, temporal y espacial en diálogo sirve para:",
    correcta: "Anclar los referentes al aquí-ahora y a las identidades de los interlocutores.",
    incorrectas: [
      "Eliminar la necesidad de referencia contextual.",
      "Sustituir los conectores lógicos en textos escritos."
    ]
  },
  {
    enunciado: "«Bueno» y «pues» funcionan a menudo como:",
    correcta: "Organizadores conversacionales que abren, transitan o cierran secuencias.",
    incorrectas: [
      "Exclusivamente como conectores causales de tipo lógico formal.",
      "Marcas obligatorias de pregunta en lenguaje académico."
    ]
  },
  {
    enunciado: "«Es decir» y «o sea» se clasifican como:",
    correcta: "Reformuladores explicativos que aclaran o precisan lo dicho.",
    incorrectas: [
      "Marcadores de oposición enfática.",
      "Marcadores de cierre concluyente."
    ]
  },
  {
    enunciado: "«Entonces», «así que» y «por tanto» introducen típicamente:",
    correcta: "Relaciones consecutivas entre intervenciones o segmentos.",
    incorrectas: [
      "Vocativos de cortesía obligatoria.",
      "Citas textuales de autoridad."
    ]
  },
  {
    enunciado: "En diálogo, la prosodia (entonación, ritmo, acento) contribuye a:",
    correcta: "Señalar continuidad o cierre, énfasis, actitud y gestión de turnos.",
    incorrectas: [
      "Sustituir la semántica de las palabras por completo.",
      "Eliminar la necesidad de marcadores del discurso."
    ]
  },
  {
    enunciado: "Los solapamientos en conversación coloquial suelen interpretarse como:",
    correcta: "Fenómenos gestionados que no siempre equivalen a interrupción descortés.",
    incorrectas: [
      "Errores gramaticales que deben evitarse en cualquier contexto.",
      "Señales obligatorias de final de tema."
    ]
  },
  {
    enunciado: "Según Brown y Levinson, la cortesía busca proteger:",
    correcta: "La imagen social (face) positiva y negativa de los interlocutores mediante estrategias de atenuación.",
    incorrectas: [
      "Solo la exactitud gramatical de las oraciones.",
      "La neutralización completa de cualquier emoción en la interacción."
    ]
  },
  {
    enunciado: "Un 'acto amenazante para la imagen' (FTA) es:",
    correcta: "Una acción verbal que potencialmente daña la autoimagen o autonomía del otro, como una crítica o una orden.",
    incorrectas: [
      "Cualquier elogio sincero dirigido al interlocutor.",
      "Una pausa breve para respirar durante el turno."
    ]
  },
  {
    enunciado: "Señala una estrategia de atenuación frecuente en español coloquial.",
    correcta: "Uso de mitigadores como «un poco», «quizá» y formulaciones indirectas.",
    incorrectas: [
      "Incrementar el volumen y la velocidad de habla para imponer el punto de vista.",
      "Evitar cualquier marca de cortesía para ganar claridad."
    ]
  },
  {
    enunciado: "¿Qué patrón organizativo describe la secuencia I-R-F/IRE en el discurso de aula?",
    correcta: "Iniciación del docente, Respuesta del alumnado y Feedback del docente.",
    incorrectas: [
      "Introducción, Resumen y Final bibliográfico.",
      "Invitación, Réplica y Enmienda parlamentaria."
    ]
  },
  {
    enunciado: "En entrevistas institucionales, ¿qué estructura es típica?",
    correcta: "Preguntas del entrevistador, respuestas del entrevistado y repreguntas de seguimiento.",
    incorrectas: [
      "Monólogo del entrevistado sin intervención del entrevistador.",
      "Lectura de un ensayo expositivo sin interacción."
    ]
  },
  {
    enunciado: "En un debate moderado, ¿qué rasgo es propio?",
    correcta: "Reglas explícitas de tiempo y derecho de réplica asignados por moderación.",
    incorrectas: [
      "Ausencia total de turnos y de normas de interacción.",
      "Prohibición de cualquier desacuerdo entre participantes."
    ]
  },
  {
    enunciado: "En la comunicación mediada por computadora (chat, foros), ¿qué es habitual?",
    correcta: "Asincronía, latencias, citas encadenadas y marcas tipográficas para gestionar turnos.",
    incorrectas: [
      "El mismo sistema de turnos que en conversación cara a cara sin diferencias.",
      "Prohibición de usar referencias a mensajes previos."
    ]
  },
  {
    enunciado: "La alternancia de códigos (code-switching) puede cumplir la función de:",
    correcta: "Marcar identidad, acomodarse al interlocutor o gestionar tópicos sensibles.",
    incorrectas: [
      "Corregir automáticamente la ortografía en tiempo real.",
      "Impedir la comprensión de los interlocutores por definición."
    ]
  },
  {
    enunciado: "En la escritura de diálogos en español, la convención ortotipográfica normativa es usar:",
    correcta: "Raya de diálogo para introducir las intervenciones e incisos con verbos de dicción.",
    incorrectas: [
      "Corchetes para cada intervención y cursivas para los incisos siempre.",
      "Comillas angulares para marcar cada cambio de turno de forma obligatoria."
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre estilo directo, indirecto y estilo indirecto libre?",
    correcta: "El directo reproduce palabras textuales; el indirecto las subordina; el indirecto libre fusiona voz del narrador y del personaje.",
    incorrectas: [
      "El directo y el indirecto son idénticos y el libre es una cita literal.",
      "El indirecto libre elimina marcas de subjetividad del personaje."
    ]
  },
  {
    enunciado: "En el diálogo literario, la 'naturalidad fingida' significa que:",
    correcta: "El texto simula espontaneidad controlada para lograr verosimilitud y eficacia narrativa.",
    incorrectas: [
      "No hay planificación lingüística ni revisión estilística posible.",
      "Debe copiarse literalmente cualquier conversación real sin adaptación."
    ]
  },
  {
    enunciado: "La gestión del tema en diálogo incluye:",
    correcta: "Aperturas, mantenimiento, cambios graduados, digresiones y cierres señalizados.",
    incorrectas: [
      "Prohibición de cambiar de tema una vez iniciado.",
      "Cambios bruscos sin marcas ni referencia al hilo conversacional."
    ]
  },
  {
    enunciado: "La coherencia en el diálogo se apoya en:",
    correcta: "Conocimiento compartido, inferencias e implicaturas coherentes con el contexto.",
    incorrectas: [
      "Desconexión total entre turnos y ausencia de presuposiciones.",
      "Solo en la repetición literal de las palabras del otro."
    ]
  },
  {
    enunciado: "«Mira», «oye» y «a ver» funcionan frecuentemente como:",
    correcta: "Marcadores de foco o de llamada de atención que preparan el turno o el argumento.",
    incorrectas: [
      "Formas verbales de pasado que marcan cierre discursivo.",
      "Marcas de cita textual obligatoria."
    ]
  },
  {
    enunciado: "Las preguntas abiertas frente a las cerradas en interacción suelen:",
    correcta: "Favorecer respuestas más elaboradas y co-construcción de contenido.",
    incorrectas: [
      "Restringir las opciones de respuesta a sí/no por definición.",
      "Impedir cualquier avance de la conversación."
    ]
  },
  {
    enunciado: "El silencio en conversación puede interpretarse como:",
    correcta: "Recurso pragmático con valores de desacuerdo mitigado, reflexión o cortesía según contexto.",
    incorrectas: [
      "Falta de competencia lingüística en todos los casos.",
      "Señal obligatoria de fin de conversación."
    ]
  },
  {
    enunciado: "El patrón de reparación auto-iniciada y auto-resuelta se ejemplifica cuando el hablante dice:",
    correcta: "«Voy el jue… perdón, el viernes por la tarde».",
    incorrectas: [
      "«¿Puedes repetir?» tras no entender al otro (hetero-iniciada).",
      "«Como decía él, perdón, sigue tú» y cede el turno sin corregir."
    ]
  },
  {
    enunciado: "La elección entre 'tú' y 'usted' en español se relaciona con:",
    correcta: "Relaciones de poder, distancia social, cortesía y contexto situacional.",
    incorrectas: [
      "Una norma fija universal que no admite variación regional.",
      "Únicamente con la edad biológica del interlocutor."
    ]
  },
  {
    enunciado: "Para evaluar la calidad de un diálogo se consideran criterios como:",
    correcta: "Relevancia, cooperación, coherencia, cortesía y eficacia pragmática.",
    incorrectas: [
      "Número de adjetivos por minuto en cada intervención.",
      "Ausencia total de reformulaciones o reparaciones."
    ]
  },
  {
    enunciado: "En netiqueta de chats y foros, se recomienda:",
    correcta: "Evitar mayúsculas sostenidas, citar con claridad y respetar los turnos del hilo.",
    incorrectas: [
      "Usar MAYÚSCULAS para enfatizar constantemente el propio turno.",
      "Responder fuera de tema para mantener el hilo dinámico."
    ]
  },
  {
    enunciado: "En una rúbrica didáctica del diálogo, ¿qué dimensiones son pertinentes?",
    correcta: "Gestión de turnos, uso de marcadores, cortesía, coherencia temática y reparación.",
    incorrectas: [
      "Número de páginas escritas independientemente de la interacción.",
      "Cantidad de tecnicismos usados sin relación con el contexto."
    ]
  }
];
