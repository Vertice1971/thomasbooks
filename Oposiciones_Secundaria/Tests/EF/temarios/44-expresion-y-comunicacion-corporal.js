// 44-expresion-y-comunicacion-corporal.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué define a la 'Expresión Corporal' como disciplina dentro de la Educación Física?",
    correcta: "El uso del cuerpo, el gesto y el movimiento como lenguaje para la comunicación de ideas, sentimientos y estados de ánimo.",
    incorrectas: [
      "La ejecución de ejercicios gimnásticos rítmicos con el único fin de mejorar la flexibilidad muscular.",
      "La imitación mecánica de movimientos deportivos para mejorar la eficiencia biomecánica."
    ]
  },
  {
    enunciado: "En los elementos fundamentales del movimiento de Rudolf Laban, el 'Espacio' se analiza a través de:",
    correcta: "La kinesfera (espacio personal), los niveles (alto, medio, bajo) y las direcciones o trayectorias.",
    incorrectas: [
      "La distancia exacta en kilómetros entre el centro educativo y el teatro más cercano.",
      "El número de metros cuadrados que ocupa el gimnasio dividido por el número de alumnos."
    ]
  },
  {
    enunciado: "¿A qué se refiere el componente 'Tiempo' en una secuencia expresiva corporal?",
    correcta: "A la duración, el ritmo (interno y externo), la velocidad y la pausa como elemento comunicativo.",
    incorrectas: [
      "A la hora exacta en la que comienza y termina la sesión de Educación Física.",
      "Al tiempo meteorológico (lluvia o sol) que condiciona la práctica en el exterior."
    ]
  },
  {
    enunciado: "La 'Intensidad' o energía del movimiento (Weight) en la expresión corporal permite diferenciar entre:",
    correcta: "Movimientos fuertes, pesados o enérgicos frente a movimientos ligeros, suaves o sutiles.",
    incorrectas: [
      "El número de pulsaciones por minuto alcanzadas durante un esfuerzo de resistencia.",
      "La cantidad de sudor que el alumno genera tras realizar diez minutos de saltos."
    ]
  },
  {
    enunciado: "Según la LOMLOE, las manifestaciones expresivas corporales tienen un valor educativo prioritario para:",
    correcta: "Desarrollar la inteligencia emocional, la autoaceptación y la competencia social y comunicativa.",
    incorrectas: [
      "Preparar a los alumnos para superar castings de programas de telerrealidad.",
      "Sustituir la comunicación verbal por el silencio absoluto durante toda la etapa escolar."
    ]
  },
  {
    enunciado: "¿Qué es la 'Kinésica' en el estudio de la comunicación no verbal?",
    correcta: "El estudio del significado expresivo de los gestos, la postura y los movimientos corporales.",
    incorrectas: [
      "La rama de la física que estudia el movimiento de los planetas y las estrellas.",
      "El análisis del tono de voz y las pausas en el discurso hablado."
    ]
  },
  {
    enunciado: "El concepto de 'Imagen Corporal' se refiere a:",
    correcta: "La representación mental y la valoración subjetiva que una persona tiene de su propio cuerpo.",
    incorrectas: [
      "La fotografía de carnet que aparece en el expediente académico del alumno.",
      "El parecido físico que existe entre un alumno y su deportista favorito."
    ]
  },
  {
    enunciado: "En expresión corporal, el 'Nivel Medio' del espacio es aquel que se sitúa:",
    correcta: "Entre la cadera y los hombros, asociado normalmente a la bipedestación y el equilibrio estable.",
    incorrectas: [
      "Por debajo de las rodillas, requiriendo contacto con el suelo (gateo, reptar).",
      "Por encima de la cabeza, utilizando saltos o extensiones máximas de brazos."
    ]
  },
  {
    enunciado: "¿Qué diferencia al 'Gesto' de la 'Postura'?",
    correcta: "El gesto es un movimiento segmentario con carga comunicativa inmediata; la postura es una disposición global y duradera del cuerpo.",
    incorrectas: [
      "El gesto es siempre involuntario y la postura es siempre un acto consciente y meditado.",
      "No existe diferencia; son términos sinónimos que se utilizan para evitar repeticiones."
    ]
  },
  {
    enunciado: "La 'Proxémica' es la parte de la comunicación no verbal que estudia:",
    correcta: "El uso que las personas hacen del espacio físico y la distancia interpersonal para comunicarse.",
    incorrectas: [
      "La velocidad a la que el impulso nervioso viaja desde el cerebro hasta los músculos.",
      "El significado de los colores de la ropa deportiva en las diferentes culturas."
    ]
  },
  {
    enunciado: "Un rasgo característico de las manifestaciones expresivas es la 'Creatividad', que se fomenta mediante:",
    correcta: "La búsqueda de respuestas motrices originales y divergentes ante un estímulo dado.",
    incorrectas: [
      "La copia exacta de la coreografía que el profesor muestra en un vídeo de internet.",
      "La realización de los ejercicios siguiendo estrictamente un orden alfabético."
    ]
  },
  {
    enunciado: "En la LOMLOE, el bloque de expresión corporal contribuye a la 'Competencia en Conciencia y Expresión Culturales' al:",
    correcta: "Valorar y respetar diferentes lenguajes artísticos y manifestaciones culturales del cuerpo.",
    incorrectas: [
      "Obligar a los alumnos a visitar museos de pintura clásica todos los fines de semana.",
      "Enseñar a los alumnos a dibujar el cuerpo humano con proporciones matemáticas."
    ]
  },
  {
    enunciado: "El 'Ritmo Interno' en expresión corporal se define como:",
    correcta: "La cadencia personal de movimiento vinculada a procesos fisiológicos (latidos, respiración) y estados anímicos.",
    incorrectas: [
      "El sonido que produce el profesor al golpear un tambor o un metrónomo.",
      "La velocidad de la música que suena por los altavoces del gimnasio."
    ]
  },
  {
    enunciado: "La 'Desinhibición' es un objetivo inicial en expresión corporal que busca:",
    correcta: "Reducir el sentido del ridículo y el miedo al juicio externo para favorecer la libertad de movimiento.",
    incorrectas: [
      "Hacer que los alumnos se porten mal y falten al respeto al profesor de forma voluntaria.",
      "Eliminar el cansancio físico mediante técnicas de hipnosis colectiva."
    ]
  },
  {
    enunciado: "La 'Técnica Alexander' o la 'Eutonía' son métodos que en expresión corporal ayudan a:",
    correcta: "La toma de conciencia corporal, la regulación del tono muscular y la mejora de la postura.",
    incorrectas: [
      "Aumentar la masa muscular mediante el levantamiento de pesas muy pesadas.",
      "Correr maratones en el menor tiempo posible sin sentir dolor en las articulaciones."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Silencio' en una puesta en escena expresiva?",
    correcta: "Funciona como un elemento de tensión, pausa necesaria o subrayado del mensaje gestual.",
    incorrectas: [
      "Indica que el profesor se ha olvidado de poner la música y la clase se ha detenido.",
      "Es una señal de castigo para los alumnos que han hablado demasiado durante la sesión."
    ]
  },
  {
    enunciado: "La 'Mirada' en la comunicación corporal es fundamental porque:",
    correcta: "Establece el canal de comunicación, regula los turnos de intervención y transmite sinceridad o intención.",
    incorrectas: [
      "Permite ver los errores de los compañeros para poder criticarlos después de la clase.",
      "Sirve para que el sudor no entre en los ojos durante los movimientos rápidos."
    ]
  },
  {
    enunciado: "Un ejercicio de 'Espejo' en expresión corporal trabaja principalmente:",
    correcta: "La observación, la empatía motriz y la sincronización con el compañero.",
    incorrectas: [
      "La fuerza máxima de los brazos al empujar una superficie de cristal.",
      "La capacidad de peinarse correctamente sin necesidad de mirar un reflejo real."
    ]
  },
  {
    enunciado: "¿Qué es el 'Gesto Ilustrador'?",
    correcta: "Aquel que acompaña al lenguaje verbal para recalcar o clarificar lo que se está diciendo.",
    incorrectas: [
      "Un dibujo que el alumno debe realizar en su cuaderno sobre la anatomía del brazo.",
      "Un movimiento que se hace con los pies para indicar que se tiene hambre."
    ]
  },
  {
    enunciado: "En el análisis del movimiento, el 'Flujo' (Flow) puede ser:",
    correcta: "Conducido (controlado y precavido) o libre (fluido y abandonado).",
    incorrectas: [
      "Líquido o gaseoso, dependiendo de la temperatura ambiente del gimnasio.",
      "Rápido o lento, pero siempre siguiendo el ritmo de una batería electrónica."
    ]
  },
  {
    enunciado: "La 'Simbolización' en expresión corporal consiste en:",
    correcta: "Asignar un significado imaginario a un objeto o movimiento real (ej. una pica es un caballo).",
    incorrectas: [
      "Aprender a escribir los símbolos de los elementos químicos con los dedos de los pies.",
      "Llevar una camiseta con el logotipo del centro educativo en todas las sesiones."
    ]
  },
  {
    enunciado: "La 'Evaluación' en expresión corporal según la LOMLOE debe ser:",
    correcta: "Continua y formadora, valorando el proceso creativo y la capacidad de expresión personal.",
    incorrectas: [
      "Una nota basada exclusivamente en la belleza física del alumno o alumna.",
      "Un examen de selección múltiple sobre la vida de los coreógrafos del siglo XIX."
    ]
  },
  {
    enunciado: "¿Qué es el 'Tono Muscular' en el contexto expresivo?",
    correcta: "El grado de tensión muscular necesario para mantener una postura o realizar un gesto con intención comunicativa.",
    incorrectas: [
      "El color que adquiere el músculo cuando se expone a la luz del sol durante mucho tiempo.",
      "El sonido que producen los tendones al estirarse bruscamente en un salto."
    ]
  },
  {
    enunciado: "La 'Pantomima' se diferencia de la expresión corporal general en que:",
    correcta: "Se basa en la imitación de acciones reales y objetos ausentes mediante el uso exclusivo del gesto.",
    incorrectas: [
      "Requiere obligatoriamente el uso de máscaras de madera y trajes de colores brillantes.",
      "Es una actividad que solo pueden realizar los alumnos que han suspendido gimnasia."
    ]
  },
  {
    enunciado: "El 'Espacio Social' en proxémica se sitúa aproximadamente:",
    correcta: "Entre 1.2 y 3.6 metros, utilizado para interacciones con desconocidos o en el ámbito laboral.",
    incorrectas: [
      "A menos de 45 centímetros, reservado para personas con mucha confianza.",
      "A más de 10 kilómetros, utilizado para la comunicación mediante señales de humo."
    ]
  },
  {
    enunciado: "La 'Transferencia' en expresión corporal ocurre cuando:",
    correcta: "La mejora en el control postural expresivo facilita la ejecución técnica en otros deportes.",
    incorrectas: [
      "El alumno se cambia de grupo de trabajo porque no se lleva bien con sus compañeros.",
      "Se utiliza un balón de fútbol para realizar un ejercicio de danza contemporánea."
    ]
  },
  {
    enunciado: "Un objetivo de la expresión corporal en el Bachillerato es:",
    correcta: "La elaboración de proyectos artísticos colectivos que integren diferentes lenguajes (música, luz, cuerpo).",
    incorrectas: [
      "El dominio de la técnica del ballet clásico de puntas para todos los alumnos.",
      "La memorización de todos los diálogos de las obras de teatro de Shakespeare."
    ]
  },
  {
    enunciado: "La 'Escucha Corporal' consiste en:",
    correcta: "Prestar atención a las sensaciones propioceptivas y a las señales que envía el cuerpo para ajustar el movimiento.",
    incorrectas: [
      "Poner la oreja sobre el pecho del compañero para oír sus latidos cardíacos.",
      "Escuchar música con auriculares mientras se realiza una carrera de resistencia."
    ]
  },
  {
    enunciado: "¿Cómo se trabaja la 'Inclusión' en expresión corporal?",
    correcta: "Adaptando las consignas para que cada alumno encuentre su propia forma de moverse según sus posibilidades.",
    incorrectas: [
      "Obligando a los alumnos con discapacidad a mirar desde la grada sin participar.",
      "Haciendo que todos los alumnos se muevan exactamente de la misma forma robótica."
    ]
  },
  {
    enunciado: "El 'Gesto Adaptador' tiene como función:",
    correcta: "Canalizar estados de tensión o nerviosismo de forma inconsciente (ej. tocarse el pelo).",
    incorrectas: [
      "Indicar al compañero que debe cambiar de posición en la coreografía.",
      "Sustituir la raqueta por la mano en un partido de bádminton improvisado."
    ]
  },
  {
    enunciado: "La 'Composición' en expresión corporal es el proceso de:",
    correcta: "Organizar y estructurar los elementos del movimiento en el tiempo y el espacio para crear una unidad con sentido.",
    incorrectas: [
      "Mezclar diferentes tipos de pinturas para decorar el escenario del gimnasio.",
      "Escribir una canción utilizando solo términos de anatomía y fisiología."
    ]
  },
  {
    enunciado: "La 'Higiene Postural' en este bloque se trabaja mediante:",
    correcta: "La toma de conciencia de las alineaciones óseas y la eliminación de tensiones innecesarias.",
    incorrectas: [
      "Ducharse con agua fría después de cada sesión de danza expresiva.",
      "Llevar la mochila siempre sobre un solo hombro para fortalecer el trapecio."
    ]
  },
  {
    enunciado: "El 'Foco' en una acción expresiva es:",
    correcta: "El punto hacia donde se dirige la atención y la energía del movimiento (puede ser interno o externo).",
    incorrectas: [
      "La lámpara de alta potencia que ilumina el centro del pabellón deportivo.",
      "El objetivo de la cámara de fotos que el profesor usa para evaluar."
    ]
  },
  {
    enunciado: "¿Qué es el 'Contrapunto' rítmico en la comunicación corporal?",
    correcta: "Realizar movimientos que contrastan o se oponen al ritmo de la música o del compañero.",
    incorrectas: [
      "Contar los puntos que cada equipo ha conseguido en una competición de baile.",
      "Ponerse de puntillas para parecer más alto que el adversario."
    ]
  },
  {
    enunciado: "La 'Interdisciplinariedad' en expresión corporal permite conectar con:",
    correcta: "Música, Educación Plástica, Literatura y Filosofía.",
    incorrectas: [
      "Física cuántica y astrofísica avanzada exclusivamente.",
      "No conecta con ninguna otra materia; es una asignatura aislada por ley."
    ]
  },
  {
    enunciado: "El 'Esquema Corporal' se diferencia de la 'Imagen Corporal' en que el primero es:",
    correcta: "Una representación neurofisiológica de las partes del cuerpo y sus posibilidades de movimiento.",
    incorrectas: [
      "La opinión que tienen los padres sobre el físico de sus hijos e hijas.",
      "Un dibujo técnico que se realiza en la asignatura de tecnología."
    ]
  },
  {
    enunciado: "La 'Metacognición' se aplica en expresión corporal cuando el alumno:",
    correcta: "Reflexiona sobre qué emociones le ha resultado más difícil transmitir y por qué.",
    incorrectas: [
      "Aprende de memoria los nombres de todos los músculos del cuello.",
      "Copia la reflexión final de su compañero en el diario de clase."
    ]
  },
  {
    enunciado: "La 'Improvisación' como recurso didáctico busca:",
    correcta: "Desarrollar la espontaneidad, la escucha y la capacidad de respuesta inmediata ante estímulos imprevistos.",
    incorrectas: [
      "Que el profesor no tenga que preparar la clase y pueda sentarse a mirar.",
      "Que los alumnos hagan lo que quieran sin seguir ningún tipo de norma de seguridad."
    ]
  },
  {
    enunciado: "Un indicador de 'Competencia Motriz' en este bloque es:",
    correcta: "La capacidad de disociar segmentos corporales y controlar el tono muscular según la intención.",
    incorrectas: [
      "Tener un canal de redes sociales con muchos seguidores viendo coreografías famosas.",
      "Ser capaz de correr 100 metros en menos de 12 segundos."
    ]
  },
  {
    enunciado: "El fin último de la expresión corporal en el currículo es:",
    correcta: "La formación de personas capaces de comunicarse íntegramente y de disfrutar de su dimensión expresiva.",
    incorrectas: [
      "Que todos los alumnos se conviertan en actores o bailarines profesionales.",
      "Eliminar el habla humana en favor de un mundo de gestos silenciosos."
    ]
  }
];