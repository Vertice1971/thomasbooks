// 54-aprendizaje-motor-fases-y-transferencia.js

var PREGUNTAS = [
  {
    enunciado: "En la fase cognitiva del aprendizaje motor, ¿cuál es el mecanismo neuropsicológico predominante?",
    correcta: "La creación de un mapa cognitivo de la tarea mediante el procesamiento de información exteroceptiva y la memoria de trabajo.",
    incorrectas: [
      "La automatización de las sinergias musculares mediante el ajuste fino de los núcleos basales y el cerebelo.",
      "La reducción de la variabilidad del error a través de la optimización de los bucles de retroalimentación propioceptiva."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la 'Fase Asociativa' en cuanto a la gestión del feedback?",
    correcta: "El alumno comienza a sustituir el feedback aumentado (externo) por el feedback intrínseco para detectar discrepancias.",
    incorrectas: [
      "La dependencia absoluta del feedback verbal del docente para poder iniciar la secuencia motriz.",
      "La eliminación de cualquier rastro sensorial periférico para centrarse en la ejecución puramente autónoma."
    ]
  },
  {
    enunciado: "La 'Transferencia Negativa' ocurre cuando:",
    correcta: "Los patrones de coordinación de una habilidad previa interfieren o entran en conflicto con la nueva estructura motriz requerida.",
    incorrectas: [
      "El desuso prolongado de una capacidad física provoca una involución en la técnica de ejecución de un gesto.",
      "La fatiga metabólica acumulada impide la expresión del aprendizaje consolidado durante una sesión de práctica."
    ]
  },
  {
    enunciado: "En la fase de autonomía, ¿cómo se ve afectado el foco atencional del ejecutante?",
    correcta: "Se libera carga atencional de los detalles técnicos, permitiendo centrarse en factores tácticos o ambientales externos.",
    incorrectas: [
      "Se intensifica el foco interno para asegurar que cada contracción muscular siga la secuencia temporal exacta.",
      "Se produce una saturación de la memoria sensorial que obliga a reducir la velocidad de ejecución para mantener la eficacia."
    ]
  },
  {
    enunciado: "El concepto de 'Elementos Idénticos' de Thorndike explica la transferencia como:",
    correcta: "La correspondencia directa entre los componentes específicos, estímulos y respuestas de dos tareas distintas.",
    incorrectas: [
      "La capacidad del sistema nervioso para generalizar principios tácticos abstractos de un deporte a otro.",
      "El proceso de maduración biológica que iguala las capacidades motrices de sujetos con la misma edad cronológica."
    ]
  },
  {
    enunciado: "¿Qué define técnicamente a la 'Transferencia Bilateral' o asimetría del aprendizaje?",
    correcta: "La mejora en el rendimiento de un miembro no entrenado tras la práctica sistemática con el miembro contralateral.",
    incorrectas: [
      "La capacidad de realizar dos tareas motrices diferentes de forma simultánea con ambos brazos.",
      "El equilibrio de fuerzas entre los grupos musculares agonistas y antagonistas de una misma articulación."
    ]
  },
  {
    enunciado: "En el diseño de tareas, la 'Práctica Variable' es superior a la 'Constante' en la fase asociativa para favorecer:",
    correcta: "La flexibilidad del esquema motor y la capacidad de generalización ante condiciones ambientales cambiantes.",
    incorrectas: [
      "La fijación rígida del programa motor para minimizar cualquier desviación cinemática en el gesto.",
      "La recuperación del sistema ATP-PC mediante intervalos de descanso condicionados por la complejidad de la tarea."
    ]
  },
  {
    enunciado: "¿Qué es la 'Transferencia Retroactiva'?",
    correcta: "La influencia (positiva o negativa) que el aprendizaje de una nueva habilidad ejerce sobre una habilidad aprendida previamente.",
    incorrectas: [
      "La capacidad de recordar un gesto técnico aprendido en la infancia tras un periodo de inactividad total.",
      "El ajuste del movimiento en tiempo real mediante la comparación del rastro perceptivo con el rastro de memoria."
    ]
  },
  {
    enunciado: "En la teoría de los sistemas dinámicos, el paso de una fase a otra del aprendizaje se explica como:",
    correcta: "Un cambio cualitativo en el patrón de coordinación que emerge al alcanzar un valor crítico en un parámetro de control.",
    incorrectas: [
      "La acumulación cuantitativa de repeticiones que fortalece el rastro de memoria en la corteza prefrontal.",
      "La eliminación progresiva de los grados de libertad mediante el bloqueo articular consciente."
    ]
  },
  {
    enunciado: "La 'Huella Perceptiva' en el modelo de Adams se consolida principalmente mediante:",
    correcta: "La repetición del movimiento correcto, que genera un patrón sensorial de referencia para la detección del error.",
    incorrectas: [
      "La observación visual de un modelo experto que activa el sistema de neuronas espejo del alumno.",
      "La verbalización de los pasos técnicos por parte del docente durante la fase de ejecución."
    ]
  },
  {
    enunciado: "La 'Transferencia de Proximidad' (Near Transfer) se refiere a:",
    correcta: "La aplicación de una habilidad a un contexto muy similar al de práctica (ej. del entrenamiento al partido).",
    incorrectas: [
      "El aprendizaje de habilidades que requieren un contacto físico estrecho entre los participantes.",
      "La mejora del rendimiento motriz en tareas que se realizan a una distancia corta del objetivo visual."
    ]
  },
  {
    enunciado: "En el aprendizaje motor, ¿qué indica una 'Curva de Meseta'?",
    correcta: "Un periodo transitorio donde no se observan mejoras en el rendimiento, debido a la reorganización de estrategias o fatiga.",
    incorrectas: [
      "El límite genético insuperable de un sujeto para mejorar una capacidad física determinada.",
      "La fase de decrecimiento del rendimiento por el proceso de envejecimiento celular precoz."
    ]
  },
  {
    enunciado: "La 'Transferencia Vertical' es aquella donde:",
    correcta: "El dominio de habilidades básicas o componentes de una tarea es requisito previo para aprender una tarea más compleja.",
    incorrectas: [
      "La práctica de saltos verticales mejora la capacidad de desplazamiento horizontal en carrera.",
      "El aprendizaje se transmite de los niveles jerárquicos superiores del cerebro a los efectores periféricos."
    ]
  },
  {
    enunciado: "¿Cuál es la función del cerebelo en la fase de autonomía del aprendizaje motor?",
    correcta: "Actuar como comparador en tiempo real para el ajuste fino de la coordinación y el control del equilibrio dinámico.",
    incorrectas: [
      "Iniciar voluntariamente el programa motor mediante la planificación de la estrategia táctica.",
      "Almacenar la información semántica relacionada con las reglas y la puntuación del juego."
    ]
  },
  {
    enunciado: "La 'Interferencia Contextual' alta (práctica aleatoria) produce:",
    correcta: "Un rendimiento inferior durante la adquisición pero una retención y transferencia superiores a largo plazo.",
    incorrectas: [
      "Una desmotivación del alumno que impide la consolidación de cualquier cambio permanente en la conducta.",
      "Un aumento del riesgo de lesión por la incapacidad del sistema neuromuscular de adaptarse a estímulos tan variados."
    ]
  },
  {
    enunciado: "En la fase de fijación/diversificación (Gentile), ¿qué objetivo persigue el alumno en tareas cerradas?",
    correcta: "Lograr la consistencia y reproducibilidad del gesto técnico minimizando la variabilidad del movimiento.",
    incorrectas: [
      "Aumentar la diversidad de respuestas posibles ante un entorno con alta incertidumbre espacial.",
      "Eliminar el uso de la visión para depender exclusivamente de la información auditiva."
    ]
  },
  {
    enunciado: "La 'Transferencia Lejana' (Far Transfer) se da cuando:",
    correcta: "El aprendizaje se aplica a una tarea o contexto significativamente diferente al original (ej. equilibrio en danza aplicado a esquí).",
    incorrectas: [
      "El sujeto es capaz de realizar una técnica de lanzamiento a una distancia superior a los 50 metros.",
      "El efecto del entrenamiento solo se observa tras un periodo de latencia de varios meses."
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la 'Variabilidad del Error' en las fases iniciales?",
    correcta: "Permite al sistema explorar el espacio de soluciones para identificar los límites de la estabilidad del patrón motor.",
    incorrectas: [
      "Debe ser suprimida de inmediato mediante instrucciones directas para evitar la fijación de vicios técnicos.",
      "Indica una falta de aptitud motriz innata que desaconseja la práctica de esa especialidad deportiva."
    ]
  },
  {
    enunciado: "El 'Sobreaprendizaje' consiste en continuar la práctica tras alcanzar el criterio de maestría con el fin de:",
    correcta: "Aumentar la resistencia a la interferencia y asegurar la retención de la habilidad a largo plazo.",
    incorrectas: [
      "Provocar una hipertrofia muscular específica que mejore la potencia relativa del gesto.",
      "Saturar los receptores sensoriales para forzar un cambio de fase hacia la autonomía."
    ]
  },
  {
    enunciado: "En la LOMLOE, la transferencia se busca activamente para fomentar:",
    correcta: "La competencia motriz transversal que permita al alumno adaptarse a diversas situaciones físicas de su vida diaria.",
    incorrectas: [
      "El paso de la educación física escolar a la competición federada de alto rendimiento de forma directa.",
      "La sustitución de los contenidos teóricos por prácticas de simulación digital en el aula."
    ]
  }
];