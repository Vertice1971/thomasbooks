// temarios/47-elementos-no-metalicos-obtencion-propiedades-y-compuestos-principales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo general distingue a muchos no metales frente a los metales?",
    correcta: "Elevada electronegatividad y tendencia a formar enlaces covalentes u aniones",
    incorrectas: [
      "Baja energía de ionización y tendencia a formar cationes metálicos",
      "Altísima conductividad eléctrica por electrones deslocalizados"
    ]
  },
  {
    enunciado: "¿Cuál es la vía industrial más extendida para producir amoníaco?",
    correcta: "Proceso Haber-Bosch a partir de N₂ e H₂ sobre un catalizador de hierro",
    incorrectas: [
      "Descomposición térmica de nitratos a baja temperatura",
      "Electrólisis directa del aire en presencia de agua"
    ]
  },
  {
    enunciado: "En el reformado con vapor, el hidrógeno se obtiene principalmente a partir de:",
    correcta: "Metano o gas natural, seguido de reacción shift CO + H₂O → CO₂ + H₂",
    incorrectas: [
      "Disociación térmica de N₂ a presión ambiente",
      "Oxidación de Na a Na₂O con agua"
    ]
  },
  {
    enunciado: "En electrólisis de salmuera (proceso cloro-sosa) se generan, respectivamente en ánodo y cátodo:",
    correcta: "Cl₂ y H₂, con formación de NaOH en la disolución",
    incorrectas: [
      "H₂ y Cl₂, con formación de HCl en la disolución",
      "Na metálico y Cl₂, con NaCl sólido como subproducto"
    ]
  },
  {
    enunciado: "¿Qué explicación justifica que HF sea un ácido más débil en agua que HCl, HBr o HI?",
    correcta: "El enlace H–F es muy fuerte y la hidratación estabiliza parcialmente a HF no disociado",
    incorrectas: [
      "El flúor es menos electronegativo que el cloro",
      "HF no forma puentes de hidrógeno en agua"
    ]
  },
  {
    enunciado: "Ordena la acidez de los hidrácidos HX en agua (X = F, Cl, Br, I):",
    correcta: "HI > HBr > HCl >> HF",
    incorrectas: [
      "HF > HCl > HBr > HI",
      "HCl > HI > HBr > HF"
    ]
  },
  {
    enunciado: "¿Qué método industrial clásico produce oxígeno de alta pureza?",
    correcta: "Destilación fraccionada de aire licuado",
    incorrectas: [
      "Reducción carbotérmica de óxidos",
      "Disolución de cal en agua"
    ]
  },
  {
    enunciado: "El azufre elemental se recupera masivamente a partir de H₂S en refinerías mediante:",
    correcta: "Proceso Claus (oxidación parcial y conversión a S₈)",
    incorrectas: [
      "Proceso Hall-Héroult",
      "Proceso Ostwald"
    ]
  },
  {
    enunciado: "¿Qué secuencia corresponde al proceso de contacto para fabricar ácido sulfúrico?",
    correcta: "SO₂ → (V₂O₅) → SO₃ → oleum/absorción → H₂SO₄",
    incorrectas: [
      "SO₃ → SO₂ → S → H₂SO₄",
      "S → H₂S → SO₃ → H₂SO₄"
    ]
  },
  {
    enunciado: "En el proceso Ostwald, el reactivo de partida y el producto principal son:",
    correcta: "NH₃ y HNO₃, respectivamente",
    incorrectas: [
      "N₂ y HNO₂",
      "NO₂ y NH₄NO₃ como producto directo"
    ]
  },
  {
    enunciado: "Una característica general de los halógenos es que:",
    correcta: "Son potentes agentes oxidantes cuya reactividad decrece de F₂ a I₂",
    incorrectas: [
      "Forman cationes halógeno estables en agua",
      "Presentan reactividad creciente de F₂ a I₂"
    ]
  },
  {
    enunciado: "¿Qué especie interhalógena es estable y fuertemente reactiva como fluorante?",
    correcta: "ClF₃",
    incorrectas: [
      "BrClO",
      "HI₂"
    ]
  },
  {
    enunciado: "El cloro se usa en desinfección de aguas porque:",
    correcta: "Oxida especies biológicas y forma hipoclorito en equilibrio",
    incorrectas: [
      "Disminuye el pH hasta 1 en cualquier concentración",
      "Es un agente reductor fuerte en medio acuoso"
    ]
  },
  {
    enunciado: "¿Cuál es el principal alótropo del oxígeno a condiciones ambientales y su propiedad?",
    correcta: "O₂, gas diatómico oxidante",
    incorrectas: [
      "O₃, gas diamagnético altamente inerte",
      "O, átomo monoatómico estable en aire"
    ]
  },
  {
    enunciado: "El nitrógeno molecular es químicamente poco reactivo porque:",
    correcta: "Posee un fuerte triple enlace N≡N con alta energía de disociación",
    incorrectas: [
      "Es un gas noble con capa completa",
      "Tiene baja energía de ionización"
    ]
  },
  {
    enunciado: "¿Qué afirma correctamente sobre fósforo blanco y rojo?",
    correcta: "P blanco es más reactivo y pirofórico; P rojo es polimérico y menos reactivo",
    incorrectas: [
      "P rojo es más tóxico y volátil que P blanco",
      "Ambos tienen idénticas propiedades y reactividad"
    ]
  },
  {
    enunciado: "El dióxido de carbono en agua forma principalmente:",
    correcta: "Ácido carbónico en equilibrio con CO₂(aq) y bicarbonato",
    incorrectas: [
      "Ácido oxálico en una sola etapa",
      "Carbonato sódico automáticamente"
    ]
  },
  {
    enunciado: "¿Qué diferencia estructural esencial separa diamante de grafito?",
    correcta: "Diamante: red 3D sp³; grafito: capas 2D sp² con π deslocalizado",
    incorrectas: [
      "Diamante: sp² y grafito: sp³",
      "Ambos son amorfos sin orden de largo alcance"
    ]
  },
  {
    enunciado: "El silicio de grado electrónico se purifica típicamente por:",
    correcta: "Proceso Siemens y crecimiento Czochralski/Zona flotante",
    incorrectas: [
      "Electrólisis acuosa directa de SiO₂",
      "Destilación fraccionada de silicatos fundidos"
    ]
  },
  {
    enunciado: "¿Qué compuesto de xenón existe y es un fuerte fluorante?",
    correcta: "XeF₂ (también XeF₄, XeF₆ en condiciones controladas)",
    incorrectas: [
      "HeF₂",
      "NeO₂"
    ]
  },
  {
    enunciado: "¿Cuál es una aplicación típica de argón en laboratorio o industria?",
    correcta: "Atmósfera inerte para soldadura o síntesis sensibles al aire",
    incorrectas: [
      "Oxidante fuerte para limpieza de superficies",
      "Agente reductor para obtener Na de NaCl"
    ]
  },
  {
    enunciado: "En términos de oxoácidos del cloro, el estado de oxidación +7 corresponde a:",
    correcta: "Ácido perclórico (HClO₄) y percloratos",
    incorrectas: [
      "Ácido hipocloroso (HClO)",
      "Cloruro de hidrógeno (HCl)"
    ]
  },
  {
    enunciado: "¿Qué parámetro explica el aumento de puntos de ebullición al descender en el grupo de halógenos?",
    correcta: "Mayor polarizabilidad y fuerzas de dispersión",
    incorrectas: [
      "Disminución del tamaño atómico",
      "Formación de enlaces metálicos"
    ]
  },
  {
    enunciado: "Una prueba clásica para almidón en presencia de yodo produce:",
    correcta: "Complejo azul intenso por inclusión de I₃⁻/I₅⁻ en la amilosa",
    incorrectas: [
      "Precipitado rojo de I₂ metálico",
      "Desaparición de color por reducción a I⁻ incoloro sin cambio"
    ]
  },
  {
    enunciado: "En iodometría se cuantifica típicamente:",
    correcta: "Oxidantes que liberan I₂, valorado con tiosulfato",
    incorrectas: [
      "Reductores que precipitan I₂ como sólido estable",
      "Sales inorgánicas por precipitación de HI insoluble"
    ]
  },
  {
    enunciado: "¿Qué propiedad de los no metales explica su mala conductividad eléctrica en estado puro?",
    correcta: "Ausencia de electrones deslocalizados en bandas parcialmente ocupadas",
    incorrectas: [
      "Presencia de iones metálicos móviles",
      "Estructura CCC con alta densidad de estados metálicos"
    ]
  },
  {
    enunciado: "La estabilidad de los oxoaniones suele aumentar cuando:",
    correcta: "La carga negativa se deslocaliza por resonancia y el átomo central tiene alto estado de oxidación",
    incorrectas: [
      "La estructura carece de resonancia",
      "El átomo central está en estado de oxidación muy bajo"
    ]
  },
  {
    enunciado: "El ozono (O₃) frente a O₂ se caracteriza por:",
    correcta: "Ser más oxidante y menos estable, con geometría angular",
    incorrectas: [
      "Ser menos oxidante y lineal",
      "Ser diamagnético y más estable que O₂"
    ]
  },
  {
    enunciado: "¿Qué compuesto ilustra el comportamiento anfótero del aluminio en medio acuoso?",
    correcta: "Al(OH)₃, que disuelve tanto en ácido como en base formando [Al(H₂O)₆]³⁺ y [Al(OH)₄]⁻",
    incorrectas: [
      "AlCl₃, insoluble en cualquier medio",
      "Al₂O₃, exclusivamente básico en agua"
    ]
  },
  {
    enunciado: "¿Qué afirmación correcta sobre los oxoácidos de nitrógeno?",
    correcta: "HNO₃ es un oxidante fuerte; HNO₂ es menos estable y puede actuar como reductor u oxidante",
    incorrectas: [
      "HNO₂ es más fuerte y estable que HNO₃",
      "Ninguno presenta propiedades oxidantes"
    ]
  },
  {
    enunciado: "El yodo se obtiene industrialmente con frecuencia a partir de:",
    correcta: "Salmueras yodadas y yacimientos de caliche",
    incorrectas: [
      "Electrólisis de KI sólido sin disolvente",
      "Reducción carbotérmica de I₂O₅"
    ]
  },
  {
    enunciado: "El bromo elemental a temperatura ambiente es:",
    correcta: "Un líquido rojo parduzco de fuerte volatilidad y reactividad",
    incorrectas: [
      "Un gas incoloro noble",
      "Un sólido metálico brillante"
    ]
  },
  {
    enunciado: "En agua, el cloro gaseoso genera principalmente:",
    correcta: "HOCl y Cl⁻ en equilibrio (formación de hipoclorito)",
    incorrectas: [
      "Cl₂O exclusivamente estable",
      "HClO₄ directamente"
    ]
  },
  {
    enunciado: "¿Qué describe mejor a los compuestos de selenio respecto a los de azufre?",
    correcta: "Suelen ser más pesados y con mayor polarizabilidad, con química análoga pero menos extendida",
    incorrectas: [
      "Carecen por completo de estados de oxidación positivos",
      "Son siempre más estables termodinámicamente"
    ]
  },
  {
    enunciado: "Una aplicación sanitaria clásica de compuestos de cloro es:",
    correcta: "Desinfección de agua potable mediante hipoclorito",
    incorrectas: [
      "Reducción selectiva de nitratos a amoníaco en sangre",
      "Aumento de la alcalinidad del suelo por cloruros"
    ]
  },
  {
    enunciado: "El helio líquido se usa principalmente por:",
    correcta: "Su bajísima temperatura de ebullición útil en criogenia (MRI y física de bajas T)",
    incorrectas: [
      "Ser un oxidante criogénico excelente",
      "Formar hidratos estables a temperatura ambiente"
    ]
  },
  {
    enunciado: "¿Qué parámetro ambiental crítico debe controlarse en la fabricación de H₂SO₄ y HNO₃?",
    correcta: "Emisiones de SOₓ/NOₓ y su abatimiento",
    incorrectas: [
      "Emisión de Ar y Ne por encima de límites tóxicos",
      "Generación directa de O₃ en torre de absorción"
    ]
  },
  {
    enunciado: "En silicatos y vidrio, el componente formador de red más común es:",
    correcta: "SiO₂",
    incorrectas: [
      "CO₂",
      "Cl₂"
    ]
  },
  {
    enunciado: "La seguridad al trabajar con cloro y flúor exige, entre otras cosas:",
    correcta: "Sistemas de ventilación, detección de fugas y EPP resistente a agentes corrosivos",
    incorrectas: [
      "Ambiente reductor y llama abierta para neutralizar fugas",
      "Uso de recipientes de vidrio delgado sin protección"
    ]
  },
  {
    enunciado: "¿Qué rol juega el amoníaco en el ciclo de fertilizantes nitrogenados?",
    correcta: "Precursor directo de nitratos/urea vía procesos Ostwald y síntesis de urea",
    incorrectas: [
      "Producto final que no se transforma",
      "Agente oxidante para convertir NO₂ en N₂"
    ]
  },
  {
    enunciado: "Una razón por la que el CO es un reductor eficaz en metalurgia es:",
    correcta: "Se oxida a CO₂ liberando energía y retirando oxígeno de los óxidos",
    incorrectas: [
      "Se reduce a C elemental absorbiendo oxígeno",
      "No reacciona con óxidos a altas temperaturas"
    ]
  }
];
