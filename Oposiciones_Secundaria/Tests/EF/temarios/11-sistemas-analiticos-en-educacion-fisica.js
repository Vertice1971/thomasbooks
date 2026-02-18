
// -11-sistemas-analiticos-en-educacion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la característica principal de los sistemas analíticos en Educación Física?",
    correcta: "La fragmentación del movimiento en partes y el aislamiento de grupos musculares o articulaciones.",
    incorrectas: ["La realización de juegos globales y espontáneos en el patio.", "La búsqueda de la expresión emocional libre a través del cuerpo."]
  },
  {
    enunciado: "El máximo exponente histórico de la Escuela Sueca y del sistema analítico fue:",
    correcta: "Pehr Henrik Ling",
    incorrectas: ["Georges Hébert", "Thomas Arnold"]
  },
  {
    enunciado: "¿Qué objetivo primordial perseguía la gimnasia analítica de P.H. Ling?",
    correcta: "La corrección postural, la salud y el desarrollo ortopédico armonioso.",
    incorrectas: ["La preparación para la guerra de guerrillas en la selva.", "El fomento del deporte espectáculo y profesional."]
  },
  {
    enunciado: "La Escuela Sueca se dividía originalmente en cuatro ramas. ¿Cuáles eran?",
    correcta: "Pedagógica, militar, médica y estética.",
    incorrectas: ["Fútbol, baloncesto, tenis y natación.", "Infantil, primaria, secundaria y universidad."]
  },
  {
    enunciado: "En los sistemas analíticos, los ejercicios se organizan técnicamente mediante:",
    correcta: "Posiciones de partida, ejes de movimiento y planos anatómicos estrictos.",
    incorrectas: ["La improvisación total según el estado de ánimo del alumno.", "El uso exclusivo de entornos naturales no estables."]
  },
  {
    enunciado: "Un elemento distintivo de la gimnasia analítica sueca es el uso de:",
    correcta: "Aparatos fijos como las espalderas, el plinto y el banco sueco.",
    incorrectas: ["Balones de reglamento de la FIFA.", "Gafas de realidad virtual para simular el esfuerzo."]
  },
  {
    enunciado: "¿Cómo evolucionó el sistema analítico con la 'Gimnasia Neosueca' de Niels Bukh?",
    correcta: "Introdujo el dinamismo, el ritmo y la continuidad frente a las posiciones estáticas originales.",
    incorrectas: ["Eliminó el ejercicio físico por completo en favor de la meditación.", "Se centró exclusivamente en el levantamiento de piedras de gran tamaño."]
  },
  {
    enunciado: "La aplicación actual de los sistemas analíticos en el fitness se manifiesta en:",
    correcta: "El entrenamiento de musculación con máquinas de aislamiento y poleas.",
    incorrectas: ["Las carreras de orientación por el bosque.", "Los juegos cooperativos con paracaídas."]
  },
  {
    enunciado: "En Educación Física escolar, los sistemas analíticos se utilizan principalmente para:",
    correcta: "La higiene postural, el calentamiento dirigido y la reeducación funcional.",
    incorrectas: ["Fomentar la creatividad y el pensamiento divergente.", "Enseñar la táctica del contraataque en balonmano."]
  },
  {
    enunciado: "Una crítica común a los sistemas analíticos tradicionales es:",
    correcta: "Su carácter monótono, rígido y la falta de transferencia a las acciones motrices globales.",
    incorrectas: ["Que son demasiado peligrosos y causan muchas caídas.", "Que requieren que los alumnos hablen demasiado entre ellos."]
  },
  {
    enunciado: "¿Qué autor introdujo el 'Tablado sueco' como progresión de ejercicios ordenados?",
    correcta: "Hjalmar Ling (hijo de P.H. Ling)",
    incorrectas: ["César Coll", "José María Cagigal"]
  },
  {
    enunciado: "En los sistemas analíticos, la progresión del ejercicio se basa en:",
    correcta: "Aumentar la palanca, la resistencia o la complejidad de la posición inicial.",
    incorrectas: ["Correr cada día un kilómetro más rápido.", "Cambiar de compañero de equipo cada cinco minutos."]
  },
  {
    enunciado: "La gimnasia analítica sueca llegó a España influyendo notablemente en:",
    correcta: "Los reglamentos de gimnasia escolar de principios del siglo XX y la cartilla gimnástica infantil.",
    incorrectas: ["La creación de la liga profesional de baloncesto.", "El desarrollo de la danza flamenca."]
  },
  {
    enunciado: "El concepto de 'Gimnasia correctiva' es heredero de:",
    correcta: "La rama médica de la escuela sueca.",
    incorrectas: ["El método natural francés.", "El sistema deportivo inglés."]
  },
  {
    enunciado: "En el sistema analítico, el profesor ejerce un rol de:",
    correcta: "Mando directo, corrigiendo meticulosamente la ejecución técnica y la postura.",
    incorrectas: ["Mero espectador que no interviene en la sesión.", "Animador sociocultural que solo busca la diversión."]
  },
  {
    enunciado: "Los sistemas analíticos actuales en Secundaria se vinculan a la salud mediante:",
    correcta: "El trabajo compensatorio de las descompensaciones musculares por posturas sedentarias.",
    incorrectas: ["La preparación para maratones de montaña.", "El aprendizaje de técnicas de boxeo recreativo."]
  },
  {
    enunciado: "¿Qué aparato sueco fue diseñado específicamente para favorecer la extensión de la columna y la expansión torácica?",
    correcta: "Las espalderas.",
    incorrectas: ["El trampolín.", "La colchoneta de caída."]
  },
  {
    enunciado: "La 'Gimnasia de Mantenimiento' es una aplicación moderna de:",
    correcta: "Los principios analíticos adaptados a la población general.",
    incorrectas: ["Los juegos tradicionales de lanzamiento.", "La técnica de la natación sincronizada."]
  },
  {
    enunciado: "En la estructura de una sesión analítica tradicional, los ejercicios se ordenan de:",
    correcta: "Céfalo a caudal (de la cabeza a los pies) o de extremidades a tronco.",
    incorrectas: ["De mayor a menor diversión según los alumnos.", "De forma aleatoria sorteando los ejercicios."]
  },
  {
    enunciado: "La 'Flexibilidad' en los sistemas analíticos se trabaja preferentemente mediante:",
    correcta: "Estiramientos estáticos y controlados de grupos musculares específicos.",
    incorrectas: ["Lanzamientos globales y movimientos balísticos incontrolados.", "Permanecer de pie sin moverse durante horas."]
  },
  {
    enunciado: "Los sistemas analíticos consideran el cuerpo como:",
    correcta: "Una suma de palancas y segmentos que deben ser fortalecidos y equilibrados por separado.",
    incorrectas: ["Un ente místico que no necesita ejercicio físico.", "Una unidad indisoluble que solo debe moverse de forma global."]
  },
  {
    enunciado: "¿Qué caracteriza a los ejercicios de 'Orden' en la gimnasia analítica?",
    correcta: "La formación de filas, columnas y la respuesta inmediata a voces de mando.",
    incorrectas: ["La capacidad de los alumnos para ordenar su habitación.", "El estudio de la clasificación biológica de los animales."]
  },
  {
    enunciado: "La aplicación de sistemas analíticos en el alto rendimiento deportivo sirve para:",
    correcta: "Prevenir lesiones y fortalecer puntos débiles detectados biomecánicamente.",
    incorrectas: ["Sustituir el entrenamiento técnico por gimnasia sueca pura.", "Hacer que los atletas se aburran antes de la competición."]
  },
  {
    enunciado: "En la LOMLOE, los sistemas analíticos pueden ser útiles para trabajar el saber básico de:",
    correcta: "Salud y bienestar, específicamente en la prevención de patologías posturales.",
    incorrectas: ["Cultura motriz y juegos tradicionales.", "Interacción eficiente en medios variables."]
  },
  {
    enunciado: "La 'Cinesiterapia' tiene sus fundamentos científicos en:",
    correcta: "La rama médica de los sistemas analíticos.",
    incorrectas: ["El teatro y la dramatización escolar.", "La física de partículas."]
  },
  {
    enunciado: "¿Qué diferencia a la 'Gimnasia Neosueca' de la 'Sueca tradicional' respecto al esfuerzo?",
    correcta: "La neosueca busca la fluidez y la economía de esfuerzo frente a la rigidez y tensión de la tradicional.",
    incorrectas: ["La neosueca requiere el uso de electricidad.", "La neosueca solo se puede practicar bajo el agua."]
  },
  {
    enunciado: "Un ejercicio analítico de 'fortalecimiento del CORE' en Secundaria busca:",
    correcta: "La estabilidad lumbopélvica mediante la activación dirigida de la musculatura profunda del tronco.",
    incorrectas: ["Aumentar el tamaño de los brazos para mejorar el lanzamiento de peso.", "Correr 5 kilómetros en menos de 20 minutos."]
  },
  {
    enunciado: "Los sistemas analíticos fueron criticados por la 'Escuela de la Reforma' por ser:",
    correcta: "Antipedagógicos, al no tener en cuenta el interés lúdico y la psicología del niño.",
    incorrectas: ["Demasiado modernos y tecnológicos para la época.", "Excesivamente fáciles y sin ningún tipo de esfuerzo."]
  },
  {
    enunciado: "En la actualidad, los sistemas analíticos se integran en EF mediante:",
    correcta: "Micro-sesiones de higiene postural o estiramientos al final de la clase.",
    incorrectas: ["Clases enteras de 60 minutos de gimnasia sueca estricta.", "La prohibición de utilizar balones."]
  },
  {
    enunciado: "La técnica de 'Pilates' comparte con los sistemas analíticos:",
    correcta: "El enfoque en el control preciso del movimiento, la respiración y la alineación postural.",
    incorrectas: ["La realización de sprints de alta velocidad sobre arena.", "El uso de grandes pesos en máquinas de gimnasio."]
  },
  {
    enunciado: "¿Qué autor sueco introdujo el 'Sistema de Gimnasia Racional' basándose en la anatomía?",
    correcta: "Pehr Henrik Ling",
    incorrectas: ["Isaac Newton", "Charles Darwin"]
  },
  {
    enunciado: "La gimnasia analítica en el siglo XIX también tenía un objetivo:",
    correcta: "Militar, para preparar soldados disciplinados y físicamente aptos.",
    incorrectas: ["Recreativo, para organizar fiestas en el pueblo.", "Ecológico, para plantar árboles."]
  },
  {
    enunciado: "Un ejercicio analítico de 'flexión de codo con mancuerna' analiza principalmente el músculo:",
    correcta: "Bíceps braquial.",
    incorrectas: ["Tríceps braquial.", "Cuádriceps femoral."]
  },
  {
    enunciado: "La evolución de los sistemas analíticos hacia la 'Gimnasia Formativa' busca:",
    correcta: "El desarrollo físico equilibrado como base para cualquier otra actividad deportiva.",
    incorrectas: ["La especialización en un solo gesto técnico desde la infancia.", "La eliminación de cualquier tipo de ejercicio de fuerza."]
  },
  {
    enunciado: "En Secundaria, los sistemas analíticos ayudan a los alumnos a:",
    correcta: "Tomar conciencia de sus propios desequilibrios y aprender a corregirlos de forma autónoma.",
    incorrectas: ["Competir entre ellos por ver quién es más rígido.", "Memorizar el nombre de todos los aparatos suecos en latín."]
  },
  {
    enunciado: "La 'Calistenia' moderna, aunque global, utiliza principios analíticos para:",
    correcta: "Progresar en la dificultad de los ejercicios modificando los brazos de palanca corporal.",
    incorrectas: ["Comprar material caro en tiendas especializadas.", "Hacer ejercicio solo por la noche."]
  },
  {
    enunciado: "Un principio de la gimnasia analítica es la 'aislamiento' que pretende:",
    correcta: "Evitar compensaciones o movimientos parásitos de otras articulaciones no deseadas.",
    incorrectas: ["Que el alumno entrene solo en una habitación cerrada.", "No hablar con nadie durante la sesión."]
  },
  {
    enunciado: "La rama 'Estética' de la escuela sueca es el germen de:",
    correcta: "La gimnasia rítmica y la expresión corporal reglada.",
    incorrectas: ["El fútbol americano.", "Las carreras de Fórmula 1."]
  },
  {
    enunciado: "Los sistemas analíticos en EF escolar deben aplicarse de forma que:",
    correcta: "El alumno comprenda el 'para qué' del ejercicio (funcionalidad y salud).",
    incorrectas: ["El alumno repita sin pensar las órdenes del profesor.", "El alumno se agote físicamente hasta el desmayo."]
  },
  {
    enunciado: "La vigencia de Pehr Henrik Ling hoy se reconoce por su visión de la gimnasia como:",
    correcta: "Un medio preventivo y terapéutico basado en el conocimiento científico del cuerpo.",
    incorrectas: ["Un entretenimiento lúdico sin ninguna base teórica.", "Un método para ganar guerras sin armas."]
  }
];
