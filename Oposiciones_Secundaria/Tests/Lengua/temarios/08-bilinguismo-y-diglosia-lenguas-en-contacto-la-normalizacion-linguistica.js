// temarios/08-bilinguismo-y-diglosia-lenguas-en-contacto-la-normalizacion-linguistica.js
var PREGUNTAS = [
  {
    enunciado: "Según la tradición de Weinreich, ¿qué es el bilingüismo en sentido operativo?",
    correcta: "El uso habitual de dos lenguas por parte de un individuo o comunidad.",
    incorrectas: [
      "La memorización pasiva de vocabulario en una segunda lengua sin uso.",
      "La traducción automática de textos sin intervención humana."
    ]
  },
  {
    enunciado: "¿Qué diferencia central separa bilingüismo y diglosia?",
    correcta: "El bilingüismo describe repertorios de hablantes; la diglosia, la distribución social de funciones entre lenguas/variedades.",
    incorrectas: [
      "El bilingüismo es escrito y la diglosia oral.",
      "La diglosia es un subtipo de dislexia."
    ]
  },
  {
    enunciado: "En la diglosia clásica de Ferguson, ¿cómo se reparten las variedades H y L?",
    correcta: "H ocupa ámbitos formales y de prestigio; L se emplea en usos cotidianos e informales.",
    incorrectas: [
      "H se usa solo en la infancia y L en la edad adulta.",
      "H es oral exclusivamente y L escrita exclusivamente."
    ]
  },
  {
    enunciado: "¿Qué aporta Fishman al concepto de diglosia?",
    correcta: "Amplía el modelo a situaciones entre lenguas distintas y lo relaciona con el bilingüismo social.",
    incorrectas: [
      "Sustituye el término por ‘monolingüismo funcional’.",
      "Limita la diglosia a variedades fonéticas."
    ]
  },
  {
    enunciado: "¿Qué es la alternancia de códigos (code-switching)?",
    correcta: "El uso alterno de dos lenguas o variedades en una misma interacción o discurso.",
    incorrectas: [
      "La traducción palabra por palabra del mensaje.",
      "El préstamo de una sola palabra adaptada fonéticamente."
    ]
  },
  {
    enunciado: "¿En qué se diferencia code-switching de code-mixing?",
    correcta: "El code-switching alterna segmentos con límites identificables; el code-mixing mezcla elementos más integrados dentro de la estructura.",
    incorrectas: [
      "Son sinónimos perfectos en toda la bibliografía.",
      "El code-mixing solo ocurre en textos escritos normativos."
    ]
  },
  {
    enunciado: "¿Qué distingue préstamo de calco?",
    correcta: "El préstamo incorpora una forma ajena; el calco traduce o replica la estructura con material propio.",
    incorrectas: [
      "El préstamo es siempre semántico y el calco siempre fonético.",
      "El calco exige mantener la ortografía original."
    ]
  },
  {
    enunciado: "¿Qué es la convergencia en contacto de lenguas?",
    correcta: "Aproximación estructural entre sistemas por influencia mutua y uso prolongado.",
    incorrectas: [
      "La sustitución súbita de una lengua por otra en una generación.",
      "El rechazo absoluto de cualquier influencia entre lenguas."
    ]
  },
  {
    enunciado: "¿Qué es la koinización?",
    correcta: "La formación de una variedad común por nivelación de rasgos entre dialectos en contacto.",
    incorrectas: [
      "La desaparición completa de toda variación regional.",
      "La invención de una lengua artificial sin base social."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las variedades de frontera?",
    correcta: "Mostran rasgos híbridos por contacto continuado entre comunidades vecinas.",
    incorrectas: [
      "Carecen de hablantes nativos y solo son académicas.",
      "Son idénticas a las normas estándar estatales."
    ]
  },
  {
    enunciado: "¿Qué se entiende por desplazamiento lingüístico?",
    correcta: "Proceso por el que una comunidad abandona gradualmente su lengua a favor de otra.",
    incorrectas: [
      "La creación de una escritura nueva para la misma lengua.",
      "La alternancia de códigos en una conversación puntual."
    ]
  },
  {
    enunciado: "¿Qué miden marcos como UNESCO/EGIDS?",
    correcta: "La vitalidad y el grado de riesgo de las lenguas en términos de transmisión y funciones.",
    incorrectas: [
      "El número exacto de préstamos lexicográficos por año.",
      "La cantidad de figuras retóricas usadas en la literatura."
    ]
  },
  {
    enunciado: "¿Qué define el bilingüismo aditivo frente al sustractivo?",
    correcta: "El aditivo suma recursos sin pérdida de la L1; el sustractivo desplaza la L1 al adquirir la L2.",
    incorrectas: [
      "El aditivo prohíbe el uso escolar de la L1.",
      "El sustractivo aumenta el prestigio de la lengua minoritaria."
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre bilingüismo simultáneo y secuencial?",
    correcta: "Simultáneo: adquisición de dos lenguas desde la infancia; secuencial: incorporación de la L2 tras la L1.",
    incorrectas: [
      "Simultáneo es escrito y secuencial oral.",
      "Secuencial implica olvidar la L1 al aprender la L2."
    ]
  },
  {
    enunciado: "¿Qué distingue un bilingüe equilibrado de uno dominante?",
    correcta: "El equilibrado maneja ambas lenguas con similar competencia; el dominante presenta asimetrías notables.",
    incorrectas: [
      "El dominante no puede cambiar de tema en conversación.",
      "El equilibrado evita cualquier alternancia de códigos."
    ]
  },
  {
    enunciado: "¿Qué contrasta la organización coordinada y compuesta del bilingüismo?",
    correcta: "Coordinada: sistemas léxico-conceptuales diferenciados; compuesta: mayor integración conceptual entre lenguas.",
    incorrectas: [
      "Coordinada es oral y compuesta escrita.",
      "Compuesta impide el acceso a la L1 en contextos formales."
    ]
  },
  {
    enunciado: "¿Qué propone Grosjean con el ‘modo lingüístico’?",
    correcta: "Un continuo entre estados más monolingües y más bilingües según contexto y activación de lenguas.",
    incorrectas: [
      "Un modelo que prohíbe la alternancia en cualquier situación.",
      "Un sistema fonético universal idéntico para todas las lenguas."
    ]
  },
  {
    enunciado: "¿Qué explican los modelos de control ejecutivo en bilingües (p. ej., Green)?",
    correcta: "Mecanismos de selección e inhibición para gestionar la activación de lenguas en uso.",
    incorrectas: [
      "La imposibilidad de acceder a la L2 en contextos formales.",
      "La ausencia de interferencias en toda situación."
    ]
  },
  {
    enunciado: "¿Qué dice la evidencia sobre ‘ventajas cognitivas’ del bilingüismo?",
    correcta: "Es heterogénea: depende de tareas, edades y contextos; no es universal ni automática.",
    incorrectas: [
      "Demuestra una ventaja idéntica en toda prueba mental.",
      "Niega cualquier beneficio posible en cualquier dominio."
    ]
  },
  {
    enunciado: "¿Qué es el translanguaging en educación (García & Li Wei)?",
    correcta: "El uso integrado de todo el repertorio lingüístico del alumnado para aprender y construir significado.",
    incorrectas: [
      "La prohibición del uso de la L1 en el aula.",
      "Un método exclusivo para traducir textos literales."
    ]
  },
  {
    enunciado: "Según Myers-Scotton, ¿qué es la ‘Matrix Language’ en el code-switching?",
    correcta: "La lengua que provee el esqueleto morfosintáctico dentro del cual se insertan elementos de otra.",
    incorrectas: [
      "La lengua con más prestigio social en el país.",
      "La lengua que aporta exclusivamente el léxico funcional."
    ]
  },
  {
    enunciado: "¿Cuál es la ‘Equivalence Constraint’ asociada a Poplack?",
    correcta: "La alternancia tiende a producirse en puntos donde las gramáticas de ambas lenguas son estructuralmente compatibles.",
    incorrectas: [
      "La alternancia solo puede ocurrir entre oraciones completas.",
      "La alternancia exige siempre traducir fonéticamente los préstamos."
    ]
  },
  {
    enunciado: "¿Qué subrayan Thomason y Kaufman sobre el cambio por contacto?",
    correcta: "Que puede afectar a todos los niveles lingüísticos dependiendo de la intensidad y duración del contacto.",
    incorrectas: [
      "Que solo afecta al léxico y nunca a la sintaxis.",
      "Que el contacto no genera cambios estructurales."
    ]
  },
  {
    enunciado: "¿Qué dimensiones recoge la planificación lingüística clásica?",
    correcta: "Estatus (status), corpus (norma/terminología) y adquisición (escuela).",
    incorrectas: [
      "Únicamente difusión en redes sociales.",
      "Exclusivamente creación de diccionarios escolares."
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo general de la normalización lingüística?",
    correcta: "Ampliar dominios de uso, garantizar derechos y elevar prestigio para asegurar la transmisión.",
    incorrectas: [
      "Eliminar la variación dialectal en todo el territorio.",
      "Imponer una única lengua en contextos multilingües."
    ]
  },
  {
    enunciado: "¿Qué instrumentos típicos se emplean en normalización?",
    correcta: "Medidas legislativas, educativas, mediáticas y de industria cultural/tecnológica.",
    incorrectas: [
      "Exclusivamente campañas de eslóganes sin políticas públicas.",
      "Solo vigilancia policial del uso lingüístico cotidiano."
    ]
  },
  {
    enunciado: "¿Qué indicadores señalan avances en normalización?",
    correcta: "Uso real en educación, administración, justicia, sanidad, medios y tecnologías lingüísticas.",
    incorrectas: [
      "Únicamente el número de neologismos creados por año.",
      "El tamaño de los diccionarios publicados por academia."
    ]
  },
  {
    enunciado: "¿Qué comunidades españolas presentan cooficialidad lingüística destacada?",
    correcta: "Cataluña (catalán y aranés), Galicia (gallego) y País Vasco (euskera), entre otras.",
    incorrectas: [
      "Castilla-La Mancha y La Rioja con euskera.",
      "Murcia con gallego como única lengua oficial."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los modelos escolares AICLE/CLIL?",
    correcta: "Integran contenidos curriculares y lengua adicional en tareas significativas.",
    incorrectas: [
      "Separan estrictamente lengua y contenido para evitar transferencia.",
      "Impiden el uso de materiales auténticos en el aula."
    ]
  },
  {
    enunciado: "En evaluación, ¿qué implica evitar ‘penalizaciones dobles’ por contacto?",
    correcta: "No sancionar dos veces un mismo fenómeno (contenido y forma) cuando es propio del repertorio bilingüe.",
    incorrectas: [
      "Ignorar toda corrección lingüística en exámenes.",
      "Penalizar automáticamente cualquier alternancia de códigos."
    ]
  },
  {
    enunciado: "¿Qué es la diglosia de variantes dentro de una misma lengua?",
    correcta: "Reparto funcional entre estándar y vernáculas/coloquiales en diferentes dominios.",
    incorrectas: [
      "Uso exclusivo del estándar en todos los ámbitos.",
      "Sustitución inmediata de la L1 por la L2."
    ]
  },
  {
    enunciado: "¿Qué entendemos por desdiglosificación?",
    correcta: "Expansión de la variedad L a nuevos dominios previamente reservados a la H.",
    incorrectas: [
      "Reducción de la L a ámbitos íntimos aún más limitados.",
      "Prohibición legal del uso de la variedad H."
    ]
  },
  {
    enunciado: "¿Qué describe la rediglosificación?",
    correcta: "Reajuste posterior del reparto funcional entre variedades/ lenguas tras un cambio social.",
    incorrectas: [
      "La eliminación de toda variación social en el habla.",
      "La imposibilidad de modificar funciones una vez fijadas."
    ]
  },
  {
    enunciado: "¿Qué distingue el bilingüismo de élite del popular?",
    correcta: "El de élite se asocia a capital educativo y prestigio; el popular a contextos migratorios o minoritarios con menor reconocimiento.",
    incorrectas: [
      "El de élite es solo oral y el popular solo escrito.",
      "El popular excluye cualquier competencia en L1."
    ]
  },
  {
    enunciado: "¿Cómo se relacionan identidad y capital lingüístico con el bilingüismo?",
    correcta: "Las lenguas aportan recursos simbólicos y oportunidades que pueden facilitar movilidad o exclusión.",
    incorrectas: [
      "La identidad lingüística no tiene impacto social.",
      "El capital lingüístico se mide solo por número de préstamos."
    ]
  },
  {
    enunciado: "¿Qué papel juegan actitudes y prestigio en normalización?",
    correcta: "Condicionan la adopción de la lengua en dominios clave y el éxito de políticas públicas.",
    incorrectas: [
      "Son irrelevantes frente a la legislación.",
      "Dependen solo del número de hablantes nativos."
    ]
  },
  {
    enunciado: "¿Qué motivos pragmáticos activan la alternancia de códigos?",
    correcta: "Identidad, audiencia, tópico, énfasis y manejo de citas o voces ajenas.",
    incorrectas: [
      "La imposibilidad de recordar vocabulario en cualquier lengua.",
      "Una norma gramatical que lo obliga cada tres enunciados."
    ]
  },
  {
    enunciado: "¿Qué se observa en nuevas variedades urbanas multiétnicas?",
    correcta: "Innovaciones léxicas y prosódicas por contacto y redes juveniles transversales.",
    incorrectas: [
      "Una vuelta inmediata a la norma clásica sin variación.",
      "La desaparición de toda mezcla en el habla cotidiana."
    ]
  },
  {
    enunciado: "¿Qué enfoque de gobernanza favorece procesos de normalización sostenibles?",
    correcta: "Políticas públicas con participación social y coordinación entre escuela, administración y medios.",
    incorrectas: [
      "Medidas aisladas de una sola institución sin seguimiento.",
      "Campañas puntuales sin evaluación ni indicadores."
    ]
  },
  {
    enunciado: "¿Qué principio ético se asocia a los derechos lingüísticos?",
    correcta: "Garantizar acceso a servicios y educación en lengua propia cuando sea posible y razonable.",
    incorrectas: [
      "Imponer una única lengua para maximizar eficiencia.",
      "Prohibir la señalización bilingüe en espacios públicos."
    ]
  }
];
