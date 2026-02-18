var PREGUNTAS = [
    {
        enunciado: "¿Cuándo son paralelas dos rectas en diédrico?",
        correcta: "Cuando sus proyecciones homónimas son paralelas (r' paralela a s' y r paralela a s)",
        incorrectas: [
            "Cuando se cortan en el infinito",
            "Cuando forman 45 grados"
        ]
    },
    {
        enunciado: "¿Se cumple siempre la condición de paralelismo directo?",
        correcta: "No, en rectas de perfil hay que comprobarlo en la tercera proyección (pueden parecer paralelas y cruzarse)",
        incorrectas: [
            "Sí, siempre",
            "Nunca"
        ]
    },
    {
        enunciado: "¿Cuándo son paralelos dos planos?",
        correcta: "Cuando sus trazas homónimas son paralelas (alfa1 paralela a beta1 y alfa2 paralela a beta2)",
        incorrectas: [
            "Cuando tienen el mismo color",
            "Cuando se cortan fuera del papel"
        ]
    },
    {
        enunciado: "¿Cuándo es una recta paralela a un plano?",
        correcta: "Si la recta es paralela a cualquier recta contenida en el plano",
        incorrectas: [
            "Si la recta no toca el plano",
            "Si es perpendicular a la normal"
        ]
    },
    {
        enunciado: "¿Cuándo son perpendiculares una recta y un plano?",
        correcta: "Cuando las proyecciones de la recta son perpendiculares a las trazas homónimas del plano (r' perp. a alfa2 y r perp. a alfa1)",
        incorrectas: [
            "Cuando se cortan a 90 grados en la realidad",
            "Cuando r es paralela a alfa"
        ]
    },
    {
        enunciado: "¿Se conserva la perpendicularidad entre dos rectas que se cortan en diédrico general?",
        correcta: "No, el ángulo de 90º proyéctado se deforma (salvo que una sea paralela a un plano de proyección, Teorema de Tales)",
        incorrectas: [
            "Sí, siempre se ve a 90º",
            "No se puede saber"
        ]
    },
    {
        enunciado: "¿Cuándo se proyecta el ángulo recto en verdadera magnitud?",
        correcta: "Cuando uno de los lados del ángulo es paralelo al plano de proyección",
        incorrectas: [
            "Siempre",
            "Nunca"
        ]
    },
    {
        enunciado: "¿Cómo trazar un plano perpendicular a una recta por un punto A?",
        correcta: "Dibujando las trazas del plano perpendiculares a las proyecciones de la recta pasando por las proyecciones de A (usando horizontales/frontales)",
        incorrectas: [
            "Trazando cualquier plano",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Cómo hallar la distancia entre dos puntos A y B?",
        correcta: "Construyendo el triángulo rectángulo con la diferencia de cotas (o alejamientos) sobre una perpendicular a la proyección del segmento",
        incorrectas: [
            "Midiendo directamente la recta que los une",
            "Sumando sus coordenadas"
        ]
    },
    {
        enunciado: "¿Cómo hallar la distancia de un punto a un plano?",
        correcta: "Trazando una recta perpendicular al plano desde el punto, hallando la intersección (I) y midiendo la distancia real entre punto y I",
        incorrectas: [
            "Bajando una vertical",
            "Midiendo la perpendicular a la traza"
        ]
    },
    {
        enunciado: "¿Cómo hallar la distancia entre dos planos paralelos?",
        correcta: "Tomando un punto cualquiera de uno y hallando la distancia de ese punto al otro plano (recta perpendicular común)",
        incorrectas: [
            "Midiendo la distancia entre trazas",
            "Restando sus inclinaciones"
        ]
    },
    {
        enunciado: "¿Cómo hallar la distancia entre dos rectas paralelas?",
        correcta: "Haciendo pasar un plano perpendicular a ambas (o tomando un punto de una y distancia a la otra)",
        incorrectas: [
            "Midiendo en el dibujo",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Cómo hallar la distancia entre dos rectas que se cruzan?",
        correcta: "Plano paralelo a una que contenga a la otra (distancia de punto a plano) o perpendicular común",
        incorrectas: [
            "Donde se cruzan en el dibujo",
            "Cero"
        ]
    },
    {
        enunciado: "¿Qué es la 'Perpendicular Común' a dos rectas que se cruzan?",
        correcta: "El segmento más corto que une ambas rectas y es perpendicular a las dos a la vez",
        incorrectas: [
            "Una recta cualquiera",
            "La bisectriz"
        ]
    },
    {
        enunciado: "¿Cómo medir el ángulo entre dos rectas que se cortan?",
        correcta: "Abatiendo el plano que las contiene o girándolas hasta ponerlas paralelas al plano de proyección",
        incorrectas: [
            "Midiendo con transportador directamente",
            "Restando sus pendientes"
        ]
    },
    {
        enunciado: "¿Cómo medir el ángulo entre dos planos?",
        correcta: "Trazando un plano auxiliar perpendicular a la recta intersección (ángulo rectilíneo) y abatiéndolo",
        incorrectas: [
            "Midiendo el ángulo entre las trazas",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Cómo medir el ángulo entre recta y plano?",
        correcta: "Hallando el ángulo entre la recta y su proyección ortogonal sobre el plano (o su complementario con la normal al plano)",
        incorrectas: [
            "Midiendo con la traza",
            "A ojo"
        ]
    },
    {
        enunciado: "¿Qué son 'Planos Perpendiculares'?",
        correcta: "Un plano es perpendicular a otro si contiene una recta perpendicular a ese otro plano",
        incorrectas: [
            "Si sus trazas se cortan a 90 grados (falso)",
            "Si forman una cruz"
        ]
    },
    {
        enunciado: "¿Cuándo son las trazas de dos planos perpendiculares indicativo de perpendicularidad real?",
        correcta: "SOLO si uno de los planos es paralelo a un plano de proyección o perpendicular a una traza específica (casos particulares)",
        incorrectas: [
            "Siempre",
            "Nunca"
        ]
    },
    {
        enunciado: "¿Cómo se traza una recta perpendicular a otra recta 's' por un punto P?",
        correcta: "Hay infinitas (plano perpendicular a 's' por P); se elige una específica o la que las corta (perpendicular secante)",
        incorrectas: [
            "Dibujando a 90 grados",
            "Solo hay una"
        ]
    },
    {
        enunciado: "¿Qué es el 'Ángulo con la Línea de Tierra'?",
        correcta: "No tiene significado geométrico intrínseco, depende de la posición relativa; se suele medir ángulos con los planos de proyección",
        incorrectas: [
            "Un ángulo muy importante",
            "La pendiente"
        ]
    },
    {
        enunciado: "¿Qué recta forma el mismo ángulo con los dos planos de proyección?",
        correcta: "Las rectas de perfil que pasan por la LT a 45º, o rectas situadas en los planos bisectores",
        incorrectas: [
            "Recta horizontal",
            "Recta vertical"
        ]
    },
    {
        enunciado: "¿Qué planos son perpendiculares al primer bisector?",
        correcta: "Aquellos cuyas trazas forman ángulos iguales con la LT (simétricas respecto a la perpendicular a LT)",
        incorrectas: [
            "Planos paralelos a LT",
            "Cualquiera"
        ]
    },
    {
        enunciado: "¿Qué es la 'Verdadera Magnitud' de un segmento?",
        correcta: "Su longitud real, que solo se ve directamente si es paralelo al plano de proyección (o mediante abatimiento/giro)",
        incorrectas: [
            "Su proyección",
            "La suma de cota y alejamiento"
        ]
    },
    {
        enunciado: "¿Cómo poner una recta oblícua en posición vertical?",
        correcta: "Mediante dos giros (o cambios de plano): primero a posición frontal/horizontal y luego a vertical",
        incorrectas: [
            "Con un solo giro",
            "Moviendo el papel"
        ]
    },
    {
        enunciado: "¿Para qué sirve el 'Cambio de Plano' en distancias?",
        correcta: "Para convertir planos o rectas genéricas en proyectantes o frontales/horizontales y medir directamente (distancia punto-plano proyectante es inmediata)",
        incorrectas: [
            "Para nada",
            "Para dibujar más"
        ]
    },
    {
        enunciado: "¿La distancia de un punto al plano horizontal es...?",
        correcta: "Su Cota",
        incorrectas: [
            "Su Alejamiento",
            "Cero"
        ]
    },
    {
        enunciado: "¿Qué es el 'lugar geométrico' de los puntos que equidistan de dos planos?",
        correcta: "Los planos bisectores del ángulo diedro que forman",
        incorrectas: [
            "Una recta",
            "Un punto"
        ]
    },
    {
        enunciado: "¿Qué es el 'lugar geométrico' de los puntos que equidistan de dos puntos fijo A y B?",
        correcta: "El plano mediador (perpendicular al segmento AB por su punto medio)",
        incorrectas: [
            "La mediatriz (solo en el plano)",
            "Una esfera"
        ]
    },
    {
        enunciado: "¿Cómo trazar la perpendicular común a dos rectas que se cruzan?",
        correcta: "Método complejo: Plano paralelo a una por la otra -> Proyectar ortogonalmente -> etc. o Cambios de plano hasta ver una de punta",
        incorrectas: [
            "Uniendo los puntos medios",
            "A ojo"
        ]
    },
    {
        enunciado: "¿Es posible que dos rectas sean perpendiculares sin cortarse?",
        correcta: "Sí, se cruzan ortogonalmente (90º en el espacio, pero separadas)",
        incorrectas: [
            "No, tienen que cortarse",
            "Imposible"
        ]
    },
    {
        enunciado: "¿La proyección de un círculo es un círculo si...?",
        correcta: "El círculo es paralelo al plano de proyección",
        incorrectas: [
            "Siempre",
            "Si es perpendicular"
        ]
    },
    {
        enunciado: "¿Cuál es el ángulo máximo de la recta de máxima pendiente?",
        correcta: "Es el ángulo del plano con el horizontal",
        incorrectas: [
            "90 grados",
            "45 grados"
        ]
    },
    {
        enunciado: "¿Si un plano contiene una recta perpendicular al horizontal, el plano es...?",
        correcta: "Proyectante horizontal (vertical)",
        incorrectas: [
            "Horizontal",
            "Oblicuo"
        ]
    },
    {
        enunciado: "¿Qué es medir 'en verdadera magnitud'?",
        correcta: "Obtener el valor numérico real de una dimensión espacial",
        incorrectas: [
            "Medir la proyección",
            "Estimar"
        ]
    },
    {
        enunciado: "¿Para hallar la distancia mínima de un punto a una recta se usa...?",
        correcta: "Plano perpendicular a la recta por el punto -> Intersección -> Distancia punto-intersección",
        incorrectas: [
            "Triángulo rectángulo simple",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Dos planos perpendiculares al horizontal son...?",
        correcta: "Paralelos entre sí o se cortan en una recta vertical",
        incorrectas: [
            "Perpendiculares siempre",
            "Horizontales"
        ]
    },
    {
        enunciado: "¿El ángulo que forma una recta con un plano es el...?",
        correcta: "Ángulo mínimo posible (con su proyección ortogonal)",
        incorrectas: [
            "Ángulo máximo",
            "90 grados"
        ]
    },
    {
        enunciado: "¿Cómo saber si tres puntos A, B, C forman un triángulo rectángulo en un vértice?",
        correcta: "Abatiendo el triángulo o verificando perpendicularidad de los lados concurrentes",
        incorrectas: [
            "Si parece recto en proyección",
            "Midiendo con regla"
        ]
    },
    {
        enunciado: "¿Qué es la 'mínima distancia'?",
        correcta: "Siempre se mide sobre la perpendicular",
        incorrectas: [
            "Sobre la oblicua",
            "Cualquier línea"
        ]
    }
];
