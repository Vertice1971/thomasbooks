// temarios/26-el-texto-narrativo-estructuras-y-caracteristicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es un texto narrativo?",
    correcta: "Un discurso que representa acontecimientos y cambios de estado mediante personajes situados en un tiempo y un espacio",
    incorrectas: [
      "Un conjunto de definiciones y clasificaciones sin personajes ni acciones",
      "Una sucesión de argumentos sin relación temporal ni causal"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre historia (fábula) y discurso (syuzhet)?",
    correcta: "La historia es lo que se cuenta y el discurso es cómo se cuenta",
    incorrectas: [
      "La historia es la forma y el discurso el contenido",
      "La historia se limita al narrador y el discurso solo a los personajes"
    ]
  },
  {
    enunciado: "¿Qué función cumple el planteamiento dentro de una narración?",
    correcta: "Presentar el marco, los personajes y el estado inicial que precede al conflicto",
    incorrectas: [
      "Resolver el conflicto principal y cerrar la trama",
      "Introducir digresiones ajenas a la acción principal"
    ]
  },
  {
    enunciado: "En la pirámide de Freytag, ¿qué etapa corresponde a la máxima tensión?",
    correcta: "El clímax",
    incorrectas: [
      "La exposición",
      "La catástrofe"
    ]
  },
  {
    enunciado: "¿Qué propone Propp en su análisis del cuento maravilloso?",
    correcta: "Una secuencia de funciones y esferas de acción que estructuran la trama",
    incorrectas: [
      "Una clasificación de los géneros periodísticos",
      "Una teoría del verso y la rima aplicable a la lírica"
    ]
  },
  {
    enunciado: "Según Todorov, la trama básica evoluciona desde:",
    correcta: "Un equilibrio inicial, su perturbación y la instauración de un nuevo equilibrio",
    incorrectas: [
      "Una analepsis, una prolepsis y una pausa descriptiva",
      "Una exposición, un epílogo y un apéndice documental"
    ]
  },
  {
    enunciado: "¿Qué es una analepsis?",
    correcta: "Un retroceso temporal que introduce hechos anteriores al presente del relato",
    incorrectas: [
      "Una anticipación que adelanta sucesos futuros",
      "Una pausa descriptiva sin avance de la acción"
    ]
  },
  {
    enunciado: "¿Qué es una prolepsis?",
    correcta: "Un adelanto de acontecimientos futuros respecto al hilo principal",
    incorrectas: [
      "Un salto atrás para explicar antecedentes",
      "Una digresión metatextual sobre el autor"
    ]
  },
  {
    enunciado: "¿Cuál es la relación correcta entre escena, sumario y elipsis?",
    correcta: "La escena equipara tiempo del relato y de la historia; el sumario acelera; la elipsis suprime",
    incorrectas: [
      "La escena acelera; el sumario iguala; la elipsis detalla",
      "La escena suprime; el sumario detalla; la elipsis iguala"
    ]
  },
  {
    enunciado: "¿Qué describe la categoría de frecuencia en Genette?",
    correcta: "Si un acontecimiento se cuenta una vez, varias veces o una vez para hechos repetidos",
    incorrectas: [
      "El número de personajes que intervienen en cada capítulo",
      "El ritmo de las descripciones frente a los diálogos"
    ]
  },
  {
    enunciado: "¿Qué es la focalización cero?",
    correcta: "Una perspectiva omnisciente que conoce más que los personajes",
    incorrectas: [
      "Una perspectiva limitada a lo que sabe un personaje",
      "Una perspectiva externa que solo describe lo observable"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la focalización interna?",
    correcta: "El punto de vista queda restringido al conocimiento de uno o varios personajes",
    incorrectas: [
      "La voz narrativa es siempre en segunda persona",
      "La información supera a la de todos los personajes"
    ]
  },
  {
    enunciado: "¿Qué es la focalización externa?",
    correcta: "Un punto de vista que muestra conductas sin acceder a la interioridad",
    incorrectas: [
      "Una voz omnisciente que revela pensamientos y recuerdos",
      "Un narrador protagonista que narra en primera persona"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre narrador homodiegético y heterodiegético?",
    correcta: "El homodiegético participa en la historia; el heterodiegético no participa",
    incorrectas: [
      "El homodiegético narra en tercera persona y el heterodiegético en primera",
      "El homodiegético es siempre omnisciente y el heterodiegético siempre testigo"
    ]
  },
  {
    enunciado: "¿Qué entendemos por narrador no fiable?",
    correcta: "Una voz cuya versión de los hechos es parcial, sesgada o contradictoria",
    incorrectas: [
      "Una voz que desconoce la gramática normativa",
      "Una voz coral con múltiples personajes hablando a la vez"
    ]
  },
  {
    enunciado: "¿Qué rasgo define el estilo indirecto libre?",
    correcta: "Funde la voz del narrador con la del personaje sin marcas de cita",
    incorrectas: [
      "Reproduce literalmente las palabras del personaje entre comillas",
      "Incorpora un verbo de dicción seguido de subordinada con 'que'"
    ]
  },
  {
    enunciado: "¿Qué es el monólogo interior?",
    correcta: "La representación directa del pensamiento del personaje en su fluir verbal",
    incorrectas: [
      "La descripción objetiva de un escenario sin personajes",
      "La inserción de un texto documental ajeno a la trama"
    ]
  },
  {
    enunciado: "¿Qué designa el cronotopo según Bajtín?",
    correcta: "La articulación significativa de tiempo y espacio en un género narrativo",
    incorrectas: [
      "Un tipo de narrador con conocimiento absoluto",
      "Un índice de capítulos con marcas tipográficas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por verosimilitud en la narración?",
    correcta: "La adecuación de los hechos a las reglas del mundo de ficción y a las expectativas del lector",
    incorrectas: [
      "La coincidencia exacta con hechos históricos siempre comprobables",
      "La ausencia total de recursos figurativos y simbólicos"
    ]
  },
  {
    enunciado: "¿Qué función tienen los paratextos (títulos, prólogos, epígrafes)?",
    correcta: "Orientar la lectura y enmarcar la interpretación de la historia",
    incorrectas: [
      "Sustituir la necesidad de personajes y acciones",
      "Eliminar la función del narrador y de la trama"
    ]
  },
  {
    enunciado: "¿Qué distingue a personajes planos y redondos según Forster?",
    correcta: "Los planos se definen por pocos rasgos estables; los redondos muestran complejidad y evolución",
    incorrectas: [
      "Los planos son protagonistas y los redondos secundarios por definición",
      "Los planos hablan en primera persona y los redondos en tercera"
    ]
  },
  {
    enunciado: "En el modelo actancial de Greimas, ¿qué papel se opone al sujeto?",
    correcta: "El oponente",
    incorrectas: [
      "El destinador",
      "El adyuvante"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una estructura in media res?",
    correcta: "La narración comienza en medio del conflicto y luego reconstruye antecedentes",
    incorrectas: [
      "La historia se cuenta desde el final hacia el principio sin retrospecciones",
      "La trama prescinde de clímax y de desenlace"
    ]
  },
  {
    enunciado: "¿Qué es una estructura circular?",
    correcta: "El final remite al inicio por repetición, eco o cierre simétrico",
    incorrectas: [
      "Un relato sin desenlace posible",
      "Una narración que nunca introduce conflicto"
    ]
  },
  {
    enunciado: "¿Qué se entiende por mise en abyme?",
    correcta: "La inclusión de un relato dentro del relato con efecto especular",
    incorrectas: [
      "La supresión de todos los niveles narrativos",
      "La sustitución del narrador por un paratexto"
    ]
  },
  {
    enunciado: "¿Qué es una narración coral o polifónica?",
    correcta: "Una trama contada por varias voces con perspectivas complementarias o divergentes",
    incorrectas: [
      "Un relato sin personajes identificables",
      "Un texto descriptivo sin progresión de acciones"
    ]
  },
  {
    enunciado: "¿Qué es el ritmo narrativo?",
    correcta: "La alternancia y distribución de escenas, sumarios, pausas y transiciones que modulan la tensión",
    incorrectas: [
      "La métrica silábica de los versos empleados",
      "La frecuencia de adjetivos calificativos por oración"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la narración no literaria con forma narrativa?",
    correcta: "Emplea recursos de relato para informar o documentar hechos reales con intención pragmática",
    incorrectas: [
      "Evita cualquier secuencialidad temporal",
      "Rechaza la presencia de narrador por principio"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a las narrativas transmedia e hipertextuales?",
    correcta: "Distribuyen la historia en múltiples soportes o nodos con recorridos no lineales",
    incorrectas: [
      "Eliminan toda relación causa-efecto",
      "Imponen un único orden de lectura fijo e invariable"
    ]
  },
  {
    enunciado: "¿Cómo contribuyen los conectores temporales a la narración?",
    correcta: "Ordenan los acontecimientos y clarifican la secuencia de la acción",
    incorrectas: [
      "Sustituyen la caracterización de los personajes",
      "Anulan la necesidad de clímax narrativo"
    ]
  },
  {
    enunciado: "¿Qué es la progresión temática en un relato?",
    correcta: "El encadenamiento informativo que hace avanzar la historia y distribuye tema y rema",
    incorrectas: [
      "La repetición mecánica de la misma frase en cada párrafo",
      "La acumulación de descripciones sin relación con la acción"
    ]
  },
  {
    enunciado: "¿Qué implica la figura del lector modelo según Eco?",
    correcta: "Una competencia interpretativa prevista que coopera para completar el sentido del relato",
    incorrectas: [
      "Una persona real identificable a quien se dedica la obra",
      "Un personaje de ficción que narra en primera persona"
    ]
  },
  {
    enunciado: "¿Qué es la ética del punto de vista en narrativa?",
    correcta: "La responsabilidad de cómo y desde dónde se representan acciones y sujetos",
    incorrectas: [
      "La obligación de usar siempre narrador omnisciente",
      "La prohibición de emplear voces múltiples en un mismo texto"
    ]
  },
  {
    enunciado: "¿Qué recurso indica a menudo un narrador no fiable?",
    correcta: "Contradicciones internas, lagunas explicativas o sesgos evidentes en su relato",
    incorrectas: [
      "Precisión terminológica y datos verificables",
      "Estructura cronológica lineal sin saltos"
    ]
  },
  {
    enunciado: "En la narración en español, ¿qué valor suele aportar el pretérito perfecto simple?",
    correcta: "Presenta acciones acabadas y puntuales que hacen avanzar la línea de acontecimientos",
    incorrectas: [
      "Expresa hábitos sin referencia temporal",
      "Indica simultaneidad constante entre planos temporales"
    ]
  },
  {
    enunciado: "¿Qué es un cliffhanger?",
    correcta: "Un cierre en suspenso que retiene información clave para mantener la tensión",
    incorrectas: [
      "Una nota al pie con fuentes bibliográficas",
      "Una explicación retrospectiva completa del conflicto"
    ]
  },
  {
    enunciado: "¿Qué función tiene la descripción en la narración?",
    correcta: "Configura escenarios y atmósferas, y puede modular el ritmo de la acción",
    incorrectas: [
      "Sustituye la necesidad de personajes y conflicto",
      "Impide cualquier avance de la trama por definición"
    ]
  },
  {
    enunciado: "¿Qué define a un narrador testigo?",
    correcta: "Relata los hechos desde la observación, sin ser el protagonista de la acción",
    incorrectas: [
      "Domina el conocimiento total de todos los planos temporales",
      "Es una voz externa que nunca aparece en la diégesis"
    ]
  },
  {
    enunciado: "¿Qué distingue la trama del argumento?",
    correcta: "La trama organiza causales y tensiones; el argumento resume la sucesión básica de hechos",
    incorrectas: [
      "La trama es el resumen y el argumento es la estructura causal",
      "Trama y argumento son sinónimos estrictos en todo análisis"
    ]
  },
  {
    enunciado: "¿Qué efecto produce el uso sostenido del estilo indirecto libre?",
    correcta: "Aumenta la cercanía psicológica con el personaje manteniendo la voz del narrador",
    incorrectas: [
      "Elimina cualquier rasgo de subjetividad del relato",
      "Impone una distancia documental invariable"
    ]
  },
  {
    enunciado: "¿Qué es la cohesión en el relato narrativo?",
    correcta: "El conjunto de mecanismos léxicos, gramaticales y referenciales que conectan los enunciados",
    incorrectas: [
      "La interpretación global de sentido sin atender a las formas",
      "La lista de personajes ordenada alfabéticamente"
    ]
  }
];
