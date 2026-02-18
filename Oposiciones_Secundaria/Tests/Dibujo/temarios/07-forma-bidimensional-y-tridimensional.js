var PREGUNTAS = [
    {
        enunciado: "¿Qué define esencialmente a la forma bidimensional?",
        correcta: "Posee solo dos dimensiones (alto y ancho) y se desarrolla sobre una superficie plana, careciendo de profundidad física real",
        incorrectas: [
            "Es aquella que se puede tocar por todos sus lados",
            "Es una forma que cambia según el punto de vista del espectador"
        ]
    },
    {
        enunciado: "¿Qué es el 'plano' en el lenguaje visual?",
        correcta: "Un elemento de dos dimensiones, superficie con posición y dirección, limitado por líneas",
        incorrectas: [
            "Un punto en movimiento",
            "Una línea que ha adquirido grosor"
        ]
    },
    {
        enunciado: "¿Cómo se puede sugerir tridimensionalidad en un soporte bidimensional?",
        correcta: "Mediante el uso de indicadores de profundidad como la superposición, variación de tamaño, perspectiva, y claroscuro",
        incorrectas: [
            "Usando papel más grueso",
            "Pintando solo con colores primarios"
        ]
    },
    {
        enunciado: "¿Qué es el 'bajorrelieve'?",
        correcta: "Una técnica escultórica donde las figuras sobresalen menos de la mitad de su bulto real respecto al plano de fondo",
        incorrectas: [
            "Una escultura exenta que se coloca en el suelo",
            "Un dibujo hecho con lápices de colores suaves"
        ]
    },
    {
        enunciado: "¿Qué diferencia existe entre 'figura' y 'forma'?",
        correcta: "La forma es la apariencia externa y estructura de la materia, mientras que la figura es la representación o identificación reconocible de esa forma",
        incorrectas: [
            "Son sinónimos exactos",
            "La figura es abstracta y la forma es figurativa"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva atmosférica' o 'aérea'?",
        correcta: "La simulación de profundidad mediante la disminución de nitidez y contraste, y el viraje hacia tonos azulados en los objetos lejanos",
        incorrectas: [
            "La vista que se tiene desde un avión",
            "El uso de reglas y escuadras para dibujar el aire"
        ]
    },
    {
        enunciado: "¿Qué es una forma 'estereométrica'?",
        correcta: "Una forma tridimensional sólida, medible en sus tres dimensiones (volumen)",
        incorrectas: [
            "Una forma plana medida en estéreos",
            "Un dibujo de sonido estéreo"
        ]
    },
    {
        enunciado: "¿Qué papel juega la luz en la percepción de la tridimensionalidad?",
        correcta: "Fundamental, ya que el modelado de luces y sombras (claroscuro) revela el volumen y relieve de los objetos",
        incorrectas: [
            "Ninguno, el volumen se percibe igual en la oscuridad",
            "Solo sirve para ver los colores, no las formas"
        ]
    },
    {
        enunciado: "¿Qué es el 'escorzo'?",
        correcta: "La representación distorsionada de un objeto o figura que se proyecta perpendicular u oblicuamente hacia el espectador, comprimiendo sus dimensiones",
        incorrectas: [
            "Un tipo de pincelada rápida",
            "Un error de dibujo al hacer piernas demasiado cortas"
        ]
    },
    {
        enunciado: "¿Qué se entiende por 'espacio ilusorio'?",
        correcta: "La sensación de profundidad espacial creada artificialmente sobre una superficie bidimensional",
        incorrectas: [
            "El espacio que ocupa un mago en el escenario",
            "Un lugar que no existe en el mapa"
        ]
    },
    {
        enunciado: "¿Qué es la 'escultura exenta' o de 'bulto redondo'?",
        correcta: "Aquella que no está adherida a ningún plano y puede ser observada desde cualquier ángulo alrededor de ella",
        incorrectas: [
            "Una escultura que está exenta de impuestos",
            "Un relieve pegado a la pared"
        ]
    },
    {
        enunciado: "¿Qué es el 'plano pictórico'?",
        correcta: "La superficie física frontal sobre la que se crea la imagen bidimensional (ej. el lienzo o papel)",
        incorrectas: [
            "El plano de la ciudad donde vive el pintor",
            "Una herramienta para alisar la pintura"
        ]
    },
    {
        enunciado: "¿Qué es la 'superficie reglada' en geometría tridimensional?",
        correcta: "Una superficie generada por el movimiento de una línea recta (generatriz) a lo largo de una curva (directriz)",
        incorrectas: [
            "Una mesa dibujada con regla",
            "Una superficie sometida a muchas normas"
        ]
    },
    {
        enunciado: "¿Qué es el 'hueco' en la escultura moderna (ej. Henry Moore)?",
        correcta: "Un elemento activo de la composición que conecta espacios, atraviesa la masa y la aligera, integrando el espacio interior y exterior",
        incorrectas: [
            "Un defecto del material que hay que tapar",
            "El lugar donde se guarda la escultura"
        ]
    },
    {
        enunciado: "¿Cómo se define el 'volumen' en el arte?",
        correcta: "El espacio ocupado por un cuerpo tridimensional (alto, ancho y profundo), o la sugerencia de dicho espacio en el plano",
        incorrectas: [
            "La intensidad del sonido en una instalación",
            "La cantidad de libros de arte en una biblioteca"
        ]
    },
    {
        enunciado: "¿Qué es el 'trompe-l'œil' (trampantojo)?",
        correcta: "Una técnica pictórica que intenta engañar a la vista simulando la realidad tridimensional con tal precisión que parece real",
        incorrectas: [
            "Un tipo de trampa para cazar pájaros",
            "Un estilo de pintura abstracta francesa"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva caballera'?",
        correcta: "Un sistema de proyección paralela oblicua donde el plano frontal conserva sus dimensiones reales y la profundidad se reduce a escala",
        incorrectas: [
            "La forma de ver el mundo desde un caballo",
            "Un sistema cónico con tres puntos de fuga"
        ]
    },
    {
        enunciado: "¿Qué diferencia hay entre 'soporte' y 'fondo' en una obra bidimensional?",
        correcta: "El soporte es el material físico (tela, madera), mientras que el fondo es la parte de la imagen que parece estar detrás de las figuras",
        incorrectas: [
            "No hay diferencia, son lo mismo",
            "El soporte es el caballete y el fondo la pared"
        ]
    },
    {
        enunciado: "¿Qué es la 'textura háptica'?",
        correcta: "Aquella que apela al sentido del tacto, pudiendo ser percibida físicamente y visualmente",
        incorrectas: [
            "Una textura hecha por ordenador",
            "La textura de los mapas antiguos"
        ]
    },
    {
        enunciado: "¿Qué es el 'altorrelieve'?",
        correcta: "Escultura en relieve donde las figuras sobresalen más de la mitad de su volumen del plano de fondo",
        incorrectas: [
            "Una montaña muy alta",
            "Un dibujo hecho en la parte superior del papel"
        ]
    },
    {
        enunciado: "¿Qué es la 'anamorfosis' cilíndrica?",
        correcta: "Una imagen deformada que recobra su proporción correcta al ser reflejada en un espejo cilíndrico colocado en el centro",
        incorrectas: [
            "Una forma de vaso griego",
            "Un defecto visual de los cilindros"
        ]
    },
    {
        enunciado: "¿Qué es el 'espacio topológico' en la percepción infantil?",
        correcta: "La concepción del espacio basada en relaciones de vecindad, separación, orden y cerramiento, antes que en medidas métricas",
        incorrectas: [
            "Saber los nombres de los topos",
            "La capacidad de leer mapas topográficos"
        ]
    },
    {
        enunciado: "¿Qué es la 'instalación artística' en relación al espacio?",
        correcta: "Un género de arte contemporáneo que toma un espacio tridimensional y lo modifica para crear una experiencia envolvente en el espectador",
        incorrectas: [
            "Colocar un cuadro en la pared con un taladro",
            "Instalar el software de diseño en el ordenador"
        ]
    },
    {
        enunciado: "¿Qué es el 'collage' y cómo afecta a la bidimensionalidad?",
        correcta: "Técnica de pegar materiales diversos sobre el plano, introduciendo texturas reales y leve relieve en la obra bidimensional",
        incorrectas: [
            "Pintar con cola de carpintero",
            "Una técnica que elimina por completo el color"
        ]
    },
    {
        enunciado: "¿Qué es la 'axonometría'?",
        correcta: "Sistema de representación gráfica que permite dibujar formas tridimensionales en un plano conservando el paralelismo de las rectas",
        incorrectas: [
            "La medición de los axones neuronales",
            "Un tipo de metro para medir ejes"
        ]
    },
    {
        enunciado: "¿Qué es un 'móvil' (ej. Calder)?",
        correcta: "Una escultura cinética suspendida cuyas partes se mueven con el aire o motores, introduciendo el tiempo y movimiento en la 3D",
        incorrectas: [
            "Un teléfono celular usado como arte",
            "Una estatua con ruedas en la base"
        ]
    },
    {
        enunciado: "¿Qué es la 'teselación' del plano?",
        correcta: "El recubrimiento de una superficie plana mediante un patrón de figuras que no dejan huecos ni se superponen (ej. losetas)",
        incorrectas: [
            "Romper un mosaico en trozos",
            "La técnica de tensar el lienzo"
        ]
    },
    {
        enunciado: "¿Qué es el concepto de 'masa' en escultura?",
        correcta: "La cantidad de materia que contiene el volumen escultórico, transmitiendo sensación de peso y solidez",
        incorrectas: [
            "La arcilla antes de darle forma",
            "El público que va a ver la exposición"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva jerárquica' (ej. arte egipcio)?",
        correcta: "Representar el tamaño de las figuras según su importancia social o religiosa, no por su distancia visual",
        incorrectas: [
            "Dibujar a los jefes más lejos que a los empleados",
            "Una perspectiva muy difícil de aprender"
        ]
    },
    {
        enunciado: "¿Qué es un 'poliedro regular' o Sólido Platónico?",
        correcta: "Un cuerpo geométrico tridimensional cuyas caras son polígonos regulares iguales y en cuyos vértices concurren el mismo número de caras",
        incorrectas: [
            "Un polígono de muchos lados irregulares",
            "Una figura plana muy compleja"
        ]
    },
    {
        enunciado: "¿Qué es la 'geometrización' de la forma natural?",
        correcta: "El proceso de simplificar y esquematizar las formas complejas de la naturaleza reduciéndolas a volúmenes geométricos básicos (cilindro, esfera, cono)",
        incorrectas: [
            "Medir la tierra con teodolito",
            "Prohibir las curvas en el dibujo"
        ]
    },
    {
        enunciado: "¿Qué papel juega el 'espacio negativo' en la escultura?",
        correcta: "Es el aire que rodea y penetra la escultura, definiendo sus contornos y siendo tan vital como la masa material",
        incorrectas: [
            "Es el espacio donde no se debe poner la escultura",
            "Es la sombra que proyecta la escultura en el suelo"
        ]
    },
    {
        enunciado: "¿Qué es el 'diédrico' como sistema de representación?",
        correcta: "Sistema que proyecta ortogonalmente un objeto tridimensional sobre dos planos perpendiculares (planta y alzado) para definirlo con precisión",
        incorrectas: [
            "Un dibujo hecho con dos dedos",
            "Una figura de diez caras"
        ]
    },
    {
        enunciado: "¿Qué es la 'superficie de revolución'?",
        correcta: "Superficie generada al girar una curva plana (generatriz) alrededor de un eje recto situado en su mismo plano",
        incorrectas: [
            "Una mesa giratoria para esculpir",
            "Una plaza donde se hace una revolución"
        ]
    },
    {
        enunciado: "¿Qué es el 'relieve rehundido'? Clásico en el arte egipcio.",
        correcta: "Aquel donde el contorno de la figura se talla hacia adentro en la superficie, sin que el volumen sobresalga del plano del muro",
        incorrectas: [
            "Un relieve que se ha hundido por el peso",
            "Esculpir debajo del agua"
        ]
    },
    {
        enunciado: "¿Qué es la 'holografía'?",
        correcta: "Técnica fotográfica avanzada que crea imágenes tridimensionales mediante el uso de un rayo láser",
        incorrectas: [
            "Escribir todo seguido sin puntos",
            "Un tipo de grafiti en 3D"
        ]
    },
    {
        enunciado: "¿Qué es el 'contorno'?",
        correcta: "La línea que delimita la figura bidimensional separándola del fondo; en 3D, el perfil aparente del objeto",
        incorrectas: [
            "El entorno donde vive el artista",
            "El marco del cuadro"
        ]
    },
    {
        enunciado: "¿Qué diferencia la 'maqueta' de la obra final?",
        correcta: "La maqueta es un modelo tridimensional a escala reducida usado para proyectar, estudiar y visualizar la obra definitiva",
        incorrectas: [
            "La maqueta es comestible y la obra final no",
            "La maqueta siempre es de papel"
        ]
    }
];
