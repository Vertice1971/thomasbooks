var PREGUNTAS = [
    {
        enunciado: "¿Qué es una 'sección plana' de un poliedro?",
        correcta: "El polígono plano resultante de la intersección entre un poliedro (prisma, pirámide) y un plano secante",
        incorrectas: [
            "La base del poliedro",
            "El volumen cortado"
        ]
    },
    {
        enunciado: "¿Qué es la 'transformada' de la sección?",
        correcta: "La verdadera magnitud y forma de la sección plana dibujada sobre el desarrollo de la superficie del poliedro",
        incorrectas: [
            "La proyección vertical de la sección",
            "El dibujo de la sección deformada"
        ]
    },
    {
        enunciado: "¿Cómo se llama el método que utiliza las aristas laterales para hallar la sección?",
        correcta: "Método de intersección recta-plano (se halla el punto de corte de cada arista con el plano secante)",
        incorrectas: [
            "Método de las esferas",
            "Método de abatimiento"
        ]
    },
    {
        enunciado: "¿Cómo se llama el método que utiliza las caras del poliedro para hallar la sección?",
        correcta: "Método de intersección plano-plano (se hallan las rectas de intersección del plano secante con los planos de las caras)",
        incorrectas: [
            "Método de sombras",
            "Método de giro"
        ]
    },
    {
        enunciado: "¿Qué es la 'homología' en la sección de una pirámide?",
        correcta: "La relación geométrica entre la base de la pirámide y la sección plana producida; el centro de homología es el vértice de la pirámide",
        incorrectas: [
            "La relación entre el volumen y el área",
            "No existe homología en pirámides"
        ]
    },
    {
        enunciado: "¿Qué es el 'eje de homología' en la sección piramidal?",
        correcta: "La recta de intersección entre el plano de la base y el plano secante (traza del plano secante si la base está en el horizontal)",
        incorrectas: [
            "La altura de la pirámide",
            "Una diagonal de la base"
        ]
    },
    {
        enunciado: "¿Qué es la 'afinidad' en la sección de un prisma?",
        correcta: "La relación geométrica entre la base del prisma y la sección plana; el eje de afinidad es la intersección de ambos planos y la dirección es la de las aristas",
        incorrectas: [
            "Una relación de semejanza pura",
            "El ángulo de corte"
        ]
    },
    {
        enunciado: "¿Cómo se halla la 'verdadera magnitud' de la sección?",
        correcta: "Abatiendo el plano secante sobre uno de los planos de proyección (o mediante cambio de plano) para ver el polígono sin deformación",
        incorrectas: [
            "Midiendo directamente en el alzado",
            "Multiplicando por la escala"
        ]
    },
    {
        enunciado: "¿Si el plano secante es 'paralelo a la línea de tierra', cómo se halla la sección?",
        correcta: "Se suele utilizar la tercera proyección (perfil) para ver el plano de canto y localizar los puntos de corte en las aristas",
        incorrectas: [
            "No se puede hallar",
            "Se proyecta como una recta en planta"
        ]
    },
    {
        enunciado: "¿Si el plano secante es 'proyectante vertical', cómo se ve la sección en el alzado?",
        correcta: "Como una línea recta que coincide con la traza vertical del plano (todos los puntos de la sección están en ella)",
        incorrectas: [
            "Como un polígono deformado",
            "No se ve"
        ]
    },
    {
        enunciado: "¿Qué es el 'tronco de prisma'?",
        correcta: "El cuerpo geométrico resultante de seccionar un prisma con un plano no paralelo a la base y quedarse con la parte inferior",
        incorrectas: [
            "Un prisma de madera",
            "Un cilindro"
        ]
    },
    {
        enunciado: "¿Qué ocurre si el plano secante pasa por el vértice de una pirámide?",
        correcta: "La sección no es un polígono cerrado, sino un triángulo formado por dos generatrices y un segmento de la base (o un punto si solo toca el vértice)",
        incorrectas: [
            "La sección es un cuadrado",
            "Se rompe la pirámide"
        ]
    },
    {
        enunciado: "¿En el desarrollo de un prisma truncado, las aristas laterales son...?",
        correcta: "Perpendiculares a la línea base (si es prisma recto) y de distinta longitud real (igual a la cota de los puntos de corte)",
        incorrectas: [
            "Todas iguales",
            "Líneas curvas"
        ]
    },
    {
        enunciado: "¿Para desarrollar una pirámide truncada, primero se debe...?",
        correcta: "Desarrollar la pirámide completa y luego llevar las verdaderas magnitudes de las aristas cortadas sobre las aristas del desarrollo",
        incorrectas: [
            "Dibujar la sección aparte",
            "Calcular el volumen"
        ]
    },
    {
        enunciado: "¿Qué es la 'rectificación' de la sección?",
        correcta: "Colocar los lados de la sección en línea recta para medir su perímetro (usado en desarrollos de cilindros, no tanto en poliedros)",
        incorrectas: [
            "Corregir el dibujo",
            "Hacerla cuadrada"
        ]
    },
    {
        enunciado: "¿Qué es una sección 'longitudinal'?",
        correcta: "Corte producido por un plano paralelo al eje mayor o altura del cuerpo",
        incorrectas: [
            "Corte transversal",
            "Corte oblicuo"
        ]
    },
    {
        enunciado: "¿Qué es una sección 'transversal'?",
        correcta: "Corte producido por un plano perpendicular al eje o altura del cuerpo (sección recta)",
        incorrectas: [
            "Corte paralelo a la base",
            "Corte diagonal"
        ]
    },
    {
        enunciado: "¿La sección de un tetraedro regular por un plano paralelo a dos aristas opuestas es...?",
        correcta: "Un rectángulo (o cuadrado si corta a la mitad de la altura)",
        incorrectas: [
            "Un triángulo",
            "Un hexágono"
        ]
    },
    {
        enunciado: "¿La sección máxima de un cubo producida por un plano que pasa por el centro es...?",
        correcta: "Un hexágono regular (plano perpendicular a la diagonal principal)",
        incorrectas: [
            "Un cuadrado",
            "Un octógono"
        ]
    },
    {
        enunciado: "¿Qué es el 'cambio de plano' para secciones?",
        correcta: "Disponer un nuevo plano de proyección perpendicular al plano secante para verlo 'de canto' (proyectante) y simplificar el hallazgo de puntos",
        incorrectas: [
            "Cambiar el papel",
            "Girar el objeto 90 grados"
        ]
    },
    {
        enunciado: "¿Qué es la 'línea de máxima pendiente' del plano secante?",
        correcta: "La recta del plano que forma mayor ángulo con el horizontal; sirve para definir el plano y hallar su traza o abatirlo",
        incorrectas: [
            "La arista más inclinada del poliedro",
            "La diagonal de la sección"
        ]
    },
    {
        enunciado: "¿Si cortamos un prisma hexagonal regular por un plano oblicuo, la sección tiene...?",
        correcta: "6 lados (hexágono irregular), a menos que el plano corte a las bases (entonces puede tener menos o más lados)",
        incorrectas: [
            "Siempre 6 lados regulares",
            "5 lados"
        ]
    },
    {
        enunciado: "¿Qué aristas son visibles en la proyección de la sección?",
        correcta: "Las del contorno de la sección son siempre visibles; las interiores dependen de la visibilidad de las caras del poliedro donde están",
        incorrectas: [
            "Todas son visibles siempre",
            "Ninguna es visible"
        ]
    },
    {
        enunciado: "¿Qué es el 'giro' para hallar la VM de la sección?",
        correcta: "Girar el plano secante (y la sección contenida) alrededor de una recta vertical o de punta hasta ponerlo paralelo a un plano de proyección",
        incorrectas: [
            "Dar la vuelta al dibujo",
            "Rotar el poliedro"
        ]
    },
    {
        enunciado: "¿En diédrico, los puntos de la sección deben tener 'correspondencia'?",
        correcta: "Sí, cada vértice de la sección debe estar alineado verticalmente en sus proyecciones horizontal y vertical (misma referencia)",
        incorrectas: [
            "No, son independientes",
            "Solo si es un prisma recto"
        ]
    },
    {
        enunciado: "¿Qué es una sección 'antiparalela' en un prisma (raro)?",
        correcta: "Término poco usual en poliedros, se usa en cilindros (sección subcontraria) para secciones circulares no paralelas a la base",
        incorrectas: [
            "Una sección mal hecha",
            "Corte en zigzag"
        ]
    },
    {
        enunciado: "¿Cómo se halla la sección por un plano definido por 3 puntos?",
        correcta: "Primero se hallan las trazas del plano que definen los 3 puntos, y luego se procede como intersección plano-poliedro",
        incorrectas: [
            "Uniendo los 3 puntos directamente",
            "No se puede hallar"
        ]
    },
    {
        enunciado: "¿Qué es la 'traza ordinaria' del plano secante?",
        correcta: "La recta de intersección del plano con el cuadro o con los planos de proyección (P' y P)",
        incorrectas: [
            "Una línea auxiliar cualquiera",
            "El borde de la sección"
        ]
    },
    {
        enunciado: "¿Las caras laterales de una pirámide truncada son...?",
        correcta: "Trapecios (isósceles si es regular y corte paralelo, escalenos si es oblicuo)",
        incorrectas: [
            "Triángulos más pequeños",
            "Rectángulos"
        ]
    },
    {
        enunciado: "¿Qué utilidad industrial tienen las secciones planas?",
        correcta: "Definir cortes para fabricación de tolvas, conductos de ventilación, piezas mecanizadas y arquitectura (cubiertas)",
        incorrectas: [
            "Solo valor estético",
            "Ninguna"
        ]
    },
    {
        enunciado: "¿Qué es la 'intersección de arista ficticia'?",
        correcta: "No existe en poliedros (todas las aristas son reales), pero en superficies curvas se usan generatrices ficticias",
        incorrectas: [
            "Una arista imaginaria",
            "Un error"
        ]
    },
    {
        enunciado: "¿Si un plano corta a todas las caras de un octaedro (difícil), la sección es...?",
        correcta: "Un octógono (o polígono de hasta 8 lados)",
        incorrectas: [
            "Un cuadrado",
            "Un triángulo"
        ]
    },
    {
        enunciado: "¿Qué relación hay entre el desarrollo y la sección?",
        correcta: "La sección divide el desarrollo en dos partes; la línea de corte en el desarrollo debe coincidir en longitud con el perímetro real de la sección",
        incorrectas: [
            "Son independientes",
            "La sección es más pequeña"
        ]
    },
    {
        enunciado: "¿Qué es el 'método de las aristas'?",
        correcta: "Considerar las aristas del poliedro como rectas y hallar sus intersecciones puntuales con el plano secante",
        incorrectas: [
            "Dibujar solo las aristas",
            "Cortar las aristas con tijera"
        ]
    },
    {
        enunciado: "¿Qué es el 'método de las caras'?",
        correcta: "Considerar las caras como planos y hallar la intersección (recta) de cada cara con el plano secante",
        incorrectas: [
            "Dibujar caras sonrientes",
            "Pintar las caras"
        ]
    },
    {
        enunciado: "¿La sección plana de un cuerpo convexo es siempre...?",
        correcta: "Un polígono convexo",
        incorrectas: [
            "Puede ser cóncavo",
            "Una curva"
        ]
    },
    {
        enunciado: "¿Si el plano secante es perpendicular a una cara del prisma, la intersección en esa cara es...?",
        correcta: "Un segmento perpendicular a las aristas de esa cara (si es prisma recto)",
        incorrectas: [
            "Una curva",
            "Un punto"
        ]
    },
    {
        enunciado: "¿Qué es un 'plano de perfil' auxiliar en secciones?",
        correcta: "Plano lateral usado para ver alturas y alejamientos simultáneamente, útil en piezas con planos inclinados de perfil",
        incorrectas: [
            "Un plano decorativo",
            "No sirve para nada"
        ]
    },
    {
        enunciado: "¿Cómo se comprueba que el desarrollo de la sección es correcto?",
        correcta: "Al cerrar el desarrollo, los puntos extremos de la línea de sección deben coincidir (el punto de inicio y fin es la misma arista de cierre)",
        incorrectas: [
            "Si queda bonito",
            "Si cabe en el papel"
        ]
    },
    {
        enunciado: "¿Qué es el 'tronco de cono' (confusión)?",
        correcta: "Es de revolución, no de poliedros, pero el concepto de sección plana es análogo (genera elipses en lugar de polígonos)",
        incorrectas: [
            "Un prisma cortado",
            "Una pirámide"
        ]
    }
];
