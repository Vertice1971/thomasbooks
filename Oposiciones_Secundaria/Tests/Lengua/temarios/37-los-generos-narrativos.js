// temarios/37-los-generos-narrativos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define de manera prototípica al género narrativo?",
    correcta: "La representación de acciones situadas en tiempo y espacio mediadas por un narrador.",
    incorrectas: [
      "La exposición de conceptos sin temporalidad ni agente enunciador.",
      "La escenificación exclusiva mediante diálogo sin narrador."
    ]
  },
  {
    enunciado: "En el circuito comunicativo narrativo, ¿qué distingue al autor del narrador?",
    correcta: "El autor es instancia real extratextual; el narrador es una voz construida dentro del texto.",
    incorrectas: [
      "Ambos son siempre la misma persona y función.",
      "El narrador es quien edita el libro y diseña la portada."
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre fábula y syuzhet (trama) en términos formalistas?",
    correcta: "La fábula es la secuencia lógica-cronológica de los hechos; el syuzhet su disposición artística en el relato.",
    incorrectas: [
      "La fábula es el estilo y el syuzhet el léxico.",
      "No hay diferencia: son sinónimos totales."
    ]
  },
  {
    enunciado: "En la distinción de Chatman, ‘historia’ y ‘discurso’ refieren a:",
    correcta: "Contenido narrado frente a su forma de expresión.",
    incorrectas: [
      "Narrador frente a personaje principal.",
      "Tiempo diegético frente a tiempo editorial."
    ]
  },
  {
    enunciado: "En el modelo actancial de Greimas, ¿qué par de oposiciones es correcto?",
    correcta: "Sujeto vs. oponente; destinador vs. destinatario; ayudante vs. oponente.",
    incorrectas: [
      "Autor vs. editor; lector vs. crítico; narrador vs. corrector.",
      "Héroe vs. narrador; testigo vs. focalizado; escritor vs. voz."
    ]
  },
  {
    enunciado: "¿Qué describe mejor la ‘intriga’ según teorías de la trama?",
    correcta: "La organización de acontecimientos y tensiones hacia un clímax y una clausura.",
    incorrectas: [
      "La lista de personajes sin relaciones causales.",
      "El conjunto de figuras retóricas sin función narrativa."
    ]
  },
  {
    enunciado: "Señala la oposición correcta de voz narrativa en Genette.",
    correcta: "Extradiégetico vs. intradiégetico según el nivel desde el que se narra.",
    incorrectas: [
      "Metafórico vs. literal según el estilo elegido.",
      "Consonante vs. disonante según rima interna."
    ]
  },
  {
    enunciado: "Un narrador homodiegético se caracteriza por:",
    correcta: "Participar en la historia que narra; si es protagonista, se habla de autodiégesis.",
    incorrectas: [
      "Narrar desde fuera sin intervenir en los hechos.",
      "Ser necesariamente omnisciente e infalible."
    ]
  },
  {
    enunciado: "¿Qué implica la focalización cero?",
    correcta: "Conocimiento no restringido del narrador sobre hechos y personajes (omnisciencia).",
    incorrectas: [
      "Relatar solo lo observable externamente sin acceso mental.",
      "Limitarse al saber de un único personaje en todo momento."
    ]
  },
  {
    enunciado: "¿Qué es un narrador no fiable?",
    correcta: "Aquel cuyas afirmaciones generan dudas por contradicciones, sesgos o ironía textual.",
    incorrectas: [
      "El que comete una falta ortográfica en el título.",
      "El que habla en primera persona por norma."
    ]
  },
  {
    enunciado: "Relaciona correctamente orden narrativo y procedimiento.",
    correcta: "Analepsis: retroceso; prolepsis: anticipación.",
    incorrectas: [
      "Analepsis: aceleración; prolepsis: pausa descriptiva.",
      "Analepsis: repetición; prolepsis: iteración."
    ]
  },
  {
    enunciado: "En duración narrativa, ‘escena’ y ‘sumario’ se distinguen porque:",
    correcta: "La escena aproxima el tiempo del relato al de la historia; el sumario condensa períodos largos.",
    incorrectas: [
      "La escena siempre elimina diálogos; el sumario los replica enteros.",
      "La escena es exclusiva de la novela; el sumario solo del cuento."
    ]
  },
  {
    enunciado: "¿Qué describe la ‘frecuencia’ en Genette?",
    correcta: "Relación entre veces contadas y veces ocurridas (singulativa, repetitiva, iterativa).",
    incorrectas: [
      "Número de capítulos por volumen.",
      "Cantidad de diálogos frente a descripciones."
    ]
  },
  {
    enunciado: "El estilo indirecto libre se reconoce por:",
    correcta: "Integrar en tercera persona huellas léxicas y sintácticas del habla/pensamiento del personaje.",
    incorrectas: [
      "Citar textualmente entre comillas la voz del personaje.",
      "Eliminar cualquier marca de subjetividad en el discurso."
    ]
  },
  {
    enunciado: "¿Qué es el monólogo interior?",
    correcta: "Representación del pensamiento del personaje con mínima mediación del narrador.",
    incorrectas: [
      "Una entrevista entre dos narradores omniscientes.",
      "Un diálogo teatral con acotaciones."
    ]
  },
  {
    enunciado: "El cronotopo, según Bajtín, alude a:",
    correcta: "Configuraciones típicas de tiempo y espacio que articulan sentidos narrativos.",
    incorrectas: [
      "La métrica de los versos épicos exclusivamente.",
      "El calendario editorial y la tirada de la obra."
    ]
  },
  {
    enunciado: "‘Worldbuilding’ en narrativa se refiere a:",
    correcta: "La construcción coherente de reglas, espacios y culturas del mundo ficcional.",
    incorrectas: [
      "Al diseño gráfico de la cubierta y solapas.",
      "A la biografía del autor incluida en el epílogo."
    ]
  },
  {
    enunciado: "En la tipología de personajes de Forster, un ‘redondo’ es aquel que:",
    correcta: "Presenta complejidad y capacidad de cambio o sorpresa convincente.",
    incorrectas: [
      "Solo cumple una función fija sin evolución posible.",
      "Se define por su forma geométrica preferida."
    ]
  },
  {
    enunciado: "Una noción central en Propp es:",
    correcta: "La función narrativa como acción recurrente en la estructura del cuento maravilloso.",
    incorrectas: [
      "La rima consonante como eje del relato.",
      "La autoría colectiva de toda leyenda."
    ]
  },
  {
    enunciado: "¿Qué distingue ‘suspense’ de ‘sorpresa’ como efectos?",
    correcta: "El suspense gestiona información anticipada y demora; la sorpresa irrumpe con información no prevista.",
    incorrectas: [
      "Ambos son sinónimos exactos.",
      "La sorpresa solo aparece en relatos no ficcionales."
    ]
  },
  {
    enunciado: "Rasgo prototípico del cuento literario moderno:",
    correcta: "Concentración de efecto y economía estructural.",
    incorrectas: [
      "Abundancia de subtramas y decenas de personajes.",
      "Obligatoriedad de tono ensayístico."
    ]
  },
  {
    enunciado: "Rasgo prototípico de la novela:",
    correcta: "Amplitud, polifonía y exploración de múltiples planos temporales y psicológicos.",
    incorrectas: [
      "Brevedad extrema con un único conflicto puntual.",
      "Ausencia de toda descripción y diálogo."
    ]
  },
  {
    enunciado: "La ‘novela corta’ o ‘novella’ se caracteriza por:",
    correcta: "Dimensión intermedia con unidad de efecto mayor que el cuento y menos expansión que la novela.",
    incorrectas: [
      "Ser una antología de poemas breves.",
      "Exigir narración en verso con rima fija."
    ]
  },
  {
    enunciado: "La fábula, en su forma clásica, se define por:",
    correcta: "Relato breve con finalidad didáctica y moraleja explícita o implícita.",
    incorrectas: [
      "Relato extenso con subtramas psicológicas complejas.",
      "Ensayo argumentativo sin personajes."
    ]
  },
  {
    enunciado: "Mito y leyenda se distinguen porque:",
    correcta: "El mito explica orígenes con valor cosmogónico; la leyenda reinterpreta hechos con anclaje local y tradicional.",
    incorrectas: [
      "Ambos son idénticos y siempre históricos.",
      "La leyenda es científica y el mito periodístico."
    ]
  },
  {
    enunciado: "La crónica literaria suele establecer un pacto de:",
    correcta: "Veridicción testimonial, aunque emplee recursos estéticos de la narrativa.",
    incorrectas: [
      "Ficción absoluta sin base en hechos.",
      "Neutralidad matemática sin voz autoral."
    ]
  },
  {
    enunciado: "Una característica de la novela gráfica es:",
    correcta: "La combinación de códigos verbo-visuales para construir relato.",
    incorrectas: [
      "La ausencia total de imagen por principio.",
      "El uso obligatorio de endecasílabos rimados."
    ]
  },
  {
    enunciado: "Una seña de identidad de la narrativa digital/hipertextual es:",
    correcta: "La estructura no lineal y la navegación con vínculos que ramifican el relato.",
    incorrectas: [
      "La prohibición de interactividad con el lector.",
      "La rima visual como criterio único de avance."
    ]
  },
  {
    enunciado: "¿Qué postula el ‘viaje del héroe’ como macromodelo?",
    correcta: "Una secuencia de etapas recurrentes de partida, iniciación y regreso con pruebas y ayudas.",
    incorrectas: [
      "La eliminación del conflicto para priorizar descripción.",
      "La imposibilidad de variaciones culturales."
    ]
  },
  {
    enunciado: "Compara estructuras: in medias res vs. circular.",
    correcta: "In medias res inicia en pleno conflicto; la circular regresa al punto de partida transformado.",
    incorrectas: [
      "Ambas obligan a linealidad rígida.",
      "La circular elimina el clímax por definición."
    ]
  },
  {
    enunciado: "La focalización variable implica que:",
    correcta: "El foco interno se desplaza entre distintos personajes a lo largo del relato.",
    incorrectas: [
      "Se narra siempre desde fuera sin acceso mental.",
      "El narrador cambia de persona gramatical en cada frase al azar."
    ]
  },
  {
    enunciado: "La polifonía/heteroglosia en la novela alude a:",
    correcta: "La coexistencia de múltiples voces y sociolectos en interacción dialogal.",
    incorrectas: [
      "La presencia de un único registro culto homogéneo.",
      "La preferencia exclusiva por el estilo directo."
    ]
  },
  {
    enunciado: "¿Qué define la metaficción?",
    correcta: "El relato que tematiza o exhibe su propia condición de artificio narrativo.",
    incorrectas: [
      "La ficción que imita métricas clásicas.",
      "La reducción del narrador a una voz documental."
    ]
  },
  {
    enunciado: "La autoficción se entiende como:",
    correcta: "Narrativa que cruza pacto autobiográfico con procedimientos ficcionales.",
    incorrectas: [
      "Autobiografía estricta sin invención.",
      "Ensayo académico sobre teorías narratológicas."
    ]
  },
  {
    enunciado: "La docu-ficción en narrativa se reconoce por:",
    correcta: "Integrar materiales documentales reales en una construcción ficcional.",
    incorrectas: [
      "Excluir toda verosimilitud para priorizar lo maravilloso.",
      "Sustituir la narración por tablas estadísticas sin relato."
    ]
  },
  {
    enunciado: "Un protocolo eficaz de lectura crítica ‘por capas’ incluye:",
    correcta: "Enunciación y focalización → tiempo y modo → mundo y personajes → intriga → estilo y motivos → pactos y paratextos.",
    incorrectas: [
      "Ventas y premios → reseñas de prensa → biografía sin texto.",
      "Solo resumen del argumento sin análisis formal."
    ]
  },
  {
    enunciado: "¿Qué función cumplen los paratextos en narrativa?",
    correcta: "Orientar el contrato de lectura y activar expectativas de género y tono.",
    incorrectas: [
      "Suplir la necesidad de leer el texto completo.",
      "Determinar la autoría legal del manuscrito."
    ]
  },
  {
    enunciado: "En relatos testimoniales, una consideración ética clave es:",
    correcta: "La responsabilidad en el tratamiento de identidades, traumas y veracidad de lo narrado.",
    incorrectas: [
      "La exageración deliberada de datos para aumentar el suspense.",
      "El anonimato obligatorio de cualquier fuente."
    ]
  },
  {
    enunciado: "Una actividad didáctica que evidencia comprensión narrativa es:",
    correcta: "Reescribir una escena desde otra focalización justificando efectos en la intriga.",
    incorrectas: [
      "Memorizar títulos sin relación con procedimientos.",
      "Contar páginas leídas como único indicador."
    ]
  }
];
