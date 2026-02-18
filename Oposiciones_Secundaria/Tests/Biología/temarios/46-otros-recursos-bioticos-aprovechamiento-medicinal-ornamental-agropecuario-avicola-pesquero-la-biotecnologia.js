// temarios/46-otros-recursos-bioticos-aprovechamientos-y-biotecnologia.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué enfoque integra salud humana, animal y ambiental en el manejo de recursos bióticos?",
    correcta: "One Health",
    incorrectas: ["Solo EcoHealth", "Health-Only sin componente ambiental"]
  },
  {
    enunciado: "Un servicio ecosistémico clave de los bosques mediterráneos es:",
    correcta: "Regulación hídrica y control de la erosión",
    incorrectas: ["Aumento de salinidad del suelo", "Disminución de polinización"]
  },
  {
    enunciado: "¿Qué sellos certifican gestión forestal sostenible?",
    correcta: "FSC y PEFC",
    incorrectas: ["ASC y MSC", "ISO 15189 e ISO 9001 exclusivamente"]
  },
  {
    enunciado: "La apicultura aporta productos y servicios como:",
    correcta: "Miel, cera, propóleos y polinización",
    incorrectas: ["Resinas sintéticas y combustibles fósiles", "Ácido nítrico y amoniaco"]
  },
  {
    enunciado: "Un riesgo frecuente del comercio de ornamentales es:",
    correcta: "Introducción de especies invasoras",
    incorrectas: ["Aumento de ozono estratosférico", "Mineralización acelerada del granito"]
  },
  {
    enunciado: "La xerojardinería se centra en:",
    correcta: "Ahorro de agua con especies adaptadas a sequía",
    incorrectas: ["Uso intensivo de césped de alto riego", "Exclusión de flora nativa"]
  },
  {
    enunciado: "En agricultura sostenible, el GIP prioriza:",
    correcta: "Monitoreo, umbrales, biocontrol y rotación de modos de acción",
    incorrectas: ["Aplicación calendarizada de insecticidas", "Uso exclusivo de un herbicida"]
  },
  {
    enunciado: "¿Cuál es un bioinsumo típico para control biológico de suelo?",
    correcta: "Trichoderma spp.",
    incorrectas: ["Helicobacter pylori", "Plasmodium falciparum"]
  },
  {
    enunciado: "Una práctica para mejorar fertilidad y estructura del suelo es:",
    correcta: "Cubiertas vegetales y rotaciones",
    incorrectas: ["Laboreo intensivo continuo", "Quema sistemática de rastrojos"]
  },
  {
    enunciado: "En ganadería, una prioridad transversal es:",
    correcta: "Bienestar animal y reducción de antimicrobianos (AMR)",
    incorrectas: ["Eliminación del bioseguro", "Supresión de vacunación"]
  },
  {
    enunciado: "La pesca sostenible se guía por el concepto de:",
    correcta: "Rendimiento Máximo Sostenible (RMS/MSY)",
    incorrectas: ["Captura Ilimitada", "Monopolio de cuotas privadas perpetuas"]
  },
  {
    enunciado: "Una medida para reducir capturas accesorias (bycatch) es:",
    correcta: "Mejorar la selectividad de artes y establecer vedas",
    incorrectas: ["Reducir tallas mínimas", "Pescar durante la época de freza"]
  },
  {
    enunciado: "La lucha contra la pesca IUU se refiere a:",
    correcta: "Pesca ilegal, no declarada y no reglamentada",
    incorrectas: ["Pesca interior urbana", "Pesca de subsistencia con licencia"]
  },
  {
    enunciado: "Certificaciones de sostenibilidad en pesquerías y acuicultura son, respectivamente:",
    correcta: "MSC y ASC",
    incorrectas: ["FSC y PEFC", "ISO 15189 e ISO 13485"]
  },
  {
    enunciado: "Una especie de acuicultura marina muy común en España es:",
    correcta: "Dorada (Sparus aurata)",
    incorrectas: ["Atún rojo en criadero completo estándar", "Trucha de lago exclusivamente"]
  },
  {
    enunciado: "Un sistema de acuicultura de recirculación es:",
    correcta: "RAS (Recirculating Aquaculture System)",
    incorrectas: ["CIM (Cultivo Infinito Marítimo)", "SPS (Sistema Puramente Salobre)"]
  },
  {
    enunciado: "La acuicultura multitrófica integrada (IMTA) combina:",
    correcta: "Peces, filtradores (moluscos) y macroalgas",
    incorrectas: ["Solo peces depredadores", "Corales tropicales y cactus"]
  },
  {
    enunciado: "Una alternativa proteica para piensos acuícolas es:",
    correcta: "Harina de insecto y microalgas",
    incorrectas: ["Únicamente harina de pescado", "Minerales silíceos inertes"]
  },
  {
    enunciado: "La biotecnología roja se orienta a:",
    correcta: "Salud humana y animal (fármacos, vacunas, diagnóstico)",
    incorrectas: ["Producción forestal", "Bioprocesos industriales no sanitarios"]
  },
  {
    enunciado: "La biotecnología blanca se centra en:",
    correcta: "Procesos industriales y biorrefinerías",
    incorrectas: ["Mejora varietal de cultivos", "Gestión de áreas marinas protegidas"]
  },
  {
    enunciado: "La biotecnología verde aborda principalmente:",
    correcta: "Agricultura y mejora vegetal",
    incorrectas: ["Exclusivamente medicina de precisión", "Minería de cielo abierto"]
  },
  {
    enunciado: "La biotecnología gris se asocia con:",
    correcta: "Ambiental: biorremediación y tratamiento de aguas",
    incorrectas: ["Finanzas verdes", "Edificación sostenible sin bioprocesos"]
  },
  {
    enunciado: "Un ejemplo de bioplástico producido por microorganismos es:",
    correcta: "PHA (polihidroxialcanoatos)",
    incorrectas: ["PVC", "Poliestireno expandido"]
  },
  {
    enunciado: "Una herramienta de edición génica usada en mejora vegetal es:",
    correcta: "CRISPR/Cas",
    incorrectas: ["SDS-PAGE", "Western blot"]
  },
  {
    enunciado: "El Protocolo de Nagoya trata sobre:",
    correcta: "Acceso a recursos genéticos y reparto justo de beneficios (ABS)",
    incorrectas: ["Transporte de materiales peligrosos", "Residuos nucleares"
    ]
  },
  {
    enunciado: "El Protocolo de Cartagena está relacionado con:",
    correcta: "Bioseguridad de OVM/OGM",
    incorrectas: ["CITES para comercio de especies", "Reglamento sobre fertilizantes minerales"]
  },
  {
    enunciado: "CITES regula principalmente:",
    correcta: "Comercio internacional de especies amenazadas",
    incorrectas: ["Emisiones de CO₂", "Uso de plaguicidas en la UE"]
  },
  {
    enunciado: "Un antibiótico fúngico clásico de aprovechamiento medicinal es:",
    correcta: "Penicilina",
    incorrectas: ["Ciclosporina como insecticida", "Cloroformo terapéutico"]
  },
  {
    enunciado: "Un fármaco recombinante paradigmático obtenido por ADN recombinante es:",
    correcta: "Insulina humana",
    incorrectas: ["Adrenalina química antigua", "Ácido salicílico natural"]
  },
  {
    enunciado: "Las vacunas de ARNm ilustran aplicaciones de:",
    correcta: "Biotecnología roja",
    incorrectas: ["Biotecnología azul exclusivamente", "Ingeniería civil"]
  },
  {
    enunciado: "La biorremediación de suelos contaminados puede apoyarse en:",
    correcta: "Bacterias degradadoras y fitorremediación",
    incorrectas: ["Arenado y cementación únicamente", "Aumento de salinidad del suelo"]
  },
  {
    enunciado: "Un indicador de sostenibilidad en acuicultura es el FCR, que significa:",
    correcta: "Factor/coeficiente de conversión alimenticia",
    incorrectas: ["Flujo de carga ribosómica", "Factor de captura residual"]
  },
  {
    enunciado: "En APPCC (HACCP) el objetivo es:",
    correcta: "Seguridad alimentaria mediante control de puntos críticos",
    incorrectas: ["Maximizar el rendimiento financiero", "Reducir biodiversidad en granjas"]
  },
  {
    enunciado: "Una PAM (planta aromática/medicinal) mediterránea de valor económico es:",
    correcta: "Lavandula (lavanda) para aceites esenciales",
    incorrectas: ["Picea sitchensis en desiertos", "Cactáceas para papel tradicional"]
  },
  {
    enunciado: "La dehesa ibérica ilustra un sistema:",
    correcta: "Agrosilvopastoral de alto valor natural",
    incorrectas: ["Monocultivo intensivo de regadío", "Acuicultura de agua fría"]
  },
  {
    enunciado: "La certificación ASC aplica a:",
    correcta: "Acuicultura sostenible",
    incorrectas: ["Gestión forestal", "Clínicas hospitalarias"]
  },
  {
    enunciado: "Una ventaja de RAS frente a jaulas abiertas es:",
    correcta: "Ahorro de agua y control sanitario/ambiental",
    incorrectas: ["Mayor exposición a patógenos", "Nula inversión tecnológica"]
  },
  {
    enunciado: "Los metabolitos secundarios vegetales incluyen:",
    correcta: "Alcaloides, terpenos y fenoles",
    incorrectas: ["Glucosa y almidón exclusivamente", "ADN y ARNm como productos finales"]
  },
  {
    enunciado: "En mejora para sequía y salinidad se combinan:",
    correcta: "Selección clásica, marcadores y edición génica",
    incorrectas: ["Solo riego excesivo", "Fertilización nitrogenada continua"]
  },
  {
    enunciado: "Un riesgo transversal que la bioeconomía debe gestionar es:",
    correcta: "Resistencias antimicrobianas (AMR)",
    incorrectas: ["Aumento del ozono estratosférico por bosques", "Crecimiento cristalino del cuarzo"]
  },
  {
    enunciado: "La bioeconomía circular persigue:",
    correcta: "Cerrar ciclos de materia y energía valorizando subproductos",
    incorrectas: ["Aumentar vertidos orgánicos", "Sustituir toda biomasa por petróleo"]
  }
];
