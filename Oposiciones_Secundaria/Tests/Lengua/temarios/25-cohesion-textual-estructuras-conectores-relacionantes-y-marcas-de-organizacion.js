// temarios/25-cohesion-textual-estructuras-conectores-relacionantes-y-marcas-de-organizacion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por cohesión textual en lingüística del texto?",
    correcta: "El conjunto de mecanismos lingüísticos que enlazan formalmente los elementos de un texto",
    incorrectas: [
      "El principio semántico global que hace inteligible un texto",
      "El proceso de adecuar el texto a la situación comunicativa concreta"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica hay entre cohesión y coherencia?",
    correcta: "La cohesión actúa a nivel formal-micro; la coherencia, a nivel semántico-global",
    incorrectas: [
      "La cohesión se limita al plano léxico y la coherencia al plano sintáctico",
      "La cohesión depende del lector y la coherencia sólo del autor"
    ]
  },
  {
    enunciado: "¿Cuál es un procedimiento de cohesión por repetición?",
    correcta: "La recurrencia léxica del núcleo temático a lo largo del texto",
    incorrectas: [
      "La variación temática en cada párrafo sin enlaces",
      "La sustitución de un término por otro opuesto sin marcas"
    ]
  },
  {
    enunciado: "¿Qué es la sustitución como mecanismo cohesionador?",
    correcta: "El reemplazo de un término por pronombres, proformas o equivalentes léxicos",
    incorrectas: [
      "La supresión de elementos recuperables del contexto",
      "La reescritura de la oración con el mismo sentido pero más extensa"
    ]
  },
  {
    enunciado: "Selecciona la opción que ejemplifica elipsis cohesionadora:",
    correcta: "María quiere té; Juan, café.",
    incorrectas: [
      "María quiere té y Juan quiere café.",
      "María quiere té porque hace frío."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe la reformulación que mantiene el sentido con otras palabras?",
    correcta: "Paráfrasis",
    incorrectas: [
      "Hipérbole",
      "Anacoluto"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes relaciones léxicas favorece la cohesión?",
    correcta: "Hiperonimia-hiponimia",
    incorrectas: [
      "Paronimia-aleatoria",
      "Homografía-casual"
    ]
  },
  {
    enunciado: "Identifica el conector de adición:",
    correcta: "Además",
    incorrectas: [
      "Sin embargo",
      "Por lo tanto"
    ]
  },
  {
    enunciado: "Identifica el conector de contraste:",
    correcta: "No obstante",
    incorrectas: [
      "Asimismo",
      "En consecuencia"
    ]
  },
  {
    enunciado: "¿Cuál es un conector causal canónico?",
    correcta: "Porque",
    incorrectas: [
      "Por ejemplo",
      "Por consiguiente"
    ]
  },
  {
    enunciado: "Señala un conector de consecuencia:",
    correcta: "Por tanto",
    incorrectas: [
      "A fin de",
      "Es decir"
    ]
  },
  {
    enunciado: "Escoge un conector de finalidad:",
    correcta: "Para que",
    incorrectas: [
      "Aunque",
      "Así pues"
    ]
  },
  {
    enunciado: "¿Cuál funciona típicamente como conector de explicación/reformulación?",
    correcta: "Es decir",
    incorrectas: [
      "Sin embargo",
      "No sólo"
    ]
  },
  {
    enunciado: "¿Qué conector ordena partes del discurso?",
    correcta: "En primer lugar",
    incorrectas: [
      "Con todo",
      "De hecho"
    ]
  },
  {
    enunciado: "Señala un conector de ejemplificación:",
    correcta: "Por ejemplo",
    incorrectas: [
      "Por ende",
      "A pesar de"
    ]
  },
  {
    enunciado: "¿Qué papel cumplen los párrafos en la cohesión?",
    correcta: "Segmentan y organizan bloques temáticos facilitando los enlaces supraoracionales",
    incorrectas: [
      "Sustituyen por completo a los conectores lógicos",
      "Evitan la necesidad de progresión temática"
    ]
  },
  {
    enunciado: "En textos orales, el equivalente funcional del párrafo es:",
    correcta: "El paratono o bloque prosódico",
    incorrectas: [
      "La aposición",
      "El vocativo"
    ]
  },
  {
    enunciado: "¿Qué son los marcadores del discurso?",
    correcta: "Unidades que orientan la interpretación de las relaciones entre segmentos textuales",
    incorrectas: [
      "Sustantivos abstractos que designan conceptos",
      "Cualquier palabra polisémica de alta frecuencia"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes opciones muestra cohesión anafórica?",
    correcta: "Compré un libro nuevo. Lo empecé ayer.",
    incorrectas: [
      "Compré un libro nuevo. Ayer llovía.",
      "Compré un libro nuevo. Quizá mañana."
    ]
  },
  {
    enunciado: "¿Cuál de las opciones es una catáfora?",
    correcta: "Lo siguiente es fundamental: la seguridad del usuario.",
    incorrectas: [
      "La seguridad del usuario es fundamental; eso es clave.",
      "La seguridad del usuario es fundamental; por eso actuamos."
    ]
  },
  {
    enunciado: "¿Qué progresión temática mantiene un mismo tema y añade remas sucesivos?",
    correcta: "Progresión con tema constante",
    incorrectas: [
      "Progresión en cadena (tema lineal)",
      "Progresión de temas derivados sin núcleo común"
    ]
  },
  {
    enunciado: "En la progresión temática lineal (en cadena) el rema de un enunciado:",
    correcta: "Pasa a ser el tema del enunciado siguiente",
    incorrectas: [
      "Se elimina para evitar redundancias",
      "Se convierte en un deíctico contextual"
    ]
  },
  {
    enunciado: "¿Qué función cohesionadora aportan los tiempos verbales?",
    correcta: "Mantienen la continuidad temporal y la perspectiva del enunciador",
    incorrectas: [
      "Sustituyen la necesidad de conectores argumentativos",
      "Suprimen la necesidad de referencias anafóricas"
    ]
  },
  {
    enunciado: "El uso de sinónimos, hiperónimos y perífrasis para evitar repeticiones es un caso de:",
    correcta: "Cohesión léxica por sustitución",
    incorrectas: [
      "Deixis personal",
      "Concordancia morfosintáctica"
    ]
  },
  {
    enunciado: "¿Cuál de estos es un conector concesivo?",
    correcta: "Aunque",
    incorrectas: [
      "Por eso",
      "Al contrario"
    ]
  },
  {
    enunciado: "Señala el operador discursivo que introduce conclusión global:",
    correcta: "En conclusión",
    incorrectas: [
      "A saber",
      "Sin ir más lejos"
    ]
  },
  {
    enunciado: "¿Qué marcador introduce una rectificación o corrección de lo anterior?",
    correcta: "Mejor dicho",
    incorrectas: [
      "Por añadidura",
      "Así y todo"
    ]
  },
  {
    enunciado: "¿Qué conector intensifica o refuerza un argumento?",
    correcta: "De hecho",
    incorrectas: [
      "Con todo",
      "En cambio"
    ]
  },
  {
    enunciado: "En la organización textual, las enumeraciones y viñetas funcionan como:",
    correcta: "Marcas gráficas de estructura que apoyan la cohesión y la jerarquía informativa",
    incorrectas: [
      "Sustitutos obligatorios de los conectores lógicos",
      "Elementos puramente ornamentales sin valor textual"
    ]
  },
  {
    enunciado: "La deixis personal (yo, tú, él) contribuye a la cohesión porque:",
    correcta: "Permite rastrear participantes y roles en el discurso",
    incorrectas: [
      "Evita la necesidad de cualquier otra marca de referencia",
      "Se limita al lenguaje literario"
    ]
  },
  {
    enunciado: "¿Qué relación léxica cohesionadora aparece en: “flor”, “rosa”, “margarita”?",
    correcta: "Hiponimia respecto de un hiperónimo común",
    incorrectas: [
      "Antonimia correlativa",
      "Homonimia categorial"
    ]
  },
  {
    enunciado: "En el par “sin embargo / no obstante”, su valor prototípico es:",
    correcta: "Contraste u oposición argumentativa",
    incorrectas: [
      "Adición enfática",
      "Causa explicativa"
    ]
  },
  {
    enunciado: "¿Cuál es un conector de orden que anuncia cierre de sección?",
    correcta: "Por último",
    incorrectas: [
      "Además",
      "Por otra parte"
    ]
  },
  {
    enunciado: "¿Qué recurso cohesionador aparece en: “La capital, Madrid, concentra...”?",
    correcta: "Aposición explicativa",
    incorrectas: [
      "Elipsis verbal",
      "Anáfora catafórica"
    ]
  },
  {
    enunciado: "En el ámbito oral, ¿qué marca favorece la cohesión entre segmentos?",
    correcta: "La entonación descendente o ascendente que señala continuidad o cierre",
    incorrectas: [
      "La omisión de pausas en todo el discurso",
      "El uso de muletillas sin patrón"
    ]
  },
  {
    enunciado: "¿Qué marcador introduce contraargumento fuerte?",
    correcta: "Ahora bien",
    incorrectas: [
      "Asimismo",
      "Por ejemplo"
    ]
  },
  {
    enunciado: "¿Qué clase de marcador es “por consiguiente”?",
    correcta: "Conector de consecuencia lógica",
    incorrectas: [
      "Marcador de reformulación",
      "Ordenador enumerativo"
    ]
  },
  {
    enunciado: "“A fin de que” se clasifica como conector de:",
    correcta: "Finalidad",
    incorrectas: [
      "Condición",
      "Concesión"
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo típico de la cohesión en textos expositivos?",
    correcta: "Abundancia de reformuladores y ordenadores del discurso",
    incorrectas: [
      "Predominio de deícticos espaciales sin referentes",
      "Ausencia de conectores para favorecer la objetividad"
    ]
  },
  {
    enunciado: "En textos argumentativos, ¿qué marcadores son frecuentes?",
    correcta: "Conectores de contraste, concesión y consecuencia",
    incorrectas: [
      "Exclusivamente conectores temporales",
      "Sólo marcadores de cierre"
    ]
  },
  {
    enunciado: "¿Qué estrategia didáctica mejora la cohesión en la escritura del alumnado?",
    correcta: "Reescritura guiada sustituyendo repeticiones por sinónimos y conectores adecuados",
    incorrectas: [
      "Eliminar todos los marcadores del discurso",
      "Introducir cambios de tema en cada frase"
    ]
  }
];
