var PREGUNTAS = [
    {
        enunciado: "¿Quiénes patentaron el Cinematógrafo en 1895?",
        correcta: "Los hermanos Lumière (Auguste y Louis)",
        incorrectas: [
            "Thomas Edison",
            "Georges Méliès"
        ]
    },
    {
        enunciado: "¿Qué aporte fundamental hizo Georges Méliès al cine ('Viaje a la Luna')?",
        correcta: "Introdujo la fantasía, la puesta en escena teatral y los efectos especiales (trucajes), entendiendo el cine como espectáculo narrativo y mágico",
        incorrectas: [
            "Inventó el sonido sincronizado",
            "Creó el documental realista"
        ]
    },
    {
        enunciado: "¿Qué es el 'Montaje' (Edición)?",
        correcta: "El proceso de ordenar y unir los planos para crear sentido narrativo, ritmo y emoción (la esencia del lenguaje cinematográfico)",
        incorrectas: [
            "La colocación de los decorados en el plató",
            "La proyección de la película en el cine"
        ]
    },
    {
        enunciado: "¿Qué es el 'Efecto Kuleshov'?",
        correcta: "Experimento soviético que demostró que el significado de un plano depende del plano que le sigue (contexto del montaje)",
        incorrectas: [
            "Un efecto especial de explosión",
            "Un tipo de lente de cámara"
        ]
    },
    {
        enunciado: "¿Qué es el 'Expresionismo Alemán' (Murnau, Fritz Lang)?",
        correcta: "Estilo visual caracterizado por el uso dramático de luces y sombras (claroscuro), decorados deformados y ángulos aberrantes para expresar angustia",
        incorrectas: [
            "Cine documental de naturaleza",
            "Comedias románticas ligeras"
        ]
    },
    {
        enunciado: "¿Qué película marcó el inicio del cine sonoro (1927)?",
        correcta: "El cantor de jazz (The Jazz Singer)",
        incorrectas: [
            "Lo que el viento se llevó",
            "Ciudadano Kane"
        ]
    },
    {
        enunciado: "¿Qué es el 'Neorrealismo Italiano' (Rossellini, De Sica)?",
        correcta: "Movimiento de posguerra que rodaba en escenarios reales (calles), con actores no profesionales, mostrando la pobreza y la vida cotidiana sin artificios",
        incorrectas: [
            "Cine de superhéroes y fantasía",
            "Musicales de Hollywood"
        ]
    },
    {
        enunciado: "¿Qué aportó 'Ciudadano Kane' (Orson Welles) a la estética del cine?",
        correcta: "Innovaciones como la profundidad de campo (todo enfocado), contrapicados extremos, techos visibles y estructura narrativa no lineal",
        incorrectas: [
            "El uso del color por primera vez",
            "El sonido estéreo"
        ]
    },
    {
        enunciado: "¿Qué es la 'Nouvelle Vague' francesa (Godard, Truffaut)?",
        correcta: "Cine de autor que rompe las reglas clásicas; cámara en mano, rodaje en libertad, montaje discontinuo (jump cuts) y temas existenciales",
        incorrectas: [
            "Cine de grandes estudios comerciales",
            "Películas de época con vestuario lujoso"
        ]
    },
    {
        enunciado: "¿Qué es el 'MacGuffin' (Hitchcock)?",
        correcta: "Un elemento de la trama que motiva a los personajes (un maletín, un secreto) pero que carece de importancia real para el espectador",
        incorrectas: [
            "El villano de la película",
            "El final sorpresa"
        ]
    },
    {
        enunciado: "¿Qué es un 'Travelling'?",
        correcta: "Movimiento físico de la cámara desplazándose sobre raíles o soporte móvil para seguir la acción o explorar el espacio",
        incorrectas: [
            "Acercar la imagen con el zoom sin mover la cámara",
            "Mover la cámara sobre su propio eje (panorámica)"
        ]
    },
    {
        enunciado: "¿Qué es el 'Plano Secuencia'?",
        correcta: "Una toma larga sin cortes que cubre una secuencia completa, manteniendo la continuidad temporal y espacial real",
        incorrectas: [
            "Una sucesión rápida de muchos planos cortos",
            "Un plano detalle de un objeto"
        ]
    },
    {
        enunciado: "¿Qué es el 'Cine Negro' (Film Noir)?",
        correcta: "Género de crimen y misterio (años 40-50), visualmente oscuro, con detectives cínicos, femmes fatales y atmósfera pesimista",
        incorrectas: [
            "Películas rodadas en África",
            "Comedias musicales"
        ]
    },
    {
        enunciado: "¿Qué es el 'Technicolor'?",
        correcta: "Proceso de cine en color famoso por sus tonos saturados y vibrantes, dominante en Hollywood hasta los 50",
        incorrectas: [
            "Música tecno en el cine",
            "Cine en blanco y negro"
        ]
    },
    {
        enunciado: "¿Qué es el 'Storyboard'?",
        correcta: "Guion gráfico (dibujos secuenciales) que planifica los planos antes del rodaje",
        incorrectas: [
            "La pizarra de la claqueta",
            "El cartel de la película"
        ]
    },
    {
        enunciado: "¿Qué es la 'Persistencia Retiniana'?",
        correcta: "Fenómeno fisiológico que permite al ojo retener una imagen una fracción de segundo, creando la ilusión de movimiento al pasar fotogramas rápidos",
        incorrectas: [
            "Ver mal de lejos",
            "La memoria visual a largo plazo"
        ]
    },
    {
        enunciado: "¿Qué es un 'Flashback' (Analepsis)?",
        correcta: "Salto temporal hacia el pasado en la narración para explicar antecedentes",
        incorrectas: [
            "Un salto hacia el futuro",
            "Un flash de cámara"
        ]
    },
    {
        enunciado: "¿Qué es la 'Banda Sonora'?",
        correcta: "Conjunto de sonidos de la película: diálogos, música y efectos sonoros (foley)",
        incorrectas: [
            "Solo la música instrumental",
            "La cinta de la película física"
        ]
    },
    {
        enunciado: "¿Qué es el 'Raccord' (Continuidad)?",
        correcta: "La coherencia entre planos consecutivos (que no cambie la luz, vestuario o posición inexplicablemente)",
        incorrectas: [
            "Un tipo de cuerda",
            "El final de la película"
        ]
    },
    {
        enunciado: "¿Qué es el 'Cine de Autor'?",
        correcta: "Cine donde el director ejerce un control creativo total y personal, imponiendo su visión y estilo por encima de la industria",
        incorrectas: [
            "Cine hecho por escritores",
            "Cine anónimo"
        ]
    },
    {
        enunciado: "¿Qué es un 'Plano Americano'?",
        correcta: "Encuadre de la figura humana desde las rodillas hacia arriba (típico del Western para ver las pistolas)",
        incorrectas: [
            "Un plano de la bandera de EEUU",
            "Un primer plano de la cara"
        ]
    },
    {
        enunciado: "¿Qué es el 'Montaje en paralelo'?",
        correcta: "Alternar dos o más acciones que ocurren simultáneamente en lugares diferentes, creando tensión",
        incorrectas: [
            "Montar dos películas a la vez",
            "Poner dos pantallas"
        ]
    },
    {
        enunciado: "¿Qué hace un 'Director de Fotografía'?",
        correcta: "Responsable de la iluminación, la cámara, el encuadre y la estética visual de la película",
        incorrectas: [
            "Dirige a los actores",
            "Escribe el guion"
        ]
    },
    {
        enunciado: "¿Qué es el 'Cine Mudo'?",
        correcta: "Etapa inicial del cine sin sonido grabado sincronizado (se acompañaba de música en vivo y rótulos)",
        incorrectas: [
            "Cine donde los actores no hablan",
            "Documentales de mimos"
        ]
    },
    {
        enunciado: "¿Qué es el 'Zoom'?",
        correcta: "Objetivo de distancia focal variable que permite acercar o alejar la imagen ópticamente sin mover la cámara",
        incorrectas: [
            "Mover la cámara rápido",
            "Un zumbido de sonido"
        ]
    },
    {
        enunciado: "¿Qué es el 'Surrealismo' en cine (Buñuel, Un perro andaluz)?",
        correcta: "Cine onírico, irracional, provocador, sin lógica narrativa convencional, influido por el psicoanálisis",
        incorrectas: [
            "Cine muy realista",
            "Documentales de animales"
        ]
    },
    {
        enunciado: "¿Qué es el 'Slapstick'?",
        correcta: "Comedia física, de golpes, caídas y persecuciones (ej. Chaplin, Buster Keaton)",
        incorrectas: [
            "Cine de terror",
            "Drama romántico"
        ]
    },
    {
        enunciado: "¿Qué es la 'Noche Americana'?",
        correcta: "Técnica de rodar de día simulando la noche mediante filtros y subexposición",
        incorrectas: [
            "Una fiesta en Hollywood",
            "Rodar en América de noche"
        ]
    },
    {
        enunciado: "¿Qué es la 'Angulación Picada'?",
        correcta: "La cámara mira desde arriba hacia abajo al sujeto (lo empequeñece)",
        incorrectas: [
            "La cámara mira desde abajo (contrapicado)",
            "Cámara a nivel de los ojos"
        ]
    },
    {
        enunciado: "¿Qué es el 'Doblaje'?",
        correcta: "Sustitución de las voces originales de los actores por otras en otro idioma",
        incorrectas: [
            "Doblar la película",
            "Hacer de doble de acción"
        ]
    },
    {
        enunciado: "¿Qué es el 'CGI' en cine moderno?",
        correcta: "Imágenes generadas por ordenador (Efectos digitales)",
        incorrectas: [
            "Cine De Indias",
            "Cine Gratuito Internacional"
        ]
    },
    {
        enunciado: "¿Qué es el 'Western'?",
        correcta: "Género ambientado en el oeste americano (frontera, vaqueros), con códigos de honor, duelo y justicia",
        incorrectas: [
            "Películas del este",
            "Cine de espías"
        ]
    },
    {
        enunciado: "¿Griffith ('El nacimiento de una nación') es considerado...",
        correcta: "El padre del lenguaje cinematográfico clásico (consolidó el primer plano, el montaje alternado, el flashback)",
        incorrectas: [
            "El inventor del cine",
            "Un director de comedias"
        ]
    },
    {
        enunciado: "¿Qué es el 'Cine Dogma 95' (Lars von Trier)?",
        correcta: "Movimiento danés que buscaba la pureza (Voto de Castidad): cámara en mano, sin música añadida, sin iluminación artificial, en situ",
        incorrectas: [
            "Cine sobre perros",
            "Cine de alta tecnología"
        ]
    }
];
