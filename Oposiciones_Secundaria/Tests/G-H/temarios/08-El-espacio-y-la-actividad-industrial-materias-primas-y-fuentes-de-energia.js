var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por espacio industrial?",
    correcta: "El territorio organizado para la producción industrial, condicionado por factores físicos, económicos y tecnológicos",
    incorrectas: [
      "Un área dedicada exclusivamente a la extracción minera sin transformación",
      "Un espacio urbano destinado solo a la actividad comercial"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la industria pesada?",
    correcta: "Trabaja con grandes volúmenes de materias primas y produce bienes semielaborados",
    incorrectas: [
      "Produce bienes de consumo directo de manera artesanal",
      "Se basa únicamente en el uso de energías renovables"
    ]
  },
  {
    enunciado: "¿Cuál fue la principal fuente de energía de la primera revolución industrial?",
    correcta: "El carbón",
    incorrectas: [
      "El petróleo",
      "La energía solar"
    ]
  },
  {
    enunciado: "¿Qué industria española destacó históricamente en el País Vasco durante el siglo XX?",
    correcta: "La siderurgia",
    incorrectas: [
      "La textil",
      "La aeronáutica"
    ]
  },
  {
    enunciado: "¿Qué factor moderno de localización industrial es clave en la economía global actual?",
    correcta: "El acceso a la innovación y la tecnología",
    incorrectas: [
      "La proximidad a centros religiosos",
      "La abundancia de tierras agrícolas"
    ]
  },
  {
    enunciado: "¿Qué tipo de materia prima es el cobre?",
    correcta: "Un mineral metálico",
    incorrectas: [
      "Un mineral no metálico",
      "Una materia prima orgánica"
    ]
  },
  {
    enunciado: "¿En qué comunidades autónomas españolas se encuentran importantes yacimientos de carbón?",
    correcta: "Asturias, León y Teruel",
    incorrectas: [
      "Murcia, Alicante y Castellón",
      "Navarra, La Rioja y Cantabria"
    ]
  },
  {
    enunciado: "¿Qué es la deslocalización industrial?",
    correcta: "El traslado de actividades productivas a regiones con menores costes",
    incorrectas: [
      "La concentración de industrias en un mismo polígono",
      "La sustitución de la industria por el sector terciario"
    ]
  },
  {
    enunciado: "¿Cuál es la principal fuente de energía primaria en el mundo desde mediados del siglo XX?",
    correcta: "El petróleo",
    incorrectas: [
      "El carbón",
      "La energía hidroeléctrica"
    ]
  },
  {
    enunciado: "¿Qué industria tiene gran tradición en Cataluña desde el siglo XIX?",
    correcta: "La textil",
    incorrectas: [
      "La petroquímica",
      "La automovilística"
    ]
  },
  {
    enunciado: "¿Qué tipo de industria se dedica a la producción de bienes de consumo directo?",
    correcta: "Industria ligera",
    incorrectas: [
      "Industria pesada",
      "Industria extractiva"
    ]
  },
  {
    enunciado: "¿Qué fuente de energía es renovable?",
    correcta: "La energía eólica",
    incorrectas: [
      "El gas natural",
      "El carbón"
    ]
  },
  {
    enunciado: "¿Qué región española es un polo tradicional de la industria automovilística?",
    correcta: "La Comunidad Valenciana",
    incorrectas: [
      "Extremadura",
      "La Región de Murcia"
    ]
  },
  {
    enunciado: "¿Qué es la siderurgia?",
    correcta: "La industria que transforma el mineral de hierro en acero",
    incorrectas: [
      "La producción de cemento a partir de caliza",
      "La elaboración de fibras textiles sintéticas"
    ]
  },
  {
    enunciado: "¿Qué materia prima agrícola tuvo gran importancia en la industrialización de Andalucía?",
    correcta: "El algodón",
    incorrectas: [
      "La soja",
      "El arroz"
    ]
  },
  {
    enunciado: "¿Qué industria española se concentra en la bahía de Cádiz?",
    correcta: "La construcción naval",
    incorrectas: [
      "La industria papelera",
      "La producción de calzado"
    ]
  },
  {
    enunciado: "¿Qué fuente de energía ha crecido más en España en el siglo XXI?",
    correcta: "La energía eólica",
    incorrectas: [
      "El carbón",
      "El petróleo"
    ]
  },
  {
    enunciado: "¿Qué país es el principal productor mundial de petróleo?",
    correcta: "Arabia Saudí",
    incorrectas: [
      "Japón",
      "Canadá"
    ]
  },
  {
    enunciado: "¿Qué región de España ha desarrollado un importante polo aeronáutico?",
    correcta: "Andalucía",
    incorrectas: [
      "Galicia",
      "Cantabria"
    ]
  },
  {
    enunciado: "¿Qué factor clásico de localización industrial motivó el desarrollo de la siderurgia en Vizcaya?",
    correcta: "La proximidad a yacimientos de mineral de hierro",
    incorrectas: [
      "La abundancia de energía solar",
      "La cercanía a puertos pesqueros"
    ]
  },
  {
    enunciado: "¿Qué es la industria punta?",
    correcta: "La que utiliza tecnología avanzada y sectores de alta innovación",
    incorrectas: [
      "La que emplea técnicas artesanales",
      "La que solo fabrica productos de lujo"
    ]
  },
  {
    enunciado: "¿Qué comunidad autónoma lidera la producción hidroeléctrica en España?",
    correcta: "Galicia",
    incorrectas: [
      "Madrid",
      "Castilla-La Mancha"
    ]
  },
  {
    enunciado: "¿Qué energía fue clave en el desarrollo industrial de Asturias?",
    correcta: "El carbón",
    incorrectas: [
      "La energía solar",
      "El petróleo"
    ]
  },
  {
    enunciado: "¿Qué país concentra gran parte de la industria electrónica mundial?",
    correcta: "Japón",
    incorrectas: [
      "Egipto",
      "Chile"
    ]
  },
  {
    enunciado: "¿Qué problema afecta a zonas industriales tradicionales de España como Asturias o País Vasco?",
    correcta: "La desindustrialización",
    incorrectas: [
      "La sobrepoblación rural",
      "La falta de recursos hídricos"
    ]
  },
  {
    enunciado: "¿Qué recurso energético es estratégico en Canarias?",
    correcta: "La energía eólica",
    incorrectas: [
      "El carbón",
      "La energía nuclear"
    ]
  },
  {
    enunciado: "¿Qué industria es relevante en el corredor del Henares (Madrid)?",
    correcta: "La automovilística y logística",
    incorrectas: [
      "La textil artesanal",
      "La minería de cobre"
    ]
  },
  {
    enunciado: "¿Qué fuente de energía no emite CO₂ en su producción pero genera residuos radiactivos?",
    correcta: "La energía nuclear",
    incorrectas: [
      "La geotérmica",
      "La hidroeléctrica"
    ]
  },
  {
    enunciado: "¿Qué materia prima se extrae en las minas de Riotinto (Huelva)?",
    correcta: "Cobre",
    incorrectas: [
      "Oro",
      "Plomo"
    ]
  },
  {
    enunciado: "¿Qué región española se asocia a la producción de calzado industrial?",
    correcta: "Alicante",
    incorrectas: [
      "Soria",
      "Ourense"
    ]
  },
  {
    enunciado: "¿Qué factor ha favorecido el desarrollo de polos tecnológicos en España?",
    correcta: "La existencia de universidades y centros de investigación",
    incorrectas: [
      "El aislamiento geográfico",
      "La ausencia de capital extranjero"
    ]
  },
  {
    enunciado: "¿Qué industria se ubica frecuentemente cerca de refinerías de petróleo?",
    correcta: "La petroquímica",
    incorrectas: [
      "La metalurgia del aluminio",
      "La industria textil"
    ]
  },
  {
    enunciado: "¿Qué país concentra la producción mundial de soja?",
    correcta: "Brasil",
    incorrectas: [
      "España",
      "Suecia"
    ]
  },
  {
    enunciado: "¿Qué comunidad autónoma española tiene importante industria conservera?",
    correcta: "Galicia",
    incorrectas: [
      "Madrid",
      "Extremadura"
    ]
  },
  {
    enunciado: "¿Qué fuente de energía es más utilizada en el transporte global?",
    correcta: "El petróleo",
    incorrectas: [
      "El carbón",
      "La energía solar"
    ]
  },
  {
    enunciado: "¿Qué característica define a la industria ligera?",
    correcta: "Produce bienes de consumo final con menor inversión en maquinaria pesada",
    incorrectas: [
      "Se basa en la producción de energía",
      "Extrae materias primas sin procesarlas"
    ]
  },
  {
    enunciado: "¿Qué región española es referente en energías renovables solares?",
    correcta: "Andalucía",
    incorrectas: [
      "Asturias",
      "La Rioja"
    ]
  },
  {
    enunciado: "¿Qué mineral metálico es esencial para la industria del aluminio?",
    correcta: "La bauxita",
    incorrectas: [
      "La caliza",
      "El estaño"
    ]
  },
  {
    enunciado: "¿Qué sector industrial español ha crecido en torno a Zaragoza?",
    correcta: "La automoción y la logística",
    incorrectas: [
      "La minería del carbón",
      "La industria textil artesanal"
    ]
  }
];
