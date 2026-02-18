// 60-diagnosis-y-mantenimiento-de-sistemas-automaticos-secuenciales.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por diagnóstico en sistemas automáticos secuenciales?",
    correcta: "El proceso de detección, localización e identificación de fallos en un sistema automático",
    incorrectas: [
      "La sustitución directa de componentes sin análisis previo",
      "La programación inicial del sistema"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal del diagnóstico?",
    correcta: "Restablecer el funcionamiento correcto del sistema de forma segura y eficaz",
    incorrectas: [
      "Aumentar la complejidad del sistema",
      "Modificar la secuencia original de trabajo"
    ]
  },
  {
    enunciado: "¿Qué se entiende por mantenimiento en sistemas automáticos?",
    correcta: "El conjunto de acciones destinadas a conservar o restablecer el funcionamiento del sistema",
    incorrectas: [
      "El rediseño completo del automatismo",
      "La programación de nuevas funciones"
    ]
  },
  {
    enunciado: "¿Qué tipo de mantenimiento se realiza antes de que aparezca una avería?",
    correcta: "Mantenimiento preventivo",
    incorrectas: [
      "Mantenimiento correctivo",
      "Mantenimiento de emergencia"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al mantenimiento correctivo?",
    correcta: "Se actúa tras producirse un fallo o avería",
    incorrectas: [
      "Evita totalmente las averías",
      "Se realiza solo en sistemas nuevos"
    ]
  },
  {
    enunciado: "¿Qué es un sistema automático secuencial?",
    correcta: "Un sistema que ejecuta una serie de acciones en un orden lógico determinado",
    incorrectas: [
      "Un sistema sin sensores",
      "Un sistema de control manual"
    ]
  },
  {
    enunciado: "¿Qué papel cumplen los sensores en un sistema secuencial?",
    correcta: "Proporcionar información sobre estados y posiciones",
    incorrectas: [
      "Aumentar la presión o potencia del sistema",
      "Sustituir a los actuadores"
    ]
  },
  {
    enunciado: "¿Qué es un actuador en un sistema automático?",
    correcta: "El elemento que realiza la acción física controlada",
    incorrectas: [
      "El dispositivo de medida",
      "El sistema de protección eléctrica"
    ]
  },
  {
    enunciado: "¿Qué documentación es clave para el diagnóstico?",
    correcta: "Esquemas eléctricos, neumáticos o hidráulicos y secuencias de funcionamiento",
    incorrectas: [
      "Únicamente el manual del operario",
      "Solo el listado de materiales"
    ]
  },
  {
    enunciado: "¿Qué es una avería intermitente?",
    correcta: "Un fallo que aparece y desaparece de forma irregular",
    incorrectas: [
      "Un fallo permanente",
      "Un fallo previsto en el diseño"
    ]
  },
  {
    enunciado: "¿Qué herramienta básica se utiliza para medir tensión eléctrica?",
    correcta: "El multímetro",
    incorrectas: [
      "El manómetro",
      "El osciloscopio hidráulico"
    ]
  },
  {
    enunciado: "¿Qué se debe comprobar primero ante una avería?",
    correcta: "Las condiciones de alimentación y seguridad",
    incorrectas: [
      "La programación avanzada",
      "La sustitución inmediata del PLC"
    ]
  },
  {
    enunciado: "¿Qué es un fallo de sensor?",
    correcta: "La ausencia o incoherencia de la señal esperada",
    incorrectas: [
      "Un exceso de presión",
      "Un error estético en el esquema"
    ]
  },
  {
    enunciado: "¿Qué indica que un actuador no responde?",
    correcta: "Posible fallo de alimentación, mando o componente mecánico",
    incorrectas: [
      "Funcionamiento normal del sistema",
      "Correcta ejecución de la secuencia"
    ]
  },
  {
    enunciado: "¿Qué es una secuencia incorrecta?",
    correcta: "La ejecución de movimientos fuera del orden previsto",
    incorrectas: [
      "Un aumento de velocidad",
      "Un ciclo correctamente terminado"
    ]
  },
  {
    enunciado: "¿Qué función tiene el diagrama de tiempos o fases?",
    correcta: "Ayudar a analizar el orden y duración de las acciones",
    incorrectas: [
      "Calcular el consumo eléctrico",
      "Representar la ubicación física de componentes"
    ]
  },
  {
    enunciado: "¿Qué es una señal de realimentación?",
    correcta: "La información que confirma que una acción se ha realizado",
    incorrectas: [
      "Una señal de arranque manual",
      "Un fallo de cableado"
    ]
  },
  {
    enunciado: "¿Qué riesgo existe si se puentean sistemas de seguridad?",
    correcta: "Accidentes y daños graves en equipos y personas",
    incorrectas: [
      "Mayor fiabilidad del sistema",
      "Mejor diagnóstico"
    ]
  },
  {
    enunciado: "¿Qué se entiende por mantenimiento predictivo?",
    correcta: "El basado en el análisis del estado y desgaste de los componentes",
    incorrectas: [
      "La reparación tras una avería",
      "La sustitución aleatoria de piezas"
    ]
  },
  {
    enunciado: "¿Qué es un fallo lógico en un sistema secuencial?",
    correcta: "Un error en la lógica de control o secuencia",
    incorrectas: [
      "Una rotura mecánica",
      "Una fuga hidráulica"
    ]
  },
  {
    enunciado: "¿Qué elemento suele provocar fallos por desgaste mecánico?",
    correcta: "Actuadores y elementos móviles",
    incorrectas: [
      "Los esquemas eléctricos",
      "Los sensores ópticos sin uso"
    ]
  },
  {
    enunciado: "¿Qué función cumple el mantenimiento preventivo?",
    correcta: "Reducir la probabilidad de fallos y alargar la vida útil",
    incorrectas: [
      "Eliminar completamente las averías",
      "Cambiar la función del sistema"
    ]
  },
  {
    enunciado: "¿Qué se debe hacer tras reparar una avería?",
    correcta: "Verificar el funcionamiento completo de la secuencia",
    incorrectas: [
      "Poner el sistema en marcha sin pruebas",
      "Modificar la documentación sin comprobar"
    ]
  },
  {
    enunciado: "¿Qué es una prueba funcional?",
    correcta: "La comprobación del sistema en condiciones reales o simuladas",
    incorrectas: [
      "Una medición estética del cuadro",
      "Un cálculo teórico sin puesta en marcha"
    ]
  },
  {
    enunciado: "¿Qué tipo de fallo es una fuga neumática o hidráulica?",
    correcta: "Un fallo físico del sistema",
    incorrectas: [
      "Un fallo lógico",
      "Un error de programación"
    ]
  },
  {
    enunciado: "¿Qué indica un manómetro en diagnóstico hidráulico?",
    correcta: "El valor de presión del circuito",
    incorrectas: [
      "La velocidad del actuador",
      "El estado del sensor eléctrico"
    ]
  },
  {
    enunciado: "¿Qué es la trazabilidad en mantenimiento?",
    correcta: "El registro histórico de intervenciones y fallos",
    incorrectas: [
      "El diseño inicial del sistema",
      "La automatización del montaje"
    ]
  },
  {
    enunciado: "¿Qué documento recoge las tareas periódicas de mantenimiento?",
    correcta: "El plan de mantenimiento",
    incorrectas: [
      "El esquema unifilar",
      "El programa de control"
    ]
  },
  {
    enunciado: "¿Qué error humano es frecuente en mantenimiento?",
    correcta: "Interpretar mal esquemas o no seguir procedimientos",
    incorrectas: [
      "Usar herramientas de medida",
      "Consultar la documentación"
    ]
  },
  {
    enunciado: "¿Qué es un paro de emergencia?",
    correcta: "Un sistema de seguridad para detener inmediatamente el proceso",
    incorrectas: [
      "Un modo normal de funcionamiento",
      "Una señal de inicio de ciclo"
    ]
  },
  {
    enunciado: "¿Qué se debe verificar en sensores de final de carrera?",
    correcta: "Correcta posición, accionamiento y señal eléctrica",
    incorrectas: [
      "El color del cable",
      "La longitud del cilindro"
    ]
  },
  {
    enunciado: "¿Qué causa típica provoca fallos eléctricos intermitentes?",
    correcta: "Conexiones flojas o contactos defectuosos",
    incorrectas: [
      "Exceso de documentación técnica",
      "Uso de esquemas normalizados"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la seguridad en diagnóstico y mantenimiento?",
    correcta: "Es prioritaria para evitar riesgos a personas y equipos",
    incorrectas: [
      "Es secundaria frente a la rapidez",
      "Solo afecta al diseño inicial"
    ]
  },
  {
    enunciado: "¿Qué se entiende por procedimiento de diagnóstico?",
    correcta: "Una secuencia ordenada de comprobaciones",
    incorrectas: [
      "Una actuación improvisada",
      "Un cambio completo del sistema"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene seguir un método sistemático de diagnóstico?",
    correcta: "Reduce errores y tiempos de intervención",
    incorrectas: [
      "Aumenta la complejidad del sistema",
M
      "Obliga a sustituir más componentes"
    ]
  },
  {
    enunciado: "¿Qué debe hacerse si una avería supera la competencia del técnico?",
    correcta: "Detener el sistema y escalar la incidencia",
    incorrectas: [
      "Forzar el funcionamiento",
      "Ignorar el fallo"
    ]
  },
  {
    enunciado: "¿Qué aporta una buena documentación técnica al mantenimiento?",
    correcta: "Facilita diagnóstico, reparación y seguridad",
    incorrectas: [
      "Aumenta el consumo energético",
      "Complica el uso del sistema"
    ]
  },
  {
    enunciado: "¿Qué debe garantizar un sistema automático bien mantenido?",
    correcta: "Funcionamiento fiable, seguro y conforme a especificaciones",
    incorrectas: [
      "Máxima complejidad del control",
      "Intervenciones constantes"
    ]
  }
];
