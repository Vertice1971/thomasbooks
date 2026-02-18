// 28-electrificacion-en-locales-de-caracteristicas-especiales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué ITC del REBT regula los locales húmedos y mojados?",
    correcta: "La ITC-BT-30",
    incorrectas: [
      "La ITC-BT-28",
      "La ITC-BT-10"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia entre un local húmedo y uno mojado?",
    correcta: "Húmedo: condensaciones superficiales o techo (mohos, gotas). Mojado: suelos/paredes cubiertos de agua o regados a manguera (lavaderos, pescaderías)",
    incorrectas: [
      "Húmedo es con agua salada y Mojado con agua dulce",
      "No hay diferencia, es lo mismo"
    ]
  },
  {
    enunciado: "¿Qué grado de protección IP mínimo se exige en locales mojados?",
    correcta: "IPX4 (protección contra salpicaduras) o superior según la zona, y las cajas deben ser estancas",
    incorrectas: [
      "IPX0",
      "IP10"
    ]
  },
  {
    enunciado: "¿Qué sensibilidad deben tener los diferenciales en locales mojados según el reglamento?",
    correcta: "30 mA (alta sensibilidad) obligatoriamente para circuitos de tomas y aparatos",
    incorrectas: [
      "300 mA",
      "1 A"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una instalación a Muy Baja Tensión de Seguridad (MBTS)?",
    correcta: "Tensión nominal no superior a 50 V en CA (o 24 V en locales mojados/piscinas) aislada galvánicamente de tierra y de la red (transformador de seguridad)",
    incorrectas: [
      "Tensión de 230 V pero con cables gordos",
      "Tensión continua de 400 V"
    ]
  },
  {
    enunciado: "¿Qué ITC regula las piscinas y fuentes?",
    correcta: "La ITC-BT-31",
    incorrectas: [
      "La ITC-BT-40",
      "La ITC-BT-02"
    ]
  },
  {
    enunciado: "¿Qué está permitido instalar en el Volumen 0 de una piscina (interior del vaso)?",
    correcta: "Solo equipos diseñados para ello (focos subacuáticos) alimentados a MBTS (máx. 12 V CA o 30 V CC) con protección IPX8",
    incorrectas: [
      "Bombas de agua a 230 V si son estancas",
      "Tomas de corriente estancas"
    ]
  },
  {
    enunciado: "¿Dónde debe situarse la fuente de alimentación de seguridad (transformador) para la piscina?",
    correcta: "Fuera de los volúmenes 0 y 1, es decir, a más de 2 metros del borde (Volumen 2) o fuera de la zona de piscina",
    incorrectas: [
      "Dentro del agua flotando",
      "Justo en el borde de la piscina"
    ]
  },
  {
    enunciado: "¿Qué es un local a temperatura elevada según ITC-BT-30?",
    correcta: "Locales donde la temperatura ambiente suele superar los 40ºC (ej. panaderías, fundiciones), exigiendo cables que soporten esa temperatura o reducirlos (factor corrección)",
    incorrectas: [
      "Cualquier local en verano en Sevilla",
      "Locales a más de 20ºC"
    ]
  },
  {
    enunciado: "¿Qué es un local a muy baja temperatura?",
    correcta: "Cámaras frigoríficas y congeladores; requieren cables cuyo aislamiento no cristalice ni se rompa con el frío y luminarias especiales",
    incorrectas: [
      "Una bodega subterránea",
      "Un local con aire acondicionado fuerte"
    ]
  },
  {
    enunciado: "¿Qué requisito tienen los locales con baterías de acumuladores (cuartos de baterías)?",
    correcta: "Deben tener ventilación adecuada (natural o forzada) para evacuar el hidrógeno explosivo y la instalación eléctrica debe ser antideflagrante o estar protegida contra corrosión",
    incorrectas: [
      "Deben ser oscuros",
      "Deben estar insonorizados"
    ]
  },
  {
    enunciado: "¿Qué son los locales con riesgo de corrosión?",
    correcta: "Donde existen gases o vapores que atacan a los materiales eléctricos (ej. galvanoplastia, depuradoras con cloro), requiriendo materiales plásticos o inox",
    incorrectas: [
      "Locales muy antiguos",
      "Locales cerca del mar solamente"
    ]
  },
  {
    enunciado: "¿Qué es un quirófano desde el punto de vista eléctrico (ITC-BT-38)?",
    correcta: "Un local clasificado como de uso médico (Grupo 2), que requiere suministro especial (transformador de aislamiento IT médico), equipotencialidad y SAI",
    incorrectas: [
      "Un local húmedo normal",
      "Un local de pública concurrencia estándar"
    ]
  },
  {
    enunciado: "¿Para qué sirve el transformador de aislamiento en un quirófano?",
    correcta: "Para crear un sistema IT (tierra aislada) donde un primer defecto (derivación) no provoca corte de suministro ni electrocución, permitiendo seguir operando (monitorizando el aislamiento)",
    incorrectas: [
      "Para ahorrar luz",
      "Para filtrar virus"
    ]
  },
  {
    enunciado: "¿Qué es la conexión equipotencial suplementaria en locales especiales?",
    correcta: "Unir localmente todas las partes conductoras accesibles y masas a la barra de tierra local para anular diferencias de potencial peligrosas (baños, quirófanos, piscinas)",
    incorrectas: [
      "Conectar fase y neutro",
      "Unir los cables con nudos"
    ]
  },
  {
    enunciado: "¿Qué es una instalación de alumbrado exterior (ITC-BT-09)?",
    correcta: "Iluminación de carreteras, plazas, parques, que requiere protecciones específicas (diferenciales de 300mA habitual, relojes astronómicos) y cables subterráneos de 1kV",
    incorrectas: [
      "Poner una bombilla en el balcón",
      "Iluminación interior de escaparates"
    ]
  },
  {
    enunciado: "¿Qué ITC regula las instalaciones en obras de construcción/demolición?",
    correcta: "La ITC-BT-33",
    incorrectas: [
      "La ITC-BT-52",
      "La ITC-BT-01"
    ]
  },
  {
    enunciado: "¿Qué color tienen los cuadros de obra provisionales habitualmente?",
    correcta: "Naranja o amarillo vivo (según norma EN 61439-4 suele ser estándar de mercado por visibilidad)",
    incorrectas: [
      "Negro camuflaje",
      "Blanco inmaculado"
    ]
  },
  {
    enunciado: "¿Qué protección diferencial se exige en cuadros de obra para tomas de corriente < 32 A?",
    correcta: "30 mA obligatoriamente, debido al alto riesgo de daños mecánicos y humedad",
    incorrectas: [
      "500 mA",
      "No es necesario diferencial"
    ]
  },
  {
    enunciado: "¿Qué es la 'feria' o stand ferial (ITC-BT-34)?",
    correcta: "Instalaciones temporales que deben tener un cuadro de mando y protección propio por stand, con diferencial de 30 mA y corte omnipolar accesible",
    incorrectas: [
      "Un mercado permanente",
      "Una tienda de ropa"
    ]
  },
  {
    enunciado: "¿Qué es la ITC-BT-40?",
    correcta: "Instalaciones generadoras de baja tensión (autoconsumo, grupos, renovables)",
    incorrectas: [
      "Instalaciones de juguetes",
      "Instalaciones de ascensores"
    ]
  },
  {
    enunciado: "¿Qué pasa con los cables en las saunas (ITC-BT-41)?",
    correcta: "Los cables deben soportar muy altas temperaturas (ej. silicona) y no deben instalarse tomas de corriente ni interruptores en el interior de la cabina caliente",
    incorrectas: [
      "Deben refrigerarse con agua",
      "Se pueden poner enchufes normales en el suelo"
    ]
  },
  {
    enunciado: "¿Qué se considera instalación en caravanas y parques de caravanas (ITC-BT-41)?",
    correcta: "Requieren tomas de corriente tipo industrial (IEC 309, azul 2P+T), con protección diferencial individual de 30 mA en la torreta de suministro",
    incorrectas: [
      "Enchufes domésticos normales compartidos",
      "Batería de coche exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué es un puerto o marina para barcos de recreo (ITC-BT-42)?",
    correcta: "Un entorno muy corrosivo y húmedo; torretas con tomas IPx6, corte omnipolar, y recomendación de transformador de aislamiento galvánico para evitar corrosión electrolítica en barcos",
    incorrectas: [
      "Un aparcamiento de coches",
      "Una piscina salada"
    ]
  },
  {
    enunciado: "¿Qué es el cable armado con fleje de acero?",
    correcta: "Cable recomendado en instalaciones con riesgo de impacto mecánico o roedores (obras, industria pesada, exterior)",
    incorrectas: [
      "Cable con armas de fuego",
      "Cable muy flexible"
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'cercado eléctrico' para ganado (ITC-BT-39)?",
    correcta: "Instalación generadora de impulsos de alta tensión y baja energía (segura pero molesta) para contener animales; debe alimentarse por aparato homologado",
    incorrectas: [
      "Conectar la valla a 230 V directamente (mortal)",
      "Valla con luz decorativa"
    ]
  },
  {
    enunciado: "¿Qué es el 'Monitor de Aislamiento' en quirófanos?",
    correcta: "Dispositivo que vigila la resistencia de aislamiento del sistema IT y da alarma acústica/visual si baja de un umbral (ej. 50 kΩ) sin cortar la luz",
    incorrectas: [
      "Una cámara de vigilancia",
      "Un termómetro"
    ]
  },
  {
    enunciado: "¿Qué restricción hay para las tomas de corriente en locales con polvo inflamable?",
    correcta: "Deben ser estancas al polvo (IP6X) y con enclavamiento para no producir chispa al desconectar, o estar fuera de la zona",
    incorrectas: [
      "Ninguna, el polvo no arde",
      "Basta con soplarlas antes"
    ]
  },
  {
    enunciado: "¿Qué es una instalación de alumbrado festivo (guirnaldas)?",
    correcta: "Instalación temporal aérea (típicamente fiestas patronales); el cable debe ser resistente a la intemperie y soportar la tracción mecánica del vano (o usar fiador de acero)",
    incorrectas: [
      "Luces del árbol de navidad interior",
      "Velas"
    ]
  },
  {
    enunciado: "¿Qué es la 'tensión de contacto límite' en locales conductores (mojados)?",
    correcta: "24 V en corriente alterna (en lugar de los 50 V habituales en locales secos), umbral de seguridad para personas sumergidas o mojadas",
    incorrectas: [
      "230 V",
      "12 V continua"
    ]
  },
  {
    enunciado: "¿Qué es la protección por separación de circuitos (transformador 1:1)?",
    correcta: "Método de protección (ej. toma afeitadora baños) donde el secundario está aislado de tierra; si tocas un polo activo no te electrocutas porque no hay retorno",
    incorrectas: [
      "Separar los cables con la mano",
      "Poner un fusible"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre IPX5 e IPX7?",
    correcta: "IPX5 es chorro de agua (manguera); IPX7 es inmersión temporal (caída al agua). IPX5 no implica IPX7, a veces se requieren ambos (IPX5/IPX7)",
    incorrectas: [
      "IPX7 es menos que IPX5",
      "IPX7 es solo para polvo"
    ]
  },
  {
    enunciado: "¿Qué ocurre con los rótulos luminosos de Alta Tensión (Neón)?",
    correcta: "Regulados por ITC-BT-43, requieren interruptor de corte en el exterior visible (corte de bombero) y transformador de dispersión magnética",
    incorrectas: [
      "Ya no existen, son ilegales",
      "Funcionan a pilas"
    ]
  },
  {
    enunciado: "¿Qué son las instalaciones de 'calefacción por cables radiantes' en suelo?",
    correcta: "ITC-BT-45; cables calefactores empotrados en el suelo. Requieren malla metálica puesta a tierra y diferencial de 30 mA",
    incorrectas: [
      "Tubos de agua caliente",
      "Estufas de butano"
    ]
  }
];
