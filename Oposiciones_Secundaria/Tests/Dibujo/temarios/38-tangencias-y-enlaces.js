var PREGUNTAS = [
    {
        enunciado: "¿Qué es una 'Tangencia'?",
        correcta: "Posición límite de dos figuras (recta-circunferencia o dos circunferencias) que tienen un solo punto en común (punto de tangencia T)",
        incorrectas: [
            "Cuando se cortan en dos puntos",
            "Cuando no se tocan"
        ]
    },
    {
        enunciado: "¿Qué condición cumple el radio en el punto de tangencia recta-circunferencia?",
        correcta: "El radio en el punto T es perpendicular a la recta tangente",
        incorrectas: [
            "Es paralelo a la recta",
            "Forma 45 grados"
        ]
    },
    {
        enunciado: "¿Qué condición cumplen los centros de dos circunferencias tangentes?",
        correcta: "Los centros O1, O2 y el punto de tangencia T están alineados",
        incorrectas: [
            "Forman un triángulo equilátero",
            "Son perpendiculares"
        ]
    },
    {
        enunciado: "¿Qué es un 'Enlace' o empalme?",
        correcta: "Unión armónica de varias líneas (rectas o curvas) mediante tangencias, de modo que no haya cambios bruscos de dirección (derivada continua)",
        incorrectas: [
            "Pegar dos líneas con celo",
            "Una esquina o vértice"
        ]
    },
    {
        enunciado: "¿Qué son los 'Problemas de Apolonio'?",
        correcta: "10 problemas clásicos de tangencias definidos por combinaciones de 3 elementos (Punto, Recta, Circunferencia) a los que debe ser tangente una circunferencia solución",
        incorrectas: [
            "Problemas de matemáticas financieras",
            "Problemas de triángulos"
        ]
    },
    {
        enunciado: "¿Cómo se trazan las tangentes desde un punto P exterior a una circunferencia?",
        correcta: "Trazando el arco capaz de 90º del segmento OP (unir centro con P, mediatriz, circunferencia auxiliar); corta en T1 y T2",
        incorrectas: [
            "Con la regla a ojo",
            "Uniendo P con el centro"
        ]
    },
    {
        enunciado: "¿Cómo se trazan las tangentes exteriores comunes a dos circunferencias?",
        correcta: "Reduciendo el problema a 'tangente desde punto': restando el radio menor al mayor (circunferencia auxiliar R-r) y trazando tangentes desde el centro de la pequeña",
        incorrectas: [
            "Uniendo los bordes",
            "Sumando radios R+r"
        ]
    },
    {
        enunciado: "¿Cómo se trazan las tangentes interiores comunes (en cruz)?",
        correcta: "Sumando el radio menor al mayor (circunferencia auxiliar R+r) concentrica a la grande y trazando tangentes desde el centro de la pequeña",
        incorrectas: [
            "Restando radios R-r",
            "Directamente con regla"
        ]
    },
    {
        enunciado: "¿Qué es la 'Dilatación' (en tangencias)?",
        correcta: "Método para resolver problemas PPR o PPC transformándolos en PPr o PPc mediante sumar/restar el radio de la circunferencia dato a la solución buscada (reducir a punto)",
        incorrectas: [
            "Calentar el dibujo",
            "Hacerlo más grande"
        ]
    },
    {
        enunciado: "¿Qué es la 'Inversión' aplicada a tangencias?",
        correcta: "Transformación potente para resolver el problema general de Apolonio (CCC) transformando circunferencias en rectas o en sí mismas",
        incorrectas: [
            "Dar la vuelta",
            "Poner dinero"
        ]
    },
    {
        enunciado: "¿Qué es el 'Centro Radical' en tangencias?",
        correcta: "Punto de igual potencia respecto a 3 circunferencias; es el centro de inversión que transforma unas en otras o centro de la circunferencia ortogonal",
        incorrectas: [
            "El centro del triángulo",
            "Un punto cualquiera"
        ]
    },
    {
        enunciado: "¿Cómo enlazar dos rectas paralelas con dos arcos de igual radio pero sentido contrario (curva de gola)?",
        correcta: "Uniendo los puntos de tangencia, hallando el punto medio (inflexión) y las mediatrices de los dos segmentos resultantes",
        incorrectas: [
            "Con una recta diagonal",
            "Con una parábola"
        ]
    },
    {
        enunciado: "¿Cómo enlazar dos rectas que se cortan con un arco de radio R?",
        correcta: "Trazando paralelas a las rectas a distancia R; donde se corten está el centro del arco",
        incorrectas: [
            "A ojo",
            "Haciendo centro en el vértice"
        ]
    },
    {
        enunciado: "¿Qué es una 'recta tangente' a una curva en un punto?",
        correcta: "La posición límite de la secante cuando los dos puntos de corte tienden a confundirse en uno solo",
        incorrectas: [
            "Una recta que no toca la curva",
            "Una recta que la corta"
        ]
    },
    {
        enunciado: "¿Cuántas soluciones tiene el problema de Apolonio general (CCC)?",
        correcta: "Hasta 8 soluciones posibles",
        incorrectas: [
            "1 solución única",
            "Infinitas"
        ]
    },
    {
        enunciado: "¿Qué es el caso PPC (Punto, Punto, Circunferencia)?",
        correcta: "Circunferencia que pasa por dos puntos y es tangente a otra; se resuelve por Potencia (eje radical de P-P y circunferencia dato)",
        incorrectas: [
            "Partido Popular",
            "Caso fácil"
        ]
    },
    {
        enunciado: "¿Qué es el caso RRR (Recta, Recta, Recta) tangencia?",
        correcta: "Circunferencias tangentes a 3 rectas (bisectrices); son las circunferencias inscrita y exinscritas del triángulo que forman",
        incorrectas: [
            "No tiene solución",
            "Circunscrita"
        ]
    },
    {
        enunciado: "¿Para enlazar puntos alineados con arcos se necesita...?",
        correcta: "Que los centros de los arcos estén en la misma perpendicular a la línea de unión en el punto de enlace (normal común)",
        incorrectas: [
            "Regla flexible",
            "Nada especial"
        ]
    },
    {
        enunciado: "¿Qué es una curva 'Ovoide' técnica?",
        correcta: "Curva cerrada formada por 4 arcos de circunferencia tangentes (dos semicircunferencias desiguales y dos arcos de enlace simétricos); tiene 1 eje de simetría",
        incorrectas: [
            "Un huevo real",
            "Una elipse"
        ]
    },
    {
        enunciado: "¿Qué es un 'Óvalo' técnico?",
        correcta: "Curva cerrada de 4 centros (dos radios distintos) con dos ejes de simetría; se usa para sustituir a la elipse",
        incorrectas: [
            "Una elipse exacta",
            "Un círculo aplastado"
        ]
    },
    {
        enunciado: "¿Cómo se halla el centro de una circunferencia que pasa por un punto P y es tangente a una recta r en un punto T?",
        correcta: "Intersección de la perpendicular a r por T y la mediatriz del segmento PT",
        incorrectas: [
            "Uniendo P y T",
            "Centro en T"
        ]
    },
    {
        enunciado: "¿Qué es la 'Potencia' para resolver tangencias?",
        correcta: "Usar el Centro Radical como centro de homotecia o inversión para hallar los puntos de tangencia",
        incorrectas: [
            "Fuerza bruta",
            "No se usa"
        ]
    },
    {
        enunciado: "¿Qué son las 'rectas antiparalelas' en tangencias?",
        correcta: "Rectas simétricas respecto a la bisectriz...",
        incorrectas: [
            "Rectas paralelas",
            "Perpendiculares"
        ]
    },
    {
        enunciado: "¿El 'arco de gola' o cimacio se usa en...?",
        correcta: "Molduras arquitectónicas (forma de S)",
        incorrectas: [
            "Tuberías",
            "Carreteras rectas"
        ]
    },
    {
        enunciado: "¿Qué es el 'lugar geométrico de los centros' de circunferencias tangentes a dos rectas que se cortan?",
        correcta: "Las dos bisectrices de los ángulos que forman las rectas",
        incorrectas: [
            "Una paralela media",
            "Un círculo"
        ]
    },
    {
        enunciado: "¿Qué es el 'lugar geométrico de los centros' tangentes a dos circunferencias?",
        correcta: "Hipérbola (si se restan radios) o Elipse (si se suman = tangencia interior/exterior)... dependiendo de la configuración",
        incorrectas: [
            "Una recta",
            "Otra circunferencia"
        ]
    },
    {
        enunciado: "¿Qué es la 'Corola'?",
        correcta: "No es término de tangencias... (distractor de voluta o gola)",
        incorrectas: [
            "Parte de la flor",
            "Un coche"
        ]
    },
    {
        enunciado: "¿Qué es el 'enlace de puntos'?",
        correcta: "Unir una serie de puntos mediante una curva suave (spline, plantilla de curvas) o arcos tangentes",
        incorrectas: [
            "Unirlos con rectas",
            "Pintarlos"
        ]
    },
    {
        enunciado: "¿Qué aplicación industrial tienen las tangencias?",
        correcta: "Diseño de levas, carreteras (clotoides), perfiles de piezas mecánicas, chapistería, matricería",
        incorrectas: [
            "Ninguna",
            "Literatura"
        ]
    },
    {
        enunciado: "¿Qué es el 'radio de acuerdo'?",
        correcta: "El radio del arco que redondea una esquina (tangente a los dos lados)",
        incorrectas: [
            "Radio de música",
            "Un pacto"
        ]
    },
    {
        enunciado: "¿Cómo trazar una circunferencia de radio R tangente a otra O y que pase por P?",
        correcta: "Centro en la intersección de: arco de centro O y radio ROp+R, y arco de centro P y radio R",
        incorrectas: [
            "A ojo",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Qué es la 'Manta' o envolvente convexa?",
        correcta: "Curva tangente exterior que envuelve a varias figuras (ej. correa de transmisión)",
        incorrectas: [
            "Ropa de cama",
            "Un plano"
        ]
    },
    {
        enunciado: "¿Para enlazar un arco y una recta se busca...?",
        correcta: "El punto de tangencia mediante una perpendicular a la recta desde el centro del arco",
        incorrectas: [
            "El punto de corte",
            "Cualquier punto"
        ]
    },
    {
        enunciado: "¿Qué es el 'Escocio'?",
        correcta: "Moldura cóncava formada por dos arcos de diferente radio tangentes (base de columnas)",
        incorrectas: [
            "Un escocés",
            "Una recta"
        ]
    },
    {
        enunciado: "¿Qué es el 'Bocel' o Toro?",
        correcta: "Moldura convexa de perfil semicircular (tangencias)",
        incorrectas: [
            "Un animal",
            "Una ranura"
        ]
    },
    {
        enunciado: "¿Qué es el problema PRC (Punto, Recta, Circunferencia)?",
        correcta: "Buscar circunferencia tangente a recta y circunferencia dada que pase por punto; solución por Dilatación o Potencia",
        incorrectas: [
            "Partido comunista",
            "Imposible"
        ]
    },
    {
        enunciado: "¿La 'rectificación' de curvas usa tangencias?",
        correcta: "Sí, se suele rectificar sobre la tangente en un extremo del arco",
        incorrectas: [
            "No",
            "Usa secantes"
        ]
    },
    {
        enunciado: "¿Qué es la 'tangente de inflexión'?",
        correcta: "La tangente en el punto donde la curva cambia de concavidad (atraviesa la curva)",
        incorrectas: [
            "Tangente normal",
            "No existe"
        ]
    },
    {
        enunciado: "¿Un óvalo tiene curvatura continua?",
        correcta: "No estrictamente; tiene saltos de curvatura en los puntos de enlace (cambio de radio), aunque la tangencia es suave (C1 pero no C2)",
        incorrectas: [
            "Sí, perfecta como la elipse",
            "Tiene picos"
        ]
    },
    {
        enunciado: "¿La elipse tiene curvatura continua?",
        correcta: "Sí, su radio de curvatura varía continuamente",
        incorrectas: [
            "No, es a trozos",
            "Es recta"
        ]
    }
];
