// temarios/34-Conquista-colonizacion-y-administracion-de-la-America-hispanica-en-los-siglos-XVI-al-XVIII.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué año marca el inicio de la presencia española en América?",
    correcta: "1492",
    incorrectas: [
      "1500",
      "1517"
    ]
  },
  {
    enunciado: "¿Qué imperio americano fue conquistado por Hernán Cortés?",
    correcta: "Imperio mexica o azteca",
    incorrectas: [
      "Imperio inca",
      "Imperio maya"
    ]
  },
  {
    enunciado: "¿En qué año cayó Tenochtitlan bajo control español?",
    correcta: "1521",
    incorrectas: [
      "1519",
      "1532"
    ]
  },
  {
    enunciado: "¿Qué conquistador dirigió la expedición que derrotó al Imperio inca?",
    correcta: "Francisco Pizarro",
    incorrectas: [
      "Diego de Almagro",
      "Pedro de Valdivia"
    ]
  },
  {
    enunciado: "¿En qué año fue capturado y ejecutado Atahualpa?",
    correcta: "1533",
    incorrectas: [
      "1521",
      "1541"
    ]
  },
  {
    enunciado: "¿Qué factor contribuyó decisivamente a la victoria española sobre los imperios americanos?",
    correcta: "Las epidemias y enfermedades introducidas",
    incorrectas: [
      "El dominio de la navegación fluvial",
      "El uso exclusivo de armas de fuego"
    ]
  },
  {
    enunciado: "¿Qué institución regulaba el comercio con América desde Sevilla?",
    correcta: "La Casa de Contratación",
    incorrectas: [
      "El Consejo de Indias",
      "El Consulado del Mar"
    ]
  },
  {
    enunciado: "¿Qué órgano supremo asesoraba al rey en materia colonial?",
    correcta: "El Consejo de Indias",
    incorrectas: [
      "El Consejo de Castilla",
      "El Consejo de Hacienda"
    ]
  },
  {
    enunciado: "¿Qué sistema de trabajo obligaba a los indígenas a prestar servicios forzados en minería y obras públicas?",
    correcta: "La mita",
    incorrectas: [
      "La encomienda",
      "El repartimiento de tierras"
    ]
  },
  {
    enunciado: "¿Qué figura jurídica permitía a un encomendero recibir tributo y trabajo de un grupo de indígenas?",
    correcta: "La encomienda",
    incorrectas: [
      "La capitulación",
      "La real cédula"
    ]
  },
  {
    enunciado: "¿Qué virreinato se estableció primero en América?",
    correcta: "Virreinato de Nueva España",
    incorrectas: [
      "Virreinato del Perú",
      "Virreinato del Río de la Plata"
    ]
  },
  {
    enunciado: "¿En qué año se creó el Virreinato del Perú?",
    correcta: "1542",
    incorrectas: [
      "1535",
      "1572"
    ]
  },
  {
    enunciado: "¿Qué virreinatos se añadieron en el siglo XVIII?",
    correcta: "Nueva Granada y Río de la Plata",
    incorrectas: [
      "Nueva España y Perú",
      "Chile y Quito"
    ]
  },
  {
    enunciado: "¿Qué rebelión indígena en el Perú se produjo en 1780-1781?",
    correcta: "Rebelión de Túpac Amaru II",
    incorrectas: [
      "Rebelión de los comuneros",
      "Revuelta de Enriquillo"
    ]
  },
  {
    enunciado: "¿Qué institución local ejercía funciones de gobierno municipal en las ciudades coloniales?",
    correcta: "El cabildo",
    incorrectas: [
      "La audiencia",
      "El corregimiento"
    ]
  },
  {
    enunciado: "¿Qué impuesto gravaba la quinta parte de los metales preciosos extraídos en América?",
    correcta: "El quinto real",
    incorrectas: [
      "La alcabala",
      "El diezmo"
    ]
  },
  {
    enunciado: "¿Qué ciudad era el centro minero más importante del virreinato del Perú?",
    correcta: "Potosí",
    incorrectas: [
      "Cuzco",
      "Lima"
    ]
  },
  {
    enunciado: "¿Qué puerto americano era clave en la ruta del Galeón de Manila?",
    correcta: "Acapulco",
    incorrectas: [
      "Cartagena de Indias",
      "Veracruz"
    ]
  },
  {
    enunciado: "¿Qué ruta conectaba Filipinas con México durante más de dos siglos?",
    correcta: "La ruta del Galeón de Manila",
    incorrectas: [
      "La ruta de las especias",
      "La ruta de los Andes"
    ]
  },
  {
    enunciado: "¿Qué misión jesuítica fue célebre por su organización y defensa frente a ataques externos?",
    correcta: "Reducciones del Paraguay",
    incorrectas: [
      "Misiones de Baja California",
      "Misiones de Florida"
    ]
  },
  {
    enunciado: "¿Qué orden religiosa tuvo un papel destacado en la evangelización inicial de México?",
    correcta: "Los franciscanos",
    incorrectas: [
      "Los agustinos",
      "Los mercedarios"
    ]
  },
  {
    enunciado: "¿Qué debate en 1550-1551 discutió la legitimidad de la conquista?",
    correcta: "Controversia de Valladolid",
    incorrectas: [
      "Concilio de Trento",
      "Junta de Burgos"
    ]
  },
  {
    enunciado: "¿Quién defendió en dicho debate los derechos de los indígenas?",
    correcta: "Bartolomé de las Casas",
    incorrectas: [
      "Juan Ginés de Sepúlveda",
      "Francisco de Vitoria"
    ]
  },
  {
    enunciado: "¿Qué epidemia fue especialmente devastadora para la población indígena en el siglo XVI?",
    correcta: "La viruela",
    incorrectas: [
      "La peste negra",
      "El cólera"
    ]
  },
  {
    enunciado: "¿Qué mercancía era la principal exportación de América a España?",
    correcta: "Plata",
    incorrectas: [
      "Trigo",
      "Cacao"
    ]
  },
  {
    enunciado: "¿Qué sistema regulaba la llegada de flotas y galeones a puertos americanos?",
    correcta: "El sistema de flotas y galeones",
    incorrectas: [
      "El libre comercio",
      "La ruta de Indias"
    ]
  },
  {
    enunciado: "¿Qué feria era punto clave del comercio interamericano?",
    correcta: "Feria de Portobelo",
    incorrectas: [
      "Feria de Veracruz",
      "Feria de Cuzco"
    ]
  },
  {
    enunciado: "¿Qué ciudad fue la sede de la primera universidad en América?",
    correcta: "Santo Domingo",
    incorrectas: [
      "México",
      "Lima"
    ]
  },
  {
    enunciado: "¿Qué universidades se fundaron en 1551 en América?",
    correcta: "Universidad de México y Universidad de Lima",
    incorrectas: [
      "Universidad de Córdoba y Universidad de Quito",
      "Universidad de Bogotá y Universidad de La Habana"
    ]
  },
  {
    enunciado: "¿Qué reforma de 1778 liberalizó parcialmente el comercio americano?",
    correcta: "Reglamento de libre comercio",
    incorrectas: [
      "Real Cédula de población",
      "Ley de Indias"
    ]
  },
  {
    enunciado: "¿Qué capital fue sede del virreinato creado en 1717?",
    correcta: "Santa Fe de Bogotá",
    incorrectas: [
      "Buenos Aires",
      "Quito"
    ]
  },
  {
    enunciado: "¿Qué capital fue sede del virreinato creado en 1776?",
    correcta: "Buenos Aires",
    incorrectas: [
      "Asunción",
      "Lima"
    ]
  },
  {
    enunciado: "¿Qué grupo social estaba formado por descendientes de españoles nacidos en América?",
    correcta: "Criollos",
    incorrectas: [
      "Mestizos",
      "Peninsulares"
    ]
  },
  {
    enunciado: "¿Qué impuesto indirecto gravaba las transacciones comerciales en América?",
    correcta: "La alcabala",
    incorrectas: [
      "El diezmo",
      "El almojarifazgo"
    ]
  },
  {
    enunciado: "¿Qué figura indígena colaboraba con las autoridades coloniales en el gobierno local?",
    correcta: "El cacique",
    incorrectas: [
      "El corregidor",
      "El escribano"
    ]
  },
  {
    enunciado: "¿Qué cultivo originario de América tuvo gran impacto en la dieta europea?",
    correcta: "El maíz",
    incorrectas: [
      "El arroz",
      "El trigo"
    ]
  },
  {
    enunciado: "¿Qué capital fue centro administrativo y comercial del virreinato de Nueva España?",
    correcta: "Ciudad de México",
    incorrectas: [
      "Guadalajara",
      "Acapulco"
    ]
  },
  {
    enunciado: "¿Qué institución supervisaba doctrinalmente la vida cultural y religiosa en América?",
    correcta: "La Inquisición",
    incorrectas: [
      "El Consejo de Estado",
      "El Cabildo"
    ]
  },
  {
    enunciado: "¿Qué sistema de poblamiento impulsaban las ordenanzas de 1573?",
    correcta: "Fundación planificada de ciudades",
    incorrectas: [
      "Asentamientos espontáneos",
      "Reducciones jesuíticas"
    ]
  },
  {
    enunciado: "¿Qué figura intelectual mestiza escribió los 'Comentarios reales'?",
    correcta: "Inca Garcilaso de la Vega",
    incorrectas: [
      "Guamán Poma de Ayala",
      "Sor Juana Inés de la Cruz"
    ]
  }
];
