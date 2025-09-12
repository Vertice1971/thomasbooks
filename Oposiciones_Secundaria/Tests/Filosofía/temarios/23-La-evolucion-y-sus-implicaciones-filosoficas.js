// temarios/23-La-evolucion-y-sus-implicaciones-filosoficas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué significa etimológicamente el término evolución?",
    correcta: "Remite a la idea de desplegar o desenrollar, pasando de un sentido finalista a un proceso científico",
    incorrectas: [
      "Designa exclusivamente la repetición cíclica de fenómenos cósmicos",
      "Se refiere únicamente a cambios culturales en la historia humana"
    ]
  },
  {
    enunciado: "¿Qué distingue el transformismo de Lamarck respecto al darwinismo?",
    correcta: "Sostiene la herencia de caracteres adquiridos y una tendencia al perfeccionamiento",
    incorrectas: [
      "Defiende la selección natural como motor del cambio",
      "Explica la evolución solo por mutaciones genéticas"
    ]
  },
  {
    enunciado: "¿Cuál es la aportación central de Darwin en su obra El origen de las especies?",
    correcta: "Formula la selección natural como mecanismo de evolución biológica",
    incorrectas: [
      "Sostiene la inmutabilidad de las especies",
      "Niega la existencia de variaciones en la naturaleza"
    ]
  },
  {
    enunciado: "¿Qué influencia ejerció Malthus en Darwin?",
    correcta: "La idea de la lucha por la existencia derivada de la presión poblacional",
    incorrectas: [
      "La noción de especies creadas de forma instantánea",
      "La teoría de la generación espontánea"
    ]
  },
  {
    enunciado: "¿Qué papel tuvo Lyell en la formación de Darwin?",
    correcta: "Su geología uniformista mostró la acción de procesos lentos y acumulativos",
    incorrectas: [
      "Propuso que las especies se crean de manera súbita",
      "Negó la posibilidad de cambios en la corteza terrestre"
    ]
  },
  {
    enunciado: "¿Qué concepto popularizó Herbert Spencer en relación con la evolución?",
    correcta: "El de evolución como progreso universal y la frase 'supervivencia del más apto'",
    incorrectas: [
      "La idea de creación instantánea de las especies",
      "La tesis de que la naturaleza está regida por un orden fijo e inmutable"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la síntesis neodarwinista?",
    correcta: "Integra selección natural, genética mendeliana, paleontología y biología molecular",
    incorrectas: [
      "Rechaza la genética mendeliana como irrelevante",
      "Sostiene que las especies evolucionan por saltos sin continuidad"
    ]
  },
  {
    enunciado: "¿Qué significa el equilibrio puntuado de Gould y Eldredge?",
    correcta: "Episodios de estabilidad evolutiva interrumpidos por rápidos cambios",
    incorrectas: [
      "La transformación lenta y continua sin interrupciones",
      "La imposibilidad de registrar cambios en los fósiles"
    ]
  },
  {
    enunciado: "¿Qué aportó el redescubrimiento de Mendel a la teoría de la evolución?",
    correcta: "Proporcionó la base genética de la herencia para integrar con el darwinismo",
    incorrectas: [
      "Negó la existencia de mutaciones y variabilidad",
      "Defendió el fijismo de las especies como dogma"
    ]
  },
  {
    enunciado: "¿Qué supuso el debate en Oxford de 1860 entre Huxley y Wilberforce?",
    correcta: "Un enfrentamiento público sobre la validez científica y religiosa del darwinismo",
    incorrectas: [
      "Una confirmación unánime de la teoría de Darwin por las iglesias",
      "Un rechazo generalizado de la biología como ciencia"
    ]
  },
  {
    enunciado: "¿Qué implicación antropológica tiene la teoría de la evolución?",
    correcta: "Desplaza al ser humano de una posición privilegiada a un proceso natural común",
    incorrectas: [
      "Confirma al hombre como especie separada de lo natural",
      "Sostiene que la humanidad no tiene relación con otros seres vivos"
    ]
  },
  {
    enunciado: "¿Qué visión del mundo se ve alterada por la teoría de la evolución?",
    correcta: "El antropocentrismo clásico y las concepciones teleológicas rígidas",
    incorrectas: [
      "El relativismo cultural como único marco de análisis",
      "El mecanicismo cartesiano en física"
    ]
  },
  {
    enunciado: "¿Qué relación establece el darwinismo con la noción de azar?",
    correcta: "Introduce la contingencia en la evolución mediante mutaciones y selección",
    incorrectas: [
      "Afirma un plan teleológico fijo en la naturaleza",
      "Niega toda variación genética en los organismos"
    ]
  },
  {
    enunciado: "¿Qué efecto tuvo la teoría de la evolución en el ámbito religioso?",
    correcta: "Generó tensiones entre creacionismo y aceptación científica de la evolución",
    incorrectas: [
      "Fue adoptada de inmediato por todas las confesiones",
      "Demostró empíricamente la literalidad de la Biblia"
    ]
  },
  {
    enunciado: "¿Qué representa el darwinismo social de Spencer?",
    correcta: "La aplicación ideológica de la selección natural a sociedades humanas",
    incorrectas: [
      "El rechazo a cualquier interpretación política de la biología",
      "Una crítica radical a toda desigualdad social"
    ]
  },
  {
    enunciado: "¿Qué crítica filosófica planteó Nietzsche frente a la visión evolucionista?",
    correcta: "La desconfianza ante una lectura progresista que diluye la voluntad de poder",
    incorrectas: [
      "La defensa de la creación fija de las especies",
      "La afirmación de que el ser humano es superior por designio divino"
    ]
  },
  {
    enunciado: "¿Qué postura adoptó Engels respecto a la evolución?",
    correcta: "La interpretó como confirmación de la dialéctica de la naturaleza",
    incorrectas: [
      "Rechazó la evolución como noción burguesa",
      "Negó cualquier valor a la ciencia natural en la filosofía"
    ]
  },
  {
    enunciado: "¿Qué crítica se hace al darwinismo social?",
    correcta: "Que justificó desigualdades y políticas racistas con un mal uso de la biología",
    incorrectas: [
      "Que eliminó toda investigación antropológica",
      "Que negó el papel de la competencia en la naturaleza"
    ]
  },
  {
    enunciado: "¿Qué enfoque plantea la sociobiología contemporánea?",
    correcta: "Explicar conductas humanas como estrategias adaptativas evolutivas",
    incorrectas: [
      "Reducir la biología a creencias religiosas",
      "Negar la base natural de cualquier comportamiento"
    ]
  },
  {
    enunciado: "¿Qué problemas científicos se señalan como retos de la teoría evolucionista?",
    correcta: "Lagunas en el registro fósil y mecanismos exactos de cambio genético",
    incorrectas: [
      "La falta de fósiles de cualquier especie animal",
      "La ausencia de estudios sobre genética y herencia"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la epigenética en debates actuales sobre evolución?",
    correcta: "Explora cómo factores ambientales influyen en la expresión génica heredable",
    incorrectas: [
      "Reemplaza la genética y elimina la selección natural",
      "Niega la influencia de mutaciones en la evolución"
    ]
  },
  {
    enunciado: "¿Qué tensión persiste en la filosofía de la biología?",
    correcta: "Entre reduccionismo genético y concepciones holistas o emergentistas",
    incorrectas: [
      "Entre empirismo y racionalismo en la lógica formal",
      "Entre realismo y nominalismo en la metafísica medieval"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre azar y necesidad en el contexto evolutivo?",
    correcta: "El azar aporta variaciones y la necesidad fija las que favorecen la adaptación",
    incorrectas: [
      "Ambos son sinónimos que significan lo mismo",
      "Ninguno influye en el proceso evolutivo"
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo el debate fijismo vs evolucionismo?",
    correcta: "Representó la transición de un mundo de especies inmutables a uno dinámico",
    incorrectas: [
      "Confirmó el carácter inmutable de todas las especies",
      "Negó la posibilidad de un universo cambiante"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa el ser humano en la teoría evolutiva?",
    correcta: "Es resultado de un proceso natural y comparte ancestros con otros primates",
    incorrectas: [
      "Es una excepción absoluta sin relación con la biología",
      "Es producto de un acto instantáneo sin antecedentes"
    ]
  },
  {
    enunciado: "¿Qué valor ético plantea la teoría de la evolución?",
    correcta: "Obliga a repensar dignidad, libertad y responsabilidad humanas",
    incorrectas: [
      "Elimina cualquier preocupación moral en la sociedad",
      "Afirma que la ética se deriva de la geometría"
    ]
  },
  {
    enunciado: "¿Qué defiende la teoría del diseño inteligente frente a la evolución?",
    correcta: "Sostiene que ciertos rasgos complejos requieren una causa superior",
    incorrectas: [
      "Confirma la selección natural como mecanismo único",
      "Niega la existencia de cualquier debate religioso"
    ]
  },
  {
    enunciado: "¿Qué crítica cultural se hace al evolucionismo decimonónico?",
    correcta: "Que se confundió evolución biológica con progreso lineal de la historia",
    incorrectas: [
      "Que negó el papel de la biología en la naturaleza",
      "Que ignoró la existencia de procesos sociales"
    ]
  },
  {
    enunciado: "¿Qué relación establece el transhumanismo con la evolución?",
    correcta: "Plantea una posible autotransformación tecnológica de la especie",
    incorrectas: [
      "Rechaza toda aplicación tecnológica en biología",
      "Afirma que la evolución ha concluido definitivamente"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la evolución en el diálogo ciencia-religión?",
    correcta: "Es un punto de tensión y búsqueda de compatibilidad entre fe y ciencia",
    incorrectas: [
      "Demuestra empíricamente la literalidad de los textos sagrados",
      "Suprime cualquier posible diálogo filosófico"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre microevolución y macroevolución?",
    correcta: "La microevolución se refiere a cambios dentro de especies y la macro a la aparición de nuevas",
    incorrectas: [
      "Son términos idénticos que significan lo mismo",
      "La macroevolución niega la existencia de mutaciones"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñan los fósiles en la teoría evolutiva?",
    correcta: "Aportan evidencias de formas intermedias y cambios a lo largo del tiempo",
    incorrectas: [
      "Refutan la existencia de cualquier cambio en las especies",
      "Son irrelevantes para la explicación biológica"
    ]
  },
  {
    enunciado: "¿Qué representa el concepto de ancestro común en evolución?",
    correcta: "Que todas las especies actuales descienden de formas pasadas compartidas",
    incorrectas: [
      "Que cada especie se originó de manera independiente",
      "Que los organismos actuales no tienen relación histórica"
    ]
  },
  {
    enunciado: "¿Qué función cumple la teoría neutralista de Kimura?",
    correcta: "Sostiene que muchas mutaciones son neutras y se fijan por deriva genética",
    incorrectas: [
      "Rechaza toda posibilidad de mutaciones neutras",
      "Afirma que toda variación responde a selección natural"
    ]
  },
  {
    enunciado: "¿Qué impacto filosófico tuvo la evolución en la noción de teleología?",
    correcta: "Debilitó las visiones de finalidad rígida en la naturaleza",
    incorrectas: [
      "Confirmó un diseño finalista inmutable",
      "Negó la existencia de procesos naturales"
    ]
  },
  {
    enunciado: "¿Qué importancia posee la evolución para la filosofía contemporánea?",
    correcta: "Es un paradigma que afecta a antropología, ética y metafísica",
    incorrectas: [
      "Es un asunto meramente técnico sin alcance filosófico",
      "Es un dogma religioso más que un debate científico"
    ]
  },
  {
    enunciado: "¿Qué conclusión general se obtiene sobre la teoría de la evolución?",
    correcta: "Es una revolución intelectual comparable al heliocentrismo, con impacto científico y cultural",
    incorrectas: [
      "Es una hipótesis menor sin relevancia filosófica",
      "Es un mito cultural sin base en la investigación"
    ]
  }
];
