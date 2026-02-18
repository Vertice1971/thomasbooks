// 27-electrificacion-en-locales-con-riesgo-de-incendio-o-explosion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué ITC del REBT regula las instalaciones en locales con riesgo de incendio o explosión?",
    correcta: "La ITC-BT-29",
    incorrectas: [
      "La ITC-BT-28",
      "La ITC-BT-01"
    ]
  },
  {
    enunciado: "¿Qué define una 'atmósfera explosiva' (ATEX)?",
    correcta: "La mezcla con el aire, en condiciones atmosféricas, de sustancias inflamables en forma de gases, vapores, nieblas o polvos, en la que, tras una ignición, la combustión se propaga a la mezcla no quemada",
    incorrectas: [
      "Un lugar donde hay dinámica",
      "Cualquier sitio con humo"
    ]
  },
  {
    enunciado: "¿Qué es la clasificación de zonas (Zonificación)?",
    correcta: "El método para analizar el entorno y dividirlo en zonas (0, 1, 2 para gas; 20, 21, 22 para polvo) según la probabilidad y duración de la presencia de atmósfera explosiva",
    incorrectas: [
      "Dividir el local por colores para decorar",
      "Zonificar por horarios de trabajo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la Zona 0 (Gases)?",
    correcta: "Presencia de atmósfera explosiva de gas de forma permanente, frecuente o durante largos periodos (ej. interior de un tanque de gasolina)",
    incorrectas: [
      "Presencia accidental y breve en caso de rotura",
      "Zona segura sin riesgo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la Zona 2 (Gases)?",
    correcta: "No es probable que ocurra atmósfera explosiva en funcionamiento normal y, si ocurre, es de corta duración (ej. fugas accidentales en bridas)",
    incorrectas: [
      "Zona nuclear",
      "Zona de oficinas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la Zona 20 (Polvo)?",
    correcta: "Presencia permanente o frecuente de nubes de polvo combustible (ej. interior de un silo de harina o molino)",
    incorrectas: [
      "Polvo solo al barrer",
      "Zona de fumadores"
    ]
  },
  {
    enunciado: "¿Qué modo de protección se indica con 'Ex d'?",
    correcta: "Envolvente antideflagrante: soporta una explosión interna sin transmitirla al exterior y sin deformarse",
    incorrectas: [
      "Seguridad aumentada",
      "Inmersión en aceite"
    ]
  },
  {
    enunciado: "¿Qué modo de protección se indica con 'Ex e'?",
    correcta: "Seguridad aumentada: medidas para evitar con alto grado de seguridad la aparición de arcos o temperaturas altas (solo para equipos que no chispean en uso normal, como bornas o motores)",
    incorrectas: [
      "Envolvente presurizada",
      "Relleno de arena"
    ]
  },
  {
    enunciado: "¿Qué modo de protección se indica con 'Ex i'?",
    correcta: "Seguridad intrínseca: limita la energía del circuito (tensión y corriente) por debajo del nivel capaz de inflamar la atmósfera (incluso en fallo)",
    incorrectas: [
      "Ignífugo",
      "Inteligente"
    ]
  },
  {
    enunciado: "¿Qué cables se permiten en instalaciones fijas en zonas con riesgo de explosión?",
    correcta: "Cables con cubierta de protección mecánica robusta (o bajo tubo de acero), no propagadores de llama, y en zonas 0/20 muy restringidos",
    incorrectas: [
      "Cable paralelo de altavoz",
      "Cualquier cable si se pinta de rojo"
    ]
  },
  {
    enunciado: "¿Qué requisito deben cumplir los tubos protectores metálicos en zonas ATEX?",
    correcta: "Ser de acero estirado (sin soldadura) o soldados de gran resistencia, y roscados, garantizando la continuidad eléctrica",
    incorrectas: [
      "Tubos de plástico PVC corrugado normal",
      "Tubos de aluminio de lata de refresco"
    ]
  },
  {
    enunciado: "¿Qué es un 'cortafuegos' (obturador) en la canalización de tubo?",
    correcta: "Un accesorio de sellado relleno de compuesto fraguante que impide el paso de llamas, gases o presión de una zona peligrosa a otra o al entrar en una caja Ex d",
    incorrectas: [
      "Un programa antivirus del ordenador",
      "Una pared de ladrillo"
    ]
  },
  {
    enunciado: "¿Qué temperatura superficial máxima (Clase T1 a T6) puede alcanzar un equipo en zona ATEX?",
    correcta: "Debe ser inferior a la temperatura de autoignición de la sustancia presente (ej. T6 < 85ºC, para gases muy inflamables)",
    incorrectas: [
      "Siempre 1000ºC",
      "Da igual la temperatura si es Ex d"
    ]
  },
  {
    enunciado: "¿Qué significa el marcado 'II 2 G' en un equipo?",
    correcta: "Grupo II (Industria superficie), Categoría 2 (apto para Zona 1 o 2), G (Gases)",
    incorrectas: [
      "Dos gramos de peso",
      "Segunda generación"
    ]
  },
  {
    enunciado: "¿En qué zona se puede instalar un equipo de Categoría 3?",
    correcta: "Solo en Zona 2 (o 22), donde el riesgo es menor",
    incorrectas: [
      "En Zona 0 (riesgo alto)",
      "En cualquier zona"
    ]
  },
  {
    enunciado: "¿Qué se requiere para el mantenimiento de equipos Ex?",
    correcta: "Personal formado específicamente, herramientas adecuadas, no modificar características (ej. no mecanizar cajas Ex d) y asegurar que las juntas y tornillos están perfectos",
    incorrectas: [
      "Se pueden arreglar con cinta americana",
      "Cualquiera puede abrir una caja Ex d bajo tensión"
    ]
  },
  {
    enunciado: "¿Qué es el modo de protección 'Ex p'?",
    correcta: "Presurización interna: mantener gas inerte (o aire limpio) a sobrepresión dentro de la envolvente para impedir la entrada de atmósfera explosiva externa",
    incorrectas: [
      "Protección por pintura",
      "Potencia extra"
    ]
  },
  {
    enunciado: "¿Es obligatorio instalar protección diferencial en zonas con riesgo de incendio/explosión?",
    correcta: "Sí, se exige protección contra contactos indirectos y limitar corrientes de fuga que puedan causar chispas (ej. diferenciales de 300 mA o 30 mA según caso)",
    incorrectas: [
      "No, está prohibido",
      "Solo si lo pide el seguro"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un local con riesgo de incendio (Clase I) pero no explosión (aparentemente)?",
    correcta: "Locales con materiales combustibles sólidos (madera, papel, textil) donde el polvo puede ser ignición o propagar fuego (madereras, carpinterías)",
    incorrectas: [
      "Piscinas",
      "Fundiciones de acero"
    ]
  },
  {
    enunciado: "¿Qué debe hacerse con la electricidad estática en zonas ATEX?",
    correcta: "Evitarla a toda costa: todas las partes metálicas deben conectarse a tierra, usar suelos conductivos, ropa antiestática y evitar plásticos que se carguen",
    incorrectas: [
      "Fomentarla para atraer el polvo",
      "No es peligrosa"
    ]
  },
  {
    enunciado: "¿Qué significa 'EPL' (Equipment Protection Level)?",
    correcta: "Nivel de Protección del Equipo (Ga, Gb, Gc para gas; Da, Db, Dc para polvo), concepto moderno equivalente a las Categorías",
    incorrectas: [
      "Europa League de fútbol",
      "Energía Por Litro"
    ]
  },
  {
    enunciado: "¿Cómo deben ser las prensasestopas en una caja Ex d?",
    correcta: "Deben ser certificadas Ex d, adecuadas al diámetro del cable y tipo (armado/no armado) para mantener la estanqueidad y resistencia a la explosión",
    incorrectas: [
      "De plástico normal baratas",
      "Rellenas de silicona de baño"
    ]
  },
  {
    enunciado: "¿Se pueden empalmar cables en medio de un tubo en zona clasificada?",
    correcta: "No, los cables deben ser continuos de caja a caja; los empalmes solo se permiten en cajas de bornas certificadas para la zona",
    incorrectas: [
      "Sí, si se encinta bien",
      "Sí, con regletas al aire"
    ]
  },
  {
    enunciado: "¿Qué gas es el referencia para el grupo IIC (el más peligroso)?",
    correcta: "Hidrógeno (o Acetileno), requieren equipos IIC con intersticios muy estrechos para no propagar la llama",
    incorrectas: [
      "Metano (Grupo IIA)",
      "Propano"
    ]
  },
  {
    enunciado: "¿Qué es el 'intersticio experimental máximo de seguridad' (MESG)?",
    correcta: "La holgura máxima entre las bridas de una caja Ex d que impide que la llama salga al exterior; determina el grupo de gas (IIA, IIB, IIC)",
    incorrectas: [
      "El espacio para meter el destornillador",
      "El grosor de la pared"
    ]
  },
  {
    enunciado: "¿Qué protección IP mínima se exige frente a polvo combustible (Zona 20/21/22)?",
    correcta: "Generalmente IP6X (Totalmente estanco al polvo) o IP5X en zona 22 si el polvo no es conductor",
    incorrectas: [
      "IP20",
      "IP44"
    ]
  },
  {
    enunciado: "¿Qué son los garajes y talleres de reparación de vehículos?",
    correcta: "Se consideran locales con riesgo de incendio y explosión (clase I, zona 2 general hasta cierta altura o ventilación) por vapores de gasolina",
    incorrectas: [
      "Locales húmedos solamente",
      "Locales sin riesgo"
    ]
  },
  {
    enunciado: "¿Qué es una barrera Zener?",
    correcta: "Un dispositivo de interfaz (con diodos zener, resistencias y fusibles) asociado a equipos de Seguridad Intrínseca para limitar la energía que pasa a la zona peligrosa",
    incorrectas: [
      "Una barrera de tráfico",
      "Un muro de hormigón"
    ]
  },
  {
    enunciado: "¿Qué ocurre con los enchufes en zonas peligrosas?",
    correcta: "Deben tener enclavamiento mecánico (no se pueden desconectar bajo tensión) y ser Ex certificadas, o estar fuera de la zona",
    incorrectas: [
      "No se pueden poner nunca",
      "Son enchufes normales con tapa"
    ]
  },
  {
    enunciado: "¿Puede usarse una linterna normal en una atmósfera explosiva?",
    correcta: "No, debe ser una linterna certificada ATEX, ya que las pilas o la bombilla de una normal pueden producir chispas o calor peligroso",
    incorrectas: [
      "Sí, si no se enciende y apaga allí",
      "Sí, las de LED no calientan"
    ]
  },
  {
    enunciado: "¿Qué documentación es obligatoria para clasificar las zonas?",
    correcta: "El Documento de Protección Contra Explosiones (DPCE), donde se evalúan riesgos, sustancias y extensión de las zonas",
    incorrectas: [
      "La factura de la luz",
      "El plano del arquitecto sin más"
    ]
  },
  {
    enunciado: "¿Qué es la temperatura de autoignición?",
    correcta: "La temperatura mínima a la que una sustancia se inflama espontáneamente sin necesidad de chispa ni llama (solo por contacto con superficie caliente)",
    incorrectas: [
      "La temperatura a la que hierve el agua",
      "La temperatura ambiente"
    ]
  },
  {
    enunciado: "¿Qué es el polvo conductor?",
    correcta: "Polvo combustible con resistividad eléctrica baja (ej. metales, carbón) que puede provocar cortocircuitos dentro de los equipos si entra",
    incorrectas: [
      "Polvo que conduce coches",
      "Polvo mágico"
    ]
  },
  {
    enunciado: "¿Se pueden usar motores estándar en Zona 2?",
    correcta: "Normalmente no, se requieren motores 'Non-Sparking' (Ex nA o Ex ec) certificados para Zona 2, que garantizan no producir arcos en funcionamiento normal",
    incorrectas: [
      "Sí, cualquiera vale",
      "Solo si se envuelven en plástico"
    ]
  },
  {
    enunciado: "¿Qué es una atmósfera de niebla?",
    correcta: "Gotas de líquido inflamable en suspensión en el aire, que se comportan de forma similar a los vapores/gases",
    incorrectas: [
      "Niebla de agua (vapor)",
      "Humo de tabaco"
    ]
  }
];
