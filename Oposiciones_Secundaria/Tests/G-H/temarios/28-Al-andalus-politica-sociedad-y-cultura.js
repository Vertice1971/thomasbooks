// temarios/28-Al-andalus-politica-sociedad-y-cultura.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué hecho marca tradicionalmente el inicio de Al-Ándalus en la península ibérica?",
    correcta: "La victoria musulmana en la batalla de Guadalete en 711",
    incorrectas: [
      "La fundación de la ciudad de Córdoba por los romanos",
      "La llegada de los almorávides en el siglo XI"
    ]
  },
  {
    enunciado: "¿Cuál fue una de las causas internas que facilitó la conquista musulmana del reino visigodo?",
    correcta: "La división interna y conflictos sucesorios entre facciones visigodas",
    incorrectas: [
      "La inexistencia de defensas en las costas mediterráneas",
      "El rechazo generalizado de la población al cristianismo"
    ]
  },
  {
    enunciado: "¿Qué pacto estableció condiciones de respeto a la población cristiana en el sudeste peninsular tras la conquista musulmana?",
    correcta: "El Pacto de Tudmir",
    incorrectas: [
      "El Tratado de Almizra",
      "El Acuerdo de Medina Azahara"
    ]
  },
  {
    enunciado: "¿Quién fundó el Emirato independiente de Córdoba en 756?",
    correcta: "Abd al-Rahman I",
    incorrectas: [
      "Almanzor",
      "Abd al-Rahman III"
    ]
  },
  {
    enunciado: "¿En qué año se proclamó el Califato de Córdoba?",
    correcta: "929",
    incorrectas: [
      "912",
      "1031"
    ]
  },
  {
    enunciado: "¿Qué califa impulsó la construcción de Medina Azahara?",
    correcta: "Abd al-Rahman III",
    incorrectas: [
      "Hisham I",
      "Al-Hakam II"
    ]
  },
  {
    enunciado: "¿Quién fue el dirigente militar que lideró campañas contra los reinos cristianos a finales del Califato?",
    correcta: "Almanzor",
    incorrectas: [
      "Al-Mu’tamid",
      "Boabdil"
    ]
  },
  {
    enunciado: "¿Qué nombre reciben los pequeños estados en los que se fragmentó Al-Ándalus tras 1031?",
    correcta: "Reinos de taifas",
    incorrectas: [
      "Coras",
      "Marcas"
    ]
  },
  {
    enunciado: "¿Qué pueblo norteafricano intervino en Al-Ándalus en 1086 para frenar el avance cristiano?",
    correcta: "Almorávides",
    incorrectas: [
      "Almohades",
      "Bereberes zenetas"
    ]
  },
  {
    enunciado: "¿Cuál fue el último reino musulmán en la península ibérica?",
    correcta: "Reino nazarí de Granada",
    incorrectas: [
      "Reino de Badajoz",
      "Reino de Valencia"
    ]
  },
  {
    enunciado: "¿En qué año cayó Granada en manos de los Reyes Católicos?",
    correcta: "1492",
    incorrectas: [
      "1487",
      "1502"
    ]
  },
  {
    enunciado: "¿Cómo se llamaba la división territorial básica en Al-Ándalus?",
    correcta: "Cora",
    incorrectas: [
      "Provincia",
      "Kabila"
    ]
  },
  {
    enunciado: "¿Qué impuesto pagaban los no musulmanes a cambio de protección?",
    correcta: "Yizia",
    incorrectas: [
      "Zakat",
      "Jarach"
    ]
  },
  {
    enunciado: "¿Qué innovación agrícola introdujo Al-Ándalus procedente de Oriente?",
    correcta: "Cultivo de cítricos y caña de azúcar",
    incorrectas: [
      "Rotación trienal",
      "Uso de fertilizantes químicos"
    ]
  },
  {
    enunciado: "¿Cuál fue una de las principales actividades artesanales en Al-Ándalus?",
    correcta: "Producción de cuero cordobán",
    incorrectas: [
      "Fabricación de vidrio veneciano",
      "Tejido de lana escocesa"
    ]
  },
  {
    enunciado: "¿Qué moneda de oro se usaba en el comercio andalusí?",
    correcta: "Dinar",
    incorrectas: [
      "Dirham",
      "Maravedí"
    ]
  },
  {
    enunciado: "¿Qué grupo social estaba formado por cristianos bajo dominio musulmán?",
    correcta: "Mozárabes",
    incorrectas: [
      "Muladíes",
      "Dhimmíes"
    ]
  },
  {
    enunciado: "¿Qué figura destacada de la filosofía nació en Córdoba en 1126?",
    correcta: "Averroes",
    incorrectas: [
      "Avicena",
      "Maimónides"
    ]
  },
  {
    enunciado: "¿Qué forma poética característica de Al-Ándalus combina versos en árabe y en romance?",
    correcta: "Muwashaha",
    incorrectas: [
      "Haiku",
      "Soneto"
    ]
  },
  {
    enunciado: "¿Qué obra de Ibn Hazm es célebre por su reflexión sobre el amor?",
    correcta: "El collar de la paloma",
    incorrectas: [
      "La risala",
      "El libro de la curación"
    ]
  },
  {
    enunciado: "¿Qué edificio es el principal ejemplo de arquitectura omeya en la península?",
    correcta: "Mezquita de Córdoba",
    incorrectas: [
      "Alhambra de Granada",
      "Alcázar de Sevilla"
    ]
  },
  {
    enunciado: "¿Qué ciudad andalusí destacó por su Escuela de Traductores en el siglo XII?",
    correcta: "Toledo",
    incorrectas: [
      "Málaga",
      "Almería"
    ]
  },
  {
    enunciado: "¿Qué dinastía sustituyó a los almorávides en el poder en el siglo XII?",
    correcta: "Almohades",
    incorrectas: [
      "Nazaríes",
      "Fatimíes"
    ]
  },
  {
    enunciado: "¿Qué rey nazarí entregó Granada a los Reyes Católicos?",
    correcta: "Boabdil",
    incorrectas: [
      "Yusuf I",
      "Muhammad V"
    ]
  },
  {
    enunciado: "¿Qué técnica decorativa islámica se caracteriza por la repetición de motivos geométricos?",
    correcta: "Lacería",
    incorrectas: [
      "Vidriera",
      "Esgrafiado"
    ]
  },
  {
    enunciado: "¿Qué función tenía el cadí en la administración andalusí?",
    correcta: "Juez encargado de aplicar la ley islámica",
    incorrectas: [
      "Gobernador militar de una cora",
      "Recaudador de impuestos"
    ]
  },
  {
    enunciado: "¿Qué sistema de riego utilizaban los andalusíes con ruedas hidráulicas?",
    correcta: "Noria",
    incorrectas: [
      "Acequia",
      "Azud"
    ]
  },
  {
    enunciado: "¿Qué personaje judío de Córdoba destacó como médico y filósofo?",
    correcta: "Maimónides",
    incorrectas: [
      "Hasdai ibn Shaprut",
      "Samuel ibn Nagrella"
    ]
  },
  {
    enunciado: "¿Qué cultivo fue introducido por los andalusíes y se adaptó bien a la costa valenciana?",
    correcta: "Arroz",
    incorrectas: [
      "Maíz",
      "Patata"
    ]
  },
  {
    enunciado: "¿Qué elemento arquitectónico separa la sala de oración del patio en la mezquita?",
    correcta: "Arquería",
    incorrectas: [
      "Triforio",
      "Cripta"
    ]
  },
  {
    enunciado: "¿Qué figura política dirigía la hisba?",
    correcta: "Almotacén",
    incorrectas: [
      "Visir",
      "Imán"
    ]
  },
  {
    enunciado: "¿Qué importante geógrafo del siglo XII elaboró un atlas para el rey normando de Sicilia?",
    correcta: "Al-Idrisi",
    incorrectas: [
      "Ibn Battuta",
      "Al-Tabari"
    ]
  },
  {
    enunciado: "¿Qué producción artesanal de Almería fue muy apreciada en Europa?",
    correcta: "Cerámica vidriada",
    incorrectas: [
      "Vidrio soplado",
      "Tapices flamencos"
    ]
  },
  {
    enunciado: "¿Qué lengua se utilizaba habitualmente en la administración de Al-Ándalus?",
    correcta: "Árabe",
    incorrectas: [
      "Latín",
      "Bereber"
    ]
  },
  {
    enunciado: "¿Qué término designaba a los musulmanes que vivían en territorio cristiano?",
    correcta: "Mudéjares",
    incorrectas: [
      "Mozárabes",
      "Muladíes"
    ]
  },
  {
    enunciado: "¿Qué recurso natural de Sierra Morena fue explotado en época andalusí?",
    correcta: "Plata",
    incorrectas: [
      "Carbón",
      "Petróleo"
    ]
  },
  {
    enunciado: "¿Qué edificio emblemático del arte nazarí se encuentra en Granada?",
    correcta: "La Alhambra",
    incorrectas: [
      "La Giralda",
      "Medina Azahara"
    ]
  },
  {
    enunciado: "¿Qué poeta andalusí del siglo XII destacó por sus zéjeles?",
    correcta: "Ibn Quzman",
    incorrectas: [
      "Ibn Hazm",
      "Al-Mu’tamid"
    ]
  },
  {
    enunciado: "¿Qué impuesto agrícola gravaba a los no musulmanes propietarios de tierras?",
    correcta: "Jarach",
    incorrectas: [
      "Zakat",
      "Yizia"
    ]
  },
  {
    enunciado: "¿Qué sistema defensivo fronterizo establecieron los andalusíes contra los reinos cristianos?",
    correcta: "Marcas",
    incorrectas: [
      "Taifas",
      "Coras"
    ]
  }
];
