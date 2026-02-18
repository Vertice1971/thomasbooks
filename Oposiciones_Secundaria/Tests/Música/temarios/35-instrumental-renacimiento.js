// 35-instrumental-renacimiento.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué proceso histórico permitió que la música instrumental se independizara de la vocal en el Renacimiento?",
    correcta: "El desarrollo de géneros específicos basados en la técnica de cada instrumento y la evolución de la organología.",
    incorrectas: [
      "La prohibición de cantar en todos los palacios de Europa por orden papal.",
      "La invención de la electricidad para amplificar los laúdes."
    ]
  },
  {
    enunciado: "¿Qué es una 'Tablatura'?",
    correcta: "Un sistema de notación que representa gráficamente dónde colocar los dedos en el instrumento en lugar de la altura de las notas.",
    incorrectas: [
      "Un libro de leyes sobre el comportamiento de los músicos en la corte.",
      "Una técnica de canto que consiste en leer las notas al revés."
    ]
  },
  {
    enunciado: "El instrumento de cuerda pulsada más representativo del ámbito doméstico y cortesano en toda Europa (excepto España) fue:",
    correcta: "El Laúd.",
    incorrectas: [
      "El Violonchelo.",
      "El Piano de cola."
    ]
  },
  {
    enunciado: "¿Qué instrumento de fondo plano y silueta parecida a la guitarra fue el rey de la música instrumental en la España del siglo XVI?",
    correcta: "La Vihuela de mano.",
    incorrectas: [
      "La Cítara romana.",
      "El Arpa de pedales."
    ]
  },
  {
    enunciado: "¿Cómo se llama el conjunto formado por instrumentos de la misma familia pero de diferentes tamaños?",
    correcta: "Consort.",
    incorrectas: [
      "Orquesta sinfónica.",
      "Big Band."
    ]
  },
  {
    enunciado: "El 'Ricercare' es una forma instrumental para teclado o laúd que se caracteriza por:",
    correcta: "Su estilo contrapuntístico e imitativo, siendo el antecesor de la fuga.",
    incorrectas: [
      "Ser una danza muy rápida que se bailaba en las bodas campesinas.",
      "Consistir en una sola nota larga que cambia de color."
    ]
  },
  {
    enunciado: "¿Qué es la 'Canzona' instrumental?",
    correcta: "Una pieza derivada de la canción polifónica francesa (chanson), de ritmo marcado y carácter animado.",
    incorrectas: [
      "Un canto religioso para ser interpretado en latín por monjes.",
      "Un método de afinación para instrumentos de viento metal."
    ]
  },
  {
    enunciado: "La forma instrumental basada en la improvisación y el virtuosismo se denomina:",
    correcta: "Fantasía o Tiento.",
    incorrectas: [
      "Misa de réquiem.",
      "Coral luterano."
    ]
  },
  {
    enunciado: "¿Qué compositor español es la figura más importante de la música para tecla del siglo XVI?",
    correcta: "Antonio de Cabezón.",
    incorrectas: [
      "Tomás Luis de Victoria.",
      "Juan del Encina."
    ]
  },
  {
    enunciado: "El 'Obras de música para tecla, arpa y vihuela' (1578) es la colección fundamental de:",
    correcta: "Antonio de Cabezón.",
    incorrectas: [
      "Luys de Narváez.",
      "Alonso Mudarra."
    ]
  },
  {
    enunciado: "¿Qué es una 'Diferencia' en el contexto de la música instrumental española?",
    correcta: "Un conjunto de variaciones sobre un tema o una estructura armónica.",
    incorrectas: [
      "La pelea entre dos músicos por ver quién toca más fuerte.",
      "La distancia en metros entre el órgano y el altar."
    ]
  },
  {
    enunciado: "Las danzas renacentistas solían agruparse por parejas. ¿Cuál era la combinación más habitual?",
    correcta: "Pavana (lenta y binaria) y Gallarda (rápida y ternaria).",
    incorrectas: [
      "Vals y Polka.",
      "Minué y Rigodón."
    ]
  },
  {
    enunciado: "¿Qué instrumento de teclado renacentista produce el sonido mediante pequeñas láminas de metal llamadas 'tangentes'?",
    correcta: "Clavicordio.",
    incorrectas: [
      "Clave o Cémbalo.",
      "Órgano portativo."
    ]
  },
  {
    enunciado: "El 'Clave' o Espineta se diferencia del clavicordio en que sus cuerdas son:",
    correcta: "Pulsadas por un plectro (pluma) en lugar de golpeadas.",
    incorrectas: [
      "Frotadas por una rueda de madera.",
      "Tocadas con macillos de fieltro."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el instrumento de viento metal con varas, antecesor del trombón moderno?",
    correcta: "Sacabuche.",
    incorrectas: [
      "Trompa de caza.",
      "Corneta de posta."
    ]
  },
  {
    enunciado: "El 'Cornetto' o corneta renacentista es un instrumento híbrido porque:",
    correcta: "Es de madera con agujeros como una flauta, pero tiene boquilla de trompeta.",
    incorrectas: [
      "Se toca con las manos y los pies simultáneamente.",
      "Combina cuerdas de tripa con tubos de metal."
    ]
  },
  {
    enunciado: "¿Qué familia de cuerdas frotadas, con trastes y seis cuerdas, fue la más importante antes del violín?",
    correcta: "Viola da gamba.",
    incorrectas: [
      "Guitarra barroca.",
      "Contrabajo de jazz."
    ]
  },
  {
    enunciado: "El 'Broken Consort' (consort roto) es aquel formado por:",
    correcta: "Instrumentos de diferentes familias (ej. flauta, laúd y viola).",
    incorrectas: [
      "Instrumentos que están desafinados o estropeados.",
      "Músicos que han perdido el ritmo de la danza."
    ]
  },
  {
    enunciado: "¿Qué es el 'Fitzwilliam Virginal Book'?",
    correcta: "La colección más importante de música para teclado (virginal) de la Inglaterra isabelina.",
    incorrectas: [
      "Un tratado sobre cómo construir barcos de guerra.",
      "El diario personal de la reina de Inglaterra."
    ]
  },
  {
    enunciado: "¿Qué técnica consiste en adaptar una obra polifónica vocal para un instrumento solista?",
    correcta: "Intabulación.",
    incorrectas: [
      "Transposición cromática.",
      "Síncopa rítmica."
    ]
  },
  {
    enunciado: "El 'Bajón' es el instrumento de lengüeta doble antecesor de:",
    correcta: "El Fagot.",
    incorrectas: [
      "El Clarinete.",
      "La Flauta travesera."
    ]
  },
  {
    enunciado: "Las 'Variaciones sobre el Conde Claros' de Luys de Narváez son un ejemplo de:",
    correcta: "Diferencias para vihuela.",
    incorrectas: [
      "Cantigas de amigo.",
      "Ópera seria."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión era fundamental para acompañar las danzas y marchas militares?",
    correcta: "Atabal o Tamboril.",
    incorrectas: [
      "Triángulo.",
      "Castañuelas de cristal."
    ]
  },
  {
    enunciado: "El 'Pavana de España' es un tema muy utilizado en el siglo XVI para realizar:",
    correcta: "Variaciones e improvisaciones instrumentales.",
    incorrectas: [
      "Canto gregoriano solemne.",
      "Entrenamientos de esgrima."
    ]
  },
  {
    enunciado: "¿Cuál era la principal función de los instrumentos en la iglesia durante gran parte del Renacimiento?",
    correcta: "Doblar o reforzar las voces del coro polifónico.",
    incorrectas: [
      "Tocar solos de jazz durante el sermón.",
      "Sustituir al cura en los cantos litúrgicos."
    ]
  },
  {
    enunciado: "El 'Órgano de Regalía' era un órgano pequeño cuyo sonido se producía por:",
    correcta: "Lengüetas batientes de metal, con un timbre rudo y ruidoso.",
    incorrectas: [
      "Flautas de madera muy dulces.",
      "Agua que pasaba por tubos de cristal."
    ]
  },
  {
    enunciado: "¿Qué es un 'Tiento de medio registro'?",
    correcta: "Una pieza para órgano donde la mano derecha y la izquierda utilizan timbres diferentes.",
    incorrectas: [
      "Una canción que solo se toca con la mitad del teclado.",
      "Un ejercicio de respiración para los cantantes."
    ]
  },
  {
    enunciado: "Los instrumentos de viento madera 'encapsulados', como el cromorno, se caracterizan por:",
    correcta: "Que el músico no toca la lengüeta directamente con los labios.",
    incorrectas: [
      "Tener un depósito de aire como una gaita.",
      "Estar hechos íntegramente de hueso de animal."
    ]
  },
  {
    enunciado: "En la Inglaterra renacentista, los compositores de música para tecla eran conocidos como:",
    correcta: "Virginalistas.",
    incorrectas: [
      "Madrigalistas.",
      "Laudistas."
    ]
  },
  {
    enunciado: "¿Qué danza rápida y saltada de origen italiano se hizo popular a finales del siglo XVI?",
    correcta: "Saltarello.",
    incorrectas: [
      "Sarabanda.",
      "Giga."
    ]
  },
  {
    enunciado: "¿Qué es el 'Arpa de dos órdenes'?",
    correcta: "Un arpa con las cuerdas cruzadas para poder tocar notas cromáticas (sostenidos y bemoles).",
    incorrectas: [
      "Un arpa que se toca por dos personas simultáneamente.",
      "Un instrumento que tiene cuerdas solo en la parte superior."
    ]
  },
  {
    enunciado: "El 'Tratado de Glosas' (1553) de Diego Ortiz es fundamental para conocer:",
    correcta: "La ornamentación e improvisación en la viola da gamba.",
    incorrectas: [
      "La técnica de construcción de catedrales.",
      "La biografía de los reyes de España."
    ]
  },
  {
    enunciado: "¿Qué pieza instrumental servía a menudo como introducción a una obra más larga?",
    correcta: "Preludio o Toccata.",
    incorrectas: [
      "Coral.",
      "Misa."
    ]
  },
  {
    enunciado: "La 'Vihuela de arco' evolucionó en el Renacimiento hacia:",
    correcta: "La familia de las violas (da gamba y da braccio).",
    incorrectas: [
      "La guitarra eléctrica.",
      "El piano moderno."
    ]
  },
  {
    enunciado: "El 'Bajoncillo' era la versión aguda del bajón y se utilizaba para:",
    correcta: "Acompañar las voces de tiple o alto en las procesiones.",
    incorrectas: [
      "Tocar notas muy graves que hacían vibrar el suelo.",
      "Afilar las cañas de los oboes."
    ]
  },
  {
    enunciado: "Los instrumentos de metal (trompetas y sacabuches) se reservaban habitualmente para:",
    correcta: "Actos ceremoniales, festividades religiosas y eventos militares.",
    incorrectas: [
      "Dormir a los niños por la noche.",
      "Tocar música de cámara en bibliotecas silenciosas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Glosada'?",
    correcta: "La práctica de añadir notas rápidas y adornos a una melodía sencilla.",
    incorrectas: [
      "Escribir comentarios en los márgenes de la partitura.",
      "Cambiar el idioma del texto de la canción."
    ]
  },
  {
    enunciado: "La 'Chirimía' es el antecesor renacentista de:",
    correcta: "El Oboe.",
    incorrectas: [
      "La Flauta dulce.",
      "El Clarinete."
    ]
  },
  {
    enunciado: "¿Qué forma instrumental renacentista se basa en la repetición de un esquema armónico?",
    correcta: "Passamezzo o Romanesca.",
    incorrectas: [
      "Fuga.",
      "Sinfonía."
    ]
  },
  {
    enunciado: "El fin último del desarrollo instrumental en el Renacimiento fue:",
    correcta: "Dotar a los instrumentos de un lenguaje propio, rico y expresivo, igual al de la voz humana.",
    incorrectas: [
      "Lograr que los instrumentos sonaran lo más fuerte posible para asustar al enemigo.",
      "Eliminar la necesidad de que los músicos estudiaran teoría musical."
    ]
  }
];