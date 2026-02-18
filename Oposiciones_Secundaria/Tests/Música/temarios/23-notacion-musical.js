// 23-notacion-musical.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál era la función principal de los 'Neumas' en la notación musical primitiva del siglo IX?",
    correcta: "Servir como recordatorio nemotécnico de la dirección del movimiento melódico para quienes ya conocían la melodía de memoria.",
    incorrectas: [
      "Indicar la altura exacta y absoluta de cada nota mediante un sistema de frecuencias.",
      "Definir el ritmo preciso y la duración de cada sonido en milisegundos."
    ]
  },
  {
    enunciado: "¿Qué monje benedictino del siglo XI es considerado el padre del sistema de notación moderno al introducir el tetragrama y el nombre de las notas?",
    correcta: "Guido d'Arezzo.",
    incorrectas: [
      "Hucbaldo de Saint-Amand.",
      "Franco de Colonia."
    ]
  },
  {
    enunciado: "La 'Notación Cuadrada', típica del Canto Gregoriano, se escribe sobre un sistema de:",
    correcta: "Cuatro líneas (tetragrama).",
    incorrectas: [
      "Cinco líneas (pentagrama).",
      "Una sola línea de color rojo exclusivamente."
    ]
  },
  {
    enunciado: "En la notación medieval, las 'Claves' surgieron originalmente para:",
    correcta: "Indicar qué línea del tetragrama correspondía a una nota de referencia (Do o Fa).",
    incorrectas: [
      "Señalar el momento en que el coro debía dejar de cantar.",
      "Indicar el precio que debían pagar los alumnos por la partitura."
    ]
  },
  {
    enunciado: "La 'Notación Mensural', desarrollada a partir del siglo XIII, permitió por primera vez:",
    correcta: "Representar valores rítmicos precisos mediante la forma de las figuras.",
    incorrectas: [
      "Escribir música exclusivamente para instrumentos de percusión metálica.",
      "Sustituir el uso de las notas por dibujos de animales."
    ]
  },
  {
    enunciado: "¿Qué nombre recibían las figuras de mayor duración en la notación mensural del Ars Nova?",
    correcta: "Máxima, Longa y Breve.",
    incorrectas: [
      "Redonda, Blanca y Negra.",
      "Síncopa, Puntillo y Ligadura."
    ]
  },
  {
    enunciado: "Las 'Tablaturas' son un sistema de notación instrumental que indica:",
    correcta: "La posición de los dedos en el instrumento (como laúd u órgano) en lugar de la altura de la nota.",
    incorrectas: [
      "El número de músicos que deben participar en la obra.",
      "La biografía del autor escrita en código secreto."
    ]
  },
  {
    enunciado: "¿Cuándo se generalizó el uso del 'Pentagrama' (cinco líneas) en la música occidental?",
    correcta: "Durante el Renacimiento y se consolidó en el Barroco.",
    incorrectas: [
      "En la antigua Grecia.",
      "A finales del siglo XX con la llegada de la informática."
    ]
  },
  {
    enunciado: "En la notación actual, el 'Puntillo' colocado a la derecha de una nota sirve para:",
    correcta: "Añadir a la nota la mitad de su valor original.",
    incorrectas: [
      "Indicar que la nota debe tocarse lo más corto posible.",
      "Señalar que el músico debe repetir la sección completa."
    ]
  },
  {
    enunciado: "¿Qué indican las 'Líneas Adicionales' en un pentagrama?",
    correcta: "Notas que por su altura (muy agudas o muy graves) exceden los límites del pentagrama.",
    incorrectas: [
      "El nombre de los instrumentos que no están tocando en ese momento.",
      "Errores que el compositor cometió y que el músico debe ignorar."
    ]
  },
  {
    enunciado: "La 'Notación Proporcional' o gráfica de la segunda mitad del siglo XX se caracteriza por:",
    correcta: "Sustituir las figuras tradicionales por dibujos o formas que sugieren la duración y el carácter de forma libre.",
    incorrectas: [
      "Utilizar solo números primos para indicar la intensidad del sonido.",
      "Obligar al músico a cantar mientras dibuja en una pizarra."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Becuadro'?",
    correcta: "Anular el efecto de un sostenido o un bemol previo, devolviendo la nota a su estado natural.",
    incorrectas: [
      "Aumentar el volumen de la nota un 50%.",
      "Indicar el final absoluto de la pieza musical."
    ]
  },
  {
    enunciado: "En el siglo XX, las 'Técnicas Extendidas' introdujeron nuevos signos para indicar:",
    correcta: "Efectos especiales como el 'frullato', golpes en la caja del instrumento o sonidos multifónicos.",
    incorrectas: [
      "El momento de encender las luces de la sala de conciertos.",
      "La obligación de que el público aplauda en mitad de la obra."
    ]
  },
  {
    enunciado: "¿Qué es un 'Cluster' en notación contemporánea?",
    correcta: "Un bloque negro o rectángulo que indica que se deben tocar todas las notas comprendidas en ese rango.",
    incorrectas: [
      "Una nota redonda que dura más de un minuto de reloj.",
      "Un dibujo de una nube que indica que el sonido debe ser difuso."
    ]
  },
  {
    enunciado: "La notación de 'Cifrado Americano' se utiliza principalmente en el Jazz y la música moderna para indicar:",
    correcta: "Los acordes mediante letras del alfabeto (A, B, C, D, E, F, G).",
    incorrectas: [
      "La velocidad del viento necesaria para tocar instrumentos de metal.",
      "El número de veces que se debe repetir el estribillo."
    ]
  },
  {
    enunciado: "¿Qué indica la 'Clave de Fa' en cuarta línea?",
    correcta: "Que la nota situada en la cuarta línea del pentagrama es un Fa, situándose generalmente en registros graves.",
    incorrectas: [
      "Que el músico debe dejar de tocar inmediatamente.",
      "Que la obra está escrita para violín soprano."
    ]
  },
  {
    enunciado: "En la notación mensural blanca del siglo XV, las notas se escribían 'vacías' (sin rellenar) para:",
    correcta: "Ahorrar tinta y evitar que el papel se estropeara por el exceso de humedad.",
    incorrectas: [
      "Indicar que esas notas no debían sonar nunca.",
      "Señalar que eran notas reservadas exclusivamente para la realeza."
    ]
  },
  {
    enunciado: "¿Qué es una 'Armadura' en notación musical?",
    correcta: "El conjunto de alteraciones fijas que aparecen al principio del pentagrama tras la clave.",
    incorrectas: [
      "La protección de madera que llevan los violines.",
      "El ritmo constante que marca el tambor durante la obra."
    ]
  },
  {
    enunciado: "La 'Ligadura de Expresión' indica que las notas que abarca deben:",
    correcta: "Tocarse de forma fluida y conectada (legato) sin interrupciones sonoras.",
    incorrectas: [
      "Sumar sus duraciones en una sola nota larga (ligadura de unión).",
      "Tocarse con un instrumento diferente cada una."
    ]
  },
  {
    enunciado: "En la notación para percusión, se suele utilizar:",
    correcta: "Un sistema de dos líneas paralelas (clave de percusión o neutra) en lugar de una clave de altura.",
    incorrectas: [
      "Un pentagrama circular para que el ritmo nunca termine.",
      "Letras de colores en lugar de notas musicales."
    ]
  },
  {
    enunciado: "¿Qué es un 'Calderón'?",
    correcta: "Un signo que indica que se debe prolongar la duración de la nota o silencio a voluntad del intérprete o director.",
    incorrectas: [
      "Una nota que se toca con el pie izquierdo.",
      "El final de la hoja de papel donde se escribe la música."
    ]
  },
  {
    enunciado: "La notación de 'Braille' musical permite:",
    correcta: "Que las personas con discapacidad visual puedan leer y escribir música mediante el tacto.",
    incorrectas: [
      "Que los instrumentos suenen más fuerte de lo normal.",
      "Traducir la música a imágenes de televisión automáticamente."
    ]
  },
  {
    enunciado: "¿Qué indica el signo de '8va' (octava alta) colocado sobre un pasaje musical?",
    correcta: "Que las notas deben sonar una octava más agudas de lo que están escritas.",
    incorrectas: [
      "Que hay ocho músicos tocando la misma melodía.",
      "Que la sección debe repetirse ocho veces seguidas."
    ]
  },
  {
    enunciado: "En la música contemporánea, el 'Espaciado Proporcional' significa que:",
    correcta: "La distancia física entre las notas en el papel representa visualmente el tiempo de duración.",
    incorrectas: [
      "Todas las notas deben estar separadas por exactamente un centímetro.",
      "El papel debe ser el doble de largo que el de una partitura normal."
    ]
  },
  {
    enunciado: "¿Qué es una 'Appoggiatura' en la notación de adornos?",
    correcta: "Una nota pequeña que se coloca antes de la nota principal y le quita parte de su valor.",
    incorrectas: [
      "Un silencio que se hace al inicio de la obra.",
      "El nombre técnico de la tapa del piano."
    ]
  },
  {
    enunciado: "La notación por ordenador (software como Sibelius o MuseScore) ha facilitado:",
    correcta: "La edición rápida, la transposición automática y la generación de partichelas sin errores de copia.",
    incorrectas: [
      "Que los ordenadores compongan música sin que el ser humano tenga que pensar nada.",
      "Eliminar la necesidad de que los músicos estudien lenguaje musical."
    ]
  },
  {
    enunciado: "El 'Bajo Cifrado' del Barroco utilizaba números para:",
    correcta: "Indicar los intervalos que debían formarse sobre la nota del bajo para construir los acordes.",
    incorrectas: [
      "Contar los compases que faltaban para terminar la canción.",
      "Señalar cuántos instrumentos de cuerda debían tocar ese pasaje."
    ]
  },
  {
    enunciado: "¿Qué es el 'Doble Sostenido'?",
    correcta: "Un signo que aumenta la altura de la nota dos semitonos (un tono entero).",
    incorrectas: [
      "Indicar que la nota debe tocarse dos veces seguidas muy rápido.",
      "Que el músico debe sujetar el instrumento con las dos manos con fuerza."
    ]
  },
  {
    enunciado: "En la notación coral, un 'Divisi' indica que:",
    correcta: "Una cuerda del coro (ej. las sopranos) debe dividirse en dos o más grupos para cantar notas diferentes.",
    incorrectas: [
      "El coro debe dividirse en dos edificios diferentes.",
      "La mitad de los cantantes debe irse a su casa."
    ]
  },
  {
    enunciado: "La 'Notación de Acción' (Tablatura moderna) se usa a veces para indicar:",
    correcta: "Instrucciones físicas al intérprete, como 'tocar detrás del puente' o 'soplar sin la boquilla'.",
    incorrectas: [
      "Cómo deben vestirse los músicos para el videoclip.",
      "El número de calorías que se queman al tocar la batería."
    ]
  },
  {
    enunciado: "¿Qué significa el término 'A tempo' tras un pasaje con cambios de velocidad?",
    correcta: "Recuperar la velocidad o tempo original de la obra.",
    incorrectas: [
      "Dejar de seguir el ritmo y tocar de forma aleatoria.",
      "Tocar lo más rápido que el instrumento permita."
    ]
  },
  {
    enunciado: "Un 'Doble Bemol' disminuye la altura de la nota en:",
    correcta: "Dos semitonos (un tono entero).",
    incorrectas: [
      "Un solo semitono.",
      "Una octava completa."
    ]
  },
  {
    enunciado: "La 'Síncopa' en notación se representa a menudo mediante:",
    correcta: "Una ligadura que une una nota en tiempo débil con otra en tiempo fuerte.",
    incorrectas: [
      "Un dibujo de una escalera que sube y baja.",
      "Escribir la nota más grande que las demás."
    ]
  },
  {
    enunciado: "¿Qué indica un 'Silencio de Redonda' colocado en cualquier tipo de compás?",
    correcta: "Que todo el compás debe permanecer en silencio, independientemente de su medida.",
    incorrectas: [
      "Que el silencio dura exactamente cuatro segundos.",
      "Que el músico puede aprovechar para afinar su instrumento."
    ]
  },
  {
    enunciado: "La 'Notación Diastemática' es aquella que:",
    correcta: "Representa la altura de los sonidos mediante la posición de los signos en el espacio vertical.",
    incorrectas: [
      "Solo utiliza colores para indicar la intensidad de la música.",
      "No utiliza líneas ni espacios, solo palabras escritas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sistema' en una partitura de orquesta?",
    correcta: "El conjunto de todos los pentagramas que suenan simultáneamente y que están unidos por una llave inicial.",
    incorrectas: [
      "El ordenador que utiliza el director para corregir a los músicos.",
      "La suma de todas las páginas que componen la obra completa."
    ]
  },
  {
    enunciado: "La 'Métrica' de una obra se indica en la notación mediante:",
    correcta: "Dos números superpuestos al inicio del pentagrama (indicación de compás).",
    incorrectas: [
      "Un termómetro que mide la temperatura de la sala.",
      "La fecha y hora en que se terminó de escribir la canción."
    ]
  },
  {
    enunciado: "En la notación para guitarra, un número dentro de un círculo (ej. ①) indica:",
    correcta: "La cuerda específica en la que se debe tocar la nota.",
    incorrectas: [
      "El número de veces que se debe repetir el solo.",
      "El precio de la cuerda en la tienda de música."
    ]
  },
  {
    enunciado: "La 'Notación Indeterminada' (Alea) deja al intérprete:",
    correcta: "Cierta libertad de elección sobre alturas, duraciones o el orden de las secciones.",
    incorrectas: [
      "Sin instrumentos, obligándole a actuar mediante mímica.",
      "Sin partitura, teniendo que inventar toda la música desde cero."
    ]
  },
  {
    enunciado: "¿Qué es el 'Doble Puntillo'?",
    correcta: "Un signo que añade a la nota el 75% de su valor original (el primer puntillo la mitad y el segundo la mitad del primero).",
    incorrectas: [
      "Indicar que la nota debe repetirse dos veces con mucha fuerza.",
      "Un error de impresión que debe corregirse con un lápiz."
    ]
  }
];