// temarios/23-el-texto-como-unidad-comunicativa-su-adecuacion-al-contexto-el-discurso.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por texto como unidad comunicativa?",
    correcta: "La unidad lingüística superior a la oración que posee coherencia, cohesión y adecuación",
    incorrectas: [
      "Una combinación de oraciones sin relación semántica ni pragmática",
      "Un conjunto de frases independientes sin intención comunicativa"
    ]
  },
  {
    enunciado: "¿Cuál es la principal característica del texto según la lingüística del texto?",
    correcta: "El cierre semántico y comunicativo como unidad de sentido global",
    incorrectas: [
      "La presencia de al menos dos oraciones coordinadas",
      "El uso exclusivo de un registro formal"
    ]
  },
  {
    enunciado: "¿Qué autor formuló la noción de cohesión textual en la lingüística funcional?",
    correcta: "Halliday y Hasan",
    incorrectas: [
      "Chomsky y Hymes",
      "Saussure y Bloomfield"
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental existe entre texto y discurso?",
    correcta: "El texto es la unidad lingüística con coherencia interna, el discurso es su realización en contexto",
    incorrectas: [
      "El discurso es solo escrito mientras que el texto es oral",
      "El texto es informal y el discurso siempre formal"
    ]
  },
  {
    enunciado: "¿Qué propiedad textual garantiza la pertinencia del mensaje en una situación comunicativa?",
    correcta: "La adecuación",
    incorrectas: [
      "La elipsis",
      "La concordancia"
    ]
  },
  {
    enunciado: "¿Qué estudia Van Dijk en relación con el texto?",
    correcta: "El análisis del discurso y las estructuras de la comunicación en contexto",
    incorrectas: [
      "La fonética articulatoria de los sonidos vocálicos",
      "La evolución histórica de los dialectos romances"
    ]
  },
  {
    enunciado: "¿Qué estándares de textualidad propusieron Beaugrande y Dressler además de coherencia y cohesión?",
    correcta: "Intencionalidad, aceptabilidad, informatividad, situacionalidad e intertextualidad",
    incorrectas: [
      "Morfología, sintaxis y fonología",
      "Sinonimia, antonimia e hiperonimia"
    ]
  },
  {
    enunciado: "¿Qué propiedad textual asegura la unidad temática y la lógica interna?",
    correcta: "La coherencia",
    incorrectas: [
      "La polisemia",
      "La concordancia nominal"
    ]
  },
  {
    enunciado: "¿Qué es la cohesión en un texto?",
    correcta: "El conjunto de mecanismos gramaticales y léxicos que unen los enunciados",
    incorrectas: [
      "La selección de un registro adecuado a la situación",
      "La repetición de un mismo tema en varias oraciones"
    ]
  },
  {
    enunciado: "¿Qué autor vinculó la noción de competencia comunicativa al uso adecuado del lenguaje?",
    correcta: "Dell Hymes",
    incorrectas: [
      "Noam Chomsky",
      "Roman Jakobson"
    ]
  },
  {
    enunciado: "¿Qué función cumple la intencionalidad como estándar de textualidad?",
    correcta: "Garantizar que el emisor tiene un propósito comunicativo claro",
    incorrectas: [
      "Asegurar la corrección ortográfica",
      "Definir el número de párrafos de un texto"
    ]
  },
  {
    enunciado: "¿Qué relación guarda la adecuación con los registros lingüísticos?",
    correcta: "Exige adaptar el registro al destinatario y la situación comunicativa",
    incorrectas: [
      "Impone siempre el uso de registro culto",
      "Elimina la posibilidad de usar coloquialismos"
    ]
  },
  {
    enunciado: "¿Qué propiedad textual relaciona el texto con otros textos previos?",
    correcta: "La intertextualidad",
    incorrectas: [
      "La sinonimia",
      "La metáfora"
    ]
  },
  {
    enunciado: "¿Qué tipo de discurso organiza hechos en una secuencia temporal?",
    correcta: "El discurso narrativo",
    incorrectas: [
      "El discurso descriptivo",
      "El discurso argumentativo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al discurso expositivo?",
    correcta: "Presenta información de manera objetiva y ordenada",
    incorrectas: [
      "Busca convencer al receptor mediante razones",
      "Relata hechos ficticios con finalidad estética"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al discurso argumentativo?",
    correcta: "Su finalidad es persuadir o convencer mediante razones",
    incorrectas: [
      "Describe personas u objetos de forma estática",
      "Expone datos sin intención de influir"
    ]
  },
  {
    enunciado: "¿Qué recurso cohesivo se emplea en 'María estudia porque quiere aprobar'?",
    correcta: "El conector causal",
    incorrectas: [
      "El conector adversativo",
      "El marcador temporal"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñan los marcadores discursivos?",
    correcta: "Organizan y conectan los enunciados en el discurso",
    incorrectas: [
      "Sirven para embellecer estilísticamente el texto",
      "Sustituyen la coherencia temática"
    ]
  },
  {
    enunciado: "¿Qué propiedad textual asegura que un texto sea aceptado por su receptor?",
    correcta: "La aceptabilidad",
    incorrectas: [
      "La elisión",
      "La sinonimia"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un ejemplo de adecuación contextual?",
    correcta: "Usar un registro formal en un discurso académico",
    incorrectas: [
      "Repetir una palabra innecesariamente",
      "Emplear un neologismo sin explicar su significado"
    ]
  },
  {
    enunciado: "¿Qué se entiende por progresión temática en el discurso?",
    correcta: "La manera en que se desarrolla y organiza la información a lo largo del texto",
    incorrectas: [
      "La repetición constante del mismo tema",
      "El uso de oraciones subordinadas consecutivas"
    ]
  },
  {
    enunciado: "¿Qué estudia la lingüística del texto?",
    correcta: "Las propiedades y organización de los textos como unidades superiores a la oración",
    incorrectas: [
      "Las raíces latinas del léxico español",
      "Las variaciones fonéticas de los dialectos peninsulares"
    ]
  },
  {
    enunciado: "¿Qué estándar de textualidad se relaciona con la cantidad y novedad de la información?",
    correcta: "La informatividad",
    incorrectas: [
      "La polisemia",
      "La elipsis"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la situacionalidad en un texto?",
    correcta: "Que el texto sea pertinente para la situación comunicativa en que aparece",
    incorrectas: [
      "Que use conectores de causa y consecuencia",
      "Que mantenga la concordancia de género y número"
    ]
  },
  {
    enunciado: "¿Qué se entiende por texto multimodal?",
    correcta: "El que combina distintos códigos como lenguaje verbal, imágenes o sonidos",
    incorrectas: [
      "El que emplea varias subordinadas en una oración",
      "El que contiene errores ortográficos intencionados"
    ]
  },
  {
    enunciado: "¿Qué estudia el análisis crítico del discurso?",
    correcta: "La relación entre discurso, poder e ideología en contextos sociales",
    incorrectas: [
      "El origen etimológico de los conectores",
      "Las normas ortográficas de la lengua española"
    ]
  },
  {
    enunciado: "¿Qué diferencia existe entre cohesión léxica y cohesión gramatical?",
    correcta: "La cohesión léxica se basa en repeticiones y campos semánticos, la gramatical en concordancias y referencias",
    incorrectas: [
      "La léxica depende de nexos y la gramatical de metáforas",
      "Ambas son sinónimos y no hay diferencia"
    ]
  },
  {
    enunciado: "¿Qué tipo de discurso predomina en un manual de instrucciones?",
    correcta: "El discurso expositivo",
    incorrectas: [
      "El discurso narrativo",
      "El discurso lírico"
    ]
  },
  {
    enunciado: "¿Qué función tiene la deixis en un texto?",
    correcta: "Situar los enunciados en relación con el contexto espacio-temporal y personal",
    incorrectas: [
      "Generar nuevas palabras en el léxico",
      "Eliminar las repeticiones temáticas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por competencia textual?",
    correcta: "La capacidad para producir y comprender textos coherentes, cohesionados y adecuados",
    incorrectas: [
      "El conocimiento de todas las reglas ortográficas",
      "La capacidad de traducir un texto a varios idiomas"
    ]
  },
  {
    enunciado: "¿Qué propiedad textual se incumple si un texto académico emplea coloquialismos excesivos?",
    correcta: "La adecuación",
    incorrectas: [
      "La coherencia",
      "La cohesión"
    ]
  },
  {
    enunciado: "¿Qué relación establece el concepto de intertextualidad?",
    correcta: "El vínculo de un texto con otros anteriores o contemporáneos",
    incorrectas: [
      "La relación del emisor con el destinatario",
      "La relación entre sujeto y predicado"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al discurso dialogado?",
    correcta: "Se organiza en turnos de habla entre dos o más interlocutores",
    incorrectas: [
      "Consiste en una descripción estática de objetos",
      "Se limita a la exposición objetiva de datos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al discurso descriptivo?",
    correcta: "Representa seres, objetos o situaciones con sus cualidades",
    incorrectas: [
      "Expone un razonamiento para persuadir",
      "Relata acciones ordenadas temporalmente"
    ]
  },
  {
    enunciado: "¿Qué autor sostiene que el lenguaje debe analizarse en sus funciones comunicativas?",
    correcta: "Eugenio Coseriu",
    incorrectas: [
      "Wilhelm von Humboldt",
      "Ferdinand de Saussure"
    ]
  },
  {
    enunciado: "¿Qué significa aceptabilidad en un texto?",
    correcta: "Que el receptor lo reconoce como válido y comprensible",
    incorrectas: [
      "Que cumple todas las reglas ortográficas",
      "Que es traducible a otros idiomas"
    ]
  },
  {
    enunciado: "¿Qué propiedad textual asegura la lógica semántica global del mensaje?",
    correcta: "La coherencia",
    incorrectas: [
      "La sinonimia",
      "La adecuación"
    ]
  },
  {
    enunciado: "¿Qué elemento cohesivo encontramos en 'Ese libro me gusta mucho'?",
    correcta: "La deixis anafórica en 'ese'",
    incorrectas: [
      "Un marcador discursivo causal",
      "Un conector adversativo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la informatividad de un texto?",
    correcta: "Aporta información nueva o relevante para el receptor",
    incorrectas: [
      "Se limita a repetir información ya conocida",
      "Se centra exclusivamente en la forma poética"
    ]
  }
];
