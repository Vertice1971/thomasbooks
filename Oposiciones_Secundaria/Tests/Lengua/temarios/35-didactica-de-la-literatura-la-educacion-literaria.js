// temarios/35-didactica-de-la-literatura-educacion-literaria.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el propósito central de la educación literaria en Secundaria y Bachillerato?",
    correcta: "Formar lectores competentes, críticos y creativos capaces de interpretar, valorar y producir textos.",
    incorrectas: [
      "Memorizar cronologías y listados de autores sin prácticas de lectura.",
      "Sustituir la lectura por resúmenes audiovisuales para ahorrar tiempo."
    ]
  },
  {
    enunciado: "La didáctica de la literatura se distingue de la historia literaria porque:",
    correcta: "Se centra en los procesos de enseñanza-aprendizaje y mediación lectora en contextos educativos.",
    incorrectas: [
      "Se limita a clasificar corrientes y periodos sin intervenir en el aula.",
      "Solo estudia métricas y rimas al margen del lector."
    ]
  },
  {
    enunciado: "Según Rosenblatt, la lectura estética se caracteriza por:",
    correcta: "Una transacción lector-texto orientada a la experiencia y los efectos del lenguaje.",
    incorrectas: [
      "La extracción exclusiva de datos referenciales sin implicación personal.",
      "La memorización literal del argumento como fin único."
    ]
  },
  {
    enunciado: "El 'horizonte de expectativas' de Jauss alude a:",
    correcta: "Las disposiciones históricas y culturales del público que condicionan la recepción.",
    incorrectas: [
      "El listado de objetivos didácticos fijados por el docente.",
      "La intención biográfica del autor expresada en cartas privadas."
    ]
  },
  {
    enunciado: "Para Iser, el 'lector implícito' es:",
    correcta: "Una instancia textual que orienta la cooperación interpretativa del lector real.",
    incorrectas: [
      "El estudiante con mejores calificaciones del grupo.",
      "El narrador en primera persona de cualquier obra."
    ]
  },
  {
    enunciado: "Una secuencia didáctica eficaz de lectura suele incluir las fases:",
    correcta: "Antes de leer (activación), durante (guía/estrategias) y después (interpretación/transferencia).",
    incorrectas: [
      "Solo evaluación final sin preparación previa.",
      "Únicamente lectura silenciosa sin diálogo ni tareas."
    ]
  },
  {
    enunciado: "El andamiaje en educación literaria consiste en:",
    correcta: "Modelar estrategias, guiar la práctica y retirar apoyos para fomentar autonomía.",
    incorrectas: [
      "Delegar toda la responsabilidad en el alumnado desde el inicio.",
      "Sustituir la lectura por exposiciones magistrales continuas."
    ]
  },
  {
    enunciado: "Un criterio clave para seleccionar obras para el aula es:",
    correcta: "Equilibrar calidad estética, diversidad de voces e intereses del grupo con progresión de complejidad.",
    incorrectas: [
      "Elegir solo textos extensos para 'endurecer' el currículo.",
      "Limitar la selección a un único periodo canónico."
    ]
  },
  {
    enunciado: "La perspectiva de canon y contracanones en el aula busca:",
    correcta: "Incluir obras tradicionales y contemporáneas atendiendo a género, origen y contexto cultural.",
    incorrectas: [
      "Excluir autoras para preservar la tradición clásica.",
      "Elegir obras únicamente por su éxito comercial reciente."
    ]
  },
  {
    enunciado: "Una estrategia de mediación lectora fundamentada en preguntas abiertas es:",
    correcta: "El enfoque 'Dime' de Chambers para promover conversación auténtica sobre el texto.",
    incorrectas: [
      "La lectura mecánica de cuestionarios de opción múltiple sin debate.",
      "El dictado de resúmenes previos a la lectura."
    ]
  },
  {
    enunciado: "Las tertulias dialógicas y los clubes de lectura favorecen:",
    correcta: "La construcción social de significados y la motivación lectora mediante intercambio argumentado.",
    incorrectas: [
      "La evaluación numérica inmediata sin interacción.",
      "La sustitución de la obra por opiniones sin evidencia textual."
    ]
  },
  {
    enunciado: "Una práctica de escritura creativa alineada con educación literaria es:",
    correcta: "Reescrituras: cambio de focalización, finales alternativos o ‘what if’ con justificación textual.",
    incorrectas: [
      "Copiar fragmentos enteros sin citarlos para 'aprender estilo'.",
      "Redactar resúmenes telegráficos sin reflexión."
    ]
  },
  {
    enunciado: "La multimodalidad en educación literaria implica:",
    correcta: "Integrar medios como pódcast, booktrailers o cómic digital para ampliar formas de interpretación y expresión.",
    incorrectas: [
      "Reemplazar la lectura por videos promocionales únicamente.",
      "Prohibir cualquier soporte que no sea el impreso."
    ]
  },
  {
    enunciado: "La gamificación con propósito en lectura se caracteriza por:",
    correcta: "Mecánicas de juego que apoyan metas lectoras reales (misiones, retos con evidencia textual).",
    incorrectas: [
      "Competencias basadas solo en velocidad sin comprensión.",
      "Premiar asistencia sin realizar lecturas."
    ]
  },
  {
    enunciado: "Un instrumento de evaluación formativa idóneo es:",
    correcta: "La rúbrica analítica con descriptores observables y niveles graduados.",
    incorrectas: [
      "La nota única basada en la impresión del docente.",
      "La suma de páginas leídas sin atender a calidad."
    ]
  },
  {
    enunciado: "El portafolio de lector sirve principalmente para:",
    correcta: "Evidenciar procesos, productos y progresos mediante selección y reflexión metacognitiva.",
    incorrectas: [
      "Sustituir cualquier otra actividad de lectura del curso.",
      "Calificar exclusivamente por extensión del documento."
    ]
  },
  {
    enunciado: "Una 'conferencia de lectura' del alumnado consiste en:",
    correcta: "Defender interpretaciones con citas y responder preguntas sobre elecciones lectoras.",
    incorrectas: [
      "Leer en voz alta el argumento sin análisis.",
      "Exponer biografías sin relación con el texto."
    ]
  },
  {
    enunciado: "En evaluación formativa, la tríada feed-up/feedback/feed-forward significa:",
    correcta: "Metas claras, estado actual con evidencias y pasos siguientes de mejora.",
    incorrectas: [
      "Solo correcciones ortográficas al final del trimestre.",
      "Evitar señalar áreas de mejora para no desmotivar."
    ]
  },
  {
    enunciado: "El Diseño Universal para el Aprendizaje (DUA) aplicado a literatura propone:",
    correcta: "Múltiples medios de representación, acción y expresión para asegurar acceso y participación.",
    incorrectas: [
      "Un único formato de tarea para todo el alumnado.",
      "Eliminar apoyos visuales para fomentar 'esfuerzo'."
    ]
  },
  {
    enunciado: "Para alumnado L2/NEAE, una medida pertinente es:",
    correcta: "Glosarios, andamiaje de géneros, textos graduados y lectura compartida.",
    incorrectas: [
      "Aumentar la complejidad textual sin preparación.",
      "Evitar cualquier adaptación por 'igualdad'."
    ]
  },
  {
    enunciado: "La lectura en voz alta con prosodia trabajada contribuye a:",
    correcta: "Mejorar comprensión, atención al ritmo y disfrute estético del texto.",
    incorrectas: [
      "Reducir el interés del grupo por la interpretación.",
      "Suplantar la lectura autónoma durante todo el curso."
    ]
  },
  {
    enunciado: "Una técnica 'durante la lectura' apropiada es:",
    correcta: "Anotar pistas textuales, preguntas propias y marcas de comprensión en el margen o digitalmente.",
    incorrectas: [
      "Esperar al final para recordar sin tomar notas.",
      "Consultar resúmenes para evitar el texto original."
    ]
  },
  {
    enunciado: "El comentario literario escolar sólido debe:",
    correcta: "Citar pasajes y justificar inferencias con evidencia textual.",
    incorrectas: [
      "Basarse en opiniones generales sin citas.",
      "Evitar el texto para no 'condicionar' la lectura."
    ]
  },
  {
    enunciado: "Los itinerarios lectores personalizados pretenden:",
    correcta: "Acompañar gustos y progresión con propuestas ajustadas al nivel y a la diversidad cultural.",
    incorrectas: [
      "Imponer un mismo libro a todo el grupo siempre.",
      "Elegir solo libros de moda sin criterio pedagógico."
    ]
  },
  {
    enunciado: "Una rúbrica para reseñas o ensayos debería valorar, entre otros,",
    correcta: "Calidad argumentativa, uso de citas, coherencia, estilo y adecuación al género.",
    incorrectas: [
      "Número de adjetivos literarios por párrafo.",
      "Uso de mayúsculas y colores en el documento."
    ]
  },
  {
    enunciado: "Una práctica ética en el trabajo literario escolar es:",
    correcta: "Parafrasear fielmente y citar fuentes para evitar plagio y respetar derechos de autor.",
    incorrectas: [
      "Tomar análisis de internet sin atribución.",
      "Modificar citas para que encajen con la tesis."
    ]
  },
  {
    enunciado: "El uso responsable de IA y correctores en tareas literarias implica:",
    correcta: "Transparencia sobre su uso, verificación crítica y autoría final del estudiante.",
    incorrectas: [
      "Delegar en la IA la lectura y la interpretación.",
      "Aceptar cualquier salida automática sin revisión."
    ]
  },
  {
    enunciado: "Una actividad de intertextualidad adecuada es:",
    correcta: "Relacionar motivos, voces o estructuras entre obras y defender conexiones con ejemplos.",
    incorrectas: [
      "Buscar coincidencias superficiales sin evidencias.",
      "Evitar comparaciones para no 'confundir' al lector."
    ]
  },
  {
    enunciado: "El aprendizaje basado en proyectos (ABP) en literatura se concreta en:",
    correcta: "Productos públicos (antologías, pódcast, rutas literarias) que integran lectura, análisis y creación.",
    incorrectas: [
      "Trabajos sin destinatario ni propósito real.",
      "Tareas aisladas de memorización de fechas."
    ]
  },
  {
    enunciado: "El 'comentario por capas' en el aula ordena el análisis en:",
    correcta: "Lenguaje y figuras → organización textual → contexto/intertexto → sentidos e interpretación.",
    incorrectas: [
      "Ventas, premios y críticas periodísticas.",
      "Biografía del autor sin lectura del texto."
    ]
  },
  {
    enunciado: "Una práctica para lectores resistentes es:",
    correcta: "Elección guiada de lecturas, metas breves y acompañamiento con tertulia o lectura compartida.",
    incorrectas: [
      "Exámenes sorpresa de libros no leídos.",
      "Penalizar cualquier preferencia de género."
    ]
  },
  {
    enunciado: "La escritura creativa como evaluación del entendimiento permite:",
    correcta: "Mostrar comprensión profunda al recrear voces, motivos o estructuras con justificación.",
    incorrectas: [
      "Evitar el análisis porque 'ya se escribió algo'.",
      "Reemplazar toda lectura por producción libre."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'placer lector' en educación literaria?",
    correcta: "Un componente motivacional y estético que se cultiva con mediación y elección significativa.",
    incorrectas: [
      "Un privilegio extracurricular sin cabida en clase.",
      "Un objetivo incompatible con el rigor académico."
    ]
  },
  {
    enunciado: "Una razón para integrar literatura juvenil de calidad es:",
    correcta: "Tender puentes entre experiencia del alumnado y complejidad literaria, sin renunciar al canon.",
    incorrectas: [
      "Sustituir definitivamente las obras clásicas.",
      "Evitar temas actuales para 'no polemizar'."
    ]
  },
  {
    enunciado: "La lectura crítica en contextos digitales exige:",
    correcta: "Evaluar fiabilidad de fuentes, sesgos y paratextos en hipertexto y redes.",
    incorrectas: [
      "Aceptar cualquier reseña como verdad objetiva.",
      "Priorizar el diseño estético sobre la veracidad."
    ]
  },
  {
    enunciado: "Un criterio para valorar lectura en voz alta del alumnado es:",
    correcta: "Prosodia: ritmo, pausas y entonación al servicio del sentido y del público.",
    incorrectas: [
      "Volumen máximo constante para 'impactar'.",
      "Velocidad elevada aunque pierda claridad."
    ]
  },
  {
    enunciado: "Una intervención inclusiva para dificultades lectoras consiste en:",
    correcta: "Textos con tipografías legibles, audiolibros, apoyos visuales y tiempos ampliados.",
    incorrectas: [
      "Pruebas cronometradas idénticas para todos.",
      "Evitar adaptaciones por temor a 'facilitar'."
    ]
  },
  {
    enunciado: "La metáfora 'leer para escribir y escribir para leer' implica que:",
    correcta: "La producción creativa y crítica refuerza la comprensión y viceversa.",
    incorrectas: [
      "La escritura debe posponerse hasta terminar todo el temario.",
      "La lectura es innecesaria si se escribe bien."
    ]
  },
  {
    enunciado: "Un indicador de calidad en educación literaria es la transferencia, entendida como:",
    correcta: "Aplicar estrategias, conceptos y sensibilidades literarias en nuevos textos y contextos.",
    incorrectas: [
      "Recordar títulos y fechas sin uso posterior.",
      "Acumular páginas leídas sin reflexión."
    ]
  },
  {
    enunciado: "La función del docente-mediador de lectura es sobre todo:",
    correcta: "Proponer itinerarios, generar preguntas genuinas y crear condiciones de interpretación compartida.",
    incorrectas: [
      "Monopolizar el sentido autorizando una única lectura.",
      "Reducir la clase a controles de lectura repetidos."
    ]
  }
];
