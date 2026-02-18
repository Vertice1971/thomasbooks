// temarios/02-montaje-diagnostico-y-averias-en-instalaciones-electroacusticas.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función esencial de un micrófono dentro de la cadena electroacústica?",
    correcta: "Convertir variaciones de presión sonora en una señal eléctrica utilizable por el sistema",
    incorrectas: [
      "Aumentar directamente la potencia eléctrica para mover el altavoz sin amplificación",
      "Transformar una señal de línea en una señal balanceada mediante aislamiento galvánico"
    ]
  },
  {
    enunciado: "¿Qué caracteriza de forma típica a un micrófono dinámico de bobina móvil frente a uno de condensador?",
    correcta: "Suele ser más robusto y menos sensible, y no necesita alimentación phantom para funcionar",
    incorrectas: [
      "Siempre ofrece una respuesta en frecuencia más extendida y mayor nivel de salida que el condensador",
      "Solo puede funcionar con patrón omnidireccional y no admite aplicaciones de directo"
    ]
  },
  {
    enunciado: "¿Qué implica, en términos prácticos, que un micrófono tenga patrón cardioide?",
    correcta: "Capta principalmente por delante y atenúa la captación por detrás, ayudando a reducir realimentación",
    incorrectas: [
      "Capta por igual en todas las direcciones y evita por definición los ruidos de manipulación",
      "Capta solo por detrás y se usa para aislar la voz del entorno en entrevistas"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia típica de usar un micrófono bidireccional (figura de ocho)?",
    correcta: "Capta por delante y por detrás y rechaza bastante por los laterales, lo que condiciona su colocación",
    incorrectas: [
      "Capta solo el rango de 20 a 200 Hz y se reserva para subgraves",
      "Aumenta automáticamente la relación señal/ruido al duplicar la captación"
    ]
  },
  {
    enunciado: "¿Qué describe principalmente la sensibilidad de un micrófono?",
    correcta: "El nivel de salida eléctrica que entrega para una presión sonora determinada en su cápsula",
    incorrectas: [
      "La potencia mínima que exige al previo para no saturar el canal",
      "La velocidad de propagación del sonido en el aire según la temperatura"
    ]
  },
  {
    enunciado: "¿Qué significa que un micrófono tenga una buena relación señal/ruido?",
    correcta: "Que la señal útil destaca claramente sobre el ruido propio y el ruido de fondo del sistema",
    incorrectas: [
      "Que su impedancia es siempre de 100 ohmios y compatible con cualquier mesa",
      "Que elimina por sí mismo los bucles de masa sin necesidad de buenas prácticas de cableado"
    ]
  },
  {
    enunciado: "¿Cuál es el propósito del control de Gain (preamplificación) en un canal de mesa de mezclas?",
    correcta: "Ajustar el nivel de entrada para que la señal trabaje con margen sin ruido excesivo ni saturación",
    incorrectas: [
      "Cambiar la impedancia del altavoz conectado a la etapa para aumentar la potencia",
      "Seleccionar el tipo de conector físico que usará el canal (XLR, TRS o RCA)"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial existe entre un ecualizador gráfico y uno paramétrico?",
    correcta: "El gráfico actúa en bandas fijas, mientras el paramétrico permite ajustar frecuencia, ganancia y ancho de banda",
    incorrectas: [
      "El gráfico solo sirve para señales digitales y el paramétrico solo para señales analógicas",
      "El paramétrico solo puede cortar graves y el gráfico solo puede realzar agudos"
    ]
  },
  {
    enunciado: "¿Qué función cumple un compresor en audio?",
    correcta: "Reducir el rango dinámico atenuando niveles por encima de un umbral para estabilizar la señal",
    incorrectas: [
      "Aumentar la potencia de salida para mover altavoces sin necesidad de etapa",
      "Eliminar interferencias EMI/RFI transformando la señal en balanceada"
    ]
  },
  {
    enunciado: "¿Qué se busca normalmente con un limitador en una cadena de sonido?",
    correcta: "Evitar picos excesivos protegiendo equipos y previniendo saturación o sobreexcursión de altavoces",
    incorrectas: [
      "Aumentar la directividad de la caja acústica mediante filtrado pasivo",
      "Convertir una salida estéreo en una línea de 100 V sin transformador"
    ]
  },
  {
    enunciado: "¿Para qué se usa una puerta de ruido (noise gate) de forma típica?",
    correcta: "Para silenciar o atenuar una señal cuando cae por debajo de un umbral, reduciendo ruido entre frases",
    incorrectas: [
      "Para elevar permanentemente el nivel de salida sin alterar la dinámica",
      "Para corregir automáticamente problemas de fase entre subgraves y medios"
    ]
  },
  {
    enunciado: "¿Qué describe el clipping en un sistema de audio?",
    correcta: "La saturación por falta de margen, donde la forma de onda se recorta por exceso de nivel",
    incorrectas: [
      "La pérdida de graves causada por usar cable apantallado en líneas de altavoz",
      "El aumento de impedancia del altavoz cuando se eleva la temperatura ambiente"
    ]
  },
  {
    enunciado: "¿Qué clase de amplificación suele destacar por alta eficiencia y menor disipación térmica?",
    correcta: "La clase D, al trabajar con conmutación y alcanzar eficiencias elevadas en muchas aplicaciones",
    incorrectas: [
      "La clase A, porque siempre disipa menos al conducir solo en picos",
      "La clase AB, porque funciona exclusivamente en conmutación digital"
    ]
  },
  {
    enunciado: "¿Qué implica el modo Bridge (puente) en una etapa de potencia?",
    correcta: "Combinar dos canales para aumentar tensión disponible, con la precaución de la carga mínima admisible",
    incorrectas: [
      "Duplicar la cantidad de entradas XLR disponibles sin modificar la salida",
      "Convertir automáticamente una salida no balanceada en balanceada"
    ]
  },
  {
    enunciado: "¿Qué riesgo es típico si en modo puente se conecta una impedancia demasiado baja?",
    correcta: "Que el amplificador exceda corriente y active protecciones, se sobrecaliente o se averíe",
    incorrectas: [
      "Que el micrófono requiera phantom aunque sea dinámico",
      "Que el ecualizador cambie de gráfico a paramétrico sin intervención"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un motor de compresión en sistemas de altavoces?",
    correcta: "Usa un diafragma acoplado a una trompeta para alta eficiencia y control de directividad en agudos",
    incorrectas: [
      "Es un altavoz exclusivo de subgraves que solo funciona en cajas bass-reflex",
      "Es un tipo de micrófono de cinta diseñado para escenarios"
    ]
  },
  {
    enunciado: "¿Cuál es la función de un filtro de cruce (crossover) en un sistema de altavoces?",
    correcta: "Repartir el espectro en bandas para enviar cada rango al transductor más adecuado",
    incorrectas: [
      "Aumentar la relación señal/ruido elevando el nivel de la señal micro",
      "Eliminar bucles de masa interrumpiendo el conductor de tierra"
    ]
  },
  {
    enunciado: "¿Qué ventaja práctica suele tener un crossover activo frente a uno pasivo?",
    correcta: "Permite filtrar antes de amplificar y ajustar cortes con mayor control, reduciendo pérdidas y distorsión",
    incorrectas: [
      "Elimina la necesidad de amplificación porque filtra y amplifica a la vez",
      "Convierte cualquier altavoz de baja impedancia en una línea de 100 V sin transformadores"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una instalación de megafonía en línea de 100 V?",
    correcta: "Distribuye audio a larga distancia con pérdidas menores usando transformadores y cargas en paralelo por potencia",
    incorrectas: [
      "Obliga a conectar los altavoces siempre en serie para aumentar impedancia total",
      "Impide el uso de atenuadores porque la tensión es fija e invariable"
    ]
  },
  {
    enunciado: "En una línea de 100 V, ¿cómo se calcula de forma básica la potencia total demandada por los altavoces?",
    correcta: "Sumando las potencias seleccionadas en los transformadores de cada altavoz o zona",
    incorrectas: [
      "Sumando las impedancias nominales y dividiéndolas entre 100 para obtener vatios",
      "Multiplicando la longitud del cable por la sensibilidad de los altavoces"
    ]
  },
  {
    enunciado: "¿Qué diferencia funcional aporta un conexionado balanceado frente a uno no balanceado?",
    correcta: "Mejora el rechazo de interferencias al transportar la señal con dos conductores en oposición y referencia de pantalla",
    incorrectas: [
      "Aumenta automáticamente la potencia de salida del amplificador sin cambiar la carga",
      "Impide la saturación porque limita electrónicamente el nivel máximo"
    ]
  },
  {
    enunciado: "¿Qué conectores son típicos en audio balanceado en directo?",
    correcta: "XLR y TRS, usados para micrófono y línea balanceada según el equipo",
    incorrectas: [
      "RCA y TS, porque son estándares de balanceado profesional",
      "Banana y Speakon, porque son conectores de señal de micrófono"
    ]
  },
  {
    enunciado: "¿Qué es una soldadura fría en un conector y qué efecto puede producir?",
    correcta: "Es una unión defectuosa que genera resistencias de contacto y fallos intermitentes o pérdida de señal",
    incorrectas: [
      "Es una soldadura hecha con estaño de plata que reduce el ruido a cero",
      "Es un método de crimpado industrial que aumenta la potencia admitida por el cable"
    ]
  },
  {
    enunciado: "¿Cuál es una causa típica de zumbido por bucle de masa (ground loop)?",
    correcta: "Diferencias de potencial entre tierras de equipos conectados por audio y alimentación, cerrando un lazo de corriente",
    incorrectas: [
      "Uso de micrófonos de cinta con patrón omnidireccional",
      "Exceso de potencia en una línea de 100 V por sumar vatios de altavoces"
    ]
  },
  {
    enunciado: "¿Qué describe EMI/RFI en el contexto de averías de audio?",
    correcta: "Interferencias electromagnéticas o radioeléctricas que se acoplan a los cables o entradas del sistema",
    incorrectas: [
      "Un modo de puente exclusivo para etapas de clase A",
      "Un tipo de ecualización fija que se aplica en filtros pasivos"
    ]
  },
  {
    enunciado: "¿Qué es el método de seguimiento de señal (signal tracing) en diagnóstico?",
    correcta: "Comprobar etapa a etapa el recorrido de la señal desde la fuente hasta la salida para localizar el punto de fallo",
    incorrectas: [
      "Aumentar la ganancia al máximo para que la avería se haga más evidente",
      "Sustituir todos los cables a la vez sin verificar el comportamiento del sistema"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene la inyección de señal (signal injection) en una reparación?",
    correcta: "Introducir una señal conocida en un punto del sistema para verificar el funcionamiento de las etapas siguientes",
    incorrectas: [
      "Cambiar el patrón polar del micrófono mediante señal eléctrica",
      "Medir la caída de tensión del REBT usando un generador de audio"
    ]
  },
  {
    enunciado: "¿Qué medición básica permite un polímetro al diagnosticar un altavoz pasivo?",
    correcta: "Comprobar continuidad y estimar el estado de la bobina midiendo resistencia en corriente continua",
    incorrectas: [
      "Medir directamente el nivel SPL en sala sin micrófono de medición",
      "Determinar la respuesta en frecuencia con precisión solo con resistencia"
    ]
  },
  {
    enunciado: "¿Qué aporta un osciloscopio en el diagnóstico de una etapa o una salida de mesa?",
    correcta: "Permite ver la forma de onda y detectar recorte, ruido o anomalías temporales de la señal",
    incorrectas: [
      "Mide únicamente impedancia en ohmios con mayor precisión que un polímetro",
      "Sustituye al analizador de espectro porque no trabaja en dominio temporal"
    ]
  },
  {
    enunciado: "¿Para qué se usa un analizador de espectro en instalaciones electroacústicas?",
    correcta: "Para observar el contenido frecuencial, detectar resonancias, realimentaciones y problemas de ecualización",
    incorrectas: [
      "Para medir la sección del conductor en mm² a partir del ruido de fondo",
      "Para calcular automáticamente la potencia total de una línea de 100 V sin datos de carga"
    ]
  },
  {
    enunciado: "¿Qué mide principalmente un sonómetro o medidor SPL?",
    correcta: "El nivel de presión sonora en el punto de medición, útil para ajuste y verificación en sala",
    incorrectas: [
      "La impedancia de salida del amplificador en modo puente",
      "El nivel de tensión de alimentación de la etapa en corriente continua"
    ]
  },
  {
    enunciado: "¿Qué síntoma es compatible con una protección térmica activada en una etapa de potencia?",
    correcta: "Pérdida o reducción de salida tras un tiempo de funcionamiento por sobrecalentamiento",
    incorrectas: [
      "Aumento permanente de agudos por fallo del crossover pasivo",
      "Cambio espontáneo del conector de salida de Speakon a XLR"
    ]
  },
  {
    enunciado: "¿Qué puede indicar una protección por continua (DC) en salida de amplificador?",
    correcta: "Un fallo interno que podría dañar altavoces, por lo que la etapa se protege desconectando la salida",
    incorrectas: [
      "Que la línea es de 100 V y el amplificador trabaja en tensión constante",
      "Que el micrófono conectado es de cinta y requiere alimentación phantom"
    ]
  },
  {
    enunciado: "En montaje, ¿qué es una práctica correcta al tender cableado de señal y de potencia?",
    correcta: "Separar recorridos cuando sea posible y evitar paralelismos largos para reducir acoplos e interferencias",
    incorrectas: [
      "Trenzar siempre cable de altavoz con cable de micrófono para equilibrar impedancias",
      "Conectar pantallas de cables de señal a ambos extremos en cualquier caso para evitar ruidos"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene el apantallamiento en cables de micrófono o línea?",
    correcta: "Reducir la captación de interferencias externas actuando como pantalla conectada a referencia de masa",
    incorrectas: [
      "Aumentar la potencia entregada al altavoz reduciendo la impedancia del cable",
      "Evitar la distorsión del altavoz limitando el recorrido de la membrana"
    ]
  },
  {
    enunciado: "¿Qué se verifica específicamente al orientar altavoces según diagramas de cobertura?",
    correcta: "La distribución espacial del sonido para cubrir el área objetivo minimizando zonas muertas y excesos",
    incorrectas: [
      "La impedancia total del sistema para evitar que baje de 2 ohmios",
      "La frecuencia de muestreo del DSP para que no aparezca aliasing"
    ]
  },
  {
    enunciado: "¿Qué exige de forma general la seguridad mecánica en rigging o volado de altavoces?",
    correcta: "Usar herrajes certificados, cargas dentro de especificación y procedimientos que eviten caída de equipos",
    incorrectas: [
      "Eliminar cualquier ecualización para que el sistema no vibre",
      "Conectar siempre los altavoces en serie para reducir el peso total"
    ]
  },
  {
    enunciado: "¿Qué ITC del REBT se asocia de forma directa a locales de pública concurrencia en el contexto de instalaciones?",
    correcta: "La ITC-BT-28, que fija requisitos de seguridad y condiciones específicas para este tipo de locales",
    incorrectas: [
      "La ITC-BT-01, dedicada a definiciones de acústica arquitectónica",
      "La ITC-BT-52, exclusiva de telecomunicaciones por satélite"
    ]
  },
  {
    enunciado: "¿Qué documento del CTE se relaciona con protección frente al ruido en edificios?",
    correcta: "El DB-HR, que establece exigencias sobre aislamiento y acondicionamiento acústico de recintos",
    incorrectas: [
      "El DB-HE, que regula exclusivamente la compatibilidad electromagnética en audio",
      "El DB-SE, que fija el nivel máximo de presión sonora permitido en conciertos"
    ]
  },
  {
    enunciado: "¿Qué documento del CTE se asocia a seguridad en caso de incendio y evacuación?",
    correcta: "El DB-SI, que incluye exigencias sobre seguridad y condiciones relacionadas con la evacuación",
    incorrectas: [
      "El DB-HS, que regula únicamente humedad en micrófonos de condensador",
      "El DB-HR, que define clases de amplificación A, AB y D"
    ]
  },
  {
    enunciado: "¿Qué norma UNE-EN de la serie EN 54 se asocia a controladores de alarma por voz?",
    correcta: "La UNE-EN 54-16, referida a equipos de control y señalización para sistemas de alarma por voz",
    incorrectas: [
      "La UNE-EN 54-2, que define la respuesta en frecuencia de los altavoces de sonorización",
      "La UNE-EN 54-99, que regula patrones polares de micrófonos de emergencia"
    ]
  }
];
