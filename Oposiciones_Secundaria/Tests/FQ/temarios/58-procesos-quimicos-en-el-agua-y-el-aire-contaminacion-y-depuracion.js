// temarios/58-procesos-quimicos-en-el-agua-y-el-aire-contaminacion-y-depuracion.js
var PREGUNTAS = [
  {
    enunciado: "En el sistema carbonato del agua natural, el par dominante que controla el pH cerca de 8 es:",
    correcta: "HCO3−/CO3^2−",
    incorrectas: ["H2CO3*/HCO3−", "CO2(g)/H2O"]
  },
  {
    enunciado: "La constante de Henry relaciona a 25 °C:",
    correcta: "La concentración disuelta con la presión parcial del gas sobre el líquido",
    incorrectas: ["La conductividad con la salinidad", "La DQO con la DBO5"]
  },
  {
    enunciado: "En aguas naturales, la alcalinidad mide principalmente la capacidad de neutralizar ácidos debida a:",
    correcta: "Carbonatos/bicarbonatos e hidróxidos",
    incorrectas: ["Cloruros y sulfatos", "Sólidos en suspensión"]
  },
  {
    enunciado: "Orden correcto de zonas redox al disminuir el potencial Eh en un sedimento:",
    correcta: "Oxigénica → nitrato → manganeso → hierro → sulfato → metanogénica",
    incorrectas: ["Oxigénica → sulfato → hierro → nitrato → metano", "Metanogénica → oxigénica → nitrato → sulfato"]
  },
  {
    enunciado: "La DBO5 es una medida de:",
    correcta: "Oxígeno consumido por biodegradación de materia orgánica en 5 días",
    incorrectas: ["Oxígeno químico consumido por dicromato", "Oxígeno disuelto instantáneo a 25 °C"]
  },
  {
    enunciado: "La DQO se determina típicamente mediante oxidación con:",
    correcta: "Dicromato en medio ácido",
    incorrectas: ["Permanganato en medio básico exclusivamente", "Peróxido en presencia de UV"]
  },
  {
    enunciado: "El proceso nitrificación convierte:",
    correcta: "NH4+ → NO2− → NO3− en condiciones aerobias",
    incorrectas: ["NO3− → N2O → N2 en aerobiosis", "NO3− → NH4+ en aerobiosis"]
  },
  {
    enunciado: "La desnitrificación biológica requiere típicamente:",
    correcta: "Condiciones anóxicas y fuente de carbono orgánico",
    incorrectas: ["Alta aireación y pH < 5", "Alta luz UV y catalizador TiO2"]
  },
  {
    enunciado: "La coagulación en potabilización busca:",
    correcta: "Desestabilizar coloides mediante sales de Al/Fe",
    incorrectas: ["Aumentar la alcalinidad con cal siempre", "Oxidar amonio a nitrato"]
  },
  {
    enunciado: "En coagulación–floculación, el control clave de proceso es:",
    correcta: "Ajuste de pH y dosis de coagulante",
    incorrectas: ["Presión de membrana RO", "Velocidad de sedimentación de arenas únicamente"]
  },
  {
    enunciado: "Un subproducto indeseado de la cloración es:",
    correcta: "Trihalometanos (THMs)",
    incorrectas: ["Sulfatos", "Nitratos"]
  },
  {
    enunciado: "La desinfección UV inactiva microorganismos por:",
    correcta: "Daño fotoquímico del ADN/ARN",
    incorrectas: ["Oxidación térmica directa", "Coagulación de proteínas por frío"]
  },
  {
    enunciado: "La ósmosis inversa se usa en potabilización para:",
    correcta: "Remover sales disueltas y microcontaminantes",
    incorrectas: ["Oxidar amonio", "Aumentar la alcalinidad"]
  },
  {
    enunciado: "Un problema típico de membranas RO es:",
    correcta: "Ensuciamiento (fouling) y incrustación",
    incorrectas: ["Explosión por combustión", "Formación de cloruros metálicos en el polímero"]
  },
  {
    enunciado: "En fangos activados, el parámetro SRT (edad del fango) afecta principalmente a:",
    correcta: "Equilibrio biomasa–carga y nitrificación",
    incorrectas: ["Coloración del efluente por cloruros", "Solubilidad del oxígeno en el aire"]
  },
  {
    enunciado: "Una ventaja del MBR (reactor biológico de membrana) frente a fangos activados convencionales es:",
    correcta: "Mayor separación sólido–líquido y menor huella",
    incorrectas: ["Menor calidad del efluente", "Imposibilidad de nitrificación"]
  },
  {
    enunciado: "La precipitación química de fósforo usa habitualmente:",
    correcta: "Sales férricas o alumínicas",
    incorrectas: ["Cloración libre residual", "Permanganato sódico en básico"]
  },
  {
    enunciado: "Un proceso AOP (oxidación avanzada) clásico es:",
    correcta: "O3/H2O2 o UV/H2O2",
    incorrectas: ["Coagulación con PAC", "Filtración lenta en arena únicamente"]
  },
  {
    enunciado: "El objetivo principal de la línea de fangos en una EDAR es:",
    correcta: "Espesar, estabilizar (digestión) y deshidratar lodos",
    incorrectas: ["Oxidar amonio a nitrato", "Desinfectar con UV el lodo crudo para vertido directo"]
  },
  {
    enunciado: "En troposfera, el radical más importante para la oxidación de COV es:",
    correcta: "•OH",
    incorrectas: ["•Cl en condiciones urbanas generales", "•SH"]
  },
  {
    enunciado: "La formación de ozono troposférico se ve favorecida por:",
    correcta: "Luz solar, NOx y COV",
    incorrectas: ["Alta lluvia ácida sin radiación", "Ausencia de NOx"]
  },
  {
    enunciado: "La lluvia ácida se debe principalmente a:",
    correcta: "Formación de H2SO4 y HNO3 a partir de SO2 y NOx",
    incorrectas: ["Disolución directa de CO puro", "Oxidación de CH4 a etanol"]
  },
  {
    enunciado: "Los CFC dañan el ozono estratosférico por generar:",
    correcta: "Radicales halógenos (ClOx) catalíticos",
    incorrectas: ["PM2.5 por coagulación", "SO3 por combustión completa"]
  },
  {
    enunciado: "El material particulado PM2.5 se define por:",
    correcta: "Diámetro aerodinámico ≤ 2,5 μm",
    incorrectas: ["Diámetro ≥ 10 μm", "Partículas exclusivamente biogénicas"]
  },
  {
    enunciado: "Un sistema típico para abatir SO2 de una chimenea es:",
    correcta: "Lavador/FGD con lechada de cal/caliza",
    incorrectas: ["Filtro HEPA", "SCR con urea sin más"]
  },
  {
    enunciado: "La técnica SCR para NOx requiere:",
    correcta: "Agente reductor (amoníaco/urea) y catalizador",
    incorrectas: ["Solo absorción en agua", "Oxidación con permanganato en seco"]
  },
  {
    enunciado: "Para COV y olores, una opción robusta es:",
    correcta: "Adsorción en carbón activo o oxidación térmica",
    incorrectas: ["ESP electrostático siempre", "Decantación primaria"]
  },
  {
    enunciado: "Los filtros de mangas están diseñados para remover principalmente:",
    correcta: "Partículas (polvo) en suspensión",
    incorrectas: ["SO2 disuelto", "CO2 de combustión por reacción química"]
  },
  {
    enunciado: "En control de aire, un ciclón separa partículas por:",
    correcta: "Fuerzas inerciales/centrífugas",
    incorrectas: ["Atracción magnética", "Electrólisis del polvo"]
  },
  {
    enunciado: "El índice de calidad del aire (ICA) resume:",
    correcta: "Concentraciones de contaminantes criterio en una escala comunicable",
    incorrectas: ["El consumo energético de la planta", "La dureza del agua potable"]
  },
  {
    enunciado: "Para metales en agua a niveles traza se usa frecuentemente:",
    correcta: "ICP-MS/ICP-OES",
    incorrectas: ["Potenciómetro de pH", "Cromatografía de gases sin detector específico"]
  },
  {
    enunciado: "La cromatografía iónica es apropiada para medir:",
    correcta: "Aniones como NO3−, Cl−, SO4^2−",
    incorrectas: ["DBO5 directamente", "PM2.5 ambiental"]
  },
  {
    enunciado: "La adsorción de metales en suelos se describe a menudo con:",
    correcta: "Isotermas de Langmuir o Freundlich",
    incorrectas: ["Ley de Raoult", "Ecuación de Nernst sin modificaciones"]
  },
  {
    enunciado: "Un efecto típico de la eutrofización en lagos es:",
    correcta: "Disminución del oxígeno disuelto por respiración y descomposición",
    incorrectas: ["Aumento permanente de O2 por fotosíntesis nocturna", "Reducción de biomasa algal"]
  },
  {
    enunciado: "En biofiltración de gases olorosos, los contaminantes se eliminan por:",
    correcta: "Absorción/adsorción y biodegradación en el lecho",
    incorrectas: ["Pirolisis a alta temperatura", "Condensación criogénica exclusivamente"]
  },
  {
    enunciado: "Para remover arsénico en agua subterránea se emplea a menudo:",
    correcta: "Adsorbentes de óxidos de hierro o coagulación/filtración",
    incorrectas: ["Cloración libre únicamente", "Aireación sin sólidos"]
  },
  {
    enunciado: "Un carbón activo en polvo (PAC) se dosifica típicamente en:",
    correcta: "Línea de agua para adsorber microcontaminantes",
    incorrectas: ["Línea de fangos para aumentar DBO5", "Chimenea para reducir NOx por absorción"]
  },
  {
    enunciado: "En una EDAR, la aireación en el reactor biológico sirve para:",
    correcta: "Aportar oxígeno y mezclar para la biodegradación",
    incorrectas: ["Desinfectar térmicamente el agua", "Eliminar partículas por decantación"
    ]
  },
  {
    enunciado: "La selección de tecnología de control de emisiones debe basarse en:",
    correcta: "Especie objetivo, caudal/concentración, temperatura y compatibilidad",
    incorrectas: ["El equipo más barato disponible", "El color del humo"]
  }
];
