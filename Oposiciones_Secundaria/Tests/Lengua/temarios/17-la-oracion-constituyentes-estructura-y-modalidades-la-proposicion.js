var PREGUNTAS = [
  {
    enunciado: "¿Qué es una oración desde el punto de vista gramatical?",
    correcta: "La unidad mínima de comunicación con sentido completo y autonomía sintáctica",
    incorrectas: [
      "Un grupo de palabras sin núcleo",
      "Una unidad menor que el sintagma"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia básica entre oración y enunciado?",
    correcta: "La oración exige estructura gramatical; el enunciado es la unidad comunicativa que puede o no ser oración",
    incorrectas: [
      "No hay diferencia: son sinónimos",
      "El enunciado siempre tiene sujeto y predicado"
    ]
  },
  {
    enunciado: "¿Cuáles son los constituyentes esenciales de la oración bimembre?",
    correcta: "Sintagma nominal sujeto y sintagma verbal predicado",
    incorrectas: [
      "Sintagma adjetival y sintagma preposicional",
      "Dos sintagmas verbales coordinados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una oración unimembre?",
    correcta: "Carece de la división explícita en sujeto y predicado",
    incorrectas: [
      "Presenta dos o más proposiciones",
      "Siempre es pasiva"
    ]
  },
  {
    enunciado: "¿Qué prueba ayuda a identificar un constituyente?",
    correcta: "La posibilidad de ser sustituido por un pronombre o de desplazarse manteniendo gramaticalidad",
    incorrectas: [
      "Contar el número de sílabas de las palabras",
      "Buscar rimas internas"
    ]
  },
  {
    enunciado: "En la oración, ¿qué rol desempeña el sintagma nominal sujeto?",
    correcta: "Concordar en persona y número con el verbo del predicado",
    incorrectas: [
      "Determinar el caso del adjetivo",
      "Ser núcleo del sintagma preposicional"
    ]
  },
  {
    enunciado: "¿Cuál es el núcleo del predicado?",
    correcta: "El verbo",
    incorrectas: [
      "El determinante",
      "El adverbio"
    ]
  },
  {
    enunciado: "Señala la oración unimembre:",
    correcta: "Llueve.",
    incorrectas: [
      "Los niños juegan.",
      "La casa es grande."
    ]
  },
  {
    enunciado: "¿Qué modalidad oracional expresa información sin pedir respuesta?",
    correcta: "Enunciativa",
    incorrectas: [
      "Interrogativa",
      "Exhortativa"
    ]
  },
  {
    enunciado: "¿Cuál de estas es una interrogativa total?",
    correcta: "¿Has terminado?",
    incorrectas: [
      "¿Cuándo has terminado?",
      "¡Has terminado!"
    ]
  },
  {
    enunciado: "¿Cuál de estas es una interrogativa parcial?",
    correcta: "¿Dónde vives?",
    incorrectas: [
      "¿Vives aquí?",
      "Vives aquí."
    ]
  },
  {
    enunciado: "¿Qué modalidad expresa deseo?",
    correcta: "Desiderativa",
    incorrectas: [
      "Dubitativa",
      "Exclamativa"
    ]
  },
  {
    enunciado: "¿Qué modalidad expresa duda o probabilidad?",
    correcta: "Dubitativa",
    incorrectas: [
      "Imperativa",
      "Copulativa"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al predicado nominal?",
    correcta: "Se forma con verbo copulativo y atributo",
    incorrectas: [
      "Tiene un verbo transitivo con complemento directo",
      "Carece de núcleo verbal"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al predicado verbal?",
    correcta: "Núcleo verbal predicativo, con o sin complementos",
    incorrectas: [
      "Verbo copulativo más atributo",
      "Dos verbos copulativos coordinados"
    ]
  },
  {
    enunciado: "¿Qué son las oraciones impersonales?",
    correcta: "Oraciones sin sujeto léxico ni tácito",
    incorrectas: [
      "Oraciones con sujeto compuesto",
      "Oraciones coordinadas sin nexo"
    ]
  },
  {
    enunciado: "Señala la impersonal léxica correcta:",
    correcta: "Hace frío.",
    incorrectas: [
      "Se hicieron las tareas.",
      "Los alumnos hicieron las tareas."
    ]
  },
  {
    enunciado: "¿Cuál es la impersonal con 'se'?",
    correcta: "Se vive bien aquí.",
    incorrectas: [
      "Se vendieron entradas.",
      "Seas quien seas, ven."
    ]
  },
  {
    enunciado: "En ‘Hay tres libros’, ¿qué función cumple ‘tres libros’?",
    correcta: "No es sujeto; es complemento interno de un verbo impersonal",
    incorrectas: [
      "Sujeto que concuerda con ‘hay’",
      "Atributo del verbo ‘haber’"
    ]
  },
  {
    enunciado: "¿Qué es una proposición en sintaxis?",
    correcta: "Una unidad con sujeto y predicado integrada en una oración compuesta",
    incorrectas: [
      "Una oración simple sin predicado",
      "Un sintagma sin núcleo"
    ]
  },
  {
    enunciado: "¿Qué distingue a la oración simple de la compuesta?",
    correcta: "La simple tiene un solo núcleo verbal; la compuesta, dos o más",
    incorrectas: [
      "La simple carece de sujeto y la compuesta lo tiene",
      "La compuesta no admite complementos"
    ]
  },
  {
    enunciado: "¿Qué tipos básicos de proposiciones coordinadas existen?",
    correcta: "Copulativas, adversativas, disyuntivas, distributivas, explicativas",
    incorrectas: [
      "Sustantivas, adjetivas, adverbiales",
      "Atributivas, predicativas, impersonales"
    ]
  },
  {
    enunciado: "Identifica una coordinación copulativa:",
    correcta: "Estudia y trabaja.",
    incorrectas: [
      "Estudia, pero trabaja poco.",
      "Estudia o trabaja."
    ]
  },
  {
    enunciado: "Identifica una coordinación adversativa:",
    correcta: "Quería ir, pero no pudo.",
    incorrectas: [
      "Quería ir y pudo.",
      "Quería ir o pudo."
    ]
  },
  {
    enunciado: "¿Cuál es una coordinación disyuntiva?",
    correcta: "Vienes o te quedas.",
    incorrectas: [
      "Vienes y te quedas.",
      "Vienes, pero te quedas."
    ]
  },
  {
    enunciado: "¿Qué es una proposición subordinada sustantiva?",
    correcta: "La que desempeña funciones propias de un SN (sujeto, CD, etc.)",
    incorrectas: [
      "La que modifica a un nombre como adjetivo",
      "La que expresa lugar o tiempo exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué es una proposición subordinada adjetiva o de relativo?",
    correcta: "La que modifica a un nombre y va introducida por relativo",
    incorrectas: [
      "La que funciona como complemento circunstancial",
      "La que coordina dos predicados"
    ]
  },
  {
    enunciado: "¿Qué son las subordinadas adverbiales?",
    correcta: "Proposiciones que expresan circunstancias (tiempo, lugar, modo, causa, etc.)",
    incorrectas: [
      "Coordinaciones sin nexo",
      "Proposiciones que hacen de atributo"
    ]
  },
  {
    enunciado: "Transforma a pasiva: “El jurado otorgó el premio”. ¿Cuál es correcta?",
    correcta: "El premio fue otorgado por el jurado.",
    incorrectas: [
      "El jurado fue otorgado por el premio.",
      "El premio se otorgó el jurado."
    ]
  },
  {
    enunciado: "¿Qué modalidad oracional se usa para dar órdenes o consejos?",
    correcta: "Imperativa o exhortativa",
    incorrectas: [
      "Dubitativa",
      "Desiderativa"
    ]
  },
  {
    enunciado: "¿Qué distingue a una enunciativa negativa?",
    correcta: "Expresa negación mediante elementos como 'no' o 'nunca'",
    incorrectas: [
      "Expresa deseo con ojalá",
      "Expresa mandato con imperativos"
    ]
  },
  {
    enunciado: "¿Qué rasgo prosódico y puntuacional suele acompañar a exclamativas?",
    correcta: "Entonación enfática y signos de admiración",
    incorrectas: [
      "Entonación monótona y ausencia de signos",
      "Entonación descendente y comillas"
    ]
  },
  {
    enunciado: "En una oración compuesta, ¿qué es la proposición principal?",
    correcta: "La que rige o integra a otra proposición subordinada",
    incorrectas: [
      "La que no contiene verbo",
      "La que depende sintácticamente de otra"
    ]
  },
  {
    enunciado: "¿Qué significa que dos proposiciones estén yuxtapuestas?",
    correcta: "Que se unen sin nexo, generalmente con pausa o signos de puntuación",
    incorrectas: [
      "Que se unen por conjunciones copulativas",
      "Que una depende de la otra mediante un relativo"
    ]
  },
  {
    enunciado: "¿Qué es una pasiva refleja?",
    correcta: "Construcción con 'se' y verbo transitivo en 3.ª que presenta sujeto paciente",
    incorrectas: [
      "Impersonal con 'se' y verbo en 3.ª singular sin sujeto",
      "Perífrasis con ‘ser’ + participio y complemento agente"
    ]
  },
  {
    enunciado: "¿Qué tipo de oración es “¡Que tengas buen día!”?",
    correcta: "Desiderativa (con valor exhortativo)",
    incorrectas: [
      "Enunciativa afirmativa",
      "Interrogativa total"
    ]
  },
  {
    enunciado: "¿Cuál es una subordinada causal?",
    correcta: "No salí porque llovía.",
    incorrectas: [
      "Saldré si deja de llover.",
      "Salí aunque llovía."
    ]
  },
  {
    enunciado: "¿Cuál es una subordinada condicional?",
    correcta: "Iré si tengo tiempo.",
    incorrectas: [
      "Iré porque tengo tiempo.",
      "Iré aunque no tenga tiempo."
    ]
  },
  {
    enunciado: "¿Cuál es una subordinada concesiva?",
    correcta: "Salí aunque llovía.",
    incorrectas: [
      "Salí porque llovía.",
      "Salí si llovía."
    ]
  },
  {
    enunciado: "En “Quiero que vengas”, ¿qué tipo de proposición es “que vengas”?",
    correcta: "Subordinada sustantiva de complemento directo",
    incorrectas: [
      "Subordinada adjetiva de relativo",
      "Coordinada copulativa"
    ]
  }
];
