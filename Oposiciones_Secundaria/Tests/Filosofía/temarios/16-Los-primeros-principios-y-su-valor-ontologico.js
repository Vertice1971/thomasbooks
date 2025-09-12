// temarios/16-Los-primeros-principios-y-su-valor-ontologico.js
var PREGUNTAS = [
  {
    enunciado: "En filosofía, un principio se entiende como fundamento, origen y comienzo.",
    correcta: "Verdadero.",
    incorrectas: [
      "Falso, un principio equivale a una conclusión demostrada.",
      "Falso, un principio es un ejemplo empírico elegido al azar."
    ]
  },
  {
    enunciado: "La distinción clásica entre principium essendi y principium cognoscendi señala...",
    correcta: "...la diferencia entre principios del ser y principios del conocer.",
    incorrectas: [
      "...la diferencia entre principios estéticos y principios políticos.",
      "...la diferencia entre reglas gramaticales y convenciones sociales."
    ]
  },
  {
    enunciado: "Parménides defendió que el ser es y el no ser no es.",
    correcta: "Es la formulación más antigua del principio de identidad.",
    incorrectas: [
      "Defendió que el ser es múltiple y cambiante.",
      "Negó la posibilidad de hablar del ser."
    ]
  },
  {
    enunciado: "El principio de identidad puede expresarse como A = A.",
    correcta: "Cada ente es idéntico a sí mismo.",
    incorrectas: [
      "Todo ente es idéntico a cualquier otro ente.",
      "Ningún ente puede identificarse consigo mismo."
    ]
  },
  {
    enunciado: "El principio de no contradicción afirma que...",
    correcta: "...es imposible que algo sea y no sea al mismo tiempo y bajo el mismo respecto.",
    incorrectas: [
      "...todo lo que es termina por dejar de ser necesariamente.",
      "...toda contradicción es verdadera en al menos un caso."
    ]
  },
  {
    enunciado: "El principio del tercero excluido sostiene que...",
    correcta: "...una proposición es verdadera o falsa, sin término medio.",
    incorrectas: [
      "...toda proposición es verdadera y falsa a la vez.",
      "...no existen valores de verdad definidos."
    ]
  },
  {
    enunciado: "El principio de razón suficiente, formulado por Leibniz, establece que...",
    correcta: "...todo lo que existe tiene una explicación o fundamento suficiente.",
    incorrectas: [
      "...algunas realidades existen sin ninguna razón.",
      "...solo las verdades de hecho requieren explicación, nunca las de razón."
    ]
  },
  {
    enunciado: "El principio de causalidad afirma que...",
    correcta: "...todo efecto tiene una causa proporcionada.",
    incorrectas: [
      "...toda causa es idéntica a su efecto sin distinción alguna.",
      "...no existen efectos en el mundo natural."
    ]
  },
  {
    enunciado: "Para Aristóteles, los primeros principios no son solo lógicos, sino también ontológicos.",
    correcta: "Reflejan leyes del ser, no solo reglas del pensar.",
    incorrectas: [
      "Son meras convenciones lingüísticas sin correlato real.",
      "Se reducen a hábitos psicológicos del sujeto."
    ]
  },
  {
    enunciado: "En la Metafísica, Aristóteles llamó al principio de no contradicción...",
    correcta: "...el más firme de todos los principios, presupuesto de todo discurso.",
    incorrectas: [
      "Un principio secundario derivado de la experiencia.",
      "Una regla útil pero prescindible."
    ]
  },
  {
    enunciado: "La escolástica vinculó los primeros principios a los trascendentales del ente.",
    correcta: "Unidad, verdad y bondad fundamentan los principios.",
    incorrectas: [
      "Los trascendentales son categorías psicológicas privadas.",
      "Los trascendentales son meros axiomas matemáticos."
    ]
  },
  {
    enunciado: "El principio de identidad se relaciona con el trascendental unidad.",
    correcta: "Todo ente es uno consigo mismo.",
    incorrectas: [
      "Todo ente es múltiple en sí mismo.",
      "El principio de identidad niega la unidad."
    ]
  },
  {
    enunciado: "El principio de no contradicción se relaciona con el trascendental verdad.",
    correcta: "Expresa la adecuación del ser y el pensar.",
    incorrectas: [
      "Se limita a una norma del lenguaje ordinario.",
      "Se aplica solo en matemáticas."
    ]
  },
  {
    enunciado: "El principio de finalidad se relaciona con el trascendental bondad.",
    correcta: "Todo ente tiende a un fin que expresa su perfección.",
    incorrectas: [
      "Todo ente carece de finalidad intrínseca.",
      "La bondad no se relaciona con la finalidad."
    ]
  },
  {
    enunciado: "Kant replanteó los principios como condiciones trascendentales del conocimiento.",
    correcta: "Son requisitos de posibilidad para la experiencia objetiva.",
    incorrectas: [
      "Son principios empíricos derivados de la costumbre.",
      "Son axiomas arbitrarios sin valor crítico."
    ]
  },
  {
    enunciado: "Hume criticó el principio de causalidad al considerarlo...",
    correcta: "...un hábito psicológico basado en la repetición de experiencias.",
    incorrectas: [
      "...una verdad a priori indiscutible.",
      "...una identidad matemática."
    ]
  },
  {
    enunciado: "Leibniz consideraba que el principio de razón suficiente era necesario para...",
    correcta: "...explicar tanto las verdades de razón como las verdades de hecho.",
    incorrectas: [
      "...justificar solo las verdades empíricas.",
      "...negar la existencia de fundamentos universales."
    ]
  },
  {
    enunciado: "Hegel integró los principios en una lógica dialéctica.",
    correcta: "La contradicción es motor del devenir racional.",
    incorrectas: [
      "Eliminó el principio de contradicción por completo.",
      "Negó que hubiera racionalidad en el devenir."
    ]
  },
  {
    enunciado: "Las lógicas paraconsistentes y la intuicionista han cuestionado...",
    correcta: "...la validez universal del principio del tercero excluido.",
    incorrectas: [
      "El principio de identidad en matemáticas.",
      "El principio de causalidad en física."
    ]
  },
  {
    enunciado: "Heidegger replanteó los primeros principios al preguntar...",
    correcta: "...por el sentido del ser más allá de la lógica formal.",
    incorrectas: [
      "Por la identidad matemática de los números.",
      "Por la validez del empirismo lógico."
    ]
  },
  {
    enunciado: "Los primeros principios cumplen una función normativa en la ciencia.",
    correcta: "Garantizan coherencia y posibilidad de conocimiento objetivo.",
    incorrectas: [
      "Son irrelevantes para la investigación científica.",
      "Son reemplazados por costumbres sociales."
    ]
  },
  {
    enunciado: "El valor ontológico de los principios significa que...",
    correcta: "...expresan la estructura misma de la realidad, no solo del pensamiento.",
    incorrectas: [
      "Son exclusivamente reglas lingüísticas.",
      "Son útiles pero carecen de correlato real."
    ]
  },
  {
    enunciado: "El debate contemporáneo sobre los principios discute si son...",
    correcta: "...universales ontológicos o convenciones lógicas/lingüísticas.",
    incorrectas: [
      "Exclusivamente dogmas religiosos.",
      "Exclusivamente categorías psicológicas."
    ]
  },
  {
    enunciado: "El principio de causalidad en Kant se entiende como...",
    correcta: "...categoría del entendimiento que ordena la experiencia.",
    incorrectas: [
      "Un hecho empírico derivado de la observación.",
      "Una hipótesis arbitraria sin necesidad."
    ]
  },
  {
    enunciado: "La relación entre principios y categorías aristotélicas muestra que...",
    correcta: "...los principios se apoyan en modos fundamentales del ser.",
    incorrectas: [
      "Los principios son meras etiquetas lingüísticas.",
      "Las categorías son solo convenciones modernas."
    ]
  },
  {
    enunciado: "El principio de identidad es condición de inteligibilidad del discurso.",
    correcta: "Sin identidad no puede haber afirmaciones coherentes.",
    incorrectas: [
      "Sin identidad el lenguaje es más creativo.",
      "La identidad carece de relevancia en lógica."
    ]
  },
  {
    enunciado: "El principio de no contradicción es condición de verdad objetiva.",
    correcta: "Impide que lo verdadero y lo falso se confundan.",
    incorrectas: [
      "Permite que todo sea verdadero a la vez.",
      "Niega la posibilidad de verdad objetiva."
    ]
  },
  {
    enunciado: "El principio del tercero excluido es condición de certeza lógica.",
    correcta: "Una proposición debe ser verdadera o falsa.",
    incorrectas: [
      "Una proposición puede ser simultáneamente verdadera y falsa.",
      "Toda proposición carece de valor de verdad."
    ]
  },
  {
    enunciado: "Los trascendentales del ente (unidad, verdad, bondad) fundamentan...",
    correcta: "...los primeros principios filosóficos.",
    incorrectas: [
      "Las categorías psicológicas del individuo.",
      "Los experimentos de laboratorio."
    ]
  },
  {
    enunciado: "El principio de razón suficiente se aplica tanto a la lógica como a la metafísica.",
    correcta: "Busca fundamento en todo lo que existe y se piensa.",
    incorrectas: [
      "Se limita a la gramática del lenguaje.",
      "Niega la necesidad de explicación."
    ]
  },
  {
    enunciado: "En filosofía de la ciencia, los primeros principios son...",
    correcta: "...condiciones para la inteligibilidad del conocimiento científico.",
    incorrectas: [
      "Irrelevantes en cualquier teoría científica.",
      "Hipótesis particulares de laboratorio."
    ]
  },
  {
    enunciado: "El cuestionamiento posmoderno de los principios sostiene que...",
    correcta: "...no hay fundamentos universales indiscutibles.",
    incorrectas: [
      "Los principios son absolutos y eternos sin discusión.",
      "Los principios se reducen a fórmulas matemáticas."
    ]
  },
  {
    enunciado: "Aristóteles distinguía entre axiomas matemáticos y principios ontológicos.",
    correcta: "Los axiomas son propios de cada ciencia; los principios son comunes a todo saber.",
    incorrectas: [
      "Ambos términos son idénticos sin diferencia.",
      "Los principios se limitan a la aritmética."
    ]
  },
  {
    enunciado: "El relativismo filosófico cuestiona los principios porque...",
    correcta: "...sostiene que no hay reglas universales de pensamiento y ser.",
    incorrectas: [
      "Confirma la validez absoluta de todos los principios.",
      "Reafirma el principio de no contradicción como dogma."
    ]
  },
  {
    enunciado: "El principio de causalidad fue criticado por Hume al señalar que...",
    correcta: "...no hay impresión sensible de la necesidad causal.",
    incorrectas: [
      "La causalidad es evidente en la experiencia inmediata.",
      "La causalidad es un axioma matemático inmutable."
    ]
  },
  {
    enunciado: "Heidegger se interesó por los principios al analizar...",
    correcta: "...la nada y la pregunta por el ser más allá de la lógica formal.",
    incorrectas: [
      "Las categorías biológicas del ser humano.",
      "El cálculo matemático de proposiciones."
    ]
  },
  {
    enunciado: "En conclusión, los primeros principios constituyen...",
    correcta: "...el núcleo de la ontología y la condición de posibilidad del conocimiento.",
    incorrectas: [
      "Hipótesis contingentes sin valor universal.",
      "Reglas de etiqueta social sin relevancia filosófica."
    ]
  }
];
