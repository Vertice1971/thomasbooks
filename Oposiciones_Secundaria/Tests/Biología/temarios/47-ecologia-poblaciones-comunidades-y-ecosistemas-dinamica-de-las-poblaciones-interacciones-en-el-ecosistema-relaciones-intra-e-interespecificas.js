// temarios/47-ecologia-poblaciones-comunidades-ecosistemas-dinamica-e-interacciones.js
var PREGUNTAS = [
  {
    enunciado: "La ecología se ocupa principalmente de:",
    correcta: "La distribución y abundancia de los organismos y sus interacciones con factores bióticos y abióticos",
    incorrectas: [
      "Los procesos celulares exclusivos de animales domésticos",
      "La historia evolutiva de una sola especie sin contexto ambiental"
    ]
  },
  {
    enunciado: "Una población biológica se define como:",
    correcta: "Conjunto de individuos de la misma especie que coexisten en un lugar y tiempo determinados",
    incorrectas: [
      "Conjunto de todas las especies que comparten un hábitat",
      "Conjunto de organismos con idéntico genotipo global"
    ]
  },
  {
    enunciado: "En dinámica poblacional, la tasa intrínseca de aumento r se calcula aproximadamente como:",
    correcta: "r = b − d (natalidad per cápita menos mortalidad per cápita)",
    incorrectas: [
      "r = b + d",
      "r = (b × d) / K"
    ]
  },
  {
    enunciado: "El modelo exponencial de crecimiento poblacional se expresa como:",
    correcta: "dN/dt = r·N",
    incorrectas: [
      "dN/dt = r·N·(N/K)",
      "dN/dt = K − r"
    ]
  },
  {
    enunciado: "En el modelo logístico, K representa:",
    correcta: "La capacidad de carga del ambiente",
    incorrectas: [
      "La tasa de depredación máxima",
      "La constante universal de crecimiento"
    ]
  },
  {
    enunciado: "El efecto Allee describe:",
    correcta: "Mejora del rendimiento individual a bajas densidades hasta un umbral crítico",
    incorrectas: [
      "Saturación por depredación a altas densidades",
      "Invariancia del crecimiento con la densidad"
    ]
  },
  {
    enunciado: "Una curva de supervivencia tipo I es típica de:",
    correcta: "Especies con baja mortalidad temprana y alta en edades avanzadas",
    incorrectas: [
      "Especies con mortalidad constante en todas las edades",
      "Especies con altísima mortalidad temprana y supervivientes longevos"
    ]
  },
  {
    enunciado: "Las estrategias r frente a K se diferencian en que las r tienden a:",
    correcta: "Alta fecundidad, maduración temprana y poca inversión parental",
    incorrectas: [
      "Baja fecundidad y alta inversión parental",
      "Longevidad elevada y poblaciones estables cerca de K"
    ]
  },
  {
    enunciado: "Las matrices de Leslie permiten estimar:",
    correcta: "La razón de crecimiento poblacional (λ) y sensibilidades por clase de edad",
    incorrectas: [
      "La tasa metabólica basal de la especie",
      "El número de parches aptos en un paisaje"
    ]
  },
  {
    enunciado: "Un patrón de distribución espacial agregado suele deberse a:",
    correcta: "Heterogeneidad ambiental o comportamiento social",
    incorrectas: [
      "Repulsión uniforme entre individuos",
      "Azar completo sin influencia del ambiente"
    ]
  },
  {
    enunciado: "En el modelo de metapoblaciones de Levins, p representa:",
    correcta: "La fracción de parches ocupados",
    incorrectas: [
      "La productividad primaria neta",
      "La probabilidad de supervivencia individual"
    ]
  },
  {
    enunciado: "En metapoblaciones, la conectividad del paisaje tiende a:",
    correcta: "Aumentar la colonización y reducir la probabilidad de extinción local",
    incorrectas: [
      "Reducir la colonización y aumentar las extinciones",
      "No tener efecto sobre la dinámica de parches"
    ]
  },
  {
    enunciado: "La competencia intraespecífica es un mecanismo típicamente:",
    correcta: "Densodependiente que contribuye a la autorregulación",
    incorrectas: [
      "Densoindependiente y aleatorio",
      "Exclusivo de comunidades con alta riqueza de especies"
    ]
  },
  {
    enunciado: "En el modelo de competencia de Lotka–Volterra, α (alfa) mide:",
    correcta: "El efecto de la especie 2 sobre la 1 en unidades de la especie 1",
    incorrectas: [
      "La tasa de depredación máxima del depredador",
      "El número de clases de edad en la población"
    ]
  },
  {
    enunciado: "La coexistencia entre competidores se favorece cuando:",
    correcta: "Existe partición de nicho y solapamiento reducido en el uso de recursos",
    incorrectas: [
      "Ambas especies explotan exactamente el mismo recurso del mismo modo",
      "La heterogeneidad espacial es nula"
    ]
  },
  {
    enunciado: "El principio de exclusión competitiva (Gause) establece que:",
    correcta: "Dos especies con nichos idénticos no pueden coexistir indefinidamente",
    incorrectas: [
      "La competencia siempre incrementa la diversidad local",
      "Todas las especies comparten nicho fundamental idéntico"
    ]
  },
  {
    enunciado: "En el sistema depredador–presa clásico de Lotka–Volterra se predicen:",
    correcta: "Oscilaciones desfasadas de presas y depredadores",
    incorrectas: [
      "Equilibrios estables sin oscilaciones",
      "Extinción inmediata del depredador"
    ]
  },
  {
    enunciado: "Una respuesta funcional de Holling tipo II se caracteriza por:",
    correcta: "Saturación de la tasa de consumo por tiempo de manejo",
    incorrectas: [
      "Relación lineal indefinida sin saturación",
      "Tasa de consumo decreciente con la densidad de presas"
    ]
  },
  {
    enunciado: "Una cascada trófica de control top-down ocurre cuando:",
    correcta: "Cambios en depredadores regulan indirectamente niveles inferiores",
    incorrectas: [
      "La disponibilidad de nutrientes controla la red trófica (bottom-up)",
      "Los mutualismos se rompen por falta de polinizadores"
    ]
  },
  {
    enunciado: "Un ejemplo de mutualismo es:",
    correcta: "Micorrizas entre hongos y raíces vegetales",
    incorrectas: [
      "Parasitismo por cestodos",
      "Comensalismo en epífitas sin daño al hospedador"
    ]
  },
  {
    enunciado: "Un parasitoide se diferencia de un parásito porque:",
    correcta: "Acaba matando al hospedador como parte de su ciclo",
    incorrectas: [
      "Siempre vive fuera del hospedador sin contacto",
      "Nunca reduce la aptitud del hospedador"
    ]
  },
  {
    enunciado: "El comensalismo implica:",
    correcta: "Beneficio para una especie y efecto neutral para la otra (+/0)",
    incorrectas: [
      "Beneficio mutuo (+/+)",
      "Perjuicio mutuo (−/−)"
    ]
  },
  {
    enunciado: "El nicho fundamental de una especie es:",
    correcta: "El conjunto de condiciones y recursos donde puede persistir en ausencia de interacciones limitantes",
    incorrectas: [
      "La porción del hábitat realmente ocupada bajo competencia (nicho realizado)",
      "El área geográfica donde fue descrita por primera vez"
    ]
  },
  {
    enunciado: "La riqueza de especies mide _____ y la equidad (evenness) mide _____.",
    correcta: "Número de especies; cómo se reparten las abundancias entre ellas",
    incorrectas: [
      "Abundancia total; productividad del ecosistema",
      "Varianza de la densidad; tamaño corporal medio"
    ]
  },
  {
    enunciado: "Un valor alto del índice de Shannon (H') suele indicar:",
    correcta: "Mayor diversidad (más riqueza y/o equidad)",
    incorrectas: [
      "Dominancia extrema de una sola especie",
      "Menor incertidumbre en la identidad de individuos"
    ]
  },
  {
    enunciado: "En la formulación clásica, un valor alto del índice de Simpson D indica:",
    correcta: "Alta dominancia (menor diversidad efectiva)",
    incorrectas: [
      "Máxima equidad y diversidad",
      "Imposibilidad de comparar comunidades"
    ]
  },
  {
    enunciado: "La β-diversidad cuantifica principalmente:",
    correcta: "El recambio de especies entre sitios o gradientes",
    incorrectas: [
      "La abundancia total de una comunidad local",
      "La productividad primaria neta del ecosistema"
    ]
  },
  {
    enunciado: "Una especie clave (keystone) se reconoce porque:",
    correcta: "Tiene efectos desproporcionados sobre la estructura de la comunidad",
    incorrectas: [
      "Es necesariamente la más abundante",
      "Siempre pertenece al nivel productor primario"
    ]
  },
  {
    enunciado: "La productividad primaria bruta (PPB, GPP) es:",
    correcta: "La tasa total de fijación de energía por fotosíntesis",
    incorrectas: [
      "La energía disponible tras descontar la respiración (PPN)",
      "La energía transferida al siguiente nivel trófico"
    ]
  },
  {
    enunciado: "La eficiencia trófica entre niveles suele aproximarse a:",
    correcta: "≈ 10% de transferencia de energía",
    incorrectas: [
      "≈ 50% de transferencia universal",
      "≈ 100% sin pérdidas"
    ]
  },
  {
    enunciado: "La pirámide de energía en un ecosistema:",
    correcta: "Siempre es erecta (no se invierte)",
    incorrectas: [
      "Puede invertirse frecuentemente en cualquier sistema",
      "No depende de la segunda ley de la termodinámica"
    ]
  },
  {
    enunciado: "La ley del mínimo de Liebig establece que:",
    correcta: "El factor más limitante controla la producción",
    incorrectas: [
      "Todos los nutrientes limitan por igual",
      "La limitación sólo ocurre por luz en sistemas terrestres"
    ]
  },
  {
    enunciado: "El cociente estequiométrico de Redfield (marino) se aproxima a:",
    correcta: "C:N:P = 106:16:1",
    incorrectas: [
      "C:N:P = 10:1:1",
      "C:N:P = 1:1:1"
    ]
  },
  {
    enunciado: "La sucesión primaria se diferencia de la secundaria en que la primaria:",
    correcta: "Se inicia sobre sustratos sin suelo desarrollado ni biota previa",
    incorrectas: [
      "Siempre comienza tras incendios de baja intensidad con suelo intacto",
      "Implica obligatoriamente pérdida de biodiversidad"
    ]
  },
  {
    enunciado: "La hipótesis del disturbio intermedio predice:",
    correcta: "Máxima diversidad a niveles intermedios de perturbación",
    incorrectas: [
      "Máxima diversidad con perturbación nula",
      "Máxima diversidad con perturbación extrema"
    ]
  },
  {
    enunciado: "En estabilidad comunitaria, la resiliencia se refiere a:",
    correcta: "Velocidad de recuperación tras una perturbación",
    incorrectas: [
      "Capacidad de resistir cambio ante perturbación",
      "Imposibilidad de cambiar de estado"
    ]
  },
  {
    enunciado: "La teoría de biogeografía de islas predice que la riqueza aumenta con _____ y disminuye con _____.",
    correcta: "El tamaño de la isla; el aislamiento",
    incorrectas: [
      "El aislamiento; el tamaño de la isla",
      "La altitud; la latitud"
    ]
  },
  {
    enunciado: "En marcado-recaptura (Lincoln–Petersen), m2 representa:",
    correcta: "Número de individuos marcados recapturados en la segunda muestra",
    incorrectas: [
      "Tamaño total de la población",
      "Número total capturado en la primera muestra"
    ]
  },
  {
    enunciado: "Un Análisis de Viabilidad Poblacional (PVA) se utiliza para:",
    correcta: "Estimar riesgo de extinción y evaluar escenarios de gestión",
    incorrectas: [
      "Calcular únicamente la tasa metabólica basal",
      "Determinar el pH óptimo del suelo para cultivo"
    ]
  },
  {
    enunciado: "El enfoque One Health en ecología aplicada integra:",
    correcta: "Salud humana, animal y ambiental en un marco común",
    incorrectas: [
      "Sólo salud humana y economía",
      "Exclusivamente conservación de plantas"
    ]
  }
];
