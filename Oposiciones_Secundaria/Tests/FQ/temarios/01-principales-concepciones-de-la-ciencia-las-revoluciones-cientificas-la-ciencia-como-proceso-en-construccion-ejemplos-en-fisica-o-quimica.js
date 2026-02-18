// temarios/01-principales-concepciones-de-la-ciencia-las-revoluciones-cientificas-la-ciencia-como-proceso-en-construccion-ejemplos-en-fisica-o-quimica.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por ciencia cuando se la define de forma general en el ámbito académico?",
    correcta: "Un cuerpo sistemático de conocimientos racionales y empíricamente contrastados que explican y predicen fenómenos",
    incorrectas: [
      "Un conjunto de creencias tradicionales transmitidas por consenso social",
      "Un compendio de verdades absolutas inmunes a revisión o crítica"
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo esencial del conocimiento científico frente a otros saberes?",
    correcta: "Su carácter provisional y revisable a la luz de nuevas evidencias",
    incorrectas: [
      "Su dependencia de la autoridad como criterio último de verdad",
      "Su finalidad exclusiva de producir tecnología rentable"
    ]
  },
  {
    enunciado: "¿Qué sostiene el empirismo respecto al origen del conocimiento?",
    correcta: "Que procede principalmente de la experiencia sensible y la observación",
    incorrectas: [
      "Que se fundamenta en intuiciones metafísicas innatas",
      "Que depende del consenso político de cada época"
    ]
  },
  {
    enunciado: "¿Qué enfatiza el racionalismo clásico en la construcción del conocimiento?",
    correcta: "El papel de la razón y la deducción a partir de principios claros",
    incorrectas: [
      "La aceptación acrítica de la tradición",
      "La imposibilidad de alcanzar verdades necesarias"
    ]
  },
  {
    enunciado: "¿Qué propone el positivismo clásico como criterio de sentido para las afirmaciones?",
    correcta: "La verificación empírica de los enunciados",
    incorrectas: [
      "La coherencia con una doctrina moral previa",
      "La autoridad del descubridor o descubridoras de la teoría"
    ]
  },
  {
    enunciado: "Según el falsacionismo, ¿qué distingue a una teoría científica de una pseudocientífica?",
    correcta: "Que la primera formula predicciones arriesgadas susceptibles de refutación empírica",
    incorrectas: [
      "Que la primera es más aceptada por el público general",
      "Que la primera usa un lenguaje más complejo y técnico"
    ]
  },
  {
    enunciado: "En la concepción de Popper, el progreso científico se explica como...",
    correcta: "Conjeturas audaces sometidas a intentos rigurosos de refutación",
    incorrectas: [
      "Reunión pasiva de observaciones hasta confirmar la teoría",
      "Votación por mayoría simple dentro de los laboratorios"
    ]
  },
  {
    enunciado: "¿Qué introduce Thomas Kuhn para describir etapas de la actividad científica?",
    correcta: "La distinción entre ciencia normal, crisis y revolución paradigmática",
    incorrectas: [
      "La equivalencia entre prueba lógica y experimento",
      "La identificación de ciencia con técnica aplicada"
    ]
  },
  {
    enunciado: "¿Qué es un paradigma en el sentido kuhniano?",
    correcta: "Un marco ejemplar de teorías, problemas y métodos compartidos por una comunidad científica",
    incorrectas: [
      "Una mera hipótesis aislada sin compromiso metodológico",
      "Una lista de datos brutos sin interpretación alguna"
    ]
  },
  {
    enunciado: "Según Kuhn, ¿qué desencadena una revolución científica?",
    correcta: "La acumulación de anomalías insolubles dentro del paradigma vigente",
    incorrectas: [
      "El aumento del número de artículos publicados en una disciplina",
      "El reemplazo generacional del personal universitario"
    ]
  },
  {
    enunciado: "¿Cómo conceptualiza Lakatos la dinámica de la investigación científica?",
    correcta: "Como programas con un núcleo duro y un cinturón protector de hipótesis auxiliares",
    incorrectas: [
      "Como una secuencia lineal y acumulativa sin retrocesos",
      "Como decisiones exclusivas de comités gubernamentales"
    ]
  },
  {
    enunciado: "Para Lakatos, un programa de investigación es progresivo si...",
    correcta: "Predice hechos nuevos y ofrece mayor poder heurístico que sus rivales",
    incorrectas: [
      "Evita formular predicciones falsables para no arriesgarse",
      "Se mantiene por fidelidad a sus fundadores históricos"
    ]
  },
  {
    enunciado: "¿Qué defiende Feyerabend frente a la idea de un método único de la ciencia?",
    correcta: "El pluralismo metodológico y la máxima 'todo vale' como crítica a prescripciones rígidas",
    incorrectas: [
      "La prohibición de cualquier innovación técnica en los laboratorios",
      "La sumisión de la ciencia a dogmas teológicos"
    ]
  },
  {
    enunciado: "¿Qué enfatizan las perspectivas sociológicas y constructivistas de la ciencia?",
    correcta: "El papel del contexto social, las prácticas y el lenguaje en la construcción del conocimiento",
    incorrectas: [
      "La independencia total de la ciencia respecto de toda dimensión social",
      "La inutilidad de la contrastación empírica en el trabajo científico"
    ]
  },
  {
    enunciado: "¿Cuál es un objetivo central de la explicación científica?",
    correcta: "Ofrecer leyes y modelos que permitan comprender y predecir fenómenos",
    incorrectas: [
      "Sustituir la ética por la utilidad económica",
      "Eliminar la necesidad de interpretación conceptual"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una 'revolución científica'?",
    correcta: "Una reconfiguración profunda de teorías, métodos e instrumentos aceptados",
    incorrectas: [
      "Un cambio menor de terminología sin consecuencias teóricas",
      "Un concurso anual de innovación tecnológica"
    ]
  },
  {
    enunciado: "¿Qué transformación ilustra la revolución copernicana?",
    correcta: "El paso del geocentrismo al heliocentrismo con consecuencias metodológicas y filosóficas",
    incorrectas: [
      "La sustitución de la aritmética por la retórica en astronomía",
      "La eliminación de toda matemática en la explicación del cielo"
    ]
  },
  {
    enunciado: "¿Qué rasgo común comparten relatividad y mecánica cuántica respecto a la física clásica?",
    correcta: "La revisión de supuestos ontológicos y epistemológicos del marco newtoniano",
    incorrectas: [
      "El rechazo de la experimentación en favor de la pura especulación",
      "La renuncia a toda forma de modelización matemática"
    ]
  },
  {
    enunciado: "¿Qué superó Lavoisier con su teoría del oxígeno?",
    correcta: "La doctrina del flogisto mediante mediciones cuantitativas y ley de conservación de la masa",
    incorrectas: [
      "La teoría atómica de Dalton empleando argumentos teológicos",
      "La tabla periódica de Mendeleiev sin recurrir a experimentos"
    ]
  },
  {
    enunciado: "¿Qué función desempeña la 'comunidad científica' en el cambio teórico?",
    correcta: "Delibera y establece consensos sobre criterios de aceptación de teorías y métodos",
    incorrectas: [
      "Sustituye la evidencia por encuestas de opinión pública",
      "Impone decisiones por decreto político ajenas al debate"
    ]
  },
  {
    enunciado: "¿Qué significa que el método científico sea cíclico?",
    correcta: "Que hipótesis, contrastación y revisión se encadenan en procesos iterativos de mejora",
    incorrectas: [
      "Que toda teoría se reemplaza automáticamente cada década",
      "Que la ciencia regresa siempre a los mismos dogmas iniciales"
    ]
  },
  {
    enunciado: "¿Cuál es el papel del error en la práctica científica moderna?",
    correcta: "Es una fuente de aprendizaje y motor de refinamiento teórico y experimental",
    incorrectas: [
      "Es señal de fraude y debe ocultarse siempre",
      "Carece de valor porque impide publicar resultados"
    ]
  },
  {
    enunciado: "¿Qué criterio popperiano sirve para trazar la demarcación entre ciencia y pseudociencia?",
    correcta: "La posibilidad de refutar empíricamente las proposiciones de una teoría",
    incorrectas: [
      "La vejez histórica de la disciplina",
      "La cantidad de seguidores en redes sociales"
    ]
  },
  {
    enunciado: "¿Qué ilustra el paso de espacio y tiempo absolutos a espacio-tiempo relativista?",
    correcta: "Una ruptura conceptual que obliga a replantear medición, simultaneidad y causalidad",
    incorrectas: [
      "Una mejora meramente terminológica sin efectos experimentales",
      "Un consenso literario sin soporte matemático"
    ]
  },
  {
    enunciado: "¿Qué aporta la mecánica cuántica a la noción de predicción física?",
    correcta: "Introduce descripciones probabilísticas y el principio de incertidumbre",
    incorrectas: [
      "Prohíbe toda medición en microfísica",
      "Reemplaza las matemáticas por metáforas cualitativas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el avance incremental en periodos de ciencia normal?",
    correcta: "La resolución de 'rompecabezas' dentro del paradigma vigente",
    incorrectas: [
      "La creación simultánea de paradigmas incompatibles",
      "La falta total de reglas metodológicas comunes"
    ]
  },
  {
    enunciado: "¿Qué función cumple la revisión por pares en la comunidad científica?",
    correcta: "Control de calidad metodológica y validación antes de la difusión pública",
    incorrectas: [
      "Sustituir la replicación por la reputación del autor",
      "Garantizar la verdad definitiva de cualquier resultado"
    ]
  },
  {
    enunciado: "¿Qué expresa la idea de 'subdeterminación' de las teorías por los datos?",
    correcta: "Que conjuntos de evidencias pueden ser compatibles con teorías rivales",
    incorrectas: [
      "Que los datos deciden mecánicamente una única teoría verdadera",
      "Que la observación no desempeña papel alguno en la ciencia"
    ]
  },
  {
    enunciado: "¿Qué elemento diferencia un modelo científico de una mera descripción literaria?",
    correcta: "Su capacidad de idealizar, cuantificar y generar predicciones contrastables",
    incorrectas: [
      "Su redacción cuidada y estilo retórico persuasivo",
      "Su antigüedad y prestigio histórico"
    ]
  },
  {
    enunciado: "¿Qué transición marcó el programa químico de Dalton?",
    correcta: "La formalización de la teoría atómica como base explicativa de las leyes ponderales",
    incorrectas: [
      "La sustitución de la experimentación por el cálculo simbólico puro",
      "La identificación de la combustión como pérdida de flogisto"
    ]
  },
  {
    enunciado: "¿Qué aportó Rutherford al entender la materia?",
    correcta: "El modelo nuclear del átomo a partir del experimento de la lámina de oro",
    incorrectas: [
      "La hipótesis del éter luminífero como soporte de la luz",
      "La negación de la existencia del electrón"
    ]
  },
  {
    enunciado: "¿Qué valor educativo tiene estudiar episodios de la historia de la ciencia?",
    correcta: "Favorece la comprensión de la naturaleza dinámica, crítica y social del saber científico",
    incorrectas: [
      "Sustituye la necesidad de aprender conceptos y leyes",
      "Impide el desarrollo del pensamiento crítico en el alumnado"
    ]
  },
  {
    enunciado: "¿Qué cambio conceptual introdujo Mendeleiev con la tabla periódica?",
    correcta: "La ordenación de elementos por periodicidad de propiedades y predicción de elementos desconocidos",
    incorrectas: [
      "La clasificación estética basada en color y densidad visual",
      "La supresión de toda medición cuantitativa en química"
    ]
  },
  {
    enunciado: "¿Por qué es central la replicación en la práctica científica?",
    correcta: "Porque la repetición independiente refuerza la fiabilidad de los resultados",
    incorrectas: [
      "Porque impide que surjan nuevas hipótesis alternativas",
      "Porque sustituye la revisión estadística de los datos"
    ]
  },
  {
    enunciado: "¿Qué expresa la idea de modelos como aproximaciones idealizadas?",
    correcta: "Que simplifican aspectos del fenómeno para captar regularidades relevantes",
    incorrectas: [
      "Que describen fielmente cada detalle sin error",
      "Que son ficciones inútiles separadas de la evidencia"
    ]
  },
  {
    enunciado: "¿Qué papel tienen las hipótesis auxiliares en los programas de investigación?",
    correcta: "Proteger el núcleo teórico ajustando predicciones ante anomalías",
    incorrectas: [
      "Ocultar deliberadamente los datos que contradicen la teoría",
      "Evitar cualquier contacto con la experimentación"
    ]
  },
  {
    enunciado: "¿Qué significa que una predicción sea 'arriesgada' en sentido popperiano?",
    correcta: "Que, de no cumplirse, refutaría con claridad la teoría que la implica",
    incorrectas: [
      "Que es tan vaga que admite cualquier resultado",
      "Que depende solo de opiniones de expertos"
    ]
  },
  {
    enunciado: "¿Qué tipo de cambio supone pasar del calórico a la termodinámica moderna?",
    correcta: "Un reemplazo de entidades hipotéticas por magnitudes conservativas y trabajo-calor medibles",
    incorrectas: [
      "Una simple renombración sin consecuencias experimentales",
      "Un retorno a explicaciones prescientíficas del calor"
    ]
  },
  {
    enunciado: "¿Qué relación guarda la ética de la investigación con la validez del conocimiento?",
    correcta: "La integridad en métodos, datos y autoría es condición para la confianza y la reproducibilidad",
    incorrectas: [
      "La ética es irrelevante cuando los resultados son espectaculares",
      "La autoría múltiple invalida cualquier avance científico"
    ]
  },
  {
    enunciado: "¿Por qué se considera 'abierto' el proceso científico?",
    correcta: "Porque admite revisión continua, incorporación de nuevos métodos y reemplazo de teorías",
    incorrectas: [
      "Porque cualquier opinión personal vale tanto como un resultado replicado",
      "Porque las teorías dejan de estar sometidas a contraste una vez aceptadas"
    ]
  }
];
