// 04-cancion-y-coro.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el componente fundamental que define a la 'Canción' como género musical?",
    correcta: "La unión indisociable de un texto poético y una línea melódica, generalmente con acompañamiento.",
    incorrectas: [
      "La ausencia total de ritmo para centrarse exclusivamente en la rima de los versos.",
      "La obligación de ser interpretada siempre por un solista sin apoyo instrumental."
    ]
  },
  {
    enunciado: "En el análisis de una canción, la estructura 'Estrófica' (A-A-A...) se caracteriza por:",
    correcta: "Repetir la misma música para las distintas estrofas del texto.",
    incorrectas: [
      "Presentar una música diferente para cada verso, sin ningún tipo de repetición.",
      "Alternar siempre una sección vocal con una sección de danza obligatoria."
    ]
  },
  {
    enunciado: "El 'Lied' romántico alemán es un tipo de canción que destaca por:",
    correcta: "La estrecha relación expresiva entre la voz y el piano, donde ambos tienen la misma importancia narrativa.",
    incorrectas: [
      "Ser una composición coral a ocho voces sin acompañamiento instrumental.",
      "Utilizar textos exclusivamente en latín sobre temas litúrgicos medievales."
    ]
  },
  {
    enunciado: "Una agrupación coral 'A Cappella' es aquella que:",
    correcta: "Interpreta música vocal sin ningún tipo de acompañamiento instrumental.",
    incorrectas: [
      "Canta exclusivamente dentro de una iglesia o capilla real.",
      "Utiliza instrumentos de percusión de metal para marcar el pulso."
    ]
  },
  {
    enunciado: "En un coro mixto estándar a cuatro voces (SATB), las siglas corresponden a:",
    correcta: "Soprano, Contralto, Tenor y Bajo.",
    incorrectas: [
      "Soprano, Agudo, Tenor y Barítono.",
      "Solo, Alto, Tenor y Bajo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Fraseo' en la interpretación de una canción?",
    correcta: "El arte de agrupar las notas en unidades de sentido musical y textual, respetando la acentuación y la respiración.",
    incorrectas: [
      "La capacidad de cantar todas las notas a la misma intensidad sin variar nunca.",
      "El número de palabras que un cantante puede pronunciar en un segundo."
    ]
  },
  {
    enunciado: "La canción 'Pop-Rock' actual suele seguir una estructura analítica basada en:",
    correcta: "Estrofa - Estribillo - Estrofa - Estribillo - Puente (Bridge) - Estribillo.",
    incorrectas: [
      "Exposición - Desarrollo - Reexposición.",
      "Un tema único que se repite 50 veces sin cambios en la letra."
    ]
  },
  {
    enunciado: "¿Qué característica debe priorizarse al elegir repertorio vocal para la secundaria?",
    correcta: "La adecuación de la tesitura a la etapa de muda vocal y la conexión temática con los intereses del alumnado.",
    incorrectas: [
      "La máxima dificultad técnica para que los alumnos se sientan desafiados.",
      "Que todas las canciones sean en idiomas desconocidos para trabajar la fonética pura."
    ]
  },
  {
    enunciado: "Un 'Canon' es una forma de agrupación vocal basada en:",
    correcta: "La imitación estricta de una melodía por diferentes voces que entran de forma escalonada.",
    incorrectas: [
      "Cantar diferentes melodías al mismo tiempo que no tienen ninguna relación entre sí.",
      "Una sola voz que canta mientras el resto del coro permanece en silencio absoluto."
    ]
  },
  {
    enunciado: "La 'Prosodia' musical en una canción se refiere a:",
    correcta: "La correcta relación entre los acentos gramaticales del texto y los acentos rítmicos de la melodía.",
    incorrectas: [
      "El análisis de los instrumentos que acompañan a la voz en el estribillo.",
      "La velocidad a la que el coro debe entrar en el escenario."
    ]
  },
  {
    enunciado: "¿Qué define a la canción de 'Autor'?",
    correcta: "Aquella donde la creación del texto y la música, y habitualmente la interpretación, recaen en la misma persona, con fuerte carga introspectiva o social.",
    incorrectas: [
      "Canciones que no tienen dueño y son propiedad del gobierno municipal.",
      "Obras instrumentales que se transforman en canciones al añadirles una batería."
    ]
  },
  {
    enunciado: "En un coro de secundaria, la voz de 'Barítono' es fundamental porque:",
    correcta: "Acoge a la mayoría de los varones que están terminando su proceso de muda vocal.",
    incorrectas: [
      "Es la voz encargada de cantar las notas más agudas de la armonía.",
      "Es la voz que siempre debe cantar más fuerte para tapar a las sopranos."
    ]
  },
  {
    enunciado: "La 'Dicción' en el canto coral es crítica para:",
    correcta: "Garantizar la inteligibilidad del texto y la homogeneidad tímbrica del grupo.",
    incorrectas: [
      "Aumentar el número de pulsaciones por minuto de los cantantes.",
      "Que el director del coro no tenga que leer la partitura."
    ]
  },
  {
    enunciado: "Una 'Canción Popular Tradicional' se caracteriza por:",
    correcta: "Su transmisión oral, autoría anónima y su vinculación con la identidad de un pueblo o comunidad.",
    incorrectas: [
      "Tener un copyright muy estricto que impide que se cante en colegios.",
      "Estar escrita siempre siguiendo las reglas del serialismo integral."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Director de Coro' durante la interpretación?",
    correcta: "Unificar el criterio interpretativo, marcar el tempo, las entradas y la dinámica expresiva.",
    incorrectas: [
      "Cantar más fuerte que los alumnos para que estos no se pierdan.",
      "Contar el dinero de las entradas mientras el coro está cantando."
    ]
  },
  {
    enunciado: "El análisis 'Armónico' de una canción busca comprender:",
    correcta: "La sucesión de acordes que sustentan la melodía y las tensiones/distensiones que generan.",
    incorrectas: [
      "El número de páginas que ocupa la partitura en el cuaderno del alumno.",
      "Si el cantante lleva la ropa del mismo color que el piano."
    ]
  },
  {
    enunciado: "La 'Canción de Gesta' medieval tenía como función principal:",
    correcta: "Narrar hazañas de héroes y sucesos históricos de forma épica y recitada.",
    incorrectas: [
      "Servir de música de fondo para que los reyes durmieran la siesta.",
      "Ser utilizada en las discotecas de la época para bailar en grupos."
    ]
  },
  {
    enunciado: "En secundaria, el canto a 'Voces Iguales' se refiere a:",
    correcta: "Coros formados exclusivamente por voces blancas (niños/as) o voces masculinas o femeninas por separado.",
    incorrectas: [
      "Que todos los alumnos deben cantar exactamente la misma nota durante toda la canción.",
      "Que todos los alumnos deben tener la misma estatura para cantar en el coro."
    ]
  },
  {
    enunciado: "¿Qué es el 'Arreglo' vocal?",
    correcta: "La adaptación de una canción original a una agrupación coral específica, distribuyendo las voces y el acompañamiento.",
    incorrectas: [
      "Reparar una partitura que se ha roto o está manchada de café.",
      "Subir el volumen de la radio cuando suena nuestra canción favorita."
    ]
  },
  {
    enunciado: "La 'Romanza' es un tipo de canción que se caracteriza por:",
    correcta: "Su carácter lírico, sentimental y su estructura habitualmente ternaria (A-B-A).",
    incorrectas: [
      "Su ritmo extremadamente rápido y agresivo propio de las danzas guerreras.",
      "Ser una canción que solo se puede cantar en el idioma rumano."
    ]
  },
  {
    enunciado: "Un indicador de buena interpretación coral es el 'Empaste', que consiste en:",
    correcta: "La fusión de las voces individuales en un sonido de grupo homogéneo donde ninguna destaca sobre las demás.",
    incorrectas: [
      "Que los alumnos coman pasta antes de salir a cantar para tener energía.",
      "Ponerse mucha gomina en el pelo para que el peinado no se mueva al cantar."
    ]
  },
  {
    enunciado: "La 'Melodía Acompañada' es la textura más común en la canción, donde:",
    correcta: "Una voz principal lleva la melodía mientras el resto de voces o instrumentos realizan el soporte armónico.",
    incorrectas: [
      "Todas las voces cantan melodías diferentes con la misma importancia (contrapunto).",
      "No existe melodía, solo un ritmo de percusión constante."
    ]
  },
  {
    enunciado: "En el análisis del texto de una canción, se debe estudiar:",
    correcta: "La rima, la métrica, las figuras retóricas y el mensaje o intención comunicativa.",
    incorrectas: [
      "El número de faltas de ortografía que cometió el copista de la partitura.",
      "El tipo de fuente de letra (Arial o Times New Roman) utilizada en el papel."
    ]
  },
  {
    enunciado: "La 'Vocalización' previa al ensayo coral sirve para:",
    correcta: "Calentar el aparato fonador, trabajar la afinación y unificar la emisión del grupo.",
    incorrectas: [
      "Que los alumnos hablen entre ellos antes de que empiece la clase seria.",
      "Gritar nombres de animales para asustar a los compañeros."
    ]
  },
  {
    enunciado: "¿Qué es un 'Coro de Cámara'?",
    correcta: "Una agrupación vocal reducida (generalmente entre 12 y 25 voces) que interpreta repertorio especializado.",
    incorrectas: [
      "Un coro que canta dentro de una cámara frigorífica para conservar la voz.",
      "Un grupo de cantantes que graban videos para cámaras de televisión."
    ]
  },
  {
    enunciado: "La canción 'Polifónica' del Renacimiento (como el madrigal) se caracteriza por:",
    correcta: "El uso del contrapunto imitativo y la descripción musical de las palabras (madrigalismos).",
    incorrectas: [
      "El uso masivo de sintetizadores y guitarras eléctricas de alta distorsión.",
      "Cantar solo una nota durante diez minutos sin variar la altura."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el 'Ritmo' en la interpretación vocal?",
    correcta: "Proporciona la estructura temporal y el 'swing' o carácter necesario para el estilo de la canción.",
    incorrectas: [
      "Es un elemento secundario que el cantante puede ignorar si tiene buena voz.",
      "Sirve únicamente para que el pianista sepa cuándo tiene que dejar de tocar."
    ]
  },
  {
    enunciado: "Un 'Ostinato' vocal en una canción de aula es:",
    correcta: "Un motivo rítmico o melódico que se repite de forma insistente como base para otras voces.",
    incorrectas: [
      "Un alumno que se empeña en cantar mal a pesar de las correcciones.",
      "La última nota de la canción que dura más de treinta segundos."
    ]
  },
  {
    enunciado: "La 'Dinámica' en la interpretación de una canción se refiere a:",
    correcta: "Las variaciones de intensidad (piano, forte, crescendo) que aportan expresividad.",
    incorrectas: [
      "La velocidad a la que los alumnos corren por el aula de música.",
      "El cambio de tono de la canción para que sea más aguda."
    ]
  },
  {
    enunciado: "En secundaria, el repertorio de 'Música Gospel' es útil para trabajar:",
    correcta: "El ritmo, la expresión corporal, el canto en grupo y la energía vocal.",
    incorrectas: [
      "La técnica del canto gregoriano del siglo IX en latín antiguo.",
      "La interpretación de óperas de Wagner de cuatro horas de duración."
    ]
  },
  {
    enunciado: "El análisis 'Contextual' de una canción implica:",
    correcta: "Situar la obra en su época histórica, estilo artístico y circunstancias del autor.",
    incorrectas: [
      "Analizar si el aula de música tiene las ventanas abiertas o cerradas.",
      "Contar cuántas personas hay en el público el día del concierto."
    ]
  },
  {
    enunciado: "La 'Agrupación Vocal' más pequeña es:",
    correcta: "El dúo.",
    incorrectas: [
      "El coro de voces graves.",
      "La orquesta sinfónica con coro masivo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sprechgesang'?",
    correcta: "Una técnica de 'canto hablado' donde se respetan los ritmos pero las alturas son aproximadas.",
    incorrectas: [
      "Una canción tradicional alemana sobre la cerveza.",
      "Cantar con la boca llena de agua para mejorar la resonancia."
    ]
  },
  {
    enunciado: "La canción 'Cuna' (nana) se caracteriza interpretativamente por:",
    correcta: "Un tempo lento, dinámica suave y ritmo balanceado que induce al balanceo.",
    incorrectas: [
      "Un volumen atronador para despertar a los vecinos del edificio.",
      "Ritmos de percusión metálica muy estridentes y rápidos."
    ]
  },
  {
    enunciado: "Un 'Coral' luterano es una forma de canción destinada a:",
    correcta: "La participación de la comunidad en el canto religioso, con estructura sencilla y homofónica.",
    incorrectas: [
      "El lucimiento exclusivo de una soprano solista con grandes agilidades.",
      "Ser interpretada por instrumentos de viento sin ninguna voz humana."
    ]
  },
  {
    enunciado: "La 'Voz Guía' en un coro escolar es:",
    correcta: "Un alumno con mayor seguridad o técnica que ayuda a mantener la afinación de su cuerda.",
    incorrectas: [
      "Un altavoz que suena con la melodía para que los alumnos no piensen.",
      "La voz del director cuando grita '¡Silencio!' antes de empezar."
    ]
  },
  {
    enunciado: "¿Qué es el 'Anacrusis' en el inicio de una canción?",
    correcta: "Una nota o grupo de notas sin acento que preceden al primer tiempo fuerte de la frase.",
    incorrectas: [
      "La última nota de la canción que se canta muy flojo.",
      "Un instrumento de percusión que suena antes de que empiece el coro."
    ]
  },
  {
    enunciado: "La 'Canción Protesta' se define analíticamente por:",
    correcta: "La primacía del texto con contenido político o social sobre la complejidad musical.",
    incorrectas: [
      "Utilizar solo acordes mayores para que la gente no se ponga triste.",
      "No tener letra y basarse solo en silbidos agresivos."
    ]
  },
  {
    enunciado: "En la interpretación coral, la 'Afinación' depende de:",
    correcta: "La audición interna, el control de la columna de aire y la escucha atenta de los demás.",
    incorrectas: [
      "El precio de la partitura que el alumno ha comprado en la librería.",
      "La cantidad de luz solar que entra en la sala de ensayo."
    ]
  },
  {
    enunciado: "El fin último de la interpretación de canciones en secundaria es:",
    correcta: "La comunicación emocional y el desarrollo de la competencia artística y social.",
    incorrectas: [
      "Que todos los alumnos saquen un 10 en el examen de solfeo.",
      "Conseguir que el centro escolar gane un concurso de televisión."
    ]
  }
];