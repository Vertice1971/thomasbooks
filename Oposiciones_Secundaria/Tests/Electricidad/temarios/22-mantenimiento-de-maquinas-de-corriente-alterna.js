// 22-mantenimiento-de-maquinas-de-corriente-alterna.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la causa más común de fallo en motores de corriente alterna en la industria?",
    correcta: "El fallo de rodamientos (aproximadamente el 50-60% de los fallos mecánicos)",
    incorrectas: [
      "La rotura del eje por torsión",
      "El desgaste de las chapas magnéticas"
    ]
  },
  {
    enunciado: "¿Qué síntoma provoca un fallo de fase (pérdida de una fase) en un motor trifásico en marcha?",
    correcta: "El motor sigue girando pero hace más ruido (zumbido), vibra, pierde potencia y se sobrecalienta rápidamente en los devanados restantes",
    incorrectas: [
      "El motor se para instantáneamente siempre",
      "El motor invierte su sentido de giro"
    ]
  },
  {
    enunciado: "¿Qué técnica predictiva es la más adecuada para detectar problemas incipientes en rodamientos?",
    correcta: "El análisis de vibraciones (espectro de frecuencia), buscando picos en frecuencias características de pista interna, externa o bolas",
    incorrectas: [
      "Medir la resistencia de aislamiento del estator",
      "La inspección visual externa"
    ]
  },
  {
    enunciado: "¿Qué indica un Índice de Polarización (IP) inferior a 1 en un ensayo de aislamiento?",
    correcta: "Aislamiento en muy mal estado, sucio o húmedo (la corriente de fuga no disminuye con el tiempo), riesgo de fallo inminente",
    incorrectas: [
      "Aislamiento excelente, muy seco y limpio",
      "Que el motor está bien polarizado magnéticamente"
    ]
  },
  {
    enunciado: "¿Cómo se realiza la medida de resistencia de aislamiento con megóhmetro?",
    correcta: "Aplicando una alta tensión continua (ej. 500V o 1000V) entre el bobinado y la carcasa (tierra) y midiendo la micro-corriente de fuga",
    incorrectas: [
      "Usando un polímetro normal en escala de Ohmios",
      "Aplicando tensión alterna de red directamente"
    ]
  },
  {
    enunciado: "¿Qué es el 'Fluting' en los rodamientos de motores alimentados por variador?",
    correcta: "Un daño en las pistas del rodamiento con forma de estrías transversales (acanaladuras) causado por el paso de corrientes parásitas de alta frecuencia (EDM) a través del rodamiento",
    incorrectas: [
      "Un tipo de lubricación especial",
      "El sonido musical que hace el rodamiento"
    ]
  },
  {
    enunciado: "¿Cómo se previene el daño por corrientes de eje en motores grandes con variador?",
    correcta: "Instalando rodamientos aislados (con recubrimiento cerámico) o escobillas de puesta a tierra del eje (anillo de puesta a tierra)",
    incorrectas: [
      "Echando más grasa al rodamiento",
      "Pintando el eje de color negro"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requiere el ventilador de refrigeración?",
    correcta: "Limpieza de aspas y rejilla para asegurar caudal de aire, y verificación de que no esté suelto o rozando",
    incorrectas: [
      "Afilado de las aspas para cortar mejor el aire",
      "Cambio anual obligatorio por normativa"
    ]
  },
  {
    enunciado: "¿Qué indica una temperatura de carcasa significativamente más alta en el centro que en los extremos?",
    correcta: "Probable sobrecalentamiento del estator (bobinado), por sobrecarga o fallo de ventilación",
    incorrectas: [
      "Que los rodamientos están mal",
      "Es normal, el centro siempre está más caliente por diseño"
    ]
  },
  {
    enunciado: "¿Qué es la excentricidad del entrehierro y qué provoca?",
    correcta: "Cuando el rotor no está perfectamente centrado en el estator; provoca una fuerza magnética unilateral (pull) que daña rodamientos y roza rotor-estator",
    incorrectas: [
      "Una técnica de meditación para el motor",
      "Que entra aire por huecos"
    ]
  },
  {
    enunciado: "¿Para qué sirve el reengrase periódico de rodamientos con engrasador?",
    correcta: "Para renovar la grasa degradada y expulsar contaminantes, siguiendo estrictamente la cantidad y tipo de grasa del fabricante",
    incorrectas: [
      "Para llenar todo el motor de grasa hasta que rebose",
      "Para enfriar el rodamiento con grasa líquida"
    ]
  },
  {
    enunciado: "¿Qué significa 'pata coja' (soft foot) en la alineación?",
    correcta: "Que una de las patas del motor no asienta firmemente en la base, provocando deformación de la carcasa al apretar los pernos y desalineación",
    incorrectas: [
      "Que el motor tiene una pata más corta de fábrica",
      "Que el motor cojea al andar"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para medir la tensión de las correas de transmisión?",
    correcta: "Un tensiómetro de correas (sónico o mecánico) que mide la frecuencia de vibración o la deflexión ante una fuerza dada",
    incorrectas: [
      "El dedo pulgar a ojo siempre",
      "Un voltímetro"
    ]
  },
  {
    enunciado: "¿Qué se debe hacer si un motor se moja por inundación?",
    correcta: "Desmontarlo, lavarlo con agua limpia (si hay lodo), secarlo en horno a temperatura controlada y no arrancarlo hasta que el aislamiento sea correcto",
    incorrectas: [
      "Arrancarlo inmediatamente para que el calor evapore el agua",
      "Echarle alcohol y prenderle fuego"
    ]
  },
  {
    enunciado: "¿Qué es el desequilibrio de intensidad entre fases admisible?",
    correcta: "Idealmente cero, pero se tolera un pequeño porcentaje (< 5-10%); si es alto, indica fallo en bobinado, mala conexión o desequilibrio de tensión de red",
    incorrectas: [
      "Hasta un 50% es normal",
      "La fase L2 siempre debe consumir el doble"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento tienen los anillos rozantes en motores de rotor bobinado?",
    correcta: "Limpieza de carbonilla, verificación de desgaste de anillos y escobillas, y comprobación de que las escobillas deslizan libremente en su alojamiento",
    incorrectas: [
      "Ninguno, son autolimpiables",
      "Lijarlos con lija de hierro cada día"
    ]
  },
  {
    enunciado: "¿Qué es el 'Single Phasing' o marcha a dos fases?",
    correcta: "Cuando se funde un fusible de una fase o falla un contacto, dejando al motor alimentado solo por dos fases; si no hay protección, se quema",
    incorrectas: [
      "Un motor monofásico especial",
      "Una técnica de ahorro de energía"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la suciedad en las aletas de refrigeración?",
    correcta: "Actúa como aislante térmico, impidiendo la disipación de calor y elevando la temperatura interna, reduciendo la vida útil",
    incorrectas: [
      "Protege al motor del frío",
      "No tiene efecto significativo"
    ]
  },
  {
    enunciado: "¿Qué se busca con la prueba de 'Growler' en un estator?",
    correcta: "Aunque típica de inducidos DC, existen growlers internos para estatores para buscar cortocircuitos entre espiras",
    incorrectas: [
      "Hacer crecer el motor",
      "Buscar leones dentro"
    ]
  },
  {
    enunciado: "¿Qué indica un ruido de 'clic-clic' regular en un rodamiento?",
    correcta: "Daño puntual en una pista o bola (piquete), cada vez que pasa por el defecto suena",
    incorrectas: [
      "Falta total de grasa",
      "Rodamiento nuevo asentándose"
    ]
  },
  {
    enunciado: "¿Qué es el alineador de poleas láser?",
    correcta: "Una herramienta que permite alinear perfectamente las poleas conductora y conducida para evitar desgaste prematuro de correas y rodamientos",
    incorrectas: [
      "Un láser para cortar correas",
      "Un juguete para el gato del taller"
    ]
  },
  {
    enunciado: "¿Qué es la termografía de la caja de bornas?",
    correcta: "Detecta conexiones flojas (puntos calientes) en los terminales o empalmes de cables de alimentación, causa frecuente de incendio",
    incorrectas: [
      "Ver si hay ratones dentro calentitos",
      "Medir la temperatura del aire dentro de la caja"
    ]
  },
  {
    enunciado: "¿Cómo se verifica un condensador de arranque electrolítico?",
    correcta: "Midiendo su capacidad (uF) con un capacímetro y comprobando que no esté hinchado, con fugas o abierto/en corto",
    incorrectas: [
      "Cargándolo y tocando los bornes con la lengua",
      "Agitándolo para ver si suena líquido"
    ]
  },
  {
    enunciado: "¿Qué vida útil aproximada tiene la grasa de un rodamiento sellado?",
    correcta: "Limitada (ej. 10.000 - 20.000 horas según temperatura y velocidad); al acabarse, el rodamiento debe cambiarse (no se puede reengrasar)",
    incorrectas: [
      "Infinita, dura para siempre",
      "100 horas de funcionamiento"
    ]
  },
  {
    enunciado: "¿Qué es el análisis de corriente del motor (MCSA)?",
    correcta: "Motor Current Signature Analysis: analiza las bandas laterales alrededor de la frecuencia de red en el espectro de corriente para detectar barras rotas en el rotor",
    incorrectas: [
      "Mirar si la aguja del amperímetro se mueve",
      "Firmar un autógrafo en el motor"
    ]
  },
  {
    enunciado: "¿Qué hacer si un motor dispara el diferencial (fuga a tierra) intempestivamente?",
    correcta: "Aislar el motor, medir resistencia de aislamiento; si es baja, buscar humedad o fallo; si es correcta, revisar el diferencial o armónicos (fugas capacitivas en variadores)",
    incorrectas: [
      "Quitar el cable de tierra para que no salte",
      "Poner un diferencial de 500 Amperios"
    ]
  },
  {
    enunciado: "¿Qué es el barniz de protección tropicalizado?",
    correcta: "Un tratamiento adicional antihumedad y antihongos para motores que trabajan en ambientes cálidos y húmedos",
    incorrectas: [
      "Barniz con sabor a piña y coco",
      "Barniz que solo se aplica en verano"
    ]
  },
  {
    enunciado: "¿Qué precaución hay al limpiar un motor con disolventes?",
    correcta: "Que el disolvente no ataque el barniz de los bobinados ni las gomas de los retenes, y tener buena ventilación por toxicidad/inflamabilidad",
    incorrectas: [
      "Usar gasolina siempre porque limpia mejor",
      "Fumar mientras se limpia"
    ]
  },
  {
    enunciado: "¿Qué se debe verificar en el anclaje del motor?",
    correcta: "Que los pernos de la base estén apretados, no falten arandelas y no haya grietas en la cimentación o estructura soporte",
    incorrectas: [
      "Que el motor se mueva libremente",
      "Que esté pegado con silicona"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requiere un freno electromagnético acoplado al motor?",
    correcta: "Ajuste del entrehierro (gap) del disco de freno (que aumenta con el desgaste del ferodo) y verificación de la bobina y rectificador",
    incorrectas: [
      "Echarle aceite al disco para que no chirríe",
      "Quitarle el freno para ahorrar energía"
    ]
  },
  {
    enunciado: "¿Por qué se calientan los rodamientos si se echa demasiada grasa?",
    correcta: "Por el batido excesivo de la grasa (fricción fluida), que genera calor y presión interna, pudiendo romper los retenes",
    incorrectas: [
      "Porque la grasa es térmica",
      "Porque pesa más y cuesta girar"
    ]
  },
  {
    enunciado: "¿Qué es el 'rodaje' de rodamientos nuevos?",
    correcta: "Un periodo inicial de monitoreo de temperatura y ruido; a veces requieren reengrase temprano o estabilización",
    incorrectas: [
      "Llevar el motor de paseo",
      "Hacerlos girar a mano 1000 veces"
    ]
  },
  {
    enunciado: "¿Qué es la cavitación en bombas acopladas a motores?",
    correcta: "Formación y colapso de burbujas de vapor por baja presión, que causa vibraciones severas y daño al impulsor y rodamientos del motor",
    incorrectas: [
      "Que el motor bebe champán",
      "Que entra aire comprimido"
    ]
  },
  {
    enunciado: "¿Qué significa IP55 en mantenimiento?",
    correcta: "Que se puede limpiar suavemente con agua a baja presión (no karcher directo a sellos) y soporta polvo, pero no inmersión",
    incorrectas: [
      "Que aguanta manguerazo a presión en los rodamientos",
      "Que no requiere tapa de bornas"
    ]
  },
  {
    enunciado: "¿Cómo se comprueba el desequilibrio de resistencias del bobinado?",
    correcta: "Midiendo con un miliohmetro (puente Kelvin) la resistencia fase-fase; deben ser casi idénticas (< 2-3% diferencia)",
    incorrectas: [
      "Con un buscapolos",
      "Tocando a ver cuál calienta más"
    ]
  },
  {
    enunciado: "¿Qué es el bloqueo del rotor (LOCKED ROTOR)?",
    correcta: "Una situación de fallo donde el motor recibe tensión pero no gira (por carga excesiva o agarrotamiento), la corriente se dispara y quema el motor en segundos si no salta la protección",
    incorrectas: [
      "Poner un candado al motor para que no lo roben",
      "El freno de mano del motor"
    ]
  },
  {
    enunciado: "¿Qué indica la presencia de polvo magnético en el interior del motor?",
    correcta: "Roce rotor-estator grave; el rotor ha estado tocando las chapas del estator, desgastándolas y creando limaduras",
    incorrectas: [
      "Es suciedad normal del ambiente",
      "Es grafito de las escobillas"
    ]
  },
  {
    enunciado: "¿Qué se revisa en el acoplamiento elástico (flector)?",
    correcta: "El estado del elemento elástico (goma/polímero) por grietas o desgaste, y la alineación de los cubos metálicos",
    incorrectas: [
      "Soldarlo fijo para que no se rompa",
      "Pintarlo de colores"
    ]
  },
  {
    enunciado: "¿Qué es la revisión de la tensión de red en carga?",
    correcta: "Medir la tensión en bornas del motor mientras funciona a plena carga para verificar que no hay caída de tensión excesiva en la línea",
    incorrectas: [
      "Medir la tensión de la correa",
      "Tocar los cables con la mano"
    ]
  }
];
