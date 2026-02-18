// 50-nacionalismos-expresionismo.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el objetivo principal de los Nacionalismos musicales a finales del siglo XIX?",
    correcta: "Reivindicar la identidad cultural de un pueblo mediante el uso del folclore y la lengua propia.",
    incorrectas: [
      "Unificar todos los estilos europeos en uno solo basado en el latín.",
      "Eliminar el uso de instrumentos de madera en la orquesta."
    ]
  },
  {
    enunciado: "¿Qué grupo de compositores rusos buscó una música puramente nacional, alejada de la influencia académica occidental?",
    correcta: "El Grupo de los Cinco (El Gran Puñado).",
    incorrectas: [
      "La Segunda Escuela de Viena.",
      "Los Seis de Francia."
    ]
  },
  {
    enunciado: "¿Cuál de estos compositores NO pertenecía al 'Grupo de los Cinco'?",
    correcta: "Piotr Ilich Chaikovski.",
    incorrectas: [
      "Modest Músorgski.",
      "Nikolái Rimski-Kórsakov."
    ]
  },
  {
    enunciado: "¿Qué obra de Músorgski describe musicalmente un paseo por una galería de arte?",
    correcta: "Cuadros de una exposición.",
    incorrectas: [
      "Una noche en el monte pelado.",
      "Scheherazade."
    ]
  },
  {
    enunciado: "El nacionalismo bohemio (checo) tuvo sus dos figuras más relevantes en:",
    correcta: "Bedřich Smetana y Antonín Dvořák.",
    incorrectas: [
      "Béla Bartók y Zoltán Kodály.",
      "Jean Sibelius y Edvard Grieg."
    ]
  },
  {
    enunciado: "¿Qué poema sinfónico de Smetana describe el curso del río principal de su patria?",
    correcta: "El Moldava (Vltava).",
    incorrectas: [
      "Finlandia.",
      "Danzas eslavas."
    ]
  },
  {
    enunciado: "¿Qué compositor representa el nacionalismo nórdico en Noruega, autor de la música para 'Peer Gynt'?",
    correcta: "Edvard Grieg.",
    incorrectas: [
      "Jean Sibelius.",
      "Carl Nielsen."
    ]
  },
  {
    enunciado: "Jean Sibelius es el compositor nacional por excelencia de:",
    correcta: "Finlandia.",
    incorrectas: [
      "Suecia.",
      "Dinamarca."
    ]
  },
  {
    enunciado: "¿Qué país destaca por un nacionalismo tardío basado en la investigación científica del folclore (etnomusicología)?",
    correcta: "Hungría (con Bartók y Kodály).",
    incorrectas: [
      "Italia.",
      "Francia."
    ]
  },
  {
    enunciado: "¿Qué es el 'Expresionismo' musical?",
    correcta: "Una corriente que busca expresar las ansiedades y el mundo interior del ser humano mediante la distorsión y la tensión.",
    incorrectas: [
      "Un estilo que busca la belleza externa y el equilibrio clásico.",
      "Música destinada a la meditación y el relax absoluto."
    ]
  },
  {
    enunciado: "¿Quién es el líder de la estética expresionista y autor de 'Pierrot Lunaire'?",
    correcta: "Arnold Schönberg.",
    incorrectas: [
      "Igor Stravinsky.",
      "Claude Debussy."
    ]
  },
  {
    enunciado: "El expresionismo musical se caracteriza por el uso de:",
    correcta: "La atonalidad, las disonancias extremas y texturas fragmentadas.",
    incorrectas: [
      "Melodías dulces y sencillas fáciles de recordar.",
      "Acordes perfectos de tónica y dominante constantemente."
    ]
  },
  {
    enunciado: "¿Qué técnica vocal, a medio camino entre el habla y el canto, es típica del expresionismo?",
    correcta: "Sprechgesang.",
    incorrectas: [
      "Bel Canto.",
      "Canto Gregoriano."
    ]
  },
  {
    enunciado: "¿Qué compositor inglés compuso la suite orquestal 'Los Planetas'?",
    correcta: "Gustav Holst.",
    incorrectas: [
      "Edward Elgar.",
      "Ralph Vaughan Williams."
    ]
  },
  {
    enunciado: "El nacionalismo en Estados Unidos tuvo una figura clave que incorporó elementos del jazz y el folclore americano:",
    correcta: "George Gershwin.",
    incorrectas: [
      "Aaron Copland.",
      "Philip Glass."
    ]
  },
  {
    enunciado: "Béla Bartók utilizó en su música ritmos y escalas provenientes de:",
    correcta: "El folclore campesino húngaro y rumano auténtico.",
    incorrectas: [
      "La música pop de los años 20.",
      "Los cantos religiosos del Vaticano."
    ]
  },
  {
    enunciado: "¿Qué es la 'Atonalidad'?",
    correcta: "La ausencia de un centro tonal o jerarquía entre las notas de la escala.",
    incorrectas: [
      "Tocar todas las notas de un piano al mismo tiempo con los pies.",
      "Cantar sin abrir la boca."
    ]
  },
  {
    enunciado: "¿Qué ópera expresionista de Alban Berg narra la tragedia de un soldado oprimido?",
    correcta: "Wozzeck.",
    incorrectas: [
      "Carmen.",
      "El caballero de la rosa."
    ]
  },
  {
    enunciado: "¿Qué compositor nacionalista brasileño compuso las 'Bachianas Brasileiras'?",
    correcta: "Heitor Villa-Lobos.",
    incorrectas: [
      "Alberto Ginastera.",
      "Carlos Chávez."
    ]
  },
  {
    enunciado: "En el nacionalismo ruso, Rimski-Kórsakov destacó especialmente por:",
    correcta: "Su maestría suprema en la orquestación y el color tímbrico.",
    incorrectas: [
      "Ser el inventor de la flauta eléctrica.",
      "Escribir solo para piano de juguete."
    ]
  },
  {
    enunciado: "¿Qué es el 'Esmalte' en la música de la escuela rusa?",
    correcta: "La brillantez y riqueza de la paleta orquestal.",
    incorrectas: [
      "Un tipo de pintura para proteger los instrumentos.",
      "El nombre técnico del silencio de fusa."
    ]
  },
  {
    enunciado: "La obra 'Finlandia' de Sibelius fue importante porque:",
    correcta: "Se convirtió en un himno de resistencia contra la opresión rusa.",
    incorrectas: [
      "Fue la primera canción grabada en un disco de vinilo.",
      "Trataba sobre la fabricación de muebles de madera."
    ]
  },
  {
    enunciado: "¿Qué compositor checo es autor de la ópera nacional 'La novia vendida'?",
    correcta: "Bedřich Smetana.",
    incorrectas: [
      "Antonín Dvořák.",
      "Leoš Janáček."
    ]
  },
  {
    enunciado: "El expresionismo tiene una fuerte conexión con qué movimiento en las artes visuales:",
    correcta: "El grupo 'Der Blaue Reiter' (El jinete azul).",
    incorrectas: [
      "El Renacimiento florentino.",
      "El arte pop de Andy Warhol."
    ]
  },
  {
    enunciado: "¿Qué compositor romántico tardío influyó en el expresionismo por sus densas armonías y grandes orquestas?",
    correcta: "Gustav Mahler.",
    incorrectas: [
      "W.A. Mozart.",
      "Joseph Haydn."
    ]
  },
  {
    enunciado: "En el nacionalismo estadounidense, Aaron Copland es famoso por:",
    correcta: "Su estilo 'claro' que evoca los paisajes del oeste americano (ej. El Salón México).",
    incorrectas: [
      "Sus sinfonías extremadamente oscuras y ruidosas.",
      "Escribir música solo para ser tocada en barcos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Grito' expresionista en música?",
    correcta: "El uso de intervalos disonantes y registros extremos para reflejar el dolor.",
    incorrectas: [
      "Un grito real que el director debe dar cada cinco minutos.",
      "Un instrumento que suena como una sirena de barco."
    ]
  },
  {
    enunciado: "¿Qué compositor inglés es autor de 'Enigma Variations'?",
    correcta: "Edward Elgar.",
    incorrectas: [
      "Gustav Holst.",
      "Benjamin Britten."
    ]
  },
  {
    enunciado: "Béla Bartók es considerado uno de los padres de:",
    correcta: "La Etnomusicología.",
    incorrectas: [
      "La Ópera barroca.",
      "La fabricación de violines."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Nacionalismo' de Manuel de Falla en España?",
    correcta: "La depuración del folclore, pasando de lo pintoresco a lo esencial y profundo.",
    incorrectas: [
      "El uso constante de castañuelas en todas sus sinfonías.",
      "La imitación de la música de los vikingos."
    ]
  },
  {
    enunciado: "La obra 'Erwartung' (La espera) de Schönberg es un ejemplo de:",
    correcta: "Monodrama expresionista para soprano y orquesta.",
    incorrectas: [
      "Música de baile para discotecas de los años 20.",
      "Concierto para violín y arpa."
    ]
  },
  {
    enunciado: "Zoltán Kodály es conocido, además de por su música, por:",
    correcta: "Su importante método pedagógico de educación musical.",
    incorrectas: [
      "Ser un famoso bailarín de claqué.",
      "Inventar un nuevo tipo de trombón."
    ]
  },
  {
    enunciado: "En el nacionalismo bohemio, Dvořák destacó por sus:",
    correcta: "Sinfonías y danzas eslavas que unían forma clásica y espíritu popular.",
    incorrectas: [
      "Obras para piano de un solo segundo de duración.",
      "Cantos gregorianos en lengua checa."
    ]
  },
  {
    enunciado: "¿Qué instrumento adquiere gran importancia en la orquestación de Bartók por su carácter percusivo?",
    correcta: "El Piano.",
    incorrectas: [
      "La Flauta dulce.",
      "El Violín de seda."
    ]
  },
  {
    enunciado: "El expresionismo musical culminó con la invención de:",
    correcta: "El Dodecafonismo.",
    incorrectas: [
      "La Tonalidad mayor.",
      "La Radiofonia."
    ]
  },
  {
    enunciado: "¿Qué compositor polaco destacó en el nacionalismo de su país a finales del XIX?",
    correcta: "Stanisław Moniuszko.",
    incorrectas: [
      "Frédéric Chopin (mediados del XIX).",
      "Krzysztof Penderecki (siglo XX)."
    ]
  },
  {
    enunciado: "¿Qué es el 'Emancipación de la disonancia'?",
    correcta: "Concepto de Schönberg donde la disonancia no necesita resolver en una consonancia.",
    incorrectas: [
      "Prohibir el uso de notas desafinadas.",
      "Dejar de usar instrumentos de cuerda."
    ]
  },
  {
    enunciado: "El nacionalismo mexicano tuvo una figura fundamental en:",
    correcta: "Carlos Chávez.",
    incorrectas: [
      "Astor Piazzolla.",
      "Joaquín Rodrigo."
    ]
  },
  {
    enunciado: "¿Qué compositor expresionista ruso escribió 'Visiones fugitivas' para piano?",
    correcta: "Serguéi Prokófiev (en su etapa temprana).",
    incorrectas: [
      "Piotr Chaikovski.",
      "Dmitri Shostakóvich."
    ]
  },
  {
    enunciado: "El estudio de estos estilos permite comprender:",
    correcta: "La fragmentación del lenguaje musical europeo y la búsqueda de nuevas raíces.",
    incorrectas: [
      "Cómo se hacían las partituras con papel reciclado.",
      "La historia de la moda en las orquestas."
    ]
  }
];