// 39-instrumental-barroco.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la principal diferencia entre un 'Concerto Grosso' y un 'Concerto Solista'?",
    correcta: "El Grosso contrapone un grupo de solistas (concertino) a la orquesta, mientras el solista destaca a un único instrumento.",
    incorrectas: [
      "El Grosso solo utiliza instrumentos de viento y el solista solo cuerdas.",
      "El Grosso es música religiosa y el solista es música de taberna."
    ]
  },
  {
    enunciado: "¿Qué compositor italiano fijó la estructura del concerto en tres movimientos (Rápido-Lento-Rápido)?",
    correcta: "Antonio Vivaldi.",
    incorrectas: [
      "Johann Sebastian Bach.",
      "Arcangelo Corelli."
    ]
  },
  {
    enunciado: "La 'Sonata da Chiesa' (de iglesia) se diferencia de la 'Sonata da Camera' en que:",
    correcta: "La de Chiesa tiene movimientos abstractos (lento-rápido...) y la de Camera se basa en danzas.",
    incorrectas: [
      "La de Chiesa solo puede tocarse con campanas.",
      "La de Camera es exclusivamente para ser bailada por el Papa."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ritornello' en la forma de concierto barroco?",
    correcta: "Un estribillo orquestal que regresa total o parcialmente entre las intervenciones de los solistas.",
    incorrectas: [
      "El nombre técnico de la cuerda más grave del violonchelo.",
      "Un pequeño descanso para que el público aplauda."
    ]
  },
  {
    enunciado: "Los 'Conciertos de Brandeburgo' son una de las cumbres del concerto grosso, compuestos por:",
    correcta: "Johann Sebastian Bach.",
    incorrectas: [
      "Georg Friedrich Händel.",
      "Domenico Scarlatti."
    ]
  },
  {
    enunciado: "¿Qué instrumento alcanzó su máximo prestigio técnico y constructivo gracias a luthiers como Stradivari y Guarneri?",
    correcta: "El Violín.",
    incorrectas: [
      "La Flauta travesera de metal.",
      "El Clave de doble teclado."
    ]
  },
  {
    enunciado: "La 'Suite' instrumental es una sucesión de danzas que suelen compartir:",
    correcta: "La misma tonalidad y una estructura binaria (A-B).",
    incorrectas: [
      "El mismo tempo rápido de principio a fin.",
      "La obligación de ser cantadas por un coro de niños."
    ]
  },
  {
    enunciado: "¿Qué danza de la suite barroca es de origen alemán, ritmo binario y tempo moderado?",
    correcta: "Allemande.",
    incorrectas: [
      "Courante.",
      "Gigue."
    ]
  },
  {
    enunciado: "La 'Sarabande' (Zarabanda) de la suite se caracteriza por su carácter:",
    correcta: "Lento, solemne, en compás ternario y con acento en el segundo pulso.",
    incorrectas: [
      "Extremadamente rápido y de subdivisión binaria.",
      "Militar y marcial para desfiles de caballería."
    ]
  },
  {
    enunciado: "¿Qué es una 'Tocata'?",
    correcta: "Una pieza para teclado de carácter improvisatorio y virtuoso que sirve para 'tocar' (probar) el instrumento.",
    incorrectas: [
      "Un tipo de comida que se servía en los entreactos.",
      "Una danza que solo se realiza con los pies."
    ]
  },
  {
    enunciado: "El 'Clave bien temperado' de Bach demuestra las posibilidades de:",
    correcta: "Tocar en las 24 tonalidades (mayores y menores) gracias al nuevo sistema de afinación.",
    incorrectas: [
      "Utilizar el clave como instrumento de percusión golpeando la caja.",
      "Unir dos claves para que suenen como una orquesta sinfónica."
    ]
  },
  {
    enunciado: "¿Qué compositor es famoso por sus 555 sonatas para clave de un solo movimiento?",
    correcta: "Domenico Scarlatti.",
    incorrectas: [
      "Antonio Vivaldi.",
      "Jean-Philippe Rameau."
    ]
  },
  {
    enunciado: "El 'Concerto para dos violines en Re menor' es una de las obras instrumentales más famosas de:",
    correcta: "Johann Sebastian Bach.",
    incorrectas: [
      "Henry Purcell.",
      "Arcangelo Corelli."
    ]
  },
  {
    enunciado: "¿Qué es la 'Fuga' en el contexto instrumental?",
    correcta: "Una forma polifónica basada en la imitación estricta de un tema llamado sujeto.",
    incorrectas: [
      "Cuando los músicos abandonan el escenario antes de terminar.",
      "Un solo de flauta sin acompañamiento de bajo continuo."
    ]
  },
  {
    enunciado: "La 'Sonata a tre' (en trío) barroca requería en realidad a:",
    correcta: "Cuatro músicos (dos voces agudas y dos para el bajo continuo).",
    incorrectas: [
      "Tres músicos exactamente.",
      "Toda una sección de vientos de madera."
    ]
  },
  {
    enunciado: "¿Qué compositor representa el estilo francés para clave, con gran uso de ornamentos y títulos descriptivos?",
    correcta: "François Couperin.",
    incorrectas: [
      "Johann Sebastian Bach.",
      "Arcangelo Corelli."
    ]
  },
  {
    enunciado: "En el Barroco, el 'Oboe' se convirtió en un instrumento esencial de la orquesta gracias a:",
    correcta: "Los perfeccionamientos técnicos realizados en la corte de Luis XIV.",
    incorrectas: [
      "La invención de las llaves metálicas modernas.",
      "Que era el único instrumento que no se desafinaba con la humedad."
    ]
  },
  {
    enunciado: "El 'Basso Ostinato' aplicado a la música instrumental da lugar a formas como:",
    correcta: "La Chacona y la Pasacalle.",
    incorrectas: [
      "La Sonata y la Sinfonía.",
      "El Preludio y la Fuga."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ripieno' en un concerto grosso?",
    correcta: "El conjunto total de la orquesta que refuerza al pequeño grupo de solistas.",
    incorrectas: [
      "El momento de rellenar los instrumentos con aire comprimido.",
      "Un solo de timbales que indica el final de la obra."
    ]
  },
  {
    enunciado: "Arcangelo Corelli es una figura fundamental para la historia del violín por:",
    correcta: "Establecer las bases de la técnica del arco y la estructura de la sonata barroca.",
    incorrectas: [
      "Ser el primero en usar un violín eléctrico.",
      "Componer óperas de diez horas de duración."
    ]
  },
  {
    enunciado: "¿Qué instrumento de viento metal no tenía pistones y dependía de los armónicos naturales?",
    correcta: "Trompeta natural.",
    incorrectas: [
      "Trombón de varas.",
      "Tuba."
    ]
  },
  {
    enunciado: "Las 'Variaciones Goldberg' de Bach fueron escritas originalmente para:",
    correcta: "Clave con dos teclados.",
    incorrectas: [
      "Orquesta sinfónica con coro.",
      "Órgano de tubos gigante."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música para los reales fuegos de artificio' de Händel?",
    correcta: "Una suite orquestal escrita para ser interpretada al aire libre.",
    incorrectas: [
      "Una ópera sobre la invención de la pólvora.",
      "Un método para aprender a tocar la trompeta rápido."
    ]
  },
  {
    enunciado: "En la música para órgano del Barroco alemán, el 'Preludio de Coral' servía para:",
    correcta: "Introducir la melodía del himno que luego cantaría la congregación.",
    incorrectas: [
      "Avisar a los fieles de que la misa había terminado.",
      "Limpiar los tubos del órgano mediante sonidos agudos."
    ]
  },
  {
    enunciado: "El 'Estilo Concertante' se basa en el principio de:",
    correcta: "La competencia y colaboración entre diferentes grupos de instrumentos.",
    incorrectas: [
      "Que todos los músicos deben tocar siempre al unísono.",
      "El silencio absoluto de la orquesta cuando el solista desafina."
    ]
  },
  {
    enunciado: "¿Qué es un 'Consort' en la transición al Barroco inglés?",
    correcta: "Un conjunto de instrumentos, a menudo de cuerda frotada (violas).",
    incorrectas: [
      "La esposa del director de orquesta.",
      "Un tipo de danza muy lenta."
    ]
  },
  {
    enunciado: "La 'Gigue' (Giga) es la danza que suele cerrar la suite, con un ritmo:",
    correcta: "Rápido y de subdivisión ternaria.",
    incorrectas: [
      "Lento y binario.",
      "Irregular y sin pulso."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la 'Música de Cámara' barroca?",
    correcta: "Estar destinada a espacios reducidos con pocos intérpretes y un uso íntimo del bajo continuo.",
    incorrectas: [
      "Ser música que solo se toca en las cámaras de tortura.",
      "Requerir al menos cien músicos en el escenario."
    ]
  },
  {
    enunciado: "El 'Temperamento Igual' permitió a los compositores:",
    correcta: "Modular a cualquier tonalidad sin que los intervalos resultaran desagradables al oído.",
    incorrectas: [
      "Tocar más rápido sin cansarse.",
      "Eliminar el uso de sostenidos y bemoles."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bajo de Alberti'?",
    correcta: "Un acompañamiento arpegiado que, aunque típico del clasicismo, empezó a asomar a finales del barroco.",
    incorrectas: [
      "Un instrumento de viento muy grave.",
      "Un director de orquesta italiano muy bajo de estatura."
    ]
  },
  {
    enunciado: "Georg Philipp Telemann es recordado por ser uno de los compositores más:",
    correcta: "Proclíficos de la historia, con miles de obras instrumentales.",
    incorrectas: [
      "Lentos al escribir una sola partitura.",
      "Pobres, ya que nunca vendió una obra."
    ]
  },
  {
    enunciado: "¿Qué es la 'Scordatura'?",
    correcta: "Una afinación no convencional de las cuerdas del violín para obtener efectos especiales.",
    incorrectas: [
      "Cuando un músico toca todas las notas mal a propósito.",
      "La rotura de una cuerda en mitad de un concierto."
    ]
  },
  {
    enunciado: "La 'Música de Mesa' (Tafelmusik) de Telemann estaba pensada para:",
    correcta: "Acompañar banquetes y eventos sociales de la burguesía y nobleza.",
    incorrectas: [
      "Ser tocada golpeando la mesa con cubiertos.",
      "Niños que aprenden a comer mientras escuchan flautas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Estilo Galante'?",
    correcta: "Un estilo simplificado y elegante que anuncia el fin de la complejidad barroca.",
    incorrectas: [
      "El estilo más difícil y enrevesado de J.S. Bach.",
      "Música que solo se podía tocar con guantes de seda."
    ]
  },
  {
    enunciado: "El 'Acorde de Sexta Napolitana' es un recurso armónico barroco que produce:",
    correcta: "Una tensión dramática especial antes de la cadencia.",
    incorrectas: [
      "Un sonido de risa en los instrumentos de viento.",
      "El final de todas las obras de Scarlatti."
    ]
  },
  {
    enunciado: "En la música instrumental barroca, el 'Contraste' se manifiesta a través de:",
    correcta: "Dinámicas (f/p), timbres (viento/cuerda) y velocidades.",
    incorrectas: [
      "Músicos vestidos de blanco y negro solamente.",
      "Tocar siempre al mismo volumen y velocidad."
    ]
  },
  {
    enunciado: "¿Qué es un 'Pasacalle'?",
    correcta: "Una forma basada en variaciones sobre un bajo que se repetía originalmente por las calles.",
    incorrectas: [
      "Un puente que conecta dos teatros.",
      "Un silencio que se hace al cruzar una puerta."
    ]
  },
  {
    enunciado: "La 'Ofrenda Musical' de Bach es un compendio de:",
    correcta: "Cánones y fugas basados en un tema propuesto por el rey Federico el Grande.",
    incorrectas: [
      "Canciones populares para niños.",
      "Danzas de boda para la nobleza rusa."
    ]
  },
  {
    enunciado: "El fin del Barroco instrumental dio paso a una búsqueda de:",
    correcta: "Claridad, equilibrio y sencillez melódica propia del Clasicismo.",
    incorrectas: [
      "Más complejidad y polifonía que la de Bach.",
      "La desaparición de la orquesta como conjunto."
    ]
  },
  {
    enunciado: "La 'Tiorba' es un instrumento fundamental en la orquesta barroca para:",
    correcta: "Realizar el bajo continuo con una gran riqueza de armónicos graves.",
    incorrectas: [
      "Tocar melodías muy agudas y rápidas.",
      "Sustituir a los timbales en las marchas militares."
    ]
  }
];