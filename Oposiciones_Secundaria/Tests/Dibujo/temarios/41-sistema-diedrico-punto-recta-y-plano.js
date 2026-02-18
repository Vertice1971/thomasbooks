var PREGUNTAS = [
    {
        enunciado: "¿Qué es el 'Sistema Diédrico'?",
        correcta: "Sistema de representación que utiliza dos planos de proyección perpendiculares entre sí (Vertical y Horizontal) para proyectar ortogonalmente los objetos",
        incorrectas: [
            "Sistema con un solo plano de proyección",
            "Sistema de proyección cónica"
        ]
    },
    {
        enunciado: "¿Qué es la 'Línea de Tierra' (LT)?",
        correcta: "La recta de intersección entre los dos planos de proyección (Vertical y Horizontal)",
        incorrectas: [
            "La línea del horizonte",
            "El borde del papel"
        ]
    },
    {
        enunciado: "¿Qué es el 'Alejamiento' de un punto?",
        correcta: "La distancia del punto al Plano Vertical de proyección (se ve en la proyección horizontal o planta)",
        incorrectas: [
            "La distancia al Plano Horizontal",
            "La altura del punto"
        ]
    },
    {
        enunciado: "¿Qué es la 'Cota' de un punto?",
        correcta: "La distancia del punto al Plano Horizontal de proyección (se ve en la proyección vertical o alzado)",
        incorrectas: [
            "La distancia al Plano Vertical",
            "El alejamiento"
        ]
    },
    {
        enunciado: "¿Qué son los 'Cuadrantes'?",
        correcta: "Los cuatro espacios diedros en que dividen el espacio los planos de proyección (I, II, III, IV)",
        incorrectas: [
            "Las cuatro esquinas del papel",
            "Los planos bisectores"
        ]
    },
    {
        enunciado: "¿Un punto en el Primer Cuadrante tiene...?",
        correcta: "Cota positiva (arriba) y Alejamiento positivo (delante)",
        incorrectas: [
            "Cota negativa y Alejamiento positivo",
            "Todo negativo"
        ]
    },
    {
        enunciado: "¿Un punto en el Segundo Cuadrante tiene...?",
        correcta: "Cota positiva y Alejamiento negativo (detrás)",
        incorrectas: [
            "Cota negativa",
            "Alejamiento positivo"
        ]
    },
    {
        enunciado: "¿Qué son los 'Planos Bisectores'?",
        correcta: "Dos planos que pasan por la LT y dividen los cuadrantes en dos octantes iguales (45º con los planos de proyección)",
        incorrectas: [
            "Los planos de proyección",
            "Planos paralelos a la LT"
        ]
    },
    {
        enunciado: "¿Qué propiedad tiene un punto situado en el Primer Bisector?",
        correcta: "Tiene igual Cota que Alejamiento (mismo valor absoluto y signos coincidentes en el espacio, proyecciones simétricas respecto a LT)",
        incorrectas: [
            "Cota doble que alejamiento",
            "Cota cero"
        ]
    },
    {
        enunciado: "¿Qué pasa con un punto en el Segundo Bisector?",
        correcta: "Sus proyecciones coinciden en un mismo punto (mismo valor y signo opuesto de cota/alejamiento al abatir)",
        incorrectas: [
            "No tiene proyecciones",
            "Están separadas"
        ]
    },
    {
        enunciado: "¿Qué es la 'Tercera Proyeccion' o Vista de Perfil?",
        correcta: "Proyección sobre un plano auxiliar de perfil perpendicular a la LT, útil para ver distancias y posiciones relativas",
        incorrectas: [
            "La perspectiva 3D",
            "La sombra"
        ]
    },
    {
        enunciado: "¿Qué es una 'Recta Horizontal'?",
        correcta: "Recta paralela al Plano Horizontal; su proyección vertical es paralela a la LT y la horizontal en VM",
        incorrectas: [
            "Recta paralela al Vertical",
            "Recta de punta"
        ]
    },
    {
        enunciado: "¿Qué es una 'Recta Frontal'?",
        correcta: "Recta paralela al Plano Vertical; su proyección horizontal es paralela a la LT y la vertical en VM",
        incorrectas: [
            "Recta perpendicular al Vertical",
            "Recta horizontal"
        ]
    },
    {
        enunciado: "¿Qué es una 'Recta de Punta'?",
        correcta: "Recta perpendicular al Plano Vertical; se proyecta como un punto en el alzado",
        incorrectas: [
            "Recta vertical",
            "Recta inclinada"
        ]
    },
    {
        enunciado: "¿Qué es una 'Recta Vertical'?",
        correcta: "Recta perpendicular al Plano Horizontal; se proyecta como un punto en la planta",
        incorrectas: [
            "Recta de punta",
            "Recta frontal"
        ]
    },
    {
        enunciado: "¿Qué es una 'Recta de Perfil'?",
        correcta: "Recta paralela al plano de perfil (perpendicular a LT, salvo si pasa por ella); sus proyecciones son perpendiculares a LT",
        incorrectas: [
            "Recta cualquiera",
            "Recta horizontal"
        ]
    },
    {
        enunciado: "¿Qué son las 'Trazas' de la recta?",
        correcta: "Los puntos donde la recta perfora a los planos de proyección (H: traza horizontal, V: traza vertical)",
        incorrectas: [
            "Los extremos del segmento",
            "El punto medio"
        ]
    },
    {
        enunciado: "¿Qué son las 'Trazas' del plano?",
        correcta: "Las rectas de intersección del plano con los planos de proyección (alfa-1, alfa-2)",
        incorrectas: [
            "Los bordes del plano",
            "Puntos aislados"
        ]
    },
    {
        enunciado: "¿Cómo se define un plano?",
        correcta: "Por tres puntos no alineados, una recta y un punto, dos rectas que se cortan o dos rectas paralelas",
        incorrectas: [
            "Por un solo punto",
            "Por dos puntos"
        ]
    },
    {
        enunciado: "¿Qué es un 'Plano Proyectante Horizontal' (o Vertical)?",
        correcta: "Plano perpendicular al Plano Horizontal (o Vertical); su traza horizontal recoge toda la proyección de puntos del plano",
        incorrectas: [
            "Plano paralelo a la LT",
            "Plano oblicuo cualquiera"
        ]
    },
    {
        enunciado: "¿Qué es un 'Plano de Perfil'?",
        correcta: "Plano perpendicular a la LT (y por tanto a ambos planos de proyección); sus dos trazas son perpendiculares a la LT",
        incorrectas: [
            "Plano paralelo a LT",
            "Plano horizontal"
        ]
    },
    {
        enunciado: "¿Qué es un 'Plano Paralelo a la Línea de Tierra'?",
        correcta: "Sus trazas son paralelas a la LT; necesita la tercera proyección para definir la inclinación",
        incorrectas: [
            "Plano horizontal",
            "Plano proyectante"
        ]
    },
    {
        enunciado: "¿Cómo se sabe si un punto pertenece a un plano?",
        correcta: "Si pertenece a una recta contenida en el plano (sus trazas están en las trazas del plano)",
        incorrectas: [
            "Si está cerca",
            "Si sus proyecciones tocan las trazas del plano"
        ]
    },
    {
        enunciado: "¿Qué son las 'Rectas Notables' del plano?",
        correcta: "Horizontales de plano, Frontales de plano y Líneas de Máxima Pendiente/Inclinación",
        incorrectas: [
            "Rectas famosas",
            "Rectas curvas"
        ]
    },
    {
        enunciado: "¿Una 'Horizontal de Plano' tiene su proyección vertical...?",
        correcta: "Paralela a la Línea de Tierra (y su proyección horizontal paralela a la traza horizontal del plano)",
        incorrectas: [
            "Perpendicular a LT",
            "Oblicua"
        ]
    },
    {
        enunciado: "¿Una 'Línea de Máxima Pendiente' de un plano es perpendicular a...?",
        correcta: "La traza horizontal del plano (en proyección horizontal)",
        incorrectas: [
            "La traza vertical",
            "La línea de tierra"
        ]
    },
    {
        enunciado: "¿La intersección de dos planos es...?",
        correcta: "Una recta definida por los puntos de corte de las trazas homónimas de los planos",
        incorrectas: [
            "Un punto",
            "Otro plano"
        ]
    },
    {
        enunciado: "¿Si las trazas de dos planos se cortan fuera del papel, se usa...?",
        correcta: "Un plano auxiliar (o método de rectas horizontales) para hallar puntos de la recta intersección",
        incorrectas: [
            "Se deja sin hacer",
            "Se pegan más papeles"
        ]
    },
    {
        enunciado: "¿La intersección de una recta con un plano se halla mediante...?",
        correcta: "Un plano proyectante (o auxiliar) que contenga a la recta; se busca la intersección de planos y luego el punto común",
        incorrectas: [
            "Mirando donde se cruzan",
            "No se puede hallar"
        ]
    },
    {
        enunciado: "¿Qué es la 'Visibilidad' en diédrico?",
        correcta: "Determinar qué partes de un objeto tapan a otras; se miran las cotas (para ver planta) y los alejamientos (para ver alzado) en los puntos de cruce aparente",
        incorrectas: [
            "Ver bien el dibujo",
            "Usar gafas"
        ]
    },
    {
        enunciado: "¿Qué es el 'Abatimiento' de un punto sobre el plano de proyección?",
        correcta: "Girar el plano que contiene al punto hasta hacerlo coincidir con el plano de proyección para ver distancias reales",
        incorrectas: [
            "Borrar el punto",
            "Bajarlo a tierra"
        ]
    },
    {
        enunciado: "¿Qué es 'Deperar' un plano?",
        correcta: "No existe... (distractor, quizás se refiere a 'abatir' o 'desabatir')",
        incorrectas: [
            "Abatir",
            "Girar"
        ]
    },
    {
        enunciado: "¿Qué es un 'Plano que pasa por la Línea de Tierra'?",
        correcta: "Sus trazas coinciden en la LT; se define por un punto adicional (punto P) o en perfil",
        incorrectas: [
            "No existe ese plano",
            "Es el plano horizontal"
        ]
    },
    {
        enunciado: "¿Qué coordenadas definen un punto P(x, y, z)?",
        correcta: "x=Referencia (lateral), y=Alejamiento, z=Cota",
        incorrectas: [
            "x=Alto, y=Ancho, z=Profundo",
            "x=Cota, y=Referencia"
        ]
    },
    {
        enunciado: "¿Si un punto tiene Cota 0, está en...?",
        correcta: "El Plano Horizontal de proyección",
        incorrectas: [
            "El Plano Vertical",
            "La Línea de Tierra"
        ]
    },
    {
        enunciado: "¿Si un punto tiene Cota 0 y Alejamiento 0, está en...?",
        correcta: "La Línea de Tierra",
        incorrectas: [
            "El origen solamente",
            "El infinito"
        ]
    },
    {
        enunciado: "¿Dos rectas que se cruzan (no se cortan) en el espacio...?",
        correcta: "Sus proyecciones se cortan, pero los puntos de corte no están alineados verticalmente (no tienen misma referencia)",
        incorrectas: [
            "Sus proyecciones son paralelas",
            "No se ven"
        ]
    },
    {
        enunciado: "¿El 'Teorema de las Tres Perpendiculares' se aplica en...?",
        correcta: "Líneas de máxima pendiente e inclinación para definir perpendicularidad recta-plano",
        incorrectas: [
            "Triángulos",
            "Solo en axonometría"
        ]
    },
    {
        enunciado: "¿Qué es un 'Plano Frontal'?",
        correcta: "Plano paralelo al Vertical (alejamiento constante); se proyecta como una recta horizontal en planta",
        incorrectas: [
            "Plano de perfil",
            "Plano oblicuo"
        ]
    },
    {
        enunciado: "¿Qué es un 'Plano Horizontal'?",
        correcta: "Plano paralelo al Horizontal de proyección (cota constante); se proyecta como una recta horizontal en alzado",
        incorrectas: [
            "Plano vertical",
            "Plano de punta"
        ]
    }
];
