var PREGUNTAS = [
    {
        enunciado: "¿Cuál es el elemento arquitectónico fundamental del Románico?",
        correcta: "El arco de medio punto y la bóveda de cañón",
        incorrectas: [
            "El arco apuntado y la bóveda de crucería",
            "El arco de herradura y la cúpula bulbosa"
        ]
    },
    {
        enunciado: "¿Qué función tienen los contrafuertes en el exterior de la iglesia románica?",
        correcta: "Contrarrestar el empuje lateral de las bóvedas de cañón, engrosando el muro en puntos clave",
        incorrectas: [
            "Puramente decorativa para romper la monotonía del muro",
            "Soportar los arbotantes que vuelan sobre las naves"
        ]
    },
    {
        enunciado: "¿Qué es una 'iglesia de peregrinación' (ej. Santiago de Compostela)?",
        correcta: "Tipo de iglesia con girola o deambulatorio tras el altar y triforio, diseñada para facilitar la circulación de fieles sin interrumpir el culto",
        incorrectas: [
            "Iglesia pequeña rural de una sola nave",
            "Catedral gótica urbana con grandes vidrieras"
        ]
    },
    {
        enunciado: "¿Qué es el 'Pantocrátor' en la pintura románica (ábsides)?",
        correcta: "Cristo en Majestad, dentro de la mandorla, bendiciendo y rodeado por el Tetramorfos, dominando el espacio sagrado",
        incorrectas: [
            "La representación de la Virgen con el Niño en actitud maternal",
            "Una escena de la vida cotidiana de los campesinos"
        ]
    },
    {
        enunciado: "¿Qué característica define la escultura románica (Ley del Marco)?",
        correcta: "La adaptación y deformación de las figuras para encajar en el espacio arquitectónico (ej. en el tímpano o capitel)",
        incorrectas: [
            "El naturalismo anatómico y la proporción clásica",
            "La independencia total de la escultura respecto a la arquitectura"
        ]
    },
    {
        enunciado: "¿Qué es un 'pilar compuesto' o cruciforme?",
        correcta: "Soporte formado por un núcleo central al que se adosan semicolumnas para recoger los arcos fajones y formeros",
        incorrectas: [
            "Una columna clásica monolítica de orden corintio",
            "Un muro de carga sin aberturas"
        ]
    },
    {
        enunciado: "¿Qué es el 'Triforio'?",
        correcta: "Galería estrecha situada sobre las arcadas de la nave central, abierta hacia el interior (a veces ciega), bajo las ventanas (claristorio)",
        incorrectas: [
            "La torre campanario situada en el crucero",
            "El pórtico de entrada a la iglesia"
        ]
    },
    {
        enunciado: "¿Qué es la 'Bóveda de cuarto de esfera' (o de horno)?",
        correcta: "Cubierta semicircular que cubre el ábside (cabecera semicircular) de la iglesia",
        incorrectas: [
            "Bóveda plana de madera",
            "Cúpula sobre pechinas"
        ]
    },
    {
        enunciado: "¿Qué es un 'Bestiario' en la escultura románica?",
        correcta: "Repertorio de animales reales y fantásticos (grifos, sirenas) con significado simbólico (vicios, virtudes, el mal)",
        incorrectas: [
            "Un tratado de caza para nobles",
            "Decoración vegetal sin significado"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva jerárquica' en el Románico?",
        correcta: "El tamaño de las figuras depende de su importancia sagrada (Cristo es gigante), no de la distancia visual",
        incorrectas: [
            "Uso de punto de fuga central",
            "Las figuras del fondo son más pequeñas"
        ]
    },
    {
        enunciado: "¿Qué es el 'Cimborrio'?",
        correcta: "Torre o cuerpo elevado sobre el crucero (intersección de naves) que ilumina el interior y soporta la cúpula",
        incorrectas: [
            "La cripta subterránea",
            "El altar mayor"
        ]
    },
    {
        enunciado: "¿Qué es la 'pintura al fresco' románica?",
        correcta: "Técnica de aplicar pigmentos sobre el revoque de cal húmedo del muro; colores planos, contornos negros gruesos y frontalidad",
        incorrectas: [
            "Pintura al óleo sobre lienzo realista",
            "Mosaico de vidrio"
        ]
    },
    {
        enunciado: "¿Qué es una 'arquivolta'?",
        correcta: "Cada uno de los arcos concéntricos y abocinados que forman la portada románica",
        incorrectas: [
            "Una columna torcida",
            "La clave de la bóveda"
        ]
    },
    {
        enunciado: "¿Qué es el 'Dintel' y el 'Parteluz' en una portada?",
        correcta: "El dintel es la pieza horizontal superior; el parteluz es la columna central que sostiene el dintel en vanos anchos",
        incorrectas: [
            "Dintel es el arco y parteluz la puerta",
            "Son elementos decorativos del ábside"
        ]
    },
    {
        enunciado: "¿Qué función tienen los 'canecillos'?",
        correcta: "Piezas (ménsulas) que sobresalen del muro para sostener la cornisa del tejado, a menudo esculpidos con figuras grotescas",
        incorrectas: [
            "Canales para conducir el agua de lluvia",
            "Ventanas pequeñas"
        ]
    },
    {
        enunciado: "¿Qué es el 'Claustro'?",
        correcta: "Patio cuadrangular rodeado de galerías porticadas, centro de la vida monástica en monasterios y catedrales",
        incorrectas: [
            "La celda del abad",
            "La biblioteca del monasterio"
        ]
    },
    {
        enunciado: "¿Qué es el 'Taquelado' o ajedrezado jaqués?",
        correcta: "Motivo decorativo geométrico en relieve (tacos alternos) típico del románico del Camino de Santiago (Jaca)",
        incorrectas: [
            "Un juego de mesa medieval",
            "Pintura de tableros de ajedrez"
        ]
    },
    {
        enunciado: "¿Qué representa el 'Juicio Final' en los tímpanos?",
        correcta: "Cristo Juez separando a los bienaventurados de los condenados, aviso moralizante para el fiel al entrar",
        incorrectas: [
            "La creación del mundo",
            "La boda de Caná"
        ]
    },
    {
        enunciado: "¿Qué es la 'Girola' o deambulatorio?",
        correcta: "Pasillo que rodea el presbiterio por detrás del altar mayor, permitiendo el acceso a las capillas radiales (absidiolos)",
        incorrectas: [
            "La torre de defensa",
            "El coro de los monjes"
        ]
    },
    {
        enunciado: "¿Qué es el 'Arte Mueble' románico?",
        correcta: "Frontales de altar, imágenes de madera policromada (Virgen con Niño, Cristo Crucificado), arquetas de marfil y orfebrería",
        incorrectas: [
            "Muebles domésticos como mesas y sillas",
            "Grandes estatuas de bronce ecuestres"
        ]
    },
    {
        enunciado: "¿Cómo es el Cristo crucificado románico (Majestad)?",
        correcta: "Cristo vivo, triunfante sobre la muerte, vestido (túnica larga), con cuatro clavos, sin dolor y ojos abiertos",
        incorrectas: [
            "Cristo muerto, desnudo (paño pureza), sangrante, desplomado y sufriente (Gótico)",
            "Cristo niño jugando"
        ]
    },
    {
        enunciado: "¿Cómo es la Virgen románica (Trono de Sabiduría)?",
        correcta: "Hierática, frontal, sedente, sirve de trono al Niño Jesús (que es un hombrecito adulto), sin relación afectiva maternal",
        incorrectas: [
            "Virgen joven jugando y sonriendo al niño con naturalidad",
            "Virgen dolorosa llorando"
        ]
    },
    {
        enunciado: "¿Qué es la 'Bóveda de arista'?",
        correcta: "Intersección de dos bóvedas de cañón perpendiculares; usada en naves laterales para cubrir tramos cuadrados",
        incorrectas: [
            "Una bóveda plana",
            "Una cúpula esférica"
        ]
    },
    {
        enunciado: "¿Qué es un 'Capitel Historiado'?",
        correcta: "Capitel decorado con escenas narrativas (bíblicas, vidas de santos) con fin didáctico",
        incorrectas: [
            "Capitel con hojas de acanto clásicas",
            "Capitel liso sin decoración"
        ]
    },
    {
        enunciado: "¿Qué es el 'Románico Lombardo' (Primer Románico)?",
        correcta: "Estilo temprano (Cataluña/Italia) caracterizado por arquillos ciegos y bandas lombardas (lesenas) en el exterior, sin escultura monumental",
        incorrectas: [
            "El románico tardío muy decorado",
            "El estilo de los visigodos"
        ]
    },
    {
        enunciado: "¿Qué es el 'Pórtico de la Gloria' (Santiago)?",
        correcta: "Obra cumbre del Maestro Mateo (transición al gótico), nártex con escultura monumental de gran calidad, naturalismo incipiente y policromía",
        incorrectas: [
            "Una puerta renacentista",
            "Un retablo barroco"
        ]
    },
    {
        enunciado: "¿Qué colores predominan en la pintura románica?",
        correcta: "Colores planos e intensos: rojo, azul, ocre, blanco y negro (contornos)",
        incorrectas: [
            "Colores pastel y difuminados",
            "Escala de grises exclusivamente"
        ]
    },
    {
        enunciado: "¿Qué es el 'Arco Fajón'?",
        correcta: "Arco transversal a la nave que refuerza la bóveda de cañón y descarga peso sobre los pilares",
        incorrectas: [
            "Arco paralelo a la nave (formero)",
            "Arco de la puerta"
        ]
    },
    {
        enunciado: "¿La arquitectura románica se caracteriza por...",
        correcta: "El predominio del muro sobre el vano (pocas ventanas), solidez, oscuridad interior que invita al recogimiento",
        incorrectas: [
            "Grandes ventanales y muros delgados de cristal",
            "Estructuras ligeras de madera"
        ]
    },
    {
        enunciado: "¿Qué es una 'Iglesia de planta basilical'?",
        correcta: "Planta rectangular con 3 o 5 naves (la central más alta) y cabecera con ábsides",
        incorrectas: [
            "Planta circular",
            "Planta de cruz griega perfecta"
        ]
    },
    {
        enunciado: "¿Qué son los 'Absidiolos'?",
        correcta: "Pequeños ábsides semicirculares que se abren en la girola o en los brazos del crucero para albergar capillas",
        incorrectas: [
            "Ventanales pequeños",
            "Columnas pequeñas"
        ]
    },
    {
        enunciado: "¿Qué es la 'isometría' o 'isocefalia' en relieves?",
        correcta: "Cabezas a la misma altura para dar orden y ritmo (herencia clásica/bizantina)",
        incorrectas: [
            "Cabezas de distinto tamaño",
            "Figuras volando"
        ]
    },
    {
        enunciado: "¿El 'Horror Vacui' en el románico se manifiesta en...",
        correcta: "La tendencia a cubrir de escultura capiteles y portadas sin dejar espacios vacíos",
        incorrectas: [
            "Dejar muros blancos lisos",
            "Minimalismo"
        ]
    },
    {
        enunciado: "¿Qué es el 'Pantocrátor' de San Clemente de Tahull?",
        correcta: "Famoso fresco del ábside con Cristo en Majestad, de estilo hierático, colores vivos y fuerte simbolismo apocalíptico",
        incorrectas: [
            "Una escultura de mármol",
            "Un mosaico romano"
        ]
    },
    {
        enunciado: "¿Qué es el 'Tapiz de la Creación' (Girona)?",
        correcta: "Bordado románico excepcional que representa el Génesis, los meses y los vientos alrededor del Pantocrátor",
        incorrectas: [
            "Una alfombra persa",
            "Una pintura sobre tabla"
        ]
    },
    {
        enunciado: "¿Qué es la 'Tribuna'?",
        correcta: "Galería amplia sobre las naves laterales (con suelo pisable) que asoma a la nave central; aumenta la capacidad y refuerzo",
        incorrectas: [
            "El púlpito para predicar",
            "El triforio (que es estrecho)"
        ]
    },
    {
        enunciado: "¿Qué es el 'Tetramorfos'?",
        correcta: "Los 4 evangelistas representados como Ángel (Mateo), León (Marcos), Toro (Lucas) y Águila (Juan)",
        incorrectas: [
            "Los 4 jinetes del apocalipsis",
            "4 reyes magos"
        ]
    },
    {
        enunciado: "¿Qué es la 'mandorla' mística?",
        correcta: "Óvalo o almendra de luz que rodea a Cristo o la Virgen en Majestad",
        incorrectas: [
            "Una fruta",
            "Un instrumento"
        ]
    },
    {
        enunciado: "¿El románico es un arte esencialmente...",
        correcta: "Religioso y rural (monasterios) o de pequeñas ciudades de peregrinación",
        incorrectas: [
            "Urbano y burgués",
            "Profano y cortesano"
        ]
    },
    {
        enunciado: "¿Qué es la 'Portada abocinada'?",
        correcta: "Puerta que se estrecha hacia el interior mediante arquivoltas escalonadas para invitar a entrar",
        incorrectas: [
            "Puerta muy ancha",
            "Puerta secreta"
        ]
    }
];
