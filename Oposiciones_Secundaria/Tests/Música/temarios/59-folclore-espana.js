// 59-folclore-espana.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define el 'Folclore musical'?",
    correcta: "Es el conjunto de tradiciones musicales, canciones y danzas transmitidas de forma oral por un pueblo.",
    incorrectas: [
      "La música compuesta por autores conocidos para ser vendida en tiendas.",
      "El estudio exclusivo de la música de vanguardia del siglo XXI."
    ]
  },
  {
    enunciado: "¿Qué rama de la musicología se encarga del estudio científico del folclore y las músicas tradicionales?",
    correcta: "Etnomusicología.",
    incorrectas: [
      "Organología clásica.",
      "Paleografía musical."
    ]
  },
  {
    enunciado: "El folclore musical español destaca por ser un mosaico cultural debido a la influencia de:",
    correcta: "Culturas mediterráneas, árabes, judías, cristianas y celtas.",
    incorrectas: [
      "La música electrónica de los años 80 exclusivamente.",
      "La influencia única de la cultura esquimal."
    ]
  },
  {
    enunciado: "¿Cuál es la danza y canción más extendida y representativa de la geografía española, con variantes regionales?",
    correcta: "La Jota.",
    incorrectas: [
      "El Vals.",
      "La Polka."
    ]
  },
  {
    enunciado: "En el folclore de Galicia y Asturias, el instrumento melódico por excelencia es:",
    correcta: "La Gaita.",
    incorrectas: [
      "La Guitarra eléctrica.",
      "El Saxofón tenor."
    ]
  },
  {
    enunciado: "¿Qué es una 'Muñeira'?",
    correcta: "Una danza típica de Galicia, de ritmo ternario y carácter alegre.",
    incorrectas: [
      "Una canción de cuna de las Islas Canarias.",
      "Un tipo de tambor gigante del País Vasco."
    ]
  },
  {
    enunciado: "¿Qué instrumentos forman habitualmente la agrupación tradicional vasca denominada 'Trikitixa'?",
    correcta: "Acordeón diatónico y pandereta.",
    incorrectas: [
      "Violín y piano.",
      "Gaita y tamboril."
    ]
  },
  {
    enunciado: "¿Qué es el 'Aurresku'?",
    correcta: "Una danza vasca de honor y reverencia, interpretada por un bailarín solo (dantzari).",
    incorrectas: [
      "Un guiso tradicional que se come durante las fiestas.",
      "Un instrumento de viento madera similar al oboe."
    ]
  },
  {
    enunciado: "En la zona de Castilla y León, es muy común el uso de la 'Dulzaina', que es un instrumento de:",
    correcta: "Viento madera con lengüeta doble.",
    incorrectas: [
      "Cuerda pulsada similar al laúd.",
      "Percusión hecho con huesos de animales."
    ]
  },
  {
    enunciado: "¿Qué es el 'Zortziko'?",
    correcta: "Un ritmo vasco característico en compás de 5/8.",
    incorrectas: [
      "Una canción popular de Extremadura en 4/4.",
      "Una danza de las Islas Baleares."
    ]
  },
  {
    enunciado: "El folclore de Aragón tiene su máxima expresión en:",
    correcta: "La Jota Aragonesa, con su característico estilo de canto y baile con castañuelas.",
    incorrectas: [
      "La Sardana circular.",
      "El Fandango flamenco."
    ]
  },
  {
    enunciado: "¿Qué danza circular es el símbolo de la identidad nacional de Cataluña?",
    correcta: "La Sardana.",
    incorrectas: [
      "La Jota de Tortosa.",
      "El Bolero mallorquín."
    ]
  },
  {
    enunciado: "La agrupación instrumental que acompaña a la Sardana se llama:",
    correcta: "Cobla.",
    incorrectas: [
      "Rondalla.",
      "Cuadrilla."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión, formado por dos piezas de madera cóncavas, es esencial en la danza folclórica española?",
    correcta: "Castañuelas (o palillos).",
    incorrectas: [
      "Caja clara.",
      "Xilófono."
    ]
  },
  {
    enunciado: "En las Islas Baleares es típico el 'Bolero' y el 'Copeo', acompañados a menudo por:",
    correcta: "Xeremies (gaitas), flabiol y tamboril.",
    incorrectas: [
      "Una orquesta sinfónica completa.",
      "Sintetizadores y cajas de ritmo."
    ]
  },
  {
    enunciado: "El folclore de las Islas Canarias destaca por un instrumento de cuerda pequeño y de sonido agudo llamado:",
    correcta: "Timple.",
    incorrectas: [
      "Ukelele.",
      "Bandurria."
    ]
  },
  {
    enunciado: "¿Qué son las 'Isas' canarias?",
    correcta: "Cantos y danzas alegres derivados de la jota peninsular.",
    incorrectas: [
      "Instrumentos de viento hechos con caracolas marinas.",
      "Poemas religiosos que se rezan al sol."
    ]
  },
  {
    enunciado: "¿Qué es una 'Rondalla'?",
    correcta: "Una agrupación folclórica de instrumentos de cuerda pulsada (guitarras, bandurrias, laúdes).",
    incorrectas: [
      "Una danza que se baila solo en invierno.",
      "Un tipo de pan que se reparte en las fiestas patronales."
    ]
  },
  {
    enunciado: "En la Comunidad Valenciana y Murcia son típicas las 'Alboradas' y las:",
    correcta: "Malagueñas y Jotas murcianas.",
    incorrectas: [
      "Sinfonías de cámara.",
      "Óperas de bolsillo."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión de origen pastoril, hecho con una caña y una piel tensa, es típico de la Navidad española?",
    correcta: "Zambomba.",
    incorrectas: [
      "Pandereta.",
      "Triángulo."
    ]
  },
  {
    enunciado: "¿Qué son los 'Mayos'?",
    correcta: "Cantos tradicionales de primavera dedicados a la Virgen o a las mozas, comunes en las dos Castillas.",
    incorrectas: [
      "Un tipo de zapato que usan los bailarines de jota.",
      "Instrumentos de metal que suenan muy fuerte."
    ]
  },
  {
    enunciado: "En Madrid, la música tradicional está ligada al ambiente castizo del siglo XIX, destacando:",
    correcta: "El Chotis.",
    incorrectas: [
      "La Sevillana.",
      "El Pericón."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión idiófono, propio de los pastores, consiste en una serie de huesos o maderas ensartados?",
    correcta: "Arrabel (o huesera).",
    incorrectas: [
      "Castañuela.",
      "Güiro."
    ]
  },
  {
    enunciado: "El folclore andaluz, antes de la profesionalización del flamenco, se basaba en:",
    correcta: "Fandangos locales, verdiales, seguidillas y canciones de labor.",
    incorrectas: [
      "Cantos gregorianos en latín.",
      "Música de cámara para cuarteto de cuerdas."
    ]
  },
  {
    enunciado: "¿Qué son los 'Verdiales'?",
    correcta: "Un tipo de fandango malagueño de origen arcaico, acompañado por violín, guitarras y platillos.",
    incorrectas: [
      "Frutas que se comen durante la vendimia.",
      "Unas botas especiales para bailar en el campo."
    ]
  },
  {
    enunciado: "En Extremadura es muy característica la figura del tamborilero, que toca simultáneamente:",
    correcta: "La flauta de tres agujeros y el tamboril.",
    incorrectas: [
      "Dos trompetas.",
      "El piano y el violín."
    ]
  },
  {
    enunciado: "¿Qué es el 'Romancero'?",
    correcta: "Un corpus de poemas épico-líricos transmitidos oralmente con una melodía sencilla.",
    incorrectas: [
      "Una tienda donde se venden romances escritos.",
      "El nombre del director de una coral folclórica."
    ]
  },
  {
    enunciado: "La 'Alboka' es un instrumento tradicional vasco hecho de:",
    correcta: "Dos cuernos de buey, madera y cañas de lengüeta simple.",
    incorrectas: [
      "Metal plateado.",
      "Cuerdas de seda."
    ]
  },
  {
    enunciado: "En el folclore castellano, el ritmo de 'Seguidilla' se caracteriza por ser:",
    correcta: "Ternario y de tempo rápido.",
    incorrectas: [
      "Binario y muy lento.",
      "Irregular y sin pulso fijo."
    ]
  },
  {
    enunciado: "¿Qué es un 'Alalá'?",
    correcta: "Una de las formas de canto más antiguas y primitivas de Galicia, a menudo a capella.",
    incorrectas: [
      "Un grito de guerra de los piratas cántabros.",
      "Un tipo de flauta dulce de plástico."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión cuadrado, típico de León y Asturias, se toca con las manos y tiene semillas en su interior?",
    correcta: "Panderu cuadráu (Pandereta cuadrada).",
    incorrectas: [
      "Cajón flamenco.",
      "Bongo."
    ]
  },
  {
    enunciado: "La 'Txalaparta' es un instrumento de percusión vasco que consiste en:",
    correcta: "Tablones de madera golpeados verticalmente por dos personas con maza.",
    incorrectas: [
      "Un arco que frota una sola cuerda.",
      "Una campana de bronce gigante."
    ]
  },
  {
    enunciado: "¿Qué son las 'Vaqueriñas'?",
    correcta: "Cantos de trabajo de los pastores y vaqueros en las zonas montañosas del norte.",
    incorrectas: [
      "Pequeñas vacas que bailan en las fiestas.",
      "Instrumentos hechos con cuernos de cabra."
    ]
  },
  {
    enunciado: "El folclore español ha servido de fuente de inspiración para compositores cultos como:",
    correcta: "Falla, Albéniz y Granados.",
    incorrectas: [
      "Mozart y Haydn.",
      "Wagner y Verdi."
    ]
  },
  {
    enunciado: "¿Qué es la 'Rueda' en el folclore de Castilla?",
    correcta: "Una danza comunitaria donde los bailarines giran en círculo alrededor de los músicos.",
    incorrectas: [
      "La pieza de madera que sujeta las cuerdas de la guitarra.",
      "Un tipo de queso que se da de premio en los concursos."
    ]
  },
  {
    enunciado: "La 'Txistu' es una flauta de tres agujeros típica de:",
    correcta: "El País Vasco.",
    incorrectas: [
      "Andalucía.",
      "Murcia."
    ]
  },
  {
    enunciado: "¿Qué son los 'Cantos de siega'?",
    correcta: "Canciones de ritmo libre que acompañan las tareas agrícolas en verano.",
    incorrectas: [
      "Canciones que se cantan en la iglesia durante el invierno.",
      "Música para que los niños se duerman rápido."
    ]
  },
  {
    enunciado: "La conservación del folclore hoy en día se realiza principalmente a través de:",
    correcta: "Grupos de Coros y Danzas y festivales folclóricos regionales.",
    incorrectas: [
      "La venta masiva de discos de música tecno.",
      "La prohibición de las fiestas populares."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión consiste en una botella de anís frotada con una llave?",
    correcta: "Botella de anís (idiófono de raspadura).",
    incorrectas: [
      "Güiro profesional.",
      "Triángulo metálico."
    ]
  },
  {
    enunciado: "El estudio del folclore permite comprender:",
    correcta: "La identidad cultural y las raíces históricas de los pueblos de España.",
    incorrectas: [
      "Cómo se fabrican los sintetizadores modernos.",
      "La vida privada de los reyes actuales."
    ]
  }
];