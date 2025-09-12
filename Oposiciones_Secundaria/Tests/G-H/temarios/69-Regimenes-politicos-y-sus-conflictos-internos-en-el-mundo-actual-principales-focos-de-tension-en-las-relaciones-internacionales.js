// temarios/69-Regimenes-politicos-y-sus-conflictos-internos-en-el-mundo-actual-principales-focos-de-tension-en-las-relaciones-internacionales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza a los regímenes democráticos en el mundo actual?",
    correcta: "La soberanía popular, la división de poderes, elecciones libres y el respeto a los derechos humanos",
    incorrectas: [
      "El control absoluto del Estado sobre todos los aspectos de la vida social",
      "La prohibición de partidos políticos y ausencia de participación ciudadana"
    ]
  },
  {
    enunciado: "¿Qué rasgo fundamental define a un régimen autoritario?",
    correcta: "La concentración del poder en un líder o élite con limitación de libertades políticas",
    incorrectas: [
      "La alternancia pacífica en el poder mediante elecciones libres",
      "La total descentralización política y económica en los municipios"
    ]
  },
  {
    enunciado: "¿Qué elemento es propio de los regímenes totalitarios?",
    correcta: "El control absoluto del gobierno sobre política, economía y sociedad, acompañado de propaganda y represión",
    incorrectas: [
      "La limitación del poder ejecutivo mediante contrapesos parlamentarios",
      "La protección de libertades individuales frente al Estado"
    ]
  },
  {
    enunciado: "¿Qué son los regímenes híbridos?",
    correcta: "Sistemas que combinan instituciones democráticas con prácticas autoritarias como elecciones manipuladas",
    incorrectas: [
      "Una democracia plena con todas las garantías constitucionales",
      "Un régimen totalitario sin libertades ni pluralismo"
    ]
  },
  {
    enunciado: "¿Qué se entiende por conflicto interno en un Estado?",
    correcta: "Guerras civiles, enfrentamientos étnicos o religiosos, crisis políticas y protestas sociales",
    incorrectas: [
      "Únicamente la confrontación militar entre dos países",
      "Exclusivamente los debates parlamentarios en democracia"
    ]
  },
  {
    enunciado: "¿Qué define a un Estado fallido?",
    correcta: "La incapacidad de ejercer control efectivo sobre el territorio y de garantizar seguridad e instituciones básicas",
    incorrectas: [
      "La descentralización de competencias hacia regiones autónomas",
      "La firma de tratados de libre comercio con otros países"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes países se considera un ejemplo de Estado fallido en el siglo XXI?",
    correcta: "Sudán del Sur",
    incorrectas: [
      "Suiza",
      "Canadá"
    ]
  },
  {
    enunciado: "¿Qué consecuencias generan los Estados fallidos?",
    correcta: "Migraciones forzadas, expansión del terrorismo y crimen organizado",
    incorrectas: [
      "Crecimiento económico sostenido y atracción de inversión extranjera",
      "Reducción de desigualdad social y fortalecimiento democrático"
    ]
  },
  {
    enunciado: "¿Qué conflicto se mantiene históricamente en Oriente Medio?",
    correcta: "El enfrentamiento entre Israel y Palestina",
    incorrectas: [
      "La disputa fronteriza entre Canadá y Estados Unidos",
      "El conflicto limítrofe entre Portugal y España"
    ]
  },
  {
    enunciado: "¿Qué conflicto se produjo en los Balcanes en los años 90?",
    correcta: "Las guerras derivadas de la desintegración de Yugoslavia",
    incorrectas: [
      "La independencia pacífica de Noruega",
      "El referéndum constitucional en Francia"
    ]
  },
  {
    enunciado: "¿Qué región ha sido foco de tensión por la intervención rusa y la anexión de territorios?",
    correcta: "Ucrania, especialmente desde 2014",
    incorrectas: [
      "Suecia desde la posguerra",
      "Argentina tras la crisis de 2001"
    ]
  },
  {
    enunciado: "¿Qué se entiende por Primavera Árabe?",
    correcta: "Una ola de protestas populares iniciadas en 2010 en países árabes contra regímenes autoritarios",
    incorrectas: [
      "Un tratado económico firmado entre países europeos",
      "Un programa de ayuda agrícola en Oriente Medio"
    ]
  },
  {
    enunciado: "¿Qué organizaciones son ejemplos de terrorismo internacional en el siglo XXI?",
    correcta: "Al Qaeda y el Estado Islámico (ISIS)",
    incorrectas: [
      "La ONU y la OTAN",
      "La OPEP y la UE"
    ]
  },
  {
    enunciado: "¿Qué problema internacional se vincula con el narcotráfico en Latinoamérica?",
    correcta: "La violencia organizada y la inestabilidad política",
    incorrectas: [
      "El aumento del gasto público en educación",
      "La integración regional en Mercosur"
    ]
  },
  {
    enunciado: "¿Qué tipo de intervenciones llevan a cabo las Naciones Unidas en zonas de conflicto?",
    correcta: "Operaciones de mantenimiento de la paz y mediación diplomática",
    incorrectas: [
      "La imposición de regímenes autoritarios en países democráticos",
      "La administración directa de todas las economías en desarrollo"
    ]
  },
  {
    enunciado: "¿Qué caracterizó el sistema internacional tras el fin del bipolarismo en 1991?",
    correcta: "La emergencia de un mundo multipolar con nuevos actores regionales",
    incorrectas: [
      "La restauración inmediata del Imperio austrohúngaro",
      "El aislamiento absoluto de todos los Estados nacionales"
    ]
  },
  {
    enunciado: "¿Qué teoría explica los conflictos como resultado de la competencia por poder y seguridad?",
    correcta: "El realismo en relaciones internacionales",
    incorrectas: [
      "El liberalismo basado en cooperación institucional",
      "El constructivismo centrado en identidades y discursos"
    ]
  },
  {
    enunciado: "¿Qué planteó Samuel Huntington en su obra 'El choque de civilizaciones'?",
    correcta: "Que los conflictos del futuro se explicarían por diferencias culturales y religiosas",
    incorrectas: [
      "Que la humanidad avanzaba hacia una paz perpetua sin conflictos",
      "Que solo los factores económicos generan tensiones internacionales"
    ]
  },
  {
    enunciado: "¿Qué teoría sostiene que las organizaciones internacionales reducen conflictos entre Estados?",
    correcta: "El liberalismo en relaciones internacionales",
    incorrectas: [
      "El totalitarismo",
      "El darwinismo social"
    ]
  },
  {
    enunciado: "¿Qué objetivo recoge el ODS 16 de la Agenda 2030?",
    correcta: "Promover paz, justicia e instituciones sólidas",
    incorrectas: [
      "Incrementar la capacidad nuclear de los Estados",
      "Restringir la cooperación internacional al ámbito comercial"
    ]
  },
  {
    enunciado: "¿Qué foco de tensión se originó en Chechenia?",
    correcta: "Los enfrentamientos entre separatistas chechenos y el Estado ruso",
    incorrectas: [
      "El conflicto fronterizo entre México y Guatemala",
      "La independencia pacífica de Finlandia"
    ]
  },
  {
    enunciado: "¿Qué fenómeno incrementa las crisis migratorias contemporáneas?",
    correcta: "Los conflictos bélicos, la pobreza extrema y la persecución política",
    incorrectas: [
      "El aumento del turismo internacional",
      "El crecimiento de la inversión extranjera"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la OTAN en la seguridad internacional?",
    correcta: "Actúa como alianza militar defensiva y realiza operaciones en zonas de conflicto",
    incorrectas: [
      "Es un tribunal internacional de justicia",
      "Es una organización cultural y lingüística"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un régimen democrático consolidado?",
    correcta: "El respeto pleno a los derechos humanos y la alternancia pacífica en el poder",
    incorrectas: [
      "La perpetuación del poder en un líder único",
      "La ausencia de controles sobre el poder ejecutivo"
    ]
  },
  {
    enunciado: "¿Qué tipo de régimen es el de Corea del Norte en la actualidad?",
    correcta: "Un régimen totalitario basado en culto al líder y control absoluto",
    incorrectas: [
      "Una democracia parlamentaria",
      "Un régimen híbrido"
    ]
  },
  {
    enunciado: "¿Qué tensión internacional se vincula con Irán?",
    correcta: "El desarrollo de su programa nuclear y sus relaciones con Occidente",
    incorrectas: [
      "Su ingreso como miembro permanente del Consejo de Seguridad",
      "La disputa fronteriza con Portugal"
    ]
  },
  {
    enunciado: "¿Qué efecto tienen los conflictos internos sobre la estabilidad internacional?",
    correcta: "Pueden desestabilizar regiones enteras y generar crisis globales",
    incorrectas: [
      "No tienen repercusión más allá del territorio local",
      "Garantizan el fortalecimiento automático de las instituciones internacionales"
    ]
  },
  {
    enunciado: "¿Qué es un régimen híbrido en relación con la democracia?",
    correcta: "Un sistema con elecciones limitadas o manipuladas y debilidad institucional",
    incorrectas: [
      "Un sistema plenamente democrático con separación de poderes",
      "Un totalitarismo sin participación electoral alguna"
    ]
  },
  {
    enunciado: "¿Qué conflicto interno ha marcado a Venezuela en el siglo XXI?",
    correcta: "Una profunda crisis política, institucional y humanitaria",
    incorrectas: [
      "La división pacífica en varios Estados federados",
      "La guerra con países vecinos de América del Sur"
    ]
  },
  {
    enunciado: "¿Qué estrategia utilizan las misiones internacionales de paz?",
    correcta: "La mediación, la protección de civiles y el control del alto el fuego",
    incorrectas: [
      "La sustitución de los gobiernos nacionales por mandatos coloniales",
      "La promoción de dictaduras militares"
    ]
  },
  {
    enunciado: "¿Qué conflictos surgieron tras la desintegración de Yugoslavia?",
    correcta: "Guerras en Bosnia, Croacia y Kosovo",
    incorrectas: [
      "Una unión pacífica con Austria y Alemania",
      "La integración inmediata en la Unión Europea"
    ]
  },
  {
    enunciado: "¿Qué región africana ha sido escenario de genocidios y guerras étnicas?",
    correcta: "Los Grandes Lagos y Sudán",
    incorrectas: [
      "Escandinavia",
      "Australia"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al fundamentalismo islámico radical?",
    correcta: "La interpretación extremista de la religión con fines políticos y uso del terrorismo",
    incorrectas: [
      "El fomento del diálogo interreligioso",
      "La promoción de la cooperación pacífica"
    ]
  },
  {
    enunciado: "¿Qué recurso estratégico ha estado en el centro de numerosos conflictos en Oriente Medio?",
    correcta: "El petróleo y el control de sus rutas de distribución",
    incorrectas: [
      "El cultivo de viñedos",
      "La producción de seda"
    ]
  },
  {
    enunciado: "¿Qué actor emergente ha aumentado su influencia en la política internacional del siglo XXI?",
    correcta: "China, con su crecimiento económico y expansión geopolítica",
    incorrectas: [
      "Islandia, con su liderazgo nuclear",
      "Luxemburgo, como potencia militar global"
    ]
  },
  {
    enunciado: "¿Qué problema de seguridad se ha intensificado con las nuevas tecnologías?",
    correcta: "La ciberseguridad y los ciberataques a infraestructuras críticas",
    incorrectas: [
      "La prohibición de acceso a internet en todos los países democráticos",
      "El auge del trueque digital como sistema global"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la Agenda 2030 en materia de paz y cooperación?",
    correcta: "Promueve instituciones sólidas y alianzas internacionales para enfrentar desafíos globales",
    incorrectas: [
      "Instaura dictaduras militares en zonas de conflicto",
      "Suprime los derechos humanos en favor de la seguridad"
    ]
  },
  {
    enunciado: "¿Qué consecuencia tienen las crisis migratorias en países receptores?",
    correcta: "Presión sobre servicios sociales y surgimiento de tensiones políticas internas",
    incorrectas: [
      "Aumento automático de la igualdad y cohesión social",
      "Desaparición de los sistemas democráticos"
    ]
  },
  {
    enunciado: "¿Qué conflicto internacional se intensificó a partir de 2022 con la invasión rusa?",
    correcta: "La guerra en Ucrania y sus repercusiones globales",
    incorrectas: [
      "La independencia de Canadá respecto a Reino Unido",
      "La integración de Japón en la Unión Europea"
    ]
  }
];
