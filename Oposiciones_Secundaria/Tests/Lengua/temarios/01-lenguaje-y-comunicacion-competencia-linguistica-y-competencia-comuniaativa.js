// temarios/01-lenguaje-y-comunicacion-competencia-linguistica-y-competencia-comuniaativa.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por lenguaje en sentido estricto dentro de los estudios lingüísticos?",
    correcta: "La facultad humana universal para crear y comprender infinitos mensajes a partir de recursos finitos.",
    incorrectas: [
      "El conjunto de normas ortográficas y tipográficas de una comunidad.",
      "El repertorio de gestos culturales compartidos sin componente verbal."
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia básica entre lengua y habla según la tradición saussureana?",
    correcta: "La lengua es el sistema compartido por la comunidad, mientras que el habla es su uso individual en situaciones concretas.",
    incorrectas: [
      "La lengua es siempre escrita y el habla siempre oral.",
      "La lengua es natural y el habla es artificial y planificada."
    ]
  },
  {
    enunciado: "¿Qué rasgo de Hockett explica que podamos referirnos a tiempos y lugares no presentes?",
    correcta: "El desplazamiento.",
    incorrectas: [
      "La intercambiabilidad de mensajes.",
      "La reflexividad metalingüística."
    ]
  },
  {
    enunciado: "¿Qué modelo define con precisión los conceptos de información, canal y ruido?",
    correcta: "La teoría matemática de la comunicación de Shannon y Weaver.",
    incorrectas: [
      "La gramática generativa transformacional de Chomsky.",
      "La teoría de la relevancia de Sperber y Wilson."
    ]
  },
  {
    enunciado: "¿Qué propone Jakobson al añadir las funciones del lenguaje a su modelo comunicativo?",
    correcta: "Que cada elemento del proceso se vincula a una función (referencial, emotiva, conativa, fática, metalingüística y poética).",
    incorrectas: [
      "Que el significado depende únicamente de la estructura profunda.",
      "Que la comunicación solo puede explicarse por la intención del emisor."
    ]
  },
  {
    enunciado: "¿Cuál es el papel del contexto en la comunicación humana?",
    correcta: "Configura la interpretación del mensaje, condicionando la adecuación, la inferencia y la intencionalidad pragmática.",
    incorrectas: [
      "Asegura que todas las oraciones se interpreten literalmente sin ambigüedad.",
      "Sirve solo para determinar la corrección ortográfica del texto."
    ]
  },
  {
    enunciado: "¿Qué sostiene Saussure sobre la naturaleza del signo lingüístico?",
    correcta: "Es arbitrario y une un significante con un significado en el sistema de la lengua.",
    incorrectas: [
      "Es motivado icónicamente por semejanza con la realidad.",
      "Es unívoco y no admite polisemia dentro del sistema."
    ]
  },
  {
    enunciado: "En la triádica de Peirce, ¿qué término nombra al ‘vehículo’ perceptible del signo?",
    correcta: "Representamen.",
    incorrectas: [
      "Interpretante.",
      "Índice."
    ]
  },
  {
    enunciado: "¿Qué distingue a iconos, índices y símbolos en Peirce?",
    correcta: "El icono se basa en semejanza, el índice en contigüidad causal y el símbolo en convención.",
    incorrectas: [
      "El icono es convencional, el índice es imaginario y el símbolo es natural.",
      "El icono es verbal, el índice es gestual y el símbolo es exclusivamente matemático."
    ]
  },
  {
    enunciado: "¿Qué describe con precisión la competencia lingüística en la propuesta de Chomsky?",
    correcta: "El conocimiento implícito del sistema gramatical que permite generar oraciones bien formadas.",
    incorrectas: [
      "La suma de hábitos de cortesía y normas sociales en la conversación.",
      "El dominio exclusivo del vocabulario especializado de una disciplina."
    ]
  },
  {
    enunciado: "¿Cuál es la relación entre competencia y actuación en Chomsky?",
    correcta: "La competencia es conocimiento subyacente; la actuación es su realización condicionada por factores de procesamiento y contexto.",
    incorrectas: [
      "Ambas son equivalentes y no se distinguen analíticamente.",
      "La actuación es innata y la competencia se adquiere por imitación."
    ]
  },
  {
    enunciado: "¿Qué incorpora Hymes cuando introduce la competencia comunicativa?",
    correcta: "La necesidad de saber cuándo hablar, con quién, cómo y con qué propósito en una comunidad de habla.",
    incorrectas: [
      "La reducción de la gramática a las reglas de pronunciación.",
      "La sustitución de la sintaxis por la ortografía normativa."
    ]
  },
  {
    enunciado: "Según Canale y Swain, ¿qué incluye la competencia sociolingüística?",
    correcta: "El dominio de normas de cortesía, registros, variedades y adecuación a situaciones comunicativas.",
    incorrectas: [
      "El conocimiento de las reglas de derivación morfológica exclusivamente.",
      "La habilidad de memorizar listas de palabras sin contexto."
    ]
  },
  {
    enunciado: "¿Qué describe la competencia discursiva en el modelo de Canale?",
    correcta: "La capacidad para organizar enunciados en textos coherentes y cohesionados.",
    incorrectas: [
      "La habilidad para pronunciar correctamente fonemas aislados.",
      "La memorización de paradigmas verbales sin uso textual."
    ]
  },
  {
    enunciado: "¿Qué aporta la competencia estratégica en la comunicación?",
    correcta: "Recursos de compensación y planificación para superar lagunas y mantener la interacción.",
    incorrectas: [
      "Un conjunto de reglas morfosintácticas universales e invariables.",
      "La prohibición de reformular o pedir aclaraciones."
    ]
  },
  {
    enunciado: "¿Qué foco añade Bachman a la evaluación de la competencia comunicativa?",
    correcta: "La competencia pragmática y las habilidades para el uso funcional del lenguaje en tareas.",
    incorrectas: [
      "La eliminación de la dimensión sociocultural en la evaluación.",
      "La evaluación exclusiva de la ortografía normativa."
    ]
  },
  {
    enunciado: "¿Qué son los actos de habla en la tradición de Austin y Searle?",
    correcta: "Unidades de acción lingüística con dimensión locutiva, ilocutiva y perlocutiva.",
    incorrectas: [
      "Oraciones que solo describen hechos sin efectos sociales.",
      "Códigos de transcripción fonética sin contenido social."
    ]
  },
  {
    enunciado: "¿Qué función cumple la máxima de cantidad en la pragmática de Grice?",
    correcta: "Aporta la información necesaria, ni más ni menos de la requerida para el propósito conversacional.",
    incorrectas: [
      "Garantiza la corrección ortográfica de todos los enunciados.",
      "Obliga a sostener el turno de palabra indefinidamente."
    ]
  },
  {
    enunciado: "¿Qué describe mejor la cortesía lingüística según Brown y Levinson?",
    correcta: "Estrategias para proteger la ‘imagen’ propia y ajena en la interacción.",
    incorrectas: [
      "Un conjunto de reglas sintácticas universales.",
      "Un catálogo de gestos invariables en todas las culturas."
    ]
  },
  {
    enunciado: "¿Qué axioma central formula Watzlawick sobre la comunicación?",
    correcta: "Es imposible no comunicarse en la interacción humana.",
    incorrectas: [
      "Solo se comunica quien habla explícitamente.",
      "La comunicación no verbal carece de significado."
    ]
  },
  {
    enunciado: "¿Qué caracteriza la función fática del lenguaje en Jakobson?",
    correcta: "Verifica y mantiene el canal de comunicación abierto.",
    incorrectas: [
      "Se orienta al referente para aportar datos objetivos.",
      "Se centra en la forma del mensaje con finalidad estética."
    ]
  },
  {
    enunciado: "¿Cuál es un efecto típico del ‘ruido’ en el modelo de Shannon y Weaver?",
    correcta: "Distorsiona la señal en el canal y dificulta la decodificación del mensaje.",
    incorrectas: [
      "Detiene la producción de oraciones gramaticales en la lengua.",
      "Impide que exista polisemia en los signos."
    ]
  },
  {
    enunciado: "¿Qué papel tiene el código en el proceso comunicativo?",
    correcta: "Es el sistema de signos y reglas compartido por emisor y receptor para codificar y decodificar mensajes.",
    incorrectas: [
      "Es el soporte físico por el que viaja la señal.",
      "Es el contexto espacial donde se sitúan los interlocutores."
    ]
  },
  {
    enunciado: "¿Qué entendemos por adecuación textual en educación lingüística?",
    correcta: "Ajuste del texto a la situación comunicativa, destinatario, propósito y registro.",
    incorrectas: [
      "Concordancia exclusiva de número y persona entre sujeto y verbo.",
      "Uso preferente de oraciones simples frente a complejas."
    ]
  },
  {
    enunciado: "¿Qué rasgo diferencia a la comunicación humana de la animal según la ‘productividad’?",
    correcta: "Posibilita crear mensajes nuevos nunca antes emitidos.",
    incorrectas: [
      "Restringe la emisión a señales fijas e invariables.",
      "Obliga a repetir fórmulas memorizadas sin creatividad."
    ]
  },
  {
    enunciado: "¿Qué implica la doble articulación del lenguaje?",
    correcta: "La combinación de unidades con significado a partir de unidades menores sin significado.",
    incorrectas: [
      "La prioridad absoluta del léxico frente a la sintaxis.",
      "La imposibilidad de segmentar el habla en unidades."
    ]
  },
  {
    enunciado: "¿Qué es la deíxis desde la perspectiva pragmática?",
    correcta: "La referencia dependiente del contexto a personas, lugares y tiempos del enunciado.",
    incorrectas: [
      "La sinonimia estable entre palabras de un diccionario.",
      "La metáfora convencionalizada en los discursos literarios."
    ]
  },
  {
    enunciado: "¿Qué relación establece el enfoque comunicativo con la enseñanza de la lengua?",
    correcta: "Prioriza el uso significativo del lenguaje en tareas reales de comprensión y producción.",
    incorrectas: [
      "Sustituye toda práctica textual por ejercicios de repetición mecánica.",
      "Reduce la enseñanza a listas de definiciones metalingüísticas."
    ]
  },
  {
    enunciado: "¿Cómo se articula la competencia comunicativa en el currículo actual?",
    correcta: "Como una meta transversal que integra saberes lingüísticos, socioculturales, discursivos y estratégicos.",
    incorrectas: [
      "Como un contenido optativo exclusivamente literario.",
      "Como un anexo técnico limitado a la ortografía."
    ]
  },
  {
    enunciado: "¿Qué distingue competencia lingüística de competencia comunicativa?",
    correcta: "La primera alude al conocimiento del sistema; la segunda al uso adecuado y eficaz en contextos diversos.",
    incorrectas: [
      "Son sinónimos en la teoría contemporánea.",
      "La comunicativa se limita a la pronunciación y la entonación."
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la competencia pragmática en la interacción?",
    correcta: "Permite interpretar intenciones, gestionar actos de habla e inferir significados implícitos.",
    incorrectas: [
      "Obliga a que todos los enunciados sean literales.",
      "Sustituye la gramática por reglas de rima."
    ]
  },
  {
    enunciado: "¿Cuál es un objetivo clave al trabajar comprensión oral en el aula?",
    correcta: "Desarrollar estrategias de escucha activa, verificación de hipótesis e inferencia contextual.",
    incorrectas: [
      "Evitar cualquier interacción y centrarse solo en dictados.",
      "Memorizar sin apoyo de contexto listas de palabras sueltas."
    ]
  },
  {
    enunciado: "¿Qué es la función metalingüística del lenguaje?",
    correcta: "El uso del lenguaje para hablar sobre el propio lenguaje.",
    incorrectas: [
      "El uso del lenguaje para persuadir mediante recursos retóricos.",
      "El uso del lenguaje para mantener el contacto social informal."
    ]
  },
  {
    enunciado: "¿Qué relación establece el MCER con la competencia comunicativa?",
    correcta: "Define descriptores por niveles que integran producción, comprensión, interacción y mediación.",
    incorrectas: [
      "Se limita a prescribir normas ortográficas para cada curso.",
      "Clasifica únicamente las obras literarias canónicas."
    ]
  },
  {
    enunciado: "¿Qué es un acto ilocutivo en la teoría de los actos de habla?",
    correcta: "La fuerza con la que se realiza una acción al decir algo (prometer, ordenar, preguntar).",
    incorrectas: [
      "El efecto psicológico no previsto del enunciado.",
      "La articulación fonética de un sonido aislado."
    ]
  },
  {
    enunciado: "¿Qué describe la cohesión textual?",
    correcta: "Los mecanismos lingüísticos que conectan oraciones (referencias, conectores, elipsis, reiteraciones).",
    incorrectas: [
      "El conjunto de ideas principales de un texto sin marcas lingüísticas.",
      "La distribución de acentos prosódicos en palabras aisladas."
    ]
  },
  {
    enunciado: "¿Qué entendemos por coherencia en un texto expositivo?",
    correcta: "La organización lógica de contenidos que hace posible una interpretación global consistente.",
    incorrectas: [
      "La presencia obligatoria de citas literales en cada párrafo.",
      "La ausencia de conectores para evitar repeticiones."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la competencia plurilingüe e intercultural en el aula?",
    correcta: "La habilidad de movilizar repertorios lingüísticos y culturales para interactuar eficazmente con diversidad de interlocutores.",
    incorrectas: [
      "La imposición de una única variedad estándar en toda situación.",
      "La separación estricta de lenguas que impide cualquier transferencia."
    ]
  },
  {
    enunciado: "¿Qué función cumple la retroalimentación en tareas comunicativas?",
    correcta: "Favorece la toma de conciencia, la reformulación y la mejora de la adecuación y corrección.",
    incorrectas: [
      "Sustituye la práctica comunicativa por calificaciones finales.",
      "Evita que el alumnado negocie significados durante la actividad."
    ]
  },
  {
    enunciado: "¿Qué aporta el análisis del discurso a la educación lingüística?",
    correcta: "Herramientas para interpretar géneros, roles, ideologías y propósitos en prácticas comunicativas reales.",
    incorrectas: [
      "Una taxonomía de sílabas sin aplicación al uso real.",
      "El reemplazo de la escritura por iconos no verbales."
    ]
  },
  {
    enunciado: "¿Cuál es un principio del enfoque por tareas para desarrollar competencia comunicativa?",
    correcta: "Usar situaciones de comunicación con objetivos claros y productos verificables.",
    incorrectas: [
      "Evitar cualquier contacto con textos auténticos.",
      "Limitarse a ejercicios descontextualizados de huecos gramaticales."
    ]
  }
];
