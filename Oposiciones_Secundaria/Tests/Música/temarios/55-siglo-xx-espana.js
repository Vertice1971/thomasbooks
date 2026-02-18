// 55-siglo-xx-espana.js

var PREGUNTAS = [
  {
    enunciado: "¿Quién es considerado la figura central y más universal de la música española del siglo XX?",
    correcta: "Manuel de Falla.",
    incorrectas: [
      "Isaac Albéniz.",
      "Federico García Lorca."
    ]
  },
  {
    enunciado: "¿En qué obra de Manuel de Falla se observa su etapa de nacionalismo impresionista influenciada por su estancia en París?",
    correcta: "Noches en los jardines de España.",
    incorrectas: [
      "El Retablo de Maese Pedro.",
      "La vida breve."
    ]
  },
  {
    enunciado: "¿Qué ballet de Falla, estrenado por los Ballets Rusos de Diáguilev, utiliza el folclore andaluz de forma estilizada?",
    correcta: "El sombrero de tres picos.",
    incorrectas: [
      "El amor brujo.",
      "Atlántida."
    ]
  },
  {
    enunciado: "El 'Concierto para clave y cinco instrumentos' de Falla representa su etapa:",
    correcta: "Neoclásica, inspirada en la tradición castellana y el siglo de oro.",
    incorrectas: [
      "Expresionista atonal.",
      "Romántica nacionalista."
    ]
  },
  {
    enunciado: "¿Qué compositor sevillano unió el nacionalismo con la forma cíclica y una estética andalucista de salón?",
    correcta: "Joaquín Turina.",
    incorrectas: [
      "Conrado del Campo.",
      "Oscar Esplá."
    ]
  },
  {
    enunciado: "La 'Generación del 27' en música también es conocida como:",
    correcta: "Generación de la República o de la Amistad.",
    incorrectas: [
      "Generación del Desastre.",
      "Generación de los Maestros."
    ]
  },
  {
    enunciado: "¿Cómo se llamó el grupo de compositores del 27 establecidos en Madrid?",
    correcta: "Grupo de Madrid o Grupo de los Ocho.",
    incorrectas: [
      "Grupo de los Seis.",
      "Los renovadores."
    ]
  },
  {
    enunciado: "¿Cuál de estos compositores pertenecía al Grupo de los Ocho (Madrid)?",
    correcta: "Rodolfo Halffter.",
    incorrectas: [
      "Federico Mompou.",
      "Roberto Gerhard."
    ]
  },
  {
    enunciado: "El 'Grupo de Barcelona' (o de Cataluña) del 27 estuvo liderado estéticamente por:",
    correcta: "Roberto Gerhard.",
    incorrectas: [
      "Joaquín Rodrigo.",
      "Jesús Guridi."
    ]
  },
  {
    enunciado: "¿Qué compositor alicantino de la Generación del 27 destacó por su obra 'Don Quijote velando las armas'?",
    correcta: "Oscar Esplá.",
    incorrectas: [
      "Ernesto Halffter.",
      "Salvador Bacarisse."
    ]
  },
  {
    enunciado: "¿Qué obra de Joaquín Rodrigo para guitarra y orquesta se convirtió en la obra española más interpretada del siglo XX?",
    correcta: "Concierto de Aranjuez.",
    incorrectas: [
      "Fantasía para un gentilhombre.",
      "Concierto andaluz."
    ]
  },
  {
    enunciado: "¿Qué es 'La Atlántida' en la producción de Falla?",
    correcta: "Su gran cantata escénica póstuma sobre el poema de Jacint Verdaguer.",
    incorrectas: [
      "Su primera ópera sobre la ciudad de Cádiz.",
      "Un ballet para la mano izquierda."
    ]
  },
  {
    enunciado: "¿Qué compositor catalán es famoso por sus 'Canciones negras'?",
    correcta: "Xavier Montsalvatge.",
    incorrectas: [
      "Federico Mompou.",
      "Eduardo Toldrá."
    ]
  },
  {
    enunciado: "Federico Mompou es conocido por su estilo pianístico íntimo llamado:",
    correcta: "Música Callada.",
    incorrectas: [
      "Serialismo puntillista.",
      "Música de mobiliario."
    ]
  },
  {
    enunciado: "¿Qué acontecimiento histórico provocó el exilio de gran parte de la Generación del 27 y la muerte de la vanguardia inicial?",
    correcta: "La Guerra Civil Española.",
    incorrectas: [
      "La Primera Guerra Mundial.",
      "La Revolución de los Claveles."
    ]
  },
  {
    enunciado: "Rodolfo Halffter introdujo en México, durante su exilio, la técnica:",
    correcta: "Dodecafónica.",
    incorrectas: [
      "Del bajo continuo.",
      "Del canto gregoriano."
    ]
  },
  {
    enunciado: "¿Qué compositor de la Generación del 27 destacó por su neoclasicismo y por ser alumno predilecto de Falla?",
    correcta: "Ernesto Halffter.",
    incorrectas: [
      "Joaquín Nin.",
      "Gustavo Pittaluga."
    ]
  },
  {
    enunciado: "¿Qué es la 'Generación del 51'?",
    correcta: "El grupo que reintrodujo las vanguardias europeas (serialismo, aleatoriedad) en la España de posguerra.",
    incorrectas: [
      "Un grupo de cantantes de zarzuela.",
      "Los músicos que acompañaban a Franco en los desfiles."
    ]
  },
  {
    enunciado: "¿Cuál de estos compositores es una figura clave de la Generación del 51?",
    correcta: "Cristóbal Halffter.",
    incorrectas: [
      "Francisco Asenjo Barbieri.",
      "Santiago de Murcia."
    ]
  },
  {
    enunciado: "¿Qué compositor vasco de la Generación del 51 destacó por su rigor estructural y su obra 'Diez melodías vascas'?",
    correcta: "Jesús Guridi (Nacionalista, antecedente de la renovación).",
    incorrectas: [
      "Luis de Pablo.",
      "Joan Guinjoan."
    ]
  },
  {
    enunciado: "Luis de Pablo fue un pionero en España en el uso de:",
    correcta: "La música aleatoria y la electrónica.",
    incorrectas: [
      "La vihuela de arco.",
      "El piano de pared."
    ]
  },
  {
    enunciado: "¿Qué compositor español recibió el encargo de la ONU para escribir un himno a la paz (Cántico de la Paz)?",
    correcta: "Cristóbal Halffter.",
    incorrectas: [
      "Manuel de Falla.",
      "Antón García Abril."
    ]
  },
  {
    enunciado: "El 'Concierto para piano' de Joaquín Turina es conocido como:",
    correcta: "Rapsodia Sinfónica.",
    incorrectas: [
      "Concierto del Sur.",
      "Danzas fantásticas."
    ]
  },
  {
    enunciado: "¿Qué compositora española del siglo XX destacó por su música de cámara y por ser la primera mujer en ganar el Premio Nacional de Música?",
    correcta: "Montserrat Alavedra (en interpretación) o María de Pablos (en composición).",
    incorrectas: [
      "Alicia de Larrocha.",
      "Teresa Berganza."
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo el 'Concurso de Cante Jondo de Granada' (1922) organizado por Falla y Lorca?",
    correcta: "Reivindicó el valor artístico y serio del flamenco frente a la visión pintoresca.",
    incorrectas: [
      "Fue un concurso para elegir la canción de Eurovisión de la época.",
      "Sirvió para prohibir el uso de guitarras en público."
    ]
  },
  {
    enunciado: "Roberto Gerhard fue el primer compositor español en utilizar sistemáticamente:",
    correcta: "El serialismo dodecafónico.",
    incorrectas: [
      "El bajo de Alberti.",
      "La flauta de pan."
    ]
  },
  {
    enunciado: "¿Qué es el 'Grupo de los Cuatro' en Cataluña?",
    correcta: "Un grupo de jóvenes vanguardistas de los años 30 (Gerhard, Blancafort, Mompou, Baltasar Samper).",
    incorrectas: [
      "Los cuatro músicos que tocaban para el Rey.",
      "Un cuarteto de cuerda de Barcelona."
    ]
  },
  {
    enunciado: "¿Qué obra de Falla se basa en un episodio de El Quijote y utiliza marionetas?",
    correcta: "El Retablo de Maese Pedro.",
    incorrectas: [
      "La vida breve.",
      "El amor brujo."
    ]
  },
  {
    enunciado: "Joaquín Rodrigo escribió el 'Concierto Heroico' para:",
    correcta: "Piano y orquesta.",
    incorrectas: [
      "Guitarra sola.",
      "Siete trompetas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Lamento de Ariadna' de la ópera 'Ariadna' de Roberto Gerhard?",
    correcta: "Un ejemplo de su estilo de vanguardia europea.",
    incorrectas: [
      "Una canción popular catalana.",
      "Un solo de castañuelas."
    ]
  },
  {
    enunciado: "El 'Sinfonismo de posguerra' en España (años 40) se caracterizó por:",
    correcta: "Un retorno a un lenguaje más conservador y triunfalista.",
    incorrectas: [
      "La invención del sintetizador digital.",
      "El rechazo a la figura de Beethoven."
    ]
  },
  {
    enunciado: "¿Qué compositor de la Generación del 51 escribió la ópera 'Don Quijote' estrenada en el Teatro Real en 2000?",
    correcta: "Cristóbal Halffter.",
    incorrectas: [
      "Luis de Pablo.",
      "Tomás Marco."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Abierta'?",
    correcta: "Aquella donde el intérprete tiene libertad para elegir el orden de las secciones o ciertos parámetros.",
    incorrectas: [
      "Música que se toca con las ventanas del teatro abiertas.",
      "Música que no tiene final."
    ]
  },
  {
    enunciado: "¿Quién es el autor de 'Antiphona regalis'?",
    correcta: "Cristóbal Halffter.",
    incorrectas: [
      "Francisco Guerrero.",
      "Rodolfo Halffter."
    ]
  },
  {
    enunciado: "La 'Música Concreta' entró en España principalmente a través de:",
    correcta: "Los laboratorios de radio y el grupo ALEA fundado por Luis de Pablo.",
    incorrectas: [
      "Los conservatorios tradicionales de provincias.",
      "Las ferias de ganado de Andalucía."
    ]
  },
  {
    enunciado: "¿Qué compositor compuso 'El concierto de estío' para violín?",
    correcta: "Joaquín Rodrigo.",
    incorrectas: [
      "Manuel de Falla.",
      "Antón García Abril."
    ]
  },
  {
    enunciado: "En la música de Federico Mompou, el concepto de 'Recomençament' significa:",
    correcta: "Volver a la pureza del sonido sin artificios académicos.",
    incorrectas: [
      "Repetir la misma obra diez veces seguidas.",
      "Empezar la carrera de música a los 80 años."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la obra de Carmelo Bernaola?",
    correcta: "La versatilidad entre la vanguardia académica y la música para cine y televisión (ej. Verano Azul).",
    incorrectas: [
      "Escribir solo para instrumentos de cuerda de tripa.",
      "El rechazo total al uso del ritmo."
    ]
  },
  {
    enunciado: "El fin del siglo XX musical en España se caracteriza por:",
    correcta: "La pluralidad de estilos y la plena integración en la vanguardia internacional.",
    incorrectas: [
      "La vuelta obligatoria al villancico renacentista.",
      "La desaparición de los compositores."
    ]
  },
  {
    enunciado: "¿Qué institución es fundamental para la formación de los compositores actuales en España?",
    correcta: "El Centro para la Difusión de la Música Contemporánea (CDMC).",
    incorrectas: [
      "La Escuela de Tauromaquia.",
      "El Ministerio de Agricultura."
    ]
  }
];