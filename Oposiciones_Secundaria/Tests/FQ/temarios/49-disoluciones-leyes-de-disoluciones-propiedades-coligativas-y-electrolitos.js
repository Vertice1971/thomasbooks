// temarios/49-disoluciones-leyes-propiedades-coligativas-y-electrolitos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué magnitud de concentración NO depende de la temperatura?",
    correcta: "La molalidad (m)",
    incorrectas: ["La molaridad (M)", "El % V/V"]
  },
  {
    enunciado: "En una disolución ideal binaria con soluto no volátil, ¿qué establece la ley de Raoult?",
    correcta: "p = x1 · p1° (la presión de vapor del disolvente es proporcional a su fracción molar)",
    incorrectas: ["p = x2 · p2° para el soluto no volátil", "p = p1° + p2° siempre"]
  },
  {
    enunciado: "¿Cuál es la relación correcta para la ley de Henry en gases poco solubles?",
    correcta: "c = kH · pgas",
    incorrectas: ["pgas = kH · c²", "c = pgas / kB T"]
  },
  {
    enunciado: "La fracción molar del soluto en una disolución binaria es:",
    correcta: "x2 = n2 / (n1 + n2)",
    incorrectas: ["x2 = n2 / n1", "x2 = m2 / (m1 + m2) con m en gramos"]
  },
  {
    enunciado: "El descenso crioscópico se expresa por:",
    correcta: "ΔTf = Kf · m · i (si procede)",
    incorrectas: ["ΔTf = Kf / m", "ΔTf = i / (Kf · m)"]
  },
  {
    enunciado: "La presión osmótica de un no electrolito ideal diluido cumple:",
    correcta: "π = M · R · T",
    incorrectas: ["π = M · R / T", "π = R · T / M"]
  },
  {
    enunciado: "¿Qué es el factor de Van’t Hoff (i)?",
    correcta: "El cociente entre el número efectivo de partículas en disolución y el número de fórmulas de soluto disueltas",
    incorrectas: ["La pendiente de π vs T", "El inverso de la molalidad"]
  },
  {
    enunciado: "Un electrolito 1:1 completamente disociado idealmente tendría i ≈",
    correcta: "2",
    incorrectas: ["1", "3"]
  },
  {
    enunciado: "¿Qué propiedad coligativa se usa en ebullioscopía?",
    correcta: "Ascenso del punto de ebullición",
    incorrectas: ["Descenso de presión osmótica", "Aumento de tensión superficial"]
  },
  {
    enunciado: "La ley de distribución de Nernst se aplica a:",
    correcta: "El reparto de un soluto entre dos líquidos inmiscibles en equilibrio",
    incorrectas: ["La disolución de un sólido en un gas", "La adsorción en superficies sólidas"]
  },
  {
    enunciado: "Para un no electrolito, el descenso relativo de la presión de vapor es:",
    correcta: "Δp / p1° = x2",
    incorrectas: ["Δp / p1° = x1", "Δp = x1 · p1°"]
  },
  {
    enunciado: "En una disolución real con interacciones atractivas fuertes entre A y B, se esperan:",
    correcta: "Desviaciones negativas a Raoult",
    incorrectas: ["Desviaciones positivas a Raoult", "Comportamiento ideal perfecto"]
  },
  {
    enunciado: "La fuerza iónica I de una disolución se define como:",
    correcta: "I = 1/2 Σ ci zi²",
    incorrectas: ["I = Σ ci zi", "I = 1/2 Σ ci² zi"]
  },
  {
    enunciado: "Según Debye–Hückel límite, al disminuir la fuerza iónica, los coeficientes de actividad iónica medios (γ±):",
    correcta: "Se aproximan a 1",
    incorrectas: ["Disminuyen a cero", "Aumentan indefinidamente"]
  },
  {
    enunciado: "La ley de Kohlrausch para electrolitos fuertes diluidos establece:",
    correcta: "Λm = Λm° − K √c",
    incorrectas: ["Λm = K / √c", "Λm = Λm° + K c"]
  },
  {
    enunciado: "En electrolitos débiles, al diluir la disolución la conductividad molar:",
    correcta: "Aumenta hacia Λm° por mayor grado de disociación",
    incorrectas: ["Disminuye hacia cero", "Permanece estrictamente constante"]
  },
  {
    enunciado: "La ley de dilución de Ostwald es aplicable a:",
    correcta: "Electrolitos débiles para relacionar α con K y c",
    incorrectas: ["Electrolitos fuertes a cualquier concentración", "No electrolitos con asociación"]
  },
  {
    enunciado: "¿Qué magnitud permite obtener masas molares por crioscopía?",
    correcta: "ΔTf con Kf del disolvente y m",
    incorrectas: ["La tensión superficial", "El calor específico"]
  },
  {
    enunciado: "El fenómeno de salting-out en gases disueltos describe:",
    correcta: "Reducción de solubilidad por presencia de sales",
    incorrectas: ["Aumento de solubilidad por complejación", "Desaparición de la presión osmótica"]
  },
  {
    enunciado: "Una disolución sobresaturada es:",
    correcta: "Una disolución metaestable con concentración superior a la solubilidad a esa T",
    incorrectas: ["Un sólido hidratado en equilibrio", "Una mezcla inmiscible estable"]
  },
  {
    enunciado: "En mezclas líquido–líquido con miscibilidad parcial aparece:",
    correcta: "Una temperatura crítica de disolución (TCD)",
    incorrectas: ["Un punto triple sólido", "Una presión crítica solo del gas"]
  },
  {
    enunciado: "Para un sistema con azeótropo mínimo (ebullición mínima), las desviaciones a Raoult son:",
    correcta: "Positivas",
    incorrectas: ["Negativas", "Nulas"]
  },
  {
    enunciado: "La actividad del disolvente en una disolución ideal es:",
    correcta: "a1 = x1",
    incorrectas: ["a1 = γ1 / x1", "a1 = 1 siempre"]
  },
  {
    enunciado: "En solución fisiológica isotónica, la presión osmótica respecto al plasma debe ser:",
    correcta: "Aproximadamente igual (isotónica) para evitar hemólisis o crenación",
    incorrectas: ["Mayor para hinchar células", "Menor para deshidratar células"]
  },
  {
    enunciado: "El coeficiente de reparto aparente se altera si el soluto:",
    correcta: "Se ioniza o asocia en alguna de las fases",
    incorrectas: ["Es totalmente inerte y no interactúa", "No obedece la ley de Henry"]
  },
  {
    enunciado: "En crioscopía, una medición precisa requiere:",
    correcta: "Corrección por subenfriamiento e identificación del plateau de congelación",
    incorrectas: ["Usar cualquier termómetro ambiental", "Ignorar la pureza del disolvente"]
  },
  {
    enunciado: "La constante ebullioscópica Kb depende de:",
    correcta: "Propiedades del disolvente (Tb°, ΔHvap)",
    incorrectas: ["Solo de la naturaleza del soluto", "La masa molar del soluto"]
  },
  {
    enunciado: "La conductividad específica κ se expresa en unidades de:",
    correcta: "S·m⁻¹ (siemens por metro)",
    incorrectas: ["S·m", "Ω·m⁻¹ exclusivamente"]
  },
  {
    enunciado: "La aditividad en Λm° para electrolitos fuertes indica que:",
    correcta: "Λm° = λ°+ + λ°− (sumas de contribuciones iónicas a dilución infinita)",
    incorrectas: ["Λm° depende solo del anión", "No puede sumarse por iones"]
  },
  {
    enunciado: "En soluciones acuosas, aumentar la temperatura suele:",
    correcta: "Disminuir kH para muchos gases (menor solubilidad)",
    incorrectas: ["Aumentar siempre la solubilidad de gases", "No afectar la solubilidad de gases"]
  },
  {
    enunciado: "¿Qué combinación produce mayor descenso crioscópico a igualdad de molalidad?",
    correcta: "Electrolito 2:1 con i efectivo mayor que 1",
    incorrectas: ["No electrolito con i = 1", "Electrolito 1:1 con fuerte asociación (i < 2)"]
  },
  {
    enunciado: "La tonicidad de una solución intravenosa depende principalmente de:",
    correcta: "La presión osmótica efectiva (solutos que no atraviesan la membrana)",
    incorrectas: ["La densidad absoluta", "La tensión superficial del disolvente"]
  },
  {
    enunciado: "Si dos disoluciones tienen igual M pero diferente m, esto implica que:",
    correcta: "Sus densidades o temperaturas difieren",
    incorrectas: ["Son necesariamente ideales", "Tienen el mismo número de moles de soluto por kg de disolvente"]
  },
  {
    enunciado: "Una manera de determinar K_a de un ácido débil por conductimetría es:",
    correcta: "Usar Λm y Λm° para obtener α y aplicar la ley de dilución de Ostwald",
    incorrectas: ["Medir solo κ a una concentración alta", "Usar exclusivamente pH sin calibración"]
  },
  {
    enunciado: "El efecto de pares iónicos en electrolitos concentrados provoca:",
    correcta: "Disminución de i efectivo respecto al ideal",
    incorrectas: ["Aumento de i por sobre-disociación ideal", "Invariancia total de i"]
  },
  {
    enunciado: "En extracción líquido–líquido, varias etapas de reparto sucesivas logran:",
    correcta: "Mayor recuperación del soluto que una sola etapa con el mismo volumen total de extractante",
    incorrectas: ["La misma recuperación siempre", "Menor recuperación por dilución"]
  },
  {
    enunciado: "Para calcular la fracción molar a partir de % m/m y densidad de una disolución, adicionalmente necesitas:",
    correcta: "Las masas molares y la densidad para convertir a moles",
    incorrectas: ["Solo la masa molar del soluto", "Ningún dato adicional"]
  },
  {
    enunciado: "La relación de van ’t Hoff para la variación de constantes con T permite estimar:",
    correcta: "La dependencia de kH o de K de equilibrio con ΔH a partir de dos temperaturas",
    incorrectas: ["La masa molar sin datos experimentales", "El pH sin concentración"]
  },
  {
    enunciado: "En una disolución ideal binaria volátil, la presión total cumple (ley de Dalton + Raoult):",
    correcta: "p = x1 p1° + x2 p2°",
    incorrectas: ["p = p1° p2°", "p = x1/x2"]
  },
  {
    enunciado: "La osmosis inversa se basa en:",
    correcta: "Aplicar una presión mayor que π para forzar el flujo del disolvente contra el gradiente",
    incorrectas: ["Permitir paso libre de soluto", "Reducir la temperatura hasta congelar"]
  },
  {
    enunciado: "Una solución real de alcohol–agua muestra desviaciones a Raoult porque:",
    correcta: "Existen interacciones específicas (p. ej., puentes de hidrógeno) entre componentes",
    incorrectas: ["No tienen interacciones intermoleculares", "Siempre forman azeótropo máximo por ser polares"]
  }
];
