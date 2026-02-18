// -01-epistemologia-de-la-educacion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué autor introdujo el término 'Psicocinética' para definir una educación por el movimiento que utiliza la dinámica corporal como medio de formación de la personalidad?",
    correcta: "Jean Le Boulch",
    incorrectas: ["Pierre Parlebas", "Maurice Merleau-Ponty"]
  },
  {
    enunciado: "En el marco de la Praxiología Motriz, ¿cómo se define la 'Lógica Interna' de una situación motriz?",
    correcta: "Como el sistema de rasgos pertinentes de una situación motriz y las consecuencias que entraña para su realización.",
    incorrectas: ["Como la interpretación subjetiva que el alumno hace de las reglas de un deporte.", "Como el conjunto de variables externas, como el clima o la instalación, que condicionan el éxito."]
  },
  {
    enunciado: "La 'conducta motriz', objeto de estudio de la Educación Física según la corriente francesa moderna, se diferencia del 'movimiento' en que:",
    correcta: "Integra tanto la ejecución biomecánica como la dimensión afectiva, cognitiva y social del individuo.",
    incorrectas: ["Se limita exclusivamente a la cuantificación del desplazamiento en el espacio.", "Es un término puramente médico referido a los reflejos del sistema nervioso central."]
  },
  {
    enunciado: "Según José María Cagigal, la Educación Física debe centrarse en dos realidades antropológicas fundamentales:",
    correcta: "El cuerpo y el movimiento.",
    incorrectas: ["La competición y el rendimiento.", "La higiene y la salud pública."]
  },
  {
    enunciado: "¿Qué corriente epistemológica del siglo XX concibe el cuerpo como una estructura de 'comunicación' y 'expresión' frente al modelo mecanicista?",
    correcta: "La corriente Expresivo-motriz.",
    incorrectas: ["La Escuela Sueca de Pehr Henrik Ling.", "El modelo médico-higienista."]
  },
  {
    enunciado: "La clasificación de las situaciones motrices en función de la incertidumbre (CAI) propuesta por Parlebas, denomina a la interacción con adversarios como:",
    correcta: "Oposición.",
    incorrectas: ["Cooperación.", "Incertidumbre ambiental."]
  },
  {
    enunciado: "¿Cuál es el postulado principal del enfoque sociocultural de la Educación Física?",
    correcta: "Que la práctica motriz es un producto cultural que refleja los valores y estructuras de una sociedad determinada.",
    incorrectas: ["Que el desarrollo motor es un proceso puramente biológico independiente del contexto.", "Que la técnica deportiva es universal y no varía según la cultura."]
  },
  {
    enunciado: "El dualismo cartesiano (res cogitans vs. res extensa) ha influido históricamente en la Educación Física promoviendo:",
    correcta: "Una visión del cuerpo como una máquina subordinada a la mente, priorizando el rendimiento físico sobre el intelectual.",
    incorrectas: ["La integración total del aprendizaje emocional en el currículo de gimnasia.", "El estudio de la motricidad como una manifestación del espíritu humano."]
  },
  {
    enunciado: "¿Qué concepto define Parlebas como la 'intercomunicación motriz entre los participantes de una tarea sociomotriz'?",
    correcta: "Interacción praxiológica.",
    incorrectas: ["Feedback extrínseco.", "Sinergia muscular."]
  },
  {
    enunciado: "La corriente médico-higienista del siglo XIX justificaba la Educación Física en la escuela principalmente para:",
    correcta: "Prevenir enfermedades, corregir deformidades posturales y mejorar la salud nacional.",
    incorrectas: ["Desarrollar la creatividad y la libre expresión de los alumnos.", "Fomentar la cohesión social a través de los deportes de equipo."]
  },
  {
    enunciado: "¿Qué autor es considerado el padre de la Praxiología Motriz?",
    correcta: "Pierre Parlebas",
    incorrectas: ["Jean Piaget", "Kurt Meinel"]
  },
  {
    enunciado: "El concepto de 'Homo Movens' se asocia a la defensa de:",
    correcta: "La importancia del movimiento como una necesidad intrínseca y existencial del ser humano.",
    incorrectas: ["La superioridad de los robots en el análisis cinemático.", "La evolución del hombre hacia el sedentarismo tecnológico."]
  },
  {
    enunciado: "En la evolución de la Educación Física, el paso del 'ejercicio' a la 'tarea motriz' implica:",
    correcta: "Un mayor énfasis en la intencionalidad, el objetivo y el procesamiento de información por parte del alumno.",
    incorrectas: ["La simplificación de los movimientos para que no requieran esfuerzo mental.", "El abandono de cualquier tipo de estructura didáctica."]
  },
  {
    enunciado: "¿Cuál es la principal característica del 'Método Natural' de Georges Hébert?",
    correcta: "La realización de gestos utilitarios (correr, saltar, trepar) en un entorno natural y de forma global.",
    incorrectas: ["El uso de pesas y poleas para aislar grupos musculares específicos.", "La repetición de coreografías rítmicas con música clásica."]
  },
  {
    enunciado: "La fenomenología de Merleau-Ponty aporta a la Educación Física la idea de:",
    correcta: "El cuerpo-sujeto: no 'tenemos' un cuerpo, sino que 'somos' un cuerpo que percibe el mundo.",
    incorrectas: ["El cuerpo-objeto: el organismo como un conjunto de palancas biomecánicas.", "La mente como un procesador de datos desconectado de la sensibilidad."]
  },
  {
    enunciado: "¿Qué término define la capacidad de un sujeto para realizar acciones motrices eficaces en diversos contextos?",
    correcta: "Competencia motriz.",
    incorrectas: ["Potencia metabólica.", "Habilidad analítica."]
  },
  {
    enunciado: "La corriente psicomotriz de Vayer y Lapierre se centra especialmente en:",
    correcta: "La reeducación y el desarrollo de la personalidad a través de la vivencia corporal y el juego simbólico.",
    incorrectas: ["El entrenamiento de la resistencia aeróbica en la infancia.", "El aprendizaje de reglamentos deportivos internacionales."]
  },
  {
    enunciado: "En el análisis de la lógica interna, el 'Rol Motor' se refiere a:",
    correcta: "El estatus y las posibilidades de acción de un jugador según el reglamento (ej. portero vs. atacante).",
    incorrectas: ["La función social que el alumno desempeña en su grupo de amigos.", "La contracción concéntrica de un músculo agonista."]
  },
  {
    enunciado: "¿Cuál fue la principal aportación de Thomas Arnold a la Educación Física moderna?",
    correcta: "La introducción de los juegos deportivos reglados en el sistema educativo como medio de control moral y social.",
    incorrectas: ["La invención de la gimnasia sueca de aparatos.", "El desarrollo de los primeros tests de condición física."]
  },
  {
    enunciado: "El paradigma cognitivo en el aprendizaje motor postula que el alumno es:",
    correcta: "Un procesador activo de información que toma decisiones basadas en la percepción y la memoria.",
    incorrectas: ["Un receptor pasivo que solo reacciona ante estímulos externos.", "Un organismo que solo aprende por imitación refleja sin intervención cortical."]
  },
  {
    enunciado: "La diferencia fundamental entre 'Deporte' y 'Juego' en la terminología praxiológica es:",
    correcta: "El deporte es una situación motriz institucionalizada y competitiva con reglas federativas.",
    incorrectas: ["El juego es siempre físico y el deporte puede ser sedentario.", "No existe diferencia; ambos términos son intercambiables en ciencia."]
  },
  {
    enunciado: "¿Qué autor definió la Educación Física como 'la educación de la inteligencia a través del movimiento'?",
    correcta: "Jean Le Boulch",
    incorrectas: ["Sigmund Freud", "Noam Chomsky"]
  },
  {
    enunciado: "La 'Cultura Física' a principios del siglo XX en España estaba muy ligada a:",
    correcta: "El regeneracionismo y la mejora de la raza y la salud de la población.",
    incorrectas: ["La profesionalización del fútbol de élite.", "La estética del culturismo moderno."]
  },
  {
    enunciado: "¿Cómo se denomina a la comunicación no verbal, mediante gestos o movimientos, que se produce en una situación sociomotriz?",
    correcta: "Comunicación praxiológica (gestemas y praxemas).",
    incorrectas: ["Lenguaje de signos.", "Feedback intrínseco."]
  },
  {
    enunciado: "La corriente deportiva 'inglesa' del XIX se oponía a las 'gimnasias' continentales por ser:",
    correcta: "Más lúdica, competitiva y basada en la iniciativa individual y grupal.",
    incorrectas: ["Más rígida, militarizada y basada en la repetición de órdenes.", "Menos interesada en la formación del carácter."]
  },
  {
    enunciado: "En el contexto de la Educación Física, la 'epistemología' se encarga de:",
    correcta: "Estudiar los fundamentos, el origen y la validez del conocimiento científico en esta área.",
    incorrectas: ["Diseñar ejercicios para mejorar el salto vertical.", "Contabilizar el número de alumnos que aprueban la materia."]
  },
  {
    enunciado: "La 'Pedagogía de las conductas motrices' busca:",
    correcta: "Intervenir sobre la persona que se mueve, no solo sobre el movimiento en sí.",
    incorrectas: ["Automatizar gestos técnicos mediante la repetición infinita.", "Eliminar el componente lúdico de la enseñanza."]
  },
  {
    enunciado: "El concepto de 'Acción Motriz' es central en la obra de Parlebas porque:",
    correcta: "Permite unificar bajo un mismo objeto de estudio actividades tan diversas como el deporte, el mimo o la danza.",
    incorrectas: ["Es el único término que reconoce la importancia de la nutrición.", "Se refiere exclusivamente a las acciones de los músculos lisos."]
  },
  {
    enunciado: "La 'Gimnasia Sueca' se centraba en ejercicios de tipo:",
    correcta: "Analítico, correctivo y con un fuerte componente postural y ortopédico.",
    incorrectas: ["Global, espontáneo y sin ninguna estructura previa.", "Exclusivamente acrobático y de riesgo."]
  },
  {
    enunciado: "¿Qué filósofo es la referencia principal para la corriente existencialista en Educación Física?",
    correcta: "Jean-Paul Sartre",
    incorrectas: ["Immanuel Kant", "Aristóteles"]
  },
  {
    enunciado: "La 'Socio-motricidad' implica necesariamente:",
    correcta: "Una interacción motriz con al menos un compañero o un adversario.",
    incorrectas: ["La práctica de ejercicio en una zona urbana con mucha población.", "El estudio de la sociología de las gradas en los estadios."]
  },
  {
    enunciado: "En el modelo de 'Educación Física de Base', el objetivo es:",
    correcta: "Adquirir un amplio repertorio motor y un esquema corporal bien estructurado antes de la especialización.",
    incorrectas: ["Entrenar para ganar los campeonatos escolares a edades tempranas.", "Memorizar la historia de los Juegos Olímpicos."]
  },
  {
    enunciado: "La 'Transferencia' en el aprendizaje motor es la influencia de:",
    correcta: "Un aprendizaje previo sobre la ejecución de una nueva tarea motriz.",
    incorrectas: ["La temperatura ambiental sobre el rendimiento muscular.", "El dinero de un patrocinador en un club deportivo."]
  },
  {
    enunciado: "¿Qué autor critica el deporte institucionalizado por considerarlo un 'aparato ideológico del Estado'?",
    correcta: "Jean-Marie Brohm",
    incorrectas: ["José María Cagigal", "Pierre de Coubertin"]
  },
  {
    enunciado: "La corriente 'Rítmica' en la Educación Física surge como respuesta a:",
    correcta: "La excesiva rigidez de las gimnasias militares y la búsqueda de la armonía estética y musical.",
    incorrectas: ["La necesidad de correr más rápido en las pruebas de atletismo.", "El deseo de las empresas de calzado deportivo de vender más productos."]
  },
  {
    enunciado: "El concepto de 'Lúdico' se diferencia de 'Trabajo' en que el primero es:",
    correcta: "Autotélico: tiene el fin en sí mismo y se realiza de forma libre y placentera.",
    incorrectas: ["Productivo: busca la creación de un bien material.", "Obligatorio: se realiza bajo amenaza de sanción."]
  },
  {
    enunciado: "La 'Ciencia del movimiento humano' según los enfoques modernos debe ser:",
    correcta: "Interdisciplinar, integrando aportes de la fisiología, psicología, sociología y pedagogía.",
    incorrectas: ["Única y cerrada, rechazando cualquier aporte de otras ciencias.", "Basada exclusivamente en la observación subjetiva del docente."]
  },
  {
    enunciado: "En la clasificación CAI, una carrera de 100 metros lisos en atletismo se clasifica como:",
    correcta: "Psicomotriz (acción en solitario en medio estable).",
    incorrectas: ["Sociomotriz de cooperación.", "Situación de alta incertidumbre ambiental."]
  },
  {
    enunciado: "La Educación Física escolar actual en España se fundamenta en un modelo:",
    correcta: "Competencial, orientado hacia la autonomía motriz y la salud integral.",
    incorrectas: ["Rendimentista, centrado en la selección de deportistas de élite.", "Higienista, centrado solo en la ausencia de enfermedad."]
  },
  {
    enunciado: "¿Qué autor integra el concepto de 'Inteligencia Kinestésica' en su teoría de las Inteligencias Múltiples?",
    correcta: "Howard Gardner",
    incorrectas: ["Daniel Goleman", "Albert Bandura"]
  }
];