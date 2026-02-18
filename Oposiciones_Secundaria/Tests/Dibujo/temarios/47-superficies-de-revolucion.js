var PREGUNTAS = [
    {
        enunciado: "¿Qué es una 'sección plana' en una superficie de revolución?",
        correcta: "La curva plana (cónica) resultante de cortar la superficie (cono, cilindro, esfera) con un plano",
        incorrectas: [
            "Desenrollar la superficie",
            "Un agujero cuadrado"
        ]
    },
    {
        enunciado: "¿Qué curvas se obtienen al seccionar un cono de revolución?",
        correcta: "Elipse, Hipérbola, Parábola, Círculo (y casos degenerados: punto, recta, par de rectas)",
        incorrectas: [
            "Ovoide, Espiral, Cicloide",
            "Cuadrado, Triángulo, Pentágono"
        ]
    },
    {
        enunciado: "¿Qué es la 'intersección' de dos superficies de revolución?",
        correcta: "La curva alabeada (generalmente de cuarto orden) común a ambas superficies",
        incorrectas: [
            "El volumen suma",
            "Una recta siempre"
        ]
    },
    {
        enunciado: "¿Qué método se usa para hallar la intersección de dos superficies de revolución con ejes concurrentes?",
        correcta: "El método de las esferas auxiliares concéntricas (en el punto de corte de los ejes)",
        incorrectas: [
            "El método de los planos paralelos",
            "El método de abatimiento simple"
        ]
    },
    {
        enunciado: "¿En qué consiste el método de las esferas auxiliares?",
        correcta: "Las esferas con centro en la intersección de ejes cortan a ambas superficies según círculos perpendiculares a los ejes; los puntos de corte de estos círculos pertenecen a la intersección",
        incorrectas: [
            "Llenar los cuerpos de esferas pequeñas",
            "Usar esferas tangentes exteriores"
        ]
    },
    {
        enunciado: "¿Qué método se usa si los ejes de las superficies de revolución son paralelos?",
        correcta: "El método de los planos auxiliares secantes paralelos a las bases (o perpendiculares a los ejes)",
        incorrectas: [
            "Esferas auxiliares",
            "No se pueden cortar"
        ]
    },
    {
        enunciado: "¿Qué curvas produce la intersección de dos cilindros de revolución de igual radio que se cortan ortogonalmente?",
        correcta: "Dos elipses planas contenidas en planos bisectores (curva de Viviani degenerada en planas)",
        incorrectas: [
            "Una curva alabeada compleja",
            "Un círculo"
        ]
    },
    {
        enunciado: "¿Qué es el 'contorno aparente' en la intersección?",
        correcta: "Los puntos donde la curva de intersección cambia de visible a oculta (tangencia con los rayos visuales)",
        incorrectas: [
            "El dibujo del borde",
            "La sombra"
        ]
    },
    {
        enunciado: "¿Qué es una 'penetración' en intersección de superficies?",
        correcta: "Cuando un cuerpo atraviesa totalmente al otro, generando dos curvas cerradas separadas",
        incorrectas: [
            "Cuando solo se tocan",
            "Una mordedura"
        ]
    },
    {
        enunciado: "¿Qué es una 'mordedura' en intersección?",
        correcta: "Cuando los cuerpos se compenetran parcialmente formando una sola curva cerrada continua",
        incorrectas: [
            "Un mordisco",
            "Una penetración completa"
        ]
    },
    {
        enunciado: "¿Qué es el 'Teorema de Monge'?",
        correcta: "Si dos superficies de segundo orden son circunscriptibles a una misma esfera, su intersección se descompone en dos curvas planas (cónicas)",
        incorrectas: [
            "La suma de los cuadrados de los catetos...",
            "Dos esferas siempre se cortan en un círculo"
        ]
    },
    {
        enunciado: "¿La intersección de una esfera y un cilindro de revolución cuyo eje pasa por el centro de la esfera es...?",
        correcta: "Dos circunferencias paralelas iguales",
        incorrectas: [
            "Una curva alabeada",
            "Dos elipses"
        ]
    },
    {
        enunciado: "¿La intersección de una esfera y un cono de revolución cuyo eje pasa por el centro de la esfera es...?",
        correcta: "Dos circunferencias paralelas (de distinto radio generalmente)",
        incorrectas: [
            "Parábolas",
            "Un punto"
        ]
    },
    {
        enunciado: "¿Qué es la 'curva de Viviani'?",
        correcta: "Intersección de una esfera con un cilindro tangente interiormente de radio mitad",
        incorrectas: [
            "Una ventana cuadrada",
            "Una elipse perfecta"
        ]
    },
    {
        enunciado: "¿Cómo se halla la sección plana de una esfera?",
        correcta: "Es siempre una circunferencia; en proyección puede verse como elipse (abatimiento para VM)",
        incorrectas: [
            "Es una elipse real",
            "Es un óvalo"
        ]
    },
    {
        enunciado: "¿Qué es el 'desarrollo' de la intersección?",
        correcta: "Representar la curva de intersección sobre la superficie desplegada ('transformada') para cortar la chapa",
        incorrectas: [
            "Hacer la intersección más grande",
            "Borrar la curva"
        ]
    },
    {
        enunciado: "¿Qué se necesita para aplicar el método de esferas auxiliares?",
        correcta: "Que las dos superficies sean de revolución y sus ejes se corten en un punto",
        incorrectas: [
            "Que sean prismas",
            "Que los ejes se crucen sin cortarse"
        ]
    },
    {
        enunciado: "¿Qué son los 'puntos dobles' de la intersección?",
        correcta: "Puntos donde la curva se corta a sí misma (en contactuales o tangencias bitangentes)",
        incorrectas: [
            "Puntos dibujados dos veces",
            "Los extremos"
        ]
    },
    {
        enunciado: "¿Cómo se representan las partes ocultas de la intersección?",
        correcta: "Con línea discontinua; es fundamental determinar la visibilidad analizando qué zonas de las superficies son vistas",
        incorrectas: [
            "No se dibujan",
            "Con línea roja"
        ]
    },
    {
        enunciado: "¿Qué es la 'esfera máxima' inscrita en la intersección?",
        correcta: "La esfera auxiliar tangente a ambos contornos aparentes; determina el punto de garganta o tangencia máxima",
        incorrectas: [
            "Una esfera gigante",
            "La esfera que contiene a todo"
        ]
    },
    {
        enunciado: "¿Qué es la 'esfera mínima' inscrita?",
        correcta: "La esfera tangente interiormente a la superficie más pequeña en la zona de cruce; marca el inicio del rango útil de esferas auxiliares",
        incorrectas: [
            "Un punto",
            "La canica"
        ]
    },
    {
        enunciado: "¿Cuál es la 'sección recta' de un cilindro oblicuo?",
        correcta: "La intersección por un plano perpendicular a las generatrices (necesaria para el desarrollo)",
        incorrectas: [
            "La base",
            "El corte vertical"
        ]
    },
    {
        enunciado: "¿Qué es un 'injerto' en calderería?",
        correcta: "La unión de dos tubos (cilindros) que requiere el trazado exacto de la curva de intersección para el corte y soldadura",
        incorrectas: [
            "Un tipo de planta",
            "Pegar con cinta"
        ]
    },
    {
        enunciado: "¿Qué es la 'virola'?",
        correcta: "Cada una de las secciones tubulares que componen una tubería o codo (cilindros o troncos de cono truncados)",
        incorrectas: [
            "Un virus",
            "Una herramienta"
        ]
    },
    {
        enunciado: "¿La intersección de plano paralelo al eje con paraboloide de revolución es...?",
        correcta: "Dos ramas de parábola iguales a la generatriz",
        incorrectas: [
            "Una elipse",
            "Un círculo"
        ]
    },
    {
        enunciado: "¿Qué es el 'toro' en intersecciones?",
        correcta: "Una superficie compleja; su intersección con planos bitangentes produce los círculos de Villarceau",
        incorrectas: [
            "Un animal",
            "Un cilindro"
        ]
    },
    {
        enunciado: "¿Qué es la 'intersección tangencial'?",
        correcta: "Cuando las superficies son tangentes a lo largo de una línea (ej. esfera inscrita en cilindro)",
        incorrectas: [
            "Intersección invisible",
            "Corte profundo"
        ]
    },
    {
        enunciado: "¿Qué es el 'plano radical' de dos esferas?",
        correcta: "El plano perpendicular a la recta que une los centros, lugar geométrico de puntos de igual potencia (contiene la circunferencia de intersección)",
        incorrectas: [
            "El plano del ecuador",
            "Un plano cualquiera"
        ]
    },
    {
        enunciado: "¿Cómo se halla la intersección de una recta con un cono?",
        correcta: "Plano auxiliar que pasa por la recta y por el vértice del cono; corta al cono en dos generatrices",
        incorrectas: [
            "Plano horizontal por la recta",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Qué es el método de 'planos radiales'?",
        correcta: "En intersección de cono-cilindro o cono-cono, usar planos que pasan por los vértices (haz de planos)",
        incorrectas: [
            "Usar radios de bicicleta",
            "Planos redondos"
        ]
    },
    {
        enunciado: "¿Qué es la 'curva de error' en intersecciones manuales?",
        correcta: "La imprecisión al unir los puntos hallados; requiere usar plantillas de curvas para suavizar",
        incorrectas: [
            "Una curva matemática",
            "Un fallo del sistema"
        ]
    },
    {
        enunciado: "¿Qué ocurre en la intersección si los ejes se cruzan (no se cortan)?",
        correcta: "No se puede usar esferas concéntricas; hay que usar planos paralelos o deslizantes",
        incorrectas: [
            "No hay intersección",
            "Es más fácil"
        ]
    },
    {
        enunciado: "¿Qué es la 'camisa' en intersecciones?",
        correcta: "Término informal para la superficie exterior en una penetración",
        incorrectas: [
            "Una prenda de ropa",
            "El dibujo acabado"
        ]
    },
    {
        enunciado: "¿En diédrico, la intersección de dos cilindros de eje horizontal se ve en planta como...?",
        correcta: "Un cruce de rectángulos; la curva se ve en el alzado o perfil dependiendo de la altura",
        incorrectas: [
            "Un círculo",
            "Un punto"
        ]
    },
    {
        enunciado: "¿Qué es la 'resolución por homología'?",
        correcta: "Usar la homología para hallar puntos de la curva transformada en el desarrollo a partir de la proyección",
        incorrectas: [
            "Resolver problemas humanos",
            "No se usa"
        ]
    },
    {
        enunciado: "¿Si un cilindro tiene menor diámetro que otro y lo atraviesa totalmente, es...?",
        correcta: "Penetración (dos curvas)",
        incorrectas: [
            "Mordedura",
            "Tangencia"
        ]
    },
    {
        enunciado: "¿Si los diámetros son iguales y los ejes se cortan, es...?",
        correcta: "Intersección con puntos dobles (curvas planas elípticas), penetración límite",
        incorrectas: [
            "Cilindro único",
            "Esfera"
        ]
    },
    {
        enunciado: "¿Qué son las 'generatrices críticas'?",
        correcta: "Las del contorno aparente (separatrices de visibilidad) y las de los puntos extremos (máximos/mínimos)",
        incorrectas: [
            "Generatrices que critican",
            "Las más cortas"
        ]
    },
    {
        enunciado: "¿La intersección de tres cilindros ortogonales iguales es el...?",
        correcta: "Sólido de Steinmetz tricilíndrico (cubo inflado)",
        incorrectas: [
            "Esfera",
            "Tetraedro"
        ]
    },
    {
        enunciado: "¿Qué es el 'casquete esférico'?",
        correcta: "Parte de la esfera cortada por un plano (sección circular)",
        incorrectas: [
            "Un sombrero",
            "Media esfera exacta"
        ]
    }
];
