// temarios/21-Grandes-lineas-de-investigacion-historica-en-los-siglos-xix-y-xx.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué gran transformación caracteriza a la historiografía del paso del siglo XIX al XX?",
    correcta: "Del positivismo centrado en el documento a corrientes plurales, críticas e interdisciplinares",
    incorrectas: [
      "Del análisis social al exclusivismo biográfico de grandes personajes",
      "De la comparación internacional al localismo sincrónico estricto"
    ]
  },
  {
    enunciado: "¿Qué buscaba el método rankeano en el siglo XIX?",
    correcta: "Reconstruir el pasado ‘tal como fue’ mediante crítica rigurosa de fuentes escritas",
    incorrectas: [
      "Explicar procesos solo con modelos econométricos",
      "Sustituir el archivo por testimonios orales no contrastados"
    ]
  },
  {
    enunciado: "¿Qué institución fue clave para la profesionalización de la Historia en el XIX?",
    correcta: "La expansión de archivos y cátedras universitarias especializadas",
    incorrectas: [
      "Las tertulias literarias sin acceso a documentación",
      "Las academias privadas dedicadas a ficción histórica"
    ]
  },
  {
    enunciado: "¿Qué novedad metodológica aporta la Escuela de Annales desde 1929?",
    correcta: "La historia total que integra estructuras económicas, sociales y mentalidades",
    incorrectas: [
      "El rechazo de la economía como factor explicativo",
      "La prohibición del uso de fuentes no escritas"
    ]
  },
  {
    enunciado: "¿Qué significa ‘larga duración’ en la obra de Fernand Braudel?",
    correcta: "Ritmos estructurales lentos que condicionan los acontecimientos",
    incorrectas: [
      "Sucesos puntuales sin marco estructural",
      "Ciclos políticos de un solo mandato gubernamental"
    ]
  },
  {
    enunciado: "¿Qué aspecto central enfatiza el materialismo histórico?",
    correcta: "El papel de las relaciones de producción y la lucha de clases",
    incorrectas: [
      "La autosuficiencia del individuo sin contexto social",
      "La irrelevancia de la economía en los procesos históricos"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a la historia social del siglo XX?",
    correcta: "Atención a grupos subalternos y ‘historia desde abajo’",
    incorrectas: [
      "Centrarse únicamente en las élites cortesanas",
      "Desatender los movimientos colectivos por su complejidad"
    ]
  },
  {
    enunciado: "¿Qué busca la microhistoria (p. ej., Carlo Ginzburg)?",
    correcta: "Iluminar estructuras generales a partir de casos locales minuciosos",
    incorrectas: [
      "Sustituir la investigación por conjeturas literarias",
      "Negar la utilidad de las fuentes primarias"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la cliometría en historia económica?",
    correcta: "Uso de series cuantitativas y modelos para contrastar hipótesis",
    incorrectas: [
      "Rechazo de la medición por ser ‘antihistórica’",
      "Exclusión de toda interpretación cualitativa"
    ]
  },
  {
    enunciado: "¿Qué aportó E. P. Thompson a la historiografía social?",
    correcta: "Una visión del proceso histórico como experiencia y agencia de las clases trabajadoras",
    incorrectas: [
      "Un retorno al relato dinástico tradicional",
      "La primacía absoluta del determinismo tecnológico"
    ]
  },
  {
    enunciado: "¿Qué define la ‘historia de las mentalidades’?",
    correcta: "Estudio de representaciones colectivas, creencias y sensibilidades",
    incorrectas: [
      "Exclusión de fuentes culturales por subjetivas",
      "Reducción del análisis a decisiones ministeriales"
    ]
  },
  {
    enunciado: "¿Qué papel juega la interdisciplinariedad en el siglo XX?",
    correcta: "Integra métodos de sociología, geografía, antropología y economía",
    incorrectas: [
      "Sustituye el método histórico por encuestas sin contexto",
      "Dispensa del trabajo con archivos"
    ]
  },
  {
    enunciado: "¿Qué señala la crítica posmoderna sobre la objetividad histórica?",
    correcta: "Que toda narración está mediada por lenguaje, categorías y poder",
    incorrectas: [
      "Que los relatos históricos son neutrales por definición",
      "Que la evidencia material carece de valor en historiografía"
    ]
  },
  {
    enunciado: "¿Qué tipo de fuentes amplía la historia cultural a partir de la segunda mitad del XX?",
    correcta: "Fuentes iconográficas, audiovisuales y prácticas culturales",
    incorrectas: [
      "Solo documentos notariales y diplomáticos",
      "Exclusivamente estadísticas macroeconómicas"
    ]
  },
  {
    enunciado: "¿Qué distingue la historia-narrativa de la historia-problema?",
    correcta: "La primera se centra en el relato; la segunda en preguntas analíticas",
    incorrectas: [
      "La historia-problema renuncia a la explicación",
      "La historia-narrativa prohíbe el uso de fuentes primarias"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue la historia comparada?",
    correcta: "Identificar patrones y divergencias entre contextos distintos",
    incorrectas: [
      "Uniformar conclusiones sin considerar diferencias",
      "Evitar el análisis de largo plazo"
    ]
  },
  {
    enunciado: "¿Qué advierte Hayden White sobre los relatos históricos?",
    correcta: "Que están configurados por tramas y tropos retóricos",
    incorrectas: [
      "Que carecen de toda dimensión narrativa",
      "Que la forma del relato es irrelevante para el sentido histórico"
    ]
  },
  {
    enunciado: "¿Qué desarrolla Michel Foucault para el análisis histórico?",
    correcta: "Arqueología y genealogía del saber y del poder",
    incorrectas: [
      "Una historia exclusivamente diplomática",
      "Un método de archivo que evita el discurso"
    ]
  },
  {
    enunciado: "¿Qué aportan las ‘series’ en historia serial francesa?",
    correcta: "Observan tendencias repetitivas y ritmos en el tiempo",
    incorrectas: [
      "Desaconsejan cualquier medición temporal",
      "Eliminan el interés por los sujetos históricos"
    ]
  },
  {
    enunciado: "¿Qué implica el ‘giro lingüístico’ para la historiografía?",
    correcta: "Atender a cómo el lenguaje construye los objetos históricos",
    incorrectas: [
      "Sustituir la investigación por crítica literaria sin fuentes",
      "Negar la existencia de hechos documentados"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene la historia de género desde los años 70-80?",
    correcta: "Revelar desigualdades, roles y experiencias históricas de mujeres y hombres",
    incorrectas: [
      "Sustituir la evidencia por opiniones personales",
      "Eliminar la dimensión económica de los procesos"
    ]
  },
  {
    enunciado: "¿Qué relación propone Annales con la geografía?",
    correcta: "Entender el espacio como condicionante de estructuras y prácticas",
    incorrectas: [
      "Reducir la geografía a meras descripciones escénicas",
      "Ignorar el medio físico en la explicación histórica"
    ]
  },
  {
    enunciado: "¿Qué función tuvo la revista Annales d’Histoire Économique et Sociale?",
    correcta: "Difundir la historia-problema y enfoques estructurales e interdisciplinares",
    incorrectas: [
      "Reforzar la hegemonía del relato político-eventual",
      "Defender el exclusivismo de la biografía dinástica"
    ]
  },
  {
    enunciado: "¿Qué riesgo señala la cliometría mal aplicada?",
    correcta: "Confundir correlaciones con causalidad y descontextualizar datos",
    incorrectas: [
      "Aumentar inevitablemente el sesgo de confirmación cualitativo",
      "Impedir todo contraste de hipótesis"
    ]
  },
  {
    enunciado: "¿Qué aportó Eric Hobsbawm a la historiografía del siglo XX?",
    correcta: "Síntesis magistrales sobre cambios sociales y económicos a escala mundial",
    incorrectas: [
      "Una defensa del presentismo como método",
      "La negación del conflicto social como motor del cambio"
    ]
  },
  {
    enunciado: "¿Qué define la ‘historia desde abajo’?",
    correcta: "Centrar el análisis en experiencias y resistencias de sectores populares",
    incorrectas: [
      "Describir exclusivamente decisiones diplomáticas",
      "Excluir testimonios obreros y campesinos por sesgados"
    ]
  },
  {
    enunciado: "¿Qué aporta la historia cultural al estudio del poder?",
    correcta: "Analiza símbolos, discursos y prácticas que legitiman dominaciones",
    incorrectas: [
      "Reduce el poder a decretos ministeriales",
      "Declara irrelevante la cultura para el cambio social"
    ]
  },
  {
    enunciado: "¿Qué dimensión del tiempo subraya Braudel además de la larga duración?",
    correcta: "La media y la corta duración articuladas con los acontecimientos",
    incorrectas: [
      "La atemporalidad como principio de método",
      "La instantaneidad como única escala válida"
    ]
  },
  {
    enunciado: "¿Qué impacto tienen las guerras mundiales en la historiografía del XX?",
    correcta: "Impulsan enfoques globales y comparativos sobre Estados y sociedades",
    incorrectas: [
      "Vuelven imposible la investigación archivística",
      "Obligan a abandonar la historia económica"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue la crítica externa de la fuente en clave rankeana?",
    correcta: "Verificar autenticidad, autoría, procedencia y datación",
    incorrectas: [
      "Inferir significados simbólicos sin contraste",
      "Medir impactos socioeconómicos agregados"
    ]
  },
  {
    enunciado: "¿Qué aportó Marc Bloch al oficio del historiador?",
    correcta: "Una reflexión metodológica sobre testimonios y comparación",
    incorrectas: [
      "Un manual de estilo literario sin fuentes",
      "La defensa del mito como fuente exclusiva"
    ]
  },
  {
    enunciado: "¿Qué papel cumplen los archivos nacionales creados en el XIX?",
    correcta: "Centralizan, conservan y ponen a disposición fondos documentales",
    incorrectas: [
      "Sustituyen la crítica por inventarios inertes",
      "Evitan la consulta pública para preservar el secreto"
    ]
  },
  {
    enunciado: "¿Qué relación establece la historia económica con la demografía histórica?",
    correcta: "Utiliza series de población para explicar ciclos y estructuras productivas",
    incorrectas: [
      "Considera irrelevante la población para el desarrollo",
      "Prohíbe el uso de censos por imprecisos"
    ]
  },
  {
    enunciado: "¿Qué propone la historia cultural sobre la identidad colectiva?",
    correcta: "Que se construye históricamente mediante prácticas y representaciones",
    incorrectas: [
      "Que es fija e inmutable por naturaleza",
      "Que depende solo de decisiones jurídicas"
    ]
  },
  {
    enunciado: "¿Qué limitación se reconoce al ideal de objetividad del XIX?",
    correcta: "La mediación del observador, categorías teóricas y selección de fuentes",
    incorrectas: [
      "La imposibilidad de usar archivos por sesgo intrínseco",
      "La prohibición de comparar casos"
    ]
  },
  {
    enunciado: "¿Qué herramienta metodológica se generaliza en el XX para grandes corpus?",
    correcta: "Bases de datos y tratamiento estadístico de series",
    incorrectas: [
      "Prohibición de cuantificar",
      "Sustitución de archivos por encuestas de opinión actuales"
    ]
  },
  {
    enunciado: "¿Qué ventaja ofrece la historia comparada transnacional?",
    correcta: "Detectar circulaciones de ideas, instituciones y tecnologías",
    incorrectas: [
      "Desvincular procesos de su contexto espacial",
      "Evitar el estudio de interdependencias"
    ]
  },
  {
    enunciado: "¿Qué precaución metodológica exige el uso de testimonios orales?",
    correcta: "Contextualizar, contrastar y atender a la memoria selectiva",
    incorrectas: [
      "Suponer neutralidad por ser vivencias directas",
      "Evitar toda transcripción y análisis"
    ]
  }
];
