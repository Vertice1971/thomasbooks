// 17-ritmo-pulso-metrica.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define el 'Pulso' en el contexto del lenguaje musical?",
    correcta: "Es la unidad básica de medida temporal, consistente en una serie de latidos regulares que subyacen a la música.",
    incorrectas: [
      "Es el conjunto de notas agudas que destacan en una melodía.",
      "Es la velocidad máxima a la que un músico puede mover los dedos."
    ]
  },
  {
    enunciado: "El 'Ritmo' se diferencia del pulso en que:",
    correcta: "Es la organización de las duraciones y los acentos en el tiempo, pudiendo ser regular o irregular.",
    incorrectas: [
      "El ritmo es siempre estático y el pulso siempre varía.",
      "No existe diferencia; ambos términos se refieren exclusivamente al metrónomo."
    ]
  },
  {
    enunciado: "¿Qué elemento define la 'Métrica' de una obra musical?",
    correcta: "La estructura jerárquica de pulsos fuertes y débiles que organiza los compases.",
    incorrectas: [
      "El número de instrumentos que tocan simultáneamente.",
      "La distancia en centímetros entre las líneas del pentagrama."
    ]
  },
  {
    enunciado: "¿Cuál es la característica principal de un compás de 'Subdivisión Binaria'?",
    correcta: "Que cada uno de sus tiempos se divide naturalmente en dos partes iguales (corcheas).",
    incorrectas: [
      "Que solo tiene dos tiempos en total, independientemente de la subdivisión.",
      "Que se utiliza exclusivamente para la música de baile electrónica."
    ]
  },
  {
    enunciado: "En un compás de 6/8, ¿cuál es la unidad de tiempo y su tipo de subdivisión?",
    correcta: "La negra con puntillo y es de subdivisión ternaria.",
    incorrectas: [
      "La blanca y es de subdivisión binaria.",
      "La corchea y es de subdivisión cuaternaria."
    ]
  },
  {
    enunciado: "El fenómeno rítmico denominado 'Síncopa' consiste en:",
    correcta: "La prolongación de un sonido emitido en un tiempo o fracción débil sobre un tiempo o fracción fuerte.",
    incorrectas: [
      "La detención total de la música durante varios compases de silencio.",
      "El aumento repentino de la velocidad al final de una frase."
    ]
  },
  {
    enunciado: "¿Qué es una 'Nota a Contratiempo'?",
    correcta: "Aquella que se ejecuta en una fracción débil del compás precedida por un silencio en la fracción fuerte.",
    incorrectas: [
      "Una nota que suena desafinada respecto al resto de la orquesta.",
      "La última nota de la obra que se toca con mucha fuerza."
    ]
  },
  {
    enunciado: "El término 'Tempo' o aire se refiere a:",
    correcta: "La velocidad de sucesión de los pulsos en una obra musical.",
    incorrectas: [
      "La duración total de la pieza medida en segundos.",
      "El volumen sonoro de los instrumentos de percusión."
    ]
  },
  {
    enunciado: "Un compás de 'Amalgama' es aquel que:",
    correcta: "Resulta de la suma de dos o más compases de diferente numeración (ej. 5/4 o 7/8).",
    incorrectas: [
      "Se escribe sin líneas divisorias para que el músico improvise.",
      "Solo contiene silencios de redonda."
    ]
  },
  {
    enunciado: "¿Qué es el 'Agogó' en el contexto del tempo musical?",
    correcta: "El estudio de las pequeñas desviaciones temporales con fines expresivos (ritardando, accelerando).",
    incorrectas: [
      "Un instrumento de cuerda frotada de origen africano.",
      "La medida exacta de los hercios de una nota aguda."
    ]
  },
  {
    enunciado: "La 'Hemiolia' es un recurso rítmico que consiste en:",
    correcta: "La articulación de dos grupos de tres notas como si fueran tres grupos de dos notas (o viceversa).",
    incorrectas: [
      "Cantar una melodía con la boca cerrada.",
      "Aumentar la intensidad gradualmente hasta el clímax."
    ]
  },
  {
    enunciado: "En la métrica occidental, el 'Acento' principal de un compás suele recaer en:",
    correcta: "El primer tiempo del compás.",
    incorrectas: [
      "El último tiempo antes de la línea divisoria.",
      "Cualquier tiempo que el director decida en ese momento."
    ]
  },
  {
    enunciado: "¿Qué indica el denominador de la fracción en la armadura de compás (ej. el 4 en un 3/4)?",
    correcta: "La figura que representa la unidad de tiempo (en este caso, la negra).",
    incorrectas: [
      "El número total de notas que hay en la melodía.",
      "La intensidad a la que se debe tocar la pieza."
    ]
  },
  {
    enunciado: "Un ritmo 'Isocrónico' es aquel que:",
    correcta: "Mantiene pulsos de igual duración de forma constante.",
    incorrectas: [
      "Cambia de velocidad cada dos compases.",
      "No tiene ninguna relación con el tiempo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ritmo Libre'?",
    correcta: "Aquel que no se ajusta a un pulso o métrica regular (ej. canto gregoriano o taksim árabe).",
    incorrectas: [
      "Aquel que se puede tocar sin pagar derechos de autor.",
      "La música que suena en los espacios abiertos de la naturaleza."
    ]
  },
  {
    enunciado: "La 'Polirritmia' se define como:",
    correcta: "La superposición simultánea de diferentes estructuras rítmicas o metros.",
    incorrectas: [
      "La repetición de un mismo ritmo por veinte instrumentos iguales.",
      "El uso de muchas notas diferentes en una sola frase melódica."
    ]
  },
  {
    enunciado: "¿Qué es un 'Tresillo'?",
    correcta: "Un grupo de valoración especial en el que tres notas equivalen a dos de su misma especie en compás binario.",
    incorrectas: [
      "Un instrumento de tres cuerdas utilizado en el Renacimiento.",
      "El nombre que recibe el tercer tiempo de un compás cuaternario."
    ]
  },
  {
    enunciado: "El 'Pulso Táctico' es aquel que:",
    correcta: "El oyente e intérprete percibe y marca físicamente (con el pie o la mano).",
    incorrectas: [
      "Solo existe en la mente del compositor y no se escucha.",
      "Se produce únicamente mediante instrumentos electrónicos."
    ]
  },
  {
    enunciado: "¿A qué se refiere el término 'Anacrusa'?",
    correcta: "Al inicio de una obra o frase en un tiempo o fracción débil antes del primer tiempo fuerte.",
    incorrectas: [
      "Al final de una obra que termina con un acorde de tónica.",
      "A la repetición de una sección completa de la partitura."
    ]
  },
  {
    enunciado: "Un compás de 9/8 es de métrica:",
    correcta: "Ternaria de subdivisión ternaria.",
    incorrectas: [
      "Cuaternaria de subdivisión binaria.",
      "Binaria de subdivisión simple."
    ]
  },
  {
    enunciado: "El 'Rubato' es una indicación que permite al intérprete:",
    correcta: "Flexibilizar el tempo, robando tiempo a algunas notas para dárselo a otras por expresividad.",
    incorrectas: [
      "Cambiar la melodía original por otra inventada en el momento.",
      "Dejar de tocar durante un minuto para descansar."
    ]
  },
  {
    enunciado: "¿Qué es el 'Beat' en la música popular contemporánea?",
    correcta: "El pulso rítmico básico, a menudo enfatizado por la batería o el bajo.",
    incorrectas: [
      "La letra de la canción escrita en inglés.",
      "El color del sintetizador principal."
    ]
  },
  {
    enunciado: "La 'Isorritmia' fue una técnica compositiva medieval basada en:",
    correcta: "La repetición de un patrón rítmico fijo llamado 'talea'.",
    incorrectas: [
      "El uso de un solo instrumento para toda la misa.",
      "La improvisación de ritmos sobre poemas de amor."
    ]
  },
  {
    enunciado: "Un 'Compás Simple' se caracteriza porque:",
    correcta: "Su numerador es 2, 3 o 4 y su unidad de tiempo es una figura sin puntillo.",
    incorrectas: [
      "Solo tiene una nota por compás.",
      "No utiliza alteraciones como sostenidos o bemoles."
    ]
  },
  {
    enunciado: "¿Qué indica la palabra 'Metrónomo'?",
    correcta: "Un aparato que marca el pulso de forma exacta mediante señales acústicas o visuales.",
    incorrectas: [
      "El estudio de la altura de las pirámides de Egipto.",
      "La distancia entre el escenario y la primera fila."
    ]
  },
  {
    enunciado: "El 'Ritmo Aditivo' consiste en:",
    correcta: "Construir frases sumando unidades rítmicas pequeñas e irregulares (típico de la música balcánica).",
    incorrectas: [
      "Añadir un instrumento nuevo cada cuatro compases.",
      "Sumar el volumen de todas las pistas en la mezcla final."
    ]
  },
  {
    enunciado: "¿Qué es el 'Acento Agógico'?",
    correcta: "Aquel que destaca una nota por tener una duración mayor que las circundantes.",
    incorrectas: [
      "El que se produce al gritar una palabra en medio de la canción.",
      "El que marca el director con el pie izquierdo."
    ]
  },
  {
    enunciado: "En un compás de 12/8, hay un total de:",
    correcta: "Cuatro tiempos de subdivisión ternaria.",
    incorrectas: [
      "Doce tiempos de subdivisión binaria.",
      "Tres tiempos de subdivisión cuaternaria."
    ]
  },
  {
    enunciado: "El 'Ostinato' rítmico es:",
    correcta: "Un patrón rítmico que se repite de forma insistente durante una sección o toda la obra.",
    incorrectas: [
      "Un ritmo que suena solo una vez y desaparece.",
      "El nombre técnico de la pausa entre dos movimientos."
    ]
  },
  {
    enunciado: "Un ritmo 'Cruzar' (Cross-rhythm) se produce al:",
    correcta: "Superponer métricas contradictorias, como un pulso ternario contra uno binario.",
    incorrectas: [
      "Cambiar de instrumento a mitad de una canción.",
      "Cruzar las manos para tocar el piano."
    ]
  },
  {
    enunciado: "La 'Métrica Disimétrica' es aquella que:",
    correcta: "Utiliza compases con tiempos de desigual duración (ej. 2+3/8).",
    incorrectas: [
      "Mantiene siempre el mismo ritmo de principio a fin.",
      "No tiene ninguna acentuación perceptible."
    ]
  },
  {
    enunciado: "¿Qué es el 'Tempo Modulante' o Modulación Métrica?",
    correcta: "Una técnica para cambiar de tempo de forma precisa a través de una unidad rítmica común.",
    incorrectas: [
      "Subir el volumen de la radio gradualmente.",
      "Cambiar de una tonalidad mayor a una menor."
    ]
  },
  {
    enunciado: "En la música de baile, el 'Groove' se refiere a:",
    correcta: "La sensación de 'empuje' o balanceo rítmico generado por la interacción de los instrumentos.",
    incorrectas: [
      "El agujero que se hace en el disco de vinilo.",
      "La duración del silencio final de la obra."
    ]
  },
  {
    enunciado: "Un ritmo 'Tético' es aquel que comienza en:",
    correcta: "El primer tiempo fuerte del compás.",
    incorrectas: [
      "La última fracción del compás.",
      "Cualquier parte débil del segundo tiempo."
    ]
  },
  {
    enunciado: "El 'Polímetro' ocurre cuando:",
    correcta: "Diferentes voces utilizan compases distintos que coinciden en el pulso pero no en el acento.",
    incorrectas: [
      "Se utilizan muchos metrónomos a la vez en la clase.",
      "Se canta en muchos idiomas diferentes simultáneamente."
    ]
  },
  {
    enunciado: "¿Qué es el 'Dotted Rhythm' (Ritmo con puntillo)?",
    correcta: "Un patrón que alterna notas largas y cortas, común en marchas y danzas barrocas.",
    incorrectas: [
      "Un ritmo que solo se toca con puntos en lugar de líneas.",
      "La música que se escribe para personas ciegas."
    ]
  },
  {
    enunciado: "En la didáctica musical, la 'Rítmica' de Dalcroze utiliza:",
    correcta: "El movimiento corporal para experimentar y representar la métrica y el ritmo.",
    incorrectas: [
      "Cálculos matemáticos complejos en la pizarra.",
      "El estudio exclusivo de la historia de los tambores."
    ]
  },
  {
    enunciado: "La 'Síncopa Regular' es la que:",
    correcta: "Une dos notas de igual duración situadas en partes de igual importancia jerárquica.",
    incorrectas: [
      "Se produce solo los lunes y los miércoles durante el ensayo.",
      "Ocurre cuando el músico se equivoca al leer la partitura."
    ]
  },
  {
    enunciado: "El 'Acento Tónico' es aquel que destaca una nota por:",
    correcta: "Su altura (frecuencia), siendo generalmente la nota más aguda de la frase.",
    incorrectas: [
      "Ser la nota que se toca con más volumen.",
      "Ser la nota que coincide con la palabra más importante del texto."
    ]
  },
  {
    enunciado: "La percepción del ritmo en el ser humano se vincula estrechamente con:",
    correcta: "Los sistemas motor y vestibular, así como con los ciclos biológicos (corazón, respiración).",
    incorrectas: [
      "Únicamente con la visión de la batuta del director.",
      "Con la capacidad de realizar operaciones de álgebra mental."
    ]
  }
];