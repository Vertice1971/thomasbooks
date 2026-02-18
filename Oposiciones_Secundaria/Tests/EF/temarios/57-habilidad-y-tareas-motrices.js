// 57-habilidades-motrices-basicas.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se definen las Habilidades Motrices Básicas (HMB) en el marco de la motricidad humana?",
    correcta: "Patrones de movimiento generales, comunes a todos los individuos, que sirven de base para aprendizajes motrices más complejos.",
    incorrectas: [
      "Gestos técnicos especializados propios de una disciplina deportiva federada.",
      "Movimientos reflejos e involuntarios coordinados exclusivamente por la médula espinal."
    ]
  },
  {
    enunciado: "Dentro de las HMB, los 'Desplazamientos' se caracterizan técnicamente por:",
    correcta: "El cambio de posición del cuerpo en el espacio mediante una traslación de su centro de gravedad.",
    incorrectas: [
      "El mantenimiento de una posición estática contra la fuerza de la gravedad.",
      "La aplicación de una fuerza sobre un objeto externo para modificar su trayectoria."
    ]
  },
  {
    enunciado: "¿Qué diferencia biomecánica existe entre la 'Marcha' y la 'Carrera'?",
    correcta: "La carrera presenta una fase aérea o de vuelo, mientras que en la marcha siempre hay un apoyo en el suelo.",
    incorrectas: [
      "La marcha requiere una mayor activación de las fibras tipo IIb que la carrera.",
      "En la carrera no existe el movimiento oscilante de los brazos para el equilibrio."
    ]
  },
  {
    enunciado: "El 'Salto' como habilidad básica implica una fase de batida que busca:",
    correcta: "Transformar la energía cinética horizontal en energía potencial vertical o parabólica mediante una extensión explosiva.",
    incorrectas: [
      "Reducir el tiempo de vuelo para contactar con la superficie lo antes posible.",
      "Mantener el centro de gravedad por debajo de la base de sustentación durante la fase aérea."
    ]
  },
  {
    enunciado: "Los 'Giros' se definen como movimientos de rotación que tienen como eje:",
    correcta: "Cualquiera de los tres ejes del cuerpo humano: longitudinal, transversal o sagital.",
    incorrectas: [
      "Únicamente el eje vertical, impidiendo cualquier rotación en el plano frontal.",
      "Exclusivamente un eje externo al cuerpo del sujeto, como una barra fija."
    ]
  },
  {
    enunciado: "¿Qué es una habilidad motriz 'Manipulativa'?",
    correcta: "Aquella que implica el manejo de objetos, centrada en lanzamientos, recepciones o golpeos.",
    incorrectas: [
      "La capacidad de engañar al adversario mediante fintas visuales en el juego.",
      "Cualquier movimiento que requiera el uso exclusivo de las extremidades inferiores."
    ]
  },
  {
    enunciado: "En el desarrollo de los 'Lanzamientos', la fase de estadiación de Wickstrom destaca que el nivel maduro se alcanza cuando:",
    correcta: "Existe una rotación diferenciada de tronco y un paso adelante con la pierna contraria al brazo ejecutor.",
    incorrectas: [
      "El lanzamiento se realiza exclusivamente con la flexión del codo sin participación del hombro.",
      "El sujeto mantiene los pies paralelos y el tronco rígido durante toda la fase de suelta."
    ]
  },
  {
    enunciado: "Las 'Recepciones' requieren como capacidad perceptivo-motriz fundamental:",
    correcta: "El ajuste espacio-temporal para interceptar la trayectoria de un móvil en movimiento.",
    incorrectas: [
      "La fuerza máxima isométrica en los flexores de los dedos para detener el objeto.",
      "La inhibición del parpadeo mediante el control voluntario del sistema simpático."
    ]
  },
  {
    enunciado: "¿Qué diferencia el 'Equilibrio Dinámico' del 'Estático'?",
    correcta: "El dinámico requiere el mantenimiento de la postura durante un desplazamiento o cambio de base de sustentación.",
    incorrectas: [
      "El estático no requiere activación muscular al estar el cuerpo en reposo absoluto.",
      "El dinámico depende exclusivamente del sistema visual y el estático del sistema vestibular."
    ]
  },
  {
    enunciado: "La 'Cuadrupedia' y el 'Reptar' son formas de desplazamiento que se caracterizan por:",
    correcta: "Aumentar el número de puntos de apoyo y reducir la altura del centro de gravedad respecto al suelo.",
    incorrectas: [
      "Requerir una menor coordinación intersegmentaria que la marcha bípeda normal.",
      "Estar prohibidas en el currículo de Secundaria por considerarse involutivas."
    ]
  },
  {
    enunciado: "En la evolución de las HMB, el concepto de 'Transferencia' sugiere que:",
    correcta: "El dominio de los patrones básicos facilita la adquisición de técnicas deportivas específicas.",
    incorrectas: [
      "La práctica de una habilidad básica anula la capacidad de aprender otra diferente simultáneamente.",
      "El aprendizaje de habilidades manipulativas impide el desarrollo de habilidades de estabilidad."
    ]
  },
  {
    enunciado: "Los 'Apoyos' se consideran habilidades de estabilidad que buscan:",
    correcta: "Mantener el control postural utilizando diferentes segmentos corporales como base sobre una superficie.",
    incorrectas: [
      "Desplazarse a la máxima velocidad posible minimizando el contacto con el suelo.",
      "Lanzar un objeto con precisión hacia un blanco situado a gran altura."
    ]
  },
  {
    enunciado: "Un factor determinante en la eficacia de un 'Golpeo' (ej. patada a un balón) es:",
    correcta: "La cadena cinética que suma las velocidades segmentarias desde el tronco hasta el pie.",
    incorrectas: [
      "La superficie total de la piel del sujeto que entra en contacto con el aire.",
      "El peso del balón, que debe ser siempre superior al peso de la extremidad del sujeto."
    ]
  },
  {
    enunciado: "¿Qué es una 'Habilidad Motriz Combinada'?",
    correcta: "La ejecución simultánea o sucesiva de dos o más habilidades básicas (ej. correr y saltar).",
    incorrectas: [
      "Un gesto que se realiza con la ayuda de un compañero de forma cooperativa.",
      "Aquella que se practica únicamente en el medio natural bajo condiciones de lluvia."
    ]
  },
  {
    enunciado: "La 'Agilidad' se relaciona con las HMB porque representa:",
    correcta: "La capacidad de variar la dirección y velocidad del movimiento de forma rápida y eficiente.",
    incorrectas: [
      "La fuerza bruta necesaria para levantar un objeto pesado desde el suelo.",
      "La resistencia aeróbica para mantener un trote suave durante más de una hora."
    ]
  },
  {
    enunciado: "En la LOMLOE, el trabajo de las HMB en Secundaria busca:",
    correcta: "Consolidar y refinar los patrones para su aplicación en situaciones de juego y deporte.",
    incorrectas: [
      "Empezar desde cero el aprendizaje de la marcha debido a la involución adolescente.",
      "Sustituir las habilidades básicas por ejercicios de musculación analítica en gimnasio."
    ]
  },
  {
    enunciado: "El 'Esquema Corporal' influye en las HMB porque permite:",
    correcta: "La representación mental de las partes del cuerpo para ajustar el movimiento a la tarea.",
    incorrectas: [
      "Aumentar la estatura del alumno mediante la visualización constante del crecimiento.",
      "Reducir el consumo de oxígeno durante la realización de tareas manipulativas."
    ]
  },
  {
    enunciado: "Los 'Desplazamientos Habituales' incluyen:",
    correcta: "La marcha y la carrera.",
    incorrectas: [
      "La escalada y el buceo subacuático.",
      "El transporte de compañeros a hombros."
    ]
  },
  {
    enunciado: "Un indicador de madurez en el 'Salto de Longitud' básico es:",
    correcta: "La utilización de los brazos de forma oscilante y coordinada para favorecer el impulso.",
    incorrectas: [
      "Mantener los brazos pegados al tronco para reducir la resistencia aerodinámica.",
      "Realizar la batida con los dos pies juntos de forma obligatoria en la fase inicial."
    ]
  },
  {
    enunciado: "La 'Lateralidad' influye en las HMB manipulativas determinando:",
    correcta: "La preferencia y mayor eficacia de un lado del cuerpo en tareas de precisión y fuerza.",
    incorrectas: [
      "La dirección del viento que el alumno siente en la cara al correr.",
      "El número de veces que el corazón late por minuto durante un giro."
    ]
  },
  {
    enunciado: "En los 'Lanzamientos de Precisión', el factor clave es:",
    correcta: "El control de la fuerza aplicada y la fijación del foco atencional en el objetivo.",
    incorrectas: [
      "La velocidad máxima de salida del móvil sin importar la dirección.",
      "El uso de calzado con clavos para evitar el retroceso tras la suelta."
    ]
  },
  {
    enunciado: "La 'Trepa' se define como un desplazamiento que:",
    correcta: "Se realiza en un plano vertical o inclinado utilizando agarres y apoyos de extremidades.",
    incorrectas: [
      "Ocurre exclusivamente en el medio acuático mediante el batido de piernas.",
      "Implica el uso de una bicicleta para superar pendientes de gran inclinación."
    ]
  },
  {
    enunciado: "Las 'Fintas' se consideran habilidades de desplazamiento porque:",
    correcta: "Requieren cambios bruscos de dirección y ritmo para desequilibrar a un oponente.",
    incorrectas: [
      "Consisten en quedarse quieto y cerrar los ojos ante un estímulo externo.",
      "Son movimientos que se realizan únicamente con los dedos de las manos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Espacio de Acción' en las HMB?",
    correcta: "El área próxima donde el sujeto puede manipular objetos sin necesidad de desplazarse.",
    incorrectas: [
      "La distancia total que recorre un alumno durante la clase de EF.",
      "El lugar del pabellón donde se guarda el material pesado."
    ]
  },
  {
    enunciado: "En la fase de 'Propulsión' de los desplazamientos, la fuerza se aplica para:",
    correcta: "Vencer la inercia del estado de reposo o mantener la velocidad de traslación.",
    incorrectas: [
      "Detener el movimiento del cuerpo de forma instantánea y segura.",
      "Aumentar el peso corporal del sujeto mediante la presión atmosférica."
    ]
  },
  {
    enunciado: "Un error común en la 'Carrera' inicial es:",
    correcta: "El contacto inicial con el suelo utilizando toda la planta o el talón de forma brusca.",
    incorrectas: [
      "Mantener la mirada al frente y el tronco ligeramente inclinado hacia adelante.",
      "Realizar una fase de vuelo excesivamente larga con una buena amortiguación."
    ]
  },
  {
    enunciado: "La 'Coordinación Óculo-Pédica' es esencial para:",
    correcta: "Habilidades manipulativas que implican golpeos o conducciones con los pies.",
    incorrectas: [
      "Mantener el equilibrio sobre una barra de gimnasia con los ojos cerrados.",
      "Realizar una voltereta hacia adelante en el suelo de forma fluida."
    ]
  },
  {
    enunciado: "Los 'Lanzamientos en Suspensión' combinan las habilidades de:",
    correcta: "Salto y lanzamiento.",
    incorrectas: [
      "Giro y equilibrio estático.",
      "Marcha y cuadrupedia baja."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Sistema Vestibular' en las habilidades de estabilidad?",
    correcta: "Informa sobre la posición de la cabeza y las aceleraciones para mantener el equilibrio.",
    incorrectas: [
      "Se encarga de la digestión de los nutrientes necesarios para el músculo.",
      "Regula la temperatura de la piel durante la realización de giros longitudinales."
    ]
  },
  {
    enunciado: "El 'Transporte' de objetos pesados como habilidad básica requiere:",
    correcta: "Una buena estabilización del core y una alineación correcta de la columna vertebral.",
    incorrectas: [
      "Lanzar el objeto al aire y recogerlo repetidamente para que pese menos.",
      "Correr a la máxima velocidad posible para terminar antes la tarea."
    ]
  },
  {
    enunciado: "La 'Inhibición de Sincinesias' permite:",
    correcta: "Eliminar movimientos parásitos o involuntarios que restan eficacia a la habilidad básica.",
    incorrectas: [
      "Aumentar el número de gestos innecesarios para distraer al adversario.",
      "Bloquear la respiración durante la ejecución de un lanzamiento de fuerza."
    ]
  },
  {
    enunciado: "En los 'Giros en el eje transversal', un ejemplo común es:",
    correcta: "La voltereta o el salto mortal.",
    incorrectas: [
      "La pirueta sobre un pie (eje longitudinal).",
      "La rueda lateral (eje sagital)."
    ]
  },
  {
    enunciado: "¿Qué es la 'Anticipación Receptiva'?",
    correcta: "La capacidad de predecir dónde y cuándo estará el móvil para colocar el cuerpo adecuadamente.",
    incorrectas: [
      "Recoger un objeto del suelo antes de que el profesor dé la orden de inicio.",
      "Cerrar las manos con fuerza antes de que el objeto llegue para evitar el dolor."
    ]
  },
  {
    enunciado: "Las 'Habilidades no Locomotrices' son aquellas que:",
    correcta: "Se realizan sin traslación del centro de gravedad, como el balanceo o el estiramiento.",
    incorrectas: [
      "Requieren el uso de motores eléctricos para poder llevarse a cabo.",
      "Están diseñadas para personas que no pueden mover las piernas."
    ]
  },
  {
    enunciado: "La 'Amortiguación' en los saltos es fundamental para:",
    correcta: "Disipar la energía del impacto mediante una flexión excéntrica de las articulaciones del tren inferior.",
    incorrectas: [
      "Aumentar la dureza de los huesos mediante el choque directo contra el suelo.",
      "Hacer el mayor ruido posible para que los jueces sepan que se ha caído."
    ]
  },
  {
    enunciado: "Un factor que dificulta el 'Equilibrio' es:",
    correcta: "La elevación del centro de gravedad o la reducción de la base de sustentación.",
    incorrectas: [
      "Mantener los brazos extendidos lateralmente para aumentar el momento de inercia.",
      "Bajar el centro de gravedad flexionando las rodillas de forma controlada."
    ]
  },
  {
    enunciado: "En la enseñanza de las HMB, se debe pasar de situaciones:",
    correcta: "Simples y estables a situaciones complejas, dinámicas y con incertidumbre.",
    incorrectas: [
      "Altamente competitivas a situaciones de práctica individual aislada.",
      "Con materiales pesados a materiales extremadamente ligeros y pequeños."
    ]
  },
  {
    enunciado: "La 'Coordinación Dinámica General' se manifiesta en habilidades como:",
    correcta: "Los desplazamientos y saltos, donde interviene la globalidad corporal.",
    incorrectas: [
      "El parpadeo rítmico o el movimiento de un solo dedo de la mano.",
      "Estar sentado correctamente en una silla durante la explicación teórica."
    ]
  },
  {
    enunciado: "Los 'Lanzamientos con Amplitud' buscan:",
    correcta: "Aumentar el recorrido del implemento antes de la suelta para aplicar fuerza durante más tiempo.",
    incorrectas: [
      "Lanzar el objeto lo más alto posible para que tarde mucho en caer.",
      "Reducir el movimiento del brazo para que el lanzamiento sea más discreto."
    ]
  },
  {
    enunciado: "La 'Evaluación de las HMB' en EF debe considerar:",
    correcta: "Tanto la eficacia (logro del objetivo) como la eficiencia (calidad técnica del patrón).",
    incorrectas: [
      "Únicamente si el alumno se divierte o no durante la realización del ejercicio.",
      "La comparación del alumno con las marcas del campeón olímpico de decatlón."
    ]
  }
];