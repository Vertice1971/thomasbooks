var PREGUNTAS = [
    {
        enunciado: "¿Qué es la 'Geometría Proyectiva'?",
        correcta: "Rama de la geometría que estudia las propiedades de incidencia de las figuras (puntos, rectas, planos) que se conservan tras proyecciones (perspectividad)",
        incorrectas: [
            "Geometría de medidas exactas",
            "Geometría euclídea métrica"
        ]
    },
    {
        enunciado: "¿Qué son los 'Elementos Impropios' o del infinito?",
        correcta: "Puntos, rectas o planos situados en el infinito; permiten que dos rectas paralelas se corten en un punto impropio",
        incorrectas: [
            "Elementos mal dibujados",
            "Errores"
        ]
    },
    {
        enunciado: "¿Qué es una 'Homografía'?",
        correcta: "Transformación proyectiva que establece una correspondencia biunívoca entre elementos geométricos (puntos a puntos, rectas a rectas); la razón doble se conserva",
        incorrectas: [
            "Escribir igual",
            "Una fotografía"
        ]
    },
    {
        enunciado: "¿Qué es la 'Homología' (plana)?",
        correcta: "Transformación homográfica entre dos figuras planas situadas en el mismo plano (o distintos), definida por un Centro (V) y un Eje; puntos homólogos alineados con V, rectas se cortan en el Eje",
        incorrectas: [
            "Estudio del ser humano",
            "Igualdad absoluta"
        ]
    },
    {
        enunciado: "¿Qué es la 'Afinidad' (homología afín)?",
        correcta: "Caso particular de homología donde el Centro está en el infinito (rayos paralelos); rectas homólogas se cortan en el Eje y se conserva el paralelismo",
        incorrectas: [
            "Llevarse bien",
            "Homología con eje en el infinito"
        ]
    },
    {
        enunciado: "¿Qué es la 'Razón Simple' de tres puntos alineados (ABC)?",
        correcta: "(ABC) = AB / BC",
        incorrectas: [
            "AB + BC",
            "AB x BC"
        ]
    },
    {
        enunciado: "¿Qué es la 'Razón Doble' o Anarmónica de cuatro puntos (ABCD)?",
        correcta: "(ABCD) = (AC/CB) / (AD/DB); invariante fundamental de la proyectiva",
        incorrectas: [
            "Doble de la simple",
            "Suma de razones"
        ]
    },
    {
        enunciado: "¿Qué es una 'Cuaterna Armónica'?",
        correcta: "Cuatro puntos alineados cuya razón doble es igual a -1; dividen el segmento armónicamente",
        incorrectas: [
            "Cuatro músicos",
            "Razón doble igual a 1"
        ]
    },
    {
        enunciado: "¿Qué es el 'Eje de Homología'?",
        correcta: "La recta lugar geométrico de los puntos dobles de la transformación (intersección de planos de las figuras)",
        incorrectas: [
            "La altura",
            "El centro V"
        ]
    },
    {
        enunciado: "¿Qué es el 'Centro de Homología' (V)?",
        correcta: "El punto donde concurren todas las rectas que unen puntos homólogos (A-A', B-B')",
        incorrectas: [
            "El centro del dibujo",
            "El vértice del eje"
        ]
    },
    {
        enunciado: "¿Qué son las 'Rectas Límite' (RL, RL')?",
        correcta: "Lugares geométricos de los puntos cuyos homólogos están en el infinito; RL es la anti-homóloga de la recta impropia, RL' es la homóloga de la recta impropia",
        incorrectas: [
            "El borde del papel",
            "Ejes de coordenadas"
        ]
    },
    {
        enunciado: "¿Dónde se cortan dos Rectas Límite homólogas?",
        correcta: "No son homólogas entre sí; una es del primer sistema y otra del segundo. Son paralelas al Eje",
        incorrectas: [
            "En el eje",
            "En el centro"
        ]
    },
    {
        enunciado: "¿Cómo transformar un cuadrilátero en un cuadrado por homología?",
        correcta: "Haciendo que la recta límite pase por los puntos de fuga de los lados (intersección de lados opuestos) y buscando perpendicularidad en el vértice V",
        incorrectas: [
            "Midiendo los lados",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Qué conserva la Afinidad?",
        correcta: "Paralelismo, razón simple de 3 puntos alineados y razón de áreas; NO conserva ángulos ni ortogonalidad",
        incorrectas: [
            "Ángulos y distancias",
            "Todo igual"
        ]
    },
    {
        enunciado: "¿Qué es la 'homología inversa'?",
        correcta: "Cuando el centro y el eje separan las figuras de forma cruzada... (mismo concepto)",
        incorrectas: [
            "Ir hacia atrás",
            "Deshacer el dibujo"
        ]
    },
    {
        enunciado: "¿Cómo se halla el homólogo de un punto P dado?",
        correcta: "Uniendo P con V (rayo) y usando dos puntos auxiliares en el eje para trazar rectas homólogas que se corten en el rayo",
        incorrectas: [
            "Midiendo la distancia",
            "A ojo"
        ]
    },
    {
        enunciado: "¿Qué es el 'Teorema de Desargues'?",
        correcta: "Dos triángulos son homológicos (perspectivos desde un punto) si y solo si las intersecciones de sus lados homólogos están alineadas (perspectivos desde una recta/eje)",
        incorrectas: [
            "Teorema de Pitágoras",
            "Suma de ángulos"
        ]
    },
    {
        enunciado: "¿Qué es una 'Involución'?",
        correcta: "Homografía que aplicada dos veces es la identidad (A se transforma en A' y A' en A)",
        incorrectas: [
            "Ir hacia atrás en evolución",
            "Una curva"
        ]
    },
    {
        enunciado: "¿La 'Simetría Axial' es una homología?",
        correcta: "Sí, es una homología armónica (involutiva) de centro impropio (dirección perpendicular al eje) y eje la recta de simetría",
        incorrectas: [
            "No, es métrica",
            "Es un giro"
        ]
    },
    {
        enunciado: "¿Cuál es la 'Dirección de Afinidad'?",
        correcta: "La dirección paralela de las rectas que unen puntos afines (A-A')",
        incorrectas: [
            "El eje",
            "La perpendicular"
        ]
    },
    {
        enunciado: "¿La 'Afinidad Ortogonal' tiene dirección...?",
        correcta: "Perpendicular al Eje de afinidad",
        incorrectas: [
            "Paralela al eje",
            "45 grados"
        ]
    },
    {
        enunciado: "¿Cómo se transforma una circunferencia en homología general?",
        correcta: "En una cónica (elipse, parábola o hipérbola) dependiendo de si la recta límite corta, toca o es exterior a la circunferencia",
        incorrectas: [
            "Siempre otra circunferencia",
            "Un cuadrado"
        ]
    },
    {
        enunciado: "¿Cómo se transforma una circunferencia en afinidad?",
        correcta: "Siempre en una Elipse",
        incorrectas: [
            "En parábola",
            "En recta"
        ]
    },
    {
        enunciado: "¿Si la Recta Límite es exterior a la circunferencia, la homóloga es...?",
        correcta: "Una Elipse (ningún punto del infinito)",
        incorrectas: [
            "Hipérbola",
            "Parábola"
        ]
    },
    {
        enunciado: "¿Si la Recta Límite es tangente a la circunferencia, la homóloga es...?",
        correcta: "Una Parábola (un punto impropio)",
        incorrectas: [
            "Elipse",
            "Hipérbola"
        ]
    },
    {
        enunciado: "¿Si la Recta Límite corta a la circunferencia, la homóloga es...?",
        correcta: "Una Hipérbola (dos puntos impropios/asíntotas)",
        incorrectas: [
            "Elipse",
            "Círculo"
        ]
    },
    {
        enunciado: "¿Qué es el 'eje de la homografía'?",
        correcta: "Lugar de puntos dobles en una transformación entre rectas superpuestas...",
        incorrectas: [
            "Eje de simetría",
            "La altura"
        ]
    },
    {
        enunciado: "¿Para qué sirve la homología en Dibujo Técnico?",
        correcta: "Para resolver problemas de secciones planas (relación base-sección), perspectivas y rectificación de planos",
        incorrectas: [
            "Para nada",
            "Para pintar"
        ]
    },
    {
        enunciado: "¿Qué es el 'abatimiento' desde el punto de vista proyectivo?",
        correcta: "Una homología (o afinidad) que relaciona la forma proyectada con la forma real abatida sobre un plano",
        incorrectas: [
            "Tirar la figura",
            "Giro de 90 grados simple"
        ]
    },
    {
        enunciado: "¿La perspectiva cónica es una aplicación de...?",
        correcta: "La Homología espacial (proyección central)",
        incorrectas: [
            "La Afinidad",
            "La Isometría"
        ]
    },
    {
        enunciado: "¿Qué son 'haces proyectivos'?",
        correcta: "Conjunto de rectas que pasan por un punto (v); si se cortan por una recta, la cuaterna es proyectiva",
        incorrectas: [
            "Rayos láser",
            "Haces de leña"
        ]
    },
    {
        enunciado: "¿Qué es una homología de 'eje impropio'?",
        correcta: "Una Homotecia (o traslación); el eje está en el infinito",
        incorrectas: [
            "Afinidad",
            "Inversión"
        ]
    },
    {
        enunciado: "¿Cómo determinar una homología?",
        correcta: "Con Centro, Eje y un par de puntos homólogos (o Recta Límite)",
        incorrectas: [
            "Con un solo punto",
            "Con colores"
        ]
    },
    {
        enunciado: "¿Si V está en el Eje, la homología se llama...?",
        correcta: "Homología especial o elación (muy degenerada)",
        incorrectas: [
            "Afinidad",
            "Normal"
        ]
    },
    {
        enunciado: "¿Qué es el 'Punto de Fuga' en términos de homología?",
        correcta: "El homólogo de un punto impropio (intersección de la recta con la Recta Límite RL)",
        incorrectas: [
            "Un punto cualquiera",
            "V"
        ]
    },
    {
        enunciado: "¿Las rectas que pasan por el Centro de homología son...?",
        correcta: "Rectas dobles (coinciden con sus homólogas)",
        incorrectas: [
            "Paralelas",
            "Perpendiculares"
        ]
    },
    {
        enunciado: "¿Qué es la 'proyectividad'?",
        correcta: "Correspondencia biunívoca que conserva la razón doble",
        incorrectas: [
            "Proyectar sombra",
            "Dibujar"
        ]
    },
    {
        enunciado: "¿Las 'rectas paralelas' en la figura original se transforman en...?",
        correcta: "Rectas concurrentes en un punto de fuga (en la Recta Límite')",
        incorrectas: [
            "Paralelas siempre",
            "Curvas"
        ]
    },
    {
        enunciado: "¿La homología conserva la 'convexidad'?",
        correcta: "Sí, si la figura no corta a la Recta Límite; si la corta, la figura se abre (parte al infinito)",
        incorrectas: [
            "No, nunca",
            "A veces"
        ]
    },
    {
        enunciado: "¿La 'razón de afinidad' (k) es...?",
        correcta: "La relación constante entre las distancias de un par de puntos al eje (distancia A'-Eje / distancia A-Eje)",
        incorrectas: [
            "El ángulo de giro",
            "El área"
        ]
    }
];
