// temarios/19-la-historia-geologica-de-la-tierra-fauna-y-flora-fosiles.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué eón incluye la mayor parte de la historia de la Tierra previa al registro fósil abundante?",
    correcta: "Precámbrico (Hádico, Arcaico y Proterozoico)",
    incorrectas: [
      "Fanerozoico",
      "Cenozoico"
    ]
  },
  {
    enunciado: "¿Qué evento biogeoquímico marcó un cambio redox global hace ~2,4 Ga?",
    correcta: "La Gran Oxidación",
    incorrectas: [
      "El evento K–Pg",
      "La transgresión eocena"
    ]
  },
  {
    enunciado: "¿Qué biota precámbrica destaca por la preservación de organismos de cuerpo blando?",
    correcta: "Biota de Ediacara",
    incorrectas: [
      "Burgess Shale (Cámbrico)",
      "Messel (Eoceno)"
    ]
  },
  {
    enunciado: "¿Qué rasgo define la 'Explosión Cámbrica'?",
    correcta: "Rápida radiación de metazoos y aparición de la mayoría de los planes corporales",
    incorrectas: [
      "Diversificación de mamíferos placentarios",
      "Expansión global de angiospermas"
    ]
  },
  {
    enunciado: "¿Cuál es un buen criterio para considerar un fósil como guía?",
    correcta: "Amplia distribución geográfica y rápida evolución",
    incorrectas: [
      "Tamaño grande y vida longeva",
      "Endemismo extremo y escasez"
    ]
  },
  {
    enunciado: "¿Qué grupo es característico del Paleozoico temprano como fósil guía marino?",
    correcta: "Trilobites",
    incorrectas: [
      "Equinos",
      "Hominoideos"
    ]
  },
  {
    enunciado: "¿Qué vertebrados dominan el Mesozoico en ambientes terrestres?",
    correcta: "Dinosaurios",
    incorrectas: [
      "Mamíferos placentarios gigantes",
      "Anfibios laberintodontes"
    ]
  },
  {
    enunciado: "¿Qué límite cronoestratigráfico está asociado a un pico de iridio y tectitas?",
    correcta: "Cretácico–Paleógeno (K–Pg)",
    incorrectas: [
      "Pérmico–Triásico",
      "Ordovícico–Silúrico"
    ]
  },
  {
    enunciado: "¿Qué plantas dominaron los bosques del Carbonífero, origen de muchos carbones?",
    correcta: "Licofitas y helechos arborescentes",
    incorrectas: [
      "Angiospermas dominantes",
      "Coníferas boreales exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué innovación permitió la plena colonización terrestre de vertebrados?",
    correcta: "El huevo amniota",
    incorrectas: [
      "La notocorda",
      "El opérculo branquial"
    ]
  },
  {
    enunciado: "¿Qué microfósiles marinos son clave para correlación del Cenozoico?",
    correcta: "Foraminíferos planctónicos y nannofósiles calcáreos",
    incorrectas: [
      "Radiolarios únicamente",
      "Diatomeas de agua dulce exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué evento ocurrió aproximadamente hace 252 Ma?",
    correcta: "Extinción masiva del límite Pérmico–Triásico",
    incorrectas: [
      "Apertura del Atlántico Norte",
      "Inicio del Holoceno"
    ]
  },
  {
    enunciado: "¿Qué define a una Lagerstätte?",
    correcta: "Yacimiento con preservación excepcional (a menudo de partes blandas)",
    incorrectas: [
      "Cualquier yacimiento con huesos aislados",
      "Depósitos glaciares sin fósiles"
    ]
  },
  {
    enunciado: "¿Qué grupo vegetal aparece y se diversifica rápidamente en el Cretácico?",
    correcta: "Angiospermas",
    incorrectas: [
      "Cianobacterias",
      "Licofitas basales"
    ]
  },
  {
    enunciado: "¿Qué registro isotópico se usa para paleotemperaturas oceánicas?",
    correcta: "δ18O en carbonatos y conchas",
    incorrectas: [
      "Relación 87Rb/86Sr en basaltos",
      "δ34S en sulfuros exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué fósiles guía son típicos del Mesozoico marino?",
    correcta: "Ammonites",
    incorrectas: [
      "Graptolitos",
      "Conodontos del Paleozoico"
    ]
  },
  {
    enunciado: "¿Qué innovación de plantas del Devónico tardío–Carbonífero transformó los ecosistemas terrestres?",
    correcta: "Árboles vasculares con madera secundaria y hojas complejas",
    incorrectas: [
      "Fotosíntesis oxigénica por primera vez",
      "Semillas cubiertas (angiospermas)"
    ]
  },
  {
    enunciado: "¿Qué periodo es conocido como la 'edad de los peces'?",
    correcta: "Devónico",
    incorrectas: [
      "Cámbrico",
      "Jurásico"
    ]
  },
  {
    enunciado: "¿Qué grupo de sinápsidos dio lugar a los mamíferos?",
    correcta: "Terápsidos",
    incorrectas: [
      "Sauropterigios",
      "Pterosaurios"
    ]
  },
  {
    enunciado: "¿Qué conjunto fósil-flora está bien emparejado?",
    correcta: "Ginkgoales – Mesozoico y Cenozoico temprano",
    incorrectas: [
      "Paulownia – Carbonífero",
      "Helechos arborescentes – Holoceno temprano como dominantes globales"
    ]
  },
  {
    enunciado: "¿Qué método estratigráfico ordena sedimentos por patrones orbitales?",
    correcta: "Cicloestratigrafía (Milankovitch)",
    incorrectas: [
      "Petrografía de lámina delgada",
      "Tomografía sísmica de manto"
    ]
  },
  {
    enunciado: "¿Qué prueba apoya la deriva continental en el Mesozoico?",
    correcta: "Distribución de fósiles y paleomagnetismo coherente en márgenes opuestos",
    incorrectas: [
      "Cambio diario del campo magnético",
      "Erosión uniforme global"
    ]
  },
  {
    enunciado: "¿Qué evento cenozoico temprano supuso un calentamiento abrupto global?",
    correcta: "Máximo Térmico del Paleoceno–Eoceno (PETM)",
    incorrectas: [
      "Glaciación Varisca",
      "“Snowball Earth”"
    ]
  },
  {
    enunciado: "¿Qué icnofacies es típica de ambientes de alta energía y sustratos móviles?",
    correcta: "Skolithos",
    incorrectas: [
      "Cruziana de ambientes más tranquilos",
      "Zoophycos de fondos profundos de baja energía"
    ]
  },
  {
    enunciado: "¿En qué eón se sitúa la aparición de eucariotas?",
    correcta: "Proterozoico",
    incorrectas: [
      "Arcaico exclusivamente",
      "Fanerozoico"
    ]
  },
  {
    enunciado: "¿Qué fósiles son útiles para reconstruir vegetación y clima continentales?",
    correcta: "Polen y esporas (palinología)",
    incorrectas: [
      "Nannofósiles calcáreos únicamente",
      "Conodontos exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué fauna emblemática procede del yacimiento cámbrico de Burgess Shale?",
    correcta: "Fauna de artrópodos y lobopodios de partes blandas",
    incorrectas: [
      "Mamíferos eocenos",
      "Dinosaurios cretácicos"
    ]
  },
  {
    enunciado: "¿Cuál es la era del Fanerozoico en la que aparecen los primeros dinosaurios?",
    correcta: "Mesozoico",
    incorrectas: [
      "Paleozoico",
      "Cenozoico"
    ]
  },
  {
    enunciado: "¿Qué periodo registra la primera radiación de aves verdaderas?",
    correcta: "Jurásico tardío y Cretácico temprano",
    incorrectas: [
      "Devónico medio",
      "Pérmico tardío"
    ]
  },
  {
    enunciado: "¿Qué evidencia apoya la hipótesis de impacto en el límite K–Pg?",
    correcta: "Capa global de iridio y cráter de Chicxulub",
    incorrectas: [
      "Incremento de δ18O positivo en carbonatos mesozoicos",
      "Ausencia de tefras en el registro"
    ]
  },
  {
    enunciado: "¿Qué gran provincia ígnea se asocia a la crisis Pérmico–Triásico?",
    correcta: "Trapps Siberianos",
    incorrectas: [
      "Trapps del Decán",
      "Provincia Ígnea Centroatlántica (CAMP) del Triásico–Jurásico"
    ]
  },
  {
    enunciado: "¿Qué conjunto taxón–ambiente es correcto?",
    correcta: "Ammonites – marino pelágico/nerítico mesozoico",
    incorrectas: [
      "Trilobites – cenozoico superior",
      "Equidos – ambientes marinos profundos"
    ]
  },
  {
    enunciado: "¿Qué innovación florística del Cretácico impulsó coevolución con insectos?",
    correcta: "Flor y fruto de las angiospermas",
    incorrectas: [
      "Espermatozoides multiflagelados de helechos",
      "Semillas desnudas de gimnospermas"
    ]
  },
  {
    enunciado: "¿Qué grupo de mamíferos domina las radiaciones cenozoicas terrestres?",
    correcta: "Placentarios (junto a marsupiales regionalmente)",
    incorrectas: [
      "Monotremas exclusivamente",
      "Pterosaurios"
    ]
  },
  {
    enunciado: "¿Qué registro documenta la expansión de pastizales C4 en el Mioceno tardío?",
    correcta: "Cambios en δ13C en esmalte dental y suelos (paleosuelos)",
    incorrectas: [
      "Descenso global de δ18O en foraminíferos bentónicos",
      "Aumento de iridio en arcillas cretácicas"
    ]
  },
  {
    enunciado: "¿Qué herramienta permite vincular edades absolutas con biozonas regionales?",
    correcta: "Correlación multiproxy (radiometría + bio- y magnetoestratigrafía)",
    incorrectas: [
      "Uso exclusivo de litología local",
      "Estimación por color Munsell del estrato"
    ]
  },
  {
    enunciado: "¿Qué evento marca el inicio del Cuaternario en la escala oficial?",
    correcta: "Transición Plio–Pleistoceno (~2,58 Ma) con cambios climáticos y glaciaciones",
    incorrectas: [
      "Extinción Ordovícico tardío",
      "Aparición de trilobites"
    ]
  },
  {
    enunciado: "¿Qué característica distingue a los conodontos como fósiles guía?",
    correcta: "Elementos fosfáticos microscópicos con rápida evolución y amplia distribución",
    incorrectas: [
      "Conchas carbonatadas macroscópicas",
      "Restos vegetales compresos de gran tamaño"
    ]
  },
  {
    enunciado: "¿Qué transición evolutiva clave sucede en el Devónico tardío?",
    correcta: "Paso de peces sarcopterigios a tetrápodos tempranos",
    incorrectas: [
      "Origen de aves modernas",
      "Aparición de primates antropoides"
    ]
  },
  {
    enunciado: "¿Qué relación es correcta entre eras y ejemplos biológicos?",
    correcta: "Paleozoico – colonización terrestre de plantas y artrópodos",
    incorrectas: [
      "Cenozoico – dominio de trilobites",
      "Mesozoico – megafauna de mamíferos pleistocenos"
    ]
  }
];
