// temarios/24-coherencia-textual-deixis-anafora-y-catafora-la-progresion-tematica.js
var PREGUNTAS = [
  {
    enunciado: "La coherencia textual es la propiedad que garantiza la unidad semántica y lógica de un texto.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Solo se refiere a la corrección ortográfica"
    ]
  },
  {
    enunciado: "La coherencia global de un texto se refiere a la unidad temática general que lo recorre de principio a fin.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Solo afecta a la última oración del texto"
    ]
  },
  {
    enunciado: "La coherencia lineal asegura la continuidad informativa entre oraciones consecutivas.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Es un sinónimo de cohesión léxica"
    ]
  },
  {
    enunciado: "La coherencia local atañe a las microrelaciones de sentido entre proposiciones cercanas del discurso.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Solo depende del uso de conectores adversativos"
    ]
  },
  {
    enunciado: "Indica la opción que mejor define la coherencia textual.",
    correcta: "Relación significativa y lógica entre las partes del texto en torno a un tema común",
    incorrectas: [
      "Repetición mecánica de palabras clave a lo largo del texto",
      "Uso sistemático de oraciones simples sin subordinación"
    ]
  },
  {
    enunciado: "Señala el enunciado que quiebra la coherencia: “La Revolución Francesa transformó Europa. La guillotina se empleó con frecuencia. Las ballenas son los mamíferos más grandes.”",
    correcta: "El tercer enunciado porque introduce un tema ajeno al tópico histórico previo",
    incorrectas: [
      "El primero porque es demasiado general para un texto",
      "El segundo porque contiene un sustantivo técnico"
    ]
  },
  {
    enunciado: "El principio tema–rema articula la información conocida y la información nueva en el discurso.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Solo se aplica a textos literarios"
    ]
  },
  {
    enunciado: "Selecciona la mejor definición de tema en la organización informativa.",
    correcta: "El punto de partida informativo, habitualmente conocido o dado por el contexto",
    incorrectas: [
      "La información novedosa que cierra el párrafo",
      "El conjunto de marcadores discursivos de un texto"
    ]
  },
  {
    enunciado: "Selecciona la mejor definición de rema en la organización informativa.",
    correcta: "La información nueva que se añade al tema para hacer avanzar el texto",
    incorrectas: [
      "La repetición del tema con sinónimos",
      "El conjunto de ejemplos que adornan el texto"
    ]
  },
  {
    enunciado: "La progresión de tema constante mantiene el mismo tema en varias oraciones aportando remas distintos.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Equivale a la progresión lineal"
    ]
  },
  {
    enunciado: "En la progresión lineal, el rema de una oración pasa a ser el tema de la siguiente.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Se limita al primer y último enunciado del texto"
    ]
  },
  {
    enunciado: "La progresión por temas derivados parte de un hipertema del que se desprenden subtemas relacionados.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Es una forma de repetición sin avance informativo"
    ]
  },
  {
    enunciado: "Indica el ejemplo de progresión de tema constante.",
    correcta: "La fotosíntesis es esencial. La fotosíntesis produce oxígeno. La fotosíntesis sostiene las cadenas tróficas.",
    incorrectas: [
      "La fotosíntesis produce oxígeno. Este gas permite la respiración. La respiración mantiene la vida.",
      "Los ecosistemas incluyen bosques y mares. Los bosques regulan el clima. Los mares albergan biodiversidad."
    ]
  },
  {
    enunciado: "Indica el ejemplo de progresión lineal.",
    correcta: "La energía solar es renovable. Esta renovabilidad reduce emisiones. Esa reducción mejora la calidad del aire.",
    incorrectas: [
      "La energía solar es renovable. La energía solar es limpia. La energía solar es abundante.",
      "La energía solar es renovable. Las energías fósiles emiten CO₂. Las ciudades necesitan energía."
    ]
  },
  {
    enunciado: "Indica el ejemplo de progresión por temas derivados desde un hipertema.",
    correcta: "Los vertebrados se clasifican en mamíferos, aves y reptiles. Los mamíferos son homeotermos. Las aves tienen plumas. Los reptiles son poiquilotermos.",
    incorrectas: [
      "Los vertebrados viven en tierra. Viven en agua. Viven en aire.",
      "Los vertebrados son animales. Los invertebrados no tienen esqueleto. Las plantas realizan fotosíntesis."
    ]
  },
  {
    enunciado: "La deixis es la dependencia de ciertas expresiones respecto a la situación de enunciación.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Se limita al lenguaje escrito formal"
    ]
  },
  {
    enunciado: "Señala la opción que contiene deixis personal.",
    correcta: "“Yo te escribiré mañana.”",
    incorrectas: [
      "“Los planetas giran alrededor del Sol.”",
      "“Se prohíbe fumar en este recinto.”"
    ]
  },
  {
    enunciado: "Señala la opción que contiene deixis temporal.",
    correcta: "“Nos vemos hoy a las cinco.”",
    incorrectas: [
      "“El triángulo tiene tres lados.”",
      "“La biblioteca está en la segunda planta.”"
    ]
  },
  {
    enunciado: "Señala la opción que contiene deixis espacial.",
    correcta: "“Pon ese libro aquí, por favor.”",
    incorrectas: [
      "“El hierro es un metal.”",
      "“Todos aprobaron el examen.”"
    ]
  },
  {
    enunciado: "La deixis discursiva orienta al lector dentro del propio texto con expresiones como “lo anterior” o “a continuación”.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Solo aparece en textos literarios en verso"
    ]
  },
  {
    enunciado: "La anáfora es un mecanismo cohesivo que remite a un elemento mencionado previamente en el texto.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Es lo mismo que la catáfora"
    ]
  },
  {
    enunciado: "Señala el ejemplo con anáfora correferencial adecuada.",
    correcta: "“María compró un libro y lo comenzó esa misma noche.”",
    incorrectas: [
      "“María compró un libro y comenzó esa misma noche.”",
      "“María compró un libro y esa comenzó lo mismo noche.”"
    ]
  },
  {
    enunciado: "La catáfora anticipa un referente que se explicita después en el discurso.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Es un tipo de deixis espacial"
    ]
  },
  {
    enunciado: "Señala el ejemplo con catáfora.",
    correcta: "“Cuando lo necesites, Juan te ayudará.”",
    incorrectas: [
      "“Juan te ayudará cuando lo necesites.”",
      "“Juan te ayudó ayer por la tarde.”"
    ]
  },
  {
    enunciado: "La correferencia entre pronombre y antecedente exige concordancia de género y número para mantener la coherencia local.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Solo requiere proximidad gráfica en la línea"
    ]
  },
  {
    enunciado: "Identifica el fallo de referencia que rompe la coherencia: “Ana vio a Laura y le dijo que vendrían con sus hermanos, pero ella se negó.”",
    correcta: "Ambigüedad pronominal por múltiples posibles referentes de “le” y “ella”",
    incorrectas: [
      "Uso incorrecto del pretérito perfecto compuesto",
      "Ausencia de conectores adversativos"
    ]
  },
  {
    enunciado: "Los marcadores discursivos contribuyen a la coherencia al explicitar relaciones lógicas como causa, contraste o consecuencia.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Solo cumplen una función ornamental"
    ]
  },
  {
    enunciado: "Selecciona el conector que introduce contraste en la organización informativa.",
    correcta: "Sin embargo",
    incorrectas: [
      "Por consiguiente",
      "En primer lugar"
    ]
  },
  {
    enunciado: "Selecciona el conector que introduce consecuencia en la organización informativa.",
    correcta: "Por tanto",
    incorrectas: [
      "Aunque",
      "En cambio"
    ]
  },
  {
    enunciado: "Una progresión temática errática con saltos bruscos de tópico suele producir pérdida de coherencia global.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Mejora la variedad estilística sin inconvenientes"
    ]
  },
  {
    enunciado: "En textos académicos, una estrategia eficaz para la coherencia es anunciar el hipertema y desarrollar subtemas en párrafos separados.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Se considera un vicio de estructura denominado digresión"
    ]
  },
  {
    enunciado: "La sustitución léxica mediante sinónimos y hiperónimos puede favorecer la cohesión referencial sin sacrificar la coherencia.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Siempre crea ambigüedad semántica"
    ]
  },
  {
    enunciado: "El uso indiscriminado de pronombres sin antecedentes claros afecta negativamente a la coherencia local del texto.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Equivale a una figura retórica aceptable"
    ]
  },
  {
    enunciado: "Identifica la mejor reescritura para mejorar la coherencia: “Hubo una sequía. Las cosechas disminuyeron. La astronomía es fascinante.”",
    correcta: "“Hubo una sequía, por lo que las cosechas disminuyeron en buena parte del país.”",
    incorrectas: [
      "“Las cosechas disminuyeron y la astronomía es fascinante.”",
      "“Hubo una sequía y las cosechas disminuyeron; sin embargo, sequía.”"
    ]
  },
  {
    enunciado: "En un texto expositivo, la progresión temática clara ayuda a que el lector anticipe la organización del contenido.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Solo es relevante en textos narrativos"
    ]
  },
  {
    enunciado: "La deixis combinada con anáforas y catáforas bien resueltas facilita la construcción de modelos mentales coherentes en el lector.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Provoca necesariamente ambigüedad interpretativa"
    ]
  },
  {
    enunciado: "Selecciona el ejemplo con progresión temática desordenada.",
    correcta: "“El teatro barroco español fue muy popular. Los teléfonos móviles han cambiado la comunicación. Calderón escribió autos sacramentales.”",
    incorrectas: [
      "“El teatro barroco español fue muy popular. Calderón destacó por sus autos sacramentales. Estas piezas tuvieron gran éxito.”",
      "“El teatro barroco español fue muy popular. Esta popularidad se reflejó en los corrales. Tales espacios congregaban a diversos públicos.”"
    ]
  },
  {
    enunciado: "Un párrafo que inicia con una oración temática clara favorece la coherencia global del texto.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Solo importa la última frase del párrafo"
    ]
  },
  {
    enunciado: "La reorganización informativa (tema–rema) puede lograrse mediante pasivización si mejora la continuidad temática con el contexto previo.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Contradice la norma y debe evitarse"
    ]
  },
  {
    enunciado: "Para mantener la coherencia, las elipsis deben ser recuperables por el contexto sin generar ambigüedad.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Las elipsis están prohibidas en textos académicos"
    ]
  },
  {
    enunciado: "Una conclusión coherente suele reactivar el hipertema y sintetizar los remas principales desarrollados en el texto.",
    correcta: "Verdadero",
    incorrectas: [
      "Falso",
      "Debe introducir un tema completamente nuevo para sorprender"
    ]
  }
];
