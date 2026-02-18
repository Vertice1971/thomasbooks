// -22-la-fuerza.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define la 'Fuerza Explosivo-Tónica' según la clasificación propuesta por Yuri Verkhoshansky?",
    correcta: "La capacidad de desarrollar una tensión elevada en el menor tiempo posible contra resistencias medias de carácter externo.",
    incorrectas: [
      "La capacidad de mantener una contracción isométrica máxima durante un periodo prolongado de tiempo.",
      "La capacidad de vencer una carga máxima sin que el componente de aceleración sea significativo."
    ]
  },
  {
    enunciado: "En la arquitectura muscular, ¿cómo influye técnicamente un mayor ángulo de penación en la producción de fuerza?",
    correcta: "Permite un mayor empaquetamiento de fibras en un volumen dado, aumentando la sección transversal fisiológica y la fuerza total generada.",
    incorrectas: [
      "Reduce la fuerza total pero aumenta la velocidad de acortamiento de las sarcómeras de forma lineal.",
      "No tiene influencia biomecánica, ya que la fuerza solo depende de la longitud del brazo de palanca óseo."
    ]
  },
  {
    enunciado: "El Ciclo Estiramiento-Acortamiento (CEA) se fundamenta neurofisiológicamente en:",
    correcta: "La acumulación de energía elástica en los elementos elásticos en serie y la potenciación por el reflejo miotático.",
    incorrectas: [
      "La degradación anaeróbica de fosfocreatina durante la fase puramente concéntrica del movimiento.",
      "La inhibición de los órganos tendinosos de Golgi para permitir una elongación muscular sinérgica."
    ]
  },
  {
    enunciado: "¿Qué tipo de hipertrofia se caracteriza por el aumento del volumen del sarcoplasma y proteínas no contráctiles sin un incremento proporcional de la fuerza máxima?",
    correcta: "Hipertrofia sarcoplásmica.",
    incorrectas: [
      "Hipertrofia sarcomérica.",
      "Hiperplasia de fibras tipo IIb."
    ]
  },
  {
    enunciado: "La 'Manifestación Dinámica de la Fuerza' se cuantifica técnicamente mediante el RFD (Rate of Force Development), que representa:",
    correcta: "La pendiente de la curva fuerza-tiempo, indicando la rapidez con la que el sujeto aplica fuerza tras el inicio de la activación.",
    incorrectas: [
      "El número de repeticiones máximas que un sujeto puede realizar hasta alcanzar el fallo concéntrico.",
      "La diferencia entre la fuerza máxima absoluta y la fuerza relativa al peso corporal."
    ]
  },
  {
    enunciado: "En adolescentes de Secundaria, ¿qué factor biológico marca la 'fase sensible' para el inicio del entrenamiento de fuerza hipertrófica?",
    correcta: "El pico de velocidad de crecimiento (PHV) y el consiguiente aumento de la secreción de testosterona y hormona del crecimiento.",
    incorrectas: [
      "La estabilización de la frecuencia cardíaca de reposo por debajo de los 60 latidos por minuto.",
      "El cierre total de las epífisis de los huesos largos que ocurre invariablemente a los 12 años."
    ]
  },
  {
    enunciado: "¿Qué hormona es la principal mediadora del anabolismo muscular y la síntesis proteica en respuesta al entrenamiento de sobrecarga en varones?",
    correcta: "Testosterona.",
    incorrectas: [
      "Cortisol.",
      "Insulina de tipo glucolítico."
    ]
  },
  {
    enunciado: "La mejora de la 'Coordinación Intramuscular' como adaptación neural al entrenamiento de fuerza implica:",
    correcta: "Un aumento en el reclutamiento de unidades motoras, su frecuencia de disparo y la sincronización de las mismas.",
    incorrectas: [
      "Una mejor interacción entre los músculos agonistas y antagonistas para evitar la co-contracción.",
      "El aumento del número de mitocondrias por cada fibra muscular rápida."
    ]
  },
  {
    enunciado: "Un criterio de seguridad esencial en el entrenamiento de fuerza escolar para evitar picos hipertensivos y síncopes es:",
    correcta: "Evitar la maniobra de Valsalva, manteniendo una respiración fluida (espirar en la fase concéntrica).",
    incorrectas: [
      "Realizar siempre todas las series hasta alcanzar el fallo muscular absoluto en cada sesión.",
      "Utilizar obligatoriamente cinturones de potencia en ejercicios de carga ligera."
    ]
  },
  {
    enunciado: "La 'Fuerza Reactiva' es una manifestación específica que depende de:",
    correcta: "La capacidad de absorber energía en una fase excéntrica rápida y reutilizarla en una fase concéntrica inmediata.",
    incorrectas: [
      "La capacidad de reaccionar visualmente a un estímulo antes de levantar una carga isométrica.",
      "La resistencia de los ligamentos a la torsión durante esfuerzos de larga duración."
    ]
  },
  {
    enunciado: "Según la curva Fuerza-Velocidad de Hill, ¿qué sucede con la fuerza generada a medida que aumenta la velocidad de acortamiento concéntrico?",
    correcta: "La fuerza disminuye de forma hiperbólica debido a la menor formación de puentes cruzados actomiosínicos.",
    incorrectas: [
      "La fuerza aumenta linealmente para compensar la inercia del segmento óseo.",
      "La fuerza permanece constante, ya que depende únicamente del potencial de acción nervioso."
    ]
  },
  {
    enunciado: "El entrenamiento de fuerza en la LOMLOE se justifica desde la perspectiva de la salud por:",
    correcta: "La mejora de la densidad mineral ósea, la estabilidad articular y la prevención de sarcopenia precoz.",
    incorrectas: [
      "La búsqueda del máximo rendimiento deportivo para la selección en centros de tecnificación.",
      "La imitación de los modelos de entrenamiento de los atletas de élite en halterofilia."
    ]
  },
  {
    enunciado: "¿Qué se define como 'Déficit de Fuerza' en la literatura técnica?",
    correcta: "La diferencia entre la fuerza máxima absoluta (capacidad potencial) y la fuerza máxima voluntaria.",
    incorrectas: [
      "La pérdida de fuerza que sufre un alumno tras un periodo de inactividad de una semana.",
      "La incapacidad de un músculo para contraerse por falta de depósitos de potasio."
    ]
  },
  {
    enunciado: "La 'Fuerza Resistencia' en Secundaria debe trabajarse prioritariamente bajo el siguiente esquema de carga:",
    correcta: "Cargas bajas o moderadas (40-60% 1RM) con un volumen de repeticiones alto (15-25) y pausas cortas.",
    incorrectas: [
      "Cargas máximas (90-100% 1RM) con repeticiones únicas y descansos de 5 minutos.",
      "Ejercicios exclusivamente isométricos mantenidos hasta el agotamiento total."
    ]
  },
  {
    enunciado: "En física y biomecánica, la Fuerza se define como el producto de la masa por la aceleración. Su unidad en el S.I. es:",
    correcta: "Newton (N).",
    incorrectas: [
      "Kilopondio (kp).",
      "Julio (J)."
    ]
  },
  {
    enunciado: "La 'Pliometría de baja intensidad' adecuada para la etapa de la ESO incluye:",
    correcta: "Multisaltos horizontales, saltos de comba y ejercicios de reactividad sobre superficies estables.",
    incorrectas: [
      "Saltos de profundidad desde cajones de 1 metro de altura con lastre en los tobillos.",
      "Sentadillas con salto utilizando el 80% de la carga máxima del alumno."
    ]
  },
  {
    enunciado: "¿Qué grupo muscular se considera el principal estabilizador del raquis (CORE) y debe fortalecerse antes que las extremidades?",
    correcta: "El transverso del abdomen y los multífidos.",
    incorrectas: [
      "El recto femoral y el vasto intermedio.",
      "El bíceps braquial y el braquiorradial."
    ]
  },
  {
    enunciado: "La 'Ley de Wolff' aplicada al entrenamiento de fuerza escolar postula que:",
    correcta: "El tejido óseo se remodela y aumenta su resistencia en función de las cargas mecánicas y tracciones que recibe.",
    incorrectas: [
      "El músculo esquelético se hipertrofia únicamente si recibe estímulos anaeróbicos alácticos.",
      "La flexibilidad disminuye proporcionalmente al aumento de la sección transversal del músculo."
    ]
  },
  {
    enunciado: "¿Qué característica biomecánica define a la contracción excéntrica respecto a la producción de fuerza?",
    correcta: "Es capaz de generar niveles de tensión superiores a la isométrica y concéntrica con un menor coste metabólico relativo.",
    incorrectas: [
      "Genera menos tensión debido al desenganche forzado de las cabezas de miosina.",
      "No produce tensión mecánica, solo elongación pasiva de los tejidos conectivos."
    ]
  },
  {
    enunciado: "La fatiga neural o central en el entrenamiento de sobrecarga se localiza principalmente en:",
    correcta: "La corteza motora y la médula espinal (descenso del 'drive' central).",
    incorrectas: [
      "La unión neuromuscular por agotamiento de acetilcolina.",
      "Los depósitos de glucógeno del hígado."
    ]
  },
  {
    enunciado: "El 'Power Training' o entrenamiento de potencia se distingue por priorizar:",
    correcta: "La velocidad de ejecución de la fase concéntrica, buscando la máxima explosividad.",
    incorrectas: [
      "El tiempo bajo tensión (TUT) extremadamente lento para maximizar el daño muscular.",
      "La resistencia aeróbica de los músculos estabilizadores únicamente."
    ]
  },
  {
    enunciado: "Un ejercicio de 'Fuerza Isométrica' funcional para la salud postural en Secundaria es:",
    correcta: "La plancha abdominal o puente lateral manteniendo la alineación del raquis.",
    incorrectas: [
      "El lanzamiento de disco con giro técnico completo.",
      "La carrera de 100 metros lisos a intensidad máxima."
    ]
  },
  {
    enunciado: "La 'Inhibición Recíproca' es un mecanismo que garantiza que:",
    correcta: "El músculo antagonista se relaje proporcionalmente a la activación del agonista para permitir el movimiento.",
    incorrectas: [
      "Ambos músculos (agonista y antagonista) se contraigan simultáneamente para bloquear la articulación.",
      "El sistema nervioso detenga la contracción si detecta una fatiga extrema en el tendón."
    ]
  },
  {
    enunciado: "¿Qué componente del citoesqueleto muscular proporciona la mayor resistencia elástica pasiva al estiramiento?",
    correcta: "La proteína titina.",
    incorrectas: [
      "El retículo sarcoplásmico.",
      "La mioglobina."
    ]
  },
  {
    enunciado: "En la evaluación de la condición física, el 'Test de Salto Horizontal' estima:",
    correcta: "La potencia explosiva de los extensores del tren inferior (glúteos, cuádriceps y tríceps sural).",
    incorrectas: [
      "La flexibilidad de la cadena posterior y la movilidad del tobillo.",
      "La capacidad de resistencia aeróbica máxima en esfuerzos intermitentes."
    ]
  },
  {
    enunciado: "La 'Potenciación Post-Activación' (PAP) es un fenómeno consistente en:",
    correcta: "El aumento temporal de la capacidad de generar fuerza explosiva tras una contracción condicionante previa de alta intensidad.",
    incorrectas: [
      "La debilidad que experimenta el músculo inmediatamente después de levantarse de dormir.",
      "La pérdida de fuerza por desuso prolongado de un segmento corporal."
    ]
  },
  {
    enunciado: "El 'Entrenamiento en Circuito' aplicado a la fuerza en la ESO favorece:",
    correcta: "La polivalencia metabólica y el trabajo global de todas las cadenas musculares con pausas controladas.",
    incorrectas: [
      "La especialización técnica en un solo levantamiento olímpico.",
      "La eliminación total de la necesidad de realizar un calentamiento previo."
    ]
  },
  {
    enunciado: "La 'Relación Tensión-Longitud' establece que el músculo genera su máxima fuerza:",
    correcta: "Cerca de su longitud de reposo, donde el solapamiento actina-miosina es óptimo.",
    incorrectas: [
      "En estado de estiramiento máximo donde los filamentos apenas se tocan.",
      "En estado de acortamiento máximo donde las líneas Z chocan con la miosina."
    ]
  },
  {
    enunciado: "La mayoría de los movimientos humanos se rigen por palancas de tercer género. ¿Qué implica esto para la fuerza?",
    correcta: "Es una desventaja mecánica para la fuerza, pero una ventaja para la velocidad y amplitud de movimiento.",
    incorrectas: [
      "Es una ventaja mecánica que permite levantar grandes pesos con poco esfuerzo muscular.",
      "No influye en la producción de fuerza, solo en la estética del movimiento."
    ]
  },
  {
    enunciado: "La 'Sección Transversal Fisiológica' se diferencia de la anatómica en que:",
    correcta: "Corta todas las fibras del músculo de forma perpendicular, reflejando mejor el potencial contráctil.",
    incorrectas: [
      "Se mide rodeando el vientre muscular con una cinta métrica común.",
      "Solo tiene en cuenta los tendones y no las fibras contráctiles."
    ]
  },
  {
    enunciado: "Un signo clínico de sobrecarga excesiva de fuerza en adolescentes es:",
    correcta: "Dolor persistente en las inserciones tendinosas (entesitis) y alteraciones del patrón de crecimiento.",
    incorrectas: [
      "Aumento de la energía diaria y mejora del apetito.",
      "Descenso de la frecuencia cardíaca de reposo por debajo de 50 ppm."
    ]
  },
  {
    enunciado: "La 'Fuerza Absoluta' representa:",
    correcta: "La máxima capacidad de tensión que un músculo puede generar independientemente del peso corporal.",
    incorrectas: [
      "La fuerza que un sujeto hace contra la resistencia de la gravedad.",
      "La fuerza total dividida por la masa muscular magra del individuo."
    ]
  },
  {
    enunciado: "La 'Fuerza Relativa' es un parámetro crítico en deportes de autocarga como:",
    correcta: "La gimnasia artística y la escalada deportiva.",
    incorrectas: [
      "El lanzamiento de peso en categoría absoluta masculina.",
      "El fútbol americano en la línea de defensa."
    ]
  },
  {
    enunciado: "¿Cuál es el papel del sistema propioceptivo (Husos y Golgi) en el entrenamiento de fuerza?",
    correcta: "Regular el tono muscular y proteger la integridad articular mediante mecanismos de retroalimentación.",
    incorrectas: [
      "Suministrar oxígeno directamente a las fibras musculares rápidas.",
      "Eliminar el exceso de ácido láctico a través de las sinapsis nerviosas."
    ]
  },
  {
    enunciado: "El entrenamiento de fuerza 'isocinético' se define por:",
    correcta: "Mantener una velocidad de movimiento constante a lo largo de todo el rango articular mediante resistencia adaptativa.",
    incorrectas: [
      "Utilizar pesos libres de hierro fundido con una aceleración variable.",
      "Correr por la montaña superando desniveles pronunciados."
    ]
  },
  {
    enunciado: "La 'Reserva de Fuerza' es la diferencia aritmética entre:",
    correcta: "La fuerza máxima voluntaria y la fuerza requerida para realizar un gesto deportivo específico.",
    incorrectas: [
      "La fuerza del brazo derecho y la del brazo izquierdo.",
      "La fuerza total del alumno y la de su profesor de Educación Física."
    ]
  },
  {
    enunciado: "En la planificación de la fuerza para escolares, el periodo de 'Adaptación Anatómica' busca:",
    correcta: "Reforzar el tejido conectivo (tendones y ligamentos) y mejorar la técnica antes de aumentar la intensidad.",
    incorrectas: ["Aprender los nombres de todos los músculos del cuerpo humano.", "Reducir la masa muscular para favorecer la agilidad pura."]
  },
  {
    enunciado: "La prevención de la 'Sarcopenia' futura se inicia en la adolescencia mediante:",
    correcta: "La creación de una reserva funcional de masa muscular a través del estímulo de fuerza.",
    incorrectas: ["El consumo masivo de bebidas azucaradas antes del ejercicio.", "El reposo absoluto durante las horas de Educación Física."]
  },
  {
    enunciado: "Técnicamente, el concepto de 'CORE' integra:",
    correcta: "El complejo lumbopélvico-cadera, incluyendo abdominales, extensores lumbares y diafragma.",
    incorrectas: [
      "Únicamente el músculo recto anterior del abdomen.",
      "Los músculos flexores y extensores de los dedos de la mano."
    ]
  },
  {
    enunciado: "Según la LOMLOE, la evaluación de la fuerza en EF debe centrarse en:",
    correcta: "La mejora de la competencia motriz personal y la aplicación de la fuerza a la vida activa y saludable.",
    incorrectas: ["El establecimiento de récords de clase para motivar la competitividad extrema.", "La medición del perímetro del bíceps de los alumnos de forma comparativa."]
  }
];