// 34-polifonia-renacentista.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la característica principal de la textura polifónica en el Renacimiento pleno?",
    correcta: "El contrapunto imitativo, donde todas las voces tienen la misma importancia jerárquica.",
    incorrectas: [
      "La melodía acompañada por acordes de guitarra eléctrica.",
      "La monodia absoluta sin ningún tipo de acompañamiento ni armonía."
    ]
  },
  {
    enunciado: "¿Qué compositor de la escuela franco-flamenca es considerado el nexo de unión entre el Medievo y el Renacimiento por su uso de la isorritmia y la misa de cantus firmus?",
    correcta: "Guillaume Dufay.",
    incorrectas: [
      "Claudio Monteverdi.",
      "Johann Sebastian Bach."
    ]
  },
  {
    enunciado: "La técnica de la 'Misa Parodia' consiste en:",
    correcta: "Construir una misa utilizando como material base toda la estructura polifónica de una obra preexistente.",
    incorrectas: [
      "Hacer una versión burlesca y cómica de los cantos litúrgicos.",
      "Cantar la misa imitando el sonido de instrumentos de viento."
    ]
  },
  {
    enunciado: "Josquin des Prez es famoso por desarrollar el 'Motete' renacentista, caracterizado por:",
    correcta: "Ser una composición religiosa sobre un texto latino único con gran atención a la expresión del texto.",
    incorrectas: [
      "Mezclar tres idiomas diferentes en una sola pieza de forma caótica.",
      "Ser una obra puramente instrumental para ser tocada en el órgano."
    ]
  },
  {
    enunciado: "¿Qué compositor es el máximo representante de la 'Escuela Romana' y autor de la 'Missa Papae Marcelli'?",
    correcta: "Giovanni Pierluigi da Palestrina.",
    incorrectas: [
      "Orlando di Lasso.",
      "Adrián Willaert."
    ]
  },
  {
    enunciado: "El estilo de Palestrina se caracteriza por:",
    correcta: "El equilibrio, la suavidad melódica y el tratamiento cuidadoso de las disonancias (estilo observato).",
    incorrectas: [
      "El uso constante de gritos y saltos interválicos de gran dificultad.",
      "La improvisación total de los cantantes sin seguir la partitura."
    ]
  },
  {
    enunciado: "¿Qué institución eclesiástica dictó normas para que la música fuera más clara y el texto más inteligible tras la Reforma Protestante?",
    correcta: "El Concilio de Trento.",
    incorrectas: [
      "El Concilio de Nicea.",
      "La Inquisición española."
    ]
  },
  {
    enunciado: "Orlando di Lasso es un autor cosmopolita que destacó por dominar todos los géneros, especialmente:",
    correcta: "El motete y la chanson, con un estilo más expresivo y dramático que el de Palestrina.",
    incorrectas: [
      "El rock progresivo y el uso de sintetizadores primitivos.",
      "La música monódica para voz sola y tamboril."
    ]
  },
  {
    enunciado: "¿Qué género profano italiano a 4 o 5 voces se convirtió en el laboratorio de experimentación expresiva del siglo XVI?",
    correcta: "El Madrigal.",
    incorrectas: [
      "El Coral luterano.",
      "El Villancico de Navidad."
    ]
  },
  {
    enunciado: "Los 'Madrigalismos' son recursos que buscan:",
    correcta: "Ilustrar musicalmente el significado de palabras específicas (ej. escalas descendentes para 'muerte' o 'infierno').",
    incorrectas: [
      "Ocultar el nombre del autor mediante acertijos rítmicos.",
      "Hacer que todos los músicos toquen sentados en el suelo."
    ]
  },
  {
    enunciado: "El 'Madrigalista' más avanzado, conocido por su audacia armónica y cromatismos extremos, fue:",
    correcta: "Carlo Gesualdo.",
    incorrectas: [
      "Luca Marenzio.",
      "Cipriano de Rore."
    ]
  },
  {
    enunciado: "¿Qué escuela polifónica introdujo el uso de coros divididos (cori spezzati) en San Marcos de Venecia?",
    correcta: "La Escuela Veneciana.",
    incorrectas: [
      "La Escuela de Notre Dame.",
      "La Escuela de Mannheim."
    ]
  },
  {
    enunciado: "La técnica de la 'Policoralidad' permitía:",
    correcta: "Crear efectos de eco y espacialidad situando coros en diferentes tribunas de la iglesia.",
    incorrectas: [
      "Que cada cantante eligiera su propia letra de forma aleatoria.",
      "Eliminar el uso de la voz humana y usar solo campanas."
    ]
  },
  {
    enunciado: "¿Qué compositor veneciano es fundamental por sus 'Symphoniae sacrae' y el uso de instrumentos con la voz?",
    correcta: "Giovanni Gabrieli.",
    incorrectas: [
      "Adrián Willaert.",
      "Claudio Monteverdi (en su etapa final)."
    ]
  },
  {
    enunciado: "En la polifonía renacentista, la voz del 'Tenor' solía:",
    correcta: "Sostener la melodía principal (cantus firmus) en valores largos.",
    incorrectas: [
      "Realizar las notas más agudas y rápidas de la obra.",
      "Permanecer en silencio durante toda la misa."
    ]
  },
  {
    enunciado: "La 'Misa Prolationum' de Johannes Ockeghem es famosa por ser:",
    correcta: "Un prodigio de técnica contrapuntística basada en cánones de proporciones rítmicas.",
    incorrectas: [
      "La primera misa escrita para ser cantada por una sola persona.",
      "Una obra que solo se podía cantar bajo el agua."
    ]
  },
  {
    enunciado: "¿Qué es una 'Chanson' polifónica en el siglo XVI?",
    correcta: "Una canción profana francesa, rítmica y descriptiva, a menudo homofónica.",
    incorrectas: [
      "Un tipo de danza alemana muy lenta.",
      "El nombre técnico de la túnica de los monjes."
    ]
  },
  {
    enunciado: "Clément Janequin es célebre por sus canciones descriptivas que imitan:",
    correcta: "Sonidos de la naturaleza (pájaros) o de la ciudad (el pregón, la batalla).",
    incorrectas: [
      "El ruido de las máquinas de vapor del futuro.",
      "El silencio absoluto de la noche."
    ]
  },
  {
    enunciado: "El 'Lied' polifónico es el género vocal característico de:",
    correcta: "Alemania.",
    incorrectas: [
      "España.",
      "Italia."
    ]
  },
  {
    enunciado: "En Inglaterra, la polifonía destacó por sus madrigales y la forma llamada:",
    correcta: "Ayre o Air (canción para voz y laúd).",
    incorrectas: [
      "Zarzuela inglesa.",
      "Fado británico."
    ]
  },
  {
    enunciado: "¿Qué compositor inglés es autor de 'Flow my tears' y un maestro del laúd?",
    correcta: "John Dowland.",
    incorrectas: [
      "Thomas Tallis.",
      "William Byrd."
    ]
  },
  {
    enunciado: "La técnica del 'Fauxbourdon' (Fabordón) consiste en:",
    correcta: "Añadir voces paralelas a una melodía para crear una textura de sexta.",
    incorrectas: [
      "Cantar con una voz falsa para no ser reconocido.",
      "Tocar el piano con las manos cruzadas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Agnus Dei' en una misa polifónica?",
    correcta: "La última parte del Ordinario de la misa.",
    incorrectas: [
      "El saludo inicial del director al coro.",
      "Una danza rápida que se hace antes del sermón."
    ]
  },
  {
    enunciado: "La 'Misa de Paráfrasis' se diferencia de la de Cantus Firmus en que:",
    correcta: "La melodía base se adorna, se fragmenta y se reparte entre todas las voces.",
    incorrectas: [
      "No utiliza ninguna melodía base y es totalmente inventada.",
      "Utiliza solo ruidos de animales como base rítmica."
    ]
  },
  {
    enunciado: "En el siglo XVI, la 'Sexta Voz' o voces adicionales servían para:",
    correcta: "Aumentar la densidad sonora y la riqueza armónica de la polifonía.",
    incorrectas: [
      "Indicar que el coro debía cantar más flojo.",
      "Que el director tuviera una voz de reserva por si alguien se cansaba."
    ]
  },
  {
    enunciado: "¿Qué es un 'Bicinium'?",
    correcta: "Una composición didáctica a solo dos voces, común en el ámbito protestante.",
    incorrectas: [
      "Una bicicleta pequeña que usaban los músicos.",
      "Un coro formado por cien personas al unísono."
    ]
  },
  {
    enunciado: "La 'Música Reservata' era un estilo destinado a:",
    correcta: "Círculos selectos de conocedores, con un uso intenso de la expresión del texto.",
    incorrectas: [
      "Toda la población para que la cantaran por la calle.",
      "Los animales de las granjas reales."
    ]
  },
  {
    enunciado: "El 'Contratenor' en la polifonía renacentista era la voz situada:",
    correcta: "Alrededor del tenor, que luego se dividió en Altus y Bassus.",
    incorrectas: [
      "Siempre por encima de la soprano.",
      "Fuera del escenario para crear eco."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Madrigal espiritual'?",
    correcta: "Utiliza la técnica profana del madrigal pero con textos religiosos en lengua vernácula.",
    incorrectas: [
      "Es una obra que solo pueden cantar los fantasmas.",
      "No utiliza notas, solo susurros."
    ]
  },
  {
    enunciado: "El 'Estilo Concertato' de finales del Renacimiento preparó el camino para:",
    correcta: "El Barroco, al enfrentar grupos de voces e instrumentos.",
    incorrectas: [
      "La vuelta al Canto Gregoriano monódico.",
      "La invención del gramófono."
    ]
  },
  {
    enunciado: "En la polifonía renacentista, la 'Disonancia' debía ser:",
    correcta: "Preparada y resuelta con cuidado para no romper la armonía del conjunto.",
    incorrectas: [
      "Usada libremente sin ningún tipo de regla.",
      "Prohibida totalmente, incluso si el compositor quería usarla."
    ]
  },
  {
    enunciado: "¿Qué es el 'Point of Imitation' (Punto de imitación)?",
    correcta: "El momento en que una voz entra imitando el motivo propuesto por la anterior.",
    incorrectas: [
      "Un lugar físico en el escenario donde se colocan los imitadores.",
      "El final de la obra donde todos dejan de tocar."
    ]
  },
  {
    enunciado: "La 'Missa sine nomine' es aquella que:",
    correcta: "No está basada en ninguna melodía preexistente conocida.",
    incorrectas: [
      "El autor olvidó ponerle título.",
      "No puede ser mencionada en voz alta en la iglesia."
    ]
  },
  {
    enunciado: "¿Qué es el 'Text-painting'?",
    correcta: "Sinónimo de madrigalismo: traducir visualmente el texto a sonidos.",
    incorrectas: [
      "Pintar las letras de la partitura con colores llamativos.",
      "Escribir el texto de la canción en las paredes del teatro."
    ]
  },
  {
    enunciado: "El 'Madrigal de Mantua' se asocia a menudo con el joven:",
    correcta: "Claudio Monteverdi.",
    incorrectas: [
      "Johann Sebastian Bach.",
      "Richard Wagner."
    ]
  },
  {
    enunciado: "¿Qué diferencia al 'Madrigal' del siglo XIV (Trecento) del renacentista?",
    correcta: "El renacentista es a través (durchkomponiert) y no estrófico como el medieval.",
    incorrectas: [
      "El renacentista solo se toca con tambores.",
      "El medieval era para mil voces y el renacentista para una sola."
    ]
  },
  {
    enunciado: "La 'Frottola' italiana era un antecesor del madrigal con carácter:",
    correcta: "Más sencillo, rítmico y homofónico.",
    incorrectas: [
      "Extremadamente complejo y serio.",
      "Solo para instrumentos de cuerda frotada."
    ]
  },
  {
    enunciado: "¿Qué es el 'Piacere' en la estética de la polifonía italiana?",
    correcta: "La búsqueda del placer sensorial a través de la armonía y el color vocal.",
    incorrectas: [
      "El nombre del director del coro.",
      "La obligación de sonreír mientras se canta."
    ]
  },
  {
    enunciado: "La polifonía renacentista alcanzó su fin con la llegada de:",
    correcta: "La monodia acompañada y el bajo continuo barroco.",
    incorrectas: [
      "La invención del piano de cola moderno.",
      "La destrucción de todas las catedrales de Europa."
    ]
  },
  {
    enunciado: "¿Qué voz suele llevar la melodía en un Villancico renacentista?",
    correcta: "La voz superior (cantus o tiple).",
    incorrectas: [
      "El bajo más profundo.",
      "Ninguna, es una obra puramente rítmica."
    ]
  }
];