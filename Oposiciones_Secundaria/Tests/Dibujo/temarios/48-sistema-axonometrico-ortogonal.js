var PREGUNTAS = [
    {
        enunciado: "¿Qué caracteriza al sistema axonométrico 'Ortogonal'?",
        correcta: "Los rayos proyectantes son perpendiculares al plano del cuadro (axonométrico)",
        incorrectas: [
            "Los rayos son oblicuos",
            "El plano del cuadro es vertical"
        ]
    },
    {
        enunciado: "¿Qué es el 'Triedro Trirrectángulo'?",
        correcta: "El sistema de referencia formado por tres planos (XY, XZ, YZ) perpendiculares entre sí en el espacio",
        incorrectas: [
            "Un triángulo rectángulo",
            "Tres rectas paralelas"
        ]
    },
    {
        enunciado: "¿Qué es el 'Triángulo de Trazas'?",
        correcta: "La intersección del plano del cuadro con los tres planos del triedro (coordenados); sus vértices son las trazas de los ejes",
        incorrectas: [
            "Un triángulo equilátero siempre",
            "El triángulo de visión"
        ]
    },
    {
        enunciado: "¿Qué es la perspectiva 'Isométrica'?",
        correcta: "Aquella donde los tres ejes forman ángulos iguales con el cuadro (y entre sí 120º en proyección); el coeficiente de reducción es el mismo para los tres (0.816)",
        incorrectas: [
            "Dos ejes iguales",
            "Tres ángulos distintos"
        ]
    },
    {
        enunciado: "¿Qué es la perspectiva 'Dimétrica'?",
        correcta: "Aquella donde dos ejes forman ángulos iguales con el cuadro (dos coeficientes iguales) y el tercero desigual",
        incorrectas: [
            "Dos dimensiones",
            "Todo igual"
        ]
    },
    {
        enunciado: "¿Qué es la perspectiva 'Trimétrica'?",
        correcta: "Aquella donde los tres ejes forman ángulos distintos con el cuadro (tres coeficientes de reducción distintos)",
        incorrectas: [
            "Tres metros",
            "Tres ejes paralelos"
        ]
    },
    {
        enunciado: "¿Cuál es la relación fundamental entre los coeficientes de reducción (Teorema de la esfera)?",
        correcta: "La suma de los cuadrados de los coeficientes es igual a 2 (Cx² + Cy² + Cz² = 2)",
        incorrectas: [
            "Suman 1",
            "Suman 3"
        ]
    },
    {
        enunciado: "¿El 'Ortocentro' del triángulo de trazas coincide con...?",
        correcta: "La proyección del origen de coordenadas (O) sobre el cuadro",
        incorrectas: [
            "El baricentro",
            "El incentro"
        ]
    },
    {
        enunciado: "¿Cómo se abaten los planos coordenados?",
        correcta: "Usando los lados del triángulo de trazas como charnelas y el arco capaz de 90º desde el origen proyectado",
        incorrectas: [
            "Girando el papel",
            "No se pueden abatir"
        ]
    },
    {
        enunciado: "¿Qué son las 'escalas axonométricas'?",
        correcta: "Las escalas gráficas construidas sobre los ejes proyectados teniendo en cuenta su reducción respectiva",
        incorrectas: [
            "Reglas normales",
            "Escalas de ampliación"
        ]
    },
    {
        enunciado: "¿En isometría, cómo se dibuja una circunferencia en un plano coordenado?",
        correcta: "Como una elipse cuyo eje mayor es perpendicular al tercer eje (el que no está en el plano) y mide el diámetro real",
        incorrectas: [
            "Un círculo",
            "Un óvalo cualquiera"
        ]
    },
    {
        enunciado: "¿Qué es el 'Dibujo Isométrico' (frente a Perspectiva)?",
        correcta: "Convenio de dibujo donde no se aplica reducción (escala 1:1 en ejes), la figura sale más grande (aprox 1.22x) pero es más fácil medir",
        incorrectas: [
            "Es lo mismo",
            "Es más pequeño"
        ]
    },
    {
        enunciado: "¿Cómo son los ejes en la perspectiva trimétrica?",
        correcta: "Sus ángulos proyectados son todos distintos (ninguno es 120º ni igual a otro)",
        incorrectas: [
            "A 90 grados",
            "Dos iguales"
        ]
    },
    {
        enunciado: "¿Para qué sirve el abatimiento del plano XY?",
        correcta: "Para dibujar la planta real del objeto y luego desabatirla (proyectarla) a la perspectiva",
        incorrectas: [
            "Para nada",
            "Para ver el alzado"
        ]
    },
    {
        enunciado: "¿Qué es el 'método del triángulo de escalas'?",
        correcta: "Construcción gráfica al margen para obtener rápidamente las magnitudes reducidas de los 3 ejes",
        incorrectas: [
            "Una escuadra",
            "Un escalímetro oficial"
        ]
    },
    {
        enunciado: "¿Qué ejes se usan en la normalización DIN 5 (Dimétrica)?",
        correcta: "Ejes a 7º y 42º respecto a la horizontal; reducción 1/2 en el eje Y (profundidad) y 1 en X y Z",
        incorrectas: [
            "120 grados",
            "30 y 60 grados"
        ]
    },
    {
        enunciado: "¿La esfera se representa en axonometría ortogonal como...?",
        correcta: "Un círculo de radio real R (contorno aparente), cuyo centro es la proyección del centro de la esfera",
        incorrectas: [
            "Una elipse",
            "Depende de la reducción"
        ]
    },
    {
        enunciado: "¿Cómo se sabe si una terna de ángulos de ejes es posible?",
        correcta: "Los tres ángulos deben ser obtusos (suman 360, cada uno > 90º)",
        incorrectas: [
            "Si suman 180",
            "Si son agudos"
        ]
    },
    {
        enunciado: "¿Qué es el 'coeficiente de reducción'?",
        correcta: "El coseno del ángulo que forma el eje real con el plano del cuadro",
        incorrectas: [
            "El seno del ángulo",
            "La tangente"
        ]
    },
    {
        enunciado: "¿Cómo se trazan paralelas en axonométrico?",
        correcta: "Se conserva el paralelismo: rectas paralelas en el espacio son paralelas en el dibujo",
        incorrectas: [
            "Fugan a un punto",
            "Se curvan"
        ]
    },
    {
        enunciado: "¿Qué es una 'línea no isométrica'?",
        correcta: "Línea oblicua respecto a los ejes; no se puede medir directamente con la escala del eje (hay que usar coordenadas de extremos)",
        incorrectas: [
            "Línea curva",
            "Línea invisible"
        ]
    },
    {
        enunciado: "¿Qué ventaja tiene la isometría?",
        correcta: "Permite usar la misma escala en las tres direcciones principales",
        incorrectas: [
            "Es la más realista",
            "No tiene reducción"
        ]
    },
    {
        enunciado: "¿Qué ventaja tiene la dimétrica o trimétrica?",
        correcta: "Permite enfatizar una cara o vista del objeto (menos deformada) o dar un aspecto más natural",
        incorrectas: [
            "Es más fácil de dibujar",
            "No tiene normas"
        ]
    },
    {
        enunciado: "¿Cómo hallar la intersección de plano y recta en axonométrico?",
        correcta: "Conteniendo la recta en un plano proyectante (vertical paralelo a Z, por ejemplo) y hallando la intersección de trazas",
        incorrectas: [
            "Mirando el corte",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva caballera' (contraste)?",
        correcta: "Sistema oblicuo, no ortogonal; una cara se ve en VM (frontal), a diferencia de la axonometría ortogonal donde todas se deforman",
        incorrectas: [
            "Un tipo de isometría",
            "Igual que la trimétrica"
        ]
    },
    {
        enunciado: "¿Cual es el valor exacto de la reducción isométrica?",
        correcta: "Raíz de (2/3) ≈ 0.816",
        incorrectas: [
            "0.5",
            "0.707"
        ]
    },
    {
        enunciado: "¿Qué son las 'líneas de referencia'?",
        correcta: "Líneas auxiliares (generalmente verticales y paralelas a Y/X) que conectan el punto espacial con su proyección en el plano XY (suelo)",
        incorrectas: [
            "Líneas de adorno",
            "Bordes del papel"
        ]
    },
    {
        enunciado: "¿Si los ejes proyectados forman ángulos de 100º, 130º y 130º, es...?",
        correcta: "Dimétrica (dos ángulos iguales)",
        incorrectas: [
            "Isométrica",
            "Trimétrica"
        ]
    },
    {
        enunciado: "¿Si los ejes forman 120º, 120º, 120º, es...?",
        correcta: "Isométrica",
        incorrectas: [
            "Dimétrica",
            "Caballera"
        ]
    },
    {
        enunciado: "¿Cómo se representan las aristas ocultas?",
        correcta: "Con líneas discontinuas (trazos) si son necesarias para la comprensión; a menudo se omiten en perspectivas de presentación",
        incorrectas: [
            "No se dibujan nunca",
            "Con línea continua fina"
        ]
    },
    {
        enunciado: "¿Qué es el 'cubo de referencia'?",
        correcta: "Un cubo unidad dibujado en los ejes para visualizar la deformación y las escalas",
        incorrectas: [
            "Un dado",
            "Una caja"
        ]
    },
    {
        enunciado: "¿El eje Z suele representar...?",
        correcta: "La altura vertical",
        incorrectas: [
            "La profundidad",
            "La anchura"
        ]
    },
    {
        enunciado: "¿Cómo se mide un segmento oblicuo cualquiera?",
        correcta: "Abatiendo el plano proyectante del segmento (o el plano que lo contiene) o por el método del triángulo rectángulo de cotas",
        incorrectas: [
            "Con la regla sobre la línea",
            "Sumando a+b"
        ]
    },
    {
        enunciado: "¿Para dibujar un hexágono regular horizontal en isométrico se usa...?",
        correcta: "Caja capaz rectangular o coordenadas de vértices (deformado)",
        incorrectas: [
            "Compás directamente",
            "Plantilla de círculos"
        ]
    },
    {
        enunciado: "¿La 'Isométrica' es la axonometría que proporciona...?",
        correcta: "La visión más equilibrada de las tres caras, pero también la más simétrica y a veces monótona",
        incorrectas: [
            "La visión más realista",
            "La visión frontal"
        ]
    },
    {
        enunciado: "¿Qué es el 'escorzo' en axonométrico?",
        correcta: "La reducción aparente de longitud de las líneas que apuntan hacia el espectador (profundidad)",
        incorrectas: [
            "Un error",
            "Una curva"
        ]
    },
    {
        enunciado: "¿Se pueden usar 'plantillas de elipses' isométricas?",
        correcta: "Sí, existen plantillas con elipses de 35º16' (proyección del círculo) para dibujar rápidamente círculos isométricos",
        incorrectas: [
            "No, está prohibido",
            "Solo compás"
        ]
    },
    {
        enunciado: "¿Qué es el 'óvalo isométrico'?",
        correcta: "Aproximación de la elipse mediante 4 arcos de circunferencia (centros en vértices del rombo y puntos medios)",
        incorrectas: [
            "Una elipse exacta",
            "Un huevo"
        ]
    },
    {
        enunciado: "¿El plano del cuadro corta a los ejes en puntos A, B, C que definen...?",
        correcta: "El triángulo de trazas",
        incorrectas: [
            "El origen",
            "El objeto"
        ]
    },
    {
        enunciado: "¿En sistema axonométrico, el origen O se proyecta...?",
        correcta: "Dentro del triángulo de trazas (ortocentro en ortogonal)",
        incorrectas: [
            "Fuera",
            "En el infinito"
        ]
    }
];
