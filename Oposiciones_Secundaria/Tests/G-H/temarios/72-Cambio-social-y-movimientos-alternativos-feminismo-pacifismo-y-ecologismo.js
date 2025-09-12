// temarios/72-Cambio-social-y-movimientos-alternativos-feminismo-pacifismo-y-ecologismo.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por cambio social en sociología?",
    correcta: "Transformaciones significativas y duraderas en valores, instituciones y relaciones sociales",
    incorrectas: [
      "Un cambio exclusivamente económico sin impacto cultural",
      "Una variación efímera de costumbres sin efectos estructurales"
    ]
  },
  {
    enunciado: "¿Qué autor planteó el concepto de 'sociedad del riesgo' vinculado a la modernidad avanzada?",
    correcta: "Ulrich Beck",
    incorrectas: [
      "Anthony Giddens",
      "Karl Popper"
    ]
  },
  {
    enunciado: "¿Qué factores impulsaron los cambios sociales del siglo XX?",
    correcta: "Industrialización, urbanización, globalización, crisis ideológicas y conflictos bélicos",
    incorrectas: [
      "La continuidad de sociedades rurales estables",
      "El aislamiento de los Estados respecto al comercio internacional"
    ]
  },
  {
    enunciado: "¿Qué define a los movimientos sociales alternativos?",
    correcta: "Respuestas críticas y propositivas ante modelos dominantes",
    incorrectas: [
      "Asociaciones exclusivamente recreativas",
      "Partidos políticos de carácter tradicional"
    ]
  },
  {
    enunciado: "¿Qué reivindicaba el feminismo de la primera ola?",
    correcta: "Derechos civiles y políticos, especialmente el sufragio femenino",
    incorrectas: [
      "El rechazo de toda participación de las mujeres en la política",
      "La supresión de los sindicatos obreros"
    ]
  },
  {
    enunciado: "¿Qué obra de Simone de Beauvoir es un referente del feminismo del siglo XX?",
    correcta: "El segundo sexo",
    incorrectas: [
      "La condición humana",
      "La dialéctica de la Ilustración"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al feminismo de la segunda ola (años 60-70)?",
    correcta: "La lucha por la igualdad laboral, los derechos reproductivos y la visibilización social",
    incorrectas: [
      "La reivindicación exclusiva del voto femenino",
      "El rechazo a toda legislación en materia de género"
    ]
  },
  {
    enunciado: "¿Qué propone el feminismo interseccional?",
    correcta: "Analizar la discriminación considerando género, raza, clase y otros ejes",
    incorrectas: [
      "Limitar el feminismo a la igualdad jurídica formal",
      "Centrarse solo en los problemas de las élites económicas"
    ]
  },
  {
    enunciado: "¿Qué figura histórica lideró la lucha sufragista en el Reino Unido?",
    correcta: "Emmeline Pankhurst",
    incorrectas: [
      "Clara Campoamor",
      "Dolores Ibárruri"
    ]
  },
  {
    enunciado: "¿Qué líder india se asocia al pacifismo y la resistencia no violenta?",
    correcta: "Mahatma Gandhi",
    incorrectas: [
      "Jawaharlal Nehru",
      "Nelson Mandela"
    ]
  },
  {
    enunciado: "¿Qué discurso de Martin Luther King simboliza la lucha pacifista y por los derechos civiles?",
    correcta: "I Have a Dream",
    incorrectas: [
      "Carta desde la cárcel de Birmingham",
      "Yes We Can"
    ]
  },
  {
    enunciado: "¿Qué movimiento pacifista fue emblemático en los años 60?",
    correcta: "La oposición a la guerra de Vietnam",
    incorrectas: [
      "El rechazo a la industrialización en Inglaterra",
      "La defensa de la censura literaria"
    ]
  },
  {
    enunciado: "¿Qué organización internacional defiende el desarme nuclear?",
    correcta: "ONU",
    incorrectas: [
      "OTAN",
      "FMI"
    ]
  },
  {
    enunciado: "¿Qué autora denunció los efectos de pesticidas en 'Silent Spring'?",
    correcta: "Rachel Carson",
    incorrectas: [
      "Jane Goodall",
      "Simone Weil"
    ]
  },
  {
    enunciado: "¿Qué organización ecologista nació en 1971 con campañas de acción directa?",
    correcta: "Greenpeace",
    incorrectas: [
      "Amnistía Internacional",
      "Human Rights Watch"
    ]
  },
  {
    enunciado: "¿Qué documento de 1987 popularizó el concepto de desarrollo sostenible?",
    correcta: "Informe Brundtland",
    incorrectas: [
      "Tratado de Maastricht",
      "Declaración de Helsinki"
    ]
  },
  {
    enunciado: "¿Qué partido político ha sido referente en la ecología política europea?",
    correcta: "Los Verdes",
    incorrectas: [
      "El Partido Liberal",
      "El Partido Conservador"
    ]
  },
  {
    enunciado: "¿Qué lema simboliza la juventud en lucha contra el cambio climático?",
    correcta: "Fridays for Future",
    incorrectas: [
      "Yes We Camp",
      "Occupy Wall Street"
    ]
  },
  {
    enunciado: "¿Qué movimiento luchó contra la segregación racial en EE.UU.?",
    correcta: "El movimiento por los derechos civiles",
    incorrectas: [
      "El Tea Party",
      "La Commonwealth británica"
    ]
  },
  {
    enunciado: "¿Qué líder sudafricano luchó contra el apartheid?",
    correcta: "Nelson Mandela",
    incorrectas: [
      "Kwame Nkrumah",
      "Patrice Lumumba"
    ]
  },
  {
    enunciado: "¿Qué suceso de 1969 marca un hito en el movimiento LGBTQ+?",
    correcta: "Los disturbios de Stonewall en Nueva York",
    incorrectas: [
      "La fundación del Parlamento Europeo",
      "La caída del Muro de Berlín"
    ]
  },
  {
    enunciado: "¿Qué movimiento crítico con la globalización emergió en los años 90?",
    correcta: "El movimiento antiglobalización",
    incorrectas: [
      "El movimiento ilustrado",
      "El movimiento barroco"
    ]
  },
  {
    enunciado: "¿Qué autor es un referente en la defensa de los derechos de los animales?",
    correcta: "Peter Singer",
    incorrectas: [
      "Max Weber",
      "Raymond Aron"
    ]
  },
  {
    enunciado: "¿Qué papel cumplen las redes sociales en los movimientos alternativos?",
    correcta: "Facilitan la movilización y difusión de mensajes de forma global",
    incorrectas: [
      "Impiden la organización colectiva",
      "Sustituyen la acción social por ocio privado"
    ]
  },
  {
    enunciado: "¿Qué crítica frecuente reciben los movimientos alternativos?",
    correcta: "Riesgo de fragmentación y contradicciones internas",
    incorrectas: [
      "Exceso de homogeneidad ideológica",
      "Dependencia exclusiva de los Estados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al feminismo liberal clásico?",
    correcta: "La defensa de la igualdad jurídica y el derecho al voto",
    incorrectas: [
      "La negación del acceso a la educación",
      "La defensa de jerarquías sociales inmutables"
    ]
  },
  {
    enunciado: "¿Qué aportó Kimberlé Crenshaw al feminismo?",
    correcta: "El concepto de interseccionalidad",
    incorrectas: [
      "El concepto de lucha de clases",
      "El concepto de esfera pública"
    ]
  },
  {
    enunciado: "¿Qué movimiento se organizó contra el despliegue de armas nucleares en Europa?",
    correcta: "El movimiento por el desarme nuclear",
    incorrectas: [
      "El movimiento surrealista",
      "El movimiento renacentista"
    ]
  },
  {
    enunciado: "¿Qué actor internacional fija cada año la Agenda 2030 para el desarrollo sostenible?",
    correcta: "La ONU",
    incorrectas: [
      "El Vaticano",
      "El G7"
    ]
  },
  {
    enunciado: "¿Qué organización ecologista utiliza la acción directa y la investigación científica?",
    correcta: "WWF",
    incorrectas: [
      "Cruz Roja",
      "Interpol"
    ]
  },
  {
    enunciado: "¿Qué autor teorizó sobre los movimientos sociales como actores históricos?",
    correcta: "Alain Touraine",
    incorrectas: [
      "Émile Durkheim",
      "Francis Fukuyama"
    ]
  },
  {
    enunciado: "¿Qué obra de Anthony Giddens analiza el cambio social en la modernidad?",
    correcta: "Sociología",
    incorrectas: [
      "El fin de la Historia",
      "La sociedad del espectáculo"
    ]
  },
  {
    enunciado: "¿Qué aportó Manuel Castells al estudio de los movimientos sociales?",
    correcta: "El análisis de la sociedad red y el poder de la comunicación",
    incorrectas: [
      "La teoría de los arquetipos sociales",
      "La teoría de los tres órdenes"
    ]
  },
  {
    enunciado: "¿Qué rol desempeñó Clara Campoamor en España?",
    correcta: "Defendió el sufragio femenino durante la II República",
    incorrectas: [
      "Lideró el movimiento obrero de Asturias",
      "Fue presidenta del Congreso tras la Transición"
    ]
  },
  {
    enunciado: "¿Qué movimiento usó la consigna 'No a la guerra' en 2003?",
    correcta: "El pacifismo contra la invasión de Irak",
    incorrectas: [
      "El liberalismo económico",
      "El nacionalismo balcánico"
    ]
  },
  {
    enunciado: "¿Qué concepto se asocia a la crítica ecologista al consumo ilimitado?",
    correcta: "Desarrollo sostenible",
    incorrectas: [
      "Crecimiento infinito",
      "Productivismo ilimitado"
    ]
  },
  {
    enunciado: "¿Qué ONG nació en 1961 para defender los derechos humanos?",
    correcta: "Amnistía Internacional",
    incorrectas: [
      "Médicos sin Fronteras",
      "Cáritas"
    ]
  },
  {
    enunciado: "¿Qué crítica hizo Guy Debord sobre la sociedad moderna?",
    correcta: "Que se ha convertido en una sociedad del espectáculo basada en la imagen",
    incorrectas: [
      "Que ha desaparecido toda forma de comunicación",
      "Que las masas rechazan cualquier representación cultural"
    ]
  },
  {
    enunciado: "¿Qué simboliza el movimiento Occupy Wall Street?",
    correcta: "La crítica a la desigualdad económica y el poder financiero",
    incorrectas: [
      "La defensa de los monopolios industriales",
      "La reivindicación de un sistema feudal"
    ]
  },
  {
    enunciado: "¿Qué plantean los movimientos de derechos de los animales?",
    correcta: "La consideración ética de los animales y su derecho a no sufrir explotación",
    incorrectas: [
      "La exclusión de los animales de toda reflexión moral",
      "La defensa del uso ilimitado de animales en experimentación"
    ]
  }
];
