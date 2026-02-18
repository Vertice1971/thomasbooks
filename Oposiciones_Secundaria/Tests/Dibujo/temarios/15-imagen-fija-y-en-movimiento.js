var PREGUNTAS = [
    {
        enunciado: "¿Qué define esencialmente a la 'imagen fija'?",
        correcta: "Es una representación visual que captura un instante único del tiempo, congelándolo en un soporte estático (fotografía, pintura, dibujo)",
        incorrectas: [
            "Una imagen que no se puede mover de la pared",
            "Una película que se ha estropeado"
        ]
    },
    {
        enunciado: "¿Qué es la 'imagen en movimiento'?",
        correcta: "Una sucesión secuencial de imágenes fijas que, proyectadas a cierta velocidad, generan en el cerebro la ilusión de movimiento continuo (persistencia retiniana)",
        incorrectas: [
            "Una imagen que se cae al suelo",
            "Un cuadro con ruedas"
        ]
    },
    {
        enunciado: "¿Qué es la 'persistencia retiniana' (o fenómeno Phi)?",
        correcta: "El fenómeno fisiológico por el cual una imagen permanece en la retina una décima de segundo tras desaparecer, permitiendo enlazar fotogramas sucesivos",
        incorrectas: [
            "Quedarse ciego por mirar mucho la pantalla",
            "Tener una retina muy resistente"
        ]
    },
    {
        enunciado: "¿Qué es el 'encuadre'?",
        correcta: "La selección de la porción de realidad que se incluye dentro de los límites de la imagen, excluyendo el 'fuera de campo'",
        incorrectas: [
            "Poner un marco de madera al cuadro",
            "Encajar bien las piezas de un puzle"
        ]
    },
    {
        enunciado: "¿Qué diferencia hay entre 'tiempo' en la imagen fija y en la móvil?",
        correcta: "En la fija el tiempo está congelado o sugerido (sincrónico), en la móvil el tiempo transcurre de verdad y tiene duración (diacrónico)",
        incorrectas: [
            "La imagen fija siempre es antigua y la móvil moderna",
            "No hay diferencia, el tiempo es el mismo"
        ]
    },
    {
        enunciado: "¿Qué es el 'fuera de campo'?",
        correcta: "Todo aquello que ocurre o existe en el espacio-tiempo de la narración pero que no se ve dentro de los límites físicos del encuadre",
        incorrectas: [
            "Irse al campo a hacer fotos",
            "Estar fuera de juego en fútbol"
        ]
    },
    {
        enunciado: "¿Qué es la 'secuencia' en el lenguaje cinematográfico?",
        correcta: "Una unidad narrativa formada por una serie de escenas vinculadas por una misma idea o tramo de la acción (como un capítulo)",
        incorrectas: [
            "Tener mala suerte seguida",
            "Una foto hecha con temporizador"
        ]
    },
    {
        enunciado: "¿Qué es el 'plano secuencial'?",
        correcta: "Una toma larga sin cortes que cubre una secuencia entera, siguiendo la acción de forma continua y fluida",
        incorrectas: [
            "Un plano de la ciudad con secuencias",
            "Un plano que sale mal y hay que repetirlo"
        ]
    },
    {
        enunciado: "¿Qué es un 'fotograma' (frame)?",
        correcta: "Cada una de las imágenes fijas individuales que componen una película o animación",
        incorrectas: [
            "Una foto que pesa un gramo",
            "Un tipo de cámara antigua"
        ]
    },
    {
        enunciado: "¿Cuál es la velocidad de proyección estándar en el cine sonoro actual?",
        correcta: "24 fotogramas por segundo (fps)",
        incorrectas: [
            "60 fotogramas por minuto",
            "1000 fotogramas por hora"
        ]
    },
    {
        enunciado: "¿Qué es el 'cómic' o historieta?",
        correcta: "Un medio que narra historias mediante una secuencia de imágenes fijas (viñetas) combinando lenguaje visual y verbal",
        incorrectas: [
            "Un libro de chistes sin dibujos",
            "Una película de dibujos animados"
        ]
    },
    {
        enunciado: "¿Qué es el 'storyboard'?",
        correcta: "Un guion gráfico formado por ilustraciones secuenciales que previsualizan los planos de una obra audiovisual antes de rodarla",
        incorrectas: [
            "Una tabla de surf con historias",
            "Un tipo de cuento para dormir"
        ]
    },
    {
        enunciado: "¿Qué es la 'elipsis' temporal?",
        correcta: "Un salto en el tiempo narrativo donde se omite una parte de la acción que el espectador deduce, agilizando el relato",
        incorrectas: [
            "Una forma geométrica ovalada",
            "Quedarse sin palabras"
        ]
    },
    {
        enunciado: "¿Qué es la 'profundidad de campo'?",
        correcta: "La zona de la imagen (distancia entre el punto más cercano y el más lejano) que aparece nítida y enfocada",
        incorrectas: [
            "Lo profundo que es un agujero en el campo",
            "La longitud de un campo de fútbol"
        ]
    },
    {
        enunciado: "¿Qué es el 'raccord' o continuidad?",
        correcta: "La coherencia lógica y visual entre dos planos consecutivos para que el corte sea invisible y la acción fluya (ej. luz, vestuario, posición)",
        incorrectas: [
            "Un récord de velocidad grabando",
            "Un cable para conectar cámaras"
        ]
    },
    {
        enunciado: "¿Qué es el 'montaje' o edición?",
        correcta: "El proceso de seleccionar, ordenar y unir los planos rodados para construir la narrativa, el ritmo y el significado final de la obra",
        incorrectas: [
            "Montar un mueble con instrucciones",
            "Subirse a un caballo en una película"
        ]
    },
    {
        enunciado: "¿Qué es una 'panorámica'?",
        correcta: "Un movimiento de cámara sobre su propio eje (vertical u horizontal) sin desplazarse físicamente del sitio",
        incorrectas: [
            "Una foto muy ancha que se ve todo",
            "Una vista desde una montaña"
        ]
    },
    {
        enunciado: "¿Qué es un 'travelling'?",
        correcta: "Un movimiento de cámara donde esta se desplaza físicamente por el espacio (sobre railes, grúa, a mano) siguiendo o acercándose a la acción",
        incorrectas: [
            "Irse de viaje a rodar fuera",
            "Una agencia de viajes"
        ]
    },
    {
        enunciado: "¿Qué es el 'zoom' (travelling óptico)?",
        correcta: "Cambio de la distancia focal de la lente que acerca o aleja la imagen sin mover la cámara, aplanando la perspectiva al acercar",
        incorrectas: [
            "Un sonido de explosión en los cómics",
            "Una videollamada"
        ]
    },
    {
        enunciado: "¿Qué es la 'hipermedia'?",
        correcta: "Sistemas que integran texto, imagen fija, vídeo, audio y enlaces interactivos no lineales (ej. web, multimedia)",
        incorrectas: [
            "Unos medios de comunicación muy exagerados",
            "Una tienda de electrónica grande"
        ]
    },
    {
        enunciado: "¿Qué es el 'plano detalle'?",
        correcta: "Un encuadre muy cerrado que muestra un objeto pequeño o una parte del cuerpo muy de cerca para enfatizarlo",
        incorrectas: [
            "Un plano lleno de cosas pequeñas",
            "Un mapa muy detallado"
        ]
    },
    {
        enunciado: "¿Qué es el 'tiempo bala' (bullet time)?",
        correcta: "Efecto visual donde la acción se ralentiza extremadamente o se congela mientras la cámara se mueve alrededor de la escena a velocidad normal",
        incorrectas: [
            "El tiempo que tarda una bala en llegar",
            "Una película de vaqueros"
        ]
    },
    {
        enunciado: "¿Qué es el 'stop motion'?",
        correcta: "Técnica de animación que consiste en aparentar el movimiento de objetos estáticos capturando imágenes foto a foto y moviéndolos ligeramente",
        incorrectas: [
            "Parar el movimiento de golpe",
            "Una señal de stop animada"
        ]
    },
    {
        enunciado: "¿Qué es la 'regla de los 180 grados' o eje de acción?",
        correcta: "Norma básica de continuidad que impide a la cámara cruzar la línea imaginaria que une a dos personajes que miran uno al otro, para no invertir sus miradas",
        incorrectas: [
            "Rodar siempre a 180 grados de temperatura",
            "Girar la cámara al revés"
        ]
    },
    {
        enunciado: "¿Qué es el 'plano americano'?",
        correcta: "Encuadre que corta a la figura humana aproximadamente por las rodillas (origen en el western para ver las pistolas)",
        incorrectas: [
            "Un plano de Estados Unidos",
            "Un plano con bandera americana"
        ]
    },
    {
        enunciado: "¿Qué es la 'imagen secuencial' fija?",
        correcta: "Imágenes que comparten un mismo espacio-tiempo o soporte pero se leen en orden, como un retablo narrativo o las columnas trajanas",
        incorrectas: [
            "Una foto movida",
            "Una imagen que cambia sola"
        ]
    },
    {
        enunciado: "¿Qué es el 'ritmo interno' del plano?",
        correcta: "El movimiento que ocurre dentro del encuadre (actores, objetos), independientemente del movimiento de la cámara o del montaje",
        incorrectas: [
            "El latido del corazón del cámara",
            "La música de fondo"
        ]
    },
    {
        enunciado: "¿Qué es el 'flashback' (analepsis)?",
        correcta: "Un salto temporal hacia el pasado en la narración para explicar antecedentes",
        incorrectas: [
            "Un flash de cámara muy potente",
            "Volver a casa rápido"
        ]
    },
    {
        enunciado: "¿Qué es la 'postproducción'?",
        correcta: "Fase final de la creación audiovisual (edición, efectos, color, sonido) posterior al rodaje",
        incorrectas: [
            "Lo que se hace después de estrenar la película",
            "La fiesta de fin de rodaje"
        ]
    },
    {
        enunciado: "¿Qué es el 'plano subjetivo'?",
        correcta: "Aquel que muestra la acción desde el punto de vista (ojos) de un personaje, como si el espectador fuera él",
        incorrectas: [
            "Un plano que depende de la opinión de cada uno",
            "Un plano mal enfocado"
        ]
    },
    {
        enunciado: "¿Qué es la 'pixilación'?",
        correcta: "Una variante del stop motion donde se animan personas reales fotograma a fotograma como si fueran muñecos",
        incorrectas: [
            "Ver la imagen pixelada por baja resolución",
            "Un error digital"
        ]
    },
    {
        enunciado: "¿Qué es el 'GIF animado'?",
        correcta: "Un formato de imagen digital que permite contener una animación simple en bucle infinito, a medio camino entre foto y vídeo",
        incorrectas: [
            "Un detergente para limpiar pantallas",
            "Un regalo animado"
        ]
    },
    {
        enunciado: "¿Qué es la 'composición' en cine?",
        correcta: "La organización de elementos dentro del encuadre, que a diferencia de la pintura, es dinámica y cambia constante",
        incorrectas: [
            "La música de la banda sonora",
            "Escribir el guion"
        ]
    },
    {
        enunciado: "¿Qué es el 'salto de eje'?",
        correcta: "Un error de continuidad al cruzar el eje de acción, provocando que los personajes parezcan mirar al mismo lado o desorientando espacialmente",
        incorrectas: [
            "Romper el eje de las ruedas del carro",
            "Saltar por encima de la cámara"
        ]
    },
    {
        enunciado: "¿Qué es la 'cronofotografía' (Marey, Muybridge)?",
        correcta: "Antecedente del cine; técnica que captura fases sucesivas del movimiento en una sola imagen o serie para su estudio científico",
        incorrectas: [
            "Fotos de relojes antiguos",
            "Fotos que tardan mucho en hacerse"
        ]
    },
    {
        enunciado: "¿Qué es el 'cinegética' de la imagen?",
        correcta: "La capacidad de la imagen para 'cazar' o capturar la realidad y el tiempo (metáfora de atrapar el instante)",
        incorrectas: [
            "Cine sobre caza",
            "Imágenes de ciervos"
        ]
    },
    {
        enunciado: "¿Qué es la 'voz en off'?",
        correcta: "Recurso sonoro narrativo donde se escucha la voz de un personaje o narrador que no está visible en pantalla en ese momento",
        incorrectas: [
            "Hablar con el micrófono apagado",
            "La voz de los fantasmas"
        ]
    },
    {
        enunciado: "¿Qué es el 'fundido a negro'?",
        correcta: "Transición gradual donde la imagen se oscurece hasta el negro total, indicando un cierre de capítulo o paso de tiempo largo",
        incorrectas: [
            "Quemar la película",
            "Apagar la tele de golpe"
        ]
    },
    {
        enunciado: "¿Qué es el 'time-lapse'?",
        correcta: "Técnica de cámara rápida donde se toman fotos a intervalos largos para mostrar procesos lentos (nubes, plantas) a gran velocidad",
        incorrectas: [
            "Perder el tiempo",
            "Un lapso de memoria"
        ]
    },
    {
        enunciado: "¿Qué diferencia clave tiene la percepción de una foto frente a un vídeo?",
        correcta: "La foto permite la contemplación detallada y atemporal (exploración libre), el vídeo impone su propio tiempo y ritmo de lectura",
        incorrectas: [
            "La foto es en blanco y negro y el vídeo en color",
            "El vídeo es más fácil de hacer"
        ]
    }
];
