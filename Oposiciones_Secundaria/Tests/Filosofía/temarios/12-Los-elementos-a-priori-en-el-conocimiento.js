// temarios/12-Los-elementos-a-priori-en-el-conocimiento.js
var PREGUNTAS = [
  {
    enunciado: "El conocimiento a priori se caracteriza por su independencia de la experiencia y por su validez necesaria y universal.",
    correcta: "Verdadero.",
    incorrectas: [
      "Falso, siempre depende de la experiencia y es contingente.",
      "Falso, es particular y cambia según cada observación."
    ]
  },
  {
    enunciado: "La distinción entre a priori y a posteriori, tal como se emplea en la epistemología moderna, se consolida especialmente a partir de la obra de Kant.",
    correcta: "Verdadero.",
    incorrectas: [
      "Falso, se consolida por primera vez en el positivismo lógico del siglo XX.",
      "Falso, se debe exclusivamente a Hume sin aportaciones posteriores."
    ]
  },
  {
    enunciado: "Según Kant, las formas puras de la intuición son el espacio y el tiempo, que condicionan toda percepción sensible.",
    correcta: "El espacio y el tiempo son condiciones a priori de toda experiencia posible.",
    incorrectas: [
      "El espacio y el tiempo son contenidos empíricos derivados de la inducción.",
      "El espacio y el tiempo son ideas regulativas sin papel en la sensibilidad."
    ]
  },
  {
    enunciado: "Las categorías del entendimiento en Kant actúan como conceptos puros que ordenan la multiplicidad de la intuición.",
    correcta: "Las categorías sintetizan los datos sensibles en juicios con validez objetiva.",
    incorrectas: [
      "Las categorías describen objetos en sí mismos independientemente del sujeto.",
      "Las categorías son hábitos psicológicos sin estructura racional."
    ]
  },
  {
    enunciado: "Las ideas trascendentales de la razón (alma, mundo y Dios) tienen función fundamentalmente regulativa.",
    correcta: "Orientan la investigación hacia la totalidad sin aportar conocimiento constitutivo de objetos.",
    incorrectas: [
      "Constituyen objetos empíricos accesibles por observación directa.",
      "Funcionan como axiomas demostrables en física experimental."
    ]
  },
  {
    enunciado: "La distinción kantiana fenómeno/noúmeno delimita el alcance del conocimiento humano.",
    correcta: "Solo conocemos fenómenos, mientras que el noúmeno es incognoscible para la teoría.",
    incorrectas: [
      "El noúmeno es el objeto principal de la ciencia empírica.",
      "Fenómeno y noúmeno son sinónimos usados indistintamente."
    ]
  },
  {
    enunciado: "Los juicios sintéticos a priori, según Kant, son necesarios para fundamentar la ciencia.",
    correcta: "Aportan ampliación de conocimiento con necesidad y universalidad.",
    incorrectas: [
      "Son redundantes porque toda ciencia es puramente analítica.",
      "Son imposibles porque la síntesis siempre es empírica."
    ]
  },
  {
    enunciado: "En la matemática kantiana, la geometría se vincula al espacio como forma pura de la intuición.",
    correcta: "La validez de la geometría se explica por la intuición pura del espacio.",
    incorrectas: [
      "La geometría es exclusivamente un sistema de definiciones nominales.",
      "La geometría depende de conteos empíricos reiterados."
    ]
  },
  {
    enunciado: "En la matemática kantiana, la aritmética se vincula al tiempo como forma pura de la intuición.",
    correcta: "El número se construye mediante la sucesión temporal en la intuición interna.",
    incorrectas: [
      "El número es una mera etiqueta lingüística sin relación con la intuición.",
      "La aritmética se deduce por inducción a partir de series empíricas."
    ]
  },
  {
    enunciado: "La ‘deducción trascendental’ en Kant pretende justificar la validez objetiva de las categorías.",
    correcta: "Muestra cómo las categorías se aplican legítimamente a los fenómenos.",
    incorrectas: [
      "Demuestra la existencia del noúmeno como objeto cognoscible.",
      "Sustituye las categorías por principios empíricos generales."
    ]
  },
  {
    enunciado: "La unidad de la apercepción trascendental desempeña un papel central en la síntesis del conocimiento.",
    correcta: "El ‘yo pienso’ debe poder acompañar todas mis representaciones para que haya objetividad.",
    incorrectas: [
      "Es una hipótesis empírica sobre la memoria a corto plazo.",
      "Es un postulado teológico que no afecta a la cognición."
    ]
  },
  {
    enunciado: "El esquematismo trascendental pone en relación categorías y sensibilidad mediante ‘esquemas’.",
    correcta: "Los esquemas temporales median entre conceptos puros y la intuición sensible.",
    incorrectas: [
      "Los esquemas son definiciones lexicográficas de las categorías.",
      "Los esquemas son impresiones empíricas repetidas estadísticamente."
    ]
  },
  {
    enunciado: "La categoría de causalidad en Kant no proviene de la inducción humeana.",
    correcta: "La causalidad es una categoría a priori del entendimiento aplicada a fenómenos.",
    incorrectas: [
      "La causalidad es un hábito psicológico sin base racional.",
      "La causalidad es una propiedad del noúmeno demostrable empíricamente."
    ]
  },
  {
    enunciado: "Para Kant, la metafísica como ciencia teórica de lo suprasensible es inviable.",
    correcta: "La razón pura teórica no puede conocer objetos más allá de la experiencia posible.",
    incorrectas: [
      "La metafísica se demuestra experimentalmente en laboratorio.",
      "La metafísica sustituye a la física en la explicación de la naturaleza."
    ]
  },
  {
    enunciado: "Las antinomias de la razón muestran conflictos cuando esta excede el campo de la experiencia.",
    correcta: "La razón incurre en contradicciones al intentar conocer lo incondicionado.",
    incorrectas: [
      "Las antinomias prueban empíricamente la existencia de Dios.",
      "Las antinomias son errores gramaticales en el lenguaje común."
    ]
  },
  {
    enunciado: "El racionalismo clásico defendía en diferente medida la existencia de verdades innatas.",
    correcta: "Descartes y Leibniz sostuvieron la prioridad de la razón frente a la experiencia.",
    incorrectas: [
      "Hume defendió la doctrina de las ideas innatas contra Descartes.",
      "Locke afirmó que las matemáticas son innatas y no aprendidas."
    ]
  },
  {
    enunciado: "El empirismo de Hume puso en duda la necesidad y universalidad de la causalidad.",
    correcta: "Hume interpretó la causalidad como hábito derivado de la costumbre.",
    incorrectas: [
      "Hume sostuvo que la causalidad es un axioma lógico autoevidente.",
      "Hume demostró experimentalmente la existencia del noúmeno."
    ]
  },
  {
    enunciado: "La crítica de Quine a la distinción analítico/sintético afecta indirectamente a la noción de a priori.",
    correcta: "Quine cuestionó la separación tajante entre verdades analíticas y sintéticas.",
    incorrectas: [
      "Quine defendió que todo enunciado científico es estrictamente analítico.",
      "Quine redujo el a priori a verdades reveladas teológicas."
    ]
  },
  {
    enunciado: "El a priori lingüístico vincula la necesidad a reglas de uso del lenguaje.",
    correcta: "Ciertas ‘necesidades’ se entienden como rasgos de nuestras prácticas lingüísticas.",
    incorrectas: [
      "El lenguaje no interviene nunca en la constitución de la necesidad.",
      "La necesidad depende exclusivamente de correlaciones empíricas."
    ]
  },
  {
    enunciado: "Husserl amplía la noción de a priori introduciendo un ‘a priori material’.",
    correcta: "Existen estructuras eidéticas de contenido que no son meramente formales.",
    incorrectas: [
      "Todo a priori es únicamente lógico-formal sin contenidos.",
      "El a priori material es una hipótesis psicológica sobre percepciones."
    ]
  },
  {
    enunciado: "Para el convencionalismo de Poincaré, ciertos principios fundamentales se eligen por conveniencia.",
    correcta: "Algunas estructuras se adoptan como convenciones que organizan la experiencia.",
    incorrectas: [
      "Todos los principios se deducen empíricamente sin intervención de la razón.",
      "Las convenciones son supersticiones sin relevancia científica."
    ]
  },
  {
    enunciado: "Reichenbach introdujo la idea de ‘definiciones coordinativas’ en filosofía de la ciencia.",
    correcta: "Determinadas elecciones coordinan conceptos teóricos con magnitudes observables.",
    incorrectas: [
      "Las definiciones coordinativas son dogmas metafísicos inmutables.",
      "El término niega toda relación entre teoría y observación."
    ]
  },
  {
    enunciado: "Kuhn historiciza el a priori al hablar de paradigmas científicos.",
    correcta: "Los paradigmas funcionan como marcos que configuran qué cuenta como conocimiento.",
    incorrectas: [
      "Los paradigmas son listas cerradas de hechos empíricos indiscutibles.",
      "Un paradigma es un conjunto de creencias privadas sin dimensión pública."
    ]
  },
  {
    enunciado: "Strawson y la analítica postkantiana recuperaron rasgos estructurales del proyecto crítico.",
    correcta: "Se analizan condiciones conceptuales de posibilidad de la experiencia objetiva.",
    incorrectas: [
      "Se niega que existan condiciones conceptuales en el conocimiento.",
      "Se reduce la filosofía a encuestas psicológicas sobre percepción."
    ]
  },
  {
    enunciado: "La epistemología contemporánea ha propuesto la noción de ‘a priori constitutivo’.",
    correcta: "Ciertas estructuras son condiciones de posibilidad para prácticas cognitivas concretas.",
    incorrectas: [
      "El a priori constitutivo es un dogma teológico independiente del conocimiento.",
      "El a priori constitutivo equivale a una regularidad estadística contingente."
    ]
  },
  {
    enunciado: "En ética, la ley moral en Kant posee validez a priori en el uso práctico de la razón.",
    correcta: "La moralidad no deriva de la experiencia sino del imperativo categórico.",
    incorrectas: [
      "La moralidad depende por completo de costumbres locales contingentes.",
      "La moralidad se basa en inclinaciones sensibles elevadas a leyes."
    ]
  },
  {
    enunciado: "Según Kant, la ciencia natural de su tiempo encuentra fundamento en juicios sintéticos a priori.",
    correcta: "La física newtoniana se comprende desde principios a priori aplicados a fenómenos.",
    incorrectas: [
      "La física se explica solo por enumeración de observaciones sin principios.",
      "La física depende de revelaciones no sujetas a crítica racional."
    ]
  },
  {
    enunciado: "El principio de no contradicción ocupa un lugar básico entre los principios lógicos.",
    correcta: "Ninguna proposición puede ser verdadera y falsa al mismo tiempo y en el mismo sentido.",
    incorrectas: [
      "Una proposición puede ser verdadera y falsa simultáneamente sin restricción.",
      "El principio se deriva empíricamente de conteos repetidos."
    ]
  },
  {
    enunciado: "La analiticidad, en sentido clásico, se vincula a la descomposición conceptual del predicado en el sujeto.",
    correcta: "Un juicio analítico no amplía conocimiento porque el predicado está contenido en el sujeto.",
    incorrectas: [
      "Un juicio analítico siempre describe hechos nuevos de la experiencia.",
      "Un juicio analítico se verifica exclusivamente por experimentos."
    ]
  },
  {
    enunciado: "Kant define la síntesis como operación que unifica representaciones dispersas bajo una regla.",
    correcta: "La síntesis produce unidad de la experiencia mediante categorías y esquemas.",
    incorrectas: [
      "La síntesis es un mero agregado sin regla común.",
      "La síntesis es un instinto biológico carente de normatividad."
    ]
  },
  {
    enunciado: "La noción de ‘reglas gramaticales’ en Wittgenstein sirve para repensar la necesidad.",
    correcta: "Las reglas de uso fijan condiciones de corrección que explican la apariencia de necesidad.",
    incorrectas: [
      "La necesidad se reduce a causalidad neuronal sin dimensión normativa.",
      "Las reglas gramaticales describen hechos naturales invariantes."
    ]
  },
  {
    enunciado: "La crítica contemporánea señala que el a priori puede ser revisable en función de cambios teóricos.",
    correcta: "Algunas estructuras consideradas a priori pueden ceder ante revoluciones conceptuales.",
    incorrectas: [
      "Nada considerado a priori puede ser discutido ni modificado jamás.",
      "Todo a priori es idéntico a un dogma religioso inmutable."
    ]
  },
  {
    enunciado: "Kripke distinguió entre necesidad/contingencia y a priori/a posteriori.",
    correcta: "Existen verdades necesarias conocidas a posteriori, como ciertas identidades físicas.",
    incorrectas: [
      "Toda necesidad es siempre conocida a priori sin excepción.",
      "Lo a posteriori es por definición imposible en enunciados necesarios."
    ]
  },
  {
    enunciado: "El papel de la lógica en la aprioricidad ha sido interpretado como constitutivo de la inferencia válida.",
    correcta: "Las leyes lógicas fijan normas de corrección para el razonamiento.",
    incorrectas: [
      "La lógica es una colección de supersticiones culturales.",
      "La validez lógica depende de sondeos empíricos de opinión."
    ]
  },
  {
    enunciado: "Las ciencias cognitivas han renovado el debate sobre estructuras innatas o predisposiciones.",
    correcta: "Ciertos mecanismos podrían funcionar como ‘andamiajes’ universales del aprendizaje.",
    incorrectas: [
      "Toda cognición es tabula rasa sin predisposición alguna.",
      "La innatidad equivale a la existencia de noúmenos empíricos."
    ]
  },
  {
    enunciado: "En la arquitectura del conocimiento, las condiciones a priori actúan como ‘marcos’ de posibilidad.",
    correcta: "Sin esas condiciones no habría objetividad ni experiencia unificada.",
    incorrectas: [
      "La objetividad es independiente de cualquier marco conceptual.",
      "La experiencia se organiza sola sin principio alguno."
    ]
  },
  {
    enunciado: "La diferencia entre condiciones formales y materiales es decisiva en la teoría kantiana.",
    correcta: "Lo a priori aporta formas, mientras que el contenido proviene de la sensibilidad.",
    incorrectas: [
      "Lo a priori determina por sí mismo los contenidos empíricos particulares.",
      "No existe diferencia alguna entre forma y materia del conocimiento."
    ]
  },
  {
    enunciado: "Las categorías de relación incluyen, entre otras, sustancia/accidente, causalidad y comunidad.",
    correcta: "Estas categorías articulan conexiones objetivas entre fenómenos.",
    incorrectas: [
      "Las categorías de relación son meras preferencias estilísticas del lenguaje.",
      "Las categorías de relación son ideas religiosas sin alcance cognitivo."
    ]
  },
  {
    enunciado: "El principio ‘los pensamientos sin contenido son vacíos; las intuiciones sin conceptos son ciegas’ resume una tesis central.",
    correcta: "Conocimiento requiere tanto intuición sensible como concepto.",
    incorrectas: [
      "El conocimiento prescinde de toda intuición sensible.",
      "El conocimiento prescinde de toda conceptualidad."
    ]
  },
  {
    enunciado: "En la crítica de la razón, el límite del conocimiento es también condición de su posibilidad.",
    correcta: "Delimitar el alcance evita ilusiones y asegura validez objetiva.",
    incorrectas: [
      "Imponer límites anula la posibilidad de toda ciencia.",
      "El conocimiento crece negando cualquier tipo de límite."
    ]
  },
  {
    enunciado: "Comprender los elementos a priori permite clarificar la objetividad y los límites del saber.",
    correcta: "El análisis de condiciones formales ilumina cómo es posible conocer con necesidad y universalidad.",
    incorrectas: [
      "El análisis de condiciones formales impide formular leyes científicas.",
      "El análisis de condiciones formales elimina toda discusión filosófica."
    ]
  }
];
