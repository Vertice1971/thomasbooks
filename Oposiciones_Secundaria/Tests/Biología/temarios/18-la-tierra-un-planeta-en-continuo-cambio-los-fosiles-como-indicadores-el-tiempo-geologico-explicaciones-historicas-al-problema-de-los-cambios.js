// temarios/18-la-tierra-un-planeta-en-continuo-cambio-los-fosiles-como-indicadores-el-tiempo-geologico-explicaciones-historicas-al-problema-de-los-cambios.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué principio estratigráfico establece que en una sucesión no perturbada, los estratos más antiguos yacen debajo de los más jóvenes?",
    correcta: "Principio de superposición",
    incorrectas: [
      "Principio de intersección",
      "Principio de continuidad lateral"
    ]
  },
  {
    enunciado: "¿Cuál es el motor profundo que explica la deriva continental en el marco moderno?",
    correcta: "La tectónica de placas impulsada por convección del manto y fuerzas en los bordes de placa",
    incorrectas: [
      "Los vientos dominantes sobre los océanos",
      "La rotación diferencial de la litosfera respecto al núcleo externo"
    ]
  },
  {
    enunciado: "¿Qué ciclo describe la apertura y cierre de océanos y la formación/destrucción de orógenos?",
    correcta: "El ciclo de Wilson",
    incorrectas: [
      "El ciclo hidrológico",
      "El ciclo de Milankovitch"
    ]
  },
  {
    enunciado: "¿Qué afirmación define mejor el uniformitarismo metodológico?",
    correcta: "Los procesos actuales ayudan a interpretar los registros del pasado",
    incorrectas: [
      "Las tasas de todos los procesos han sido siempre constantes",
      "El pasado geológico estuvo dominado exclusivamente por catástrofes"
    ]
  },
  {
    enunciado: "¿Cuál NO es un tipo de fósil?",
    correcta: "Geoda",
    incorrectas: [
      "Icnofósil",
      "Moldes y contramoldes"
    ]
  },
  {
    enunciado: "¿Qué condiciones favorecen la fosilización?",
    correcta: "Enterramiento rápido y ambientes con baja descomposición",
    incorrectas: [
      "Exposición prolongada a la intemperie",
      "Oxigenación intensa y bioturbación elevada"
    ]
  },
  {
    enunciado: "¿Qué criterio NO define a un buen fósil guía?",
    correcta: "Ser muy escaso y de distribución geográfica limitada",
    incorrectas: [
      "Tener rápida evolución",
      "Poseer amplia distribución"
    ]
  },
  {
    enunciado: "¿Qué registro isotópico se usa comúnmente como termómetro paleoclimático marino?",
    correcta: "Relación isotópica del oxígeno (δ18O) en carbonatos",
    incorrectas: [
      "Relación 87Rb/86Sr en silicatos para cualquier edad",
      "Concentración total de cloro en halitas sin isótopos"
    ]
  },
  {
    enunciado: "¿Qué técnica data minerales como el circón con gran precisión en rocas ígneas?",
    correcta: "U–Pb (uranio–plomo)",
    incorrectas: [
      "14C (radiocarbono) en escalas de millones de años",
      "Termoluminiscencia en cuarzos de granito paleozoico"
    ]
  },
  {
    enunciado: "¿Para qué rangos temporales es útil el 14C?",
    correcta: "Materiales orgánicos de hasta ≈50.000 años",
    incorrectas: [
      "Rocas ígneas de más de 100 millones de años",
      "Fósiles de trilobites del Cámbrico"
    ]
  },
  {
    enunciado: "¿Qué superficie erosiva separa paquetes estratigráficos de edades muy distintas?",
    correcta: "Discordancia",
    incorrectas: [
      "Laminación paralela",
      "Diaclasa"
    ]
  },
  {
    enunciado: "¿Qué suceso marca el límite K–Pg (~66 Ma)?",
    correcta: "Extinción masiva con pico de iridio y cráter de Chicxulub",
    incorrectas: [
      "Inicio de la glaciación cuaternaria",
      "Ruptura de Pangea en el Triásico tardío"
    ]
  },
  {
    enunciado: "¿Qué principio usa la intersección de estructuras para resolver relaciones de edad?",
    correcta: "Principio de relaciones de corte o intersección",
    incorrectas: [
      "Principio de sucesión faunística",
      "Principio de horizontabilidad original"
    ]
  },
  {
    enunciado: "¿Qué son las Lagerstätten?",
    correcta: "Yacimientos con preservación excepcional de organismos y partes blandas",
    incorrectas: [
      "Formaciones subvolcánicas ricas en pórfidos",
      "Cráteres de impacto con tectitas"
    ]
  },
  {
    enunciado: "¿Qué par de límites mayores de la Escala del Tiempo Geológico está correctamente emparejado?",
    correcta: "Ediacárico–Cámbrico ≈ 541 Ma",
    incorrectas: [
      "Jurásico–Cretácico ≈ 23 Ma",
      "Pérmico–Triásico ≈ 1,2 Ma"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes extinciones corresponde a las 'Big Five'?",
    correcta: "Pérmico–Triásico (~252 Ma)",
    incorrectas: [
      "Mioceno–Plioceno (~5,3 Ma)",
      "Pleistoceno–Holoceno (~11,7 ka)"
    ]
  },
  {
    enunciado: "¿Qué método NO proporciona edad absoluta directa?",
    correcta: "Superposición de estratos",
    incorrectas: [
      "U–Pb en circón",
      "K–Ar/Ar–Ar en feldespatos"
    ]
  },
  {
    enunciado: "¿Qué uso principal tiene la bioestratigrafía?",
    correcta: "Correlacionar y datar unidades mediante fósiles guía",
    incorrectas: [
      "Medir tasas de erosión cuaternaria",
      "Cuantificar paleotemperaturas de aguas profundas"
    ]
  },
  {
    enunciado: "¿Qué autor asocias al catastrofismo clásico?",
    correcta: "Georges Cuvier",
    incorrectas: [
      "James Hutton",
      "Alfred Wegener"
    ]
  },
  {
    enunciado: "¿Quién formuló la idea 'el presente es la clave del pasado' en geología?",
    correcta: "Charles Lyell (uniformismo actualista)",
    incorrectas: [
      "Charles Darwin en El origen de las especies",
      "Nicolas Steno en el siglo XVII"
    ]
  },
  {
    enunciado: "¿Cuál es una manifestación directa de la tectónica de placas?",
    correcta: "El alineamiento de sismos a lo largo de límites de placa",
    incorrectas: [
      "La inversión diaria del campo geomagnético",
      "La deriva continental impulsada por vientos alisios"
    ]
  },
  {
    enunciado: "¿Qué registro respalda la expansión del fondo oceánico en dorsales?",
    correcta: "Bandas de polaridad magnética simétricas respecto al eje",
    incorrectas: [
      "Isócronas de olas largas en playas",
      "Gradientes térmicos homogéneos sin anomalías"
    ]
  },
  {
    enunciado: "¿Qué indica un valor alto de δ13C positivo en carbonatos marinos a escala global?",
    correcta: "Aumento relativo del secuestro de carbono orgánico",
    incorrectas: [
      "Intrusión masiva de agua salina en acuíferos",
      "Un cambio de polaridad magnética"
    ]
  },
  {
    enunciado: "¿Qué son los icnofósiles?",
    correcta: "Evidencias de actividad biológica como huellas, galerías o fecas",
    incorrectas: [
      "Restos mineralizados del esqueleto",
      "Cristales autigénicos formados en diaclasas"
    ]
  },
  {
    enunciado: "¿Qué intervalo temporal abarca el Fanerozoico?",
    correcta: "Desde ~541 Ma hasta la actualidad",
    incorrectas: [
      "Desde ~4,54 Ga hasta 2,5 Ga",
      "Desde ~2,5 Ga hasta 541 Ma"
    ]
  },
  {
    enunciado: "¿Qué técnica permite fechar la última exposición a la luz de granos de cuarzo en sedimentos jóvenes?",
    correcta: "OSL (Luminiscencia estimulada ópticamente)",
    incorrectas: [
      "Sm–Nd en granates metamórficos",
      "U–Th/He en circones profundos"
    ]
  },
  {
    enunciado: "¿Qué evento está asociado a la capa rica en iridio en el límite K–Pg?",
    correcta: "Impacto extraterrestre y extinción masiva",
    incorrectas: [
      "Gran oxigenación del Paleoproterozoico",
      "Apertura del Atlántico Norte por rifting"
    ]
  },
  {
    enunciado: "¿Qué prueba apoya la 'Snowball Earth' del Neoproterozoico?",
    correcta: "Diamictitas de latitudes bajas y 'cap carbonates' superpuestos",
    incorrectas: [
      "Amplios arrecifes coralinos tropicales durante todo el Neoproterozoico",
      "Ausencia total de glaciaciones en el registro precámbrico"
    ]
  },
  {
    enunciado: "¿Qué combinación define mejor a un fósil guía eficaz?",
    correcta: "Amplia distribución, abundante y con rápida evolución",
    incorrectas: [
      "Endémico, muy raro y de lenta evolución",
      "Solo terrestre y de gran tamaño"
    ]
  },
  {
    enunciado: "¿Qué herramienta estratigráfica ordena secuencias mediante patrones orbitales?",
    correcta: "Cicloestratigrafía (Milankovitch)",
    incorrectas: [
      "Petrología experimental",
      "Sismología de refracción"
    ]
  },
  {
    enunciado: "¿Qué autor propuso originalmente la deriva continental apoyándose en fósiles y glaciaciones antiguas?",
    correcta: "Alfred Wegener",
    incorrectas: [
      "Harry Hess",
      "J. Tuzo Wilson"
    ]
  },
  {
    enunciado: "¿Qué par fósil–ambiente está mejor emparejado?",
    correcta: "Nannofósiles calcáreos – ambientes marinos pelágicos",
    incorrectas: [
      "Estromatolitos – cráteres de impacto recientes",
      "Ammonites – glaciares de valle actuales"
    ]
  },
  {
    enunciado: "¿Qué método relativo se basa en la orientación de minerales ferromagnéticos al formarse la roca?",
    correcta: "Paleomagnetismo para correlación y reconstrucción de paleolatitudes",
    incorrectas: [
      "Radiocarbono para edades mesozoicas",
      "Termocronología (AFT) para edades absolutas precisas del Cámbrico"
    ]
  },
  {
    enunciado: "¿Qué describe el neocatastrofismo en geociencias?",
    correcta: "Integración de procesos graduales con eventos episódicos de gran impacto",
    incorrectas: [
      "Negación del actualismo",
      "Sustitución de la tectónica de placas por impactos meteoríticos"
    ]
  },
  {
    enunciado: "¿Qué unidad NO pertenece a la jerarquía cronoestratigráfica estándar?",
    correcta: "Superperíodo",
    incorrectas: [
      "Eón",
      "Época"
    ]
  },
  {
    enunciado: "¿Qué es un 'golden spike' (GSSP) en estratigrafía?",
    correcta: "Un punto y sección de referencia global que define un límite cronoestratigráfico",
    incorrectas: [
      "Un marcador de radiación cósmica en magnetoestratigrafía",
      "Un algoritmo para ordenar secuencias en SIG"
    ]
  },
  {
    enunciado: "¿Qué relación es correcta entre geocronología y cronoestratigrafía?",
    correcta: "La geocronología mide tiempo absoluto; la cronoestratigrafía define cuerpos rocosos con posición temporal",
    incorrectas: [
      "Ambas son sinónimos exactos",
      "La cronoestratigrafía usa solo radiometría"
    ]
  },
  {
    enunciado: "¿Qué par método–material está correctamente asociado?",
    correcta: "K–Ar/Ar–Ar – feldespatos y micas en rocas ígneas/volcánicas",
    incorrectas: [
      "14C – basaltos mesozoicos",
      "U–Pb – materia orgánica reciente"
    ]
  },
  {
    enunciado: "¿Qué principio permite correlacionar capas de cenizas volcánicas ampliamente distribuidas?",
    correcta: "Equivalencia de horizontes isócronos mediante tefras (tefrocronología)",
    incorrectas: [
      "Isostasia local",
      "Gradación granulométrica de turbiditas"
    ]
  },
  {
    enunciado: "¿Qué concepto explica subidas y bajadas globales del nivel del mar en escalas geológicas?",
    correcta: "Eustasia por cambios en volumen oceánico y configuración de cuencas",
    incorrectas: [
      "Capilaridad del agua en sedimentos porosos",
      "Efecto Coriolis en mares polares"
    ]
  },
  {
    enunciado: "¿Qué herramienta multirregistro se usa para integrar bio-, magneto- y quimioestratigrafía?",
    correcta: "Correlación multiproxy a escala de cuenca y global",
    incorrectas: [
      "Solo mapas hipsométricos",
      "Exclusivamente análisis petrográfico en lámina delgada"
    ]
  }
];
