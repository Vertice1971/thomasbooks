// temarios/41-Nacionalismo-y-liberalismo-en-europa-del-siglo-xix.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué objetivo central compartían el liberalismo y el nacionalismo en sus orígenes en el siglo XIX?",
    correcta: "La lucha contra el absolutismo y la defensa de derechos políticos",
    incorrectas: [
      "La instauración de monarquías absolutas más fuertes",
      "La supresión de las constituciones y los parlamentos"
    ]
  },
  {
    enunciado: "¿Qué establecía el Congreso de Viena de 1815 como principio básico?",
    correcta: "La restauración del absolutismo y el equilibrio de poder entre potencias",
    incorrectas: [
      "La extensión del sufragio universal masculino",
      "La creación de una confederación europea democrática"
    ]
  },
  {
    enunciado: "¿Quién fue el principal impulsor del liberalismo económico en el siglo XVIII y XIX?",
    correcta: "Adam Smith con su obra 'La riqueza de las naciones'",
    incorrectas: [
      "Giuseppe Mazzini con 'Deberes del hombre'",
      "Karl Marx con 'El Capital'"
    ]
  },
  {
    enunciado: "¿Qué característica diferenciaba al liberalismo moderado del progresista?",
    correcta: "El moderado defendía sufragio censitario, el progresista ampliación del sufragio",
    incorrectas: [
      "El moderado rechazaba las constituciones, el progresista las defendía",
      "El moderado apoyaba el absolutismo, el progresista lo combatía"
    ]
  },
  {
    enunciado: "¿Cuál fue la principal consecuencia de la Revolución de Julio de 1830 en Francia?",
    correcta: "La instauración de la Monarquía de Julio bajo Luis Felipe de Orleans",
    incorrectas: [
      "La proclamación de la Segunda República Francesa",
      "La anexión de Bélgica al Reino Unido"
    ]
  },
  {
    enunciado: "¿Qué revolución europea de 1830 condujo a la independencia de un país católico frente a uno protestante?",
    correcta: "La independencia de Bélgica frente a los Países Bajos",
    incorrectas: [
      "La independencia de Grecia frente al Imperio Otomano",
      "La unificación de Italia bajo el Piamonte"
    ]
  },
  {
    enunciado: "¿Qué nacionalismo se denomina centrípeto en el siglo XIX?",
    correcta: "El que busca unificar territorios dispersos en un solo Estado",
    incorrectas: [
      "El que persigue la secesión de un territorio de un Estado",
      "El que rechaza toda forma de Estado moderno"
    ]
  },
  {
    enunciado: "¿Quién fue el principal arquitecto político de la unificación alemana?",
    correcta: "Otto von Bismarck",
    incorrectas: [
      "Giuseppe Garibaldi",
      "Metternich"
    ]
  },
  {
    enunciado: "¿Qué fue el Zollverein en la unificación alemana?",
    correcta: "Una unión aduanera que favoreció la integración económica",
    incorrectas: [
      "Un tratado militar entre Prusia y Austria",
      "Un movimiento cultural nacionalista"
    ]
  },
  {
    enunciado: "¿Qué figura italiana lideró la Expedición de los Mil?",
    correcta: "Giuseppe Garibaldi",
    incorrectas: [
      "Camillo Benso de Cavour",
      "Víctor Manuel II"
    ]
  },
  {
    enunciado: "¿Qué conflicto confirmó la hegemonía prusiana en Alemania en 1866?",
    correcta: "La Guerra de las Siete Semanas contra Austria",
    incorrectas: [
      "La Guerra Franco-Prusiana",
      "La Primera Guerra de Schleswig"
    ]
  },
  {
    enunciado: "¿Qué tratado puso fin a la Guerra Franco-Prusiana?",
    correcta: "El Tratado de Frankfurt de 1871",
    incorrectas: [
      "El Tratado de París de 1856",
      "El Tratado de Londres de 1839"
    ]
  },
  {
    enunciado: "¿Qué filósofo definió la nación como 'plebiscito cotidiano'?",
    correcta: "Ernest Renan",
    incorrectas: [
      "Johann Gottlieb Fichte",
      "Herder"
    ]
  },
  {
    enunciado: "¿Qué movimiento liberal español se inició con el pronunciamiento de Riego en 1820?",
    correcta: "El Trienio Liberal",
    incorrectas: [
      "La Gloriosa",
      "La Primera República"
    ]
  },
  {
    enunciado: "¿Qué oleada revolucionaria es conocida como la 'Primavera de los Pueblos'?",
    correcta: "La de 1848",
    incorrectas: [
      "La de 1820",
      "La de 1830"
    ]
  },
  {
    enunciado: "¿Qué país logró su independencia del Imperio Otomano en 1830 con apoyo europeo?",
    correcta: "Grecia",
    incorrectas: [
      "Serbia",
      "Rumanía"
    ]
  },
  {
    enunciado: "¿Qué tipo de nacionalismo predominaba en el Imperio Austrohúngaro?",
    correcta: "El separatista de las minorías étnicas",
    incorrectas: [
      "El unificador germánico",
      "El expansionista colonial"
    ]
  },
  {
    enunciado: "¿Qué rey italiano proclamó la unificación de Italia en 1861?",
    correcta: "Víctor Manuel II",
    incorrectas: [
      "Umberto I",
      "Carlos Alberto"
    ]
  },
  {
    enunciado: "¿Qué ideólogo italiano defendió un nacionalismo democrático y republicano?",
    correcta: "Giuseppe Mazzini",
    incorrectas: [
      "Camillo Benso de Cavour",
      "Francesco Crispi"
    ]
  },
  {
    enunciado: "¿Qué elemento económico favoreció el nacionalismo alemán antes de la unificación?",
    correcta: "La creación del mercado común del Zollverein",
    incorrectas: [
      "El reparto colonial en África",
      "La adopción del franco como moneda"
    ]
  },
  {
    enunciado: "¿Qué movimiento nacionalista se apoyó fuertemente en la educación pública y la lengua común?",
    correcta: "El nacionalismo cultural romántico",
    incorrectas: [
      "El nacionalismo colonialista",
      "El internacionalismo proletario"
    ]
  },
  {
    enunciado: "¿Qué guerra finalizó con la proclamación del Imperio alemán en Versalles?",
    correcta: "La Guerra Franco-Prusiana",
    incorrectas: [
      "La Guerra de Crimea",
      "La Guerra de las Siete Semanas"
    ]
  },
  {
    enunciado: "¿Qué institución británica se reformó con la 'Reform Act' de 1832?",
    correcta: "El sistema electoral ampliando el voto a sectores medios",
    incorrectas: [
      "La Cámara de los Lores eliminándola",
      "La monarquía para hacerla electiva"
    ]
  },
  {
    enunciado: "¿Qué país fue creado como Estado independiente en 1830 tras la Revolución de Julio?",
    correcta: "Bélgica",
    incorrectas: [
      "Luxemburgo",
      "Países Bajos"
    ]
  },
  {
    enunciado: "¿Qué ideología defendía el librecambismo económico en el siglo XIX?",
    correcta: "El liberalismo económico",
    incorrectas: [
      "El mercantilismo",
      "El proteccionismo nacionalista"
    ]
  },
  {
    enunciado: "¿Qué imperio se desintegró progresivamente por el auge de los nacionalismos balcánicos?",
    correcta: "El Imperio Otomano",
    incorrectas: [
      "El Imperio Británico",
      "El Imperio Alemán"
    ]
  },
  {
    enunciado: "¿Qué documento británico inspiró los principios liberales en Europa?",
    correcta: "La Carta Magna y el Bill of Rights",
    incorrectas: [
      "El Tratado de Utrecht",
      "La Declaración de Derechos del Hombre y del Ciudadano"
    ]
  },
  {
    enunciado: "¿Qué país lideró el Congreso de Viena para restaurar el absolutismo?",
    correcta: "Austria bajo Metternich",
    incorrectas: [
      "Prusia bajo Bismarck",
      "Francia bajo Napoleón III"
    ]
  },
  {
    enunciado: "¿Qué figura política representa la unión de liberalismo moderado y monarquismo en Italia?",
    correcta: "Camillo Benso de Cavour",
    incorrectas: [
      "Giuseppe Mazzini",
      "Garibaldi"
    ]
  },
  {
    enunciado: "¿Qué revolución europea derrocó a Carlos X de Francia?",
    correcta: "La Revolución de Julio de 1830",
    incorrectas: [
      "La Revolución de Febrero de 1848",
      "La Revolución Gloriosa"
    ]
  },
  {
    enunciado: "¿Qué corriente defendía la igualdad ante la ley pero no la igualdad social?",
    correcta: "El liberalismo",
    incorrectas: [
      "El socialismo utópico",
      "El comunismo"
    ]
  },
  {
    enunciado: "¿Qué escritor alemán asoció la nación con el espíritu y la lengua de un pueblo?",
    correcta: "Johann Gottfried Herder",
    incorrectas: [
      "Hegel",
      "Nietzsche"
    ]
  },
  {
    enunciado: "¿Qué movimiento buscaba un equilibrio entre orden y libertad, favoreciendo a las élites?",
    correcta: "El liberalismo moderado",
    incorrectas: [
      "El nacionalismo popular",
      "El socialismo revolucionario"
    ]
  },
  {
    enunciado: "¿Qué conflicto de 1859 impulsó la unificación italiana al expulsar a Austria de Lombardía?",
    correcta: "La Segunda Guerra de Independencia Italiana",
    incorrectas: [
      "La Guerra de Crimea",
      "La Expedición de los Mil"
    ]
  },
  {
    enunciado: "¿Qué imperio se mantuvo unido en parte gracias al Compromiso de 1867?",
    correcta: "El Imperio Austrohúngaro",
    incorrectas: [
      "El Imperio Ruso",
      "El Imperio Alemán"
    ]
  },
  {
    enunciado: "¿Qué país logró la unificación alemana en 1871 bajo su liderazgo?",
    correcta: "Prusia",
    incorrectas: [
      "Austria",
      "Baviera"
    ]
  },
  {
    enunciado: "¿Qué revolución condujo a la proclamación de la Segunda República Francesa?",
    correcta: "La Revolución de Febrero de 1848",
    incorrectas: [
      "La Revolución de Julio de 1830",
      "La Comuna de París"
    ]
  },
  {
    enunciado: "¿Qué tendencia política priorizaba el mercado libre y el individualismo económico?",
    correcta: "El liberalismo económico",
    incorrectas: [
      "El nacionalismo cultural",
      "El socialismo utópico"
    ]
  },
  {
    enunciado: "¿Qué símbolo político-cultural fue clave para la difusión del nacionalismo en el siglo XIX?",
    correcta: "El uso de himnos, banderas y educación nacional",
    incorrectas: [
      "La censura de prensa",
      "El servicio militar obligatorio universal"
    ]
  }
];
