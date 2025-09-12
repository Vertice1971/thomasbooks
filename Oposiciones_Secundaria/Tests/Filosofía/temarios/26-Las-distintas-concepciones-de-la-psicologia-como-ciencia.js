// temarios/26-Las-distintas-concepciones-de-la-psicologia-como-ciencia.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la psicología en su definición más general?",
    correcta: "El comportamiento y los procesos mentales de forma científica",
    incorrectas: [
      "Exclusivamente los fenómenos biológicos del cuerpo",
      "Solo los aspectos sociales de la conducta humana"
    ]
  },
  {
    enunciado: "¿Qué fundó Wilhelm Wundt en 1879 en Leipzig?",
    correcta: "El primer laboratorio de psicología experimental",
    incorrectas: [
      "El primer hospital de psiquiatría",
      "La primera asociación internacional de psicoanálisis"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la psicología introspectiva de Wundt?",
    correcta: "El análisis de la conciencia mediante introspección controlada",
    incorrectas: [
      "La reducción de la mente a respuestas mecánicas",
      "El estudio exclusivo de los sueños inconscientes"
    ]
  },
  {
    enunciado: "¿Qué defendía William James con el funcionalismo?",
    correcta: "El estudio de las funciones adaptativas de la mente y la conciencia",
    incorrectas: [
      "El rechazo de cualquier análisis empírico",
      "La reducción de la mente a instintos biológicos fijos"
    ]
  },
  {
    enunciado: "¿Qué principio central defendía John B. Watson?",
    correcta: "La psicología debía estudiar solo la conducta observable",
    incorrectas: [
      "La introspección era la única vía válida de conocimiento",
      "La conciencia podía medirse con aparatos fisiológicos"
    ]
  },
  {
    enunciado: "¿Qué desarrolló B. F. Skinner en el marco del conductismo?",
    correcta: "El condicionamiento operante y el análisis experimental de la conducta",
    incorrectas: [
      "El psicoanálisis de las pulsiones sexuales",
      "El enfoque fenomenológico de la percepción"
    ]
  },
  {
    enunciado: "¿Qué propone Freud en la psicología clínica?",
    correcta: "Una teoría psicodinámica centrada en el inconsciente y los conflictos internos",
    incorrectas: [
      "Una explicación puramente conductual de la mente",
      "Una visión biológica sin referencia a lo psíquico"
    ]
  },
  {
    enunciado: "¿Qué aportó la escuela Gestalt?",
    correcta: "El estudio de la percepción y las leyes de organización de la experiencia",
    incorrectas: [
      "El análisis estadístico exclusivo de conductas",
      "La descripción de síntomas psiquiátricos sin teoría"
    ]
  },
  {
    enunciado: "¿Qué defiende la psicología humanista?",
    correcta: "El enfoque en la libertad, la autorrealización y la experiencia subjetiva",
    incorrectas: [
      "La exclusión de toda subjetividad en la investigación",
      "La idea de que el ser humano es solo un animal condicionado"
    ]
  },
  {
    enunciado: "¿Qué psicólogo está asociado a la psicología humanista centrada en la persona?",
    correcta: "Carl Rogers",
    incorrectas: [
      "Wilhelm Wundt",
      "John B. Watson"
    ]
  },
  {
    enunciado: "¿Qué estudia la psicología cognitiva?",
    correcta: "Procesos como percepción, memoria, pensamiento y lenguaje",
    incorrectas: [
      "Solo los reflejos biológicos del sistema nervioso",
      "Los instintos inconscientes sin referencia al pensamiento"
    ]
  },
  {
    enunciado: "¿Qué aportó Jean Piaget a la psicología?",
    correcta: "Una teoría del desarrollo cognitivo en etapas",
    incorrectas: [
      "Un modelo de condicionamiento clásico",
      "Un método de introspección experimental"
    ]
  },
  {
    enunciado: "¿Qué defendió Vygotsky sobre el aprendizaje?",
    correcta: "El papel central del contexto social y cultural",
    incorrectas: [
      "El aislamiento del individuo respecto al entorno",
      "La irrelevancia del lenguaje en el desarrollo"
    ]
  },
  {
    enunciado: "¿Qué estudia la neuropsicología?",
    correcta: "La relación entre procesos cerebrales y conducta",
    incorrectas: [
      "La interpretación de símbolos culturales",
      "La introspección sobre los contenidos del inconsciente"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la psicología social?",
    correcta: "El estudio de la influencia de normas, roles y contextos en la conducta",
    incorrectas: [
      "La descripción de instintos biológicos universales",
      "El análisis exclusivo de la memoria individual"
    ]
  },
  {
    enunciado: "¿Qué busca la psicología evolutiva o del desarrollo?",
    correcta: "Comprender los cambios cognitivos, emocionales y sociales a lo largo de la vida",
    incorrectas: [
      "Negar la importancia del aprendizaje social",
      "Reducir el desarrollo a impulsos inconscientes"
    ]
  },
  {
    enunciado: "¿Qué cuestionó Noam Chomsky al conductismo de Skinner?",
    correcta: "Que el lenguaje no podía explicarse solo por condicionamiento",
    incorrectas: [
      "Que el inconsciente no influye en la conducta",
      "Que la psicología debía limitarse a la introspección"
    ]
  },
  {
    enunciado: "¿Qué estudia la psicología positiva?",
    correcta: "El bienestar, las fortalezas personales y la resiliencia",
    incorrectas: [
      "Solo los trastornos mentales graves",
      "Exclusivamente la percepción sensorial"
    ]
  },
  {
    enunciado: "¿Qué defendió Albert Ellis en la terapia racional-emotiva conductual?",
    correcta: "Que las emociones dependen de creencias y pensamientos que pueden modificarse",
    incorrectas: [
      "Que la mente es inaccesible a la intervención",
      "Que el inconsciente determina todo sin posibilidad de cambio"
    ]
  },
  {
    enunciado: "¿Qué aportó Aaron Beck con su terapia cognitiva?",
    correcta: "La identificación y modificación de pensamientos automáticos disfuncionales",
    incorrectas: [
      "La interpretación de sueños como vía exclusiva de terapia",
      "El uso del condicionamiento clásico para tratar fobias"
    ]
  },
  {
    enunciado: "¿Qué concepto clave desarrolló Albert Bandura?",
    correcta: "La autoeficacia y el aprendizaje social por observación",
    incorrectas: [
      "La idea de represión como núcleo de la mente",
      "El principio de placer como única motivación"
    ]
  },
  {
    enunciado: "¿Qué representa la terapia cognitivo-conductual (TCC)?",
    correcta: "Una integración de técnicas cognitivas y conductuales para la intervención clínica",
    incorrectas: [
      "Un rechazo de toda terapia basada en la conducta",
      "Una orientación exclusivamente humanista sin método empírico"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica hay entre la terapia de Ellis y la de Beck?",
    correcta: "Ellis se centra en creencias irracionales, Beck en esquemas y pensamientos automáticos",
    incorrectas: [
      "Beck niega la influencia de la cognición, Ellis la defiende",
      "Ambos rechazaron la importancia de modificar pensamientos"
    ]
  },
  {
    enunciado: "¿Qué aplicación tiene la psicología en la educación?",
    correcta: "Estudia procesos de aprendizaje, motivación y orientación psicopedagógica",
    incorrectas: [
      "Analiza únicamente la biología del cerebro",
      "Excluye el contexto social del aprendizaje"
    ]
  },
  {
    enunciado: "¿Qué aporta la psicología clínica a la sociedad?",
    correcta: "La prevención y tratamiento de trastornos mentales",
    incorrectas: [
      "La observación pasiva sin intervención práctica",
      "El rechazo a toda aplicación terapéutica"
    ]
  },
  {
    enunciado: "¿Qué función cumple la psicología en las organizaciones?",
    correcta: "Optimizar la motivación, el liderazgo y las relaciones laborales",
    incorrectas: [
      "Desarrollar teorías metafísicas sobre el alma",
      "Limitarse a medir reflejos sensoriales"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la psicología en la medicina?",
    correcta: "Aporta comprensión del comportamiento y factores psicológicos en la salud",
    incorrectas: [
      "Sustituye por completo la biología médica",
      "Niega cualquier vínculo entre mente y cuerpo"
    ]
  },
  {
    enunciado: "¿Qué implica la psicología intercultural?",
    correcta: "Estudia cómo las diferencias culturales afectan al comportamiento y la mente",
    incorrectas: [
      "Afirma que todas las culturas son idénticas en su psicología",
      "Rechaza el papel de la cultura en la conducta"
    ]
  },
  {
    enunciado: "¿Qué es la neurociencia cognitiva?",
    correcta: "La investigación de los procesos mentales en relación con la actividad cerebral",
    incorrectas: [
      "El análisis filosófico sin referencia a la biología",
      "El estudio exclusivo de la conducta sin procesos internos"
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental existe entre conductismo y cognitivismo?",
    correcta: "El conductismo centra el análisis en la conducta observable, el cognitivismo en los procesos mentales",
    incorrectas: [
      "El conductismo estudia la cultura, el cognitivismo la biología",
      "El conductismo analiza el inconsciente, el cognitivismo lo rechaza"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la psicología para la filosofía?",
    correcta: "Conecta el análisis de la mente y la conducta con la reflexión sobre la condición humana",
    incorrectas: [
      "Sustituye a la filosofía como ciencia total",
      "Carece de vínculos con la reflexión filosófica"
    ]
  },
  {
    enunciado: "¿Qué distingue a la psicología como disciplina científica?",
    correcta: "El uso de métodos empíricos y experimentales para validar teorías",
    incorrectas: [
      "La confianza en la introspección privada sin control",
      "La ausencia de toda relación con la experimentación"
    ]
  },
  {
    enunciado: "¿Qué significa considerar a la psicología como puente entre ciencias naturales y humanas?",
    correcta: "Que integra explicaciones biológicas y culturales para comprender al ser humano",
    incorrectas: [
      "Que sustituye a las ciencias sociales",
      "Que elimina el valor de la biología en la conducta"
    ]
  },
  {
    enunciado: "¿Qué representa hoy la diversidad de concepciones psicológicas?",
    correcta: "La complejidad del objeto de estudio: mente, conducta, sociedad y cultura",
    incorrectas: [
      "Una debilidad disciplinar sin valor científico",
      "La imposibilidad de integrar distintas perspectivas"
    ]
  }
];
