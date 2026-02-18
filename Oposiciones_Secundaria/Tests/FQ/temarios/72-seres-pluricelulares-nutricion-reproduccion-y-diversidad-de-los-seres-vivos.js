// temarios/72-seres-pluricelulares-nutricion-reproduccion-percepcion-diversidad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza de forma esencial a los seres pluricelulares?",
    correcta: "Están formados por muchas células unidas, intercomunicadas y especializadas con división del trabajo",
    incorrectas: [
      "Son siempre microscópicos y cada célula realiza todas las funciones por sí sola",
      "Se componen de una única célula que cambia de forma para crear órganos"
    ]
  },
  {
    enunciado: "¿Qué ventaja general aporta la pluricelularidad frente a la unicelularidad?",
    correcta: "Permite mayor especialización celular y mayor eficacia funcional mediante tejidos y órganos",
    incorrectas: [
      "Elimina la necesidad de nutrición porque las células producen energía sin materia",
      "Impide la adaptación porque todas las células deben ser idénticas"
    ]
  },
  {
    enunciado: "¿Qué es un tejido en sentido histológico básico?",
    correcta: "Un conjunto de células similares y coordinadas que realizan una función común",
    incorrectas: [
      "Un órgano completo formado por varios aparatos a la vez",
      "Una célula aislada que realiza todas las funciones del organismo"
    ]
  },
  {
    enunciado: "¿Qué es un órgano en la organización de un pluricelular?",
    correcta: "Una estructura formada por varios tejidos que actúan de manera coordinada",
    incorrectas: [
      "Un conjunto de aparatos independientes sin relación funcional",
      "Un sistema de células idénticas que no se comunican entre sí"
    ]
  },
  {
    enunciado: "¿Qué describe mejor un sistema o aparato en animales?",
    correcta: "Un conjunto de órganos relacionados que cooperan para una función general",
    incorrectas: [
      "Una colección de células sin diferenciación ni comunicación",
      "Una fase temporal de reproducción asexual por fisión"
    ]
  },
  {
    enunciado: "¿Cuál es una diferencia clave entre unicelulares y pluricelulares respecto a las funciones vitales?",
    correcta: "En los pluricelulares las funciones se reparten entre células y tejidos especializados, en los unicelulares una célula lo hace todo",
    incorrectas: [
      "En los unicelulares existen tejidos y órganos, pero no existen en pluricelulares",
      "En los pluricelulares no hay intercambio con el medio porque son sistemas cerrados"
    ]
  },
  {
    enunciado: "¿Qué define a un organismo autótrofo?",
    correcta: "Produce materia orgánica a partir de sustancias inorgánicas, fijando CO2",
    incorrectas: [
      "Obtiene carbono orgánico únicamente por ingestión de otros seres vivos",
      "Depende de un hospedador porque no puede sintetizar ninguna biomolécula"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los fotoautótrofos?",
    correcta: "Usan energía luminosa para sintetizar materia orgánica mediante fotosíntesis",
    incorrectas: [
      "Obtienen energía oxidando compuestos inorgánicos sin necesidad de luz",
      "Se alimentan exclusivamente de materia orgánica muerta por absorción"
    ]
  },
  {
    enunciado: "¿Qué describe mejor a los quimioautótrofos?",
    correcta: "Obtienen energía de reacciones de oxidación de sustancias inorgánicas y fijan CO2",
    incorrectas: [
      "Obtienen energía de la luz pero no fijan carbono",
      "Solo pueden vivir como parásitos de otros organismos"
    ]
  },
  {
    enunciado: "¿Qué define de forma general la nutrición heterótrofa?",
    correcta: "Requiere materia orgánica preexistente como fuente de carbono y energía",
    incorrectas: [
      "Transforma CO2 directamente en glucosa sin fuente de energía",
      "No necesita intercambio de materia con el medio externo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la nutrición holozoica típica de muchos animales?",
    correcta: "Ingestión de alimento sólido y digestión para absorber moléculas simples",
    incorrectas: [
      "Absorción directa de nutrientes sin digestión ni ingestión",
      "Síntesis de alimento a partir de CO2 usando clorofila"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la nutrición saprofítica típica de muchos hongos?",
    correcta: "Segregan enzimas al exterior, degradan materia orgánica muerta y absorben los productos",
    incorrectas: [
      "Realizan fotosíntesis y producen oxígeno como función principal",
      "Capturan presas y las digieren siempre en cavidades internas complejas"
    ]
  },
  {
    enunciado: "¿Qué define la nutrición parasitaria?",
    correcta: "Obtiene recursos de un hospedador vivo, pudiendo perjudicarlo",
    incorrectas: [
      "Produce toda su materia orgánica a partir de sustancias inorgánicas",
      "Se alimenta solo de restos inorgánicos como minerales y rocas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la reproducción asexual?",
    correcta: "Interviene un solo progenitor y la descendencia suele ser genéticamente muy similar o idéntica",
    incorrectas: [
      "Intervienen siempre gametos y meiosis obligatoria",
      "Genera variabilidad genética máxima por recombinación en cada generación"
    ]
  },
  {
    enunciado: "¿Qué ventaja típica tiene la reproducción asexual en ciertos ambientes?",
    correcta: "Permite multiplicación rápida y colonización eficiente cuando el medio es estable",
    incorrectas: [
      "Garantiza siempre mayor variabilidad genética que la sexual",
      "Impide la expansión porque requiere dos progenitores simultáneos"
    ]
  },
  {
    enunciado: "¿Qué es la gemación como reproducción asexual?",
    correcta: "La formación de un nuevo individuo a partir de una yema o brote del progenitor",
    incorrectas: [
      "La formación de gametos por meiosis en gónadas especializadas",
      "La fusión de dos células haploides para producir un cigoto diploide"
    ]
  },
  {
    enunciado: "¿Qué es la fragmentación en reproducción asexual?",
    correcta: "La formación de nuevos individuos a partir de fragmentos del organismo que regeneran partes",
    incorrectas: [
      "La duplicación de cromosomas para producir células haploides",
      "La transformación de una larva en adulto mediante metamorfosis"
    ]
  },
  {
    enunciado: "¿Qué es la esporulación en reproducción asexual?",
    correcta: "Producción de esporas capaces de originar nuevos individuos sin fecundación",
    incorrectas: [
      "Producción de gametos por meiosis con recombinación",
      "Producción de semillas tras doble fecundación en angiospermas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la reproducción sexual?",
    correcta: "Implica gametos y fecundación, y genera variabilidad genética por meiosis y recombinación",
    incorrectas: [
      "Produce clones genéticamente idénticos por mitosis en todos los casos",
      "No requiere división celular y ocurre sin formación de células especializadas"
    ]
  },
  {
    enunciado: "¿Cuál es el papel básico de la meiosis en reproducción sexual?",
    correcta: "Reducir el número cromosómico para formar gametos haploides y favorecer variabilidad",
    incorrectas: [
      "Duplicar el número cromosómico para formar gametos diploides",
      "Eliminar toda variación genética para conservar rasgos sin cambios"
    ]
  },
  {
    enunciado: "¿Qué proceso explica el crossing-over en meiosis?",
    correcta: "El intercambio de fragmentos entre cromosomas homólogos que aumenta la variabilidad genética",
    incorrectas: [
      "La separación de células por digestión extracelular de tejidos",
      "La fijación de CO2 en el ciclo de Calvin durante la fotosíntesis"
    ]
  },
  {
    enunciado: "¿Qué se entiende por irritabilidad en seres vivos?",
    correcta: "La capacidad de percibir estímulos y generar una respuesta",
    incorrectas: [
      "La capacidad de producir luz propia mediante cloroplastos",
      "La capacidad de datar rocas con isótopos radiactivos"
    ]
  },
  {
    enunciado: "¿Qué ejemplo representa una respuesta simple en unicelulares?",
    correcta: "La fototaxis o quimiotaxis, desplazamiento orientado ante estímulos",
    incorrectas: [
      "La coordinación de órganos sensoriales con cerebro y sistema endocrino",
      "La circulación sanguínea cerrada con doble bomba cardíaca"
    ]
  },
  {
    enunciado: "¿Qué distingue la percepción y respuesta en pluricelulares complejos?",
    correcta: "Presentan receptores especializados y sistemas de integración como nervioso y endocrino",
    incorrectas: [
      "Carecen por completo de receptores y solo responden por azar",
      "Se limitan a respuestas químicas sin comunicación entre células"
    ]
  },
  {
    enunciado: "¿Qué es un tropismo en plantas?",
    correcta: "Una respuesta de crecimiento orientada por un estímulo, como luz o gravedad",
    incorrectas: [
      "Un reflejo nervioso rápido mediado por neuronas motoras",
      "Una forma de reproducción sexual basada en gametos móviles"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a fototropismo?",
    correcta: "Crecimiento del tallo orientado hacia la luz por redistribución de auxinas",
    incorrectas: [
      "Cierre rápido de una trampa por impulso nervioso en animales",
      "Desplazamiento de un protozoo por batido de cilios ante un estímulo"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a nutrición descomponedora en ecosistemas?",
    correcta: "Hongos que degradan materia orgánica muerta y reciclan nutrientes",
    incorrectas: [
      "Plantas que producen glucosa a partir de CO2 y luz",
      "Animales que solo consumen productores primarios sin descomposición"
    ]
  },
  {
    enunciado: "¿Cuál es una clasificación clásica en cinco reinos?",
    correcta: "Monera, Protista, Fungi, Plantae y Animalia",
    incorrectas: [
      "Bacteria, Archaea, Virus, Plantae y Animalia",
      "Algas, Protozoos, Insectos, Peces y Mamíferos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al reino Monera en la clasificación clásica?",
    correcta: "Organismos procariotas generalmente unicelulares como bacterias y cianobacterias",
    incorrectas: [
      "Organismos eucariotas pluricelulares con tejidos diferenciados",
      "Organismos exclusivamente parásitos sin metabolismo propio"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al reino Fungi de manera general?",
    correcta: "Heterótrofos por absorción, pared de quitina y organización frecuente en hifas",
    incorrectas: [
      "Autótrofos con clorofila y pared de celulosa",
      "Procariotas sin núcleo y sin orgánulos con pared de mureína"
    ]
  },
  {
    enunciado: "¿Qué rasgo general caracteriza a los animales frente a plantas y hongos?",
    correcta: "Son heterótrofos, carecen de pared celular y presentan tejidos especializados",
    incorrectas: [
      "Son autótrofos y producen glucosa mediante fotosíntesis",
      "Son procariotas y se reproducen solo por fisión binaria"
    ]
  },
  {
    enunciado: "¿Qué grupo animal se caracteriza por carecer de tejidos verdaderos?",
    correcta: "Los poríferos",
    incorrectas: [
      "Los artrópodos",
      "Los cordados"
    ]
  },
  {
    enunciado: "¿Qué rasgo es típico de los cnidarios?",
    correcta: "Simetría radial y presencia de formas como pólipo y medusa en muchos casos",
    incorrectas: [
      "Notocorda y tubo neural dorsal durante el desarrollo",
      "Segmentación metamérica con celoma y sistema circulatorio cerrado siempre"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los artrópodos?",
    correcta: "Exoesqueleto de quitina, cuerpo segmentado y apéndices articulados",
    incorrectas: [
      "Pared celular de celulosa y nutrición autótrofa",
      "Simetría pentarradial exclusiva y sistema ambulacral"
    ]
  },
  {
    enunciado: "¿Qué grupo se caracteriza por simetría pentarradial en adultos y sistema ambulacral?",
    correcta: "Los equinodermos",
    incorrectas: [
      "Los anélidos",
      "Los moluscos"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a los cordados en su formulación básica?",
    correcta: "Presencia de notocorda y tubo neural dorsal al menos en alguna fase del desarrollo",
    incorrectas: [
      "Ausencia completa de sistema nervioso en todas sus formas",
      "Exoesqueleto quitinoso y mudas periódicas como rasgo universal"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a las angiospermas frente a gimnospermas?",
    correcta: "Presentan flores y frutos y la semilla queda protegida dentro del fruto",
    incorrectas: [
      "Presentan semillas desnudas sin estructuras reproductoras especializadas",
      "Carecen de vasos conductores y dependen de difusión célula a célula"
    ]
  },
  {
    enunciado: "¿Cuál es una razón clave para considerar esencial la biodiversidad en la vida cotidiana?",
    correcta: "Proporciona alimentos, materiales, servicios ecosistémicos y estabilidad de los ecosistemas",
    incorrectas: [
      "Solo tiene valor estético y no influye en agricultura ni salud",
      "Es irrelevante porque la tecnología puede sustituir por completo a los seres vivos"
    ]
  },
  {
    enunciado: "¿Qué ejemplo vincula directamente plantas con bienestar humano?",
    correcta: "Aportan oxígeno, alimentos, fibras, madera y compuestos con uso medicinal",
    incorrectas: [
      "Son los únicos organismos capaces de descomponer materia orgánica muerta",
      "Son los únicos organismos capaces de realizar reproducción sexual"
    ]
  },
  {
    enunciado: "¿Qué ejemplo vincula directamente animales con equilibrio ecológico y vida humana?",
    correcta: "Polinizadores y controladores de plagas sostienen producción agrícola y redes tróficas",
    incorrectas: [
      "Son los únicos seres vivos capaces de captar estímulos del medio",
      "No influyen en los ecosistemas porque actúan aislados de productores"
    ]
  }
];
