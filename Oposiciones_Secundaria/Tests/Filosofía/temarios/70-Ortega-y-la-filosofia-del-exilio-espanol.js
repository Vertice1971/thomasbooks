// temarios/70-Ortega-y-la-filosofia-del-exilio-espanol.js
// Basado en la plantilla 0-Plantilla-temario.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué significa la célebre frase de Ortega 'yo soy yo y mi circunstancia'?",
    correcta: "Que la vida humana se entiende siempre en relación con su contexto histórico y vital",
    incorrectas: [
      "Que el yo es independiente de cualquier influencia externa",
      "Que la circunstancia domina totalmente al individuo"
    ]
  },
  {
    enunciado: "¿Qué corriente filosófica representa Ortega y Gasset?",
    correcta: "El raciovitalismo, que integra razón y vida",
    incorrectas: [
      "El positivismo lógico",
      "El nihilismo existencialista"
    ]
  },
  {
    enunciado: "¿Qué distingue al perspectivismo de Ortega?",
    correcta: "Cada verdad se ofrece desde una perspectiva situada, no desde un punto de vista absoluto",
    incorrectas: [
      "Toda verdad es subjetiva sin posibilidad de comunicación",
      "El conocimiento solo puede alcanzarse desde la ciencia matemática"
    ]
  },
  {
    enunciado: "¿Qué significa raciovitalismo en Ortega?",
    correcta: "Una razón que se enraíza en la vida y la ilumina, sin abstraerse de ella",
    incorrectas: [
      "Una razón desligada de la experiencia histórica",
      "Una vitalidad irracional sin mediación de la razón"
    ]
  },
  {
    enunciado: "¿Qué contexto histórico marca el exilio de Ortega?",
    correcta: "La Guerra Civil española y la instauración del franquismo",
    incorrectas: [
      "La Primera Guerra Mundial",
      "La independencia de las colonias americanas"
    ]
  },
  {
    enunciado: "¿Qué diferencia se establece entre exilio exterior e interior?",
    correcta: "El exterior implica destierro físico; el interior, marginación en el propio país",
    incorrectas: [
      "El exterior es voluntario y el interior forzoso",
      "El exterior es político y el interior cultural"
    ]
  },
  {
    enunciado: "¿En qué países vivió Ortega durante su exilio?",
    correcta: "Francia, Holanda, Portugal y Argentina",
    incorrectas: [
      "Italia, Alemania y Estados Unidos",
      "México, Cuba y Chile"
    ]
  },
  {
    enunciado: "¿Qué obra escribe Ortega en 1939 sobre la interioridad?",
    correcta: "Ensimismamiento y alteración",
    incorrectas: [
      "Meditaciones del Quijote",
      "La rebelión de las masas"
    ]
  },
  {
    enunciado: "¿Qué significa ensimismamiento en Ortega?",
    correcta: "La recogida interior del yo frente al mundo, que puede volverse aislamiento",
    incorrectas: [
      "El olvido del yo en la acción exterior",
      "La identificación del yo con la colectividad"
    ]
  },
  {
    enunciado: "¿Qué plantea Ortega con la razón histórica?",
    correcta: "Que la vida humana se comprende a través de la historia en la que se sitúa",
    incorrectas: [
      "Que la historia es un ciclo eterno sin relevancia para la vida",
      "Que la historia es un mito sin valor filosófico"
    ]
  },
  {
    enunciado: "¿Qué obra de Ortega analiza las transformaciones sociales de masas?",
    correcta: "La rebelión de las masas",
    incorrectas: [
      "Historia como sistema",
      "El tema de nuestro tiempo"
    ]
  },
  {
    enunciado: "¿Qué significa la vida como 'realidad radical'?",
    correcta: "Que la vida es la realidad primaria de la que parte toda filosofía",
    incorrectas: [
      "Que la vida es solo una apariencia ilusoria",
      "Que la vida debe subordinarse a la razón abstracta"
    ]
  },
  {
    enunciado: "¿Qué relación establece Ortega entre filosofía y circunstancia?",
    correcta: "La filosofía surge de las circunstancias históricas concretas",
    incorrectas: [
      "La filosofía es independiente de la historia",
      "La filosofía se funda solo en intuiciones privadas"
    ]
  },
  {
    enunciado: "¿Qué discípulo directo de Ortega desarrolló la idea de la razón vital?",
    correcta: "Julián Marías",
    incorrectas: [
      "José Gaos",
      "Xavier Zubiri"
    ]
  },
  {
    enunciado: "¿Qué discípula de Ortega vinculó su pensamiento con el exilio y la democracia?",
    correcta: "María Zambrano",
    incorrectas: [
      "Hannah Arendt",
      "Simone de Beauvoir"
    ]
  },
  {
    enunciado: "¿Qué filósofo trasladó el orteguismo a América Latina?",
    correcta: "José Gaos",
    incorrectas: [
      "Miguel de Unamuno",
      "José Ferrater Mora"
    ]
  },
  {
    enunciado: "¿En qué año regresó Ortega a España tras la Guerra Civil?",
    correcta: "En 1946",
    incorrectas: [
      "En 1939",
      "En 1952"
    ]
  },
  {
    enunciado: "¿Cómo fue la recepción de Ortega en la España franquista?",
    correcta: "Tensa y ambivalente, con reconocimiento cultural pero también censura política",
    incorrectas: [
      "Fue completamente ignorado",
      "Fue plenamente aceptado como ideólogo del régimen"
    ]
  },
  {
    enunciado: "¿Qué significa perspectivismo histórico en Ortega?",
    correcta: "Que cada época ofrece una visión parcial pero necesaria de la verdad",
    incorrectas: [
      "Que solo existe una verdad absoluta atemporal",
      "Que todo punto de vista es igualmente válido"
    ]
  },
  {
    enunciado: "¿Qué obra formula Ortega durante el exilio sobre la historia?",
    correcta: "Historia como sistema",
    incorrectas: [
      "Meditaciones del Quijote",
      "El espectador"
    ]
  },
  {
    enunciado: "¿Qué aportación hace Ortega al problema del exilio?",
    correcta: "Reflexiona sobre el destierro como ruptura vital e histórica irreparable",
    incorrectas: [
      "Niega la importancia del exilio en la vida intelectual",
      "Concibe el exilio solo como oportunidad económica"
    ]
  },
  {
    enunciado: "¿Qué idea defiende Ortega sobre España y Europa?",
    correcta: "Que España debe integrarse en la cultura europea moderna",
    incorrectas: [
      "Que España debe aislarse para conservar su identidad",
      "Que Europa carece de interés para la filosofía española"
    ]
  },
  {
    enunciado: "¿Qué significa la circunstancia en la filosofía orteguiana?",
    correcta: "El conjunto de condiciones históricas, sociales y vitales que configuran al sujeto",
    incorrectas: [
      "Una categoría lógica sin valor existencial",
      "Un concepto estético sin implicaciones filosóficas"
    ]
  },
  {
    enunciado: "¿Qué crítica se hace a Ortega desde algunos sectores?",
    correcta: "Su supuesto elitismo y ambigüedad política",
    incorrectas: [
      "Su rechazo de la filosofía europea",
      "Su falta de interés por la historia"
    ]
  },
  {
    enunciado: "¿Qué obra de Ortega analiza la misión cultural de España?",
    correcta: "España invertebrada",
    incorrectas: [
      "La deshumanización del arte",
      "Ideas y creencias"
    ]
  },
  {
    enunciado: "¿Qué función tiene la filosofía según Ortega?",
    correcta: "Orientar la vida concreta y esclarecer la circunstancia histórica",
    incorrectas: [
      "Ofrecer un sistema cerrado de verdades",
      "Abstraerse de la vida social"
    ]
  },
  {
    enunciado: "¿Qué metáfora emplea Ortega para explicar el aislamiento del exiliado?",
    correcta: "El ensimismamiento",
    incorrectas: [
      "La transparencia del cristal",
      "La caverna platónica"
    ]
  },
  {
    enunciado: "¿Qué significa que la filosofía de Ortega es raciovitalista?",
    correcta: "Que integra razón y vida como inseparables",
    incorrectas: [
      "Que subordina la vida a la razón abstracta",
      "Que sustituye la razón por el sentimiento"
    ]
  },
  {
    enunciado: "¿Qué discípulo de Ortega fue clave en la filosofía en México?",
    correcta: "José Gaos",
    incorrectas: [
      "Miguel de Molinos",
      "Gustavo Bueno"
    ]
  },
  {
    enunciado: "¿Qué significa para Ortega el exilio cultural?",
    correcta: "La pérdida de continuidad en el proyecto cultural español",
    incorrectas: [
      "La liberación absoluta de toda circunstancia",
      "El regreso inmediato a la tradición medieval"
    ]
  },
  {
    enunciado: "¿Qué valor tiene el retorno de Ortega en 1946?",
    correcta: "Marca un reencuentro parcial con España, pero sin plena integración",
    incorrectas: [
      "Supuso su nombramiento como ministro",
      "Fue un regreso triunfal sin tensiones"
    ]
  },
  {
    enunciado: "¿Qué función tuvo Ortega para sus discípulos en el exilio?",
    correcta: "Sirvió de referente filosófico y de continuidad intelectual",
    incorrectas: [
      "Se opuso a todo contacto con ellos",
      "Negó toda validez a su pensamiento"
    ]
  },
  {
    enunciado: "¿Qué relación guarda Ortega con María Zambrano en el exilio?",
    correcta: "Ella prolonga y transforma su filosofía en clave poética y política",
    incorrectas: [
      "Ella se opuso frontalmente a Ortega y lo negó",
      "Ella tradujo sus obras al francés sin añadir nada"
    ]
  },
  {
    enunciado: "¿Qué crítica hace Ortega al idealismo?",
    correcta: "Que olvida la vida concreta y reduce la realidad a conciencia pura",
    incorrectas: [
      "Que concede demasiada importancia a la historia",
      "Que elimina la subjetividad del conocimiento"
    ]
  },
  {
    enunciado: "¿Qué significa que Ortega es un pensador de la circunstancia?",
    correcta: "Que su filosofía se enraíza en las condiciones históricas y vitales del sujeto",
    incorrectas: [
      "Que su pensamiento es completamente abstracto",
      "Que su filosofía se limita a lo biológico"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la recepción internacional de Ortega?",
    correcta: "Fue reconocido como un pensador europeo de primera línea",
    incorrectas: [
      "Fue ignorado fuera de España",
      "Fue visto solo como un político"
    ]
  },
  {
    enunciado: "¿Qué significa que la vida es proyecto en Ortega?",
    correcta: "Que vivir es anticipar y realizar posibilidades en la circunstancia",
    incorrectas: [
      "Que la vida es repetición mecánica de instintos",
      "Que la vida se reduce a la contemplación pasiva"
    ]
  },
  {
    enunciado: "¿Qué relación establece Ortega entre exilio y nación?",
    correcta: "El exilio muestra la fractura de la identidad nacional y cultural",
    incorrectas: [
      "El exilio refuerza la unidad nacional",
      "El exilio es ajeno a la cultura"
    ]
  },
  {
    enunciado: "¿Qué obra de Ortega aborda la relación entre historia y filosofía?",
    correcta: "Historia como sistema",
    incorrectas: [
      "La deshumanización del arte",
      "Ideas y creencias"
    ]
  },
  {
    enunciado: "¿Qué representa Ortega en la filosofía española contemporánea?",
    correcta: "El renovador que abrió la filosofía española al diálogo con Europa",
    incorrectas: [
      "Un pensador marginal sin repercusión",
      "Un político sin producción filosófica"
    ]
  }
];
