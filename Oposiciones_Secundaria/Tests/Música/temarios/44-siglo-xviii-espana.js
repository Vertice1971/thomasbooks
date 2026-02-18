// 44-siglo-xviii-espana.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué cambio dinástico en 1700 marcó la entrada de las modas francesas e italianas en la corte española?",
    correcta: "La llegada de los Borbones con Felipe V.",
    incorrectas: [
      "El reinado de los Reyes Católicos.",
      "La dictadura de Primo de Rivera."
    ]
  },
  {
    enunciado: "¿Qué famosísimo castrato italiano vivió más de 20 años en España, influyendo enormemente en la vida musical de la corte?",
    correcta: "Farinelli (Carlo Broschi).",
    incorrectas: [
      "Senesino.",
      "Caffarelli."
    ]
  },
  {
    enunciado: "¿Qué función principal desempeñaba Farinelli para el rey Felipe V?",
    correcta: "Cantarle todas las noches las mismas arias para aliviar su melancolía y depresión.",
    incorrectas: [
      "Dirigir las tropas de infantería en la guerra.",
      "Fabricar guitarras para los músicos de la calle."
    ]
  },
  {
    enunciado: "¿Qué compositor de origen italiano se estableció en Madrid y compuso más de 500 sonatas para clave influyendo en la música española?",
    correcta: "Domenico Scarlatti.",
    incorrectas: [
      "Antonio Vivaldi.",
      "Arcangelo Corelli."
    ]
  },
  {
    enunciado: "¿Quién es el máximo representante de la música para tecla en la España del XVIII, discípulo de Scarlatti?",
    correcta: "Padre Antonio Soler.",
    incorrectas: [
      "Mateo Albéniz.",
      "Juan del Encina."
    ]
  },
  {
    enunciado: "El Padre Antonio Soler es famoso por sus sonatas para clave y por sus obras para dos órganos en el monasterio de:",
    correcta: "El Escorial.",
    incorrectas: [
      "Montserrat.",
      "Guadalupe."
    ]
  },
  {
    enunciado: "¿Qué compositor italiano de música de cámara vivió en Madrid bajo el patronazgo del Infante Don Luis y compuso famosos quintetos?",
    correcta: "Luigi Boccherini.",
    incorrectas: [
      "Giovanni Battista Viotti.",
      "Muzio Clementi."
    ]
  },
  {
    enunciado: "La obra más conocida de Boccherini con sabor español es el quinteto titulado:",
    correcta: "La música nocturna de las calles de Madrid.",
    incorrectas: [
      "El carnaval de Venecia.",
      "Sinfonía del Nuevo Mundo."
    ]
  },
  {
    enunciado: "¿Qué género breve y satírico, nacido de los intermedios teatrales, alcanzó gran éxito popular en el XVIII español?",
    correcta: "La Tonadilla Escénica.",
    incorrectas: [
      "La Ópera Seria.",
      "El Oratorio místico."
    ]
  },
  {
    enunciado: "¿Quién fue uno de los compositores más destacados de tonadillas escénicas?",
    correcta: "Luis Misón.",
    incorrectas: [
      "Tomás Luis de Victoria.",
      "Enrique Granados."
    ]
  },
  {
    enunciado: "En la música vocal religiosa española del XVIII, se introdujeron elementos italianos como:",
    correcta: "El uso de arias virtuosas y orquesta con violines.",
    incorrectas: [
      "La prohibición total de usar instrumentos de cuerda.",
      "La vuelta al canto monódico visigótico."
    ]
  },
  {
    enunciado: "¿Qué compositor defendió el estilo español frente a la italianización en su tratado 'El porqué de la música'?",
    correcta: "Andrés Lorente.",
    incorrectas: [
      "Antonio Soler.",
      "Felipe Pedrell."
    ]
  },
  {
    enunciado: "La 'Zarzuela' en el siglo XVIII evolucionó hacia un estilo más cercano a:",
    correcta: "La ópera italiana, pero manteniendo las partes habladas.",
    incorrectas: [
      "El heavy metal primitivo.",
      "La música puramente electrónica."
    ]
  },
  {
    enunciado: "¿Qué compositor de origen italiano, pero afincado en España, escribió la ópera 'Ifigenia en Tracia'?",
    correcta: "José de Nebra.",
    incorrectas: [
      "Sebastián Durón.",
      "Luigi Cherubini."
    ]
  },
  {
    enunciado: "¿Qué característica técnica define a la 'Sonata de tipo Scarlatti'?",
    correcta: "Un solo movimiento dividido en dos partes (binaria) con gran virtuosismo.",
    incorrectas: [
      "Tener cuatro movimientos siguiendo el modelo de la sinfonía.",
      "Estar escrita solo para instrumentos de percusión."
    ]
  },
  {
    enunciado: "¿Qué instrumento de cuerda pulsada empezó a evolucionar hacia las seis cuerdas simples a finales del siglo XVIII?",
    correcta: "La Guitarra española.",
    incorrectas: [
      "El Laúd.",
      "El Arpa."
    ]
  },
  {
    enunciado: "¿Quién fue un importante guitarrista y teórico español de finales del XVIII, autor de una famosa 'Escuela de Guitarra'?",
    correcta: "Fernando Ferandiere.",
    incorrectas: [
      "Gaspar Sanz.",
      "Andrés Segovia."
    ]
  },
  {
    enunciado: "Los 'Conciertos para dos órganos' del Padre Soler se caracterizan por:",
    correcta: "El uso del diálogo y el eco entre los dos instrumentos enfrentados.",
    incorrectas: [
      "Ser tocados por un solo organista con las manos y los pies cruzados.",
      "No utilizar tubos de aire, sino cuerdas pulsadas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Fandango' en la música instrumental del XVIII?",
    correcta: "Una danza de ritmo ternario muy popular que compositores como Scarlatti o Soler llevaron al clave.",
    incorrectas: [
      "Un tipo de silencio de larga duración.",
      "El nombre técnico de la tapa del piano."
    ]
  },
  {
    enunciado: "La influencia de Domenico Scarlatti en la música española se nota en el uso de:",
    correcta: "Ritmos de danza populares, notas repetidas y cruce de manos.",
    incorrectas: [
      "El uso masivo de sintetizadores analógicos.",
      "Cantar en cinco idiomas simultáneamente."
    ]
  },
  {
    enunciado: "¿Qué rey español fundó el Real Monasterio de la Encarnación, importante foco musical?",
    correcta: "Felipe III (aunque su esplendor continuó en el XVIII).",
    incorrectas: [
      "Carlos III.",
      "Fernando VII."
    ]
  },
  {
    enunciado: "¿Qué compositor español de finales del XVIII es conocido por sus sinfonías y música de cámara al estilo de Haydn?",
    correcta: "Manuel Canales.",
    incorrectas: [
      "Juan Crisóstomo de Arriaga (XIX).",
      "Isaac Albéniz."
    ]
  },
  {
    enunciado: "La 'Música de Cámara' en la España del XVIII se desarrollaba principalmente en:",
    correcta: "Los salones de la nobleza y las 'sociedades económicas de amigos del país'.",
    incorrectas: [
      "Las plazas de toros durante las corridas.",
      "Los mercados de abastos."
    ]
  },
  {
    enunciado: "¿Qué instrumento de viento madera era el más utilizado en las orquestas de las catedrales españolas del XVIII?",
    correcta: "El Bajón o Bajoncillo.",
    incorrectas: [
      "El Saxofón.",
      "La Gaita."
    ]
  },
  {
    enunciado: "El 'Villancico' barroco tardío en España acabó pareciéndose a:",
    correcta: "Una cantata italiana con sus recitativos y arias.",
    incorrectas: [
      "Un solo de batería rock.",
      "Un canto gregoriano sin ritmo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música de Ministriles' en el XVIII?",
    correcta: "Conjuntos de viento que participaban en ceremonias civiles y religiosas.",
    incorrectas: [
      "Música que hacían los políticos para convencer al pueblo.",
      "Un tipo de danza con paraguas."
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo la llegada de Carlos III para la música?",
    correcta: "Impulsó el desarrollo de la música instrumental y la creación de capillas musicales.",
    incorrectas: [
      "Prohibió el uso de la música en todo el país.",
      "Mandó quemar todos los pianos de España."
    ]
  },
  {
    enunciado: "Luigi Boccherini introdujo en España el uso del 'Quinteto con dos violonchelos', dotando a la música de:",
    correcta: "Una sonoridad más grave, cálida y virtuosa en el registro del cello.",
    incorrectas: [
      "Un sonido metálico y ruidoso.",
      "La obligación de tocar de pie."
    ]
  },
  {
    enunciado: "¿Qué compositor español de origen catalán destacó por sus óperas italianas en la corte de Carlos III?",
    correcta: "Domènec Terradellas.",
    incorrectas: [
      "Enrique Granados.",
      "Felipe Pedrell."
    ]
  },
  {
    enunciado: "El 'Tratado de la Guitarra' de Federico Moretti (1799) fue fundamental para:",
    correcta: "Establecer la técnica de la guitarra de seis cuerdas simples.",
    incorrectas: [
      "Aprender a tocar el piano con los pies.",
      "Fabricar cuerdas de tripa de gato."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Estilo Nacional' español en el XVIII?",
    correcta: "La mezcla de la técnica italiana con el ritmo y la gracia de las danzas populares españolas.",
    incorrectas: [
      "El rechazo absoluto a cualquier influencia extranjera.",
      "El uso exclusivo del latín en todas las canciones."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bolero'?",
    correcta: "Una danza española que surgió a finales del XVIII, elegante y de ritmo ternario.",
    incorrectas: [
      "Un tipo de chaqueta que usaban los directores de orquesta.",
      "Un instrumento de percusión hecho de piedra."
    ]
  },
  {
    enunciado: "El 'Teatro de la Cruz' y el 'Teatro del Príncipe' en Madrid eran famosos por:",
    correcta: "Ser los principales escenarios de la tonadilla escénica.",
    incorrectas: [
      "Ser hospitales para músicos enfermos.",
      "Ser las oficinas de correos de la época."
    ]
  },
  {
    enunciado: "¿Qué compositor español escribió el famoso 'Fandango' para clave a menudo atribuido a Soler?",
    correcta: "Atribuido tradicionalmente al Padre Antonio Soler.",
    incorrectas: [
      "Juan del Encina.",
      "Manuel de Falla."
    ]
  },
  {
    enunciado: "La música de órgano en el XVIII español empezó a incluir registros que imitaban:",
    correcta: "Voces humanas, campanas y hasta ruidos de batallas.",
    incorrectas: [
      "El sonido de los aviones al despegar.",
      "Instrumentos electrónicos del futuro."
    ]
  },
  {
    enunciado: "En el siglo XVIII, el 'Bajo Continuo' en España seguía realizándose habitualmente por:",
    correcta: "El Arpa y el Órgano o Clave.",
    incorrectas: [
      "La Batería y el Bajo eléctrico.",
      "Dos flautas dulces solamente."
    ]
  },
  {
    enunciado: "¿Qué es la 'Seguidilla'?",
    correcta: "Una forma de canción y danza popular con una estructura poética y musical fija.",
    incorrectas: [
      "Una nota que se repite muchas veces seguida.",
      "Un tipo de silencio de semicorchea."
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo la Real Capilla de Madrid en el siglo XVIII?",
    correcta: "Fue el centro de mayor calidad musical del país, donde trabajaron los mejores maestros.",
    incorrectas: [
      "Fue una escuela de equitación para músicos.",
      "Era el lugar donde se guardaban los instrumentos rotos."
    ]
  },
  {
    enunciado: "El fin del siglo XVIII en España dio paso a:",
    correcta: "El impacto de la Guerra de la Independencia y la llegada del Romanticismo.",
    incorrectas: [
      "La vuelta a la música del siglo XVI.",
      "La prohibición de la guitarra en todo el territorio."
    ]
  },
  {
    enunciado: "Blas de Laserna es uno de los compositores más importantes de:",
    correcta: "Tonadillas escénicas de finales del siglo XVIII.",
    incorrectas: [
      "Sinfonías clásicas al estilo de Beethoven.",
      "Cantos gregorianos para la catedral de Burgos."
    ]
  }
];