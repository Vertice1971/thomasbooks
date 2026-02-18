// temarios/02-estructura-y-composicion-de-la-tierra-los-metodos-de-estudio.js
var PREGUNTAS = [
  {
    enunciado: "¿Por qué es necesario usar métodos indirectos para estudiar el interior de la Tierra?",
    correcta: "Porque la observación directa solo alcanza pocos kilómetros de profundidad",
    incorrectas: [
      "Porque el interior no emite ninguna señal medible",
      "Porque los métodos directos son ilegales en la mayoría de países"
    ]
  },
  {
    enunciado: "¿Cuál es la densidad media aproximada de la Tierra?",
    correcta: "≈5,5 g/cm³",
    incorrectas: [
      "≈2,7 g/cm³",
      "≈11,0 g/cm³"
    ]
  },
  {
    enunciado: "¿Cómo se denomina la superficie que separa la corteza del manto superior?",
    correcta: "Discontinuidad de Mohorovičić (Moho)",
    incorrectas: [
      "Discontinuidad de Gutenberg",
      "Discontinuidad de Lehmann"
    ]
  },
  {
    enunciado: "¿Qué discontinuidad marca el límite entre manto y núcleo externo?",
    correcta: "Discontinuidad de Gutenberg",
    incorrectas: [
      "Discontinuidad de Conrad",
      "Discontinuidad de Lehmann"
    ]
  },
  {
    enunciado: "¿Qué discontinuidad separa el núcleo externo del núcleo interno?",
    correcta: "Discontinuidad de Lehmann",
    incorrectas: [
      "Discontinuidad de Mohorovičić",
      "Discontinuidad de Repetti"
    ]
  },
  {
    enunciado: "¿Qué ondas sísmicas no se propagan a través de líquidos?",
    correcta: "Ondas S",
    incorrectas: [
      "Ondas P",
      "Ondas de superficie Love-Raleigh"
    ]
  },
  {
    enunciado: "¿Qué explica la zona de sombra de las ondas S a partir de ~103°?",
    correcta: "La presencia de un núcleo externo líquido",
    incorrectas: [
      "La existencia de una corteza oceánica muy densa",
      "La rotación diferencial del manto inferior"
    ]
  },
  {
    enunciado: "¿Cuál es el modelo sísmico de referencia más usado para la estructura radial de la Tierra?",
    correcta: "PREM (Preliminary Reference Earth Model)",
    incorrectas: [
      "CMIP6",
      "IPCC-AR6"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal hay entre litosfera y astenosfera?",
    correcta: "La litosfera es rígida; la astenosfera es dúctil",
    incorrectas: [
      "La litosfera es líquida; la astenosfera es sólida",
      "La litosfera está compuesta solo por hierro; la astenosfera por silicatos"
    ]
  },
  {
    enunciado: "¿Qué espesor típico tiene la corteza oceánica?",
    correcta: "≈5–10 km",
    incorrectas: [
      "≈30–70 km",
      "≈100–200 km"
    ]
  },
  {
    enunciado: "¿Qué espesor típico tiene la corteza continental?",
    correcta: "≈30–70 km",
    incorrectas: [
      "≈5–10 km",
      "≈200–400 km"
    ]
  },
  {
    enunciado: "¿Cuál es la composición dominante del manto superior terrestre?",
    correcta: "Peridotitas ricas en olivino y piroxenos",
    incorrectas: [
      "Granitos y gneises",
      "Rocas evaporíticas"
    ]
  },
  {
    enunciado: "¿Cuál es la composición dominante de la corteza oceánica?",
    correcta: "Basalto y gabro (serie ofiolítica)",
    incorrectas: [
      "Andesita y riolita",
      "Peridotita y dunita"
    ]
  },
  {
    enunciado: "¿Qué elementos químicos dominan en el núcleo terrestre?",
    correcta: "Hierro y níquel",
    incorrectas: [
      "Silicio y oxígeno",
      "Calcio y sodio"
    ]
  },
  {
    enunciado: "¿Qué gradiente geotérmico medio se acepta en corteza continental estable?",
    correcta: "≈25–30 °C por km",
    incorrectas: [
      "≈2–3 °C por km",
      "≈100 °C por km"
    ]
  },
  {
    enunciado: "¿Cuál ha sido aproximadamente la perforación más profunda realizada por el ser humano (pozo de Kola)?",
    correcta: "≈12,2 km",
    incorrectas: [
      "≈1,2 km",
      "≈122 km"
    ]
  },
  {
    enunciado: "¿Qué se estudia con los xenolitos transportados por magmas basálticos o kimberlíticos?",
    correcta: "Fragmentos de manto y corteza profunda ascendidos a la superficie",
    incorrectas: [
      "Únicamente meteoritos metálicos recién caídos",
      "Cristales formados en la atmósfera superior"
    ]
  },
  {
    enunciado: "¿Qué propiedad física miden los métodos magnetotelúricos?",
    correcta: "La resistividad eléctrica del subsuelo",
    incorrectas: [
      "La velocidad de las ondas sísmicas",
      "La radioactividad natural de las rocas"
    ]
  },
  {
    enunciado: "¿Qué son las anomalías de Bouguer en geofísica?",
    correcta: "Variaciones del campo de gravedad tras corregir efectos topográficos y de latitud",
    incorrectas: [
      "Variaciones del campo magnético solar",
      "Cambios en la salinidad oceánica medidos por satélite"
    ]
  },
  {
    enunciado: "¿Qué método permite identificar discontinuidades internas por reflexión y refracción de ondas?",
    correcta: "Sismología de exploración y de terremotos naturales",
    incorrectas: [
      "Espectrometría de masas",
      "Difracción de rayos X"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el modelo geoquímico de la Tierra?",
    correcta: "Corteza, manto y núcleo según composición",
    incorrectas: [
      "Litosfera, mesosfera y endosfera según temperatura",
      "Troposfera, estratosfera y mesosfera según gases"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el modelo geodinámico de la Tierra?",
    correcta: "Litosfera, astenosfera, mesosfera, núcleo externo e interno",
    incorrectas: [
      "Corteza, manto superior y manto inferior",
      "Troposfera, estratosfera y termosfera"
    ]
  },
  {
    enunciado: "¿Por qué aumenta en general la velocidad de las ondas P con la profundidad en el manto?",
    correcta: "Porque la presión aumenta, incrementando la rigidez efectiva del material",
    incorrectas: [
      "Porque la temperatura disminuye linealmente con la profundidad",
      "Porque el manto se vuelve líquido a poca profundidad"
    ]
  },
  {
    enunciado: "¿Qué indica una zona de baja velocidad sísmica (LVZ) en la astenosfera?",
    correcta: "Comportamiento más dúctil y posible fusión parcial",
    incorrectas: [
      "Rocas ultrarrígidas y frías",
      "Presencia de un océano subterráneo de agua líquida"
    ]
  },
  {
    enunciado: "¿Qué define la isostasia en geodinámica?",
    correcta: "El equilibrio flotante de la litosfera sobre la astenosfera",
    incorrectas: [
      "El equilibrio térmico entre núcleo y manto",
      "El balance hídrico global de los océanos"
    ]
  },
  {
    enunciado: "¿Cuál es la densidad típica de la corteza continental comparada con la oceánica?",
    correcta: "Corteza continental ≈2,7 g/cm³; oceánica ≈3,0 g/cm³",
    incorrectas: [
      "Continental ≈3,3; oceánica ≈2,7 g/cm³",
      "Ambas ≈5,5 g/cm³"
    ]
  },
  {
    enunciado: "¿Qué información aportan los meteoritos condritos carbonáceos?",
    correcta: "Composición primitiva del Sistema Solar, útil para inferir la de la Tierra",
    incorrectas: [
      "Solo edades de las rocas volcánicas recientes",
      "Exclusivamente el campo magnético lunar"
    ]
  },
  {
    enunciado: "¿Cuál es la principal fuente del calor interno terrestre en la actualidad?",
    correcta: "Desintegración radiactiva y calor remanente de la formación",
    incorrectas: [
      "Fricción por mareas atmosféricas",
      "Calentamiento directo por radiación solar en el núcleo"
    ]
  },
  {
    enunciado: "¿Qué técnica geofísica utiliza variaciones del campo magnético para detectar estructuras enterradas?",
    correcta: "Prospección magnética",
    incorrectas: [
      "Gravimetría",
      "Geoquímica de superficie"
    ]
  },
  {
    enunciado: "¿Qué diferencia clave hay entre núcleo externo e interno?",
    correcta: "El núcleo externo es líquido; el interno es sólido",
    incorrectas: [
      "El núcleo externo es sólido; el interno es gaseoso",
      "Ambos son sólidos pero con distinta densidad"
    ]
  },
  {
    enunciado: "¿Qué rol juega el núcleo externo en el campo magnético terrestre?",
    correcta: "Su convección metálica genera el geodinamo",
    incorrectas: [
      "Bloquea totalmente las ondas sísmicas P",
      "Enfría el manto hasta detener la tectónica"
    ]
  },
  {
    enunciado: "¿Qué capa incluye a la corteza y la parte superior del manto con comportamiento rígido?",
    correcta: "Litosfera",
    incorrectas: [
      "Astenosfera",
      "Mesosfera"
    ]
  },
  {
    enunciado: "¿Qué método estima el flujo de calor que emerge desde el interior terrestre?",
    correcta: "Medidas geotérmicas en sondeos y gradiente térmico",
    incorrectas: [
      "Análisis petrográfico de arenas de playa",
      "Fotogrametría aérea"
    ]
  },
  {
    enunciado: "¿Qué es una ofiolita en términos de estructura litosférica?",
    correcta: "Un fragmento obducido de litosfera oceánica expuesto en continentes",
    incorrectas: [
      "Un domo granítico en corteza continental",
      "Un paquete de rocas metamórficas de alto grado exclusivamente continental"
    ]
  },
  {
    enunciado: "¿Qué método permite inferir la conductividad de grandes profundidades mediante campos naturales?",
    correcta: "Magnetotelúrica",
    incorrectas: [
      "Reflexión sísmica de alta resolución",
      "Gravimetría satelital"
    ]
  },
  {
    enunciado: "¿Cuál es el principal indicador sísmico del límite manto–núcleo?",
    correcta: "Fuerte disminución de velocidad P y desaparición de S (zona de sombras)",
    incorrectas: [
      "Aumento brusco de S y desaparición de P",
      "Inversión térmica superficial"
    ]
  },
  {
    enunciado: "¿Qué variable física controlan las anomalías gravimétricas negativas amplias bajo cuencas sedimentarias?",
    correcta: "Un déficit de densidad respecto al terreno circundante",
    incorrectas: [
      "Un exceso de magnetización remanente",
      "Una elevada resistividad eléctrica"
    ]
  },
  {
    enunciado: "¿Qué define mejor la astenosfera?",
    correcta: "Capa del manto superior relativamente caliente y dúctil, bajo la litosfera",
    incorrectas: [
      "Capa más externa y rígida que incluye la corteza",
      "Parte sólida del núcleo con convección metálica"
    ]
  },
  {
    enunciado: "¿Qué técnica se usa para mapear variaciones laterales de velocidad sísmica en 3D a escala global?",
    correcta: "Tomografía sísmica",
    incorrectas: [
      "Difracción de electrones",
      "Espectroscopía infrarroja"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre temperatura y velocidad sísmica en el manto?",
    correcta: "A mayor temperatura, menor velocidad sísmica (a igualdad de composición y presión)",
    incorrectas: [
      "La temperatura no afecta a la velocidad sísmica",
      "A mayor temperatura, mayor velocidad por expansión térmica"
    ]
  },
  {
    enunciado: "¿Qué aplicación práctica directa tiene integrar métodos sísmicos, gravimétricos y eléctricos?",
    correcta: "Mejorar la evaluación de riesgos y la exploración de recursos",
    incorrectas: [
      "Sustituir la cartografía geológica de superficie",
      "Eliminar la necesidad de redes de vigilancia volcánica"
    ]
  }
];
