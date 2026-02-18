// 15-bobinado-y-conexionado-de-transformadores.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué material conductor es el más común en bobinados de pequeños transformadores?",
    correcta: "Hilo de cobre esmaltado (o magnet wire)",
    incorrectas: [
      "Hilo de aluminio desnudo",
      "Hilo de acero inoxidable"
    ]
  },
  {
    enunciado: "¿Qué función cumple el esmalte o barniz que recubre el hilo de bobinar?",
    correcta: "Aislar eléctricamente unas espiras de otras para evitar cortocircuitos entre vueltas",
    incorrectas: [
      "Dar color al cobre para distinguirlo del aluminio",
      "Mejorar la disipación térmica exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué es la 'horma' o carrete en el proceso de bobinado?",
    correcta: "El soporte aislante (plástico o cartón) sobre el cual se enrollan las espiras de hilo de forma ordenada",
    incorrectas: [
      "La herramienta para cortar el hilo sobrante",
      "El núcleo de hierro magnético"
    ]
  },
  {
    enunciado: "¿Qué es el 'factor de relleno' o coeficiente de llenado de la ventana del núcleo?",
    correcta: "La relación entre la sección de cobre real y el área total de la ventana disponible (siempre < 1), que indica lo aprovechado que está el espacio",
    incorrectas: [
      "La cantidad de barniz que se echa en el transformador",
      "El peso del cobre respecto al peso del hierro"
    ]
  },
  {
    enunciado: "¿Qué es una bobina concéntrica?",
    correcta: "Una disposición donde el bobinado de baja tensión se coloca cerca del núcleo y el de alta tensión se bobina encima (concéntricamente), separados por aislamiento",
    incorrectas: [
      "Una bobina que está descentrada respecto al núcleo",
      "Una bobina enrollada en forma de cuadrado perfecto"
    ]
  },
  {
    enunciado: "¿Qué es una bobina alternada o en galletas?",
    correcta: "Una disposición donde los bobinados de alta y baja se dividen en secciones (discos) que se intercalan a lo largo de la columna para reducir reactancia de dispersión",
    incorrectas: [
      "Una bobina hecha con galletas de fibra de vidrio",
      "Una bobina que cambia de sentido cada 5 vueltas"
    ]
  },
  {
    enunciado: "¿Qué aislamiento se coloca entre capas de espiras en transformadores de cierta tensión?",
    correcta: "Papel prespán, mylar o material aislante similar para asegurar la rigidez dieléctrica entre capas con diferencia de potencial",
    incorrectas: [
      "Papel de aluminio conductor",
      "Ninguno, el esmalte del hilo es suficiente siempre"
    ]
  },
  {
    enunciado: "¿Cómo se identifican los finales de los bobinados (principio y fin) para determinar la polaridad?",
    correcta: "Mediante pruebas de polaridad (aditiva/sustractiva) o siguiendo el sentido de arrollamiento, marcándolos como U1-U2 (o H1-H2)",
    incorrectas: [
      "Por el color del esmalte, que cambia al final del carrete",
      "No importa la polaridad en corriente alterna"
    ]
  },
  {
    enunciado: "¿Qué sucede si conectas dos bobinados en serie con polaridad opuesta (contrafase)?",
    correcta: "Las tensiones inducidas se restan en lugar de sumarse, resultando en una tensión de salida cercana a cero (si son iguales)",
    incorrectas: [
      "Se duplica la tensión de salida automáticamente",
      "El transformador explota inmediatamente"
    ]
  },
  {
    enunciado: "¿Qué es el 'barnizado' por inmersión o impregnación de un transformador bobinado?",
    correcta: "Sumergir el bobinado en barniz dieléctrico y curarlo al horno para fijar mecánicamente las espiras (evitar vibración) y mejorar el aislamiento y disipación",
    incorrectas: [
      "Pintarlo por fuera con spray para que quede bonito",
      "Sumergirlo en aceite de motor usado"
    ]
  },
  {
    enunciado: "¿Qué es un devanado terciario?",
    correcta: "Un tercer bobinado auxiliar en transformadores de potencia, usado a menudo para alimentar servicios auxiliares, compensar armónicos o conectar condensadores",
    incorrectas: [
      "Un bobinado de repuesto que no se usa nunca",
      "Un bobinado de tres hilos trenzados"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para contar las vueltas durante el bobinado manual o semiautomático?",
    correcta: "El cuenta-vueltas mecánico o digital acoplado al eje de la bobinadora",
    incorrectas: [
      "Un cronómetro para estimar las vueltas por tiempo",
      "Una calculadora de mano"
    ]
  },
  {
    enunciado: "¿Qué es la densidad de corriente (J) seleccionada al diseñar el bobinado?",
    correcta: "La intensidad por unidad de sección (A/mm²), que determina el calentamiento y la sección de hilo necesaria (típicamente 2-4 A/mm² en aire)",
    incorrectas: [
      "La densidad del material cobre (8.9 g/cm³)",
      "La cantidad de corriente que cabe en el núcleo"
    ]
  },
  {
    enunciado: "¿Qué conexión interna se realiza para obtener un grupo vectorial Dyn11?",
    correcta: "Primario en triángulo (D), secundario en estrella con neutro (yn) y un desfase tal que el secundario adelanta 30º (índice 11) al primario",
    incorrectas: [
      "Todos los bobinados en serie",
      "Primario y secundario en estrella sin neutro"
    ]
  },
  {
    enunciado: "¿Qué es el aislamiento 'Clase F' en materiales de bobinado?",
    correcta: "Materiales capaces de soportar una temperatura máxima de servicio de 155 °C",
    incorrectas: [
      "Materiales que soportan frío extremo (-50 °C)",
      "Materiales incombustibles de fibra de vidrio"
    ]
  },
  {
    enunciado: "¿Cómo se repara un transformador con un cortocircuito entre espiras internas?",
    correcta: "Generalmente requiere rebobinar la bobina afectada completa, ya que el aislamiento dañado es inaccesible y la avería tiende a propagarse",
    incorrectas: [
      "Inyectando pegamento conductor por fuera",
      "Subiendo la tensión para fundir el cortocircuito"
    ]
  },
  {
    enunciado: "¿Qué es el fleje o cinta de atado en un núcleo de grano orientado?",
    correcta: "Una cinta (a veces de fibra de vidrio o acero inox no magnético) que mantiene las chapas del núcleo apretadas para evitar vibraciones y ruido",
    incorrectas: [
      "Una cinta decorativa de colores",
      "El cable de tierra del transformador"
    ]
  },
  {
    enunciado: "¿Por qué se usan hilos paralelos o pletinas en transformadores de mucha corriente?",
    correcta: "Para facilitar el bobinado (más flexible que un conductor grueso único) y reducir pérdidas por efecto piel en frecuencias altas o armónicos",
    incorrectas: [
      "Porque es más barato usar muchos hilos finos de desecho",
      "Para que circule aire entre los hilos"
    ]
  },
  {
    enunciado: "¿Qué es la transposición de conductores en bobinados de pletina?",
    correcta: "El cambio de posición relativa de los hilos paralelos a lo largo del bobinado para igualar sus impedancias y repartir la corriente uniformemente",
    incorrectas: [
      "Cambiar el cobre por aluminio a mitad de bobina",
      "Poner los cables del revés"
    ]
  },
  {
    enunciado: "¿Qué precaución se toma al soldar los terminales del hilo esmaltado?",
    correcta: "Hay que raspar o decapar el esmalte aislante en la punta para asegurar contacto eléctrico antes de aplicar estaño",
    incorrectas: [
      "Soldar directamente sobre el esmalte, ya que el estaño lo atraviesa siempre",
      "Usar pegamento en lugar de soldadura"
    ]
  },
  {
    enunciado: "¿Qué es un tubo o espagueti aislante en el conexionado?",
    correcta: "Un tubo flexible (fibra de vidrio siliconada, PVC) que se coloca sobre los hilos de salida para reforzar el aislamiento hasta la borna",
    incorrectas: [
      "Un tipo de pasta italiana que se usa de relleno",
      "Un tubo metálico de refrigeración"
    ]
  },
  {
    enunciado: "¿Qué es la tensión por espira?",
    correcta: "La tensión inducida en una sola vuelta de bobinado, valor clave de diseño que limita la tensión entre espiras adyacentes",
    incorrectas: [
      "La tensión total del transformador dividida por 100",
      "La tensión de red de 230 V siempre"
    ]
  },
  {
    enunciado: "¿Qué prueba dieléctrica verifica el aislamiento entre bobinados y masa (tierra)?",
    correcta: "La medida de resistencia de aislamiento (Megger) y el ensayo de rigidez dieléctrica (tensión aplicada)",
    incorrectas: [
      "La medida de continuidad con un buzzer",
      "La prueba de calentamiento a carga nominal"
    ]
  },
  {
    enunciado: "¿Qué es el papel de pescado (fishpaper) o cartón prespán?",
    correcta: "Un aislante eléctrico tradicional a base de celulosa vulcanizada, resistente y flexible, usado para aislar ranuras y capas",
    incorrectas: [
      "Papel de envolver pescado usado en la industria alimentaria",
      "Un papel de lija fino"
    ]
  },
  {
    enunciado: "¿Qué es una toma de regulación (tap) en el propio bobinado?",
    correcta: "Una conexión sacada a una espira intermedia que permite seleccionar un número de vueltas diferente para ajustar la tensión",
    incorrectas: [
      "Un agujero de ventilación en el cobre",
      "Una toma de agua para refrigerar"
    ]
  },
  {
    enunciado: "¿Por qué se evita dejar espiras en cortocircuito accidentales (ej. marco metálico cerrado) alrededor del núcleo?",
    correcta: "Porque actuarían como un secundario en cortocircuito de una sola espira, induciendo corrientes enormes que calentarían y destruirían el transformador",
    incorrectas: [
      "Porque captarían señales de radio",
      "Porque enfriarían demasiado el núcleo"
    ]
  },
  {
    enunciado: "¿Qué es el 'entrefierro' en un diseño de reactancia o transformador?",
    correcta: "Un pequeño espacio de aire (o material no magnético) en el circuito magnético para aumentar la reluctancia y evitar la saturación (común en fuentes con DC)",
    incorrectas: [
      "Una herramienta de hierro para entretenerse",
      "La unión soldada de las chapas"
    ]
  },
  {
    enunciado: "¿Qué indica la clase térmica 200 o 220 en hilos de cobre?",
    correcta: "Que el esmalte soporta temperaturas muy altas (200-220 ºC) sin degradarse, típico en aplicaciones severas o de tracción",
    incorrectas: [
      "Que el hilo tiene 200 mm de diámetro",
      "Que el hilo tiene 200 capas de barniz"
    ]
  },
  {
    enunciado: "¿En un transformador trifásico, cómo se conectan los finales de las tres bobinas para hacer el punto neutro de una estrella?",
    correcta: "Se unen los tres finales (X, Y, Z o U2, V2, W2) en un punto común, que será el neutro",
    incorrectas: [
      "Se conectan cada uno al principio de la siguiente bobina",
      "Se conectan a tierra individualmente sin unirse entre sí"
    ]
  },
  {
    enunciado: "¿Qué es la impregnación al vacío (VPI)?",
    correcta: "Un proceso avanzado donde se extrae el aire y humedad del bobinado en una cámara de vacío antes de inyectar resina a presión, logrando un aislamiento perfecto sin burbujas",
    incorrectas: [
      "Aspirar el polvo del transformador con una aspiradora",
      "Llenar el transformador de aire comprimido"
    ]
  },
  {
    enunciado: "¿Qué es un bobinado bifilar?",
    correcta: "Bobinar dos hilos simultáneamente como si fueran uno, usado para reducir inductancias parásitas o asegurar simetría exacta en secundarios dobles",
    incorrectas: [
      "Un bobinado que solo tiene dos vueltas",
      "Un bobinado hecho de alambre de espino"
    ]
  },
  {
    enunciado: "¿Qué cuidado requiere el manejo de chapas de grano orientado?",
    correcta: "No doblarlas ni golpearlas, ya que el estrés mecánico degrada sus propiedades magnéticas direccionales y aumenta las pérdidas",
    incorrectas: [
      "Hay que lijarlas antes de montarlas",
      "Se pueden doblar como se quiera sin problemas"
    ]
  },
  {
    enunciado: "¿Qué es una pantalla electrostática entre primario y secundario?",
    correcta: "Una lámina de cobre abierta (sin espira en corto) conectada a tierra, puesta entre bobinados para derivar ruidos capacitivos de alta frecuencia",
    incorrectas: [
      "Una chapa de acero para blindaje magnético",
      "Una pantalla LCD para ver la temperatura"
    ]
  },
  {
    enunciado: "¿Qué es un autotransformador variable (Variac)?",
    correcta: "Un autotransformador toroidal con una escobilla deslizante que permite variar la tensión de salida de forma continua desde 0 a Vmax",
    incorrectas: [
      "Un transformador que varía su frecuencia aleatoriamente",
      "Una resistencia variable de potencia"
    ]
  },
  {
    enunciado: "¿Para qué sirve la cinta de algodón o poliéster final en la bobina?",
    correcta: "Para protección mecánica exterior y sujeción final del bobinado antes del barnizado",
    incorrectas: [
      "Para secar el sudor del bobinador",
      "Para que prenda fuego fácilmente si hay avería"
    ]
  },
  {
    enunciado: "¿Qué herramienta mide el diámetro del hilo esmaltado?",
    correcta: "El micrómetro (palmer), teniendo en cuenta descontar el espesor del esmalte si se busca el diámetro del cobre desnudo",
    incorrectas: [
      "La cinta métrica de costura",
      "El amperímetro de pinza"
    ]
  },
  {
    enunciado: "¿Qué es el 'paso' de bobina en máquinas rotativas (aunque aplicable a conceptos de bobinado)?",
    correcta: "La distancia angular o número de ranuras que abarca una bobina",
    incorrectas: [
      "El paso de peatones del taller",
      "La velocidad a la que se bobina"
    ]
  },
  {
    enunciado: "¿Qué problema causa un bobinado flojo (sin tensión mecánica adecuada)?",
    correcta: "Vibración de los hilos por fuerzas electromagnéticas, ruido (zumbido) y desgaste del aislamiento por rozamiento, llevando al fallo",
    incorrectas: [
      "Mejora la ventilación al haber huecos",
      "Reduce la resistencia eléctrica"
    ]
  }
];
