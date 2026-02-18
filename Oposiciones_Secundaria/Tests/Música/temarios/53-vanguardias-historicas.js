// 53-vanguardias-historicas.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué movimiento artístico italiano de principios del XX exaltaba la máquina, la velocidad y el ruido industrial?",
    correcta: "El Futurismo.",
    incorrectas: [
      "El Romanticismo.",
      "El Neoclasicismo."
    ]
  },
  {
    enunciado: "¿Quién escribió el manifiesto 'El arte de los ruidos' (L'arte dei rumori) en 1913?",
    correcta: "Luigi Russolo.",
    incorrectas: [
      "Filippo Tommaso Marinetti.",
      "Igor Stravinsky."
    ]
  },
  {
    enunciado: "¿Cómo se llamaban los instrumentos mecánicos creados por Russolo para generar ruidos específicos?",
    correcta: "Intonarumori.",
    incorrectas: [
      "Sintetizadores.",
      "Ondas Martenot."
    ]
  },
  {
    enunciado: "El Futurismo musical defendía que la orquesta tradicional debía ser sustituida por:",
    correcta: "Los sonidos de la vida urbana y las fábricas.",
    incorrectas: [
      "Coros de monjes medievales.",
      "Silencio absoluto."
    ]
  },
  {
    enunciado: "¿Qué movimiento buscaba el absurdo, la provocación y el rechazo a toda lógica artística convencional?",
    correcta: "El Dadaísmo.",
    incorrectas: [
      "El Impresionismo.",
      "El Serialismo."
    ]
  },
  {
    enunciado: "¿Qué compositor francés, vinculado al espíritu dadá, escribió música para ser ignorada llamada 'Música de mobiliario'?",
    correcta: "Erik Satie.",
    incorrectas: [
      "Claude Debussy.",
      "Francis Poulenc."
    ]
  },
  {
    enunciado: "Las 'Gymnopédies' de Erik Satie se caracterizan por:",
    correcta: "Su extrema sencillez, estatismo y rechazo a la retórica romántica.",
    incorrectas: [
      "Ser obras extremadamente rápidas y ruidosas.",
      "Utilizar grandes coros y orquestas."
    ]
  },
  {
    enunciado: "¿Qué grupo de compositores franceses buscó una música clara, popular y despojada de la densidad wagneriana?",
    correcta: "Les Six (Los Seis).",
    incorrectas: [
      "La Segunda Escuela de Viena.",
      "El Grupo de los Cinco."
    ]
  },
  {
    enunciado: "¿Cuál de estos compositores NO pertenecía al grupo de 'Los Seis'?",
    correcta: "Maurice Ravel.",
    incorrectas: [
      "Darius Milhaud.",
      "Arthur Honegger."
    ]
  },
  {
    enunciado: "¿Qué obra de Arthur Honegger imita musicalmente el movimiento de una locomotora de vapor?",
    correcta: "Pacific 231.",
    incorrectas: [
      "El buey sobre el tejado.",
      "Parade."
    ]
  },
  {
    enunciado: "¿Qué ballet de Erik Satie (1917) incorporó ruidos de máquinas de escribir, sirenas y pistolas?",
    correcta: "Parade.",
    incorrectas: [
      "El Cascanueces.",
      "La consagración de la primavera."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Maquinista'?",
    correcta: "Obras que imitan rítmicamente el funcionamiento de las máquinas o celebran la tecnología.",
    incorrectas: [
      "Música compuesta por robots inteligentes.",
      "Música que solo se escucha en los talleres mecánicos."
    ]
  },
  {
    enunciado: "Edgard Varèse es un pionero de la vanguardia por su concepto de:",
    correcta: "Sonido organizado.",
    incorrectas: [
      "Melodía infinita.",
      "Bajo continuo."
    ]
  },
  {
    enunciado: "¿Qué obra de Varèse de 1931 está escrita exclusivamente para un gran conjunto de percusión y sirenas?",
    correcta: "Ionisation.",
    incorrectas: [
      "Amériques.",
      "Hyperprism."
    ]
  },
  {
    enunciado: "¿Qué instrumento electrónico temprano, que se toca sin contacto físico, fue inventado en esta época?",
    correcta: "Theremín.",
    incorrectas: [
      "Órgano Hammond.",
      "Moog."
    ]
  },
  {
    enunciado: "El 'Ballet Mecánico' (1924) de George Antheil incluía en su instrumentación:",
    correcta: "Hélices de avión, timbres eléctricos y pianos mecánicos.",
    incorrectas: [
      "Solo flautas dulces y arpas.",
      "Un coro de mil personas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Politonismo'?",
    correcta: "El uso simultáneo de dos o más tonalidades diferentes.",
    incorrectas: [
      "Tocar en una tonalidad que no tiene notas.",
      "Cantar en varios idiomas a la vez."
    ]
  },
  {
    enunciado: "Darius Milhaud utilizó el jazz y la politonalidad en su ballet inspirado en la creación del mundo:",
    correcta: "La Création du monde.",
    incorrectas: [
      "El buey sobre el tejado.",
      "Scaramouche."
    ]
  },
  {
    enunciado: "¿Qué compositor estadounidense experimental inventó el 'Piano preparado'?",
    correcta: "John Cage (a finales de los años 30).",
    incorrectas: [
      "Charles Ives.",
      "George Gershwin."
    ]
  },
  {
    enunciado: "¿En qué consiste 'preparar' un piano?",
    correcta: "En introducir objetos (tornillos, gomas) entre las cuerdas para alterar su timbre.",
    incorrectas: [
      "En afinarlo perfectamente antes de cada concierto.",
      "En pintarlo de colores brillantes."
    ]
  },
  {
    enunciado: "¿Qué compositor es famoso por sus experimentos con la polirritmia y el uso de múltiples bandas tocando a la vez?",
    correcta: "Charles Ives.",
    incorrectas: [
      "Aaron Copland.",
      "Samuel Barber."
    ]
  },
  {
    enunciado: "La obra 'The Unanswered Question' de Charles Ives utiliza:",
    correcta: "Tres capas musicales independientes que no coinciden en ritmo ni tonalidad.",
    incorrectas: [
      "Un solo de triángulo de 40 minutos.",
      "Una melodía de Beethoven tocada al revés."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bruitismo'?",
    correcta: "La incorporación de ruidos no musicales en la composición artística.",
    incorrectas: [
      "Un estilo de canto muy rudo y agresivo.",
      "Música que se toca solo con la fuerza de los brazos."
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo el Cabaret Voltaire en Zúrich?",
    correcta: "Fue la cuna del Dadaísmo, donde se realizaban poemas fonéticos y música absurda.",
    incorrectas: [
      "Era una escuela de ópera italiana.",
      "Era donde se fabricaban los violines de la orquesta nacional."
    ]
  },
  {
    enunciado: "¿Qué son las 'Ondas Martenot'?",
    correcta: "Un instrumento electrónico con un teclado y un anillo, usado por Messiaen y otros vanguardistas.",
    incorrectas: [
      "Ondas de radio que se escuchaban en el espacio.",
      "Un tipo de danza con cintas de colores."
    ]
  },
  {
    enunciado: "Henry Cowell introdujo en la música para piano el 'Tone Cluster', que es:",
    correcta: "Un bloque de notas adyacentes tocadas con la palma de la mano o el antebrazo.",
    incorrectas: [
      "Tocar el piano con los pies.",
      "Un tipo de afinación muy aguda."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Concreta' (cuyos antecedentes están en estas vanguardias)?",
    correcta: "Música producida a partir de sonidos grabados de la realidad.",
    incorrectas: [
      "Música que se toca sobre bloques de cemento.",
      "Música que tiene una forma muy rígida."
    ]
  },
  {
    enunciado: "¿Qué compositor ruso exploró el 'Primitivismo' en su obra 'La Consagración de la Primavera'?",
    correcta: "Igor Stravinsky.",
    incorrectas: [
      "Piotr Chaikovski.",
      "Modest Músorgski."
    ]
  },
  {
    enunciado: "El Primitivismo se caracteriza por:",
    correcta: "Ritmos obsesivos, acentos irregulares y una vuelta a lo elemental.",
    incorrectas: [
      "El uso de pelucas y trajes del siglo XVIII.",
      "La sencillez de la melodía acompañada clásica."
    ]
  },
  {
    enunciado: "¿Qué es el 'Microtonalismo'?",
    correcta: "El uso de intervalos más pequeños que el semitono (cuartos de tono, etc.).",
    incorrectas: [
      "Tocar instrumentos muy pequeños.",
      "Música que solo dura unos pocos segundos."
    ]
  },
  {
    enunciado: "¿Qué compositor checo experimentó con el microtonalismo y construyó pianos especiales?",
    correcta: "Alois Hába.",
    incorrectas: [
      "Leoš Janáček.",
      "Bohuslav Martinů."
    ]
  },
  {
    enunciado: "¿Qué es el 'Radioclasicismo'?",
    correcta: "Música compuesta específicamente para ser transmitida por la radio, aprovechando su tecnología.",
    incorrectas: [
      "Escuchar música clásica en la radio del coche.",
      "Un tipo de piano que funciona con antenas."
    ]
  },
  {
    enunciado: "¿Qué obra de Varèse utiliza el espacio físico como elemento compositivo situando músicos en diferentes lugares?",
    correcta: "Amériques.",
    incorrectas: [
      "Density 21.5.",
      "Déserts."
    ]
  },
  {
    enunciado: "El movimiento 'Gebrauchsmusik' (Música para el uso) de Paul Hindemith defendía:",
    correcta: "Una música con función social, accesible y para ser tocada por aficionados.",
    incorrectas: [
      "Música que solo se podía tocar una vez y luego debía tirarse.",
      "Música que servía para arreglar máquinas rotas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Urbanismo' musical?",
    correcta: "La representación sonora del caos y la energía de las grandes ciudades modernas.",
    incorrectas: [
      "Música que se toca solo en edificios altos.",
      "Construir instrumentos con materiales de construcción."
    ]
  },
  {
    enunciado: "¿Qué compositora vanguardista estadounidense utilizó 'clusters' y una estética radical en los años 20?",
    correcta: "Ruth Crawford Seeger.",
    incorrectas: [
      "Nadia Boulanger.",
      "Amy Beach."
    ]
  },
  {
    enunciado: "¿Qué es la 'Atonalidad' en el contexto de las vanguardias?",
    correcta: "La liberación total de las reglas de la armonía tradicional.",
    incorrectas: [
      "Cantar siempre desafinado a propósito.",
      "No usar instrumentos de cuerda."
    ]
  },
  {
    enunciado: "Las vanguardias históricas terminaron abruptamente con:",
    correcta: "El estallido de la Segunda Guerra Mundial y el auge de los totalitarismos.",
    incorrectas: [
      "La invención del gramófono.",
      "El regreso a la polifonía del Renacimiento."
    ]
  },
  {
    enunciado: "¿Qué es la 'Estética del choque'?",
    correcta: "Provocar una reacción violenta o de sorpresa en el público mediante la música.",
    incorrectas: [
      "Hacer chocar los instrumentos entre sí durante la obra.",
      "Un tipo de danza con coches reales."
    ]
  },
  {
    enunciado: "El fin de estas vanguardias dio paso a una época de:",
    correcta: "Experimentación tecnológica extrema (electrónica y serialismo integral).",
    incorrectas: [
      "Silencio absoluto en todo el mundo.",
      "Música solo para coros infantiles."
    ]
  }
];