// 02-teorias-linguisticas-actuales
// temarios/02-teorias-linguisticas-actuales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza el enfoque de la lingüística del siglo XX frente a la gramática tradicional?",
    correcta: "Delimitación rigurosa del objeto de estudio y preferencia por la descripción sincrónica y funcional.",
    incorrectas: [
      "Rechazo absoluto de toda descripción sincrónica.",
      "Identificación del lenguaje con la simple escritura normativa."
    ]
  },
  {
    enunciado: "¿Qué supuso Saussure con la distinción entre lengua y habla?",
    correcta: "Separar el sistema social compartido del uso individual en la comunicación.",
    incorrectas: [
      "Diferenciar los géneros literarios de la oratoria.",
      "Definir la lengua exclusivamente como escritura culta."
    ]
  },
  {
    enunciado: "¿Qué relación se establece en el signo lingüístico saussureano?",
    correcta: "La unión arbitraria de significante y significado.",
    incorrectas: [
      "La correspondencia motivada entre palabra y cosa.",
      "La combinación de fonética y ortografía."
    ]
  },
  {
    enunciado: "¿Qué aportó el Círculo de Praga al estructuralismo?",
    correcta: "El análisis funcional de los sistemas lingüísticos, con especial énfasis en la fonología.",
    incorrectas: [
      "El rechazo a estudiar los sonidos del lenguaje.",
      "La subordinación del análisis lingüístico a la estilística literaria."
    ]
  },
  {
    enunciado: "¿Qué define la glosemática de Hjelmslev?",
    correcta: "Un modelo formalista que distingue entre forma y sustancia en la expresión y el contenido.",
    incorrectas: [
      "Una gramática normativa centrada en la ortografía.",
      "Un método etnográfico para estudiar lenguas indígenas."
    ]
  },
  {
    enunciado: "¿Qué defendía la etnolingüística de Sapir y Boas?",
    correcta: "El estudio del lenguaje en relación con la cultura y la visión del mundo.",
    incorrectas: [
      "La subordinación del lenguaje a la lógica formal.",
      "La existencia de una única lengua universal obligatoria."
    ]
  },
  {
    enunciado: "¿Qué plantea la hipótesis Sapir-Whorf?",
    correcta: "El lenguaje influye en la forma de percibir y conceptualizar la realidad.",
    incorrectas: [
      "El lenguaje es un mero reflejo universal sin influencia cognitiva.",
      "La lengua solo determina las capacidades motoras del hablante."
    ]
  },
  {
    enunciado: "¿Qué defendía el distribucionalismo de Bloomfield?",
    correcta: "El análisis formal de unidades lingüísticas en función de sus entornos y distribuciones.",
    incorrectas: [
      "La prioridad de la interpretación subjetiva de cada hablante.",
      "La preeminencia del significado sobre la forma en todo análisis."
    ]
  },
  {
    enunciado: "¿Qué relación se establece entre distribucionalismo y psicología conductista?",
    correcta: "Ambos comparten una orientación antimentalista y explican el lenguaje en términos de estímulo-respuesta.",
    incorrectas: [
      "Ambos defienden la existencia de ideas innatas universales.",
      "Ambos sostienen la centralidad de la literatura en la lingüística."
    ]
  },
  {
    enunciado: "¿Qué aportó Chomsky frente al distribucionalismo?",
    correcta: "Una revolución teórica que explica el lenguaje como sistema cognitivo innato.",
    incorrectas: [
      "Un método de análisis basado únicamente en fonética articulatoria.",
      "La equiparación entre lengua y cultura sin distinción metodológica."
    ]
  },
  {
    enunciado: "¿Qué diferencia estableció Chomsky entre competencia y actuación?",
    correcta: "Competencia es conocimiento implícito de la lengua, actuación es su uso en contextos concretos.",
    incorrectas: [
      "Competencia es producción oral y actuación es escritura.",
      "Ambos términos son sinónimos y no tienen distinción teórica."
    ]
  },
  {
    enunciado: "¿Qué es la estructura profunda en la gramática generativa?",
    correcta: "El nivel abstracto que recoge las relaciones semánticas básicas de las oraciones.",
    incorrectas: [
      "El texto completo producido en la comunicación.",
      "El conjunto de normas ortográficas de una lengua."
    ]
  },
  {
    enunciado: "¿Qué son las reglas transformacionales en la gramática generativa?",
    correcta: "Procesos que convierten estructuras profundas en superficiales para producir enunciados.",
    incorrectas: [
      "Normas de uso estilístico en textos literarios.",
      "Reglas de pronunciación propias de dialectos locales."
    ]
  },
  {
    enunciado: "¿Qué desarrolló Fillmore con la gramática de casos?",
    correcta: "Una propuesta semántica que explica funciones como agente, objeto o instrumento en la oración.",
    incorrectas: [
      "Un análisis fonético de los sonidos primarios.",
      "Una clasificación métrica de la poesía."
    ]
  },
  {
    enunciado: "¿Qué supone el modelo de Principios y Parámetros de Chomsky?",
    correcta: "Existen principios universales y parámetros que varían entre lenguas para explicar su diversidad.",
    incorrectas: [
      "Cada lengua es totalmente independiente sin rasgos comunes.",
      "Las lenguas solo se diferencian por el léxico, no por la gramática."
    ]
  },
  {
    enunciado: "¿Qué plantea el Programa Minimalista?",
    correcta: "Una simplificación del modelo generativo para explicar el lenguaje con recursos mínimos.",
    incorrectas: [
      "Una teoría pedagógica centrada en la alfabetización inicial.",
      "Un método de crítica textual aplicado a la literatura."
    ]
  },
  {
    enunciado: "¿Qué estudia la sociolingüística cuantitativa urbana?",
    correcta: "Las variaciones lingüísticas en función de factores sociales y contextuales.",
    incorrectas: [
      "La traducción literaria entre lenguas románicas.",
      "El análisis normativo de diccionarios académicos."
    ]
  },
  {
    enunciado: "¿Qué aportó Fishman con la sociología del lenguaje?",
    correcta: "El análisis de las funciones sociales del lenguaje y sus contextos de uso.",
    incorrectas: [
      "Un estudio puramente fonético del habla coloquial.",
      "Una clasificación de los estilos poéticos medievales."
    ]
  },
  {
    enunciado: "¿Qué propone la etnografía de la comunicación de Hymes y Gumperz?",
    correcta: "Estudiar cómo las prácticas comunicativas se organizan en comunidades culturales específicas.",
    incorrectas: [
      "Reducir el lenguaje a reglas gramaticales invariables.",
      "Estudiar exclusivamente textos escritos normativos."
    ]
  },
  {
    enunciado: "¿Qué objeto de estudio aborda la pragmática?",
    correcta: "El uso del lenguaje en contexto, más allá del significado literal de las expresiones.",
    incorrectas: [
      "El análisis métrico de la poesía.",
      "La enumeración de fonemas en lenguas menores."
    ]
  },
  {
    enunciado: "¿Qué son los actos de habla según Austin y Searle?",
    correcta: "Acciones realizadas con palabras, como prometer, preguntar u ordenar.",
    incorrectas: [
      "Errores lingüísticos corregidos en gramáticas escolares.",
      "Estrategias de memorización fonética sin intención comunicativa."
    ]
  },
  {
    enunciado: "¿Qué define el principio de cooperación de Grice?",
    correcta: "La tendencia de los interlocutores a colaborar para lograr una comunicación efectiva.",
    incorrectas: [
      "El deber de usar siempre oraciones breves.",
      "La obligación de utilizar solo el registro formal."
    ]
  },
  {
    enunciado: "¿Qué proponen Sperber y Wilson con la teoría de la relevancia?",
    correcta: "La comunicación se basa en la búsqueda de la máxima relevancia cognitiva con el menor esfuerzo.",
    incorrectas: [
      "La comunicación depende exclusivamente de reglas sintácticas.",
      "La relevancia se mide en función de la ortografía correcta."
    ]
  },
  {
    enunciado: "¿Qué analiza la lingüística del texto?",
    correcta: "Las propiedades y estructuras que hacen de un texto una unidad comunicativa.",
    incorrectas: [
      "Los sonidos individuales de una lengua.",
      "Las normas de acentuación ortográfica."
    ]
  },
  {
    enunciado: "¿Qué aportó el modelo TeSWeST de Petöfi?",
    correcta: "Una gramática generativa de textos que integra sintaxis y semántica.",
    incorrectas: [
      "Una clasificación histórica de lenguas muertas.",
      "Un método comparativo exclusivo de fonética."
    ]
  },
  {
    enunciado: "¿Qué explica el modelo de van Dijk?",
    correcta: "Las macroestructuras discursivas que organizan la comprensión y producción textual.",
    incorrectas: [
      "La métrica y rima en poesía tradicional.",
      "La ortografía académica del español."
    ]
  },
  {
    enunciado: "¿Qué proponen Beaugrande y Dressler en su modelo textual?",
    correcta: "Siete criterios de textualidad como cohesión, coherencia, intencionalidad, aceptabilidad, informatividad, situacionalidad e intertextualidad.",
    incorrectas: [
      "Una lista de fonemas universales para todas las lenguas.",
      "Un catálogo de recursos retóricos medievales."
    ]
  },
  {
    enunciado: "¿Qué principio central sostiene la lingüística cognitiva?",
    correcta: "El lenguaje está vinculado a la cognición y a la experiencia corporal y cultural.",
    incorrectas: [
      "El lenguaje es un sistema aislado de la mente y la percepción.",
      "El lenguaje depende únicamente de convenciones ortográficas."
    ]
  },
  {
    enunciado: "¿Qué línea de investigación es propia de la lingüística cognitiva?",
    correcta: "El estudio de metáforas conceptuales y marcos cognitivos.",
    incorrectas: [
      "El análisis métrico de versos clásicos.",
      "La clasificación de dialectos por criterios normativos."
    ]
  },
  {
    enunciado: "¿Qué campo abarca la lingüística computacional?",
    correcta: "El desarrollo de modelos y aplicaciones tecnológicas para el procesamiento automático del lenguaje.",
    incorrectas: [
      "La crítica literaria de textos renacentistas.",
      "La descripción histórica de manuscritos medievales."
    ]
  },
  {
    enunciado: "¿Qué aplicaciones prácticas tiene la lingüística computacional?",
    correcta: "Traducción automática, asistentes de voz y análisis de grandes corpus textuales.",
    incorrectas: [
      "Clasificación de estilos poéticos.",
      "Enseñanza de ortografía en manuales escolares."
    ]
  },
  {
    enunciado: "¿Qué caracteriza la interdisciplinariedad de la lingüística actual?",
    correcta: "Integra aportaciones de filosofía, psicología, antropología e informática en el estudio del lenguaje.",
    incorrectas: [
      "Se limita al estudio normativo de las academias.",
      "Excluye cualquier relación con otras ciencias."
    ]
  },
  {
    enunciado: "¿Qué aportó el abandono del privilegio de la lengua escrita en lingüística moderna?",
    correcta: "El reconocimiento del habla como objeto central y legítimo de estudio.",
    incorrectas: [
      "La eliminación de todo estudio de la oralidad.",
      "El análisis exclusivo de textos literarios clásicos."
    ]
  },
  {
    enunciado: "¿Qué diferencia existe entre gramática descriptiva y normativa?",
    correcta: "La descriptiva explica cómo funciona realmente la lengua; la normativa prescribe cómo debe usarse.",
    incorrectas: [
      "Ambas son idénticas en sus objetivos.",
      "La descriptiva solo estudia lenguas muertas."
    ]
  },
  {
    enunciado: "¿Qué panorama general ofrecen las teorías lingüísticas actuales?",
    correcta: "Un campo plural que abarca enfoques estructuralistas, generativos, sociolingüísticos, pragmáticos, textuales, cognitivos y computacionales.",
    incorrectas: [
      "Una unificación en torno a la gramática normativa.",
      "Una reducción exclusiva al análisis poético."
    ]
  }
];

