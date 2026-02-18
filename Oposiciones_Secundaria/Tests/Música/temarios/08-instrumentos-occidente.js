// 08-instrumentos-occidente.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál fue el instrumento de teclado y cuerda pulsada predominante durante el Renacimiento y el Barroco, antes de la hegemonía del piano?",
    correcta: "El clave o clavicémbalo.",
    incorrectas: [
      "El sintetizador analógico.",
      "El armonio de fuelle manual."
    ]
  },
  {
    enunciado: "En la orquesta clásica del siglo XVIII (Haydn, Mozart), ¿qué sección constituía el núcleo principal y más numeroso?",
    correcta: "La sección de cuerda frotada (violines, violas, cellos y contrabajos).",
    incorrectas: [
      "La sección de percusión metálica y parches.",
      "El grupo de maderas con saxofones y clarinetes contrabajos."
    ]
  },
  {
    enunciado: "¿Qué agrupación de cámara está compuesta por dos violines, una viola y un violonchelo?",
    correcta: "Cuarteto de cuerda.",
    incorrectas: [
      "Trío con piano.",
      "Quinteto de viento metal."
    ]
  },
  {
    enunciado: "Durante la Edad Media, el antecesor del oboe moderno que se caracterizaba por su sonido potente y boquilla de lengüeta doble era:",
    correcta: "La chirimía.",
    incorrectas: [
      "La flauta de Pan.",
      "El clarinete bajo."
    ]
  },
  {
    enunciado: "La incorporación de los 'pistones' o 'válvulas' en los instrumentos de viento metal durante el siglo XIX permitió:",
    correcta: "Ejecutar escalas cromáticas completas con mayor agilidad y precisión.",
    incorrectas: [
      "Reducir el peso del instrumento para poder tocarlo mientras se corre.",
      "Eliminar la necesidad de que el músico sople para producir sonido."
    ]
  },
  {
    enunciado: "¿Qué instrumento de cuerda frotada de la época barroca poseía trastes y se sostenía entre las piernas?",
    correcta: "Viola da gamba.",
    incorrectas: [
      "Violín de brazo.",
      "Viola d'amore."
    ]
  },
  {
    enunciado: "En una orquesta sinfónica moderna, ¿cuál es el instrumento de madera que suele dar el 'La' para la afinación general?",
    correcta: "El oboe.",
    incorrectas: [
      "La flauta travesera.",
      "El fagot."
    ]
  },
  {
    enunciado: "El 'Basso Continuo' (Bajo Continuo) barroco era una agrupación que habitualmente combinaba:",
    correcta: "Un instrumento melódico grave (cello, fagot, viola da gamba) y un instrumento polifónico (clave, órgano, laúd).",
    incorrectas: [
      "Cinco trompetas naturales y un bombo orquestal.",
      "Únicamente voces femeninas de soprano y contralto."
    ]
  },
  {
    enunciado: "¿Qué agrupación instrumental se caracteriza por estar formada exclusivamente por instrumentos de viento y percusión?",
    correcta: "Banda de música.",
    incorrectas: [
      "Orquesta de cámara.",
      "Consort de flautas."
    ]
  },
  {
    enunciado: "El antepasado del piano, inventado por Bartolomeo Cristofori hacia 1700, se denominó originalmente:",
    correcta: "Gravicembalo col piano e forte.",
    incorrectas: [
      "Clavicordio de percusión neumática.",
      "Espineta de doble teclado."
    ]
  },
  {
    enunciado: "Un 'Quinteto de Viento Madera' estándar está integrado por:",
    correcta: "Flauta, oboe, clarinete, fagot y trompa.",
    incorrectas: [
      "Flauta, clarinete, saxofón, trompeta y tuba.",
      "Dos violines, viola, cello y piano."
    ]
  },
  {
    enunciado: "En el periodo Romántico, la orquesta experimentó un crecimiento masivo gracias a compositores como:",
    correcta: "Berlioz, Wagner y Mahler.",
    incorrectas: [
      "Vivaldi y Corelli.",
      "Palestrina y Victoria."
    ]
  },
  {
    enunciado: "¿Qué instrumento medieval de cuerda pulsada tiene forma de media pera y fue introducido en Europa a través de la cultura árabe?",
    correcta: "El laúd.",
    incorrectas: [
      "La zanfona.",
      "El salterio."
    ]
  },
  {
    enunciado: "La familia de los saxofones fue inventada en el siglo XIX por Adolphe Sax con el objetivo de:",
    correcta: "Crear un instrumento que equilibrara la potencia de los metales con la agilidad de las maderas.",
    incorrectas: [
      "Sustituir a todos los violines de la orquesta sinfónica.",
      "Ser utilizado exclusivamente en ceremonias religiosas al aire libre."
    ]
  },
  {
    enunciado: "En la disposición estándar de una orquesta sinfónica, los instrumentos de percusión se sitúan:",
    correcta: "Al fondo de la orquesta, debido a su gran potencia sonora.",
    incorrectas: [
      "Justo al lado del director para que no se pierdan.",
      "Debajo del escenario para reducir el ruido."
    ]
  },
  {
    enunciado: "¿Qué instrumento del Barroco producía sonido al frotar una rueda contra las cuerdas, accionada por una manivela?",
    correcta: "La zanfona.",
    incorrectas: [
      "El rabel.",
      "La fídula."
    ]
  },
  {
    enunciado: "La diferencia principal entre una 'Orquesta de Cámara' y una 'Orquesta Sinfónica' es:",
    correcta: "El número de integrantes y la dimensión del repertorio (más reducido en la de cámara).",
    incorrectas: [
      "Que en la de cámara no se permiten instrumentos de madera.",
      "Que la sinfónica no utiliza director."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión de la orquesta tiene parches cuya tensión se puede regular con pedales para cambiar de nota?",
    correcta: "Timbales.",
    incorrectas: [
      "Caja clara.",
      "Xilófono."
    ]
  },
  {
    enunciado: "Un 'Trío con piano' clásico está formado por:",
    correcta: "Piano, violín y violonchelo.",
    incorrectas: [
      "Tres pianos tocando simultáneamente.",
      "Piano, flauta y clarinete."
    ]
  },
  {
    enunciado: "Las 'Trompetas Naturales' utilizadas antes del siglo XIX se caracterizaban por:",
    correcta: "No tener válvulas ni pistones, pudiendo tocar solo las notas de la serie armónica.",
    incorrectas: [
      "Estar fabricadas con madera de roble barnizada.",
      "Tener un sonido tan suave que no se escuchaba en exteriores."
    ]
  },
  {
    enunciado: "¿A qué familia pertenece el 'Corno Inglés'?",
    correcta: "Viento madera (lengüeta doble).",
    incorrectas: [
      "Viento metal (boquilla de copa).",
      "Percusión de láminas afinadas."
    ]
  },
  {
    enunciado: "En el siglo XX, la orquesta incorporó frecuentemente instrumentos provenientes del ámbito popular como:",
    correcta: "El piano (como instrumento orquestal), el saxofón y una percusión mucho más variada.",
    incorrectas: [
      "El órgano de iglesia exclusivamente.",
      "Solo instrumentos de la época medieval para sonar antiguo."
    ]
  },
  {
    enunciado: "El 'Arpa' moderna de concierto utiliza un sistema de pedales para:",
    correcta: "Modificar la tensión de las cuerdas y poder tocar en todas las tonalidades (alteraciones).",
    incorrectas: [
      "Aumentar el volumen del sonido como si fuera un amplificador.",
      "Sujetar el instrumento para que no se caiga hacia adelante."
    ]
  },
  {
    enunciado: "¿Qué es un 'Consort' instrumental, término común en el Renacimiento?",
    correcta: "Una agrupación de instrumentos de la misma familia y diferentes tamaños (ej. consort de flotas de pico).",
    incorrectas: [
      "Un concierto donde solo toca un solista sin nadie más.",
      "El nombre técnico de la funda donde se guardan los violines."
    ]
  },
  {
    enunciado: "El 'Fagot' es el instrumento encargado de cubrir el registro:",
    correcta: "Grave de la familia de viento madera.",
    incorrectas: [
      "Agudo y brillante de la orquesta sinfónica.",
      "Intermedio entre la trompeta y el trombón."
    ]
  },
  {
    enunciado: "En la música del Clasicismo, el piano sustituyó al clave principalmente porque:",
    correcta: "Permitía realizar gradaciones dinámicas (crescendo y diminuendo) según la fuerza del dedo.",
    incorrectas: [
      "Ocupaba menos espacio en los salones de la aristocracia.",
      "Sus cuerdas eran de nylon y no se desafinaban nunca."
    ]
  },
  {
    enunciado: "¿Qué instrumento de viento madera utiliza una lengüeta simple?",
    correcta: "El clarinete.",
    incorrectas: [
      "El oboe.",
      "La flauta dulce."
    ]
  },
  {
    enunciado: "La agrupación 'Big Band' es típica del Jazz y se organiza en secciones de:",
    correcta: "Saxos, trompetas, trombones y sección rítmica (piano, bajo, batería, guitarra).",
    incorrectas: [
      "Violines, violas y cellos con un sintetizador.",
      "Flautas dulces y panderetas únicamente."
    ]
  },
  {
    enunciado: "¿Cuál es el instrumento más agudo de la familia de viento madera?",
    correcta: "El flautín o piccolo.",
    incorrectas: [
      "El clarinete requinto.",
      "La flauta travesera."
    ]
  },
  {
    enunciado: "En los instrumentos de cuerda frotada, el arco se fabrica tradicionalmente con:",
    correcta: "Madera de pernambuco y crines de caballo.",
    incorrectas: [
      "Plástico reciclado y cuerdas de pescar.",
      "Acero inoxidable y fibras de carbono exclusivamente."
    ]
  },
  {
    enunciado: "El 'Órgano de tubos' produce el sonido mediante:",
    correcta: "El paso de aire a presión a través de diferentes hileras de tubos (registros).",
    incorrectas: [
      "Cuerdas percutidas por macillos de fieltro.",
      "Circuitos integrados que imitan el sonido de la flauta."
    ]
  },
  {
    enunciado: "¿Qué es un 'Ensemble'?",
    correcta: "Un término genérico para cualquier grupo de músicos que tocan juntos.",
    incorrectas: [
      "Un solo de batería que dura más de diez minutos.",
      "La parte de la partitura donde no hay notas escritas."
    ]
  },
  {
    enunciado: "El 'Clavicordio' se diferenciaba del clave en que:",
    correcta: "Las cuerdas eran percutidas por tangentes de metal, permitiendo un ligero control dinámico.",
    incorrectas: [
      "Se tocaba con los pies mediante unos pedales gigantes.",
      "No tenía teclas y se pulsaba directamente con los dedos."
    ]
  },
  {
    enunciado: "La 'Tuba' es el instrumento más:",
    correcta: "Grave de la familia de viento metal.",
    incorrectas: [
      "Agudo de la sección de percusión.",
      "Ligero de la orquesta de cámara."
    ]
  },
  {
    enunciado: "Un 'Dúo' instrumental puede estar formado por:",
    correcta: "Cualquier combinación de dos instrumentos (ej. violín y piano).",
    incorrectas: [
      "Obligatoriamente dos instrumentos de la misma familia.",
      "Un cantante y cuatro guitarristas."
    ]
  },
  {
    enunciado: "El 'Celesta' suena como un metalófono pero se toca con:",
    correcta: "Un teclado similar al del piano.",
    incorrectas: [
      "Dos baquetas de fieltro duro.",
      "Un arco de violín frotado lateralmente."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión tiene láminas de madera de palosanto y tubos resonadores?",
    correcta: "La marimba.",
    incorrectas: [
      "El glockenspiel.",
      "Los crótalos."
    ]
  },
  {
    enunciado: "En la música barroca, el instrumento melódico por excelencia junto al violín era:",
    correcta: "La flauta de pico o flauta dulce.",
    incorrectas: [
      "El saxofón tenor.",
      "La armónica de cristal."
    ]
  },
  {
    enunciado: "La 'Orquesta de Cuerdas' está compuesta únicamente por:",
    correcta: "Violines I, Violines II, Violas, Violonchelos y Contrabajos.",
    incorrectas: [
      "Guitarras y mandolinas.",
      "Pianos y órganos electrónicos."
    ]
  },
  {
    enunciado: "El fin último de estudiar la evolución instrumental en occidente es:",
    correcta: "Comprender cómo los avances técnicos han condicionado el lenguaje y las formas musicales de cada época.",
    incorrectas: [
      "Aprender a fabricar instrumentos de plástico en casa.",
      "Saber cuánto pesa cada instrumento para transportarlos mejor."
    ]
  }
];