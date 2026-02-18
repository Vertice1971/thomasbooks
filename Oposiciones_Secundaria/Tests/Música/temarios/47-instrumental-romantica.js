// 47-instrumental-romantica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué cambio estructural en el piano del siglo XIX permitió una mayor potencia sonora y resistencia a la tensión de las cuerdas?",
    correcta: "La incorporación del bastidor o marco de hierro fundido.",
    incorrectas: [
      "El uso de teclas de madera de balsa.",
      "La eliminación total de los pedales."
    ]
  },
  {
    enunciado: "En el Romanticismo, el piano se convierte en el vehículo ideal para las 'Pequeñas Formas' o piezas de carácter, como:",
    correcta: "El Nocturno, el Preludio, la Mazurca y la Polonesa.",
    incorrectas: [
      "La Misa solemne y el Motete.",
      "La Suite de danzas barrocas."
    ]
  },
  {
    enunciado: "¿Qué compositor es conocido como el 'Liszt del violín' por llevar la técnica del instrumento a límites casi imposibles?",
    correcta: "Niccolò Paganini.",
    incorrectas: [
      "Pablo Sarasate.",
      "Fritz Kreisler."
    ]
  },
  {
    enunciado: "Los 'Estudios de ejecución trascendental' son una obra cumbre del virtuosismo para piano compuesta por:",
    correcta: "Franz Liszt.",
    incorrectas: [
      "Frédéric Chopin.",
      "Robert Schumann."
    ]
  },
  {
    enunciado: "¿Qué es un 'Poema Sinfónico' en la música instrumental romántica?",
    correcta: "Una obra para orquesta en un solo movimiento que desarrolla un programa literario o pictórico.",
    incorrectas: [
      "Una sinfonía de cinco movimientos escrita para coro sin instrumentos.",
      "Un poema escrito que se lee mientras el director de orquesta baila."
    ]
  },
  {
    enunciado: "La 'Sinfonía Fantástica' de Berlioz requiere una orquesta de grandes dimensiones e incluye instrumentos inusuales como:",
    correcta: "El oficleido (luego sustituido por la tuba), campanas y dos arpas.",
    incorrectas: [
      "Sintetizadores y guitarras eléctricas.",
      "Solo instrumentos de cuerda frotada."
    ]
  },
  {
    enunciado: "¿Qué recurso técnico utiliza Berlioz para representar a la amada en su Sinfonía Fantástica?",
    correcta: "La 'Idée Fixe' (Idea Fija), un tema melódico que reaparece en todos los movimientos.",
    incorrectas: [
      "El Bajo de Alberti constante.",
      "Un solo de triángulo de diez minutos."
    ]
  },
  {
    enunciado: "¿Qué compositor romántico destacó por sus 'Canciones sin palabras' para piano?",
    correcta: "Felix Mendelssohn.",
    incorrectas: [
      "Johannes Brahms.",
      "Richard Wagner."
    ]
  },
  {
    enunciado: "En la música de cámara romántica, el 'Quinteto con piano' suele estar formado por:",
    correcta: "Cuarteto de cuerda (2 violines, viola, cello) y piano.",
    incorrectas: [
      "Cinco pianos tocando a la vez.",
      "Piano, flauta, oboe, clarinete y fagot."
    ]
  },
  {
    enunciado: "¿Qué instrumento de viento madera, inventado hacia 1840, empezó a asomar tímidamente en la música orquestal y de banda?",
    correcta: "El Saxofón.",
    incorrectas: [
      "El Clarinete bajo.",
      "El Corno inglés."
    ]
  },
  {
    enunciado: "Johannes Brahms es considerado un compositor 'neoclásico' dentro del Romanticismo porque:",
    correcta: "Mantuvo las estructuras formales clásicas (sinfonía, sonata) pero con un lenguaje armónico y emocional romántico.",
    incorrectas: [
      "Odiaba el piano y solo escribía para arpa.",
      "Sus obras solo duran tres minutos como máximo."
    ]
  },
  {
    enunciado: "¿Qué compositor checo es famoso por su sinfonía 'Del Nuevo Mundo', que fusiona el romanticismo con raíces americanas?",
    correcta: "Antonín Dvořák.",
    incorrectas: [
      "Bedřich Smetana.",
      "Leoš Janáček."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ciclo de piano' romántico (como el 'Carnaval' de Schumann)?",
    correcta: "Un conjunto de piezas breves para piano unidas por una idea poética o temática.",
    incorrectas: [
      "Un piano que gira sobre sí mismo mientras suena.",
      "Una serie de 24 conciertos para piano y orquesta."
    ]
  },
  {
    enunciado: "El 'Concierto para violín' de Mendelssohn es innovador porque:",
    correcta: "El solista entra casi inmediatamente sin una larga introducción orquestal.",
    incorrectas: [
      "No utiliza cuerdas en el violín, se toca percutiendo la madera.",
      "El violinista debe tocar sentado en el suelo."
    ]
  },
  {
    enunciado: "¿Qué papel jugaron las 'Sociedades Filarmónicas' en el siglo XIX?",
    correcta: "Organizaron conciertos públicos, permitiendo que la música orquestal llegara a la burguesía y no solo a la nobleza.",
    incorrectas: [
      "Eran grupos secretos que prohibían la música de Beethoven.",
      "Se dedicaban exclusivamente a la fabricación de cuerdas de tripa."
    ]
  },
  {
    enunciado: "En el Romanticismo tardío, las sinfonías de Gustav Mahler se caracterizan por:",
    correcta: "Su duración extrema, el uso de plantillas orquestales gigantescas e inclusión de voces.",
    incorrectas: [
      "Ser obras muy cortas para un solo instrumento.",
      "Seguir estrictamente las reglas de Mozart sin ningún cambio."
    ]
  },
  {
    enunciado: "¿Qué compositor ruso escribió cuatro famosos conciertos para piano con un virtuosismo de gran envergadura y lirismo?",
    correcta: "Serguéi Rajmáninov.",
    incorrectas: [
      "Igor Stravinsky.",
      "Dmitri Shostakóvich."
    ]
  },
  {
    enunciado: "El 'Cuarteto de cuerda' en el Romanticismo tardío (como los de Schubert o Brahms):",
    correcta: "Se volvió más denso, explorando texturas casi sinfónicas y una gran profundidad emocional.",
    incorrectas: [
      "Desapareció por completo al ser considerado aburrido.",
      "Se tocaba solo con instrumentos electrónicos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Tratado de Instrumentación y Orquestación' de 1844, clave para los compositores románticos?",
    correcta: "Un libro de Héctor Berlioz que explicaba las posibilidades técnicas y expresivas de cada instrumento.",
    incorrectas: [
      "Un manual para aprender a afinar pianos en diez minutos.",
      "Un catálogo de precios de instrumentos de la época."
    ]
  },
  {
    enunciado: "¿Qué instrumento de metal fue perfeccionado por Richard Wagner, creando un híbrido entre la trompa y la tuba?",
    correcta: "La Tuba Wagneriana.",
    incorrectas: [
      "El Trombón de varas.",
      "La Corneta de llaves."
    ]
  },
  {
    enunciado: "El 'Concierto para piano en Si bemol menor' de Chaikovski es famoso por:",
    correcta: "Su imponente comienzo con acordes potentes en el piano y un tema lírico en las cuerdas.",
    incorrectas: [
      "Ser el primer concierto que se toca sin manos.",
      "Dudar solo cinco minutos de principio a fin."
    ]
  },
  {
    enunciado: "¿Qué es el 'Virtuosismo' en el contexto instrumental romántico?",
    correcta: "La capacidad técnica excepcional de un intérprete usada como medio de expresión emocional y asombro.",
    incorrectas: [
      "Tocar el instrumento lo más lento posible.",
      "No cometer ningún error pero tocar sin sentimientos."
    ]
  },
  {
    enunciado: "Las sonatas para piano de Chopin, a diferencia de las de Beethoven:",
    correcta: "Son más libres formalmente y están llenas de un lirismo cercano al canto.",
    incorrectas: [
      "Son mucho más cortas y sencillas.",
      "No utilizan la mano izquierda."
    ]
  },
  {
    enunciado: "¿Qué compositor nacionalista noruego escribió la suite 'Peer Gynt', originalmente música incidental para teatro?",
    correcta: "Edvard Grieg.",
    incorrectas: [
      "Jean Sibelius.",
      "Carl Nielsen."
    ]
  },
  {
    enunciado: "En la orquesta romántica, la sección de percusión se amplió incluyendo:",
    correcta: "Bombo, platos, triángulo, campanas tubulares y xilófono.",
    incorrectas: [
      "Solo los timbales clásicos.",
      "Batería moderna de jazz."
    ]
  },
  {
    enunciado: "¿Qué característica define al 'Concierto Romántico'?",
    correcta: "El equilibrio entre el diálogo orquestal y el lucimiento técnico del solista.",
    incorrectas: [
      "Que la orquesta no toca nada y solo escucha al solista.",
      "Que el solista es siempre un cantante de ópera."
    ]
  },
  {
    enunciado: "Modest Músorgski compuso 'Cuadros de una exposición' originalmente para:",
    correcta: "Piano solista (aunque es muy famosa la versión orquestal de Ravel).",
    incorrectas: [
      "Violín y arpa.",
      "Banda de viento metal."
    ]
  },
  {
    enunciado: "¿Qué es el 'Arpeggione'?",
    correcta: "Un instrumento de cuerda frotada, híbrido entre cello y guitarra, para el que Schubert escribió una famosa sonata.",
    incorrectas: [
      "Un tipo de arpa muy pequeña que se toca con los dientes.",
      "El nombre de un pedal del piano."
    ]
  },
  {
    enunciado: "Las sinfonías de Anton Bruckner destacan por su espiritualidad y su estructura basada en:",
    correcta: "Grandes bloques sonoros que crecen gradualmente, similares a los registros de un órgano.",
    incorrectas: [
      "Ritmos de baile de salón muy rápidos.",
      "Silencios que duran la mitad de la obra."
    ]
  },
  {
    enunciado: "¿Qué es una 'Rapsodia'?",
    correcta: "Una pieza instrumental de forma libre basada en temas populares o folclóricos.",
    incorrectas: [
      "Una enfermedad que afectaba a los directores de orquesta.",
      "Un tipo de partitura que se lee al revés."
    ]
  },
  {
    enunciado: "El 'Corno Inglés' adquirió gran protagonismo en el Romanticismo por su sonido:",
    correcta: "Melancólico y pastoril, destacando en solos como el del 'Nuevo Mundo' de Dvořák.",
    incorrectas: [
      "Brillante y metálico, similar a la trompeta.",
      "Extremadamente agudo y penetrante."
    ]
  },
  {
    enunciado: "Franz Liszt inventó el 'Recital de Piano', que consistía en:",
    correcta: "Un concierto íntegro dado por un solo pianista (antes eran conciertos compartidos).",
    incorrectas: [
      "Tocar el piano mientras se recita poesía en voz alta.",
      "Un examen donde los alumnos tocaban para sus profesores."
    ]
  },
  {
    enunciado: "¿Qué es el 'Scherzo' en una sinfonía romántica?",
    correcta: "El sustituto del minueto clásico, más rápido, enérgico y a veces fantástico.",
    incorrectas: [
      "El momento en que el solista se queda solo en el escenario.",
      "La parte final donde todos los músicos gritan."
    ]
  },
  {
    enunciado: "La 'Música para banda de viento' cobró importancia en el XIX debido a:",
    correcta: "Las reformas militares, el perfeccionamiento de los metales y su uso en funciones civiles.",
    incorrectas: [
      "Que eran más baratas porque no usaban cuerdas de tripa.",
      "La prohibición de los violines en los desfiles."
    ]
  },
  {
    enunciado: "¿Qué compositor español destacó en el violín y compuso las 'Danzas Españolas' para su instrumento?",
    correcta: "Pablo Sarasate.",
    incorrectas: [
      "Isaac Albéniz.",
      "Francisco Tárrega."
    ]
  },
  {
    enunciado: "El uso del 'Pedal de resonancia' en el piano romántico permitió:",
    correcta: "Crear una atmósfera de sonidos fundidos y prolongar las notas más allá de la pulsación.",
    incorrectas: [
      "Que el piano sonara como un xilófono.",
      "Cambiar la afinación del piano mientras se toca."
    ]
  },
  {
    enunciado: "¿Qué es el 'Cromatismo' en el lenguaje instrumental romántico?",
    correcta: "El uso de notas fuera de la escala mayor o menor para aumentar la tensión expresiva.",
    incorrectas: [
      "Pintar las teclas del piano de diferentes colores.",
      "Tocar solo las teclas blancas."
    ]
  },
  {
    enunciado: "La 'Sonata en Si menor' de Liszt es revolucionaria por:",
    correcta: "Su estructura en un solo movimiento gigante que integra las secciones tradicionales (forma cíclica).",
    incorrectas: [
      "No utilizar ninguna nota en Si menor.",
      "Ser tan sencilla que la puede tocar un niño."
    ]
  },
  {
    enunciado: "El 'Contrabajo' en la orquesta romántica empezó a tener independencia gracias a compositores como:",
    correcta: "Beethoven y, más tarde, Mahler y Strauss.",
    incorrectas: [
      "Vivaldi, que lo usaba siempre como solista.",
      "Mozart, que solo escribía para contrabajo."
    ]
  },
  {
    enunciado: "El fin del siglo XIX instrumental marca la transición hacia:",
    correcta: "El Impresionismo y la ruptura de la tonalidad tradicional.",
    incorrectas: [
      "La vuelta al estilo de Bach.",
      "La desaparición de la orquesta sinfónica."
    ]
  }
];