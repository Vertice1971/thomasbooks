// temarios/72-posicion-de-la-tierra-en-el-universo-geocentrico-vs-heliocentrico-gravitacion-universal-peso-unificacion-cielo-tierra.js
// 40 preguntas tipo test (A/B/C) para el Tema 72.
// Formato compatible con 0-Plantilla-temario.js: var PREGUNTAS = [{ enunciado, correcta, incorrectas:[..] }, ...]
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo esencial caracteriza al modelo geocéntrico clásico?",
    correcta: "La Tierra inmóvil en el centro y los astros moviéndose en torno a ella",
    incorrectas: [
      "El Sol en el centro con órbitas elípticas",
      "La Tierra girando alrededor de la Luna"
    ]
  },
  {
    enunciado: "¿Qué artificio geométrico empleaba el sistema ptolemaico para explicar retrogradaciones?",
    correcta: "Epiciclos y deferentes",
    incorrectas: [
      "Órbitas elípticas de baja excentricidad",
      "Trayectorias parabólicas abiertas"
    ]
  },
  {
    enunciado: "¿Qué afirmación resume el heliocentrismo copernicano?",
    correcta: "Los planetas, incluida la Tierra, orbitan alrededor del Sol",
    incorrectas: [
      "El Sol y todos los planetas orbitan alrededor de la Tierra",
      "La Tierra gira alrededor de la Luna y el Sol alrededor de la Tierra"
    ]
  },
  {
    enunciado: "¿Qué observación de Galileo refutó la idea de que todo gira en torno a la Tierra?",
    correcta: "Los satélites de Júpiter",
    incorrectas: [
      "La existencia de los cometas",
      "La forma circular de la Luna"
    ]
  },
  {
    enunciado: "¿Qué evidencia observacional apoya el heliocentrismo y requiere un planeta interior a la Tierra?",
    correcta: "Las fases de Venus",
    incorrectas: [
      "Las auroras boreales",
      "Los eclipses lunares"
    ]
  },
  {
    enunciado: "La primera ley de Kepler establece que:",
    correcta: "Los planetas se mueven en órbitas elípticas con el Sol en un foco",
    incorrectas: [
      "El área barrida en tiempos iguales es distinta",
      "El periodo orbital es proporcional a la distancia lineal"
    ]
  },
  {
    enunciado: "La segunda ley de Kepler implica que el planeta:",
    correcta: "Barre áreas iguales en tiempos iguales",
    incorrectas: [
      "Mantiene velocidad constante en toda la órbita",
      "Se mueve en círculos perfectos"
    ]
  },
  {
    enunciado: "La tercera ley de Kepler relaciona:",
    correcta: "El cuadrado del periodo con el cubo del semieje mayor (T² ∝ a³)",
    incorrectas: [
      "La masa del planeta con su excentricidad",
      "El periodo con la velocidad media al cuadrado"
    ]
  },
  {
    enunciado: "¿Qué formula la ley de gravitación universal de Newton?",
    correcta: "Dos masas se atraen con una fuerza ∝ m1·m2 / r²",
    incorrectas: [
      "Dos masas se repelen con fuerza ∝ r",
      "La fuerza gravitaria es independiente de la distancia"
    ]
  },
  {
    enunciado: "La constante G de la gravitación se determinó por primera vez con el experimento de:",
    correcta: "Cavendish",
    incorrectas: [
      "Galileo",
      "Kepler"
    ]
  },
  {
    enunciado: "En una órbita circular de radio r alrededor de una masa M, la velocidad orbital es:",
    correcta: "v = √(GM/r)",
    incorrectas: [
      "v = GM/r²",
      "v = r/√(GM)"
    ]
  },
  {
    enunciado: "La velocidad de escape desde la superficie de un planeta de masa M y radio R es:",
    correcta: "v_e = √(2GM/R)",
    incorrectas: [
      "v_e = √(GM/2R)",
      "v_e = GM/R"
    ]
  },
  {
    enunciado: "Masa y peso se diferencian en que:",
    correcta: "La masa es cantidad de materia; el peso es la fuerza gravitatoria sobre esa masa",
    incorrectas: [
      "El peso es invariante y la masa depende del lugar",
      "La masa es una fuerza y el peso una energía"
    ]
  },
  {
    enunciado: "¿Cómo varía g con la altura sobre la superficie terrestre?",
    correcta: "Disminuye aproximadamente como 1/r²",
    incorrectas: [
      "Aumenta linealmente con la altura",
      "Permanece exactamente constante"
    ]
  },
  {
    enunciado: "La microgravedad en órbita baja se explica porque:",
    correcta: "Los astronautas están en caída libre alrededor de la Tierra",
    incorrectas: [
      "La gravedad no actúa fuera de la atmósfera",
      "La masa de los astronautas disminuye"
    ]
  },
  {
    enunciado: "Un satélite geoestacionario debe:",
    correcta: "Orbitar en el plano ecuatorial con periodo de 24 h",
    incorrectas: [
      "Tener cualquier inclinación mientras conserve 24 h",
      "Girar con periodo de 12 h para cubrir todo el globo"
    ]
  },
  {
    enunciado: "¿Qué fenómeno astronómico es evidencia geométrica del movimiento de la Tierra alrededor del Sol?",
    correcta: "La paralaje estelar anual",
    incorrectas: [
      "Las mareas oceánicas",
      "La precesión de los equinoccios por sí sola"
    ]
  },
  {
    enunciado: "¿Qué magnitud NO aparece explícitamente en F = G m1 m2 / r²?",
    correcta: "La velocidad relativa de las masas",
    incorrectas: [
      "La distancia entre los centros",
      "Las masas de los cuerpos"
    ]
  },
  {
    enunciado: "La fuerza gravitatoria es de naturaleza:",
    correcta: "Atractiva y central",
    incorrectas: [
      "Repulsiva y tangencial",
      "Atractiva solo a distancias cortas y repulsiva a largas"
    ]
  },
  {
    enunciado: "La abolición del dualismo aristotélico se produjo porque Newton mostró que:",
    correcta: "La misma ley rige el cielo y la Tierra",
    incorrectas: [
      "El cielo obedece leyes distintas más simples",
      "La Tierra no sufre acción gravitatoria"
    ]
  },
  {
    enunciado: "El peso de un cuerpo de masa m a latitudes altas es ligeramente mayor que en el ecuador porque:",
    correcta: "La rotación disminuye g efectiva en el ecuador y la Tierra está achatada",
    incorrectas: [
      "La masa del cuerpo aumenta con la latitud",
      "El valor de G es mayor cerca de los polos"
    ]
  },
  {
    enunciado: "Las mareas principales se deben a:",
    correcta: "Las fuerzas de marea de la Luna y el Sol",
    incorrectas: [
      "El viento y la presión atmosférica exclusivamente",
      "La rotación de la Tierra sin influencia gravitatoria externa"
    ]
  },
  {
    enunciado: "¿Qué cambio conceptual introdujo Copérnico respecto a Ptolomeo?",
    correcta: "Colocó el Sol en el centro y a la Tierra como un planeta más",
    incorrectas: [
      "Introdujo epiciclos por primera vez",
      "Demostró experimentalmente la ley del inverso del cuadrado"
    ]
  },
  {
    enunciado: "¿Qué explica la ley de áreas de Kepler (2ª) sobre la velocidad orbital?",
    correcta: "El planeta se mueve más rápido cerca del perihelio que en el afelio",
    incorrectas: [
      "La velocidad es constante en toda la órbita",
      "La velocidad aumenta con el semieje mayor"
    ]
  },
  {
    enunciado: "Si la distancia Tierra–Sol aumentase un 10% manteniendo masas constantes, el periodo orbital:",
    correcta: "Aumentaría, según T² ∝ a³",
    incorrectas: [
      "Disminuiría proporcionalmente a a",
      "Permanecería inalterado"
    ]
  },
  {
    enunciado: "La aberración estelar descubierta por Bradley (1728) aportó evidencia de:",
    correcta: "El movimiento de la Tierra alrededor del Sol",
    incorrectas: [
      "La existencia de órbitas circulares perfectas",
      "El geocentrismo con epiciclos"
    ]
  },
  {
    enunciado: "El valor de g en la cima de una montaña respecto al nivel del mar es:",
    correcta: "Ligeramente menor, por estar más lejos del centro de la Tierra",
    incorrectas: [
      "Mayor, porque hay menos atmósfera encima",
      "Igual, porque g es constante en todo el planeta"
    ]
  },
  {
    enunciado: "La trayectoria de un cometa no ligado gravitatoriamente al Sol es típicamente:",
    correcta: "Parabólica o hiperbólica",
    incorrectas: [
      "Siempre circular",
      "Una espiral logarítmica"
    ]
  },
  {
    enunciado: "Para justificar órbitas elípticas desde Newton se usa que la fuerza es:",
    correcta: "Central e inversamente proporcional al cuadrado de la distancia",
    incorrectas: [
      "Constante en módulo e independiente de r",
      "Proporcional a r"
    ]
  },
  {
    enunciado: "El centro de masas del sistema Sol–planeta:",
    correcta: "Está cercano al centro del Sol pero ambos orbitan alrededor de él",
    incorrectas: [
      "Está siempre exactamente en el centro del Sol",
      "Se encuentra en el centro geométrico del planeta"
    ]
  },
  {
    enunciado: "¿Qué significa que la gravitación sea universal?",
    correcta: "Que todos los cuerpos con masa se atraen, en cualquier lugar del universo",
    incorrectas: [
      "Que solo actúa en el Sistema Solar",
      "Que no depende de la masa de los cuerpos"
    ]
  },
  {
    enunciado: "El peso aparente en un ascensor que acelera hacia arriba es:",
    correcta: "Mayor que el peso en reposo",
    incorrectas: [
      "Menor que el peso en reposo",
      "Igual, la aceleración no lo afecta"
    ]
  },
  {
    enunciado: "En una órbita elíptica, el punto de máxima proximidad al foco se denomina:",
    correcta: "Perihelio (si orbita al Sol)",
    incorrectas: [
      "Afelio",
      "Nodo ascendente"
    ]
  },
  {
    enunciado: "¿Cuál fue un impacto cultural central del heliocentrismo?",
    correcta: "Desplazó a la Tierra del centro del cosmos, cambiando la cosmovisión",
    incorrectas: [
      "Demostró que la Tierra es plana",
      "Probó que las órbitas son círculos perfectos"
    ]
  },
  {
    enunciado: "La unificación cielo–Tierra permitió:",
    correcta: "Explicar eclipses, cometas y caídas con la misma ley",
    incorrectas: [
      "Separar la física en dos dominios incompatibles",
      "Abandonar las matemáticas en astronomía"
    ]
  },
  {
    enunciado: "Una masa m en órbita circular experimenta aceleración centrípeta debida a:",
    correcta: "La fuerza de gravedad que actúa como fuerza centrípeta",
    incorrectas: [
      "Una fuerza ficticia hacia fuera que la mantiene en órbita",
      "Una fuerza magnética universal"
    ]
  },
  {
    enunciado: "La precesión de los equinoccios se debe principalmente a:",
    correcta: "El torque gravitatorio sobre el abultamiento ecuatorial terrestre",
    incorrectas: [
      "La rotación diferencial del núcleo externo",
      "El viento solar directamente"
    ]
  },
  {
    enunciado: "La órbita geoestacionaria tiene radio tal que:",
    correcta: "El periodo orbital coincide con el de rotación terrestre sideral",
    incorrectas: [
      "La velocidad orbital sea igual a la velocidad de escape",
      "La energía mecánica total sea positiva"
    ]
  },
  {
    enunciado: "Según el marco clásico, el campo gravitatorio cerca de la superficie es aproximadamente:",
    correcta: "Uniforme y dirigido hacia el centro de la Tierra",
    incorrectas: [
      "Radial hacia fuera",
      "Nulo por simetría"
    ]
  }
];
