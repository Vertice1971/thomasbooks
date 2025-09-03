var PREGUNTAS = [
  {
    enunciado: "¿Qué formación geológica precámbrica, rica en minerales como níquel y uranio, ocupa gran parte del norte de Canadá?",
    correcta: "El Escudo Canadiense",
    incorrectas: ["La Gran Llanura Central", "Los Montes Apalaches"]
  },
  {
    enunciado: "¿Qué sistema montañoso vertebra el oeste de Canadá y Estados Unidos?",
    correcta: "Las Montañas Rocosas",
    incorrectas: ["Los Montes Apalaches", "La Sierra Madre Oriental"]
  },
  {
    enunciado: "¿Qué río conecta los Grandes Lagos con el océano Atlántico y constituye un eje clave de navegación?",
    correcta: "El río San Lorenzo",
    incorrectas: ["El río Mackenzie", "El río Columbia"]
  },
  {
    enunciado: "¿Cuál de los siguientes forma parte del sistema de los Grandes Lagos norteamericanos?",
    correcta: "El lago Superior",
    incorrectas: ["El lago Titicaca", "El lago Victoria"]
  },
  {
    enunciado: "¿Qué tipo de clima predomina en el norte de Canadá?",
    correcta: "Polar y subártico",
    incorrectas: ["Mediterráneo", "Ecuatorial"]
  },
  {
    enunciado: "¿Qué factor explica la fuerte amplitud térmica y la aridez relativa del interior norteamericano?",
    correcta: "La continentalidad",
    incorrectas: ["La subsidencia del Sahel", "La influencia monzónica del Índico"]
  },
  {
    enunciado: "¿En qué área de Norteamérica aparece con claridad el clima mediterráneo?",
    correcta: "En la costa de California",
    incorrectas: ["En Terranova", "En Yukón"]
  },
  {
    enunciado: "¿Dónde se registra clima tropical dentro del ámbito norteamericano?",
    correcta: "En Florida y Hawái",
    incorrectas: ["En Alaska y Nunavut", "En Nueva Inglaterra"]
  },
  {
    enunciado: "¿Qué dominio climático caracteriza al suroeste de Estados Unidos (Arizona, Nevada, Nuevo México)?",
    correcta: "Árido",
    incorrectas: ["Húmedo ecuatorial", "Oceánico"]
  },
  {
    enunciado: "¿Qué riesgo natural impacta sobre todo en las costas del Golfo de México y el Atlántico?",
    correcta: "Los huracanes",
    incorrectas: ["Los monzones", "Los tsunamis tectónicos frecuentes"]
  },
  {
    enunciado: "¿Cómo se denomina la franja del centro de Estados Unidos con alta frecuencia de tornados severos?",
    correcta: "Tornado Alley",
    incorrectas: ["Dust Bowl", "Great Basin"]
  },
  {
    enunciado: "¿Qué riesgo ambiental recurrente afecta a los veranos del oeste norteamericano?",
    correcta: "Los incendios forestales",
    incorrectas: ["Las erupciones freáticas de gran magnitud", "Las lluvias monzónicas continuas"]
  },
  {
    enunciado: "¿Qué gran cuenca fluvial drena el interior de Estados Unidos desde el norte al Golfo de México?",
    correcta: "La cuenca Mississippi–Missouri",
    incorrectas: ["La cuenca del San Lorenzo", "La cuenca del Mackenzie"]
  },
  {
    enunciado: "¿Qué unidad morfoestructural, de extensas superficies sedimentarias, sustenta gran agricultura cerealista?",
    correcta: "Las Grandes Llanuras",
    incorrectas: ["La Cordillera Costera", "El Escudo Canadiense"]
  },
  {
    enunciado: "¿Dónde se sitúan los Apalaches dentro del relieve norteamericano?",
    correcta: "En el este de Estados Unidos, como cordillera antigua erosionada",
    incorrectas: ["En el noroeste canadiense, junto al Ártico", "En la península de Florida"]
  },
  {
    enunciado: "¿Qué sistema acompaña a las Rocosas en el margen pacífico norteamericano?",
    correcta: "La Cordillera Costera",
    incorrectas: ["La Sierra Madre Occidental", "La Meseta Brasileña"]
  },
  {
    enunciado: "¿Qué conjunto lacustre conforma la mayor reserva de agua dulce superficial interconectada del planeta?",
    correcta: "Los Grandes Lagos",
    incorrectas: ["Los Grandes Lagos Africanos", "Los lagos tectónicos andinos"]
  },
  {
    enunciado: "¿Cuál es un aprovechamiento clave de los recursos hídricos norteamericanos?",
    correcta: "La generación hidroeléctrica y la navegación comercial",
    incorrectas: ["La desalinización masiva", "La energía mareomotriz de gran escala"]
  },
  {
    enunciado: "¿Qué fuente energética renovable es estratégica en Canadá, especialmente en Quebec y Columbia Británica?",
    correcta: "La hidroeléctrica",
    incorrectas: ["La geotermia oceánica", "La biomasa de palma"]
  },
  {
    enunciado: "¿En qué región se localizan las arenas bituminosas con gran potencial petrolífero?",
    correcta: "En Alberta",
    incorrectas: ["En Ontario", "En Nueva Escocia"]
  },
  {
    enunciado: "¿Qué espacios concentran hidrocarburos en Estados Unidos además de formaciones terrestres?",
    correcta: "Las plataformas del Golfo de México y áreas de Texas",
    incorrectas: ["La dorsal mesoatlántica", "El litoral del mar Báltico"]
  },
  {
    enunciado: "¿Qué gran recurso natural distingue a Canadá junto a minerales y petróleo?",
    correcta: "Las extensas reservas forestales boreales",
    incorrectas: ["Las selvas ecuatoriales de monzón", "Los desiertos salinos endorreicos"]
  },
  {
    enunciado: "Además del Atlántico, ¿en qué litoral se sitúan caladeros pesqueros canadienses relevantes?",
    correcta: "En el Pacífico",
    incorrectas: ["En el Índico", "En el Mediterráneo"]
  },
  {
    enunciado: "¿Dónde se concentra mayoritariamente la población canadiense?",
    correcta: "En el sur del país, próximo a la frontera con Estados Unidos",
    incorrectas: ["En el archipiélago ártico", "En el escarpe de las Rocosas"]
  },
  {
    enunciado: "¿En qué espacios se agrupan las principales áreas metropolitanas de Estados Unidos?",
    correcta: "En las costas del Atlántico y del Pacífico",
    incorrectas: ["En el círculo polar ártico", "En la meseta del Escudo Canadiense"]
  },
  {
    enunciado: "¿Cuál de las siguientes es una gran área metropolitana de Estados Unidos?",
    correcta: "Houston",
    incorrectas: ["Edmonton", "Quebec"]
  },
  {
    enunciado: "¿Cómo se denomina el gran corredor urbano del noreste estadounidense entre Boston y Washington, D. C.?",
    correcta: "BosWash",
    incorrectas: ["Blue Banana", "Randstad"]
  },
  {
    enunciado: "¿Qué enfoque describe la política canadiense hacia la diversidad cultural?",
    correcta: "El multiculturalismo",
    incorrectas: ["La asimilación estricta", "El segregacionismo legal"]
  },
  {
    enunciado: "¿Qué noción sintetiza la integración cultural histórica en Estados Unidos?",
    correcta: "El melting pot",
    incorrectas: ["El comunitarismo cerrado", "La autarquía cultural"]
  },
  {
    enunciado: "¿Qué flujo interno describe el traslado de población y empresas del noreste industrial hacia estados del sur y oeste?",
    correcta: "Del Rust Belt al Sun Belt",
    incorrectas: ["Del Sun Belt al Rust Belt", "Del Midwest a Nueva Inglaterra"]
  },
  {
    enunciado: "¿Qué rasgo territorial comparten Canadá y Estados Unidos?",
    correcta: "La organización federal del Estado",
    incorrectas: ["La división en cantones", "La estructura confederal débil"]
  },
  {
    enunciado: "¿Cómo se denominan las unidades administrativas de primer nivel en Canadá?",
    correcta: "Provincias (y territorios)",
    incorrectas: ["Departamentos", "Comarcas"]
  },
  {
    enunciado: "¿Qué cereal es emblemático de las praderas canadienses?",
    correcta: "El trigo",
    incorrectas: ["El arroz", "El café"]
  },
  {
    enunciado: "¿Qué sector industrial fue emblemático del antiguo cinturón industrial estadounidense?",
    correcta: "El automovilístico",
    incorrectas: ["El naval de altura tropical", "El textil de seda natural"]
  },
  {
    enunciado: "¿Qué energía renovable se expande en las Grandes Llanuras estadounidenses?",
    correcta: "La eólica",
    incorrectas: ["La mareomotriz", "La geotermia volcánica insular"]
  },
  {
    enunciado: "¿Qué subsector de servicios sitúa a Nueva York como nodo global?",
    correcta: "Los servicios financieros",
    incorrectas: ["La acuicultura industrial", "El turismo de nieve ártica"]
  },
  {
    enunciado: "¿Qué acuerdo sustituyó al NAFTA para regular el comercio entre Canadá, Estados Unidos y México?",
    correcta: "El USMCA/T-MEC",
    incorrectas: ["El TTIP", "El Mercosur"]
  },
  {
    enunciado: "¿Qué área tecnológica concentra capital riesgo y startups en California?",
    correcta: "Silicon Valley",
    incorrectas: ["Silicon Fen", "Medicon Valley"]
  }
];
