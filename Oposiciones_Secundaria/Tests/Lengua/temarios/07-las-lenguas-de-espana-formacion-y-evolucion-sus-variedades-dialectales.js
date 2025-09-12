// temarios/07-las-lenguas-de-espana-formacion-y-evolucion-sus-variedades-dialectales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué establece el artículo 3 de la Constitución Española respecto a las lenguas?",
    correcta: "El castellano es la lengua oficial del Estado y las demás lenguas españolas serán también oficiales en sus respectivas Comunidades Autónomas según sus Estatutos.",
    incorrectas: [
      "El castellano y el inglés son cooficiales en todo el territorio.",
      "Solo es oficial el castellano y se prohíbe la cooficialidad autonómica."
    ]
  },
  {
    enunciado: "¿Cuál es una distinción básica entre lengua y dialecto en lingüística?",
    correcta: "La lengua es un sistema estandarizado con funciones amplias; el dialecto es una variedad territorial del mismo sistema.",
    incorrectas: [
      "La lengua es siempre escrita y el dialecto siempre oral.",
      "La lengua tiene más vocabulario y el dialecto menos, sin más matices."
    ]
  },
  {
    enunciado: "¿Qué lenguas prerromanas dejaron huellas en la Península Ibérica?",
    correcta: "Íbero, celtibérico, tartesio, lusitano y el vascónico entre otras.",
    incorrectas: [
      "Únicamente el latín clásico y el griego.",
      "Solo el fenicio y el etrusco, sin otras influencias."
    ]
  },
  {
    enunciado: "¿Qué se entiende por romanización lingüística?",
    correcta: "La expansión del latín vulgar y su adopción como lengua de comunicación, base de los futuros romances.",
    incorrectas: [
      "La sustitución del latín por el griego en toda Hispania.",
      "La imposición del árabe como lengua administrativa en época romana."
    ]
  },
  {
    enunciado: "¿Cuál fue un superestrato relevante para las lenguas peninsulares tras Roma?",
    correcta: "El árabe andalusí, que aportó léxico y toponimia.",
    incorrectas: [
      "El sánscrito, con fuerte influencia fonética.",
      "El chino antiguo, con amplia derivación morfológica."
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un romance hispánico medieval?",
    correcta: "Galaico-portugués.",
    incorrectas: [
      "Bretón.",
      "Esloveno."
    ]
  },
  {
    enunciado: "¿Qué son las Glosas Emilianenses y Silenses?",
    correcta: "Anotaciones medievales que muestran rasgos tempranos de romance y euskera en manuscritos latinos.",
    incorrectas: [
      "Los primeros textos impresos en catalán estándar.",
      "Las primeras crónicas en árabe andalusí de Al-Ándalus."
    ]
  },
  {
    enunciado: "¿Qué cambio fonético caracteriza la evolución del latín vulgar al castellano medieval?",
    correcta: "La diptongación de /Ĕ/ y /Ŏ/ tónicas en /ie/ y /ue/ (p.ej., terra > tierra).",
    incorrectas: [
      "La pérdida sistemática de todas las vocales átonas iniciales.",
      "La conversión de todas las nasales en líquidas."
    ]
  },
  {
    enunciado: "¿Qué describe el reajuste de las sibilantes en castellano?",
    correcta: "El paso de un sistema medieval de sibilantes sonoras y sordas a la distinción /θ/–/s/ o al seseo/ceceo según zonas.",
    incorrectas: [
      "La desaparición total de las sibilantes en el español actual.",
      "La creación de una nueva vocal central media exclusiva del castellano."
    ]
  },
  {
    enunciado: "¿Qué rasgo fonético es típico del castellano septentrional peninsular?",
    correcta: "La distinción entre /θ/ y /s/ y la /s/ apicoalveolar.",
    incorrectas: [
      "El ceceo generalizado en todo contexto.",
      "La neutralización sistemática de /l/ y /r/ en coda."
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo asociado al castellano meridional?",
    correcta: "Aspiración o pérdida de /-s/ en coda silábica.",
    incorrectas: [
      "Conservación de /s/ apicoalveolar en todas las posiciones.",
      "Oposición fonémica estable entre /ʎ/ y /ʝ/ (no yeísmo)."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la modalidad lingüística canaria?",
    correcta: "Seseo, aspiración de /-s/, uso de ustedes como 2.ª persona plural y léxico de contacto atlántico.",
    incorrectas: [
      "Ceceo general y oposición /ʎ/–/ʝ/ obligatoria.",
      "Uso preferente de vosotros frente a ustedes en toda situación."
    ]
  },
  {
    enunciado: "¿Qué son las hablas de transición en el ámbito del castellano peninsular?",
    correcta: "Variedades con rasgos mixtos entre áreas mayores, como extremeño y murciano.",
    incorrectas: [
      "Formas del castellano exclusivamente literarias sin hablantes nativos.",
      "Variedades que solo existen en documentos medievales."
    ]
  },
  {
    enunciado: "¿Cómo se dividen tradicionalmente los dialectos del catalán?",
    correcta: "En un bloque oriental (central y balear) y otro occidental (nordoccidental y valenciano).",
    incorrectas: [
      "En norte, centro y sur como en el español peninsular.",
      "En urbano y rural, sin otras distinciones."
    ]
  },
  {
    enunciado: "¿Qué institución fija la norma general del catalán y cuál la del valenciano?",
    correcta: "El Institut d’Estudis Catalans (IEC) y la Acadèmia Valenciana de la Llengua (AVL), respectivamente.",
    incorrectas: [
      "La Real Academia Galega y Euskaltzaindia.",
      "RAE y ASALE, de forma exclusiva para todo el catalán."
    ]
  },
  {
    enunciado: "¿Qué fenómeno vocálico caracteriza al catalán oriental?",
    correcta: "La neutralización de vocales átonas en /ə/ y /u/ en gran parte de sus variedades.",
    incorrectas: [
      "La diptongación sistemática de todas las vocales tónicas.",
      "La ausencia de vocales medias en cualquier contexto."
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo sociolingüístico e histórico del gallego?",
    correcta: "Su separación del portugués a partir del antiguo galaico-portugués y posterior estandarización por la RAG.",
    incorrectas: [
      "Su origen directo en el euskera medieval.",
      "Su estandarización actual por la RAE."
    ]
  },
  {
    enunciado: "¿Qué rasgo fonético aparece en zonas del gallego tradicional?",
    correcta: "La gheada, con realización aspirada de /g/ en ciertos contextos.",
    incorrectas: [
      "La pérdida sistemática de todas las vocales tónicas.",
      "La neutralización de /p/ y /b/ en posición inicial."
    ]
  },
  {
    enunciado: "¿Qué zona de transición conecta gallego y asturleonés en el occidente?",
    correcta: "El eonaviego (gallego-asturiano), con rasgos mixtos.",
    incorrectas: [
      "El suletino.",
      "El murciano."
    ]
  },
  {
    enunciado: "¿Cuál es una característica tipológica del euskera?",
    correcta: "Ergatividad morfosintáctica y tendencia al orden SOV.",
    incorrectas: [
      "Flexión nominal por género gramatical masculino/femenino.",
      "Sistema verbal sin marcas de persona ni número."
    ]
  },
  {
    enunciado: "¿Qué es el Euskara Batua?",
    correcta: "Una variedad estandarizada para usos formales y educativos, basada en dialectos centrales.",
    incorrectas: [
      "Un dialecto rural exclusivo de Zuberoa.",
      "La variedad medieval documentada en las glosas latinas."
    ]
  },
  {
    enunciado: "¿Cuál de estas variedades es dialecto del euskera?",
    correcta: "El suletino (zuberera).",
    incorrectas: [
      "El aragonés central.",
      "El balear."
    ]
  },
  {
    enunciado: "¿Qué rasgo fonológico se asocia al asturleonés?",
    correcta: "Conservación de /ʎ/ y evolución de -o final a -u en numerosos sustantivos (perru, güeyu).",
    incorrectas: [
      "Ceceo generalizado en toda la zona leonesa.",
      "Neutralización de todas las líquidas en coda sin excepción."
    ]
  },
  {
    enunciado: "¿Qué rasgo morfosintáctico es característico del aragonés?",
    correcta: "El uso de artículos o, a, os, as y rasgos léxicos patrimoniales propios.",
    incorrectas: [
      "La pérdida de los artículos definidos en todos los contextos.",
      "La presencia obligatoria del artículo ante posesivo como en italiano estándar."
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre bilingüismo y diglosia?",
    correcta: "El bilingüismo es competencia en dos lenguas; la diglosia es distribución desigual de funciones y prestigio entre lenguas o variedades.",
    incorrectas: [
      "Son sinónimos totales en sociolingüística.",
      "La diglosia es un fenómeno exclusivamente fonético."
    ]
  },
  {
    enunciado: "¿Qué es la normalización lingüística?",
    correcta: "Conjunto de políticas para extender el uso de una lengua en ámbitos formales y asegurar derechos de los hablantes.",
    incorrectas: [
      "La simplificación ortográfica de una lengua minoritaria.",
      "La prohibición de alternancia de códigos en cualquier contexto."
    ]
  },
  {
    enunciado: "¿Qué incluye el proceso de estandarización según Haugen?",
    correcta: "Selección, codificación, elaboración y aceptación social de la norma.",
    incorrectas: [
      "Solo elaboración de diccionarios sin enseñanza escolar.",
      "Exclusivamente la fijación ortográfica, sin otros pasos."
    ]
  },
  {
    enunciado: "¿Qué organismos normativos se asocian a cada lengua respectiva?",
    correcta: "RAE-ASALE (español), IEC/AVL (catalán/valenciano), RAG (gallego), Euskaltzaindia (euskera).",
    incorrectas: [
      "UNESCO para todas las lenguas de España.",
      "RFEF para el castellano y OMS para el euskera."
    ]
  },
  {
    enunciado: "¿Qué estatus tiene el aranés en Cataluña?",
    correcta: "Es cooficial en el Valle de Arán y forma parte del continuo occitano gascón.",
    incorrectas: [
      "Es dialecto del catalán central.",
      "Es una variedad del gallego oriental."
    ]
  },
  {
    enunciado: "¿Qué se entiende por mozárabe?",
    correcta: "Conjunto de hablas romances de población cristiana en al-Ándalus, hoy extintas.",
    incorrectas: [
      "El árabe clásico con rasgos ibéricos modernos.",
      "Una variedad de euskera medieval con léxico árabe."
    ]
  },
  {
    enunciado: "¿Qué capa toponímica se asocia a la influencia árabe en España?",
    correcta: "Formantes como ‘Guadal-’, ‘Al-’, ‘Ben-’ en numerosos topónimos.",
    incorrectas: [
      "El sufijo ‘-ez’ de patronímicos castellanos.",
      "Prefijos ‘San-/Santa-’ en todo el norte peninsular."
    ]
  },
  {
    enunciado: "¿Qué describe el seseo frente al ceceo?",
    correcta: "El seseo pronuncia /s/ donde la norma distingue /s/ y /θ/; el ceceo pronuncia /θ/ en ambos casos.",
    incorrectas: [
      "El seseo es la confusión entre /r/ y /l/; el ceceo es la aspiración de /s/.",
      "Ambos términos son sinónimos exactos."
    ]
  },
  {
    enunciado: "¿Qué es el yeísmo?",
    correcta: "La neutralización de la oposición /ʎ/–/ʝ/ a favor de /ʝ/.",
    incorrectas: [
      "La sustitución de /j/ por /i/ en posición final.",
      "La pérdida general de /y/ en todos los dialectos."
    ]
  },
  {
    enunciado: "¿Qué fenómeno pronominal está parcialmente aceptado por la norma en castellano peninsular?",
    correcta: "El leísmo de persona masculina singular en ciertos contextos.",
    incorrectas: [
      "El loísmo generalizado en todo objeto directo.",
      "El uso de ‘les’ como objeto directo plural en cualquier caso."
    ]
  },
  {
    enunciado: "¿Qué relación histórica conecta Canarias y el español americano?",
    correcta: "Puentes migratorios y rasgos compartidos (seseo, aspiración de /-s/, ustedes) por difusión atlántica.",
    incorrectas: [
      "La imposición del ceceo canario en toda América.",
      "La ausencia total de vínculos lingüísticos entre ambas orillas."
    ]
  },
  {
    enunciado: "¿Qué entendemos por alternancia de códigos (code-switching) en comunidades bilingües?",
    correcta: "Uso alterno de dos sistemas lingüísticos en una misma interacción o discurso.",
    incorrectas: [
      "Sustitución definitiva de una lengua por otra sin retorno.",
      "Cambio de registro dentro de la misma lengua sin contacto."
    ]
  },
  {
    enunciado: "¿Qué es el continuo dialectal?",
    correcta: "Serie de variedades geográficamente contiguas con cambios graduales y transiciones entre zonas.",
    incorrectas: [
      "Un conjunto de lenguas impuestas sin contacto mutuo.",
      "Una lista cerrada de dialectos sin transición."
    ]
  },
  {
    enunciado: "¿Qué criterio NO es decisivo por sí solo para diferenciar lengua y dialecto?",
    correcta: "El número absoluto de hablantes.",
    incorrectas: [
      "La estandarización y la función institucional.",
      "La intercomprensión y la distancia estructural."
    ]
  },
  {
    enunciado: "¿Qué proceso describe mejor la ‘nivelación’ dialectal en áreas urbanas?",
    correcta: "Reducción de rasgos locales muy marcados hacia formas más generales o estándar.",
    incorrectas: [
      "Fortalecimiento de los rasgos locales en todos los hablantes.",
      "Aparición de nuevas consonantes inexistentes en la lengua."
    ]
  },
  {
    enunciado: "¿Qué ámbito didáctico favorece la conciencia dialectal en Secundaria?",
    correcta: "Proyectos de cartografía lingüística local y análisis de corpus orales y medios bilingües.",
    incorrectas: [
      "Prohibir toda variedad no estándar en el aula.",
      "Evaluar solo ortografía y métrica sin uso real."
    ]
  }
];
