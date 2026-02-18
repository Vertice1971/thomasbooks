var PREGUNTAS = [
    {
        enunciado: "¿Qué es el 'abatimiento' de un plano?",
        correcta: "Hacer girar un plano alrededor de una de sus trazas (charnela) hasta hacerlo coincidir con el plano de proyección para ver su contenido en VM",
        incorrectas: [
            "Borrar el plano",
            "Hacerlo pequeño"
        ]
    },
    {
        enunciado: "¿Qué es la 'charnela'?",
        correcta: "El eje de giro en un abatimiento (normalmente una traza del plano o una recta horizontal/frontal)",
        incorrectas: [
            "Una bisagra de puerta",
            "El punto de giro"
        ]
    },
    {
        enunciado: "¿Cómo se abate un punto P contenido en un plano?",
        correcta: "Trazando una perpendicular a la charnela y llevando sobre ella la distancia real (hipotenusa de triángulo con cota/alejamiento)",
        incorrectas: [
            "Llevando el punto a la LT",
            "Girándolo 90 grados"
        ]
    },
    {
        enunciado: "¿Qué es la 'afinidad' en el abatimiento?",
        correcta: "Existe una relación de afinidad ortogonal entre la proyección (planta/alzado) y la figura abatida; el eje de afinidad es la charnela",
        incorrectas: [
            "No hay relación",
            "Es una homotecia"
        ]
    },
    {
        enunciado: "¿Para qué sirve el abatimiento?",
        correcta: "Para dibujar figuras planas en verdadera forma (polígonos, círculos) en planos oblicuos y medir ángulos reales",
        incorrectas: [
            "Para ver el alzado",
            "Para sombrear"
        ]
    },
    {
        enunciado: "¿Qué es el 'desabatimiento'?",
        correcta: "El proceso inverso: pasar puntos de la figura abatida (VM) a sus proyecciones diédricas",
        incorrectas: [
            "Cancelar el dibujo",
            "Subir el plano"
        ]
    },
    {
        enunciado: "¿Qué es un 'Giro' en diédrico?",
        correcta: "Rotar una figura alrededor de un eje (recta vertical o de punta) para colocarla en una posición favorable (ej. paralela al plano)",
        incorrectas: [
            "Dar vueltas al papel",
            "Un cambio de escala"
        ]
    },
    {
        enunciado: "¿En un giro alrededor de un eje vertical, qué cambia?",
        correcta: "Cambian los alejamientos y la posición x, pero la COTA de todos los puntos se mantiene constante",
        incorrectas: [
            "Cambia la cota",
            "No cambia nada"
        ]
    },
    {
        enunciado: "¿En un giro alrededor de un eje de punta, qué cambia?",
        correcta: "Cambian las cotas y posición, pero el ALEJAMIENTO se mantiene constante",
        incorrectas: [
            "Cambia el alejamiento",
            "Cambia todo"
        ]
    },
    {
        enunciado: "¿Qué es el 'Cambio de Plano'?",
        correcta: "Sustituir uno de los planos de proyección por otro nuevo perpendicular al que se mantiene, cambiando la Línea de Tierra; el objeto no se mueve, cambia el observador",
        incorrectas: [
            "Cambiar el papel",
            "Mover el objeto"
        ]
    },
    {
        enunciado: "¿En un cambio de plano Horizontal (cambio de PV), qué se conserva?",
        correcta: "Las COTAS de los puntos (alturas) se mantienen iguales respecto a la nueva LT",
        incorrectas: [
            "Los alejamientos",
            "Nada"
        ]
    },
    {
        enunciado: "¿En un cambio de plano Vertical (cambio de PH), qué se conserva?",
        correcta: "Los ALEJAMIENTOS de los puntos se mantienen iguales respecto a la nueva LT",
        incorrectas: [
            "Las cotas",
            "Las proyecciones"
        ]
    },
    {
        enunciado: "¿Para transformar una recta oblicua en recta horizontal mediante cambio de plano, la nueva LT debe ser...?",
        correcta: "Paralela a la proyección horizontal de la recta",
        incorrectas: [
            "Perpendicular a la recta",
            "Cualquiera"
        ]
    },
    {
        enunciado: "¿Para transformar un plano oblicuo en proyectante mediante cambio de plano, la nueva LT debe ser...?",
        correcta: "Perpendicular a la traza del plano (horizontal o vertical según el cambio)",
        incorrectas: [
            "Paralela a la traza",
            "Oblicua"
        ]
    },
    {
        enunciado: "¿Se pueden hacer dos cambios de plano sucesivos?",
        correcta: "Sí, para convertir una recta cualquiera en recta de punta/vertical, o un plano cualquiera en horizontal/frontal",
        incorrectas: [
            "No, solo uno",
            "Se borra el dibujo"
        ]
    },
    {
        enunciado: "¿Qué método es mejor para hallar la VM de la sección de un prisma?",
        correcta: "Cambio de plano (para ver el plano secante de canto) o abatimiento del plano secante",
        incorrectas: [
            "Giro aleatorio",
            "A ojo"
        ]
    },
    {
        enunciado: "¿Cómo se abate un plano proyectante?",
        correcta: "Es inmediato: la traza oblicua se gira 90º hasta coincidir con la otra traza o paralela a ella",
        incorrectas: [
            "Es muy difícil",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Cómo se abate un punto sin usar trazas (abatimiento de plano que pasa por LT)?",
        correcta: "Usando un perfil auxiliar o abatiendo sobre un plano paralelo al de proyección",
        incorrectas: [
            "No se puede",
            "Imaginándolo"
        ]
    },
    {
        enunciado: "¿Qué es la 'recta de máxima pendiente' abatida?",
        correcta: "Es perpendicular a la charnela (traza horizontal)",
        incorrectas: [
            "Paralela a la charnela",
            "Cualquier recta"
        ]
    },
    {
        enunciado: "¿Un círculo contenido en un plano oblicuo se proyecta como...?",
        correcta: "Una elipse (se abate para dibujarlo como círculo)",
        incorrectas: [
            "Un círculo",
            "Una recta"
        ]
    },
    {
        enunciado: "¿Qué utilidad tiene el giro para hallar distancias?",
        correcta: "Girar un segmento hasta ponerlo frontal u horizontal permite medir su longitud real directamente en proyección",
        incorrectas: [
            "Ninguna",
            "Hace el segmento más largo"
        ]
    },
    {
        enunciado: "¿Qué diferencia hay entre Giro y Cambio de Plano?",
        correcta: "En el giro se mueve el objeto (cambian coordenadas relativas); en el cambio de plano se mueven los planos de referencia (cambia la LT)",
        incorrectas: [
            "Son lo mismo",
            "El giro es en 3D y el cambio en 2D"
        ]
    },
    {
        enunciado: "¿Cómo poner un plano oblicuo paralelo al horizontal?",
        correcta: "Mediante dos cambios de plano (primero a proyectante, luego a horizontal) o dos giros",
        incorrectas: [
            "Con un solo paso",
            "Imposible"
        ]
    },
    {
        enunciado: "¿Qué es el 'abatimiento sobre un plano paralelo'?",
        correcta: "Abatir sobre un plano horizontal/frontal cualquiera en lugar de sobre el plano de proyección base (útil si el dibujo se sale del papel)",
        incorrectas: [
            "Abatir en el aire",
            "Error"
        ]
    },
    {
        enunciado: "¿En un giro, la trayectoria de un punto es...?",
        correcta: "Un arco de circunferencia situado en un plano perpendicular al eje de giro",
        incorrectas: [
            "Una recta",
            "Una elipse"
        ]
    },
    {
        enunciado: "¿La 'visibilidad' cambia en un giro?",
        correcta: "Sí, pueden aparecer caras ocultas; en cambio de plano también cambia la vista",
        incorrectas: [
            "No, nunca",
            "Solo en el color"
        ]
    },
    {
        enunciado: "¿Para dibujar una pirámide regular apoyada en un plano oblicuo se usa...?",
        correcta: "Abatimiento del plano (para dibujar la base en VM y hallar el centro) y luego desabatimiento y altura perpendicular",
        incorrectas: [
            "Dibujo directo",
            "Giro de la pirámide"
        ]
    },
    {
        enunciado: "¿Cómo se miden ángulos con giros?",
        correcta: "Girando planos/rectas hasta posiciones particulares (proyectantes/frontales) donde el ángulo se proyecta en VM",
        incorrectas: [
            "Directamente",
            "No se puede"
        ]
    },
    {
        enunciado: "¿Qué es 'abatir una recta' (segmento)?",
        correcta: "Abatir el plano proyectante que la contiene (o el plano que forma con su proyección) para ver su longitud real",
        incorrectas: [
            "Tumbar la recta",
            "Borrarla"
        ]
    },
    {
        enunciado: "¿El centro de una circunferencia abatida es...?",
        correcta: "El homólogo afín del centro de la elipse proyección (intersección de ejes)",
        incorrectas: [
            "Cualquier punto",
            "El mismo punto proyéctado"
        ]
    },
    {
        enunciado: "¿Qué ventaja tiene el Cambio de Plano sobre el Giro?",
        correcta: "Suele ensuciar menos el dibujo (se hace aparte con nuevas LT) y es conceptualmente más rápido para conjuntos",
        incorrectas: [
            "Ninguna",
            "Es más difícil"
        ]
    },
    {
        enunciado: "¿Cómo convertir una recta de perfil en vertical?",
        correcta: "Giro alrededor de eje vertical hasta punta, y luego... no, mejor cambio de plano directo o giro",
        incorrectas: [
            "Imposible",
            "Borrando"
        ]
    },
    {
        enunciado: "¿Qué es la 'charnela' en cambio de plano?",
        correcta: "No se usa charnela, sino 'nueva línea de tierra'",
        incorrectas: [
            "El eje de giro",
            "La traza"
        ]
    },
    {
        enunciado: "¿Si abatimos sobre el plano vertical, la charnela es...?",
        correcta: "La traza vertical del plano",
        incorrectas: [
            "La traza horizontal",
            "La LT"
        ]
    },
    {
        enunciado: "¿Se puede abatir el plano de perfil?",
        correcta: "Sí, es lo que se hace para ver la tercera vista (abatimiento sobre el PV o PH)",
        incorrectas: [
            "No, nunca",
            "Solo si es paralelo"
        ]
    },
    {
        enunciado: "¿En un giro, el eje debe ser...?",
        correcta: "Recta de punta o vertical (perpendicular a un plano proyección) para simplificar la proyección del arco de giro",
        incorrectas: [
            "Cualquier recta oblicua",
            "No hace falta eje"
        ]
    },
    {
        enunciado: "¿Qué es la 'recta de máxima pendiente' en un cambio de plano?",
        correcta: "Si ponemos la LT perpendicular a la traza H, la recta de máxima pendiente se convierte en recta frontal (paralela al nuevo vertical)",
        incorrectas: [
            "Recta de punta",
            "Recta nula"
        ]
    },
    {
        enunciado: "¿Los ángulos se conservan en el abatimiento?",
        correcta: "Sí, en el abatimiento vemos la Verdadera Magnitud de todo (longitudes y ángulos)",
        incorrectas: [
            "No, se deforman",
            "Solo longitudes"
        ]
    },
    {
        enunciado: "¿Qué es 'desabatir por rectas horizontales'?",
        correcta: "Usar las rectas horizontales del plano (paralelas a la charnela H) para llevar puntos a su cota correspondiente",
        incorrectas: [
            "Un método erróneo",
            "Usar verticales"
        ]
    },
    {
        enunciado: "¿El abatimiento es una transformación...?",
        correcta: "Isométrica (conserva medidas) en el espacio, aunque la relación con la proyección es afín",
        incorrectas: [
            "Proyectiva pura",
            "Deforme"
        ]
    }
];
