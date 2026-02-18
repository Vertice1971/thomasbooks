// 07-organologia.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué ciencia se encarga del estudio de los instrumentos musicales, su historia, construcción y clasificación?",
    correcta: "La Organología.",
    incorrectas: [
      "La Etnomusicología.",
      "La Acústica aplicada."
    ]
  },
  {
    enunciado: "¿Cuál es el criterio principal del sistema de clasificación de Hornbostel-Sachs (1914)?",
    correcta: "La naturaleza del cuerpo vibrante que produce el sonido inicial.",
    incorrectas: [
      "El material externo con el que está fabricado el instrumento.",
      "La época histórica en la que el instrumento alcanzó su mayor popularidad."
    ]
  },
  {
    enunciado: "En la clasificación de Hornbostel-Sachs, los instrumentos donde el sonido se produce por la vibración de una columna de aire se denominan:",
    correcta: "Aerófonos.",
    incorrectas: [
      "Cordófonos.",
      "Membranófonos."
    ]
  },
  {
    enunciado: "Un instrumento 'Idiófono' es aquel que produce el sonido mediante:",
    correcta: "La vibración del propio material del que está hecho el instrumento, sin cuerdas ni membranas.",
    incorrectas: [
      "La vibración de una membrana tensa golpeada por una baqueta.",
      "El uso exclusivo de circuitos eléctricos y osciladores de frecuencia."
    ]
  },
  {
    enunciado: "¿A qué familia pertenecen instrumentos como el violín, el piano y la citara?",
    correcta: "Cordófonos.",
    incorrectas: [
      "Aerófonos.",
      "Idiófonos."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los 'Membranófonos'?",
    correcta: "El sonido se genera por la vibración de una piel o lámina estirada y tensa.",
    incorrectas: [
      "El sonido se genera por el roce de dos piezas de madera sólida.",
      "El sonido se genera por el paso del aire a través de una lengüeta doble."
    ]
  },
  {
    enunciado: "La quinta categoría añadida posteriormente a la clasificación original de Hornbostel-Sachs es la de los:",
    correcta: "Electrófonos.",
    incorrectas: [
      "Metalófonos.",
      "Sinfonófonos."
    ]
  },
  {
    enunciado: "Dentro de los aerófonos, los instrumentos de 'lengüeta doble' están representados por:",
    correcta: "El oboe y el fagot.",
    incorrectas: [
      "El clarinete y el saxofón.",
      "La flauta travesera y el flautín."
    ]
  },
  {
    enunciado: "¿Cómo se clasifican las castañuelas según el sistema de Hornbostel-Sachs?",
    correcta: "Idiófonos de choque.",
    incorrectas: [
      "Membranófonos de frotación.",
      "Idiófonos de percusión indirecta."
    ]
  },
  {
    enunciado: "El piano se considera técnicamente un cordófono de tipo:",
    correcta: "Cuerda percutida mediante un mecanismo de teclado.",
    incorrectas: [
      "Cuerda pinzada o pulsada.",
      "Cuerda frotada por una cinta de crines."
    ]
  },
  {
    enunciado: "¿Qué elemento define a los aerófonos de 'metal' (o viento metal)?",
    correcta: "La vibración de los labios del intérprete contra una boquilla en forma de copa o embudo.",
    incorrectas: [
      "Que el instrumento esté fabricado obligatoriamente en oro o plata.",
      "Que utilicen un sistema de llaves similar al de la flauta dulce."
    ]
  },
  {
    enunciado: "Los instrumentos electrófonos 'radioeléctricos' son aquellos en los que:",
    correcta: "El sonido se genera íntegramente por medios electrónicos (ej. Theremin o sintetizador).",
    incorrectas: [
      "Un instrumento acústico es simplemente amplificado mediante un micrófono.",
      "El sonido se transmite a través de ondas de radio de onda corta."
    ]
  },
  {
    enunciado: "Un ejemplo de idiófono de 'frotación' es:",
    correcta: "La armónica de cristal o las copas musicales.",
    incorrectas: [
      "El xilófono.",
      "El triángulo."
    ]
  },
  {
    enunciado: "En los cordófonos, el 'puente' tiene la función de:",
    correcta: "Transmitir la vibración de las cuerdas a la caja de resonancia.",
    incorrectas: [
      "Sujetar las cuerdas para que no se muevan durante el transporte.",
      "Cambiar el color del barniz del instrumento según la humedad."
    ]
  },
  {
    enunciado: "¿Qué es un 'aerófono de bisel'?",
    correcta: "Aquel donde el aire choca contra un filo o arista afilada (ej. flautas).",
    incorrectas: [
      "Aquel que utiliza una boquilla de caña muy fina y flexible.",
      "Aquel que produce sonido mediante el giro de una manivela externa."
    ]
  },
  {
    enunciado: "El 'timbal' se clasifica como:",
    correcta: "Membranófono de percusión con altura determinada (afinable).",
    incorrectas: [
      "Idiófono de metal con sonido indeterminado.",
      "Aerófono de depósito de aire manual."
    ]
  },
  {
    enunciado: "Instrumentos como el arpa o el clave (clavicémbalo) pertenecen al grupo de:",
    correcta: "Cuerda pulsada o pinzada.",
    incorrectas: [
      "Cuerda frotada.",
      "Cuerda percutida."
    ]
  },
  {
    enunciado: "¿Cuál es la característica principal de los aerófonos de lengüeta simple?",
    correcta: "Utilizan una sola lámina de caña que vibra contra una boquilla rígida (ej. clarinete).",
    incorrectas: [
      "Utilizan dos láminas de caña que vibran entre sí.",
      "No tienen boquilla y el aire entra directamente por un agujero lateral."
    ]
  },
  {
    enunciado: "La clasificación de 'Idiófonos de sacudimiento' incluye instrumentos como:",
    correcta: "Las maracas y el cascabel.",
    incorrectas: [
      "El vibráfono y la celesta.",
      "El gong y los platillos."
    ]
  },
  {
    enunciado: "El órgano de tubos se considera un aerófono de tipo:",
    correcta: "Mecánico con teclado y depósitos de aire (fuelles).",
    incorrectas: [
      "Electrófono digital con altavoces de gran potencia.",
      "Cordófono percutido por chorros de aire comprimido."
    ]
  },
  {
    enunciado: "¿Qué diferencia a los electrófonos 'electromecánicos'?",
    correcta: "Tienen un elemento vibratorio mecánico cuya señal es captada y amplificada eléctricamente (ej. guitarra eléctrica).",
    incorrectas: [
      "Funcionan exclusivamente con pilas de botón de larga duración.",
      "Son instrumentos que se mueven solos mediante motores de vapor."
    ]
  },
  {
    enunciado: "Un 'mirlitón' o kazoo se clasifica técnicamente como un:",
    correcta: "Membranófono de canto (modifica la voz mediante una membrana).",
    incorrectas: [
      "Aerófono de lengüeta triple.",
      "Idiófono de punteo."
    ]
  },
  {
    enunciado: "¿Qué es un 'Lamelófono' (o idiófono de punteo)?",
    correcta: "Un instrumento con lengüetas flexibles fijadas por un extremo (ej. kalimba o arpa de boca).",
    incorrectas: [
      "Un instrumento que se toca frotando láminas de metal con un arco.",
      "Un tipo de tambor que se toca con la punta de los dedos."
    ]
  },
  {
    enunciado: "En la familia del viento metal, el 'trombón de varas' cambia la altura del sonido:",
    correcta: "Modificando la longitud total del tubo mediante una pieza móvil deslizante.",
    incorrectas: [
      "Abriendo y cerrando agujeros con los dedos.",
      "Cambiando la presión del aire sin mover ninguna parte del instrumento."
    ]
  },
  {
    enunciado: "La 'Zambomba' es un ejemplo de:",
    correcta: "Membranófono de fricción o frotación.",
    incorrectas: [
      "Membranófono de percusión directa.",
      "Aerófono de lengüeta libre."
    ]
  },
  {
    enunciado: "¿Qué determina la 'Tesitura' de un instrumento?",
    correcta: "El rango de notas que puede emitir, desde la más grave a la más aguda.",
    incorrectas: [
      "El peso total del instrumento expresado en kilogramos.",
      "La velocidad a la que el músico debe mover las manos."
    ]
  },
  {
    enunciado: "Dentro de los cordófonos, el violonchelo y el contrabajo pertenecen al subgrupo de:",
    correcta: "Cuerda frotada.",
    incorrectas: [
      "Cuerda pinzada.",
      "Cuerda punteada con plectro."
    ]
  },
  {
    enunciado: "El 'Vibráfono' se diferencia de la Marimba principalmente porque:",
    correcta: "Sus láminas son de metal y posee ventiladores eléctricos para generar vibrato.",
    incorrectas: [
      "Sus láminas son de madera de palosanto y no usa resonadores.",
      "Se toca exclusivamente con los pies mediante un pedal de bombo."
    ]
  },
  {
    enunciado: "Un aerófono de 'lengüeta libre' es aquel donde la lengüeta:",
    correcta: "Vibra libremente en un marco sin chocar contra los bordes (ej. armónica o acordeón).",
    incorrectas: [
      "Está sujeta por los dos extremos y no se puede mover.",
      "Se desprende del instrumento tras realizar la primera nota."
    ]
  },
  {
    enunciado: "¿A qué categoría pertenecen los platillos de la batería?",
    correcta: "Idiófonos de choque.",
    incorrectas: [
      "Membranófonos de golpeo seco.",
      "Cordófonos metálicos."
    ]
  },
  {
    enunciado: "La 'Celesta' es un instrumento que, por su mecanismo, se clasifica como:",
    correcta: "Idiófono de percusión con teclado.",
    incorrectas: [
      "Aerófono de lengüeta metálica.",
      "Electrófono de primera generación."
    ]
  },
  {
    enunciado: "En los aerófonos, los 'pistones' o 'válvulas' sirven para:",
    correcta: "Desviar el aire por tubos adicionales para cambiar la longitud acústica y la nota.",
    incorrectas: [
      "Limpiar el interior del instrumento de la acumulación de saliva.",
      "Aumentar el volumen del sonido mediante la compresión del aire."
    ]
  },
  {
    enunciado: "La 'Siringa' o Flauta de Pan es un aerófono compuesto por:",
    correcta: "Varios tubos de diferentes longitudes cerrados por un extremo y unidos entre sí.",
    incorrectas: [
      "Un solo tubo con muchos agujeros laterales y una embocadura de caña.",
      "Una bolsa de aire que alimenta a tres tubos melódicos simultáneos."
    ]
  },
  {
    enunciado: "¿Qué es un cordófono de 'teclado'?",
    correcta: "Aquel donde la cuerda es activada indirectamente a través de una tecla (ej. clavicordio, clave, piano).",
    incorrectas: [
      "Aquel que utiliza teclas de plástico para producir chispas eléctricas.",
      "Un instrumento que no tiene cuerdas pero se toca con los dedos."
    ]
  },
  {
    enunciado: "El 'Gong' se diferencia del 'Tam-tam' en que:",
    correcta: "El Gong suele tener una protuberancia central y altura determinada; el Tam-tam es plano y de altura indeterminada.",
    incorrectas: [
      "El Gong es de madera y el Tam-tam es de cristal.",
      "No existe ninguna diferencia; son dos nombres para el mismo instrumento exactamente."
    ]
  },
  {
    enunciado: "La 'Gaita' se clasifica como un aerófono de:",
    correcta: "Lengüeta con depósito de aire (odre).",
    incorrectas: [
      "Bisel con depósito de agua.",
      "Boquilla de metal con sistema de varas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Caja de Resonancia'?",
    correcta: "La parte hueca de un instrumento que amplifica el sonido producido por la fuente vibrante.",
    incorrectas: [
      "El estuche donde se guarda el instrumento para que no se raye.",
      "La habitación donde se ensayan las obras antes del concierto."
    ]
  },
  {
    enunciado: "El 'Güiro' es un ejemplo de:",
    correcta: "Idiófono de raspadura.",
    incorrectas: [
      "Idiófono de sacudimiento.",
      "Membranófono de fricción."
    ]
  },
  {
    enunciado: "Los instrumentos 'transpositores' son aquellos en los que:",
    correcta: "La nota que suena es diferente a la nota que está escrita en la partitura.",
    incorrectas: [
      "El músico debe cambiar de asiento durante la interpretación.",
      "El instrumento puede convertirse en otro mediante un botón."
    ]
  },
  {
    enunciado: "El fin último de la clasificación organológica es:",
    correcta: "Establecer un orden lógico y científico que facilite el estudio y la comparación de todos los instrumentos del mundo.",
    incorrectas: [
      "Determinar qué instrumentos son mejores y cuáles son peores.",
      "Saber cuánto cuesta fabricar cada instrumento en la actualidad."
    ]
  }
];