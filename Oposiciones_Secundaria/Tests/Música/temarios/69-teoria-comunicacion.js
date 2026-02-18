// 69-teoria-comunicacion-musical.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el esquema básico de la comunicación aplicado a la música?",
    correcta: "Emisor (compositor/intérprete), Mensaje (obra/partitura) y Receptor (oyente).",
    incorrectas: [
      "Vendedor, Producto y Cliente.",
      "Fabricante, Instrumento y Comprador."
    ]
  },
  {
    enunciado: "En el proceso comunicativo musical, el 'Código' se identifica principalmente con:",
    correcta: "El lenguaje musical y las reglas de composición compartidas.",
    incorrectas: [
      "El número de serie del instrumento.",
      "El precio de la entrada al concierto."
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el 'Compositor' como emisor primario?",
    correcta: "Codifica sus ideas, emociones o estructuras en un soporte (partitura o grabación).",
    incorrectas: [
      "Se encarga exclusivamente de vender las entradas.",
      "Solo escucha el resultado final sin participar en la creación."
    ]
  },
  {
    enunciado: "La 'Partitura' funciona en la comunicación musical como:",
    correcta: "El canal o soporte físico que contiene el mensaje codificado.",
    incorrectas: [
      "Un adorno para el atril del músico.",
      "El ruido que impide escuchar la melodía."
    ]
  },
  {
    enunciado: "¿Qué es la 'Fidelidad al texto' por parte del intérprete?",
    correcta: "El grado de respeto a las indicaciones escritas por el compositor en la partitura.",
    incorrectas: [
      "Casarse con el compositor de la obra.",
      "No cambiar nunca de instrumento musical."
    ]
  },
  {
    enunciado: "El 'Intérprete' actúa como un emisor secundario que realiza una labor de:",
    correcta: "Decodificación (lectura) y recodificación (ejecución sonora).",
    incorrectas: [
      "Crítica periodística negativa.",
      "Fabricación de partituras en blanco."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Hermenéutica musical'?",
    correcta: "El arte de interpretar y explicar el sentido profundo de una obra musical.",
    incorrectas: [
      "La técnica para afinar instrumentos de viento.",
      "El estudio de la vida privada de los directores."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ruido' en el sistema de comunicación musical?",
    correcta: "Cualquier interferencia (física o cultural) que dificulta la recepción del mensaje.",
    incorrectas: [
      "El sonido de los instrumentos de percusión únicamente.",
      "Una composición de vanguardia muy fuerte."
    ]
  },
  {
    enunciado: "El 'Oyente' o receptor realiza la función de:",
    correcta: "Decodificar el mensaje sonoro y darle una interpretación o respuesta estética.",
    incorrectas: [
      "Escribir la partitura mientras la escucha.",
      "Ignorar el sonido para pensar en otras cosas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Escucha Activa'?",
    correcta: "Un proceso consciente y atento donde el oyente analiza y comprende lo que escucha.",
    incorrectas: [
      "Tener la radio encendida mientras se duerme.",
      "Bailar sin prestar atención a la melodía."
    ]
  },
  {
    enunciado: "La 'Competencia Musical' del oyente depende de:",
    correcta: "Su bagaje cultural, educación musical y familiaridad con el código utilizado.",
    incorrectas: [
      "Su capacidad para comprar instrumentos caros.",
      "El número de conciertos a los que ha asistido sin escucharlos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Feedback' o retroalimentación en un concierto en directo?",
    correcta: "La respuesta inmediata del público (aplausos, silencio, abucheos) que percibe el intérprete.",
    incorrectas: [
      "El pitido que hace un micrófono cuando se acopla.",
      "El eco de la sala de conciertos."
    ]
  },
  {
    enunciado: "En la música contemporánea, a veces el oyente se convierte en:",
    correcta: "Co-creador, al tener que completar o decidir el sentido de obras abiertas.",
    incorrectas: [
      "Dueño legal de los derechos de autor.",
      "Director de la orquesta por un día."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música como Lenguaje'?",
    correcta: "Un sistema de signos sonoros organizados capaz de transmitir significados y emociones.",
    incorrectas: [
      "Un idioma que se habla solo en los conservatorios.",
      "Una forma de hablar sin usar las cuerdas vocales."
    ]
  },
  {
    enunciado: "La 'Referencialidad' musical es la capacidad de la música para:",
    correcta: "Evocar imágenes, conceptos o sentimientos externos al propio sonido.",
    incorrectas: [
      "Citar siempre el nombre del compositor en cada nota.",
      "Afinar el instrumento respecto a una nota de referencia."
    ]
  },
  {
    enunciado: "¿Qué es la 'Semiótica Musical'?",
    correcta: "La ciencia que estudia los signos musicales y cómo producen significado.",
    incorrectas: [
      "La técnica para escribir notas muy pequeñas.",
      "El estudio de los virus en las orquestas."
    ]
  },
  {
    enunciado: "El 'Contexto' en la comunicación musical influye en:",
    correcta: "Cómo el oyente percibe la obra según el lugar, el momento y la situación social.",
    incorrectas: [
      "El peso físico de la partitura original.",
      "La marca del papel donde se imprime la música."
    ]
  },
  {
    enunciado: "¿Qué es el 'Intérprete Creativo'?",
    correcta: "Aquel que aporta su propia visión y sensibilidad, yendo más allá de la literalidad de la partitura.",
    incorrectas: [
      "Aquel que inventa una partitura nueva porque no sabe leer la original.",
      "Un músico que pinta cuadros mientras toca el violín."
    ]
  },
  {
    enunciado: "¿Qué es la 'Expectativa' en la escucha musical?",
    correcta: "La anticipación del oyente sobre lo que va a ocurrir musicalmente basada en su conocimiento del estilo.",
    incorrectas: [
      "Esperar a que el concierto termine para irse a casa.",
      "El deseo de que el músico se equivoque de nota."
    ]
  },
  {
    enunciado: "El 'Canal' en la música grabada incluye:",
    correcta: "El soporte (CD, vinilo, digital) y el equipo de reproducción.",
    incorrectas: [
      "El canal de televisión que emite las noticias.",
      "El río que pasa cerca del estudio de grabación."
    ]
  },
  {
    enunciado: "¿Qué es la 'Ambigüedad' en el mensaje musical?",
    correcta: "La posibilidad de que una misma obra sugiera diferentes significados a distintos oyentes.",
    incorrectas: [
      "Tocar dos notas que suenan exactamente igual.",
      "No saber si la música es para piano o para flauta."
    ]
  },
  {
    enunciado: "¿Qué función cumple la 'Crítica Musical' como mediadora?",
    correcta: "Ayuda a decodificar el mensaje para el oyente y ofrece una valoración técnica y estética.",
    incorrectas: [
      "Prohíbe la escucha de ciertos autores por ley.",
      "Obliga a los músicos a cambiar su forma de vestir."
    ]
  },
  {
    enunciado: "En la comunicación musical, ¿qué es la 'Redundancia'?",
    correcta: "La repetición de elementos (temas, ritmos) que aseguran que el mensaje sea comprendido.",
    incorrectas: [
      "Tocar la misma nota con dos instrumentos diferentes sin querer.",
      "Que el público aplauda dos veces seguidas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Estética de la Recepción'?",
    correcta: "Una teoría que pone el foco en el papel del oyente y su contexto histórico al interpretar la obra.",
    incorrectas: [
      "La decoración de la entrada de un teatro.",
      "La forma en que el músico saluda al público."
    ]
  },
  {
    enunciado: "¿Qué es el 'Gesto Musical' del intérprete?",
    correcta: "Los movimientos corporales que acompañan a la ejecución y ayudan a comunicar la expresión.",
    incorrectas: [
      "Hacer muecas de dolor mientras se toca.",
      "Un tipo de danza clásica."
    ]
  },
  {
    enunciado: "¿Qué diferencia un 'Oído Crítico' de un 'Oído Pasivo'?",
    correcta: "El crítico analiza la estructura y calidad; el pasivo solo recibe el sonido como fondo.",
    incorrectas: [
      "El crítico es más grande físicamente.",
      "El pasivo solo funciona cuando la persona está sentada."
    ]
  },
  {
    enunciado: "La 'Comunicación No Verbal' en música se refiere a:",
    correcta: "La capacidad del sonido para transmitir emociones sin necesidad de palabras.",
    incorrectas: [
      "Que los músicos no hablen entre ellos durante el ensayo.",
      "Utilizar lenguaje de signos para dirigir la orquesta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Subtexto' en una interpretación vocal?",
    correcta: "La intención emocional que el cantante pone debajo de las palabras del texto.",
    incorrectas: [
      "La letra de la canción escrita en la parte inferior de la página.",
      "Un idioma antiguo que ya nadie habla."
    ]
  },
  {
    enunciado: "En la teoría de la comunicación, la 'Entropía' musical se asocia a:",
    correcta: "La máxima desorganización o novedad absoluta que puede dificultar la comprensión del mensaje.",
    incorrectas: [
      "El orden perfecto de una escala de do mayor.",
      "El volumen más bajo de un instrumento."
    ]
  },
  {
    enunciado: "¿Qué es la 'Empatía' en la relación intérprete-oyente?",
    correcta: "La conexión emocional que permite al oyente sentir lo que el músico intenta expresar.",
    incorrectas: [
      "Que el músico y el oyente tengan la misma edad.",
      "Sentarse muy cerca del escenario."
    ]
  },
  {
    enunciado: "¿Qué es la 'Codificación' en composición?",
    correcta: "Traducir ideas musicales a signos gráficos (notación) o procesos sonoros.",
    incorrectas: [
      "Poner un precio secreto a la partitura.",
      "Afinar el instrumento con un código de colores."
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Memoria' en la recepción musical?",
    correcta: "Permite al oyente conectar lo que suena ahora con lo que sonó antes para entender la forma.",
    incorrectas: [
      "Saber el nombre de todos los instrumentos de memoria.",
      "No olvidar dónde se dejaron las llaves del teatro."
    ]
  },
  {
    enunciado: "El 'Silencio' en la comunicación musical puede funcionar como:",
    correcta: "Un signo con significado propio (tensión, final, pausa expresiva).",
    incorrectas: [
      "Un error del compositor que se olvidó de escribir notas.",
      "El momento en que se rompe el canal de comunicación."
    ]
  },
  {
    enunciado: "¿Qué es el 'Estilo' desde el punto de vista del código?",
    correcta: "Un conjunto de convenciones gramaticales y sintácticas propias de una época o autor.",
    incorrectas: [
      "La ropa de marca que usa el solista.",
      "Tocar siempre el mismo instrumento."
    ]
  },
  {
    enunciado: "¿Qué es la 'Transmisión Oral'?",
    correcta: "Un proceso comunicativo donde el mensaje pasa de emisor a receptor sin soporte escrito.",
    incorrectas: [
      "Cantar con la boca muy abierta.",
      "Hablar por teléfono sobre música."
    ]
  },
  {
    enunciado: "La 'Música de Consumo' suele utilizar un código:",
    correcta: "Muy redundante y previsible para asegurar una comunicación fácil y rápida.",
    incorrectas: [
      "Extremadamente complejo y vanguardista.",
      "Que nadie puede entender."
    ]
  },
  {
    enunciado: "¿Qué es el 'Acompañamiento' en la jerarquía comunicativa?",
    correcta: "Elementos del mensaje que sirven de soporte al tema o melodía principal.",
    incorrectas: [
      "Ir al concierto con un amigo.",
      "Llevar el estuche del instrumento a otra persona."
    ]
  },
  {
    enunciado: "¿Qué es la 'Inteligibilidad' musical?",
    correcta: "La claridad con la que el mensaje es percibido por el receptor.",
    incorrectas: [
      "Lo inteligente que es el compositor.",
      "El número de notas agudas que tiene una obra."
    ]
  },
  {
    enunciado: "En la comunicación actual, la 'Digitalización' permite:",
    correcta: "Una difusión global inmediata y la interactividad en el proceso comunicativo.",
    incorrectas: [
      "Que los músicos no tengan que practicar nunca más.",
      "Que los oyentes no necesiten oídos para escuchar."
    ]
  },
  {
    enunciado: "El análisis de la teoría de la comunicación en música permite:",
    correcta: "Comprender la música como un fenómeno social dinámico de intercambio de significados.",
    incorrectas: [
      "Saber cómo se reparan las antenas de radio.",
      "Aprender a escribir correos electrónicos para músicos."
    ]
  }
];