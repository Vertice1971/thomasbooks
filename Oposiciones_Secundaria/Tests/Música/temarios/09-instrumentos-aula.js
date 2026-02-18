// 09-instrumentos-aula.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué pedagogo musical introdujo el instrumental de placas (xilófonos, metalófonos) diseñado específicamente para el aula?",
    correcta: "Carl Orff.",
    incorrectas: [
      "Zoltán Kodály.",
      "Émile Jaques-Dalcroze."
    ]
  },
  {
    enunciado: "En el instrumental Orff, ¿qué significa que un instrumento sea de 'altura determinada'?",
    correcta: "Que puede producir notas musicales concretas y afinadas (ej. un metalófono).",
    incorrectas: [
      "Que el instrumento debe tocarse siempre a una altura física de un metro sobre el suelo.",
      "Que el sonido que produce es un ruido seco sin afinación posible."
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de la 'percusión corporal' en el aula de música?",
    correcta: "Utilizar el propio cuerpo como instrumento rítmico para interiorizar el pulso y la subdivisión de forma vivenciada.",
    incorrectas: [
      "Sustituir la gimnasia rítmica por golpes en el pecho para ahorrar espacio.",
      "Aprender anatomía mediante el sonido de los huesos al ser golpeados."
    ]
  },
  {
    enunciado: "Los xilófonos del aula se diferencian de los metalófonos en que sus láminas son de:",
    correcta: "Madera (generalmente palosanto o materiales sintéticos que imitan madera).",
    incorrectas: [
      "Acero inoxidable o aluminio.",
      "Plástico hueco relleno de aire."
    ]
  },
  {
    enunciado: "En una improvisación instrumental dirigida en el aula, un 'Ostinato' sirve para:",
    correcta: "Proporcionar una base rítmica o melódica estable sobre la cual otros alumnos pueden crear libremente.",
    incorrectas: [
      "Indicar que la clase debe terminar de forma inmediata.",
      "Obligar a todos los alumnos a tocar la misma nota al mismo tiempo."
    ]
  },
  {
    enunciado: "¿Qué ventaja pedagógica ofrece el uso de la flauta dulce en secundaria respecto a otros instrumentos de viento?",
    correcta: "Su bajo coste, portabilidad y la facilidad para producir un sonido básico sin una embocadura compleja.",
    incorrectas: [
      "Que permite tocar obras de orquesta sinfónica con el mismo volumen que una trompeta.",
      "Que no requiere el uso de los dedos para cambiar de nota."
    ]
  },
  {
    enunciado: "Dentro del instrumental de pequeña percusión, un ejemplo de instrumento de madera con sonido indeterminado es:",
    correcta: "La caja china.",
    incorrectas: [
      "El carillón soprano.",
      "Los crótalos."
    ]
  },
  {
    enunciado: "Para facilitar la improvisación melódica en alumnos principiantes, se suelen quitar láminas a los xilófonos para dejar una escala:",
    correcta: "Pentatónica.",
    incorrectas: [
      "Cromática completa.",
      "Dodecafónica."
    ]
  },
  {
    enunciado: "¿Qué instrumento de láminas del aula tiene el registro más agudo y láminas de metal?",
    correcta: "El carillón (soprano o alto).",
    incorrectas: [
      "El metalófono bajo.",
      "El xilófono tenor."
    ]
  },
  {
    enunciado: "La 'técnica de baquetas' en el aula recomienda que el rebote sea:",
    correcta: "Natural y elástico, evitando 'clavar' la baqueta en la lámina para no apagar el sonido.",
    incorrectas: [
      "Rígido y fuerte para que el sonido dure más de diez minutos.",
      "Inexistente, presionando la lámina con fuerza tras el golpe."
    ]
  },
  {
    enunciado: "En la relación entre instrumentos del aula y profesionales, el metalófono es el equivalente escolar de:",
    correcta: "El glockenspiel o el vibráfono.",
    incorrectas: [
      "La marimba.",
      "El timbal sinfónico."
    ]
  },
  {
    enunciado: "¿Qué es un 'bordón' en el acompañamiento instrumental escolar?",
    correcta: "Una nota o intervalo de quinta que suena de forma ininterrumpida como soporte armónico.",
    incorrectas: [
      "Un adorno muy rápido que se hace al final de una canción.",
      "El nombre técnico del palo que sujeta el bombo."
    ]
  },
  {
    enunciado: "Los instrumentos de 'parche' en el aula (panderos, timbales Orff) deben afinarse buscando:",
    correcta: "Una tensión homogénea en todos los puntos para obtener una resonancia clara.",
    incorrectas: [
      "Que el parche esté lo más flojo posible para que no suene nada.",
      "Pintar el parche de colores para que el sonido sea más alegre."
    ]
  },
  {
    enunciado: "Un juego instrumental de 'eco' consiste en:",
    correcta: "Repetir exactamente el patrón rítmico o melódico propuesto por un líder o el profesor.",
    incorrectas: [
      "Tocar lo más fuerte posible para que el sonido rebote en las paredes.",
      "Inventar una melodía que no tenga nada que ver con lo escuchado."
    ]
  },
  {
    enunciado: "¿Qué instrumento de pequeña percusión se clasifica como un 'idiófono de sacudimiento'?",
    correcta: "Las maracas o el cascabel.",
    incorrectas: [
      "Las claves.",
      "El triángulo."
    ]
  },
  {
    enunciado: "La flauta dulce de tipo 'Barroco' se diferencia de la 'Germánica' en:",
    correcta: "La digitación de la nota Fa (en la soprano), siendo más compleja en la barroca pero más precisa en afinación.",
    incorrectas: [
      "Que la barroca está hecha de metal y la germánica de madera.",
      "Que la germánica tiene dos boquillas para tocar dos notas a la vez."
    ]
  },
  {
    enunciado: "En el instrumental de placas, los resonadores son:",
    correcta: "La caja de madera sobre la que descansan las láminas, que amplifica el sonido.",
    incorrectas: [
      "Los tapones de oídos que usan los alumnos para no escuchar a los demás.",
      "Las gomas que sujetan las baquetas a las manos."
    ]
  },
  {
    enunciado: "El uso de la 'guitarra' en el aula de música es valioso principalmente para:",
    correcta: "El acompañamiento armónico de canciones y el trabajo de la música popular.",
    incorrectas: [
      "Sustituir a los xilófonos en las piezas de percusión pura.",
      "Utilizarla como instrumento de percusión golpeando la tapa con baquetas de metal."
    ]
  },
  {
    enunciado: "¿Qué es un 'Pandero' en el instrumental escolar?",
    correcta: "Un membranófono de marco sin sonajas que se golpea con la mano o baqueta.",
    incorrectas: [
      "Una pandereta que ha perdido todos sus cascabeles.",
      "Un tipo de flauta que suena como un tambor."
    ]
  },
  {
    enunciado: "Las 'Claves' son un instrumento de percusión que produce el sonido por:",
    correcta: "Choque de dos cilindros de madera dura.",
    incorrectas: [
      "Raspado de una superficie rugosa.",
      "Vibración de una cuerda interna de acero."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el 'mantenimiento' de los instrumentos del aula?",
    correcta: "Evita desafinaciones, roturas de láminas y garantiza la higiene de boquillas y flautas.",
    incorrectas: [
      "Sirve para que los alumnos aprendan carpintería en lugar de música.",
      "Es un castigo para los alumnos que no han estudiado la teoría."
    ]
  },
  {
    enunciado: "En una danza escolar, el instrumento de percusión suele marcar el 'pulso', que es:",
    correcta: "El latido regular y constante que organiza el tiempo musical.",
    incorrectas: [
      "La velocidad máxima a la que los alumnos pueden saltar.",
      "El silencio que hay entre una canción y la siguiente."
    ]
  },
  {
    enunciado: "El 'Metalófono Bajo' se utiliza habitualmente en el aula para realizar:",
    correcta: "Las líneas de bajo y los acompañamientos armónicos fundamentales.",
    incorrectas: [
      "Melodías rápidas y virtuosas en el registro sobreagudo.",
      "Efectos de sonido que imiten el canto de los pájaros."
    ]
  },
  {
    enunciado: "¿Qué es la 'percusión de metal' en el aula?",
    correcta: "Instrumentos como el triángulo, los crótalos o los platillos.",
    incorrectas: [
      "Golpear las patas de las sillas con lápices de madera.",
      "Tocar instrumentos de viento metal como la trompeta."
    ]
  },
  {
    enunciado: "En el aprendizaje instrumental, la 'lectura de partituras' debe ser:",
    correcta: "Un proceso gradual que parta de grafías no convencionales hacia la notación estándar.",
    incorrectas: [
      "Obligatoria y perfecta desde el primer día de clase.",
      "Eliminada para que los alumnos solo toquen de oído siempre."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los 'Boomwhackers'?",
    correcta: "Tubos de plástico afinados que suenan al ser golpeados contra una superficie o el cuerpo.",
    incorrectas: [
      "Instrumentos electrónicos que necesitan conexión a internet para sonar.",
      "Flautas gigantes que se tocan entre tres personas a la vez."
    ]
  },
  {
    enunciado: "El xilófono profesional de orquesta se diferencia del escolar en que:",
    correcta: "Tiene un sistema de tubos resonadores individuales para cada lámina y un teclado cromático fijo.",
    incorrectas: [
      "Es mucho más pequeño y se puede llevar en el bolsillo.",
      "No usa baquetas y se toca soplando a través de las láminas."
    ]
  },
  {
    enunciado: "La improvisación instrumental 'en cadena' consiste en:",
    correcta: "Que cada alumno realice una breve frase musical que debe enlazar con la del compañero anterior.",
    incorrectas: [
      "Atar todos los instrumentos con una cadena para que no los roben.",
      "Tocar todos la misma nota durante diez minutos sin parar."
    ]
  },
  {
    enunciado: "¿Qué instrumento del aula es un idiófono de 'raspadura'?",
    correcta: "El güiro.",
    incorrectas: [
      "El bloque de madera.",
      "El carillón."
    ]
  },
  {
    enunciado: "El 'Teclado electrónico' en el aula permite trabajar:",
    correcta: "La polifonía, los diferentes timbres orquestales y el lenguaje musical digital.",
    incorrectas: [
      "La fuerza muscular de los dedos al levantar el instrumento.",
      "La capacidad de los alumnos para arreglar ordenadores estropeados."
    ]
  },
  {
    enunciado: "Un 'juego de adivinanza sonora' en el aula busca potenciar:",
    correcta: "La discriminación auditiva y el reconocimiento de timbres e intensidades.",
    incorrectas: [
      "La capacidad de los alumnos para leer la mente del profesor.",
      "La velocidad a la que los alumnos pueden escribir nombres de instrumentos."
    ]
  },
  {
    enunciado: "¿Cómo se debe sujetar el triángulo para que suene correctamente?",
    correcta: "Suspendido de un cordel para dejar libre la vibración del metal.",
    incorrectas: [
      "Agarrándolo con toda la palma de la mano cerrada.",
      "Apoyándolo sobre una mesa de madera con libros encima."
    ]
  },
  {
    enunciado: "En el instrumental Orff, las láminas 'Fis' y 'Bes' sirven para:",
    correcta: "Poder tocar en tonalidades como Sol Mayor (Fa#) o Fa Mayor (Sib).",
    incorrectas: [
      "Hacer que el instrumento sea más pesado y no se mueva.",
      "Sustituir a las láminas de madera por láminas de cristal."
    ]
  },
  {
    enunciado: "La 'Caja Sorda' o de entrenamiento se usa para:",
    correcta: "Practicar la técnica de baquetas y el ritmo sin producir un volumen excesivo.",
    incorrectas: [
      "Tapar los oídos de los alumnos que tocan demasiado fuerte.",
      "Guardar los instrumentos que se han roto durante la clase."
    ]
  },
  {
    enunciado: "Un ejercicio de 'pregunta-respuesta' melódica en el xilófono ayuda a:",
    correcta: "Entender la estructura de la frase musical (antecedente y consecuente).",
    incorrectas: [
      "Aprender a hablar otros idiomas mientras se toca.",
      "Que el profesor no tenga que explicar nada durante la sesión."
    ]
  },
  {
    enunciado: "¿Qué es el 'Agogó'?",
    correcta: "Un instrumento de percusión metálico de dos campanas con diferentes alturas.",
    incorrectas: [
      "Un tipo de baile moderno que se hace en las discotecas.",
      "Una flauta que tiene forma de campana en la punta."
    ]
  },
  {
    enunciado: "El 'Ukelele' se ha popularizado en el aula porque:",
    correcta: "Su tamaño y número de cuerdas (4) facilitan la ejecución de acordes básicos para acompañar.",
    incorrectas: [
      "Es el instrumento oficial de todas las orquestas sinfónicas del mundo.",
      "No necesita ser afinado nunca, pase lo que pase."
    ]
  },
  {
    enunciado: "La 'interpretación instrumental' en grupo fomenta:",
    correcta: "La escucha activa, la sincronización rítmica y el respeto por el papel de cada uno.",
    incorrectas: [
      "La competitividad extrema para ver quién toca más notas por segundo.",
      "El aislamiento de cada alumno en su propio mundo sonoro."
    ]
  },
  {
    enunciado: "Un indicador de calidad en una actividad instrumental escolar es:",
    correcta: "El equilibrio de planos sonoros, donde la melodía se escucha claramente sobre el acompañamiento.",
    incorrectas: [
      "Que todos los alumnos toquen lo más fuerte posible al mismo tiempo.",
      "Que el aula esté completamente en silencio durante toda la clase de música."
    ]
  },
  {
    enunciado: "El fin último de los instrumentos en el aula es:",
    correcta: "Servir como herramienta para la expresión artística y el desarrollo de la competencia musical.",
    incorrectas: [
      "Convertir el aula en una tienda de compraventa de instrumentos usados.",
      "Que los alumnos aprendan a fabricar sus propios instrumentos para no comprarlos."
    ]
  }
];