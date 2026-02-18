// 25-electrificacion-en-viviendas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué ITC del REBT regula específicamente las instalaciones interiores en viviendas?",
    correcta: "La ITC-BT-25 (Instalaciones interiores en viviendas. Número de circuitos y características)",
    incorrectas: [
      "La ITC-BT-28 (Locales de pública concurrencia)",
      "La ITC-BT-09 (Alumbrado exterior)"
    ]
  },
  {
    enunciado: "¿Cuáles son los dos grados de electrificación definidos en viviendas?",
    correcta: "Electrificación Básica y Electrificación Elevada",
    incorrectas: [
      "Electrificación Baja y Electrificación Alta",
      "Electrificación Monofásica y Trifásica"
    ]
  },
  {
    enunciado: "¿Cuál es la potencia mínima prevista para el grado de electrificación Básica?",
    correcta: "5.750 W (a 230 V), aunque el usuario puede contratar menos potencia si lo desea, la instalación debe estar preparada para ello",
    incorrectas: [
      "3.000 W",
      "9.200 W"
    ]
  },
  {
    enunciado: "¿Y para el grado de electrificación Elevada?",
    correcta: "9.200 W (mínimo, pudiendo ser mayor)",
    incorrectas: [
      "5.750 W",
      "14.490 W obligatoriamente"
    ]
  },
  {
    enunciado: "¿Cuándo es obligatorio el grado de electrificación Elevada?",
    correcta: "Cuando la vivienda supere los 160 m², tenga calefacción eléctrica/aire acondicionado, secadora, o más circuitos de los 5 básicos (C1-C5)",
    incorrectas: [
      "Solo si tiene piscina climatizada",
      "Cuando tiene más de 2 habitantes"
    ]
  },
  {
    enunciado: "¿Qué alimenta el circuito C1?",
    correcta: "Iluminación (puntos de luz)",
    incorrectas: [
      "Tomas de corriente de uso general",
      "Cocina y horno"
    ]
  },
  {
    enunciado: "¿Qué alimenta el circuito C2?",
    correcta: "Tomas de corriente de uso general y frigorífico",
    incorrectas: [
      "Lavadora y Calentador",
      "Aire acondicionado"
    ]
  },
  {
    enunciado: "¿Qué alimenta el circuito C3?",
    correcta: "Cocina y horno",
    incorrectas: [
      "Lavadora, lavavajillas y termo eléctrico",
      "Iluminación auxiliar"
    ]
  },
  {
    enunciado: "¿Qué alimenta el circuito C4?",
    correcta: "Lavadora, lavavajillas y termo eléctrico (o calentador)",
    incorrectas: [
      "Secadora y aire acondicionado",
      "Tomas de corriente de los baños"
    ]
  },
  {
    enunciado: "¿Qué alimenta el circuito C5?",
    correcta: "Tomas de corriente de los cuartos de baño y bases auxiliares de cocina",
    incorrectas: [
      "Calefacción eléctrica",
      "Domótica"
    ]
  },
  {
    enunciado: "¿Qué sección mínima y protección (PIA) corresponde al circuito C1 (Iluminación)?",
    correcta: "1.5 mm² y PIA de 10 A",
    incorrectas: [
      "2.5 mm² y PIA de 16 A",
      "6 mm² y PIA de 25 A"
    ]
  },
  {
    enunciado: "¿Qué sección mínima y protección corresponde al circuito C2 (Tomas general)?",
    correcta: "2.5 mm² y PIA de 16 A",
    incorrectas: [
      "1.5 mm² y PIA de 10 A",
      "4 mm² y PIA de 20 A"
    ]
  },
  {
    enunciado: "¿Qué sección mínima y protección corresponde al circuito C3 (Cocina/Horno)?",
    correcta: "6 mm² y PIA de 25 A",
    incorrectas: [
      "4 mm² y PIA de 20 A",
      "10 mm² y PIA de 40 A"
    ]
  },
  {
    enunciado: "¿Cuál es el número máximo de puntos de luz en el circuito C1?",
    correcta: "30 puntos",
    incorrectas: [
      "10 puntos",
      "Ilimitados"
    ]
  },
  {
    enunciado: "¿Cuál es el número máximo de tomas en el circuito C2?",
    correcta: "20 tomas",
    incorrectas: [
      "5 tomas",
      "50 tomas"
    ]
  },
  {
    enunciado: "¿Qué dispositivo de protección es obligatorio en cabecera para proteger contra contactos indirectos y derivaciones?",
    correcta: "El Interruptor Diferencial (ID) de alta sensibilidad (30 mA)",
    incorrectas: [
      "El Limitador de Potencia (ICP)",
      "El fusible de la compañía"
    ]
  },
  {
    enunciado: "¿Cuál es el número máximo de circuitos que pueden colgar de un mismo Interruptor Diferencial?",
    correcta: "5 circuitos",
    incorrectas: [
      "2 circuitos",
      "10 circuitos"
    ]
  },
  {
    enunciado: "¿Qué es el IGA (Interruptor General Automático)?",
    correcta: "El interruptor de corte omnipolar (fase+neutro) que protege toda la instalación interior contra sobrecargas y cortocircuitos, protegiendo la Derivación Individual",
    incorrectas: [
      "El interruptor para apagar la tele",
      "El interruptor que controla el consumo reactivo"
    ]
  },
  {
    enunciado: "¿Es obligatorio el PCS (Protector Contra Sobretensiones) en viviendas?",
    correcta: "Sí, es obligatorio instalar protección contra sobretensiones transitorias y permanentes en instalaciones nuevas o reformadas según las normas de las CCAA y REBT actualizado",
    incorrectas: [
      "No, es opcional en todos los casos",
      "Solo si hay pararrayos en el edificio"
    ]
  },
  {
    enunciado: "¿Dónde se sitúa el Cuadro General de Mando y Protección (CGMP)?",
    correcta: "En el interior de la vivienda, lo más cerca posible de la entrada de la Derivación Individual, generalmente junto a la puerta de acceso",
    incorrectas: [
      "En el rellano de la escalera",
      "En la cocina obligatoriamente"
    ]
  },
  {
    enunciado: "¿En qué volúmenes de un cuarto de baño está prohibido instalar interruptores o tomas (salvo MBTS)?",
    correcta: "En el Volumen 0 (interior bañera/ducha) y Volumen 1 (vertical sobre la bañera hasta 2.25m)",
    incorrectas: [
      "En el Volumen 3",
      "En ninguna parte del baño se pueden poner enchufes"
    ]
  },
  {
    enunciado: "¿Qué grado de protección IP mínimo se exige en el Volumen 1 y 2 del baño?",
    correcta: "IPX4",
    incorrectas: [
      "IPX0",
      "IPX7 obligatorio"
    ]
  },
  {
    enunciado: "¿Qué tipo de conductores se deben usar en la instalación interior empotrada bajo tubo?",
    correcta: "Conductores unipolares aislados (ej. H07V-K) de tensión asignada 450/750 V",
    incorrectas: [
      "Cables desnudos",
      "Mangueras multiconductoras de 1000 V obligatoriamente"
    ]
  },
  {
    enunciado: "¿Cuál es el código de colores normalizado?",
    correcta: "Fase: Negro/Marrón/Gris. Neutro: Azul. Protección (Tierra): Verde-Amarillo",
    incorrectas: [
      "Fase: Rojo. Neutro: Negro. Tierra: Blanco",
      "Da igual el color mientras funcione"
    ]
  },
  {
    enunciado: "¿Qué circuito adicional C8 se instala en electrificación elevada?",
    correcta: "Circuito para calefacción eléctrica",
    incorrectas: [
      "Circuito para secadora (C10)",
      "Circuito para el timbre"
    ]
  },
  {
    enunciado: "¿Y el circuito C9?",
    correcta: "Circuito para aire acondicionado",
    incorrectas: [
      "Circuito para iluminación de jardín",
      "Circuito de reserva"
    ]
  },
  {
    enunciado: "¿Cuál es la caída de tensión máxima permitida en la instalación interior de vivienda?",
    correcta: "3% para alumbrado y 3% para otros usos (considerando suministro monofásico)",
    incorrectas: [
      "5% para todo",
      "1% para todo"
    ]
  },
  {
    enunciado: "¿Dónde se deben conectar las partes metálicas accesibles de la vivienda (tuberías agua/gas, bañeras, estructura)?",
    correcta: "A la red de tierra a través de la conexión equipotencial principal y/o suplementaria en baños",
    incorrectas: [
      "Al neutro de la instalación",
      "Deben dejarse aisladas flotantes"
    ]
  },
  {
    enunciado: "¿Qué tubo se usa habitualmente en viviendas para empotrar en tabiques de obra?",
    correcta: "Tubo corrugado flexible de PVC o polipropileno (curvable en frío no propagador de llama)",
    incorrectas: [
      "Tubo de acero rígido roscado",
      "Tubo de cobre"
    ]
  },
  {
    enunciado: "¿Cuál es el diámetro mínimo de tubo para los circuitos C1 y C2 (3 cables)?",
    correcta: "Típicamente 16 mm o 20 mm según tabla ITC-BT-21 (normalmente se usa 20 mm mínimo por facilidad)",
    incorrectas: [
      "12 mm",
      "50 mm"
    ]
  },
  {
    enunciado: "¿Qué bases de toma de corriente se deben instalar obligatoriamente?",
    correcta: "Bases con toma de tierra lateral (tipo Schuko) y obturadores de seguridad para protección infantil",
    incorrectas: [
      "Bases planas antiguas sin tierra",
      "Bases americanas planas"
    ]
  },
  {
    enunciado: "¿A qué altura mínima del suelo se recomiendan los mecanismos (interruptores)?",
    correcta: "Aprox. 110 cm del suelo (accesibilidad), aunque el REBT no fija altura estricta salvo en zonas especiales, el CTE pide accesibilidad",
    incorrectas: [
      "A ras de suelo",
      "A 2 metros de altura"
    ]
  },
  {
    enunciado: "¿Y las tomas de corriente generales?",
    correcta: "Aprox. 20-30 cm del suelo",
    incorrectas: [
      "A 5 cm del suelo",
      "En el techo"
    ]
  },
  {
    enunciado: "¿Qué es el circuito de distribución interna?",
    correcta: "En viviendas grandes o dúplex, es la línea que une el cuadro principal con cuadros secundarios",
    incorrectas: [
      "El cable de la antena TV",
      "La red Wi-Fi"
    ]
  },
  {
    enunciado: "¿Un circuito C4 (Lavadora) puede desdoblarse en tres circuitos independientes (C4.1, C4.2, C4.3)?",
    correcta: "Sí, es recomendable para proteger individualmente lavadora, lavavajillas y termo con PIAs de 16A y cable 2.5mm² (aunque la definición estricta de C4 es 25A/4mm² conjunto)",
    incorrectas: [
      "No, está prohibido por el reglamento",
      "Sí, pero deben compartir el mismo PIA obligatoriamente"
    ]
  },
  {
    enunciado: "¿Qué se debe instalar en la cocina además de tomas de corriente?",
    correcta: "Una toma de corriente de 25A para el horno/cocina y tomas de seguridad para usos generales encima de la encimera",
    incorrectas: [
      "Un detector de humos obligatoriamente por REBT",
      "Luces de emergencia"
    ]
  },
  {
    enunciado: "¿Qué es la 'caja de registro' o derivación?",
    correcta: "Cajas empotradas donde se realizan los empalmes y derivaciones de los circuitos hacia los puntos de consumo",
    incorrectas: [
      "La caja fuerte de la casa",
      "La caja del contador"
    ]
  },
  {
    enunciado: "¿Cómo deben hacerse los empalmes en las cajas de registro?",
    correcta: "Utilizando bornas de conexión (clemas o fichas) o conectores rápidos aislados, nunca retorciendo cables y cinta aislante (prohibido mal)",
    incorrectas: [
      "Retorciendo los hilos y poniendo cinta aislante",
      "Soldando con estaño siempre"
    ]
  },
  {
    enunciado: "¿Qué intensidad mínima debe tener el Interruptor General (IGA) para electrificación básica?",
    correcta: "25 A",
    incorrectas: [
      "10 A",
      "16 A"
    ]
  },
  {
    enunciado: "¿Qué ocurre con el neutro en los interruptores magnetotérmicos (PIA)?",
    correcta: "Debe ser de corte omnipolar (Fase + Neutro), aunque la protección térmica/magnética puede estar solo en la fase (1P+N) en doméstico",
    incorrectas: [
      "El neutro nunca se corta",
      "El neutro siempre lleva fusible"
    ]
  },
  {
    enunciado: "¿Qué es la toma de tierra de la vivienda?",
    correcta: "El cable (verde-amarillo) que conecta todas las masas de los enchufes y aparatos al embarrado de tierra del edificio, para derivar corrientes de defecto",
    incorrectas: [
      "Una maceta con tierra",
      "El cable negativo de la instalación"
    ]
  },
  {
    enunciado: "¿Qué es el circuito de domótica (C11)?",
    correcta: "Circuito destinado a la alimentación de sistemas de automatización y gestión de energía y seguridad",
    incorrectas: [
      "Circuito para la nevera inteligente",
      "Circuito para cargar el coche eléctrico"
    ]
  }
];
