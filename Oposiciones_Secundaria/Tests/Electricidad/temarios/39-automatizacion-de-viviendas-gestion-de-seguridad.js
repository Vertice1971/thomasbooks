// 39-automatizacion-de-viviendas-gestion-de-seguridad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué dos tipos de seguridad gestiona la domótica?",
    correcta: "Seguridad de bienes y personas (intrusión/robo) y Seguridad técnica (incidencias del hogar: fugas, incendios)",
    incorrectas: [
      "Seguridad informática y Seguridad social",
      "Seguridad privada y pública"
    ]
  },
  {
    enunciado: "¿Qué es un detector volumétrico (PIR)?",
    correcta: "Un sensor de Infrarrojos Pasivo que detecta el movimiento por el cambio de calor (radiación IR) en un volumen determinado",
    incorrectas: [
      "Un sensor que mide el volumen de la música",
      "Un sensor de peso en el suelo"
    ]
  },
  {
    enunciado: "¿Qué es un contacto magnético (Reed switch)?",
    correcta: "Un sensor formado por dos piezas (imán en puerta/ventana y contacto en marco) que se abre/cierra al separarlas, detectando apertura perimetral",
    incorrectas: [
      "Un imán de nevera",
      "Un sistema para cerrar puertas"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre detector de humo óptico y iónico?",
    correcta: "El óptico detecta el humo visible (dispersión de luz) y es común en hogares; el iónico (casi prohibido) detectaba partículas invisibles por ionización",
    incorrectas: [
      "El óptico lleva cámaras",
      "El iónico usa iones de litio"
    ]
  },
  {
    enunciado: "¿Qué es una electroválvula de corte de gas?",
    correcta: "Un dispositivo de seguridad que cierra el suministro de gas automáticamente al recibir señal de un detector de fuga, y normalmente requiere rearme manual",
    incorrectas: [
      "Una válvula para regar el jardín",
      "Una llave manual normal"
    ]
  },
  {
    enunciado: "¿Qué es una electroválvula de corte de agua?",
    correcta: "Similar a lad el gas, corta el suministro general de agua al detectar inundación mediante sondas de humedad en el suelo",
    incorrectas: [
      "Un grifo automático",
      "Una bomba de agua"
    ]
  },
  {
    enunciado: "¿Que característica debe tener la electroválvula de gas por seguridad?",
    correcta: "Debe ser normalmente cerrada (o biestable) y de rearme manual, para obligar a verificar la fuga antes de volver a abrir",
    incorrectas: [
      "Debe abrirse sola al rato",
      "Debe ser de plástico"
    ]
  },
  {
    enunciado: "¿Qué es la simulación de presencia?",
    correcta: "Una función domótica que enciende luces y sube persianas aleatoriamente cuando la casa está vacía para disuadir a ladrones",
    incorrectas: [
      "Poner un maniquí en el sofá",
      "Dejar la TV encendida siempre"
    ]
  },
  {
    enunciado: "¿Qué es un detector de rotura de cristal?",
    correcta: "Un sensor acústico calibrado para detectar la frecuencia específica del sonido de cristales rompiéndose",
    incorrectas: [
      "Un sensor de presión en el cristal",
      "Un cristal blindado"
    ]
  },
  {
    enunciado: "¿Qué es la zona 24 horas en una alarma?",
    correcta: "Una zona que está siempre activa y vigilante, incluso con la alarma desarmada (ej. detectores de humo, botón de pánico, sabotaje)",
    incorrectas: [
      "Una tienda abierta 24h",
      "La zona del dormitorio"
    ]
  },
  {
    enunciado: "¿Qué es el contacto de Tamper o Sabotaje?",
    correcta: "Un microinterruptor en la carcasa de los sensores y la centralita que dispara la alarma si alguien intenta abrirlos o arrancarlos",
    incorrectas: [
      "Un contacto auxiliar para luces",
      "El botón de encendido"
    ]
  },
  {
    enunciado: "¿Qué tipo de cable se recomienda para alarmas cableadas?",
    correcta: "Manguera apantallada de varios hilos (ej. 4 o 6 hilos x 0.22mm²) para alimentación, señal y tamper, protegiendo de falsas alarmas",
    incorrectas: [
      "Cable coaxial de antena",
      "Cable eléctrico de 2.5mm"
    ]
  },
  {
    enunciado: "¿Qué es un detector de doble tecnología?",
    correcta: "Un sensor que combina Infrarrojos (PIR) y Microondas; solo dispara si ambas tecnologías detectan movimiento, reduciendo falsas alarmas",
    incorrectas: [
      "Un sensor que vale el doble",
      "Un sensor con dos lentes"
    ]
  },
  {
    enunciado: "¿Qué significan las siglas CRA?",
    correcta: "Central Receptora de Alarmas: centro de control 24h que recibe los avisos, verifica por vídeo/audio y avisa a la policía",
    incorrectas: [
      "Centro de Reparación Automática",
      "Casa Real Antigua"
    ]
  },
  {
    enunciado: "¿Qué es el botón de pánico o SOS?",
    correcta: "Un pulsador (físico o en mando/app) que dispara la alarma inmediata y silenciosa o sonora en caso de agresión o emergencia médica",
    incorrectas: [
      "El botón de reset",
      "Para pedir pizza"
    ]
  },
  {
    enunciado: "¿Qué es el armado perimetral o modo noche?",
    correcta: "Armar solo los sensores exteriores y de puertas/ventanas, permitiendo moverse libremente por el interior de la casa mientras se duerme",
    incorrectas: [
      "Armar a los vecinos",
      "Apagar las luces de fuera"
    ]
  },
  {
    enunciado: "¿Cómo debe instalarse una sirena exterior?",
    correcta: "En lugar visible y de difícil acceso (altura), con batería propia autoalimentada para sonar si cortan el cable",
    incorrectas: [
      "A ras de suelo",
      "Escondida dentro de un arbusto"
    ]
  },
  {
    enunciado: "¿Qué es la video-verificación?",
    correcta: "El envío de clips de vídeo o imágenes a la CRA o al móvil del usuario cuando salta un sensor, para confirmar si es una intrusión real",
    incorrectas: [
      "Ver la tele en la alarma",
      "Una videollamada"
    ]
  },
  {
    enunciado: "¿Dónde se deben colocar los detectores de humo?",
    correcta: "En el techo (el humo sube), preferiblemente en pasillos, distribuidores y zonas de riesgo, evitando cocinas/baños (falsas alarmas por vapor)",
    incorrectas: [
      "En el suelo",
      "Detrás de las cortinas"
    ]
  },
  {
    enunciado: "¿Qué es un detector de monóxido de carbono (CO)?",
    correcta: "Un sensor vital que detecta este gas inodoro y mortal producido por mala combustión (calderas, estufas); se coloca a media altura o techo",
    incorrectas: [
      "Un detector de dióxido de carbono (CO2)",
      "Un detector de pedos"
    ]
  },
  {
    enunciado: "¿Qué es una resistencia de fin de línea (EOL)?",
    correcta: "Una resistencia colocada dentro del sensor que permite a la centralita supervisar el cableado y distinguir entre reposo, alarma y corte de línea/cortocircuito",
    incorrectas: [
      "Una resistencia para calentar el sensor",
      "No sirve para nada"
    ]
  },
  {
    enunciado: "¿Qué es una barrera de infrarrojos activa?",
    correcta: "Un sistema perimetral con emisor y receptor enfrentados que crea haces invisibles; salta si alguien cruza e interrumpe los haces",
    incorrectas: [
      "Una valla eléctrica",
      "Una barrera de parking"
    ]
  },
  {
    enunciado: "¿Qué es la seguridad anti-inhibitores de frecuencia?",
    correcta: "Sistemas cableados (inmunes) o inalámbricos con detección de interferencias (jamming) que avisan por vía alternativa (ej. Ethernet/Sigfox) si inhiben el GSM",
    incorrectas: [
      "Un imán potente",
      "Papel de aluminio"
    ]
  },
  {
    enunciado: "¿Qué es el código de coacción?",
    correcta: "Un código especial que desarma la alarma aparentemente normal pero envía un aviso silencioso de atraco a la CRA",
    incorrectas: [
      "El código PIN de la tarjeta",
      "Un código falso que no hace nada"
    ]
  },
  {
    enunciado: "¿Qué es la teleasistencia domótica?",
    correcta: "Sistemas para mayores/dependientes con colgante SOS, detección de caídas o inactividad (no movimiento en X horas) que avisan a familiares",
    incorrectas: [
      "Ver la tele tumbado",
      "Asistencia técnica remota"
    ]
  },
  {
    enunciado: "¿Cómo funcionan las sondas de inundación?",
    correcta: "Por conductividad: tienen dos electrodos a ras de suelo; si el agua los toca, cierra el circuito y da la alarma",
    incorrectas: [
      "Absorben el agua",
      "Flotan como una boya"
    ]
  },
  {
    enunciado: "¿Qué son los Grados de Seguridad (1 a 4) en alarmas?",
    correcta: "Normativa EN 50131. Grado 2: Viviendas/Negocios bajo riesgo (lo normal). Grado 3: Riesgo medio/alto (Joyerías, Bancos, obligado conexión CRA)",
    incorrectas: [
      "Grados de temperatura",
      "Nivel de estudios del vigilante"
    ]
  },
  {
    enunciado: "¿Qué es el 'enmascaramiento' (Anti-masking) en un detector?",
    correcta: "Una función avanzada que detecta si alguien tapa el sensor (con spray, cinta, caja) cuando está desarmado para anularlo luego",
    incorrectas: [
      "Ponerse una máscara",
      "Esconderse del sensor"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requieren los detectores de humo domésticos?",
    correcta: "Aspirar el polvo de la cámara periódicamente y cambiar la pila/batería o sustituir la unidad cada 10 años (caducidad del elemento radiactivo/óptico)",
    incorrectas: [
      "Echarles humo de tabaco para probar",
      "Lavarlos con agua"
    ]
  },
  {
    enunciado: "¿Qué es una cámara IP?",
    correcta: "Una cámara de videovigilancia digital que envía vídeo y audio directamente a través de una red Ethernet/Wi-Fi",
    incorrectas: [
      "Una cámara analógica antigua",
      "Una cámara de fotos instantánea"
    ]
  },
  {
    enunciado: "¿Qué permite la integración de la alarma con la domótica?",
    correcta: "Usar los sensores de movimiento de la alarma para encender luces (ahorro) o bajar persianas automáticamente al armar la alarma",
    incorrectas: [
      "Que la alarma suene con música",
      "Nada, son incompatibles"
    ]
  },
  {
    enunciado: "¿Qué es un sensor sísmico o de vibración?",
    correcta: "Detecta intentos de butrón o golpes fuertes en paredes y cajas fuertes antes de que entren",
    incorrectas: [
      "Detecta terremotos lejanos",
      "Detecta pasos suaves"
    ]
  },
  {
    enunciado: "¿Qué es el SAI de la alarma?",
    correcta: "La batería de respaldo interna en la centralita y sirena que asegura el funcionamiento durante horas si cortan la luz",
    incorrectas: [
      "No lleva batería",
      "Un generador diesel"
    ]
  },
  {
    enunciado: "¿Qué es la protección perimetral exterior?",
    correcta: "Detectar al intruso en el jardín o valla antes de que toque la casa (barreras IR, detectores de exterior, cable sensor en valla)",
    incorrectas: [
      "Poner un perro",
      "Cerrar las ventanas"
    ]
  },
  {
    enunciado: "¿Qué fiabilidad tienen los sistemas de alarma vía radio (inalámbricos) actuales?",
    correcta: "Muy alta (doble vía, encriptados, supervisados), comparable al cable en Grado 2, facilitando la instalación sin obras",
    incorrectas: [
      "Nula, fallan mucho",
      "Solo funcionan cerca del router"
    ]
  },
  {
    enunciado: "¿Qué es el control de acceso biométrico?",
    correcta: "Sistemas que identifican al usuario por rasgos físicos únicos: huella dactilar, iris, reconocimiento facial (sustituye a llaves)",
    incorrectas: [
      "Medir la altura",
      "Pedir el nombre"
    ]
  },
  {
    enunciado: "¿Qué es una cerradura inteligente (Smart Lock)?",
    correcta: "Cerradura motorizada controlable por móvil, teclado o domótica, permitiendo llaves virtuales temporales y registro de entradas",
    incorrectas: [
      "Una cerradura muy dura",
      "Una llave maestra"
    ]
  },
  {
    enunciado: "¿Qué pasa si se corta la línea telefónica fija en una alarma conectada?",
    correcta: "Si no tiene respaldo GPRS/GSM (tarjeta SIM) o IP, queda incomunicada. La mayoría actuales usan doble vía (IP + GPRS)",
    incorrectas: [
      "Explota",
      "Usa señales de humo"
    ]
  },
  {
    enunciado: "¿Qué son las 'zonas ciegas' de un PIR?",
    correcta: "Áreas que el sensor no ve (debajo de él mismo, detrás de muebles); hay que planificar la ubicación cruzada para cubrirlas",
    incorrectas: [
      "Zonas oscuras",
      "Zonas sin Wi-Fi"
    ]
  },
  {
    enunciado: "¿Qué es el preaviso de alarma?",
    correcta: "Un pitido o aviso local antes de disparar la sirena completa, para avisar al usuario de que ha entrado y debe desarmar",
    incorrectas: [
      "Mandar un email un día antes",
      "Una luz suave"
    ]
  }
];
