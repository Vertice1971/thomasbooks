// temarios/36-Crecimiento-economico-estructuras-y-mentalidades-sociales-en-Europa-del-siglo-XVIII-las-transformaciones-politicas-en-Espana-del-siglo-XVIII.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué tendencia demográfica caracteriza a Europa durante gran parte del siglo XVIII?",
    correcta: "Un crecimiento sostenido de la población",
    incorrectas: [
      "Un estancamiento generalizado",
      "Un brusco descenso por grandes pestes"
    ]
  },
  {
    enunciado: "¿Cuál de estas innovaciones agrícolas se asocia al sistema Norfolk?",
    correcta: "Rotación cuatrienal con inclusión de forrajeras",
    incorrectas: [
      "Barbecho permanente cada dos años",
      "Prohibición de cultivos de raíz"
    ]
  },
  {
    enunciado: "¿Qué proceso transformó la estructura de la propiedad rural en Inglaterra?",
    correcta: "Los cercamientos (enclosures)",
    incorrectas: [
      "La parcelación comunal obligatoria",
      "La colectivización agraria"
    ]
  },
  {
    enunciado: "¿Qué sector económico sirvió de motor inicial para la mecanización industrial británica?",
    correcta: "El textil algodonero",
    incorrectas: [
      "La construcción naval mediterránea",
      "La orfebrería urbana"
    ]
  },
  {
    enunciado: "¿Qué nombre recibe la producción para el mercado realizada en talleres domésticos rurales?",
    correcta: "Protoindustrialización o domestic system",
    incorrectas: [
      "Gremialismo urbano tardío",
      "Comercio a la extranjera"
    ]
  },
  {
    enunciado: "¿Quién mejoró decisivamente la máquina de vapor en la década de 1760-1770?",
    correcta: "James Watt",
    incorrectas: [
      "Thomas Newcomen",
      "George Stephenson"
    ]
  },
  {
    enunciado: "¿Qué institución financiera favoreció la inversión y el crédito en la Inglaterra del XVIII?",
    correcta: "El Banco de Inglaterra",
    incorrectas: [
      "La Casa de Contratación de Sevilla",
      "El Consejo de Indias"
    ]
  },
  {
    enunciado: "¿Qué circuitos comerciales fueron esenciales en el Atlántico del XVIII?",
    correcta: "Las rutas triangulares entre Europa, África y América",
    incorrectas: [
      "El cabotaje báltico exclusivo",
      "El monopolio del Índico por España"
    ]
  },
  {
    enunciado: "¿Qué rasgo social destaca en el siglo XVIII europeo?",
    correcta: "El ascenso de la burguesía mercantil y financiera",
    incorrectas: [
      "La desaparición del campesinado",
      "La equiparación jurídica inmediata de todos los estamentos"
    ]
  },
  {
    enunciado: "¿Qué espacios ayudaron a difundir ideas ilustradas?",
    correcta: "Salones, cafés, academias y prensa",
    incorrectas: [
      "Solo las catedrales",
      "Exclusivamente los cuarteles"
    ]
  },
  {
    enunciado: "¿Qué principios fueron centrales en la mentalidad ilustrada?",
    correcta: "Razón, progreso y crítica del privilegio",
    incorrectas: [
      "Inmovilismo social y fideísmo político",
      "Supremacía de la tradición sobre la ley"
    ]
  },
  {
    enunciado: "¿Qué dinastía se instauró en España tras la Guerra de Sucesión?",
    correcta: "Los Borbones",
    incorrectas: [
      "Los Habsburgo",
      "Los Trastámara"
    ]
  },
  {
    enunciado: "¿Qué objetivo tuvieron los Decretos de Nueva Planta (1707-1716)?",
    correcta: "Unificar y centralizar la administración suprimiendo fueros en la Corona de Aragón",
    incorrectas: [
      "Restaurar las Cortes estamentales medievales",
      "Declarar la independencia de Cataluña y Valencia"
    ]
  },
  {
    enunciado: "¿Qué instrumento fiscal impulsó el marqués de la Ensenada en 1749?",
    correcta: "El Catastro de Ensenada",
    incorrectas: [
      "El Arancel de 1820",
      "La Contribución Única de 1868"
    ]
  },
  {
    enunciado: "¿Qué reforma comercial clave promulgó Carlos III en 1778?",
    correcta: "El Reglamento de libre comercio con América",
    incorrectas: [
      "La abolición completa de las aduanas exteriores",
      "La prohibición de comerciar fuera de Cádiz y Sevilla"
    ]
  },
  {
    enunciado: "¿Qué institución ilustrada promovió la modernización económica local?",
    correcta: "Las Sociedades Económicas de Amigos del País",
    incorrectas: [
      "La Santa Hermandad",
      "El Consejo de Cruzada"
    ]
  },
  {
    enunciado: "¿Qué suceso urbano reflejó resistencias al reformismo borbónico en 1766?",
    correcta: "El Motín de Esquilache",
    incorrectas: [
      "El levantamiento de las Alpujarras",
      "La sublevación de Aragón de 1591"
    ]
  },
  {
    enunciado: "¿Qué medida afectó a la educación y al equilibrio de poder eclesiástico en 1767?",
    correcta: "La expulsión de los jesuitas",
    incorrectas: [
      "La supresión de la Inquisición",
      "La creación de universidades privadas laicas"
    ]
  },
  {
    enunciado: "¿Qué gran obra de ingeniería ilustrada favoreció el transporte interior castellano?",
    correcta: "El Canal de Castilla",
    incorrectas: [
      "El Canal de Suez",
      "El Canal Imperial del Támesis"
    ]
  },
  {
    enunciado: "¿Qué puertos peninsulares se beneficiaron del libre comercio americano de 1778?",
    correcta: "Diversos puertos, además de Cádiz, como Barcelona, Málaga o La Coruña",
    incorrectas: [
      "Exclusivamente Sevilla",
      "Solo los puertos canarios"
    ]
  },
  {
    enunciado: "¿Qué actividad industrial apoyaron las manufacturas reales en el XVIII español?",
    correcta: "Producciones estratégicas (paños, tabacos, porcelana, armas)",
    incorrectas: [
      "Extracción de petróleo a gran escala",
      "Electrificación ferroviaria"
    ]
  },
  {
    enunciado: "¿Qué rasgo del Antiguo Régimen persistió como freno a la modernización en España?",
    correcta: "Estructura agraria señorial y mayorazgos",
    incorrectas: [
      "Reparto igualitario de tierras",
      "Abolición completa del diezmo"
    ]
  },
  {
    enunciado: "¿Qué ministro de Carlos III impulsó una política reformista y de obras públicas?",
    correcta: "El conde de Floridablanca",
    incorrectas: [
      "El duque de Lerma",
      "El conde-duque de Olivares"
    ]
  },
  {
    enunciado: "¿Qué propósito tenían las colonizaciones de Sierra Morena dirigidas por Olavide?",
    correcta: "Repoblar y dinamizar económicamente zonas despobladas",
    incorrectas: [
      "Construir arsenales navales en la Meseta",
      "Fomentar latifundios eclesiásticos"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó la Real Academia Española (1713) en el XVIII?",
    correcta: "Estandarizar y fijar la lengua para la vida cultural y administrativa",
    incorrectas: [
      "Regular el comercio exterior",
      "Dirigir el ejército"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la 'revolución del consumo' del XVIII?",
    correcta: "Mayor acceso a productos manufacturados y coloniales",
    incorrectas: [
      "Racionamiento general de bienes básicos",
      "Prohibición del lujo en todas las cortes europeas"
    ]
  },
  {
    enunciado: "¿Qué base material sostuvo la primera industrialización británica?",
    correcta: "Carbón y hierro",
    incorrectas: [
      "Petróleo y aluminio",
      "Energía eléctrica y acero inoxidable"
    ]
  },
  {
    enunciado: "¿Qué rasgo jurídico mantuvo la sociedad europea del XVIII?",
    correcta: "Desigualdad estamental ante la ley y el fisco",
    incorrectas: [
      "Igualdad civil plena",
      "Sufragio universal masculino"
    ]
  },
  {
    enunciado: "¿Qué relación hubo entre Ilustración y economía política en el XVIII?",
    correcta: "Difusión de fisiócratas y de Adam Smith sobre libertad económica",
    incorrectas: [
      "Defensa unánime del monopolio gremial",
      "Rechazo total a la competencia"
    ]
  },
  {
    enunciado: "¿Qué institución naval se fortaleció con los arsenales borbónicos?",
    correcta: "La Armada española",
    incorrectas: [
      "La Hanseática del Báltico",
      "La Royal African Company"
    ]
  },
  {
    enunciado: "¿Qué limitación tuvo el reformismo borbónico pese a sus avances?",
    correcta: "Persistencia de privilegios y resistencias corporativas",
    incorrectas: [
      "Desaparición de la nobleza",
      "Abolición inmediata de la servidumbre en toda Europa"
    ]
  },
  {
    enunciado: "¿Qué opción identifica una característica del comercio europeo del XVIII?",
    correcta: "Mayor integración de mercados y especialización regional",
    incorrectas: [
      "Autarquía absoluta de cada reino",
      "Desaparición de las compañías comerciales"
    ]
  },
  {
    enunciado: "¿Qué objetivo perseguían las reformas educativas ilustradas en España?",
    correcta: "Orientar la enseñanza hacia saberes útiles y científicos",
    incorrectas: [
      "Suprimir la enseñanza técnica",
      "Limitar la lectura a textos devocionales"
    ]
  },
  {
    enunciado: "¿Qué efecto tuvo el crecimiento demográfico europeo sobre la economía?",
    correcta: "Amplió la demanda interna y la oferta de mano de obra",
    incorrectas: [
      "Provocó el colapso inmediato del comercio",
      "Redujo el mercado urbano"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el papel de la burguesía en el XVIII?",
    correcta: "Incrementó su influencia económica y cultural",
    incorrectas: [
      "Quedó excluida del comercio",
      "Perdió toda relevancia política"
    ]
  },
  {
    enunciado: "¿Qué elemento administrativo implantaron los Borbones para mejorar la gestión territorial?",
    correcta: "El sistema de intendencias",
    incorrectas: [
      "La vuelta a los virreinatos peninsulares",
      "El gobierno de los reinos por cabildos eclesiásticos"
    ]
  },
  {
    enunciado: "¿Qué finalidad tuvo la liberalización parcial del comercio americano en 1778?",
    correcta: "Dinamizar puertos y romper cuellos de botella monopolísticos",
    incorrectas: [
      "Cerrar América al comercio peninsular",
      "Prohibir el tráfico con territorios españoles"
    ]
  },
  {
    enunciado: "¿Qué característica conecta Europa y España en el XVIII?",
    correcta: "Reformismo ilustrado con límites por estructuras del Antiguo Régimen",
    incorrectas: [
      "Revolución social igualitaria generalizada",
      "Desaparición simultánea de los estamentos"
    ]
  },
  {
    enunciado: "¿Qué balance general puede hacerse de las reformas borbónicas?",
    correcta: "Modernizaron la administración y el comercio sin transformar de raíz la estructura social",
    incorrectas: [
      "Implantaron el sufragio universal y la igualdad civil",
      "Abolieron todos los privilegios nobiliarios"
    ]
  }
];
