// temarios/20-la-investigacion-geologica-y-sus-metodos-fundamentos-y-utilidad-de-la-fotografia-aerea-el-mapa-topografico-y-el-mapa-geologico-importancia-de-la-geologia-en-la-busqueda-de-recursos-y-en-las-obras-publicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es un objetivo central de la investigación geológica aplicada?",
    correcta: "Caracterizar materiales y estructuras para gestionar recursos y mitigar riesgos",
    incorrectas: [
      "Únicamente describir paisajes sin aplicaciones prácticas",
      "Determinar la presión atmosférica media de una región"
    ]
  },
  {
    enunciado: "¿Qué se considera un método DIRECTO en investigación geológica?",
    correcta: "Sondeos y calicatas con testificación del terreno",
    incorrectas: [
      "Tomografía eléctrica (ERT)",
      "Magnetometría aerotransportada"
    ]
  },
  {
    enunciado: "¿Qué información aporta principalmente la gravimetría en prospección?",
    correcta: "Contrastes de densidad vinculados a cuencas, intrusiones o cavidades",
    incorrectas: [
      "Distribución de cloruros disueltos en acuíferos",
      "Contenido de agua de un suelo arcilloso a escala de laboratorio"
    ]
  },
  {
    enunciado: "¿Para qué es especialmente útil la magnetometría?",
    correcta: "Detectar cuerpos con alta susceptibilidad magnética como diques o mineralizaciones férricas",
    incorrectas: [
      "Medir directamente la salinidad del agua subterránea",
      "Determinar la porosidad de matriz con precisión de laboratorio"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la Tomografía de Resistividad Eléctrica (ERT)?",
    correcta: "Obtiene modelos 2D/3D de resistividad del subsuelo a partir de inyecciones de corriente",
    incorrectas: [
      "Registra variaciones del campo magnético terrestre en el tiempo",
      "Mide directamente la velocidad sísmica de ondas P"
    ]
  },
  {
    enunciado: "¿Para qué se emplea el georradar (GPR)?",
    correcta: "Imagen de alta resolución somera para detectar interfaces, servicios enterrados o cavidades",
    incorrectas: [
      "Exploración profunda de la corteza hasta decenas de kilómetros",
      "Cuantificar la mineralogía con difracción de rayos X"
    ]
  },
  {
    enunciado: "¿Qué diferencia clave hay entre sísmica de refracción y de reflexión?",
    correcta: "La refracción estima capas someras por velocidades críticas; la reflexión imagen estructuras profundas con tiempos de viaje",
    incorrectas: [
      "La refracción usa ondas S y la reflexión solo ondas superficiales",
      "La refracción es siempre más profunda que la reflexión"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza el método H/V de microtremores (HVSR)?",
    correcta: "Estimar la frecuencia fundamental del terreno y apoyar la clasificación sísmica local",
    incorrectas: [
      "Medir el coeficiente de consolidación edométrica",
      "Determinar la saturación del suelo con precisión volumétrica"
    ]
  },
  {
    enunciado: "En un SPT realizado en sondeo, ¿qué mide el N-SPT?",
    correcta: "Golpes necesarios para hincar 30 cm el tomamuestras estándar tras una precarga",
    incorrectas: [
      "La carga última a rotura de una zapata",
      "La velocidad de propagación de onda P en laboratorio"
    ]
  },
  {
    enunciado: "¿Qué proporciona un ensayo CPT (penetración estática)?",
    correcta: "Perfil continuo de resistencia de punta y fricción lateral del terreno",
    incorrectas: [
      "Un testigo continuo para petrografía",
      "Un mapa de resistividad eléctrica aérea"
    ]
  },
  {
    enunciado: "¿Qué distingue un ensayo Lugeon de un Lefranc?",
    correcta: "Lugeon evalúa permeabilidad en roca fracturada; Lefranc en suelos en sondeo/calicata",
    incorrectas: [
      "Lugeon mide compactación y Lefranc densidad aparente",
      "Lugeon es químico y Lefranc es térmico"
    ]
  },
  {
    enunciado: "¿Qué cuantifican los límites de Atterberg?",
    correcta: "La plasticidad y consistencia de suelos finos según su humedad",
    incorrectas: [
      "La resistividad eléctrica del terreno",
      "La anisotropía magnética de rocas ígneas"
    ]
  },
  {
    enunciado: "¿Qué es el RQD en mecánica de rocas?",
    correcta: "Índice de calidad del testigo de roca basado en la longitud de fragmentos sanos",
    incorrectas: [
      "Relación entre densidad y porosidad total",
      "Un coeficiente de retracción libre de arcillas"
    ]
  },
  {
    enunciado: "¿Para qué sirve la clasificación RMR de Bieniawski?",
    correcta: "Valorar condiciones geomecánicas del macizo rocoso y orientar el sostenimiento",
    incorrectas: [
      "Medir el contenido de materia orgánica del suelo",
      "Estimar la carga admisible de pilotes por hundimiento"
    ]
  },
  {
    enunciado: "¿Qué evalúa el índice Q de Barton?",
    correcta: "Calidad del macizo rocoso para diseño de túneles y sostenimientos",
    incorrectas: [
      "Salinidad de aguas subterráneas",
      "Contenido de arcilla expansiva en suelos"
    ]
  },
  {
    enunciado: "¿Qué instrumento mide rumbo y buzamiento de estratos en campo?",
    correcta: "Brújula geológica/clinómetro",
    incorrectas: [
      "Magnetómetro de precesión de protones",
      "Inclinómetro de sondeo de tubo abierto"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza un estereonet (red de Schmidt/Wulff)?",
    correcta: "Representar y analizar orientaciones de planos y ejes (pliegues, fallas)",
    incorrectas: [
      "Calcular la frecuencia dominante de microtremores",
      "Determinar la densidad aparente de un testigo"
    ]
  },
  {
    enunciado: "En fotogrametría aérea, ¿qué define una fotografía VERTICAL?",
    correcta: "Eje óptico aproximadamente perpendicular al terreno, adecuada para ortorrectificación",
    incorrectas: [
      "Eje inclinado para enfatizar relieve (oblicua)",
      "Una imagen sin distorsiones por perspectiva aun con gran inclinación"
    ]
  },
  {
    enunciado: "¿Qué permite la visión estereoscópica de un par aéreo?",
    correcta: "Percibir relieve y medir desniveles/modelos 3D",
    incorrectas: [
      "Corregir automáticamente la magnetización remanente",
      "Medir el pH del suelo desde imagen"
    ]
  },
  {
    enunciado: "En fotointerpretación, ¿qué claves se usan habitualmente?",
    correcta: "Tono/color, textura, patrón, forma, sombras y contexto",
    incorrectas: [
      "Únicamente la altitud y la latitud",
      "Sólo el color real sin análisis geométrico"
    ]
  },
  {
    enunciado: "¿Qué mide InSAR aplicado a geología e ingeniería?",
    correcta: "Deformaciones del terreno milimétricas en el tiempo (subsidencia, deslizamientos)",
    incorrectas: [
      "Composición mineralógica puntual",
      "Litología mediante difracción de rayos X"
    ]
  },
  {
    enunciado: "¿Qué producto entrega el LIDAR aerotransportado?",
    correcta: "Modelos digitales del terreno y de elevaciones de alta resolución",
    incorrectas: [
      "Perfiles de resistividad eléctrica a 1000 m de profundidad",
      "Análisis petrográfico de lámina delgada"
    ]
  },
  {
    enunciado: "¿Qué representan las curvas de nivel en un mapa topográfico?",
    correcta: "Líneas de igual cota sobre el nivel de referencia",
    incorrectas: [
      "Límites administrativos municipales",
      "Isóbatas de profundidad marina en cualquier caso"
    ]
  },
  {
    enunciado: "¿Qué significa una escala 1:25.000?",
    correcta: "1 cm en el mapa equivale a 250 m en el terreno",
    incorrectas: [
      "1 cm equivale a 25 m",
      "1 cm equivale a 2,5 km × 2"
    ]
  },
  {
    enunciado: "¿Cómo se identifica una zona de fuerte pendiente en un topográfico?",
    correcta: "Curvas de nivel muy próximas entre sí",
    incorrectas: [
      "Curvas muy separadas",
      "Ausencia de curvas de nivel"
    ]
  },
  {
    enunciado: "¿Para qué es básico el mapa topográfico en estudios de riesgos?",
    correcta: "Delimitar áreas inundables y potenciales zonas de inestabilidad",
    incorrectas: [
      "Fechar radiométricamente depósitos volcánicos",
      "Medir el contenido de arcillas expansivas en laboratorio"
    ]
  },
  {
    enunciado: "¿Qué muestra fundamentalmente un mapa geológico?",
    correcta: "Distribución de unidades de roca, edades, contactos y estructuras (pliegues/fallas)",
    incorrectas: [
      "Únicamente usos del suelo actuales",
      "Exclusivamente cotas y pendientes"
    ]
  },
  {
    enunciado: "En simbología geológica, ¿cómo se representan usualmente las fallas?",
    correcta: "Trazos con dientes/triángulos o barras según tipo, con indicación de movimiento",
    incorrectas: [
      "Curvas de nivel con equidistancia reducida",
      "Puntos aislados sin leyenda"
    ]
  },
  {
    enunciado: "¿Para qué sirve una sección geológica asociada al mapa?",
    correcta: "Visualizar la geometría en profundidad de las unidades y estructuras",
    incorrectas: [
      "Medir directamente la conductividad eléctrica del agua",
      "Sustituir la necesidad de sondeos en cualquier caso"
    ]
  },
  {
    enunciado: "En hidrogeología, ¿qué es DRASTIC?",
    correcta: "Un índice de vulnerabilidad a la contaminación de acuíferos basado en varios parámetros",
    incorrectas: [
      "Un método sísmico de alta resolución",
      "Un ensayo de permeabilidad en laboratorio"
    ]
  },
  {
    enunciado: "¿Qué componentes forman un sistema petrolífero completo?",
    correcta: "Roca madre, maduración, migración, trampa, sello y reservorio",
    incorrectas: [
      "Únicamente reservorio y un mapa topográfico",
      "Roca madre y un acuífero libre sin más"
    ]
  },
  {
    enunciado: "¿Qué riesgo constructivo es típico en macizos kársticos para presas y túneles?",
    correcta: "Pérdidas por filtración y hundimientos por cavidades disueltas",
    incorrectas: [
      "Licuefacción en gravas bien graduadas muy densas",
      "Oxidación de pirita superficial exclusivamente"
    ]
  },
  {
    enunciado: "La licuefacción sísmica se asocia principalmente a…",
    correcta: "Arenas saturadas sueltas sometidas a sismos",
    incorrectas: [
      "Rocas ígneas frescas de alta resistencia",
      "Arcillas muy plásticas sobreconsolidadas"
    ]
  },
  {
    enunciado: "¿Qué método simple ayuda a estimar Vs30 para clasificación sísmica local?",
    correcta: "Sísmica de Refracción/Multicanal superficial o métodos pasivos H/V",
    incorrectas: [
      "Ensayo de corte directo en laboratorio",
      "Tomografía eléctrica exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué medidas mejoran la estabilidad de taludes en obra civil?",
    correcta: "Drenaje, bermas, anclajes/bulonado y gunita (shotcrete) según cálculo",
    incorrectas: [
      "Aumentar la pendiente sin drenaje",
      "Eliminar todo sostenimiento para aligerar peso"
    ]
  },
  {
    enunciado: "¿Qué mide un piezómetro de observación?",
    correcta: "La carga piezométrica/nivel del agua en el subsuelo",
    incorrectas: [
      "La resistencia a compresión simple de la roca",
      "La conductividad eléctrica del suelo en laboratorio"
    ]
  },
  {
    enunciado: "¿Cuál es la finalidad del control de calidad (QA/QC) en campañas geológicas?",
    correcta: "Asegurar trazabilidad y fiabilidad de datos de campo y laboratorio",
    incorrectas: [
      "Reducir el número de muestras al mínimo",
      "Evitar el uso de duplicados o blancos"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta integrar SIG y BIM geotécnico en proyectos?",
    correcta: "Coherencia espacial de datos y mejor coordinación diseño–construcción–explotación",
    incorrectas: [
      "Sustituir por completo la necesidad de cartografía geológica",
      "Eliminar la necesidad de instrumentación en obra"
    ]
  }
];
