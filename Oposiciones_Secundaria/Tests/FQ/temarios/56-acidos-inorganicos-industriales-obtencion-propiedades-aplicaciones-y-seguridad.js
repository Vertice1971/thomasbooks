// temarios/56-acidos-inorganicos-industriales-obtencion-propiedades-aplicaciones-y-seguridad.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la secuencia básica del proceso de contacto para H2SO4?",
    correcta: "Producción de SO2 → oxidación catalítica a SO3 → absorción (oleum/ácido)",
    incorrectas: [
      "SO3 → SO2 → absorción en agua",
      "Absorción directa de SO2 en agua sin catalizador"
    ]
  },
  {
    enunciado: "Catalizador industrial típico para SO2 → SO3 en el proceso de contacto:",
    correcta: "V2O5 soportado (p. ej., en TiO2)",
    incorrectas: ["Pt/Rh en rejilla", "Ni/Cu sin soporte"]
  },
  {
    enunciado: "¿Por qué se absorbe SO3 en H2SO4/oleum y no en agua?",
    correcta: "Para evitar nieblas y mejorar la transferencia de masa (se forma H2S2O7/H2SO4)",
    incorrectas: [
      "Porque el agua descompone el SO3 en SO2",
      "Para reducir el punto de ebullición de la mezcla"
    ]
  },
  {
    enunciado: "La concentración comercial máxima estable de H2SO4 por ebullición es ~",
    correcta: "98 % m/m (azeótropo con agua)",
    incorrectas: ["65 % m/m", "100 % m/m sin restricciones"]
  },
  {
    enunciado: "Regla de seguridad al diluir H2SO4 concentrado:",
    correcta: "Añadir siempre el ácido al agua lentamente y con agitación",
    incorrectas: [
      "Añadir agua al ácido para mayor seguridad",
      "Mezclar a partes iguales de golpe"
    ]
  },
  {
    enunciado: "Propiedad química distintiva del H2SO4 concentrado:",
    correcta: "Fuerte deshidratante y oxidante a alta concentración",
    incorrectas: ["Agente reductor fuerte", "No reacciona con orgánicos"]
  },
  {
    enunciado: "Primera etapa del proceso Ostwald para HNO3:",
    correcta: "Oxidación catalítica de NH3 a NO sobre Pt–Rh",
    incorrectas: ["Absorción directa de NH3 en agua", "Reducción de NO2 a NO"]
  },
  {
    enunciado: "La fabricación de HNO3 integra conversión NO → NO2 y:",
    correcta: "Absorción de NO2 en agua para formar HNO3",
    incorrectas: ["Destilación fraccionada de NO y NO2", "Precipitación de nitratos metálicos"]
  },
  {
    enunciado: "Abatimiento típico de NOx en plantas de HNO3:",
    correcta: "SCR/SNCR con reducción catalítica selectiva",
    incorrectas: ["Filtro de mangas seco", "Separación magnética"]
  },
  {
    enunciado: "¿Cuál de estas formulaciones es ácido nítrico fumante rojo?",
    correcta: "HNO3 concentrado con NO2 disuelto (emite vapores rojizos)",
    incorrectas: ["HNO3 al 50 % con urea", "HNO3 diluido con inhibidor de corrosión azul"]
  },
  {
    enunciado: "Compatibilidad típica del HNO3 concentrado con metales:",
    correcta: "Puede pasivar aceros inoxidables adecuados",
    incorrectas: ["Ataca rápidamente el titanio a temperatura ambiente", "Siempre perfora el aluminio al instante"]
  },
  {
    enunciado: "En la vía húmeda del H3PO4 se genera como subproducto principal:",
    correcta: "Fosfoyeso (CaSO4·xH2O)",
    incorrectas: ["Cloruro cálcico anhidro", "Sulfuro cálcico"
    ]
  },
  {
    enunciado: "Rutas industriales del ácido fosfórico:",
    correcta: "Vía húmeda (ataque de fosfato) y vía térmica (P4 → P2O5 → H3PO4)",
    incorrectas: ["Solo electrólisis de fosfatos", "Descomposición térmica de H4P2O7"]
  },
  {
    enunciado: "Uso clave del H3PO4 en fertilizantes:",
    correcta: "Producción de MAP/DAP a partir de H3PO4",
    incorrectas: ["Neutralización para formar urea", "Fabricación directa de nitrato amónico"]
  },
  {
    enunciado: "Fuente industrial habitual de HCl acuoso:",
    correcta: "Absorción de HCl(g) procedente de cloraciones o síntesis H2+Cl2",
    incorrectas: ["Oxidación de NaCl(aq) con O2", "Descomposición térmica de NaCl sólido"]
  },
  {
    enunciado: "Concentración comercial típica del HCl técnico:",
    correcta: "≈30–33 % m/m",
    incorrectas: ["≈60 % m/m", "≈5 % m/m"]
  },
  {
    enunciado: "Materiales usuales para tuberías de HCl a temperatura ambiente:",
    correcta: "PVC/PVDF/PTFE (según condiciones)",
    incorrectas: ["Cobre y latón", "Magnesio puro"]
  },
  {
    enunciado: "Propiedad visible del HCl concentrado en aire húmedo:",
    correcta: "Fuma por formación de nieblas de cloruro",
    incorrectas: ["Se torna violeta por oxidación", "Emite gas nitrógeno"
    ]
  },
  {
    enunciado: "Producción de HBr/HI industrialmente puede realizarse por:",
    correcta: "Síntesis H2 + X2 y absorción en agua (X = Br2, I2)",
    incorrectas: ["Reducción electroquímica de NaX sólido a temperatura ambiente", "Hidratación directa de X2 a HX2"]
  },
  {
    enunciado: "Riesgo crítico al mezclar HNO3 concentrado con materia orgánica:",
    correcta: "Oxidación violenta/nitración con riesgo de incendio o explosión",
    incorrectas: ["Polimerización exotérmica segura", "No hay interacción relevante"]
  },
  {
    enunciado: "Ante un derrame pequeño de ácido mineral fuerte, una opción habitual es:",
    correcta: "Neutralización controlada (p. ej., con Na2CO3) evitando sobrecalentamiento",
    incorrectas: ["Cubrir con serrín sin más", "Añadir agua hirviendo para acelerar"
    ]
  },
  {
    enunciado: "El nombre 'proceso de contacto' alude a:",
    correcta: "El contacto del gas con el catalizador sólido en lechos",
    incorrectas: ["El contacto del ácido con el agua", "La operación en contacto con vacío profundo"]
  },
  {
    enunciado: "Los cloruros calientes pueden inducir en inoxidables:",
    correcta: "Corrosión por picaduras y corrosión bajo tensión",
    incorrectas: ["Pasivación universal sin riesgo", "Solo desgaste mecánico"
    ]
  },
  {
    enunciado: "El electrolito de baterías plomo–ácido es:",
    correcta: "H2SO4 acuoso diluido",
    incorrectas: ["HNO3 fumante", "HCl concentrado"]
  },
  {
    enunciado: "Para mejorar la absorción de NO2 en HNO3, conviene operar:",
    correcta: "A menor temperatura y con suficiente presión/etapas de absorción",
    incorrectas: ["A T muy alta para aumentar la solubilidad", "Con aire completamente seco a 120 °C"]
  },
  {
    enunciado: "Un efecto ambiental del proceso de contacto bien operado es:",
    correcta: "Reducir emisiones de SO2 convirtiéndolo a H2SO4",
    incorrectas: ["Emitir más SO3 deliberadamente", "Generar amoníaco como subproducto"
    ]
  },
  {
    enunciado: "Material típico de tanques para H2SO4 concentrado a T moderada:",
    correcta: "Acero al carbono adecuadamente especificado",
    incorrectas: ["Aluminio puro", "Cobre electrolítico"]
  },
  {
    enunciado: "La corrosión por H2SO4 en acero al carbono depende fuertemente de:",
    correcta: "Concentración y temperatura del ácido",
    incorrectas: ["Color del tanque", "pH del aire exterior"]
  },
  {
    enunciado: "EPI recomendables al manejar ácidos fuertes líquidos:",
    correcta: "Pantalla facial/gafas, guantes compatibles, delantal/mono y calzado de seguridad",
    incorrectas: ["Solo guantes de algodón", "Mascarilla quirúrgica y manga corta"]
  },
  {
    enunciado: "Clase ADR principal de transporte para ácidos corrosivos:",
    correcta: "Clase 8 (corrosivos)",
    incorrectas: ["Clase 3 (líquidos inflamables)", "Clase 6.1 (tóxicos) exclusivamente"]
  },
  {
    enunciado: "Riesgo al diluir rápidamente H2SO4 concentrado:",
    correcta: "Fuerte exotermia y salpicaduras por ebullición local",
    incorrectas: ["Endotermia intensa con congelación", "Explosión por liberación de cloro"
    ]
  },
  {
    enunciado: "Equilibrio NO/NO2 en la fabricación de HNO3:",
    correcta: "A menor T se favorece NO2 y mejora la absorción",
    incorrectas: ["A mayor T se incrementa NO2 indefinidamente", "No afecta a la absorción"]
  },
  {
    enunciado: "Los ácidos HI/HBr comparados con HCl presentan:",
    correcta: "Mayor carácter reductor y tendencia a oxidarse en aire",
    incorrectas: ["Menor reactividad en general", "Propiedades idénticas a HCl"]
  },
  {
    enunciado: "La vía térmica del H3PO4 se elige cuando se requiere:",
    correcta: "Alta pureza (grado alimentario/farmacéutico)",
    incorrectas: ["Máxima producción de fosfoyeso", "Mayor contenido en impurezas metálicas"]
  },
  {
    enunciado: "En zonas de manipulación de ácidos debe existir:",
    correcta: "Ducha de emergencia y lavaojos cercanos, señalizados",
    incorrectas: ["Solo extintor de CO2", "Un botiquín sin agua"
    ]
  },
  {
    enunciado: "Las nieblas ácidas de H2SO4/HCl se controlan con:",
    correcta: "Lavadores/scrubbers y ventilación localizada",
    incorrectas: ["Filtros HEPA exclusivamente", "Imanes permanentes de alta potencia"]
  },
  {
    enunciado: "Aplicación típica del HCl en metalurgia:",
    correcta: "Decapado/limpieza de óxidos en aceros",
    incorrectas: ["Pasivado de inox con nitratos", "Formación de fosfatos sobre aluminio"]
  },
  {
    enunciado: "Un riesgo al almacenar HNO3 junto a materiales incompatibles es:",
    correcta: "Reacción con reductores/orgánicos → incendio/explosión",
    incorrectas: ["Solidificación espontánea del ácido", "Descomposición a agua y aire"
    ]
  },
  {
    enunciado: "Comparando ácidos industriales, ¿cuál es mayormente 'no oxidante' a concentración moderada?",
    correcta: "HCl",
    incorrectas: ["HNO3 concentrado", "H2SO4 fumante"]
  }
];
