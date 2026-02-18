// 64-evaluacion-de-las-cualidades-motrices.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el objeto principal de la evaluación de las cualidades motrices o capacidades coordinativas?",
    correcta: "Valorar la calidad de los procesos de control y regulación del movimiento, más allá de la eficiencia energética.",
    incorrectas: [
      "Medir la potencia aeróbica máxima y el volumen sistólico en esfuerzos continuos.",
      "Determinar el porcentaje de masa magra y grasa mediante bioimpedancia eléctrica."
    ]
  },
  {
    enunciado: "El 'Test de la Batería Ozeretski' se utiliza fundamentalmente para evaluar:",
    correcta: "El desarrollo motor y la coordinación psicomotriz en diversas facetas (estática, dinámica, rapidez).",
    incorrectas: [
      "La resistencia anaeróbica láctica en deportes de equipo de alta intensidad.",
      "La flexibilidad de la cadena cinética posterior mediante la flexión de tronco."
    ]
  },
  {
    enunciado: "En la evaluación de la coordinación óculo-manual, el test de 'Lanzamiento a Diana' valora:",
    correcta: "La precisión y el ajuste perceptivo-motriz en la proyección de un móvil hacia un objetivo fijo.",
    incorrectas: [
      "La fuerza explosiva del pectoral mayor durante la fase de impulsión.",
      "La resistencia de los ligamentos colaterales del codo ante el estrés repetitivo."
    ]
  },
  {
    enunciado: "¿Qué capacidad coordinativa evalúa el 'Test de la Barra de Equilibrio' (desplazamiento sobre ella)?",
    correcta: "El equilibrio dinámico y el control del centro de gravedad sobre una base de sustentación reducida.",
    incorrectas: [
      "La fuerza isométrica de los músculos erectores de la columna vertebral.",
      "La velocidad de reacción ante estímulos táctiles en las plantas de los pies."
    ]
  },
  {
    enunciado: "El test de 'Slalom con Balón' es un instrumento adecuado para medir:",
    correcta: "La coordinación dinámica general y la capacidad de conducción-manipulación en movimiento.",
    incorrectas: [
      "La capacidad de salto vertical tras una carrera de aproximación de cinco metros.",
      "El umbral anaeróbico del alumno mediante la acumulación de lactato muscular."
    ]
  },
  {
    enunciado: "¿Cuál es una característica técnica de los tests que evalúan la agilidad?",
    correcta: "Requieren cambios bruscos de dirección, sentido y ritmo, implicando una alta demanda decisional y perceptiva.",
    incorrectas: [
      "Se basan en el mantenimiento de una postura estática el mayor tiempo posible sin oscilaciones.",
      "Se realizan siempre en línea recta para evitar cualquier tipo de interferencia vestibular."
    ]
  },
  {
    enunciado: "En la evaluación de la coordinación óculo-pédica, se suele utilizar:",
    correcta: "Golpeos de precisión o conducciones de móviles con los pies sorteando obstáculos.",
    incorrectas: [
      "Pruebas de lectura de carteles situados a gran distancia mientras se camina.",
      "Ejercicios de fuerza máxima en prensa de piernas a una sola repetición."
    ]
  },
  {
    enunciado: "El 'Test de los Pasos de Cebra' (o similares de salto en cuadrícula) evalúa:",
    correcta: "La coordinación dinámica general y el ajuste espacio-temporal de los apoyos.",
    incorrectas: [
      "La visión cromática y la capacidad de distinguir contrastes de blanco y negro.",
      "La resistencia de los huesos largos ante impactos verticales constantes."
    ]
  },
  {
    enunciado: "Para evaluar la 'Lateralidad', se utilizan tests que observan la dominancia en:",
    correcta: "Ojo, mano, pie y oído ante tareas que requieren el uso de un solo lado.",
    incorrectas: [
      "La longitud de los dedos de la mano derecha comparada con la izquierda.",
      "El número de pecas presentes en cada hemisferio del rostro del alumno."
    ]
  },
  {
    enunciado: "El 'Test de los 10 giros' o pruebas sobre plataforma giratoria valoran:",
    correcta: "La capacidad de reequilibrio post-rotatorio y la sensibilidad del sistema vestibular.",
    incorrectas: [
      "La flexibilidad de la columna cervical en el plano transversal.",
      "La velocidad gestual de los músculos del cuello y los hombros."
    ]
  },
  {
    enunciado: "En la LOMLOE, la evaluación de las cualidades motrices debe priorizar:",
    correcta: "La observación sistemática de la fluidez y armonía del movimiento en situaciones reales de clase.",
    incorrectas: [
      "La comparación del alumno con las tablas de rendimiento de gimnasia artística de élite.",
      "La toma de tiempos con cronómetros de milésimas de segundo en todas las tareas."
    ]
  },
  {
    enunciado: "Un instrumento cualitativo para evaluar la coordinación es:",
    correcta: "La rúbrica de observación o escala de clasificación de la ejecución técnica.",
    incorrectas: [
      "El dinamómetro manual para medir la fuerza de prensión de los dedos.",
      "La cinta métrica para determinar la distancia de un salto longitudinal."
    ]
  },
  {
    enunciado: "El 'Test de Tapping' (golpeo de placas) evalúa fundamentalmente:",
    correcta: "La coordinación segmentaria y la velocidad cíclica de los miembros superiores.",
    incorrectas: [
      "La fuerza resistencia de los flexores de la muñeca ante cargas livianas.",
      "La capacidad de orientación espacial en entornos con baja iluminación."
    ]
  },
  {
    enunciado: "¿Qué evalúa el 'Test de la Marcha sobre Línea Curva'?",
    correcta: "El equilibrio dinámico y el ajuste espacial de la trayectoria del movimiento.",
    incorrectas: [
      "La fuerza de los músculos abductores de la cadera en contracción excéntrica.",
      "La velocidad máxima de carrera en curva en pista de atletismo."
    ]
  },
  {
    enunciado: "La 'Sincronización' como cualidad motriz se evalúa mediante:",
    correcta: "Tareas que requieren coordinar el movimiento propio con un estímulo rítmico externo.",
    incorrectas: [
      "Ejercicios de apnea prolongada para medir la capacidad de sufrimiento.",
      "La suma de las edades de todos los participantes del grupo de trabajo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Test de Estructuración Temporal' de Mira Stambak?",
    correcta: "Una prueba de reproducción de estructuras rítmicas mediante golpes espontáneos o imitados.",
    incorrectas: [
      "Un examen sobre las fechas históricas de los Juegos Olímpicos de la Antigüedad.",
      "La medición del tiempo que tarda el alumno en cambiarse de ropa en el vestuario."
    ]
  },
  {
    enunciado: "En la evaluación de la agilidad, el 'Test de Illinois' es relevante porque incluye:",
    correcta: "Desplazamientos frontales, laterales y giros con cambios de sentido en un espacio delimitado.",
    incorrectas: [
      "Carrera de resistencia de 20 minutos sin ningún tipo de giro ni obstáculo.",
      "Lanzamiento de un balón pesado por encima de la cabeza hacia atrás."
    ]
  },
  {
    enunciado: "Un indicador de 'baja coordinación' en una prueba de salto es:",
    correcta: "La falta de fluidez en la cadena cinética (ej. brazos y piernas no actúan de forma sincronizada).",
    incorrectas: [
      "Alcanzar una distancia superior a los dos metros en el salto de longitud.",
      "Utilizar zapatillas de deporte con suela de goma de alta adherencia."
    ]
  },
  {
    enunciado: "La 'Disociación Segmentaria' se evalúa mediante tareas que requieren:",
    correcta: "Mover un miembro en una dirección o ritmo mientras el otro realiza una acción diferente.",
    incorrectas: [
      "Tener un brazo escayolado para ver cómo se desenvuelve el alumno con el otro.",
      "Realizar un ejercicio de fuerza máxima utilizando todos los músculos del cuerpo a la vez."
    ]
  },
  {
    enunciado: "El 'Test de salto a la cuerda' (durante un tiempo dado) valora:",
    correcta: "La coordinación dinámica general, el ritmo y la resistencia muscular.",
    incorrectas: [
      "La flexibilidad de los tendones de la corva y la zona glútea.",
      "La capacidad de los pulmones para absorber el polvo del gimnasio."
    ]
  },
  {
    enunciado: "En el equilibrio estático, el 'Test de Romberg' observa:",
    correcta: "Las oscilaciones del cuerpo al estar de pie con los pies juntos y los ojos cerrados.",
    incorrectas: [
      "La distancia que el alumno puede recorrer saltando a la pata coja.",
      "La altura a la que el alumno puede levantar la pierna lateralmente."
    ]
  },
  {
    enunciado: "La evaluación de la 'Adaptación Motriz' consiste en observar:",
    correcta: "La capacidad del alumno para ajustar su respuesta ante cambios inesperados en la tarea.",
    incorrectas: [
      "El tiempo que tarda el alumno en acostumbrarse a la temperatura del agua de la piscina.",
      "La capacidad del sistema inmunológico del alumno ante el esfuerzo intenso."
    ]
  },
  {
    enunciado: "Un test de 'Anticipación Coincidente' mide:",
    correcta: "La precisión para realizar una acción en el momento exacto en que un móvil llega a un punto.",
    incorrectas: [
      "La capacidad de adivinar qué ejercicio va a proponer el profesor en la siguiente clase.",
      "El número de veces que un alumno acierta el resultado de un partido de fútbol."
    ]
  },
  {
    enunciado: "En la coordinación motriz, la 'Economía de movimiento' se traduce en:",
    correcta: "La ausencia de tensiones musculares innecesarias y movimientos parásitos.",
    incorrectas: [
      "No gastar dinero en comprar balones de buena calidad para el departamento.",
      "Realizar el menor número de movimientos posibles para no cansarse en la sesión."
    ]
  },
  {
    enunciado: "El 'Test de Jackson' para la agilidad se caracteriza por:",
    correcta: "Un recorrido en forma de trébol que evalúa la velocidad con cambios de dirección constantes.",
    incorrectas: [
      "Subir una cuerda de 5 metros utilizando únicamente la fuerza de los brazos.",
      "Realizar 100 saltos de tijera en el menor tiempo posible sin detenerse."
    ]
  },
  {
    enunciado: "La evaluación de la 'Diferenciación Kinestésica' busca valorar:",
    correcta: "La precisión en la aplicación de la fuerza y la posición segmentaria sin apoyo visual.",
    incorrectas: [
      "La capacidad de distinguir entre el sabor de diferentes bebidas isotónicas.",
      "El aumento de la temperatura de la piel tras diez minutos de carrera."
    ]
  },
  {
    enunciado: "En la batería de tests de coordinación, el 'Giro de 360 grados en el aire' mide:",
    correcta: "La capacidad de orientación espacial y equilibrio dinámico post-vuelo.",
    incorrectas: [
      "La fuerza máxima de los músculos abdominales oblicuos.",
      "La resistencia de las vértebras lumbares ante la torsión axial."
    ]
  },
  {
    enunciado: "Un criterio de validez en los tests de cualidades motrices es que:",
    correcta: "La complejidad de la tarea no debe estar limitada por la falta de fuerza o resistencia del sujeto.",
    incorrectas: [
      "El alumno debe estar lo más cansado posible para ver su verdadera coordinación.",
      "La prueba debe durar al menos dos horas para ser considerada científica."
    ]
  },
  {
    enunciado: "El 'Test de la Pelota contra la Pared' (Lanzar y Recoger) evalúa:",
    correcta: "La coordinación óculo-manual y el tiempo de reacción ante el rebote.",
    incorrectas: [
      "La potencia de impacto de la mano contra una superficie esférica de goma.",
      "La durabilidad de la pintura de las paredes de la instalación deportiva."
    ]
  },
  {
    enunciado: "En la evaluación motriz, el 'Error de Precisión' se mide como:",
    correcta: "La distancia entre el punto de impacto del móvil y el centro del objetivo propuesto.",
    incorrectas: [
      "El número de veces que el alumno se equivoca al decir su nombre completo.",
      "La cantidad de veces que el balón sale del terreno de juego por la línea de banda."
    ]
  },
  {
    enunciado: "La 'Agudeza Perceptiva' se puede evaluar mediante:",
    correcta: "Tests de discriminación de estímulos visuales o auditivos de corta duración.",
    incorrectas: [
      "Pruebas de levantamiento de pesas con los ojos vendados.",
      "La capacidad de memorizar el reglamento del bádminton en diez segundos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Prueba de la Marcha con Ojos Vendados' (Test de Babinski-Weil)?",
    correcta: "Una evaluación de la orientación espacial y la influencia del sistema vestibular en la trayectoria.",
    incorrectas: [
      "Un juego recreativo para que los alumnos se diviertan tropezando entre ellos.",
      "Una técnica de entrenamiento para invidentes que van a participar en los Juegos Paralímpicos."
    ]
  },
  {
    enunciado: "La 'Coordinación Intersegmentaria' se refiere a la relación entre:",
    correcta: "Los movimientos de las extremidades superiores e inferiores de forma simultánea.",
    incorrectas: [
      "La longitud de los huesos del brazo y la longitud de los huesos de la pierna.",
      "El número de neuronas del cerebro y el número de fibras musculares del bíceps."
    ]
  },
  {
    enunciado: "En el 'Test de la Moneda' o de destreza manual fina, se mide:",
    correcta: "La rapidez y precisión de los movimientos de pinza de los dedos.",
    incorrectas: [
      "La capacidad de ahorrar dinero para comprar material de Educación Física.",
      "La fuerza de impacto de una moneda lanzada contra una pared de ladrillo."
    ]
  },
  {
    enunciado: "Un indicador de 'Maestría Motriz' en la evaluación coordinativa es:",
    correcta: "La capacidad de realizar la tarea bajo condiciones de presión temporal o interferencia externa.",
    incorrectas: [
      "Realizar el ejercicio muy lentamente para no cometer ningún error visual.",
      "Llevar ropa deportiva de última generación que mejore el aspecto físico del alumno."
    ]
  },
  {
    enunciado: "¿Cómo influye la 'Fatiga' en la evaluación de las cualidades motrices?",
    correcta: "Debe evitarse, ya que la fatiga muscular y central altera el control motor y falsea los resultados.",
    incorrectas: [
      "Es necesaria para que el alumno se esfuerce al máximo y demuestre su valor.",
      "No influye en absoluto, ya que la coordinación es un proceso puramente mental."
    ]
  },
  {
    enunciado: "La 'Rúbrica de Evaluación' para una coreografía de expresión corporal valoraría:",
    correcta: "La fluidez, la ocupación del espacio, la sincronización con el ritmo y la expresividad gestual.",
    incorrectas: [
      "El número de pulsaciones por minuto alcanzadas al finalizar el baile.",
      "El precio del vestuario y el maquillaje utilizado por cada alumno."
    ]
  },
  {
    enunciado: "El 'Test de Carrera de Obstáculos' es un instrumento global que mide:",
    correcta: "La agilidad, la coordinación dinámica general y la capacidad de reequilibrio.",
    incorrectas: [
      "La resistencia aeróbica de larga duración en un entorno sin dificultades.",
      "La fuerza máxima de los flexores del tobillo en el momento de la batida."
    ]
  },
  {
    enunciado: "En la LOMLOE, el registro de datos de estas cualidades debe servir para:",
    correcta: "Aportar feedback al alumno sobre su competencia motriz y áreas de mejora.",
    incorrectas: [
      "Justificar el suspenso automático de aquellos alumnos que tienen poca gracia al moverse.",
      "Crear una base de datos pública para que las empresas de calzado elijan a sus modelos."
    ]
  },
  {
    enunciado: "El fin último de evaluar las cualidades motrices es:",
    correcta: "Garantizar que el alumno posee el control corporal necesario para una vida activa y segura.",
    incorrectas: [
      "Seleccionar a los mejores alumnos para que actúen en el circo municipal.",
      "Demostrar que el profesor es capaz de realizar ejercicios más difíciles que los alumnos."
    ]
  }
];