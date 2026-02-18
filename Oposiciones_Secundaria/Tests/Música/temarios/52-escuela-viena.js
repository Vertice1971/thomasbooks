// 52-escuela-viena.js

var PREGUNTAS = [
  {
    enunciado: "¿Quiénes fueron los tres compositores que integraron la llamada Segunda Escuela de Viena?",
    correcta: "Arnold Schönberg, Alban Berg y Anton Webern.",
    incorrectas: [
      "Haydn, Mozart y Beethoven.",
      "Stravinsky, Bartók y Hindemith."
    ]
  },
  {
    enunciado: "¿Qué concepto desarrolló Arnold Schönberg para justificar el uso libre de todas las notas sin necesidad de resolución?",
    correcta: "La emancipación de la disonancia.",
    incorrectas: [
      "La dictadura del do mayor.",
      "El silencio absoluto de la orquesta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Atonalismo libre'?",
    correcta: "Música que carece de un centro tonal y donde no existe jerarquía entre las doce notas.",
    incorrectas: [
      "Música que solo utiliza las teclas blancas del piano.",
      "Música donde todas las notas deben sonar a la vez."
    ]
  },
  {
    enunciado: "¿Qué obra de Schönberg (1912) es la cumbre del expresionismo atonal y utiliza el Sprechgesang?",
    correcta: "Pierrot Lunaire.",
    incorrectas: [
      "La noche transfigurada.",
      "Sinfonía de cámara nº 1."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sprechgesang'?",
    correcta: "Un estilo de canto hablado donde se sigue el ritmo pero la altura de la nota solo se toca y se abandona.",
    incorrectas: [
      "Cantar gritando lo más fuerte posible.",
      "Cantar en un idioma inventado por el compositor."
    ]
  },
  {
    enunciado: "¿En qué consiste el sistema 'Dodecafónico' inventado por Schönberg hacia 1923?",
    correcta: "En una serie de 12 notas distintas donde ninguna puede repetirse hasta que hayan sonado las demás.",
    incorrectas: [
      "En usar solo doce instrumentos en la orquesta.",
      "En componer obras que duran exactamente doce minutos."
    ]
  },
  {
    enunciado: "La serie dodecafónica original puede transformarse de varias formas. La 'Retrogradación' consiste en:",
    correcta: "Leer la serie de atrás hacia adelante.",
    incorrectas: [
      "Poner la partitura boca abajo.",
      "Hacer que las notas suenen el doble de lento."
    ]
  },
  {
    enunciado: "La 'Inversión' de una serie dodecafónica consiste en:",
    correcta: "Cambiar los intervalos ascendentes por descendentes y viceversa (espejo).",
    incorrectas: [
      "Cambiar el piano por un violonchelo.",
      "Repetir la misma nota doce veces."
    ]
  },
  {
    enunciado: "¿Qué discípulo de Schönberg representa la vertiente más lírica y vinculada a la tradición romántica?",
    correcta: "Alban Berg.",
    incorrectas: [
      "Anton Webern.",
      "Igor Stravinsky."
    ]
  },
  {
    enunciado: "¿Qué ópera de Alban Berg es una obra maestra del atonalismo dramático sobre la degradación humana?",
    correcta: "Wozzeck.",
    incorrectas: [
      "Lulu.",
      "Tristán e Isolda."
    ]
  },
  {
    enunciado: "¿Qué discípulo de Schönberg llevó el dodecafonismo a su máxima austeridad y brevedad (estilo aforístico)?",
    correcta: "Anton Webern.",
    incorrectas: [
      "Alban Berg.",
      "Hanns Eisler."
    ]
  },
  {
    enunciado: "La técnica de Webern de repartir una melodía entre varios instrumentos para cambiar el color de cada nota se llama:",
    correcta: "Klangfarbenmelodie (Melodía de timbres).",
    incorrectas: [
      "Hoquetus medieval.",
      "Bajo de Alberti."
    ]
  },
  {
    enunciado: "¿Qué es el 'Puntillismo' en la música de Webern?",
    correcta: "Texturas basadas en notas aisladas y silencios, evitando líneas melódicas continuas.",
    incorrectas: [
      "Tocar la partitura con la punta de los dedos.",
      "Afinar el violín con un puntero láser."
    ]
  },
  {
    enunciado: "¿Qué obra de Schönberg, de estilo post-romántico, narra una historia de amor en un bosque?",
    correcta: "La noche transfigurada (Verklärte Nacht).",
    incorrectas: [
      "Un superviviente en Varsovia.",
      "Cinco piezas para orquesta."
    ]
  },
  {
    enunciado: "¿Qué es la 'Serie de la serie'?",
    correcta: "La matriz de 48 formas posibles derivadas de la serie original.",
    incorrectas: [
      "Una serie de televisión sobre músicos vieneses.",
      "Cantar la misma serie durante doce horas."
    ]
  },
  {
    enunciado: "El 'Concierto para violín' de Alban Berg es conocido con el subtítulo:",
    correcta: "A la memoria de un ángel.",
    incorrectas: [
      "El emperador.",
      "Primavera."
    ]
  },
  {
    enunciado: "¿Qué característica define la música de Webern?",
    correcta: "Obras extremadamente cortas, gran uso de silencios y control absoluto del sonido.",
    incorrectas: [
      "Sinfonías de tres horas de duración para mil músicos.",
      "Canciones populares con ritmos de baile."
    ]
  },
  {
    enunciado: "Schönberg tuvo que huir de Europa en 1933 hacia Estados Unidos debido a:",
    correcta: "El ascenso del nazismo y su condición de judío.",
    incorrectas: [
      "Una pelea con su editor musical.",
      "Un escándalo amoroso en la ópera de Viena."
    ]
  },
  {
    enunciado: "¿Qué término despectivo usó el régimen nazi para prohibir la música de la Segunda Escuela de Viena?",
    correcta: "Arte degenerado (Entartete Kunst).",
    incorrectas: [
      "Música del futuro.",
      "Arte clásico renovado."
    ]
  },
  {
    enunciado: "La obra 'Un superviviente en Varsovia' de Schönberg es una denuncia contra:",
    correcta: "El Holocausto y la barbarie nazi.",
    incorrectas: [
      "La falta de agua en las ciudades modernas.",
      "La contaminación sonora."
    ]
  },
  {
    enunciado: "La técnica de Schönberg de 'Variación en desarrollo' consiste en:",
    correcta: "Hacer que cada nuevo motivo musical derive lógicamente de lo anterior.",
    incorrectas: [
      "Cambiar la melodía de forma aleatoria lanzando dados.",
      "Repetir la misma nota mil veces hasta que cambie de color."
    ]
  },
  {
    enunciado: "¿Qué es el 'Total Cromático'?",
    correcta: "El uso de las doce notas de la escala cromática con igual peso.",
    incorrectas: [
      "Pintar todos los instrumentos de la orquesta de diferentes colores.",
      "Tocar todas las notas de un piano al mismo tiempo."
    ]
  },
  {
    enunciado: "¿Qué instrumento solía usar Webern para sus composiciones de cámara más delicadas?",
    correcta: "Instrumentos solistas en combinaciones inusuales y breves.",
    incorrectas: [
      "Grandes secciones de metales y percusión.",
      "Sintetizadores digitales de última generación."
    ]
  },
  {
    enunciado: "¿Qué obra de Alban Berg utiliza una serie dodecafónica que incluye acordes de tríadas para sonar más tonal?",
    correcta: "El Concierto para violín.",
    incorrectas: [
      "Wozzeck.",
      "Tres piezas para orquesta."
    ]
  },
  {
    enunciado: "¿Cómo influyó Webern en la música después de la Segunda Guerra Mundial?",
    correcta: "Fue el modelo principal para el nacimiento del Serialismo Integral.",
    incorrectas: [
      "Hizo que todos los compositores volvieran a escribir como Mozart.",
      "Su música fue olvidada y nunca más se tocó."
    ]
  },
  {
    enunciado: "¿Qué es la 'Serie Retrógrada de la Inversión'?",
    correcta: "Una de las 4 variaciones básicas: la inversión leída al revés.",
    incorrectas: [
      "Un error en la partitura que no se puede tocar.",
      "Una danza rápida que se baila de espaldas."
    ]
  },
  {
    enunciado: "El 'Cuarteto de cuerda nº 2' de Schönberg es histórico porque:",
    correcta: "Introduce una voz de soprano en los últimos movimientos y rompe con la tonalidad.",
    incorrectas: [
      "Es el primero escrito para instrumentos de plástico.",
      "Dura exactamente tres segundos."
    ]
  },
  {
    enunciado: "¿Qué pintor expresionista fue amigo íntimo de Schönberg e influyó en su estética?",
    correcta: "Wassily Kandinsky.",
    incorrectas: [
      "Leonardo da Vinci.",
      "Salvador Dalí."
    ]
  },
  {
    enunciado: "¿Qué significa que el dodecafonismo es un sistema 'Democrático'?",
    correcta: "Porque todas las notas tienen el mismo valor y ninguna es más importante (tónica).",
    incorrectas: [
      "Porque los músicos votan qué notas quieren tocar.",
      "Porque el público elige el final de la obra."
    ]
  },
  {
    enunciado: "¿Qué es el 'Atonalismo organizado'?",
    correcta: "Sinónimo de dodecafonismo: atonalidad bajo reglas estrictas.",
    incorrectas: [
      "Música que se toca siguiendo el horario de un reloj.",
      "Un coro que canta sin director."
    ]
  },
  {
    enunciado: "En 'Pierrot Lunaire', el protagonista es un personaje de:",
    correcta: "La Comedia del Arte.",
    incorrectas: [
      "Una película de terror de los años 20.",
      "Un videojuego moderno."
    ]
  },
  {
    enunciado: "Webern murió trágicamente en 1945 por:",
    correcta: "Un disparo accidental de un soldado estadounidense tras el toque de queda.",
    incorrectas: [
      "Una enfermedad tropical desconocida.",
      "Caerse del escenario durante un concierto."
    ]
  },
  {
    enunciado: "La obra 'Moisés y Aarón' de Schönberg es:",
    correcta: "Una ópera inacabada que explora el conflicto entre la idea y la palabra.",
    incorrectas: [
      "Un ballet sobre la historia de dos hermanos panaderos.",
      "Un solo de arpa de diez minutos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Hexacordo'?",
    correcta: "Un grupo de seis notas de la serie dodecafónica que a menudo funciona como unidad.",
    incorrectas: [
      "Un instrumento de seis cuerdas desafinadas.",
      "Una nota que suena seis veces seguidas."
    ]
  },
  {
    enunciado: "Alban Berg murió antes de terminar la orquestación del tercer acto de su ópera:",
    correcta: "Lulu.",
    incorrectas: [
      "Wozzeck.",
      "La flauta mágica."
    ]
  },
  {
    enunciado: "¿Qué papel juega el silencio en la obra de Anton Webern?",
    correcta: "Es un elemento estructural tan importante como el sonido.",
    incorrectas: [
      "No existe el silencio, es una música muy ruidosa.",
      "Es solo para que el público pueda toser."
    ]
  },
  {
    enunciado: "La Segunda Escuela de Viena influyó en la técnica de:",
    correcta: "La música de cine, para crear atmósferas de tensión y misterio.",
    incorrectas: [
      "El rock and roll de los años 50.",
      "El canto de los monjes budistas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Serie Original' (P0)?",
    correcta: "La sucesión fundamental de 12 notas elegida por el compositor para la obra.",
    incorrectas: [
      "La primera nota que se toca en el piano.",
      "El nombre del director de la escuela."
    ]
  },
  {
    enunciado: "Schönberg comparaba el dodecafonismo con:",
    correcta: "Una ley matemática que garantizaba la unidad de la obra.",
    incorrectas: [
      "Un juego de niños sin importancia.",
      "Un sistema para ganar dinero rápido."
    ]
  },
  {
    enunciado: "El fin último del estudio de la Segunda Escuela de Viena es comprender:",
    correcta: "La crisis de la tonalidad y la apertura a los nuevos lenguajes del siglo XX.",
    incorrectas: [
      "Cómo se vive en Viena durante el invierno.",
      "La biografía de los emperadores de Austria."
    ]
  }
];