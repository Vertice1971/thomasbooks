// temarios/55-acidos-bases-teorias-ph-indicadores-valoraciones-y-sistemas-amortiguadores.js
var PREGUNTAS = [
  {
    enunciado: "Según Arrhenius, una base es una sustancia que en agua...",
    correcta: "Libera iones OH−",
    incorrectas: ["Libera H+", "Acepta un par de electrones"]
  },
  {
    enunciado: "Según Brønsted–Lowry, un ácido es la especie que...",
    correcta: "Dona protones (H+)",
    incorrectas: ["Acepta protones (H+)", "Dona un par de electrones"]
  },
  {
    enunciado: "En la teoría de Lewis, un ácido es:",
    correcta: "Un aceptor de par de electrones",
    incorrectas: ["Un donador de par de electrones", "Un dador de protones"]
  },
  {
    enunciado: "La constante iónica del agua a 25 °C vale aproximadamente:",
    correcta: "Kw = 1,0 × 10⁻¹⁴",
    incorrectas: ["Kw = 1,0 × 10⁻⁷", "Kw = 1,0 × 10⁻¹"]
  },
  {
    enunciado: "La definición de pH es:",
    correcta: "pH = −log [H3O+]",
    incorrectas: ["pH = −log [OH−]", "pH = log [H3O+]"]
  },
  {
    enunciado: "A 25 °C, la relación correcta es:",
    correcta: "pH + pOH = 14,00",
    incorrectas: ["pH · pOH = 14,00", "pH = 14,00 − Kw"]
  },
  {
    enunciado: "Un ácido fuerte en agua se caracteriza por:",
    correcta: "Disociación prácticamente completa",
    incorrectas: ["Constante Ka muy pequeña", "Formación de pares ácido–base conjugados débiles predominantes"]
  },
  {
    enunciado: "Para un ácido débil HA, la expresión correcta de Ka es:",
    correcta: "Ka = [H3O+][A−]/[HA]",
    incorrectas: ["Ka = [HA]/([H3O+][A−])", "Ka = [H3O+]/[HA]"]
  },
  {
    enunciado: "La relación entre pKa y Ka es:",
    correcta: "pKa = −log Ka",
    incorrectas: ["pKa = 1/Ka", "pKa = log Ka"]
  },
  {
    enunciado: "Para una base conjugada B de un ácido débil, se cumple:",
    correcta: "Ka·Kb = Kw",
    incorrectas: ["Ka/Kb = Kw", "Ka + Kb = Kw"]
  },
  {
    enunciado: "En una disolución neutra pura a 25 °C, se cumple:",
    correcta: "[H3O+] = [OH−] = 1,0 × 10⁻⁷ M",
    incorrectas: ["[H3O+] = 0", "[OH−] = 0"]
  },
  {
    enunciado: "Un indicador ácido–base cambia de color alrededor de:",
    correcta: "pH ≈ pKind ± 1",
    incorrectas: ["pH ≈ pKa ± 1 siempre", "Un valor fijo de pH = 7"]
  },
  {
    enunciado: "La fenolftaleína es adecuada para detectar equivalencia en:",
    correcta: "Valoración ácido débil–base fuerte",
    incorrectas: ["Ácido fuerte–base fuerte en medio ácido muy coloreado", "Ácido fuerte–base débil con pH de equivalencia < 7"]
  },
  {
    enunciado: "En una valoración ácido fuerte–base fuerte a 25 °C, el pH en el punto de equivalencia es aproximadamente:",
    correcta: "7,0",
    incorrectas: ["< 7", "> 7"]
  },
  {
    enunciado: "En una valoración ácido débil con base fuerte, el pH en el punto de equivalencia es:",
    correcta: "> 7 por hidrólisis de la base conjugada",
    incorrectas: ["7 exactamente", "< 7 por la acidez residual del ácido"]
  },
  {
    enunciado: "En el punto medio de una valoración ácido débil–base fuerte se cumple:",
    correcta: "pH = pKa del ácido",
    incorrectas: ["pH = 7 siempre", "pOH = pKa"]
  },
  {
    enunciado: "La ecuación de Henderson–Hasselbalch válida para un tampón es:",
    correcta: "pH = pKa + log([base]/[ácido])",
    incorrectas: ["pH = pKa − log([base]/[ácido])", "pH = −log([base]/[ácido])"]
  },
  {
    enunciado: "La capacidad amortiguadora de un tampón es máxima cuando:",
    correcta: "[base] ≈ [ácido] y pH ≈ pKa",
    incorrectas: ["[base] ≫ [ácido] y pH ≫ pKa", "[ácido] ≫ [base] y pH ≪ pKa"]
  },
  {
    enunciado: "Para diseñar un tampón a pH 7, conviene elegir un par con pKa:",
    correcta: "Próximo a 7",
    incorrectas: ["Muy alejado de 7 para mayor margen", "Independiente del pH objetivo"]
  },
  {
    enunciado: "Un ejemplo clásico de tampón fisiológico sanguíneo es:",
    correcta: "H2CO3/HCO3−",
    incorrectas: ["HCl/Cl−", "NaOH/Na+"]
  },
  {
    enunciado: "La adición de pequeñas cantidades de ácido fuerte a un tampón eficaz provoca:",
    correcta: "Un cambio de pH pequeño gracias al par conjugado",
    incorrectas: ["Un descenso brusco de pH", "Un aumento de pH significativo"]
  },
  {
    enunciado: "Los sistemas polipróticos presentan:",
    correcta: "Múltiples pKa y posibles saltos en curvas de valoración",
    incorrectas: ["Un único pKa", "No pueden formar tampones"]
  },
  {
    enunciado: "El punto final de una valoración es...",
    correcta: "El detectado experimentalmente (p. ej., cambio de color del indicador)",
    incorrectas: ["Siempre coincide con el de equivalencia exacta", "Independiente del indicador usado"]
  },
  {
    enunciado: "La medida potenciométrica de pH se basa en:",
    correcta: "La ecuación de Nernst en el electrodo de vidrio",
    incorrectas: ["El principio de Arquímedes", "La ley de Beer-Lambert exclusivamente"]
  },
  {
    enunciado: "Un error común en valoraciones es ignorar:",
    correcta: "La absorción de CO₂ del aire que acidifica disoluciones básicas",
    incorrectas: ["La densidad del agua destilada ~1 g/mL", "La temperatura ambiente constante"]
  },
  {
    enunciado: "En disoluciones muy diluidas, asumir [H+] ≈ aH+ puede fallar porque:",
    correcta: "La autoionización del agua contribuye significativamente",
    incorrectas: ["Kw se hace cero", "El electrodo de pH no funciona en agua"]
  },
  {
    enunciado: "La hidrólisis de la sal CH3COONa en agua produce:",
    correcta: "Medio básico por formación de CH3COO− + H2O ⇌ CH3COOH + OH−",
    incorrectas: ["Medio ácido", "Medio estrictamente neutro"]
  },
  {
    enunciado: "En una mezcla 0,10 M de ácido acético y 0,10 M de acetato, el pH es aproximadamente:",
    correcta: "Igual al pKa del ácido acético",
    incorrectas: ["pKa + 1", "pKa − 1"]
  },
  {
    enunciado: "La selección de indicador para fuerte–fuerte es menos crítica porque:",
    correcta: "La región de salto de pH en equivalencia es muy pronunciada",
    incorrectas: ["No existe salto de pH", "Cualquier indicador vira exactamente a pH 7"]
  },
  {
    enunciado: "El efecto del disolvente en acidez básica puede describirse por:",
    correcta: "Efecto de nivelación: ácidos fuertes se muestran con fuerza similar en agua",
    incorrectas: ["Todos los ácidos son más fuertes en disolventes menos polares", "La acidez es independiente del disolvente"]
  },
  {
    enunciado: "Según HSAB, los ácidos duros tienden a unirse a:",
    correcta: "Bases duras (par iónico, poco polarizable)",
    incorrectas: ["Bases blandas preferentemente", "Ni a duras ni a blandas en particular"]
  },
  {
    enunciado: "Para calcular pH de un ácido débil monoprótico HA a concentración C (Ka conocido) puede usarse la aproximación:",
    correcta: "[H+] ≈ √(Ka·C), si α ≪ 1",
    incorrectas: ["[H+] ≈ C siempre", "[H+] ≈ Kw/C en cualquier caso"]
  },
  {
    enunciado: "La ecuación exacta para ácido débil HA (sin aproximar) resuelve:",
    correcta: "Ka = x²/(C − x) con x = [H+]",
    incorrectas: ["Ka = (C − x)²/x", "Ka = (C + x)/x²"]
  },
  {
    enunciado: "En una valoración base débil–ácido fuerte, el pH en equivalencia es:",
    correcta: "< 7 por hidrólisis del catión conjugado",
    incorrectas: ["≈ 7", "> 7"]
  },
  {
    enunciado: "La adición de agua a un tampón ideal produce principalmente:",
    correcta: "Disminución de la capacidad amortiguadora, pH casi constante",
    incorrectas: ["Aumento marcado de pH", "Descenso marcado de pH"]
  },
  {
    enunciado: "Un par tampón tendrá mayor capacidad si:",
    correcta: "La concentración total (ácido + base) es alta",
    incorrectas: ["La concentración total es muy baja", "pH muy alejado del pKa"]
  },
  {
    enunciado: "En medios no acuosos, la fuerza relativa de ácidos/bases puede cambiar porque:",
    correcta: "Cambian la solvatación y la autoprotólisis del disolvente",
    incorrectas: ["Ka y Kb son constantes universales", "Kw siempre vale 10⁻¹⁴"]
  },
  {
    enunciado: "Un ácido de Lewis típico en síntesis orgánica es:",
    correcta: "BF3",
    incorrectas: ["NH3", "CH3COO−"]
  },
  {
    enunciado: "La curva de valoración fuerte–fuerte presenta pendiente máxima en equivalencia porque:",
    correcta: "El sistema pasa por una zona donde d(pH)/dV es muy grande",
    incorrectas: ["No hay zona tampón", "El indicador cambia lentamente de color"]
  },
  {
    enunciado: "El criterio principal para elegir indicador es:",
    correcta: "Que su intervalo de viraje contenga el pH del punto de equivalencia",
    incorrectas: ["Que tenga el color más intenso", "Que sea el más barato"]
  }
];
