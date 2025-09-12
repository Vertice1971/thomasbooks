// temarios/09-Naturaleza-de-las-teorias-leyes-y-modelos-cientificos-el-contexto-de-la-justificacion-y-el-contexto-del-descubrimiento.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué diferencia principal hay entre el contexto de descubrimiento y el de justificación?",
    correcta: "El descubrimiento alude al origen creativo de hipótesis y el de justificación a su validación crítica",
    incorrectas: [
      "El descubrimiento es racional y el de justificación es meramente intuitivo",
      "Ambos términos son sinónimos y no hay distinción real"
    ]
  },
  {
    enunciado: "¿Qué entendía Reichenbach por contexto de descubrimiento?",
    correcta: "El proceso heurístico y creativo en el que surgen nuevas hipótesis",
    incorrectas: [
      "El conjunto de pruebas experimentales que confirman teorías",
      "La exposición didáctica de leyes científicas en manuales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al contexto de justificación en la filosofía de la ciencia?",
    correcta: "La validación de hipótesis mediante contrastación lógica y empírica",
    incorrectas: [
      "La inspiración personal del científico",
      "El consenso social espontáneo sobre la ciencia"
    ]
  },
  {
    enunciado: "¿Qué función cumplen las leyes científicas?",
    correcta: "Expresar regularidades universales entre fenómenos",
    incorrectas: [
      "Ofrecer interpretaciones subjetivas de los hechos",
      "Reemplazar a las teorías en toda explicación científica"
    ]
  },
  {
    enunciado: "¿Cómo suelen formularse las leyes científicas?",
    correcta: "Enunciados universales condicionales del tipo 'si A, entonces B'",
    incorrectas: [
      "Definiciones arbitrarias sin posibilidad de contraste",
      "Afirmaciones poéticas sin estructura lógica"
    ]
  },
  {
    enunciado: "¿Qué condición deben cumplir las leyes científicas según Popper?",
    correcta: "Ser falsables, es decir, susceptibles de refutación empírica",
    incorrectas: [
      "Ser inmutables e imposibles de cuestionar",
      "Ser aceptadas por consenso cultural únicamente"
    ]
  },
  {
    enunciado: "¿Qué distingue a las teorías científicas de las leyes?",
    correcta: "Las teorías integran leyes y conceptos en un marco explicativo amplio",
    incorrectas: [
      "Las teorías son enunciados aislados sin conexión",
      "Las teorías carecen de poder predictivo"
    ]
  },
  {
    enunciado: "¿Qué componentes básicos forman una teoría científica?",
    correcta: "Conceptos, proposiciones y modelos interrelacionados",
    incorrectas: [
      "Mitos tradicionales y creencias religiosas",
      "Preferencias subjetivas del investigador"
    ]
  },
  {
    enunciado: "¿Qué función tiene una teoría científica?",
    correcta: "Explicar, predecir y organizar fenómenos naturales o sociales",
    incorrectas: [
      "Sustituir la experimentación empírica",
      "Eliminar la necesidad de modelos representativos"
    ]
  },
  {
    enunciado: "¿Qué debate filosófico rodea a las teorías científicas?",
    correcta: "Entre el realismo (describen la realidad) y el instrumentalismo (son herramientas útiles)",
    incorrectas: [
      "Entre la religión y la filosofía medieval",
      "Entre el empirismo radical y el misticismo"
    ]
  },
  {
    enunciado: "¿Qué son los modelos científicos?",
    correcta: "Representaciones simplificadas o idealizadas de la realidad",
    incorrectas: [
      "Teorías definitivas e inmutables",
      "Meras opiniones sin relación con la ciencia"
    ]
  },
  {
    enunciado: "¿Qué función tienen los modelos científicos?",
    correcta: "Ayudar a comprender, explicar y predecir fenómenos complejos",
    incorrectas: [
      "Sustituir las leyes por narraciones literarias",
      "Evitar la formulación matemática en ciencia"
    ]
  },
  {
    enunciado: "¿Qué ejemplo clásico de modelo científico se encuentra en física atómica?",
    correcta: "El modelo de Bohr del átomo",
    incorrectas: [
      "La teoría heliocéntrica de Copérnico",
      "El descubrimiento de la penicilina"
    ]
  },
  {
    enunciado: "¿Qué tipo de modelos emplea la biología contemporánea?",
    correcta: "Modelos matemáticos y computacionales de sistemas vivos",
    incorrectas: [
      "Exclusivamente representaciones míticas",
      "Figuras artísticas sin base empírica"
    ]
  },
  {
    enunciado: "¿Qué función heurística tienen los modelos en el contexto del descubrimiento?",
    correcta: "Facilitan la generación de hipótesis nuevas mediante analogías",
    incorrectas: [
      "Refutan automáticamente toda teoría",
      "Sustituyen a la experimentación en su totalidad"
    ]
  },
  {
    enunciado: "¿Qué filósofo defendió que las leyes expresan relaciones necesarias en la naturaleza?",
    correcta: "John Stuart Mill",
    incorrectas: [
      "Karl Marx",
      "Martin Heidegger"
    ]
  },
  {
    enunciado: "¿Qué sostiene el realismo científico sobre las teorías?",
    correcta: "Que describen, aunque sea aproximadamente, la estructura de la realidad",
    incorrectas: [
      "Que son ficciones útiles sin relación con la realidad",
      "Que son dogmas religiosos incuestionables"
    ]
  },
  {
    enunciado: "¿Qué defendió Van Fraassen en su 'Imagen científica'?",
    correcta: "El empirismo constructivo: las teorías deben salvar los fenómenos observables",
    incorrectas: [
      "El realismo metafísico extremo",
      "La reducción de toda ciencia a matemáticas puras"
    ]
  },
  {
    enunciado: "¿Qué planteó Nagel sobre las leyes científicas?",
    correcta: "Que constituyen la base de la explicación científica estructurada",
    incorrectas: [
      "Que son relatos subjetivos sin valor universal",
      "Que sustituyen la necesidad de teorías"
    ]
  },
  {
    enunciado: "¿Qué aporta Hempel con su modelo nomológico-deductivo?",
    correcta: "Una concepción de la explicación científica basada en leyes y deducción",
    incorrectas: [
      "La negación de la posibilidad de explicación científica",
      "La identificación de leyes con relatos literarios"
    ]
  },
  {
    enunciado: "¿Qué implica el descubrimiento de la penicilina para el contexto de descubrimiento?",
    correcta: "Ejemplo de serendipia en la investigación científica",
    incorrectas: [
      "Prueba de la inmutabilidad de las teorías",
      "Demostración del carácter exclusivamente deductivo de la ciencia"
    ]
  },
  {
    enunciado: "¿Qué hecho histórico ilustró la justificación de la teoría de la relatividad?",
    correcta: "La observación del eclipse de 1919 que confirmó la desviación de la luz",
    incorrectas: [
      "El descubrimiento accidental de los rayos X",
      "La construcción del modelo atómico de Dalton"
    ]
  },
  {
    enunciado: "¿Qué afirmaba Hanson sobre la observación científica?",
    correcta: "Que está cargada de teoría y no es neutral",
    incorrectas: [
      "Que es completamente objetiva y sin presupuestos",
      "Que se reduce a la descripción artística"
    ]
  },
  {
    enunciado: "¿Qué opinaba Popper sobre el contexto de descubrimiento?",
    correcta: "Que no era filosóficamente relevante, lo importante era la justificación crítica",
    incorrectas: [
      "Que el descubrimiento anulaba la justificación",
      "Que la ciencia carece de descubrimientos"
    ]
  },
  {
    enunciado: "¿Qué defendía Feyerabend sobre el método científico?",
    correcta: "Que no existe un método universal y único válido para la ciencia",
    incorrectas: [
      "Que la ciencia posee reglas inmutables aplicables a todo",
      "Que los métodos científicos son irrelevantes"
    ]
  },
  {
    enunciado: "¿Qué significa la falsabilidad en el contexto de la justificación?",
    correcta: "La posibilidad de que una hipótesis sea refutada por la experiencia",
    incorrectas: [
      "La incapacidad de toda ciencia para ser cuestionada",
      "La demostración definitiva de la verdad"
    ]
  },
  {
    enunciado: "¿Qué diferencia existe entre un modelo y una teoría?",
    correcta: "El modelo representa de forma simplificada, la teoría integra y organiza explicaciones más amplias",
    incorrectas: [
      "El modelo siempre es más complejo que la teoría",
      "La teoría es provisional y el modelo es definitivo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una ley probabilística?",
    correcta: "Explica fenómenos con márgenes de probabilidad, no con determinismo absoluto",
    incorrectas: [
      "Implica predicciones exactas sin margen de error",
      "Es un enunciado meramente subjetivo"
    ]
  },
  {
    enunciado: "¿Qué filósofa destacó la función de los modelos en la ciencia con analogías?",
    correcta: "Mary Hesse",
    incorrectas: [
      "Hannah Arendt",
      "Simone de Beauvoir"
    ]
  },
  {
    enunciado: "¿Qué criticó Nancy Cartwright en 'How the Laws of Physics Lie'?",
    correcta: "Que las leyes físicas no siempre se cumplen literalmente en la realidad",
    incorrectas: [
      "Que la física no utiliza leyes en absoluto",
      "Que la ciencia no se basa en observación empírica"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la creatividad en el contexto de descubrimiento?",
    correcta: "Permite generar hipótesis y teorías nuevas a partir de intuiciones o analogías",
    incorrectas: [
      "Garantiza automáticamente la validez empírica",
      "Evita la necesidad de contrastación crítica"
    ]
  },
  {
    enunciado: "¿Qué sostuvo Kuhn sobre la ciencia?",
    correcta: "Que progresa a través de cambios de paradigma y revoluciones",
    incorrectas: [
      "Que siempre avanza linealmente",
      "Que carece de marcos de referencia"
    ]
  },
  {
    enunciado: "¿Qué ejemplo muestra un modelo computacional en ciencias sociales?",
    correcta: "Las simulaciones de comportamiento electoral",
    incorrectas: [
      "La deducción de un teorema matemático",
      "El descubrimiento del ADN en biología"
    ]
  },
  {
    enunciado: "¿Qué valor tiene distinguir entre descubrimiento y justificación?",
    correcta: "Aporta claridad metodológica y evita confundir creatividad con validación",
    incorrectas: [
      "Permite eliminar la necesidad de experimentos",
      "Implica que toda ciencia es subjetiva"
    ]
  },
  {
    enunciado: "¿Qué función principal cumplen las teorías científicas en tecnología?",
    correcta: "Facilitan la aplicación práctica del conocimiento en innovaciones",
    incorrectas: [
      "Sustituyen la observación empírica",
      "Rechazan la utilidad práctica de la ciencia"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al instrumentalismo en filosofía de la ciencia?",
    correcta: "Entiende las teorías como instrumentos útiles sin comprometerse con su verdad",
    incorrectas: [
      "Identifica las teorías con descripciones literales de la realidad",
      "Afirma que las teorías científicas son dogmas religiosos"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre leyes, teorías y modelos?",
    correcta: "Son niveles complementarios de la explicación científica con funciones distintas",
    incorrectas: [
      "Son sinónimos que se usan indistintamente",
      "Compiten entre sí hasta que una elimina a las demás"
    ]
  }
];

