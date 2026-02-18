// 40-deportes-colectivos-como-contenido.js

var PREGUNTAS = [
  {
    enunciado: "En la LOMLOE, ¿cuál es la intención educativa prioritaria al introducir los deportes colectivos en Secundaria?",
    correcta: "Desarrollar habilidades sociales, la cooperación y la resolución pacífica de conflictos en contextos competitivos.",
    incorrectas: [
      "Fomentar la especialización técnica en una sola modalidad para nutrir a las federaciones locales.",
      "Clasificar al alumnado por niveles de rendimiento para facilitar la creación de equipos de élite escolar."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Iniciación Deportiva Horizontal' en el currículo de Educación Física?",
    correcta: "Un enfoque que trabaja las estructuras comunes a una familia de deportes (ej. deportes de invasión) para facilitar la transferencia.",
    incorrectas: [
      "El aprendizaje de deportes que se practican exclusivamente en posición decúbito supino.",
      "La enseñanza de un solo deporte de forma aislada y profunda durante todo el ciclo escolar."
    ]
  },
  {
    enunciado: "El modelo 'Teaching Games for Understanding' (TGfU) o comprensivo, prioriza didácticamente:",
    correcta: "La táctica y la toma de decisiones mediante juegos modificados antes que la ejecución técnica aislada.",
    incorrectas: [
      "La repetición analítica de gestos técnicos sin presencia de adversarios.",
      "La memorización literal del reglamento federativo antes de iniciar la práctica motriz."
    ]
  },
  {
    enunciado: "Una adaptación inclusiva efectiva para un alumno con movilidad reducida en un deporte de invasión sería:",
    correcta: "Modificar el rol (ej. comodín ofensivo) o las reglas de espacio y tiempo para garantizar su participación significativa.",
    incorrectas: [
      "Eximirle de la práctica y asignarle la tarea de anotar los puntos en una libreta.",
      "Permitir que juegue solo si el equipo contrario accede a no marcarle."
    ]
  },
  {
    enunciado: "En la evaluación de deportes colectivos, la LOMLOE sugiere poner el foco en:",
    correcta: "El proceso de aprendizaje, la progresión táctica y la actitud colaborativa más que en el resultado final del juego.",
    incorrectas: [
      "El número de goles o canastas anotados por cada alumno individualmente.",
      "La victoria en el torneo de final de unidad como único criterio de calificación."
    ]
  },
  {
    enunciado: "Los 'Juegos Modificados' se definen didácticamente como:",
    correcta: "Actividades que simplifican las exigencias técnicas pero mantienen la esencia táctica y la lógica interna del deporte.",
    incorrectas: [
      "Juegos donde no existen reglas y los alumnos pueden actuar libremente sin supervisión.",
      "Ejercicios de calentamiento que no tienen relación con el deporte principal de la sesión."
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Alfabetización Motriz' en el bloque de deportes colectivos?",
    correcta: "Proporcionar al alumno la confianza y competencia para participar en diversas situaciones sociomotrices de forma autónoma.",
    incorrectas: [
      "Aprender a escribir correctamente los nombres de los sistemas de juego en la pizarra.",
      "Identificar todas las marcas comerciales que patrocinan las ligas profesionales."
    ]
  },
  {
    enunciado: "La 'Transferencia motriz' entre el balonmano y el baloncesto escolar se facilita porque:",
    correcta: "Comparten principios tácticos similares como el desmarque, la ocupación de espacios y la defensa de zona.",
    incorrectas: [
      "Se juegan con el mismo tipo de balón y las mismas dimensiones de portería.",
      "Ambos prohíben el contacto físico de forma absoluta en el reglamento escolar."
    ]
  },
  {
    enunciado: "En el primer ciclo de la ESO, el tratamiento de los deportes colectivos debe ser:",
    correcta: "Multilateral y polivalente, evitando la especialización en puestos específicos.",
    incorrectas: [
      "Especializado, asignando a cada alumno un rol fijo según su estatura desde el primer día.",
      "Puramente teórico, analizando vídeos de partidos de alto rendimiento sin práctica física."
    ]
  },
  {
    enunciado: "Una orientación didáctica para trabajar la 'Coeducación' en deportes de equipo es:",
    correcta: "Fomentar equipos mixtos y modificar las reglas para que el éxito dependa de la participación de todos los géneros.",
    incorrectas: [
      "Separar a chicos y chicas en campos distintos para evitar comparaciones de fuerza.",
      "Otorgar doble puntuación a los goles marcados por las chicas independientemente del contexto."
    ]
  },
  {
    enunciado: "La 'Situación de Aprendizaje' en deportes colectivos debe plantearse como:",
    correcta: "Un reto motriz contextualizado que obligue al alumnado a buscar soluciones tácticas creativas.",
    incorrectas: [
      "Una serie de órdenes directas del profesor que el alumno debe obedecer sin cuestionar.",
      "Un examen de memorización de jugadas ensayadas sobre un diagrama estático."
    ]
  },
  {
    enunciado: "El uso de la 'Enseñanza Recíproca' en voleibol escolar permite:",
    correcta: "Que los alumnos se observen y corrijan el gesto del toque de dedos basándose en criterios prefijados.",
    incorrectas: [
      "Que los alumnos decidan su propia nota sin intervención del profesor.",
      "Que el equipo que gana dé la clase del día siguiente como premio."
    ]
  },
  {
    enunciado: "¿Cómo se trabaja la 'Responsabilidad Personal y Social' (modelo de Hellison) en el deporte colectivo?",
    correcta: "Mediante la autogestión de conflictos, el respeto al arbitraje y el apoyo a los compañeros con menos habilidades.",
    incorrectas: [
      "Obligando a los alumnos a pagar una multa si pierden un balón durante el partido.",
      "Haciendo que los capitanes tengan autoridad total para expulsar a compañeros del grupo."
    ]
  },
  {
    enunciado: "La 'Inclusión' en el currículo de Educación Física implica que los deportes colectivos deben:",
    correcta: "Ser accesibles para todo el alumnado, ajustando la complejidad a las posibilidades individuales (Diseño Universal de Aprendizaje).",
    incorrectas: [
      "Ser obligatorios solo para aquellos alumnos que no tengan ninguna enfermedad médica.",
      "Realizarse solo en horario extraescolar para no interferir con las materias teóricas."
    ]
  },
  {
    enunciado: "Un criterio de evaluación vinculado a los deportes colectivos en 4º de la ESO es:",
    correcta: "Aplicar soluciones tácticas adecuadas ante los problemas que plantea la oposición y la cooperación.",
    incorrectas: [
      "Realizar un mate en baloncesto cumpliendo los estándares de la NBA.",
      "Saber el nombre de todos los seleccionadores nacionales desde 1950."
    ]
  },
  {
    enunciado: "La 'Higiene Postural' en el deporte colectivo escolar se trabaja:",
    correcta: "Enseñando las posiciones base defensivas que protejan la espalda y las articulaciones durante los desplazamientos.",
    incorrectas: [
      "Haciendo que los alumnos jueguen con la espalda totalmente recta y rígida.",
      "Prohibiendo cualquier salto para evitar impactos en las rodillas de los adolescentes."
    ]
  },
  {
    enunciado: "El 'Aprendizaje Significativo' se logra en este bloque cuando:",
    correcta: "El alumno vincula la táctica aprendida en clase con su experiencia en el tiempo libre o deportes extraescolares.",
    incorrectas: [
      "El alumno aprueba el examen escrito con una nota de diez.",
      "El profesor utiliza términos técnicos en inglés para que la clase parezca más moderna."
    ]
  },
  {
    enunciado: "¿Qué valor educativo aporta el 'Arbitraje' realizado por los propios alumnos?",
    correcta: "La comprensión de la norma, la objetividad y el desarrollo de la empatía hacia la figura de la autoridad.",
    incorrectas: [
      "Que el profesor pueda sentarse a descansar mientras los alumnos dirigen el juego.",
      "Fomentar la competitividad para ver quién pita más faltas al equipo rival."
    ]
  },
  {
    enunciado: "La 'Metacognición' en los deportes de equipo se fomenta mediante:",
    correcta: "Preguntas reflexivas tras el juego (ej. '¿Por qué hemos perdido tantos balones en la salida?') para mejorar la estrategia.",
    incorrectas: [
      "La repetición del mismo ejercicio durante tres meses seguidos.",
      "El estudio de la anatomía del cerebro en lugar de practicar en el patio."
    ]
  },
  {
    enunciado: "En la LOMLOE, el 'Sentido Socioafectivo' de los deportes colectivos ayuda a:",
    correcta: "Gestionar el éxito y el fracaso de forma colectiva, fortaleciendo la cohesión del grupo clase.",
    incorrectas: [
      "Identificar quiénes son los alumnos más populares para darles más privilegios.",
      "Eliminar el marcador para que los alumnos no sientan ninguna emoción al jugar."
    ]
  },
  {
    enunciado: "El uso de 'Comodines' en juegos de invasión es una estrategia didáctica para:",
    correcta: "Fomentar la superioridad numérica ofensiva y facilitar el aprendizaje del flujo de juego y el apoyo.",
    incorrectas: [
      "Hacer que los alumnos más cansados puedan estar en el campo sin correr.",
      "Permitir que el profesor juegue para demostrar su superioridad técnica."
    ]
  },
  {
    enunciado: "La 'Flipped Classroom' aplicada a los deportes colectivos permitiría:",
    correcta: "Que los alumnos visualicen vídeos de sistemas tácticos en casa para dedicar el tiempo de clase a la práctica motriz.",
    incorrectas: [
      "Que los alumnos den la vuelta al gimnasio corriendo mientras el profesor explica la teoría.",
      "Que la clase se realice en el aula de informática jugando a videojuegos de deportes."
    ]
  },
  {
    enunciado: "En la enseñanza del voleibol escolar, se debe priorizar la 'Continuidad' sobre la técnica estricta para:",
    correcta: "Evitar que el juego se detenga constantemente y mantener la motivación intrínseca del alumnado.",
    incorrectas: [
      "Que los alumnos aprendan a golpear el balón con cualquier parte del cuerpo sin reglas.",
      "Reducir el tiempo de la clase y que los alumnos se cansen menos."
    ]
  },
  {
    enunciado: "La 'Autoconstrucción de Material' (ej. bates con periódicos) en deportes de bate y campo sirve para:",
    correcta: "Fomentar la creatividad, el reciclaje y garantizar la seguridad en los primeros golpeos.",
    incorrectas: [
      "Sustituir el material reglamentario del centro porque es demasiado caro para los alumnos.",
      "Hacer que los alumnos trabajen manualmente en lugar de hacer ejercicio físico."
    ]
  },
  {
    enunciado: "La 'Atención a la Diversidad' en una unidad de baloncesto implica:",
    correcta: "Proponer retos de diferentes niveles (ej. canastas de distintas alturas o balones de diferentes tamaños).",
    incorrectas: [
      "Que solo jueguen los alumnos que ya saben jugar para que los demás aprendan mirando.",
      "Obligar a todos los alumnos a realizar 50 entradas a canasta con la mano no dominante."
    ]
  },
  {
    enunciado: "El 'Feedback Intercalado' durante un partido escolar debe ser:",
    correcta: "Breve, positivo y orientado a una clave táctica específica para no interrumpir el flujo del juego.",
    incorrectas: [
      "Un discurso largo de diez minutos deteniendo el juego por completo.",
      "Gritos constantes desde la banda señalando cada pequeño error técnico."
    ]
  },
  {
    enunciado: "La 'Iniciación Deportiva' en Secundaria debe evolucionar desde:",
    correcta: "Formas jugadas globales hacia una especialización táctica básica al final de la etapa.",
    incorrectas: [
      "La competición profesional hacia el juego libre sin ningún tipo de regla.",
      "El estudio de la fisiología del ejercicio hacia la práctica deportiva sin calentar."
    ]
  },
  {
    enunciado: "En la LOMLOE, los deportes colectivos se vinculan con el Eje de 'Ciudadanía' al:",
    correcta: "Promover el cumplimiento de normas consensuadas y el respeto a la diversidad del equipo.",
    incorrectas: [
      "Enseñar a los alumnos a ser los mejores para representar a su país en el futuro.",
      "Hacer que los alumnos voten democráticamente quién debe ser expulsado de la clase."
    ]
  },
  {
    enunciado: "El modelo de 'Educación Deportiva' (Sport Education) busca que los alumnos:",
    correcta: "Vivan la temporada deportiva asumiendo roles de jugadores, árbitros, periodistas y gestores.",
    incorrectas: [
      "Se conviertan en entrenadores profesionales antes de cumplir los 16 años.",
      "Solo practiquen deporte si tienen un uniforme oficial del centro."
    ]
  },
  {
    enunciado: "La 'Toma de Decisión' en el deporte colectivo escolar se trabaja mejor mediante:",
    correcta: "Situaciones de juego real donde el alumno deba elegir entre varias opciones de pase o tiro.",
    incorrectas: [
      "Circuitos de técnica individual donde el recorrido está preestablecido con conos.",
      "La copia exacta de las jugadas que el profesor dibuja en la pizarra."
    ]
  },
  {
    enunciado: "Una adaptación reglamentaria para fomentar la cooperación es:",
    correcta: "La regla de los 'N pases obligatorios' antes de poder lanzar a portería o canasta.",
    incorrectas: [
      "Prohibir que los jugadores hablen entre ellos durante todo el transcurso del partido.",
      "Que el balón no pueda tocar el suelo en ningún momento del juego."
    ]
  },
  {
    enunciado: "El 'Clima de Aula' en las sesiones de deportes colectivos debe ser:",
    correcta: "Seguro, motivador y donde el error se vea como una parte natural del aprendizaje.",
    incorrectas: [
      "Altamente competitivo, donde solo los mejores reciban felicitaciones del docente.",
      "Silencioso y rígido para que los alumnos no se distraigan con el juego."
    ]
  },
  {
    enunciado: "¿Cómo contribuyen los deportes colectivos al bloque de 'Vida Activa y Saludable'?",
    correcta: "Generando hábitos de práctica social que son más fáciles de mantener en el tiempo libre.",
    incorrectas: [
      "Asegurando que el alumno nunca sufra enfermedades cardiovasculares en el futuro.",
      "Obligando al alumno a correr al menos 10 kilómetros en cada sesión de clase."
    ]
  },
  {
    enunciado: "La 'Evaluación Formativa' en este bloque incluye:",
    correcta: "Rúbricas de observación donde el alumno puede ver sus progresos en el juego real.",
    incorrectas: [
      "Un examen de selección múltiple sobre la historia del fútbol internacional.",
      "La toma de tiempos de carrera de 100 metros como nota de deportes colectivos."
    ]
  },
  {
    enunciado: "La 'Habilidad Táctica' en Secundaria se define como la capacidad de:",
    correcta: "Interpretar la situación de juego y elegir la respuesta motriz más eficaz en cada momento.",
    incorrectas: [
      "Realizar 100 toques seguidos con un balón de fútbol sin que caiga al suelo.",
      "Memorizar el reglamento de la FIFA de forma literal para recitarlo en clase."
    ]
  },
  {
    enunciado: "En la enseñanza del balonmano escolar, el uso de 'Zonas Prohibidas' sirve para:",
    correcta: "Obligar a los alumnos a circular el balón y evitar que se agrupen todos en un mismo espacio.",
    incorrectas: [
      "Impedir que los alumnos más bajitos puedan participar en el juego de ataque.",
      "Que los alumnos aprendan a jugar sin mirar nunca hacia la portería."
    ]
  },
  {
    enunciado: "El fin último de los deportes colectivos en el currículo es:",
    correcta: "La formación de personas competentes motrizmente y con valores éticos para la convivencia.",
    incorrectas: [
      "Ganar los campeonatos escolares locales para dar prestigio al centro educativo.",
      "Que todos los alumnos consigan una beca deportiva en universidades extranjeras."
    ]
  },
  {
    enunciado: "¿Qué es el 'Espacio de Acción' en la didáctica del deporte de equipo?",
    correcta: "El área que un jugador debe cubrir y gestionar según el sistema de juego adoptado.",
    incorrectas: [
      "El espacio que ocupa el material deportivo en el almacén del centro.",
      "La distancia entre el profesor y el alumno más alejado del grupo."
    ]
  },
  {
    enunciado: "La 'Orientación Didáctica' hacia la recreación implica:",
    correcta: "Priorizar el disfrute y la participación activa sobre la perfección técnica reglamentaria.",
    incorrectas: [
      "Que los alumnos jueguen sin prestar atención a lo que están haciendo.",
      "Eliminar el balón de los deportes colectivos para evitar accidentes."
    ]
  },
  {
    enunciado: "La LOMLOE vincula los deportes colectivos con la 'Digitalización' al sugerir:",
    correcta: "El uso de apps de análisis de video o registro de datos para mejorar la comprensión táctica del equipo.",
    incorrectas: [
      "Que los alumnos jueguen a videojuegos de deportes durante las sesiones de lluvia.",
      "Sustituir las pizarras de tiza por tablets que nadie sabe utilizar en el patio."
    ]
  }
];