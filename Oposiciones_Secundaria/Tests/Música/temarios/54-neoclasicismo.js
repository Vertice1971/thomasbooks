// 54-neoclasicismo.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué lema define la estética del Neoclasicismo musical tras la Primera Guerra Mundial?",
    correcta: "La 'Vuelta a Bach' o 'Vuelta al orden'.",
    incorrectas: [
      "La destrucción de toda armonía.",
      "El regreso a la monodia gregoriana pura."
    ]
  },
  {
    enunciado: "¿Qué compositor lideró el cambio hacia el Neoclasicismo con su ballet 'Pulcinella' (1920)?",
    correcta: "Igor Stravinsky.",
    incorrectas: [
      "Arnold Schönberg.",
      "Claude Debussy."
    ]
  },
  {
    enunciado: "El Neoclasicismo se caracteriza por:",
    correcta: "La recuperación de formas claras (suite, sonata, concierto grosso) y texturas transparentes.",
    incorrectas: [
      "La exaltación de los sentimientos extremos y el caos sonoro.",
      "El uso exclusivo de ruidos industriales de fábricas."
    ]
  },
  {
    enunciado: "¿Qué técnica utiliza Stravinsky en su etapa neoclásica para tratar el ritmo?",
    correcta: "El desplazamiento de acentos y el uso de bloques rítmicos estables.",
    incorrectas: [
      "La improvisación total sin ningún tipo de compás.",
      "El ritmo de motor barroco sin ninguna variación."
    ]
  },
  {
    enunciado: "¿Qué compositor ruso escribió la 'Sinfonía Clásica' como un homenaje al estilo de Haydn?",
    correcta: "Serguéi Prokófiev.",
    incorrectas: [
      "Dmitri Shostakóvich.",
      "Alexander Skriabin."
    ]
  },
  {
    enunciado: "¿Qué grupo de compositores franceses defendía una música sencilla, cotidiana y antirromántica?",
    correcta: "Les Six (Los Seis).",
    incorrectas: [
      "La Segunda Escuela de Viena.",
      "Los músicos de la Borgoña."
    ]
  },
  {
    enunciado: "¿Quién era el 'líder espiritual' y estético del Grupo de los Seis?",
    correcta: "Erik Satie.",
    incorrectas: [
      "Jean Cocteau.",
      "Maurice Ravel."
    ]
  },
  {
    enunciado: "¿Qué obra de Stravinsky es una ópera-oratorio neoclásica con texto en latín?",
    correcta: "Oedipus Rex.",
    incorrectas: [
      "La consagración de la primavera.",
      "El pájaro de fuego."
    ]
  },
  {
    enunciado: "Paul Hindemith desarrolló el concepto de 'Gebrauchsmusik', que significa:",
    correcta: "Música de utilidad o para ser usada por aficionados y con fines sociales.",
    incorrectas: [
      "Música que solo se puede tocar en el campo.",
      "Música compuesta por máquinas automáticas."
    ]
  },
  {
    enunciado: "¿Qué compositora y pedagoga francesa fue la maestra de la mayoría de los compositores neoclásicos americanos?",
    correcta: "Nadia Boulanger.",
    incorrectas: [
      "Clara Schumann.",
      "Maria Callas."
    ]
  },
  {
    enunciado: "La 'Sinfonía de los Salmos' de Stravinsky destaca por:",
    correcta: "Una orquestación sin violines ni violas, dando protagonismo a vientos y pianos.",
    incorrectas: [
      "Ser una obra para mil percusionistas golpeando metal.",
      "Utilizar solo instrumentos electrónicos de juguete."
    ]
  },
  {
    enunciado: "¿Qué género barroco recuperó el Neoclasicismo para enfrentar a un grupo de solistas contra la orquesta?",
    correcta: "El Concerto Grosso.",
    incorrectas: [
      "La Ópera seria.",
      "El Motete isorrítmico."
    ]
  },
  {
    enunciado: "¿Qué compositor húngaro unió el nacionalismo con una estructura formal casi neoclásica y matemática?",
    correcta: "Béla Bartók.",
    incorrectas: [
      "Franz Liszt.",
      "Zoltán Kodály."
    ]
  },
  {
    enunciado: "El Neoclasicismo rechaza el 'Gesto Romántico' porque busca:",
    correcta: "La objetividad, el equilibrio y la distancia emocional.",
    incorrectas: [
      "Que el público llore durante toda la función.",
      "La vuelta a la magia y el esoterismo medieval."
    ]
  },
  {
    enunciado: "¿Qué compositor alemán escribió 'Carmina Burana', con una estética de sencillez rítmica neoclásica?",
    correcta: "Carl Orff.",
    incorrectas: [
      "Kurt Weill.",
      "Richard Strauss."
    ]
  },
  {
    enunciado: "Dmitri Shostakóvich mantuvo formas clásicas (como la sinfonía) bajo la presión del régimen:",
    correcta: "Soviético.",
    incorrectas: [
      "Nazi.",
      "Fascista italiano."
    ]
  },
  {
    enunciado: "¿Qué es la 'Pandiatonía'?",
    correcta: "El uso libre de las notas de la escala diatónica sin seguir las reglas de la armonía funcional.",
    incorrectas: [
      "Tocar todos los instrumentos de una panadería.",
      "Cantar en todos los idiomas del mundo a la vez."
    ]
  },
  {
    enunciado: "¿Qué ballet de Manuel de Falla muestra su giro hacia el Neoclasicismo con una orquesta reducida?",
    correcta: "El Retablo de Maese Pedro.",
    incorrectas: [
      "El amor brujo.",
      "El sombrero de tres picos."
    ]
  },
  {
    enunciado: "¿Qué compositor francés de 'Los Seis' es autor del 'Gloria' y destacó en la música religiosa neoclásica?",
    correcta: "Francis Poulenc.",
    incorrectas: [
      "Darius Milhaud.",
      "Georges Auric."
    ]
  },
  {
    enunciado: "¿Qué obra de Prokófiev es un cuento sinfónico didáctico para niños?",
    correcta: "Pedro y el lobo.",
    incorrectas: [
      "Romeo y Julieta.",
      "Guerra y Paz."
    ]
  },
  {
    enunciado: "¿Qué es el 'Estilo de entreguerras'?",
    correcta: "Un periodo donde la música buscaba la claridad y la evasión tras el trauma de la guerra.",
    incorrectas: [
      "Música compuesta solo para soldados en el frente.",
      "Un estilo que prohibía el uso de notas agudas."
    ]
  },
  {
    enunciado: "La 'Música para cuerdas, percusión y celesta' de Bartók es un ejemplo de:",
    correcta: "Neoclasicismo estructural con uso de la proporción áurea.",
    incorrectas: [
      "Atonalismo libre expresionista.",
      "Impresionismo de nubes y agua."
    ]
  },
  {
    enunciado: "¿Qué compositor brasileño fusionó el contrapunto de Bach con el folclore de su país?",
    correcta: "Heitor Villa-Lobos (Bachianas Brasileiras).",
    incorrectas: [
      "Carlos Chávez.",
      "Alberto Ginastera."
    ]
  },
  {
    enunciado: "¿Qué autor inglés compuso la 'Simple Symphony' para orquesta de cuerdas?",
    correcta: "Benjamin Britten.",
    incorrectas: [
      "Edward Elgar.",
      "Gustav Holst."
    ]
  },
  {
    enunciado: "El Neoclasicismo suele preferir agrupaciones de viento porque:",
    correcta: "Tienen un sonido más seco y objetivo que las cuerdas vibrantes románticas.",
    incorrectas: [
      "Eran más baratas de contratar en aquella época.",
      "Los violines estaban prohibidos en París."
    ]
  },
  {
    enunciado: "¿Qué ballet de Stravinsky se basa en música atribuida a Pergolesi?",
    correcta: "Pulcinella.",
    incorrectas: [
      "Apolo Musageta.",
      "Juego de cartas."
    ]
  },
  {
    enunciado: "Igor Stravinsky comparaba la música neoclásica con:",
    correcta: "Un objeto construido, puramente formal y sin significado emocional externo.",
    incorrectas: [
      "Un sueño místico del más allá.",
      "Un grito de dolor de la naturaleza."
    ]
  },
  {
    enunciado: "¿Qué es el 'Dumbarton Oaks' de Stravinsky?",
    correcta: "Un concierto para cámara que rinde homenaje a los Conciertos de Brandeburgo de Bach.",
    incorrectas: [
      "El nombre de una montaña en Rusia.",
      "Un tipo de instrumento de percusión de madera."
    ]
  },
  {
    enunciado: "Darius Milhaud destacó por el uso de la 'Bitonalidad', que es:",
    correcta: "El uso simultáneo de dos tonalidades diferentes.",
    incorrectas: [
      "Tocar solo dos notas en toda la obra.",
      "Cantar en dos idiomas al unísono."
    ]
  },
  {
    enunciado: "¿Qué compositor español neoclásico escribió el 'Concierto para clave' dedicado a Wanda Landowska?",
    correcta: "Manuel de Falla.",
    incorrectas: [
      "Joaquín Turina.",
      "Rodolfo Halffter."
    ]
  },
  {
    enunciado: "¿Qué es la 'Nueva Objetividad' (Neue Sachlichkeit)?",
    correcta: "Un movimiento alemán que abogaba por una música clara, práctica y realista.",
    incorrectas: [
      "Una técnica para afinar los instrumentos con lentes ópticas.",
      "La obligación de no usar sentimientos en la vida diaria."
    ]
  },
  {
    enunciado: "¿Qué ópera de Kurt Weill y Bertolt Brecht utiliza canciones populares y crítica social?",
    correcta: "La ópera de los tres centavos (Die Dreigroschenoper).",
    incorrectas: [
      "Ascenso y caída de la ciudad de Mahagonny.",
      "Wozzeck."
    ]
  },
  {
    enunciado: "El Neoclasicismo instrumental recuperó el uso de qué instrumento de teclado antiguo?",
    correcta: "El Clave (Cémbalo).",
    incorrectas: [
      "El Órgano de agua.",
      "El Sintetizador Moog."
    ]
  },
  {
    enunciado: "¿Qué compositor ruso neoclásico es autor de los ballets 'Cenicienta' y 'Romeo y Julieta'?",
    correcta: "Serguéi Prokófiev.",
    incorrectas: [
      "Piotr Chaikovski.",
      "Dmitri Shostakóvich."
    ]
  },
  {
    enunciado: "La 'Música para el cine' de Prokófiev (ej. Alejandro Nevski) destaca por su:",
    correcta: "Claridad heroica y uso de temas épicos y directos.",
    incorrectas: [
      "Uso de ruidos electrónicos de naves espaciales.",
      "Ser música solo para piano solo."
    ]
  },
  {
    enunciado: "En el Neoclasicismo, la forma 'Sonata' se utiliza:",
    correcta: "Siguiendo el esquema clásico pero con armonías disonantes modernas.",
    incorrectas: [
      "Exactamente igual que en 1780 sin cambiar ni una nota.",
      "Como una excusa para que los músicos improvisen jazz."
    ]
  },
  {
    enunciado: "¿Qué es la 'Sinfonía Mathis der Maler' de Hindemith?",
    correcta: "Una obra basada en las tablas de un retablo del pintor Matthias Grünewald.",
    incorrectas: [
      "Una sinfonía escrita para ser pintada mientras suena.",
      "El nombre de la mascota del compositor."
    ]
  },
  {
    enunciado: "El Neoclasicismo entró en crisis tras la Segunda Guerra Mundial por:",
    correcta: "La aparición del Serialismo Integral y las nuevas vanguardias radicales.",
    incorrectas: [
      "La prohibición de la música en toda Europa.",
      "El regreso al Romanticismo de Wagner."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Humor' y la 'Ironía' en el Neoclasicismo francés?",
    correcta: "Es fundamental para distanciarse de la seriedad trascendental alemana.",
    incorrectas: [
      "No existe, es una música extremadamente triste y seria.",
      "Consiste en que los músicos cuenten chistes entre piezas."
    ]
  },
  {
    enunciado: "El fin último del estudio del Neoclasicismo es comprender:",
    correcta: "Cómo la música buscó refugio en las formas del pasado para reinventar el futuro.",
    incorrectas: [
      "Cómo se vive en las ciudades de Francia durante el invierno.",
      "La historia de los reyes de la dinastía neoclásica."
    ]
  }
];