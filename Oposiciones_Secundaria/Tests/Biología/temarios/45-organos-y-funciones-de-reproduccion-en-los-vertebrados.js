// temarios/45-organos-y-funciones-de-reproduccion-en-los-vertebrados.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la tríada clásica de modos reproductivos en vertebrados?",
    correcta: "Oviparidad, ovoviviparidad y viviparidad",
    incorrectas: [
      "Gemación, fragmentación y esporulación",
      "Partenogénesis obligada, bipartición y estrobilación"
    ]
  },
  {
    enunciado: "La fecundación externa es característica sobre todo de:",
    correcta: "Muchos peces y anfibios",
    incorrectas: [
      "Aves y mamíferos",
      "Crocodilianos exclusivamente"
    ]
  },
  {
    enunciado: "La fecundación interna es la regla en:",
    correcta: "Reptiles, aves y mamíferos",
    incorrectas: [
      "Ciclóstomos y la mayoría de anuros",
      "Todos los peces óseos sin excepción"
    ]
  },
  {
    enunciado: "En el eje hipotálamo–hipófisis–gónadas, ¿qué hormona hipotalámica inicia la cascada?",
    correcta: "GnRH",
    incorrectas: [
      "TRH",
      "CRH"
    ]
  },
  {
    enunciado: "¿Qué hormonas adenohipofisarias estimulan directamente las gónadas?",
    correcta: "FSH y LH",
    incorrectas: [
      "TSH y ACTH",
      "Prolactina y ADH"
    ]
  },
  {
    enunciado: "La célula de Sertoli cumple principalmente la función de:",
    correcta: "Sostén y regulación de la espermatogénesis",
    incorrectas: [
      "Síntesis de testosterona",
      "Producción de bilis"
    ]
  },
  {
    enunciado: "Las células de Leydig producen:",
    correcta: "Testosterona",
    incorrectas: [
      "Estradiol exclusivamente",
      "Progesterona en altas cantidades"
    ]
  },
  {
    enunciado: "La maduración y almacenamiento inicial de los espermatozoides ocurre en:",
    correcta: "Epidídimo",
    incorrectas: [
      "Túbulos colectores renales",
      "Vesículas seminales"
    ]
  },
  {
    enunciado: "La principal contribución de las vesículas seminales al semen es:",
    correcta: "Fructosa y volumen del líquido seminal",
    incorrectas: [
      "Espermatozoides funcionales",
      "Gonadotropinas"
    ]
  },
  {
    enunciado: "La reacción acrosómica permite al espermatozoide:",
    correcta: "Penetrar las envolturas del ovocito",
    incorrectas: [
      "Dividirse por mitosis",
      "Formar el blastocisto"
    ]
  },
  {
    enunciado: "La capacitación espermática en mamíferos ocurre típicamente en:",
    correcta: "Tracto reproductor femenino",
    incorrectas: [
      "Epidídimo",
      "Testículo"
    ]
  },
  {
    enunciado: "El bloqueo de la polispermia tras la fecundación incluye:",
    correcta: "Reacción cortical y elevación de la membrana vitelina/zona pelúcida",
    incorrectas: [
      "Inhibición de GnRH",
      "Lisis de la corona radiada por pepsina"
    ]
  },
  {
    enunciado: "En aves, normalmente el ovario funcional es el:",
    correcta: "Izquierdo",
    incorrectas: [
      "Derecho",
      "Ambos siempre"
    ]
  },
  {
    enunciado: "Orden correcto de regiones del oviducto aviar donde se forma el huevo:",
    correcta: "Infundíbulo → magno → istmo → útero (glándula de la cáscara) → vagina",
    incorrectas: [
      "Istmo → magno → útero → infundíbulo → vagina",
      "Útero → infundíbulo → istmo → magno → vagina"
    ]
  },
  {
    enunciado: "Las membranas extraembrionarias comunes a los amniotas incluyen:",
    correcta: "Amnios, corion, alantoides y saco vitelino",
    incorrectas: [
      "Corion, pericardio y pleura",
      "Amnios, placenta, timo"
    ]
  },
  {
    enunciado: "La placenta típica de los mamíferos euterios es:",
    correcta: "Corioalantoidea",
    incorrectas: [
      "Coriovitelinea como norma general",
      "Amniocorial exclusivamente"
    ]
  },
  {
    enunciado: "La placenta hemocorial es característica de:",
    correcta: "Muchos euterios (p. ej., primates y roedores)",
    incorrectas: [
      "Todas las aves",
      "Condroictios"
    ]
  },
  {
    enunciado: "Los marsupiales se caracterizan por:",
    correcta: "Gestación corta y desarrollo posnatal prolongado (marsupio)",
    incorrectas: [
      "Oviparidad con cáscara calcárea",
      "Placenta hemocorial extensa como los primates"
    ]
  },
  {
    enunciado: "Los monotremas (ornitorrinco y equidnas) son:",
    correcta: "Mamíferos ovíparos",
    incorrectas: [
      "Mamíferos vivíparos placentarios",
      "Reptiles con glándulas mamarias"
    ]
  },
  {
    enunciado: "Los hemipenes son órganos copuladores propios de:",
    correcta: "Muchos escamosos (lagartos y serpientes)",
    incorrectas: [
      "Aves paseriformes",
      "Anfibios anuros"
    ]
  },
  {
    enunciado: "Los clásperes son estructuras copuladoras presentes en:",
    correcta: "Peces condrictios (machos)",
    incorrectas: [
      "Peces óseos hembra",
      "Aves rapaces"
    ]
  },
  {
    enunciado: "En reptiles y aves, el almacenamiento espermático femenino puede realizarse en:",
    correcta: "Espermatecas del oviducto",
    incorrectas: [
      "Vesículas seminales femeninas",
      "Uretra proximal"
    ]
  },
  {
    enunciado: "El pico preovulatorio de LH en mamíferos provoca:",
    correcta: "Ovulación",
    incorrectas: [
      "Lactancia",
      "Espermatogénesis en Sertoli"
    ]
  },
  {
    enunciado: "La progesterona durante la fase lútea promueve:",
    correcta: "Secretoriedad endometrial y mantenimiento del embarazo temprano",
    incorrectas: [
      "Contracciones uterinas intensas",
      "Ovulación continua"
    ]
  },
  {
    enunciado: "La prolactina está implicada en:",
    correcta: "Lactancia y, en aves/peces, conductas de cuidado parental",
    incorrectas: [
      "Ovulación inmediata",
      "Reabsorción de calcio óseo exclusivamente"
    ]
  },
  {
    enunciado: "La oxitocina desencadena principalmente:",
    correcta: "Contracciones uterinas y eyección de leche",
    incorrectas: [
      "Inhibición de la motilidad uterina",
      "Ovulación"
    ]
  },
  {
    enunciado: "La determinación sexual por temperatura (TSD) se observa en:",
    correcta: "Muchos reptiles (quelonios y cocodrilianos)",
    incorrectas: [
      "Aves canoras",
      "Todos los mamíferos"
    ]
  },
  {
    enunciado: "El hermafroditismo secuencial protogínico implica:",
    correcta: "Hembra → macho a lo largo de la vida",
    incorrectas: [
      "Macho → hembra",
      "Ambos sexos funcionales simultáneamente"
    ]
  },
  {
    enunciado: "La ovoviviparidad se define como:",
    correcta: "Retención de huevos y eclosión interna sin placenta funcional",
    incorrectas: [
      "Desarrollo con intercambio materno-fetal por placenta",
      "Puesta externa con incubación parental"
    ]
  },
  {
    enunciado: "Un ejemplo de cuidado parental intenso en vertebrados es:",
    correcta: "Incubación y alimentación biparental en aves",
    incorrectas: [
      "Ausencia total de cuidados en todos los peces",
      "Eclosión asistida por la placenta"
    ]
  },
  {
    enunciado: "En peces teleósteos, el hermafroditismo es:",
    correcta: "Frecuente en distintos linajes (p. ej., lábridos, serránidos)",
    incorrectas: [
      "Inexistente por limitaciones fisiológicas",
      "Exclusivo de cartilaginosos"
    ]
  },
  {
    enunciado: "La temporada reproductiva estacional en muchos vertebrados está sincronizada por:",
    correcta: "Fotoperiodo vía melatonina y eje HPG",
    incorrectas: [
      "Reflejo rotuliano",
      "Disminución de T3/T4 siempre"
    ]
  },
  {
    enunciado: "El estrés crónico (eje HPA) suele:",
    correcta: "Inhibir la función reproductiva vía supresión de GnRH",
    incorrectas: [
      "Estimular la ovulación en todas las especies",
      "Aumentar la secreción de FSH de forma sostenida"
    ]
  },
  {
    enunciado: "Las regiones del oviducto aviar donde se añaden la albúmina y la cáscara son, respectivamente:",
    correcta: "Magno y útero",
    incorrectas: [
      "Istmo y cloaca",
      "Infundíbulo y vagina"
    ]
  },
  {
    enunciado: "En mamíferos euterios, la implantación se produce cuando:",
    correcta: "El blastocisto eclosiona de la zona pelúcida y se adhiere al endometrio",
    incorrectas: [
      "El cigoto entra en meiosis II",
      "La mórula se fusiona con el cuerpo lúteo"
    ]
  },
  {
    enunciado: "En peces y anfibios con fecundación externa, la sincronización reproductiva depende con frecuencia de:",
    correcta: "Señales ambientales (temperatura, lluvias, fotoperiodo)",
    incorrectas: [
      "Placenta funcional",
      "Ciclo menstrual con menstruación"
    ]
  },
  {
    enunciado: "Un rasgo típico de los huevos de aves es:",
    correcta: "Cáscara calcárea y membranas extraembrionarias completas",
    incorrectas: [
      "Ausencia de alantoides",
      "Cáscara quitinosa"
    ]
  },
  {
    enunciado: "En reptiles vivíparos, la viviparidad ha evolucionado:",
    correcta: "De manera independiente en múltiples linajes",
    incorrectas: [
      "Una sola vez y se perdió después",
      "Solo en quelonios marinos"
    ]
  },
  {
    enunciado: "En mamíferos, la espermatogénesis es:",
    correcta: "Continuada tras la pubertad bajo control de FSH/LH y testosterona",
    incorrectas: [
      "Limitada a un número fijo de ciclos prenatales",
      "Independiente de Sertoli y Leydig"
    ]
  }
];
