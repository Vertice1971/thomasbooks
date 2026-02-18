// 38-vocal-barroco.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué género vocal, nacido en Italia hacia 1600, combina música, teatro, danza y artes escénicas?",
    correcta: "La Ópera.",
    incorrectas: [
      "La Cantata de cámara.",
      "El Cuarteto de cuerda."
    ]
  },
  {
    enunciado: "En la ópera barroca, el 'Recitativo secco' se caracteriza por:",
    correcta: "Un canto declamado acompañado únicamente por el bajo continuo.",
    incorrectas: [
      "Un canto muy melódico acompañado por toda la orquesta.",
      "Un momento de silencio donde los actores solo hacen mímica."
    ]
  },
  {
    enunciado: "¿Qué parte de la ópera es el momento de introspección lírica y lucimiento técnico del solista?",
    correcta: "El Aria.",
    incorrectas: [
      "La Obertura.",
      "El Recitativo."
    ]
  },
  {
    enunciado: "El 'Aria da Capo' tiene una estructura:",
    correcta: "ABA, donde la sección A se repite con ornamentaciones improvisadas.",
    incorrectas: [
      "AABB, similar a una danza de la suite.",
      "Cíclica, sin ninguna repetición de temas."
    ]
  },
  {
    enunciado: "¿Qué compositor escribió 'L'Orfeo' (1607), consolidando la ópera como género?",
    correcta: "Claudio Monteverdi.",
    incorrectas: [
      "Francesco Cavalli.",
      "Alessandro Scarlatti."
    ]
  },
  {
    enunciado: "La 'Ópera Seria' del siglo XVIII se basaba principalmente en temas de:",
    correcta: "Mitología clásica e historia antigua con finales moralizantes.",
    incorrectas: [
      "Crítica social y enredos cómicos entre criados y señores.",
      "La vida cotidiana de los campesinos en el campo."
    ]
  },
  {
    enunciado: "¿Qué diferencia principal existe entre el Oratorio y la Ópera?",
    correcta: "El Oratorio no tiene representación escénica (ni vestuario ni decorados) y suele ser de tema religioso.",
    incorrectas: [
      "La Ópera no utiliza voces humanas y el Oratorio sí.",
      "El Oratorio solo se toca con instrumentos de percusión."
    ]
  },
  {
    enunciado: "¿Qué compositor es el autor del famoso oratorio 'El Mesías'?",
    correcta: "Georg Friedrich Händel.",
    incorrectas: [
      "Johann Sebastian Bach.",
      "Henry Purcell."
    ]
  },
  {
    enunciado: "La 'Cantata' barroca es una forma vocal que puede ser:",
    correcta: "Tanto religiosa como profana, dividida en recitativos y arias.",
    incorrectas: [
      "Exclusivamente para solista de bajo sin acompañamiento.",
      "Una danza rápida para ser bailada en el teatro."
    ]
  },
  {
    enunciado: "Johann Sebastian Bach compuso cerca de 200 cantatas destinadas principalmente a:",
    correcta: "El servicio litúrgico luterano de los domingos.",
    incorrectas: [
      "Las fiestas privadas del Rey de Francia.",
      "Acompañar las cenas en las tabernas de Leipzig."
    ]
  },
  {
    enunciado: "¿Qué es una 'Pasión'?",
    correcta: "Un oratorio de gran formato que narra la muerte de Jesucristo según un evangelista.",
    incorrectas: [
      "Una canción de amor apasionado entre dos nobles.",
      "Un tipo de danza muy lenta y triste."
    ]
  },
  {
    enunciado: "La 'Pasión según San Mateo' es una de las cumbres de la música vocal de:",
    correcta: "Johann Sebastian Bach.",
    incorrectas: [
      "Antonio Vivaldi.",
      "Claudio Monteverdi."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el cantante masculino que mantenía su registro agudo de niño?",
    correcta: "Castrato.",
    incorrectas: [
      "Barítono martin.",
      "Tenor lírico."
    ]
  },
  {
    enunciado: "Farinelli fue el más célebre representante de los:",
    correcta: "Castrati.",
    incorrectas: [
      "Compositores de ópera bufa.",
      "Directores de orquesta franceses."
    ]
  },
  {
    enunciado: "En la ópera barroca francesa (Tragédie en musique), el elemento distintivo frente a la italiana era:",
    correcta: "La gran importancia del ballet y del coro.",
    incorrectas: [
      "La prohibición de usar voces femeninas.",
      "Que no se utilizaban instrumentos de cuerda."
    ]
  },
  {
    enunciado: "¿Quién fue el creador y máximo representante de la ópera barroca francesa?",
    correcta: "Jean-Baptiste Lully.",
    incorrectas: [
      "Jean-Philippe Rameau.",
      "Marc-Antoine Charpentier."
    ]
  },
  {
    enunciado: "La ópera 'Dido y Eneas' es la obra maestra del barroco inglés, escrita por:",
    correcta: "Henry Purcell.",
    incorrectas: [
      "William Byrd.",
      "John Dowland."
    ]
  },
  {
    enunciado: "¿Qué es el 'Arioso'?",
    correcta: "Un estilo de canto a medio camino entre el recitativo y el aria.",
    incorrectas: [
      "Un solo de flauta que imita la voz humana.",
      "El final de un oratorio donde canta todo el público."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Coro' en el oratorio barroco?",
    correcta: "Representar al pueblo, comentar la acción o elevar oraciones colectivas.",
    incorrectas: [
      "Indicar el intermedio para que los solistas descansen.",
      "Afinar los instrumentos de la orquesta en voz alta."
    ]
  },
  {
    enunciado: "El 'Bel Canto' inicial del Barroco priorizaba:",
    correcta: "La belleza de la línea melódica y la agilidad vocal.",
    incorrectas: [
      "La potencia de voz por encima de la afinación.",
      "Que el cantante gritara lo más fuerte posible."
    ]
  },
  {
    enunciado: "¿Qué es la 'Ópera Buffa'?",
    correcta: "Un subgénero cómico con personajes cotidianos que nació como intermedio de la ópera seria.",
    incorrectas: [
      "Una ópera donde todos los músicos van disfrazados de animales.",
      "Un tipo de canto fúnebre muy pesado."
    ]
  },
  {
    enunciado: "'La serva padrona' de Pergolesi es el ejemplo más famoso de:",
    correcta: "Ópera Buffa (Intermezzo).",
    incorrectas: [
      "Oratorio religioso.",
      "Pasión alemana."
    ]
  },
  {
    enunciado: "En el oratorio, la figura del narrador que cuenta los hechos se llama:",
    correcta: "Testo o Evangelista.",
    incorrectas: [
      "Corifeo.",
      "Basso profondo."
    ]
  },
  {
    enunciado: "¿Qué técnica vocal consiste en cantar muchas notas sobre una sola sílaba para mostrar agilidad?",
    correcta: "Coloratura o melisma.",
    incorrectas: [
      "Staccato vocal.",
      "Sprechgesang."
    ]
  },
  {
    enunciado: "La 'Obertura' de una ópera barroca italiana tiene la estructura:",
    correcta: "Rápido - Lento - Rápido.",
    incorrectas: [
      "Lento - Rápido - Lento.",
      "Un solo movimiento de percusión lenta."
    ]
  },
  {
    enunciado: "¿Qué es una 'Anthem'?",
    correcta: "Un género vocal religioso anglicano equivalente al motete o la cantata.",
    incorrectas: [
      "Un tipo de zapato que usaban los cantantes en Inglaterra.",
      "La música que se tocaba al entrar el Rey en el teatro."
    ]
  },
  {
    enunciado: "Alessandro Scarlatti es una figura clave en el desarrollo de la ópera de la escuela:",
    correcta: "Napolitana.",
    incorrectas: [
      "Veneciana.",
      "Florentina."
    ]
  },
  {
    enunciado: "El 'Recitativo accompagnato' se diferencia del 'secco' en que:",
    correcta: "El cantante es acompañado por toda la sección de cuerda de la orquesta.",
    incorrectas: [
      "El cantante debe bailar mientras canta.",
      "No hay ningún tipo de instrumento acompañando."
    ]
  },
  {
    enunciado: "¿Qué instrumento solía liderar el acompañamiento del recitativo barroco?",
    correcta: "El Clave (acompañado por un violonchelo).",
    incorrectas: [
      "La Trompeta.",
      "Los Timbales."
    ]
  },
  {
    enunciado: "El libreto de una ópera es:",
    correcta: "El texto literario que sirve de base para la composición musical.",
    incorrectas: [
      "El pequeño libro donde los músicos anotan sus quejas.",
      "La partitura de bolsillo del director."
    ]
  },
  {
    enunciado: "¿Quién es el autor de las óperas 'Julio César' y 'Rinaldo'?",
    correcta: "Georg Friedrich Händel.",
    incorrectas: [
      "Antonio Vivaldi.",
      "Jean-Philippe Rameau."
    ]
  },
  {
    enunciado: "El 'Coral' luterano incluido en las cantatas de Bach es:",
    correcta: "Un himno sencillo que la congregación conocía y podía cantar.",
    incorrectas: [
      "Un solo de órgano extremadamente difícil.",
      "Una danza prohibida por las autoridades religiosas."
    ]
  },
  {
    enunciado: "La 'Misa en si menor' de J.S. Bach es una obra monumental que pertenece al género de:",
    correcta: "Música vocal religiosa (Misa ordinaria).",
    incorrectas: [
      "Ópera seria alemana.",
      "Cantata profana de taberna."
    ]
  },
  {
    enunciado: "¿Qué es el 'Lamento' en la ópera barroca?",
    correcta: "Un tipo de aria triste construida a menudo sobre un bajo cromático descendente.",
    incorrectas: [
      "El grito que daba el público cuando no le gustaba el cantante.",
      "Un silencio de más de cinco minutos."
    ]
  },
  {
    enunciado: "La ópera barroca veneciana se caracterizó por:",
    correcta: "La apertura de teatros públicos donde pagaba el pueblo y no solo la corte.",
    incorrectas: [
      "Ser cantada exclusivamente en los canales desde las góndolas.",
      "Prohibir el uso de decorados para ahorrar dinero."
    ]
  },
  {
    enunciado: "¿Qué compositor veneciano compuso más de 40 óperas, además de sus famosos conciertos?",
    correcta: "Antonio Vivaldi.",
    incorrectas: [
      "Arcangelo Corelli.",
      "Domenico Scarlatti."
    ]
  },
  {
    enunciado: "El 'Vaudeville' francés influyó en la música vocal barroca como:",
    correcta: "Canciones populares con textos satíricos que se insertaban en comedias.",
    incorrectas: [
      "Un método para aprender a tocar el laúd rápido.",
      "La música oficial de la marina francesa."
    ]
  },
  {
    enunciado: "¿Qué es un 'Madrigal guerrero y amoroso'?",
    correcta: "Una colección tardía de Monteverdi que introduce el 'Stile concitato' (agitado).",
    incorrectas: [
      "Una pelea cantada entre un hombre y una mujer.",
      "Una obra para 500 soldados cantando al unísono."
    ]
  },
  {
    enunciado: "En la música vocal barroca, la 'Retórica' servía para:",
    correcta: "Convencer y conmover al oyente a través de la expresión de las pasiones.",
    incorrectas: [
      "Hacer que las canciones duraran exactamente una hora.",
      "Ocultar que el cantante no tenía buena voz."
    ]
  },
  {
    enunciado: "El fin de la ópera barroca dio paso a la reforma de Gluck, que buscaba:",
    correcta: "Eliminar los excesos de virtuosismo y devolver el peso al drama.",
    incorrectas: [
      "Que las óperas fueran solo de danza sin cantantes.",
      "Sustituir a los humanos por marionetas de madera."
    ]
  }
];