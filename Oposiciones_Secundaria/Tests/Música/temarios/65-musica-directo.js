// 65-musica-directo.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por 'Música en directo' en el contexto histórico?",
    correcta: "La ejecución musical realizada en tiempo real ante una audiencia presente física o virtualmente.",
    incorrectas: [
      "Cualquier grabación que suene muy fuerte en un altavoz.",
      "La música que se compone en un ordenador sin ser interpretada."
    ]
  },
  {
    enunciado: "¿Cómo era la audición musical en la Antigua Grecia?",
    correcta: "Vinculada a acontecimientos sociales, religiosos y competiciones en teatros al aire libre.",
    incorrectas: [
      "Se realizaba en salas de conciertos privadas con venta de entradas.",
      "La música estaba prohibida en público y solo se escuchaba en sótanos."
    ]
  },
  {
    enunciado: "En la Edad Media, el contexto principal de la música en directo era:",
    correcta: "El templo (liturgia) y las plazas públicas (juglares y trovadores).",
    incorrectas: [
      "Los grandes estadios de fútbol.",
      "Las cafeterías modernas con piano de cola."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la audición musical en las cortes del Renacimiento?",
    correcta: "Era un acto de distinción social para la aristocracia en salones privados.",
    incorrectas: [
      "Era gratuita para todo el pueblo en las catedrales.",
      "Se escuchaba principalmente a través de altavoces de madera."
    ]
  },
  {
    enunciado: "¿Qué edificio nació en Venecia en 1637, permitiendo la audición de ópera mediante el pago de una entrada?",
    correcta: "El Teatro San Cassiano (el primer teatro de ópera público).",
    incorrectas: [
      "El Royal Albert Hall.",
      "La Catedral de San Marcos."
    ]
  },
  {
    enunciado: "Durante el Barroco, la música en directo en las iglesias tenía una función:",
    correcta: "Persuasiva y emocional, buscando conmover al fiel (doctrina de los afectos).",
    incorrectas: [
      "De puro entretenimiento bailable durante la misa.",
      "Hacer que la gente se durmiera con sonidos monótonos."
    ]
  },
  {
    enunciado: "¿Qué son los 'Conciertos Espirituales' (Concerts Spirituels) nacidos en París en 1725?",
    correcta: "Las primeras series de conciertos públicos organizadas fuera de la corte y la iglesia.",
    incorrectas: [
      "Sesiones de espiritismo acompañadas de arpa.",
      "Conciertos donde los músicos flotaban en el aire."
    ]
  },
  {
    enunciado: "En el Clasicismo, el concierto público se consolidó gracias al ascenso de:",
    correcta: "La Burguesía.",
    incorrectas: [
      "El Campesinado.",
      "La Inquisición."
    ]
  },
  {
    enunciado: "¿Cómo cambió el protocolo de audición en las salas de concierto durante el siglo XIX?",
    correcta: "Se impuso el silencio respetuoso y la oscuridad en la sala para favorecer la concentración.",
    incorrectas: [
      "Se permitió que el público cantara y bailara durante las sinfonías.",
      "Los músicos tocaban de espaldas al público para no distraerse."
    ]
  },
  {
    enunciado: "¿Qué es una 'Schubertiada'?",
    correcta: "Reuniones privadas de amigos para escuchar la música de Schubert en salones domésticos.",
    incorrectas: [
      "Una carrera de caballos acompañada de música militar.",
      "Un tipo de tarta que se servía en los intermedios de la ópera."
    ]
  },
  {
    enunciado: "¿Qué arquitecto y compositor revolucionó la audición de la ópera ocultando la orquesta en un foso (el 'abismo místico')?",
    correcta: "Richard Wagner (en Bayreuth).",
    incorrectas: [
      "Giuseppe Verdi.",
      "Wolfgang Amadeus Mozart."
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo el 'Concierto de Masas' en el siglo XX?",
    correcta: "La aparición de estadios y grandes festivales que transformaron la audición en un ritual colectivo gigante.",
    incorrectas: [
      "Hizo que la música fuera solo para grupos de tres personas.",
      "Obligó a que la música se tocara siempre sin micrófonos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Acústica de Salas'?",
    correcta: "El estudio de cómo el sonido se comporta en un espacio cerrado para garantizar una audición óptima.",
    incorrectas: [
      "La ciencia que estudia cómo fabricar sillas cómodas para el público.",
      "El nombre del uniforme que usan los acomodadores."
    ]
  },
  {
    enunciado: "En un concierto de música contemporánea, el oyente a menudo debe:",
    correcta: "Adoptar una actitud participativa o enfrentarse a nuevas formas de disposición espacial.",
    incorrectas: [
      "Llevar obligatoriamente un instrumento para ayudar a la orquesta.",
      "Escuchar la música debajo del agua."
    ]
  },
  {
    enunciado: "¿Qué es el 'Recital'?",
    correcta: "Un concierto dedicado a un solo intérprete o un pequeño grupo, popularizado por Franz Liszt.",
    incorrectas: [
      "Un examen donde los músicos recitan la lista de las notas.",
      "La parte del teatro donde se venden las entradas."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Director de Orquesta' en el directo?",
    correcta: "Unificar la interpretación, marcar el tempo y equilibrar las intensidades del conjunto.",
    incorrectas: [
      "Tocar todos los instrumentos a la vez cuando alguien se cansa.",
      "Asegurarse de que el público no se levante de sus asientos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Reverberación' en una sala de audición?",
    correcta: "La permanencia del sonido después de que la fuente ha dejado de emitir, debido a las reflexiones en las paredes.",
    incorrectas: [
      "El miedo que siente el músico antes de empezar.",
      "Un tipo de aplauso muy largo al final de la obra."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Concierto de Cámara'?",
    correcta: "Su carácter íntimo, interpretado por un grupo reducido en espacios pequeños.",
    incorrectas: [
      "Que los músicos deben estar encerrados en una cámara de aire.",
      "Que solo se puede usar una cámara de video para grabarlo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Amplificación' en la música en directo moderna?",
    correcta: "El uso de medios electrónicos para aumentar el volumen sonoro y llegar a grandes audiencias.",
    incorrectas: [
      "Hacer que la partitura sea más grande para leerla mejor.",
      "Aumentar el número de músicos hasta llegar a mil."
    ]
  },
  {
    enunciado: "¿Cómo influye el 'Entorno' en la percepción de la música en directo?",
    correcta: "El espacio físico y social condiciona la predisposición psicológica y estética del oyente.",
    incorrectas: [
      "El entorno solo importa si hace mucho frío en la sala.",
      "No influye nada, la música suena igual en una catedral que en un garaje."
    ]
  },
  {
    enunciado: "¿Qué es el 'Feedback' emocional en un concierto?",
    correcta: "La energía y respuesta que el público devuelve al artista, influyendo en su interpretación.",
    incorrectas: [
      "El ruido que hace el cable del micrófono al arrastrarse.",
      "Cuando los músicos se gritan entre ellos en el escenario."
    ]
  },
  {
    enunciado: "¿Qué es un 'Festival de Música'?",
    correcta: "Un evento que agrupa diversos conciertos en un tiempo y lugar determinados, a menudo con una temática común.",
    incorrectas: [
      "Una fiesta de cumpleaños donde hay una radio encendida.",
      "Una tienda de campaña donde se venden instrumentos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Soundcheck' o prueba de sonido?",
    correcta: "El ajuste previo de los niveles y el equilibrio sonoro antes de que entre el público.",
    incorrectas: [
      "Comprobar que todos los músicos han desayunado correctamente.",
      "Un examen de oído que se le hace a los espectadores."
    ]
  },
  {
    enunciado: "En la audición de Jazz, es tradición:",
    correcta: "Aplaudir después de cada solo de los músicos, no solo al final de la pieza.",
    incorrectas: [
      "Guardar un silencio absoluto durante las tres horas de concierto.",
      "Lanzar flores al batería constantemente."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música de Calle' (Busking)?",
    correcta: "Interpretación en espacios públicos para transeúntes, a menudo de forma informal.",
    incorrectas: [
      "Música que trata sobre la construcción de carreteras.",
      "Música que solo se escucha dentro de los coches."
    ]
  },
  {
    enunciado: "¿Qué supuso la aparición del 'Concierto en Streaming'?",
    correcta: "La posibilidad de asistir a un directo de forma remota y global a través de dispositivos digitales.",
    incorrectas: [
      "Que el público tiene que nadar en un río para escuchar la música.",
      "Que los músicos no necesitan tocar, solo poner un video."
    ]
  },
  {
    enunciado: "¿Qué es el 'Aforo' de una sala?",
    correcta: "La capacidad máxima de personas que pueden asistir legal y cómodamente al evento.",
    incorrectas: [
      "El nombre del primer músico que tocó en directo en la historia.",
      "Un tipo de madera que se usa para los suelos de los escenarios."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Iluminación' en un concierto moderno?",
    correcta: "Refuerza la narrativa visual y emocional de la música interpretada.",
    incorrectas: [
      "Sirve únicamente para que los músicos vean las notas de la partitura.",
      "Es necesaria para que los instrumentos no se enfríen."
    ]
  },
  {
    enunciado: "El 'Concierto Didáctico' tiene como objetivo:",
    correcta: "Enseñar conceptos musicales al público de forma amena mientras se escucha la música.",
    incorrectas: [
      "Castigar a los alumnos que no han estudiado solfeo.",
      "Vender libros de texto a la salida del concierto."
    ]
  },
  {
    enunciado: "¿Qué es la 'Improvisación' en el directo?",
    correcta: "La creación musical espontánea en el momento de la ejecución ante el público.",
    incorrectas: [
      "Cuando un músico llega tarde porque no encontraba el teatro.",
      "Tocar con un instrumento que está roto."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bis' (o Encore)?",
    correcta: "Una pieza adicional que los artistas tocan al final de su programa tras la petición del público.",
    incorrectas: [
      "Tocar la misma canción dos veces seguidas porque la primera salió mal.",
      "Un tipo de instrumento de percusión metálico."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Silencio' en la audición contemporánea?",
    correcta: "Se valora como un elemento estructural y expresivo de la propia música.",
    incorrectas: [
      "Es una pérdida de tiempo que los músicos deben evitar.",
      "Solo sirve para que el público pueda toser sin molestar."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música a la carta' en contextos de hostelería?",
    correcta: "Poder elegir las piezas que un músico o sistema interpretará en el local.",
    incorrectas: [
      "Escribir canciones en el menú de un restaurante.",
      "Cocinar siguiendo el ritmo de una batería."
    ]
  },
  {
    enunciado: "¿Qué impacto tiene la 'Realidad Virtual' en la música en directo?",
    correcta: "Permite experiencias inmersivas donde el espectador siente que está en el escenario.",
    incorrectas: [
      "Hace que los músicos desaparezcan de verdad.",
      "Convierte todos los instrumentos en objetos de plástico."
    ]
  },
  {
    enunciado: "¿Qué es la 'Fila Cero'?",
    correcta: "Una entrada benéfica donde se dona dinero sin asistir físicamente al concierto.",
    incorrectas: [
      "La fila de asientos donde se sientan los músicos que no tocan.",
      "Una fila de asientos que no existe en el teatro."
    ]
  },
  {
    enunciado: "En la audición de ópera, los 'Bravos' son:",
    correcta: "Gritos de aprobación del público ante una interpretación excepcional.",
    incorrectas: [
      "Perros guardianes que vigilan la puerta del teatro.",
      "Músicos que tocan con mucha fuerza."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música de Capilla'?",
    correcta: "Música interpretada originalmente en ámbitos religiosos o cortesanos por un grupo estable de músicos.",
    incorrectas: [
      "Música que se toca solo llevando una capa puesta.",
      "Un tipo de danza muy lenta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Rigging' en un gran concierto en directo?",
    correcta: "La estructura de colgado de los equipos de sonido e iluminación sobre el escenario.",
    incorrectas: [
      "El nombre técnico de las cuerdas del violín.",
      "Un efecto de voz que suena como un robot."
    ]
  },
  {
    enunciado: "¿Qué es la 'Experiencia del Directo'?",
    correcta: "La vivencia irrepetible y efímera de la música que ocurre en un momento único.",
    incorrectas: [
      "Aprender a tocar un instrumento en diez minutos.",
      "Saber el nombre de todos los directores de orquesta."
    ]
  },
  {
    enunciado: "El estudio de la música en directo permite comprender:",
    correcta: "Cómo la música ha sido y es un fenómeno social de comunicación humana profunda.",
    incorrectas: [
      "La biografía detallada de los fabricantes de sillas de teatro.",
      "La historia de la electricidad en los edificios públicos."
    ]
  }
];