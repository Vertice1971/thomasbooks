// 56-redes-y-sistemas-telematicos.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por red telemática?",
    correcta: "Un conjunto de sistemas interconectados que permiten la transmisión, gestión y uso de información a distancia",
    incorrectas: [
      "Un sistema aislado de tratamiento local de datos",
      "Una red exclusiva para señales analógicas"
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental existe entre teleinformática y telemática?",
    correcta: "La telemática integra telecomunicaciones e informática como un sistema unificado de servicios",
    incorrectas: [
      "La telemática solo se aplica a telefonía tradicional",
      "La teleinformática no utiliza protocolos de comunicación"
    ]
  },
  {
    enunciado: "¿Qué componentes básicos forman un sistema telemático?",
    correcta: "Equipos terminales, red de comunicaciones, protocolos y servicios",
    incorrectas: [
      "Procesadores de texto, hojas de cálculo y presentaciones",
      "Sensores industriales y actuadores eléctricos"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los protocolos en redes telemáticas?",
    correcta: "Garantizar la interoperabilidad y el intercambio ordenado de información",
    incorrectas: [
      "Aumentar físicamente el ancho de banda",
      "Sustituir los medios de transmisión"
    ]
  },
  {
    enunciado: "¿Qué criterio clasifica las redes según su extensión?",
    correcta: "El alcance geográfico de la red",
    incorrectas: [
      "El número de usuarios conectados",
      "La velocidad del procesador"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una red LAN?",
    correcta: "Conexión de equipos en un ámbito local con alta velocidad y baja latencia",
    incorrectas: [
      "Conexión mundial entre continentes",
      "Uso exclusivo de enlaces por satélite"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una red WAN?",
    correcta: "Interconectar redes locales a grandes distancias mediante infraestructuras públicas o privadas",
    incorrectas: [
      "Limitarse a un único edificio",
      "Funcionar solo con cables coaxiales"
    ]
  },
  {
    enunciado: "¿Qué es una red MAN?",
    correcta: "Una red que cubre un área metropolitana interconectando varias LAN",
    incorrectas: [
      "Una red doméstica inalámbrica",
      "Una red exclusiva de telefonía móvil"
    ]
  },
  {
    enunciado: "¿Qué es una topología de red?",
    correcta: "La disposición física o lógica de los nodos y enlaces de una red",
    incorrectas: [
      "La velocidad máxima de transmisión",
      "El protocolo de cifrado utilizado"
    ]
  },
  {
    enunciado: "¿Qué topología utiliza un nodo central para interconectar todos los equipos?",
    correcta: "La topología en estrella",
    incorrectas: [
      "La topología en anillo",
      "La topología en bus"
    ]
  },
  {
    enunciado: "¿Qué es un nodo en una red telemática?",
    correcta: "Cualquier dispositivo conectado a la red capaz de enviar o recibir información",
    incorrectas: [
      "Un único servidor central obligatorio",
      "Un tipo de cable de red"
    ]
  },
  {
    enunciado: "¿Qué función cumple un switch en una red?",
    correcta: "Conmutar tramas entre dispositivos dentro de la misma red local",
    incorrectas: [
      "Encaminar datos entre redes diferentes",
      "Asignar direcciones IP públicas"
    ]
  },
  {
    enunciado: "¿Qué función cumple un router?",
    correcta: "Encaminar paquetes entre redes distintas utilizando direcciones lógicas",
    incorrectas: [
      "Conectar periféricos locales",
      "Almacenar información de usuario"
    ]
  },
  {
    enunciado: "¿Qué es un gateway?",
    correcta: "Un dispositivo o sistema que interconecta redes con protocolos diferentes",
    incorrectas: [
      "Un tipo de cable de fibra óptica",
      "Un servidor de impresión"
    ]
  },
  {
    enunciado: "¿Qué es un sistema cliente-servidor?",
    correcta: "Un modelo donde un servidor ofrece servicios y los clientes los solicitan",
    incorrectas: [
      "Un sistema sin jerarquía entre equipos",
      "Una red sin intercambio de datos"
    ]
  },
  {
    enunciado: "¿Qué es un sistema peer to peer (P2P)?",
    correcta: "Un modelo donde los nodos actúan simultáneamente como clientes y servidores",
    incorrectas: [
      "Un sistema centralizado obligatorio",
      "Una red exclusiva de administración pública"
    ]
  },
  {
    enunciado: "¿Qué se entiende por servicio telemático?",
    correcta: "Una prestación ofrecida a través de la red, como correo, web o transferencia de archivos",
    incorrectas: [
      "Un componente físico del cableado",
      "Un formato de archivo específico"
    ]
  },
  {
    enunciado: "¿Qué es el correo electrónico como servicio telemático?",
    correcta: "Un sistema de intercambio de mensajes digitales entre usuarios conectados en red",
    incorrectas: [
      "Un protocolo de transmisión analógica",
      "Un sistema de almacenamiento local sin red"
    ]
  },
  {
    enunciado: "¿Qué es la World Wide Web?",
    correcta: "Un servicio telemático basado en documentos interconectados accesibles mediante navegadores",
    incorrectas: [
      "Un protocolo de cifrado de datos",
      "Un sistema operativo de red"
    ]
  },
  {
    enunciado: "¿Qué es la transferencia de archivos en redes telemáticas?",
    correcta: "El envío de ficheros entre sistemas mediante protocolos específicos",
    incorrectas: [
      "La ejecución remota de aplicaciones",
      "La compresión automática de datos"
    ]
  },
  {
    enunciado: "¿Qué es un protocolo de nivel de aplicación?",
    correcta: "Un protocolo que da soporte directo a servicios utilizados por el usuario",
    incorrectas: [
      "Un protocolo exclusivo de la capa física",
      "Un estándar de fabricación de cables"
    ]
  },
  {
    enunciado: "¿Qué función cumple DNS en redes telemáticas?",
    correcta: "Resolver nombres de dominio en direcciones IP",
    incorrectas: [
      "Cifrar comunicaciones",
      "Controlar el acceso físico a la red"
    ]
  },
  {
    enunciado: "¿Qué es una dirección IP?",
    correcta: "Un identificador lógico que identifica a un dispositivo dentro de una red",
    incorrectas: [
      "La dirección física de un conector",
      "Un número de serie del fabricante"
    ]
  },
  {
    enunciado: "¿Qué es una máscara de red?",
    correcta: "Un valor que permite distinguir la parte de red y de host de una dirección IP",
    incorrectas: [
      "Un sistema de cifrado de datos",
      "Un protocolo de transmisión inalámbrica"
    ]
  },
  {
    enunciado: "¿Qué se entiende por encaminamiento?",
    correcta: "El proceso de selección del camino que siguen los paquetes en una red",
    incorrectas: [
      "La conversión de señales analógicas a digitales",
      "La compresión de archivos"
    ]
  },
  {
    enunciado: "¿Qué es la seguridad en redes telemáticas?",
    correcta: "El conjunto de medidas para proteger datos, comunicaciones y servicios",
    incorrectas: [
      "La velocidad máxima de transmisión",
      "El número de nodos conectados"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene el cifrado en redes?",
    correcta: "Garantizar la confidencialidad de la información transmitida",
    incorrectas: [
      "Aumentar el ancho de banda",
      "Reducir la latencia"
    ]
  },
  {
    enunciado: "¿Qué es un cortafuegos (firewall)?",
    correcta: "Un sistema que controla y filtra el tráfico de red según reglas de seguridad",
    incorrectas: [
      "Un protocolo de correo electrónico",
      "Un tipo de cable blindado"
    ]
  },
  {
    enunciado: "¿Qué es una VPN?",
    correcta: "Una red privada virtual que crea un túnel seguro sobre una red pública",
    incorrectas: [
      "Una red inalámbrica doméstica",
      "Un servidor de impresión"
    ]
  },
  {
    enunciado: "¿Qué significa disponibilidad en un sistema telemático?",
    correcta: "Que los servicios estén accesibles cuando se necesitan",
    incorrectas: [
      "Que los datos estén cifrados",
      "Que la red sea privada"
    ]
  },
  {
    enunciado: "¿Qué significa integridad de la información?",
    correcta: "Que los datos no han sido alterados de forma no autorizada",
    incorrectas: [
      "Que los datos sean públicos",
      "Que los datos estén comprimidos"
    ]
  },
  {
    enunciado: "¿Qué rol tiene la telemática en la sociedad digital?",
    correcta: "Sustentar servicios de comunicación, información y gestión a escala global",
    incorrectas: [
      "Sustituir completamente la electrónica",
      "Eliminar la necesidad de infraestructuras físicas"
    ]
  }
];
