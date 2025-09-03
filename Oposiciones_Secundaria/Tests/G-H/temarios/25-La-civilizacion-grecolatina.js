// temarios/25-La-civilizacion-grecolatina.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por civilización grecolatina en el estudio histórico-cultural?",
    correcta: "El conjunto de las culturas griega y romana y su legado compartido en el Mediterráneo",
    incorrectas: [
      "Una cultura única nacida en Mesopotamia y difundida por fenicios",
      "Un sinónimo de la civilización cristiana medieval europea"
    ]
  },
  {
    enunciado: "¿Qué rasgo estructural definió a muchas comunidades del mundo griego clásico?",
    correcta: "La organización en polis con ciudadanía y vida política propia",
    incorrectas: [
      "La monarquía centralizada hereditaria en todo el territorio",
      "El gobierno teocrático dirigido por un sumo sacerdote-panhelénico"
    ]
  },
  {
    enunciado: "¿Cuál fue una aportación política característica de Atenas en el siglo V a.C.?",
    correcta: "La democracia directa basada en la participación de los ciudadanos",
    incorrectas: [
      "La representación proporcional por partidos",
      "La dictadura constitucional con censos militares"
    ]
  },
  {
    enunciado: "¿Qué conflicto favoreció la construcción de una identidad helénica frente a potencias externas?",
    correcta: "Las Guerras Médicas contra el Imperio persa",
    incorrectas: [
      "Las guerras sicilianas contra Cartago",
      "La guerra social de los aliados itálicos"
    ]
  },
  {
    enunciado: "¿Qué hegemonía griega cayó tras la Guerra del Peloponeso?",
    correcta: "La hegemonía marítima de Atenas y su Liga de Delos",
    incorrectas: [
      "El dominio de Macedonia sobre Grecia",
      "La supremacía cultural de Mileto en Asia Menor durante el helenismo"
    ]
  },
  {
    enunciado: "¿Qué innovación militar impulsó la expansión macedonia con Filipo II y Alejandro?",
    correcta: "La falange macedonia complementada por caballería de élite",
    incorrectas: [
      "La legión manipular con cohortes ciudadanas",
      "Las falanges hoplíticas sin apoyo de caballería"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al mundo helenístico tras Alejandro Magno?",
    correcta: "Reinos dinásticos que difunden la cultura griega en amplios territorios",
    incorrectas: [
      "La reunificación política de todas las polis bajo una república panhelénica",
      "El aislamiento de las ciudades-estado y el cierre de rutas comerciales"
    ]
  },
  {
    enunciado: "¿Cuál de estos autores pertenece a la historiografía griega clásica?",
    correcta: "Tucídides",
    incorrectas: [
      "Tácito",
      "Tito Livio"
    ]
  },
  {
    enunciado: "¿Qué escuela filosófica helenística defendía la ataraxia mediante el placer moderado y la ausencia de temor?",
    correcta: "El epicureísmo",
    incorrectas: [
      "El estoicismo",
      "El pitagorismo"
    ]
  },
  {
    enunciado: "¿Qué rasgo arquitectónico romano deriva de influencias griegas pero se desarrolla técnicamente en Roma?",
    correcta: "El uso sistemático del arco y la bóveda en obras públicas",
    incorrectas: [
      "La cubierta adintelada exclusiva en templos sin modificaciones",
      "La pirámide escalonada como forma funeraria oficial"
    ]
  },
  {
    enunciado: "¿Qué etapa política precede a la República en la tradición romana?",
    correcta: "La monarquía con reyes legendarios",
    incorrectas: [
      "El imperio absoluto de Augusto",
      "La tetrarquía de Diocleciano"
    ]
  },
  {
    enunciado: "¿Qué institución fue central en la República romana como órgano de deliberación aristocrática?",
    correcta: "El Senado",
    incorrectas: [
      "El Areópago",
      "La Boulé"
    ]
  },
  {
    enunciado: "¿Qué conflicto enfrentó a Roma con Cartago por la hegemonía mediterránea occidental?",
    correcta: "Las Guerras Púnicas",
    incorrectas: [
      "Las Guerras Macedónicas",
      "La Guerra Mitridática"
    ]
  },
  {
    enunciado: "¿Qué transformación social y económica se asocia a la expansión romana del siglo II a.C.?",
    correcta: "El aumento de latifundios y la intensificación de la esclavitud",
    incorrectas: [
      "La desaparición de la moneda y el retorno al trueque",
      "La abolición general de la esclavitud en Italia"
    ]
  },
  {
    enunciado: "¿Qué líder romano instauró el Principado tras las guerras civiles?",
    correcta: "Augusto",
    incorrectas: [
      "César Augusto Nerón",
      "Trajano"
    ]
  },
  {
    enunciado: "¿Qué expresa el término 'pax romana' en el Alto Imperio?",
    correcta: "Un periodo de relativa estabilidad y prosperidad bajo el Principado",
    incorrectas: [
      "La prohibición de toda campaña militar en las fronteras",
      "Un tratado de paz con Parthia que duró cinco siglos"
    ]
  },
  {
    enunciado: "¿Qué elemento jurídico legó Roma de manera duradera a Europa?",
    correcta: "El derecho romano como base de sistemas civiles posteriores",
    incorrectas: [
      "El código de Hammurabi aplicado en provincias",
      "La ley espartana de Licurgo incorporada al Digesto"
    ]
  },
  {
    enunciado: "¿Qué vía de integración practicó Roma en los territorios conquistados?",
    correcta: "La municipalización y extensión gradual de la ciudadanía",
    incorrectas: [
      "La segregación eterna sin posibilidad de ciudadanía",
      "La sustitución obligatoria de lenguas locales por el griego koiné"
    ]
  },
  {
    enunciado: "¿Qué lengua de cultura predominó en Occidente romano?",
    correcta: "El latín",
    incorrectas: [
      "El acadio",
      "El copto"
    ]
  },
  {
    enunciado: "¿Qué ingeniería romana favoreció la integración económica del Imperio?",
    correcta: "Calzadas, puentes y acueductos estandarizados",
    incorrectas: [
      "Murallas continuas que cerraban todo el litoral",
      "Redes ferroviarias de tracción animal"
    ]
  },
  {
    enunciado: "¿Qué autor latino compuso la Eneida, epopeya fundacional para Roma?",
    correcta: "Virgilio",
    incorrectas: [
      "Homero",
      "Ovidio, en las Metamorfosis"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la economía grecolatina en términos de trabajo?",
    correcta: "El peso estructural de la esclavitud junto a el trabajo libre",
    incorrectas: [
      "La prohibición legal del trabajo esclavo",
      "La mecanización industrial generalizada"
    ]
  },
  {
    enunciado: "¿Qué define al ejército romano del Alto Imperio?",
    correcta: "Profesionalización, disciplina y construcción de infraestructuras",
    incorrectas: [
      "Milicias temporales sin salario",
      "Cuerpos mercenarios sin ciudadanía ni juramento"
    ]
  },
  {
    enunciado: "¿Qué crisis afectó gravemente al Imperio en el siglo III d.C.?",
    correcta: "Crisis política, militar y económica con usurpaciones e inflación",
    incorrectas: [
      "Colapso por peste bubónica con mortalidad del 80%",
      "Desaparición de la moneda de oro en todo el Imperio"
    ]
  },
  {
    enunciado: "¿Qué reforma institucional propuso Diocleciano a finales del siglo III?",
    correcta: "La tetrarquía con dos augustos y dos césares",
    incorrectas: [
      "La restauración de la monarquía hereditaria etrusca",
      "La democracia directa provincial"
    ]
  },
  {
    enunciado: "¿Qué emperador otorgó libertad de culto al cristianismo en el 313 d.C.?",
    correcta: "Constantino con el Edicto de Milán",
    incorrectas: [
      "Teodosio con el Edicto de Tesalónica",
      "Juliano con el Edicto de Antioquía"
    ]
  },
  {
    enunciado: "¿Qué fecha suele considerarse la caída del Imperio romano de Occidente?",
    correcta: "476 d.C., deposición de Rómulo Augústulo",
    incorrectas: [
      "410 d.C., saqueo de Roma por Alarico",
      "1453 d.C., toma de Constantinopla"
    ]
  },
  {
    enunciado: "¿Qué rasgo diferencia, en general, el arte griego del romano clásico?",
    correcta: "La búsqueda griega del canon ideal y la apropiación romana con sentido propagandístico",
    incorrectas: [
      "El rechazo romano del retrato realista",
      "La ausencia griega de órdenes arquitectónicos"
    ]
  },
  {
    enunciado: "¿Qué obra pública romana transportaba agua por gravedad a las ciudades?",
    correcta: "El acueducto",
    incorrectas: [
      "El anfiteatro",
      "La basílica judicial"
    ]
  },
  {
    enunciado: "¿Qué autor latino es clave para la historiografía del Alto Imperio con una visión crítica del poder?",
    correcta: "Tácito",
    incorrectas: [
      "Jenofonte",
      "Polibio"
    ]
  },
  {
    enunciado: "¿Qué fenómeno cultural describe la helenización en el Mediterráneo oriental?",
    correcta: "La difusión de lengua y cultura griegas en ámbitos no griegos",
    incorrectas: [
      "La sustitución del griego por el latín en todas partes",
      "La prohibición de cultos locales por parte de las polis"
    ]
  },
  {
    enunciado: "¿Qué práctica cívica romana estructuró la vida política municipal?",
    correcta: "El ordo decurional con magistraturas locales",
    incorrectas: [
      "La ekklesía de ciudadanos sorteados",
      "La gerusía espartana itinerante"
    ]
  },
  {
    enunciado: "¿Qué fuente de derecho romano recopiló jurisprudencia y comentarios en época de Justiniano?",
    correcta: "El Digesto o Pandectas",
    incorrectas: [
      "La Res gestae divi Augusti",
      "Las Vidas Paralelas"
    ]
  },
  {
    enunciado: "¿Qué concepto político griego influyó en teorías modernas de ciudadanía?",
    correcta: "La participación cívica en la comunidad política",
    incorrectas: [
      "La sacralización del poder por derecho divino",
      "La esclavitud como requisito ciudadano"
    ]
  },
  {
    enunciado: "¿Qué religión fue oficializada en el Imperio con Teodosio a fines del siglo IV?",
    correcta: "El cristianismo niceno",
    incorrectas: [
      "El mitraísmo",
      "El culto imperial como monoteísmo"
    ]
  },
  {
    enunciado: "¿Qué característica distingue al latín como lengua del Imperio de Occidente?",
    correcta: "Su papel como lengua administrativa y jurídica con variedades vulgares",
    incorrectas: [
      "Su restricción a usos literarios sin función administrativa",
      "Su origen semítico común con el fenicio"
    ]
  },
  {
    enunciado: "¿Qué relación mantuvo Roma con la cultura griega en el terreno artístico y literario?",
    correcta: "Adopción, adaptación y reinterpretación de modelos griegos",
    incorrectas: [
      "Rechazo sistemático de todo lo griego",
      "Sustitución total de la literatura latina por la griega"
    ]
  },
  {
    enunciado: "¿Qué obra arquitectónica romana servía a espectáculos de masas como gladiadores y caza?",
    correcta: "El anfiteatro",
    incorrectas: [
      "El odeón",
      "El gimnasio"
    ]
  },
  {
    enunciado: "¿Qué disciplina alcanzó logros notables con Euclides, Arquímedes y Eratóstenes?",
    correcta: "Las matemáticas y las ciencias exactas en el mundo griego",
    incorrectas: [
      "La alquimia normativa persa aplicada en Roma",
      "La ingeniería ferroviaria helenística"
    ]
  },
  {
    enunciado: "¿Qué noción resume la 'romanización' en los territorios conquistados?",
    correcta: "La adopción de lengua, derecho, instituciones y costumbres romanas",
    incorrectas: [
      "La expulsión total de poblaciones indígenas",
      "La imposición del griego como única lengua del Estado"
    ]
  },
  {
    enunciado: "¿Qué relación básica une a ciudadanía y ejército en la Roma republicana temprana?",
    correcta: "El servicio militar como deber del ciudadano propietario",
    incorrectas: [
      "La exención perpetua de los ciudadanos del servicio",
      "La recluta exclusiva de esclavos manumitidos"
    ]
  }
];
