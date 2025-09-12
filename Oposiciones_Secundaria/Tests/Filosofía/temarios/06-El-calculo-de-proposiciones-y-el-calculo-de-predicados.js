// temarios/06-El-calculo-de-proposiciones-y-el-calculo-de-predicados.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué distingue al cálculo de proposiciones respecto al cálculo de predicados?",
    correcta: "El cálculo de proposiciones trata a las oraciones como unidades indivisas sin analizar su estructura interna",
    incorrectas: [
      "El cálculo de proposiciones analiza cuantificadores y relaciones n-arias",
      "El cálculo de proposiciones prohíbe el uso de conectores lógicos"
    ]
  },
  {
    enunciado: "¿Qué función cumplen las letras proposicionales (p, q, r…)?",
    correcta: "Sirven para simbolizar proposiciones simples con valor de verdad",
    incorrectas: [
      "Representan únicamente predicados monádicos",
      "Indican las reglas de inferencia del sistema"
    ]
  },
  {
    enunciado: "Indica la correspondencia correcta entre símbolos y conectores",
    correcta: "¬ negación, ∧ conjunción, ∨ disyunción, → implicación, ↔ equivalencia",
    incorrectas: [
      "¬ conjunción, ∧ disyunción, ∨ negación, → equivalencia, ↔ implicación",
      "¬ equivalencia, ∧ implicación, ∨ conjunción, → disyunción, ↔ negación"
    ]
  },
  {
    enunciado: "¿Cuándo es verdadera la conjunción p ∧ q?",
    correcta: "Solo cuando p y q son verdaderas",
    incorrectas: [
      "Cuando al menos una de p o q es verdadera",
      "Siempre que p sea falsa"
    ]
  },
  {
    enunciado: "¿Cuándo es verdadera la disyunción inclusiva p ∨ q?",
    correcta: "Cuando al menos una de p o q es verdadera",
    incorrectas: [
      "Únicamente cuando p y q son verdaderas a la vez",
      "Solo cuando p y q son falsas"
    ]
  },
  {
    enunciado: "La implicación material p → q es falsa exactamente en el caso:",
    correcta: "p verdadera y q falsa",
    incorrectas: [
      "p falsa y q verdadera",
      "p y q verdaderas"
    ]
  },
  {
    enunciado: "La bicondicional p ↔ q resulta verdadera si y solo si:",
    correcta: "p y q comparten el mismo valor de verdad",
    incorrectas: [
      "p es verdadera y q es falsa",
      "q es verdadera y p es falsa"
    ]
  },
  {
    enunciado: "¿Qué es una tautología en cálculo proposicional?",
    correcta: "Una fórmula verdadera bajo toda valuación posible",
    incorrectas: [
      "Una fórmula falsa en todos los modelos",
      "Una fórmula verdadera solo en algunos modelos"
    ]
  },
  {
    enunciado: "¿Qué es una contradicción?",
    correcta: "Una fórmula falsa bajo toda valuación",
    incorrectas: [
      "Una fórmula que no puede probarse sintácticamente",
      "Una fórmula verdadera en al menos un modelo"
    ]
  },
  {
    enunciado: "¿Qué es una contingencia?",
    correcta: "Una fórmula verdadera en algunas valuaciones y falsa en otras",
    incorrectas: [
      "Una fórmula equivalente a ⊥",
      "Una fórmula verdadera en todas las valuaciones"
    ]
  },
  {
    enunciado: "Un argumento es lógicamente válido cuando:",
    correcta: "En toda valuación donde las premisas son verdaderas, la conclusión también lo es",
    incorrectas: [
      "Su conclusión es de hecho verdadera en el mundo",
      "Tiene al menos una premisa verdadera y otra falsa"
    ]
  },
  {
    enunciado: "Señala la forma correcta del Modus ponens",
    correcta: "De p y p → q, inferir q",
    incorrectas: [
      "De q y p → q, inferir p",
      "De ¬p y p → q, inferir ¬q"
    ]
  },
  {
    enunciado: "Señala la forma correcta del Modus tollens",
    correcta: "De ¬q y p → q, inferir ¬p",
    incorrectas: [
      "De p y p → q, inferir q",
      "De q y p → q, inferir p"
    ]
  },
  {
    enunciado: "¿Qué expresa la equivalencia p → q ↔ ¬p ∨ q?",
    correcta: "Que la implicación material es lógicamente equivalente a la disyunción de la negación del antecedente con el consecuente",
    incorrectas: [
      "Que p → q es equivalente a p ∨ q",
      "Que p → q es equivalente a ¬(p ∨ q)"
    ]
  },
  {
    enunciado: "Indica una ley de De Morgan correcta",
    correcta: "¬(p ∧ q) ↔ (¬p ∨ ¬q)",
    incorrectas: [
      "¬(p ∨ q) ↔ (p ∧ q)",
      "¬(p → q) ↔ (p → ¬q)"
    ]
  },
  {
    enunciado: "¿Qué establece la doble negación en lógica clásica?",
    correcta: "Que ¬¬p es lógicamente equivalente a p",
    incorrectas: [
      "Que ¬¬p implica ¬p",
      "Que ¬¬p nunca puede eliminarse"
    ]
  },
  {
    enunciado: "La contraposición válida de p → q es:",
    correcta: "¬q → ¬p",
    incorrectas: [
      "q → p",
      "¬p → ¬q"
    ]
  },
  {
    enunciado: "¿Qué es la Forma Normal Conjuntiva (FNC)?",
    correcta: "Una conjunción de cláusulas, donde cada cláusula es una disyunción de literales",
    incorrectas: [
      "Una disyunción de cláusulas, cada cláusula una conjunción de literales",
      "Una conjunción de equivalencias bicondicionales"
    ]
  },
  {
    enunciado: "¿Qué es la Forma Normal Disyuntiva (FND)?",
    correcta: "Una disyunción de conjunciones de literales",
    incorrectas: [
      "Una conjunción de disyunciones de equivalencias",
      "Una negación de una fórmula universalmente válida"
    ]
  },
  {
    enunciado: "¿Para qué se usan los árboles semánticos (tableaux)?",
    correcta: "Para decidir validez o satisfacibilidad expandiendo sistemáticamente casos hasta cerrar contradicciones",
    incorrectas: [
      "Para reemplazar a los cuantificadores por constantes arbitrarias siempre",
      "Para construir demostraciones únicamente por inducción matemática"
    ]
  },
  {
    enunciado: "La regla de resolución opera sobre fórmulas en:",
    correcta: "Forma normal conjuntiva y permite refutar por insatisfacibilidad",
    incorrectas: [
      "Forma normal disyuntiva y prueba por satisfacibilidad directa",
      "Forma prenex exclusiva y elimina todo uso de conectores"
    ]
  },
  {
    enunciado: "¿Qué añade el cálculo de predicados respecto al proposicional?",
    correcta: "Variables, cuantificadores e interpretación de predicados y relaciones",
    incorrectas: [
      "La eliminación de todos los conectores lógicos",
      "La restricción a modelos con un solo elemento"
    ]
  },
  {
    enunciado: "La traducción ‘Todos los S son G’ al primer orden es:",
    correcta: "∀x (Sx → Gx)",
    incorrectas: [
      "∃x (Sx ∧ Gx)",
      "∀x (Sx ∧ Gx)"
    ]
  },
  {
    enunciado: "La traducción ‘Algún S es G’ al primer orden es:",
    correcta: "∃x (Sx ∧ Gx)",
    incorrectas: [
      "∀x (Sx → Gx)",
      "¬∃x (Sx ∧ Gx)"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre ∀x∃y R(x,y) y ∃y∀x R(x,y)?",
    correcta: "La primera permite que el testigo de y dependa de x, mientras que la segunda exige un mismo y para todos los x",
    incorrectas: [
      "No hay diferencia lógica; ambas fórmulas son equivalentes",
      "La primera es siempre falsa y la segunda siempre verdadera"
    ]
  },
  {
    enunciado: "Selecciona una equivalencia correcta de negación de cuantificadores",
    correcta: "¬∀x P(x) ↔ ∃x ¬P(x)",
    incorrectas: [
      "¬∀x P(x) ↔ ∀x ¬P(x)",
      "¬∀x P(x) ↔ ¬∃x ¬P(x)"
    ]
  },
  {
    enunciado: "Selecciona otra equivalencia correcta de negación de cuantificadores",
    correcta: "¬∃x P(x) ↔ ∀x ¬P(x)",
    incorrectas: [
      "¬∃x P(x) ↔ ∃x ¬P(x)",
      "¬∃x P(x) ↔ ¬∀x ¬P(x)"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una variable ligada frente a una libre?",
    correcta: "Una variable ligada está bajo el alcance de un cuantificador, una libre no lo está",
    incorrectas: [
      "Una variable libre puede sustituirse por un cuantificador en cualquier punto",
      "Una variable ligada nunca puede aparecer más de una vez"
    ]
  },
  {
    enunciado: "¿Qué expresa la regla de generalización universal (UG)?",
    correcta: "Que desde φ(x), bajo condiciones sobre x, puede inferirse ∀x φ(x)",
    incorrectas: [
      "Que desde ∀x φ(x) puede inferirse φ(c) únicamente si c no aparece en φ",
      "Que desde φ(c) puede inferirse ∃x φ(x) sin ninguna restricción"
    ]
  },
  {
    enunciado: "¿Qué permite la instanciación universal?",
    correcta: "Inferir φ(t) a partir de ∀x φ(x), para un término t adecuado",
    incorrectas: [
      "Inferir ∀x φ(x) a partir de φ(t) sin condiciones",
      "Inferir ¬φ(t) a partir de ∃x ¬φ(x) sin condiciones"
    ]
  },
  {
    enunciado: "¿Qué autoriza la introducción existencial?",
    correcta: "Concluir ∃x φ(x) a partir de φ(c) para una constante c",
    incorrectas: [
      "Concluir ∀x φ(x) a partir de φ(c) para una constante c",
      "Concluir φ(c) a partir de ∃x φ(x) sin ninguna hipótesis auxiliar"
    ]
  },
  {
    enunciado: "En eliminación existencial, la constante testigo introducida debe ser:",
    correcta: "Nueva respecto de las premisas activas para evitar capturas y usos indebidos",
    incorrectas: [
      "Igual a cualquier constante ya presente en las premisas",
      "Siempre un término funcional de aridad mayor que cero"
    ]
  },
  {
    enunciado: "¿Qué es la forma prenex?",
    correcta: "Una forma en la que todos los cuantificadores se sitúan al inicio de la fórmula",
    incorrectas: [
      "Una forma que elimina todos los conectores lógicos",
      "Una forma exclusiva de la lógica proposicional"
    ]
  },
  {
    enunciado: "¿Para qué sirve la skolemización en pruebas por refutación?",
    correcta: "Para eliminar cuantificadores existenciales introduciendo funciones o constantes de Skolem",
    incorrectas: [
      "Para demostrar completitud de la lógica proposicional",
      "Para convertir toda fórmula en una tautología"
    ]
  },
  {
    enunciado: "El símbolo ⊢ se interpreta normalmente como:",
    correcta: "Derivabilidad sintáctica en un sistema de prueba",
    incorrectas: [
      "Validez semántica en todos los modelos",
      "Equivalencia por definición entre términos"
    ]
  },
  {
    enunciado: "El símbolo ⊨ se interpreta normalmente como:",
    correcta: "Satisfacción o validez semántica",
    incorrectas: [
      "Demostrabilidad por inducción estructural",
      "Equivalencia sintáctica pura"
    ]
  },
  {
    enunciado: "¿Qué afirma el teorema de completitud de Gödel para el primer orden?",
    correcta: "Que toda fórmula válidamente semántica es demostrable en algún sistema de prueba adecuado",
    incorrectas: [
      "Que toda teoría verdadera es decidible",
      "Que toda fórmula demostrable es falsa en algún modelo"
    ]
  },
  {
    enunciado: "¿Qué establece el teorema de compacidad para el primer orden?",
    correcta: "Que si toda subfamilia finita de un conjunto de fórmulas es satisfacible, entonces el conjunto completo es satisfacible",
    incorrectas: [
      "Que toda teoría consistente es completa",
      "Que las teorías infinitas no admiten modelos numerables"
    ]
  },
  {
    enunciado: "¿Qué muestra el teorema de Löwenheim–Skolem (hacia abajo) para teorías con modelos infinitos?",
    correcta: "Que si una teoría tiene algún modelo infinito, también tiene un modelo numerable",
    incorrectas: [
      "Que las teorías de primer orden son siempre categóricas",
      "Que toda teoría de segundo orden tiene modelos finitos"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia de decidibilidad entre proposicional y primer orden?",
    correcta: "La lógica proposicional es decidible; la lógica de primer orden es indecidible en general",
    incorrectas: [
      "Ambas son decidibles por tablas de verdad",
      "Ambas son indecidibles por reducción a la aritmética"
    ]
  },
  {
    enunciado: "¿Qué representan los símbolos ⊤ y ⊥?",
    correcta: "⊤ representa una tautología y ⊥ representa una contradicción",
    incorrectas: [
      "⊤ y ⊥ representan cuantificadores universal y existencial",
      "⊤ y ⊥ representan conjunción y disyunción"
    ]
  }
];
