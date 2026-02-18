// temarios/75-el-trabajo-experimental-en-el-area-de-ciencias-utilizacion-del-laboratorio-escolar-normas-de-seguridad.js
var PREGUNTAS = [
  {
    enunciado: "El trabajo experimental en ciencias busca desarrollar competencias como indagación, medición, análisis crítico y comunicación científica.",
    correcta: "Verdadero, porque integra procedimientos, actitudes y conocimientos para construir explicaciones basadas en evidencias.",
    incorrectas: [
      "Falso, porque solo pretende confirmar teorías ya aceptadas.",
      "Falso, porque se limita a memorizar pasos sin interpretar resultados."
    ]
  },
  {
    enunciado: "En un diseño experimental escolar, las variables independiente, dependiente y de control deben estar claramente definidas.",
    correcta: "Correcto, para poder atribuir cambios observados a la variable manipulada y asegurar validez interna.",
    incorrectas: [
      "Incorrecto, porque en el aula no es necesario distinguir tipos de variables.",
      "Incorrecto, porque solo importa medir la variable dependiente."
    ]
  },
  {
    enunciado: "La planificación previa de una práctica debe incluir objetivos, materiales, riesgos y criterios de evaluación.",
    correcta: "Cierto, ya que orienta el aprendizaje, garantiza seguridad y permite valorar el desempeño.",
    incorrectas: [
      "Falso, basta con disponer de material y dejar que el grupo experimente.",
      "Falso, la evaluación no debe definirse antes de realizar la práctica."
    ]
  },
  {
    enunciado: "El cuaderno de laboratorio y las hojas de registro aseguran trazabilidad y calidad de los datos.",
    correcta: "Verdadero, porque documentan procedimientos, observaciones, cálculos y posibles incidencias.",
    incorrectas: [
      "Falso, la trazabilidad solo es necesaria en investigación profesional.",
      "Falso, porque la memoria del alumnado es suficiente para recordar los datos."
    ]
  },
  {
    enunciado: "La exactitud se refiere a la cercanía al valor verdadero y la precisión a la reproducibilidad de las medidas.",
    correcta: "Correcto, distinguiendo errores sistemáticos (exactitud) y aleatorios (precisión).",
    incorrectas: [
      "Incorrecto, es al revés: precisión es cercanía al valor verdadero.",
      "Incorrecto, ambos términos significan lo mismo."
    ]
  },
  {
    enunciado: "Usar cifras significativas adecuadas y estimar la incertidumbre mejora la calidad de los resultados.",
    correcta: "Cierto, porque evita falsas conclusiones por exceso de decimales y cuantifica el error.",
    incorrectas: [
      "Falso, porque la incertidumbre confunde al alumnado.",
      "Falso, porque los instrumentos escolares no tienen error apreciable."
    ]
  },
  {
    enunciado: "La organización del laboratorio escolar debe contemplar aforo, pasillos libres, señalización y zonas de riesgo identificadas.",
    correcta: "Verdadero, para facilitar evacuación, reducir accidentes y cumplir criterios de seguridad.",
    incorrectas: [
      "Falso, con tal de que haya mesas y sillas es suficiente.",
      "Falso, la señalización solo es obligatoria en laboratorios universitarios."
    ]
  },
  {
    enunciado: "Las vitrinas de gases y, cuando proceda, cabinas de bioseguridad, son controles de ingeniería para reducir la exposición.",
    correcta: "Correcto, porque confinan vapores y aerosoles peligrosos.",
    incorrectas: [
      "Incorrecto, su función es meramente decorativa.",
      "Incorrecto, sustituyen completamente el uso de EPIs."
    ]
  },
  {
    enunciado: "El etiquetado CLP/GHS y la consulta de la Ficha de Datos de Seguridad (FDS) son obligados antes de manipular un reactivo.",
    correcta: "Cierto, para conocer peligros, compatibilidades, EPIs y medidas de emergencia.",
    incorrectas: [
      "Falso, basta con leer el nombre común del reactivo.",
      "Falso, solo si el reactivo es inflamable."
    ]
  },
  {
    enunciado: "La norma básica al diluir ácidos es añadir siempre ácido sobre agua lentamente con agitación.",
    correcta: "Verdadero, para disipar el calor de disolución y evitar salpicaduras peligrosas.",
    incorrectas: [
      "Falso, se debe añadir agua al ácido concentrado.",
      "Falso, el orden es indiferente en cualquier ácido."
    ]
  },
  {
    enunciado: "El almacenamiento químico debe separar incompatibles: ácidos de bases, oxidantes de orgánicos e inflamables.",
    correcta: "Correcto, reduciendo reacciones peligrosas y emisiones.",
    incorrectas: [
      "Incorrecto, todo puede guardarse junto si está cerrado.",
      "Incorrecto, solo importa separar los inflamables."
    ]
  },
  {
    enunciado: "La microscale y la química verde en el aula reducen riesgos y residuos sin perder valor didáctico.",
    correcta: "Cierto, minimizan consumo, exposición y costes de gestión.",
    incorrectas: [
      "Falso, requieren equipos muy caros e inaccesibles.",
      "Falso, impiden observar fenómenos químicos auténticos."
    ]
  },
  {
    enunciado: "El equipo de protección individual mínimo suele incluir bata, gafas de seguridad y calzado cerrado.",
    correcta: "Verdadero, añadiendo guantes adecuados según la FDS.",
    incorrectas: [
      "Falso, la bata sustituye a las gafas y a los guantes.",
      "Falso, el EPI es opcional si la práctica es breve."
    ]
  },
  {
    enunciado: "Está prohibido comer, beber o usar lentillas en prácticas de riesgo químico o biológico.",
    correcta: "Correcto, para evitar ingestión accidental o atrapamiento de sustancias bajo las lentillas.",
    incorrectas: [
      "Incorrecto, solo se prohíbe comer si hay ácidos fuertes.",
      "Incorrecto, se permite agua embotellada en la mesa."
    ]
  },
  {
    enunciado: "Los extintores deben usarse según el tipo de fuego: A (sólidos), B (líquidos), C (gases) y F (aceites).",
    correcta: "Cierto, el CO₂ es habitual para B y equipos eléctricos; el agua no debe usarse en B y C.",
    incorrectas: [
      "Falso, cualquier extintor sirve para cualquier fuego.",
      "Falso, siempre se usa agua por ser más abundante."
    ]
  },
  {
    enunciado: "Ante una salpicadura ocular se debe irrigar con el lavaojos durante al menos 15 minutos y solicitar asistencia.",
    correcta: "Verdadero, manteniendo los párpados abiertos y retirando lentes si procede.",
    incorrectas: [
      "Falso, basta con un pañuelo húmedo durante un minuto.",
      "Falso, se debe neutralizar con el producto opuesto."
    ]
  },
  {
    enunciado: "Los derrames pequeños se gestionan con kit de derrames, contención, ventilación y recogida en residuo peligroso.",
    correcta: "Correcto, siguiendo las indicaciones de la FDS y evitando dispersión.",
    incorrectas: [
      "Incorrecto, se dejan evaporar para ahorrar tiempo.",
      "Incorrecto, se limpian con papel y se tiran al contenedor general."
    ]
  },
  {
    enunciado: "En riesgos biológicos educativos se recomienda trabajar con cepas no patógenas y aplicar prácticas BSL-1.",
    correcta: "Cierto, con higiene estricta, desinfección y eliminación adecuada de residuos.",
    incorrectas: [
      "Falso, cualquier microorganismo sirve si está bien sellado.",
      "Falso, no es necesario desinfectar si se usan guantes."
    ]
  },
  {
    enunciado: "Los residuos deben segregarse: papel y vidrio limpios, envases contaminados, químico peligroso y biológico.",
    correcta: "Verdadero, con etiquetado claro y gestor autorizado.",
    incorrectas: [
      "Falso, todo puede ir al mismo contenedor si está cerrado.",
      "Falso, solo los ácidos requieren segregación."
    ]
  },
  {
    enunciado: "La señal PAS (pasador–apuntar–apretar–barrido) resume el uso básico del extintor portátil.",
    correcta: "Correcto, tras comprobar seguridad personal y ruta de evacuación.",
    incorrectas: [
      "Incorrecto, primero se dirige la manguera al humo.",
      "Incorrecto, se dispara a la parte alta de las llamas."
    ]
  },
  {
    enunciado: "Antes de iniciar una práctica debe hacerse un briefing de seguridad con riesgos específicos y rutas de evacuación.",
    correcta: "Cierto, para que el alumnado conozca normas, EPIs y procedimientos de emergencia.",
    incorrectas: [
      "Falso, el briefing retrasa y no aporta nada.",
      "Falso, basta con colgar las normas en la pared."
    ]
  },
  {
    enunciado: "La distribución del alumnado en islas con roles (responsable de seguridad, secretario, técnico, portavoz) mejora orden y vigilancia.",
    correcta: "Verdadero, repartiendo tareas y responsabilizando al grupo.",
    incorrectas: [
      "Falso, los roles distraen y generan conflictos.",
      "Falso, es mejor que nadie tenga responsabilidades definidas."
    ]
  },
  {
    enunciado: "En electricidad, deben revisarse cables, usar diferenciales y evitar sobrecargar regletas.",
    correcta: "Correcto, además de desconectar equipos antes de manipularlos.",
    incorrectas: [
      "Incorrecto, las regletas no se sobrecargan si no se calientan.",
      "Incorrecto, no es necesario revisar cables si el equipo enciende."
    ]
  },
  {
    enunciado: "El método 5S (clasificar, ordenar, limpiar, estandarizar, sostener) disminuye incidentes y pérdidas de material.",
    correcta: "Cierto, porque mantiene el entorno organizado y seguro.",
    incorrectas: [
      "Falso, solo sirve para fábricas, no para laboratorios.",
      "Falso, aumenta el tiempo improductivo."
    ]
  },
  {
    enunciado: "En prácticas con gases comprimidos, las botellas deben anclarse y transportarse con caperuza.",
    correcta: "Verdadero, para evitar caídas, golpes y fugas.",
    incorrectas: [
      "Falso, basta con colocarlas en una esquina.",
      "Falso, pueden transportarse rodándolas por el suelo."
    ]
  },
  {
    enunciado: "Los guantes deben seleccionarse según compatibilidad química y cambiarlos si hay contaminación o rotura.",
    correcta: "Correcto, consultando la FDS y evitando reutilización indebida.",
    incorrectas: [
      "Incorrecto, cualquier guante sirve para cualquier reactivo.",
      "Incorrecto, los guantes de látex son universales."
    ]
  },
  {
    enunciado: "El orden de cierre al finalizar incluye: apagar equipos, cortar gas/agua, limpiar, gestionar residuos y registrar incidencias.",
    correcta: "Cierto, asegura seguridad y mantenimiento del laboratorio.",
    incorrectas: [
      "Falso, basta con apagar la luz al salir.",
      "Falso, la limpieza puede dejarse para la próxima sesión."
    ]
  },
  {
    enunciado: "En caso de quemadura térmica leve, debe enfriarse con agua corriente varios minutos y no aplicar cremas.",
    correcta: "Verdadero, protegiendo luego con apósito limpio y consultando si procede.",
    incorrectas: [
      "Falso, se debe aplicar hielo directamente sobre la piel.",
      "Falso, conviene usar pomadas que ‘cierren’ la herida."
    ]
  },
  {
    enunciado: "El manejo de vidriería bajo vacío o calentamiento exige pantallas faciales y revisión de fisuras.",
    correcta: "Correcto, para prevenir proyecciones por implosión o rotura.",
    incorrectas: [
      "Incorrecto, el vidrio nunca implosiona.",
      "Incorrecto, basta con gafas de lectura comunes."
    ]
  },
  {
    enunciado: "La evaluación de riesgos previa a la práctica identifica peligros, valora probabilidad e impacto y define controles.",
    correcta: "Cierto, guiando la selección de medidas técnicas y organizativas.",
    incorrectas: [
      "Falso, es innecesaria en actividades educativas.",
      "Falso, se sustituye por firmar una hoja de seguridad genérica."
    ]
  },
  {
    enunciado: "La instrucción de ‘no pipetear con la boca’ es una regla básica e inexcusable.",
    correcta: "Verdadero, por riesgo de ingestión y exposición.",
    incorrectas: [
      "Falso, puede hacerse con agua destilada.",
      "Falso, si se tiene experiencia no hay riesgo."
    ]
  },
  {
    enunciado: "Las duchas de seguridad se usan para exposición significativa de piel o ropa a sustancias peligrosas.",
    correcta: "Correcto, retirando ropa contaminada y manteniendo irrigación abundante.",
    incorrectas: [
      "Incorrecto, solo para enfriar al alumnado en verano.",
      "Incorrecto, se sustituyen por toallitas húmedas."
    ]
  },
  {
    enunciado: "El docente debe conocer el uso básico de extintores, manta ignífuga, botiquín, ducha y lavaojos.",
    correcta: "Cierto, y demostrar su ubicación al comienzo del curso.",
    incorrectas: [
      "Falso, solo el personal de mantenimiento debe conocerlo.",
      "Falso, la ubicación se comunica por correo y es suficiente."
    ]
  },
  {
    enunciado: "La segregación de residuos biológicos incluye punzantes en contenedor rígido y material contaminado en bolsas específicas.",
    correcta: "Verdadero, evitando mezclas con residuos urbanos.",
    incorrectas: [
      "Falso, los punzantes pueden tirarse al vidrio limpio.",
      "Falso, el autoclave hace innecesaria la segregación."
    ]
  },
  {
    enunciado: "En prácticas con calor o llamas, debe retirarse material combustible cercano y recogerse el cabello.",
    correcta: "Correcto, reduciendo riesgo de ignición o quemaduras.",
    incorrectas: [
      "Incorrecto, la distancia a la llama es irrelevante.",
      "Incorrecto, el mechero Bunsen es seguro sin precauciones."
    ]
  },
  {
    enunciado: "La bioseguridad docente promueve higiene de manos antes y después de la práctica y prohibición de llevar material a casa.",
    correcta: "Cierto, para evitar contaminación cruzada.",
    incorrectas: [
      "Falso, el material inocuo puede llevarse para reutilizarse.",
      "Falso, basta con usar guantes para no lavarse las manos."
    ]
  },
  {
    enunciado: "La evaluación del alumnado puede incluir rúbricas de seguridad, calidad del registro, análisis de datos y conclusiones.",
    correcta: "Verdadero, alineando criterios con los objetivos de la práctica.",
    incorrectas: [
      "Falso, solo debe evaluarse el resultado final numérico.",
      "Falso, la seguridad no debe formar parte de la calificación."
    ]
  },
  {
    enunciado: "Los checklists de apertura y cierre del laboratorio ayudan a detectar fallos y prevenir incidentes.",
    correcta: "Correcto, integrando tareas rutinarias críticas en un formato verificable.",
    incorrectas: [
      "Incorrecto, burocratizan y no aportan mejoras.",
      "Incorrecto, solo son útiles en grandes laboratorios."
    ]
  },
  {
    enunciado: "Ante inhalación de vapores, debe trasladarse a la persona a aire fresco, aflojar ropa y contactar con emergencias.",
    correcta: "Cierto, evitando inducir el vómito y aportando la FDS si se dispone.",
    incorrectas: [
      "Falso, se debe oler de nuevo para identificar el producto.",
      "Falso, bastan unos minutos y regresar a la práctica."
    ]
  },
  {
    enunciado: "El principio de jerarquía de controles prioriza eliminar el peligro antes que usar EPIs.",
    correcta: "Verdadero, seguido de sustitución, controles de ingeniería, organizativos y, por último, EPIs.",
    incorrectas: [
      "Falso, los EPIs son siempre la primera medida.",
      "Falso, basta con dar una charla informativa."
    ]
  }
];
