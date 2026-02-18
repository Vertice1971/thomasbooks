// temarios/37-las-plantas-ii-coniferofitos-y-angioespermatofitos-caracteres-generales-origen-clasificacion-y-ecologia-familias-y-especies-de-arboles-y-arbustos-espanoles-mas-representativos-la-destruccion-de-los-bosques-la-repoblacion-y-las-medidas-preventivas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza a las coníferas frente a otras plantas leñosas?",
    correcta: "Semillas desnudas sobre escamas de conos",
    incorrectas: [
      "Semillas encerradas en ovario que origina fruto",
      "Doble fecundación con endospermo triploide"
    ]
  },
  {
    enunciado: "Una adaptación foliar típica de coníferas de climas fríos o secos es:",
    correcta: "Hojas aciculares con cutícula gruesa y estomas hundidos",
    incorrectas: [
      "Hojas grandes y finas sin cutícula",
      "Hojas suculentas con estomas sobresalientes"
    ]
  },
  {
    enunciado: "El xilema de muchas coníferas está formado principalmente por:",
    correcta: "Traqueidas",
    incorrectas: [
      "Elementos de vaso exclusivamente",
      "Células cribosas con placas de perforación"
    ]
  },
  {
    enunciado: "¿Qué familia agrupa a pinos, abetos y píceas?",
    correcta: "Pinaceae",
    incorrectas: [
      "Cupressaceae",
      "Taxaceae"
    ]
  },
  {
    enunciado: "Juniperus y Cupressus pertenecen a la familia:",
    correcta: "Cupressaceae",
    incorrectas: [
      "Pinaceae",
      "Araucariaceae"
    ]
  },
  {
    enunciado: "El tejo (Taxus baccata) se distingue por:",
    correcta: "Semilla rodeada por un arilo carnoso y alta toxicidad",
    incorrectas: [
      "Conos leñosos con resina abundante",
      "Hojas caducas y fruto verdadero"
    ]
  },
  {
    enunciado: "Entre las coníferas mediterráneas nativas destacan:",
    correcta: "Pinus halepensis, P. pinea y P. pinaster",
    incorrectas: [
      "Abies nordmanniana y Picea abies",
      "Larix decidua y Pseudotsuga menziesii"
    ]
  },
  {
    enunciado: "Tetraclinis articulata en España se localiza de forma natural principalmente en:",
    correcta: "Zonas termomediterráneas del sureste",
    incorrectas: [
      "Cordillera Cantábrica húmeda",
      "Pirineo subalpino"
    ]
  },
  {
    enunciado: "Una característica definitoria de las angiospermas es:",
    correcta: "Carpelos cerrados que tras la fecundación originan frutos",
    incorrectas: [
      "Conos poliníferos y semilleros",
      "Única fecundación con endospermo haploide"
    ]
  },
  {
    enunciado: "La doble fecundación en angiospermas produce:",
    correcta: "Cigoto diploide y endospermo triploide",
    incorrectas: [
      "Dos embriones diploides",
      "Cigoto triploide y endospermo diploide"
    ]
  },
  {
    enunciado: "Un rasgo frecuente de monocotiledóneas es:",
    correcta: "Hojas con nerviación paralela",
    incorrectas: [
      "Pollen triaperturado y hojas reticuladas siempre",
      "Flores con piezas en múltiplos de 5 exclusivamente"
    ]
  },
  {
    enunciado: "Entre las eudicotiledóneas ibéricas de gran importancia arbórea figuran:",
    correcta: "Quercus, Fagus y Castanea",
    incorrectas: [
      "Pinus, Abies y Picea",
      "Aloe, Agave y Phoenix"
    ]
  },
  {
    enunciado: "¿Cuál de estas especies es un encinar típico mediterráneo?",
    correcta: "Quercus ilex subsp. ballota",
    incorrectas: [
      "Fagus sylvatica",
      "Betula pendula"
    ]
  },
  {
    enunciado: "El alcornoque (Quercus suber) es relevante por:",
    correcta: "Su corteza suberosa explotada como corcho",
    incorrectas: [
      "Su fruto carnoso comestible similar a drupa",
      "Ser una conífera resinosa"
    ]
  },
  {
    enunciado: "En riberas ibéricas son frecuentes:",
    correcta: "Populus nigra y Salix alba",
    incorrectas: [
      "Juniperus thurifera y Tetraclinis articulata",
      "Pinus sylvestris y Abies alba"
    ]
  },
  {
    enunciado: "La coevolución planta-polinizador explica en gran parte:",
    correcta: "La diversidad floral y los síndromes de polinización zoófila",
    incorrectas: [
      "La ausencia de frutos carnosos en ambientes mediterráneos",
      "La homogeneidad morfológica de las flores"
    ]
  },
  {
    enunciado: "Una consecuencia de la deforestación y cambio de uso del suelo es:",
    correcta: "Aumento de erosión y pérdida de suelo fértil",
    incorrectas: [
      "Mayor infiltración y aumento de caudal base siempre",
      "Reducción de procesos de desertificación"
    ]
  },
  {
    enunciado: "Un motor clave de incendios en el Mediterráneo es:",
    correcta: "Acumulación de combustible fino y olas de calor estivales",
    incorrectas: [
      "Exceso de humedad estival continua",
      "Carencia de interfaz urbano-forestal"
    ]
  },
  {
    enunciado: "Una plaga/afección forestal relevante en coníferas ibéricas es:",
    correcta: "Procesionaria del pino (Thaumetopoea pityocampa)",
    incorrectas: [
      "Filoxera de la vid en raíces",
      "Mildiu del olivo como principal defoliador"
    ]
  },
  {
    enunciado: "La fragmentación del hábitat provoca:",
    correcta: "Aislamiento poblacional y pérdida de conectividad ecológica",
    incorrectas: [
      "Incremento garantizado de diversidad genética",
      "Mayor resiliencia a incendios por continuidad total"
    ]
  },
  {
    enunciado: "Una medida de restauración forestal basada en buenas prácticas es:",
    correcta: "Uso de especies autóctonas y procedencias locales",
    incorrectas: [
      "Plantar monocultivos exóticos de crecimiento rápido siempre",
      "Reforestar sin considerar el clima futuro"
    ]
  },
  {
    enunciado: "La regeneración natural se prioriza cuando:",
    correcta: "Existe banco de semillas, rebrote o proximidad de fuentes de propágulos",
    incorrectas: [
      "El suelo está completamente perdido por cárcavas activas",
      "No existen individuos maduros a más de 50 km pero se confía al azar"
    ]
  },
  {
    enunciado: "Para aumentar la resiliencia de las masas repobladas conviene:",
    correcta: "Estructuras mixtas (específicas y etarias) y mayor diversidad",
    incorrectas: [
      "Uniformidad extrema de una sola especie",
      "Densidades máximas sin claras"
    ]
  },
  {
    enunciado: "Una técnica para estabilizar laderas tras incendio es:",
    correcta: "Fajinas, acolchados y microterrazas en curvas de nivel",
    incorrectas: [
      "Labrar en pendiente sin control",
      "Arrasar restos y dejar suelo desnudo"
    ]
  },
  {
    enunciado: "La gestión del combustible para prevención de incendios incluye:",
    correcta: "Desbroces, clareos, pastoreo dirigido y fuego prescrito",
    incorrectas: [
      "Prohibir cualquier intervención en el sotobosque",
      "Aumentar la densidad de arbolado sin límite"
    ]
  },
  {
    enunciado: "En interfaz urbano-forestal, una medida preventiva es:",
    correcta: "Fajas perimetrales y ordenación del combustible junto a edificaciones",
    incorrectas: [
      "Acumular restos leñosos junto a viviendas",
      "Plantar especies pirófitas de alta inflamabilidad cerca de casas"
    ]
  },
  {
    enunciado: "El pino piñonero (Pinus pinea) se reconoce por:",
    correcta: "Copa aparasolada y piñones comestibles",
    incorrectas: [
      "Acículas triples muy cortas y conos pequeños",
      "Presencia de acículas solitarias a lo largo de la rama"
    ]
  },
  {
    enunciado: "¿Qué especie forma bosques caducifolios húmedos en la España eurosiberiana?",
    correcta: "Fagus sylvatica",
    incorrectas: [
      "Quercus coccifera",
      "Olea europaea var. sylvestris"
    ]
  },
  {
    enunciado: "El madroño (Arbutus unedo) es un arbusto/arbolito típico de:",
    correcta: "Matorral mediterráneo silicícola",
    incorrectas: [
      "Riberas aluviales permanentemente inundadas",
      "Alta montaña por encima del límite forestal"
    ]
  },
  {
    enunciado: "Una función ecosistémica clave de los bosques es:",
    correcta: "Regulación del ciclo hidrológico y captura de carbono",
    incorrectas: [
      "Aumento de islas de calor y escorrentía inmediata",
      "Reducción de la biodiversidad regional"
    ]
  },
  {
    enunciado: "Los pinares resineros se han aprovechado históricamente para:",
    correcta: "Obtención de resinas y trementinas",
    incorrectas: [
      "Producción de látex natural",
      "Extracción de corcho"
    ]
  },
  {
    enunciado: "En restauración, la planta de calidad suele ser:",
    correcta: "En contenedor, raíz bien desarrollada y posible micorrización",
    incorrectas: [
      "A raíz desnuda en pleno verano",
      "Con sistema radicular enrollado y torsionado"
    ]
  },
  {
    enunciado: "Un indicador de éxito en repoblaciones a medio plazo es:",
    correcta: "Supervivencia, crecimiento y reducción de erosión en parcelas permanentes",
    incorrectas: [
      "Sólo el número plantado el primer día",
      "La altura media sin considerar mortalidad"
    ]
  },
  {
    enunciado: "La ordenación en mosaico del paisaje busca:",
    correcta: "Discontinuidades de combustible y diversidad de usos que limiten grandes incendios",
    incorrectas: [
      "Continuidad homogénea para facilitar el avance del fuego",
      "Eliminar áreas agrícolas para favorecer masas densas"
    ]
  },
  {
    enunciado: "Una especie arbórea mediterránea esclerófila de fruto drupáceo es:",
    correcta: "Olea europaea var. sylvestris",
    incorrectas: [
      "Pinus nigra",
      "Abies alba"
    ]
  },
  {
    enunciado: "El pinsapo (Abies pinsapo) en España es:",
    correcta: "Conífera relíctica en sierras béticas, de alto interés de conservación",
    incorrectas: [
      "Introducida y muy invasora en dunas atlánticas",
      "Un híbrido reciente de vivero sin valor ecológico"
    ]
  },
  {
    enunciado: "La cupresácea de bayas azuladas cerosas muy común en la Península es:",
    correcta: "Juniperus oxycedrus / J. phoenicea (enebros y sabinas)",
    incorrectas: [
      "Cedrus atlantica",
      "Picea sitchensis"
    ]
  },
  {
    enunciado: "En prevención de plagas forestales, una práctica recomendable es:",
    correcta: "Mezclar especies y favorecer estructura diversa para reducir vulnerabilidad",
    incorrectas: [
      "Monocultivo extenso de una sola especie susceptible",
      "Suprimir depredadores naturales y aves insectívoras"
    ]
  },
  {
    enunciado: "Una ventaja hidráulica de las coníferas en ambientes fríos es:",
    correcta: "Mayor seguridad frente a cavitación por predominio de traqueidas",
    incorrectas: [
      "Mayor eficiencia pero menor seguridad por vasos muy anchos",
      "Ausencia de lignina en el xilema"
    ]
  },
  {
    enunciado: "La principal vía de polinización en coníferas es:",
    correcta: "Anemofilia",
    incorrectas: [
      "Zoofilia insectívora generalizada",
      "Ornitofilia dominante"
    ]
  },
  {
    enunciado: "Una medida social clave para prevenir incendios es:",
    correcta: "Educación ambiental y protocolos en actividades recreativas",
    incorrectas: [
      "Incrementar quemas agrícolas en días de viento",
      "Permitir acampadas sin control en verano"
    ]
  }
];
