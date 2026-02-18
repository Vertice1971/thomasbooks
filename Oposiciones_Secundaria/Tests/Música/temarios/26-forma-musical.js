// 26-forma-musical.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué es la 'Forma Musical'?",
    correcta: "La estructura o esquema organizativo que utiliza un compositor para dar coherencia y orden a una obra.",
    incorrectas: [
      "El aspecto físico y el peso de los instrumentos musicales.",
      "La vestimenta reglamentaria que deben llevar los músicos en escena."
    ]
  },
  {
    enunciado: "La forma 'Binaria' (AB) se caracteriza por:",
    correcta: "Dividirse en dos secciones diferenciadas, a menudo con una relación de pregunta y respuesta.",
    incorrectas: [
      "Repetir un mismo tema durante toda la obra sin cambios.",
      "Utilizar solo dos instrumentos de viento metal."
    ]
  },
  {
    enunciado: "¿Cómo se denomina la forma ternaria básica que sigue el esquema ABA?",
    correcta: "Forma Lied.",
    incorrectas: [
      "Forma Cíclica.",
      "Forma Continua."
    ]
  },
  {
    enunciado: "En la 'Forma Rondó', ¿qué elemento aparece de forma recurrente alternando con diferentes secciones?",
    correcta: "El Estribillo o Refrain.",
    incorrectas: [
      "Un solo de batería improvisado.",
      "Un silencio que dura dos minutos."
    ]
  },
  {
    enunciado: "Las tres partes fundamentales de la 'Forma Sonata' clásica son:",
    correcta: "Exposición, Desarrollo y Reexposición.",
    incorrectas: [
      "Introducción, Nudo y Desenlace.",
      "Preludio, Fuga y Postludio."
    ]
  },
  {
    enunciado: "¿Qué ocurre en la 'Exposición' de una sonata?",
    correcta: "Se presentan los dos temas principales, generalmente en tonalidades diferentes.",
    incorrectas: [
      "Los músicos explican al público el significado de la obra.",
      "Se venden copias de la partitura a la entrada del teatro."
    ]
  },
  {
    enunciado: "La forma 'Tema con Variaciones' consiste en:",
    correcta: "La exposición de un tema seguido de una serie de secciones que lo transforman rítmica o melódicamente.",
    incorrectas: [
      "Tocar la misma canción en diez idiomas distintos.",
      "Una sucesión de ruidos aleatorios sin conexión alguna."
    ]
  },
  {
    enunciado: "¿Qué es una forma musical 'Cíclica'?",
    correcta: "Aquella en la que un mismo material temático reaparece en los diferentes movimientos de una obra extensa.",
    incorrectas: [
      "Una obra que se toca mientras los músicos corren en círculos.",
      "Una pieza que solo se puede interpretar en bicicleta."
    ]
  },
  {
    enunciado: "El 'Minueto con Trío' es una estructura ternaria (ABA) donde la sección B (Trío) se caracteriza por:",
    correcta: "Un carácter contrastante y, originalmente, una orquestación más reducida.",
    incorrectas: [
      "Ser interpretada exclusivamente por tres directores de orquesta.",
      "Consistir en un silencio absoluto de tres minutos."
    ]
  },
  {
    enunciado: "En un Rondó-Sonata, se combinan las características del rondó con:",
    correcta: "El desarrollo temático propio de la forma sonata.",
    incorrectas: [
      "El canto gregoriano de la Edad Media.",
      "Los ritmos del jazz contemporáneo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Coda' en una estructura formal?",
    correcta: "Una sección añadida al final de la obra para reforzar la sensación de conclusión.",
    incorrectas: [
      "La parte del violín que se apoya en el hombro.",
      "El primer compás de la exposición de una sinfonía."
    ]
  },
  {
    enunciado: "La forma 'Canon' se basa estrictamente en el procedimiento de:",
    correcta: "La imitación literal y continua entre las voces.",
    incorrectas: [
      "La improvisación sobre una escala pentatónica.",
      "El uso de un solo acorde de tónica."
    ]
  },
  {
    enunciado: "En la forma sonata, el 'Desarrollo' es la sección donde:",
    correcta: "El compositor manipula y transforma los motivos presentados en la exposición.",
    incorrectas: [
      "Los músicos deben crecer físicamente en el escenario.",
      "Se presenta un tercer tema completamente nuevo."
    ]
  },
  {
    enunciado: "¿Qué es un 'Puente' (o transición) en una forma sonata?",
    correcta: "Un pasaje modular que conecta el primer tema con el segundo.",
    incorrectas: [
      "Una estructura de madera sobre la que tocan los violines.",
      "El momento en que el director deja de mover la batuta."
    ]
  },
  {
    enunciado: "La estructura 'A-B-A-C-A' es característica de:",
    correcta: "Un Rondó simple.",
    incorrectas: [
      "Una Sonata para piano.",
      "Un Canto Gregoriano monódico."
    ]
  },
  {
    enunciado: "¿Qué es el 'Scherzo'?",
    correcta: "Una forma que sustituyó al minueto en la sinfonía, de carácter más rápido y juguetón.",
    incorrectas: [
      "Un instrumento de percusión de origen italiano.",
      "Un tipo de voz muy aguda masculina."
    ]
  },
  {
    enunciado: "La forma 'Fuga' se organiza en torno a las entradas de:",
    correcta: "El Sujeto y la Respuesta.",
    incorrectas: [
      "El Estribillo y las Estrofas.",
      "El Cantante y el Guitarrista."
    ]
  },
  {
    enunciado: "Una forma 'Estrófica' (A-A-A...) es común en:",
    correcta: "Himnos, canciones populares y baladas.",
    incorrectas: [
      "Sinfonías de la época romántica.",
      "Conciertos para solista y orquesta."
    ]
  },
  {
    enunciado: "En la música vocal, el 'Aria da Capo' tiene una estructura:",
    correcta: "Ternaria (ABA), donde la repetición de A permite al cantante ornamentar la melodía.",
    incorrectas: [
      "Binaria simple sin repeticiones.",
      "Libre, sin ninguna estructura predefinida."
    ]
  },
  {
    enunciado: "¿Qué es la 'Introducción' en una obra formal?",
    correcta: "Una sección preparatoria que precede al cuerpo principal de la obra.",
    incorrectas: [
      "El momento en que el compositor sale a saludar.",
      "La última nota de la sinfonía."
    ]
  },
  {
    enunciado: "La 'Suite' barroca es una forma multi-movimiento basada en:",
    correcta: "Una sucesión de danzas de diferentes caracteres y ritmos.",
    incorrectas: [
      "Una sola pieza que dura más de tres horas.",
      "La improvisación constante sobre ruidos de la naturaleza."
    ]
  },
  {
    enunciado: "¿Qué define a la 'Forma Libre' o Fantasía?",
    correcta: "Aquella que no sigue un esquema preestablecido, primando la imaginación del autor.",
    incorrectas: [
      "Aquella que se puede escuchar de forma gratuita.",
      "Una obra escrita solo con notas blancas."
    ]
  },
  {
    enunciado: "La 'Reexposición' en la sonata se diferencia de la exposición en que:",
    correcta: "El segundo tema aparece normalmente en la tonalidad de la tónica.",
    incorrectas: [
      "Se toca el doble de rápido.",
      "No participan los instrumentos de cuerda."
    ]
  },
  {
    enunciado: "En la estructura de un Concierto clásico, suele aparecer la 'Cadenza', que es:",
    correcta: "Un pasaje de virtuosismo solista, originalmente improvisado, hacia el final de un movimiento.",
    incorrectas: [
      "La caída del instrumento al suelo por accidente.",
      "El ritmo que marca el timbalero durante toda la obra."
    ]
  },
  {
    enunciado: "La forma 'Sinfonía' es, esencialmente:",
    correcta: "Una gran sonata escrita para orquesta, generalmente en cuatro movimientos.",
    incorrectas: [
      "Una canción corta para voz y piano.",
      "Un tipo de danza folclórica española."
    ]
  },
  {
    enunciado: "¿Qué es un 'Episodio' en una Fuga o un Rondó?",
    correcta: "Una sección de material libre que conecta las apariciones del tema principal.",
    incorrectas: [
      "Un capítulo de una serie de televisión sobre músicos.",
      "La primera nota que toca el oboe."
    ]
  },
  {
    enunciado: "La forma 'Bar' (AAB) es típica de:",
    correcta: "Los maestros cantores (Meistersinger) y la música medieval alemana.",
    incorrectas: [
      "La música disco de los años 70.",
      "Las bandas de música de jazz neoyorquinas."
    ]
  },
  {
    enunciado: "¿Qué es un 'Poema Sinfónico'?",
    correcta: "Una obra orquestal de un solo movimiento basada en un programa literario o extramusical.",
    incorrectas: [
      "Una partitura que solo contiene poemas escritos sin notas.",
      "Una canción para soprano y arpa."
    ]
  },
  {
    enunciado: "La 'Obertura' francesa se caracteriza por una estructura:",
    correcta: "Lento (con ritmos punteados) - Rápido (fugado) - Lento.",
    incorrectas: [
      "Rápido - Lento - Rápido.",
      "Un solo movimiento de percusión."
    ]
  },
  {
    enunciado: "En la música contemporánea, la 'Forma Abierta' permite:",
    correcta: "Que el intérprete elija el orden de las secciones o fragmentos durante la ejecución.",
    incorrectas: [
      "Tocar con las ventanas del aula abiertas al público.",
      "No cerrar nunca el estuche del instrumento."
    ]
  },
  {
    enunciado: "¿Qué es la 'Forma Passacaglia'?",
    correcta: "Una serie de variaciones sobre un bajo obstinado en compás ternario.",
    incorrectas: [
      "Una marcha que se toca mientras se camina por la calle.",
      "Un tipo de ópera cómica italiana."
    ]
  },
  {
    enunciado: "La estructura del 'Blues' tradicional consta de:",
    correcta: "12 compases organizados en tres frases de cuatro compases cada una.",
    incorrectas: [
      "100 compases de improvisación libre.",
      "Dos minutos de silencio seguidos de un grito."
    ]
  },
  {
    enunciado: "En un Cuarteto de Cuerdas, el tercer movimiento suele ser:",
    correcta: "Un Minueto o un Scherzo.",
    incorrectas: [
      "Una Fuga compleja a cinco voces.",
      "Un solo de contrabajo eléctrico."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ritornello'?",
    correcta: "Una sección instrumental que regresa total o parcialmente, típica del concierto barroco.",
    incorrectas: [
      "El nombre italiano para el estribillo del rock and roll.",
      "La repetición de una nota aguda muchas veces."
    ]
  },
  {
    enunciado: "La forma 'Ondulada' o de arco (ABCBA) destaca por su:",
    correcta: "Simetría respecto a un punto central.",
    incorrectas: [
      "Falta total de orden y concierto.",
      "Uso exclusivo de sonidos de agua."
    ]
  },
  {
    enunciado: "En la música pop, la sección que conecta la estrofa con el estribillo se llama:",
    correcta: "Pre-estribillo o Puente.",
    incorrectas: [
      "Final de obra.",
      "Afinación."
    ]
  },
  {
    enunciado: "¿Qué es la 'Microforma'?",
    correcta: "La estructura interna de las unidades más pequeñas, como motivos y frases.",
    incorrectas: [
      "Una partitura tan pequeña que hace falta una lupa.",
      "Música que solo dura tres segundos."
    ]
  },
  {
    enunciado: "La 'Forma Orgánica' se basa en:",
    correcta: "El crecimiento de toda la obra a partir de una única célula o germen musical.",
    incorrectas: [
      "Utilizar solo instrumentos fabricados con vegetales.",
      "Componer música mientras se hace agricultura."
    ]
  },
  {
    enunciado: "El 'Tema B' en una forma sonata suele estar en la tonalidad de:",
    correcta: "La Dominante (si la obra es en Mayor) o el Relativo Mayor (si es en Menor).",
    incorrectas: [
      "La misma tonalidad que el Tema A.",
      "Una tonalidad que no tiene nada que ver."
    ]
  },
  {
    enunciado: "El análisis de la forma musical sirve para:",
    correcta: "Comprender el plan arquitectónico del autor y mejorar la interpretación y escucha crítica.",
    incorrectas: [
      "Saber cuánto dinero costó escribir la obra.",
      "Contar el número de notas redondas que aparecen en el papel."
    ]
  }
];