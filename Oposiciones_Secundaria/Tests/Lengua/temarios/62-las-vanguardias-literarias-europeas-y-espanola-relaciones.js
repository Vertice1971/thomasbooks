// temarios/62-las-vanguardias-literarias-europeas-y-espanola-relaciones.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define mejor a las vanguardias históricas en literatura (1910–1930)?",
    correcta: "La ruptura programática con la tradición mediante manifiestos y experimentación formal",
    incorrectas: [
      "La recuperación del canon neoclásico sin variaciones",
      "La subordinación de la poesía a fines exclusivamente didácticos"
    ]
  },
  {
    enunciado: "¿Qué obra-manifiesto fija el punto de partida del futurismo?",
    correcta: "El 'Manifiesto futurista' de F. T. Marinetti (1909)",
    incorrectas: [
      "Las 'Cartas marruecas' de Cadalso",
      "El 'Manifiesto surrealista' de Breton (1924)"
    ]
  },
  {
    enunciado: "¿Qué rasgo esencial comparten futurismo y cubismo literario?",
    correcta: "La búsqueda de simultaneidad y dinamismo en la disposición del texto",
    incorrectas: [
      "El regreso a la métrica medieval sin experimentación",
      "La prohibición de imágenes y metáforas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al dadaísmo literario?",
    correcta: "Su actitud antiarte, azarosa y de demolición del sentido lógico",
    incorrectas: [
      "La obediencia estricta a las reglas académicas",
      "El realismo objetivo y descriptivo"
    ]
  },
  {
    enunciado: "¿Qué propone el surrealismo según Breton?",
    correcta: "Explorar el inconsciente con escritura automática y onirismo",
    incorrectas: [
      "Eliminar la metáfora en favor del tecnicismo",
      "Reducir la poesía a crónica periodística"
    ]
  },
  {
    enunciado: "¿Qué rasgo identifica al expresionismo literario europeo?",
    correcta: "La intensificación subjetiva y visionaria del lenguaje",
    incorrectas: [
      "La mímesis fotográfica y neutral",
      "La pura transcripción documental sin estilo"
    ]
  },
  {
    enunciado: "¿Qué innovación formal es típica de las vanguardias?",
    correcta: "La desarticulación sintáctica y la metáfora libre",
    incorrectas: [
      "El pareado endecasílabo obligatorio",
      "La prohibición de tipografías y caligramas"
    ]
  },
  {
    enunciado: "¿Qué autor está asociado a los caligramas?",
    correcta: "Guillaume Apollinaire",
    incorrectas: [
      "León Felipe",
      "Blasco Ibáñez"
    ]
  },
  {
    enunciado: "¿Cuál fue el papel de las revistas en las vanguardias?",
    correcta: "Actuaron como plataformas de difusión y debate de los manifiestos",
    incorrectas: [
      "Sustituyeron a toda publicación de libros",
      "Fueron órganos exclusivos de información deportiva"
    ]
  },
  {
    enunciado: "En España, ¿quién actuó como gran mediador de la sensibilidad vanguardista?",
    correcta: "Ramón Gómez de la Serna, con las greguerías y sus tertulias",
    incorrectas: [
      "Espronceda, con sus romances orientales",
      "Clarín, con crítica antipoética"
    ]
  },
  {
    enunciado: "¿Qué rasgo define al ultraísmo?",
    correcta: "La condensación metafórica y el rechazo del ornamento retórico",
    incorrectas: [
      "La narratividad extensa de tono costumbrista",
      "La imitación de romances tradicionales"
    ]
  },
  {
    enunciado: "¿Qué postulaba el creacionismo de Huidobro?",
    correcta: "El poema como objeto autónomo, independiente de la realidad referencial",
    incorrectas: [
      "La poesía como copia fiel de la naturaleza",
      "La supresión de la metáfora por moralina"
    ]
  },
  {
    enunciado: "¿Qué revista española fue clave en la circulación de ideas vanguardistas?",
    correcta: "Revista de Occidente",
    incorrectas: [
      "El Censor",
      "La Ilustración de Madrid (siglo XIX temprano)"
    ]
  },
  {
    enunciado: "¿Qué obra de Lorca se asocia a la recepción surrealista en España?",
    correcta: "Poeta en Nueva York",
    incorrectas: [
      "Romancero gitano",
      "Campos de Castilla"
    ]
  },
  {
    enunciado: "¿Qué rasgo diferencia la recepción española de las vanguardias?",
    correcta: "La hibridación con tradición barroca y elementos populares",
    incorrectas: [
      "El rechazo absoluto de cualquier tradición previa",
      "La prohibición del humor y el juego verbal"
    ]
  },
  {
    enunciado: "¿Qué relación existió entre vanguardias y nuevas artes?",
    correcta: "Interacción con cine, diseño, tipografía y artes plásticas",
    incorrectas: [
      "Aislamiento estricto de cualquier otra disciplina",
      "Dependencia exclusiva del teatro clásico"
    ]
  },
  {
    enunciado: "¿Quién escribió el 'Manifiesto surrealista' en 1924?",
    correcta: "André Breton",
    incorrectas: [
      "Paul Éluard",
      "Vicente Aleixandre"
    ]
  },
  {
    enunciado: "¿Qué consigna futurista es recurrente?",
    correcta: "El culto a la velocidad, la máquina y lo urbano",
    incorrectas: [
      "El retorno bucólico a lo pastoril",
      "La nostalgia medievalizante"
    ]
  },
  {
    enunciado: "¿Qué propuesta tipográfica practicó el cubismo literario?",
    correcta: "El poema visual y la disposición espacial del texto",
    incorrectas: [
      "La caligrafía gótica obligatoria",
      "La invisibilización del blanco de página"
    ]
  },
  {
    enunciado: "En el contexto español, ¿quién defendió el creacionismo además de Huidobro?",
    correcta: "Gerardo Diego",
    incorrectas: [
      "Azorín",
      "Pío Baroja"
    ]
  },
  {
    enunciado: "¿Qué finalidad tenía el gesto dadaísta?",
    correcta: "Demoler convenciones para revelar el sinsentido de la cultura burguesa",
    incorrectas: [
      "Reafirmar la solemnidad académica",
      "Imponer moral religiosa en el verso"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las greguerías de Gómez de la Serna?",
    correcta: "La combinación de humor y metáfora fulgurante en forma breve",
    incorrectas: [
      "El verso alejandrino narrativo",
      "La prosificación didáctica sin imágenes"
    ]
  },
  {
    enunciado: "¿Qué movimiento español buscó síntesis y metáfora pura frente al modernismo tardío?",
    correcta: "El ultraísmo",
    incorrectas: [
      "El costumbrismo",
      "El realismo decimonónico"
    ]
  },
  {
    enunciado: "¿Qué autor hispánico formuló 'el poeta como pequeño dios'?",
    correcta: "Vicente Huidobro",
    incorrectas: [
      "Rubén Darío",
      "Antonio Machado"
    ]
  },
  {
    enunciado: "¿Cuál fue un efecto común de las vanguardias en el lenguaje poético?",
    correcta: "La intensificación de la metáfora y la ruptura de la narratividad tradicional",
    incorrectas: [
      "La renuncia a toda imagen",
      "La vuelta al silogismo versificado"
    ]
  },
  {
    enunciado: "¿Qué relación mantuvo la Generación del 27 con la vanguardia?",
    correcta: "Integró innovación con clasicismo, renovando la lírica española",
    incorrectas: [
      "Rechazó toda influencia vanguardista",
      "Sustituyó el verso por prosa científica"
    ]
  },
  {
    enunciado: "¿Qué revista española acogió textos y debates de vanguardia en los años 20?",
    correcta: "La Gaceta Literaria",
    incorrectas: [
      "El Español de 1835",
      "El Museo Universal (costumbrista)"
    ]
  },
  {
    enunciado: "¿Qué elemento psicológico nutre al surrealismo?",
    correcta: "El inconsciente freudiano y los sueños",
    incorrectas: [
      "La lógica escolástica",
      "El silogismo jurídico"
    ]
  },
  {
    enunciado: "¿Qué rasgo diferencia a España respecto al dadaísmo y futurismo centrales?",
    correcta: "Menor radicalidad destructiva y mayor diálogo con tradiciones propias",
    incorrectas: [
      "El aislamiento total de Europa",
      "La prohibición de manifiestos"
    ]
  },
  {
    enunciado: "¿Qué práctica formal comparten varias vanguardias en poesía?",
    correcta: "El poema visual y la disposición gráfica experimental",
    incorrectas: [
      "La rima consonante única en todos los versos",
      "El verso isométrico sin variaciones acentuales"
    ]
  },
  {
    enunciado: "¿Qué aportó Apollinaire a la experimentación poética?",
    correcta: "Caligramas que integran texto e imagen",
    incorrectas: [
      "Un tratado de métrica clásica",
      "Una poética realista antimetafórica"
    ]
  },
  {
    enunciado: "¿Con qué actitud se vincula el ultraísmo frente al modernismo ornamental?",
    correcta: "Economía expresiva y concentración de imágenes",
    incorrectas: [
      "Hipérbole retórica y ampulosidad",
      "Prosificación didáctica"
    ]
  },
  {
    enunciado: "¿Qué aporte distintivo deja la vanguardia en la poesía española?",
    correcta: "Una síntesis entre innovación formal y tradición barroca/popular",
    incorrectas: [
      "La eliminación de toda memoria cultural",
      "La imposición del teatro autosacramental"
    ]
  },
  {
    enunciado: "¿Qué obra crítica sistematiza pronto las vanguardias desde España?",
    correcta: "‘Literaturas europeas de vanguardia’ de Guillermo de Torre (1925)",
    incorrectas: [
      "‘Teoría de la novela’ de Lukács (no española)",
      "‘La deshumanización del arte’ de Ortega (ensayo distinto)"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre vanguardia y tecnología moderna?",
    correcta: "La asimilación de ritmos urbanos, máquinas, publicidad y cine",
    incorrectas: [
      "El rechazo de cualquier artefacto moderno",
      "La exclusión de la ciudad como tema"
    ]
  },
  {
    enunciado: "¿Qué poeta del 27 practicó creacionismo y clasicismo a la vez?",
    correcta: "Gerardo Diego",
    incorrectas: [
      "Miguel Hernández",
      "Leopoldo Alas 'Clarín'"
    ]
  },
  {
    enunciado: "¿Qué actitud vital acompaña a menudo a las vanguardias?",
    correcta: "Provocación estética y voluntad de escándalo contra lo establecido",
    incorrectas: [
      "Conformismo académico",
      "Neutralidad programática"
    ]
  },
  {
    enunciado: "¿Qué efecto tuvo la vanguardia sobre el concepto de autor?",
    correcta: "Desplazó la noción de genialidad romántica hacia prácticas colectivas y experimentales",
    incorrectas: [
      "Restableció la autoría aristocrática inapelable",
      "Sustituyó al autor por un censor oficial"
    ]
  },
  {
    enunciado: "¿Qué relación sintetiza mejor Europa–España en vanguardias?",
    correcta: "Recepción creativa: diálogo, adaptación y cruce con tradiciones hispánicas",
    incorrectas: [
      "Imitación servil sin aportes propios",
      "Aislamiento peninsular sin contactos"
    ]
  },
  {
    enunciado: "En conjunto, ¿qué transformaron las vanguardias en la literatura?",
    correcta: "La función del lenguaje poético y los límites del texto",
    incorrectas: [
      "La gramática normativa del idioma",
      "El soporte libro como única vía de publicación"
    ]
  }
];
