// 61-musica-africa-america.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué característica rítmica es el pilar fundamental de la música de África subsahariana y su herencia en América?",
    correcta: "La polirritmia (superposición de diferentes ritmos simultáneos).",
    incorrectas: [
      "El uso exclusivo de melodías gregorianas.",
      "La ausencia total de instrumentos de percusión."
    ]
  },
  {
    enunciado: "¿Qué estructura formal, típica de África, consiste en un líder que canta una frase y un grupo que responde?",
    correcta: "Llamada y respuesta (Call and Response).",
    incorrectas: [
      "Fuga barroca.",
      "Forma sonata."
    ]
  },
  {
    enunciado: "¿Qué instrumento africano, precursor del xilófono, utiliza calabazas como resonadores?",
    correcta: "El Balafón.",
    incorrectas: [
      "La Marimba de arco.",
      "El Mbira."
    ]
  },
  {
    enunciado: "El 'Mbira' o 'Kalimba' es un instrumento africano que se toca:",
    correcta: "Pulsando lengüetas metálicas con los pulgares.",
    incorrectas: [
      "Soplando a través de una caña de bambú.",
      "Golpeando una membrana de piel de leopardo."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el tambor con forma de copa, originario de África Occidental, muy popular en la música actual?",
    correcta: "Djembé.",
    incorrectas: [
      "Conga.",
      "Batá."
    ]
  },
  {
    enunciado: "¿Qué eran los 'Work Songs' o cantos de trabajo en Estados Unidos?",
    correcta: "Cantos rítmicos que ayudaban a los esclavos a coordinar el esfuerzo físico en las plantaciones.",
    incorrectas: [
      "Canciones que se escuchaban en las oficinas de correos.",
      "Piezas de ópera sobre la revolución industrial."
    ]
  },
  {
    enunciado: "¿Qué género vocal religioso surge de la mezcla de salmos protestantes y ritmos africanos?",
    correcta: "Espiritual Negro (Spiritual).",
    incorrectas: [
      "Coral luterano.",
      "Misa solemne."
    ]
  },
  {
    enunciado: "El 'Gospel' se diferencia del Espiritual en que:",
    correcta: "Es un género más moderno, con acompañamiento instrumental y mayor energía rítmica.",
    incorrectas: [
      "Se canta exclusivamente en latín.",
      "No permite el uso de la voz femenina."
    ]
  },
  {
    enunciado: "¿Qué género musical nace en el Delta del Mississippi y expresa la tristeza y opresión del pueblo afroamericano?",
    correcta: "El Blues.",
    incorrectas: [
      "El Ragtime.",
      "El Country."
    ]
  },
  {
    enunciado: "¿Cuál es la estructura armónica estándar del Blues clásico?",
    correcta: "12 compases basados en los grados I, IV y V.",
    incorrectas: [
      "32 compases de música atonal.",
      "8 compases de ritmo de vals."
    ]
  },
  {
    enunciado: "¿Qué son las 'Blue Notes'?",
    correcta: "Notas de la escala (3ª, 5ª y 7ª) que se rebajan ligeramente para dar un carácter melancólico.",
    incorrectas: [
      "Notas que solo se pueden tocar en instrumentos de color azul.",
      "Notas que duran más de diez segundos."
    ]
  },
  {
    enunciado: "¿Qué instrumento africano de cuerda pulsada dio origen al 'Banjo' americano?",
    correcta: "El Akonting (o el Kora).",
    incorrectas: [
      "El Arpa celta.",
      "El Laúd renacentista."
    ]
  },
  {
    enunciado: "En Cuba, la mezcla de la guitarra española y los tambores africanos dio lugar a:",
    correcta: "El Son Cubano.",
    incorrectas: [
      "La Jota caribeña.",
      "El Flamenco tropical."
    ]
  },
  {
    enunciado: "¿Qué patrón rítmico de dos compases es la base fundamental de la salsa y la música afrocubana?",
    correcta: "La Clave.",
    incorrectas: [
      "El Backbeat.",
      "El Swing."
    ]
  },
  {
    enunciado: "¿Qué tambores de origen africano, utilizados en rituales de la santería, tienen forma de reloj de arena?",
    correcta: "Tambores Batá.",
    incorrectas: [
      "Timbales.",
      "Bongos."
    ]
  },
  {
    enunciado: "¿Qué género brasileño tiene raíces en las danzas de los esclavos africanos de Angola?",
    correcta: "La Samba.",
    incorrectas: [
      "El Tango.",
      "La Bossa Nova."
    ]
  },
  {
    enunciado: "¿Qué es el 'Berimbau'?",
    correcta: "Un arco musical de una sola cuerda utilizado en la Capoeira brasileña.",
    incorrectas: [
      "Un tipo de trompeta de madera.",
      "Una danza circular de las Amazonas."
    ]
  },
  {
    enunciado: "El 'Reggae' surgió en Jamaica como una evolución de ritmos africanos y caribeños como:",
    correcta: "El Mento y el Ska.",
    incorrectas: [
      "La Polka y el Vals.",
      "El Rock and Roll."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al ritmo del Reggae?",
    correcta: "El acento marcado en los tiempos débiles del compás (2 y 4).",
    incorrectas: [
      "Un ritmo de marcha militar muy rígido.",
      "La ausencia total de bajo eléctrico."
    ]
  },
  {
    enunciado: "¿Qué es el 'Habanera'?",
    correcta: "Un ritmo cubano que viajó a España y fue adaptado por compositores como Bizet o Albéniz.",
    incorrectas: [
      "Una comida típica de la ciudad de La Habana.",
      "Un instrumento de viento metal muy agudo."
    ]
  },
  {
    enunciado: "¿Qué instrumentos forman la sección de percusión de una orquesta de Salsa?",
    correcta: "Congas, bongos, timbales, clave y güiro.",
    incorrectas: [
      "Bombo, platos y triángulo únicamente.",
      "Castañuelas y pandereta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Calipso'?",
    correcta: "Un género musical de Trinidad y Tobago con fuertes raíces africanas y letras satíricas.",
    incorrectas: [
      "Un baile de salón europeo del siglo XVIII.",
      "Un tipo de sintetizador digital."
    ]
  },
  {
    enunciado: "Los 'Steel Drums' (bidones de acero) son instrumentos típicos de:",
    correcta: "Trinidad y Tobago.",
    incorrectas: [
      "Argentina.",
      "Canadá."
    ]
  },
  {
    enunciado: "¿Qué compositor afroamericano es conocido como 'El Rey del Ragtime'?",
    correcta: "Scott Joplin.",
    incorrectas: [
      "Louis Armstrong.",
      "Duke Ellington."
    ]
  },
  {
    enunciado: "El 'Ragtime' se caracteriza por:",
    correcta: "Su ritmo sincopado en la mano derecha sobre un bajo regular en la izquierda.",
    incorrectas: [
      "Ser música solo para instrumentos de viento.",
      "No tener ritmo definido."
    ]
  },
  {
    enunciado: "¿Qué es la 'Síncopa'?",
    correcta: "El desplazamiento del acento rítmico a una parte débil del compás.",
    incorrectas: [
      "Un desmayo que sufre el director de orquesta.",
      "Tocar todas las notas muy cortas."
    ]
  },
  {
    enunciado: "¿Qué género dominicano tiene sus raíces en los ritmos africanos de la isla Española?",
    correcta: "El Merengue.",
    incorrectas: [
      "El Bolero.",
      "La Cueca."
    ]
  },
  {
    enunciado: "¿Qué instrumento es el alma de la música andina, aunque fue introducido por los españoles?",
    correcta: "El Charango (inspirado en la vihuela/guitarra).",
    incorrectas: [
      "La Quena.",
      "El Zampoña."
    ]
  },
  {
    enunciado: "¿Qué es el 'Candombe'?",
    correcta: "Una manifestación musical uruguaya basada en el toque de tres tambores de origen africano.",
    incorrectas: [
      "Una danza rusa de invierno.",
      "Un tipo de flauta dulce."
    ]
  },
  {
    enunciado: "La 'Bossa Nova' brasileña fusiona la samba con:",
    correcta: "El Jazz.",
    incorrectas: [
      "La música disco.",
      "El Heavy Metal."
    ]
  },
  {
    enunciado: "¿Qué figura africana era el guardián de la historia oral y la música en sus comunidades?",
    correcta: "El Griot.",
    incorrectas: [
      "El Chamán.",
      "El Guerrero."
    ]
  },
  {
    enunciado: "¿Qué es el 'Highlife'?",
    correcta: "Un género musical de Ghana que mezcla ritmos africanos con instrumentos de banda occidentales.",
    incorrectas: [
      "Música compuesta para ser escuchada en aviones.",
      "Un tipo de ópera cómica."
    ]
  },
  {
    enunciado: "¿Qué compositor nigeriano creó el 'Afrobeat' fusionando jazz, funk y cantos tradicionales?",
    correcta: "Fela Kuti.",
    incorrectas: [
      "Miriam Makeba.",
      "Youssou N'Dour."
    ]
  },
  {
    enunciado: "En la música africana, el ritmo tiene una función:",
    correcta: "Comunitaria y social, acompañando cada momento de la vida.",
    incorrectas: [
      "Puramente matemática y teórica.",
      "De aislamiento individual."
    ]
  },
  {
    enunciado: "¿Qué es el 'Talking Drum' (tambor parlante)?",
    correcta: "Un tambor cuya tensión se puede variar para imitar las inflexiones de la voz humana.",
    incorrectas: [
      "Un tambor que tiene una grabadora dentro.",
      "Un tambor que solo tocan los políticos."
    ]
  },
  {
    enunciado: "¿Qué género afro-peruano utiliza un cajón de madera como instrumento principal?",
    correcta: "El Festejo o Landó.",
    incorrectas: [
      "La Marinera.",
      "El Huayno."
    ]
  },
  {
    enunciado: "¿Qué es la 'Antifonía'?",
    correcta: "El diálogo entre dos grupos de intérpretes que se responden mutuamente.",
    incorrectas: [
      "Cantar siempre en contra del ritmo de la orquesta.",
      "Un tipo de fobia a los sonidos agudos."
    ]
  },
  {
    enunciado: "La influencia africana en América permitió el desarrollo de qué escala fundamental para el rock?",
    correcta: "La escala pentatónica menor (con blue notes).",
    incorrectas: [
      "La escala mayor jónica.",
      "La escala de tonos enteros de Debussy."
    ]
  },
  {
    enunciado: "¿Qué es un 'Riff'?",
    correcta: "Una frase musical corta que se repite a lo largo de una pieza, heredera de los patrones africanos.",
    incorrectas: [
      "Un error en la partitura.",
      "El nombre del estuche de la guitarra."
    ]
  },
  {
    enunciado: "El estudio de la música africana y su diáspora permite comprender:",
    correcta: "La base rítmica y emocional de casi toda la música popular moderna del mundo.",
    incorrectas: [
      "Cómo se fabrican los violines de plástico.",
      "La historia de los barcos de guerra europeos."
    ]
  }
];