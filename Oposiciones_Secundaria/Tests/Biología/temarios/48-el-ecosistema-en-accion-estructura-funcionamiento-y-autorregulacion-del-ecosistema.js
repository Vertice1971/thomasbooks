// temarios/48-el-ecosistema-en-accion-estructura-funcionamiento-y-autorregulacion-del-ecosistema.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define mejor a un ecosistema en Ecología moderna?",
    correcta: "Un sistema abierto en energía y casi cerrado en materia donde biocenosis y biotopo interactúan",
    incorrectas: [
      "Un conjunto de poblaciones aisladas sin intercambio con el medio físico",
      "Una suma de individuos sin relaciones tróficas ni ciclos de materia"
    ]
  },
  {
    enunciado: "Según Tansley, ¿qué dos componentes integran el ecosistema?",
    correcta: "La comunidad biótica (biocenosis) y el medio abiótico (biotopo)",
    incorrectas: [
      "Los productores y los depredadores",
      "Las especies autóctonas y las exóticas"
    ]
  },
  {
    enunciado: "¿Qué es un ecotono?",
    correcta: "Una zona de transición entre dos comunidades o ecosistemas con elevada diversidad",
    incorrectas: [
      "Una comunidad con baja interacción biótica",
      "Una franja de suelo estéril entre hábitats"
    ]
  },
  {
    enunciado: "¿En qué consiste el efecto de borde?",
    correcta: "En el aumento de diversidad y cambios en abundancia debidos a la proximidad de límites entre hábitats",
    incorrectas: [
      "En la desaparición de interacciones mutualistas en el interior del hábitat",
      "En la homogeneización completa de los ecosistemas colindantes"
    ]
  },
  {
    enunciado: "¿Qué afirmación sobre la estratificación de un bosque es correcta?",
    correcta: "La compartimentación vertical (dosel, sotobosque, herbáceo, edáfico) genera nichos y aumenta la complejidad",
    incorrectas: [
      "La estratificación reduce la diversidad funcional del ecosistema",
      "La estratificación solo existe en ecosistemas acuáticos"
    ]
  },
  {
    enunciado: "En un lago templado, ¿cómo se denominan las capas térmicas veraniegas?",
    correcta: "Epilimnion, metalimnion y hipolimnion",
    incorrectas: [
      "Termoclina, haloclina y picnoclina",
      "Litorales, bentónicas y neríticas"
    ]
  },
  {
    enunciado: "¿Qué variable abiótica suele limitar la productividad en aguas continentales?",
    correcta: "El fósforo disponible",
    incorrectas: [
      "El oxígeno disuelto siempre y en todo caso",
      "La salinidad elevada propia de los océanos"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia principal entre cadena trófica y red trófica?",
    correcta: "La red trófica integra múltiples cadenas interconectadas que reflejan la dieta real",
    incorrectas: [
      "No existe diferencia, son sinónimos exactos",
      "La cadena trófica es exclusiva de ecosistemas acuáticos"
    ]
  },
  {
    enunciado: "¿Qué expresa la regla del 10 % de Lindeman?",
    correcta: "Que, en promedio, solo cerca del 10 % de la energía pasa de un nivel trófico al siguiente",
    incorrectas: [
      "Que el 90 % de la biomasa se recicla sin pérdidas",
      "Que cada nivel trófico tiene el mismo contenido energético"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes es una pirámide que nunca se invierte?",
    correcta: "La pirámide de energía",
    incorrectas: [
      "La pirámide de número",
      "La pirámide de biomasa"
    ]
  },
  {
    enunciado: "¿Qué magnitud describe mejor la velocidad con que se genera biomasa vegetal?",
    correcta: "La producción primaria bruta y neta",
    incorrectas: [
      "La riqueza específica sin considerar abundancias",
      "La tasa de depredación de consumidores secundarios"
    ]
  },
  {
    enunciado: "¿Qué factores limitan con más frecuencia la producción primaria en ambientes terrestres?",
    correcta: "Luz, agua, temperatura y disponibilidad de nitrógeno y fósforo",
    incorrectas: [
      "Exclusivamente el CO₂ atmosférico",
      "Solo el oxígeno del suelo"
    ]
  },
  {
    enunciado: "¿Qué proceso incorpora nitrógeno atmosférico a formas asimilables por los seres vivos?",
    correcta: "La fijación del nitrógeno biológica o industrial",
    incorrectas: [
      "La desnitrificación bacteriana",
      "La respiración celular"
    ]
  },
  {
    enunciado: "¿Cuál es el principal depósito del fósforo en la biosfera?",
    correcta: "Las rocas y sedimentos de origen geológico",
    incorrectas: [
      "La atmósfera en estado gaseoso",
      "Los océanos como fosfano atmosférico"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñan los descomponedores en el funcionamiento del ecosistema?",
    correcta: "Cierran los ciclos devolviendo nutrientes inorgánicos al medio",
    incorrectas: [
      "Solo consumen energía sin aportar materia",
      "Bloquean el reciclado de nitrógeno y fósforo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un ecosistema como sistema abierto en energía?",
    correcta: "Recibe energía (principalmente solar) y la disipa como calor",
    incorrectas: [
      "No intercambia energía con su entorno",
      "Acumula indefinidamente energía sin pérdidas"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la resiliencia ecológica según Holling?",
    correcta: "La capacidad del ecosistema para absorber perturbaciones y mantener sus funciones",
    incorrectas: [
      "La tendencia a alcanzar un equilibrio estático sin cambios",
      "La imposibilidad de recuperar la estructura tras una alteración"
    ]
  },
  {
    enunciado: "¿Qué es una especie clave (keystone)?",
    correcta: "Una especie cuya influencia en la estructura de la comunidad es desproporcionada a su abundancia",
    incorrectas: [
      "La especie más abundante en todos los hábitats",
      "Una especie sin interacciones relevantes con otras"
    ]
  },
  {
    enunciado: "¿Cuál es el enunciado del principio de exclusión competitiva de Gause?",
    correcta: "Dos especies con el mismo nicho efectivo no coexisten de forma estable en el tiempo",
    incorrectas: [
      "Las especies con nichos idénticos se reparten el espacio indefinidamente",
      "La competencia nunca afecta a la distribución de especies"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre nicho ecológico y hábitat?",
    correcta: "El hábitat es el lugar físico y el nicho es el papel funcional y condiciones de la especie",
    incorrectas: [
      "Son términos equivalentes",
      "El nicho es solo el microclima y el hábitat solo la dieta"
    ]
  },
  {
    enunciado: "En un modelo depredador-presa de Lotka–Volterra, ¿qué suele observarse?",
    correcta: "Ciclos de oscilación desfasados entre la presa y su depredador",
    incorrectas: [
      "Crecimiento exponencial indefinido de ambas poblaciones",
      "Extinción simultánea y obligatoria de ambas especies"
    ]
  },
  {
    enunciado: "¿Qué ritmo biológico está controlado por el ciclo luz–oscuridad de aproximadamente 24 horas?",
    correcta: "El ritmo circadiano",
    incorrectas: [
      "El ritmo infradiano asociado a las estaciones",
      "El ritmo ultradiano de segundos"
    ]
  },
  {
    enunciado: "¿Cuál es el rasgo típico de una sucesión ecológica primaria?",
    correcta: "Se inicia sobre sustratos sin suelo desarrollado, como rocas o lava reciente",
    incorrectas: [
      "Parte de un suelo fértil tras cultivo abandonado",
      "Se da únicamente en ecosistemas acuáticos profundos"
    ]
  },
  {
    enunciado: "Durante la sucesión hacia estados maduros, ¿qué tendencia general se observa?",
    correcta: "Aumento de la complejidad estructural y de la eficiencia en el uso de recursos",
    incorrectas: [
      "Disminución de la estratificación y de la diversidad",
      "Pérdida total de retroalimentaciones negativas"
    ]
  },
  {
    enunciado: "¿Qué relación suele darse entre producción primaria neta (PPN) y respiración (R) en ecosistemas maduros?",
    correcta: "PPN tiende a aproximarse a R, con balance energético estabilizado",
    incorrectas: [
      "PPN aumenta indefinidamente superando siempre a R",
      "R desaparece en estados clímax"
    ]
  },
  {
    enunciado: "¿Qué afirmación sobre especies invasoras es correcta?",
    correcta: "Pueden alterar redes tróficas y reducir la resiliencia del ecosistema receptor",
    incorrectas: [
      "Siempre aumentan la diversidad funcional sin costes",
      "No influyen en los ciclos biogeoquímicos"
    ]
  },
  {
    enunciado: "¿Qué parámetro describe la rapidez con que se renueva la biomasa de un nivel trófico?",
    correcta: "El tiempo de renovación o turnover",
    incorrectas: [
      "La riqueza taxonómica",
      "La amplitud del nicho trófico"
    ]
  },
  {
    enunciado: "¿Qué variable suele limitar la productividad primaria en océanos abiertos (oligotróficos)?",
    correcta: "La baja disponibilidad de nitrógeno y hierro",
    incorrectas: [
      "La falta de oxígeno disuelto en superficie",
      "La ausencia de radiación solar en la zona fótica"
    ]
  },
  {
    enunciado: "¿Qué proceso convierte amonio en nitrito y nitrato en el ciclo del nitrógeno?",
    correcta: "La nitrificación",
    incorrectas: [
      "La amonificación",
      "La fijación simbiótica"
    ]
  },
  {
    enunciado: "¿Qué efecto suele producir la eutrofización de aguas continentales?",
    correcta: "Crecimiento algal excesivo, hipoxia y pérdida de biodiversidad",
    incorrectas: [
      "Aumento sostenido del oxígeno disuelto para peces",
      "Desaparición de los ciclos de nutrientes"
    ]
  },
  {
    enunciado: "¿Qué enunciado describe mejor la retroalimentación negativa en ecosistemas?",
    correcta: "Un cambio inicial desencadena procesos que lo amortiguan, favoreciendo la estabilidad",
    incorrectas: [
      "Toda perturbación se amplifica hasta la extinción",
      "La homeostasis solo existe en organismos, no en ecosistemas"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de servicio ecosistémico de regulación?",
    correcta: "La polinización y el control biológico de plagas",
    incorrectas: [
      "La extracción minera de fosfatos",
      "La construcción de embalses artificiales"
    ]
  },
  {
    enunciado: "¿Qué describe el concepto de productividad ecológica?",
    correcta: "La tasa de generación de biomasa por unidad de superficie y tiempo",
    incorrectas: [
      "El número total de especies presentes",
      "El volumen de agua almacenada en un sistema"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre producción secundaria bruta y neta?",
    correcta: "La neta descuenta de la bruta las pérdidas por respiración del consumidor",
    incorrectas: [
      "La bruta siempre es menor que la neta",
      "No existe diferencia; son términos equivalentes"
    ]
  },
  {
    enunciado: "¿Qué afirmación sobre el ciclo del carbono es correcta?",
    correcta: "La fotosíntesis fija CO₂ en biomasa y la respiración lo devuelve a la atmósfera",
    incorrectas: [
      "La fotosíntesis libera CO₂ y la respiración lo consume",
      "El carbono no tiene reservorios geológicos relevantes"
    ]
  },
  {
    enunciado: "¿Qué factor físico promueve la mezcla vertical en lagos templados durante el otoño y la primavera?",
    correcta: "La inversión térmica y los vientos que rompen la estratificación",
    incorrectas: [
      "El aumento de salinidad superficial",
      "La ausencia total de termoclina en verano"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia frecuente de la fragmentación del hábitat?",
    correcta: "Incremento del efecto de borde y aislamiento de poblaciones",
    incorrectas: [
      "Mejora automática del flujo génico entre fragmentos",
      "Reducción de la vulnerabilidad a invasoras"
    ]
  },
  {
    enunciado: "¿Qué variable integradora relaciona biomasa, productividad y eficiencia trófica en una red?",
    correcta: "El flujo de energía a través de los niveles tróficos",
    incorrectas: [
      "La densidad absoluta de depredadores tope",
      "La temperatura media anual exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el nicho fundamental frente al nicho efectivo?",
    correcta: "El fundamental es el rango teórico de condiciones; el efectivo es el realizado bajo interacciones bióticas",
    incorrectas: [
      "El efectivo es teórico y el fundamental es observado",
      "Ambos son idénticos en presencia de competencia"
    ]
  },
  {
    enunciado: "¿Qué tipo de sucesión se desencadena con mayor probabilidad tras un incendio de baja intensidad en un pinar?",
    correcta: "Sucesión secundaria con regeneración desde el banco de semillas y rebrotes",
    incorrectas: [
      "Sucesión primaria sobre roca desnuda",
      "Ausencia de sucesión por completa esterilidad del suelo"
    ]
  },
  {
    enunciado: "¿Qué estrategia de gestión favorece la autorregulación y la resiliencia del ecosistema?",
    correcta: "Mantener conectividad ecológica, controlar invasoras y conservar especies clave",
    incorrectas: [
      "Maximizar el rendimiento de un solo servicio a costa de los demás",
      "Eliminar a los descomponedores para reducir pérdidas energéticas"
    ]
  }
];
