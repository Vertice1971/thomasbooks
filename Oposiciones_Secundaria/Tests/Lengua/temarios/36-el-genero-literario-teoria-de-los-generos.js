// temarios/36-el-genero-literario-teoria-de-los-generos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué definición operativa describe mejor el género literario?",
    correcta: "Un conjunto histórico-cultural de convenciones formales, temáticas, enunciativas y pragmáticas que orienta producción y lectura.",
    incorrectas: [
      "Una esencia fija y atemporal que determina la literatura por naturaleza.",
      "Un sinónimo de estilo individual del autor sin dimensión social."
    ]
  },
  {
    enunciado: "¿Qué función cumple el género como 'contrato de lectura'?",
    correcta: "Anticipar expectativas de sentido y pautar cómo interpretar el texto.",
    incorrectas: [
      "Garantizar que toda lectura sea idéntica entre lectores.",
      "Suprimir la necesidad de paratextos y contexto."
    ]
  },
  {
    enunciado: "¿Cuál es la tríada clásica de géneros en la tradición occidental?",
    correcta: "Lírico, narrativo (épico) y dramático.",
    incorrectas: [
      "Didáctico, científico y técnico.",
      "Crónica, comentario y ensayo periodístico."
    ]
  },
  {
    enunciado: "En la Poética de Aristóteles, la teoría genérica se articula en torno a:",
    correcta: "La mímesis y la descripción de formas como épica y tragedia con reglas de verosimilitud.",
    incorrectas: [
      "La equiparación absoluta entre poesía y historia sin distinción.",
      "La defensa del verso libre como única forma válida."
    ]
  },
  {
    enunciado: "¿Qué principio asocia la tradición horaciana al tratamiento de los géneros?",
    correcta: "El decorum: adecuación de estilo, tema y forma.",
    incorrectas: [
      "La anarquía formal como norma general.",
      "La prohibición de mezclar cualquier subgénero."
    ]
  },
  {
    enunciado: "Una consecuencia romántica sobre los géneros fue:",
    correcta: "La flexibilización de reglas y la hibridación de formas.",
    incorrectas: [
      "El retorno estricto a las unidades clásicas.",
      "La desaparición de la lírica como forma autónoma."
    ]
  },
  {
    enunciado: "Para Tzvetan Todorov, los géneros pueden entenderse como:",
    correcta: "Clases históricas de enunciados con gramáticas relativamente estables.",
    incorrectas: [
      "Colecciones de biografías de autores sin rasgos textuales.",
      "Listas de temas desligadas de la enunciación."
    ]
  },
  {
    enunciado: "¿Qué denomina Gérard Genette 'architexto'?",
    correcta: "La relación genérica abstracta que sitúa un texto dentro de una categoría.",
    incorrectas: [
      "El conjunto de notas y prólogos impresos en la edición.",
      "La relación de transformación entre un texto y su reescritura."
    ]
  },
  {
    enunciado: "¿Qué incluye Genette bajo el término 'paratexto'?",
    correcta: "Títulos, prólogos, notas, cubiertas y otros umbrales que orientan la lectura.",
    incorrectas: [
      "Todas las referencias intertextuales internas del relato.",
      "La estructura métrica y rítmica de un poema."
    ]
  },
  {
    enunciado: "Wellek y Warren insisten en que los géneros son:",
    correcta: "Herramientas descriptivas flexibles más que taxonomías rígidas.",
    incorrectas: [
      "Clases naturales inmutables idénticas en toda época.",
      "Etiquetas editoriales sin valor crítico."
    ]
  },
  {
    enunciado: "Para Claudio Guillén, los géneros funcionan como:",
    correcta: "“Invitaciones a formar”: procesos y familias históricas que se actualizan.",
    incorrectas: [
      "Modelos cerrados que impiden toda innovación.",
      "Reglas universales aplicables sin contexto."
    ]
  },
  {
    enunciado: "Según Bajtín, la noción de género se amplía al hablar de:",
    correcta: "Géneros del discurso y heteroglosia en la vida social del lenguaje.",
    incorrectas: [
      "Monologismo absoluto y homogeneidad de registros.",
      "Exclusión de lo dialogal en la novela."
    ]
  },
  {
    enunciado: "Desde la teoría de prototipos (Rosch/Lakoff), las categorías genéricas son:",
    correcta: "Difusas, con miembros prototípicos y fronteras graduales.",
    incorrectas: [
      "Binarias, con inclusión o exclusión tajante por esencia.",
      "Determinadas solo por el número de páginas."
    ]
  },
  {
    enunciado: "Para Carolyn Miller, un género es ante todo:",
    correcta: "Una forma de acción social recurrente con propósitos y situaciones tipificadas.",
    incorrectas: [
      "Un patrón exclusivamente métrico independiente del uso.",
      "Una etiqueta editorial arbitraria sin prácticas asociadas."
    ]
  },
  {
    enunciado: "John Swales caracteriza los géneros por:",
    correcta: "Movimientos retóricos y objetivos comunicativos de una comunidad discursiva.",
    incorrectas: [
      "La rima consonante como criterio único.",
      "La autoría individual como rasgo definitorio."
    ]
  },
  {
    enunciado: "¿Qué rasgo resulta prototípico del género lírico?",
    correcta: "Intensificación de la voz enunciativa y del ritmo-imagen.",
    incorrectas: [
      "Representación escénica dialogada.",
      "Secuenciación narrativa extensa con subtramas."
    ]
  },
  {
    enunciado: "¿Qué rasgo resulta prototípico del género narrativo?",
    correcta: "Construcción de mundo y temporalidad con un principio de causalidad.",
    incorrectas: [
      "Ausencia de toda diégesis.",
      "Exclusividad de verso isométrico."
    ]
  },
  {
    enunciado: "¿Qué rasgo resulta prototípico del género dramático?",
    correcta: "Acción representada mediante diálogo y acotaciones.",
    incorrectas: [
      "Narración en tercera persona sin escena.",
      "Predominio de voz ensayística con citas bibliográficas."
    ]
  },
  {
    enunciado: "¿Qué es la autoficción dentro de la discusión genérica?",
    correcta: "Un híbrido que mezcla pacto autobiográfico y ficción narrativa.",
    incorrectas: [
      "Una autobiografía documental sin invención.",
      "Una etiqueta para poemas visuales interactivos."
    ]
  },
  {
    enunciado: "La docu-ficción se define como:",
    correcta: "Integración de materiales documentales con procedimientos ficcionales.",
    incorrectas: [
      "Un documental científico sin trama ni personajes.",
      "Un subgénero lírico basado en onomatopeyas."
    ]
  },
  {
    enunciado: "¿Qué papel juegan los paratextos en la señalización genérica?",
    correcta: "Activan expectativas de género mediante títulos, colecciones y umbrales editoriales.",
    incorrectas: [
      "Ocultan deliberadamente la pertenencia genérica.",
      "Sustituyen la lectura del texto por completo."
    ]
  },
  {
    enunciado: "¿Qué describe mejor la historicidad de los géneros?",
    correcta: "Nacen, se estabilizan, se transforman y pueden agotarse según contextos.",
    incorrectas: [
      "Permanecen idénticos desde la Antigüedad.",
      "Cambian solo si varía la biografía del autor."
    ]
  },
  {
    enunciado: "Un 'marcador genérico' puede ser:",
    correcta: "Un esquema de apertura/cierre, un tono y una disposición formal reconocibles.",
    incorrectas: [
      "Cualquier error tipográfico en la edición.",
      "La firma autógrafa del autor en portadilla."
    ]
  },
  {
    enunciado: "¿Qué diferencia un género de un subgénero?",
    correcta: "El subgénero especifica rasgos dentro de un marco genérico más amplio.",
    incorrectas: [
      "El género es menor y el subgénero es macro.",
      "No existe distinción: son términos sinónimos."
    ]
  },
  {
    enunciado: "¿En qué se distingue 'género' de 'tipo de texto' (p. ej., expositivo, argumentativo)?",
    correcta: "El género pertenece a la tradición literaria; el tipo se define por la finalidad discursiva.",
    incorrectas: [
      "Ambos se determinan solo por métrica y rima.",
      "El tipo de texto es un subgénero de la novela."
    ]
  },
  {
    enunciado: "Una 'prueba de frontera' en análisis genérico sirve para:",
    correcta: "Distinguir transgresiones productivas de desviaciones que rompen el contrato de lectura.",
    incorrectas: [
      "Eliminar toda obra que mezcle rasgos.",
      "Determinar la autoría por frecuencia léxica."
    ]
  },
  {
    enunciado: "¿Qué relación establece Genette entre hipertexto e hipotexto?",
    correcta: "El hipertexto transforma o deriva de un hipotexto previo (parodia, pastiche, secuela).",
    incorrectas: [
      "Ambos nombres designan el mismo fenómeno que el paratexto.",
      "El hipotexto es siempre el prólogo del mismo libro."
    ]
  },
  {
    enunciado: "¿Qué define mejor la transtextualidad?",
    correcta: "El conjunto de relaciones entre textos: inter, hiper, meta, para y architextualidad.",
    incorrectas: [
      "La rima y el metro empleados en poemas clásicos.",
      "La biografía del autor añadida como anexo."
    ]
  },
  {
    enunciado: "El 'pacto autobiográfico' (Lejeune) es relevante para el género porque:",
    correcta: "Establece una promesa de identidad autor-narrador-protagonista y un régimen de veridicción.",
    incorrectas: [
      "Prohíbe cualquier forma de narración en primera persona.",
      "Transforma todo relato en ficción por defecto."
    ]
  },
  {
    enunciado: "¿Qué papel tiene el 'campo literario' (Bourdieu) en la configuración de géneros?",
    correcta: "Instituye jerarquías y legitima formas a través de luchas por capital simbólico.",
    incorrectas: [
      "Determina exclusivamente la métrica de la poesía.",
      "Hace innecesaria la crítica y la teoría."
    ]
  },
  {
    enunciado: "La novela gráfica ilustra la dimensión genérica porque:",
    correcta: "Articula códigos verbo-visuales y convención seriada en una familia de formas narrativas.",
    incorrectas: [
      "Es un sinónimo exacto de cuento oral tradicional.",
      "Exige siempre verso y rima consonante."
    ]
  },
  {
    enunciado: "En entorno digital y transmedia, los géneros muestran:",
    correcta: "Expansión, serialidad y participación, con fronteras más porosas.",
    incorrectas: [
      "Estabilidad absoluta y desuso de paratextos.",
      "Desaparición de toda narratividad."
    ]
  },
  {
    enunciado: "Un criterio útil para clasificar géneros sin rigidez es:",
    correcta: "Identificar rasgos nucleares y gradientes de pertenencia prototípica.",
    incorrectas: [
      "Contar adjetivos por página como regla general.",
      "Tomar la fecha de publicación como rasgo textual."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'géneros de frontera'?",
    correcta: "Formas que cruzan límites convencionales y median entre sistemas (p. ej., crónica lírica).",
    incorrectas: [
      "Géneros prohibidos por normativa escolar.",
      "Obras que carecen de todo rasgo reconocible."
    ]
  },
  {
    enunciado: "¿Qué rol cumple la enseñanza al trabajar 'escribir en género'?",
    correcta: "Explorar imitatio/variatio para comprender rasgos desde la producción guiada.",
    incorrectas: [
      "Imitar servilmente sin reflexión crítica.",
      "Evitar la creación para preservar 'pureza' genérica."
    ]
  },
  {
    enunciado: "Una 'familia genérica' según enfoques históricos-comparados es:",
    correcta: "Un conjunto de subgéneros emparentados por rasgos y genealogías compartidas.",
    incorrectas: [
      "La suma de obras publicadas por una editorial.",
      "Un canon fijo decidido por una sola academia."
    ]
  },
  {
    enunciado: "¿Qué enunciado sobre la flexibilidad o fijación genérica es más adecuado?",
    correcta: "Los géneros son dinámicos: mantienen convenciones pero admiten innovación y mezcla.",
    incorrectas: [
      "Los géneros son estáticos y no cambian con la historia.",
      "Los géneros son irrelevantes para la lectura e interpretación."
    ]
  },
  {
    enunciado: "Una estrategia crítica para detectar género en un texto desconocido es:",
    correcta: "Analizar paratextos, tono, organización y repertorio de recursos como marcadores de pertenencia.",
    incorrectas: [
      "Ignorar todo indicio externo e interno y adivinar.",
      "Reducir el análisis a la extensión del libro."
    ]
  },
  {
    enunciado: "Una conclusión aceptada en teoría de los géneros sostiene que:",
    correcta: "El género es un sistema de expectativas negociadas, no una 'caja' fija.",
    incorrectas: [
      "El género solo depende de la intención del autor.",
      "El género puede deducirse sin atender al lector ni a la institución."
    ]
  }
];
