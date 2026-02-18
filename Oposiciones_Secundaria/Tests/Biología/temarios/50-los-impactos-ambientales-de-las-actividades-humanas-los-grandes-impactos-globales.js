// temarios/50-los-impactos-ambientales-de-las-actividades-humanas-los-grandes-impactos-globales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es un impacto ambiental en sentido técnico?",
    correcta: "Una alteración medible de los sistemas naturales causada por actividades humanas",
    incorrectas: [
      "Un cambio perceptivo exclusivamente estético",
      "Cualquier variación natural sin intervención humana"
    ]
  },
  {
    enunciado: "¿Cómo se clasifican los impactos según su relación causal inmediata?",
    correcta: "En directos, indirectos y acumulativos",
    incorrectas: [
      "En visuales, acústicos y térmicos",
      "En locales, regionales y planetarios exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué escala corresponde al agujero de ozono o al calentamiento global?",
    correcta: "Escala global",
    incorrectas: [
      "Escala local",
      "Escala microecosistémica"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el crecimiento demográfico sobre el medio ambiente?",
    correcta: "Aumenta la demanda de recursos y la presión sobre ecosistemas",
    incorrectas: [
      "Reduce la huella ecológica media automáticamente",
      "Elimina la necesidad de cambiar usos del suelo"
    ]
  },
  {
    enunciado: "¿Qué implica el cambio de uso del suelo?",
    correcta: "Transformación del territorio por urbanización, agricultura o infraestructuras",
    incorrectas: [
      "Mantenimiento estricto de coberturas naturales",
      "Un proceso reversible sin efectos ecológicos"
    ]
  },
  {
    enunciado: "¿Qué mide la huella ecológica?",
    correcta: "El área biológicamente productiva necesaria para sostener un modo de vida",
    incorrectas: [
      "La velocidad del viento en zonas urbanas",
      "El número de habitantes por vivienda"
    ]
  },
  {
    enunciado: "¿Qué son los límites planetarios según Rockström et al.?",
    correcta: "Umbrales biofísicos que no deberían superarse para mantener la estabilidad del sistema Tierra",
    incorrectas: [
      "Restricciones legales internacionales sobre comercio",
      "Límites administrativos de parques nacionales"
    ]
  },
  {
    enunciado: "¿Cuál es un contaminante atmosférico primario típico?",
    correcta: "Dióxido de azufre (SO₂)",
    incorrectas: [
      "Ozono estratosférico beneficioso",
      "Vapor de agua natural de la atmósfera"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al smog fotoquímico?",
    correcta: "Formación de ozono troposférico y oxidantes en presencia de luz y NOx/VOC",
    incorrectas: [
      "Precipitación ácida por reacción de SO₂ con agua",
      "Disminución del ozono estratosférico por CFC"
    ]
  },
  {
    enunciado: "¿Cuál es la causa principal de la lluvia ácida?",
    correcta: "Oxidación de SO₂ y NOx a ácidos fuertes que se depositan",
    incorrectas: [
      "Exceso de CO₂ en el océano",
      "Evaporación natural del amoníaco del suelo"
    ]
  },
  {
    enunciado: "¿Qué compuestos están implicados en la destrucción del ozono estratosférico?",
    correcta: "Clorofluorocarbonos (CFC) y otras sustancias halogenadas",
    incorrectas: [
      "Metano biogénico exclusivamente",
      "Ozono troposférico urbano"
    ]
  },
  {
    enunciado: "¿Cuáles son los principales gases de efecto invernadero antropogénicos?",
    correcta: "CO₂, CH₄, N₂O y gases fluorados",
    incorrectas: [
      "O₂, N₂ y Ar",
      "SO₂ y NH₃ únicamente"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre efecto invernadero y calentamiento global?",
    correcta: "El efecto invernadero es un proceso físico; el calentamiento global es su intensificación por actividad humana",
    incorrectas: [
      "Son sinónimos estrictos",
      "El calentamiento global causa el efecto invernadero natural"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia del cambio climático?",
    correcta: "Aumento de eventos extremos y ascenso del nivel del mar",
    incorrectas: [
      "Estabilización inmediata de los ciclos hidrológicos",
      "Incremento universal de la productividad agrícola"
    ]
  },
  {
    enunciado: "¿Qué proceso conduce a la eutrofización de aguas continentales?",
    correcta: "Aporte excesivo de nutrientes, especialmente N y P",
    incorrectas: [
      "Reducción de fitoplancton por falta de luz",
      "Ausencia total de descargas orgánicas"
    ]
  },
  {
    enunciado: "¿Qué efecto tienen los derrames de petróleo en el medio marino?",
    correcta: "Toxicidad, pérdida de aislamiento térmico en aves y daños a hábitats",
    incorrectas: [
      "Aumento de la fotosíntesis por película superficial",
      "Mejora de la filtración natural de arrecifes"
    ]
  },
  {
    enunciado: "¿Por qué preocupan los microplásticos?",
    correcta: "Por su persistencia, bioacumulación y efectos tróficos",
    incorrectas: [
      "Porque se disuelven rápidamente sin impacto",
      "Porque son nutrientes esenciales para peces"
    ]
  },
  {
    enunciado: "¿Qué implica la sobreexplotación de acuíferos?",
    correcta: "Descenso piezométrico, intrusión salina y subsidencia",
    incorrectas: [
      "Aumento de caudales de manantiales",
      "Recuperación automática de humedales"
    ]
  },
  {
    enunciado: "¿Qué acelera la erosión del suelo?",
    correcta: "Deforestación, sobrepastoreo y laboreo inadecuado",
    incorrectas: [
      "Cobertura vegetal densa y permanente",
      "Terrazas y manejo conservacionista"
    ]
  },
  {
    enunciado: "¿Qué define la desertificación?",
    correcta: "Degradación de tierras en zonas áridas por variaciones climáticas y actividades humanas",
    incorrectas: [
      "Expansión de desiertos por causas volcánicas",
      "Fenómeno restringido a regiones polares"
    ]
  },
  {
    enunciado: "¿Qué contaminantes del suelo son frecuentes por actividades humanas?",
    correcta: "Metales pesados, pesticidas y compuestos orgánicos persistentes",
    incorrectas: [
      "Nitrógeno y oxígeno atmosféricos",
      "Arena y arcilla en proporción natural"
    ]
  },
  {
    enunciado: "¿Qué impacto ambiental tiene la minería a cielo abierto?",
    correcta: "Alteración del relieve, polvo, drenaje ácido y pérdida de hábitat",
    incorrectas: [
      "Aumento de la fertilidad edáfica",
      "Restauración espontánea sin intervención"
    ]
  },
  {
    enunciado: "¿Qué provoca la fragmentación de hábitats?",
    correcta: "Aislamiento poblacional y pérdida de conectividad ecológica",
    incorrectas: [
      "Mejora del flujo génico",
      "Incremento universal de la diversidad alfa"
    ]
  },
  {
    enunciado: "¿Qué expresa la 'sexta gran extinción'?",
    correcta: "Ritmo de pérdida de especies muy superior al de fondo por causas antrópicas",
    incorrectas: [
      "Un episodio volcánico del Mesozoico",
      "Un ciclo natural sin relación con la actividad humana"
    ]
  },
  {
    enunciado: "¿Qué efecto tienen las especies exóticas invasoras?",
    correcta: "Desplazan especies nativas y alteran procesos ecosistémicos",
    incorrectas: [
      "Siempre incrementan servicios ecosistémicos",
      "Se limitan a ocupar nichos vacíos sin interacción"
    ]
  },
  {
    enunciado: "¿Qué son los servicios ecosistémicos?",
    correcta: "Beneficios que las personas obtienen de los ecosistemas",
    incorrectas: [
      "Costes económicos de la conservación",
      "Impuestos aplicados a actividades extractivas"
    ]
  },
  {
    enunciado: "¿Cuál es el principal reto de la energía nuclear en términos ambientales?",
    correcta: "Gestión segura de residuos radiactivos de larga vida",
    incorrectas: [
      "Emisiones directas elevadas de CO₂ en operación",
      "Imposibilidad total de control de reacciones"
    ]
  },
  {
    enunciado: "¿Qué es la Evaluación de Impacto Ambiental (EIA)?",
    correcta: "Un proceso para identificar, predecir y mitigar efectos ambientales de proyectos",
    incorrectas: [
      "Un permiso automático de construcción",
      "Un inventario de especies sin análisis de impactos"
    ]
  },
  {
    enunciado: "¿Cuál es la jerarquía de mitigación en gestión ambiental?",
    correcta: "Evitar → Minimizar → Restaurar → Compensar",
    incorrectas: [
      "Compensar → Restaurar → Minimizar → Evitar",
      "Monitorear → Publicitar → Licitar → Explorar"
    ]
  },
  {
    enunciado: "¿Qué fases son típicas en una EIA rigurosa?",
    correcta: "Cribado, alcance, estudio, información pública, resolución y seguimiento",
    incorrectas: [
      "Presupuesto, obra, inauguración",
      "Demolición, relleno, asfaltado"
    ]
  },
  {
    enunciado: "¿Qué acuerdo internacional guía la reducción de emisiones de GEI desde 2015?",
    correcta: "Acuerdo de París",
    incorrectas: [
      "Protocolo de Montreal",
      "Tratado de Río de Janeiro de 1972"
    ]
  },
  {
    enunciado: "¿Qué es la economía circular?",
    correcta: "Modelo que prioriza reducir, reutilizar, reparar y reciclar para cerrar ciclos de materiales y energía",
    incorrectas: [
      "Incrementar extracción primaria para abaratar materias primas",
      "Sustituir totalmente el reciclaje por vertedero controlado"
    ]
  },
  {
    enunciado: "¿Qué evalúa el Análisis de Ciclo de Vida (ACV)?",
    correcta: "Los impactos ambientales de un producto desde la cuna a la tumba",
    incorrectas: [
      "Solo el coste económico de fabricación",
      "Únicamente la fase de uso en el consumidor"
    ]
  },
  {
    enunciado: "¿Qué es la huella de carbono?",
    correcta: "La suma de emisiones de GEI asociadas a una actividad, producto o organización",
    incorrectas: [
      "El contenido de carbono orgánico del suelo",
      "La absorción neta de CO₂ por bosques"
    ]
  },
  {
    enunciado: "¿Qué son las Mejores Técnicas Disponibles (MTD/BAT)?",
    correcta: "Opciones técnicas viables que logran altos niveles de protección ambiental",
    incorrectas: [
      "Tecnologías experimentales no aplicables",
      "Cualquier práctica más barata independientemente del impacto"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia entre mitigación y adaptación al cambio climático?",
    correcta: "Mitigación reduce emisiones/forzamientos; adaptación reduce vulnerabilidad a sus efectos",
    incorrectas: [
      "Mitigación es local y adaptación global",
      "Adaptación consiste en prohibir energías renovables"
    ]
  },
  {
    enunciado: "¿Qué marco orienta políticas de sostenibilidad hasta 2030?",
    correcta: "Agenda 2030 y Objetivos de Desarrollo Sostenible (ODS)",
    incorrectas: [
      "Agenda 2010 de Kioto revisada",
      "Convención RAMSAR exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la gestión adaptativa?",
    correcta: "Ajusta medidas según el seguimiento y resultados observados",
    incorrectas: [
      "Planifica una vez y nunca revisa",
      "Evita el monitoreo para reducir costes"
    ]
  },
  {
    enunciado: "¿Qué acción es propia de la restauración ecológica tras un impacto?",
    correcta: "Recuperar funciones y hábitats con especies autóctonas y suelos estabilizados",
    incorrectas: [
      "Introducir exóticas invasoras por su rápido crecimiento",
      "Sellar el suelo con hormigón para evitar erosión natural"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la participación pública en la EIA?",
    correcta: "Aporta transparencia y mejora la identificación de impactos y alternativas",
    incorrectas: [
      "Retrasa sin beneficio el proceso",
      "Sustituye los estudios técnicos necesarios"
    ]
  }
];
