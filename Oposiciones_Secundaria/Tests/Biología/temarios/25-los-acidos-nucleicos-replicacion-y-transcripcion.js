// temarios/25-acidos-nucleicos-replicacion-y-transcripcion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué enlace une los nucleótidos dentro de una cadena de ácido nucleico?",
    correcta: "Enlace fosfodiéster 3'→5'",
    incorrectas: [
      "Enlace peptídico",
      "Enlace glucosídico α(1→4)"
    ]
  },
  {
    enunciado: "¿Qué base aparece en el ARN y no en el ADN?",
    correcta: "Uracilo",
    incorrectas: [
      "Timina",
      "Citosina"
    ]
  },
  {
    enunciado: "En el ADN de doble hélice, ¿cuántos puentes de hidrógeno forman G y C?",
    correcta: "Tres",
    incorrectas: [
      "Dos",
      "Cuatro"
    ]
  },
  {
    enunciado: "¿Qué pentosa está presente en el ADN?",
    correcta: "Desoxirribosa",
    incorrectas: [
      "Ribosa",
      "Fructosa"
    ]
  },
  {
    enunciado: "El experimento de Meselson y Stahl demostró que la replicación del ADN es…",
    correcta: "Semiconservativa",
    incorrectas: [
      "Conservativa",
      "Dispersiva pura"
    ]
  },
  {
    enunciado: "La replicación del ADN avanza en dirección…",
    correcta: "5'→3' sobre la hebra naciente",
    incorrectas: [
      "3'→5' sobre la hebra naciente",
      "Ambas direcciones en la hebra naciente"
    ]
  },
  {
    enunciado: "¿Qué enzima desenrolla la doble hélice de ADN en la horquilla de replicación?",
    correcta: "Helicasa",
    incorrectas: [
      "Ligasa",
      "Girasas/Topoisomerasas exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué proteína evita el re-annealing de las hebras de ADN separadas?",
    correcta: "Proteína de unión a simple hebra (SSB)",
    incorrectas: [
      "Primasa",
      "Telomerasa"
    ]
  },
  {
    enunciado: "¿Qué enzima sintetiza los cebadores de ARN durante la replicación?",
    correcta: "Primasa",
    incorrectas: [
      "ADN polimerasa",
      "Ligasa"
    ]
  },
  {
    enunciado: "Los fragmentos de Okazaki se sintetizan en la…",
    correcta: "Hebra retardada",
    incorrectas: [
      "Hebra conductora",
      "Ambas hebras por igual"
    ]
  },
  {
    enunciado: "¿Qué función principal tiene la ADN ligasa en replicación?",
    correcta: "Unir los extremos 3'OH y 5'P de fragmentos contiguos",
    incorrectas: [
      "Eliminar cebadores de ARN",
      "Introducir superenrollamiento negativo"
    ]
  },
  {
    enunciado: "¿Qué actividad permite la corrección de pruebas (proofreading) en muchas ADN polimerasas?",
    correcta: "Exonucleasa 3'→5'",
    incorrectas: [
      "Exonucleasa 5'→3' exclusivamente",
      "Endonucleasa inespecífica"
    ]
  },
  {
    enunciado: "En bacterias, la ADN polimerasa principal de elongación es…",
    correcta: "ADN polimerasa III",
    incorrectas: [
      "ADN polimerasa I",
      "ADN polimerasa δ"
    ]
  },
  {
    enunciado: "En eucariotas, la polimerasa que sintetiza la mayoría de la hebra retardada es…",
    correcta: "ADN polimerasa δ",
    incorrectas: [
      "ADN polimerasa α-primasa",
      "ADN polimerasa γ (mitocondrial)"
    ]
  },
  {
    enunciado: "¿Qué enzima resuelve la replicación de los extremos (telómeros) en eucariotas?",
    correcta: "Telomerasa",
    incorrectas: [
      "Topoisomerasa I",
      "RNasa H"
    ]
  },
  {
    enunciado: "Las topoisomerasas durante la replicación sirven para…",
    correcta: "Aliviar el superenrollamiento por delante de la horquilla",
    incorrectas: [
      "Estabilizar los cebadores de ARN",
      "Reconocer promotores"
    ]
  },
  {
    enunciado: "En eucariotas, ¿cómo se inicia la síntesis de ADN nuclear?",
    correcta: "Con un cebador hecho por el complejo ADN pol α–primasa",
    incorrectas: [
      "Con un cebador proteico como en adenovirus",
      "Sin necesidad de cebador"
    ]
  },
  {
    enunciado: "¿Qué suceso distingue la replicación eucariota de la procariota?",
    correcta: "Múltiples orígenes de replicación por cromosoma",
    incorrectas: [
      "Doble cadena con A–U",
      "Ausencia de fragmentos de Okazaki"
    ]
  },
  {
    enunciado: "La transcripción sintetiza ARN en dirección…",
    correcta: "5'→3' a partir de una hebra molde 3'→5'",
    incorrectas: [
      "3'→5' a partir de una hebra molde 5'→3'",
      "5'→3' usando nucleótidos desoxi exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué subunidad facilita el reconocimiento del promotor en la ARN polimerasa bacteriana?",
    correcta: "Factor σ (sigma)",
    incorrectas: [
      "Factor ρ (rho)",
      "TFIID (TBP) exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál es la función de la caja TATA en eucariotas?",
    correcta: "Elemento promotor reconocido por TBP en la iniciación por ARN pol II",
    incorrectas: [
      "Sitio de unión de la ADN ligasa",
      "Señal de terminación intrínseca"
    ]
  },
  {
    enunciado: "La ARN polimerasa II en eucariotas transcribe principalmente…",
    correcta: "Genes codificantes de proteínas (pre-ARNm)",
    incorrectas: [
      "rRNA 28S, 18S y 5.8S",
      "tRNA y 5S rRNA exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué modificación ocurre en el extremo 5' del pre-ARNm eucariota?",
    correcta: "Adición del cap 7-metilguanosina",
    incorrectas: [
      "Cola poli(A)",
      "Edición C→U en todas las transcripciones"
    ]
  },
  {
    enunciado: "El procesamiento del pre-ARNm eucariota incluye…",
    correcta: "Capping, splicing y poliadenilación",
    incorrectas: [
      "Metilación del ADN promotor",
      "Remoción de exones y conservación de intrones"
    ]
  },
  {
    enunciado: "El empalme (splicing) elimina…",
    correcta: "Intrones y une exones",
    incorrectas: [
      "Exones y une intrones",
      "Promotores y terminadores"
    ]
  },
  {
    enunciado: "En bacterias, la transcripción y la traducción suelen estar…",
    correcta: "Acopladas en el citoplasma",
    incorrectas: [
      "Separadas por la envoltura nuclear",
      "Restringidas a mitocondrias"
    ]
  },
  {
    enunciado: "La terminación de la transcripción en bacterias puede ser…",
    correcta: "ρ-dependiente o intrínseca (estructura horquilla + U)",
    incorrectas: [
      "Exclusivamente dependiente de cap 5'",
      "Por escisión de telómeros"
    ]
  },
  {
    enunciado: "Una diferencia clave entre ADN y ARN es que el ARN…",
    correcta: "Contiene ribosa y puede adoptar estructuras catalíticas",
    incorrectas: [
      "Contiene desoxirribosa y es siempre bicatenario",
      "No puede formar apareamientos de bases intramoleculares"
    ]
  },
  {
    enunciado: "¿Qué enunciado refleja el dogma central clásico?",
    correcta: "ADN → ARN → proteína",
    incorrectas: [
      "Proteína → ARN → ADN",
      "ARN → ADN → proteína en todos los casos"
    ]
  },
  {
    enunciado: "¿Qué enzima permite la síntesis de ADN a partir de ARN en retrovirus?",
    correcta: "Transcriptasa inversa",
    incorrectas: [
      "ARN polimerasa II",
      "RNasa P"
    ]
  },
  {
    enunciado: "La nucleosoma está formado por…",
    correcta: "ADN enrollado alrededor de un octámero de histonas",
    incorrectas: [
      "ARNr y proteínas ribosomales",
      "ADN unido a SSB"
    ]
  },
  {
    enunciado: "La metilación del ADN en eucariotas suele asociarse con…",
    correcta: "Represión de la transcripción",
    incorrectas: [
      "Activación asegurada de la transcripción",
      "Eliminación de telómeros"
    ]
  },
  {
    enunciado: "¿Qué polimerasa replica el ADN mitocondrial en eucariotas?",
    correcta: "ADN polimerasa γ",
    incorrectas: [
      "ADN polimerasa ε",
      "ARN polimerasa I"
    ]
  },
  {
    enunciado: "La RNasa H durante la replicación nuclear eucariota…",
    correcta: "Elimina los cebadores de ARN",
    incorrectas: [
      "Añade el cap 5'",
      "Sella muescas fosfodiéster"
    ]
  },
  {
    enunciado: "El origen de replicación en bacterias como E. coli se denomina…",
    correcta: "oriC",
    incorrectas: [
      "ARS",
      "TATA box"
    ]
  },
  {
    enunciado: "En eucariotas, las secuencias ARS están relacionadas con…",
    correcta: "Regiones de inicio de replicación (levaduras)",
    incorrectas: [
      "Sitios de unión del ribosoma",
      "Señales de poliadenilación"
    ]
  },
  {
    enunciado: "La caja -10 y -35 en bacterias son…",
    correcta: "Elementos del promotor reconocidos por σ",
    incorrectas: [
      "Sitios de terminación",
      "Centromeros de cromosomas circulares"
    ]
  },
  {
    enunciado: "¿Qué característica del ADN facilita su copia fiel durante la replicación?",
    correcta: "Complementariedad específica de bases",
    incorrectas: [
      "Ausencia de apareamiento de bases",
      "Ribosa en su pentosa"
    ]
  },
  {
    enunciado: "La poliadenilación del pre-ARNm eucariota ocurre en el extremo…",
    correcta: "3', añadiendo una cola poli(A)",
    incorrectas: [
      "5', sustituyendo el cap",
      "Interno, entre exones"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes NO es una ARN polimerasa nuclear eucariota?",
    correcta: "ARN polimerasa γ",
    incorrectas: [
      "ARN polimerasa I",
      "ARN polimerasa III"
    ]
  },
  {
    enunciado: "La edición de ARN consiste en…",
    correcta: "Modificaciones del contenido de bases del transcrito tras la transcripción",
    incorrectas: [
      "Metilación del ADN promotor",
      "Unión de fragmentos de Okazaki"
    ]
  }
];
