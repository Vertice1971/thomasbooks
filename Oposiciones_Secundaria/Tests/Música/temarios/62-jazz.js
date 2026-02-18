// 62-jazz.js

var PREGUNTAS = [
  {
    enunciado: "¿En qué ciudad estadounidense se considera que nació el Jazz a principios del siglo XX?",
    correcta: "Nueva Orleans.",
    incorrectas: [
      "Chicago.",
      "Nueva York."
    ]
  },
  {
    enunciado: "¿Qué zona de Nueva Orleans fue fundamental para el desarrollo del Jazz temprano al permitir la música en sus calles y locales?",
    correcta: "Storyville.",
    incorrectas: [
      "Broadway.",
      "Harlem."
    ]
  },
  {
    enunciado: "¿Cuál es el elemento rítmico esencial que da al Jazz su sensación de balanceo o 'empuje'?",
    correcta: "El Swing.",
    incorrectas: [
      "El Bajo Continuo.",
      "La Isocronía."
    ]
  },
  {
    enunciado: "En el Jazz, la creación espontánea de melodías sobre una estructura armónica se denomina:",
    correcta: "Improvisación.",
    incorrectas: [
      "Lectura a primera vista.",
      "Interpretación fidedigna."
    ]
  },
  {
    enunciado: "¿Qué instrumentos formaban habitualmente la 'Front Line' (línea delantera) en el estilo Nueva Orleans?",
    correcta: "Trompeta (o corneta), clarinete y trombón.",
    incorrectas: [
      "Violín, viola y violonchelo.",
      "Tres saxofones tenores."
    ]
  },
  {
    enunciado: "¿Quién es considerado el trompetista más influyente de la historia del Jazz, apodado 'Satchmo'?",
    correcta: "Louis Armstrong.",
    incorrectas: [
      "Miles Davis.",
      "Dizzy Gillespie."
    ]
  },
  {
    enunciado: "¿Qué es el 'Scat'?",
    correcta: "Una técnica vocal que utiliza sílabas sin sentido para imitar el sonido de un instrumento.",
    incorrectas: [
      "Un tipo de baile que se hace sentado.",
      "La partitura original de una canción de Jazz."
    ]
  },
  {
    enunciado: "La década de 1930 es conocida como la 'Era del Swing', caracterizada por la predominancia de:",
    correcta: "Las Big Bands.",
    incorrectas: [
      "Dúos de piano y voz.",
      "Cuartetos de cuerda atonal."
    ]
  },
  {
    enunciado: "¿Qué compositor y pianista dirigió una de las Big Bands más sofisticadas, autor de 'Take the A Train'?",
    correcta: "Duke Ellington.",
    incorrectas: [
      "Count Basie.",
      "Glenn Miller."
    ]
  },
  {
    enunciado: "¿Qué estilo de Jazz surgió en los años 40 como una reacción al Swing, buscando mayor complejidad artística y tempos rápidos?",
    correcta: "Bebop.",
    incorrectas: [
      "Cool Jazz.",
      "Dixieland."
    ]
  },
  {
    enunciado: "¿Quiénes fueron los dos líderes principales de la revolución del Bebop?",
    correcta: "Charlie Parker (saxo) y Dizzy Gillespie (trompeta).",
    incorrectas: [
      "Benny Goodman y Artie Shaw.",
      "Miles Davis y John Coltrane."
    ]
  },
  {
    enunciado: "El 'Cool Jazz' de los años 50 se caracteriza por:",
    correcta: "Un carácter más relajado, cerebral y sonoridades suaves.",
    incorrectas: [
      "Ser música muy ruidosa y agresiva.",
      "No utilizar instrumentos de viento."
    ]
  },
  {
    enunciado: "¿Qué álbum de Miles Davis (1959) es el más vendido de la historia del Jazz y sentó las bases del Jazz Modal?",
    correcta: "Kind of Blue.",
    incorrectas: [
      "Bitches Brew.",
      "Blue Train."
    ]
  },
  {
    enunciado: "¿Qué es el 'Jazz Modal'?",
    correcta: "Improvisación basada en modos o escalas en lugar de progresiones de acordes rápidas.",
    incorrectas: [
      "Música que solo se toca con las teclas negras del piano.",
      "Jazz que sigue las modas de la ropa de cada época."
    ]
  },
  {
    enunciado: "¿Qué saxofonista lideró el 'Free Jazz', rompiendo con las estructuras armónicas y el pulso regular?",
    correcta: "Ornette Coleman.",
    incorrectas: [
      "Stan Getz.",
      "Lester Young."
    ]
  },
  {
    enunciado: "¿Qué es el 'Jazz Fusión'?",
    correcta: "La mezcla del Jazz con elementos del Rock, el Funk y la instrumentación eléctrica.",
    incorrectas: [
      "Tocar Jazz mientras se cocina en directo.",
      "Unir dos trompetas para que suenen como una sola."
    ]
  },
  {
    enunciado: "¿Qué álbum de Miles Davis de 1970 marcó el inicio definitivo del Jazz-Rock y la fusión eléctrica?",
    correcta: "Bitches Brew.",
    incorrectas: [
      "A Love Supreme.",
      "Sketches of Spain."
    ]
  },
  {
    enunciado: "¿Qué es un 'Standard' de Jazz?",
    correcta: "Una composición muy conocida que forma parte del repertorio común de todos los músicos de Jazz.",
    incorrectas: [
      "Un tipo de soporte para colocar el saxofón.",
      "La altura mínima que debe tener un contrabajo."
    ]
  },
  {
    enunciado: "¿Qué libro recopila la mayoría de los 'Standards' y es la biblia de los músicos de Jazz?",
    correcta: "The Real Book.",
    incorrectas: [
      "The Jazz Bible.",
      "El Libro Gordo de Petete."
    ]
  },
  {
    enunciado: "En una formación de Jazz, la 'Sección Rítmica' suele estar compuesta por:",
    correcta: "Piano (o guitarra), contrabajo y batería.",
    incorrectas: [
      "Trompeta, trombón y saxofón.",
      "Solo voces masculinas."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Walking Bass' en el Jazz?",
    correcta: "El contrabajo toca una nota en cada tiempo del compás, creando una línea melódica que camina.",
    incorrectas: [
      "Es cuando el músico camina por el escenario mientras toca.",
      "Un efecto de pedal para que el bajo suene como una voz."
    ]
  },
  {
    enunciado: "¿Qué es el 'Chorus' en la estructura de un tema de Jazz?",
    correcta: "Una vuelta completa a la estructura armónica del tema sobre la cual se improvisa.",
    incorrectas: [
      "Un grupo de diez personas cantando al unísono.",
      "El estribillo de una canción pop."
    ]
  },
  {
    enunciado: "¿Qué técnica de batería consiste en mantener el pulso básico en el plato 'Ride'?",
    correcta: "Ride Pattern.",
    incorrectas: [
      "Redoble de tambor.",
      "Bombo a negras."
    ]
  },
  {
    enunciado: "¿Quién fue la 'Reina del Jazz', famosa por su impecable dicción y su habilidad para el scat?",
    correcta: "Ella Fitzgerald.",
    incorrectas: [
      "Billie Holiday.",
      "Sarah Vaughan."
    ]
  },
  {
    enunciado: "Billie Holiday se distinguía por:",
    correcta: "Su capacidad dramática y su fraseo vocal único, a menudo retrasado respecto al pulso.",
    incorrectas: [
      "Su voz extremadamente potente y operística.",
      "Tocar el piano y la trompeta a la vez."
    ]
  },
  {
    enunciado: "¿Qué pianista de Bebop era conocido por su técnica percusiva y sus disonancias angulares?",
    correcta: "Thelonious Monk.",
    incorrectas: [
      "Oscar Peterson.",
      "Bill Evans."
    ]
  },
  {
    enunciado: "¿Qué obra de John Coltrane es considerada una suite espiritual y una cumbre del Jazz moderno?",
    correcta: "A Love Supreme.",
    incorrectas: [
      "Giant Steps.",
      "My Favorite Things."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bossa Nova' en relación al Jazz?",
    correcta: "Una fusión de la Samba brasileña con el Jazz, popularizada por Stan Getz.",
    incorrectas: [
      "Un nuevo tipo de trompeta inventada en Brasil.",
      "Una danza clásica portuguesa."
    ]
  },
  {
    enunciado: "¿Qué es el 'Hard Bop'?",
    correcta: "Una evolución del Bebop que incorpora influencias del Blues, el Gospel y el Soul.",
    incorrectas: [
      "Jazz que se toca muy fuerte y rápido sin parar.",
      "Un estilo que solo utiliza instrumentos de piedra."
    ]
  },
  {
    enunciado: "¿Qué es un 'Combo' de Jazz?",
    correcta: "Una agrupación pequeña (de 3 a 7 músicos) a diferencia de la Big Band.",
    incorrectas: [
      "Un amplificador para guitarra y bajo.",
      "Una oferta de cena y concierto."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Piano' en el Jazz moderno cuando acompaña a un solista?",
    correcta: "Comping (acompañamiento rítmico-armónico basado en acordes sueltos).",
    incorrectas: [
      "Tocar la melodía exactamente igual que el solista.",
      "Hacer un solo constante durante toda la canción."
    ]
  },
  {
    enunciado: "¿Qué es el 'Trading Fours'?",
    correcta: "Intercambio de improvisaciones de 4 compases entre solistas y la batería.",
    incorrectas: [
      "Vender cuatro discos de Jazz para comprar un saxofón.",
      "Un grupo formado por cuatro trompetistas."
    ]
  },
  {
    enunciado: "¿Qué compositor de Jazz español es un referente del 'Jazz Flamenco'?",
    correcta: "Jorge Pardo (o Chano Domínguez).",
    incorrectas: [
      "Manuel de Falla.",
      "Joaquín Rodrigo."
    ]
  },
  {
    enunciado: "El 'Latin Jazz' se caracteriza por:",
    correcta: "La fusión del Jazz con ritmos afrocubanos y brasileños.",
    incorrectas: [
      "Cantar todos los temas en latín antiguo.",
      "Tocar Jazz con instrumentos de la antigua Roma."
    ]
  },
  {
    enunciado: "¿Qué es el 'Third Stream'?",
    correcta: "Una corriente que intenta sintetizar la música clásica occidental con el Jazz.",
    incorrectas: [
      "La tercera vez que un músico sube al escenario.",
      "Música compuesta para ser escuchada bajo el agua."
    ]
  },
  {
    enunciado: "¿Qué es el 'Jazz Manouche' o Gypsy Jazz?",
    correcta: "Estilo liderado por Django Reinhardt que utiliza guitarras acústicas y violín sin batería.",
    incorrectas: [
      "Jazz tocado por robots en ferias francesas.",
      "Música para piano solo inspirada en el circo."
    ]
  },
  {
    enunciado: "¿Qué técnica de viento permite tocar notas muy largas sin interrumpir el sonido para respirar?",
    correcta: "Respiración circular.",
    incorrectas: [
      "Respiración profunda abdominal.",
      "Apnea musical."
    ]
  },
  {
    enunciado: "¿Qué es el 'Acid Jazz'?",
    correcta: "Una fusión de Jazz con Funk, Soul y ritmos de baile electrónicos surgida en los 80.",
    incorrectas: [
      "Jazz que suena muy desafinado a propósito.",
      "Música para escuchar mientras se come limón."
    ]
  },
  {
    enunciado: "¿Qué institución neoyorquina es el epicentro del Jazz actual bajo la dirección de Wynton Marsalis?",
    correcta: "Jazz at Lincoln Center.",
    incorrectas: [
      "Juilliard School.",
      "Carnegie Hall."
    ]
  },
  {
    enunciado: "El estudio del Jazz permite comprender:",
    correcta: "La libertad expresiva, el diálogo entre culturas y la evolución del lenguaje musical popular.",
    incorrectas: [
      "Cómo se fabrican los saxofones de plástico.",
      "La historia de la navegación por el río Misisipi."
    ]
  }
];