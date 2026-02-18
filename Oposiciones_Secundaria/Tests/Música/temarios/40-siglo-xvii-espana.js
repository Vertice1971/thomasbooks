// 40-siglo-xvii-espana.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué instrumento de cinco órdenes se convirtió en el símbolo de la música española del siglo XVII, desplazando a la vihuela?",
    correcta: "La Guitarra Barroca.",
    incorrectas: [
      "El Laúd renacentista.",
      "El Violín moderno."
    ]
  },
  {
    enunciado: "¿Quién escribió el influyente método 'Instrucción de música sobre la guitarra española' (1674)?",
    correcta: "Gaspar Sanz.",
    incorrectas: [
      "Santiago de Murcia.",
      "Antonio de Cabezón."
    ]
  },
  {
    enunciado: "En la música vocal profana española del XVII, el género más importante a una o varias voces era:",
    correcta: "El Tono Humano.",
    incorrectas: [
      "El Madrigal italiano.",
      "El Lied alemán."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el género lírico que nace en este siglo, alternando partes cantadas y habladas?",
    correcta: "Zarzuela.",
    incorrectas: [
      "Ópera seria.",
      "Singspiel."
    ]
  },
  {
    enunciado: "¿Qué compositor es autor de 'El Laurel de Apolo', considerada una de las primeras zarzuelas?",
    correcta: "Juan Hidalgo.",
    incorrectas: [
      "Tomás Luis de Victoria.",
      "Sebastián Durón."
    ]
  },
  {
    enunciado: "El 'Tiento de medio registro' es una forma para órgano típica de España que consiste en:",
    correcta: "Usar un timbre diferente para la mano derecha y la izquierda gracias a la división del teclado.",
    incorrectas: [
      "Tocar solo con las teclas blancas del órgano.",
      "Cerrar la mitad de los tubos para que suene más flojo."
    ]
  },
  {
    enunciado: "¿Qué característica física externa distingue al órgano barroco español de los europeos?",
    correcta: "La trompetería horizontal o 'en batalla'.",
    incorrectas: [
      "Que no tiene pedales de madera.",
      "Que los tubos son de cristal soplado."
    ]
  },
  {
    enunciado: "¿Quién es el máximo representante de la música de órgano del siglo XVII en España, autor de la 'Facultad Orgánica'?",
    correcta: "Francisco Correa de Arauxo.",
    incorrectas: [
      "Antonio de Cabezón.",
      "Juan de Herrera."
    ]
  },
  {
    enunciado: "La técnica de la guitarra barroca que consiste en golpear las cuerdas con la mano abierta se llama:",
    correcta: "Rasgueado.",
    incorrectas: [
      "Punteado.",
      "Pizzicato."
    ]
  },
  {
    enunciado: "¿Qué danza española del siglo XVII se hizo famosa en toda Europa pese a sus orígenes populares y 'escandalosos'?",
    correcta: "La Chacona.",
    incorrectas: [
      "El Vals.",
      "La Polka."
    ]
  },
  {
    enunciado: "El 'Acompañamiento' en la España del XVII no utilizaba el clave habitualmente, sino:",
    correcta: "El Arpa de dos órdenes y la Guitarra.",
    incorrectas: [
      "El Piano de cola.",
      "El Saxofón barítono."
    ]
  },
  {
    enunciado: "¿Qué compositor español destacó en la transición al XVIII, uniendo el estilo tradicional con las nuevas modas italianas?",
    correcta: "Sebastián Durón.",
    incorrectas: [
      "Cristóbal de Morales.",
      "Juan del Encina."
    ]
  },
  {
    enunciado: "¿Qué es un 'Villancico de negro' o negrilla?",
    correcta: "Un villancico que imitaba el habla y los ritmos de la población de origen africano en España.",
    incorrectas: [
      "Un canto fúnebre donde todos los músicos vestían de negro.",
      "Una pieza que solo se podía tocar por la noche."
    ]
  },
  {
    enunciado: "La 'Música de Ministriles' en el siglo XVII español servía para:",
    correcta: "Acompañar procesiones y reforzar la polifonía en las catedrales.",
    incorrectas: [
      "Entretener a los ministros del rey durante el almuerzo.",
      "Sustituir a los actores en el teatro."
    ]
  },
  {
    enunciado: "¿Qué es el 'Pasacalle' originalmente en la España del XVII?",
    correcta: "Música de guitarra que se tocaba entre las estrofas de una canción mientras se caminaba por la calle.",
    incorrectas: [
      "Un desfile de carrozas con músicos encima.",
      "El nombre del silencio final de una misa."
    ]
  },
  {
    enunciado: "Juan Bautista Comes es el gran maestro de la policoralidad en:",
    correcta: "Valencia.",
    incorrectas: [
      "Sevilla.",
      "Santiago de Compostela."
    ]
  },
  {
    enunciado: "¿Qué forma musical religiosa, similar al villancico, se utilizaba para la fiesta del Corpus Christi?",
    correcta: "Auto Sacramental.",
    incorrectas: [
      "Sinfonía sacra.",
      "Cantata de taberna."
    ]
  },
  {
    enunciado: "En el órgano español, la 'Lengüetería' se refiere a:",
    correcta: "Los registros de trompetas y clarines que usan lengüetas de metal.",
    incorrectas: [
      "La rapidez con la que el organista mueve la lengua al cantar.",
      "El mueble de madera donde se guardan las partituras."
    ]
  },
  {
    enunciado: "¿Qué es la 'Guitarrilla'?",
    correcta: "Una guitarra más pequeña y aguda, usada a menudo en conjuntos instrumentales.",
    incorrectas: [
      "Un error al escribir la palabra guitarra.",
      "Un postre que comían los músicos tras el concierto."
    ]
  },
  {
    enunciado: "Santiago de Murcia es famoso por sus colecciones de música para guitarra tituladas:",
    correcta: "Resumen de acompañar la parte con la guitarra.",
    incorrectas: [
      "El clave bien afinado.",
      "El arte de la fuga española."
    ]
  },
  {
    enunciado: "¿Qué elemento era fundamental en la representación de las zarzuelas en el Palacio de la Zarzuela?",
    correcta: "La escenografía compleja con máquinas de teatro (tramoyas).",
    incorrectas: [
      "Que no hubiera público para no distraer a los músicos.",
      "El uso exclusivo de instrumentos de plástico."
    ]
  },
  {
    enunciado: "El 'Cuatro de empezar' en el villancico barroco español era:",
    correcta: "Una introducción polifónica para cuatro voces.",
    incorrectas: [
      "Tocar cuatro notas antes de que el director diera la entrada.",
      "El número de músicos que se permitía en el escenario."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ayre' en el contexto de la música vocal española?",
    correcta: "Una sección rítmica y animada dentro de una composición vocal más larga.",
    incorrectas: [
      "El oxígeno necesario para soplar la flauta.",
      "Un instrumento de viento metal muy ligero."
    ]
  },
  {
    enunciado: "Francisco Guerau es un autor clave para el estudio de:",
    correcta: "Las variaciones o diferencias para guitarra española.",
    incorrectas: [
      "La construcción de órganos de tubos en el norte de España.",
      "La ópera italiana en Madrid."
    ]
  },
  {
    enunciado: "El 'Bajo de Violón' en España se refiere al antecesor de:",
    correcta: "El Violonchelo.",
    incorrectas: [
      "El Violín soprano.",
      "La Flauta travesera."
    ]
  },
  {
    enunciado: "En la España del XVII, la música religiosa mantuvo un estilo:",
    correcta: "Conservador, conviviendo la polifonía antigua (stile antico) con el nuevo estilo policoral.",
    incorrectas: [
      "Totalmente experimental, prohibiendo el uso del latín.",
      "Basado solo en instrumentos de percusión metálica."
    ]
  },
  {
    enunciado: "¿Qué es una 'Folía'?",
    correcta: "Una danza de origen portugués muy popular en España que servía de base para variaciones.",
    incorrectas: [
      "Un estado de locura temporal de los músicos.",
      "Un tipo de papel donde se escribía la música."
    ]
  },
  {
    enunciado: "El 'Teatro de los Caños del Peral' en Madrid fue importante por:",
    correcta: "Ser uno de los primeros lugares donde se representó ópera en España.",
    incorrectas: [
      "Ser una escuela de fabricación de tambores.",
      "Donde se inventó la guitarra eléctrica."
    ]
  },
  {
    enunciado: "¿Qué función tenía el 'Arpa de dos órdenes' en la iglesia?",
    correcta: "Realizar el bajo continuo junto al órgano.",
    incorrectas: [
      "Llamar a los fieles a misa.",
      "Sustituir a las campanas cuando llovía."
    ]
  },
  {
    enunciado: "¿Qué compositor de origen italiano trabajó en la corte de Madrid influyendo en el estilo español?",
    correcta: "Filippo Piccinini.",
    incorrectas: [
      "Claudio Monteverdi.",
      "Antonio Vivaldi."
    ]
  },
  {
    enunciado: "La 'Diferencia' en la guitarra barroca se realizaba a menudo sobre:",
    correcta: "Bajos de danzas populares como las marionas o el canario.",
    incorrectas: [
      "Cantos gregorianos del siglo IX.",
      "Ruidos de la naturaleza grabados."
    ]
  },
  {
    enunciado: "¿Qué es un 'Tono de Navidad'?",
    correcta: "Un villancico profano adaptado para la liturgia navideña.",
    incorrectas: [
      "El color rojo de la túnica de los cantores.",
      "Una nota muy aguda que solo se tocaba el 25 de diciembre."
    ]
  },
  {
    enunciado: "El 'Bajo Continuo' en España se llamaba a menudo:",
    correcta: "Acompañamiento.",
    incorrectas: [
      "Sostenido.",
      "Repetición."
    ]
  },
  {
    enunciado: "¿Qué es el 'Quiebro' en la música de tecla española?",
    correcta: "Un tipo de adorno o trino breve.",
    incorrectas: [
      "Romper el instrumento de un golpe.",
      "Un salto de octava prohibido."
    ]
  },
  {
    enunciado: "Las 'Glosas' en el siglo XVII español se aplicaban especialmente a:",
    correcta: "Los romances y los tonos humanos para lucimiento del solista.",
    incorrectas: [
      "Las oraciones en voz baja del cura.",
      "La afinación de los timbales."
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo Pedro Calderón de la Barca en la música?",
    correcta: "Escribió los libretos de las primeras zarzuelas y óperas españolas.",
    incorrectas: [
      "Fue un famoso guitarrista ciego.",
      "Inventó un nuevo tipo de órgano de agua."
    ]
  },
  {
    enunciado: "La 'Celos aun del aire matan' es considerada:",
    correcta: "La primera ópera española conservada (con música de Juan Hidalgo).",
    incorrectas: [
      "Una danza de guerra de los piratas del Caribe.",
      "Un método para aprender a cantar en tres días."
    ]
  },
  {
    enunciado: "El 'Tablatura de vihuela' fue sustituida en el XVII por la:",
    correcta: "Cifra de guitarra (notación de números o letras para los acordes).",
    incorrectas: [
      "Escritura en braille musical.",
      "Grabación directa en casete."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Estilo Español' del XVII frente al italiano?",
    correcta: "El mantenimiento de ritmos ternarios tradicionales y una armonía más conservadora.",
    incorrectas: [
      "El uso masivo de sintetizadores.",
      "La ausencia total de guitarras."
    ]
  },
  {
    enunciado: "El fin del siglo XVII en la música española está marcado por:",
    correcta: "La creciente influencia de la ópera y los instrumentos italianos (violín).",
    incorrectas: [
      "La vuelta al silencio absoluto en los teatros.",
      "La desaparición de la zarzuela."
    ]
  }
];