// -28-la-agilidad.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define técnicamente la agilidad en el ámbito de las ciencias del deporte contemporáneas, diferenciándola de la rapidez de cambio de dirección (CODS)?",
    correcta: "Como una capacidad física compleja que incluye un cambio de dirección o de velocidad en respuesta a un estímulo externo (componente perceptivo-decisional).",
    incorrectas: [
      "Como la capacidad exclusiva de realizar movimientos cíclicos a la máxima velocidad posible sin fatiga.",
      "Como la amplitud de movimiento alcanzada por una articulación gracias a la elasticidad muscular."
    ]
  },
  {
    enunciado: "En el modelo jerárquico de agilidad de Sheppard y Young, ¿cuáles son los dos componentes principales que determinan el rendimiento?",
    correcta: "La velocidad de cambio de dirección y los procesos de toma de decisiones (percepción y anticipación).",
    incorrectas: [
      "La resistencia aeróbica y la fuerza máxima isométrica del tren superior.",
      "La capacidad vital pulmonar y el equilibrio estático post-esfuerzo."
    ]
  },
  {
    enunciado: "¿Qué factor neurofisiológico es determinante para la agilidad en situaciones de alta incertidumbre?",
    correcta: "La velocidad de procesamiento de la información y la eficiencia de los mecanismos de inhibición y excitación cortical.",
    incorrectas: [
      "La concentración de hemoglobina en los glóbulos rojos periféricos.",
      "El grosor de la capa de mielina en los nervios del sistema simpático únicamente."
    ]
  },
  {
    enunciado: "La agilidad 'reactiva' se evalúa mediante tests que incluyen:",
    correcta: "Un estímulo imprevisible (luz, movimiento de un oponente o señal sonora) que obliga a una respuesta motora inmediata.",
    incorrectas: [
      "Un recorrido preestablecido de conos que el alumno conoce y ha memorizado previamente.",
      "Una prueba de flexibilidad profunda de tronco desde la posición de sentado."
    ]
  },
  {
    enunciado: "Desde una perspectiva biomecánica, ¿cuál es la fase crítica de un cambio de dirección ágil?",
    correcta: "La fase de frenado o deceleración excéntrica, donde se gestiona la energía para el posterior re-impulso.",
    incorrectas: [
      "La fase de suspensión aérea donde no hay contacto con el suelo.",
      "La fase de apnea inspiratoria previa al inicio del movimiento."
    ]
  },
  {
    enunciado: "¿Qué papel juega la anticipación en la agilidad deportiva?",
    correcta: "Permite al sujeto reconocer patrones cinemáticos en el adversario para iniciar la respuesta antes de que el estímulo sea total.",
    incorrectas: [
      "Aumentar la fuerza de contracción mediante la acumulación de lactato previo.",
      "Reducir la altura del centro de gravedad de forma irreversible durante toda la tarea."
    ]
  },
  {
    enunciado: "La agilidad se considera una capacidad 'resultante' o 'híbrida' porque:",
    correcta: "Depende de la interacción de las capacidades perceptivas, la fuerza explosiva, la velocidad y la técnica de movimiento.",
    incorrectas: [
      "Es la única capacidad que se puede entrenar de forma pasiva mediante la visualización.",
      "No requiere de gasto de ATP para ser ejecutada eficientemente."
    ]
  },
  {
    enunciado: "En el entrenamiento de agilidad en Educación Física, el principio de 'especificidad' implica:",
    correcta: "Diseñar tareas que repliquen las demandas cognitivas y motrices de la actividad física o deporte real.",
    incorrectas: [
      "Realizar ejercicios de fuerza máxima en máquinas de gimnasio de forma aislada.",
      "Correr distancias largas a ritmo constante para mejorar la toma de decisiones."
    ]
  },
  {
    enunciado: "¿Cómo influye el 'Stiffness' (rigidez) del tobillo en la agilidad?",
    correcta: "Un mayor stiffness permite una transferencia de fuerza más rápida y una menor pérdida de energía elástica en los cambios de dirección.",
    incorrectas: [
      "Reduce la velocidad de reacción al impedir que el pie se mueva libremente.",
      "Aumenta la fatiga al obligar al músculo a consumir más oxígeno por segundo."
    ]
  },
  {
    enunciado: "La 'Agilidad Cerrada' (Closed Agility) se caracteriza por:",
    correcta: "Realizarse en un entorno estable y predecible, donde el alumno conoce de antemano el patrón de movimiento.",
    incorrectas: [
      "La presencia de defensores que intentan interceptar el movimiento del alumno.",
      "Realizarse exclusivamente con los ojos cerrados para mejorar la propiocepción."
    ]
  },
  {
    enunciado: "¿Cuál es el beneficio de entrenar la agilidad mediante juegos de persecución en Secundaria?",
    correcta: "Desarrolla el componente reactivo y decisional de forma lúdica y contextualizada.",
    incorrectas: [
      "Maximiza la hipertrofia de las fibras musculares de tipo I (lentas).",
      "Permite eliminar la necesidad de calentar antes de la sesión de EF."
    ]
  },
  {
    enunciado: "La técnica de 'paso de caída' (drop step) en agilidad es fundamental para:",
    correcta: "Iniciar un cambio de dirección rápido hacia atrás o lateralmente minimizando el tiempo de contacto.",
    incorrectas: [
      "Frenar por completo el movimiento antes de recibir una orden verbal.",
      "Aumentar la altura del salto vertical tras una carrera de aproximación."
    ]
  },
  {
    enunciado: "En el análisis cognitivo de la agilidad, el 'escaneo visual' eficiente consiste en:",
    correcta: "Fijar la atención en los puntos clave de información del entorno (como la cadera del oponente o el balón).",
    incorrectas: [
      "Mirar fijamente al suelo para asegurar el apoyo de los pies.",
      "Cerrar los ojos intermitentemente para evitar el deslumbramiento solar."
    ]
  },
  {
    enunciado: "¿Qué capacidad física de base sustenta la fase de re-aceleración en un gesto de agilidad?",
    correcta: "La fuerza explosiva y la potencia del tren inferior.",
    incorrectas: [
      "La flexibilidad estática pasiva de la columna vertebral.",
      "La resistencia aeróbica de larga duración."
    ]
  },
  {
    enunciado: "Un factor antropométrico que puede dificultar la agilidad es:",
    correcta: "Un centro de gravedad excesivamente alto, que dificulta la estabilidad en los cambios de apoyo rápidos.",
    incorrectas: [
      "Un bajo porcentaje de masa grasa corporal.",
      "Una longitud de dedos de la mano proporcional al resto del cuerpo."
    ]
  },
  {
    enunciado: "En la LOMLOE, la agilidad se vincula con la competencia motriz al:",
    correcta: "Permitir al alumno adaptar su respuesta motriz de forma eficaz ante situaciones cambiantes del entorno.",
    incorrectas: [
      "Ser el único criterio para determinar si un alumno es apto para el bachillerato.",
      "Sustituir a los contenidos de expresión corporal por ser más técnicos."
    ]
  },
  {
    enunciado: "El test de Illinois es un test clásico de agilidad que mide principalmente:",
    correcta: "La velocidad de cambio de dirección (CODS) en un entorno predecible.",
    incorrectas: [
      "La capacidad de reacción ante estímulos visuales complejos.",
      "La fuerza máxima isométrica de los extensores de la rodilla."
    ]
  },
  {
    enunciado: "La 'Fatiga Mental' afecta a la agilidad provocando:",
    correcta: "Un aumento del tiempo de reacción y una toma de decisiones errónea o más lenta.",
    incorrectas: [
      "Un aumento de la fuerza muscular por liberación de cortisol.",
      "Una mejora de la precisión en los lanzamientos a distancia."
    ]
  },
  {
    enunciado: "La coordinación intermuscular en la agilidad garantiza:",
    correcta: "La secuencia óptima de activación de agonistas y relajación de antagonistas para un movimiento fluido.",
    incorrectas: [
      "Que todos los músculos del cuerpo se contraigan al mismo tiempo para proteger los huesos.",
      "La producción de glóbulos blancos durante el ejercicio intenso."
    ]
  },
  {
    enunciado: "¿Por qué se recomienda trabajar la agilidad en las primeras etapas de la clase (tras el calentamiento)?",
    correcta: "Porque requiere un sistema nervioso fresco y sin fatiga para maximizar la calidad del aprendizaje y la intensidad.",
    incorrectas: [
      "Para agotar rápidamente las reservas de glucógeno y quemar más grasas.",
      "Porque es la parte más aburrida y los alumnos deben quitársela cuanto antes."
    ]
  },
  {
    enunciado: "El concepto de 'Agilidad Mental' en EF hace referencia a:",
    correcta: "La rapidez para resolver problemas tácticos o estratégicos durante el juego.",
    incorrectas: [
      "La capacidad de memorizar las reglas del juego en menos de cinco minutos.",
      "La velocidad a la que el alumno puede leer el título de la unidad didáctica."
    ]
  },
  {
    enunciado: "La estabilidad del 'CORE' es vital para la agilidad porque:",
    correcta: "Permite la transferencia de fuerzas entre el tren inferior y superior y mantiene el equilibrio del tronco en los giros.",
    incorrectas: [
      "Aumenta la capacidad pulmonar total del alumno de forma instantánea.",
      "Reduce el tamaño del corazón para que sea más ligero al correr."
    ]
  },
  {
    enunciado: "En un cambio de dirección de 180º, la pierna de apoyo realiza una contracción predominantemente:",
    correcta: "Excéntrica para frenar e inmediatamente concéntrica para re-acelerar.",
    incorrectas: [
      "Isométrica pura durante todo el rango de movimiento.",
      "Auxotónica negativa sin participación del sistema nervioso."
    ]
  },
  {
    enunciado: "La agilidad contribuye a la prevención de lesiones al:",
    correcta: "Mejorar la capacidad propioceptiva y el control neuromuscular ante apoyos imprevistos.",
    incorrectas: [
      "Hacer que los ligamentos se vuelvan tan rígidos como el acero.",
      "Evitar que el alumno sude durante la práctica deportiva."
    ]
  },
  {
    enunciado: "¿Qué diferencia la agilidad de la flexibilidad?",
    correcta: "La agilidad implica movimiento dinámico y velocidad, mientras que la flexibilidad es el rango de movimiento articular.",
    incorrectas: [
      "La agilidad solo se puede entrenar en el gimnasio y la flexibilidad en el campo.",
      "No hay diferencia, son términos sinónimos en la fisiología del ejercicio."
    ]
  },
  {
    enunciado: "El uso de la 'escalera de agilidad' (agility ladder) se centra principalmente en mejorar:",
    correcta: "La coordinación óculo-pédica, la frecuencia de apoyos y la mecánica del pie.",
    incorrectas: [
      "La resistencia anaeróbica láctica de larga duración.",
      "La fuerza máxima absoluta del pectoral mayor."
    ]
  },
  {
    enunciado: "La agilidad 'Abierta' (Open Agility) es la que se manifiesta en:",
    correcta: "Deportes de equipo y oposición, donde los estímulos son inciertos y cambiantes.",
    incorrectas: [
      "Pruebas de natación en piscina de 50 metros sin oponentes en la calle.",
      "Ejercicios de estiramiento individual antes de dormir."
    ]
  },
  {
    enunciado: "En la infancia, la agilidad debe desarrollarse mediante:",
    correcta: "Habilidades motrices básicas y juegos globales que no limiten la creatividad del movimiento.",
    incorrectas: [
      "El levantamiento de cargas pesadas para fortalecer los tendones.",
      "La repetición monótona de un solo gesto técnico profesional."
    ]
  },
  {
    enunciado: "La 'Velocidad de Deceleración' es el componente de la agilidad que mide:",
    correcta: "La rapidez con la que un sujeto puede frenar su inercia para cambiar de sentido.",
    incorrectas: [
      "La velocidad a la que el alumno se queda dormido tras la clase.",
      "El tiempo que tarda el corazón en volver a sus pulsaciones de reposo."
    ]
  },
  {
    enunciado: "El calzado deportivo influye en la agilidad a través de:",
    correcta: "El coeficiente de fricción con el suelo y la estabilidad lateral que proporciona al tobillo.",
    incorrectas: [
      "El color de los cordones, que estimula la visión periférica del alumno.",
      "El peso del calcetín, que determina la oxigenación de los dedos."
    ]
  },
  {
    enunciado: "Un componente psicológico clave de la agilidad es:",
    correcta: "La concentración o foco atencional selectivo.",
    incorrectas: [
      "La capacidad de soñar despierto durante las explicaciones.",
      "La empatía con el árbitro en situaciones de conflicto."
    ]
  },
  {
    enunciado: "La agilidad 'General' se diferencia de la 'Específica' en que:",
    correcta: "La general busca una base motriz amplia y la específica se adapta a los gestos de un deporte concreto.",
    incorrectas: [
      "La general solo la practican los niños y la específica los ancianos.",
      "La general no requiere movimiento y la específica sí."
    ]
  },
  {
    enunciado: "La 'Agilidad de Manos' (destreza manual) es fundamental en actividades como:",
    correcta: "Los malabares, el manejo de móviles en juegos de realidad aumentada o el bote en baloncesto.",
    incorrectas: [
      "El salto de altura estilo Fosbury.",
      "La natación en aguas abiertas con neopreno."
    ]
  },
  {
    enunciado: "En el entrenamiento de agilidad, la 'Progresión' lógica debería ser:",
    correcta: "De entornos cerrados y estables a entornos abiertos con incertidumbre y oposición.",
    incorrectas: [
      "De ejercicios muy rápidos a ejercicios extremadamente lentos e isométricos.",
      "De jugar partidos reales a realizar solo estiramientos sentados."
    ]
  },
  {
    enunciado: "¿Cómo afecta el envejecimiento a la agilidad?",
    correcta: "Se produce una pérdida de masa muscular rápida (tipo II) y un aumento del tiempo de procesamiento nervioso.",
    incorrectas: [
      "La agilidad aumenta con la edad debido a la acumulación de experiencia visual.",
      "No hay cambios significativos hasta los 95 años de edad."
    ]
  },
  {
    enunciado: "La 'Relación Señal-Ruido' en la percepción para la agilidad se refiere a:",
    correcta: "La capacidad de extraer el estímulo relevante ignorando las distracciones del entorno.",
    incorrectas: [
      "El volumen de la música en el gimnasio durante el test de Course Navette.",
      "La diferencia de altura entre el alumno más alto y el más bajo de la clase."
    ]
  },
  {
    enunciado: "La agilidad en el agua (natación, waterpolo) está condicionada por:",
    correcta: "La resistencia hidrodinámica y la capacidad de aplicar fuerza en un medio inestable.",
    incorrectas: [
      "La falta absoluta de gravedad que impide cualquier giro.",
      "La temperatura del cloro, que paraliza los músculos del cuello."
    ]
  },
  {
    enunciado: "La 'Economía de Movimiento' en la agilidad se logra mediante:",
    correcta: "La eliminación de movimientos innecesarios (parásitos) y una técnica eficiente de apoyos.",
    incorrectas: [
      "El uso de ropa muy pesada que obligue al cuerpo a esforzarse más.",
      "Realizar el máximo número de gestos posibles en el menor tiempo."
    ]
  },
  {
    enunciado: "Un indicador de buena agilidad en un alumno de Secundaria es:",
    correcta: "La capacidad de corregir un movimiento iniciado ante un cambio imprevisto del adversario.",
    incorrectas: [
      "La capacidad de correr en línea recta durante 2 kilómetros sin cansarse.",
      "Tener una estatura superior a la media de su grupo de edad."
    ]
  },
  {
    enunciado: "La agilidad contribuye al desarrollo de la 'Autoestima' motriz al:",
    correcta: "Proporcionar al alumno herramientas para tener éxito en situaciones de juego colectivo.",
    incorrectas: [
      "Permitirle ganar siempre a sus compañeros sin necesidad de esforzarse.",
      "Evitar que tenga que participar en las clases de Educación Física."
    ]
  }
];