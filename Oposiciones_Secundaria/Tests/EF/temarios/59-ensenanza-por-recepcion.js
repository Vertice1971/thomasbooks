// 59-ensenanza-por-recepcion.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el fundamento pedagógico de la enseñanza por recepción en Educación Física?",
    correcta: "El alumno recibe la información procesada y el modelo técnico a reproducir, minimizando el descubrimiento por ensayo y error.",
    incorrectas: [
      "El alumno debe investigar las leyes físicas del movimiento antes de realizar cualquier ejecución práctica.",
      "La eliminación de la figura del profesor para que el grupo se autoorganice mediante el juego libre."
    ]
  },
  {
    enunciado: "En el modelo de reproducción de modelos, el papel del profesor se define como:",
    correcta: "Suministrador de feedback prescriptivo y controlador del cumplimiento de los estándares técnicos establecidos.",
    incorrectas: [
      "Facilitador de dilemas motrices que el alumno debe resolver de forma creativa y divergente.",
      "Observador externo que delega toda la toma de decisiones en el alumnado durante la fase de impacto."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Mando Directo' tradicional dentro de este enfoque?",
    correcta: "Una organización masiva y un ritmo de ejecución impuesto externamente por el docente mediante señales acústicas o visuales.",
    incorrectas: [
      "La individualización de los objetivos de aprendizaje según el ritmo biológico de cada estudiante.",
      "El fomento de la discusión grupal sobre la eficacia táctica de los sistemas de juego."
    ]
  },
  {
    enunciado: "En la enseñanza por recepción, la 'Demostración' técnica tiene como objetivo:",
    correcta: "Proporcionar una imagen visual clara y precisa del patrón motor para facilitar su codificación en la memoria.",
    incorrectas: [
      "Confundir al alumno con gestos contradictorios para que él mismo encuentre la solución correcta.",
      "Sustituir la práctica física por la observación pasiva durante la mayor parte de la sesión."
    ]
  },
  {
    enunciado: "El aprendizaje basado en la reproducción es especialmente eficaz cuando:",
    correcta: "Se busca la seguridad del alumno en tareas de riesgo o la máxima eficiencia mecánica en gestos cerrados.",
    incorrectas: [
      "El objetivo principal es la formación de un pensamiento crítico y autónomo ante problemas sociales.",
      "Se trabaja en entornos de alta incertidumbre ambiental donde la respuesta debe ser improvisada."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Feedback Prescriptivo' en este modelo?",
    correcta: "Informar al alumno sobre la discrepancia exacta entre su ejecución y el modelo ideal, indicando la corrección específica.",
    incorrectas: [
      "Preguntar al alumno cómo se ha sentido emocionalmente durante la realización de la tarea.",
      "Elogiar cualquier tipo de movimiento sin importar si se ajusta o no a la técnica enseñada."
    ]
  },
  {
    enunciado: "En el estilo de 'Asignación de Tareas', ¿qué decisión se traslada al alumno?",
    correcta: "El ritmo individual de ejecución y el inicio/fin de las repeticiones, aunque el modelo técnico sigue siendo fijo.",
    incorrectas: [
      "La elección del contenido curricular que se va a evaluar al final del trimestre.",
      "La invención de nuevas reglas de juego que contradigan el reglamento oficial."
    ]
  },
  {
    enunciado: "La 'Práctica Bloqueada' es una estrategia común en la recepción que consiste en:",
    correcta: "Repetir una misma habilidad de forma aislada y constante hasta lograr su estabilización técnica.",
    incorrectas: [
      "Impedir que el alumno realice el ejercicio si no ha memorizado primero la teoría escrita.",
      "Alternar tres deportes diferentes en series de un minuto para aumentar la interferencia."
    ]
  },
  {
    enunciado: "¿Cuál es el riesgo principal de un uso exclusivo de la enseñanza por recepción?",
    correcta: "La escasa implicación cognitiva del alumno y la limitación de su capacidad de toma de decisiones autónoma.",
    incorrectas: [
      "El aumento desmedido de la masa muscular que impide la agilidad en los desplazamientos.",
      "La imposibilidad de evaluar el rendimiento físico de forma objetiva y cuantitativa."
    ]
  },
  {
    enunciado: "En el enfoque de reproducción, ¿cómo se gestiona la 'Organización' del grupo?",
    correcta: "Suele ser formal y geométrica (filas, semicírculos) para garantizar que todos vean el modelo y reciban la instrucción.",
    incorrectas: [
      "Se permite la dispersión libre de los alumnos por todo el espacio disponible sin control visual.",
      "Se organiza siempre por parejas de diferentes niveles para que no haya contacto con el profesor."
    ]
  },
  {
    enunciado: "La 'Microenseñanza' se considera un paso hacia la participación dentro de la reproducción porque:",
    correcta: "El alumno asume el papel de ejecutor y transmisor del modelo técnico ante sus compañeros.",
    incorrectas: [
      "El profesor utiliza cámaras de video de alta resolución para analizar células musculares.",
      "Se eliminan los objetivos de aprendizaje en favor de la diversión espontánea sin reglas."
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Memoria Motriz' en este método?",
    correcta: "Es fundamental para almacenar la 'huella sensorial' del modelo y permitir su reproducción precisa.",
    incorrectas: [
      "No tiene relevancia, ya que el alumno debe reinventar el movimiento en cada repetición.",
      "Se utiliza únicamente para recordar el nombre de los músculos en los exámenes escritos."
    ]
  },
  {
    enunciado: "En la enseñanza por recepción, el éxito se mide por:",
    correcta: "El grado de fidelidad de la ejecución del alumno respecto al modelo técnico propuesto por el docente.",
    incorrectas: [
      "La capacidad del alumno para criticar las decisiones tácticas del entrenador del equipo rival.",
      "El número de veces que el alumno es capaz de hacer reír a sus compañeros durante la práctica."
    ]
  },
  {
    enunciado: "La 'Explicación Verbal' en este enfoque debe ser:",
    correcta: "Clara, concisa y centrada en los puntos clave (focalización) para no saturar la atención del alumno.",
    incorrectas: [
      "Muy larga y llena de términos científicos complejos para demostrar el saber del profesor.",
      "Sustituida por el silencio total para que el alumno aprenda por telepatía motriz."
    ]
  },
  {
    enunciado: "El estilo de 'Enseñanza Recíproca' requiere el uso de:",
    correcta: "Fichas de observación con criterios claros que permitan al alumno evaluar la ejecución del compañero.",
    incorrectas: [
      "Un sistema de castigos para el alumno que no consiga corregir al otro de forma agresiva.",
      "Materiales autoconstruidos que no guarden ninguna relación con el modelo técnico real."
    ]
  },
  {
    enunciado: "¿Qué diferencia el 'Mando Directo' de la 'Asignación de Tareas'?",
    correcta: "En el Mando Directo el profesor marca el tiempo de cada repetición; en la Asignación el alumno gestiona su tiempo.",
    incorrectas: [
      "En la Asignación el alumno decide qué deporte practicar y en el Mando no.",
      "El Mando Directo está prohibido por la LOMLOE y la Asignación de Tareas no."
    ]
  },
  {
    enunciado: "El 'Modelado' se apoya en la teoría del aprendizaje social de Bandura, que enfatiza:",
    correcta: "La atención, retención y motivación como procesos previos a la reproducción motriz.",
    incorrectas: [
      "La importancia de que el alumno nunca vea cómo se hace el ejercicio para que no lo copie.",
      "La realización de estatuas humanas que imiten posiciones de deportes antiguos."
    ]
  },
  {
    enunciado: "En la fase de 'Postimpacto' de la enseñanza por recepción, la decisión recae sobre:",
    correcta: "Principalmente el profesor, que es quien valora la ejecución y proporciona el feedback.",
    incorrectas: [
      "El alumno, que decide de forma autónoma si el ejercicio le ha gustado o no.",
      "Los padres de los alumnos, que envían sugerencias de mejora por correo electrónico."
    ]
  },
  {
    enunciado: "Los 'Criterios de Evaluación' en este enfoque suelen ser:",
    correcta: "Cerrados, cuantitativos y basados en la estandarización del movimiento.",
    incorrectas: [
      "Abiertos, cualitativos y basados en la expresión libre de sentimientos.",
      "Inexistentes, ya que lo importante es la participación voluntaria del alumno."
    ]
  },
  {
    enunciado: "La 'Frecuencia de Feedback' en los primeros estadios de la recepción debe ser:",
    correcta: "Alta y continua para evitar la fijación de patrones motores erróneos.",
    incorrectas: [
      "Nula, para no interrumpir el flujo de pensamiento divergente del alumnado.",
      "Dada solo una vez al mes para que el alumno no se acostumbre a la voz del profesor."
    ]
  },
  {
    enunciado: "El uso de 'Ayudas Manuales' (kinestésicas) por parte del profesor es típico de:",
    correcta: "Estilos de reproducción para guiar físicamente el cuerpo del alumno hacia la posición correcta.",
    incorrectas: [
      "Estilos de descubrimiento donde el profesor no puede tocar al alumno bajo ningún concepto.",
      "Actividades de recreación libre donde el contacto físico está prohibido por el reglamento."
    ]
  },
  {
    enunciado: "¿Qué es la 'Enseñanza Programada' en el ámbito de la recepción?",
    correcta: "Un sistema de aprendizaje individualizado donde el alumno avanza por pasos lógicos tras superar el anterior.",
    incorrectas: [
      "Programar un robot para que dé la clase de Educación Física de forma automática.",
      "La obligación de seguir el calendario escolar sin realizar ningún tipo de cambio."
    ]
  },
  {
    enunciado: "La 'Sincronización' grupal es un objetivo característico de:",
    correcta: "El Mando Directo, especialmente en actividades como la gimnasia rítmica o el aeróbic.",
    incorrectas: [
      "La resolución de problemas, donde cada alumno debe ir a un ritmo diferente.",
      "El juego espontáneo en el recreo sin supervisión del docente."
    ]
  },
  {
    enunciado: "En la 'Inclusión' dentro de la recepción, el profesor ofrece:",
    correcta: "Diferentes niveles de ejecución de un mismo modelo para que cada alumno logre la reproducción según su capacidad.",
    incorrectas: [
      "La misma tarea de alta dificultad para todos, obligando a los que no llegan a mirar.",
      "La posibilidad de que cada alumno invente un deporte distinto en cada sesión."
    ]
  },
  {
    enunciado: "El 'Clima de Clase' en estilos de mando directo suele ser:",
    correcta: "De alta disciplina y control, centrado en la tarea y la eficiencia operativa.",
    incorrectas: [
      "De caos organizado donde el ruido y la risa son el principal motor de aprendizaje.",
      "De relajación total y meditación profunda sin ningún tipo de esfuerzo físico."
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Atención Selectiva' en este modelo?",
    correcta: "El profesor debe dirigirla hacia los 'detalles críticos' del modelo para que el alumno no se distraiga.",
    incorrectas: [
      "Se deja a la libre elección del alumno, quien decide qué mirar en cada momento.",
      "Se anula por completo mediante el uso de música a un volumen ensordecedor."
    ]
  },
  {
    enunciado: "La 'Transferencia' en la reproducción se busca mediante:",
    correcta: "La práctica variada de un mismo esquema motor en situaciones controladas que se asemejen a la realidad.",
    incorrectas: [
      "El cambio constante de deporte sin llegar a dominar nunca ninguno de ellos.",
      "La enseñanza de habilidades que no tengan ninguna relación entre sí."
    ]
  },
  {
    enunciado: "Un indicador de mala praxis en la enseñanza por recepción es:",
    correcta: "El exceso de tiempo de explicación verbal que reduce significativamente el compromiso motor.",
    incorrectas: [
      "La corrección de un error técnico que podría provocar una lesión en el futuro.",
      "El uso de un silbato para organizar el inicio de una carrera de velocidad."
    ]
  },
  {
    enunciado: "La 'Motivación' en este enfoque suele ser:",
    correcta: "Extrínseca, basada en la consecución del modelo y el refuerzo positivo del docente.",
    incorrectas: [
      "Inexistente, ya que el alumno siempre se aburre al no poder inventar nada.",
      "Puramente espiritual y basada en la búsqueda de la paz interior."
    ]
  },
  {
    enunciado: "En la enseñanza recíproca, el alumno observador tiene prohibido:",
    correcta: "Intervenir físicamente en la ejecución del compañero; solo debe proporcionar feedback verbal.",
    incorrectas: [
      "Mirar al compañero mientras este realiza el ejercicio de forma técnica.",
      "Hablar con el profesor para pedir aclaraciones sobre los criterios de la ficha."
    ]
  },
  {
    enunciado: "La 'Repetición' en la enseñanza por recepción es un medio para:",
    correcta: "Lograr la automatización del gesto y liberar la carga atencional consciente.",
    incorrectas: [
      "Castigar a los alumnos que han tenido un mal comportamiento durante el recreo.",
      "Aumentar el gasto de luz del pabellón al estar más tiempo encendido."
    ]
  },
  {
    enunciado: "¿Qué es el 'Rastro Perceptivo' en relación con la reproducción de modelos?",
    correcta: "La sensación interna de cómo se siente el movimiento correcto que permite su comparación futura.",
    incorrectas: [
      "La marca que deja el sudor en la colchoneta tras realizar un ejercicio de suelo.",
      "La capacidad de oler el césped recién cortado antes de un partido de fútbol."
    ]
  },
  {
    enunciado: "La 'Instrucción Directa' se fundamenta en la psicología:",
    correcta: "Conductista y del procesamiento de la información.",
    incorrectas: [
      "Gestáltica y humanista exclusivamente.",
      "Psicoanalítica y de la interpretación de los sueños."
    ]
  },
  {
    enunciado: "En los grupos reducidos, el papel del alumno 'Secretario' es:",
    correcta: "Registrar los datos de las ejecuciones de sus compañeros para su análisis posterior.",
    incorrectas: [
      "Traer el café al profesor durante la pausa de la sesión de Educación Física.",
      "Decidir quién aprueba y quién suspende la asignatura basándose en su amistad."
    ]
  },
  {
    enunciado: "La 'Calidad del Modelo' ofrecido por el profesor es crítica porque:",
    correcta: "Un modelo erróneo será reproducido por el alumno, fijando patrones técnicos deficientes.",
    incorrectas: [
      "El profesor debe ser siempre el campeón del mundo de la disciplina que enseña.",
      "Si el profesor no tiene un físico atlético, los alumnos no podrán aprender la técnica."
    ]
  },
  {
    enunciado: "La 'Evaluación de Resultados' en este enfoque se centra en:",
    correcta: "El producto final y su proximidad a la norma establecida.",
    incorrectas: [
      "La creatividad demostrada por el alumno al ignorar las órdenes del docente.",
      "El número de amigos que el alumno ha hecho durante la unidad didáctica."
    ]
  },
  {
    enunciado: "El estilo de 'Autoinstrucción' consiste en:",
    correcta: "Que el alumno se guíe a sí mismo mediante verbalizaciones de las fases de la tarea.",
    incorrectas: [
      "Que el alumno aprenda solo en su casa sin venir nunca al centro educativo.",
      "Que el alumno corrija al profesor cuando este se equivoca en la explicación."
    ]
  },
  {
    enunciado: "¿Cómo se trabaja la 'Seguridad' en este modelo?",
    correcta: "Mediante el control total de las variables del entorno y la progresión técnica rigurosa.",
    incorrectas: [
      "Dejando que los alumnos asuman riesgos extremos para que aprendan de sus heridas.",
      "Prohibiendo cualquier tipo de movimiento que suponga un esfuerzo físico real."
    ]
  },
  {
    enunciado: "La 'Eficiencia Mecánica' es un objetivo que se alcanza mediante:",
    correcta: "La eliminación de movimientos parásitos y la optimización de las cadenas cinéticas.",
    incorrectas: [
      "El uso de máquinas que muevan los brazos de los alumnos de forma automática.",
      "No realizar ningún tipo de calentamiento previo para no cansar al músculo."
    ]
  },
  {
    enunciado: "En el espectro de estilos, la enseñanza por recepción se sitúa en:",
    correcta: "El extremo donde el profesor asume la mayor parte de la toma de decisiones.",
    incorrectas: [
      "El centro, donde la responsabilidad está repartida al 50% de forma constante.",
      "El extremo donde el alumno es el único responsable de lo que sucede en clase."
    ]
  }
];