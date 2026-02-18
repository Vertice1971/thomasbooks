// -04-contenidos-de-la-educacion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "En el marco de la LOMLOE, los contenidos han evolucionado hacia el concepto de 'Saberes Básicos'. ¿Cuál es la finalidad primordial de esta reestructuración en el área de Educación Física?",
    correcta: "Facilitar la adquisición de las competencias específicas a través de situaciones de aprendizaje significativas y contextualizadas.",
    incorrectas: ["Priorizar la memorización de reglamentos deportivos por encima de la práctica motriz.", "Establecer una lista cerrada de ejercicios físicos obligatorios para todos los centros."]
  },
  {
    enunciado: "¿Qué término define actualmente el eje integrador de los contenidos, superando la fragmentación entre técnica, táctica y condición física?",
    correcta: "Competencia motriz.",
    incorrectas: ["Rendimiento deportivo.", "Acondicionamiento general."]
  },
  {
    enunciado: "La evolución histórica de los contenidos muestra un paso del 'ejercicio' a la 'tarea motriz'. ¿Qué implica este cambio desde una perspectiva cognitiva?",
    correcta: "Un aumento en el procesamiento de información, la toma de decisiones y la intencionalidad del sujeto.",
    incorrectas: ["La simplificación del movimiento para evitar la fatiga mental del alumno.", "La eliminación de los objetivos para centrarse solo en la ejecución mecánica."]
  },
  {
    enunciado: "Dentro de las corrientes que han originado los contenidos actuales, la 'Escuela Inglesa' de Thomas Arnold aportó fundamentalmente:",
    correcta: "El deporte como medio de socialización, control moral y formación del carácter.",
    incorrectas: ["El análisis biomecánico del gesto técnico mediante la fotografía.", "La gimnasia analítica basada en posiciones estáticas y correctivas."]
  },
  {
    enunciado: "¿Qué bloque de saberes básicos de la LOMLOE integra contenidos relacionados con la gestión emocional y las habilidades sociales en la práctica motriz?",
    correcta: "Sentido socioafectivo.",
    incorrectas: ["Cultura motriz.", "Vida activa y saludable."]
  },
  {
    enunciado: "La corriente de la 'Praxiología Motriz' de Pierre Parlebas clasifica los contenidos basándose en:",
    correcta: "La lógica interna de las situaciones motrices y las interacciones con el entorno y los demás.",
    incorrectas: ["El gasto calórico estimado de cada actividad física.", "La cronología histórica de la invención de cada deporte."]
  },
  {
    enunciado: "En la evolución de los contenidos de condición física, ¿qué enfoque prevalece en la normativa actual?",
    correcta: "Un enfoque orientado a la salud, la autonomía y la autogestión del bienestar físico.",
    incorrectas: ["Un enfoque higienista basado exclusivamente en la ausencia de patologías.", "Un enfoque militarista basado en la superación de marcas estandarizadas."]
  },
  {
    enunciado: "La corriente de 'Educación Física de Base' (años 70-80) puso el énfasis en contenidos de:",
    correcta: "Patrones motores básicos y capacidades perceptivo-motrices como fundamento del aprendizaje.",
    incorrectas: ["Tácticas de juego de alta competición en deportes de invasión.", "Danza clásica y ballet como base de la coordinación."]
  },
  {
    enunciado: "¿Cuál es el valor educativo primordial de los 'Juegos Modificados' como contenido curricular?",
    correcta: "La simplificación técnica que permite enfatizar la comprensión táctica y la participación inclusiva.",
    incorrectas: ["La exigencia de un equipamiento tecnológico avanzado para su desarrollo.", "El cumplimiento estricto de las reglas de las federaciones internacionales."]
  },
  {
    enunciado: "Dentro de la evolución de los contenidos expresivos, la 'Kinesfera' de Rudolf Laban es un concepto técnico para analizar:",
    correcta: "El espacio próximo o área de alcance personal que rodea el cuerpo del ejecutante.",
    incorrectas: ["La capacidad aeróbica máxima durante una coreografía.", "El peso específico de los segmentos corporales en el salto."]
  },
  {
    enunciado: "La corriente 'Psicocinética' de Jean Le Boulch introdujo contenidos orientados a:",
    correcta: "La estructuración del esquema corporal y la mejora de las funciones psicomotrices a través del movimiento.",
    incorrectas: ["La musculación estética mediante el uso de cargas externas.", "La competición reglada como único fin de la asignatura."]
  },
  {
    enunciado: "En la LOMLOE, los contenidos de 'Vida Activa y Saludable' deben tratarse de forma que el alumno:",
    correcta: "Sea capaz de planificar de forma autónoma su propia actividad física según sus necesidades y contexto.",
    incorrectas: ["Dependa exclusivamente del criterio del profesor para realizar cualquier ejercicio.", "Solo realice actividad física dentro de las horas lectivas de la asignatura."]
  },
  {
    enunciado: "¿Qué corriente histórica se caracteriza por el uso de 'movimientos construidos', analíticos y con fines ortopédicos?",
    correcta: "La Escuela Sueca.",
    incorrectas: ["La Escuela Francesa (Método Natural).", "La Escuela Austríaca."]
  },
  {
    enunciado: "El bloque de saberes 'Interacción Eficiente e Inteligente en Entornos Variables' se centra técnicamente en:",
    correcta: "La toma de decisiones y la adaptación a situaciones de incertidumbre, especialmente en el medio natural.",
    incorrectas: ["La repetición de modelos técnicos en gimnasios cerrados.", "La memorización de las leyes de la física aplicadas a la palanca."]
  },
  {
    enunciado: "La 'Pedagogía Crítica' propone que los contenidos de Educación Física deben servir para:",
    correcta: "Analizar y cuestionar los estereotipos, el sexismo y el consumismo asociados al mundo del deporte.",
    incorrectas: ["Mantener el statu quo y aceptar las normas deportivas sin reflexión alguna.", "Aumentar la productividad laboral de los futuros trabajadores."]
  },
  {
    enunciado: "¿Qué autor introdujo el concepto de 'bloques de contenidos' en la reforma española de 1990?",
    correcta: "César Coll",
    incorrectas: ["José María Cagigal", "Manuel Vizuete"]
  },
  {
    enunciado: "En la evolución de los contenidos, la corriente 'Naturalista' (Georges Hébert) defendía:",
    correcta: "El desarrollo integral mediante actividades utilitarias en contacto con la naturaleza.",
    incorrectas: ["El uso de máquinas de resistencia neumática en espacios interiores.", "La práctica de deportes electrónicos para mejorar la visión periférica."]
  },
  {
    enunciado: "El tratamiento actual de los contenidos de 'Deportes' busca evitar el 'tecnicismo' mediante:",
    correcta: "Modelos de enseñanza comprensiva o TGfU (Teaching Games for Understanding).",
    incorrectas: ["La eliminación total de la competición en el ámbito escolar.", "La instrucción directa basada exclusivamente en el mando directo."]
  },
  {
    enunciado: "¿Qué saber básico de la LOMLOE engloba las manifestaciones culturales como el juego tradicional, la danza y el deporte como fenómeno social?",
    correcta: "Cultura motriz.",
    incorrectas: ["Sentido socioafectivo.", "Vida activa y saludable."]
  },
  {
    enunciado: "La integración de las TIC en los contenidos de Educación Física permite:",
    correcta: "La monitorización de la intensidad (pulsímetros) y el análisis cualitativo del movimiento mediante video-feedback.",
    incorrectas: ["Sustituir el ejercicio físico por presentaciones teóricas en PowerPoint.", "Que el alumno no tenga que asistir al gimnasio."]
  },
  {
    enunciado: "El concepto de 'Transversalidad' en los contenidos implica que:",
    correcta: "Valores como la educación vial o la sostenibilidad deben integrarse en todas las situaciones de aprendizaje motriz.",
    incorrectas: ["La Educación Física solo debe dar contenidos que no se den en otras materias.", "El docente debe cruzar el patio de forma transversal durante las sesiones."]
  },
  {
    enunciado: "En la evolución de la Educación Física escolar, el 'Modelo de Educación Deportiva' (Siedentop) propone:",
    correcta: "Una vivencia auténtica del deporte donde los alumnos asumen roles (árbitro, entrenador, gestor) además de jugador.",
    incorrectas: ["La profesionalización de los equipos del instituto para ligas nacionales.", "La eliminación de los roles secundarios para centrarse solo en marcar goles."]
  },
  {
    enunciado: "¿Cuál es el tratamiento educativo actual de la 'Fuerza' en secundaria?",
    correcta: "Mejora del tono muscular mediante ejercicios de autocarga y técnicas correctas, priorizando la salud raquídea.",
    incorrectas: ["Entrenamiento de hipertrofia máxima para el aumento de masa muscular en adolescentes.", "Realización de tests de 1RM cada semana para evaluar el progreso."]
  },
  {
    enunciado: "La corriente 'Expresiva' de la Educación Física tiene su origen epistemológico en:",
    correcta: "La ruptura con la gimnasia rígida y la búsqueda de la comunicación a través del cuerpo (Delsarte, Dalcroze).",
    incorrectas: ["La biomecánica industrial aplicada al rendimiento de los operarios.", "El entrenamiento militar de las fuerzas especiales prusianas."]
  },
  {
    enunciado: "En la LOMLOE, los contenidos de 'Expresión Corporal' deben enfocarse hacia:",
    correcta: "La desinhibición, la creatividad motriz y la comunicación de estados internos.",
    incorrectas: ["La ejecución perfecta de pasos de danza clásica.", "La memorización de la historia del teatro griego."]
  },
  {
    enunciado: "El bloque de saberes 'Autorregulación del Aprendizaje Motriz' busca que el alumno:",
    correcta: "Reflexione sobre su propio proceso de aprendizaje y ajuste sus estrategias para mejorar.",
    incorrectas: ["Aprenda de forma automática sin necesidad de pensar.", "Siga ciegamente todas las instrucciones del docente sin preguntar."]
  },
  {
    enunciado: "La evolución de los contenidos de 'Juego' ha pasado de considerarse un simple recreo a:",
    correcta: "Un recurso metodológico y un contenido en sí mismo con alta carga de aprendizaje social y motor.",
    incorrectas: ["Una actividad prohibida por distraer de los contenidos técnicos.", "Un tiempo de descanso para que el profesor pueda corregir exámenes."]
  },
  {
    enunciado: "¿Qué caracteriza al tratamiento de los contenidos en las 'Situaciones de Aprendizaje'?",
    correcta: "La resolución de retos o problemas del mundo real mediante la integración de diversos saberes.",
    incorrectas: ["La fragmentación de la clase en ejercicios aislados de 5 minutos.", "La evaluación mediante un único examen teórico final."]
  },
  {
    enunciado: "La corriente 'Médico-Higienista' del siglo XIX influyó en los contenidos promoviendo:",
    correcta: "Ejercicios de respiración, orden y disciplina para mejorar la robustez física de la nación.",
    incorrectas: ["Juegos cooperativos para la resolución de conflictos.", "La improvisación de movimientos en entornos urbanos."]
  },
  {
    enunciado: "Dentro del contenido de 'Orientación', el uso del mapa y la brújula representa una integración de:",
    correcta: "Habilidades cognitivas y motrices en un entorno no estandarizado.",
    incorrectas: ["Contenidos puramente matemáticos sin relación con la actividad física.", "Habilidades puramente manuales de dibujo."]
  },
  {
    enunciado: "El tratamiento de la 'Postura Corporal' en secundaria debe enfocarse hacia:",
    correcta: "La concienciación de los hábitos cotidianos y el fortalecimiento de la musculatura estabilizadora (CORE).",
    incorrectas: ["La obligación de permanecer sentado rígidamente durante toda la jornada.", "El uso permanente de fajas ortopédicas durante las clases de gimnasia."]
  },
  {
    enunciado: "¿Qué autor definió la Educación Física como una 'Pedagogía de las Conductas Motrices'?",
    correcta: "Pierre Parlebas",
    incorrectas: ["Jean Piaget", "Kurt Meinel"]
  },
  {
    enunciado: "Los saberes básicos relacionados con la 'Seguridad y Prevención' incluyen:",
    correcta: "La identificación de riesgos, el calentamiento específico y los primeros auxilios básicos.",
    incorrectas: ["La prohibición de realizar cualquier actividad física que eleve las pulsaciones.", "La contratación de seguros privados para cada sesión."]
  },
  {
    enunciado: "La corriente de 'Aeróbic' y 'Fitness' introdujo contenidos de:",
    correcta: "Acondicionamiento físico rítmico orientado al mantenimiento y la estética saludable.",
    incorrectas: ["Entrenamiento de fuerza explosiva para lanzadores de peso.", "Análisis estadístico de resultados deportivos profesionales."]
  },
  {
    enunciado: "En la LOMLOE, el 'Perfil de Salida' condiciona los contenidos al exigir que estos sean:",
    correcta: "Funcionales, significativos y orientados a la formación de ciudadanos activos y críticos.",
    incorrectas: ["Exclusivamente teóricos para igualarse a otras materias.", "Idénticos para todos los países de la Unión Europea."]
  },
  {
    enunciado: "La evolución de los contenidos de 'Actividades en el Medio Natural' busca actualmente:",
    correcta: "El respeto al medio ambiente (sostenibilidad) y la gestión del riesgo personal.",
    incorrectas: ["La conquista y transformación agresiva del entorno salvaje.", "La construcción de infraestructuras permanentes en parques nacionales."]
  },
  {
    enunciado: "¿Qué se entiende por 'Contenidos Espiralados' en la programación de EF?",
    correcta: "El tratamiento recurrente de los mismos saberes con niveles crecientes de complejidad a lo largo de los cursos.",
    incorrectas: ["La realización de ejercicios de giro constante sobre el eje longitudinal.", "La enseñanza de contenidos que solo se dan una vez y no vuelven a aparecer."]
  },
  {
    enunciado: "La corriente de la 'Psicomotricidad Operativa' de Lapierre y Aucouturier enfatiza:",
    correcta: "La libertad de movimiento y el juego simbólico para el desarrollo afectivo.",
    incorrectas: ["La repetición de series de 10 repeticiones en máquinas de gimnasio.", "La disciplina militar en la formación de filas."]
  },
  {
    enunciado: "En el tratamiento de los contenidos de 'Salud', el concepto de 'Ocio Activo' implica:",
    correcta: "Desarrollar gustos y habilidades que permitan al alumno disfrutar del movimiento fuera del horario escolar.",
    incorrectas: ["Hacer ejercicio solo cuando es obligatorio por prescripción médica.", "Ver deporte por televisión como única forma de ocio."]
  },
  {
    enunciado: "¿Qué componente es clave para evaluar la adquisición de los saberes básicos según la LOMLOE?",
    correcta: "Los criterios de evaluación, que miden el grado de desarrollo de las competencias específicas.",
    incorrectas: ["El número de flexiones que el alumno es capaz de realizar.", "La asistencia puntual a clase con la ropa deportiva de la marca oficial."]
  }
];