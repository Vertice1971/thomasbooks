var PREGUNTAS = [
  {
    enunciado: "¿Qué es el proceso de urbanización?",
    correcta: "El aumento de la población que vive en ciudades y la expansión física y funcional de las mismas",
    incorrectas: [
      "La reducción del tamaño de las ciudades por emigración rural",
      "La sustitución de usos urbanos por agrícolas en el centro"
    ]
  },
  {
    enunciado: "¿Qué diferencia general existe entre la urbanización en países desarrollados y en desarrollo?",
    correcta: "En los desarrollados fue temprana y tiende a estabilizarse; en los de desarrollo es más rápida y a menudo informal",
    incorrectas: [
      "En los desarrollados no hay urbanización y en los de desarrollo es total",
      "En los desarrollados solo crecen áreas rurales y en los de desarrollo decrecen"
    ]
  },
  {
    enunciado: "¿Cuál es una característica típica de la ciudad preindustrial?",
    correcta: "Funciones defensivas, religiosas y comerciales, con densidad alta y murallas",
    incorrectas: [
      "Red de autopistas y metro extensa",
      "Predominio de rascacielos y CBD global"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a la ciudad industrial clásica del siglo XIX?",
    correcta: "Crecimiento rápido ligado a la fábrica y barrios obreros periféricos",
    incorrectas: [
      "Dispersión residencial con baja densidad",
      "Predominio de usos recreativos sobre productivos"
    ]
  },
  {
    enunciado: "¿Qué es una metrópolis?",
    correcta: "Ciudad de gran tamaño con funciones de dirección económica, política y cultural",
    incorrectas: [
      "Pueblo de pequeño tamaño con base agrícola",
      "Conjunto de aldeas sin relaciones funcionales"
    ]
  },
  {
    enunciado: "¿Qué es un área metropolitana?",
    correcta: "Conjunto urbano continuo articulado por una ciudad central y municipios periféricos funcionalmente integrados",
    incorrectas: [
      "Municipio rural aislado",
      "Ciudad histórica sin barrios periféricos"
    ]
  },
  {
    enunciado: "¿Qué es una megalópolis?",
    correcta: "Extenso corredor urbano formado por varias áreas metropolitanas contiguas",
    incorrectas: [
      "Ciudad media aislada",
      "Área rural densamente poblada sin ciudades"
    ]
  },
  {
    enunciado: "¿Qué es una conurbación?",
    correcta: "Fusión física de núcleos urbanos contiguos por crecimiento",
    incorrectas: [
      "Separación estricta de núcleos por cinturones verdes",
      "Un único municipio sin continuidad con otros"
    ]
  },
  {
    enunciado: "¿Qué es la suburbanización?",
    correcta: "Desplazamiento de población y actividades desde el centro urbano hacia la periferia",
    incorrectas: [
      "Regreso masivo al centro histórico",
      "Conversión de suburbios en áreas agrícolas"
    ]
  },
  {
    enunciado: "¿Qué es la periurbanización?",
    correcta: "Difusión de usos urbanos hacia el borde rural inmediato del área metropolitana",
    incorrectas: [
      "Reforestación de los cascos históricos",
      "Desaparición de la periferia urbana"
    ]
  },
  {
    enunciado: "¿Qué describe el 'urban sprawl'?",
    correcta: "Expansión urbana dispersa y poco densa con alta dependencia del automóvil",
    incorrectas: [
      "Crecimiento compacto y mixto",
      "Regeneración del centro histórico"
    ]
  },
  {
    enunciado: "¿Qué propone el enfoque 'smart growth'?",
    correcta: "Crecimiento urbano compacto, mixto y orientado al transporte público",
    incorrectas: [
      "Extender la ciudad ilimitadamente",
      "Segregar completamente los usos del suelo"
    ]
  },
  {
    enunciado: "¿Qué son las economías de aglomeración?",
    correcta: "Beneficios por proximidad entre empresas, servicios y población",
    incorrectas: [
      "Costes adicionales por congestión únicamente",
      "Aislamiento productivo para abaratar costes"
    ]
  },
  {
    enunciado: "¿Qué son las deseconomías de aglomeración?",
    correcta: "Costes derivados de congestión, encarecimiento del suelo y contaminación",
    incorrectas: [
      "Abaratamiento del suelo y reducción del tráfico",
      "Mejora automática de la calidad del aire"
    ]
  },
  {
    enunciado: "¿Qué efecto urbano describe la gentrificación?",
    correcta: "Revalorización de barrios centrales que desplaza población con menos recursos",
    incorrectas: [
      "Entrada de usos industriales pesados en el centro",
      "Sustitución de vivienda por agricultura urbana"
    ]
  },
  {
    enunciado: "¿Qué es la segregación socioespacial?",
    correcta: "Distribución desigual de grupos sociales en el espacio urbano",
    incorrectas: [
      "Mezcla homogénea de usos y rentas",
      "Ausencia total de diferencias territoriales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la ciudad compacta?",
    correcta: "Alta densidad, mezcla de usos y proximidad peatonal",
    incorrectas: [
      "Baja densidad y zonificación extrema",
      "Dependencia total del vehículo privado"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la ciudad difusa?",
    correcta: "Baja densidad, usos segregados y movilidad motorizada predominante",
    incorrectas: [
      "Alta densidad y movilidad activa",
      "Predominio de comercio de proximidad sin aparcamientos"
    ]
  },
  {
    enunciado: "¿Qué medida favorece la movilidad urbana sostenible?",
    correcta: "Priorizar transporte público, ciclismo y caminabilidad",
    incorrectas: [
      "Suprimir el transporte público",
      "Aumentar solo carriles para coches"
    ]
  },
  {
    enunciado: "¿Qué es la isla de calor urbana?",
    correcta: "Aumento de temperatura en zonas urbanas respecto a áreas rurales cercanas",
    incorrectas: [
      "Descenso térmico por vegetación abundante",
      "Fenómeno exclusivo de áreas rurales"
    ]
  },
  {
    enunciado: "¿Qué provoca la impermeabilización del suelo urbano?",
    correcta: "Aumento de escorrentía y riesgo de inundaciones",
    incorrectas: [
      "Mayor infiltración y recarga de acuíferos",
      "Reducción de la escorrentía superficial"
    ]
  },
  {
    enunciado: "¿Qué expresa la huella ecológica urbana?",
    correcta: "Superficie necesaria para sostener el consumo y absorber residuos de la ciudad",
    incorrectas: [
      "La longitud de calles por habitante",
      "El número de edificios patrimoniales"
    ]
  },
  {
    enunciado: "En España, ¿qué instrumento ordena el uso del suelo a escala municipal?",
    correcta: "El Plan General de Ordenación Urbana (PGOU)",
    incorrectas: [
      "La Constitución Española",
      "El Plan Hidrológico de cuenca"
    ]
  },
  {
    enunciado: "¿Qué persigue la Agenda Urbana Española?",
    correcta: "Orientar políticas urbanas hacia sostenibilidad, cohesión social y eficiencia",
    incorrectas: [
      "Promover la expansión ilimitada de suelo urbanizable",
      "Sustituir la planificación urbana por decisiones ad hoc"
    ]
  },
  {
    enunciado: "¿Qué persigue la rehabilitación energética de edificios?",
    correcta: "Reducir demanda y consumo mediante aislamiento, sistemas eficientes y energías renovables",
    incorrectas: [
      "Aumentar la demanda de calefacción",
      "Sustituir ventilación por sellado absoluto sin control"
    ]
  },
  {
    enunciado: "¿Qué son las infraestructuras verdes urbanas?",
    correcta: "Red de espacios y soluciones basadas en la naturaleza que aportan servicios ecosistémicos",
    incorrectas: [
      "Conjunto de autopistas urbanas",
      "Exclusivamente parques temáticos privados"
    ]
  },
  {
    enunciado: "¿Qué significa priorizar usos mixtos del suelo?",
    correcta: "Combinar vivienda, comercio y empleo para reducir desplazamientos",
    incorrectas: [
      "Separar estrictamente vivienda y trabajo",
      "Reservar el centro solo a oficinas"
    ]
  },
  {
    enunciado: "¿Qué sistemas conforman el transporte público masivo?",
    correcta: "Metro, cercanías, BRT y tranvía integrados",
    incorrectas: [
      "Taxis y patinetes eléctricos exclusivamente",
      "Barcos de recreo metropolitanos"
    ]
  },
  {
    enunciado: "¿Qué es el desarrollo orientado al transporte (TOD)?",
    correcta: "Densificar y mezclar usos alrededor de estaciones de transporte público",
    incorrectas: [
      "Zonificar aparcamientos en la periferia lejana",
      "Concentrar viviendas aisladas sin servicios"
    ]
  },
  {
    enunciado: "¿Qué es la resiliencia urbana?",
    correcta: "Capacidad de la ciudad para resistir, adaptarse y recuperarse ante impactos",
    incorrectas: [
      "Imposibilidad de experimentar cambios",
      "Crecimiento económico sin considerar riesgos"
    ]
  },
  {
    enunciado: "En España, ¿qué zonas urbanas son vulnerables a inundaciones torrenciales (DANA)?",
    correcta: "Litoral mediterráneo y cuencas urbanizadas de ramblas y barrancos",
    incorrectas: [
      "Alta montaña pirenaica sin ocupación",
      "Meseta en áreas sin cursos de agua"
    ]
  },
  {
    enunciado: "¿Qué política promueve vivienda asequible en ciudades?",
    correcta: "Parque público de alquiler, reservas de vivienda protegida y rehabilitación con criterios sociales",
    incorrectas: [
      "Liberación total de suelo sin regulación",
      "Eliminar ayudas al alquiler social"
    ]
  },
  {
    enunciado: "¿Qué rasgo define una 'smart city'?",
    correcta: "Uso de datos y tecnología para mejorar servicios y sostenibilidad",
    incorrectas: [
      "Automatizar todo sin participación ciudadana",
      "Sustituir el transporte público por coches privados"
    ]
  },
  {
    enunciado: "¿Qué instrumento fomenta la participación ciudadana en planificación?",
    correcta: "Procesos de consulta y presupuestos participativos",
    incorrectas: [
      "Decisiones opacas sin información",
      "Votaciones restringidas a promotores privados"
    ]
  },
  {
    enunciado: "¿Cómo integrar patrimonio histórico y turismo urbano de forma sostenible?",
    correcta: "Gestionando aforos, diversificando usos y preservando residentes",
    incorrectas: [
      "Monocultivo turístico sin límites",
      "Sustituir viviendas por hoteles en todo el centro"
    ]
  },
  {
    enunciado: "¿Qué impacto puede tener la economía nocturna en la ciudad?",
    correcta: "Genera actividad y empleo, pero exige gestión de ruido y convivencia",
    incorrectas: [
      "Carece de efectos sociales",
      "Elimina la necesidad de regulación municipal"
    ]
  },
  {
    enunciado: "¿Cómo afecta el teletrabajo a la estructura urbana?",
    correcta: "Reduce desplazamientos pendulares y puede reequilibrar localizaciones residenciales y de oficinas",
    incorrectas: [
      "Obliga a vivir más cerca de la oficina",
      "Suprime la demanda de vivienda por completo"
    ]
  },
  {
    enunciado: "En España, ¿qué ciudad ha impulsado el modelo de 'supermanzanas' para calmar tráfico?",
    correcta: "Barcelona",
    incorrectas: [
      "Sevilla",
      "Bilbao"
    ]
  },
  {
    enunciado: "¿Qué mide la tasa de urbanización?",
    correcta: "El porcentaje de población que vive en áreas urbanas respecto al total",
    incorrectas: [
      "El número de edificaciones por kilómetro",
      "La densidad de autopistas por habitante"
    ]
  }
];
