// temarios/04-magmatismo-las-rocas-igneas-mas-importantes.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué entendemos por magmatismo en geología?",
    correcta: "El conjunto de procesos de generación, ascenso, diferenciación y solidificación del magma",
    incorrectas: [
      "Únicamente la erupción volcánica en superficie",
      "Solo la cristalización lenta en profundidad"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes NO es un mecanismo principal de formación de magma?",
    correcta: "Aumento de la gravedad local",
    incorrectas: [
      "Aumento de temperatura",
      "Disminución de presión (descompresión)"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la presencia de H2O y CO2 en la fusión de las rocas?",
    correcta: "Descienden el punto de fusión favoreciendo la fusión parcial",
    incorrectas: [
      "Elevan el punto de fusión dificultando la fusión",
      "No tienen efecto termodinámico apreciable"
    ]
  },
  {
    enunciado: "¿Cuál es el principal componente químico de los magmas?",
    correcta: "Silicatos con diferentes proporciones de SiO2, Al, Fe, Mg, Ca, Na y K",
    incorrectas: [
      "Halogenuros dominantes como NaCl y KCl",
      "Carbonatos puros de Ca y Mg"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un magma basáltico respecto a uno riolítico?",
    correcta: "Menor contenido en sílice y menor viscosidad",
    incorrectas: [
      "Mayor contenido en sílice y mayor viscosidad",
      "Igual contenido en sílice y mayor viscosidad"
    ]
  },
  {
    enunciado: "La serie de Bowen describe:",
    correcta: "El orden de cristalización de minerales durante el enfriamiento del magma",
    incorrectas: [
      "La secuencia de erupciones históricas de un volcán",
      "La deformación de rocas por esfuerzos tectónicos"
    ]
  },
  {
    enunciado: "¿Cuál es la asociación correcta de minerales en la serie discontinua de Bowen?",
    correcta: "Olivino → piroxeno → anfíbol → biotita",
    incorrectas: [
      "Cuarzo → feldespato potásico → plagioclasa cálcica → olivino",
      "Moscovita → biotita → piroxeno → olivino"
    ]
  },
  {
    enunciado: "La cristalización fraccionada tiende a:",
    correcta: "Enriquecer el magma residual en sílice y componentes volátiles",
    incorrectas: [
      "Empobrecer el magma residual en sílice de forma progresiva",
      "No modificar la composición del magma"
    ]
  },
  {
    enunciado: "¿Qué proceso implica mezcla física de dos magmas con composiciones diferentes?",
    correcta: "Magma mixing",
    incorrectas: [
      "Asimilación cortical",
      "Metamorfismo de contacto"
    ]
  },
  {
    enunciado: "¿Qué cuerpo magmático es típicamente tabular y corta la estratificación preexistente?",
    correcta: "Dique",
    incorrectas: [
      "Sill",
      "Lacolito"
    ]
  },
  {
    enunciado: "Un batolito se define como:",
    correcta: "Un gran cuerpo intrusivo de extensión kilométrica y forma irregular",
    incorrectas: [
      "Un manto tabular concordante de pocos metros de espesor",
      "Un cono volcánico construido por piroclastos"
    ]
  },
  {
    enunciado: "¿Qué textura indica enfriamiento lento a gran profundidad?",
    correcta: "Fanerítica (cristales visibles)",
    incorrectas: [
      "Afanítica (cristales muy finos)",
      "Vítrea (sin cristales)"
    ]
  },
  {
    enunciado: "¿Qué textura refleja dos etapas de enfriamiento, una lenta y otra rápida?",
    correcta: "Porfídica",
    incorrectas: [
      "Pegmatítica",
      "Vesicular"
    ]
  },
  {
    enunciado: "La obsidiana es una roca con textura:",
    correcta: "Vítrea, producto de enfriamiento muy rápido",
    incorrectas: [
      "Fanerítica con cristales grandes",
      "Porfídica con fenocristales de cuarzo"
    ]
  },
  {
    enunciado: "¿Qué roca volcánica suele flotar en agua por su elevada vesicularidad?",
    correcta: "Pumita",
    incorrectas: [
      "Escoria",
      "Traquita"
    ]
  },
  {
    enunciado: "Asocia correctamente equivalentes plutónicos y volcánicos:",
    correcta: "Granito – riolita; diorita – andesita; gabro – basalto",
    incorrectas: [
      "Granito – andesita; diorita – basalto; gabro – riolita",
      "Granito – basalto; diorita – riolita; gabro – andesita"
    ]
  },
  {
    enunciado: "¿Cuál es la roca ígnea más abundante de la corteza oceánica?",
    correcta: "Basalto",
    incorrectas: [
      "Riolita",
      "Sienita"
    ]
  },
  {
    enunciado: "Las peridotitas son rocas:",
    correcta: "Ultramáficas, dominadas por olivino y piroxeno",
    incorrectas: [
      "Félsicas, ricas en cuarzo y feldespato",
      "Intermedias, ricas en anfíboles"
    ]
  },
  {
    enunciado: "¿Qué ambiente tectónico produce magmas basálticos por descompresión?",
    correcta: "Dorsales mediooceánicas y riftes",
    incorrectas: [
      "Zonas de subducción",
      "Cinturones de colisión continental avanzada"
    ]
  },
  {
    enunciado: "El magmatismo calcoalcalino es típico de:",
    correcta: "Zonas de subducción en márgenes convergentes",
    incorrectas: [
      "Pliegues intracratónicos",
      "Transformantes oceánicas puras"
    ]
  },
  {
    enunciado: "¿Qué define mejor una ignimbrita?",
    correcta: "Depósito consolidado de flujos piroclásticos ricos en pómez y ceniza",
    incorrectas: [
      "Colada basáltica masiva de baja viscosidad",
      "Acumulación de bombas basálticas soldadas"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes rocas es típicamente félsica?",
    correcta: "Granito",
    incorrectas: [
      "Gabro",
      "Basalto"
    ]
  },
  {
    enunciado: "¿Qué parámetro físico controla fuertemente la explosividad volcánica?",
    correcta: "La viscosidad del magma y el contenido en gases",
    incorrectas: [
      "La altitud del volcán exclusivamente",
      "La dirección del viento en superficie"
    ]
  },
  {
    enunciado: "Una pegmatita se caracteriza por:",
    correcta: "Cristales muy gruesos y enriquecimiento en volátiles e incompatibles",
    incorrectas: [
      "Cristales microscópicos y textura vítrea",
      "Estructura bandeada por flujo"
    ]
  },
  {
    enunciado: "¿Qué término describe el arrastre de fragmentos de roca encajante por el magma?",
    correcta: "Xenolitos",
    incorrectas: [
      "Fenocristales",
      "Líticos piroclásticos"
    ]
  },
  {
    enunciado: "¿Cuál es la principal diferencia entre rocas plutónicas y volcánicas?",
    correcta: "El lugar de solidificación y la velocidad de enfriamiento",
    incorrectas: [
      "La presencia o ausencia de sílice",
      "El contenido total de agua estructural"
    ]
  },
  {
    enunciado: "La traquita es el equivalente volcánico aproximado de:",
    correcta: "Sienita",
    incorrectas: [
      "Diorita",
      "Peridotita"
    ]
  },
  {
    enunciado: "¿Qué textura se asocia a lavas muy fluidas con superficie lisa y cuerda?",
    correcta: "Pahoehoe",
    incorrectas: [
      "Aa",
      "Fiamme soldadas"
    ]
  },
  {
    enunciado: "¿Qué roca hipoabisal típica presenta fenocristales en matriz fina?",
    correcta: "Pórfido",
    incorrectas: [
      "Toba",
      "Anortosita"
    ]
  },
  {
    enunciado: "En un arco volcánico de subducción, la roca volcánica dominante suele ser:",
    correcta: "Andesita",
    incorrectas: [
      "Komatiita",
      "Traquita alcalina de dorsal"
    ]
  },
  {
    enunciado: "¿Qué indica una textura vesicular en una roca volcánica?",
    correcta: "Desgasificación rápida del magma durante la solidificación",
    incorrectas: [
      "Cristalización lenta en profundidad",
      "Mezcla de dos magmas sin exsolución gaseosa"
    ]
  },
  {
    enunciado: "Las rocas toleíticas son típicas de:",
    correcta: "Basaltos de dorsal oceánica (MORB)",
    incorrectas: [
      "Riolitas de caldera explosiva",
      "Traquitas alcalinas de rift continental"
    ]
  },
  {
    enunciado: "Un lacolito es:",
    correcta: "Un cuerpo intrusivo en forma de lente que arquea las capas superiores",
    incorrectas: [
      "Un dique vertical que corta la estratificación",
      "Un depósito piroclástico soldado"
    ]
  },
  {
    enunciado: "¿Qué mineral es diagnóstico de composiciones máficas en rocas ígneas?",
    correcta: "Olivino",
    incorrectas: [
      "Cuarzo",
      "Ortosa (feldespato potásico)"
    ]
  },
  {
    enunciado: "El equivalente plutónico del basalto es:",
    correcta: "Gabro",
    incorrectas: [
      "Granito",
      "Diorita"
    ]
  },
  {
    enunciado: "¿Qué término describe el enriquecimiento del magma en sílice por separación de minerales máficos?",
    correcta: "Diferenciación magmática por cristalización fraccionada",
    incorrectas: [
      "Metasomatismo por fluidos ricos en CO2",
      "Diagénesis en ambientes sedimentarios"
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo típico del magmatismo de punto caliente oceánico?",
    correcta: "Lavas basálticas abundantes en cadenas intraplaca",
    incorrectas: [
      "Dominios riolíticos dominantes en dorsal",
      "Ausencia total de volcanismo efusivo"
    ]
  },
  {
    enunciado: "¿Qué roca ígnea se asocia con depósitos hidrotermales en sistemas porfídicos cupríferos?",
    correcta: "Granodiorita y pórfidos intermedios",
    incorrectas: [
      "Peridotita pura sin alteración",
      "Obsidiana masiva sin fracturación"
    ]
  },
  {
    enunciado: "¿Qué propiedad del magma controla con fuerza la morfología de los edificios volcánicos?",
    correcta: "La viscosidad (relacionada con el SiO2 y la temperatura)",
    incorrectas: [
      "La conductividad eléctrica del terreno",
      "La presión atmosférica a nivel del mar"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes afirmaciones es correcta sobre el ciclo de las rocas?",
    correcta: "Las rocas ígneas pueden originarse por fusión parcial y solidificar como plutónicas o volcánicas",
    incorrectas: [
      "Las rocas ígneas solo pueden transformarse en sedimentarias por fusión",
      "Las rocas metamórficas se generan siempre por cristalización directa del magma"
    ]
  }
];
