// 45-la-danza.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función antropológica primaria de la danza en las sociedades primitivas?",
    correcta: "Actuar como un rito de cohesión social, comunicación con lo sagrado y celebración de ciclos vitales.",
    incorrectas: [
      "Servir de entrenamiento exclusivo para guerreros de élite en gimnasios cerrados.",
      "La exhibición comercial de la belleza física para obtener beneficios económicos."
    ]
  },
  {
    enunciado: "La 'Danza Académica' o Ballet Clásico, consolidada en el siglo XVII, se caracteriza técnicamente por:",
    correcta: "La búsqueda de la verticalidad, el 'en dehors' (rotación externa de caderas) y una estructura de pasos codificada.",
    incorrectas: [
      "El uso predominante de movimientos naturales, el peso del cuerpo hacia el suelo y la improvisación libre.",
      "La prohibición de utilizar música y el uso exclusivo del silencio absoluto."
    ]
  },
  {
    enunciado: "Isadora Duncan es considerada una precursora de la Danza Moderna por:",
    correcta: "Romper con la rigidez del ballet, bailar descalza y buscar la expresión natural de las emociones desde el plexo solar.",
    incorrectas: [
      "Inventar las zapatillas de punta de acero para realizar giros infinitos.",
      "Introducir el uso de luces LED y tecnología digital en los teatros de ópera."
    ]
  },
  {
    enunciado: "¿Qué define a la 'Danza Tradicional' o folclórica desde una perspectiva educativa?",
    correcta: "Su vinculación con la identidad de un pueblo y su transmisión generacional como patrimonio cultural.",
    incorrectas: [
      "La necesidad de ser bailada individualmente frente a un espejo sin contacto con nadie.",
      "El hecho de ser inventada por empresas de marketing para promocionar destinos turísticos."
    ]
  },
  {
    enunciado: "En el contexto escolar de la LOMLOE, la danza debe tratarse como:",
    correcta: "Un lenguaje expresivo inclusivo que desarrolle la competencia motriz, rítmica y socioafectiva.",
    incorrectas: [
      "Una asignatura opcional solo para aquellos alumnos que demuestren un talento artístico profesional.",
      "Un castigo físico para los alumnos que no consiguen aprender las reglas del fútbol."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la 'Danza Contemporánea' a diferencia de la danza moderna clásica?",
    correcta: "El eclecticismo, el uso del suelo (floorwork), la experimentación y la ruptura de la narrativa lineal.",
    incorrectas: [
      "La obligación de llevar trajes de época y pelucas blancas durante toda la coreografía.",
      "La repetición monótona de un solo paso durante más de cuatro horas seguidas."
    ]
  },
  {
    enunciado: "Una adaptación didáctica de la danza para alumnos con discapacidad motriz consiste en:",
    correcta: "Centrar la expresión en los segmentos corporales móviles y trabajar la danza integrada mediante el contacto.",
    incorrectas: [
      "Eximirlos de la clase de danza y pedirles que cuenten los pasos de sus compañeros.",
      "Obligarlos a realizar exactamente los mismos movimientos de piernas que el resto del grupo."
    ]
  },
  {
    enunciado: "El 'Ritmo Musical' en la danza escolar ayuda al alumno a:",
    correcta: "Estructurar sus movimientos en el tiempo, mejorar la coordinación y la escucha activa.",
    incorrectas: [
      "Aprender a tocar la batería profesionalmente mientras realiza un salto de altura.",
      "Ignorar las señales del profesor para centrarse solo en el ruido de fondo."
    ]
  },
  {
    enunciado: "La 'Danza Jazz' tiene sus raíces históricas en:",
    correcta: "La danza social afroamericana, evolucionando hacia un estilo rítmico, dinámico y muy vinculado al espectáculo.",
    incorrectas: [
      "Los cantos gregorianos de los monasterios europeos del siglo XI.",
      "Las técnicas de meditación profunda de los monjes del Tíbet."
    ]
  },
  {
    enunciado: "En la LOMLOE, la danza contribuye a la 'Competencia en Conciencia y Expresión Culturales' mediante:",
    correcta: "El conocimiento y valoración de las danzas del mundo y el respeto a la diversidad cultural.",
    incorrectas: [
      "La memorización de la lista de todos los directores de teatros nacionales de Europa.",
      "La prohibición de bailar cualquier música que no sea del país de origen del alumno."
    ]
  },
  {
    enunciado: "La 'Frase Motriz' en la composición coreográfica es:",
    correcta: "Un conjunto de movimientos con sentido propio, principio y fin, similar a una frase gramatical.",
    incorrectas: [
      "El grito que lanza el profesor para que los alumnos dejen de bailar de golpe.",
      "Un tipo de calzado especial que solo se usa en las danzas regionales de montaña."
    ]
  },
  {
    enunciado: "¿Qué es la 'Danza de Carácter'?",
    correcta: "Una estilización de danzas folclóricas o nacionales integrada tradicionalmente en los ballets clásicos.",
    incorrectas: [
      "Una danza que solo pueden realizar las personas que tienen un carácter muy agresivo.",
      "Un ejercicio de fuerza máxima para fortalecer los músculos del cuello."
    ]
  },
  {
    enunciado: "La 'Danza de Contacto' (Contact Improvisation) se basa pedagógicamente en:",
    correcta: "La comunicación física a través del punto de contacto, el manejo del peso y la escucha mutua.",
    incorrectas: [
      "Aprender a empujar a los compañeros para echarlos de la pista de baile.",
      "Mantener una distancia mínima de 5 metros entre cada participante por seguridad."
    ]
  },
  {
    enunciado: "Una estrategia para 'Desinhibir' al alumnado ante la danza en Secundaria es:",
    correcta: "Comenzar con juegos de movimiento creativo grupales donde no haya una técnica impuesta.",
    incorrectas: [
      "Obligar a cada alumno a realizar un solo de tres minutos frente a toda la clase el primer día.",
      "Criticar negativamente la falta de ritmo de los alumnos que no tienen experiencia previa."
    ]
  },
  {
    enunciado: "La 'Danza Urbana' (Hip Hop, Breaking) aporta al currículo de EF:",
    correcta: "Una alta motivación, el desarrollo de la agilidad, la fuerza y una vía de expresión de la cultura juvenil.",
    incorrectas: [
      "La necesidad de pintar grafitis en las paredes del gimnasio para poder bailar.",
      "Un aumento del riesgo de lesiones por el uso de ropa excesivamente ancha."
    ]
  },
  {
    enunciado: "La 'Coreografía' se define técnicamente como:",
    correcta: "El arte de crear y organizar secuencias de movimientos en el espacio y el tiempo.",
    incorrectas: [
      "La capacidad de escribir libros sobre la anatomía de los pies de los bailarines.",
      "El sorteo aleatorio de las posiciones de los alumnos en el pabellón."
    ]
  },
  {
    enunciado: "En la enseñanza de danzas tradicionales, se debe priorizar:",
    correcta: "La comprensión del contexto histórico-social y el disfrute colectivo sobre la perfección técnica.",
    incorrectas: [
      "El uso de trajes regionales carísimos que deben comprar los padres obligatoriamente.",
      "La prohibición de realizar cualquier modificación rítmica a la música original."
    ]
  },
  {
    enunciado: "La 'Transferencia' de la danza a otros contenidos de EF ocurre cuando:",
    correcta: "La mejora del ritmo y la coordinación favorece la ejecución de gestos técnicos deportivos.",
    incorrectas: [
      "El alumno decide dejar la danza para apuntarse al equipo de baloncesto del centro.",
      "Se utiliza un balón de fútbol para realizar una coreografía de flamenco."
    ]
  },
  {
    enunciado: "La 'Danza Educativa Creativa' de Rudolf Laban propone que el alumno:",
    correcta: "Explore las posibilidades del movimiento a través del espacio, el tiempo, el peso y el flujo.",
    incorrectas: [
      "Memorice de forma robótica las coreografías que el profesor ha diseñado previamente.",
      "Sustituya el movimiento físico por el dibujo de formas geométricas en un papel."
    ]
  },
  {
    enunciado: "Un factor de 'Inclusión de Género' en la danza escolar es:",
    correcta: "Eliminar la distinción de pasos para 'chicos' o 'chicas' y promover el baile mixto y equitativo.",
    incorrectas: [
      "Hacer que las chicas siempre esperen sentadas a que los chicos las inviten a bailar.",
      "Prohibir que los chicos dancen para evitar estereotipos negativos."
    ]
  },
  {
    enunciado: "El 'Calentamiento' en una sesión de danza debe incluir:",
    correcta: "Movilidad articular, activación cardiovascular y toma de conciencia de la postura y el centro.",
    incorrectas: [
      "Comer alimentos con alto contenido en azúcar justo antes de empezar la sesión.",
      "Realizar estiramientos pasivos de 40 minutos sin haberse movido previamente."
    ]
  },
  {
    enunciado: "La 'Danza-Terapia' se diferencia de la danza educativa en que su fin es:",
    correcta: "Principalmente terapéutico, buscando la integración psicofísica y emocional del individuo.",
    incorrectas: [
      "Ganar concursos de baile televisivos mediante el uso de medicinas.",
      "Enseñar a los médicos a bailar mientras operan en el hospital."
    ]
  },
  {
    enunciado: "En el Bachillerato, la danza permite trabajar proyectos de:",
    correcta: "Creación colectiva, integrando música, escenografía y expresión corporal (ABP).",
    incorrectas: [
      "Diseño de calzado deportivo de alta competición para velocistas.",
      "Estudio de las leyes de la termodinámica aplicadas al sudor humano."
    ]
  },
  {
    enunciado: "La 'Evolución de la Danza' en el siglo XX destaca por:",
    correcta: "La democratización de los estilos, la ruptura de cánones estéticos y la fusión intercultural.",
    incorrectas: [
      "El retorno a los bailes de salón aristocráticos donde estaba prohibido sudar.",
      "La eliminación total de la música en favor del uso de ruidos de maquinaria industrial."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cinesfera' o Kinesfera aplicada a la danza?",
    correcta: "El espacio personal que rodea el cuerpo y que puede alcanzarse sin desplazar la base de sustentación.",
    incorrectas: [
      "La esfera de cristal que gira en el techo de las discotecas modernas.",
      "Un tipo de balón gigante utilizado en las danzas rusas tradicionales."
    ]
  },
  {
    enunciado: "La 'Evaluación Formativa' en la danza escolar consiste en:",
    correcta: "Aportar feedback constante sobre el proceso creativo y la implicación personal del alumnado.",
    incorrectas: [
      "Poner una nota basada exclusivamente en la flexibilidad de las piernas de cada alumno.",
      "Realizar un examen escrito sobre la biografía de todos los bailarines del siglo XVIII."
    ]
  },
  {
    enunciado: "El uso de la 'Flipped Classroom' en danza permitiría:",
    correcta: "Que el alumno vea los pasos básicos en un vídeo en casa para dedicar la clase a la creación grupal.",
    incorrectas: [
      "Que el profesor dé la vuelta al aula corriendo mientras los alumnos bailan solos.",
      "Que la clase de danza se realice íntegramente de forma teórica en el aula de informática."
    ]
  },
  {
    enunciado: "La 'Danza Social' (ej. bailes de salón, salsa) en la escuela favorece:",
    correcta: "La comunicación interpersonal, el respeto al espacio del otro y la competencia socioafectiva.",
    incorrectas: [
      "La preparación de los alumnos para trabajar como animadores en bodas y comuniones.",
      "El aislamiento de los alumnos que no tienen una pareja de baile asignada por el profesor."
    ]
  },
  {
    enunciado: "Un indicador de 'Competencia Motriz' en danza es:",
    correcta: "La capacidad de disociar segmentos corporales y ajustar el movimiento a diferentes calidades rítmicas.",
    incorrectas: [
      "Ser capaz de dar 50 vueltas sobre un solo pie sin marearse en ningún momento.",
      "Tener un traje de baile que haya costado más de 500 euros."
    ]
  },
  {
    enunciado: "La 'Danza de Lluvia' o danzas rituales cíclicas son ejemplos de:",
    correcta: "Danzas propiciatorias vinculadas a las necesidades de supervivencia de comunidades agrarias.",
    incorrectas: [
      "Ejercicios de resistencia aeróbica para mejorar la capacidad pulmonar de los deportistas.",
      "Bailes modernos inventados para realizar vídeos cortos en redes sociales."
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Improvisación' en la didáctica de la danza?",
    correcta: "Permite la exploración de nuevas formas de movimiento y desarrolla la creatividad del alumno.",
    incorrectas: [
      "Sirve para que el profesor no tenga que preparar la coreografía y pueda descansar.",
      "Es una señal de mala educación que debe evitarse a toda costa en el escenario."
    ]
  },
  {
    enunciado: "La 'Higiene Postural' en la danza previene patologías como:",
    correcta: "Sobrecargas lumbares por hiperlordosis compensatoria o lesiones de rodilla por mala alineación.",
    incorrectas: [
      "La aparición de caries dentales por el exceso de concentración mental.",
      "El crecimiento excesivo de las uñas de los pies debido al roce con el calzado."
    ]
  },
  {
    enunciado: "La 'Danza Folclórica Española' destaca por su riqueza en:",
    correcta: "Variedad regional (jotas, muñeiras, sardanas, flamenco) y el uso de implementos como castañuelas o palos.",
    incorrectas: [
      "El uso exclusivo de música electrónica de alta velocidad en todas sus variantes.",
      "Ser exactamente igual en todas las provincias de España sin ninguna diferencia."
    ]
  },
  {
    enunciado: "Un objetivo de la danza en el primer ciclo de la ESO es:",
    correcta: "El descubrimiento de las posibilidades expresivas del cuerpo y la reproducción de estructuras rítmicas sencillas.",
    incorrectas: [
      "La obtención de un título profesional de danza clásica otorgado por el centro educativo.",
      "La capacidad de bailar durante 24 horas seguidas sin beber agua ni comer."
    ]
  },
  {
    enunciado: "La 'Memoria Coreográfica' se trabaja mediante:",
    correcta: "La repetición significativa, el uso de claves visuales y la asociación de movimientos con la música.",
    incorrectas: [
      "La ingesta de suplementos vitamínicos específicos para el cerebro antes de la clase.",
      "Escribir mil veces el nombre de los pasos en un cuaderno de teoría."
    ]
  },
  {
    enunciado: "La 'Danza Butoh' (origen japonés) se caracteriza por:",
    correcta: "Movimientos extremadamente lentos, cuerpos pintados de blanco y una temática vinculada al dolor y la post-guerra.",
    incorrectas: [
      "Ser la danza más rápida del mundo, requiriendo una velocidad de piernas sobrehumana.",
      "El uso de vestidos de seda de colores brillantes y mucha alegría en los rostros."
    ]
  },
  {
    enunciado: "En la evaluación de la danza, el 'Portafolio' o diario de clase permite:",
    correcta: "Que el alumno reflexione sobre sus aprendizajes, dificultades y evolución estética.",
    incorrectas: [
      "Que el alumno guarde los recortes de prensa de sus bailarines favoritos.",
      "Sustituir la práctica física por la escritura de cuentos sobre la danza."
    ]
  },
  {
    enunciado: "La 'Danza Estilizada' es aquella que:",
    correcta: "Utiliza elementos del folclore pero los refina mediante una técnica académica para la escena.",
    incorrectas: [
      "Solo pueden bailar las personas que tienen una figura física extremadamente delgada.",
      "Se baila siempre con ropa de neopreno para sudar más y perder peso."
    ]
  },
  {
    enunciado: "El 'Uso del Espacio' en una coreografía grupal implica:",
    correcta: "Controlar las distancias, las simetrías/asimetrías y las trayectorias para crear una imagen visual coherente.",
    incorrectas: [
      "Ocupar el máximo espacio posible para que los compañeros no tengan sitio para bailar.",
      "Quedarse siempre en el mismo punto exacto del gimnasio sin moverse nunca."
    ]
  },
  {
    enunciado: "El fin último de la danza en el currículo de Educación Física es:",
    correcta: "Promover la formación integral de personas capaces de expresarse y disfrutar de la danza como hábito saludable.",
    incorrectas: [
      "Asegurar que el centro educativo gane el concurso regional de baile moderno.",
      "Que todos los alumnos se conviertan en expertos en historia del ballet ruso."
    ]
  }
];