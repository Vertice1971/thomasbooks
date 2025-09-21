// temarios/63-la-lirica-en-el-grupo-poetico-del-27.js
var PREGUNTAS = [
  {
    enunciado: "¿Por qué recibe su nombre el Grupo Poético del 27?",
    correcta: "Por la conmemoración del tricentenario de la muerte de Góngora en 1927",
    incorrectas: [
      "Por un congreso internacional de surrealismo en París",
      "Por la fundación de la Residencia de Estudiantes en 1927"
    ]
  },
  {
    enunciado: "¿Qué caracteriza globalmente a la poesía del 27?",
    correcta: "La síntesis entre tradición clásica y vanguardia",
    incorrectas: [
      "El rechazo absoluto de cualquier influencia extranjera",
      "El aislamiento frente a la poesía europea contemporánea"
    ]
  },
  {
    enunciado: "¿Qué autor del 27 combinó lo popular y lo culto en su poesía?",
    correcta: "Federico García Lorca",
    incorrectas: [
      "Azorín",
      "Ramón del Valle-Inclán"
    ]
  },
  {
    enunciado: "¿Qué poeta del 27 es considerado el máximo exponente de la 'poesía pura'?",
    correcta: "Jorge Guillén",
    incorrectas: [
      "Pedro Salinas",
      "Vicente Aleixandre"
    ]
  },
  {
    enunciado: "¿Qué género cultivaron los poetas del 27 además de la poesía?",
    correcta: "El teatro y el ensayo",
    incorrectas: [
      "Exclusivamente la novela naturalista",
      "Principalmente la crítica filosófica"
    ]
  },
  {
    enunciado: "¿Qué papel jugó Juan Ramón Jiménez en el 27?",
    correcta: "Fue referente estético en la primera etapa de poesía pura",
    incorrectas: [
      "Dirigió políticamente a los poetas del grupo",
      "Publicó el manifiesto ultraísta en 1920"
    ]
  },
  {
    enunciado: "¿Qué recurso retórico es central en la lírica del 27?",
    correcta: "La metáfora audaz y sorprendente",
    incorrectas: [
      "El uso sistemático de refranes populares",
      "La repetición constante de versos clásicos sin innovación"
    ]
  },
  {
    enunciado: "¿Qué poeta del 27 destacó por su tono existencial en el exilio?",
    correcta: "Luis Cernuda",
    incorrectas: [
      "Gerardo Diego",
      "Miguel Hernández"
    ]
  },
  {
    enunciado: "¿Qué poeta del 27 obtuvo el Premio Nobel de Literatura?",
    correcta: "Vicente Aleixandre",
    incorrectas: [
      "Rafael Alberti",
      "Pedro Salinas"
    ]
  },
  {
    enunciado: "¿Qué rasgo musical incorpora Lorca en 'Poema del cante jondo'?",
    correcta: "La influencia de la música popular andaluza",
    incorrectas: [
      "El canto gregoriano medieval",
      "La ópera wagneriana alemana"
    ]
  },
  {
    enunciado: "¿Qué poeta del 27 cultivó también el creacionismo?",
    correcta: "Gerardo Diego",
    incorrectas: [
      "Dámaso Alonso",
      "Antonio Machado"
    ]
  },
  {
    enunciado: "¿Qué mujeres poetas se vinculan al 27 bajo el nombre de 'las Sinsombrero'?",
    correcta: "Concha Méndez y María Teresa León, entre otras",
    incorrectas: [
      "Rosalía de Castro y Carolina Coronado",
      "Emilia Pardo Bazán y Carmen Laforet"
    ]
  },
  {
    enunciado: "¿Qué tema se intensifica en la poesía del 27 durante la Guerra Civil?",
    correcta: "El compromiso social y político",
    incorrectas: [
      "La exaltación exclusiva del paisaje idílico",
      "El rechazo de cualquier preocupación histórica"
    ]
  },
  {
    enunciado: "¿Qué autor del 27 escribió 'Sobre los ángeles'?",
    correcta: "Rafael Alberti",
    incorrectas: [
      "Jorge Guillén",
      "Vicente Aleixandre"
    ]
  },
  {
    enunciado: "¿Qué autor escribió 'Espadas como labios'?",
    correcta: "Vicente Aleixandre",
    incorrectas: [
      "Pedro Salinas",
      "Luis Cernuda"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la poesía de Pedro Salinas?",
    correcta: "La exploración del amor como conocimiento esencial",
    incorrectas: [
      "La sátira política constante",
      "La narrativa épica de tono histórico"
    ]
  },
  {
    enunciado: "¿Qué tendencia se aprecia en Dámaso Alonso tras la Guerra Civil?",
    correcta: "La poesía desarraigada y existencial",
    incorrectas: [
      "La poesía pura sin referencias sociales",
      "El costumbrismo regionalista"
    ]
  },
  {
    enunciado: "¿Qué revista fue clave en la difusión del 27?",
    correcta: "Revista de Occidente",
    incorrectas: [
      "La Gaceta Literaria del siglo XIX",
      "El Censor"
    ]
  },
  {
    enunciado: "¿Qué autor escribió 'La voz a ti debida'?",
    correcta: "Pedro Salinas",
    incorrectas: [
      "Jorge Guillén",
      "Emilio Prados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a Jorge Guillén en 'Cántico'?",
    correcta: "Una visión jubilosa y armónica de la realidad",
    incorrectas: [
      "Un tono apocalíptico y nihilista",
      "La sátira mordaz y burlesca"
    ]
  },
  {
    enunciado: "¿Qué poeta del 27 exploró con fuerza el surrealismo?",
    correcta: "Federico García Lorca en 'Poeta en Nueva York'",
    incorrectas: [
      "Pedro Salinas en 'Presagios'",
      "Rafael Alberti en 'Marinero en tierra'"
    ]
  },
  {
    enunciado: "¿Qué poeta del 27 se caracteriza por su poesía marinera?",
    correcta: "Rafael Alberti en 'Marinero en tierra'",
    incorrectas: [
      "Vicente Aleixandre en 'Sombra del paraíso'",
      "Luis Cernuda en 'La realidad y el deseo'"
    ]
  },
  {
    enunciado: "¿Qué tendencia se aprecia en el exilio de Cernuda?",
    correcta: "La meditación sobre amor, soledad y patria perdida",
    incorrectas: [
      "La lírica puramente bucólica",
      "La epopeya histórica medievalizante"
    ]
  },
  {
    enunciado: "¿Qué poeta del 27 fue también crítico literario destacado?",
    correcta: "Dámaso Alonso",
    incorrectas: [
      "Pedro Salinas",
      "Jorge Guillén"
    ]
  },
  {
    enunciado: "¿Qué aportación común hicieron los poetas del 27?",
    correcta: "La modernización y universalización de la lírica española",
    incorrectas: [
      "El retorno al petrarquismo sin innovaciones",
      "El abandono de la poesía por la prosa histórica"
    ]
  },
  {
    enunciado: "¿Qué figura barroca fue homenajeada por el grupo en 1927?",
    correcta: "Luis de Góngora",
    incorrectas: [
      "Francisco de Quevedo",
      "Lope de Vega"
    ]
  },
  {
    enunciado: "¿Qué rasgo une a los poetas del 27 pese a su diversidad?",
    correcta: "El equilibrio entre lo culto y lo popular",
    incorrectas: [
      "El desprecio absoluto por la tradición",
      "La rigidez métrica neoclásica"
    ]
  },
  {
    enunciado: "¿Qué poeta escribió 'La destrucción o el amor'?",
    correcta: "Vicente Aleixandre",
    incorrectas: [
      "Federico García Lorca",
      "Pedro Salinas"
    ]
  },
  {
    enunciado: "¿Qué influencia vanguardista asimilaron los poetas del 27?",
    correcta: "El surrealismo y la poesía visual",
    incorrectas: [
      "El romanticismo decimonónico sin crítica",
      "El positivismo científico en verso"
    ]
  },
  {
    enunciado: "¿Qué poetas del 27 publicaron desde el exilio en México?",
    correcta: "Emilio Prados y Luis Cernuda",
    incorrectas: [
      "Jorge Guillén y Dámaso Alonso",
      "Gerardo Diego y Vicente Aleixandre"
    ]
  },
  {
    enunciado: "¿Qué diferencia marca la evolución del 27 tras la Guerra Civil?",
    correcta: "El paso de la poesía estética a la humanizada y comprometida",
    incorrectas: [
      "El abandono de la metáfora por completo",
      "El retorno a la lírica neoclásica del XVIII"
    ]
  },
  {
    enunciado: "¿Qué poeta del 27 elaboró una obra extensa bajo el título 'La realidad y el deseo'?",
    correcta: "Luis Cernuda",
    incorrectas: [
      "Pedro Salinas",
      "Vicente Aleixandre"
    ]
  },
  {
    enunciado: "¿Qué distingue la primera etapa del 27?",
    correcta: "La poesía pura influida por Juan Ramón Jiménez",
    incorrectas: [
      "El costumbrismo narrativo",
      "La lírica pastoral renacentista"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la segunda etapa del 27?",
    correcta: "La asimilación de las vanguardias y el compromiso social",
    incorrectas: [
      "El formalismo neoclásico",
      "La lírica religiosa medieval"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la tercera etapa del 27?",
    correcta: "La lírica del exilio y la poesía de denuncia",
    incorrectas: [
      "El hermetismo absoluto sin referencias históricas",
      "La lírica caballeresca medieval"
    ]
  },
  {
    enunciado: "¿Qué función cumple el uso de la sinestesia en la poesía del 27?",
    correcta: "Expresar correspondencias sensoriales y simbolismo",
    incorrectas: [
      "Simplificar la métrica",
      "Narrar hechos históricos con objetividad"
    ]
  },
  {
    enunciado: "¿Qué aportación estética realizó Gerardo Diego además de la poesía?",
    correcta: "El impulso del creacionismo en España",
    incorrectas: [
      "La fundación del realismo mágico",
      "La difusión del existencialismo francés"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al legado del 27?",
    correcta: "La proyección universal y la influencia en la poesía contemporánea",
    incorrectas: [
      "La ruptura definitiva con toda tradición",
      "La desaparición del género lírico en España"
    ]
  }
];
