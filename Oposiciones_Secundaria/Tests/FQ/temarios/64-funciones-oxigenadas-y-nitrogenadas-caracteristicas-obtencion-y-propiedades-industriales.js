// temarios/64-funciones-oxigenadas-y-nitrogenadas-caracteristicas-obtencion-y-propiedades-industriales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo químico general introducen el oxígeno y el nitrógeno en las moléculas orgánicas?",
    correcta: "Aumentan la polaridad molecular y condicionan la reactividad química",
    incorrectas: [
      "Eliminan toda posibilidad de enlace covalente",
      "Reducen la masa molecular sin afectar a propiedades químicas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por grupo funcional en química orgánica?",
    correcta: "Un conjunto de átomos que confiere propiedades químicas características a una familia de compuestos",
    incorrectas: [
      "Una cadena hidrocarbonada sin heteroátomos",
      "Un enlace metálico entre carbonos consecutivos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza estructuralmente a un alcohol?",
    correcta: "La presencia de un grupo hidroxilo unido a un carbono saturado",
    incorrectas: [
      "La presencia de un grupo carbonilo unido a dos radicales",
      "Un triple enlace carbono-nitrógeno terminal"
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental existe entre alcoholes y fenoles?",
    correcta: "En los fenoles el grupo hidroxilo está unido a un anillo aromático",
    incorrectas: [
      "Los alcoholes no contienen oxígeno",
      "Los fenoles no pueden formar enlaces por hidrógeno"
    ]
  },
  {
    enunciado: "¿Qué método industrial es clave en la obtención de etanol a gran escala?",
    correcta: "La fermentación alcohólica de azúcares o la hidratación de eteno",
    incorrectas: [
      "La nitración directa del metano",
      "La oxidación completa del benceno"
    ]
  },
  {
    enunciado: "¿Por qué los alcoholes presentan puntos de ebullición relativamente elevados?",
    correcta: "Por la formación de enlaces de hidrógeno intermoleculares",
    incorrectas: [
      "Por la presencia de enlaces metálicos",
      "Por la ausencia total de fuerzas intermoleculares"
    ]
  },
  {
    enunciado: "¿Qué estructura general define a un éter?",
    correcta: "Un átomo de oxígeno enlazado a dos radicales orgánicos",
    incorrectas: [
      "Un grupo carbonilo unido a un hidrógeno",
      "Un grupo amino unido a un anillo aromático"
    ]
  },
  {
    enunciado: "¿Qué propiedad explica el uso de muchos éteres como disolventes?",
    correcta: "Su baja reactividad química y polaridad moderada",
    incorrectas: [
      "Su elevada acidez en disolución acuosa",
      "Su tendencia a polimerizar espontáneamente"
    ]
  },
  {
    enunciado: "¿Qué reacción clásica permite obtener éteres de forma controlada?",
    correcta: "La síntesis de Williamson",
    incorrectas: [
      "La nitración aromática",
      "La fermentación anaerobia"
    ]
  },
  {
    enunciado: "¿Qué grupo funcional define a aldehídos y cetonas?",
    correcta: "El grupo carbonilo",
    incorrectas: [
      "El grupo carboxilo",
      "El grupo amino protonado"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia estructural entre un aldehído y una cetona?",
    correcta: "El aldehído tiene el carbonilo terminal y la cetona lo tiene interno",
    incorrectas: [
      "Las cetonas no contienen oxígeno",
      "Los aldehídos tienen dos radicales unidos al carbonilo"
    ]
  },
  {
    enunciado: "¿Cómo se obtienen habitualmente los aldehídos?",
    correcta: "Por oxidación controlada de alcoholes primarios",
    incorrectas: [
      "Por reducción directa de ácidos carboxílicos",
      "Por nitración de alcanos"
    ]
  },
  {
    enunciado: "¿Qué compuesto es un ejemplo típico de cetona de uso industrial?",
    correcta: "La acetona",
    incorrectas: [
      "El etanol",
      "El ácido acético"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al grupo carboxilo?",
    correcta: "La combinación de un grupo carbonilo y un hidroxilo",
    incorrectas: [
      "La presencia de un triple enlace C≡N",
      "Un átomo de oxígeno enlazado a dos hidrógenos"
    ]
  },
  {
    enunciado: "¿Qué propiedad explica el carácter ácido de los ácidos carboxílicos?",
    correcta: "La estabilización del anión carboxilato por resonancia",
    incorrectas: [
      "La presencia de enlaces metálicos",
      "La completa ausencia de polaridad"
    ]
  },
  {
    enunciado: "¿Qué derivados se obtienen comúnmente a partir de ácidos carboxílicos?",
    correcta: "Ésteres, sales, amidas y anhídridos",
    incorrectas: [
      "Alcanos y alquenos saturados",
      "Halogenuros metálicos"
    ]
  },
  {
    enunciado: "¿Qué reacción permite obtener ésteres de forma clásica?",
    correcta: "La esterificación entre un ácido carboxílico y un alcohol",
    incorrectas: [
      "La nitración aromática",
      "La hidrogenación de alquinos"
    ]
  },
  {
    enunciado: "¿Por qué los ésteres son importantes industrialmente?",
    correcta: "Por su uso en aromas, disolấticas y disolventes",
    incorrectas: [
      "Porque son siempre explosivos",
      "Porque sustituyen a los metales estructurales"
    ]
  },
  {
    enunciado: "¿Qué efecto general introduce el nitrógeno en moléculas orgánicas?",
    correcta: "Carácter básico y capacidad de formar sales",
    incorrectas: [
      "Carácter ácido fuerte en todos los casos",
      "Neutralidad química absoluta"
    ]
  },
  {
    enunciado: "¿Qué son las aminas desde el punto de vista estructural?",
    correcta: "Derivados del amoniaco con sustitución de hidrógenos por radicales orgánicos",
    incorrectas: [
      "Derivados oxigenados del metano",
      "Sales inorgánicas de nitrógeno"
    ]
  },
  {
    enunciado: "¿Cómo se clasifican las aminas según su estructura?",
    correcta: "En primarias, secundarias y terciarias",
    incorrectas: [
      "En saturadas e insaturadas",
      "En aromáticas y metálicas"
    ]
  },
  {
    enunciado: "¿Qué uso industrial es característico de las aminas?",
    correcta: "La síntesis de fármacos, colorantes y tensioactivos",
    incorrectas: [
      "La obtención directa de metales",
      "La producción de combustibles fósiles"
    ]
  },
  {
    enunciado: "¿Qué estructura define a una amida?",
    correcta: "Un grupo carbonilo unido a un nitrógeno",
    incorrectas: [
      "Un grupo amino unido a un oxígeno",
      "Un grupo carboxilo sin heteroátomos"
    ]
  },
  {
    enunciado: "¿Qué importancia tienen las amidas en química y biología?",
    correcta: "Forman enlaces peptídicos y polímeros como el nailon",
    incorrectas: [
      "Son irrelevantes fuera del laboratorio",
      "Solo aparecen en combustibles"
    ]
  },
  {
    enunciado: "¿Qué caracteriza estructuralmente a un nitrilo?",
    correcta: "La presencia de un triple enlace carbono-nitrógeno",
    incorrectas: [
      "La presencia de un grupo hidroxilo aromático",
      "Un doble enlace carbono-oxígeno"
    ]
  },
  {
    enunciado: "¿Qué utilidad tienen los nitrilos en industria química?",
    correcta: "Son intermediarios versátiles y precursores de polímeros",
    incorrectas: [
      "Se usan solo como combustibles",
      "Carecen de interés industrial"
    ]
  },
  {
    enunciado: "¿Qué grupo funcional define a los nitrocompuestos?",
    correcta: "El grupo nitro unido al carbono",
    incorrectas: [
      "El grupo amino protonado",
      "El grupo carboxilato"
    ]
  },
  {
    enunciado: "¿Cómo se obtienen habitualmente los nitrocompuestos aromáticos?",
    correcta: "Por nitración con mezclas de ácido nítrico y sulfúrico",
    incorrectas: [
      "Por fermentación bacteriana",
      "Por hidrogenación catalítica directa"
    ]
  },
  {
    enunciado: "¿Qué riesgo se asocia a muchos nitrocompuestos?",
    correcta: "Toxicidad y potencial explosivo",
    incorrectas: [
      "Total inocuidad biológica",
      "Inestabilidad solo a temperaturas criogénicas"
    ]
  },
  {
    enunciado: "¿Qué factor condiciona fuertemente la solubilidad de estos compuestos en agua?",
    correcta: "La polaridad y la capacidad de formar enlaces de hidrógeno",
    incorrectas: [
      "El color del compuesto",
      "La masa atómica del carbono"
    ]
  },
  {
    enunciado: "¿Por qué las funciones oxigenadas y nitrogenadas son clave en síntesis orgánica?",
    correcta: "Porque actúan como centros reactivos bien definidos",
    incorrectas: [
      "Porque son químicamente inertes",
      "Porque impiden cualquier transformación posterior"
    ]
  },
  {
    enunciado: "¿Qué aplicación tiene el formaldehído en industria?",
    correcta: "Producción de resinas y como conservante químico",
    incorrectas: [
      "Combustible principal de motores",
      "Aditivo alimentario inocuo"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre funciones orgánicas y diseño de fármacos?",
    correcta: "Determinan interacciones químicas y biológicas específicas",
    incorrectas: [
      "No influyen en la actividad farmacológica",
      "Solo afectan al color del fármaco"
    ]
  },
  {
    enunciado: "¿Por qué muchas aminas aromáticas requieren control estricto?",
    correcta: "Por su toxicidad y posible carácter cancerígeno",
    incorrectas: [
      "Porque son completamente inertes",
      "Porque reaccionan solo con metales nobles"
    ]
  },
  {
    enunciado: "¿Qué papel juegan estos compuestos en la industria alimentaria?",
    correcta: "Aromatizantes, conservantes y aditivos específicos",
    incorrectas: [
      "Sustitutos universales del agua",
      "Elementos estructurales metálicos"
    ]
  },
  {
    enunciado: "¿Qué criterio general guía el manejo industrial de estas sustancias?",
    correcta: "Control de seguridad, toxicidad y condiciones de uso",
    incorrectas: [
      "Ausencia total de protocolos",
      "Uso libre sin regulación"
    ]
  }
];