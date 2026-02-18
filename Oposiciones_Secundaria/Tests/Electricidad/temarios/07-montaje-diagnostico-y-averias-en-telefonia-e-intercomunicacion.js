// temarios/07-montaje-diagnostico-y-averias-en-telefonia-e-intercomunicacion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué objetivo tiene el respeto de los radios mínimos de curvatura en cables de telefonía y datos?",
    correcta: "Evitar incrementos de atenuación y degradación del rendimiento, especialmente en CAT6 y fibra óptica",
    incorrectas: [
      "Facilitar el punzonado en regletas LSA-PLUS",
      "Reducir la caída de tensión en circuitos de muy baja tensión"
    ]
  },
  {
    enunciado: "¿Por qué es importante identificar y etiquetar correctamente los conductores en una instalación ICT?",
    correcta: "Para facilitar el mantenimiento, el diagnóstico de averías y evitar errores de conexión",
    incorrectas: [
      "Para mejorar la calidad de audio en llamadas telefónicas",
      "Para cumplir únicamente requisitos estéticos del CTE"
    ]
  },
  {
    enunciado: "¿Qué altura es habitual para la instalación de una placa de calle de portero o videoportero?",
    correcta: "Aproximadamente 1,60 m para facilitar el uso y cumplir criterios de accesibilidad",
    incorrectas: [
      "A ras de suelo para protegerla del viento",
      "Por encima de 2,20 m para evitar manipulaciones"
    ]
  },
  {
    enunciado: "¿Qué debe garantizarse en el montaje de una placa de calle exterior?",
    correcta: "La estanqueidad frente a agua y polvo mediante juntas y sellados adecuados",
    incorrectas: [
      "La conexión directa a tierra del micrófono para mejorar el audio",
      "La ventilación abierta para evitar sobrecalentamiento del pulsador"
    ]
  },
  {
    enunciado: "¿Qué tipo de conexión es habitual en unidades interiores modernas de telefonía IP o videoportería?",
    correcta: "Conectores RJ45 o regletas de presión según el sistema",
    incorrectas: [
      "Conectores XLR balanceados",
      "Bornes de potencia tipo Schuko"
    ]
  },
  {
    enunciado: "¿Dónde suelen instalarse las fuentes de alimentación de porteros y videoporteros?",
    correcta: "En carril DIN dentro de cuadros o registros accesibles",
    incorrectas: [
      "Empotradas en la placa de calle sin ventilación",
      "Dentro de las canalizaciones junto al cableado"
    ]
  },
  {
    enunciado: "¿Qué ajuste mecánico es importante en la instalación de un abrepuertas eléctrico?",
    correcta: "El ajuste correcto del pestillo y la verificación de la corriente de activación",
    incorrectas: [
      "La adaptación de impedancia del circuito de audio",
      "La configuración de VLANs de voz"
    ]
  },
  {
    enunciado: "¿Qué conectores se emplean habitualmente en telefonía analógica y en redes IP respectivamente?",
    correcta: "RJ11 para telefonía analógica y RJ45 para datos y VoIP",
    incorrectas: [
      "RJ45 para analógica y RJ11 para VoIP",
      "Conectores F para ambos sistemas"
    ]
  },
  {
    enunciado: "¿Para qué se utilizan las regletas LSA-PLUS (tipo Krone) en instalaciones de telefonía?",
    correcta: "Para el punzonado y distribución de pares en puntos de interconexión",
    incorrectas: [
      "Para la amplificación de la señal de voz",
      "Para la conversión de señal analógica a digital"
    ]
  },
  {
    enunciado: "¿Qué comprobación básica forma parte de los protocolos de prueba en telefonía?",
    correcta: "La verificación de continuidad y la ausencia de cruzamientos en los pares",
    incorrectas: [
      "La medición de MER y BER",
      "La comprobación del ángulo de visión de la cámara"
    ]
  },
  {
    enunciado: "¿Qué prueba permite detectar degradación entre pares próximos en redes que soportan VoIP?",
    correcta: "Las pruebas de diafonía (crosstalk)",
    incorrectas: [
      "La medición de resistencia del abrepuertas",
      "La comprobación del rizado de la fuente"
    ]
  },
  {
    enunciado: "¿Qué parámetro se mide para asegurar que no existen fugas entre conductores?",
    correcta: "La resistencia de aislamiento de los pares",
    incorrectas: [
      "La frecuencia de muestreo de la voz",
      "La impedancia acústica del altavoz"
    ]
  },
  {
    enunciado: "¿Qué se ajusta al verificar el audio en un sistema de intercomunicación?",
    correcta: "El volumen del micrófono y del altavoz para evitar distorsión o acoplamientos",
    incorrectas: [
      "La codificación de voz G.711",
      "La polaridad del par de datos"
    ]
  },
  {
    enunciado: "¿Qué aspecto se revisa al comprobar la calidad de imagen en un videoportero?",
    correcta: "Brillo, contraste y ángulo de visión de la cámara",
    incorrectas: [
      "La impedancia del micrófono interior",
      "La resistencia de bucle del par telefónico"
    ]
  },
  {
    enunciado: "¿Qué herramienta permite localizar pares dentro de un mazo de cables?",
    correcta: "El generador y la sonda de tonos (pollito)",
    incorrectas: [
      "El medidor de campo",
      "El analizador de espectro RF"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza un teléfono de prueba en una línea analógica?",
    correcta: "Para comprobar tono de llamada y capacidad de marcación",
    incorrectas: [
      "Para medir la atenuación del cable",
      "Para certificar enlaces CAT6"
    ]
  },
  {
    enunciado: "¿Cuál es una causa habitual de ruido o fritura en telefonía analógica?",
    correcta: "Humedad en conexiones, malas uniones o inducciones de líneas de fuerza cercanas",
    incorrectas: [
      "Exceso de ganancia en el micrófono del portero",
      "Uso de VLANs de voz"
    ]
  },
  {
    enunciado: "¿Qué puede provocar la ausencia total de tono de llamada en un terminal?",
    correcta: "Un corte en el par, fallo en el PTR/PAU o bloqueo de la centralita",
    incorrectas: [
      "Un error en el ajuste de brillo de la cámara",
      "Un fallo del abrepuertas eléctrico"
    ]
  },
  {
    enunciado: "¿Qué causa puede originar una marcación incorrecta en telefonía analógica?",
    correcta: "Un fallo del teclado o una configuración incorrecta de tonos o pulsos",
    incorrectas: [
      "Una caída de tensión en el abrepuertas",
      "Un exceso de diafonía en el bus digital"
    ]
  },
  {
    enunciado: "¿Por qué puede no funcionar un abrepuertas eléctrico?",
    correcta: "Por bobina quemada, sección insuficiente del cable o fallo del relé de control",
    incorrectas: [
      "Por mala configuración del protocolo SIP",
      "Por exceso de ganancia del micrófono"
    ]
  },
  {
    enunciado: "¿Qué produce el efecto Larsen o acoplamiento en intercomunicación?",
    correcta: "Un exceso de ganancia en los potenciómetros de audio",
    incorrectas: [
      "Una falta de resistencia de aislamiento",
      "Una mala configuración de VLAN"
    ]
  },
  {
    enunciado: "¿Qué puede causar interferencias visibles como nieve o rayas en un videoportero?",
    correcta: "Falta de adaptación de impedancia, blindaje deficiente o rizado excesivo en la fuente",
    incorrectas: [
      "Un corte en el par telefónico",
      "Un error en la marcación DTMF"
    ]
  },
  {
    enunciado: "¿Qué exige el Real Decreto 346/2011 en la entrega de una instalación ICT?",
    correcta: "El cumplimiento del Protocolo de Pruebas y de las especificaciones técnicas",
    incorrectas: [
      "La certificación de enlaces Ethernet por laboratorio externo",
      "La configuración obligatoria de sistemas IP"
    ]
  },
  {
    enunciado: "¿Qué regula la Orden ITC/1644/2011 respecto a estos trabajos?",
    correcta: "Los requisitos que deben cumplir los instaladores autorizados tipo F",
    incorrectas: [
      "La señalización entre centrales telefónicas",
      "La codificación digital de la voz"
    ]
  },
  {
    enunciado: "¿Qué ITC del REBT es especialmente relevante para circuitos de intercomunicación por MBTS?",
    correcta: "ITC-BT-36",
    incorrectas: [
      "ITC-BT-28",
      "ITC-BT-44"
    ]
  },
  {
    enunciado: "¿Qué norma UNE se aplica específicamente a sistemas de intercomunicación en edificios?",
    correcta: "UNE-EN 62820",
    incorrectas: [
      "UNE-EN 60728",
      "UNE 21153"
    ]
  },
  {
    enunciado: "¿Qué exige la Ley 31/1995 en trabajos de instalación de telefonía e intercomunicación?",
    correcta: "Aplicar medidas de prevención de riesgos en el uso de escaleras, herramientas y fuentes de alimentación",
    incorrectas: [
      "Configurar protocolos de señalización digital",
      "Garantizar niveles mínimos de audio en cada vivienda"
    ]
  },
  {
    enunciado: "¿Qué garantiza la Directiva 2014/30/UE de compatibilidad electromagnética?",
    correcta: "Que los equipos no generen interferencias ni sean excesivamente sensibles a ellas",
    incorrectas: [
      "Que las instalaciones no requieran puesta a tierra",
      "Que los sistemas funcionen sin necesidad de pruebas finales"
    ]
  }
];
