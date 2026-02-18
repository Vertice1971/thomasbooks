// 10-instrumentos-folcloricos-y-etnicos.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la principal diferencia entre un instrumento 'folclórico' y uno 'étnico' en el ámbito de la etnomusicología?",
    correcta: "El folclórico pertenece a la tradición popular propia de una región occidental; el étnico se asocia a culturas no occidentales o grupos indígenas.",
    incorrectas: [
      "Los instrumentos folclóricos siempre son eléctricos y los étnicos son exclusivamente de piedra.",
      "No existe diferencia técnica, son términos sinónimos que solo dependen del precio del instrumento."
    ]
  },
  {
    enunciado: "El 'Sitar' es uno de los instrumentos más emblemáticos de la música clásica de la India. ¿A qué categoría pertenece?",
    correcta: "Cordófono de cuerda pulsada con trastes móviles y cuerdas simpáticas.",
    incorrectas: [
      "Aerófono de lengüeta doble similar al oboe.",
      "Idiófono de metal que se golpea con martillos de madera."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión africano, con forma de copa y cuerpo de madera, se toca directamente con las manos?",
    correcta: "Djembé.",
    incorrectas: [
      "Cajón flamenco.",
      "Timbal sinfónico."
    ]
  },
  {
    enunciado: "La 'Gaita' es un instrumento folclórico europeo que se caracteriza por:",
    correcta: "Ser un aerófono de lengüeta que utiliza un depósito de aire (fol o odre) para permitir un sonido continuo.",
    incorrectas: [
      "Ser un cordófono frotado por una rueda movida por una manivela.",
      "Un membranófono de frotación que solo se utiliza en navidad."
    ]
  },
  {
    enunciado: "El 'Koto' es un instrumento tradicional de Japón que consiste en:",
    correcta: "Una cítara de trece cuerdas con puentes móviles que se coloca horizontalmente sobre el suelo.",
    incorrectas: [
      "Una flauta de bambú soplada por el extremo superior.",
      "Un tambor gigante que se toca con baquetas de gran grosor."
    ]
  },
  {
    enunciado: "¿Qué es un 'Mbira' (o Kalimba), instrumento común en la música del África subsahariana?",
    correcta: "Un lamelófono formado por lengüetas metálicas fijadas a una caja de resonancia que se pulsan con los pulgares.",
    incorrectas: [
      "Una trompeta hecha con el cuerno de un animal salvaje.",
      "Un arco musical que utiliza la boca del intérprete como resonador."
    ]
  },
  {
    enunciado: "El 'Didgeridoo' es un instrumento de los aborígenes australianos clasificado como:",
    correcta: "Aerófono de columna de aire sin agujeros, que utiliza la técnica de la respiración circular.",
    incorrectas: [
      "Idiófono de choque compuesto por dos maderas cóncavas.",
      "Cordófono de una sola cuerda frotada por un hueso."
    ]
  },
  {
    enunciado: "En el folclore español, la 'Dulzaina' es un instrumento de viento que pertenece a la familia de:",
    correcta: "Lengüeta doble (oboe tradicional).",
    incorrectas: [
      "Bisel (flauta de pico).",
      "Embocadura de metal (trompeta)."
    ]
  },
  {
    enunciado: "¿Qué instrumento de cuerda frotada, con solo dos cuerdas y una caja de resonancia pequeña, es típico de la música tradicional china?",
    correcta: "Erhu.",
    incorrectas: [
      "Shamisen.",
      "Vihuela."
    ]
  },
  {
    enunciado: "El 'Balafón' es un instrumento étnico antecesor de:",
    correcta: "El xilófono moderno, utilizando calabazas como resonadores debajo de las láminas de madera.",
    incorrectas: [
      "El piano de cola orquestal.",
      "La flauta travesera de llaves."
    ]
  },
  {
    enunciado: "¿Qué es un 'Arpa de boca' (guimbarda)?",
    correcta: "Un idiófono de punteo donde la cavidad bucal del intérprete actúa como resonador variable.",
    incorrectas: [
      "Un instrumento de cuerda que se toca con los dientes.",
      "Una armónica que funciona sin necesidad de aire."
    ]
  },
  {
    enunciado: "El 'Steel Drum' (tambor de acero), típico de Trinidad y Tobago, se caracteriza por:",
    correcta: "Ser un idiófono de metal afinado construido a partir de bidones de petróleo reciclados.",
    incorrectas: [
      "Ser un membranófono que utiliza parches de acero templado.",
      "Un aerófono que produce sonido mediante el soplido en recipientes metálicos."
    ]
  },
  {
    enunciado: "La 'Quena' es un instrumento étnico de la región andina que consiste en:",
    correcta: "Una flauta vertical de caña o madera con una muesca en el extremo superior para el bisel.",
    incorrectas: [
      "Un tambor de doble parche que se toca con una sola mano.",
      "Una pequeña guitarra de diez cuerdas hecha con el caparazón de un armadillo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Charango'?",
    correcta: "Un cordófono de cuerda pulsada de la región andina, tradicionalmente construido con el caparazón de un armadillo.",
    incorrectas: [
      "Una danza folclórica de la zona de Galicia.",
      "Un tipo de percusión de madera que imita el sonido del galope de un caballo."
    ]
  },
  {
    enunciado: "El 'Dabuka' o Darbuka es un tambor de copa muy extendido en:",
    correcta: "La música árabe y del Oriente Próximo.",
    incorrectas: [
      "La música tradicional de los Andes chilenos.",
      "El folclore del norte de Escandinavia."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión, consistente en una serie de tubos de bambú de diferentes longitudes, es típico de las islas del Pacífico?",
    correcta: "Flauta de Pan o Siringa.",
    incorrectas: [
      "Angklung.",
      "Marimba de chonta."
    ]
  },
  {
    enunciado: "El 'Berimbau' es un instrumento fundamental en la Capoeira brasileña. ¿Cómo se clasifica?",
    correcta: "Cordófono (arco musical) con un resonador de calabaza.",
    incorrectas: [
      "Membranófono de fricción similar a la zambomba.",
      "Idiófono de choque entre dos piedras."
    ]
  },
  {
    enunciado: "En España, el 'Almirez' es un ejemplo de cómo un útil doméstico se convierte en instrumento:",
    correcta: "Idiófono de percusión de metal.",
    incorrectas: [
      "Membranófono de golpeo rítmico.",
      "Aerófono de lengüeta accidental."
    ]
  },
  {
    enunciado: "El 'Shakuhachi' es una flauta japonesa de bambú vinculada históricamente a:",
    correcta: "La meditación de los monjes budistas zen.",
    incorrectas: [
      "Las batallas navales de los samuráis.",
      "Las fiestas populares de los campesinos de arroz."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión consiste en un tronco de madera ahuecado con dos ranuras en forma de 'H'?",
    correcta: "Teponaztli (de origen mesoamericano).",
    incorrectas: [
      "Güiro.",
      "Cajón peruano."
    ]
  },
  {
    enunciado: "La 'Vihuela' de mano es un instrumento que en el folclore de México evolucionó hacia:",
    correcta: "La vihuela mexicana, parte fundamental del conjunto de Mariachi.",
    incorrectas: [
      "El violín eléctrico de cinco cuerdas.",
      "El contrabajo sinfónico de cuatro cuerdas."
    ]
  },
  {
    enunciado: "El 'Taiko' es un término que designa a:",
    correcta: "Los grandes tambores japoneses que se tocan con baquetas llamadas bachi.",
    incorrectas: [
      "Un tipo de flauta dulce muy pequeña y aguda.",
      "El canto polifónico de los monjes del Tíbet."
    ]
  },
  {
    enunciado: "¿Qué es una 'Sanfona' en el contexto del folclore brasileño o portugués?",
    correcta: "Un acordeón o zanfona, dependiendo de la región específica.",
    incorrectas: [
      "Un silbato de barro con forma de pájaro.",
      "Un tambor que se toca debajo del agua."
    ]
  },
  {
    enunciado: "El 'Oud' (Laúd árabe) se diferencia del laúd renacentista occidental en que:",
    correcta: "No tiene trastes en el mástil y suele tener una caja de resonancia más profunda.",
    incorrectas: [
      "Se toca con un arco en lugar de con plectro o dedos.",
      "Está hecho íntegramente de metal y plástico."
    ]
  },
  {
    enunciado: "En el folclore de las Islas Canarias, el instrumento más representativo de cuerda pulsada es:",
    correcta: "El timple.",
    incorrectas: [
      "La bandurria.",
      "El guitarrón."
    ]
  },
  {
    enunciado: "El 'Gamelán' es una agrupación instrumental de Indonesia compuesta principalmente por:",
    correcta: "Metalófonos, gongs y xilófonos de bronce.",
    incorrectas: [
      "Arpas de madera y flautas de hueso.",
      "Sintetizadores y cajas de ritmos analógicas."
    ]
  },
  {
    enunciado: "¿Qué instrumento étnico consiste en una calabaza cubierta por una red de semillas o cuentas?",
    correcta: "Xequerê (Shekere).",
    incorrectas: [
      "Cabasa.",
      "Pandereta."
    ]
  },
  {
    enunciado: "La 'Txalaparta' es un instrumento tradicional del País Vasco clasificado como:",
    correcta: "Idiófono de percusión de madera, tocado por dos personas que alternan golpes.",
    incorrectas: [
      "Aerófono de lengüeta doble muy larga.",
      "Cordófono percutido por martillos de piedra."
    ]
  },
  {
    enunciado: "El 'Bodhrán' es el tambor de marco tradicional de:",
    correcta: "Irlanda.",
    incorrectas: [
      "Marruecos.",
      "Grecia."
    ]
  },
  {
    enunciado: "¿Qué es el 'Duduk'?",
    correcta: "Un aerófono de lengüeta doble muy ancha, tradicional de Armenia, con un sonido aterciopelado.",
    incorrectas: [
      "Un tambor metálico que se toca en las bodas turcas.",
      "Una cítara de seda utilizada en la corte imperial coreana."
    ]
  },
  {
    enunciado: "La 'Tabla' es el instrumento de percusión principal del norte de la India y consta de:",
    correcta: "Dos tambores de mano con parches que tienen una mancha negra de pasta de hierro en el centro.",
    incorrectas: [
      "Una serie de trece campanas afinadas que se tocan con un teclado.",
      "Una lámina de madera que se golpea contra una mesa."
    ]
  },
  {
    enunciado: "El 'Cajón Peruano' fue adoptado por el flamenco en el siglo XX gracias a:",
    correcta: "Paco de Lucía, tras descubrirlo en una gira por Perú.",
    incorrectas: [
      "La influencia de los colonizadores españoles en el siglo XVI.",
      "Un intercambio cultural con los percusionistas de Jazz de Nueva York."
    ]
  },
  {
    enunciado: "¿Qué instrumento de cuerda pulsada con forma de media luna es típico de la música tradicional de China?",
    correcta: "Yueqin.",
    incorrectas: [
      "Biwa.",
      "Saz."
    ]
  },
  {
    enunciado: "El 'Uilleann Pipes' es una gaita típica de Irlanda que se diferencia de la gallega en que:",
    correcta: "El aire se suministra mediante un fuelle movido por el codo, no soplado por la boca.",
    incorrectas: [
      "Tiene siete bolsas de aire y se toca entre tres personas.",
      "No produce sonido, es un instrumento puramente decorativo."
    ]
  },
  {
    enunciado: "La 'Kalimba' se conoce también como 'piano de pulgar' porque:",
    correcta: "Se sujeta con las manos y las lengüetas se pulsan con los pulgares de forma similar a un teclado pequeño.",
    incorrectas: [
      "Fue inventada por un pianista que perdió ocho dedos en la guerra.",
      "Produce exactamente el mismo sonido que un piano de cola Steinway."
    ]
  },
  {
    enunciado: "El 'Bouzouki' es un instrumento de cuerda pulsada fundamental en el folclore de:",
    correcta: "Grecia.",
    incorrectas: [
      "Rusia.",
      "Egipto."
    ]
  },
  {
    enunciado: "En la música tradicional de África del Oeste, la 'Kora' es un instrumento que combina características de:",
    correcta: "El arpa y el laúd, con 21 cuerdas y un cuerpo de calabaza.",
    incorrectas: [
      "El tambor y la flauta dulce.",
      "El violín y el trombón de varas."
    ]
  },
  {
    enunciado: "La 'Alboka' es un instrumento tradicional vasco que utiliza:",
    correcta: "Dos tubos de caña, dos lengüetas simples y un cuerno de novillo como resonador.",
    incorrectas: [
      "Una sola cuerda de tripa de oveja y una caja de pino.",
      "Un sistema de pistones hidráulicos para cambiar de nota."
    ]
  },
  {
    enunciado: "¿Qué es el 'Daf'?",
    correcta: "Un gran tambor de marco con anillas metálicas en el interior, típico del área persa y kurda.",
    incorrectas: [
      "Una flauta travesera de cristal utilizada en las bodas indias.",
      "Un tipo de campana que se coloca en el cuello de los camellos."
    ]
  },
  {
    enunciado: "El fin último del estudio de los instrumentos étnicos y folclóricos es:",
    correcta: "Valorar la diversidad cultural y comprender la ingeniosa adaptación de los recursos naturales al fenómeno musical.",
    incorrectas: [
      "Saber cuál es el instrumento más ruidoso del planeta para evitarlo.",
      "Aprender a fabricar réplicas baratas para venderlas como souvenirs."
    ]
  }
];