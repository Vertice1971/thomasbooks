// temarios/44-organos-y-funciones-de-relacion-en-los-vertebrados.js
var PREGUNTAS = [
  {
    enunciado: "La función de relación en vertebrados integra principalmente:",
    correcta: "Captación sensorial, procesamiento nervioso y respuesta efectora neuro–muscular y/o endocrina",
    incorrectas: [
      "Captación sensorial y digestión exclusivamente",
      "Procesamiento hepático de estímulos y respuesta renal"
    ]
  },
  {
    enunciado: "El sistema nervioso central (SNC) de los vertebrados está formado por:",
    correcta: "Encéfalo y médula espinal",
    incorrectas: [
      "Nervios craneales y espinales",
      "Ganglios simpáticos y parasimpáticos"
    ]
  },
  {
    enunciado: "El sistema nervioso autónomo (SNA) se subdivide en:",
    correcta: "Simpático, parasimpático y entérico",
    incorrectas: [
      "Somático, motor y sensorial",
      "Cortical, límbico y piramidal"
    ]
  },
  {
    enunciado: "Una función principal del cerebelo es:",
    correcta: "Coordinación motora fina y aprendizaje motor",
    incorrectas: [
      "Producción de hormonas hipofisarias",
      "Integración primaria de olfato"
    ]
  },
  {
    enunciado: "¿Cuál es la vía funcional correcta de la información sensorial?",
    correcta: "Receptores → vías aferentes → centros integradores → vías eferentes → efectores",
    incorrectas: [
      "Eferentes → receptores → integradores → aferentes → efectores",
      "Integradores → receptores → efectores → aferentes"
    ]
  },
  {
    enunciado: "Los neuromastos de la línea lateral detectan principalmente:",
    correcta: "Vibraciones y movimiento del agua",
    incorrectas: [
      "Intensidad de radiación UV",
      "Concentración de glucosa sanguínea"
    ]
  },
  {
    enunciado: "Las ampollas de Lorenzini en condrictios permiten:",
    correcta: "Electrorecepción de campos eléctricos débiles",
    incorrectas: [
      "Termorregulación cutánea activa",
      "Producción de sonidos para el cortejo"
    ]
  },
  {
    enunciado: "En el oído interno, el equilibrio angular se detecta en:",
    correcta: "Conductos semicirculares",
    incorrectas: [
      "Cóclea",
      "Tímpano"
    ]
  },
  {
    enunciado: "Los bastones y conos son células fotorreceptoras especializadas en:",
    correcta: "Visión escotópica (bastones) y fotópica/color (conos)",
    incorrectas: [
      "Audición y equilibrio",
      "Olfato y gusto"
    ]
  },
  {
    enunciado: "El órgano vomeronasal está implicado en la detección de:",
    correcta: "Feromonas y señales químicas sociales",
    incorrectas: [
      "Cambio de presión hidrostática",
      "Radiación infrarroja térmica"
    ]
  },
  {
    enunciado: "Las fosas loreales de víboras detectan:",
    correcta: "Radiación infrarroja (calor de la presa)",
    incorrectas: [
      "Campos magnéticos terrestres",
      "Ultrasonidos aéreos"
    ]
  },
  {
    enunciado: "La vía piramidal en mamíferos está especialmente relacionada con:",
    correcta: "Control voluntario fino de la musculatura distal",
    incorrectas: [
      "Regulación endocrina del tiroides",
      "Motilidad intestinal intrínseca"
    ]
  },
  {
    enunciado: "Los ganglios basales participan principalmente en:",
    correcta: "Selección e iniciación de programas motores",
    incorrectas: [
      "Reflejos miotáticos monosinápticos",
      "Regulación osmótica renal"
    ]
  },
  {
    enunciado: "El SNA simpático prepara al organismo para:",
    correcta: "Respuesta de alerta (aumento FC, broncodilatación, vasoconstricción esplácnica)",
    incorrectas: [
      "Digestión y almacenamiento de nutrientes",
      "Disminución del gasto cardiaco y broncoconstricción"
    ]
  },
  {
    enunciado: "El SNA parasimpático promueve:",
    correcta: "Actividades de reposo y digestión (incremento peristaltismo y secreciones)",
    incorrectas: [
      "Movilización de glucógeno hepático",
      "Vasoconstricción coronaria mantenida"
    ]
  },
  {
    enunciado: "La unidad motora está formada por:",
    correcta: "Una motoneurona alfa y todas las fibras musculares que inerva",
    incorrectas: [
      "Una fibra muscular y múltiples motoneuronas",
      "Una interneurona inhibitoria y los husos neuromusculares"
    ]
  },
  {
    enunciado: "Las fibras musculares tipo I (oxidativas lentas) se caracterizan por:",
    correcta: "Alta resistencia a la fatiga y metabolismo aeróbico",
    incorrectas: [
      "Alta potencia explosiva y glucólisis anaerobia predominante",
      "Ausencia de mitocondrias"
    ]
  },
  {
    enunciado: "En aves, el gran desarrollo del cerebelo se relaciona con:",
    correcta: "Control fino del vuelo y la postura",
    incorrectas: [
      "Fermentación cecal",
      "Endurecimiento del pico"
    ]
  },
  {
    enunciado: "En mamíferos, el neocórtex está especialmente implicado en:",
    correcta: "Percepción, cognición y funciones ejecutivas",
    incorrectas: [
      "Secreción de adrenalina",
      "Producción de bilis"
    ]
  },
  {
    enunciado: "El tálamo actúa principalmente como:",
    correcta: "Centro de relevo sensorial hacia la corteza",
    incorrectas: [
      "Generador primario de reflejos medulares",
      "Músculo liso regulador de pupila"
    ]
  },
  {
    enunciado: "Un reflejo monosináptico típico es el:",
    correcta: "Miotático (estiramiento del músculo)",
    incorrectas: [
      "Reflejo nociceptivo de triple retirada",
      "Reflejo vestibulo-ocular (VOR)"
    ]
  },
  {
    enunciado: "La plasticidad sináptica a largo plazo (LTP) se asocia con:",
    correcta: "Base celular del aprendizaje y la memoria",
    incorrectas: [
      "Apoptosis neuronal fisiológica",
      "Bloqueo irreversible de neurotransmisión"
    ]
  },
  {
    enunciado: "La hormona tiroidea (T3/T4) en anfibios es clave para:",
    correcta: "Metamorfosis (remodelación de órganos y funciones)",
    incorrectas: [
      "Coagulación sanguínea",
      "Depuración renal de creatinina"
    ]
  },
  {
    enunciado: "El eje HPA (hipotálamo–hipófisis–adrenal) se activa principalmente ante:",
    correcta: "Estrés, modulando cortisol/corticosterona y homeostasis",
    incorrectas: [
      "Hipoglucemia exclusivamente por insulina alta",
      "Fiebre por pirógenos bacterianos sin mediación central"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de integración sensoriomotora rápida?",
    correcta: "Reflejo vestibulo-ocular para estabilizar la mirada durante movimientos de cabeza",
    incorrectas: [
      "Secreción hepática de bilis ante hipercalcemia",
      "Filtración glomerular ajustada por osmolaridad plasmática"
    ]
  },
  {
    enunciado: "Los fotorreceptores de aves rapaces muestran:",
    correcta: "Alta densidad de conos y fóvea profunda para agudeza visual",
    incorrectas: [
      "Predominio de bastones y visión escotópica exclusiva",
      "Cristalino fijo sin acomodación alguna"
    ]
  },
  {
    enunciado: "El tapetum lucidum confiere ventaja en:",
    correcta: "Visión nocturna por reflexión interna de luz (muchos mamíferos)",
    incorrectas: [
      "Percepción UV diurna en aves",
      "Detección de campos eléctricos"
    ]
  },
  {
    enunciado: "El sistema entérico controla principalmente:",
    correcta: "Motilidad y secreciones gastrointestinales locales",
    incorrectas: [
      "Contracción del músculo esquelético",
      "Secreción de catecolaminas medulares"
    ]
  },
  {
    enunciado: "Las motoneuronas alfa se localizan en:",
    correcta: "Asta ventral de la médula espinal",
    incorrectas: [
      "Asta dorsal de la médula",
      "Corteza visual primaria"
    ]
  },
  {
    enunciado: "Una adaptación sensorial exclusiva o muy destacada de peces elasmobranquios es:",
    correcta: "Electrorecepción a través de ampollas de Lorenzini",
    incorrectas: [
      "Órgano vomeronasal para feromonas",
      "Fosas loreales termoceptoras"
    ]
  },
  {
    enunciado: "El órgano de Corti se localiza en:",
    correcta: "Cóclea, transduciendo vibraciones en impulsos nerviosos",
    incorrectas: [
      "Utrículo para aceleración angular",
      "Tímpano para equilibrio estático"
    ]
  },
  {
    enunciado: "La integración visual subcortical en peces se centra en:",
    correcta: "Tectum óptico (mesencéfalo)",
    incorrectas: [
      "Hipocampo",
      "Bulbo raquídeo"
    ]
  },
  {
    enunciado: "La respuesta simpática típica incluye:",
    correcta: "Midriasis y aumento de la frecuencia cardiaca",
    incorrectas: [
      "Miosis y bradicardia",
      "Hipersecreción gástrica y peristalsis aumentada"
    ]
  },
  {
    enunciado: "El huso neuromuscular detecta principalmente:",
    correcta: "Estiramiento de la fibra muscular",
    incorrectas: [
      "Tensión del tendón (órgano tendinoso de Golgi)",
      "Dolor cutáneo"
    ]
  },
  {
    enunciado: "En reptiles, la visión y olfato suelen:",
    correcta: "Estar muy desarrollados, con apoyo del órgano vomeronasal",
    incorrectas: [
      "Ser rudimentarios y sustituidos por electrorecepción",
      "Depender de un tapetum en todas las especies"
    ]
  },
  {
    enunciado: "Las aferencias propioceptivas contribuyen a:",
    correcta: "Control postural y coordinación del movimiento",
    incorrectas: [
      "Secreción pancreática endocrina",
      "Filtración glomerular"
    ]
  },
  {
    enunciado: "Una función del sistema límbico en mamíferos es:",
    correcta: "Procesamiento de emoción, motivación y memoria",
    incorrectas: [
      "Generación del reflejo rotuliano",
      "Secreción de bilis"
    ]
  },
  {
    enunciado: "El VOR (reflejo vestíbulo-ocular) compensa:",
    correcta: "Movimientos de la cabeza con movimientos oculares opuestos",
    incorrectas: [
      "Cambios de presión sanguínea con vasoconstricción esplácnica",
      "Deshidratación con diuresis"
    ]
  },
  {
    enunciado: "La melatonina secretada por la glándula pineal está implicada en:",
    correcta: "Ritmos circadianos y estacionales",
    incorrectas: [
      "Activación inmediata de musculatura esquelética",
      "Digestión de proteínas en el estómago"
    ]
  }
];
