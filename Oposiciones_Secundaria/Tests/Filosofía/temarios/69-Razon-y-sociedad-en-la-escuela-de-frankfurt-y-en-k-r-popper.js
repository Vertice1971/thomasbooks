// temarios/69-Razon-y-sociedad-en-la-escuela-de-frankfurt-y-en-k-r-popper.js
// Basado en la plantilla 0-Plantilla-temario.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza el contexto de surgimiento de la Escuela de Frankfurt?",
    correcta: "La crítica a la sociedad capitalista y a la razón instrumental tras la Ilustración",
    incorrectas: [
      "La defensa del positivismo como verdad definitiva",
      "La reivindicación de la metafísica escolástica"
    ]
  },
  {
    enunciado: "¿Quiénes fueron los principales miembros de la primera generación de la Escuela de Frankfurt?",
    correcta: "Horkheimer, Adorno y Marcuse",
    incorrectas: [
      "Heidegger, Jaspers y Sartre",
      "Kant, Hegel y Marx"
    ]
  },
  {
    enunciado: "¿Qué significa razón instrumental en la crítica frankfurtiana?",
    correcta: "Razón reducida a cálculo técnico y control de la naturaleza y de la sociedad",
    incorrectas: [
      "Razón como capacidad de contemplar las ideas eternas",
      "Razón como búsqueda de felicidad personal inmediata"
    ]
  },
  {
    enunciado: "¿Qué tesis central expone 'Dialéctica de la Ilustración' de Horkheimer y Adorno?",
    correcta: "La Ilustración, al absolutizar la razón, engendra también nuevas formas de dominación",
    incorrectas: [
      "La Ilustración eliminó toda opresión y garantizó la libertad",
      "La Ilustración es idéntica a la religión medieval"
    ]
  },
  {
    enunciado: "¿Qué crítica realizan los frankfurtianos a la cultura de masas?",
    correcta: "La ven como instrumento de conformismo y dominación simbólica",
    incorrectas: [
      "La consideran la máxima expresión de la libertad individual",
      "La identifican con la tradición clásica de la alta cultura"
    ]
  },
  {
    enunciado: "¿Qué entiende Habermas por razón comunicativa?",
    correcta: "Una forma de racionalidad basada en el diálogo y el consenso orientado al entendimiento",
    incorrectas: [
      "Una técnica para manipular la opinión pública",
      "Una lógica puramente formal sin dimensión social"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene la razón crítica en la Escuela de Frankfurt?",
    correcta: "Contribuir a la emancipación y a una sociedad más justa",
    incorrectas: [
      "Asegurar la supremacía del mercado",
      "Garantizar la obediencia religiosa"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracteriza al racionalismo crítico de Popper?",
    correcta: "La ciencia progresa mediante conjeturas y refutaciones",
    incorrectas: [
      "La ciencia descubre verdades absolutas e infalibles",
      "La ciencia debe fundarse en dogmas incuestionables"
    ]
  },
  {
    enunciado: "¿Qué significa para Popper el falsacionismo?",
    correcta: "Que una teoría científica debe poder ser refutada por la experiencia",
    incorrectas: [
      "Que una teoría científica es verdadera si confirma tradiciones",
      "Que las hipótesis deben aceptarse sin contrastación"
    ]
  },
  {
    enunciado: "¿Qué entiende Popper por sociedad abierta?",
    correcta: "Una sociedad democrática basada en la crítica y la libertad",
    incorrectas: [
      "Una sociedad controlada por una élite incuestionable",
      "Una sociedad cerrada al pluralismo político"
    ]
  },
  {
    enunciado: "¿Qué rechaza Popper en su crítica al historicismo?",
    correcta: "La idea de leyes históricas inexorables que predicen el futuro",
    incorrectas: [
      "La historia como disciplina académica",
      "El uso de fuentes documentales"
    ]
  },
  {
    enunciado: "¿Qué obra de Popper defiende la sociedad abierta frente a sus enemigos?",
    correcta: "La sociedad abierta y sus enemigos",
    incorrectas: [
      "El contrato social",
      "Dialéctica de la Ilustración"
    ]
  },
  {
    enunciado: "¿Qué tienen en común Popper y la Escuela de Frankfurt?",
    correcta: "La crítica a usos de la razón que conducen al dogmatismo y a la opresión",
    incorrectas: [
      "La defensa de la razón como sistema cerrado e infalible",
      "La negación del papel social de la filosofía"
    ]
  },
  {
    enunciado: "¿Qué diferencia central hay entre la Escuela de Frankfurt y Popper?",
    correcta: "Los frankfurtianos critican la sociedad desde una perspectiva sociopolítica; Popper desde una perspectiva epistemológica y política",
    incorrectas: [
      "Los frankfurtianos niegan la existencia de la razón, Popper la afirma",
      "Los frankfurtianos defienden el totalitarismo, Popper el liberalismo"
    ]
  },
  {
    enunciado: "¿Qué concepto central desarrolla Marcuse?",
    correcta: "El hombre unidimensional como resultado del conformismo en sociedades industriales avanzadas",
    incorrectas: [
      "El superhombre como ideal de emancipación",
      "El nihilismo como destino inevitable"
    ]
  },
  {
    enunciado: "¿Qué relación establece Popper entre democracia y ciencia?",
    correcta: "Ambas prosperan en un clima de crítica y revisión constante",
    incorrectas: [
      "Ambas requieren obediencia absoluta a la autoridad",
      "Ambas rechazan toda posibilidad de error"
    ]
  },
  {
    enunciado: "¿Qué propone Adorno en su crítica cultural?",
    correcta: "Que la industria cultural uniformiza conciencias y limita la autonomía",
    incorrectas: [
      "Que la cultura de masas es el culmen de la libertad",
      "Que el arte debe ser propaganda política"
    ]
  },
  {
    enunciado: "¿Qué significa que Popper defiende el racionalismo crítico?",
    correcta: "Que la razón debe ejercerse como crítica abierta y falible",
    incorrectas: [
      "Que la razón es un conjunto de verdades indiscutibles",
      "Que la razón debe someterse a la tradición religiosa"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene la teoría crítica de la sociedad?",
    correcta: "Transformar la sociedad mediante la reflexión emancipadora",
    incorrectas: [
      "Conservar intacto el orden establecido",
      "Sustituir la filosofía por la técnica"
    ]
  },
  {
    enunciado: "¿Qué aporta Habermas frente a la razón instrumental?",
    correcta: "El concepto de razón comunicativa como base de la democracia deliberativa",
    incorrectas: [
      "La renuncia a todo uso de la razón",
      "La defensa de la irracionalidad como forma de vida"
    ]
  },
  {
    enunciado: "¿Qué papel atribuye Popper al error en la ciencia?",
    correcta: "Es esencial, porque permite avanzar mediante correcciones",
    incorrectas: [
      "Debe eliminarse por completo antes de investigar",
      "Demuestra que la ciencia no es posible"
    ]
  },
  {
    enunciado: "¿Qué comparten Popper y los frankfurtianos en su visión de la razón?",
    correcta: "La idea de que debe servir a la libertad y no al dogmatismo",
    incorrectas: [
      "La defensa de una razón cerrada e inmutable",
      "La subordinación de la razón a la religión"
    ]
  },
  {
    enunciado: "¿Qué crítica dirige Popper al totalitarismo?",
    correcta: "Que elimina la crítica y cierra la posibilidad de progreso",
    incorrectas: [
      "Que promueve demasiado la libertad individual",
      "Que favorece la pluralidad cultural"
    ]
  },
  {
    enunciado: "¿Qué entienden los frankfurtianos por alienación cultural?",
    correcta: "La pérdida de autonomía y conciencia crítica bajo la influencia de la industria cultural",
    incorrectas: [
      "La plena realización de la libertad humana",
      "La emancipación frente a las tradiciones"
    ]
  },
  {
    enunciado: "¿Qué significa el concepto de historicismo criticado por Popper?",
    correcta: "La creencia en leyes históricas inevitables que predicen el futuro",
    incorrectas: [
      "La atención al pasado mediante documentos",
      "La valoración de la historia como memoria"
    ]
  },
  {
    enunciado: "¿Qué distingue a la teoría crítica de la filosofía tradicional según Horkheimer?",
    correcta: "Que busca transformar la sociedad, no solo interpretarla",
    incorrectas: [
      "Que abandona todo interés en la sociedad",
      "Que se limita a justificar el orden existente"
    ]
  },
  {
    enunciado: "¿Qué significa 'razón emancipadora' en la Escuela de Frankfurt?",
    correcta: "Una racionalidad orientada a la justicia y la liberación social",
    incorrectas: [
      "Una razón que busca únicamente la eficacia técnica",
      "Una razón reducida al cálculo económico"
    ]
  },
  {
    enunciado: "¿Qué aportó Popper a la filosofía de la ciencia?",
    correcta: "El criterio de falsabilidad como delimitación de lo científico",
    incorrectas: [
      "La verificación absoluta de enunciados",
      "La subordinación de la ciencia a la política"
    ]
  },
  {
    enunciado: "¿Qué relación guarda la Ilustración con la dominación según Horkheimer y Adorno?",
    correcta: "La Ilustración, al absolutizar la razón instrumental, desemboca en nuevas formas de opresión",
    incorrectas: [
      "La Ilustración garantiza automáticamente la libertad",
      "La Ilustración elimina toda forma de alienación"
    ]
  },
  {
    enunciado: "¿Qué significa que la ciencia es falible según Popper?",
    correcta: "Que sus teorías son provisionales y revisables",
    incorrectas: [
      "Que no merece confianza alguna",
      "Que debe ser infalible como la religión"
    ]
  },
  {
    enunciado: "¿Qué crítica comparten Popper y los frankfurtianos?",
    correcta: "El rechazo a sistemas cerrados y dogmáticos",
    incorrectas: [
      "La defensa de una verdad absoluta e inmutable",
      "La afirmación del determinismo histórico"
    ]
  },
  {
    enunciado: "¿Qué significa racionalismo crítico en Popper?",
    correcta: "Una actitud de apertura, discusión y revisión constante",
    incorrectas: [
      "La imposición de una verdad definitiva",
      "La negación de la racionalidad científica"
    ]
  },
  {
    enunciado: "¿Qué entienden los frankfurtianos por dominación simbólica?",
    correcta: "El control de conciencias a través de la cultura y los medios",
    incorrectas: [
      "La imposición de la razón matemática",
      "La represión de la ciencia empírica"
    ]
  },
  {
    enunciado: "¿Qué papel asigna Popper a la crítica en la sociedad?",
    correcta: "Es el motor del progreso científico y político",
    incorrectas: [
      "Debe evitarse para no alterar el orden",
      "Es secundaria frente al consenso religioso"
    ]
  },
  {
    enunciado: "¿Qué significa que la razón pueda ser instrumental?",
    correcta: "Que se reduce a un medio técnico de control y dominación",
    incorrectas: [
      "Que se orienta a la emancipación social",
      "Que se expresa solo en el arte"
    ]
  },
  {
    enunciado: "¿Qué visión de la democracia defiende Popper?",
    correcta: "Como sistema abierto donde los gobiernos pueden ser criticados y reemplazados",
    incorrectas: [
      "Como régimen donde el poder es incuestionable",
      "Como dictadura de la mayoría sin límites"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la filosofía en la Escuela de Frankfurt?",
    correcta: "Ejercer una crítica social radical que impulse la emancipación",
    incorrectas: [
      "Justificar el statu quo de la sociedad",
      "Reducirse al análisis lógico del lenguaje"
    ]
  },
  {
    enunciado: "¿Qué significa emancipación en la teoría crítica?",
    correcta: "Liberación de estructuras de dominación social y cultural",
    incorrectas: [
      "Sumisión a la razón instrumental",
      "Aceptación del determinismo histórico"
    ]
  }
];
