// temarios/03-lenguaje-y-pensamiento.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué entiende la tradición académica por pensamiento en sentido estricto?",
    correcta: "Actividad cognitiva que elabora conceptos, juicios y razonamientos abstractos.",
    incorrectas: [
      "Conjunto de emociones básicas automáticas.",
      "Procedimiento exclusivamente verbal de memorización."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al lenguaje como sistema simbólico?",
    correcta: "Permite representar y manipular la realidad mediante signos con valor convencional.",
    incorrectas: [
      "Se limita a reproducir estímulos sensoriales sin abstracción.",
      "Solo codifica relaciones uno-a-uno entre palabras y objetos."
    ]
  },
  {
    enunciado: "Según el debate clásico, ¿cuál es la cuestión central sobre lenguaje y pensamiento?",
    correcta: "Determinar si el pensamiento es previo al lenguaje o si el lenguaje configura el pensamiento.",
    incorrectas: [
      "Decidir si la ortografía es superior a la fonética.",
      "Escoger una única lengua universal para toda la ciencia."
    ]
  },
  {
    enunciado: "En el Cratilo, ¿qué problema discute Platón sobre el signo lingüístico?",
    correcta: "La tensión entre naturalismo y convencionalismo del nombre.",
    incorrectas: [
      "La imposibilidad de referir a entidades abstractas.",
      "La superioridad de la escritura frente a la oralidad."
    ]
  },
  {
    enunciado: "¿Qué afirma Aristóteles sobre palabras y afecciones del alma?",
    correcta: "Las palabras son símbolos de afecciones mentales comunes a la especie.",
    incorrectas: [
      "Las palabras son copias físicas de los objetos.",
      "Las palabras no pueden expresar universales."
    ]
  },
  {
    enunciado: "¿Qué sostiene Humboldt con la 'forma interior' de la lengua?",
    correcta: "Cada lengua configura una visión del mundo propia para sus hablantes.",
    incorrectas: [
      "Las lenguas difieren solo en la pronunciación.",
      "La lengua no interviene en la conceptualización."
    ]
  },
  {
    enunciado: "¿Cuál es la tesis fuerte de la hipótesis Sapir-Whorf?",
    correcta: "La estructura lingüística determina el modo de pensar y percibir.",
    incorrectas: [
      "El lenguaje solo refleja una cognición idéntica en todas las culturas.",
      "La gramática impide la variación perceptiva."
    ]
  },
  {
    enunciado: "¿Qué crítica clásica se hace a la versión fuerte de Whorf?",
    correcta: "Confunde correlación cultural con causalidad estricta del lenguaje.",
    incorrectas: [
      "Niega la existencia de universales semánticos.",
      "Desestima por completo la diversidad léxica."
    ]
  },
  {
    enunciado: "¿Qué muestra la investigación sobre denominación de colores (Berlin y Kay)?",
    correcta: "Existen tendencias universales en la categorización, con variación lingüística.",
    incorrectas: [
      "No hay ningún patrón compartido entre lenguas.",
      "Los colores son idénticos en número y nombre en todas las lenguas."
    ]
  },
  {
    enunciado: "Para Piaget, ¿cuál es la relación entre desarrollo cognitivo y lenguaje?",
    correcta: "El pensamiento precede al lenguaje, que se apoya en estructuras cognitivas previas.",
    incorrectas: [
      "El lenguaje genera por sí solo todas las estructuras lógicas.",
      "Ambos procesos son independientes y no interactúan."
    ]
  },
  {
    enunciado: "¿Qué función asigna Vygotsky al lenguaje en el desarrollo?",
    correcta: "Herramienta cultural que media la internalización y transforma el pensamiento.",
    incorrectas: [
      "Código periférico sin impacto en la cognición.",
      "Sistema solo útil para etiquetar objetos simples."
    ]
  },
  {
    enunciado: "¿Qué es el habla egocéntrica en Vygotsky?",
    correcta: "Lenguaje en voz alta que guía la acción y se interioriza como habla interna.",
    incorrectas: [
      "Un trastorno fonológico infantil transitorio.",
      "Una forma de ecolalia sin función cognitiva."
    ]
  },
  {
    enunciado: "¿Qué introduce Chomsky al explicar la relación lenguaje-cognición?",
    correcta: "Una facultad lingüística innata que posibilita la creatividad sintáctica.",
    incorrectas: [
      "Un aprendizaje por condicionamiento sin reglas internas.",
      "Una gramática exclusivamente normativa escolar."
    ]
  },
  {
    enunciado: "¿Cómo concibe Chomsky la competencia lingüística?",
    correcta: "Conocimiento implícito de reglas que generan infinitas oraciones.",
    incorrectas: [
      "Listado memorizado de frases hechas.",
      "Manual de ortografía prescriptiva."
    ]
  },
  {
    enunciado: "¿Qué aportó Bruner a la relación lenguaje-pensamiento en educación?",
    correcta: "El papel del andamiaje y los formatos de interacción para construir significado.",
    incorrectas: [
      "La abolición de la interacción adulto-niño.",
      "Un modelo exclusivamente maduracionista sin contexto social."
    ]
  },
  {
    enunciado: "Según la lingüística cognitiva, ¿qué explica la metáfora conceptual?",
    correcta: "Estructuramos dominios abstractos mediante mapeos desde dominios concretos.",
    incorrectas: [
      "La metáfora es un error semántico que debe evitarse.",
      "La metáfora solo afecta al estilo literario, no al pensamiento."
    ]
  },
  {
    enunciado: "¿Qué es un marco (frame) cognitivo?",
    correcta: "Estructura de conocimiento que organiza expectativas e interpretación.",
    incorrectas: [
      "Un tipo de fonema con rasgos acústicos específicos.",
      "Una figura retórica basada en repetición fónica."
    ]
  },
  {
    enunciado: "¿Qué papel juegan atención y memoria en la relación lenguaje-pensamiento?",
    correcta: "Sostienen la codificación, recuperación e integración de significados.",
    incorrectas: [
      "Bloquean la inferencia pragmática en diálogo.",
      "Sustituyen la necesidad de contexto comunicativo."
    ]
  },
  {
    enunciado: "¿Dónde se localiza típicamente el área de Broca?",
    correcta: "En la corteza frontal inferior del hemisferio izquierdo.",
    incorrectas: [
      "En el lóbulo occipital derecho.",
      "En el cerebelo anterior medial."
    ]
  },
  {
    enunciado: "¿Qué perfil produce una lesión en el área de Broca?",
    correcta: "Afasia motora: producción lenta y esfuerzo articulatorio con comprensión relativamente preservada.",
    incorrectas: [
      "Agnosia visual con producción fluida intacta.",
      "Afasia sensorial con neologismos y comprensión normal."
    ]
  },
  {
    enunciado: "¿Qué caracteriza la afasia de Wernicke?",
    correcta: "Fluidez con parafasias y grave alteración de la comprensión.",
    incorrectas: [
      "Mutismo total sin afectación comprensiva.",
      "Producción telegráfica con semántica intacta."
    ]
  },
  {
    enunciado: "¿Qué indica la lateralización lingüística clásica?",
    correcta: "Predominio del hemisferio izquierdo en lenguaje en la mayoría de diestros.",
    incorrectas: [
      "Predominio universal del hemisferio derecho en todos.",
      "Ausencia total de asimetrías funcionales."
    ]
  },
  {
    enunciado: "¿Qué muestran los estudios de neuroimagen sobre lenguaje y pensamiento?",
    correcta: "Redes distribuidas que comparten nodos prefrontales y temporo-parietales.",
    incorrectas: [
      "Un único centro puntual y fijo para todas las funciones.",
      "Separación absoluta entre lenguaje y cognición general."
    ]
  },
  {
    enunciado: "¿Qué relación se observa entre teoría de la mente y lenguaje?",
    correcta: "El desarrollo pragmático y narrativo favorece inferir estados mentales ajenos.",
    incorrectas: [
      "Son procesos excluyentes que compiten por recursos.",
      "La teoría de la mente depende solo de habilidades motoras."
    ]
  },
  {
    enunciado: "¿Qué aporta el análisis del discurso a la relación lenguaje-pensamiento?",
    correcta: "Explica cómo las prácticas discursivas configuran ideologías y marcos cognitivos.",
    incorrectas: [
      "Reduce el lenguaje a un inventario de fonemas.",
      "Elimina toda referencia al contexto social."
    ]
  },
  {
    enunciado: "¿Cuál es una implicación educativa central de este tema?",
    correcta: "Fortalecer lenguaje académico potencia el razonamiento y el pensamiento crítico.",
    incorrectas: [
      "Separar la enseñanza de lengua del desarrollo cognitivo.",
      "Sustituir la lectura por memorización de reglas aisladas."
    ]
  },
  {
    enunciado: "¿Qué práctica didáctica favorece la construcción del pensamiento a través del lenguaje?",
    correcta: "Debates y escritura argumentativa con retroalimentación formativa.",
    incorrectas: [
      "Copia mecánica sin discusión.",
      "Exclusión de textos auténticos por complejos."
    ]
  },
  {
    enunciado: "¿Qué muestran los estudios sobre gestualidad y pensamiento?",
    correcta: "Los gestos coexpresan y facilitan el acceso a representaciones conceptuales.",
    incorrectas: [
      "Los gestos entorpecen la codificación semántica.",
      "Los gestos son mero adorno sin función cognitiva."
    ]
  },
  {
    enunciado: "¿Cómo se relacionan etiquetas lingüísticas y categorías conceptuales?",
    correcta: "Las etiquetas pueden afinar límites categoriales y acelerar la discriminación.",
    incorrectas: [
      "Las etiquetas destruyen la capacidad de categorizar.",
      "Las categorías son impermeables al lenguaje."
    ]
  },
  {
    enunciado: "¿Qué sugiere la competencia narrativa sobre la mente humana?",
    correcta: "Organiza experiencias temporales y causales para dar sentido al mundo.",
    incorrectas: [
      "Interfiere con la comprensión causal.",
      "Solo sirve para fines estéticos literarios."
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de influencia lingüística en la cognición espacial?",
    correcta: "Lenguas con marcos absolutos guían estrategias de orientación diferentes.",
    incorrectas: [
      "Todas las lenguas codifican el espacio exactamente igual.",
      "El espacio es independiente de la codificación verbal."
    ]
  },
  {
    enunciado: "¿Qué relación hay entre vocabulario académico y rendimiento cognitivo escolar?",
    correcta: "Un léxico académico amplio predice mejor comprensión y razonamiento disciplinar.",
    incorrectas: [
      "El vocabulario no influye en la comprensión de textos.",
      "Solo la memoria visual determina el rendimiento."
    ]
  },
  {
    enunciado: "¿Cómo contribuye la lectura extensiva al pensamiento?",
    correcta: "Amplía conocimientos de mundo y esquemas inferenciales para comprender textos complejos.",
    incorrectas: [
      "Reduce la capacidad de generalización.",
      "Limita el acceso a vocabulario especializado."
    ]
  },
  {
    enunciado: "¿Qué papel cumple la escritura metacognitiva en el aprendizaje?",
    correcta: "Exterioriza procesos de reflexión y autorregulación del pensamiento.",
    incorrectas: [
      "Obliga a repetir sin comprender.",
      "Sustituye la necesidad de planificación textual."
    ]
  },
  {
    enunciado: "¿Qué muestra la plasticidad cerebral en relación con lenguaje y pensamiento?",
    correcta: "El cerebro reorganiza funciones tras daño o aprendizaje intensivo.",
    incorrectas: [
      "La organización cortical es inmutable tras la infancia.",
      "El aprendizaje lingüístico no altera redes neurales."
    ]
  },
  {
    enunciado: "¿Qué indica la evidencia sobre bilingüismo y funciones ejecutivas?",
    correcta: "El control atencional bilingüe puede modular la selección léxica y el cambio de tarea.",
    incorrectas: [
      "El bilingüismo impide desarrollar memoria de trabajo.",
      "No existe ninguna interacción entre bilingüismo y control cognitivo."
    ]
  },
  {
    enunciado: "¿Qué dimensión del lenguaje es crucial para el pensamiento crítico en el aula?",
    correcta: "La argumentación basada en pruebas y conectores lógicos.",
    incorrectas: [
      "El uso exclusivo de narración sin justificación.",
      "La supresión de conectores para evitar complejidad."
    ]
  },
  {
    enunciado: "¿Qué papel tiene la pragmática en la articulación lenguaje-pensamiento?",
    correcta: "Permite inferir significados implícitos y ajustar intenciones comunicativas.",
    incorrectas: [
      "Elimina el contexto para asegurar literalidad.",
      "Sustituye la sintaxis por gestos."
    ]
  },
  {
    enunciado: "¿Qué sugiere la investigación sobre lenguaje emocional y cognición?",
    correcta: "Nombrar emociones ayuda a regularlas y a tomar decisiones más deliberadas.",
    incorrectas: [
      "El léxico emocional aumenta la reactividad y reduce el control.",
      "El lenguaje emocional es irrelevante para la cognición."
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia escolar de la relación lenguaje-pensamiento?",
    correcta: "Integrar objetivos lingüísticos y cognitivos en todas las materias del currículo.",
    incorrectas: [
      "Limitar la enseñanza del lenguaje al área de Lengua.",
      "Evitar tareas de expresión para ahorrar tiempo."
    ]
  },
  {
    enunciado: "¿Qué enfoque didáctico favorece la construcción conjunta de significado?",
    correcta: "Interacción guiada con andamiajes progresivos y uso de preguntas abiertas.",
    incorrectas: [
      "Exposición unidireccional sin participación del alumnado.",
      "Evaluación sumativa sin retroalimentación intermedia."
    ]
  }
];
