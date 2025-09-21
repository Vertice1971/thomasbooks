// temarios/32-la-comprension-y-expresion-de-textos-escritos-bases-linguisticas-psicologicas-y-pedagogicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo distingue prototípicamente a los textos escritos frente a los orales?",
    correcta: "La asincronía autor–lector y la permanencia que permite revisión y relectura.",
    incorrectas: [
      "La necesidad de copresencia y turnos de habla simultáneos.",
      "La obligatoriedad de acompañarlos de gestos para ser comprensibles."
    ]
  },
  {
    enunciado: "¿Para qué sirven los paratextos (títulos, subtítulos, epígrafes, notas) en un texto escrito?",
    correcta: "Para orientar la lectura, organizar la información y encuadrar la interpretación.",
    incorrectas: [
      "Para reemplazar el contenido principal sin necesidad de desarrollarlo.",
      "Para ocultar lagunas argumentativas mediante ornamento tipográfico."
    ]
  },
  {
    enunciado: "En la cohesión textual, ¿qué combinación es correcta?",
    correcta: "Referencia, elipsis, sustitución, conectores y cadenas léxicas.",
    incorrectas: [
      "Acentuación, rima, aliteración y sinécdoque exclusivamente.",
      "Únicamente concordancia verbal sin otros mecanismos."
    ]
  },
  {
    enunciado: "La progresión tema–rema en la escritura sirve para:",
    correcta: "Ordenar la información haciendo avanzar el texto con continuidad informativa.",
    incorrectas: [
      "Evitar la introducción de nueva información en cada enunciado.",
      "Obligar a colocar el rema siempre al inicio de la oración."
    ]
  },
  {
    enunciado: "La densidad léxica de un texto escrito se asocia con:",
    correcta: "Alta proporción de nombres, adjetivos y nominalizaciones respecto a verbos soporte.",
    incorrectas: [
      "El predominio de interjecciones y muletillas conversacionales.",
      "La ausencia de términos específicos para favorecer la vaguedad."
    ]
  },
  {
    enunciado: "La puntuación en un texto escrito cumple principalmente la función de:",
    correcta: "Señalar relaciones sintácticas y pausas lógicas que facilitan la comprensión.",
    incorrectas: [
      "Imitar la entonación oral sin reglas gramaticales.",
      "Decorar visualmente el texto sin impacto semántico."
    ]
  },
  {
    enunciado: "Elegir un registro adecuado en la escritura implica:",
    correcta: "Ajustar léxico, tono y convenciones al propósito, género y audiencia.",
    incorrectas: [
      "Usar tecnicismos en cualquier contexto para aparentar rigor.",
      "Evitar marcas de cohesión para resultar más 'neutro'."
    ]
  },
  {
    enunciado: "¿Qué describe el modelo de construcción–integración de Kintsch y van Dijk?",
    correcta: "La generación de proposiciones locales y su integración en un modelo de situación coherente.",
    incorrectas: [
      "La transcripción literal y lineal del texto sin inferencias.",
      "La sustitución de la semántica por claves puramente gráficas."
    ]
  },
  {
    enunciado: "La ‘visión simple de la lectura’ sostiene que la comprensión depende de:",
    correcta: "La interacción entre decodificación y comprensión lingüística.",
    incorrectas: [
      "La memorización mecánica de ortografía sin semántica.",
      "El número de páginas leídas por minuto exclusivamente."
    ]
  },
  {
    enunciado: "Según la Hipótesis de Calidad Léxica (Perfetti), leer bien exige:",
    correcta: "Representaciones precisas y rápidas de forma–significado de las palabras.",
    incorrectas: [
      "Ignorar la forma ortográfica para centrarse solo en el contexto.",
      "Sustituir el reconocimiento de palabras por adivinación constante."
    ]
  },
  {
    enunciado: "¿Qué define el procesamiento bottom-up en lectura?",
    correcta: "La decodificación desde rasgos gráficos y palabras hacia estructuras superiores.",
    incorrectas: [
      "El uso exclusivo del conocimiento previo sin atender al texto.",
      "El rechazo de la sintaxis en favor de ilustraciones."
    ]
  },
  {
    enunciado: "¿Qué define el procesamiento top-down en lectura?",
    correcta: "La activación de expectativas y esquemas para interpretar e integrar la información textual.",
    incorrectas: [
      "La lectura letra a letra sin contexto.",
      "La prohibición de realizar inferencias durante la lectura."
    ]
  },
  {
    enunciado: "Una inferencia ‘puente’ se utiliza para:",
    correcta: "Conectar explícitamente dos enunciados y mantener la coherencia local.",
    incorrectas: [
      "Añadir información imaginaria sin apoyo textual.",
      "Eliminar referencias anafóricas para evitar repeticiones."
    ]
  },
  {
    enunciado: "El monitoreo metacognitivo del lector consiste en:",
    correcta: "Detectar fallos de comprensión y aplicar estrategias de reparación.",
    incorrectas: [
      "Leer sin detenerse aunque no se entienda el texto.",
      "Memorizar todo el vocabulario técnico antes de leer."
    ]
  },
  {
    enunciado: "En comprensión lectora, la memoria de trabajo es clave porque:",
    correcta: "Mantiene y manipula información mientras se integran proposiciones del texto.",
    incorrectas: [
      "Sustituye la necesidad de vocabulario amplio.",
      "Elimina la necesidad de conectores y cohesión."
    ]
  },
  {
    enunciado: "El llamado 'efecto Mateo' en lectura se refiere a que:",
    correcta: "Quien lee más y mejor tiende a seguir mejorando por acumulación de vocabulario y conocimientos.",
    incorrectas: [
      "Leer mucho siempre empeora la comprensión inferencial.",
      "Solo afecta a la ortografía, no al léxico ni a la comprensión."
    ]
  },
  {
    enunciado: "En el modelo de la escritura de Hayes–Flower (y revisiones de Hayes), los grandes procesos son:",
    correcta: "Planificación, textualización/redacción y revisión bajo autorregulación.",
    incorrectas: [
      "Articulación, memorización y declamación en voz alta.",
      "Ilustración, dictado y dramatización."
    ]
  },
  {
    enunciado: "Según Kellogg, la escritura es exigente porque:",
    correcta: "Compite por recursos de memoria de trabajo entre planificar, formular y revisar simultáneamente.",
    incorrectas: [
      "No requiere atención sostenida ni control ejecutivo.",
      "Se basa únicamente en transcribir ideas ya cerradas."
    ]
  },
  {
    enunciado: "Un párrafo bien construido debe incluir preferentemente:",
    correcta: "Enunciado rector, desarrollo con evidencias y microcierre coherente.",
    incorrectas: [
      "Una sola frase nominal sin relación con el tema global.",
      "Citas encadenadas sin explicación del autor."
    ]
  },
  {
    enunciado: "La cohesión entre párrafos se logra, entre otros medios, con:",
    correcta: "Repeticiones controladas, conectores interparrafales y progreso tema–rema.",
    incorrectas: [
      "Cambios abruptos de tópico sin marcas.",
      "Evitar cualquier referencia para no ser redundante."
    ]
  },
  {
    enunciado: "Diferencia entre revisión global y edición local:",
    correcta: "La revisión aborda contenido, organización y coherencia; la edición corrige forma, ortografía y puntuación.",
    incorrectas: [
      "La revisión solo corrige tildes; la edición reescribe tesis y argumentos.",
      "Son sinónimos y se aplican indistintamente."
    ]
  },
  {
    enunciado: "El enfoque SRSD en escritura se centra en:",
    correcta: "Desarrollar estrategias autorreguladas con modelado, práctica guiada y autoevaluación.",
    incorrectas: [
      "Memorizar textos modelo sin reflexión metacognitiva.",
      "Eliminar toda retroalimentación para fomentar autonomía instantánea."
    ]
  },
  {
    enunciado: "El 'sentence combining' se utiliza para:",
    correcta: "Mejorar variedad y complejidad sintáctica mediante combinación guiada de oraciones.",
    incorrectas: [
      "Reducir cualquier subordinación para simplificar siempre.",
      "Sustituir la planificación textual por listas inconexas."
    ]
  },
  {
    enunciado: "Una práctica ética en escritura académica exige:",
    correcta: "Citar fuentes con precisión y evitar el plagio mediante paráfrasis fiel y referencias.",
    incorrectas: [
      "Modificar datos para reforzar la tesis si conviene.",
      "Omitir la bibliografía cuando el tema es conocido."
    ]
  },
  {
    enunciado: "La evaluación de lectura debe contemplar niveles:",
    correcta: "Literal, inferencial y crítico, con tareas alineadas al objetivo.",
    incorrectas: [
      "Únicamente literal porque es más objetiva.",
      "Solo memorística de definiciones sueltas."
    ]
  },
  {
    enunciado: "Una rúbrica analítica bien diseñada en escritura incluye:",
    correcta: "Dimensiones con descriptores observables y niveles graduados de logro.",
    incorrectas: [
      "Un criterio único global basado en impresión subjetiva.",
      "Puntuar únicamente la extensión del texto."
    ]
  },
  {
    enunciado: "El Diseño Universal para el Aprendizaje (DUA) propone:",
    correcta: "Múltiples medios de representación, acción y expresión para atender a la diversidad.",
    incorrectas: [
      "Un formato único de tarea para garantizar homogeneidad.",
      "Eliminar apoyos visuales para evitar dependencia."
    ]
  },
  {
    enunciado: "En dislexia/disortografía, una medida de apoyo razonable es:",
    correcta: "Intervención fonológica y morfológica, tipografías legibles, TTS y dictado a voz.",
    incorrectas: [
      "Aumentar la complejidad ortográfica al inicio.",
      "Evitar cualquier herramienta asistiva por 'ventaja' indebida."
    ]
  },
  {
    enunciado: "La tecnología TTS/ASR puede usarse para:",
    correcta: "Apoyar la comprensión (texto a voz) y la revisión de la producción (reconocimiento del habla).",
    incorrectas: [
      "Sustituir todo proceso de lectura y escritura por completo.",
      "Evitar la revisión humana de los textos."
    ]
  },
  {
    enunciado: "Sobre correctores gramaticales y de estilo, es responsable:",
    correcta: "Usarlos críticamente como apoyo, verificando sugerencias y manteniendo criterio autoral.",
    incorrectas: [
      "Aceptar cualquier cambio automático sin revisión.",
      "Prohibir su uso en cualquier fase del proceso."
    ]
  },
  {
    enunciado: "La lectura crítica de hipertextos exige:",
    correcta: "Evaluar la fiabilidad de fuentes, la coherencia de enlaces y los sesgos informativos.",
    incorrectas: [
      "Seguir cualquier enlace por orden de aparición sin criterio.",
      "Priorizar el diseño estético frente a la veracidad."
    ]
  },
  {
    enunciado: "Desarrollar conciencia morfológica en español ayuda a:",
    correcta: "Mejorar decodificación, ortografía y expansión del vocabulario derivado.",
    incorrectas: [
      "Evitar la lectura de palabras complejas por completo.",
      "Reemplazar el estudio del léxico por reglas de puntuación."
    ]
  },
  {
    enunciado: "Trabajar con corpus y concordancias permite:",
    correcta: "Detectar colocaciones y usos reales para escribir con mayor naturalidad y precisión.",
    incorrectas: [
      "Inventar neologismos sin atender al uso común.",
      "Sustituir toda revisión gramatical por frecuencias brutas."
    ]
  },
  {
    enunciado: "¿Cuál es el uso adecuado del punto y coma frente a la coma?",
    correcta: "Separar miembros coordinados complejos o series con comas internas para claridad.",
    incorrectas: [
      "Marcar cualquier pausa respiratoria del autor.",
      "Sustituir siempre al punto para evitar cortes."
    ]
  },
  {
    enunciado: "Clasifica correctamente: “por tanto” y “sin embargo”.",
    correcta: "Consecutivo y contraargumentativo, respectivamente.",
    incorrectas: [
      "Ejemplificador y aditivo, respectivamente.",
      "Apertura y cierre de cita, respectivamente."
    ]
  },
  {
    enunciado: "La paráfrasis fiel en un trabajo escrito implica:",
    correcta: "Reexpresar la idea ajena con tus palabras preservando sentido y citando la fuente.",
    incorrectas: [
      "Cambiar solo algunas palabras sin citar.",
      "Resumir a la mitad para evitar referencias."
    ]
  },
  {
    enunciado: "Un organizador gráfico (p. ej., mapa conceptual o argumental) ayuda a:",
    correcta: "Planificar la estructura, jerarquizar ideas y visualizar relaciones antes de escribir.",
    incorrectas: [
      "Sustituir la necesidad de cohesión en el texto final.",
      "Determinar automáticamente la puntuación del texto."
    ]
  },
  {
    enunciado: "El portafolio de lectura–escritura sirve para:",
    correcta: "Recoger procesos y productos, evidenciar progreso y fomentar reflexión metacognitiva.",
    incorrectas: [
      "Calificar solo con una muestra aislada y final.",
      "Evitar la autoevaluación del alumnado."
    ]
  },
  {
    enunciado: "Una retroalimentación formativa eficaz integra:",
    correcta: "Feed-up (metas), feedback (estado actual) y feed-forward (pasos siguientes).",
    incorrectas: [
      "Solo correcciones de superficie sin orientación futura.",
      "Únicamente elogios generales sin criterios."
    ]
  }
];
