// 55-aprendizaje-motor-programacion-y-evaluacion.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por 'Distribución de la Práctica Espaciada' en la programación del aprendizaje motor?",
    correcta: "Aquella que establece periodos de descanso iguales o superiores al tiempo de práctica, favoreciendo la consolidación sin fatiga excesiva.",
    incorrectas: [
      "La que concentra todo el volumen de trabajo en una sola sesión semanal para maximizar la supercompensación.",
      "Aquella que alterna diferentes habilidades motrices en una misma serie para aumentar la interferencia contextual."
    ]
  },
  {
    enunciado: "En el diseño de tareas, la 'Práctica Global Polarizada' consiste en:",
    correcta: "Realizar la tarea completa pero centrando la atención del alumno en un aspecto técnico o táctico específico.",
    incorrectas: [
      "Dividir la habilidad en partes aisladas y entrenarlas por separado hasta su unión final.",
      "Ejecutar el movimiento a una intensidad máxima independientemente de la calidad de la técnica."
    ]
  },
  {
    enunciado: "¿Cuál es la principal ventaja de la 'Práctica Variable' sobre la 'Práctica Constante' para la retención a largo plazo?",
    correcta: "Fomenta la construcción de esquemas motores más robustos y adaptables a condiciones ambientales no previstas.",
    incorrectas: [
      "Permite una estabilización más rápida de la huella perceptiva al reducir la variabilidad del error.",
      "Reduce la carga cognitiva del alumno al simplificar los parámetros de fuerza y tiempo de la tarea."
    ]
  },
  {
    enunciado: "El 'Feedback Terminal Demorado' se define como la información proporcionada:",
    correcta: "Un tiempo después de finalizar la ejecución, permitiendo al alumno procesar primero su propio feedback intrínseco.",
    incorrectas: [
      "Durante la realización del movimiento para corregir la trayectoria de forma inmediata.",
      "Solo al final de la unidad didáctica tras analizar todas las grabaciones de video."
    ]
  },
  {
    enunciado: "En la evaluación del aprendizaje motor, una 'Prueba de Transferencia' busca medir:",
    correcta: "La capacidad del alumno para aplicar la habilidad aprendida en una tarea o entorno diferente al de práctica.",
    incorrectas: [
      "El nivel de fatiga neuromuscular alcanzado tras una sesión de alta intensidad.",
      "La velocidad máxima de desplazamiento en una prueba estandarizada de 50 metros."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la 'Instrucción mediante Descubrimiento Guiado'?",
    correcta: "El docente plantea retos o preguntas que orientan al alumno hacia la solución motriz óptima sin dársela directamente.",
    incorrectas: [
      "La ausencia total de intervención del profesor, dejando que el alumno actúe por ensayo y error sin objetivos.",
      "La demostración visual de un modelo experto seguida de la repetición mimética por parte del alumno."
    ]
  },
  {
    enunciado: "La 'Práctica Mental' o visualización es más efectiva cuando:",
    correcta: "Se combina con la práctica física y el alumno ya tiene una base cognitiva de la tarea.",
    incorrectas: [
      "Se utiliza como sustituto total de la práctica física en alumnos principiantes.",
      "Se realiza a una velocidad superior a la ejecución real para acelerar los procesos neuronales."
    ]
  },
  {
    enunciado: "En la programación, ¿qué es la 'Densidad de la Práctica'?",
    correcta: "La relación entre el tiempo de esfuerzo efectivo y los periodos de recuperación dentro de una sesión.",
    incorrectas: [
      "La cantidad de alumnos que hay por cada metro cuadrado del gimnasio o pista polideportiva.",
      "El peso total de los implementos utilizados dividido por el número de repeticiones realizadas."
    ]
  },
  {
    enunciado: "Un 'Test de Retención' se diferencia de una evaluación convencional en que:",
    correcta: "Se realiza tras un intervalo de tiempo sin práctica para verificar si el cambio en la conducta es permanente.",
    incorrectas: [
      "Mide la capacidad de fuerza isométrica mantenida durante más de un minuto.",
      "Se centra exclusivamente en la valoración estética de la forma del movimiento."
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el 'Feedback Concurrente' (durante la acción) en el aprendizaje?",
    correcta: "Mejora el rendimiento inmediato pero puede generar dependencia, dificultando el aprendizaje autónomo.",
    incorrectas: [
      "Es el método más eficaz para asegurar la transferencia a largo plazo en cualquier tipo de tarea.",
      "Impide la contracción de los músculos antagonistas, facilitando una técnica más fluida."
    ]
  },
  {
    enunciado: "La 'Evaluación Formativa' en el aprendizaje motor implica:",
    correcta: "Proporcionar información continua sobre el proceso para que el alumno pueda autorregular su aprendizaje.",
    incorrectas: [
      "Realizar un único examen final que determine la calificación definitiva del trimestre.",
      "Comparar los resultados del alumno con las tablas de rendimiento atlético nacional."
    ]
  },
  {
    enunciado: "En tareas de alta organización y baja complejidad, se recomienda un método de enseñanza:",
    correcta: "Global, ya que las partes están muy interrelacionadas y separarlas alteraría la dinámica del movimiento.",
    incorrectas: [
      "Analítico secuencial, descomponiendo el gesto en el mayor número de fases posible.",
      "De repetición pasiva, donde el profesor mueve los segmentos corporales del alumno."
    ]
  },
  {
    enunciado: "¿Qué es el 'Conocimiento de la Ejecución' (CE)?",
    correcta: "Feedback aumentado referido a las características del movimiento realizado (cinemática o coordinación).",
    incorrectas: [
      "La información sobre si se ha logrado o no el objetivo externo (puntos, tiempo, distancia).",
      "La capacidad del alumno para explicar verbalmente las leyes de Newton aplicadas al deporte."
    ]
  },
  {
    enunciado: "La 'Frecuencia de Feedback' reducida (no darlo en cada ensayo) favorece:",
    correcta: "El desarrollo de procesos de autodetección y corrección de errores por parte del alumno.",
    incorrectas: [
      "Un aumento del estrés del alumno por la incertidumbre sobre su rendimiento.",
      "La fijación de errores técnicos graves al no ser corregidos de forma inmediata."
    ]
  },
  {
    enunciado: "En la LOMLOE, el uso de rúbricas en el aprendizaje motor permite:",
    correcta: "Objetivar criterios de calidad del movimiento y hacer al alumno partícipe de su evaluación.",
    incorrectas: [
      "Clasificar al alumnado por su talento innato para las disciplinas olímpicas.",
      "Eliminar la necesidad de observar la ejecución práctica del alumno en el gimnasio."
    ]
  },
  {
    enunciado: "La 'Práctica Aleatoria' (Random Practice) se caracteriza por:",
    correcta: "Alternar diferentes tareas de forma impredecible, aumentando la carga cognitiva y la retención.",
    incorrectas: [
      "Permitir que el alumno elija libremente qué ejercicio hacer sin ningún orden ni concierto.",
      "Realizar la misma tarea en el mismo lugar y a la misma hora durante todas las sesiones."
    ]
  },
  {
    enunciado: "Un indicador de aprendizaje motor consolidado es:",
    correcta: "La economía de esfuerzo, manifestada por una menor co-contracción muscular y un menor gasto metabólico.",
    incorrectas: [
      "El aumento de la frecuencia cardíaca máxima durante la ejecución de la tarea técnica.",
      "La necesidad de una mayor concentración consciente en cada fase del movimiento."
    ]
  },
  {
    enunciado: "La 'Instrucción Directa' es más apropiada cuando:",
    correcta: "Existe un riesgo para la seguridad o la tarea tiene una solución técnica muy específica y compleja.",
    incorrectas: [
      "Se busca fomentar la creatividad y la exploración de soluciones variadas por el alumno.",
      "La tarea es de carácter recreativo y no requiere una ejecución técnica precisa."
    ]
  },
  {
    enunciado: "¿Qué es el 'Feedback en Banda' (Bandwidth feedback)?",
    correcta: "Solo se proporciona información cuando el error supera un margen de tolerancia previamente establecido.",
    incorrectas: [
      "Información que se transmite a través de dispositivos electrónicos inalámbricos de alta velocidad.",
      "Feedback que se da exclusivamente a los alumnos que están en los extremos del nivel de la clase."
    ]
  },
  {
    enunciado: "La 'Transferencia Proactiva Positiva' se facilita didácticamente mediante:",
    correcta: "El diseño de tareas que compartan una lógica interna o principios de acción con aprendizajes previos.",
    incorrectas: [
      "La práctica de habilidades totalmente opuestas para evitar cualquier tipo de confusión técnica.",
      "El aumento del tiempo de descanso entre sesiones para olvidar los vicios del pasado."
    ]
  }
];