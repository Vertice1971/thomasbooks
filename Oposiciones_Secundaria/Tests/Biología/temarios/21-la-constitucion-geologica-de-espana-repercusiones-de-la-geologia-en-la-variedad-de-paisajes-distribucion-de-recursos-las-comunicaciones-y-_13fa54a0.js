// temarios/21-la-constitucion-geologica-de-espana-repercusiones-de-la-geologia-en-la-variedad-de-paisajes-distribucion-de-recursos-las-comunicaciones-y-la-industria-el-problema-de-los-riesgos-la-ordenacion-del-territorio.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué orogenia explica el basamento del Macizo Ibérico?",
    correcta: "La orogenia Varisca (Hercínica)",
    incorrectas: [
      "La orogenia Alpina exclusivamente",
      "La orogenia Caledónica como evento principal en Iberia"
    ]
  },
  {
    enunciado: "¿Qué unidades estructurales se incluyen clásicamente en el Macizo Ibérico?",
    correcta: "Cantábrica, Astur-Leonesa, Centroibérica, Ossa-Morena y Surportuguesa",
    incorrectas: [
      "Subbética, Penibética y Prebética",
      "Bética, Rif y Argelina"
    ]
  },
  {
    enunciado: "¿Qué rasgo litológico domina en amplias áreas del Macizo Ibérico?",
    correcta: "Granitoides paleozoicos y rocas metamórficas vinculadas",
    incorrectas: [
      "Secuencias basálticas holocenas generalizadas",
      "Evaporitas triásicas en continuidad regional"
    ]
  },
  {
    enunciado: "¿Qué cordillera española es resultado directo de la colisión Iberia–Europa?",
    correcta: "Los Pirineos",
    incorrectas: [
      "La Cordillera Cantábrica varisca",
      "El Sistema Central"
    ]
  },
  {
    enunciado: "¿Qué rasgo tectónico caracteriza a muchas sierras béticas?",
    correcta: "Estructuras complejas con cabalgamientos y metamorfismo",
    incorrectas: [
      "Amplias lavas almohadilladas holocenas",
      "Pliegues suaves exclusivamente sin fallas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las grandes cuencas cenozoicas interiores (Duero, Tajo, Ebro, Guadalquivir)?",
    correcta: "Rellenos detríticos, carbonatados y evaporíticos con relieves tabulares",
    incorrectas: [
      "Dominios ultramáficos aflorantes generalizados",
      "Dominios glaciovolcánicos modernos"
    ]
  },
  {
    enunciado: "¿Qué archipiélago español presenta vulcanismo activo histórico?",
    correcta: "Islas Canarias",
    incorrectas: [
      "Islas Baleares",
      "Islas Cíes"
    ]
  },
  {
    enunciado: "¿Qué paisaje es típico en relieves graníticos españoles?",
    correcta: "Berrocales y domos con canchales",
    incorrectas: [
      "Karst con dolinas y lapiaces",
      "Dunas parabólicas costeras exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué forma de relieve asocias a litologías carbonatadas mesozoicas?",
    correcta: "Karst (dolinas, poljés, cuevas) y cañones",
    incorrectas: [
      "Malpaíses de lava pahoehoe",
      "Cordones litorales y flechas exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué rasgo glaciar cuaternario es común en Pirineos y Sierra Nevada?",
    correcta: "Valles en U y circos glaciares",
    incorrectas: [
      "Campos de dunas continentales activos extensos",
      "Badlands generalizados en calizas jurásicas"
    ]
  },
  {
    enunciado: "¿Qué provincia metalogénica destaca por sulfuros masivos en el SO peninsular?",
    correcta: "Faja Pirítica Ibérica",
    incorrectas: [
      "Cinturón de pórfidos andinos",
      "Cinturón uralita europeo"
    ]
  },
  {
    enunciado: "¿Qué roca ornamental es emblemática de Macael (Almería)?",
    correcta: "Mármol",
    incorrectas: [
      "Pizarra",
      "Ofiolita"
    ]
  },
  {
    enunciado: "¿Qué recurso hídrico suele asociarse a acuíferos carbonatados?",
    correcta: "Aguas subterráneas con conductividad elevada por disolución de carbonatos",
    incorrectas: [
      "Aguas sin minerales disueltos (destiladas)",
      "Aguas con silicatos exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué problema afecta a llanuras litorales con bombeo intensivo?",
    correcta: "Intrusión marina en acuíferos",
    incorrectas: [
      "Aporte masivo natural de agua dulce por artesianismo en todas las costas",
      "Formación espontánea de turberas extensas"
    ]
  },
  {
    enunciado: "¿Qué condiciona fuertemente la elección de corredores viarios y ferroviarios?",
    correcta: "Estructura geológica y morfología (valles estructurales, pasos)",
    incorrectas: [
      "La presencia de magnetita superficial exclusivamente",
      "La orientación arbitraria ajena al relieve"
    ]
  },
  {
    enunciado: "¿Qué mapa es fundamental para planificar túneles y grandes infraestructuras?",
    correcta: "El mapa geológico con secciones y datos estructurales",
    incorrectas: [
      "Únicamente el mapa climático anual",
      "Solo el mapa de suelos agrícolas"
    ]
  },
  {
    enunciado: "¿Qué riesgo sísmico relativo es mayor en la Península?",
    correcta: "En el sur y sureste (Béticas y mar de Alborán)",
    incorrectas: [
      "En la Meseta Norte de manera generalizada",
      "En Galicia por vulcanismo holoceno"
    ]
  },
  {
    enunciado: "¿Qué técnica satelital se usa para controlar subsidencia y deslizamientos?",
    correcta: "InSAR (interferometría radar)",
    incorrectas: [
      "Termoluminiscencia",
      "Espectroscopía Raman portátil de mano"
    ]
  },
  {
    enunciado: "¿Qué delta español es muy sensible a subsidencia y retroceso costero?",
    correcta: "Delta del Ebro",
    incorrectas: [
      "Ría de Arousa",
      "Mar Menor (que no es delta)"
    ]
  },
  {
    enunciado: "¿Qué fenómeno es típico en yesos y sales de cuencas terciarias?",
    correcta: "Karst en yesos y colapsos locales",
    incorrectas: [
      "Metamorfismo regional de alto grado",
      "Formación de glaciares de roca activos"
    ]
  },
  {
    enunciado: "¿Qué documento integra peligrosidad y exposición para ordenar el territorio?",
    correcta: "Mapas de riesgo y zonificación incorporados a planeamiento urbano/territorial",
    incorrectas: [
      "Catálogos de rocas ornamentales sin cartografía base",
      "Inventarios florísticos generales"
    ]
  },
  {
    enunciado: "¿Qué cordillera presenta sismicidad destacada junto a complejidad tectónica y metamórfica?",
    correcta: "Las Béticas",
    incorrectas: [
      "Sistema Central exclusivamente",
      "Montes de Toledo"
    ]
  },
  {
    enunciado: "¿Qué litologías favorecen paisajes de badlands en la España semiarida?",
    correcta: "Margas y arcillas blandas con escasa cobertura vegetal",
    incorrectas: [
      "Cuarcitas muy competentes",
      "Basaltos columnares masivos"
    ]
  },
  {
    enunciado: "¿Qué recurso es típico de cuencas aluviales y terrazas fluviales?",
    correcta: "Áridos (gravas y arenas) para construcción",
    incorrectas: [
      "Diamantes de kimberlita",
      "Nódulos de manganeso oceánico"
    ]
  },
  {
    enunciado: "¿Qué variable geotécnica condiciona cimentaciones en suelos blandos?",
    correcta: "Compresibilidad y grado de saturación",
    incorrectas: [
      "Color Munsell exclusivamente",
      "Contenido de cuarzo en roca cristalina intacta"
    ]
  },
  {
    enunciado: "¿Qué parámetro sísmico local se usa para microzonación?",
    correcta: "Vs30 y periodos fundamentales del terreno",
    incorrectas: [
      "Índice de plasticidad de Atterberg únicamente",
      "Relación Ca/Mg del agua subterránea"
    ]
  },
  {
    enunciado: "¿Qué combinación es correcta respecto a patrimonio geológico?",
    correcta: "Geoparques y LIGs como figuras para conservación y divulgación",
    incorrectas: [
      "Prospección minera obligatoria en espacios protegidos",
      "Prohibición absoluta de visitas educativas"
    ]
  },
  {
    enunciado: "¿Qué unidad NO pertenece a las grandes cordilleras alpinas españolas?",
    correcta: "Macizo Hespérico",
    incorrectas: [
      "Pirineos",
      "Cordilleras Béticas"
    ]
  },
  {
    enunciado: "¿Qué problema geológico urbano se asocia a rellenos antrópicos y antiguas explotaciones?",
    correcta: "Subsidencia y asientos diferenciales",
    incorrectas: [
      "Formación de permafrost en llanuras mediterráneas",
      "Eruptividad basáltica espontánea"
    ]
  },
  {
    enunciado: "¿Qué industria se asocia fuertemente a disponibilidad local de roca ornamental?",
    correcta: "Cantería y transformación de piedra natural",
    incorrectas: [
      "Refino petroquímico exclusivamente",
      "Astrofísica observacional"
    ]
  },
  {
    enunciado: "¿Qué cartografía oficial proporciona el IGME para consulta pública?",
    correcta: "MAGNA 1:50.000 y mapas temáticos (hidrogeológicos, riesgos, recursos)",
    incorrectas: [
      "Únicamente mapas climáticos",
      "Solo mapas de carreteras autonómicos"
    ]
  },
  {
    enunciado: "¿Qué condiciona la localización de presas sobre macizos carbonatados?",
    correcta: "Karstificación, permeabilidad y necesidad de tratamientos de impermeabilización",
    incorrectas: [
      "Presencia de turba continua y homogénea",
      "Oxidación de basaltos superficiales"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a la Cordillera Ibérica?",
    correcta: "Reactivación mesozoica extensional y compresión alpina posterior",
    incorrectas: [
      "Ser un arco volcánico oceánico activo",
      "Ser un escudo precámbrico estable sin deformación"
    ]
  },
  {
    enunciado: "¿Qué recurso energético tuvo importancia histórica en Asturias y León?",
    correcta: "Carbón",
    incorrectas: [
      "Uranio de grandes yacimientos tipo roll-front activos",
      "Geotermia de alta entalpía regional extensa"
    ]
  },
  {
    enunciado: "¿Qué técnica ayuda a detectar fallas activas en superficie?",
    correcta: "Análisis geomorfológico, paleosismología y señales InSAR",
    incorrectas: [
      "Resonancia magnética nuclear de rocas in situ",
      "Ensayo de corte directo de laboratorio en arcillas"
    ]
  },
  {
    enunciado: "¿Qué combinación costa–rasgo es correcta?",
    correcta: "Albuferas y marismas en llanuras litorales bajas (p. ej., Doñana)",
    incorrectas: [
      "Fiordos glaciales activos en Mediterráneo español",
      "Atolones coralinos de plataforma oceánica extensa"
    ]
  },
  {
    enunciado: "¿Qué estrategia reduce la exposición a inundaciones en llanuras fluviales?",
    correcta: "Evitar la ocupación, restaurar llanuras de inundación y zonas de flujo preferente",
    incorrectas: [
      "Aumentar la urbanización sobre diques sin estudio",
      "Sellar el suelo para acelerar la escorrentía"
    ]
  },
  {
    enunciado: "¿Qué problema geológico es común en yesos del valle del Ebro?",
    correcta: "Inestabilidad por disolución y subsidencia localizada",
    incorrectas: [
      "Metamorfismo granulítico generalizado",
      "Karst en calizas arrecifales cuaternarias exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué relación es correcta entre litología y forma del relieve?",
    correcta: "Cuarcitas → crestas resistentes; margas/yesos → laderas suaves y badlands",
    incorrectas: [
      "Calizas puras → suelos hidromorfos permanentes",
      "Granitos sanos → carstificación cavernosa generalizada"
    ]
  },
  {
    enunciado: "¿Qué indicador apoya la gestión sostenible de áridos y canteras?",
    correcta: "Planes de restauración y seguimiento ambiental con control de afecciones",
    incorrectas: [
      "Extracción a máximo ritmo sin evaluación",
      "Ausencia de recrecimientos y taludes estables"
    ]
  }
];
