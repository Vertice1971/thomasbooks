// 36-renacimiento-espana.js

var PREGUNTAS = [
  {
    enunciado: "¿Quiénes son considerados los tres grandes maestros de la polifonía vocal del Renacimiento español?",
    correcta: "Cristóbal de Morales, Francisco Guerrero y Tomás Luis de Victoria.",
    incorrectas: [
      "Juan del Encina, Mateo Flecha y Antonio de Cabezón.",
      "Isaac Albéniz, Enrique Granados y Manuel de Falla."
    ]
  },
  {
    enunciado: "¿Qué compositor español fue el primer gran maestro internacional, llegando a cantar en la Capilla Sixtina y publicando sus obras en Italia?",
    correcta: "Cristóbal de Morales.",
    incorrectas: [
      "Tomás Luis de Victoria.",
      "Francisco Guerrero."
    ]
  },
  {
    enunciado: "Francisco Guerrero destacó por un estilo más humano y cercano, siendo especialmente famoso por sus:",
    correcta: "Canciones y villanescas espirituales, y sus viajes a Jerusalén.",
    incorrectas: [
      "Óperas cómicas en lengua alemana.",
      "Obras exclusivas para instrumentos de percusión."
    ]
  },
  {
    enunciado: "¿Qué compositor español es el máximo representante del misticismo musical y compuso exclusivamente música religiosa?",
    correcta: "Tomás Luis de Victoria.",
    incorrectas: [
      "Juan del Encina.",
      "Mateo Flecha el Viejo."
    ]
  },
  {
    enunciado: "El 'Officium Defunctorum' (Réquiem a 6 voces) es la obra cumbre de:",
    correcta: "Tomás Luis de Victoria.",
    incorrectas: [
      "Cristóbal de Morales.",
      "Alonso Lobo."
    ]
  },
  {
    enunciado: "¿Qué es una 'Ensalada' en el contexto del Renacimiento español?",
    correcta: "Una pieza polifónica que mezcla diversos idiomas, estilos y temas (religiosos y profanos).",
    incorrectas: [
      "Un libro de recetas para banquetes cortesanos.",
      "Una danza que solo se bailaba en verano."
    ]
  },
  {
    enunciado: "¿Quién fue el principal compositor de 'Ensaladas', destacando obras como 'La Bomba' o 'El Fuego'?",
    correcta: "Mateo Flecha el Viejo.",
    incorrectas: [
      "Juan Vásquez.",
      "Antonio de Cabezón."
    ]
  },
  {
    enunciado: "El 'Cancionero de Palacio' es la fuente principal para conocer:",
    correcta: "La música vocal de la corte de los Reyes Católicos, especialmente el villancico y el romance.",
    incorrectas: [
      "La música de las sinagogas de Toledo del siglo XIV.",
      "Los himnos nacionales de las provincias españolas."
    ]
  },
  {
    enunciado: "¿Qué autor es la figura clave del teatro musical temprano y del villancico en el Cancionero de Palacio?",
    correcta: "Juan del Encina.",
    incorrectas: [
      "Francisco Guerrero.",
      "Tomas Luis de Victoria."
    ]
  },
  {
    enunciado: "¿Cómo se llama el sistema de notación utilizado para la música de vihuela y órgano en España?",
    correcta: "Tablatura (cifra).",
    incorrectas: [
      "Neumas cuadrados.",
      "Pentagrama con clave de sol."
    ]
  },
  {
    enunciado: "¿Cuál de estos fue un famoso libro para vihuela publicado en 1536 por Luys de Milán?",
    correcta: "El Maestro.",
    incorrectas: [
      "Los seys libros del Delphin.",
      "Orphénica Lyra."
    ]
  },
  {
    enunciado: "Luys de Narváez es recordado por sus 'Diferencias', que técnicamente son:",
    correcta: "Variaciones sobre un tema dado.",
    incorrectas: [
      "Discusiones teóricas sobre la afinación.",
      "Danzas rápidas de origen árabe."
    ]
  },
  {
    enunciado: "¿Quién compuso las famosas 'Diferencias sobre Guárdame las vacas'?",
    correcta: "Luys de Narváez.",
    incorrectas: [
      "Alonso Mudarra.",
      "Enríquez de Valderrábano."
    ]
  },
  {
    enunciado: "Antonio de Cabezón fue el músico de cámara y organista de:",
    correcta: "Carlos I y Felipe II.",
    incorrectas: [
      "Los Reyes Católicos.",
      "Felipe V."
    ]
  },
  {
    enunciado: "El 'Tiento' es la forma instrumental española equivalente a:",
    correcta: "La fantasía o el ricercare europeo.",
    incorrectas: [
      "La sinfonía romántica.",
      "El coral luterano."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al órgano español del Renacimiento?",
    correcta: "La presencia de registros partidos y, más adelante, la trompetería horizontal.",
    incorrectas: [
      "Que no tiene tubos y funciona con electricidad.",
      "Que solo puede tocar una nota a la vez."
    ]
  },
  {
    enunciado: "El término 'Cifra' en los tratados de la época se refiere a:",
    correcta: "La notación numérica en la tablatura.",
    incorrectas: [
      "El número de músicos que forman el coro.",
      "El precio de los instrumentos."
    ]
  },
  {
    enunciado: "Juan Vásquez destacó por llevar el género del villancico hacia:",
    correcta: "Una polifonía más culta y refinada de estilo madrigalesco.",
    incorrectas: [
      "La música puramente instrumental de tambores.",
      "El canto gregoriano monódico."
    ]
  },
  {
    enunciado: "¿Qué es el 'Tratado de Glosas' (1553) de Diego Ortiz?",
    correcta: "Un manual fundamental sobre la improvisación y ornamentación en la viola da gamba.",
    incorrectas: [
      "Un diccionario de términos en latín.",
      "Un libro de geografía para músicos viajeros."
    ]
  },
  {
    enunciado: "Alonso Mudarra publicó en su libro 'Tres libros de música en cifra' la primera pieza que imita a otro instrumento:",
    correcta: "Fantasía que contrahace el arpa en la manera de Ludovico.",
    incorrectas: [
      "Sonata para piano y flauta.",
      "Concierto para violín y orquesta."
    ]
  },
  {
    enunciado: "¿Qué centro religioso fue un foco de esplendor musical bajo el patronazgo de Felipe II?",
    correcta: "El Monasterio de El Escorial.",
    incorrectas: [
      "La Mezquita de Córdoba.",
      "La Alhambra de Granada."
    ]
  },
  {
    enunciado: "La 'Vihuela' española convivió con un instrumento más popular de cuatro órdenes llamado:",
    correcta: "Guitarra renacentista.",
    incorrectas: [
      "Ukelele.",
      "Bajo eléctrico."
    ]
  },
  {
    enunciado: "En la polifonía española, el uso de instrumentos en la iglesia (ministriles) era:",
    correcta: "Muy habitual para acompañar y reforzar las voces.",
    incorrectas: [
      "Estrictamente prohibido bajo pena de excomunión.",
      "Solo permitido durante los intermedios de la misa."
    ]
  },
  {
    enunciado: "¿Qué es un 'Cuatro de Empezar'?",
    correcta: "Un tipo de villancico breve que servía de introducción.",
    incorrectas: [
      "Un instrumento de cuatro cuerdas desafinadas.",
      "El nombre del director del coro."
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo el tratado de Juan Bermudo 'Declaración de instrumentos musicales'?",
    correcta: "Es una fuente enciclopédica sobre la teoría y la práctica instrumental del siglo XVI.",
    incorrectas: [
      "Es el primer libro que enseña a cantar ópera.",
      "Fue un catálogo de ventas de instrumentos de madera."
    ]
  },
  {
    enunciado: "La 'Música de Ministriles' se refiere a:",
    correcta: "La música interpretada por conjuntos de viento (cornetto, sacabuche, chirimía) en las catedrales.",
    incorrectas: [
      "La música que los ministros del rey cantaban en el parlamento.",
      "Música compuesta solo para ser tocada con las manos."
    ]
  },
  {
    enunciado: "El 'Motete' en España se utilizaba principalmente para:",
    correcta: "Momentos específicos de la liturgia fuera del Ordinario de la Misa.",
    incorrectas: [
      "Bailar en las fiestas del pueblo.",
      "Pedir comida de puerta en puerta."
    ]
  },
  {
    enunciado: "¿Qué es la 'Escuela Sevillana' de polifonía?",
    correcta: "El grupo de compositores vinculados a la Catedral de Sevilla, liderados por Morales y Guerrero.",
    incorrectas: [
      "Un conservatorio moderno de jazz en Andalucía.",
      "Una escuela de fabricación de castañuelas."
    ]
  },
  {
    enunciado: "Francisco de Salinas es recordado por su tratado 'De musica libri septem' y su estudio de:",
    correcta: "El folclore popular español y su aplicación a la teoría musical.",
    incorrectas: [
      "La construcción de pianos de cola.",
      "La acústica de las cuevas prehistóricas."
    ]
  },
  {
    enunciado: "El 'Pange Lingua' de Urreda fue una melodía muy utilizada por los compositores españoles para realizar:",
    correcta: "Versiones polifónicas y variaciones instrumentales (himno al Santísimo).",
    incorrectas: [
      "Danzas de guerra contra los piratas.",
      "Canciones de amor prohibido."
    ]
  },
  {
    enunciado: "¿Qué característica define la música de Tomás Luis de Victoria frente a la de Palestrina?",
    correcta: "Un mayor dramatismo, expresividad y uso de la retórica mística.",
    incorrectas: [
      "Que Victoria usaba sintetizadores y Palestrina no.",
      "Que Victoria solo escribía música de baile."
    ]
  },
  {
    enunciado: "Los 'Libros de Polifonía' en las catedrales españolas eran de gran tamaño (libros de facistol) para que:",
    correcta: "Todo el coro pudiera leer de un solo ejemplar situado en el centro.",
    incorrectas: [
      "Los cantantes pudieran esconderse detrás de ellos.",
      "Hicieran juego con las grandes columnas de piedra."
    ]
  },
  {
    enunciado: "¿Qué es la 'Polifonía de Cancionero'?",
    correcta: "Un estilo de polifonía más sencilla, silábica y homofónica de finales del XV.",
    incorrectas: [
      "Cantar todas las canciones de un libro en orden alfabético.",
      "Un tipo de música que no se podía escribir."
    ]
  },
  {
    enunciado: "Miguel de Fuenllana fue un vihuelista ciego famoso por su libro:",
    correcta: "Orphénica Lyra.",
    incorrectas: [
      "El Parnaso.",
      "Silva de Sirenas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Romance' musical?",
    correcta: "Una composición narrativa polifónica basada en los poemas épicos españoles.",
    incorrectas: [
      "Una canción que solo se canta en San Valentín.",
      "Un tipo de danza con pasos muy largos."
    ]
  },
  {
    enunciado: "La técnica de 'Pasar el punto' en el órgano español consistía en:",
    correcta: "Transportar una pieza a otra altura para adaptarse a las voces del coro.",
    incorrectas: [
      "Limpiar el polvo de las teclas con una pluma.",
      "Terminar la pieza antes de que el cura acabara de hablar."
    ]
  },
  {
    enunciado: "¿Qué compositor de origen flamenco trabajó para la corte española y es autor de la 'Missa L'homme armé'?",
    correcta: "Johannes Urreda (o Wreede).",
    incorrectas: [
      "Josquin des Prez.",
      "Juan del Encina."
    ]
  },
  {
    enunciado: "El 'Bajo de Campana' en la música de órgano española es:",
    correcta: "Un efecto rítmico que imita el toque de las campanas.",
    incorrectas: [
      "Un músico muy fuerte que cargaba las campanas.",
      "El sonido que hace un órgano al romperse."
    ]
  },
  {
    enunciado: "¿Qué es el 'Glosado' en la música para vihuela?",
    correcta: "Añadir adornos y escalas rápidas a una melodía preexistente.",
    incorrectas: [
      "Traducir las notas al castellano.",
      "Pintar el instrumento con barniz brillante."
    ]
  },
  {
    enunciado: "La música del Renacimiento en España se cerró con la llegada de:",
    correcta: "El Barroco y el nuevo estilo de la monodia acompañada.",
    incorrectas: [
      "La música pop de los años 60.",
      "La desaparición de todos los coros de las iglesias."
    ]
  }
];