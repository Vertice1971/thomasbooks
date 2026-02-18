var PREGUNTAS = [
    {
        enunciado: "¿Qué significan las siglas CAD?",
        correcta: "Computer Aided Design (Diseño Asistido por Ordenador)",
        incorrectas: [
            "Construcción y Arquitectura Digital",
            "Control Automático de Dibujo"
        ]
    },
    {
        enunciado: "¿Qué es el DAO (en español)?",
        correcta: "Dibujo Asistido por Ordenador (equivalente a CAD)",
        incorrectas: [
            "Departamento de Arquitectura y Obras",
            "Diseño Artístico de Objetos"
        ]
    },
    {
        enunciado: "¿Qué diferencia principal hay entre un programa de dibujo vectorial (ej. Illustrator/AutoCAD) y uno de mapa de bits (ej. Photoshop)?",
        correcta: "El vectorial define entidades geométricas mediante fórmulas matemáticas (precisión infinita), el raster usa una malla de píxeles (resolución fija)",
        incorrectas: [
            "El vectorial es en blanco y negro y el otro en color",
            "El vectorial es para niños y el raster para profesionales"
        ]
    },
    {
        enunciado: "¿Qué es el sistema de coordenadas cartesianas (X, Y, Z) en CAD?",
        correcta: "El sistema de referencia espacial universal usado para posicionar puntos y objetos con precisión matemática en el espacio 2D o 3D",
        incorrectas: [
            "Un sistema para hacer cartas",
            "Las coordenadas GPS del ordenador"
        ]
    },
    {
        enunciado: "¿Qué es el BIM (Building Information Modeling)?",
        correcta: "Una metodología de trabajo colaborativa que crea un modelo digital inteligente del edificio, conteniendo no solo geometría sino datos de construcción, costes y tiempos",
        incorrectas: [
            "Un formato de archivo de imagen (Bitmap Image Map)",
            "Un videojuego de construcción"
        ]
    },
    {
        enunciado: "¿Qué son las 'capas' (layers) en un programa CAD?",
        correcta: "Niveles transparentes superpuestos que permiten organizar y separar la información del dibujo (cotas, muros, muebles) para gestionarla independientemente",
        incorrectas: [
            "Las capas de pintura de la pantalla",
            "Ropa para abrigarse"
        ]
    },
    {
        enunciado: "¿Qué es una 'polilínea'?",
        correcta: "Una entidad de dibujo formada por varios segmentos de línea y/o arco conectados que se comportan como un único objeto",
        incorrectas: [
            "Una línea muy educada (polite)",
            "Muchas líneas sueltas"
        ]
    },
    {
        enunciado: "¿Qué es el 'snap' o referencia a objetos?",
        correcta: "Una herramienta de precisión que atrae el cursor magnéticamente a puntos clave de la geometría (punto final, medio, centro, intersección)",
        incorrectas: [
            "El sonido del clic del ratón",
            "Romper una línea"
        ]
    },
    {
        enunciado: "¿Qué es un 'bloque' o 'componente' en CAD?",
        correcta: "Un conjunto de objetos agrupados bajo un nombre (ej. una puerta) que se puede insertar múltiples veces; si se edita el original, se actualizan todas las copias",
        incorrectas: [
            "Un bloque de hormigón",
            "Cuando el programa se bloquea"
        ]
    },
    {
        enunciado: "¿Qué es el 'render'? ",
        correcta: "El proceso de generar una imagen fotorrealista a partir del modelo 3D alámbrico, calculando luces, sombras, materiales y texturas",
        incorrectas: [
            "Guardar el archivo",
            "Borrar el dibujo"
        ]
    },
    {
        enunciado: "¿Qué es la 'paramétrica' en el diseño?",
        correcta: "La capacidad de definir objetos mediante parámetros y relaciones (reglas), de modo que al cambiar un valor (ej. longitud), la geometría se actualiza automáticamente",
        incorrectas: [
            "Medir con un metro",
            "Diseñar para médicos"
        ]
    },
    {
        enunciado: "¿Qué es el formato DXF?",
        correcta: "Drawing Exchange Format; un formato de archivo estándar creado para facilitar el intercambio de dibujos CAD entre diferentes programas",
        incorrectas: [
            "Diseño Xilográfico Final",
            "Un formato de música"
        ]
    },
    {
        enunciado: "¿Qué es el CNC (Control Numérico Computarizado)?",
        correcta: "Tecnología que permite controlar máquinas herramienta (tornos, fresadoras) mediante instrucciones generadas desde un diseño CAD/CAM",
        incorrectas: [
            "Centro Nacional de Construcción",
            "Una banda de música industrial"
        ]
    },
    {
        enunciado: "¿Qué es el modelado NURBS?",
        correcta: "Non-Uniform Rational B-Splines; representaciones matemáticas precisas de curvas y superficies suaves, ideales para diseño industrial y automoción",
        incorrectas: [
            "Modelado con nubes",
            "Dibujar a mano alzada"
        ]
    },
    {
        enunciado: "¿Qué es la 'extrusión' en modelado 3D?",
        correcta: "Operación que genera un volumen dando altura o profundidad a un perfil 2D cerrado en dirección perpendicular",
        incorrectas: [
            "Sacar algo a la fuerza",
            "Explotar el modelo"
        ]
    },
    {
        enunciado: "¿Qué es una 'operación booleana' (unión, diferencia, intersección)?",
        correcta: "Operaciones lógicas entre sólidos que permiten crear formas complejas sumando, restando o quedando con la parte común de volúmenes",
        incorrectas: [
            "Una operación quirúrgica",
            "Bailar boleros"
        ]
    },
    {
        enunciado: "¿Qué es el 'espacio papel' o 'layout' frente al 'espacio modelo'?",
        correcta: "El espacio modelo es donde se dibuja a escala real (1:1), el espacio papel es donde se compone la lámina para imprimir (ventanas, cajetín, escala de impresión)",
        incorrectas: [
            "El espacio papel es para dibujar en papel real",
            "No hay diferencia, son lo mismo"
        ]
    },
    {
        enunciado: "¿Qué es el 'trazado de rayos' (Ray Tracing) en tiempo real?",
        correcta: "Tecnología reciente (en GPUs) que permite calcular reflejos e iluminación realista instantáneamente mientras se trabaja o juega",
        incorrectas: [
            "Dibujar rayos de sol a mano",
            "Tardar mucho en renderizar"
        ]
    },
    {
        enunciado: "¿Qué es un 'plotter'?",
        correcta: "Un dispositivo de impresión de gran formato capaz de imprimir planos técnicos y carteles con alta precisión",
        incorrectas: [
            "El villano de la película",
            "Un piloto de avión"
        ]
    },
    {
        enunciado: "¿Qué es la 'digitalización 3D' o escaneado 3D?",
        correcta: "Capturar la geometría de un objeto real mediante láser o luz estructurada para convertirlo en un modelo CAD digital (nube de puntos)",
        incorrectas: [
            "Hacer una foto con el móvil",
            "Imprimir en 3D"
        ]
    },
    {
        enunciado: "¿Qué es el 'wireframe' o modelo alámbrico?",
        correcta: "Modo de visualización que muestra solo las aristas y vértices del objeto 3D, como una estructura de alambre transparente",
        incorrectas: [
            "Un marco de fotos de alambre",
            "Una conexión wifi"
        ]
    },
    {
        enunciado: "¿Qué es el CAM (Computer Aided Manufacturing)?",
        correcta: "Fabricación Asistida por Ordenador; software que convierte el diseño CAD en instrucciones de mecanizado para la fabricación real",
        incorrectas: [
            "Cámara en inglés",
            "Comer A Menudo"
        ]
    },
    {
        enunciado: "¿Qué es la 'revolución' como herramienta de modelado?",
        correcta: "Crear un sólido girando un perfil 2D alrededor de un eje (ej. crear una copa, una columna)",
        incorrectas: [
            "Levantarse contra el programa",
            "Girar la pantalla"
        ]
    },
    {
        enunciado: "¿Qué es el 'mapeado de texturas'?",
        correcta: "Aplicar una imagen 2D (bitmap) sobre la superficie de un modelo 3D para simular materiales (madera, ladrillo)",
        incorrectas: [
            "Hacer un mapa del tesoro",
            "Tocar la textura de la pantalla"
        ]
    },
    {
        enunciado: "¿Qué es el estándar IGES o STEP?",
        correcta: "Formatos de archivo neutros para intercambiar modelos 3D sólidos entre diferentes plataformas CAD sin perder geometría",
        incorrectas: [
            "Nombres de perros",
            "Pasos de baile"
        ]
    },
    {
        enunciado: "¿Qué es la 'malla poligonal' (mesh)?",
        correcta: "Representación de una superficie 3D mediante caras planas (generalmente triángulos o cuadriláteros) conectadas por aristas y vértices",
        incorrectas: [
            "Una red para pescar",
            "Una camiseta de deporte"
        ]
    },
    {
        enunciado: "¿Qué es el 'escalado' en CAD?",
        correcta: "Cambiar el tamaño de un objeto multiplicando sus dimensiones por un factor, manteniéndolo vectorial y preciso",
        incorrectas: [
            "Subir escaleras",
            "Pixelar la imagen"
        ]
    },
    {
        enunciado: "¿Qué es la 'simetría' (mirror) en CAD?",
        correcta: "Crear una copia especular de un objeto respecto a un eje de simetría definido",
        incorrectas: [
            "Mirarse en el espejo",
            "Romper el objeto por la mitad"
        ]
    },
    {
        enunciado: "¿Qué es el software de 'código abierto' (Open Source) en diseño (ej. Blender, Inkscape)?",
        correcta: "Software cuyo código fuente es accesible y modificable, generalmente gratuito y desarrollado por la comunidad",
        incorrectas: [
            "Software que siempre tiene la puerta abierta",
            "Software pirata"
        ]
    },
    {
        enunciado: "¿Qué es la 'acotación' automática?",
        correcta: "Herramienta que mide y dibuja las dimensiones (cotas) de los objetos basándose en su geometría real, actualizándose si cambia el dibujo",
        incorrectas: [
            "Poner límites al dibujante",
            "Cerrar el programa solo"
        ]
    },
    {
        enunciado: "¿Qué es 'deshacer' (Ctrl+Z) y su importancia histórica?",
        correcta: "La capacidad de revertir acciones erróneas instantáneamente, permitiendo la exploración y el prueb-error sin miedo a destruir el trabajo, algo imposible en dibujo manual",
        incorrectas: [
            "La última letra del abecedario",
            "Una tecla que no sirve para nada"
        ]
    },
    {
        enunciado: "¿Qué es la 'biblioteca' o librería de objetos?",
        correcta: "Colección de bloques y símbolos predefinidos (árboles, coches, tornillos) listos para insertar y agilizar el dibujo",
        incorrectas: [
            "Donde se guardan los manuales",
            "Una estantería virtual"
        ]
    },
    {
        enunciado: "¿Qué es la 'matriz' (array)?",
        correcta: "Herramienta para crear copias múltiples de un objeto ordenadas rectangularmente (filas/columnas) o polarmente (circular)",
        incorrectas: [
            "La película Matrix",
            "Una madre"
        ]
    },
    {
        enunciado: "¿Qué es el 'diseño generativo' en ingeniería?",
        correcta: "Uso de algoritmos e IA para explorar miles de soluciones de diseño posibles que cumplan ciertos requisitos (peso, resistencia), generando formas orgánicas optimizadas",
        incorrectas: [
            "Diseñar generadores",
            "Diseñar rápido"
        ]
    },
    {
        enunciado: "¿Qué es el 'grados de libertad' en un ensamblaje CAD?",
        correcta: "Las posibilidades de movimiento (traslación o rotación) que tiene una pieza dentro de un mecanismo virtual",
        incorrectas: [
            "La temperatura del ordenador",
            "La libertad política del diseñador"
        ]
    },
    {
        enunciado: "¿Qué es la 'realidad mixta' en diseño?",
        correcta: "Combinación de VR y AR donde objetos digitales y reales coexisten e interactúan en tiempo real",
        incorrectas: [
            "Mezclar realidad y ficción en un libro",
            "Estar medio dormido"
        ]
    },
    {
        enunciado: "¿Qué es un 'tablet digitalizadora' o Wacom?",
        correcta: "Periférico de entrada con lápiz sensible a la presión que permite dibujar de forma natural en el ordenador, simulando técnicas tradicionales",
        incorrectas: [
            "Una pastilla digital",
            "Una mesa normal"
        ]
    },
    {
        enunciado: "¿Qué es el 'bumping' o mapa de relieve?",
        correcta: "Técnica de texturizado que simula rugosidad en una superficie mediante un mapa de grises, sin alterar la geometría real del modelo",
        incorrectas: [
            "Saltar baches",
            "Chocar objetos"
        ]
    },
    {
        enunciado: "¿Qué es el 'clay render'?",
        correcta: "Render de prueba donde todo el modelo se muestra con un material gris mate (arcilla) para evaluar la iluminación y geometría sin distracciones de color",
        incorrectas: [
            "Renderizar barro real",
            "Un render sucio"
        ]
    },
    {
        enunciado: "¿Qué es la 'topología' de la malla?",
        correcta: "La estructura y flujo de los polígonos que forman el objeto 3D; una buena topología es crucial para que el modelo se anime y deforme correctamente",
        incorrectas: [
            "El estudio de los topos",
            "El mapa del terreno"
        ]
    }
];
