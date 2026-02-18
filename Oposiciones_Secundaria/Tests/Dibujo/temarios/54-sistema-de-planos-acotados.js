var PREGUNTAS = [
    {
        enunciado: "¿En qué consiste el 'Sistema de Planos Acotados'?",
        correcta: "Es una proyección ortogonal sobre un único plano horizontal, indicando la cota o altura de cada punto mediante un valor numérico",
        incorrectas: [
            "Utiliza dos planos de proyección perpendiculares abatidos sobre el papel",
            "Es una proyección cónica sobre un plano tangente a la superficie terrestre"
        ]
    },
    {
        enunciado: "¿Qué es la 'Línea de Máxima Pendiente' (LMP) de un plano?",
        correcta: "La recta del plano que forma el mayor ángulo posible con el plano de proyección; es perpendicular a las líneas de nivel",
        incorrectas: [
            "La intersección del plano con el plano vertical de proyección",
            "Cualquier recta horizontal contenida en el plano"
        ]
    },
    {
        enunciado: "¿Qué es el 'Intervalo' de un plano?",
        correcta: "La distancia horizontal (en proyección) entre dos líneas de nivel de cota entera consecutiva",
        incorrectas: [
            "La diferencia de altura entre dos puntos cualesquiera del plano",
            "El ángulo de inclinación del plano medido en grados"
        ]
    },
    {
        enunciado: "¿Cómo se relacionan la Pendiente (p) y el Intervalo (i)?",
        correcta: "Son inversamente proporcionales: p = 1/i (si la equidistancia es 1)",
        incorrectas: [
            "Son directamente proporcionales: a mayor intervalo, mayor pendiente",
            "Son independientes y no tienen relación matemática"
        ]
    },
    {
        enunciado: "¿Cómo se representa una recta en el sistema acotado?",
        correcta: "Por su proyección horizontal y la cota de al menos dos de sus puntos (o un punto y su pendiente)",
        incorrectas: [
            "Mediante dos trazas perpendiculares a la línea de tierra",
            "Dibujando su perfil longitudinal únicamente"
        ]
    },
    {
        enunciado: "¿Qué es la 'Graduación' de una recta?",
        correcta: "La determinación de los puntos de cota entera (módulo) a lo largo de su proyección",
        incorrectas: [
            "La medición de su longitud total en centímetros",
            "El cálculo de su ángulo con el norte magnético"
        ]
    },
    {
        enunciado: "¿Qué son las 'Curvas de Nivel'?",
        correcta: "Líneas que unen puntos de igual cota en la superficie del terreno; son intersecciones con planos horizontales equidistantes",
        incorrectas: [
            "Líneas de máxima pendiente trazadas desde las cumbres",
            "Caminos reales existentes en el terreno"
        ]
    },
    {
        enunciado: "¿Qué indica una mayor proximidad entre curvas de nivel?",
        correcta: "Una pendiente más pronunciada del terreno (mayor desnivel en menos distancia)",
        incorrectas: [
            "Una zona más llana o de pendiente suave",
            "La existencia de un curso de agua o río"
        ]
    },
    {
        enunciado: "¿Qué es una 'Divisoria de Aguas'?",
        correcta: "Línea imaginaria que separa dos vertientes opuestas; las curvas de nivel presentan su convexidad hacia las cotas más bajas",
        incorrectas: [
            "El fondo de un valle por donde corre el agua",
            "Una llanura aluvial inundable"
        ]
    },
    {
        enunciado: "¿Qué es una 'Vaguada'?",
        correcta: "Línea de intersección de dos vertientes por donde discurren las aguas; las curvas de nivel presentan su convexidad hacia las cotas más altas",
        incorrectas: [
            "La cúspide de una montaña o colina",
            "Una cresta rocosa afilada"
        ]
    },
    {
        enunciado: "¿Cómo se halla la intersección de dos planos definidos por sus LMP?",
        correcta: "Determinando dos puntos de la recta intersección mediante el corte de horizontales de igual cota de ambos planos",
        incorrectas: [
            "Calculando el promedio de sus intervalos",
            "Midiendo el ángulo entre sus líneas de máxima pendiente directamente"
        ]
    },
    {
        enunciado: "¿Qué es un 'Perfil Topográfico'?",
        correcta: "La sección vertical del terreno producida por un plano vertical que pasa por una línea determinada del mapa",
        incorrectas: [
            "La vista aérea del terreno desde un satélite",
            "El contorno exterior del mapa"
        ]
    },
    {
        enunciado: "¿En la resolución de cubiertas, qué es una 'Lima Hoya'?",
        correcta: "Arista entrante o cóncava formada por el encuentro de dos faldones; recoge el agua",
        incorrectas: [
            "Arista saliente o convexa que separa las aguas",
            "El alero horizontal del tejado"
        ]
    },
    {
        enunciado: "¿Qué es una 'Lima Tesa'?",
        correcta: "Arista saliente o convexa formada por el encuentro de dos faldones (caballete)",
        incorrectas: [
            "Canalón de desagüe",
            "Junta de dilatación plana"
        ]
    },
    {
        enunciado: "¿La intersección de dos faldones con la misma pendiente y aleros horizontales a la misma cota es...",
        correcta: "La bisectriz del ángulo que forman los aleros en planta",
        incorrectas: [
            "Una línea paralela a uno de los aleros",
            "Una curva parabólica"
        ]
    },
    {
        enunciado: "¿Qué es la 'Explanación' en obras de ingeniería?",
        correcta: "La superficie plana o reglada que se desea construir (carretera, plataforma) modificando el terreno natural",
        incorrectas: [
            "La medición topográfica inicial del terreno virgen",
            "El mapa geológico del subsuelo"
        ]
    },
    {
        enunciado: "¿Qué son los 'Taludes' de desmonte?",
        correcta: "Superficies inclinadas creadas al excavar el terreno para bajar a la cota de la explanación",
        incorrectas: [
            "Muros de contención verticales de hormigón",
            "Zonas donde se vierte tierra para elevar el nivel"
        ]
    },
    {
        enunciado: "¿Qué son los 'Taludes' de terraplén?",
        correcta: "Superficies inclinadas creadas al aportar tierra para subir el nivel hasta la explanación",
        incorrectas: [
            "Excavaciones profundas en roca",
            "Túneles subterráneos"
        ]
    },
    {
        enunciado: "¿Qué es la 'Línea de Paso' (línea neutra o de ceros)?",
        correcta: "La línea irregular donde la explanación corta al terreno natural (cota de trabajo cero)",
        incorrectas: [
            "El eje central de la carretera",
            "El límite de la propiedad"
        ]
    },
    {
        enunciado: "¿Cómo se representan los taludes de una plataforma horizontal?",
        correcta: "Como planos de pendiente constante cuyas líneas de nivel son paralelas al borde de la plataforma",
        incorrectas: [
            "Como superficies verticales sin proyección horizontal",
            "Con un degradado de color verde"
        ]
    },
    {
        enunciado: "¿La intersección de dos planos de talud de distinta pendiente en una esquina se resuelve...",
        correcta: "Hallando la intersección de planos (la arista o 'lima' del talud)",
        incorrectas: [
            "Redondeando la esquina con un radio arbitrario",
            "No tienen intersección, quedan separados"
        ]
    },
    {
        enunciado: "¿Un plano vertical se representa en acotados como...",
        correcta: "Una línea recta (traza) donde se acumulan todas las cotas; es un plano proyectante",
        incorrectas: [
            "Todo el plano del dibujo sombreado",
            "No se puede representar"
        ]
    },
    {
        enunciado: "¿Para hallar la verdadera magnitud de un segmento en acotados se construye...",
        correcta: "Un triángulo rectángulo con la proyección horizontal (cateto) y el desnivel (cateto); la hipotenusa es la VM",
        incorrectas: [
            "Se mide directamente la proyección horizontal",
            "Se suman las cotas de los extremos"
        ]
    },
    {
        enunciado: "¿El 'acuerdo' de taludes cónicos en curvas de carreteras se produce cuando...",
        correcta: "La traza del talud es un arco de círculo; los taludes son superficies cónicas",
        incorrectas: [
            "Se usan planos verticales en las curvas",
            "La carretera tiene pendiente cero"
        ]
    },
    {
        enunciado: "¿Qué es la 'Equidistancia' entre curvas de nivel?",
        correcta: "La diferencia constante de altitud entre dos curvas de nivel contiguas (ej. 5m, 10m)",
        incorrectas: [
            "La distancia horizontal media entre curvas",
            "La escala del mapa"
        ]
    },
    {
        enunciado: "¿Qué significa una cota negativa?",
        correcta: "Que el punto está por debajo del plano de referencia (nivel del mar, cota 0)",
        incorrectas: [
            "Es un error de medición",
            "Que el punto está en el aire"
        ]
    },
    {
        enunciado: "¿Un ‘collado’ o silla de montar se identifica en el mapa por...",
        correcta: "Curvas de nivel enfrentadas con formas hiperbólicas, entre dos elevaciones",
        incorrectas: [
            "Círculos concéntricos cerrados con cota creciente",
            "Líneas rectas paralelas"
        ]
    },
    {
        enunciado: "¿Qué es la 'pendiente' expresada en porcentaje?",
        correcta: "El desnivel vertical dividido por la distancia horizontal, multiplicado por 100",
        incorrectas: [
            "El ángulo de inclinación en grados sexagesimales",
            "La longitud de la cuesta en metros"
        ]
    },
    {
        enunciado: "¿Para hallar la intersección de una recta con el terreno se busca...",
        correcta: "El punto donde la cota de la recta coincide con la cota de la curva de nivel que corta (o perfil de la recta)",
        incorrectas: [
            "El punto medio de la recta",
            "La intersección con el borde del mapa"
        ]
    },
    {
        enunciado: "¿Un plano horizontal tiene intervalo...",
        correcta: "Infinito (sus horizontales nunca cambian de cota en distancia finita)",
        incorrectas: [
            "Cero",
            "Uno"
        ]
    },
    {
        enunciado: "¿Un plano vertical tiene intervalo...",
        correcta: "Cero (todo el desnivel ocurre en distancia horizontal nula)",
        incorrectas: [
            "Infinito",
            "Cien"
        ]
    },
    {
        enunciado: "¿Qué es el 'Escalímetro de pendientes'?",
        correcta: "Regla graduada según los intervalos de diferentes pendientes para facilitar el dibujo de líneas de nivel",
        incorrectas: [
            "Instrumento para medir ángulos verticales en obra",
            "Una calculadora de tangentes"
        ]
    },
    {
        enunciado: "¿La 'Rasante' de un camino es...",
        correcta: "La línea que define las cotas del eje longitudinal de la vía terminada",
        incorrectas: [
            "El terreno natural antes de la obra",
            "La cuneta de desagüe"
        ]
    },
    {
        enunciado: "¿Qué es la 'Cota Roja'?",
        correcta: "La diferencia entre la cota de la rasante (proyecto) y la cota del terreno (roja = desmonte/relleno)",
        incorrectas: [
            "Una cota peligrosa",
            "La cota más alta del mapa"
        ]
    },
    {
        enunciado: "¿Una 'hoya' o depresión cerrada se representa con...",
        correcta: "Curvas de nivel concéntricas de cota decreciente hacia el centro (a veces con marcas de depresión)",
        incorrectas: [
            "Igual que una montaña",
            "Líneas discontinuas"
        ]
    },
    {
        enunciado: "¿La intersección de dos superficies topográficas irregulares da como resultado...",
        correcta: "Una línea quebrada o curva que une los puntos de intersección de las curvas de nivel de igual cota de ambas superficies",
        incorrectas: [
            "Un plano perfecto",
            "Una línea recta"
        ]
    }
];
