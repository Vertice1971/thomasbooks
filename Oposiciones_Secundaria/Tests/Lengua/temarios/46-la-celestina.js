// temarios/46-la-celestina.js
var PREGUNTAS = [
  {
    enunciado: "¿Quién es el autor al que se atribuye la redacción definitiva de La Celestina?",
    correcta: "Fernando de Rojas",
    incorrectas: [
      "Jorge Manrique",
      "Juan de Mena"
    ]
  },
  {
    enunciado: "¿En qué año apareció la primera edición de La Celestina?",
    correcta: "1499",
    incorrectas: [
      "1474",
      "1511"
    ]
  },
  {
    enunciado: "¿Qué género literario representa La Celestina?",
    correcta: "Tragicomedia dialogada con elementos teatrales y narrativos",
    incorrectas: [
      "Novela picaresca en prosa",
      "Auto sacramental alegórico"
    ]
  },
  {
    enunciado: "¿Cuántos actos tiene la versión definitiva de La Celestina?",
    correcta: "21 actos",
    incorrectas: [
      "12 actos",
      "40 actos"
    ]
  },
  {
    enunciado: "¿Cuál es el argumento central de La Celestina?",
    correcta: "La relación amorosa trágica entre Calisto y Melibea, mediada por Celestina",
    incorrectas: [
      "La vida ejemplar de un noble cristiano",
      "La sátira política contra los Reyes Católicos"
    ]
  },
  {
    enunciado: "¿Cómo termina la obra La Celestina?",
    correcta: "Con la muerte de Celestina, los criados, Calisto y Melibea",
    incorrectas: [
      "Con la boda de Calisto y Melibea",
      "Con el perdón de Celestina por parte de Melibea"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el lenguaje de La Celestina?",
    correcta: "Variedad estilística que mezcla registros cultos y populares",
    incorrectas: [
      "Exclusiva oralidad popular sin retórica",
      "Prosa rimada de carácter lírico"
    ]
  },
  {
    enunciado: "¿Qué personaje es motor de la acción y representa la astucia y la codicia?",
    correcta: "Celestina",
    incorrectas: [
      "Sempronio",
      "Pleberio"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los criados Sempronio y Pármeno?",
    correcta: "Son cómplices de Celestina y representan la ambición y el contraste ético",
    incorrectas: [
      "Actúan como narradores de la obra",
      "Encarnan virtudes caballerescas"
    ]
  },
  {
    enunciado: "¿Qué simboliza Pleberio en La Celestina?",
    correcta: "El mundo tradicional y la figura paterna que sufre la tragedia final",
    incorrectas: [
      "El triunfo del amor cortés",
      "El poder real de los Reyes Católicos"
    ]
  },
  {
    enunciado: "¿Qué tema central domina en La Celestina?",
    correcta: "El amor y deseo como pasión desmedida conducente a la tragedia",
    incorrectas: [
      "La exaltación de la caballería heroica",
      "El ideal renacentista del equilibrio racional"
    ]
  },
  {
    enunciado: "¿Qué otro gran tema recorre toda la obra?",
    correcta: "La muerte y la fatalidad inevitable",
    incorrectas: [
      "El peregrinaje religioso a Tierra Santa",
      "La búsqueda de aventuras caballerescas"
    ]
  },
  {
    enunciado: "¿Qué papel juega la magia en la trama?",
    correcta: "Elemento de manipulación usado por Celestina para influir en Melibea",
    incorrectas: [
      "Recurso cómico de los criados",
      "Simbolismo vacío sin efecto en la acción"
    ]
  },
  {
    enunciado: "¿Cómo es el estilo de los diálogos?",
    correcta: "Extensos, retóricos y de gran riqueza expresiva",
    incorrectas: [
      "Breves y puramente funcionales",
      "En verso rimado octosilábico"
    ]
  },
  {
    enunciado: "¿Qué movimiento cultural refleja La Celestina?",
    correcta: "Transición entre la Edad Media y el Renacimiento",
    incorrectas: [
      "El apogeo del Barroco",
      "El auge del Neoclasicismo"
    ]
  },
  {
    enunciado: "¿Qué visión del amor ofrece La Celestina?",
    correcta: "Una visión realista y desidealizada, opuesta al amor cortés",
    incorrectas: [
      "Una visión platónica y espiritualizada",
      "Una exaltación épica del matrimonio"
    ]
  },
  {
    enunciado: "¿Qué tono predomina en el discurso de Celestina?",
    correcta: "Persuasivo, retórico y manipulador",
    incorrectas: [
      "Ingenuo y espontáneo",
      "Épico y heroico"
    ]
  },
  {
    enunciado: "¿Por qué se considera una obra fundacional?",
    correcta: "Porque influyó en la narrativa y el teatro posteriores",
    incorrectas: [
      "Porque fue la primera obra escrita en latín en España",
      "Porque es el único ejemplo de literatura medieval conservado"
    ]
  },
  {
    enunciado: "¿Qué valores pone en cuestión La Celestina?",
    correcta: "Los valores medievales de amor cortés, fidelidad y jerarquía social",
    incorrectas: [
      "Los principios del humanismo renacentista",
      "Las reformas religiosas del siglo XVI"
    ]
  },
  {
    enunciado: "¿Qué mensaje transmite el lamento final de Pleberio?",
    correcta: "La reflexión sobre la fugacidad de la vida y la desdicha humana",
    incorrectas: [
      "La esperanza en la resurrección cristiana",
      "La gloria del linaje familiar"
    ]
  },
  {
    enunciado: "¿Qué edición amplió la obra a 21 actos y adoptó el título de Tragicomedia?",
    correcta: "La edición de 1502",
    incorrectas: [
      "La edición de 1499",
      "La edición de 1543"
    ]
  },
  {
    enunciado: "¿Qué característica la acerca al teatro sin ser representada en su tiempo?",
    correcta: "Está escrita en forma de diálogos dramáticos",
    incorrectas: [
      "Fue compuesta en versos líricos",
      "Se concibió como narración en primera persona"
    ]
  },
  {
    enunciado: "¿Qué visión social ofrece La Celestina?",
    correcta: "Una crítica de la codicia, la ambición y la corrupción moral",
    incorrectas: [
      "La exaltación de los valores caballerescos",
      "La defensa de la nobleza feudal sin matices"
    ]
  },
  {
    enunciado: "¿Cómo se caracteriza la figura de Melibea?",
    correcta: "Joven noble que pasa de la resistencia inicial al amor apasionado",
    incorrectas: [
      "Una dama completamente pasiva",
      "Una figura alegórica sin rasgos humanos"
    ]
  },
  {
    enunciado: "¿Qué distingue a La Celestina en el canon literario?",
    correcta: "Su carácter híbrido entre novela y teatro",
    incorrectas: [
      "Ser un poema épico nacional",
      "Ser un tratado filosófico medieval"
    ]
  },
  {
    enunciado: "¿Qué rasgo de estilo anticipa el Renacimiento?",
    correcta: "La búsqueda de claridad, riqueza expresiva y análisis psicológico",
    incorrectas: [
      "El hermetismo de los cultismos barrocos",
      "El didactismo alegórico medieval"
    ]
  },
  {
    enunciado: "¿Qué relación tienen los criados con la trama principal?",
    correcta: "Son catalizadores de la tragedia al traicionar a Calisto",
    incorrectas: [
      "Representan la voz del narrador omnisciente",
      "Se limitan a aportar comicidad sin relevancia"
    ]
  },
  {
    enunciado: "¿Qué género híbrido se le ha atribuido a La Celestina?",
    correcta: "Comedia humanística con elementos trágicos",
    incorrectas: [
      "Serranilla pastoril",
      "Romance fronterizo"
    ]
  },
  {
    enunciado: "¿Qué crítica social se percibe en la figura de Celestina?",
    correcta: "La manipulación a través de la codicia y la corrupción moral",
    incorrectas: [
      "La defensa de la virtud monástica",
      "La exaltación del servicio vasallático"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el destino en la obra?",
    correcta: "Subraya la inevitabilidad de la muerte y la fatalidad",
    incorrectas: [
      "Garantiza el triunfo del amor",
      "Asegura la gloria militar de Calisto"
    ]
  },
  {
    enunciado: "¿Qué tono adoptan los monólogos de Melibea?",
    correcta: "Confesional, íntimo y cargado de tensión emocional",
    incorrectas: [
      "Satírico y humorístico",
      "Heroico y solemne"
    ]
  },
  {
    enunciado: "¿Qué técnica narrativa favorece la introspección en La Celestina?",
    correcta: "El uso de monólogos y diálogos extensos",
    incorrectas: [
      "El narrador omnisciente en tercera persona",
      "La métrica alegórica de los cantares"
    ]
  },
  {
    enunciado: "¿Qué función desempeñan los apartes y largas intervenciones?",
    correcta: "Permiten el desarrollo psicológico de los personajes",
    incorrectas: [
      "Sustituyen al narrador omnisciente",
      "Restringen la acción al comentario externo"
    ]
  },
  {
    enunciado: "¿Qué visión del amor ofrece Calisto?",
    correcta: "Amor obsesivo y pasional que conduce a la perdición",
    incorrectas: [
      "Amor cortés de servicio mesurado",
      "Amor platónico espiritualizado"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa La Celestina en la literatura española?",
    correcta: "Es una obra fundacional de la narrativa y el teatro moderno",
    incorrectas: [
      "Es el primer romance anónimo conservado",
      "Es una hagiografía medieval"
    ]
  },
  {
    enunciado: "¿Qué elemento refuerza el realismo de la obra?",
    correcta: "La mezcla de registros lingüísticos y el detalle cotidiano",
    incorrectas: [
      "El uso exclusivo de alegorías",
      "La introducción de episodios mitológicos"
    ]
  },
  {
    enunciado: "¿Qué actitud vital refleja el lamento de Pleberio?",
    correcta: "Pesimismo y desengaño ante la fugacidad de la vida",
    incorrectas: [
      "Optimismo ante la salvación eterna",
      "Esperanza en la fama inmortal"
    ]
  }
];
