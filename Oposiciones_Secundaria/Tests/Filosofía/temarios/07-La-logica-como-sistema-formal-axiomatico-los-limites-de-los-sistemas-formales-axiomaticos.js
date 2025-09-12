// temarios/07-La-logica-como-sistema-formal-axiomatico-los-limites-de-los-sistemas-formales-axiomaticos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es, en términos generales, un sistema formal axiomático?",
    correcta: "Un conjunto de axiomas y reglas de inferencia que permiten derivar teoremas",
    incorrectas: [
      "Una colección de enunciados verdaderos por consenso social",
      "Un método experimental para verificar hipótesis empíricas"
    ]
  },
  {
    enunciado: "¿Qué papel juegan las reglas de formación en un sistema formal?",
    correcta: "Determinan qué expresiones son fórmulas bien formadas del lenguaje",
    incorrectas: [
      "Establecen qué teoremas son verdaderos en todos los modelos",
      "Garantizan la independencia de los axiomas entre sí"
    ]
  },
  {
    enunciado: "Señala la función de las reglas de inferencia",
    correcta: "Permiten pasar de fórmulas a otras de forma válida dentro del sistema",
    incorrectas: [
      "Asignan valores de verdad a las constantes lógicas",
      "Definen la semántica externa del sistema"
    ]
  },
  {
    enunciado: "¿Qué significa que un sistema formal sea consistente?",
    correcta: "Que no permite demostrar simultáneamente una fórmula y su negación",
    incorrectas: [
      "Que toda fórmula del lenguaje es demostrable",
      "Que toda fórmula verdadera es refutable"
    ]
  },
  {
    enunciado: "¿Qué expresa la completitud (en sentido lógico) de un sistema?",
    correcta: "Que toda fórmula válida semánticamente es demostrable sintácticamente (⊨ φ ⇒ ⊢ φ)",
    incorrectas: [
      "Que toda teoría verdadera es decidible computacionalmente",
      "Que toda fórmula demostrable es verdadera en algún modelo"
    ]
  },
  {
    enunciado: "La decidibilidad de un sistema se refiere a:",
    correcta: "La existencia de un procedimiento efectivo que determine para cada fórmula si es teorema",
    incorrectas: [
      "La posibilidad de tener infinitos axiomas sin redundancia",
      "La equivalencia entre verdad y verificabilidad empírica"
    ]
  },
  {
    enunciado: "¿Qué implica la independencia de un axioma?",
    correcta: "Que no puede deducirse a partir del resto de axiomas del sistema",
    incorrectas: [
      "Que su negación es un teorema del sistema",
      "Que es verdadero en todos los modelos concebibles"
    ]
  },
  {
    enunciado: "Identifica el componente que NO pertenece a la sintaxis del sistema",
    correcta: "La noción de ‘modelo’",
    incorrectas: [
      "El vocabulario primitivo",
      "Las reglas de formación"
    ]
  },
  {
    enunciado: "¿Cuál es la relación entre teoremas y axiomas?",
    correcta: "Los teoremas se obtienen por reglas de inferencia a partir de los axiomas",
    incorrectas: [
      "Los axiomas se prueban a partir de los teoremas por inducción",
      "Los teoremas determinan la independencia de los axiomas por definición"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al enfoque de Hilbert respecto a los fundamentos?",
    correcta: "La axiomatización rigurosa y el uso de métodos finitarios para probar consistencia",
    incorrectas: [
      "La identificación de la verdad con la experiencia sensible",
      "La eliminación de toda formalización en favor del lenguaje ordinario"
    ]
  },
  {
    enunciado: "El símbolo ⊢ suele interpretarse como:",
    correcta: "Derivabilidad sintáctica en un sistema de prueba",
    incorrectas: [
      "Validez semántica en todos los modelos",
      "Equivalencia empírica entre hipótesis"
    ]
  },
  {
    enunciado: "El símbolo ⊨ suele interpretarse como:",
    correcta: "Satisfacción o validez semántica",
    incorrectas: [
      "Definibilidad por comprensión",
      "Equivalencia por sustitución"
    ]
  },
  {
    enunciado: "Un sistema inconsistente permite derivar:",
    correcta: "Cualquier fórmula (explosión: ex contradictione quodlibet)",
    incorrectas: [
      "Solo tautologías",
      "Únicamente negaciones dobles"
    ]
  },
  {
    enunciado: "Ejemplo clásico de independencia axiomática:",
    correcta: "El quinto postulado de Euclides respecto a los otros cuatro",
    incorrectas: [
      "La ley del tercio excluido en intuicionismo",
      "La regla de Modus ponens respecto a la negación"
    ]
  },
  {
    enunciado: "La completitud de la lógica proposicional significa que:",
    correcta: "Toda tautología es demostrable en un sistema adecuado",
    incorrectas: [
      "Toda fórmula es decidible por cuantificadores de segundo orden",
      "Toda teoría finita es categórica"
    ]
  },
  {
    enunciado: "La lógica de primer orden es:",
    correcta: "Completa (Gödel, 1930) pero indecidible en general (Church-Turing, 1936)",
    incorrectas: [
      "Incompleta y decidible",
      "Decidible gracias a las tablas de verdad"
    ]
  },
  {
    enunciado: "El primer teorema de incompletitud de Gödel (1931) establece que:",
    correcta: "Toda teoría consistente, efectiva y suficientemente expresiva es incompleta",
    incorrectas: [
      "Toda teoría consistente es decidible",
      "Si una teoría es completa entonces es inconsistente"
    ]
  },
  {
    enunciado: "El segundo teorema de incompletitud de Gödel muestra que:",
    correcta: "Una teoría suficientemente expresiva no puede demostrar su propia consistencia",
    incorrectas: [
      "Toda teoría consistente prueba su completitud",
      "La consistencia es equivalente a decidibilidad"
    ]
  },
  {
    enunciado: "La tesis de Church-Turing sugiere que:",
    correcta: "La noción intuitiva de ‘procedimiento efectivo’ coincide con computabilidad (λ-cálculo, Turing)",
    incorrectas: [
      "Toda función matemática es computable",
      "La verdad lógica siempre es verificable empíricamente"
    ]
  },
  {
    enunciado: "El problema de la decisión (Entscheidungsproblem) para FOL:",
    correcta: "No admite solución general: no existe algoritmo que decida toda validez de primer orden",
    incorrectas: [
      "Se resuelve con árboles semánticos para cualquier fórmula",
      "Se reduce a tablas de verdad finitas"
    ]
  },
  {
    enunciado: "El teorema de Löwenheim–Skolem (hacia abajo) implica que:",
    correcta: "Las teorías de primer orden con modelos infinitos tienen también modelos numerables",
    incorrectas: [
      "Toda teoría de primer orden es categórica",
      "No existen modelos no estándar en aritmética"
    ]
  },
  {
    enunciado: "La compacidad en primer orden asegura que:",
    correcta: "Si toda subfamilia finita de T es satisfacible, entonces T es satisfacible",
    incorrectas: [
      "Toda teoría finita es completa",
      "Toda teoría infinita es inconsistente"
    ]
  },
  {
    enunciado: "Una consecuencia del ‘fenómeno de Skolem’ es que:",
    correcta: "Surge un relativismo semántico: teorías con conceptos ‘no numerables’ pueden tener modelos numerables",
    incorrectas: [
      "Toda teoría se vuelve decidible",
      "Los cuantificadores dejan de tener interpretación"
    ]
  },
  {
    enunciado: "La relación entre sintaxis y semántica se articula mediante:",
    correcta: "Sonido (si ⊢ φ entonces ⊨ φ) y completitud (si ⊨ φ entonces ⊢ φ) del sistema",
    incorrectas: [
      "Equivalencia por sustitución entre axiomas y reglas",
      "Identidad entre modelos y pruebas"
    ]
  },
  {
    enunciado: "En un sistema de tipo Hilbert, las pruebas son:",
    correcta: "Secuencias finitas de fórmulas donde cada paso es axioma o se obtiene por reglas como Modus ponens",
    incorrectas: [
      "Árboles de casos que asignan directamente valores de verdad",
      "Listas de modelos que satisfacen todas las fórmulas"
    ]
  },
  {
    enunciado: "La metateoría estudia:",
    correcta: "Propiedades del sistema (consistencia, completitud, decidibilidad) desde fuera del mismo",
    incorrectas: [
      "Únicamente la semántica de los predicados monádicos",
      "Solo la independencia de axiomas mediante experimentación"
    ]
  },
  {
    enunciado: "Un ‘modelo’ de una teoría es:",
    correcta: "Una estructura en la que todas las fórmulas de la teoría son verdaderas",
    incorrectas: [
      "Una prueba sintáctica de las fórmulas",
      "Una traducción informal de los axiomas"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre consistencia y satisfacibilidad?",
    correcta: "Consistencia es propiedad sintáctica de no derivar contradicción; satisfacibilidad es existencia de un modelo",
    incorrectas: [
      "Ambas son sinónimos semánticos",
      "La consistencia requiere modelos finitos exclusivamente"
    ]
  },
  {
    enunciado: "Un sistema ‘categórico’ es aquel en el que:",
    correcta: "Todos sus modelos son isomorfos entre sí",
    incorrectas: [
      "Toda fórmula es decidible por enumeración",
      "Todo axioma se puede eliminar sin pérdida"
    ]
  },
  {
    enunciado: "¿Qué buscaba el Programa de Hilbert?",
    correcta: "Probar la consistencia de las matemáticas mediante métodos finitarios",
    incorrectas: [
      "Eliminar la lógica de los fundamentos matemáticos",
      "Reducir toda matemática a experimentos empíricos"
    ]
  },
  {
    enunciado: "Una teoría efectiva o recursivamente axiomatizada es aquella cuyas axiomas:",
    correcta: "Pueden generarse por un procedimiento computable",
    incorrectas: [
      "Son todos verdaderos en el modelo estándar de los reales",
      "Son exclusivamente ecuaciones de primer grado"
    ]
  },
  {
    enunciado: "El resultado de Gödel impacta el Programa de Hilbert porque:",
    correcta: "Impide que una teoría suficientemente potente pruebe su propia consistencia",
    incorrectas: [
      "Demuestra que toda teoría completa es falsa",
      "Prueba que la aritmética es decidible"
    ]
  },
  {
    enunciado: "En lógica proposicional, la validez es decidible porque:",
    correcta: "Puede comprobarse por métodos exhaustivos (p. ej., tablas de verdad) aunque sean costosos",
    incorrectas: [
      "Se reduce a conteo de modelos infinitos",
      "Depende de cuantificadores de segundo orden"
    ]
  },
  {
    enunciado: "La noción de ‘interpretación’ conecta:",
    correcta: "El lenguaje formal con una estructura semántica donde las fórmulas reciben verdad",
    incorrectas: [
      "Los axiomas con su comprobación empírica directa",
      "Las reglas de formación con la teoría de la medición"
    ]
  },
  {
    enunciado: "Una regla de inferencia es ‘admisible’ si:",
    correcta: "No añade nuevos teoremas a los ya demostrables con las reglas existentes",
    incorrectas: [
      "Garantiza decidibilidad del sistema",
      "Elimina la necesidad de axiomas"
    ]
  },
  {
    enunciado: "La noción de ‘teorema’ en un sistema formal depende de:",
    correcta: "La existencia de una derivación finita a partir de axiomas mediante reglas de inferencia",
    incorrectas: [
      "La verificación observacional en un experimento",
      "La interpretación que haga cualquier hablante competente"
    ]
  },
  {
    enunciado: "Una teoría de primer orden que es completa y consistente necesariamente:",
    correcta: "No puede describir aritmética suficientemente expresiva (por los teoremas de incompletitud)",
    incorrectas: [
      "Es decidible por el método de resolución",
      "Tiene un único modelo finito"
    ]
  },
  {
    enunciado: "El cálculo de secuentes de Gentzen muestra, entre otros resultados, que:",
    correcta: "Puede eliminarse la regla de corte (teorema de eliminación de corte) en ciertos sistemas",
    incorrectas: [
      "Toda prueba puede reducirse a una tabla de verdad finita",
      "La consistencia implica automáticamente decidibilidad"
    ]
  },
  {
    enunciado: "Una consecuencia filosófica de los límites metamatemáticos es que:",
    correcta: "El ideal de fundamentación absoluta debe moderarse reconociendo verdades no demostrables",
    incorrectas: [
      "La matemática carece de rigor por completo",
      "La lógica formal queda invalidada para la ciencia"
    ]
  },
  {
    enunciado: "¿Qué ilustra la axiomatización de geometrías no euclídeas?",
    correcta: "Que cambiar un axioma independiente produce teorías consistentes alternativas",
    incorrectas: [
      "Que los axiomas no pueden ser independientes",
      "Que toda geometría es decidible por tablas de verdad"
    ]
  },
  {
    enunciado: "En síntesis, la lógica como sistema formal axiomático proporciona:",
    correcta: "Rigor deductivo y claridad estructural, aunque con límites de completitud y decidibilidad",
    incorrectas: [
      "Verdad empírica garantizada para cualquier enunciado",
      "Decidibilidad universal de toda teoría matemática"
    ]
  }
];
