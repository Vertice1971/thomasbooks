var PREGUNTAS = [
  {
    enunciado: "¿Qué es un sintagma verbal (SV)?",
    correcta: "Una unidad sintáctica cuyo núcleo es un verbo",
    incorrectas: [
      "Una unidad sintáctica cuyo núcleo es siempre un sustantivo",
      "Un conjunto de palabras sin núcleo obligatorio"
    ]
  },
  {
    enunciado: "¿Qué función principal cumple el SV en la oración?",
    correcta: "Constituir el predicado",
    incorrectas: [
      "Constituir el sujeto",
      "Funcionar como determinante del nombre"
    ]
  },
  {
    enunciado: "¿Con qué debe concordar el SV en persona y número?",
    correcta: "Con el sujeto de la oración",
    incorrectas: [
      "Con el complemento directo",
      "Con el atributo"
    ]
  },
  {
    enunciado: "¿Qué elemento es obligatorio en todo SV?",
    correcta: "Un verbo conjugado",
    incorrectas: [
      "Un sustantivo",
      "Un complemento directo"
    ]
  },
  {
    enunciado: "¿Qué tipo de verbo forma un predicado nominal?",
    correcta: "Los verbos copulativos (ser, estar, parecer)",
    incorrectas: [
      "Los verbos transitivos",
      "Los verbos intransitivos exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué complemento es característico de los verbos copulativos?",
    correcta: "El atributo",
    incorrectas: [
      "El complemento de régimen",
      "El complemento agente"
    ]
  },
  {
    enunciado: "En 'María estudia mucho', ¿cuál es el SV?",
    correcta: "Estudia mucho",
    incorrectas: [
      "María",
      "María estudia"
    ]
  },
  {
    enunciado: "¿Qué función tiene el complemento directo?",
    correcta: "Recibir directamente la acción del verbo",
    incorrectas: [
      "Indicar el lugar de la acción",
      "Modificar a un sustantivo"
    ]
  },
  {
    enunciado: "¿Qué prueba permite identificar un complemento directo?",
    correcta: "Sustituirlo por los pronombres lo/la/los/las",
    incorrectas: [
      "Sustituirlo por un adverbio",
      "Anteponer siempre la preposición 'a'"
    ]
  },
  {
    enunciado: "¿Qué función desempeña el complemento indirecto?",
    correcta: "Indicar el destinatario o beneficiario de la acción verbal",
    incorrectas: [
      "Indicar la causa de la acción",
      "Actuar como núcleo del SV"
    ]
  },
  {
    enunciado: "¿Qué pronombres suelen sustituir al complemento indirecto?",
    correcta: "Le / les",
    incorrectas: [
      "Lo / la",
      "Me / nos exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué es un complemento circunstancial?",
    correcta: "Un adyacente que expresa circunstancias de la acción (tiempo, lugar, modo, etc.)",
    incorrectas: [
      "El argumento obligatorio de todo verbo",
      "Un sinónimo del atributo"
    ]
  },
  {
    enunciado: "¿Qué es un complemento de régimen?",
    correcta: "Un complemento introducido por preposición exigido por el verbo",
    incorrectas: [
      "Un complemento circunstancial opcional",
      "Un sinónimo del complemento agente"
    ]
  },
  {
    enunciado: "¿Qué tipo de SV aparece en 'Ella es médica'?",
    correcta: "Predicado nominal",
    incorrectas: [
      "Predicado verbal",
      "Predicado mixto"
    ]
  },
  {
    enunciado: "¿Qué tipo de SV aparece en 'Juan corre por el parque'?",
    correcta: "Predicado verbal",
    incorrectas: [
      "Predicado nominal",
      "Aposición explicativa"
    ]
  },
  {
    enunciado: "¿Qué es un complemento agente?",
    correcta: "El complemento introducido por 'por' en oraciones pasivas",
    incorrectas: [
      "Un complemento que expresa cantidad",
      "Un atributo del sujeto"
    ]
  },
  {
    enunciado: "Señala un ejemplo de complemento agente:",
    correcta: "La obra fue escrita por Cervantes",
    incorrectas: [
      "Cervantes escribió la obra",
      "La obra de Cervantes fue clásica"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre argumentos y adjuntos en el SV?",
    correcta: "Los argumentos son exigidos por el verbo, los adjuntos son opcionales",
    incorrectas: [
      "Los argumentos son opcionales y los adjuntos obligatorios",
      "Ambos son opcionales y equivalentes"
    ]
  },
  {
    enunciado: "En 'El profesor explicó la lección pacientemente', ¿qué es 'pacientemente'?",
    correcta: "Un complemento circunstancial de modo",
    incorrectas: [
      "Un complemento de régimen",
      "Un atributo"
    ]
  },
  {
    enunciado: "¿Qué categoría verbal suele exigir complemento directo?",
    correcta: "Los verbos transitivos",
    incorrectas: [
      "Los verbos intransitivos",
      "Los verbos copulativos"
    ]
  },
  {
    enunciado: "¿Qué verbo requiere complemento de régimen?",
    correcta: "Depender (depender de algo/alguien)",
    incorrectas: [
      "Correr",
      "Leer"
    ]
  },
  {
    enunciado: "¿Qué verbo forma pasivas perifrásticas en español?",
    correcta: "Cualquier transitivo conjugado con 'ser' + participio",
    incorrectas: [
      "Solo los intransitivos",
      "Solo los copulativos"
    ]
  },
  {
    enunciado: "¿Qué verbo se considera copulativo?",
    correcta: "Parecer",
    incorrectas: [
      "Estudiar",
      "Correr"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre 'ser' y 'estar' como verbos copulativos?",
    correcta: "‘Ser’ indica cualidad permanente, ‘estar’ estado transitorio",
    incorrectas: [
      "Ambos expresan acción transitiva",
      "No hay diferencias de uso en español"
    ]
  },
  {
    enunciado: "¿Qué verbo puede ser semicopulativo?",
    correcta: "Resultar",
    incorrectas: [
      "Leer",
      "Cantar"
    ]
  },
  {
    enunciado: "¿Qué estructura constituye siempre un SV completo?",
    correcta: "Verbo conjugado con o sin complementos",
    incorrectas: [
      "Un sustantivo con adjetivo",
      "Un adverbio solo"
    ]
  },
  {
    enunciado: "¿Qué función cumple el atributo?",
    correcta: "Aportar una cualidad del sujeto mediante verbo copulativo",
    incorrectas: [
      "Modificar un adjetivo",
      "Sustituir al complemento directo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al predicado verbal?",
    correcta: "Tiene como núcleo un verbo predicativo",
    incorrectas: [
      "Tiene núcleo un sustantivo",
      "Está formado por una aposición"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al predicado nominal?",
    correcta: "Está formado por un verbo copulativo y un atributo",
    incorrectas: [
      "Está formado por un verbo transitivo y su complemento directo",
      "Es cualquier predicado sin sujeto"
    ]
  },
  {
    enunciado: "En 'María cantó una canción', ¿qué es 'una canción'?",
    correcta: "Complemento directo",
    incorrectas: [
      "Complemento circunstancial",
      "Complemento de régimen"
    ]
  },
  {
    enunciado: "¿Qué tipo de complemento es 'a su hermano' en 'Contó la historia a su hermano'?",
    correcta: "Complemento indirecto",
    incorrectas: [
      "Complemento directo",
      "Complemento de régimen"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre complemento directo e indirecto?",
    correcta: "El CD recibe la acción del verbo; el CI indica destinatario o beneficiario",
    incorrectas: [
      "El CD siempre lleva preposición, el CI nunca",
      "El CD concuerda en género y número con el sujeto"
    ]
  },
  {
    enunciado: "¿Qué categoría de complementos incluye tiempo, lugar y modo?",
    correcta: "Complementos circunstanciales",
    incorrectas: [
      "Complementos de régimen",
      "Complementos agentes"
    ]
  },
  {
    enunciado: "En 'Ellos parecen cansados', ¿qué función cumple 'cansados'?",
    correcta: "Atributo",
    incorrectas: [
      "Complemento directo",
      "Complemento circunstancial"
    ]
  },
  {
    enunciado: "¿Qué es un SV simple?",
    correcta: "Un verbo conjugado sin perífrasis ni auxiliares",
    incorrectas: [
      "Un verbo con auxiliares",
      "Un núcleo nominal"
    ]
  },
  {
    enunciado: "¿Qué es un SV compuesto?",
    correcta: "Un verbo principal acompañado de un auxiliar",
    incorrectas: [
      "Un sustantivo más adjetivo",
      "Un adjetivo intensificado"
    ]
  },
  {
    enunciado: "¿Qué valor didáctico tiene el análisis del SV?",
    correcta: "Favorece la comprensión de la estructura oracional y la producción de textos correctos",
    incorrectas: [
      "Solo sirve para identificar sujetos",
      "Es un mero recurso ornamental"
    ]
  }
];
