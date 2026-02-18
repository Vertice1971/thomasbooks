var PREGUNTAS = [
    {
        enunciado: "¿Qué supone la 'digitalización' de la imagen?",
        correcta: "La conversión de la información visual analógica (continua) en código binario (discreto) de ceros y unos, procesable por ordenadores",
        incorrectas: [
            "Escanear fotos con los dedos",
            "Hacer fotos con una cámara de carrete moderna"
        ]
    },
    {
        enunciado: "¿Qué es un 'píxel'?",
        correcta: "La unidad mínima de información (picture element) de una imagen digital rasterizada, con un color y brillo determinados",
        incorrectas: [
            "Una marca de cámaras",
            "Un duende de los ordenadores"
        ]
    },
    {
        enunciado: "¿Qué diferencia hay entre imagen 'vectorial' y 'mapa de bits' (raster)?",
        correcta: "La vectorial se basa en fórmulas matemáticas y es escalable sin pérdida; el mapa de bits es una retícula de píxeles y se pixela al ampliar",
        incorrectas: [
            "La vectorial es para fotos y el mapa de bits para dibujos",
            "No hay diferencia, son dos nombres para lo mismo"
        ]
    },
    {
        enunciado: "¿Qué es la 'resolución' de una imagen (ppp/dpi)?",
        correcta: "La densidad de píxeles por unidad de longitud (puntos por pulgada), determinante para la calidad de impresión y detalle",
        incorrectas: [
            "El tamaño del monitor en pulgadas",
            "La decisión de hacer la foto"
        ]
    },
    {
        enunciado: "¿Qué es la 'realidad virtual' (VR)?",
        correcta: "Una tecnología que crea un entorno simulado inmersivo generado por ordenador, donde el usuario interactúa mediante gafas o cascos",
        incorrectas: [
            "Ver la televisión en 3D",
            "La realidad que vemos todos los días"
        ]
    },
    {
        enunciado: "¿Qué es la 'realidad aumentada' (AR)?",
        correcta: "La superposición de elementos virtuales (información, gráficos) sobre la visión del mundo real en tiempo real (ej. Pokémon GO)",
        incorrectas: [
            "Ver la realidad con gafas de aumento",
            "Aumentar el tamaño de las fotos"
        ]
    },
    {
        enunciado: "¿Qué es el 'renderizado' (rendering)?",
        correcta: "El proceso de cálculo computacional para generar una imagen 2D final (fotorrealista o no) a partir de una escena 3D virtual",
        incorrectas: [
            "Rendirse ante un problema informático",
            "Imprimir en papel"
        ]
    },
    {
        enunciado: "¿Qué es la 'impresión 3D' o fabricación aditiva?",
        correcta: "La creación de objetos físicos tridimensionales mediante la superposición de capas de material a partir de un modelo digital",
        incorrectas: [
            "Imprimir con gafas 3D",
            "Imprimir tres veces la misma hoja"
        ]
    },
    {
        enunciado: "¿Qué es el formato 'RAW' en fotografía digital?",
        correcta: "Un archivo de imagen 'crudo', sin procesar ni comprimir, que contiene toda la información captada por el sensor, ideal para edición profesional",
        incorrectas: [
            "Una foto que ha salido mal",
            "Un formato comprimido para internet"
        ]
    },
    {
        enunciado: "¿Qué es la 'compresión con pérdida' (ej. JPEG)?",
        correcta: "Un algoritmo que reduce el tamaño del archivo eliminando información redundante o poco perceptible, perdiendo calidad original irreversiblemente",
        incorrectas: [
            "Perder la foto por culpa del ordenador",
            "Comprimir el archivo con un martillo"
        ]
    },
    {
        enunciado: "¿Qué es el 'CGI' (Computer Generated Imagery)?",
        correcta: "Imágenes generadas íntegramente por ordenador, muy usadas en efectos especiales de cine, videojuegos y publicidad",
        incorrectas: [
            "Congreso General de Imágenes",
            "Un virus informático"
        ]
    },
    {
        enunciado: "¿Qué es el 'arte generativo'?",
        correcta: "Arte creado, total o parcialmente, mediante el uso de sistemas autónomos (algoritmos, IA) definidos por el artista",
        incorrectas: [
            "Arte que genera mucho dinero",
            "Pintar generadores eléctricos"
        ]
    },
    {
        enunciado: "¿Qué es la 'inteligencia artificial' (IA) aplicada a la imagen?",
        correcta: "Sistemas capaces de aprender patrones visuales y generar, editar o reconocer imágenes de forma automática (ej. Deepfakes, generación text-to-image)",
        incorrectas: [
            "Un robot que pinta con pinceles",
            "Una cámara muy lista"
        ]
    },
    {
        enunciado: "¿Qué es el 'net art'?",
        correcta: "Arte creado específicamente para y por internet, utilizando la red como soporte, medio y tema, a menudo interactivo",
        incorrectas: [
            "Arte muy limpio (neat)",
            "Vender cuadros por internet"
        ]
    },
    {
        enunciado: "¿Qué es el 'video mapping'?",
        correcta: "Técnica de proyección de vídeo sobre superficies reales irregulares (edificios, objetos) ajustando la imagen a su geometría para crear ilusiones ópticas",
        incorrectas: [
            "Hacer mapas con vídeos",
            "Grabar vídeos de mapas"
        ]
    },
    {
        enunciado: "¿Qué es un 'holograma'?",
        correcta: "Una imagen tridimensional registrada mediante láseres en una placa fotográfica que cambia de perspectiva según el ángulo de visión",
        incorrectas: [
            "Un fantasma real",
            "Una pegatina brillante de los cromos"
        ]
    },
    {
        enunciado: "¿Qué es la 'captura de movimiento' (mocap)?",
        correcta: "Técnica para grabar los movimientos de actores reales y trasladarlos a modelos digitales 3D (ej. Gollum, Avatar)",
        incorrectas: [
            "Cazar animales en movimiento",
            "Hacer fotos movidas"
        ]
    },
    {
        enunciado: "¿Qué es el 'glitch art'?",
        correcta: "Práctica estética que busca y explota los errores digitales, corrupciones de archivos o bugs visuales como elemento artístico",
        incorrectas: [
            "Arte hecho por gente rica (glitz)",
            "Arte aburrido"
        ]
    },
    {
        enunciado: "¿Qué es la 'interactividad' en el arte digital?",
        correcta: "La capacidad de la obra para responder y modificarse en función de las acciones o presencia del espectador/usuario",
        incorrectas: [
            "Hablar con el artista en la inauguración",
            "Que el cuadro se mueva solo"
        ]
    },
    {
        enunciado: "¿Qué es el formato 'SVG'?",
        correcta: "Scalable Vector Graphics; un formato de imagen vectorial basado en XML estándar para gráficos web escalables",
        incorrectas: [
            "Super Video Game",
            "Solo Ver Gráficos"
        ]
    },
    {
        enunciado: "¿Qué es el 'copyright' vs 'Creative Commons' en la era digital?",
        correcta: "El copyright es 'todos los derechos reservados', Creative Commons permite al autor licenciar ciertos usos (copia, modificación) bajo condiciones flexibles",
        incorrectas: [
            "Son lo mismo",
            "Creative Commons significa que no tiene dueño"
        ]
    },
    {
        enunciado: "¿Qué es el 'morphing'?",
        correcta: "Efecto digital que transforma fluidamente una imagen en otra (ej. una cara en otra) mediante interpolación",
        incorrectas: [
            "Tomar morfina para inspirarse",
            "Cambiar el color de la foto"
        ]
    },
    {
        enunciado: "¿Qué es la 'fotogrametría' digital?",
        correcta: "Técnica para obtener modelos 3D fiables de objetos o terrenos a partir de múltiples fotografías tomadas desde diferentes ángulos",
        incorrectas: [
            "Medir fotos con una regla",
            "Hacer fotos con el móvil"
        ]
    },
    {
        enunciado: "¿Qué es el 'NFT' (Non-Fungible Token) en arte?",
        correcta: "Un certificado digital de autenticidad y propiedad basado en blockchain que permite comercializar arte digital como piezas únicas",
        incorrectas: [
            "No Fotos Todavía",
            "Un formato de imagen nuevo"
        ]
    },
    {
        enunciado: "¿Qué es el 'pixel art'?",
        correcta: "Estilo artístico digital que emula la estética de los videojuegos antiguos, trabajando píxel a píxel con paletas limitadas",
        incorrectas: [
            "Arte que se ve borroso",
            "Pintar píxeles en un lienzo"
        ]
    },
    {
        enunciado: "¿Qué es el 'aliasing' (y el anti-aliasing)?",
        correcta: "El efecto de 'dientes de sierra' en bordes curvos/diagonales de baja resolución; el anti-aliasing suaviza esos bordes interpolando colores",
        incorrectas: [
            "Poner un mote (alias) a la imagen",
            "Borrar la imagen"
        ]
    },
    {
        enunciado: "¿Qué es la 'nube' (cloud computing) para la imagen?",
        correcta: "Almacenamiento y procesamiento de imágenes en servidores remotos accesibles por internet, permitiendo acceso ubicuo y trabajo colaborativo",
        incorrectas: [
            "Hacer fotos al cielo",
            "Que el ordenador se caliente y eche humo"
        ]
    },
    {
        enunciado: "¿Qué es el 'profundo fake' (deepfake)?",
        correcta: "Vídeos hiperrealistas manipulados con IA donde se sustituye la cara o voz de una persona por la de otra de forma convincente",
        incorrectas: [
            "Una mentira muy profunda",
            "Un doble de acción en cine"
        ]
    },
    {
        enunciado: "¿Qué es la 'gama dinámica' (HDR) en sensores?",
        correcta: "La capacidad de captar detalle simultáneamente en las zonas más claras y más oscuras de una escena de alto contraste",
        incorrectas: [
            "Una gama de colores que se mueven",
            "Hacer fotos corriendo"
        ]
    },
    {
        enunciado: "¿Qué es el 'histograma' en fotografía digital?",
        correcta: "Un gráfico estadístico que muestra la distribución de los píxeles de una imagen según su luminosidad (de negros a blancos)",
        incorrectas: [
            "La historia de la foto",
            "Un programa para revelar"
        ]
    },
    {
        enunciado: "¿Qué es el 'ray tracing' (trazado de rayos)?",
        correcta: "Algoritmo de renderizado avanzado que simula el comportamiento físico real de la luz (rebotes, refracciones) para máximo realismo",
        incorrectas: [
            "Dibujar rayos y truenos",
            "Seguir una línea con el dedo"
        ]
    },
    {
        enunciado: "¿Qué es la ' obsolescencia programada' en tecnología de imagen?",
        correcta: "La planificación del fin de la vida útil de un producto (cámaras, software) para forzar al consumidor a comprar el nuevo modelo",
        incorrectas: [
            "Un programa obsoleto",
            "Que la tecnología dura para siempre"
        ]
    },
    {
        enunciado: "¿Qué es un 'filtro' en redes sociales (ej. Instagram)?",
        correcta: "Un ajuste preestablecido de software (LUTs o máscaras AR) que modifica la apariencia de la foto/vídeo instantáneamente",
        incorrectas: [
            "Un colador para el café",
            "Un filtro de la lente de la cámara"
        ]
    },
    {
        enunciado: "¿Qué es la 'democratización' de la imagen?",
        correcta: "El acceso masivo a herramientas de creación y difusión de imágenes (smartphones, redes), convirtiendo a todos en productores (prosumers)",
        incorrectas: [
            "Votar qué foto es la mejor",
            "Que solo los políticos hagan fotos"
        ]
    },
    {
        enunciado: "¿Qué es el 'ruido digital'?",
        correcta: "Granulado espurio visible en la imagen (píxeles de colores aleatorios) producido por la señal eléctrica del sensor, sobre todo a ISOs altos",
        incorrectas: [
            "El sonido que hace la cámara",
            "Escuchar música mientras editas"
        ]
    },
    {
        enunciado: "¿Qué es el 'canal alfa'?",
        correcta: "El canal de información que define la transparencia u opacidad de los píxeles en una imagen digital (RGBA)",
        incorrectas: [
            "El primer canal de televisión",
            "El canal del macho alfa"
        ]
    },
    {
        enunciado: "¿Qué es el 'responsive design' en imagen web?",
        correcta: "Diseño que adapta automáticamente el tamaño y disposición de las imágenes a la pantalla del dispositivo (móvil, tablet, PC)",
        incorrectas: [
            "Un diseño que responde si le hablas",
            "Diseño responsable con el medio ambiente"
        ]
    },
    {
        enunciado: "¿Qué es la 'estética glitch'?",
        correcta: "La apreciación visual de los errores de compresión, artefactos y fallos de transmisión como lenguaje artístico propio de la era digital",
        incorrectas: [
            "Una estética muy limpia y perfecta",
            "Moda de ropa brillante"
        ]
    },
    {
        enunciado: "¿Qué es el 'machine learning' en visión artificial?",
        correcta: "Entrenar a ordenadores con miles de imágenes para que aprendan a 'ver' y clasificar objetos sin ser programados explícitamente para ello",
        incorrectas: [
            "Máquinas que aprenden a leer",
            "Enseñar a un robot a pintar paredes"
        ]
    },
    {
        enunciado: "¿Qué es un 'videojuego' como medio visual?",
        correcta: "Una obra audiovisual interactiva en tiempo real que combina arte, narrativa, diseño de reglas (gameplay) y tecnología",
        incorrectas: [
            "Un juguete para niños pequeños",
            "Una película mala"
        ]
    }
];
