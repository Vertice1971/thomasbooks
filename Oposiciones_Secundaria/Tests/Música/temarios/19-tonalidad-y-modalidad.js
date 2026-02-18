// 19-tonalidad-y-modalidad.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué define fundamentalmente al sistema de 'Tonalidad'?",
    correcta: "La existencia de una jerarquía de sonidos en torno a un centro de gravedad llamado tónica y una relación de tensión-reposo.",
    incorrectas: [
      "La utilización exclusiva de las teclas blancas del piano sin alteraciones.",
      "La ausencia total de reglas sobre la combinación de sonidos simultáneos."
    ]
  },
  {
    enunciado: "En la 'Modalidad' gregoriana o eclesiástica, el modo que comienza en la nota Re se denomina:",
    correcta: "Protus o Dórico.",
    incorrectas: [
      "Tritus o Lidio.",
      "Tetrardus o Mixolidio."
    ]
  },
  {
    enunciado: "¿Cuál es la principal diferencia entre una escala 'Mayor' y una 'Menor' natural?",
    correcta: "La distancia de la tercera respecto a la tónica (mayor o menor) y la distribución de los semitonos.",
    incorrectas: [
      "Que la escala mayor tiene doce notas y la menor solo cinco.",
      "Que la escala menor solo se puede tocar en instrumentos de cuerda frotada."
    ]
  },
  {
    enunciado: "En el sistema tonal, ¿qué grado de la escala cumple la función de 'Dominante'?",
    correcta: "El quinto grado (V).",
    incorrectas: [
      "El cuarto grado (IV).",
      "El primer grado (I)."
    ]
  },
  {
    enunciado: "¿Qué es la 'Sensal' en una escala tonal?",
    correcta: "El séptimo grado cuando se encuentra a una distancia de semitono de la tónica.",
    incorrectas: [
      "La nota más grave de un instrumento de viento madera.",
      "El espacio de silencio entre el final de una sección y el inicio de otra."
    ]
  },
  {
    enunciado: "La escala 'Pentatónica' se caracteriza por estar compuesta por:",
    correcta: "Cinco sonidos diferentes, omitiendo generalmente los semitonos.",
    incorrectas: [
      "Siete sonidos naturales y cinco alterados.",
      "Ocho sonidos organizados en dos tetracordios idénticos."
    ]
  },
  {
    enunciado: "Un modo 'Plagal' en el sistema gregoriano se diferencia de uno 'Auténtico' en que:",
    correcta: "Su ámbito se sitúa una cuarta por debajo de la finalis y tiene una dominante diferente.",
    incorrectas: [
      "Se utiliza exclusivamente para canciones de amor profano.",
      "Tiene tres notas menos que el modo auténtico equivalente."
    ]
  },
  {
    enunciado: "¿Qué es la 'Armadura' en una partitura tonal?",
    correcta: "El conjunto de alteraciones (sostenidos o bemoles) que definen la tonalidad de la obra al inicio del pentagrama.",
    incorrectas: [
      "La protección de metal que se pone en los bordes de las partituras antiguas.",
      "El ritmo que marca el compás de la pieza musical."
    ]
  },
  {
    enunciado: "La escala 'Cromática' o dodecafónica se compone de:",
    correcta: "Doce sonidos separados por semitonos iguales.",
    incorrectas: [
      "Siete sonidos naturales y cinco silencios obligatorios.",
      "Solo las notas que tienen sostenidos en su nombre."
    ]
  },
  {
    enunciado: "En la jerarquía tonal, la función de 'Subdominante' (IV grado) se asocia con:",
    correcta: "Un estado de tensión intermedia que suele conducir hacia la dominante.",
    incorrectas: [
      "El reposo absoluto y final de la composición.",
      "La nota más aguda que un coro de niños puede alcanzar."
    ]
  },
  {
    enunciado: "¿Qué define al modo 'Frigio' (comenzando en Mi)?",
    correcta: "La presencia de un semitono entre el primer y segundo grado de la escala.",
    incorrectas: [
      "Tener todos sus intervalos de segunda mayor.",
      "Ser el modo más alegre de la música occidental."
    ]
  },
  {
    enunciado: "La 'Tonalidad Relativa' de Do Mayor es:",
    correcta: "La Menor (comparten la misma armadura).",
    incorrectas: [
      "Sol Mayor.",
      "Fa Mayor."
    ]
  },
  {
    enunciado: "¿Qué es una escala 'Exótica' o artificial?",
    correcta: "Aquella creada por un autor o proveniente de tradiciones no occidentales (ej. escala de tonos enteros o enigmática).",
    incorrectas: [
      "Una escala que solo se puede escuchar si se viaja a otro planeta.",
      "La escala que se toca cuando el instrumento está desafinado."
    ]
  },
  {
    enunciado: "En el sistema tonal, el círculo de 'Quintas' sirve para:",
    correcta: "Visualizar la relación entre las tonalidades y el número de alteraciones que tiene cada una.",
    incorrectas: [
      "Contar el número de músicos que hay en un quinteto de viento.",
      "Afinar las cuerdas de un piano de forma circular."
    ]
  },
  {
    enunciado: "El término 'Atonalismo' implica:",
    correcta: "La ausencia de un centro tonal y la igualdad jerárquica de los doce sonidos de la escala cromática.",
    incorrectas: [
      "Cantar sin utilizar la lengua ni los labios.",
      "Componer música utilizando solo la nota Do de forma repetitiva."
    ]
  },
  {
    enunciado: "¿Qué es el 'Modo de Mi' en el contexto del Flamenco?",
    correcta: "La utilización del modo frigio con la variante de la tercera picarda (cadencia andaluza).",
    incorrectas: [
      "Tocar siempre en la nota Mi aunque la partitura diga otra cosa.",
      "Un tipo de guitarra que solo tiene cuerdas afinadas en Mi."
    ]
  },
  {
    enunciado: "La escala 'Menor Armónica' se diferencia de la natural por:",
    correcta: "El ascenso del séptimo grado (sensible) para crear una resolución fuerte hacia la tónica.",
    incorrectas: [
      "Tener tres notas menos al descender que al ascender.",
      "Ser una escala que solo se usa para afinar armónicas de boca."
    ]
  },
  {
    enunciado: "¿Qué es la 'Bitonalidad'?",
    correcta: "La utilización simultánea de dos tonalidades diferentes en distintas capas de la textura.",
    incorrectas: [
      "Un instrumento que tiene dos colores diferentes en su cuerpo.",
      "Cantar una canción dos veces seguidas sin cambiar nada."
    ]
  },
  {
    enunciado: "En el sistema modal griego, los tetracordios se unían para formar:",
    correcta: "El Sistema Teleion o Sistema Perfecto.",
    incorrectas: [
      "Una orquesta sinfónica de arpas de madera.",
      "Un libro de leyes sobre la afinación de las liras."
    ]
  },
  {
    enunciado: "La escala de 'Tonos Enteros' (hexatónica) se caracteriza por:",
    correcta: "La ausencia de semitonos, lo que genera una sonoridad etérea y sin tensiones claras.",
    incorrectas: [
      "Tener intervalos de tercera mayor entre todas sus notas.",
      "Ser la escala oficial del himno nacional de Francia."
    ]
  },
  {
    enunciado: "¿Qué es el 'Centro Tonal'?",
    correcta: "La nota que actúa como polo de atracción y punto de referencia para el resto de los sonidos.",
    incorrectas: [
      "El agujero central de un disco de vinilo.",
      "La silla donde se sienta el primer violín de la orquesta."
    ]
  },
  {
    enunciado: "La 'Modalidad Moderna' consiste en:",
    correcta: "El uso de los modos antiguos dentro de un contexto armónico contemporáneo.",
    incorrectas: [
      "Vestir a los músicos con ropa moderna para tocar música medieval.",
      "Eliminar todas las notas de la escala excepto la tónica."
    ]
  },
  {
    enunciado: "En una tonalidad con cuatro sostenidos (Fa#, Do#, Sol#, Re#), la tónica es:",
    correcta: "Mi Mayor.",
    incorrectas: [
      "La Mayor.",
      "Re Mayor."
    ]
  },
  {
    enunciado: "¿Qué es la 'Enarmonía'?",
    correcta: "La relación entre dos notas que tienen nombres diferentes pero producen el mismo sonido (ej. Do# y Reb).",
    incorrectas: [
      "Cuando todos los músicos tocan en perfecta armonía rítmica.",
      "El estudio de los insectos que viven dentro de los pianos de madera."
    ]
  },
  {
    enunciado: "El 'Dodecafonismo' de Schoenberg utiliza:",
    correcta: "Series de doce notas donde ninguna se repite hasta que han sonado las otras once.",
    incorrectas: [
      "Doce coros de doce personas cada uno.",
      "Solo instrumentos que tengan doce cuerdas de metal."
    ]
  },
  {
    enunciado: "La escala 'Menor Melódica' tiene la particularidad de:",
    correcta: "Alterar el sexto y séptimo grado al ascender y ser natural al descender.",
    incorrectas: [
      "Ser la única escala que se puede cantar sin necesidad de respirar.",
      "Tener solo notas blancas en el registro agudo."
    ]
  },
  {
    enunciado: "En el sistema tonal, la 'Modulación' es:",
    correcta: "El proceso de pasar de una tonalidad a otra durante el transcurso de una obra.",
    incorrectas: [
      "Subir y bajar el volumen de la radio con el mando a distancia.",
      "Cambiar de instrumento a mitad de una frase melódica."
    ]
  },
  {
    enunciado: "¿Qué es el 'Modo Mixolidio' (comenzando en Sol)?",
    correcta: "Una escala mayor con el séptimo grado rebajado (séptima menor).",
    incorrectas: [
      "Una escala menor con el segundo grado aumentado.",
      "Una escala que solo utiliza notas negras del piano."
    ]
  },
  {
    enunciado: "La 'Pandiatonismo' es una técnica que:",
    correcta: "Utiliza las notas de la escala diatónica de forma libre, sin las jerarquías de la armonía tradicional.",
    incorrectas: [
      "Obliga a todos los músicos a tocar la flauta de pan simultáneamente.",
      "Consiste en componer música para pandemias y emergencias sanitarias."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al sistema 'Bimodal'?",
    correcta: "La fluctuación o uso simultáneo de los modos mayor y menor de una misma tónica.",
    incorrectas: [
      "Tener dos directores de orquesta dirigiendo la misma pieza.",
      "Utilizar solo dos notas durante toda la composición."
    ]
  },
  {
    enunciado: "El intervalo de 'Cuarta Aumentada' (tritono) se conoce históricamente como:",
    correcta: "Diabolus in musica.",
    incorrectas: [
      "La puerta del cielo musical.",
      "El intervalo de la paz eterna."
    ]
  },
  {
    enunciado: "La escala 'Lidia' (comenzando en Fa) destaca por tener:",
    correcta: "El cuarto grado aumentado (cuarta aumentada).",
    incorrectas: [
      "El tercer grado disminuido.",
      "Dos tónicas en lugar de una."
    ]
  },
  {
    enunciado: "¿Qué es una 'Tonalidad Vecina'?",
    correcta: "Aquella que tiene una armadura muy similar (un sostenido o bemol de diferencia).",
    incorrectas: [
      "La música que escuchan los vecinos del piso de arriba.",
      "Una tonalidad que vive en el mismo país que la tonalidad principal."
    ]
  },
  {
    enunciado: "La 'Finalis' en el sistema modal medieval es el equivalente a:",
    correcta: "La tónica en el sistema tonal.",
    incorrectas: [
      "La dominante en el sistema tonal.",
      "El silencio final de la obra."
    ]
  },
  {
    enunciado: "En la música impresionista, el uso de la modalidad servía para:",
    correcta: "Evadir las reglas estrictas de la tonalidad clásica y buscar nuevas coloraciones sonoras.",
    incorrectas: [
      "Hacer que la música sonara exactamente igual que la de la Edad Media.",
      "Demostrar que el piano era un instrumento obsoleto."
    ]
  },
  {
    enunciado: "¿Qué es la 'Modalidad de Jazz'?",
    correcta: "La improvisación basada en modos o escalas sobre estructuras armónicas estáticas o cíclicas.",
    incorrectas: [
      "Vestir con traje y corbata para tocar el saxofón tenor.",
      "Tocar siempre notas desafinadas a propósito."
    ]
  },
  {
    enunciado: "La escala 'Eolia' es el equivalente modal de:",
    correcta: "La escala menor natural.",
    incorrectas: [
      "La escala mayor de Do.",
      "La escala de tonos enteros."
    ]
  },
  {
    enunciado: "En la armonía tonal, el 'Acorde de Séptima de Dominante' es crucial porque:",
    correcta: "Contiene el tritono que resuelve hacia la tónica, generando movimiento armónico.",
    incorrectas: [
      "Es el acorde más difícil de tocar en la guitarra española.",
      "Solo puede ser utilizado por compositores alemanes del siglo XIX."
    ]
  },
  {
    enunciado: "La 'Politonalidad' fue explorada extensamente por compositores como:",
    correcta: "Igor Stravinsky y Darius Milhaud.",
    incorrectas: [
      "Johann Sebastian Bach y Antonio Vivaldi.",
      "Wolfgang Amadeus Mozart y Joseph Haydn."
    ]
  },
  {
    enunciado: "El fin último de la organización sonora (tonal o modal) es:",
    correcta: "Proporcionar un sistema de reglas y relaciones que den coherencia e inteligibilidad a la obra musical.",
    incorrectas: [
      "Decidir quién es el ganador de los premios Grammy cada año.",
      "Asegurar que la música sea lo más complicada posible para el oyente."
    ]
  }
];