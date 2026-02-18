// 54-teleinformatica-conceptos-y-sistemas.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la teleinformática?",
    correcta: "La transmisión de información entre sistemas informáticos mediante redes de comunicaciones",
    incorrectas: [
      "El diseño gráfico de interfaces de usuario",
      "La reparación física de componentes electrónicos"
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental existe entre informática y teleinformática?",
    correcta: "La teleinformática se centra en la comunicación de datos entre sistemas, no solo en su tratamiento local",
    incorrectas: [
      "La teleinformática solo se aplica a telefonía analógica",
      "La informática no utiliza ningún tipo de red"
    ]
  },
  {
    enunciado: "¿Qué es un sistema de transmisión de datos?",
    correcta: "El conjunto de elementos que permiten enviar información desde un emisor a un receptor",
    incorrectas: [
      "Un programa para editar documentos",
      "Un dispositivo exclusivo de almacenamiento"
    ]
  },
  {
    enunciado: "¿Cuáles son los elementos básicos de un sistema de comunicación de datos?",
    correcta: "Emisor, receptor, medio de transmisión, mensaje y protocolo",
    incorrectas: [
      "CPU, memoria, disco duro y sistema operativo",
      "Sensor, actuador y controlador lógico"
    ]
  },
  {
    enunciado: "¿Qué función cumple un protocolo de comunicaciones?",
    correcta: "Definir las reglas para que los sistemas intercambien datos de forma correcta",
    incorrectas: [
      "Aumentar la velocidad física del medio de transmisión",
      "Sustituir el hardware de red"
    ]
  },
  {
    enunciado: "¿Qué es una red de comunicaciones?",
    correcta: "Un conjunto de equipos interconectados para compartir información y recursos",
    incorrectas: [
      "Un único ordenador con acceso a internet",
      "Un sistema aislado sin intercambio de datos"
    ]
  },
  {
    enunciado: "¿Qué criterio clasifica las redes según su alcance?",
    correcta: "La extensión geográfica cubierta por la red",
    incorrectas: [
      "El número de programas instalados",
      "La marca de los dispositivos"
    ]
  },
  {
    enunciado: "¿Qué es una red LAN?",
    correcta: "Una red de área local que cubre un espacio geográfico reducido",
    incorrectas: [
      "Una red global basada en satélites",
      "Una red exclusiva para telefonía móvil"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una red WAN?",
    correcta: "Conecta redes locales a gran distancia geográfica",
    incorrectas: [
      "Solo funciona dentro de un edificio",
      "Utiliza exclusivamente cables coaxiales"
    ]
  },
  {
    enunciado: "¿Qué es una red MAN?",
    correcta: "Una red de ámbito metropolitano que interconecta varias LAN",
    incorrectas: [
      "Una red doméstica inalámbrica",
      "Un sistema de control industrial"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre transmisión analógica y digital?",
    correcta: "La analógica usa señales continuas y la digital señales discretas",
    incorrectas: [
      "La digital solo se usa en telefonía antigua",
      "La analógica es exclusiva de redes informáticas modernas"
    ]
  },
  {
    enunciado: "¿Qué es el ancho de banda?",
    correcta: "La capacidad máxima de transmisión de datos de un canal",
    incorrectas: [
      "El retardo en la transmisión",
      "El número de dispositivos conectados"
    ]
  },
  {
    enunciado: "¿Qué es la latencia en una red?",
    correcta: "El tiempo que tarda un dato en viajar del origen al destino",
    incorrectas: [
      "La cantidad de datos transmitidos por segundo",
      "El tipo de cable utilizado"
    ]
  },
  {
    enunciado: "¿Qué se entiende por velocidad de transmisión?",
    correcta: "La cantidad de información transmitida por unidad de tiempo",
    incorrectas: [
      "La distancia máxima de la red",
      "El número de protocolos utilizados"
    ]
  },
  {
    enunciado: "¿Qué es la conmutación de circuitos?",
    correcta: "Un sistema que establece un canal exclusivo durante toda la comunicación",
    incorrectas: [
      "La división de datos en paquetes independientes",
      "La transmisión simultánea de varios protocolos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la conmutación de paquetes?",
    correcta: "La información se divide en paquetes que pueden seguir rutas distintas",
    incorrectas: [
      "Requiere un canal dedicado permanente",
      "Solo se usa en redes analógicas"
    ]
  },
  {
    enunciado: "¿Qué es un paquete de datos?",
    correcta: "Una unidad de información con datos y control para su transmisión",
    incorrectas: [
      "Un archivo comprimido",
      "Un dispositivo físico de red"
    ]
  },
  {
    enunciado: "¿Qué función tiene la cabecera de un paquete?",
    correcta: "Contener información de control como direcciones y numeración",
    incorrectas: [
      "Almacenar el contenido multimedia",
      "Aumentar el tamaño del archivo original"
    ]
  },
  {
    enunciado: "¿Qué es un medio de transmisión guiado?",
    correcta: "Un medio físico como cable de cobre o fibra óptica",
    incorrectas: [
      "Las ondas de radio",
      "Las comunicaciones por satélite"
    ]
  },
  {
    enunciado: "¿Qué es un medio de transmisión no guiado?",
    correcta: "Un medio inalámbrico como radio, microondas o infrarrojos",
    incorrectas: [
      "Un cable de par trenzado",
      "Un conductor de fibra óptica"
    ]
  },
  {
    enunciado: "¿Qué ventaja principal ofrece la fibra óptica?",
    correcta: "Alta velocidad, gran ancho de banda e inmunidad a interferencias",
    incorrectas: [
      "Menor coste que cualquier cable de cobre",
      "Facilidad de empalme sin herramientas"
    ]
  },
  {
    enunciado: "¿Qué es el modelo OSI?",
    correcta: "Un modelo de referencia que divide la comunicación en siete capas",
    incorrectas: [
      "Un protocolo de red propietario",
      "Un sistema operativo para servidores"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de la capa física del modelo OSI?",
    correcta: "Transmitir bits a través del medio físico",
    incorrectas: [
      "Gestionar direcciones IP",
      "Cifrar los datos transmitidos"
    ]
  },
  {
    enunciado: "¿Qué capa del modelo OSI se encarga del direccionamiento lógico?",
    correcta: "La capa de red",
    incorrectas: [
      "La capa física",
      "La capa de aplicación"
    ]
  },
  {
    enunciado: "¿Qué modelo es el más utilizado en redes TCP/IP?",
    correcta: "El modelo TCP/IP de cuatro capas",
    incorrectas: [
      "El modelo OSI completo de siete capas",
      "Un modelo propietario sin capas"
    ]
  },
  {
    enunciado: "¿Qué es una dirección IP?",
    correcta: "Un identificador lógico único asignado a un dispositivo en una red",
    incorrectas: [
      "La dirección física de una tarjeta gráfica",
      "Un número de serie del fabricante"
    ]
  },
  {
    enunciado: "¿Qué función cumple un router?",
    correcta: "Encaminar paquetes entre redes diferentes",
    incorrectas: [
      "Conectar dispositivos dentro de una misma LAN sin direccionamiento",
      "Almacenar datos de usuario"
    ]
  },
  {
    enunciado: "¿Qué función cumple un switch en una red local?",
    correcta: "Conmutar tramas entre dispositivos dentro de la misma red",
    incorrectas: [
      "Asignar direcciones IP públicas",
      "Gestionar conexiones WAN"
    ]
  },
  {
    enunciado: "¿Qué es un módem?",
    correcta: "Un dispositivo que modula y demodula señales para transmitir datos",
    incorrectas: [
      "Un servidor de aplicaciones",
      "Un cortafuegos de red"
    ]
  },
  {
    enunciado: "¿Qué es una topología de red?",
    correcta: "La forma en que se organizan y conectan los dispositivos",
    incorrectas: [
      "El protocolo utilizado para cifrar datos",
      "La velocidad máxima de transmisión"
    ]
  },
  {
    enunciado: "¿Qué topología conecta todos los equipos a un punto central?",
    correcta: "La topología en estrella",
    incorrectas: [
      "La topología en anillo",
      "La topología en bus"
    ]
  },
  {
    enunciado: "¿Qué es Internet desde el punto de vista teleinformático?",
    correcta: "Una red mundial de redes interconectadas mediante protocolos comunes",
    incorrectas: [
      "Un único servidor central",
      "Un sistema cerrado de uso local"
    ]
  },
  {
    enunciado: "¿Qué es una intranet?",
    correcta: "Una red privada que utiliza tecnologías de Internet en un ámbito interno",
    incorrectas: [
      "Una red pública abierta sin control",
      "Un sistema exclusivo de telefonía móvil"
    ]
  },
  {
    enunciado: "¿Qué es una extranet?",
    correcta: "Una red que extiende parte de una intranet a usuarios externos autorizados",
    incorrectas: [
      "Una red sin ningún tipo de seguridad",
      "Una red exclusivamente inalámbrica"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue la teleinformática en sistemas modernos?",
    correcta: "Garantizar comunicación eficiente, fiable y segura entre sistemas",
    incorrectas: [
      "Eliminar la necesidad de hardware de red",
      "Sustituir completamente la informática tradicional"
    ]
  }
];
