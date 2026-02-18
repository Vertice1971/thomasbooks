// 70-metodos-didactica-musical.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué pedagogo suizo es el creador de la 'Rítmica', método que utiliza el movimiento corporal como base del aprendizaje musical?",
    correcta: "Émile Jaques-Dalcroze.",
    incorrectas: [
      "Zoltán Kodály.",
      "Carl Orff."
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal del método Dalcroze?",
    correcta: "Desarrollar el oído interno y el sentido rítmico mediante la expresión corporal.",
    incorrectas: [
      "Aprender a tocar el piano sin usar el cuerpo.",
      "Memorizar todas las fechas de la historia de la música."
    ]
  },
  {
    enunciado: "¿Qué método pedagógico propone el uso de la 'Fononimia' (señales manuales para las notas)?",
    correcta: "Método Kodály.",
    incorrectas: [
      "Método Willems.",
      "Método Suzuki."
    ]
  },
  {
    enunciado: "El método Kodály se basa fundamentalmente en:",
    correcta: "La voz humana, el canto coral y la música folclórica del propio país.",
    incorrectas: [
      "El uso exclusivo de sintetizadores electrónicos.",
      "La lectura de partituras de ópera alemana desde los 3 años."
    ]
  },
  {
    enunciado: "¿Qué es el 'Do Móvil' en el sistema Kodály?",
    correcta: "Un sistema donde la sílaba 'Do' representa siempre la tónica de la escala, independientemente de la tonalidad.",
    incorrectas: [
      "Un piano pequeño que se puede mover por el aula.",
      "Una aplicación de móvil para aprender solfeo."
    ]
  },
  {
    enunciado: "¿Qué autor alemán desarrolló el 'Schulwerk', integrando música, palabra y movimiento?",
    correcta: "Carl Orff.",
    incorrectas: [
      "Maurice Martenot.",
      "Justine Ward."
    ]
  },
  {
    enunciado: "El 'Instrumentarium Orff' se caracteriza por el uso de:",
    correcta: "Instrumentos de percusión de láminas (xilófonos, metalófonos) con barras desmontables.",
    incorrectas: [
      "Instrumentos de viento metal de gran tamaño.",
      "Guitarras eléctricas y amplificadores."
    ]
  },
  {
    enunciado: "¿Qué papel juega la improvisación en el método de Carl Orff?",
    correcta: "Es una herramienta esencial para que el niño explore su creatividad de forma natural.",
    incorrectas: [
      "Está prohibida hasta que el alumno cumple 18 años.",
      "Se considera un error que el profesor debe evitar."
    ]
  },
  {
    enunciado: "¿Qué pedagogo belga centró su método en la psicología y el desarrollo sensorial del oído?",
    correcta: "Edgar Willems.",
    incorrectas: [
      "Paul Rolland.",
      "Shinichi Suzuki."
    ]
  },
  {
    enunciado: "Willems establece que la educación musical debe seguir un orden natural: sensorial, afectivo y...",
    correcta: "Mental.",
    incorrectas: [
      "Deportivo.",
      "Mecánico."
    ]
  },
  {
    enunciado: "¿Qué autor francés puso especial énfasis en la relajación muscular y el desarrollo de la sensibilidad en su método?",
    correcta: "Maurice Martenot.",
    incorrectas: [
      "Justine Ward.",
      "Carl Orff."
    ]
  },
  {
    enunciado: "Maurice Martenot es también el inventor de un instrumento electrónico llamado:",
    correcta: "Ondas Martenot.",
    incorrectas: [
      "Sintetizador modular.",
      "Theremín."
    ]
  },
  {
    enunciado: "¿Qué método fue creado originalmente para mejorar el canto litúrgico en las escuelas católicas de EE. UU.?",
    correcta: "Método Ward (Justine Ward).",
    incorrectas: [
      "Método Suzuki.",
      "Método Dalcroze."
    ]
  },
  {
    enunciado: "El método Ward utiliza para la lectura musical inicial:",
    correcta: "Un sistema de cifras y puntos que representa los grados de la escala.",
    incorrectas: [
      "Dibujos de colores sin ningún tipo de número.",
      "Pentagramas con claves de fa desde el primer día."
    ]
  },
  {
    enunciado: "¿Qué pedagogo japonés creó el método de 'Educación del Talento' basado en el aprendizaje de la lengua materna?",
    correcta: "Shinichi Suzuki.",
    incorrectas: [
      "Toru Takemitsu.",
      "Yoko Ono."
    ]
  },
  {
    enunciado: "Una premisa fundamental del Método Suzuki es:",
    correcta: "Cualquier niño puede aprender música si se le rodea de un entorno adecuado y escucha constante.",
    incorrectas: [
      "Solo los niños superdotados pueden tocar el violín.",
      "El estudio de la teoría musical debe preceder a la práctica del instrumento."
    ]
  },
  {
    enunciado: "¿Qué es el 'Pentatonismo' en la pedagogía musical?",
    correcta: "Escalas de cinco notas que facilitan la improvisación y la afinación en principiantes.",
    incorrectas: [
      "Tocar el piano usando solo cinco dedos.",
      "Cantar canciones que solo duran cinco segundos."
    ]
  },
  {
    enunciado: "¿Qué pedagogo estadounidense desarrolló el concepto de 'Audiación' (pensamiento musical)?",
    correcta: "Edwin Gordon.",
    incorrectas: [
      "Paul Rolland.",
      "Yehudi Menuhin."
    ]
  },
  {
    enunciado: "¿Qué es la 'Prosodia' en el contexto del método Orff?",
    correcta: "El uso del ritmo de las palabras y el lenguaje hablado como base para el ritmo musical.",
    incorrectas: [
      "Un tipo de instrumento de percusión de madera.",
      "Escribir las partituras con letras en lugar de notas."
    ]
  },
  {
    enunciado: "En la pedagogía de Dalcroze, la 'Solfeo-Rítmica' busca:",
    correcta: "Cantar notas mientras se realiza un movimiento rítmico coordinado.",
    incorrectas: [
      "Estudiar solfeo sentado sin moverse nada.",
      "Cantar lo más rápido posible sin respirar."
    ]
  },
  {
    enunciado: "¿Qué método destaca por el uso de 'campanillas' afinadas para trabajar la discriminación auditiva?",
    correcta: "Método Willems.",
    incorrectas: [
      "Método Kodály.",
      "Método Martenot."
    ]
  },
  {
    enunciado: "¿Qué es la 'Educación Sensorial' en la didáctica musical?",
    correcta: "El entrenamiento de los sentidos para percibir calidades de sonido (timbre, intensidad, altura).",
    incorrectas: [
      "Aprender a tocar instrumentos con los ojos vendados.",
      "Escuchar música solo si es muy suave."
    ]
  },
  {
    enunciado: "La 'Música Elemental' de Carl Orff une inseparablemente:",
    correcta: "Música, movimiento y lenguaje.",
    incorrectas: [
      "Música, pintura y escultura.",
      "Música, matemáticas y física."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Imitación' en el Método Suzuki?",
    correcta: "Es la base del aprendizaje inicial, imitando al profesor y a otros alumnos (aprendizaje por observación).",
    incorrectas: [
      "Está prohibida para fomentar la originalidad desde el primer día.",
      "Solo se permite imitar sonidos de animales."
    ]
  },
  {
    enunciado: "¿Qué es la 'Fononimia' de Curwen, adoptada por Kodály?",
    correcta: "Gestos manuales que indican la posición relativa de cada nota en la escala.",
    incorrectas: [
      "Un tipo de micrófono que graba los nombres de las notas.",
      "Un diccionario de términos musicales."
    ]
  },
  {
    enunciado: "¿Qué pedagogo enfatizó el uso de la flauta dulce como instrumento escolar accesible?",
    correcta: "Carl Orff.",
    incorrectas: [
      "Émile Jaques-Dalcroze.",
      "Justine Ward."
    ]
  },
  {
    enunciado: "En el método Martenot, el 'Sentido Rítmico' se trabaja mediante:",
    correcta: "Juegos rítmicos que involucran todo el cuerpo y la relajación activa.",
    incorrectas: [
      "Contar números en voz alta sin parar.",
      "Golpear la mesa con mucha fuerza."
    ]
  },
  {
    enunciado: "¿Qué es el 'Aprendizaje por Descubrimiento' en la didáctica moderna?",
    correcta: "Hacer que el alumno llegue a los conceptos musicales a través de su propia experimentación.",
    incorrectas: [
      "Que el alumno busque partituras escondidas por el aula.",
      "Aprender música solo si el alumno lo pide."
    ]
  },
  {
    enunciado: "¿Qué técnica de respiración es fundamental en los métodos de educación vocal?",
    correcta: "Respiración costo-diafragmática.",
    incorrectas: [
      "Respiración clavicular superficial.",
      "Aguantar la respiración el máximo tiempo posible."
    ]
  },
  {
    enunciado: "El concepto de 'Oído Absoluto' frente a 'Oído Relativo' es central en el método:",
    correcta: "Willems.",
    incorrectas: [
      "Ward.",
      "Orff."
    ]
  },
  {
    enunciado: "¿Qué es la 'Rondalla escolar' en la tradición española?",
    correcta: "Una agrupación de instrumentos de pulso y púa (guitarras, laúdes) con fines didácticos.",
    incorrectas: [
      "Un grupo de niños que corre alrededor de un piano.",
      "Un coro que solo canta canciones infantiles."
    ]
  },
  {
    enunciado: "¿Qué papel tiene el 'Juego' en los métodos didácticos actuales?",
    correcta: "Es el vehículo principal para el aprendizaje, motivando al alumno y facilitando la asimilación.",
    incorrectas: [
      "Es una pérdida de tiempo que distrae del estudio serio.",
      "Solo se permite en el recreo, nunca en el aula de música."
    ]
  },
  {
    enunciado: "La 'Grafía No Convencional' permite al alumno:",
    correcta: "Representar sonidos mediante dibujos o símbolos antes de conocer el pentagrama.",
    incorrectas: [
      "Escribir partituras en idiomas inventados.",
      "No tener que estudiar nunca la notación tradicional."
    ]
  },
  {
    enunciado: "¿Qué es el 'Canto a Capella' en la pedagogía Kodály?",
    correcta: "Cantar sin acompañamiento instrumental para desarrollar la afinación y el oído interno.",
    incorrectas: [
      "Cantar con una gorra puesta para proteger la voz.",
      "Cantar dentro de una capilla pequeña."
    ]
  },
  {
    enunciado: "¿Qué pedagogo se centró en la mejora de la técnica de los instrumentos de cuerda mediante el movimiento natural?",
    correcta: "Paul Rolland.",
    incorrectas: [
      "Shinichi Suzuki.",
      "Maurice Martenot."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el 'Clima de Aula' en la educación musical?",
    correcta: "Es fundamental para que el alumno se sienta seguro al expresarse y crear.",
    incorrectas: [
      "Indica la temperatura que debe haber en el conservatorio.",
      "Sirve para que los instrumentos no se desafinen con la humedad."
    ]
  },
  {
    enunciado: "¿Qué es la 'Interdisciplinariedad' en la educación musical?",
    correcta: "Relacionar la música con otras áreas como la lengua, las plásticas o la educación física.",
    incorrectas: [
      "Tocar todos los instrumentos de la orquesta a la vez.",
      "Estudiar música solo durante el recreo."
    ]
  },
  {
    enunciado: "El método de Jacques Chapuis es una continuación y profundización del método:",
    correcta: "Willems.",
    incorrectas: [
      "Kodály.",
      "Dalcroze."
    ]
  },
  {
    enunciado: "¿Qué es la 'Evaluación Formativa' en música?",
    correcta: "Aquella que valora el proceso de aprendizaje del alumno para guiarle y mejorar continuamente.",
    incorrectas: [
      "Poner una nota final basada solo en un examen teórico difícil.",
      "Decidir quién puede ser músico profesional y quién no."
    ]
  },
  {
    enunciado: "El estudio de los métodos didácticos permite al profesor:",
    correcta: "Adaptar su práctica docente a las necesidades y ritmos de cada estudiante.",
    incorrectas: [
      "Saber quién inventó cada instrumento de la orquesta.",
      "Aprender a fabricar xilófonos de madera de forma artesanal."
    ]
  }
];