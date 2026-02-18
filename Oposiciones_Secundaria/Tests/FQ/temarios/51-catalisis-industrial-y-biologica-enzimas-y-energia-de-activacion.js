// temarios/51-catalisis-industrial-y-biologica-enzimas-y-energia-de-activacion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué cambia un catalizador en una reacción química?",
    correcta: "La velocidad al reducir la energía de activación sin alterar K ni ΔG°",
    incorrectas: [
      "El equilibrio termodinámico hacia los productos",
      "El calor de reacción haciéndolo más exotérmico"
    ]
  },
  {
    enunciado: "La relación de Eyring para la constante de velocidad puede escribirse como:",
    correcta: "k = (kB·T/h)·exp(ΔS‡/R)·exp(−ΔH‡/RT)",
    incorrectas: [
      "k = A·exp(+Ea/RT)",
      "k = (h/kB·T)·exp(−ΔG°/RT)"
    ]
  },
  {
    enunciado: "En catálisis, TON y TOF significan respectivamente:",
    correcta: "Número de recambios totales y frecuencia de recambio (s⁻¹)",
    incorrectas: [
      "Tiempo de operación normal y factor de temperatura",
      "Tensión operativa nominal y tasa de flujo"
    ]
  },
  {
    enunciado: "El principio de Sabatier sugiere que la actividad catalítica óptima ocurre cuando:",
    correcta: "La interacción adsorbato–catalizador tiene fuerza intermedia",
    incorrectas: [
      "La adsorción es lo más débil posible",
      "La adsorción es tan fuerte que impide la desorción"
    ]
  },
  {
    enunciado: "Las relaciones Brønsted–Evans–Polanyi (BEP) conectan:",
    correcta: "Energía de activación y energía de reacción a lo largo de una familia de reacciones",
    incorrectas: [
      "Constante de equilibrio con calor de vaporización",
      "Capacidad calorífica con entalpía de formación"
    ]
  },
  {
    enunciado: "En catálisis homogénea, ¿qué paso aumenta el estado de oxidación del metal?",
    correcta: "La adición oxidativa",
    incorrectas: [
      "La eliminación reductiva",
      "La inserción migratoria"
    ]
  },
  {
    enunciado: "¿Cuál es una desventaja típica de la catálisis homogénea frente a la heterogénea?",
    correcta: "Separación y reciclado del catalizador más difíciles",
    incorrectas: [
      "Imposibilidad de obtener alta selectividad",
      "No opera a temperaturas moderadas"
    ]
  },
  {
    enunciado: "En catálisis heterogénea, la isoterma de Langmuir asume:",
    correcta: "Sitios equivalentes, monocapa y adsorción sin interacciones laterales",
    incorrectas: [
      "Multicapa infinita a cualquier presión",
      "Desorción imposible a altas coberturas"
    ]
  },
  {
    enunciado: "Un mecanismo Langmuir–Hinshelwood implica que:",
    correcta: "Ambos reactivos se adsorben antes de reaccionar sobre la superficie",
    incorrectas: [
      "Sólo uno reacciona desde la fase gas con un adsorbato (Eley–Rideal)",
      "No hay adsorción previa en la superficie"
    ]
  },
  {
    enunciado: "¿Qué proceso industrial usa Fe como catalizador con promotores K/Al2O3?",
    correcta: "Síntesis de amoníaco (Haber–Bosch)",
    incorrectas: [
      "Proceso Wacker para oxidación de etileno",
      "Metatesis olefínica con Ru"
    ]
  },
  {
    enunciado: "Un catalizador automotriz TWC típico contiene:",
    correcta: "Pt–Pd–Rh sobre soporte cerámico",
    incorrectas: [
      "FeS disuelto en ácido",
      "NaCl cristalino en monolito"
    ]
  },
  {
    enunciado: "La desactivación por coque en un catalizador suele revertirse mediante:",
    correcta: "Oxidación controlada (regeneración) a temperatura moderada",
    incorrectas: [
      "Añadiendo venenos como S para estabilizar la superficie",
      "Lavado con agua destilada fría"
    ]
  },
  {
    enunciado: "El módulo de Thiele (ϕ) y el criterio de Weisz–Prater (C_WP) se usan para:",
    correcta: "Diagnosticar limitaciones difusionales internas y externas",
    incorrectas: [
      "Medir el pH enzimático óptimo",
      "Calcular la constante de equilibrio"
    ]
  },
  {
    enunciado: "Un veneno típico de metales nobles en hidrogenación es:",
    correcta: "El azufre (H2S, compuestos sulfurosos)",
    incorrectas: [
      "El nitrógeno molecular a baja presión",
      "El helio inerte"
    ]
  },
  {
    enunciado: "La ecuación de Arrhenius linealizada da en la pendiente de ln k vs 1/T:",
    correcta: "−Ea/R",
    incorrectas: [
      "−ΔS‡/R",
      "ln(kB/h)"
    ]
  },
  {
    enunciado: "Relación aproximada entre parámetros de Arrhenius y de Eyring:",
    correcta: "Ea ≈ ΔH‡ + RT; A ≈ (kB·T/h)·e^{ΔS‡/R}",
    incorrectas: [
      "Ea = ΔG°; A = e^{ΔH‡/RT}",
      "Ea ≈ −ΔS‡·T; A constante universal"
    ]
  },
  {
    enunciado: "Las enzimas son catalizadores que destacan por:",
    correcta: "Alta especificidad y eficiencias kcat/KM muy elevadas",
    incorrectas: [
      "Elevar la energía libre estándar ΔG°",
      "Consumirse estequiométricamente"
    ]
  },
  {
    enunciado: "En Michaelis–Menten, KM es:",
    correcta: "La [S] que da v = Vmax/2 (condiciones estándar)",
    incorrectas: [
      "La velocidad máxima",
      "El orden de reacción global"
    ]
  },
  {
    enunciado: "La eficiencia catalítica se cuantifica comúnmente como:",
    correcta: "kcat/KM",
    incorrectas: [
      "KM/kcat",
      "Vmax·KM"
    ]
  },
  {
    enunciado: "Una inhibición competitiva pura produce:",
    correcta: "Aumento aparente de KM sin cambio en Vmax",
    incorrectas: [
      "Disminución de Vmax sin cambio en KM",
      "Aumento simultáneo de KM y Vmax"
    ]
  },
  {
    enunciado: "En inhibición no competitiva ideal se observa:",
    correcta: "Disminución de Vmax con KM inalterado",
    incorrectas: [
      "KM disminuye y Vmax aumenta",
      "Ambos parámetros incrementan"
    ]
  },
  {
    enunciado: "El modelo de ajuste inducido (Koshland) propone que:",
    correcta: "El sitio activo cambia de conformación al unirse el sustrato",
    incorrectas: [
      "El sustrato se adapta exclusivamente al sitio rígido (llave-cerradura)",
      "La enzima no forma complejos ES intermedios"
    ]
  },
  {
    enunciado: "El pH afecta a las enzimas porque:",
    correcta: "Modifica la ionización de residuos catalíticos y la estabilidad del sitio activo",
    incorrectas: [
      "Sólo altera la viscosidad del medio sin efecto catalítico",
      "Cambia ΔG° de la reacción catalizada"
    ]
  },
  {
    enunciado: "Un cofactor metálico frecuente en metaloenzimas es:",
    correcta: "Zn²⁺ (por ejemplo en anhidrasa carbónica)",
    incorrectas: [
      "Ne (gas noble)",
      "Ag⁰ coloidal como coenzima universal"
    ]
  },
  {
    enunciado: "En cinética enzimática, kcat representa:",
    correcta: "La constante de recambio a saturación (s⁻¹)",
    incorrectas: [
      "La constante de Michaelis",
      "La constante de equilibrio de ES ⇌ E + S"
    ]
  },
  {
    enunciado: "Para mecanismos multiesustrato, un esquema ping–pong (double displacement) se caracteriza por:",
    correcta: "Formación de un intermediario covalente y liberación del primer producto antes de que entre el segundo sustrato",
    incorrectas: [
      "Un complejo ternario obligatorio E·A·B",
      "Inhibición competitiva con ambos sustratos"
    ]
  },
  {
    enunciado: "La inmovilización enzimática permite:",
    correcta: "Reutilizar la enzima y mejorar estabilidad operativa",
    incorrectas: [
      "Aumentar siempre KM por definición",
      "Imposibilitar la transferencia de masa"
    ]
  },
  {
    enunciado: "En catálisis heterogénea, la selección de soporte (p. ej., Al2O3, SiO2, TiO2) influye en:",
    correcta: "Dispersión de fase activa y acidez/basidad de la superficie",
    incorrectas: [
      "Únicamente en el color del catalizador",
      "Exclusivamente en la presión de operación"
    ]
  },
  {
    enunciado: "La reducción catalítica selectiva (SCR) de NOx utiliza típicamente:",
    correcta: "V2O5–WO3/TiO2 y NH3 como reductor",
    incorrectas: [
      "NaCl sólido y H2",
      "Fe2O3 puro sin reductor"
    ]
  },
  {
    enunciado: "Un “hot spot” en un lecho catalítico indica:",
    correcta: "Acumulación de calor por reacción exotérmica y posible limitación de transferencia",
    incorrectas: [
      "Una zona de cristalización endotérmica",
      "Que el catalizador está siempre inactivo"
    ]
  },
  {
    enunciado: "El postulado de Hammond aplicado a catálisis sugiere que:",
    correcta: "El estado de transición se parece al estado (reactivos o productos) más cercano en energía",
    incorrectas: [
      "El estado de transición es idéntico a los productos",
      "La energía de activación es igual a ΔG°"
    ]
  },
  {
    enunciado: "Un efecto isotópico cinético primario grande (H→D) sugiere que:",
    correcta: "Se rompe/formaliza un enlace X–H en el paso limitante",
    incorrectas: [
      "El paso limitante es difusión pura",
      "No hay participación de enlaces a hidrógeno"
    ]
  },
  {
    enunciado: "¿Qué técnica de superficie ayuda a cuantificar sitios activos por quimisorción?",
    correcta: "TPD/TPR/TPO y quimisorción de sondas (p. ej., H2, CO)",
    incorrectas: [
      "Polarimetría óptica de azúcares",
      "Cromatografía en capa fina"
    ]
  },
  {
    enunciado: "En un gráfico de Lineweaver–Burk de inhibición competitiva, las rectas:",
    correcta: "Cortan el eje 1/V en el mismo punto (Vmax constante) y varía la pendiente",
    incorrectas: [
      "Tienen la misma pendiente y distinto 1/Vmax",
      "Son paralelas en todos los casos"
    ]
  },
  {
    enunciado: "Una ventaja de la biocatálisis frente a rutas puramente químicas suele ser:",
    correcta: "Alta enantioselectividad y condiciones suaves",
    incorrectas: [
      "Necesidad obligatoria de metales nobles caros",
      "Imposibilidad de operar en continuo"
    ]
  },
  {
    enunciado: "La energía de activación aparente en procesos con limitación difusional suele ser:",
    correcta: "Más baja que la intrínseca (pendiente Arrhenius reducida)",
    incorrectas: [
      "Siempre mayor que 200 kJ·mol⁻¹",
      "Independiente de la transferencia de masa"
    ]
  },
  {
    enunciado: "En catálisis por ácidos sólidos (p. ej., zeolitas), un rasgo clave de selectividad proviene de:",
    correcta: "Efecto de forma (tamaño de poro/cavidades) y acidez de Brønsted/Lewis",
    incorrectas: [
      "Exclusivamente de la conductividad eléctrica del sólido",
      "Del color del material"
    ]
  },
  {
    enunciado: "La reacción Wacker (PdCl2/CuCl2) convierte etileno en:",
    correcta: "Acetaldehído por oxidación en fase homogénea",
    incorrectas: [
      "Polietileno por polimerización radical",
      "Etano por hidrogenación"
    ]
  },
  {
    enunciado: "La metatesis de olefinas catalizada por Ru (Grubbs) se basa en:",
    correcta: "Intercambio de fragmentos alquilideno vía metalociclo",
    incorrectas: [
      "Oxidación directa a dióxidos",
      "Adición radicalaria anti-Markovnikov"
    ]
  },
  {
    enunciado: "Una causa común de sinterización de metales soportados es:",
    correcta: "Temperaturas altas que favorecen la coalescencia de partículas",
    incorrectas: [
      "pH neutro en disolución",
      "Presencia de argón como gas portador"
    ]
  },
  {
    enunciado: "En un diseño de reactor para reacciones paralelas A→B y A→C (ambas 1º orden), para maximizar B conviene:",
    correcta: "Usar tiempos de residencia que favorezcan la ruta con mayor k selectiva y condiciones que inhiban la otra",
    incorrectas: [
      "Aumentar indefinidamente la temperatura",
      "Trabajar siempre en CSTR sin considerar selectividad"
    ]
  }
];
