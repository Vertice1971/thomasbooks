var PREGUNTAS = [
    {
        enunciado: "¿Qué caracteriza al sistema de proporciones en el arte egipcio?",
        correcta: "El uso de una cuadrícula guía fija y un canon modular basado en el puño (18 puños para la altura total)",
        incorrectas: [
            "La búsqueda del realismo anatómico absoluto sin reglas fijas",
            "El uso exclusivo de la proporción áurea en todas las figuras"
        ]
    },
    {
        enunciado: "¿Qué concepto fundamental introduce Policleto en su 'Doríforo'?",
        correcta: "El 'Kanon', buscando la belleza ideal mediante la simetría y la conmensurabilidad de las partes (symmetria)",
        incorrectas: [
            "El feísmo como forma de expresión",
            "La desproporción intencionada para generar tensión"
        ]
    },
    {
        enunciado: "¿Qué cambio de proporción introduce el periodo Helenístico (ej. Laocoonte)?",
        correcta: "Se rompe la serenidad clásica y el canon estático, introduciendo torsiones, dinamismo y proporciones más dramáticas y emocionales",
        incorrectas: [
            "Se vuelve a las formas rígidas y frontales de Egipto",
            "Se eliminan las figuras humanas del arte"
        ]
    },
    {
        enunciado: "¿Qué tratado escribió Alberto Durero sobre la proporción?",
        correcta: "'Los cuatro libros de la proporción humana', donde analiza diversos tipos corporales mediante medidas antropométricas rigurosas",
        incorrectas: [
            "El tratado de la pintura abstracta",
            "La divina proporción de las esferas celestes"
        ]
    },
    {
        enunciado: "¿Qué importancia tiene la 'Sección Áurea' en el Renacimiento?",
        correcta: "Se retoma como la 'Divina Proporción', símbolo de la perfección divina y estructura subyacente en la composición pictórica y arquitectónica",
        incorrectas: [
            "Se rechaza por considerarla pagana",
            "Se olvida por completo en favor del azar"
        ]
    },
    {
        enunciado: "¿Cómo afecta la perspectiva jerárquica al arte medieval (Románico)?",
        correcta: "El tamaño de las figuras depende de su importancia teológica (Cristo/Virgen más grandes) y no de su posición espacial o anatomía real",
        incorrectas: [
            "Todas las figuras tienen exactamente el mismo tamaño para mostrar igualdad",
            "Los demonios siempre se pintan más grandes que los ángeles"
        ]
    },
    {
        enunciado: "¿Qué es el 'hombre perfecto' para el Humanismo renacentista?",
        correcta: "Aquel que encarna el microcosmos, cuyas proporciones reflejan la armonía del universo (macrocosmos), como ilustra el Hombre de Vitruvio",
        incorrectas: [
            "Un hombre sin pecado original",
            "El rey o emperador gobernante"
        ]
    },
    {
        enunciado: "¿Qué caracteriza la proporción en el Manierismo (ej. Parmigianino)?",
        correcta: "La 'figura serpentinata' y el alargamiento antinatural de las proporciones para buscar elegancia, sofisticación y alejamiento de la realidad",
        incorrectas: [
            "El retorno estricto al canon de 7 cabezas",
            "La representación de figuras muy bajas y anchas"
        ]
    },
    {
        enunciado: "¿Cómo usa Le Corbusier la proporción en el siglo XX?",
        correcta: "Crea el 'Modulor', un sistema de medidas armónicas a escala humana basado en la serie de Fibonacci y la sección áurea para estandarizar la arquitectura",
        incorrectas: [
            "Rechaza cualquier sistema de medidas y construye a ojo",
            "Usa exclusivamente el sistema métrico decimal sin referencia humana"
        ]
    },
    {
        enunciado: "¿Qué es la 'isocefalia' en el arte antiguo (ej. frisos griegos)?",
        correcta: "Convención compositiva donde las cabezas de todas las figuras se sitúan a la misma altura, independientemente de su postura (sentados, a caballo)",
        incorrectas: [
            "La representación de figuras con dos cabezas",
            "La ausencia total de cabezas en las estatuas"
        ]
    },
    {
        enunciado: "¿Qué papel juega la proporción en el Neoclasicismo?",
        correcta: "Se vuelve a los modelos grecorromanos, buscando la pureza de líneas, el equilibrio y la proporción idealizada frente al exceso barroco",
        incorrectas: [
            "Se prefiere la asimetría y el caos visual",
            "Se copian los modelos medievales desproporcionados"
        ]
    },
    {
        enunciado: "¿Cómo rompen las vanguardias (ej. Cubismo, Expresionismo) con la proporción clásica?",
        correcta: "La proporción mimética se abandona en favor de la expresión plástica, deconstruyendo la forma o distorsionándola para transmitir emoción o conceptos",
        incorrectas: [
            "Inventan un nuevo canon obligatorio de 15 cabezas",
            "Dejan de pintar figuras humanas para siempre"
        ]
    },
    {
        enunciado: "¿Qué es el 'canon de Lisipo' y qué obra lo ejemplifica?",
        correcta: "Un canon más esbelto de 8 cabezas que reduce el tamaño relativo de la cabeza, ejemplificado en el 'Apoxiomeno'",
        incorrectas: [
            "Un canon de 6 cabezas visto en el Doríforo",
            "Un canon para animales exclusivamente"
        ]
    },
    {
        enunciado: "¿Qué relación existe entre música y proporción en la teoría pitagórica del arte?",
        correcta: "Se creía que las relaciones numéricas simples que producían armonía musical (octava, quinta, cuarta) debían regir también las proporciones visuales",
        incorrectas: [
            "Los músicos debían pintar sus instrumentos",
            "No existe ninguna relación entre música y artes visuales"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva de tamaño' o 'escalera de profundidad'?",
        correcta: "Recurso donde la disminución proporcional del tamaño de objetos idénticos indica su alejamiento en el espacio",
        incorrectas: [
            "Una escalera real pintada en el cuadro",
            "Pintar siempre los objetos grandes detrás de los pequeños"
        ]
    },
    {
        enunciado: "¿En el arte bizantino, qué determina la proporción de las figuras?",
        correcta: "La espiritualidad y el simbolismo; las figuras son alargadas, inmateriales y flotantes, alejándose del naturalismo clásico",
        incorrectas: [
            "La musculatura y la anatomía forense",
            "El peso real de los modelos"
        ]
    },
    {
        enunciado: "¿Qué es el 'Facial Angle' (Ángulo Facial) de Camper en el siglo XVIII?",
        correcta: "Una teoría que medía el perfil humano y utilizaba el ángulo formado como criterio de belleza ideal (cercano a 100° en el ideal griego)",
        incorrectas: [
            "El ángulo para tomar una buena foto",
            "La medida de la sonrisa perfecta"
        ]
    },
    {
        enunciado: "¿Qué es la 'Proporción Cordobesa'?",
        correcta: "Una razón matemática (aprox 1,306) propuesta por el arquitecto Rafael de la Hoz, presente en la arquitectura califal de Córdoba",
        incorrectas: [
            "Una receta de cocina típica",
            "La medida de las calles de Córdoba"
        ]
    },
    {
        enunciado: "¿Qué artista del siglo XX estudió las proporciones ideales en 'El hombre de Vitruvio' pero deformándolas en sus obras posteriores?",
        correcta: "Salvador Dalí (aunque usó cánones clásicos, distorsionó formas en su periodo surrealista, manteniendo la maestría técnica)",
        incorrectas: [
            "Jackson Pollock",
            "Andy Warhol"
        ]
    },
    {
        enunciado: "¿Qué es la 'simetría dinámica' propuesta por Jay Hambidge?",
        correcta: "Un sistema de composición basado en rectángulos dinámicos (raíz de 2, 3, 5, etc.) y la sección áurea, aplicado al análisis del arte griego",
        incorrectas: [
            "Mover el cuadro mientras se pinta",
            "Una simetría que cambia cada día"
        ]
    },
    {
        enunciado: "¿Cómo influye la fotografía en la percepción de la proporción en el arte del s. XIX?",
        correcta: "Revela encuadres, cortes y deformaciones de perspectiva óptica real que influyen en pintores como Degas (cortes de figuras)",
        incorrectas: [
            "Hace que los pintores dejen de pintar para siempre",
            "Obliga a pintar solo en blanco y negro"
        ]
    },
    {
        enunciado: "¿Qué es el 'canon heroico' en el cómic y la ilustración fantástica?",
        correcta: "Una proporción exagerada de 8.5 a 9 cabezas (o más), con hombros muy anchos y musculatura hipertrofiada para denotar poder",
        incorrectas: [
            "Dibujar a los héroes con trajes de colores",
            "Un canon de 5 cabezas para que parezcan niños"
        ]
    },
    {
        enunciado: "¿Qué es la 'entasis' en la arquitectura griega?",
        correcta: "Un ligero abultamiento en el fuste de la columna para corregir la ilusión óptica de concavidad y dar sensación de tensión orgánica",
        incorrectas: [
            "Una columna rota",
            "La base cuadrada del templo"
        ]
    },
    {
        enunciado: "¿Qué relación hay entre proporción y 'estilo'?",
        correcta: "Cada estilo histórico define sus propios códigos de proporción (idealista, naturalista, expresionista) que reflejan su visión del mundo",
        incorrectas: [
            "El estilo es solo el color, la proporción es universal e invariable",
            "La proporción no tiene nada que ver con el estilo"
        ]
    },
    {
        enunciado: "¿Qué es la 'proporción áurea' en una espiral logarítmica?",
        correcta: "Una curva que crece infinitamente manteniendo su forma y proporción (spira mirabilis), presente en conchas como el Nautilus",
        incorrectas: [
            "Una espiral hecha de alambre de oro",
            "Un muelle de reloj"
        ]
    },
    {
        enunciado: "¿Qué tratado escribió Piero della Francesca sobre la perspectiva y proporción?",
        correcta: "'De Prospectiva Pingendi', donde matematiza el espacio pictórico y el tratamiento de los cuerpos geométricos y figuras",
        incorrectas: [
            "El libro de la cocina toscana",
            "Tratado sobre el cultivo de olivos"
        ]
    },
    {
        enunciado: "¿Qué es el 'canon' en el arte de la India antigua (Silpa Sastras)?",
        correcta: "Un sistema complejo de medidas (talamana) basado en unidades como el 'angula' (dedo), con diferentes cánones para dioses, demonios y humanos",
        incorrectas: [
            "No usaban cánones, era todo improvisado",
            "Usaban el mismo canon que los griegos"
        ]
    },
    {
        enunciado: "¿Qué es el 'escorzo mantegnesco' (por Mantegna)?",
        correcta: "Un punto de vista muy bajo y cercano (sotto in su) que genera una perspectiva extrema y dramática del cuerpo yacente (ej. Cristo muerto)",
        incorrectas: [
            "Un tipo de pasta italiana",
            "Dibujar de memoria sin modelo"
        ]
    },
    {
        enunciado: "¿Qué es la 'proporción aritmética' frente a la 'geométrica'?",
        correcta: "La aritmética se basa en la igualdad de diferencias (1, 2, 3), la geométrica en la igualdad de razones o cocientes (1, 2, 4, 8)",
        incorrectas: [
            "La aritmética es para sumar y la geométrica para dibujar triángulos",
            "Son lo mismo"
        ]
    },
    {
        enunciado: "¿Qué uso hace Leonardo del 'cuadrado' en el Hombre de Vitruvio?",
        correcta: "Representa el mundo terrenal y material, y la envergadura de los brazos extendidos iguala a la altura (formando un cuadrado perfecto)",
        incorrectas: [
            "Es una caja para encerrar al hombre",
            "Representa que el hombre es cuadrado de mente"
        ]
    },
    {
        enunciado: "¿Qué busca la 'desproporción' en el Expresionismo alemán?",
        correcta: "Reflejar la angustia, la fealdad moral o el sufrimiento interior mediante la deformación agresiva de las formas naturales",
        incorrectas: [
            "Es un error porque no sabían dibujar bien",
            "Busca hacer reír al espectador"
        ]
    },
    {
        enunciado: "¿Qué es el 'Rectángulo $sqrt{5}$' en el sistema de Hambridge?",
        correcta: "Un rectángulo dinámico construido a partir de dos cuadrados o de la diagonal de un rectángulo $sqrt{4}$ ($2$), base de muchas composiciones armónicas",
        incorrectas: [
            "Un rectángulo con 5 lados",
            "Un rectángulo que vale 5 euros"
        ]
    },
    {
        enunciado: "¿Qué es la 'regla de los impares' en composición y proporción?",
        correcta: "La idea de que un número impar de elementos (3, 5) es visualmente más dinámico y natural que un número par, que tiende a la simetría estática",
        incorrectas: [
            "Que solo pueden pintar los artistas nacidos en años impares",
            "Que no se deben usar números en el arte"
        ]
    },
    {
        enunciado: "¿Qué proporción caracteriza al arte africano tradicional (máscaras, fetiches)?",
        correcta: "Suele enfatizar la cabeza (sede del espíritu) y el torso, reduciendo las piernas; proporciones conceptuales y simbólicas, no naturalistas",
        incorrectas: [
            "Es exactamente igual al canon europeo",
            "Las figuras no tienen cabeza"
        ]
    },
    {
        enunciado: "¿Qué es el 'módulo de repetición' en el diseño ornamental?",
        correcta: "Una forma base que se repite siguiendo una red geométrica (simetría de traslación, rotación, etc.) para cubrir una superficie",
        incorrectas: [
            "Repetir el mismo error muchas veces",
            "Un módulo lunar"
        ]
    },
    {
        enunciado: "¿Qué es el 'canon' de belleza femenina de Rubens?",
        correcta: "Formas opulentas, carnosas y redondeadas, celebrando la abundancia y la vitalidad, alejadas de la delgadez gótica o moderna",
        incorrectas: [
            "Figuras extremadamente delgadas y ascéticas",
            "Mujeres con armadura de guerra"
        ]
    },
    {
        enunciado: "¿Qué importancia tiene la proporción en el diseño de logotipos (branding)?",
        correcta: "Crucial para la legibilidad, escalabilidad y armonía visual; a menudo se usan rejillas geométricas y proporción áurea para construirlos",
        incorrectas: [
            "Ninguna, un logo se hace sin pensar",
            "Solo importa que tenga colores bonitos"
        ]
    }
];
