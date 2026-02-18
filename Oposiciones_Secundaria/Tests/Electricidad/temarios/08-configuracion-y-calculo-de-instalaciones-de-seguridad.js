// temarios/08-configuracion-y-calculo-de-instalaciones-de-seguridad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué función principal cumple la central de un sistema de intrusión?",
    correcta: "Gestionar zonas, supervisar detectores y coordinar los elementos de aviso y comunicación",
    incorrectas: [
      "Grabar imágenes de las cámaras de seguridad",
      "Controlar el acceso biométrico de usuarios"
    ]
  },
  {
    enunciado: "¿Qué tipo de detector se basa en la detección de variaciones de radiación infrarroja emitida por los cuerpos?",
    correcta: "El detector PIR (infrarrojos pasivos)",
    incorrectas: [
      "El contacto magnético",
      "El detector de rotura de cristal"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta un detector de doble tecnología frente a uno PIR simple?",
    correcta: "Reduce falsas alarmas al requerir confirmación por dos principios físicos distintos",
    incorrectas: [
      "Permite identificar personas mediante biometría",
      "Elimina la necesidad de cableado"
    ]
  },
  {
    enunciado: "¿Qué función tienen los contactos magnéticos en un sistema de intrusión?",
    correcta: "Detectar la apertura de puertas o ventanas",
    incorrectas: [
      "Detectar movimiento volumétrico en interiores",
      "Registrar rotura de cristales por vibración"
    ]
  },
  {
    enunciado: "¿Qué sistemas de comunicación pueden emplearse para transmitir alarmas?",
    correcta: "RTC, GSM/GPRS o IP",
    incorrectas: [
      "HDMI y DisplayPort",
      "Bluetooth y NFC exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal existe entre DVR y NVR?",
    correcta: "El DVR se usa con cámaras analógicas y el NVR con cámaras IP",
    incorrectas: [
      "El DVR graba solo audio y el NVR solo vídeo",
      "El NVR funciona únicamente con fibra óptica"
    ]
  },
  {
    enunciado: "¿Qué tipo de cámara permite movimiento remoto de orientación y zoom?",
    correcta: "La cámara PTZ",
    incorrectas: [
      "La cámara bullet",
      "La cámara fija domo"
    ]
  },
  {
    enunciado: "¿Qué parámetro óptico influye directamente en el ángulo de visión de una cámara?",
    correcta: "La distancia focal del objetivo",
    incorrectas: [
      "La capacidad del disco duro",
      "El grado de seguridad del sistema"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta la compresión H.265 frente a H.264?",
    correcta: "Reduce el espacio de almacenamiento necesario manteniendo calidad similar",
    incorrectas: [
      "Permite mayor alcance infrarrojo",
      "Elimina la necesidad de red IP"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los sistemas de control de acceso?",
    correcta: "Autorizar o denegar el paso de personas a zonas protegidas",
    incorrectas: [
      "Detectar intrusiones perimetrales",
      "Grabar imágenes de seguridad"
    ]
  },
  {
    enunciado: "¿Qué elemento se considera un sistema biométrico de control de acceso?",
    correcta: "Un lector de huella dactilar",
    incorrectas: [
      "Un teclado numérico",
      "Una tarjeta RFID"
    ]
  },
  {
    enunciado: "¿Qué es la zonificación en un sistema de seguridad?",
    correcta: "La división de la instalación en áreas independientes para gestión y control",
    incorrectas: [
      "La selección del grado de seguridad del sistema",
      "El cálculo del consumo eléctrico total"
    ]
  },
  {
    enunciado: "¿Qué grado de seguridad es habitual en viviendas según la normativa?",
    correcta: "Grado 2",
    incorrectas: [
      "Grado 1",
      "Grado 4"
    ]
  },
  {
    enunciado: "¿Qué tipo de instalaciones requieren grado 3 de seguridad?",
    correcta: "Establecimientos con riesgo medio-alto como joyerías o bancos",
    incorrectas: [
      "Viviendas unifamiliares",
      "Locales sin conexión a CRA"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al grado 4 de seguridad?",
    correcta: "Está destinado a infraestructuras críticas de alto riesgo",
    incorrectas: [
      "No requiere baterías de respaldo",
      "No permite conexión a central receptora"
    ]
  },
  {
    enunciado: "¿Qué debe garantizar el diseño de red en un sistema CCTV IP?",
    correcta: "Suficiente ancho de banda y correcta gestión del tráfico",
    incorrectas: [
      "Compatibilidad con señalización SS7",
      "Prioridad de tráfico mediante DTMF"
    ]
  },
  {
    enunciado: "¿Para qué se calcula el balance eléctrico en una instalación de seguridad?",
    correcta: "Para conocer el consumo total y dimensionar correctamente la fuente y baterías",
    incorrectas: [
      "Para ajustar el ángulo de visión de las cámaras",
      "Para definir el grado de seguridad"
    ]
  },
  {
    enunciado: "¿Qué autonomía mínima suelen exigir los sistemas con baterías según el grado de seguridad?",
    correcta: "Entre 12 y 24 horas según el grado",
    incorrectas: [
      "Siempre 2 horas",
      "Solo durante la activación de la alarma"
    ]
  },
  {
    enunciado: "¿Por qué es importante calcular la caída de tensión en líneas de alimentación de detectores o cámaras?",
    correcta: "Para asegurar que los equipos funcionen dentro de su tensión nominal",
    incorrectas: [
      "Para mejorar la resolución de imagen",
      "Para reducir la latencia en la red IP"
    ]
  },
  {
    enunciado: "¿Qué factor se tiene en cuenta al elegir la sección del cable de alimentación?",
    correcta: "La distancia, la corriente consumida y la caída de tensión admisible",
    incorrectas: [
      "El tipo de compresión de vídeo",
      "El protocolo de comunicación IP"
    ]
  },
  {
    enunciado: "¿Para qué se calcula la distancia focal de una cámara en CCTV?",
    correcta: "Para asegurar la identificación de personas o matrículas a una distancia concreta",
    incorrectas: [
      "Para dimensionar la batería del sistema",
      "Para calcular la autonomía del grabador"
    ]
  },
  {
    enunciado: "¿De qué depende principalmente la capacidad de almacenamiento necesaria en un sistema CCTV?",
    correcta: "Del número de cámaras, resolución, compresión y tiempo de conservación",
    incorrectas: [
      "Del grado de seguridad de la alarma",
      "Del tipo de cerradura instalada"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene el cálculo de cobertura de detectores volumétricos?",
    correcta: "Evitar zonas muertas y asegurar detección completa del área protegida",
    incorrectas: [
      "Reducir el consumo eléctrico del sistema",
      "Mejorar la calidad de imagen del CCTV"
    ]
  },
  {
    enunciado: "¿Qué norma regula de forma general la seguridad privada en España?",
    correcta: "La Ley 5/2014 de Seguridad Privada",
    incorrectas: [
      "La Ley 31/1995 de Prevención de Riesgos Laborales",
      "La Ley General de Telecomunicaciones"
    ]
  },
  {
    enunciado: "¿Qué establece la Orden INT/316/2011?",
    correcta: "El funcionamiento de los sistemas de alarma y los grados de seguridad",
    incorrectas: [
      "La codificación de vídeo H.265",
      "La señalización entre centrales de seguridad"
    ]
  },
  {
    enunciado: "¿Qué normativa es crítica en instalaciones de CCTV respecto a protección de datos?",
    correcta: "El RGPD y la LOPDGDD",
    incorrectas: [
      "La UNE-EN 50131",
      "El REBT"
    ]
  },
  {
    enunciado: "¿Cuál es el plazo máximo habitual de conservación de imágenes de CCTV?",
    correcta: "30 días",
    incorrectas: [
      "7 días",
      "90 días"
    ]
  },
  {
    enunciado: "¿Qué serie de normas UNE-EN regula los sistemas de alarma de intrusión?",
    correcta: "La serie UNE-EN 50131",
    incorrectas: [
      "La UNE-EN 62676",
      "La UNE-EN 60839"
    ]
  },
  {
    enunciado: "¿Qué serie de normas UNE-EN se aplica específicamente a sistemas CCTV?",
    correcta: "La serie UNE-EN 62676",
    incorrectas: [
      "La UNE-EN 50131",
      "La UNE-EN 60728"
    ]
  },
  {
    enunciado: "¿Qué norma UNE-EN aborda de forma general los sistemas de seguridad electrónica?",
    correcta: "UNE-EN 60839",
    incorrectas: [
      "UNE-EN 62820",
      "UNE-EN 21153"
    ]
  }
];
