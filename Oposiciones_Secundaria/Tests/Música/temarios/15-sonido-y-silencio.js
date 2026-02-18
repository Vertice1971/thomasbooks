// 15-sonido-y-silencio.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la diferencia fundamental entre el sonido y el silencio desde un punto de vista físico?",
    correcta: "El sonido implica la presencia de vibraciones mecánicas en un medio, mientras que el silencio es la ausencia de dichas vibraciones.",
    incorrectas: [
      "El sonido es una onda y el silencio es una partícula de energía negativa.",
      "No existe diferencia física, solo una percepción psicológica subjetiva del oyente."
    ]
  },
  {
    enunciado: "La 'Altura' del sonido es el parámetro que nos permite distinguir entre sonidos:",
    correcta: "Agudos y graves, y depende directamente de la frecuencia de onda.",
    incorrectas: [
      "Fuertes y suaves, dependiendo de la amplitud de la vibración.",
      "Largos y cortos, dependiendo del tiempo de persistencia de la onda."
    ]
  },
  {
    enunciado: "¿Qué parámetro del sonido está relacionado con la cantidad de energía de la onda y se mide en decibelios (dB)?",
    correcta: "La Intensidad.",
    incorrectas: [
      "El Timbre.",
      "La Duración."
    ]
  },
  {
    enunciado: "El 'Timbre' se define a menudo como el 'color' del sonido. ¿De qué depende físicamente?",
    correcta: "De la forma de la onda y de la presencia y fuerza relativa de los sonidos armónicos.",
    incorrectas: [
      "De la velocidad a la que el sonido viaja a través del vacío.",
      "Únicamente de la longitud del instrumento musical utilizado."
    ]
  },
  {
    enunciado: "En la notación musical occidental, la 'Duración' de los sonidos se representa mediante:",
    correcta: "Las figuras musicales (redonda, blanca, negra, etc.) y los signos de prolongación.",
    incorrectas: [
      "La posición de las notas en las líneas y espacios del pentagrama.",
      "Las indicaciones de dinámica como 'forte' o 'piano'."
    ]
  },
  {
    enunciado: "¿Cómo se define el 'Ruido' desde una perspectiva acústica objetiva?",
    correcta: "Como un sonido complejo compuesto por frecuencias que no guardan una relación armónica simple o cuya onda es irregular.",
    incorrectas: [
      "Como cualquier sonido que supere los 20.000 Hz de frecuencia.",
      "Como el sonido que produce un instrumento cuando no está bien afinado."
    ]
  },
  {
    enunciado: "¿Qué importancia otorgó el compositor John Cage al silencio en su obra '4'33''?",
    correcta: "Reivindicó el silencio como un marco lleno de sonidos ambientales que también forman parte de la experiencia musical.",
    incorrectas: [
      "Lo utilizó para demostrar que los músicos no sabían leer partituras complejas.",
      "Lo introdujo para que el público pudiera hablar por teléfono durante el concierto."
    ]
  },
  {
    enunciado: "El fenómeno de la 'Enmascaramiento' ocurre cuando:",
    correcta: "Un sonido de mayor intensidad impide la percepción de otro sonido más débil emitido simultáneamente.",
    incorrectas: [
      "Los músicos utilizan máscaras para ocultar su identidad en el escenario.",
      "El sonido rebota en las paredes y cambia su frecuencia fundamental."
    ]
  },
  {
    enunciado: "La unidad de medida de la frecuencia, que determina la altura del sonido, es el:",
    correcta: "Hercio (Hz).",
    incorrectas: [
      "Vatio (W).",
      "Bit."
    ]
  },
  {
    enunciado: "En música, el silencio se utiliza con funciones:",
    correcta: "Estructurales, rítmicas, expresivas y para permitir la respiración del fraseo.",
    incorrectas: [
      "Únicamente para que el director pueda descansar los brazos durante la obra.",
      "Exclusivamente para indicar que el instrumento se ha roto."
    ]
  },
  {
    enunciado: "¿Qué es el 'Umbral de Audición'?",
    correcta: "La intensidad mínima de sonido que el oído humano es capaz de percibir.",
    incorrectas: [
      "La nota más aguda que puede tocar un violín sin romperse.",
      "La distancia máxima a la que se escucha un trueno."
    ]
  },
  {
    enunciado: "Los sonidos que se encuentran por encima del límite de audición humana (aprox. 20.000 Hz) se llaman:",
    correcta: "Ultrasonidos.",
    incorrectas: [
      "Infrasonidos.",
      "Supersonidos."
    ]
  },
  {
    enunciado: "La 'Agógica' es el aspecto de la interpretación musical que se ocupa de:",
    correcta: "Las ligeras variaciones en la duración y el tempo (ritardando, accelerando, etc.).",
    incorrectas: [
      "La potencia sonora de los instrumentos de viento metal.",
      "La clasificación de los instrumentos según su origen étnico."
    ]
  },
  {
    enunciado: "Desde el punto de vista de la 'Contaminación Sonora', el ruido se considera:",
    correcta: "Un factor ambiental que puede causar daños psicológicos y fisiológicos si se superan ciertos niveles.",
    incorrectas: [
      "Un elemento necesario para la vida moderna que no afecta a la salud.",
      "Un tipo de música contemporánea que solo gusta a los jóvenes."
    ]
  },
  {
    enunciado: "¿Qué parámetro permite diferenciar un 'Do' tocado por una flauta de un 'Do' tocado por una trompeta?",
    correcta: "El Timbre.",
    incorrectas: [
      "La Altura.",
      "La Intensidad."
    ]
  },
  {
    enunciado: "Un 'sonido puro' o tono puro se caracteriza por tener:",
    correcta: "Una única frecuencia sin armónicos, representada por una onda senoidal.",
    incorrectas: [
      "Muchos armónicos pero todos a un volumen muy bajo.",
      "Una duración que nunca termina."
    ]
  },
  {
    enunciado: "La 'Dinámica' musical hace referencia a:",
    correcta: "Las gradaciones de intensidad sonora a lo largo de una pieza musical.",
    incorrectas: [
      "La velocidad a la que el sonido se mueve por el aire.",
      "El ritmo de los pies de los bailarines de danza clásica."
    ]
  },
  {
    enunciado: "El 'Silencio' en la partitura tiene un valor:",
    correcta: "Proporcional a las figuras musicales (cada figura tiene su signo de silencio correspondiente).",
    incorrectas: [
      "Aleatorio, que depende de cuánto aire le quede al cantante.",
      "Infinito, hasta que el público empiece a aplaudir."
    ]
  },
  {
    enunciado: "¿Qué es un 'Infrasonido'?",
    correcta: "Un sonido cuya frecuencia es inferior a 20 Hz, inaudible para el ser humano pero perceptible por otros animales.",
    incorrectas: [
      "Un sonido que se produce debajo del agua del mar.",
      "El sonido que hace un músico cuando toca por debajo del escenario."
    ]
  },
  {
    enunciado: "La 'Resonancia' es el fenómeno por el cual:",
    correcta: "Un objeto vibra al recibir una onda sonora que coincide con su frecuencia natural de vibración.",
    incorrectas: [
      "El sonido desaparece al chocar con una cortina de terciopelo.",
      "El silencio se vuelve más profundo cuando hay mucha gente en la sala."
    ]
  },
  {
    enunciado: "Un sonido cuya onda es irregular y no periódica produce una sensación de:",
    correcta: "Ruido.",
    incorrectas: [
      "Afinación perfecta.",
      "Eco descendente."
    ]
  },
  {
    enunciado: "En el siglo XX, futuristas como Luigi Russolo reivindicaron:",
    correcta: "El uso de los ruidos de la era industrial como material legítimo para la creación musical.",
    incorrectas: [
      "La vuelta al canto gregoriano como única forma pura de música.",
      "La destrucción de todos los pianos para salvar los árboles."
    ]
  },
  {
    enunciado: "El 'Ataque' de un sonido es:",
    correcta: "La forma en que el sonido comienza, influyendo decisivamente en nuestro reconocimiento del timbre.",
    incorrectas: [
      "La parte más fuerte de un concierto de heavy metal.",
      "Cuando el director de orquesta se enfada con los músicos."
    ]
  },
  {
    enunciado: "La persistencia de un sonido en un espacio tras cesar la fuente se llama:",
    correcta: "Reverberación.",
    incorrectas: [
      "Silencio absoluto.",
      "Difracción."
    ]
  },
  {
    enunciado: "¿Qué es el 'Decaimiento' (Decay) de un sonido?",
    correcta: "El tiempo que tarda el sonido en pasar de su nivel máximo al nivel de sostenimiento.",
    incorrectas: [
      "La pérdida de memoria de un músico al hacerse mayor.",
      "La bajada de la afinación de las cuerdas debido al frío."
    ]
  },
  {
    enunciado: "La percepción humana del silencio total es prácticamente imposible debido a:",
    correcta: "Los sonidos internos del propio organismo (sistema nervioso, circulación sanguínea).",
    incorrectas: [
      "Que siempre hay alguien hablando en algún lugar del planeta.",
      "Que el aire siempre produce un silbido constante al rozar con las orejas."
    ]
  },
  {
    enunciado: "Un sonido de 100 Hz es percibido como:",
    correcta: "Un sonido grave.",
    incorrectas: [
      "Un sonido agudo.",
      "Un ultrasonido inaudible."
    ]
  },
  {
    enunciado: "La 'Amplitud' de la onda sonora se visualiza en la gráfica como:",
    correcta: "La altura o distancia entre el punto de equilibrio y la cresta de la onda.",
    incorrectas: [
      "La distancia entre dos valles sucesivos de la onda.",
      "El color que adquiere la línea al ser dibujada por un ordenador."
    ]
  },
  {
    enunciado: "En la música contemporánea, el silencio se utiliza a menudo para:",
    correcta: "Generar tensión dramática, delimitar texturas o invitar a la reflexión.",
    incorrectas: [
      "Ahorrar tinta al imprimir las partituras.",
      "Hacer que la obra dure menos y los músicos cobren lo mismo."
    ]
  },
  {
    enunciado: "El 'Espectro Sonoro' es:",
    correcta: "El conjunto de todas las frecuencias que forman un sonido complejo.",
    incorrectas: [
      "Un fantasma que aparece en los teatros de ópera antiguos.",
      "La lista de todas las canciones que se han grabado en la historia."
    ]
  },
  {
    enunciado: "¿A qué frecuencia vibra el aire para producir el 'La' que sirve de referencia para afinar?",
    correcta: "440 Hz.",
    incorrectas: [
      "120 Hz.",
      "1.000 Hz."
    ]
  },
  {
    enunciado: "La 'Localización Binaural' nos permite saber de dónde viene un sonido gracias a:",
    correcta: "La diferencia de tiempo y de intensidad con la que el sonido llega a cada uno de nuestros oídos.",
    incorrectas: [
      "El uso de una brújula musical conectada al cerebro.",
      "Que el sonido siempre viene del lado donde hay más luz."
    ]
  },
  {
    enunciado: "Un material 'Absorbente' acústico sirve para:",
    correcta: "Evitar el rebote del sonido (reflexión) en las paredes de una sala.",
    incorrectas: [
      "Amplificar el sonido de los violines de forma natural.",
      "Hacer que el silencio suene más fuerte en las iglesias."
    ]
  },
  {
    enunciado: "La 'Fase' de un sonido se refiere a:",
    correcta: "El estado de vibración de una onda en un momento determinado de su ciclo.",
    incorrectas: [
      "El periodo de la historia en el que se escribió la obra.",
      "La distancia entre el escenario y el camerino."
    ]
  },
  {
    enunciado: "¿Qué ocurre si dos ondas idénticas se encuentran en 'contrafase' (180 grados)?",
    correcta: "Se anulan entre sí, produciendo silencio (interferencia destructiva).",
    incorrectas: [
      "Se suman produciendo un sonido el doble de fuerte.",
      "Cambian de color de forma inmediata."
    ]
  },
  {
    enunciado: "La 'Eco-locación' es un sistema de orientación basado en:",
    correcta: "La emisión de sonidos y el análisis del tiempo que tarda el eco en volver tras chocar con objetos.",
    incorrectas: [
      "Buscar lugares donde haya mucho silencio para poder dormir.",
      "Un mapa de todos los lugares donde el silencio es obligatorio."
    ]
  },
  {
    enunciado: "El 'Ruido Blanco' contiene:",
    correcta: "Todas las frecuencias audibles con la misma intensidad.",
    incorrectas: [
      "Solo las frecuencias más agudas que el oído humano puede soportar.",
      "El sonido de un piano cuando todas las teclas se tocan a la vez."
    ]
  },
  {
    enunciado: "En didáctica musical, el juego de 'Silencio Positivo' busca:",
    correcta: "Desarrollar la capacidad de atención, concentración y la audición interna del alumno.",
    incorrectas: [
      "Castigar a los alumnos que hablan demasiado en clase de música.",
      "Que los alumnos aprendan a comunicarse mediante el lenguaje de signos."
    ]
  },
  {
    enunciado: "Un sonido con un 'Envolvente' de ataque lento y relajación larga es característico de:",
    correcta: "Instrumentos de cuerda frotada como el violonchelo o el sintetizador tipo 'pad'.",
    incorrectas: [
      "Instrumentos de percusión como la caja clara o las claves.",
      "El sonido de un disparo de cañón."
    ]
  },
  {
    enunciado: "La relación entre sonido y silencio es:",
    correcta: "Complementaria; la música existe gracias al contraste y la organización de ambos elementos en el tiempo.",
    incorrectas: [
      "Inexistente; la música solo es sonido y el silencio es el fallo de la música.",
      "De enemistad; cuanto más silencio hay, menos música puede existir."
    ]
  }
];