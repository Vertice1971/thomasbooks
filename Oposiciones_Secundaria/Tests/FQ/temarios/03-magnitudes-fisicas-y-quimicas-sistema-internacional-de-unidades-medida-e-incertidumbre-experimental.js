// temarios/03-magnitudes-fisicas-y-quimicas-sistema-internacional-de-unidades-medida-e-incertidumbre-experimental.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es una magnitud en el sentido científico estricto?",
    correcta: "Una propiedad cuantificable de un sistema a la que se puede asignar un valor numérico y una unidad",
    incorrectas: [
      "Una afirmación cualitativa sobre un fenómeno sin necesidad de medición",
      "Un sinónimo de unidad de medida independientemente del fenómeno"
    ]
  },
  {
    enunciado: "¿Cómo se expresa correctamente el valor de una cantidad medida?",
    correcta: "Como número por unidad, por ejemplo 2,35 m",
    incorrectas: [
      "Solo como número sin referencia a la unidad",
      "Solo como unidad porque el número es accesorio"
    ]
  },
  {
    enunciado: "¿Qué distingue a las magnitudes fundamentales de las derivadas?",
    correcta: "Las fundamentales constituyen la base independiente a partir de la cual se definen las derivadas",
    incorrectas: [
      "Las derivadas son más importantes porque no requieren definición",
      "No hay diferencia: ambas se definen por combinación de otras"
    ]
  },
  {
    enunciado: "¿Cuántas magnitudes de base reconoce el SI y cuáles son sus unidades?",
    correcta: "Siete: m, kg, s, A, K, mol, cd",
    incorrectas: [
      "Seis: m, kg, s, A, K, mol",
      "Ocho: m, kg, s, A, K, mol, cd y N"
    ]
  },
  {
    enunciado: "Tras la reforma de 2019, ¿por qué se define el kilogramo?",
    correcta: "Por la constante de Planck h fijada exactamente",
    incorrectas: [
      "Por la masa del prototipo internacional de platino-iridio",
      "Por el peso de un litro de agua pura a 4 °C"
    ]
  },
  {
    enunciado: "El segundo en el SI se define mediante...",
    correcta: "La frecuencia de transición hiperfina del cesio-133",
    incorrectas: [
      "La órbita media de la Tierra alrededor del Sol",
      "Un reloj mecánico calibrado con cuarzo"
    ]
  },
  {
    enunciado: "El metro se define en función de...",
    correcta: "La velocidad de la luz c en el vacío",
    incorrectas: [
      "La longitud de una barra patrón a 0 °C",
      "La distancia media Tierra–Luna"
    ]
  },
  {
    enunciado: "El kelvin se fija a través de la constante...",
    correcta: "De Boltzmann k_B",
    incorrectas: [
      "De Faraday F",
      "De gravitación universal G"
    ]
  },
  {
    enunciado: "El amperio está definido actualmente mediante el valor de...",
    correcta: "La carga elemental e",
    incorrectas: [
      "La fuerza entre conductores paralelos infinitos",
      "La caída de potencial en una resistencia patrón"
    ]
  },
  {
    enunciado: "El mol se define fijando el valor de...",
    correcta: "El número de Avogadro N_A",
    incorrectas: [
      "La masa de 12 g de carbono-12 sin más",
      "La concentración de 1 mol·L⁻¹ en agua pura"
    ]
  },
  {
    enunciado: "La candela se relaciona con la constante...",
    correcta: "Eficacia luminosa K_cd a 540 THz",
    incorrectas: [
      "Constante dieléctrica del vacío ε₀",
      "Constante de Rydberg R∞"
    ]
  },
  {
    enunciado: "¿Cuál es una unidad derivada con nombre especial coherente con el SI?",
    correcta: "Newton (N) para fuerza",
    incorrectas: [
      "Kilopondio (kp) para fuerza",
      "Psi para presión"
    ]
  },
  {
    enunciado: "¿Qué significa que el SI sea coherente?",
    correcta: "Que las ecuaciones entre magnitudes mantienen la misma forma al expresarse en unidades SI",
    incorrectas: [
      "Que todas las magnitudes deben ser adimensionales",
      "Que ninguna unidad puede tener prefijos"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes prefijos fue incorporado oficialmente en 2022?",
    correcta: "quetta (Q, 10³⁰)",
    incorrectas: [
      "hecto (h, 10²)",
      "micro (µ, 10⁻⁶)"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de unidad no SI aceptada para uso con el SI?",
    correcta: "El litro (L) para volumen",
    incorrectas: [
      "El galón imperial como unidad SI de volumen",
      "El ångström como unidad SI de longitud"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes afirmaciones sobre el electrón-voltio (eV) es correcta?",
    correcta: "Es una unidad no SI aceptada para energía",
    incorrectas: [
      "Es una unidad SI básica para energía",
      "Es una unidad SI derivada para temperatura"
    ]
  },
  {
    enunciado: "¿Cuál es la escritura correcta de una cantidad y su unidad?",
    correcta: "3,50 × 10^2 m",
    incorrectas: [
      "3,50×10^2m (sin espacio entre número y unidad)",
      "3,50e2 metros (en el informe científico formal del SI)"
    ]
  },
  {
    enunciado: "Un número adimensional de utilidad en mecánica de fluidos es...",
    correcta: "El número de Reynolds",
    incorrectas: [
      "El número de Avogadro",
      "La constante de Faraday"
    ]
  },
  {
    enunciado: "¿Cuál de estas magnitudes es vectorial?",
    correcta: "La aceleración",
    incorrectas: [
      "La temperatura",
      "La densidad"
    ]
  },
  {
    enunciado: "¿Cuál es una magnitud intensiva?",
    correcta: "La presión",
    incorrectas: [
      "La masa",
      "El volumen"
    ]
  },
  {
    enunciado: "La resolución de un instrumento es...",
    correcta: "La mínima variación de la entrada que produce un cambio perceptible en la salida",
    incorrectas: [
      "La máxima carga que soporta sin romperse",
      "La desviación estándar de las lecturas repetidas"
    ]
  },
  {
    enunciado: "¿Qué es la trazabilidad metrológica?",
    correcta: "La relación documentada de calibraciones que conecta una medición con patrones de referencia",
    incorrectas: [
      "La capacidad de un instrumento para medir varias magnitudes",
      "La propiedad de que la incertidumbre sea nula"
    ]
  },
  {
    enunciado: "Según el GUM, una contribución tipo A de la incertidumbre se evalúa mediante...",
    correcta: "Métodos estadísticos aplicados a series de observaciones",
    incorrectas: [
      "Especificaciones del fabricante exclusivamente",
      "Tablas de constantes físicas sin datos experimentales"
    ]
  },
  {
    enunciado: "Una contribución tipo B de la incertidumbre proviene de...",
    correcta: "Certificados de calibración, especificaciones y experiencia previa",
    incorrectas: [
      "Repetición de medidas y cálculo de desviación estándar muestral",
      "La media de múltiples repeticiones idénticas"
    ]
  },
  {
    enunciado: "La incertidumbre expandida U se obtiene como...",
    correcta: "U = k · u_c, donde u_c es la incertidumbre combinada y k un factor de cobertura",
    incorrectas: [
      "U = u_c², el cuadrado de la incertidumbre combinada",
      "U = u_c / k para reducir artificialmente la dispersión"
    ]
  },
  {
    enunciado: "En propagación de incertidumbres por derivadas parciales, las 'sensibilidades' son...",
    correcta: "Las derivadas parciales de la función respecto de cada variable de entrada",
    incorrectas: [
      "Los valores verdaderos de las magnitudes medibles",
      "Los coeficientes de correlación siempre iguales a 1"
    ]
  },
  {
    enunciado: "¿Cómo debe expresarse un resultado con su incertidumbre expandida?",
    correcta: "x̂ ± U, indicando el nivel de cobertura (por ejemplo, k ≈ 2)",
    incorrectas: [
      "x̂ ± u_c sin mencionar k ni el método",
      "x̂ con U en una unidad distinta para aparentar menor error"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre exactitud (accuracy) y precisión?",
    correcta: "La exactitud combina sesgo bajo y baja dispersión; la precisión se refiere solo a la dispersión",
    incorrectas: [
      "Son sinónimos en metrología",
      "La precisión mide el sesgo y la exactitud la repetibilidad"
    ]
  },
  {
    enunciado: "Repetibilidad y reproducibilidad se diferencian en que...",
    correcta: "La reproducibilidad evalúa variabilidad entre laboratorios u operadores; la repetibilidad, en condiciones idénticas",
    incorrectas: [
      "Ambas evalúan lo mismo y son intercambiables",
      "La repetibilidad solo aplica a medidas químicas"
    ]
  },
  {
    enunciado: "Un error sistemático se caracteriza por...",
    correcta: "Introducir un sesgo constante que desplaza todas las mediciones",
    incorrectas: [
      "Variar aleatoriamente alrededor del valor medio",
      "Ser siempre detectado por repetir medidas"
    ]
  },
  {
    enunciado: "En análisis químico, el límite de detección (LD) es...",
    correcta: "La menor cantidad que puede distinguirse razonablemente de la señal de blanco",
    incorrectas: [
      "La concentración a la que el método es exacto al 100 %",
      "La mayor señal que no satura el detector"
    ]
  },
  {
    enunciado: "Las barras de error en una gráfica suelen representar...",
    correcta: "La incertidumbre de la medición (por ejemplo, U o desviación estándar)",
    incorrectas: [
      "El tamaño de muestra N sin relación con la variabilidad",
      "Un adorno gráfico sin significado cuantitativo"
    ]
  },
  {
    enunciado: "Una regla práctica de cifras significativas para informar x̂ ± U es...",
    correcta: "Redondear U a 1–2 cifras significativas y x̂ al mismo decimal",
    incorrectas: [
      "Dar U con más decimales que x̂ para mostrar detalle",
      "Redondear x̂ pero no U para evitar cambios"
    ]
  },
  {
    enunciado: "¿Qué aporta el Suplemento 1 del GUM (Monte Carlo)?",
    correcta: "Un enfoque numérico para propagar incertidumbres cuando la linealización no es adecuada",
    incorrectas: [
      "Un método para eliminar la incertidumbre experimental",
      "Una forma de definir nuevas unidades básicas del SI"
    ]
  },
  {
    enunciado: "En una regresión V-I para estimar una resistencia, la incertidumbre del resultado se asocia a...",
    correcta: "La incertidumbre de la pendiente y las incertidumbres de V e I usadas en el ajuste",
    incorrectas: [
      "La sola resolución del multímetro, ignorando la dispersión",
      "La correlación fija e igual a cero por convenio"
    ]
  },
  {
    enunciado: "¿Cuál es la unidad SI de iluminancia?",
    correcta: "Lux (lx)",
    incorrectas: [
      "Lumen (lm)",
      "Candela por metro (cd·m)"
    ]
  },
  {
    enunciado: "Una comprobación básica de ecuaciones físicas antes de usarlas en el laboratorio es...",
    correcta: "Verificar la homogeneidad dimensional en ambos miembros",
    incorrectas: [
      "Comprobar que los números son 'razonables' sin unidades",
      "Sustituir todas las magnitudes por sus valores adimensionales"
    ]
  },
  {
    enunciado: "Al seleccionar instrumento para medir una longitud con incertidumbre objetivo de ±0,1 mm, conviene que...",
    correcta: "La resolución del instrumento sea claramente menor (p. ej., 0,01 mm) y esté calibrado",
    incorrectas: [
      "La resolución sea mayor (p. ej., 1 mm) para evitar lecturas falsas",
      "No haya necesidad de calibración si el instrumento es digital"
    ]
  },
  {
    enunciado: "Una unidad derivada coherente del SI para presión es...",
    correcta: "El pascal (Pa = N·m⁻²)",
    incorrectas: [
      "El bar como unidad SI básica",
      "El psi como unidad SI derivada"
    ]
  },
  {
    enunciado: "¿Cuál es una buena práctica al registrar datos experimentales?",
    correcta: "Anotar condiciones ambientales, patrón usado, fecha de calibración y estimación de incertidumbre",
    incorrectas: [
      "Registrar solo el valor medio final sin contexto",
      "Eliminar datos atípicos sin justificarlo"
    ]
  }
];
