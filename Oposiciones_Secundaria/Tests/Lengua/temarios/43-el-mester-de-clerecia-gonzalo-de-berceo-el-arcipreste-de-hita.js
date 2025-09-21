// temarios/43-el-mester-de-clerecia-gonzalo-de-berceo-el-arcipreste-de-hita.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el mester de clerecía?",
    correcta: "Una corriente literaria culta de los siglos XIII y XIV con finalidad didáctica",
    incorrectas: [
      "Una forma de poesía oral improvisada por juglares",
      "Un estilo de prosa legal cultivado por notarios"
    ]
  },
  {
    enunciado: "¿Qué métrica caracteriza al mester de clerecía?",
    correcta: "La cuaderna vía, con estrofas de cuatro versos alejandrinos y rima consonante",
    incorrectas: [
      "El octosílabo con rima asonante",
      "El endecasílabo suelto sin rima"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial existe entre mester de juglaría y mester de clerecía?",
    correcta: "El primero es oral y popular, el segundo es culto y escrito",
    incorrectas: [
      "El primero es en prosa y el segundo en verso",
      "El primero es anónimo y el segundo siempre firmado"
    ]
  },
  {
    enunciado: "¿Cuál es la finalidad principal de las obras del mester de clerecía?",
    correcta: "Transmitir enseñanzas religiosas, morales e históricas",
    incorrectas: [
      "Divertir exclusivamente mediante sátira política",
      "Glorificar hazañas guerreras sin contenido moral"
    ]
  },
  {
    enunciado: "¿Qué lengua utilizó el mester de clerecía para difundir sus mensajes?",
    correcta: "El castellano en forma culta con abundancia de latinismos",
    incorrectas: [
      "Exclusivamente el latín eclesiástico",
      "El árabe andalusí en aljamiado"
    ]
  },
  {
    enunciado: "¿Quién es considerado el primer poeta castellano de nombre conocido?",
    correcta: "Gonzalo de Berceo",
    incorrectas: [
      "Juan Ruiz, Arcipreste de Hita",
      "Alfonso X el Sabio"
    ]
  },
  {
    enunciado: "¿Dónde desarrolló su vida Gonzalo de Berceo?",
    correcta: "En el monasterio riojano de San Millán de la Cogolla",
    incorrectas: [
      "En la catedral de Burgos",
      "En el monasterio de Ripoll"
    ]
  },
  {
    enunciado: "¿Cuál es la obra más conocida de Gonzalo de Berceo?",
    correcta: "Milagros de Nuestra Señora",
    incorrectas: [
      "Libro de Buen Amor",
      "Auto de los Reyes Magos"
    ]
  },
  {
    enunciado: "¿Qué temática abordan los Milagros de Nuestra Señora?",
    correcta: "Relatos de intervención milagrosa de la Virgen en favor de los fieles",
    incorrectas: [
      "Cantares bélicos sobre héroes castellanos",
      "Crónicas de batallas contra musulmanes"
    ]
  },
  {
    enunciado: "¿Qué recurso estilístico destaca en Berceo para acercarse al público?",
    correcta: "Uso de un lenguaje claro y popular mezclado con cultismos",
    incorrectas: [
      "Oscurantismo teológico con citas en griego",
      "Exclusivo latín clásico sin traducciones"
    ]
  },
  {
    enunciado: "¿Qué otro tipo de obras escribió Berceo además de los Milagros?",
    correcta: "Vidas de santos y loores marianos",
    incorrectas: [
      "Crónicas históricas de reyes",
      "Tratados médicos y científicos"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene Berceo en la historia literaria española?",
    correcta: "Consolidó el castellano literario y la poesía culta en lengua vernácula",
    incorrectas: [
      "Fue el primero en escribir novelas sentimentales",
      "Fundó la primera imprenta de Castilla"
    ]
  },
  {
    enunciado: "¿Quién es el autor del Libro de Buen Amor?",
    correcta: "Juan Ruiz, Arcipreste de Hita",
    incorrectas: [
      "Gonzalo de Berceo",
      "Don Juan Manuel"
    ]
  },
  {
    enunciado: "¿En qué siglo vivió el Arcipreste de Hita?",
    correcta: "En el siglo XIV",
    incorrectas: [
      "En el siglo XII",
      "En el siglo XV"
    ]
  },
  {
    enunciado: "¿Qué tono predomina en el Libro de Buen Amor?",
    correcta: "Humorístico, satírico y burlesco",
    incorrectas: [
      "Trágico y elegíaco",
      "Épico y solemne"
    ]
  },
  {
    enunciado: "¿Qué mezcla de tradiciones literarias se observa en el Libro de Buen Amor?",
    correcta: "Elementos del mester de clerecía y del mester de juglaría",
    incorrectas: [
      "Únicamente del mester de juglaría",
      "Únicamente del mester de clerecía"
    ]
  },
  {
    enunciado: "¿Qué rasgo lingüístico distingue al Libro de Buen Amor?",
    correcta: "Uso creativo de refranes y recursos expresivos populares",
    incorrectas: [
      "Uso exclusivo de cultismos latinos",
      "Estilo uniforme sin variación de registros"
    ]
  },
  {
    enunciado: "¿Qué tema articula el Libro de Buen Amor?",
    correcta: "La reflexión ambigua sobre el amor humano y divino",
    incorrectas: [
      "La narración épica de las cruzadas",
      "La exaltación exclusiva de la Virgen"
    ]
  },
  {
    enunciado: "¿Qué personaje alegórico aparece en el Libro de Buen Amor como consejera en lides amorosas?",
    correcta: "Doña Cuaresma",
    incorrectas: [
      "La Serrana de la Vera",
      "La Celestina"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el Arcipreste de Hita en la tradición literaria?",
    correcta: "Es un puente entre literatura culta medieval y literatura popular posterior",
    incorrectas: [
      "Es el primer novelista realista del Siglo de Oro",
      "Fue el primer dramaturgo castellano"
    ]
  },
  {
    enunciado: "¿Qué estrofa métrica emplea también el Libro de Buen Amor?",
    correcta: "La cuaderna vía",
    incorrectas: [
      "La lira garcilasiana",
      "El romance octosilábico"
    ]
  },
  {
    enunciado: "¿Qué elemento paródico se encuentra en el Libro de Buen Amor?",
    correcta: "Batalla entre Don Carnal y Doña Cuaresma",
    incorrectas: [
      "Diálogo entre la Vida y la Muerte",
      "Alegoría del Sueño de Escipión"
    ]
  },
  {
    enunciado: "¿Qué función cumple la sátira en la obra del Arcipreste?",
    correcta: "Criticar costumbres sociales y eclesiásticas",
    incorrectas: [
      "Exaltar de manera solemne a la nobleza",
      "Rechazar todo uso del humor en literatura"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el Libro de Buen Amor con la sociedad de su tiempo?",
    correcta: "Refleja la vida cotidiana medieval con ironía y crítica social",
    incorrectas: [
      "Ignora la realidad y solo trata asuntos mitológicos",
      "Describe exclusivamente batallas y conquistas"
    ]
  },
  {
    enunciado: "¿Qué rasgo narrativo distingue al Arcipreste de Hita frente a Berceo?",
    correcta: "El empleo del humor y la sátira como recurso central",
    incorrectas: [
      "El uso exclusivo de narración hagiográfica",
      "El desprecio por el amor humano"
    ]
  },
  {
    enunciado: "¿Qué finalidad didáctica comparten Berceo y el Arcipreste?",
    correcta: "Enseñar al lector a través de ejemplos literarios",
    incorrectas: [
      "Instruir solo mediante sermones en latín",
      "Escribir manuales de gramática"
    ]
  },
  {
    enunciado: "¿Qué diferencia el tono de Berceo respecto al del Arcipreste?",
    correcta: "Berceo es devoto y religioso, el Arcipreste es irónico y satírico",
    incorrectas: [
      "Ambos usan el mismo tono solemne",
      "Ambos se centran en la épica heroica"
    ]
  },
  {
    enunciado: "¿Qué recurso popular introduce el Arcipreste para acercarse a su público?",
    correcta: "Abundancia de refranes y expresiones coloquiales",
    incorrectas: [
      "Uso exclusivo de fórmulas latinas",
      "Constantes citas en griego clásico"
    ]
  },
  {
    enunciado: "¿Qué dimensión literaria representa Berceo en la Edad Media?",
    correcta: "La consolidación de la poesía narrativa culta religiosa",
    incorrectas: [
      "La invención de la novela caballeresca",
      "El nacimiento del teatro renacentista"
    ]
  },
  {
    enunciado: "¿Qué dimensión representa el Arcipreste en la evolución literaria?",
    correcta: "Una transición hacia la literatura más abierta y heterogénea",
    incorrectas: [
      "El inicio de la prosa alfonsí",
      "El nacimiento de la tragedia clásica"
    ]
  },
  {
    enunciado: "¿Qué elemento formal distingue al mester de clerecía de la lírica popular?",
    correcta: "El rigor métrico y la rima consonante",
    incorrectas: [
      "El predominio del octosílabo con rima asonante",
      "La improvisación libre del verso"
    ]
  },
  {
    enunciado: "¿Qué aspecto de la cultura refleja el mester de clerecía?",
    correcta: "El papel de los clérigos como mediadores culturales",
    incorrectas: [
      "El ocio cortesano sin finalidad didáctica",
      "La tradición exclusivamente oral de campesinos"
    ]
  },
  {
    enunciado: "¿Qué elemento autobiográfico se intuye en el Libro de Buen Amor?",
    correcta: "El yo narrador que se presenta como Arcipreste de Hita",
    incorrectas: [
      "El relato de viajes de Marco Polo",
      "Las memorias de un soldado de la Reconquista"
    ]
  },
  {
    enunciado: "¿Qué relación tiene la cuaderna vía con la tradición latina?",
    correcta: "Es un intento de trasladar al romance la disciplina métrica latina",
    incorrectas: [
      "Es una forma innovadora sin antecedentes",
      "Proviene directamente de la lírica árabe"
    ]
  },
  {
    enunciado: "¿Qué simboliza la Virgen en la obra de Berceo?",
    correcta: "Mediadora entre Dios y los hombres, protectora de los fieles",
    incorrectas: [
      "Figura alegórica del poder real",
      "Protagonista de relatos épicos guerreros"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el Arcipreste en la configuración del humor literario en castellano?",
    correcta: "Es uno de los primeros grandes cultivadores de la sátira y el humor escrito",
    incorrectas: [
      "Fue un autor exclusivamente trágico",
      "Ignoró deliberadamente lo cómico"
    ]
  },
  {
    enunciado: "¿Qué aspecto común vincula a Berceo y al Arcipreste?",
    correcta: "Ambos escriben en castellano culto con voluntad didáctica",
    incorrectas: [
      "Ambos escriben únicamente en latín",
      "Ambos rechazan cualquier función didáctica"
    ]
  }
];

