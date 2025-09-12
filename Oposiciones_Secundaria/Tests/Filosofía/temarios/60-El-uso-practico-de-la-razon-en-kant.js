// 60-El-uso-practico-de-la-razon-en-kant.js
// Compatible con la plantilla del proyecto (0-Plantilla-temario.js).
// Estructura: var PREGUNTAS = [{ enunciado, correcta, incorrectas: [opción, opción] }, ...];

var PREGUNTAS = [
  {
    enunciado: "¿Qué designa Kant por 'uso práctico' de la razón?",
    correcta: "La facultad de la razón que legisla para la voluntad y determina la acción mediante leyes morales",
    incorrectas: [
      "La capacidad de producir representaciones sensibles a partir de la imaginación",
      "El poder de conocer objetos de la experiencia por medio de categorías"
    ]
  },
  {
    enunciado: "¿Qué es la 'buena voluntad' en la ética kantiana?",
    correcta: "La voluntad que actúa por deber, conforme y por respeto a la ley moral",
    incorrectas: [
      "La voluntad que busca la mayor felicidad propia",
      "La voluntad que elige los medios más eficaces para cualquier fin"
    ]
  },
  {
    enunciado: "¿Qué significa 'autonomía' de la voluntad en Kant?",
    correcta: "La capacidad de darse a sí misma la ley moral, independientemente de inclinaciones",
    incorrectas: [
      "La libertad de elegir cualquier fin placentero",
      "La obediencia a leyes impuestas por la autoridad civil"
    ]
  },
  {
    enunciado: "¿Qué es la 'heteronomía' moral según Kant?",
    correcta: "La determinación de la voluntad por móviles empíricos o fines externos a la ley moral",
    incorrectas: [
      "La obediencia a la ley moral por respeto",
      "La aplicación de principios universales a priori"
    ]
  },
  {
    enunciado: "Definición kantiana de 'máxima'",
    correcta: "Principio subjetivo de la acción que el agente se da a sí mismo",
    incorrectas: [
      "Ley objetiva válida para todo ser racional",
      "Regla jurídica positiva promulgada por el Estado"
    ]
  },
  {
    enunciado: "¿Qué distingue al imperativo categórico de los hipotéticos?",
    correcta: "Ordena acciones por sí mismas, con validez incondicionada para todo ser racional",
    incorrectas: [
      "Recomienda medios para alcanzar fines empíricos deseados",
      "Depende de la utilidad o del placer esperado"
    ]
  },
  {
    enunciado: "Fórmula de la ley universal del imperativo categórico",
    correcta: "Obra solo según una máxima tal que puedas querer al mismo tiempo que se torne ley universal",
    incorrectas: [
      "Busca siempre el mayor bien para el mayor número",
      "Obra de modo que tus acciones produzcan la máxima felicidad"
    ]
  },
  {
    enunciado: "Fórmula de la humanidad",
    correcta: "Obra de tal modo que uses la humanidad, tanto en tu persona como en la de cualquier otro, siempre como fin y nunca solo como medio",
    incorrectas: [
      "Obra para tratar a todos como medios recíprocos útiles",
      "Obra solo si esperas reconocimiento social"
    ]
  },
  {
    enunciado: "Fórmula del reino de los fines",
    correcta: "Actúa como si por tus máximas fueras siempre un miembro legislador en un reino universal de fines",
    incorrectas: [
      "Actúa según la costumbre dominante de tu sociedad",
      "Actúa buscando fines privados aunque contradigan leyes universales"
    ]
  },
  {
    enunciado: "¿Qué es el 'deber' en Kant?",
    correcta: "Necesidad de una acción por respeto a la ley moral",
    incorrectas: [
      "Acuerdo entre deseo y placer esperado",
      "Obediencia a sanciones externas exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué papel tiene el 'respeto' (Achtung) en la moral kantiana?",
    correcta: "Es el móvil propiamente moral que la ley produce en un ser racional",
    incorrectas: [
      "Es un sentimiento patológico que inclina a la benevolencia",
      "Es el temor a la sanción divina o civil"
    ]
  },
  {
    enunciado: "¿Cómo concibe Kant la libertad práctica?",
    correcta: "Como autonomía de la voluntad: capacidad de determinarse por la ley que ella misma se da",
    incorrectas: [
      "Como ausencia de toda ley o restricción",
      "Como posibilidad de elegir al azar sin razones"
    ]
  },
  {
    enunciado: "Postulados de la razón práctica pura",
    correcta: "Libertad, inmortalidad del alma y existencia de Dios",
    incorrectas: [
      "Determinismo, creación ex nihilo del tiempo y providencia natural",
      "Materialismo, relativismo moral y hedonismo"
    ]
  },
  {
    enunciado: "¿Por qué se postula la libertad en la razón práctica?",
    correcta: "Porque la obligación moral la presupone como condición de posibilidad de imputación",
    incorrectas: [
      "Porque la experiencia demuestra empíricamente la libertad del albedrío",
      "Porque sin libertad no puede haber conocimiento teórico"
    ]
  },
  {
    enunciado: "¿Qué es el 'sumo bien' (summum bonum) en Kant?",
    correcta: "La unión de virtud y felicidad proporcional a la dignidad moral",
    incorrectas: [
      "La máxima felicidad sin referencia a la virtud",
      "La obediencia literal a todas las leyes positivas"
    ]
  },
  {
    enunciado: "¿Por qué la razón práctica postula la existencia de Dios?",
    correcta: "Como condición para la posibilidad del sumo bien en cuanto armonía de virtud y felicidad",
    incorrectas: [
      "Para demostrar teóricamente la creación del mundo",
      "Para garantizar milagros que suspendan la ley moral"
    ]
  },
  {
    enunciado: "¿Por qué se postula la inmortalidad del alma?",
    correcta: "Para hacer pensable el progreso indefinido hacia la santidad moral",
    incorrectas: [
      "Para explicar fenómenos psíquicos inexplicables",
      "Para obtener consuelo emocional ante la muerte"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el valor moral de una acción?",
    correcta: "Que se realice por deber, no solo conforme al deber por inclinación",
    incorrectas: [
      "Que tenga buenos resultados empíricos",
      "Que reciba aprobación social mayoritaria"
    ]
  },
  {
    enunciado: "Deberes perfectos e imperfectos",
    correcta: "Los perfectos obligan estrictamente y prohíben excepciones; los imperfectos ordenan fines y permiten latitude",
    incorrectas: [
      "Ambos permiten excepciones prudenciales a voluntad",
      "Los imperfectos son meras recomendaciones estéticas"
    ]
  },
  {
    enunciado: "Ejemplo de deber perfecto hacia uno mismo",
    correcta: "Prohibición del suicidio por amor de sí como medio para escapar al dolor",
    incorrectas: [
      "Fomentar ocasionalmente el talento si apetece",
      "Buscar placer moderado cuando no daña a otros"
    ]
  },
  {
    enunciado: "Ejemplo de deber perfecto hacia otros",
    correcta: "Prohibición de la mentira incluso por conveniencia",
    incorrectas: [
      "Ser benéfico cuando resulta cómodo",
      "Ayudar si se espera reciprocidad inmediata"
    ]
  },
  {
    enunciado: "Ejemplo de deber imperfecto hacia uno mismo",
    correcta: "Cultivar los propios talentos",
    incorrectas: [
      "No causar daño a otros",
      "Cumplir contratos firmados"
    ]
  },
  {
    enunciado: "Ejemplo de deber imperfecto hacia otros",
    correcta: "La beneficencia y ayuda al prójimo",
    incorrectas: [
      "No robar bienes ajenos",
      "No mentir en testimonios"
    ]
  },
  {
    enunciado: "¿Qué implica 'no usar a otros solo como medio'?",
    correcta: "No instrumentalizar a las personas ignorando su condición de fines en sí",
    incorrectas: [
      "Evitar cualquier intercambio de intereses",
      "Anteponer siempre fines propios a los ajenos"
    ]
  },
  {
    enunciado: "Diferencia entre dignidad y precio en Kant",
    correcta: "La dignidad no admite equivalente; el precio admite compensación",
    incorrectas: [
      "Ambas son cuantificables monetariamente",
      "La dignidad depende del rango social"
    ]
  },
  {
    enunciado: "¿Qué entiende Kant por 'legislación universal'?",
    correcta: "La capacidad de una máxima de valer como ley para todo ser racional",
    incorrectas: [
      "La sanción estatal de todas las costumbres locales",
      "La aprobación mayoritaria de una norma"
    ]
  },
  {
    enunciado: "Criterio para probar la moralidad de una máxima",
    correcta: "Su universalización sin contradicción lógica o práctica",
    incorrectas: [
      "Su utilidad subjetiva para el agente",
      "Su conformidad con la tradición cultural dominante"
    ]
  },
  {
    enunciado: "¿Qué rechaza Kant del eudaimonismo moral?",
    correcta: "Que la felicidad sea fundamento de la ley moral",
    incorrectas: [
      "Que la felicidad sea un fin natural de los seres sensibles",
      "Que la prudencia tenga valor en la vida práctica"
    ]
  },
  {
    enunciado: "¿Qué es un imperativo hipotético de habilidad?",
    correcta: "Una regla que indica medios para lograr un fin técnicamente elegido",
    incorrectas: [
      "Una ley moral incondicionada",
      "Una norma jurídica coactiva"
    ]
  },
  {
    enunciado: "¿Qué es un imperativo hipotético de prudencia?",
    correcta: "Consejo relativo al bienestar y felicidad del agente",
    incorrectas: [
      "Mandato categórico de la razón pura",
      "Prohibición absoluta válida para todos"
    ]
  },
  {
    enunciado: "Relación entre legalidad y moralidad",
    correcta: "La legalidad es conformidad externa con la ley; la moralidad requiere además el móvil del deber",
    incorrectas: [
      "Legalidad y moralidad son idénticas",
      "La moralidad solo exige buenos resultados"
    ]
  },
  {
    enunciado: "¿Qué significa que la ley moral tenga 'forma' y no 'materia' como fundamento?",
    correcta: "Que su validez depende de la universalidad de la regla, no del contenido empírico del fin",
    incorrectas: [
      "Que la moral carece de toda referencia a acciones",
      "Que solo importan las consecuencias"
    ]
  },
  {
    enunciado: "¿Por qué no hay 'conflictos de deberes' en Kant?",
    correcta: "Porque los deberes como leyes de la razón no pueden contradecirse; hay conflictos de máximas aparentes",
    incorrectas: [
      "Porque la moral es relativa y se resuelve por preferencia",
      "Porque la razón práctica admite excepciones por compasión"
    ]
  },
  {
    enunciado: "El respeto como afecto peculiar",
    correcta: "No se origina patológicamente, sino que es producido por la ley en un ser racional",
    incorrectas: [
      "Es un sentimiento agradable como el gusto estético",
      "Depende del temperamento y de la educación solamente"
    ]
  },
  {
    enunciado: "¿Qué expresa la 'legislación de un miembro en un reino de fines'?",
    correcta: "Que cada agente debe actuar como legislador universal de leyes morales",
    incorrectas: [
      "Que cada agente dicta leyes privadas para su beneficio",
      "Que la ley moral depende del consenso político"
    ]
  },
  {
    enunciado: "Relación entre razón práctica pura y experiencia",
    correcta: "La validez de la ley moral es a priori e independiente de la experiencia",
    incorrectas: [
      "La ley moral se deriva por inducción de casos ejemplares",
      "La moral es válida solo si produce felicidad empírica"
    ]
  },
  {
    enunciado: "¿Qué criterio distingue acciones 'conformes al deber' de 'por deber'?",
    correcta: "El móvil: en 'por deber' la razón práctica determina la voluntad por respeto a la ley",
    incorrectas: [
      "El resultado: si es bueno, siempre es 'por deber'",
      "La emoción: si hay agrado, no hay moralidad"
    ]
  },
  {
    enunciado: "¿Cómo se vincula la libertad con la causalidad natural en Kant?",
    correcta: "Por la doctrina de los dos puntos de vista: el ser humano pertenece al mundo fenoménico y al inteligible",
    incorrectas: [
      "Negando la causalidad natural en los fenómenos",
      "Identificando libertad con azar empírico"
    ]
  },
  {
    enunciado: "¿Qué expresa el mandato 'sé veraz' según Kant?",
    correcta: "Un deber perfecto que no admite excepciones por conveniencia",
    incorrectas: [
      "Un consejo prudencial sujeto a circunstancias",
      "Una regla cuya validez depende de resultados"
    ]
  },
  {
    enunciado: "¿Qué prueba ofrece Kant de la ley moral?",
    correcta: "El 'hecho de la razón': conciencia inmediata de la obligación",
    incorrectas: [
      "Una demostración empírica basada en estadísticas",
      "Una intuición intelectual de la cosa en sí"
    ]
  }
];
