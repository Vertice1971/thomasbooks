var PREGUNTAS = [
    {
        enunciado: "¿Qué es una 'Superficie Radiada'?",
        correcta: "Superficie generada por una recta (generatriz) que se mueve pasando siempre por un punto fijo (vértice) y apoyándose en una curva base (directriz)",
        incorrectas: [
            "Superficie que emite radiación",
            "Un círculo"
        ]
    },
    {
        enunciado: "¿Cuáles son los tipos principales de superficies radiadas?",
        correcta: "Pirámides (base poligonal) y Conos (base curva)",
        incorrectas: [
            "Prismas y Cilindros (son cilíndricas, vértice en infinito)",
            "Esferas"
        ]
    },
    {
        enunciado: "¿Qué es una Superficie Cónica?",
        correcta: "Superficie radiada engendrada por una recta que pasa por un vértice y recorre una directriz curva",
        incorrectas: [
            "Un cono de helado",
            "Una esfera"
        ]
    },
    {
        enunciado: "¿Qué es una Superficie Piramidal?",
        correcta: "Poliedro radiado; la directriz es un polígono",
        incorrectas: [
            "Una pirámide de Egipto",
            "Un cubo"
        ]
    },
    {
        enunciado: "¿Qué es un 'desarrollo' de una superficie?",
        correcta: "Desplegar la superficie sobre un plano de manera que se conserven las distancias (transformada isométrica) para poder fabricarla (calderería)",
        incorrectas: [
            "Hacerla más grande",
            "Romperla"
        ]
    },
    {
        enunciado: "¿Son desarrollables todas las superficies radiadas?",
        correcta: "Sí, conos y pirámides son desarrollables (se pueden aplanar sin arrugas ni roturas)",
        incorrectas: [
            "No, ninguna",
            "Solo las pirámides"
        ]
    },
    {
        enunciado: "¿Cómo se halla la sección plana de una pirámide?",
        correcta: "Hallando la intersección de las aristas laterales con el plano secante (vértices de la sección) o intersección de caras",
        incorrectas: [
            "A ojo",
            "Cortando con tijeras"
        ]
    },
    {
        enunciado: "¿Qué es el método de 'intersección de aristas'?",
        correcta: "Considerar cada arista como una recta y hallar su punto de corte con el plano secante",
        incorrectas: [
            "Dibujar líneas",
            "Usar esferas"
        ]
    },
    {
        enunciado: "¿Cómo se desarrolla una pirámide recta?",
        correcta: "Trazando arcos con el radio igual a la verdadera magnitud de la arista lateral (generatriz) y llevando las cuerdas de los lados de la base",
        incorrectas: [
            "Dibujando triángulos al azar",
            "Como un rectángulo"
        ]
    },
    {
        enunciado: "¿Cómo se desarrolla un cono recto?",
        correcta: "Es un sector circular cuyo radio es la generatriz (g) y la longitud del arco es el perímetro de la base (2πr)",
        incorrectas: [
            "Un triángulo",
            "Un círculo completo"
        ]
    },
    {
        enunciado: "¿Cuál es el ángulo del sector circular del desarrollo del cono?",
        correcta: "alfa = (r / g) · 360º",
        incorrectas: [
            "Siempre 90º",
            "360º"
        ]
    },
    {
        enunciado: "¿Cómo se desarrolla una pirámide oblicua?",
        correcta: "Hallando la verdadera magnitud de cada arista lateral una a una (triangulación) y dibujando caras adyacentes plano a plano",
        incorrectas: [
            "Igual que la recta",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Qué es la 'transformada' de la sección en el desarrollo?",
        correcta: "La línea quebrada o curva dibujada sobre el desarrollo que corresponde al corte producido por el plano",
        incorrectas: [
            "La sección real",
            "La sombra"
        ]
    },
    {
        enunciado: "¿Cómo se llevan los puntos de la sección al desarrollo?",
        correcta: "Llevando la verdadera magnitud de la distancia desde el vértice al punto de corte sobre la arista correspondiente en el desarrollo",
        incorrectas: [
            "Midiendo en el alzado directamente",
            "A ojo"
        ]
    },
    {
        enunciado: "¿Qué sección produce un plano paralelo a la base en un cono de revolución?",
        correcta: "Una circunferencia (homotética a la base)",
        incorrectas: [
            "Una elipse",
            "Una parábola"
        ]
    },
    {
        enunciado: "¿Qué sección produce un plano que corta a todas las generatrices en un cono?",
        correcta: "Una elipse cerrada",
        incorrectas: [
            "Hipérbola",
            "Parábola"
        ]
    },
    {
        enunciado: "¿Qué sección produce un plano paralelo a una generatriz?",
        correcta: "Una Parábola",
        incorrectas: [
            "Elipse",
            "Hipérbola"
        ]
    },
    {
        enunciado: "¿Qué sección produce un plano paralelo a dos generatrices (o al eje pero cortando)?",
        correcta: "Una Hipérbola",
        incorrectas: [
            "Elipse",
            "Parábola"
        ]
    },
    {
        enunciado: "¿Qué es el 'Tronco de Cono'?",
        correcta: "Parte del cono comprendida entre la base y un plano secante (generalmente paralelo); su desarrollo es un trapecio circular",
        incorrectas: [
            "Un cono roto",
            "Un cilindro"
        ]
    },
    {
        enunciado: "¿Qué es la 'línea geodésica' en el desarrollo?",
        correcta: "La línea más corta entre dos puntos sobre la superficie; en el desarrollo se convierte en una recta",
        incorrectas: [
            "Una curva compleja",
            "La altura"
        ]
    },
    {
        enunciado: "¿Para desarrollar un cono oblicuo se usa el método de...?",
        correcta: "Triangulación (aproximando el cono por una pirámide de muchos lados)",
        incorrectas: [
            "Sector circular exacto",
            "Esferas"
        ]
    },
    {
        enunciado: "¿Qué es la 'sección recta'?",
        correcta: "La producida por un plano perpendicular al eje; útil en prismas y cilindros, no tanto en conos (salvo revolución)",
        incorrectas: [
            "Corte vertical",
            "Base"
        ]
    },
    {
        enunciado: "¿Cómo se halla la VM de las generatrices en cono oblicuo?",
        correcta: "Girándolas alrededor del eje vertical del cono hasta ponerlas frontales (o por abatimiento)",
        incorrectas: [
            "Midiendo en planta",
            "Midiendo en alzado"
        ]
    },
    {
        enunciado: "¿Qué es el 'teorema de Dandelin'?",
        correcta: "Relaciona las secciones cónicas con esferas tangentes al cono y al plano secante (focos de la cónica)",
        incorrectas: [
            "Teorema de Pitágoras",
            "Teorema de Tales"
        ]
    },
    {
        enunciado: "¿El desarrollo de una superficie incluye las bases?",
        correcta: "Generalmente sí, para cerrar el sólido, se añaden pegadas a uno de los lados/curva bajo el desarrollo lateral",
        incorrectas: [
            "No, solo lateral",
            "Nunca"
        ]
    },
    {
        enunciado: "¿Qué es una 'tolva'?",
        correcta: "Estructura (troncopiramidal o cónica) para canalizar materiales; su diseño requiere desarrollo de superficies radiadas",
        incorrectas: [
            "Un tubo recto",
            "Una caja"
        ]
    },
    {
        enunciado: "¿Qué es la 'transición' (calderería)?",
        correcta: "Pieza que une dos bocas de diferente forma (ej. cuadrado a círculo); suele ser superficie radiada o triangulada",
        incorrectas: [
            "Un cambio de fase",
            "Un codo"
        ]
    },
    {
        enunciado: "¿Cómo se define la generatriz de contorno aparente?",
        correcta: "La que separa la zona vista de la oculta; es tangente al rayo visual (punto de tangencia en la base)",
        incorrectas: [
            "La del centro",
            "La altura"
        ]
    },
    {
        enunciado: "¿En diédrico, el contorno aparente vertical de un cono recto es...?",
        correcta: "Un triángulo isósceles",
        incorrectas: [
            "Un círculo",
            "Un cuadrado"
        ]
    },
    {
        enunciado: "¿Si el vértice de la pirámide es impropio, se convierte en...?",
        correcta: "Un Prisma (superficie radiada de vértice infinito = cilíndrica/prismática)",
        incorrectas: [
            "No existe",
            "Un plano"
        ]
    },
    {
        enunciado: "¿Qué es la 'plantilla' de desarrollo?",
        correcta: "El dibujo del desarrollo en papel/chapa listo para cortar y plegar",
        incorrectas: [
            "Un zapato",
            "Una escuadra"
        ]
    },
    {
        enunciado: "¿Para hallar la intersección de recta y cono se usa...?",
        correcta: "Plano que pasa por el vértice y la recta (corta en generatrices)",
        incorrectas: [
            "Plano horizontal",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Las generatrices de un cono son...?",
        correcta: "Infinitas rectas que pasan por V",
        incorrectas: [
            "Círculos",
            "Curvas"
        ]
    },
    {
        enunciado: "¿Qué es la 'homología' en la sección de pirámide?",
        correcta: "Relación entre la base y la sección plana (centro V, eje traza del plano)",
        incorrectas: [
            "No hay homología",
            "Semejanza"
        ]
    },
    {
        enunciado: "¿Un 'cono de luz' es...?",
        correcta: "Una superficie radiada imaginaria",
        incorrectas: [
            "Una lámpara",
            "Un cilindro"
        ]
    },
    {
        enunciado: "¿El desarrollo de la superficie lateral de un poliedro regular es...?",
        correcta: "Una sucesión de polígonos regulares unidos",
        incorrectas: [
            "Un círculo",
            "Una línea"
        ]
    },
    {
        enunciado: "¿Qué es 'abatir el cono'?",
        correcta: "Abatir la base y el vértice para trabajar en VM",
        incorrectas: [
            "Tirarlo",
            "Romperlo"
        ]
    },
    {
        enunciado: "¿Cómo se sabe la longitud real de una generatriz cualquiera?",
        correcta: "Girándola o por diferencia de cotas (triángulo rectángulo)",
        incorrectas: [
            "Midiendo en alzado",
            "Midiendo en planta"
        ]
    },
    {
        enunciado: "¿Los puntos de inflexión en desarrollos de transición aparecen en...?",
        correcta: "No tienen inflexión si son desarrollables convexas",
        incorrectas: [
            "Siempre",
            "En el medio"
        ]
    },
    {
        enunciado: "¿La 'rectificación' de la circunferencia base es necesaria para...?",
        correcta: "Calcular la longitud del arco total del desarrollo del cono",
        incorrectas: [
            "Dibujar el alzado",
            "Nada"
        ]
    }
];
