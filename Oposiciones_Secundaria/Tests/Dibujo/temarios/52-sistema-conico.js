var PREGUNTAS = [
    {
        enunciado: "¿Qué es el 'Sistema Cónico'?",
        correcta: "Sistema de representación basado en la proyección central desde un punto de vista (V) sobre un plano del cuadro",
        incorrectas: [
            "Proyección cilíndrica",
            "Sistema diédrico"
        ]
    },
    {
        enunciado: "¿Qué es el 'Punto Principal' (P)?",
        correcta: "La proyección ortogonal del Punto de Vista (V) sobre el Plano del Cuadro; centro de la perspectiva",
        incorrectas: [
            "El infinito",
            "El punto de fuga lateral"
        ]
    },
    {
        enunciado: "¿Qué es la 'Línea de Horizonte' (LH)?",
        correcta: "Recta horizontal que pasa por P; contiene los puntos de fuga de las rectas horizontales y representa la altura de los ojos",
        incorrectas: [
            "Línea de Tierra",
            "Borde del papel"
        ]
    },
    {
        enunciado: "¿Qué es la 'Línea de Tierra' (LT)?",
        correcta: "Intersección del Plano del Cuadro con el Plano Geometral (suelo)",
        incorrectas: [
            "Línea de horizonte",
            "Línea vertical"
        ]
    },
    {
        enunciado: "¿Qué son los 'Puntos de Fuga' (F)?",
        correcta: "Puntos donde convergen las imágenes de las rectas paralelas en el espacio (se hallan trazando paralela visual desde V)",
        incorrectas: [
            "Puntos de luz",
            "Esquimales"
        ]
    },
    {
        enunciado: "¿Qué es una 'Perspectiva Frontal' (un punto)?",
        correcta: "Cuando el objeto tiene caras paralelas al cuadro; fugan a P las perpendiculares y no fugan las frontales",
        incorrectas: [
            "Perspectiva oblicua",
            "Aérea"
        ]
    },
    {
        enunciado: "¿Qué es una 'Perspectiva Oblicua' (dos puntos)?",
        correcta: "Cuando las caras verticales son oblicuas al cuadro; hay dos fugas F y F' en el horizonte",
        incorrectas: [
            "Frontal",
            "Isométrica"
        ]
    },
    {
        enunciado: "¿Qué son los 'Puntos de Distancia' (D)?",
        correcta: "Puntos métricos de las rectas a 45º (perpendiculares al cuadro); distan de P la distancia principal d",
        incorrectas: [
            "Puntos lejanos",
            "Fugas de verticales"
        ]
    },
    {
        enunciado: "¿Qué son los 'Puntos Métricos' (M)?",
        correcta: "Puntos en el horizonte que sirven para medir longitudes reales sobre las rectas fugantes",
        incorrectas: [
            "Puntos de medida de altura",
            "Centímetro"
        ]
    },
    {
        enunciado: "¿Qué es el 'Círculo de Visión'?",
        correcta: "Zona del cuadro donde la deformación es aceptable (cono visual de 60º)",
        incorrectas: [
            "Un ojo",
            "Un reloj"
        ]
    },
    {
        enunciado: "¿Qué es la 'Perspectiva Aérea' (tres puntos)?",
        correcta: "Plano del cuadro inclinado respecto a la vertical (picado/contrapicado); las verticales fugan a un tercer punto",
        incorrectas: [
            "Desde un avión plano",
            "Atmosférica"
        ]
    },
    {
        enunciado: "¿Cómo se miden alturas?",
        correcta: "En la Línea de Tierra (o plano del cuadro) donde las rectas cortan al cuadro (verdadera magnitud)",
        incorrectas: [
            "En el horizonte",
            "En el infinito"
        ]
    },
    {
        enunciado: "¿Qué es 'abatir el geometral'?",
        correcta: "Girar el plano del suelo 90º hacia abajo para dibujar la planta y fugar desde allí",
        incorrectas: [
            "Borrar el suelo",
            "Romperlo"
        ]
    },
    {
        enunciado: "¿Qué es la 'homología' en cónica?",
        correcta: "Relación entre planta abatida y perspectiva (Centro V abatido, Eje LT, Recta límite LH)",
        incorrectas: [
            "Semejanza",
            "Igualdad"
        ]
    },
    {
        enunciado: "¿Dónde fugan las rectas verticales en cónica de cuadro vertical?",
        correcta: "Al infinito (son paralelas entre sí)",
        incorrectas: [
            "A P",
            "Al suelo"
        ]
    },
    {
        enunciado: "¿Qué es la 'altura del horizonte'?",
        correcta: "Distancia vertical h desde LT a LH (altura de los ojos)",
        incorrectas: [
            "Altura del edificio",
            "Distancia principal"
        ]
    },
    {
        enunciado: "¿Qué es la 'distancia principal'?",
        correcta: "Distancia de V al Cuadro (VP)",
        incorrectas: [
            "Distancia al objeto",
            "Ancho del papel"
        ]
    },
    {
        enunciado: "¿Qué es el 'punto de fuga de diagonales'?",
        correcta: "En perspectiva frontal, son los puntos D (distancia), fugas de rectas a 45º",
        incorrectas: [
            "Fuga central",
            "No existe"
        ]
    },
    {
        enunciado: "¿Cómo se dibuja un damero (suelo)?",
        correcta: "Fugando las ortogonales a P y las diagonales a D para obtener la retícula",
        incorrectas: [
            "A mano",
            "Con paralelas"
        ]
    },
    {
        enunciado: "¿Qué es el 'método del arquitecto'?",
        correcta: "Usar planta y alzado externos, proyectando rayos visuales al cuadro",
        incorrectas: [
            "Contratar a uno",
            "Usar Autocad"
        ]
    },
    {
        enunciado: "¿Una circunferencia en el suelo se ve como...",
        correcta: "Una elipse (o hipérbola/parábola si es muy grande y corta la base)",
        incorrectas: [
            "Círculo",
            "Cuadrada"
        ]
    },
    {
        enunciado: "¿Qué es la 'restitución' perspectiva?",
        correcta: "Obtener las vistas diédricas a partir de la foto o dibujo cónico",
        incorrectas: [
            "Devolver el dibujo",
            "Colorear"
        ]
    },
    {
        enunciado: "¿Qué es la 'anamorfosis'?",
        correcta: "Imagen deformada que solo se ve correcta desde un punto de vista extremo",
        incorrectas: [
            "Enfermedad",
            "Dibujo normal"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva curvilínea'?",
        correcta: "Sobre superficie curva o gran angular (ojo de pez), líneas rectas se curvan",
        incorrectas: [
            "Mala perspectiva",
            "Cónica normal"
        ]
    },
    {
        enunciado: "¿Qué es la traza de una recta?",
        correcta: "Intersección con el cuadro (punto de inicio real)",
        incorrectas: [
            "Punto de fuga",
            "Final"
        ]
    },
    {
        enunciado: "¿Qué es la 'recta límite' de un plano?",
        correcta: "Recta de fuga del plano (lugar de fugas de sus rectas)",
        incorrectas: [
            "Línea de tierra",
            "Borde"
        ]
    },
    {
        enunciado: "¿Si acercamos V al cuadro, la perspectiva...",
        correcta: "Se deforma más (gran angular)",
        incorrectas: [
            "Se aplana",
            "Mejora"
        ]
    },
    {
        enunciado: "¿Si alejamos V del cuadro, la perspectiva...",
        correcta: "Se aplana (teleobjetivo) pareciéndose a axonométrica",
        incorrectas: [
            "Se deforma",
            "Se invierte"
        ]
    },
    {
        enunciado: "¿Qué es el 'punto de vista abatido' ((V))?",
        correcta: "V girado sobre el cuadro para construcciones gráficas",
        incorrectas: [
            "V cansado",
            "V en el suelo"
        ]
    },
    {
        enunciado: "¿Para dividir profundidad en partes iguales se usa...",
        correcta: "El punto métrico o diagonales de rectángulos (teorema de Tales en fuga)",
        incorrectas: [
            "Regla normal",
            "A ojo"
        ]
    },
    {
        enunciado: "¿Qué es la 'escala de alturas'?",
        correcta: "Línea vertical en el cuadro para medir cotas reales y fugarlas",
        incorrectas: [
            "Una escalera",
            "Un metro"
        ]
    },
    {
        enunciado: "¿Qué es el 'triángulo de base'?",
        correcta: "Triángulo V F1 F2 abatido que define la geometría interna",
        incorrectas: [
            "Base del objeto",
            "Cualquier triángulo"
        ]
    },
    {
        enunciado: "¿Puede un punto de fuga estar fuera del papel?",
        correcta: "Sí, es habitual; se usa el 'fugador' o plantillas",
        incorrectas: [
            "No, es error",
            "Nunca"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva interior'?",
        correcta: "Vista dentro de una habitación (suelo, techo, paredes)",
        incorrectas: [
            "Radiografía",
            "Mental"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva paralela'?",
        correcta: "Nombre confuso para axonométrica o cónica frontal (a veces)",
        incorrectas: [
            "Oblicua",
            "Aérea"
        ]
    },
    {
        enunciado: "¿Cómo fugan las rectas paralelas a un plano inclinado (rampa)?",
        correcta: "A una recta de fuga inclinada (horizonte accidental)",
        incorrectas: [
            "Al horizonte normal",
            "No fugan"
        ]
    },
    {
        enunciado: "¿Qué es el 'punto 1/2'?",
        correcta: "Punto métrico especial para duplicar profundidades por diagonales",
        incorrectas: [
            "Medio metro",
            "Centro"
        ]
    },
    {
        enunciado: "¿Qué son los 'planos visuales'?",
        correcta: "Planos que pasan por V",
        incorrectas: [
            "Gafas",
            "Cuadros"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva atmosférica'?",
        correcta: "Efecto pictórico de desvanecimiento con la distancia (Leonardo), no geométrico puro",
        incorrectas: [
            "Cónica aérea",
            "Lluvia"
        ]
    },
    {
        enunciado: "¿Cómo se dibuja un reflejo en agua?",
        correcta: "Imagen invertida bajo el suelo, fugando a los mismos puntos (si horizontal)",
        incorrectas: [
            "Sombra negra",
            "Lateral"
        ]
    }
];
