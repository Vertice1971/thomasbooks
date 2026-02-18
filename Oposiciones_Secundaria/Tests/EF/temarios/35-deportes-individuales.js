// -35-entrenamiento-deportivo-escolar.js

var PREGUNTAS = [
  {
    enunciado: "El entrenamiento en la edad escolar debe regirse por el principio de 'Multilateralidad'. ¿En qué consiste técnicamente?",
    correcta: "En el desarrollo de un amplio repertorio de habilidades y capacidades físicas de base antes de la especialización, para evitar estancamientos precoces.",
    incorrectas: [
      "En entrenar únicamente el lado dominante del cuerpo para maximizar el rendimiento técnico en el menor tiempo posible.",
      "En realizar sesiones de entrenamiento de más de 4 horas diarias combinando todos los deportes olímpicos."
    ]
  },
  {
    enunciado: "¿Cuál es el riesgo biológico principal de la 'Especialización Deportiva Prematura' en adolescentes?",
    correcta: "El aumento del riesgo de lesiones por sobreuso, desequilibrios musculares crónicos y el agotamiento psicológico (burnout).",
    incorrectas: [
      "Un aumento excesivo de la estatura que impide la coordinación en deportes de equipo.",
      "La transformación de las fibras musculares de tipo I en tejido adiposo por falta de variabilidad."
    ]
  },
  {
    enunciado: "El concepto de 'Fases Sensibles' de Martin (1982) se refiere a:",
    correcta: "Periodos ontogénicos de especial susceptibilidad biológica en los que el organismo responde con mayores adaptaciones a estímulos específicos.",
    incorrectas: [
      "Las etapas del calendario escolar en las que el alumno está más predispuesto a estudiar teoría deportiva.",
      "Los momentos del día en los que la temperatura corporal es óptima para el entrenamiento de flexibilidad activa."
    ]
  },
  {
    enunciado: "En la planificación del entrenamiento escolar, la 'Carga Biológica' debe priorizar:",
    correcta: "El volumen (cantidad de práctica variada) sobre la intensidad (magnitud del esfuerzo cercano al máximo).",
    incorrectas: [
      "La intensidad máxima para asegurar la secreción masiva de testosterona desde los 8 años.",
      "La densidad de carga, eliminando los periodos de descanso para mejorar la resiliencia mental."
    ]
  },
  {
    enunciado: "Según la LOMLOE, el entrenamiento en el marco escolar debe estar supeditado a:",
    correcta: "La formación integral del individuo, el fomento de la salud y la adquisición de valores sociales y éticos.",
    incorrectas: [
      "La obtención de resultados competitivos que prestigien al centro educativo a nivel nacional.",
      "La detección exclusiva de talentos para su transferencia inmediata a clubes de élite."
    ]
  },
  {
    enunciado: "El 'Pico de Velocidad de Crecimiento' (PHV) es un marcador biológico crucial porque indica:",
    correcta: "El momento de máximo crecimiento longitudinal, tras el cual se abre la ventana óptima para el entrenamiento de la fuerza hipertrófica.",
    incorrectas: [
      "La velocidad máxima que un alumno puede alcanzar en un sprint de 50 metros lisos.",
      "El punto en el que el sistema nervioso deja de aprender nuevas habilidades motrices complejas."
    ]
  },
  {
    enunciado: "En el entrenamiento de la resistencia en niños y prepúberes, se debe favorecer la vía aeróbica debido a:",
    correcta: "La menor actividad de enzimas glucolíticas como la PFK y una menor capacidad de tamponamiento del lactato.",
    incorrectas: [
      "La ausencia total de glucógeno muscular en los sujetos menores de 14 años.",
      "Que el corazón de los niños no puede latir a más de 120 pulsaciones por minuto."
    ]
  },
  {
    enunciado: "La 'Edad Cronológica' a menudo no coincide con la 'Edad Biológica'. En el entrenamiento escolar, esto requiere:",
    correcta: "Individualizar las cargas según el estado de maduración (estadios de Tanner) y no solo por el año de nacimiento.",
    incorrectas: [
      "Agrupar a los alumnos por orden alfabético para facilitar la gestión del material.",
      "Aplicar la misma carga de entrenamiento a todos los alumnos de una misma clase de Secundaria."
    ]
  },
  {
    enunciado: "El entrenamiento de la fuerza en edades escolares (pre-pubertad) debe centrarse en:",
    correcta: "Adaptaciones neurales (coordinación y reclutamiento) mediante ejercicios de autocarga y técnica, más que en la hipertrofia.",
    incorrectas: [
      "El uso de cargas máximas (1RM) para estimular el cierre rápido de las placas de crecimiento.",
      "El aislamiento muscular en máquinas de gimnasio para evitar el movimiento de las articulaciones."
    ]
  },
  {
    enunciado: "La 'Recuperación' en el deportista escolar es más rápida que en el adulto en ciertos aspectos, pero se debe vigilar especialmente:",
    correcta: "El descanso nocturno (sueño) para permitir la regeneración tisular y la secreción de la hormona del crecimiento (GH).",
    incorrectas: [
      "La ingesta masiva de suplementos proteicos inmediatamente después de la clase de EF.",
      "La realización de sesiones de estudio intensivo durante los periodos de descanso físico."
    ]
  },
  {
    enunciado: "Un objetivo fundamental del entrenamiento de flexibilidad en Secundaria es:",
    correcta: "Compensar el acortamiento muscular derivado del rápido crecimiento óseo para prevenir patologías posturales.",
    incorrectas: [
      "Lograr que todos los alumnos realicen el 'spagat' frontal antes de finalizar el trimestre.",
      "Eliminar la necesidad de realizar calentamientos en las sesiones de fuerza."
    ]
  },
  {
    enunciado: "El modelo LTAD (Long-Term Athlete Development) propone que en la etapa 'Aprender a Entrenar' se debe:",
    correcta: "Refinar las habilidades motrices básicas y comenzar a introducir habilidades específicas de varios deportes.",
    incorrectas: [
      "Iniciar el entrenamiento de resistencia anaeróbica láctica de alta intensidad.",
      "Eliminar el componente lúdico para centrarse en la disciplina militar."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Juego Modificado' en la iniciación deportiva escolar?",
    correcta: "Permite simplificar las demandas técnicas para centrar la atención en la toma de decisiones tácticas.",
    incorrectas: [
      "Sirve para que el profesor trabaje menos, ya que los alumnos se autoorganizan sin supervisión.",
      "Es una pérdida de tiempo que retrasa la adquisición de la técnica perfecta profesional."
    ]
  },
  {
    enunciado: "La 'Sobreestulación' sensorial y motriz en niños pequeños puede provocar:",
    correcta: "Fatiga del sistema nervioso central, rechazo a la práctica deportiva y falta de creatividad motriz.",
    incorrectas: [
      "Un aumento inmediato de la inteligencia matemática y lingüística.",
      "La formación de huesos supernumerarios en las articulaciones de la muñeca."
    ]
  },
  {
    enunciado: "El entrenamiento de la velocidad en la infancia (7-11 años) debe priorizar:",
    correcta: "La velocidad de reacción y la frecuencia de movimiento (coordinación) sobre la resistencia a la velocidad.",
    incorrectas: [
      "La capacidad de mantener un sprint de 400 metros sin descenso de la zancada.",
      "El aumento de la masa muscular de los glúteos mediante pesas pesadas."
    ]
  },
  {
    enunciado: "En el marco de la LOMLOE, la 'Evaluación' del entrenamiento deportivo escolar debe ser:",
    correcta: "Cualitativa y formativa, valorando el proceso de aprendizaje y la adquisición de hábitos saludables.",
    incorrectas: [
      "Basada exclusivamente en el puesto obtenido en las competiciones intercentros.",
      "Un proceso sancionador para aquellos que no alcanzan las marcas mínimas exigidas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Síndrome de sobreentrenamiento' en escolares?",
    correcta: "Un estado de fatiga crónica y descenso del rendimiento por un desequilibrio entre la carga total (escolar y deportiva) y la recuperación.",
    incorrectas: [
      "La capacidad de un alumno para realizar 10 deportes diferentes con éxito.",
      "Una infección viral causada por compartir botellas de agua en el entrenamiento."
    ]
  },
  {
    enunciado: "La 'Transferencia motriz' es un concepto clave que justifica:",
    correcta: "La práctica de múltiples disciplinas para que los esquemas motores se enriquezcan recíprocamente.",
    incorrectas: [
      "El cambio de un alumno de un equipo a otro a mitad de temporada por motivos económicos.",
      "La copia de los ejercicios de un compañero durante el examen práctico de EF."
    ]
  },
  {
    enunciado: "El entrenamiento de la agilidad en la edad escolar requiere situaciones de:",
    correcta: "Incertidumbre y toma de decisiones, no solo repetición de circuitos de conos preestablecidos.",
    incorrectas: [
      "Repetición monótona de un solo movimiento durante 60 minutos seguidos.",
      "Inmovilidad absoluta para mejorar la concentración mental previa al salto."
    ]
  },
  {
    enunciado: "¿Cómo influye la maduración del sistema nervioso en la coordinación deportiva?",
    correcta: "La mielinización progresiva de las vías nerviosas permite una transmisión del impulso más rápida y precisa.",
    incorrectas: [
      "El sistema nervioso madura más rápido si se eliminan las grasas de la dieta del niño.",
      "Los nervios se vuelven más cortos con la edad para que el impulso tarde menos tiempo."
    ]
  },
  {
    enunciado: "El 'Entrenamiento Invisible' en la edad escolar comprende:",
    correcta: "Hábitos de nutrición, hidratación, higiene y descanso que optimizan las adaptaciones al esfuerzo.",
    incorrectas: [
      "Entrenar por la noche para que los rivales no vean los progresos del alumno.",
      "Realizar ejercicios que no requieren el movimiento de ningún músculo visible."
    ]
  },
  {
    enunciado: "La competición en el deporte escolar debe ser entendida como:",
    correcta: "Un medio pedagógico para poner a prueba lo aprendido, aprender a gestionar el éxito y el fracaso, y fomentar el respeto.",
    incorrectas: [
      "Un fin en sí mismo donde 'ganar es lo único que importa' para el currículo.",
      "Una actividad opcional que solo deben realizar aquellos que tienen talento innato."
    ]
  },
  {
    enunciado: "Un indicador de carga excesiva en el aparato locomotor del adolescente es:",
    correcta: "Dolor en las apófisis de crecimiento (entesitis) como en la enfermedad de Osgood-Schlatter.",
    incorrectas: [
      "El aumento del grosor del cabello y de la pigmentación de la piel.",
      "La aparición de un hambre voraz tras la sesión de entrenamiento."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Alfabetización Física' (Physical Literacy)?",
    correcta: "La motivación, confianza, competencia física y conocimiento para valorar y participar en la actividad física de por vida.",
    incorrectas: [
      "La capacidad de leer libros de anatomía y fisiología del ejercicio sin cometer errores.",
      "Aprender el alfabeto mientras se realiza una carrera de relevos en el patio."
    ]
  },
  {
    enunciado: "El entrenamiento de la 'Resistencia Anaeróbica Láctica' se introduce generalmente:",
    correcta: "Tras la pubertad, cuando el sistema enzimático y de tamponamiento está más desarrollado.",
    incorrectas: [
      "En la etapa de Educación Infantil para que el cuerpo se acostumbre rápido al dolor.",
      "Nunca, ya que el ácido láctico es letal para los seres humanos menores de 21 años."
    ]
  },
  {
    enunciado: "La 'Variabilidad de la práctica' en el entrenamiento escolar ayuda a:",
    correcta: "Construir esquemas motores más flexibles y adaptables a entornos cambiantes (deportes de situación).",
    incorrectas: [
      "Que el profesor no tenga que preparar la clase y pueda improvisar cada día.",
      "Confundir al alumno para que no sepa qué deporte está practicando realmente."
    ]
  },
  {
    enunciado: "El papel de los padres en el deporte escolar debe ser de:",
    correcta: "Apoyo incondicional, fomento de la autonomía y respeto a la labor del educador/entrenador.",
    incorrectas: [
      "Entrenadores secundarios desde la grada para corregir los fallos del profesor.",
      "Agentes de presión para asegurar que su hijo juegue todos los minutos del partido."
    ]
  },
  {
    enunciado: "La 'Deserción Deportiva' (drop-out) en adolescentes se asocia frecuentemente con:",
    correcta: "La excesiva presión competitiva, la falta de diversión y la dificultad para conciliar con los estudios.",
    incorrectas: [
      "Un aumento repentino de la fuerza que hace que los deportes les resulten demasiado fáciles.",
      "La obligatoriedad de ducharse después de la clase de Educación Física."
    ]
  },
  {
    enunciado: "¿Por qué es importante el entrenamiento del 'Core' en la edad escolar?",
    correcta: "Para proporcionar una base estable que proteja la columna vertebral y mejore la transferencia de fuerzas.",
    incorrectas: [
      "Para que los alumnos tengan abdominales marcados para la temporada de verano.",
      "Para reducir el tamaño de los pulmones y mejorar la aerodinámica."
    ]
  },
  {
    enunciado: "La 'Multilateralidad Orientada' es la fase en la que:",
    correcta: "Se mantiene la variedad de estímulos pero se seleccionan aquellos más afines a una familia de deportes.",
    incorrectas: [
      "El alumno entrena solo un deporte pero lo hace en diferentes países del mundo.",
      "Se prohíbe el uso de balones para centrarse solo en la carrera continua."
    ]
  },
  {
    enunciado: "El entrenamiento de la coordinación en Secundaria debe incluir:",
    correcta: "Tareas con alta demanda perceptiva, disociación segmentaria y ritmo.",
    incorrectas: [
      "Dormir en posiciones extrañas para mejorar el equilibrio inconsciente.",
      "Levantar pesas de 50 kg con una sola mano sin mover el resto del cuerpo."
    ]
  },
  {
    enunciado: "Un beneficio psicológico del entrenamiento deportivo escolar es:",
    correcta: "La mejora del autoconcepto físico, la autoestima y la resiliencia ante las dificultades.",
    incorrectas: [
      "La creencia de que se es superior a los demás por tener una marca mejor en salto.",
      "La capacidad de predecir el futuro mediante el análisis de las estadísticas de juego."
    ]
  },
  {
    enunciado: "La 'Higiene Postural' en el entrenamiento escolar implica:",
    correcta: "Enseñar la técnica correcta de levantamiento y transporte de cargas para proteger el raquis en crecimiento.",
    incorrectas: [
      "Llevar siempre la espalda totalmente rígida como si se tuviera un palo atado a ella.",
      "No sentarse nunca en el suelo del gimnasio para no ensuciar el uniforme."
    ]
  },
  {
    enunciado: "El entrenamiento aeróbico de baja intensidad favorece en los niños:",
    correcta: "La capilarización muscular y el aumento del tamaño de las mitocondrias.",
    incorrectas: [
      "La aparición prematura de vello facial en ambos sexos.",
      "La reducción del número de latidos totales que el corazón puede dar en una vida."
    ]
  },
  {
    enunciado: "En la LOMLOE, el 'Sentido de la Iniciativa' se trabaja en el deporte escolar mediante:",
    correcta: "La toma de decisiones tácticas y la capacidad de organizar sus propias actividades físicas.",
    incorrectas: [
      "Obligar a los alumnos a hacer siempre lo que dice el capitán del equipo sin rechistar.",
      "Copiar las tácticas de los equipos profesionales sin realizar ningún cambio."
    ]
  },
  {
    enunciado: "La 'Resistencia a la Fatiga' en adolescentes mejora significativamente con:",
    correcta: "Un entrenamiento aeróbico de base que incremente el volumen sistólico y la eficiencia oxidativa.",
    incorrectas: [
      "El consumo de cafeína y bebidas energéticas antes de cada clase de EF.",
      "La práctica de la apnea estática durante el tiempo de recreo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Entrenamiento Basado en el Juego' (Game-Based Training)?",
    correcta: "Un modelo donde las adaptaciones físicas se logran a través de juegos que mantienen la esencia táctica del deporte.",
    incorrectas: [
      "Jugar a videojuegos de deportes en lugar de salir al patio a practicar.",
      "Una metodología donde no hay reglas y el resultado se decide por votación popular."
    ]
  },
  {
    enunciado: "Un factor de seguridad clave en el uso de pesas con adolescentes es:",
    correcta: "La supervisión constante del profesor y el énfasis absoluto en la técnica sobre la carga.",
    incorrectas: [
      "Que los alumnos compitan entre ellos para ver quién levanta más peso el primer día.",
      "Utilizar solo pesas de plástico de menos de 100 gramos para no cansar al alumno."
    ]
  },
  {
    enunciado: "La 'Inclusión' en el entrenamiento escolar se garantiza mediante:",
    correcta: "La adaptación de materiales, reglas y espacios para que todo el alumnado participe con éxito.",
    incorrectas: [
      "Excluir de la práctica a aquellos que no tienen el nivel físico adecuado.",
      "Hacer que los alumnos con discapacidad solo miren cómo juegan los demás."
    ]
  },
  {
    enunciado: "El objetivo final de la Educación Física en relación con el entrenamiento es:",
    correcta: "Crear ciudadanos competentes, críticos y autónomos que integren la actividad física en su estilo de vida.",
    incorrectas: [
      "Producir una generación de campeones del mundo en todas las disciplinas.",
      "Que todos los alumnos sepan de memoria la tabla periódica de los elementos."
    ]
  }
];