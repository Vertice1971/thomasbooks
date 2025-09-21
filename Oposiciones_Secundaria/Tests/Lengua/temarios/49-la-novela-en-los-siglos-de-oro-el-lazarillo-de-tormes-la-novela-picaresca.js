// temarios/49-la-novela-en-los-siglos-de-oro-el-lazarillo-de-tormes-la-novela-picaresca.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo define de modo central a la novela picaresca clásica?",
    correcta: "Relato autobiográfico fingido en primera persona desde la marginalidad social",
    incorrectas: [
      "Crónica cortesana en tercera persona con héroes idealizados",
      "Poema épico en verso sobre gestas caballerescas"
    ]
  },
  {
    enunciado: "¿Cómo suele construirse la figura del pícaro?",
    correcta: "Antihéroe de origen humilde que sobrevive mediante la astucia",
    incorrectas: [
      "Caballero andante perfecto que encarna la virtud sin fisuras",
      "Pastor culto que canta amores idealizados en paisajes idílicos"
    ]
  },
  {
    enunciado: "¿Qué tipo de narrador predomina en la picaresca clásica?",
    correcta: "Primera persona retrospectiva con sesgo e interés propio",
    incorrectas: [
      "Narrador omnisciente impersonal y neutral",
      "Narrador testigo que desconoce al protagonista"
    ]
  },
  {
    enunciado: "¿Qué estructura compositiva es característica del género?",
    correcta: "Itinerancia y sucesión de amos como principio organizador",
    incorrectas: [
      "Unidad de lugar, tiempo y acción estrictas",
      "Fragmentos independientes sin continuidad vital"
    ]
  },
  {
    enunciado: "¿Qué función cumple la sucesión de amos en el relato picaresco?",
    correcta: "Retratar, a través del servicio, diversos estamentos y sus vicios",
    incorrectas: [
      "Exaltar la caridad cristiana perfecta en todos los niveles",
      "Presentar sólo ambientes cortesanos refinados"
    ]
  },
  {
    enunciado: "¿Qué tema vertebra el aprendizaje del pícaro?",
    correcta: "El hambre y la necesidad como motores de la astucia",
    incorrectas: [
      "El honor caballeresco como guía infalible",
      "La inspiración poética como vocación central"
    ]
  },
  {
    enunciado: "¿Qué tensión ética recorre la picaresca?",
    correcta: "Honra social frente a la dura necesidad de comer y sobrevivir",
    incorrectas: [
      "Misticismo contemplativo frente a vida retirada",
      "Utopía rural frente a industrialización urbana"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico es habitual en la picaresca?",
    correcta: "Lenguaje coloquial con refranes, ironía y cambios de registro",
    incorrectas: [
      "Latinismos constantes y culteranismo extremo",
      "Prosa notarial sin recursos retóricos"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de la sátira en el género?",
    correcta: "Criticar hipocresías sociales y religiosas del tiempo",
    incorrectas: [
      "Ensalzar la nobleza y el clero sin matices",
      "Sustituir la narración por tratados dogmáticos"
    ]
  },
  {
    enunciado: "¿Qué obra funciona como piedra fundacional del subgénero?",
    correcta: "La vida de Lazarillo de Tormes",
    incorrectas: [
      "Diana de Montemayor",
      "La Araucana"
    ]
  },
  {
    enunciado: "¿En qué año se publican las primeras ediciones conocidas del Lazarillo?",
    correcta: "1554",
    incorrectas: [
      "1516",
      "1605"
    ]
  },
  {
    enunciado: "¿Cómo se presenta formalmente el Lazarillo?",
    correcta: "Como epístola-relación dirigida a “Vuestra Merced”",
    incorrectas: [
      "Como diálogo pastoril entre dos zagales",
      "Como auto sacramental en un acto"
    ]
  },
  {
    enunciado: "¿Cuántos tratados componen la estructura clásica del Lazarillo?",
    correcta: "Siete tratados",
    incorrectas: [
      "Tres libros y un epílogo",
      "Doce cantos en tercetos encadenados"
    ]
  },
  {
    enunciado: "¿Quién es el primer amo de Lázaro?",
    correcta: "El ciego",
    incorrectas: [
      "El arcipreste de San Salvador",
      "El alguacil"
    ]
  },
  {
    enunciado: "¿Qué amos del Lazarillo evidencian la crítica a la honra vacía?",
    correcta: "El hidalgo pobre que oculta su miseria",
    incorrectas: [
      "Un rey magnánimo que reparte pan",
      "Un pastor bucólico que canta a su amada"
    ]
  },
  {
    enunciado: "¿Cómo se interpreta el final del Lazarillo?",
    correcta: "Lázaro logra ‘buena vida’ aceptando un arreglo socialmente hipócrita",
    incorrectas: [
      "Lázaro asciende a la nobleza por méritos militares",
      "Lázaro se hace ermitaño y renuncia al mundo"
    ]
  },
  {
    enunciado: "¿Qué ocurrió con el Lazarillo en 1559?",
    correcta: "Fue incluido en el Índice y prohibido",
    incorrectas: [
      "Se publicó su edición príncipe en Amberes ese año",
      "Se tradujo oficialmente al latín por la Inquisición"
    ]
  },
  {
    enunciado: "¿Qué es el llamado ‘Lazarillo castigado’ de 1573?",
    correcta: "Una versión expurgada conforme a la censura",
    incorrectas: [
      "Una continuación apócrifa que niega la original",
      "Una refundición en verso épico"
    ]
  },
  {
    enunciado: "¿Qué rasgo narratológico es clave en la obra fundacional?",
    correcta: "El narrador poco fiable que se justifica ante un destinatario",
    incorrectas: [
      "La omnisciencia neutral sin implicación personal",
      "La alternancia de narradores en coro"
    ]
  },
  {
    enunciado: "¿Qué autor consolida el género con un enfoque moralizante y digresivo?",
    correcta: "Mateo Alemán con Guzmán de Alfarache",
    incorrectas: [
      "Jorge de Montemayor con La Diana",
      "Fernando de Rojas con La Celestina (diálogo)"
    ]
  },
  {
    enunciado: "¿Qué obra picaresca intensifica la caricatura y el conceptismo?",
    correcta: "El Buscón de Quevedo",
    incorrectas: [
      "La Galatea de Cervantes",
      "El Patrañuelo de Timoneda"
    ]
  },
  {
    enunciado: "¿Qué título representa una variante femenina del modelo?",
    correcta: "La pícara Justina",
    incorrectas: [
      "La Arcadia",
      "La Dorotea"
    ]
  },
  {
    enunciado: "¿Qué relato autobiográfico tardío aporta tono aventurero y musicalidad?",
    correcta: "Marcos de Obregón (Espinel)",
    incorrectas: [
      "El peregrino en su patria",
      "El Criticón"
    ]
  },
  {
    enunciado: "¿Qué obra picaresca del XVII destaca por su cosmopolitismo bélico?",
    correcta: "Estebanillo González",
    incorrectas: [
      "Fuenteovejuna",
      "El condenado por desconfiado"
    ]
  },
  {
    enunciado: "¿Qué impacto europeo tuvo el modelo picaresco?",
    correcta: "Influyó en Grimmelshausen y Lesage, entre otros",
    incorrectas: [
      "Se limitó al ámbito peninsular sin continuidad",
      "Sólo pervivió en poemas épicos italianos"
    ]
  },
  {
    enunciado: "¿Qué idea sobre la movilidad social suele transmitir el género?",
    correcta: "Determinismo: el ascenso estable resulta ilusorio",
    incorrectas: [
      "Meritocracia: todo esfuerzo culmina en nobleza",
      "Providencialismo: siempre hay premio material"
    ]
  },
  {
    enunciado: "¿Qué contrasta la picaresca con los libros de caballerías?",
    correcta: "Realismo crítico frente a idealismo heroico",
    incorrectas: [
      "Métrica épica frente a prosa",
      "Finales alegres con bodas y coronaciones"
    ]
  },
  {
    enunciado: "¿Cuál es un recurso humorístico recurrente en el Lazarillo?",
    correcta: "Escenas cómicas que desenmascaran apariencias",
    incorrectas: [
      "Parodias de mitología clásica erudita en latín",
      "Humor exclusivamente escatológico sin propósito"
    ]
  },
  {
    enunciado: "¿Qué cronotopos predominan en la picaresca?",
    correcta: "Caminos y ciudades que exponen la vida material",
    incorrectas: [
      "Palacios idealizados ajenos a la pobreza",
      "Paisajes pastoriles sin conflicto social"
    ]
  },
  {
    enunciado: "¿Qué papel cumple el destinatario intradiegético en el Lazarillo?",
    correcta: "Ordena el relato como ‘caso’ que el narrador justifica",
    incorrectas: [
      "Funciona como antagonista activo en la trama",
      "Es un coro que comenta cada episodio"
    ]
  },
  {
    enunciado: "¿Cuál es un debate abierto sobre el Lazarillo?",
    correcta: "La autoría, con candidaturas como Diego Hurtado de Mendoza",
    incorrectas: [
      "El idioma original, pues se escribió en italiano",
      "Su datación en el siglo XVIII"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico domina en El Buscón?",
    correcta: "Agudeza conceptista y caricatura degradante",
    incorrectas: [
      "Culteranismo gongorino sostenido",
      "Realismo documental sin juegos verbales"
    ]
  },
  {
    enunciado: "¿Qué dimensión ideológica se vincula al Lazarillo temprano?",
    correcta: "Ecos erasmistas y crítica a la religiosidad formal",
    incorrectas: [
      "Defensa del providencialismo triunfalista",
      "Adoctrinamiento escolástico literal"
    ]
  },
  {
    enunciado: "¿Qué efecto produce la focalización interna del yo pícaro?",
    correcta: "Sesga la realidad para persuadir y autoexculparse",
    incorrectas: [
      "Garantiza la objetividad absoluta del relato",
      "Anula la ironía y la doble lectura"
    ]
  },
  {
    enunciado: "¿Qué recurso sostiene la verosimilitud del Lazarillo?",
    correcta: "Invocación de testigos y lugares para ‘probar’ lo narrado",
    incorrectas: [
      "Notas a pie de página académicas del autor",
      "Documentos judiciales incorporados literalmente"
    ]
  },
  {
    enunciado: "¿Qué institución incide en la transmisión del Lazarillo en el XVI?",
    correcta: "La censura inquisitorial y las ediciones expurgadas",
    incorrectas: [
      "Las academias científicas del XIX",
      "Los gremios tipográficos franceses del XVIII"
    ]
  },
  {
    enunciado: "¿Cuál es el sentido del desenlace ‘pragmático’ en la picaresca?",
    correcta: "Aceptar arreglos que aseguran subsistencia aunque sean ambiguos",
    incorrectas: [
      "Rechazar cualquier compromiso por honor sublime",
      "Convertirse en asceta y abandonar la sociedad"
    ]
  },
  {
    enunciado: "¿Cómo contribuye la picaresca a la historia de la novela europea?",
    correcta: "Aporta punto de vista, urbanidad narrativa y crítica social",
    incorrectas: [
      "Introduce la métrica como base de la prosa",
      "Sustituye toda ficción por ensayo moral"
    ]
  },
  {
    enunciado: "¿Qué oposición recorren muchas escenas del género?",
    correcta: "Apariencia vs. realidad en costumbres y estamentos",
    incorrectas: [
      "Sagrado vs. profano en clave hagiográfica",
      "Éxtasis místico vs. arrebato poético"
    ]
  },
  {
    enunciado: "¿Qué aprendizaje realiza Lázaro con el clérigo de Maqueda?",
    correcta: "Descubre la avaricia y el hambre bajo apariencia de piedad",
    incorrectas: [
      "Aprende latín y retórica escolástica",
      "Se inicia en la vida militar y cortesana"
    ]
  },
  {
    enunciado: "¿Qué rasgo resume el estatuto del pícaro en el Siglo de Oro?",
    correcta: "Marginado que revela, desde abajo, la anatomía social",
    incorrectas: [
      "Héroe providencial que salva la patria",
      "Santo visionario con dones sobrenaturales"
    ]
  }
];

