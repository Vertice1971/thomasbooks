// -24-la-velocidad.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define técnicamente la 'Velocidad de Barrera' en el contexto del entrenamiento de la carrera de velocidad?",
    correcta: "El estancamiento de los niveles de velocidad debido a la excesiva automatización de los procesos de excitación e inhibición del sistema nervioso.",
    incorrectas: [
      "La limitación física impuesta por la resistencia del aire al superar los 10 metros por segundo.",
      "La incapacidad biomecánica de aumentar la frecuencia de zancada por una longitud excesiva de las palancas óseas."
    ]
  },
  {
    enunciado: "En la fisiología de la velocidad, ¿qué papel desempeña la actividad de la enzima Miosín-ATPasa?",
    correcta: "Determina la velocidad de hidrólisis del ATP en la cabeza de la miosina, condicionando la rapidez de formación y ruptura de los puentes cruzados.",
    incorrectas: [
      "Regula la entrada de glucosa a la célula muscular a través de los transportadores GLUT-4.",
      "Cataliza la conversión de lactato en piruvato para su posterior oxidación mitocondrial."
    ]
  },
  {
    enunciado: "La velocidad de reacción selección (o compleja) se rige por la 'Ley de Hick', la cual postula que:",
    correcta: "El tiempo de reacción aumenta de forma logarítmica a medida que se incrementa el número de estímulos y respuestas alternativas.",
    incorrectas: [
      "El tiempo de reacción disminuye proporcionalmente a la intensidad del estímulo auditivo aplicado.",
      "La velocidad de respuesta es independiente de la incertidumbre espacial de la tarea motriz."
    ]
  },
  {
    enunciado: "En la biomecánica de la carrera, la 'Fase de Amortiguación' se caracteriza por:",
    correcta: "El contacto inicial del pie con el suelo por delante de la vertical del centro de gravedad, produciendo una deceleración momentánea.",
    incorrectas: [
      "La extensión explosiva de la cadera, rodilla y tobillo para generar el impulso hacia adelante.",
      "El periodo de suspensión donde el cuerpo no mantiene contacto con ninguna superficie de apoyo."
    ]
  },
  {
    enunciado: "¿Qué factor genético es el predictor más fiable de la capacidad de velocidad máxima en un individuo?",
    correcta: "El porcentaje relativo de fibras musculares de contracción rápida (Tipo IIx) y su capacidad de reclutamiento sincrónico.",
    incorrectas: [
      "La capacidad vital forzada medida mediante espirometría en reposo.",
      "El nivel basal de hemoglobina y la densidad de la red capilar periférica."
    ]
  },
  {
    enunciado: "La 'Velocidad Gestual' o segmentaria acíclica depende fundamentalmente de:",
    correcta: "La fuerza explosiva, la coordinación intramuscular y la baja viscosidad del sarcoplasma.",
    incorrectas: [
      "La capacidad de resistencia anaeróbica láctica y el umbral de compensación respiratoria.",
      "La cantidad de glucógeno hepático disponible para la resíntesis de fosfocreatina."
    ]
  },
  {
    enunciado: "En el análisis de la zancada, la 'Frecuencia' se define como el número de apoyos por unidad de tiempo. ¿Qué componente la limita principalmente?",
    correcta: "La velocidad de alternancia de los procesos de excitación e inhibición de las motoneuronas en el sistema nervioso central.",
    incorrectas: [
      "La longitud longitudinal de las extremidades inferiores del sujeto.",
      "La flexibilidad estática pasiva de la musculatura aductora."
    ]
  },
  {
    enunciado: "¿Cuál es el tiempo de recuperación recomendado entre repeticiones de velocidad pura (95-100% de intensidad) para asegurar la resíntesis de ATP-PC?",
    correcta: "Una relación trabajo:descanso de 1:20 o 1:30, o bien 1 minuto de pausa por cada 10 metros recorridos.",
    incorrectas: [
      "Pausas incompletas de 30 segundos para fomentar la tolerancia al lactato sanguíneo.",
      "Descansos de 24 horas entre cada sprint de 30 metros debido al daño estructural."
    ]
  },
  {
    enunciado: "La 'Velocidad de Desplazamiento' es considerada una capacidad híbrida o compleja porque:",
    correcta: "Resulta de la interacción entre la fuerza explosiva, la amplitud zancada y la eficiencia del sistema nervioso.",
    incorrectas: [
      "Depende exclusivamente de los depósitos de triglicéridos intramusculares.",
      "Es la única capacidad que no se puede mejorar mediante el entrenamiento sistemático."
    ]
  },
  {
    enunciado: "El 'Reflejo Miotático' puede contribuir a la velocidad en la carrera al:",
    correcta: "Aumentar la dureza (stiffness) muscular durante el contacto con el suelo, permitiendo un retorno de energía elástica más eficiente.",
    incorrectas: [
      "Provocar una relajación profunda de los músculos agonistas durante la fase de impulsión.",
      "Reducir la frecuencia cardíaca para optimizar el consumo de oxígeno en el sprint."
    ]
  },
  {
    enunciado: "¿En qué consiste el entrenamiento de 'Supervelocidad' mediante el método de asistencias?",
    correcta: "Provocar velocidades superiores a la máxima voluntaria (ej. carrera en pendiente descendente suave) para romper la barrera de velocidad.",
    incorrectas: [
      "Correr con una resistencia externa (arrastres) para fortalecer los cuádriceps.",
      "Entrenar en hipoxia para aumentar la eritropoyetina y mejorar el sprint final."
    ]
  },
  {
    enunciado: "La 'Amplitud de Zancada' óptima se alcanza cuando existe un equilibrio entre:",
    correcta: "La potencia de impulsión (fuerza explosiva) y la flexibilidad de la musculatura flexora y extensora de la cadera.",
    incorrectas: [
      "El número de pulsaciones máximas y la capacidad residual funcional pulmonar.",
      "La ingesta calórica diaria y la velocidad de conducción del impulso nervioso."
    ]
  },
  {
    enunciado: "Según la LOMLOE, el desarrollo de la velocidad en Secundaria debe priorizar:",
    correcta: "Situaciones de juego, retos motrices y tareas de reacción variadas que fomenten la motivación y la participación inclusiva.",
    incorrectas: [
      "La especialización técnica precoz en los tacos de salida para la competición federada.",
      "La medición constante y la segregación del alumnado en función de su marca en los 50 metros."
    ]
  },
  {
    enunciado: "La 'Velocidad de Reacción Anticipada' permite al deportista experto:",
    correcta: "Reducir el tiempo de respuesta mediante la lectura de indicios cinemáticos previos del adversario (percepción táctica).",
    incorrectas: [
      "Moverse antes de que se produzca el estímulo sonoro, asumiendo el riesgo de salida nula.",
      "Aumentar la fuerza de contracción mediante una orden consciente del lóbulo occipital."
    ]
  },
  {
    enunciado: "Un factor limitante de la velocidad gestual es la 'resistencia antagonista', la cual se minimiza mediante:",
    correcta: "La mejora de la coordinación intermuscular y la relajación de los músculos que no intervienen directamente en la acción.",
    incorrectas: [
      "El aumento de la sección transversal de los músculos oponentes para dar estabilidad.",
      "La reducción de la temperatura muscular para evitar el rozamiento viscoelástico."
    ]
  },
  {
    enunciado: "En la fase de 'Aceleración', el cuerpo del velocista debe:",
    correcta: "Mantener una inclinación anterior del tronco respecto a la vertical que va disminuyendo progresivamente hasta alcanzar la máxima velocidad.",
    incorrectas: [
      "Situarse totalmente vertical desde el primer apoyo para reducir la tensión lumbar.",
      "Realizar zancadas lo más largas posible desde el inicio para cubrir más espacio."
    ]
  },
  {
    enunciado: "La 'Velocidad Mental' o de toma de decisiones es determinante en deportes de situación. ¿Qué estructura cerebral es la responsable de filtrar los estímulos irrelevantes?",
    correcta: "El sistema reticular activador ascendente y la corteza prefrontal.",
    incorrectas: [
      "El cerebelo y los núcleos de la base únicamente.",
      "La médula espinal a través de los reflejos polisinápticos."
    ]
  },
  {
    enunciado: "El entrenamiento de velocidad 'Resistida' (ej. paracaídas, trineos) tiene como objetivo principal:",
    correcta: "Mejorar la fuerza específica de aplicación en la fase de aceleración y la potencia de impulsión.",
    incorrectas: [
      "Aumentar la flexibilidad de los tobillos para mejorar el apoyo.",
      "Mejorar la capacidad de recuperación aeróbica entre sprints."
    ]
  },
  {
    enunciado: "La fatiga en esfuerzos de velocidad pura (anaeróbicos alácticos) se debe principalmente a:",
    correcta: "El agotamiento de los depósitos de fosfocreatina (PC) y la fatiga del sistema nervioso central.",
    incorrectas: [
      "La acumulación masiva de ácido láctico que bloquea la glucólisis.",
      "La falta de glucosa en el torrente sanguíneo cerebral."
    ]
  },
  {
    enunciado: "La 'Fase de Vuelo' en la carrera de velocidad se produce cuando:",
    correcta: "El centro de gravedad del corredor se desplaza por el aire sin que ningún pie esté en contacto con el suelo.",
    incorrectas: [
      "El pie de apoyo contacta con el suelo en la fase de amortiguación.",
      "El corredor salta sobre una valla en una carrera de obstáculos."
    ]
  },
  {
    enunciado: "El 'Test de 50 metros' en EF escolar permite evaluar:",
    correcta: "La capacidad de aceleración y la velocidad máxima de desplazamiento.",
    incorrectas: [
      "La resistencia aeróbica y la potencia oxidativa mitocondrial.",
      "La agilidad perceptiva en entornos de alta incertidumbre."
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la flexibilidad sobre la eficacia de la carrera de velocidad?",
    correcta: "Permite una mayor libertad de movimiento articular, reduciendo el trabajo contra las resistencias internas de los tejidos.",
    incorrectas: [
      "Disminuye la velocidad al hacer los tendones demasiado elásticos y blandos.",
      "Aumenta la fuerza muscular al alargar las fibras por encima de su capacidad."
    ]
  },
  {
    enunciado: "La 'Velocidad Acíclica' es aquella que se manifiesta en:",
    correcta: "Gestos técnicos únicos y aislados, como un remate en voleibol o un lanzamiento de peso.",
    incorrectas: [
      "Movimientos repetitivos y cíclicos como el pedaleo en ciclismo o la natación.",
      "La capacidad de mantener un esfuerzo moderado durante más de 30 minutos."
    ]
  },
  {
    enunciado: "La 'Anticipación Espacial' en la velocidad de reacción consiste en:",
    correcta: "Prever la trayectoria o el lugar donde ocurrirá un estímulo para preparar la respuesta motora con antelación.",
    incorrectas: [
      "Reaccionar más rápido a un sonido que a una señal visual.",
      "Aumentar la longitud de la zancada para llegar antes al objetivo."
    ]
  },
  {
    enunciado: "En la técnica de carrera, la 'Tracción' se inicia en el momento en que:",
    correcta: "El pie contacta con el suelo y comienza a ejercer fuerza hacia atrás para desplazar el cuerpo adelante.",
    incorrectas: [
      "El pie se despega del suelo para iniciar la fase de vuelo.",
      "La rodilla alcanza su máxima altura durante la fase de recobro."
    ]
  },
  {
    enunciado: "La velocidad es una capacidad 'precoz' en su desarrollo porque:",
    correcta: "Depende de la maduración del sistema nervioso, la cual se completa en gran medida en las primeras etapas de la vida.",
    incorrectas: [
      "Los niños pequeños tienen más fuerza muscular que los adultos proporcionalmente.",
      "Es la única capacidad que se hereda directamente del padre sin influencia del entrenamiento."
    ]
  },
  {
    enunciado: "¿Cómo influye el calentamiento específico en la velocidad de conducción nerviosa?",
    correcta: "El aumento de la temperatura corporal optimiza la velocidad de los potenciales de acción a través de los axones.",
    incorrectas: [
      "Reduce la velocidad de conducción para evitar el agotamiento de los neurotransmisores.",
      "No tiene influencia, ya que la conducción nerviosa es un fenómeno puramente eléctrico e invariable."
    ]
  },
  {
    enunciado: "La 'Fuerza Explosiva' se considera el soporte mecánico de la velocidad ya que:",
    correcta: "Permite aplicar la máxima fuerza posible en el mínimo tiempo (potencia).",
    incorrectas: [
      "Garantiza que el músculo no se fatigue durante una maratón.",
      "Aumenta la flexibilidad de las articulaciones del tobillo."
    ]
  },
  {
    enunciado: "Un error común en la carrera de velocidad que penaliza la eficiencia es el 'overstriding', que consiste en:",
    correcta: "Apoyar el pie demasiado por delante del centro de gravedad, provocando un efecto de frenado.",
    incorrectas: [
      "Llevar los brazos demasiado pegados al cuerpo durante el sprint.",
      "Realizar zancadas demasiado cortas y rápidas (frecuencia excesiva)."
    ]
  },
  {
    enunciado: "La 'Velocidad de Deceleración' es un factor crítico en deportes de equipo. ¿Qué capacidad muscular la sustenta?",
    correcta: "La fuerza excéntrica de los extensores del tren inferior.",
    incorrectas: [
      "La fuerza concéntrica del bíceps braquial.",
      "La flexibilidad de la musculatura del cuello."
    ]
  },
  {
    enunciado: "En el entrenamiento de la velocidad de reacción en secundaria, se deben emplear estímulos:",
    correcta: "Variados (visuales, auditivos, táctiles) y situaciones de incertidumbre para evitar la automatización.",
    incorrectas: [
      "Siempre idénticos y en el mismo momento para que el alumno se los aprenda de memoria.",
      "Únicamente auditivos, ya que son los únicos presentes en las competiciones oficiales."
    ]
  },
  {
    enunciado: "La 'Velocidad de Reacción Auditiva' es, por lo general:",
    correcta: "Más rápida que la visual, debido a que el procesamiento central de la señal sonora es más directo.",
    incorrectas: [
      "Más lenta que la visual, porque el sonido viaja más lento que la luz.",
      "Exactamente igual a la táctica, ya que todas dependen de la médula espinal."
    ]
  },
  {
    enunciado: "La 'Amplitud de Zancada' disminuye al final de una carrera de 400 metros debido a:",
    correcta: "La fatiga periférica (acidosis) que reduce la capacidad de aplicación de fuerza explosiva en el impulso.",
    incorrectas: [
      "Un aumento de la flexibilidad por el calentamiento excesivo.",
      "La pérdida de memoria técnica por falta de oxígeno en el cerebro."
    ]
  },
  {
    enunciado: "El 'skipping' como ejercicio de técnica de carrera busca mejorar:",
    correcta: "La elevación de rodillas, la acción de brazos y la reactividad del apoyo (frecuencia).",
    incorrectas: [
      "La resistencia aeróbica de larga duración en corredores de fondo.",
      "La fuerza máxima isométrica del cuádriceps."
    ]
  },
  {
    enunciado: "En la fase de 'velocidad máxima', la inclinación del tronco respecto al suelo debe ser:",
    correcta: "Prácticamente vertical o con una ligerísima inclinación hacia adelante.",
    incorrectas: [
      "Totalmente horizontal para reducir la resistencia del viento.",
      "Inclinada hacia atrás para ver mejor la línea de meta."
    ]
  },
  {
    enunciado: "La 'Velocidad de Traslación' se refiere a:",
    correcta: "La capacidad de desplazar todo el cuerpo de un punto a otro en el menor tiempo posible.",
    incorrectas: [
      "La rapidez con la que el alumno se cambia de ropa en el vestuario.",
      "La velocidad a la que el profesor explica los saberes básicos."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'descanso' en una sesión de velocidad pura?",
    correcta: "Es fundamental para permitir la recuperación del sistema nervioso y la resíntesis de fosfágenos.",
    incorrectas: [
      "Es una pérdida de tiempo que reduce la quema de grasas.",
      "Debe ser lo más corto posible para que el alumno no se enfríe."
    ]
  },
  {
    enunciado: "La velocidad de reacción se estabiliza y comienza su declive natural aproximadamente a partir de los:",
    correcta: "25-30 años, de forma gradual.",
    incorrectas: [
      "10 años, coincidiendo con el fin de la infancia.",
      "80 años, siempre que se practique ajedrez."
    ]
  },
  {
    enunciado: "En la ESO, el diseño de tareas de velocidad debe evitar:",
    correcta: "La fatiga acumulada de sesiones anteriores para garantizar la máxima intensidad y calidad del estímulo.",
    incorrectas: [
      "El uso de balones o materiales recreativos.",
      "Que los alumnos corran a más del 50% de su capacidad."
    ]
  },
  {
    enunciado: "La velocidad contribuye a la 'competencia motriz' al permitir al alumno:",
    correcta: "Resolver situaciones de juego que requieren inmediatez y eficacia en la ejecución.",
    incorrectas: [
      "Hacer los exámenes de teoría mucho más rápido que los demás.",
      "Ser el único que puede usar el cronómetro del departamento."
    ]
  }
];