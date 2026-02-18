// 02-expresividad-y-creatividad-factores-del-proceso-creativo-estrategias.js
var PREGUNTAS = [
  {
    enunciado: "¿Cómo define Guilford la creatividad en relación con el pensamiento?",
    correcta: "Como pensamiento divergente, caracterizado por la capacidad de buscar múltiples soluciones a un mismo problema",
    incorrectas: [
      "Como pensamiento convergente, orientado a encontrar la única respuesta correcta",
      "Como una capacidad innata que no puede desarrollarse mediante el aprendizaje"
    ]
  },
  {
    enunciado: "¿Cuáles son los cuatro factores principales del pensamiento creativo según Torrance?",
    correcta: "Fluidez, flexibilidad, originalidad y elaboración",
    incorrectas: [
      "Memoria, atención, percepción y razonamiento",
      "Inspiración, técnica, estilo y ejecución"
    ]
  },
  {
    enunciado: "En el proceso creativo, ¿qué es la 'Fluidez'?",
    correcta: "La capacidad de producir un gran número de ideas o soluciones en un tiempo determinado",
    incorrectas: [
      "La habilidad para pasar de una categoría de pensamiento a otra diferente",
      "La destreza técnica para aplicar la pintura de forma líquida"
    ]
  },
  {
    enunciado: "¿Qué factor de la creatividad se refiere a la capacidad de producir respuestas inusuales, remotas o novedosas?",
    correcta: "Originalidad",
    incorrectas: [
      "Elaboración",
      "Flexibilidad"
    ]
  },
  {
    enunciado: "Según Graham Wallas, ¿cuáles son las cuatro fases del proceso creativo?",
    correcta: "Preparación, incubación, iluminación y verificación",
    incorrectas: [
      "Boceto, entintado, coloreado y barnizado",
      "Planteamiento, nudo, desenlace y epílogo"
    ]
  },
  {
    enunciado: "¿Qué ocurre durante la fase de 'Incubación' de Wallas?",
    correcta: "Es un periodo de descanso aparente donde el inconsciente trabaja en el problema sin un esfuerzo consciente",
    incorrectas: [
      "Es el momento en que surge la idea de forma repentina (el '¡Eureka!')",
      "Es la fase de recogida de información y materiales para el proyecto"
    ]
  },
  {
    enunciado: "¿Qué es la 'Flexibilidad' en el pensamiento divergente?",
    correcta: "La capacidad de transformar la perspectiva y proponer soluciones de distinta naturaleza o categorías",
    incorrectas: [
      "La capacidad de doblar materiales físicos para crear esculturas",
      "El nivel de detalle y complejidad que se añade a una idea inicial"
    ]
  },
  {
    enunciado: "¿Qué diferencia la expresividad de la mera representación técnica?",
    correcta: "La capacidad de transmitir emociones, sentimientos o conceptos subjetivos a través del lenguaje visual",
    incorrectas: [
      "El uso de herramientas digitales en lugar de analógicas",
      "La perfección en el trazado de las líneas geométricas"
    ]
  },
  {
    enunciado: "¿En qué consiste la técnica de 'Brainstorming' (Lluvia de ideas) de Osborn?",
    correcta: "Producción grupal de ideas suspendiendo el juicio crítico para favorecer la cantidad sobre la calidad inicial",
    incorrectas: [
      "Un análisis riguroso de los fallos de un proyecto antes de empezar",
      "Una técnica de dibujo rápido bajo condiciones meteorológicas adversas"
    ]
  },
  {
    enunciado: "¿Qué es la 'Sinéctica' de William J.J. Gordon?",
    correcta: "Una estrategia que busca la unión de elementos distintos y aparentemente irrelevantes mediante el uso de analogías",
    incorrectas: [
      "Un método para mezclar colores primarios y obtener secundarios",
      "La ciencia que estudia el movimiento de los cuerpos en el espacio"
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Verificación' en el proceso creativo?",
    correcta: "Es la evaluación y perfeccionamiento de la idea para comprobar si realmente resuelve el problema planteado",
    incorrectas: [
      "Es el registro legal de la obra para evitar el plagio",
      "Es la fase donde se olvida el problema para que descanse la mente"
    ]
  },
  {
    enunciado: "¿Qué es el 'Pensamiento Lateral' según Edward de Bono?",
    correcta: "Un método de pensamiento que busca soluciones mediante caminos no lógicos o evidentes, rompiendo patrones establecidos",
    incorrectas: [
      "Dibujar objetos vistos únicamente desde un lateral (perfil)",
      "El proceso de escribir con la mano no dominante para estimular el cerebro"
    ]
  },
  {
    enunciado: "¿Qué es un 'Mapa Mental' como estrategia creativa?",
    correcta: "Un diagrama radial que organiza conceptos e imágenes alrededor de una idea central para facilitar la asociación libre",
    incorrectas: [
      "Un plano geográfico de los lugares donde han vivido artistas famosos",
      "Un examen psicotécnico para medir el coeficiente intelectual"
    ]
  },
  {
    enunciado: "En creatividad, ¿qué significa el término 'Insight'?",
    correcta: "La comprensión repentina de una estructura o la solución a un problema (iluminación)",
    incorrectas: [
      "El miedo al lienzo en blanco",
      "La técnica de dibujo de interiores"
    ]
  },
  {
    enunciado: "¿Qué técnica creativa utiliza la lista de verificación SCAMPER?",
    correcta: "Una serie de preguntas (Sustituir, Combinar, Adaptar...) para generar variaciones sobre un objeto o idea existente",
    incorrectas: [
      "Un método de limpieza de pinceles y espátulas",
      "Una normativa europea sobre el uso de pigmentos tóxicos"
    ]
  },
  {
    enunciado: "¿Qué es la 'Elaboración' en el contexto de los factores creativos?",
    correcta: "El grado de acabado, detalle y complejidad con que se desarrolla una idea original",
    incorrectas: [
      "El tiempo total que se tarda en fabricar un producto industrial",
      "La selección de los soportes físicos (papel, lienzo) para la obra"
    ]
  },
  {
    enunciado: "¿Cómo influye el entorno social en el desarrollo de la creatividad?",
    correcta: "Puede actuar como facilitador (libertad, recursos) o inhibidor (censura, presión por la conformidad)",
    incorrectas: [
      "No influye en absoluto, ya que la creatividad es un proceso puramente biológico",
      "Solo influye en la infancia, desapareciendo su efecto en la edad adulta"
    ]
  },
  {
    enunciado: "¿Qué es la 'Bloqueo Creativo'?",
    correcta: "Una barrera psicológica (perceptiva, emocional o cultural) que impide la generación de ideas",
    incorrectas: [
      "Una técnica de escultura que consiste en tallar bloques de piedra",
      "La falta de materiales en el taller de dibujo"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre juego y creatividad en la etapa infantil?",
    correcta: "El juego es la actividad creativa primordial donde el niño experimenta con la realidad sin miedo al error",
    incorrectas: [
      "Son actividades opuestas, ya que el juego no tiene una finalidad productiva",
      "El juego distrae al niño de aprender las reglas del dibujo técnico"
    ]
  },
  {
    enunciado: "¿Qué es la analogía personal en la Sinéctica?",
    correcta: "Identificarse personalmente con un objeto o problema para entenderlo desde dentro",
    incorrectas: [
      "Comparar una obra de arte con un familiar cercano",
      "Dibujar un autorretrato utilizando objetos cotidianos"
    ]
  },
  {
    enunciado: "¿Qué autor propuso los 'Seis sombreros para pensar'?",
    correcta: "Edward de Bono",
    incorrectas: [
      "Viktor Lowenfeld",
      "Howard Gardner"
    ]
  },
  {
    enunciado: "¿Qué representa el 'Sombrero Verde' en la técnica de De Bono?",
    correcta: "La creatividad, la generación de nuevas ideas y alternativas",
    incorrectas: [
      "El juicio crítico y la detección de riesgos",
      "La gestión y el control del proceso de pensamiento"
    ]
  },
  {
    enunciado: "¿Qué es la 'Resistencia a la clausura'?",
    correcta: "La capacidad de mantener las soluciones abiertas el mayor tiempo posible para evitar cierres prematuros y simples",
    incorrectas: [
      "No querer terminar un cuadro nunca por miedo a la crítica",
      "La dureza de un material antes de romperse"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la etapa del 'Realismo visual' según Lowenfeld?",
    correcta: "El niño busca la representación objetiva de la realidad, dándole importancia a la perspectiva y la luz (aprox. 12 años)",
    incorrectas: [
      "Es la etapa de los primeros garabatos sin intención representativa",
      "Cuando el niño dibuja lo que sabe de las cosas (transparencias), no lo que ve"
    ]
  },
  {
    enunciado: "¿Qué es la 'Motivación Intrínseca' en la creatividad?",
    correcta: "El impulso de crear por el placer de la actividad misma, no por recompensas externas",
    incorrectas: [
      "El motor eléctrico que mueve algunas esculturas cinéticas",
      "El deseo de ganar un concurso de dibujo para obtener el premio"
    ]
  },
  {
    enunciado: "¿En qué consiste la técnica del 'Relato de palabras aleatorias'?",
    correcta: "Forzar una conexión entre el problema y una palabra elegida al azar para romper bloqueos mentales",
    incorrectas: [
      "Escribir un diccionario de términos artísticos sin orden alfabético",
      "Leer un texto al revés para encontrar mensajes ocultos"
    ]
  },
  {
    enunciado: "¿Qué es la sensibilidad a los problemas como factor creativo?",
    correcta: "La capacidad de detectar deficiencias, fallos o necesidades que otros pasan por alto",
    incorrectas: [
      "Tener problemas de visión al dibujar de lejos",
      "Llorar cuando un dibujo no sale como uno esperaba"
    ]
  },
  {
    enunciado: "¿Qué autor formuló la teoría de las Inteligencias Múltiples?",
    correcta: "Howard Gardner",
    incorrectas: [
      "Sigmund Freud",
      "Pablo Picasso"
    ]
  },
  {
    enunciado: "¿Qué es el 'pensamiento bisociativo' de Arthur Koestler?",
    correcta: "La conexión de dos marcos de referencia independientes para crear una nueva síntesis (la base del humor y la ciencia)",
    incorrectas: [
      "Pensar en dos cosas a la vez mientras se dibuja",
      "Dividir el cerebro en dos partes para trabajar más rápido"
    ]
  },
  {
    enunciado: "¿Cuál es el principal enemigo de la creatividad en el sistema educativo tradicional?",
    correcta: "El miedo al error y la estandarización de las respuestas únicas",
    incorrectas: [
      "El uso excesivo de papel y lápiz",
      "La falta de ordenadores en el aula de dibujo"
    ]
  }
];