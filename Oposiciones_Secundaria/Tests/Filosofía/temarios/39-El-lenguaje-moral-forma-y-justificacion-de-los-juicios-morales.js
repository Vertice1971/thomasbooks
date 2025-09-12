// temarios/39-El-lenguaje-moral-forma-y-justificacion-de-los-juicios-morales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la metaética dentro de la filosofía moral?",
    correcta: "El significado, la referencia y la justificación de los juicios y términos morales",
    incorrectas: [
      "La aplicación de principios morales a casos clínicos concretos",
      "La historia política de las instituciones jurídicas"
    ]
  },
  {
    enunciado: "¿Qué distingue a los conceptos morales ‘finos’ (thin) de los ‘gruesos’ (thick)?",
    correcta: "Los finos son altamente generales (justo, bueno), los gruesos combinan descripción y valoración (cruel, valiente)",
    incorrectas: [
      "Los finos son científicos y los gruesos religiosos",
      "Los finos son emotivos y los gruesos puramente descriptivos"
    ]
  },
  {
    enunciado: "Según la distinción semántica/pragmática, ¿qué enfatiza la pragmática en lenguaje moral?",
    correcta: "La fuerza ilocutiva y el uso en actos de habla como prometer, reprochar o exigir",
    incorrectas: [
      "La reducción de todo juicio moral a datos estadísticos",
      "La identificación de la moral con leyes físicas universales"
    ]
  },
  {
    enunciado: "¿Cuál es una tipología básica de enunciados en ética?",
    correcta: "Descriptivos, evaluativos y normativos",
    incorrectas: [
      "Empíricos, místicos y tautológicos",
      "Nominales, genéticos y taxonómicos"
    ]
  },
  {
    enunciado: "En lógica deóntica, ¿qué simboliza O, P y F?",
    correcta: "Obligatorio, permitido y prohibido",
    incorrectas: [
      "Objetivo, probable y falso",
      "Obvio, preciso y falible"
    ]
  },
  {
    enunciado: "¿Qué ilustra la ‘paradoja de Ross’ en lógica deóntica?",
    correcta: "Que de ‘debes enviar la carta’ no se sigue que ‘debes enviar la carta o quemarla’",
    incorrectas: [
      "Que toda obligación es imposible de cumplir",
      "Que lo permitido es siempre obligatorio"
    ]
  },
  {
    enunciado: "¿Qué es un acto supererogatorio?",
    correcta: "Una acción moralmente loable que excede lo estrictamente obligatorio",
    incorrectas: [
      "Una acción prohibida por definición",
      "Una acción indiferente sin valor moral alguno"
    ]
  },
  {
    enunciado: "¿Qué sostiene el cognitivismo sobre los juicios morales?",
    correcta: "Que son proposiciones que pueden ser verdaderas o falsas",
    incorrectas: [
      "Que carecen de contenido y solo emiten sonidos",
      "Que son órdenes sin relación con creencias"
    ]
  },
  {
    enunciado: "¿Cómo entienden los emotivistas (Ayer/Stevenson) los juicios morales?",
    correcta: "Como expresiones de actitudes que buscan influir en la conducta",
    incorrectas: [
      "Como descripciones químicas de estados cerebrales",
      "Como definiciones analíticas de axiomas matemáticos"
    ]
  },
  {
    enunciado: "¿Qué añade el prescriptivismo universal de R. M. Hare?",
    correcta: "Que los enunciados morales funcionan como prescripciones universalizables",
    incorrectas: [
      "Que todo juicio moral es una hipótesis científica",
      "Que los términos morales son nombres propios"
    ]
  },
  {
    enunciado: "¿Cuál es el ‘problema Frege–Geach’ para el no-cognitivismo?",
    correcta: "Explicar la validez lógica de argumentos con términos morales en contextos embebidos",
    incorrectas: [
      "Probar que toda moral es relativa al gusto personal",
      "Mostrar que los silogismos están obsoletos"
    ]
  },
  {
    enunciado: "¿Cómo responden expresivistas y quasi-realistas al problema Frege–Geach?",
    correcta: "Proporcionando semánticas que preservan la inferencia mediante actitudes con contenido lógico",
    incorrectas: [
      "Negando la existencia de inferencias en ética",
      "Identificando los juicios morales con definiciones jurídicas"
    ]
  },
  {
    enunciado: "¿Qué defiende el realismo no-naturalista de G. E. Moore?",
    correcta: "Que ‘bueno’ nombra una propiedad no natural captada por intuición",
    incorrectas: [
      "Que ‘bueno’ se reduce a ‘placentero’ por definición",
      "Que los términos morales son equívocos sin uso legítimo"
    ]
  },
  {
    enunciado: "¿Qué sostiene el realismo naturalista de la escuela de Cornell?",
    correcta: "Que las propiedades morales supervienen sobre hechos naturales y pueden explicar causalmente",
    incorrectas: [
      "Que las propiedades morales son entes sobrenaturales",
      "Que los juicios morales carecen siempre de referencia"
    ]
  },
  {
    enunciado: "¿Cuál es la ‘teoría del error’ de J. L. Mackie?",
    correcta: "Que los juicios morales pretenden referirse a propiedades objetivas ‘extrañas’ que no existen",
    incorrectas: [
      "Que todos los juicios morales son analíticos verdaderos",
      "Que las obligaciones son identidades lógicas"
    ]
  },
  {
    enunciado: "¿Qué rasgo central define el constructivismo moral (Rawls, Scanlon, Korsgaard)?",
    correcta: "La validez de normas resulta de procedimientos de justificación pública y agencia racional",
    incorrectas: [
      "La validez depende de mayorías coyunturales sin razones",
      "La validez es idéntica a la costumbre ancestral"
    ]
  },
  {
    enunciado: "¿Qué implicación tiene la ‘guillotina’ de Hume?",
    correcta: "Que no se infiere un ‘deber’ de un ‘ser’ sin un principio normativo puente",
    incorrectas: [
      "Que los juicios morales son deducciones matemáticas",
      "Que toda ética debe basarse en revelaciones privadas"
    ]
  },
  {
    enunciado: "¿Qué defiende Putnam sobre la dicotomía hecho/valor?",
    correcta: "Que se entrelazan en prácticas racionales; la separación rígida es insostenible",
    incorrectas: [
      "Que los juicios morales son idénticos a hechos físicos",
      "Que la ciencia carece de valores epistémicos"
    ]
  },
  {
    enunciado: "¿Qué significa que los predicados morales ‘supervienen’ sobre lo natural?",
    correcta: "Que diferencias morales requieren diferencias en los hechos subyacentes",
    incorrectas: [
      "Que lo moral no guarda relación con los hechos",
      "Que los hechos se derivan lógicamente de los valores"
    ]
  },
  {
    enunciado: "¿Qué rasgo formal subraya la universalizabilidad kantiana?",
    correcta: "Juzgar si una máxima puede quererse como ley para cualquiera",
    incorrectas: [
      "Maximizar la utilidad total sin restricciones",
      "Someter el juicio a la tradición local sin examen"
    ]
  },
  {
    enunciado: "¿Qué idea expresa la reversibilidad o reciprocidad en ética?",
    correcta: "Valorar una norma poniéndose en el lugar de cualquier afectado",
    incorrectas: [
      "Sostener que solo cuentan mis intereses",
      "Reducir el juicio moral a preferencias privadas"
    ]
  },
  {
    enunciado: "¿Qué exige el principio de publicidad de razones en la esfera pública?",
    correcta: "Que las justificaciones puedan exponerse y evaluarse abiertamente por todos",
    incorrectas: [
      "Que las razones permanezcan secretas por seguridad",
      "Que las autoridades decidan sin deliberación"
    ]
  },
  {
    enunciado: "¿En qué consiste el ‘equilibrio reflexivo’ de Rawls?",
    correcta: "Ajustar principios y juicios ponderados hasta lograr coherencia mutua",
    incorrectas: [
      "Elegir principios por mayoría simple",
      "Adoptar siempre la intuición inicial sin revisión"
    ]
  },
  {
    enunciado: "¿Qué sostiene el particularismo moral de Dancy?",
    correcta: "Que la relevancia de una razón depende del contexto y no de principios fijos",
    incorrectas: [
      "Que solo existen reglas absolutas sin excepciones",
      "Que ninguna razón puede cambiar de peso"
    ]
  },
  {
    enunciado: "¿Para qué sirve el modelo de argumentación de Toulmin en ética?",
    correcta: "Para explicitar datos, garantías, respaldos y condiciones de refutación",
    incorrectas: [
      "Para medir la masa de los argumentos",
      "Para convertir normas en identidades algebraicas"
    ]
  },
  {
    enunciado: "¿Qué debate existe sobre motivación moral: internalismo vs. externalismo?",
    correcta: "Si juzgar que ‘debo X’ implica motivación interna o requiere un deseo/razón adicional",
    incorrectas: [
      "Si la motivación es un fenómeno exclusivamente químico",
      "Si la ética elimina toda motivación"
    ]
  },
  {
    enunciado: "¿Cómo diferencia Bernard Williams razones internas y externas?",
    correcta: "Las internas conectan con el conjunto motivacional del agente; las externas no requieren tal conexión",
    incorrectas: [
      "Las internas son legales y las externas religiosas",
      "Las internas son utilitarias y las externas deontológicas"
    ]
  },
  {
    enunciado: "¿Qué aporta Brandom al entender el lenguaje moral?",
    correcta: "Un inferencialismo donde el significado depende de los compromisos y autorizaciones que atribuimos",
    incorrectas: [
      "Una semántica puramente referencial sin normas",
      "La identificación del sentido con sensación fisiológica"
    ]
  },
  {
    enunciado: "¿Qué relación guardan actos de habla y normatividad según Searle?",
    correcta: "Ciertas reglas constitutivas crean hechos institucionales con fuerza deóntica",
    incorrectas: [
      "Las normas son meros hábitos privados sin reglas",
      "Los actos de habla no pueden generar obligaciones"
    ]
  },
  {
    enunciado: "¿Qué condiciones exige la ética del discurso de Habermas?",
    correcta: "Igualdad de participación, ausencia de coacción y apertura a la mejor razón",
    incorrectas: [
      "Autoridad académica incuestionable",
      "Secreto deliberativo y veto a minorías"
    ]
  },
  {
    enunciado: "¿Cómo formula Scanlon la prueba de una norma moralmente válida?",
    correcta: "Que nadie pudiera rechazarla razonablemente bajo supuestos de respeto recíproco",
    incorrectas: [
      "Que maximice beneficios para una élite",
      "Que coincida con la costumbre más antigua"
    ]
  },
  {
    enunciado: "Según MacIntyre, ¿qué hace inteligible la evaluación moral?",
    correcta: "Las virtudes ligadas a prácticas con bienes internos y tradiciones narrativas",
    incorrectas: [
      "La agregación anónima de placeres",
      "La obediencia ciega a autoridades sin práctica"
    ]
  },
  {
    enunciado: "¿Qué es la ‘derrotabilidad’ en argumentación moral?",
    correcta: "La posibilidad de que razones nuevas anulen o moderen una conclusión previa",
    incorrectas: [
      "La imposibilidad de revisar juicios",
      "La necesidad de que toda norma sea absoluta"
    ]
  },
  {
    enunciado: "¿Qué papel juega la indexicalidad y el contexto en términos morales?",
    correcta: "Algunos términos cambian su aplicación adecuada según perspectivas y circunstancias",
    incorrectas: [
      "Los términos morales son invariantes como constantes físicas",
      "El contexto elimina toda posibilidad de juicio"
    ]
  },
  {
    enunciado: "¿Qué implica el desacuerdo moral profundo para la metaética?",
    correcta: "Plantea retos a la objetividad y motiva enfoques como el constructivismo procedimental",
    incorrectas: [
      "Prueba que no existe lenguaje moral",
      "Demuestra que todas las teorías son verdaderas a la vez"
    ]
  },
  {
    enunciado: "¿En qué consiste el ‘minimalismo’ o deflacionismo de la verdad aplicado a ética?",
    correcta: "En sostener que decir ‘es verdadero’ añade poco: basta el asenso al enunciado moral",
    incorrectas: [
      "En negar que existan creencias morales",
      "En identificar verdad con utilidad económica"
    ]
  },
  {
    enunciado: "¿Qué prohíbe la ‘falacia naturalista’ señalada por Moore?",
    correcta: "Definir ‘bueno’ mediante propiedades naturales como ‘placentero’ sin residuo conceptual",
    incorrectas: [
      "Usar términos morales en ciencia",
      "Apelar a intuiciones en deliberación pública"
    ]
  },
  {
    enunciado: "¿Qué criterios formales refuerzan la justificación de un juicio moral?",
    correcta: "Consistencia, imparcialidad, universalizabilidad, publicidad y apertura a refutación",
    incorrectas: [
      "Popularidad, tradición y conveniencia privada",
      "Urgencia, autoridad y secreto institucional"
    ]
  },
  {
    enunciado: "¿Qué función práctica cumple el lenguaje moral en la coordinación social?",
    correcta: "Establecer expectativas, compromisos y sanciones que facilitan cooperación",
    incorrectas: [
      "Evitar toda forma de coordinación",
      "Sustituir las razones por preferencias inefables"
    ]
  },
  {
    enunciado: "¿Cómo se relacionan emoción y razón en el juicio moral contemporáneo?",
    correcta: "Las emociones informan y motivan mientras la razón ordena y justifica públicamente",
    incorrectas: [
      "La emoción invalida cualquier argumento",
      "La razón elimina toda motivación práctica"
    ]
  },
  {
    enunciado: "¿Qué significa evaluar un término moral ‘grueso’ como ‘cruel’?",
    correcta: "Que atribuye simultáneamente rasgos descriptivos y una condena evaluativa",
    incorrectas: [
      "Que es un término neutro sin carga valorativa",
      "Que describe meros hechos sin implicaciones prácticas"
    ]
  }
];
