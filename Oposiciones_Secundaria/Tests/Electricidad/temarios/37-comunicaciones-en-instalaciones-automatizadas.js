// 37-comunicaciones-en-instalaciones-automatizadas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el modelo OSI de 7 capas?",
    correcta: "Un modelo de referencia estándar para protocolos de red que divide la comunicación en capas (Física, Enlace, Red, Transporte, Sesión, Presentación, Aplicación)",
    incorrectas: [
      "Un modelo de robot de 7 brazos",
      "Un estándar de cableado de 7 hilos"
    ]
  },
  {
    enunciado: "¿Qué define la Capa Física (Capa 1) del modelo OSI?",
    correcta: "Los aspectos físicos de la transmisión: voltajes, tipo de cable, conectores, velocidad de bits y codificación de señal (ej. RS-485, cable UTP)",
    incorrectas: [
      "El enrutamiento de paquetes IP",
      "El cifrado de datos y contraseñas"
    ]
  },
  {
    enunciado: "¿Qué es el bus de campo RS-485?",
    correcta: "Un estándar de capa física robusto, diferencial (equilibrado), que permite largas distancias (1200m) y hasta 32 nodos en un solo par trenzado (Half Duplex)",
    incorrectas: [
      "Un conector USB antiguo",
      "Un cable de fibra óptica"
    ]
  },
  {
    enunciado: "¿Qué es el protocolo Modbus RTU?",
    correcta: "Un protocolo de aplicación simple y muy extendido (Master-Slave) que transmite datos binarios puros sobre una red serie (normalmente RS-485)",
    incorrectas: [
      "Un autobús moderno",
      "Un protocolo de internet seguro"
    ]
  },
  {
    enunciado: "¿Qué es la comunicación Master-Slave (Maestro-Esclavo)?",
    correcta: "Una arquitectura donde un dispositivo (Maestro) controla el bus e inicia todas las comunicaciones, y los Esclavos solo responden cuando se les pregunta",
    incorrectas: [
      "Una relación laboral",
      "Todos hablan a la vez (Peer-to-Peer)"
    ]
  },
  {
    enunciado: "¿Qué es Profibus DP (Decentralized Peripherals)?",
    correcta: "Un bus de campo estándar industrial de alta velocidad diseñado para comunicar PLCs con E/S remotas, variadores y sensores en tiempo real",
    incorrectas: [
      "Un autobús profesional",
      "Un software de contabilidad"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene la transmisión diferencial (ej. RS-485) frente a la referenciada a tierra (ej. RS-232)?",
    correcta: "Es mucho más inmune al ruido electromagnético, ya que el ruido afecta a ambos cables por igual y se cancela en el receptor (rechazo en modo común)",
    incorrectas: [
      "Es más barata porque usa un solo cable",
      "No tiene ventaja, es igual"
    ]
  },
  {
    enunciado: "¿Qué es una resistencia de terminación en un bus RS-485?",
    correcta: "Una resistencia (típicamente 120 Ohmios) colocada en los dos extremos físicos del bus para evitar rebotes de señal (reflexiones) que corrompan los datos",
    incorrectas: [
      "Una resistencia para calentar el cable",
      "Para que no se escapen los datos"
    ]
  },
  {
    enunciado: "¿Qué es Ethernet Industrial (ej. Profinet, EtherNet/IP)?",
    correcta: "La adaptación de la tecnología Ethernet estándar (TCP/IP) para uso industrial, añadiendo características de tiempo real (determinismo) y robustez mecánica",
    incorrectas: [
      "Internet normal para ver vídeos",
      "Un cable coaxial de TV"
    ]
  },
  {
    enunciado: "¿Qué es la topología en anillo?",
    correcta: "Una configuración donde cada dispositivo se conecta al siguiente y el último al primero, formando un círculo; permite redundancia si el cable se rompe en un punto",
    incorrectas: [
      "Poner los cables en forma de cuadrado",
      "Una estrella central"
    ]
  },
  {
    enunciado: "¿Qué es una dirección MAC?",
    correcta: "Un identificador único físico (Hardware Address) asignado a cada tarjeta de red Ethernet del mundo (6 bytes hexadecimales)",
    incorrectas: [
      "La dirección de un ordenador Apple",
      "Una dirección IP dinámica"
    ]
  },
  {
    enunciado: "¿Qué es una dirección IP?",
    correcta: "Una dirección lógica numérica que identifica a un dispositivo en una red que utiliza el protocolo IP (ej. 192.168.1.10)",
    incorrectas: [
      "El código postal del edificio",
      "El número de serie del PLC"
    ]
  },
  {
    enunciado: "¿Qué es un Gateway o Pasarela?",
    correcta: "Un dispositivo que traduce entre dos protocolos de comunicación diferentes (ej. de Modbus RTU a Ethernet TCP/IP)",
    incorrectas: [
      "Una puerta de jardín",
      "Un switch normal"
    ]
  },
  {
    enunciado: "¿Qué es el cable par trenzado (Twisted Pair)?",
    correcta: "Un cable donde los dos conductores de cada circuito se trenzan entre sí para reducir las interferencias electromagnéticas externas y la diafonía",
    incorrectas: [
      "Un cable muy enrollado difícil de pelar",
      "Un cable ornamental"
    ]
  },
  {
    enunciado: "¿Qué es KNX?",
    correcta: "Un estándar mundial para automatización de viviendas y edificios (domótica/inmótica), basado en un bus de control descentralizado (par trenzado, RF o IP)",
    incorrectas: [
      "Una marca de coches",
      "Un protocolo para impresoras"
    ]
  },
  {
    enunciado: "¿Qué es un Switch (Conmutador) Ethernet?",
    correcta: "Un dispositivo de red que conecta segmentos y dirige los datos solo al dispositivo destinatario (inteligente), evitando colisiones (a diferencia del Hub)",
    incorrectas: [
      "Un interruptor de la luz",
      "Un ladrón de enchufes"
    ]
  },
  {
    enunciado: "¿Qué es el determinismo en comunicaciones industriales?",
    correcta: "La garantía de que un mensaje llegará a su destino en un tiempo máximo conocido y acotado (imprescindible para control de movimiento)",
    incorrectas: [
      "Saber el futuro con certeza",
      "Que los datos van muy despacio"
    ]
  },
  {
    enunciado: "¿Qué es la fibra óptica?",
    correcta: "Un medio de transmisión que usa luz a través de un hilo de vidrio/plástico; inmune totalmente al ruido eléctrico, cubre grandes distancias y ancho de banda",
    incorrectas: [
      "Un cable de cobre transparente",
      "Una fibra para ropa"
    ]
  },
  {
    enunciado: "¿Qué es AS-i (Actuator Sensor Interface)?",
    correcta: "Un bus de campo de nivel bajo muy simple (2 hilos planos amarillos) para conectar sensores binarios y actuadores, transmitiendo datos y alimentación a la vez",
    incorrectas: [
      "Así es la vida",
      "Un bus muy complejo y caro"
    ]
  },
  {
    enunciado: "¿Qué es OPC UA (Unified Architecture)?",
    correcta: "Un protocolo de comunicación estándar multiplataforma para intercambio de datos seguro entre sistemas industriales (PLC, SCADA, ERP, Nube)",
    incorrectas: [
      "Una operación matemática",
      "Un partido político"
    ]
  },
  {
    enunciado: "¿Qué es el blindaje o apantallamiento de un cable (STP/FTP)?",
    correcta: "Una malla o lámina metálica que envuelve a los conductores para protegerlos de interferencias externas; debe conectarse a tierra en un solo extremo (generalmente)",
    incorrectas: [
      "Una funda de plástico duro",
      "Pintura metálica"
    ]
  },
  {
    enunciado: "¿Qué es Half-Duplex?",
    correcta: "Comunicación bidireccional pero NO simultánea (tipo walkie-talkie: hablo o escucho, no los dos a la vez)",
    incorrectas: [
      "Comunicación solo en un sentido",
      "Comunicación a la mitad de velocidad"
    ]
  },
  {
    enunciado: "¿Qué es Full-Duplex?",
    correcta: "Comunicación bidireccional y simultánea (tipo teléfono: puedo hablar y escuchar a la vez)",
    incorrectas: [
      "Comunicación muy rápida",
      "Doble de cables"
    ]
  },
  {
    enunciado: "¿Qué es el control de flujo o Handshaking?",
    correcta: "Señales o procedimientos para coordinar la velocidad de transmisión entre emisor y receptor para no saturar el buffer (ej. RTS/CTS)",
    incorrectas: [
      "Darse la mano al saludarse",
      "Agitar el cable"
    ]
  },
  {
    enunciado: "¿Qué es una topología en Estrella?",
    correcta: "Todos los dispositivos se conectan individualmente a un punto central (Switch o Hub); si falla un cable solo cae ese nodo",
    incorrectas: [
      "Conectar los equipos formando una estrella satánica",
      "Conexión en serie pura"
    ]
  },
  {
    enunciado: "¿Qué es wireless HART?",
    correcta: "Una adaptación inalámbrica del protocolo HART (usado en instrumentación 4-20mA) que crea una red mallada (mesh) segura y robusta",
    incorrectas: [
      "Un corazón inalámbrico",
      "Wi-Fi normal"
    ]
  },
  {
    enunciado: "¿Qué es la diafonía (Crosstalk)?",
    correcta: "La interferencia que produce un cable sobre otro adyacente (se 'escucha' la conversación del otro par)",
    incorrectas: [
      "Hablar por teléfono con el diablo",
      "Ruido blanco"
    ]
  },
  {
    enunciado: "¿Qué es un Repetidor?",
    correcta: "Un dispositivo que regenera y amplifica la señal eléctrica para extender la longitud máxima del bus (ej. más allá de los 1200m en RS-485)",
    incorrectas: [
      "Un loro",
      "Un alumno que repite curso"
    ]
  },
  {
    enunciado: "¿Qué es el Bit de Start y Stop en comunicación serie asíncrona?",
    correcta: "Bits especiales que enmarcan cada byte de datos para sincronizar el receptor al inicio de cada carácter",
    incorrectas: [
      "Botones de arranque y paro de la máquina",
      "No existen"
    ]
  },
  {
    enunciado: "¿Qué es la velocidad en Baudios (Baud Rate)?",
    correcta: "El número de cambios de estado de la señal por segundo; en codificaciones simples equivale a bits por segundo (bps)",
    incorrectas: [
      "La velocidad del sonido",
      "El precio de la comunicación"
    ]
  },
  {
    enunciado: "¿Qué es CAN Bus (Controller Area Network)?",
    correcta: "Un bus robusto orientado a mensajes, muy usado en automoción y maquinaria, con priorización de mensajes por ID y detección de colisiones no destructiva",
    incorrectas: [
      "El autobús de los perros (Can)",
      "Una lata de refresco"
    ]
  },
  {
    enunciado: "¿Qué es la latencia de red?",
    correcta: "El tiempo (retardo) que tarda un paquete de datos en viajar desde el origen al destino",
    incorrectas: [
      "El latido de la red",
      "La anchura del cable"
    ]
  },
  {
    enunciado: "¿Para qué sirve el CRC (Cyclic Redundancy Check)?",
    correcta: "Un código matemático añadido al final del mensaje para verificar la integridad de los datos detectando errores de transmisión complejos",
    incorrectas: [
      "Cruz Roja Camiones",
      "Un certificado de calibración"
    ]
  },
  {
    enunciado: "¿Qué es Power over Ethernet (PoE)?",
    correcta: "Tecnología que permite enviar alimentación eléctrica junto con los datos por el cable Ethernet (ej. para alimentar cámaras IP o teléfonos VoIP)",
    incorrectas: [
      "Poder absoluto sobre internet",
      "Electricidad inalámbrica"
    ]
  },
  {
    enunciado: "¿Qué es IO-Link?",
    correcta: "Un protocolo de comunicación punto a punto moderno para sensores/actuadores inteligentes 'último metro', sobre cable estándar de 3 hilos",
    incorrectas: [
      "Un link a una web",
      "Un robot llamado Link"
    ]
  },
  {
    enunciado: "¿Qué es SCADA Vs HMI?",
    correcta: "El HMI suele ser un panel local dedicado a una máquina; el SCADA es un sistema informático global que supervisa toda la planta y almacena históricos",
    incorrectas: [
      "Son lo mismo",
      "SCADA es hardware y HMI es software"
    ]
  },
  {
    enunciado: "¿Qué es un token-ring (paso de testigo)?",
    correcta: "Método de acceso al medio donde un 'testigo' lógico circula por la red, y solo quien lo tiene puede transmitir, evitando colisiones (ej. Profibus)",
    incorrectas: [
      "Un anillo de compromiso",
      "Pasar el testigo en atletismo"
    ]
  },
  {
    enunciado: "¿Qué es un servidor Web embebido en un PLC?",
    correcta: "Una función que permite acceder a datos del PLC y configurarlo visualizándolos en una página web estándar desde cualquier navegador",
    incorrectas: [
      "Un robot araña dentro del PLC",
      "No existe tal cosa"
    ]
  },
  {
    enunciado: "¿Qué es la seguridad Ciberfísica (Ciberseguridad industrial)?",
    correcta: "La protección de redes y sistemas de control industrial (OT) frente a ataques maliciosos digitales (hackers, virus) que puedan causar daños físicos",
    incorrectas: [
      "Poner un candado al ordenador",
      "Seguridad privada"
    ]
  },
  {
    enunciado: "¿Qué es DNP3?",
    correcta: "Un protocolo de telecontrol usado principalmente en empresas eléctricas y de aguas (Utilities) para comunicación fiable entre estaciones remotas",
    incorrectas: [
      "Un explosivo plástico",
      "Un partido político"
    ]
  }
];
