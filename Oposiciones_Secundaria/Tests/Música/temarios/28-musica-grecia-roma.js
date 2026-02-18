// 28-musica-grecia-roma.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué filósofo y matemático griego sentó las bases de la acústica musical al descubrir las proporciones numéricas de los intervalos?",
    correcta: "Pitágoras.",
    incorrectas: [
      "Sócrates.",
      "Arquímedes."
    ]
  },
  {
    enunciado: "La 'Teoría del Ethos' sostenía que la música tenía el poder de:",
    correcta: "Influir en el carácter moral y el estado de ánimo de las personas.",
    incorrectas: [
      "Curar enfermedades físicas como la rotura de huesos.",
      "Predecir el resultado de las batallas navales."
    ]
  },
  {
    enunciado: "¿Qué instrumento de cuerda, asociado al culto de Apolo, era el más prestigioso en la antigua Grecia?",
    correcta: "La Lira (o Cítara).",
    incorrectas: [
      "El Aulós.",
      "El Hidráululo."
    ]
  },
  {
    enunciado: "El 'Aulós' era un instrumento de viento vinculado al culto de Dioniso. ¿Qué característica técnica tenía?",
    correcta: "Era un instrumento de lengüeta doble, a menudo tocado con dos tubos simultáneos.",
    incorrectas: [
      "Era una flauta de metal con llaves modernas.",
      "Se tocaba exclusivamente con la nariz."
    ]
  },
  {
    enunciado: "En la antigua Grecia, la música era considerada una disciplina estrechamente ligada a:",
    correcta: "La poesía y la danza (el arte de las musas).",
    incorrectas: [
      "La pintura al óleo y la escultura en mármol.",
      "La cocina y la agricultura intensiva."
    ]
  },
  {
    enunciado: "¿Cómo se denominaban los esquemas melódicos básicos que servían de modelo para la composición en Grecia?",
    correcta: "Nomoi (Nómos).",
    incorrectas: [
      "Sinfonías.",
      "Madrigales."
    ]
  },
  {
    enunciado: "¿Qué es el 'Monocordio'?",
    correcta: "Un instrumento de una sola cuerda utilizado para medir los intervalos musicales.",
    incorrectas: [
      "Un coro formado por una sola persona que canta muy fuerte.",
      "Un tipo de danza romana que se bailaba en fila."
    ]
  },
  {
    enunciado: "El sistema musical griego se basaba en una unidad de cuatro sonidos descendentes llamada:",
    correcta: "Tetracordio.",
    incorrectas: [
      "Pentagrama.",
      "Dodecafonía."
    ]
  },
  {
    enunciado: "En la Antigua Roma, la música se utilizaba principalmente para:",
    correcta: "Fines militares, espectáculos circenses y actos estatales.",
    incorrectas: [
      "La meditación filosófica profunda en silencio.",
      "Sustituir el entrenamiento de los gladiadores."
    ]
  },
  {
    enunciado: "¿Qué instrumento romano de viento metal, largo y recto, se utilizaba para señales militares?",
    correcta: "Tuba.",
    incorrectas: [
      "Cornu.",
      "Lira."
    ]
  },
  {
    enunciado: "El 'Hidráululo' (Organum Hydraulicum) fue un invento que consistía en:",
    correcta: "Un órgano que utilizaba la presión del agua para suministrar aire a los tubos.",
    incorrectas: [
      "Un silbato que funcionaba con vapor de vino.",
      "Un arpa que se tocaba dentro de una piscina."
    ]
  },
  {
    enunciado: "¿Qué autor romano escribió el tratado 'De Institutione Musica', base de la educación medieval?",
    correcta: "Boecio.",
    incorrectas: [
      "Julio César.",
      "Séneca."
    ]
  },
  {
    enunciado: "Boecio clasificó la música en tres niveles. ¿Cuál representaba la armonía del universo y los astros?",
    correcta: "Musica Mundana.",
    incorrectas: [
      "Musica Humana.",
      "Musica Instrumentalis."
    ]
  },
  {
    enunciado: "La música de la era cristiana primitiva (siglos I-IV) heredó directamente:",
    correcta: "La tradición salmódica de las sinagogas judías.",
    incorrectas: [
      "Los himnos a los dioses del Olimpo.",
      "Las bandas militares del ejército romano."
    ]
  },
  {
    enunciado: "¿Qué significa que la música en la antigüedad fuera 'Monódica'?",
    correcta: "Que consistía en una sola línea melódica, sin acompañamiento armónico de acordes.",
    incorrectas: [
      "Que solo se permitía tocar una nota cada diez minutos.",
      "Que no se podía utilizar más de un instrumento al año."
    ]
  },
  {
    enunciado: "El 'Epitafio de Seikilos' es famoso por ser:",
    correcta: "Una de las pocas composiciones griegas que se conservan completas con notación musical.",
    incorrectas: [
      "Un tratado sobre cómo fabricar cuerdas de tripa.",
      "La ley que prohibía la música en los entierros."
    ]
  },
  {
    enunciado: "La notación musical griega utilizaba fundamentalmente:",
    correcta: "Letras del alfabeto colocadas sobre el texto poético.",
    incorrectas: [
      "Dibujos de pájaros y flores.",
      "Puntos de colores en las paredes de los templos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ditirambo'?",
    correcta: "Un himno coral griego cantado en honor a Dioniso.",
    incorrectas: [
      "Un tipo de arpa de 50 cuerdas.",
      "El nombre del primer teatro construido en Roma."
    ]
  },
  {
    enunciado: "En la antigua Grecia, el concepto de 'Armonía' (Harmonía) se refería a:",
    correcta: "El ajuste o unión de los sonidos en una escala o sistema específico.",
    incorrectas: [
      "Que los músicos fueran amigos entre ellos.",
      "Tocar tres notas a la vez en un piano."
    ]
  },
  {
    enunciado: "El 'Cornu' romano era un instrumento de metal con forma de:",
    correcta: "Semicírculo o letra 'G'.",
    incorrectas: [
      "Línea recta infinita.",
      "Triángulo equilátero."
    ]
  },
  {
    enunciado: "¿Qué nombre recibían los poetas-músicos que en Grecia recitaban poemas épicos con la lira?",
    correcta: "Aedos o Rapsodas.",
    incorrectas: [
      "Cantores de ópera.",
      "Directores de coro."
    ]
  },
  {
    enunciado: "La música cristiana primitiva rechazó los instrumentos porque:",
    correcta: "Se asociaban a los ritos paganos y espectáculos inmorales del teatro romano.",
    incorrectas: [
      "Eran demasiado pesados para transportarlos.",
      "Estaban prohibidos por las leyes de afinación de la época."
    ]
  },
  {
    enunciado: "¿Qué es un 'Himno' en la música antigua?",
    correcta: "Una canción de alabanza dedicada a una divinidad.",
    incorrectas: [
      "El ruido de un escudo al ser golpeado.",
      "Una marcha militar de infantería."
    ]
  },
  {
    enunciado: "El sistema de tetracordios griegos se dividía en tres géneros: Diatónico, Cromático y...",
    correcta: "Enarmónico.",
    incorrectas: [
      "Sinfónico.",
      "Electrónico."
    ]
  },
  {
    enunciado: "La 'Siringa' (o flauta de Pan) consistía en:",
    correcta: "Varios tubos de caña de diferentes longitudes unidos entre sí.",
    incorrectas: [
      "Un solo tubo con 50 agujeros.",
      "Una bolsa de aire con tres lengüetas."
    ]
  },
  {
    enunciado: "¿Cómo era la relación entre Ritmo y Poesía en Grecia?",
    correcta: "El ritmo musical estaba totalmente supeditado a la métrica de los versos.",
    incorrectas: [
      "Eran totalmente independientes.",
      "No existía el ritmo en la música griega."
    ]
  },
  {
    enunciado: "En Roma, los 'Mimi' eran artistas que utilizaban la música para:",
    correcta: "Acompañar representaciones teatrales populares y satíricas.",
    incorrectas: [
      "Enseñar latín a los niños.",
      "Anunciar la llegada del invierno."
    ]
  },
  {
    enunciado: "El término 'Salmodia' se refiere a:",
    correcta: "El canto recitativo de los salmos bíblicos.",
    incorrectas: [
      "Un tipo de comida para músicos.",
      "El ruido del mar."
    ]
  },
  {
    enunciado: "¿Qué emperador romano fue famoso por su obsesión con el canto y la cítara?",
    correcta: "Nerón.",
    incorrectas: [
      "Julio César.",
      "Adriano."
    ]
  },
  {
    enunciado: "La 'Kithara' griega se diferenciaba de la lira en que:",
    correcta: "Era más grande, de madera y usada por profesionales.",
    incorrectas: [
      "Se tocaba con los pies.",
      "Tenía cuerdas de metal."
    ]
  },
  {
    enunciado: "Aristóteles sugería que la música debía formar parte de la educación para:",
    correcta: "Lograr la catarsis o purificación de las emociones.",
    incorrectas: [
      "Aprender matemáticas rápidamente.",
      "Hacer que los ciudadanos fueran más altos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Heterofonía' en la música antigua?",
    correcta: "Cuando un instrumento adorna la melodía mientras la voz canta la versión simple.",
    incorrectas: [
      "Cantar en dos idiomas a la vez.",
      "El uso de ruidos de animales."
    ]
  },
  {
    enunciado: "El 'Oxyrhynchus' es un fragmento de papiro que contiene:",
    correcta: "Uno de los himnos cristianos más antiguos con notación griega.",
    incorrectas: [
      "Un plano para construir un teatro.",
      "Una receta de cocina romana."
    ]
  },
  {
    enunciado: "¿Qué es el 'Salpinx'?",
    correcta: "Una trompeta griega de metal usada para fines militares.",
    incorrectas: [
      "Un tipo de tambor de madera.",
      "Una danza de bodas."
    ]
  },
  {
    enunciado: "La 'Musica Humana' de Boecio se refiere a:",
    correcta: "La unión armónica entre el alma y el cuerpo.",
    incorrectas: [
      "La música coral únicamente.",
      "El sonido de los pulmones al respirar."
    ]
  },
  {
    enunciado: "Los modos griegos (Dórico, Frigio...) recibían su nombre de:",
    correcta: "Las diferentes regiones y pueblos del mundo helénico.",
    incorrectas: [
      "Los colores del arcoíris.",
      "Las siete musas principales."
    ]
  },
  {
    enunciado: "El 'Plectro' era una pieza utilizada para:",
    correcta: "Pulsar las cuerdas de los instrumentos como la cítara.",
    incorrectas: [
      "Limpiar los tubos del órgano.",
      "Marcar el pulso en el suelo."
    ]
  },
  {
    enunciado: "En la transición a la Edad Media, el latín se consolidó como lengua litúrgica en:",
    correcta: "La Iglesia de Occidente (Roma).",
    incorrectas: [
      "Bizancio.",
      "Egipto."
    ]
  },
  {
    enunciado: "La 'Schola Cantorum' fue una institución creada en Roma para:",
    correcta: "Formar cantores y unificar el canto en las iglesias.",
    incorrectas: [
      "Vender instrumentos militares.",
      "Traducir libros de cocina."
    ]
  },
  {
    enunciado: "¿Qué elemento griego sobrevivió con más fuerza en la Edad Media?",
    correcta: "La teoría de los intervalos y la base matemática de la música.",
    incorrectas: [
      "El uso del aulós en la misa.",
      "Las danzas dionisiacas en los altares."
    ]
  }
];