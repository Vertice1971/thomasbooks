// temarios/31-la-reproduccion-asexual-y-la-reproduccion-sexual-genetica-del-sexo-gametogenesis-fecundacion-y-desarrollo-embrionario-en-metazoos-ciclos-biologicos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define mejor la reproducción asexual en términos genéticos?",
    correcta: "Descendencia clonal con variación generada principalmente por mutaciones",
    incorrectas: [
      "Descendencia con recombinación meiótica obligatoria",
      "Descendencia siempre híbrida entre dos especies"
    ]
  },
  {
    enunciado: "¿Qué modalidad asexual consiste en la división en dos individuos equivalentes tras duplicación del material genético?",
    correcta: "Bipartición",
    incorrectas: [
      "Gemación",
      "Fragmentación"
    ]
  },
  {
    enunciado: "La gemación en animales, típica de hidras y algunos cnidarios, se caracteriza por:",
    correcta: "Formación de un brote que puede separarse o permanecer unido al progenitor",
    incorrectas: [
      "Producción de esporas haploides por meiosis",
      "Fusión de dos individuos para formar uno diploide"
    ]
  },
  {
    enunciado: "La fragmentación con alta capacidad de regeneración es común en:",
    correcta: "Planarias y equinodermos",
    incorrectas: [
      "Aves y mamíferos",
      "Briofitas durante la esporogénesis"
    ]
  },
  {
    enunciado: "¿Qué afirmación describe la partenogénesis?",
    correcta: "Desarrollo de un embrión a partir de un óvulo no fecundado",
    incorrectas: [
      "Fecundación de dos óvulos entre sí",
      "Producción de gametos sin meiosis alguna"
    ]
  },
  {
    enunciado: "En reproducción sexual, la variabilidad genética se origina principalmente por:",
    correcta: "Entrecruzamiento meiótico y segregación independiente",
    incorrectas: [
      "Duplicación del ADN en fase S sin control",
      "Metabolismo oxidativo de las gónadas"
    ]
  },
  {
    enunciado: "La anisogamia se refiere a:",
    correcta: "Fusión de gametos de distinto tamaño y forma",
    incorrectas: [
      "Fusión de gametos idénticos morfológicamente",
      "Fecundación interna exclusiva en amniotas"
    ]
  },
  {
    enunciado: "¿Qué sistema de determinación sexual es propio de mamíferos placentarios?",
    correcta: "XX/XY",
    incorrectas: [
      "ZZ/ZW",
      "Haplodiploidía obligada"
    ]
  },
  {
    enunciado: "En aves, el sexo homogamético es:",
    correcta: "Macho (ZZ)",
    incorrectas: [
      "Hembra (ZZ)",
      "Macho (ZW)"
    ]
  },
  {
    enunciado: "¿Qué gen inicia la diferenciación testicular en el embrión de mamífero?",
    correcta: "SRY",
    incorrectas: [
      "WNT4",
      "FOXL2"
    ]
  },
  {
    enunciado: "La compensación de dosis en mamíferos euterios ocurre mediante:",
    correcta: "Inactivación de uno de los cromosomas X (corpúsculo de Barr)",
    incorrectas: [
      "Duplicación del cromosoma Y en machos",
      "Eliminación del X paterno en ambos sexos"
    ]
  },
  {
    enunciado: "La determinación sexual dependiente de temperatura es típica de:",
    correcta: "Cocodrilos y algunas tortugas",
    incorrectas: [
      "Todos los mamíferos",
      "Todos los anélidos"
    ]
  },
  {
    enunciado: "En Hymenoptera (abejas, avispas), la haplodiploidía implica que:",
    correcta: "Machos son haploides (de óvulos no fecundados) y hembras diploides",
    incorrectas: [
      "Hembras son haploides y machos diploides",
      "Ambos sexos son siempre diploides"
    ]
  },
  {
    enunciado: "¿Dónde se localiza la espermatogénesis en vertebrados?",
    correcta: "En los túbulos seminíferos del testículo",
    incorrectas: [
      "En el epidídimo exclusivamente",
      "En la vesícula seminal"
    ]
  },
  {
    enunciado: "El orden correcto en la línea germinal masculina es:",
    correcta: "Espermatogonia → espermatocito primario → espermatocito secundario → espermátida → espermatozoide",
    incorrectas: [
      "Espermatocito primario → espermatogonia → espermátida → espermatozoide",
      "Espermatozoide → espermátida → espermatocito → espermatogonia"
    ]
  },
  {
    enunciado: "La espermiogénesis es el proceso por el que:",
    correcta: "Las espermátidas se remodelan a espermatozoides maduros",
    incorrectas: [
      "Las espermatogonias inician la meiosis",
      "Los espermatozoides se capacitan en el útero"
    ]
  },
  {
    enunciado: "En la ovogénesis humana, el ovocito I permanece detenido durante años en:",
    correcta: "Diploteno de la profase I (dictioteno)",
    incorrectas: [
      "Metafase I",
      "Anafase II"
    ]
  },
  {
    enunciado: "La ovulación en mamíferos libera:",
    correcta: "Un ovocito secundario detenido en metafase II",
    incorrectas: [
      "Un ovocito primario en leptoteno",
      "Una ovogonia mitótica"
    ]
  },
  {
    enunciado: "¿Qué células sostienen la espermatogénesis y forman la barrera hematotesticular?",
    correcta: "Células de Sertoli",
    incorrectas: [
      "Células de Leydig",
      "Células de la granulosa"
    ]
  },
  {
    enunciado: "¿Qué células producen testosterona en el testículo?",
    correcta: "Células de Leydig",
    incorrectas: [
      "Células de Sertoli",
      "Células de la teca"
    ]
  },
  {
    enunciado: "En el ovario, la síntesis de estrógenos depende de la cooperación entre:",
    correcta: "Teca (andrógenos) y granulosa (aromatización)",
    incorrectas: [
      "Granulosa (andrógenos) y teca (aromatización)",
      "Miometrio y endometrio"
    ]
  },
  {
    enunciado: "La capacitación espermática en mamíferos implica:",
    correcta: "Cambios en membrana y motilidad que permiten la reacción acrosómica",
    incorrectas: [
      "Duplicación del ADN del espermatozoide",
      "Activación del pronúcleo femenino"
    ]
  },
  {
    enunciado: "El reconocimiento inicial espermatozoide–ovocito en mamíferos involucra proteínas de la zona pelúcida, principalmente:",
    correcta: "ZP2/ZP3",
    incorrectas: [
      "BMP4/SHH",
      "Collágeno I/III"
    ]
  },
  {
    enunciado: "El bloqueo lento de la polispermia se debe a:",
    correcta: "Reacción cortical y modificación de la envoltura (zona) del ovocito",
    incorrectas: [
      "Despolarización sostenida de la membrana sin exocitosis",
      "Entrada masiva de sodio al espermatozoide"
    ]
  },
  {
    enunciado: "Tras la fecundación en mamíferos, el cigoto se divide por:",
    correcta: "Segmentación holoblástica",
    incorrectas: [
      "Segmentación discoidal meroblástica",
      "Segmentación superficial típica de insectos"
    ]
  },
  {
    enunciado: "La blastulación en mamíferos produce un blastocisto con:",
    correcta: "Masa celular interna y trofoblasto",
    incorrectas: [
      "Saco vitelino como único tejido embrionario",
      "Somitas completamente formados"
    ]
  },
  {
    enunciado: "La gastrulación genera las capas germinales:",
    correcta: "Ectodermo, mesodermo y endodermo",
    incorrectas: [
      "Epidermis, dermis y hipodermis",
      "Amnios, corion y alantoides"
    ]
  },
  {
    enunciado: "En amniotas, el amnios cumple principalmente la función de:",
    correcta: "Proteger al embrión en un medio líquido",
    incorrectas: [
      "Intercambio gaseoso principal",
      "Almacenamiento de desechos nitrogenados exclusivamente"
    ]
  },
  {
    enunciado: "La placenta euteria permite:",
    correcta: "Intercambio selectivo de nutrientes, gases y desechos entre madre y feto",
    incorrectas: [
      "Meiosis fetal en el cordón umbilical",
      "Paso directo e indiscriminado de células inmunes maternas"
    ]
  },
  {
    enunciado: "El ciclo biológico típico de animales se describe como:",
    correcta: "Diplonte: el organismo es diploide y la meiosis forma gametos haploides",
    incorrectas: [
      "Haplonte: el organismo es haploide y la meiosis forma gametos diploides",
      "Haplodiplonte con gametofito dominante"
    ]
  },
  {
    enunciado: "En muchas algas y plantas, el ciclo haplodiplonte se caracteriza por:",
    correcta: "Alternancia de generaciones entre esporofito diploide y gametofito haploide",
    incorrectas: [
      "Cigoto haploide y adulto diploide sin meiosis",
      "Ausencia total de fase haploide"
    ]
  },
  {
    enunciado: "La metagénesis en cnidarios implica:",
    correcta: "Alternancia entre pólipo asexual y medusa sexual",
    incorrectas: [
      "Alternancia entre larva y esporofito",
      "Alternancia entre gametofito masculino y femenino simultáneos"
    ]
  },
  {
    enunciado: "La hipótesis de la Reina Roja sugiere que la reproducción sexual:",
    correcta: "Favorece la adaptación continua frente a patógenos y cambios ambientales",
    incorrectas: [
      "Reduce la variabilidad genética frente a la asexual",
      "Elimina el coste de producir machos"
    ]
  },
  {
    enunciado: "Una ventaja inmediata de la reproducción asexual en ambientes estables es:",
    correcta: "Alta tasa de multiplicación sin necesidad de pareja",
    incorrectas: [
      "Mayor resistencia universal a patógenos emergentes",
      "Incremento automático del tamaño corporal"
    ]
  },
  {
    enunciado: "¿Cuál es el resultado directo de la meiosis en la línea germinal?",
    correcta: "Reducción de la ploidía y creación de gametos con combinaciones génicas nuevas",
    incorrectas: [
      "Duplicación de la ploidía sin recombinación",
      "Formación de clones somáticos"
    ]
  },
  {
    enunciado: "Durante la neuralación en vertebrados, el ectodermo forma:",
    correcta: "El tubo neural tras el cierre de los pliegues neurales",
    incorrectas: [
      "El notocordio directamente",
      "El miocardio ventricular"
    ]
  },
  {
    enunciado: "¿Qué evento marca la activación del ovocito en muchos animales?",
    correcta: "Un incremento transitorio de Ca²⁺ citosólico tras la fusión de gametos",
    incorrectas: [
      "Entrada masiva de K⁺ al espermatozoide",
      "Salida completa del contenido nuclear del ovocito"
    ]
  },
  {
    enunciado: "En insectos con desarrollo indirecto, la metamorfosis completa (holometábola) incluye:",
    correcta: "Etapas de larva, pupa y adulto",
    incorrectas: [
      "Ninfas con mudas sin fase pupal",
      "Ausencia de segmentación embrionaria"
    ]
  },
  {
    enunciado: "En mamíferos, ¿qué hormona desencadena la ovulación?",
    correcta: "Un pico de LH",
    incorrectas: [
      "Descenso brusco de FSH",
      "Aumento sostenido de prolactina"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes afirmaciones sobre fecundación interna vs. externa es correcta?",
    correcta: "La fecundación interna protege a los gametos y suele asociarse a menor número de gametos producidos",
    incorrectas: [
      "La fecundación externa requiere siempre viviparidad",
      "La fecundación interna impide cualquier selección gamética"
    ]
  }
];
