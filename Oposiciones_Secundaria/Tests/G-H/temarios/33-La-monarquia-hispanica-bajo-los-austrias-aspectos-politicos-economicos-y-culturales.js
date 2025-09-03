// temarios/33-La-monarquia-hispanica-bajo-los-austrias-aspectos-politicos-economicos-y-culturales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rey inaugura la dinastía de los Austrias en España?",
    correcta: "Carlos I",
    incorrectas: [
      "Felipe II",
      "Fernando el Católico"
    ]
  },
  {
    enunciado: "¿Cómo se denomina el modelo territorial de la Monarquía Hispánica en tiempos de los Austrias?",
    correcta: "Monarquía compuesta",
    incorrectas: [
      "Estado centralizado",
      "Confederación republicana"
    ]
  },
  {
    enunciado: "¿Qué consejo asesoraba al rey en cuestiones generales de Estado?",
    correcta: "El Consejo de Estado",
    incorrectas: [
      "El Consejo de Castilla",
      "El Consejo de Hacienda"
    ]
  },
  {
    enunciado: "¿Qué institución gestionaba el comercio con América?",
    correcta: "La Casa de Contratación de Sevilla",
    incorrectas: [
      "El Consejo de Indias",
      "El Consulado del Mar"
    ]
  },
  {
    enunciado: "¿Qué monarca trasladó la capital a Madrid en 1561?",
    correcta: "Felipe II",
    incorrectas: [
      "Carlos I",
      "Felipe III"
    ]
  },
  {
    enunciado: "¿Qué figura política caracterizó el gobierno de los Austrias Menores?",
    correcta: "El valido",
    incorrectas: [
      "El corregidor",
      "El regente"
    ]
  },
  {
    enunciado: "¿Qué valido gobernó durante buena parte del reinado de Felipe III?",
    correcta: "Duque de Lerma",
    incorrectas: [
      "Conde-Duque de Olivares",
      "Marqués de Villena"
    ]
  },
  {
    enunciado: "¿Qué monarca sufrió la rebelión de Cataluña y la independencia de Portugal?",
    correcta: "Felipe IV",
    incorrectas: [
      "Felipe II",
      "Carlos II"
    ]
  },
  {
    enunciado: "¿En qué año se produjo la expulsión de los moriscos decretada por Felipe III?",
    correcta: "1609",
    incorrectas: [
      "1580",
      "1621"
    ]
  },
  {
    enunciado: "¿Qué guerra enfrentó a España con los Países Bajos durante 80 años?",
    correcta: "La Guerra de los Ochenta Años",
    incorrectas: [
      "La Guerra de Sucesión Española",
      "La Guerra de los Treinta Años"
    ]
  },
  {
    enunciado: "¿Qué tratado puso fin a la Guerra de los Ochenta Años?",
    correcta: "Tratado de Westfalia",
    incorrectas: [
      "Tratado de Utrecht",
      "Paz de los Pirineos"
    ]
  },
  {
    enunciado: "¿Qué conflicto bélico supuso el enfrentamiento de España con Francia en 1635?",
    correcta: "Guerra franco-española",
    incorrectas: [
      "Guerra de la Liga Santa",
      "Guerra de Restauración portuguesa"
    ]
  },
  {
    enunciado: "¿Qué tratado firmó España con Francia en 1659?",
    correcta: "Paz de los Pirineos",
    incorrectas: [
      "Tratado de Lisboa",
      "Paz de Cateau-Cambrésis"
    ]
  },
  {
    enunciado: "¿Qué consecuencia tuvo la muerte de Carlos II sin descendencia?",
    correcta: "El inicio de la Guerra de Sucesión Española",
    incorrectas: [
      "La independencia de Portugal",
      "La unión con Francia"
    ]
  },
  {
    enunciado: "¿Qué recurso natural procedente de América fue fundamental para la economía española del siglo XVI?",
    correcta: "La plata",
    incorrectas: [
      "El carbón",
      "El trigo"
    ]
  },
  {
    enunciado: "¿Qué fenómeno económico se asocia a la llegada masiva de metales preciosos?",
    correcta: "La revolución de los precios",
    incorrectas: [
      "La deflación agrícola",
      "El mercantilismo inverso"
    ]
  },
  {
    enunciado: "¿Qué ciudad española monopolizó el comercio con América durante buena parte del periodo?",
    correcta: "Sevilla",
    incorrectas: [
      "Barcelona",
      "Valencia"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento redujo drásticamente la población morisca en España?",
    correcta: "Su expulsión entre 1609 y 1614",
    incorrectas: [
      "La peste negra",
      "Las guerras italianas"
    ]
  },
  {
    enunciado: "¿Qué sector productivo fue predominante en la economía peninsular del periodo?",
    correcta: "La agricultura",
    incorrectas: [
      "La industria textil",
      "La minería peninsular"
    ]
  },
  {
    enunciado: "¿Qué escritor es autor de 'Don Quijote de la Mancha'?",
    correcta: "Miguel de Cervantes",
    incorrectas: [
      "Lope de Vega",
      "Francisco de Quevedo"
    ]
  },
  {
    enunciado: "¿Qué pintor sevillano fue maestro de la pintura barroca y pintor de corte de Felipe IV?",
    correcta: "Diego Velázquez",
    incorrectas: [
      "Murillo",
      "Zurbarán"
    ]
  },
  {
    enunciado: "¿Qué dramaturgo barroco escribió 'La vida es sueño'?",
    correcta: "Calderón de la Barca",
    incorrectas: [
      "Tirso de Molina",
      "Lope de Vega"
    ]
  },
  {
    enunciado: "¿Qué institución universitaria fue un referente en la formación de juristas y teólogos en el periodo?",
    correcta: "La Universidad de Salamanca",
    incorrectas: [
      "La Universidad de Valladolid",
      "La Universidad de Alcalá"
    ]
  },
  {
    enunciado: "¿Qué estilo arquitectónico caracteriza el monasterio de El Escorial?",
    correcta: "Herreriano",
    incorrectas: [
      "Churrigueresco",
      "Gótico"
    ]
  },
  {
    enunciado: "¿Qué escuela de pensamiento defendió los derechos de los pueblos indígenas en América?",
    correcta: "La Escuela de Salamanca",
    incorrectas: [
      "La Escuela de París",
      "La Escuela de Bolonia"
    ]
  },
  {
    enunciado: "¿Qué rey español ordenó la construcción de El Escorial?",
    correcta: "Felipe II",
    incorrectas: [
      "Carlos I",
      "Felipe III"
    ]
  },
  {
    enunciado: "¿Qué monarca fue conocido como el 'Rey Planeta'?",
    correcta: "Felipe IV",
    incorrectas: [
      "Felipe III",
      "Carlos II"
    ]
  },
  {
    enunciado: "¿Qué valido de Felipe IV promovió la Unión de Armas?",
    correcta: "Conde-Duque de Olivares",
    incorrectas: [
      "Duque de Lerma",
      "Marqués de Ayamonte"
    ]
  },
  {
    enunciado: "¿Qué conflicto se desarrolló entre 1618 y 1648 y afectó a gran parte de Europa?",
    correcta: "La Guerra de los Treinta Años",
    incorrectas: [
      "La Guerra de Restauración portuguesa",
      "La Guerra de Sucesión Española"
    ]
  },
  {
    enunciado: "¿Qué institución controlaba la ortodoxia religiosa en España mediante censura y juicios?",
    correcta: "La Inquisición",
    incorrectas: [
      "El Consejo Real",
      "La Chancillería"
    ]
  },
  {
    enunciado: "¿Qué ciudad filipina estaba conectada con México a través del Galeón de Manila?",
    correcta: "Manila",
    incorrectas: [
      "Cebú",
      "Zamboanga"
    ]
  },
  {
    enunciado: "¿Qué rey murió en 1700 sin dejar descendencia directa?",
    correcta: "Carlos II",
    incorrectas: [
      "Felipe IV",
      "Felipe V"
    ]
  },
  {
    enunciado: "¿Qué ciudad fue capital del virreinato más extenso de América?",
    correcta: "Ciudad de México",
    incorrectas: [
      "Lima",
      "Buenos Aires"
    ]
  },
  {
    enunciado: "¿Qué poeta barroco español es conocido por su estilo conceptista?",
    correcta: "Francisco de Quevedo",
    incorrectas: [
      "Luis de Góngora",
      "Baltasar Gracián"
    ]
  },
  {
    enunciado: "¿Qué guerra supuso la independencia definitiva de Portugal respecto a España?",
    correcta: "Guerra de Restauración portuguesa",
    incorrectas: [
      "Guerra de Sucesión Española",
      "Guerra de los Treinta Años"
    ]
  },
  {
    enunciado: "¿Qué tratado puso fin a la Guerra de Restauración portuguesa?",
    correcta: "Tratado de Lisboa",
    incorrectas: [
      "Paz de los Pirineos",
      "Tratado de Utrecht"
    ]
  },
  {
    enunciado: "¿Qué obra de teatro de Lope de Vega representa el honor popular frente al poder?",
    correcta: "Fuenteovejuna",
    incorrectas: [
      "El alcalde de Zalamea",
      "El caballero de Olmedo"
    ]
  },
  {
    enunciado: "¿Qué fenómeno climático afectó negativamente a la agricultura europea en el siglo XVII?",
    correcta: "La Pequeña Edad de Hielo",
    incorrectas: [
      "El Niño",
      "Sequía sahariana"
    ]
  },
  {
    enunciado: "¿Qué institución financiera extranjera fue clave para financiar las guerras de los Austrias?",
    correcta: "La banca genovesa",
    incorrectas: [
      "El Banco de Inglaterra",
      "La banca de Florencia"
    ]
  }
];
