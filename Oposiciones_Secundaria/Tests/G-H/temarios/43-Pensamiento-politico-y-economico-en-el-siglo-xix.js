// temarios/43-Pensamiento-politico-y-economico-en-el-siglo-xix.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué corriente política defendía la libertad individual, el Estado limitado y la propiedad privada?",
    correcta: "El liberalismo",
    incorrectas: [
      "El socialismo",
      "El conservadurismo"
    ]
  },
  {
    enunciado: "¿Qué autor liberal escribió 'Sobre la libertad'?",
    correcta: "John Stuart Mill",
    incorrectas: [
      "Adam Smith",
      "Alexis de Tocqueville"
    ]
  },
  {
    enunciado: "¿Qué pensador liberal analizó la democracia en Estados Unidos?",
    correcta: "Alexis de Tocqueville",
    incorrectas: [
      "David Ricardo",
      "Mijaíl Bakunin"
    ]
  },
  {
    enunciado: "¿Qué ideología reaccionó contra la Revolución Francesa defendiendo la tradición y la monarquía?",
    correcta: "El conservadurismo",
    incorrectas: [
      "El liberalismo",
      "El anarquismo"
    ]
  },
  {
    enunciado: "¿Quién es considerado el padre del conservadurismo moderno?",
    correcta: "Edmund Burke",
    incorrectas: [
      "Giuseppe Mazzini",
      "Karl Marx"
    ]
  },
  {
    enunciado: "¿Qué corriente política criticó la desigualdad capitalista proponiendo justicia social?",
    correcta: "El socialismo",
    incorrectas: [
      "El liberalismo",
      "El nacionalismo"
    ]
  },
  {
    enunciado: "¿Quiénes redactaron el 'Manifiesto Comunista' en 1848?",
    correcta: "Karl Marx y Friedrich Engels",
    incorrectas: [
      "Saint-Simon y Fourier",
      "Bakunin y Kropotkin"
    ]
  },
  {
    enunciado: "¿Qué tipo de socialismo desarrollaron Marx y Engels?",
    correcta: "Socialismo científico",
    incorrectas: [
      "Socialismo utópico",
      "Anarcosindicalismo"
    ]
  },
  {
    enunciado: "¿Qué corriente rechaza toda forma de Estado y autoridad impuesta?",
    correcta: "El anarquismo",
    incorrectas: [
      "El liberalismo",
      "El conservadurismo"
    ]
  },
  {
    enunciado: "¿Qué anarquista defendió la autogestión y el colectivismo?",
    correcta: "Mijaíl Bakunin",
    incorrectas: [
      "Karl Marx",
      "David Ricardo"
    ]
  },
  {
    enunciado: "¿Qué ideología afirma que la nación es la base legítima del poder político?",
    correcta: "El nacionalismo",
    incorrectas: [
      "El anarquismo",
      "El socialismo"
    ]
  },
  {
    enunciado: "¿Qué nacionalista italiano promovió la unificación de su país con un enfoque liberal?",
    correcta: "Giuseppe Mazzini",
    incorrectas: [
      "Camillo Benso de Cavour",
      "Giuseppe Garibaldi"
    ]
  },
  {
    enunciado: "¿Qué obra de Adam Smith sentó las bases de la economía clásica?",
    correcta: "La riqueza de las naciones",
    incorrectas: [
      "El capital",
      "Principios de economía política"
    ]
  },
  {
    enunciado: "¿Qué economista formuló la teoría de las ventajas comparativas?",
    correcta: "David Ricardo",
    incorrectas: [
      "Thomas Malthus",
      "John Stuart Mill"
    ]
  },
  {
    enunciado: "¿Qué economista advirtió sobre el crecimiento poblacional y los recursos limitados?",
    correcta: "Thomas Malthus",
    incorrectas: [
      "Karl Marx",
      "Adam Smith"
    ]
  },
  {
    enunciado: "¿Qué obra de Marx analiza la explotación capitalista y la plusvalía?",
    correcta: "El capital",
    incorrectas: [
      "La democracia en América",
      "Sobre la libertad"
    ]
  },
  {
    enunciado: "¿Qué pensador socialista utópico propuso comunidades cooperativas?",
    correcta: "Robert Owen",
    incorrectas: [
      "David Ricardo",
      "Friedrich Engels"
    ]
  },
  {
    enunciado: "¿Qué economista alemán defendió el proteccionismo para el desarrollo industrial?",
    correcta: "Friedrich List",
    incorrectas: [
      "John Stuart Mill",
      "Jean-Baptiste Say"
    ]
  },
  {
    enunciado: "¿Qué corriente económica defendía el libre mercado sin intervención estatal?",
    correcta: "Economía clásica liberal",
    incorrectas: [
      "Economía socialista",
      "Economía keynesiana"
    ]
  },
  {
    enunciado: "¿Qué doctrina social de la Iglesia abordó la cuestión obrera en 1891?",
    correcta: "Rerum Novarum",
    incorrectas: [
      "Laborem Exercens",
      "Quadragesimo Anno"
    ]
  },
  {
    enunciado: "¿Qué revolución ideológica inspiró movimientos obreros y sindicales en el XIX?",
    correcta: "El marxismo",
    incorrectas: [
      "El positivismo",
      "El utilitarismo"
    ]
  },
  {
    enunciado: "¿Qué corriente filosófica liberal defendía el utilitarismo?",
    correcta: "El liberalismo de John Stuart Mill y Jeremy Bentham",
    incorrectas: [
      "El socialismo utópico",
      "El conservadurismo"
    ]
  },
  {
    enunciado: "¿Qué asociación internacional obrera se fundó en 1864?",
    correcta: "La Primera Internacional",
    incorrectas: [
      "La Segunda Internacional",
      "La Comuna de París"
    ]
  },
  {
    enunciado: "¿Qué evento de 1848 extendió ideas socialistas y democráticas por Europa?",
    correcta: "Las revoluciones de 1848",
    incorrectas: [
      "La Restauración",
      "La Paz de Westfalia"
    ]
  },
  {
    enunciado: "¿Qué economista fue uno de los fundadores de la escuela marginalista?",
    correcta: "William Stanley Jevons",
    incorrectas: [
      "David Ricardo",
      "Friedrich Engels"
    ]
  },
  {
    enunciado: "¿Qué anarquista ruso defendió el apoyo mutuo como principio social?",
    correcta: "Piotr Kropotkin",
    incorrectas: [
      "Mijaíl Bakunin",
      "Karl Marx"
    ]
  },
  {
    enunciado: "¿Qué pensador liberal analizó los peligros de la tiranía de la mayoría?",
    correcta: "Alexis de Tocqueville",
    incorrectas: [
      "Thomas Malthus",
      "Saint-Simon"
    ]
  },
  {
    enunciado: "¿Qué ideología promovió la cooperación económica y social sin lucha de clases?",
    correcta: "El socialismo utópico",
    incorrectas: [
      "El socialismo científico",
      "El anarquismo"
    ]
  },
  {
    enunciado: "¿Qué corriente política defendía el sufragio censitario en sus inicios?",
    correcta: "El liberalismo doctrinario",
    incorrectas: [
      "El liberalismo democrático",
      "El socialismo"
    ]
  },
  {
    enunciado: "¿Qué escuela económica sucedió a la clásica en la segunda mitad del XIX?",
    correcta: "La escuela marginalista o neoclásica",
    incorrectas: [
      "La escuela fisiocrática",
      "La escuela mercantilista"
    ]
  },
  {
    enunciado: "¿Qué documento fundacional del marxismo se publicó en 1848?",
    correcta: "El Manifiesto Comunista",
    incorrectas: [
      "El Capital",
      "La Ideología Alemana"
    ]
  },
  {
    enunciado: "¿Qué corriente defendía que la libertad individual debía prevalecer sobre la intervención estatal?",
    correcta: "El liberalismo clásico",
    incorrectas: [
      "El socialismo científico",
      "El conservadurismo"
    ]
  },
  {
    enunciado: "¿Qué líder anarquista tuvo enfrentamientos ideológicos con Marx en la Primera Internacional?",
    correcta: "Mijaíl Bakunin",
    incorrectas: [
      "Piotr Kropotkin",
      "Robert Owen"
    ]
  },
  {
    enunciado: "¿Qué economista formuló la teoría del valor-trabajo junto con Ricardo?",
    correcta: "Karl Marx",
    incorrectas: [
      "Adam Smith",
      "Jeremy Bentham"
    ]
  },
  {
    enunciado: "¿Qué ideología buscaba preservar la religión como pilar de la vida política?",
    correcta: "El conservadurismo",
    incorrectas: [
      "El socialismo utópico",
      "El anarquismo"
    ]
  },
  {
    enunciado: "¿Qué corriente económica defendía el proteccionismo frente al libre comercio?",
    correcta: "El nacionalismo económico",
    incorrectas: [
      "La economía clásica liberal",
      "La economía socialista"
    ]
  },
  {
    enunciado: "¿Qué encíclica se considera el inicio de la doctrina social de la Iglesia?",
    correcta: "Rerum Novarum",
    incorrectas: [
      "Pacem in Terris",
      "Centesimus Annus"
    ]
  },
  {
    enunciado: "¿Qué autor es considerado fundador del utilitarismo junto con Mill?",
    correcta: "Jeremy Bentham",
    incorrectas: [
      "David Ricardo",
      "Friedrich List"
    ]
  },
  {
    enunciado: "¿Qué movimiento buscó la unificación política basada en la identidad cultural y lingüística?",
    correcta: "El nacionalismo",
    incorrectas: [
      "El anarquismo",
      "El socialismo"
    ]
  },
  {
    enunciado: "¿Qué ideología propuso la lucha de clases como motor de la historia?",
    correcta: "El marxismo",
    incorrectas: [
      "El liberalismo",
      "El conservadurismo"
    ]
  }
];
