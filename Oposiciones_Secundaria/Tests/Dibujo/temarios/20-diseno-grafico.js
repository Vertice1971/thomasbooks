var PREGUNTAS = [
    {
        enunciado: "¿Qué es el Diseño Gráfico?",
        correcta: "Disciplina proyectual que combina imagen y texto para comunicar mensajes visuales específicos a grupos sociales determinados, con objetivos claros",
        incorrectas: [
            "Dibujar cosas bonitas en un papel",
            "Usar Photoshop para retocar fotos"
        ]
    },
    {
        enunciado: "¿Qué es la 'tipografía'?",
        correcta: "El arte y la técnica de diseñar, disponer y componer letras (tipos) para que el texto sea legible, legible y estéticamente apropiado",
        incorrectas: [
            "Escribir con buena letra a mano",
            "Imprimir fotos en color"
        ]
    },
    {
        enunciado: "¿Qué diferencia hay entre familias tipográficas 'Serif' (con remates) y 'Sans Serif' (palo seco)?",
        correcta: "Las Serif tienen pequeños adornos en los extremos del trazo (clásicas, lectura impresa), las Sans Serif son rectas y uniformes (modernas, pantalla)",
        incorrectas: [
            "Las Serif son para niños y las Sans para adultos",
            "Las Sans Serif tienen remates y las Serif no"
        ]
    },
    {
        enunciado: "¿Qué es el 'kerning'?",
        correcta: "El ajuste manual del espacio entre pares de letras específicos para corregir efectos ópticos y equilibrar la lectura (ej. entre A y V)",
        incorrectas: [
            "El espacio entre líneas",
            "Un tipo de letra alemana"
        ]
    },
    {
        enunciado: "¿Qué es el 'tracking'?",
        correcta: "El ajuste del espacio o prosa general entre todos los caracteres de un bloque de texto",
        incorrectas: [
            "Rastrear el texto en internet",
            "El grosor de la letra"
        ]
    },
    {
        enunciado: "¿Qué es la 'retícula' o grilla (grid)?",
        correcta: "Una estructura invisible de guías y columnas que organiza el espacio de diseño para alinear y distribuir los elementos coherentemente",
        incorrectas: [
            "Una red para atrapar moscas",
            "Un estilo de dibujo cuadriculado"
        ]
    },
    {
        enunciado: "¿Qué es la 'identidad visual'?",
        correcta: "El sistema gráfico (logo, colores, tipo) que representa visualmente a una marca o institución de forma unificada",
        incorrectas: [
            "El DNI del diseñador",
            "Tener buena vista"
        ]
    },
    {
        enunciado: "¿Qué es un 'pictograma'?",
        correcta: "Un signo gráfico icónico y esquemático que representa un objeto o concepto de forma universal sin usar palabras (ej. hombre/mujer en baños)",
        incorrectas: [
            "Una foto antigua",
            "Un dibujo muy detallado y realista"
        ]
    },
    {
        enunciado: "¿Qué es el 'layout' o maquetación?",
        correcta: "La distribución y ordenación de todos los elementos gráficos (texto, imagen, blancos) en la página o pantalla",
        incorrectas: [
            "El despido de un diseñador",
            "Imprimir el trabajo final"
        ]
    },
    {
        enunciado: "¿Qué es el 'arte final'?",
        correcta: "El archivo preparado técnicamente con todas las especificaciones necesarias (sangres, marcas de corte) para ser enviado a imprenta",
        incorrectas: [
            "El boceto inicial en servilleta",
            "Una obra de arte moderno muy cara"
        ]
    },
    {
        enunciado: "¿Qué es la 'sangre' (bleed) en impresión?",
        correcta: "El margen de imagen que se extiende más allá del borde de corte final para evitar bordes blancos si la guillotina se desplaza",
        incorrectas: [
            "Cortarse con el papel",
            "La tinta roja"
        ]
    },
    {
        enunciado: "¿Qué es el 'espacio negativo' o blanco?",
        correcta: "Las zonas vacías del diseño sin elementos, fundamentales para dar aire, organizar la lectura y descansar la vista",
        incorrectas: [
            "Un espacio donde no se puede diseñar",
            "Un error del programa que borra cosas"
        ]
    },
    {
        enunciado: "¿Qué es la 'jerarquía visual'?",
        correcta: "El uso de tamaño, color y posición para indicar al lector el orden de importancia de la información (qué leer primero)",
        incorrectas: [
            "El jefe del estudio de diseño",
            "Hacer todo del mismo tamaño"
        ]
    },
    {
        enunciado: "¿Qué es el modelo de color CMYK?",
        correcta: "Cian, Magenta, Amarillo y Negro; síntesis sustractiva usada para impresión en cuatricromía",
        incorrectas: [
            "Colores Muy Kitsch",
            "Modelo para pantallas de ordenador"
        ]
    },
    {
        enunciado: "¿Qué es el modelo RGB?",
        correcta: "Rojo, Verde y Azul; síntesis aditiva usada para pantallas y dispositivos emisores de luz",
        incorrectas: [
            "Roy G. Biv (arcoíris)",
            "Modelo para imprimir carteles"
        ]
    },
    {
        enunciado: "¿Qué es una 'fuente' (font) digital?",
        correcta: "El archivo de software que contiene el diseño de los glifos de una tipografía para ser usada en el ordenador",
        incorrectas: [
            "Una fuente de agua dibujada",
            "El origen de la información"
        ]
    },
    {
        enunciado: "¿Qué es el 'diseño editorial'?",
        correcta: "La rama del diseño gráfico dedicada a la maquetación de publicaciones como libros, revistas y periódicos",
        incorrectas: [
            "Diseñar edificios editoriales",
            "Escribir editoriales de opinión"
        ]
    },
    {
        enunciado: "¿Qué es un 'manual de estilo'?",
        correcta: "Documento que define las normas gráficas y de redacción para mantener la coherencia en una publicación o marca",
        incorrectas: [
            "Un libro sobre moda",
            "Instrucciones para tener estilo"
        ]
    },
    {
        enunciado: "¿Qué es la 'señalética'?",
        correcta: "El diseño de sistemas de guías visuales (señales, mapas) para orientar a las personas en espacios físicos (aeropuertos, hospitales)",
        incorrectas: [
            "Hacer señales con la mano",
            "Diseñar señales de tráfico solo"
        ]
    },
    {
        enunciado: "¿Qué es el 'packaging' en diseño gráfico?",
        correcta: "El diseño gráfico estructural y visual del envase, combinando protección, información y atractivo comercial",
        incorrectas: [
            "Hacer las maletas",
            "Enviar paquetes por correo"
        ]
    },
    {
        enunciado: "¿Qué es el 'interlineado' (leading)?",
        correcta: "La distancia vertical entre las líneas base de renglones consecutivos de texto",
        incorrectas: [
            "Escribir entre líneas",
            "Subrayar el texto"
        ]
    },
    {
        enunciado: "¿Qué es una 'infografía'?",
        correcta: "Representación visual de información o datos complejos mediante gráficos, iconos y textos breves para facilitar su comprensión",
        incorrectas: [
            "Información sobre grafiti",
            "Una foto hecha por niños"
        ]
    },
    {
        enunciado: "¿Qué es el 'branding'?",
        correcta: "El proceso estratégico de construir una marca, donde el diseño gráfico plasma sus valores y personalidad",
        incorrectas: [
            "Marcar vacas",
            "Beber brandy mientras diseñas"
        ]
    },
    {
        enunciado: "¿Qué es la escuela 'Suiza' o Estilo Internacional (años 50)?",
        correcta: "Estilo caracterizado por la limpieza, objetividad, uso de retículas, tipografía sans-serif (Helvética) y fotografía en lugar de ilustración",
        incorrectas: [
            "Diseñar relojes y chocolate",
            "Un estilo muy decorado y barroco"
        ]
    },
    {
        enunciado: "¿Qué es el 'lorem ipsum'?",
        correcta: "Texto simulado en pseudo-latín usado para rellenar espacios de diseño y evaluar la maquetación sin distraerse con el contenido real",
        incorrectas: [
            "Un hechizo mágico de diseño",
            "El nombre de un diseñador famoso"
        ]
    },
    {
        enunciado: "¿Qué es la 'legibilidad' (readability) vs 'lecturabilidad' (legibility)?",
        correcta: "La lecturabilidad es qué tan fácil se distingue una letra de otra; la legibilidad es qué tan fácil y cómodo es leer un texto largo",
        incorrectas: [
            "Son sinónimos exactos",
            "Legibilidad es leer rápido"
        ]
    },
    {
        enunciado: "¿Qué es un 'mockup'?",
        correcta: "Un fotomontaje digital que simula cómo quedará el diseño aplicado en un soporte real (camiseta, móvil, cartel) para mostrar al cliente",
        incorrectas: [
            "Burlarse del diseño",
            "Una maqueta de trenes"
        ]
    },
    {
        enunciado: "¿Qué es el 'diseño web'?",
        correcta: "La planificación y creación de sitios web, considerando la interfaz, la navegación, la arquitectura de la información y la interacción",
        incorrectas: [
            "Diseñar telas de araña",
            "Hacer dibujos en la web"
        ]
    },
    {
        enunciado: "¿Qué es la 'resolución' de 300 ppp (dpi)?",
        correcta: "La resolución estándar mínima requerida para una impresión de alta calidad en papel (offset)",
        incorrectas: [
            "La resolución de las pantallas antiguas",
            "300 Píxeles Por Pantalla"
        ]
    },
    {
        enunciado: "¿Qué es el formato PDF?",
        correcta: "Portable Document Format; formato universal que preserva el diseño, fuentes e imágenes independientemente del software o dispositivo",
        incorrectas: [
            "Para Diseñar Fácil",
            "Programa De Fotos"
        ]
    },
    {
        enunciado: "¿Qué es la 'saturación' visual en diseño?",
        correcta: "El exceso de elementos, colores o información que abruma al espectador y dificulta la comunicación (ruido visual)",
        incorrectas: [
            "Cuando el color es muy bonito",
            "Estar harto de diseñar"
        ]
    },
    {
        enunciado: "¿Qué es el 'cartelismo'?",
        correcta: "La especialidad del diseño centrada en el cartel como medio de comunicación de masas en la calle, buscando impacto inmediato a distancia",
        incorrectas: [
            "Coleccionar cartas",
            "Hacer castillos de cartón"
        ]
    },
    {
        enunciado: "¿Qué es el 'glifo'?",
        correcta: "La representación gráfica concreta de un carácter (letra, número, signo) dentro de una fuente tipográfica",
        incorrectas: [
            "Un jeroglífico egipcio",
            "Un error gráfico"
        ]
    },
    {
        enunciado: "¿Qué es la 'escala de grises'?",
        correcta: "Modo de imagen que contiene solo información de luminosidad (negro a blanco), sin color cromático",
        incorrectas: [
            "Una escalera pintada de gris",
            "Estar triste"
        ]
    },
    {
        enunciado: "¿Qué es un 'vector'?",
        correcta: "Objeto gráfico definido matemáticamente por puntos y curvas (Bézier), escalable infinitamente sin pixelarse",
        incorrectas: [
            "Un insecto que transmite enfermedades",
            "Una flecha solamente"
        ]
    },
    {
        enunciado: "¿Qué es la 'tinta plana' o Pantone?",
        correcta: "Un color especial premezclado (tinta directa) que garantiza un tono exacto y uniforme, a diferencia de la mezcla CMYK",
        incorrectas: [
            "Tinta que no brilla",
            "Un pan muy grande (panetone)"
        ]
    },
    {
        enunciado: "¿Qué es la 'caligrafía' frente a la 'tipografía'?",
        correcta: "La caligrafía es escritura manual artística (el trazo único); la tipografía es el diseño de letras prefabricadas y repetibles",
        incorrectas: [
            "Es lo mismo",
            "La tipografía es fea y la caligrafía bonita"
        ]
    },
    {
        enunciado: "¿Qué es el 'briefing' creativo?",
        correcta: "El documento interno que traduce las necesidades del cliente en instrucciones precisas e inspiradoras para el equipo de diseño",
        incorrectas: [
            "Una reunión corta",
            "Llevar ropa interior creativa"
        ]
    },
    {
        enunciado: "¿Qué es el 'contraste' tipográfico?",
        correcta: "La diferencia notable entre grosores, tamaños o estilos de letra para crear dinamismo y jerarquía",
        incorrectas: [
            "Escribir blanco sobre negro",
            "Usar letras feas y bonitas"
        ]
    },
    {
        enunciado: "¿Qué es el 'diseño de experiencia de usuario' (UX)?",
        correcta: "Diseñar no solo la apariencia (UI), sino cómo se siente y funciona todo el proceso de interacción del usuario con el producto/servicio",
        incorrectas: [
            "Diseñar experimentos",
            "Hacer encuestas a usuarios"
        ]
    }
];
