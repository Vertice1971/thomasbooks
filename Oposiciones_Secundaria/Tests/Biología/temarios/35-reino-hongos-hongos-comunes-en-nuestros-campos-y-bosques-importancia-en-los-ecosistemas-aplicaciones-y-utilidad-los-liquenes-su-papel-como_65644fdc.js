// temarios/35-reino-hongos-hongos-comunes-en-nuestros-campos-y-bosques-importancia-en-los-ecosistemas-aplicaciones-y-utilidad-los-liquenes-su-papel-como-indicadores.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es un rasgo estructural característico del Reino Fungi?",
    correcta: "Pared celular con quitina y nutrición por absorción",
    incorrectas: [
      "Pared de peptidoglucano y nutrición por ingestión",
      "Pared de celulosa y nutrición fotoautótrofa"
    ]
  },
  {
    enunciado: "El conjunto de hifas entrelazadas que constituye el cuerpo vegetativo del hongo se denomina:",
    correcta: "Micelio",
    incorrectas: [
      "Estroma",
      "Basidio"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes grupos incluye la mayoría de levaduras y mohos como Penicillium y Aspergillus?",
    correcta: "Ascomycota",
    incorrectas: [
      "Basidiomycota",
      "Chytridiomycota"
    ]
  },
  {
    enunciado: "Las setas de láminas como Agaricus y Amanita pertenecen a:",
    correcta: "Basidiomycota",
    incorrectas: [
      "Ascomycota",
      "Glomeromycotina exclusivamente"
    ]
  },
  {
    enunciado: "Un ejemplo clásico de hongo comestible silvestre en bosques templados es:",
    correcta: "Boletus edulis",
    incorrectas: [
      "Amanita phalloides",
      "Cortinarius orellanus"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes especies es potencialmente mortal por amatoxinas?",
    correcta: "Amanita phalloides",
    incorrectas: [
      "Agaricus bisporus",
      "Pleurotus ostreatus"
    ]
  },
  {
    enunciado: "Los hongos saprobios cumplen principalmente la función de:",
    correcta: "Descomponer materia orgánica y reciclar nutrientes",
    incorrectas: [
      "Fijar nitrógeno atmosférico en nódulos de raíz",
      "Realizar fotosíntesis oxigénica"
    ]
  },
  {
    enunciado: "Las enzimas fúngicas clave en la degradación de lignina son:",
    correcta: "Lacasas y peroxidasas",
    incorrectas: [
      "Amilasas y quitinasas únicamente",
      "DNA polimerasas y ligasas"
    ]
  },
  {
    enunciado: "Las ectomicorrizas se establecen típicamente entre:",
    correcta: "Hongos basidiomicetos/ascomicetos y raíces de árboles (p. ej., Quercus, Pinus)",
    incorrectas: [
      "Cianobacterias y raíces de gramíneas",
      "Protozoos y raíces de leguminosas"
    ]
  },
  {
    enunciado: "Las micorrizas arbusculares, muy extendidas en plantas herbáceas, las forman principalmente:",
    correcta: "Glomeromycotina (Mucoromycota)",
    incorrectas: [
      "Chytridiomycota",
      "Zygomycota sensu stricto vigente"
    ]
  },
  {
    enunciado: "Un hongo entomopatógeno utilizado en control biológico de plagas es:",
    correcta: "Beauveria bassiana",
    incorrectas: [
      "Saccharomyces cerevisiae",
      "Agaricus bisporus"
    ]
  },
  {
    enunciado: "¿Cuál es el agente fúngico relacionado con el declive de anfibios a escala global?",
    correcta: "Batrachochytrium dendrobatidis",
    incorrectas: [
      "Candida albicans",
      "Ustilago maydis"
    ]
  },
  {
    enunciado: "Una micosis humana oportunista frecuente en pacientes inmunodeprimidos es:",
    correcta: "Aspergilosis por Aspergillus fumigatus",
    incorrectas: [
      "Paludismo por Plasmodium",
      "Giardiasis por Giardia"
    ]
  },
  {
    enunciado: "Las royas de los cereales (como Puccinia) son:",
    correcta: "Basidiomicetos fitopatógenos",
    incorrectas: [
      "Ascomicetos entomopatógenos",
      "Oomicetos siempre saprobios"
    ]
  },
  {
    enunciado: "¿Qué compuesto antibiótico fue descubierto originalmente en un hongo?",
    correcta: "Penicilina producida por Penicillium",
    incorrectas: [
      "Tetraciclina producida por cianobacterias",
      "Vancomicina producida por algas rojas"
    ]
  },
  {
    enunciado: "Una aplicación biotecnológica de hongos en industria alimentaria es:",
    correcta: "Fermentación de quesos con Penicillium camemberti/roqueforti",
    incorrectas: [
      "Producción de clorofila b para colorantes",
      "Fijación biológica de nitrógeno en leguminosas"
    ]
  },
  {
    enunciado: "Las setas cultivadas más comunes a nivel mundial incluyen:",
    correcta: "Agaricus, Pleurotus y Lentinula",
    incorrectas: [
      "Amanita, Cortinarius y Gyromitra",
      "Penicillium, Aspergillus y Fusarium como setas"
    ]
  },
  {
    enunciado: "Los 'líquenes' son:",
    correcta: "Simbiosis estable entre un hongo (micobionte) y un fotobionte (alga/cianobacteria)",
    incorrectas: [
      "Hongos basidiomicetos de vida libre exclusivamente",
      "Asociaciones entre plantas vasculares y bacterias"
    ]
  },
  {
    enunciado: "La mayoría de micobiontes en líquenes pertenecen a:",
    correcta: "Ascomycota",
    incorrectas: [
      "Basidiomycota en exclusiva",
      "Glomeromycotina"
    ]
  },
  {
    enunciado: "Las formas morfológicas típicas de los líquenes son:",
    correcta: "Crustosa, foliosa y fruticulosa",
    incorrectas: [
      "Lamelar, tubular y acicular",
      "Radial, birradial y bilateral"
    ]
  },
  {
    enunciado: "Un papel ecológico clave de los líquenes es:",
    correcta: "Ser pioneros en sucesión primaria y contribuir a la meteorización de rocas",
    incorrectas: [
      "Producir semillas viables para colonizar dunas",
      "Fijar fósforo atmosférico directamente"
    ]
  },
  {
    enunciado: "Muchos líquenes con cianobacterias pueden:",
    correcta: "Fijar nitrógeno y enriquecer suelos pobres",
    incorrectas: [
      "Realizar quimiosíntesis de sulfuro",
      "Descomponer lignina de forma exclusiva"
    ]
  },
  {
    enunciado: "Los líquenes son buenos bioindicadores porque:",
    correcta: "Son sensibles a contaminantes aéreos como SO₂, NOx y NH₃",
    incorrectas: [
      "Carecen de intercambio con la atmósfera",
      "Se alimentan sólo de materia del suelo"
    ]
  },
  {
    enunciado: "El Índice de Pureza Atmosférica (IAP) se basa en:",
    correcta: "Riqueza/cobertura de líquenes epífitos a lo largo de gradientes de contaminación",
    incorrectas: [
      "Medir clorofila b en hojas de pino",
      "Cuantificar bacterias del aire por Gram"
    ]
  },
  {
    enunciado: "Una técnica de biomonitoreo con líquenes consiste en:",
    correcta: "Trasplantes de talos y análisis de bioacumulación de metales",
    incorrectas: [
      "Cultivo axénico de líquenes en suelo agrícola",
      "Tinción de Ziehl–Neelsen de esporas líquenicas"
    ]
  },
  {
    enunciado: "Un ejemplo de hongo fitopatógeno de poscosecha es:",
    correcta: "Botrytis cinerea",
    incorrectas: [
      "Batrachochytrium salamandrivorans",
      "Beauveria bassiana"
    ]
  },
  {
    enunciado: "El 'white rot' (podredumbre blanca) se asocia a hongos que:",
    correcta: "Degradan lignina dejando celulosa relativamente intacta",
    incorrectas: [
      "Sólo degradan celulosa y hemicelulosa",
      "No producen enzimas extracelulares"
    ]
  },
  {
    enunciado: "El níscalo (Lactarius deliciosus) es un hongo:",
    correcta: "Ectomicorrícico, comestible y común en pinares",
    incorrectas: [
      "Saprobio exclusivo de estiércol",
      "Basidiomiceto tóxico mortal por amatoxinas"
    ]
  },
  {
    enunciado: "Una toxina fúngica de interés en seguridad alimentaria es:",
    correcta: "Aflatoxina producida por Aspergillus",
    incorrectas: [
      "Brevetoxina de dinoflagelados",
      "Saxitoxina de diatomeas"
    ]
  },
  {
    enunciado: "¿Cuál es una levadura clave en panificación y bebidas fermentadas?",
    correcta: "Saccharomyces cerevisiae",
    incorrectas: [
      "Candida auris",
      "Ustilago maydis"
    ]
  },
  {
    enunciado: "Un agente de biocontrol contra hongos fitopatógenos del suelo es:",
    correcta: "Trichoderma spp.",
    incorrectas: [
      "Cryptococcus neoformans",
      "Puccinia graminis"
    ]
  },
  {
    enunciado: "En la recogida de setas para consumo, una recomendación esencial es:",
    correcta: "No consumir ejemplares sin identificación experta y respetar la normativa local",
    incorrectas: [
      "Consumir cualquiera con olor agradable",
      "Evitar cortar el pie para conservar el micelio"
    ]
  },
  {
    enunciado: "Una utilidad industrial de hongos blancos de pudrición es:",
    correcta: "Biorremediación de tintes y contaminantes orgánicos persistentes",
    incorrectas: [
      "Síntesis de peptidoglucano para antibióticos",
      "Fijación directa de CO₂ en cloroplastos"
    ]
  },
  {
    enunciado: "Las basidiosporas se forman en:",
    correcta: "Basidios situados en la superficie fértil del basidioma",
    incorrectas: [
      "Ascas en el himenio de apotecios",
      "Esporangios de oomicetos"
    ]
  },
  {
    enunciado: "Morchella (colmenillas) pertenece a:",
    correcta: "Ascomycota y produce ascosporas",
    incorrectas: [
      "Basidiomycota y produce basidiosporas",
      "Glomeromycotina y produce zigosporas"
    ]
  },
  {
    enunciado: "La reserva energética más común en los hongos es:",
    correcta: "Glucógeno",
    incorrectas: [
      "Almidón en amiloplastos",
      "Grasa exclusivamente en vacuolas lipídicas de plantas"
    ]
  },
  {
    enunciado: "Una característica de los carbohidratos estructurales de pared en Fungi es:",
    correcta: "Quitina y glucanos",
    incorrectas: [
      "Celulosa microfibrilar exclusiva",
      "Peptidoglucano con ácido murámico"
    ]
  },
  {
    enunciado: "El micelio puede formar estructuras de supervivencia como:",
    correcta: "Esclerocios",
    incorrectas: [
      "Heterocistos",
      "Acinetos"
    ]
  },
  {
    enunciado: "Un hongo responsable de la 'caries del maíz' o carbón es:",
    correcta: "Ustilago maydis",
    incorrectas: [
      "Puccinia striiformis (roya lineal del trigo)",
      "Rhizopus oryzae (fermentaciones alimentarias)"
    ]
  },
  {
    enunciado: "Entre los beneficios ecosistémicos de hongos y líquenes destaca:",
    correcta: "Contribuir a ciclos de nutrientes, estabilidad del suelo y bioindicación ambiental",
    incorrectas: [
      "Reducir la biodiversidad vegetal por competencia universal",
      "Bloquear la formación de suelos en etapas tempranas"
    ]
  }
];
