// 33-renacimiento-teoria.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué cambio de pensamiento fundamental marcó la estética musical del Renacimiento?",
    correcta: "El paso del Teocentrismo medieval al Humanismo, situando al hombre y su expresión en el centro.",
    incorrectas: [
      "El rechazo total a cualquier forma de música vocal en la iglesia.",
      "La invención del sonido digital para sustituir a los coros."
    ]
  },
  {
    enunciado: "En la teoría musical renacentista, la 'Homofonía' se utilizaba para:",
    correcta: "Priorizar la inteligibilidad del texto, haciendo que todas las voces pronuncien las sílabas al mismo tiempo.",
    incorrectas: [
      "Demostrar que los músicos no sabían cantar melodías independientes.",
      "Ocultar la falta de instrumentos en las pequeñas capillas."
    ]
  },
  {
    enunciado: "¿Qué intervalo, prohibido o evitado en el Medievo, empezó a ser aceptado como consonancia imperfecta en el Renacimiento?",
    correcta: "La tercera y la sexta.",
    incorrectas: [
      "La cuarta aumentada o tritono.",
      "La octava justa."
    ]
  },
  {
    enunciado: "El concepto de 'Varietas' en el Renacimiento se refiere a:",
    correcta: "La búsqueda de diversidad en ritmos, melodías y texturas para evitar la monotonía.",
    incorrectas: [
      "La obligación de cambiar de instrumento cada cinco compases.",
      "Mezclar músicos de diferentes países en una misma orquesta de forma aleatoria."
    ]
  },
  {
    enunciado: "¿Qué avance tecnológico del siglo XV revolucionó la difusión de la música y la unificación de estilos?",
    correcta: "La invención de la imprenta musical (Ottaviano Petrucci).",
    incorrectas: [
      "La creación del metrónomo de cuerda.",
      "La grabación en cilindros de cera."
    ]
  },
  {
    enunciado: "En la organología renacentista, un 'Consort' es:",
    correcta: "Un conjunto de instrumentos de la misma familia pero de diferentes tamaños y registros.",
    incorrectas: [
      "Un duelo entre dos organistas de diferentes catedrales.",
      "Un instrumento de viento madera con forma de dragón."
    ]
  },
  {
    enunciado: "¿Qué es el 'Temperamento' en el contexto del Renacimiento?",
    correcta: "Los diversos sistemas de afinación que buscaban resolver las impurezas de los intervalos naturales.",
    incorrectas: [
      "El estado de ánimo del compositor antes de escribir una misa.",
      "La temperatura adecuada para que las cuerdas de tripa no se rompan."
    ]
  },
  {
    enunciado: "El 'Bajo de Danza' era un recurso teórico que consistía en:",
    correcta: "Una melodía de notas largas sobre la que se improvisaban pasos y melodías ornamentadas.",
    incorrectas: [
      "Un bailarín que solo realizaba movimientos en el registro grave.",
      "Un instrumento de percusión gigante que se tocaba con los pies."
    ]
  },
  {
    enunciado: "¿Qué autor escribió el importante tratado 'Le Istitutioni Harmoniche' (1558)?",
    correcta: "Gioseffo Zarlino.",
    incorrectas: [
      "Johannes Tinctoris.",
      "Heinrich Glarean."
    ]
  },
  {
    enunciado: "El sistema de 'Dodecachordon' de Heinrich Glarean amplió los 8 modos gregorianos a:",
    correcta: "12 modos, incluyendo el Jónico (Mayor) y el Eolio (Menor).",
    incorrectas: [
      "24 modos para incluir los cuartos de tono.",
      "Solo 4 modos para simplificar el canto."
    ]
  },
  {
    enunciado: "¿Qué instrumento de lengüeta doble y tubo tapado tenía forma de bastón?",
    correcta: "Cromorno (Crumhorn).",
    incorrectas: [
      "Sacabuche.",
      "Chirimía."
    ]
  },
  {
    enunciado: "La 'Vihuela de mano' se diferencia del laúd principalmente por:",
    correcta: "Tener el fondo plano y una silueta similar a la guitarra actual.",
    incorrectas: [
      "Tener cuerdas de metal en lugar de tripa.",
      "Tocarse con un arco de madera de ébano."
    ]
  },
  {
    enunciado: "¿Cómo se llama el antecesor del trombón que apareció en el Renacimiento?",
    correcta: "Sacabuche.",
    incorrectas: [
      "Serpentón.",
      "Tuba ductilis."
    ]
  },
  {
    enunciado: "El 'Clavicordio' se caracteriza por producir el sonido mediante:",
    correcta: "Pequeñas láminas de metal llamadas tangentes que golpean las cuerdas.",
    incorrectas: [
      "Plectros que pulsan las cuerdas como una guitarra.",
      "Martillos de madera cubiertos de fieltro grueso."
    ]
  },
  {
    enunciado: "¿Qué es el 'Virginal'?",
    correcta: "Un tipo de clave pequeño de forma rectangular o poligonal, muy popular en Inglaterra.",
    incorrectas: [
      "Un órgano de tubos que solo podía ser tocado por mujeres.",
      "Una flauta travesera fabricada en marfil."
    ]
  },
  {
    enunciado: "El tratado 'Musica getutscht' (1511) de Sebastian Virdung es fundamental para el estudio de:",
    correcta: "La organología y los instrumentos de la época.",
    incorrectas: [
      "La teología aplicada al canto gregoriano.",
      "Las leyes de los derechos de autor en Alemania."
    ]
  },
  {
    enunciado: "En la teoría de la composición renacentista, el 'Soggetto' es:",
    correcta: "El fragmento melódico breve que sirve de base para la imitación.",
    incorrectas: [
      "El cantante que interpreta la voz más aguda.",
      "La persona que paga al compositor por su obra."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe la técnica de 'pintar con sonidos' las palabras del texto?",
    correcta: "Madrigalismo o Retórica musical.",
    incorrectas: [
      "Atonalismo estructural.",
      "Isorritmia medieval."
    ]
  },
  {
    enunciado: "La 'Canzona' instrumental se originó a partir de:",
    correcta: "La adaptación instrumental de la chanson polifónica francesa.",
    incorrectas: [
      "Los cantos de guerra de las tribus germánicas.",
      "La improvisación de los organistas ciegos españoles."
    ]
  },
  {
    enunciado: "Un instrumento de viento madera muy importante por su sonido potente y lengüeta doble era:",
    correcta: "La Chirimía.",
    incorrectas: [
      "La flauta de pan.",
      "El silbato de caña."
    ]
  },
  {
    enunciado: "¿Qué es el 'Cornetto' o corneta renacentista?",
    correcta: "Un instrumento de madera con agujeros pero con embocadura de boquilla, similar a la trompeta.",
    incorrectas: [
      "Una trompa pequeña hecha con el cuerno de un buey.",
      "Un tipo de oboe muy corto y agudo."
    ]
  },
  {
    enunciado: "La 'Viola da Gamba' se diferencia de la familia del violín por:",
    correcta: "Tener trastes, más cuerdas y sujetarse entre las piernas.",
    incorrectas: [
      "Tener un cuerpo metálico para sonar más fuerte.",
      "No utilizar arco para producir el sonido."
    ]
  },
  {
    enunciado: "En el Renacimiento, el concepto de 'A cappella' se refería a:",
    correcta: "Música vocal escrita para ser cantada en la capilla, que podía o no llevar refuerzo instrumental.",
    incorrectas: [
      "Cantar obligatoriamente con la cabeza cubierta por una capucha.",
      "Cantar exclusivamente en el exterior de las iglesias."
    ]
  },
  {
    enunciado: "¿Qué es la 'Tablatura'?",
    correcta: "Un sistema de notación para instrumentos de cuerda o tecla que indica dónde poner los dedos.",
    incorrectas: [
      "Un libro donde se anotaban los gastos de la orquesta.",
      "La mesa donde se colocaban las partituras grandes."
    ]
  },
  {
    enunciado: "El 'Bajoncillo' es la versión pequeña de qué instrumento renacentista:",
    correcta: "El Bajón (antecesor del fagot).",
    incorrectas: [
      "El contrabajo.",
      "La flauta dulce."
    ]
  },
  {
    enunciado: "En la teoría de Zarlino, el 'Senario' es:",
    correcta: "La división de la cuerda en seis partes para justificar las consonancias de tercera.",
    incorrectas: [
      "Un conjunto de seis músicos tocando instrumentos de viento.",
      "El escenario donde se representaban las primeras óperas."
    ]
  },
  {
    enunciado: "¿Qué es un 'Tiento'?",
    correcta: "Una forma instrumental para teclado o cuerda pulsada de carácter exploratorio.",
    incorrectas: [
      "Un golpe rítmico que se daba en el suelo con un bastón.",
      "El nombre técnico de la cuerda más aguda del laúd."
    ]
  },
  {
    enunciado: "La 'Flauta dulce' o de pico se construía habitualmente en:",
    correcta: "Familias completas, desde la sopranino hasta la contrabajo.",
    incorrectas: [
      "Un solo tamaño estándar para todos los músicos.",
      "Metal brillante para que se viera bien desde lejos."
    ]
  },
  {
    enunciado: "¿Qué función tenía el 'Órgano de Regalía'?",
    correcta: "Era un órgano portativo de lengüeta con un sonido rudo y metálico.",
    incorrectas: [
      "Era el regalo que se le hacía al rey el día de su coronación.",
      "Servía para afinar las campanas de la torre."
    ]
  },
  {
    enunciado: "El 'Lamento' es un recurso expresivo que suele utilizar:",
    correcta: "Líneas melódicas descendentes por semitonos (tetracordio frigio).",
    incorrectas: [
      "Saltos de octava ascendentes muy rápidos.",
      "Solo instrumentos de percusión de madera."
    ]
  },
  {
    enunciado: "¿Qué es el 'Arpa de dos órdenes'?",
    correcta: "Un arpa con cuerdas cruzadas para poder tocar notas cromáticas.",
    incorrectas: [
      "Un arpa que se tocaba por dos personas a la vez.",
      "Un arpa que solo tenía dos cuerdas de tripa."
    ]
  },
  {
    enunciado: "La 'Pavana' es una danza renacentista de ritmo:",
    correcta: "Binario, lento y solemne.",
    incorrectas: [
      "Ternario, muy rápido y saltado.",
      "Irregular y sin pulso definido."
    ]
  },
  {
    enunciado: "En la organología del siglo XVI, el 'Rabel' se consideraba:",
    correcta: "Un instrumento popular de cuerda frotada, descendiente del rebab árabe.",
    incorrectas: [
      "Un tipo de trompeta militar de bronce.",
      "Una danza que se bailaba en las bodas campesinas."
    ]
  },
  {
    enunciado: "El tratado 'Declaración de instrumentos musicales' (1555) fue escrito por:",
    correcta: "Juan Bermudo.",
    incorrectas: [
      "Antonio de Cabezón.",
      "Tomás Luis de Victoria."
    ]
  },
  {
    enunciado: "¿Qué es la 'Glosada'?",
    correcta: "La ornamentación de una melodía mediante notas rápidas o variaciones.",
    incorrectas: [
      "La traducción de la letra de la canción al latín.",
      "Limpiar el instrumento con un paño de seda."
    ]
  },
  {
    enunciado: "Los instrumentos de cuerda del Renacimiento utilizaban principalmente cuerdas de:",
    correcta: "Tripa de animal.",
    incorrectas: [
      "Nylon sintético.",
      "Acero inoxidable."
    ]
  },
  {
    enunciado: "El 'Serpentón' es un instrumento de viento madera-metal con forma de 'S' que servía para:",
    correcta: "Reforzar la voz de los bajos en los coros de las iglesias.",
    incorrectas: [
      "Asustar a los enemigos durante las procesiones.",
      "Sustituir a la flauta en los pasajes agudos."
    ]
  },
  {
    enunciado: "La 'Eufonía' renacentista buscaba:",
    correcta: "La sonoridad plena y agradable basada en acordes de tríada.",
    incorrectas: [
      "El ruido máximo para impresionar al público.",
      "El silencio absoluto entre frase y frase."
    ]
  },
  {
    enunciado: "¿Qué es la 'Musica Ficta'?",
    correcta: "La práctica de añadir alteraciones no escritas para evitar intervalos disonantes.",
    incorrectas: [
      "Música que no existe y es inventada por el profesor.",
      "Partituras que se escriben con tinta invisible."
    ]
  },
  {
    enunciado: "En el Renacimiento, el concepto de 'Proporción' se aplicaba a:",
    correcta: "La relación matemática entre las duraciones rítmicas.",
    incorrectas: [
      "El tamaño del auditorio respecto al número de músicos.",
      "La cantidad de comida que se daba a los cantores."
    ]
  }
];