// temarios/54-La-revolucion-cientifica-galileo-y-newton.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo define mejor la llamada 'revolución científica' de los siglos XVI y XVII?",
    correcta: "El paso a una ciencia matematizada y experimental que rompe con el marco escolástico",
    incorrectas: [
      "La sustitución de toda observación por especulación metafísica",
      "La vuelta a la física cualitativa de Platón y Plotino"
    ]
  },
  {
    enunciado: "¿Qué afirma Galileo cuando dice que la naturaleza está escrita en 'lenguaje matemático'?",
    correcta: "Que solo mediante figuras y números se pueden formular leyes exactas de los fenómenos",
    incorrectas: [
      "Que las matemáticas sustituyen cualquier forma de observación",
      "Que la verdad científica depende de la autoridad de Euclides"
    ]
  },
  {
    enunciado: "¿Cuál de estos descubrimientos astronómicos de Galileo refutaba el geocentrismo?",
    correcta: "Las fases de Venus observadas con telescopio",
    incorrectas: [
      "La existencia del éter celeste",
      "El paralaje estelar medido a simple vista"
    ]
  },
  {
    enunciado: "¿Qué obra de Galileo confronta los sistemas ptolomaico y copernicano en forma de diálogo?",
    correcta: "Diálogo sobre los dos máximos sistemas del mundo (1632)",
    incorrectas: [
      "Sidereus Nuncius (1610)",
      "Discursos y demostraciones matemáticas en torno a dos nuevas ciencias (1638)"
    ]
  },
  {
    enunciado: "En cinemática, ¿qué ley atribuye Galileo al movimiento de caída libre (sin rozamiento)?",
    correcta: "Que las distancias recorridas son proporcionales al cuadrado del tiempo",
    incorrectas: [
      "Que la velocidad es constante desde el inicio de la caída",
      "Que el peso determina trayectorias circulares naturales"
    ]
  },
  {
    enunciado: "¿Qué aparato científico fue decisivo en la astronomía de Galileo?",
    correcta: "El telescopio refractor",
    incorrectas: [
      "El espectrómetro de masas",
      "El interferómetro Michelson–Morley"
    ]
  },
  {
    enunciado: "¿Qué significación tuvieron los satélites de Júpiter descubiertos por Galileo (los 'mediceos')?",
    correcta: "Mostraban un sistema no centrado en la Tierra y apoyaban el heliocentrismo",
    incorrectas: [
      "Probaban la existencia de epiciclos perfectos",
      "Confirmaban la inmovilidad absoluta de la Tierra"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el 'experimento ideal' (o mental) en Galileo?",
    correcta: "Le permite aislar variables y deducir leyes aun cuando el experimento físico es imposible",
    incorrectas: [
      "Sustituye la experiencia empírica por la autoridad textual",
      "Sirve para justificar hipótesis ad hoc no comprobables"
    ]
  },
  {
    enunciado: "¿Qué formulación galileana anticipa la ley de inercia?",
    correcta: "Un cuerpo tiende a mantener su estado de movimiento uniforme rectilíneo si no actúa una fuerza",
    incorrectas: [
      "Todo cuerpo tiende a su lugar natural describiendo círculos",
      "La aceleración es nula siempre que exista gravedad"
    ]
  },
  {
    enunciado: "¿Qué institución juzgó a Galileo en 1633?",
    correcta: "El Santo Oficio (Inquisición romana)",
    incorrectas: [
      "La Royal Society de Londres",
      "La Universidad de Padua"
    ]
  },
  {
    enunciado: "¿Qué obra fundacional de Newton sistematiza las leyes del movimiento y la gravitación?",
    correcta: "Philosophiae Naturalis Principia Mathematica (1687)",
    incorrectas: [
      "De revolutionibus orbium coelestium (1543)",
      "Nova Scientia (1537)"
    ]
  },
  {
    enunciado: "¿Cuál es la Primera Ley de Newton?",
    correcta: "La ley de inercia: un cuerpo persevera en su estado de reposo o movimiento rectilíneo uniforme si no actúa una fuerza",
    incorrectas: [
      "La ley de acción y reacción",
      "La ley de gravitación universal"
    ]
  },
  {
    enunciado: "¿Cuál es la Segunda Ley de Newton en su formulación estándar?",
    correcta: "La fuerza neta es proporcional a la aceleración (F = m·a)",
    incorrectas: [
      "La cantidad de movimiento se conserva en sistemas abiertos",
      "La energía potencial es proporcional al cuadrado de la velocidad"
    ]
  },
  {
    enunciado: "¿Qué enuncia la Tercera Ley de Newton?",
    correcta: "A toda acción corresponde una reacción igual y opuesta",
    incorrectas: [
      "Toda partícula sigue una órbita elíptica",
      "La fuerza es inversamente proporcional a la distancia recorrida"
    ]
  },
  {
    enunciado: "¿Qué expresa la ley de la gravitación universal formulada por Newton?",
    correcta: "Toda masa atrae a otra con una fuerza proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia",
    incorrectas: [
      "La gravedad actúa solo sobre los cuerpos terrestres pesados",
      "La gravedad empuja a los cuerpos hacia su lugar natural"
    ]
  },
  {
    enunciado: "¿Qué novedad conceptualmente decisiva introducen los Principia respecto al cosmos?",
    correcta: "La unificación del mundo sublunar y supralunar bajo las mismas leyes",
    incorrectas: [
      "La separación tajante entre física terrestre y celeste",
      "La recuperación de las esferas cristalinas medievales"
    ]
  },
  {
    enunciado: "¿Qué significa el 'hypotheses non fingo' de Newton?",
    correcta: "Rechazar hipótesis no deducidas de los fenómenos y sus leyes matemáticas",
    incorrectas: [
      "Negar la existencia de causas en la naturaleza",
      "Sustituir la experimentación por la geometría pura"
    ]
  },
  {
    enunciado: "¿Qué entiende Newton por espacio y tiempo en su marco mecánico?",
    correcta: "Magnitudes absolutas, verdaderas y matemáticas, independientes de los cuerpos",
    incorrectas: [
      "Relaciones puramente relativas definidas por observadores inerciales",
      "Propiedades cualitativas que cambian con la sustancia"
    ]
  },
  {
    enunciado: "¿Qué relación guardan Galileo y Newton en la historia de la ciencia?",
    correcta: "Galileo inaugura la física matemática experimental y Newton la culmina con una síntesis axiomática",
    incorrectas: [
      "Newton refuta por completo todos los principios de Galileo",
      "Galileo es posterior y corrige las leyes de Newton"
    ]
  },
  {
    enunciado: "¿Qué aportación hace Newton a la óptica que revela la naturaleza compuesta de la luz blanca?",
    correcta: "La descomposición de la luz con prismas en el espectro visible",
    incorrectas: [
      "La interferencia de electrones a doble rendija",
      "La cuantización de la energía electromagnética"
    ]
  },
  {
    enunciado: "¿Cuál es una diferencia metodológica típica entre Galileo y Newton?",
    correcta: "Galileo privilegia el experimento ideal y la modelización cinemática; Newton formaliza principios dinámicos generales",
    incorrectas: [
      "Galileo rechaza las matemáticas y Newton las adopta",
      "Newton basa sus leyes en la autoridad aristotélica"
    ]
  },
  {
    enunciado: "¿Qué rasgo del mecanicismo se consolida con Newton?",
    correcta: "La explicación causal en términos de fuerzas y leyes matemáticas universales",
    incorrectas: [
      "La prioridad de cualidades ocultas irreductibles a medición",
      "La reducción de toda dinámica a finalidades intrínsecas"
    ]
  },
  {
    enunciado: "¿Qué institución británica estuvo ligada a la obra de Newton y a la nueva ciencia?",
    correcta: "La Royal Society de Londres",
    incorrectas: [
      "La Accademia dei Lincei fundada por Descartes",
      "La Congregación del Índice de Florencia"
    ]
  },
  {
    enunciado: "¿Qué crítica posterior limita el alcance del espacio y tiempo absolutos newtonianos?",
    correcta: "La teoría de la relatividad de Einstein",
    incorrectas: [
      "La teoría geocéntrica de Tycho Brahe",
      "La teoría de los vórtices de Descartes tal como Newton la adoptó"
    ]
  },
  {
    enunciado: "¿Qué avance técnico fue clave para medir con precisión el tiempo en experimentos galileanos?",
    correcta: "El uso de relojes (p. ej., de agua o péndulo) para cronometraje",
    incorrectas: [
      "El barómetro de Torricelli para medir longitudes",
      "El sextante para pesar masas"
    ]
  },
  {
    enunciado: "¿Qué afirma la dinámica newtoniana sobre la relación entre fuerza y cambio de movimiento?",
    correcta: "Que la fuerza neta produce aceleración proporcional e imprime cambio en la cantidad de movimiento",
    incorrectas: [
      "Que la fuerza es proporcional a la velocidad",
      "Que sin fuerza todo cuerpo cae acelerando indefinidamente"
    ]
  },
  {
    enunciado: "¿Qué conclusión extrae Galileo de sus observaciones de las manchas solares?",
    correcta: "Que los cielos no son inmutables y presentan cambios",
    incorrectas: [
      "Que las manchas son ángeles girando alrededor del Sol",
      "Que el Sol orbita a la Tierra con movimiento excéntrico"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre Kepler y Newton en torno a las órbitas planetarias?",
    correcta: "Newton deduce las leyes de Kepler a partir de su ley de gravitación y las leyes del movimiento",
    incorrectas: [
      "Kepler refuta la gravitación universal",
      "Newton postula órbitas perfectas circulares contra Kepler"
    ]
  },
  {
    enunciado: "¿Qué noción reemplaza el 'lugar natural' aristotélico en la física moderna?",
    correcta: "El estado de movimiento descrito por leyes y condiciones iniciales",
    incorrectas: [
      "La tendencia teleológica de la materia a la perfección",
      "El impulso de las esferas celestes"
    ]
  },
  {
    enunciado: "¿Qué rasgo institucional caracteriza la nueva ciencia del XVII?",
    correcta: "La creación de academias y redes epistolares que validan resultados por pares",
    incorrectas: [
      "El secreto gremial y la transmisión exclusivamente oral",
      "La censura total de cualquier publicación científica"
    ]
  },
  {
    enunciado: "¿Qué obra tardía de Galileo sintetiza su investigación en estática y resistencia de materiales?",
    correcta: "Discursos y demostraciones matemáticas en torno a dos nuevas ciencias (1638)",
    incorrectas: [
      "De humani corporis fabrica",
      "De magnete"
    ]
  },
  {
    enunciado: "¿Qué principio físico se opone a la concepción aristotélica de que 'lo pesado cae más rápido'?",
    correcta: "La aceleración uniforme independiente de la masa (en vacío)",
    incorrectas: [
      "La tendencia de lo ligero a ascender por esencia",
      "La existencia del éter que frena solo a cuerpos livianos"
    ]
  },
  {
    enunciado: "Según Newton, ¿qué magnitud conserva un sistema aislado en ausencia de fuerzas externas?",
    correcta: "La cantidad de movimiento total",
    incorrectas: [
      "La energía cinética individual de cada cuerpo",
      "El peso total medido en la Tierra"
    ]
  },
  {
    enunciado: "¿Qué relación mantuvo Newton entre ciencia y teología?",
    correcta: "Consideró compatible su investigación natural con una teología natural providente",
    incorrectas: [
      "Rechazó toda creencia religiosa por incompatible con la mecánica",
      "Sustituyó la explicación física por milagros en los Principia"
    ]
  },
  {
    enunciado: "¿Qué factor cultural favoreció la difusión de la nueva ciencia en Europa?",
    correcta: "La imprenta y el auge de publicaciones científicas periódicas",
    incorrectas: [
      "La prohibición de imprimir tratados matemáticos",
      "El monopolio estatal sobre toda correspondencia privada"
    ]
  },
  {
    enunciado: "¿Qué objeción metodológica dirigió Newton a Descartes?",
    correcta: "Criticó los vórtices cartesianos por no ajustarse a los fenómenos y carecer de formulación matemática adecuada",
    incorrectas: [
      "Negó el uso de geometría en física por 'demasiado abstracta'",
      "Adoptó como propias las hipótesis de los vórtices"
    ]
  },
  {
    enunciado: "¿Qué muestra el movimiento de los proyectiles en Galileo respecto a la composición de movimientos?",
    correcta: "Que la trayectoria es parabólica por la combinación de movimiento horizontal uniforme y vertical acelerado",
    incorrectas: [
      "Que toda trayectoria natural es circular perfecta",
      "Que la gravedad solo actúa al final de la caída"
    ]
  },
  {
    enunciado: "¿Qué actitud epistemológica caracteriza la nueva ciencia frente a la autoridad clásica?",
    correcta: "La primacía de la prueba empírica y matemática sobre el argumento de autoridad",
    incorrectas: [
      "La subordinación del cálculo a los comentarios medievales",
      "La aceptación de Aristóteles como criterio final"
    ]
  },
  {
    enunciado: "¿Qué magnitud introducen Galileo y Newton como central para describir la dinámica?",
    correcta: "La cantidad de movimiento (momento lineal)",
    incorrectas: [
      "El lugar natural",
      "La cualidad caliente/frío de los cuerpos"
    ]
  },
  {
    enunciado: "¿Qué idea ilustrada se ve reforzada por el éxito de la física newtoniana?",
    correcta: "La confianza en la razón y el progreso mediante la ciencia",
    incorrectas: [
      "El retorno a explicaciones míticas de la naturaleza",
      "La imposibilidad de leyes universales"
    ]
  },
  {
    enunciado: "¿Qué diferencia establece Newton entre masa y peso?",
    correcta: "La masa mide inercia; el peso es la fuerza gravitatoria ejercida sobre esa masa",
    incorrectas: [
      "La masa es la fuerza; el peso es la distancia",
      "La masa varía con la altura y el peso es constante"
    ]
  },
  {
    enunciado: "¿Qué autor posterior toma la física newtoniana como modelo en su crítica de la razón?",
    correcta: "Immanuel Kant",
    incorrectas: [
      "Friedrich Nietzsche",
      "Søren Kierkegaard"
    ]
  }
];
