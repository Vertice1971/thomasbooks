// 64-averias-en-regulacion-de-motores-de-corriente-continua.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por avería en la regulación de un motor de corriente continua?",
    correcta: "Cualquier fallo que impide controlar correctamente velocidad, par o sentido de giro",
    incorrectas: [
      "La sustitución planificada de componentes",
      "El funcionamiento normal a carga parcial"
    ]
  },
  {
    enunciado: "¿Qué característica hace especialmente regulable a un motor de corriente continua?",
    correcta: "La relación directa entre tensión de armadura, corriente y velocidad",
    incorrectas: [
      "La imposibilidad de variar el par",
      "La alimentación obligatoria en corriente alterna"
    ]
  },
  {
    enunciado: "¿Cuál es una avería típica en el circuito de armadura?",
    correcta: "Interrupción o mala conexión en el circuito de potencia",
    incorrectas: [
      "Exceso de simbología en el esquema",
      "Error tipográfico en la documentación"
    ]
  },
  {
    enunciado: "¿Qué fallo produce una pérdida total de giro del motor CC?",
    correcta: "Ausencia de alimentación en la armadura o en el campo",
    incorrectas: [
      "Ajuste incorrecto de la rampa de aceleración",
      "Ligera caída de tensión en red"
    ]
  },
  {
    enunciado: "¿Qué síntoma indica desgaste de escobillas?",
    correcta: "Chisporroteo excesivo y funcionamiento irregular",
    incorrectas: [
      "Silencio total del motor",
      "Aumento del aislamiento eléctrico"
    ]
  },
  {
    enunciado: "¿Qué avería está asociada a un colector en mal estado?",
    correcta: "Mala conmutación y calentamiento anómalo",
    incorrectas: [
      "Incremento del rendimiento",
      "Reducción del par máximo"
    ]
  },
  {
    enunciado: "¿Qué ocurre si se interrumpe el circuito de excitación?",
    correcta: "El motor puede embalarse peligrosamente",
    incorrectas: [
      "El motor reduce suavemente su velocidad",
      "El motor funciona solo con menor par"
    ]
  },
  {
    enunciado: "¿Qué tipo de avería provoca velocidad inestable?",
    correcta: "Fallo en la realimentación o en el regulador electrónico",
    incorrectas: [
      "Exceso de lubricación mecánica",
      "Uso de aceite hidráulico incorrecto"
    ]
  },
  {
    enunciado: "¿Qué elemento electrónico regula normalmente la tensión de armadura?",
    correcta: "Un convertidor electrónico controlado por tiristores o transistores",
    incorrectas: [
      "Un interruptor manual de potencia",
      "Un transformador de aislamiento"
    ]
  },
  {
    enunciado: "¿Qué avería típica afecta a los tiristores de un regulador CC?",
    correcta: "Cortocircuito o bloqueo en conducción",
    incorrectas: [
      "Aumento de la resistencia del eje",
      "Desgaste del rodamiento"
    ]
  },
  {
    enunciado: "¿Qué síntoma indica un fallo de rectificación?",
    correcta: "Par reducido y rizado excesivo en la corriente",
    incorrectas: [
      "Velocidad perfectamente estable",
      "Mejor rendimiento energético"
    ]
  },
  {
    enunciado: "¿Qué instrumento es básico para diagnosticar averías eléctricas?",
    correcta: "El multímetro",
    incorrectas: [
      "El tacómetro hidráulico",
      "El manómetro neumático"
    ]
  },
  {
    enunciado: "¿Qué se debe comprobar primero ante una avería en regulación CC?",
    correcta: "La alimentación y las protecciones",
    incorrectas: [
      "La sustitución del motor",
      "La modificación del esquema original"
    ]
  },
  {
    enunciado: "¿Qué provoca una sobrecorriente en el motor CC?",
    correcta: "Sobrecarga mecánica o fallo en el regulador",
    incorrectas: [
      "Disminución de la carga",
      "Mejor ventilación"
    ]
  },
  {
    enunciado: "¿Qué función cumple la protección térmica?",
    correcta: "Evitar daños por sobrecalentamiento",
    incorrectas: [
      "Aumentar la velocidad máxima",
      "Regular el sentido de giro"
    ]
  },
  {
    enunciado: "¿Qué avería produce calentamiento excesivo del motor?",
    correcta: "Sobrecorriente prolongada o mala ventilación",
    incorrectas: [
      "Tensión de excitación correcta",
      "Ajuste fino del regulador"
    ]
  },
  {
    enunciado: "¿Qué fallo puede causar vibraciones eléctricas?",
    correcta: "Conmutación defectuosa en escobillas y colector",
    incorrectas: [
      "Exceso de grasa en rodamientos",
      "Plano de montaje mal alineado"
    ]
  },
  {
    enunciado: "¿Qué es un fallo de realimentación de velocidad?",
    correcta: "Ausencia o error en la señal del tacogenerador o encoder",
    incorrectas: [
      "Exceso de presión hidráulica",
      "Caída puntual de tensión en red"
    ]
  },
  {
    enunciado: "¿Qué consecuencia tiene un fallo del tacogenerador?",
    correcta: "Regulación inestable o pérdida de control de velocidad",
    incorrectas: [
      "Mayor precisión automática",
      "Aumento del par nominal"
    ]
  },
  {
    enunciado: "¿Qué indica un disparo frecuente de protecciones?",
    correcta: "Existencia de una avería persistente",
    incorrectas: [
      "Funcionamiento normal",
      "Buena adaptación a la carga"
    ]
  },
  {
    enunciado: "¿Qué se entiende por avería intermitente en regulación CC?",
    correcta: "Un fallo que aparece y desaparece sin patrón fijo",
    incorrectas: [
      "Un fallo permanente",
      "Un error de diseño teórico"
    ]
  },
  {
    enunciado: "¿Qué causa típica produce fallos intermitentes?",
    correcta: "Conexiones flojas o contactos defectuosos",
    incorrectas: [
      "Uso de simbología normalizada",
      "Exceso de documentación"
    ]
  },
  {
    enunciado: "¿Qué papel tiene el mantenimiento preventivo?",
    correcta: "Reducir la probabilidad de averías y alargar la vida útil",
    incorrectas: [
      "Eliminar totalmente los fallos",
      "Modificar el diseño del motor"
    ]
  },
  {
    enunciado: "¿Qué tarea es típica del mantenimiento en motores CC?",
    correcta: "Revisión de escobillas y limpieza del colector",
    incorrectas: [
      "Reprogramación de PLC",
      "Cambio del número de polos"
    ]
  },
  {
    enunciado: "¿Qué riesgo implica un motor CC mal regulado?",
    correcta: "Daños mecánicos, eléctricos y riesgos de seguridad",
    incorrectas: [
      "Mayor eficiencia energética",
      "Funcionamiento más silencioso"
    ]
  },
  {
    enunciado: "¿Qué se debe hacer tras reparar una avería?",
    correcta: "Probar el funcionamiento completo en distintas condiciones",
    incorrectas: [
      "Ponerlo en servicio sin pruebas",
      "Eliminar la documentación previa"
    ]
  },
  {
    enunciado: "¿Qué tipo de fallo afecta al sentido de giro?",
    correcta: "Error en el circuito de inversión de polaridad",
    incorrectas: [
      "Ajuste incorrecto de la ventilación",
      "Exceso de carga axial"
    ]
  },
  {
    enunciado: "¿Qué indica un ruido eléctrico anormal?",
    correcta: "Problemas de conmutación o regulación",
    incorrectas: [
      "Lubricación excesiva",
      "Correcto funcionamiento"
    ]
  },
  {
    enunciado: "¿Qué debe comprobarse en el circuito de excitación?",
    correcta: "Continuidad, tensión correcta y estabilidad",
    incorrectas: [
      "El diámetro del eje",
      "La presión del aceite"
    ]
  },
  {
    enunciado: "¿Qué función cumple la documentación técnica en diagnóstico?",
    correcta: "Facilitar localización de fallos y reparación segura",
    incorrectas: [
      "Aumentar la complejidad del sistema",
      "Sustituir la formación del técnico"
    ]
  },
  {
    enunciado: "¿Qué es un fallo lógico en regulación CC?",
    correcta: "Un error en el control electrónico que gobierna el motor",
    incorrectas: [
      "Una rotura mecánica",
      "Un desgaste normal"
    ]
  },
  {
    enunciado: "¿Qué debe hacerse ante una avería grave?",
    correcta: "Parar el sistema y aplicar procedimientos de seguridad",
    incorrectas: [
      "Forzar el funcionamiento",
      "Ignorar el problema"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la seguridad en el diagnóstico?",
    correcta: "Es prioritaria para proteger personas y equipos",
    incorrectas: [
      "Es secundaria frente a la rapidez",
      "Solo afecta al diseño inicial"
    ]
  },
  {
    enunciado: "¿Qué elemento mecánico también puede causar sobrecarga?",
    correcta: "El sistema accionado o la transmisión",
    incorrectas: [
      "El regulador electrónico",
      "El sensor de velocidad"
    ]
  },
  {
    enunciado: "¿Qué síntoma puede indicar cortocircuito parcial en el bobinado?",
    correcta: "Aumento de corriente y calentamiento rápido",
    incorrectas: [
      "Disminución del consumo",
      "Mayor estabilidad"
    ]
  },
  {
    enunciado: "¿Qué criterio docente es clave al estudiar averías en motores CC?",
    correcta: "Relacionar síntomas, causas y procedimientos de diagnóstico",
    incorrectas: [
      "Memorizar fallos sin contexto",
      "Evitar el uso de esquemas"
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
