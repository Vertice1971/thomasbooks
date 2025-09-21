// temarios/31-la-comprension-y-expresion-de-textos-orales-bases-linguisticas-psicologicas-y-pedagogicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza prototípicamente a los textos orales frente a los escritos?",
    correcta: "La co-construcción en tiempo real con alternancia de turnos y apoyo multimodal.",
    incorrectas: [
      "La planificación íntegramente diferida sin interacción alguna.",
      "La ausencia de deixis y de marcas prosódicas."
    ]
  },
  {
    enunciado: "Señala una diferencia funcional frecuente entre oralidad y escritura.",
    correcta: "Menor densidad sintáctica y mayor presencia de parataxis en el habla espontánea.",
    incorrectas: [
      "Mayor encajamiento subordinado continuo en la oralidad coloquial.",
      "Ausencia total de reformulaciones en la oralidad."
    ]
  },
  {
    enunciado: "¿Qué papel cumple la prosodia en la comprensión y producción oral?",
    correcta: "Señala foco informativo, continuidad/cierre y actitudes del hablante.",
    incorrectas: [
      "Sustituye por completo la semántica léxica de los enunciados.",
      "Impide la interpretación de la cortesía conversacional."
    ]
  },
  {
    enunciado: "En didáctica de la pronunciación, ¿qué criterio es más operativo?",
    correcta: "La inteligibilidad y comprensibilidad más que la imitación nativa perfecta.",
    incorrectas: [
      "La eliminación de cualquier rasgo prosódico del hablante.",
      "La memorización de transcripciones fonéticas sin uso comunicativo."
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo sintáctico típico del habla espontánea?",
    correcta: "Dislocaciones, elipsis recuperables y oraciones truncadas.",
    incorrectas: [
      "Abundancia de periodos hipotácticos de varias líneas siempre bien cerrados.",
      "Prohibición de cualquier elipsis por falta de corrección."
    ]
  },
  {
    enunciado: "¿Qué función cumplen los marcadores del discurso en la oralidad?",
    correcta: "Organizan, conectan y reformulan segmentos, guiando la interpretación del oyente.",
    incorrectas: [
      "Solo cumplen una función ornamental sin efectos pragmáticos.",
      "Sustituyen la necesidad de cohesión léxica."
    ]
  },
  {
    enunciado: "La deixis personal, temporal y espacial en el habla sirve para:",
    correcta: "Anclar referentes al aquí-ahora y a las identidades participantes.",
    incorrectas: [
      "Eliminar el contexto situacional de la interacción.",
      "Impedir la cooperación conversacional."
    ]
  },
  {
    enunciado: "En la organización de turnos, ¿qué mecanismos son prototípicos?",
    correcta: "Auto-selección del siguiente hablante o selección por el hablante actual.",
    incorrectas: [
      "Un orden rígido e invariable fijado antes de hablar.",
      "El veto a las autocorrecciones en cualquier turno."
    ]
  },
  {
    enunciado: "¿Qué es un par adyacente?",
    correcta: "Una secuencia emparejada como saludo–saludo o pregunta–respuesta.",
    incorrectas: [
      "Dos monólogos consecutivos sin relación temática.",
      "Un inciso prosódico sin contenido proposicional."
    ]
  },
  {
    enunciado: "Según la organización de preferencia, una respuesta no preferida suele mostrar:",
    correcta: "Retraso, mitigación y justificación antes del desacuerdo.",
    incorrectas: [
      "Aceptación inmediata y entusiasta sin marcas.",
      "Cierre obligatorio de la conversación."
    ]
  },
  {
    enunciado: "¿Qué es la reparación conversacional?",
    correcta: "El conjunto de procedimientos para resolver problemas de habla, audición o comprensión.",
    incorrectas: [
      "La repetición estética de un tema para ganar ritmo.",
      "La sanción del moderador tras cada intervención."
    ]
  },
  {
    enunciado: "Los backchannels como «ajá», «sí», «claro» cumplen la función de:",
    correcta: "Señalar seguimiento y apoyo sin tomar el turno completo.",
    incorrectas: [
      "Introducir necesariamente desacuerdo fuerte.",
      "Marcar la clausura formal de la interacción."
    ]
  },
  {
    enunciado: "El silencio en interacción oral puede funcionar como:",
    correcta: "Señal de reflexión, mitigación o cortesía según el contexto.",
    incorrectas: [
      "Prueba inequívoca de incompetencia lingüística.",
      "Orden de finalización inmediata del diálogo."
    ]
  },
  {
    enunciado: "¿Qué describe el procesamiento bottom-up en comprensión oral?",
    correcta: "El análisis desde señales acústicas hasta unidades lingüísticas superiores.",
    incorrectas: [
      "La activación de marcos conceptuales previos exclusivamente.",
      "La sustitución del análisis fonológico por gestos."
    ]
  },
  {
    enunciado: "¿Qué describe el procesamiento top-down en comprensión oral?",
    correcta: "El uso de contexto y expectativas para anticipar e integrar significados.",
    incorrectas: [
      "La decodificación literal de fonemas sin contexto.",
      "La supresión de la memoria de trabajo en la escucha."
    ]
  },
  {
    enunciado: "El modelo Cohort en reconocimiento de palabras propone que:",
    correcta: "Los inicios acústicos activan un conjunto de candidatos que se va reduciendo.",
    incorrectas: [
      "La palabra se reconoce solo al terminar el enunciado completo.",
      "El acceso léxico es independiente del input acústico."
    ]
  },
  {
    enunciado: "El modelo TRACE se caracteriza por:",
    correcta: "Procesamiento interactivo con conexiones excitatorias e inhibitorias entre niveles.",
    incorrectas: [
      "Una vía estrictamente unidireccional sin retroalimentación.",
      "Ignorar la información acústica en favor de la ortografía."
    ]
  },
  {
    enunciado: "Shortlist propone en esencia que el reconocimiento:",
    correcta: "Selecciona candidatos probables a partir de evidencias acústicas con competencia léxica.",
    incorrectas: [
      "Se basa en reglas sintácticas sin considerar el sonido.",
      "Requiere leer simultáneamente para funcionar."
    ]
  },
  {
    enunciado: "Según los modelos de construcción-integración de la comprensión de discursos:",
    correcta: "Se construyen proposiciones locales que se integran en un modelo de situación.",
    incorrectas: [
      "Solo se almacenan palabras aisladas sin relaciones.",
      "La coherencia global es irrelevante para entender."
    ]
  },
  {
    enunciado: "¿Qué componente de memoria resulta clave en la escucha?",
    correcta: "El bucle fonológico dentro de la memoria de trabajo.",
    incorrectas: [
      "El almacén icónico como único soporte.",
      "La memoria procedimental exclusiva."
    ]
  },
  {
    enunciado: "El modelo de producción oral de Levelt organiza el habla en:",
    correcta: "Conceptualización → formulación → articulación → monitorización.",
    incorrectas: [
      "Articulación → conceptualización → traducción → edición.",
      "Percepción → inferencia → lectura → escritura."
    ]
  },
  {
    enunciado: "En términos operativos, la fluidez oral puede medirse por:",
    correcta: "Tasa de habla, longitud de rachas y distribución de pausas.",
    incorrectas: [
      "Número de adjetivos literarios por minuto.",
      "Cantidad de tecnicismos no explicados."
    ]
  },
  {
    enunciado: "Señala una disfluencia típica no patológica del habla espontánea.",
    correcta: "Pausas llenas, alargamientos y autocorrecciones.",
    incorrectas: [
      "Acento nuclear exacto en cada sílaba.",
      "Supresión total de pausas en todo el discurso."
    ]
  },
  {
    enunciado: "Sobre variables socioafectivas, es correcto afirmar que:",
    correcta: "La ansiedad y la motivación influyen en la precisión y fluidez del desempeño oral.",
    incorrectas: [
      "Las emociones no interfieren en la oralidad académica.",
      "La motivación solo afecta a la escritura."
    ]
  },
  {
    enunciado: "Un diseño de actividades de comprensión oral eficaz incluye fases de:",
    correcta: "Antes–durante–después para activar esquemas, guiar la escucha y consolidar.",
    incorrectas: [
      "Únicamente evaluación sumativa sin preparación.",
      "Lectura silenciosa sin actividad auditiva."
    ]
  },
  {
    enunciado: "Una microdestreza de escucha clave es:",
    correcta: "Inferir referencias deícticas y seguir instrucciones complejas.",
    incorrectas: [
      "Ignorar la prosodia para evitar sesgos.",
      "Memorizar definiciones sin audio."
    ]
  },
  {
    enunciado: "En trabajo de pronunciación, una prioridad didáctica realista es:",
    correcta: "Control del acento nuclear y del ritmo para mejorar inteligibilidad.",
    incorrectas: [
      "Eliminar todas las reducciones del habla conectada.",
      "Evitar prácticas de sombra y eco."
    ]
  },
  {
    enunciado: "Para gestionar la interacción, resulta eficaz:",
    correcta: "Usar preguntas abiertas, reformular y marcar cesión/retoma de turno.",
    incorrectas: [
      "Monopolizar el turno para asegurar coherencia.",
      "Evitar cualquier reformulación para no perder tiempo."
    ]
  },
  {
    enunciado: "¿Qué distingue un ‘recast’ de una corrección explícita?",
    correcta: "El recast reforma la forma dentro del flujo; la explícita nombra el error y da la regla.",
    incorrectas: [
      "El recast siempre interrumpe con metalingüística extensa.",
      "La explícita nunca menciona la forma correcta."
    ]
  },
  {
    enunciado: "Un conjunto de criterios pertinente para evaluar la producción oral es:",
    correcta: "Inteligibilidad, fluidez, precisión/complexidad, coherencia/cohesión y adecuación pragmática.",
    incorrectas: [
      "Rima, métrica y número de sinónimos literarios.",
      "Cantidad de diapositivas empleadas."
    ]
  },
  {
    enunciado: "Una rúbrica analítica bien diseñada debería:",
    correcta: "Desglosar dimensiones con descriptores observables y niveles graduados.",
    incorrectas: [
      "Asignar una nota única basada en la impresión general.",
      "Valorar solo el contenido ignorando la interacción."
    ]
  },
  {
    enunciado: "Según el Diseño Universal para el Aprendizaje (DUA), conviene:",
    correcta: "Ofrecer múltiples medios de representación, acción y expresión para la oralidad.",
    incorrectas: [
      "Estandarizar un único formato de participación oral.",
      "Evitar apoyos visuales para promover memoria."
    ]
  },
  {
    enunciado: "Para alumnado con hipoacusia, una medida de accesibilidad es:",
    correcta: "Subtitulado, control de ruido y uso de bucle magnético o micrófonos FM.",
    incorrectas: [
      "Aumentar la velocidad de habla para ‘entrenar’.",
      "Eliminar apoyos visuales para no distraer."
    ]
  },
  {
    enunciado: "Una aplicación pedagógica de la tecnología en oralidad es:",
    correcta: "Uso de ASR para feedback de pronunciación y análisis de grabaciones.",
    incorrectas: [
      "Sustituir toda práctica oral por cuestionarios escritos.",
      "Prohibir el registro de audio para evitar la revisión."
    ]
  },
  {
    enunciado: "En un debate moderado eficaz se esperan:",
    correcta: "Reglas de tiempo, derecho de réplica y turnos asignados con señales claras.",
    incorrectas: [
      "Interrupciones constantes como norma de participación.",
      "Ausencia de cualquier rol de moderación."
    ]
  },
  {
    enunciado: "En oralidad digital (videollamadas, pódcast) es recomendable:",
    correcta: "Gestionar turnos, latencias y netiqueta, y explicitar referencias contextuales.",
    incorrectas: [
      "Hablar todos a la vez para simular presencialidad.",
      "Evitar el chat y las señales de mano para no ‘cortar’."
    ]
  },
  {
    enunciado: "Para asegurar validez y fiabilidad en evaluación oral conviene:",
    correcta: "Usar tareas auténticas y escalas claras con calibración interevaluador.",
    incorrectas: [
      "Cambiar criterios durante la prueba para adaptarse al grupo.",
      "Valorar solo la corrección gramatical."
    ]
  },
  {
    enunciado: "Un clima comunicativo seguro en el aula favorece que el alumnado:",
    correcta: "Reduzca ansiedad escénica y asuma riesgos comunicativos productivos.",
    incorrectas: [
      "Evite hablar para no equivocarse.",
      "Dependa exclusivamente de la lectura en voz alta."
    ]
  },
  {
    enunciado: "Equilibrar fluidez, precisión y complejidad en la enseñanza de oralidad implica:",
    correcta: "Planificar tareas y feedback que atiendan a las tres dimensiones de forma gradual.",
    incorrectas: [
      "Centrarse solo en velocidad de habla como indicador único.",
      "Penalizar cualquier pausa aunque mejore la claridad."
    ]
  }
];
