// 49-siglo-xix-espana.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué género lírico español renació con fuerza a mediados del siglo XIX como alternativa a la hegemonía de la ópera italiana?",
    correcta: "La Zarzuela.",
    incorrectas: [
      "El Tono Humano.",
      "El Singspiel."
    ]
  },
  {
    enunciado: "¿Qué compositor es considerado el 'padre' de la zarzuela moderna y un pionero del nacionalismo musical español?",
    correcta: "Francisco Asenjo Barbieri.",
    incorrectas: [
      "Isaac Albéniz.",
      "Tomás Luis de Victoria."
    ]
  },
  {
    enunciado: "La zarzuela que se desarrolla en tres actos, con temas históricos o legendarios y mayor complejidad musical, se llama:",
    correcta: "Zarzuela Grande.",
    incorrectas: [
      "Género Chico.",
      "Ópera Bufa."
    ]
  },
  {
    enunciado: "¿Cuál de estas obras es una de las zarzuelas grandes más famosas de Barbieri?",
    correcta: "Jugar con fuego.",
    incorrectas: [
      "La Gran Vía.",
      "La verbena de la Paloma."
    ]
  },
  {
    enunciado: "¿Qué es el 'Género Chico'?",
    correcta: "Zarzuelas en un solo acto, de temática popular y costumbrista, destinadas al teatro por horas.",
    incorrectas: [
      "Música escrita exclusivamente para niños pequeños.",
      "Un tipo de danza con pasos muy cortos."
    ]
  },
  {
    enunciado: "¿Qué obra de Tomás Bretón es considerada la obra maestra del Género Chico?",
    correcta: "La verbena de la Paloma.",
    incorrectas: [
      "Doña Francisquita.",
      "El barberillo de Lavapiés."
    ]
  },
  {
    enunciado: "En 'El barberillo de Lavapiés' de Barbieri, se utilizan ritmos populares españoles como:",
    correcta: "El bolero y la seguidilla.",
    incorrectas: [
      "El vals vienés y la polka.",
      "El minueto francés."
    ]
  },
  {
    enunciado: "¿Qué compositor y musicólogo fue el gran ideólogo del nacionalismo musical español con su manifiesto 'Por nuestra música'?",
    correcta: "Felipe Pedrell.",
    incorrectas: [
      "Manuel de Falla.",
      "Joaquín Turina."
    ]
  },
  {
    enunciado: "Felipe Pedrell defendía que la base de la música nacional debía ser:",
    correcta: "El folclore popular y la gran tradición polifónica del Siglo de Oro.",
    incorrectas: [
      "La imitación exacta de la ópera de Wagner.",
      "La música electrónica de vanguardia."
    ]
  },
  {
    enunciado: "¿Qué virtuoso del violín español alcanzó fama mundial y compuso las 'Aires bohemios'?",
    correcta: "Pablo Sarasate.",
    incorrectas: [
      "Pau Casals.",
      "Francisco Tárrega."
    ]
  },
  {
    enunciado: "¿Qué instrumento de cuerda pulsada experimentó una revolución técnica y constructiva gracias a Antonio de Torres?",
    correcta: "La Guitarra.",
    incorrectas: [
      "El Laúd.",
      "El Arpa."
    ]
  },
  {
    enunciado: "¿Quién es el máximo representante de la guitarra española en el XIX, autor de 'Recuerdos de la Alhambra'?",
    correcta: "Francisco Tárrega.",
    incorrectas: [
      "Andrés Segovia.",
      "Gaspar Sanz."
    ]
  },
  {
    enunciado: "¿Qué pianista y compositor malagueño fue un prodigio del piano romántico y autor de 'Danzas españolas'?",
    correcta: "Isaac Albéniz (en su etapa temprana).",
    incorrectas: [
      "Enrique Granados.",
      "Joaquín Rodrigo."
    ]
  },
  {
    enunciado: "La obra 'Goyescas' de Enrique Granados está inspirada en:",
    correcta: "Las pinturas y el ambiente de los cartones de Francisco de Goya.",
    incorrectas: [
      "La arquitectura de la Mezquita de Córdoba.",
      "Los poemas de Gustavo Adolfo Bécquer."
    ]
  },
  {
    enunciado: "¿Qué compositor es el autor de la famosa zarzuela 'La revoltosa'?",
    correcta: "Ruperto Chapí.",
    incorrectas: [
      "Federico Chueca.",
      "Emilio Arrieta."
    ]
  },
  {
    enunciado: "Emilio Arrieta destacó por intentar nacionalizar la ópera con obras como:",
    correcta: "Marina (que empezó siendo zarzuela).",
    incorrectas: [
      "Aida.",
      "Carmen."
    ]
  },
  {
    enunciado: "¿Qué es la 'Sociedad de Conciertos de Madrid', fundada en 1866?",
    correcta: "La primera orquesta estable de España dedicada a difundir el repertorio sinfónico europeo.",
    incorrectas: [
      "Un grupo secreto de guitarristas flamencos.",
      "La escuela oficial de danza de la corte."
    ]
  },
  {
    enunciado: "En el siglo XIX español, el piano era el centro de la vida musical de:",
    correcta: "Los salones de la burguesía y la aristocracia.",
    incorrectas: [
      "Las iglesias rurales únicamente.",
      "Los barcos de pesca."
    ]
  },
  {
    enunciado: "¿Qué compositor madrileño es conocido como el 'músico de los barrios bajos' por sus sainetes líricos como 'Agua, azucarillos y aguardiente'?",
    correcta: "Federico Chueca.",
    incorrectas: [
      "Tomás Bretón.",
      "Gerónimo Giménez."
    ]
  },
  {
    enunciado: "¿Qué técnica de guitarra popularizó Tárrega para obtener un sonido más dulce y moderno?",
    correcta: "El uso de la yema de los dedos y el apoyo en la pulsación.",
    incorrectas: [
      "Tocar con una púa de metal.",
      "Golpear la caja de madera constantemente."
    ]
  },
  {
    enunciado: "Pau Casals revolucionó en el siglo XIX (y principios del XX) la técnica de:",
    correcta: "El Violonchelo.",
    incorrectas: [
      "La Trompeta.",
      "El Órgano."
    ]
  },
  {
    enunciado: "¿Qué es el 'Teatro de la Zarzuela', inaugurado en 1856?",
    correcta: "Un edificio construido específicamente para la representación del género lírico nacional.",
    incorrectas: [
      "La casa donde nació Barbieri.",
      "Un museo de instrumentos antiguos."
    ]
  },
  {
    enunciado: "La música de cámara en la España del XIX tuvo como figura destacada a:",
    correcta: "Jesús de Monasterio.",
    incorrectas: [
      "Manuel de Falla.",
      "Cristóbal Halffter."
    ]
  },
  {
    enunciado: "¿Qué compositor navarro compuso la ópera 'Amaya' y destacó en la música coral?",
    correcta: "Jesús Guridi (aunque su plenitud es del XX, nace en el XIX).",
    incorrectas: [
      "Pablo Sarasate.",
      "Hilarión Eslava."
    ]
  },
  {
    enunciado: "Hilarión Eslava fue una figura clave en la música religiosa y autor del método de:",
    correcta: "Solfeo, utilizado durante décadas en los conservatorios españoles.",
    incorrectas: [
      "Danza clásica para hombres.",
      "Fabricación de campanas de bronce."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Casticismo' en la zarzuela?",
    correcta: "La exaltación de lo madrileño, el lenguaje popular y los tipos sociales de la ciudad.",
    incorrectas: [
      "El uso exclusivo del latín y temas de la Biblia.",
      "La imitación del estilo de los cosacos rusos."
    ]
  },
  {
    enunciado: "¿Qué es una 'Romanza' en la zarzuela?",
    correcta: "Un solo vocal de carácter sentimental equivalente al aria de la ópera.",
    incorrectas: [
      "Un baile de grupo con castañuelas.",
      "El texto hablado entre dos canciones."
    ]
  },
  {
    enunciado: "La obra 'Iberia' de Isaac Albéniz es una suite para piano que destaca por:",
    correcta: "Su enorme dificultad técnica y la recreación impresionista de paisajes andaluces.",
    incorrectas: [
      "Ser una serie de ejercicios para principiantes.",
      "Estar escrita para ser tocada con una sola mano."
    ]
  },
  {
    enunciado: "¿Qué es el 'Teatro por horas'?",
    correcta: "Un sistema de exhibición donde se representaban varias obras cortas (género chico) seguidas a precios populares.",
    incorrectas: [
      "Un teatro donde el público solo podía estar una hora y luego debía salir.",
      "Música que se componía en una sola hora de reloj."
    ]
  },
  {
    enunciado: "¿Qué compositor es autor del famoso intermedio de 'La boda de Luis Alonso'?",
    correcta: "Gerónimo Giménez.",
    incorrectas: [
      "Ruperto Chapí.",
      "Federico Chueca."
    ]
  },
  {
    enunciado: "¿Qué papel tuvo el 'Ateneo de Madrid' en la música del XIX?",
    correcta: "Fue un centro de debate estético y de difusión de la nueva música de cámara.",
    incorrectas: [
      "Era el lugar donde se guardaban los timbales de la orquesta nacional.",
      "Una tienda de partituras baratas."
    ]
  },
  {
    enunciado: "La influencia de Richard Wagner en España a finales del XIX se canalizó a través de:",
    correcta: "La Asociación Wagneriana y la labor de Felipe Pedrell.",
    incorrectas: [
      "La prohibición de sus obras en todos los teatros.",
      "Cantar sus óperas con guitarras flamencas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Pasodoble' en la zarzuela?",
    correcta: "Una marcha de ritmo binario muy utilizada para desfiles y momentos brillantes.",
    incorrectas: [
      "Caminar dando dos pasos hacia atrás por cada uno hacia delante.",
      "Un instrumento de viento madera muy largo."
    ]
  },
  {
    enunciado: "¿Qué compositor escribió 'La tempestad' y 'El rey que rabió'?",
    correcta: "Ruperto Chapí.",
    incorrectas: [
      "Tomás Bretón.",
      "Manuel Canales."
    ]
  },
  {
    enunciado: "El 'Concierto para violín' de Conrado del Campo muestra la transición hacia:",
    correcta: "Un romanticismo tardío con influencias de Strauss y Wagner.",
    incorrectas: [
      "La música disco de los años 70.",
      "El canto gregoriano del siglo XII."
    ]
  },
  {
    enunciado: "En la música coral española del XIX, destacaron los 'Orfeones', que eran:",
    correcta: "Sociedades corales de aficionados que promovían el canto colectivo.",
    incorrectas: [
      "Instrumentos gigantes de viento metal.",
      "Lugares donde se fabricaban órganos."
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo la 'Exposición Universal de París de 1889' para la música española?",
    correcta: "Fue el escaparate donde el piano español (Albéniz) fascinó a los músicos franceses.",
    incorrectas: [
      "España ganó el premio a la mejor banda de rock.",
      "Se prohibió la música española por ser demasiado ruidosa."
    ]
  },
  {
    enunciado: "La zarzuela 'Doña Francisquita' es una obra maestra de Amadeo Vives basada en un texto de:",
    correcta: "Lope de Vega (La discreta enamorada).",
    incorrectas: [
      "Miguel de Cervantes.",
      "Federico García Lorca."
    ]
  },
  {
    enunciado: "¿Qué es el 'Zortziko'?",
    correcta: "Un ritmo vasco en 5/8 que los compositores del XIX incorporaron a la música nacionalista.",
    incorrectas: [
      "Una flauta de hueso típica de Galicia.",
      "El nombre del director del teatro de la Zarzuela."
    ]
  },
  {
    enunciado: "El fin del siglo XIX musical en España sienta las bases de:",
    correcta: "La Generación del 98 y la eclosión de Manuel de Falla.",
    incorrectas: [
      "El regreso a la monarquía absoluta de los Reyes Católicos.",
      "La desaparición de la guitarra como instrumento nacional."
    ]
  }
];