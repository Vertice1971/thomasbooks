var PREGUNTAS = [
    {
        enunciado: "¿Cómo se define un plano en perspectiva cónica?",
        correcta: "Mediante su recta límite (recta de fuga) y su traza con el plano del cuadro (o con el geometral)",
        incorrectas: [
            "Mediante dos puntos de fuga y el punto principal",
            "Por su ángulo de inclinación respecto al rayo principal"
        ]
    },
    {
        enunciado: "¿Qué determina la intersección de dos planos en el sistema cónico?",
        correcta: "La intersección de sus rectas límite (punto de fuga de la intersección) y la intersección de sus trazas (punto traza de la intersección)",
        incorrectas: [
            "La unión de los puntos métricos de ambos planos",
            "La intersección de sus líneas de tierra respectivas"
        ]
    },
    {
        enunciado: "¿Cómo se representa un prisma recto de base rectangular apoyado en el geometral en cónica oblicua?",
        correcta: "Las aristas horizontales fugan a dos puntos F y F' en el horizonte; las verticales se mantienen perpendiculares a la línea de tierra",
        incorrectas: [
            "Las aristas verticales fugan al punto principal P",
            "Todas las aristas fugan a un único punto central"
        ]
    },
    {
        enunciado: "¿Para hallar la intersección de una recta vertical con un plano oblicuo se utiliza...",
        correcta: "Un plano auxiliar vertical que contenga a la recta y pase por el punto de vista (su traza fuga al mismo punto que la recta límite del plano)",
        incorrectas: [
            "Un plano horizontal que corte a la recta a una altura arbitraria",
            "La proyección ortogonal de la recta sobre el geometral"
        ]
    },
    {
        enunciado: "¿Cuál es la apariencia de una circunferencia situada en un plano vertical perpendicular al cuadro (cónica frontal)?",
        correcta: "Una elipse cuyo eje mayor suele estar inclinado, salvo que la circunferencia esté centrada en el rayo principal",
        incorrectas: [
            "Siempre es un segmento vertical de longitud igual al diámetro",
            "Una circunferencia perfecta de menor tamaño"
        ]
    },
    {
        enunciado: "¿Cómo se obtiene la sección de una pirámide por un plano paralelo al geometral?",
        correcta: "Es una figura homotética a la base con centro de homotecia en la proyección del vértice de la pirámide (fugado o no)",
        incorrectas: [
            "Es una figura idéntica a la base desplazada verticalmente",
            "Es siempre un cuadrado independientemente de la base"
        ]
    },
    {
        enunciado: "¿Cómo se determina la intersección de una recta cualquiera con una esfera en cónica?",
        correcta: "Utilizando un plano que pase por el centro de proyección (V) y la recta, que cortará a la esfera en un círculo menor",
        incorrectas: [
            "Trazando tangentes desde los extremos de la recta",
            "Proyectando la recta sobre el ecuador de la esfera"
        ]
    },
    {
        enunciado: "¿Para dibujar un cono en perspectiva cónica, las generatrices del contorno aparente son...",
        correcta: "Las tangentes a la elipse de la base trazadas desde la proyección del vértice",
        incorrectas: [
            "Las líneas que unen el vértice con los extremos del diámetro horizontal de la base",
            "Las generatrices perpendiculares a la línea de tierra"
        ]
    },
    {
        enunciado: "¿Qué sucede con las líneas de pendiente de una escalera recta?",
        correcta: "Fugan a un punto situado en la vertical del punto de fuga de la dirección horizontal de la escalera (arriba o abajo del horizonte)",
        incorrectas: [
            "Fugan todas al punto principal P",
            "Son paralelas entre sí y no tienen punto de fuga"
        ]
    },
    {
        enunciado: "¿Cómo se resuelve la intersección de dos tejados a dos aguas con la misma pendiente?",
        correcta: "Las aristas de intersección (limas) fugan a puntos que se encuentran en la vertical de las intersecciones de las rectas de fuga horizontales",
        incorrectas: [
            "Las limas son siempre paralelas al plano del cuadro",
            "Se resuelven trazando bisectrices en el dibujo sin fugar"
        ]
    },
    {
        enunciado: "¿El 'método de los planos visuales' para intersecciones consiste en...",
        correcta: "Hacer pasar planos por el punto de vista y las aristas del objeto para ver dónde cortan a la otra superficie",
        incorrectas: [
            "Utilizar planos paralelos al cuadro exclusivamente",
            "Asumir que todas las intersecciones son planas"
        ]
    },
    {
        enunciado: "¿La sombra propia de un objeto en cónica se determina...",
        correcta: "Hallando la silueta del objeto respecto al foco de luz (tangencia de rayos luminosos)",
        incorrectas: [
            "Oscureciendo las caras que no se ven desde el punto de vista",
            "Trazando líneas verticales desde los vértices superiores"
        ]
    },
    {
        enunciado: "¿El punto de fuga de las sombras de rectas verticales sobre el suelo con luz solar lateral es...",
        correcta: "La intersección del rayo solar que pasa por el punto de vista con la línea de horizonte",
        incorrectas: [
            "El mismo punto de fuga que las rectas horizontales del objeto",
            "Siempre el punto principal P"
        ]
    },
    {
        enunciado: "¿Qué es el 'reflejo' de un objeto en un espejo horizontal (suelo brillante)?",
        correcta: "Una imagen simétrica invertida donde los puntos fugan a los mismos puntos de fuga que el objeto original (si son horizontales)",
        incorrectas: [
            "Una imagen desplazada lateralmente según el ángulo de visión",
            "Una proyección ortogonal del objeto sobre el suelo"
        ]
    },
    {
        enunciado: "¿Cómo se representa un arco de medio punto situado en un plano fugado?",
        correcta: "Inscribiéndolo en un rectángulo fugado y trazando la elipse correspondiente (cuartos de elipse)",
        incorrectas: [
            "Utilizando el compás con centro en el punto medio de la cuerda fugada",
            "Como una parábola con vértice en la clave"
        ]
    },
    {
        enunciado: "¿La 'retícula perspectiva' se utiliza fundamentalmente para...",
        correcta: "Situar elementos en profundidad de forma proporcionada sin medir continuamente, basándose en la repetición modular",
        incorrectas: [
            "Decorar el suelo de los dibujos arquitectónicos",
            "Calcular la resistencia de los materiales representados"
        ]
    },
    {
        enunciado: "¿Para hallar el centro geométrico de una cara rectangular fugada se debe...",
        correcta: "Trazar las diagonales de la cara en perspectiva",
        incorrectas: [
            "Medir la mitad de los lados con la regla y unir los puntos",
            "Trazar una perpendicular desde el punto de fuga al lado opuesto"
        ]
    },
    {
        enunciado: "¿La división en profundidad de elementos repetitivos (postes) se realiza mediante...",
        correcta: "El método de las diagonales o punto de fuga de la diagonal de los rectángulos formados",
        incorrectas: [
            "La división aritmética de la distancia total en el dibujo",
            "La proyección de una escala graduada vertical"
        ]
    },
    {
        enunciado: "¿La perspectiva de interior suele utilizarse para...",
        correcta: "Representar espacios arquitectónicos mostrando tres paredes (frontal y laterales), suelo y techo",
        incorrectas: [
            "Dibujar objetos aislados en el vacío",
            "Hacer planos de planta técnicos"
        ]
    },
    {
        enunciado: "¿Un plano inclinado ascendente tiene su recta límite (recta de fuga)...",
        correcta: "Por encima de la línea de horizonte",
        incorrectas: [
            "Por debajo de la línea de horizonte",
            "Coincidente con la línea de tierra"
        ]
    },
    {
        enunciado: "¿La intersección de dos cilindros de distinto diámetro (cruzados) genera...",
        correcta: "Curvas alabeadas de cuarto orden (bi-cuadráticas)",
        incorrectas: [
            "Elipses planas perfectas",
            "Segmentos rectilíneos"
        ]
    },
    {
        enunciado: "¿Una superficie reglada alabeada (ej. paraboloide hiperbólico) en cónica se representa...",
        correcta: "Mediante una red de generatrices rectas que van cambiando de dirección progresivamente",
        incorrectas: [
            "Como una superficie esférica uniforme",
            "Mediante polígonos planos superpuestos"
        ]
    },
    {
        enunciado: "¿En el reflejo sobre un espejo vertical frontal (fondo), la profundidad aparente...",
        correcta: "Se duplica hacia 'dentro' del espejo, fugando al punto principal",
        incorrectas: [
            "Se anula, viéndose todo en el plano del espejo",
            "Se invierte lateralmente pero no en profundidad"
        ]
    },
    {
        enunciado: "¿Las 'líneas de isofota' en sombreado cónico representan...",
        correcta: "Líneas de igual intensidad lumínica sobre una superficie curva (útil en renderizado, menos en dibujo técnico lineal)",
        incorrectas: [
            "Las aristas ocultas del objeto",
            "Las líneas de contorno aparente"
        ]
    },
    {
        enunciado: "¿Cómo se dibuja un pentágono regular apoyado en el suelo en cónica?",
        correcta: "Abatiendo el plano del suelo, dibujando el pentágono en verdadera magnitud y desabatiendo los vértices por homología",
        incorrectas: [
            "Dibujando cinco lados iguales con el compás directamente en perspectiva",
            "Aproximándolo mediante una elipse inscrita"
        ]
    },
    {
        enunciado: "¿La imagen de una recta paralela al plano del cuadro es...",
        correcta: "Paralela a la propia recta original (no fuga), aunque su tamaño varía con la profundidad",
        incorrectas: [
            "Una recta que fuga al punto principal P",
            "Una curva cónica"
        ]
    },
    {
        enunciado: "¿Para dibujar circunferencias tangentes en perspectiva se debe cumplir que...",
        correcta: "Sus elipses representativas sean tangentes en el punto de contacto perspectivo (que no siempre es el de tangencia geométrica de las elipses)",
        incorrectas: [
            "Los ejes mayores de las elipses estén alineados",
            "Sean siempre círculos perfectos"
        ]
    },
    {
        enunciado: "¿El 'método de los puntos métricos' permite...",
        correcta: "Medir longitudes reales sobre rectas fugantes sin necesidad de abatir toda la planta",
        incorrectas: [
            "Calcular el volumen del sólido representado",
            "Determinar el color de las caras"
        ]
    },
    {
        enunciado: "¿Cómo se determina la visibilidad en una intersección de sólidos?",
        correcta: "Analizando la posición relativa de las caras que se cortan y determinando qué volumen está más próximo al observador",
        incorrectas: [
            "Suponiendo siempre que el objeto de la izquierda tapa al de la derecha",
            "Dibujando todas las líneas con el mismo grosor"
        ]
    },
    {
        enunciado: "¿Qué es el 'toro' o moldura tórica en cónica?",
        correcta: "Superficie de revolución generada por una circunferencia que gira alrededor de un eje coplanario exterior; su contorno cambia complejamante",
        incorrectas: [
            "Una pirámide de base cuadrada",
            "Un cubo deformado"
        ]
    },
    {
        enunciado: "¿La restitución de un pavimento de baldosas cuadradas se basa en...",
        correcta: "La convergencia de las líneas de juntas en puntos de fuga y la alineación de diagonales",
        incorrectas: [
            "Medir el tamaño de las baldosas en la imagen sin más",
            "Asumir que son rectángulos áureos"
        ]
    },
    {
        enunciado: "¿Qué es un 'punto de fuga accidental'?",
        correcta: "Punto de fuga de direcciones oblicuas no principales (ni paralelas ni perpendiculares cuadro)",
        incorrectas: [
            "Un punto de fuga erróneo",
            "El punto principal P"
        ]
    },
    {
        enunciado: "¿La sección de un cono por un plano que pasa por el vértice es...",
        correcta: "Un triángulo (par de generatrices)",
        incorrectas: [
            "Una elipse",
            "Una parábola"
        ]
    },
    {
        enunciado: "¿En perspectiva cónica, el tamaño de los objetos...",
        correcta: "Disminuye inversamente proporcional a su distancia al punto de vista",
        incorrectas: [
            "Disminuye exponencialmente con la distancia",
            "Se mantiene constante independientemente de la distancia"
        ]
    },
    {
        enunciado: "¿Qué son los 'planos desvanecientes'?",
        correcta: "Planos que pasan por el centro de proyección y son paralelos a las caras del objeto; sus intersecciones con el cuadro dan las rectas de fuga",
        incorrectas: [
            "Planos que se borran con la goma",
            "Los planos de las caras ocultas"
        ]
    },
    {
        enunciado: "¿La fotogrametría utiliza los principios de...",
        correcta: "La geometría proyectiva y la visión estereoscópica para reconstruir el espacio 3D",
        incorrectas: [
            "La perspectiva axonométrica ortogonal exclusivamente",
            "El dibujo artístico libre"
        ]
    }
];
