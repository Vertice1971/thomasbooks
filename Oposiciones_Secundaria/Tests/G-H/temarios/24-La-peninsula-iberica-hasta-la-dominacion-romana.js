// temarios/24-La-peninsula-iberica-hasta-la-dominacion-romana.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué periodo abarca el estudio de la península Ibérica hasta la dominación romana en sentido estricto?",
    correcta: "Desde los primeros poblamientos del Paleolítico hasta la consolidación del dominio romano en el siglo I a.C.",
    incorrectas: [
      "Desde el inicio del Neolítico hasta la caída del Imperio romano de Occidente en el 476 d.C.",
      "Desde la Edad del Bronce hasta la invasión musulmana del 711 d.C."
    ]
  },
  {
    enunciado: "¿Qué yacimiento asociado al Homo antecessor es clave para el conocimiento del Paleolítico inferior en la península?",
    correcta: "La sierra de Atapuerca en Burgos",
    incorrectas: [
      "La cueva de Altamira en Cantabria",
      "La necrópolis de Los Millares en Almería"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracteriza al arte rupestre cantábrico del Paleolítico superior?",
    correcta: "Predominio de figuras de animales policromas en cuevas profundas",
    incorrectas: [
      "Representaciones de escenas humanas esquemáticas al aire libre",
      "Ausencia de perspectiva y uso exclusivo de líneas geométricas"
    ]
  },
  {
    enunciado: "¿Qué innovación define el Mesolítico en la península Ibérica?",
    correcta: "La generalización de microlitos geométricos en contextos de cazadores-recolectores",
    incorrectas: [
      "La aparición de la metalurgia del bronce a gran escala",
      "La fundación de ciudades amuralladas con planificación ortogonal"
    ]
  },
  {
    enunciado: "¿Cuál fue el cambio fundamental del Neolítico en la península Ibérica?",
    correcta: "La adopción de la agricultura y la ganadería con asentamientos estables",
    incorrectas: [
      "El inicio de la navegación de altura con barcos a vela",
      "La invención de la escritura alfabética indígena"
    ]
  },
  {
    enunciado: "¿Qué cultura calcolítica del sureste peninsular es conocida por su sistema defensivo y necrópolis de inhumación?",
    correcta: "La cultura de Los Millares",
    incorrectas: [
      "La cultura de El Argar",
      "La cultura de las Motillas"
    ]
  },
  {
    enunciado: "¿Qué rasgo económico distingue a la cultura de El Argar en la Edad del Bronce?",
    correcta: "La especialización metalúrgica y el control centralizado de recursos",
    incorrectas: [
      "La economía exclusivamente ganadera sin minería",
      "El uso extendido de monedas acuñadas griegas"
    ]
  },
  {
    enunciado: "¿Qué cultura protohistórica se asocia a fortificaciones en la llanura manchega con captación de aguas subterráneas?",
    correcta: "Las Motillas del Bronce manchego",
    incorrectas: [
      "Los castros del noroeste",
      "Los oppida celtibéricos del Sistema Ibérico"
    ]
  },
  {
    enunciado: "¿Qué pueblos introdujeron de forma temprana alfabetos y técnicas de salazón en la fachada mediterránea?",
    correcta: "Los fenicios establecidos en enclaves como Gadir, Malaka y Sexi",
    incorrectas: [
      "Los pueblos celtas llegados a través de los Pirineos",
      "Las comunidades tartésicas del valle del Guadalquivir"
    ]
  },
  {
    enunciado: "¿Qué colonia griega desempeñó un papel clave en el comercio del noreste peninsular?",
    correcta: "Emporion (Empúries)",
    incorrectas: [
      "Cástulo",
      "Numancia"
    ]
  },
  {
    enunciado: "¿Qué rasgo político-social es característico de los íberos?",
    correcta: "Estructuras jerarquizadas con élites aristocráticas y ciudades-estado",
    incorrectas: [
      "Monarquías centralizadas de ámbito peninsular",
      "Sociedades igualitarias sin diferencias de estatus"
    ]
  },
  {
    enunciado: "¿Qué elemento cultural singular se asocia a los íberos en el ámbito artístico y funerario?",
    correcta: "Esculturas como la Dama de Elche y la Dama de Baza",
    incorrectas: [
      "Megalitos tipo dolmen con galerías cubiertas",
      "Relieves en bronce de estilo celtibérico tardío"
    ]
  },
  {
    enunciado: "¿Qué ámbito geográfico y cultural caracterizó a los castros?",
    correcta: "El noroeste peninsular, con poblados fortificados y cultura material castreña",
    incorrectas: [
      "El sureste peninsular, con urbanismo planificado ibérico",
      "La Meseta sur, con grandes ciudades amuralladas romanas"
    ]
  },
  {
    enunciado: "¿Qué define a los celtíberos en términos etnoculturales?",
    correcta: "Una síntesis de elementos celtas e ibéricos en el interior oriental de la Meseta",
    incorrectas: [
      "Un grupo puramente griego asentado en la costa levantina",
      "Una confederación fenicia con capital en Gadir"
    ]
  },
  {
    enunciado: "¿Qué área se relaciona tradicionalmente con Tartessos según las fuentes clásicas?",
    correcta: "El suroeste peninsular, especialmente el bajo Guadalquivir",
    incorrectas: [
      "El litoral cantábrico en torno a la actual Asturias",
      "El valle medio del Ebro y sus afluentes"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento marca el inicio de la presencia militar romana en la península Ibérica?",
    correcta: "El desembarco en Emporion durante la Segunda Guerra Púnica (218 a.C.)",
    incorrectas: [
      "La anexión pacífica tras la Primera Guerra Púnica (241 a.C.)",
      "La conquista de Numancia por Escipión el Africano (133 a.C.)"
    ]
  },
  {
    enunciado: "¿Qué caudillo lusitano resistió eficazmente a Roma en el siglo II a.C.?",
    correcta: "Viriato",
    incorrectas: [
      "Argantonio",
      "Viria Acte"
    ]
  },
  {
    enunciado: "¿Qué ciudad simboliza la resistencia celtibérica frente a Roma y cayó en 133 a.C.?",
    correcta: "Numancia",
    incorrectas: [
      "Sagunto",
      "Cástulo"
    ]
  },
  {
    enunciado: "¿Qué división administrativa estableció Roma en la península tras la conquista inicial?",
    correcta: "Hispania Citerior e Hispania Ulterior",
    incorrectas: [
      "Bética, Tarraconense y Lusitania desde el primer momento",
      "Baetica y Gallaecia como únicas provincias"
    ]
  },
  {
    enunciado: "¿Qué transformación agraria favoreció la romanización en amplias zonas de Hispania?",
    correcta: "La difusión de la trilogía mediterránea: trigo, vid y olivo",
    incorrectas: [
      "La sustitución del cereal por arroz en regadíos extensos",
      "La prohibición de plantar viñedo en toda la península"
    ]
  },
  {
    enunciado: "¿Qué infraestructura fue básica para la integración económica y militar de Hispania en el Imperio?",
    correcta: "Las calzadas romanas como la Vía Augusta",
    incorrectas: [
      "Los canales de navegación interior de origen fenicio",
      "Las murallas lineales que cerraban pasos pirenaicos"
    ]
  },
  {
    enunciado: "¿Qué papel tuvo la minería hispana en la economía imperial romana?",
    correcta: "Suministró metales estratégicos como oro, plata y hierro a gran escala",
    incorrectas: [
      "Fue irrelevante y quedó restringida al autoconsumo local",
      "Se limitó a la extracción de sal y alabastro"
    ]
  },
  {
    enunciado: "¿Qué efecto social tuvo la romanización en las comunidades indígenas?",
    correcta: "La promoción de élites locales hacia magistraturas municipales y ciudadanía romana",
    incorrectas: [
      "La desaparición absoluta de toda estructura urbana",
      "La prohibición de cualquier mezcla cultural o jurídica"
    ]
  },
  {
    enunciado: "¿Qué lengua se difundió ampliamente en Hispania como resultado de la dominación romana?",
    correcta: "El latín en sus variedades habladas (vulgares)",
    incorrectas: [
      "El griego koiné como única lengua oficial",
      "El púnico como lengua administrativa del Imperio"
    ]
  },
  {
    enunciado: "¿Qué ciudad fue fundada por Augusto como colonia de veteranos y capital provincial?",
    correcta: "Emerita Augusta (Mérida)",
    incorrectas: [
      "Emporion (Empúries)",
      "Gadir (Cádiz)"
    ]
  },
  {
    enunciado: "¿Qué manifestación religiosa refleja el sincretismo entre cultos indígenas y romanos?",
    correcta: "La interpretatio romana que identificaba divinidades locales con dioses romanos",
    incorrectas: [
      "La prohibición total de los cultos indígenas desde el inicio",
      "La imposición del monoteísmo cristiano en el siglo II a.C."
    ]
  },
  {
    enunciado: "¿Qué pieza arquitectónica ilustra la ingeniería romana en Hispania?",
    correcta: "El acueducto de Segovia construido con sillares y arcos de medio punto",
    incorrectas: [
      "La pirámide escalonada de Carmona de tradición egipcia",
      "La ziggurat de Numancia de tradición mesopotámica"
    ]
  },
  {
    enunciado: "¿Qué rasgo económico era común en las sociedades prerromanas interiores?",
    correcta: "La combinación de agricultura cerealista y ganadería, con comercio regional",
    incorrectas: [
      "La economía basada exclusivamente en la pesca de altura",
      "El uso generalizado de bancos y letras de cambio"
    ]
  },
  {
    enunciado: "¿Qué documento jurídico romano influyó de modo duradero en Hispania?",
    correcta: "El derecho romano aplicado en colonias y municipios",
    incorrectas: [
      "El código de Hammurabi traducido al latín",
      "La ley de Dracón implantada en las ciudades hispanas"
    ]
  },
  {
    enunciado: "¿Qué ciudad mediterránea peninsular fue famosa por su papel en el inicio de la Segunda Guerra Púnica?",
    correcta: "Sagunto, cuya toma por Aníbal precipitó el conflicto",
    incorrectas: [
      "Tarraco, sitiada por Filipo V de Macedonia",
      "Itálica, destruida por los cartagineses en 218 a.C."
    ]
  },
  {
    enunciado: "¿Qué forma de asentamiento fortificado es típica del mundo celtibérico y carpetano?",
    correcta: "El oppidum ubicado en altura con murallas y control territorial",
    incorrectas: [
      "El palacio real axial con patio hipóstilo",
      "La villa suburbana con termas privadas del Alto Imperio"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a la escritura íbera oriental?",
    correcta: "Su naturaleza semisilábica adaptada a lenguas locales",
    incorrectas: [
      "Ser un alfabeto puramente fenicio sin modificaciones",
      "Usar exclusivamente caracteres cuneiformes sobre tablillas"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñaron los cartagineses en el sureste peninsular antes de la llegada de Roma?",
    correcta: "Consolidaron explotaciones mineras y bases militares y comerciales",
    incorrectas: [
      "Fundaron grandes bibliotecas y universidades públicas",
      "Implantaron la ciudadanía romana entre los indígenas"
    ]
  },
  {
    enunciado: "¿Qué fenómeno urbano se intensifica con la romanización?",
    correcta: "La creación de colonias y municipios con foros, templos y teatros",
    incorrectas: [
      "La desaparición de las ciudades en favor del nomadismo",
      "La sustitución de calzadas por caminos de herradura sin mantenimiento"
    ]
  },
  {
    enunciado: "¿Qué factor geográfico explica la península como zona de contacto e intercambio en la Antigüedad?",
    correcta: "Su posición estratégica entre el Atlántico y el Mediterráneo y el puente con África y Europa",
    incorrectas: [
      "Su aislamiento total por mares infranqueables",
      "La inexistencia de recursos mineros y agrícolas"
    ]
  },
  {
    enunciado: "¿Qué testimonio arqueológico ilustra el arte levantino postpaleolítico?",
    correcta: "Las escenas de arqueros y recolección en abrigos al aire libre como Valltorta",
    incorrectas: [
      "Las pinturas policromas de bisontes en cavernas profundas",
      "Los mosaicos romanos de temática marítima en villas costeras"
    ]
  },
  {
    enunciado: "¿Qué consecuencia administrativa tuvo la reorganización augustea en Hispania?",
    correcta: "La división en Tarraconense, Bética y Lusitania",
    incorrectas: [
      "La creación de las provincias de Citerior y Ulterior por primera vez",
      "La anexión de Hispania a la prefectura de Oriente"
    ]
  },
  {
    enunciado: "¿Qué actividad fue esencial en la economía litoral prerromana del sur y levante?",
    correcta: "La producción de salazones y el comercio marítimo de larga distancia",
    incorrectas: [
      "La siderurgia pesada basada en altos hornos hidráulicos",
      "La plantación de arroz a gran escala desde época fenicia"
    ]
  },
  {
    enunciado: "¿Qué institución cívica romana articuló la vida política local en Hispania?",
    correcta: "El ordo decurionum de los municipios y colonias",
    incorrectas: [
      "El senado provincial elegido por sufragio universal",
      "La asamblea tribal itinerante de carácter anual"
    ]
  },
  {
    enunciado: "¿Qué ciudad hispana se convirtió en un gran centro portuario romano en la costa mediterránea?",
    correcta: "Tarraco, capital de la Hispania Citerior/Tarraconense",
    incorrectas: [
      "Brigantium, capital de la Bética",
      "Numancia, puerto principal del Atlántico"
    ]
  },
  {
    enunciado: "¿Qué proceso resume el término 'romanización' aplicado a Hispania?",
    correcta: "La adopción progresiva de lengua, derecho, instituciones y formas de vida romanas",
    incorrectas: [
      "La sustitución obligatoria de toda población indígena por colonos itálicos",
      "La independencia política de las ciudades frente al Imperio"
    ]
  }
];
