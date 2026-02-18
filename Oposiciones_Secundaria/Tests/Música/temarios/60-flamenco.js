// 60-flamenco.js

var PREGUNTAS = [
  {
    enunciado: "¿En qué región de España tiene su origen principal el arte flamenco?",
    correcta: "Andalucía.",
    incorrectas: [
      "Galicia.",
      "Cataluña."
    ]
  },
  {
    enunciado: "¿Qué tres pilares fundamentales integran el flamenco?",
    correcta: "El cante, el toque y el baile.",
    incorrectas: [
      "La ópera, el ballet y la zarzuela.",
      "El coro, la orquesta y el director."
    ]
  },
  {
    enunciado: "¿Qué institución internacional declaró al Flamenco como Patrimonio Cultural Inmaterial de la Humanidad en 2010?",
    correcta: "UNESCO.",
    incorrectas: [
      "UNICEF.",
      "OMS."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Palo' en el flamenco?",
    correcta: "Cada una de las distintas variedades o estilos musicales que conforman el flamenco.",
    incorrectas: [
      "El trozo de madera con el que se golpea el suelo.",
      "El nombre del bastón que usa el director de orquesta."
    ]
  },
  {
    enunciado: "¿Cuál es el elemento que diferencia principalmente a los palos flamencos entre sí?",
    correcta: "El compás (ritmo), la métrica y el tipo de melodía.",
    incorrectas: [
      "El color del traje del cantaor.",
      "El precio de la entrada al tablao."
    ]
  },
  {
    enunciado: "¿Qué es el 'Cante Jondo'?",
    correcta: "El estilo de cante más profundo, serio y con mayor carga trágica.",
    incorrectas: [
      "Un cante muy rápido que se utiliza solo para fiestas alegres.",
      "El nombre técnico de las palmas sordas."
    ]
  },
  {
    enunciado: "¿Qué palo flamenco es considerado el 'rey' del cante jondo, caracterizado por su dramatismo y compás de 12 tiempos?",
    correcta: "La Seguiriya.",
    incorrectas: [
      "La Sevillana.",
      "El Rumbatón."
    ]
  },
  {
    enunciado: "La 'Soleá' se caracteriza por su compás de:",
    correcta: "12 tiempos, con acentos específicos en el 3, 6, 8, 10 y 12.",
    incorrectas: [
      "4 tiempos como una marcha militar.",
      "3 tiempos rápidos como un vals."
    ]
  },
  {
    enunciado: "¿Qué palo flamenco es de carácter alegre, festivo y propio de celebraciones, también con compás de 12 tiempos?",
    correcta: "Bulerías.",
    incorrectas: [
      "Tientos.",
      "Martinete."
    ]
  },
  {
    enunciado: "¿Qué son los 'Cantes de ida y vuelta'?",
    correcta: "Estilos que surgieron del intercambio musical entre España y Latinoamérica (ej. Guajiras, Colombianas).",
    incorrectas: [
      "Canciones que se repiten desde el principio hasta el final.",
      "Cantes que solo se pueden interpretar viajando en barco."
    ]
  },
  {
    enunciado: "¿Qué es el 'Toque' en el flamenco?",
    correcta: "La técnica específica de interpretación de la guitarra flamenca.",
    incorrectas: [
      "El momento en que los espectadores tocan a los artistas.",
      "La forma de afinar el piano en los tablaos."
    ]
  },
  {
    enunciado: "¿En qué se diferencia la guitarra flamenca de la clásica?",
    correcta: "Es más ligera, usa maderas como el ciprés y tiene un sonido más brillante y percusivo.",
    incorrectas: [
      "Tiene diez cuerdas en lugar de seis.",
      "Es de metal y se toca con una púa eléctrica."
    ]
  },
  {
    enunciado: "¿Qué técnica de guitarra consiste en golpear las cuerdas de forma sucesiva con los dedos de la mano derecha?",
    correcta: "Rasgueado.",
    incorrectas: [
      "Pizzicato.",
      "Trémolo clásico."
    ]
  },
  {
    enunciado: "El 'Alzapúa' es una técnica de guitarra flamenca que utiliza principalmente:",
    correcta: "El pulgar para crear una línea melódica y rítmica a la vez.",
    incorrectas: [
      "El dedo meñique.",
      "Una moneda de plata."
    ]
  },
  {
    enunciado: "¿Qué es el 'Zapateado' en el baile flamenco?",
    correcta: "El uso de los pies como instrumento de percusión contra el suelo.",
    incorrectas: [
      "Un tipo de zapato que se regala a los principiantes.",
      "Cuando los músicos golpean la guitarra con el pie."
    ]
  },
  {
    enunciado: "El 'Braceo' en el baile flamenco se refiere a:",
    correcta: "El movimiento estético y coordinado de los brazos y manos.",
    incorrectas: [
      "La fuerza muscular necesaria para levantar al compañero.",
      "Un tipo de abrazo que se dan los artistas al final."
    ]
  },
  {
    enunciado: "¿Qué es el 'Duende'?",
    correcta: "Un estado inefable de inspiración, emoción y transmisión mágica del artista flamenco.",
    incorrectas: [
      "Un personaje mitológico que aparece en las cuevas de Granada.",
      "El nombre del director del festival de Jerez."
    ]
  },
  {
    enunciado: "¿Qué es un 'Tablao'?",
    correcta: "El local o escenario dedicado específicamente a la representación de espectáculos flamencos.",
    incorrectas: [
      "La tabla de madera donde se escribe la cuenta de las bebidas.",
      "Un tipo de castañuela de gran tamaño."
    ]
  },
  {
    enunciado: "En el flamenco, las 'Palmas' pueden ser de dos tipos principales:",
    correcta: "Sordas (suaves) y secas (fuertes/brillantes).",
    incorrectas: [
      "Altas y bajas.",
      "Rápidas y mudas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Jaleo'?",
    correcta: "Las expresiones de ánimo ('¡Olé!', '¡Agua!') que lanzan los artistas y el público.",
    incorrectas: [
      "Una pelea que ocurre a veces entre los guitarristas.",
      "El ruido que hacen las cuerdas al romperse."
    ]
  },
  {
    enunciado: "¿Qué palo se canta sin acompañamiento de guitarra, a capella, a menudo con el sonido de un yunque?",
    correcta: "Martinete.",
    incorrectas: [
      "Alegrías.",
      "Tangos."
    ]
  },
  {
    enunciado: "Las 'Alegrías' son un palo característico de la ciudad de:",
    correcta: "Cádiz.",
    incorrectas: [
      "Madrid.",
      "Bilbao."
    ]
  },
  {
    enunciado: "¿Qué compás tienen los 'Tangos' flamencos?",
    correcta: "Binario (4/4).",
    incorrectas: [
      "Amalgama (12 tiempos).",
      "Ternario (3/4)."
    ]
  },
  {
    enunciado: "¿Quién es considerado el cantaor más revolucionario y famoso de la historia contemporánea del flamenco?",
    correcta: "Camarón de la Isla.",
    incorrectas: [
      "Enrique Caruso.",
      "Plácido Domingo."
    ]
  },
  {
    enunciado: "¿Qué guitarrista internacionalizó el flamenco y revolucionó la técnica del toque con 'Entre dos aguas'?",
    correcta: "Paco de Lucía.",
    incorrectas: [
      "Andrés Segovia.",
      "Carlos Santana."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión de origen peruano introdujo Paco de Lucía en el flamenco?",
    correcta: "El Cajón.",
    incorrectas: [
      "Las Congas.",
      "La Batería."
    ]
  },
  {
    enunciado: "¿Qué es una 'Falseta'?",
    correcta: "Una frase o interludio melódico que realiza el guitarrista entre las estrofas del cante.",
    incorrectas: [
      "Una nota que el cantante da mal a propósito.",
      "El nombre de la cejilla de la guitarra."
    ]
  },
  {
    enunciado: "¿Qué son los 'Cantes de Levante'?",
    correcta: "Estilos mineros y camperos de las zonas de Murcia y Almería (ej. Mineras, Tarantas).",
    incorrectas: [
      "Canciones que se cantan al levantarse por la mañana.",
      "Cantes que solo se escuchan cuando sopla viento de levante."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cejilla' en la guitarra flamenca?",
    correcta: "Un accesorio que se coloca en el mástil para elevar el tono y adaptarlo a la voz del cantaor.",
    incorrectas: [
      "Un tipo de cuerda muy fina.",
      "El adorno que lleva el guitarrista en el sombrero."
    ]
  },
  {
    enunciado: "El 'Fandango' flamenco tiene un compás:",
    correcta: "Ternario (3/4).",
    incorrectas: [
      "Binario (2/4).",
      "De 12 tiempos.",
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Marcaje' en el baile flamenco?",
    correcta: "Movimientos rítmicos que hace el bailarín mientras el cantaor interpreta su copla.",
    incorrectas: [
      "Marcar con un lápiz los pasos en el suelo.",
      "Avisar al público de que la función va a empezar."
    ]
  },
  {
    enunciado: "¿Qué es el 'Remate'?",
    correcta: "El cierre o final enérgico de una frase musical o de un baile.",
    incorrectas: [
      "Vender los instrumentos usados al terminar la gira.",
      "El grito final del público."
    ]
  },
  {
    enunciado: "¿Qué es una 'Peña Flamenca'?",
    correcta: "Una asociación de aficionados dedicada al estudio, conservación y disfrute del flamenco.",
    incorrectas: [
      "Una montaña donde se refugiaban los gitanos.",
      "Un instrumento de percusión hecho de piedra."
    ]
  },
  {
    enunciado: "El 'Cante de las Minas' es uno de los festivales más importantes de flamenco, celebrado en:",
    correcta: "La Unión (Murcia).",
    incorrectas: [
      "Sevilla.",
      "Jerez de la Frontera."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la 'Saeta'?",
    correcta: "Un cante religioso, sin guitarra, que se interpreta al paso de las procesiones de Semana Santa.",
    incorrectas: [
      "Un baile muy rápido con abanicos.",
      "Una pieza de órgano dedicada a la Navidad."
    ]
  },
  {
    enunciado: "¿Qué es el 'Flamenco Fusión'?",
    correcta: "La mezcla del flamenco con otros géneros como el jazz, el rock, el pop o la música electrónica.",
    incorrectas: [
      "Derretir instrumentos de metal para hacer guitarras.",
      "Cantar flamenco en inglés exclusivamente."
    ]
  },
  {
    enunciado: "¿Qué es la 'Escobilla' en el baile?",
    correcta: "Una sección dedicada exclusivamente al zapateado virtuoso del bailarín.",
    incorrectas: [
      "Un cepillo para limpiar los zapatos de baile.",
      "Un tipo de movimiento con los hombros."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Llamada'?",
    correcta: "Un aviso rítmico del bailaor al guitarrista y al cantaor para indicar un cambio de sección.",
    incorrectas: [
      "Llamar por teléfono al representante antes de salir.",
      "El sonido de una campana al inicio del espectáculo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Compás de amalgama'?",
    correcta: "La combinación de metros binarios y ternarios (como el 3+3+2+2+2 del compás de 12 tiempos).",
    incorrectas: [
      "Un compás que no tiene ritmo.",
      "Tocar dos canciones diferentes a la vez."
    ]
  },
  {
    enunciado: "El estudio del flamenco permite comprender:",
    correcta: "La profundidad emocional y la complejidad rítmica de una de las señas de identidad de la cultura española.",
    incorrectas: [
      "Cómo fabricar muebles de madera de ciprés.",
      "La geografía detallada de las cuevas de Andalucía."
    ]
  }
];