var PREGUNTAS = [
    {
        enunciado: "¿Qué es un polígono convexo?",
        correcta: "Todos sus ángulos interiores son menores de 180º; cualquier recta lo corta en máximo 2 puntos",
        incorrectas: [
            "Tiene algún ángulo mayor de 180º",
            "Tiene lados curvos"
        ]
    },
    {
        enunciado: "¿Qué es un polígono cóncavo?",
        correcta: "Tiene al menos un ángulo interior mayor de 180º (entrante); una recta puede cortarlo en más de 2 puntos",
        incorrectas: [
            "Un polígono cerrado",
            "Un polígono regular"
        ]
    },
    {
        enunciado: "¿Cuánto suman los ángulos interiores de un polígono de n lados?",
        correcta: "(n-2) · 180º",
        incorrectas: [
            "n · 180º",
            "360º siempre"
        ]
    },
    {
        enunciado: "¿Qué es el 'Baricentro' de un triángulo?",
        correcta: "Punto de corte de las medianas (centro de gravedad)",
        incorrectas: [
            "Corte de alturas",
            "Corte de bisectrices"
        ]
    },
    {
        enunciado: "¿Qué es el 'Ortocentro'?",
        correcta: "Punto de corte de las alturas",
        incorrectas: [
            "Corte de mediatrices",
            "Centro del círculo inscrito"
        ]
    },
    {
        enunciado: "¿Qué es el 'Incentro'?",
        correcta: "Punto de corte de las bisectrices (centro de la circunferencia inscrita)",
        incorrectas: [
            "Centro de gravedad",
            "Corte de medianas"
        ]
    },
    {
        enunciado: "¿Qué es el 'Circuncentro'?",
        correcta: "Punto de corte de las mediatrices (centro de la circunferencia circunscrita)",
        incorrectas: [
            "Corte de alturas",
            "Vértice opuesto"
        ]
    },
    {
        enunciado: "¿Qué es la 'Recta de Euler'?",
        correcta: "Recta que contiene al Ortocentro, Baricentro y Circuncentro",
        incorrectas: [
            "Recta de la base",
            "Bisectriz del ángulo recto"
        ]
    },
    {
        enunciado: "¿Cuál es el 'Triángulo Órtico'?",
        correcta: "El triángulo formado uniendo los pies de las tres alturas",
        incorrectas: [
            "Un triángulo rectángulo",
            "El triángulo mediano"
        ]
    },
    {
        enunciado: "¿Qué es un 'Cuadrilátero inscriptible' (cíclico)?",
        correcta: "Aquel cuyos vértices están en una circunferencia; sus ángulos opuestos suman 180º",
        incorrectas: [
            "Cualquier cuadrado",
            "Un rombo"
        ]
    },
    {
        enunciado: "¿Qué es un 'Trapecio isósceles'?",
        correcta: "Trapecio con los lados no paralelos iguales y ángulos base iguales; es inscriptible",
        incorrectas: [
            "Trapecio con tres lados iguales",
            "Trapecio rectángulo"
        ]
    },
    {
        enunciado: "¿Cómo se construye un pentágono regular dado el lado?",
        correcta: "Método de la sección áurea del lado para hallar la diagonal y vértice superior",
        incorrectas: [
            "Método general",
            "Con escuadra 45º"
        ]
    },
    {
        enunciado: "¿Qué es el 'método general' para polígonos inscritos?",
        correcta: "División del diámetro en n partes y proyección con arcos desde los extremos (método aproximado)",
        incorrectas: [
            "Método exacto",
            "Método de Gauss"
        ]
    },
    {
        enunciado: "¿Qué relación hay entre lado del hexágono y radio circunscrito?",
        correcta: "Son iguales (l = R)",
        incorrectas: [
            "l = R/2",
            "l = R · raíz(2)"
        ]
    },
    {
        enunciado: "¿Qué es un polígono estrellado?",
        correcta: "Se obtiene uniendo vértices de un polígono regular de p lados con un paso q (si p y q son primos entre sí)",
        incorrectas: [
            "Una estrella dibujada a mano",
            "Un polígono cóncavo cualquiera"
        ]
    },
    {
        enunciado: "¿Existe el polígono estrellado del hexágono (paso 2)?",
        correcta: "No como línea continua única; se forman dos triángulos (Estrella de David, falso estrellado)",
        incorrectas: [
            "Sí, el de 6 puntas continuo",
            "No existe nada"
        ]
    },
    {
        enunciado: "¿Qué es la 'apotema'?",
        correcta: "Distancia del centro al punto medio del lado (radio de la circunferencia inscrita)",
        incorrectas: [
            "El lado",
            "La diagonal"
        ]
    },
    {
        enunciado: "¿El área de un polígono regular es...?",
        correcta: "(Perímetro · Apotema) / 2",
        incorrectas: [
            "Lado al cuadrado",
            "Perímetro · Radio"
        ]
    },
    {
        enunciado: "¿Qué es un 'cometa' (deltoide)?",
        correcta: "Cuadrilátero con dos pares de lados contiguos iguales; diagonales perpendiculares, una es bisectriz de la otra",
        incorrectas: [
            "Un rombo",
            "Un trapecio"
        ]
    },
    {
        enunciado: "¿Qué es el 'Teorema de Pitágoras' generalizado (Coseno)?",
        correcta: "a² = b² + c² - 2bc·cos(A)",
        incorrectas: [
            "a + b = c",
            "a = b · c"
        ]
    },
    {
        enunciado: "¿Qué es la 'trisección' del lado del triángulo?",
        correcta: "Dividir el lado en 3 partes; uniendo con el vértice opuesto se obtienen 3 triángulos de igual área",
        incorrectas: [
            "Dividir ángulos",
            "Cortar el triángulo"
        ]
    },
    {
        enunciado: "¿Cómo construir un decágono regular dado el radio?",
        correcta: "El lado del decágono es la sección áurea del radio",
        incorrectas: [
            "El lado es mitad del radio",
            "El lado es R raíz(3)"
        ]
    },
    {
        enunciado: "¿Qué es un 'Romboide'?",
        correcta: "Paralelogramo de lados contiguos desiguales y ángulos oblicuos (no rectos)",
        incorrectas: [
            "Un rombo pequeño",
            "Un rectángulo"
        ]
    },
    {
        enunciado: "¿Qué propiedades tienen las diagonales del rombo?",
        correcta: "Son perpendiculares, se cortan en el punto medio y son bisectrices de los ángulos",
        incorrectas: [
            "Son iguales",
            "Son paralelas"
        ]
    },
    {
        enunciado: "¿Qué es un polígono 'equiángulo'?",
        correcta: "Tiene todos los ángulos iguales (ej. rectángulo), pero no necesariamente los lados",
        incorrectas: [
            "Tiene todos los lados iguales",
            "Es regular siempre"
        ]
    },
    {
        enunciado: "¿Qué es un polígono 'equilátero'?",
        correcta: "Tiene todos los lados iguales (ej. rombo), pero no necesariamente los ángulos",
        incorrectas: [
            "Tiene ángulos iguales",
            "Es regular siempre"
        ]
    },
    {
        enunciado: "¿El heptágono regular tiene construcción exacta?",
        correcta: "No con regla y compás clásica (solo aproximada o por métodos neusis)",
        incorrectas: [
            "Sí, muy fácil",
            "No existe"
        ]
    },
    {
        enunciado: "¿El polígono de 17 lados (Heptadecágono) es construible?",
        correcta: "Sí, demostrado por Gauss (regla y compás)",
        incorrectas: [
            "No",
            "Solo con ordenador"
        ]
    },
    {
        enunciado: "¿Qué es la 'triangulación' de un polígono?",
        correcta: "Dividirlo en triángulos mediante diagonales desde un vértice (n-2 triángulos) para calcular área o construirlo",
        incorrectas: [
            "Hacerlo triangular",
            "Borrar lados"
        ]
    },
    {
        enunciado: "¿Qué es el 'semiperímetro' (p)?",
        correcta: "La mitad del perímetro; usado en la fórmula de Herón para el área",
        incorrectas: [
            "Un perímetro incompleto",
            "Dos lados"
        ]
    },
    {
        enunciado: "¿Qué es la 'Fórmula de Herón'?",
        correcta: "Area = raíz(p(p-a)(p-b)(p-c))",
        incorrectas: [
            "Base por altura",
            "Lado al cubo"
        ]
    },
    {
        enunciado: "¿Qué son 'triángulos semejantes'?",
        correcta: "Tienen ángulos iguales y lados proporcionales",
        incorrectas: [
            "Triángulos iguales",
            "Triángulos con misma área"
        ]
    },
    {
        enunciado: "¿Qué son 'triángulos congruentes'?",
        correcta: "Iguales en forma y tamaño (lados y ángulos iguales)",
        incorrectas: [
            "Parecidos",
            "Semejantes"
        ]
    },
    {
        enunciado: "¿Qué es la 'mediana'?",
        correcta: "Segmento que une un vértice con el punto medio del lado opuesto",
        incorrectas: [
            "El lado medio",
            "La altura"
        ]
    },
    {
        enunciado: "¿En un triángulo rectángulo, la mediana a la hipotenusa mide...?",
        correcta: "La mitad de la hipotenusa (radio circunscrito)",
        incorrectas: [
            "Igual que un cateto",
            "Un tercio"
        ]
    },
    {
        enunciado: "¿Qué es un polígono 'irregular'?",
        correcta: "No tiene todos los lados o ángulos iguales",
        incorrectas: [
            "Un polígono abierto",
            "Un dibujo abstracto"
        ]
    },
    {
        enunciado: "¿Cómo se llama el polígono de 12 lados?",
        correcta: "Dodecágono",
        incorrectas: [
            "Decágono",
            "Icoságono"
        ]
    },
    {
        enunciado: "¿Qué es la 'simetría' en polígonos regulares?",
        correcta: "Tienen n ejes de simetría (si n es par, pasan por vértices y centros de lados opuestos; impar, vértice-lado opuesto)",
        incorrectas: [
            "No tienen simetría",
            "Solo un eje"
        ]
    },
    {
        enunciado: "¿Qué es el 'cuadrado'?",
        correcta: "Polígono regular de 4 lados (rectángulo y rombo a la vez)",
        incorrectas: [
            "Cualquier cuadrilátero",
            "Un cubo"
        ]
    },
    {
        enunciado: "¿Se puede teselar el plano con pentágonos regulares?",
        correcta: "No, sus ángulos (108º) no suman 360º al juntarse vértices",
        incorrectas: [
            "Sí, perfectamente",
            "Sí, con hexágonos"
        ]
    }
];
