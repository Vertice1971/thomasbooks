// temarios/28-el-texto-expositivo-estructuras-y-caracteristicas.js
var PREGUNTAS = [
  {
    enunciado: "Un texto expositivo tiene como propósito principal informar y explicar un contenido de forma clara, organizada y verificable.",
    correcta: "Verdadero, porque prioriza la transmisión comprensible de conocimiento sin imponer una postura persuasiva.",
    incorrectas: [
      "Falso, porque su objetivo central es emocionar al lector mediante recursos líricos.",
      "Falso, porque su finalidad es exclusivamente convencer al receptor de una tesis."
    ]
  },
  {
    enunciado: "¿Qué distingue prototípicamente un texto expositivo de uno argumentativo?",
    correcta: "El expositivo explica sin necesidad de defender una tesis; el argumentativo justifica una postura con razones.",
    incorrectas: [
      "El expositivo siempre usa primera persona; el argumentativo, segunda persona.",
      "El expositivo carece de datos; el argumentativo aporta solo ejemplos literarios."
    ]
  },
  {
    enunciado: "Señala un rasgo estilístico habitual en la exposición eficaz.",
    correcta: "Lenguaje denotativo, preciso y no ambiguo.",
    incorrectas: [
      "Protagonismo de metáforas oscuras y polisemia deliberada.",
      "Quebrar la cohesión para forzar relecturas constantes."
    ]
  },
  {
    enunciado: "¿Cuál es la persona y tiempo verbal más frecuentes en textos expositivos generales?",
    correcta: "Tercera persona y presente de indicativo.",
    incorrectas: [
      "Primera persona del plural en futuro compuesto.",
      "Segunda persona imperativa en pretérito pluscuamperfecto."
    ]
  },
  {
    enunciado: "Indica el conjunto que reúne recursos típicamente expositivos.",
    correcta: "Definiciones, ejemplos, comparaciones y reformulaciones.",
    incorrectas: [
      "Hipérbaton, aliteraciones y retruécanos.",
      "Apostrofes, exclamaciones y interrogaciones retóricas exclusivamente."
    ]
  },
  {
    enunciado: "Selecciona el conector que introduce una reformulación aclaratoria.",
    correcta: "Es decir,",
    incorrectas: [
      "Sin embargo,",
      "Por consiguiente,"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los ordenadores del discurso como “en primer lugar”, “por último” en la exposición?",
    correcta: "Estructuran jerárquicamente la información y guían la lectura.",
    incorrectas: [
      "Sustituyen la necesidad de definiciones y ejemplos.",
      "Imponen necesariamente un tono polémico."
    ]
  },
  {
    enunciado: "Una definición por género próximo y diferencia específica consiste en:",
    correcta: "Incluir la clase a la que pertenece el término y el rasgo que lo distingue.",
    incorrectas: [
      "Aplicar sinónimos poéticos sin precisión terminológica.",
      "Repetir el término a definir dentro de la propia definición."
    ]
  },
  {
    enunciado: "¿Qué organización es típica en un apartado de clasificación expositiva?",
    correcta: "Criterios claros, categorías mutuamente excluyentes y jerarquía estable.",
    incorrectas: [
      "Listas desordenadas según ocurrencia del autor.",
      "Categorías superpuestas sin criterio explícito."
    ]
  },
  {
    enunciado: "La estructura comparación–contraste en un texto expositivo sirve principalmente para:",
    correcta: "Establecer semejanzas y diferencias relevantes entre entidades o conceptos.",
    incorrectas: [
      "Crear suspense y giros inesperados de trama.",
      "Sustituir la evidencia por opiniones personales."
    ]
  },
  {
    enunciado: "En una explicación causa–efecto, ¿qué debe cuidarse especialmente?",
    correcta: "No confundir correlación con causalidad y aportar evidencias suficientes.",
    incorrectas: [
      "Evitar datos y centrarse en anécdotas emotivas.",
      "Usar metáforas extensas en lugar de pruebas."
    ]
  },
  {
    enunciado: "El patrón problema–solución incluye como pasos prototípicos:",
    correcta: "Planteamiento del problema, alternativas, criterios y propuesta razonada.",
    incorrectas: [
      "Exordio lírico, nudo sentimental y moraleja.",
      "Descripción de personajes, clímax y desenlace."
    ]
  },
  {
    enunciado: "La explicación de procesos en exposición técnica se beneficia de:",
    correcta: "Secuencias ordenadas, numeración de pasos y condiciones de ejecución.",
    incorrectas: [
      "Saltos temporales arbitrarios y ambigüedad en los pasos.",
      "El uso exclusivo de imágenes sin texto alguno."
    ]
  },
  {
    enunciado: "La nominalización en la prosa expositiva tiene como efecto principal:",
    correcta: "Aumentar la densidad informativa y compactar relaciones conceptuales.",
    incorrectas: [
      "Suprimir la coherencia temática del párrafo.",
      "Obligar al uso de verbos perfectivos narrativos."
    ]
  },
  {
    enunciado: "¿Cuándo es pertinente la voz pasiva o impersonal en textos expositivos?",
    correcta: "Cuando interesa focalizar procesos o resultados antes que al agente.",
    incorrectas: [
      "Cuando se pretende encubrir errores deliberadamente.",
      "Siempre, porque la voz activa está prohibida."
    ]
  },
  {
    enunciado: "¿Cuál es un reformulador explicativo adecuado?",
    correcta: "Esto es,",
    incorrectas: [
      "Aun así,",
      "Con todo,"
    ]
  },
  {
    enunciado: "Escoge el marcador típico de ejemplificación:",
    correcta: "Por ejemplo,",
    incorrectas: [
      "Por lo tanto,",
      "Sin embargo,"
    ]
  },
  {
    enunciado: "En progresión temática lineal, el rema de un enunciado suele:",
    correcta: "Convertirse en el tema del enunciado siguiente.",
    incorrectas: [
      "Ser irrelevante para el texto posterior.",
      "Repetirse mecánicamente sin aportar novedad."
    ]
  },
  {
    enunciado: "El párrafo expositivo eficaz suele contener:",
    correcta: "Enunciado nuclear, desarrollo con datos y cierre de síntesis.",
    incorrectas: [
      "Una única frase nominal sin conectores.",
      "Una serie de citas sin explicación ni hilo conductor."
    ]
  },
  {
    enunciado: "El metadiscurso textual en exposición divulgativa se usa para:",
    correcta: "Guiar al lector con anuncios de objetivo, alcance, recapitulaciones y transiciones.",
    incorrectas: [
      "Introducir personajes ficticios y diálogos dramáticos.",
      "Evitar todo tipo de señalización explícita."
    ]
  },
  {
    enunciado: "El ‘hedging’ o atenuación responsable en textos expositivos académicos sirve para:",
    correcta: "Expresar cautela ante la evidencia con fórmulas como “podría” o “sugiere que…”.",
    incorrectas: [
      "Ocultar la falta de fuentes mediante eufemismos.",
      "Aumentar artificialmente el tono polémico."
    ]
  },
  {
    enunciado: "Una práctica ética en el uso de fuentes en exposición consiste en:",
    correcta: "Parafrasear fielmente, citar con precisión y aportar referencias trazables.",
    incorrectas: [
      "Resumir sin indicar procedencia ni autoría.",
      "Modificar datos para que encajen con la explicación."
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial hay entre exposición divulgativa y especializada?",
    correcta: "La divulgativa usa lenguaje accesible y ejemplos cotidianos; la especializada emplea tecnicismos y mayor profundidad.",
    incorrectas: [
      "La divulgativa prescinde de datos y la especializada evita ejemplos.",
      "La divulgativa siempre es oral y la especializada solo escrita."
    ]
  },
  {
    enunciado: "La integración de tablas y figuras en un texto expositivo requiere:",
    correcta: "Títulos claros, leyendas informativas y referencias en el cuerpo del texto.",
    incorrectas: [
      "Insertar imágenes sin etiquetar para no distraer.",
      "Suprimir toda explicación porque la imagen “se entiende sola”."
    ]
  },
  {
    enunciado: "Una medida básica de accesibilidad en materiales expositivos digitales es:",
    correcta: "Incluir descripciones alternativas (alt-text) informativas para gráficos e imágenes.",
    incorrectas: [
      "Usar color de bajo contraste para destacar estética.",
      "Sustituir todo el texto por iconos sin etiquetas."
    ]
  },
  {
    enunciado: "¿Cuál es un error típico que degrada la calidad de una definición?",
    correcta: "Incurrir en definición circular que repite el término a definir.",
    incorrectas: [
      "Indicar el género próximo y la diferencia específica.",
      "Aportar un ejemplo ilustrativo tras la definición."
    ]
  },
  {
    enunciado: "El abuso de tecnicismos sin glosario ni ejemplos puede provocar:",
    correcta: "Opacidad y aumento de la carga cognitiva del lector.",
    incorrectas: [
      "Mayor claridad inmediata para todo público.",
      "Reducción automática de ambigüedades sin coste."
    ]
  },
  {
    enunciado: "El uso incoherente de conectores en un texto expositivo produce principalmente:",
    correcta: "Relaciones lógicas confusas y pérdida de cohesión.",
    incorrectas: [
      "Mayor ritmo narrativo y tensión dramática.",
      "Mejor memorización de datos por repetición."
    ]
  },
  {
    enunciado: "Para ganar claridad expositiva conviene:",
    correcta: "Priorizar oraciones bien construidas, evitar ambigüedades y definir términos clave.",
    incorrectas: [
      "Introducir metáforas opacas como sustituto de definiciones.",
      "Alternar registros incompatibles sin aviso previo."
    ]
  },
  {
    enunciado: "En términos de RST (Teoría de la Estructura Retórica), la relación ‘evidence’ se usa para:",
    correcta: "Apoyar una aseveración con datos o ejemplos que la hagan más creíble.",
    incorrectas: [
      "Contradecir deliberadamente la afirmación previa sin fundamento.",
      "Introducir digresiones humorísticas sin función textual."
    ]
  },
  {
    enunciado: "En textos expositivos sobre fenómenos, la distinción entre causa y correlación es relevante porque:",
    correcta: "Evita conclusiones erróneas al no atribuir causalidad a asociaciones espurias.",
    incorrectas: [
      "Permite justificar cualquier relación con suficientes conectores.",
      "Hace innecesaria la citación de fuentes empíricas."
    ]
  },
  {
    enunciado: "La estructura IMRaD (Introducción, Métodos, Resultados y Discusión) es propia de:",
    correcta: "Artículos científicos, como formato expositivo especializado.",
    incorrectas: [
      "Novelas de aprendizaje y relatos autobiográficos.",
      "Crónicas de opinión persuasivas sin datos."
    ]
  },
  {
    enunciado: "En un texto expositivo, la cohesión se logra mediante:",
    correcta: "Referencias, conectores, cadenas léxicas y reformuladores consistentes.",
    incorrectas: [
      "Cambios arbitrarios de tema y elipsis no recuperables.",
      "Solo con títulos llamativos sin desarrollo."
    ]
  },
  {
    enunciado: "La coherencia global de un texto expositivo depende de:",
    correcta: "La organización lógica de ideas y la pertinencia de cada sección respecto al objetivo.",
    incorrectas: [
      "La alternancia aleatoria de gráficos sin relación.",
      "La abundancia de adjetivos valorativos."
    ]
  },
  {
    enunciado: "Un criterio básico para evaluar la calidad informativa de una exposición es:",
    correcta: "Exactitud conceptual, actualidad de fuentes y trazabilidad de los datos.",
    incorrectas: [
      "Capacidad de suscitar polémica sin evidencias.",
      "Extensión máxima con repeticiones deliberadas."
    ]
  },
  {
    enunciado: "Sobre la elección activa/pasiva en exposición, señala lo adecuado:",
    correcta: "La voz activa mejora la transparencia cuando el agente es relevante; la pasiva prioriza procesos o resultados.",
    incorrectas: [
      "La voz pasiva está prohibida por norma en todo texto expositivo.",
      "La voz activa debe evitarse para aparentar objetividad."
    ]
  },
  {
    enunciado: "En exposición divulgativa, un buen ejemplo debe ser:",
    correcta: "Representativo, simple y directamente conectado con la idea que ilustra.",
    incorrectas: [
      "Anecdótico, complejo y tangencial al tema.",
      "Críptico y sin relación con el texto principal."
    ]
  },
  {
    enunciado: "Cuando un texto expositivo incluye evaluaciones, lo responsable es:",
    correcta: "Señalar los criterios y diferenciar claramente datos de valoraciones.",
    incorrectas: [
      "Ocultar la evaluación dentro de definiciones ambiguas.",
      "Presentar opiniones como si fueran hechos establecidos."
    ]
  },
  {
    enunciado: "¿Qué cierre es apropiado en un texto expositivo general?",
    correcta: "Síntesis de las ideas clave y posibles proyecciones o aplicaciones.",
    incorrectas: [
      "Un giro narrativo que contradice lo explicado.",
      "Una consigna persuasiva sin relación con el contenido."
    ]
  }
];

