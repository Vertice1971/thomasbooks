// temarios/05-sistemas-de-telefonia-estructura-conmutacion-y-transmision.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por red de acceso o bucle de abonado en la red telefónica?",
    correcta: "La conexión física entre el terminal del usuario y la central local de la operadora",
    incorrectas: [
      "La red de enlaces internacionales entre centrales de nudo",
      "El sistema de señalización entre centrales mediante SS7"
    ]
  },
  {
    enunciado: "¿Cuál ha sido la evolución principal del bucle de abonado en los últimos años?",
    correcta: "El paso del par de cobre (RTB/ADSL) a la fibra óptica hasta el hogar (FTTH)",
    incorrectas: [
      "La sustitución del par de cobre por radioenlaces de microondas domésticos",
      "El abandono total de la telefonía fija en favor de la telefonía móvil"
    ]
  },
  {
    enunciado: "¿Qué función cumple la red de agregación o transporte en la telefonía?",
    correcta: "Interconectar centrales locales con niveles superiores dentro de una estructura jerárquica",
    incorrectas: [
      "Conectar directamente los terminales de los usuarios entre sí",
      "Codificar la voz mediante PCM a 64 kb/s"
    ]
  },
  {
    enunciado: "¿Qué tipo de centrales forman parte de la jerarquía de la red telefónica clásica?",
    correcta: "Centrales locales, primarias, secundarias y de nudo",
    incorrectas: [
      "Centrales analógicas, digitales y virtuales únicamente",
      "Centrales LTE, 5G y satélite"
    ]
  },
  {
    enunciado: "¿En qué se basan los teléfonos analógicos tradicionales?",
    correcta: "En una impedancia estándar del orden de 600 ohmios",
    incorrectas: [
      "En transmisión por paquetes IP sobre Ethernet",
      "En modulación digital con muestreo a 8 kHz"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal existe entre terminales analógicos y terminales IP?",
    correcta: "Los IP convierten la voz en datos y la transmiten mediante redes de paquetes",
    incorrectas: [
      "Los analógicos solo funcionan sobre fibra óptica",
      "Los IP requieren un canal físico dedicado durante toda la llamada"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los repartidores y puntos de terminación de red (PTR/PAU)?",
    correcta: "Permitir la interconexión, prueba y delimitación entre red del operador y red interior del usuario",
    incorrectas: [
      "Realizar la conmutación automática de llamadas entrantes",
      "Codificar la voz según el estándar G.711"
    ]
  },
  {
    enunciado: "¿Qué es la conmutación en un sistema telefónico?",
    correcta: "El proceso de establecer un camino físico o lógico entre dos terminales",
    incorrectas: [
      "La amplificación de la señal de voz en el bucle de abonado",
      "La multiplexación por división en frecuencia de varios canales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la conmutación de circuitos en la RTC?",
    correcta: "La reserva de un canal físico dedicado durante toda la comunicación",
    incorrectas: [
      "El envío de la voz en paquetes independientes sin camino fijo",
      "La compartición dinámica del canal entre múltiples usuarios"
    ]
  },
  {
    enunciado: "¿Cuál es una limitación clásica de la conmutación de circuitos?",
    correcta: "El uso ineficiente de recursos cuando no hay transmisión de voz",
    incorrectas: [
      "La imposibilidad de garantizar calidad de servicio",
      "La incapacidad de establecer llamadas internacionales"
    ]
  },
  {
    enunciado: "¿Qué principio básico define la conmutación de paquetes en VoIP?",
    correcta: "La fragmentación de la información en paquetes con cabeceras de direccionamiento",
    incorrectas: [
      "La asignación permanente de un circuito dedicado",
      "La transmisión analógica sin codificación digital"
    ]
  },
  {
    enunciado: "¿Qué ventaja principal aporta la VoIP frente a la telefonía clásica?",
    correcta: "Un uso más eficiente de la red al compartir recursos y converger con datos",
    incorrectas: [
      "La eliminación total de retardos y pérdidas de paquetes",
      "La necesidad de líneas físicas exclusivas por llamada"
    ]
  },
  {
    enunciado: "¿Qué sucede en la señalización de línea de abonado al descolgar un teléfono analógico?",
    correcta: "Se produce el cierre del bucle, indicando a la central que hay petición de servicio",
    incorrectas: [
      "Se envía directamente señalización SS7 a otras centrales",
      "Se inicia la multiplexación TDM de la voz"
    ]
  },
  {
    enunciado: "¿Qué sistema de marcación emplea tonos audibles para identificar dígitos?",
    correcta: "La marcación por tonos DTMF",
    incorrectas: [
      "La marcación por pulsos",
      "La señalización SS7"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza el sistema de señalización SS7?",
    correcta: "Para la gestión de llamadas y servicios entre centrales de la red",
    incorrectas: [
      "Para transportar directamente la voz de los usuarios",
      "Para alimentar eléctricamente los terminales analógicos"
    ]
  },
  {
    enunciado: "¿Qué servicios permite gestionar SS7 además del establecimiento de llamadas?",
    correcta: "Roaming, tarificación, servicios inteligentes y control de red",
    incorrectas: [
      "Ecualización de la voz y cancelación de eco en terminales",
      "Multiplexación WDM en fibra óptica"
    ]
  },
  {
    enunciado: "¿Qué es una PBX o centralita privada?",
    correcta: "Un sistema que gestiona extensiones internas y enlaces externos de una organización",
    incorrectas: [
      "Una central pública de tránsito internacional",
      "Un equipo exclusivo para transmisión por radioenlaces"
    ]
  },
  {
    enunciado: "¿Qué tipos de enlaces externos puede gestionar una PBX moderna?",
    correcta: "Enlaces analógicos, RDSI y troncales SIP",
    incorrectas: [
      "Únicamente enlaces de microondas",
      "Solo enlaces de fibra WDM de larga distancia"
    ]
  },
  {
    enunciado: "¿Qué limitaciones presenta el par de cobre como soporte de transmisión?",
    correcta: "Atenuación y diafonía que limitan la distancia y la capacidad",
    incorrectas: [
      "Imposibilidad de transportar señales analógicas",
      "Necesidad obligatoria de multiplexación WDM"
    ]
  },
  {
    enunciado: "¿En qué principio físico se basa la transmisión por fibra óptica?",
    correcta: "En la reflexión total interna de la luz dentro del núcleo",
    incorrectas: [
      "En la inducción electromagnética entre pares",
      "En la radiación de microondas guiadas"
    ]
  },
  {
    enunciado: "¿Qué permite la técnica WDM en fibra óptica?",
    correcta: "Transmitir múltiples longitudes de onda simultáneamente por una misma fibra",
    incorrectas: [
      "Reducir la impedancia característica de la fibra",
      "Eliminar la necesidad de repetidores ópticos"
    ]
  },
  {
    enunciado: "¿Para qué se utilizan radioenlaces de microondas en telefonía?",
    correcta: "Para enlaces troncales o zonas donde no es viable el tendido de cable",
    incorrectas: [
      "Para sustituir la señalización SS7",
      "Para la conexión directa de teléfonos analógicos domésticos"
    ]
  },
  {
    enunciado: "¿Qué es la multiplexación por división en frecuencia (FDM)?",
    correcta: "Una técnica que asigna bandas de frecuencia distintas a cada canal",
    incorrectas: [
      "Una técnica basada en ranuras temporales sucesivas",
      "Un método exclusivo de transmisión por fibra óptica"
    ]
  },
  {
    enunciado: "¿Qué técnica de multiplexación es la base de la telefonía digital clásica?",
    correcta: "La multiplexación por división en el tiempo (TDM)",
    incorrectas: [
      "La multiplexación por división en frecuencia (FDM)",
      "La multiplexación por división en longitud de onda (WDM)"
    ]
  },
  {
    enunciado: "¿En qué consiste la modulación PCM utilizada en telefonía digital?",
    correcta: "En muestrear y cuantificar la señal de voz para transmitirla como datos digitales",
    incorrectas: [
      "En transmitir la voz sin muestreo en forma analógica",
      "En dividir la señal en paquetes IP"
    ]
  },
  {
    enunciado: "¿Qué frecuencia de muestreo estándar se utiliza en telefonía digital según Nyquist?",
    correcta: "8 kHz",
    incorrectas: [
      "4 kHz",
      "44,1 kHz"
    ]
  },
  {
    enunciado: "¿Cuántos bits se emplean en la cuantificación estándar de la voz en PCM telefónico?",
    correcta: "8 bits por muestra",
    incorrectas: [
      "4 bits por muestra",
      "16 bits por muestra"
    ]
  },
  {
    enunciado: "¿Qué velocidad de transmisión resulta de la digitalización estándar de la voz telefónica?",
    correcta: "64 kb/s por canal",
    incorrectas: [
      "128 kb/s por canal",
      "32 kb/s por canal"
    ]
  },
  {
    enunciado: "¿Qué es un flujo E1 en la jerarquía PDH?",
    correcta: "Un enlace digital de 2,048 Mb/s que agrupa 32 canales",
    incorrectas: [
      "Un enlace óptico de 155 Mb/s",
      "Un canal individual de voz PCM"
    ]
  },
  {
    enunciado: "¿Qué limitación principal presenta la jerarquía PDH?",
    correcta: "La falta de sincronismo exacto y menor flexibilidad de gestión",
    incorrectas: [
      "La imposibilidad de transportar voz digital",
      "La incompatibilidad con fibra óptica"
    ]
  },
  {
    enunciado: "¿Qué mejora introduce la jerarquía SDH frente a PDH?",
    correcta: "Mayor sincronización, capacidad de gestión y redundancia",
    incorrectas: [
      "Menor velocidad de transmisión",
      "Uso exclusivo de par de cobre"
    ]
  },
  {
    enunciado: "¿Qué velocidad binaria tiene un STM-1 en SDH?",
    correcta: "155 Mb/s aproximadamente",
    incorrectas: [
      "2,048 Mb/s",
      "64 kb/s"
    ]
  },
  {
    enunciado: "¿Qué estándar de la UIT-T define la codificación de voz más básica en telefonía?",
    correcta: "G.711",
    incorrectas: [
      "G.703",
      "Q.931"
    ]
  },
  {
    enunciado: "¿Qué regulan de forma general las recomendaciones de la serie Q de la UIT-T?",
    correcta: "La conmutación y señalización en redes telefónicas",
    incorrectas: [
      "La transmisión óptica por WDM",
      "La puesta a tierra de infraestructuras"
    ]
  },
  {
    enunciado: "¿Qué marco legal básico regula las telecomunicaciones en España actualmente?",
    correcta: "La Ley 11/2022, General de Telecomunicaciones",
    incorrectas: [
      "La Ley 31/1995 de Prevención de Riesgos Laborales",
      "El Código Técnico de la Edificación"
    ]
  },
  {
    enunciado: "¿Qué define el Real Decreto 346/2011 en relación con la telefonía en edificios?",
    correcta: "La infraestructura de ICT para servicios de telefonía y banda ancha",
    incorrectas: [
      "Los protocolos SS7 entre centrales internacionales",
      "La jerarquía PDH y SDH"
    ]
  },
  {
    enunciado: "¿Qué aspectos detalla la Orden ITC/1644/2011 en la red interior de telefonía?",
    correcta: "Especificaciones técnicas de cables y protocolos de prueba",
    incorrectas: [
      "El cálculo de BER y MER en enlaces digitales",
      "La señalización por tonos DTMF"
    ]
  },
  {
    enunciado: "¿Qué ITC del REBT regula requisitos de seguridad en la alimentación de equipos de telecomunicaciones?",
    correcta: "ITC-BT-44",
    incorrectas: [
      "ITC-BT-08",
      "ITC-BT-28"
    ]
  },
  {
    enunciado: "¿Qué ITC del REBT se relaciona con la puesta a tierra de infraestructuras metálicas de la red?",
    correcta: "ITC-BT-08",
    incorrectas: [
      "ITC-BT-15",
      "ITC-BT-44"
    ]
  },
  {
    enunciado: "¿Por qué son relevantes los estándares IEEE 802.3 en telefonía IP?",
    correcta: "Porque definen Ethernet, base de las redes locales sobre las que se implementa VoIP",
    incorrectas: [
      "Porque regulan la señalización SS7",
      "Porque definen la codificación PCM de la voz"
    ]
  }
];
