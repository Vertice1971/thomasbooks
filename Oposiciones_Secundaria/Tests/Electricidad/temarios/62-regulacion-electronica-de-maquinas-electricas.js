// 62-regulacion-electronica-de-maquinas-electricas.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por regulación electrónica de máquinas eléctricas?",
    correcta: "El control de velocidad, par y otros parámetros mediante electrónica de potencia y control",
    incorrectas: [
      "La sustitución del motor por un transformador de potencia",
      "La corrección ortográfica automática de esquemas eléctricos"
    ]
  },
  {
    enunciado: "¿Cuál es un objetivo típico de la regulación electrónica en accionamientos eléctricos?",
    correcta: "Adaptar el funcionamiento del motor a la carga con eficiencia y precisión",
    incorrectas: [
      "Aumentar siempre la tensión nominal por encima de placa",
      "Eliminar la necesidad de protecciones eléctricas"
    ]
  },
  {
    enunciado: "¿Qué disciplina integra la regulación electrónica de motores con convertidores?",
    correcta: "La electrónica de potencia aplicada a accionamientos eléctricos",
    incorrectas: [
      "La ofimática documental",
      "La metrología dimensional de piezas mecánicas"
    ]
  },
  {
    enunciado: "¿Qué es un convertidor electrónico de potencia en un accionamiento?",
    correcta: "Un equipo que transforma energía eléctrica para alimentar el motor con las condiciones requeridas",
    incorrectas: [
      "Un sensor que mide temperatura del bobinado",
      "Un dispositivo mecánico que reduce vibraciones"
    ]
  },
  {
    enunciado: "¿Qué función cumple un rectificador en regulación electrónica?",
    correcta: "Convertir corriente alterna en corriente continua",
    incorrectas: [
      "Convertir corriente continua en alterna trifásica",
      "Aumentar el factor de potencia de forma mecánica"
    ]
  },
  {
    enunciado: "¿Qué es un inversor en un variador de frecuencia?",
    correcta: "La etapa que convierte corriente continua en alterna de frecuencia y tensión variables",
    incorrectas: [
      "La etapa que mide la corriente del motor con un amperímetro",
      "El elemento que almacena energía hidráulica a presión"
    ]
  },
  {
    enunciado: "¿Qué es un variador de frecuencia (VFD)?",
    correcta: "Un convertidor que regula la velocidad de un motor de CA modificando frecuencia y tensión",
    incorrectas: [
      "Un dispositivo que regula la velocidad de un motor DC variando solo la presión",
      "Una protección que actúa únicamente ante cortocircuito a tierra"
    ]
  },
  {
    enunciado: "¿Cuál es la relación básica entre frecuencia y velocidad en un motor asíncrono?",
    correcta: "La velocidad síncrona es proporcional a la frecuencia e inversamente proporcional al número de polos",
    incorrectas: [
      "La velocidad depende solo de la resistencia del estator",
      "La velocidad es independiente de la frecuencia de alimentación"
    ]
  },
  {
    enunciado: "¿Qué es el deslizamiento en un motor asíncrono?",
    correcta: "La diferencia relativa entre velocidad síncrona y velocidad del rotor bajo carga",
    incorrectas: [
      "La pérdida de aislamiento del bobinado del estator",
      "La variación de tensión en el bus de continua por rizado"
    ]
  },
  {
    enunciado: "¿Qué característica hace especialmente regulable a un motor de corriente continua clásico?",
    correcta: "La posibilidad de controlar fácilmente velocidad y par mediante tensión de armadura y excitación",
    incorrectas: [
      "La imposibilidad de invertir el sentido de giro",
      "La necesidad de alimentación siempre trifásica"
    ]
  },
  {
    enunciado: "¿Qué elemento electrónico se usa típicamente para conmutación rápida en potencia?",
    correcta: "IGBT o MOSFET según rango de tensión y frecuencia de conmutación",
    incorrectas: [
      "Relé térmico como elemento de conmutación principal",
      "Fusible como elemento de modulación"
    ]
  },
  {
    enunciado: "¿Qué función cumple un diodo de rueda libre en control de cargas inductivas?",
    correcta: "Proporcionar un camino a la corriente cuando se interrumpe el interruptor, limitando sobretensiones",
    incorrectas: [
      "Aumentar la tensión del bus para mejorar el par",
      "Reducir la corriente nominal del motor por diseño"
    ]
  },
  {
    enunciado: "¿Qué es PWM en variadores e inversores?",
    correcta: "Una técnica de modulación que controla la tensión efectiva mediante el ciclo de trabajo de conmutación",
    incorrectas: [
      "Un método mecánico de regulación de velocidad mediante poleas",
      "Un tipo de cableado para redes de datos industriales"
    ]
  },
  {
    enunciado: "¿Qué parámetro define el ciclo de trabajo (duty cycle) en PWM?",
    correcta: "La fracción de tiempo que el interruptor permanece en conducción dentro de un periodo",
    incorrectas: [
      "La resistencia del devanado del rotor",
      "La longitud del cable de alimentación"
    ]
  },
  {
    enunciado: "¿Qué es el bus de continua (DC-link) en un variador?",
    correcta: "La etapa de enlace en corriente continua entre rectificador e inversor, con filtrado y almacenamiento",
    incorrectas: [
      "La salida trifásica directamente al motor",
      "El conjunto de bornas de mando digital del equipo"
    ]
  },
  {
    enunciado: "¿Qué elemento es típico en el bus de continua para suavizar el rizado?",
    correcta: "Condensadores de enlace de continua y, en algunos diseños, inductancias de alisado",
    incorrectas: [
      "Interruptores centrífugos",
      "Finales de carrera mecánicos"
    ]
  },
  {
    enunciado: "¿Qué es el control escalar V/f en un motor asíncrono con variador?",
    correcta: "Mantener una relación aproximadamente constante entre tensión y frecuencia para conservar el flujo",
    incorrectas: [
      "Mantener constante la corriente de rotor independientemente de la frecuencia",
      "Regular solo la tensión, dejando frecuencia fija"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta el control vectorial frente al V/f?",
    correcta: "Mejor control dinámico del par y de la velocidad, especialmente a bajas revoluciones",
    incorrectas: [
      "Elimina la necesidad de medir o estimar variables eléctricas",
      "Solo sirve para motores de corriente continua con escobillas"
    ]
  },
  {
    enunciado: "¿Qué es un encoder en regulación de motores?",
    correcta: "Un sensor que proporciona información de posición o velocidad del eje",
    incorrectas: [
      "Un filtro que elimina armónicos de la red",
      "Un elemento que limita la presión de un circuito hidráulico"
    ]
  },
  {
    enunciado: "¿Qué significa control en lazo cerrado en un accionamiento?",
    correcta: "Que la salida se mide y se compara con una consigna para corregir el error",
    incorrectas: [
      "Que no se usa ninguna realimentación por diseño",
      "Que el motor siempre trabaja a velocidad fija"
    ]
  },
  {
    enunciado: "¿Qué es una consigna (setpoint) en regulación?",
    correcta: "El valor objetivo de una variable controlada, como velocidad o par",
    incorrectas: [
      "La tensión máxima soportable por el aislamiento",
      "El valor de corriente de cortocircuito de la instalación"
    ]
  },
  {
    enunciado: "¿Qué función cumple un controlador PI en un variador?",
    correcta: "Reducir el error estacionario y mejorar la respuesta ajustando acción proporcional e integral",
    incorrectas: [
      "Aumentar la frecuencia de conmutación para eliminar ruido",
      "Sustituir la etapa de potencia del variador"
    ]
  },
  {
    enunciado: "¿Qué riesgo existe si se ajustan rampas de aceleración demasiado bruscas?",
    correcta: "Sobrecorrientes, disparos por protección y esfuerzos mecánicos en la carga",
    incorrectas: [
      "Mejora automática del factor de potencia sin efectos secundarios",
      "Eliminación de armónicos por aumento de pendiente"
    ]
  },
  {
    enunciado: "¿Qué función cumple la rampa de desaceleración en un variador?",
    correcta: "Controlar la reducción de velocidad para evitar sobrecorrientes y problemas mecánicos",
    incorrectas: [
      "Aumentar la tensión del motor al frenar para protegerlo",
      "Desactivar todas las protecciones térmicas"
    ]
  },
  {
    enunciado: "¿Qué ocurre en frenado regenerativo?",
    correcta: "La energía mecánica se convierte en eléctrica y puede devolverse a la red o al bus según sistema",
    incorrectas: [
      "La energía se destruye sin calentamiento en ningún componente",
      "El motor deja de comportarse como generador en todo caso"
    ]
  },
  {
    enunciado: "¿Qué es un chopper de frenado con resistencia?",
    correcta: "Un circuito que disipa energía del bus de continua en una resistencia durante frenadas",
    incorrectas: [
      "Un sensor de temperatura para el bobinado",
      "Un tipo de fusible ultrarrápido para entradas digitales"
    ]
  },
  {
    enunciado: "¿Por qué se usan filtros EMI/EMC en variadores?",
    correcta: "Para reducir interferencias electromagnéticas conducidas y radiadas hacia la red y equipos cercanos",
    incorrectas: [
      "Para aumentar el par nominal del motor",
      "Para reducir el número de polos del estator"
    ]
  },
  {
    enunciado: "¿Qué efecto puede producir el PWM del variador sobre el motor si no se gestiona bien el cableado?",
    correcta: "Sobretensiones en bornes, calentamiento adicional y esfuerzos en aislamiento",
    incorrectas: [
      "Reducción automática del deslizamiento a cero",
      "Aumento garantizado del rendimiento sin límites"
    ]
  },
  {
    enunciado: "¿Qué es la protección térmica del motor en un sistema regulado?",
    correcta: "Un conjunto de funciones que evitan sobrecalentamiento por sobrecarga, falta de ventilación o armónicos",
    incorrectas: [
      "Un modo para aumentar corriente y calentar el motor a propósito",
      "Una función que solo actúa ante sobretensión de red"
    ]
  },
  {
    enunciado: "¿Qué mide un transformador de corriente (TC) en un accionamiento?",
    correcta: "La corriente para control y protección, sin conexión directa de alta corriente al circuito de mando",
    incorrectas: [
      "La frecuencia de conmutación del inversor",
      "La presión del circuito neumático"
    ]
  },
  {
    enunciado: "¿Qué es el par en una máquina eléctrica?",
    correcta: "La magnitud mecánica de giro relacionada con la fuerza aplicada a un brazo de palanca",
    incorrectas: [
      "La velocidad angular medida en revoluciones por segundo",
      "La energía eléctrica almacenada en un condensador"
    ]
  },
  {
    enunciado: "¿Qué relación general existe entre potencia, par y velocidad en rotación?",
    correcta: "La potencia mecánica es proporcional al par y a la velocidad angular",
    incorrectas: [
      "La potencia mecánica depende solo del par, no de la velocidad",
      "La potencia mecánica depende solo de la velocidad, no del par"
    ]
  },
  {
    enunciado: "¿Qué es la corriente de arranque y por qué importa en regulación?",
    correcta: "Es la corriente inicial elevada al arrancar; el variador puede limitarla con rampas y control",
    incorrectas: [
      "Es una corriente despreciable en motores asíncronos",
      "Es una corriente exclusiva de motores síncronos sin carga"
    ]
  },
  {
    enunciado: "¿Qué ventaja principal ofrece un variador frente a arranque directo?",
    correcta: "Arranque suave y controlado, con menor pico de corriente y mejor adaptación a la carga",
    incorrectas: [
      "Mayor ruido y vibración por conmutación forzada",
      "Imposibilidad de invertir el giro del motor"
    ]
  },
  {
    enunciado: "¿Qué es un servomotor en regulación electrónica?",
    correcta: "Un motor con control y realimentación que permite posicionamiento y dinámica precisos",
    incorrectas: [
      "Un motor que solo funciona a frecuencia fija",
      "Un motor que no admite ningún tipo de sensor"
    ]
  },
  {
    enunciado: "¿Qué tipo de máquina es habitual en servos industriales modernos?",
    correcta: "Motores síncronos de imanes permanentes con control vectorial",
    incorrectas: [
      "Motores monofásicos de sombreado sin control",
      "Motores de reluctancia con arranque por condensador como estándar general"
    ]
  },
  {
    enunciado: "¿Qué es un accionamiento eléctrico (drive)?",
    correcta: "El conjunto formado por convertidor, control y motor para mover una carga según consigna",
    incorrectas: [
      "Un interruptor magnetotérmico sin motor asociado",
      "Un plano unifilar de la instalación"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la parametrización en un variador de frecuencia?",
    correcta: "Configurar el variador para motor y aplicación: datos de placa, rampas, límites y protecciones",
    incorrectas: [
      "Reemplazar el cableado de potencia por cable de red",
      "Eliminar el esquema de conexiones porque el equipo lo deduce"
    ]
  },
  {
    enunciado: "¿Qué significa ajustar límites de corriente en regulación?",
    correcta: "Definir umbrales para proteger motor y convertidor frente a sobrecargas o bloqueos",
    incorrectas: [
      "Aumentar siempre el límite para evitar disparos",
      "Desactivar la detección de sobreintensidad para continuidad"
    ]
  },
  {
    enunciado: "¿Qué se entiende por eficiencia energética en accionamientos regulados?",
    correcta: "Reducir pérdidas ajustando el motor a la demanda real y optimizando control y funcionamiento",
    incorrectas: [
      "Elevar la tensión por encima de la nominal para ahorrar energía",
      "Mantener siempre la velocidad máxima para estabilizar el sistema"
    ]
  },
  {
    enunciado: "¿Qué criterio docente-técnico es fundamental al enseñar regulación electrónica de motores?",
    correcta: "Conectar teoría de máquinas, electrónica de potencia, control y seguridad con casos de aplicación reales",
    incorrectas: [
      "Memorizar marcas comerciales sin comprender funciones",
      "Evitar esquemas y centrarse solo en descripciones verbales"
    ]
  }
];
