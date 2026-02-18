// 38-deportes-de-adversario-como-contenido.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la principal intención educativa de los deportes de adversario de contacto (lucha) en la ESO según la LOMLOE?",
    correcta: "La aceptación del contacto físico, el control de la agresividad y el respeto absoluto a la integridad del oponente.",
    incorrectas: [
      "El aprendizaje de técnicas de defensa personal para su uso en conflictos callejeros.",
      "La determinación de quién es el alumno más fuerte de la clase mediante combates eliminatorios."
    ]
  },
  {
    enunciado: "En la didáctica de los deportes de raqueta, el modelo de 'Iniciación Horizontal' propone:",
    correcta: "Trabajar principios comunes a todos (bádminton, tenis, pádel) como la lectura de trayectorias y el golpeo del móvil.",
    incorrectas: [
      "Especializarse en un solo deporte desde el primer día para alcanzar el nivel federado rápido.",
      "Realizar todos los ejercicios de la sesión tumbados en el suelo para mejorar la estabilidad."
    ]
  },
  {
    enunciado: "¿Qué adaptación es prioritaria para introducir el judo en un aula de Secundaria sin tatami reglamentario?",
    correcta: "Sustituir las proyecciones (Nage-waza) por juegos de lucha en el suelo (Ne-waza) para garantizar la seguridad.",
    incorrectas: [
      "Realizar las proyecciones sobre el cemento del patio para endurecer el carácter del alumnado.",
      "Obligar a los alumnos a traer sus propios colchones de casa para las clases de Educación Física."
    ]
  },
  {
    enunciado: "El uso de 'Juegos Modificados' en bádminton escolar (ej. reducir el campo) busca principalmente:",
    correcta: "Aumentar el éxito en las acciones de continuidad y facilitar el aprendizaje táctico de la colocación.",
    incorrectas: [
      "Que el profesor tenga que desplazarse menos por la pista durante la explicación.",
      "Ahorrar luz en el pabellón al utilizar solo la zona central de las canchas."
    ]
  },
  {
    enunciado: "En la LOMLOE, la evaluación de un deporte de adversario debe centrarse en:",
    correcta: "La capacidad de adaptar la respuesta motriz a las acciones del oponente y el respeto a las normas éticas.",
    incorrectas: [
      "El número de partidos ganados durante el torneo final de la unidad didáctica.",
      "La fuerza bruta demostrada por el alumno en los agarres y tracciones."
    ]
  },
  {
    enunciado: "¿Qué valor educativo aporta el 'saludo' inicial y final en los deportes de lucha?",
    correcta: "La simbolización del respeto mutuo y la transición de un estado de competición a uno de colaboración.",
    incorrectas: [
      "Una pérdida de tiempo necesaria para que el árbitro compruebe que los alumnos están limpios.",
      "Un requisito estético para que las fotos de la sesión queden mejor en la web del centro."
    ]
  },
  {
    enunciado: "Una adaptación para un alumno con discapacidad visual en deportes de raqueta sería:",
    correcta: "Utilizar pelotas o volantes sonoros y reducir la velocidad del móvil (ej. pelotas de espuma).",
    incorrectas: [
      "Pedirle que sea el árbitro de silla para que no tenga que moverse por la pista.",
      "Hacer que juegue con los ojos cerrados como sus compañeros para igualar la situación."
    ]
  },
  {
    enunciado: "La 'Enseñanza Recíproca' en la técnica de golpeo de tenis consiste en:",
    correcta: "Un alumno ejecuta el drive mientras su compañero observa y corrige basándose en una hoja de criterios (check-list).",
    incorrectas: [
      "Que el profesor y el alumno se intercambien los papeles y el alumno dé la clase teórica.",
      "Que los alumnos de un centro den clase a los de otro centro a través de una videollamada."
    ]
  },
  {
    enunciado: "En el primer ciclo de la ESO, el tratamiento de los deportes de adversario debe ser:",
    correcta: "Predominantemente lúdico, priorizando los juegos de oposición básicos y el manejo de implementos sencillos.",
    incorrectas: [
      "Puramente reglamentario, centrando las sesiones en el aprendizaje de las faltas técnicas.",
      "Exclusivamente individual, evitando cualquier contacto físico entre los alumnos."
    ]
  },
  {
    enunciado: "La 'Gestión del Conflicto' en deportes de adversario se trabaja mediante:",
    correcta: "El análisis conjunto de situaciones de tensión y la mediación del profesor para buscar soluciones pacíficas.",
    incorrectas: [
      "La expulsión definitiva de cualquier alumno que muestre un signo de enfado durante el juego.",
      "Ignorar las discusiones entre alumnos para que aprendan a resolverlas a base de empujones."
    ]
  },
  {
    enunciado: "Una orientación didáctica para mejorar la 'Toma de Decisión' en esgrima escolar es:",
    correcta: "Plantear situaciones de 'incertidumbre reducida' donde el defensor solo puede responder de dos formas posibles.",
    incorrectas: [
      "Repetir el mismo movimiento de estocada mil veces contra un muñeco estático de goma.",
      "Que el profesor diga en voz alta qué movimiento debe hacer el alumno cada segundo."
    ]
  },
  {
    enunciado: "El 'Sentido Socioafectivo' de la Educación Física en la LOMLOE se potencia en estos deportes al:",
    correcta: "Obligar a los alumnos a colaborar en el arbitraje y la organización de la competición de sus compañeros.",
    incorrectas: [
      "Fomentar que los alumnos se rían de los errores técnicos del adversario para ganar confianza.",
      "Clasificar a los alumnos por niveles de popularidad para asignar las parejas de juego."
    ]
  },
  {
    enunciado: "Para trabajar la 'Inclusión de Género' en deportes de adversario, se recomienda:",
    correcta: "Promover enfrentamientos mixtos basados en niveles de habilidad similares y no en el sexo.",
    incorrectas: [
      "Separar siempre a los chicos de las chicas para que estas no se sientan intimidadas.",
      "Prohibir que los chicos utilicen toda su fuerza cuando juegan contra chicas."
    ]
  },
  {
    enunciado: "El concepto de 'Oposición sin Contacto' (ej. bádminton) es ideal para alumnos que:",
    correcta: "Presentan inseguridad ante el contacto físico directo pero tienen buena coordinación óculo-manual.",
    incorrectas: [
      "Quieren ser boxeadores profesionales en el futuro.",
      "Tienen problemas de audición y no pueden escuchar los silbatos del árbitro."
    ]
  },
  {
    enunciado: "En la didáctica de la lucha, el 'Juego de Oposición' previo busca:",
    correcta: "Desarrollar la estabilidad, el equilibrio y la fuerza de agarre de forma divertida y segura.",
    incorrectas: [
      "Agotar físicamente al alumno para que no tenga fuerzas para pelear en serio.",
      "Identificar quién es el alumno más agresivo para ponerle una sanción preventiva."
    ]
  },
  {
    enunciado: "Un criterio de evaluación para los deportes de adversario en 4º de la ESO sería:",
    correcta: "Planificar y aplicar estrategias tácticas coherentes con las debilidades observadas en el oponente.",
    incorrectas: [
      "Ser capaz de ganar un set en menos de cinco minutos contra el profesor.",
      "Llevar siempre la raqueta de la marca más cara del mercado."
    ]
  },
  {
    enunciado: "La 'Higiene Postural' en bádminton escolar se trabaja insistiendo en:",
    correcta: "El uso de la flexión de rodillas en lugar de la flexión forzada de la columna para llegar a volantes bajos.",
    incorrectas: [
      "Mantener el brazo de golpeo siempre por encima de la cabeza, incluso al dormir.",
      "Llevar una faja lumbar metálica durante toda la unidad didáctica."
    ]
  },
  {
    enunciado: "La 'Autoconstrucción de Material' en deportes de adversario permite:",
    correcta: "Fabricar raquetas o palas con cartón y perchas para practicar en contextos de bajos recursos.",
    incorrectas: [
      "Que los alumnos fabriquen sus propias armas de esgrima con acero real en el taller.",
      "Ahorrar dinero al centro para que el profesor pueda comprarse un coche nuevo."
    ]
  },
  {
    enunciado: "La 'Familiarización' en deportes de raqueta incluye ejercicios de:",
    correcta: "Malabares y equilibrios con el móvil sobre la cara de la raqueta para mejorar el control táctil.",
    incorrectas: [
      "Correr 5 kilómetros con la raqueta en la mochila sin tocarla.",
      "Aprender de memoria los nombres de todos los campeones de Wimbledon."
    ]
  },
  {
    enunciado: "¿Cómo contribuyen estos deportes a la 'Competencia Ciudadana'?",
    correcta: "Mediante la auto-gestión de los partidos y la resolución autónoma de dudas sobre el reglamento.",
    incorrectas: [
      "Enseñando a los alumnos a votar a favor del capitán más fuerte.",
      "Obligando a los alumnos a cantar el himno del centro antes de cada set."
    ]
  },
  {
    enunciado: "El uso de la 'Video-observación' en la clase de judo permite:",
    correcta: "Que el alumno vea sus propios fallos de equilibrio y los corrija en el siguiente asalto (feedback visual).",
    incorrectas: [
      "Grabar los fallos de los compañeros para subirlos a redes sociales y burlarse de ellos.",
      "Que el profesor pueda ver el partido de fútbol mientras los alumnos entrenan."
    ]
  },
  {
    enunciado: "En la enseñanza del tenis de mesa, una progresión didáctica lógica sería:",
    correcta: "De golpeos contra la pared a golpeos cooperativos sobre la mesa, y finalmente situación de juego.",
    incorrectas: [
      "Empezar por el torneo final y luego explicar cómo se agarra la pala.",
      "No usar pelotas durante las primeras cuatro semanas para mejorar la imaginación."
    ]
  },
  {
    enunciado: "La 'Atención Selectiva' se trabaja en bádminton pidiendo al alumno que:",
    correcta: "Se centre exclusivamente en la base del volante ignorando el movimiento de los brazos del rival.",
    incorrectas: [
      "Intente contar cuántas bombillas hay en el techo del pabellón mientras juega.",
      "Piense en lo que va a comer al salir de clase durante los intercambios."
    ]
  },
  {
    enunciado: "Un reto motriz para la 'Diferenciación Kinestésica' en raqueta sería:",
    correcta: "Golpear el móvil alternando una vez fuerte y otra flojo contra la pared (control de fuerza).",
    incorrectas: [
      "Correr en línea recta sin mirar hacia atrás.",
      "Gritar lo más fuerte posible cada vez que se toca el volante."
    ]
  },
  {
    enunciado: "La 'Educación en Valores' en la lucha escolar prohíbe explícitamente:",
    correcta: "Cualquier gesto o acción que busque humillar o causar dolor innecesario al compañero.",
    incorrectas: [
      "Hablar con el compañero durante el tiempo de descanso entre asaltos.",
      "Sudar más de lo estrictamente necesario para no mojar el suelo."
    ]
  },
  {
    enunciado: "El 'Deporte Adaptado' (ej. tenis en silla de ruedas) se introduce en el aula para:",
    correcta: "Fomentar la empatía y la comprensión de las dificultades y capacidades de otros colectivos.",
    incorrectas: [
      "Hacer que la clase sea más lenta y aburrida para todos.",
      "Castigar a los alumnos que han tenido un mal comportamiento."
    ]
  },
  {
    enunciado: "¿Qué es el 'Espacio de Acción' en la didáctica del bádminton?",
    correcta: "La zona del campo que un alumno puede cubrir con éxito según su envergadura y velocidad.",
    incorrectas: [
      "El área de la cafetería del centro donde se venden raquetas de juguete.",
      "La distancia entre la red y el primer espectador de la grada."
    ]
  },
  {
    enunciado: "La 'Metacognición' se aplica cuando el profesor pregunta al finalizar la sesión:",
    correcta: "¿Qué estrategia táctica te ha funcionado mejor hoy y por qué?",
    incorrectas: [
      "¿A qué hora termina la siguiente clase de matemáticas?",
      "¿Quién ha sido el alumno que ha traído las pelotas más nuevas?"
    ]
  },
  {
    enunciado: "Un factor de seguridad esencial en los juegos de lucha escolar es:",
    correcta: "La existencia de una 'señal de parada' (palmada o palabra) que detenga la acción de inmediato.",
    incorrectas: [
      "Que los alumnos usen casco de moto para protegerse de los golpes.",
      "Prohibir que los alumnos respiren por la boca durante el combate."
    ]
  },
  {
    enunciado: "El 'Modelado Participativo' en la esgrima escolar consiste en:",
    correcta: "El profesor realiza la técnica lentamente mientras el alumno la ejecuta simultáneamente frente a él.",
    incorrectas: [
      "Ver una película de piratas para aprender a usar la espada por instinto.",
      "Dibujar la silueta de un esgrimista en el cuaderno de Educación Física."
    ]
  },
  {
    enunciado: "La 'Resistencia Específica' en estos deportes se trabaja didácticamente mediante:",
    correcta: "Partidos de corta duración con alta intensidad y descansos activos (recoger volantes, etc.).",
    incorrectas: [
      "Carrera continua de 45 minutos alrededor de las pistas de tenis.",
      "Hacer el pino durante 10 minutos seguidos sin moverse."
    ]
  },
  {
    enunciado: "¿Cómo se trabaja la 'Lateralidad' en deportes de raqueta?",
    correcta: "Proponiendo ejercicios con la mano no dominante para mejorar la coordinación ambidiestra y el equilibrio.",
    incorrectas: [
      "Obligando a los alumnos zurdos a jugar como diestros para que no confundan a los demás.",
      "No permitiendo que los alumnos utilicen el lado izquierdo del campo."
    ]
  },
  {
    enunciado: "La 'Flipped Classroom' (aula invertida) aplicada a deportes de adversario permite:",
    correcta: "Que el alumno vea los vídeos técnicos en casa para dedicar el 100% de la clase a la práctica motriz.",
    incorrectas: [
      "Que el profesor dé la clase desde su casa mientras los alumnos juegan solos.",
      "Hacer el examen teórico antes de haber tocado la raqueta."
    ]
  },
  {
    enunciado: "Un indicador de 'Competencia Motriz' en judo escolar es:",
    correcta: "La fluidez en las caídas (Ukemi) demostrando que se protege el cuerpo de forma automática.",
    incorrectas: [
      "El número de veces que el alumno consigue tirar al suelo al profesor.",
      "Tener un cinturón negro comprado en una tienda de disfraces."
    ]
  },
  {
    enunciado: "La 'Orientación Didáctica' hacia la recreación busca:",
    correcta: "Que el alumno perciba el bádminton o el tenis como opciones de ocio activo para su tiempo libre.",
    incorrectas: [
      "Que los alumnos no se tomen en serio las clases y se dediquen a charlar.",
      "Eliminar las redes y las raquetas para jugar solo con las manos."
    ]
  },
  {
    enunciado: "La 'Evaluación Formativa' incluye que el alumno:",
    correcta: "Pueda repetir una prueba técnica tras recibir feedback para demostrar su progreso.",
    incorrectas: [
      "Reciba su nota final el último día de curso sin haber hablado con el profesor antes.",
      "Sea evaluado por un ordenador que cuenta cuántas veces ha parpadeado."
    ]
  },
  {
    enunciado: "En bádminton escolar, se fomenta el juego de 'Dobles' para:",
    correcta: "Mejorar la cooperación en un contexto de oposición y aumentar la participación de alumnos.",
    incorrectas: [
      "Que los alumnos puedan descansar más mientras su compañero corre a por el volante.",
      "Poder meter a 80 alumnos en una sola pista y ahorrar espacio."
    ]
  },
  {
    enunciado: "El 'Calentamiento Específico' para deportes de adversario debe incluir:",
    correcta: "Movilidad articular de muñeca, hombro y tobillo, además de juegos de reacción rápida.",
    incorrectas: [
      "Estiramientos estáticos de 20 minutos sin moverse del sitio.",
      "Comer una bolsa de patatas fritas para tener energía inmediata."
    ]
  },
  {
    enunciado: "La 'Cooperación-Oposición' se puede trabajar en bádminton mediante:",
    correcta: "Retos de mantener el volante en el aire el máximo tiempo posible con el compañero (cooperación).",
    incorrectas: [
      "Intentar darle al compañero en la cara con el volante para que deje de jugar.",
      "Jugar un partido donde el que gana debe dar su almuerzo al que pierde."
    ]
  },
  {
    enunciado: "El fin último de los deportes de adversario en el currículo de Secundaria es:",
    correcta: "Proporcionar herramientas de autorregulación emocional y competencia motriz en situaciones de duelo.",
    incorrectas: [
      "Asegurar que el centro educativo gane todas las medallas en los juegos municipales.",
      "Que todos los alumnos se apunten a clases particulares de tenis al salir de la escuela."
    ]
  }
];