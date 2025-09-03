// temarios/13-Japon-y-el-area-del-pacifico-desarrollo-industrial-y-comercial.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué expresa la idea de 'Siglo del Pacífico' aplicada a la economía mundial reciente?",
    correcta: "El desplazamiento del centro económico global hacia la cuenca del Pacífico",
    incorrectas: [
      "La primacía exclusiva de Europa occidental en el comercio mundial",
      "La autosuficiencia energética de América Latina desde 2000"
    ]
  },
  {
    enunciado: "¿Qué rasgo físico común comparten muchas economías de Asia-Pacífico que influye en su inserción comercial?",
    correcta: "Largas costas con puertos naturales que facilitan el tráfico marítimo",
    incorrectas: [
      "Altiplanos extensos que favorecen la agricultura de secano",
      "Grandes desiertos interiores que concentran la población"
    ]
  },
  {
    enunciado: "¿Qué limitación estructural condiciona históricamente a Japón en materia de recursos?",
    correcta: "Escasez de materias primas energéticas y minerales",
    incorrectas: [
      "Exceso de tierras agrícolas irrigadas",
      "Superávit crónico de petróleo crudo"
    ]
  },
  {
    enunciado: "¿Qué institución fue central en la coordinación industrial de Japón durante el auge de posguerra?",
    correcta: "El MITI (Ministerio de Industria y Comercio Internacional)",
    incorrectas: [
      "El Banco Mundial",
      "La OPEP"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al modelo empresarial japonés de posguerra (keiretsu)?",
    correcta: "Grupos de empresas interrelacionadas con vínculos financieros y de suministro",
    incorrectas: [
      "Cooperativas agrícolas autogestionadas",
      "Empresa pública única por sector productivo"
    ]
  },
  {
    enunciado: "¿Qué práctica de gestión de calidad se asocia al éxito manufacturero japonés?",
    correcta: "Mejora continua y control estadístico de procesos",
    incorrectas: [
      "Producción artesanal sin estandarización",
      "Subcontratación total sin auditorías"
    ]
  },
  {
    enunciado: "¿Qué sector consolidó a Japón como líder mundial entre 1960 y 1990?",
    correcta: "Automoción y maquinaria de precisión",
    incorrectas: [
      "Producción masiva de materias primas",
      "Textil de bajo valor añadido"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento económico marcó la crisis japonesa de los años noventa?",
    correcta: "El estallido de la burbuja de activos y la 'década perdida'",
    incorrectas: [
      "La hiperinflación posbélica",
      "La nacionalización completa del sistema bancario europeo"
    ]
  },
  {
    enunciado: "¿Qué factor demográfico es hoy un reto central para Japón?",
    correcta: "Envejecimiento acelerado y baja natalidad",
    incorrectas: [
      "Explosión demográfica juvenil",
      "Fuerte ruralización de la población"
    ]
  },
  {
    enunciado: "¿Qué conjunto de países se considera de la 'primera ola' de Nuevos Países Industrializados de Asia?",
    correcta: "Corea del Sur, Taiwán, Hong Kong y Singapur",
    incorrectas: [
      "India, Pakistán, Bangladés y Nepal",
      "Tailandia, Myanmar, Laos y Camboya"
    ]
  },
  {
    enunciado: "¿Qué rasgo comparten los NPI asiáticos en su estrategia de crecimiento?",
    correcta: "Orientación a la exportación con fuerte inversión en educación y tecnología",
    incorrectas: [
      "Cierre autárquico y sustitución total de importaciones",
      "Especialización exclusiva en materias primas"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el rol del Sudeste Asiático en las cadenas globales de valor?",
    correcta: "Plataforma manufacturera integrada con escalado tecnológico desigual",
    incorrectas: [
      "Centro financiero único del planeta",
      "Mercado aislado sin IED"
    ]
  },
  {
    enunciado: "¿Qué organismo regional promueve la integración económica en el Sudeste Asiático?",
    correcta: "ASEAN",
    incorrectas: [
      "Mercosur",
      "EFTA"
    ]
  },
  {
    enunciado: "¿Qué especialización productiva distingue a Corea del Sur en Asia-Pacífico?",
    correcta: "Electrónica avanzada, automoción y construcción naval",
    incorrectas: [
      "Minería de carbón a gran escala",
      "Agricultura cerealista extensiva"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el papel de China en la dinámica industrial regional?",
    correcta: "Socio y competidor clave que reorganiza flujos productivos y comerciales",
    incorrectas: [
      "Actor marginal sin impacto en las cadenas de suministro",
      "Exportador casi exclusivo de materias primas"
    ]
  },
  {
    enunciado: "¿Qué ventaja logística explica la centralidad del Pacífico en el comercio mundial?",
    correcta: "Corredores marítimos de alta capacidad que conectan Asia con América y Europa",
    incorrectas: [
      "Red ferroviaria transcontinental única y exclusiva",
      "Dependencia de rutas aéreas para graneles"
    ]
  },
  {
    enunciado: "¿Qué industria japonesa mantiene liderazgo tecnológico global en robótica?",
    correcta: "Robótica industrial para automatización de plantas",
    incorrectas: [
      "Robótica agrícola de tracción animal",
      "Robots domésticos de uso masivo desde 1970"
    ]
  },
  {
    enunciado: "¿Qué componente crítico concentra Asia en las cadenas de valor electrónicas?",
    correcta: "Semiconductores y ensamblaje de dispositivos",
    incorrectas: [
      "Extracción de diamantes industriales en Europa",
      "Transporte fluvial intercontinental"
    ]
  },
  {
    enunciado: "¿Qué riesgo ambiental destaca en la industrialización del área del Pacífico?",
    correcta: "Contaminación y presión sobre ecosistemas costeros",
    incorrectas: [
      "Desaparición total de la pesca en el Atlántico Norte",
      "Aumento de glaciares por enfriamiento regional"
    ]
  },
  {
    enunciado: "¿Cuál es un desafío geopolítico recurrente en Asia-Pacífico?",
    correcta: "Disputas marítimas y rivalidad estratégica entre potencias regionales",
    incorrectas: [
      "Unión política plena en una confederación asiática",
      "Ausencia de fuerzas navales en la región"
    ]
  },
  {
    enunciado: "En el intercambio España–Japón, ¿qué es habitual que exporte España?",
    correcta: "Productos agroalimentarios, componentes de automoción y bienes intermedios",
    incorrectas: [
      "Petróleo crudo en grandes volúmenes",
      "Carbón térmico de minas propias"
    ]
  },
  {
    enunciado: "¿Qué área española se ha consolidado como nodo logístico-industrial con vínculos hacia Asia?",
    correcta: "El eje del valle del Ebro y Zaragoza (plataformas logísticas)",
    incorrectas: [
      "Las Hurdes como núcleo petroquímico",
      "La Alcarria como astillero mayor europeo"
    ]
  },
  {
    enunciado: "¿Qué empresa japonesa tiene una huella histórica relevante en la automoción española?",
    correcta: "Toyota (junto a otras firmas niponas del sector)",
    incorrectas: [
      "Petronas como ensambladora de automóviles en Navarra",
      "Gazprom como fabricante de turismos en Barcelona"
    ]
  },
  {
    enunciado: "¿Qué acuerdo o foro impulsa el comercio transpacífico multilateral?",
    correcta: "APEC como plataforma de diálogo económico",
    incorrectas: [
      "OPEP para coordinar el precio del trigo",
      "OTAN para fijar aranceles industriales"
    ]
  },
  {
    enunciado: "¿Cuál es una característica del comercio intra-asiático reciente?",
    correcta: "Crecimiento sostenido con mayor intercambio de bienes intermedios",
    incorrectas: [
      "Desaparición de las exportaciones intrarregionales",
      "Dominio exclusivo de materias primas sin manufacturas"
    ]
  },
  {
    enunciado: "¿Qué país del Sudeste Asiático destaca por atraer IED en electrónica y automoción?",
    correcta: "Vietnam",
    incorrectas: [
      "Bután",
      "Mongolia"
    ]
  },
  {
    enunciado: "¿Qué ciudad-Estado asiática es referente mundial en logística portuaria y financiera?",
    correcta: "Singapur",
    incorrectas: [
      "Ulán Bator",
      "Vientián"
    ]
  },
  {
    enunciado: "¿Qué política facilitó la escalada tecnológica de Corea del Sur y Taiwán?",
    correcta: "Aprendizaje tecnológico activo con apoyo estatal y metas exportadoras",
    incorrectas: [
      "Prohibición de registrar patentes extranjeras",
      "Arancel cero a todas las importaciones desde 1950"
    ]
  },
  {
    enunciado: "¿Qué tipología industrial es clave para la 'fábrica Asia'?",
    correcta: "Manufactura modular con especialización por etapas de producción",
    incorrectas: [
      "Producción artesanal dispersa sin estándares",
      "Monocultivo extractivo sin transformación"
    ]
  },
  {
    enunciado: "¿Qué riesgo económico afecta a economías muy abiertas del Pacífico?",
    correcta: "Vulnerabilidad a shocks externos y ciclos comerciales globales",
    incorrectas: [
      "Imposibilidad de acceder a financiación internacional",
      "Aislamiento autárquico voluntario generalizado"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la inserción de España en las cadenas Asia–Europa?",
    correcta: "Plataformas logísticas y sectores nicho conectados con proveedores asiáticos",
    incorrectas: [
      "Cierre aduanero a todos los bienes de Asia",
      "Sustitución total de importaciones tecnológicas"
    ]
  },
  {
    enunciado: "¿Qué medida industrial es coherente con la transición energética en Japón?",
    correcta: "Impulso a renovables y eficiencia junto a electrificación del transporte",
    incorrectas: [
      "Incremento indefinido del carbón nacional",
      "Eliminación de estándares de eficiencia"
    ]
  },
  {
    enunciado: "¿Qué subsector japonés conserva ventajas competitivas por su know-how acumulado?",
    correcta: "Máquina-herramienta y equipos de precisión",
    incorrectas: [
      "Refino de petróleo pesado doméstico",
      "Producción masiva de algodón en bruto"
    ]
  },
  {
    enunciado: "¿Qué país de Asia oriental se ha especializado en foundries de semiconductores?",
    correcta: "Taiwán",
    incorrectas: [
      "Sri Lanka",
      "Afganistán"
    ]
  },
  {
    enunciado: "¿Qué efecto ha tenido la robotización en la industria japonesa?",
    correcta: "Aumento de la productividad y compensación parcial de la escasez laboral",
    incorrectas: [
      "Sustitución completa del comercio exterior",
      "Desaparición del sector servicios"
    ]
  },
  {
    enunciado: "¿Qué puerto asiático figura de forma recurrente entre los primeros del mundo por TEU?",
    correcta: "Shanghái",
    incorrectas: [
      "Bilbao",
      "Marsella"
    ]
  },
  {
    enunciado: "¿Qué corredor comercial es crítico para el tráfico Asia–Europa?",
    correcta: "El paso por el canal de Suez y rutas del Índico",
    incorrectas: [
      "El archipiélago canadiense polar",
      "El río Danubio como vía oceánica"
    ]
  }
];
