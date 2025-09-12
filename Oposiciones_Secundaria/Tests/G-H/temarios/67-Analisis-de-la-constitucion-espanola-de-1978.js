// temarios/67-Analisis-de-la-constitucion-espanola-de-1978.js
var PREGUNTAS = [
  {
    enunciado: "¿En qué fecha fue ratificada en referéndum la Constitución Española de 1978?",
    correcta: "El 6 de diciembre de 1978",
    incorrectas: [
      "El 20 de noviembre de 1975",
      "El 23 de febrero de 1981"
    ]
  },
  {
    enunciado: "¿Qué forma política adopta España según la Constitución de 1978?",
    correcta: "Una monarquía parlamentaria",
    incorrectas: [
      "Una república presidencialista",
      "Una dictadura militar"
    ]
  },
  {
    enunciado: "¿Qué partidos formaron parte de la Ponencia constitucional, conocidos como los 'padres de la Constitución'?",
    correcta: "UCD, PSOE, PCE, Alianza Popular y Minoría Catalana",
    incorrectas: [
      "Falange Española y Unión Militar Democrática",
      "Sólo UCD y PSOE"
    ]
  },
  {
    enunciado: "¿Qué parte de la Constitución regula los derechos y deberes fundamentales?",
    correcta: "La parte dogmática, especialmente el Título I (arts. 10-55)",
    incorrectas: [
      "El Título VIII sobre organización territorial",
      "El Preámbulo y las disposiciones transitorias"
    ]
  },
  {
    enunciado: "¿Qué principio recoge el artículo 1.1 de la Constitución Española de 1978?",
    correcta: "Que España es un Estado social y democrático de derecho",
    incorrectas: [
      "Que España es un imperio ultramarino",
      "Que España es una república federal"
    ]
  },
  {
    enunciado: "¿Qué institución ejerce la soberanía nacional en España según la Constitución?",
    correcta: "El pueblo español en su conjunto",
    incorrectas: [
      "El monarca de forma exclusiva",
      "El Ejército como garante del orden"
    ]
  },
  {
    enunciado: "¿Qué institución garantiza la supremacía de la Constitución mediante control de constitucionalidad?",
    correcta: "El Tribunal Constitucional",
    incorrectas: [
      "El Tribunal Supremo",
      "El Consejo de Estado"
    ]
  },
  {
    enunciado: "¿Qué título de la Constitución regula la Corona?",
    correcta: "El Título II",
    incorrectas: [
      "El Título IV",
      "El Título VIII"
    ]
  },
  {
    enunciado: "¿Qué tipo de democracia establece la Constitución Española de 1978?",
    correcta: "Una democracia representativa basada en el pluralismo político",
    incorrectas: [
      "Una democracia directa sin instituciones intermedias",
      "Una democracia censitaria limitada a propietarios"
    ]
  },
  {
    enunciado: "¿Qué procedimiento de reforma se aplica a los artículos fundamentales de la Constitución?",
    correcta: "La reforma agravada, que requiere disolución de Cortes, aprobación por 2/3 y referéndum",
    incorrectas: [
      "La reforma automática por decreto-ley",
      "La reforma ordinaria con mayoría simple"
    ]
  },
  {
    enunciado: "¿Qué artículo reconoce el derecho a la autonomía de nacionalidades y regiones?",
    correcta: "El artículo 2",
    incorrectas: [
      "El artículo 1",
      "El artículo 99"
    ]
  },
  {
    enunciado: "¿Qué función cumple el Senado según la Constitución?",
    correcta: "Es la Cámara de representación territorial",
    incorrectas: [
      "Es el máximo órgano judicial",
      "Es un consejo consultivo de la Corona"
    ]
  },
  {
    enunciado: "¿Qué deber fundamental recoge la Constitución en relación con la defensa nacional?",
    correcta: "El deber de defender a España",
    incorrectas: [
      "El deber de pertenecer al Ejército",
      "El deber de financiar la monarquía"
    ]
  },
  {
    enunciado: "¿Qué papel asigna la Constitución a los partidos políticos?",
    correcta: "Expresan el pluralismo político y son instrumento de participación política",
    incorrectas: [
      "Ejercen el poder ejecutivo en nombre del Rey",
      "Sustituyen a las instituciones judiciales"
    ]
  },
  {
    enunciado: "¿Qué define el Título VIII de la Constitución Española de 1978?",
    correcta: "La organización territorial del Estado",
    incorrectas: [
      "Los derechos fundamentales",
      "La Corona"
    ]
  },
  {
    enunciado: "¿Qué artículo regula el derecho a la vida y a la integridad física y moral?",
    correcta: "El artículo 15",
    incorrectas: [
      "El artículo 2",
      "El artículo 56"
    ]
  },
  {
    enunciado: "¿Qué institución dirige el poder ejecutivo en España según la Constitución?",
    correcta: "El Gobierno de la Nación",
    incorrectas: [
      "El Consejo General del Poder Judicial",
      "El Defensor del Pueblo"
    ]
  },
  {
    enunciado: "¿Qué institución dirige el poder legislativo según la Constitución?",
    correcta: "Las Cortes Generales, compuestas por Congreso y Senado",
    incorrectas: [
      "El Consejo de Ministros",
      "El Tribunal Constitucional"
    ]
  },
  {
    enunciado: "¿Qué artículo reconoce la libertad ideológica, religiosa y de culto?",
    correcta: "El artículo 16",
    incorrectas: [
      "El artículo 3",
      "El artículo 20"
    ]
  },
  {
    enunciado: "¿Qué institución preside el Rey según la Constitución?",
    correcta: "La Corona como Jefatura del Estado",
    incorrectas: [
      "El Congreso de los Diputados",
      "El Tribunal Constitucional"
    ]
  },
  {
    enunciado: "¿Qué título regula el Poder Judicial?",
    correcta: "El Título VI",
    incorrectas: [
      "El Título IV",
      "El Título IX"
    ]
  },
  {
    enunciado: "¿Qué reconoce el artículo 27 de la Constitución?",
    correcta: "El derecho a la educación y la libertad de enseñanza",
    incorrectas: [
      "El derecho al trabajo",
      "El derecho a la libertad de expresión"
    ]
  },
  {
    enunciado: "¿Qué define el artículo 6 de la Constitución?",
    correcta: "El papel de los partidos políticos en el sistema democrático",
    incorrectas: [
      "El papel de los sindicatos en el sistema económico",
      "El estatuto de las Fuerzas Armadas"
    ]
  },
  {
    enunciado: "¿Qué reconoce el artículo 14 de la Constitución?",
    correcta: "La igualdad ante la ley sin discriminación por nacimiento, raza, sexo, religión o cualquier otra condición",
    incorrectas: [
      "La libertad de prensa",
      "El derecho de huelga"
    ]
  },
  {
    enunciado: "¿Qué mecanismo protege los derechos fundamentales ante el Tribunal Constitucional?",
    correcta: "El recurso de amparo",
    incorrectas: [
      "La moción de censura",
      "La cuestión de confianza"
    ]
  },
  {
    enunciado: "¿Qué recoge el Título III de la Constitución?",
    correcta: "La regulación de las Cortes Generales",
    incorrectas: [
      "Los principios rectores de la política social y económica",
      "El funcionamiento de las comunidades autónomas"
    ]
  },
  {
    enunciado: "¿Qué procedimiento de reforma requiere mayoría de tres quintos en ambas Cámaras?",
    correcta: "La reforma ordinaria (art. 167)",
    incorrectas: [
      "La reforma agravada (art. 168)",
      "La aprobación de leyes orgánicas"
    ]
  },
  {
    enunciado: "¿Qué artículo establece la oficialidad del castellano y la posibilidad de lenguas cooficiales?",
    correcta: "El artículo 3",
    incorrectas: [
      "El artículo 2",
      "El artículo 12"
    ]
  },
  {
    enunciado: "¿Qué institución defiende los derechos de los ciudadanos frente a la Administración?",
    correcta: "El Defensor del Pueblo",
    incorrectas: [
      "El Consejo de Estado",
      "El Consejo Económico y Social"
    ]
  },
  {
    enunciado: "¿Qué artículo regula la libertad de expresión y el derecho a la información?",
    correcta: "El artículo 20",
    incorrectas: [
      "El artículo 22",
      "El artículo 10"
    ]
  },
  {
    enunciado: "¿Qué institución sanciona y promulga las leyes según la Constitución?",
    correcta: "El Rey",
    incorrectas: [
      "El Tribunal Supremo",
      "El Defensor del Pueblo"
    ]
  },
  {
    enunciado: "¿Qué reconoce el artículo 28 de la Constitución?",
    correcta: "El derecho a sindicarse y el derecho de huelga",
    incorrectas: [
      "El derecho al honor y a la intimidad",
      "El derecho a la tutela judicial efectiva"
    ]
  },
  {
    enunciado: "¿Qué recoge el Título IX de la Constitución?",
    correcta: "El Tribunal Constitucional",
    incorrectas: [
      "El Poder Judicial",
      "La Corona"
    ]
  },
  {
    enunciado: "¿Qué reconoce el artículo 18 de la Constitución?",
    correcta: "El derecho al honor, a la intimidad personal y familiar y a la propia imagen",
    incorrectas: [
      "El derecho al trabajo",
      "El derecho a fundar partidos políticos"
    ]
  },
  {
    enunciado: "¿Qué artículo establece el derecho a la tutela judicial efectiva?",
    correcta: "El artículo 24",
    incorrectas: [
      "El artículo 9",
      "El artículo 25"
    ]
  },
  {
    enunciado: "¿Qué procedimiento de control parlamentario puede destituir al Presidente del Gobierno?",
    correcta: "La moción de censura",
    incorrectas: [
      "El recurso de inconstitucionalidad",
      "El decreto-ley"
    ]
  },
  {
    enunciado: "¿Qué reconoce el artículo 35 de la Constitución?",
    correcta: "El derecho y deber al trabajo",
    incorrectas: [
      "El derecho a la propiedad privada",
      "El derecho a fundar asociaciones"
    ]
  },
  {
    enunciado: "¿Qué título regula la economía y la hacienda?",
    correcta: "El Título VII",
    incorrectas: [
      "El Título VI",
      "El Título X"
    ]
  },
  {
    enunciado: "¿Qué recoge el artículo 27.5 de la Constitución?",
    correcta: "La programación general de la enseñanza por parte de los poderes públicos",
    incorrectas: [
      "La libertad de asociación sindical",
      "La sucesión en la Corona"
    ]
  },
  {
    enunciado: "¿Qué reconoce el artículo 17 de la Constitución?",
    correcta: "El derecho a la libertad y a la seguridad personales",
    incorrectas: [
      "El derecho al medio ambiente",
      "El derecho a la objeción de conciencia"
    ]
  }
];
