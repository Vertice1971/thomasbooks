// temarios/06-el-proceso-de-comunicacion-la-situacion-comunicativa.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuáles son los elementos prototípicos del proceso comunicativo en su formulación clásica?",
    correcta: "Emisor, receptor, mensaje, canal, código y contexto.",
    incorrectas: [
      "Autor, lector, capítulo, editorial y tirada.",
      "Productor, consumidor, precio, oferta y demanda."
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre canal y código en comunicación?",
    correcta: "El canal es el medio físico/tecnológico; el código es el sistema de signos compartido.",
    incorrectas: [
      "El canal define la gramática y el código transporta la señal.",
      "No hay diferencias: ambos son sinónimos."
    ]
  },
  {
    enunciado: "¿Qué es el ruido en el modelo de Shannon y Weaver?",
    correcta: "Cualquier interferencia que distorsiona la señal durante la transmisión.",
    incorrectas: [
      "Un recurso retórico para llamar la atención del receptor.",
      "La falta de cortesía en una interacción formal."
    ]
  },
  {
    enunciado: "¿Para qué sirve la redundancia en el proceso comunicativo?",
    correcta: "Para asegurar la decodificación en presencia de ruido y pérdidas.",
    incorrectas: [
      "Para hacer el mensaje más largo sin aportar información.",
      "Para eliminar toda ambigüedad semántica de forma absoluta."
    ]
  },
  {
    enunciado: "¿Qué aporta el modelo de Shannon y Weaver y cuál es su límite?",
    correcta: "Modeliza transmisión de información y ruido; no explica por sí solo significado e intención.",
    incorrectas: [
      "Explica la cortesía lingüística en detalle.",
      "Sustituye la necesidad de cualquier análisis pragmático."
    ]
  },
  {
    enunciado: "Complete la fórmula de Lasswell: ¿Quién dice qué, por qué canal, a quién y...?",
    correcta: "¿Con qué efecto?",
    incorrectas: [
      "¿Con qué rima?",
      "¿Con qué ortografía?"
    ]
  },
  {
    enunciado: "En el modelo SMCR de Berlo, ¿qué rasgos enfatiza?",
    correcta: "Competencias de fuente y receptor, estructura del mensaje y características del canal.",
    incorrectas: [
      "La métrica poética del mensaje.",
      "El soporte legal de la publicación."
    ]
  },
  {
    enunciado: "¿Qué propone Jakobson respecto a funciones del lenguaje?",
    correcta: "Relaciona cada elemento del proceso con una función (referencial, emotiva, conativa, fática, metalingüística y poética).",
    incorrectas: [
      "Niega la existencia de funciones comunicativas.",
      "Reduce la comunicación a la rima y el ritmo."
    ]
  },
  {
    enunciado: "¿Qué caracteriza la función fática?",
    correcta: "Verifica y mantiene abierto el canal de comunicación.",
    incorrectas: [
      "Define reglas ortográficas del código.",
      "Se orienta a la forma estética del mensaje."
    ]
  },
  {
    enunciado: "¿Qué caracteriza la función metalingüística?",
    correcta: "El lenguaje se usa para hablar del propio lenguaje/código.",
    incorrectas: [
      "Se usa para describir el referente externo exclusivamente.",
      "Se orienta a conmover afectivamente al receptor."
    ]
  },
  {
    enunciado: "¿Qué axioma enuncia Watzlawick sobre la comunicación?",
    correcta: "Es imposible no comunicarse.",
    incorrectas: [
      "Solo hay comunicación cuando se escribe.",
      "El silencio nunca comunica nada."
    ]
  },
  {
    enunciado: "Según Watzlawick, ¿qué diferencia existe entre nivel de contenido y de relación?",
    correcta: "El contenido transmite información; la relación define cómo entenderla y la vinculación entre interlocutores.",
    incorrectas: [
      "Ambos son idénticos y siempre coinciden.",
      "El contenido es no verbal y la relación siempre verbal."
    ]
  },
  {
    enunciado: "¿Qué describe la 'puntuación de la secuencia de hechos' en Watzlawick?",
    correcta: "Cada parte interpreta el encadenamiento de acciones de forma distinta, generando malentendidos.",
    incorrectas: [
      "La puntuación ortográfica de los textos académicos.",
      "El orden fijo e inmutable de turnos en toda conversación."
    ]
  },
  {
    enunciado: "En Watzlawick, ¿qué contrasta 'digital' y 'analógico'?",
    correcta: "Digital: contenido simbólico verbal; analógico: componentes no verbales que definen la relación.",
    incorrectas: [
      "Digital: comunicación en internet; analógico: comunicación cara a cara.",
      "Digital: rápido; analógico: lento, sin diferencias funcionales."
    ]
  },
  {
    enunciado: "¿Qué distingue interacciones simétricas y complementarias?",
    correcta: "Simétricas: roles equivalentes; complementarias: roles diferenciales que se refuerzan.",
    incorrectas: [
      "Simétricas: siempre conflictivas; complementarias: siempre armónicas.",
      "No existen diferencias, es una distinción obsoleta."
    ]
  },
  {
    enunciado: "¿Cómo define Malinowski el 'contexto de situación'?",
    correcta: "Conjunto de circunstancias sociales y culturales que hacen inteligible el enunciado.",
    incorrectas: [
      "La lista de sinónimos de un diccionario.",
      "El decorado físico sin influencia en el significado."
    ]
  },
  {
    enunciado: "En el modelo SPEAKING de Hymes, ¿qué elemento corresponde a 'Key'?",
    correcta: "La clave o tonalidad (seriedad, humor, ironía) del acto de habla.",
    incorrectas: [
      "El canal tecnológico empleado.",
      "El género gramatical de los sustantivos."
    ]
  },
  {
    enunciado: "¿Qué son las 'señales de contextualización' según Gumperz?",
    correcta: "Marcas prosódicas, léxicas o gestuales que guían inferencias sobre intención y marco.",
    incorrectas: [
      "Notas a pie de página bibliográficas.",
      "Reglas ortográficas de la acentuación."
    ]
  },
  {
    enunciado: "En Halliday, ¿qué describen 'campo', 'tenor' y 'modo'?",
    correcta: "Campo: actividad/tema; tenor: relaciones y roles; modo: canal/organización textual.",
    incorrectas: [
      "Campo: sinonimia; tenor: rima; modo: métrica.",
      "Campo: léxico; tenor: morfología; modo: sintaxis."
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre registro y género discursivo?",
    correcta: "Registro: variedad según contexto; género: forma convencional con propósito comunicativo.",
    incorrectas: [
      "Registro es escrito y género es oral.",
      "Son sinónimos en cualquier teoría lingüística."
    ]
  },
  {
    enunciado: "¿Qué es la deixis en pragmática?",
    correcta: "Referencia dependiente del contexto a persona, tiempo, espacio o discurso.",
    incorrectas: [
      "Equivalencia semántica estable entre sinónimos.",
      "Uso de metáforas en textos literarios."
    ]
  },
  {
    enunciado: "¿Qué es la indexicalidad?",
    correcta: "Vínculo por el que ciertos rasgos del enunciado remiten al contexto social y situacional.",
    incorrectas: [
      "La obligatoriedad de usar índices alfabéticos.",
      "El uso exclusivo de pronombres personales."
    ]
  },
  {
    enunciado: "En Análisis de la Conversación, ¿qué regula el sistema de turnos?",
    correcta: "Selección/autoselección, cambios de turno y solapamientos según reglas locales.",
    incorrectas: [
      "El orden alfabético de participantes.",
      "La duración fija e idéntica de todos los turnos."
    ]
  },
  {
    enunciado: "¿Qué son los pares adyacentes?",
    correcta: "Secuencias básicas como pregunta–respuesta, saludo–saludo o oferta–aceptación.",
    incorrectas: [
      "Dos oraciones con rima consonante.",
      "Dos frases separadas por punto y aparte."
    ]
  },
  {
    enunciado: "¿Qué es la 'reparación' conversacional?",
    correcta: "Mecanismo para solucionar problemas de audición, producción o comprensión en curso.",
    incorrectas: [
      "Corrección ortográfica posterior a la interacción.",
      "Sustitución de un interlocutor por otro."
    ]
  },
  {
    enunciado: "¿Qué enuncia el principio de cooperación de Grice?",
    correcta: "Contribuye a la conversación según lo requerido por su propósito o dirección.",
    incorrectas: [
      "Hablar siempre el mayor tiempo posible.",
      "Evitar cualquier silencio aunque sea significativo."
    ]
  },
  {
    enunciado: "¿Qué prescribe la máxima de cantidad?",
    correcta: "Da tanta información como sea necesaria, ni más ni menos.",
    incorrectas: [
      "Sé tan breve que resulte críptico.",
      "Aporta toda la información disponible siempre."
    ]
  },
  {
    enunciado: "¿Qué exige la máxima de calidad?",
    correcta: "No digas lo que crees falso ni afirmes sin pruebas suficientes.",
    incorrectas: [
      "Evita cualquier metáfora.",
      "Usa tecnicismos para parecer fiable."
    ]
  },
  {
    enunciado: "¿Qué recoge la máxima de relación (relevancia)?",
    correcta: "Sé pertinente: contribuye con información relacionada con el tema.",
    incorrectas: [
      "Evita responder para mantener el misterio.",
      "Repite el mensaje varias veces aunque no aporte."
    ]
  },
  {
    enunciado: "¿Qué indica la máxima de modo?",
    correcta: "Sé claro: evita oscuridad, ambigüedad innecesaria y desorden.",
    incorrectas: [
      "Emplea la mayor complejidad posible.",
      "Evita cualquier ejemplo o ilustración."
    ]
  },
  {
    enunciado: "Según Brown y Levinson, ¿qué diferencia hay entre cortesía positiva y negativa?",
    correcta: "La positiva busca acercamiento y afiliación; la negativa respeta la autonomía y evita imposición.",
    incorrectas: [
      "La positiva es oral y la negativa escrita.",
      "La positiva es sincera y la negativa siempre fingida."
    ]
  },
  {
    enunciado: "¿Qué es la 'face' en Goffman y su gestión en interacción?",
    correcta: "Imagen social que proyectamos; se protege mediante estrategias de cortesía.",
    incorrectas: [
      "Expresión facial biológica sin dimensión social.",
      "Un rol exclusivo de la comunicación escrita."
    ]
  },
  {
    enunciado: "En comunicación mediada por tecnología, ¿qué rasgos condicionan la interacción?",
    correcta: "Sincronía/asincronía, persistencia, editabilidad y visibilidad del canal.",
    incorrectas: [
      "Solo el tamaño del dispositivo usado.",
      "La imposibilidad de usar elementos no verbales."
    ]
  },
  {
    enunciado: "¿Qué función cumplen emojis, gifs y reacciones en entornos digitales?",
    correcta: "Actúan como paralingüística digital que desambigua tono e intención.",
    incorrectas: [
      "Sustituyen la necesidad de argumentar.",
      "Tienen el mismo significado en todas las culturas."
    ]
  },
  {
    enunciado: "¿Cuál es una norma básica de netiqueta en contextos educativos?",
    correcta: "Identificarse, ser claro y respetuoso, y evitar mayúsculas sostenidas (gritos).",
    incorrectas: [
      "Responder con un meme a toda intervención.",
      "Usar ambigüedad deliberada para ganar tiempo."
    ]
  },
  {
    enunciado: "¿Qué medida mejora la accesibilidad comunicativa en el aula?",
    correcta: "Lenguaje claro, apoyos visuales y pautas de lectura fácil cuando proceda.",
    incorrectas: [
      "Incrementar la velocidad del discurso para cubrir más temario.",
      "Eliminar gestos para no distraer al alumnado."
    ]
  },
  {
    enunciado: "¿Qué describe la teoría de la acomodación comunicativa?",
    correcta: "Ajuste del habla y conductas comunicativas para converger o diverger según metas sociales.",
    incorrectas: [
      "Prohibición de variar registro en una misma interacción.",
      "Identidad fija sin influencia del contexto."
    ]
  },
  {
    enunciado: "¿Cuál NO es un criterio principal de eficacia comunicativa textual?",
    correcta: "Rima constante entre oraciones consecutivas.",
    incorrectas: [
      "Adecuación al contexto y propósito.",
      "Coherencia y cohesión del discurso."
    ]
  },
  {
    enunciado: "¿Qué práctica didáctica favorece la competencia comunicativa situada?",
    correcta: "Debates y simulaciones con reglas de cortesía, turnos y evaluación formativa.",
    incorrectas: [
      "Dictado unilateral sin interacción.",
      "Evaluar solo ortografía en presentaciones orales."
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre contexto interno y externo en una interacción?",
    correcta: "Interno: información lingüística y co-texto; externo: circunstancias extralingüísticas de la situación.",
    incorrectas: [
      "Interno: canal; externo: código.",
      "Interno: elementos no verbales; externo: gramática."
    ]
  }
];
