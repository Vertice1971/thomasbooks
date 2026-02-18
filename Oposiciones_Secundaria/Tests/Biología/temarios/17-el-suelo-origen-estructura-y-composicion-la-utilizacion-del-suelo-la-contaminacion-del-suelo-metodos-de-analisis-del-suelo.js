// temarios/17-el-suelo-origen-estructura-y-composicion-la-utilizacion-del-suelo-la-contaminacion-del-suelo-metodos-de-analisis-del-suelo.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define mejor al suelo desde una perspectiva funcional?",
    correcta: "Un cuerpo natural de tres fases con organización vertical, biota propia y procesos activos",
    incorrectas: [
      "Una mezcla inerte de arena y arcilla sin actividad biológica",
      "Una capa de rocas consolidada sin porosidad"
    ]
  },
  {
    enunciado: "Según el modelo factorial de Jenny, ¿qué conjunto resume los factores formadores del suelo?",
    correcta: "Clima, organismos, relieve, material parental y tiempo",
    incorrectas: [
      "Latitud, longitud, presión y viento",
      "Densidad, viscosidad, salinidad y turbidez"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un proceso edafogenético de pérdida–ganancia dentro del perfil?",
    correcta: "Eluviación–iluviación",
    incorrectas: [
      "Solidificación–fusión",
      "Evaporación–condensación"
    ]
  },
  {
    enunciado: "¿Qué horizonte suele estar enriquecido en arcilla por iluviación?",
    correcta: "Bt",
    incorrectas: [
      "E (álbico)",
      "R (roca)"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un horizonte E?",
    correcta: "Empobrecido en arcillas y materia orgánica por eluviación",
    incorrectas: [
      "Acumulación de carbonatos secundarios",
      "Alta saturación en Fe y Al amorfos típica de Andosoles"
    ]
  },
  {
    enunciado: "¿Cuál es la tríada de fracciones texturales en suelos minerales?",
    correcta: "Arena, limo y arcilla",
    incorrectas: [
      "Sílice, feldespato y mica",
      "Grava, guijarro y bloque"
    ]
  },
  {
    enunciado: "¿Qué propiedad depende fuertemente del tipo de arcilla?",
    correcta: "La capacidad de intercambio catiónico (CIC)",
    incorrectas: [
      "La gravedad específica del agua",
      "La presión atmosférica local"
    ]
  },
  {
    enunciado: "¿Qué relación de agua define el intervalo útil para las plantas?",
    correcta: "Entre la capacidad de campo y el punto de marchitez permanente",
    incorrectas: [
      "Entre saturación total y saturación parcial",
      "Entre el nivel freático y el índice de plasticidad"
    ]
  },
  {
    enunciado: "¿Qué estructura de agregados favorece la aireación y el enraizamiento en el horizonte A?",
    correcta: "Estructura granular/subangular fina estable",
    incorrectas: [
      "Estructura laminar compacta",
      "Estructura prismática muy densa"
    ]
  },
  {
    enunciado: "¿Qué coloración indica condiciones reductoras estacionales en el suelo?",
    correcta: "Moteados grises/verdosos con manchas férricas",
    incorrectas: [
      "Rojizos intensos uniformes por hematites",
      "Negros homogéneos por alto carbono pirogénico"
    ]
  },
  {
    enunciado: "En WRB, ¿qué Grupo de Suelos de Referencia es típico de climas secos con acumulación de CaCO₃?",
    correcta: "Calcisols",
    incorrectas: [
      "Podzols",
      "Histosols"
    ]
  },
  {
    enunciado: "En USDA, ¿qué orden se asocia a suelos muy jóvenes con desarrollo mínimo de horizontes?",
    correcta: "Entisols",
    incorrectas: [
      "Alfisols",
      "Mollisols"
    ]
  },
  {
    enunciado: "¿Qué práctica forma parte de la agricultura de conservación?",
    correcta: "Siembra directa con cubiertas vegetales y curvas de nivel",
    incorrectas: [
      "Laboreo intensivo a favor de pendiente",
      "Suelo desnudo permanente"
    ]
  },
  {
    enunciado: "¿Qué amenaza de degradación se incrementa con maquinaria pesada en condiciones húmedas?",
    correcta: "Compactación del suelo",
    incorrectas: [
      "Podzolización",
      "Lateritización generalizada"
    ]
  },
  {
    enunciado: "¿Qué indicador agronómico expresa la salinidad del extracto del suelo?",
    correcta: "La conductividad eléctrica (CE)",
    incorrectas: [
      "El índice Munsell",
      "La relación C/N exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál es una fuente agrícola frecuente de contaminación del suelo?",
    correcta: "Aplicación excesiva de nitratos y pesticidas",
    incorrectas: [
      "Cobertura con restos vegetales",
      "Aporte de compost estabilizado en dosis adecuadas"
    ]
  },
  {
    enunciado: "¿Qué contaminante emergente preocupa por su persistencia y movilidad?",
    correcta: "PFAS (sustancias per- y polifluoroalquiladas)",
    incorrectas: [
      "Dióxido de carbono atmosférico",
      "Silicio cristalino de la arena"
    ]
  },
  {
    enunciado: "¿Qué variable controla fuertemente la biodisponibilidad de metales pesados?",
    correcta: "El pH y la materia orgánica del suelo",
    incorrectas: [
      "La latitud geográfica únicamente",
      "El color del horizonte superficial"
    ]
  },
  {
    enunciado: "Para muestreos rutinarios, ¿qué estrategia asegura representatividad en una parcela agrícola?",
    correcta: "Muestra compuesta a partir de múltiples submuestras distribuidas",
    incorrectas: [
      "Una única calicata en el borde del campo",
      "Tomar solo finos superficiales tras una lluvia intensa"
    ]
  },
  {
    enunciado: "¿Qué método clásico determina el carbono orgánico oxidable?",
    correcta: "Walkley–Black",
    incorrectas: [
      "Kjeldahl (N total)",
      "Volumetría de carbonatos con HCl"
    ]
  },
  {
    enunciado: "¿Qué extractante de fósforo disponible se aplica habitualmente en suelos calizos?",
    correcta: "Olsen (NaHCO₃ 0,5 M)",
    incorrectas: [
      "Bray 1 (HCl + NH₄F) en cualquier suelo",
      "Mehlich-3 exclusivamente en Histosoles"
    ]
  },
  {
    enunciado: "¿Qué técnica instrumental es adecuada para metales traza en suelos?",
    correcta: "ICP–MS o ICP–OES tras digestión ácida",
    incorrectas: [
      "Refractometría de Brix",
      "Medición de clorofila con SPAD"
    ]
  },
  {
    enunciado: "¿Qué indicador biológico refleja actividad microbiana global del suelo?",
    correcta: "Respiración basal o potencial del suelo",
    incorrectas: [
      "Conductividad hidráulica saturada",
      "Índice de plasticidad de Atterberg"
    ]
  },
  {
    enunciado: "¿Qué bioensayo se usa comúnmente en ecotoxicología de suelos?",
    correcta: "Ensayo con lombriz Eisenia fetida",
    incorrectas: [
      "Test de Daphnia magna exclusivamente acuático",
      "Recuento de fitoplancton marino"
    ]
  },
  {
    enunciado: "¿Qué técnica de remediación inmoviliza contaminantes en la matriz sólida?",
    correcta: "Solidificación/estabilización",
    incorrectas: [
      "Volatilización térmica a cielo abierto",
      "Erosión controlada para exportar contaminantes"
    ]
  },
  {
    enunciado: "¿Qué estrategia de biorremediación potencia la degradación autóctona de contaminantes orgánicos?",
    correcta: "Bioestimulación (aporte de nutrientes/aceptores)",
    incorrectas: [
      "Encapsulado con cemento",
      "Aporte masivo de cloruros para precipitación"
    ]
  },
  {
    enunciado: "¿Qué enmienda se usa para mejorar la retención de agua y secuestrar contaminantes orgánicos?",
    correcta: "Biochar aplicado en dosis adecuadas",
    incorrectas: [
      "Arena limpia para aumentar la macroporosidad exclusivamente",
      "Sales sódicas para flocular arcillas"
    ]
  },
  {
    enunciado: "¿Qué práctica reduce la erosión hídrica en laderas cultivadas?",
    correcta: "Cubiertas vegetales y terrazas en curvas de nivel",
    incorrectas: [
      "Quema de rastrojos y suelo desnudo",
      "Surcos a favor de la máxima pendiente"
    ]
  },
  {
    enunciado: "¿Qué propiedad física se estima con cilindros de volumen conocido y secado en estufa?",
    correcta: "Densidad aparente",
    incorrectas: [
      "CIC",
      "SAR (relación de adsorción de sodio)"
    ]
  },
  {
    enunciado: "¿Qué parámetro indica riesgo de sodificación en suelos de regadío?",
    correcta: "SAR (Sodium Adsorption Ratio) y ESP",
    incorrectas: [
      "Índice NDVI del cultivo",
      "Color Munsell a 50 cm de profundidad"
    ]
  },
  {
    enunciado: "¿Qué herramienta permite cartografiar rápidamente metales en campo sin digestión?",
    correcta: "XRF portátil (fluorescencia de rayos X)",
    incorrectas: [
      "pH-metro de bolsillo",
      "Parcela de infiltración de doble anillo"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la salinización secundaria?",
    correcta: "Acumulación de sales por riegos inadecuados y drenaje insuficiente",
    incorrectas: [
      "Lavado continuo de sales por exceso de drenaje",
      "Aporte de yeso que sustituye sodio por calcio"
    ]
  },
  {
    enunciado: "¿Qué relación elemental es indicativa de estado de madurez del humus?",
    correcta: "Relación C/N",
    incorrectas: [
      "Relación Si/Al en arenas",
      "Relación Ca/Mg del extracto 1:5"
    ]
  },
  {
    enunciado: "¿Qué horizonte está compuesto principalmente por material parental poco alterado?",
    correcta: "C",
    incorrectas: [
      "A",
      "Bs"
    ]
  },
  {
    enunciado: "¿Qué práctica urbana degrada más rápidamente el recurso suelo?",
    correcta: "Sellado por impermeabilización (pavimentos y edificaciones)",
    incorrectas: [
      "Jardinería con sustratos orgánicos",
      "Parques periurbanos con praderas"
    ]
  },
  {
    enunciado: "¿Qué prueba sencilla detecta carbonatos activos en calizas y margas?",
    correcta: "EferveScencia con HCl diluido",
    incorrectas: [
      "Ensayo Kjeldahl",
      "Titular cloruros con nitrato de plata"
    ]
  },
  {
    enunciado: "¿Qué método de laboratorio mide la estabilidad de agregados frente a la desintegración por agua?",
    correcta: "Tamizado en húmedo (wet sieving)",
    incorrectas: [
      "Penetrómetro de cono estático",
      "Medida de CE con conductímetro"
    ]
  },
  {
    enunciado: "¿Qué componente del suelo impulsa el reciclaje de nutrientes y la estructura grumosa?",
    correcta: "La microbiota edáfica y la materia orgánica humificada",
    incorrectas: [
      "La fracción de grava exclusivamente",
      "El agua capilar sin solutos"
    ]
  },
  {
    enunciado: "¿Qué enfoque de evaluación de riesgo considera la fracción realmente disponible para organismos?",
    correcta: "Biodisponibilidad, no solo concentración total",
    incorrectas: [
      "Masa total por hectárea sin especiación",
      "Color del suelo como proxy universal"
    ]
  },
  {
    enunciado: "¿Qué orden USDA es típico de climas áridos con horizontes cálcicos o gípsicos?",
    correcta: "Aridisols",
    incorrectas: [
      "Spodosols",
      "Ultisols"
    ]
  }
];
