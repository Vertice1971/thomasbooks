// 43-el-juego.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué postula la 'Teoría de la Energía Sobrante' de Herbert Spencer sobre la finalidad del juego?",
    correcta: "El juego es una vía para descargar el exceso de energía acumulada que el organismo no gasta en las funciones de supervivencia.",
    incorrectas: [
      "El juego es un mecanismo para recuperar la energía perdida tras el trabajo físico (Teoría del Recreo).",
      "El juego es una preparación instintiva para las actividades del adulto (Teoría del Pre-ejercicio)."
    ]
  },
  {
    enunciado: "Según la clasificación de Roger Caillois, la categoría 'Alea' hace referencia a aquellos juegos donde:",
    correcta: "El resultado depende exclusivamente del azar y la fortuna, y no de la habilidad del jugador.",
    incorrectas: [
      "Existe una competición basada en el esfuerzo y la destreza (Agon).",
      "Se busca el vértigo y la pérdida de estabilidad sensorial (Ilinx)."
    ]
  },
  {
    enunciado: "¿Cuál es la característica definitoria del juego como 'Actividad Autotélica'?",
    correcta: "Que tiene su fin en sí mismo; se realiza por el placer de la propia actividad y no por un objetivo externo.",
    incorrectas: [
      "Que requiere obligatoriamente de un monitor o profesor para ser considerado juego.",
      "Que su única meta es el agotamiento físico del sistema cardiovascular."
    ]
  },
  {
    enunciado: "En la metodología de 'Juegos Modificados', ¿cuál es el objetivo de modificar el material o el espacio?",
    correcta: "Exagerar un problema táctico determinado para facilitar su comprensión y resolución por el alumno.",
    incorrectas: [
      "Hacer que el juego sea más peligroso para que los alumnos estén más atentos.",
      "Reducir el coste económico de la asignatura utilizando materiales rotos o viejos."
    ]
  },
  {
    enunciado: "La Teoría de la 'Recapitulación' de G. Stanley Hall sugiere que el niño, al jugar:",
    correcta: "Reproduce las etapas de la evolución cultural de la especie humana (etapa animal, salvaje, nómada, etc.).",
    incorrectas: [
      "Imita exclusivamente las acciones que ve realizar a sus padres en el entorno doméstico.",
      "Ensaya las habilidades que necesitará para trabajar en la industria moderna."
    ]
  },
  {
    enunciado: "Desde el punto de vista de la LOMLOE, el juego en Secundaria debe ser utilizado como:",
    correcta: "Un recurso didáctico y un contenido en sí mismo que fomenta la competencia motriz y socioafectiva.",
    incorrectas: [
      "Un simple pasatiempo para los días en los que el profesor no ha preparado la clase.",
      "Una herramienta de castigo para los alumnos que no aprueban los exámenes teóricos."
    ]
  },
  {
    enunciado: "Jean Piaget asocia el 'Juego de Reglas' (a partir de los 7 años) con el estadio de:",
    correcta: "Operaciones concretas, donde aparece la socialización y la aceptación de normas externas.",
    incorrectas: [
      "Estadio sensorio-motor, donde predomina el juego funcional o de ejercicio.",
      "Estadio preoperacional, donde el juego es puramente simbólico o de ficción."
    ]
  },
  {
    enunciado: "¿Qué diferencia al 'Juego' del 'Deporte' según la pirámide de la actividad física?",
    correcta: "El deporte está institucionalizado y federado, mientras que el juego tiene reglas flexibles y consensuadas por los participantes.",
    incorrectas: [
      "El juego no requiere movimiento físico y el deporte sí.",
      "El deporte es obligatorio por ley y el juego está prohibido en espacios públicos."
    ]
  },
  {
    enunciado: "En la 'Estrategia del Juego', ¿qué se entiende por 'Lógica Interna' (Parlebas)?",
    correcta: "El sistema de rasgos que determina las interacciones con los compañeros, adversarios, espacio, tiempo y objetos.",
    incorrectas: [
      "La capacidad del alumno para engañar al árbitro sin ser detectado.",
      "El razonamiento matemático que permite calcular el ángulo de un pase de pecho."
    ]
  },
  {
    enunciado: "El 'Juego Simbólico' (propio de la infancia) cumple la función psicopedagógica de:",
    correcta: "Asimilar la realidad exterior mediante la ficción, permitiendo al niño expresar conflictos y deseos.",
    incorrectas: [
      "Desarrollar la fuerza máxima explosiva de los miembros superiores.",
      "Aprender de memoria los símbolos de la tabla periódica de los elementos químicos."
    ]
  },
  {
    enunciado: "Los 'Juegos de Red o Muro' modificados (ej. minivóley con pelota de espuma) buscan mejorar:",
    correcta: "La continuidad del juego y la lectura de trayectorias, minimizando la dificultad técnica del golpeo.",
    incorrectas: [
      "La capacidad de los alumnos para saltar vallas de atletismo de un metro.",
      "La velocidad de escritura del marcador de puntos en la pizarra."
    ]
  },
  {
    enunciado: "¿Qué postula la 'Teoría de la Dinámica Infantil' de Buytendijk sobre el origen del juego?",
    correcta: "El juego surge de la ambigüedad de los movimientos del niño y su impulso de experimentar con los objetos.",
    incorrectas: [
      "El juego es una respuesta nerviosa a la falta de azúcar en la sangre periférica.",
      "El juego se hereda genéticamente de los antepasados que eran cazadores-recolectores."
    ]
  },
  {
    enunciado: "Una 'Estrategia de Cooperación' en un juego colectivo implica:",
    correcta: "La suma de esfuerzos individuales para alcanzar un objetivo común imposible de lograr en solitario.",
    incorrectas: [
      "Eliminar a todos los compañeros para ser el único que toque el balón.",
      "Quedarse quieto para que el otro equipo gane y no se sienta mal."
    ]
  },
  {
    enunciado: "El concepto de 'Homo Ludens' desarrollado por Johan Huizinga defiende que:",
    correcta: "La cultura humana surge y se desarrolla en el juego y como juego.",
    incorrectas: [
      "El hombre solo juega cuando ha terminado de trabajar y estudiar.",
      "El juego es una actividad irracional que debe eliminarse de la sociedad civilizada."
    ]
  },
  {
    enunciado: "En los 'Juegos de Invasión' modificados, ¿qué ocurre si reducimos el número de jugadores (ej. 3x3)?",
    correcta: "Aumenta la participación individual, el número de contactos con el móvil y la carga cardiovascular.",
    incorrectas: [
      "El juego se vuelve más aburrido porque hay menos gente gritando.",
      "Se reduce la posibilidad de que los alumnos aprendan a tomar decisiones tácticas."
    ]
  },
  {
    enunciado: "Lev Vygotsky considera que el juego crea una 'Zona de Desarrollo Próximo' porque:",
    correcta: "En el juego, el niño siempre se comporta por encima de su edad promedio y de su conducta diaria.",
    incorrectas: [
      "El juego cansa al niño y le obliga a dormir más horas por la noche.",
      "El juego separa a los niños inteligentes de los que tienen dificultades de aprendizaje."
    ]
  },
  {
    enunciado: "La 'Variabilidad de la Práctica' aplicada al juego consiste en:",
    correcta: "Introducir cambios constantes en las reglas o el medio para obligar al sistema nervioso a adaptarse.",
    incorrectas: [
      "Jugar siempre al mismo juego para que el alumno no se confunda.",
      "Que el profesor cambie de opinión sobre quién ha ganado al final de la clase."
    ]
  },
  {
    enunciado: "Un 'Juego de Bate y Campo' modificado (ej. sófbol con raquetas) se centra en trabajar:",
    correcta: "La coordinación óculo-manual y el pensamiento táctico de defensa de espacios libres.",
    incorrectas: [
      "La resistencia aeróbica de larga duración nadando en estilo crol.",
      "La capacidad de los alumnos para saltar a la comba de forma rítmica."
    ]
  },
  {
    enunciado: "¿Qué es el 'Círculo Mágico' en la teoría del juego?",
    correcta: "El espacio y tiempo imaginario donde rigen unas leyes propias distintas a las de la vida cotidiana.",
    incorrectas: [
      "Un ejercicio de calentamiento donde los alumnos corren en círculo dándose la mano.",
      "La forma geométrica que deben tener todos los balones de la escuela."
    ]
  },
  {
    enunciado: "La metodología de 'Juegos para la Comprensión' (TGfU) se fundamenta en:",
    correcta: "Enseñar el 'qué hacer' (táctica) antes del 'cómo hacerlo' (técnica).",
    incorrectas: [
      "Obligar al alumno a leer libros de táctica deportiva antes de dejarle tocar el balón.",
      "Que el profesor no intervenga nunca y deje que los alumnos jueguen sin reglas."
    ]
  },
  {
    enunciado: "El 'Juego Limpio' (Fair Play) como contenido transversal de la LOMLOE busca:",
    correcta: "Interiorizar el respeto al rival, al árbitro y a las normas como base de la convivencia democrática.",
    incorrectas: [
      "Ducharse siempre después del juego para no manchar la ropa de calle.",
      "Ganar a toda costa utilizando cualquier artimaña que no vea el profesor."
    ]
  },
  {
    enunciado: "Según Freud y el Psicoanálisis, el juego sirve para:",
    correcta: "Expresar sentimientos reprimidos y transformar experiencias pasivas en activas.",
    incorrectas: [
      "Fortalecer los huesos y músculos mediante el impacto repetido.",
      "Aprender a contar números y realizar operaciones matemáticas complejas."
    ]
  },
  {
    enunciado: "Un 'Juego de Blanco o Diana' modificado desarrolla principalmente:",
    correcta: "La precisión, el control de la fuerza segmentaria y el foco atencional.",
    incorrectas: [
      "La capacidad pulmonar para aguantar la respiración bajo el agua.",
      "La fuerza máxima de tracción de las piernas en el salto vertical."
    ]
  },
  {
    enunciado: "La 'Inclusión' en el juego escolar se garantiza cuando:",
    correcta: "Las reglas permiten que todos los alumnos tengan éxito independientemente de su nivel de habilidad.",
    incorrectas: [
      "Solo juegan los mejores alumnos y los demás actúan como público.",
      "Se eliminan todos los juegos y se sustituyen por clases teóricas de historia."
    ]
  },
  {
    enunciado: "¿Qué define a un 'Juego Motor' frente a un juego de mesa?",
    correcta: "La implicación de la motricidad global y el compromiso fisiológico del organismo.",
    incorrectas: [
      "Que se juega siempre en el patio y nunca dentro de un aula.",
      "Que está prohibido pensar y solo se permite moverse rápidamente."
    ]
  },
  {
    enunciado: "La 'Estrategia de Engaño' (finta) en el juego es:",
    correcta: "Una acción comunicativa falsa para inducir al oponente a un error de percepción o decisión.",
    incorrectas: [
      "Mentir al profesor sobre la edad que se tiene para poder jugar en otro equipo.",
      "Ponerse una camiseta de otro color para que los compañeros no te pasen el balón."
    ]
  },
  {
    enunciado: "El 'Juego de Ejercicio' (propio del estadio sensorio-motor) consiste en:",
    correcta: "Repetir una acción por el puro placer del resultado inmediato (ej. lanzar un objeto).",
    incorrectas: [
      "Seguir un reglamento complejo con jueces y sanciones económicas.",
      "Discutir con los compañeros sobre quién es el capitán del equipo."
    ]
  },
  {
    enunciado: "En la LOMLOE, el juego como 'Recurso Didáctico' significa que:",
    correcta: "Se utiliza el juego para alcanzar objetivos de aprendizaje de otros bloques o materias.",
    incorrectas: [
      "El juego es la única actividad que se permite hacer en todo el instituto.",
      "Se prohíbe el uso de libros y pizarras en favor de balones y redes."
    ]
  },
  {
    enunciado: "¿Qué es la 'Ludotecnia' en Educación Física?",
    correcta: "La técnica de enseñar habilidades atléticas o deportivas a través de juegos y retos lúdicos.",
    incorrectas: [
      "El estudio científico de los materiales plásticos con los que se fabrican los juguetes.",
      "La capacidad de arreglar balones pinchados utilizando herramientas de bricolaje."
    ]
  },
  {
    enunciado: "El juego contribuye al 'Desarrollo Cognitivo' porque:",
    correcta: "Obliga a la planificación, la resolución de problemas y la toma de decisiones constante.",
    incorrectas: [
      "Aumenta el tamaño del cerebro de forma física y medible en centímetros.",
      "Hace que el alumno no necesite estudiar otras materias como lengua o matemáticas."
    ]
  },
  {
    enunciado: "Un 'Juego Cooperativo' se diferencia de uno competitivo en que:",
    correcta: "No hay perdedores; el grupo gana o pierde en conjunto frente a un reto del entorno.",
    incorrectas: [
      "Está prohibido correr y solo se permite caminar muy despacio.",
      "El profesor decide quién gana basándose en la ropa que llevan los alumnos."
    ]
  },
  {
    enunciado: "La 'Dramatización' dentro del juego permite trabajar:",
    correcta: "La expresión corporal, la empatía y la creatividad gestual.",
    incorrectas: [
      "La fuerza máxima de los gemelos mediante saltos de longitud.",
      "La resistencia aeróbica corriendo 10 kilómetros en línea recta."
    ]
  },
  {
    enunciado: "En la enseñanza de deportes de invasión, el juego modificado de 'comodines' sirve para:",
    correcta: "Crear una superioridad numérica constante que facilite el éxito ofensivo.",
    incorrectas: [
      "Que los alumnos que no quieren correr puedan quedarse quietos en el centro.",
      "Sustituir al árbitro por un alumno que no sabe las reglas."
    ]
  },
  {
    enunciado: "La 'Teoría del Trabajo' aplicada al juego (Freud) sostiene que el juego es:",
    correcta: "El trabajo de la infancia, necesario para la construcción del yo y el dominio de la realidad.",
    incorrectas: [
      "Una pérdida de tiempo que impide que el niño aprenda a ser productivo.",
      "Un castigo que se impone a los niños que no quieren ayudar en casa."
    ]
  },
  {
    enunciado: "La 'Gamificación' en Educación Física utiliza elementos del juego (puntos, niveles) para:",
    correcta: "Aumentar la motivación intrínseca y el compromiso del alumno con su propio aprendizaje.",
    incorrectas: [
      "Hacer que la asignatura sea más difícil de aprobar para los alumnos vagos.",
      "Regalar videojuegos a los alumnos que sacan mejores notas."
    ]
  },
  {
    enunciado: "Un factor que puede romper la dinámica de juego en el aula es:",
    correcta: "Una competitividad mal entendida que genere exclusión o violencia verbal.",
    incorrectas: [
      "Que todos los alumnos se diviertan y quieran seguir jugando después de sonar el timbre.",
      "Que el material deportivo sea nuevo y de buena calidad."
    ]
  },
  {
    enunciado: "La 'Flipped Classroom' en el bloque de juegos permitiría:",
    correcta: "Que el alumno aprenda las reglas en casa mediante un vídeo para jugar todo el tiempo en clase.",
    incorrectas: [
      "Que el profesor juegue en su casa mientras los alumnos le miran por webcam.",
      "Invertir el orden de la clase empezando por la ducha y terminando por el calentamiento."
    ]
  },
  {
    enunciado: "El 'Juego Tradicional' se diferencia del juego modificado en que el primero:",
    correcta: "Tiene un valor cultural histórico y raíces profundas en una comunidad específica.",
    incorrectas: [
      "Está prohibido por la LOMLOE por ser demasiado antiguo.",
      "Solo puede jugarse con ropa de época del siglo XVIII."
    ]
  },
  {
    enunciado: "El juego como 'Contenido' en Secundaria busca que el alumno:",
    correcta: "Conozca diferentes familias de juegos y sea capaz de organizar su propio ocio activo.",
    incorrectas: [
      "Se convierta en un jugador profesional de cartas o de azar.",
      "Aprenda a fabricar sus propios dados utilizando materiales tóxicos."
    ]
  },
  {
    enunciado: "La evaluación del juego en la escuela debe ser 'Formativa', lo que implica:",
    correcta: "Valorar el proceso, la participación y la progresión táctica del alumno.",
    incorrectas: [
      "Poner una nota basada exclusivamente en quién ha ganado más partidos.",
      "Hacer un ránking público de los mejores y peores jugadores de la clase."
    ]
  }
];