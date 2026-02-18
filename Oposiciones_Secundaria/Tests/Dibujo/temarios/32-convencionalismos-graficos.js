var PREGUNTAS = [
    {
        enunciado: "¿Qué es un 'corte' en dibujo técnico?",
        correcta: "Representación convencional que muestra el interior de una pieza como si hubiera sido separada por un plano secante, eliminando la parte anterior",
        incorrectas: [
            "Una rotura del papel",
            "Dibujar solo la mitad de la pieza"
        ]
    },
    {
        enunciado: "¿Qué diferencia hay entre 'corte' y 'sección'?",
        correcta: "En la sección se dibuja solo la superficie de contacto con el plano cortante (la 'loncha'); en el corte se dibuja eso más lo que queda detrás",
        incorrectas: [
            "Son sinónimos exactos",
            "La sección es para madera y el corte para metal"
        ]
    },
    {
        enunciado: "¿Cómo se representa la superficie cortada (maciza)?",
        correcta: "Mediante un rayado de líneas finas continuas paralelas, inclinadas generalmente a 45º respecto a los ejes o contorno",
        incorrectas: [
            "Pintada de negro sólido",
            "Con cruces"
        ]
    },
    {
        enunciado: "¿Qué es un 'corte total' por un solo plano?",
        correcta: "El producido por un plano cortante que atraviesa toda la pieza de lado a lado (generalmente por el eje de simetría)",
        incorrectas: [
            "Cortar la pieza en trozos pequeños",
            "Un corte parcial"
        ]
    },
    {
        enunciado: "¿Qué es un 'semicorte' o corte al cuarto?",
        correcta: "En piezas simétricas, se representa la mitad de la vista en alzado y la otra mitad en corte, separadas por el eje de simetría; no se acotan ocultas",
        incorrectas: [
            "Cortar una cuarta parte del papel",
            "Un corte mal hecho"
        ]
    },
    {
        enunciado: "¿Qué es un 'corte por planos paralelos' (escalonado)?",
        correcta: "Corte cuyo recorrido se quiebra en ángulo recto para pasar por distintos detalles internos situados en planos diferentes (ej. agujeros desalineados)",
        incorrectas: [
            "Varios cortes separados",
            "Corte en escalera mecánica"
        ]
    },
    {
        enunciado: "¿Qué es un 'corte por planos concurrentes'?",
        correcta: "Corte formado por dos planos que se cortan en un ángulo (abatimiento); una parte se gira hasta coincidir con el plano del papel antes de proyectar",
        incorrectas: [
            "Corte en cruz",
            "Corte imposible"
        ]
    },
    {
        enunciado: "¿Qué es una 'rotura'?",
        correcta: "Convención gráfica para ahorrar espacio representando piezas largas y uniformes (ejes, tubos) eliminando la parte central",
        incorrectas: [
            "Una grieta real en la pieza",
            "Un error de dibujo"
        ]
    },
    {
        enunciado: "¿Cómo se limita una rotura en ejes macizos?",
        correcta: "Con una línea fina a mano alzada o una línea en zig-zag (trazada con regla)",
        incorrectas: [
            "Con una línea gruesa",
            "Con tijeras"
        ]
    },
    {
        enunciado: "¿Qué es una 'sección abatida'?",
        correcta: "Sección transversal dibujada sobre la propia vista (girada 90º) para mostrar el perfil local (ej. perfil de un brazo o nervio)",
        incorrectas: [
            "Una sección tirada al suelo",
            "Una sección borrosa"
        ]
    },
    {
        enunciado: "¿Qué es una 'sección desplazada'?",
        correcta: "Sección sacada fuera de la vista principal, identificada por letras (Corte A-A) y unida o no por trazo y punto",
        incorrectas: [
            "Una sección que se ha movido por error",
            "Un corte mal colocado"
        ]
    },
    {
        enunciado: "¿Qué elementos macizos NO se rayan longitudinalmente aunque el corte pase por ellos?",
        correcta: "Ejes, nervios, tabiques, brazos de ruedas, tornillos, tuercas, remaches y bolas de cojinetes (convencionalismo)",
        incorrectas: [
            "Los agujeros",
            "Las carcasas"
        ]
    },
    {
        enunciado: "¿Cómo se raya un corte si hay dos piezas diferentes en contacto (conjunto)?",
        correcta: "Cambiando la inclinación o el paso del rayado en la pieza adyacente para distinguirlas",
        incorrectas: [
            "Se rayan igual para que parezcan una",
            "Se pintan de colores distintos"
        ]
    },
    {
        enunciado: "¿Qué es un 'corte parcial' o rotura local?",
        correcta: "Eliminación de una pequeña parte exterior de la pieza (limitada por línea a mano alzada) para mostrar un detalle interior (ej. chavetero ciego)",
        incorrectas: [
            "Un corte incompleto",
            "Un corte a medias"
        ]
    },
    {
        enunciado: "¿Qué es el 'rayado de materiales específicos'?",
        correcta: "Normas antiguas (o específicas) usaban rayados distintos para acero, bronce, madera, etc.; la norma general ISO recomienda rayado simple a 45º",
        incorrectas: [
            "Rayar con colores",
            "Obligatorio siempre"
        ]
    },
    {
        enunciado: "¿Cómo se indica la marcha de un corte?",
        correcta: "Con línea de trazo y punto gruesa en los extremos y cambios de dirección, terminada en flechas que indican el sentido de observación y letras mayúsculas",
        incorrectas: [
            "Con una línea roja continua",
            "No hace falta indicarlo"
        ]
    },
    {
        enunciado: "¿En un corte, las líneas ocultas...?",
        correcta: "Se suelen omitir para mayor claridad, a menos que sean imprescindibles para entender la pieza",
        incorrectas: [
            "Se dibujan siempre",
            "Se dibujan en rojo"
        ]
    },
    {
        enunciado: "¿Qué es una 'sección auxiliar'?",
        correcta: "Parecido a sección desplazada, usada para aclarar formas de perfiles, ganchos, etc.",
        incorrectas: [
            "Una sección de ayuda",
            "No existe"
        ]
    },
    {
        enunciado: "¿Cómo se representa una rotura en un tubo (hueco)?",
        correcta: "Con una curva en forma de lóbulo o lazo ('hueso') que indica la sección tubular",
        incorrectas: [
            "Igual que una barra maciza",
            "Con una recta"
        ]
    },
    {
        enunciado: "¿Qué es un 'corte de detalle'?",
        correcta: "Un corte parcial ampliado de una zona concreta",
        incorrectas: [
            "Un corte muy bonito",
            "Un corte pequeño"
        ]
    },
    {
        enunciado: "¿Se puede acotar sobre las líneas de rayado?",
        correcta: "Se debe evitar; si es inevitable, se interrumpe el rayado donde va la cifra",
        incorrectas: [
            "Sí, encima de las líneas",
            "No, nunca"
        ]
    },
    {
        enunciado: "¿Qué es la 'superficie de corte' ideal?",
        correcta: "Un plano (o conjunto de planos) imaginario sin espesor",
        incorrectas: [
            "Una sierra",
            "Un láser"
        ]
    },
    {
        enunciado: "¿Qué pasa si el corte coincide con una arista?",
        correcta: "Prevalece la arista visible (línea gruesa) sobre la línea de corte",
        incorrectas: [
            "Se borra la arista",
            "No importa"
        ]
    },
    {
        enunciado: "¿Qué es el 'ángulo de rayado'?",
        correcta: "45º respecto a los ejes de simetría o contorno principal de la pieza",
        incorrectas: [
            "90º",
            "30º"
        ]
    },
    {
        enunciado: "¿Si la pieza es muy fina (chapa delgada) en corte, cómo se dibuja?",
        correcta: "Ennegrecida totalmente (sin rayado), dejando una fina separación en blanco entre piezas contiguas",
        incorrectas: [
            "Con rayado muy junto",
            "Como una línea gruesa"
        ]
    },
    {
        enunciado: "¿Qué son los 'detalles' ampliados?",
        correcta: "Vistas parciales de zonas pequeñas rodeadas por un círculo y marcadas con una letra (detalle A) representadas a escala mayor",
        incorrectas: [
            "Adornos",
            "Zoom digital"
        ]
    },
    {
        enunciado: "¿Qué es la 'rotura en madera'?",
        correcta: "Representación en zig-zag irregular imitando las astillas de la madera",
        incorrectas: [
            "Línea recta",
            "Curva suave"
        ]
    },
    {
        enunciado: "¿Por qué NO se rayan los nervios longitudinalmente?",
        correcta: "Para evitar la falsa impresión de que la pieza es maciza en esa zona; es un convencionalismo para mejorar la legibilidad",
        incorrectas: [
            "Por pereza",
            "Porque son huecos"
        ]
    },
    {
        enunciado: "¿Los radios de las ruedas se cortan?",
        correcta: "No, longitudinalmente no se cortan (convencionalismo), se dibujan como si estuvieran delante del plano de corte",
        incorrectas: [
            "Sí, siempre",
            "Depende del material"
        ]
    },
    {
        enunciado: "¿Qué es un 'medio corte'?",
        correcta: "Sinónimo de semicorte (mitad vista, mitad corte)",
        incorrectas: [
            "Corte incompleto",
            "Corte de perfil"
        ]
    },
    {
        enunciado: "¿Cómo se representan los hilos de rosca en corte?",
        correcta: "El fondo de rosca con línea fina y la cresta con gruesa (estándar de roscas)",
        incorrectas: [
            "Todo igual",
            "Como dientes de sierra"
        ]
    },
    {
        enunciado: "¿Qué es una 'vista auxiliar' parcial?",
        correcta: "Vista proyectada en una dirección oblicua para mostrar la VM de una cara inclinada, limitada por una línea de rotura",
        incorrectas: [
            "Una vista falsa",
            "Un corte"
        ]
    },
    {
        enunciado: "¿Si un corte divide la pieza en dos partes separadas, es...?",
        correcta: "Correcto, se dibujan ambas partes rayadas en la misma dirección y alineación",
        incorrectas: [
            "Error, debe ser una sola pieza",
            "Se borra una parte"
        ]
    },
    {
        enunciado: "¿Qué norma regula los principios generales de representación (cortes)?",
        correcta: "ISO 128 (UNE 1-032 antigua)",
        incorrectas: [
            "ISO 9000",
            "Norma de tráfico"
        ]
    },
    {
        enunciado: "¿El rayado debe tener espaciado...?",
        correcta: "Uniforme y proporcional al tamaño de la zona a rayar (ni muy denso ni muy separado)",
        incorrectas: [
            "Aleatorio",
            "Siempre 1 mm"
        ]
    },
    {
        enunciado: "¿Qué es un 'corte fantasma'?",
        correcta: "Representación de piezas externas o móviles con línea de trazo y dos puntos fina (contexto)",
        incorrectas: [
            "Un corte invisible",
            "Corte de miedo"
        ]
    },
    {
        enunciado: "¿Se rayan las zonas huecas?",
        correcta: "Nunca, solo la materia sólida cortada",
        incorrectas: [
            "Sí, en gris claro",
            "A veces"
        ]
    },
    {
        enunciado: "¿Qué indica la letra en la flecha de corte?",
        correcta: "Identifica el corte (Sección A-A) para localizarlo en la hoja",
        incorrectas: [
            "La calidad del corte",
            "El inicio"
        ]
    },
    {
        enunciado: "¿Qué es un 'corte abatido sin desplazamiento'?",
        correcta: "Sección abatida dibujada dentro de la vista con línea fina",
        incorrectas: [
            "Un error",
            "Corte desplazado"
        ]
    },
    {
        enunciado: "¿Para qué sirve la rotura en cuña?",
        correcta: "Para mostrar secciones de piezas piramidales o cónicas, o madera",
        incorrectas: [
            "Para nada",
            "Para metal"
        ]
    }
];
