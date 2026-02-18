// 46-la-dramatizacion.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué diferencia fundamental existe entre la 'Dramatización' y el 'Teatro' en el ámbito educativo?",
    correcta: "La dramatización se centra en el proceso creativo y el desarrollo personal del alumno, mientras que el teatro prioriza el producto final y la exhibición ante el público.",
    incorrectas: [
      "El teatro no utiliza el cuerpo y la dramatización sí.",
      "La dramatización es obligatoria para ser actor profesional y el teatro es una actividad de tiempo libre."
    ]
  },
  {
    enunciado: "En el lenguaje del gesto, ¿qué es un 'Gesto Emblemático'?",
    correcta: "Un gesto que tiene una traducción verbal directa y es comprendido por todos los miembros de una cultura (ej. el signo de OK).",
    incorrectas: [
      "Un movimiento involuntario que se realiza al sentir dolor físico.",
      "La capacidad de dibujar emblemas y escudos utilizando los dedos de los pies."
    ]
  },
  {
    enunciado: "La 'Postura' como elemento dramático transmite información sobre:",
    correcta: "El estatus social del personaje, su estado emocional y su actitud ante los demás participantes.",
    incorrectas: [
      "La marca de la ropa que el alumno ha decidido comprar para la sesión.",
      "El número exacto de vértebras que tiene el alumno en la zona lumbar."
    ]
  },
  {
    enunciado: "¿Cuál es la técnica básica del 'Mimo' clásico?",
    correcta: "La creación de objetos e invisible mediante la resistencia muscular y la segmentación corporal.",
    incorrectas: [
      "Hablar muy alto para que el público entienda lo que el personaje está pensando.",
      "Utilizar exclusivamente máscaras de madera pesadas que oculten todo el cuerpo."
    ]
  },
  {
    enunciado: "En la LOMLOE, la dramatización en Educación Física contribuye especialmente a:",
    correcta: "La competencia en conciencia y expresión culturales y al desarrollo de la empatía.",
    incorrectas: [
      "La mejora de la fuerza máxima del cuádriceps mediante saltos explosivos.",
      "La memorización de las leyes de la física aplicadas a la luz del escenario."
    ]
  },
  {
    enunciado: "¿Qué es el 'Teatro de Sombras' como recurso didáctico?",
    correcta: "Una técnica que utiliza una fuente de luz y una pantalla para proyectar la silueta del cuerpo o de objetos.",
    incorrectas: [
      "Un juego que consiste en perseguir la sombra de los compañeros en el patio a pleno sol.",
      "Una técnica de estudio que requiere apagar todas las luces de la biblioteca."
    ]
  },
  {
    enunciado: "La 'Improvisación Dramática' busca que el alumno:",
    correcta: "Resuelva situaciones imprevistas de forma espontánea utilizando sus recursos expresivos.",
    incorrectas: [
      "Lea un guion escrito por el profesor de forma monótona y sin moverse.",
      "Se quede quieto en el centro del gimnasio esperando a que termine la clase."
    ]
  },
  {
    enunciado: "En la técnica de la 'Máscara Neutra', el objetivo es:",
    correcta: "Anular la expresión facial para potenciar la expresividad de todo el cuerpo y el movimiento global.",
    incorrectas: [
      "Aprender a fabricar máscaras con materiales reciclados y pegamento industrial.",
      "Proteger la cara de posibles golpes accidentales durante la sesión de Educación Física."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Conflicto' en una estructura dramática?",
    correcta: "Es el motor de la acción; el enfrentamiento entre dos fuerzas o deseos que hace avanzar la historia.",
    incorrectas: [
      "Es algo negativo que el profesor debe evitar para que los alumnos no se peleen.",
      "Se refiere al ruido que hacen los alumnos cuando no quieren recoger el material."
    ]
  },
  {
    enunciado: "La 'Relajación' previa a la dramatización es necesaria para:",
    correcta: "Lograr la disponibilidad corporal y mental, eliminando tensiones que bloqueen la expresión.",
    incorrectas: [
      "Dormir durante los primeros 40 minutos de la clase para ahorrar energía.",
      "Que los alumnos dejen de respirar para no empañar los espejos del gimnasio."
    ]
  },
  {
    enunciado: "El 'Juego de Rol' (Role-Playing) se utiliza en la escuela para:",
    correcta: "Ensayar respuestas ante situaciones sociales reales y comprender diferentes puntos de vista.",
    incorrectas: [
      "Que los alumnos elijan quién quiere ser el profesor y quién el director del centro.",
      "Aprender a jugar a videojuegos de rol durante el horario lectivo."
    ]
  },
  {
    enunciado: "En la dramatización, el 'Espacio Imaginario' se crea mediante:",
    correcta: "La actitud de los actores y el uso simbólico de los objetos y el movimiento.",
    incorrectas: [
      "La construcción de muros de ladrillo real dentro del pabellón deportivo.",
      "El uso de gafas de realidad virtual que impiden ver a los compañeros."
    ]
  },
  {
    enunciado: "La 'Pantalla' en el teatro de sombras debe ser:",
    correcta: "De un material traslúcido que permita pasar la luz pero no ver directamente al actor.",
    incorrectas: [
      "De metal opaco y muy grueso para que nadie pueda ver nada de lo que ocurre detrás.",
      "Una pantalla de televisión de 100 pulgadas conectada a internet."
    ]
  },
  {
    enunciado: "¿Qué es el 'Estatus' de un personaje en una escena dramática?",
    correcta: "La posición de poder o debilidad que ocupa un personaje respecto a los demás, expresada corporalmente.",
    incorrectas: [
      "La cantidad de seguidores que el alumno tiene en sus redes sociales personales.",
      "El resultado de la suma de las notas de todas las asignaturas del curso."
    ]
  },
  {
    enunciado: "La técnica de 'Coros' en dramatización consiste en:",
    correcta: "Un grupo de alumnos que se mueven o hablan al unísono para representar una idea o una fuerza colectiva.",
    incorrectas: [
      "Cantar canciones de ópera mientras se realizan abdominales intensos.",
      "Correr en círculos alrededor del profesor mientras se silba una melodía."
    ]
  },
  {
    enunciado: "La 'Desinhibición' en este bloque es fundamental porque:",
    correcta: "Permite al alumno exponerse ante los demás sin el bloqueo del sentido del ridículo.",
    incorrectas: [
      "Hace que los alumnos pierdan el respeto a las normas del centro educativo.",
      "Sirve para que los alumnos griten lo más fuerte posible sin motivo alguno."
    ]
  },
  {
    enunciado: "Un ejercicio de 'Títeres Humanos' trabaja:",
    correcta: "La segmentación corporal, la entrega del peso y la confianza en el compañero que guía.",
    incorrectas: [
      "La fuerza de los dedos de la mano al tirar de cuerdas invisibles.",
      "La capacidad de coser ropa para muñecos de trapo de tamaño real."
    ]
  },
  {
    enunciado: "El 'Ritmo Dramático' es la alternancia entre:",
    correcta: "Momentos de tensión y relajación, o de acción y pausa, que mantienen el interés de la escena.",
    incorrectas: [
      "La velocidad a la que el profesor pasa de una diapositiva a otra en la explicación.",
      "El número de veces que un alumno parpadea cuando está nervioso."
    ]
  },
  {
    enunciado: "En la LOMLOE, la evaluación de la dramatización debe valorar:",
    correcta: "La originalidad, la expresividad corporal y la capacidad de trabajo en equipo.",
    incorrectas: [
      "Si el alumno es capaz de llorar de forma real en menos de diez segundos.",
      "La calidad del vestuario comprado en tiendas de disfraces profesionales."
    ]
  },
  {
    enunciado: "¿Qué es el 'Subtexto' en una acción dramática?",
    correcta: "Lo que el personaje piensa o siente pero no dice explícitamente, revelado a través del cuerpo.",
    incorrectas: [
      "El título de la obra escrito en la parte inferior de la página del libro.",
      "Las instrucciones que el profesor escribe en la pizarra para que los alumnos copien."
    ]
  },
  {
    enunciado: "La 'Escucha' en dramatización no es solo auditiva, sino también:",
    correcta: "Corporal; estar atento a las señales físicas y cambios de energía de los compañeros de escena.",
    incorrectas: [
      "Química; ser capaz de oler el perfume de los demás a gran distancia.",
      "Matemática; contar los pasos que da el compañero para imitarlos exactamente."
    ]
  },
  {
    enunciado: "El 'Mimo Narrativo' se diferencia del 'Mimo Abstracto' en que el primero:",
    correcta: "Cuenta una historia con principio, nudo y desenlace a través de acciones reconocibles.",
    incorrectas: [
      "Utiliza palabras complejas y el segundo solo utiliza sonidos de animales.",
      "Está prohibido en la escuela por ser demasiado aburrido para los adolescentes."
    ]
  },
  {
    enunciado: "La 'Adaptación' de la dramatización para alumnos con timidez extrema requiere:",
    correcta: "Empezar por trabajos grupales, sombras o máscaras que oculten la identidad individual inicialmente.",
    incorrectas: [
      "Obligar al alumno a realizar un monólogo cómico frente a todo el instituto.",
      "Ignorar al alumno y no dejarle participar en ninguna actividad de la unidad."
    ]
  },
  {
    enunciado: "El 'Gesto Regulador' sirve para:",
    correcta: "Mantener o finalizar el turno de palabra en una interacción (ej. levantar la mano).",
    incorrectas: [
      "Ajustar la temperatura del aire acondicionado del gimnasio con el movimiento de los ojos.",
      "Indicar que el balón ha salido por la línea de fondo en un partido de fútbol."
    ]
  },
  {
    enunciado: "La 'Concentración' en el actor-alumno permite:",
    correcta: "Mantener la creencia en la situación imaginaria y no distraerse con el público o el entorno.",
    incorrectas: [
      "Aumentar la fuerza de los músculos del cuello para sostener la cabeza recta.",
      "Poder leer tres libros al mismo tiempo mientras se camina por el patio."
    ]
  },
  {
    enunciado: "Un indicador de 'Competencia Motriz' en dramatización es:",
    correcta: "La capacidad de controlar el tono muscular (disociación) y la fluidez gestual.",
    incorrectas: [
      "Ser capaz de correr 100 metros en menos de 12 segundos sin sudar.",
      "Tener un canal de video con muchos seguidores viendo imitaciones de famosos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Situación de Aprendizaje' en dramatización?",
    correcta: "Un reto creativo (ej. 'sobrevivir en una isla desierta') que activa los recursos expresivos.",
    incorrectas: [
      "El momento en que los alumnos se sientan a escuchar la teoría del profesor.",
      "Un examen de 50 preguntas sobre la historia del teatro griego antiguo."
    ]
  },
  {
    enunciado: "La 'Dramatización de Textos' literarios ayuda a:",
    correcta: "La comprensión lectora, el análisis de personajes y la expresión oral y corporal.",
    incorrectas: [
      "Que los alumnos no tengan que leer libros y solo miren los dibujos de las portadas.",
      "Sustituir la asignatura de Lengua y Literatura por la de Educación Física."
    ]
  },
  {
    enunciado: "El 'Lenguaje del Rostro' se divide en zonas expresivas. ¿Cuál es la zona de mayor carga emocional?",
    correcta: "La zona ocular (ojos y cejas) y la zona bucal (boca y mandíbula).",
    incorrectas: [
      "Las orejas y la parte posterior del cráneo donde crece el pelo.",
      "La punta de la nariz y los lóbulos de las orejas exclusivamente."
    ]
  },
  {
    enunciado: "La 'Improvisación con Objetos' consiste en:",
    correcta: "Dar un uso no convencional a un objeto cotidiano (ej. un paraguas que es una flauta).",
    incorrectas: [
      "Lanzar objetos a los compañeros para ver quién tiene mejores reflejos.",
      "Esconder el material deportivo para que el profesor no pueda dar la clase."
    ]
  },
  {
    enunciado: "La 'Postura Abierta' (pecho expandido, brazos relajados) suele indicar:",
    correcta: "Confianza, acogida, seguridad o estatus dominante.",
    incorrectas: [
      "Miedo, rechazo, inseguridad o ganas de salir corriendo del lugar.",
      "Que el alumno tiene mucha hambre y necesita comer de forma inmediata."
    ]
  },
  {
    enunciado: "¿Qué es el 'Tableau Vivant' (cuadro vivo)?",
    correcta: "Una técnica donde los alumnos forman una imagen estática con sus cuerpos representando una escena.",
    incorrectas: [
      "Una competición de pintura donde se dibuja a los compañeros mientras corren.",
      "Un tipo de mesa muy resistente que se utiliza en los teatros profesionales."
    ]
  },
  {
    enunciado: "La 'Dramatización Creativa' de Ward propone que el profesor actúe como:",
    correcta: "Guía y estimulador, participando a veces en el juego para dinamizar la acción.",
    incorrectas: [
      "Un juez severo que castiga cualquier movimiento que no esté en el guion.",
      "Un espectador pasivo que se limita a grabar la sesión con el teléfono móvil."
    ]
  },
  {
    enunciado: "Un factor de seguridad en el teatro de sombras es:",
    correcta: "Controlar la temperatura de los focos y evitar cables sueltos por los que se pueda tropezar.",
    incorrectas: [
      "Que los alumnos lleven gafas de sol para no ver su propia sombra proyectada.",
      "Prohibir que la pantalla sea de color blanco para no cansar la vista del público."
    ]
  },
  {
    enunciado: "La 'Voz' en la dramatización escolar se trabaja mediante:",
    correcta: "La proyección, la articulación y la intención comunicativa vinculada al gesto.",
    incorrectas: [
      "Gritar lo más fuerte posible hasta que las cuerdas vocales se hinchen.",
      "Hablar siempre en un idioma inventado que nadie pueda entender."
    ]
  },
  {
    enunciado: "La 'Empatía' se desarrolla en este bloque al:",
    correcta: "Ponerse en la piel de personajes con realidades y sentimientos distintos a los propios.",
    incorrectas: [
      "Hacer que los alumnos se rían de los problemas de los personajes de ficción.",
      "Obligar a todos los alumnos a pensar exactamente lo mismo sobre un tema."
    ]
  },
  {
    enunciado: "La 'Sincronización' en el trabajo de dúos dramáticos requiere:",
    correcta: "Un ajuste constante del tiempo y el espacio compartido mediante la observación mutua.",
    incorrectas: [
      "Que ambos alumnos lleven relojes digitales que piten al mismo tiempo.",
      "Que el profesor cuente en voz alta cada segundo de la representación."
    ]
  },
  {
    enunciado: "Un objetivo de la dramatización en el Bachillerato es:",
    correcta: "La creación de montajes colectivos que denuncien problemas sociales o exploren temas abstractos.",
    incorrectas: [
      "La memorización de todos los nombres de los teatros de la ciudad de Madrid.",
      "La capacidad de actuar en películas de Hollywood sin haber estudiado nunca."
    ]
  },
  {
    enunciado: "La 'Metacognición' se aplica cuando el alumno reflexiona sobre:",
    correcta: "¿Qué recursos corporales he utilizado para que el público entendiera que mi personaje estaba triste?",
    incorrectas: [
      "¿Cuántas calorías he quemado mientras estaba sentado esperando mi turno?",
      "¿Qué marca de maquillaje es la más resistente al sudor del gimnasio?"
    ]
  },
  {
    enunciado: "El fin último de la dramatización en el currículo de Secundaria es:",
    correcta: "Dotar al alumno de herramientas comunicativas, seguridad personal y capacidad crítica y creativa.",
    incorrectas: [
      "Que todos los alumnos se presenten a pruebas de selección para anuncios de televisión.",
      "Sustituir todas las palabras del mundo por un lenguaje de gestos y sombras."
    ]
  }
];