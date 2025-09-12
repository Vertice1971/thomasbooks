// temarios/53-La-dictadura-franquista-regimen-politico-evolucion-social-y-economica.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué tipo de régimen político fue el franquismo?",
    correcta: "Una dictadura autoritaria y personalista",
    incorrectas: [
      "Una monarquía parlamentaria de corte liberal",
      "Un sistema democrático con sufragio universal"
    ]
  },
  {
    enunciado: "¿En qué año comenzó oficialmente la dictadura franquista?",
    correcta: "1939, tras el fin de la Guerra Civil",
    incorrectas: [
      "1936, tras el estallido del golpe militar",
      "1945, tras el final de la Segunda Guerra Mundial"
    ]
  },
  {
    enunciado: "¿Qué institución sustituyó a los partidos políticos en el franquismo?",
    correcta: "El Movimiento Nacional (FET y de las JONS)",
    incorrectas: [
      "El Consejo de Ministros elegido por sufragio",
      "La Confederación Nacional del Trabajo"
    ]
  },
  {
    enunciado: "¿Cuál fue el lema ideológico central del régimen franquista?",
    correcta: "Victoria, Patria y Dios",
    incorrectas: [
      "Libertad, Igualdad y Fraternidad",
      "Pan y Trabajo"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó la Iglesia católica en el franquismo?",
    correcta: "Fue un pilar de legitimación ideológica y control educativo",
    incorrectas: [
      "Se opuso de forma sistemática al régimen",
      "Tuvo un papel marginal y secundario en la política"
    ]
  },
  {
    enunciado: "¿Qué eran las Leyes Fundamentales del Reino?",
    correcta: "Un conjunto de normas que simulaban una constitución sin garantías democráticas",
    incorrectas: [
      "Un código civil inspirado en la Revolución Francesa",
      "Unas leyes autonómicas de autogobierno regional"
    ]
  },
  {
    enunciado: "¿Qué caracterizó la etapa de autarquía económica (1939-1959)?",
    correcta: "Aislamiento internacional, intervención estatal y pobreza generalizada",
    incorrectas: [
      "Gran apertura comercial con Europa y América",
      "Expansión industrial y turística sin limitaciones"
    ]
  },
  {
    enunciado: "¿Qué medida supuso un giro en la política económica en 1959?",
    correcta: "El Plan de Estabilización",
    incorrectas: [
      "La entrada en la CEE",
      "La nacionalización de la banca"
    ]
  },
  {
    enunciado: "¿Qué grupo social impulsó los cambios económicos desde 1957?",
    correcta: "Los tecnócratas del Opus Dei",
    incorrectas: [
      "Los falangistas radicales",
      "Los sindicatos obreros"
    ]
  },
  {
    enunciado: "¿Qué sectores experimentaron un gran desarrollo en los años 60?",
    correcta: "Industria, turismo y emigración al extranjero",
    incorrectas: [
      "Agricultura de subsistencia y minería tradicional",
      "Comercio colonial en África y América"
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo la crisis del petróleo de 1973 en España?",
    correcta: "Provocó inflación, paro y el agotamiento del modelo franquista",
    incorrectas: [
      "Favoreció el crecimiento económico y la inversión extranjera",
      "Supuso el final inmediato del régimen en 1973"
    ]
  },
  {
    enunciado: "¿Qué organismo represivo creó el franquismo para juzgar delitos políticos?",
    correcta: "El Tribunal de Orden Público",
    incorrectas: [
      "El Tribunal Constitucional",
      "El Consejo General del Poder Judicial"
    ]
  },
  {
    enunciado: "¿Qué movimiento sindical clandestino se desarrolló en los años 60?",
    correcta: "Comisiones Obreras (CCOO)",
    incorrectas: [
      "La Falange Obrera Española",
      "Unión General de Estudiantes"
    ]
  },
  {
    enunciado: "¿Qué sucedió con la educación durante el franquismo?",
    correcta: "Fue controlada por el Estado y la Iglesia con fuerte adoctrinamiento",
    incorrectas: [
      "Se garantizó una enseñanza laica y plural",
      "Se eliminó la influencia religiosa en las escuelas"
    ]
  },
  {
    enunciado: "¿Qué permitió la Ley de Prensa de 1966?",
    correcta: "Una apertura parcial y limitada de la libertad de expresión",
    incorrectas: [
      "La supresión total de la censura",
      "La independencia de los medios frente al Estado"
    ]
  },
  {
    enunciado: "¿Qué fue el Concordato de 1953?",
    correcta: "Un acuerdo entre España y la Santa Sede que consolidó el nacionalcatolicismo",
    incorrectas: [
      "Un tratado de libre comercio con Estados Unidos",
      "Un pacto militar con la OTAN"
    ]
  },
  {
    enunciado: "¿Cuál fue la principal fuente de ingresos del turismo en los años 60?",
    correcta: "El turismo de sol y playa en el litoral mediterráneo y las islas",
    incorrectas: [
      "El turismo cultural en museos y universidades",
      "El turismo religioso vinculado a peregrinaciones"
    ]
  },
  {
    enunciado: "¿Qué sectores sociales crecieron durante los años de desarrollo económico?",
    correcta: "Las clases medias urbanas",
    incorrectas: [
      "La nobleza terrateniente tradicional",
      "Los colonos agrícolas en África"
    ]
  },
  {
    enunciado: "¿Qué movimiento armado surgió en el País Vasco en 1959?",
    correcta: "ETA (Euskadi Ta Askatasuna)",
    incorrectas: [
      "FRAP (Frente Revolucionario Antifascista y Patriota)",
      "GRAPO (Grupos de Resistencia Antifascista Primero de Octubre)"
    ]
  },
  {
    enunciado: "¿Qué papel tuvo la censura en la vida cultural del franquismo?",
    correcta: "Controló libros, prensa, cine y radio, limitando la libertad creativa",
    incorrectas: [
      "Solo se aplicaba a temas económicos",
      "Se levantó totalmente tras 1945"
    ]
  },
  {
    enunciado: "¿Qué fenómeno demográfico marcó los años 50 y 60?",
    correcta: "El éxodo rural hacia las ciudades industriales",
    incorrectas: [
      "El retorno masivo de emigrantes desde Europa",
      "La despoblación de las grandes urbes"
    ]
  },
  {
    enunciado: "¿Qué institución militar siguió siendo clave en el régimen franquista?",
    correcta: "El Ejército, garante último del régimen",
    incorrectas: [
      "Las milicias obreras",
      "La Guardia Nacional Republicana"
    ]
  },
  {
    enunciado: "¿Qué ocurrió tras la derrota del Eje en 1945?",
    correcta: "España quedó aislada internacionalmente y fuera de la ONU",
    incorrectas: [
      "España ingresó en la OTAN de inmediato",
      "España se unió al Plan Marshall"
    ]
  },
  {
    enunciado: "¿Qué relación estableció Franco con Estados Unidos en 1953?",
    correcta: "Firmó los Pactos de Madrid con ayuda militar y económica",
    incorrectas: [
      "Unió a España al Plan Marshall",
      "Creó la Comunidad Económica Europea"
    ]
  },
  {
    enunciado: "¿Qué ley definió a España como Reino en 1947?",
    correcta: "La Ley de Sucesión en la Jefatura del Estado",
    incorrectas: [
      "La Ley Orgánica del Estado",
      "El Fuero de los Españoles"
    ]
  },
  {
    enunciado: "¿Quién fue nombrado sucesor de Franco en 1969?",
    correcta: "Juan Carlos de Borbón",
    incorrectas: [
      "Don Alfonso de Borbón",
      "Adolfo Suárez"
    ]
  },
  {
    enunciado: "¿Qué oposición cultural se articuló en universidades desde los años 60?",
    correcta: "Movimientos estudiantiles y asociaciones críticas con el régimen",
    incorrectas: [
      "Centros oficiales de debate promovidos por la Falange",
      "Escuelas laicas organizadas por el Estado"
    ]
  },
  {
    enunciado: "¿Qué fue el Fuero del Trabajo de 1938?",
    correcta: "Una ley que regulaba relaciones laborales bajo el modelo corporativista",
    incorrectas: [
      "Un código liberal inspirado en la Constitución de 1931",
      "Una norma que implantaba sindicatos libres"
    ]
  },
  {
    enunciado: "¿Qué papel jugó la propaganda franquista?",
    correcta: "Exaltó la figura del Caudillo y difundió el nacionalcatolicismo",
    incorrectas: [
      "Difundió ideas democráticas y pluralistas",
      "Fomentó la libertad de prensa y opinión"
    ]
  },
  {
    enunciado: "¿Qué medida educativa reflejó el control ideológico del régimen?",
    correcta: "La enseñanza obligatoria de la religión católica",
    incorrectas: [
      "La supresión de toda religión en la escuela",
      "La implantación del bilingüismo en todas las regiones"
    ]
  },
  {
    enunciado: "¿Qué sectores protagonizaron las protestas de los años 60-70?",
    correcta: "Obreros industriales, estudiantes y movimientos vecinales",
    incorrectas: [
      "La nobleza y el alto clero",
      "Los terratenientes y empresarios turísticos"
    ]
  },
  {
    enunciado: "¿Qué ley de 1967 redefinió la organización política del régimen?",
    correcta: "La Ley Orgánica del Estado",
    incorrectas: [
      "La Ley de Reforma Política",
      "El Estatuto de Autonomía de Cataluña"
    ]
  },
  {
    enunciado: "¿Qué grupo político no formó parte de los apoyos del franquismo?",
    correcta: "Los partidos republicanos de izquierda",
    incorrectas: [
      "La Iglesia católica",
      "Los monárquicos tradicionalistas"
    ]
  },
  {
    enunciado: "¿Qué fenómeno cultural penetró en España gracias al turismo?",
    correcta: "Nuevas corrientes musicales, cine y prensa internacionales",
    incorrectas: [
      "La vuelta de la Inquisición",
      "El cierre de las universidades"
    ]
  },
  {
    enunciado: "¿Qué fue el FRAP?",
    correcta: "Un grupo de oposición armada antifranquista en los años 70",
    incorrectas: [
      "Un sindicato oficial del Movimiento",
      "Una asociación católica de estudiantes"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron las mujeres en la sociedad franquista?",
    correcta: "Sometidas al modelo tradicional de familia y hogar, aunque luego accedieron al trabajo",
    incorrectas: [
      "Obtuvieron igualdad plena desde 1940",
      "Dirigieron en exclusiva el aparato político"
    ]
  },
  {
    enunciado: "¿Cuándo terminó oficialmente la dictadura franquista?",
    correcta: "En 1975, con la muerte de Franco",
    incorrectas: [
      "En 1973, tras el asesinato de Carrero Blanco",
      "En 1978, con la aprobación de la Constitución"
    ]
  },
  {
    enunciado: "¿Qué historiador ha estudiado en profundidad la figura de Franco como dictador?",
    correcta: "Paul Preston",
    incorrectas: [
      "Pierre Vilar",
      "Eric Hobsbawm"
    ]
  }
];
