// 19-bobinado-de-maquinas-de-corriente-continua.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué parte de la máquina de corriente continua alberga el bobinado inducido (armadura)?",
    correcta: "El rotor (parte giratoria)",
    incorrectas: [
      "El estator (parte fija)",
      "El colector de delgas exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué es el devanado imbricado o paralelo?",
    correcta: "Un tipo de bobinado donde el final de una bobina se conecta a la delga adyacente a su principio, adecuado para corrientes altas (tantas ramas como polos)",
    incorrectas: [
      "Un bobinado donde los cables se cruzan aleatoriamente",
      "Un bobinado para muy alta tensión y muy baja corriente"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al devanado ondulado o serie?",
    correcta: "Las bobinas avanzan alrededor del inducido sin volver atrás inmediatamente, sumando tensiones, ideal para alta tensión y baja corriente (siempre 2 ramas paralelas)",
    incorrectas: [
      "Las bobinas tienen forma de onda senoidal perfecta visualmente",
      "Es el único usado en máquinas de lavadoras"
    ]
  },
  {
    enunciado: "¿Qué son las conexiones equipotenciales en bobinados imbricados?",
    correcta: "Conductores que unen puntos teóricamente al mismo potencial para compensar asimetrías magnéticas y evitar corrientes circulares en las escobillas",
    incorrectas: [
      "Cables que conectan el motor a tierra",
      "Conexiones para igualar el potencial con la red de AC"
    ]
  },
  {
    enunciado: "¿Qué función tiene el colector de delgas?",
    correcta: "Permitir la conmutación mecánica, conectando sucesivamente las bobinas rotativas al circuito exterior fijo",
    incorrectas: [
      "Refrigerar los bobinados por centrifugación",
      "Frenar el motor mecánicamente"
    ]
  },
  {
    enunciado: "¿Qué aislamiento separa las delgas del colector entre sí?",
    correcta: "Láminas de mica (o micanita), material duro y resistente al calor",
    incorrectas: [
      "Papel de periódico prensado",
      "Tiras de caucho elástico"
    ]
  },
  {
    enunciado: "¿Qué es el 'paso de colector' (Yc)?",
    correcta: "El número de delgas que hay que avanzar para conectar el final de una bobina respecto a su principio",
    incorrectas: [
      "La distancia entre las escobillas",
      "El diámetro del colector"
    ]
  },
  {
    enunciado: "¿Qué es el 'rebajado de micas' en el colector?",
    correcta: "El proceso de fresar el aislamiento de mica para que quede ligeramente por debajo de la superficie del cobre, evitando que las escobillas salten",
    incorrectas: [
      "Lijar el cobre hasta dejarlo a ras de la mica",
      "Quitar toda la mica y dejar aire"
    ]
  },
  {
    enunciado: "¿Qué son los polos de conmutación o interpolos?",
    correcta: "Polos auxiliares estrechos situados entre los principales, bobinados en serie con el inducido, para mejorar la conmutación y evitar chispas",
    incorrectas: [
      "Polos de repuesto por si se rompen los principales",
      "Imanes permanentes para frenar"
    ]
  },
  {
    enunciado: "¿Qué es el devanado de compensación?",
    correcta: "Un bobinado alojado en ranuras en las caras polares principales para compensar la reacción del inducido en máquinas grandes de cargas variables severas",
    incorrectas: [
      "Un bobinado extra para compensar la factura de la luz",
      "Un condensador de compensación"
    ]
  },
  {
    enunciado: "¿Qué tipo de escobillas se suelen usar en máquinas industriales de CC?",
    correcta: "Escobillas de electrografito o grafito-cobre, autolubricadas y con buena conductividad",
    incorrectas: [
      "Escobillas de acero templado",
      "Escobillas de plástico duro"
    ]
  },
  {
    enunciado: "¿Qué es la 'zona neutra' teórica?",
    correcta: "La posición geométrica entre polos donde el campo magnético es nulo y donde deberían conmutar las escobillas para no tener chispas",
    incorrectas: [
      "La zona donde se conecta el cable neutro",
      "El centro del eje del motor"
    ]
  },
  {
    enunciado: "¿Por qué hay que barnizar y curar el inducido tras el bobinado?",
    correcta: "Para inmovilizar los conductores frente a la fuerza centrífuga, mejorar el aislamiento y la disipación térmica",
    incorrectas: [
      "Para que brille más al girar",
      "Para aumentar su peso y inercia a propósito"
    ]
  },
  {
    enunciado: "¿Qué es una bobina muerta o falsa?",
    correcta: "Una bobina que se coloca en la ranura para equilibrar mecánicamente el rotor pero no se conecta eléctricamente al circuito (o casos de simetría)",
    incorrectas: [
      "Una bobina quemada que no funciona",
      "Una bobina hecha de cuerda"
    ]
  },
  {
    enunciado: "¿Qué indica un color azulado irregular en la superficie del colector?",
    correcta: "Sobrecalentamiento o chisporroteo severo (quemadura por arco) e indica mala conmutación",
    incorrectas: [
      "Que el cobre es de buena calidad",
      "Que tiene una pátina protectora perfecta"
    ]
  },
  {
    enunciado: "¿Qué es la pátina del colector?",
    correcta: "Una capa fina y uniforme de óxido de cobre y grafito (color chocolate) deseable, que reduce la fricción y el desgaste de escobillas",
    incorrectas: [
      "Suciedad que hay que lijar inmediatamente",
      "Una capa de aceite lubricante aplicada a mano"
    ]
  },
  {
    enunciado: "¿Qué prueba se realiza con el 'Ronzador' (Growler)?",
    correcta: "Detectar cortocircuitos entre espiras del inducido. Se coloca el inducido sobre el electroimán y se usa una hoja de metal que vibra sobre la ranura en corto",
    incorrectas: [
      "Medir la resistencia de aislamiento a tierra",
      "Equilibrar el rotor dinámicamente"
    ]
  },
  {
    enunciado: "¿Cómo se conectan los devanados de campo en un motor Serie?",
    correcta: "El bobinado inductor (pocas espiras, hilo grueso) se conecta en serie con el inducido",
    incorrectas: [
      "En paralelo con la red",
      "Independiente con una fuente separada"
    ]
  },
  {
    enunciado: "¿Y en un motor Shunt (Derivación)?",
    correcta: "El bobinado inductor (muchas espiras, hilo fino) se conecta en paralelo con el inducido",
    incorrectas: [
      "En serie con el inducido",
      "No tiene bobinado inductor"
    ]
  },
  {
    enunciado: "¿Qué precaución se debe tener al soldar las conexiones a las delgas?",
    correcta: "Evitar que el estaño escurra hacia la parte trasera (cortocircuitos) o que el calor excesivo despeguen las delgas o ablande la mica",
    incorrectas: [
      "Usar soplete de acetileno a máxima potencia",
      "No usar estaño, solo pegar con cinta"
    ]
  },
  {
    enunciado: "¿Qué es el zunchado del inducido?",
    correcta: "La sujeción de las cabezas de bobina mediante hilo de acero o cinta de vidrio impregnada para evitar que se abran por fuerza centrífuga",
    incorrectas: [
      "El equilibrado con masilla",
      "La pintura final"
    ]
  },
  {
    enunciado: "¿Qué efecto produce desplazar las escobillas de la zona neutra?",
    correcta: "Empeora la conmutación (más chispas) y altera la velocidad y el par (a veces se hace intencionadamente para compensar reacción de inducido)",
    incorrectas: [
      "El motor se para en seco",
      "El motor gira al revés instantáneamente"
    ]
  },
  {
    enunciado: "¿Qué es una ranura inclinada (skewed)?",
    correcta: "Ranuras no paralelas al eje, usadas para reducir el ruido magnético y las pulsaciones de par (cogging)",
    incorrectas: [
      "Una ranura hecha mal por error",
      "Para que el aire circule en espiral"
    ]
  },
  {
    enunciado: "¿Qué verificación se hace tras tornear el colector?",
    correcta: "Rebajar las micas, biselar las aristas de las delgas y pulir la superficie, además de verificar excentricidad (salto)",
    incorrectas: [
      "Engrasarlo abundantemente",
      "Pintarlo de negro"
    ]
  },
  {
    enunciado: "¿Qué es el 'seating' o asentamiento de escobillas nuevas?",
    correcta: "Lijar suavemente la cara de contacto de la escobilla (con lija sobre el colector) para que adopte la curvatura del colector y contacte al 100%",
    incorrectas: [
      "Sentarse a esperar que funcionen",
      "Apretarlas muy fuerte hasta que se desgasten"
    ]
  },
  {
    enunciado: "¿Qué indica una chispa anular (fuego en el colector)?",
    correcta: "Una condición muy grave de arco continuo alrededor de todo el colector, generalmente por cortocircuito, suciedad extrema o sobretensión severa",
    incorrectas: [
      "Es normal en motores potentes",
      "Es el sistema de iluminación interno"
    ]
  },
  {
    enunciado: "¿Qué es la cuña de ranura?",
    correcta: "Una pieza de material aislante duro (fibra, madera) que cierra la boca de la ranura y retiene los conductores dentro",
    incorrectas: [
      "Una herramienta para sacar el bobinado",
      "Un tope para que el eje no se salga"
    ]
  },
  {
    enunciado: "¿Qué es soldadura TIG o por puntos en el colector?",
    correcta: "Métodos de unión conductor-delga más robustos que el estaño, usados en inducidos que alcanzan altas temperaturas o velocidades",
    incorrectas: [
      "Soldadura con electrodo revestido normal",
      "Pegamento termofusible"
    ]
  },
  {
    enunciado: "¿Para qué sirve el equilibrado dinámico del rotor?",
    correcta: "Para eliminar desequilibrios de masa que causarían vibraciones destructivas a alta velocidad (se añaden o quitan pesos)",
    incorrectas: [
      "Para que pese lo mismo que el estator",
      "Para equilibrar el voltaje de las fases"
    ]
  },
  {
    enunciado: "¿Qué son los 'risers' o aletas del colector?",
    correcta: "Prolongaciones de las delgas donde se sueldan los extremos de las bobinas",
    incorrectas: [
      "Aletas de refrigeración de la carcasa",
      "Los muelles de las escobillas"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre bobinado de hilo y de pletina?",
    correcta: "El hilo (sección redonda) se usa para corrientes bajas/medias, la pletina (rectangular) para corrientes altas, aprovechando mejor el espacio",
    incorrectas: [
      "La pletina es de aluminio siempre",
      "El hilo es cuadrado"
    ]
  }
];
