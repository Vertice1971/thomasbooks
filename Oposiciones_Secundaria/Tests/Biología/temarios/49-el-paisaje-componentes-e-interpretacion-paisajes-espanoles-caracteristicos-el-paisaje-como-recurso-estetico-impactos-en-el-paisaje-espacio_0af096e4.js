// temarios/49-el-paisaje-componentes-e-interpretacion-paisajes-espanoles-caracteristicos-el-paisaje-como-recurso-estetico-impactos-en-el-paisaje-espacios-protegidos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué definición describe mejor el paisaje en Ecología?",
    correcta: "El resultado perceptible de la interacción entre factores abióticos, bióticos y antrópicos",
    incorrectas: [
      "La suma de accidentes geográficos sin influencia de seres vivos",
      "Un territorio donde no interviene la percepción humana"
    ]
  },
  {
    enunciado: "¿Cuál es un componente abiótico clave del paisaje?",
    correcta: "El relieve y la geología del terreno",
    incorrectas: [
      "La red trófica de depredadores",
      "La participación ciudadana en la gestión"
    ]
  },
  {
    enunciado: "¿Cuál es un componente biótico del paisaje?",
    correcta: "La vegetación potencial y actual",
    incorrectas: [
      "El régimen fiscal del municipio",
      "La orientación de una autopista"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un elemento antrópico en el paisaje?",
    correcta: "Infraestructuras como carreteras y embalses",
    incorrectas: [
      "La litología del subsuelo",
      "La dinámica de los glaciares"
    ]
  },
  {
    enunciado: "¿Qué elemento pertenece a los componentes visuales del paisaje?",
    correcta: "Color, textura, forma y contraste",
    incorrectas: [
      "Tasa de fotosíntesis de una especie concreta",
      "Composición isotópica del agua subterránea"
    ]
  },
  {
    enunciado: "¿Cómo se denomina un paisaje con intervención humana moderada y funciones ecológicas aún operativas?",
    correcta: "Seminatural",
    incorrectas: [
      "Prístino",
      "Completamente industrial"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a un paisaje humanizado?",
    correcta: "Predominio de usos urbanos, industriales o agrarios intensivos",
    incorrectas: [
      "Ausencia total de actividad humana",
      "Cobertura forestal continua sin apertura de claros"
    ]
  },
  {
    enunciado: "¿Qué factor explica la diferencia entre paisajes atlánticos y mediterráneos en la Península Ibérica?",
    correcta: "El régimen térmico e hídrico ligado a la circulación atmosférica",
    incorrectas: [
      "La latitud idéntica en todo el territorio",
      "La ausencia de influencia oceánica"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al paisaje atlántico en España?",
    correcta: "Alta pluviosidad, verde permanente y valles fluviales encajados",
    incorrectas: [
      "Sequía estival intensa y matorral esclerófilo dominante",
      "Campos de dunas móviles generalizados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al paisaje mediterráneo peninsular?",
    correcta: "Veranos secos, encinares y cultivos de secano",
    incorrectas: [
      "Lluvias abundantes todo el año y hayedos extensos",
      "Tundras y permafrost en cotas bajas"
    ]
  },
  {
    enunciado: "¿Qué es propio de un paisaje de montaña?",
    correcta: "Pisificación altitudinal de la vegetación y relieve abrupto",
    incorrectas: [
      "Topografía plana y homogeneidad térmica",
      "Salinidad edáfica elevada por evaporitas generalizadas"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a los paisajes esteparios interiores de España?",
    correcta: "Cobertura vegetal rala y continentalidad climática marcada",
    incorrectas: [
      "Bosques caducifolios higrófilos continuos",
      "Glaciares activos en cotas medias"
    ]
  },
  {
    enunciado: "¿Qué elemento es típico del paisaje costero?",
    correcta: "Transición entre acantilados, playas, marismas y sistemas dunares",
    incorrectas: [
      "Permafrost y tundra",
      "Campos de lava recientes en toda la línea litoral"
    ]
  },
  {
    enunciado: "¿Qué distingue a los paisajes insulares canarios?",
    correcta: "Origen volcánico y alto endemismo biológico",
    incorrectas: [
      "Amplias llanuras de loess sin actividad volcánica",
      "Bosques boreales dominantes"
    ]
  },
  {
    enunciado: "¿Qué método de interpretación diferencia entre lo visible y los procesos subyacentes?",
    correcta: "Fenosistema y criptosistema de González Bernáldez",
    incorrectas: [
      "El principio de exclusión competitiva de Gause",
      "El modelo depredador-presa de Lotka–Volterra"
    ]
  },
  {
    enunciado: "¿Qué son las unidades de paisaje?",
    correcta: "Ámbitos relativamente homogéneos en estructura y funcionamiento",
    incorrectas: [
      "Parcelas catastrales de igual superficie",
      "Zonas definidas por límites administrativos únicamente"
    ]
  },
  {
    enunciado: "¿Qué indicador se emplea en la evaluación de la calidad visual del paisaje?",
    correcta: "Diversidad, rareza, naturalidad y coherencia escénica",
    incorrectas: [
      "Número de habitantes por kilómetro cuadrado",
      "PIB per cápita de la comarca"
    ]
  },
  {
    enunciado: "¿Qué impacto provoca con frecuencia la expansión urbana desordenada?",
    correcta: "Fragmentación del hábitat y artificialización",
    incorrectas: [
      "Aumento espontáneo de la conectividad ecológica",
      "Reducción inmediata de la demanda de suelo"
    ]
  },
  {
    enunciado: "¿Qué efecto paisajístico puede generar una infraestructura lineal (autovía, vía férrea)?",
    correcta: "Efecto barrera y cambios en la percepción visual",
    incorrectas: [
      "Restauración natural automática de la matriz",
      "Incremento de la diversidad sin medidas compensatorias"
    ]
  },
  {
    enunciado: "¿Qué práctica agraria intensiva impacta notablemente el paisaje?",
    correcta: "Monocultivos extensivos con eliminación de lindes y setos",
    incorrectas: [
      "Mosaicos agroganaderos tradicionales",
      "Sistemas de terrazas con muros en seco conservados"
    ]
  },
  {
    enunciado: "¿Qué concepto describe la vulnerabilidad del paisaje ante alteraciones?",
    correcta: "Fragilidad paisajística",
    incorrectas: [
      "Resistencia absoluta",
      "Inmutabilidad geográfica"
    ]
  },
  {
    enunciado: "¿Qué se entiende por capacidad de carga paisajística?",
    correcta: "Nivel de uso que puede soportar sin pérdida de calidad",
    incorrectas: [
      "Número de especies presentes en un inventario",
      "Altitud media de una sierra"
    ]
  },
  {
    enunciado: "¿Qué herramienta europea orienta la protección, gestión y ordenación del paisaje?",
    correcta: "Convenio Europeo del Paisaje (Florencia, 2000)",
    incorrectas: [
      "Convenio de Basilea sobre residuos peligrosos",
      "Tratado Antártico de 1959"
    ]
  },
  {
    enunciado: "¿Cuál es la finalidad de la Red Natura 2000?",
    correcta: "Conservar hábitats y especies de interés comunitario (LIC y ZEPA)",
    incorrectas: [
      "Regular exclusivamente los parques nacionales",
      "Autorizar minería a cielo abierto en espacios protegidos"
    ]
  },
  {
    enunciado: "¿Qué categoría internacional protege humedales de importancia?",
    correcta: "Sitios RAMSAR",
    incorrectas: [
      "Reservas de la Biosfera marinas únicamente",
      "Zonas ARPA para usos recreativos sin restricciones"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un Parque Nacional en España?",
    correcta: "Representa valores naturales singulares de interés general del Estado",
    incorrectas: [
      "Es un espacio minero con servidumbres industriales",
      "Permite urbanización intensiva por norma"
    ]
  },
  {
    enunciado: "¿Qué figura UNESCO integra conservación y desarrollo local?",
    correcta: "Reserva de la Biosfera",
    incorrectas: [
      "Zona Franca",
      "Distrito Industrial"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a un paisaje costero protegido en España?",
    correcta: "Cabo de Gata-Níjar",
    incorrectas: [
      "Picos de Europa",
      "Ordesa y Monte Perdido"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a un paisaje húmedo de alto valor ecológico?",
    correcta: "Doñana",
    incorrectas: [
      "Teide",
      "Timanfaya"
    ]
  },
  {
    enunciado: "¿Qué medida favorece la restauración paisajística tras una obra pública?",
    correcta: "Revegetación con especies autóctonas y corrección de taludes",
    incorrectas: [
      "Introducción de exóticas de rápido crecimiento",
      "Eliminación del suelo fértil restante"
    ]
  },
  {
    enunciado: "¿Qué criterio visual incrementa la calidad escénica?",
    correcta: "Coherencia compositiva y contraste moderado",
    incorrectas: [
      "Uniformidad absoluta sin elementos singulares",
      "Saturación de cartelería publicitaria"
    ]
  },
  {
    enunciado: "¿Qué función socioeconómica puede aportar el paisaje?",
    correcta: "Atracción turística y bienestar psicológico",
    incorrectas: [
      "Degradación cultural inevitable",
      "Sustitución del patrimonio natural por artificial"
    ]
  },
  {
    enunciado: "¿Qué unidad territorial se usa habitualmente para cartografiar paisajes?",
    correcta: "Unidades de paisaje delimitadas por criterios biofísicos y visuales",
    incorrectas: [
      "Distritos postales",
      "Términos parroquiales"
    ]
  },
  {
    enunciado: "¿Qué proceso produce homogeneización paisajística?",
    correcta: "Urbanización difusa y estandarización de usos del suelo",
    incorrectas: [
      "Mantenimiento de mosaicos agroforestales",
      "Restauración de corredores ecológicos"
    ]
  },
  {
    enunciado: "¿Qué indicador refleja la singularidad de un paisaje?",
    correcta: "Rareza de elementos y combinaciones escénicas",
    incorrectas: [
      "Número de rotondas por kilómetro",
      "Tasa de motorización comarcal"
    ]
  },
  {
    enunciado: "¿Qué práctica favorece la conectividad ecológica del paisaje?",
    correcta: "Establecer corredores y permeabilizar infraestructuras",
    incorrectas: [
      "Vallar de forma continua los márgenes fluviales",
      "Eliminar setos y ribazos tradicionales"
    ]
  },
  {
    enunciado: "¿Qué herramienta integra participación social en la gestión del paisaje?",
    correcta: "Procesos de planificación con consulta pública y educación ambiental",
    incorrectas: [
      "Decisiones opacas sin información",
      "Prohibición de acceso a la documentación"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un paisaje en regresión?",
    correcta: "Pérdida de estructura y funciones por presión antrópica o degradación natural",
    incorrectas: [
      "Aumento espontáneo de la diversidad sin gestión",
      "Estabilidad absoluta frente a perturbaciones"
    ]
  },
  {
    enunciado: "¿Qué variable biofísica condiciona fuertemente la estética de un valle fluvial?",
    correcta: "La morfología del valle y la continuidad de su vegetación de ribera",
    incorrectas: [
      "La orientación de las señales de tráfico",
      "La tipografía usada en los mapas turísticos"
    ]
  },
  {
    enunciado: "¿Qué ejemplo de paisaje insular mediterráneo español presenta clima mediterráneo y presión turística?",
    correcta: "Baleares",
    incorrectas: [
      "Islas Shetland",
      "Azores"
    ]
  },
  {
    enunciado: "¿Qué acción reduce la contaminación visual en paisajes protegidos?",
    correcta: "Ordenar la cartelería y soterrar tendidos en tramos sensibles",
    incorrectas: [
      "Aumentar el tamaño de vallas publicitarias",
      "Iluminar intensamente cumbres y acantilados"
    ]
  }
];
