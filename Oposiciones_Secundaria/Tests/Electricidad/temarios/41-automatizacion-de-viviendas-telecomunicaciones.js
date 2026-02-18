// 41-automatizacion-de-viviendas-telecomunicaciones.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué normativa regula las Infraestructuras Comunes de Telecomunicaciones (ICT) en España?",
    correcta: "El Real Decreto 346/2011 (y sus modificaciones posteriores, como la Orden ECE/983/2019)",
    incorrectas: [
      "El Reglamento Electrotécnico de Baja Tensión (REBT)",
      "La normativa ISO 9001"
    ]
  },
  {
    enunciado: "¿Qué es el 'Hogar Digital' según la normativa de ICT?",
    correcta: "Una vivienda que integra servicios de telecomunicaciones, seguridad, domótica, eficiencia energética y ocio mediante una infraestructura común",
    incorrectas: [
      "Una casa con muchos enchufes",
      "Una vivienda hecha de píxeles"
    ]
  },
  {
    enunciado: "¿Qué es el PAU (Punto de Acceso al Usuario) en telecomunicaciones?",
    correcta: "El punto físico donde termina la red de dispersión del edificio y comienza la red interior de usuario (ubicado normalmente en el registro de terminación de red)",
    incorrectas: [
      "La prueba de acceso a la universidad",
      "El router Wi-Fi"
    ]
  },
  {
    enunciado: "¿Qué es el BAT (Base de Acceso de Terminal)?",
    correcta: "La toma de usuario final (enchufe de TV, RJ45 o fibra) donde se conectan los equipos terminales",
    incorrectas: [
      "El murciélago de la instalación",
      "La base de la antena del tejado"
    ]
  },
  {
    enunciado: "¿Qué categoría de cable de pares trenzados es el mínimo exigido actualmente para redes de datos en el interior de viviendas nuevas?",
    correcta: "Categoría 6 (Cat 6) o superior, para garantizar velocidades de Gigabit Ethernet",
    incorrectas: [
      "Categoría 3",
      "Categoría 5"
    ]
  },
  {
    enunciado: "¿Qué es un multiplexor pasivo en el PAU de una vivienda?",
    correcta: "Un dispositivo ubicado en el registro de entrada que distribuye la señal de telefonía o datos a las distintas rosetas de la vivienda sin electrónica activa",
    incorrectas: [
      "Un amplificador de señal",
      "Un conmutador de luces"
    ]
  },
  {
    enunciado: "¿Qué es la red de dispersión?",
    correcta: "El tramo de la red que va desde los puntos de distribución de planta hasta los PAU de cada vivienda",
    incorrectas: [
      "La red de riego del jardín",
      "La red Wi-Fi"
    ]
  },
  {
    enunciado: "¿Qué función tiene el Registro Principal de Telecomunicaciones (RITI/RITS)?",
    correcta: "Alojar los equipos de los operadores y los puntos de interconexión con la red comunitaria (RITI abajo para cable/telefonía, RITS arriba para antenas)",
    incorrectas: [
      "Guardar las facturas de teléfono",
      "Alojar los contadores de agua"
    ]
  },
  {
    enunciado: "¿Qué es el cable coaxial RG-6 o RG-59?",
    correcta: "Cable utilizado para transmisión de señales de televisión (RF) y vídeo en CCTV, con impedancia característica de 75 Ohmios",
    incorrectas: [
      "Cable de red Ethernet",
      "Cable de alimentación de 230V"
    ]
  },
  {
    enunciado: "¿Qué es la fibra óptica FTTH?",
    correcta: "Fiber To The Home: la fibra del operador llega directamente hasta el interior de la vivienda (hasta la roseta óptica o PTRO)",
    incorrectas: [
      "Fibra hasta el portal",
      "Fibra textil para ropa"
    ]
  },
  {
    enunciado: "¿Qué es el PTRO (Punto de Terminación de Red Óptica)?",
    correcta: "La roseta óptica pasiva instalada dentro de la vivienda donde termina la fibra de la acometida y se conecta la pre-fibra del usuario (latiguillo a la ONT)",
    incorrectas: [
      "El router del operador",
      "Un punto de reciclaje"
    ]
  },
  {
    enunciado: "¿Qué es la ONT (Optical Network Terminal)?",
    correcta: "El equipo activo que convierte la señal óptica (luz) de la fibra en señales eléctricas (Ethernet) para el router y teléfonos",
    incorrectas: [
      "Organización Nacional de Telecomunicaciones",
      "Una antena de TV"
    ]
  },
  {
    enunciado: "¿Qué es VoIP?",
    correcta: "Voz sobre IP: tecnología para realizar llamadas telefónicas a través de redes de datos (internet) en lugar de la red telefónica conmutada (RTC) convencional",
    incorrectas: [
      "Voz muy alta",
      "Un código postal"
    ]
  },
  {
    enunciado: "¿Qué es el Internet de las Cosas (IoT) en el ámbito doméstico?",
    correcta: "La conexión masiva de objetos cotidianos (nevera, termostato, cerradura) a internet para enviar datos y recibir órdenes",
    incorrectas: [
      "Navegar por internet con cosas",
      "Un chat de objetos"
    ]
  },
  {
    enunciado: "¿Qué es un Gateway o Pasarela Residencial?",
    correcta: "El dispositivo central (normalmente el router avanzado o hub domótico) que interconecta la red doméstica (LAN/WLAN) con la red pública (WAN) y gestiona los servicios",
    incorrectas: [
      "La puerta del garaje",
      "Un puente peatonal"
    ]
  },
  {
    enunciado: "¿Qué es el ancho de banda?",
    correcta: "La capacidad máxima de transmisión de datos de un canal de comunicación, medida en bits por segundo (ej. 300 Mbps, 1 Gbps)",
    incorrectas: [
      "El ancho físico del cable",
      "El volumen del sonido"
    ]
  },
  {
    enunciado: "¿Qué es ZigBee en domótica?",
    correcta: "Un estándar de comunicación inalámbrica de bajo consumo y corto alcance (IEEE 802.15.4), ideal para sensores y actuadores a pilas en red mallada",
    incorrectas: [
      "Una marca de miel",
      "Un tipo de Wi-Fi de alta potencia"
    ]
  },
  {
    enunciado: "¿Qué es Z-Wave?",
    correcta: "Otro protocolo inalámbrico específico para domótica, que opera en frecuencias sub-GHz (868 MHz en Europa) para evitar interferencias con el Wi-Fi (2.4 GHz)",
    incorrectas: [
      "Una ola gigante",
      "Un saludo zeta"
    ]
  },
  {
    enunciado: "¿Qué es Power Line Communication (PLC) doméstico?",
    correcta: "Tecnología que utiliza el cableado eléctrico existente de la vivienda para transmitir datos de internet entre enchufes (adaptadores PLC)",
    incorrectas: [
      "Un autómata industrial",
      "Comunicación por tuberías de agua"
    ]
  },
  {
    enunciado: "¿Qué es un splitter o microfiltro en ADSL (tecnología legado)?",
    correcta: "Un filtro paso bajo que separa la señal de voz analógica de la señal de datos de alta frecuencia que viajan juntas por el par de cobre",
    incorrectas: [
      "Un cortador de cables",
      "Un amplificador de señal"
    ]
  },
  {
    enunciado: "¿Qué es la diafonía (Crosstalk) en cables de red?",
    correcta: "La interferencia electromagnética entre pares trenzados adyacentes dentro del mismo cable, que corrompe los datos y reduce la velocidad",
    incorrectas: [
      "Hablar dos personas a la vez",
      "El eco en una habitación"
    ]
  },
  {
    enunciado: "¿Qué es el conector RJ45?",
    correcta: "El conector estándar de 8 contactos utilizado para redes Ethernet (cable UTP)",
    incorrectas: [
      "El conector de teléfono pequeño (RJ11)",
      "El conector de antena redonda"
    ]
  },
  {
    enunciado: "¿Qué es la Televisión Digital Terrestre (TDT)?",
    correcta: "La transmisión de señales de televisión codificadas digitalmente (DVB-T/T2) a través de ondas terrestres, requiriendo antenas UHF",
    incorrectas: [
      "Televisión por satélite",
      "Televisión por cable"
    ]
  },
  {
    enunciado: "¿Qué es un amplificador monocanal en cabeceras de TV?",
    correcta: "Un módulo que amplifica exclusivamente la frecuencia de un canal (multiplex) de TDT concreto, filtrando el resto, usado en comunidades grandes para ecualizar niveles",
    incorrectas: [
      "Un amplificador de audio mono",
      "Un amplificador que solo sirve para un piso"
    ]
  },
  {
    enunciado: "¿Qué es la banda de frecuencia de 2.4 GHz?",
    correcta: "Una banda libre (ISM) muy saturada, usada por Wi-Fi, Bluetooth, ZigBee y hornos microondas",
    incorrectas: [
      "Una banda exclusiva militar",
      "La banda de la radio FM"
    ]
  },
  {
    enunciado: "¿Y la banda de 5 GHz en Wi-Fi?",
    correcta: "Ofrece mayor velocidad (más ancho de banda) y menos interferencias que la 2.4 GHz, pero tiene menor alcance y penetración de paredes",
    incorrectas: [
      "Es más lenta pero llega más lejos",
      "Es perjudicial para la salud instantáneamente"
    ]
  },
  {
    enunciado: "¿Qué es el 'Roaming' en redes Wi-Fi Mesh domésticas?",
    correcta: "La capacidad de los dispositivos (móviles) para cambiar automáticamente de un punto de acceso a otro sin cortar la conexión mientras te mueves por casa",
    incorrectas: [
      "Llamar desde el extranjero",
      "Robar wifi al vecino"
    ]
  },
  {
    enunciado: "¿Qué es la atenuación de una señal?",
    correcta: "La pérdida de potencia que sufre la señal al propagarse por un medio (cable, aire), medida en decibelios (dB)",
    incorrectas: [
      "El aumento de volumen",
      "La velocidad de la luz"
    ]
  },
  {
    enunciado: "¿Qué es un cable HDMI?",
    correcta: "Interfaz multimedia de alta definición que transmite audio y vídeo digital sin comprimir entre equipos (deco, consola, TV)",
    incorrectas: [
      "Un cable de red antiguo",
      "Un cable de corriente"
    ]
  },
  {
    enunciado: "¿Qué es la telegestión de suministros (Smart Metering)?",
    correcta: "Lectura y control remoto de contadores de luz, agua y gas mediante redes de comunicación (ej. PLC PRIME, Radio, NB-IoT)",
    incorrectas: [
      "Mirar el contador con prismáticos",
      "Gestión de canales de TV"
    ]
  },
  {
    enunciado: "¿Qué es un nodo IoT?",
    correcta: "Cualquier 'cosa' conectada (sensor, actuador) que tiene capacidad de cómputo y comunicación en una red IoT",
    incorrectas: [
      "Un nudo en el cable",
      "Un servidor central potente"
    ]
  },
  {
    enunciado: "¿Qué es el protocolo MQTT?",
    correcta: "Un protocolo de mensajería ligero (Publish-Subscribe) muy usado en IoT para comunicar sensores con servidores con muy poco ancho de banda",
    incorrectas: [
      "Un protocolo pesado para vídeo",
      "Una marca de motos"
    ]
  },
  {
    enunciado: "¿Qué es la 'Nube' (Cloud) en domótica?",
    correcta: "Servidores remotos accesibles por internet donde se procesan datos, se almacenan configuraciones y se gestiona el acceso remoto a la vivienda",
    incorrectas: [
      "El vapor de agua del cielo",
      "Una red local sin internet"
    ]
  },
  {
    enunciado: "¿Qué es una dirección IP dinámica vs estática?",
    correcta: "La dinámica cambia periódicamente (asignada por el operador), la estática es fija (útil para servidores web o acceso remoto directo sin DDNS)",
    incorrectas: [
      "La dinámica es más rápida",
      "La estática no se puede mover de casa"
    ]
  },
  {
    enunciado: "¿Qué es el DDNS (Dynamic DNS)?",
    correcta: "Un servicio que actualiza automáticamente un nombre de dominio (ej. micasa.dyndns.org) cuando cambia la IP dinámica del router",
    incorrectas: [
      "Un DNS muy rápido",
      "Un servidor de nombres doble"
    ]
  },
  {
    enunciado: "¿Qué es el 'Dividendo Digital'?",
    correcta: "El proceso de liberación de frecuencias de la banda UHF (anteriormente TV) para cederlas a la telefonía móvil 4G/5G (700 MHz, 800 MHz)",
    incorrectas: [
      "Repartir dinero digital",
      "Un impuesto por ver la tele"
    ]
  },
  {
    enunciado: "¿Qué filtro es necesario instalar en la antena TV tras el Dividendo Digital?",
    correcta: "Un filtro de rechazo LTE/5G para evitar que las señales de telefonía móvil saturen el amplificador de TV y causen pixelado",
    incorrectas: [
      "Un filtro de café",
      "Un filtro de luz azul"
    ]
  },
  {
    enunciado: "¿Qué es la ICT-2?",
    correcta: "Referencia común al RD 346/2011, que actualizó la normativa para incluir fibra óptica y cable coaxial en todas las nuevas edificaciones",
    incorrectas: [
      "Una segunda oportunidad",
      "Un robot de Star Wars"
    ]
  },
  {
    enunciado: "¿Qué es un videoportero IP?",
    correcta: "Un portero que se conecta a la red de datos, permitiendo recibir la llamada en pantallas táctiles interiores, móviles o tabletas, no solo en un telefonillo dedicado",
    incorrectas: [
      "Un portero que sabe tu IP",
      "Una cámara analógica"
    ]
  },
  {
    enunciado: "¿Qué es la domótica 'retrofitting'?",
    correcta: "Instalar domótica en viviendas ya construidas sin realizar obras, utilizando tecnologías inalámbricas (Wi-Fi, ZigBee) o micromódulos detrás de los interruptores existentes",
    incorrectas: [
      "Domótica antigua",
      "Domótica para coches"
    ]
  }
];
