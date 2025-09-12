// temarios/35-Conflicto-y-cambio-social-factores-y-tipos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por conflicto social?",
    correcta: "Un desacuerdo o enfrentamiento entre ideas, principios, grupos o personas",
    incorrectas: [
      "Una desviación individual de la norma social",
      "Un estado de equilibrio perfecto en la sociedad"
    ]
  },
  {
    enunciado: "¿Cómo distingue la sociología entre conflicto abierto y conflicto latente?",
    correcta: "El abierto es visible y público, el latente permanece subyacente",
    incorrectas: [
      "El abierto pertenece a sociedades modernas y el latente a tradicionales",
      "El abierto siempre es violento mientras que el latente es pacífico"
    ]
  },
  {
    enunciado: "¿Qué afirma Platón sobre el conflicto en la República?",
    correcta: "Lo considera un desorden frente al ideal de armonía de la polis",
    incorrectas: [
      "Lo ve como motor inevitable de la vida política",
      "Lo interpreta como manifestación de la justicia distributiva"
    ]
  },
  {
    enunciado: "¿Cómo concibe Aristóteles el conflicto en la Política?",
    correcta: "Reconoce la stásis como riesgo y propone la constitución mixta para equilibrarlo",
    incorrectas: [
      "Afirma que el conflicto es imposible en una polis virtuosa",
      "Sostiene que todo conflicto se resuelve mediante la guerra"
    ]
  },
  {
    enunciado: "¿Qué papel otorga Hobbes al conflicto en el estado de naturaleza?",
    correcta: "Lo identifica con una guerra de todos contra todos superada por el contrato social",
    incorrectas: [
      "Lo considera un factor positivo para la cooperación espontánea",
      "Lo define como un mero desacuerdo moral sin consecuencias políticas"
    ]
  },
  {
    enunciado: "¿Qué origen del conflicto señala Rousseau en su Discurso sobre la desigualdad?",
    correcta: "La aparición de la propiedad privada",
    incorrectas: [
      "La falta de instituciones políticas fuertes",
      "La imposibilidad de comunicación entre generaciones"
    ]
  },
  {
    enunciado: "¿Qué significa la dialéctica del amo y el esclavo en Hegel?",
    correcta: "El conflicto es motor de reconocimiento y progreso histórico",
    incorrectas: [
      "El conflicto es un accidente pasajero en la historia",
      "El conflicto solo existe en la esfera económica"
    ]
  },
  {
    enunciado: "¿Cuál es el motor del cambio histórico para Marx?",
    correcta: "El conflicto de clases entre explotadores y explotados",
    incorrectas: [
      "La acumulación cultural pacífica",
      "El consenso entre instituciones religiosas"
    ]
  },
  {
    enunciado: "¿Cómo interpreta Durkheim el conflicto social?",
    correcta: "Lo entiende como expresión de anomia o desajuste en la sociedad",
    incorrectas: [
      "Como fundamento inevitable de la cohesión",
      "Como un fenómeno que carece de interés científico"
    ]
  },
  {
    enunciado: "¿Qué papel tiene el conflicto en Weber?",
    correcta: "Se relaciona con la lucha por el poder, el prestigio y la legitimidad",
    incorrectas: [
      "Es una desviación que debe eliminarse",
      "Solo surge por desigualdad económica"
    ]
  },
  {
    enunciado: "¿Qué destaca Georg Simmel sobre el conflicto?",
    correcta: "Es una forma social que puede reforzar la integración de los grupos",
    incorrectas: [
      "Es un residuo irracional de la historia",
      "Es incompatible con el orden social"
    ]
  },
  {
    enunciado: "¿Qué sostiene Parsons en su teoría funcionalista?",
    correcta: "El conflicto es anormal, transitorio y la sociedad se basa en el consenso",
    incorrectas: [
      "El conflicto es la fuerza central de todo sistema social",
      "El conflicto es irrelevante para el análisis sociológico"
    ]
  },
  {
    enunciado: "¿Qué dice Dahrendorf sobre el conflicto?",
    correcta: "Es permanente en las sociedades industriales y ligado a la autoridad",
    incorrectas: [
      "Es un error metodológico de la sociología",
      "Se limita a las sociedades precapitalistas"
    ]
  },
  {
    enunciado: "¿Qué función positiva del conflicto subraya Coser?",
    correcta: "Delimita grupos, refuerza la cohesión y previene la osificación social",
    incorrectas: [
      "Provoca siempre desintegración social",
      "Elimina toda forma de solidaridad grupal"
    ]
  },
  {
    enunciado: "¿Cuál es un factor causal central del conflicto social según Marx?",
    correcta: "La distribución desigual de recursos materiales",
    incorrectas: [
      "Las diferencias individuales de personalidad",
      "El exceso de cohesión comunitaria"
    ]
  },
  {
    enunciado: "¿Qué destaca Weber como factor de conflicto además de la economía?",
    correcta: "El poder político y el prestigio social",
    incorrectas: [
      "El azar y la suerte en la vida cotidiana",
      "La biología como determinante absoluto"
    ]
  },
  {
    enunciado: "¿Qué papel juegan las diferencias culturales en el conflicto social?",
    correcta: "Pueden generar choques de identidad y luchas por reconocimiento",
    incorrectas: [
      "Garantizan siempre la integración social",
      "Son irrelevantes en sociedades modernas"
    ]
  },
  {
    enunciado: "¿Qué impacto tienen los cambios sociales acelerados en el conflicto?",
    correcta: "Aumentan tensiones al modificar valores y estructuras rápidamente",
    incorrectas: [
      "Eliminan los conflictos al crear nuevas oportunidades",
      "No tienen efectos en las dinámicas sociales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al conflicto de clases?",
    correcta: "El antagonismo entre grupos socioeconómicos diferenciados",
    incorrectas: [
      "La disputa entre individuos aislados",
      "El simple desacuerdo cultural entre generaciones"
    ]
  },
  {
    enunciado: "¿Qué define al conflicto político?",
    correcta: "La lucha por el poder y el control del Estado",
    incorrectas: [
      "La competencia entre artistas por prestigio",
      "El desacuerdo en la vida privada familiar"
    ]
  },
  {
    enunciado: "¿Qué distingue al conflicto generacional?",
    correcta: "Las divergencias de valores y conductas entre jóvenes y adultos",
    incorrectas: [
      "La lucha por recursos materiales entre empresas",
      "La pugna entre Estados por fronteras"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los conflictos étnicos y culturales?",
    correcta: "Los choques derivados de identidades colectivas y demandas de reconocimiento",
    incorrectas: [
      "La disputa interna en una organización empresarial",
      "El desacuerdo entre teorías científicas"
    ]
  },
  {
    enunciado: "¿Qué tipo de conflictos aparecen en sociedades plurales?",
    correcta: "Conflictos de intereses y de valores",
    incorrectas: [
      "Conflictos exclusivamente económicos",
      "Conflictos solo militares"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el conflicto en el cambio social?",
    correcta: "Es motor de revoluciones, reformas y transformaciones culturales",
    incorrectas: [
      "Siempre paraliza la evolución social",
      "Se limita a destruir instituciones sin aportar alternativas"
    ]
  },
  {
    enunciado: "¿Cuáles son posibles desenlaces de un conflicto?",
    correcta: "Victoria, compromiso, paralización o derrota",
    incorrectas: [
      "Sólo victoria o derrota sin alternativas",
      "Reconciliación obligatoria sin matices"
    ]
  },
  {
    enunciado: "¿Qué función cumple la legitimación en relación al conflicto?",
    correcta: "Minimiza tensiones y estabiliza el sistema social",
    incorrectas: [
      "Elimina definitivamente los conflictos",
      "Transforma todo conflicto en guerra"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre cambio social interno y externo?",
    correcta: "El interno modifica estructuras propias, el externo proviene de influencias globales",
    incorrectas: [
      "El interno es cultural y el externo siempre económico",
      "El interno se da en sociedades modernas y el externo en primitivas"
    ]
  },
  {
    enunciado: "¿Qué relación establece Habermas entre conflicto y comunicación?",
    correcta: "El diálogo racional puede transformar conflictos en consensos legítimos",
    incorrectas: [
      "El conflicto nunca puede resolverse por medios discursivos",
      "La comunicación incrementa inevitablemente los conflictos"
    ]
  },
  {
    enunciado: "¿Qué autor señaló la función integradora de los movimientos sociales?",
    correcta: "Alain Touraine",
    incorrectas: [
      "Emile Durkheim",
      "Thomas Hobbes"
    ]
  },
  {
    enunciado: "¿Qué destaca Gramsci respecto al conflicto?",
    correcta: "La lucha por la hegemonía cultural como forma de conflicto social",
    incorrectas: [
      "La inevitabilidad de la anomia en toda sociedad",
      "La desaparición de conflictos en sociedades modernas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al análisis de Piketty sobre conflicto y desigualdad?",
    correcta: "La acumulación de capital genera tensiones crecientes en sociedades contemporáneas",
    incorrectas: [
      "La desigualdad es irrelevante en la era moderna",
      "El conflicto se debe únicamente a diferencias culturales"
    ]
  },
  {
    enunciado: "¿Qué relación plantea Arendt entre conflicto y política?",
    correcta: "La acción política surge del pluralismo y la posibilidad de disenso",
    incorrectas: [
      "La política se basa en la eliminación completa del conflicto",
      "El conflicto pertenece solo a la esfera privada"
    ]
  },
  {
    enunciado: "¿Qué señala Mannheim sobre el conflicto generacional?",
    correcta: "Los jóvenes configuran visiones del mundo distintas que chocan con las de adultos",
    incorrectas: [
      "Las generaciones reproducen sin cambios las ideas recibidas",
      "El conflicto generacional es un mito sin base sociológica"
    ]
  },
  {
    enunciado: "¿Qué ejemplo actual ilustra la relación entre conflicto y globalización?",
    correcta: "Los movimientos migratorios y las tensiones identitarias",
    incorrectas: [
      "La homogeneización perfecta de todas las culturas",
      "La desaparición de los conflictos locales"
    ]
  },
  {
    enunciado: "¿Qué importancia tienen las tecnologías digitales en el conflicto contemporáneo?",
    correcta: "Transforman formas de protesta y generan nuevos espacios de movilización",
    incorrectas: [
      "Eliminan toda forma de conflicto social",
      "No influyen en las relaciones de poder"
    ]
  },
  {
    enunciado: "¿Qué implica la noción de justicia climática como fuente de conflicto?",
    correcta: "Plantea tensiones entre generaciones y países por responsabilidades ambientales",
    incorrectas: [
      "Propone suprimir toda regulación ecológica",
      "Es una idea sin relación con la sociología"
    ]
  },
  {
    enunciado: "¿Qué destaca Castells sobre los conflictos en la sociedad red?",
    correcta: "Surgen en torno a identidades y flujos de información en la era digital",
    incorrectas: [
      "Son idénticos a los de sociedades agrarias",
      "Se limitan al plano económico clásico"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre conflicto y movimientos feministas?",
    correcta: "El feminismo visibiliza desigualdades y promueve cambios sociales estructurales",
    incorrectas: [
      "El feminismo elimina la necesidad de analizar el conflicto",
      "El feminismo es irrelevante en las dinámicas sociales"
    ]
  }
];
