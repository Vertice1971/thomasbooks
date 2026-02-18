var PREGUNTAS = [
    {
        enunciado: "¿Qué son los 'Lugares Geométricos'?",
        correcta: "Conjuntos de puntos que cumplen una propiedad geométrica común (ej. mediatriz: equidistan de dos puntos)",
        incorrectas: [
            "Sitios donde se dibuja",
            "Figuras cerradas"
        ]
    },
    {
        enunciado: "¿Qué es la 'Mediatriz' de un segmento?",
        correcta: "Lugar geométrico de los puntos que equidistan de los extremos del segmento (recta perpendicular por el punto medio)",
        incorrectas: [
            "La mitad del segmento",
            "Una línea curva"
        ]
    },
    {
        enunciado: "¿Qué es la 'Bisectriz' de un ángulo?",
        correcta: "Lugar geométrico de los puntos que equidistan de los lados del ángulo (semirrecta que divide el ángulo en dos iguales)",
        incorrectas: [
            "La recta que une los lados",
            "La altura del triángulo"
        ]
    },
    {
        enunciado: "¿Qué es el 'Arco Capaz'?",
        correcta: "Lugar geométrico de los puntos desde los cuales se ve un segmento bajo un ángulo constante dado",
        incorrectas: [
            "El arco más grande",
            "Un arco de triunfo"
        ]
    },
    {
        enunciado: "¿Cómo se divide un segmento en partes iguales (Teorema de Tales)?",
        correcta: "Trazando una semirrecta auxiliar, llevando medidas iguales en ella, y trazando paralelas desde el extremo al segmento original",
        incorrectas: [
            "Midiendo con regla y calculadora",
            "Doblando el papel"
        ]
    },
    {
        enunciado: "¿Qué es la 'Cuarta Proporcional'?",
        correcta: "Dados tres segmentos a, b, c, es el segmento x tal que a/b = c/x (construcción basada en Tales)",
        incorrectas: [
            "El cuarto segmento más largo",
            "Una medida aleatoria"
        ]
    },
    {
        enunciado: "¿Qué es la 'Media Proporcional'?",
        correcta: "Dados dos segmentos a y b, es x tal que a/x = x/b (x² = a·b); construcción mediante altura del triángulo rectángulo o cateto",
        incorrectas: [
            "El promedio aritmético (a+b)/2",
            "La mitad de la suma"
        ]
    },
    {
        enunciado: "¿Qué es el 'Número de Oro' (Phi)?",
        correcta: "La relación (1+√5)/2 ≈ 1.618; división de un segmento en extrema y media razón",
        incorrectas: [
            "Pi (3.1416)",
            "Raíz de 2"
        ]
    },
    {
        enunciado: "¿Cómo se construye un ángulo igual a otro dado?",
        correcta: "Transportando el arco de radio arbitrario y la cuerda correspondiente con compás",
        incorrectas: [
            "A ojo",
            "Con transportador solo"
        ]
    },
    {
        enunciado: "¿Cómo se traza una perpendicular a una recta por un punto exterior?",
        correcta: "Haciendo centro en el punto, cortando la recta en dos puntos auxiliares y hallando la mediatriz de ese tramo",
        incorrectas: [
            "Con la regla a ojo",
            "Trazando una línea recta cualquiera"
        ]
    },
    {
        enunciado: "¿Cómo se traza una paralela a una recta por un punto exterior?",
        correcta: "Usando equidistancia o trazando perpendiculares sucesivas (o método del rombo)",
        incorrectas: [
            "A mano alzada",
            "Midiendo con el dedo"
        ]
    },
    {
        enunciado: "¿Qué es la 'rectificación' de la circunferencia?",
        correcta: "Construcción gráfica aproximada (ej. método de Arquímedes o Specht) para obtener un segmento de longitud igual a la circunferencia (2πr)",
        incorrectas: [
            "Hacer recta la curva borrándola",
            "Dividirla en partes"
        ]
    },
    {
        enunciado: "¿Sumar dos segmentos gráficamente es...?",
        correcta: "Llevarlos consecutivamente sobre una recta a partir de un origen común",
        incorrectas: [
            "Sumar sus números",
            "Ponerlos paralelos"
        ]
    },
    {
        enunciado: "¿La 'Potencia de un punto' respecto a una circunferencia es...?",
        correcta: "El producto constante de los segmentos de cualquier secante que pasa por el punto (PA · PB = k)",
        incorrectas: [
            "La fuerza del punto",
            "La distancia al centro"
        ]
    },
    {
        enunciado: "¿Qué es el 'Eje Radical'?",
        correcta: "Lugar geométrico de los puntos con igual potencia respecto a dos circunferencias (recta perpendicular a la unión de centros)",
        incorrectas: [
            "El eje de simetría",
            "La tangente común"
        ]
    },
    {
        enunciado: "¿Qué es el 'Centro Radical'?",
        correcta: "Punto de intersección de los ejes radicales de tres circunferencias; tiene igual potencia respecto a las tres",
        incorrectas: [
            "El centro del triángulo",
            "Punto medio"
        ]
    },
    {
        enunciado: "¿Cómo se restan dos ángulos?",
        correcta: "Superponiendo sus aberturas desde un mismo vértice y lado común; la diferencia es el ángulo restante",
        incorrectas: [
            "Restando grados numéricamente",
            "Borrando líneas"
        ]
    },
    {
        enunciado: "¿Qué es la 'división áurea' de un segmento?",
        correcta: "Encontrar un punto que divida el segmento en dos partes, de forma que el total es a la parte mayor como la mayor es a la menor",
        incorrectas: [
            "Dividir por la mitad",
            "Dividir en tres partes"
        ]
    },
    {
        enunciado: "¿Qué es la 'Tercera Proporcional'?",
        correcta: "Caso particular de cuarta proporcional donde los medios son iguales: a/b = b/x",
        incorrectas: [
            "El tercer segmento",
            "Una fracción"
        ]
    },
    {
        enunciado: "¿Cómo se construye un triángulo dados sus tres lados?",
        correcta: "Llevando un lado como base y trazando arcos con las longitudes de los otros dos desde los extremos",
        incorrectas: [
            "Uniendo líneas al azar",
            "Necesitas los ángulos"
        ]
    },
    {
        enunciado: "¿Cuál es la 'longitud' de un arco de 60º y radio R?",
        correcta: "2πR / 6 (la sexta parte de la circunferencia)",
        incorrectas: [
            "Igual al radio",
            "R por dos"
        ]
    },
    {
        enunciado: "¿Cómo dividir un ángulo en 3 partes iguales (trisección)?",
        correcta: "Problema clásico imposible con regla y compás en el caso general (solo posible en casos particulares como 90º)",
        incorrectas: [
            "Con bisectrices sucesivas",
            "Es muy fácil siempre"
        ]
    },
    {
        enunciado: "¿Qué es un 'lúnula' de Hipócrates?",
        correcta: "Figura geométrica limitada por dos arcos circulares de distintos radios",
        incorrectas: [
            "Una luna llena",
            "Un error"
        ]
    },
    {
        enunciado: "¿El teorema del cateto se usa para hallar gráfica de...?",
        correcta: "La media proporcional (proyección del cateto como media entre hipotenusa y proyección)",
        incorrectas: [
            "Sumas",
            "Paralelas"
        ]
    },
    {
        enunciado: "¿El teorema de la altura se usa para hallar gráfica de...?",
        correcta: "La media proporcional (altura como media entre los segmentos de la base)",
        incorrectas: [
            "Áreas",
            "Perímetros"
        ]
    },
    {
        enunciado: "¿Cómo trazar tangentes comunes exteriores a dos circunferencias?",
        correcta: "Usando una circunferencia auxiliar de radio R-r concéntrica a la mayor (homotecia/potencia)",
        incorrectas: [
            "Uniendo los bordes a ojo",
            "Con la escuadra solo"
        ]
    },
    {
        enunciado: "¿Cómo trazar tangentes comunes interiores?",
        correcta: "Usando circunferencia auxiliar de radio R+r",
        incorrectas: [
            "Radio R-r",
            "Directamente"
        ]
    },
    {
        enunciado: "¿Qué ángulo se puede construir directamente con escuadra y cartabón?",
        correcta: "Múltiplos de 15º (15, 30, 45, 60, 75, 90...)",
        incorrectas: [
            "Cualquier ángulo",
            "Solo 90º"
        ]
    },
    {
        enunciado: "¿Cómo se construye un 'óvalo' dado el eje mayor?",
        correcta: "Dividiendo el eje en 3 o 4 partes y trazando arcos desde los puntos de división (método de los 3 círculos, etc.)",
        incorrectas: [
            "Como una elipse",
            "A mano"
        ]
    },
    {
        enunciado: "¿Qué es el 'gálibo'?",
        correcta: "Plantilla de perfil para comprobar formas curvas construidas",
        incorrectas: [
            "Una línea recta",
            "Un lápiz"
        ]
    },
    {
        enunciado: "¿La bisectriz de dos rectas que se cortan fuera del papel se halla...?",
        correcta: "Trazando paralelas interiores a igual distancia hasta que se corten dentro, o por el método de Tales",
        incorrectas: [
            "No se puede hallar",
            "A ojo"
        ]
    },
    {
        enunciado: "¿El centro de una circunferencia que pasa por 3 puntos es...?",
        correcta: "El circuncentro del triángulo formado por ellos (intersección de mediatrices)",
        incorrectas: [
            "El baricentro",
            "El incentro"
        ]
    },
    {
        enunciado: "¿Cómo se halla la raíz cuadrada de un número 'n' gráficamente?",
        correcta: "Construyendo la media proporcional entre 1 y n (h² = 1·n => h = √n)",
        incorrectas: [
            "Midiendo n cm",
            "Dibujando un cuadrado de lado n"
        ]
    },
    {
        enunciado: "¿Qué es una 'voluta'?",
        correcta: "Espiral compuesta por arcos de circunferencia tangentes (centros en un núcleo poligonal)",
        incorrectas: [
            "Un volumen",
            "Una recta"
        ]
    },
    {
        enunciado: "¿Qué es la 'sección áurea'?",
        correcta: "La proporción divina presente en la naturaleza y el arte; construcción clásica del pentágono",
        incorrectas: [
            "Cortar oro",
            "Sección de un tubo"
        ]
    },
    {
        enunciado: "¿Qué es el 'arco de herradura'?",
        correcta: "Arco ultrasemicircular (el centro está por encima de la línea de arranques)",
        incorrectas: [
            "Arco de medio punto",
            "Arco apuntado"
        ]
    },
    {
        enunciado: "¿Cómo poner un segmento en posición vertical?",
        correcta: "Con un giro de 90º o perpendicularidad",
        incorrectas: [
            "Moviendo el papel",
            "Con la mano"
        ]
    },
    {
        enunciado: "¿Qué es la 'simetría central'?",
        correcta: "Giro de 180º respecto a un punto",
        incorrectas: [
            "Reflejo en espejo",
            "Traslación"
        ]
    },
    {
        enunciado: "¿Qué es la 'antiparalela'?",
        correcta: "Una recta que forma con los lados de un ángulo el mismo ángulo que otra recta pero en sentido inverso",
        incorrectas: [
            "Una perpendicular",
            "Una paralela"
        ]
    },
    {
        enunciado: "¿Cómo desplegar un cubo (desarrollo)?",
        correcta: "Dibujando sus 6 caras cuadradas unidas por aristas (ej. en cruz)",
        incorrectas: [
            "6 cuadrados sueltos",
            "Un rectángulo largo"
        ]
    }
];
