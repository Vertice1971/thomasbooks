// temarios/50-cinetica-quimica-teorias-colisiones-estado-transicion-metodos-determinacion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué describe una ley de velocidad v = k·[A]^m[B]^n?",
    correcta: "La dependencia experimental de la velocidad con las concentraciones, no la estequiometría global",
    incorrectas: [
      "La proporción estequiométrica exacta de reactivos en la ecuación global",
      "El avance de la reacción en equilibrio"
    ]
  },
  {
    enunciado: "Para una reacción de orden cero en A, la ley integrada es:",
    correcta: "[A] = [A]0 − k·t",
    incorrectas: [
      "ln[A] = ln[A]0 − k·t",
      "1/[A] = 1/[A]0 + k·t"
    ]
  },
  {
    enunciado: "En una reacción de primer orden, la vida media t1/2:",
    correcta: "Es independiente de la concentración inicial",
    incorrectas: [
      "Depende linealmente de [A]0",
      "Disminuye con 1/[A]0"
    ]
  },
  {
    enunciado: "Para 2A → productos (segundo orden en A), la forma integrada correcta es:",
    correcta: "1/[A] = 1/[A]0 + k·t",
    incorrectas: [
      "[A] = [A]0·e^{-kt}",
      "ln[A] = ln[A]0 − k·t"
    ]
  },
  {
    enunciado: "¿Para qué se usa el método de tiempos iniciales?",
    correcta: "Para obtener el orden parcial comparando velocidades al inicio",
    incorrectas: [
      "Para medir la constante de equilibrio",
      "Para estimar energías de ionización"
    ]
  },
  {
    enunciado: "En un gráfico de Arrhenius ln k frente a 1/T, la pendiente es:",
    correcta: "−Ea/R",
    incorrectas: [
      "−ΔH‡/R",
      "A"
    ]
  },
  {
    enunciado: "¿Qué representa el factor preexponencial A en Arrhenius?",
    correcta: "Frecuencia de choques efectivos/orientación adecuada",
    incorrectas: [
      "La entalpía de activación",
      "La constante de equilibrio de la reacción"
    ]
  },
  {
    enunciado: "En la teoría de colisiones, el factor estérico P tiene en cuenta:",
    correcta: "La fracción de choques con orientación geométrica adecuada",
    incorrectas: [
      "La variación del calor de reacción",
      "La presión parcial del disolvente"
    ]
  },
  {
    enunciado: "Al aumentar la temperatura, ¿qué cantidad crece y acelera la reacción?",
    correcta: "La fracción de moléculas con energía ≥ Ea",
    incorrectas: [
      "La entalpía estándar de reacción",
      "La constante de equilibrio a cualquier reacción"
    ]
  },
  {
    enunciado: "La ecuación de Eyring de la TET puede escribirse como:",
    correcta: "k = (kB T/h)·exp(ΔS‡/R)·exp(−ΔH‡/RT)",
    incorrectas: [
      "k = A·exp(+Ea/RT)",
      "k = (h/kB T)·exp(−ΔG°/RT)"
    ]
  },
  {
    enunciado: "En el gráfico de Eyring ln(k/T) vs 1/T, la ordenada en el origen proporciona:",
    correcta: "ln(kB/h) + ΔS‡/R",
    incorrectas: [
      "−Ea/R",
      "ln A"
    ]
  },
  {
    enunciado: "Relación aproximada entre Arrhenius y TET:",
    correcta: "Ea ≈ ΔH‡ + RT",
    incorrectas: [
      "Ea = ΔS‡·T",
      "Ea ≈ −ΔG‡"
    ]
  },
  {
    enunciado: "El postulado de Hammond indica que:",
    correcta: "El estado de transición se parece al lado (reactivos/productos) al que es próximo en energía",
    incorrectas: [
      "El estado de transición siempre es intermedio en estructura entre reactivos y productos",
      "La energía de activación es igual al calor de reacción"
    ]
  },
  {
    enunciado: "La aproximación de estado estacionario (SSA) asume que:",
    correcta: "La concentración del intermedio cambia muy poco: d[I]/dt ≈ 0",
    incorrectas: [
      "Los intermedios están en equilibrio con productos",
      "No existen intermedios cinéticos"
    ]
  },
  {
    enunciado: "El pre-equilibrio en un mecanismo implica que:",
    correcta: "Un paso inicial rápido reversible fija una K previa antes del paso lento",
    incorrectas: [
      "El paso lento ocurre antes del rápido",
      "No se puede definir una constante de equilibrio"
    ]
  },
  {
    enunciado: "El mecanismo de Lindemann para reacciones unimoleculares explica:",
    correcta: "La dependencia con la presión mediante activación por choques previos",
    incorrectas: [
      "La catálisis heterogénea por adsorción",
      "La inhibición competitiva enzimática"
    ]
  },
  {
    enunciado: "En cinética Michaelis–Menten, KM es:",
    correcta: "La concentración de sustrato que da v = Vmax/2",
    incorrectas: [
      "La velocidad máxima del enzima",
      "El orden global de la reacción"
    ]
  },
  {
    enunciado: "Inhibición competitiva enzimática típica produce:",
    correcta: "Aumento aparente de KM sin cambio en Vmax",
    incorrectas: [
      "Disminución de Vmax sin cambiar KM",
      "Aumento simultáneo de KM y Vmax"
    ]
  },
  {
    enunciado: "El modelo Langmuir–Hinshelwood considera que:",
    correcta: "Los reactivos deben adsorberse en la superficie antes de reaccionar",
    incorrectas: [
      "La reacción ocurre sólo en fase gas sin adsorción",
      "No hay saturación de sitios activos"
    ]
  },
  {
    enunciado: "Un límite de control difusional en solución viene dado por:",
    correcta: "k ≈ 4π D R (Smoluchowski) a T y viscosidad dadas",
    incorrectas: [
      "k = A·e^{+Ea/RT}",
      "k = Kc·[S]/(KM + [S])"
    ]
  },
  {
    enunciado: "Un efecto isotópico cinético primario (H→D) grande sugiere que:",
    correcta: "Se rompe/formaliza un enlace X–H en el paso determinante",
    incorrectas: [
      "La reacción es enteramente difusional",
      "El estado de transición es independiente de la masa"
    ]
  },
  {
    enunciado: "Según Hammett, un valor ρ > 0 en una serie parafenoil indica:",
    correcta: "Un estado de transición estabilizado por sustituyentes atractores (carga positiva desarrollada)",
    incorrectas: [
      "Que los donadores estabilizan el estado de transición positivo",
      "Que no hay correlación entre estructura y reactividad"
    ]
  },
  {
    enunciado: "Efecto salino cinético primario: al aumentar la fuerza iónica I, la velocidad de una reacción iónica entre cargas del mismo signo:",
    correcta: "Suele aumentar (zA·zB > 0)",
    incorrectas: [
      "Disminuye necesariamente",
      "No depende de I"
    ]
  },
  {
    enunciado: "¿Qué consigue el método de aislamiento (pseudo-primer orden)?",
    correcta: "Hacer que una concentración sea casi constante para linealizar y obtener k aparente",
    incorrectas: [
      "Medir directamente Ea a una sola temperatura",
      "Eliminar los intermedios del mecanismo"
    ]
  },
  {
    enunciado: "¿Qué gráfica es lineal para una reacción de primer orden?",
    correcta: "ln[A] vs t",
    incorrectas: [
      "[A] vs t",
      "1/[A] vs t"
    ]
  },
  {
    enunciado: "En orden cero, la velocidad es:",
    correcta: "Independiente de la concentración del reactivo",
    incorrectas: [
      "Proporcional a [A]",
      "Proporcional a [A]^2"
    ]
  },
  {
    enunciado: "Con dos medidas de k a T1 y T2, Ea puede obtenerse con:",
    correcta: "ln(k2/k1) = −Ea/R · (1/T2 − 1/T1)",
    incorrectas: [
      "Ea = R·T·ln k",
      "Ea = (k2 − k1)/(T2 − T1)"
    ]
  },
  {
    enunciado: "¿Para qué rango temporal es ideal el stopped-flow?",
    correcta: "Procesos rápidos en el dominio ms–s",
    incorrectas: [
      "Procesos de horas o días",
      "Fenómenos fs sin láser de pulsos"
    ]
  },
  {
    enunciado: "El quenched-flow permite:",
    correcta: "Detener reacciones rápidas por congelación química y analizar intermedios",
    incorrectas: [
      "Elevar la temperatura instantáneamente (T-jump)",
      "Medir sólo cambios de presión"
    ]
  },
  {
    enunciado: "Un seguimiento conductimétrico es especialmente útil cuando:",
    correcta: "Cambian las especies iónicas o su movilidad durante la reacción",
    incorrectas: [
      "Sólo cambian especies neutras no polares",
      "La reacción es fotoquímica sin cambio de carga"
    ]
  },
  {
    enunciado: "La manometría es apropiada para reacciones donde:",
    correcta: "Se generan o consumen gases y varía la presión",
    incorrectas: [
      "Sólo hay transferencia de calor",
      "No hay cambios de volumen ni de moles gaseosos"
    ]
  },
  {
    enunciado: "Una reacción en cadena se caracteriza por etapas de:",
    correcta: "Iniciación, propagación y terminación",
    incorrectas: [
      "Adsorción, difusión y desorción exclusivamente",
      "Pre-equilibrio y estado estacionario sin radicales"
    ]
  },
  {
    enunciado: "Un catalizador homogéneo típicamente:",
    correcta: "Disminuye ΔG‡ y aumenta k sin cambiar K de equilibrio",
    incorrectas: [
      "Cambia la constante de equilibrio",
      "Aumenta la entalpía de activación"
    ]
  },
  {
    enunciado: "Una cinética autocatalítica suele mostrar curvas:",
    correcta: "Sigmoidales en la concentración-tiempo",
    incorrectas: [
      "Lineales en todo el rango",
      "De decaimiento exponencial simple"
    ]
  },
  {
    enunciado: "Acerca de los órdenes de reacción:",
    correcta: "Deben determinarse experimentalmente salvo que el paso sea elemental conocido",
    incorrectas: [
      "Se deducen siempre de la estequiometría global",
      "Son siempre números enteros"
    ]
  },
  {
    enunciado: "En reacciones paralelas de primer orden (A→B y A→C), la constante aparente de desaparición de A es:",
    correcta: "kobs = k1 + k2",
    incorrectas: [
      "kobs = k1·k2",
      "kobs = |k1 − k2|"
    ]
  },
  {
    enunciado: "Para A → B → C (consecutiva, primer orden), la concentración de B típicamente:",
    correcta: "Presenta un máximo en un tiempo finito",
    incorrectas: [
      "Es siempre creciente",
      "Es constante en el tiempo"
    ]
  },
  {
    enunciado: "El coeficiente Q10 (razón de velocidades al subir 10 °C) suele ser:",
    correcta: "Del orden de 2–3 para muchas reacciones químicas",
    incorrectas: [
      "Siempre 10 para todas las reacciones",
      "Menor que 1 por definición"
    ]
  },
  {
    enunciado: "Respecto al ajuste de datos cinéticos:",
    correcta: "La regresión no lineal directa evita sesgos de linealizaciones y es preferible cuando es posible",
    incorrectas: [
      "Siempre es mejor linealizar cualquier modelo",
      "No es válida si hay incertidumbre experimental"
    ]
  }
];
