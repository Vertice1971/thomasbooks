// 27-improvisacion.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define la 'Improvisación' en el contexto musical?",
    correcta: "La creación de música de forma espontánea y en tiempo real, combinando la interpretación con la composición.",
    incorrectas: [
      "La lectura exacta y rigurosa de una partitura escrita previamente por otro autor.",
      "Tocar un instrumento sin haber estudiado nunca música."
    ]
  },
  {
    enunciado: "En el periodo Barroco, la improvisación era fundamental en la interpretación del:",
    correcta: "Bajo Continuo, donde el teclista rellenaba la armonía a partir de un cifrado.",
    incorrectas: [
      "Himno nacional al principio de cada concierto.",
      "Metrónomo para mantener el pulso constante."
    ]
  },
  {
    enunciado: "¿Qué es una 'Cadenza' en un concierto para solista y orquesta?",
    correcta: "Una sección, originalmente improvisada, donde el solista muestra su virtuosismo técnico sobre los temas de la obra.",
    incorrectas: [
      "La caída accidental de la batuta del director.",
      "Un descanso de quince minutos para que el público tome café."
    ]
  },
  {
    enunciado: "En el Jazz, la improvisación suele realizarse sobre:",
    correcta: "Una estructura armónica fija llamada 'Chorus'.",
    incorrectas: [
      "El ruido del tráfico de la ciudad.",
      "Una sola nota repetida durante toda la noche."
    ]
  },
  {
    enunciado: "¿Qué técnica de improvisación vocal en el Jazz utiliza sílabas sin sentido para imitar instrumentos?",
    correcta: "Scat.",
    incorrectas: [
      "Falsete.",
      "Vibrato."
    ]
  },
  {
    enunciado: "La improvisación 'Ornamental' consiste en:",
    correcta: "Añadir adornos espontáneos (trinos, apoyaturas) a una melodía ya existente.",
    incorrectas: [
      "Cambiar el color del traje del músico según la nota que toca.",
      "Eliminar todas las notas de la partitura y no tocar nada."
    ]
  },
  {
    enunciado: "¿Qué compositor era famoso en el siglo XIX por sus duelos de improvisación al piano?",
    correcta: "Franz Liszt.",
    incorrectas: [
      "Antonio Vivaldi.",
      "Igor Stravinsky."
    ]
  },
  {
    enunciado: "En la música de la India, la improvisación se basa en estructuras melódicas llamadas:",
    correcta: "Ragas.",
    incorrectas: [
      "Fugas.",
      "Sinfonías."
    ]
  },
  {
    enunciado: "La 'Música Aleatoria' del siglo XX deja ciertos elementos de la obra a:",
    correcta: "El azar o la decisión espontánea del intérprete durante la ejecución.",
    incorrectas: [
      "La voluntad de los vecinos del edificio de al lado.",
      "La inteligencia artificial de un ordenador de los años 50."
    ]
  },
  {
    enunciado: "¿Qué es un 'Jam Session'?",
    correcta: "Una reunión informal de músicos para improvisar juntos sin ensayos previos.",
    incorrectas: [
      "Una sesión de grabación de un disco de música clásica.",
      "Un tipo de mermelada que se consume en los conservatorios."
    ]
  },
  {
    enunciado: "En el Renacimiento, el 'Glosa' era un procedimiento de improvisación que consistía en:",
    correcta: "Variar y ornamentar una melodía vocal conocida al interpretarla con un instrumento.",
    incorrectas: [
      "Cantar con la boca llena para cambiar el timbre.",
      "Escribir poemas en los márgenes de los libros de misa."
    ]
  },
  {
    enunciado: "La improvisación 'Libre' se caracteriza por:",
    correcta: "No seguir ninguna estructura armónica, rítmica o melódica preestablecida.",
    incorrectas: [
      "Ser gratuita para todos los asistentes al concierto.",
      "Utilizar solo instrumentos que no necesitan electricidad."
    ]
  },
  {
    enunciado: "¿Qué función tiene el 'Real Book' en la improvisación de Jazz?",
    correcta: "Proporcionar la melodía básica y los acordes (guion) sobre los que improvisar.",
    incorrectas: [
      "Contar la historia de los mejores músicos de la historia.",
      "Explicar cómo reparar un saxofón en caso de avería."
    ]
  },
  {
    enunciado: "El 'Preludio' era originalmente una pieza improvisada que servía para:",
    correcta: "Probar la afinación del instrumento y calentar los dedos antes de la obra principal.",
    incorrectas: [
      "Pedir perdón al público por si la música sonaba mal.",
      "Indicar el final de la jornada laboral del músico."
    ]
  },
  {
    enunciado: "En el Flamenco, la improvisación está presente en:",
    correcta: "El 'cante' y las 'falsetas' de la guitarra, respetando siempre el compás del palo.",
    incorrectas: [
      "La forma de sentarse de los espectadores.",
      "El uso de castañuelas electrónicas controladas por Wi-Fi."
    ]
  },
  {
    enunciado: "¿Qué es un 'Vamp' en la improvisación moderna?",
    correcta: "Una pequeña progresión de acordes que se repite en bucle hasta que el solista decide empezar.",
    incorrectas: [
      "Un músico que solo toca durante la noche.",
      "Un efecto de sonido que imita el vuelo de un murciélago."
    ]
  },
  {
    enunciado: "La improvisación colectiva era la marca de identidad del estilo de jazz:",
    correcta: "Dixieland o New Orleans.",
    incorrectas: [
      "Cool Jazz.",
      "Minimalismo."
    ]
  },
  {
    enunciado: "¿Qué papel juega la memoria en la improvisación?",
    correcta: "Es fundamental para utilizar 'clichés' o frases aprendidas y adaptarlas al contexto actual.",
    incorrectas: [
      "Ninguno, el músico debe olvidar todo lo que sabe antes de empezar.",
      "Solo sirve para recordar el nombre de los otros músicos."
    ]
  },
  {
    enunciado: "La técnica del 'Basso Ostinato' permite improvisar:",
    correcta: "Melodías variadas sobre una línea de bajo que se repite constantemente.",
    incorrectas: [
      "Ritmos de batería sobre un silencio absoluto.",
      "Solo con instrumentos de registro muy agudo."
    ]
  },
  {
    enunciado: "En la música de órgano, la improvisación sigue siendo una disciplina clave para:",
    correcta: "Acompañar la liturgia y adaptar la música a los tiempos del rito.",
    incorrectas: [
      "Limpiar los tubos del órgano mediante vibraciones fuertes.",
      "Hacer que la gente salga rápido de la iglesia."
    ]
  },
  {
    enunciado: "¿Qué es un 'Lick' en el lenguaje de los improvisadores?",
    correcta: "Un patrón o frase musical corta y efectiva que el músico incorpora a su vocabulario.",
    incorrectas: [
      "Un golpe fuerte que se da al instrumento para afinarlo.",
      "La marca de las cuerdas de la guitarra."
    ]
  },
  {
    enunciado: "La improvisación 'Modal' se basa en:",
    correcta: "Explorar las sonoridades de una escala o modo específico sin depender de cambios de acordes rápidos.",
    incorrectas: [
      "Vestirse a la última moda durante el concierto.",
      "Utilizar solo las notas que se encuentran en el centro del piano."
    ]
  },
  {
    enunciado: "Los 'Trobadores' medievales improvisaban a menudo:",
    correcta: "Tanto la letra como la melodía de sus canciones basadas en fórmulas establecidas.",
    incorrectas: [
      "El precio de sus actuaciones según la cara del cliente.",
      "Los instrumentos que fabricaban con huesos de animales."
    ]
  },
  {
    enunciado: "¿Qué indica una 'Partitura Gráfica' a un improvisador?",
    correcta: "Sugerencias visuales (formas, colores, líneas) que debe interpretar libremente.",
    incorrectas: [
      "La dirección exacta de la casa del compositor.",
      "El número de notas que debe tocar por segundo exactamente."
    ]
  },
  {
    enunciado: "En la música clásica, la improvisación empezó a decaer cuando:",
    correcta: "Los compositores empezaron a escribir todos los detalles y adornos en la partitura.",
    incorrectas: [
      "Se prohibió por ley en los teatros nacionales.",
      "Los músicos perdieron la capacidad de inventar melodías."
    ]
  },
  {
    enunciado: "¿Qué es el 'Trading Fours' en el Jazz?",
    correcta: "Un intercambio de improvisaciones de 4 compases entre diferentes músicos (generalmente con la batería).",
    incorrectas: [
      "Vender cuatro instrumentos antiguos para comprar uno nuevo.",
      "Tocar cuatro canciones a la vez en diferentes tonalidades."
    ]
  },
  {
    enunciado: "La improvisación 'Motívica' consiste en:",
    correcta: "Desarrollar y transformar un pequeño fragmento musical (motivo) durante el solo.",
    incorrectas: [
      "Tocar solo las notas que motivan al público a bailar.",
      "Cambiar de motivo cada vez que el director parpadea."
    ]
  },
  {
    enunciado: "En el Barroco, la 'Double' era:",
    correcta: "Una variación improvisada o escrita de una danza que utilizaba figuras más rápidas.",
    incorrectas: [
      "Tocar dos instrumentos de viento al mismo tiempo.",
      "Un músico que sustituía al solista si este se ponía enfermo."
    ]
  },
  {
    enunciado: "El 'Apsara' o la improvisación en el sistema maqam árabe utiliza:",
    correcta: "Microtonos (intervalos menores que el semitono) imposibles de escribir en notación estándar.",
    incorrectas: [
      "Solo tres notas en total.",
      "Gritos en lugar de sonidos instrumentales."
    ]
  },
  {
    enunciado: "¿Qué es el 'Out-playing'?",
    correcta: "Improvisar utilizando notas que están fuera de la armonía del momento para crear tensión.",
    incorrectas: [
      "Tocar fuera del escenario para que no te vean.",
      "Finalizar la actuación antes de tiempo."
    ]
  },
  {
    enunciado: "La improvisación requiere un alto conocimiento de:",
    correcta: "Teoría musical, armonía, escalas y capacidad auditiva.",
    incorrectas: [
      "Matemáticas avanzadas y física nuclear.",
      "La vida privada de los directores de orquesta."
    ]
  },
  {
    enunciado: "Un solo de 'Slap' en el bajo eléctrico es una forma de improvisación basada en:",
    correcta: "La percusión sobre las cuerdas para crear ritmos complejos.",
    incorrectas: [
      "Acariciar el instrumento con una pluma de ave.",
      "Tocar el bajo con los pies."
    ]
  },
  {
    enunciado: "La técnica 'Blow' en el Jazz se refiere a:",
    correcta: "Improvisar de forma intensa y fluida.",
    incorrectas: [
      "Soplar las velas de una tarta en el escenario.",
      "Limpiar el instrumento con aire comprimido."
    ]
  },
  {
    enunciado: "En la música contemporánea, el 'Evento' es una unidad de improvisación que:",
    correcta: "Define un marco de tiempo o acción dentro del cual el músico es libre.",
    incorrectas: [
      "Es una fiesta que se organiza tras el concierto.",
      "Ocurre solo cuando se rompe una cuerda."
    ]
  },
  {
    enunciado: "¿Qué es la 'Improvisación temática'?",
    correcta: "Aquella que utiliza los temas de la propia composición como base para las variaciones espontáneas.",
    incorrectas: [
      "Improvisar sobre el tema del tiempo atmosférico.",
      "Tocar música de películas de superhéroes."
    ]
  },
  {
    enunciado: "La 'Tarantella' era una danza improvisada que supuestamente servía para:",
    correcta: "Curar la picadura de una araña mediante el movimiento frenético.",
    incorrectas: [
      "Invocar a la lluvia en tiempos de sequía.",
      "Aprender a cocinar pasta italiana."
    ]
  },
  {
    enunciado: "¿Qué diferencia a un improvisador de un intérprete puro?",
    correcta: "El improvisador toma decisiones compositivas en el momento de la ejecución.",
    incorrectas: [
      "El improvisador no necesita estudiar el instrumento.",
      "El intérprete puro no puede leer partituras."
    ]
  },
  {
    enunciado: "La 'Célula rítmica' en la improvisación funciona como:",
    correcta: "Un ladrillo constructivo sobre el cual desarrollar ritmos más complejos.",
    incorrectas: [
      "Una parte biológica del oído del músico.",
      "Un tipo de batería electrónica pequeña."
    ]
  },
  {
    enunciado: "En el Rock, el 'Solo' es el momento donde:",
    correcta: "Un instrumentista (normalmente la guitarra) improvisa sobre la base rítmica de la canción.",
    incorrectas: [
      "Todos los músicos se van y queda uno solo en el escenario.",
      "Se apagan todos los amplificadores."
    ]
  },
  {
    enunciado: "La improvisación ayuda al músico a desarrollar:",
    correcta: "El oído interno, la agilidad mental y la conexión emocional con el instrumento.",
    incorrectas: [
      "La fuerza muscular para cargar el piano.",
      "La capacidad de dormir menos horas."
    ]
  }
];