// 60-ensenanza-por-descubrimiento.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el núcleo pedagógico de la enseñanza por descubrimiento en Educación Física?",
    correcta: "La implicación cognitiva del alumno para que encuentre, de forma autónoma o guiada, las soluciones a los retos motrices planteados.",
    incorrectas: [
      "La repetición sistemática de un modelo técnico proporcionado previamente por el profesor.",
      "La ausencia de objetivos didácticos para favorecer el recreo libre y espontáneo."
    ]
  },
  {
    enunciado: "En el 'Descubrimiento Guiado', el papel del profesor consiste en:",
    correcta: "Plantear una secuencia de indicios o preguntas que dirijan al alumno hacia una única respuesta técnica o táctica.",
    incorrectas: [
      "Dar la solución correcta al inicio de la sesión para ahorrar tiempo de práctica.",
      "Permanecer en silencio absoluto sin intervenir en ningún momento del proceso."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la 'Resolución de Problemas' como estilo de enseñanza?",
    correcta: "El planteamiento de una tarea que admite múltiples soluciones válidas, donde el alumno debe explorar y decidir.",
    incorrectas: [
      "La resolución de operaciones matemáticas escritas en la pizarra antes de empezar el calentamiento.",
      "La imposición de un castigo físico si el alumno no encuentra la solución en menos de un minuto."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Disonancia Cognitiva' en este enfoque?",
    correcta: "El desequilibrio que se produce en el alumno ante un reto nuevo que no sabe resolver con sus esquemas previos.",
    incorrectas: [
      "Un trastorno de la audición que impide seguir el ritmo de la música durante la clase.",
      "La falta de acuerdo entre dos alumnos sobre quién debe llevar el balón al almacén."
    ]
  },
  {
    enunciado: "En el descubrimiento, el papel del alumno se define como:",
    correcta: "Sujeto activo y protagonista que investiga y construye su propio conocimiento motriz.",
    incorrectas: [
      "Receptor pasivo que se limita a imitar fielmente los gestos del docente.",
      "Auxiliar del profesor encargado de anotar las faltas de asistencia de sus compañeros."
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal del 'Feedback Interrogativo'?",
    correcta: "Estimular la reflexión del alumno para que él mismo identifique sus aciertos y errores.",
    incorrectas: [
      "Sustituir la nota del examen por una serie de preguntas sobre la vida privada del profesor.",
      "Indicar al alumno exactamente qué pie debe mover y en qué dirección de forma imperativa."
    ]
  },
  {
    enunciado: "La enseñanza por descubrimiento es especialmente útil para trabajar:",
    correcta: "La táctica deportiva y las actividades en el medio natural con incertidumbre.",
    incorrectas: [
      "La automatización mecánica de gestos técnicos de alta peligrosidad como el salto de potro.",
      "El aprendizaje de reglamentos mediante la lectura silenciosa de textos legales."
    ]
  },
  {
    enunciado: "En el descubrimiento guiado, ¿qué debe hacer el profesor si el alumno da una respuesta errónea?",
    correcta: "Replantear la pregunta o dar un indicio adicional sin desvelar la solución final.",
    incorrectas: [
      "Darle la respuesta correcta inmediatamente para que no se frustre el grupo.",
      "Suspender la sesión y volver al modelo de mando directo tradicional."
    ]
  },
  {
    enunciado: "¿Qué ventaja presenta este enfoque respecto a la retención del aprendizaje?",
    correcta: "Lo aprendido por descubrimiento se integra de forma más profunda y duradera en la memoria a largo plazo.",
    incorrectas: [
      "Permite que el alumno olvide todo lo aprendido al terminar la sesión para liberar espacio cerebral.",
      "No presenta ninguna ventaja, ya que el alumno se cansa más al tener que pensar."
    ]
  },
  {
    enunciado: "La 'Transferencia' en los estilos cognitivos se ve favorecida porque:",
    correcta: "El alumno comprende los principios subyacentes a la acción, pudiendo aplicarlos a situaciones similares.",
    incorrectas: [
      "El profesor transfiere su sueldo al alumno que más preguntas responde correctamente.",
      "Se obliga al alumno a cambiar de deporte cada cinco minutos de forma aleatoria."
    ]
  },
  {
    enunciado: "En la 'Resolución de Problemas', el éxito de la tarea se evalúa en función de:",
    correcta: "La eficacia de la solución encontrada por el alumno para resolver el reto planteado.",
    incorrectas: [
      "La similitud estética de la respuesta con el modelo ideal del libro de texto.",
      "El número de veces que el alumno pide ayuda al profesor durante la práctica."
    ]
  },
  {
    enunciado: "Un factor crítico en el diseño de tareas de descubrimiento es:",
    correcta: "Que el reto esté dentro de la 'Zona de Desarrollo Próximo' del alumno (ni muy fácil ni imposible).",
    incorrectas: [
      "Que el material utilizado sea siempre de colores primarios para estimular la visión.",
      "Que la tarea dure exactamente el mismo tiempo que un anuncio de televisión."
    ]
  },
  {
    enunciado: "¿Qué es el 'Pensamiento Divergente'?",
    correcta: "La capacidad de generar múltiples respuestas o soluciones distintas ante un solo problema.",
    incorrectas: [
      "El pensamiento que ocurre cuando un alumno se distrae mirando hacia otro lado.",
      "La habilidad de correr en direcciones opuestas al resto de los compañeros."
    ]
  },
  {
    enunciado: "¿Cómo debe ser la organización en el descubrimiento?",
    correcta: "Flexible y adaptada a la búsqueda, permitiendo la exploración individual o en pequeños grupos.",
    incorrectas: [
      "Rígida, en filas y columnas perfectas, para que nadie se mueva sin permiso.",
      "Inexistente, permitiendo que los alumnos abandonen las instalaciones si lo desean."
    ]
  },
  {
    enunciado: "El 'Descubrimiento Guiado' se sitúa en el espectro de Mosston entre:",
    correcta: "La reproducción de modelos y la producción de soluciones (estilo F).",
    incorrectas: [
      "El mando directo y la asignación de tareas exclusivamente.",
      "El entrenamiento de élite y la recreación de personas mayores."
    ]
  },
  {
    enunciado: "La 'Creatividad' motriz se fomenta principalmente a través de:",
    correcta: "Estilos de producción donde no existe una única respuesta correcta prefijada.",
    incorrectas: [
      "La copia exacta de coreografías de famosos en redes sociales.",
      "El cumplimiento estricto de las normas de seguridad del gimnasio."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Error' en el aprendizaje por descubrimiento?",
    correcta: "Se considera una fuente de información necesaria para el reajuste y la búsqueda de la solución.",
    incorrectas: [
      "Es una falta grave que debe ser penalizada con la resta de puntos en la nota final.",
      "Se debe evitar a toda costa mediante la instrucción directa constante del docente."
    ]
  },
  {
    enunciado: "El estilo de 'Divergencia' busca que el alumno:",
    correcta: "Descubra soluciones que el profesor ni siquiera había previsto inicialmente.",
    incorrectas: [
      "Se pelee con sus compañeros para ver quién tiene la razón táctica.",
      "Diga siempre lo contrario de lo que propone el profesor por sistema."
    ]
  },
  {
    enunciado: "La 'Fase de Impacto' en el descubrimiento se caracteriza por:",
    correcta: "La experimentación activa y el tanteo del alumno sobre el terreno.",
    incorrectas: [
      "La escucha atenta de una charla magistral del profesor sentado en el suelo.",
      "El choque físico deliberado entre los alumnos para medir su resistencia."
    ]
  },
  {
    enunciado: "Un reto de 'Resolución de Problemas' en baloncesto podría ser:",
    correcta: "¿Cómo podéis encestar si el defensor es mucho más alto que vosotros?",
    incorrectas: [
      "Realizad 50 lanzamientos de tiro libre tal como os he enseñado.",
      "Leed las reglas del baloncesto y haced un resumen de tres páginas."
    ]
  },
  {
    enunciado: "La enseñanza por descubrimiento favorece la 'Autonomía' porque:",
    correcta: "Reduce la dependencia del alumno respecto a las instrucciones constantes del profesor.",
    incorrectas: [
      "Permite que el alumno se vaya a casa cuando considere que ya ha aprendido suficiente.",
      "Elimina la necesidad de usar materiales deportivos para realizar la clase."
    ]
  },
  {
    enunciado: "En la 'Producción de Divergencia', el profesor debe:",
    correcta: "Aceptar y valorar positivamente todas las respuestas que resuelvan el problema.",
    incorrectas: [
      "Elegir solo una respuesta como la mejor y descartar todas las demás.",
      "Reírse de las soluciones que parezcan extrañas o poco convencionales."
    ]
  },
  {
    enunciado: "¿Qué es el 'Andamiaje' en la enseñanza guiada?",
    correcta: "El apoyo temporal que brinda el profesor para que el alumno alcance una meta que no lograría solo.",
    incorrectas: [
      "La estructura metálica que se utiliza para arreglar el techo del polideportivo.",
      "El uso de muletas y vendajes para proteger articulaciones lesionadas."
    ]
  },
  {
    enunciado: "El clima de aula en estos estilos debe ser:",
    correcta: "De confianza y seguridad emocional, donde el alumno no tenga miedo a equivocarse.",
    incorrectas: [
      "De tensión y competitividad extrema para forzar la aparición de soluciones.",
      "De silencio absoluto para que se escuchen los pensamientos de los alumnos."
    ]
  },
  {
    enunciado: "La 'Metacognición' se trabaja pidiendo al alumno que:",
    correcta: "Explique qué proceso mental ha seguido para llegar a esa solución motriz.",
    incorrectas: [
      "Memorice el nombre científico de todos los huesos del cuerpo humano.",
      "Ignore sus sentimientos y se centre únicamente en el resultado del cronómetro."
    ]
  },
  {
    enunciado: "Un inconveniente de la enseñanza por descubrimiento es:",
    correcta: "Que requiere más tiempo de práctica y una planificación más compleja por parte del docente.",
    incorrectas: [
      "Que los alumnos se vuelven demasiado inteligentes y ya no quieren hacer gimnasia.",
      "Que no se gasta energía física porque todo el trabajo es puramente mental."
    ]
  },
  {
    enunciado: "¿Cómo se evalúa en el descubrimiento según la LOMLOE?",
    correcta: "Priorizando el proceso de búsqueda y la capacidad de reflexión sobre el resultado técnico final.",
    incorrectas: [
      "Midiendo solo la distancia alcanzada en el salto de longitud con una cinta métrica.",
      "Contando el número de veces que el alumno ha sonreído durante la resolución."
    ]
  },
  {
    enunciado: "El 'Estilo de Programa Individualizado' se considera de descubrimiento cuando:",
    correcta: "Las tareas obligan al alumno a investigar su propia respuesta motriz.",
    incorrectas: [
      "El programa consiste en copiar dibujos de un libro de anatomía.",
      "El alumno debe realizar el mismo circuito de fuerza que todos sus compañeros."
    ]
  },
  {
    enunciado: "La 'Iniciativa del Alumno' (Estilo K) implica que el alumno:",
    correcta: "Diseña, ejecuta y evalúa su propio proyecto de aprendizaje bajo supervisión.",
    incorrectas: [
      "Es el encargado de dar las órdenes de inicio y fin de la clase al profesor.",
      "Decide si ese día se hace Educación Física o se van al cine."
    ]
  },
  {
    enunciado: "En el descubrimiento, la 'Información Inicial' debe ser:",
    correcta: "La mínima necesaria para definir el problema sin dar pistas sobre la solución.",
    incorrectas: [
      "Una demostración perfecta de cómo se debe hacer el ejercicio correctamente.",
      "Un video de un deportista profesional realizando la técnica ideal."
    ]
  },
  {
    enunciado: "La 'Indagación' en EF es fundamental para:",
    correcta: "Desarrollar la competencia de 'Aprender a Aprender'.",
    incorrectas: [
      "Aumentar el tamaño del bíceps en alumnos de primer ciclo de ESO.",
      "Aprender a utilizar el silbato y el cronómetro de forma profesional."
    ]
  },
  {
    enunciado: "Un reto de descubrimiento guiado para el equilibrio podría ser:",
    correcta: "¿Qué podéis hacer con vuestros brazos para no caeros de la línea?",
    incorrectas: [
      "Poned los brazos en cruz y aguantad 10 segundos sin moveros.",
      "Mirad cómo pongo yo los brazos y haced exactamente lo mismo."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Pensamiento Convergente' en el descubrimiento guiado?",
    correcta: "La búsqueda de una única respuesta correcta que ha sido predeterminada por el profesor.",
    incorrectas: [
      "La invención de mil formas diferentes de saltar una valla.",
      "No pensar en absoluto y dejarse llevar por el instinto primario."
    ]
  },
  {
    enunciado: "La 'Autoenseñanza' es el estilo donde:",
    correcta: "El alumno asume todas las decisiones (preimpacto, impacto y postimpacto).",
    incorrectas: [
      "El profesor enseña a los alumnos mientras él mismo hace los ejercicios.",
      "Los alumnos se enseñan unos a otros bajo el mando directo del docente."
    ]
  },
  {
    enunciado: "El uso de 'Preguntas Trampa' en el descubrimiento guiado sirve para:",
    correcta: "Obligar al alumno a descartar opciones erróneas y refinar su búsqueda.",
    incorrectas: [
      "Hacer que el alumno se sienta ridículo delante de sus compañeros.",
      "Engañar al alumno para que suspenda el examen práctico por sorpresa."
    ]
  },
  {
    enunciado: "En la enseñanza por descubrimiento, el profesor 'evalúa' al observar:",
    correcta: "La variedad de estrategias empleadas y la evolución en la comprensión del reto.",
    incorrectas: [
      "Si los alumnos llevan el uniforme reglamentario perfectamente limpio.",
      "El silencio absoluto que mantienen los alumnos mientras piensan."
    ]
  },
  {
    enunciado: "La 'Motivación Intrínseca' aumenta en este modelo porque:",
    correcta: "El alumno siente la satisfacción personal de haber superado un reto por sus propios medios.",
    incorrectas: [
      "El profesor regala caramelos a los que encuentran la solución primero.",
      "Se promete un viaje a Disneyland a los que aprueben la unidad didáctica."
    ]
  },
  {
    enunciado: "¿Qué es la 'Exploración Libre'?",
    correcta: "Un estilo de producción donde el alumno interactúa con el material sin metas impuestas.",
    incorrectas: [
      "Salir del centro educativo sin permiso durante la hora de Educación Física.",
      "Subirse a las espalderas y saltar sin ningún tipo de medida de seguridad."
    ]
  },
  {
    enunciado: "El aprendizaje por descubrimiento se asocia con la psicología:",
    correcta: "Constructivista (Piaget, Bruner, Vygotsky).",
    incorrectas: [
      "Conductista radical (Skinner).",
      "Frenológica y antropométrica."
    ]
  },
  {
    enunciado: "El fin último de estos estilos es formar ciudadanos:",
    correcta: "Críticos, autónomos y capaces de resolver problemas en su vida cotidiana.",
    incorrectas: [
      "Que obedezcan órdenes sin cuestionar nunca la autoridad superior.",
      "Que sean capaces de ganar todas las apuestas deportivas que realicen."
    ]
  }
];