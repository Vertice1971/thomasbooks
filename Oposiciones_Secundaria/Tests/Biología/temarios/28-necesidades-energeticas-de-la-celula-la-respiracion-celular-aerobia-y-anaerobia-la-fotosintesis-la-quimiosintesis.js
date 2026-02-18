// temarios/28-necesidades-energeticas-de-la-celula-la-respiracion-celular-aerobia-y-anaerobia-la-fotosintesis-la-quimiosintesis.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función principal del ATP en la célula?",
    correcta: "Actuar como moneda energética que acopla reacciones exergónicas con endergónicas",
    incorrectas: [
      "Servir como principal almacén de información genética",
      "Formar la bicapa lipídica de todas las membranas biológicas"
    ]
  },
  {
    enunciado: "¿Qué coenzima redox se reduce a lo largo del catabolismo para transportar equivalentes reductores a la cadena respiratoria?",
    correcta: "NAD⁺",
    incorrectas: [
      "CoA",
      "Biotina"
    ]
  },
  {
    enunciado: "¿En qué lugar celular tiene lugar la glucólisis en eucariotas?",
    correcta: "En el citosol",
    incorrectas: [
      "En la matriz mitocondrial",
      "En la membrana interna mitocondrial"
    ]
  },
  {
    enunciado: "¿Cuál es el balance neto de ATP por molécula de glucosa en la glucólisis (contando sólo ATP, no NADH)?",
    correcta: "2 ATP netos",
    incorrectas: [
      "4 ATP netos",
      "1 ATP neto"
    ]
  },
  {
    enunciado: "¿Qué complejo multienzimático convierte el piruvato en acetil-CoA?",
    correcta: "Complejo piruvato deshidrogenasa",
    incorrectas: [
      "ATP sintasa",
      "Piruvato carboxilasa"
    ]
  },
  {
    enunciado: "¿Dónde se localiza el ciclo de Krebs en células eucariotas?",
    correcta: "En la matriz mitocondrial",
    incorrectas: [
      "En el espacio intermembrana",
      "En el citosol"
    ]
  },
  {
    enunciado: "¿Cuál es el aceptor final de electrones en la respiración aerobia?",
    correcta: "El oxígeno (O₂)",
    incorrectas: [
      "El nitrato (NO₃⁻)",
      "El sulfato (SO₄²⁻)"
    ]
  },
  {
    enunciado: "La teoría quimiosmótica de Mitchell explica que la síntesis de ATP se acopla a:",
    correcta: "Un gradiente electroquímico de protones a través de una membrana",
    incorrectas: [
      "La hidrólisis directa de NADH en el citosol",
      "La formación de CO₂ en el ciclo de Krebs"
    ]
  },
  {
    enunciado: "¿Cuál es la función de la ATP sintasa?",
    correcta: "Usar el flujo de protones para fosforilar ADP a ATP",
    incorrectas: [
      "Oxidar NADH a NAD⁺",
      "Reducir O₂ a H₂O sin acoplar síntesis de ATP"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes NO es un componente móvil de la cadena de transporte electrónico mitocondrial?",
    correcta: "Complejo II",
    incorrectas: [
      "Coenzima Q (ubiquinona)",
      "Citocromo c"
    ]
  },
  {
    enunciado: "En condiciones aeróbicas, el destino principal del NADH citosólico generado en la glucólisis es:",
    correcta: "Entregar electrones a la cadena respiratoria a través de lanzaderas (malato-aspartato o glicerol-3-fosfato)",
    incorrectas: [
      "Reducir el piruvato a lactato en todas las células",
      "Entrar directamente a la matriz por difusión simple"
    ]
  },
  {
    enunciado: "¿Qué rendimiento energético global se acepta actualmente para la oxidación aerobia de una molécula de glucosa en eucariotas?",
    correcta: "Aproximadamente 30–32 ATP",
    incorrectas: [
      "Exactamente 38 ATP en todos los tejidos",
      "Menos de 10 ATP por efectos de pérdidas térmicas"
    ]
  },
  {
    enunciado: "¿Qué distingue a la respiración anaerobia de la fermentación?",
    correcta: "La respiración anaerobia usa aceptores inorgánicos diferentes del O₂; la fermentación usa aceptores orgánicos derivados del sustrato",
    incorrectas: [
      "La respiración anaerobia ocurre sólo en eucariotas; la fermentación sólo en procariotas",
      "La fermentación produce siempre más ATP que la respiración anaerobia"
    ]
  },
  {
    enunciado: "¿Cuál es el balance neto de ATP por glucosa en una fermentación láctica?",
    correcta: "2 ATP",
    incorrectas: [
      "0 ATP",
      "8 ATP"
    ]
  },
  {
    enunciado: "¿Qué compuesto se reduce directamente a etanol en la fermentación alcohólica?",
    correcta: "El acetaldehído",
    incorrectas: [
      "El acetato",
      "El lactato"
    ]
  },
  {
    enunciado: "¿Qué aceptores finales alternativos pueden usarse en respiración anaerobia bacteriana?",
    correcta: "Nitrato, sulfato o CO₂ según el organismo",
    incorrectas: [
      "Únicamente piruvato",
      "Sólo acetato y etanol"
    ]
  },
  {
    enunciado: "¿Qué enunciado describe mejor la fotorespiración en plantas C₃?",
    correcta: "Actividad oxigenasa de RuBisCO que genera 2-fosfoglicolato y reduce la eficiencia de fijación de CO₂",
    incorrectas: [
      "Fase lumínica alternativa que produce O₂ en exceso",
      "Carboxilación secundaria de PEP en las vainas del haz"
    ]
  },
  {
    enunciado: "¿Qué pigmento es esencial en el centro de reacción de los fotosistemas?",
    correcta: "Clorofila a",
    incorrectas: [
      "Ficobilina c",
      "Retinal"
    ]
  },
  {
    enunciado: "¿Qué proceso ocurre en la fase lumínica de la fotosíntesis?",
    correcta: "Fotólisis del agua, transporte de electrones y síntesis de ATP y NADPH",
    incorrectas: [
      "Fijación de CO₂ por la RuBisCO",
      "Regeneración de RuBP"
    ]
  },
  {
    enunciado: "¿Cuál es el producto inmediato de la carboxilación de RuBP en el ciclo de Calvin?",
    correcta: "3-fosfoglicerato (3-PGA)",
    incorrectas: [
      "Gliceraldehído-3-fosfato (G3P) directamente",
      "Oxalacetato"
    ]
  },
  {
    enunciado: "En plantas C₄, la primera fijación de CO₂ la cataliza:",
    correcta: "PEP carboxilasa en células del mesófilo",
    incorrectas: [
      "RuBisCO en células del mesófilo",
      "Piruvato carboxilasa en las vainas del haz"
    ]
  },
  {
    enunciado: "¿Qué ventaja confiere la vía CAM a plantas de climas áridos?",
    correcta: "Minimiza la pérdida de agua al abrir estomas por la noche acumulando malato",
    incorrectas: [
      "Permite prescindir de la fase lumínica",
      "Evita completamente la fotorespiración al no usar RuBisCO"
    ]
  },
  {
    enunciado: "La fotosíntesis anoxigénica se caracteriza por:",
    correcta: "Usar donadores de electrones distintos del agua y no liberar O₂",
    incorrectas: [
      "Ocurrir sólo en cloroplastos de eucariotas",
      "Usar exclusivamente el fotosistema II"
    ]
  },
  {
    enunciado: "¿En qué estructura del cloroplasto tiene lugar la fase lumínica?",
    correcta: "En las membranas de los tilacoides",
    incorrectas: [
      "En la matriz cloroplástica",
      "En la pared celular"
    ]
  },
  {
    enunciado: "¿Qué proceso permite convertir energía luminosa en energía de gradiente de protones en cloroplastos?",
    correcta: "Transporte electrónico acoplado a bombeo de H⁺ desde estroma a lumen tilacoidal",
    incorrectas: [
      "Difusión facilitada de ATP al estroma",
      "Entrada de NADPH por canales iónicos"
    ]
  },
  {
    enunciado: "¿Qué organismo es típico de ecosistemas quimiosintéticos de dorsales oceánicas?",
    correcta: "Bacterias y arqueas que oxidan H₂S en chimeneas hidrotermales",
    incorrectas: [
      "Diatomeas fotótrofas de superficie",
      "Levaduras fermentativas facultativas"
    ]
  },
  {
    enunciado: "¿Qué define a la quimiosíntesis en procariotas quimiolitótrofos?",
    correcta: "Obtención de energía por oxidación de compuestos inorgánicos y uso de esa energía para fijar CO₂",
    incorrectas: [
      "Uso de luz para excitar clorofilas y formar NADPH",
      "Exclusiva degradación de glucosa a lactato"
    ]
  },
  {
    enunciado: "En la nitrificación, ¿qué pares de organismos y reacciones son correctos?",
    correcta: "Nitrosomonas oxida NH₃ a NO₂⁻ y Nitrobacter oxida NO₂⁻ a NO₃⁻",
    incorrectas: [
      "Nitrobacter reduce NO₃⁻ a N₂ en presencia de O₂",
      "Nitrosomonas convierte NO₃⁻ en NH₃ en condiciones aeróbicas"
    ]
  },
  {
    enunciado: "¿Qué molécula suministra el poder reductor principal para la fase de reducción del ciclo de Calvin?",
    correcta: "NADPH",
    incorrectas: [
      "FADH₂",
      "NADH"
    ]
  },
  {
    enunciado: "¿Cuál es un regulador negativo clásico de la fosfofructoquinasa-1 (PFK-1) en la glucólisis?",
    correcta: "ATP elevado (estado energético alto)",
    incorrectas: [
      "AMP elevado",
      "Fructosa-2,6-bisfosfato"
    ]
  },
  {
    enunciado: "¿Qué efecto produce un desacoplante (como el DNP) en la fosforilación oxidativa?",
    correcta: "Disipa el gradiente de protones, aumenta la respiración y disminuye la síntesis de ATP",
    incorrectas: [
      "Bloquea el transporte electrónico, elevando la síntesis de ATP",
      "Inhibe la ATP sintasa manteniendo el gradiente y aumentando el ATP"
    ]
  },
  {
    enunciado: "¿Qué complejo de la cadena respiratoria bombea protones y acepta electrones desde FADH₂ vía succinato?",
    correcta: "Complejo II no bombea protones; transfiere electrones desde succinato a CoQ",
    incorrectas: [
      "Complejo II bombea protones desde la matriz al espacio intermembrana",
      "Complejo IV acepta directamente electrones de FADH₂"
    ]
  },
  {
    enunciado: "Durante la fermentación láctica en músculo, ¿qué propósito cumple la reducción de piruvato a lactato?",
    correcta: "Reoxidar NADH a NAD⁺ para sostener la glucólisis en ausencia de O₂",
    incorrectas: [
      "Aumentar el rendimiento de ATP por encima de 4 ATP netos",
      "Exportar protones fuera de la célula a través del lactato"
    ]
  },
  {
    enunciado: "¿Qué evento de la fase lumínica produce la liberación de O₂ molecular?",
    correcta: "La fotólisis del agua en el fotosistema II",
    incorrectas: [
      "La reducción de NADP⁺ a NADPH en el fotosistema I",
      "La fosforilación del ADP por la ATP sintasa"
    ]
  },
  {
    enunciado: "¿Cuál es la relación estequiométrica global simplificada de la fotosíntesis oxigénica con glucosa como producto?",
    correcta: "6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂",
    incorrectas: [
      "CO₂ + H₂O + luz → CH₄ + O₂",
      "6 O₂ + luz → 6 CO₂ + C₆H₁₂O₆"
    ]
  },
  {
    enunciado: "¿Qué vía alternativa permite la producción de ATP sin formación neta de NADPH en cloroplastos?",
    correcta: "Transporte cíclico de electrones alrededor del PSI",
    incorrectas: [
      "Transporte no cíclico entre PSII y PSI",
      "Fase oscura del ciclo de Calvin"
    ]
  },
  {
    enunciado: "¿Qué componente conecta el complejo III con el complejo IV en la cadena respiratoria?",
    correcta: "El citocromo c",
    incorrectas: [
      "La ferredoxina",
      "La plastoquinona"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes rutas proporciona acetil-CoA para el ciclo de Krebs además de la descarboxilación del piruvato?",
    correcta: "β-oxidación de ácidos grasos",
    incorrectas: [
      "Hidrólisis de ATP",
      "Fijación de CO₂ por RuBisCO"
    ]
  },
  {
    enunciado: "En quimiosíntesis, ¿qué ocurre con la energía liberada por la oxidación de compuestos inorgánicos?",
    correcta: "Se convierte en un gradiente de protones y en ATP para impulsar la fijación de carbono",
    incorrectas: [
      "Se disipa completamente como calor sin utilidad celular",
      "Se almacena en plastoglobos como almidón"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia ecológica clave de la quimiosíntesis en ambientes sin luz?",
    correcta: "Sostiene cadenas tróficas basadas en autótrofos quimiolitotrofos",
    incorrectas: [
      "Impide la fijación de nitrógeno atmosférico",
      "Reemplaza globalmente a la fotosíntesis en la biosfera"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la integración metabólica celular?",
    correcta: "Interconexión de rutas catabólicas y anabólicas reguladas por el estado energético y señales celulares",
    incorrectas: [
      "Independencia absoluta entre vías de carbono y de energía",
      "Exclusión mutua de catabolismo y anabolismo en una misma célula"
    ]
  },
  {
    enunciado: "¿Por qué la estimación moderna del rendimiento en ATP por glucosa es menor que la cifra clásica de 36–38?",
    correcta: "Porque depende de lanzaderas de NADH, fugas/uso del gradiente y costos de transporte mitocondrial",
    incorrectas: [
      "Porque el ciclo de Krebs dejó de generar GTP",
      "Porque la ATP sintasa ya no funciona en tejidos aerobios"
    ]
  }
];
