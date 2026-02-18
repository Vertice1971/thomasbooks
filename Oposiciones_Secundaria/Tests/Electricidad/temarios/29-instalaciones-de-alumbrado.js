// 29-instalaciones-de-alumbrado.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué magnitud fotométrica mide el flujo luminoso total emitido por una fuente?",
    correcta: "El Lumen (lm)",
    incorrectas: [
      "El Lux (lx)",
      "La Candela (cd)"
    ]
  },
  {
    enunciado: "¿Qué magnitud mide la iluminancia o nivel de iluminación recibido en una superficie?",
    correcta: "El Lux (lx), que equivale a un lúmen por metro cuadrado (lm/m²)",
    incorrectas: [
      "El Vatio (W)",
      "El Lumen (lm)"
    ]
  },
  {
    enunciado: "¿Qué es el rendimiento luminoso (o eficacia luminosa) de una lámpara?",
    correcta: "La relación entre el flujo luminoso emitido (lúmenes) y la potencia eléctrica consumida (vatios), expresada en lm/W",
    incorrectas: [
      "La duración de la lámpara en horas",
      "El porcentaje de luz que no se pierde"
    ]
  },
  {
    enunciado: "¿Qué es la temperatura de color (CCT/Tk)?",
    correcta: "Un parámetro que define el 'tono' de la luz blanca (cálida < 3300K, neutra 4000K, fría > 5000K), comparándola con un cuerpo negro calentado",
    incorrectas: [
      "La temperatura que alcanza la bombilla al tocarla",
      "El color de la carcasa de la luminaria"
    ]
  },
  {
    enunciado: "¿Qué es el Índice de Reproducción Cromática (IRC o CRI)?",
    correcta: "La capacidad de una fuente de luz para reproducir fielmente los colores de los objetos en comparación con la luz solar (máximo 100)",
    incorrectas: [
      "La intensidad del color rojo",
      "El número de colores que puede emitir"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene la tecnología LED frente a la incandescencia?",
    correcta: "Mucha mayor eficacia luminosa (ahorro energético), vida útil mucho más larga y encendido instantáneo sin picos altos",
    incorrectas: [
      "Calienta más el ambiente, ahorrando calefacción",
      "Es más barata de fabricar inicialmente"
    ]
  },
  {
    enunciado: "¿Qué es la deslumbramiento (glare)?",
    correcta: "Una sensación molesta o reducción de la visión producida por una luminancia excesiva en el campo visual (brillo directo a los ojos)",
    incorrectas: [
      "Cuando se funde la bombilla",
      "La falta de luz suficiente"
    ]
  },
  {
    enunciado: "¿Qué es el factor de mantenimiento en un proyecto de alumbrado?",
    correcta: "Un coeficiente que sobredimensiona la instalación inicial para compensar la pérdida de luz por suciedad y envejecimiento de lámparas con el tiempo",
    incorrectas: [
      "El sueldo del operario de mantenimiento",
      "El coste de cambiar las bombillas"
    ]
  },
  {
    enunciado: "¿Qué es el 'driver' en una luminaria LED?",
    correcta: "La fuente de alimentación electrónica que convierte la corriente alterna de red en corriente continua regulada adecuada para el chip LED",
    incorrectas: [
      "El conductor del camión que trae las luces",
      "El tornillo que sujeta el LED"
    ]
  },
  {
    enunciado: "¿Qué es la contaminación lumínica?",
    correcta: "La emisión de flujo luminoso hacia el cielo nocturno (hemisferio superior) o fuera de la zona a iluminar, desperdiciando energía y afectando al medio ambiente",
    incorrectas: [
      "La suciedad en el cristal de la farola",
      "El ruido que hacen los transformadores"
    ]
  },
  {
    enunciado: "¿Qué tipo de lámpara de descarga se usaba tradicionalmente en alumbrado vial por su alta eficacia (luz amarilla)?",
    correcta: "Vapor de Sodio de Alta Presión (VSAP)",
    incorrectas: [
      "Incandescencia halógena",
      "Vapor de Mercurio (luz blanca azulada, obsoleta)"
    ]
  },
  {
    enunciado: "¿Qué es el efecto estroboscópico?",
    correcta: "La percepción de movimiento discontinuo o parada aparente de máquinas rotativas debido al parpadeo de la luz a la frecuencia de red (50 Hz)",
    incorrectas: [
      "Un efecto de discoteca deseado en la industria",
      "El parpadeo de un tubo fluorescente al arrancar"
    ]
  },
  {
    enunciado: "¿Cómo se elimina el efecto estroboscópico en instalaciones trifásicas con tubos fluorescentes?",
    correcta: "Repartiendo las luminarias adyacentes entre las tres fases (L1, L2, L3) para que los parpadeos se solapen y la luz se perciba continua",
    incorrectas: [
      "Usando gafas de sol",
      "Pintando los tubos de negro"
    ]
  },
  {
    enunciado: "¿Qué es el sistema de regulación DALI?",
    correcta: "Digital Addressable Lighting Interface: un protocolo estándar digital para controlar y regular individualmente luminarias (encendido, intensidad, estado)",
    incorrectas: [
      "Un pintor surrealista",
      "Un interruptor manual de pared"
    ]
  },
  {
    enunciado: "¿Qué es la uniformidad de iluminancia (U0)?",
    correcta: "La relación entre la iluminancia mínima y la iluminancia media en la superficie (Emin/Emed), indica si hay zonas oscuras o la luz es homogénea",
    incorrectas: [
      "Que todas las farolas sean del mismo modelo",
      "El color uniforme de la luz"
    ]
  },
  {
    enunciado: "¿Qué es la curva fotométrica de una luminaria?",
    correcta: "La representación gráfica de la distribución de la intensidad luminosa emitida en distintas direcciones del espacio",
    incorrectas: [
      "La curva de consumo eléctrico",
      "La forma física de la lámpara"
    ]
  },
  {
    enunciado: "¿Qué es el UGR (Unified Glare Rating)?",
    correcta: "El índice de deslumbramiento unificado para interiores; valores bajos (ej. < 19) indican confort visual (oficinas), valores altos (>28) deslumbramiento",
    incorrectas: [
      "Unidad General de Resistencia",
      "Un tipo de bombilla rusa"
    ]
  },
  {
    enunciado: "¿Para qué sirve el condensador en una luminaria fluorescente con reactancia magnética?",
    correcta: "Para corregir el factor de potencia (compensar la energía reactiva inductiva de la reactancia)",
    incorrectas: [
      "Para arrancar el tubo",
      "Para dar más luz"
    ]
  },
  {
    enunciado: "¿Qué es el cebador de un tubo fluorescente antiguo?",
    correcta: "Un pequeño dispositivo con un bimetal y gas neón que cierra el circuito de precalentamiento de los filamentos y provoca el pico de tensión de arranque",
    incorrectas: [
      "La comida para pescar",
      "El interruptor principal"
    ]
  },
  {
    enunciado: "¿Qué altura mínima suelen tener los báculos de alumbrado viario?",
    correcta: "De 8 a 12 metros habitualmente para carreteras, para conseguir uniformidad con mayor interdistancia",
    incorrectas: [
      "1 metro",
      "50 metros"
    ]
  },
  {
    enunciado: "¿Qué es la depreciación del flujo luminoso del LED (L70, L80)?",
    correcta: "El punto en el que el LED conserva el 70% o 80% de su flujo inicial; se usa para definir su vida útil (ej. 50.000h L70B50)",
    incorrectas: [
      "Cuando el LED se funde de golpe",
      "El precio del LED cuando es viejo"
    ]
  },
  {
    enunciado: "¿Qué protección diferencial se recomienda para circuitos de alumbrado exterior?",
    correcta: "300 mA selectivo (o rearmable), ya que las pequeñas fugas a tierra son normales en líneas muy largas enterradas y 30mA dispararía demasiado en falso",
    incorrectas: [
      "10 mA ultrasensible",
      "Sin diferencial"
    ]
  },
  {
    enunciado: "¿Qué es el FHS (Flujo Hemisférico Superior)?",
    correcta: "El porcentaje de flujo emitido por la luminaria por encima del plano horizontal. Debe ser cercano a 0% para evitar contaminación lumínica",
    incorrectas: [
      "Un tipo de fusible",
      "Flujo Hidraúlico Superior"
    ]
  },
  {
    enunciado: "¿Qué es una lámpara de Halogenuros Metálicos?",
    correcta: "Una lámpara de descarga de alta presión que ofrece luz blanca de excelente rendimiento cromático (escaparates, estadios), aunque tarda en reencender",
    incorrectas: [
      "Una lámpara halógena de coche",
      "Un tubo fluorescente"
    ]
  },
  {
    enunciado: "¿Qué dice el Código Técnico (CTE HE3) sobre eficiencia energética en iluminación?",
    correcta: "Establece valores límite de potencia instalada (W/m²) en función de la iluminancia (VEEI) y exige sistemas de control y aprovechamiento de luz natural",
    incorrectas: [
      "Que hay que pagar la luz a tiempo",
      "Que hay que usar velas"
    ]
  },
  {
    enunciado: "¿Qué es un sensor de presencia/movimiento en iluminación?",
    correcta: "Un dispositivo (PIR o microondas) que enciende la luz solo cuando detecta ocupación, ahorrando energía en zonas de paso o baños",
    incorrectas: [
      "Una cámara de seguridad",
      "Un sensor de temperatura"
    ]
  },
  {
    enunciado: "¿Qué es la regulación por flujo constante (CLO - Constant Light Output)?",
    correcta: "Técnica que alimenta los LED con menos corriente al principio (cuando son nuevos y eficientes) y la sube progresivamente para compensar la depreciación, ahorrando energía",
    incorrectas: [
      "Que la luz nunca se apaga",
      "Que siempre da el máximo de luz"
    ]
  },
  {
    enunciado: "¿Qué es el alumbrado de balizamiento?",
    correcta: "Puntos de luz de baja intensidad que marcan el trazado de caminos, escaleras o bordes, sirviendo de guía visual más que de iluminación",
    incorrectas: [
      "Balizar con conos de tráfico",
      "Faros de costa"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre regulación 1-10V y DALI?",
    correcta: "1-10V es analógico (voltaje controla intensidad), DALI es digital (comandos direccionables, bidireccional, información de estado)",
    incorrectas: [
      "1-10V es mejor y más moderno",
      "DALI usa pilas"
    ]
  },
  {
    enunciado: "¿Qué es el 'MacAdam ellipse' o pasos MacAdam?",
    correcta: "Una medida de la consistencia de color entre LEDs. 1-3 pasos MacAdam significa que el ojo humano no distingue diferencia de color entre ellos",
    incorrectas: [
      "Una marca de whisky",
      "Un paso de baile"
    ]
  },
  {
    enunciado: "¿Por qué no se deben usar interruptores unipolares cortando el neutro en alumbrado?",
    correcta: "Porque el portalámparas quedaría permanentemente bajo tensión de fase aunque la luz esté apagada, riesgo de electrocución al cambiar la bombilla",
    incorrectas: [
      "Porque no funciona la bombilla",
      "Porque gasta electricidad apagada"
    ]
  },
  {
    enunciado: "¿Qué es la luminancia (cd/m²)?",
    correcta: "La intensidad luminosa emitida por una superficie en una dirección dada dividida por el área aparente (es lo que el ojo percibe como 'brillo')",
    incorrectas: [
      "La luz que llega a la mesa",
      "La potencia de la lámpara"
    ]
  },
  {
    enunciado: "¿Qué es el cableado pasante en luminarias lineales?",
    correcta: "Línea eléctrica interna que atraviesa la luminaria permitiendo conectar la siguiente en serie sin cajas de derivación externas (ej. líneas continuas)",
    incorrectas: [
      "Pasar un cable por encima",
      "Perder el cable"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento básico requieren las luminarias estancas IP65?",
    correcta: "Limpieza del difusor y verificación de las juntas de estanqueidad y cierres para asegurar que no entra agua",
    incorrectas: [
      "Ninguno, son eternas",
      "Hacerles agujeros para que respiren"
    ]
  }
];
