// 01-la-percepcion-visual-teorias-y-procesos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es la percepción visual en el contexto de la comunicación?",
    correcta: "Un proceso psicofisiológico mediante el cual el cerebro interpreta las señales lumínicas captadas por los ojos para dar sentido a la realidad",
    incorrectas: [
      "Un acto puramente físico que termina en la retina",
      "La capacidad de memorizar imágenes sin entender su significado"
    ]
  },
  {
    enunciado: "¿Cuál es el postulado principal de la Psicología de la Gestalt respecto a la percepción?",
    correcta: "El cerebro percibe la forma como una totalidad; 'el todo es más que la suma de sus partes'",
    incorrectas: [
      "La percepción se basa en sumar pequeños puntos aislados de información",
      "Percibimos solo aquello que hemos aprendido a nombrar previamente"
    ]
  },
  {
    enunciado: "¿Qué establece la 'Ley de la Figura y Fondo'?",
    correcta: "Nuestra mente tiende a separar una zona del campo visual como el objeto principal y el resto como el plano sobre el que descansa",
    incorrectas: [
      "Todo lo que vemos tiene el mismo peso visual en la composición",
      "El fondo siempre debe ser más oscuro que la figura"
    ]
  },
  {
    enunciado: "¿En qué consiste la 'Ley de Cierre o Completud'?",
    correcta: "En la tendencia de la mente a completar formas inacabadas o líneas interrumpidas para formar una figura cerrada",
    incorrectas: [
      "En cerrar los ojos para imaginar mejor una escena",
      "En que las formas circulares son más fáciles de ver que las cuadradas"
    ]
  },
  {
    enunciado: "¿Qué describe la 'Ley de Semejanza'?",
    correcta: "Agrupamos mentalmente los elementos que comparten características visuales comunes (forma, color, tamaño, etc.)",
    incorrectas: [
      "Vemos mejor las cosas que se parecen a nosotros",
      "Los objetos lejanos parecen más pequeños que los cercanos"
    ]
  },
  {
    enunciado: "¿Qué es la 'Ley de Proximidad'?",
    correcta: "Tendencia a agrupar los elementos que se encuentran espacialmente más cerca unos de otros",
    incorrectas: [
      "La capacidad de enfocar objetos que están muy cerca del ojo",
      "Relación de amistad entre dos artistas que trabajan juntos"
    ]
  },
  {
    enunciado: "¿Qué define el principio de 'Pregnancia' o 'Buena Forma'?",
    correcta: "La tendencia del cerebro a organizar los elementos de la forma más sencilla, equilibrada y estable posible",
    incorrectas: [
      "La dificultad de recordar una imagen compleja",
      "La saturación de color en una obra pictórica"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los bastones en la retina humana?",
    correcta: "Son responsables de la visión en condiciones de baja luminosidad (visión escotópica) y no perciben el color",
    incorrectas: [
      "Se encargan de la visión del color y el detalle fino",
      "Sirven para proteger al ojo de la luz ultravioleta"
    ]
  },
  {
    enunciado: "¿Qué son los conos y dónde se concentran mayoritariamente?",
    correcta: "Células fotosensibles responsables del color y el detalle, concentradas en la fóvea",
    incorrectas: [
      "Células que solo detectan el movimiento en la periferia del ojo",
      "Proteínas que transportan la imagen por el nervio óptico"
    ]
  },
  {
    enunciado: "¿En qué consiste el proceso de 'Exploración' visual?",
    correcta: "En el movimiento ocular (sacádicos) para dirigir la fóvea hacia los puntos de interés de una escena",
    incorrectas: [
      "En caminar alrededor de una escultura para verla por detrás",
      "En buscar errores en un dibujo técnico con una lupa"
    ]
  },
  {
    enunciado: "¿Qué es la 'Constancia Perceptiva'?",
    correcta: "Capacidad de percibir un objeto como inalterado (en tamaño, forma o color) a pesar de los cambios en la imagen retiniana",
    incorrectas: [
      "Dibujar siempre con el mismo estilo personal",
      "La persistencia de una imagen en la retina tras mirar un foco de luz"
    ]
  },
  {
    enunciado: "¿Cuál es la teoría asociacionista de la percepción?",
    correcta: "Sostiene que la percepción es una suma de sensaciones elementales que el sujeto asocia por experiencia previa",
    incorrectas: [
      "Afirma que nacemos con estructuras mentales que ya conocen todas las formas",
      "Dice que solo percibimos lo que deseamos ver"
    ]
  },
  {
    enunciado: "¿Qué es la 'Ilusión de Müller-Lyer'?",
    correcta: "Una ilusión óptica donde dos segmentos iguales parecen distintos debido a la dirección de las flechas en sus extremos",
    incorrectas: [
      "La sensación de que el cine tiene movimiento real",
      "Confundir el color azul con el verde en condiciones de sombra"
    ]
  },
  {
    enunciado: "¿Qué papel juega la atención en el proceso perceptivo?",
    correcta: "Actúa como filtro selectivo, priorizando cierta información y descartando el resto para evitar la saturación",
    incorrectas: [
      "Aumenta el número de megapíxeles que capta el ojo",
      "Permite ver a través de los objetos sólidos si nos concentramos"
    ]
  },
  {
    enunciado: "¿Qué es la visión periférica?",
    correcta: "Capacidad de detectar movimiento y formas vagas fuera del eje directo de la mirada, gracias a los bastones",
    incorrectas: [
      "La visión que se tiene al usar gafas de bucear",
      "La capacidad de ver perfectamente en la oscuridad total"
    ]
  },
  {
    enunciado: "¿Qué establece la Teoría Cognitiva sobre la percepción?",
    correcta: "La percepción es un proceso activo de formulación de hipótesis y toma de decisiones basado en esquemas mentales",
    incorrectas: [
      "El ojo funciona exactamente igual que una cámara fotográfica digital",
      "No existe el pensamiento, solo estímulos y respuestas automáticas"
    ]
  },
  {
    enunciado: "¿Qué es la estereopsis?",
    correcta: "El fenómeno mediante el cual el cerebro crea una imagen en 3D a partir de las dos imágenes 2D ligeramente distintas de cada ojo",
    incorrectas: [
      "Una enfermedad que impide ver los colores primarios",
      "El proceso de imprimir imágenes en papel fotográfico"
    ]
  },
  {
    enunciado: "¿Qué es el 'fenómeno Phi'?",
    correcta: "La ilusión de movimiento creada al proyectar imágenes estáticas en rápida sucesión (base del cine)",
    incorrectas: [
      "La proporción áurea aplicada a la arquitectura griega",
      "El cansancio visual tras leer mucho tiempo"
    ]
  },
  {
    enunciado: "¿A qué se refiere el término 'Análisis' en el proceso perceptivo?",
    correcta: "A la descomposición de la imagen en rasgos básicos como bordes, orientaciones, colores y texturas",
    incorrectas: [
      "A la crítica que hace un experto sobre un cuadro en un museo",
      "A la medición con regla de las proporciones de un rostro"
    ]
  },
  {
    enunciado: "¿Qué es la 'Síntesis' en la percepción visual?",
    correcta: "La reconstrucción final de los datos analizados en un objeto reconocido y con significado",
    incorrectas: [
      "El resumen escrito de un libro de arte",
      "La mezcla de pigmentos para obtener un gris neutro"
    ]
  },
  {
    enunciado: "¿Qué son los 'indicios monoculares' de profundidad?",
    correcta: "Claves como la perspectiva lineal, el tamaño relativo o el traslapo que permiten percibir distancia con un solo ojo",
    incorrectas: [
      "Las señales que usan los ciegos para orientarse",
      "Las luces que indican la salida en un cine"
    ]
  },
  {
    enunciado: "¿En qué consiste la Ley de Continuidad?",
    correcta: "Los elementos que siguen una dirección suave y constante tienden a percibirse como una unidad",
    incorrectas: [
      "En que las clases de dibujo no deben interrumpirse",
      "En que los colores cálidos siempre avanzan hacia el espectador"
    ]
  },
  {
    enunciado: "¿Qué es una figura ambigua?",
    correcta: "Una imagen que permite dos o más interpretaciones estables pero no simultáneas (ej. la copa de Rubin)",
    incorrectas: [
      "Un dibujo que está mal hecho y no se entiende",
      "Una pintura abstracta que no tiene ninguna forma real"
    ]
  },
  {
    enunciado: "¿Qué es la 'percepción subliminal'?",
    correcta: "La captación de estímulos visuales que están por debajo del umbral de la conciencia pero que pueden influir en el sujeto",
    incorrectas: [
      "Ver imágenes de ángeles en las nubes",
      "La visión de los animales nocturnos"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la experiencia previa en la percepción?",
    correcta: "Condiciona la interpretación de lo que vemos, permitiendo reconocer objetos rápidamente mediante el aprendizaje",
    incorrectas: [
      "Ninguna, un recién nacido percibe exactamente igual que un adulto",
      "Solo sirve para los artistas profesionales"
    ]
  },
  {
    enunciado: "¿Qué es la acomodación ocular?",
    correcta: "El cambio de forma del cristalino para enfocar objetos a diferentes distancias",
    incorrectas: [
      "Mover la cabeza para ver mejor un objeto",
      "Cerrar las cortinas para que no haya reflejos en la pantalla"
    ]
  },
  {
    enunciado: "¿Cómo influye la cultura en la percepción visual?",
    correcta: "Diferentes culturas pueden interpretar símbolos, colores o la perspectiva de maneras distintas según sus convenciones",
    incorrectas: [
      "La cultura no influye porque el ojo es un órgano biológico universal",
      "Solo influye en la elección de la ropa que usamos"
    ]
  },
  {
    enunciado: "¿Qué es el 'gradiente de textura' como indicio de profundidad?",
    correcta: "La pérdida progresiva de detalle y nitidez de las texturas a medida que los objetos se alejan",
    incorrectas: [
      "La diferencia entre pintar con óleo o con acuarela",
      "La rugosidad del papel de dibujo"
    ]
  },
  {
    enunciado: "¿Qué es la 'inhibición lateral'?",
    correcta: "Un proceso fisiológico en la retina que realza los contrastes en los bordes de los objetos",
    incorrectas: [
      "No dejar que el compañero copie en el examen de dibujo",
      "La ceguera temporal al salir de un túnel"
    ]
  },
  {
    enunciado: "¿Quién es considerado uno de los padres de la Psicología de la Gestalt?",
    correcta: "Max Wertheimer",
    incorrectas: [
      "Leonardo da Vinci",
      "Sigmund Freud"
    ]
  }
];