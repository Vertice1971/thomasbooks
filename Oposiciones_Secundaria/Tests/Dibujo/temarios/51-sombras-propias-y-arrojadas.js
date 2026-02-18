var PREGUNTAS = [
    {
        enunciado: "¿Qué es la 'sombra propia'?",
        correcta: "Parte del objeto que no recibe luz directamente porque su propia forma se lo impide (zona oscura en el objeto)",
        incorrectas: [
            "Sombra en el suelo",
            "Sombra de otro objeto"
        ]
    },
    {
        enunciado: "¿Qué es la 'sombra arrojada'?",
        correcta: "Sombra que un objeto proyecta sobre una superficie (suelo, pared u otro objeto) al interceptar los rayos de luz",
        incorrectas: [
            "Sombra interna",
            "Sombra propia"
        ]
    },
    {
        enunciado: "¿Qué es la 'separatriz'?",
        correcta: "Línea que separa la zona de luz y la zona de sombra propia en el objeto (puntos de tangencia de rayos)",
        incorrectas: [
            "Línea de horizonte",
            "Eje de simetría"
        ]
    },
    {
        enunciado: "¿Qué tipo de luz produce rayos paralelos (cilíndrica)?",
        correcta: "Foco impropio (Sol)",
        incorrectas: [
            "Foco propio (Bombilla)",
            "Láser divergente"
        ]
    },
    {
        enunciado: "¿Qué tipo de luz produce rayos divergentes (cónica)?",
        correcta: "Foco propio (puntual, artificial)",
        incorrectas: [
            "Sol",
            "Luz paralela"
        ]
    },
    {
        enunciado: "¿En diédrico, la dirección estándar de la luz es...",
        correcta: "La diagonal principal del cubo (45º con LT en planta y alzado, subiendo de izd a dcha)",
        incorrectas: [
            "Vertical",
            "Horizontal"
        ]
    },
    {
        enunciado: "¿La sombra de un punto sobre un plano es...",
        correcta: "La traza del rayo que pasa por el punto",
        incorrectas: [
            "Un círculo",
            "Una recta"
        ]
    },
    {
        enunciado: "¿Qué es el 'quiebro' de la sombra?",
        correcta: "El cambio de dirección que sufre la sombra de una línea recta cuando pasa de proyectarse en un plano (suelo) a otro (pared)",
        incorrectas: [
            "Una rotura",
            "El final de la sombra"
        ]
    },
    {
        enunciado: "¿La sombra de una recta vertical sobre el suelo horizontal es...",
        correcta: "Una recta que sigue la dirección de la proyección horizontal de la luz",
        incorrectas: [
            "Un punto",
            "Una curva"
        ]
    },
    {
        enunciado: "¿La sombra de una recta paralela a la dirección de la luz es...",
        correcta: "Un punto (toda la recta se proyecta en su traza)",
        incorrectas: [
            "Una recta infinita",
            "Un segmento"
        ]
    },
    {
        enunciado: "¿En cónica, la sombra del sol (foco impropio 'atrás') fuga a...",
        correcta: "Un punto de fuga de sombras en el horizonte o sobre él (si el sol está alto)",
        incorrectas: [
            "Al centro",
            "No fuga"
        ]
    },
    {
        enunciado: "¿Qué es el 'cilindro de sombra'?",
        correcta: "Superficie formada por los rayos tangentes al objeto; su intersección con las superficies receptoras forma el contorno de la sombra arrojada",
        incorrectas: [
            "Un tubo negro",
            "El objeto"
        ]
    },
    {
        enunciado: "¿La sombra arrojada de una esfera sobre un plano con luz paralela es...",
        correcta: "Una elipse",
        incorrectas: [
            "Un círculo",
            "Una parábola"
        ]
    },
    {
        enunciado: "¿Qué es la 'sombra autoarrojada'?",
        correcta: "Sombra que una parte del objeto arroja sobre otra parte del mismo objeto",
        incorrectas: [
            "Sombra propia",
            "Reflejo"
        ]
    },
    {
        enunciado: "¿Qué es la 'penumbra'?",
        correcta: "Zona de transición parcial de luz producida por una fuente extensa (no puntual)",
        incorrectas: [
            "Oscuridad total",
            "Luz brillante"
        ]
    },
    {
        enunciado: "¿Para hallar la sombra de un cuerpo complejo de divide en...",
        correcta: "Vértices y aristas clave para hallar sus sombras puntuales y unirlas",
        incorrectas: [
            "Mitades",
            "Colores"
        ]
    },
    {
        enunciado: "¿Qué es un 'plano de sombra'?",
        correcta: "Plano que contiene al foco de luz y a una arista del objeto (se usa para intersecciones)",
        incorrectas: [
            "Un plano negro",
            "El suelo"
        ]
    },
    {
        enunciado: "¿La sombra de una recta horizontal sobre una pared vertical frontal es...",
        correcta: "Una recta horizontal (paralela a la original)",
        incorrectas: [
            "Inclinada",
            "Vertical"
        ]
    },
    {
        enunciado: "¿Si la sombra 'vuela' (objeto flotante), la sombra empieza...",
        correcta: "Separada de la base del objeto",
        incorrectas: [
            "Pegada",
            "No hay sombra"
        ]
    },
    {
        enunciado: "¿Qué es el 'brillo'?",
        correcta: "Reflejo especular de la fuente de luz en superficies pulidas",
        incorrectas: [
            "La sombra más clara",
            "El color blanco"
        ]
    },
    {
        enunciado: "¿Qué es el 'terminador'?",
        correcta: "Línea de separación luz-sombra en astronomía (separatriz)",
        incorrectas: [
            "El fin del mundo",
            "Un robot"
        ]
    },
    {
        enunciado: "¿Cómo se halla la sombra en perspectiva caballera?",
        correcta: "Intersección de rayos paralelos oblicuos con los planos coordenados",
        incorrectas: [
            "Proyección ortogonal",
            "A ojo"
        ]
    },
    {
        enunciado: "¿Qué es la sombra virtual?",
        correcta: "Sombra que caería 'detrás' de un plano opaco o 'bajo' el suelo (imaginaria para construcciones)",
        incorrectas: [
            "Sombra digital",
            "Reflejo"
        ]
    },
    {
        enunciado: "¿En sistema de planos acotados, la sombra sobre el terreno se halla...",
        correcta: "Intersecando la recta de luz que pasa por el punto con las curvas de nivel del terreno (misma cota)",
        incorrectas: [
            "No se puede",
            "Como en diédrico"
        ]
    },
    {
        enunciado: "¿Qué es la 'zona de luz refleja'?",
        correcta: "Iluminación indirecta en la zona de sombra propia proveniente del rebote de luz en el entorno",
        incorrectas: [
            "Luz directa",
            "Sombra negra"
        ]
    },
    {
        enunciado: "¿La sombra de un círculo paralelo al plano de proyección (luz //) es...",
        correcta: "Un círculo de igual tamaño",
        incorrectas: [
            "Elipse",
            "Punto"
        ]
    },
    {
        enunciado: "¿Qué es 'contraluz'?",
        correcta: "Fuente de luz detrás del objeto; vemos la cara en sombra propia",
        incorrectas: [
            "Luz frontal",
            "Sin luz"
        ]
    },
    {
        enunciado: "¿Qué es la 'intensidad' del sombreado?",
        correcta: "Valor tonal (gris) que indica la cantidad de luz; depende del ángulo de incidencia",
        incorrectas: [
            "Tamaño",
            "Color"
        ]
    },
    {
        enunciado: "¿Cómo se sombrea un cono?",
        correcta: "Generatrices de tangencia (separatriz) y degradado hacia la luz y el núcleo",
        incorrectas: [
            "Plano",
            "A rayas verticales"
        ]
    },
    {
        enunciado: "¿En perspectiva cónica, si el sol está lateral (90º), las sombras son...",
        correcta: "Paralelas al horizonte (fugan al infinito lateral)",
        incorrectas: [
            "Verticales",
            "Al punto P"
        ]
    },
    {
        enunciado: "¿Qué es la 'sombra de la línea de tierra'?",
        correcta: "Concepto auxiliar para determinar cuando la sombra pasa de H a V",
        incorrectas: [
            "Una línea real",
            "Nada"
        ]
    },
    {
        enunciado: "¿Qué es el 'Valor' en dibujo artístico?",
        correcta: "Grado de claridad u oscuridad de un tono",
        incorrectas: [
            "Precio",
            "Color"
        ]
    },
    {
        enunciado: "¿Qué es el 'núcleo' de sombra?",
        correcta: "La parte más oscura",
        incorrectas: [
            "El centro",
            "La luz"
        ]
    },
    {
        enunciado: "¿Cómo afecta la distancia de la luz puntual al tamaño de la sombra?",
        correcta: "A menor distancia (más cerca), la sombra se hace más grande (divergencia)",
        incorrectas: [
            "Se hace pequeña",
            "Igual"
        ]
    },
    {
        enunciado: "¿Qué es 'claroscuro'?",
        correcta: "Técnica de modelado del volumen mediante luces y sombras contrastadas",
        incorrectas: [
            "Dibujo lineal",
            "Acuarela"
        ]
    },
    {
        enunciado: "¿La sombra de una recta inclinada sobre el suelo es...",
        correcta: "Una recta (segmento) uniendo la traza de la recta y la sombra de su cabeza",
        incorrectas: [
            "Una curva",
            "Un punto"
        ]
    },
    {
        enunciado: "¿Se sombrean las aristas?",
        correcta: "No, se sombrean las superficies",
        incorrectas: [
            "Sí",
            "A veces"
        ]
    },
    {
        enunciado: "¿Qué es la 'sombra de contacto' (oclusión)?",
        correcta: "Zona muy oscura donde el objeto toca el suelo",
        incorrectas: [
            "Sombra arrojada lejos",
            "Luz"
        ]
    },
    {
        enunciado: "¿En axonométrico, con luz frontal-izquierda 45º, la sombra va...",
        correcta: "Hacia atrás-derecha",
        incorrectas: [
            "Hacia delante",
            "Vertical"
        ]
    },
    {
        enunciado: "¿Qué es la 'proyección de sombra' inversa?",
        correcta: "Deducir la posición de la luz a partir de la sombra dada",
        incorrectas: [
            "Borrar sombra",
            "Iluminar"
        ]
    }
];
