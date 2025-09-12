// temarios/18-Los-distintos-planteamientos-en-torno-al-concepto-de-sustancia-valoracion-critica-del-principio-de-causalidad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué significa 'sustancia' en el sentido clásico aristotélico?",
    correcta: "Aquello que existe en sí y no en otro, fundamento de los accidentes",
    incorrectas: [
      "Una propiedad relacional que depende siempre de otra cosa",
      "Una abstracción lingüística sin correlato ontológico"
    ]
  },
  {
    enunciado: "¿En qué obras expone Aristóteles de manera central su doctrina de la sustancia?",
    correcta: "En 'Metafísica' (especialmente Z, H, Θ) y en 'Categorías'",
    incorrectas: [
      "En 'Política' y 'Retórica'",
      "En 'Física' libros VII y VIII exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál de estas caracterizaciones corresponde a la 'sustancia primera' en Aristóteles?",
    correcta: "Este individuo concreto (por ejemplo, este caballo, esta persona)",
    incorrectas: [
      "El género más universal de todos los entes",
      "La materia prima indiferenciada"
    ]
  },
  {
    enunciado: "¿Qué relación guardan esencia y sustancia en la ontología aristotélica?",
    correcta: "La esencia expresa 'lo que es' del ente y se identifica con la forma sustancial",
    incorrectas: [
      "La esencia es un accidente cuantitativo",
      "La esencia es un nombre sin referencia"
    ]
  },
  {
    enunciado: "¿Cómo concibe la escolástica la distinción sustancia/accidente?",
    correcta: "La sustancia subsiste; los accidentes in-sisten modificándola",
    incorrectas: [
      "Ambas se reducen a meras ficciones del lenguaje",
      "Los accidentes subsisten por sí mismos como sustancias simples"
    ]
  },
  {
    enunciado: "¿Qué tesis cartesiana sobre la sustancia es correcta?",
    correcta: "Sostiene dos sustancias creadas irreductibles: res cogitans y res extensa",
    incorrectas: [
      "Reduce toda sustancia a la materia extensa",
      "Identifica sustancia con hábito psicológico"
    ]
  },
  {
    enunciado: "¿Cómo define Spinoza la Sustancia?",
    correcta: "Aquello que es en sí y se concibe por sí; solo hay una, con infinitos atributos",
    incorrectas: [
      "Cualquier cosa que tiene extensión",
      "El conjunto de todas las ideas innatas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la noción de mónada en Leibniz?",
    correcta: "Sustancias simples, sin ventanas, centros de actividad representacional",
    incorrectas: [
      "Partículas materiales indivisibles con extensión",
      "Relaciones lógicas sin soporte ontológico"
    ]
  },
  {
    enunciado: "¿Qué crítica formula Hume a la idea de sustancia?",
    correcta: "Que es un supuesto substrato desconocido no dado en la experiencia",
    incorrectas: [
      "Que es una intuición a priori evidente",
      "Que coincide con la categoría gramatical de sustantivo"
    ]
  },
  {
    enunciado: "¿Qué papel otorga Kant a 'sustancia' en su sistema?",
    correcta: "Una categoría del entendimiento que unifica la experiencia objetiva",
    incorrectas: [
      "Una idea regulativa de la razón práctica",
      "Una ficción útil sin validez objetiva"
    ]
  },
  {
    enunciado: "¿Cuál es el núcleo del principio de causalidad en Aristóteles?",
    correcta: "Explicar los cambios apelando a causas material, formal, eficiente y final",
    incorrectas: [
      "Negar la posibilidad del movimiento real",
      "Reducir toda explicación a axiomas matemáticos"
    ]
  },
  {
    enunciado: "¿Qué sostiene Hume sobre 'necesidad' causal?",
    correcta: "Que no la percibimos; inferimos conjunción constante por hábito",
    incorrectas: [
      "Que es una intuición intelectual innata",
      "Que es un principio lógico analítico"
    ]
  },
  {
    enunciado: "¿Cómo reformula Kant la causalidad frente a Hume?",
    correcta: "Como principio a priori del entendimiento que regula toda experiencia temporal",
    incorrectas: [
      "Como hipótesis empírica revisable caso a caso",
      "Como categoría lingüística sin contenido cognitivo"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre causalidad y razón suficiente?",
    correcta: "La causalidad rige cambios; la razón suficiente exige fundamento para cualquier hecho",
    incorrectas: [
      "No hay diferencia; son sinónimos estrictos",
      "La razón suficiente solo vale en ética, no en metafísica"
    ]
  },
  {
    enunciado: "¿Qué problema contemporáneo afecta a la causalidad clásica?",
    correcta: "Los fenómenos cuánticos desafían la determinación causal estricta a nivel micro",
    incorrectas: [
      "La imposibilidad de medir magnitudes macroscópicas",
      "La inexistencia de correlaciones estadísticas"
    ]
  },
  {
    enunciado: "¿Qué vínculo hay entre categorías kantianas y causalidad?",
    correcta: "La causalidad es una de las categorías de relación (causa-efecto)",
    incorrectas: [
      "Pertenece a las categorías de cantidad",
      "Es una idea trascendental sin uso constitutivo"
    ]
  },
  {
    enunciado: "¿Cuál es una crítica analítica a la noción de sustancia tradicional?",
    correcta: "Que confunde tipos lógicos: sujetos gramaticales con portadores ontológicos",
    incorrectas: [
      "Que usa demasiados cuantificadores formales",
      "Que prescinde totalmente del lenguaje ordinario"
    ]
  },
  {
    enunciado: "¿Qué pretende la metafísica contemporánea con ontologías de 'tipos básicos'?",
    correcta: "Economizar categorías postulando clases mínimas de entidades",
    incorrectas: [
      "Multiplicar ad hoc entidades por cada fenómeno",
      "Sustituir la lógica por psicología descriptiva"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre causalidad y leyes científicas en la visión regularista?",
    correcta: "Las leyes expresan regularidades; la causalidad se reduce a patrones de conjunción",
    incorrectas: [
      "Las leyes son derivados de causas finales universales",
      "Las leyes carecen de conexión con fenómenos observables"
    ]
  },
  {
    enunciado: "¿Qué defiende la visión mecanicista de la causalidad?",
    correcta: "Que hay procesos y mecanismos subyacentes que producen los efectos",
    incorrectas: [
      "Que la causalidad es puramente semántica",
      "Que basta con una correlación estadística para afirmar causalidad"
    ]
  },
  {
    enunciado: "¿Cuál de estas afirmaciones sobre Descartes es correcta?",
    correcta: "Postula la 'sustancia infinita' (Dios) como sustancia en sentido propio",
    incorrectas: [
      "Niega la existencia de sustancias creadas",
      "Identifica sustancia con hábito de asociación"
    ]
  },
  {
    enunciado: "¿Qué pretende la 'armonía preestablecida' de Leibniz?",
    correcta: "Coordinar las representaciones de mónadas sin interacción causal real",
    incorrectas: [
      "Explicar la causalidad por choques mecánicos",
      "Eliminar la idea de Dios del sistema metafísico"
    ]
  },
  {
    enunciado: "¿Qué es un accidente en la tradición escolástica?",
    correcta: "Un modo de ser que no subsiste por sí mismo",
    incorrectas: [
      "Una sustancia simple e inmaterial",
      "Un principio trascendental del conocimiento"
    ]
  },
  {
    enunciado: "¿Cuál de estas tesis refleja la crítica empirista a la sustancia?",
    correcta: "No percibimos substratos; solo haces de cualidades o impresiones",
    incorrectas: [
      "Las sustancias son intuiciones intelectuales evidentes",
      "Las sustancias son postulados éticos"
    ]
  },
  {
    enunciado: "¿Qué significa 'fundamento ontológico' de la causalidad?",
    correcta: "Que la conexión causal pertenece a la estructura del ser, no solo a la mente",
    incorrectas: [
      "Que la causalidad es idéntica a la deducción lógica",
      "Que es una convención del lenguaje cotidiano"
    ]
  },
  {
    enunciado: "¿Qué pregunta guía la crítica kantiana al principio de causalidad?",
    correcta: "Cómo es posible la validez objetiva de la conexión necesaria entre fenómenos",
    incorrectas: [
      "Cómo deducir leyes morales del hecho de la causalidad",
      "Cómo probar que toda sustancia es material"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre sustancia y cambio en Aristóteles?",
    correcta: "El cambio afecta a accidentes; la sustancia permanece como sujeto del cambio",
    incorrectas: [
      "El cambio destruye la sustancia en cada instante",
      "La sustancia es idéntica al movimiento local"
    ]
  },
  {
    enunciado: "¿Qué elemento introduce la causa final en la explicación aristotélica?",
    correcta: "La orientación teleológica hacia un fin o bien",
    incorrectas: [
      "La reducción de toda explicación a azar",
      "La prioridad absoluta de la cantidad sobre la forma"
    ]
  },
  {
    enunciado: "¿Cuál es un criterio prudente para inferir causalidad en ciencia?",
    correcta: "Convergencia de mecanismos, manipulación experimental y control de variables",
    incorrectas: [
      "Insistir en una única correlación observada",
      "Apelar a intuiciones a priori sin contraste"
    ]
  },
  {
    enunciado: "¿Qué implica el debate 'determinismo vs. indeterminismo' para la causalidad?",
    correcta: "Cuestiona si los mismos antecedentes fijan necesariamente los mismos consecuentes",
    incorrectas: [
      "Sustituye la causalidad por definiciones nominales",
      "Invalida la lógica proposicional"
    ]
  },
  {
    enunciado: "¿Qué problema señala el 'post hoc ergo propter hoc'?",
    correcta: "Confundir sucesión temporal con conexión causal",
    incorrectas: [
      "Confundir identidad numérica con semejanza cualitativa",
      "Confundir necesidad lógica con contingencia empírica"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene una ontología de 'niveles' (por ejemplo, sustancia, tipo, atributo, suceso)?",
    correcta: "Evitar confusiones categoriales y colisiones lógicas entre clases de entidades",
    incorrectas: [
      "Reemplazar toda metafísica por psicología",
      "Eliminar el cuantificador existencial"
    ]
  },
  {
    enunciado: "¿Qué papel juegan las 'leyes puente' en explicaciones causales inter-niveles?",
    correcta: "Conectan descripciones de distintos niveles (físico, biológico, psicológico)",
    incorrectas: [
      "Sustituyen la evidencia empírica por definiciones",
      "Niegan la existencia de mecanismos subyacentes"
    ]
  },
  {
    enunciado: "¿Qué significa 'inferencia a la mejor explicación' respecto de la causalidad?",
    correcta: "Seleccionar la hipótesis causal con mayor poder explicativo y coherencia",
    incorrectas: [
      "Elegir la hipótesis más antigua",
      "Aceptar siempre la hipótesis más simple sin evidencia"
    ]
  },
  {
    enunciado: "¿Cuál es un riesgo de la noción de sustancia en su uso indiscriminado?",
    correcta: "Hipostasiar abstracciones o confundir categorías lógicas con entidades reales",
    incorrectas: [
      "Aumentar forzosamente la precisión empírica",
      "Eliminar toda ambigüedad semántica"
    ]
  },
  {
    enunciado: "¿Qué contrapone la visión disposicional de propiedades a la causalidad clásica?",
    correcta: "Propiedades como potencias con tendencias a producir ciertos efectos",
    incorrectas: [
      "Propiedades como meros nombres sin efectos",
      "Propiedades idénticas a relaciones espaciales"
    ]
  },
  {
    enunciado: "¿Qué sugiere la crítica fenomenológica sobre 'sustancia'?",
    correcta: "Atender a la constitución intencional y a la descripción de esencias fenomenológicas",
    incorrectas: [
      "Reducir ontología a sintaxis formal",
      "Negar la experiencia inmediata"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia didáctica de estudiar sustancia y causalidad?",
    correcta: "Mejorar la distinción entre explicación, descripción y correlación",
    incorrectas: [
      "Sustituir el razonamiento por memorización de listas",
      "Evitar el análisis de textos filosóficos"
    ]
  },
  {
    enunciado: "¿Qué aporta el análisis de contraejemplos en debates causales (p. ej., preempción)?",
    correcta: "Afina criterios sobre suficiencia y necesidad en cadenas causales",
    incorrectas: [
      "Demuestra que la causalidad es imposible",
      "Hace innecesarias las pruebas empíricas"
    ]
  },
  {
    enunciado: "¿Qué distingue 'causa eficiente' de 'razón suficiente' en una explicación concreta?",
    correcta: "La primera alude al factor productor del cambio; la segunda al fundamento explicativo total",
    incorrectas: [
      "No hay distinción; son términos meramente retóricos",
      "La razón suficiente se limita a cuestiones cuantitativas"
    ]
  }
];
