// temarios/06-configuracion-y-calculo-de-telefonia-e-intercomunicacion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué función cumple el Punto de Interconexión situado en el RITI en una instalación de telefonía ICT?",
    correcta: "Es el punto donde se conectan las redes del operador con la red de distribución interior del edificio",
    incorrectas: [
      "Es el lugar donde se realiza la conmutación de llamadas entre viviendas",
      "Es el equipo encargado de digitalizar la voz mediante PCM"
    ]
  },
  {
    enunciado: "¿Qué redes forman la estructura interior de telefonía desde el edificio hasta el usuario?",
    correcta: "Red de distribución, red de dispersión y red interior de usuario desde el PAU a las BAT",
    incorrectas: [
      "Red de transporte, red troncal y red de acceso internacional",
      "Red de conmutación, red de señalización y red de potencia"
    ]
  },
  {
    enunciado: "¿Qué tipo de cables pueden emplearse en la red de distribución de telefonía según ICT?",
    correcta: "Cables de pares, fibra óptica o coaxial según el servicio implantado",
    incorrectas: [
      "Únicamente cable coaxial por ser el estándar de telefonía",
      "Solo fibra óptica monomodo, quedando prohibido el par de cobre"
    ]
  },
  {
    enunciado: "¿Qué criterio se utiliza para calcular el número de pares necesarios en una red de telefonía en edificios?",
    correcta: "El número de estancias o usuarios previstos, aplicando coeficientes de reserva",
    incorrectas: [
      "La potencia eléctrica de los terminales telefónicos",
      "La longitud total de las canalizaciones del edificio"
    ]
  },
  {
    enunciado: "¿Qué porcentaje de reserva es habitual aplicar en el dimensionado de la red de pares?",
    correcta: "Un valor aproximado del 20% para futuras ampliaciones o demandas",
    incorrectas: [
      "Un 5% fijo determinado por el REBT",
      "Un 50% obligatorio en cualquier edificio"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta la telefonía IP frente a la telefonía tradicional en edificios?",
    correcta: "La integración sobre redes de datos y la gestión flexible mediante servidores IP-PBX",
    incorrectas: [
      "La eliminación total de retardos y pérdidas de paquetes",
      "La necesidad de un par de cobre dedicado por terminal"
    ]
  },
  {
    enunciado: "¿Para qué se configuran VLANs de voz en redes LAN con telefonía IP?",
    correcta: "Para priorizar el tráfico de voz mediante mecanismos de calidad de servicio (QoS)",
    incorrectas: [
      "Para aumentar la impedancia de los terminales SIP",
      "Para sustituir la necesidad de servidores PBX"
    ]
  },
  {
    enunciado: "¿Qué función cumple un servidor IP-PBX?",
    correcta: "Gestionar extensiones, llamadas y servicios de telefonía IP dentro de la red",
    incorrectas: [
      "Realizar la multiplexación WDM en fibra óptica",
      "Alimentar eléctricamente los teléfonos analógicos"
    ]
  },
  {
    enunciado: "¿Qué protocolo es habitual en terminales de telefonía IP para el establecimiento de llamadas?",
    correcta: "El protocolo SIP",
    incorrectas: [
      "SS7",
      "DTMF"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de una placa de calle en un sistema de intercomunicación?",
    correcta: "Permitir la comunicación y llamada desde el exterior hacia las viviendas o unidades interiores",
    incorrectas: [
      "Realizar la conmutación entre centrales telefónicas",
      "Amplificar la señal de telefonía IP"
    ]
  },
  {
    enunciado: "¿Qué elementos suele integrar una placa de calle moderna de videoportería?",
    correcta: "Módulo fónico, cámara y sistema de llamada mediante pulsadores o teclado",
    incorrectas: [
      "Servidor PBX y router Ethernet",
      "Amplificador monocanal y filtro LTE"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un sistema de intercomunicación 4+N?",
    correcta: "Cuatro hilos comunes más un hilo de llamada individual por vivienda",
    incorrectas: [
      "Un único par no polarizado para todos los servicios",
      "Cuatro pares dedicados por cada vivienda"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta un sistema 1+N frente al sistema 4+N?",
    correcta: "Reduce el número de hilos mediante técnicas de codificación",
    incorrectas: [
      "Permite transmitir vídeo digital sin pérdidas por fibra",
      "Elimina la necesidad de alimentadores"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los sistemas digitales de bus de 2 hilos en videoportería?",
    correcta: "Transmiten alimentación, datos y audio/vídeo por un solo par no polarizado",
    incorrectas: [
      "Requieren un hilo de llamada independiente por usuario",
      "Funcionan únicamente con cable coaxial"
    ]
  },
  {
    enunciado: "¿Por qué es importante calcular la caída de tensión en sistemas de intercomunicación?",
    correcta: "Para asegurar que el receptor más alejado funcione dentro de su rango de tensión",
    incorrectas: [
      "Para ajustar la ganancia de la cámara de vídeo",
      "Para calcular el número de pares del RITI"
    ]
  },
  {
    enunciado: "¿En qué situación suele darse el máximo consumo en un sistema de portero o videoportero?",
    correcta: "Durante la activación del abrepuertas",
    incorrectas: [
      "En reposo sin llamadas",
      "Durante la marcación de un número telefónico"
    ]
  },
  {
    enunciado: "¿Para qué se emplean resistencias de fin de línea en buses digitales de intercomunicación?",
    correcta: "Para evitar reflexiones de señal y asegurar una transmisión estable",
    incorrectas: [
      "Para aumentar la potencia del alimentador",
      "Para seleccionar la vivienda llamada"
    ]
  },
  {
    enunciado: "¿Qué factores influyen en la atenuación de una instalación de videoportería?",
    correcta: "Las pérdidas en distribuidores, derivadores y la atenuación propia del cable",
    incorrectas: [
      "La impedancia acústica del altavoz interior",
      "El número de pulsadores de la placa de calle"
    ]
  },
  {
    enunciado: "¿Qué elemento de la ICT se dimensiona en función del número de cables y su sección?",
    correcta: "Las canalizaciones y el diámetro de los tubos",
    incorrectas: [
      "La frecuencia de muestreo de la voz",
      "La potencia del repetidor de telefonía"
    ]
  },
  {
    enunciado: "¿Qué recintos forman parte de la ICT para telefonía en edificios?",
    correcta: "RITI, RITS y registros secundarios y de enlace",
    incorrectas: [
      "Cuartos de contadores y salas de calderas",
      "Únicamente el PAU de cada vivienda"
    ]
  },
  {
    enunciado: "¿Qué regula el Anexo I del Real Decreto 346/2011 en relación con la telefonía?",
    correcta: "Las especificaciones técnicas de los servicios de telefonía disponible al público",
    incorrectas: [
      "La señalización SS7 entre centrales",
      "La codificación de voz G.711"
    ]
  },
  {
    enunciado: "¿Qué establece el Anexo III del Real Decreto 346/2011?",
    correcta: "Las especificaciones de canalizaciones, registros y recintos de la ICT",
    incorrectas: [
      "Los protocolos de VoIP sobre Ethernet",
      "Las jerarquías digitales PDH y SDH"
    ]
  },
  {
    enunciado: "¿Qué categoría mínima de cable se indica habitualmente para redes de datos y telefonía IP en ICT?",
    correcta: "Categoría 5e o superior",
    incorrectas: [
      "Categoría 3 exclusivamente",
      "Cable coaxial de 75 ohmios"
    ]
  },
  {
    enunciado: "¿Qué norma UNE regula los sistemas de intercomunicación para edificios?",
    correcta: "La norma UNE-EN 62820",
    incorrectas: [
      "UNE-EN 60728",
      "UNE 21153"
    ]
  },
  {
    enunciado: "¿Qué ITC del REBT se relaciona con las fuentes de alimentación de porteros y videoporteros?",
    correcta: "ITC-BT-44",
    incorrectas: [
      "ITC-BT-08",
      "ITC-BT-28"
    ]
  },
  {
    enunciado: "¿Qué ITC del REBT afecta a los circuitos de muy baja tensión de seguridad usados en intercomunicación?",
    correcta: "ITC-BT-19",
    incorrectas: [
      "ITC-BT-15",
      "ITC-BT-44"
    ]
  },
  {
    enunciado: "¿Qué exige el DB-SUA del Código Técnico de la Edificación en sistemas de intercomunicación?",
    correcta: "Condiciones de accesibilidad, como bucles magnéticos y señalización visual",
    incorrectas: [
      "Niveles mínimos de señal telefónica en toma",
      "La obligatoriedad de sistemas IP en todas las viviendas"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene la Ley 31/1995 en trabajos de instalación de telefonía e intercomunicación?",
    correcta: "Garantizar la seguridad y prevención de riesgos durante el montaje de canalizaciones y cableado",
    incorrectas: [
      "Regular la numeración telefónica de los usuarios",
      "Definir los protocolos de señalización VoIP"
    ]
  }
];
