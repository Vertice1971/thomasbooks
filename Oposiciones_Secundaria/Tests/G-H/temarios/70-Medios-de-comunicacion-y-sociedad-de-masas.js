// temarios/70-Medios-de-comunicacion-y-sociedad-de-masas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por sociedad de masas en el ámbito sociológico?",
    correcta: "Una población heterogénea tratada como unidad uniforme en consumos y comportamientos",
    incorrectas: [
      "Un conjunto de élites culturales con capacidad de influencia política",
      "Una comunidad cerrada que conserva tradiciones locales frente a la globalización"
    ]
  },
  {
    enunciado: "¿Qué autor español escribió 'La rebelión de las masas'?",
    correcta: "José Ortega y Gasset",
    incorrectas: [
      "Miguel de Unamuno",
      "Antonio Machado"
    ]
  },
  {
    enunciado: "¿Cuál es una característica esencial de la sociedad de masas según la sociología clásica?",
    correcta: "El anonimato y la estandarización de los comportamientos",
    incorrectas: [
      "La primacía de las comunidades rurales y artesanales",
      "El predominio de la transmisión oral sobre los medios escritos"
    ]
  },
  {
    enunciado: "¿Qué papel jugó la radio en el siglo XX?",
    correcta: "Fue un medio clave de cohesión social y propaganda política",
    incorrectas: [
      "Desplazó completamente a la prensa como fuente única de información",
      "Careció de relevancia en conflictos internacionales"
    ]
  },
  {
    enunciado: "¿Qué fenómeno representó la televisión en la segunda mitad del siglo XX?",
    correcta: "Se convirtió en el principal medio de influencia cultural y política",
    incorrectas: [
      "Fue un medio secundario frente al cine",
      "Quedó restringida a usos científicos y educativos"
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo el debate televisado Kennedy–Nixon de 1960?",
    correcta: "Mostró el impacto de la imagen televisiva en los resultados políticos",
    incorrectas: [
      "Fue la primera vez que se utilizó la radio en política",
      "Introdujo el marketing político exclusivamente en Europa"
    ]
  },
  {
    enunciado: "¿Qué sostiene Marshall McLuhan con su famosa expresión 'el medio es el mensaje'?",
    correcta: "Que el medio condiciona más que el contenido en la comunicación",
    incorrectas: [
      "Que el contenido siempre prevalece sobre el medio",
      "Que los medios son neutros y no influyen en la percepción"
    ]
  },
  {
    enunciado: "¿Qué autor destacó la crisis de la esfera pública en la era mediática?",
    correcta: "Jürgen Habermas",
    incorrectas: [
      "Herbert Marcuse",
      "Jean-Paul Sartre"
    ]
  },
  {
    enunciado: "¿Qué concepto desarrollaron McCombs y Shaw?",
    correcta: "Agenda setting",
    incorrectas: [
      "Hiperrealidad",
      "Prosumidor"
    ]
  },
  {
    enunciado: "¿Qué significa el concepto de framing en comunicación?",
    correcta: "El encuadre o marco interpretativo que orienta la percepción del público",
    incorrectas: [
      "El exceso de información que provoca pasividad",
      "La transmisión oral de rumores y relatos"
    ]
  },
  {
    enunciado: "¿Qué plantea Guy Debord en 'La sociedad del espectáculo'?",
    correcta: "Que la vida social se representa mediante imágenes y consumo mediático",
    incorrectas: [
      "Que la política se basa en el discurso filosófico",
      "Que la cultura de masas desapareció con el cine clásico"
    ]
  },
  {
    enunciado: "¿Qué criticaron Adorno y Horkheimer en la 'Dialéctica de la Ilustración'?",
    correcta: "La industria cultural como forma de dominación y homogeneización",
    incorrectas: [
      "La educación liberal y democrática como exceso de libertad",
      "La filosofía clásica por su apego a la razón"
    ]
  },
  {
    enunciado: "¿Qué estudió Jean Baudrillard en relación a los medios?",
    correcta: "El simulacro y la hiperrealidad",
    incorrectas: [
      "La radio como medio de masas",
      "El mito de la caverna en la modernidad"
    ]
  },
  {
    enunciado: "¿Qué función tienen los conglomerados mediáticos en la sociedad?",
    correcta: "Concentran poder económico y condicionan la pluralidad informativa",
    incorrectas: [
      "Garantizan automáticamente la diversidad cultural",
      "Evitan las presiones comerciales y políticas"
    ]
  },
  {
    enunciado: "¿Qué defiende la teoría de la manufactura del consentimiento de Chomsky y Herman?",
    correcta: "Que los medios actúan como filtros al servicio de intereses económicos y políticos",
    incorrectas: [
      "Que los medios garantizan neutralidad y libertad absoluta",
      "Que el mercado cultural es independiente de la política"
    ]
  },
  {
    enunciado: "¿Qué rol tienen las redes sociales en los movimientos sociales recientes?",
    correcta: "Facilitan la movilización y difusión global de protestas",
    incorrectas: [
      "Impiden la comunicación entre activistas",
      "Sustituyen las acciones colectivas por ocio individual"
    ]
  },
  {
    enunciado: "¿Qué es el concepto de prosumidor según Toffler?",
    correcta: "Un individuo que produce y consume contenidos al mismo tiempo",
    incorrectas: [
      "Un espectador pasivo de la televisión",
      "Un lector tradicional de prensa escrita"
    ]
  },
  {
    enunciado: "¿Qué fenómeno caracteriza la llamada infoxicación?",
    correcta: "La sobrecarga informativa que dificulta la selección crítica de datos",
    incorrectas: [
      "La exclusión total de la información digital",
      "La alfabetización mediática universal"
    ]
  },
  {
    enunciado: "¿Qué institución internacional defiende la libertad de prensa y el pluralismo mediático?",
    correcta: "UNESCO",
    incorrectas: [
      "OTAN",
      "Banco Mundial"
    ]
  },
  {
    enunciado: "¿Qué indica el concepto de posverdad?",
    correcta: "La primacía de las emociones y creencias sobre los hechos objetivos",
    incorrectas: [
      "La desaparición total de la política en los medios",
      "El dominio absoluto de la prensa escrita sobre internet"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la prensa escrita en la historia de la comunicación?",
    correcta: "Fue clave en la alfabetización y la formación de la opinión pública",
    incorrectas: [
      "Surgió solo en el siglo XX con la radio",
      "Quedó siempre restringida a usos científicos"
    ]
  },
  {
    enunciado: "¿Qué impacto tuvieron los 'fireside chats' de Roosevelt?",
    correcta: "Usaron la radio para acercar el poder político a la ciudadanía",
    incorrectas: [
      "Fueron transmisiones de televisión en la Segunda Guerra Mundial",
      "Introdujeron por primera vez el uso de internet en política"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al discurso mediático contemporáneo?",
    correcta: "Su inmediatez, fragmentación y lenguaje audiovisual",
    incorrectas: [
      "La exclusividad de la argumentación escrita",
      "El predominio del debate oral en plazas públicas"
    ]
  },
  {
    enunciado: "¿Qué problema plantean los algoritmos en redes sociales?",
    correcta: "Crean burbujas de filtro que limitan la diversidad informativa",
    incorrectas: [
      "Aseguran que todas las opiniones tengan igual difusión",
      "Eliminan los sesgos en la comunicación"
    ]
  },
  {
    enunciado: "¿Qué medio introdujo el modelo de Hollywood como fábrica de mitos?",
    correcta: "El cine",
    incorrectas: [
      "La prensa local",
      "La televisión por cable"
    ]
  },
  {
    enunciado: "¿Qué riesgo supone la concentración de medios?",
    correcta: "La pérdida de independencia periodística y pluralidad",
    incorrectas: [
      "La expansión ilimitada de la cultura popular",
      "El acceso libre y gratuito a todos los contenidos"
    ]
  },
  {
    enunciado: "¿Qué movimiento social se asocia a la primavera árabe de 2011?",
    correcta: "El uso de redes sociales para coordinar protestas políticas",
    incorrectas: [
      "La censura digital absoluta en Europa",
      "La instauración de la radio como medio principal"
    ]
  },
  {
    enunciado: "¿Qué filósofo relacionó la sociedad moderna con la masa anónima y despersonalizada?",
    correcta: "Gustave Le Bon",
    incorrectas: [
      "Claude Lévi-Strauss",
      "Karl Popper"
    ]
  },
  {
    enunciado: "¿Qué concepto desarrolló Durkheim útil para analizar los medios?",
    correcta: "La cohesión social frente a la anomia",
    incorrectas: [
      "La teoría de la relatividad social",
      "La desaparición de la moral colectiva"
    ]
  },
  {
    enunciado: "¿Qué autor planteó la idea de burocratización y racionalización en la sociedad moderna?",
    correcta: "Max Weber",
    incorrectas: [
      "Émile Zola",
      "Raymond Aron"
    ]
  },
  {
    enunciado: "¿Qué transformaciones tecnológicas marcaron la comunicación a finales del siglo XX?",
    correcta: "Informática, fibra óptica y televisión por cable",
    incorrectas: [
      "Imprenta manual y pergaminos",
      "Solo el telégrafo eléctrico"
    ]
  },
  {
    enunciado: "¿Qué son los simulacros según Baudrillard?",
    correcta: "Representaciones mediáticas que sustituyen a la realidad misma",
    incorrectas: [
      "Copias exactas de la verdad objetiva",
      "Ensayos periodísticos con base científica"
    ]
  },
  {
    enunciado: "¿Qué corriente defendió que la cultura de masas podía tener también valores emancipadores?",
    correcta: "Los estudios culturales británicos (Stuart Hall)",
    incorrectas: [
      "El estructuralismo francés",
      "La escolástica medieval"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la publicidad en la sociedad de masas?",
    correcta: "Influye en la construcción de identidad y consumo cultural",
    incorrectas: [
      "Se limita a informar de descubrimientos científicos",
      "Reemplaza a los partidos políticos en la democracia"
    ]
  },
  {
    enunciado: "¿Qué riesgo democrático señalan los críticos de los medios digitales?",
    correcta: "La difusión de fake news y la polarización política",
    incorrectas: [
      "La eliminación de toda ideología en la comunicación",
      "El regreso exclusivo a la oralidad tradicional"
    ]
  },
  {
    enunciado: "¿Qué fenómeno explica Alvin Toffler en 'La tercera ola'?",
    correcta: "El paso de la sociedad industrial a la sociedad de la información",
    incorrectas: [
      "El retorno de la agricultura como modelo productivo",
      "La desaparición de la comunicación mediática"
    ]
  },
  {
    enunciado: "¿Qué función cumple Reporteros Sin Fronteras?",
    correcta: "Evaluar y denunciar amenazas a la libertad de prensa en el mundo",
    incorrectas: [
      "Organizar festivales de cine europeos",
      "Regular la compraventa de acciones mediáticas"
    ]
  },
  {
    enunciado: "¿Qué es la alfabetización mediática crítica?",
    correcta: "La capacidad de analizar y evaluar de forma consciente los mensajes mediáticos",
    incorrectas: [
      "La lectura exclusiva de periódicos en papel",
      "La aceptación pasiva de contenidos audiovisuales"
    ]
  },
  {
    enunciado: "¿Qué transformación señala Manuel Castells en su obra?",
    correcta: "El paso a la sociedad red con comunicación global interconectada",
    incorrectas: [
      "La desaparición de los medios audiovisuales",
      "El retorno a comunidades cerradas y locales"
    ]
  }
];
