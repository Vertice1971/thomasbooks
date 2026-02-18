// 16-definicion-musica.js

var PREGUNTAS = [
  {
    enunciado: "Etimológicamente, la palabra 'Música' proviene del griego 'mousikē', que hacía referencia a:",
    correcta: "El arte de las Musas, que englobaba tanto la poesía como la música y la danza.",
    incorrectas: [
      "El estudio exclusivo de las matemáticas aplicadas a las cuerdas.",
      "El sonido producido por el viento al chocar con las rocas."
    ]
  },
  {
    enunciado: "Desde una perspectiva científica, la música se vincula con las matemáticas a través de:",
    correcta: "Las proporciones interválicas, las series de armónicos y la organización temporal del ritmo.",
    incorrectas: [
      "La suma del peso de todos los instrumentos de una orquesta.",
      "El número de páginas que un compositor es capaz de escribir por hora."
    ]
  },
  {
    enunciado: "La definición de música como 'el arte de combinar los sonidos y el silencio en el tiempo' destaca su naturaleza:",
    correcta: "Temporal y estética.",
    incorrectas: [
      "Espacial y pictórica.",
      "Exclusivamente literaria."
    ]
  },
  {
    enunciado: "En la Antigüedad Clásica, ¿qué filósofo defendía que la música tenía el poder de influir en el carácter y la moral del individuo (Teoría del Ethos)?",
    correcta: "Platón.",
    incorrectas: [
      "Arquímedes.",
      "Pitágoras (aunque estudió las matemáticas, fue Platón quien sistematizó el Ethos)."
    ]
  },
  {
    enunciado: "Como lenguaje, la música se diferencia de las lenguas habladas en que:",
    correcta: "Carece de un significado semántico denotativo universal, siendo principalmente connotativa.",
    incorrectas: [
      "No utiliza ningún tipo de gramática ni reglas de organización.",
      "Es imposible de escribir o registrar mediante símbolos gráficos."
    ]
  },
  {
    enunciado: "Dentro del Quadrivium medieval, la música se estudiaba junto a:",
    correcta: "La aritmética, la geometría y la astronomía.",
    incorrectas: [
      "La gramática, la retórica y la dialéctica.",
      "La medicina, el derecho y la teología."
    ]
  },
  {
    enunciado: "¿Qué se entiende por la dimensión 'estética' de la música?",
    correcta: "El estudio de la belleza, la percepción sensorial y el valor artístico de las obras musicales.",
    incorrectas: [
      "La apariencia física de los músicos y sus trajes de concierto.",
      "La calidad de los materiales con los que se fabrican los atriles."
    ]
  },
  {
    enunciado: "La música como 'ciencia del sonido' se ocupa primordialmente de:",
    correcta: "Los fenómenos acústicos, la producción de ondas y las leyes físicas que rigen el sonido.",
    incorrectas: [
      "La venta de discos y la gestión del marketing musical.",
      "La organización de eventos deportivos con música de fondo."
    ]
  },
  {
    enunciado: "¿Cuál es la unidad mínima de significado o intención en el 'lenguaje' musical?",
    correcta: "El motivo o célula musical.",
    incorrectas: [
      "La sinfonía completa.",
      "El nombre del compositor."
    ]
  },
  {
    enunciado: "El concepto de 'Música de las Esferas' postulado por los pitagóricos sugería que:",
    correcta: "El movimiento de los astros producía sonidos basados en proporciones matemáticas perfectas.",
    incorrectas: [
      "Los planetas eran instrumentos de percusión gigantes golpeados por cometas.",
      "Solo se podía componer música si se observaba la luna llena."
    ]
  },
  {
    enunciado: "La música como 'arte de expresión' permite:",
    correcta: "Comunicar estados emocionales, ideas abstractas y realidades subjetivas sin usar palabras.",
    incorrectas: [
      "Sustituir el uso del teléfono mediante el envío de mensajes en código morse rítmico.",
      "Generar electricidad mediante la vibración de las cuerdas de un arpa."
    ]
  },
  {
    enunciado: "En la definición de música de Edgard Varèse, esta se describe como:",
    correcta: "Sonido organizado.",
    incorrectas: [
      "Poesía sin rima.",
      "Matemáticas ruidosas."
    ]
  },
  {
    enunciado: "¿Qué función cumple la 'Sintaxis' en el lenguaje musical?",
    correcta: "Organizar los sonidos y silencios siguiendo reglas de coherencia (armonía, contrapunto, forma).",
    incorrectas: [
      "Elegir el color de la portada de la partitura.",
      "Contar el número de personas que asisten a un concierto."
    ]
  },
  {
    enunciado: "La música 'programática' se define por:",
    correcta: "Intentar evocar ideas, imágenes o narraciones externas a la propia música.",
    incorrectas: [
      "Ser compuesta exclusivamente por un programa de ordenador.",
      "Tener una duración exacta de 60 minutos por programa."
    ]
  },
  {
    enunciado: "Desde el punto de vista sociológico, la música funciona como:",
    correcta: "Un elemento de identificación cultural, cohesión social y comunicación grupal.",
    incorrectas: [
      "Un método para evitar que la gente hable en público.",
      "Una herramienta para medir la inteligencia matemática de los niños."
    ]
  },
  {
    enunciado: "La definición 'funcional' de la música considera que esta es:",
    correcta: "Un recurso utilizado para fines específicos (rituales, laborales, terapéuticos, militares).",
    incorrectas: [
      "Un objeto decorativo que se coloca en las paredes de los museos.",
      "El sonido que hace un motor cuando funciona correctamente."
    ]
  },
  {
    enunciado: "¿Qué es la 'Semiótica' musical?",
    correcta: "El estudio de los signos musicales y cómo estos generan significado en el oyente.",
    incorrectas: [
      "La técnica de fabricar instrumentos de cuerda con madera de cedro.",
      "El análisis de las semillas que se usan para rellenar maracas."
    ]
  },
  {
    enunciado: "La música como 'arte liberal' en la Edad Media implicaba que:",
    correcta: "Su estudio liberaba el alma a través del conocimiento de las leyes del universo.",
    incorrectas: [
      "Los músicos podían tocar lo que quisieran sin seguir ninguna regla.",
      "La música era gratuita y no se cobraba por las actuaciones."
    ]
  },
  {
    enunciado: "El término 'Música Absoluta' se refiere a la música que:",
    correcta: "No tiene ninguna referencia externa (texto o programa) y se justifica por su propia estructura sonora.",
    incorrectas: [
      "Solo puede ser escuchada por personas con oído absoluto.",
      "Contiene todas las notas de la escala cromática al mismo tiempo."
    ]
  },
  {
    enunciado: "Como 'lenguaje universal', la música permite la comunicación porque:",
    correcta: "Comparte estructuras biológicas y psicológicas de percepción comunes a la especie humana.",
    incorrectas: [
      "Todas las culturas del mundo utilizan exactamente la misma escala mayor.",
      "Todo el mundo entiende el italiano, que es el idioma de la música."
    ]
  },
  {
    enunciado: "La música como ciencia en el siglo XX se ha expandido mediante:",
    correcta: "La psicoacústica, la informática musical y el análisis espectral del sonido.",
    incorrectas: [
      "La invención de partituras comestibles para mejorar la nutrición de los músicos.",
      "El estudio de los signos del zodiaco de los compositores famosos."
    ]
  },
  {
    enunciado: "En la estética romántica, la música era considerada el 'arte supremo' porque:",
    correcta: "Era el arte más capaz de expresar lo inefable y lo infinito al ser el menos material.",
    incorrectas: [
      "Era el arte que más dinero generaba en las salas de ópera.",
      "Era el único arte que permitía a los artistas ser famosos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Fisiología de la música'?",
    correcta: "El estudio de cómo la música afecta a los procesos corporales (pulso, respiración, ondas cerebrales).",
    incorrectas: [
      "El análisis de las posturas de los músicos para que no se cansen.",
      "El estudio de la anatomía de los instrumentos de madera."
    ]
  },
  {
    enunciado: "La definición de música como 'juego' (Homo Ludens) destaca:",
    correcta: "El componente creativo, exploratorio y placentero de la actividad musical.",
    incorrectas: [
      "La necesidad de ganar puntos para ser el mejor músico de la clase.",
      "Que los instrumentos deben tratarse como juguetes de plástico."
    ]
  },
  {
    enunciado: "La música 'concreta' de Pierre Schaeffer desafió la definición tradicional al:",
    correcta: "Utilizar ruidos y sonidos grabados de la realidad como material compositivo.",
    incorrectas: [
      "Estar escrita sobre bloques de hormigón y cemento.",
      "Prohibir el uso de cualquier instrumento que no fuera de piedra."
    ]
  },
  {
    enunciado: "¿Qué es la 'inteligencia musical' según Howard Gardner?",
    correcta: "Una de las inteligencias múltiples, referida a la capacidad de percibir, transformar y expresar formas musicales.",
    incorrectas: [
      "La habilidad de resolver exámenes de matemáticas escuchando a Bach.",
      "Ser capaz de decir el nombre de 100 compositores en un minuto."
    ]
  },
  {
    enunciado: "La música como 'fenómeno de comunicación' requiere tres elementos básicos:",
    correcta: "Emisor (compositor/intérprete), Canal (sonido) y Receptor (oyente).",
    incorrectas: [
      "Papel, lápiz y goma de borrar.",
      "Dinero, publicidad y un escenario grande."
    ]
  },
  {
    enunciado: "¿Qué define el 'carácter' de una obra musical?",
    correcta: "El sentimiento o estado de ánimo que la música pretende transmitir (alegre, heroico, fúnebre).",
    incorrectas: [
      "La personalidad difícil que suelen tener los directores de orquesta.",
      "El tipo de letra que se usa para escribir el título de la obra."
    ]
  },
  {
    enunciado: "La música como 'ciencia armónica' estudia:",
    correcta: "Las leyes de combinación simultánea de los sonidos y su jerarquía.",
    incorrectas: [
      "Cómo hacer que todos los músicos de una banda se lleven bien entre ellos.",
      "La limpieza de los instrumentos de viento para que brillen."
    ]
  },
  {
    enunciado: "El concepto de 'Gestalt' aplicado a la definición de música implica que:",
    correcta: "Percibimos una melodía como un todo coherente y no como una sucesión de notas sueltas.",
    incorrectas: [
      "Solo podemos entender la música si la escuchamos en alemán.",
      "La música es una suma de ruidos que no tienen ninguna relación entre sí."
    ]
  },
  {
    enunciado: "¿Qué es la 'Antropología de la música'?",
    correcta: "El estudio de la música como parte integrante de la cultura y la vida humana.",
    incorrectas: [
      "El estudio de los restos fósiles de instrumentos de hueso.",
      "La medición del cráneo de los grandes compositores de la historia."
    ]
  },
  {
    enunciado: "En el siglo XVIII, la música fue clasificada dentro de las 'Bellas Artes' junto a:",
    correcta: "La pintura, la escultura, la arquitectura, la poesía y la danza.",
    incorrectas: [
      "La gastronomía y la jardinería.",
      "La física y la química orgánica."
    ]
  },
  {
    enunciado: "La música como 'medio de comunicación social' se observa en:",
    correcta: "Los himnos, las canciones de protesta y las bandas sonoras que unifican emociones.",
    incorrectas: [
      "El silencio que se guarda en los ascensores públicos.",
      "Las señales acústicas de los semáforos para peatones."
    ]
  },
  {
    enunciado: "¿Qué diferencia la definición de música 'occidental' de otras visiones culturales?",
    correcta: "La occidental tiende a separar al artista del público; en muchas culturas étnicas es una actividad participativa.",
    incorrectas: [
      "La música occidental es la única que utiliza instrumentos de percusión.",
      "En occidente no se permite bailar mientras se escucha música sagrada."
    ]
  },
  {
    enunciado: "El 'lenguaje' musical utiliza la 'forma' para:",
    correcta: "Dar coherencia y sentido lógico al discurso sonoro a través de la repetición y el contraste.",
    incorrectas: [
      "Decidir si la partitura se imprime en papel cuadrado o rectangular.",
      "Que el músico no se canse de tocar siempre la misma nota."
    ]
  },
  {
    enunciado: "La música 'aleatoria' pone en duda la definición de música como 'organización' al:",
    correcta: "Introducir el azar como elemento constructivo de la obra.",
    incorrectas: [
      "Obligar a los músicos a tocar instrumentos que no conocen.",
      "Sortear el precio de las entradas mediante un bombo de lotería."
    ]
  },
  {
    enunciado: "La 'Hermenéutica' musical se ocupa de:",
    correcta: "La interpretación de los significados profundos y mensajes ocultos en las obras musicales.",
    incorrectas: [
      "La reparación de armonios antiguos en mal estado.",
      "La limpieza de las cuerdas del violín con productos químicos."
    ]
  },
  {
    enunciado: "¿Qué es el 'paisaje sonoro' (Soundscape)?",
    correcta: "El entorno acústico que nos rodea, considerado como una composición musical espontánea.",
    incorrectas: [
      "Un cuadro pintado por un músico que representa una montaña.",
      "La vista que se tiene desde la ventana del aula de música."
    ]
  },
  {
    enunciado: "La música es un lenguaje 'no referencial' porque:",
    correcta: "Un acorde de Do mayor no significa 'casa' o 'perro' de forma unívoca.",
    incorrectas: [
      "No se puede utilizar para dar órdenes de tráfico en la ciudad.",
      "No utiliza referencias bibliográficas en sus partituras."
    ]
  },
  {
    enunciado: "El fin último de definir la música desde múltiples perspectivas es:",
    correcta: "Comprender su complejidad como fenómeno humano integral que abarca lo físico, lo emocional y lo intelectual.",
    incorrectas: [
      "Lograr una sola definición corta que sirva para todos los diccionarios del mundo.",
      "Demostrar que la música es más importante que la lengua o las matemáticas."
    ]
  }
];