// temarios/11-la-atmosfera-estructura-composicion-y-dinamica-la-contaminacion-atmosferica-metodos-de-determinacion-y-de-correccion.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es una función esencial de la atmósfera para la vida?",
    correcta: "Proteger de la radiación UV y regular el clima",
    incorrectas: [
      "Aumentar la radiación ionizante en superficie",
      "Enfriar la Tierra hasta temperaturas de congelación global"
    ]
  },
  {
    enunciado: "¿Cuál es el orden correcto de las capas térmicas desde la superficie hacia arriba?",
    correcta: "Troposfera, estratosfera, mesosfera, termosfera, exosfera",
    incorrectas: [
      "Estratosfera, troposfera, mesosfera, exosfera, termosfera",
      "Mesosfera, troposfera, estratosfera, termosfera, exosfera"
    ]
  },
  {
    enunciado: "¿Qué es la tropopausa?",
    correcta: "La discontinuidad térmica que separa troposfera y estratosfera",
    incorrectas: [
      "La zona más densa de la ionosfera",
      "La capa de mezcla urbana en las primeras decenas de metros"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la Capa Límite Planetaria (PBL)?",
    correcta: "Mezcla turbulenta influida por la superficie y ciclos diurnos",
    incorrectas: [
      "Temperaturas crecientes por encima de 100 km",
      "Ausencia total de intercambio vertical"
    ]
  },
  {
    enunciado: "¿Qué diferencia a la homosfera de la heterosfera?",
    correcta: "En la homosfera la mezcla de gases es casi uniforme; en la heterosfera se separan por masa",
    incorrectas: [
      "La homosfera contiene 100% de vapor de agua",
      "La heterosfera está por debajo de los 5 km de altura"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la ionosfera?",
    correcta: "Alta ionización que afecta a la propagación de ondas de radio",
    incorrectas: [
      "Presencia de altas concentraciones de sales marinas líquidas",
      "Ausencia de partículas cargadas"
    ]
  },
  {
    enunciado: "¿Cuál es la composición media del aire seco a nivel del mar?",
    correcta: "≈78% N2, 21% O2 y 0,93% Ar más trazas",
    incorrectas: [
      "≈50% O2 y 50% N2",
      "≈30% CO2 y 70% N2"
    ]
  },
  {
    enunciado: "¿Qué componente atmosférico varía mucho en espacio y tiempo y controla gran parte del clima?",
    correcta: "El vapor de agua",
    incorrectas: [
      "El argón",
      "El nitrógeno molecular"
    ]
  },
  {
    enunciado: "¿Qué se entiende por PM2.5?",
    correcta: "Partículas con diámetro aerodinámico menor o igual a 2,5 µm",
    incorrectas: [
      "Partículas mayores de 25 µm",
      "Solo partículas de origen marino"
    ]
  },
  {
    enunciado: "¿Dónde es beneficioso el ozono y dónde perjudicial?",
    correcta: "Beneficioso en la estratosfera; perjudicial en la troposfera",
    incorrectas: [
      "Perjudicial en la estratosfera y neutro en la troposfera",
      "Siempre beneficioso en cualquier capa"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un gas de efecto invernadero?",
    correcta: "Dióxido de carbono (CO2)",
    incorrectas: [
      "Argón (Ar)",
      "Nitrógeno molecular (N2)"
    ]
  },
  {
    enunciado: "¿Cómo varía la presión atmosférica con la altura?",
    correcta: "Disminuye de forma aproximadamente exponencial",
    incorrectas: [
      "Aumenta linealmente",
      "Permanece constante hasta 10 km"
    ]
  },
  {
    enunciado: "¿Qué celdas de circulación integran la circulación general?",
    correcta: "Hadley, Ferrel y polar",
    incorrectas: [
      "Solo Hadley y polar",
      "Ferrel y Walker exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué son los chorros (jet streams)?",
    correcta: "Vientos intensos de gran altitud asociados a fuertes gradientes de temperatura",
    incorrectas: [
      "Corrientes marinas superficiales ecuatoriales",
      "Brisas locales de valle a sotavento"
    ]
  },
  {
    enunciado: "¿Qué efecto produce la fuerza de Coriolis en la atmósfera?",
    correcta: "Desvía los vientos a la derecha en el Hemisferio Norte y a la izquierda en el Sur",
    incorrectas: [
      "Aumenta la temperatura del aire al ascender",
      "Reduce la humedad relativa al 0%"
    ]
  },
  {
    enunciado: "¿Qué describen las ondas de Rossby?",
    correcta: "Grandes meandros de la corriente en chorro que modulan el tiempo a escala sinótica",
    incorrectas: [
      "Ondas de choque producidas por rayos",
      "Ondas de gravedad oceánica en costas"
    ]
  },
  {
    enunciado: "¿Qué factor principal impulsa los monzones?",
    correcta: "El contraste estacional de temperatura entre continente y océano",
    incorrectas: [
      "La actividad volcánica explosiva",
      "La variación diaria del ozono estratosférico"
    ]
  },
  {
    enunciado: "¿Cómo se genera la brisa mar-tierra típica?",
    correcta: "Por diferencias diurnas de calentamiento entre superficie continental y marina",
    incorrectas: [
      "Por cizalla de vientos en la tropopausa",
      "Por subsidencia estratosférica permanente"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene una inversión térmica en un valle urbano?",
    correcta: "Favorece la acumulación de contaminantes al inhibir la mezcla vertical",
    incorrectas: [
      "Disipa el smog al intensificar la convección",
      "Aumenta la precipitación convectiva"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al smog fotoquímico?",
    correcta: "Altas concentraciones de ozono troposférico formado a partir de NOx y COV con radiación solar",
    incorrectas: [
      "Niebla densa por SO2 en ausencia de luz",
      "Únicamente polvo mineral sin reacción química"
    ]
  },
  {
    enunciado: "¿Qué precursores favorecen la lluvia ácida?",
    correcta: "SO2 y NOx que forman ácidos sulfúrico y nítrico",
    incorrectas: [
      "CO2 y CH4 exclusivamente",
      "N2 y Ar por oxidación directa"
    ]
  },
  {
    enunciado: "¿Qué causó el agotamiento de ozono estratosférico y qué acuerdo lo aborda?",
    correcta: "Los CFC y halones; Protocolo de Montreal",
    incorrectas: [
      "El CO2; Protocolo de Kioto",
      "El N2; Convención de Ramsar"
    ]
  },
  {
    enunciado: "¿Qué técnica de referencia mide NOx en redes de calidad del aire?",
    correcta: "Quimioluminiscencia",
    incorrectas: [
      "Difracción de rayos X",
      "Colorimetría de azules de metileno"
    ]
  },
  {
    enunciado: "¿Qué técnica se usa comúnmente para SO2?",
    correcta: "Fluorescencia UV",
    incorrectas: [
      "Espectrometría atómica por absorción de grafito",
      "Refractometría de Abbe"
    ]
  },
  {
    enunciado: "¿Qué método se emplea para medir CO en continuo?",
    correcta: "Infrarrojo no dispersivo (NDIR)",
    incorrectas: [
      "Fotometría UV a 254 nm",
      "Fluorescencia de rayos X"
    ]
  },
  {
    enunciado: "¿Qué técnica estándar mide ozono troposférico en estaciones?",
    correcta: "Fotometría UV",
    incorrectas: [
      "Cromatografía líquida HPLC",
      "Resonancia magnética nuclear"
    ]
  },
  {
    enunciado: "¿Cuál es el método gravimétrico para partículas en normativa europea?",
    correcta: "Filtrado y pesado de PM10/PM2.5 según EN 12341",
    incorrectas: [
      "Captura en bolsas y análisis por NMR",
      "Evaporación de filtros a 200 °C"
    ]
  },
  {
    enunciado: "¿Qué instrumentos automáticos se usan para PM en continuo?",
    correcta: "TEOM o BAM",
    incorrectas: [
      "ICP-MS en línea",
      "Cromatógrafo iónico portátil"
    ]
  },
  {
    enunciado: "¿Cómo se muestrean y analizan COV en aire ambiente?",
    correcta: "Captadores en tubos adsorbentes o canisters y análisis por GC-MS/FID",
    incorrectas: [
      "Extracción Soxhlet de suelo",
      "Espectroscopía Mössbauer"
    ]
  },
  {
    enunciado: "¿Para qué se usa LIDAR en atmósfera?",
    correcta: "Para perfilar aerosoles y gases a distintas alturas",
    incorrectas: [
      "Para medir salinidad del agua subterránea",
      "Para fechar rocas por K-Ar"
    ]
  },
  {
    enunciado: "¿Qué permite la técnica DOAS (espectroscopía de absorción diferencial)?",
    correcta: "Medir columnas de gases traza como NO2 u O3 a distancia",
    incorrectas: [
      "Contar partículas por impacto en filtro",
      "Determinar pH de lluvia por potenciometría"
    ]
  },
  {
    enunciado: "¿Qué mide el satélite Sentinel-5P/TROPOMI relevante para calidad del aire?",
    correcta: "Distribuciones de NO2, SO2, CO, O3 y AOD",
    incorrectas: [
      "Velocidad del viento subterráneo",
      "Concentraciones de CaCO3 en calizas"
    ]
  },
  {
    enunciado: "¿Qué organismos se usan como bioindicadores de contaminación atmosférica?",
    correcta: "Líquenes y musgos sensibles a deposición y gases",
    incorrectas: [
      "Moluscos marinos exclusivamente",
      "Peces abisales"
    ]
  },
  {
    enunciado: "¿Qué tipo de modelo se usa para dispersión a escala local de una fuente puntual?",
    correcta: "Modelos gaussianos como AERMOD",
    incorrectas: [
      "Modelos tectónicos de subducción",
      "Modelos hidrológicos de cuenca"
    ]
  },
  {
    enunciado: "¿Qué dispositivo reduce partículas en corrientes de gases industriales mediante campos eléctricos?",
    correcta: "Precipitador electrostático",
    incorrectas: [
      "Intercambiador de calor de placas",
      "Difusor de chorro libre"
    ]
  },
  {
    enunciado: "¿Qué sistema de filtración para partículas finas es muy eficaz en chimeneas?",
    correcta: "Filtros de mangas (baghouse)",
    incorrectas: [
      "Tamices vibratorios de gran luz",
      "Ciclones de baja eficiencia para UFP"
    ]
  },
  {
    enunciado: "¿Qué tecnología se emplea para reducción catalítica de NOx?",
    correcta: "SCR con inyección de amoníaco o urea",
    incorrectas: [
      "Oxidación por permanganato en seco",
      "Desorción térmica de filtros"
    ]
  },
  {
    enunciado: "¿Qué equipo húmedo elimina SO2 en gases de combustión?",
    correcta: "Scrubber o depurador por absorción",
    incorrectas: [
      "Promotor de cavitación",
      "Torre de enfriamiento adiabático exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué medida urbana ayuda a reducir emisiones de tráfico?",
    correcta: "Zonas de Bajas Emisiones y electrificación del transporte",
    incorrectas: [
      "Aumentar límites de velocidad en centros urbanos",
      "Favorecer el diésel sin filtros de partículas"
    ]
  },
  {
    enunciado: "¿Qué directiva europea establece el marco de calidad del aire ambiente?",
    correcta: "Directiva 2008/50/CE",
    incorrectas: [
      "Directiva 92/43/CEE de Hábitats",
      "Directiva 2010/31/UE de eficiencia energética en edificios"
    ]
  }
];
