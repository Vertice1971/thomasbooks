// 63-pop-rock.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué género surge a mediados de los 50 de la mezcla del Rhythm & Blues y el Country?",
    correcta: "Rock and Roll.",
    incorrectas: [
      "Heavy Metal.",
      "Música Disco."
    ]
  },
  {
    enunciado: "¿Quién es mundialmente conocido como 'El Rey del Rock and Roll'?",
    correcta: "Elvis Presley.",
    incorrectas: [
      "Chuck Berry.",
      "Little Richard."
    ]
  },
  {
    enunciado: "¿Qué guitarrista y compositor negro es autor de 'Johnny B. Goode' y definió el lenguaje de la guitarra rock?",
    correcta: "Chuck Berry.",
    incorrectas: [
      "B.B. King.",
      "Jimi Hendrix."
    ]
  },
  {
    enunciado: "¿Qué fenómeno musical de los años 60 supuso el éxito masivo de bandas británicas en EE. UU.?",
    correcta: "La Invasión Británica.",
    incorrectas: [
      "El Verano del Amor.",
      "El Resurgir del Blues."
    ]
  },
  {
    enunciado: "¿Qué álbum de The Beatles (1967) es considerado una obra maestra de la experimentación en estudio?",
    correcta: "Sgt. Pepper's Lonely Hearts Club Band.",
    incorrectas: [
      "Please Please Me.",
      "Let It Be."
    ]
  },
  {
    enunciado: "¿Qué banda liderada por Mick Jagger encarnó la imagen más rebelde y ligada al blues del rock británico?",
    correcta: "The Rolling Stones.",
    incorrectas: [
      "The Who.",
      "The Kinks."
    ]
  },
  {
    enunciado: "¿Qué festival de 1969 se convirtió en el símbolo de la cultura hippie y la 'Generación de Woodstock'?",
    correcta: "Festival de Woodstock.",
    incorrectas: [
      "Monterey Pop Festival.",
      "Live Aid."
    ]
  },
  {
    enunciado: "¿Qué virtuoso de la guitarra eléctrica revolucionó el instrumento con su uso de la distorsión y el 'feedback'?",
    correcta: "Jimi Hendrix.",
    incorrectas: [
      "Eric Clapton.",
      "Jimmy Page."
    ]
  },
  {
    enunciado: "¿Qué género de los 70 se caracteriza por canciones largas, virtuosismo y letras de fantasía o filosofía?",
    correcta: "Rock Progresivo.",
    incorrectas: [
      "Punk Rock.",
      "Glam Rock."
    ]
  },
  {
    enunciado: "Pink Floyd es uno de los máximos exponentes del rock progresivo y psicodélico, autor de:",
    correcta: "The Dark Side of the Moon.",
    incorrectas: [
      "Led Zeppelin IV.",
      "A Night at the Opera."
    ]
  },
  {
    enunciado: "¿Qué banda es considerada pionera del Heavy Metal con su álbum homónimo de 1970 con sonidos oscuros y pesados?",
    correcta: "Black Sabbath.",
    incorrectas: [
      "Deep Purple.",
      "Iron Maiden."
    ]
  },
  {
    enunciado: "¿Qué movimiento de finales de los 70 buscaba el retorno a la sencillez rítmica y la provocación social bajo el lema 'No Future'?",
    correcta: "Punk.",
    incorrectas: [
      "New Wave.",
      "Grunge."
    ]
  },
  {
    enunciado: "¿Qué banda británica lideró el movimiento punk con su álbum 'Never Mind the Bollocks'?",
    correcta: "Sex Pistols.",
    incorrectas: [
      "The Clash.",
      "Ramones."
    ]
  },
  {
    enunciado: "¿Qué género bailable dominó las pistas de baile en la segunda mitad de los 70 con artistas como los Bee Gees?",
    correcta: "Música Disco.",
    incorrectas: [
      "Soul.",
      "Funk."
    ]
  },
  {
    enunciado: "¿Qué canal de televisión nacido en 1981 cambió la industria al convertir el videoclip en una herramienta de marketing esencial?",
    correcta: "MTV.",
    incorrectas: [
      "CNN.",
      "BBC Music."
    ]
  },
  {
    enunciado: "¿Quién es conocida como la 'Reina del Pop' tras su explosión comercial en los años 80?",
    correcta: "Madonna.",
    incorrectas: [
      "Cyndi Lauper.",
      "Whitney Houston."
    ]
  },
  {
    enunciado: "¿Qué álbum de Michael Jackson (1982) es el más vendido de la historia de la música?",
    correcta: "Thriller.",
    incorrectas: [
      "Bad.",
      "Off the Wall."
    ]
  },
  {
    enunciado: "¿Qué subgénero del rock surgió en Seattle a principios de los 90 con bandas como Nirvana?",
    correcta: "Grunge.",
    incorrectas: [
      "Britpop.",
      "Indie Rock."
    ]
  },
  {
    enunciado: "¿Qué elemento tecnológico fue fundamental para el nacimiento del Hip-Hop en el Bronx (Nueva York)?",
    correcta: "El uso del tocadiscos como instrumento (Turntablism) y el sampler.",
    incorrectas: [
      "La flauta dulce.",
      "La orquesta de cámara."
    ]
  },
  {
    enunciado: "¿Qué es el 'Rapping'?",
    correcta: "Una forma rítmica de hablar o recitar rimas sobre un beat o acompañamiento musical.",
    incorrectas: [
      "Cantar con voz de soprano.",
      "Tocar la batería con las manos desnudas."
    ]
  },
  {
    enunciado: "¿Qué género electrónico de los 80 nació en Chicago basado en ritmos 4/4 y cajas de ritmos?",
    correcta: "House.",
    incorrectas: [
      "Techno.",
      "Dubstep."
    ]
  },
  {
    enunciado: "¿Qué banda alemana es pionera de la música electrónica de baile con el uso de sintetizadores y estética robótica?",
    correcta: "Kraftwerk.",
    incorrectas: [
      "Depeche Mode.",
      "Pet Shop Boys."
    ]
  },
  {
    enunciado: "¿Qué es el 'Britpop' de los años 90?",
    correcta: "Un resurgir del pop-rock melódico británico liderado por bandas como Oasis y Blur.",
    incorrectas: [
      "Música tradicional galesa tocada con guitarras eléctricas.",
      "Un tipo de bebida gaseosa que patrocina conciertos."
    ]
  },
  {
    enunciado: "¿Qué género surge de la mezcla del rock con elementos de la música tradicional de Jamaica?",
    correcta: "Reggae.",
    incorrectas: [
      "Salsa.",
      "Calipso."
    ]
  },
  {
    enunciado: "¿Quién es la figura más icónica del Reggae a nivel mundial?",
    correcta: "Bob Marley.",
    incorrectas: [
      "Peter Tosh.",
      "Jimmy Cliff."
    ]
  },
  {
    enunciado: "¿Qué es un 'Power Trio'?",
    correcta: "Una formación de rock compuesta por guitarra, bajo y batería (ej. Cream, The Police).",
    incorrectas: [
      "Tres cantantes de ópera muy potentes.",
      "Un sintetizador que tiene tres teclados."
    ]
  },
  {
    enunciado: "El 'Indie' se define originalmente como:",
    correcta: "Música producida de forma independiente a las grandes discográficas (Major labels).",
    incorrectas: [
      "Música procedente de la India.",
      "Música que solo se toca individualmente."
    ]
  },
  {
    enunciado: "¿Qué instrumento de teclado se volvió central en el sonido del rock progresivo de los 70?",
    correcta: "El sintetizador Moog y el Mellotron.",
    incorrectas: [
      "El clavecín.",
      "La espineta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Auto-Tune' en el pop contemporáneo?",
    correcta: "Un procesador de audio que ajusta la afinación de la voz, usado a menudo como efecto estético.",
    incorrectas: [
      "Un coche que reproduce música automáticamente.",
      "Una técnica para afinar guitarras sin tocarlas."
    ]
  },
  {
    enunciado: "¿Qué género urbano actual fusiona el hip-hop con influencias del reggaetón y ritmos oscuros?",
    correcta: "Trap.",
    incorrectas: [
      "Ska.",
      "New Age."
    ]
  },
  {
    enunciado: "¿Qué banda de rock española fue el estandarte de la 'Movida Madrileña'?",
    correcta: "Radio Futura (o Alaska y los Pegamoides).",
    incorrectas: [
      "Mecano.",
      "Héroes del Silencio."
    ]
  },
  {
    enunciado: "El 'Soul' es un género que fusiona el Rhythm & Blues con:",
    correcta: "El Gospel.",
    incorrectas: [
      "La ópera italiana.",
      "El flamenco."
    ]
  },
  {
    enunciado: "¿Qué discográfica de Detroit fue vital para el éxito del Soul y el Pop negro en los 60?",
    correcta: "Motown.",
    incorrectas: [
      "Stax.",
      "Atlantic Records."
    ]
  },
  {
    enunciado: "¿Qué técnica de guitarra popularizó Eddie Van Halen golpeando las cuerdas en el mástil?",
    correcta: "Tapping.",
    incorrectas: [
      "Bending.",
      "Palm mute."
    ]
  },
  {
    enunciado: "¿Qué es el 'Synth-pop'?",
    correcta: "Pop dominado por el uso de sintetizadores y cajas de ritmo, muy popular en los 80.",
    incorrectas: [
      "Música grabada en una cueva.",
      "Pop que se toca con instrumentos de madera únicamente."
    ]
  },
  {
    enunciado: "¿Qué es un 'Concept Album'?",
    correcta: "Un disco donde todas las canciones giran en torno a una misma historia o tema central.",
    incorrectas: [
      "Un disco que no tiene música, solo la idea.",
      "Un disco que se vende solo en tiendas de arte."
    ]
  },
  {
    enunciado: "¿Qué estilo musical mezcla el punk con el pop melódico (ej. Green Day)?",
    correcta: "Pop-Punk.",
    incorrectas: [
      "Emo.",
      "Hardcore."
    ]
  },
  {
    enunciado: "¿Qué es el 'Lo-fi'?",
    correcta: "Música grabada con baja fidelidad o medios técnicos limitados, buscando un sonido crudo.",
    incorrectas: [
      "Música que suena muy alto constantemente.",
      "Música para escuchar durante el ejercicio físico."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Fusión' en el pop-rock actual?",
    correcta: "Permite la mezcla de géneros globales (música latina, africana, electrónica) con el pop estándar.",
    incorrectas: [
      "Sirve para calentar el escenario antes de tocar.",
      "Es una técnica para romper guitarras al final del show."
    ]
  },
  {
    enunciado: "El estudio de la música popular urbana permite comprender:",
    correcta: "Los cambios sociales, las modas y la evolución de la tecnología en la vida cotidiana del siglo XX y XXI.",
    incorrectas: [
      "La fabricación detallada de órganos de iglesia.",
      "La historia de la agricultura en Europa."
    ]
  }
];