var PREGUNTAS = [
    {
        enunciado: "¿Qué se entiende por 'forma' en el ámbito de la teoría del arte y el diseño?",
        correcta: "La determinación exterior de la materia, siendo el conjunto de líneas y superficies que determinan el contorno o volumen de un objeto",
        incorrectas: [
            "La apariencia cromática de un objeto independientemente de su estructura",
            "El contenido conceptual y simbólico que el artista intenta transmitir"
        ]
    },
    {
        enunciado: "¿Cuál es la diferencia fundamental entre 'forma cerrada' y 'forma abierta' según Wölfflin?",
        correcta: "La forma cerrada es tectónica y delimita claramente el espacio, mientras que la abierta es a-tectónica y se integra con el espacio circundante",
        incorrectas: [
            "La forma cerrada se usa solo en arquitectura y la abierta en pintura",
            "La forma cerrada no permite el uso de colores cálidos, a diferencia de la abierta"
        ]
    },
    {
        enunciado: "¿Qué ley de la Gestalt explica que tendemos a percibir como una unidad los elementos que se mueven en la misma dirección?",
        correcta: "Ley del destino común",
        incorrectas: [
            "Ley de la continuidad",
            "Ley de la experiencia"
        ]
    },
    {
        enunciado: "¿Cómo se define el 'ritmo' en una composición plástica?",
        correcta: "La repetición ordenada de elementos visuales (líneas, formas, colores) en el espacio compositivo, generando una sensación de movimiento",
        incorrectas: [
            "La ausencia total de repetición para evitar la monotonía visual",
            "El uso exclusivo de líneas curvas para simular ondas sonoras"
        ]
    },
    {
        enunciado: "¿Qué es el 'peso visual' en una composición?",
        correcta: "La capacidad de un elemento para atraer la atención del espectador, influenciada por su tamaño, color, posición y textura",
        incorrectas: [
            "La masa física real de los pigmentos aplicados sobre el lienzo",
            "La medida en gramos de la escultura representada"
        ]
    },
    {
        enunciado: "¿Qué tipo de equilibrio se produce cuando los elementos se distribuyen de manera desigual a ambos lados del eje, pero se compensan visualmente?",
        correcta: "Equilibrio asimétrico u oculto",
        incorrectas: [
            "Equilibrio axial o especular",
            "Equilibrio estático absoluto"
        ]
    },
    {
        enunciado: "¿Qué es la Sección Áurea y cuál es su valor aproximado (φ)?",
        correcta: "Una proporción geométrica donde la relación entre la parte mayor y la menor es igual a la relación entre el todo y la parte mayor (1,618)",
        incorrectas: [
            "Una regla de composición fotográfica basada en dividir la imagen en nueve partes iguales (1,333)",
            "Un sistema de medidas antropométricas basado en el pie humano (1,500)"
        ]
    },
    {
        enunciado: "¿En qué consiste la 'tensión' visual en una composición?",
        correcta: "Fuerza perceptiva que genera inestabilidad o dinamismo, provocada por la ubicación de elementos fuera de los ejes principales o por contrastes",
        incorrectas: [
            "El estrés que siente el artista al realizar la obra",
            "La rigidez del soporte sobre el que se pinta"
        ]
    },
    {
        enunciado: "¿Qué autor estableció los conceptos de 'punto, línea y plano' como elementos básicos de la composición en su obra homónima?",
        correcta: "Wassily Kandinsky",
        incorrectas: [
            "Piet Mondrian",
            "Paul Klee"
        ]
    },
    {
        enunciado: "¿Qué es el 'espacio negativo' en una composición?",
        correcta: "El espacio vacío alrededor y entre los sujetos de una imagen, que define y delimita las formas positivas",
        incorrectas: [
            "Una zona del cuadro pintada exclusivamente en negro",
            "El área de la obra que el artista decidió borrar"
        ]
    },
    {
        enunciado: "¿Qué se entiende por 'direccionalidad' en una forma?",
        correcta: "La proyección visual de una forma hacia un punto o zona, determinada por sus ejes dominantes o su contorno",
        incorrectas: [
            "La ubicación geográfica hacia donde mira la escultura",
            "La instrucción escrita de cómo debe colgarse el cuadro"
        ]
    },
    {
        enunciado: "¿Cuál es la función del 'centro de interés' o 'punto focal' en una obra?",
        correcta: "Jerarquizar la lectura de la imagen atrayendo la mirada del espectador hacia la zona más relevante",
        incorrectas: [
            "Dividir la obra en dos mitades exactamente iguales",
            "Ocultar los errores técnicos en las zonas periféricas"
        ]
    },
    {
        enunciado: "¿Qué define a una composición 'estática'?",
        correcta: "El predominio de líneas horizontales y verticales, simetría y equilibrio estable, sugiriendo reposo y permanencia",
        incorrectas: [
            "Aquella que representa objetos que no se mueven en la vida real",
            "Una obra que ha sido fijada con barniz para que no se deteriore"
        ]
    },
    {
        enunciado: "¿Qué es el 'esquema compositivo'?",
        correcta: "La estructura subyacente de líneas maestras (reales o sugeridas) que organiza la distribución de los elementos en el plano",
        incorrectas: [
            "El boceto previo en papel sucio que se tira después",
            "La lista de materiales necesarios para ejecutar la obra"
        ]
    },
    {
        enunciado: "¿Qué aporta el uso de 'diagonales' en una composición?",
        correcta: "Dinamismo, profundidad y tensión, rompiendo la estabilidad de las verticales y horizontales",
        incorrectas: [
            "Calma absoluta y sensación de eternidad",
            "Plenitud y cierre de la forma circular"
        ]
    },
    {
        enunciado: "¿A qué se refiere el término 'modulación' en la composición modular?",
        correcta: "Al uso de un módulo o unidad básica que se repite y combina sistemáticamente para generar una estructura compleja",
        incorrectas: [
            "Al cambio de tono de voz al explicar la obra",
            "A la mezcla gradual de colores en una paleta"
        ]
    },
    {
        enunciado: "¿Qué es el 'contraste' como principio compositivo?",
        correcta: "La diferencia notable entre dos o más elementos (tamaño, color, textura) que potencia su visibilidad mutua",
        incorrectas: [
            "La armonía perfecta donde todos los elementos son idénticos",
            "La técnica de revelar fotografías en cuarto oscuro"
        ]
    },
    {
        enunciado: "¿En qué consiste la Ley de la Balanza en composición?",
        correcta: "Es un esquema de equilibrio axial donde un elemento principal se sitúa en el centro y otros de menor peso se equilibran a los lados",
        incorrectas: [
            "En pesar el lienzo antes y después de pintarlo",
            "En usar una balanza real como parte de una instalación artística"
        ]
    },
    {
        enunciado: "¿Qué es la 'jerarquía' visual?",
        correcta: "La ordenación de los elementos según su importancia, guiando el recorrido visual del espectador de lo principal a lo secundario",
        incorrectas: [
            "La clasificación de los artistas según su éxito comercial",
            "La altura a la que se debe colgar un cuadro en la pared"
        ]
    },
    {
        enunciado: "¿Qué es una composición 'abierta'?",
        correcta: "Aquella que sugiere que la escena continúa más allá de los límites del marco, expandiendo el espacio representado",
        incorrectas: [
            "Una obra que no tiene marco físico",
            "Un cuadro que cualquier persona puede terminar de pintar"
        ]
    },
    {
        enunciado: "¿Qué relación existe entre 'proporción' y 'escala'?",
        correcta: "La proporción es la relación de las partes entre sí y con el todo, mientras que la escala es la relación del objeto con un patrón externo (generalmente humano)",
        incorrectas: [
            "Son sinónimos exactos y se pueden usar indistintamente",
            "La proporción se usa solo en dibujo técnico y la escala en escultura"
        ]
    },
    {
        enunciado: "¿Qué es el 'ritmo progresivo'?",
        correcta: "Aquel donde el módulo o elemento varía gradualmente en tamaño, color o forma en cada repetición (crescendo o diminuendo)",
        incorrectas: [
            "Un ritmo musical que acompaña a la creación artística",
            "La repetición exacta e invariable de un patrón"
        ]
    },
    {
        enunciado: "¿Qué efecto produce la ubicación de un objeto en la parte superior el campo visual frente a la inferior?",
        correcta: "Suele percibirse como más ligero, etéreo o lejano, frente a la pesadez y cercanía de lo inferior (ley de la gravedad visual)",
        incorrectas: [
            "No hay ninguna diferencia perceptiva",
            "Los objetos superiores siempre parecen más pequeños que los inferiores idénticos"
        ]
    },
    {
        enunciado: "¿Qué es la 'simetría radial'?",
        correcta: "Organización de elementos alrededor de un punto central, disponiéndose como radios de una circunferencia (ej. mandalas, rosetones)",
        incorrectas: [
            "La simetría que se ve en la radio de un coche",
            "La repetición lineal de elementos a lo largo de una recta"
        ]
    },
    {
        enunciado: "¿Qué es la 'superposición' o 'traslapo' y qué genera en la composición?",
        correcta: "La colocación de una forma parcialmente sobre otra, generando sensación de profundidad espacial y orden visual",
        incorrectas: [
            "Pintar dos cuadros uno encima del otro para ahorrar lienzo",
            "Error de imprenta donde las tintas se mezclan mal"
        ]
    },
    {
        enunciado: "¿Qué se entiende por 'textura visual' frente a 'textura táctil'?",
        correcta: "La textura visual es bidimensional y se percibe solo por el ojo (simulada), mientras que la táctil posee relieve físico real",
        incorrectas: [
            "La textura visual solo existe en el videoarte",
            "La textura táctil es aquella que se describe con palabras"
        ]
    },
    {
        enunciado: "¿Qué es el 'cerramiento' compositivo?",
        correcta: "Recursos gráficos que evitan que la mirada del espectador salga del formato, devolviéndola al centro de interés",
        incorrectas: [
            "Poner un cristal delante del cuadro",
            "La firma del autor al final de la obra"
        ]
    },
    {
        enunciado: "¿Qué caracteriza a una composición 'dinámica'?",
        correcta: "El uso de diagonales, curvas, asimetría y ritmos complejos que sugieren movimiento y energía",
        incorrectas: [
            "El uso de motores eléctricos en la escultura",
            "Que el cuadro cambia de color según la temperatura"
        ]
    },
    {
        enunciado: "¿Qué es la 'regla de los tercios'?",
        correcta: "Guía de composición que divide la imagen en una cuadrícula de 3x3, situando los puntos de interés en las intersecciones",
        incorrectas: [
            "Una norma que obliga a usar solo tres colores",
            "La división del coste de la obra en tres pagos"
        ]
    },
    {
        enunciado: "¿Qué relación hay entre 'forma' y 'contenido'?",
        correcta: "Son indisolubles; la forma es el medio material y estructural a través del cual se manifiesta y comunica el contenido o significado",
        incorrectas: [
            "La forma es lo importante, el contenido es irrelevante en arte",
            "El contenido viene primero en una caja y la forma es el envoltorio"
        ]
    },
    {
        enunciado: "¿Qué es el 'polígono funicular' en el contexto del equilibrio físico y visual?",
        correcta: "Una estructura geométrica utilizada para determinar la resultante de un sistema de fuerzas y su línea de acción",
        incorrectas: [
            "Un polígono de cinco lados que representa el cuerpo humano",
            "Una atracción de feria con formas geométricas"
        ]
    },
    {
        enunciado: "¿Qué es un 'fractal' en relación con la forma natural?",
        correcta: "Un objeto geométrico cuya estructura básica, fragmentada o irregular, se repite a diferentes escalas (autosimilitud)",
        incorrectas: [
            "Una fractura en el mármol de una escultura",
            "Un estilo pictórico basado en romper los lienzos"
        ]
    },
    {
        enunciado: "¿Qué es el 'minimalismo' en términos de forma y composición?",
        correcta: "Corriente que busca la máxima expresividad con los mínimos medios, utilizando formas geométricas puras y estructuras simples",
        incorrectas: [
            "Arte realizado por personas muy pequeñas",
            "Pintar cuadros en miniatura de menos de 5cm"
        ]
    },
    {
        enunciado: "¿Qué papel juega el 'formato' en la composición?",
        correcta: "Condiciona la organización espacial; sus proporciones (cuadrado, apaisado, vertical) influyen en la tensión y dirección de la obra",
        incorrectas: [
            "Es irrelevante, el artista pinta igual sea cual sea el soporte",
            "El formato es solo el precio de la obra"
        ]
    },
    {
        enunciado: "¿Qué es 'anacemorfosis' o 'anamorfosis' visual?",
        correcta: "Una deformación reversible de una imagen producida mediante un procedimiento óptico, que se corrige desde un punto de vista determinado o con un espejo curvo",
        incorrectas: [
            "La pérdida de forma de un objeto por calor",
            "Un estilo de dibujo sin forma definida"
        ]
    },
    {
        enunciado: "¿Qué es el 'equilibrio de compensación de masas'?",
        correcta: "Lograr la estabilidad visual equilibrando un objeto grande y pesado con varios pequeños o situados más lejos del centro (ley de la palanca)",
        incorrectas: [
            "Intercambiar esculturas de bronce por otras de piedra",
            "Usar contrapesos físicos detrás del lienzo"
        ]
    },
    {
        enunciado: "¿Qué es la 'forma pregnante'?",
        correcta: "Aquella que es simple, regular, simétrica y fácil de recordar y reconocer por el cerebro",
        incorrectas: [
            "Una forma que representa a una mujer embarazada",
            "Una forma llena de detalles confusos y desordenados"
        ]
    },
    {
        enunciado: "¿Qué es el 'Rectángulo Áureo'?",
        correcta: "Aquel cuyos lados están en proporción divina (phi); si se le quita un cuadrado, el rectángulo restante mantiene la misma proporción",
        incorrectas: [
            "Un rectángulo de oro macizo",
            "Cualquier rectángulo que mida 10x20 cm"
        ]
    },
    {
        enunciado: "¿Qué implica la 'economía visual'?",
        correcta: "Usar solo los elementos necesarios para comunicar el mensaje de forma clara y directa, evitando el ruido visual superfluo",
        incorrectas: [
            "Comprar materiales de bellas artes baratos",
            "Vender las obras al menor precio posible"
        ]
    },
    {
        enunciado: "¿Qué es el 'eje sentido' en una forma asimétrica?",
        correcta: "Una línea imaginaria vertical que el espectador proyecta para evaluar el equilibrio visual de la figura",
        incorrectas: [
            "Un eje físico que atraviesa la escultura",
            "El sentimiento que provoca la obra al eje del espectador"
        ]
    }
];
