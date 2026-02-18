// temarios/53-entropia-y-energia-libre-de-gibbs-espontaneidad-y-equilibrio-quimico.js
var PREGUNTAS = [
  {
    enunciado: "El segundo principio, en forma de Clausius, puede expresarse como:",
    correcta: "∮ δq/T ≤ 0, con igualdad para procesos reversibles",
    incorrectas: [
      "∮ δq/T ≥ 0 siempre, incluso para reversibles",
      "∮ δq = 0 para cualquier proceso cíclico"
    ]
  },
  {
    enunciado: "La definición diferencial de entropía para un proceso reversible es:",
    correcta: "dS = δq_rev / T",
    incorrectas: [
      "dS = δw_rev / T",
      "dS = C_p dT"
    ]
  },
  {
    enunciado: "La formulación estadística de Boltzmann para la entropía es:",
    correcta: "S = k_B ln W",
    incorrectas: [
      "S = R ln K",
      "S = −k_B ln W"
    ]
  },
  {
    enunciado: "El cambio de entropía en una transición de fase reversible a T_trans es:",
    correcta: "ΔS = ΔH_trans / T_trans",
    incorrectas: [
      "ΔS = T_trans / ΔH_trans",
      "ΔS = ΔG_trans / T_trans"
    ]
  },
  {
    enunciado: "Para un gas ideal, el cambio de entropía entre (T1, p1) y (T2, p2) puede escribirse como:",
    correcta: "ΔS = nR ln(T2/T1) − nR ln(p2/p1)",
    incorrectas: [
      "ΔS = nR ln(p2/p1) − nR ln(T2/T1)",
      "ΔS = nRT ln(T2/T1)"
    ]
  },
  {
    enunciado: "La entropía de mezcla ideal de dos gases ideales es:",
    correcta: "ΔS_mix = −R ∑ x_i ln x_i (a T y p dados)",
    incorrectas: [
      "ΔS_mix = 0 para gases distintos",
      "ΔS_mix = R ∑ x_i"
    ]
  },
  {
    enunciado: "La tercera ley establece que:",
    correcta: "S → 0 para un cristal perfecto a 0 K",
    incorrectas: [
      "S es negativa a 0 K",
      "S es infinita a 0 K"
    ]
  },
  {
    enunciado: "La energía libre de Gibbs se define como:",
    correcta: "G = H − T S",
    incorrectas: [
      "G = U + pV",
      "G = A + pV con A = H − TS"
    ]
  },
  {
    enunciado: "Criterio de espontaneidad a T y p constantes:",
    correcta: "ΔG < 0 proceso espontáneo; ΔG = 0 equilibrio",
    incorrectas: [
      "ΔG > 0 proceso espontáneo",
      "ΔG = ΔH en cualquier proceso"
    ]
  },
  {
    enunciado: "La relación de ΔG con ΔH y ΔS es:",
    correcta: "ΔG = ΔH − TΔS",
    incorrectas: [
      "ΔG = ΔH + TΔS",
      "ΔG = TΔS − ΔH"
    ]
  },
  {
    enunciado: "La relación entre ΔG° y la constante de equilibrio K es:",
    correcta: "ΔG° = −RT ln K",
    incorrectas: [
      "ΔG° = RT ln K",
      "ΔG° = −R ln K"
    ]
  },
  {
    enunciado: "Si K >> 1 a una temperatura dada, entonces:",
    correcta: "ΔG° es muy negativo y se favorecen los productos",
    incorrectas: [
      "ΔG° es positivo y se favorecen reactivos",
      "ΔG° es cero para cualquier K"
    ]
  },
  {
    enunciado: "El potencial químico μ_i se define como:",
    correcta: "μ_i = (∂G/∂n_i)_{T,p,n≠i}",
    incorrectas: [
      "μ_i = (∂H/∂T)_{p}",
      "μ_i = −T(∂S/∂n_i)_{T,p}"
    ]
  },
  {
    enunciado: "Para especies en disolución ideal, el potencial químico se expresa como:",
    correcta: "μ_i = μ_i° + RT ln a_i (con a_i ≈ x_i o c_i/c°)",
    incorrectas: [
      "μ_i = μ_i° − RT ln a_i",
      "μ_i = RT a_i"
    ]
  },
  {
    enunciado: "La condición de equilibrio químico para la reacción ∑ν_i A_i = 0 es:",
    correcta: "∑ ν_i μ_i = 0",
    incorrectas: [
      "∑ μ_i = 0",
      "∑ ν_i G_i = 0"
    ]
  },
  {
    enunciado: "La relación fundamental con el cociente de reacción Q es:",
    correcta: "Δ_r G = Δ_r G° + RT ln Q",
    incorrectas: [
      "Δ_r G = RT ln(Q/K)",
      "Δ_r G = Δ_r H − RT ln Q"
    ]
  },
  {
    enunciado: "La ecuación de van ’t Hoff para K(T) dice:",
    correcta: "d(ln K)/dT = Δ_r H° / (R T^2)",
    incorrectas: [
      "dK/dT = −Δ_r S° / R",
      "d(ln K)/dT = −Δ_r G° / RT^2"
    ]
  },
  {
    enunciado: "Si ΔH < 0 y ΔS > 0, el proceso a T constante:",
    correcta: "Es espontáneo a cualquier temperatura",
    incorrectas: [
      "Nunca es espontáneo",
      "Solo es espontáneo a T muy alta"
    ]
  },
  {
    enunciado: "Si ΔH > 0 y ΔS > 0, la espontaneidad depende de:",
    correcta: "La temperatura (TΔS puede superar ΔH a T alta)",
    incorrectas: [
      "La presión únicamente",
      "No depende de ninguna condición"
    ]
  },
  {
    enunciado: "La desigualdad de Clausius para procesos irreversibles implica que:",
    correcta: "ΔS_sistema > ∫ δq_irrev / T",
    incorrectas: [
      "ΔS_sistema = ∫ δq_irrev / T",
      "ΔS_universo = 0 necesariamente"
    ]
  },
  {
    enunciado: "La ecuación de Gibbs–Helmholtz en forma diferencial establece:",
    correcta: "(∂(G/T)/∂T)_p = −H/T^2",
    incorrectas: [
      "(∂G/∂T)_p = +S",
      "(∂G/∂p)_T = −S"
    ]
  },
  {
    enunciado: "La relación (∂G/∂p)_T para sistemas simples es:",
    correcta: "(∂G/∂p)_T = V",
    incorrectas: [
      "(∂G/∂p)_T = −S",
      "(∂G/∂p)_T = H"
    ]
  },
  {
    enunciado: "En gases reales, la actividad se expresa mediante:",
    correcta: "Fugacidad f = φ·p, con a = f/f°",
    incorrectas: [
      "a = p/RT siempre",
      "a = 1 para cualquier gas"
    ]
  },
  {
    enunciado: "Para electrolitos diluidos, la actividad iónica media incorpora:",
    correcta: "Coeficientes de actividad γ± (Debye–Hückel en el límite)",
    incorrectas: [
      "Solo fracciones molares",
      "Únicamente presiones parciales"
    ]
  },
  {
    enunciado: "La espontaneidad global en un proceso aislado viene dada por:",
    correcta: "ΔS_universo = ΔS_sistema + ΔS_entorno > 0",
    incorrectas: [
      "ΔG_sistema < 0 a cualquier condición",
      "ΔH_universo < 0 siempre"
    ]
  },
  {
    enunciado: "En una celda galvánica reversible, la relación con ΔG° es:",
    correcta: "ΔG° = −n F E°",
    incorrectas: [
      "ΔG° = +n F E°",
      "ΔG° = −RT ln E°"
    ]
  },
  {
    enunciado: "Para un equilibrio gaseoso con Δn_g < 0, aumentar la presión total generalmente:",
    correcta: "Desplaza el equilibrio hacia los productos de menor número de moles gaseosos",
    incorrectas: [
      "No tiene efecto por definición",
      "Siempre lo desplaza a los reactivos"
    ]
  },
  {
    enunciado: "El criterio de estabilidad a T, p constantes incluye:",
    correcta: "C_p > 0 y κ_T > 0 (condiciones de convexidad)",
    incorrectas: [
      "C_p < 0 necesariamente",
      "κ_T negativa para sólidos"
    ]
  },
  {
    enunciado: "Un error común al usar ΔG° y K es:",
    correcta: "Confundir ΔG con ΔG°; ΔG° relaciona K a estado estándar, no a composición instantánea",
    incorrectas: [
      "Usar actividades en lugar de concentraciones",
      "Aplicar R en J·mol⁻¹·K⁻¹"
    ]
  },
  {
    enunciado: "En un proceso isotérmico e isobárico, el trabajo máximo no pV que puede extraerse es:",
    correcta: "−ΔG",
    incorrectas: [
      "−ΔH",
      "−TΔS"
    ]
  },
  {
    enunciado: "Para calcular ΔS de calentamiento de un sólido con C_p constante entre T1 y T2 se usa:",
    correcta: "ΔS = C_p ln(T2/T1)",
    incorrectas: [
      "ΔS = C_p (T2 − T1)",
      "ΔS = (T2 − T1)/C_p"
    ]
  },
  {
    enunciado: "En la mezcla ideal de líquidos a fracción molar x1 y x2, la contribución entrópica conduce a:",
    correcta: "Disminución de G por el término −TΔS_mix, favoreciendo la mezcla",
    incorrectas: [
      "Aumento de G independiente de T",
      "ΔS_mix = 0 para líquidos"
    ]
  },
  {
    enunciado: "La paradoja de Gibbs se resuelve reconociendo:",
    correcta: "La indistinguibilidad de partículas idénticas al contar microestados",
    incorrectas: [
      "Que la entropía es arbitraria",
      "Que ΔS_mix es negativo para gases iguales"
    ]
  },
  {
    enunciado: "Si ΔG = 0 pero ΔH ≠ 0 y ΔS ≠ 0, el sistema está:",
    correcta: "En equilibrio a esa T y p (con ΔH = TΔS)",
    incorrectas: [
      "En estado imposible",
      "Forzado a evolucionar espontáneamente"
    ]
  },
  {
    enunciado: "En términos de Q, la dirección espontánea viene dada por:",
    correcta: "Si Q < K, Δ_r G < 0 y avanza hacia productos",
    incorrectas: [
      "Si Q > K, avanza a productos espontáneamente",
      "Si Q = K, Δ_r G < 0"
    ]
  },
  {
    enunciado: "Para estimar K a otra temperatura, a partir de datos en dos T se usa:",
    correcta: "Integración de van ’t Hoff asumiendo ΔH° ~ constante en el intervalo",
    incorrectas: [
      "Ley de Raoult",
      "Ecuación de Clausius–Clapeyron sin cambios de fase"
    ]
  },
  {
    enunciado: "La condición de fase en equilibrio para un componente i entre dos fases α y β exige:",
    correcta: "μ_i^α = μ_i^β",
    incorrectas: [
      "G^α = G^β",
      "p^α = p^β siempre"
    ]
  },
  {
    enunciado: "En soluciones reales, la expresión correcta de K emplea:",
    correcta: "Actividades (incluyendo γ_i), no sólo concentraciones",
    incorrectas: [
      "Concentraciones siempre, sin correcciones",
      "Presiones parciales de sólidos y líquidos"
    ]
  },
  {
    enunciado: "Para una reacción endotérmica (ΔH°>0), un aumento de T afecta a K según van ’t Hoff:",
    correcta: "K aumenta con T",
    incorrectas: [
      "K disminuye con T",
      "K es independiente de T"
    ]
  },
  {
    enunciado: "La producción de entropía σ en un proceso real cercano al equilibrio es:",
    correcta: "Positiva y puede aproximarse como suma de flujos × fuerzas termodinámicas",
    incorrectas: [
      "Negativa por definición",
      "Exactamente cero en cualquier proceso estacionario"
    ]
  }
];
