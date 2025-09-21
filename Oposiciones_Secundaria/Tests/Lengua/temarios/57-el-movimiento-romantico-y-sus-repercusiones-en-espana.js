// temarios/57-el-movimiento-romantico-y-sus-repercusiones-en-espana.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define con mayor precisión al Romanticismo europeo del siglo XIX?",
    correcta: "Exaltación de la subjetividad, la libertad creadora y lo sublime frente al clasicismo normativo",
    incorrectas: [
      "Retorno a las unidades clásicas y a la imitación estricta",
      "Supremacía del racionalismo geométrico sin emoción"
    ]
  },
  {
    enunciado: "¿Qué corrientes o momentos preceden y alimentan el Romanticismo europeo?",
    correcta: "El prerromanticismo (Young, Ossian) y el Sturm und Drang alemán",
    incorrectas: [
      "El Parnasianismo y el Futurismo",
      "El Naturalismo y el Realismo mágico"
    ]
  },
  {
    enunciado: "¿Qué noción estética gana protagonismo romántico frente a lo meramente ‘bello’?",
    correcta: "Lo sublime (grandeza, estremecimiento, desmesura)",
    incorrectas: [
      "Lo doméstico como única categoría estética",
      "Lo grotesco entendido como norma universal"
    ]
  },
  {
    enunciado: "¿Cuál de estos rasgos es característico del ideario romántico?",
    correcta: "Medievalismo, orientalismo e interés por la tradición popular",
    incorrectas: [
      "Neoclasicismo puro y rechazo del folklore",
      "Desprecio absoluto por el pasado histórico"
    ]
  },
  {
    enunciado: "¿Qué postura formal adopta el teatro romántico respecto a las ‘tres unidades’ clásicas?",
    correcta: "Ruptura o flexibilización de las unidades y mezcla de prosa y verso",
    incorrectas: [
      "Observancia estricta e invariable",
      "Prohibición del verso en escena"
    ]
  },
  {
    enunciado: "¿Qué factor explica la llegada tardía del Romanticismo a España?",
    correcta: "Las convulsiones políticas (guerra, exilios, censura) y el peso del clasicismo",
    incorrectas: [
      "El temprano asentamiento del simbolismo francés",
      "La inexistencia de circuitos teatrales"
    ]
  },
  {
    enunciado: "¿Qué doble corriente ideológica suele distinguirse en el Romanticismo español?",
    correcta: "Una liberal y otra tradicionalista-cristiana",
    incorrectas: [
      "Una barroca culterana y otra conceptista",
      "Una realista-naturalista y otra impresionista"
    ]
  },
  {
    enunciado: "¿Qué rasgo métrico y expresivo es frecuente en la poesía romántica española?",
    correcta: "Polimetría, cambios rítmicos y exaltación del yo lírico",
    incorrectas: [
      "Isometría rígida y supresión de la primera persona",
      "Verso blanco uniforme sin variación"
    ]
  },
  {
    enunciado: "¿Qué obra de Espronceda simboliza el mito de la libertad marginal?",
    correcta: "La “Canción del pirata”",
    incorrectas: [
      "La “Oda a la vida retirada”",
      "El “Canto a Teresa” de Campoamor"
    ]
  },
  {
    enunciado: "¿Qué combinación de obras pertenece a José de Espronceda?",
    correcta: "El estudiante de Salamanca y El diablo mundo",
    incorrectas: [
      "Don Juan Tenorio y Traidor, inconfeso y mártir",
      "Rimas y Leyendas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la poesía de Bécquer en el panorama romántico/postromántico?",
    correcta: "Sugerencia, musicalidad íntima y simbolización del sentimiento",
    incorrectas: [
      "Grandilocuencia épica y tono declamatorio constante",
      "Prosaismo costumbrista sin lirismo"
    ]
  },
  {
    enunciado: "¿Qué conjunto de títulos identifica mejor a Bécquer?",
    correcta: "Rimas y Leyendas",
    incorrectas: [
      "La canción de Rolando",
      "Cantares gallegos"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a Rosalía de Castro dentro del ciclo romántico tardío?",
    correcta: "Intimidad dolorida y paisaje anímico en gallego y castellano",
    incorrectas: [
      "Épica caballeresca con tono heroico",
      "Parnasianismo ornamental puro"
    ]
  },
  {
    enunciado: "¿Cuál de estas afirmaciones sobre José Zorrilla es correcta?",
    correcta: "Autor de Don Juan Tenorio, donde el mito se reescribe con redención por amor",
    incorrectas: [
      "Cultivó el naturalismo urbano con rigor científico",
      "Su obra central es La Regenta"
    ]
  },
  {
    enunciado: "¿Qué drama abre decisivamente el ciclo del teatro romántico español en los 1830?",
    correcta: "Don Álvaro o la fuerza del sino, del Duque de Rivas",
    incorrectas: [
      "La vida es sueño, de Calderón",
      "El médico de su honra, de Calderón"
    ]
  },
  {
    enunciado: "¿Qué pieza romántica de García Gutiérrez tuvo temprana repercusión operística en Verdi?",
    correcta: "El Trovador",
    incorrectas: [
      "La Dama duende",
      "El sí de las niñas"
    ]
  },
  {
    enunciado: "¿Qué obra de Hartzenbusch dramatiza una leyenda medieval de amor trágico?",
    correcta: "Los amantes de Teruel",
    incorrectas: [
      "El señor de Bembibre",
      "El alcalde de Zalamea"
    ]
  },
  {
    enunciado: "¿Qué autor encarna el artículo de costumbres y la crítica social en el Romanticismo español?",
    correcta: "Mariano José de Larra (Fígaro)",
    incorrectas: [
      "Leandro Fernández de Moratín",
      "Galdós"
    ]
  },
  {
    enunciado: "¿Qué título representa la novela histórica romántica ambientada en el Medievo leonés?",
    correcta: "El señor de Bembibre, de Enrique Gil y Carrasco",
    incorrectas: [
      "Doña Perfecta, de Galdós",
      "La Regenta, de Clarín"
    ]
  },
  {
    enunciado: "¿Qué compilación resulta clave para el rescate del romancero en el XIX?",
    correcta: "Las colecciones de Agustín Durán",
    incorrectas: [
      "El Cancionero de Baena medieval",
      "La Antología de Spoon River"
    ]
  },
  {
    enunciado: "¿Qué recurso temático es típico del imaginario romántico?",
    correcta: "Amor imposible, muerte y destino trágico",
    incorrectas: [
      "Didactismo moral sin conflicto",
      "Crónica burocrática de cortes"
    ]
  },
  {
    enunciado: "¿Cómo funciona la naturaleza en la poética romántica?",
    correcta: "Como espejo del alma y amplificación de la emoción",
    incorrectas: [
      "Como simple telón de fondo neutro",
      "Como inventario botánico estrictamente científico"
    ]
  },
  {
    enunciado: "¿Qué figura del héroe romántico aparece con frecuencia?",
    correcta: "El rebelde marginal, errante y desengañado",
    incorrectas: [
      "El burócrata satisfecho",
      "El filósofo positivista sin dudas"
    ]
  },
  {
    enunciado: "¿Qué combinación es propia del estilo escénico romántico español?",
    correcta: "Alternancia de prosa y verso, cuadros móviles y espectacularidad",
    incorrectas: [
      "Unidades estrictas y estilo declamatorio uniforme",
      "Prohibición absoluta de efectos escénicos"
    ]
  },
  {
    enunciado: "¿Qué papel jugó el ‘folletín’ en el ecosistema romántico y posromántico?",
    correcta: "Serializó narraciones y difundió literatura a públicos amplios",
    incorrectas: [
      "Sustituyó por completo al libro",
      "Fue un índice oficial de censura"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue al postromanticismo español (Bécquer, Rosalía)?",
    correcta: "Interiorización, musicalidad y contención expresiva",
    incorrectas: [
      "Grandilocuencia épica y alegoría constante",
      "Realismo naturalista documental"
    ]
  },
  {
    enunciado: "¿Qué mito revisa Zorrilla para el gusto romántico español?",
    correcta: "El de Don Juan, acentuando el amor y la redención final",
    incorrectas: [
      "El de Prometeo con final cómico",
      "El de Fausto sin elementos sobrenaturales"
    ]
  },
  {
    enunciado: "¿Qué autoras amplían el mapa romántico hispánico desde una perspectiva social y de género?",
    correcta: "Gertrudis Gómez de Avellaneda y Fernán Caballero",
    incorrectas: [
      "Emilia Pardo Bazán y Rosalía (núcleo naturalista)",
      "Concepción Arenal y Azorín"
    ]
  },
  {
    enunciado: "¿Qué obra de Avellaneda destaca por su dimensión abolicionista y sentimental?",
    correcta: "Sab",
    incorrectas: [
      "Marianela",
      "La gaviota"
    ]
  },
  {
    enunciado: "¿Qué autor norteamericano vinculado a España alimenta el imaginario romántico de la Alhambra?",
    correcta: "Washington Irving, con sus Cuentos de la Alhambra",
    incorrectas: [
      "Herman Melville, con Moby-Dick",
      "Edgar Allan Poe, con La carta robada"
    ]
  },
  {
    enunciado: "¿Qué rasgo retórico aparece a menudo en la dicción romántica?",
    correcta: "Apostrofes, exclamaciones e interrogaciones retóricas",
    incorrectas: [
      "Silogismos formales sin imágenes",
      "Silencio expresivo y monosílabos"
    ]
  },
  {
    enunciado: "¿Cuál de estos binomios temáticos es netamente romántico?",
    correcta: "Libertad individual vs. norma social",
    incorrectas: [
      "Abundancia vs. gasto suntuario",
      "Patria potestad vs. usufructo"
    ]
  },
  {
    enunciado: "¿Qué movimiento estético hereda aspectos del Romanticismo íntimo español?",
    correcta: "El Simbolismo y, más tarde, el Modernismo",
    incorrectas: [
      "El Expresionismo abstracto",
      "El Cubismo literario del Siglo de Oro"
    ]
  },
  {
    enunciado: "¿Qué combinación de autores representa el núcleo poético romántico/postromántico hispano?",
    correcta: "Espronceda, Bécquer, Rosalía y Zorrilla",
    incorrectas: [
      "Quevedo, Góngora, Lope y Calderón",
      "Machado, Juan Ramón, Cernuda y Guillén"
    ]
  },
  {
    enunciado: "¿Qué define la ‘ironía romántica’ como actitud estética?",
    correcta: "Conciencia del artificio y juego con la distancia respecto al propio discurso",
    incorrectas: [
      "Negación de toda subjetividad",
      "Identidad total con la voz épica colectiva"
    ]
  },
  {
    enunciado: "¿Qué aspecto editorial e institucional favorece la difusión romántica en España?",
    correcta: "Ateneos, sociedades literarias y gran vitalidad de los teatros",
    incorrectas: [
      "Cierre permanente de salas y periódicos",
      "Prohibición de traducir autores europeos"
    ]
  },
  {
    enunciado: "¿Qué elementos iconográficos son frecuentes en el paisaje romántico?",
    correcta: "Ruinas, noche, tormenta, cementerios y montañas",
    incorrectas: [
      "Oficinas, ferrocarriles y fábricas solamente",
      "Palacios renacentistas luminosos sin contraste"
    ]
  },
  {
    enunciado: "¿Qué obra romántica española sitúa el conflicto en clave de ‘fuerza del sino’?",
    correcta: "Don Álvaro o la fuerza del sino",
    incorrectas: [
      "El sí de las niñas",
      "La dama boba"
    ]
  },
  {
    enunciado: "¿Qué consecuencia cultural de largo alcance puede atribuirse al Romanticismo español?",
    correcta: "Construcción de una memoria nacional a partir de leyenda, romancero y paisaje",
    incorrectas: [
      "Desaparición del teatro y la lírica",
      "Ruptura total con la tradición popular"
    ]
  }
];
