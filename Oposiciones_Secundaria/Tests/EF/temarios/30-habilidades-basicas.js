// -30-habilidades-motrices-basicas.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se definen las Habilidades Motrices Básicas (HMB) desde la perspectiva filogenética de autores como Godfrey y Kephart?",
    correcta: "Como patrones motores que surgen de la maduración biológica y la exploración del entorno, comunes a todos los individuos de la especie.",
    incorrectas: [
      "Como gestos técnicos especializados adquiridos exclusivamente mediante el entrenamiento deportivo reglado.",
      "Como capacidades condicionales que dependen de la sección transversal del músculo y el metabolismo aeróbico."
    ]
  },
  {
    enunciado: "En la mecánica del salto, ¿qué define técnicamente la fase de 'batida' o impulso?",
    correcta: "La transformación de la energía cinética horizontal en energía potencial mediante una extensión explosiva del triple complejo articular del tren inferior.",
    incorrectas: [
      "El instante de vuelo parabólico donde el centro de gravedad alcanza su máxima altura respecto al suelo.",
      "La recepción elástica en el suelo donde los músculos extensores realizan una contracción exclusivamente isométrica."
    ]
  },
  {
    enunciado: "¿Qué diferencia praxiológica existe entre un 'desplazamiento habitual' y uno 'no habitual'?",
    correcta: "Los habituales (marcha, carrera) forman parte del repertorio cotidiano, mientras que los no habituales (cuadrupedias, trepas, reptaciones) requieren patrones coordinativos menos frecuentes.",
    incorrectas: [
      "Los habituales siempre se realizan a máxima velocidad y los no habituales en estado de reposo.",
      "Los no habituales son exclusivos de la etapa de Educación Primaria y no se trabajan en Secundaria."
    ]
  },
  {
    enunciado: "En el análisis de los lanzamientos, ¿qué factor biomecánico determina la distancia recorrida por el móvil según la física del movimiento parabólico?",
    correcta: "La velocidad inicial de salida, el ángulo de proyección y la altura del punto de suelta.",
    incorrectas: [
      "La capacidad pulmonar del lanzador y el volumen sistólico alcanzado en el momento del impacto.",
      "El coeficiente de fricción de las zapatillas con la superficie de apoyo exclusivamente."
    ]
  },
  {
    enunciado: "La habilidad de 'Giro' se clasifica según el eje sobre el que se realiza. Un giro sobre el eje sagital (anteroposterior) da lugar a:",
    correcta: "Movimientos laterales como la rueda lateral o voltereta lateral.",
    incorrectas: [
      "Rotaciones sobre el eje vertical como la pirueta de ballet.",
      "Volteretas hacia adelante o hacia atrás sobre el eje transversal."
    ]
  },
  {
    enunciado: "¿Cuál es la principal característica de las habilidades motrices 'manipulativas' según la clasificación de Wickstrom?",
    correcta: "La aplicación de fuerza a un objeto o la recepción de la misma, mediada por una coordinación óculo-segmentaria.",
    incorrectas: [
      "El desplazamiento del centro de gravedad de un punto A a un punto B en el menor tiempo posible.",
      "El mantenimiento de una postura estática sobre una base de sustentación reducida."
    ]
  },
  {
    enunciado: "En la evolución de las HMB hacia las Habilidades Motrices Específicas (HME), el concepto de 'transferencia' implica:",
    correcta: "Que el dominio de un patrón básico (lanzamiento) facilita el aprendizaje de una técnica deportiva (tiro en suspensión).",
    incorrectas: [
      "Que el alumno olvida los patrones básicos al aprender técnicas profesionales.",
      "La conversión de la masa muscular en energía cinética sin pasar por el metabolismo químico."
    ]
  },
  {
    enunciado: "La recepción se define como la habilidad de interrumpir la trayectoria de un móvil. Biomecánicamente, para que sea eficiente debe:",
    correcta: "Prolongar el tiempo de contacto y acompañar el movimiento del móvil para disipar la energía cinética (amortiguación).",
    incorrectas: [
      "Golpear el objeto con la mayor rigidez posible para que rebote hacia el compañero.",
      "Mantener las articulaciones bloqueadas en extensión total para evitar que el móvil golpee el cuerpo."
    ]
  },
  {
    enunciado: "Las 'Trepas' se diferencian de las cuadrupedias en que:",
    correcta: "Implican un desplazamiento en un plano vertical o inclinado, requiriendo una mayor implicación de la fuerza relativa y el agarre.",
    incorrectas: [
      "Se realizan siempre con los ojos cerrados para mejorar la propiocepción auditiva.",
      "No utilizan las extremidades superiores para el avance, solo el apoyo de los pies."
    ]
  },
  {
    enunciado: "En el desarrollo motor, el 'estadio maduro' de una habilidad motriz básica se caracteriza por:",
    correcta: "La fluidez, la integración armónica de todos los segmentos y la economía de esfuerzo en la ejecución.",
    incorrectas: [
      "Una ejecución rígida, con movimientos parásitos y un gasto energético desmesurado.",
      "La incapacidad de adaptar el movimiento a diferentes entornos o situaciones de juego."
    ]
  },
  {
    enunciado: "El equilibrio como habilidad no locomotriz se divide en estático y dinámico. El dinámico es aquel donde el sujeto:",
    correcta: "Mantiene el control de la postura mientras su centro de gravedad se desplaza o la base de sustentación varía.",
    incorrectas: [
      "Permanece totalmente inmóvil sobre una superficie estable y amplia.",
      "Reduce su frecuencia cardíaca por debajo de las 50 pulsaciones en reposo."
    ]
  },
  {
    enunciado: "Las 'Reptaciones' son desplazamientos donde el factor determinante es:",
    correcta: "El mantenimiento de un contacto total o parcial del tronco con la superficie de apoyo.",
    incorrectas: [
      "El salto constante sobre un solo apoyo de forma rítmica.",
      "La ausencia total de contacto con el suelo durante más de 5 segundos."
    ]
  },
  {
    enunciado: "En el marco de la LOMLOE, las HMB se integran en los Saberes Básicos para fomentar:",
    correcta: "Una competencia motriz versátil que permita la resolución de problemas en contextos lúdicos y cotidianos.",
    incorrectas: [
      "La especialización deportiva temprana hacia el alto rendimiento olímpico.",
      "La evaluación puramente cuantitativa de marcas atléticas en el aula."
    ]
  },
  {
    enunciado: "La habilidad de 'Golpeo' se diferencia del lanzamiento en que:",
    correcta: "El contacto con el móvil es instantáneo y se produce mediante la transmisión de energía de un segmento o implemento en movimiento.",
    incorrectas: [
      "El objeto se acompaña durante toda la fase de impulso hasta que se suelta.",
      "Solo se puede realizar con las extremidades inferiores en posición de sentado."
    ]
  },
  {
    enunciado: "¿Qué papel juega el sistema vestibular en la habilidad motriz de 'Giro'?",
    correcta: "Regula el equilibrio y la orientación espacial detectando la aceleración angular de la cabeza.",
    incorrectas: [
      "Suministra la energía metabólica necesaria para la rotación muscular.",
      "Permite la visión de colores en condiciones de movimiento rápido."
    ]
  },
  {
    enunciado: "Los 'Transportes' son habilidades combinadas que requieren la integración de:",
    correcta: "Un desplazamiento (locomotriz) con el manejo y estabilización de una carga externa (manipulativa/equilibrio).",
    incorrectas: [
      "La capacidad de nadar y correr simultáneamente en un medio acuático.",
      "El conocimiento de las rutas de autobús escolar para llegar al gimnasio."
    ]
  },
  {
    enunciado: "El 'Salto de Longitud' en el contexto escolar es una HMB que evoluciona hacia una HME. Su éxito depende biomecánicamente de:",
    correcta: "La velocidad horizontal de aproximación y la verticalización del vector de fuerza en el último apoyo.",
    incorrectas: [
      "La flexibilidad de la muñeca y el volumen corriente respiratorio.",
      "La capacidad de memorizar el reglamento de la federación internacional."
    ]
  },
  {
    enunciado: "La habilidad de 'Frenado' o parada es crucial en Secundaria para:",
    correcta: "El control de la inercia y la prevención de lesiones en juegos de alta intensidad y oposición.",
    incorrectas: [
      "Aumentar la temperatura corporal de forma brusca tras el ejercicio.",
      "Reducir el tiempo de sueño durante los periodos de exámenes."
    ]
  },
  {
    enunciado: "En el aprendizaje de las HMB, el 'feedback' cinestésico permite al alumno:",
    correcta: "Sentir la posición de sus segmentos y la tensión muscular para corregir el movimiento de forma autónoma.",
    incorrectas: [
      "Saber el resultado exacto en metros de su lanzamiento sin necesidad de medirlo.",
      "Ignorar las instrucciones del profesor para desarrollar un estilo propio."
    ]
  },
  {
    enunciado: "Las habilidades de 'Empuje y Tracción' se fundamentan biomecánicamente en:",
    correcta: "La aplicación de fuerzas opuestas (alejar o acercar) respecto al centro de gravedad del sujeto o de un objeto.",
    incorrectas: [
      "El movimiento rítmico de los párpados ante un estímulo luminoso.",
      "La capacidad de digerir alimentos ricos en fibra antes del ejercicio."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Habilidades Genéricas' en la transición de las básicas a las específicas?",
    correcta: "Patrones que combinan varias habilidades básicas con un fin táctico común (ej. finta, interceptación, bote).",
    incorrectas: [
      "Movimientos que no tienen ninguna utilidad en el deporte reglado.",
      "La capacidad de todos los seres humanos para respirar y dormir."
    ]
  },
  {
    enunciado: "La 'Coordinación Fina' en habilidades manipulativas se caracteriza por:",
    correcta: "La participación de grupos musculares pequeños y una alta precisión en la interacción óculo-manual.",
    incorrectas: [
      "El uso de toda la masa muscular del cuerpo para levantar un peso muerto.",
      "La realización de sprints de 100 metros en pista de atletismo."
    ]
  },
  {
    enunciado: "El 'Equilibrio Postural' en bipedestación es un proceso dinámico de oscilación constante llamado:",
    correcta: "Balanceo postural o sway.",
    incorrectas: [
      "Síncope de recuperación inmediata.",
      "Catarsis motriz por agotamiento."
    ]
  },
  {
    enunciado: "En un salto vertical (HMB), el uso de los brazos (balanceo) contribuye a:",
    correcta: "Aumentar la fuerza de reacción contra el suelo y elevar el centro de gravedad antes del despegue.",
    incorrectas: [
      "Reducir el peso del cuerpo para que la gravedad no actúe sobre él.",
      "Mejorar la visión del techo del pabellón deportivo."
    ]
  },
  {
    enunciado: "Las habilidades motrices básicas se dividen en abiertas y cerradas. Una habilidad cerrada es aquella que:",
    correcta: "Se realiza en un entorno estable y predecible (ej. lanzamiento de tiro libre sin oposición).",
    incorrectas: [
      "Se ejecuta en medio de un partido con defensores y compañeros moviéndose.",
      "No permite que el alumno abra los ojos durante su ejecución."
    ]
  },
  {
    enunciado: "La 'Lateralidad' influye en las HMB determinando:",
    correcta: "La preferencia y eficiencia en el uso de un lado del cuerpo para acciones de fuerza o precisión.",
    incorrectas: [
      "El color del uniforme que el alumno debe elegir.",
      "La nota final del trimestre de forma automática."
    ]
  },
  {
    enunciado: "El 'Giro Longitudinal' es aquel que se realiza sobre un eje que:",
    correcta: "Atraviesa el cuerpo de la cabeza a los pies.",
    incorrectas: [
      "Atraviesa el cuerpo de derecha a izquierda por la cadera.",
      "Atraviesa el cuerpo de delante hacia atrás por el ombligo."
    ]
  },
  {
    enunciado: "En la LOMLOE, la evaluación de las HMB en Secundaria debe realizarse:",
    correcta: "Observando la eficacia, la adaptación al contexto y la fluidez en situaciones reales de práctica.",
    incorrectas: [
      "Mediante un único examen tipo test de 100 preguntas sin mover el cuerpo.",
      "Contando exclusivamente el número de fallos que comete el alumno."
    ]
  },
  {
    enunciado: "La habilidad de 'Bote' requiere una coordinación óculo-manual que integra:",
    correcta: "La fuerza de empuje, el ritmo temporal y el control táctil del móvil sin pérdida de visión del entorno.",
    incorrectas: [
      "La capacidad de saltar sobre una pierna mientras se canta una canción.",
      "La visión infrarroja para detectar el calor del balón."
    ]
  },
  {
    enunciado: "Un factor que limita la adquisición de HMB en adolescentes con sobrepeso es:",
    correcta: "La relación desfavorable entre la fuerza relativa y la masa corporal a desplazar (inercia).",
    incorrectas: [
      "La falta absoluta de huesos en las extremidades inferiores.",
      "El exceso de memoria a corto plazo que interfiere en el movimiento."
    ]
  },
  {
    enunciado: "Las 'Caídas' se trabajan como HMB para:",
    correcta: "Aprender a disipar la energía del impacto y prevenir lesiones ante desequilibrios.",
    incorrectas: [
      "Hacer que el alumno se rinda ante cualquier dificultad física.",
      "Aumentar el número de hematomas para endurecer la piel."
    ]
  },
  {
    enunciado: "La habilidad de 'Deslizamiento' (HMB no habitual) es la base para deportes como:",
    correcta: "El patinaje, el esquí o el surf.",
    incorrectas: [
      "El ajedrez y las damas.",
      "El levantamiento de pesas olímpico."
    ]
  },
  {
    enunciado: "En el análisis del lanzamiento por encima del hombro, la 'rotación de tronco' sirve para:",
    correcta: "Aumentar el recorrido de aplicación de la fuerza y generar mayor velocidad angular.",
    incorrectas: [
      "Reducir la visión del objetivo para lanzar por instinto.",
      "Evitar que el alumno respire durante la fase de armado."
    ]
  },
  {
    enunciado: "¿Qué es el 'Tiempo de Reacción' en una habilidad de interceptación?",
    correcta: "El tiempo que transcurre desde que el alumno percibe la trayectoria del móvil hasta que inicia el movimiento de captura.",
    incorrectas: [
      "El tiempo que tarda el móvil en pincharse al chocar con el suelo.",
      "La duración total de la clase de Educación Física."
    ]
  },
  {
    enunciado: "La 'Anticipación Motriz' en las HMB permite:",
    correcta: "Iniciar la respuesta motora basándose en la predicción de la trayectoria del objeto o adversario.",
    incorrectas: [
      "Llegar al gimnasio antes que el profesor todos los días.",
      "Saber la nota del examen antes de realizarlo."
    ]
  },
  {
    enunciado: "La habilidad de 'Finta' se define como:",
    correcta: "Un engaño motor basado en una falsa intención para superar un obstáculo o adversario.",
    incorrectas: [
      "Un desmayo fingido para no hacer el ejercicio.",
      "Un tipo de calzado especial para correr en barro."
    ]
  },
  {
    enunciado: "La 'Estructuración Espacial' es necesaria para las HMB porque permite:",
    correcta: "Calcular distancias, trayectorias y posiciones relativas de objetos y personas.",
    incorrectas: [
      "Aprender geografía política de forma paralela.",
      "Hacer dibujos técnicos perfectos en el cuaderno."
    ]
  },
  {
    enunciado: "En secundaria, el trabajo de HMB debe ser 'inclusivo', lo que significa:",
    correcta: "Adaptar las tareas para que todo el alumnado, independientemente de su nivel, pueda progresar.",
    incorrectas: [
      "Que solo los mejores alumnos puedan usar el material nuevo.",
      "Que todos los alumnos deben hacer exactamente lo mismo al mismo tiempo sin variaciones."
    ]
  },
  {
    enunciado: "La 'Fluidez' de una habilidad motriz básica indica:",
    correcta: "La ausencia de interrupciones o movimientos innecesarios en la secuencia motora.",
    incorrectas: [
      "La cantidad de agua que el alumno bebe durante la práctica.",
      "La capacidad del alumno para hablar mientras corre."
    ]
  },
  {
    enunciado: "El fin último de las HMB en el currículo de Secundaria es:",
    correcta: "Proporcionar una base sólida para el disfrute de la cultura físico-deportiva y la salud.",
    incorrectas: [
      "Formar soldados capaces de superar pistas de obstáculos militares.",
      "Asegurar que nadie suspenda la asignatura de Educación Física."
    ]
  }
];