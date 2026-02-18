// 31-polifonia-medieval.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál fue el primer tratado documentado (siglo IX) que describió las reglas para realizar polifonía primitiva?",
    correcta: "Musica Enchiriadis.",
    incorrectas: [
      "Micrologus.",
      "Ars Nova."
    ]
  },
  {
    enunciado: "El 'Organum Paralelo' consistía en añadir a la voz original (vox principalis) una segunda voz a una distancia de:",
    correcta: "Cuarta, quinta u octava justa.",
    incorrectas: [
      "Tercera mayor o sexta menor.",
      "Segunda aumentada."
    ]
  },
  {
    enunciado: "¿Qué nombre recibía la melodía original de canto gregoriano que servía de base a la polifonía medieval?",
    correcta: "Vox Principalis o Cantus Firmus.",
    incorrectas: [
      "Vox Organalis.",
      "Contratenor."
    ]
  },
  {
    enunciado: "El 'Organum Melismático' o Florido se caracteriza por:",
    correcta: "La voz principal mantiene notas largas mientras la voz organalis realiza muchas notas rápidas sobre ella.",
    incorrectas: [
      "Ambas voces se mueven exactamente al mismo ritmo nota contra nota.",
      "Se prohíbe el uso de cualquier adorno melódico."
    ]
  },
  {
    enunciado: "¿Qué ciudad y catedral se convirtieron en el centro neurálgico de la polifonía europea en los siglos XII y XIII?",
    correcta: "París (Catedral de Notre Dame).",
    incorrectas: [
      "Roma (San Pedro).",
      "Santiago de Compostela."
    ]
  },
  {
    enunciado: "¿Quiénes fueron los dos compositores principales asociados a la Escuela de Notre Dame?",
    correcta: "Leonin y Perotin.",
    incorrectas: [
      "Guillaume de Machaut y Philippe de Vitry.",
      "Josquin des Prez y Palestrina."
    ]
  },
  {
    enunciado: "Leonin es conocido principalmente por su gran recopilación de polifonía llamada:",
    correcta: "Magnus Liber Organi.",
    incorrectas: [
      "Codex Calixtinus.",
      "Llibre Vermell."
    ]
  },
  {
    enunciado: "¿Cuál fue la principal aportación de Perotin 'el Grande' a la polifonía?",
    correcta: "La ampliación de las voces, creando organa a tres (triplum) y cuatro voces (quadruplum).",
    incorrectas: [
      "La invención del piano de cola medieval.",
      "La eliminación de los textos religiosos de las iglesias."
    ]
  },
  {
    enunciado: "El sistema de 'Modos Rítmicos' de la Escuela de Notre Dame se basaba en:",
    correcta: "Seis patrones rítmicos derivados de la métrica poética griega (troqueo, yambo, etc.).",
    incorrectas: [
      "El uso del metrónomo mecánico para todos los cantores.",
      "Ritmos binarios extremadamente rápidos similares al rock."
    ]
  },
  {
    enunciado: "¿Qué forma musical surgió cuando se añadieron textos diferentes a las voces superiores de una cláusula de organum?",
    correcta: "Motete.",
    incorrectas: [
      "Sinfonía.",
      "Misa Prosa."
    ]
  },
  {
    enunciado: "El 'Ars Antiqua' abarca aproximadamente los siglos:",
    correcta: "XII y XIII.",
    incorrectas: [
      "IX y X.",
      "XV y XVI."
    ]
  },
  {
    enunciado: "El término 'Ars Nova' proviene del tratado homónimo escrito hacia 1320 por:",
    correcta: "Philippe de Vitry.",
    incorrectas: [
      "Franco de Colonia.",
      "Guido d'Arezzo."
    ]
  },
  {
    enunciado: "Una de las grandes innovaciones del Ars Nova fue el reconocimiento de:",
    correcta: "La división binaria de las figuras (ritmo imperfecto) al mismo nivel que la ternaria.",
    incorrectas: [
      "La prohibición de usar voces femeninas en la polifonía.",
      "El uso obligatorio de instrumentos de viento metal en misa."
    ]
  },
  {
    enunciado: "¿Qué compositor del siglo XIV es el autor de la famosa 'Messe de Nostre Dame', la primera misa completa escrita por un solo autor?",
    correcta: "Guillaume de Machaut.",
    incorrectas: [
      "Adam de la Halle.",
      "Francesco Landini."
    ]
  },
  {
    enunciado: "La técnica de 'Isorritmia', común en el Ars Nova, consiste en repetir:",
    correcta: "Un patrón rítmico (talea) y un patrón melódico (color) de forma independiente.",
    incorrectas: [
      "Una sola nota durante diez minutos sin variar la intensidad.",
      "La misma letra en diez idiomas diferentes simultáneamente."
    ]
  },
  {
    enunciado: "El 'Hoquetus' (hipo) es una técnica polifónica que consiste en:",
    correcta: "La alternancia rápida de notas y silencios entre dos voces que se complementan.",
    incorrectas: [
      "Cantar mientras se salta sobre un solo pie.",
      "Una pausa larga para que los cantores beban agua."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe la polifonía italiana del siglo XIV?",
    correcta: "Trecento.",
    incorrectas: [
      "Quattrocento.",
      "Bel Canto."
    ]
  },
  {
    enunciado: "El compositor ciego más importante del Trecento italiano fue:",
    correcta: "Francesco Landini.",
    incorrectas: [
      "Guido de Arezzo.",
      "Jacopo da Bologna."
    ]
  },
  {
    enunciado: "¿Qué es el 'Caccia' en el Trecento italiano?",
    correcta: "Una forma musical descriptiva basada en el canon, que suele tratar sobre escenas de caza.",
    incorrectas: [
      "Un instrumento de percusión con forma de arco.",
      "Un tipo de zapato que usaban los músicos."
    ]
  },
  {
    enunciado: "El 'Ars Subtilior' (finales del s. XIV) se caracteriza por:",
    correcta: "Una complejidad rítmica y notacional extrema, casi experimental.",
    incorrectas: [
      "Ser una música muy sencilla para que la cante el pueblo.",
      "Utilizar solo una nota por compás de forma monótona."
    ]
  },
  {
    enunciado: "¿Qué es una 'Cláusula' en la polifonía de Notre Dame?",
    correcta: "Una sección breve de organum en estilo de discanto (nota contra nota).",
    incorrectas: [
      "Un contrato que firmaban los músicos con el obispo.",
      "El final de un concierto donde se apagan las luces."
    ]
  },
  {
    enunciado: "La 'Caudae' (cola) en el conductus medieval se refiere a:",
    correcta: "Pasajes melismáticos sin texto al principio o al final de la obra.",
    incorrectas: [
      "La parte de atrás de la túnica de los monjes cantores.",
      "Un solo de batería medieval."
    ]
  },
  {
    enunciado: "El 'Conductus' se diferencia del Organum en que:",
    correcta: "Su melodía base no es gregoriana, sino de nueva creación.",
    incorrectas: [
      "Se canta exclusivamente en los túneles de los castillos.",
      "Utiliza instrumentos electrónicos primitivos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Gimel'?",
    correcta: "Un tipo de polifonía inglesa primitiva basada en terceras paralelas.",
    incorrectas: [
      "Un instrumento de viento fabricado con cuero.",
      "El nombre del director del coro de Notre Dame."
    ]
  },
  {
    enunciado: "El 'Fabordón' (Fauxbourdon) consistía en añadir a la melodía:",
    correcta: "Dos voces paralelas a distancia de cuarta y sexta inferiores.",
    incorrectas: [
      "Gritos aleatorios para asustar a los fieles.",
      "Una línea de percusión muy fuerte."
    ]
  },
  {
    enunciado: "¿Qué significa el término 'Discanto'?",
    correcta: "Una técnica donde las voces se mueven por movimiento contrario nota contra nota.",
    incorrectas: [
      "Dejar de cantar en mitad de la misa.",
      "Cantar solo las notas agudas de la escala."
    ]
  },
  {
    enunciado: "En la notación del Ars Nova, los signos de 'Prolación' servían para indicar:",
    correcta: "La relación entre la mínima y la semibreve (el compás).",
    incorrectas: [
      "La intensidad del sonido (forte o piano).",
      "Si el cantante debía estar de pie o sentado."
    ]
  },
  {
    enunciado: "¿Qué es un 'Motete Isorrítmico'?",
    correcta: "Un motete que utiliza la repetición de estructuras rítmicas complejas en el tenor.",
    incorrectas: [
      "Un motete que solo se canta una vez al año.",
      "Un canto donde todas las voces dicen la misma palabra siempre."
    ]
  },
  {
    enunciado: "El 'Ballata' italiano es una forma profana que tiene similitudes con:",
    correcta: "El virelai francés.",
    incorrectas: [
      "La sinfonía clásica.",
      "El himno nacional."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cadencia Landini'?",
    correcta: "Una cadencia donde la sexta grado baja al quinto antes de resolver en la octava.",
    incorrectas: [
      "Un salto mortal que hacía el músico al terminar la obra.",
      "Tocar todas las notas negras del piano a la vez."
    ]
  },
  {
    enunciado: "El 'Madrigal' del Trecento se diferencia del renacentista en que:",
    correcta: "Es una forma estrófica a dos o tres voces con un estribillo llamado 'ritornello'.",
    incorrectas: [
      "Es mucho más largo y utiliza orquesta sinfónica.",
      "Se canta exclusivamente en las iglesias en latín."
    ]
  },
  {
    enunciado: "La 'Vihuela de arco' (Fídula) se utilizaba en la polifonía para:",
    correcta: "Doblar o sustituir algunas voces vocales.",
    incorrectas: [
      "Marcar el pulso golpeando el suelo.",
      "Afinar las voces de los niños cantores."
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo el Códice Calixtino de Santiago de Compostela?",
    correcta: "Contiene algunos de los ejemplos más antiguos de polifonía a tres voces (Congaudeant Catholici).",
    incorrectas: [
      "Fue el primer libro de cocina escrito por músicos.",
      "Prohibía el uso de la polifonía en las rutas de peregrinación."
    ]
  },
  {
    enunciado: "El 'Cantum mensuratus' se refiere a la música que:",
    correcta: "Tiene una medida rítmica precisa y proporcional.",
    incorrectas: [
      "Se canta sin ningún tipo de orden ni tiempo.",
      "Solo puede ser escuchada por reyes."
    ]
  },
  {
    enunciado: "¿Qué es el 'Color' en la técnica isorrítmica?",
    correcta: "La serie de notas (melodía) que se repite en el tenor.",
    incorrectas: [
      "La intensidad con la que se pinta la partitura.",
      "El timbre del instrumento que acompaña."
    ]
  },
  {
    enunciado: "¿Qué es la 'Talea' en la técnica isorrítmica?",
    correcta: "El patrón rítmico que se repite en el tenor.",
    incorrectas: [
      "El nombre de la madera con la que se hacían los laúdes.",
      "La duración total de la misa."
    ]
  },
  {
    enunciado: "La polifonía fue rechazada inicialmente por algunos sectores de la Iglesia porque:",
    correcta: "Consideraban que la complejidad de las voces impedía entender el texto sagrado.",
    incorrectas: [
      "Creían que cantar a varias voces atraía a los demonios.",
      "Era demasiado cara de producir por falta de papel."
    ]
  },
  {
    enunciado: "¿Qué es el 'Virelai' en el contexto de Machaut?",
    correcta: "Una de las 'formas fijas' de la canción polifónica francesa.",
    incorrectas: [
      "Un tipo de baile muy rápido de origen español.",
      "Un instrumento de viento con siete agujeros."
    ]
  },
  {
    enunciado: "El 'Rondeau' medieval polifónico se estructura mediante:",
    correcta: "La alternancia de estrofas y un estribillo con un esquema fijo de rimas y música.",
    incorrectas: [
      "Improvisación total sobre un tambor.",
      "Un solo tema que se repite cien veces."
    ]
  },
  {
    enunciado: "El fin del estudio de la polifonía medieval es comprender:",
    correcta: "La transición del pensamiento monódico al pensamiento armónico y contrapuntístico de Occidente.",
    incorrectas: [
      "Cómo se construían las catedrales góticas paso a paso.",
      "El origen biológico de las cuerdas vocales humanas."
    ]
  }
];