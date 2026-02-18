// temarios/08-los-impactos-ambientales-del-aprovechamiento-de-los-recursos-geologicos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por impacto ambiental en el ámbito geológico?",
    correcta: "Una alteración del medio provocada por actividades humanas, positiva o negativa",
    incorrectas: [
      "Un cambio natural y espontáneo del clima sin intervención humana",
      "Un fenómeno exclusivamente reversible y local"
    ]
  },
  {
    enunciado: "¿Qué fase NO forma típicamente parte del ciclo de vida de un proyecto extractivo?",
    correcta: "Fase de metamorfismo regional",
    incorrectas: [
      "Exploración y desarrollo",
      "Explotación y cierre"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia entre recurso y reserva?",
    correcta: "La reserva es la parte del recurso con viabilidad técnica y económica demostrada",
    incorrectas: [
      "No hay diferencia, ambos términos son sinónimos",
      "La reserva siempre es mayor que el recurso"
    ]
  },
  {
    enunciado: "¿Qué explotación genera con frecuencia grandes movimientos de tierra y cambios paisajísticos?",
    correcta: "La minería a cielo abierto",
    incorrectas: [
      "La minería submarina de nódulos sin dragado",
      "La metalurgia secundaria sin residuos"
    ]
  },
  {
    enunciado: "¿Qué impacto sobre el suelo es típico de desmontes y acopios?",
    correcta: "Pérdida de suelo fértil y compactación",
    incorrectas: [
      "Formación de suelos maduros con mayor biodiversidad",
      "Aumento automático de la permeabilidad natural"
    ]
  },
  {
    enunciado: "¿Qué fenómeno se asocia a la oxidación de sulfuros como la pirita?",
    correcta: "Drenaje ácido de minas (AMD)",
    incorrectas: [
      "Nitrificación acelerada del suelo",
      "Descarbonatación atmosférica"
    ]
  },
  {
    enunciado: "¿Cuál es un contaminante típico de efluentes mineros ácidos?",
    correcta: "Metales disueltos como Fe, Cu, Zn o Pb",
    incorrectas: [
      "Altas concentraciones de nitrógeno amoniacal procedente de volcanes",
      "Exceso de clorofila por floraciones algales"
    ]
  },
  {
    enunciado: "¿Qué impacto hídrico puede producir la sobreexplotación de acuíferos?",
    correcta: "Conos de abatimiento e intrusión salina",
    incorrectas: [
      "Aumento estable del caudal de manantiales",
      "Precipitación de carbonatos en superficie"
    ]
  },
  {
    enunciado: "¿Qué emisiones atmosféricas son habituales en operaciones extractivas y de beneficio?",
    correcta: "Partículas en suspensión (PM10/PM2.5) y gases como SO2 o NOx",
    incorrectas: [
      "Exclusivamente vapor de agua no medible",
      "Ozono estratosférico de origen natural"
    ]
  },
  {
    enunciado: "¿Qué efecto climático puede vincularse a la cadena de valor de recursos fósiles?",
    correcta: "Incremento de emisiones de CO2 y CH4 con efecto invernadero",
    incorrectas: [
      "Aumento de aerosoles estratosféricos volcánicos",
      "Disminución del albedo marino por fitoplancton"
    ]
  },
  {
    enunciado: "¿Qué impacto sobre la biosfera es frecuente en canteras y minas?",
    correcta: "Fragmentación de hábitats y pérdida de biodiversidad",
    incorrectas: [
      "Recuperación espontánea de corredores ecológicos",
      "Aumento de especies endémicas sensibles"
    ]
  },
  {
    enunciado: "¿Qué riesgos geotécnicos afectan a presas de relaves (tailings)?",
    correcta: "Rotura de diques y licuefacción por inestabilidad",
    incorrectas: [
      "Subducción local de diques a la litosfera",
      "Solidificación instantánea por metamorfismo"
    ]
  },
  {
    enunciado: "¿Qué documento valora efectos y alternativas de un proyecto antes de su autorización?",
    correcta: "La Evaluación de Impacto Ambiental (EIA)",
    incorrectas: [
      "El Plan Nacional de Sequías",
      "El estudio de mercado de materias primas"
    ]
  },
  {
    enunciado: "¿Qué medida pertenece a la jerarquía de mitigación?",
    correcta: "Evitar, minimizar, restaurar y, en último término, compensar",
    incorrectas: [
      "Compensar primero y evitar después",
      "Solo compensar si es más barato"
    ]
  },
  {
    enunciado: "¿Qué tecnología reduce el riesgo asociado a relaves?",
    correcta: "Almacenamiento en seco (dry stacking) con filtración",
    incorrectas: [
      "Descarga directa a cauces sin tratamiento",
      "Incremento de la altura sin control geotécnico"
    ]
  },
  {
    enunciado: "¿Qué práctica reduce emisiones difusas de polvo en pistas mineras?",
    correcta: "Riego, control de velocidad y encapsulamiento en cintas",
    incorrectas: [
      "Aumentar el tráfico pesado en horas punta",
      "Eliminar todas las bermas de seguridad"
    ]
  },
  {
    enunciado: "¿Qué tratamiento pasivo puede aplicarse al drenaje ácido?",
    correcta: "Humedales construidos con materiales alcalinos",
    incorrectas: [
      "Inyección de combustibles para elevar la temperatura",
      "Sustitución total del agua por aire comprimido"
    ]
  },
  {
    enunciado: "¿Qué impacto social puede aparecer en zonas mineras monodependientes?",
    correcta: "Vulnerabilidad económica y conflictividad por empleo",
    incorrectas: [
      "Diversificación automática del tejido productivo",
      "Desaparición de estacionalidad laboral"
    ]
  },
  {
    enunciado: "¿Qué es la licencia social para operar?",
    correcta: "Aceptación y confianza de la comunidad hacia el proyecto",
    incorrectas: [
      "Un permiso administrativo de seguridad industrial",
      "Un certificado exclusivo de eficiencia energética"
    ]
  },
  {
    enunciado: "¿Qué estándar gestiona sistemas ambientales en organizaciones?",
    correcta: "ISO 14001",
    incorrectas: [
      "ISO 9004 para metrología química",
      "ISO 31010 para ensayos destructivos"
    ]
  },
  {
    enunciado: "¿Qué es el análisis de ciclo de vida (ACV) en minería?",
    correcta: "Evaluación de impactos desde la extracción hasta el fin de vida",
    incorrectas: [
      "Un método para calcular leyes de mena in situ",
      "Una auditoría fiscal anual obligatoria"
    ]
  },
  {
    enunciado: "¿Qué gas puede liberarse en minas de carbón y formar mezclas explosivas?",
    correcta: "Metano (grisú)",
    incorrectas: [
      "Ozono a nivel del suelo",
      "Argón radiactivo"
    ]
  },
  {
    enunciado: "¿Qué práctica disminuye la huella hídrica del beneficio mineral?",
    correcta: "Recirculación y cierre de circuitos de agua de proceso",
    incorrectas: [
      "Descarga continua de efluentes sin control",
      "Aumento de caudales de lavado sin límites"
    ]
  },
  {
    enunciado: "¿Qué explotación aumenta el riesgo de subsidencia superficial?",
    correcta: "La minería subterránea con cámaras y pilares",
    incorrectas: [
      "La extracción de áridos en playas con aporte natural",
      "La prospección sísmica sin perforación"
    ]
  },
  {
    enunciado: "¿Qué medida mejora la estabilidad de taludes en mina?",
    correcta: "Diseño de bermas, drenaje y monitoreo geotécnico",
    incorrectas: [
      "Quitar bermas para ganar espacio",
      "Aumentar pendientes sin ensayos"
    ]
  },
  {
    enunciado: "¿Qué flujo deposicional genera turbiditas en taludes y abanicos submarinos?",
    correcta: "Corrientes de turbidez gravitacionales",
    incorrectas: [
      "Corrientes eólicas en suspensión",
      "Flujos magmáticos laminares"
    ]
  },
  {
    enunciado: "¿Qué normativa europea regula la gestión de residuos de industrias extractivas?",
    correcta: "Directiva 2006/21/CE",
    incorrectas: [
      "Directiva 92/43/CEE de Hábitats exclusivamente",
      "Directiva 2010/31/UE de eficiencia de edificios"
    ]
  },
  {
    enunciado: "¿Qué directiva establece el marco comunitario del agua en la UE?",
    correcta: "Directiva 2000/60/CE",
    incorrectas: [
      "Directiva 2014/52/UE sobre ruido aeronáutico",
      "Directiva 1999/31/CE de vertederos urbanos"
    ]
  },
  {
    enunciado: "¿Qué alternativa energética reduce emisiones locales en mina?",
    correcta: "Electrificación de flotas y uso de H₂ verde",
    incorrectas: [
      "Motores diésel sin filtros ni mantenimiento",
      "Aumento de voladuras sin control"
    ]
  },
  {
    enunciado: "¿Qué indicador biológico se usa para evaluar calidad de ríos afectados?",
    correcta: "Índices de macroinvertebrados como IBMWP",
    incorrectas: [
      "Solo conductividad eléctrica del aire",
      "Índice de color de suelos agrícolas"
    ]
  },
  {
    enunciado: "¿Qué herramienta remota ayuda a vigilar restauraciones y polvo?",
    correcta: "Teledetección con satélite y drones (NDVI, ortofotos)",
    incorrectas: [
      "Sismología de reflexión profunda exclusivamente",
      "Tomografía médica por rayos X"
    ]
  },
  {
    enunciado: "¿Qué práctica favorece la restauración ecológica tras el cierre?",
    correcta: "Reperfilado del terreno y revegetación con especies autóctonas",
    incorrectas: [
      "Sellado con hormigón sin drenaje",
      "Introducción de especies invasoras resistentes"
    ]
  },
  {
    enunciado: "¿Qué riesgo sanitario se asocia a polvo con sílice cristalina respirable?",
    correcta: "Silicosis y afecciones respiratorias",
    incorrectas: [
      "Escorbuto por déficit de vitamina C",
      "Hipotermia por ambientes fríos"
    ]
  },
  {
    enunciado: "¿Qué práctica responsable se recomienda con comunidades locales?",
    correcta: "Participación temprana y consulta libre, previa e informada",
    incorrectas: [
      "Información solo al final del proyecto",
      "Secreto industrial sin diálogo"
    ]
  },
  {
    enunciado: "¿Qué es el flaring en instalaciones petroleras?",
    correcta: "Quemado controlado de gas excedente",
    incorrectas: [
      "Inyección de aire en capas de carbón",
      "Filtrado de partículas con cal hidratada"
    ]
  },
  {
    enunciado: "¿Qué combinación describe un sistema petrolífero funcional?",
    correcta: "Roca madre, migración, roca almacén, sello y trampa",
    incorrectas: [
      "Roca almacén y sello sin roca madre",
      "Trampa únicamente sin fluidos"
    ]
  },
  {
    enunciado: "¿Qué medida reduce el riesgo de derrames en transporte de pulpas?",
    correcta: "Inspección y válvulas de cierre con bandejas de contención",
    incorrectas: [
      "Aumentar presión sin pruebas",
      "Eliminar soportes en puentes"
    ]
  },
  {
    enunciado: "¿Qué enfoque cuantifica la huella de materiales críticos en cadenas de suministro?",
    correcta: "Análisis de ciclo de vida con indicadores de criticidad",
    incorrectas: [
      "Ensayos de dureza Rockwell únicamente",
      "Balance metalúrgico a boca de mina"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue el cierre progresivo de una mina?",
    correcta: "Reducir pasivos ambientales durante la operación y facilitar el post-cierre",
    incorrectas: [
      "Aumentar la producción a corto plazo",
      "Evitar cualquier monitoreo posterior"
    ]
  },
  {
    enunciado: "¿Qué documento financiero garantiza la ejecución de la restauración?",
    correcta: "La garantía o fianza de cierre ambiental",
    incorrectas: [
      "El informe anual de ventas",
      "La memoria histórica del yacimiento"
    ]
  }
];
