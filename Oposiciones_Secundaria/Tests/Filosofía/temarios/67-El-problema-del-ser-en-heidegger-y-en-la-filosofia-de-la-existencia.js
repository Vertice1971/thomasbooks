// temarios/67-El-problema-del-ser-en-heidegger-y-en-la-filosofia-de-la-existencia.js
// Basado en la plantilla 0-Plantilla-temario.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la obra fundamental de Heidegger donde plantea el problema del ser?",
    correcta: "Ser y tiempo (1927)",
    incorrectas: [
      "El ser y la nada (1943)",
      "Crítica de la razón pura (1781)"
    ]
  },
  {
    enunciado: "¿Qué denuncia Heidegger como olvido en la tradición filosófica?",
    correcta: "El olvido del ser, reducido a mero ente",
    incorrectas: [
      "El olvido del alma inmortal",
      "El olvido del método científico"
    ]
  },
  {
    enunciado: "¿Qué significa Dasein en la terminología heideggeriana?",
    correcta: "El ser-ahí humano, capaz de preguntarse por el ser",
    incorrectas: [
      "El conjunto de entes naturales",
      "Un concepto metafísico de sustancia eterna"
    ]
  },
  {
    enunciado: "¿Cómo caracteriza Heidegger la existencia del Dasein?",
    correcta: "Como ser-en-el-mundo, abierto a posibilidades y arrojado en facticidad",
    incorrectas: [
      "Como sustancia inmóvil e inmutable",
      "Como espíritu puro separado del mundo"
    ]
  },
  {
    enunciado: "¿Qué estructura existencial señala que el Dasein está inmerso en un contexto previo?",
    correcta: "La facticidad",
    incorrectas: [
      "La sustancialidad",
      "La perfección"
    ]
  },
  {
    enunciado: "¿Qué significa el existenciario ser-con (Mitsein)?",
    correcta: "Que la existencia es siempre en relación con otros",
    incorrectas: [
      "Que el ser humano es autosuficiente y aislado",
      "Que la vida auténtica consiste en retirarse de toda comunidad"
    ]
  },
  {
    enunciado: "¿Qué revela la angustia en Heidegger?",
    correcta: "La nada y la finitud del Dasein",
    incorrectas: [
      "Un simple estado patológico",
      "La seguridad de una vida eterna"
    ]
  },
  {
    enunciado: "¿Qué significa ser-para-la-muerte?",
    correcta: "Que la conciencia de la finitud otorga autenticidad",
    incorrectas: [
      "Que la muerte es una ilusión sin importancia",
      "Que la muerte es un mal absoluto que debe negarse"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre autenticidad e inautenticidad?",
    correcta: "Autenticidad es apropiación de la propia existencia; inautenticidad es diluirse en el 'uno'",
    incorrectas: [
      "Autenticidad es cumplir normas; inautenticidad es violarlas",
      "Autenticidad es vivir en soledad; inautenticidad en comunidad"
    ]
  },
  {
    enunciado: "¿Qué representa 'el uno' (das Man) en Ser y tiempo?",
    correcta: "La impersonalidad de la vida cotidiana que diluye la responsabilidad individual",
    incorrectas: [
      "La unidad metafísica de todos los seres",
      "La figura de un dios creador"
    ]
  },
  {
    enunciado: "¿Qué crítica dirige Heidegger al sujeto cartesiano?",
    correcta: "Que concibe al ser humano como conciencia aislada frente al mundo",
    incorrectas: [
      "Que fundamenta la filosofía en la duda",
      "Que defiende la matemática como ciencia rigurosa"
    ]
  },
  {
    enunciado: "¿Cuál es la relación entre tiempo y ser en Heidegger?",
    correcta: "El tiempo es el horizonte en el que se comprende el sentido del ser",
    incorrectas: [
      "El tiempo es una ilusión creada por la mente",
      "El tiempo es una entidad física independiente del ser"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la hermenéutica de Heidegger?",
    correcta: "Interpretar la existencia desde dentro de su propio horizonte de sentido",
    incorrectas: [
      "Aplicar reglas lógicas a textos antiguos",
      "Buscar definiciones universales e inmutables"
    ]
  },
  {
    enunciado: "¿Qué filósofo inspiró a Heidegger con la noción de existencia individual?",
    correcta: "Kierkegaard",
    incorrectas: [
      "Descartes",
      "Hegel"
    ]
  },
  {
    enunciado: "¿Qué filósofo existencial subrayó la comunicación y las situaciones límite?",
    correcta: "Karl Jaspers",
    incorrectas: [
      "Jean-Paul Sartre",
      "Maurice Merleau-Ponty"
    ]
  },
  {
    enunciado: "¿Qué noción central desarrolla Sartre en El ser y la nada?",
    correcta: "La libertad radical y la responsabilidad del ser humano",
    incorrectas: [
      "La necesidad del determinismo científico",
      "La primacía del ser absoluto sobre el hombre"
    ]
  },
  {
    enunciado: "¿Qué aporta Merleau-Ponty a la filosofía de la existencia?",
    correcta: "La centralidad del cuerpo y la percepción en la experiencia",
    incorrectas: [
      "La primacía de la lógica formal sobre la vida",
      "La negación del mundo sensible"
    ]
  },
  {
    enunciado: "¿Qué distingue a Heidegger de los existencialistas?",
    correcta: "Parte de la pregunta ontológica por el sentido del ser, no solo de la existencia individual",
    incorrectas: [
      "Niega la importancia de la ontología",
      "Rechaza la influencia de Kierkegaard y Husserl"
    ]
  },
  {
    enunciado: "¿Qué significa el concepto de 'proyecto arrojado'?",
    correcta: "El Dasein proyecta posibilidades, pero siempre desde una facticidad que no elige",
    incorrectas: [
      "El ser humano carece de libertad alguna",
      "El proyecto vital es planificado racionalmente desde el inicio"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa la técnica en la reflexión posterior de Heidegger?",
    correcta: "La técnica moderna es una forma de desocultamiento del ser que puede encubrirlo",
    incorrectas: [
      "La técnica es la máxima realización de la esencia humana",
      "La técnica es un mal absoluto sin relación con el ser"
    ]
  },
  {
    enunciado: "¿Qué relación establece Heidegger entre ser y lenguaje?",
    correcta: "El lenguaje es la casa del ser, donde el ser se manifiesta",
    incorrectas: [
      "El lenguaje es solo un instrumento neutro",
      "El lenguaje es un obstáculo para pensar el ser"
    ]
  },
  {
    enunciado: "¿Qué significa que el Dasein es apertura (Erschlossenheit)?",
    correcta: "Que está siempre abierto al mundo y a sus posibilidades",
    incorrectas: [
      "Que puede cerrarse totalmente al mundo",
      "Que vive aislado de todo contexto"
    ]
  },
  {
    enunciado: "¿Qué papel juega la nada en Heidegger?",
    correcta: "La nada se experimenta en la angustia y abre la pregunta por el ser",
    incorrectas: [
      "La nada es un ente particular",
      "La nada es inexistente y carente de valor filosófico"
    ]
  },
  {
    enunciado: "¿Qué significa la expresión 'ser-en-el-mundo'?",
    correcta: "Que la existencia humana está siempre situada en un mundo compartido y significativo",
    incorrectas: [
      "Que el ser humano es independiente de su entorno",
      "Que el mundo es una ilusión subjetiva"
    ]
  },
  {
    enunciado: "¿Qué define la autenticidad del Dasein?",
    correcta: "La apropiación consciente de la propia finitud y libertad",
    incorrectas: [
      "El sometimiento a las normas sociales",
      "La renuncia a toda decisión personal"
    ]
  },
  {
    enunciado: "¿Qué filósofo criticó a Heidegger desde la ética de la alteridad?",
    correcta: "Emmanuel Levinas",
    incorrectas: [
      "Hans-Georg Gadamer",
      "Paul Ricoeur"
    ]
  },
  {
    enunciado: "¿Qué significa la temporalidad en la analítica existencial?",
    correcta: "Que el ser del Dasein se comprende en la estructura de pasado, presente y futuro",
    incorrectas: [
      "Que el tiempo es lineal e independiente del ser",
      "Que la eternidad es la esencia del hombre"
    ]
  },
  {
    enunciado: "¿Qué crítica hace Heidegger a la metafísica clásica?",
    correcta: "Reducir el ser a sustancia o causa y olvidar su sentido originario",
    incorrectas: [
      "Negar la importancia de los entes sensibles",
      "Oponer alma y cuerpo como realidades separadas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la hermenéutica filosófica de Gadamer, discípulo de Heidegger?",
    correcta: "La comprensión como acontecimiento histórico-lingüístico",
    incorrectas: [
      "La deducción de principios universales a priori",
      "La reducción de la filosofía a lógica simbólica"
    ]
  },
  {
    enunciado: "¿Qué significa que el Dasein es ser-posibilidad?",
    correcta: "Que su esencia reside en proyectarse hacia posibilidades futuras",
    incorrectas: [
      "Que está determinado de manera fija e inmutable",
      "Que carece de toda libertad real"
    ]
  },
  {
    enunciado: "¿Qué distingue la angustia del miedo en Heidegger?",
    correcta: "El miedo se dirige a algo concreto; la angustia revela la nada misma",
    incorrectas: [
      "Ambos son idénticos y equivalentes",
      "La angustia es un simple trastorno psicológico"
    ]
  },
  {
    enunciado: "¿Qué aporta la filosofía de Heidegger a la literatura y el arte?",
    correcta: "Una reflexión sobre el sentido, la alienación y la autenticidad en la modernidad",
    incorrectas: [
      "Un método lógico para analizar la métrica poética",
      "Un sistema normativo para juzgar el arte"
    ]
  },
  {
    enunciado: "¿Qué significa 'existencia' en la filosofía de la existencia?",
    correcta: "La condición humana marcada por libertad, finitud y responsabilidad",
    incorrectas: [
      "La presencia de sustancias eternas",
      "La vida biológica sin dimensión espiritual"
    ]
  },
  {
    enunciado: "¿Qué filósofo existencial defendió el salto de fe como acto decisivo?",
    correcta: "Kierkegaard",
    incorrectas: [
      "Jaspers",
      "Sartre"
    ]
  },
  {
    enunciado: "¿Qué significa que el ser humano es un ser arrojado?",
    correcta: "Que nace en un contexto y situación que no elige",
    incorrectas: [
      "Que controla plenamente su origen y destino",
      "Que vive fuera de toda circunstancia"
    ]
  },
  {
    enunciado: "¿Qué relación tiene la autenticidad con la muerte?",
    correcta: "La anticipación de la muerte permite una existencia auténtica",
    incorrectas: [
      "La muerte carece de relevancia en la vida humana",
      "La muerte es una ilusión cultural"
    ]
  },
  {
    enunciado: "¿Qué repercusiones tuvo Heidegger en la filosofía contemporánea?",
    correcta: "Inspiró la hermenéutica, la deconstrucción y la crítica de la técnica",
    incorrectas: [
      "Reinstauró la metafísica medieval",
      "Negó la importancia del lenguaje en filosofía"
    ]
  },
  {
    enunciado: "¿Qué significa que la filosofía de Heidegger sea ontología fundamental?",
    correcta: "Que busca el sentido del ser como condición previa a cualquier ciencia",
    incorrectas: [
      "Que se centra exclusivamente en los entes materiales",
      "Que es un sistema metafísico acabado"
    ]
  }
];
