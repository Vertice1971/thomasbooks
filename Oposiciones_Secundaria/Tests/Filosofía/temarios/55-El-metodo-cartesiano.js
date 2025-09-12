// temarios/55-El-metodo-cartesiano.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el objetivo principal del método cartesiano?",
    correcta: "Alcanzar un conocimiento verdadero evitando aceptar lo falso",
    incorrectas: [
      "Probar mediante experimentos empíricos todas las hipótesis",
      "Sustituir la filosofía por la autoridad de la tradición"
    ]
  },
  {
    enunciado: "¿En qué consiste la duda metódica cartesiana?",
    correcta: "En dudar de todo lo que no se presente como claro y distinto para hallar una base segura",
    incorrectas: [
      "En negar sistemáticamente toda posibilidad de conocimiento",
      "En aceptar lo evidente solo si está confirmado por la religión"
    ]
  },
  {
    enunciado: "¿Cuál es la primera regla del método cartesiano?",
    correcta: "Aceptar únicamente lo que se presenta de modo claro y distinto al espíritu",
    incorrectas: [
      "Aceptar como verdadero lo que digan las mayorías",
      "Aceptar solo lo que coincida con la tradición aristotélica"
    ]
  },
  {
    enunciado: "¿Qué indica la segunda regla del método cartesiano?",
    correcta: "Dividir cada dificultad en tantas partes como sea posible para facilitar su resolución",
    incorrectas: [
      "Resolver los problemas de forma global sin análisis previo",
      "Empezar siempre por lo más complejo y general"
    ]
  },
  {
    enunciado: "¿Cuál es la tercera regla del método cartesiano?",
    correcta: "Conducir el pensamiento de lo más simple a lo más complejo",
    incorrectas: [
      "Comenzar siempre por las ideas más oscuras",
      "Ir directamente a la conclusión sin pasos intermedios"
    ]
  },
  {
    enunciado: "¿Qué establece la cuarta regla del método cartesiano?",
    correcta: "Hacer enumeraciones completas para no omitir nada en el razonamiento",
    incorrectas: [
      "Reducir el análisis a un único aspecto",
      "Aceptar conclusiones aunque falten pasos intermedios"
    ]
  },
  {
    enunciado: "¿Qué carácter tienen las reglas del método de Descartes?",
    correcta: "Son ciertas y fáciles, orientadas a guiar el espíritu hacia la verdad",
    incorrectas: [
      "Son mandamientos teológicos dictados por la Iglesia",
      "Son hipótesis experimentales provisionales"
    ]
  },
  {
    enunciado: "¿Qué papel tienen el análisis y la síntesis en el método cartesiano?",
    correcta: "Constituyen los procedimientos básicos para dividir problemas y reconstruir soluciones",
    incorrectas: [
      "Son meras operaciones matemáticas sin aplicación filosófica",
      "Son prácticas retóricas usadas en disputas escolásticas"
    ]
  },
  {
    enunciado: "¿Cuál es la base del racionalismo cartesiano?",
    correcta: "La búsqueda de un conocimiento seguro mediante intuiciones claras y distintas",
    incorrectas: [
      "La confianza absoluta en los sentidos sin examen racional",
      "La sumisión del pensamiento a la tradición medieval"
    ]
  },
  {
    enunciado: "¿Qué relación tiene el método cartesiano con la ciencia moderna?",
    correcta: "Proporciona un modelo de orden, claridad y evidencia que influye en el desarrollo de la ciencia",
    incorrectas: [
      "Rechaza toda forma de conocimiento científico",
      "Se limita al estudio de la teología sin aplicación en la ciencia"
    ]
  },
  {
    enunciado: "¿Qué significa 'claro y distinto' en Descartes?",
    correcta: "Una percepción tan evidente que no deja lugar a la duda",
    incorrectas: [
      "Una opinión aceptada por la mayoría",
      "Una idea transmitida por la tradición"
    ]
  },
  {
    enunciado: "¿Qué busca Descartes mediante la duda metódica?",
    correcta: "Una certeza indudable que sirva de fundamento a todo conocimiento",
    incorrectas: [
      "La imposibilidad de llegar a certezas",
      "El retorno a la fe como única base del saber"
    ]
  },
  {
    enunciado: "¿Qué ejemplo de duda radical expone Descartes?",
    correcta: "La hipótesis de un genio maligno que engaña los sentidos y la razón",
    incorrectas: [
      "La certeza inmediata de los sentidos",
      "La perfección de las tradiciones antiguas"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el 'pienso, luego existo' con el método cartesiano?",
    correcta: "Es la primera verdad indudable hallada tras aplicar la duda metódica",
    incorrectas: [
      "Es una conclusión teológica revelada",
      "Es un principio heredado de Aristóteles"
    ]
  },
  {
    enunciado: "¿Qué disciplina científica influenció más el método de Descartes?",
    correcta: "La matemática, por su claridad y orden",
    incorrectas: [
      "La astrología, por su capacidad predictiva",
      "La retórica, por su poder persuasivo"
    ]
  },
  {
    enunciado: "¿Cómo considera Descartes el conocimiento sensible?",
    correcta: "Engañoso y no totalmente fiable como fundamento del saber",
    incorrectas: [
      "Absolutamente seguro en todas sus manifestaciones",
      "Superior al conocimiento intelectual"
    ]
  },
  {
    enunciado: "¿Qué implica dividir los problemas en partes según Descartes?",
    correcta: "Analizar cada aspecto por separado para comprenderlo mejor",
    incorrectas: [
      "Rechazar el análisis en favor de visiones globales",
      "Aceptar sin cuestionar la complejidad inicial"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la síntesis en el método cartesiano?",
    correcta: "Reconstruir lo complejo a partir de lo simple ya analizado",
    incorrectas: [
      "Rechazar las ideas simples",
      "Evitar llegar a conclusiones universales"
    ]
  },
  {
    enunciado: "¿Qué finalidad tienen las enumeraciones completas en el método?",
    correcta: "Evitar omisiones y garantizar la exhaustividad en el razonamiento",
    incorrectas: [
      "Reducir la investigación a conjeturas",
      "Aceptar conclusiones incompletas"
    ]
  },
  {
    enunciado: "¿Cómo entiende Descartes la evidencia?",
    correcta: "Como lo que se percibe clara y distintamente sin motivo de duda",
    incorrectas: [
      "Como lo que se repite muchas veces",
      "Como lo que afirman las autoridades"
    ]
  },
  {
    enunciado: "¿Qué representa el método cartesiano en la historia de la filosofía?",
    correcta: "El inicio del racionalismo moderno y la búsqueda de fundamentos seguros",
    incorrectas: [
      "El retorno al escepticismo absoluto",
      "El rechazo de toda filosofía en favor de la teología"
    ]
  },
  {
    enunciado: "¿Por qué Descartes rechaza la tradición escolástica?",
    correcta: "Por apoyarse en argumentos de autoridad y no en la evidencia racional",
    incorrectas: [
      "Porque consideraba inútil todo estudio filosófico",
      "Porque defendía el empirismo radical"
    ]
  },
  {
    enunciado: "¿Qué relación tiene el método cartesiano con la certeza matemática?",
    correcta: "Aspira a dotar a la filosofía de la misma claridad y evidencia que las matemáticas",
    incorrectas: [
      "Sustituye las matemáticas por la teología",
      "Afirma que las matemáticas carecen de evidencia"
    ]
  },
  {
    enunciado: "¿Qué tipo de conocimiento busca Descartes como modelo?",
    correcta: "Un conocimiento universal, necesario y evidente",
    incorrectas: [
      "Un conocimiento probable y aproximado",
      "Un conocimiento limitado a la experiencia sensible"
    ]
  },
  {
    enunciado: "¿Qué valor tiene la intuición en el método cartesiano?",
    correcta: "Permite captar directamente las verdades simples y evidentes",
    incorrectas: [
      "Sustituye la razón por la imaginación",
      "Rechaza toda certeza intelectual"
    ]
  },
  {
    enunciado: "¿Qué actitud epistemológica caracteriza el método cartesiano?",
    correcta: "La búsqueda de fundamentos firmes a través de la razón",
    incorrectas: [
      "La aceptación de las costumbres como verdades",
      "La confianza exclusiva en la experiencia sensible"
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo el método cartesiano en la ciencia?",
    correcta: "Sirvió de modelo para organizar el conocimiento con rigor racional",
    incorrectas: [
      "Fue irrelevante para el desarrollo científico",
      "Fue rechazado por toda la comunidad científica"
    ]
  },
  {
    enunciado: "¿Qué relación tiene el método con la duda hiperbólica?",
    correcta: "La duda hiperbólica es la aplicación extrema de la duda metódica para hallar certezas",
    incorrectas: [
      "Es un escepticismo que niega la verdad definitiva",
      "Es una duda parcial sobre cuestiones triviales"
    ]
  },
  {
    enunciado: "¿Qué verdad indudable descubre Descartes tras la duda?",
    correcta: "El cogito: pienso, luego existo",
    incorrectas: [
      "La infalibilidad de los sentidos",
      "La imposibilidad de conocer la verdad"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el método cartesiano con el empirismo?",
    correcta: "Se opone al empirismo radical al priorizar la razón sobre los sentidos",
    incorrectas: [
      "Lo adopta como única fuente de conocimiento",
      "Lo ignora totalmente sin crítica"
    ]
  },
  {
    enunciado: "¿Cómo influye el método cartesiano en la modernidad filosófica?",
    correcta: "Marca el tránsito de la filosofía medieval a la filosofía racionalista moderna",
    incorrectas: [
      "Supone la culminación de la escolástica medieval",
      "Niega la posibilidad de conocimiento racional"
    ]
  },
  {
    enunciado: "¿Qué significa conducir el pensamiento de lo simple a lo complejo?",
    correcta: "Ordenar las ideas para avanzar con claridad en el razonamiento",
    incorrectas: [
      "Empezar por lo incomprensible y confuso",
      "Rechazar las nociones simples"
    ]
  },
  {
    enunciado: "¿Por qué considera Descartes necesarias las reglas del método?",
    correcta: "Para guiar el espíritu y evitar precipitación y error",
    incorrectas: [
      "Para impedir cualquier avance en el conocimiento",
      "Para mantener la dependencia de la tradición"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre método cartesiano y racionalismo?",
    correcta: "El método es la base del racionalismo, que confía en la razón como fuente de conocimiento",
    incorrectas: [
      "El método cartesiano niega la razón en favor de la fe",
      "El racionalismo rechaza toda forma de método"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la claridad en las ideas según Descartes?",
    correcta: "Es condición de verdad, pues solo lo claro y distinto puede aceptarse",
    incorrectas: [
      "Es secundaria frente a la autoridad",
      "Es irrelevante en el razonamiento filosófico"
    ]
  },
  {
    enunciado: "¿Qué representa el método cartesiano para la ciencia moderna?",
    correcta: "Un modelo de rigor lógico y ordenado en la búsqueda de la verdad",
    incorrectas: [
      "Un rechazo del progreso científico",
      "Una justificación del escepticismo absoluto"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la duda metódica frente al escepticismo?",
    correcta: "Es un medio provisional para alcanzar certezas firmes",
    incorrectas: [
      "Es una negación definitiva de todo conocimiento",
      "Es la aceptación pasiva de la incertidumbre"
    ]
  }
];
