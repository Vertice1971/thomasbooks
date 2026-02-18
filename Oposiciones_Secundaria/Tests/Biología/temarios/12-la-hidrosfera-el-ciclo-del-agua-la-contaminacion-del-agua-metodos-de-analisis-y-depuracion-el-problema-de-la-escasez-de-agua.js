// temarios/12-la-hidrosfera-el-ciclo-del-agua-la-contaminacion-del-agua-metodos-de-analisis-y-depuracion-el-problema-de-la-escasez-de-agua.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué porcentaje aproximado del agua del planeta es salada?",
    correcta: "En torno al 97,5 % del total",
    incorrectas: [
      "Cerca del 75 % del total",
      "Menos del 50 % del total"
    ]
  },
  {
    enunciado: "¿Dónde se encuentra la mayor parte del agua dulce del planeta?",
    correcta: "En glaciares, casquetes polares y aguas subterráneas",
    incorrectas: [
      "En ríos y lagos de superficie",
      "En el vapor de agua atmosférico"
    ]
  },
  {
    enunciado: "¿Qué proceso del ciclo del agua transforma el agua líquida en vapor debido al aporte de energía?",
    correcta: "Evaporación",
    incorrectas: [
      "Condensación",
      "Precipitación"
    ]
  },
  {
    enunciado: "La transpiración es el proceso por el cual…",
    correcta: "Las plantas pierden agua en forma de vapor a través de los estomas",
    incorrectas: [
      "El agua se filtra hacia capas profundas del suelo",
      "Las nubes liberan agua en forma de lluvia"
    ]
  },
  {
    enunciado: "¿Qué término describe el flujo de agua que discurre sobre la superficie terrestre hacia cauces y océanos?",
    correcta: "Escorrentía superficial",
    incorrectas: [
      "Percolación",
      "Capilaridad"
    ]
  },
  {
    enunciado: "¿Cómo se denomina el proceso por el que el agua penetra en el suelo y recarga los acuíferos?",
    correcta: "Infiltración",
    incorrectas: [
      "Sublimación",
      "Advección"
    ]
  },
  {
    enunciado: "Un acuífero confinado se caracteriza por…",
    correcta: "Estar limitado por capas poco permeables que encierran el agua bajo presión",
    incorrectas: [
      "Recibirse exclusivamente de ríos caudalosos",
      "Presentar nula porosidad en el medio rocoso"
    ]
  },
  {
    enunciado: "La intrusión salina suele ser consecuencia de…",
    correcta: "La sobreexplotación de acuíferos costeros que invierte el gradiente hidráulico",
    incorrectas: [
      "El exceso de precipitación invernal",
      "La presencia de arcillas expansivas en el acuífero"
    ]
  },
  {
    enunciado: "¿Qué parámetro mide la acidez o basicidad del agua?",
    correcta: "pH",
    incorrectas: [
      "Conductividad",
      "Turbidez"
    ]
  },
  {
    enunciado: "¿Qué mide la DBO (Demanda Bioquímica de Oxígeno)?",
    correcta: "El oxígeno necesario para degradar la materia orgánica biodegradable",
    incorrectas: [
      "El oxígeno total presente en el agua independientemente de su consumo",
      "La concentración de nitrógeno total Kjeldahl"
    ]
  },
  {
    enunciado: "La DQO (Demanda Química de Oxígeno) se utiliza para…",
    correcta: "Estimar la materia orgánica total (biodegradable y no biodegradable)",
    incorrectas: [
      "Cuantificar exclusivamente la biomasa bacteriana",
      "Medir el oxígeno disuelto sin reacciones químicas"
    ]
  },
  {
    enunciado: "¿Qué organismos se usan con frecuencia como bioindicadores en ríos para evaluar la calidad del agua?",
    correcta: "Macroinvertebrados bentónicos",
    incorrectas: [
      "Mamíferos ribereños",
      "Aves migratorias pelágicas"
    ]
  },
  {
    enunciado: "La eutrofización está causada principalmente por…",
    correcta: "El exceso de nutrientes como nitratos y fosfatos que disparan la productividad algal",
    incorrectas: [
      "Una carencia crónica de materia orgánica",
      "Una disminución natural del pH por la lluvia"
    ]
  },
  {
    enunciado: "Un contaminante emergente típico en aguas continentales es…",
    correcta: "Los PFAS (compuestos perfluoroalquilados) y fármacos",
    incorrectas: [
      "El nitrógeno gaseoso atmosférico",
      "El dióxido de carbono disuelto natural"
    ]
  },
  {
    enunciado: "¿Qué instrumento normativo europeo establece el marco para la protección de las aguas interiores, costeras y subterráneas?",
    correcta: "La Directiva Marco del Agua 2000/60/CE",
    incorrectas: [
      "El Protocolo de Montreal",
      "La Convención de Basilea sobre residuos peligrosos"
    ]
  },
  {
    enunciado: "En un esquema general de una EDAR, el pretratamiento incluye…",
    correcta: "Rejas, desarenado y desengrasado",
    incorrectas: [
      "Nitrificación y desnitrificación",
      "Radiación ultravioleta"
    ]
  },
  {
    enunciado: "En el tratamiento primario de aguas residuales, la operación más característica es…",
    correcta: "La sedimentación de sólidos en suspensión",
    incorrectas: [
      "La cloración de choque",
      "La ósmosis inversa"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal del tratamiento secundario biológico?",
    correcta: "Eliminar materia orgánica disuelta mediante actividad microbiana",
    incorrectas: [
      "Separar arenas y grasas por diferencias de densidad",
      "Retener sólidos por membranas de nanofiltración"
    ]
  },
  {
    enunciado: "Los lodos activados se basan en…",
    correcta: "Flóculos de microorganismos en suspensión que degradan la materia orgánica",
    incorrectas: [
      "Un lecho de carbón que adsorbe metales por intercambio iónico",
      "Un filtro de grava que solo retiene sólidos gruesos"
    ]
  },
  {
    enunciado: "¿Qué operación de tratamiento terciario se usa a menudo para inactivar patógenos?",
    correcta: "Desinfección mediante cloro, ozono o radiación ultravioleta",
    incorrectas: [
      "Coagulación con sales de aluminio",
      "Desarenado por vórtice"
    ]
  },
  {
    enunciado: "¿Qué tecnología de membranas se utiliza típicamente en desalinización de agua de mar?",
    correcta: "Ósmosis inversa",
    incorrectas: [
      "Ultrafiltración por gravedad",
      "Electroforesis capilar"
    ]
  },
  {
    enunciado: "La adsorción con carbón activado es especialmente eficaz para…",
    correcta: "Eliminar microcontaminantes orgánicos y compuestos traza",
    incorrectas: [
      "Reducir la salinidad total del agua de mar",
      "Precipitar carbonatos por aumento del pH"
    ]
  },
  {
    enunciado: "Un humedal artificial de flujo subsuperficial se emplea para…",
    correcta: "Depuración natural basada en plantas, sustrato y microbiota",
    incorrectas: [
      "Aumento de la presión en acuíferos confinados",
      "Cloración a alta dosis para potabilización instantánea"
    ]
  },
  {
    enunciado: "En potabilización (ETAP), la secuencia clásica incluye…",
    correcta: "Coagulación-floculación, decantación, filtración y desinfección",
    incorrectas: [
      "Tamizado, electrólisis, digestión aerobia y secado térmico",
      "Oxidación húmeda, centrifugación, nitrificación y UV"
    ]
  },
  {
    enunciado: "¿Qué parámetro indica la cantidad de sales disueltas permitiendo estimar la mineralización?",
    correcta: "Conductividad eléctrica",
    incorrectas: [
      "DBO a 5 días",
      "Índice BMWP"
    ]
  },
  {
    enunciado: "La presencia de nitritos en agua de consumo es problemática porque…",
    correcta: "Puede provocar metahemoglobinemia, sobre todo en lactantes",
    incorrectas: [
      "Aumenta la dureza sin efectos sanitarios",
      "Provoca precipitación inmediata de fosfatos"
    ]
  },
  {
    enunciado: "La escasez hídrica física se define como…",
    correcta: "Insuficiencia real del recurso respecto a la demanda",
    incorrectas: [
      "Problemas de acceso por falta de infraestructuras pese a recurso suficiente",
      "Exceso puntual de precipitaciones que causa avenidas"
    ]
  },
  {
    enunciado: "Una medida de gestión para reducir la presión sobre el recurso agrícola es…",
    correcta: "Implantar riego por goteo y programación eficiente",
    incorrectas: [
      "Incrementar el abonado nitrogenado para acelerar el crecimiento",
      "Abandonar el control de pérdidas en acequias"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el aumento de temperatura sobre la solubilidad del oxígeno en el agua?",
    correcta: "Disminuye la solubilidad del oxígeno disuelto",
    incorrectas: [
      "Aumenta indefinidamente la solubilidad",
      "No afecta a la solubilidad del oxígeno"
    ]
  },
  {
    enunciado: "Un acuífero libre se distingue porque…",
    correcta: "Su superficie superior coincide con el nivel freático",
    incorrectas: [
      "Está siempre por debajo del nivel del mar",
      "No admite infiltración por su baja permeabilidad"
    ]
  },
  {
    enunciado: "La porosidad efectiva de un medio geológico se relaciona con…",
    correcta: "El volumen de poros interconectados que permiten el flujo",
    incorrectas: [
      "El contenido total de minerales pesados",
      "La cantidad de agua ligada químicamente a arcillas"
    ]
  },
  {
    enunciado: "¿Qué práctica reduce el riesgo de contaminación difusa por nitratos?",
    correcta: "Ajustar el abonado a las necesidades del cultivo y evitar aportes antes de lluvias",
    incorrectas: [
      "Aumentar la dosis de fertilizante para compensar la lixiviación",
      "Aplicar fertilizantes exclusivamente en verano"
    ]
  },
  {
    enunciado: "La reutilización de aguas depuradas en España se regula principalmente por…",
    correcta: "El Real Decreto 1620/2007",
    incorrectas: [
      "El Real Decreto 1027/2007 (RITE)",
      "La Ley 34/2007 de calidad del aire"
    ]
  },
  {
    enunciado: "Las floraciones de cianobacterias en embalses se asocian a…",
    correcta: "Eutrofización y estratificación térmica en épocas cálidas",
    incorrectas: [
      "Aporte masivo de aguas frías y oxigenadas",
      "Ausencia total de nutrientes disueltos"
    ]
  },
  {
    enunciado: "¿Qué técnica instrumental permite detectar contaminantes orgánicos traza con alta sensibilidad?",
    correcta: "Cromatografía acoplada a espectrometría de masas",
    incorrectas: [
      "Medición visual de color en cubetas",
      "Determinación de sólidos por secado a 105 °C"
    ]
  },
  {
    enunciado: "Una consecuencia frecuente de la sobreexplotación de un acuífero continental es…",
    correcta: "Descenso del nivel piezométrico y subsidencia del terreno",
    incorrectas: [
      "Aumento sostenido del caudal de manantiales",
      "Recarga inmediata por inversión de flujo desde ríos"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el índice BMWP en ríos?",
    correcta: "Una puntuación basada en la tolerancia de familias de macroinvertebrados a la contaminación",
    incorrectas: [
      "Un índice de corrosividad del agua frente a tuberías",
      "Una medida directa de pH con unidades logarítmicas"
    ]
  },
  {
    enunciado: "En una ETAP, la coagulación-floculación tiene por objeto…",
    correcta: "Desestabilizar coloides y formar flóculos que sedimenten mejor",
    incorrectas: [
      "Oxidar amonio a nitrato mediante bacterias nitrificantes",
      "Reducir sales disueltas mediante presión osmótica"
    ]
  },
  {
    enunciado: "La desinfección con UV frente a la cloración presenta como ventaja principal…",
    correcta: "Inactivar patógenos sin generar subproductos halogenados",
    incorrectas: [
      "Aportar residual desinfectante de larga duración en la red",
      "Aumentar la alcalinidad y el pH del agua tratada"
    ]
  },
  {
    enunciado: "Una estrategia de demanda para afrontar la escasez de agua urbana es…",
    correcta: "Reducción de pérdidas en red y tarificación por bloques crecientes",
    incorrectas: [
      "Fomentar usos de agua de alta presión en jardines",
      "Suprimir contadores individuales en edificios"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la contaminación puntual frente a la difusa?",
    correcta: "La puntual procede de un foco identificable como una descarga; la difusa es dispersa en el territorio",
    incorrectas: [
      "La puntual es siempre agrícola; la difusa, siempre industrial",
      "La puntual afecta solo a aguas subterráneas"
    ]
  },
  {
    enunciado: "En depuración, la eliminación biológica de nitrógeno requiere…",
    correcta: "Nitrificación (aerobia) seguida de desnitrificación (anóxica)",
    incorrectas: [
      "Coagulación con sales férricas a pH alto",
      "Evaporación del amonio a baja temperatura"
    ]
  },
  {
    enunciado: "Los microplásticos en ambientes acuáticos son preocupantes porque…",
    correcta: "Pueden transportar tóxicos, incorporarse a redes tróficas y afectar a la biota",
    incorrectas: [
      "Se disuelven rápidamente sin interacción ecológica",
      "Son inertes y se depositan de inmediato en el fondo sin movilidad"
    ]
  }
];
