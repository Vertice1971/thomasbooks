// temarios/50-La-naturaleza-en-aristoteles.js
var PREGUNTAS = [
  {
    enunciado: "¿Cómo define Aristóteles la physis (naturaleza) en sentido propio?",
    correcta: "Como principio interno de movimiento y reposo de los seres naturales",
    incorrectas: [
      "Como el conjunto de leyes matemáticas independientes de los cuerpos",
      "Como un orden impuesto externamente por los artesanos"
    ]
  },
  {
    enunciado: "¿Qué distingue a los entes naturales de los artefactos para Aristóteles?",
    correcta: "Los naturales poseen en sí mismos la fuente de su cambio; los artefactos no",
    incorrectas: [
      "Los naturales son eternos y los artefactos perecederos por definición",
      "Los artefactos tienen formas más perfectas que los naturales"
    ]
  },
  {
    enunciado: "¿Qué dos principios intrínsecos componen toda sustancia natural según el hilemorfismo?",
    correcta: "Materia como potencia y forma como acto",
    incorrectas: [
      "Causa eficiente y causa final",
      "Accidente y categoría"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la forma (eidos/morphé) en los seres naturales?",
    correcta: "Actualiza la potencia de la materia y determina la esencia y el fin del ser",
    incorrectas: [
      "Es un modelo separado existente en un mundo aparte",
      "Es mera figura geométrica sin relevancia causal"
    ]
  },
  {
    enunciado: "¿Qué son la potencia (dynamis) y el acto (energeia/entelecheia)?",
    correcta: "Modos correlativos de ser: capacidad de ser y su realización efectiva",
    incorrectas: [
      "Dos sustancias distintas en cada individuo",
      "Sinónimos de lugar y tiempo"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes NO es una de las cuatro causas aristotélicas?",
    correcta: "Causa probabilística",
    incorrectas: [
      "Causa material",
      "Causa formal",
      "Causa eficiente",
      "Causa final"
    ]
  },
  {
    enunciado: "¿Qué relación guarda la causa final con la explicación natural en Aristóteles?",
    correcta: "Toda explicación completa incluye el fin al que tiende el proceso natural",
    incorrectas: [
      "La causa final es irrelevante en física y solo vale en ética",
      "La causa final se reduce siempre a azar y necesidad ciega"
    ]
  },
  {
    enunciado: "¿Qué entiende Aristóteles por ‘kinesis’ (movimiento/cambio)?",
    correcta: "Actualización de una potencia en cuanto tal",
    incorrectas: [
      "Desplazamiento local exclusivo, sin otras modalidades",
      "Transformación instantánea sin continuidad"
    ]
  },
  {
    enunciado: "¿Cuáles son los tipos principales de cambio para Aristóteles?",
    correcta: "Sustancial y accidental (cantidad, cualidad, lugar, relación…) ",
    incorrectas: [
      "Material y espiritual exclusivamente",
      "Ideal y aparente según la opinión común"
    ]
  },
  {
    enunciado: "¿Qué distingue el cambio sustancial del accidental?",
    correcta: "En el sustancial surge o desaparece una sustancia; en el accidental la sustancia permanece",
    incorrectas: [
      "El sustancial es perceptible y el accidental solo inteligible",
      "El accidental requiere dos formas sustanciales simultáneas"
    ]
  },
  {
    enunciado: "¿Cómo concibe Aristóteles la ‘materia primera’?",
    correcta: "Como sustrato puramente potencial, indeterminado, que recibe formas",
    incorrectas: [
      "Como elemento físico último detectable por los sentidos",
      "Como entidad separada con actividad propia"
    ]
  },
  {
    enunciado: "¿Qué crítica dirige Aristóteles a las Formas separadas de Platón respecto a la naturaleza?",
    correcta: "Que no explican el cambio ni el ser de los individuos sensibles",
    incorrectas: [
      "Que confunden causa eficiente con final",
      "Que niegan la existencia de esencias"
    ]
  },
  {
    enunciado: "¿Cómo interpreta Aristóteles a los presocráticos en su explicación de la physis?",
    correcta: "Valoraron el principio material, pero descuidaron forma y finalidad",
    incorrectas: [
      "Negaron toda causalidad material",
      "Defendieron exclusivamente causas finales"
    ]
  },
  {
    enunciado: "¿Qué define Aristóteles como ‘naturaleza’ de un ente compuesto?",
    correcta: "Su forma, en tanto principio de operación y fin",
    incorrectas: [
      "Su cantidad, por ser mensurable",
      "Su accidente más frecuente"
    ]
  },
  {
    enunciado: "¿Qué relación establece Aristóteles entre necesidad y finalidad en los procesos naturales?",
    correcta: "Las condiciones necesarias están ordenadas al fin del organismo",
    incorrectas: [
      "La necesidad excluye toda teleología",
      "La finalidad es puro lenguaje metafórico sin valor explicativo"
    ]
  },
  {
    enunciado: "¿Qué es el azar (tyché) en la Física aristotélica?",
    correcta: "Concurrencia accidental de cadenas causales ordenadas a fines distintos",
    incorrectas: [
      "Causa autónoma que sustituye a las cuatro causas",
      "Negación de toda causalidad en la naturaleza"
    ]
  },
  {
    enunciado: "¿Cómo define Aristóteles el ‘lugar’ (tópos) de un cuerpo?",
    correcta: "El límite inmóvil del cuerpo contenedor que rodea al contenido",
    incorrectas: [
      "Un vacío absoluto independiente de los cuerpos",
      "La trayectoria geométrica que recorre el móvil"
    ]
  },
  {
    enunciado: "¿Cuál es la tesis aristotélica sobre el vacío (kenón)?",
    correcta: "Niega el vacío real porque haría imposible la explicación del movimiento",
    incorrectas: [
      "Admite un vacío infinito como soporte del cosmos",
      "Lo acepta solo en el mundo sublunar"
    ]
  },
  {
    enunciado: "¿Qué es el tiempo según Aristóteles?",
    correcta: "Número del movimiento según el antes y el después",
    incorrectas: [
      "Sustancia independiente que fluye por sí",
      "Construcción subjetiva sin referencia al movimiento"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al movimiento natural de los cuerpos simples sublunares?",
    correcta: "Tienden a su ‘lugar natural’ (rectilíneo hacia arriba o abajo según su elemento)",
    incorrectas: [
      "Siempre es circular perfecto por su divinidad",
      "Carece de dirección preferente y es aleatorio"
    ]
  },
  {
    enunciado: "¿Cómo concibe Aristóteles los movimientos celestes?",
    correcta: "Naturales y circulares, regulares, distintos del movimiento rectilíneo sublunar",
    incorrectas: [
      "Rectilíneos y violentos por imposición externa",
      "Irregulares y caóticos por azar"
    ]
  },
  {
    enunciado: "¿Qué sostiene Aristóteles sobre el infinito (ápeiron)?",
    correcta: "El infinito en acto no existe en la naturaleza; solo hay infinito en potencia",
    incorrectas: [
      "El infinito en acto es la forma de toda sustancia",
      "El infinito en acto solo existe en el vacío"
    ]
  },
  {
    enunciado: "¿Cuál es la prioridad ontológica en la explicación del viviente?",
    correcta: "La forma del organismo como principio de estructura y función",
    incorrectas: [
      "La materia por ser cuantitativamente mayor",
      "El accidente por su variabilidad"
    ]
  },
  {
    enunciado: "¿Cómo explica Aristóteles las partes de los animales y sus órganos?",
    correcta: "Por su función y fin dentro del todo orgánico (teleología biológica)",
    incorrectas: [
      "Por azar acumulado sin orden",
      "Por imitación de modelos separados"
    ]
  },
  {
    enunciado: "¿Qué almas distingue Aristóteles en los seres vivos?",
    correcta: "Vegetativa, sensitiva y racional",
    incorrectas: [
      "Mineral, elemental y etérea",
      "Imaginativa, discursiva y mística"
    ]
  },
  {
    enunciado: "¿Qué rasgo propio del ser humano fundamenta su lugar en la jerarquía natural?",
    correcta: "El alma racional, capaz de intelección y deliberación",
    incorrectas: [
      "La inmutabilidad corporal",
      "La ausencia de pasiones"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre sustancia y accidentes en Aristóteles?",
    correcta: "La sustancia es sujeto primero; los accidentes le inhere y pueden cambiar",
    incorrectas: [
      "Los accidentes constituyen la esencia de la sustancia",
      "La sustancia es mero agregado de accidentes"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la generación y corrupción en la naturaleza?",
    correcta: "Cambios sustanciales por los que una sustancia comienza o deja de ser",
    incorrectas: [
      "Simples alteraciones cuantitativas",
      "Desplazamientos locales sin novedad ontológica"
    ]
  },
  {
    enunciado: "¿Qué distingue el movimiento violento del natural en la Física aristotélica?",
    correcta: "El violento proviene de una causa externa contraria a la tendencia del cuerpo",
    incorrectas: [
      "El violento es más rápido por definición",
      "El natural carece de causa eficiente"
    ]
  },
  {
    enunciado: "¿Cómo se articulan causa eficiente y causa final en procesos naturales?",
    correcta: "La eficiente actúa en vista del fin; ambas se ordenan en la explicación",
    incorrectas: [
      "Son excluyentes: donde hay eficiente no hay final",
      "La final depende del azar y no de la eficiente"
    ]
  },
  {
    enunciado: "¿Qué función cumple el Primer Motor Inmóvil respecto a la naturaleza?",
    correcta: "Actúa como causa final última del movimiento eterno, sin mover eficientemente",
    incorrectas: [
      "Empuja físicamente a los cielos como causa eficiente",
      "Es forma separada de cada sustancia individual"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre natural y artificial en la teoría aristotélica?",
    correcta: "Lo natural tiene principio interno de cambio; lo artificial depende de la intención del artífice",
    incorrectas: [
      "Lo artificial posee forma sustancial, lo natural solo accidental",
      "Lo natural carece de finalidad y lo artificial la introduce"
    ]
  },
  {
    enunciado: "¿Cómo concibe Aristóteles la explicación científica de la naturaleza?",
    correcta: "Como búsqueda de causas, especialmente forma y fin, además de materia y agente",
    incorrectas: [
      "Como mera descripción cuantitativa sin referencia causal",
      "Como deducción a partir de axiomas geométricos exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la experiencia (empeiría) en el conocimiento natural?",
    correcta: "Proporciona los puntos de partida inductivos hacia principios y causas",
    incorrectas: [
      "Es prescindible porque las formas son innatas y claras",
      "Se opone a cualquier generalización válida"
    ]
  },
  {
    enunciado: "¿Por qué critica Aristóteles a quienes suprimen la finalidad en biología?",
    correcta: "Porque las partes de los vivientes se explican por lo que hacen para el todo",
    incorrectas: [
      "Porque la finalidad solo existe en astros, no en animales",
      "Porque la finalidad contradice la existencia de causas materiales"
    ]
  },
  {
    enunciado: "¿Cómo se entiende el ‘accidente por sí’ frente al ‘por accidente’ en naturaleza?",
    correcta: "Lo que acontece regularmente por la forma frente a lo casual no reiterable",
    incorrectas: [
      "Lo que depende del destino frente a la elección",
      "Lo que proviene del vacío frente al lleno"
    ]
  },
  {
    enunciado: "¿Qué significa que la forma sea también causa final?",
    correcta: "Que aquello en virtud de lo cual un ente es lo que es es también su fin operativo",
    incorrectas: [
      "Que la forma empuja físicamente a la materia",
      "Que la forma carece de eficacia explicativa"
    ]
  },
  {
    enunciado: "¿Cuál es la tesis aristotélica sobre la eternidad del movimiento?",
    correcta: "El movimiento es eterno por referencia a un Primer Motor inmutable",
    incorrectas: [
      "El movimiento comenzó en el tiempo por decisión divina",
      "El movimiento es ilusorio y solo hay reposo"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa la naturaleza en la articulación con ética y política en Aristóteles?",
    correcta: "Proporciona el marco teleológico y antropológico para comprender la vida buena y la polis",
    incorrectas: [
      "Es indiferente a la ética, que se rige por puro convencionalismo",
      "Determina mecánicamente las leyes sin deliberación racional"
    ]
  }
];
