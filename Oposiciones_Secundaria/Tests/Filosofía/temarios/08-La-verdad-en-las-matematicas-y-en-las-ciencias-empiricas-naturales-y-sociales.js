// temarios/08-La-verdad-en-las-matematicas-y-en-las-ciencias-empiricas-naturales-y-sociales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza a la verdad matemática en relación con las ciencias empíricas?",
    correcta: "Se considera necesaria y universal, fundamentada en la demostración deductiva",
    incorrectas: [
      "Depende siempre de la verificación empírica en la experiencia",
      "Se basa en consensos culturales cambiantes"
    ]
  },
  {
    enunciado: "¿Qué planteaba el logicismo de Frege y Russell?",
    correcta: "Que las matemáticas podían reducirse a la lógica",
    incorrectas: [
      "Que las matemáticas se basaban únicamente en la intuición subjetiva",
      "Que las matemáticas no eran un conocimiento verdadero"
    ]
  },
  {
    enunciado: "¿Qué defendía el formalismo de Hilbert?",
    correcta: "La fundamentación de las matemáticas como un sistema axiomático autosuficiente",
    incorrectas: [
      "La existencia de objetos matemáticos como realidades platónicas",
      "La imposibilidad de aplicar axiomas a los sistemas matemáticos"
    ]
  },
  {
    enunciado: "¿Qué sostenía el intuicionismo de Brouwer?",
    correcta: "Que las matemáticas se fundan en la construcción mental del sujeto",
    incorrectas: [
      "Que los números existen como entidades independientes de la mente",
      "Que la verdad matemática se alcanza mediante verificación empírica"
    ]
  },
  {
    enunciado: "¿Qué demuestran los teoremas de incompletitud de Gödel?",
    correcta: "Que en todo sistema formal consistente hay proposiciones indecidibles",
    incorrectas: [
      "Que toda proposición matemática es demostrable",
      "Que los sistemas matemáticos carecen de utilidad práctica"
    ]
  },
  {
    enunciado: "¿Cómo conciben los platónicos la verdad matemática?",
    correcta: "Como descubrimiento de realidades abstractas existentes independientemente del sujeto",
    incorrectas: [
      "Como un mero producto del lenguaje ordinario",
      "Como una convención cultural arbitraria"
    ]
  },
  {
    enunciado: "¿Qué propuso Lakatos en su obra 'Proofs and Refutations'?",
    correcta: "Que las matemáticas progresan mediante conjeturas y refutaciones",
    incorrectas: [
      "Que las matemáticas son verdades eternas e inmutables",
      "Que las matemáticas deben abandonarse en favor de las ciencias empíricas"
    ]
  },
  {
    enunciado: "¿Cómo se entiende la verdad en las ciencias naturales?",
    correcta: "Como correspondencia entre teorías y hechos observables",
    incorrectas: [
      "Como coherencia interna exclusivamente",
      "Como un acto de fe sin pruebas empíricas"
    ]
  },
  {
    enunciado: "¿Qué problema epistemológico planteó Hume?",
    correcta: "El problema de la inducción y la justificación de las leyes generales",
    incorrectas: [
      "La imposibilidad de aplicar la deducción en las matemáticas",
      "La falsación de todas las leyes científicas"
    ]
  },
  {
    enunciado: "¿Qué introdujo Popper como alternativa al inductivismo?",
    correcta: "El método de conjeturas y refutaciones mediante falsación",
    incorrectas: [
      "La verdad absoluta e indiscutible de las teorías",
      "La reducción de la ciencia a creencias subjetivas"
    ]
  },
  {
    enunciado: "¿Qué entiende Popper por 'corroboración'?",
    correcta: "El grado de resistencia de una teoría frente a intentos de refutación",
    incorrectas: [
      "La demostración definitiva de la verdad de una teoría",
      "La acumulación de observaciones sin crítica"
    ]
  },
  {
    enunciado: "¿Qué sostiene Kuhn en 'La estructura de las revoluciones científicas'?",
    correcta: "Que el progreso científico se da mediante cambios de paradigma",
    incorrectas: [
      "Que la ciencia avanza de modo lineal y acumulativo",
      "Que los paradigmas son inmutables y eternos"
    ]
  },
  {
    enunciado: "¿Qué distingue a un paradigma científico según Kuhn?",
    correcta: "Un conjunto de supuestos teóricos, métodos y problemas compartidos por una comunidad científica",
    incorrectas: [
      "Una colección aleatoria de datos empíricos",
      "Una simple convención lingüística sin base empírica"
    ]
  },
  {
    enunciado: "¿Qué aportó Lakatos a la epistemología de la ciencia?",
    correcta: "La noción de programas de investigación con un núcleo duro protegido por hipótesis auxiliares",
    incorrectas: [
      "La sustitución total de la ciencia por la filosofía",
      "La negación de toda metodología en la investigación científica"
    ]
  },
  {
    enunciado: "¿Qué defendía Feyerabend en 'Contra el método'?",
    correcta: "Que no existe un método único y universal en ciencia",
    incorrectas: [
      "Que la ciencia nunca cambia y es inmutable",
      "Que las ciencias naturales y sociales son idénticas en todo aspecto"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las ciencias sociales respecto a las naturales?",
    correcta: "La dificultad de establecer leyes universales por la complejidad del comportamiento humano",
    incorrectas: [
      "La posibilidad de reproducir con exactitud experimentos en laboratorio",
      "La ausencia total de interpretación subjetiva"
    ]
  },
  {
    enunciado: "¿Qué planteaba Dilthey sobre las ciencias sociales?",
    correcta: "Que su método debe ser comprensivo más que explicativo",
    incorrectas: [
      "Que la sociología debe reducirse a matemáticas puras",
      "Que no hay diferencia entre ciencias naturales y sociales"
    ]
  },
  {
    enunciado: "¿Qué defendió Max Weber en relación con la objetividad científica?",
    correcta: "La necesidad de la neutralidad valorativa y el análisis comprensivo",
    incorrectas: [
      "La subordinación absoluta de la ciencia a la política",
      "La imposibilidad de estudiar la acción humana científicamente"
    ]
  },
  {
    enunciado: "¿Qué criticaron los pensadores de la Escuela de Frankfurt?",
    correcta: "El positivismo como limitación de la razón y la objetividad social",
    incorrectas: [
      "El uso de categorías filosóficas en la investigación científica",
      "La existencia de ideologías en la política"
    ]
  },
  {
    enunciado: "¿Cómo entendía Habermas la verdad en ciencias sociales?",
    correcta: "Como consenso alcanzado en condiciones ideales de comunicación",
    incorrectas: [
      "Como correspondencia exclusiva con hechos naturales",
      "Como imposibilidad de alcanzar acuerdos racionales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al enfoque positivista en ciencias sociales?",
    correcta: "La búsqueda de leyes universales a partir de datos cuantificables",
    incorrectas: [
      "El rechazo de cualquier medición empírica",
      "La explicación exclusivamente a través de mitos"
    ]
  },
  {
    enunciado: "¿Qué ejemplo ilustra la revisión de la verdad científica?",
    correcta: "La sustitución de la física newtoniana por la relatividad de Einstein",
    incorrectas: [
      "La inmutabilidad de los axiomas matemáticos",
      "La reducción de la biología a la mitología"
    ]
  },
  {
    enunciado: "¿Qué entiende la teoría pragmatista de la verdad?",
    correcta: "Que lo verdadero es aquello que resulta útil y eficaz en la práctica",
    incorrectas: [
      "Que la verdad es absoluta e independiente de toda utilidad",
      "Que la verdad depende solo de la correspondencia lingüística"
    ]
  },
  {
    enunciado: "¿Qué aporta la historia como ciencia social al debate sobre la verdad?",
    correcta: "Una visión interpretativa condicionada por fuentes y contextos",
    incorrectas: [
      "Una exactitud experimental idéntica a la física",
      "Una verdad eterna e inmutable independiente de los documentos"
    ]
  },
  {
    enunciado: "¿Qué sostenía Rorty sobre la verdad?",
    correcta: "Que la verdad es un producto del lenguaje y la comunidad",
    incorrectas: [
      "Que la verdad es una entidad metafísica universal",
      "Que la verdad científica es definitiva e incuestionable"
    ]
  },
  {
    enunciado: "¿Qué defiende el realismo científico?",
    correcta: "Que las teorías científicas describen, aunque de modo aproximado, la realidad",
    incorrectas: [
      "Que las teorías son meros instrumentos sin valor descriptivo",
      "Que la ciencia solo produce ficciones útiles"
    ]
  },
  {
    enunciado: "¿Qué implicación tienen las ciencias sociales en la noción de verdad?",
    correcta: "Que la verdad está condicionada por valores, contextos históricos y lenguaje",
    incorrectas: [
      "Que la verdad es idéntica a la de las ciencias naturales",
      "Que la verdad no tiene ninguna relevancia en ciencias sociales"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal existe entre la verdad matemática y la científica?",
    correcta: "La primera es necesaria y a priori, la segunda es contingente y a posteriori",
    incorrectas: [
      "Ambas son verdades reveladas por la tradición",
      "Las dos dependen exclusivamente del consenso social"
    ]
  },
  {
    enunciado: "¿Qué significa la verosimilitud en Popper?",
    correcta: "El acercamiento progresivo de una teoría a la verdad",
    incorrectas: [
      "La imposibilidad de que una teoría se acerque a la realidad",
      "La demostración absoluta de una hipótesis"
    ]
  },
  {
    enunciado: "¿Qué significa que la verdad matemática sea 'a priori'?",
    correcta: "Que se conoce independientemente de la experiencia",
    incorrectas: [
      "Que depende exclusivamente de experimentos sensoriales",
      "Que solo puede establecerse mediante encuestas sociales"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre ciencias naturales y sociales en cuanto a método?",
    correcta: "Las naturales privilegian la explicación causal y las sociales la comprensión interpretativa",
    incorrectas: [
      "Ambas se basan únicamente en deducciones matemáticas",
      "Las dos rechazan toda observación empírica"
    ]
  },
  {
    enunciado: "¿Qué sostiene el relativismo posmoderno sobre la verdad?",
    correcta: "Que la verdad es relativa a contextos culturales y discursos",
    incorrectas: [
      "Que la verdad es universal y necesaria",
      "Que la verdad científica es absoluta e intemporal"
    ]
  },
  {
    enunciado: "¿Qué problema plantea la objetividad en ciencias sociales?",
    correcta: "La influencia inevitable de valores e intereses en la investigación",
    incorrectas: [
      "La ausencia de teorías explicativas",
      "La falta de sujetos implicados en el estudio"
    ]
  },
  {
    enunciado: "¿Qué visión tenía Aristóteles de la verdad?",
    correcta: "La adecuación entre el entendimiento y la realidad",
    incorrectas: [
      "La verdad como consenso pragmático",
      "La imposibilidad de alcanzar la verdad"
    ]
  },
  {
    enunciado: "¿Qué aporta Kant al debate sobre la verdad?",
    correcta: "La distinción entre juicios a priori y a posteriori en el conocimiento",
    incorrectas: [
      "La negación de toda posibilidad de verdad",
      "La identificación de la verdad con la utilidad práctica exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué ejemplo refleja la dificultad de generalizar en ciencias sociales?",
    correcta: "Los cambios en valores políticos según contextos históricos distintos",
    incorrectas: [
      "La validez universal de las leyes físicas",
      "La demostración axiomática de un teorema matemático"
    ]
  },
  {
    enunciado: "¿Qué función cumple la coherencia como criterio de verdad?",
    correcta: "Garantizar la no contradicción dentro de un sistema teórico",
    incorrectas: [
      "Asegurar la correspondencia con hechos empíricos",
      "Reemplazar la validez lógica de las proposiciones"
    ]
  },
  {
    enunciado: "¿Qué relación establece la filosofía actual entre matemáticas y ciencias empíricas?",
    correcta: "Ambas son formas de conocimiento verdadero, pero con criterios de verdad distintos",
    incorrectas: [
      "Las matemáticas carecen de verdad frente a las ciencias empíricas",
      "Las ciencias empíricas se reducen por completo a axiomas matemáticos"
    ]
  }
];
