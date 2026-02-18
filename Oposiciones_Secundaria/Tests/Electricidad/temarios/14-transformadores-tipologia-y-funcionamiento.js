// 14-transformadores-tipologia-y-funcionamiento.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el principio físico fundamental del funcionamiento de un transformador?",
    correcta: "La inducción electromagnética mutua entre dos bobinados acoplados magnéticamente",
    incorrectas: [
      "La conducción eléctrica directa entre primario y secundario",
      "El efecto fotoeléctrico en el núcleo magnético"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre las tensiones y el número de espiras en un transformador ideal?",
    correcta: "La relación de tensiones es directamente proporcional a la relación del número de espiras (U1/U2 = N1/N2)",
    incorrectas: [
      "La relación de tensiones es inversamente proporcional al cuadrado de las espiras",
      "La tensión es siempre igual en primario y secundario independientemente de las espiras"
    ]
  },
  {
    enunciado: "¿Qué función tiene el núcleo de hierro (o acero al silicio) en un transformador?",
    correcta: "Canalizar el flujo magnético para maximizar el acoplamiento entre bobinados y reducir la reluctancia del circuito magnético",
    incorrectas: [
      "Disipar el calor generado por los bobinados",
      "Aislar eléctricamente el primario del secundario"
    ]
  },
  {
    enunciado: "¿Por qué se lamina el núcleo magnético en chapas aisladas entre sí?",
    correcta: "Para reducir las pérdidas por corrientes de Foucault (o parásitas) que circulan por el hierro",
    incorrectas: [
      "Para facilitar el montaje mecánico de las piezas",
      "Para aumentar la resistencia mecánica del núcleo frente a golpes"
    ]
  },
  {
    enunciado: "¿Qué es un autotransformador y en qué se diferencia de un transformador convencional?",
    correcta: "Tiene un solo bobinado con una toma intermedia, por lo que primario y secundario comparten espiras y están conectados eléctricamente",
    incorrectas: [
      "Es un transformador que se ajusta automáticamente sin intervención humana",
      "Es un transformador que genera su propia energía sin entrada"
    ]
  },
  {
    enunciado: "¿Qué ventaja principal presenta el autotransformador frente al transformador de igual potencia?",
    correcta: "Menor tamaño, peso y coste, y mayor rendimiento, al transmitir parte de la potencia por conducción directa",
    incorrectas: [
      "Proporciona aislamiento galvánico total entre entrada y salida",
      "Es más seguro frente a sobretensiones atmosféricas"
    ]
  },
  {
    enunciado: "¿Qué es la corriente de vacío (I0) de un transformador?",
    correcta: "La corriente pequeña que absorbe el primario cuando el secundario está en circuito abierto, destinada a magnetizar el núcleo y cubrir pérdidas en el hierro",
    incorrectas: [
      "La corriente máxima que soporta antes de quemarse",
      "La corriente de cortocircuito cuando se unen los bornes del secundario"
    ]
  },
  {
    enunciado: "¿Qué pérdidas se consideran 'pérdidas en el cobre'?",
    correcta: "Las pérdidas por efecto Joule (calor) debidas a la resistencia óhmica de los devanados",
    incorrectas: [
      "Las pérdidas por histéresis magnética en el núcleo",
      "Las pérdidas por fugas de aceite dieléctrico"
    ]
  },
  {
    enunciado: "¿Qué índice de grupo de conexión (ej. Dy11) indica el desfase entre primario y secundario?",
    correcta: "El número (ej. 11) indica el desfase en múltiplos de 30 grados (11 x 30 = 330 grados o -30 grados)",
    incorrectas: [
      "Indica el número de bobinas del transformador",
      "Indica la potencia nominal en kVA"
    ]
  },
  {
    enunciado: "¿Qué significa la conexión 'Zig-Zag' (z) en el secundario?",
    correcta: "Una conexión donde cada fase del secundario se divide en dos partes bobinadas en columnas diferentes, útil para equilibrar cargas desequilibradas",
    incorrectas: [
      "Que los cables de salida están trenzados físicamente",
      "Que el transformador oscila mecánicamente"
    ]
  },
  {
    enunciado: "¿Qué es un transformador de aislamiento o separación?",
    correcta: "Un transformador de relación 1:1 destinado principalmente a proteger personas aislando el circuito de tierra o a filtrar ruido",
    incorrectas: [
      "Un transformador que eleva la tensión a valores de muy alta tensión",
      "Un transformador envuelto en una manta aislante térmica"
    ]
  },
  {
    enunciado: "¿Qué es el aceite dieléctrico en un transformador de potencia?",
    correcta: "Un fluido aislante y refrigerante que impregna los bobinados y rellena la cuba",
    incorrectas: [
      "Un lubricante para las partes móviles del transformador",
      "Un combustible para el generador auxiliar"
    ]
  },
  {
    enunciado: "¿Qué dispositivo protege a un transformador de aceite frente a presiones internas por fallos?",
    correcta: "El relé Buchholz (en transformadores con depósito de expansión) o válvula de sobrepresión",
    incorrectas: [
      "El termostato de ambiente de la sala",
      "El interruptor diferencial de la vivienda"
    ]
  },
  {
    enunciado: "¿Qué es la tensión de cortocircuito (ucc) de un transformador?",
    correcta: "La tensión que hay que aplicar al primario para que circule la intensidad nominal por el secundario estando este en cortocircuito (expresada en %)",
    incorrectas: [
      "La tensión máxima que aguanta antes de explotar",
      "La tensión de salida cuando no hay carga conectada"
    ]
  },
  {
    enunciado: "¿Qué transforma un transformador de intensidad (TI)?",
    correcta: "Reduce una corriente elevada en el primario a una proporcional y manejable (ej. 5 A) en el secundario, para medida o protección",
    incorrectas: [
      "Convierte corriente continua en alterna",
      "Eleva la intensidad para soldadura eléctrica exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué precaución mortal debe tenerse con un Transformador de Intensidad (TI) en servicio?",
    correcta: "Nunca dejar el secundario en circuito abierto mientras circula corriente por el primario, ya que se inducen tensiones peligrosas y se quema",
    incorrectas: [
      "Nunca ponerlo en cortocircuito el secundario",
      "No acercar imanes porque se desmagnetiza"
    ]
  },
  {
    enunciado: "¿Qué define a un transformador 'seco' encapsulado en resina?",
    correcta: "Que sus bobinados están recubiertos de resina epoxi sólida en lugar de aceite, reduciendo riesgo de incendio y mantenimiento",
    incorrectas: [
      "Que debe instalarse en lugares sin humedad ambiental absoluta",
      "Que no tiene núcleo magnético"
    ]
  },
  {
    enunciado: "¿Qué fenómeno es la histéresis magnética?",
    correcta: "La inercia del material magnético a cambiar su magnetización, causando pérdidas de energía en cada ciclo de alterna",
    incorrectas: [
      "La vibración mecánica de las chapas a 50 Hz",
      "El calentamiento de los cables por resistencia"
    ]
  },
  {
    enunciado: "¿Qué es el ensayo de vacío en un transformador?",
    correcta: "Una prueba donde se aplica tensión nominal a un devanado con el otro abierto, midiendo pérdidas en el hierro y corriente de magnetización",
    incorrectas: [
      "Poner el transformador en una cámara de vacío sin aire",
      "Probar si el transformador flota en aceite"
    ]
  },
  {
    enunciado: "¿Qué es el ensayo de cortocircuito?",
    correcta: "Una prueba a tensión reducida con el secundario cortocircuitado, para medir las pérdidas en el cobre y la tensión de cortocircuito",
    incorrectas: [
      "Provocar un cortocircuito real a tensión nominal para ver si saltan los fusibles",
      "Medir la continuidad de los cables con un 'polímetro'"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre corrientes y espiras en un transformador ideal?",
    correcta: "La relación de corrientes es inversamente proporcional a la de espiras (I1/I2 = N2/N1)",
    incorrectas: [
      "La corriente es igual en ambos lados",
      "La corriente se pierde totalmente en el núcleo"
    ]
  },
  {
    enunciado: "¿Qué es un transformador trifásico tipo núcleo?",
    correcta: "Aquel que tiene tres columnas magnéticas unidas por culatas, donde se alojan los bobinados de las tres fases",
    incorrectas: [
      "Tres transformadores monofásicos separados conectados por cables",
      "Un transformador esférico"
    ]
  },
  {
    enunciado: "¿Para qué sirve el cambiador de tomas (tap changer) en un transformador de distribución?",
    correcta: "Para ajustar ligeramente la relación de transformación y regular la tensión de salida ante variaciones de carga o red",
    incorrectas: [
      "Para cambiar la frecuencia de 50 Hz a 60 Hz",
      "Para desconectar el transformador de la red"
    ]
  },
  {
    enunciado: "¿Qué significa que un transformador sea 'Elevador'?",
    correcta: "Que la tensión del secundario es mayor que la del primario (N2 > N1)",
    incorrectas: [
      "Que está montado físicamente en un poste alto",
      "Que aumenta la frecuencia de la señal"
    ]
  },
  {
    enunciado: "¿Qué es la potencia aparente nominal (S) de un transformador?",
    correcta: "La potencia máxima (en kVA o MVA) que puede transmitir en régimen continuo sin sobrecalentarse, suma vectorial de activa y reactiva",
    incorrectas: [
      "La potencia que consume de la red en vacío",
      "La potencia mecánica que puede entregar un motor conectado"
    ]
  },
  {
    enunciado: "¿Por qué los transformadores se clasifican por potencia en kVA y no en kW?",
    correcta: "Porque el calentamiento depende de la corriente total (aparente) y no del factor de potencia de la carga conectada",
    incorrectas: [
      "Es solo una convención comercial sin razón técnica",
      "Porque los kVA son siempre iguales a los kW en alterna"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el armónico de tercer orden en transformadores trifásicos estrella-estrella sin neutro?",
    correcta: "Pueden distorsionar la tensión de fase y causar sobretensiones, por lo que se suelen evitar o usar devanados terciarios en triángulo",
    incorrectas: [
      "Mejoran el rendimiento del transformador",
      "Hacen que el transformador funcione más silencioso"
    ]
  },
  {
    enunciado: "¿Qué es el flujo de dispersión?",
    correcta: "La parte del flujo magnético que se cierra por el aire y no concatena ambos bobinados, comportándose como una reactancia inductiva en serie",
    incorrectas: [
      "El aceite que se escapa por las juntas",
      "La corriente que se fuga a tierra"
    ]
  },
  {
    enunciado: "¿Qué es un transformador toroidal?",
    correcta: "Un transformador con núcleo en forma de anillo (toroide), muy eficiente y con bajo campo magnético disperso, usado en audio e instrumentación",
    incorrectas: [
      "Un transformador con forma de toro o cubo",
      "Un transformador que solo funciona en España"
    ]
  },
  {
    enunciado: "¿Qué es la temperatura de 'punto caliente' en el bobinado?",
    correcta: "La temperatura máxima local en el punto más caliente del aislamiento, que determina la vida útil del transformador",
    incorrectas: [
      "La temperatura exterior de la cuba al sol",
      "La temperatura del aceite en la parte inferior"
    ]
  },
  {
    enunciado: "¿Qué es un transformador de seguridad (para muy baja tensión de seguridad MBTS)?",
    correcta: "Un transformador diseñado para alimentar circuitos (ej. 12V o 24V) garantizando un aislamiento reforzado frente a la red primaria",
    incorrectas: [
      "Un transformador que lleva un candado",
      "Un transformador que avisa a la policía si hay robo"
    ]
  },
  {
    enunciado: "¿Qué ruido es característico de un transformador en funcionamiento?",
    correcta: "Un zumbido a la frecuencia de red (y armónicos) provocado por la magnetostricción de las chapas del núcleo",
    incorrectas: [
      "Un silbido agudo por el paso del aire en los ventiladores exclusivamente",
      "Un golpeteo rítmico como de motor diesel"
    ]
  },
  {
    enunciado: "¿Qué es la saturación magnética?",
    correcta: "El estado en que el núcleo no puede canalizar más líneas de flujo magnético al aumentar la corriente, provocando distorsión y calentamiento",
    incorrectas: [
      "Cuando el transformador está lleno de aceite hasta el borde",
      "Cuando se conectan demasiadas cargas al secundario"
    ]
  },
  {
    enunciado: "¿Qué conexión trifásica permite disponer de neutro en el secundario?",
    correcta: "La conexión en Estrella (Y) o en Zig-Zag (Z)",
    incorrectas: [
      "La conexión en Triángulo (D) exclusivamente",
      "La conexión monofásica"
    ]
  },
  {
    enunciado: "¿Qué es el rendimiento de un transformador?",
    correcta: "La relación entre la potencia activa entregada en el secundario y la absorbida en el primario (siempre < 1, aunque muy alto, >95-98%)",
    incorrectas: [
      "El tiempo que tarda en arrancar",
      "La cantidad de aceite que consume por año"
    ]
  },
  {
    enunciado: "¿Qué tipo de refrigeración es ONAN?",
    correcta: "Oil Natural Air Natural: Aceite con circulación natural y Aire con circulación natural (sin bombas ni ventiladores)",
    incorrectas: [
      "Aire forzado con nitrógeno líquido",
      "Refrigeración por agua de río"
    ]
  },
  {
    enunciado: "¿Qué es un transformador de pulso?",
    correcta: "Un transformador pequeño diseñado para transmitir pulsos de disparo a tiristores o transistores en electrónica de potencia, con flancos rápidos",
    incorrectas: [
      "Un transformador que mide el pulso cardíaco del operario",
      "Un transformador de alta potencia para líneas de tren"
    ]
  },
  {
    enunciado: "¿Qué pasa si conectas un transformador de 230V a corriente continua (12V DC)?",
    correcta: "El primario se comportará como una resistencia pura muy baja, absorberá una corriente enorme y se quemará, ya que no hay inducción ni reactancia",
    incorrectas: [
      "Funcionará perfectamente transformando a continua",
      "No pasará nada, simplemente no saldrá tensión"
    ]
  },
  {
    enunciado: "¿Qué es el 'inrush current' al conectar un transformador?",
    correcta: "La corriente transitoria de magnetización, muy elevada (hasta 10-20 veces In), que ocurre al conectar el primario a la red",
    incorrectas: [
      "La corriente de fuga permanente a tierra",
      "La corriente de carga de la batería interna"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene la conexión Triángulo-Estrella (Dy) en distribución?",
    correcta: "Aislar el neutro del secundario de la red primaria, atenuar armónicos y permitir cargas desequilibradas en baja tensión",
    incorrectas: [
      "Es la más barata porque usa menos cable",
      "Permite conectar el primario directamente a tierra"
    ]
  }
];
