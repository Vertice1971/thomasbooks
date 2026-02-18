// 43-vocal-clasica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué compositor lideró la 'reforma' de la ópera para eliminar los excesos del Barroco y priorizar el drama?",
    correcta: "Christoph Willibald Gluck.",
    incorrectas: [
      "Antonio Vivaldi.",
      "Johann Sebastian Bach."
    ]
  },
  {
    enunciado: "¿Cuál fue la primera ópera reformista de Gluck, estrenada en 1762?",
    correcta: "Orfeo ed Euridice.",
    incorrectas: [
      "Don Giovanni.",
      "La Traviata."
    ]
  },
  {
    enunciado: "Uno de los principios de la reforma de Gluck consistía en:",
    correcta: "Hacer que la música estuviera al servicio del texto y de la acción dramática.",
    incorrectas: [
      "Permitir que los cantantes improvisaran adornos durante diez minutos.",
      "Eliminar por completo la orquesta de los teatros."
    ]
  },
  {
    enunciado: "¿Qué papel juega la obertura en la ópera reformada de Gluck?",
    correcta: "Debe preparar al espectador para el carácter y la acción de la obra.",
    incorrectas: [
      "Es un momento para que el público entre y busque su asiento en silencio.",
      "Es una pieza de baile que no tiene relación con el argumento."
    ]
  },
  {
    enunciado: "¿Qué género de ópera italiana utilizaba temas cotidianos, personajes populares y enredos cómicos?",
    correcta: "Ópera Buffa.",
    incorrectas: [
      "Ópera Seria.",
      "Tragédie Lyrique."
    ]
  },
  {
    enunciado: "La ópera 'La serva padrona' de Pergolesi fue el detonante en París de la llamada:",
    correcta: "Querella de los bufones (Guerre des Bouffons).",
    incorrectas: [
      "Revolución Francesa.",
      "Reforma Luterana."
    ]
  },
  {
    enunciado: "Wolfgang Amadeus Mozart compuso óperas en tres idiomas/estilos. ¿Cuál de estas es una 'Ópera Buffa' en italiano?",
    correcta: "Las bodas de Fígaro.",
    incorrectas: [
      "La flauta mágica.",
      "Idomeneo, rey de Creta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Singspiel'?",
    correcta: "Ópera alemana que alterna partes cantadas con diálogo hablado.",
    incorrectas: [
      "Un método de canto gregoriano del siglo XVIII.",
      "Una danza rápida para solista de bajo."
    ]
  },
  {
    enunciado: "¿Cuál de estas obras de Mozart es el ejemplo más famoso de 'Singspiel'?",
    correcta: "La flauta mágica (Die Zauberflöte).",
    incorrectas: [
      "Don Giovanni.",
      "Così fan tutte."
    ]
  },
  {
    enunciado: "¿Quién fue el principal libretista de las grandes óperas italianas de Mozart?",
    correcta: "Lorenzo da Ponte.",
    incorrectas: [
      "Pietro Metastasio.",
      "Molière."
    ]
  },
  {
    enunciado: "En 'Don Giovanni', Mozart mezcla magistralmente elementos cómicos y trágicos, género conocido como:",
    correcta: "Dramma giocoso.",
    incorrectas: [
      "Melodrama verista.",
      "Farsa medieval."
    ]
  },
  {
    enunciado: "¿Qué personaje de 'La flauta mágica' representa al hombre común y sencillo, y busca a su pareja femenina?",
    correcta: "Papageno.",
    incorrectas: [
      "Sarastro.",
      "Tamino."
    ]
  },
  {
    enunciado: "El aria de 'La Reina de la Noche' es famosa por su extrema dificultad en el registro de:",
    correcta: "Soprano de coloratura.",
    incorrectas: [
      "Contralto profunda.",
      "Mezzosoprano lírica."
    ]
  },
  {
    enunciado: "¿Qué es el 'Recitativo secco' en el Clasicismo?",
    correcta: "Un canto declamado acompañado solo por el clave (o piano) y el violonchelo.",
    incorrectas: [
      "Un coro que canta sin ningún tipo de instrumento.",
      "Una sección donde los cantantes solo susurran."
    ]
  },
  {
    enunciado: "El 'Recitativo accompagnato' se utilizaba en momentos de:",
    correcta: "Gran tensión dramática, con acompañamiento de toda la orquesta.",
    incorrectas: [
      "Poca importancia para que el público hablara.",
      "Cambio de vestuario de los solistas."
    ]
  },
  {
    enunciado: "En el Clasicismo, el 'Coro' en la ópera tuvo un papel:",
    correcta: "Más importante que en el Barroco italiano, especialmente en la ópera reformada.",
    incorrectas: [
      "Totalmente inexistente, ya que solo cantaban solistas.",
      "Limitado a gritar al final de la obra."
    ]
  },
  {
    enunciado: "¿Qué importante oratorio compuso Joseph Haydn inspirado por las obras de Händel?",
    correcta: "La Creación (Die Schöpfung).",
    incorrectas: [
      "El Mesías.",
      "La Pasión según San Juan."
    ]
  },
  {
    enunciado: "Además de 'La Creación', ¿cuál es el otro gran oratorio de Haydn?",
    correcta: "Las Estaciones (Die Jahreszeiten).",
    incorrectas: [
      "Elías.",
      "Carmina Burana."
    ]
  },
  {
    enunciado: "¿Qué obra religiosa de Mozart quedó incompleta a su muerte y fue terminada por su alumno Süssmayr?",
    correcta: "Réquiem en Re menor.",
    incorrectas: [
      "Misa de la Coronación.",
      "Gran Misa en Do menor."
    ]
  },
  {
    enunciado: "La 'Misa de la Coronación' de Mozart se llama así porque:",
    correcta: "Se cree que fue compuesta para una festividad en el santuario de Maria Plain.",
    incorrectas: [
      "Fue la primera obra que compuso al ser coronado rey de Austria.",
      "Se debe tocar obligatoriamente con una corona puesta."
    ]
  },
  {
    enunciado: "¿Qué es un 'Ensemble' o número de conjunto en una ópera clásica?",
    correcta: "Un momento donde varios personajes cantan simultáneamente expresando diferentes puntos de vista.",
    incorrectas: [
      "Un solo de batería que interrumpe la acción.",
      "El nombre que recibe el foso de la orquesta."
    ]
  },
  {
    enunciado: "En las óperas de Mozart, los finales de acto suelen ser:",
    correcta: "Grandes conjuntos encadenados donde la acción no se detiene y la tensión aumenta.",
    incorrectas: [
      "Silencios largos para que el público salga a cenar.",
      "Un solo recitativo del protagonista principal."
    ]
  },
  {
    enunciado: "La ópera 'Idomeneo' de Mozart pertenece al género de:",
    correcta: "Ópera Seria.",
    incorrectas: [
      "Zarzuela.",
      "Opereta."
    ]
  },
  {
    enunciado: "¿Qué compositor escribió óperas buffas como 'Il matrimonio segreto', muy populares en su época?",
    correcta: "Domenico Cimarosa.",
    incorrectas: [
      "Gioachino Rossini.",
      "Richard Wagner."
    ]
  },
  {
    enunciado: "La 'Música Religiosa' en el Clasicismo se vio influenciada por:",
    correcta: "El estilo operístico, con arias virtuosas y uso de la orquesta sinfónica.",
    incorrectas: [
      "La prohibición de usar instrumentos de cuerda en los templos.",
      "La vuelta al canto gregoriano sin armonía."
    ]
  },
  {
    enunciado: "¿Qué es una 'Cantata' en el Clasicismo?",
    correcta: "Siguió existiendo pero perdió peso frente al auge de la ópera y el oratorio.",
    incorrectas: [
      "Un tipo de danza muy rápida para bailar en las catedrales.",
      "Una pieza que solo se podía tocar con un piano eléctrico."
    ]
  },
  {
    enunciado: "En la música vocal clásica, el equilibrio se buscaba mediante:",
    correcta: "Melodías claras y una estructura armónica transparente.",
    incorrectas: [
      "Gritos constantes para impresionar al espectador.",
      "Cantar en cinco idiomas al mismo tiempo."
    ]
  },
  {
    enunciado: "¿Qué papel tiene el 'Voz de Bajo' en la ópera buffa de Mozart (ej. Leporello o Fígaro)?",
    correcta: "Suele ser un personaje cómico, astuto y con gran agilidad vocal.",
    incorrectas: [
      "Es siempre un dios o un héroe trágico que nunca ríe.",
      "No canta, solo hace ruidos con la boca."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ave verum corpus' de Mozart?",
    correcta: "Un motete eucarístico breve de gran sencillez y belleza.",
    incorrectas: [
      "Una ópera cómica sobre la vida en el campo.",
      "Un concierto para siete trompetas solistas."
    ]
  },
  {
    enunciado: "La reforma de Gluck influyó notablemente en compositores posteriores como:",
    correcta: "Berlioz y Wagner.",
    incorrectas: [
      "Los Beatles.",
      "Palestrina."
    ]
  },
  {
    enunciado: "¿Cuál es el tema central de la ópera 'Fidelio' de Beethoven?",
    correcta: "La libertad y el amor conyugal heroico.",
    incorrectas: [
      "Un enredo amoroso entre criados en Sevilla.",
      "La historia de un cazador de pájaros mágico."
    ]
  },
  {
    enunciado: "En el Réquiem de Mozart, el 'Tuba mirum' destaca por el diálogo entre el bajo y:",
    correcta: "El trombón solista.",
    incorrectas: [
      "La flauta dulce.",
      "El timbalero."
    ]
  },
  {
    enunciado: "¿Qué es una 'Cavatina'?",
    correcta: "Un aria corta y de carácter sencillo, a menudo la pieza de presentación de un personaje.",
    incorrectas: [
      "Una bebida que tomaban los cantantes para aclarar la voz.",
      "Un instrumento de cuerda frotada muy pequeño."
    ]
  },
  {
    enunciado: "Las óperas de Mozart escritas en alemán se denominan:",
    correcta: "Singspiele.",
    incorrectas: [
      "Oratorios.",
      "Madrigales."
    ]
  },
  {
    enunciado: "El 'Oratorio clásico' suele utilizar una orquesta:",
    correcta: "Similar a la de la sinfonía, con maderas a dos, metales y timbales.",
    incorrectas: [
      "Formada solo por sintetizadores.",
      "De un solo músico que toca todo a la vez."
    ]
  },
  {
    enunciado: "En el siglo XVIII, el 'Mestastasianismo' se refiere a:",
    correcta: "El estilo de libreto rígido y heroico creado por Pietro Metastasio.",
    incorrectas: [
      "Una enfermedad de las cuerdas vocales.",
      "La técnica de afinar los pianos con agua."
    ]
  },
  {
    enunciado: "¿Qué es la 'Coloratura'?",
    correcta: "Pasajes de gran agilidad vocal con escalas y adornos rápidos.",
    incorrectas: [
      "El tinte usado para la ropa de los actores.",
      "Cantar solo notas de color rojo."
    ]
  },
  {
    enunciado: "El 'Coro de prisioneros' es un momento emocionante de la única ópera de:",
    correcta: "Beethoven (Fidelio).",
    incorrectas: [
      "Mozart.",
      "Haydn."
    ]
  },
  {
    enunciado: "La música vocal del Clasicismo termina abriendo las puertas a:",
    correcta: "El Romanticismo, con una mayor carga emocional y libertad formal.",
    incorrectas: [
      "La desaparición del canto en los teatros.",
      "La vuelta a la polifonía del siglo XVI."
    ]
  },
  {
    enunciado: "¿Qué significa el término 'Diva' en el contexto de la ópera clásica?",
    correcta: "La cantante principal que gozaba de gran fama y adoración por el público.",
    incorrectas: [
      "La mujer que limpiaba el escenario.",
      "Un tipo de partitura muy pequeña."
    ]
  }
];