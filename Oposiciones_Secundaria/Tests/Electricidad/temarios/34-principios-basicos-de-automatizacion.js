// 34-principios-basicos-de-automatizacion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es la automatización industrial?",
    correcta: "El uso de sistemas de control (como ordenadores, robots, PLCs) para manejar procesos y maquinarias, reduciendo la necesidad de intervención humana directa",
    incorrectas: [
      "Hacer que las máquinas funcionen más despacio",
      "Contratar más operarios manuales"
    ]
  },
  {
    enunciado: "¿Qué es un sistema de lazo abierto (Open Loop)?",
    correcta: "Un sistema de control donde la salida no tiene efecto sobre la acción de control (no hay realimentación ni corrección de errores)",
    incorrectas: [
      "Un sistema con las puertas abiertas",
      "Un sistema que mide el error y corrige"
    ]
  },
  {
    enunciado: "¿Qué es un sistema de lazo cerrado (Closed Loop) o realimentado?",
    correcta: "Un sistema que mide la salida (variable de proceso), la compara con la consigna (setpoint) y ajusta la acción de control para corregir el error",
    incorrectas: [
      "Un sistema que funciona con los ojos cerrados",
      "Un temporizador simple de lavadora antigua"
    ]
  },
  {
    enunciado: "¿Qué es un sensor o captador?",
    correcta: "Un dispositivo que convierte una magnitud física (temperatura, presión, posición) en una señal eléctrica procesable por el control",
    incorrectas: [
      "Un motor que mueve cosas",
      "Una pantalla para ver datos"
    ]
  },
  {
    enunciado: "¿Qué es un actuador?",
    correcta: "Un dispositivo que convierte la señal eléctrica de control en una acción física (movimiento, calor, flujo) para modificar el proceso (ej. motor, válvula, resistencia)",
    incorrectas: [
      "Un sensor de temperatura",
      "Un cable de red"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre lógica cableada y lógica programada?",
    correcta: "La cableada se basa en unir físicamente relés y contactores (rígida, difícil de cambiar); la programada usa un dispositivo (PLC) donde el funcionamiento se define por software (flexible)",
    incorrectas: [
      "La cableada usa Wi-Fi y la programada cables",
      "No hay diferencia"
    ]
  },
  {
    enunciado: "¿Qué es un PLC (Autómata Programable)?",
    correcta: "Programmable Logic Controller: Un ordenador industrial robusto diseñado para controlar procesos en tiempo real mediante entradas y salidas",
    incorrectas: [
      "Power Line Communication (solo internet por enchufe)",
      "Personal Life Coach"
    ]
  },
  {
    enunciado: "¿Qué es un contacto Normalmente Abierto (NO/NA)?",
    correcta: "Un contacto que en estado de reposo (sin activar) no deja pasar corriente, y cierra el circuito al activarse",
    incorrectas: [
      "Un contacto que siempre deja pasar corriente",
      "Un contacto roto"
    ]
  },
  {
    enunciado: "¿Qué es un detector inductivo?",
    correcta: "Un sensor de proximidad que detecta solo objetos metálicos mediante campos electromagnéticos, sin contacto físico",
    incorrectas: [
      "Un sensor que detecta plástico",
      "Un sensor de temperatura"
    ]
  },
  {
    enunciado: "¿Qué es un detector capacitivo?",
    correcta: "Un sensor que puede detectar cualquier material (metal, plástico, líquidos) basándose en el cambio de capacitancia",
    incorrectas: [
      "Un sensor que mide la capacidad de la batería",
      "Solo detecta hierro"
    ]
  },
  {
    enunciado: "¿Qué es un detector fotoeléctrico (fotocélula)?",
    correcta: "Un sensor que utiliza un haz de luz (infrarroja o visible) para detectar la presencia o ausencia de objetos al interrumpirse o reflejarse el haz",
    incorrectas: [
      "Un panel solar para generar electricidad",
      "Una cámara de fotos"
    ]
  },
  {
    enunciado: "¿Qué es un final de carrera (microswitch)?",
    correcta: "Un sensor electromecánico que se activa por contacto físico directo cuando una pieza móvil golpea su palanca o émbolo",
    incorrectas: [
      "La meta de una carrera de coches",
      "Un sensor láser a distancia"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene la señal de corriente 4-20 mA frente a 0-10 V?",
    correcta: "Es más inmune al ruido eléctrico y permite detectar la rotura de cable (0 mA = cable roto, 4 mA = valor mínimo)",
    incorrectas: [
      "Es más barata siempre",
      "Permite voltajes más altos"
    ]
  },
  {
    enunciado: "¿Qué significa HMI?",
    correcta: "Human Machine Interface: Pantallas o paneles, táctiles o no, que permiten al operador interactuar con la máquina (ver datos, dar órdenes)",
    incorrectas: [
      "Herramienta Manual Industrial",
      "Hola Mundo Informático"
    ]
  },
  {
    enunciado: "¿Qué es un diagrama de contactos (Ladder o Escalera)?",
    correcta: "Un lenguaje de programación gráfica de PLCs que imita los esquemas eléctricos de relés (líneas verticales de alimentación y peldaños horizontales de lógica)",
    incorrectas: [
      "Un dibujo de una escalera de mano",
      "Un esquema hidráulico"
    ]
  },
  {
    enunciado: "¿Qué es un relé de control?",
    correcta: "Un interruptor operado electromagnéticamente, usado para procesar lógica en baja potencia (no para mover motores directamente)",
    incorrectas: [
      "Un fusible automático",
      "Una resistencia variable"
    ]
  },
  {
    enunciado: "¿Qué es el GRAFCET (SFC)?",
    correcta: "Un lenguaje gráfico de programación de secuencias (Etapas y Transiciones) muy intuitivo para procesos secuenciales",
    incorrectas: [
      "Un tipo de grafiti",
      "Un software de diseño gráfico"
    ]
  },
  {
    enunciado: "¿Qué es un sistema SCADA?",
    correcta: "Supervisory Control And Data Acquisition: Software de nivel superior que supervisa, controla y registra datos de procesos industriales completos desde un ordenador central",
    incorrectas: [
      "Una escalera en italiano",
      "Un sistema de cableado estructurado"
    ]
  },
  {
    enunciado: "¿Qué es un transductor?",
    correcta: "Un dispositivo que transforma un tipo de energía en otra; a menudo se usa como sinónimo de sensor que acondiciona la señal (de física a eléctrica estándar)",
    incorrectas: [
      "Un traductor de idiomas",
      "Un conductor de trenes"
    ]
  },
  {
    enunciado: "¿Qué es la zona muerta (histeresis) en un sensor?",
    correcta: "La diferencia entre el punto de activación (ON) y el de desactivación (OFF) para evitar oscilaciones rápidas cerca del umbral",
    incorrectas: [
      "La zona donde no hay cobertura",
      "Una zona peligrosa"
    ]
  },
  {
    enunciado: "¿Qué es un sensor tipo NPN o PNP?",
    correcta: "Tipos de salidas de transistores en sensores de CC; NPN conmuta a 0V (negativo), PNP conmuta a +V (positivo)",
    incorrectas: [
      "Marcas de sensores",
      "No Para Nada y Para Nada Posible"
    ]
  },
  {
    enunciado: "¿Para qué sirve un temporizador a la desconexión (TOF)?",
    correcta: "Mantiene la salida activa durante un tiempo preestablecido DESPUÉS de que la señal de entrada ha desaparecido (apagar luz escalera, ventilador baño)",
    incorrectas: [
      "Retarda el encendido",
      "Mide la temperatura"
    ]
  },
  {
    enunciado: "¿Qué es la automatización rígida?",
    correcta: "Sistemas diseñados para producir un solo producto en grandes cantidades a alta velocidad, difícil de modificar (ej. levas mecánicas)",
    incorrectas: [
      "Robots muy fuertes",
      "Automatización flexible con PLCs"
    ]
  },
  {
    enunciado: "¿Qué es un encoder (codificador rotatorio)?",
    correcta: "Un sensor que convierte el movimiento angular de un eje en pulsos digitales para medir posición o velocidad con precisión",
    incorrectas: [
      "Un descodificador de TV",
      "Un motor paso a paso"
    ]
  },
  {
    enunciado: "¿Qué es una electroválvula?",
    correcta: "Una válvula accionada eléctricamente por un solenoide (bobina) para controlar el paso de fluidos (aire, agua, aceite)",
    incorrectas: [
      "Una válvula de corazón eléctrica",
      "Una bombilla de vacío"
    ]
  },
  {
    enunciado: "¿Qué es la Industria 4.0?",
    correcta: "La cuarta revolución industrial, basada en la digitalización, IoT (Internet de las Cosas), Big Data y conectividad total de las fábricas",
    incorrectas: [
      "Volver a usar vapor",
      "Industria de hace 40 años"
    ]
  },
  {
    enunciado: "¿Qué es un relé de estado sólido (SSR)?",
    correcta: "Un dispositivo de conmutación sin partes móviles (usa semiconductores) que permite conmutaciones muy rápidas y silenciosas sin desgaste",
    incorrectas: [
      "Un relé congelado",
      "Un relé mecánico muy duro"
    ]
  },
  {
    enunciado: "¿Qué es el ciclo de scan de un PLC?",
    correcta: "El proceso cíclico continuo: 1. Leer entradas, 2. Ejecutar programa, 3. Escribir salidas",
    incorrectas: [
      "El escaneo de virus",
      "El tiempo que tarda en encenderse"
    ]
  },
  {
    enunciado: "¿Qué es una señal analógica?",
    correcta: "Una señal continua que puede tomar infinitos valores dentro de un rango (ej. temperatura 0-100ºC, voltaje 0-10V)",
    incorrectas: [
      "Una señal que solo es 0 o 1",
      "Una señal antigua de humo"
    ]
  },
  {
    enunciado: "¿Qué es una señal digital?",
    correcta: "Una señal discreta que solo tiene dos estados definidos: Todo o Nada (1 o 0, ON u OFF, 24V o 0V)",
    incorrectas: [
      "Una señal muy moderna",
      "Una señal continua suave"
    ]
  },
  {
    enunciado: "¿Qué función cumple el módulo de E/S remotas?",
    correcta: "Permite conectar sensores y actuadores lejanos al PLC a través de un cable de comunicaciones (bus de campo), ahorrando mazos de cables",
    incorrectas: [
      "Un mando a distancia de TV",
      "Un módulo que viaja solo"
    ]
  },
  {
    enunciado: "¿Qué es la redundancia en control?",
    correcta: "Duplicar componentes críticos (CPUs, fuentes, sensores) para que si uno falla, el otro tome el control sin parar el proceso",
    incorrectas: [
      "Repetir las cosas muchas veces",
      "Tener muchas luces de colores"
    ]
  },
  {
    enunciado: "¿Qué es el control distribuido (DCS)?",
    correcta: "Arquitectura donde el control no está centralizado en un solo PLC, sino repartido en múltiples controladores por zonas que se comunican",
    incorrectas: [
      "Controlar el tráfico",
      "Repartir caramelos"
    ]
  },
  {
    enunciado: "¿Qué es un servomotor en automatización?",
    correcta: "Un motor especial con sensor de posición integrado (encoder) y controlador, capaz de posicionarse con altísima precisión y velocidad",
    incorrectas: [
      "Un motor que sirve bebidas",
      "Un ventilador simple"
    ]
  },
  {
    enunciado: "¿Qué es el bus de campo (Fieldbus)?",
    correcta: "Una red de comunicaciones industrial digital (ej. Profibus, Modbus, EthernetIP) que conecta sensores, actuadores y PLCs",
    incorrectas: [
      "Un autobús para ir al campo",
      "Un cable de teléfono antiguo"
    ]
  },
  {
    enunciado: "¿Qué es un diagrama P&ID (Piping and Instrumentation Diagram)?",
    correcta: "Un plano esquemático que muestra las tuberías, equipos de proceso y la instrumentación/control asociada con sus lazos",
    incorrectas: [
      "Un dibujo artístico",
      "Un plano de la estructura del edificio"
    ]
  },
  {
    enunciado: "¿Qué es la consigna (Setpoint)?",
    correcta: "El valor deseado de la variable que queremos controlar (ej. mantener la temperatura a 200ºC)",
    incorrectas: [
      "El valor actual real",
      "La contraseña de entrada"
    ]
  },
  {
    enunciado: "¿Qué es el paro de emergencia cableado (Hardware safety)?",
    correcta: "El circuito de seguridad que corta la potencia directamente mediante relés de seguridad físicos, independiente del software del PLC (por si el PLC falla)",
    incorrectas: [
      "Un botón en la pantalla táctil",
      "Desenchufar la máquina corriendo"
    ]
  },
  {
    enunciado: "¿Qué es una celda de carga?",
    correcta: "Un sensor de fuerza (basado en galgas extensiométricas) usado para pesar tolvas, básculas o medir tensión mecánica",
    incorrectas: [
      "Una celda de prisión",
      "Una batería recargable"
    ]
  },
  {
    enunciado: "¿Qué es la lógica negativa (Active Low)?",
    correcta: "Cuando el estado activo (ON) se representa por 0V o nivel bajo, y el reposo por nivel alto (o contacto cerrado para seguridad)",
    incorrectas: [
      "Ser pesimista",
      "Lógica que siempre dice que no"
    ]
  }
];
