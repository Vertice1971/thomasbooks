// Archivo: 46-La-historia-de-la-filosofia-como-problema-filosofico.js
// Formato compatible con la plantilla del proyecto:contentReference[oaicite:0]{index=0}

var PREGUNTAS = [
  {
    enunciado: "¿Qué dilema central plantea la historia de la filosofía como disciplina?",
    correcta: "Si es mera cronología de doctrinas o reflexión filosófica crítica",
    incorrectas: [
      "Si debe sustituir a la teología como ciencia de la salvación",
      "Si consiste únicamente en recopilar biografías de filósofos"
    ]
  },
  {
    enunciado: "¿Qué aporta Aristóteles en relación con la historia de la filosofía?",
    correcta: "Realiza la primera historia sistemática del pensamiento filosófico",
    incorrectas: [
      "Afirma que toda historia carece de valor filosófico",
      "Considera que solo los sofistas deben ser estudiados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la tradición doxográfica antigua?",
    correcta: "Recopila opiniones de filósofos sin análisis crítico profundo",
    incorrectas: [
      "Expone siempre un sistema unitario y completo",
      "Incorpora la crítica hermenéutica de la posmodernidad"
    ]
  },
  {
    enunciado: "¿Qué perspectiva introduce San Agustín en la historia de la filosofía?",
    correcta: "Una visión teleológica orientada a la Ciudad de Dios",
    incorrectas: [
      "Un relativismo absoluto sin meta alguna",
      "Una defensa de la eternidad de las ideas platónicas sin historicidad"
    ]
  },
  {
    enunciado: "¿Cómo concibe Kant la historia de la filosofía?",
    correcta: "Como un proceso racional y progresivo hacia la ilustración",
    incorrectas: [
      "Como una serie de repeticiones sin sentido",
      "Como un mero registro de disputas escolares"
    ]
  },
  {
    enunciado: "¿Cuál es la tesis central de Hegel sobre la historia de la filosofía?",
    correcta: "Es el despliegue del Espíritu en formas sucesivas de racionalidad",
    incorrectas: [
      "Es un conjunto de anécdotas sin relación",
      "Es solo un ejercicio de erudición sin verdad"
    ]
  },
  {
    enunciado: "¿Qué aportan Rickert y Windelband al estudio de la historia filosófica?",
    correcta: "Defienden una perspectiva crítica y neokantiana sobre los valores y la ciencia",
    incorrectas: [
      "Rechazan cualquier uso de categorías históricas",
      "Reducen la filosofía a experimentación natural"
    ]
  },
  {
    enunciado: "¿Qué propone Dilthey sobre la historia de la filosofía?",
    correcta: "Comprender la filosofía desde la vivencia histórica y la hermenéutica",
    incorrectas: [
      "Negar toda conexión entre vida y pensamiento",
      "Reducir la filosofía a matemática pura"
    ]
  },
  {
    enunciado: "¿Qué crítica hacen las perspectivas contemporáneas al progresismo histórico?",
    correcta: "Rechazan entender la filosofía como un proceso lineal de avance acumulativo",
    incorrectas: [
      "Niegan la posibilidad de cambio en la filosofía",
      "Afirman que todo pensamiento es idéntico en cualquier época"
    ]
  },
  {
    enunciado: "¿Qué énfasis introducen las corrientes posmodernas en la historiografía filosófica?",
    correcta: "Cuestionan los grandes relatos y las visiones totalizadoras",
    incorrectas: [
      "Defienden la teleología hegeliana intacta",
      "Aseguran que solo existe una única tradición filosófica válida"
    ]
  },
  {
    enunciado: "¿Qué problema suscitan las visiones atomísticas de la historia de la filosofía?",
    correcta: "Fragmentan la continuidad del pensamiento en episodios aislados",
    incorrectas: [
      "Sostienen que toda filosofía es universal y eterna",
      "Afirman que los sistemas filosóficos no influyen en la cultura"
    ]
  },
  {
    enunciado: "¿Qué problema presentan las visiones unitarias de la historia de la filosofía?",
    correcta: "Corren el riesgo de homogeneizar la diversidad de corrientes",
    incorrectas: [
      "Niegan toda relación entre filosofía y sociedad",
      "Consideran que no existe conexión entre los pensadores"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñan los factores culturales y sociales en la historia de la filosofía?",
    correcta: "Condicionan y configuran la producción filosófica",
    incorrectas: [
      "No tienen relevancia alguna en el pensamiento",
      "Son más importantes que las ideas mismas"
    ]
  },
  {
    enunciado: "¿Qué función tiene la interpretación en la historia de la filosofía?",
    correcta: "Otorgar sentido y continuidad a los textos y doctrinas",
    incorrectas: [
      "Eliminar toda referencia al contexto histórico",
      "Garantizar la neutralidad absoluta del intérprete"
    ]
  },
  {
    enunciado: "¿Qué problema epistemológico se plantea sobre la historia de la filosofía?",
    correcta: "Si es ciencia histórica o reflexión filosófica sobre problemas",
    incorrectas: [
      "Si debe sustituir a la física como ciencia básica",
      "Si consiste en enumerar cronológicamente nombres"
    ]
  },
  {
    enunciado: "¿Qué criterio utilizan los modelos de periodización en la historia de la filosofía?",
    correcta: "Agrupar corrientes según problemas, métodos y contextos históricos",
    incorrectas: [
      "Ordenar únicamente por alfabetización",
      "Seleccionar pensadores al azar"
    ]
  },
  {
    enunciado: "¿Qué riesgo existe en reducir la historia de la filosofía a cronología?",
    correcta: "Convertirla en una erudición sin contenido crítico",
    incorrectas: [
      "Aumentar la creatividad filosófica",
      "Fomentar la originalidad absoluta de cada pensador"
    ]
  },
  {
    enunciado: "¿Qué se logra al conjugar historicidad y filosofía en su estudio?",
    correcta: "Un entendimiento más completo del pensamiento filosófico",
    incorrectas: [
      "Un saber puramente técnico sin valor crítico",
      "La desaparición de la reflexión filosófica"
    ]
  },
  {
    enunciado: "¿Qué propósito persigue la historia de la filosofía en la enseñanza?",
    correcta: "Ofrecer continuidad y problematización de ideas a nuevas generaciones",
    incorrectas: [
      "Impedir el cuestionamiento del pasado",
      "Transmitir dogmas inmutables sin crítica"
    ]
  },
  {
    enunciado: "¿Qué significa considerar la historia de la filosofía como ‘problema’?",
    correcta: "Reconocer la tensión entre pluralidad histórica y búsqueda de unidad racional",
    incorrectas: [
      "Asumir que toda filosofía es subjetiva e irrelevante",
      "Rechazar la posibilidad de sistematizar el pensamiento"
    ]
  },
  {
    enunciado: "¿Cómo contribuyó la doxografía antigua a la historia de la filosofía?",
    correcta: "Conservó fuentes valiosas aunque sin análisis filosófico profundo",
    incorrectas: [
      "Ofreció la primera teoría de la justicia universal",
      "Inventó el método experimental científico"
    ]
  },
  {
    enunciado: "¿Qué representa la obra de Hegel en este campo?",
    correcta: "El intento más sistemático de mostrar unidad racional en la historia del pensamiento",
    incorrectas: [
      "Una compilación de datos biográficos sin filosofía",
      "Un manual escolar desprovisto de especulación"
    ]
  },
  {
    enunciado: "¿Qué valor añade Dilthey al análisis historiográfico?",
    correcta: "Destaca la comprensión vivencial y hermenéutica de la filosofía",
    incorrectas: [
      "Rechaza el papel de la experiencia histórica",
      "Reduce la filosofía a lógica simbólica"
    ]
  },
  {
    enunciado: "¿Qué problema práctico suscita la enseñanza de la historia de la filosofía?",
    correcta: "Encontrar equilibrio entre transmisión de contenidos y ejercicio crítico",
    incorrectas: [
      "Eliminar todo debate interpretativo",
      "Presentar la filosofía como ideología fija"
    ]
  },
  {
    enunciado: "¿Qué crítica principal formulan las corrientes posmodernas?",
    correcta: "El rechazo a los metarrelatos que homogeneizan la diversidad filosófica",
    incorrectas: [
      "La defensa del progreso lineal de la razón",
      "La búsqueda de una filosofía única y definitiva"
    ]
  },
  {
    enunciado: "¿Qué vinculación subraya la hermenéutica en la historia filosófica?",
    correcta: "La interpretación de textos dentro de contextos históricos y culturales",
    incorrectas: [
      "La independencia total de los textos respecto a la historia",
      "La reducción de todo a reglas lógicas formales"
    ]
  },
  {
    enunciado: "¿Qué plantean los enfoques unitarios como ventaja frente al atomismo?",
    correcta: "Ofrecen sentido de continuidad y evolución de problemas",
    incorrectas: [
      "Anulan la posibilidad de diferenciar épocas",
      "Ignoran todo criterio de unidad en la filosofía"
    ]
  },
  {
    enunciado: "¿Qué relación se establece entre historia y filosofía en este debate?",
    correcta: "Una tensión fecunda entre singularidad histórica y universalidad filosófica",
    incorrectas: [
      "Una oposición irreconciliable que excluye toda síntesis",
      "Una subordinación absoluta de la filosofía a la cronología"
    ]
  },
  {
    enunciado: "¿Qué significa la frase ‘la historia de la filosofía trasciende la cronología’?",
    correcta: "Que implica problematizar y reflexionar críticamente sobre los sistemas",
    incorrectas: [
      "Que debe centrarse solo en anécdotas biográficas",
      "Que carece de relevancia práctica en la actualidad"
    ]
  },
  {
    enunciado: "¿Qué aportan los manuales contemporáneos al estudio de la historia de la filosofía?",
    correcta: "Pluralidad de enfoques metodológicos y actualización de problemas",
    incorrectas: [
      "Un único dogma válido para todos los sistemas",
      "La eliminación de las corrientes minoritarias"
    ]
  },
  {
    enunciado: "¿Qué función cumple la historia de la filosofía en la autocomprensión cultural?",
    correcta: "Permite reconocernos en una tradición crítica y abierta",
    incorrectas: [
      "Impone un canon cerrado de pensamiento inmutable",
      "Impide la integración de nuevas corrientes"
    ]
  },
  {
    enunciado: "¿Qué pregunta central atraviesa todo este tema?",
    correcta: "Si es posible filosofar históricamente y hacer historia filosóficamente",
    incorrectas: [
      "Si conviene estudiar matemáticas antes que filosofía",
      "Si se puede eliminar toda referencia a contextos"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene Aristóteles en este marco?",
    correcta: "Establece una primera historia de la filosofía en clave sistemática",
    incorrectas: [
      "Niega la relevancia de los pensadores anteriores",
      "Afirma que la historia carece de sentido alguno"
    ]
  },
  {
    enunciado: "¿Qué problema general encierra el estatuto epistemológico de la disciplina?",
    correcta: "Definir si la historia de la filosofía es ciencia, filosofía o ambas",
    incorrectas: [
      "Afirmar que solo es una rama de la biología",
      "Reducirla a mera enumeración de obras"
    ]
  },
  {
    enunciado: "¿Qué horizonte abre la conjunción de historia y filosofía?",
    cor
