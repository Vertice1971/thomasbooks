// temarios/15-el-modelado-de-las-zonas-aridas-el-problema-de-la-desertizacion-medidas-de-prevencion-y-correccion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué condición climática define principalmente a las zonas áridas?",
    correcta: "Baja precipitación anual y alta evapotranspiración potencial",
    incorrectas: [
      "Alta precipitación y baja evapotranspiración",
      "Precipitaciones regulares todo el año con humedad elevada"
    ]
  },
  {
    enunciado: "¿Cuál de estos índices se usa para delimitar regiones áridas, semiáridas y subhúmedas secas?",
    correcta: "Relación precipitación/ETP (UNEP/UNCCD)",
    incorrectas: [
      "Índice de color Munsell del suelo",
      "Índice de confort térmico UTCI"
    ]
  },
  {
    enunciado: "¿Qué proceso domina la meteorización en medios áridos cálidos?",
    correcta: "Termoclastia por grandes oscilaciones térmicas",
    incorrectas: [
      "Hidrólisis intensa por suelos saturados",
      "Crioclastia permanente por permafrost continuo"
    ]
  },
  {
    enunciado: "¿Qué es la haloclastia?",
    correcta: "Desintegración de rocas por cristalización de sales en poros y fisuras",
    incorrectas: [
      "Disolución de carbonatos por ácido carbónico",
      "Oxidación de minerales ferrosos en ambientes húmedos"
    ]
  },
  {
    enunciado: "En dinámica eólica, ¿qué modo de transporte salta en pequeños brincos a poca altura?",
    correcta: "La saltación",
    incorrectas: [
      "La suspensión",
      "La reptación de gravas gruesas exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué forma eólica típica presenta cuernos orientados a favor del viento?",
    correcta: "La duna barján",
    incorrectas: [
      "La duna parabólica con cuernos a barlovento",
      "La duna en estrella sin orientación preferente"
    ]
  },
  {
    enunciado: "¿Qué son los yardangs?",
    correcta: "Relieves alargados labrados por deflación y abrasión del viento",
    incorrectas: [
      "Conos volcánicos traquíticos",
      "Acumulaciones lacustres en abanico"
    ]
  },
  {
    enunciado: "¿Qué describe mejor un wadi o rambla?",
    correcta: "Un cauce efímero que solo lleva agua durante eventos de lluvia intensos",
    incorrectas: [
      "Un río perenne de caudal constante",
      "Un canal subterráneo permanentemente saturado"
    ]
  },
  {
    enunciado: "¿Qué proceso genera pavimentos desérticos o stone pavements?",
    correcta: "Deflación y reorganización de clastos que protegen al sustrato fino",
    incorrectas: [
      "Deposición de limos fluviales en llanuras de inundación frecuentes",
      "Compactación glaciar de till"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a los abanicos aluviales en medios áridos?",
    correcta: "Aporte episódico de sedimentos con grano decreciente desde el ápice",
    incorrectas: [
      "Estratificación cruzada exclusiva de dunas eólicas",
      "Depósitos finos homogéneos de diatomeas"
    ]
  },
  {
    enunciado: "¿Qué litologías favorecen paisajes de badlands en climas semiáridos?",
    correcta: "Margas y arcillas muy erodables",
    incorrectas: [
      "Cuarcitas masivas muy resistentes",
      "Granitos frescos con baja fracturación"
    ]
  },
  {
    enunciado: "¿Qué es la desertización según la UNCCD?",
    correcta: "Degradación de tierras en zonas áridas, semiáridas y subhúmedas secas por variabilidad climática y actividades humanas",
    incorrectas: [
      "Expansión natural del desierto por tectónica",
      "Aumento de la humedad del suelo por lluvias monzónicas"
    ]
  },
  {
    enunciado: "¿Cuál es una causa antrópica común de desertización?",
    correcta: "Sobrecarga ganadera y sobrepastoreo",
    incorrectas: [
      "Incremento de bosques de ribera",
      "Restauración de terrazas agrícolas tradicionales"
    ]
  },
  {
    enunciado: "¿Qué consecuencia biofísica directa tiene la pérdida de cubierta vegetal en áridos?",
    correcta: "Aumento de la deflación y del transporte eólico de sedimentos",
    incorrectas: [
      "Reducción de la aridez climática",
      "Disminución del albedo en cualquier caso"
    ]
  },
  {
    enunciado: "¿Qué indicador remoto se usa para evaluar la productividad y cobertura vegetal?",
    correcta: "Índices de vegetación como NDVI",
    incorrectas: [
      "Índice BMWP de macroinvertebrados fluviales",
      "Índice de rugosidad de dunas (DRI) no espectral"
    ]
  },
  {
    enunciado: "¿Qué medida preventiva reduce la erosión hídrica en laderas agrícolas áridas?",
    correcta: "Agricultura de conservación y laboreo en curvas de nivel",
    incorrectas: [
      "Laboreo a favor de máxima pendiente",
      "Eliminación completa de residuos de cosecha"
    ]
  },
  {
    enunciado: "¿Qué técnica ayuda a cosechar agua de lluvia a microescala?",
    correcta: "Medias lunas de infiltración y microcuencas",
    incorrectas: [
      "Diques de hormigón en cabeceras exclusivamente",
      "Drenaje profundo sin control de sales"
    ]
  },
  {
    enunciado: "¿Qué estructura reduce la velocidad del viento y fija arenas móviles?",
    correcta: "Barreras eólicas o sand fencing",
    incorrectas: [
      "Cortas a favor del viento sin obstáculos",
      "Zanjas longitudinales desprovistas de vegetación"
    ]
  },
  {
    enunciado: "¿Qué práctica mejora la estabilidad superficial y la infiltración en restauración?",
    correcta: "Acolchados orgánicos (mulching) y bioingeniería",
    incorrectas: [
      "Compactación mecánica intensa de la costra",
      "Rastrillado frecuente para exponer el suelo"
    ]
  },
  {
    enunciado: "¿Qué problema edáfico es frecuente por riegos inadecuados en áridos?",
    correcta: "Salinización y sodificación del suelo",
    incorrectas: [
      "Podzolización por exceso de lavado",
      "Lateritización masiva por meteorización química intensa"
    ]
  },
  {
    enunciado: "Para controlar la salinización, ¿qué combinación es adecuada?",
    correcta: "Lavado controlado y drenaje subsuperficial",
    incorrectas: [
      "Aumento del riego por aspersión sin drenaje",
      "Compactación del suelo para reducir percolación"
    ]
  },
  {
    enunciado: "¿Qué especies son preferibles en revegetación de dunas y laderas áridas?",
    correcta: "Autóctonas xerofíticas adaptadas a estrés hídrico",
    incorrectas: [
      "Mesófitas de sotobosque húmedo",
      "Exóticas ornamentales de alto consumo de agua"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el barniz del desierto?",
    correcta: "Película oscura rica en óxidos de Mn/Fe sobre clastos expuestos",
    incorrectas: [
      "Costra calcárea por precipitación de CaCO₃ exclusivamente",
      "Pátina de sílice blanca por disolución rápida"
    ]
  },
  {
    enunciado: "¿Qué condición favorece la formación de gypcretas y calcretas?",
    correcta: "Ciclos de humidificación–secado con aguas cargadas en Ca²⁺ o SO₄²⁻",
    incorrectas: [
      "Saturación permanente sin evaporación",
      "Lluvias constantes en bosque nuboso"
    ]
  },
  {
    enunciado: "En eventos torrenciales, ¿qué rasgo hidrológico es típico de ramblas?",
    correcta: "Altos caudales pico de corta duración y gran carga sólida",
    incorrectas: [
      "Caudales bajos pero constantes todo el año",
      "Marejada astronómica con oleaje de viento local"
    ]
  },
  {
    enunciado: "¿Qué técnica es adecuada para estabilizar cárcavas en restauración?",
    correcta: "Pequeños diques de retención y fajinas",
    incorrectas: [
      "Desbroce total de vegetación de ribera",
      "Apertura de canales rectilíneos a favor de pendiente"
    ]
  },
  {
    enunciado: "¿Qué variable de viento controla el inicio de la movilidad arenosa?",
    correcta: "Umbral de fricción superficial (velocidad crítica)",
    incorrectas: [
      "Temperatura del aire a 850 hPa exclusivamente",
      "Índice UV al mediodía"
    ]
  },
  {
    enunciado: "¿Qué práctica ganadera reduce la degradación en pastizales áridos?",
    correcta: "Pastoreo rotacional con periodos de descanso",
    incorrectas: [
      "Carga ganadera fija elevada todo el año",
      "Confinamiento permanente en vaguadas frágiles"
    ]
  },
  {
    enunciado: "¿Qué señal satelital sugiere movilidad dunar reciente?",
    correcta: "Desplazamiento medible de crestas en series temporales Sentinel/Landsat",
    incorrectas: [
      "Incremento del verde urbano en ciudades cercanas",
      "Aumento del brillo de lagos perennes de alta montaña"
    ]
  },
  {
    enunciado: "¿Qué herramienta modela erosión eólica a escala de parcela o explotación?",
    correcta: "Modelos como WEPS o RWEQ",
    incorrectas: [
      "Modelos de marea astronómica global",
      "Modelos de dispersión de contaminantes fluviales exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué combinación describe un sistema de bajada bien desarrollado?",
    correcta: "Pedimentos y glacis conectando laderas con llanuras endorreicas",
    incorrectas: [
      "Valles en U con morrenas frontales",
      "Karst de torre en calizas tropicales húmedas"
    ]
  },
  {
    enunciado: "¿Qué intervención antrópica agrava la deflación de suelos arenosos?",
    correcta: "Eliminación de residuos y laboreo fino a barlovento",
    incorrectas: [
      "Establecimiento de setos cortaviento",
      "Coberturas vegetales vivas"
    ]
  },
  {
    enunciado: "¿Qué es una sabkha?",
    correcta: "Llanura costera o endorreica salina con evaporitas superficiales",
    incorrectas: [
      "Delta perenne de aguas dulces",
      "Plataforma de abrasión marina activa en acantilado"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el biochar en suelos áridos restaurados?",
    correcta: "Aumenta la retención de agua y el carbono del suelo",
    incorrectas: [
      "Reduce drásticamente la porosidad y la infiltración",
      "Disuelve sales sin necesidad de drenaje"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una duna parabólica frente a una barján?",
    correcta: "Cuernos hacia barlovento, fijada parcialmente por vegetación",
    incorrectas: [
      "Cuernos a sotavento y sin vegetación",
      "Cresta radial sin dirección dominante de viento"
    ]
  },
  {
    enunciado: "¿Qué variable agronómica ayuda a reducir escorrentía y erosión en laderas?",
    correcta: "Cobertura del suelo con restos vegetales (mulch)",
    incorrectas: [
      "Suelo desnudo para favorecer el calentamiento",
      "Eliminación de líneas de contorno"
    ]
  },
  {
    enunciado: "¿Qué programa internacional promueve la Neutralidad en la Degradación de Tierras (LDN)?",
    correcta: "Agenda 2030 con el ODS 15.3 en el marco de la UNCCD",
    incorrectas: [
      "Convenio de Ramsar exclusivamente",
      "Protocolo de Montreal sobre ozono"
    ]
  },
  {
    enunciado: "¿Qué resultado se busca con barreras de paja y ramas en superficie arenosa?",
    correcta: "Reducir velocidad del viento en la capa límite y atrapar arena",
    incorrectas: [
      "Aumentar la velocidad de deflación",
      "Impulsar la escorrentía superficial"
    ]
  },
  {
    enunciado: "¿Qué combinación de medidas es coherente con restauración adaptativa en áridos?",
    correcta: "Monitoreo con indicadores, ajuste de manejos y mantenimiento de infraestructuras suaves",
    incorrectas: [
      "Intervención única sin seguimiento",
      "Sustitución de especies autóctonas por césped irrigado"
    ]
  },
  {
    enunciado: "¿Qué práctica reduce el polvo atmosférico procedente de pistas en zonas secas?",
    correcta: "Estabilización superficial y control de tráfico",
    incorrectas: [
      "Rasanteado frecuente que deje suelo suelto",
      "Eliminación de drenajes laterales"
    ]
  },
  {
    enunciado: "En medios áridos con yesos, ¿qué riesgo geomorfológico destaca?",
    correcta: "Colapsos rápidos por carstificación de evaporitas",
    incorrectas: [
      "Glaciarismo activo con morrenas recientes",
      "Subsidencia por fusión de permafrost"
    ]
  }
];
