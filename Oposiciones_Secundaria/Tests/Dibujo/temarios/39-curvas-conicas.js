var PREGUNTAS = [
  {
    enunciado: "¿Qué son las curvas cónicas?",
    correcta: "Curvas planas obtenidas como intersección de un plano con un cono de revolución doble; incluyen elipse, parábola e hipérbola (y el círculo como caso particular)",
    incorrectas: [
      "Curvas técnicas hechas únicamente con compás",
      "Curvas espirales cónicas tridimensionales"
    ]
  },
  {
    enunciado: "¿Cómo se obtiene una elipse como sección cónica?",
    correcta: "Cortando una sola hoja del cono con un plano oblicuo que no es paralelo a una generatriz y que forma con el eje un ángulo mayor que el de la generatriz",
    incorrectas: [
      "Cortando con un plano paralelo a una generatriz (parábola)",
      "Cortando con un plano que corta ambas hojas del cono (hipérbola)"
    ]
  },
  {
    enunciado: "¿Cómo se obtiene una parábola como sección cónica?",
    correcta: "Cortando el cono con un plano paralelo a una generatriz",
    incorrectas: [
      "Cortando con un plano perpendicular al eje (círculo)",
      "Cortando con un plano que corta ambas hojas del cono (hipérbola)"
    ]
  },
  {
    enunciado: "¿Cómo se obtiene una hipérbola como sección cónica?",
    correcta: "Cortando el cono con un plano que intersecta ambas hojas (nappes), equivalente a formar con el eje un ángulo menor que el de la generatriz",
    incorrectas: [
      "Cortando con un plano paralelo a una generatriz (parábola)",
      "Cortando solo una hoja con un plano oblicuo no paralelo a generatriz (elipse)"
    ]
  },
  {
    enunciado: "¿Cuál es la definición de elipse como lugar geométrico?",
    correcta: "Lugar geométrico de los puntos del plano cuya suma de distancias a dos puntos fijos (focos) es constante e igual a 2a",
    incorrectas: [
      "Lugar geométrico de los puntos que equidistan de un centro",
      "Lugar geométrico de los puntos cuya diferencia de distancias a dos focos es constante e igual a 2a"
    ]
  },
  {
    enunciado: "¿Cuál es la definición de hipérbola como lugar geométrico?",
    correcta: "Lugar geométrico de los puntos del plano cuya diferencia absoluta de distancias a dos puntos fijos (focos) es constante e igual a 2a",
    incorrectas: [
      "Lugar geométrico de los puntos cuya suma de distancias a dos focos es constante e igual a 2a",
      "Lugar geométrico de los puntos que equidistan de un punto fijo y una recta fija"
    ]
  },
  {
    enunciado: "¿Cuál es la definición de parábola como lugar geométrico?",
    correcta: "Lugar geométrico de los puntos del plano que equidistan de un punto fijo (foco) y de una recta fija (directriz)",
    incorrectas: [
      "Lugar geométrico de los puntos cuya suma de distancias a dos focos es constante",
      "Lugar geométrico de los puntos cuya diferencia de distancias a dos focos es constante"
    ]
  },
  {
    enunciado: "¿Qué es la excentricidad e de una cónica?",
    correcta: "Un número que clasifica la cónica: elipse si e<1, parábola si e=1 e hipérbola si e>1",
    incorrectas: [
      "La distancia del centro al foco en cualquier cónica",
      "El grosor de la curva en el trazado"
    ]
  },
  {
    enunciado: "¿Qué son los radios vectores en una cónica con focos?",
    correcta: "Los segmentos que unen un punto cualquiera de la curva con cada uno de los focos",
    incorrectas: [
      "Los ejes de la cónica",
      "Las rectas asíntotas"
    ]
  },
  {
    enunciado: "¿Dónde puede considerarse el “segundo foco” de una parábola en lenguaje proyectivo?",
    correcta: "En el infinito, sobre la dirección del eje, como punto impropio asociado a rayos paralelos",
    incorrectas: [
      "En el vértice de la curva",
      "En la directriz, siempre a la misma distancia del foco"
    ]
  },
  {
    enunciado: "¿Qué son las asíntotas de una hipérbola?",
    correcta: "Dos rectas que pasan por el centro y que la curva se aproxima indefinidamente sin llegar a cortarlas",
    incorrectas: [
      "Los ejes de simetría que siempre coinciden con la curva",
      "Las tangentes en los vértices de la hipérbola"
    ]
  },
  {
    enunciado: "¿Qué es el parámetro p de una parábola en la forma y² = 2px?",
    correcta: "Un valor ligado a la abertura de la parábola; en esa forma, el foco está a distancia p/2 del vértice y el lado recto tiene longitud 2p",
    incorrectas: [
      "La distancia constante entre el foco y la directriz",
      "La longitud total de la parábola"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la tangente en un punto de una elipse desde la propiedad focal?",
    correcta: "Forma el mismo ángulo con los radios vectores hacia ambos focos (propiedad de reflexión)",
    incorrectas: [
      "Siempre pasa por el centro de la elipse",
      "Siempre es perpendicular al eje mayor"
    ]
  },
  {
    enunciado: "¿Qué establece el teorema de Dandelin?",
    correcta: "Relaciona las secciones cónicas con sus focos mediante esferas tangentes al cono y al plano de sección",
    incorrectas: [
      "Una fórmula para calcular el área de la elipse",
      "Un método de acotación para dibujo técnico"
    ]
  },
  {
    enunciado: "¿Qué es una hipérbola equilátera o rectangular?",
    correcta: "La hipérbola cuyas asíntotas son perpendiculares entre sí, equivalente a a=b en la forma canónica",
    incorrectas: [
      "Una hipérbola con focos coincidentes",
      "Una hipérbola que se convierte en circunferencia"
    ]
  },
  {
    enunciado: "¿Qué relación fundamental cumplen a, b y c en la elipse?",
    correcta: "c² = a² − b²",
    incorrectas: [
      "a² = b² + c²",
      "c² = a² + b²"
    ]
  },
  {
    enunciado: "¿Qué relación fundamental cumplen a, b y c en la hipérbola?",
    correcta: "c² = a² + b²",
    incorrectas: [
      "c² = a² − b²",
      "a² = b² + c²"
    ]
  },
  {
    enunciado: "¿Qué son los diámetros conjugados en una elipse?",
    correcta: "Dos diámetros tales que cada uno biseca a las cuerdas paralelas al otro; los ejes mayor y menor son un caso particular de diámetros conjugados perpendiculares",
    incorrectas: [
      "Dos diámetros que siempre miden lo mismo",
      "Dos diámetros necesariamente paralelos"
    ]
  },
  {
    enunciado: "¿En qué consiste el método de la tira de papel (o tarjeta) para trazar una elipse?",
    correcta: "Un método mecánico: una tira con marcas se desliza manteniendo dos puntos sobre los ejes, y un punto marcado describe una elipse de semiejes a y b",
    incorrectas: [
      "Calcar una elipse usando una tarjeta rígida",
      "Dibujar una elipse únicamente con papel milimetrado"
    ]
  },
  {
    enunciado: "¿Qué propiedad reflectora tiene la parábola?",
    correcta: "Un rayo que sale del foco se refleja saliendo paralelo al eje, y un rayo paralelo al eje se refleja pasando por el foco",
    incorrectas: [
      "Un rayo que sale del foco se refleja volviendo al mismo foco",
      "Un rayo paralelo al eje se refleja yendo al otro foco"
    ]
  },
  {
    enunciado: "¿Qué propiedad reflectora tiene la elipse?",
    correcta: "Un rayo que sale de un foco se refleja pasando por el otro foco",
    incorrectas: [
      "Un rayo que sale de un foco se refleja paralelo al eje",
      "Un rayo siempre se refleja hacia el infinito"
    ]
  },
  {
    enunciado: "¿En qué consiste la construcción por puntos de una elipse mediante focos?",
    correcta: "Se fijan focos F y F’ y una constante 2a; para cada punto del eje se trazan arcos con radios complementarios que suman 2a y su intersección da puntos de la elipse",
    incorrectas: [
      "Se colocan puntos al azar y se unen con una curva suave",
      "Se dibuja la elipse aumentando el radio del compás continuamente"
    ]
  },
  {
    enunciado: "¿Qué es el latus rectum (lado recto) en una cónica con foco?",
    correcta: "La cuerda que pasa por el foco y es perpendicular al eje de la cónica; en la parábola su longitud es 2p en la forma y² = 2px",
    incorrectas: [
      "La recta tangente en el vértice",
      "El eje mayor de la elipse"
    ]
  },
  {
    enunciado: "¿Qué es la cónica degenerada cuando el plano de sección pasa por el vértice del cono?",
    correcta: "La sección deja de ser una cónica propia y aparece un caso degenerado como un punto, una recta o un par de rectas",
    incorrectas: [
      "Se genera una esfera",
      "Se obtiene siempre una circunferencia"
    ]
  },
  {
    enunciado: "¿Qué es la normal a una cónica en un punto?",
    correcta: "La recta perpendicular a la tangente en ese punto",
    incorrectas: [
      "La recta paralela al eje en ese punto",
      "La recta que une el punto con el centro en cualquier cónica"
    ]
  },
  {
    enunciado: "¿Dónde están los vértices de la hipérbola?",
    correcta: "En los puntos donde el eje real corta a la curva; están separados una distancia 2a",
    incorrectas: [
      "En los focos",
      "En el infinito sobre las asíntotas"
    ]
  },
  {
    enunciado: "¿Qué es el eje imaginario de la hipérbola?",
    correcta: "El eje perpendicular al real que pasa por el centro; no corta a la curva pero interviene en la dirección de las asíntotas y su semilongitud es b",
    incorrectas: [
      "Un eje que no existe y no tiene función",
      "El eje real con longitud 2a"
    ]
  },
  {
    enunciado: "¿Qué afirmación es correcta sobre ‘cinco puntos determinan una cónica’?",
    correcta: "Cinco puntos en posición general determinan una única cónica que pasa por ellos",
    incorrectas: [
      "Cualquier cinco puntos determinan siempre una cónica sin excepciones",
      "Se necesitan seis puntos para determinar una cónica"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial hay entre círculo y elipse como secciones cónicas?",
    correcta: "El círculo es el caso particular de elipse cuando el plano de sección es perpendicular al eje del cono",
    incorrectas: [
      "El círculo es una parábola cerrada",
      "El círculo solo puede obtenerse con un plano paralelo a una generatriz"
    ]
  },
  {
    enunciado: "¿Qué es la afinidad como idea general aplicada a la elipse en dibujo técnico?",
    correcta: "Una transformación paralela que permite obtener una elipse como imagen afín de una circunferencia al deformar en una dirección manteniendo paralelismo",
    incorrectas: [
      "Estirar el papel para deformar un círculo físicamente",
      "Aumentar la resolución del dibujo para que parezca elipse"
    ]
  },
  {
    enunciado: "¿Qué es una hipérbola en términos de secciones de un cono doble?",
    correcta: "La curva que se obtiene cuando el plano de corte intersecta ambas nappes del cono doble",
    incorrectas: [
      "La curva que se obtiene cuando el plano es paralelo a una generatriz",
      "La curva que se obtiene cuando el plano es perpendicular al eje"
    ]
  },
  {
    enunciado: "¿Qué relación expresa la excentricidad con directriz en una cónica (definición directriz)?",
    correcta: "Para cada punto P de la cónica, la razón PF/PD es constante e igual a e, donde D es el pie de la perpendicular a la directriz",
    incorrectas: [
      "Para cada punto P, PF + PD es constante e igual a e",
      "Para cada punto P, PF − PD es constante e igual a e"
    ]
  },
  {
    enunciado: "¿Qué es la focal de una cónica en la notación habitual a, b, c?",
    correcta: "La distancia entre focos, igual a 2c",
    incorrectas: [
      "La distancia del centro al vértice, igual a 2a",
      "La distancia del foco a la directriz, igual a p"
    ]
  },
  {
    enunciado: "¿Qué describe mejor una asíntota de hipérbola como idea geométrica?",
    correcta: "Una dirección límite: cuanto más se aleja el punto de la hipérbola, más se aproxima su rama a esas rectas sin alcanzarlas",
    incorrectas: [
      "Una recta que corta siempre a la hipérbola en dos puntos",
      "Una recta perpendicular al eje real en el vértice"
    ]
  },
  {
    enunciado: "¿Qué es un elipsógrafo?",
    correcta: "Un mecanismo articulado que guía un punto para trazar una elipse de forma continua",
    incorrectas: [
      "Un compás normal abierto al máximo",
      "Una cuerda atada a dos clavos que siempre dibuja hipérbolas"
    ]
  },
  {
    enunciado: "¿Qué afirmación es correcta sobre los ejes de una elipse?",
    correcta: "El eje mayor mide 2a, el eje menor mide 2b y ambos son perpendiculares y se cortan en el centro",
    incorrectas: [
      "El eje mayor mide 2b y el eje menor mide 2a",
      "Los ejes de una elipse nunca son perpendiculares"
    ]
  },
  {
    enunciado: "¿Qué afirmación es correcta sobre los elementos de la parábola en su eje?",
    correcta: "El vértice es el punto de la parábola más cercano a la directriz y también el más cercano al foco sobre el eje",
    incorrectas: [
      "El vértice coincide siempre con el foco",
      "La directriz pasa siempre por el vértice"
    ]
  },
  {
    enunciado: "¿Qué afirmación es correcta sobre el centro en las cónicas?",
    correcta: "La elipse y la hipérbola tienen centro; la parábola no tiene centro",
    incorrectas: [
      "Todas las cónicas tienen centro",
      "Ninguna cónica tiene centro"
    ]
  },
  {
    enunciado: "¿Qué propiedad define el eje de una parábola?",
    correcta: "Es la recta que pasa por el foco y el vértice y es perpendicular a la directriz",
    incorrectas: [
      "Es cualquier recta que pase por el foco",
      "Es la recta paralela a la directriz que pasa por el vértice"
    ]
  },
  {
    enunciado: "¿Qué afirmación es correcta sobre la relación entre tangente y normal en una cónica?",
    correcta: "En cualquier punto, la normal es perpendicular a la tangente y ambas determinan la dirección local de la curva",
    incorrectas: [
      "La normal y la tangente coinciden en el vértice de la parábola",
      "La normal siempre pasa por los focos en todas las cónicas"
    ]
  },
  {
    enunciado: "¿Qué afirmación es correcta sobre una hipérbola rectangular?",
    correcta: "Sus asíntotas son perpendiculares y su forma canónica puede escribirse como x²/a² − y²/a² = 1",
    incorrectas: [
      "Sus asíntotas son paralelas entre sí",
      "Tiene excentricidad menor que 1"
    ]
  }
];
