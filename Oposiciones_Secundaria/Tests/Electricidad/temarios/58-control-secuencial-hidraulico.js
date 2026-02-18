// 58-control-secuencial-hidraulico.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por control secuencial hidráulico?",
    correcta: "El gobierno ordenado de movimientos hidráulicos siguiendo una secuencia lógica predefinida",
    incorrectas: [
      "La regulación continua de caudal sin orden temporal",
      "El control manual directo de actuadores sin automatismo"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal de un sistema de control secuencial hidráulico?",
    correcta: "Ejecutar movimientos en un orden determinado con seguridad y repetibilidad",
    incorrectas: [
      "Aumentar la presión máxima del circuito",
      "Eliminar la necesidad de válvulas de control"
    ]
  },
  {
    enunciado: "¿Qué elemento realiza el trabajo mecánico en un sistema hidráulico?",
    correcta: "El actuador hidráulico, como cilindros o motores",
    incorrectas: [
      "El depósito de aceite",
      "El manómetro"
    ]
  },
  {
    enunciado: "¿Qué tipo de actuador es más habitual en control secuencial hidráulico?",
    correcta: "El cilindro hidráulico de simple o doble efecto",
    incorrectas: [
      "El motor eléctrico trifásico",
      "El transformador de potencia"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un cilindro hidráulico de doble efecto?",
    correcta: "Puede realizar trabajo en ambos sentidos del movimiento",
    incorrectas: [
      "Solo se desplaza por gravedad",
      "No necesita válvulas de control"
    ]
  },
  {
    enunciado: "¿Qué función cumple la bomba hidráulica?",
    correcta: "Transformar energía mecánica en energía hidráulica generando caudal",
    incorrectas: [
      "Aumentar directamente la fuerza del actuador",
      "Regular la secuencia de movimientos"
    ]
  },
  {
    enunciado: "¿Qué misión tiene el depósito hidráulico?",
    correcta: "Almacenar el fluido y facilitar su refrigeración y decantación",
    incorrectas: [
      "Multiplicar la presión del sistema",
      "Controlar la dirección del movimiento"
    ]
  },
  {
    enunciado: "¿Qué tipo de válvula dirige el sentido del movimiento de un actuador?",
    correcta: "La válvula distribuidora",
    incorrectas: [
      "La válvula limitadora de presión",
      "La válvula antirretorno"
    ]
  },
  {
    enunciado: "¿Qué significa una válvula distribuidora 4/2?",
    correcta: "Cuatro vías y dos posiciones de conmutación",
    incorrectas: [
      "Cuatro cilindros y dos bombas",
      "Dos presiones y cuatro caudales"
    ]
  },
  {
    enunciado: "¿Qué función cumple una válvula limitadora de presión?",
    correcta: "Proteger el sistema evitando sobrepresiones",
    incorrectas: [
      "Cambiar el sentido de giro de la bomba",
      "Sincronizar cilindros"
    ]
  },
  {
    enunciado: "¿Qué elemento permite detectar la posición de un cilindro?",
    correcta: "El final de carrera o detector de posición",
    incorrectas: [
      "El filtro hidráulico",
      "El acumulador"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza una válvula antirretorno?",
    correcta: "Permitir el paso del fluido en un solo sentido",
    incorrectas: [
      "Regular la presión máxima",
      "Modificar la velocidad del cilindro"
    ]
  },
  {
    enunciado: "¿Qué función tiene una válvula reguladora de caudal?",
    correcta: "Controlar la velocidad de los actuadores",
    incorrectas: [
      "Aumentar la fuerza del sistema",
      "Invertir el movimiento del cilindro"
    ]
  },
  {
    enunciado: "¿Qué significa secuencia A+ B+ B− A−?",
    correcta: "Avanza A, avanza B, retrocede B y retrocede A",
    incorrectas: [
      "Dos cilindros avanzan simultáneamente",
      "Un solo cilindro realiza cuatro movimientos"
    ]
  },
  {
    enunciado: "¿Qué es un diagrama espacio-fase en hidráulica?",
    correcta: "Una representación gráfica del movimiento de los actuadores a lo largo del tiempo",
    incorrectas: [
      "Un plano de instalación hidráulica",
      "Un esquema eléctrico de mando"
    ]
  },
  {
    enunciado: "¿Qué es un grupo hidráulico?",
    correcta: "El conjunto formado por motor, bomba, depósito y elementos de protección",
    incorrectas: [
      "Un sistema exclusivo de control neumático",
      "Una válvula de gran caudal"
    ]
  },
  {
    enunciado: "¿Qué función cumple el filtro hidráulico?",
    correcta: "Eliminar impurezas del fluido para proteger los componentes",
    incorrectas: [
      "Regular la presión de trabajo",
      "Controlar la secuencia"
    ]
  },
  {
    enunciado: "¿Qué es un acumulador hidráulico?",
    correcta: "Un elemento que almacena energía hidráulica bajo presión",
    incorrectas: [
      "Un depósito atmosférico de aceite",
      "Un actuador rotativo"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta el uso de finales de carrera en secuencias?",
    correcta: "Asegurar que un movimiento ha finalizado antes de iniciar el siguiente",
    incorrectas: [
      "Aumentar la presión del sistema",
      "Reducir el número de válvulas"
    ]
  },
  {
    enunciado: "¿Qué tipo de mando es habitual en control secuencial hidráulico básico?",
    correcta: "Mando hidráulico directo o pilotado",
    incorrectas: [
      "Mando exclusivamente informático",
      "Mando por variador de frecuencia"
    ]
  },
  {
    enunciado: "¿Qué significa pilotaje hidráulico?",
    correcta: "Accionar una válvula mediante presión hidráulica auxiliar",
    incorrectas: [
      "Controlar el sistema con señales eléctricas",
      "Regular el caudal manualmente"
    ]
  },
  {
    enunciado: "¿Qué es una válvula 5/2 en hidráulica?",
    correcta: "Una válvula con cinco vías y dos posiciones",
    incorrectas: [
      "Una válvula con cinco cilindros conectados",
      "Un tipo de bomba hidráulica"
    ]
  },
  {
    enunciado: "¿Qué criterio de seguridad es fundamental en circuitos secuenciales?",
    correcta: "Evitar movimientos simultáneos no deseados",
    incorrectas: [
      "Maximizar siempre la velocidad",
      "Reducir al mínimo el número de sensores"
    ]
  },
  {
    enunciado: "¿Qué ocurre si falla una válvula distribuidora en un sistema secuencial?",
    correcta: "Se altera o bloquea la secuencia de movimientos",
    incorrectas: [
      "Aumenta automáticamente la presión",
      "El sistema sigue funcionando sin cambios"
    ]
  },
  {
    enunciado: "¿Qué representa un esquema hidráulico secuencial?",
    correcta: "La conexión funcional de componentes y el orden de actuación",
    incorrectas: [
      "La disposición física exacta de los tubos",
      "Un plano arquitectónico"
    ]
  },
  {
    enunciado: "¿Qué función tiene el manómetro?",
    correcta: "Indicar la presión del circuito",
    incorrectas: [
      "Regular la velocidad",
      "Cambiar la dirección del flujo"
    ]
  },
  {
    enunciado: "¿Qué es una válvula de simultaneidad?",
    correcta: "Una válvula que requiere dos señales para permitir el paso del fluido",
    incorrectas: [
      "Una válvula de alta presión",
      "Una válvula de caudal variable"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene el control secuencial frente al control manual?",
    correcta: "Mayor repetibilidad y reducción de errores humanos",
    incorrectas: [
      "Menor complejidad técnica siempre",
      "Mayor consumo energético"
    ]
  },
  {
    enunciado: "¿Qué se entiende por ciclo de trabajo hidráulico?",
    correcta: "El conjunto completo de movimientos que se repite en una secuencia",
    incorrectas: [
      "El tiempo de arranque de la bomba",
      "La presión máxima del sistema"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la lógica secuencial en hidráulica?",
    correcta: "Determinar el orden y condiciones de los movimientos",
    incorrectas: [
      "Aumentar la potencia del sistema",
      "Sustituir la bomba hidráulica"
    ]
  },
  {
    enunciado: "¿Qué ocurre si no se limita la presión en un circuito hidráulico?",
    correcta: "Existe riesgo de avería y accidentes por sobrepresión",
    incorrectas: [
      "El sistema funciona con mayor precisión",
      "Se reduce el caudal automáticamente"
    ]
  },
  {
    enunciado: "¿Qué se entiende por mantenimiento preventivo en sistemas hidráulicos?",
    correcta: "Revisiones periódicas para evitar fallos y desgaste",
    incorrectas: [
      "Reparación solo tras avería",
      "Sustitución completa del sistema"
    ]
  },
  {
    enunciado: "¿Qué factor influye directamente en la velocidad de un cilindro hidráulico?",
    correcta: "El caudal suministrado",
    incorrectas: [
      "El volumen del depósito",
      "El tipo de manómetro"
    ]
  },
  {
    enunciado: "¿Qué función cumple el aceite hidráulico además de transmitir energía?",
    correcta: "Lubricar, refrigerar y proteger contra la corrosión",
    incorrectas: [
      "Aumentar la rigidez mecánica",
      "Reducir la presión del sistema"
    ]
  },
  {
    enunciado: "¿Qué es un fallo típico en secuencias hidráulicas?",
    correcta: "Desajuste de finales de carrera o válvulas",
    incorrectas: [
      "Exceso de simbología en el esquema",
      "Uso de demasiados colores en el plano"
    ]
  },
  {
    enunciado: "¿Qué debe comprobarse antes de poner en marcha un sistema secuencial hidráulico?",
    correcta: "Correcta conexión, presión ajustada y ausencia de fugas",
    incorrectas: [
      "Solo el diseño estético del esquema",
      "Únicamente el color del aceite"
    ]
  },
  {
    enunciado: "¿Qué aporta la documentación técnica en sistemas hidráulicos?",
    correcta: "Facilita montaje, uso seguro, mantenimiento y diagnóstico",
    incorrectas: [
      "Sustituye la formación del operario",
      "Elimina la necesidad de esquemas"
    ]
  },
  {
    enunciado: "¿Qué debe garantizar un sistema de control secuencial hidráulico bien diseñado?",
    correcta: "Funcionamiento seguro, ordenado y conforme a especificaciones técnicas",
    incorrectas: [
      "Complejidad máxima del circuito",
      "Consumo energético elevado"
    ]
  }
];
