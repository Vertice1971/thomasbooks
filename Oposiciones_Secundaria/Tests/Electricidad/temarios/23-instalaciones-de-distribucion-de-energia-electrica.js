// 23-instalaciones-de-distribucion-de-energia-electrica.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función principal de una Red de Distribución de Energía Eléctrica?",
    correcta: "Transportar la energía desde las subestaciones de transformación (MAT/AT a MT, y MT/BT) hasta los puntos de consumo finales",
    incorrectas: [
      "Generar la energía en las centrales nucleares",
      "Controlar el precio de la electricidad en el mercado"
    ]
  },
  {
    enunciado: "¿Qué rango de tensión se considera Media Tensión (MT) habitualmente en distribución en España?",
    correcta: "Tensiones nominales superiores a 1 kV y hasta 36 kV (siendo muy comunes 20 kV, 15 kV y 13.2 kV)",
    incorrectas: [
      "Tensiones de 230 V y 400 V",
      "Tensiones de 400 kV"
    ]
  },
  {
    enunciado: "¿Qué topología de red es la más utilizada en distribución urbana subterránea de MT por su fiabilidad?",
    correcta: "La estructura en anillo (bucle abierto), que permite alimentar un centro de transformación desde dos extremos en caso de fallo",
    incorrectas: [
      "La estructura radial pura sin posibilidad de socorro",
      "La estructura en malla total conectada rígidamente"
    ]
  },
  {
    enunciado: "¿Y en zonas rurales con largas distancias?",
    correcta: "La red radial (o arborescente), por ser más económica al extender ramales desde un punto central",
    incorrectas: [
      "La red mallada subterránea",
      "La red en anillo cerrado permanente"
    ]
  },
  {
    enunciado: "¿Qué es un Centro de Transformación (CT)?",
    correcta: "Una instalación que recibe energía en Media Tensión y la transforma a Baja Tensión para su distribución a los usuarios (o de MT a MT en reparto)",
    incorrectas: [
      "Un lugar donde se fabrican transformadores",
      "Una central eléctrica pequeña"
    ]
  },
  {
    enunciado: "¿Qué elementos principales componen un CT de abonado típico?",
    correcta: "Celdas de entrada y salida de línea (MT), celda de protección (fusibles o interruptor), transformador y cuadro de Baja Tensión",
    incorrectas: [
      "Solo un contador y un interruptor de luz",
      "Generadores diesel y baterías exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué es una celda de línea en un CT?",
    correcta: "El conjunto de aparamenta (seccionador de línea) que permite conectar o aislar la entrada/salida del cable de media tensión del anillo",
    incorrectas: [
      "Una celda para guardar herramientas",
      "La celda donde está el transformador"
    ]
  },
  {
    enunciado: "¿Qué es el gas SF6 (hexafloruro de azufre) en distribución?",
    correcta: "Un gas con excelentes propiedades dieléctricas y de extinción de arco, usado como aislante en celdas de MT modernas (GIS)",
    incorrectas: [
      "Un gas combustible para generadores",
      "Un gas tóxico que se usa para matar ratas en las galerías"
    ]
  },
  {
    enunciado: "¿Qué es una Red de Trenzado (RZ) en distribución aérea de BT?",
    correcta: "Un haz de cables aislados enrollados en hélice visible (conductor neutro como fiador y fases alrededor), sustituyendo a las líneas desnudas antiguas",
    incorrectas: [
      "Una red de pesca colgada de los postes",
      "Cables de acero desnudo sin aislar"
    ]
  },
  {
    enunciado: "¿Qué representa el conductor Aislado XLPE?",
    correcta: "Polietileno Reticulado, un aislamiento termoestable muy resistente térmicamente (90ºC servicio) usado en cables subterráneos de MT y BT",
    incorrectas: [
      "Plástico PVC barato para interiores",
      "Papel impregnado en aceite (tecnología obsoleta)"
    ]
  },
  {
    enunciado: "¿Qué es un seccionador bajo carga (o interruptor-seccionador)?",
    correcta: "Un dispositivo capaz de abrir y cerrar el circuito con corriente nominal (carga), pero no corrientes de cortocircuito (requiere fusibles para eso)",
    incorrectas: [
      "Un interruptor que solo se puede abrir sin tensión ni corriente",
      "Un interruptor automático magnetotérmico"
    ]
  },
  {
    enunciado: "¿Qué función tienen los autoválvulas o pararrayos en las líneas aéreas?",
    correcta: "Derivar a tierra las sobretensiones de origen atmosférico (rayos) protegiendo los aisladores y transformadores de la línea",
    incorrectas: [
      "Evitar que se posen los pájaros",
      "Medir la tensión de la línea"
    ]
  },
  {
    enunciado: "¿Qué es la caída de tensión máxima permitida en una línea de distribución?",
    correcta: "El porcentaje máximo que puede bajar la tensión desde el origen al final de la línea para garantizar el funcionamiento correcto de los equipos (ej. +/- 7% en BT rural)",
    incorrectas: [
      "La tensión a la que se cae el cable al suelo",
      "100 voltios siempre"
    ]
  },
  {
    enunciado: "¿Qué es el neutro de la red de distribución?",
    correcta: "El punto común de la estrella del transformador de distribución, que se conecta a tierra en el CT y se distribuye a los usuarios",
    incorrectas: [
      "Un cable que no lleva corriente nunca",
      "La fase menos peligrosa"
    ]
  },
  {
    enunciado: "¿Qué esquema de conexión a tierra se usa mayoritariamente en distribución pública de BT en España?",
    correcta: "Esquema TT (Neutro del trafo a tierra, masas del usuario a su propia tierra independiente)",
    incorrectas: [
      "Esquema TN-C (Neutro y tierra unidos en toda la red)",
      "Esquema IT (Neutro aislado)"
    ]
  },
  {
    enunciado: "¿Qué es una acometida eléctrica?",
    correcta: "La parte de la instalación que une la red de distribución pública con la Caja General de Protección (CGP) del usuario",
    incorrectas: [
      "El enchufe de la cocina",
      "La línea que va del contador al cuadro de la casa"
    ]
  },
  {
    enunciado: "¿Qué es la Caja General de Protección (CGP)?",
    correcta: "El elemento que aloja los fusibles de protección general de la línea repartidora del edificio, marcando el límite de propiedad (generalmente)",
    incorrectas: [
      "El cuadro de automáticos dentro de la vivienda",
      "La caja de registro de la calle"
    ]
  },
  {
    enunciado: "¿Qué son las pérdidas técnicas en distribución?",
    correcta: "La energía disipada en forma de calor (efecto Joule) en conductores y transformadores debido a la resistencia y corrientes parásitas",
    incorrectas: [
      "La energía robada por enganches ilegales (pérdidas no técnicas)",
      "La energía que se pierde cuando se va la luz"
    ]
  },
  {
    enunciado: "¿Qué es un Centro de Reparto (CR)?",
    correcta: "Un centro que recibe energía en MT y la distribuye en MT a otros centros de transformación, sin transformar a baja tensión",
    incorrectas: [
      "Un sitio donde se reparten facturas",
      "Un centro de transformación pequeño"
    ]
  },
  {
    enunciado: "¿Qué es el conductor 'Almelec' o aleación de aluminio?",
    correcta: "Una aleación de aluminio, magnesio y silicio usada en líneas aéreas de MT por su buena relación conductividad/resistencia mecánica/peso",
    incorrectas: [
      "Un conductor de cobre puro recubierto de oro",
      "Un plástico conductor"
    ]
  },
  {
    enunciado: "¿Qué distancia mínima de seguridad debe haber entre conductores desnudos de una línea aérea y el suelo?",
    correcta: "Depende de la tensión y la zona (caminos, carreteras), definida en el reglamento RLAT (ej. 6 metros en zonas normales)",
    incorrectas: [
      "1 metro es suficiente",
      "50 centímetros"
    ]
  },
  {
    enunciado: "¿Qué es un empalme o botella terminal en cables subterráneos?",
    correcta: "Un accesorio crítico que asegura la continuidad eléctrica, el aislamiento y el sellado frente a humedad en la unión/terminación de cables (puntos débiles)",
    incorrectas: [
      "Una botella de plástico para proteger el cable",
      "Un nudo hecho con el cable"
    ]
  },
  {
    enunciado: "¿Qué es la pantalla semiconductora en un cable de MT?",
    correcta: "Una capa que uniformiza el campo eléctrico alrededor del conductor y del aislamiento para evitar concentraciones de estrés eléctrico",
    incorrectas: [
      "Una pantalla digital para ver la tensión",
      "Una armadura de acero para protección mecánica"
    ]
  },
  {
    enunciado: "¿Qué es la armadura de fleje de acero en un cable?",
    correcta: "Una protección mecánica externa contra roedores, golpes y aplastamiento, obligatoria en ciertos tendidos subterráneos directos",
    incorrectas: [
      "Un adorno brillante",
      "Un conductor extra para llevar otra fase"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene elevar la tensión para transportar energía?",
    correcta: "Reduce la intensidad de corriente para la misma potencia (P=V·I), disminuyendo drásticamente las pérdidas por efecto Joule (I²R) y la sección de cable",
    incorrectas: [
      "Aumenta la velocidad de la electricidad",
      "Es más seguro para las personas"
    ]
  },
  {
    enunciado: "¿Qué es un transformador de potencia 'de llenado integral' en un CT?",
    correcta: "Un trafo hermético sin depósito de expansión, lleno de aceite totalmente, que absorbe la dilatación mediante la elasticidad de las aletas de la cuba",
    incorrectas: [
      "Un trafo que hay que llenar de aceite cada día",
      "Un trafo macizo de hierro"
    ]
  },
  {
    enunciado: "¿Qué es el embarrado de un CT?",
    correcta: "El conjunto de barras de cobre o aluminio que interconectan las celdas de MT o las salidas del cuadro de BT",
    incorrectas: [
      "El suelo lleno de barro del CT",
      "La reja de ventilación"
    ]
  },
  {
    enunciado: "¿Qué función tiene el enclavamiento mecánico en la celda de un CT?",
    correcta: "Impedir operaciones peligrosas, como abrir el seccionador en carga o abrir la puerta y acceder a fusibles sin haber puesto a tierra previamente",
    incorrectas: [
      "Cerrar la puerta con llave para que no roben",
      "Fijar el CT al suelo"
    ]
  },
  {
    enunciado: "¿Qué es la tensión de paso y contacto?",
    correcta: "Tensiones peligrosas que pueden aparecer en el suelo o partes metálicas cercanas a una puesta a tierra durante un defecto, que el diseño de tierras debe limitar",
    incorrectas: [
      "La tensión de la batería del coche",
      "La tensión de línea normal"
    ]
  },
  {
    enunciado: "¿Qué es un reconectador (recloser) en líneas aéreas?",
    correcta: "Un interruptor automático que, ante un fallo (ej. rama tocando la línea), abre y vuelve a cerrar varias veces para despejar fallos transitorios automáticamente",
    incorrectas: [
      "Un operario que conecta cables",
      "Un fusible que se cambia solo"
    ]
  },
  {
    enunciado: "¿Qué es la 'Línea General de Alimentación' (LGA)?",
    correcta: "El cable que enlaza la Caja General de Protección con la centralización de contadores del edificio",
    incorrectas: [
      "La línea de alta tensión",
      "El cable del ascensor"
    ]
  },
  {
    enunciado: "¿Qué es un aislador de cadena o suspensión?",
    correcta: "Un conjunto flexible de discos aislantes (vidrio/cerámica) unidos en serie, usado en torres de tensión media/alta para sostener el conductor",
    incorrectas: [
      "Un aislador rígido clavado en el poste",
      "Una cadena de hierro para atar el cable"
    ]
  },
  {
    enunciado: "¿Qué normativa regula las Líneas de Alta Tensión (incluye MT)?",
    correcta: "El RLAT (Reglamento de Líneas Eléctricas de Alta Tensión), Real Decreto 223/2008",
    incorrectas: [
      "El REBT (Reglamento de Baja Tensión)",
      "El Código de Circulación"
    ]
  },
  {
    enunciado: "¿Qué es el 'galope' (galloping) de conductores?",
    correcta: "Oscilaciones verticales de gran amplitud y baja frecuencia en líneas aéreas debidas al viento y hielo, que pueden cruzar fases o romper la línea",
    incorrectas: [
      "Cuando los electrones van muy rápido",
      "El ruido del viento en los cables"
    ]
  },
  {
    enunciado: "¿Qué es un fusible de expulsión (XS) en intemperie?",
    correcta: "Un cortacircuito fusible montado en un tubo que, al fundirse, expulsa gases y cuelga visiblemente para indicar el corte (seccionador de caída)",
    incorrectas: [
      "Un fusible que explota la torre",
      "Un fusible que expulsa al operario"
    ]
  },
  {
    enunciado: "¿Qué significa el código RHZ1 en un cable?",
    correcta: "Aislamiento de XLPE (R), pantalla metálica de hilos (H), cubierta de poliolefina libre de halógenos (Z1), tensión nominal (1)",
    incorrectas: [
      "Resistencia Hidrófuga Zona 1",
      "Cable de rebaño de ovejas"
    ]
  },
  {
    enunciado: "¿Qué es una subestación blindada GIS?",
    correcta: "Gas Insulated Switchgear: Subestación compacta donde toda la aparamenta está encapsulada en gas SF6, ocupando muy poco espacio",
    incorrectas: [
      "Una subestación con paredes de plomo",
      "Una subestación militar"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requieren las franjas de servidumbre (calles) bajo líneas aéreas?",
    correcta: "Tala y poda periódica de vegetación (tala forestal) para asegurar que los árboles no violan las distancias de seguridad causando incendios o arcos",
    incorrectas: [
      "Asfaltar el suelo",
      "Poner flores decorativas"
    ]
  },
  {
    enunciado: "¿Qué es un contador de telegestión inteligente?",
    correcta: "Un contador digital capaz de medir horariamente, cortar suministro a distancia y comunicar lecturas automáticamente a la distribuidora (PLC/GPRS)",
    incorrectas: [
      "Un contador que habla",
      "Un contador analógico de disco"
    ]
  }
];
