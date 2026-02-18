var PREGUNTAS = [
    {
        enunciado: "¿Cómo se define un punto en Axonométrico?",
        correcta: "Mediante sus tres coordenadas (X, Y, Z) o mediante su proyección directa y una proyección secundaria (generalmente la horizontal P')",
        incorrectas: [
            "Solo con la proyección directa P",
            "Con dos vistas diédricas separadas"
        ]
    },
    {
        enunciado: "¿Cómo se representa una recta?",
        correcta: "Por su proyección directa (r) y su proyección horizontal (r') [o sobre otro plano coordenado]",
        incorrectas: [
            "Solo con r",
            "Como un punto"
        ]
    },
    {
        enunciado: "¿Cómo se representan las figuras planas situadas en planos coordenados?",
        correcta: "Son proyecciones afines de la figura real; los círculos son elipses, los cuadrados son romboides",
        incorrectas: [
            "En verdadera magnitud",
            "Como líneas rectas"
        ]
    },
    {
        enunciado: "¿Cómo se dibuja una pirámide recta de base horizontal?",
        correcta: "Se dibuja la base en el plano XY (referida a ejes), se hallan las diagonales para el centro, y se levanta la altura Z verticalmente",
        incorrectas: [
            "Dibujando un triángulo",
            "Levantando altura inclinada"
        ]
    },
    {
        enunciado: "¿Cómo se halla la sección plana de un prisma por un plano oblicuo?",
        correcta: "Método de intersección de aristas (recta-plano) o intersección de caras (plano-plano trazas); los puntos se unen ordenadamente",
        incorrectas: [
            "A ojo",
            "Cortando el papel"
        ]
    },
    {
        enunciado: "¿Qué es la 'sombra propia' de un sólido en axonométrico?",
        correcta: "La parte de la superficie del objeto que no recibe luz; se determina por la separatriz (líneas de tangencia de los rayos)",
        incorrectas: [
            "La sombra en el suelo",
            "El color del objeto"
        ]
    },
    {
        enunciado: "¿Cómo se halla la sombra arrojada sobre el plano horizontal?",
        correcta: "Intersección de los rayos de luz que pasan por los vértices con el plano del suelo (trazas de los rayos)",
        incorrectas: [
            "Proyectando verticalmente",
            "Dibujando manchas negras"
        ]
    },
    {
        enunciado: "¿Cómo se representa un cilindro vertical?",
        correcta: "Dos elipses horizontales (base y tapa) unidas por dos generatrices verticales tangentes a los extremos de los ejes mayores",
        incorrectas: [
            "Dos círculos y rectas",
            "Un rectángulo"
        ]
    },
    {
        enunciado: "¿Cómo se representa una esfera?",
        correcta: "Su contorno es siempre un círculo de radio igual al real (si es ortogonal) centrado en la proyección del centro",
        incorrectas: [
            "Una elipse siempre",
            "Un óvalo"
        ]
    },
    {
        enunciado: "¿En una intersección de dos cilindros (cruz de San Andrés), las curvas se hallan...",
        correcta: "Por puntos, usando planos auxiliares horizontales que cortan a ambos cilindros según generatrices o rectángulos",
        incorrectas: [
            "A ojo",
            "Son rectas"
        ]
    },
    {
        enunciado: "¿Qué es el 'Sólido de intersección'?",
        correcta: "El volumen común a dos o más sólidos que se cruzan",
        incorrectas: [
            "La suma de los dos",
            "El espacio vacío"
        ]
    },
    {
        enunciado: "¿Cómo se representa un cono?",
        correcta: "Base elíptica y dos generatrices tangentes a la base que convergen en el vértice V",
        incorrectas: [
            "Base circular y rectas",
            "Un triángulo"
        ]
    },
    {
        enunciado: "¿Para dibujar piezas industriales complejas se empieza por...",
        correcta: "La 'caja capaz' o prisma envolvente, y se va tallando mediante sustracción de volúmenes (cortes, agujeros)",
        incorrectas: [
            "Los detalles pequeños",
            "El rotulado"
        ]
    },
    {
        enunciado: "¿Cómo se dibujan las roscas (convención)?",
        correcta: "Serie de elipses parciales o hélices esquemáticas; a menudo simplificado como cilindros con textura",
        incorrectas: [
            "Dibujar la espiral exacta siempre",
            "Líneas rectas"
        ]
    },
    {
        enunciado: "¿Qué es el 'corte al cuarto' (semicorte) en perspectiva?",
        correcta: "Eliminar un cuadrante delantero del objeto para mostrar el interior y la sección maciza rayada, manteniendo el volumen exterior",
        incorrectas: [
            "Cortar el papel",
            "Mostrar solo la sección"
        ]
    },
    {
        enunciado: "¿La dirección de la luz en axonométrico se define por...",
        correcta: "Un rayo R (dirección espacial) y su proyección R' sobre el plano horizontal",
        incorrectas: [
            "Un punto Sol fijo",
            "Solo R"
        ]
    },
    {
        enunciado: "¿La intersección de plano y esfera es...",
        correcta: "Una circunferencia, que se proyecta como una elipse (o segmento si el plano es proyectante)",
        incorrectas: [
            "Una parábola",
            "Cuadrado"
        ]
    },
    {
        enunciado: "¿Cómo se halla la intersección de una recta con una pirámide?",
        correcta: "Plano proyectante que contenga a la recta (corta a la pirámide en triángulo sección) -> intersección de recta con triángulo",
        incorrectas: [
            "Viendo donde cruza las aristas",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Cómo se dibuja un 'chaflán' (bisel) a 45º en una esquina de cubo?",
        correcta: "Uniendo los puntos medios de las tres aristas que concurren en el vértice (triángulo equilátero en isométrico)",
        incorrectas: [
            "Curvando la esquina",
            "Borrando el vértice"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva explotada' (despiece)?",
        correcta: "Dibujo de montaje donde las piezas se separan a lo largo de los ejes de ensamblaje manteniendo su orientación relativa",
        incorrectas: [
            "Un dibujo roto",
            "Una bomba"
        ]
    },
    {
        enunciado: "¿Qué es una 'tuerca hexagonal' en representación?",
        correcta: "Prisma hexagonal con chaflán cónico superior; genera curvas de intersección (hipérbolas) en las caras laterales",
        incorrectas: [
            "Un círculo",
            "Un cuadrado"
        ]
    },
    {
        enunciado: "¿Cómo se representan los ejes de simetría?",
        correcta: "Línea fina de trazo y punto",
        incorrectas: [
            "Línea continua gruesa",
            "Línea de trazos"
        ]
    },
    {
        enunciado: "¿Cómo se transportan medidas de las vistas diédricas a la axonometría?",
        correcta: "Midiendo coordenadas en las vistas y llevándolas a los ejes axonométricos (aplicando coeficiente si es necesario)",
        incorrectas: [
            "Copiando ángulos",
            "Calcando"
        ]
    },
    {
        enunciado: "¿Se pueden medir ángulos reales sobre caras inclinadas directamente?",
        correcta: "No, los ángulos se deforman; hay que abatir la cara o usar coordenadas",
        incorrectas: [
            "Sí, siempre",
            "Con transportador especial"
        ]
    },
    {
        enunciado: "¿Qué es el 'método de coordenadas' para curvas?",
        correcta: "Elegir varios puntos de la curva, hallar sus coordenadas X,Y en planta, y llevarlos a la perspectiva uniéndolos con plantilla",
        incorrectas: [
            "Usar compás",
            "A ojo"
        ]
    },
    {
        enunciado: "¿Cómo se dibuja una hélice cilíndrica?",
        correcta: "Construyendo el cilindro y dividiendo la circunferencia base y la altura (paso) en partes iguales proporcionales",
        incorrectas: [
            "Con una regla",
            "Como un círculo"
        ]
    },
    {
        enunciado: "¿Para qué sirve el 'coeficiente de reducción'?",
        correcta: "Para que el dibujo axonométrico parezca natural y proporcionado (corrigiendo la deformación de proyección)",
        incorrectas: [
            "Para ahorrar papel",
            "Para dibujar más rápido"
        ]
    },
    {
        enunciado: "¿Qué es un 'sólido compuesto'?",
        correcta: "Objeto formado por la unión o sustracción de volúmenes elementales (prismas, cilindros...)",
        incorrectas: [
            "Un sólido de gas",
            "Un líquido"
        ]
    },
    {
        enunciado: "¿En isometría, un cubo parece...",
        correcta: "Un hexágono regular (contorno exterior) con una Y interior (aristas visibles)",
        incorrectas: [
            "Un cuadrado",
            "Un octógono"
        ]
    },
    {
        enunciado: "¿Cómo se dibuja un arco de medio punto en una pared?",
        correcta: "Elipse (semielipse) inscrita en el rectángulo que enmarca el arco",
        incorrectas: [
            "Con compás centro el suelo",
            "Como una V"
        ]
    },
    {
        enunciado: "¿Qué es la 'tangencia' en axonometría?",
        correcta: "La condición de contacto suave entre curva y recta o curvas; se conserva la tangencia en la proyección",
        incorrectas: [
            "Cruce",
            "Esquina"
        ]
    },
    {
        enunciado: "¿Cómo se hace el rayado de una sección en isométrico?",
        correcta: "Generalmente a 60º (líneas horizontales de triángulo equilátero) o dirección que no coincida con aristas ni ejes",
        incorrectas: [
            "Paralelo a los ejes",
            "Vertical"
        ]
    },
    {
        enunciado: "¿Para hallar la penetración de una recta en un sólido...",
        correcta: "Se hallan los dos puntos de corte (entrada y salida) y se determina la visibilidad (tramo interno oculto)",
        incorrectas: [
            "Solo un punto",
            "No entra"
        ]
    },
    {
        enunciado: "¿Qué representa la 'perspectiva caballera' de un cubo?",
        correcta: "Una cara cuadrada frontal real y profundidad oblicua; no es axonometría ortogonal",
        incorrectas: [
            "Lo mismo que isométrica",
            "Todo deformado"
        ]
    },
    {
        enunciado: "¿Cómo verificar si un punto está en una cara plano?",
        correcta: "Si está en una recta de la cara (o cumple la ecuación del plano, o sus trazas)",
        incorrectas: [
            "Si está dentro del dibujo",
            "Si tiene color"
        ]
    },
    {
        enunciado: "¿Qué es la 'interpolación' de puntos?",
        correcta: "Hallar puntos intermedios para definir mejor una curva",
        incorrectas: [
            "Borrar puntos",
            "Mover puntos"
        ]
    },
    {
        enunciado: "¿La axonometría se usa para...?",
        correcta: "Planos de montaje, instrucciones, ilustración técnica, videojuegos isométricos",
        incorrectas: [
            "Planos de fabricación precisos (mejor diédrico)",
            "Arte abstracto"
        ]
    },
    {
        enunciado: "¿Cómo se representan los ejes ocultos?",
        correcta: "No se suelen representar, solo las aristas del objeto; si se ponen, línea fina trazos",
        incorrectas: [
            "Línea continua",
            "En rojo"
        ]
    },
    {
        enunciado: "¿Qué es el 'origen de coordenadas'?",
        correcta: "El punto O (0,0,0) donde se cruzan los tres ejes",
        incorrectas: [
            "El centro del papel",
            "Cualquier punto"
        ]
    },
    {
        enunciado: "¿Un plano paralelo al plano XZ se llama...?",
        correcta: "Plano Frontal (y = k)",
        incorrectas: [
            "Plano Horizontal",
            "Plano de Perfil"
        ]
    }
];
