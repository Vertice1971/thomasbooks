// 21-contrapunto.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el principio fundamental que define al 'Contrapunto'?",
    correcta: "La combinación de dos o más líneas melódicas independientes que suenan simultáneamente y mantienen su individualidad rítmica.",
    incorrectas: [
      "La sucesión de acordes que acompañan a una única melodía principal sin independencia rítmica.",
      "La imitación de los gestos del director por parte de los músicos durante un concierto."
    ]
  },
  {
    enunciado: "En el contrapunto medieval, el 'Organum Paralelo' consistía en:",
    correcta: "Añadir una voz a una distancia fija de cuarta, quinta u octava por debajo del Canto Gregoriano.",
    incorrectas: [
      "Cantar una melodía al revés mientras el resto de las voces guardan silencio.",
      "Utilizar instrumentos de percusión para marcar el pulso del coro."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Contrapunto Imitativo'?",
    correcta: "Una técnica donde un motivo o tema expuesto por una voz es repetido por las demás voces de forma sucesiva.",
    incorrectas: [
      "Cuando los músicos visten de la misma forma para parecer iguales en el escenario.",
      "La repetición exacta de un acorde de bloque por toda la orquesta."
    ]
  },
  {
    enunciado: "El 'Punctum contra punctum' hace referencia etimológicamente a:",
    correcta: "Nota contra nota.",
    incorrectas: [
      "Punto final de la melodía.",
      "Acorde contra ritmo."
    ]
  },
  {
    enunciado: "¿Cuál es la forma instrumental barroca más compleja basada íntegramente en las leyes del contrapunto imitativo?",
    correcta: "La Fuga.",
    incorrectas: [
      "La Sonata clásica.",
      "El Minué."
    ]
  },
  {
    enunciado: "En la Fuga, el 'Sujeto' es:",
    correcta: "El tema principal sobre el que se construye toda la estructura contrapuntística.",
    incorrectas: [
      "El músico que toca el instrumento más grave de la sección.",
      "El silencio que separa la exposición del desarrollo."
    ]
  },
  {
    enunciado: "El 'Contrapunto Riguroso' o de escuela, sistematizado por Fux en su 'Gradus ad Parnassum', se basa en:",
    correcta: "El estudio progresivo de cinco especies de dificultad creciente sobre un 'cantus firmus'.",
    incorrectas: [
      "La improvisación libre sin ningún tipo de regla armónica.",
      "El uso exclusivo de instrumentos de viento metal en el Renacimiento."
    ]
  },
  {
    enunciado: "¿Qué compositor es considerado la cumbre del contrapunto barroco, autor de 'El arte de la fuga'?",
    correcta: "Johann Sebastian Bach.",
    incorrectas: [
      "Wolfgang Amadeus Mozart.",
      "Ludwig van Beethoven."
    ]
  },
  {
    enunciado: "El 'Movimiento Contrario' en contrapunto ocurre cuando:",
    correcta: "Una voz asciende mientras la otra desciende.",
    incorrectas: [
      "Ambas voces se mueven en la misma dirección manteniendo el intervalo.",
      "Una voz se mantiene fija mientras la otra se mueve por saltos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Estilo Observado' (Stile Osservato) del siglo XVI?",
    correcta: "El contrapunto vocal a capella que sigue las reglas estrictas de la escuela romana de Palestrina.",
    incorrectas: [
      "Un estilo donde los músicos observan al público para ver si les gusta la obra.",
      "El uso de instrumentos electrónicos para imitar el sonido del órgano."
    ]
  },
  {
    enunciado: "En la Fuga, la 'Respuesta' es:",
    correcta: "La imitación del sujeto, generalmente transportada a la quinta superior o cuarta inferior.",
    incorrectas: [
      "La ovación que da el público al terminar el primer tema.",
      "La nota más baja que puede dar un bajo profundo."
    ]
  },
  {
    enunciado: "El 'Contrapunto Libre' se caracteriza por:",
    correcta: "Mantener la independencia de las voces pero sin seguir las reglas estrictas de consonancia y disonancia del pasado.",
    incorrectas: [
      "No tener ningún tipo de ritmo y basarse solo en el azar.",
      "Estar prohibido por las leyes de la armonía tradicional."
    ]
  },
  {
    enunciado: "¿Qué es el 'Estrecho' (Stretto) en una fuga?",
    correcta: "El momento en que las entradas del sujeto se suceden de forma más rápida, superponiéndose antes de que termine la anterior.",
    incorrectas: [
      "Un pasillo muy angosto por donde deben pasar los músicos.",
      "Cuando la música se toca muy flojo para crear tensión."
    ]
  },
  {
    enunciado: "El 'Movimiento Oblicuo' se produce cuando:",
    correcta: "Una voz permanece en una nota pedal mientras la otra voz se desplaza melódicamente.",
    incorrectas: [
      "Las dos voces se mueven hacia el centro del piano.",
      "El director mueve la batuta en diagonal."
    ]
  },
  {
    enunciado: "¿A qué se llama 'Contrapunto Invertible'?",
    correcta: "Aquel diseñado de modo que la voz superior puede pasar a ser inferior (y viceversa) sin romper las reglas de armonía.",
    incorrectas: [
      "Aquel que se toca empezando por la última nota de la partitura.",
      "Aquel que solo pueden tocar músicos zurdos."
    ]
  },
  {
    enunciado: "En el siglo XX, el 'Contrapunto Disonante' fue una técnica impulsada por:",
    correcta: "Arnold Schoenberg y la Segunda Escuela de Viena.",
    incorrectas: [
      "Franz Joseph Haydn y el Clasicismo vienés.",
      "Antonio Vivaldi y el Barroco italiano."
    ]
  },
  {
    enunciado: "El 'Cantus Firmus' es una melodía preexistente que en el contrapunto funciona como:",
    correcta: "Eje o base sobre la cual se tejen las demás voces contrapuntísticas.",
    incorrectas: [
      "Un adorno muy rápido que se hace al final de la obra.",
      "El nombre técnico de la piel que cubre los tambores medievales."
    ]
  },
  {
    enunciado: "¿Qué es un 'Canon al revés' o por retrogradación?",
    correcta: "Una voz interpreta la melodía original y la otra la interpreta desde el final hacia el principio.",
    incorrectas: [
      "Los músicos tocan sentados de espaldas al director.",
      "La melodía se canta gritando en lugar de entonando."
    ]
  },
  {
    enunciado: "El 'Contrapunto Doble' se refiere específicamente a:",
    correcta: "Un contrapunto a dos voces que es invertible.",
    incorrectas: [
      "Tocar dos instrumentos al mismo tiempo con una sola mano.",
      "Repetir la misma pieza dos veces sin descanso."
    ]
  },
  {
    enunciado: "En la técnica de 'Aumentación', las notas de la voz contrapuntística:",
    correcta: "Alargan sus duraciones respecto al original (ej. una negra pasa a ser blanca).",
    incorrectas: [
      "Se tocan mucho más fuerte que las notas de la tónica.",
      "Suben una octava de forma repentina."
    ]
  },
  {
    enunciado: "La 'Disminución' en contrapunto consiste en:",
    correcta: "Reducir proporcionalmente la duración de las notas de un tema.",
    incorrectas: [
      "Tocar con menos instrumentos para que el sonido sea débil.",
      "Bajar el volumen del piano de forma gradual."
    ]
  },
  {
    enunciado: "En el Renacimiento, el contrapunto buscaba principalmente:",
    correcta: "El equilibrio entre la independencia melódica y la eufonía (sonoridad agradable) de los intervalos.",
    incorrectas: [
      "La creación de ruidos industriales para asustar al público.",
      "Que todas las voces cantaran siempre la misma nota al unísono."
    ]
  },
  {
    enunciado: "¿Qué es el 'Contrasujeto' en una fuga?",
    correcta: "Una melodía secundaria que acompaña sistemáticamente al sujeto o a la respuesta.",
    incorrectas: [
      "Un músico que está en desacuerdo con el director.",
      "El silencio que hay entre la exposición y el episodio."
    ]
  },
  {
    enunciado: "El 'Estilo Concertato' barroco introdujo en el contrapunto:",
    correcta: "El contraste entre grupos instrumentales o entre solista y coro.",
    incorrectas: [
      "La prohibición de usar instrumentos de cuerda frotada.",
      "La obligación de tocar todas las notas en staccato."
    ]
  },
  {
    enunciado: "¿Qué intervalo era considerado la 'disonancia' más prohibida en el contrapunto estricto?",
    correcta: "El Tritono (cuarta aumentada).",
    incorrectas: [
      "La Octava justa.",
      "La Quinta justa."
    ]
  },
  {
    enunciado: "Un 'Episodio' o Divertimento en la fuga es:",
    correcta: "Una sección de transición donde no aparece el sujeto completo, sirviendo para modular o variar motivos.",
    incorrectas: [
      "El momento en que los músicos salen del escenario a descansar.",
      "Un solo de batería que no tiene nada que ver con la obra."
    ]
  },
  {
    enunciado: "El contrapunto 'Lineal' del siglo XX pone énfasis en:",
    correcta: "La independencia absoluta de las líneas, sin importar los choques armónicos resultantes.",
    incorrectas: [
      "Que todas las notas deben escribirse en una sola línea del pentagrama.",
      "Utilizar solo instrumentos que tengan forma de línea recta."
    ]
  },
  {
    enunciado: "¿Qué es un 'Motete'?",
    correcta: "Una forma vocal polifónica, generalmente religiosa, basada en el contrapunto sobre un texto latino.",
    incorrectas: [
      "Un pequeño motor que se usa para afinar órganos.",
      "Un baile rápido de la época del Clasicismo."
    ]
  },
  {
    enunciado: "En el contrapunto, el 'Movimiento Paralelo' de quintas y octavas está:",
    correcta: "Tradicionalmente prohibido en el estilo clásico por restar independencia a las voces.",
    incorrectas: [
      "Obligado en todas las composiciones a partir del siglo XVIII.",
      "Permitido solo si se toca con instrumentos de madera."
    ]
  },
  {
    enunciado: "La 'Invensión' es una forma contrapuntística breve a dos o tres voces popularizada por:",
    correcta: "J.S. Bach, con fines pedagógicos para el teclado.",
    incorrectas: [
      "Igor Stravinsky, para orquesta de jazz.",
      "Claudio Monteverdi, para el inicio de sus óperas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bajo de Alberti' en relación al contrapunto?",
    correcta: "No es contrapunto, sino un acompañamiento homofónico que marcó el declive del interés contrapuntístico en el Clasicismo.",
    incorrectas: [
      "Un tipo de contrapunto muy complejo inventado en Italia.",
      "La voz más grave de una fuga a cinco voces."
    ]
  },
  {
    enunciado: "El 'Hoquetus' medieval es una técnica contrapuntística donde:",
    correcta: "La melodía se distribuye entre voces mediante la alternancia rápida de notas y silencios.",
    incorrectas: [
      "Los cantantes deben saltar mientras emiten sonidos.",
      "Se prohíbe el uso de consonancias perfectas."
    ]
  },
  {
    enunciado: "Un 'Canon al unísono' es aquel donde:",
    correcta: "Todas las voces cantan exactamente la misma melodía empezando en la misma nota pero en tiempos distintos.",
    incorrectas: [
      "Todas las voces cantan a la vez la misma nota sin ningún desfase.",
      "La melodía se canta por una sola persona sin acompañamiento."
    ]
  },
  {
    enunciado: "En la técnica de 'Espejo', la voz contrapuntística realiza:",
    correcta: "La inversión de los intervalos de la voz principal (inversión melódica).",
    incorrectas: [
      "La misma melodía pero el músico debe mirarse en un espejo.",
      "El mismo ritmo pero con instrumentos de cristal."
    ]
  },
  {
    enunciado: "El contrapunto de 'Especies' de Fux comienza con la primera especie, que es:",
    correcta: "Nota contra nota (mismo valor rítmico en ambas voces).",
    incorrectas: [
      "Cuatro notas contra una.",
      "Notas ligadas contra un cantus firmus."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Ficta' en el contrapunto antiguo?",
    correcta: "La introducción de alteraciones no escritas para evitar intervalos prohibidos como el tritono.",
    incorrectas: [
      "Música que no existe y es inventada por el profesor.",
      "Partituras que se escriben con tinta invisible."
    ]
  },
  {
    enunciado: "El 'Madrigal' renacentista utilizaba el contrapunto para:",
    correcta: "Describir musicalmente el significado de las palabras del poema (madrigalismos).",
    incorrectas: [
      "Acompañar las danzas de los campesinos en las fiestas.",
      "Sustituir la liturgia de la misa en los días de diario."
    ]
  },
  {
    enunciado: "En la música contemporánea, el 'Puntillismo' de Webern lleva el contrapunto a:",
    correcta: "La máxima fragmentación de la línea melódica entre diferentes instrumentos.",
    incorrectas: [
      "Utilizar solo la punta del arco para tocar todas las notas.",
      "Dibujar puntos en la partitura en lugar de notas redondas."
    ]
  },
  {
    enunciado: "La 'Nota de Paso' en contrapunto es aquella que:",
    correcta: "Une dos notas reales de la armonía por grado conjunto en un tiempo débil.",
    incorrectas: [
      "Indica que el músico puede pasar de página en la partitura.",
      "Se toca solo cuando el director pasa por delante del músico."
    ]
  },
  {
    enunciado: "El 'Pedal' en una estructura contrapuntística es:",
    correcta: "Una nota larga y mantenida sobre la cual las otras voces siguen realizando contrapunto.",
    incorrectas: [
      "Una palanca que se pisa para cambiar el volumen del sonido.",
      "La última nota de la obra que siempre debe ser muy corta."
    ]
  }
];