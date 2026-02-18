// 42-juegos-y-deportes-tradicionales.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué diferencia técnica y cultural define al 'Juego Tradicional' frente al 'Deporte Moderno'?",
    correcta: "El juego tradicional está vinculado a la identidad local y la transmisión oral, con reglas flexibles adaptadas al contexto.",
    incorrectas: [
      "El juego tradicional carece por completo de reglas y se basa solo en el azar.",
      "El juego tradicional requiere obligatoriamente una licencia federativa internacional para ser practicado."
    ]
  },
  {
    enunciado: "Según la clasificación de Moreno Palos (1992), los juegos de 'Lanzamiento de precisión' incluyen modalidades como:",
    correcta: "La tángara (chito), la calva y los bolos.",
    incorrectas: [
      "Las carreras de sacos y el salto de pasiego.",
      "La lucha leonesa y el palo canario."
    ]
  },
  {
    enunciado: "En el marco de la LOMLOE, ¿cuál es el principal valor educativo de los juegos tradicionales?",
    correcta: "La preservación del patrimonio cultural y el fomento de la interculturalidad y el respeto a las señas de identidad.",
    incorrectas: [
      "La preparación física de alta intensidad para competiciones de crossfit.",
      "La sustitución de los saberes científicos por mitos y leyendas populares."
    ]
  },
  {
    enunciado: "El concepto de 'Patrimonio Lúdico' se refiere a:",
    correcta: "El conjunto de juegos y deportes que forman parte del acervo cultural de una comunidad y se transmiten generacionalmente.",
    incorrectas: [
      "El valor económico de las acciones de las empresas de videojuegos.",
      "La cantidad de balones y redes que posee un centro educativo en su inventario."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los 'Juegos de Fuerza' en el ámbito tradicional (ej. arrastre de piedra o corte de troncos)?",
    correcta: "Su origen vinculado a las labores agrícolas y forestales, transformando el trabajo en exhibición competitiva.",
    incorrectas: [
      "El uso exclusivo de máquinas de gimnasio de última generación para la ejecución.",
      "La prohibición de que el público asista a las demostraciones por seguridad."
    ]
  },
  {
    enunciado: "En la didáctica de los juegos populares en Secundaria, la 'Investigación-Acción' permite que el alumno:",
    correcta: "Entreviste a sus mayores para rescatar juegos olvidados y los ponga en práctica en el aula.",
    incorrectas: [
      "Busque en internet juegos de otros planetas para inventar una nueva asignatura.",
      "Se limite a mirar cómo el profesor juega mientras toma notas en silencio."
    ]
  },
  {
    enunciado: "Los 'Juegos de Lanzamiento a Distancia' (ej. lanzamiento de barra fija) requieren biomecánicamente:",
    correcta: "Una gran coordinación segmentaria y el aprovechamiento de la inercia del giro o la carrera previa.",
    incorrectas: [
      "Mantener los ojos cerrados para no distraerse con el paisaje.",
      "Que el objeto lanzado sea siempre de un material plástico biodegradable."
    ]
  },
  {
    enunciado: "La 'Pelota Vasca' se clasifica como un deporte tradicional de:",
    correcta: "Cancha dividida o contra pared (frontón), con una gran variedad de herramientas (mano, pala, cesta).",
    incorrectas: [
      "Lucha cuerpo a cuerpo con agarre al cinturón del adversario.",
      "Navegación a vela por aguas poco profundas."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Juego Popular' como agente de socialización?",
    correcta: "Facilita la cohesión comunitaria y el sentimiento de pertenencia a través de la participación en festividades.",
    incorrectas: [
      "Aislar a los individuos para que no aprendan las costumbres de otros pueblos.",
      "Obligar a los jóvenes a trabajar gratis para el ayuntamiento durante las fiestas."
    ]
  },
  {
    enunciado: "En los juegos tradicionales de 'Locomoción' (ej. carreras de barcas o de burros), el factor determinante es:",
    correcta: "La pericia del sujeto en el manejo de un medio de transporte o animal vinculado al entorno rural.",
    incorrectas: [
      "La velocidad a la que el sujeto puede escribir un correo electrónico.",
      "El uso de combustibles fósiles para acelerar el desplazamiento."
    ]
  },
  {
    enunciado: "Desde una perspectiva antropológica, los juegos tradicionales suelen ser reflejo de:",
    correcta: "La estructura social, los ritos de paso y la economía de la zona de origen.",
    incorrectas: [
      "La moda impuesta por las grandes productoras de cine de Hollywood.",
      "La necesidad de que todos los humanos tengan el mismo color de pelo."
    ]
  },
  {
    enunciado: "¿Cómo se aborda la 'Coeducación' en los juegos tradicionales en la escuela?",
    correcta: "Adaptando juegos que históricamente eran exclusivos de un sexo para que sean practicados de forma mixta.",
    incorrectas: [
      "Prohibiendo los juegos tradicionales porque todos son intrínsecamente machistas.",
      "Haciendo que los chicos y las chicas jueguen a juegos diferentes en patios separados."
    ]
  },
  {
    enunciado: "El 'Salto Pasiego' es una modalidad tradicional que consiste en:",
    correcta: "Superar obstáculos (ríos, vallas) utilizando una vara larga de avellano como apoyo.",
    incorrectas: [
      "Realizar saltos mortales sobre una cama elástica en un circo itinerante.",
      "Saltar a la comba mientras se lleva un cántaro de leche en la cabeza."
    ]
  },
  {
    enunciado: "En la LOMLOE, el estudio de los juegos tradicionales se vincula con la competencia:",
    correcta: "En conciencia y expresión culturales.",
    incorrectas: [
      "En comunicación en lengua extranjera exclusivamente.",
      "Matemática y competencia en ciencia y tecnología."
    ]
  },
  {
    enunciado: "¿Qué es el 'Lucha Canaria' en términos de reglamento tradicional?",
    correcta: "Un duelo de agarre al pantalón donde el objetivo es hacer que el oponente toque el suelo con cualquier parte del cuerpo excepto la planta de los pies.",
    incorrectas: [
      "Una competición de natación en aguas abiertas entre las siete islas.",
      "Un juego de cartas donde se apuesta sobre el resultado del fútbol."
    ]
  },
  {
    enunciado: "Un aspecto didáctico clave para los juegos tradicionales es la 'Familiarización con el Material', que consiste en:",
    correcta: "Reconocer y manejar objetos de origen natural o artesanal (madera, cuero, piedra).",
    incorrectas: [
      "Aprender a programar robots para que jueguen en lugar del alumno.",
      "Sustituir todo el material por versiones digitales en una tablet."
    ]
  },
  {
    enunciado: "Los 'Juegos de Bote' (ej. la pelota a mano) requieren una gran:",
    correcta: "Coordinación óculo-manual y percepción de trayectorias y velocidades.",
    incorrectas: [
      "Resistencia anaeróbica láctica de más de 20 horas de duración.",
      "Capacidad de bucear sin equipo de oxígeno durante el partido."
    ]
  },
  {
    enunciado: "La 'Evolución' del juego tradicional hacia el deporte federado conlleva:",
    correcta: "La burocratización, la estandarización de reglas y la pérdida de variantes locales.",
    incorrectas: [
      "Que el juego sea cada vez más fácil y que nadie pueda perder jamás.",
      "La obligatoriedad de que todos los jugadores hablen latín durante los encuentros."
    ]
  },
  {
    enunciado: "En los 'Juegos de Lanzamiento de Barra', la técnica busca:",
    correcta: "Aprovechar la palanca del brazo para lanzar un objeto pesado lo más lejos posible sin salir de la zona de tiro.",
    incorrectas: [
      "Doblar la barra de hierro con las manos para demostrar la fuerza máxima.",
      "Utilizar la barra para saltar por encima de una casa de campo."
    ]
  },
  {
    enunciado: "Un valor ético de los juegos populares es el 'Respeto a las Reglas Consensuadas', lo que significa:",
    correcta: "Aceptar las normas que el grupo ha decidido antes de empezar, fomentando la autonomía.",
    incorrectas: [
      "Que solo el alumno más rico puede decidir las normas de cada día.",
      "Que las reglas pueden cambiarse en mitad de una jugada si alguien va perdiendo."
    ]
  },
  {
    enunciado: "La 'Intergeneracionalidad' en los juegos tradicionales se fomenta mediante:",
    correcta: "El encuentro entre jóvenes y personas mayores para compartir experiencias lúdicas.",
    incorrectas: [
      "El estudio de los fósiles de dinosaurios que jugaban al fútbol hace millones de años.",
      "La prohibición de que los abuelos entren al centro educativo."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los 'Juegos de Naipes' tradicionales desde el punto de vista cognitivo?",
    correcta: "El desarrollo del cálculo mental, la memoria y la estrategia táctica.",
    incorrectas: [
      "La mejora de la flexibilidad de la columna vertebral al estar sentados.",
      "La pérdida total de la capacidad de hablar con los compañeros."
    ]
  },
  {
    enunciado: "En la LOMLOE, los juegos tradicionales contribuyen a la 'Salud' al:",
    correcta: "Promover formas de ocio activo que no dependen de tecnología costosa.",
    incorrectas: [
      "Asegurar que los alumnos no coman dulces mientras están jugando.",
      "Sustituir todas las medicinas por remedios naturales a base de hierbas."
    ]
  },
  {
    enunciado: "Los 'Juegos de Puntería' (ej. la calva) exigen una alta:",
    correcta: "Concentración y control de la motricidad fina en el brazo ejecutor.",
    incorrectas: [
      "Velocidad de carrera superior a los 30 km/h.",
      "Capacidad de saltar 2 metros de altura desde parado."
    ]
  },
  {
    enunciado: "¿Cuál es el origen de la mayoría de los 'Juegos de Fuerza' tradicionales?",
    correcta: "La rivalidad entre trabajadores de gremios (canteros, segadores, marineros) durante sus pausas laborales.",
    incorrectas: [
      "Un decreto real que obligaba a todos a levantar piedras para fortalecer el ejército.",
      "Un programa de televisión de realidad de la época pre-industrial."
    ]
  },
  {
    enunciado: "En la didáctica escolar, el 'Juego Tradicional' se diferencia del 'Juego Popular' en que:",
    correcta: "El tradicional está más ligado a un rito o época concreta, mientras el popular es más extendido y cambiante.",
    incorrectas: [
      "El tradicional solo se juega en China y el popular en Europa.",
      "No hay diferencia, el profesor puede usar los nombres al azar."
    ]
  },
  {
    enunciado: "Los 'Juegos con Animales' (ej. arrastre de bueyes) en el currículo de Secundaria deben:",
    correcta: "Ser analizados desde el respeto al bienestar animal y la evolución de la sensibilidad social.",
    incorrectas: [
      "Ser practicados obligatoriamente trayendo animales al instituto cada viernes.",
      "Ser eliminados de los libros de historia para que nadie sepa que existieron."
    ]
  },
  {
    enunciado: "La 'Adaptación de Materiales' en juegos tradicionales escolares permite:",
    correcta: "Utilizar pelotas de tenis en lugar de pelotas de cuero macizo para reducir el riesgo de lesiones.",
    incorrectas: [
      "Pintar los materiales de colores fluorescentes para que parezcan modernos.",
      "Utilizar solo materiales que pesen más de 50 kilos para fortalecer a los alumnos."
    ]
  },
  {
    enunciado: "Un indicador de 'Identidad Cultural' a través del juego es:",
    correcta: "El uso de terminología propia de la región para nombrar las reglas o los materiales.",
    incorrectas: [
      "El uso de uniformes de marcas deportivas internacionales famosas.",
      "Que el juego se practique solo en centros comerciales de lujo."
    ]
  },
  {
    enunciado: "La 'Estrategia' en los juegos de bolos tradicionales consiste en:",
    correcta: "Elegir el ángulo de impacto y el efecto de rotación según el estado del suelo (arenoso o duro).",
    incorrectas: [
      "Gritar al oponente para que se asuste y falle su lanzamiento.",
      "Esconder los bolos del rival para que no pueda jugar su turno."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Espacio Físico' en el juego tradicional?",
    correcta: "El juego se adapta a la orografía del terreno (plazas, eras, calles), condicionando su desarrollo.",
    incorrectas: [
      "El espacio no importa; todos los juegos tradicionales se juegan en una sala de 2x2 metros.",
      "Es obligatorio construir un estadio de cristal para cada juego popular."
    ]
  },
  {
    enunciado: "Los 'Juegos de Persecución' tradicionales (ej. el pañuelo o la cadena) desarrollan:",
    correcta: "La velocidad de reacción, la agilidad y la capacidad de cooperación táctica.",
    incorrectas: [
      "La paciencia para estar quietos durante 5 horas seguidas.",
      "La habilidad para esconderse bajo tierra durante varios días."
    ]
  },
  {
    enunciado: "La 'Metacognición' en este tema se trabaja pidiendo al alumno que reflexione sobre:",
    correcta: "Cómo ha cambiado la forma de jugar a lo largo de los siglos y por qué se mantienen ciertos juegos.",
    incorrectas: [
      "El número exacto de pelos que tiene el profesor de Educación Física.",
      "Lo que va a cenar cuando llegue a su casa después del instituto."
    ]
  },
  {
    enunciado: "¿Qué es el 'Lanzamiento de Reja' tradicional?",
    correcta: "Una modalidad donde se lanza una pieza de arado de hierro buscando la máxima distancia y el clavado en tierra.",
    incorrectas: [
      "Un juego de puntería donde se lanzan rejas de ventanas antiguas a una diana.",
      "Un rito religioso donde se lanzan rejas al mar para pedir buena pesca."
    ]
  },
  {
    enunciado: "En la LOMLOE, los juegos tradicionales promueven la 'Inclusión' al:",
    correcta: "Permitir que alumnos con diferentes capacidades físicas participen en juegos donde prima la maña sobre la fuerza.",
    incorrectas: [
      "Obligar a todos los alumnos a ganar al menos una vez para no sentirse mal.",
      "Hacer que los alumnos menos hábiles se encarguen de limpiar el material."
    ]
  },
  {
    enunciado: "Los 'Juegos Náuticos' tradicionales (ej. cucaña o regatas de traineras) dependen de:",
    correcta: "La relación del ser humano con el medio marino y la técnica de remo o equilibrio sobre el agua.",
    incorrectas: [
      "El uso de motores de gasolina de alta potencia para ganar velocidad.",
      "La capacidad de beber agua salada sin deshidratarse."
    ]
  },
  {
    enunciado: "La 'Burocratización' del deporte tradicional se produce cuando:",
    correcta: "Se crean ligas oficiales con árbitros, licencias y sanciones disciplinarias estandarizadas.",
    incorrectas: [
      "El juego se practica solo en las oficinas de los ayuntamientos.",
      "Se prohíbe el uso de papel para anotar los puntos de cada partida."
    ]
  },
  {
    enunciado: "El 'Levantamiento de Piedra' (Harri-jasotze) requiere una técnica de:",
    correcta: "Contacto constante de la piedra con el cuerpo para aprovechar el balanceo y los puntos de apoyo.",
    incorrectas: [
      "Levantar la piedra exclusivamente con la fuerza de los dedos de la mano.",
      "Lanzar la piedra al aire y recogerla antes de que toque el suelo."
    ]
  },
  {
    enunciado: "¿Qué valor aporta la 'Globalización' positiva al juego tradicional?",
    correcta: "La posibilidad de realizar intercambios culturales y conocer juegos de otras partes del mundo.",
    incorrectas: [
      "Que todos los juegos tradicionales del mundo pasen a llamarse igual.",
      "Que los juegos tradicionales se sustituyan por el fútbol profesional en todos los colegios."
    ]
  },
  {
    enunciado: "El fin último de trabajar los juegos tradicionales en Secundaria es:",
    correcta: "Garantizar la pervivencia cultural y ofrecer alternativas lúdicas saludables vinculadas al entorno.",
    incorrectas: [
      "Entrenar a los alumnos para que trabajen en el campo cuando terminen la ESO.",
      "Que todos los alumnos se conviertan en expertos historiadores del siglo XV."
    ]
  }
];