// 29-canto-gregoriano.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué Papa da nombre a este canto, tras realizar una labor de unificación y recopilación de las liturgias romanas a finales del siglo VI?",
    correcta: "Gregorio I Magno.",
    incorrectas: [
      "León X.",
      "Juan Pablo I."
    ]
  },
  {
    enunciado: "El Canto Gregoriano se define técnicamente como:",
    correcta: "Monódico, a cappella, en latín y con ritmo libre supeditado al texto.",
    incorrectas: [
      "Polifónico, con acompañamiento de órgano y ritmo binario estricto.",
      "Monódico, en lengua romance y con percusión obligatoria."
    ]
  },
  {
    enunciado: "¿Qué significa que el Canto Gregoriano tenga un ritmo 'prosaico' o libre?",
    correcta: "Que no posee una métrica regular (compás), sino que se basa en la acentuación y el fraseo del texto latino.",
    incorrectas: [
      "Que los monjes pueden cantar a la velocidad que quieran de forma individual.",
      "Que el ritmo se marca golpeando el suelo con bastones de madera."
    ]
  },
  {
    enunciado: "¿Cómo se llama el sistema de ocho escalas o modos que organiza el Canto Gregoriano?",
    correcta: "Oktoechos.",
    incorrectas: [
      "Dodecafonismo.",
      "Sistema temperado."
    ]
  },
  {
    enunciado: "Un canto 'Silábico' es aquel en el que:",
    correcta: "A cada sílaba del texto le corresponde una sola nota musical.",
    incorrectas: [
      "Una sola sílaba se alarga con muchas notas diferentes.",
      "Se utilizan dos o tres notas por sílaba de forma constante."
    ]
  },
  {
    enunciado: "¿Qué es un 'Melisma'?",
    correcta: "Un pasaje donde se cantan muchas notas sobre una misma sílaba, común en el Aleluya.",
    incorrectas: [
      "El nombre técnico del libro donde se recogen los cantos.",
      "El silencio que se hace al final de cada salmo."
    ]
  },
  {
    enunciado: "En la liturgia, el 'Propio del Tiempo' (Proprium Tempore) incluye los cantos que:",
    correcta: "Cambian según la festividad o el día del año litúrgico.",
    incorrectas: [
      "Son siempre los mismos en todas las misas (Kyrie, Gloria...).",
      "Solo pueden cantarse por la noche en los monasterios."
    ]
  },
  {
    enunciado: "¿Cuáles son los cantos que forman el 'Ordinario de la Misa' (Kyriale)?",
    correcta: "Kyrie, Gloria, Credo, Sanctus-Benedictus y Agnus Dei.",
    incorrectas: [
      "Introitus, Graduale, Alleluia, Offertorium y Communio.",
      "Ave Maria, Magnificat y Te Deum."
    ]
  },
  {
    enunciado: "El 'Oficio Divino' o Liturgia de las Horas consiste en:",
    correcta: "La oración cantada de los monjes en momentos específicos del día (Laudes, Vísperas, etc.).",
    incorrectas: [
      "Un concierto público que se daba en las catedrales los domingos.",
      "La coronación de los reyes mediante cantos especiales."
    ]
  },
  {
    enunciado: "¿Qué es un canto 'Antifonal'?",
    correcta: "Aquel que se interpreta mediante la alternancia de dos semicoros.",
    incorrectas: [
      "Aquel que se canta entre un solista y el coro.",
      "Aquel que no utiliza ningún tipo de melodía."
    ]
  },
  {
    enunciado: "Un canto 'Responsorial' es aquel en el que alternan:",
    correcta: "Un solista (versículo) y el coro (responso).",
    incorrectas: [
      "Dos solistas de diferentes registros vocales.",
      "El coro y un grupo de instrumentos de viento."
    ]
  },
  {
    enunciado: "¿Cómo se llama la nota central de los modos gregorianos sobre la que se recita la mayor parte del texto?",
    correcta: "Ténor o Repercusio.",
    incorrectas: [
      "Finalis.",
      "Tónica."
    ]
  },
  {
    enunciado: "La nota final que determina el modo de la pieza se denomina:",
    correcta: "Finalis.",
    incorrectas: [
      "Dominante.",
      "Pausa."
    ]
  },
  {
    enunciado: "¿Qué nombre reciben los signos de notación primitiva que se escribían sobre el texto?",
    correcta: "Neumas.",
    incorrectas: [
      "Corcheas.",
      "Jeroglíficos."
    ]
  },
  {
    enunciado: "La 'Notación Cuadrada', típica de los códices gregorianos, se escribe sobre:",
    correcta: "Tetragrama (cuatro líneas).",
    incorrectas: [
      "Pentagrama (cinco líneas).",
      "Una sola línea de color azul."
    ]
  },
  {
    enunciado: "¿Qué es un 'Tropo'?",
    correcta: "Un texto o melodía añadido a un canto preexistente para comentarlo o embellecerlo.",
    incorrectas: [
      "Un instrumento de percusión prohibido por la Iglesia.",
      "El gorro que llevaban los monjes al cantar."
    ]
  },
  {
    enunciado: "La 'Secuencia' nació originalmente como un tropo aplicado al melisma del:",
    correcta: "Aleluya.",
    incorrectas: [
      "Kyrie.",
      "Credo."
    ]
  },
  {
    enunciado: "Los modos gregorianos se dividen en dos grupos de cuatro. ¿Cómo se denominan?",
    correcta: "Auténticos y Plagales.",
    incorrectas: [
      "Mayores y Menores.",
      "Agudos y Graves."
    ]
  },
  {
    enunciado: "¿Qué diferencia a un modo Plagal de su correspondiente Auténtico?",
    correcta: "Su ámbito es más grave (empieza una cuarta por debajo) y su dominante es distinta.",
    incorrectas: [
      "Que el modo plagal solo se puede cantar por mujeres.",
      "Que el modo auténtico tiene tres notas más."
    ]
  },
  {
    enunciado: "El modo I (Dórico) tiene como nota final:",
    correcta: "Re.",
    incorrectas: [
      "Mi.",
      "Sol."
    ]
  },
  {
    enunciado: "¿Qué es el 'Liber Usualis'?",
    correcta: "El libro que recopila los cantos más habituales para la misa y el oficio.",
    incorrectas: [
      "Un manual para aprender a tocar el órgano medieval.",
      "La biografía oficial del Papa Gregorio."
    ]
  },
  {
    enunciado: "El término 'Jubilus' hace referencia a:",
    correcta: "El largo melisma sobre la última sílaba del Aleluya.",
    incorrectas: [
      "El estado de felicidad de los monjes tras la oración.",
      "La campana que anuncia el inicio del canto."
    ]
  },
  {
    enunciado: "En la notación cuadrada, el 'Custos' es un signo al final del sistema que sirve para:",
    correcta: "Indicar cuál será la primera nota de la línea siguiente.",
    incorrectas: [
      "Señalar que el canto ha terminado.",
      "Avisar de que hay que subir el volumen."
    ]
  },
  {
    enunciado: "¿Cuál es la función del 'Guión' o Custos?",
    correcta: "Ayudar al lector a anticipar la altura de la siguiente nota al cambiar de línea.",
    incorrectas: [
      "Marcar el ritmo del tambor.",
      "Separar las estrofas del texto."
    ]
  },
  {
    enunciado: "La 'Salmodia' se caracteriza por ser un estilo:",
    correcta: "Recitativo, muy sencillo y casi monótono, para la lectura de los salmos.",
    incorrectas: [
      "Extremadamente complejo y virtuoso.",
      "Bailable y de ritmo binario."
    ]
  },
  {
    enunciado: "¿Qué es el 'Punctum' en la notación gregoriana?",
    correcta: "Una nota aislada representada por un cuadrado pequeño.",
    incorrectas: [
      "Un silencio que dura cinco segundos.",
      "El nombre del director del coro monástico."
    ]
  },
  {
    enunciado: "La 'Virga' es un neuma que indica:",
    correcta: "Una nota más aguda respecto a la anterior.",
    incorrectas: [
      "Una nota más grave.",
      "Que el cantante debe sentarse."
    ]
  },
  {
    enunciado: "Un neuma de dos notas ascendentes se llama:",
    correcta: "Podatus o Pes.",
    incorrectas: [
      "Clivis.",
      "Torculus."
    ]
  },
  {
    enunciado: "El neuma llamado 'Clivis' representa:",
    correcta: "Dos notas descendentes.",
    incorrectas: [
      "Tres notas en forma de pico.",
      "Una nota larga y vibrada."
    ]
  },
  {
    enunciado: "¿Qué es el 'Quilisma'?",
    correcta: "Un neuma con forma dentada que sugiere un ligero ornamento o vibración.",
    incorrectas: [
      "Una nota que se toca con una flauta de hueso.",
      "El final de la misa."
    ]
  },
  {
    enunciado: "La lengua oficial y exclusiva del Canto Gregoriano es:",
    correcta: "Latín.",
    incorrectas: [
      "Griego.",
      "Latín vulgar."
    ]
  },
  {
    enunciado: "¿Qué institución se encargó de la recuperación científica del Gregoriano en el siglo XIX?",
    correcta: "La Abadía de Solesmes.",
    incorrectas: [
      "La Universidad de Harvard.",
      "El Vaticano directamente sin ayuda externa."
    ]
  },
  {
    enunciado: "El Canto Gregoriano es un canto 'Funcional' porque:",
    correcta: "Su existencia tiene sentido únicamente dentro de la celebración religiosa.",
    incorrectas: [
      "Sirve para que los monjes hagan ejercicio pulmonar.",
      "Fue compuesto para ser vendido en discos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Graduale Romanum'?",
    correcta: "El libro litúrgico que contiene los cantos del Propio de la Misa.",
    incorrectas: [
      "Un escalafón para los cantantes según su calidad.",
      "Un tratado sobre los grados de la escala modal."
    ]
  },
  {
    enunciado: "En los modos gregorianos, la 'Dominante' es también llamada:",
    correcta: "Cuerda de recitación.",
    incorrectas: [
      "Nota sensible.",
      "Tónica secundaria."
    ]
  },
  {
    enunciado: "El 'Kyrie Eleison' es el único canto de la misa que se conserva en:",
    correcta: "Griego.",
    incorrectas: [
      "Arameo.",
      "Hebreo."
    ]
  },
  {
    enunciado: "¿Qué es un 'Himnario'?",
    correcta: "El libro que contiene los himnos para el Oficio Divino.",
    incorrectas: [
      "Un grupo de personas que cantan himnos nacionales.",
      "La parte de la iglesia donde se guardan las partituras."
    ]
  },
  {
    enunciado: "La estructura de un Salmo termina siempre con el:",
    correcta: "Gloria Patri (Doxología).",
    incorrectas: [
      "Amén final del pueblo.",
      "Silencio del abad."
    ]
  },
  {
    enunciado: "¿Qué define a los modos 'Tritus'?",
    correcta: "Tener como nota finalis el Fa.",
    incorrectas: [
      "Tener como finalis el Do.",
      "Tener tres notas de adorno en cada frase."
    ]
  },
  {
    enunciado: "El canto gregoriano influyó en la música posterior al ser la base de:",
    correcta: "El desarrollo de la polifonía (Organum).",
    incorrectas: [
      "La invención de la ópera barroca.",
      "La creación del rock and roll."
    ]
  }
];