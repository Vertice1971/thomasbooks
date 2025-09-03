// temarios/35-El-pensamiento-politico-moderno-del-humanismo-a-la-ilustracion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo define al humanismo renacentista en política?",
    correcta: "El antropocentrismo y la confianza en la razón para orientar el buen gobierno",
    incorrectas: [
      "La subordinación absoluta de la política a la teología escolástica",
      "La negación del valor educativo de la historia clásica"
    ]
  },
  {
    enunciado: "¿Qué obra de Tomás Moro presenta una comunidad regida por la razón y la justicia?",
    correcta: "Utopía",
    incorrectas: [
      "El Príncipe",
      "Leviatán"
    ]
  },
  {
    enunciado: "¿Qué autor defendió la reforma moral de gobernantes y súbditos mediante la educación y la concordia?",
    correcta: "Erasmo de Róterdam",
    incorrectas: [
      "Jean Bodin",
      "Denis Diderot"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el realismo político de Maquiavelo?",
    correcta: "La distinción entre moral privada y razón de Estado para mantener la seguridad",
    incorrectas: [
      "La identificación estricta entre virtud cristiana y eficacia política",
      "La defensa del derecho divino de los reyes"
    ]
  },
  {
    enunciado: "¿Cuál es la tesis central de 'El Príncipe' de Maquiavelo?",
    correcta: "El gobernante debe conservar el poder asegurando el orden mediante medios eficaces",
    incorrectas: [
      "El rey gobierna por mandato divino inapelable",
      "La república solo es posible con igualdad absoluta de bienes"
    ]
  },
  {
    enunciado: "¿Qué concepto formula Jean Bodin para explicar el poder supremo del Estado?",
    correcta: "Soberanía",
    incorrectas: [
      "Separación de poderes",
      "Voluntad general"
    ]
  },
  {
    enunciado: "¿Qué consecuencia política tuvo la Reforma protestante en Europa?",
    correcta: "La consolidación de monarquías confesionales y nuevos debates sobre autoridad civil",
    incorrectas: [
      "La abolición inmediata de todas las monarquías europeas",
      "La unificación religiosa de Occidente bajo Roma"
    ]
  },
  {
    enunciado: "¿Qué defendió Lutero respecto al poder secular?",
    correcta: "Que la autoridad civil debe mantener el orden en asuntos temporales",
    incorrectas: [
      "Que los príncipes no tienen ninguna legitimidad ante Dios",
      "Que la Iglesia debe gobernar directamente los reinos"
    ]
  },
  {
    enunciado: "¿Qué rasgo político se asocia a la Ginebra calvinista?",
    correcta: "Disciplina comunitaria y autogobierno regulado por normas estrictas",
    incorrectas: [
      "Absolutismo de derecho divino",
      "Anarquía teocrática sin leyes escritas"
    ]
  },
  {
    enunciado: "¿Qué autor fundamentó teóricamente el derecho divino de los reyes en la Francia del XVII?",
    correcta: "Jacques-Bénigne Bossuet",
    incorrectas: [
      "Montesquieu",
      "Adam Smith"
    ]
  },
  {
    enunciado: "¿Qué estado describe Hobbes como condición previa a la sociedad civil?",
    correcta: "Un estado de naturaleza de inseguridad y conflicto",
    incorrectas: [
      "Una comunidad armoniosa sin necesidad de leyes",
      "Una república cristiana perfecta"
    ]
  },
  {
    enunciado: "Según Hobbes, ¿qué legitima al soberano?",
    correcta: "El pacto por el que los individuos transfieren su poder para garantizar la paz",
    incorrectas: [
      "La tradición nobiliaria hereditaria",
      "La inspiración profética personal del gobernante"
    ]
  },
  {
    enunciado: "¿Qué autor de la Escuela de Salamanca limitó teóricamente el poder imperial reconociendo derechos a todos los pueblos?",
    correcta: "Francisco de Vitoria",
    incorrectas: [
      "Jean-Jacques Rousseau",
      "Thomas Paine"
    ]
  },
  {
    enunciado: "¿Qué aportó Hugo Grocio al pensamiento político-jurídico?",
    correcta: "Una formulación laica del derecho de gentes basada en la razón natural",
    incorrectas: [
      "La abolición de todo derecho natural",
      "La identificación del derecho con la voluntad exclusiva del monarca"
    ]
  },
  {
    enunciado: "¿Qué derechos naturales defiende Locke como fundamento del gobierno?",
    correcta: "Vida, libertad y propiedad",
    incorrectas: [
      "Honor, linaje y obediencia",
      "Igualdad económica obligatoria"
    ]
  },
  {
    enunciado: "Para Locke, ¿qué justifica el derecho de resistencia?",
    correcta: "La violación sistemática de los derechos naturales por parte del gobierno",
    incorrectas: [
      "La mera discrepancia con un impuesto legítimo",
      "El cambio de dinastía tras una sucesión legal"
    ]
  },
  {
    enunciado: "¿Qué modelo institucional propone Montesquieu para evitar la tiranía?",
    correcta: "La separación y equilibrio de poderes",
    incorrectas: [
      "La concentración del poder en el ejecutivo",
      "La soberanía absoluta del poder judicial"
    ]
  },
  {
    enunciado: "¿Qué estudia Montesquieu en 'El espíritu de las leyes'?",
    correcta: "La relación entre leyes, costumbres y formas de gobierno",
    incorrectas: [
      "Un código penal universal aplicable de inmediato",
      "Un tratado teológico sobre la gracia"
    ]
  },
  {
    enunciado: "¿Qué elemento es central en el contrato social de Rousseau?",
    correcta: "La voluntad general como expresión de la soberanía popular",
    incorrectas: [
      "El derecho divino del monarca",
      "La representación corporativa del estamento nobiliario"
    ]
  },
  {
    enunciado: "¿Qué tensión reconoce Rousseau en su teoría política?",
    correcta: "Entre libertad individual y autoridad colectiva",
    incorrectas: [
      "Entre fe y razón como esferas inseparables",
      "Entre monarquía absoluta y derecho divino"
    ]
  },
  {
    enunciado: "¿Qué objetivo principal persigue la Ilustración en política?",
    correcta: "Secularizar el poder y someterlo a la razón y a la crítica pública",
    incorrectas: [
      "Restaurar el régimen señorial",
      "Sustituir las leyes por costumbres locales inmutables"
    ]
  },
  {
    enunciado: "¿Qué proyecto editorial fue vehículo de difusión ilustrada en Francia?",
    correcta: "La Enciclopedia de Diderot y d’Alembert",
    incorrectas: [
      "El Index librorum prohibitorum",
      "El Leviatán ilustrado"
    ]
  },
  {
    enunciado: "¿Qué defendió Voltaire en el ámbito político-religioso?",
    correcta: "La tolerancia y la libertad de conciencia frente al fanatismo",
    incorrectas: [
      "La persecución de minorías religiosas",
      "El retorno a la teocracia medieval"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el pensamiento ilustrado con las revoluciones atlánticas?",
    correcta: "Proporcionó lenguajes de derechos y representación que inspiraron sus constituciones",
    incorrectas: [
      "Se opuso a toda forma de constitución escrita",
      "Defendió la supremacía irrevocable de la nobleza"
    ]
  },
  {
    enunciado: "¿Qué entiende Locke por consentimiento de los gobernados?",
    correcta: "El fundamento de la legitimidad del poder político",
    incorrectas: [
      "Un mero formalismo sin consecuencias",
      "La obediencia ciega al monarca"
    ]
  },
  {
    enunciado: "¿Qué noción limita la soberanía en la tradición del derecho natural moderno?",
    correcta: "La existencia de derechos inalienables anteriores al Estado",
    incorrectas: [
      "La costumbre de la corte",
      "El mandato de las corporaciones gremiales"
    ]
  },
  {
    enunciado: "¿Qué crítica formula la Ilustración al Antiguo Régimen?",
    correcta: "La arbitrariedad del poder y los privilegios estamentales",
    incorrectas: [
      "El exceso de igualdad jurídica",
      "La desaparición de la religión"
    ]
  },
  {
    enunciado: "¿Qué papel atribuye Maquiavelo a la virtud (virtù) del gobernante?",
    correcta: "Capacidad de iniciativa y decisión para enfrentar la fortuna y mantener el orden",
    incorrectas: [
      "Sumisión pasiva a la providencia",
      "Identificación con la caridad privada"
    ]
  },
  {
    enunciado: "¿Qué distingue el contrato social de Hobbes del de Rousseau?",
    correcta: "Hobbes cede poder a un soberano indiviso; Rousseau lo atribuye al pueblo como soberano",
    incorrectas: [
      "Ambos eliminan toda forma de soberanía",
      "Ambos identifican soberanía con la Iglesia"
    ]
  },
  {
    enunciado: "¿Qué significa la 'división de poderes' en sentido moderno?",
    correcta: "Distribuir funciones estatales para impedir la concentración y el abuso",
    incorrectas: [
      "Repartir títulos nobiliarios entre magistrados",
      "Organizar el Estado por gremios profesionales"
    ]
  },
  {
    enunciado: "¿Qué autor asoció libertad civil con seguridad de la propiedad y leyes imparciales?",
    correcta: "John Locke",
    incorrectas: [
      "Jean Bodin",
      "Jean-Jacques Rousseau"
    ]
  },
  {
    enunciado: "¿Qué recurso político promueve Voltaire para mejorar las instituciones?",
    correcta: "La opinión pública informada y la crítica racional",
    incorrectas: [
      "El secreto perpetuo de las decisiones",
      "La obediencia sin deliberación"
    ]
  },
  {
    enunciado: "¿Qué noción de soberanía propone Bodin respecto a su divisibilidad?",
    correcta: "La soberanía es indivisible y perpetua en el Estado",
    incorrectas: [
      "La soberanía debe dividirse en todos los estamentos",
      "La soberanía pertenece exclusivamente a los jueces"
    ]
  },
  {
    enunciado: "¿Qué idea económica se vincula a la Ilustración y al liberalismo clásico?",
    correcta: "Confianza en el mercado y limitación de trabas al comercio",
    incorrectas: [
      "Restauración de monopolios gremiales",
      "Prohibición general del intercambio internacional"
    ]
  },
  {
    enunciado: "¿Qué defendía la Ilustración sobre la ley?",
    correcta: "Que debe ser general, pública y fruto de la razón",
    incorrectas: [
      "Que debe emanar del privilegio estamental",
      "Que debe quedar reservada al secreto del soberano"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene el pacto político para Hobbes?",
    correcta: "Salir del estado de guerra y asegurar la vida mediante un poder común",
    incorrectas: [
      "Repartir la soberanía entre clero y nobleza",
      "Garantizar la supremacía de un estamento"
    ]
  },
  {
    enunciado: "¿Qué concepto rousseauniano fundamenta la igualdad política?",
    correcta: "La participación de todos en la voluntad general",
    incorrectas: [
      "La superioridad natural de los más ricos",
      "La gracia hereditaria de los príncipes"
    ]
  },
  {
    enunciado: "¿Qué innovación metodológica aporta Maquiavelo al pensamiento político?",
    correcta: "Análisis empírico-histórico de casos para derivar reglas de acción",
    incorrectas: [
      "Deducción teológica a partir de dogmas",
      "Sumisión de la política a la astrología"
    ]
  },
  {
    enunciado: "¿Qué principio ilustrado impulsa la libertad religiosa?",
    correcta: "La tolerancia como condición de la paz civil",
    incorrectas: [
      "La uniformidad confesional obligatoria",
      "La censura previa universal de conciencias"
    ]
  }
];
