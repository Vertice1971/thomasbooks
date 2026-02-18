// 67-musica-imagen.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función principal de la música en su relación con la imagen en el cine?",
    correcta: "Subrayar la acción, crear una atmósfera emocional y dar continuidad narrativa.",
    incorrectas: [
      "Distraer al espectador de los errores de guion.",
      "Sustituir por completo a los diálogos en todas las películas."
    ]
  },
  {
    enunciado: "En la época del 'Cine Mudo', la música solía ser interpretada por:",
    correcta: "Un pianista, un organista o una pequeña orquesta en directo dentro de la sala.",
    incorrectas: [
      "Altavoces digitales de alta fidelidad.",
      "Los propios actores mientras grababan la escena."
    ]
  },
  {
    enunciado: "¿Qué función técnica cumplía la música en las salas de cine antes de la llegada del sonido sincronizado?",
    correcta: "Ocultar el ruido mecánico del proyector y tranquilizar al público en la oscuridad.",
    incorrectas: [
      "Indicar el precio de las palomitas mediante señales sonoras.",
      "Servir de cronómetro para el proyeccionista."
    ]
  },
  {
    enunciado: "¿Qué película de 1927 se considera el primer largometraje con sonido y música sincronizada?",
    correcta: "El cantor de jazz (The Jazz Singer).",
    incorrectas: [
      "Metrópolis.",
      "Lo que el viento se llevó."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Diegética'?",
    correcta: "Aquella que proviene de una fuente presente en la acción y que los personajes pueden oír.",
    incorrectas: [
      "La música que solo oye el público para crear tensión.",
      "El sonido de la voz del narrador en off."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Incidental' o Extradiegética?",
    correcta: "La música de fondo que acompaña a la imagen pero que los personajes no perciben.",
    incorrectas: [
      "La música que suena en la radio dentro de una escena de una película.",
      "El sonido de los disparos y explosiones."
    ]
  },
  {
    enunciado: "¿Qué concepto wagneriano adaptó el cine para asociar un tema musical a un personaje o idea?",
    correcta: "Leitmotiv.",
    incorrectas: [
      "Bajo Continuo.",
      "Aria da Capo."
    ]
  },
  {
    enunciado: "¿Qué compositor de la época dorada de Hollywood es autor de la banda sonora de 'Lo que el viento se llevó'?",
    correcta: "Max Steiner.",
    incorrectas: [
      "Bernard Herrmann.",
      "Hans Zimmer."
    ]
  },
  {
    enunciado: "¿Qué es el 'Mickey-mousing'?",
    correcta: "Una técnica donde la música imita rítmicamente cada movimiento físico de la imagen (típico de dibujos animados).",
    incorrectas: [
      "Poner orejas de ratón a los músicos de la orquesta.",
      "Utilizar solo voces agudas en la banda sonora."
    ]
  },
  {
    enunciado: "¿Qué compositor colaboró estrechamente con Alfred Hitchcock en obras como 'Psicosis' o 'Vértigo'?",
    correcta: "Bernard Herrmann.",
    incorrectas: [
      "John Williams.",
      "Ennio Morricone."
    ]
  },
  {
    enunciado: "¿Qué instrumento electrónico utilizó Miklós Rózsa en 'Recuerda' para evocar la inestabilidad mental?",
    correcta: "Theremín.",
    incorrectas: [
      "Sintetizador Moog.",
      "Guitarra eléctrica."
    ]
  },
  {
    enunciado: "¿Quién es el autor de las icónicas bandas sonoras del 'Spaghetti Western' como 'El bueno, el feo y el malo'?",
    correcta: "Ennio Morricone.",
    incorrectas: [
      "Nino Rota.",
      "Henry Mancini."
    ]
  },
  {
    enunciado: "¿Qué compositor recuperó el estilo sinfónico neorromántico en los años 70 con 'Star Wars'?",
    correcta: "John Williams.",
    incorrectas: [
      "Jerry Goldsmith.",
      "James Horner."
    ]
  },
  {
    enunciado: "¿Qué es la 'Banda Sonora Original' (BSO)?",
    correcta: "El conjunto de música, diálogos y efectos sonoros de una película (aunque popularmente se refiera solo a la música).",
    incorrectas: [
      "Un disco que solo contiene las canciones de moda que salen en la película.",
      "El guion escrito de los diálogos del protagonista."
    ]
  },
  {
    enunciado: "¿Qué función cumple la música en el teatro musical (Broadway)?",
    correcta: "Hacer avanzar la trama y profundizar en la psicología de los personajes a través de las canciones.",
    incorrectas: [
      "Llenar el tiempo mientras los actores se cambian de ropa.",
      "Sustituir a los decorados para ahorrar dinero."
    ]
  },
  {
    enunciado: "¿Qué obra se considera el primer 'musical' moderno que integró canciones y trama seriamente?",
    correcta: "Show Boat (1927).",
    incorrectas: [
      "West Side Story.",
      "Cats."
    ]
  },
  {
    enunciado: "¿Qué compositor escribió la música de 'West Side Story', fusionando jazz, ritmos latinos y música clásica?",
    correcta: "Leonard Bernstein.",
    incorrectas: [
      "Andrew Lloyd Webber.",
      "Stephen Sondheim."
    ]
  },
  {
    enunciado: "¿Qué autor es el responsable de éxitos mundiales como 'El fantasma de la ópera' y 'Cats'?",
    correcta: "Andrew Lloyd Webber.",
    incorrectas: [
      "Cole Porter.",
      "George Gershwin."
    ]
  },
  {
    enunciado: "¿Qué es un 'Leitmotiv' rítmico en una banda sonora?",
    correcta: "Un patrón de ritmo constante que se asocia a una amenaza o situación (ej. Tiburón).",
    incorrectas: [
      "Un instrumento que suena desafinado a propósito.",
      "Cantar la letra de la canción muy rápido."
    ]
  },
  {
    enunciado: "¿Qué papel juega la música en la publicidad televisiva (Spots)?",
    correcta: "Crear una asociación afectiva inmediata con el producto en muy pocos segundos.",
    incorrectas: [
      "Enseñar solfeo a los consumidores mientras compran.",
      "Evitar que se oiga lo que dicen los locutores."
    ]
  },
  {
    enunciado: "¿Qué es el 'Temp Track'?",
    correcta: "Música provisional que usa el montador antes de que el compositor escriba la partitura final.",
    incorrectas: [
      "Una pista de sonido que va muy rápido.",
      "Música grabada en una cinta de baja calidad."
    ]
  },
  {
    enunciado: "¿Qué compositor alemán lideró la revolución de la música electrónica y de sintetizadores en el cine con 'Gladiator' o 'Inception'?",
    correcta: "Hans Zimmer.",
    incorrectas: [
      "Vangelis.",
      "Maurice Jarre."
    ]
  },
  {
    enunciado: "¿Qué película de ciencia ficción utilizó una banda sonora íntegramente de música clásica preexistente (Strauss, Ligeti)?",
    correcta: "2001: Una odisea del espacio.",
    incorrectas: [
      "Blade Runner.",
      "E.T. el extraterrestre."
    ]
  },
  {
    enunciado: "¿Qué es un 'Musical Jukebox'?",
    correcta: "Un musical cuya partitura está formada por canciones ya conocidas de un grupo o artista (ej. Mamma Mia!).",
    incorrectas: [
      "Un musical que se interpreta dentro de una máquina de discos.",
      "Una obra donde el público elige las canciones echando monedas."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el 'Diseño de Sonido' en el cine actual?",
    correcta: "Es la creación integral de todo el universo sonoro (ruidos, ambientes, texturas) más allá de la melodía.",
    incorrectas: [
      "Es el dibujo de cómo deben ser los altavoces del cine.",
      "Es la limpieza de los micrófonos después del rodaje."
    ]
  },
  {
    enunciado: "¿Qué es el 'Soundtrack' de canciones (Songs Soundtrack)?",
    correcta: "Una selección de canciones populares incorporadas a la película, a menudo para su venta comercial independiente.",
    incorrectas: [
      "La grabación de los ruidos de los pasos de los actores.",
      "La música que suena en los créditos finales únicamente."
    ]
  },
  {
    enunciado: "¿Qué compositor de cine español es autor de la música de 'Tesis' y 'Los otros'?",
    correcta: "Alejandro Amenábar.",
    incorrectas: [
      "Alberto Iglesias.",
      "Roque Baños."
    ]
  },
  {
    enunciado: "¿Qué compositor es el colaborador habitual de Pedro Almodóvar?",
    correcta: "Alberto Iglesias.",
    incorrectas: [
      "Lucas Vidal.",
      "Pascal Gaigne."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música de videojuegos' como creación audiovisual?",
    correcta: "Una música interactiva y adaptativa que cambia según las acciones del jugador.",
    incorrectas: [
      "Música que solo puede tener ocho notas en total.",
      "El ruido que hace el mando al vibrar."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sincronismo' en el doblaje musical?",
    correcta: "Hacer coincidir las sílabas de la canción traducida con los movimientos labiales del actor en pantalla.",
    incorrectas: [
      "Que todos los músicos del estudio lleven el mismo reloj.",
      "Cantar a la misma velocidad que corre el protagonista."
    ]
  },
  {
    enunciado: "¿Qué es un 'Video-arte' musical?",
    correcta: "Una creación audiovisual experimental donde la música y la imagen tienen el mismo peso artístico.",
    incorrectas: [
      "Un video de seguridad de una tienda de instrumentos.",
      "Un anuncio de televisión muy largo."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Silencio' en la narrativa audiovisual?",
    correcta: "Crear tensión, resaltar un impacto emocional o dar realismo a una escena.",
    incorrectas: [
      "Ahorrar dinero en la contratación de la orquesta.",
      "Indicar que la película se ha estropeado."
    ]
  },
  {
    enunciado: "¿Qué es la 'Sinfonía de ciudad' en el cine de vanguardia?",
    correcta: "Documentales mudos que utilizan el montaje rítmico de imágenes urbanas como si fuera música.",
    incorrectas: [
      "Una orquesta tocando en mitad de una calle muy transitada.",
      "Un concierto donde los instrumentos son ruidos de coches."
    ]
  },
  {
    enunciado: "¿Qué es el 'Live-to-Picture'?",
    correcta: "Conciertos donde una orquesta toca en directo la banda sonora mientras se proyecta la película completa.",
    incorrectas: [
      "Hacer dibujos mientras se escucha música clásica.",
      "Grabar una película con una cámara que tiene música incorporada."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el 'Estudio de grabación' en la creación de bandas sonoras modernas?",
    correcta: "Permite mezclar orquestas reales con sintetizadores y efectos digitales de forma inseparable.",
    incorrectas: [
      "Es el lugar donde los actores van a dormir durante el rodaje.",
      "Sirve para que los directores de cine aprendan a tocar el violín."
    ]
  },
  {
    enunciado: "¿Qué es el 'Anclaje' sonoro?",
    correcta: "Cuando la música fija el sentido de una imagen que podría ser ambigua.",
    incorrectas: [
      "Tirar un ancla de barco al foso de la orquesta.",
      "Atar los micrófonos para que no se muevan."
    ]
  },
  {
    enunciado: "¿Qué es el 'Contrapunto Audiovisual'?",
    correcta: "Cuando la música expresa una emoción contraria a lo que vemos en la imagen (ej. música alegre en una escena violenta).",
    incorrectas: [
      "Tocar dos canciones a la vez durante una película.",
      "Cuando la música y la imagen van exactamente al mismo ritmo."
    ]
  },
  {
    enunciado: "¿Qué es un 'Score' electrónico?",
    correcta: "Una banda sonora compuesta íntegramente con medios digitales y sintetizadores (ej. Blade Runner).",
    incorrectas: [
      "La puntuación que recibe una película en una revista.",
      "Un tipo de partitura que se lee en una tablet."
    ]
  },
  {
    enunciado: "¿Qué es el 'Wall-to-wall music'?",
    correcta: "El uso excesivo de música durante casi todo el metraje de la película.",
    incorrectas: [
      "Música que se toca contra una pared para que rebote.",
      "Decorar el estudio de grabación con partituras."
    ]
  },
  {
    enunciado: "El estudio de la música e imagen permite comprender:",
    correcta: "La simbiosis estética y narrativa entre el lenguaje sonoro y el visual en la cultura contemporánea.",
    incorrectas: [
      "Cómo se fabrican las palomitas de maíz en los cines.",
      "La historia de la invención de las lentes para cámaras."
    ]
  }
];