// 42-instrumental-clasica.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el género instrumental rey del Clasicismo, derivado de la obertura de ópera italiana?",
    correcta: "La Sinfonía.",
    incorrectas: [
      "El Preludio coral.",
      "La Suite de danzas."
    ]
  },
  {
    enunciado: "En una sinfonía clásica estándar, el primer movimiento suele seguir la estructura de:",
    correcta: "Forma Sonata (Allegro).",
    incorrectas: [
      "Tema con variaciones.",
      "Rondó-Sonata."
    ]
  },
  {
    enunciado: "¿Qué agrupación de cámara se convirtió en el laboratorio compositivo de Haydn, Mozart y Beethoven?",
    correcta: "El Cuarteto de Cuerda.",
    incorrectas: [
      "El Quinteto de viento metal.",
      "El Trío de flauta, arpa y viola."
    ]
  },
  {
    enunciado: "¿Qué instrumentos componen un cuarteto de cuerda clásico?",
    correcta: "Dos violines, una viola y un violonchelo.",
    incorrectas: [
      "Violín, piano, viola y contrabajo.",
      "Cuatro violines de distintos tamaños."
    ]
  },
  {
    enunciado: "El segundo movimiento de una sinfonía o sonata suele tener un carácter:",
    correcta: "Lento y lírico (Andante o Adagio).",
    incorrectas: [
      "Muy rápido y virtuoso (Presto).",
      "Dancístico y aristocrático (Minueto)."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el tercer movimiento de la sinfonía clásica, de ritmo ternario y origen dancístico?",
    correcta: "Minueto (o Minueto con Trío).",
    incorrectas: [
      "Zarabanda.",
      "Scherzo (en el Clasicismo tardío)."
    ]
  },
  {
    enunciado: "El cuarto movimiento (Finale) de una obra clásica suele utilizar frecuentemente la forma:",
    correcta: "Rondó o Rondó-Sonata.",
    incorrectas: [
      "Fuga cromática.",
      "Obertura francesa."
    ]
  },
  {
    enunciado: "¿Qué compositor escribió 104 sinfonías, estableciendo el modelo formal del género?",
    correcta: "Franz Joseph Haydn.",
    incorrectas: [
      "Wolfgang Amadeus Mozart.",
      "Ludwig van Beethoven."
    ]
  },
  {
    enunciado: "La 'Sinfonía nº 40' de Mozart destaca por su carácter:",
    correcta: "Apasionado y dramático, escrita en la tonalidad de Sol menor.",
    incorrectas: [
      "Festivo y marcial, con uso de grandes coros.",
      "Religioso, basada en temas gregorianos."
    ]
  },
  {
    enunciado: "¿Qué innovación técnica permitió al pianoforte destacar como instrumento solista frente a la orquesta?",
    correcta: "Su capacidad de realizar matices dinámicos (crescendo y diminuendo) mediante la pulsación.",
    incorrectas: [
      "El uso de cuerdas de nailon para un sonido más dulce.",
      "La eliminación de los pedales para que fuera más fácil de tocar."
    ]
  },
  {
    enunciado: "El 'Concierto para instrumento solista y orquesta' clásico suele prescindir de:",
    correcta: "El minueto (tiene generalmente solo tres movimientos).",
    incorrectas: [
      "La sección de desarrollo en la forma sonata.",
      "Los instrumentos de madera en la orquesta."
    ]
  },
  {
    enunciado: "¿Qué es una 'Doble Exposición' en un concierto clásico?",
    correcta: "Cuando la orquesta presenta los temas primero y luego el solista los reexpone y desarrolla.",
    incorrectas: [
      "Tocar la obra dos veces seguidas porque al público le ha gustado.",
      "Que dos solistas toquen exactamente lo mismo a la vez."
    ]
  },
  {
    enunciado: "¿Qué instrumento de viento madera fue el favorito de Mozart, dedicándole un famoso concierto (K. 622)?",
    correcta: "El Clarinete.",
    incorrectas: [
      "El Fagot.",
      "El Oboe."
    ]
  },
  {
    enunciado: "La 'Música de cámara' clásica se diferencia de la orquestal principalmente en:",
    correcta: "Que hay un solo músico por parte (sin doblar voces).",
    incorrectas: [
      "Que no se puede tocar en teatros, solo en dormitorios.",
      "Que los instrumentos deben ser de tamaño reducido."
    ]
  },
  {
    enunciado: "El 'Trío con piano' clásico está formado habitualmente por:",
    correcta: "Piano, violín y violonchelo.",
    incorrectas: [
      "Piano, flauta y viola.",
      "Tres pianos afinados de forma diferente."
    ]
  },
  {
    enunciado: "¿Qué compositor llevó la sinfonía a su máxima expansión emocional y estructural a principios del XIX?",
    correcta: "Ludwig van Beethoven.",
    incorrectas: [
      "Franz Schubert.",
      "Joseph Haydn."
    ]
  },
  {
    enunciado: "La 'Sonata para piano' clásica suele estructurarse en:",
    correcta: "Tres o cuatro movimientos, siguiendo el ciclo de la sonata.",
    incorrectas: [
      "Un solo movimiento largo llamado 'Fantasía'.",
      "Seis movimientos cortos basados en danzas barrocas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Divertimento'?",
    correcta: "Una forma musical multi-movimiento para conjunto reducido, de carácter ligero y festivo.",
    incorrectas: [
      "Un método de castigo para los músicos que desafinaban.",
      "Una pieza fúnebre para el entierro de nobles."
    ]
  },
  {
    enunciado: "En la orquesta clásica, la sección de cuerda (violines I y II, violas, cellos y contrabajos) funciona como:",
    correcta: "El núcleo o base fundamental de la textura orquestal.",
    incorrectas: [
      "Un adorno secundario que solo suena al final de la obra.",
      "Un grupo que solo toca si el director da permiso expreso."
    ]
  },
  {
    enunciado: "¿Qué papel jugaban los timbales en la sinfonía clásica?",
    correcta: "Reforzar las cadencias y marcar el ritmo en los pasajes de 'tutti' orquestal.",
    incorrectas: [
      "Tocar melodías complejas de carácter lírico.",
      "Sustituir al violonchelo en los movimientos lentos."
    ]
  },
  {
    enunciado: "La 'Serenata' clásica, como 'Una pequeña música nocturna' de Mozart, estaba pensada para:",
    correcta: "Interpretaciones al aire libre o recepciones sociales nocturnas.",
    incorrectas: [
      "Dormir a los niños pequeños en los palacios.",
      "Ser tocada exclusivamente por músicos ciegos."
    ]
  },
  {
    enunciado: "¿Qué es un 'Quinteto de cuerda'?",
    correcta: "Un cuarteto de cuerda al que se añade un segundo violonchelo o una segunda viola.",
    incorrectas: [
      "Cinco violines tocando la misma nota.",
      "Una orquesta de cámara sin director."
    ]
  },
  {
    enunciado: "¿Qué compositor es autor de la 'Sinfonía de los Adioses', donde los músicos se retiran gradualmente?",
    correcta: "Joseph Haydn.",
    incorrectas: [
      "W. A. Mozart.",
      "Ludwig van Beethoven."
    ]
  },
  {
    enunciado: "La 'Sonata Patética' es una de las obras para piano más famosas del periodo temprano de:",
    correcta: "Beethoven.",
    incorrectas: [
      "Clementi.",
      "Mozart."
    ]
  },
  {
    enunciado: "En el Clasicismo, los instrumentos de metal (trompetas y trompas) tenían la limitación de:",
    correcta: "No tener válvulas, por lo que solo tocaban las notas de la serie armónica natural.",
    incorrectas: [
      "Ser demasiado pesados para los músicos de la época.",
      "Estar prohibidos por la Iglesia en las sinfonías profanas."
    ]
  },
  {
    enunciado: "¿Qué es una 'Sonatina'?",
    correcta: "Una sonata de dimensiones reducidas y menor dificultad técnica, a menudo didáctica.",
    incorrectas: [
      "Un instrumento de teclado más pequeño que el piano.",
      "La hija pequeña de un compositor famoso."
    ]
  },
  {
    enunciado: "La 'Sinfonía nº 9' de Beethoven es revolucionaria instrumentalmente por:",
    correcta: "La inclusión de voces solistas y coro en el último movimiento.",
    incorrectas: [
      "Eliminar totalmente la sección de violines.",
      "Ser la primera obra escrita para banda de jazz."
    ]
  },
  {
    enunciado: "¿Qué instrumento solía dirigir la orquesta clásica desde su atril antes de la figura del director moderno?",
    correcta: "El primer violín (concertino).",
    incorrectas: [
      "El timbalero.",
      "El flautista principal."
    ]
  },
  {
    enunciado: "El 'Bajo de Alberti' se utiliza en la música de teclado clásica para:",
    correcta: "Dar soporte armónico con un ritmo constante sin oscurecer la melodía.",
    incorrectas: [
      "Hacer que el piano suene como un tambor de guerra.",
      "Sustituir la mano derecha por la izquierda."
    ]
  },
  {
    enunciado: "¿Qué es el 'Rondó-Sonata'?",
    correcta: "Una forma mixta que utiliza el estribillo del rondó pero con un desarrollo central tipo sonata.",
    incorrectas: [
      "Una sonata que se toca en círculo.",
      "Un error de edición donde se mezclan dos partituras."
    ]
  },
  {
    enunciado: "Muzio Clementi es conocido como:",
    correcta: "El padre del piano moderno, por sus sonatas y estudios técnicos (Gradus ad Parnassum).",
    incorrectas: [
      "El inventor de la flauta de metal.",
      "El primer director de orquesta que usó batuta."
    ]
  },
  {
    enunciado: "La 'Sinfonía Júpiter' es la última y más compleja sinfonía de:",
    correcta: "W. A. Mozart.",
    incorrectas: [
      "J. Haydn.",
      "Beethoven."
    ]
  },
  {
    enunciado: "¿Qué es una 'Coda' en el contexto de una sinfonía?",
    correcta: "Una sección final que reafirma la tonalidad principal y cierra la obra con fuerza.",
    incorrectas: [
      "El primer compás de la exposición.",
      "La parte del violín donde se apoya la barbilla."
    ]
  },
  {
    enunciado: "En el Clasicismo, el equilibrio instrumental se buscaba mediante:",
    correcta: "La proporción entre las familias de instrumentos y la claridad de las texturas.",
    incorrectas: [
      "Que todos los instrumentos pesaran exactamente lo mismo.",
      "Poner el mismo número de músicos a la derecha que a la izquierda."
    ]
  },
  {
    enunciado: "¿Qué instrumento de madera suele realizar los solos más líricos en el movimiento lento clásico?",
    correcta: "El Oboe o el Clarinete.",
    incorrectas: [
      "El Contrabajo.",
      "Los Platos."
    ]
  },
  {
    enunciado: "La 'Eroica' (3ª Sinfonía) de Beethoven rompió con el Clasicismo por:",
    correcta: "Su inusitada duración, complejidad armónica y carga ideológica.",
    incorrectas: [
      "Ser la primera sinfonía que no usaba instrumentos de cuerda.",
      "Estar escrita para ser tocada por una sola persona."
    ]
  },
  {
    enunciado: "Los 'Cuartetos Prusianos' de Mozart destacan por el papel protagonista del:",
    correcta: "Violonchelo.",
    incorrectas: [
      "Triángulo.",
      "Órgano."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sturm und Drang'?",
    correcta: "Un movimiento prerromántico que aportó tensión y dramatismo a algunas obras clásicas.",
    incorrectas: [
      "Un tipo de afinación especial para los vientos.",
      "El nombre alemán para la flauta dulce."
    ]
  },
  {
    enunciado: "El 'Concierto para piano nº 21' de Mozart es famoso por su segundo movimiento, un ejemplo de:",
    correcta: "Andante lírico con melodía de gran belleza y acompañamiento sencillo.",
    incorrectas: [
      "Fuga a cinco voces extremadamente rápida.",
      "Solo de percusión con acompañamiento de vientos."
    ]
  },
  {
    enunciado: "El fin de la era instrumental clásica dio paso a:",
    correcta: "El Romanticismo, donde la forma se adaptó a la expresión subjetiva del autor.",
    incorrectas: [
      "La desaparición total de la orquesta sinfónica.",
      "El regreso a las suites de danzas barrocas."
    ]
  }
];