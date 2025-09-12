// temarios/05-De-la-logica-clasica-a-la-logica-simbolica.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia principalmente la lógica como disciplina?",
    correcta: "Las condiciones de validez de los razonamientos",
    incorrectas: [
      "Las causas psicológicas de las creencias",
      "La evolución histórica de las lenguas naturales"
    ]
  },
  {
    enunciado: "¿Quién sistematizó el silogismo como núcleo de la lógica clásica?",
    correcta: "Aristóteles",
    incorrectas: [
      "Descartes",
      "Kant"
    ]
  },
  {
    enunciado: "¿Qué aportó la lógica estoica frente a la aristotélica?",
    correcta: "Un análisis proposicional con conectivas como condicional y disyunción",
    incorrectas: [
      "La teoría de tipos para evitar paradojas",
      "La aritmética booleana de clases"
    ]
  },
  {
    enunciado: "En la tradición medieval, ¿qué tema lógico fue especialmente desarrollado?",
    correcta: "La teoría de la suposición de los términos",
    incorrectas: [
      "La teoría de los designadores rígidos",
      "La semántica de mundos posibles"
    ]
  },
  {
    enunciado: "¿Qué motivación central impulsa el paso a la lógica simbólica moderna?",
    correcta: "Lograr precisión formal y cálculo de inferencias",
    incorrectas: [
      "Sustituir la matemática por la retórica",
      "Eliminar toda referencia a la verdad"
    ]
  },
  {
    enunciado: "¿Qué autor formuló el proyecto de una ‘characteristica universalis’ y un ‘calculus ratiocinator’?",
    correcta: "Leibniz",
    incorrectas: [
      "Hume",
      "Bacon"
    ]
  },
  {
    enunciado: "¿Qué introduce George Boole en el siglo XIX?",
    correcta: "Un álgebra lógica de clases con operaciones formales",
    incorrectas: [
      "La cuantificación de primer orden con variables",
      "La teoría de descripciones definidas"
    ]
  },
  {
    enunciado: "¿Qué rasgo hace pionera a la ‘Begriffsschrift’ (1879) de Frege?",
    correcta: "La formalización completa de la cuantificación de primer orden",
    incorrectas: [
      "La invención del método axiomático en geometría",
      "La primera demostración de los teoremas de incompletitud"
    ]
  },
  {
    enunciado: "¿Qué obra busca derivar la matemática a partir de la lógica con teoría de tipos?",
    correcta: "Principia Mathematica (Russell y Whitehead)",
    incorrectas: [
      "Crítica de la razón pura (Kant)",
      "Investigaciones filosóficas (Wittgenstein)"
    ]
  },
  {
    enunciado: "¿Qué expresa el símbolo ¬ en lógica proposicional?",
    correcta: "Negación",
    incorrectas: [
      "Conjunción",
      "Equivalencia"
    ]
  },
  {
    enunciado: "El conector ∧ corresponde a:",
    correcta: "Conjunción",
    incorrectas: [
      "Disyunción exclusiva",
      "Implicación"
    ]
  },
  {
    enunciado: "¿Qué conector simboliza la implicación material?",
    correcta: "→",
    incorrectas: [
      "↔",
      "∨"
    ]
  },
  {
    enunciado: "¿Qué indican los símbolos ∀ y ∃ en lógica de predicados?",
    correcta: "Cuantificación universal y existencial",
    incorrectas: [
      "Necesidad y posibilidad",
      "Verdad y falsedad"
    ]
  },
  {
    enunciado: "El símbolo ⊢ en metateoría suele leerse como:",
    correcta: "‘Se demuestra que’ (derivabilidad sintáctica)",
    incorrectas: [
      "‘Es verdadero en todos los modelos’ (validez semántica)",
      "‘Es equivalente por definición’"
    ]
  },
  {
    enunciado: "El símbolo ⊨ se interpreta como:",
    correcta: "Satisfacción/validez semántica",
    incorrectas: [
      "Equivalencia sintáctica",
      "Definibilidad recursiva"
    ]
  },
  {
    enunciado: "En una tabla de verdad, la fórmula p ∧ q es verdadera:",
    correcta: "Solo cuando p y q son verdaderas",
    incorrectas: [
      "Cuando al menos una de p o q es verdadera",
      "Cuando p es falsa"
    ]
  },
  {
    enunciado: "La fórmula p → q es falsa únicamente si:",
    correcta: "p es verdadera y q es falsa",
    incorrectas: [
      "p y q son verdaderas",
      "p y q son falsas"
    ]
  },
  {
    enunciado: "Una tautología es una fórmula que:",
    correcta: "Es verdadera bajo toda valuación",
    incorrectas: [
      "No es demostrable en ningún sistema",
      "Solo es verdadera en un modelo concreto"
    ]
  },
  {
    enunciado: "¿Cuál es una regla típica de inferencia válida?",
    correcta: "Modus ponens: de p y p → q inferir q",
    incorrectas: [
      "Negación del antecedente: de ¬p y p → q inferir ¬q",
      "Afirmación del consecuente: de q y p → q inferir p"
    ]
  },
  {
    enunciado: "Indica la forma válida del Modus tollens:",
    correcta: "De ¬q y p → q inferir ¬p",
    incorrectas: [
      "De q y p → q inferir p",
      "De ¬p y p → q inferir ¬q"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los sistemas de deducción natural?",
    correcta: "El uso de reglas de introducción y eliminación para cada conector/cuántificador",
    incorrectas: [
      "La ausencia total de reglas formales",
      "La sustitución de pruebas por tablas de verdad únicamente"
    ]
  },
  {
    enunciado: "¿Qué logra el método de resolución en lógica?",
    correcta: "Unificación de cláusulas para pruebas automáticas de insatisfacibilidad",
    incorrectas: [
      "Eliminar la necesidad de cuantificadores",
      "Probar consistencia de la aritmética de Peano"
    ]
  },
  {
    enunciado: "¿Cuál es el contenido del teorema de completitud de Gödel (1930) para FOL?",
    correcta: "Toda fórmula válida es demostrable (⊨ φ implica ⊢ φ)",
    incorrectas: [
      "Toda teoría verdadera es decidible",
      "Toda teoría consistente es completa"
    ]
  },
  {
    enunciado: "Los teoremas de incompletitud de Gödel (1931) muestran que:",
    correcta: "Toda teoría recursivamente axiomatizada y suficiente para la aritmética es incompleta",
    incorrectas: [
      "Toda teoría de primer orden es decidible",
      "No existen verdades aritméticas indecidibles"
    ]
  },
  {
    enunciado: "El resultado de Church–Turing sobre la decisibilidad establece que:",
    correcta: "No hay procedimiento general que decida toda verdad aritmética (indecidibilidad)",
    incorrectas: [
      "Toda proposición verdadera es decidible en tiempo polinómico",
      "La lógica de segundo orden es completa y decidible"
    ]
  },
  {
    enunciado: "¿Qué muestra Löwenheim–Skolem para teorías de primer orden con modelos infinitos?",
    correcta: "La existencia de modelos numerables (fenómeno de Skolem)",
    incorrectas: [
      "La inexistencia de modelos no estándar",
      "La completitud de toda teoría finita"
    ]
  },
  {
    enunciado: "¿Qué define Tarski con su ‘definición T’ de verdad?",
    correcta: "Una noción semántica de verdad en metalenguaje para lenguajes formales",
    incorrectas: [
      "Una regla sintáctica para eliminar cuantificadores",
      "Una prueba de consistencia de Principia Mathematica"
    ]
  },
  {
    enunciado: "En lógica de predicados, la fórmula ∀x P(x) → ∃x P(x):",
    correcta: "Es válida",
    incorrectas: [
      "Es contradictoria",
      "Es contingente solo en dominios finitos"
    ]
  },
  {
    enunciado: "En lógica de predicados, la fórmula ∃x P(x) → ∀x P(x):",
    correcta: "No es válida en general",
    incorrectas: [
      "Es una tautología",
      "Equivale a ¬∃x ¬P(x)"
    ]
  },
  {
    enunciado: "Si ⊢ φ ↔ ψ, entonces respecto a toda fórmula χ que contenga φ:",
    correcta: "Puede sustituirse φ por ψ preservando validez (sustitución de equivalentes)",
    incorrectas: [
      "Se pierde siempre la validez",
      "Solo vale para fórmulas sin conectores"
    ]
  },
  {
    enunciado: "¿Qué distingue a la lógica intuicionista de la clásica?",
    correcta: "Rechaza en general el principio del tercero excluido (p ∨ ¬p)",
    incorrectas: [
      "Niega el uso de cuantificadores",
      "Identifica verdad con demostrabilidad semántica"
    ]
  },
  {
    enunciado: "¿Qué aporta la semántica de Kripke a las lógicas modales?",
    correcta: "Modelos con mundos y relaciones de accesibilidad",
    incorrectas: [
      "Eliminación del operador de necesidad",
      "La reducción de modal a cuantificacional sin condiciones"
    ]
  },
  {
    enunciado: "¿Qué representa ⊥ en lógica?",
    correcta: "Contradicción o falsum",
    incorrectas: [
      "Conjunción verdadera",
      "Tesis o tautología"
    ]
  },
  {
    enunciado: "Completa correctamente: de ⊥ se puede inferir…",
    correcta: "cualquier fórmula (ex falso quodlibet)",
    incorrectas: [
      "únicamente tautologías",
      "ninguna fórmula"
    ]
  },
  {
    enunciado: "¿Qué expresa la regla de generalización universal (UG)?",
    correcta: "De φ(x) se puede inferir ∀x φ(x), bajo condiciones sobre x",
    incorrectas: [
      "De ∀x φ(x) inferir φ(c) para toda constante c",
      "De φ(c) inferir ∃x φ(x) sin restricciones"
    ]
  },
  {
    enunciado: "¿Qué es una forma normal conjuntiva (FNC)?",
    correcta: "Una conjunción de cláusulas, cada cláusula disyuntiva de literales",
    incorrectas: [
      "Una disyunción de conjunciones de literales negados únicamente",
      "Una conjunción de equivalencias bicondicionales"
    ]
  },
  {
    enunciado: "¿Cuál es una equivalencia lógica correcta?",
    correcta: "p → q ↔ ¬p ∨ q",
    incorrectas: [
      "p → q ↔ p ∨ q",
      "p → q ↔ ¬(p ∨ q)"
    ]
  },
  {
    enunciado: "Si una teoría T es consistente y T ⊢ φ y T ⊢ ¬φ, entonces:",
    correcta: "Se produciría explosión, por lo que T no puede ser consistente",
    incorrectas: [
      "T sigue siendo consistente si φ es atómica",
      "La contradicción no afecta a T"
    ]
  },
  {
    enunciado: "¿Qué buscaba el programa de Hilbert?",
    correcta: "Fundamentar la matemática probando consistencia con métodos finitarios",
    incorrectas: [
      "Abandonar la formalización en favor del intuicionismo",
      "Identificar toda verdad con verificaciones empíricas"
    ]
  },
  {
    enunciado: "¿Qué relación capta el ‘isomorfismo de Curry–Howard’?",
    correcta: "Correspondencia entre pruebas y programas, fórmulas y tipos",
    incorrectas: [
      "Equivalencia entre verdad y verificabilidad empírica",
      "Identidad entre semántica y pragmática"
    ]
  }
];
