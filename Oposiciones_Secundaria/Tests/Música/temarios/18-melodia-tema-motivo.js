// 18-melodia-tema-motivo.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define la 'Melodía' en el contexto de la teoría musical?",
    correcta: "Una sucesión coherente de sonidos de diferente altura y duración con sentido lógico y expresivo.",
    incorrectas: [
      "La combinación simultánea de varios sonidos que forman acordes.",
      "El estudio exclusivo de la intensidad y el timbre de una nota aislada."
    ]
  },
  {
    enunciado: "El 'Motivo' o célula melódica se considera:",
    correcta: "La unidad mínima con significado musical, capaz de generar estructuras mayores mediante su desarrollo.",
    incorrectas: [
      "La sección más larga de una sinfonía que dura más de veinte minutos.",
      "El nombre que recibe el silencio final de una composición."
    ]
  },
  {
    enunciado: "¿Qué es un 'Tema' musical?",
    correcta: "Una idea melódica completa y reconocible que sirve como base para la construcción de una obra o sección.",
    incorrectas: [
      "Un adorno muy rápido que se coloca sobre una nota larga.",
      "La suma de todos los instrumentos que tocan en la orquesta."
    ]
  },
  {
    enunciado: "En el diseño melódico, un movimiento 'Conjunto' es aquel en el que las notas:",
    correcta: "Se suceden por grados inmediatos de la escala (segundas).",
    incorrectas: [
      "Se suceden mediante saltos de cuarta, quinta o mayores.",
      "Se mantienen siempre en la misma altura sin variar."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una 'Frase Musical'?",
    correcta: "Es una unidad con sentido completo, formada generalmente por dos semiperiodos (antecedente y consecuente).",
    incorrectas: [
      "Es una sola nota que se repite rítmicamente hasta el infinito.",
      "Es el texto literal que el cantante pronuncia durante el estribillo."
    ]
  },
  {
    enunciado: "La 'Articulación' melódica se refiere a:",
    correcta: "La forma de unir o separar los sonidos (legato, staccato) para dar intención al discurso.",
    incorrectas: [
      "La técnica de afinar las cuerdas del violín antes de empezar.",
      "El proceso de imprimir las partituras en papel de alta calidad."
    ]
  },
  {
    enunciado: "Una melodía 'Ascendente' es aquella que:",
    correcta: "Evoluciona desde registros graves hacia registros más agudos.",
    incorrectas: [
      "Se mantiene siempre en el mismo registro medio.",
      "Empieza muy fuerte y termina muy suave."
    ]
  },
  {
    enunciado: "El 'Ámbito' de una melodía es:",
    correcta: "La distancia o intervalo existente entre la nota más grave y la más aguda de la misma.",
    incorrectas: [
      "El número de veces que el tema principal se repite en la obra.",
      "La velocidad a la que el músico debe ejecutar los pasajes rápidos."
    ]
  },
  {
    enunciado: "¿Qué es un 'Diseño Melódico Quebrado'?",
    correcta: "Aquel que utiliza saltos interválicos frecuentes y amplios, alternando registros.",
    incorrectas: [
      "Una melodía que se interrumpe porque el músico ha cometido un error.",
      "Una línea que solo utiliza notas blancas y redondas."
    ]
  },
  {
    enunciado: "La 'Secuencia' o progresión melódica consiste en:",
    correcta: "La repetición de un motivo o diseño a diferentes alturas de la escala.",
    incorrectas: [
      "Tocar la melodía al revés, desde la última nota hasta la primera.",
      "Cambiar el timbre del instrumento cada dos compases."
    ]
  },
  {
    enunciado: "Un 'Leitmotiv' es un recurso asociado principalmente a Wagner que consiste en:",
    correcta: "Un motivo melódico recurrente asociado a un personaje, objeto o idea dramática.",
    incorrectas: [
      "Una melodía que solo pueden cantar los tenores heroicos.",
      "Un tipo de armonía basada en acordes de cuarta aumentada."
    ]
  },
  {
    enunciado: "En la articulación melódica, el 'Portato' se sitúa entre:",
    correcta: "El legato y el staccato (notas picadas pero ligadas por la expresión).",
    incorrectas: [
      "El silencio absoluto y el volumen máximo.",
      "La nota más aguda y la nota más grave del piano."
    ]
  },
  {
    enunciado: "¿Qué es la 'Melodía de Timbres' (Klangfarbenmelodie)?",
    correcta: "Una línea melódica cuyas notas se distribuyen entre diferentes instrumentos para variar el color.",
    incorrectas: [
      "Una melodía que suena igual independientemente del instrumento que la toque.",
      "Cantar una canción cambiando de idioma en cada frase."
    ]
  },
  {
    enunciado: "Un 'Adorno' melódico (o fioritura) tiene como función:",
    correcta: "Embellecer o decorar la línea melódica principal sin alterar su estructura fundamental.",
    incorrectas: [
      "Indicar al director que debe ir más rápido.",
      "Sustituir la melodía por un solo de percusión."
    ]
  },
  {
    enunciado: "La 'Cadencia' en una frase melódica funciona como:",
    correcta: "Un punto de reposo o conclusión que delimita las secciones del discurso.",
    incorrectas: [
      "Una señal para que el público empiece a aplaudir.",
      "El momento en que el cantante toma aire de forma ruidosa."
    ]
  },
  {
    enunciado: "Una melodía 'Silábica' es aquella en la que:",
    correcta: "A cada sílaba del texto le corresponde una sola nota musical.",
    incorrectas: [
      "A una sola sílaba se le asignan muchas notas diferentes (melisma).",
      "No existe texto y el cantante utiliza solo la letra 'A'."
    ]
  },
  {
    enunciado: "¿Qué es el 'Perfil Melódico'?",
    correcta: "La línea imaginaria que resulta de unir las alturas de las notas de una melodía.",
    incorrectas: [
      "La fotografía del compositor vista de lado.",
      "El listado de los instrumentos que tocan la melodía principal."
    ]
  },
  {
    enunciado: "El 'Clímax' melódico suele coincidir con:",
    correcta: "El punto de máxima tensión, frecuentemente la nota más aguda de la frase.",
    incorrectas: [
      "El silencio más largo de la obra.",
      "La primera nota del primer compás."
    ]
  },
  {
    enunciado: "En el análisis melódico, el 'Desarrollo' implica:",
    correcta: "La transformación de los motivos originales mediante variaciones rítmicas, melódicas o armónicas.",
    incorrectas: [
      "Repetir el tema exactamente igual sin cambiar ni una sola nota.",
      "Hacer que la partitura sea más grande físicamente."
    ]
  },
  {
    enunciado: "¿Qué es una melodía 'Ondulada'?",
    correcta: "Aquella que asciende y desciende suavemente por grados conjuntos.",
    incorrectas: [
      "Aquella que se toca mientras el músico se mueve de lado a lado.",
      "Una línea que solo utiliza intervalos de octava."
    ]
  },
  {
    enunciado: "La 'Inversión' de un motivo melódico consiste en:",
    correcta: "Cambiar la dirección de los intervalos (lo que subía, ahora baja y viceversa).",
    incorrectas: [
      "Intercambiar el papel del solista con el del director.",
      "Tocar la melodía con el instrumento al revés."
    ]
  },
  {
    enunciado: "El 'Acento Tónico' en una melodía es aquel que:",
    correcta: "Destaca una nota por su altura superior respecto a las demás.",
    incorrectas: [
      "Destaca una nota por ser la más fuerte de la orquesta.",
      "Se produce al final de la obra de forma explosiva."
    ]
  },
  {
    enunciado: "Una melodía 'Melismática' se caracteriza por:",
    correcta: "Cantar muchas notas sobre una misma sílaba del texto.",
    incorrectas: [
      "No tener ningún tipo de texto asociado.",
      "Cantar solo notas graves sin ninguna variación de altura."
    ]
  },
  {
    enunciado: "¿Qué es el 'Contramotivo'?",
    correcta: "Una idea secundaria que acompaña al motivo principal proporcionando contraste.",
    incorrectas: [
      "Un motivo que se toca para anular el sonido del anterior.",
      "El nombre del silencio que separa dos temas."
    ]
  },
  {
    enunciado: "En la articulación, el 'Staccatissimo' indica:",
    correcta: "Notas extremadamente cortas y secas.",
    incorrectas: [
      "Notas muy largas y pesadas.",
      "Notas que deben cantarse gritando."
    ]
  },
  {
    enunciado: "La melodía 'Infinita' es un concepto estético que busca:",
    correcta: "Evitar las cadencias claras para dar una sensación de flujo ininterrumpido.",
    incorrectas: [
      "Que una obra dure para siempre sin terminar nunca.",
      "Que los músicos no puedan parar de tocar hasta que se desmayen."
    ]
  },
  {
    enunciado: "Un diseño melódico 'Estático' es aquel que:",
    correcta: "Gira en torno a una nota central o tiene muy poco movimiento interválico.",
    incorrectas: [
      "No tiene ritmo y se basa solo en sonidos fijos.",
      "Solo puede ser escuchado si el oyente no se mueve."
    ]
  },
  {
    enunciado: "El 'Retrogradación' de un tema es:",
    correcta: "La lectura de las notas desde la última hacia la primera.",
    incorrectas: [
      "Bajar la afinación de todas las notas un semitono.",
      "Cambiar el tempo de rápido a lento de forma súbita."
    ]
  },
  {
    enunciado: "¿Qué es una 'Appoggiatura' melódica?",
    correcta: "Una nota extraña a la armonía que resuelve por grado conjunto en una nota real.",
    incorrectas: [
      "Un instrumento de percusión de origen italiano.",
      "La parte del violín donde se apoyan los dedos."
    ]
  },
  {
    enunciado: "En una frase musical, el 'Consecuente' es:",
    correcta: "La segunda mitad de la frase, que suele tener un carácter conclusivo.",
    incorrectas: [
      "La primera parte que plantea la pregunta musical.",
      "El nombre del músico que toca después del solista."
    ]
  },
  {
    enunciado: "La 'Tesitura' de una melodía se refiere a:",
    correcta: "La zona del registro (agudo, medio, grave) donde se desarrolla la mayor parte de la línea.",
    incorrectas: [
      "La velocidad a la que se debe cantar el texto.",
      "El número de bemoles que tiene la armadura."
    ]
  },
  {
    enunciado: "Un 'Pedal' melódico es:",
    correcta: "Una nota que se mantiene fija mientras el resto de la melodía o armonía cambia.",
    incorrectas: [
      "Un accesorio del piano para apagar el sonido.",
      "La última nota de la obra que se toca con el pie."
    ]
  },
  {
    enunciado: "¿Qué es el 'Arpegio' melódico?",
    correcta: "La ejecución sucesiva de las notas que componen un acorde.",
    incorrectas: [
      "Una melodía que solo utiliza notas de la escala pentatónica.",
      "El sonido que hace un arpa cuando se rompe una cuerda."
    ]
  },
  {
    enunciado: "La 'Pregunta y Respuesta' melódica es una estructura basada en:",
    correcta: "El contraste y equilibrio entre dos semicélulas o frases.",
    incorrectas: [
      "Un examen oral que el profesor hace a los músicos.",
      "Que el público debe responder cantando al solista."
    ]
  },
  {
    enunciado: "En la música contemporánea, una melodía 'Atónica' es aquella que:",
    correcta: "No tiene un centro de gravedad o tónica definida.",
    incorrectas: [
      "No utiliza ningún tipo de ritmo.",
      "Se toca sin que los instrumentos emitan ningún sonido."
    ]
  },
  {
    enunciado: "¿Qué es el 'Glissando' melódico?",
    correcta: "Un paso continuo y fluido entre dos notas de distinta altura.",
    incorrectas: [
      "Un salto muy grande de más de dos octavas.",
      "Limpiar el instrumento con un paño de seda."
    ]
  },
  {
    enunciado: "La melodía 'Circular' es aquella que:",
    correcta: "Termina en la misma nota en la que empezó, permitiendo su repetición constante.",
    incorrectas: [
      "Se toca mientras los músicos corren en círculos.",
      "Solo utiliza notas redondas."
    ]
  },
  {
    enunciado: "El 'Canto Firme' (Cantus Firmus) era una melodía que:",
    correcta: "Servía de base preexistente para la construcción de una polifonía medieval o renacentista.",
    incorrectas: [
      "Solo podían cantar los hombres con voces muy graves.",
      "Se escribía con letras muy grandes en la partitura."
    ]
  },
  {
    enunciado: "Un 'Trino' es un adorno que consiste en:",
    correcta: "La alternancia rápida entre una nota y su grado conjunto superior o inferior.",
    incorrectas: [
      "Tocar tres notas al mismo tiempo con un solo dedo.",
      "Repetir la misma nota tres veces seguidas muy fuerte."
    ]
  },
  {
    enunciado: "La articulación 'Tenuto' indica que la nota debe:",
    correcta: "Mantenerse en toda su duración con una ligera presión o énfasis.",
    incorrectas: [
      "Tocarse lo más corto posible.",
      "Ser ignorada por el intérprete."
    ]
  }
];