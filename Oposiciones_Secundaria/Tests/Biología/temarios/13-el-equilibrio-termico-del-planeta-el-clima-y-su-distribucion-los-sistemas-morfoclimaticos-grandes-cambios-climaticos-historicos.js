// temarios/13-el-equilibrio-termico-del-planeta-el-clima-y-su-distribucion-los-sistemas-morfoclimaticos-grandes-cambios-climaticos-historicos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué expresa el balance radiativo terrestre a gran escala?",
    correcta: "La diferencia entre radiación solar absorbida y radiación infrarroja emitida por la Tierra-atmósfera",
    incorrectas: [
      "La suma de los vientos dominantes de ambos hemisferios",
      "El cociente entre evaporación y precipitación global"
    ]
  },
  {
    enunciado: "¿Qué superficie presenta, en general, mayor albedo?",
    correcta: "La nieve fresca",
    incorrectas: [
      "El océano en calma al mediodía",
      "El bosque húmedo tropical"
    ]
  },
  {
    enunciado: "¿Cuál es el principal gas de efecto invernadero natural por abundancia y variabilidad?",
    correcta: "El vapor de agua (H₂O)",
    incorrectas: [
      "El ozono troposférico (O₃)",
      "El hexafluoruro de azufre (SF₆)"
    ]
  },
  {
    enunciado: "¿Qué célula atmosférica transporta calor desde el ecuador hacia latitudes subtropicales?",
    correcta: "La célula de Hadley",
    incorrectas: [
      "La célula polar",
      "La célula de Walker"
    ]
  },
  {
    enunciado: "¿Qué corriente oceánica cálida suaviza el clima del noroeste de Europa?",
    correcta: "La Corriente del Golfo",
    incorrectas: [
      "La Corriente de Humboldt",
      "La Corriente de Canarias"
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental hay entre clima y tiempo atmosférico?",
    correcta: "El clima es la estadística de las condiciones atmosféricas a largo plazo; el tiempo es el estado instantáneo",
    incorrectas: [
      "El clima solo incluye precipitación y el tiempo solo temperatura",
      "El clima depende de la altitud y el tiempo no"
    ]
  },
  {
    enunciado: "En la clasificación de Köppen-Geiger, ¿qué letra principal identifica climas áridos?",
    correcta: "B",
    incorrectas: [
      "A",
      "D"
    ]
  },
  {
    enunciado: "¿Qué factor explica en gran medida la estacionalidad térmica en latitudes medias?",
    correcta: "La inclinación del eje terrestre (oblicuidad) y la variación del ángulo de incidencia solar",
    incorrectas: [
      "La variación anual del albedo de los océanos",
      "La excentricidad extrema de la órbita terrestre cada año"
    ]
  },
  {
    enunciado: "¿Qué zona de convergencia condiciona lluvias convectivas en regiones ecuatoriales?",
    correcta: "La Zona de Convergencia Intertropical (ZCIT)",
    incorrectas: [
      "El frente polar",
      "La dorsal subtropical"
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo típico de los climas mediterráneos?",
    correcta: "Veranos secos por subsidencia subtropical y advección de masas cálidas",
    incorrectas: [
      "Inviernos extremadamente fríos por anticiclón térmico permanente",
      "Lluvias máximas en pleno verano por monzón continental"
    ]
  },
  {
    enunciado: "¿Qué variable climática está más directamente asociada a la aridez en Köppen?",
    correcta: "La relación entre precipitación anual y evapotranspiración potencial",
    incorrectas: [
      "La amplitud térmica diaria exclusivamente",
      "El número de días con niebla"
    ]
  },
  {
    enunciado: "¿Qué clima de Köppen corresponde, en general, a selvas ecuatoriales siempre verdes?",
    correcta: "Af",
    incorrectas: [
      "Cs",
      "Df"
    ]
  },
  {
    enunciado: "¿Cuál es una característica de los climas oceánicos templados de la fachada occidental de Europa?",
    correcta: "Términos suaves, poca amplitud térmica anual y lluvias frecuentes todo el año",
    incorrectas: [
      "Veranos muy secos y calurosos por subsidencia persistente",
      "Inviernos extremadamente gélidos con permafrost extendido"
    ]
  },
  {
    enunciado: "¿Qué proceso geomorfológico domina en sistemas morfoclimáticos fríos glaciares?",
    correcta: "Erosión en artesa, sobreexcavación y morrenas de acumulación",
    incorrectas: [
      "Deflación y formación de yardangs",
      "Lateritización intensa y suelos bauxíticos"
    ]
  },
  {
    enunciado: "En ambientes periglaciares, ¿qué proceso es típico?",
    correcta: "Gelifracción y suelos poligonales por ciclos de hielo–deshielo",
    incorrectas: [
      "Formación de loess por precipitación química",
      "Karstificación por disolución de halita"
    ]
  },
  {
    enunciado: "¿Qué rasgo morfodinámico distingue a los ambientes áridos?",
    correcta: "Dominio de procesos eólicos y de avenidas torrenciales episódicas",
    incorrectas: [
      "Meteorización química intensa y continua",
      "Glaciarismo de valle activo todo el año"
    ]
  },
  {
    enunciado: "¿Qué define mejor un sistema morfoclimático templado húmedo?",
    correcta: "Modelado fluvial y laderas por meteorización química moderada a alta",
    incorrectas: [
      "Deflación generalizada y dunas longitudinales",
      "Erosión glacial con drumlins y kames extensos"
    ]
  },
  {
    enunciado: "¿Qué proceso favorece suelos lateríticos en regiones intertropicales húmedas?",
    correcta: "Meteorización química profunda con lixiviación intensa",
    incorrectas: [
      "Helada persistente y crioturbación",
      "Deflación por vientos fríos y secos"
    ]
  },
  {
    enunciado: "¿Qué episodios térmicos cálidos destacan en el Cenozoico temprano?",
    correcta: "El Máximo Térmico del Paleoceno-Eoceno (PETM)",
    incorrectas: [
      "La glaciación gondwánica del Carbonífero",
      "La glaciación ordovícico-silúrica"
    ]
  },
  {
    enunciado: "¿Qué ciclos astronómicos explican parte de la variabilidad cuaternaria del clima?",
    correcta: "Los ciclos de Milankovitch: excentricidad, oblicuidad y precesión",
    incorrectas: [
      "El ciclo solar de 1 año y la nutación diaria",
      "La inversión magnética bianual del campo terrestre"
    ]
  },
  {
    enunciado: "¿Qué proxy paleoclimático registra composición del aire y temperatura pasadas en altas latitudes?",
    correcta: "Los testigos de hielo con burbujas de aire atrapadas",
    incorrectas: [
      "Las fallas inversas con estrías de fricción",
      "Las dunas parabólicas modernas"
    ]
  },
  {
    enunciado: "¿Qué evento tectónico afectó a la circulación oceánica y al clima durante el Neógeno?",
    correcta: "El cierre del istmo de Panamá y la reorganización termo-halina",
    incorrectas: [
      "La apertura de Tetis en el Jurásico",
      "La colisión India–Asia en el Cretácico temprano"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el frente polar?",
    correcta: "Separación entre masas de aire tropical y polar en latitudes medias",
    incorrectas: [
      "Zona de convergencia ecuatorial de alisios",
      "Capa límite marina costera en subsidencia"
    ]
  },
  {
    enunciado: "¿Cuál es el principal mecanismo de pérdida de energía de la Tierra al espacio?",
    correcta: "Emisión de radiación infrarroja de onda larga",
    incorrectas: [
      "Reflexión de onda corta por albedo exclusivamente",
      "Conducción térmica hacia el vacío"
    ]
  },
  {
    enunciado: "¿Qué papel tienen los aerosoles sulfatados de grandes erupciones en el clima?",
    correcta: "Aumentan el albedo planetario y tienden a enfriar temporalmente",
    incorrectas: [
      "Incrementan el efecto invernadero durante siglos",
      "Provocan calentamiento inmediato y sostenido"
    ]
  },
  {
    enunciado: "¿Qué patrón general presentan las precipitaciones en los climas monzónicos?",
    correcta: "Fuerte estacionalidad con veranos muy húmedos e inviernos secos",
    incorrectas: [
      "Régimen homogéneo todo el año",
      "Sequía permanente salvo eventos de ENSO"
    ]
  },
  {
    enunciado: "¿Qué clima de Köppen corresponde a los desiertos cálidos subtropicales?",
    correcta: "BWh",
    incorrectas: [
      "Cfb",
      "Dfc"
    ]
  },
  {
    enunciado: "¿Qué factor explica la aridez costera del desierto de Atacama?",
    correcta: "La corriente fría de Humboldt y la subsidencia subtropical",
    incorrectas: [
      "La proximidad inmediata de la ZCIT todo el año",
      "La fusión glacial estacional a gran escala"
    ]
  },
  {
    enunciado: "¿Qué indicador geomorfológico identifica el paso de un glaciar por un valle?",
    correcta: "Perfil en artesa en U y morrenas laterales",
    incorrectas: [
      "Valles en V y barras de meandro",
      "Dunas parabólicas y yardangs"
    ]
  },
  {
    enunciado: "¿Qué es la amplitud térmica anual?",
    correcta: "La diferencia entre temperatura media del mes más cálido y del mes más frío",
    incorrectas: [
      "La diferencia entre máxima y mínima diarias",
      "La media de temperaturas estivales"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la circulación termo-halina?",
    correcta: "Una cinta transportadora global impulsada por diferencias de temperatura y salinidad",
    incorrectas: [
      "Un sistema eólico local en capas superficiales",
      "Un flujo exclusivamente mareal sin gradientes densos"
    ]
  },
  {
    enunciado: "¿Qué rasgo climático distingue a las regiones polares?",
    correcta: "Bajo balance de radiación entrante y albedo elevado",
    incorrectas: [
      "ZCIT permanente con convección profunda",
      "Evapotranspiración máxima anual"
    ]
  },
  {
    enunciado: "¿Qué registro biológico se usa como proxy de temperatura marina superficial histórica?",
    correcta: "Foraminíferos planctónicos y la razón Mg/Ca o isótopos de oxígeno en sus conchas",
    incorrectas: [
      "Diatomeas bentónicas de lagos hipersalinos exclusivamente",
      "Granulometría de arenas eólicas modernas"
    ]
  },
  {
    enunciado: "¿Qué consecuencia morfoclimática es típica de las lluvias torrenciales en medios áridos?",
    correcta: "Desarrollo de cárcavas y abanicos aluviales",
    incorrectas: [
      "Formación de morrenas de fondo",
      "Lateritización homogénea del perfil"
    ]
  },
  {
    enunciado: "¿Qué clima domina en la mayor parte de la España interior peninsular?",
    correcta: "Mediterráneo continentalizado con inviernos fríos y veranos secos y calurosos",
    incorrectas: [
      "Oceánico templado húmedo sin estiaje",
      "Polar de tundra con permafrost continuo"
    ]
  },
  {
    enunciado: "¿Qué evento marca el inicio del Cuaternario y sus glaciaciones recurrentes?",
    correcta: "El establecimiento del sistema de glaciaciones del Pleistoceno",
    incorrectas: [
      "El Máximo Térmico del Paleoceno-Eoceno",
      "El evento anóxico oceánico del Cretácico tardío"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre latitud y balance energético?",
    correcta: "Latitudes bajas presentan superávit de radiación y las altas déficit, compensados por transporte atmosférico y oceánico",
    incorrectas: [
      "El superávit se sitúa en los polos y el déficit en el ecuador",
      "No existe relación; depende solo de la altitud"
    ]
  },
  {
    enunciado: "¿Qué subproducto geomorfológico es típico del retroceso glaciar reciente?",
    correcta: "Lagos proglaciares y morrenas de retroceso",
    incorrectas: [
      "Campos de dunas longitudinales",
      "Cárcavas lateríticas"
    ]
  },
  {
    enunciado: "¿Qué clasifica Thornthwaite de forma prioritaria?",
    correcta: "Los tipos de clima según el balance hídrico y la evapotranspiración potencial",
    incorrectas: [
      "Los climas según el número de días con tormenta eléctrica",
      "Los climas solo por la amplitud térmica diaria"
    ]
  },
  {
    enunciado: "¿Qué condición favorece la formación de desiertos subtropicales en los 20–30° de latitud?",
    correcta: "La subsidencia de los anticiclones subtropicales y la divergencia en superficie",
    incorrectas: [
      "La convergencia de alisios con convección permanente",
      "El ascenso forzado por frentes fríos frecuentes"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el deshielo estacional del ártico sobre el albedo y el balance térmico regional?",
    correcta: "Reduce el albedo y favorece la retroalimentación positiva de calentamiento",
    incorrectas: [
      "Aumenta el albedo y enfría persistentemente",
      "No altera el balance energético por compensación oceánica instantánea"
    ]
  }
];

