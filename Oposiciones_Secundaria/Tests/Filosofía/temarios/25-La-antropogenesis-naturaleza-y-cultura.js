// temarios/25-La-antropogenesis-naturaleza-y-cultura.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué significa el término antropogénesis?",
    correcta: "El estudio del origen y evolución del ser humano desde una doble perspectiva biológica y cultural",
    incorrectas: [
      "La descripción de las costumbres sociales contemporáneas",
      "El análisis de los sistemas políticos en la historia moderna"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al lamarckismo como teoría evolutiva?",
    correcta: "La herencia de caracteres adquiridos y una tendencia al perfeccionamiento",
    incorrectas: [
      "La selección natural como motor de la evolución",
      "La reducción del cambio a mutaciones genéticas al azar"
    ]
  },
  {
    enunciado: "¿Qué formula Darwin como motor de la evolución?",
    correcta: "La selección natural basada en variaciones heredables",
    incorrectas: [
      "La transmisión de hábitos adquiridos por los progenitores",
      "La creación súbita e independiente de cada especie"
    ]
  },
  {
    enunciado: "¿Qué integra la síntesis neodarwinista?",
    correcta: "La teoría de Darwin con la genética mendeliana y otras disciplinas",
    incorrectas: [
      "La evolución como hecho puramente espiritual",
      "La herencia cultural sin relación con la biología"
    ]
  },
  {
    enunciado: "¿Qué rasgo definía al Australopithecus en la antropogénesis?",
    correcta: "El bipedismo inicial como forma de adaptación",
    incorrectas: [
      "El desarrollo del lenguaje escrito",
      "La capacidad de fabricar herramientas de metal"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al Homo habilis?",
    correcta: "El uso sistemático de herramientas de piedra",
    incorrectas: [
      "El control del fuego como práctica cotidiana",
      "La construcción de ciudades organizadas"
    ]
  },
  {
    enunciado: "¿Qué innovación se atribuye al Homo erectus?",
    correcta: "El control del fuego y una mayor capacidad craneal",
    incorrectas: [
      "La invención de la escritura cuneiforme",
      "El desarrollo de la agricultura neolítica"
    ]
  },
  {
    enunciado: "¿Qué aspecto cultural destaca en el Homo neanderthalensis?",
    correcta: "La práctica de ritos funerarios y el uso avanzado de herramientas",
    incorrectas: [
      "La construcción de templos urbanos",
      "La domesticación de animales de granja"
    ]
  },
  {
    enunciado: "¿Qué rasgo definitorio presenta el Homo sapiens?",
    correcta: "El desarrollo simbólico, el arte y el lenguaje complejo",
    incorrectas: [
      "La desaparición de toda organización social",
      "La imposibilidad de transmitir cultura"
    ]
  },
  {
    enunciado: "¿Qué se entiende por naturaleza en el ser humano?",
    correcta: "El conjunto de determinaciones biológicas y límites orgánicos",
    incorrectas: [
      "La herencia cultural acumulada",
      "Las creencias religiosas compartidas"
    ]
  },
  {
    enunciado: "¿Qué significa cultura en antropogénesis?",
    correcta: "La herencia no biológica transmitida social y simbólicamente",
    incorrectas: [
      "El instinto natural compartido por los primates",
      "Las leyes físicas que rigen el cosmos"
    ]
  },
  {
    enunciado: "¿Cómo se concibe la relación entre naturaleza y cultura?",
    correcta: "Como una dialéctica en la que la cultura prolonga y transforma la naturaleza",
    incorrectas: [
      "Como esferas separadas e incompatibles",
      "Como realidades idénticas y sin distinción"
    ]
  },
  {
    enunciado: "¿Qué aporta Darwin a la antropogénesis?",
    correcta: "La idea de continuidad entre el ser humano y los animales",
    incorrectas: [
      "La negación de cualquier vínculo biológico con otras especies",
      "La afirmación de que el hombre no tiene ancestros"
    ]
  },
  {
    enunciado: "¿Qué significa para Gehlen que el hombre es un ser carente?",
    correcta: "Que carece de instintos fuertes y compensa con cultura e instituciones",
    incorrectas: [
      "Que posee una dotación instintiva superior a la animal",
      "Que vive solo gracias a su biología sin cultura"
    ]
  },
  {
    enunciado: "¿Qué sostiene Scheler en su antropología filosófica?",
    correcta: "Que el hombre es espíritu capaz de trascender lo biológico",
    incorrectas: [
      "Que el hombre está determinado únicamente por sus genes",
      "Que el ser humano no tiene dimensión espiritual"
    ]
  },
  {
    enunciado: "¿Cómo define Cassirer al ser humano?",
    correcta: "Como animal simbólico, creador de cultura mediante mitos, arte y ciencia",
    incorrectas: [
      "Como animal puramente instintivo sin símbolos",
      "Como ser determinado solo por su herencia genética"
    ]
  },
  {
    enunciado: "¿Qué describe Plessner como excentricidad humana?",
    correcta: "La capacidad de distanciarse reflexivamente de sí mismo",
    incorrectas: [
      "La subordinación absoluta a los impulsos biológicos",
      "La incapacidad para autorregular su conducta"
    ]
  },
  {
    enunciado: "¿Qué dimensión filosófica añade la antropogénesis al concepto de ser humano?",
    correcta: "La comprensión del hombre como animal cultural e histórico",
    incorrectas: [
      "La negación de la importancia de la cultura",
      "La idea de que el hombre no cambia en la historia"
    ]
  },
  {
    enunciado: "¿Qué implica la historicidad en el ser humano?",
    correcta: "La capacidad de aprender, transmitir y transformar su entorno a lo largo del tiempo",
    incorrectas: [
      "La repetición mecánica de comportamientos instintivos",
      "La imposibilidad de modificar su cultura"
    ]
  },
  {
    enunciado: "¿Qué implica definir al hombre como animal cultural?",
    correcta: "Que crea instituciones, símbolos y valores que amplían su naturaleza biológica",
    incorrectas: [
      "Que carece de lenguaje y vida social",
      "Que no puede transmitir aprendizajes"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la cultura en la adaptación humana?",
    correcta: "Permite sobrevivir y prosperar más allá de las limitaciones biológicas",
    incorrectas: [
      "Sustituye los genes como única herencia",
      "Anula cualquier forma de aprendizaje social"
    ]
  },
  {
    enunciado: "¿Qué autor introdujo la idea del hombre como ser simbólico?",
    correcta: "Ernst Cassirer",
    incorrectas: [
      "Thomas Hobbes",
      "Friedrich Engels"
    ]
  },
  {
    enunciado: "¿Qué relación establece la antropología contemporánea entre biología y cultura?",
    correcta: "Plantea un enfoque holístico que integra ambas dimensiones",
    incorrectas: [
      "Rechaza la biología como irrelevante",
      "Reduce la cultura a mera genética"
    ]
  },
  {
    enunciado: "¿Qué papel tienen los ritos funerarios en la antropogénesis?",
    correcta: "Reflejan el inicio de una conciencia simbólica y trascendente",
    incorrectas: [
      "Prueban la imposibilidad de la cultura en la prehistoria",
      "Demuestran que los neandertales carecían de organización"
    ]
  },
  {
    enunciado: "¿Qué dimensión ética se deriva de la antropogénesis?",
    correcta: "El reconocimiento de la dignidad y responsabilidad del ser humano",
    incorrectas: [
      "La imposibilidad de la libertad humana",
      "La reducción del hombre a mera biología"
    ]
  },
  {
    enunciado: "¿Qué aportó la epigenética a la antropogénesis?",
    correcta: "La idea de que factores ambientales influyen en la expresión heredable de los genes",
    incorrectas: [
      "La negación de la importancia de la biología",
      "La demostración de que la cultura sustituye la genética"
    ]
  },
  {
    enunciado: "¿Qué significa que el hombre es un ser histórico y abierto?",
    correcta: "Que se proyecta hacia el futuro creando nuevas formas de vida cultural",
    incorrectas: [
      "Que permanece idéntico a lo largo del tiempo",
      "Que carece de creatividad cultural"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la antropogénesis para la filosofía?",
    correcta: "Ofrece claves para pensar la naturaleza humana y su apertura cultural",
    incorrectas: [
      "Confirma la autosuficiencia de la biología",
      "Niega la relevancia de la cultura y la historia"
    ]
  },
  {
    enunciado: "¿Qué implica la antropogénesis para las ciencias sociales?",
    correcta: "Facilita comprender el origen de instituciones, símbolos y prácticas culturales",
    incorrectas: [
      "Elimina la importancia de la sociología y la antropología",
      "Reduce lo humano a determinaciones genéticas"
    ]
  },
  {
    enunciado: "¿Qué perspectiva defiende Arnold Gehlen sobre la cultura?",
    correcta: "Que constituye el medio necesario para compensar las carencias biológicas humanas",
    incorrectas: [
      "Que es un añadido prescindible de la biología",
      "Que carece de función en la vida humana"
    ]
  },
  {
    enunciado: "¿Qué relación establece Darwin entre el hombre y los animales?",
    correcta: "Una continuidad biológica en capacidades y estructuras",
    incorrectas: [
      "Una separación absoluta sin vínculos",
      "Una diferencia basada solo en la religión"
    ]
  },
  {
    enunciado: "¿Qué aporta la antropología filosófica contemporánea al estudio de la antropogénesis?",
    correcta: "Una visión que integra naturaleza, cultura y tecnología en el concepto de humano",
    incorrectas: [
      "Una reducción de lo humano a lo biológico",
      "La negación de la importancia de lo simbólico"
    ]
  },
  {
    enunciado: "¿Qué significa la cultura como herencia no biológica?",
    correcta: "Que se transmite mediante símbolos, lenguaje y aprendizaje social",
    incorrectas: [
      "Que depende solo de la genética",
      "Que se reduce a instintos heredados"
    ]
  },
  {
    enunciado: "¿Qué importancia tienen el arte y el lenguaje en la antropogénesis?",
    correcta: "Son manifestaciones simbólicas que consolidan la condición cultural del hombre",
    incorrectas: [
      "Carecen de relevancia en la evolución humana",
      "Son meros adornos sin valor adaptativo"
    ]
  },
  {
    enunciado: "¿Qué desafío plantea la biotecnología a la reflexión sobre antropogénesis?",
    correcta: "Replantear los límites entre naturaleza y cultura en la definición de lo humano",
    incorrectas: [
      "Negar la existencia de cultura en la sociedad actual",
      "Reafirmar la absoluta fijeza biológica del hombre"
    ]
  },
  {
    enunciado: "¿Qué conclusión general se obtiene de la antropogénesis?",
    correcta: "Que el ser humano es fruto de la interacción constante entre naturaleza y cultura",
    incorrectas: [
      "Que la cultura es independiente de la biología",
      "Que el hombre permanece inmutable en la historia"
    ]
  }
];
