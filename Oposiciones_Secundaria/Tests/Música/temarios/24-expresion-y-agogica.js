// 24-expresion-y-agogica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué aspecto de la música regulan las indicaciones de 'Agógica'?",
    correcta: "La velocidad de la interpretación y sus fluctuaciones (tempo).",
    incorrectas: [
      "La altura de las notas y su afinación exacta.",
      "El volumen sonoro de los instrumentos de viento."
    ]
  },
  {
    enunciado: "El término 'Adagio' indica un tempo:",
    correcta: "Lento y majestuoso.",
    incorrectas: [
      "Muy rápido y ligero.",
      "A la velocidad de una marcha militar."
    ]
  },
  {
    enunciado: "¿Cuál es el significado de la indicación dinámica 'Mezzoforte' (mf)?",
    correcta: "Medio fuerte.",
    incorrectas: [
      "Extremadamente fuerte.",
      "Muy suave, casi inaudible."
    ]
  },
  {
    enunciado: "Un 'Crescendo' indica al intérprete que debe:",
    correcta: "Aumentar gradualmente la intensidad del sonido.",
    incorrectas: [
      "Aumentar la velocidad de la música de forma repentina.",
      "Bajar la afinación de las notas un semitono."
    ]
  },
  {
    enunciado: "¿Qué significa el término agógico 'Ritardando'?",
    correcta: "Disminuir gradualmente la velocidad del tempo.",
    incorrectas: [
      "Aumentar la intensidad del sonido hasta el máximo.",
      "Repetir la sección anterior con un instrumento diferente."
    ]
  },
  {
    enunciado: "La indicación de carácter 'Scherzando' sugiere una interpretación:",
    correcta: "Juguetona, bromista y ligera.",
    incorrectas: [
      "Triste, fúnebre y muy pesada.",
      "Agresiva y con mucha tensión armónica."
    ]
  },
  {
    enunciado: "¿Qué es el 'Rubato'?",
    correcta: "Una flexibilidad del tempo donde se acelera o frena ligeramente por motivos expresivos sin variar la duración total.",
    incorrectas: [
      "Un tipo de sordina que se coloca en las trompetas de metal.",
      "La obligación de tocar todas las notas con el mismo volumen."
    ]
  },
  {
    enunciado: "La palabra 'Andante' se refiere a un tempo:",
    correcta: "Tranquilo, a paso de persona al caminar.",
    incorrectas: [
      "Lo más rápido que permita la técnica del músico.",
      "Estático, sin ningún tipo de movimiento perceptible."
    ]
  },
  {
    enunciado: "¿Qué indica el término 'Sforzando' (sfz)?",
    correcta: "Un acento brusco y reforzado en una nota o acorde determinado.",
    incorrectas: [
      "Que la música debe sonar como si viniera de muy lejos.",
      "Que el músico debe dejar de tocar para descansar."
    ]
  },
  {
    enunciado: "Un 'Diminuendo' o 'Decrescendo' es lo contrario de un crescendo y significa:",
    correcta: "Disminuir gradualmente la intensidad del sonido.",
    incorrectas: [
      "Acortar la duración de todas las figuras musicales.",
      "Cambiar el color de las luces del escenario."
    ]
  },
  {
    enunciado: "La indicación 'Allegro' se sitúa en el rango de los tempos:",
    correcta: "Rápidos y animados.",
    incorrectas: [
      "Muy lentos y pesados.",
      "Moderados y calmados."
    ]
  },
  {
    enunciado: "¿Qué significa el término 'A tempo'?",
    correcta: "Volver a la velocidad original después de una variación (como un ritardando).",
    incorrectas: [
      "Tocar siguiendo exactamente el ritmo del corazón del director.",
      "Finalizar la obra en el momento exacto en que suena una campana."
    ]
  },
  {
    enunciado: "La expresión 'Con brio' indica que se debe tocar con:",
    correcta: "Vigor, espíritu y energía.",
    incorrectas: [
      "Mucha tristeza y lentitud.",
      "Miedo y duda constante."
    ]
  },
  {
    enunciado: "¿Qué nivel de intensidad representa 'Pianissimo' (pp)?",
    correcta: "Muy suave.",
    incorrectas: [
      "Fuerte pero con mucha elegancia.",
      "Silencio absoluto."
    ]
  },
  {
    enunciado: "El término 'Accelerando' solicita al músico:",
    correcta: "Un aumento progresivo de la velocidad del tempo.",
    incorrectas: [
      "Un aumento del número de músicos en la orquesta.",
      "Tocar todas las notas una octava más arriba."
    ]
  },
  {
    enunciado: "La indicación 'Cantabile' sugiere que la melodía debe interpretarse:",
    correcta: "De forma lírica y expresiva, imitando el canto humano.",
    incorrectas: [
      "Gritando el nombre de las notas en voz alta.",
      "Utilizando solo instrumentos de percusión de madera."
    ]
  },
  {
    enunciado: "¿Qué significa 'Morendo' al final de una frase?",
    correcta: "Que el sonido debe extinguirse gradualmente hasta desaparecer (muriendo).",
    incorrectas: [
      "Que el músico debe fingir un desmayo sobre el escenario.",
      "Que la música debe subir de volumen de forma explosiva."
    ]
  },
  {
    enunciado: "La palabra 'Presto' indica un tempo:",
    correcta: "Muy rápido.",
    incorrectas: [
      "Moderado.",
      "Lento."
    ]
  },
  {
    enunciado: "Un matiz 'Subito Piano' significa que el cambio de volumen debe ser:",
    correcta: "Repentino e inmediato.",
    incorrectas: [
      "Tan lento que no se note hasta el final de la obra.",
      "Solo para los instrumentos de cuerda frotada."
    ]
  },
  {
    enunciado: "¿Qué es un 'Calderón' en términos de agógica?",
    correcta: "Un signo que suspende la medida del pulso, prolongando la nota a discreción del intérprete.",
    incorrectas: [
      "Un instrumento de cocina que se usa para marcar el ritmo.",
      "El final de una hoja de la partitura."
    ]
  },
  {
    enunciado: "La indicación 'Grave' define un tempo:",
    correcta: "Extremadamente lento y solemne.",
    incorrectas: [
      "Alegre y bailable.",
      "Desafinado y con ruidos molestos."
    ]
  },
  {
    enunciado: "¿Qué significa 'Ma non troppo' (ej. Allegro ma non troppo)?",
    correcta: "Pero no demasiado.",
    incorrectas: [
      "Con mucha prisa.",
      "Para instrumentos de viento únicamente."
    ]
  },
  {
    enunciado: "La dinámica 'Fortissimo' (ff) indica:",
    correcta: "Mucho volumen, muy fuerte.",
    incorrectas: [
      "Volumen medio.",
      "El volumen máximo que puede soportar el oído humano sin sangrar."
    ]
  },
  {
    enunciado: "La indicación 'Legato' se refiere a una articulación:",
    correcta: "Fluida y conectada, sin silencios entre las notas.",
    incorrectas: [
      "Corta y picada, con mucho espacio entre notas.",
      "Donde el músico debe saltar mientras toca."
    ]
  },
  {
    enunciado: "¿Qué significa 'Staccato'?",
    correcta: "Notas cortas y separadas entre sí.",
    incorrectas: [
      "Notas largas que se mantienen durante varios compases.",
      "Cantar con la boca cerrada."
    ]
  },
  {
    enunciado: "El término 'Largo' indica un tempo:",
    correcta: "Muy lento y amplio.",
    incorrectas: [
      "Que dura muchos kilómetros de papel.",
      "Para ser tocado por músicos muy altos."
    ]
  },
  {
    enunciado: "La expresión 'Dolce' pide una interpretación:",
    correcta: "Suave, dulce y tierna.",
    incorrectas: [
      "Agresiva y con mucha fuerza física.",
      "Rápida y técnica sin ninguna emoción."
    ]
  },
  {
    enunciado: "¿Qué significa 'Tenuto'?",
    correcta: "Mantener la nota en toda su duración y con un ligero énfasis.",
    incorrectas: [
      "Tocar la nota lo más flojo posible.",
      "Ignorar la nota y no tocarla."
    ]
  },
  {
    enunciado: "La palabra 'Vivace' sugiere un tempo:",
    correcta: "Vivo y rápido, generalmente superior al Allegro.",
    incorrectas: [
      "Lento y triste.",
      "Que solo se puede tocar en directo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Mezzopiano' (mp)?",
    correcta: "Medio suave.",
    incorrectas: [
      "Un piano de tamaño mediano para niños.",
      "Tocar la mitad de las notas de la partitura."
    ]
  },
  {
    enunciado: "La indicación 'Appassionato' requiere:",
    correcta: "Una interpretación con mucha pasión y entrega emocional.",
    incorrectas: [
      "Tocar sin mirar la partitura.",
      "Hacer muchas pausas para beber agua."
    ]
  },
  {
    enunciado: "¿Qué significa 'Allargando'?",
    correcta: "Hacerse más lento y, a menudo, más fuerte y amplio.",
    incorrectas: [
      "Estirar físicamente el instrumento antes de tocar.",
      "Añadir más notas a la melodía principal."
    ]
  },
  {
    enunciado: "La expresión 'Agitato' se traduce como:",
    correcta: "Agitado, excitado o con nerviosismo expresivo.",
    incorrectas: [
      "Mover el instrumento de arriba abajo con fuerza.",
      "Tocar después de haber corrido un maratón."
    ]
  },
  {
    enunciado: "¿Qué significa 'Meno mosso'?",
    correcta: "Menos movido (más lento).",
    incorrectas: [
      "Más movido (más rápido).",
      "Sin ningún tipo de expresión."
    ]
  },
  {
    enunciado: "La indicación 'Più mosso' significa:",
    correcta: "Más movido (más rápido).",
    incorrectas: [
      "Menos movido (más lento).",
      "Que el músico debe bailar mientras toca."
    ]
  },
  {
    enunciado: "¿Qué es una 'Horquilla' en la partitura?",
    correcta: "Un signo gráfico que indica un crescendo o un diminuendo gradual.",
    incorrectas: [
      "Un accesorio para sujetar el pelo de los músicos.",
      "Un error del copista que parece una uve abierta."
    ]
  },
  {
    enunciado: "La expresión 'Con fuoco' pide una interpretación:",
    correcta: "Con fuego, con gran ímpetu y ardor.",
    incorrectas: [
      "Muy fría y distante.",
      "Quemando la partitura al finalizar la obra."
    ]
  },
  {
    enunciado: "¿Qué significa 'Stringendo'?",
    correcta: "Apretando el tempo, haciéndose cada vez más rápido.",
    incorrectas: [
      "Apretando las cuerdas del violín con mucha fuerza.",
      "Haciéndose más lento y suave."
    ]
  },
  {
    enunciado: "La indicación 'Lontano' sugiere que la música debe sonar como si:",
    correcta: "Estuviera lejana o distante.",
    incorrectas: [
      "Fuera la música de un funeral.",
      "Se escuchara a través de una radio estropeada."
    ]
  },
  {
    enunciado: "El término 'Maestoso' indica un carácter:",
    correcta: "Majestuoso, digno y solemne.",
    incorrectas: [
      "Pequeño y sin importancia.",
      "Muy rápido y divertido."
    ]
  }
];