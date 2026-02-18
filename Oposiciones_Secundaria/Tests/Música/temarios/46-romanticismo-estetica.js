// 46-romanticismo-estetica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué concepto define mejor la estética del Romanticismo musical?",
    correcta: "La primacía del sentimiento, la subjetividad y la libertad expresiva sobre la forma rígida.",
    incorrectas: [
      "La búsqueda del equilibrio racional y la sencillez melódica.",
      "El rechazo a cualquier tipo de emoción personal en la obra."
    ]
  },
  {
    enunciado: "¿Cuál es el instrumento 'rey' del Romanticismo por su capacidad expresiva y técnica?",
    correcta: "El Piano.",
    incorrectas: [
      "El Clave.",
      "La Flauta de pico."
    ]
  },
  {
    enunciado: "¿Qué filósofo alemán influyó notablemente al considerar la música como la más alta de las artes por su capacidad de expresar la esencia del mundo?",
    correcta: "Arthur Schopenhauer.",
    incorrectas: [
      "Immanuel Kant.",
      "Jean-Jacques Rousseau."
    ]
  },
  {
    enunciado: "La orquesta romántica se diferencia de la clásica por:",
    correcta: "Su gran expansión en número de músicos y la incorporación de nuevos timbres (metales con válvulas, percusión).",
    incorrectas: [
      "La reducción de músicos para tocar solo en salones pequeños.",
      "La eliminación total de los instrumentos de viento madera."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Programática'?",
    correcta: "Música instrumental que se basa en un programa narrativo, literario o poético externo.",
    incorrectas: [
      "Música compuesta exclusivamente por ordenadores primitivos.",
      "Música que solo se puede tocar en programas de televisión."
    ]
  },
  {
    enunciado: "La 'Sinfonía Fantástica' de Héctor Berlioz es un ejemplo temprano y fundamental de:",
    correcta: "Música programática.",
    incorrectas: [
      "Misa polifónica renacentista.",
      "Ópera buffa italiana."
    ]
  },
  {
    enunciado: "¿Qué recurso compositivo consiste en una idea musical que representa a un personaje o concepto y reaparece transformada?",
    correcta: "Leitmotiv o Idea Fija.",
    incorrectas: [
      "Bajo continuo.",
      "Isorritmia."
    ]
  },
  {
    enunciado: "El término 'Lied' (canción) se refiere a un género romántico alemán que une:",
    correcta: "Poesía y música, generalmente para voz y piano.",
    incorrectas: [
      "Danza y teatro sin música vocal.",
      "Música religiosa para órgano y coro de niños."
    ]
  },
  {
    enunciado: "¿Qué autor es considerado el gran maestro del Lied, con más de 600 composiciones?",
    correcta: "Franz Schubert.",
    incorrectas: [
      "Robert Schumann.",
      "Johannes Brahms."
    ]
  },
  {
    enunciado: "En el Romanticismo, el artista pasa de ser un artesano al servicio de la corte a ser:",
    correcta: "Un genio incomprendido y libre que expresa su mundo interior.",
    incorrectas: [
      "Un funcionario público con horario de oficina.",
      "Un músico que solo toca lo que el público le pide en el momento."
    ]
  },
  {
    enunciado: "¿Qué es el 'Rubato'?",
    correcta: "Una técnica de interpretación que permite ligeras variaciones de velocidad por motivos expresivos.",
    incorrectas: [
      "Un tipo de sordina para los instrumentos de metal.",
      "La obligación de tocar todas las notas muy cortas."
    ]
  },
  {
    enunciado: "El virtuosismo instrumental alcanzó su cima con figuras como:",
    correcta: "Niccolò Paganini (violín) y Franz Liszt (piano).",
    incorrectas: [
      "Johann Sebastian Bach y Antonio Vivaldi.",
      "W.A. Mozart y Joseph Haydn."
    ]
  },
  {
    enunciado: "La 'Armonía Romántica' se caracteriza por un uso creciente de:",
    correcta: "El cromatismo, las modulaciones a tonalidades lejanas y las disonancias no resueltas.",
    incorrectas: [
      "Solo los acordes de tónica y dominante del sistema clásico.",
      "Escalas pentatónicas chinas exclusivamente."
    ]
  },
  {
    enunciado: "¿Qué compositor polaco es el poeta del piano por excelencia?",
    correcta: "Frédéric Chopin.",
    incorrectas: [
      "Ludwig van Beethoven.",
      "Piotr Ilich Chaikovski."
    ]
  },
  {
    enunciado: "¿Qué es un 'Nocturno' en el contexto romántico?",
    correcta: "Una pieza para piano de carácter íntimo, evocador y melancólico.",
    incorrectas: [
      "Una danza militar para despertar a las tropas.",
      "Un concierto para siete trompetas y tambor."
    ]
  },
  {
    enunciado: "El 'Nacionalismo Musical' surgió como una ramificación del Romanticismo que buscaba:",
    correcta: "Expresar la identidad de un pueblo a través del folclore y las leyendas nacionales.",
    incorrectas: [
      "Prohibir la música de otros países en las fronteras.",
      "Cantar solo los himnos nacionales en las óperas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Poema Sinfónico'?",
    correcta: "Una obra orquestal de un solo movimiento basada en un programa literario.",
    incorrectas: [
      "Un poema escrito que no tiene música.",
      "Una sinfonía de cuatro movimientos para solista de arpa."
    ]
  },
  {
    enunciado: "¿Quién fue el creador del género del Poema Sinfónico?",
    correcta: "Franz Liszt.",
    incorrectas: [
      "Richard Wagner.",
      "Giuseppe Verdi."
    ]
  },
  {
    enunciado: "La estética romántica valora especialmente lo 'Sublime', que se asocia con:",
    correcta: "La grandeza abrumadora, el misterio y la naturaleza salvaje.",
    incorrectas: [
      "La limpieza y el orden de una habitación cerrada.",
      "Lo gracioso y cómico de las situaciones cotidianas."
    ]
  },
  {
    enunciado: "En el Romanticismo tardío, la música empezó a rozar los límites de la tonalidad con obras como:",
    correcta: "Tristán e Isolda de Richard Wagner.",
    incorrectas: [
      "La flauta mágica de Mozart.",
      "Las cuatro estaciones de Vivaldi."
    ]
  },
  {
    enunciado: "¿Qué compositor romántico destacó por su perfeccionismo y por mantener las formas clásicas (sinfonía, cámara) pero con contenido romántico?",
    correcta: "Johannes Brahms.",
    incorrectas: [
      "Héctor Berlioz.",
      "Modest Músorgski."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ciclo de Lieder'?",
    correcta: "Un conjunto de canciones unidas por un hilo narrativo o poético común (ej. Viaje de invierno).",
    incorrectas: [
      "Un pedal de piano que repite la música automáticamente.",
      "Girar la partitura mientras se canta."
    ]
  },
  {
    enunciado: "Robert Schumann es fundamental por su labor como compositor y también como:",
    correcta: "Crítico musical, fundador de la revista 'Neue Zeitschrift für Musik'.",
    incorrectas: [
      "Fabricante de pianos en la ciudad de París.",
      "Director de una escuela de danza clásica."
    ]
  },
  {
    enunciado: "El 'Estudio' (Étude) romántico dejó de ser solo un ejercicio técnico para convertirse en:",
    correcta: "Una pieza de concierto con gran valor artístico y expresivo.",
    incorrectas: [
      "Un castigo para los alumnos que no practicaban.",
      "Una obra para ser tocada en absoluto silencio."
    ]
  },
  {
    enunciado: "¿Qué innovación técnica en los instrumentos de viento metal permitió su expansión en el Romanticismo?",
    correcta: "La invención de las válvulas o pistones.",
    incorrectas: [
      "El uso de plástico en lugar de bronce.",
      "Hacer los instrumentos más cortos para que pesaran menos."
    ]
  },
  {
    enunciado: "Félix Mendelssohn destacó por su estilo elegante y por redescubrir la música de:",
    correcta: "Johann Sebastian Bach (la Pasión según San Mateo).",
    incorrectas: [
      "Los antiguos griegos.",
      "Los compositores de jazz americanos."
    ]
  },
  {
    enunciado: "El 'Grand Opéra' francés del siglo XIX se caracteriza por:",
    correcta: "Grandes montajes, coros masivos, ballet obligatorio y temas históricos.",
    incorrectas: [
      "Ser óperas muy cortas de apenas diez minutos.",
      "No utilizar cantantes, solo actores gesticulando."
    ]
  },
  {
    enunciado: "Giacomo Puccini es el máximo exponente del 'Verismo', que buscaba:",
    correcta: "Reflejar la realidad cruda y las emociones de la gente humilde en la ópera.",
    incorrectas: [
      "Contar solo historias de dioses romanos.",
      "Utilizar solo la verdad científica en los libretos."
    ]
  },
  {
    enunciado: "¿Qué papel juega el director de orquesta en el siglo XIX?",
    correcta: "Se convierte en una figura artística central y necesaria para coordinar las grandes masas orquestales.",
    incorrectas: [
      "Es una persona que solo está para saludar al principio.",
      "Es el encargado de vender las entradas en la puerta."
    ]
  },
  {
    enunciado: "La 'Música de Salón' estaba destinada a:",
    correcta: "Las reuniones sociales de la burguesía, centrada en piezas brillantes para piano.",
    incorrectas: [
      "La meditación en los monasterios de clausura.",
      "Los entrenamientos de los atletas olímpicos."
    ]
  },
  {
    enunciado: "Anton Bruckner es conocido por sus monumentales sinfonías influenciadas por:",
    correcta: "La sonoridad del órgano y el lenguaje de Wagner.",
    incorrectas: [
      "La música folclórica española.",
      "El canto de los pájaros en la selva."
    ]
  },
  {
    enunciado: "¿Qué es una 'Bagatela'?",
    correcta: "Una pieza instrumental corta y sin pretensiones, popularizada por Beethoven y los románticos.",
    incorrectas: [
      "Un tipo de pan que comían los músicos pobres.",
      "Una flauta hecha de barro cocido."
    ]
  },
  {
    enunciado: "El 'Colorismo Orquestal' romántico busca:",
    correcta: "Explorar combinaciones tímbricas inusuales para crear atmósferas sugerentes.",
    incorrectas: [
      "Pintar los instrumentos de colores llamativos.",
      "Utilizar solo instrumentos de una misma familia."
    ]
  },
  {
    enunciado: "Piotr Ilich Chaikovski unió la tradición rusa con:",
    correcta: "La técnica y las formas de la música europea occidental.",
    incorrectas: [
      "Los ritmos de la música africana de esclavos.",
      "La polifonía del siglo XVI estrictamente."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ciclo de la Quinta' en la armonía romántica?",
    correcta: "Se exploró hasta el límite para permitir modulaciones constantes y expresivas.",
    incorrectas: [
      "Una danza que se bailaba en grupos de cinco personas.",
      "El tiempo que tardaba un músico en afinar su instrumento."
    ]
  },
  {
    enunciado: "La 'Música Absoluta' (defendida por críticos como Hanslick) es aquella que:",
    correcta: "No tiene referencias externas y se justifica solo por su estructura sonora.",
    incorrectas: [
      "Es obligatoria para todos los ciudadanos de un país.",
      "No se puede escuchar más que una sola vez."
    ]
  },
  {
    enunciado: "El 'Harpa' se convirtió en un instrumento orquestal estándar en el XIX para aportar:",
    correcta: "Texturas mágicas, arpegios y un color etéreo.",
    incorrectas: [
      "Un sonido ruidoso y marcial para las batallas.",
      "La base rítmica de los tambores."
    ]
  },
  {
    enunciado: "¿Qué compositor romántico es famoso por sus 'Marchas Pompa y Circunstancia'?",
    correcta: "Edward Elgar.",
    incorrectas: [
      "Gustav Mahler.",
      "Bedřich Smetana."
    ]
  },
  {
    enunciado: "La estética romántica termina diluyéndose a finales de siglo con la aparición de:",
    correcta: "El Impresionismo y el Expresionismo.",
    incorrectas: [
      "El regreso al Canto Gregoriano.",
      "La desaparición del piano de los hogares."
    ]
  },
  {
    enunciado: "El fin último del estudio del Romanticismo es comprender:",
    correcta: "Cómo la música se convirtió en la expresión definitiva del 'yo' y de la libertad artística.",
    incorrectas: [
      "Cómo se fabricaban las cuerdas de piano con acero.",
      "La biografía detallada de todos los reyes del siglo XIX."
    ]
  }
];