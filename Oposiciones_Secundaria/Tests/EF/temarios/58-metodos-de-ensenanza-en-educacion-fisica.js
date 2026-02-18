// 58-metodos-de-ensenanza-en-educacion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué define fundamentalmente a un 'Estilo de Enseñanza' según la taxonomía de Mosston y Ashworth?",
    correcta: "La estructura de toma de decisiones entre profesor y alumno en las fases de preimpacto, impacto y postimpacto.",
    incorrectas: [
      "El tipo de instalación deportiva donde se desarrolla la sesión de aprendizaje.",
      "La cantidad de material didáctico disponible por cada subgrupo de alumnos."
    ]
  },
  {
    enunciado: "La 'Estrategia de Práctica Analítica Secuencial' se caracteriza por:",
    correcta: "Descomponer la tarea en partes (A, B, C) que se aprenden por separado y se integran siguiendo su orden de ejecución.",
    incorrectas: [
      "Presentar la tarea en su totalidad, centrando la atención en un solo componente técnico.",
      "Permitir que el alumno elija el orden de las partes según su propia motivación personal."
    ]
  },
  {
    enunciado: "¿Bajo qué criterio se justifica la elección de un estilo de enseñanza de 'Producción de Divergencia'?",
    correcta: "Cuando la tarea es abierta y requiere la búsqueda de múltiples respuestas motrices válidas y originales.",
    incorrectas: [
      "Cuando existe un riesgo físico elevado y se requiere un control estricto de la seguridad.",
      "Cuando el objetivo es la automatización mecánica de un gesto técnico cerrado y estable."
    ]
  },
  {
    enunciado: "En los estilos que fomentan la 'Socialización', el objetivo primordial es:",
    correcta: "La interacción entre iguales, el trabajo cooperativo y la asunción de roles dentro del grupo.",
    incorrectas: [
      "El desarrollo máximo de la fuerza explosiva mediante el entrenamiento individualizado.",
      "La competencia directa para determinar quién es el alumno más hábil de la clase."
    ]
  },
  {
    enunciado: "La técnica de enseñanza por 'Instrucción Directa' es biomecánicamente más eficaz para:",
    correcta: "La transmisión de modelos técnicos complejos donde el error puede comprometer la eficacia o la salud.",
    incorrectas: [
      "Fomentar la creatividad expresiva en actividades de danza contemporánea.",
      "La resolución autónoma de problemas tácticos en deportes de invasión."
    ]
  },
  {
    enunciado: "Según Delgado Noguera, los estilos de enseñanza se clasifican en familias. ¿A cuál pertenecen los 'Grupos Reducidos'?",
    correcta: "Estilos que fomentan la participación del alumnado.",
    incorrectas: [
      "Estilos tradicionales de mando directo y modificación.",
      "Estilos cognitivos que buscan la implicación del pensamiento."
    ]
  },
  {
    enunciado: "¿Qué factor determina la 'Complejidad de una Tarea' de aprendizaje motor?",
    correcta: "El número de mecanismos (perceptivo, decisional y ejecutor) y sus interacciones necesarias para el éxito.",
    incorrectas: [
      "El cansancio acumulado tras realizar diez repeticiones a máxima intensidad.",
      "El precio del implemento deportivo necesario para realizar la acción."
    ]
  },
  {
    enunciado: "En un entorno con 'Incertidumbre' (espacial o humana), el método de enseñanza más adecuado suele ser:",
    correcta: "Aquel que favorece la implicación cognitiva y la toma de decisiones tácticas.",
    incorrectas: [
      "La repetición analítica pura del gesto técnico sin presencia de adversarios.",
      "El mando directo donde el profesor dicta cada paso a seguir mediante el silbato."
    ]
  },
  {
    enunciado: "La 'Estrategia Global con Polarización de la Atención' consiste en:",
    correcta: "Ejecutar la tarea completa solicitando al alumno que focalice su atención en un aspecto concreto.",
    incorrectas: [
      "Realizar la tarea a cámara lenta para observar todos los errores simultáneamente.",
      "Dividir la clase en dos grupos según su nivel de motivación hacia la tarea."
    ]
  },
  {
    enunciado: "¿Qué define al estilo de 'Microenseñanza'?",
    correcta: "El profesor transmite la información a un grupo de alumnos 'líderes' que, a su vez, enseñan a sus subgrupos.",
    incorrectas: [
      "El uso de microscopios para analizar la estructura de las fibras musculares en el aula.",
      "Realizar sesiones de Educación Física de muy corta duración (menos de cinco minutos)."
    ]
  },
  {
    enunciado: "La 'Asignación de Tareas' se diferencia del 'Mando Directo' en que el alumno:",
    correcta: "Decide el inicio, el final y el ritmo de ejecución de la tarea propuesta por el docente.",
    incorrectas: [
      "Elige libremente qué contenido quiere trabajar sin ninguna guía del profesor.",
      "Evalúa el rendimiento de sus compañeros utilizando una rúbrica de observación."
    ]
  },
  {
    enunciado: "El estilo de 'Autoevaluación' tiene como intención educativa:",
    correcta: "Desarrollar la capacidad del alumno para analizar su propio desempeño basándose en criterios objetivos.",
    incorrectas: [
      "Permitir que el alumno se ponga la nota final que desee sin supervisión técnica.",
      "Eliminar el papel del profesor como observador de la práctica motriz."
    ]
  },
  {
    enunciado: "¿Bajo qué premisa se seleccionan los estilos de 'Inclusión' (Nivel E de Mosston)?",
    correcta: "Permitir que cada alumno elija un nivel de dificultad dentro de la misma tarea para asegurar el éxito.",
    incorrectas: [
      "Separar a los alumnos con dificultades para que realicen tareas totalmente diferentes.",
      "Hacer que todos los alumnos realicen el mismo reto al mismo tiempo bajo presión cronometrada."
    ]
  },
  {
    enunciado: "Un estilo 'Creativo' se caracteriza por:",
    correcta: "La libertad del alumno para crear sus propias metas y problemas motrices.",
    incorrectas: [
      "Seguir al pie de la letra las instrucciones de un manual de entrenamiento profesional.",
      "Copiar la coreografía que el profesor ha diseñado previamente punto por punto."
    ]
  },
  {
    enunciado: "La técnica de 'Indagación' es fundamental para trabajar:",
    correcta: "La inteligencia táctica y la autonomía en la resolución de situaciones de juego.",
    incorrectas: [
      "La fuerza máxima de los miembros superiores mediante ejercicios de tracción.",
      "La resistencia aeróbica en esfuerzos de larga duración y ritmo constante."
    ]
  },
  {
    enunciado: "En la fase de 'Preimpacto', el profesor toma decisiones sobre:",
    correcta: "Los objetivos, el contenido, la organización, el estilo y los criterios de evaluación.",
    incorrectas: [
      "La corrección inmediata de los errores durante la ejecución de los alumnos.",
      "La calificación final que se entregará a los padres al terminar el trimestre."
    ]
  },
  {
    enunciado: "La 'Estrategia Analítica Progresiva' implica:",
    correcta: "Aprender A, luego B, unir A+B, aprender C y finalmente unir A+B+C.",
    incorrectas: [
      "Realizar siempre la parte más difícil de la tarea al principio de la sesión.",
      "Mezclar partes de diferentes deportes para crear una actividad nueva."
    ]
  },
  {
    enunciado: "¿Cómo influye el 'Clima de Aula' en la elección del método?",
    correcta: "Grupos con baja cohesión o disciplina pueden requerir estilos más directivos inicialmente.",
    incorrectas: [
      "El clima de aula solo depende de la temperatura y ventilación del gimnasio.",
      "A mejor clima de aula, mayor obligatoriedad de usar el mando directo."
    ]
  },
  {
    enunciado: "El papel del alumno en los 'Estilos Individualizadores' es:",
    correcta: "Seguir un programa adaptado a sus necesidades, capacidades y ritmo de aprendizaje.",
    incorrectas: [
      "Realizar exactamente lo mismo que el resto de compañeros sin ninguna variación.",
      "Enseñar a los compañeros que tienen un nivel inferior al suyo."
    ]
  },
  {
    enunciado: "Un 'Estilo Tradicional' se justifica didácticamente cuando:",
    correcta: "Se busca una organización masiva eficiente en poco tiempo con objetivos de ejecución precisos.",
    incorrectas: [
      "El objetivo es fomentar el pensamiento crítico y la toma de decisiones del alumno.",
      "Se trabaja con grupos muy pequeños de alto rendimiento técnico."
    ]
  },
  {
    enunciado: "La 'Transferencia' del aprendizaje es mayor en estilos que fomentan:",
    correcta: "La búsqueda activa y la comprensión de los principios del movimiento.",
    incorrectas: [
      "La repetición automática de gestos sin entender su lógica interna.",
      "El seguimiento estricto de órdenes verbales mediante el uso del silbato."
    ]
  },
  {
    enunciado: "¿Qué es la 'Enseñanza por Programas Individuales'?",
    correcta: "Cada alumno recibe una ficha o programa que debe completar de forma autónoma según sus progresos.",
    incorrectas: [
      "El uso de inteligencia artificial para que el alumno no tenga que moverse del pupitre.",
      "Un examen teórico que cada alumno hace en una habitación separada."
    ]
  },
  {
    enunciado: "La 'Estrategia Global Pura' es recomendable para tareas:",
    correcta: "Simples, de baja organización o cuando la técnica es fluida y no divisible.",
    incorrectas: [
      "Extremadamente complejas y peligrosas para la integridad del alumno.",
      "Que requieren un análisis minucioso de cada fase temporal del movimiento."
    ]
  },
  {
    enunciado: "En la 'Producción de Divergencia', el profesor evalúa:",
    correcta: "La cantidad y originalidad de las respuestas motrices ante un mismo estímulo.",
    incorrectas: [
      "Si el alumno ha copiado correctamente el gesto que él mismo realizó.",
      "La velocidad con la que el alumno llega de un punto a otro del patio."
    ]
  },
  {
    enunciado: "El estilo de 'Programación Lineal' se basa en:",
    correcta: "Pequeños pasos de aprendizaje con refuerzo inmediato, siguiendo una secuencia fija.",
    incorrectas: [
      "Correr en línea recta durante 40 minutos sin cambiar de dirección.",
      "Utilizar solo materiales que tengan forma de línea o barra."
    ]
  },
  {
    enunciado: "La 'Intervención Docente' en los estilos cognitivos debe ser:",
    correcta: "Mediante feedback interrogativo y estimulación de la reflexión del alumno.",
    incorrectas: [
      "Autoritaria y basada en la corrección prescriptiva constante del error.",
      "Inexistente, ya que el alumno debe aprender solo sin ninguna ayuda."
    ]
  },
  {
    enunciado: "¿Qué define a la 'Enseñanza Basada en Tareas'?",
    correcta: "La organización del aula por estaciones o centros de interés donde se ejecutan diferentes acciones.",
    incorrectas: [
      "Hacer que los alumnos copien los reglamentos de los deportes en un cuaderno.",
      "Realizar una sola tarea masiva para todos los alumnos en fila india."
    ]
  },
  {
    enunciado: "La selección del método de enseñanza debe ser, ante todo:",
    correcta: "Ecléctica y adaptable a los objetivos, el contexto y la diversidad del alumnado.",
    incorrectas: [
      "Fija y dogmática para no confundir al alumno con diferentes formas de aprender.",
      "Basada exclusivamente en las preferencias personales y la comodidad del docente."
    ]
  },
  {
    enunciado: "En el estilo de 'Trabajo en Grupos', se busca:",
    correcta: "Dividir la clase según niveles, intereses o afinidades para optimizar la práctica.",
    incorrectas: [
      "Hacer que los alumnos peleen entre ellos para ver quién es el grupo más fuerte.",
      "Que los alumnos hablen entre ellos para no tener que realizar ejercicio físico."
    ]
  },
  {
    enunciado: "La 'Estrategia Analítica Pura' presenta la tarea:",
    correcta: "Descomponiéndola en partes y practicándolas aisladamente, dejando la síntesis para el final.",
    incorrectas: [
      "Como un todo indivisible desde el primer minuto de la sesión.",
      "Analizando solo los fallos de los alumnos más torpes de la clase."
    ]
  },
  {
    enunciado: "Los 'Criterios de Éxito' en los estilos cognitivos son:",
    correcta: "Abiertos y centrados en la resolución de la tarea planteada.",
    incorrectas: [
      "Únicamente el tiempo cronometrado o la distancia alcanzada.",
      "La perfección estética del movimiento respecto a un modelo ideal."
    ]
  },
  {
    enunciado: "El estilo de 'Enseñanza por Proyectos' fomenta:",
    correcta: "La integración de conocimientos y la resolución de un reto complejo a largo plazo.",
    incorrectas: [
      "La realización de dibujos técnicos sobre instalaciones deportivas.",
      "El aprendizaje de un deporte en una sola sesión de 50 minutos."
    ]
  },
  {
    enunciado: "La 'Modificación del Mando Directo' permite:",
    correcta: "Cierta flexibilidad en la ubicación o el ritmo, aunque el control sigue siendo del profesor.",
    incorrectas: [
      "Que el alumno dé las órdenes utilizando el silbato del profesor.",
      "Eliminar la necesidad de que el profesor esté presente en el patio."
    ]
  },
  {
    enunciado: "La 'Metacognición' se favorece con métodos que:",
    correcta: "Obligan al alumno a pensar sobre cómo ha resuelto el problema motriz.",
    incorrectas: [
      "Estimulan la repetición inconsciente de patrones de movimiento.",
      "Impiden que el alumno hable o reflexione durante la práctica."
    ]
  },
  {
    enunciado: "El uso de 'Fichas de Autocontrol' es típico de:",
    correcta: "Estilos individualizadores y de autoevaluación.",
    incorrectas: [
      "Estilos tradicionales de mando directo masivo.",
      "Estilos que buscan el vértigo y el riesgo controlado."
    ]
  },
  {
    enunciado: "La 'Seguridad' es un factor crítico que puede obligar a usar:",
    correcta: "Estilos más directivos y de instrucción prescriptiva.",
    incorrectas: [
      "Estilos de libre exploración y creatividad absoluta.",
      "Estilos donde el alumno evalúa libremente a sus compañeros."
    ]
  },
  {
    enunciado: "¿Qué es la 'Enseñanza Basada en la Recepción'?",
    correcta: "Aquella donde el alumno recibe la información ya estructurada y lista para ser reproducida.",
    incorrectas: [
      "Un tipo de juego de voleibol donde solo está permitido recibir el balón.",
      "Hacer que los alumnos trabajen en la recepción de un hotel deportivo."
    ]
  },
  {
    enunciado: "Los estilos que promueven la 'Autonomía' buscan:",
    correcta: "Que el alumno se convierta en el protagonista y gestor de su propio proceso de aprendizaje.",
    incorrectas: [
      "Que el alumno haga lo que quiera sin respetar las normas de convivencia.",
      "Eliminar la asignatura de Educación Física en favor del recreo libre."
    ]
  },
  {
    enunciado: "La 'Flexibilidad Metodológica' implica:",
    correcta: "Cambiar de estilo dentro de una misma sesión según las necesidades del momento.",
    incorrectas: [
      "Hacer ejercicios de estiramiento muscular durante toda la clase teórica.",
      "Que el profesor pueda llegar tarde a la sesión sin dar explicaciones."
    ]
  },
  {
    enunciado: "Un indicador de calidad en la aplicación de un método es:",
    correcta: "El Tiempo de Compromiso Motor (TCM) útil generado en la sesión.",
    incorrectas: [
      "El número de veces que el profesor grita durante la explicación.",
      "La belleza estética de las filas y columnas de los alumnos en el patio."
    ]
  }
];