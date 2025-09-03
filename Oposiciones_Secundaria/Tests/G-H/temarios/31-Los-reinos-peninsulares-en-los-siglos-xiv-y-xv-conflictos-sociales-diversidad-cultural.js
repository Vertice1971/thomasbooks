// temarios/31-Los-reinos-peninsulares-en-los-siglos-xiv-y-xv-conflictos-sociales-diversidad-cultural.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué fenómeno demográfico desencadenó una caída poblacional estimada del 30-40% en la Península Ibérica a mediados del siglo XIV?",
    correcta: "La Peste Negra de 1348 y sus rebrotes posteriores",
    incorrectas: [
      "La emigración masiva hacia América",
      "La expulsión de los moriscos decretada por Felipe III"
    ]
  },
  {
    enunciado: "¿Qué disposición jurídica castellana de 1348 fijó un marco legal clave en la Baja Edad Media?",
    correcta: "El Ordenamiento de Alcalá",
    incorrectas: [
      "Las Leyes de Toro",
      "La Nueva Recopilación"
    ]
  },
  {
    enunciado: "¿Qué órganos representativos compartían las coronas pero con funcionamiento diferenciado en cada territorio de la Corona de Aragón?",
    correcta: "Las Cortes de cada reino con fueros propios",
    incorrectas: [
      "Unas Cortes únicas para toda la Corona",
      "Un Parlamento suprarregional permanente al estilo moderno"
    ]
  },
  {
    enunciado: "¿Qué conflicto resolvió la sucesión en la Corona de Aragón llevando a un Trastámara al trono en 1412?",
    correcta: "El Compromiso de Caspe",
    incorrectas: [
      "La Sentencia de Guadalupe",
      "La Paz de Alcaçovas"
    ]
  },
  {
    enunciado: "¿Qué institución municipal barcelonesa, de larga tradición, encarna el gobierno urbano oligárquico en la Baja Edad Media?",
    correcta: "El Consell de Cent",
    incorrectas: [
      "El Cabildo de Indias",
      "La Junta de Comercio"
    ]
  },
  {
    enunciado: "¿Qué conflicto social campesino estalló en Cataluña en el siglo XV contra los 'mals usos' señoriales?",
    correcta: "La Guerra de los Remensas",
    incorrectas: [
      "La Guerra de las Germanías",
      "La Revuelta Irmandiña"
    ]
  },
  {
    enunciado: "¿Cuál fue una consecuencia económica de la crisis del siglo XIV en los reinos peninsulares?",
    correcta: "Descenso de las rentas señoriales y contracción agraria",
    incorrectas: [
      "Crecimiento sostenido de los salarios reales sin crisis de precios",
      "Expansión de la minería de plata americana"
    ]
  },
  {
    enunciado: "¿Qué rasgo político caracteriza a la Corona de Castilla en los siglos XIV y XV frente a la nobleza?",
    correcta: "Tendencia a la centralización con apoyo urbano para limitar a la alta nobleza",
    incorrectas: [
      "Cesión generalizada del poder a ligas nobiliarias",
      "Supresión completa de las Cortes estamentales"
    ]
  },
  {
    enunciado: "¿Qué institución judicial superior se consolidó en Castilla, con sede estable en Valladolid desde el siglo XIV?",
    correcta: "La Real Chancillería de Valladolid",
    incorrectas: [
      "La Audiencia de México",
      "El Tribunal del Santo Oficio de Aragón"
    ]
  },
  {
    enunciado: "¿Qué suceso de 1391 afectó gravemente a las aljamas de la Península?",
    correcta: "Oleadas de asaltos y matanzas antijudías",
    incorrectas: [
      "La expulsión general de judíos de Castilla",
      "La conversión forzosa decretada por el IV Concilio de Letrán"
    ]
  },
  {
    enunciado: "¿Qué bandos navarros protagonizaron luchas internas en el siglo XV?",
    correcta: "Agramonteses y beamonteses",
    incorrectas: [
      "Oñacinos y gamboínos",
      "Comuneros y realistas"
    ]
  },
  {
    enunciado: "¿Qué guerra civil afectó a Cataluña entre 1462 y 1472 debilitando a la Corona de Aragón?",
    correcta: "La Guerra Civil Catalana",
    incorrectas: [
      "La Guerra de Sucesión Castellana",
      "La Guerra de Granada"
    ]
  },
  {
    enunciado: "¿Qué institución policial-fiscal de carácter concejil reforzaron los Reyes Católicos para el control del territorio castellano?",
    correcta: "La Santa Hermandad",
    incorrectas: [
      "La Guardia Civil",
      "La Orden de Calatrava"
    ]
  },
  {
    enunciado: "¿Qué medida de 1478 fortaleció el control doctrinal y político de los Reyes Católicos?",
    correcta: "La creación de la Inquisición castellana por bula papal",
    incorrectas: [
      "La instauración del Tribunal de la Rota en Barcelona",
      "La fundación del Consejo de Estado borbónico"
    ]
  },
  {
    enunciado: "¿Qué tratado de 1479 cerró la guerra con Portugal y fijó esferas de influencia atlántica preliminares?",
    correcta: "La Paz de Alcaçovas-Toledo",
    incorrectas: [
      "El Tratado de Tordesillas",
      "La Paz de Cateau-Cambrésis"
    ]
  },
  {
    enunciado: "¿Qué documento de 1486 suprimió los 'mals usos' en Cataluña?",
    correcta: "La Sentencia Arbitral de Guadalupe",
    incorrectas: [
      "El Ordenamiento de Alcalá",
      "La Pragmática de Madrid"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento de 1492 transformó la diversidad religiosa en Castilla?",
    correcta: "El Edicto de expulsión de los judíos",
    incorrectas: [
      "La conversión forzosa de los mudéjares en Aragón",
      "La expulsión de los moriscos del reino de Valencia"
    ]
  },
  {
    enunciado: "¿Qué característica institucional diferenciaba a la Corona de Aragón de la de Castilla?",
    correcta: "Pluralidad de reinos con fueros e instituciones propias",
    incorrectas: [
      "Uniformidad legal completa desde el siglo XIII",
      "Cortes únicas y permanentes para toda la Corona"
    ]
  },
  {
    enunciado: "¿Qué sector económico ganó peso en la Castilla bajomedieval vinculando la Meseta con los puertos del Cantábrico y Flandes?",
    correcta: "La exportación lanera bajo el amparo de la Mesta",
    incorrectas: [
      "La producción azucarera antillana",
      "La minería del mercurio de Almadén desde el siglo IX"
    ]
  },
  {
    enunciado: "¿Qué reinos integraban nuclearmente la Corona de Aragón en los siglos XIV y XV?",
    correcta: "Aragón, Cataluña, Valencia y Mallorca",
    incorrectas: [
      "Aragón, Navarra, Castilla y León",
      "Aragón, Granada, Portugal y Mallorca"
    ]
  },
  {
    enunciado: "¿Qué universidad se fundó en 1450 reforzando el polo cultural de la Corona de Aragón?",
    correcta: "La Universidad de Barcelona",
    incorrectas: [
      "La Universidad de Alcalá",
      "La Universidad de Coimbra"
    ]
  },
  {
    enunciado: "¿Qué ciudad fue el centro de las instituciones superiores de justicia en Castilla durante el siglo XV?",
    correcta: "Valladolid",
    incorrectas: [
      "Granada",
      "Sevilla"
    ]
  },
  {
    enunciado: "¿Cómo afectó la crisis del siglo XIV a las relaciones señores-campesinos?",
    correcta: "Aumentó la presión señorial para mantener rentas, generando rebeliones",
    incorrectas: [
      "Suprimió las obligaciones señoriales por decreto general",
      "Provocó el reparto gratuito de tierras comunales"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes NO pertenece al período ni a la geografía de este tema?",
    correcta: "Las Germanías valencianas (1519-1523)",
    incorrectas: [
      "La Guerra de los Remensas (siglo XV)",
      "Los asaltos antijudíos de 1391"
    ]
  },
  {
    enunciado: "¿Qué obra literaria catalana de mediados del siglo XV refleja el ambiente caballeresco bajomedieval?",
    correcta: "Tirant lo Blanc",
    incorrectas: [
      "La Celestina",
      "El Lazarillo de Tormes"
    ]
  },
  {
    enunciado: "¿Qué autor castellano del siglo XV representa la lírica cortesana y la transición cultural?",
    correcta: "El marqués de Santillana",
    incorrectas: [
      "Garcilaso de la Vega",
      "Góngora"
    ]
  },
  {
    enunciado: "¿Qué institución se reformó en 1480 para profesionalizar el gobierno de Castilla bajo los Reyes Católicos?",
    correcta: "El Consejo Real",
    incorrectas: [
      "El Consejo de Ministros",
      "La Diputación del Reino"
    ]
  },
  {
    enunciado: "¿Qué hito de 1469 unió dinásticamente Castilla y Aragón?",
    correcta: "El matrimonio de Isabel I y Fernando II",
    incorrectas: [
      "La anexión institucional inmediata de ambos reinos",
      "La elección de un único parlamento común"
    ]
  },
  {
    enunciado: "¿Qué tratado de 1494 reorganizó definitivamente las esferas atlánticas castellanas y portuguesas?",
    correcta: "El Tratado de Tordesillas",
    incorrectas: [
      "La Paz de Brétigny",
      "El Tratado de Cateau-Cambrésis"
    ]
  },
  {
    enunciado: "¿Qué conflicto nobiliario urbano se asocia a Vizcaya y Guipúzcoa durante los siglos XIV y XV?",
    correcta: "Las banderizas entre oñacinos y gamboínos",
    incorrectas: [
      "La revuelta de los comuneros",
      "La guerra irmandiña en Galicia"
    ]
  },
  {
    enunciado: "¿Qué rasgo define la relación de la Corona de Aragón con el Mediterráneo en los siglos XIV y XV?",
    correcta: "Proyección mediterránea con dominio en Cerdeña y Sicilia",
    incorrectas: [
      "Cierre al comercio exterior por las Cortes",
      "Prioridad absoluta del Atlántico desde 1320"
    ]
  },
  {
    enunciado: "¿Qué minoría religiosa mantuvo estatuto de tolerancia limitada hasta finales del siglo XV, especialmente en Aragón y Valencia?",
    correcta: "Los mudéjares",
    incorrectas: [
      "Los protestantes",
      "Los moriscos expulsados en 1609"
    ]
  },
  {
    enunciado: "¿Qué institución económica del comercio exterior castellano se consolidó al final del siglo XV?",
    correcta: "El Consulado de Burgos",
    incorrectas: [
      "La Casa de la Contratación de Sevilla (1503)",
      "El Banco de San Carlos"
    ]
  },
  {
    enunciado: "¿Qué ciudad andaluza se convirtió en emblema del gótico tardío con su gran catedral iniciada a comienzos del siglo XV?",
    correcta: "Sevilla",
    incorrectas: [
      "Cádiz",
      "Málaga"
    ]
  },
  {
    enunciado: "¿Qué obra lingüística de 1492 simboliza el humanismo y la estandarización del castellano?",
    correcta: "La Gramática de la lengua castellana de Nebrija",
    incorrectas: [
      "El Arte de la lengua española de Correas",
      "El Diálogo de la lengua de Valdés"
    ]
  },
  {
    enunciado: "¿Qué proceso militar culminó en 1492 y cerró la Reconquista peninsular?",
    correcta: "La conquista del reino nazarí de Granada",
    incorrectas: [
      "La anexión de Navarra por Fernando el Católico (1512)",
      "La toma de Orán por Cisneros (1509)"
    ]
  },
  {
    enunciado: "¿Qué avance institucional utilizaron los Reyes Católicos para controlar municipios castellanos?",
    correcta: "Generalización de corregidores de designación real",
    incorrectas: [
      "Elección popular directa de los jueces",
      "Supresión de los concejos abiertos"
    ]
  },
  {
    enunciado: "¿Qué universidad peninsular fue un foco destacado de estudios jurídicos y teológicos durante toda la Baja Edad Media?",
    correcta: "La Universidad de Salamanca",
    incorrectas: [
      "La Universidad de Lisboa (creada en 1911)",
      "La Universidad de Granada (siglo XVI)"
    ]
  },
  {
    enunciado: "¿Qué elemento distingue la unión de Isabel y Fernando respecto a un Estado unitario moderno?",
    correcta: "Fue una unión dinástica que mantuvo instituciones y leyes separadas",
    incorrectas: [
      "Supuso la inmediata uniformidad legislativa",
      "Abolió todas las Cortes territoriales"
    ]
  },
  {
    enunciado: "¿Qué litigio dinástico castellano (1474-1479) condicionó la política exterior y las alianzas europeas?",
    correcta: "La Guerra de Sucesión Castellana entre Isabel y Juana",
    incorrectas: [
      "La Guerra de los Cien Años",
      "La Guerra de Granada entre Castilla y Aragón"
    ]
  },
  {
    enunciado: "¿Qué archipiélago atlántico fue conquistado por la Corona de Castilla culminando en 1496, abriendo una ruta hacia el Atlántico medio?",
    correcta: "Las Islas Canarias",
    incorrectas: [
      "Las Azores",
      "Madeira"
    ]
  },
  {
    enunciado: "¿Qué poeta valenciano del siglo XV renovó la lírica peninsular con una voz personal y en lengua catalana?",
    correcta: "Ausiàs March",
    incorrectas: [
      "Fray Luis de León",
      "Jorge Manrique"
    ]
  }
];
