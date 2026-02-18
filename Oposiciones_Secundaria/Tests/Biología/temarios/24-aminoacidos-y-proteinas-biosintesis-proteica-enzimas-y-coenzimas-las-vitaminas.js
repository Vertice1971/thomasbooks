// temarios/24-aminoacidos-y-proteinas-biosintesis-proteica-enzimas-y-coenzimas-las-vitaminas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué enantiómero de aminoácidos predomina en las proteínas de los seres vivos?",
    correcta: "La serie L",
    incorrectas: [
      "La serie D",
      "No hay enantiómeros en aminoácidos"
    ]
  },
  {
    enunciado: "Un aminoácido en disolución a pH fisiológico suele encontrarse como…",
    correcta: "Zwitterión (catión–anión interno)",
    incorrectas: [
      "Molécula totalmente neutra sin cargas",
      "Anión sin grupo protonado"
    ]
  },
  {
    enunciado: "¿Qué define a un aminoácido esencial en humanos?",
    correcta: "No puede sintetizarse en cantidad suficiente y debe obtenerse en la dieta",
    incorrectas: [
      "Es el único que participa en enlaces peptídicos",
      "Solo se encuentra en plantas"
    ]
  },
  {
    enunciado: "Los aminoácidos aromáticos destacan por…",
    correcta: "Absorber luz UV alrededor de 280 nm",
    incorrectas: [
      "Ser siempre cargados positivamente",
      "Carecer de anillos en su estructura"
    ]
  },
  {
    enunciado: "Los puentes disulfuro en proteínas se forman entre residuos de…",
    correcta: "Cisteína",
    incorrectas: [
      "Metionina",
      "Serina"
    ]
  },
  {
    enunciado: "El enlace peptídico se caracteriza por…",
    correcta: "Carácter parcialmente doble y planitud",
    incorrectas: [
      "Ser un enlace éster",
      "Rotación libre completa"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes es una estructura secundaria típica?",
    correcta: "Hélice α y lámina β",
    incorrectas: [
      "Dominio SH2",
      "Puente disulfuro exclusivamente"
    ]
  },
  {
    enunciado: "La estructura terciaria de una proteína se estabiliza principalmente por…",
    correcta: "Interacciones hidrofóbicas, puentes de H, iónicas y disulfuro",
    incorrectas: [
      "Enlaces peptídicos exclusivamente",
      "Enlaces glucosídicos"
    ]
  },
  {
    enunciado: "La hemoglobina es un ejemplo de estructura…",
    correcta: "Cuaternaria (tetramérica α2β2)",
    incorrectas: [
      "Primaria",
      "Secundaria"
    ]
  },
  {
    enunciado: "¿Qué provoca la desnaturalización proteica?",
    correcta: "Pérdida de la conformación nativa por pH/temperatura/caotrópicos",
    incorrectas: [
      "Ruptura de todos los enlaces peptídicos",
      "Aumento de la actividad catalítica siempre"
    ]
  },
  {
    enunciado: "Las chaperonas moleculares (p. ej., Hsp70/Hsp60) actúan…",
    correcta: "Asistiendo el plegamiento y evitando agregación",
    incorrectas: [
      "Catalizando enlaces peptídicos en el ribosoma",
      "Degradando proteínas en el proteasoma"
    ]
  },
  {
    enunciado: "El sistema ubiquitina–proteasoma sirve para…",
    correcta: "Degradar proteínas marcadas con poliubiquitina",
    incorrectas: [
      "Exportar proteínas al retículo liso",
      "Sintetizar aminoácidos esenciales"
    ]
  },
  {
    enunciado: "En eucariotas, la transcripción de ARNm la realiza principalmente…",
    correcta: "ARN polimerasa II",
    incorrectas: [
      "ARN polimerasa I",
      "ADN polimerasa δ"
    ]
  },
  {
    enunciado: "El empalme (splicing) del pre-ARNm…",
    correcta: "Elimina intrones y une exones",
    incorrectas: [
      "Añade intrones al ARNm maduro",
      "Degrada el ARNm en el núcleo"
    ]
  },
  {
    enunciado: "La enzima que carga un aminoácido específico en su tRNA correspondiente es…",
    correcta: "Aminoacil-tRNA sintetasa",
    incorrectas: [
      "Peptidil transferasa",
      "ARN polimerasa III"
    ]
  },
  {
    enunciado: "El centro peptidil transferasa del ribosoma es…",
    correcta: "Una ribozima del rRNA",
    incorrectas: [
      "Una proteasa dependiente de zinc",
      "Una ligasa de ADN"
    ]
  },
  {
    enunciado: "La iniciación de la traducción en bacterias requiere…",
    correcta: "Reconocimiento de la secuencia Shine-Dalgarno",
    incorrectas: [
      "Un cap 5’ obligatorio",
      "Corte del intrón por el espliceosoma"
    ]
  },
  {
    enunciado: "Durante la elongación, ¿qué factor entrega el aa-tRNA al sitio A del ribosoma?",
    correcta: "EF-Tu (bacterias) / eEF1A (eucariotas)",
    incorrectas: [
      "EF-G / eEF2",
      "eIF2"
    ]
  },
  {
    enunciado: "Los codones de terminación estándar son…",
    correcta: "UAA, UAG y UGA",
    incorrectas: [
      "AUG, UGG y UGA",
      "UUA, UCA y UGA"
    ]
  },
  {
    enunciado: "Un grupo importante de antibióticos (p. ej., macrólidos) actúa…",
    correcta: "Inhibiendo la traducción en ribosomas bacterianos",
    incorrectas: [
      "Bloqueando la síntesis de ADN en mitocondrias humanas",
      "Hidrolizando enlaces peptídicos del colágeno"
    ]
  },
  {
    enunciado: "Una enzima acelera una reacción porque…",
    correcta: "Disminuye la energía de activación estabilizando el estado de transición",
    incorrectas: [
      "Hace la reacción más exotérmica",
      "Cambia el equilibrio químico final"
    ]
  },
  {
    enunciado: "En cinética de Michaelis–Menten, Km representa…",
    correcta: "La concentración de sustrato a la que V0 = 1/2 Vmax",
    incorrectas: [
      "La velocidad máxima de la reacción",
      "La constante de inhibición competitiva"
    ]
  },
  {
    enunciado: "En la inhibición competitiva pura…",
    correcta: "Aumenta Km y Vmax no cambia",
    incorrectas: [
      "Disminuye Vmax y Km no cambia",
      "Disminuyen Km y Vmax"
    ]
  },
  {
    enunciado: "La inhibición no competitiva pura se caracteriza por…",
    correcta: "Disminución de Vmax sin cambio en Km",
    incorrectas: [
      "Aumento de Km sin cambio en Vmax",
      "Disminución simultánea de Km y Vmax"
    ]
  },
  {
    enunciado: "Una enzima alostérica suele mostrar…",
    correcta: "Curva sigmoide de saturación y regulación por efectores",
    incorrectas: [
      "Cinética estrictamente hiperbólica",
      "Insensibilidad a cambios conformacionales"
    ]
  },
  {
    enunciado: "Un cofactor enzimático puede ser…",
    correcta: "Un ión metálico o una coenzima orgánica",
    incorrectas: [
      "Solo un polisacárido",
      "Siempre un péptido señal"
    ]
  },
  {
    enunciado: "¿De qué vitamina deriva principalmente NAD⁺/NADP⁺?",
    correcta: "Niacina (vitamina B3)",
    incorrectas: [
      "Riboflavina (B2)",
      "Tiamina (B1)"
    ]
  },
  {
    enunciado: "FAD y FMN derivan de…",
    correcta: "Riboflavina (vitamina B2)",
    incorrectas: [
      "Ácido pantoténico (B5)",
      "Biotina (B7)"
    ]
  },
  {
    enunciado: "La coenzima A (CoA) procede de…",
    correcta: "Ácido pantoténico (vitamina B5)",
    incorrectas: [
      "Piridoxina (B6)",
      "Ácido fólico (B9)"
    ]
  },
  {
    enunciado: "El fosfato de piridoxal (PLP), coenzima de transaminasas, deriva de…",
    correcta: "Vitamina B6",
    incorrectas: [
      "Vitamina B1",
      "Vitamina B12"
    ]
  },
  {
    enunciado: "El pirofosfato de tiamina (TPP) es coenzima característica de…",
    correcta: "Vitamina B1",
    incorrectas: [
      "Vitamina B2",
      "Vitamina C"
    ]
  },
  {
    enunciado: "La biotina (B7) actúa principalmente como coenzima en…",
    correcta: "Reacciones de carboxilación",
    incorrectas: [
      "Reacciones de desaminación",
      "Reacciones de desfosforilación"
    ]
  },
  {
    enunciado: "El folato (B9) en forma de THF participa en…",
    correcta: "Transferencia de unidades de un carbono",
    incorrectas: [
      "Transporte de electrones a la cadena respiratoria",
      "β-oxidación de ácidos grasos"
    ]
  },
  {
    enunciado: "La vitamina B12 es necesaria para…",
    correcta: "Metionina sintasa y metilmalonil-CoA mutasa",
    incorrectas: [
      "Fosfofructoquinasa-1",
      "Piruvato deshidrogenasa (E1) sin cofactores"
    ]
  },
  {
    enunciado: "La vitamina C (ácido ascórbico) es cofactor en…",
    correcta: "Hidroxilación de prolina y lisina en colágeno",
    incorrectas: [
      "Carboxilación de residuos de glutamato en factores de coagulación",
      "Desaminación oxidativa de glutamato"
    ]
  },
  {
    enunciado: "La vitamina A (retinoides) es esencial para…",
    correcta: "La visión (ciclo del retinal) y diferenciación epitelial",
    incorrectas: [
      "Síntesis de colesterol",
      "Coagulación sanguínea directa"
    ]
  },
  {
    enunciado: "La vitamina D activa (calcitriol) regula…",
    correcta: "Homeostasis del calcio y fósforo",
    incorrectas: [
      "Síntesis de catecolaminas",
      "Metabolismo del hierro en hemoglobina"
    ]
  },
  {
    enunciado: "La vitamina E (tocoferoles) actúa principalmente como…",
    correcta: "Antioxidante de membranas",
    incorrectas: [
      "Coenzima de transaminasas",
      "Hormona esteroidea"
    ]
  },
  {
    enunciado: "La vitamina K es necesaria para…",
    correcta: "γ-carboxilación de factores de coagulación",
    incorrectas: [
      "Síntesis de insulina",
      "Transporte de oxígeno por la hemoglobina"
    ]
  },
  {
    enunciado: "Una diferencia clave entre vitaminas hidrosolubles y liposolubles es que las primeras…",
    correcta: "Se almacenan poco y su déficit aparece antes",
    incorrectas: [
      "Se absorben junto a quilomicrones",
      "Se acumulan ampliamente en hígado y tejido adiposo"
    ]
  }
];
