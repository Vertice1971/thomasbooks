
// -10-sistemas-naturales-en-educacion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué corriente pedagógica de finales del siglo XVIII y principios del XIX sentó las bases de los sistemas naturales en Educación Física?",
    correcta: "El naturalismo pedagógico de Rousseau y Basedow.",
    incorrectas: ["El mecanicismo industrial de Taylor.", "La escolástica medieval."]
  },
  {
    enunciado: "El principal exponente del 'Método Natural' en Francia a principios del siglo XX fue:",
    correcta: "Georges Hébert",
    incorrectas: ["Pehr Henrik Ling", "Friedrich Jahn"]
  },
  {
    enunciado: "¿Cuál es el postulado central del Método Natural de Hébert?",
    correcta: "Desarrollar al ser humano mediante ejercicios utilitarios y globales en contacto con la naturaleza.",
    incorrectas: ["Aislar los músculos mediante el uso de poleas y máquinas analíticas.", "Fomentar la competición deportiva de élite por encima de la salud."]
  },
  {
    enunciado: "La frase 'Ser fuerte para ser útil' (Être fort pour être utile) resume la filosofía de:",
    correcta: "El sistema natural de Georges Hébert.",
    incorrectas: ["La gimnasia sueca ortopédica.", "La danza moderna expresiva."]
  },
  {
    enunciado: "¿Cuáles son las tres categorías de ejercicios que componen el Método Natural?",
    correcta: "Locomoción, defensa y actividades industriales/recreativas.",
    incorrectas: ["Fuerza, flexibilidad y resistencia estática.", "Fútbol, baloncesto y atletismo."]
  },
  {
    enunciado: "El sistema natural se diferencia de los sistemas analíticos principalmente por:",
    correcta: "La globalidad de los movimientos y la ausencia de ejercicios artificiales o segmentarios.",
    incorrectas: ["El uso obligatorio de uniformes militares.", "La realización de ejercicio exclusivamente en gimnasios cerrados."]
  },
  {
    enunciado: "En la actualidad, los sistemas naturales tienen su aplicación más directa en contenidos de:",
    correcta: "Actividades en el medio natural y Parkour.",
    incorrectas: ["Acondicionamiento físico en máquinas de gimnasio.", "Ajedrez y deportes de mesa."]
  },
  {
    enunciado: "¿Qué autor español es un referente histórico en la aplicación de los sistemas naturales y el excursionismo?",
    correcta: "Francisco Giner de los Ríos (Institución Libre de Enseñanza).",
    incorrectas: ["Santiago Ramón y Cajal.", "Miguel de Cervantes."]
  },
  {
    enunciado: "El 'Plateau' o recorrido de entrenamiento propuesto por Hébert es el antecesor directo de:",
    correcta: "Los circuitos de entrenamiento y las pistas de obstáculos.",
    incorrectas: ["Los estadios de fútbol modernos.", "Las piscinas de olas artificiales."]
  },
  {
    enunciado: "Una característica técnica de los sistemas naturales es el uso de:",
    correcta: "El propio peso corporal y los elementos del entorno (troncos, rocas, desniveles).",
    incorrectas: ["Pesas de hierro fundido con progresión de carga matemática.", "Electroestimulación muscular profunda."]
  },
  {
    enunciado: "Los sistemas naturales consideran que la Educación Física debe buscar un desarrollo:",
    correcta: "Integral, equilibrando lo físico, lo moral y lo viril (entendido como valentía).",
    incorrectas: ["Exclusivamente estético para concursos de belleza.", "Puramente intelectual, despreciando el cuerpo."]
  },
  {
    enunciado: "En la evolución de los sistemas naturales, ¿qué papel juegan los 'Juegos Scout' de Baden-Powell?",
    correcta: "Aportan el componente lúdico, de supervivencia y de vida comunitaria en la naturaleza.",
    incorrectas: ["Introducen el uso de armas de fuego en la Educación Física.", "Fomentan el sedentarismo en campamentos permanentes."]
  },
  {
    enunciado: "El concepto de 'Gimnasia Natural Austríaca' (Gaulhofer y Streicher) proponía:",
    correcta: "Una vuelta a la naturaleza frente a la rigidez de la gimnasia escolar alemana tradicional.",
    incorrectas: ["El uso de la música tecno para marcar el ritmo de los saltos.", "La prohibición de salir al patio en invierno."]
  },
  {
    enunciado: "La aplicación actual de los sistemas naturales en Secundaria permite trabajar la competencia específica de:",
    correcta: "Interacción con el medio natural y sostenibilidad.",
    incorrectas: ["Uso de herramientas digitales avanzadas.", "Cálculo de trayectorias balísticas."]
  },
  {
    enunciado: "¿Qué técnica de desplazamiento en el medio natural se considera 'natural' por excelencia en los sistemas históricos?",
    correcta: "La marcha, la carrera y la trepa.",
    incorrectas: ["El uso de vehículos todoterreno.", "El desplazamiento en helicóptero."]
  },
  {
    enunciado: "Los sistemas naturales critican a la sociedad industrial por:",
    correcta: "Atrofiar las capacidades físicas del hombre debido al sedentarismo y la vida en las ciudades.",
    incorrectas: ["Crear demasiadas bibliotecas públicas.", "Mejorar la higiene dental de la población."]
  },
  {
    enunciado: "En el Método Natural, el 'entrenamiento completo' debe incluir:",
    correcta: "Ejercicios de resistencia, fuerza, agilidad y valor psicofísico.",
    incorrectas: ["Solo ejercicios de flexibilidad pasiva.", "Charlas teóricas sobre nutrición exclusivamente."]
  },
  {
    enunciado: "La 'Gimnasia de campo' es una evolución que busca:",
    correcta: "Adaptar los ejercicios naturales a espacios abiertos cercanos al centro educativo.",
    incorrectas: ["Realizar gimnasia únicamente en campos de cultivo de patatas.", "Utilizar solo material de plástico reciclado."]
  },
  {
    enunciado: "¿Qué valor transversal se potencia con los sistemas naturales bajo la LOMLOE?",
    correcta: "El respeto por el medio ambiente y la conciencia ecológica.",
    incorrectas: ["El consumo masivo de suplementos vitamínicos.", "La competitividad agresiva para humillar al rival."]
  },
  {
    enunciado: "El Método Natural de Hébert fue adoptado inicialmente por:",
    correcta: "La marina francesa para el entrenamiento de sus reclutas.",
    incorrectas: ["Los gremios de panaderos de París.", "Las escuelas de ballet clásico de Moscú."]
  },
  {
    enunciado: "Los sistemas naturales actuales en EF suelen organizarse mediante:",
    correcta: "Senderismo, orientación, escalada o juegos de rastreo.",
    incorrectas: ["Clases magistrales sentados en el pupitre.", "Ejercicios de repetición analítica frente a un espejo."]
  },
  {
    enunciado: "¿Qué se entiende por 'ejercicio utilitario' en el contexto de los sistemas naturales?",
    correcta: "Aquel que tiene una aplicación práctica para la vida o la supervivencia (ej. saltar un obstáculo).",
    incorrectas: ["Aquel que solo sirve para que el profesor ponga una nota.", "Aquel que requiere el uso de herramientas eléctricas."]
  },
  {
    enunciado: "La 'Educación Física en la Naturaleza' actual hereda de los sistemas naturales:",
    correcta: "La búsqueda de la incertidumbre ambiental como factor de aprendizaje.",
    incorrectas: ["La rigidez de las filas y las órdenes militares.", "El rechazo a cualquier tipo de calzado deportivo."]
  },
  {
    enunciado: "En el sistema de Hébert, el progreso del alumno se medía a través de:",
    correcta: "Pruebas de capacidad técnica y resistencia en entornos variados.",
    incorrectas: ["Exámenes escritos sobre la vida de los filósofos griegos.", "El color del cinturón de artes marciales."]
  },
  {
    enunciado: "Los sistemas naturales consideran que el entorno natural es:",
    correcta: "El mejor gimnasio posible por su variedad de estímulos y pureza de aire.",
    incorrectas: ["Un lugar peligroso que debe evitarse a toda costa.", "Un espacio que solo sirve para extraer materias primas."]
  },
  {
    enunciado: "La aplicación de sistemas naturales en Secundaria ayuda a combatir:",
    correcta: "El trastorno por déficit de naturaleza y el sedentarismo tecnológico.",
    incorrectas: ["El exceso de horas de sueño del alumnado.", "El buen humor excesivo durante las clases."]
  },
  {
    enunciado: "¿Qué autor francés influyó en Hébert al afirmar que el hombre nace sano y la sociedad lo corrompe?",
    correcta: "Jean-Jacques Rousseau",
    incorrectas: ["Victor Hugo", "Napoleón Bonaparte"]
  },
  {
    enunciado: "Los sistemas naturales modernos han evolucionado hacia actividades de:",
    correcta: "Turismo activo y deportes de aventura responsables.",
    incorrectas: ["Caza furtiva y destrucción del sotobosque.", "Construcción de centros comerciales en la montaña."]
  },
  {
    enunciado: "La 'Marcha de resistencia' en el Método Natural se realizaba:",
    correcta: "Alternando diferentes tipos de pasos y superando obstáculos naturales.",
    incorrectas: ["Siempre sobre una cinta de correr eléctrica.", "Caminando de espaldas con los ojos vendados."]
  },
  {
    enunciado: "En la Educación Física actual, los sistemas naturales se vinculan a la salud por:",
    correcta: "Los beneficios psicológicos de la exposición a entornos verdes (Biofilia).",
    incorrectas: ["La ausencia total de bacterias en el campo.", "Que en la montaña no existe la fuerza de la gravedad."]
  },
  {
    enunciado: "El 'Parkour' se considera una aplicación actual de los sistemas naturales porque:",
    correcta: "Utiliza el entorno (aunque sea urbano) para desplazamientos fluidos y utilitarios.",
    incorrectas: ["Requiere el uso de tablas de surf electrónicas.", "Se basa en quedarse quieto en un punto elevado."]
  },
  {
    enunciado: "Un principio técnico de los sistemas naturales es la 'progresión' que consiste en:",
    correcta: "Aumentar la dificultad técnica y la distancia de los recorridos de forma gradual.",
    incorrectas: ["Hacer siempre lo mismo sin cambiar nunca nada.", "Empezar por lo más difícil y peligroso el primer día."]
  },
  {
    enunciado: "La 'Gimnasia Natural' se opone a la 'Gimnasia Construida' porque esta última:",
    correcta: "Es artificial, analítica y descontextualizada del medio real.",
    incorrectas: ["Es demasiado divertida y desordenada.", "Se realiza sin profesor."]
  },
  {
    enunciado: "En el marco escolar, las actividades naturales fomentan la 'autonomía' porque:",
    correcta: "El alumno debe tomar decisiones ante imprevistos del terreno o el clima.",
    incorrectas: ["El profesor no asiste a la excursión.", "Los alumnos no tienen que seguir ninguna regla."]
  },
  {
    enunciado: "La 'Naturaleza' en Educación Física es un contenido que permite trabajar de forma excelente:",
    correcta: "La coeducación y el trabajo en equipo ante retos comunes.",
    incorrectas: ["La velocidad de mecanografía.", "La ortografía de los nombres científicos."]
  },
  {
    enunciado: "El sistema natural de Georges Hébert valoraba especialmente:",
    correcta: "La valentía y la sangre fría ante situaciones de riesgo controlado.",
    incorrectas: ["La capacidad de mentir para ganar una competición.", "La pereza como forma de ahorro energético."]
  },
  {
    enunciado: "Las 'Escuelas de Bosque' actuales son una manifestación moderna de:",
    correcta: "Los sistemas naturales aplicados a la educación infantil y primaria.",
    incorrectas: ["Fábricas de papel situadas en zonas forestales.", "Centros de formación para guardas forestales."]
  },
  {
    enunciado: "En el sistema natural, el profesor actúa como:",
    correcta: "Un guía que propone retos y vela por la seguridad, fomentando la exploración.",
    incorrectas: ["Un sargento que da órdenes sin permitir la iniciativa.", "Un juez que solo se dedica a poner multas."]
  },
  {
    enunciado: "La aplicación de los sistemas naturales contribuye al 'Perfil de Salida' de la LOMLOE en:",
    correcta: "La competencia en conciencia y expresión culturales y la competencia ciudadana.",
    incorrectas: ["La competencia en física nuclear aplicada.", "La competencia en lenguas muertas."]
  },
  {
    enunciado: "La vigencia actual de los sistemas naturales se demuestra en el auge de:",
    correcta: "El entrenamiento funcional y el trail running.",
    incorrectas: ["El uso de sillones de masaje vibratorio.", "Los juegos de azar online."]
  }
];
