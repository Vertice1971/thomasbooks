// temarios/42-Imperialismo-y-expansion-colonial-los-conflictos-internacionales-antes-de-1914.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por imperialismo en el contexto de finales del siglo XIX?",
    correcta: "La política de dominio de un Estado sobre otros territorios mediante control militar, político y económico",
    incorrectas: [
      "La extensión pacífica de la cultura sin intervención política",
      "La creación de alianzas defensivas entre Estados independientes"
    ]
  },
  {
    enunciado: "¿En qué periodo alcanzó el imperialismo su máxima expansión?",
    correcta: "Entre 1870 y 1914",
    incorrectas: [
      "Entre 1815 y 1848",
      "Entre 1919 y 1939"
    ]
  },
  {
    enunciado: "¿Qué factor económico impulsó la expansión colonial europea en el siglo XIX?",
    correcta: "La búsqueda de materias primas y nuevos mercados",
    incorrectas: [
      "La necesidad de expandir religiones monoteístas",
      "La sustitución del comercio marítimo por el terrestre"
    ]
  },
  {
    enunciado: "¿Qué doctrina ideológica justificaba la superioridad cultural y racial europea?",
    correcta: "El darwinismo social",
    incorrectas: [
      "El internacionalismo proletario",
      "El pacifismo ilustrado"
    ]
  },
  {
    enunciado: "¿Qué avance tecnológico facilitó el control colonial a finales del XIX?",
    correcta: "El uso de buques de vapor y telégrafo submarino",
    incorrectas: [
      "La imprenta de tipos móviles",
      "La energía nuclear"
    ]
  },
  {
    enunciado: "¿Qué conferencia internacional reguló el reparto de África?",
    correcta: "La Conferencia de Berlín de 1884-1885",
    incorrectas: [
      "El Congreso de Viena de 1815",
      "El Tratado de Versalles de 1919"
    ]
  },
  {
    enunciado: "¿Qué potencia aplicó con frecuencia la administración colonial indirecta?",
    correcta: "Reino Unido",
    incorrectas: [
      "Francia",
      "Bélgica"
    ]
  },
  {
    enunciado: "¿Qué tipo de colonia estaba destinada principalmente a la explotación de recursos?",
    correcta: "Colonia de explotación",
    incorrectas: [
      "Colonia de poblamiento",
      "Protectorado"
    ]
  },
  {
    enunciado: "¿Qué país europeo colonizó Indochina?",
    correcta: "Francia",
    incorrectas: [
      "Países Bajos",
      "Portugal"
    ]
  },
  {
    enunciado: "¿Qué conflicto enfrentó a británicos y bóers en Sudáfrica?",
    correcta: "Las Guerras de los Bóers",
    incorrectas: [
      "La Guerra de Crimea",
      "La Guerra de Fachoda"
    ]
  },
  {
    enunciado: "¿Qué incidente enfrentó a Francia y Reino Unido en Sudán en 1898?",
    correcta: "La Crisis de Fachoda",
    incorrectas: [
      "La Rebelión de los Bóxers",
      "La Guerra del Opio"
    ]
  },
  {
    enunciado: "¿Qué potencia asiática emergió como imperialista tras la guerra de 1904-1905?",
    correcta: "Japón",
    incorrectas: [
      "China",
      "Corea"
    ]
  },
  {
    enunciado: "¿Qué conflicto significó la primera victoria de una potencia asiática industrial sobre una europea?",
    correcta: "La Guerra ruso-japonesa",
    incorrectas: [
      "La Guerra sino-japonesa",
      "La Guerra de Crimea"
    ]
  },
  {
    enunciado: "¿Qué movimiento en China en 1900 buscó expulsar la influencia extranjera?",
    correcta: "La Rebelión de los Bóxers",
    incorrectas: [
      "La Revolución Xinhai",
      "La Rebelión Taiping"
    ]
  },
  {
    enunciado: "¿Qué concepto definía la situación de tensión militar y alianzas antes de 1914?",
    correcta: "Paz armada",
    incorrectas: [
      "Equilibrio bipolar",
      "Desarme general"
    ]
  },
  {
    enunciado: "¿Qué alianza integraban Alemania, Austria-Hungría e Italia en 1882?",
    correcta: "La Triple Alianza",
    incorrectas: [
      "La Triple Entente",
      "La Liga de las Naciones"
    ]
  },
  {
    enunciado: "¿Qué países formaban la Triple Entente en 1907?",
    correcta: "Reino Unido, Francia y Rusia",
    incorrectas: [
      "Alemania, Austria-Hungría e Italia",
      "EE. UU., Japón y Francia"
    ]
  },
  {
    enunciado: "¿Qué dos guerras precedieron al estallido de la Primera Guerra Mundial en los Balcanes?",
    correcta: "Las Guerras balcánicas de 1912 y 1913",
    incorrectas: [
      "Las guerras del Opio",
      "Las guerras italo-etíopes"
    ]
  },
  {
    enunciado: "¿Qué escritor británico popularizó la idea del 'White Man’s Burden'?",
    correcta: "Rudyard Kipling",
    incorrectas: [
      "Joseph Conrad",
      "Winston Churchill"
    ]
  },
  {
    enunciado: "¿Qué modelo administrativo aplicaba Francia en sus colonias?",
    correcta: "Administración directa centralizada",
    incorrectas: [
      "Protectorado descentralizado",
      "Confederación autónoma"
    ]
  },
  {
    enunciado: "¿Qué colonia africana fue de propiedad personal del rey Leopoldo II de Bélgica?",
    correcta: "El Estado Libre del Congo",
    incorrectas: [
      "Sudáfrica",
      "Guinea Ecuatorial"
    ]
  },
  {
    enunciado: "¿Qué país controló Egipto para asegurar el Canal de Suez?",
    correcta: "Reino Unido",
    incorrectas: [
      "Francia",
      "Italia"
    ]
  },
  {
    enunciado: "¿Qué potencia europea ocupó Argelia como colonia de poblamiento?",
    correcta: "Francia",
    incorrectas: [
      "España",
      "Alemania"
    ]
  },
  {
    enunciado: "¿Qué recurso fue clave para la expansión industrial y militar de finales del XIX?",
    correcta: "El carbón y el acero",
    incorrectas: [
      "El silicio y el litio",
      "El caucho y la seda exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué tratado puso fin a la guerra ruso-japonesa?",
    correcta: "Tratado de Portsmouth",
    incorrectas: [
      "Tratado de Frankfurt",
      "Tratado de Nankín"
    ]
  },
  {
    enunciado: "¿Qué consecuencia geopolítica tuvo la Conferencia de Berlín?",
    correcta: "El reparto formal de África entre potencias europeas",
    incorrectas: [
      "La independencia inmediata de las colonias",
      "La creación de la ONU"
    ]
  },
  {
    enunciado: "¿Qué país europeo mantuvo su independencia frente a la colonización en África junto a Liberia?",
    correcta: "Etiopía",
    incorrectas: [
      "Egipto",
      "Somalia"
    ]
  },
  {
    enunciado: "¿Qué potencia colonizó Filipinas tras derrotar a España en 1898?",
    correcta: "Estados Unidos",
    incorrectas: [
      "Alemania",
      "Reino Unido"
    ]
  },
  {
    enunciado: "¿Qué término describe la carrera por el control de territorios coloniales?",
    correcta: "Reparto colonial",
    incorrectas: [
      "Equilibrio continental",
      "Mercantilismo defensivo"
    ]
  },
  {
    enunciado: "¿Qué consecuencia social provocó el imperialismo en las colonias?",
    correcta: "Desigualdades económicas y dependencia de la metrópoli",
    incorrectas: [
      "Autosuficiencia económica y política",
      "Igualdad plena con la metrópoli"
    ]
  },
  {
    enunciado: "¿Qué país europeo implantó un protectorado en Marruecos junto con España?",
    correcta: "Francia",
    incorrectas: [
      "Italia",
      "Alemania"
    ]
  },
  {
    enunciado: "¿Qué fue la 'Misión civilizadora'?",
    correcta: "Justificación ideológica para imponer cultura y modelos europeos en las colonias",
    incorrectas: [
      "Un programa de cooperación voluntaria entre pueblos libres",
      "Un tratado de libre comercio intercontinental"
    ]
  },
  {
    enunciado: "¿Qué potencia controló la India como la 'joya de la corona'?",
    correcta: "Reino Unido",
    incorrectas: [
      "Francia",
      "Portugal"
    ]
  },
  {
    enunciado: "¿Qué país colonizó el Congo tras la cesión de Leopoldo II a su Estado?",
    correcta: "Bélgica",
    incorrectas: [
      "Alemania",
      "Italia"
    ]
  },
  {
    enunciado: "¿Qué conflicto enfrentó a China con potencias occidentales por el comercio de narcóticos?",
    correcta: "Las Guerras del Opio",
    incorrectas: [
      "La Rebelión Taiping",
      "La Guerra sino-japonesa"
    ]
  },
  {
    enunciado: "¿Qué objetivo tenía la política de 'esferas de influencia' en China?",
    correcta: "Controlar áreas económicas y comerciales sin anexión directa",
    incorrectas: [
      "Repartir la población en colonias de poblamiento",
      "Desmilitarizar la región"
    ]
  },
  {
    enunciado: "¿Qué país industrializado se incorporó tarde al reparto colonial buscando su 'lugar bajo el sol'?",
    correcta: "Alemania",
    incorrectas: [
      "España",
      "Portugal"
    ]
  },
  {
    enunciado: "¿Qué concepto definía el equilibrio de poder europeo antes de la Primera Guerra Mundial?",
    correcta: "Sistema de alianzas",
    incorrectas: [
      "Concierto de Viena",
      "Liga de Naciones"
    ]
  },
  {
    enunciado: "¿Qué movimiento político surgió en las colonias como reacción al imperialismo?",
    correcta: "Movimientos nacionalistas de liberación",
    incorrectas: [
      "Imperialismo inverso",
      "Confederaciones coloniales"
    ]
  }
];
