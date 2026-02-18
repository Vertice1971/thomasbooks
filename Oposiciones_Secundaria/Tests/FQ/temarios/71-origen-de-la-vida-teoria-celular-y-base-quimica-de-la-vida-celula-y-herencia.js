// temarios/71-origen-de-la-vida-teoria-celular-base-quimica-biomoleculas-organulos-metabolismo-division-herencia-mutaciones-unicelulares.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué idea fundamental resume el enfoque científico moderno sobre la vida?",
    correcta: "Que los procesos vitales se explican mediante leyes físico-químicas sin recurrir a fuerzas vitales",
    incorrectas: [
      "Que la vida solo puede explicarse por causas sobrenecesarias ajenas a la materia",
      "Que la biología no puede conectarse con la química ni con la física"
    ]
  },
  {
    enunciado: "¿Cómo se concilia la alta organización de los seres vivos con la 2ª ley de la termodinámica?",
    correcta: "Mantienen baja entropía interna a costa de aumentar la entropía del entorno mediante intercambio de energía y materia",
    incorrectas: [
      "La 2ª ley no se aplica a los seres vivos porque son sistemas cerrados perfectos",
      "La vida viola la 2ª ley y por eso no puede estudiarse científicamente"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la hipótesis de una atmósfera primitiva reductora?",
    correcta: "Una atmósfera con escasez de O2 libre y predominio de gases como CH4, NH3, H2 y vapor de agua",
    incorrectas: [
      "Una atmósfera dominada por O2 y ozono desde el inicio de la Tierra",
      "Una atmósfera idéntica a la actual, con N2 y O2 en proporciones modernas"
    ]
  },
  {
    enunciado: "¿Qué fuente de energía era especialmente intensa en la Tierra primitiva por ausencia de ozono?",
    correcta: "La radiación ultravioleta",
    incorrectas: [
      "La luz infrarroja bloqueada por una capa de ozono muy densa",
      "La energía de combustión del oxígeno atmosférico abundante"
    ]
  },
  {
    enunciado: "¿Qué demostró de forma clásica el experimento de Miller y Urey (1953)?",
    correcta: "Que en condiciones simuladas de atmósfera reductora pueden sintetizarse moléculas orgánicas simples como aminoácidos",
    incorrectas: [
      "Que las células completas pueden aparecer espontáneamente en pocos minutos",
      "Que el ADN se forma de manera directa sin pasos intermedios ni precursores"
    ]
  },
  {
    enunciado: "¿Qué se entiende por evolución prebiótica?",
    correcta: "El paso desde química simple hacia moléculas orgánicas y sistemas precelulares antes de existir vida celular",
    incorrectas: [
      "La evolución de especies multicelulares a partir de peces primitivos",
      "La evolución biológica basada en selección natural en poblaciones modernas"
    ]
  },
  {
    enunciado: "¿Qué significa polimerización en el contexto del origen de la vida?",
    correcta: "La formación de macromoléculas a partir de monómeros mediante reacciones de condensación",
    incorrectas: [
      "La ruptura de macromoléculas en monómeros por hidrólisis",
      "La transformación de rocas en minerales por metamorfismo"
    ]
  },
  {
    enunciado: "¿Qué son los protobiontes en una explicación clásica del origen de la vida?",
    correcta: "Agregados precelulares con compartimentación y cierta selectividad química, sin ser células completas",
    incorrectas: [
      "Bacterias modernas con núcleo verdadero y orgánulos membranosos",
      "Animales unicelulares con sistemas nerviosos y órganos especializados"
    ]
  },
  {
    enunciado: "¿Cuál sería una ventaja clave de la compartimentación en sistemas precelulares?",
    correcta: "Concentrar reactivos y favorecer reacciones químicas, aumentando eficiencia de procesos",
    incorrectas: [
      "Impedir cualquier intercambio con el exterior y convertirse en sistema cerrado absoluto",
      "Eliminar la necesidad de catalizadores y hacer innecesarias las reacciones enzimáticas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los primeros metabolismos propuestos para los primeros seres vivos?",
    correcta: "Heterotrofia y anaerobiosis, con obtención de energía por fermentación en un medio rico en compuestos orgánicos",
    incorrectas: [
      "Fotosíntesis oxigénica como primer metabolismo inevitable",
      "Respiración aerobia obligatoria con O2 abundante desde el principio"
    ]
  },
  {
    enunciado: "¿Qué plantea la teoría endosimbiótica sobre el origen de mitocondrias y cloroplastos?",
    correcta: "Que proceden de bacterias incorporadas por una célula ancestral y estabilizadas como orgánulos",
    incorrectas: [
      "Que se forman por cristalización de lípidos dentro del citosol",
      "Que surgen por plegamiento de la pared celular bacteriana en eucariotas"
    ]
  },
  {
    enunciado: "¿Qué aporta la teoría celular de Schleiden y Schwann al conocimiento biológico?",
    correcta: "Que plantas y animales están formados por células como unidad estructural y funcional",
    incorrectas: [
      "Que las especies son inmutables y no existen extinciones",
      "Que los orgánulos existen antes que las células y las construyen desde fuera"
    ]
  },
  {
    enunciado: "¿Qué expresa el principio asociado a Virchow: omnis cellula e cellula?",
    correcta: "Que toda célula procede de otra célula preexistente",
    incorrectas: [
      "Que toda célula se forma por cristalización espontánea en el citoplasma",
      "Que las células aparecen solo por acción de rayos en la atmósfera primitiva"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial distingue una célula procariota de una eucariota?",
    correcta: "La procariota carece de núcleo verdadero y de orgánulos membranosos, la eucariota los posee",
    incorrectas: [
      "La procariota tiene mitocondrias y la eucariota no",
      "La eucariota carece de ADN y la procariota lo tiene"
    ]
  },
  {
    enunciado: "¿Cuáles son los bioelementos primarios más abundantes en la materia viva?",
    correcta: "C, H, O, N, P y S",
    incorrectas: [
      "Fe, Cu, Zn, I, Co y Mn",
      "Al, Si, Ti, Ni, Pb y Hg"
    ]
  },
  {
    enunciado: "¿Qué propiedad del carbono es clave para la diversidad de biomoléculas?",
    correcta: "Su capacidad para formar enlaces covalentes estables y cadenas y anillos complejos",
    incorrectas: [
      "Su tendencia a formar solo enlaces iónicos en agua",
      "Su incapacidad para enlazarse consigo mismo"
    ]
  },
  {
    enunciado: "¿Qué función general tiene el agua en los sistemas vivos?",
    correcta: "Actúa como disolvente, medio de reacción y regulador térmico por su alto calor específico",
    incorrectas: [
      "Impide las reacciones químicas al bloquear los enlaces covalentes",
      "Solo sirve como estructura rígida y no participa en transporte ni equilibrio osmótico"
    ]
  },
  {
    enunciado: "¿Qué papel tienen las sales minerales en los seres vivos?",
    correcta: "Participan en equilibrio osmótico y pH, y cumplen funciones específicas como cofactores o estructura",
    incorrectas: [
      "Solo forman proteínas y por eso son el componente principal del ADN",
      "Se limitan a aportar energía directa del mismo modo que la glucosa"
    ]
  },
  {
    enunciado: "¿Qué función se asocia de forma típica a los glúcidos?",
    correcta: "Función energética y, en algunos casos, estructural",
    incorrectas: [
      "Función hereditaria como portadores universales de genes",
      "Función principal de catálisis enzimática"
    ]
  },
  {
    enunciado: "¿Qué función se asocia de forma típica a los lípidos?",
    correcta: "Reserva energética y componente estructural de membranas",
    incorrectas: [
      "Formación exclusiva de ribosomas y cromosomas",
      "Transporte de información genética mediante codones"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las proteínas en el conjunto de biomoléculas?",
    correcta: "Su diversidad funcional, especialmente como enzimas, estructuras y transporte",
    incorrectas: [
      "Que están formadas por nucleótidos y por eso almacenan herencia",
      "Que solo aparecen en procariotas y nunca en eucariotas"
    ]
  },
  {
    enunciado: "¿Qué papel central tienen ADN y ARN en biología?",
    correcta: "Almacenar, transmitir y expresar la información genética",
    incorrectas: [
      "Actuar como reserva energética de largo plazo en forma de triglicéridos",
      "Ser componentes principales de la pared bacteriana de mureína"
    ]
  },
  {
    enunciado: "¿Qué describe el modelo de mosaico fluido de Singer y Nicolson?",
    correcta: "Una bicapa lipídica con proteínas incrustadas y movilidad lateral de componentes",
    incorrectas: [
      "Una pared rígida de celulosa común a todas las células",
      "Una membrana formada solo por proteínas sin lípidos"
    ]
  },
  {
    enunciado: "¿Cuál es una función principal de la membrana plasmática?",
    correcta: "Regular el intercambio de sustancias y la comunicación celular mediante receptores",
    incorrectas: [
      "Realizar la replicación del ADN en todos los organismos",
      "Sustituir a los ribosomas en la síntesis de proteínas"
    ]
  },
  {
    enunciado: "¿Qué distingue la pared celular vegetal frente a la bacteriana?",
    correcta: "La vegetal es rica en celulosa y la bacteriana en mureína",
    incorrectas: [
      "La vegetal está hecha de mureína y la bacteriana de celulosa",
      "Ambas son idénticas y se componen principalmente de colesterol"
    ]
  },
  {
    enunciado: "¿Qué función se asocia al retículo endoplasmático rugoso?",
    correcta: "Síntesis de proteínas destinadas a secreción, membrana o ciertos orgánulos",
    incorrectas: [
      "Digestión intracelular mediante hidrolasas ácidas",
      "Producción de ATP por cadena respiratoria"
    ]
  },
  {
    enunciado: "¿Qué función se asocia al retículo endoplasmático liso?",
    correcta: "Síntesis de lípidos y detoxificación en ciertos tipos celulares",
    incorrectas: [
      "Formación del huso mitótico y separación de cromátidas",
      "Transcripción del ADN en ARN mensajero dentro del nucleolo"
    ]
  },
  {
    enunciado: "¿Qué papel cumple el aparato de Golgi?",
    correcta: "Modificar, clasificar y empaquetar proteínas y lípidos para secreción o destino intracelular",
    incorrectas: [
      "Oxidar glucosa y producir ATP como función principal",
      "Realizar la fotosíntesis en sus membranas internas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los lisosomas?",
    correcta: "Contienen enzimas hidrolíticas y participan en digestión de materiales y reciclaje celular",
    incorrectas: [
      "Contienen ADN circular y ribosomas como las mitocondrias",
      "Son responsables de la síntesis de celulosa en plantas"
    ]
  },
  {
    enunciado: "¿Qué proceso se asocia de forma central a las mitocondrias?",
    correcta: "La respiración celular aerobia y la producción de ATP mediante cadena de transporte de electrones",
    incorrectas: [
      "La polimerización prebiótica de aminoácidos en charcas primitivas",
      "La segregación de alelos en la meiosis I"
    ]
  },
  {
    enunciado: "¿Dónde se localizan las reacciones luminosas de la fotosíntesis en cloroplastos?",
    correcta: "En las membranas de los tilacoides",
    incorrectas: [
      "En el citosol, fuera del cloroplasto",
      "En la envoltura nuclear y los poros del núcleo"
    ]
  },
  {
    enunciado: "¿Qué ocurre de forma esencial en el ciclo de Calvin?",
    correcta: "Se fija CO2 y se sintetizan compuestos orgánicos usando ATP y poder reductor",
    incorrectas: [
      "Se produce ATP directamente por fosforilación oxidativa mitocondrial",
      "Se separan cromosomas homólogos y se reduce el número cromosómico"
    ]
  },
  {
    enunciado: "¿Qué función realizan los ribosomas?",
    correcta: "Sintetizan proteínas traduciendo la información del ARN mensajero",
    incorrectas: [
      "Realizan la replicación del ADN durante la fase S",
      "Transforman glúcidos en lípidos mediante fotosíntesis"
    ]
  },
  {
    enunciado: "¿Qué componente nuclear está formado por ADN y proteínas histonas?",
    correcta: "La cromatina",
    incorrectas: [
      "El glucocálix",
      "La mureína"
    ]
  },
  {
    enunciado: "¿Qué significa catabolismo?",
    correcta: "Conjunto de reacciones de degradación que liberan energía y permiten formar ATP",
    incorrectas: [
      "Conjunto de reacciones de síntesis que consumen energía para formar macromoléculas",
      "Proceso de división celular que reduce el número cromosómico a la mitad"
    ]
  },
  {
    enunciado: "¿Qué etapa inicia la degradación de glucosa y puede ocurrir sin oxígeno?",
    correcta: "La glucólisis",
    incorrectas: [
      "El ciclo de Calvin",
      "La formación del huso acromático en metafase"
    ]
  },
  {
    enunciado: "¿Cuál es el resultado global esencial de la mitosis?",
    correcta: "Dos células hijas con la misma dotación cromosómica que la célula madre",
    incorrectas: [
      "Cuatro células hijas con la mitad de cromosomas",
      "Una célula hija con doble dotación cromosómica y otra sin cromosomas"
    ]
  },
  {
    enunciado: "¿Qué aporta la meiosis a la reproducción sexual?",
    correcta: "Forma gametos haploides y genera variabilidad por recombinación y segregación independiente",
    incorrectas: [
      "Copia idéntica de la célula sin variabilidad para crecimiento",
      "Producción de ATP y NADPH a partir de luz en tilacoides"
    ]
  },
  {
    enunciado: "¿Qué postula la ley de segregación de Mendel?",
    correcta: "Que los dos alelos de un gen se separan durante la formación de gametos",
    incorrectas: [
      "Que los caracteres adquiridos por uso y desuso se heredan siempre",
      "Que todos los genes se heredan obligatoriamente ligados en un único bloque"
    ]
  },
  {
    enunciado: "¿Qué describe la ley de herencia independiente de Mendel en su formulación clásica?",
    correcta: "Que genes distintos pueden heredarse independientemente si no están ligados y segregan al azar",
    incorrectas: [
      "Que todos los rasgos dependen de un único gen con dos alelos",
      "Que la dominancia implica mezcla permanente e irreversible de alelos"
    ]
  },
  {
    enunciado: "¿Qué es una mutación en sentido genético?",
    correcta: "Un cambio en la secuencia del ADN que puede generar nuevos alelos y variación heredable",
    incorrectas: [
      "Un cambio reversible en la forma del organismo sin alterar su ADN",
      "Un proceso de fosilización por mineralización de tejidos"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a una mutación puntual?",
    correcta: "La sustitución de un nucleótido por otro en una posición concreta del ADN",
    incorrectas: [
      "La separación de cromosomas homólogos durante meiosis I",
      "La formación de una bicapa lipídica en la membrana plasmática"
    ]
  },
  {
    enunciado: "¿Qué se entiende por sensibilidad celular en biología?",
    correcta: "La capacidad de captar señales del medio mediante receptores y generar una respuesta",
    incorrectas: [
      "La capacidad de datar rocas con isótopos radiactivos",
      "La capacidad de producir clorofila en ausencia total de luz"
    ]
  }
];
