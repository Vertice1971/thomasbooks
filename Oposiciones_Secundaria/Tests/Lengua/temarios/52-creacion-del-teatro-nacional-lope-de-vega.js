// temarios/52-creacion-del-teatro-nacional-lope-de-vega.js
var PREGUNTAS = [
  {
    enunciado: "¿En qué texto formula Lope de Vega la poética de la comedia nueva?",
    correcta: "En el Arte nuevo de hacer comedias",
    incorrectas: [
      "En la Poética aristotélica comentada por Lope",
      "En el Discurso de la comedia en España de Cervantes"
    ]
  },
  {
    enunciado: "¿Cómo organiza Lope la estructura básica de sus comedias?",
    correcta: "En tres jornadas (exposición, nudo y desenlace)",
    incorrectas: [
      "En cinco actos a la manera clásica",
      "En un único acto continuo sin pausas"
    ]
  },
  {
    enunciado: "¿Qué postura adopta la comedia nueva respecto a las tres unidades clásicas?",
    correcta: "Flexibiliza o rompe su observancia estricta para favorecer la acción",
    incorrectas: [
      "Exige su cumplimiento rígido en toda obra",
      "Sustituye las unidades por normas musicales"
    ]
  },
  {
    enunciado: "¿Qué espacios madrileños fueron emblemáticos del teatro comercial del Siglo de Oro?",
    correcta: "Los corrales del Príncipe y de la Cruz",
    incorrectas: [
      "El Corral del Carbón y la Lonja del Arenal",
      "El Coliseo del Buen Retiro y el Corral de Monipodio"
    ]
  },
  {
    enunciado: "¿Cómo se llamaba el espacio reservado principalmente a mujeres en los corrales?",
    correcta: "La cazuela",
    incorrectas: [
      "El tablado",
      "El corredor de los mosqueteros"
    ]
  },
  {
    enunciado: "En el oficio teatral áureo, ¿qué era el “autor de comedias”?",
    correcta: "El empresario-director de la compañía",
    incorrectas: [
      "El censor real encargado de licencias",
      "El poeta encargado solo de los sonetos"
    ]
  },
  {
    enunciado: "¿Cómo se denomina el cuadernillo con las líneas de un actor sin el texto completo?",
    correcta: "La parte",
    incorrectas: [
      "La suelta",
      "La jornada"
    ]
  },
  {
    enunciado: "¿Qué nombre recibían los espectadores varones del patio que marcaban el ritmo de la función?",
    correcta: "Mosqueteros",
    incorrectas: [
      "Oficiales",
      "Escuderos"
    ]
  },
  {
    enunciado: "¿Qué rasgo definitorio asume Lope en su sistema dramático?",
    correcta: "La mezcla de lo trágico y lo cómico en una misma obra",
    incorrectas: [
      "La separación absoluta de tonos por escenas",
      "La prohibición de pasajes humorísticos"
    ]
  },
  {
    enunciado: "¿Para qué sirve la polimetría en la comedia nueva?",
    correcta: "Para adecuar el metro a la situación y al decoro de los personajes",
    incorrectas: [
      "Para dificultar la memorización de los actores",
      "Para evitar rimas y mantener verso blanco"
    ]
  },
  {
    enunciado: "¿Qué forma métrica favorece el diálogo ágil y las escenas de enredo?",
    correcta: "Las redondillas de arte menor (octosílabos)",
    incorrectas: [
      "Los dodecasílabos con cesura fija",
      "Los hexámetros clásicos"
    ]
  },
  {
    enunciado: "¿Qué estrofa usa Lope para pasajes épicos o históricos de alto vuelo?",
    correcta: "La octava real",
    incorrectas: [
      "La seguidilla gitana",
      "La cuaderna vía medieval"
    ]
  },
  {
    enunciado: "¿Qué molde métrico emplea a menudo para reflexión grave y moralizante?",
    correcta: "Los tercetos encadenados",
    incorrectas: [
      "El romance asonantado",
      "La jácara en prosa"
    ]
  },
  {
    enunciado: "¿Qué combinación métrica sostiene los monólogos de elevación retórica y naturaleza?",
    correcta: "La silva de heptasílabos y endecasílabos",
    incorrectas: [
      "El alejandrino pareado",
      "El serventesio octosilábico"
    ]
  },
  {
    enunciado: "¿Qué define a la comedia de capa y espada?",
    correcta: "Enredos urbanos de amor y honor con disfraces y equívocos",
    incorrectas: [
      "Relatos mitológicos en octava real",
      "Autos alegóricos sobre el sacramento"
    ]
  },
  {
    enunciado: "¿Qué obra de Lope simboliza el honor colectivo frente al abuso del poder?",
    correcta: "Fuenteovejuna",
    incorrectas: [
      "El alcalde de Zalamea",
      "La vida es sueño"
    ]
  },
  {
    enunciado: "En “Fuenteovejuna”, ¿qué responde el pueblo cuando se le interroga por el culpable?",
    correcta: "“Fuenteovejuna, señor”",
    incorrectas: [
      "“Nadie fue, señor”",
      "“El rey lo mandó”"
    ]
  },
  {
    enunciado: "¿Qué drama presenta la dignidad del villano frente al poderoso seductor?",
    correcta: "Peribáñez y el Comendador de Ocaña",
    incorrectas: [
      "El burlador de Sevilla",
      "El médico de su honra"
    ]
  },
  {
    enunciado: "¿Qué comedia ejemplifica al monarca como árbitro supremo de justicia?",
    correcta: "El mejor alcalde, el rey",
    incorrectas: [
      "El gran teatro del mundo",
      "La estrella de Sevilla"
    ]
  },
  {
    enunciado: "¿Qué tragedia lopesca plantea un dilema extremo de honor y deseo?",
    correcta: "El castigo sin venganza",
    incorrectas: [
      "Traidor, inconfeso y mártir",
      "La devoción de la cruz"
    ]
  },
  {
    enunciado: "¿Qué comedia explora el ingenio femenino y la “educación amorosa” como transformación?",
    correcta: "La dama boba",
    incorrectas: [
      "La fiera, el rayo y la piedra",
      "El caballero de Olmedo"
    ]
  },
  {
    enunciado: "¿Qué pieza representa el conflicto entre deseo y jerarquía social en clave urbana?",
    correcta: "El perro del hortelano",
    incorrectas: [
      "La aurora en Copacabana",
      "Amor, honor y poder"
    ]
  },
  {
    enunciado: "¿Qué obra de Lope incorpora tono trágico y la célebre copla “que de noche le mataron”?",
    correcta: "El caballero de Olmedo",
    incorrectas: [
      "El príncipe constante",
      "El castigo sin venganza"
    ]
  },
  {
    enunciado: "¿Qué piezas breves solían intercalarse entre jornadas en los corrales?",
    correcta: "Entremeses, bailes y mojigangas",
    incorrectas: [
      "Autos sacramentales largos",
      "Novelas ejemplares en prosa"
    ]
  },
  {
    enunciado: "¿Qué recurso escénico permite que un personaje hable para el público sin ser oído por otros?",
    correcta: "El aparte",
    incorrectas: [
      "El mutis",
      "La loa"
    ]
  },
  {
    enunciado: "¿Qué indica la acotación “mutis” en una comedia del Siglo de Oro?",
    correcta: "Salida de escena de uno o varios personajes",
    incorrectas: [
      "Cambio de metro en la escena",
      "Entrada de música y danza"
    ]
  },
  {
    enunciado: "¿Qué mecanismo institucional condicionaba la representación y la impresión de comedias?",
    correcta: "La licencia y censura previa",
    incorrectas: [
      "El privilegio gremial de poetas",
      "El diezmo escénico parroquial"
    ]
  },
  {
    enunciado: "¿Qué es el decoro en la práctica dramática lopista?",
    correcta: "La adecuación de conducta y estilo al rango y situación",
    incorrectas: [
      "La obligación de rimar siempre en consonante",
      "La prohibición de personajes cómicos"
    ]
  },
  {
    enunciado: "¿Qué función desempeña el gracioso en la comedia nueva?",
    correcta: "Contrapunto cómico y mediador entre escena y público",
    incorrectas: [
      "Narrador omnisciente en prosa",
      "Censor que corta escenas impropias"
    ]
  },
  {
    enunciado: "¿Qué papel social cumple el teatro comercial de corrales en el Barroco?",
    correcta: "Espacio público de ocio regulado y sociabilidad urbana",
    incorrectas: [
      "Rito litúrgico exclusivo del clero",
      "Ceremonia cortesana secreta sin público"
    ]
  },
  {
    enunciado: "¿Qué eran las “Partes de comedias” en la cultura impresa áurea?",
    correcta: "Volúmenes que recopilaban comedias para su impresión",
    incorrectas: [
      "Las hojas de reparto de personajes",
      "Las licencias firmadas por la autoridad"
    ]
  },
  {
    enunciado: "¿Qué tendencia general presentan los desenlaces de la comedia nueva?",
    correcta: "Restaurar el orden social mediante revelaciones, bodas y castigos",
    incorrectas: [
      "Abrir finales sin cierre moral ni reconocimiento",
      "Romper siempre con el orden y premiar al culpable"
    ]
  },
  {
    enunciado: "¿Qué papel simbólico desempeña el rey en numerosos dramas de Lope?",
    correcta: "Árbitro supremo que garantiza justicia y reparación",
    incorrectas: [
      "Antagonista demoniaco constante",
      "Testigo mudo sin intervención"
    ]
  },
  {
    enunciado: "¿Cómo se producían efectos “maravillosos” en escena en los corrales?",
    correcta: "Mediante tramoyas y apariencias con mutaciones rápidas",
    incorrectas: [
      "Con proyecciones cinematográficas",
      "Con decorados fijos e inamovibles"
    ]
  },
  {
    enunciado: "Sobre el número de obras de Lope, ¿qué afirmación es razonable hoy?",
    correcta: "Se conservan con atribución sólida del orden de tres o cuatro centenas",
    incorrectas: [
      "No pasó de escribir una veintena de comedias",
      "Se conservan íntegras las más de mil quinientas atribuidas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la lengua dramática de Lope frente a otros modelos?",
    correcta: "Naturalidad expresiva con momentos de lirismo y agudeza",
    incorrectas: [
      "Hermetismo deliberado en toda la obra",
      "Prosa notarial sin recursos poéticos"
    ]
  },
  {
    enunciado: "¿Qué actitud declara Lope en el Arte nuevo respecto al público?",
    correcta: "“Gustar al vulgo” sin renunciar al arte",
    incorrectas: [
      "Escribir solo para doctos y cortesanos",
      "Rechazar cualquier aplauso popular"
    ]
  },
  {
    enunciado: "¿Cuál de estos géneros NO pertenece al sistema lopesco del Siglo de Oro?",
    correcta: "El sainete dieciochesco",
    incorrectas: [
      "El entremés",
      "El auto sacramental"
    ]
  },
  {
    enunciado: "¿Qué función dramática cumple el disfraz en la comedia de capa y espada?",
    correcta: "Motor del enredo que pone a prueba el honor y el deseo",
    incorrectas: [
      "Recurso prohibido por el decoro",
      "Elemento solo ornamental sin efectos en la trama"
    ]
  },
  {
    enunciado: "¿Qué síntesis describe mejor la innovación de Lope?",
    correcta: "Funde tradición popular y herencia renacentista en un teatro de tres jornadas, polimétrico y mestizo",
    incorrectas: [
      "Impone la tragedia latina pura al margen del público",
      "Sustituye el verso por prosa para todo el teatro"
    ]
  }
];
