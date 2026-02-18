// temarios/01-la-tierra-en-el-universo-geologia-de-los-planetas-origen-de-la-tierra-y-del-sistema-solar.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué edad aproximada se atribuye al Universo según el modelo del Big Bang?",
    correcta: "13.800 millones de años",
    incorrectas: [
      "4.600 millones de años",
      "2.500 millones de años"
    ]
  },
  {
    enunciado: "¿En qué brazo de la Vía Láctea se encuentra situado el Sistema Solar?",
    correcta: "En el Brazo de Orión",
    incorrectas: [
      "En el Brazo de Sagitario",
      "En el Brazo de Perseo"
    ]
  },
  {
    enunciado: "¿Qué porcentaje aproximado de la materia del Universo corresponde a materia oscura?",
    correcta: "Alrededor del 27%",
    incorrectas: [
      "Más del 70%",
      "Menos del 5%"
    ]
  },
  {
    enunciado: "¿Cómo se denomina la forma real de la Tierra debido a su achatamiento polar?",
    correcta: "Geoide",
    incorrectas: [
      "Esfera perfecta",
      "Elipsoide regular"
    ]
  },
  {
    enunciado: "¿Cuál es la densidad media aproximada de la Tierra?",
    correcta: "5,5 g/cm³",
    incorrectas: [
      "3,3 g/cm³",
      "7,9 g/cm³"
    ]
  },
  {
    enunciado: "¿Qué genera el campo magnético terrestre?",
    correcta: "El movimiento de hierro fundido en el núcleo externo",
    incorrectas: [
      "La rotación de la corteza terrestre",
      "La energía solar absorbida por la atmósfera"
    ]
  },
  {
    enunciado: "¿Qué consecuencia directa tiene la rotación terrestre?",
    correcta: "La sucesión del día y la noche",
    incorrectas: [
      "La existencia de estaciones",
      "El cambio de la órbita terrestre"
    ]
  },
  {
    enunciado: "¿Cuál es la duración del movimiento de traslación de la Tierra?",
    correcta: "365 días y unas 6 horas",
    incorrectas: [
      "24 horas exactas",
      "28 días"
    ]
  },
  {
    enunciado: "¿Qué fenómeno explica la variación cíclica del eje terrestre en períodos de 26.000 años?",
    correcta: "La precesión",
    incorrectas: [
      "La nutación",
      "El efecto Coriolis"
    ]
  },
  {
    enunciado: "¿Qué teoría relaciona las variaciones orbitales de la Tierra con los ciclos glaciares?",
    correcta: "Los ciclos de Milankovitch",
    incorrectas: [
      "La teoría de Wegener",
      "La hipótesis nebular"
    ]
  },
  {
    enunciado: "¿Cuál es la hipótesis más aceptada sobre el origen de la Luna?",
    correcta: "Formación tras un gran impacto con un protoplaneta",
    incorrectas: [
      "Captura de un cuerpo celeste errante",
      "Condensación simultánea con la Tierra"
    ]
  },
  {
    enunciado: "¿Qué influencia principal ejerce la Luna sobre la Tierra?",
    correcta: "La generación de mareas",
    incorrectas: [
      "La duración del año terrestre",
      "La inclinación del eje de la Tierra"
    ]
  },
  {
    enunciado: "¿Qué tipo de estrella es el Sol?",
    correcta: "Una enana amarilla de tipo espectral G2V",
    incorrectas: [
      "Una gigante roja",
      "Una estrella de neutrones"
    ]
  },
  {
    enunciado: "¿Cómo se clasifican los planetas interiores del Sistema Solar?",
    correcta: "Rocosos o terrestres",
    incorrectas: [
      "Gigantes helados",
      "Enanos"
    ]
  },
  {
    enunciado: "¿Cuál de estos cuerpos pertenece al cinturón de asteroides?",
    correcta: "Ceres",
    incorrectas: [
      "Plutón",
      "Eris"
    ]
  },
  {
    enunciado: "¿Qué planeta presenta una superficie con temperaturas muy elevadas debido al efecto invernadero extremo?",
    correcta: "Venus",
    incorrectas: [
      "Mercurio",
      "Marte"
    ]
  },
  {
    enunciado: "¿Cuál es el planeta con el volcán más grande conocido del Sistema Solar?",
    correcta: "Marte",
    incorrectas: [
      "La Tierra",
      "Venus"
    ]
  },
  {
    enunciado: "¿Qué satélite de Júpiter destaca por su intenso vulcanismo?",
    correcta: "Ío",
    incorrectas: [
      "Europa",
      "Ganímedes"
    ]
  },
  {
    enunciado: "¿Qué satélite de Saturno presenta géiseres de agua helada y posible océano interno?",
    correcta: "Encélado",
    incorrectas: [
      "Titán",
      "Mimas"
    ]
  },
  {
    enunciado: "¿Qué planeta del Sistema Solar carece de campo magnético significativo?",
    correcta: "Venus",
    incorrectas: [
      "La Tierra",
      "Júpiter"
    ]
  },
  {
    enunciado: "¿Qué teoría explica mejor la formación del Sistema Solar?",
    correcta: "La teoría nebular",
    incorrectas: [
      "La teoría geocéntrica",
      "La hipótesis del estado estacionario"
    ]
  },
  {
    enunciado: "¿Qué edad aproximada se atribuye a la formación de la Tierra?",
    correcta: "4.600 millones de años",
    incorrectas: [
      "3.000 millones de años",
      "2.000 millones de años"
    ]
  },
  {
    enunciado: "¿Qué proceso explica la separación de materiales por densidad en la Tierra primitiva?",
    correcta: "La diferenciación planetaria",
    incorrectas: [
      "La tectónica de placas",
      "La erosión"
    ]
  },
  {
    enunciado: "¿Qué fenómeno se produce cuando un planeta crece por la unión de cuerpos menores?",
    correcta: "La acreción de planetesimales",
    incorrectas: [
      "La subducción",
      "La sedimentación"
    ]
  },
  {
    enunciado: "¿Qué cuerpos celestes se consideran los restos más primitivos del Sistema Solar?",
    correcta: "Los meteoritos y asteroides",
    incorrectas: [
      "Los planetas exteriores",
      "Las lunas de Júpiter"
    ]
  },
  {
    enunciado: "¿Qué son los planetas enanos?",
    correcta: "Cuerpos que orbitan al Sol, con forma casi esférica, pero sin limpiar su órbita",
    incorrectas: [
      "Pequeños satélites de los planetas gigantes",
      "Asteroides con órbita estable"
    ]
  },
  {
    enunciado: "¿Qué región del Sistema Solar se sitúa más allá de Neptuno y contiene a Plutón?",
    correcta: "El cinturón de Kuiper",
    incorrectas: [
      "El cinturón de asteroides",
      "La nube de Oort"
    ]
  },
  {
    enunciado: "¿Qué satélite de Saturno posee lagos y mares de metano líquido?",
    correcta: "Titán",
    incorrectas: [
      "Rea",
      "Tetis"
    ]
  },
  {
    enunciado: "¿Qué planeta es conocido como el ‘gemelo de la Tierra’ por su tamaño pero no por sus condiciones?",
    correcta: "Venus",
    incorrectas: [
      "Marte",
      "Mercurio"
    ]
  },
  {
    enunciado: "¿Cuál es el planeta con el día más largo respecto a su rotación?",
    correcta: "Venus",
    incorrectas: [
      "Mercurio",
      "Saturno"
    ]
  },
  {
    enunciado: "¿Qué planeta muestra evidencias de antiguos cauces fluviales y agua líquida en el pasado?",
    correcta: "Marte",
    incorrectas: [
      "Mercurio",
      "Urano"
    ]
  },
  {
    enunciado: "¿Qué planeta gigante tiene un sistema de anillos muy visible desde la Tierra?",
    correcta: "Saturno",
    incorrectas: [
      "Neptuno",
      "Júpiter"
    ]
  },
  {
    enunciado: "¿Qué planeta presenta vientos supersónicos y un color azul característico?",
    correcta: "Neptuno",
    incorrectas: [
      "Urano",
      "Saturno"
    ]
  },
  {
    enunciado: "¿Cuál es el satélite natural más grande del Sistema Solar?",
    correcta: "Ganímedes",
    incorrectas: [
      "Titán",
      "Calisto"
    ]
  },
  {
    enunciado: "¿Qué planeta gira inclinado casi 98° sobre su eje, produciendo estaciones extremas?",
    correcta: "Urano",
    incorrectas: [
      "Neptuno",
      "Júpiter"
    ]
  },
  {
    enunciado: "¿Qué planeta es el más cercano al Sol?",
    correcta: "Mercurio",
    incorrectas: [
      "Venus",
      "La Tierra"
    ]
  },
  {
    enunciado: "¿Qué fenómeno protege la Tierra del viento solar y de la radiación cósmica?",
    correcta: "El campo magnético terrestre",
    incorrectas: [
      "La rotación terrestre",
      "La atmósfera ozónica"
    ]
  },
  {
    enunciado: "¿Qué método se emplea para conocer la edad de la Tierra y de los meteoritos?",
    correcta: "La datación radiométrica",
    incorrectas: [
      "La estratigrafía comparada",
      "El análisis de fósiles"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el estudio de la geología planetaria?",
    correcta: "Permite comprender procesos de la Tierra y buscar vida en otros mundos",
    incorrectas: [
      "Sirve solo para clasificar planetas",
      "Carece de utilidad práctica en la actualidad"
    ]
  }
];
