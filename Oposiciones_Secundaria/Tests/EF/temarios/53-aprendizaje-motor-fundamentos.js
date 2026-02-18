// 53-aprendizaje-motor-fundamentos.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define el 'Aprendizaje Motor' desde la perspectiva de Schmidt (1982)?",
    correcta: "Un conjunto de procesos internos asociados a la práctica o la experiencia que provocan cambios relativamente permanentes en la capacidad de respuesta.",
    incorrectas: [
      "La ejecución puntual de un movimiento técnico durante una competición deportiva.",
      "El crecimiento biológico y la maduración de los tejidos musculares debido a la edad."
    ]
  },
  {
    enunciado: "En la evolución histórica, ¿cuál fue la principal aportación de la 'Teoría del Circuito Cerrado' de Adams (1971)?",
    correcta: "La importancia del feedback sensorial y la existencia de la 'huella perceptiva' para detectar y corregir errores durante el movimiento.",
    incorrectas: [
      "La idea de que los movimientos rápidos se ejecutan sin necesidad de retroalimentación sensorial.",
      "Que el aprendizaje motor solo ocurre mediante la observación de modelos profesionales."
    ]
  },
  {
    enunciado: "La 'Teoría del Esquema' de Schmidt surge para solucionar los problemas de la teoría de Adams respecto a:",
    correcta: "El almacenamiento de infinitos programas motores y la ejecución de movimientos novedosos.",
    incorrectas: [
      "La fatiga muscular durante los ejercicios de fuerza máxima en adolescentes.",
      "La falta de motivación de los alumnos cuando las tareas son muy repetitivas."
    ]
  },
  {
    enunciado: "¿Qué postula la 'Perspectiva Ecológica' del aprendizaje motor (Gibson)?",
    correcta: "Que la percepción y la acción están directamente acopladas, y que el entorno ofrece 'affordances' o posibilidades de acción directas.",
    incorrectas: [
      "Que el cerebro debe procesar matemáticamente cada estímulo antes de enviar una orden muscular.",
      "Que el aprendizaje motor solo puede ocurrir en entornos naturales como bosques o montañas."
    ]
  },
  {
    enunciado: "En el enfoque de los 'Sistemas Dinámicos', el aprendizaje motor se entiende como:",
    correcta: "Un proceso de autoorganización donde el movimiento emerge de la interacción entre el individuo, la tarea y el entorno.",
    incorrectas: [
      "La grabación rígida de órdenes jerárquicas en el córtex motor que no cambian nunca.",
      "La repetición analítica de un gesto hasta que el cerebro se agota por falta de glucosa."
    ]
  },
  {
    enunciado: "El modelo de procesamiento de la información compara el funcionamiento del sistema humano con:",
    correcta: "Un ordenador, con fases de entrada (input), procesamiento y salida (output).",
    incorrectas: [
      "Un motor de combustión interna que requiere combustible fósil para moverse.",
      "Una cámara fotográfica que solo registra imágenes estáticas sin movimiento."
    ]
  },
  {
    enunciado: "¿Qué es un 'Programa Motor Generalizado' (PMG)?",
    correcta: "Una estructura de memoria que almacena las características invariantes de una clase de movimientos similares.",
    incorrectas: [
      "Un software informático que los profesores usan para poner las notas finales.",
      "El calendario de actividades físicas que se entrega a los padres al inicio del curso."
    ]
  },
  {
    enunciado: "Según la teoría de los sistemas dinámicos, un 'Atractor' es:",
    correcta: "Un estado de coordinación estable y preferido por el sistema motor ante una tarea determinada.",
    incorrectas: [
      "Un imán que se coloca en las zapatillas de deporte para no resbalar.",
      "El alumno que mejor realiza la técnica y que atrae todas las miradas de la clase."
    ]
  },
  {
    enunciado: "¿Cuál es el papel del 'Error' en las concepciones actuales del aprendizaje motor?",
    correcta: "Es una fuente esencial de información y variabilidad necesaria para que el sistema encuentre soluciones motrices robustas.",
    incorrectas: [
      "Un fallo del sistema que debe eliminarse mediante el castigo y la repetición punitiva.",
      "Algo que no existe en el aprendizaje motor si el profesor explica bien la técnica."
    ]
  },
  {
    enunciado: "La 'Teoría de la Instrucción' de Bruner, aplicada al motor, destaca la importancia de:",
    correcta: "La estructura del conocimiento, la secuencia de presentación y el refuerzo del aprendizaje.",
    incorrectas: [
      "Dar el máximo número de órdenes posibles en el menor tiempo posible.",
      "Que el alumno no piense nada y se limite a obedecer al docente."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Grados de Libertad' en el aprendizaje motor (Bernstein)?",
    correcta: "El número de componentes independientes (articulaciones, músculos) que deben ser controlados para realizar una acción.",
    incorrectas: [
      "El derecho del alumno a elegir si quiere hacer gimnasia o quedarse sentado.",
      "La distancia en grados que puede girar el cuello sin romperse las vértebras."
    ]
  },
  {
    enunciado: "En la fase inicial del aprendizaje, el principiante suele responder al problema de los grados de libertad:",
    correcta: "Congelando o bloqueando articulaciones para simplificar el control del movimiento.",
    incorrectas: [
      "Moviendo todas las partes del cuerpo al mismo tiempo de forma caótica y rápida.",
      "Utilizando solo los dedos de los pies para mantener el equilibrio estático."
    ]
  },
  {
    enunciado: "El 'Conocimiento de los Resultados' (CR) se considera en los modelos clásicos como:",
    correcta: "La variable más importante para la adquisición y retención de habilidades motrices.",
    incorrectas: [
      "Un dato irrelevante que el alumno olvida nada más terminar el ejercicio.",
      "La suma de las notas de todos los exámenes teóricos realizados en el trimestre."
    ]
  },
  {
    enunciado: "La 'Variabilidad del Parámetro' en la teoría de Schmidt permite:",
    correcta: "Aplicar el mismo programa motor a diferentes distancias, velocidades o con distintas fuerzas.",
    incorrectas: [
      "Cambiar de deporte cada cinco segundos para no aburrir al sistema nervioso.",
      "Que el profesor cambie de opinión sobre las reglas del juego a mitad de partido."
    ]
  },
  {
    enunciado: "¿Qué es la 'Memoria de Reconocimiento' en el modelo de Adams?",
    correcta: "El mecanismo encargado de evaluar la respuesta motriz comparándola con el rastro sensorial previo.",
    incorrectas: [
      "La capacidad de recordar el nombre de todos los compañeros de la clase de Educación Física.",
      "Un chip electrónico que se implanta en el cerebro para aprender a nadar más rápido."
    ]
  },
  {
    enunciado: "El enfoque de 'Acción Situada' defiende que el aprendizaje motor:",
    correcta: "No puede separarse del contexto físico y social en el que se produce la práctica.",
    incorrectas: [
      "Ocurre mejor en laboratorios aislados sin ningún tipo de ruido o distracción.",
      "Es puramente genético y no depende de lo que ocurra alrededor del alumno."
    ]
  },
  {
    enunciado: "¿Qué diferencia el 'Aprendizaje' del 'Rendimiento'?",
    correcta: "El rendimiento es la ejecución puntual y observable; el aprendizaje es el cambio interno no observable directamente.",
    incorrectas: [
      "El aprendizaje es solo para niños y el rendimiento es solo para adultos profesionales.",
      "No hay ninguna diferencia; son dos palabras que se usan para decir lo mismo."
    ]
  },
  {
    enunciado: "En la teoría ecológica, las 'Constricciones' o limitaciones son:",
    correcta: "Factores del organismo, del entorno o de la tarea que delimitan las soluciones motrices posibles.",
    incorrectas: [
      "Cadenas de hierro que se usan para que los alumnos no salgan corriendo del gimnasio.",
      "Las normas de comportamiento que impiden que los alumnos hablen durante la clase."
    ]
  },
  {
    enunciado: "La 'Teoría de la Carga Cognitiva' sugiere que para aprender una tarea compleja se debe:",
    correcta: "Gestionar la cantidad de información nueva para no saturar la memoria de trabajo del alumno.",
    incorrectas: [
      "Dar muchísima información difícil para que el cerebro se esfuerce más.",
      "No explicar nada y dejar que el alumno descubra todo por sí mismo sin guía."
    ]
  },
  {
    enunciado: "El 'Modelado' desde la teoría del aprendizaje social de Bandura se basa en:",
    correcta: "Procesos de atención, retención, reproducción motriz y motivación a partir de un modelo.",
    incorrectas: [
      "Hacer figuras de barro que representen a los alumnos mientras corren.",
      "La imitación ciega y mecánica sin ningún tipo de procesamiento mental."
    ]
  },
  {
    enunciado: "¿Qué es el 'Rastro de Memoria' según Adams?",
    correcta: "El programa encargado de iniciar el movimiento y elegir la dirección del mismo.",
    incorrectas: [
      "La huella que deja el pie sobre la arena del foso de saltos.",
      "El recuerdo de lo que se comió antes de ir a la clase de gimnasia."
    ]
  },
  {
    enunciado: "La 'Coordinación' se define desde la teoría de sistemas como:",
    correcta: "El dominio de los grados de libertad del cuerpo para convertirlo en un sistema manejable.",
    incorrectas: [
      "La capacidad de mover los brazos y las piernas al mismo tiempo sin caerse.",
      "Estar de acuerdo con el profesor en la fecha del examen final."
    ]
  },
  {
    enunciado: "En los modelos de aprendizaje motor, la 'Retención' se mide mediante:",
    correcta: "Pruebas realizadas tras un periodo de descanso para comprobar la persistencia de la habilidad.",
    incorrectas: [
      "La capacidad de aguantar la respiración bajo el agua durante mucho tiempo.",
      "El número de balones que un alumno es capaz de guardar en un saco."
    ]
  },
  {
    enunciado: "El concepto de 'Affordance' implica que un balón de baloncesto:",
    correcta: "Sugiere visualmente la acción de ser botado o lanzado debido a sus propiedades y a la experiencia del sujeto.",
    incorrectas: [
      "Es un objeto inerte que no tiene ninguna relación con el ser humano hasta que se le golpea.",
      "Solo puede ser utilizado si el profesor da permiso explícito por escrito."
    ]
  },
  {
    enunciado: "La 'Plasticidad Neuronal' es el fundamento biológico del aprendizaje motor porque:",
    correcta: "Permite la creación y el fortalecimiento de conexiones sinápticas mediante la práctica.",
    incorrectas: [
      "Hace que el cerebro se vuelva de plástico y resista mejor los golpes en la cabeza.",
      "Permite que las neuronas crezcan hasta medir varios metros de longitud."
    ]
  },
  {
    enunciado: "¿Qué es la 'Transferencia Proactiva'?",
    correcta: "Cuando un aprendizaje anterior influye en la adquisición de una nueva habilidad posterior.",
    incorrectas: [
      "Cuando un aprendizaje nuevo hace que se olvide lo que se aprendió hace años.",
      "Cuando un alumno le pasa sus apuntes a otro para que estudie por él."
    ]
  },
  {
    enunciado: "El modelo de Fitts y Posner propone tres fases. ¿Cuál es el orden correcto?",
    correcta: "Cognitiva, Asociativa y Autónoma.",
    incorrectas: [
      "Inicial, Media y Final.",
      "Teórica, Práctica y de Evaluación."
    ]
  },
  {
    enunciado: "La 'Ley de Hick' relaciona el tiempo de reacción con:",
    correcta: "El número de alternativas de respuesta posibles; a más opciones, más tiempo de decisión.",
    incorrectas: [
      "La fuerza con la que se golpea un balón de fútbol con la pierna derecha.",
      "La cantidad de público que hay en las gradas de un estadio olímpico."
    ]
  },
  {
    enunciado: "¿Qué es el 'Feedback Aumentado'?",
    correcta: "Información adicional proporcionada por una fuente externa (profesor, video, cronómetro) que complementa al feedback intrínseco.",
    incorrectas: [
      "El sonido del silbato del árbitro cuando sube mucho de volumen.",
      "La sensación de calor que siente el alumno cuando corre muy rápido."
    ]
  },
  {
    enunciado: "La 'Teoría Cibernética' aplicada al movimiento se basa en:",
    correcta: "El concepto de autorregulación mediante bucles de retroalimentación (servomecanismos).",
    incorrectas: [
      "La creación de robots que sustituyan a los alumnos en las clases de Educación Física.",
      "El estudio de los planetas y su influencia en la fuerza de la gravedad humana."
    ]
  },
  {
    enunciado: "En el aprendizaje motor, la 'Fase Autónoma' se caracteriza por:",
    correcta: "Una ejecución fluida, con bajo coste atencional y alta capacidad de corregir errores sobre la marcha.",
    incorrectas: [
      "La necesidad de pensar cada pequeño detalle del movimiento para no fallar.",
      "El abandono de la práctica deportiva por parte del alumno por aburrimiento."
    ]
  },
  {
    enunciado: "¿Qué es la 'Sinergia Muscular' (o estructura coordinativa)?",
    correcta: "Un grupo de músculos que actúan como una unidad funcional para realizar una tarea específica.",
    incorrectas: [
      "La suma de todas las fuerzas de todos los alumnos de la clase al tirar de una cuerda.",
      "Una enfermedad que impide que los músculos se contraigan de forma voluntaria."
    ]
  },
  {
    enunciado: "La 'Ley de Fitts' describe la relación entre:",
    correcta: "La velocidad y la precisión de un movimiento; a más velocidad, menor precisión.",
    incorrectas: [
      "El peso del alumno y la altura que puede alcanzar en un salto vertical.",
      "El número de veces que se entrena y el dinero que se gana en el deporte profesional."
    ]
  },
  {
    enunciado: "El 'Periodo Refractario Psicológico' es el retraso en la respuesta cuando:",
    correcta: "Se presentan dos estímulos muy seguidos y el sistema debe terminar de procesar el primero antes de responder al segundo.",
    incorrectas: [
      "El alumno está muy triste y no quiere participar en ninguna actividad física.",
      "El profesor hace una pregunta muy difícil y nadie sabe la respuesta correcta."
    ]
  },
  {
    enunciado: "¿Qué es la 'Práctica Bloqueada'?",
    correcta: "Repetir la misma tarea una y otra vez antes de pasar a la siguiente habilidad.",
    incorrectas: [
      "No poder moverse porque los músculos están totalmente rígidos por el frío.",
      "Estar en una zona del campo donde no llega nunca el balón de juego."
    ]
  },
  {
    enunciado: "La 'Práctica Aleatoria' (o variable) suele provocar:",
    correcta: "Menor rendimiento durante la práctica pero mayor aprendizaje y retención a largo plazo.",
    incorrectas: [
      "Un aprendizaje mucho más rápido pero que se olvida al día siguiente.",
      "Que el alumno se vuelva loco por no saber qué ejercicio tiene que hacer cada minuto."
    ]
  },
  {
    enunciado: "En la LOMLOE, el aprendizaje motor se vincula con la 'Competencia Motriz' para:",
    correcta: "Que el alumno desarrolle la capacidad de resolver situaciones motrices de forma eficaz y autónoma.",
    incorrectas: [
      "Que el alumno aprenda a conducir coches de carreras a alta velocidad.",
      "Que todos los alumnos tengan el mismo nivel de fuerza física al terminar el curso."
    ]
  },
  {
    enunciado: "¿Qué es el 'Aprendizaje Implícito'?",
    correcta: "Aquel que ocurre sin una intención consciente de aprender y sin poder verbalizar lo aprendido fácilmente.",
    incorrectas: [
      "Aquel que requiere leer un manual de 500 páginas antes de empezar a moverse.",
      "Aquel que el profesor explica gritando muy fuerte para que se entienda bien."
    ]
  },
  {
    enunciado: "La 'Teoría de la Información' de Shannon y Weaver aplicada al deporte analiza:",
    correcta: "La cantidad de incertidumbre de la situación y la capacidad de transmisión del canal humano.",
    incorrectas: [
      "El número de noticias deportivas que salen cada día en los periódicos nacionales.",
      "La calidad de la conexión Wi-Fi de las instalaciones deportivas del centro."
    ]
  },
  {
    enunciado: "Un 'Cambio de Fase' en los sistemas dinámicos ocurre cuando:",
    correcta: "Un aumento de la velocidad obliga al sistema a pasar de un patrón de coordinación a otro (ej. de andar a correr).",
    incorrectas: [
      "El alumno se cambia de ropa en el vestuario al terminar la sesión de gimnasia.",
      "La luna pasa de cuarto creciente a luna llena durante la noche."
    ]
  }
];