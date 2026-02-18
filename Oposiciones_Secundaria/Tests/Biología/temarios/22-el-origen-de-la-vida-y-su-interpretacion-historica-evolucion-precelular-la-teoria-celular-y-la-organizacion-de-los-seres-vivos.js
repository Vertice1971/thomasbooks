
// temarios/22-el-origen-de-la-vida-y-su-interpretacion-historica-evolucion-precelular-teoria-celular-y-organizacion-de-los-seres-vivos.js
var PREGUNTAS = [
  {
    enunciado: "¿Quién refutó de forma concluyente la generación espontánea con el experimento del matraz de cuello de cisne?",
    correcta: "Louis Pasteur",
    incorrectas: [
      "Charles Darwin",
      "Gregor Mendel"
    ]
  },
  {
    enunciado: "¿Qué planteaban Oparin y Haldane como condición de la Tierra primitiva para la síntesis abiótica de orgánicos?",
    correcta: "Una atmósfera reductora o poco oxidante y océanos primitivos como 'sopa' prebiótica",
    incorrectas: [
      "Una atmósfera rica en oxígeno similar a la actual",
      "Ausencia total de agua líquida en superficie"
    ]
  },
  {
    enunciado: "¿Qué demostraron los experimentos de Miller–Urey (1953)?",
    correcta: "Síntesis de aminoácidos a partir de gases simples sometidos a energía",
    incorrectas: [
      "La formación espontánea de células completas",
      "La inevitabilidad de la fotosíntesis oxigénica"
    ]
  },
  {
    enunciado: "¿Qué evidencia apoya el aporte exógeno de moléculas orgánicas al planeta?",
    correcta: "La presencia de aminoácidos y bases nitrogenadas en el meteorito de Murchison",
    incorrectas: [
      "La ausencia de compuestos orgánicos en todos los meteoritos",
      "La imposibilidad de síntesis prebiótica en laboratorio"
    ]
  },
  {
    enunciado: "¿En qué consiste la hipótesis del 'mundo ARN'?",
    correcta: "El ARN actuó como molécula de información y catalizador (ribozima) previo al ADN y proteínas",
    incorrectas: [
      "El ARN solo apareció tras la evolución de ribosomas modernos",
      "El ARN es químicamente imposible fuera de la célula"
    ]
  },
  {
    enunciado: "¿Qué componente celular actual es una ribozima clave para la traducción?",
    correcta: "El centro peptidil transferasa del ribosoma",
    incorrectas: [
      "La ARN polimerasa II",
      "La ADN ligasa"
    ]
  },
  {
    enunciado: "¿Qué describe el 'hiperciclo' de Eigen en el contexto prebiótico?",
    correcta: "Red autorreforzada de replicadores que se catalizan mutuamente",
    incorrectas: [
      "Un ciclo geológico de carbonatos-silicatos",
      "La replicación de ADN por semiconservación"
    ]
  },
  {
    enunciado: "¿Qué expresa el 'umbral de error' en replicación prebiótica?",
    correcta: "Existe una tasa máxima de mutación para mantener la información heredable",
    incorrectas: [
      "Las mutaciones siempre son beneficiosas",
      "Cuanto más alta la mutación, más estable es el sistema"
    ]
  },
  {
    enunciado: "¿Qué entorno favorece la hipótesis de ventilación hidrotermal alcalina?",
    correcta: "Chimeneas con microporos minerales y gradientes de pH y protones",
    incorrectas: [
      "Ambientes completamente secos sin gradientes",
      "Ambientes ricos en oxígeno molecular desde el inicio"
    ]
  },
  {
    enunciado: "¿Qué propone la teoría de Wächtershäuser ('metabolismo primero')?",
    correcta: "Reacciones sobre superficies de sulfuros de hierro que preceden a los ácidos nucleicos",
    incorrectas: [
      "La necesidad de oxígeno para toda síntesis prebiótica",
      "La formación directa de orgánulos eucariotas"
    ]
  },
  {
    enunciado: "¿Qué papel se atribuye a la montmorillonita (arcilla) en el origen de la vida?",
    correcta: "Catalizar la polimerización de nucleótidos y favorecer la compartimentación",
    incorrectas: [
      "Bloquear toda reacción de polimerización",
      "Oxidar rápidamente los monómeros orgánicos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las protocélulas lipídicas de ácidos grasos?",
    correcta: "Forman vesículas semipermeables que pueden crecer y dividirse no enzimáticamente",
    incorrectas: [
      "Son impermeables a cualquier soluto",
      "Requieren proteínas modernas para ensamblarse"
    ]
  },
  {
    enunciado: "¿Por qué la compartimentación es clave en la transición química→biológica?",
    correcta: "Permite concentración de reactivos, aislamiento y acoplamiento de reacciones",
    incorrectas: [
      "Disipa gradientes imposibilitando el metabolismo",
      "Impide la selección natural"
    ]
  },
  {
    enunciado: "¿Qué rasgos se infieren para LUCA (último ancestro común)?",
    correcta: "Código genético, traducción ribosomal y quimiosmosis para obtención de energía",
    incorrectas: [
      "Fotosíntesis oxigénica universal como único metabolismo",
      "Núcleo y cloroplastos en todos los linajes"
    ]
  },
  {
    enunciado: "¿De qué linaje bacteriano derivan las mitocondrias según la endosimbiosis?",
    correcta: "Alfa-proteobacterias",
    incorrectas: [
      "Cianobacterias",
      "Firmicutes"
    ]
  },
  {
    enunciado: "¿Cuál es el origen endosimbiótico de los cloroplastos?",
    correcta: "Cianobacterias incorporadas por un eucariota primitivo",
    incorrectas: [
      "Arqueas metanógenas",
      "Mitocondrias modificadas"
    ]
  },
  {
    enunciado: "¿Qué evidencias apoyan la teoría endosimbiótica?",
    correcta: "Genomas circulares, división por fisión y ribosomas tipo 70S en orgánulos",
    incorrectas: [
      "Paredes celulósicas en mitocondrias",
      "Ribosomas 80S y genomas lineales en orgánulos"
    ]
  },
  {
    enunciado: "¿Qué propuso Woese basándose en el ARN ribosomal?",
    correcta: "La separación en tres dominios: Bacteria, Archaea y Eukarya",
    incorrectas: [
      "Un único dominio universal sin diferencias profundas",
      "Que los virus constituyen un cuarto dominio celular"
    ]
  },
  {
    enunciado: "¿Quién formuló 'omnis cellula e cellula' completando la teoría celular?",
    correcta: "Rudolf Virchow",
    incorrectas: [
      "Theodor Schwann",
      "Matthias Schleiden"
    ]
  },
  {
    enunciado: "¿Cuál NO es un postulado clásico de la teoría celular?",
    correcta: "Las células pueden surgir de materia inerte en condiciones normales actuales",
    incorrectas: [
      "La célula es la unidad estructural y funcional de los seres vivos",
      "Toda célula procede de otra célula preexistente"
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental hay entre procariotas y eucariotas?",
    correcta: "Presencia de núcleo y orgánulos membranosos en eucariotas",
    incorrectas: [
      "Procariontes carecen de ribosomas",
      "Eucariotas no poseen membrana plasmática"
    ]
  },
  {
    enunciado: "¿Qué papel tuvo el citoesqueleto en la eucariogénesis?",
    correcta: "Permitir endocitosis, tráfico vesicular y compartimentación compleja",
    incorrectas: [
      "Eliminar la necesidad de membranas",
      "Reemplazar la traducción ribosomal"
    ]
  },
  {
    enunciado: "¿Qué evento se asocia con la Gran Oxidación (~2,4 Ga)?",
    correcta: "Aumento del O₂ atmosférico ligado a fotosíntesis cianobacteriana",
    incorrectas: [
      "Disminución del O₂ por respiración anaerobia global",
      "Aparición de la primera célula eucariota multicelular"
    ]
  },
  {
    enunciado: "¿Qué organismo fue clave para la fotosíntesis oxigénica temprana?",
    correcta: "Cianobacterias",
    incorrectas: [
      "Arqueas metanógenas",
      "Alfa-proteobacterias heterótrofas"
    ]
  },
  {
    enunciado: "¿Qué describe la panspermia en el contexto del origen de la vida?",
    correcta: "La posible llegada de material biológico u orgánico desde el espacio",
    incorrectas: [
      "La formación de orgánulos por fisión nuclear",
      "La imposibilidad de vida fuera de la Tierra"
    ]
  },
  {
    enunciado: "¿Qué son los coacervados de Oparin?",
    correcta: "Microgotas coloidales que concentran macromoléculas y simulan compartimentación",
    incorrectas: [
      "Cristales de sales hidratadas",
      "Vesículas proteicas con genomas modernos"
    ]
  },
  {
    enunciado: "¿Qué alternativas al ARN se han propuesto como primeros portadores de información?",
    correcta: "Polímeros como PNA o TNA por su estabilidad y apareamiento",
    incorrectas: [
      "Únicamente ADN bicatenario",
      "Proteínas sin ácidos nucleicos"
    ]
  },
  {
    enunciado: "¿Qué problema físico-químico dificulta la polimerización en medios acuosos?",
    correcta: "La hidrólisis favorece la depolimerización de enlaces",
    incorrectas: [
      "El agua cataliza naturalmente enlaces fosfodiéster sin energía",
      "Los monómeros no requieren activación química"
    ]
  },
  {
    enunciado: "¿Qué es el acoplamiento quimiosmótico moderno?",
    correcta: "Síntesis de ATP por ATP sintasa impulsada por gradientes electroquímicos",
    incorrectas: [
      "Fijación de nitrógeno por nitrogenasa",
      "Fotólisis del agua por fotosistemas"
    ]
  },
  {
    enunciado: "¿Cuál es la consideración actual de los virus en biología?",
    correcta: "Entidades acelulares que no están vivas pero evolucionan por selección natural",
    incorrectas: [
      "Células completas con metabolismo propio",
      "Minerales biogénicos sin información genética"
    ]
  },
  {
    enunciado: "Ordena de menor a mayor nivel de organización:",
    correcta: "Molécula → orgánulo → célula → tejido → órgano → organismo",
    incorrectas: [
      "Tejido → molécula → célula → orgánulo → órgano → organismo",
      "Molécula → tejido → orgánulo → célula → órgano → organismo"
    ]
  },
  {
    enunciado: "¿Qué actividad realizan las ribozimas demostrando catalisis sin proteínas?",
    correcta: "Corte y ligación de cadenas de ARN",
    incorrectas: [
      "Síntesis de ADN por ADN polimerasa",
      "Traducción de ARNm a proteínas"
    ]
  },
  {
    enunciado: "¿Qué experimento clásico además del de Pasteur combatió la generación espontánea?",
    correcta: "Los experimentos de Redi con carne y gasa",
    incorrectas: [
      "El de Griffith sobre transformación bacteriana",
      "El de Meselson-Stahl sobre replicación semiconservativa"
    ]
  },
  {
    enunciado: "¿Qué aportan los conjuntos autocatalíticos a las hipótesis 'metabolismo primero'?",
    correcta: "Redes de reacciones donde los productos catalizan la formación de otros componentes del sistema",
    incorrectas: [
      "Reacciones exclusivamente fotocatalizadas por clorofila",
      "Sistemas que no requieren materia ni energía"
    ]
  },
  {
    enunciado: "¿Qué demuestra el concepto de célula mínima en biología sintética?",
    correcta: "Que un genoma reducido puede sostener funciones esenciales bajo condiciones controladas",
    incorrectas: [
      "Que la vida no necesita información genética",
      "Que todas las funciones celulares requieren miles de genes"
    ]
  },
  {
    enunciado: "En protocélulas de ácidos grasos, ¿cómo pueden crecer las vesículas?",
    correcta: "Incorporando lípidos del medio y por fusión con vesículas más pequeñas",
    incorrectas: [
      "Únicamente por mitosis con huso acromático",
      "Por replicación del ADN nuclear"
    ]
  },
  {
    enunciado: "¿Qué hallazgo apoya experimentalmente el mundo ARN en laboratorio?",
    correcta: "Evolución dirigida de ribozimas con actividad polimerasa parcial",
    incorrectas: [
      "Imposibilidad de síntesis de nucleótidos",
      "Necesidad imprescindible de proteínas modernas para toda catálisis"
    ]
  },
  {
    enunciado: "¿Qué propone la 'hipótesis de la arcilla' para nucleótidos?",
    correcta: "Superficies minerales actúan como plantillas para polimerización y ordenamiento",
    incorrectas: [
      "Las arcillas inhiben toda adsorción molecular",
      "Los minerales impiden la encapsulación en vesículas"
    ]
  },
  {
    enunciado: "¿Qué fuentes de energía son plausibles para protocélulas tempranas?",
    correcta: "Gradientes naturales (pH, protones) y reacciones redox geotermales",
    incorrectas: [
      "Únicamente luz visible en superficie",
      "Solo oxígeno molecular como aceptor final"
    ]
  },
  {
    enunciado: "¿Qué estructura constituye hoy la base de las membranas celulares?",
    correcta: "Bicapas de fosfolípidos anfipáticos con proteínas incrustadas",
    incorrectas: [
      "Cristales de silicatos hidratados",
      "Paredes de celulosa sin membrana subyacente"
    ]
  }
];
