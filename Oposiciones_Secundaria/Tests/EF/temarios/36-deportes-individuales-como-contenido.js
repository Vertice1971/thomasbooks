// 36-deportes-individuales-como-contenido.js

var PREGUNTAS = [
  {
    enunciado: "En el marco de la LOMLOE, ¿cuál es la principal intención educativa de incluir los deportes individuales en el currículo de Secundaria?",
    correcta: "Fomentar la autonomía, la capacidad de superación personal y la gestión del esfuerzo mediante el autoconocimiento.",
    incorrectas: [
      "Clasificar al alumnado según su rendimiento físico absoluto para detectar élites deportivas.",
      "Sustituir la práctica de deportes colectivos por ser estos menos técnicos y rigurosos."
    ]
  },
  {
    enunciado: "¿Qué sentido otorga la LOMLOE al término 'Alfabetización Motriz' dentro de la enseñanza de deportes individuales?",
    correcta: "El desarrollo de la competencia necesaria para participar con confianza y seguridad en actividades físicas a lo largo de la vida.",
    incorrectas: [
      "La capacidad de leer y escribir correctamente los reglamentos técnicos de las federaciones internacionales.",
      "La memorización de las marcas mundiales vigentes en las pruebas de atletismo y natación."
    ]
  },
  {
    enunciado: "Desde una perspectiva didáctica, ¿por qué se recomienda el uso de 'Modelos de Autoinstrucción' en deportes individuales?",
    correcta: "Porque permiten al alumno guiar su propio aprendizaje mediante verbalizaciones de los pasos técnicos, mejorando la retención.",
    incorrectas: [
      "Porque eliminan la necesidad de que el profesor esté presente durante el desarrollo de la sesión.",
      "Porque obligan al alumno a realizar la tarea en silencio absoluto para evitar distracciones."
    ]
  },
  {
    enunciado: "Una adaptación curricular para un alumno con movilidad reducida en una unidad de atletismo (carreras) sería:",
    correcta: "Modificar la distancia, el tiempo o el medio de desplazamiento (ej. silla de ruedas) para igualar el reto fisiológico.",
    incorrectas: [
      "Eximir al alumno de la práctica y pedirle que realice un trabajo teórico sobre la historia del calzado deportivo.",
      "Obligar al alumno a realizar la misma prueba que sus compañeros sin ningún tipo de ayuda técnica."
    ]
  },
  {
    enunciado: "El enfoque de 'Enseñanza para la Comprensión' aplicado a deportes individuales busca que el alumno:",
    correcta: "Entienda el 'porqué' biomecánico de un gesto antes de proceder a su automatización técnica.",
    incorrectas: [
      "Aprenda primero todas las faltas reglamentarias antes de tocar el material deportivo.",
      "Ignore la técnica y se centre únicamente en ganar a sus compañeros de clase."
    ]
  },
  {
    enunciado: "En la evaluación de deportes individuales en Secundaria, se debe priorizar:",
    correcta: "La mejora individual respecto al punto de partida y la adquisición de la técnica básica saludable.",
    incorrectas: [
      "La comparación del alumno con las tablas de rendimiento atlético profesional.",
      "El resultado final de la marca, independientemente de la evolución o el esfuerzo realizado."
    ]
  },
  {
    enunciado: "La 'Variabilidad de la Práctica' como estrategia didáctica en natación escolar consiste en:",
    correcta: "Modificar superficies de apoyo, materiales (aletas, palas) y ritmos para enriquecer el esquema motor acuático.",
    incorrectas: [
      "Cambiar de estilo de nado cada dos segundos para evitar que el alumno se canse.",
      "Permitir que el alumno nade por la calle que quiera sin seguir ninguna organización."
    ]
  },
  {
    enunciado: "¿Cómo contribuyen los deportes individuales al perfil de salida del alumnado en la LOMLOE?",
    correcta: "Desarrollando la perseverancia y la responsabilidad personal, claves para el aprendizaje permanente.",
    incorrectas: [
      "Asegurando que todos los alumnos tengan un cuerpo estéticamente perfecto al terminar la etapa.",
      "Fomentando la competitividad extrema como único valor para el éxito social."
    ]
  },
  {
    enunciado: "Una orientación didáctica clave para trabajar el atletismo en entornos con poco espacio (gimnasio) es:",
    correcta: "Utilizar formas jugadas y tareas de 'atletismo modificado' (lanzamientos con materiales ligeros, saltos de precisión).",
    incorrectas: [
      "Suspender la unidad didáctica y proyectar vídeos de los Juegos Olímpicos en el aula.",
      "Hacer que los alumnos corran a máxima velocidad chocando contra las paredes para frenar."
    ]
  },
  {
    enunciado: "La 'Autoevaluación' en el aprendizaje del salto de longitud permite al alumno:",
    correcta: "Reflexionar sobre su propia técnica mediante el uso de rúbricas o grabaciones de vídeo (metacognición).",
    incorrectas: [
      "Ponerse la nota que quiera sin que el profesor pueda intervenir en el proceso.",
      "Comparar su marca con la del compañero para decidir quién es mejor persona."
    ]
  },
  {
    enunciado: "En la LOMLOE, la dimensión 'Saludable' de los deportes individuales implica enseñar:",
    correcta: "La prevención de lesiones mediante el calentamiento específico y la higiene postural en el esfuerzo.",
    incorrectas: [
      "Que el deporte individual es el único medio para perder peso de forma inmediata.",
      "La prohibición de ingerir agua durante la práctica para endurecer el organismo."
    ]
  },
  {
    enunciado: "El uso de 'Fichas de Tarea' en la enseñanza del ciclismo escolar favorece:",
    correcta: "La autonomía del alumnado y el respeto a los diferentes ritmos de aprendizaje dentro de la misma sesión.",
    incorrectas: [
      "Que el profesor pueda ausentarse del patio para realizar gestiones administrativas.",
      "La limitación de la creatividad del alumno, obligándole a seguir un patrón rígido."
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Inclusión' en la enseñanza de la natación escolar?",
    correcta: "Garantizar que todos los alumnos, independientemente de su nivel de competencia acuática, progresen de forma segura.",
    incorrectas: [
      "Separar a los alumnos que no saben nadar para que no molesten a los que tienen nivel federado.",
      "Obligar a los alumnos con fobia al agua a lanzarse a la zona profunda el primer día."
    ]
  },
  {
    enunciado: "La 'Enseñanza Recíproca' en deportes individuales consiste en:",
    correcta: "Que los alumnos trabajen por parejas, donde uno ejecuta y el otro observa y corrige según criterios dados.",
    incorrectas: [
      "Que el profesor aprenda del alumno mientras este realiza el ejercicio.",
      "Intercambiar el material deportivo con un alumno de otro centro escolar."
    ]
  },
  {
    enunciado: "En el currículo de Secundaria, los deportes individuales se vinculan con el bloque de:",
    correcta: "Vida activa y saludable, y autorregulación de la práctica física.",
    incorrectas: [
      "Expresión corporal y danza contemporánea exclusivamente.",
      "Gestión de empresas deportivas y marketing de alto rendimiento."
    ]
  },
  {
    enunciado: "Una estrategia para motivar al alumnado menos dotado físicamente en atletismo es:",
    correcta: "Utilizar sistemas de puntuación basados en el progreso porcentual personal (marcas de referencia).",
    incorrectas: [
      "Darle ventaja de 50 metros en cada carrera para que gane siempre sin esfuerzo.",
      "Ignorar sus resultados y centrarse solo en los alumnos que van a ir a campeonatos."
    ]
  },
  {
    enunciado: "La LOMLOE enfatiza el 'Pensamiento Crítico'. ¿Cómo se aplica a los deportes individuales?",
    correcta: "Analizando la influencia del mercado y la publicidad en el consumo de material deportivo innecesario.",
    incorrectas: [
      "Criticando la técnica de los compañeros de clase de forma destructiva.",
      "Aprendiendo a cuestionar las decisiones de los jueces para ganar ventaja."
    ]
  },
  {
    enunciado: "¿Cuál es la función del 'Diario de Entrenamiento' en la Educación Física de Bachillerato?",
    correcta: "Registrar la carga de trabajo y las sensaciones personales para aprender a planificar el ejercicio autónomo.",
    incorrectas: [
      "Escribir poemas sobre lo que se siente al correr bajo la lluvia.",
      "Anotar el nombre de los compañeros que no traen el material deportivo."
    ]
  },
  {
    enunciado: "En la enseñanza de la técnica de lanzamiento, el error debe tratarse como:",
    correcta: "Una oportunidad de aprendizaje que requiere un ajuste en el programa motor del alumno.",
    incorrectas: [
      "Un motivo de sanción disciplinaria que debe evitarse a toda costa.",
      "Algo que desaparecerá solo con el paso del tiempo sin necesidad de intervención."
    ]
  },
  {
    enunciado: "La 'Atención a la Diversidad' en una unidad de gimnasia individual implica:",
    correcta: "Ofrecer diferentes niveles de dificultad para una misma tarea (ej. voltereta en plano inclinado vs. horizontal).",
    incorrectas: [
      "Que todos los alumnos realicen el pino puente obligatoriamente para aprobar.",
      "Realizar la clase solo con los alumnos que tienen flexibilidad innata."
    ]
  },
  {
    enunciado: "Las 'Situaciones de Aprendizaje' en deportes individuales deben ser:",
    correcta: "Contextualizadas, motivadoras y orientadas a la resolución de retos significativos.",
    incorrectas: [
      "Puramente teóricas y realizadas dentro del aula convencional.",
      "Idénticas en todos los cursos de Secundaria para no complicar la programación."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Transferencia' entre diferentes deportes individuales?",
    correcta: "Permite aprovechar patrones comunes (ej. el impulso de piernas en salto y en carrera).",
    incorrectas: [
      "Obliga al alumno a olvidar lo aprendido en un deporte para no confundirse.",
      "Es inexistente, cada deporte individual es un compartimento estanco."
    ]
  },
  {
    enunciado: "En la enseñanza del ciclismo, la 'Seguridad Vial' se considera:",
    correcta: "Un contenido transversal esencial que conecta la Educación Física con la ciudadanía.",
    incorrectas: [
      "Una pérdida de tiempo que resta minutos al entrenamiento de resistencia.",
      "Algo que solo debe enseñarse en la asignatura de tecnología."
    ]
  },
  {
    enunciado: "El uso de pulsómetros en la enseñanza de deportes individuales busca:",
    correcta: "Que el alumno aprenda a cuantificar y autorregular la intensidad de su propio esfuerzo.",
    incorrectas: [
      "Que el profesor sepa quién está fingiendo estar cansado para ponerle falta.",
      "Aumentar el precio de la matrícula del centro educativo."
    ]
  },
  {
    enunciado: "La 'Globalización' de la enseñanza en Primaria frente a la 'Especialización' en Secundaria en deportes individuales sugiere:",
    correcta: "Pasar de patrones motores básicos a técnicas más refinadas y específicas de cada disciplina.",
    incorrectas: [
      "Que en Secundaria ya no es necesario trabajar la coordinación general.",
      "Que en Primaria se deben entrenar todas las pruebas del decatlón olímpico."
    ]
  },
  {
    enunciado: "Un criterio de evaluación para los deportes individuales según la LOMLOE sería:",
    correcta: "La aplicación de estrategias de autorregulación y control del esfuerzo en la práctica.",
    incorrectas: [
      "La capacidad de ganar al menos tres medallas en el torneo escolar local.",
      "Tener la misma marca que el campeón del mundo de la categoría."
    ]
  },
  {
    enunciado: "El 'Deporte Individual' como contenido permite trabajar la competencia en conciencia y expresión culturales mediante:",
    correcta: "El conocimiento de la evolución histórica de las disciplinas y su impacto en la sociedad.",
    incorrectas: [
      "La obligación de llevar el uniforme oficial de la selección nacional.",
      "La realización de bailes regionales durante el calentamiento de atletismo."
    ]
  },
  {
    enunciado: "En la iniciación a la natación, el juego es fundamental para:",
    correcta: "La familiarización con el medio acuático y la pérdida del miedo de forma lúdica.",
    incorrectas: [
      "Evitar que los alumnos se duchen después de la sesión de piscina.",
      "Que el socorrista tenga más trabajo durante la jornada escolar."
    ]
  },
  {
    enunciado: "La 'Higiene Postural' aplicada al atletismo escolar busca:",
    correcta: "Corregir vicios técnicos (ej. excesiva rotación de tronco) que puedan dañar la columna.",
    incorrectas: [
      "Que los alumnos corran siempre con las manos en los bolsillos.",
      "Aumentar la flexibilidad de las orejas para escuchar mejor al profesor."
    ]
  },
  {
    enunciado: "Una unidad didáctica de deportes individuales debe finalizar idealmente con:",
    correcta: "Una reflexión sobre los logros personales y las posibilidades de práctica fuera del horario escolar.",
    incorrectas: [
      "Un examen teórico de 200 preguntas sobre leyes físicas del movimiento.",
      "La expulsión de los alumnos que no han mejorado su marca inicial."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Material Autoconstruido' en deportes individuales?",
    correcta: "Implementos fabricados por los alumnos (ej. jabalinas de PVC, pelotas de peso con arena) para suplir carencias.",
    incorrectas: [
      "Zapatillas deportivas hechas de papel reciclado que se rompen al primer paso.",
      "Instalaciones de hormigón construidas por los alumnos en el patio."
    ]
  },
  {
    enunciado: "La 'Gamificación' en los deportes individuales busca:",
    correcta: "Aumentar la motivación mediante sistemas de puntos, niveles y retos dentro de la unidad didáctica.",
    incorrectas: [
      "Que los alumnos solo jueguen a la consola durante la clase de EF.",
      "Eliminar cualquier tipo de esfuerzo físico para centrarse en el azar."
    ]
  },
  {
    enunciado: "En la enseñanza de la resistencia individual, el 'Método de Intervalos' se adapta a la escuela:",
    correcta: "Reduciendo la intensidad y aumentando los descansos para evitar la fatiga excesiva en el adolescente.",
    incorrectas: [
      "Obligando a los alumnos a correr hasta que sientan mareos intensos.",
      "Eliminando los descansos para que la clase termine antes."
    ]
  },
  {
    enunciado: "El 'Respeto al Material' es una intención educativa que implica:",
    correcta: "Valorar los recursos del centro como bienes comunes necesarios para la práctica de todos.",
    incorrectas: [
      "Utilizar las vallas de atletismo como porterías de fútbol para ahorrar espacio.",
      "Llevarse los balones a casa para que no se desgasten en el gimnasio."
    ]
  },
  {
    enunciado: "¿Cómo influye la 'Coeducación' en los deportes individuales?",
    correcta: "Eliminando estereotipos sobre pruebas 'masculinas' o 'femeninas' y promoviendo la práctica conjunta.",
    incorrectas: [
      "Haciendo que los chicos y las chicas nunca coincidan en la misma pista.",
      "Exigiendo que las chicas corran siempre detrás de los chicos."
    ]
  },
  {
    enunciado: "La 'Anticipación' en deportes individuales de situación (ej. esquí) se trabaja didácticamente:",
    correcta: "Obligando al alumno a fijar la mirada varios metros por delante de su posición actual.",
    incorrectas: [
      "Diciéndole al alumno lo que va a pasar cinco minutos antes de que ocurra.",
      "Haciendo que el alumno cierre los ojos y adivine el relieve del terreno."
    ]
  },
  {
    enunciado: "Un objetivo de los deportes individuales en el primer ciclo de la ESO es:",
    correcta: "La consolidación de los patrones motores básicos aplicados a gestos deportivos sencillos.",
    incorrectas: [
      "La obtención de una marca mínima para acceder a la universidad de deportes.",
      "La victoria en el campeonato del mundo de natación sincronizada."
    ]
  },
  {
    enunciado: "En la enseñanza del salto de altura, se debe priorizar la seguridad mediante:",
    correcta: "El uso de colchonetas adecuadas y una técnica de caída que proteja el cuello y la espalda.",
    incorrectas: [
      "Saltar sobre cemento para endurecer las articulaciones de los tobillos.",
      "Quitar las colchonetas para que los alumnos tengan miedo y salten más alto."
    ]
  },
  {
    enunciado: "La 'Metacognición' en Educación Física se fomenta cuando el alumno:",
    correcta: "Es capaz de explicar por qué ha fallado un lanzamiento y cómo corregirlo en el siguiente intento.",
    incorrectas: [
      "Aprende de memoria los nombres de todos los huesos del cuerpo humano.",
      "Copia las respuestas del examen teórico de su compañero de pupitre."
    ]
  },
  {
    enunciado: "El fin último de los deportes individuales en el currículo es:",
    correcta: "Promover un estilo de vida saludable y autónomo a través de la competencia motriz.",
    incorrectas: [
      "Preparar a los alumnos para el servicio militar obligatorio.",
      "Hacer que todos los ciudadanos sean medallistas olímpicos en el futuro."
    ]
  }
];