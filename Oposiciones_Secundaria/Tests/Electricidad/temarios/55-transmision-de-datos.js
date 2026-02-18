// 55-transmision-de-datos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué establece el Teorema de Nyquist respecto a la tasa máxima de transmisión en un canal ideal sin ruido?",
    correcta: "La tasa máxima es el doble del ancho de banda por el logaritmo en base 2 del número de niveles de la señal (C = 2B log2 L)",
    incorrectas: [
      "La tasa máxima es igual al ancho de banda multiplicado por la relación señal/ruido",
      "La tasa máxima depende únicamente de la potencia de transmisión del emisor"
    ]
  },
  {
    enunciado: "¿En qué consiste la Ley de Shannon para canales con ruido?",
    correcta: "Define el límite superior de la capacidad de un canal según su ancho de banda y la relación señal/ruido (C = B log2 (1 + S/N))",
    incorrectas: [
      "Establece que el ruido desaparece si se aumenta infinitamente la frecuencia de muestreo",
      "Determina que la velocidad de transmisión es inversamente proporcional a la distancia del cable"
    ]
  },
  {
    enunciado: "¿Qué diferencia existe entre el bit-rate (tasa de bits) y el baud-rate (tasa de baudios)?",
    correcta: "El bit-rate es el número de bits transmitidos por segundo, mientras que el baud-rate es el número de cambios de estado de la señal por segundo",
    incorrectas: [
      "Son sinónimos en todas las modulaciones digitales modernas",
      "El baud-rate siempre es superior al bit-rate en una relación de 2 a 1"
    ]
  },
  {
    enunciado: "En la modulación por impulsos codificados (PCM), ¿qué es el ruido de cuantificación?",
    correcta: "El error introducido al representar un valor analógico continuo mediante un conjunto discreto de niveles digitales",
    incorrectas: [
      "El ruido térmico producido por los cables de cobre",
      "La interferencia causada por motores eléctricos cercanos a la línea de datos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la modulación QAM (Quadrature Amplitude Modulation)?",
    correcta: "Combina variaciones de amplitud y fase de dos señales portadoras en cuadratura para aumentar la eficiencia espectral",
    incorrectas: [
      "Utiliza únicamente el cambio de frecuencia para representar ceros y unos",
      "Es una modulación puramente analógica usada exclusivamente en radio FM"
    ]
  },
  {
    enunciado: "¿Qué es la técnica de multiplexación por división de longitud de onda (WDM) en fibra óptica?",
    correcta: "La transmisión simultánea de múltiples señales de datos sobre una única fibra utilizando diferentes longitudes de onda (colores)",
    incorrectas: [
      "La división del tiempo de uso de la fibra entre varios usuarios mediante ráfagas",
      "El uso de diferentes secciones de cobre para enviar la misma señal láser"
    ]
  },
  {
    enunciado: "¿Qué función tiene el código de redundancia cíclica (CRC) en la transmisión de datos?",
    correcta: "Es un algoritmo matemático que permite detectar errores de transmisión mediante la división de polinomios",
    incorrectas: [
      "Corregir automáticamente los bits erróneos sin necesidad de retransmisión",
      "Cifrar los datos para que no puedan ser leídos por terceros"
    ]
  },
  {
    enunciado: "¿En qué se basa el método de acceso al medio CSMA/CD usado en redes Ethernet cableadas?",
    correcta: "Los nodos escuchan el medio y si detectan una colisión durante la transmisión, detienen el envío y esperan un tiempo aleatorio",
    incorrectas: [
      "Un nodo central otorga permiso de habla a cada estación de forma secuencial",
      "Utiliza el paso de un testigo (token) para evitar que dos nodos transmitan a la vez"
    ]
  },
  {
    enunciado: "¿Qué es el jitter en una red de transmisión de datos?",
    correcta: "La variabilidad temporal en el tiempo de llegada de los paquetes, crítica para servicios en tiempo real como VoIP",
    incorrectas: [
      "La pérdida total de conexión debido a la rotura de un cable",
      "El aumento de la velocidad de descarga al usar varios navegadores"
    ]
  },
  {
    enunciado: "¿Qué define el estándar RS-232 en las comunicaciones serie?",
    correcta: "Las características eléctricas, mecánicas y funcionales del interfaz entre un DTE y un DCE para transmisión punto a punto",
    incorrectas: [
      "El protocolo de enrutamiento dinámico para redes de área extensa",
      "El formato de las direcciones IP en una red local"
    ]
  },
  {
    enunciado: "¿Qué es la modulación por desplazamiento de frecuencia (FSK)?",
    correcta: "Técnica de modulación digital donde la frecuencia de la portadora varía entre valores discretos para representar símbolos",
    incorrectas: [
      "Una técnica que cambia la fase de la señal 180 grados para representar el bit 0",
      "Un método para enviar datos a través de la red eléctrica de baja tensión"
    ]
  },
  {
    enunciado: "¿Qué ventaja principal ofrece la codificación diferencial sobre la codificación absoluta?",
    correcta: "Permite la recuperación de los datos basándose en cambios de estado, siendo inmune a la inversión de polaridad en la línea",
    incorrectas: [
      "Duplica la velocidad de transmisión sin cambiar el hardware",
      "Elimina por completo la necesidad de sincronización de reloj"
    ]
  },
  {
    enunciado: "¿En qué consiste la técnica de 'piggybacking'?",
    correcta: "Incluir el reconocimiento de un paquete recibido (ACK) dentro del campo de cabecera de un paquete de datos que se envía en sentido contrario",
    incorrectas: [
      "Enviar datos a través de la conexión a internet de un vecino",
      "Aumentar el tamaño de la MTU de forma dinámica según el tráfico"
    ]
  },
  {
    enunciado: "¿Qué es el modelo OSI de la ISO?",
    correcta: "Un marco de referencia de 7 capas que estandariza las funciones de un sistema de comunicaciones para lograr la interoperabilidad",
    incorrectas: [
      "Un protocolo de seguridad para redes Wi-Fi empresariales",
      "Un tipo de cable de par trenzado de categoría 8"
    ]
  },
  {
    enunciado: "¿Qué capa del modelo OSI se encarga del enrutamiento y el direccionamiento lógico?",
    correcta: "Capa 3 (Capa de Red)",
    incorrectas: [
      "Capa 2 (Capa de Enlace)",
      "Capa 4 (Capa de Transporte)"
    ]
  },
  {
    enunciado: "¿Qué diferencia a la transmisión síncrona de la asíncrona?",
    correcta: "La síncrona utiliza un reloj común para emisor y receptor, mientras que la asíncrona usa bits de inicio y parada",
    incorrectas: [
      "La asíncrona es mucho más rápida y se usa en fibra óptica",
      "La síncrona solo permite enviar texto y la asíncrona multimedia"
    ]
  },
  {
    enunciado: "¿Qué es un sistema Full-Duplex?",
    correcta: "Un sistema que permite la transmisión simultánea en ambos sentidos entre dos estaciones",
    incorrectas: [
      "Un sistema que solo transmite en un sentido permanentemente",
      "Un sistema que transmite en ambos sentidos pero no al mismo tiempo"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza la técnica de espectro ensanchado (Spread Spectrum)?",
    correcta: "Para distribuir la señal en un ancho de banda mucho mayor al necesario, mejorando la resistencia a interferencias y la seguridad",
    incorrectas: [
      "Para concentrar toda la potencia en una frecuencia muy estrecha",
      "Para reducir el consumo eléctrico de los routers domésticos"
    ]
  },
  {
    enunciado: "¿Qué es la diafonía (Crosstalk) en cables de par trenzado?",
    correcta: "La interferencia electromagnética causada por la proximidad de un par de hilos a otro dentro del mismo cable",
    incorrectas: [
      "La pérdida de señal por la longitud excesiva del conductor",
      "El eco que se produce en las llamadas de telefonía IP"
    ]
  },
  {
    enunciado: "¿Qué característica define a la fibra óptica monomodo frente a la multimodo?",
    correcta: "Tiene un núcleo muy estrecho que permite un solo camino para la luz, minimizando la dispersión modal y permitiendo mayores distancias",
    incorrectas: [
      "Es mucho más barata y fácil de conectorizar en instalaciones domésticas",
      "Permite el uso de LED de baja potencia en lugar de láseres"
    ]
  },
  {
    enunciado: "¿Qué es el protocolo ARQ (Automatic Repeat Request)?",
    correcta: "Un mecanismo de control de errores que solicita la retransmisión de datos cuando se detecta que un paquete ha llegado corrupto",
    incorrectas: [
      "Un sistema que aumenta la potencia de la antena si la señal es débil",
      "Un protocolo para asignar direcciones IP automáticamente"
    ]
  },
  {
    enunciado: "¿Qué función realiza la subcapa MAC (Media Access Control) en el nivel de enlace?",
    correcta: "Gestionar el acceso físico al medio compartido y controlar el direccionamiento físico (direcciones hardware)",
    incorrectas: [
      "Controlar el flujo de datos entre aplicaciones finales",
      "Comprimir los datos antes de enviarlos por el cable"
    ]
  },
  {
    enunciado: "¿Qué es la atenuación en un medio de transmisión?",
    correcta: "La pérdida progresiva de potencia de la señal a medida que se propaga por el medio",
    incorrectas: [
      "El cambio de frecuencia de la señal por el efecto Doppler",
      "La suma de señales externas que distorsionan el mensaje"
    ]
  },
  {
    enunciado: "¿Qué tipo de cable utiliza conectores BNC y se usaba en redes Ethernet 10Base2?",
    correcta: "Cable coaxial",
    incorrectas: [
      "Cable de par trenzado UTP",
      "Fibra óptica plástica"
    ]
  },
  {
    enunciado: "¿Qué es la codificación Manchester?",
    correcta: "Un método de codificación de línea donde cada bit tiene al menos una transición en mitad del intervalo, facilitando la sincronización",
    incorrectas: [
      "Un sistema de cifrado usado en la segunda guerra mundial",
      "Una modulación usada para transmitir datos por satélite"
    ]
  },
  {
    enunciado: "¿Qué significa que un medio de transmisión sea no guiado?",
    correcta: "Que la señal se propaga a través del aire, el vacío o el agua sin un soporte físico sólido (ej. radio, infrarrojos)",
    incorrectas: [
      "Que los paquetes de datos no saben a qué dirección IP ir",
      "Que el cable no tiene blindaje ni malla protectora"
    ]
  },
  {
    enunciado: "¿Qué es el ancho de banda analógico?",
    correcta: "El rango de frecuencias (fmax - fmin) que un medio es capaz de transmitir sin una atenuación excesiva",
    incorrectas: [
      "La velocidad máxima de descarga de un usuario en Mbps",
      "El número de cables que hay en una manguera de datos"
    ]
  },
  {
    enunciado: "¿Qué es la paridad par?",
    correcta: "Un bit adicional que se añade a un grupo de datos para que el número total de unos sea siempre par, permitiendo detectar errores simples",
    incorrectas: [
      "Un sistema para enviar dos archivos al mismo tiempo",
      "La conexión de dos módems en paralelo para sumar velocidad"
    ]
  },
  {
    enunciado: "¿Qué es un Bridge (Puente) en el contexto de redes?",
    correcta: "Un dispositivo de interconexión que opera en la capa 2 del modelo OSI y filtra el tráfico basado en direcciones MAC",
    incorrectas: [
      "Un cable que une dos edificios a gran distancia",
      "Un servidor que traduce nombres de dominio a IPs"
    ]
  },
  {
    enunciado: "¿En qué consiste la multiplexación TDM (Time Division Multiplexing)?",
    correcta: "En asignar a cada canal de baja velocidad una ranura de tiempo exclusiva en un canal de alta velocidad",
    incorrectas: [
      "En enviar cada bit por un cable diferente al mismo tiempo",
      "En cambiar el color de la luz para cada usuario en la fibra"
    ]
  },
  {
    enunciado: "¿Qué es la impedancia característica de un cable de datos?",
    correcta: "La oposición que presenta el cable al paso de una corriente alterna de alta frecuencia, dependiente de su geometría y materiales",
    incorrectas: [
      "La resistencia óhmica medida con un polímetro en corriente continua",
      "La capacidad del cable para estirarse sin romperse"
    ]
  },
  {
    enunciado: "¿Qué función tiene el preámbulo en una trama Ethernet?",
    correcta: "Sincronizar los relojes del emisor y el receptor antes de que comience la transmisión de los datos reales",
    incorrectas: [
      "Contener la contraseña de acceso a la red",
      "Indicar el tamaño total del archivo que se va a descargar"
    ]
  },
  {
    enunciado: "¿Qué es el 'Handshaking' o establecimiento de comunicación?",
    correcta: "El intercambio de señales de control iniciales para acordar los parámetros de la transmisión antes del envío de datos",
    incorrectas: [
      "El saludo que aparece al encender el sistema operativo",
      "La desconexión segura de un dispositivo USB"
    ]
  },
  {
    enunciado: "¿Qué es el BER (Bit Error Rate)?",
    correcta: "La relación entre el número de bits recibidos con error y el número total de bits transmitidos",
    incorrectas: [
      "La velocidad real de una conexión de fibra óptica",
      "El tiempo que tarda un bit en recorrer un kilómetro de cable"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene la fibra óptica sobre el par de cobre respecto a la seguridad?",
    correcta: "Es extremadamente difícil de intervenir sin ser detectado, ya que no emite radiación electromagnética",
    incorrectas: [
      "Es imposible de cortar incluso con herramientas profesionales",
      "Los datos viajan de forma cifrada por naturaleza física"
    ]
  },
  {
    enunciado: "¿Qué es la modulación BPSK?",
    correcta: "Modulación por desplazamiento de fase binaria, donde se usan dos fases separadas 180° para representar el 0 y el 1",
    incorrectas: [
      "Un sistema para comprimir archivos de audio sin pérdida",
      "Una técnica para alimentar dispositivos a través del cable de red"
    ]
  },
  {
    enunciado: "¿Qué dispositivo se encarga de convertir señales digitales en analógicas para su transmisión por líneas telefónicas básicas?",
    correcta: "Módem",
    incorrectas: [
      "Switch",
      "Hub"
    ]
  },
  {
    enunciado: "¿Qué es la trama (Frame) en comunicaciones?",
    correcta: "La unidad de datos de la capa de enlace que incluye información de control, direcciones físicas y detección de errores",
    incorrectas: [
      "El esquema eléctrico de un armario de comunicaciones",
      "La estructura metálica donde se sujetan los equipos"
    ]
  },
  {
    enunciado: "¿Qué ocurre en una red de bus si no se colocan terminadores en los extremos?",
    correcta: "La señal se refleja al llegar al final del cable, provocando interferencias y errores de datos",
    incorrectas: [
      "La electricidad se escapa por las puntas del cable",
      "La red funciona más rápido al no tener resistencia"
    ]
  },
  {
    enunciado: "¿Qué define el estándar IEEE 802.11?",
    correcta: "Las especificaciones para redes de área local inalámbricas (WLAN)",
    incorrectas: [
      "El cableado estructurado en edificios comerciales",
      "La transmisión de televisión digital terrestre"
    ]
  }
];