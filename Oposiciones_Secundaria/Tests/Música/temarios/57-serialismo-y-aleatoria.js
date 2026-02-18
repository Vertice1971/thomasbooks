// 57-serialismo-y-aleatoria.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué movimiento surgió en los años 50 como una extensión del dodecafonismo, aplicando series a todos los parámetros musicales?",
    correcta: "Serialismo Integral.",
    incorrectas: [
      "Impresionismo tardío.",
      "Neoclasicismo estructural."
    ]
  },
  {
    enunciado: "En el Serialismo Integral, además de la altura de las notas, ¿qué otros elementos se organizan en series?",
    correcta: "Duración, intensidad y ataque (timbre).",
    incorrectas: [
      "Solo la letra de la canción.",
      "El precio de las entradas y el color de las luces."
    ]
  },
  {
    enunciado: "¿Qué compositor francés es el autor de 'El martillo sin dueño' y un líder del serialismo?",
    correcta: "Pierre Boulez.",
    incorrectas: [
      "Claude Debussy.",
      "Olivier Messiaen."
    ]
  },
  {
    enunciado: "¿Qué obra de Messiaen (1949) es considerada el primer experimento de serialización de duraciones e intensidades?",
    correcta: "Modos de valores e intensidades.",
    incorrectas: [
      "Cuarteto para el fin del tiempo.",
      "Turangalila."
    ]
  },
  {
    enunciado: "¿Qué curso de verano en Alemania se convirtió en el epicentro de la vanguardia serialista?",
    correcta: "Darmstadt.",
    incorrectas: [
      "Bayreuth.",
      "Salzburgo."
    ]
  },
  {
    enunciado: "¿Qué corriente musical introdujo el azar y la libertad del intérprete como elementos compositivos?",
    correcta: "Música Aleatoria.",
    incorrectas: [
      "Música Concreta.",
      "Serialismo Puntillista."
    ]
  },
  {
    enunciado: "¿Quién es el principal representante de la música aleatoria y la indeterminación?",
    correcta: "John Cage.",
    incorrectas: [
      "Karlheinz Stockhausen.",
      "Igor Stravinsky."
    ]
  },
  {
    enunciado: "¿Qué famosa obra de John Cage consiste en 4 minutos y 33 segundos de silencio absoluto por parte del intérprete?",
    correcta: "4'33\".",
    incorrectas: [
      "Sonatas e interludios.",
      "Music of Changes."
    ]
  },
  {
    enunciado: "El objetivo de la obra 4'33\" de John Cage es:",
    correcta: "Hacer que el espectador escuche los sonidos ambientales como parte de la obra.",
    incorrectas: [
      "Que el pianista pueda descansar durante el concierto.",
      "Protestar contra el ruido de la ciudad."
    ]
  },
  {
    enunciado: "¿Qué es la 'Forma Abierta'?",
    correcta: "Una estructura donde el orden de las secciones es decidido por el intérprete en cada ejecución.",
    incorrectas: [
      "Una partitura que no tiene portada.",
      "Tocar con todas las puertas del teatro abiertas."
    ]
  },
  {
    enunciado: "¿Qué compositor alemán aplicó el serialismo y luego exploró la aleatoriedad controlada en obras como 'Zyklen'?",
    correcta: "Karlheinz Stockhausen.",
    incorrectas: [
      "Anton Webern.",
      "Richard Strauss."
    ]
  },
  {
    enunciado: "¿Qué es el 'I Ching' en relación con la música de John Cage?",
    correcta: "Un libro de sabiduría chino que usaba para tomar decisiones compositivas mediante el azar.",
    incorrectas: [
      "Un tipo de instrumento de percusión metálico.",
      "El nombre de su gato favorito."
    ]
  },
  {
    enunciado: "¿Qué es una 'Partitura Gráfica'?",
    correcta: "Una notación que utiliza dibujos, símbolos o gráficos en lugar de pentagramas tradicionales.",
    incorrectas: [
      "Una partitura que incluye fotografías de los compositores.",
      "Un mapa para llegar al teatro."
    ]
  },
  {
    enunciado: "¿Qué obra de Stockhausen utiliza tres orquestas y tres directores situados en diferentes puntos de la sala?",
    correcta: "Gruppen.",
    incorrectas: [
      "Kontakte.",
      "Sirius."
    ]
  },
  {
    enunciado: "Witold Lutosławski utilizó el 'Aleatorismo controlado', que consiste en:",
    correcta: "Permitir libertad rítmica individual a los músicos dentro de secciones fijadas por el autor.",
    incorrectas: [
      "Dejar que el público elija los instrumentos que quiere oír.",
      "Tocar siempre las mismas notas pero muy desafinadas."
    ]
  },
  {
    enunciado: "¿Qué compositor húngaro creó la 'Micropolifonía', texturas densas de cientos de voces moviéndose independientemente?",
    correcta: "György Ligeti.",
    incorrectas: [
      "Béla Bartók.",
      "Zoltán Kodály."
    ]
  },
  {
    enunciado: "La obra 'Atmosphères' de Ligeti se caracteriza por:",
    correcta: "La ausencia de melodía, armonía y ritmo tradicionales, centrándose en masas sonoras.",
    incorrectas: [
      "Ser un solo de flauta muy sencillo.",
      "Utilizar solo ritmos de danza popular húngara."
    ]
  },
  {
    enunciado: "¿Qué es el 'Serialismo Estadístico' o Música Estocástica?",
    correcta: "Uso de cálculos de probabilidad y ordenadores para generar grandes masas de sonido.",
    incorrectas: [
      "Música que se compone contando el número de personas en el público.",
      "Un tipo de jazz muy rápido."
    ]
  },
  {
    enunciado: "¿Quién es el pionero de la música estocástica?",
    correcta: "Iannis Xenakis.",
    incorrectas: [
      "Pierre Boulez.",
      "Luciano Berio."
    ]
  },
  {
    enunciado: "¿Qué obra de Xenakis está basada en cálculos matemáticos de la teoría de gases?",
    correcta: "Pithoprakta.",
    incorrectas: [
      "Metastaseis.",
      "Nomos Alpha."
    ]
  },
  {
    enunciado: "¿Qué es el 'Teatro Musical' de vanguardia?",
    correcta: "Obras donde los músicos realizan acciones escénicas, gestos o performances además de tocar.",
    incorrectas: [
      "Ir al teatro a escuchar música clásica tradicional.",
      "Un cine donde ponen documentales de Bach."
    ]
  },
  {
    enunciado: "Mauricio Kagel es un referente del:",
    correcta: "Teatro Instrumental.",
    incorrectas: [
      "Canto gregoriano moderno.",
      "Heavy metal sinfónico."
    ]
  },
  {
    enunciado: "¿Qué son las 'Sequenzas' de Luciano Berio?",
    correcta: "Una serie de obras para instrumentos solistas que exploran todas sus posibilidades técnicas y expresivas.",
    incorrectas: [
      "Un conjunto de danzas para discoteca.",
      "Piezas que se tocan una después de otra sin pausa."
    ]
  },
  {
    enunciado: "La obra 'Sinfonia' de Berio es famosa por citar fragmentos de:",
    correcta: "La Segunda Sinfonía de Mahler y otros textos literarios.",
    incorrectas: [
      "Canciones infantiles de Disney.",
      "Anuncios de televisión de los años 60."
    ]
  },
  {
    enunciado: "¿Qué es el 'Post-serialismo'?",
    correcta: "La etapa que flexibilizó las reglas estrictas del serialismo integral buscando nuevas texturas.",
    incorrectas: [
      "Música compuesta después de que se rompieran todas las cuerdas del piano.",
      "El regreso al estilo de Mozart."
    ]
  },
  {
    enunciado: "¿Qué compositor polaco destacó por el uso de texturas sonoras extremas en 'Treno a las víctimas de Hiroshima'?",
    correcta: "Krzysztof Penderecki.",
    incorrectas: [
      "Frédéric Chopin.",
      "Henryk Górecki."
    ]
  },
  {
    enunciado: "El 'Treno' de Penderecki utiliza una notación especial para indicar:",
    correcta: "Clústeres, vibratos irregulares y efectos de sonido en las cuerdas.",
    incorrectas: [
      "Cuándo deben merendar los músicos.",
      "El precio de los instrumentos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Intuitiva' de Stockhausen?",
    correcta: "Música creada a partir de instrucciones poéticas en lugar de notas (ej. Aus den sieben Tagen).",
    incorrectas: [
      "Adivinar qué nota va a tocar el de al lado.",
      "Tocar con los ojos vendados."
    ]
  },
  {
    enunciado: "¿Qué compositor español fue un referente de la música aleatoria con su obra 'Móvil I'?",
    correcta: "Luis de Pablo.",
    incorrectas: [
      "Manuel de Falla.",
      "Joaquín Rodrigo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Happening' musical?",
    correcta: "Un evento artístico imprevisible que busca la participación o provocación del público.",
    incorrectas: [
      "Una fiesta después del concierto.",
      "Un tipo de piano que tiene luces de colores."
    ]
  },
  {
    enunciado: "La vanguardia de los años 60 exploró el 'Espacialismo', que consiste en:",
    correcta: "Distribuir a los músicos por toda la sala para envolver al público con el sonido.",
    incorrectas: [
      "Música sobre astronautas y planetas.",
      "Hacer mucho espacio entre las sillas del teatro."
    ]
  },
  {
    enunciado: "¿Qué es la 'Nueva Complejidad'?",
    correcta: "Un estilo de finales del XX con partituras extremadamente difíciles de leer e interpretar.",
    incorrectas: [
      "Un crucigrama sobre historia de la música.",
      "Tocar el piano con 20 dedos."
    ]
  },
  {
    enunciado: "Brian Ferneyhough es el principal exponente de:",
    correcta: "La Nueva Complejidad.",
    incorrectas: [
      "El Minimalismo.",
      "El Canto llano."
    ]
  },
  {
    enunciado: "En la música aleatoria, el azar puede ser 'de composición' o 'de...':",
    correcta: "Interpretación.",
    incorrectas: [
      "Venta de discos.",
      "Afinación de los instrumentos."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Silencio' en la estética de John Cage?",
    correcta: "No existe el silencio absoluto; siempre hay sonidos que se convierten en música.",
    incorrectas: [
      "Es una pérdida de tiempo que hay que evitar.",
      "Es solo para que el público no se canse."
    ]
  },
  {
    enunciado: "¿Qué compositora vanguardista rusa destacó por su misticismo y uso de texturas microtonales?",
    correcta: "Sofia Gubaidulina.",
    incorrectas: [
      "Nadia Boulanger.",
      "Clara Schumann."
    ]
  },
  {
    enunciado: "El 'Serialismo' fue criticado por algunos sectores por ser:",
    correcta: "Demasiado intelectual y alejado de la sensibilidad del público general.",
    incorrectas: [
      "Demasiado parecido a la música de baile pop.",
      "Muy fácil de componer sin estudiar."
    ]
  },
  {
    enunciado: "¿Qué es el 'Grupo Fluxus'?",
    correcta: "Un colectivo artístico interdisciplinar que realizaba acciones musicales experimentales y humorísticas.",
    incorrectas: [
      "Una marca de cuerdas de violín.",
      "Un cuarteto de viento de madera."
    ]
  },
  {
    enunciado: "La obra 'Stimmung' de Stockhausen se basa íntegramente en:",
    correcta: "El canto de armónicos sobre una sola nota fundamental.",
    incorrectas: [
      "Gritos de guerra alemanes.",
      "El sonido de motores de avión."
    ]
  },
  {
    enunciado: "El fin último de estas vanguardias radicales era:",
    correcta: "Cuestionar todos los límites de lo que consideramos 'música' y 'obra de arte'.",
    incorrectas: [
      "Hacerse millonarios vendiendo partituras.",
      "Que la música volviera a sonar como en el siglo XVIII."
    ]
  }
];