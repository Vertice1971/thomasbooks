var PREGUNTAS = [
    {
        enunciado: "¿Qué caracteriza al 'Sistema Axonométrico Oblicuo'?",
        correcta: "Los rayos proyectantes son oblicuos al plano del cuadro (proyección cilíndrica oblicua)",
        incorrectas: [
            "Los rayos son perpendiculares",
            "Es una proyección cónica"
        ]
    },
    {
        enunciado: "¿Qué es la 'Perspectiva Caballera'?",
        correcta: "Variante donde el plano del cuadro es paralelo a una cara del triedro (generalmente el plano frontal XZ); esa cara se proyecta en Verdadera Magnitud",
        incorrectas: [
            "Perspectiva isométrica",
            "Perspectiva militar"
        ]
    },
    {
        enunciado: "¿Qué eje sufre distorsión (reducción) en la caballera estándar?",
        correcta: "El eje de profundidad (Y), que es perpendicular al cuadro en la realidad pero se proyecta oblicuo",
        incorrectas: [
            "El eje X",
            "El eje Z (alturas)"
        ]
    },
    {
        enunciado: "¿Qué es el ángulo 'phi' (dirección de proyección)?",
        correcta: "El ángulo que forma el eje Y proyectado con el eje X horizontal (suele ser 135º, 45º, 150º...)",
        incorrectas: [
            "El ángulo de 90º",
            "La reducción"
        ]
    },
    {
        enunciado: "¿Qué es el 'coeficiente de reducción' (mu) en caballera?",
        correcta: "El factor aplicado al eje Y para simular profundidad (ej. 1/2, 2/3, 3/4); los ejes X y Z tienen coeficiente 1",
        incorrectas: [
            "Se aplica a todos los ejes",
            "Es siempre 1"
        ]
    },
    {
        enunciado: "¿Qué es la 'Perspectiva Militar' (Planometría)?",
        correcta: "Sistema oblicuo donde el plano del cuadro es paralelo al plano horizontal (XY); la planta se conserva en VM (ángulos 90º reales)",
        incorrectas: [
            "Perspectiva de soldados",
            "Caballera vertical"
        ]
    },
    {
        enunciado: "¿En perspectiva militar, qué eje se proyecta vertical?",
        correcta: "El eje Z (alturas); suele aplicarse reducción a Z para mejorar la proporción visual",
        incorrectas: [
            "El eje Y",
            "Ninguno"
        ]
    },
    {
        enunciado: "¿Cómo se representan los círculos en el plano frontal de una caballera?",
        correcta: "Como circunferencias perfectas (VM), ya que el plano es paralelo al cuadro",
        incorrectas: [
            "Como elipses",
            "Como óvalos"
        ]
    },
    {
        enunciado: "¿Cómo se representan los círculos en los planos horizontal (planta) y perfil en caballera?",
        correcta: "Como elipses, ya que los ejes que los contienen forman un ángulo oblicuo y uno tiene reducción",
        incorrectas: [
            "Como círculos",
            "Como rectángulos"
        ]
    },
    {
        enunciado: "¿Qué es la 'Caballera Normalizada'?",
        correcta: "Ángulo de 135º para el eje Y y coeficiente de reducción 1/2",
        incorrectas: [
            "Ángulo 90 y reducción 1",
            "Cualquiera"
        ]
    },
    {
        enunciado: "¿Qué es la perspectiva 'Cabinet'?",
        correcta: "Nombre inglés para la caballera con reducción 1/2 (usada en mueblería)",
        incorrectas: [
            "Perspectiva de gabinete",
            "Isométrica"
        ]
    },
    {
        enunciado: "¿Qué es la perspectiva 'Cavalier' (sin reducción)?",
        correcta: "Reducción 1 en el eje Y; produce una imagen muy deformada y alargada en profundidad",
        incorrectas: [
            "La mejor perspectiva",
            "Militar"
        ]
    },
    {
        enunciado: "¿Cómo se sombrea en caballera?",
        correcta: "Igual que en otros sistemas: rayos paralelos, buscando tangencia y corte; la sombra de una vertical en el suelo sigue la dirección de la luz",
        incorrectas: [
            "No se sombrea",
            "Sombreado difuso"
        ]
    },
    {
        enunciado: "¿Qué ventaja tiene la caballera?",
        correcta: "Facilidad de dibujo (una cara real) y posibilidad de medir directamente sobre X y Z",
        incorrectas: [
            "Realismo fotográfico",
            "Visión 360"
        ]
    },
    {
        enunciado: "¿Para qué sirve el 'abatimiento' en caballera?",
        correcta: "Para dibujar figuras complejas en las caras deformadas (XZ o YZ) llevándolas a un plano frontal auxiliar y desabatiendo (afinidad)",
        incorrectas: [
            "Para nada",
            "Para borrar"
        ]
    },
    {
        enunciado: "¿En perspectiva militar, las circunferencias de la planta son...",
        correcta: "Círculos perfectos (si no hay reducción diferencial en X e Y)",
        incorrectas: [
            "Elipses",
            "Óvalos"
        ]
    },
    {
        enunciado: "¿Cuál es la aplicación principal de la perspectiva militar?",
        correcta: "Arquitectura y urbanismo, para mostrar distribución de plantas y volúmenes de edificios (vista aérea)",
        incorrectas: [
            "Piezas mecánicas",
            "Retratos"
        ]
    },
    {
        enunciado: "¿Qué es el 'eje fugante'?",
        correcta: "El eje que representa la profundidad (Y en caballera, Z en militar a veces visualmente)",
        incorrectas: [
            "El eje X",
            "El que desaparece"
        ]
    },
    {
        enunciado: "¿Cómo se mide en el eje oblicuo Y?",
        correcta: "Multiplicando la medida real por el coeficiente de reducción (o usando escala gráfica construida)",
        incorrectas: [
            "Midiendo directamente con la regla",
            "A ojo"
        ]
    },
    {
        enunciado: "¿La intersección de cilindros en caballera...",
        correcta: "Si uno es frontal (círculo) y otro lateral, se buscan puntos de corte de generatrices",
        incorrectas: [
            "Es fácil",
            "No se hace"
        ]
    },
    {
        enunciado: "¿Cómo se dibuja una esfera en caballera (riguroso)?",
        correcta: "Su contorno es una elipse (no un círculo), desplazada del centro; solo es círculo en proyección ortogonal",
        incorrectas: [
            "Siempre círculo",
            "Cuadrado"
        ]
    },
    {
        enunciado: "¿La perspectiva caballera conserva el paralelismo?",
        correcta: "Sí, es una proyección cilíndrica (conserva paralelismo y razón simple)",
        incorrectas: [
            "No, las líneas fugan",
            "Solo a veces"
        ]
    },
    {
        enunciado: "¿Qué es un 'Bloque diagrama'?",
        correcta: "Representación geológica en perspectiva (militar o caballera) de un terreno y sus cortes",
        incorrectas: [
            "Un ladrillo",
            "Un esquema eléctrico"
        ]
    },
    {
        enunciado: "¿Se pueden usar coordenadas en caballera?",
        correcta: "Sí, X y Z reales, Y reducida; método fundamental para situar puntos",
        incorrectas: [
            "No, solo gráfico",
            "Solo polares"
        ]
    },
    {
        enunciado: "¿Qué ángulos forman los ejes X e Y en militar?",
        correcta: "90º reales entre sí, pero girados respecto al papel (ej. 30º-60º o 45º-45º respecto a la horizontal)",
        incorrectas: [
            "120 grados",
            "0 y 90"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva planimétrica'?",
        correcta: "Sinónimo de Militar (preserva la planta)",
        incorrectas: [
            "Plana",
            "Cónica"
        ]
    },
    {
        enunciado: "¿Cómo se traza una elipse en la cara YZ (perfil)?",
        correcta: "Inscribiéndola en el romboide proyección del cuadrado (por puntos, afinidad o 8 puntos)",
        incorrectas: [
            "Con compás",
            "A mano"
        ]
    },
    {
        enunciado: "¿Qué distorsión visual tiene la caballera?",
        correcta: "Efecto de 'apertura' o divergencia hacia el fondo si no se reduce Y (parece que se agranda)",
        incorrectas: [
            "Se ve borrosa",
            "Se hace pequeña"
        ]
    },
    {
        enunciado: "¿Cómo se halla la sección de una pirámide?",
        correcta: "Igual que axonométrico: intersección de aristas; la ventaja es poder medir alturas reales en Z directamente",
        incorrectas: [
            "Cortando",
            "Imposible"
        ]
    },
    {
        enunciado: "¿Qué es la 'proyección oblicua'?",
        correcta: "Fundamento geométrico donde los rayos forman un ángulo alfa != 90º con el plano",
        incorrectas: [
            "Proyección ortogonal",
            "Cónica"
        ]
    },
    {
        enunciado: "¿Para qué se usa un ángulo de 45º en el eje Y?",
        correcta: "Es cómodo porque coincide con la diagonal de los cuadros de la escuadra/papel cuadriculado",
        incorrectas: [
            "Es obligatorio",
            "Por estética"
        ]
    },
    {
        enunciado: "¿Qué es la 'escala de profundidad'?",
        correcta: "La escala gráfica aplicada al eje Y",
        incorrectas: [
            "Escala de buceo",
            "Eje Z"
        ]
    },
    {
        enunciado: "¿Cómo se sombrea el interior de un hueco?",
        correcta: "Trazando el rayo por el borde y viendo donde cae dentro (sombra arrojada propia interna)",
        incorrectas: [
            "Pintando todo negro",
            "No tiene sombra"
        ]
    },
    {
        enunciado: "¿Qué es el 'plano de referencia'?",
        correcta: "El plano frontal XZ (cuadro) en caballera",
        incorrectas: [
            "El suelo",
            "El techo"
        ]
    },
    {
        enunciado: "¿La perspectiva caballera es estandarizada por norma?",
        correcta: "Sí, UNE 1032 antigua definía la caballera normalizada",
        incorrectas: [
            "No, es libre",
            "Solo en arte"
        ]
    },
    {
        enunciado: "¿Qué es un 'perfil' en caballera?",
        correcta: "Corte vertical paralelo al plano YZ",
        incorrectas: [
            "Una línea",
            "Un contorno"
        ]
    },
    {
        enunciado: "¿Cómo se dibuja una hélice en caballera?",
        correcta: "Puntos sobre cilindro; en la vista frontal es una sinusoide, en planta un círculo (o elipse si es militar)",
        incorrectas: [
            "Una recta",
            "Imposible"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva a vista de pájaro' (militar)?",
        correcta: "Muy alto el punto de vista, se ve mucho la cubierta/planta",
        incorrectas: [
            "Desde abajo",
            "Frontal"
        ]
    },
    {
        enunciado: "¿Se usa la caballera hoy en día?",
        correcta: "Menos que la isometría en ingeniería, pero útil en pizarras y explicaciones rápidas por su sencillez",
        incorrectas: [
            "Nunca",
            "Siempre"
        ]
    },
    {
        enunciado: "¿Qué es la 'proyección clinogonal'?",
        correcta: "Nombre académico para la proyección oblicua (del griego klinein, inclinar)",
        incorrectas: [
            "Ortogonal",
            "Cónica"
        ]
    }
];
