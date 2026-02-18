// 40-automatizacion-de-viviendas-confort.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es una 'Escena' o 'Ambiente' en domótica?",
    correcta: "Una combinación predefinida de estados de varios actuadores (luces, persianas, clima) que se activan con un solo comando (ej. 'Escena Cine': baja luz, baja persiana, enciende TV)",
    incorrectas: [
      "Una obra de teatro en casa",
      "Un fallo del sistema"
    ]
  },
  {
    enunciado: "¿Qué ventaja ofrece el control centralizado de persianas motorizadas?",
    correcta: "Permite subir o bajar todas las persianas de la casa a la vez desde un solo pulsador (ej. al salir) o programarlas por horario, evitando recorrer habitación por habitación",
    incorrectas: [
      "Hace que las persianas pesen menos",
      "No ofrece ventaja, es solo lujo"
    ]
  },
  {
    enunciado: "¿Qué es la regulación de iluminación DALI en el hogar?",
    correcta: "Un protocolo profesional que permite controlar digitalmente cada luminaria individualmente, creando escenas complejas y suaves sin parpadeos",
    incorrectas: [
      "Una marca de bombillas",
      "Un regulador manual de ruedecita"
    ]
  },
  {
    enunciado: "¿Qué es el control por voz (VUI)?",
    correcta: "El uso de asistentes virtuales (Siri, Alexa, Google) para controlar la domótica mediante comandos hablados naturales, mejorando la accesibilidad",
    incorrectas: [
      "Gritar a las luces para que se apaguen",
      "Un mando a distancia con micrófono de karaoke"
    ]
  },
  {
    enunciado: "¿Qué es la función 'Despertador' o 'Amanecer'?",
    correcta: "Una escena programada que sube las persianas y enciende la luz progresivamente a una hora fijada para un despertar natural y suave",
    incorrectas: [
      "Una alarma estridente",
      "Un gallo robótico"
    ]
  },
  {
    enunciado: "¿Qué es el sistema Multiroom de audio?",
    correcta: "La distribución de música por toda la casa, permitiendo escuchar lo mismo en todas partes o cosas distintas en cada habitación, controlado desde el móvil",
    incorrectas: [
      "Tener muchas habitaciones",
      "Poner la radio muy alta"
    ]
  },
  {
    enunciado: "¿Qué es la iluminación Circadiana (HCL - Human Centric Lighting)?",
    correcta: "Adaptar el tono (temperatura de color) e intensidad de la luz artificial a lo largo del día (fría de día, cálida de noche) para respetar el ritmo biológico y mejorar el descanso",
    incorrectas: [
      "Luces de discoteca",
      "Luces circulares"
    ]
  },
  {
    enunciado: "¿Qué es un actuador de 'Toldo con sensor de viento'?",
    correcta: "Un sistema que recoge automáticamente el toldo si detecta viento fuerte (anemómetro) para evitar que se rompa, primando la seguridad sobre el confort",
    incorrectas: [
      "Un toldo que da aire",
      "Un toldo ventilador"
    ]
  },
  {
    enunciado: "¿Qué es el 'Geofencing' o control por geolocalización?",
    correcta: "Usar la ubicación GPS del móvil del usuario para activar escenas automáticamente al acercarse o alejarse de casa (ej. encender calefacción al volver)",
    incorrectas: [
      "Poner una valla física",
      "Buscar tesoros"
    ]
  },
  {
    enunciado: "¿Qué aporta la domótica a las personas con movilidad reducida (Accesibilidad)?",
    correcta: "Autonomía: permite controlar puertas, luces y persianas sin esfuerzo físico, mediante voz o mando adaptado, eliminando barreras",
    incorrectas: [
      "Les da compañía",
      "Les hace la comida"
    ]
  },
  {
    enunciado: "¿Qué es el control 'Todo OFF' al salir?",
    correcta: "Una función básica de confort y tranquilidad que apaga todas las luces y desconecta aparatos peligrosos (plancha, horno) con un solo toque al salir",
    incorrectas: [
      "Desconectar la nevera también",
      "Apagar el sol"
    ]
  },
  {
    enunciado: "¿Qué es un espejo inteligente (Smart Mirror)?",
    correcta: "Un espejo con pantalla integrada que muestra información (tiempo, noticias, agenda) o controla la domótica mientras te aseas",
    incorrectas: [
      "Un espejo que te dice que eres guapo",
      "Un espejo mágico"
    ]
  },
  {
    enunciado: "¿Qué es la integración del videoportero en el móvil?",
    correcta: "Recibir la llamada del timbre en el smartphone, ver quién es y abrir la puerta remotamente, incluso estando fuera de casa",
    incorrectas: [
      "Llevar el interfono en el bolsillo",
      "Ver la TV en el portero"
    ]
  },
  {
    enunciado: "¿Qué es la función de 'Cine en Casa' integrada?",
    correcta: "Al encender el proyector/TV, la domótica baja persianas, apaga luces gradualmente y ajusta el sonido automáticamente",
    incorrectas: [
      "Vender entradas a los amigos",
      "Hacer palomitas"
    ]
  },
  {
    enunciado: "¿Qué es el suelo radiante zonificado?",
    correcta: "Controlar cada circuito de suelo radiante con cabezales electrotérmicos en el colector, permitiendo temperaturas distintas por habitación",
    incorrectas: [
      "Un suelo que brilla",
      "Calentar solo una baldosa"
    ]
  },
  {
    enunciado: "¿Qué es el control RGB o RGBW en iluminación?",
    correcta: "Poder cambiar el color de la luz (LED) para crear atmósferas decorativas o relajantes (cromoterapia)",
    incorrectas: [
      "Rojo, Grande y Bueno",
      "Luces en blanco y negro"
    ]
  },
  {
    enunciado: "¿Qué es un pulsador multifunción o pantalla táctil de estancia?",
    correcta: "Un dispositivo que sustituye a múltiples interruptores convencionales, controlando luces, clima y persianas desde un solo punto estético",
    incorrectas: [
      "Un botón que hace de todo aleatoriamente",
      "Una tablet pegada con celo"
    ]
  },
  {
    enunciado: "¿Qué es la función 'Follow Me' (Sígueme) de música/luz?",
    correcta: "Que la música o la iluminación se active en la habitación donde entras y se apague de donde sales (con sensores)",
    incorrectas: [
      "Que te sigan los paparazzi",
      "Un robot que te persigue"
    ]
  },
  {
    enunciado: "¿Qué es el riego automático inteligente?",
    correcta: "Riego que se adapta a la previsión de lluvia (no riega si va a llover) y a la humedad del suelo, manteniendo el jardín perfecto sin preocupaciones",
    incorrectas: [
      "Regar con agua mineral",
      "Plantas artificiales"
    ]
  },
  {
    enunciado: "¿Qué es la motorización de ventanas (no solo persianas)?",
    correcta: "Motores de cadena que abren oscilobatientes o correderas para ventilar de forma natural y segura (ej. ventilación cruzada nocturna)",
    incorrectas: [
      "Ventanas que andan",
      "Motores de coche en la ventana"
    ]
  },
  {
    enunciado: "¿Qué es la interfaz de usuario (UI) en domótica?",
    correcta: "La App móvil o pantalla desde la que el usuario controla la casa; debe ser intuitiva, rápida y visual para garantizar el confort",
    incorrectas: [
      "Los cables de la pared",
      "El cuadro eléctrico"
    ]
  },
  {
    enunciado: "¿Qué es el modo 'Fiesta'?",
    correcta: "Una escena que enciende luces decorativas, pone música en todas las zonas y ajusta la ventilación/clima para recibir invitados",
    incorrectas: [
      "Tirar confeti",
      "Beber mucho"
    ]
  },
  {
    enunciado: "¿Qué es la detección de CO2 para calidad de aire?",
    correcta: "Sensores que miden la concentración de CO2 (aire viciado) y activan la ventilación mecánica controlada (VMC) automáticamente para renovar aire",
    incorrectas: [
      "Detectar humo de fuego",
      "Abrir la puerta de la calle"
    ]
  },
  {
    enunciado: "¿Qué es el 'Soft Start/Stop' (encendido suave)?",
    correcta: "Encender y apagar las luces progresivamente (rampa) en lugar de golpe, lo que es más agradable a la vista y alarga la vida de las lámparas",
    incorrectas: [
      "Encender con cariño",
      "Un interruptor de espuma"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene el control remoto vía internet (Cloud)?",
    correcta: "Poder controlar y supervisar la casa desde cualquier lugar del mundo (ej. poner la calefacción antes de llegar a la segunda vivienda)",
    incorrectas: [
      "Que la casa está en las nubes",
      "Ninguna, es peligroso"
    ]
  },
  {
    enunciado: "¿Qué es el control gestual?",
    correcta: "Controlar acciones (luz, volumen) mediante gestos de la mano en el aire frente a un sensor, sin tocar nada (higiénico y futurista)",
    incorrectas: [
      "Hacer señas a la cámara",
      "Lenguaje de signos"
    ]
  },
  {
    enunciado: "¿Qué es un actuador de fancoil?",
    correcta: "Un controlador específico para unidades de aire (con ventilador de 3 velocidades y válvulas frío/calor) para climatización precisa",
    incorrectas: [
      "Un ventilador de techo",
      "Un abanico"
    ]
  },
  {
    enunciado: "¿Qué es IFTTT (If This Then That)?",
    correcta: "Una plataforma web que permite conectar servicios dispares (ej. 'Si el pronóstico es lluvia, cierra el toldo' o 'Si recibo un email, parpadea luz')",
    incorrectas: [
      "Un tartamudeo",
      "Un código secreto"
    ]
  },
  {
    enunciado: "¿Qué es la integración de electrodomésticos (Home Connect)?",
    correcta: "Lavadoras, hornos o neveras con Wi-Fi que avisan al móvil cuando terminan, permiten precalentar remoto o ver el interior (cámaras frigo)",
    incorrectas: [
      "Meter la lavadora en el salón",
      "Electrodomésticos de madera"
    ]
  },
  {
    enunciado: "¿Qué es el 'Aspirador Robot' conectado?",
    correcta: "Robot que mapea la casa, limpia programadamente o bajo demanda por voz, y reporta áreas limpiadas al móvil",
    incorrectas: [
      "Una escoba con wifi",
      "Un perro robot"
    ]
  },
  {
    enunciado: "¿Qué es la 'Luz quitamiedos' automática?",
    correcta: "Luz muy tenue en pasillos/baños que se enciende con sensor de movimiento solo de noche para guiar sin despertar del todo",
    incorrectas: [
      "Una luz muy potente",
      "Luz ultravioleta"
    ]
  },
  {
    enunciado: "¿Qué es el control de humedad?",
    correcta: "Activar deshumidificadores o humidificadores automáticamente para mantener la humedad relativa en zona de confort (40-60%)",
    incorrectas: [
      "Echar agua al suelo",
      "Secar la ropa"
    ]
  },
  {
    enunciado: "¿Qué es un actuador de carril DIN?",
    correcta: "Dispositivos domóticos diseñados para instalarse centralizados en el cuadro eléctrico, ocultos y ordenados",
    incorrectas: [
      "Un juguete de tren",
      "Un carril bici"
    ]
  },
  {
    enunciado: "¿Qué es el 'Feedback' o retorno de estado?",
    correcta: "Que la App muestre el estado REAL del dispositivo (ej. 'Luz encendida'), incluso si se accionó manualmente desde un interruptor pared",
    incorrectas: [
      "Que el interruptor vibre",
      "Comentarios de usuarios"
    ]
  },
  {
    enunciado: "¿Qué permite la programación horaria astronómica?",
    correcta: "Actuar luces/persianas basándose en la hora exacta de salida y puesta del sol en esa ubicación geográfica cada día (sin sensor de luz)",
    incorrectas: [
      "Mirar las estrellas",
      "Usar un telescopio"
    ]
  },
  {
    enunciado: "¿Qué es la función 'Baby Mode'?",
    correcta: "Escenas que bloquean pulsadores físicos o bajan volumen de timbres para no despertar al bebé",
    incorrectas: [
      "Un modo inmaduro",
      "Cuidar al bebé solo"
    ]
  },
  {
    enunciado: "¿Qué es el 'Bridge' o Hub en sistemas inalámbricos?",
    correcta: "La pasarela que conecta los dispositivos Zigbee/Z-Wave con la red Wi-Fi/Ethernet de la casa para salir a internet",
    incorrectas: [
      "Un puente físico",
      "Un ladrón de enchufes"
    ]
  },
  {
    enunciado: "¿Qué es la función de 'histórico de eventos'?",
    correcta: "Registro (log) de qué pasó y cuándo (quién abrió la puerta, cuándo se encendió la calefacción) para control o diagnóstico",
    incorrectas: [
      "Libros de historia",
      "Cuentos viejos"
    ]
  }
];
