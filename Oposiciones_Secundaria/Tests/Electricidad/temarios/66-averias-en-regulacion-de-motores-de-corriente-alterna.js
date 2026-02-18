// 66-averias-en-regulacion-de-motores-de-corriente-alterna.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por avería en la regulación de motores de corriente alterna?",
    correcta: "Cualquier fallo que impide controlar correctamente velocidad, par o funcionamiento del motor",
    incorrectas: [
      "La adaptación normal del motor a distintas cargas",
      "El mantenimiento preventivo periódico"
    ]
  },
  {
    enunciado: "¿Qué equipo es el más habitual para regular motores de CA?",
    correcta: "El variador de frecuencia",
    incorrectas: [
      "El transformador de aislamiento",
      "El relé térmico exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué síntoma típico indica una avería en el variador de frecuencia?",
    correcta: "El motor no arranca o se para con alarmas",
    incorrectas: [
      "El motor funciona siempre a velocidad nominal",
      "El motor no necesita ventilación"
    ]
  },
  {
    enunciado: "¿Qué se debe comprobar primero ante una avería en regulación de motores CA?",
    correcta: "La alimentación, protecciones y estado del variador",
    incorrectas: [
      "La sustitución directa del motor",
      "El cambio de la carga mecánica"
    ]
  },
  {
    enunciado: "¿Qué fallo puede provocar que el motor no arranque?",
    correcta: "Ausencia de tensión o bloqueo por protección del variador",
    incorrectas: [
      "Velocidad nominal baja",
      "Buena parametrización"
    ]
  },
  {
    enunciado: "¿Qué causa habitual genera disparos por sobrecorriente?",
    correcta: "Sobrecarga mecánica o rampas de aceleración demasiado bruscas",
    incorrectas: [
      "Funcionamiento en vacío",
      "Exceso de documentación técnica"
    ]
  },
  {
    enunciado: "¿Qué indica un fallo de sobretensión en el variador?",
    correcta: "Problemas en la red o en el frenado del motor",
    incorrectas: [
      "Mejor rendimiento energético",
      "Correcto dimensionado del sistema"
    ]
  },
  {
    enunciado: "¿Qué es una avería por subtensión?",
    correcta: "Caída de tensión por debajo del umbral de funcionamiento seguro",
    incorrectas: [
      "Incremento excesivo de frecuencia",
      "Error en la simbología del esquema"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene un cableado incorrecto entre variador y motor?",
    correcta: "Sobretensiones, calentamiento y fallos de aislamiento",
    incorrectas: [
      "Reducción automática del consumo",
      "Mejora del par a bajas revoluciones"
    ]
  },
  {
    enunciado: "¿Qué fallo puede provocar ruido eléctrico anómalo en el motor?",
    correcta: "Conmutación PWM defectuosa o armónicos elevados",
    incorrectas: [
      "Lubricación correcta",
      "Ventilación adecuada"
    ]
  },
  {
    enunciado: "¿Qué avería está asociada a un mal ajuste de parámetros del variador?",
    correcta: "Funcionamiento inestable o protecciones intempestivas",
    incorrectas: [
      "Mayor vida útil garantizada",
      "Eliminación de protecciones térmicas"
    ]
  },
  {
    enunciado: "¿Qué ocurre si los datos de placa del motor están mal introducidos?",
    correcta: "La regulación es incorrecta y se pueden producir sobrecorrientes",
    incorrectas: [
      "El motor se protege mejor",
      "No afecta al funcionamiento"
    ]
  },
  {
    enunciado: "¿Qué fallo afecta directamente al control de velocidad?",
    correcta: "Avería en el lazo de realimentación o en el control del variador",
    incorrectas: [
      "Cambio del color del cableado",
      "Uso de filtros EMI"
    ]
  },
  {
    enunciado: "¿Qué indica calentamiento excesivo del motor regulado?",
    correcta: "Sobrecarga, mala ventilación o armónicos elevados",
    incorrectas: [
      "Correcto ajuste del control vectorial",
      "Funcionamiento en vacío"
    ]
  },
  {
    enunciado: "¿Qué elemento protege al motor frente a sobrecalentamiento?",
    correcta: "La protección térmica integrada o externa",
    incorrectas: [
      "El filtro EMC",
      "El bus de continua"
    ]
  },
  {
    enunciado: "¿Qué avería puede provocar vibraciones mecánicas?",
    correcta: "Frecuencias de resonancia mal gestionadas por el variador",
    incorrectas: [
      "Velocidad estable",
      "Carga correctamente alineada"
    ]
  },
  {
    enunciado: "¿Qué es un fallo de aislamiento en motores CA?",
    correcta: "La pérdida de resistencia entre bobinados y masa",
    incorrectas: [
      "Una correcta puesta a tierra",
      "Un ajuste fino del par"
    ]
  },
  {
    enunciado: "¿Qué instrumento es básico para medir tensiones y corrientes en diagnóstico?",
    correcta: "El multímetro",
    incorrectas: [
      "El manómetro",
      "El termostato hidráulico"
    ]
  },
  {
    enunciado: "¿Qué herramienta es útil para analizar armónicos?",
    correcta: "Un analizador de redes",
    incorrectas: [
      "Un calibre mecánico",
      "Un detector de proximidad"
    ]
  },
  {
    enunciado: "¿Qué provoca un fallo en el encoder del motor?",
    correcta: "Pérdida de control preciso de velocidad o posición",
    incorrectas: [
      "Mejora automática del control",
      "Mayor estabilidad sin realimentación"
    ]
  },
  {
    enunciado: "¿Qué síntoma indica una avería intermitente?",
    correcta: "Fallos que aparecen y desaparecen sin patrón fijo",
    incorrectas: [
      "Fallo permanente",
      "Funcionamiento continuo correcto"
    ]
  },
  {
    enunciado: "¿Qué causa típica genera averías intermitentes?",
    correcta: "Conexiones flojas o contactos defectuosos",
    incorrectas: [
      "Uso de normativa técnica",
      "Documentación completa"
    ]
  },
  {
    enunciado: "¿Qué papel tiene el mantenimiento preventivo en motores CA regulados?",
    correcta: "Reducir la probabilidad de averías y prolongar la vida útil",
    incorrectas: [
      "Eliminar todas las averías",
      "Sustituir el diagnóstico"
    ]
  },
  {
    enunciado: "¿Qué revisión es típica en mantenimiento de variadores?",
    correcta: "Estado de ventilación, limpieza y conexiones",
    incorrectas: [
      "Cambio del número de polos del motor",
      "Modificación del principio de funcionamiento"
    ]
  },
  {
    enunciado: "¿Qué ocurre si fallan las protecciones del variador?",
    correcta: "Riesgo de daños graves en motor y equipo",
    incorrectas: [
      "Mayor continuidad de servicio",
      "Mejor eficiencia energética"
    ]
  },
  {
    enunciado: "¿Qué se debe hacer tras corregir una avería?",
    correcta: "Probar el sistema en distintas condiciones de carga",
    incorrectas: [
      "Poner en marcha sin comprobaciones",
      "Eliminar el registro de la avería"
    ]
  },
  {
    enunciado: "¿Qué indica un disparo por fallo a tierra?",
    correcta: "Problemas de aislamiento o cableado defectuoso",
    incorrectas: [
      "Correcta puesta a tierra",
      "Carga perfectamente equilibrada"
    ]
  },
  {
    enunciado: "¿Qué fallo puede causar pérdida de par a bajas revoluciones?",
    correcta: "Control inadecuado o parámetros incorrectos",
    incorrectas: [
      "Uso de control vectorial",
      "Encoder operativo"
    ]
  },
  {
    enunciado: "¿Qué riesgo implica ignorar alarmas del variador?",
    correcta: "Daños mayores y riesgos de seguridad",
    incorrectas: [
      "Mejor estabilidad del sistema",
      "Reducción del mantenimiento"
    ]
  },
  {
    enunciado: "¿Qué debe verificarse en el cableado de potencia?",
    correcta: "Sección adecuada, continuidad y buen apriete",
    incorrectas: [
      "Color del aislamiento únicamente",
      "Longitud estética del recorrido"
    ]
  },
  {
    enunciado: "¿Qué fallo puede provocar paradas inesperadas?",
    correcta: "Protecciones mal ajustadas o fallos de red",
    incorrectas: [
      "Funcionamiento nominal estable",
      "Carga constante"
    ]
  },
  {
    enunciado: "¿Qué es un fallo lógico en regulación de motores CA?",
    correcta: "Un error en el control o parametrización del variador",
    incorrectas: [
      "Una rotura mecánica",
      "Un desgaste normal"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la documentación técnica en diagnóstico?",
    correcta: "Facilita localización de fallos y reparación segura",
    incorrectas: [
      "Aumenta la complejidad innecesariamente",
      "Sustituye la formación del técnico"
    ]
  },
  {
    enunciado: "¿Qué debe hacerse ante una avería grave?",
    correcta: "Parar el sistema y aplicar procedimientos de seguridad",
    incorrectas: [
      "Forzar el funcionamiento",
      "Ignorar la alarma"
    ]
  },
  {
    enunciado: "¿Qué elemento mecánico puede provocar sobrecarga eléctrica?",
    correcta: "La máquina accionada o la transmisión",
    incorrectas: [
      "El filtro EMI",
      "El teclado del variador"
    ]
  },
  {
    enunciado: "¿Qué síntoma puede indicar desequilibrio de fases?",
    correcta: "Corrientes desiguales y calentamiento",
    incorrectas: [
      "Velocidad perfectamente estable",
      "Reducción de armónicos"
    ]
  },
  {
    enunciado: "¿Qué criterio docente es clave al estudiar averías en motores CA?",
    correcta: "Relacionar síntomas, causas y procedimientos de diagnóstico",
    incorrectas: [
      "Memorizar códigos de alarma sin contexto",
      "Evitar el análisis de esquemas"
    ]
  },
  {
    enunciado: "¿Qué debe garantizar una reparación correcta?",
    correcta: "Funcionamiento fiable, seguro y conforme a especificaciones",
    incorrectas: [
      "Complejidad máxima del sistema",
      "Mayor número de intervenciones"
    ]
  }
];
