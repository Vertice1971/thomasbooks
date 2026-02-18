// temarios/45-teoria-de-bandas-conductores-semiconductores-y-superconductores.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué relación básica conecta conductividad (σ), densidades de portadores y movilidades en un semiconductor?",
    correcta: "σ = q·(n·μₙ + p·μₚ)",
    incorrectas: [
      "σ = (n + p)/(q·μₙ·μₚ)",
      "σ = q·(μₙ + μₚ)/(n·p)"
    ]
  },
  {
    enunciado: "¿Qué mejora introduce el modelo de Drude–Sommerfeld respecto a Drude?",
    correcta: "Usa estadística de Fermi-Dirac para electrones cuánticos en vez de un gas clásico",
    incorrectas: [
      "Considera que no hay colisiones con fonones",
      "Sustituye electrones por huecos en metales"
    ]
  },
  {
    enunciado: "¿Qué establece el teorema de Bloch en un sólido cristalino?",
    correcta: "Que los autovalores pueden escribirse como ondas planeadas moduladas por una función periódica del retículo",
    incorrectas: [
      "Que los electrones están estrictamente localizados en átomos",
      "Que toda banda está completamente llena a 0 K"
    ]
  },
  {
    enunciado: "¿Qué es la primera zona de Brillouin?",
    correcta: "La celda de Wigner-Seitz en el espacio recíproco",
    incorrectas: [
      "La región del espacio real donde se localiza un electrón",
      "La zona prohibida entre dos bandas energéticas"
    ]
  },
  {
    enunciado: "En E(k), ¿qué indica una gran curvatura de la banda cerca del mínimo?",
    correcta: "Masa efectiva pequeña y alta movilidad potencial",
    incorrectas: [
      "Masa efectiva grande y baja movilidad",
      "Que la banda está completamente llena"
    ]
  },
  {
    enunciado: "¿Qué magnitud describe cuántos estados electrónicos hay por unidad de energía?",
    correcta: "La densidad de estados (DOS)",
    incorrectas: [
      "La función de distribución de Maxwell-Boltzmann",
      "El factor de forma cristalino"
    ]
  },
  {
    enunciado: "¿Cómo se define el nivel de Fermi a 0 K?",
    correcta: "La energía por debajo de la cual todos los estados están ocupados y por encima desocupados",
    incorrectas: [
      "La energía media de todas las bandas",
      "La energía mínima de la banda de conducción"
    ]
  },
  {
    enunciado: "Según teoría de bandas, ¿qué caracteriza a un metal?",
    correcta: "Banda parcialmente llena o solapamiento valencia-conducción",
    incorrectas: [
      "Brecha prohibida muy grande",
      "Ausencia de electrones móviles a cualquier temperatura"
    ]
  },
  {
    enunciado: "¿Qué condición típica presenta un aislante ideal?",
    correcta: "Brecha energética grande que impide excitación térmica de portadores",
    incorrectas: [
      "Banda de conducción parcialmente ocupada",
      "Nivel de Fermi cruzando una banda dispersiva"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un semiconductor intrínseco?",
    correcta: "Su concentración de electrones y huecos es igual (n = p = nᵢ)",
    incorrectas: [
      "Presenta únicamente huecos como portadores",
      "No depende de la temperatura"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre un semiconductor directo (p. ej., GaAs) y uno indirecto (p. ej., Si)?",
    correcta: "En el directo, los máximos y mínimos de banda están al mismo k y las transiciones ópticas no requieren fonón",
    incorrectas: [
      "En el directo, la brecha es mayor por definición",
      "En el indirecto, la luz siempre se amplifica espontáneamente"
    ]
  },
  {
    enunciado: "¿Cómo varía típicamente σ con T en un metal frente a un semiconductor extrínseco?",
    correcta: "Disminuye con T en metales (más dispersión) y aumenta con T en semiconductores (más portadores)",
    incorrectas: [
      "Aumenta con T en ambos",
      "Disminuye con T en ambos"
    ]
  },
  {
    enunciado: "¿Qué aporta el dopaje tipo n a un semiconductor?",
    correcta: "Introduce donores que aumentan la concentración de electrones",
    incorrectas: [
      "Introduce aceptores que aumentan p",
      "Reduce la movilidad de los electrones a cero"
    ]
  },
  {
    enunciado: "¿Qué aporta el dopaje tipo p a un semiconductor?",
    correcta: "Introduce aceptores que incrementan la concentración de huecos",
    incorrectas: [
      "Introduce donores que incrementan n",
      "Convierte al material en aislante perfecto"
    ]
  },
  {
    enunciado: "¿Cómo depende la concentración intrínseca nᵢ de la brecha Eg?",
    correcta: "nᵢ ∝ exp(−Eg / 2kT)",
    incorrectas: [
      "nᵢ ∝ Eg·T",
      "nᵢ independiente de Eg"
    ]
  },
  {
    enunciado: "¿Qué revela el signo de la tensión Hall en una muestra uniforme?",
    correcta: "El tipo de portador dominante (electrones o huecos)",
    incorrectas: [
      "La masa molar del elemento mayoritario",
      "El número de defectos puntuales exacto"
    ]
  },
  {
    enunciado: "¿Qué es la región de deplexión en una unión p-n?",
    correcta: "Zona casi sin portadores libres con campo interno y barrera de potencial",
    incorrectas: [
      "Región con máxima concentración de portadores",
      "Capa metálica depositada sobre el semiconductor"
    ]
  },
  {
    enunciado: "Bajo polarización directa, un diodo ideal:",
    correcta: "Reduce la barrera en la unión p-n y permite gran corriente",
    incorrectas: [
      "Aumenta la barrera y bloquea la corriente",
      "Se comporta como una resistencia negativa perfecta siempre"
    ]
  },
  {
    enunciado: "Para emisión eficiente en un LED, conviene usar:",
    correcta: "Un semiconductor de brecha directa",
    incorrectas: [
      "Un semiconductor de brecha indirecta sin cavidad óptica",
      "Un metal con banda parcialmente ocupada"
    ]
  },
  {
    enunciado: "En un MOSFET de canal n, ¿qué efecto tiene superar la tensión umbral Vₜ en la puerta?",
    correcta: "Se forma un canal de inversión electrónico que permite el flujo entre drenador y fuente",
    incorrectas: [
      "Se destruye la unión p-n por avalancha irreversible",
      "Convierte el dispositivo en un diodo Zener"
    ]
  },
  {
    enunciado: "¿Qué permiten las heteroestructuras y los pozos cuánticos en semiconductores?",
    correcta: "Confinar portadores y diseñar niveles discretos para láseres o detectores",
    incorrectas: [
      "Eliminar cualquier dispersión por fonones",
      "Sustituir la banda de valencia por una aislante"
    ]
  },
  {
    enunciado: "¿Qué mide el coeficiente Seebeck en un material?",
    correcta: "La tensión desarrollada por gradiente térmico (potencia termoeléctrica) y su signo indica el tipo de portador",
    incorrectas: [
      "La energía de gap óptico",
      "La longitud de coherencia superconductora"
    ]
  },
  {
    enunciado: "¿Qué técnica permite mapear E(k) en la superficie de Fermi?",
    correcta: "Espectroscopía de fotoemisión angularmente resuelta (ARPES)",
    incorrectas: [
      "Difracción de rayos X de polvo",
      "Termogravimetría (TGA)"
    ]
  },
  {
    enunciado: "En la dinámica semiclasica, la velocidad de grupo de un electrón en banda viene dada por:",
    correcta: "v = (1/ħ)·∇ₖE(k)",
    incorrectas: [
      "v = ħ·k/m₀ siempre",
      "v = −∂E/∂t"
    ]
  },
  {
    enunciado: "En un semiconductor, ¿cómo varía cualitativamente la movilidad con T por diferentes mecanismos?",
    correcta: "Dispersión por impurezas: μ ↑ con T; por fonones: μ ↓ con T",
    incorrectas: [
      "Ambas dispersión hacen μ independiente de T",
      "Ambas producen μ ↑ con T"
    ]
  },
  {
    enunciado: "¿Qué describe correctamente la superconductividad por debajo de T_c?",
    correcta: "Resistencia eléctrica nula y expulsión de campo magnético (efecto Meissner)",
    incorrectas: [
      "Resistencia nula pero campo magnético atrapado como en un metal perfecto",
      "Solo disminución parcial de la resistividad"
    ]
  },
  {
    enunciado: "¿Cuál es el cuanto de flujo magnético en un superconductor?",
    correcta: "Φ₀ = h/2e",
    incorrectas: [
      "Φ₀ = h/e",
      "Φ₀ = k_B·T_c"
    ]
  },
  {
    enunciado: "¿Qué distingue a los superconductores tipo II?",
    correcta: "Permiten penetración de flujo en forma de vórtices entre Hc₁ y Hc₂",
    incorrectas: [
      "Expulsan totalmente el flujo para cualquier campo",
      "No presentan efecto Meissner"
    ]
  },
  {
    enunciado: "En la teoría BCS, los pares de Cooper se forman por:",
    correcta: "Interacción atractiva efectiva mediada por fonones entre electrones de espines opuestos",
    incorrectas: [
      "Atracción coulombiana directa entre electrones",
      "Alineamiento ferromagnético de espines por intercambio"
    ]
  },
  {
    enunciado: "¿Cómo se comporta la brecha superconductora Δ(T)?",
    correcta: "Es finita a T = 0 y se cierra continuamente al aproximarse a T_c",
    incorrectas: [
      "Aumenta linealmente con T",
      "Es independiente de la temperatura"
    ]
  },
  {
    enunciado: "¿Qué establece el efecto Josephson en una unión SIS ideal?",
    correcta: "Existe corriente super sin diferencia de potencial (corriente DC Josephson) hasta una amplitud crítica",
    incorrectas: [
      "No puede fluir corriente sin voltaje en ningún caso",
      "Solo se observa a temperaturas por encima de T_c"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza un SQUID?",
    correcta: "Para detectar campos magnéticos extremadamente débiles mediante interferencia de fase superconductora",
    incorrectas: [
      "Para medir directamente la masa del electrón",
      "Para aumentar la brecha Eg de un semiconductor"
    ]
  },
  {
    enunciado: "¿Cuál es una limitación práctica común de los superconductores en tecnología?",
    correcta: "La necesidad de criogenia (He o N₂ líquido) y el anclaje de vórtices para altas corrientes",
    incorrectas: [
      "La imposibilidad de fabricarlos en forma de cable",
      "Que todos son metales dúctiles de baja resistencia mecánica"
    ]
  },
  {
    enunciado: "El grafeno se describe mejor como:",
    correcta: "Un semimetal con conos de Dirac y densidad de estados nula en el punto de Dirac",
    incorrectas: [
      "Un semiconductor de brecha directa de 1,1 eV",
      "Un aislante ancho con nᵢ despreciable a cualquier T"
    ]
  },
  {
    enunciado: "¿Qué efecto produce la luz por encima de Eg en un semiconductor intrínseco?",
    correcta: "Genera pares electrón-hueco y aumenta la fotoconductividad",
    incorrectas: [
      "Reduce la concentración de portadores",
      "Cierra la brecha electrónica permanentemente"
    ]
  },
  {
    enunciado: "En semiconductores indirectos, la fotoluminiscencia suele ser menos eficiente porque:",
    correcta: "Las recombinaciones radiativas requieren la participación de fonones",
    incorrectas: [
      "No hay estados en la banda de valencia",
      "El nivel de Fermi está en el vacío"
    ]
  },
  {
    enunciado: "¿Qué parámetro define el paso de aislante a metal en función de la ocupación de banda?",
    correcta: "La posición del nivel de Fermi respecto a las bandas disponibles",
    incorrectas: [
      "Exclusivamente la densidad de defectos cristalinos",
      "La constante dieléctrica del vacío"
    ]
  },
  {
    enunciado: "¿Cuál es la principal diferencia entre un superconductor ideal y un conductor perfecto a T=0?",
    correcta: "El superconductor exhibe efecto Meissner (expulsión activa del campo), el conductor perfecto solo congela el flujo",
    incorrectas: [
      "No hay diferencia física alguna",
      "El superconductor siempre tiene resistencia finita"
    ]
  },
  {
    enunciado: "En un metal, ¿qué término domina la resistividad a altas temperaturas?",
    correcta: "La dispersión electrón-fonón con ρ ≈ ρ₀ + A·T",
    incorrectas: [
      "La dispersión por impurezas que crece ∝ T²",
      "La ausencia total de colisiones por el principio de Pauli"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene un dopaje compensado en un semiconductor (donores y aceptores presentes)?",
    correcta: "Reduce el portador neto efectivo y puede mover el nivel de Fermi hacia el centro de la brecha",
    incorrectas: [
      "Aumenta siempre n y p simultáneamente sin límites",
      "Convierte el material en metal por solapamiento de bandas"
    ]
  }
];
