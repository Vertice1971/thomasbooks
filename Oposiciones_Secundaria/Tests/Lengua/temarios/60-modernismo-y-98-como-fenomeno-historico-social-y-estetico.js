// temarios/60-modernismo-y-generacion-del-98-como-fenomeno-historico-social-y-estetico.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define mejor al Modernismo hispánico?",
    correcta: "Renovación estética con musicalidad, símbolo y cosmopolitismo frente al prosaismo burgués",
    incorrectas: [
      "Regreso a las unidades clásicas y a la imitación estricta",
      "Programa moral de realismo documental sin innovación formal"
    ]
  },
  {
    enunciado: "¿Desde qué ámbito llega la gran onda modernista que influye decisivamente en España?",
    correcta: "Desde Hispanoamérica (Rubén Darío como figura central)",
    incorrectas: [
      "Desde Alemania a través del romanticismo tardío",
      "Desde Rusia con el realismo decimonónico"
    ]
  },
  {
    enunciado: "¿Qué libro de Rubén Darío se considera partida de nacimiento del Modernismo literario?",
    correcta: "Azul… (1888)",
    incorrectas: [
      "Campos de Castilla (1912)",
      "Soledades (1903)"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico es característico del Modernismo?",
    correcta: "Sinestesia, léxico preciosista y musicalidad rítmica",
    incorrectas: [
      "Prosa funcional y terminología administrativa",
      "Parodia sistemática y coloquialismo extremo"
    ]
  },
  {
    enunciado: "¿Qué metro revaloriza el Modernismo en español?",
    correcta: "El alejandrino, junto a combinaciones acentuales novedosas",
    incorrectas: [
      "El hexámetro clásico latino",
      "El octosílabo exclusivo y único"
    ]
  },
  {
    enunciado: "¿Cuál es la combinación de obras de Darío que marca su evolución hacia una voz más grave?",
    correcta: "Prosas profanas (1896) y Cantos de vida y esperanza (1905)",
    incorrectas: [
      "Diario de un poeta recién casado y Platero y yo",
      "Soledades y Nuevas canciones"
    ]
  },
  {
    enunciado: "¿Qué ciclo en prosa de Valle-Inclán representa la prosa modernista aristocratizante?",
    correcta: "Las Sonatas (1902–1905)",
    incorrectas: [
      "Luces de Bohemia (1920)",
      "La voluntad (1902)"
    ]
  },
  {
    enunciado: "¿Qué itinerario define la evolución de Juan Ramón Jiménez?",
    correcta: "Del modernismo sensitivo a la ‘poesía pura’ (Diario de un poeta recién casado, 1916)",
    incorrectas: [
      "Del culteranismo barroco a la épica medieval",
      "Del realismo costumbrista al teatro clásico en verso"
    ]
  },
  {
    enunciado: "¿Qué etapa de Antonio Machado participa del clima modernista?",
    correcta: "Soledades (1903/1907), con simbolismo intimista",
    incorrectas: [
      "Campos de Castilla (1912), de tono civil y sobrio",
      "Nuevas canciones (1924), exclusivamente épica"
    ]
  },
  {
    enunciado: "¿Qué núcleo temático vertebra a menudo el Modernismo?",
    correcta: "Evasión, cosmopolitismo, erotismo sutil y culto a la belleza",
    incorrectas: [
      "Documentalismo judicial y estadístico",
      "Didactismo escolar y sermón moral fijo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la Generación del 98?",
    correcta: "Sobriedad expresiva y reflexión sobre el ‘problema de España’",
    incorrectas: [
      "Exotismo cortesano y preciosismo decorativo",
      "Épica caballeresca con héroes sobrenaturales"
    ]
  },
  {
    enunciado: "¿Qué concepto propone Unamuno para pensar la España profunda más allá del ruido histórico?",
    correcta: "Intrahistoria",
    incorrectas: [
      "Esperpento",
      "Parnasianismo"
    ]
  },
  {
    enunciado: "¿Qué obra ensayística clave de Unamuno aparece en 1913?",
    correcta: "Del sentimiento trágico de la vida",
    incorrectas: [
      "Vida de Don Quijote y Sancho",
      "Azul…"
    ]
  },
  {
    enunciado: "¿Qué rasgo formal distingue a Azorín?",
    correcta: "Frase corta, miniatura reflexiva y paisaje-memoria",
    incorrectas: [
      "Verso alejandrino con rima interior",
      "Tragedias en endecasílabos heroicos"
    ]
  },
  {
    enunciado: "¿Qué define a Baroja en prosa?",
    correcta: "Vigor narrativo, escepticismo y héroes inadaptados",
    incorrectas: [
      "Épica arcaizante y alegoría medieval",
      "Misticismo barroco sistemático"
    ]
  },
  {
    enunciado: "¿Qué estética desarrolla Valle-Inclán en los años veinte como proyección crítica del 98?",
    correcta: "El esperpento",
    incorrectas: [
      "El culteranismo",
      "El costumbrismo neoclásico"
    ]
  },
  {
    enunciado: "¿Qué revistas y circuitos son claves del fin de siglo español?",
    correcta: "La España Moderna, Vida Nueva, Helios, ateneos y prensa",
    incorrectas: [
      "El Cantar de Mio Cid y códices medievales monásticos",
      "El Mercurio Peruano y La Ilustración de Lima únicamente"
    ]
  },
  {
    enunciado: "¿Qué lema del regeneracionismo de Joaquín Costa resume un programa de modernización?",
    correcta: "“Escuela y despensa”",
    incorrectas: [
      "“Pan y toros”",
      "“Fe y espada”"
    ]
  },
  {
    enunciado: "¿Qué hecho histórico cataliza la llamada ‘Crisis del 98’?",
    correcta: "La pérdida de Cuba, Puerto Rico y Filipinas en 1898",
    incorrectas: [
      "La Guerra de Sucesión española (1701–1714)",
      "La invasión napoleónica (1808)"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia tendencial Modernismo–98 más aceptada?",
    correcta: "Modernismo prioriza la forma y la sugerencia; el 98, la sobriedad y el problema nacional",
    incorrectas: [
      "Modernismo es prosa y el 98 sólo poesía",
      "Modernismo es medieval y el 98 renacentista"
    ]
  },
  {
    enunciado: "¿Qué métrica y actitud verbal predominan en el 98 poético?",
    correcta: "Endecasílabo y heptasílabo depurados, silva sobria y léxico esencial",
    incorrectas: [
      "Alejandrinos ornamentales y cromatismo exuberante",
      "Hexámetros latinos con rima interna"
    ]
  },
  {
    enunciado: "¿Qué imagen del paisaje funciona como problema moral en el 98?",
    correcta: "Castilla (meseta, ruinas, pueblos, caminos)",
    incorrectas: [
      "Islas paradisíacas tropicales",
      "Picos alpinos de Suiza como emblema nacional"
    ]
  },
  {
    enunciado: "¿Qué libro de Antonio Machado representa su etapa madura noventayochista?",
    correcta: "Campos de Castilla (1912)",
    incorrectas: [
      "Prosas profanas",
      "Soledades, galerías y otros poemas (únicamente modernista)"
    ]
  },
  {
    enunciado: "¿Qué rasgo lingüístico contrasta 98 y Modernismo?",
    correcta: "Esencialidad léxica frente a preciosismo cromático",
    incorrectas: [
      "Latinización extrema compartida",
      "Jerga científica exclusiva en ambos"
    ]
  },
  {
    enunciado: "¿Qué recurso imaginario es típico del Modernismo?",
    correcta: "Exotismo (Oriente, cisnes, Versalles) como mundo de máscara",
    incorrectas: [
      "Inventarios notariales y archivos municipales",
      "Alegoría política directa y panfletaria"
    ]
  },
  {
    enunciado: "¿Qué género vertebra a menudo la escritura del 98?",
    correcta: "El ensayo y el artículo de reflexión cultural",
    incorrectas: [
      "La epopeya en dodecasílabos",
      "La égloga pastoril exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué noción narrativa acuña Unamuno para Niebla?",
    correcta: "Nivola",
    incorrectas: [
      "Auto sacramental",
      "Novela bizantina"
    ]
  },
  {
    enunciado: "¿Qué figura protagoniza las Sonatas de Valle-Inclán?",
    correcta: "El Marqués de Bradomín",
    incorrectas: [
      "Don Juan Tenorio",
      "Max Estrella"
    ]
  },
  {
    enunciado: "¿Qué doble adscripción suele reconocerse en Antonio Machado?",
    correcta: "Clima modernista inicial y madurez noventayochista",
    incorrectas: [
      "Neoclásico estricto y futurista",
      "Naturalista y surrealista en exclusiva"
    ]
  },
  {
    enunciado: "¿Qué obra marca el giro americanista y marino en Juan Ramón Jiménez hacia la depuración verbal?",
    correcta: "Diario de un poeta recién casado (1916)",
    incorrectas: [
      "La de Bringas (1884)",
      "Luces de Bohemia (1920)"
    ]
  },
  {
    enunciado: "¿Qué relación resume mejor Modernismo y 98?",
    correcta: "Coetáneos con vasos comunicantes y diferencias de énfasis",
    incorrectas: [
      "Movimientos sucesivos sin solapamiento alguno",
      "Escuelas enemigas sin influencias recíprocas"
    ]
  },
  {
    enunciado: "¿Qué corrientes europeas alimentan el fin de siglo hispánico?",
    correcta: "Simbolismo y parnasianismo, con decadentismo y eco nietzscheano",
    incorrectas: [
      "Escolástica medieval y escolio bizantino",
      "Clasicismo francés del XVII sin más"
    ]
  },
  {
    enunciado: "¿Qué libro ensayístico de Unamuno cuestiona el ‘casticismo’ retórico?",
    correcta: "En torno al casticismo (1895)",
    incorrectas: [
      "Los lunes al sol",
      "Prosas profanas"
    ]
  },
  {
    enunciado: "¿Qué lema crítico define la actitud del 98 ante el lenguaje?",
    correcta: "Depuración y sobriedad expresiva",
    incorrectas: [
      "Hipérbole ornamental constante",
      "Tecnificación jergaísta"
    ]
  },
  {
    enunciado: "¿Qué soporte material hizo de puente entre ambos movimientos y el público?",
    correcta: "La prensa y las revistas literarias",
    incorrectas: [
      "El códice iluminado medieval",
      "La transmisión oral exclusiva en plazas"
    ]
  },
  {
    enunciado: "¿Qué imagen del yo poético es típica del Modernismo?",
    correcta: "Sujeto estético que busca la belleza y la máscara",
    incorrectas: [
      "Sujeto documental sin emoción",
      "Sujeto épico colectivo heroico"
    ]
  },
  {
    enunciado: "¿Qué obra de Darío simboliza el Modernismo más musical y preciosista?",
    correcta: "Prosas profanas (1896)",
    incorrectas: [
      "Diario de un poeta recién casado",
      "Del sentimiento trágico de la vida"
    ]
  },
  {
    enunciado: "¿Qué paisaje moraliza Antonio Machado en su obra madura?",
    correcta: "Castilla como emblema ético y problema histórico",
    incorrectas: [
      "La selva amazónica como utopía modernista",
      "La corte versallesca como paraíso nacional"
    ]
  },
  {
    enunciado: "¿Qué obra de Valle-Inclán, ya fuera del periodo central, formula el esperpento?",
    correcta: "Luces de Bohemia (1920)",
    incorrectas: [
      "Soledades (1903)",
      "Azul… (1888)"
    ]
  },
  {
    enunciado: "¿Qué afirmación global es correcta sobre Modernismo y Generación del 98?",
    correcta: "Dos vertientes complementarias del fin de siglo que renuevan la literatura española",
    incorrectas: [
      "Una anula históricamente a la otra",
      "Son fenómenos idénticos sin matices"
    ]
  }
];
