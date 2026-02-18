// temarios/51-los-problemas-ambientales-y-sus-repercusiones-salud-ambiental-y-calidad-de-vida-la-educacion-ambiental.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por problema ambiental en sentido técnico?",
    correcta: "Una alteración del medio causada por actividades humanas que compromete el equilibrio ecológico y el bienestar",
    incorrectas: [
      "Cualquier cambio natural sin intervención humana",
      "Un fenómeno meteorológico extremo inevitable"
    ]
  },
  {
    enunciado: "¿Qué relación histórica intensifica los problemas ambientales a escala global?",
    correcta: "La combinación de revolución industrial y globalización económica",
    incorrectas: [
      "El nomadismo paleolítico",
      "La agricultura de subsistencia exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál NO es un problema ambiental actual prioritario?",
    correcta: "Aumento natural de mareas sin influencia humana",
    incorrectas: [
      "Pérdida de biodiversidad",
      "Contaminación del aire urbano"
    ]
  },
  {
    enunciado: "¿Qué define la contaminación atmosférica urbana típica?",
    correcta: "Elevadas concentraciones de NOx, PM y ozono troposférico",
    incorrectas: [
      "Aumento de ozono estratosférico protector",
      "Reducción neta de partículas por encima de zonas rurales"
    ]
  },
  {
    enunciado: "¿Qué proceso desencadena la eutrofización en aguas continentales?",
    correcta: "Aporte excesivo de nitrógeno y fósforo que favorece proliferaciones algales",
    incorrectas: [
      "Disminución de nutrientes por suelos pobres",
      "Elevado intercambio marino en estuarios"
    ]
  },
  {
    enunciado: "¿Cuál es una fuente frecuente de contaminación del suelo?",
    correcta: "Residuos peligrosos y metales pesados procedentes de actividad industrial",
    incorrectas: [
      "Aporte de materia orgánica compostada",
      "Rotación de cultivos y barbecho"
    ]
  },
  {
    enunciado: "¿Qué impacto produce la fragmentación de hábitats?",
    correcta: "Aislamiento de poblaciones y pérdida de conectividad ecológica",
    incorrectas: [
      "Aumento del flujo génico",
      "Incremento automático de la diversidad alfa"
    ]
  },
  {
    enunciado: "¿Qué fenómeno resume la 'sexta gran extinción'?",
    correcta: "Ritmo de pérdida de especies muy superior al de fondo por causas antrópicas",
    incorrectas: [
      "Ciclo geológico natural sin influencia humana",
      "Recuperación espontánea de endemismos"
    ]
  },
  {
    enunciado: "¿Qué expresa el agotamiento de recursos?",
    correcta: "Disminución de la disponibilidad de agua, suelos fértiles y materias primas",
    incorrectas: [
      "Aumento de reservas de combustibles fósiles",
      "Regeneración automática de acuíferos sobreexplotados"
    ]
  },
  {
    enunciado: "¿Cuál es un residuo tecnológico de especial preocupación?",
    correcta: "Basura electrónica con metales pesados y retardantes de llama",
    incorrectas: [
      "Ramas de poda compostables",
      "Papel reciclado postconsumo"
    ]
  },
  {
    enunciado: "¿Qué es la justicia ambiental?",
    correcta: "El principio que busca evitar que cargas ambientales recaigan desproporcionadamente en grupos vulnerables",
    incorrectas: [
      "La preferencia por proyectos industriales en zonas rurales",
      "El reparto igual de emisiones entre países sin considerar capacidades"
    ]
  },
  {
    enunciado: "¿Qué costes genera la contaminación para las economías?",
    correcta: "Gasto sanitario, pérdida de productividad y restauración ecológica",
    incorrectas: [
      "Reducción universal de los precios energéticos",
      "Aumento automático del empleo verde sin inversión"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de repercusión social de los problemas ambientales?",
    correcta: "Migraciones climáticas desde regiones afectadas por sequías persistentes",
    incorrectas: [
      "Reducción de la mortalidad infantil por polución",
      "Desaparición de la pobreza energética"
    ]
  },
  {
    enunciado: "¿Qué instrumento utiliza la UE para proteger el ambiente?",
    correcta: "Directivas ambientales transpuestas a la legislación estatal",
    incorrectas: [
      "Órdenes verbales no vinculantes",
      "Tratados sin mecanismos de cumplimiento"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue el Acuerdo de París?",
    correcta: "Limitar el aumento de temperatura muy por debajo de 2 °C respecto a niveles preindustriales",
    incorrectas: [
      "Aumentar la extracción de carbón",
      "Eliminar el principio de responsabilidades comunes pero diferenciadas"
    ]
  },
  {
    enunciado: "Según la OMS, ¿qué abarca la salud ambiental?",
    correcta: "Todos los factores físicos, químicos y biológicos externos que inciden en la salud",
    incorrectas: [
      "Solo hábitos individuales de ejercicio",
      "Exclusivamente la genética poblacional"
    ]
  },
  {
    enunciado: "¿Qué contaminante del aire se asocia a mortalidad cardiovascular y respiratoria?",
    correcta: "Material particulado fino (PM2.5)",
    incorrectas: [
      "Vapor de agua",
      "Nitrógeno molecular (N₂)"
    ]
  },
  {
    enunciado: "¿Qué ruta de exposición es típica en contaminación hídrica?",
    correcta: "Ingesta de agua o alimentos contaminados con nitratos o patógenos",
    incorrectas: [
      "Absorción de luz visible",
      "Inhalación exclusiva de ozono estratosférico"
    ]
  },
  {
    enunciado: "¿Qué vínculo existe entre calidad ambiental y calidad de vida?",
    correcta: "Los entornos saludables mejoran bienestar físico, mental y social",
    incorrectas: [
      "No existe relación demostrable",
      "Ambientes contaminados reducen alergias y asma"
    ]
  },
  {
    enunciado: "¿Qué prioridad sanitaria es clave en ciudades con mala calidad del aire?",
    correcta: "Prevenir y controlar la exposición mediante planes de calidad del aire",
    incorrectas: [
      "Incrementar congestión para reducir velocidades",
      "Sustituir árboles por superficies asfálticas"
    ]
  },
  {
    enunciado: "¿Qué es la educación ambiental?",
    correcta: "Un proceso para comprender la relación sociedad-naturaleza y promover conductas sostenibles",
    incorrectas: [
      "Una campaña puntual sin evaluación",
      "Un contenido exclusivo de ciencias naturales sin dimensión social"
    ]
  },
  {
    enunciado: "¿Cuál NO es un objetivo de la educación ambiental?",
    correcta: "Fomentar el consumo impulsivo de recursos",
    incorrectas: [
      "Desarrollar valores y actitudes responsables",
      "Impulsar la participación ciudadana"
    ]
  },
  {
    enunciado: "¿Qué estrategia didáctica es coherente con la educación para la sostenibilidad?",
    correcta: "Aprendizaje basado en proyectos con acción comunitaria",
    incorrectas: [
      "Memorización aislada sin conexión con el entorno",
      "Competencias sólo evaluadas con pruebas de opción múltiple"
    ]
  },
  {
    enunciado: "¿Qué ámbito complementa a la educación escolar en temas ambientales?",
    correcta: "La educación no formal mediante campañas y programas comunitarios",
    incorrectas: [
      "Exclusivamente programas militares",
      "Solo la formación universitaria de posgrado"
    ]
  },
  {
    enunciado: "¿Qué herramienta legal previene impactos de proyectos?",
    correcta: "La Evaluación de Impacto Ambiental (EIA)",
    incorrectas: [
      "El presupuesto participativo cultural",
      "El censo electoral"
    ]
  },
  {
    enunciado: "¿Cuál es la jerarquía común de mitigación ambiental?",
    correcta: "Evitar → Minimizar → Restaurar → Compensar",
    incorrectas: [
      "Compensar → Restaurar → Minimizar → Evitar",
      "Mitigar después de ejecutar sin alternativas"
    ]
  },
  {
    enunciado: "¿Qué política favorece economías más sostenibles?",
    correcta: "Transición energética hacia renovables y eficiencia",
    incorrectas: [
      "Subsidios al carbón sin condicionantes",
      "Eliminación de estándares de eficiencia"
    ]
  },
  {
    enunciado: "¿Qué principio guía la economía circular?",
    correcta: "Diseñar para reducir, reutilizar, reparar y reciclar materiales",
    incorrectas: [
      "Maximizar residuos para crear empleo",
      "Linealidad extraer-fabricar-usar-tirar"
    ]
  },
  {
    enunciado: "¿Qué mide la huella de carbono de una organización?",
    correcta: "Las emisiones de gases de efecto invernadero asociadas a sus actividades",
    incorrectas: [
      "El carbono orgánico del suelo regional",
      "La humedad relativa promedio"
    ]
  },
  {
    enunciado: "¿Qué rol tiene la participación pública en la gestión ambiental?",
    correcta: "Mejora la calidad de decisiones y la legitimidad de políticas",
    incorrectas: [
      "Sustituye la evidencia científica",
      "Incrementa impactos por definición"
    ]
  },
  {
    enunciado: "¿Qué instrumento económico puede internalizar costes ambientales?",
    correcta: "Impuestos o tasas sobre emisiones contaminantes",
    incorrectas: [
      "Subvenciones a combustibles fósiles",
      "Exenciones fiscales a vertidos ilegales"
    ]
  },
  {
    enunciado: "¿Qué acuerdo internacional reconoció el desarrollo sostenible como objetivo global?",
    correcta: "La Cumbre de Río (1992) y la Agenda 21",
    incorrectas: [
      "La Conferencia de Berlín de 1884",
      "La Convención de Viena sobre Relaciones Diplomáticas"
    ]
  },
  {
    enunciado: "¿Qué son los Objetivos de Desarrollo Sostenible (ODS)?",
    correcta: "Un marco de la Agenda 2030 con metas sociales, económicas y ambientales integradas",
    incorrectas: [
      "Un listado de sanciones comerciales",
      "Un registro de parques nacionales"
    ]
  },
  {
    enunciado: "¿Qué enfoque sanitario reduce exposición en trabajadores?",
    correcta: "Gestión de riesgos con control de fuentes y protección individual adecuada",
    incorrectas: [
      "Aumentar turnos sin medidas de control",
      "Eliminar la ventilación para evitar corrientes"
    ]
  },
  {
    enunciado: "¿Qué indicador urbano mejora salud y calidad de vida?",
    correcta: "Movilidad activa y espacios verdes accesibles",
    incorrectas: [
      "Densidad de vallas publicitarias",
      "Aumento de ruido nocturno"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las especies exóticas invasoras en clave social y económica?",
    correcta: "Generan pérdidas en agricultura, salud y conservación",
    incorrectas: [
      "Son siempre beneficiosas por su diversidad",
      "No requieren gestión por su baja tasa de expansión"
    ]
  },
  {
    enunciado: "¿Qué herramienta empresarial evalúa impactos de un producto 'de la cuna a la tumba'?",
    correcta: "Análisis de Ciclo de Vida (ACV)",
    incorrectas: [
      "Auditoría contable",
      "Encuesta de satisfacción del cliente"
    ]
  },
  {
    enunciado: "¿Qué pilar institucional es esencial para políticas ambientales eficaces?",
    correcta: "Transparencia, ciencia abierta y evaluación independiente",
    incorrectas: [
      "Opacidad y ausencia de datos",
      "Supeditar decisiones a intereses de corto plazo"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de co-beneficio clima-salud?",
    correcta: "Sustituir carbón por renovables reduce emisiones y mejora calidad del aire",
    incorrectas: [
      "Aumentar tráfico diesel para calentar ciudades",
      "Eliminar carriles bici para acelerar coches"
    ]
  },
  {
    enunciado: "¿Qué resume la idea central del tema?",
    correcta: "Los problemas ambientales tienen efectos políticos, sociales y económicos y exigen educación, salud ambiental y gobernanza",
    incorrectas: [
      "Son exclusivamente científicos y ajenos a la sociedad",
      "Se resuelven sin cambios en políticas ni conductas"
    ]
  }
];
