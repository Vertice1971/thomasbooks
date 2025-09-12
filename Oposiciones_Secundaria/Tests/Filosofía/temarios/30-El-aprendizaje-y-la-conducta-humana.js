// temarios/30-El-aprendizaje-y-la-conducta-humana.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por aprendizaje en psicología contemporánea?",
    correcta: "Un cambio relativamente duradero en la conducta o en el conocimiento como resultado de la experiencia",
    incorrectas: [
      "Un cambio momentáneo provocado por estímulos externos pasajeros",
      "Un proceso exclusivamente biológico independiente de la experiencia"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia principal entre aprendizaje y maduración?",
    correcta: "El aprendizaje depende de la experiencia y la interacción con el medio, mientras la maduración es un proceso biológico",
    incorrectas: [
      "La maduración depende de la experiencia y el aprendizaje de factores genéticos",
      "Ambos procesos son idénticos y solo se distinguen por su velocidad"
    ]
  },
  {
    enunciado: "¿Qué aportación hizo Pavlov al estudio del aprendizaje?",
    correcta: "El descubrimiento del condicionamiento clásico mediante la asociación entre estímulo y respuesta",
    incorrectas: [
      "La teoría de la autoeficacia como motor de la conducta",
      "El concepto de zona de desarrollo próximo"
    ]
  },
  {
    enunciado: "¿Qué ejemplo clásico ilustra el condicionamiento clásico de Pavlov?",
    correcta: "El perro que salivaba al escuchar la campana previamente asociada a la comida",
    incorrectas: [
      "El niño que imita la conducta agresiva de un adulto",
      "El estudiante que organiza la información en esquemas previos"
    ]
  },
  {
    enunciado: "¿Qué estudió Skinner con la 'caja de Skinner'?",
    correcta: "El condicionamiento operante y los efectos del refuerzo y el castigo en la conducta",
    incorrectas: [
      "El aprendizaje significativo en contextos escolares",
      "La influencia de la disonancia cognitiva en la toma de decisiones"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia entre refuerzo positivo y negativo en la teoría de Skinner?",
    correcta: "El refuerzo positivo añade un estímulo agradable y el negativo elimina uno desagradable",
    incorrectas: [
      "El positivo castiga la conducta y el negativo la refuerza",
      "Ambos son equivalentes y producen idénticos efectos"
    ]
  },
  {
    enunciado: "¿Qué plantea Bandura con su teoría del aprendizaje social?",
    correcta: "Que gran parte del aprendizaje se produce por observación e imitación de modelos",
    incorrectas: [
      "Que todo aprendizaje depende de la asociación mecánica de estímulos",
      "Que los refuerzos externos son los únicos determinantes de la conducta"
    ]
  },
  {
    enunciado: "¿Qué experimento hizo famoso a Bandura?",
    correcta: "El experimento del muñeco Bobo, donde niños imitaban conductas agresivas observadas",
    incorrectas: [
      "El experimento de los reflejos condicionados en perros",
      "La prueba de asociación de palabras para medir la memoria"
    ]
  },
  {
    enunciado: "¿Qué concepto introdujo Bandura para explicar la percepción de eficacia personal?",
    correcta: "La autoeficacia",
    incorrectas: [
      "La zona de desarrollo próximo",
      "La inteligencia múltiple"
    ]
  },
  {
    enunciado: "¿Qué sostiene Piaget en su teoría del aprendizaje?",
    correcta: "Que el aprendizaje está ligado a etapas del desarrollo cognitivo",
    incorrectas: [
      "Que el aprendizaje depende solo de refuerzos externos",
      "Que los conocimientos se transmiten sin relación con el desarrollo evolutivo"
    ]
  },
  {
    enunciado: "¿Qué son las etapas del desarrollo cognitivo de Piaget?",
    correcta: "Períodos sucesivos en los que la persona adquiere estructuras cognitivas cualitativamente distintas",
    incorrectas: [
      "Fases en las que aumenta únicamente la cantidad de información memorizada",
      "Momentos en los que se refuerza exclusivamente la conducta observada"
    ]
  },
  {
    enunciado: "¿Qué propone Ausubel con el aprendizaje significativo?",
    correcta: "Que el aprendizaje ocurre cuando los nuevos contenidos se relacionan con los conocimientos previos",
    incorrectas: [
      "Que el aprendizaje consiste en repetir mecánicamente la información",
      "Que la memorización literal es la forma más profunda de aprendizaje"
    ]
  },
  {
    enunciado: "¿Qué es un organizador previo en la teoría de Ausubel?",
    correcta: "Un recurso introductorio que facilita la conexión entre lo nuevo y lo ya conocido",
    incorrectas: [
      "Una técnica de castigo que elimina aprendizajes inadecuados",
      "Un refuerzo social que premia la imitación de modelos"
    ]
  },
  {
    enunciado: "¿Qué planteó Bruner en relación al aprendizaje?",
    correcta: "La importancia del descubrimiento guiado y de las formas de representación enactiva, icónica y simbólica",
    incorrectas: [
      "Que el aprendizaje debe basarse únicamente en el ensayo y error",
      "Que la instrucción directa es la única vía válida"
    ]
  },
  {
    enunciado: "¿Qué defendió Vygotski sobre el aprendizaje?",
    correcta: "Que es un proceso social mediado por el lenguaje y la interacción",
    incorrectas: [
      "Que depende únicamente de la biología del individuo",
      "Que la motivación extrínseca es suficiente para explicar todo aprendizaje"
    ]
  },
  {
    enunciado: "¿Qué es la zona de desarrollo próximo?",
    correcta: "La distancia entre lo que el alumnado puede hacer solo y lo que puede hacer con ayuda",
    incorrectas: [
      "El nivel máximo de esfuerzo fisiológico en el aprendizaje",
      "El intervalo de tiempo en que se consolidan los reflejos condicionados"
    ]
  },
  {
    enunciado: "¿Qué diferencia a la conducta de los animales y la humana en psicología evolutiva?",
    correcta: "La dimensión simbólica y cultural que media en el aprendizaje humano",
    incorrectas: [
      "La imposibilidad de los animales de aprender nada por imitación",
      "La total independencia del ser humano respecto a la biología"
    ]
  },
  {
    enunciado: "¿Qué relación establece Skinner entre aprendizaje y conducta?",
    correcta: "Que el aprendizaje se manifiesta en cambios de conducta controlados por refuerzos",
    incorrectas: [
      "Que el aprendizaje solo se mide por la acumulación de conocimientos teóricos",
      "Que la conducta es independiente de cualquier proceso de aprendizaje"
    ]
  },
  {
    enunciado: "¿Qué implica la disonancia cognitiva según Festinger?",
    correcta: "La incomodidad psicológica al mantener creencias y conductas contradictorias",
    incorrectas: [
      "La tendencia natural a imitar a los demás sin reflexión",
      "El olvido inmediato de la información que no se comprende"
    ]
  },
  {
    enunciado: "¿Qué papel juega el refuerzo en el control de la conducta?",
    correcta: "Aumenta la probabilidad de que se repita la conducta asociada",
    incorrectas: [
      "Disminuye automáticamente la motivación intrínseca",
      "Inhibe todo tipo de aprendizaje significativo"
    ]
  },
  {
    enunciado: "¿Qué significa el término 'conducta' en psicología científica?",
    correcta: "El conjunto de respuestas observables y medibles de un organismo",
    incorrectas: [
      "Los pensamientos internos inaccesibles a la observación",
      "Las intuiciones filosóficas que guían la vida"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre aprendizaje y cultura?",
    correcta: "La cultura transmite modelos, valores y normas que se aprenden en la socialización",
    incorrectas: [
      "La cultura es innata y no se transmite por aprendizaje",
      "El aprendizaje se produce al margen de la cultura"
    ]
  },
  {
    enunciado: "¿Qué perspectiva crítica introdujo Chomsky frente al conductismo?",
    correcta: "Que el lenguaje humano no puede explicarse solo por refuerzos, sino por estructuras innatas",
    incorrectas: [
      "Que el aprendizaje se basa únicamente en la repetición mecánica",
      "Que el conductismo es suficiente para explicar la creatividad lingüística"
    ]
  },
  {
    enunciado: "¿Qué planteó Locke respecto al origen del conocimiento?",
    correcta: "Que la mente es una tabula rasa que se llena con la experiencia",
    incorrectas: [
      "Que todo conocimiento es innato y anterior a la experiencia",
      "Que la mente humana es inmutable y no aprende"
    ]
  },
  {
    enunciado: "¿Qué función tiene el castigo en el condicionamiento operante?",
    correcta: "Disminuir la probabilidad de que una conducta se repita",
    incorrectas: [
      "Aumentar automáticamente la motivación intrínseca",
      "Transformar aprendizajes mecánicos en significativos"
    ]
  },
  {
    enunciado: "¿Qué significa aprendizaje vicario?",
    correcta: "Adquirir conductas observando las consecuencias que tienen en otros",
    incorrectas: [
      "Repetir sin comprensión los contenidos escolares",
      "Reforzar una conducta solo mediante la práctica individual"
    ]
  },
  {
    enunciado: "¿Qué autor planteó el aprendizaje experiencial como clave en educación?",
    correcta: "John Dewey",
    incorrectas: [
      "Ivan Pavlov",
      "Sigmund Freud"
    ]
  },
  {
    enunciado: "¿Qué aportó la neurociencia al estudio del aprendizaje?",
    correcta: "La demostración de la plasticidad cerebral y de los circuitos sinápticos implicados",
    incorrectas: [
      "La idea de que el cerebro es estático y no cambia con la experiencia",
      "La negación de cualquier base biológica del aprendizaje"
    ]
  },
  {
    enunciado: "¿Qué implicación filosófica surge del conductismo radical?",
    correcta: "El debate sobre la libertad humana frente al determinismo de los condicionamientos",
    incorrectas: [
      "La afirmación de que la conducta es independiente de los estímulos",
      "La defensa de que la libertad es innata e inmodificable"
    ]
  },
  {
    enunciado: "¿Qué papel atribuye Vygotski al lenguaje en el aprendizaje?",
    correcta: "El lenguaje es la herramienta mediadora principal en el desarrollo cognitivo",
    incorrectas: [
      "El lenguaje es un producto secundario sin relación con el aprendizaje",
      "El lenguaje se adquiere solo por repetición mecánica"
    ]
  },
  {
    enunciado: "¿Qué diferencia a un hábito de un aprendizaje puntual?",
    correcta: "El hábito implica repetición y consolidación en la conducta",
    incorrectas: [
      "El hábito se adquiere en un solo ensayo",
      "El aprendizaje puntual no puede transformarse nunca en hábito"
    ]
  },
  {
    enunciado: "¿Qué significa el aprendizaje situado?",
    correcta: "Que el conocimiento se adquiere en contextos concretos y con relevancia social",
    incorrectas: [
      "Que todo aprendizaje debe ser abstracto y universal",
      "Que el aprendizaje se da únicamente en situaciones escolares formales"
    ]
  },
  {
    enunciado: "¿Qué defendió Foucault sobre el aprendizaje y el poder?",
    correcta: "Que el aprendizaje también está mediado por relaciones de poder y control social",
    incorrectas: [
      "Que el aprendizaje es un proceso neutral sin relación con la sociedad",
      "Que el poder no influye en la transmisión de saberes"
    ]
  },
  {
    enunciado: "¿Qué significa lifelong learning?",
    correcta: "La idea de que el aprendizaje se desarrolla a lo largo de toda la vida",
    incorrectas: [
      "Que el aprendizaje solo ocurre en la infancia",
      "Que la educación formal concluye el proceso de aprender"
    ]
  },
  {
    enunciado: "¿Qué aplicación educativa se deriva de la teoría de Ausubel?",
    correcta: "Diseñar clases que conecten con conocimientos previos del alumnado",
    incorrectas: [
      "Centrar el aprendizaje en la repetición literal",
      "Basar la enseñanza en castigos constantes"
    ]
  },
  {
    enunciado: "¿Qué defendió Seligman con la psicología positiva aplicada al aprendizaje?",
    correcta: "Que cultivar fortalezas y emociones positivas potencia el aprendizaje y la motivación",
    incorrectas: [
      "Que el castigo es la base de toda educación eficaz",
      "Que la motivación intrínseca no tiene relevancia educativa"
    ]
  },
  {
    enunciado: "¿Qué modelo ecológico propuso Bronfenbrenner?",
    correcta: "Un modelo bioecológico que explica el aprendizaje como interacción entre individuo y contextos múltiples",
    incorrectas: [
      "Un modelo exclusivamente genético que niega el entorno",
      "Un modelo basado solo en estímulo-respuesta sin mediación social"
    ]
  },
  {
    enunciado: "¿Qué autor descubrió los mecanismos de la memoria sináptica?",
    correcta: "Eric Kandel",
    incorrectas: [
      "Jean Piaget",
      "Abraham Maslow"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre aprendizaje y ética?",
    correcta: "El aprendizaje permite la interiorización de normas, valores y conductas morales",
    incorrectas: [
      "La ética es independiente de cualquier proceso de aprendizaje",
      "Los valores morales son exclusivamente innatos"
    ]
  }
];
