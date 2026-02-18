// temarios/46-metales-obtencion-propiedades-aleaciones-e-interes-economico.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué característica electrónica explica el brillo y la alta conductividad de los metales?",
    correcta: "La deslocalización de electrones en bandas parcialmente ocupadas",
    incorrectas: [
      "La completa ausencia de electrones de valencia",
      "La presencia de pares electrónicos localizados en enlaces covalentes"
    ]
  },
  {
    enunciado: "¿Cuál es la relación cualitativa que establece la ley de Wiedemann–Franz?",
    correcta: "A mayor conductividad eléctrica suele corresponder mayor conductividad térmica en metales",
    incorrectas: [
      "La conductividad térmica es independiente de la eléctrica",
      "La conductividad eléctrica disminuye cuando aumenta la térmica"
    ]
  },
  {
    enunciado: "¿Qué operación metalúrgica busca separar mena de ganga antes de la reducción?",
    correcta: "La concentración del mineral (p. ej., flotación por espuma)",
    incorrectas: [
      "El recocido del material",
      "El temple y revenido"
    ]
  },
  {
    enunciado: "¿Cuál es la secuencia principal para obtener aluminio primario?",
    correcta: "Proceso Bayer para alúmina y electrólisis Hall–Héroult del fundido",
    incorrectas: [
      "Alto horno y convertidor LD",
      "Lixiviación amoniacal y proceso Mond"
    ]
  },
  {
    enunciado: "En la obtención de hierro, ¿qué se produce en el alto horno?",
    correcta: "Arrabio con alto contenido en carbono",
    incorrectas: [
      "Acero inoxidable austenítico terminado",
      "Aluminio metal de alta pureza"
    ]
  },
  {
    enunciado: "¿Qué describe la hidrometalurgia?",
    correcta: "Procesamiento mediante disoluciones acuosas con lixiviación y recuperación selectiva",
    incorrectas: [
      "Fundición de sulfuros a alta temperatura",
      "Reducción con coque en horno de cuba"
    ]
  },
  {
    enunciado: "¿Qué técnica combina extracción por disolventes y electrodeposición para cobre de óxidos?",
    correcta: "SX–EW (Solvent Extraction – Electrowinning)",
    incorrectas: [
      "Kroll–Pidgeon",
      "LD–BOF"
    ]
  },
  {
    enunciado: "¿Qué proceso produce níquel de alta pureza mediante carbonilos volátiles?",
    correcta: "Proceso Mond",
    incorrectas: [
      "Proceso Bayer",
      "Proceso Hall–Héroult"
    ]
  },
  {
    enunciado: "¿Cuál es la estructura cristalina que favorece mayor ductilidad típica en metales como Al o Cu?",
    correcta: "Cúbica centrada en las caras (CFC)",
    incorrectas: [
      "Cúbica centrada en el cuerpo (CCC)",
      "Hexagonal compacta siempre"
    ]
  },
  {
    enunciado: "¿Qué relaciona la ley de Hall–Petch?",
    correcta: "El aumento de resistencia con la reducción del tamaño de grano",
    incorrectas: [
      "La resistencia decrece al disminuir la densidad",
      "La dureza depende solo de la composición química"
    ]
  },
  {
    enunciado: "¿Qué propiedad mecánica se mide típicamente con ensayos Brinell, Vickers o Rockwell?",
    correcta: "La dureza",
    incorrectas: [
      "El módulo elástico",
      "La conductividad eléctrica"
    ]
  },
  {
    enunciado: "¿Cuál NO es un mecanismo de endurecimiento en metales?",
    correcta: "Aumento de temperatura de servicio sin cambio microestructural",
    incorrectas: [
      "Endurecimiento por deformación",
      "Refinamiento de grano"
    ]
  },
  {
    enunciado: "¿Qué define al recocido en tratamientos térmicos?",
    correcta: "Calentar y enfriar controladamente para ablandar y eliminar acritud",
    incorrectas: [
      "Enfriar bruscamente para formar martensita",
      "Aplicar nitruración para endurecer superficie"
    ]
  },
  {
    enunciado: "¿Qué diagrama explica fases y microconstituyentes en aleaciones binarias a equilibrio?",
    correcta: "El diagrama de equilibrio (p. ej., Fe–C)",
    incorrectas: [
      "El diagrama de Pourbaix",
      "El diagrama TTT exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué microestructura aparece típicamente en aceros hipoeutectoides tras enfriamiento lento desde austenita?",
    correcta: "Perlita y ferrita proeutectoide",
    incorrectas: [
      "Martensita integral",
      "Austenita estable a temperatura ambiente"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los aceros inoxidables austeníticos (AISI 3xx)?",
    correcta: "Alta resistencia a la corrosión por capa pasiva y estructura austenítica estable",
    incorrectas: [
      "Magnetismo intenso por ferrita dominante",
      "Elevado contenido de carbono para formar martensita"
    ]
  },
  {
    enunciado: "¿Qué define a una superaleación base níquel para alta temperatura?",
    correcta: "Endurecimiento por precipitados γ′/γ″ con gran resistencia al creep",
    incorrectas: [
      "Elevada solubilidad sólida a baja temperatura",
      "Baja resistencia específica y alta densidad de defectos"
    ]
  },
  {
    enunciado: "¿Qué designa la serie 7xxx en aleaciones de aluminio?",
    correcta: "Aleaciones Al–Zn–Mg de alta resistencia por envejecimiento",
    incorrectas: [
      "Aleaciones Al–Si fundición exclusivamente",
      "Aleaciones Al–Mn de soldabilidad extrema"
    ]
  },
  {
    enunciado: "¿Qué es el bronce en sentido clásico?",
    correcta: "Aleación de cobre con estaño",
    incorrectas: [
      "Aleación de cobre con cinc",
      "Aleación de hierro con carbono"
    ]
  },
  {
    enunciado: "¿Qué fenómeno busca el temple en aceros al carbono?",
    correcta: "Formar martensita mediante enfriamiento rápido desde austenita",
    incorrectas: [
      "Aumentar el tamaño de grano a alta temperatura",
      "Precipitar carburos gruesos durante el calentamiento"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene el revenido tras el temple?",
    correcta: "Recuperar tenacidad reduciendo tensiones y ajustando dureza",
    incorrectas: [
      "Incrementar aún más la acritud",
      "Disolver la martensita por completo en ferrita"
    ]
  },
  {
    enunciado: "¿Qué mecanismo gobierna la corrosión galvánica?",
    correcta: "Contacto eléctrico de dos metales con potenciales distintos en un electrolito",
    incorrectas: [
      "Oxidación por calentamiento en vacío",
      "Disolución por solventes orgánicos apolares"
    ]
  },
  {
    enunciado: "¿Qué herramienta ayuda a prever estabilidad de metales en medios acuosos según pH y potencial?",
    correcta: "Los diagramas de Pourbaix",
    incorrectas: [
      "Los diagramas Fe–C",
      "La regla de la palanca"
    ]
  },
  {
    enunciado: "¿Qué estrategia reduce la corrosión por picadura en aceros inoxidables en medio clorurado?",
    correcta: "Aumentar contenido de Mo y mantener la pasivación",
    incorrectas: [
      "Usar exclusivamente tratamientos térmicos sin cambiar composición",
      "Someter el acero a trabajo en caliente continuo"
    ]
  },
  {
    enunciado: "¿Qué técnica de protección aplica corriente para polarizar el metal hacia potencial menos corrosivo?",
    correcta: "Protección catódica",
    incorrectas: [
      "Temple superficial",
      "Normalizado"
    ]
  },
  {
    enunciado: "¿Cuál es una ventaja energética clave del aluminio reciclado frente al primario?",
    correcta: "Requiere una fracción muy pequeña de la energía del proceso Bayer–Hall–Héroult",
    incorrectas: [
      "Aumenta el consumo energético por la limpieza de chatarra",
      "No puede alcanzar purezas industriales"
    ]
  },
  {
    enunciado: "¿Qué parámetro de mercado se considera crítico para aleantes como Ni o Co?",
    correcta: "Riesgo de suministro por concentración geográfica y coproductos",
    incorrectas: [
      "Inexistencia de sustitutos en cualquier aplicación",
      "Precio fijo regulado internacionalmente"
    ]
  },
  {
    enunciado: "¿Qué proceso describe la solidificación direccional en fundición?",
    correcta: "Control del frente sólido–líquido para minimizar porosidad y segregación",
    incorrectas: [
      "Enfriamiento aleatorio para maximizar defectos",
      "Nucleación heterogénea impedida deliberadamente"
    ]
  },
  {
    enunciado: "¿Qué diferencia a la fabricación aditiva metálica (PBF/DED) de la colada convencional?",
    correcta: "Construye por capas permitiendo geometrías complejas y control local de microestructura",
    incorrectas: [
      "Impide el uso de superaleaciones",
      "No permite piezas densas"
    ]
  },
  {
    enunciado: "¿Qué describe el endurecimiento por precipitación en Al–Cu?",
    correcta: "Formación controlada de fases finas coherentes que obstaculizan el movimiento de dislocaciones",
    incorrectas: [
      "Disolución completa de precipitados a temperatura ambiente",
      "Aumento del tamaño de grano para elevar la resistencia"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el trabajo en frío sobre una lámina de Cu antes del recocido?",
    correcta: "Incrementa resistencia y dureza por acritud pero reduce ductilidad",
    incorrectas: [
      "Disminuye la densidad de dislocaciones",
      "Aumenta la tenacidad sin afectar ductilidad"
    ]
  },
  {
    enunciado: "¿Qué define a un metal de estructura CCC como el Fe α respecto a la temperatura ambiente?",
    correcta: "Mayor tendencia a transición dúctil-frágil respecto a CFC",
    incorrectas: [
      "Módulo elástico nulo",
      "Imposibilidad de formar soluciones sólidas"
    ]
  },
  {
    enunciado: "¿Qué combinación es típica del latón?",
    correcta: "Cobre y cinc",
    incorrectas: [
      "Cobre y estaño",
      "Hierro y carbono"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo de un recubrimiento por galvanizado en caliente?",
    correcta: "Proteger el acero mediante recubrimiento de zinc que ofrece protección barrera y catódica",
    incorrectas: [
      "Aumentar el contenido de carbono del acero",
      "Lograr templabilidad sin tratamientos térmicos"
    ]
  },
  {
    enunciado: "¿Qué propiedad se busca al usar Ti-6Al-4V en biomédica y aeronáutica?",
    correcta: "Alta relación resistencia/peso y excelente resistencia a la corrosión",
    incorrectas: [
      "Densidad muy alta y magnetismo intenso",
      "Baja biocompatibilidad y fluencia elevada"
    ]
  },
  {
    enunciado: "¿Qué define a un intermetálico como Ni₃Al frente a una solución sólida?",
    correcta: "Composición estequiométrica con estructura ordenada y propiedades a alta T",
    incorrectas: [
      "Cualquier mezcla aleatoria de elementos",
      "Fase amorfa sin orden de largo alcance"
    ]
  },
  {
    enunciado: "¿Qué es la metalurgia de polvos (PM)?",
    correcta: "Conformado y sinterizado de polvos metálicos para obtener piezas densas",
    incorrectas: [
      "Un método exclusivo de colada a presión",
      "Una técnica solo válida para polímeros termoplásticos"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la presencia de cloruros sobre aceros inoxidables austeníticos?",
    correcta: "Favorece la picadura si se pierde la pasivación",
    incorrectas: [
      "Mejora la resistencia general a la corrosión",
      "Evita cualquier tipo de corrosión intergranular"
    ]
  },
  {
    enunciado: "¿Qué combina la economía circular aplicada a metales?",
    correcta: "Diseño, uso eficiente, reciclabilidad y recuperación de valor al final de vida",
    incorrectas: [
      "Descarte de chatarra sin separación",
      "Sustitución completa por materiales no reciclables"
    ]
  },
  {
    enunciado: "¿Qué ruta emergente busca descarbonizar la producción de hierro primario?",
    correcta: "Reducción directa con hidrógeno para producir DRI y posterior fusión",
    incorrectas: [
      "Oxidación directa del Fe a temperaturas criogénicas",
      "Electrólisis del aire a presión atmosférica"
    ]
  }
];
