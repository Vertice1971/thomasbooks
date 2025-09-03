// temarios/30-La-formacion-de-las-monarquias-feudales-en-europa.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué tratado dividió el Imperio Carolingio en tres reinos en el año 843?",
    correcta: "El Tratado de Verdún",
    incorrectas: [
      "El Tratado de París",
      "El Tratado de Worms"
    ]
  },
  {
    enunciado: "¿Cuál fue la principal consecuencia política de la fragmentación del Imperio Carolingio?",
    correcta: "La formación de poderes locales controlados por señores feudales",
    incorrectas: [
      "La inmediata unificación de todos los reinos europeos",
      "La creación de un parlamento supranacional"
    ]
  },
  {
    enunciado: "¿Qué monarca inglés consolidó su poder tras la batalla de Hastings en 1066?",
    correcta: "Guillermo el Conquistador",
    incorrectas: [
      "Ricardo Corazón de León",
      "Enrique II Plantagenet"
    ]
  },
  {
    enunciado: "¿Qué documento de 1215 limitó por primera vez el poder absoluto del rey en Inglaterra?",
    correcta: "La Carta Magna",
    incorrectas: [
      "El Habeas Corpus",
      "La Bula de Oro"
    ]
  },
  {
    enunciado: "¿Qué dinastía comenzó a reinar en Francia en el año 987 consolidando la monarquía?",
    correcta: "La dinastía Capeta",
    incorrectas: [
      "La dinastía Valois",
      "La dinastía Borbón"
    ]
  },
  {
    enunciado: "¿Qué registro catastral elaboró Guillermo el Conquistador para centralizar la administración en Inglaterra?",
    correcta: "El Domesday Book",
    incorrectas: [
      "El Libro de las Rentas",
      "El Códice Real"
    ]
  },
  {
    enunciado: "¿Qué conflicto bélico enfrentó a Francia e Inglaterra entre 1337 y 1453?",
    correcta: "La Guerra de los Cien Años",
    incorrectas: [
      "La Guerra de las Dos Rosas",
      "La Guerra de Sucesión Española"
    ]
  },
  {
    enunciado: "¿Qué bula de 1356 reguló la elección del emperador del Sacro Imperio Romano Germánico?",
    correcta: "La Bula de Oro",
    incorrectas: [
      "La Bula Unam Sanctam",
      "La Bula Inter Caetera"
    ]
  },
  {
    enunciado: "¿Qué tratado puso fin a la Querella de las Investiduras en 1122?",
    correcta: "El Concordato de Worms",
    incorrectas: [
      "El Tratado de Letrán",
      "El Edicto de Milán"
    ]
  },
  {
    enunciado: "¿Qué grupo social emergente se fortaleció con el desarrollo urbano y comercial de la Baja Edad Media?",
    correcta: "La burguesía",
    incorrectas: [
      "La alta nobleza",
      "El campesinado libre"
    ]
  },
  {
    enunciado: "¿Qué pensador medieval escribió 'De regno', defendiendo el papel del rey como garante del bien común?",
    correcta: "Tomás de Aquino",
    incorrectas: [
      "Marsilio de Padua",
      "Guillermo de Ockham"
    ]
  },
  {
    enunciado: "¿En qué ciudad italiana surgió la universidad más importante para el estudio del Derecho Romano?",
    correcta: "Bolonia",
    incorrectas: [
      "Padua",
      "Pavía"
    ]
  },
  {
    enunciado: "¿Qué revuelta campesina tuvo lugar en Francia en 1358?",
    correcta: "La Jacquerie",
    incorrectas: [
      "La revuelta de los Ciompi",
      "La rebelión de Wat Tyler"
    ]
  },
  {
    enunciado: "¿Qué sistema agrícola introdujo una rotación trienal que mejoró la productividad en la Edad Media?",
    correcta: "El sistema trienal",
    incorrectas: [
      "El sistema bienal",
      "El barbecho continuo"
    ]
  },
  {
    enunciado: "¿Qué rey francés es considerado clave en la centralización del poder durante la Guerra de los Cien Años?",
    correcta: "Carlos VII",
    incorrectas: [
      "Luis IX",
      "Felipe II Augusto"
    ]
  },
  {
    enunciado: "¿Qué cronista inglés relató la conquista normanda de Inglaterra?",
    correcta: "Guillermo de Poitiers",
    incorrectas: [
      "Froissart",
      "Matthew Paris"
    ]
  },
  {
    enunciado: "¿Qué monarquía europea se caracterizó por mantener un sistema electivo en la elección de su soberano?",
    correcta: "El Sacro Imperio Romano Germánico",
    incorrectas: [
      "Francia",
      "Inglaterra"
    ]
  },
  {
    enunciado: "¿Qué fue el 'Dictatus Papae' promulgado por Gregorio VII?",
    correcta: "Un conjunto de afirmaciones sobre la supremacía papal sobre los reyes",
    incorrectas: [
      "Un tratado de paz entre Francia e Inglaterra",
      "Un código de leyes urbanas"
    ]
  },
  {
    enunciado: "¿Qué figura lideró la revuelta de los Ciompi en Florencia?",
    correcta: "Michele di Lando",
    incorrectas: [
      "Cola di Rienzo",
      "Giorgio Scali"
    ]
  },
  {
    enunciado: "¿Qué término designa la prestación de trabajo y servicios que el campesino debía al señor feudal?",
    correcta: "Servidumbre",
    incorrectas: [
      "Censo enfitéutico",
      "Foro"
    ]
  },
  {
    enunciado: "¿Qué rey inglés fue obligado a firmar la Carta Magna?",
    correcta: "Juan sin Tierra",
    incorrectas: [
      "Eduardo I",
      "Enrique III"
    ]
  },
  {
    enunciado: "¿Qué instrumento fiscal implantaron las monarquías para financiar ejércitos permanentes?",
    correcta: "El impuesto directo sobre la población",
    incorrectas: [
      "El diezmo eclesiástico",
      "El arancel portuario"
    ]
  },
  {
    enunciado: "¿Qué filósofo político medieval defendió la autonomía del poder civil frente al eclesiástico en 'Defensor pacis'?",
    correcta: "Marsilio de Padua",
    incorrectas: [
      "Tomás de Aquino",
      "Guillermo de Ockham"
    ]
  },
  {
    enunciado: "¿Qué asamblea representativa de Inglaterra surgió a partir del consejo real?",
    correcta: "El Parlamento",
    incorrectas: [
      "La Cámara de los Lores",
      "La Dieta"
    ]
  },
  {
    enunciado: "¿Qué fue la Bula de Oro de 1356?",
    correcta: "La norma que reguló la elección de los emperadores en el Sacro Imperio",
    incorrectas: [
      "Una bula que excomulgaba a los reyes desobedientes",
      "Una carta de privilegios comerciales a las ciudades hanseáticas"
    ]
  },
  {
    enunciado: "¿Qué sistema de defensa urbana se desarrolló en muchas ciudades medievales?",
    correcta: "Murallas y torres defensivas",
    incorrectas: [
      "Canales de agua para el comercio",
      "Plazas de mercado abiertas"
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el impuesto que la Iglesia cobraba sobre la producción agrícola?",
    correcta: "El diezmo",
    incorrectas: [
      "La alcabala",
      "El pontazgo"
    ]
  },
  {
    enunciado: "¿Qué personaje francés fue clave en la victoria de Orleans en 1429?",
    correcta: "Juana de Arco",
    incorrectas: [
      "Carlos VII",
      "Felipe el Atrevido"
    ]
  },
  {
    enunciado: "¿Qué institución universitaria medieval se especializó en artes liberales antes de que sus estudiantes pasaran a derecho o teología?",
    correcta: "La facultad de artes",
    incorrectas: [
      "La facultad de gramática",
      "La facultad de retórica"
    ]
  },
  {
    enunciado: "¿Qué conflicto interno inglés enfrentó a las casas de Lancaster y York?",
    correcta: "La Guerra de las Dos Rosas",
    incorrectas: [
      "La Guerra de los Cien Años",
      "La Rebelión de los Barones"
    ]
  },
  {
    enunciado: "¿Qué fue el 'Domesday Book'?",
    correcta: "Un registro catastral de tierras y recursos en Inglaterra",
    incorrectas: [
      "Una crónica de la conquista normanda",
      "Un manual de leyes reales"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento marca simbólicamente el final de la Edad Media en Europa occidental?",
    correcta: "La caída de Constantinopla en 1453",
    incorrectas: [
      "El descubrimiento de América en 1492",
      "La firma de la Paz de Westfalia"
    ]
  },
  {
    enunciado: "¿Qué tipo de monarquía caracteriza a Francia en la Baja Edad Media?",
    correcta: "Monarquía autoritaria",
    incorrectas: [
      "Monarquía parlamentaria",
      "Monarquía electiva"
    ]
  },
  {
    enunciado: "¿Qué factor económico impulsó el crecimiento de las ciudades medievales?",
    correcta: "El comercio a larga distancia",
    incorrectas: [
      "La disminución de la producción agrícola",
      "La abolición de los gremios"
    ]
  },
  {
    enunciado: "¿Qué acuerdo puso fin al Cisma de Occidente en 1417?",
    correcta: "El Concilio de Constanza",
    incorrectas: [
      "El Concilio de Pisa",
      "El Concilio de Basilea"
    ]
  },
  {
    enunciado: "¿Qué rey francés estableció impuestos permanentes como la talla para financiar el ejército?",
    correcta: "Carlos VII",
    incorrectas: [
      "Luis IX",
      "Felipe IV el Hermoso"
    ]
  },
  {
    enunciado: "¿Qué era el 'feudo' en el sistema feudal?",
    correcta: "Una concesión de tierra a un vasallo a cambio de servicios",
    incorrectas: [
      "Un título nobiliario hereditario",
      "Una carga fiscal sobre las aldeas"
    ]
  },
  {
    enunciado: "¿Qué documento papal de 1302 afirmó la supremacía del poder espiritual sobre el temporal?",
    correcta: "Unam Sanctam",
    incorrectas: [
      "Dictatus Papae",
      "Clericis Laicos"
    ]
  },
  {
    enunciado: "¿Qué rey inglés creó un sistema judicial real que limitaba los tribunales señoriales?",
    correcta: "Enrique II Plantagenet",
    incorrectas: [
      "Juan sin Tierra",
      "Eduardo III"
    ]
  },
  {
    enunciado: "¿Qué ciudad fue el principal centro de ferias comerciales en la Francia medieval?",
    correcta: "Champaña",
    incorrectas: [
      "Marsella",
      "Burdeos"
    ]
  }
];
