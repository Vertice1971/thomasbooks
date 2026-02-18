// temarios/73-ecologia-poblaciones-comunidades-ecosistemas-problemas-ambientales-educacion-ambiental.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la ecología en sentido clásico desde Haeckel (1866)?",
    correcta: "Las relaciones de los organismos con su ambiente, incluyendo factores abióticos y bióticos",
    incorrectas: [
      "La composición química exclusiva de las rocas y minerales de la corteza",
      "La herencia mendeliana y las mutaciones sin considerar el ambiente"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica existe entre autecología y sinecología?",
    correcta: "La autecología se centra en el individuo o especie y la sinecología en poblaciones y comunidades",
    incorrectas: [
      "La autecología estudia solo ecosistemas marinos y la sinecología solo ecosistemas terrestres",
      "La autecología explica la fotosíntesis y la sinecología explica la mitosis"
    ]
  },
  {
    enunciado: "¿Qué es el hábitat de una especie?",
    correcta: "El lugar físico donde vive y se desarrolla",
    incorrectas: [
      "El papel funcional que desempeña en la red trófica",
      "La suma de todas las especies de un ecosistema"
    ]
  },
  {
    enunciado: "¿Qué es el nicho ecológico?",
    correcta: "El conjunto de funciones y condiciones de vida de una especie, incluyendo recursos y relaciones",
    incorrectas: [
      "Una región geográfica definida solo por latitud y altitud",
      "El número total de individuos de una población"
    ]
  },
  {
    enunciado: "¿Qué son los factores abióticos?",
    correcta: "Componentes físico-químicos del medio como clima, luz, agua y suelo",
    incorrectas: [
      "Relaciones entre individuos de la misma especie como cooperación o competencia",
      "Interacciones entre depredadores y presas exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué son los factores bióticos?",
    correcta: "Interacciones entre seres vivos como competencia, depredación, parasitismo o mutualismo",
    incorrectas: [
      "Temperatura, humedad, pH y salinidad consideradas en conjunto",
      "La energía solar incidente sobre un bioma sin mediación biológica"
    ]
  },
  {
    enunciado: "¿Qué es una población en ecología?",
    correcta: "Conjunto de individuos de la misma especie que ocupan un área y tiempo determinados",
    incorrectas: [
      "Conjunto de organismos de distintas especies que comparten un hábitat",
      "La parte abiótica de un ecosistema formada por agua, suelo y aire"
    ]
  },
  {
    enunciado: "¿Qué es una comunidad o biocenosis?",
    correcta: "Conjunto de poblaciones de distintas especies que conviven e interactúan en un lugar",
    incorrectas: [
      "Conjunto de individuos de una especie con la misma edad",
      "Conjunto de factores abióticos de un ecosistema"
    ]
  },
  {
    enunciado: "¿Qué es un ecosistema?",
    correcta: "La comunidad de seres vivos y el biotopo, con intercambio de energía y ciclos de materia",
    incorrectas: [
      "Una sola población aislada sin interacciones con el medio",
      "Un bioma definido únicamente por temperatura media anual"
    ]
  },
  {
    enunciado: "¿Qué es el biotopo?",
    correcta: "El medio físico-químico donde vive una comunidad, con sus factores abióticos",
    incorrectas: [
      "El conjunto de relaciones de depredación de una red trófica",
      "El conjunto de especies de un territorio sin incluir el medio"
    ]
  },
  {
    enunciado: "¿Cómo se define la densidad de población de forma simple?",
    correcta: "Número de individuos por unidad de superficie o volumen",
    incorrectas: [
      "Número de especies por unidad de superficie",
      "Cantidad de energía disponible por nivel trófico"
    ]
  },
  {
    enunciado: "¿Qué tipo de distribución espacial es típica cuando los individuos se agrupan en manchas o colonias?",
    correcta: "Distribución agregada o contagiosa",
    incorrectas: [
      "Distribución uniforme",
      "Distribución estrictamente azarosa en todos los casos"
    ]
  },
  {
    enunciado: "¿Qué tipo de distribución espacial es típica cuando hay territorialidad o competencia fuerte por espacio?",
    correcta: "Distribución uniforme",
    incorrectas: [
      "Distribución agregada",
      "Distribución necesariamente azarosa"
    ]
  },
  {
    enunciado: "¿Qué variables básicas determinan la dinámica numérica de una población?",
    correcta: "Natalidad, mortalidad y migraciones (inmigración y emigración)",
    incorrectas: [
      "Solo temperatura y humedad, sin influencia de procesos demográficos",
      "Solo la biomasa total del ecosistema, sin cambios de individuos"
    ]
  },
  {
    enunciado: "¿Qué expresa el crecimiento exponencial de una población?",
    correcta: "Que el incremento es proporcional al tamaño poblacional y puede acelerarse sin límites si no hay restricciones",
    incorrectas: [
      "Que el crecimiento se detiene siempre cuando N es muy pequeño",
      "Que el crecimiento es siempre lineal y constante en el tiempo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al crecimiento logístico de una población?",
    correcta: "Se acelera al inicio y luego se frena al acercarse a la capacidad de carga K",
    incorrectas: [
      "Aumenta indefinidamente sin restricciones por recursos",
      "Oscila siempre de manera periódica sin relación con el ambiente"
    ]
  },
  {
    enunciado: "¿Qué significa K en el modelo logístico?",
    correcta: "Capacidad de carga: tamaño máximo sostenible por recursos y condiciones del medio",
    incorrectas: [
      "Coeficiente de fotosíntesis en productores primarios",
      "Número de especies de una comunidad en equilibrio"
    ]
  },
  {
    enunciado: "¿Qué es un factor limitante densodependiente?",
    correcta: "Un factor cuyo efecto aumenta con la densidad, como competencia por recursos o enfermedades",
    incorrectas: [
      "Un factor que actúa igual independientemente del tamaño poblacional, como heladas extremas",
      "Un factor que solo afecta a productores y nunca a consumidores"
    ]
  },
  {
    enunciado: "¿Qué es un factor limitante densoindependiente?",
    correcta: "Un factor cuyo efecto no depende de la densidad, como sequías, incendios o tormentas",
    incorrectas: [
      "Un factor que solo aparece cuando la población supera K",
      "Un factor que depende exclusivamente del número de depredadores"
    ]
  },
  {
    enunciado: "¿Qué se entiende por estructura de edades de una población?",
    correcta: "La proporción de individuos en clases de edad, que condiciona su crecimiento futuro",
    incorrectas: [
      "La proporción de niveles tróficos en una cadena alimentaria",
      "La cantidad de biomasa de productores medida en una pirámide de números"
    ]
  },
  {
    enunciado: "¿Qué significa riqueza de especies en una comunidad?",
    correcta: "El número de especies presentes",
    incorrectas: [
      "El número total de individuos sin importar cuántas especies hay",
      "La cantidad de energía transferida a consumidores"
    ]
  },
  {
    enunciado: "¿Qué mide un índice de diversidad tipo Shannon?",
    correcta: "La diversidad combinando riqueza y equitatividad (reparto de abundancias entre especies)",
    incorrectas: [
      "La productividad primaria neta del ecosistema",
      "La edad absoluta de los estratos mediante radiactividad"
    ]
  },
  {
    enunciado: "¿Qué significa dominancia en una comunidad?",
    correcta: "Que una o pocas especies son muy abundantes o influyentes frente a las demás",
    incorrectas: [
      "Que todas las especies tienen exactamente la misma abundancia",
      "Que no existen interacciones entre especies"
    ]
  },
  {
    enunciado: "¿Qué es la estratificación en una comunidad como un bosque?",
    correcta: "La organización vertical en capas con especies y funciones distintas (suelo, arbustos, copas)",
    incorrectas: [
      "La separación de cromosomas durante meiosis I",
      "La distribución de placas tectónicas a escala global"
    ]
  },
  {
    enunciado: "¿Qué es la sucesión ecológica?",
    correcta: "El cambio ordenado de comunidades a lo largo del tiempo hacia estados más complejos",
    incorrectas: [
      "La variación genética por mutaciones en una población",
      "La transferencia de energía de consumidores a productores"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre sucesión primaria y secundaria?",
    correcta: "La primaria empieza sin suelo desarrollado y la secundaria tras una perturbación con suelo previo",
    incorrectas: [
      "La primaria ocurre solo en océanos y la secundaria solo en desiertos",
      "La primaria siempre es más rápida que la secundaria"
    ]
  },
  {
    enunciado: "¿Qué organismos son típicos pioneros en sucesión primaria sobre roca desnuda?",
    correcta: "Líquenes y otros colonizadores capaces de iniciar formación de suelo",
    incorrectas: [
      "Árboles de gran porte que requieren suelos profundos desde el inicio",
      "Mamíferos carnívoros como primeros colonizadores inevitables"
    ]
  },
  {
    enunciado: "¿Qué es un bioma?",
    correcta: "Gran unidad ecológica definida por clima y vegetación dominante (y fauna asociada)",
    incorrectas: [
      "Una población de una sola especie en un territorio",
      "Una molécula orgánica propia de los seres vivos"
    ]
  },
  {
    enunciado: "¿Cuál de estos pares corresponde a componentes abióticos y bióticos de un ecosistema?",
    correcta: "Abióticos: luz, agua, suelo; bióticos: productores, consumidores y descomponedores",
    incorrectas: [
      "Abióticos: depredación y competencia; bióticos: temperatura y pH",
      "Abióticos: genes y cromosomas; bióticos: rocas y minerales"
    ]
  },
  {
    enunciado: "¿Qué papel cumplen los productores en el ecosistema?",
    correcta: "Transforman energía (normalmente solar) y materia inorgánica en biomasa",
    incorrectas: [
      "Degradan restos orgánicos hasta minerales como función principal",
      "Obtienen energía alimentándose de consumidores secundarios"
    ]
  },
  {
    enunciado: "¿Qué papel cumplen los descomponedores?",
    correcta: "Reciclan materia orgánica y liberan nutrientes inorgánicos al medio",
    incorrectas: [
      "Son siempre depredadores tope que controlan a herbívoros",
      "Solo existen en ecosistemas marinos y no en terrestres"
    ]
  },
  {
    enunciado: "¿Qué describe una cadena trófica?",
    correcta: "Una secuencia de transferencia de materia y energía desde productores a consumidores",
    incorrectas: [
      "Una secuencia de cambios geológicos desde roca ígnea a metamórfica",
      "Un método de datación radiométrica basado en vida media"
    ]
  },
  {
    enunciado: "¿Qué es una red o trama trófica?",
    correcta: "El conjunto de cadenas tróficas interconectadas en una comunidad",
    incorrectas: [
      "La distribución espacial de individuos de una misma especie",
      "El ciclo de apertura y cierre de océanos"
    ]
  },
  {
    enunciado: "¿Qué expresa la regla aproximada del 10% asociada a Lindeman?",
    correcta: "Que solo una fracción pequeña de la energía pasa de un nivel trófico al siguiente",
    incorrectas: [
      "Que el 10% de la materia se destruye en cada nivel trófico",
      "Que la productividad primaria siempre es el 10% de la biomasa total"
    ]
  },
  {
    enunciado: "¿Cuál es la pirámide trófica que no se invierte y representa mejor el flujo?",
    correcta: "La pirámide de energía",
    incorrectas: [
      "La pirámide de números, que siempre es estable y nunca se invierte",
      "La pirámide de biomasa, que nunca puede invertirse en ecosistemas acuáticos"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre producción primaria bruta (PPB) y producción primaria neta (PPN)?",
    correcta: "La PPN es la PPB menos la energía gastada en respiración por los productores",
    incorrectas: [
      "La PPN siempre es mayor que la PPB porque incluye respiración",
      "La PPB solo se mide en consumidores y la PPN solo en descomponedores"
    ]
  },
  {
    enunciado: "¿Qué describe un ciclo biogeoquímico?",
    correcta: "El recorrido de elementos químicos entre componentes bióticos y abióticos del ecosistema",
    incorrectas: [
      "La evolución de una especie por selección natural exclusivamente",
      "La reproducción asexual por esporulación en hongos"
    ]
  },
  {
    enunciado: "¿Qué proceso forma parte del ciclo del nitrógeno?",
    correcta: "Fijación, nitrificación y denitrificación que transforman compuestos nitrogenados",
    incorrectas: [
      "Fotosíntesis y respiración como únicos procesos del nitrógeno",
      "Metamorfismo regional por aumento de presión y temperatura"
    ]
  },
  {
    enunciado: "¿Qué es la autorregulación ecológica en un ecosistema?",
    correcta: "La tendencia a estabilizarse mediante retroalimentaciones, como control depredador-presa",
    incorrectas: [
      "La imposibilidad de cambiar porque los ecosistemas son sistemas cerrados",
      "La eliminación completa de variabilidad y sucesión por definición"
    ]
  },
  {
    enunciado: "¿Qué interacción interespecífica es beneficiosa para ambas especies?",
    correcta: "Mutualismo",
    incorrectas: [
      "Depredación",
      "Parasitismo"
    ]
  },
  {
    enunciado: "¿Qué interacción interespecífica implica beneficio para una especie y perjuicio para otra sin muerte inmediata necesariamente?",
    correcta: "Parasitismo",
    incorrectas: [
      "Comensalismo siempre perjudicial para ambas",
      "Neutralismo siempre con beneficio mutuo"
    ]
  },
  {
    enunciado: "¿Qué es eutrofización en aguas continentales o costeras?",
    correcta: "Enriquecimiento en nutrientes (N y P) que dispara proliferación algal y puede causar anoxia",
    incorrectas: [
      "Reducción de nutrientes que impide cualquier crecimiento vegetal",
      "Aumento de oxígeno disuelto por disminución de materia orgánica"
    ]
  },
  {
    enunciado: "¿Qué es la DBO (demanda biológica de oxígeno) en contaminación de aguas?",
    correcta: "Medida del oxígeno requerido para degradar materia orgánica por microorganismos",
    incorrectas: [
      "Cantidad de CO2 fijada por fotosíntesis en un lago",
      "Número de especies presentes en una muestra de agua"
    ]
  },
  {
    enunciado: "¿Qué fenómeno se asocia típicamente a SO2 y NOx en la atmósfera?",
    correcta: "Lluvia ácida por formación de ácidos que reducen el pH de la precipitación",
    incorrectas: [
      "Aumento del ozono estratosférico por captura de radiación UV",
      "Formación directa de biomasa vegetal sin fotosíntesis"
    ]
  },
  {
    enunciado: "¿Qué es el smog fotoquímico?",
    correcta: "Contaminación urbana por reacciones de NOx y compuestos orgánicos bajo luz, generando oxidantes como ozono troposférico",
    incorrectas: [
      "Condensación de vapor de agua puro sin contaminantes",
      "Lluvia ácida causada exclusivamente por CO2"
    ]
  },
  {
    enunciado: "¿Qué finalidad central tiene la educación ambiental en secundaria?",
    correcta: "Desarrollar comprensión, actitudes y competencias para actuar ante problemas ambientales y sostenibilidad",
    incorrectas: [
      "Sustituir contenidos científicos por opiniones sin análisis de evidencias",
      "Limitarse a memorizar nombres de especies sin relacionarlas con ecosistemas"
    ]
  }
];
