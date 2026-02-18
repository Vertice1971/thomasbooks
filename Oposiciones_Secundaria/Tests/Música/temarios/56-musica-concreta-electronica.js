// 56-musica-concreta-electronica.js

var PREGUNTAS = [
  {
    enunciado: "¿En qué década nació la Música Concreta y quién fue su principal impulsor?",
    correcta: "En la década de 1940 (1948), por Pierre Schaeffer.",
    incorrectas: [
      "En los años 20, por Igor Stravinsky.",
      "En los años 60, por los Beatles."
    ]
  },
  {
    enunciado: "La Música Concreta se define como aquella que:",
    correcta: "Utiliza sonidos grabados de la realidad (objetos, naturaleza, ciudad) y los manipula en el laboratorio.",
    incorrectas: [
      "Se toca exclusivamente golpeando bloques de hormigón.",
      "Solo utiliza instrumentos de cuerda frotada."
    ]
  },
  {
    enunciado: "¿Qué institución francesa albergó las investigaciones de Schaeffer sobre el sonido grabado?",
    correcta: "La RTF (Radiodiffusion-Télévision Française).",
    incorrectas: [
      "El Museo del Louvre.",
      "La Ópera de la Bastilla."
    ]
  },
  {
    enunciado: "¿Qué es el 'Objeto Sonoro' según Pierre Schaeffer?",
    correcta: "Un fragmento de sonido captado de la realidad y apreciado por sus cualidades acústicas, fuera de su contexto original.",
    incorrectas: [
      "Un instrumento musical muy pesado hecho de metal.",
      "Un regalo que se le hace al compositor tras el estreno."
    ]
  },
  {
    enunciado: "¿Cuál fue la primera obra oficial de música concreta?",
    correcta: "Estudio de los ferrocarriles (Étude aux chemins de fer).",
    incorrectas: [
      "Sinfonía para un hombre solo.",
      "Canto de los adolescentes."
    ]
  },
  {
    enunciado: "¿Qué soporte tecnológico permitió el gran avance de la música concreta frente al uso inicial de discos?",
    correcta: "La cinta magnetofónica.",
    incorrectas: [
      "El disco de vinilo de 45 rpm.",
      "La memoria USB."
    ]
  },
  {
    enunciado: "¿Qué ciudad alemana fue el centro de la 'Elektronische Musik' (Música Electrónica)?",
    correcta: "Colonia (Köln).",
    incorrectas: [
      "Berlín.",
      "Múnich."
    ]
  },
  {
    enunciado: "A diferencia de la música concreta, la música electrónica de la escuela de Colonia se basaba en:",
    correcta: "Sonidos generados exclusivamente de forma sintética (osciladores) sin rastro de realidad grabada.",
    incorrectas: [
      "Gritos de personas en mitad de la calle.",
      "Tocar el piano de forma muy rápida."
    ]
  },
  {
    enunciado: "¿Quién fue la figura más influyente de la música electrónica alemana en los años 50?",
    correcta: "Karlheinz Stockhausen.",
    incorrectas: [
      "Herbert Eimert.",
      "Pierre Boulez."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Electroacústica'?",
    correcta: "La unión de las técnicas de la música concreta (sonidos reales) y la electrónica (sonidos sintéticos).",
    incorrectas: [
      "Música que solo se toca con guitarras eléctricas.",
      "Música que se escucha a través de la radio solamente."
    ]
  },
  {
    enunciado: "¿Qué obra de Stockhausen de 1956 mezcla la voz de un niño grabada con sonidos generados electrónicamente?",
    correcta: "El canto de los adolescentes (Gesang der Jünglinge).",
    incorrectas: [
      "Kontakte.",
      "Hymnen."
    ]
  },
  {
    enunciado: "La técnica de 'cortar y pegar' trozos de cinta magnetofónica para crear ritmos se llama:",
    correcta: "Montaje (Splicing).",
    incorrectas: [
      "Afinación cromática.",
      "Glissando digital."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Electrónica en Vivo' (Live Electronics)?",
    correcta: "La manipulación de los sonidos en tiempo real durante la interpretación en el escenario.",
    incorrectas: [
      "Poner un disco de música tecno y bailar encima.",
      "Tocar un instrumento que no está enchufado."
    ]
  },
  {
    enunciado: "¿Qué es un 'Oscilador'?",
    correcta: "Un dispositivo electrónico que genera ondas de sonido periódicas (sinusoidales, cuadradas, etc.).",
    incorrectas: [
      "Un músico que se mueve de un lado a otro mientras toca.",
      "El pedal de un piano antiguo."
    ]
  },
  {
    enunciado: "El 'Ruido Blanco' en la música electrónica es:",
    correcta: "Un sonido que contiene todas las frecuencias audibles con la misma intensidad.",
    incorrectas: [
      "El silencio absoluto antes de empezar una obra.",
      "El sonido de un piano afinado perfectamente."
    ]
  },
  {
    enunciado: "¿Qué compositor griego aplicó las leyes matemáticas y estadísticas a la generación de sonidos (Música Estocástica)?",
    correcta: "Iannis Xenakis.",
    incorrectas: [
      "Mikis Theodorakis.",
      "Vangelis."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sintetizador'?",
    correcta: "Un instrumento que permite crear, manipular y combinar sonidos electrónicos de forma integrada.",
    incorrectas: [
      "Una máquina que traduce partituras al latín.",
      "Un tipo de micrófono de gran sensibilidad."
    ]
  },
  {
    enunciado: "¿Qué compositor italiano fundó en Milán el Studio di Fonologia della RAI?",
    correcta: "Luciano Berio (junto a Bruno Maderna).",
    incorrectas: [
      "Giacomo Puccini.",
      "Ennio Morricone."
    ]
  },
  {
    enunciado: "La obra 'Poème électronique' (1958) de Edgard Varèse fue creada para:",
    correcta: "El Pabellón Philips de la Exposición Universal de Bruselas.",
    incorrectas: [
      "La coronación de la reina de Inglaterra.",
      "El final de una película de ciencia ficción."
    ]
  },
  {
    enunciado: "¿Qué es el 'Panning' o espacialización del sonido?",
    correcta: "Mover el sonido entre diferentes altavoces para crear una sensación de espacio.",
    incorrectas: [
      "Limpiar la mesa de mezclas con un paño.",
      "Tocar el piano con una sartén."
    ]
  },
  {
    enunciado: "¿Qué es la 'Síntesis Aditiva'?",
    correcta: "La creación de sonidos complejos mediante la suma de ondas sinusoidales simples.",
    incorrectas: [
      "Sumar el número de músicos en el escenario.",
      "Añadir más instrumentos de viento a la orquesta."
    ]
  },
  {
    enunciado: "¿Qué compositor estadounidense utilizó el primer sintetizador de gran formato (RCA) para su obra 'Philomel'?",
    correcta: "Milton Babbitt.",
    incorrectas: [
      "John Cage.",
      "Philip Glass."
    ]
  },
  {
    enunciado: "¿Qué es un 'Bucle' (Loop) en la música electroacústica original?",
    correcta: "Un fragmento de cinta pegado en sus extremos para que se repita infinitamente.",
    incorrectas: [
      "Un salto que da el director de orquesta.",
      "Un tipo de pendiente que usan las sopranos."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el centro IRCAM de París fundado por Pierre Boulez?",
    correcta: "Es uno de los centros de investigación acústica y musical más importantes del mundo.",
    incorrectas: [
      "Es una escuela de fabricación de guitarras.",
      "Es un hospital para músicos con problemas de oído."
    ]
  },
  {
    enunciado: "La técnica de 'Variación de velocidad' en la cinta magnetofónica permite:",
    correcta: "Cambiar tanto la duración del sonido como su altura (tono).",
    incorrectas: [
      "Que el músico toque más rápido sin cambiar la nota.",
      "Que la orquesta suene más afinada automáticamente."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Mixta'?",
    correcta: "Aquella que combina instrumentos acústicos en vivo con sonidos pregrabados o electrónicos.",
    incorrectas: [
      "Música que mezcla hombres y mujeres en el coro.",
      "Música que se toca en mitad de la calle."
    ]
  },
  {
    enunciado: "¿Qué compositor español fue pionero en el uso de la electrónica en obras como 'Iniciativas'?",
    correcta: "Luis de Pablo.",
    incorrectas: [
      "Manuel de Falla.",
      "Joaquín Rodrigo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Síntesis Granular'?",
    correcta: "Fragmentar el sonido en pequeñas partículas (granos) de milisegundos para crear nuevas texturas.",
    incorrectas: [
      "Componer música basándose en el crecimiento del trigo.",
      "Limpiar el laboratorio de sonido."
    ]
  },
  {
    enunciado: "El sintetizador MOOG, popularizado en los años 60, fue clave por ser:",
    correcta: "Portátil y disponer de un teclado convencional para controlar el sonido electrónico.",
    incorrectas: [
      "Un instrumento que solo funcionaba bajo el agua.",
      "Hecho íntegramente de piedra volcánica."
    ]
  },
  {
    enunciado: "¿Qué es el 'Vocoder'?",
    correcta: "Un dispositivo que analiza la voz humana para aplicarle características de un sonido sintético.",
    incorrectas: [
      "Un tipo de micrófono de gran tamaño.",
      "El nombre del primer cantante electrónico."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Espectralismo' francés de los años 70?",
    correcta: "Basar la composición en el análisis científico del espectro armónico del sonido.",
    incorrectas: [
      "Música compuesta exclusivamente para fantasmas.",
      "Tocar solo las notas que no se oyen."
    ]
  },
  {
    enunciado: "¿Qué es la 'Reverberación' artificial?",
    correcta: "Simular electrónicamente el eco y la persistencia del sonido en diferentes espacios.",
    incorrectas: [
      "Hacer que el sonido sea más agudo.",
      "Un tipo de danza muy lenta."
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo el Laboratorio de Columbia-Princeton en EE. UU.?",
    correcta: "Fue el centro pionero de la música electrónica en América con el sintetizador RCA.",
    incorrectas: [
      "Donde se inventó el piano de cola moderno.",
      "Una escuela de canto para niños."
    ]
  },
  {
    enunciado: "¿Qué es el 'Aliasing' en la música digital temprana?",
    correcta: "Un error de distorsión que ocurre cuando la frecuencia de muestreo es insuficiente.",
    incorrectas: [
      "El nombre artístico de un compositor.",
      "Un tipo de cable para conectar altavoces."
    ]
  },
  {
    enunciado: "¿Qué compositor escribió 'Stimmung', una obra para 6 voces basada en un solo acorde y armónicos?",
    correcta: "Karlheinz Stockhausen.",
    incorrectas: [
      "John Cage.",
      "Igor Stravinsky."
    ]
  },
  {
    enunciado: "La música de ordenador (Computer Music) se diferencia de la electrónica clásica en:",
    correcta: "El uso de algoritmos y programación digital para generar y controlar el sonido.",
    incorrectas: [
      "Que el ordenador es mucho más pesado que un piano.",
      "Que no hace falta electricidad para que funcione."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sampling'?",
    correcta: "Tomar una muestra de un sonido preexistente para reutilizarla instrumentalmente.",
    incorrectas: [
      "Limpiar la superficie del violín.",
      "Un tipo de baile que se hace en grupo."
    ]
  },
  {
    enunciado: "¿Qué compositor español de la Generación del 51 destaca por sus investigaciones en el Laboratorio de Cuenca?",
    correcta: "Horacio Vaggione (afincado en España) o Francisco Guerrero.",
    incorrectas: [
      "Isaac Albéniz.",
      "Juan del Encina."
    ]
  },
  {
    enunciado: "El desarrollo de la música electrónica dio lugar, en el ámbito popular, a géneros como:",
    correcta: "El Techno, el House y el Ambient.",
    incorrectas: [
      "El Canto Gregoriano.",
      "La Zarzuela Grande."
    ]
  },
  {
    enunciado: "El fin último del estudio de la música electrónica es comprender:",
    correcta: "La transformación del concepto de 'instrumento' y la expansión infinita de la paleta sonora.",
    incorrectas: [
      "Cómo se reparte la luz en los teatros.",
      "La historia de la electricidad en los hogares."
    ]
  }
];