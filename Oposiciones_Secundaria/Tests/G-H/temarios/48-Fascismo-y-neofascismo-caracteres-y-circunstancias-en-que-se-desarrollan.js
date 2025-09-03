// temarios/48-Fascismo-y-neofascismo-caracteres-y-circunstancias-en-que-se-desarrollan.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué factores favorecieron el ascenso del fascismo tras la Primera Guerra Mundial?",
    correcta: "La crisis económica, el miedo al comunismo y el descrédito del parlamentarismo",
    incorrectas: [
      "La expansión colonial europea y el auge de la democracia liberal",
      "El fortalecimiento de los sindicatos socialistas y la estabilidad política"
    ]
  },
  {
    enunciado: "¿Qué ideología rechazaba el fascismo de forma sistemática?",
    correcta: "El liberalismo, el socialismo y la democracia parlamentaria",
    incorrectas: [
      "El nacionalismo, la tradición y el corporativismo",
      "La religión católica y el militarismo"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñaba el líder en el fascismo?",
    correcta: "Era considerado la encarnación de la voluntad nacional",
    incorrectas: [
      "Era un delegado subordinado al parlamento",
      "Tenía un papel simbólico sin poder real"
    ]
  },
  {
    enunciado: "¿Cuál fue el principal grupo paramilitar del fascismo italiano?",
    correcta: "Las camisas negras",
    incorrectas: [
      "Las camisas pardas",
      "Las juventudes hitlerianas"
    ]
  },
  {
    enunciado: "¿Qué elemento diferenciaba al nazismo del fascismo italiano?",
    correcta: "El racismo biológico y el antisemitismo como núcleo ideológico",
    incorrectas: [
      "El culto al líder y el rechazo al parlamentarismo",
      "El uso de propaganda masiva y la organización de masas"
    ]
  },
  {
    enunciado: "¿Qué significaba la política nazi del Lebensraum?",
    correcta: "La expansión territorial alemana para asegurar el espacio vital",
    incorrectas: [
      "El pacto de cooperación con Italia para compartir colonias",
      "La defensa del espacio aéreo como prioridad militar"
    ]
  },
  {
    enunciado: "¿Qué consecuencias tuvo la llegada de Mussolini al poder en 1922?",
    correcta: "El inicio de un régimen dictatorial fascista en Italia",
    incorrectas: [
      "La democratización del sistema político italiano",
      "El fin de la monarquía y la proclamación de la república"
    ]
  },
  {
    enunciado: "¿Qué función tenía la propaganda en los regímenes fascistas?",
    correcta: "Moldear la opinión pública y movilizar a las masas",
    incorrectas: [
      "Garantizar la transparencia parlamentaria",
      "Asegurar el libre debate en los medios"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó la crisis de 1929 en el auge del nazismo?",
    correcta: "Provocó desempleo masivo y favoreció el voto a partidos extremistas",
    incorrectas: [
      "Impulsó la industrialización alemana y el auge de la socialdemocracia",
      "Facilitó la alianza entre liberales y comunistas"
    ]
  },
  {
    enunciado: "¿Qué fue la Marcha sobre Roma?",
    correcta: "La movilización fascista que permitió a Mussolini acceder al poder",
    incorrectas: [
      "La ofensiva militar alemana contra Italia en 1935",
      "La manifestación comunista contra el régimen de Hitler"
    ]
  },
  {
    enunciado: "¿Qué institución apoyó parcialmente al fascismo italiano en sus inicios?",
    correcta: "La Iglesia católica",
    incorrectas: [
      "La Sociedad de Naciones",
      "El Partido Comunista Italiano"
    ]
  },
  {
    enunciado: "¿Cuál era la visión del fascismo sobre la lucha de clases?",
    correcta: "Debía ser superada mediante el corporativismo",
    incorrectas: [
      "Debía intensificarse para lograr la revolución proletaria",
      "Carecía de importancia en la organización social"
    ]
  },
  {
    enunciado: "¿Qué característica comparten el fascismo y el nazismo?",
    correcta: "El rechazo al liberalismo y la democracia parlamentaria",
    incorrectas: [
      "El pacifismo internacionalista",
      "La defensa del comunismo soviético"
    ]
  },
  {
    enunciado: "¿Qué organización nazi fue responsable de la represión y el control ideológico?",
    correcta: "La Gestapo y las SS",
    incorrectas: [
      "La SA y la Falange",
      "El ejército regular y los sindicatos"
    ]
  },
  {
    enunciado: "¿Qué evento simboliza el inicio de la dictadura nazi?",
    correcta: "El incendio del Reichstag y la aprobación de leyes de excepción en 1933",
    incorrectas: [
      "La firma del Tratado de Versalles en 1919",
      "El Anschluss con Austria en 1938"
    ]
  },
  {
    enunciado: "¿Qué relación establecen algunos historiadores entre fascismo y modernidad?",
    correcta: "Fue una forma de modernización autoritaria y totalitaria",
    incorrectas: [
      "Una reacción medieval que rechazaba toda forma de modernidad",
      "Una continuidad del liberalismo democrático"
    ]
  },
  {
    enunciado: "¿Qué corriente interpretó el fascismo como 'dictadura terrorista del capital financiero'?",
    correcta: "La historiografía marxista",
    incorrectas: [
      "La historiografía funcionalista",
      "La historia cultural"
    ]
  },
  {
    enunciado: "¿Qué fue el Holocausto en el contexto del nazismo?",
    correcta: "El exterminio sistemático de judíos y otras minorías",
    incorrectas: [
      "La destrucción de las ciudades alemanas durante la guerra",
      "La represión de la oposición comunista en Italia"
    ]
  },
  {
    enunciado: "¿Qué partidos neofascistas surgieron en la posguerra europea?",
    correcta: "El MSI en Italia y Ordre Nouveau en Francia",
    incorrectas: [
      "El SPD en Alemania y el Partido Radical en Francia",
      "El Partido Laborista en Reino Unido y la Falange Española"
    ]
  },
  {
    enunciado: "¿Qué concepto introduce Enzo Traverso para definir los movimientos ultraderechistas actuales?",
    correcta: "Posfascismo",
    incorrectas: [
      "Neoliberalismo autoritario",
      "Democracia radical"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron las élites económicas en el ascenso del fascismo?",
    correcta: "Apoyaron a Mussolini y Hitler como dique frente al comunismo",
    incorrectas: [
      "Se opusieron al fascismo desde el principio",
      "Apoyaron únicamente a los partidos socialistas"
    ]
  },
  {
    enunciado: "¿Qué libro constituye la base ideológica del nazismo?",
    correcta: "Mein Kampf",
    incorrectas: [
      "La doctrina del fascismo",
      "El manifiesto comunista"
    ]
  },
  {
    enunciado: "¿Qué autor estudió la dimensión estética y simbólica del fascismo?",
    correcta: "George Mosse",
    incorrectas: [
      "Raul Hilberg",
      "Cas Mudde"
    ]
  },
  {
    enunciado: "¿Qué práctica utilizó el fascismo para movilizar a la población?",
    correcta: "La organización de masas mediante rituales, himnos y uniformes",
    incorrectas: [
      "El sufragio universal directo",
      "El debate libre en los parlamentos"
    ]
  },
  {
    enunciado: "¿Qué institución creó Hitler para consolidar su poder personal?",
    correcta: "El Führerprinzip o principio de liderazgo",
    incorrectas: [
      "El parlamentarismo federal",
      "La monarquía constitucional"
    ]
  },
  {
    enunciado: "¿Qué diferencia hubo entre la política exterior de Mussolini y Hitler?",
    correcta: "Hitler buscaba expansión en Europa oriental, Mussolini en el Mediterráneo y África",
    incorrectas: [
      "Ambos defendían la neutralidad internacional",
      "Mussolini rechazaba la guerra como método de expansión"
    ]
  },
  {
    enunciado: "¿Qué enfoque sostiene Stanley Payne en sus estudios?",
    correcta: "La construcción de un modelo comparativo de fascismo genérico",
    incorrectas: [
      "El análisis exclusivo del nazismo alemán",
      "La defensa del marxismo como única explicación del fascismo"
    ]
  },
  {
    enunciado: "¿Qué política social impulsaron los nazis para movilizar a la juventud?",
    correcta: "La creación de las Juventudes Hitlerianas",
    incorrectas: [
      "La organización sindical independiente",
      "La formación de partidos juveniles democráticos"
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental existe entre fascismo y neofascismo?",
    correcta: "El neofascismo se adapta al contexto democrático con discursos populistas",
    incorrectas: [
      "El neofascismo defiende el comunismo como vía revolucionaria",
      "El fascismo carecía de culto al líder"
    ]
  },
  {
    enunciado: "¿Qué concepto usó Emilio Gentile para describir el fascismo?",
    correcta: "La sacralización de la política",
    incorrectas: [
      "La modernización liberal",
      "La política del consenso"
    ]
  },
  {
    enunciado: "¿Qué importancia tuvo la guerra en la ideología fascista?",
    correcta: "Era considerada un medio regenerador y necesario para la nación",
    incorrectas: [
      "Debía evitarse a toda costa",
      "Solo era útil en defensa de la democracia"
    ]
  },
  {
    enunciado: "¿Qué minorías fueron perseguidas por el nazismo además de los judíos?",
    correcta: "Gitanos, discapacitados y opositores políticos",
    incorrectas: [
      "Únicamente los campesinos y artesanos",
      "Los militares alemanes veteranos"
    ]
  },
  {
    enunciado: "¿Qué historiador interpretó el fascismo como reacción frente al marxismo?",
    correcta: "Ernst Nolte",
    incorrectas: [
      "Zeev Sternhell",
      "Raul Hilberg"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron las crisis económicas en el auge del fascismo?",
    correcta: "Favorecieron la radicalización social y el apoyo a soluciones autoritarias",
    incorrectas: [
      "Fortalecieron la confianza en la democracia liberal",
      "Impulsaron la cooperación entre socialistas y comunistas"
    ]
  },
  {
    enunciado: "¿Qué régimen europeo se considera el modelo clásico de fascismo?",
    correcta: "La Italia de Mussolini",
    incorrectas: [
      "La España de la Restauración",
      "La Rusia zarista"
    ]
  },
  {
    enunciado: "¿Qué política exterior caracterizó al nazismo?",
    correcta: "La agresión expansionista que condujo a la Segunda Guerra Mundial",
    incorrectas: [
      "La neutralidad y el pacifismo internacional",
      "La cooperación exclusiva con la Sociedad de Naciones"
    ]
  },
  {
    enunciado: "¿Qué autor analizó el antisemitismo nazi en 'La destrucción de los judíos europeos'?",
    correcta: "Raul Hilberg",
    incorrectas: [
      "George Mosse",
      "Stanley Payne"
    ]
  },
  {
    enunciado: "¿Qué partidos o movimientos actuales han sido calificados de neofascistas o posfascistas?",
    correcta: "Algunos partidos ultranacionalistas y xenófobos en Europa",
    incorrectas: [
      "Las formaciones ecologistas y feministas",
      "Los partidos socialdemócratas europeos"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la memoria histórica en el estudio del fascismo?",
    correcta: "Permite comprender los riesgos de la deriva autoritaria en la actualidad",
    incorrectas: [
      "Evita analizar críticamente el pasado",
      "Sustituye el trabajo de los historiadores por relatos míticos"
    ]
  }
];
