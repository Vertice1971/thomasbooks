var PREGUNTAS = [
    {
        enunciado: "¿Qué es una 'Transformación Geométrica'?",
        correcta: "Una operación que hace corresponder a cada punto o figura del plano otro punto o figura según una ley determinada",
        incorrectas: [
            "Dibujar figuras nuevas",
            "Mover el papel"
        ]
    },
    {
        enunciado: "¿Qué es una 'Isometría'?",
        correcta: "Una transformación que conserva las distancias entre puntos (y por tanto formas y tamaños); la figura transformada es congruente con la original",
        incorrectas: [
            "Una transformación que cambia el tamaño",
            "Un dibujo en 3D"
        ]
    },
    {
        enunciado: "¿Cuáles son los movimientos o isometrías en el plano?",
        correcta: "Traslación, Giro (rotación) y Simetría (axial y central)",
        incorrectas: [
            "Homotecia y Semejanza",
            "Proyección cónica"
        ]
    },
    {
        enunciado: "¿Qué es una 'Traslación'?",
        correcta: "Movimiento directo definido por un vector guía; todos los puntos se desplazan la misma distancia, dirección y sentido",
        incorrectas: [
            "Girar la figura",
            "Reflejar la figura"
        ]
    },
    {
        enunciado: "¿Qué define un 'Giro' (rotación)?",
        correcta: "Un punto fijo llamado centro de giro y un ángulo de rotación (con un sentido horario o antihorario)",
        incorrectas: [
            "Un eje recto",
            "Un vector"
        ]
    },
    {
        enunciado: "¿Qué es una 'Simetría Axial'?",
        correcta: "Movimiento inverso definido por un eje; cada punto se transforma en su simétrico tal que el eje es mediatriz del segmento que los une",
        incorrectas: [
            "Giro de 180 grados",
            "Mover a lo largo del eje"
        ]
    },
    {
        enunciado: "¿Qué es una 'Simetría Central'?",
        correcta: "Movimiento directo equivalente a un giro de 180º alrededor de un punto (centro de simetría)",
        incorrectas: [
            "Simetría respecto a una recta",
            "Homotecia de razón 2"
        ]
    },
    {
        enunciado: "¿Qué diferencia hay entre movimiento 'directo' e 'inverso'?",
        correcta: "El movimiento directo conserva el sentido de giro de los vértices (letras A-B-C); el inverso lo invierte (como en un espejo)",
        incorrectas: [
            "El directo es más rápido",
            "El inverso va hacia atrás"
        ]
    },
    {
        enunciado: "¿El producto de dos simetrías axiales de ejes paralelos es...?",
        correcta: "Una traslación de vector perpendicular a los ejes y módulo el doble de la distancia entre ellos",
        incorrectas: [
            "Un giro",
            "Otra simetría"
        ]
    },
    {
        enunciado: "¿El producto de dos simetrías axiales de ejes secantes es...?",
        correcta: "Un giro de centro el punto de corte y ángulo el doble del que forman los ejes",
        incorrectas: [
            "Una traslación",
            "Una homotecia"
        ]
    },
    {
        enunciado: "¿El producto de tres simetrías axiales (o simetría + traslación paralela) es...?",
        correcta: "Una simetría deslizante (movimiento inverso que no tiene puntos dobles)",
        incorrectas: [
            "Una identidad",
            "Un punto fijo"
        ]
    },
    {
        enunciado: "¿Qué es una 'Homotecia'?",
        correcta: "Transformación anamórfica definida por un centro (O) y una razón (k); OA' = k·OA; conserva ángulos (semejanza) pero no distancias",
        incorrectas: [
            "Mover sin cambiar tamaño",
            "Girar"
        ]
    },
    {
        enunciado: "¿Qué ocurre si la razón de homotecia k es negativa?",
        correcta: "Es una homotecia inversa; la figura transformada está al otro lado del centro y girada 180º (además de escalada)",
        incorrectas: [
            "La figura desaparece",
            "Se hace imaginaria"
        ]
    },
    {
        enunciado: "¿Qué son figuras 'Semejantes'?",
        correcta: "Tienen la misma forma (ángulos iguales) y lados homólogos proporcionales; se obtienen mediante homotecia y movimiento",
        incorrectas: [
            "Tienen la misma área",
            "Son iguales"
        ]
    },
    {
        enunciado: "¿Qué es un 'Punto Doble' o invariante?",
        correcta: "Un punto que coincide con su homólogo (transformado) en la misma posición",
        incorrectas: [
            "Un punto dibujado dos veces",
            "Dos puntos muy juntos"
        ]
    },
    {
        enunciado: "¿Qué es una 'Recta Doble'?",
        correcta: "Una recta que se transforma en sí misma (globalmente), aunque sus puntos puedan desplazarse sobre ella",
        incorrectas: [
            "Dos líneas paralelas",
            "Una recta gruesa"
        ]
    },
    {
        enunciado: "¿El centro de giro es un punto doble?",
        correcta: "Sí, es el único punto doble en un giro (salvo que sea de 360º)",
        incorrectas: [
            "No",
            "Depende del ángulo"
        ]
    },
    {
        enunciado: "¿El eje de simetría es una recta de puntos dobles?",
        correcta: "Sí, todos los puntos del eje son dobles (eje de puntos dobles)",
        incorrectas: [
            "No, solo un punto",
            "Es una recta invariante global"
        ]
    },
    {
        enunciado: "¿Qué es la 'Inversión' en el plano?",
        correcta: "Transformación donde el producto de distancias de dos puntos homólogos al centro de inversión es constante (OA · OA' = K)",
        incorrectas: [
            "Poner el dibujo boca abajo",
            "Inversión de dinero"
        ]
    },
    {
        enunciado: "¿Qué es la 'Potencia de Inversión' (K)?",
        correcta: "El valor constante del producto de distancias; si K>0 es inversión positiva (puntos al mismo lado), si K<0 negativa",
        incorrectas: [
            "Fuerza de inversión",
            "Radio del círculo"
        ]
    },
    {
        enunciado: "¿Qué es la 'Circunferencia de Puntos Dobles' (CPD)?",
        correcta: "En inversión positiva, es la circunferencia de centro O y radio raíz(K); sus puntos son invariantes",
        incorrectas: [
            "Cualquier círculo",
            "No existe"
        ]
    },
    {
        enunciado: "¿En una inversión, una recta que NO pasa por el centro se transforma en...?",
        correcta: "Una circunferencia que SÍ pasa por el centro de inversión",
        incorrectas: [
            "Otra recta paralela",
            "Una hipérbola"
        ]
    },
    {
        enunciado: "¿En una inversión, una recta que pasa por el centro se transforma en...?",
        correcta: "Ella misma (recta doble), sus puntos se invierten sobre la recta",
        incorrectas: [
            "Un punto",
            "Cero"
        ]
    },
    {
        enunciado: "¿Una circunferencia que NO pasa por el centro de inversión se transforma en...?",
        correcta: "Otra circunferencia que tampoco pasa por el centro (circunferencias homólogas o antiparalelas)",
        incorrectas: [
            "Una elipse",
            "Una recta"
        ]
    },
    {
        enunciado: "¿Qué propiedad importante conserva la Inversión?",
        correcta: "Es una transformación 'conforme': conserva los ángulos entre curvas (aunque invierte el sentido)",
        incorrectas: [
            "Conserva las distancias",
            "Conserva las líneas rectas"
        ]
    },
    {
        enunciado: "¿Qué es la 'Equivalencia'?",
        correcta: "Transformación que conserva el área de la figura (k=1 en determinante), aunque cambie la forma (ej. cizalladura)",
        incorrectas: [
            "Que vale lo mismo",
            "Igualdad total"
        ]
    },
    {
        enunciado: "¿Qué es un 'Friso'?",
        correcta: "Grupo de simetría generado por la repetición de un motivo a lo largo de una línea (7 tipos de frisos)",
        incorrectas: [
            "Un dibujo congelado",
            "Algo frío"
        ]
    },
    {
        enunciado: "¿Qué es un 'Mosaico' o teselación?",
        correcta: "Recubrimiento del plano sin huecos ni solapamientos mediante repetición de un motivo en dos direcciones (17 grupos cristalográficos planos)",
        incorrectas: [
            "Un suelo romano roto",
            "Un puzzle de 3D"
        ]
    },
    {
        enunciado: "¿Cómo se llama el punto impropio en transformaciones?",
        correcta: "Punto del infinito; en inversión, el centro O se transforma en el punto del infinito y viceversa",
        incorrectas: [
            "Punto final",
            "Punto ciego"
        ]
    },
    {
        enunciado: "¿Qué es la 'Homología' (general)?",
        correcta: "Transformación proyectiva que relaciona dos figuras planas mediante un centro y un eje; rectas homólogas se cortan en el eje",
        incorrectas: [
            "Estudio del hombre",
            "Igualdad exacta"
        ]
    },
    {
        enunciado: "¿Qué es la 'Afinidad' (general)?",
        correcta: "Caso particular de homología donde el centro está en el infinito; conserva el paralelismo (rectas paralelas siguen siéndolo)",
        incorrectas: [
            "Amistad",
            "Giro y escala"
        ]
    },
    {
        enunciado: "¿La 'Simetría deslizante' se compone de...?",
        correcta: "Una simetría axial y una traslación paralela al eje (el orden no altera el resultado)",
        incorrectas: [
            "Dos giros",
            "Traslación perpendicular"
        ]
    },
    {
        enunciado: "¿Qué es el 'Grupo de Transformaciones'?",
        correcta: "Conjunto de operaciones que cumple las propiedades de grupo matemático (cierre, asociatividad, identidad, inverso)",
        incorrectas: [
            "Varios dibujos juntos",
            "Una reunión de geómetras"
        ]
    },
    {
        enunciado: "¿Qué es una figura 'autoinversa'?",
        correcta: "Figura que se transforma en sí misma mediante una inversión (ej. circunferencia ortogonal a la CPD)",
        incorrectas: [
            "Figura al revés",
            "Figura doble"
        ]
    },
    {
        enunciado: "¿Cómo se halla el centro de giro que transforma un segmento AB en A'B' (iguales)?",
        correcta: "Intersección de las mediatrices de AA' y BB'",
        incorrectas: [
            "Uniendo A con B",
            "Punto medio de AB"
        ]
    },
    {
        enunciado: "¿La composición de dos giros del mismo centro es...?",
        correcta: "Otro giro del mismo centro con ángulo suma de los anteriores",
        incorrectas: [
            "Una traslación",
            "Cero"
        ]
    },
    {
        enunciado: "¿La composición de dos traslaciones es...?",
        correcta: "Otra traslación de vector suma",
        incorrectas: [
            "Un giro",
            "Una simetría"
        ]
    },
    {
        enunciado: "¿Qué transformación convierte un círculo en elipse?",
        correcta: "Afinidad (o Homología), al estirar o comprimir en una dirección",
        incorrectas: [
            "Giro",
            "Traslación"
        ]
    },
    {
        enunciado: "¿Qué es el 'centro de semejanza' de dos círculos?",
        correcta: "Los puntos donde se cortan las tangentes comunes exteriores (directo) e interiores (inverso); centros de la homotecia que los relaciona",
        incorrectas: [
            "El punto medio",
            "No tienen"
        ]
    },
    {
        enunciado: "¿Qué es un 'Pantógrafo'?",
        correcta: "Mecanismo articulado basado en paralelogramos para realizar homotecias (copias a escala) mecánicamente",
        incorrectas: [
            "Un bolígrafo para todo",
            "Un tipo de pantalón"
        ]
    }
];
