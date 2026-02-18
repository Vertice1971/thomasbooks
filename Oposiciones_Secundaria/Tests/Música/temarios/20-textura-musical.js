// 20-textura-musical.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define el concepto de 'Textura' en música?",
    correcta: "La forma en que se combinan los materiales melódicos, rítmicos y armónicos en una composición, determinando la densidad y el tejido sonoro.",
    incorrectas: [
      "El tacto físico de la partitura y el tipo de papel utilizado para su impresión.",
      "La velocidad a la que los músicos deben mover el arco sobre las cuerdas."
    ]
  },
  {
    enunciado: "La textura de 'Monodia' o Monofonía se caracteriza por:",
    correcta: "Una única línea melódica sin acompañamiento, independientemente de si la interpretan una o varias personas al unísono.",
    incorrectas: [
      "Dos melodías diferentes que se cruzan constantemente de forma caótica.",
      "Un coro que canta a cuatro voces con acompañamiento de órgano."
    ]
  },
  {
    enunciado: "¿Qué define a la textura 'Homofónica'?",
    correcta: "Varias voces que se mueven simultáneamente con el mismo ritmo, formando bloques de acordes (homofonía cordal).",
    incorrectas: [
      "Una sola voz que improvisa libremente sobre un tambor de madera.",
      "Voces que entran de forma escalonada imitando la melodía anterior."
    ]
  },
  {
    enunciado: "La 'Polifonía' es una textura donde:",
    correcta: "Varias líneas melódicas independientes o interdependientes suenan simultáneamente con ritmos distintos.",
    incorrectas: [
      "Todos los músicos tocan la misma nota durante toda la obra.",
      "La melodía principal es tan fuerte que impide escuchar el resto de sonidos."
    ]
  },
  {
    enunciado: "¿Cuál es la textura más común en la música pop y el periodo Clásico, donde destaca una voz clara sobre un soporte de acordes?",
    correcta: "Melodía acompañada.",
    incorrectas: [
      "Contrapunto imitativo.",
      "Heterofonía estructural."
    ]
  },
  {
    enunciado: "La 'Heterofonía' consiste en:",
    correcta: "La variación o elaboración simultánea de una misma línea melódica por varios intérpretes.",
    incorrectas: [
      "La mezcla de música grabada con instrumentos prehistóricos de hueso.",
      "Un silencio absoluto interrumpido por gritos aleatorios."
    ]
  },
  {
    enunciado: "En la polifonía, el 'Contrapunto Imitativo' ocurre cuando:",
    correcta: "Un motivo o tema expuesto por una voz es repetido posteriormente por las demás voces.",
    incorrectas: [
      "Las voces se pelean entre sí para ver quién termina antes la canción.",
      "El director imita los gestos de los músicos mientras tocan."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bordón' como tipo de textura?",
    correcta: "Una nota o intervalo de quinta que se mantiene constante (pedal) mientras se desarrolla una melodía encima.",
    incorrectas: [
      "Una técnica de percusión que consiste en golpear el borde de los tambores.",
      "El nombre que recibe el silencio que hay entre dos movimientos de una suite."
    ]
  },
  {
    enunciado: "La textura 'No melódica' o puntualista, común en algunas vanguardias del siglo XX, se basa en:",
    correcta: "Sucesiones de sonidos aislados (puntos sonoros) donde la línea melódica tradicional desaparece.",
    incorrectas: [
      "Cantar canciones infantiles sin utilizar ninguna consonante.",
      "Tocar el piano utilizando únicamente los codos y las rodillas."
    ]
  },
  {
    enunciado: "¿Qué periodo histórico se asocia con el máximo esplendor de la textura polifónica?",
    correcta: "El Renacimiento.",
    incorrectas: [
      "El Romanticismo.",
      "El Clasicismo."
    ]
  },
  {
    enunciado: "Un 'Canon' es un ejemplo estricto de textura:",
    correcta: "Polifónica imitativa.",
    incorrectas: [
      "Homofónica rítmica.",
      "Monódica acompañada."
    ]
  },
  {
    enunciado: "En la textura de 'Melodía Acompañada', ¿qué papel cumple el acompañamiento?",
    correcta: "Proporcionar el soporte armónico y rítmico que realza la línea melódica principal.",
    incorrectas: [
      "Tocar la misma melodía que el solista pero con un segundo de retraso.",
      "Hacer el mayor ruido posible para que no se escuche al cantante."
    ]
  },
  {
    enunciado: "La 'Micropolifonía', técnica desarrollada por György Ligeti, se caracteriza por:",
    correcta: "Una textura polifónica tan densa y compleja que las líneas individuales son imperceptibles, creando masas de sonido.",
    incorrectas: [
      "Utilizar instrumentos musicales de tamaño minúsculo.",
      "Hacer que solo una persona cante en un coro de cien integrantes."
    ]
  },
  {
    enunciado: "¿Qué es el 'Organum' primitivo en la historia de la textura?",
    correcta: "La primera forma de polifonía occidental, basada en añadir una voz paralela (generalmente a la cuarta o quinta) al canto gregoriano.",
    incorrectas: [
      "Un tipo de órgano de tubos que se tocaba con los pies.",
      "Un tratado médico sobre las enfermedades de los cantantes medievales."
    ]
  },
  {
    enunciado: "La textura de 'Coral' luterano es habitualmente:",
    correcta: "Homofónica (todas las voces cantan el mismo ritmo con diferentes notas).",
    incorrectas: [
      "Monódica pura (solo canta el pastor de la iglesia).",
      "Heterofónica (cada fiel inventa su propia versión de la melodía)."
    ]
  },
  {
    enunciado: "En el análisis de la textura, la 'Densidad' se refiere a:",
    correcta: "El número de voces o instrumentos que suenan simultáneamente y la amplitud del registro que ocupan.",
    incorrectas: [
      "El peso del papel de la partitura medido en gramos por metro cuadrado.",
      "La cantidad de público que cabe en la sala de conciertos."
    ]
  },
  {
    enunciado: "¿Qué textura predomina en el Canto Gregoriano?",
    correcta: "Monodia.",
    incorrectas: [
      "Contrapunto.",
      "Melodía acompañada."
    ]
  },
  {
    enunciado: "El 'Bajo Alberti' es un tipo de acompañamiento en el que los acordes se presentan como:",
    correcta: "Arpegios quebrados (grave-agudo-medio-agudo) típicos del Clasicismo.",
    incorrectas: [
      "Bloques de notas largas y pesadas sin ritmo definido.",
      "Silencios rítmicos que se tocan con los pies."
    ]
  },
  {
    enunciado: "Una textura 'Espacial' en la música contemporánea busca:",
    correcta: "Distribuir las fuentes sonoras en distintos puntos de la sala para crear una experiencia envolvente.",
    incorrectas: [
      "Componer música sobre el espacio exterior y los planetas.",
      "Tocar instrumentos mientras se flota en una piscina de agua salada."
    ]
  },
  {
    enunciado: "¿Qué es la 'Polifonía de estratos'?",
    correcta: "La superposición de diferentes capas o bloques sonoros que funcionan con independencia rítmica o métrica.",
    incorrectas: [
      "Cantar canciones sobre las diferentes capas de la tierra.",
      "Hacer que los músicos toquen subidos unos encima de otros."
    ]
  },
  {
    enunciado: "El término 'Fuga' designa una forma musical basada en una textura:",
    correcta: "Polifónica imitativa altamente compleja y estructurada.",
    incorrectas: [
      "Monódica simple con acompañamiento de tamboril.",
      "Homofónica donde todas las voces dicen lo mismo al mismo tiempo."
    ]
  },
  {
    enunciado: "En la textura de 'Melodía Acompañada', el acompañamiento puede ser:",
    correcta: "Acórdico, arpegiado, rítmico u ostinato.",
    incorrectas: [
      "Inexistente por definición, ya que la melodía siempre suena sola.",
      "Exclusivamente ruidos de la naturaleza grabados previamente."
    ]
  },
  {
    enunciado: "¿Qué es el 'Contrapunto Libre'?",
    correcta: "Polifonía donde las voces son independientes pero no se imitan necesariamente entre sí.",
    incorrectas: [
      "Música que se puede descargar de internet sin pagar nada.",
      "Tocar cualquier nota sin seguir ninguna regla de armonía."
    ]
  },
  {
    enunciado: "La 'Textura de Masas' se asocia con el concepto de:",
    correcta: "Sonorismo o música textural, donde importa más el color y la densidad global que las notas individuales.",
    incorrectas: [
      "Hacer pan mientras se escucha música de panadería.",
      "Música compuesta exclusivamente para ser escuchada por grandes multitudes."
    ]
  },
  {
    enunciado: "En el Barroco, el 'Bajo Continuo' proporcionaba una textura de:",
    correcta: "Soporte armónico constante sobre el que destacaban las voces superiores.",
    incorrectas: [
      "Silencio rítmico que interrumpía la melodía cada dos compases.",
      "Gritos aleatorios del clavecinista para animar a la orquesta."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la textura 'Aditiva'?",
    correcta: "La incorporación progresiva de capas o voces que aumentan la complejidad y densidad de la obra.",
    incorrectas: [
      "Sumar el número de compases para saber cuánto dura la pieza.",
      "Utilizar solo instrumentos que tengan forma de suma o cruz."
    ]
  },
  {
    enunciado: "La textura de un cuarteto de cuerdas clásico suele alternar entre:",
    correcta: "Melodía acompañada, homofonía y pequeños pasajes polifónicos entre los cuatro instrumentos.",
    incorrectas: [
      "Monodia pura de los cuatro instrumentos tocando siempre lo mismo.",
      "Ruidos de raspado de cuerdas sin altura definida."
    ]
  },
  {
    enunciado: "¿Qué es la 'Antifonía'?",
    correcta: "Una textura basada en el diálogo o alternancia entre dos grupos sonoros (coros o instrumentos).",
    incorrectas: [
      "Estar en contra de cualquier tipo de sonido musical.",
      "Un instrumento que suena como un teléfono antiguo."
    ]
  },
  {
    enunciado: "En la música impresionista (Debussy), la textura suele ser:",
    correcta: "Evaporada y difusa, con gran importancia de los planos sonoros y el color tímbrico.",
    incorrectas: [
      "Muy pesada y basada en marchas militares constantes.",
      "Una sola línea de flauta sin nada más durante toda la obra."
    ]
  },
  {
    enunciado: "La textura 'Monódica con bordón' es típica de:",
    correcta: "Músicas tradicionales con gaita o instrumentos de cuerda frotada populares.",
    incorrectas: [
      "Sinfonías de Beethoven para gran orquesta.",
      "Música electrónica de baile de vanguardia."
    ]
  },
  {
    enunciado: "En la polifonía, la 'Voz Principal' en el Renacimiento se llamaba a menudo:",
    correcta: "Cantus.",
    incorrectas: [
      "Líder del grupo.",
      "Micrófono uno."
    ]
  },
  {
    enunciado: "¿Qué es la 'Heterofonía de conjunto'?",
    correcta: "Cuando varios instrumentos ornamentan una melodía básica de formas ligeramente distintas al mismo tiempo.",
    incorrectas: [
      "Cuando los instrumentos se rompen todos a la vez durante el concierto.",
      "Cantar una canción en diez idiomas diferentes a la vez."
    ]
  },
  {
    enunciado: "La textura 'Saturada' se define por:",
    correcta: "Una densidad extrema que ocupa casi todo el espectro audible, frecuente en el ruido blanco o en el free jazz.",
    incorrectas: [
      "Música que suena solo cuando hay mucha humedad en el ambiente.",
      "Canciones que hablan sobre comer demasiados dulces."
    ]
  },
  {
    enunciado: "En una textura homofónica, si las voces tienen ritmos distintos pero se perciben como bloques armónicos, se llama:",
    correcta: "Homofonía no rítmica o textura acórdica.",
    incorrectas: [
      "Caos absoluto sin control docente.",
      "Monodia de grupo."
    ]
  },
  {
    enunciado: "El 'Hoquetus' (hipo) es una técnica polifónica medieval donde:",
    correcta: "La melodía se distribuye entre dos voces mediante la alternancia rápida de notas y silencios.",
    incorrectas: [
      "Los cantantes deben saltar mientras emiten sonidos agudos.",
      "Se prohíbe respirar durante más de tres minutos seguidos."
    ]
  },
  {
    enunciado: "La 'Textura transparente' es aquella en la que:",
    correcta: "Las líneas melódicas y el ritmo se perciben con absoluta claridad debido a la baja densidad.",
    incorrectas: [
      "Se utilizan instrumentos fabricados con cristal o plástico transparente.",
      "El público puede ver a través de los músicos durante la actuación."
    ]
  },
  {
    enunciado: "En la música de vanguardia, la 'Textura Aleatoria' implica:",
    correcta: "Que la combinación de las capas sonoras depende en parte del azar o de decisiones momentáneas del intérprete.",
    incorrectas: [
      "Sortear qué instrumento toca cada músico justo antes de empezar.",
      "Tirar los dados para decidir cuánto va a durar la clase de música."
    ]
  },
  {
    enunciado: "La 'Homofonía' es ideal en la música coral para:",
    correcta: "Garantizar la inteligibilidad del texto, ya que todas las voces pronuncian las sílabas al mismo tiempo.",
    incorrectas: [
      "Que los alumnos no tengan que aprender melodías diferentes.",
      "Dificultar la audición del mensaje religioso en las iglesias."
    ]
  },
  {
    enunciado: "¿Cómo se llama la textura donde una voz 'vuela' u ornamenta libremente sobre una base rítmica estricta?",
    correcta: "Melodía sobre base rítmica (típico de algunos estilos de Jazz o Flamenco).",
    incorrectas: [
      "Silencio acompañado.",
      "Ruido melódico."
    ]
  },
  {
    enunciado: "El fin de analizar la textura musical es:",
    correcta: "Comprender la organización del discurso musical y cómo los compositores generan profundidad y relieve sonoro.",
    incorrectas: [
      "Saber cuánta ropa deben llevar los músicos en el escenario.",
      "Medir la cantidad de aire que hay dentro de los instrumentos de viento."
    ]
  }
];