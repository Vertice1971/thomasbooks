// 12-musica-movimiento-gesto.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el objetivo principal de integrar el movimiento en la educación musical según la rítmica de Dalcroze?",
    correcta: "Establecer una conexión sólida entre la mente y el cuerpo para experimentar el ritmo y la dinámica de forma vivenciada.",
    incorrectas: [
      "Sustituir la lectura de partituras por coreografías de danza clásica obligatorias.",
      "Mejorar la fuerza muscular del alumno para que pueda cargar instrumentos pesados."
    ]
  },
  {
    enunciado: "En los parámetros del movimiento, el 'Espacio' se refiere a:",
    correcta: "La trayectoria, el nivel (alto, medio, bajo) y la amplitud del gesto corporal en relación con el entorno.",
    incorrectas: [
      "La distancia física en kilómetros entre el aula de música y el escenario del teatro.",
      "El número de asientos disponibles en la sala para que el público se siente."
    ]
  },
  {
    enunciado: "El 'Gesto' en la dirección orquestal tiene como función técnica principal:",
    correcta: "Anticipar el pulso, indicar la entrada de los instrumentos y definir el carácter y la dinámica de la música.",
    incorrectas: [
      "Realizar movimientos gimnásticos para que el director no se canse durante el concierto.",
      "Ocultar la partitura a los músicos para que tengan que tocar de memoria."
    ]
  },
  {
    enunciado: "¿Qué es el 'Anacrusis' gestual en la dirección?",
    correcta: "El movimiento preparatorio ascendente que precede al primer tiempo fuerte y marca el tempo y la intensidad inicial.",
    incorrectas: [
      "El saludo final que el director hace al público al terminar la obra.",
      "La señal que indica a los músicos que deben guardar sus instrumentos."
    ]
  },
  {
    enunciado: "En la expresión corporal musical, el parámetro del 'Tiempo' se vincula con:",
    correcta: "La velocidad (tempo), la duración de los movimientos y la capacidad de reacción ante el estímulo sonoro.",
    incorrectas: [
      "El clima meteorológico que hace el día del examen práctico.",
      "La fecha histórica en la que se compuso la pieza que se está bailando."
    ]
  },
  {
    enunciado: "¿Qué define al 'Peso' como factor del movimiento según Rudolf Laban?",
    correcta: "La intención de la fuerza aplicada al movimiento, que puede oscilar entre lo ligero y lo firme/pesado.",
    incorrectas: [
      "La masa corporal exacta del alumno medida en una báscula médica.",
      "El peso en gramos de la baqueta que se utiliza para golpear el xilófono."
    ]
  },
  {
    enunciado: "La 'Eutonía' aplicada a la música busca:",
    correcta: "El equilibrio del tono muscular adecuado para realizar la acción musical con eficacia y sin tensiones innecesarias.",
    incorrectas: [
      "La capacidad de cantar diez notas diferentes en un solo segundo.",
      "Un estado de sueño profundo inducido por la escucha de música ambiental."
    ]
  },
  {
    enunciado: "En la interpretación instrumental, el 'Gesto Técnico' es aquel que:",
    correcta: "Es estrictamente necesario para producir el sonido (ej. la caída del brazo sobre la tecla del piano).",
    incorrectas: [
      "El músico realiza de forma exagerada para impresionar al público asistente.",
      "Consiste en mover la cabeza al ritmo de la música sin tocar ninguna nota."
    ]
  },
  {
    enunciado: "Un ejercicio de 'Inhibición del movimiento' en el aula consiste en:",
    correcta: "Detener bruscamente cualquier acción motriz en el momento en que cesa el estímulo sonoro.",
    incorrectas: [
      "Prohibir que los alumnos muevan las manos durante toda la clase de música.",
      "Hacer que los alumnos cierren los ojos y no piensen en nada."
    ]
  },
  {
    enunciado: "¿Qué es la 'Disociación Motriz' en educación musical?",
    correcta: "La capacidad de realizar movimientos diferentes y coordinados de forma simultánea con distintas partes del cuerpo.",
    incorrectas: [
      "La separación física de los alumnos en dos grupos para que no se peleen.",
      "Olvidar cómo se toca un instrumento tras haberlo aprendido años atrás."
    ]
  },
  {
    enunciado: "El 'Ictus' en el gesto de dirección es:",
    correcta: "El punto exacto de la trayectoria gestual donde se marca el pulso o tiempo de compás.",
    incorrectas: [
      "Una enfermedad súbita que afecta a los músicos profesionales de viento.",
      "El nombre técnico del palo de madera que utiliza el director."
    ]
  },
  {
    enunciado: "En el movimiento, el factor 'Flujo' (Flow) se refiere a:",
    correcta: "La continuidad o interrupción de la energía del movimiento, pudiendo ser libre o conducido.",
    incorrectas: [
      "La cantidad de agua que beben los bailarines durante el ensayo.",
      "El número de notas que se pueden escribir en un solo pentagrama."
    ]
  },
  {
    enunciado: "La 'Kinestesia' es el sentido que nos permite:",
    correcta: "Percibir la posición y el movimiento de las partes de nuestro cuerpo sin necesidad de usar la vista.",
    incorrectas: [
      "Escuchar sonidos por debajo del umbral de los 20 hercios.",
      "Distinguir el color de los sonidos de una orquesta sinfónica."
    ]
  },
  {
    enunciado: "Un gesto 'legato' en la música se traduce corporalmente como:",
    correcta: "Movimientos fluidos, continuos y redondeados, sin cortes bruscos en la trayectoria.",
    incorrectas: [
      "Movimientos secos, cortos y espasmódicos.",
      "Permanecer completamente inmóvil mientras suena la música."
    ]
  },
  {
    enunciado: "En la rítmica Dalcroze, los ejercicios de 'Sustitución' implican:",
    correcta: "Reemplazar un ritmo escuchado por otro movimiento corporal preestablecido de forma instantánea.",
    incorrectas: [
      "Cambiar de instrumento con el compañero cada vez que el profesor da una palmada.",
      "Sustituir al profesor por un alumno para que dirija la clase."
    ]
  },
  {
    enunciado: "El 'Gesto Expresivo' en la música tiene como objetivo:",
    correcta: "Comunicar emociones, intenciones y matices estéticos que no están presentes en la técnica pura.",
    incorrectas: [
      "Contar el número de compases que quedan para terminar la pieza.",
      "Indicar a los músicos que deben tocar más rápido para terminar antes la clase."
    ]
  },
  {
    enunciado: "¿Qué es la 'Interiorización del ritmo'?",
    correcta: "La capacidad de sentir y mantener el pulso musical internamente mediante la memoria muscular y auditiva.",
    incorrectas: [
      "Cantar una canción en voz muy baja para que nadie la oiga.",
      "Memorizar la biografía de los compositores de la época barroca."
    ]
  },
  {
    enunciado: "En dirección, el esquema básico de compás de 'cuatro tiempos' sigue la trayectoria:",
    correcta: "Abajo, Izquierda, Derecha, Arriba.",
    incorrectas: [
      "Arriba, Abajo, Derecha, Izquierda.",
      "Círculo, Cruz, Triángulo, Punto."
    ]
  },
  {
    enunciado: "La 'Lateralidad' en el movimiento musical es importante para:",
    correcta: "Desarrollar la independencia de manos y pies en la interpretación instrumental (ej. piano o batería).",
    incorrectas: [
      "Aprender a escribir música utilizando solo la mano derecha.",
      "Saber en qué lado del escenario se encuentran las salidas de emergencia."
    ]
  },
  {
    enunciado: "¿Qué relación existe entre la 'Altura' del sonido y el movimiento?",
    correcta: "Suele existir una asociación natural entre sonidos agudos y movimientos hacia arriba, y sonidos graves hacia abajo.",
    incorrectas: [
      "Ninguna, los sonidos agudos siempre se representan moviendo los pies.",
      "Los sonidos graves obligan al cuerpo a girar sobre sí mismo de forma circular."
    ]
  },
  {
    enunciado: "El concepto de 'Proxemia' en una agrupación musical se refiere a:",
    correcta: "La distancia física entre los intérpretes y cómo esta afecta a la comunicación y la escucha colectiva.",
    incorrectas: [
      "La calidad de los instrumentos de viento madera de la orquesta.",
      "El tiempo que tarda el director en llegar al podio desde el camerino."
    ]
  },
  {
    enunciado: "Un movimiento 'Staccato' se visualiza gestualmente como:",
    correcta: "Movimientos breves, secos y con una detención clara de la energía después de cada gesto.",
    incorrectas: [
      "Un balanceo lento de todo el cuerpo de izquierda a derecha.",
      "Cerrar los ojos y levantar los brazos hacia el techo muy despacio."
    ]
  },
  {
    enunciado: "¿Qué es el 'Acompañamiento Gestual' en las canciones infantiles?",
    correcta: "El uso de mímica o gestos que refuerzan el significado del texto o la estructura melódica.",
    incorrectas: [
      "Que el profesor gesticule mucho para que los niños no se aburran.",
      "Tocar las palmas muy fuerte para tapar la voz de los niños que cantan mal."
    ]
  },
  {
    enunciado: "La 'Coordinación Óculo-manual' es fundamental en música para:",
    correcta: "La lectura de partituras simultánea a la ejecución instrumental.",
    incorrectas: [
      "Escuchar música mientras se mira un paisaje por la ventana.",
      "Hacer deporte mientras se silba una melodía popular."
    ]
  },
  {
    enunciado: "En el análisis del movimiento de Laban, el 'Espacio Directo' se caracteriza por:",
    correcta: "Trayectorias rectas y enfocadas hacia un punto concreto, sin desviaciones.",
    incorrectas: [
      "Moverse de forma aleatoria por toda el aula sin mirar a nadie.",
      "Trayectorias ondulantes y circulares que no tienen un destino fijo."
    ]
  },
  {
    enunciado: "La 'Postura Corporal' correcta del músico tiene como fin:",
    correcta: "Prevenir lesiones, optimizar la respiración y facilitar la libertad de movimiento.",
    incorrectas: [
      "Que el músico parezca más alto y elegante delante de la cámara.",
      "Asegurar que el instrumento no se raye contra la ropa del intérprete."
    ]
  },
  {
    enunciado: "¿Qué es una 'Coreografía Didáctica'?",
    correcta: "Una secuencia de movimientos diseñada para ayudar a comprender la estructura formal de una obra musical.",
    incorrectas: [
      "Un baile difícil que los alumnos deben aprender para una gala de televisión.",
      "Moverse sin sentido por el aula mientras suena la radio de fondo."
    ]
  },
  {
    enunciado: "El 'Esfuerzo' (Effort) en la teoría de Laban combina los factores de:",
    correcta: "Espacio, Tiempo, Peso y Flujo.",
    incorrectas: [
      "Ritmo, Melodía, Armonía y Timbre.",
      "Altura, Intensidad, Duración y Color."
    ]
  },
  {
    enunciado: "En la dirección, una indicación de 'Subito Piano' requiere:",
    correcta: "Un cambio brusco en el tamaño del gesto, reduciéndolo drásticamente de forma inmediata.",
    incorrectas: [
      "Dejar de mover los brazos y sentarse en el suelo durante un minuto.",
      "Hacer un gesto muy grande y lento para avisar a los músicos."
    ]
  },
  {
    enunciado: "La 'Mímica' musical ayuda en el aula a trabajar:",
    correcta: "El carácter y la intención comunicativa de la música sin necesidad de usar palabras.",
    incorrectas: [
      "La capacidad de los alumnos para ocultar sus sentimientos al profesor.",
      "El aprendizaje del abecedario mediante gestos con las manos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Respiración Gestual' en una agrupación de cámara?",
    correcta: "Un gesto compartido de inspiración que sirve para atacar una nota simultáneamente de forma precisa.",
    incorrectas: [
      "Que todos los músicos se pongan máscaras de oxígeno para tocar mejor.",
      "Hacer mucho ruido al tomar aire para que el público sepa que vamos a empezar."
    ]
  },
  {
    enunciado: "La técnica de 'Marcha' rítmica en el aula sirve para:",
    correcta: "Sentir el pulso binario y trabajar la coordinación de las extremidades inferiores con la música.",
    incorrectas: [
      "Preparar a los alumnos para el desfile militar de las fiestas del pueblo.",
      "Cansar a los alumnos para que estén tranquilos el resto de la jornada."
    ]
  },
  {
    enunciado: "En el movimiento, el 'Nivel Medio' se sitúa generalmente:",
    correcta: "A la altura del tronco y las extremidades superiores en posición de pie.",
    incorrectas: [
      "Pegado al suelo, realizando movimientos de reptación.",
      "Por encima de la cabeza, utilizando saltos y extensiones máximas."
    ]
  },
  {
    enunciado: "¿Cómo se representa el 'Ritmo Ternario' (3/4) mediante el movimiento?",
    correcta: "Habitualmente mediante un paso fuerte seguido de dos pasos ligeros o un movimiento pendular.",
    incorrectas: [
      "Corriendo lo más rápido posible en línea recta durante tres minutos.",
      "Dando palmas de forma irregular sin seguir ningún patrón fijo."
    ]
  },
  {
    enunciado: "El 'Equilibrio' es una capacidad necesaria en música para:",
    correcta: "Mantener la estabilidad corporal necesaria para la correcta ejecución técnica del instrumento.",
    incorrectas: [
      "Saber cuántas notas agudas y graves hay en una partitura.",
      "Poder tocar el violín mientras se camina por una cuerda floja."
    ]
  },
  {
    enunciado: "En un ejercicio de 'Estatua Musical', el silencio se asocia con:",
    correcta: "La inmovilidad absoluta y la tensión muscular controlada.",
    incorrectas: [
      "Gritar muy fuerte para compensar la falta de sonido instrumental.",
      "Aprovechar para salir del aula sin que el profesor se dé cuenta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Gesto de Corte'?",
    correcta: "Un movimiento seco y definido que indica el final de un sonido o de una frase musical.",
    incorrectas: [
      "Un gesto de desprecio que el director hace a los músicos que tocan mal.",
      "Utilizar unas tijeras para recortar la partitura y hacerla más corta."
    ]
  },
  {
    enunciado: "La 'Propiocepción' musical es:",
    correcta: "La conciencia interna de los movimientos necesarios para producir un sonido específico.",
    incorrectas: [
      "La propiedad legal de los instrumentos que compran los alumnos.",
      "El estudio de los nombres de los compositores en orden alfabético."
    ]
  },
  {
    enunciado: "En el aula de secundaria, el movimiento ayuda a los alumnos con:",
    correcta: "Dificultades de coordinación rítmica y falta de concentración auditiva.",
    incorrectas: [
      "La necesidad de perder peso para mejorar su aspecto físico.",
      "El aprendizaje de fórmulas químicas mediante el baile moderno."
    ]
  },
  {
    enunciado: "El fin último de trabajar el movimiento y el gesto en música es:",
    correcta: "Lograr una interpretación musical orgánica donde el cuerpo sea el canal de la expresión artística.",
    incorrectas: [
      "Que el aula de música se convierta en una academia de baile profesional.",
      "Demostrar que no hace falta estudiar teoría si se sabe mover bien el cuerpo."
    ]
  }
];