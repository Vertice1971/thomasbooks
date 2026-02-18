var PREGUNTAS = [
    {
        enunciado: "¿Qué es la 'Escala' (E)?",
        correcta: "La relación matemática constante entre las dimensiones del dibujo y las dimensiones reales del objeto (E = Dibujo / Realidad)",
        incorrectas: [
            "Una regla de plástico",
            "La medida del papel"
        ]
    },
    {
        enunciado: "¿Qué significa una escala 1:1?",
        correcta: "Escala natural o tamaño real; 1 mm en el dibujo equivale a 1 mm en la realidad",
        incorrectas: [
            "Escala de reducción",
            "Escala de ampliación"
        ]
    },
    {
        enunciado: "¿Qué es una 'Escala de Reducción'?",
        correcta: "Aquella donde la relación es menor que 1 (ej. 1:50); el denominador es mayor que el numerador",
        incorrectas: [
            "Escala 2:1",
            "Escala 10:1"
        ]
    },
    {
        enunciado: "¿Qué es una 'Escala de Ampliación'?",
        correcta: "Aquella donde la relación es mayor que 1 (ej. 5:1); el numerador es mayor que el denominador",
        incorrectas: [
            "Escala 1:100",
            "Escala 1:2"
        ]
    },
    {
        enunciado: "¿Qué es la 'Escala Gráfica'?",
        correcta: "Una representación lineal graduada de la escala numérica que permite medir directamente en el plano sin hacer cálculos",
        incorrectas: [
            "Un dibujo bonito",
            "El grosor de la línea"
        ]
    },
    {
        enunciado: "¿Qué es la 'Contraescala' o escala decimal?",
        correcta: "Una pequeña subdivisión a la izquierda del cero en la escala gráfica, dividida en décimas de la unidad principal para medir con precisión",
        incorrectas: [
            "Una escala al revés",
            "Una escala falsa"
        ]
    },
    {
        enunciado: "¿Qué es el 'Triángulo Universal de Escalas'?",
        correcta: "Construcción gráfica basada en Tales que permite obtener cualquier escala de reducción o ampliación de forma rápida",
        incorrectas: [
            "Un escalímetro triangular",
            "Una señal de tráfico"
        ]
    },
    {
        enunciado: "¿Qué es un 'Escalímetro'?",
        correcta: "Regla prismática (normalmente triangular) que contiene varias escalas normalizadas graduadas para uso directo",
        incorrectas: [
            "Un metro láser",
            "Una báscula"
        ]
    },
    {
        enunciado: "¿Cuál es la norma UNE/ISO para escalas?",
        correcta: "UNE-EN ISO 5455; define las escalas normalizadas recomendadas (series 1, 2, 5 y sus múltiplos decimales)",
        incorrectas: [
            "Norma DIN A4",
            "Ley de Propiedad"
        ]
    },
    {
        enunciado: "¿Qué significa escala 1:200?",
        correcta: "1 unidad en el plano son 200 en la realidad (0.5 cm = 1 m)",
        incorrectas: [
            "200 cm son 1 cm",
            "El dibujo es 200 veces más grande"
        ]
    },
    {
        enunciado: "¿Cómo se calcula el 'Factor de Escala'?",
        correcta: "Dividiendo la medida del dibujo entre la medida real (ambas en la misma unidad)",
        incorrectas: [
            "Multiplicando",
            "Sumando"
        ]
    },
    {
        enunciado: "¿Qué es la 'Escala Volante'?",
        correcta: "Una tira de papel marcada con la escala gráfica que se usa para transportar medidas sobre el dibujo",
        incorrectas: [
            "Una escala que vuela",
            "Una escala aproximada"
        ]
    },
    {
        enunciado: "¿Qué es la 'Escala Transversal' o de decimales?",
        correcta: "Construcción gráfica con líneas diagonales paralelas que permite apreciar centésimas de la unidad por semejanza de triángulos",
        incorrectas: [
            "Escala atravesada",
            "Solo para líneas curvas"
        ]
    },
    {
        enunciado: "¿Si un plano está a escala 1:50, qué medida real representa un segmento de 4 cm?",
        correcta: "2 metros (4 cm x 50 = 200 cm)",
        incorrectas: [
            "50 metros",
            "4 metros"
        ]
    },
    {
        enunciado: "¿Si queremos dibujar un objeto de 10 mm a tamaño 50 mm, qué escala usamos?",
        correcta: "5:1 (Ampliación)",
        incorrectas: [
            "1:5",
            "50:10"
        ]
    },
    {
        enunciado: "¿Qué se debe indicar en el cuadro de rotulación (cajetín)?",
        correcta: "La escala principal del dibujo; si hay otras detalles a distinta escala, se indica junto a la vista correspondiente",
        incorrectas: [
            "El precio",
            "La hora del dibujo"
        ]
    },
    {
        enunciado: "¿Qué son las 'escalas normalizadas de reducción'?",
        correcta: "1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200, 1:500, 1:1000...",
        incorrectas: [
            "1:3, 1:7, 1:9",
            "Cualquier número vale"
        ]
    },
    {
        enunciado: "¿Qué son las 'escalas normalizadas de ampliación'?",
        correcta: "2:1, 5:1, 10:1, 20:1, 50:1...",
        incorrectas: [
            "3:1, 7:1",
            "Solo existen reducciones"
        ]
    },
    {
        enunciado: "¿Qué es una 'escala intermedia'?",
        correcta: "Escala no normalizada necesaria por formato de papel (ej. 1:15); se debe indicar expresamente, pero es preferible evitarla",
        incorrectas: [
            "Escala que cambia",
            "Escala 1:1"
        ]
    },
    {
        enunciado: "¿Cómo afecta la escala a los ángulos?",
        correcta: "NO afecta; los ángulos se mantienen siempre en su verdadera magnitud independientemente de la escala lineal",
        incorrectas: [
            "Se reducen igual",
            "Se amplían"
        ]
    },
    {
        enunciado: "¿Cómo afecta la escala a la superficie (área)?",
        correcta: "El factor de escala se aplica al cuadrado (E²); si E=1:2, el área es 1/4 de la real",
        incorrectas: [
            "El área se reduce a la mitad",
            "El área no cambia"
        ]
    },
    {
        enunciado: "¿Qué es la cota 's/e'?",
        correcta: "Sin Escala; indica que una dimensión no está dibujada a la escala general (por modificación posterior o error asumido)",
        incorrectas: [
            "Sin Espacio",
            "Sobre Eje"
        ]
    },
    {
        enunciado: "¿Qué utilidad tiene la escala gráfica en mapas impresos?",
        correcta: "Si el mapa se reduce o amplía (fotocopia), la escala gráfica se deforma proporcionalmente y sigue siendo válida para medir",
        incorrectas: [
            "Adornar el mapa",
            "Ninguna"
        ]
    },
    {
        enunciado: "¿Qué es el 'Nonius' o Vernier?",
        correcta: "Regla auxiliar deslizante que permite aumentar la precisión de lectura de una escala principal (calibres)",
        incorrectas: [
            "Un nombre de estrella",
            "Una escala logarítmica"
        ]
    },
    {
        enunciado: "¿Qué es una 'Escala Logarítmica'?",
        correcta: "Escala donde las divisiones son proporcionales a los logaritmos de los números; usada en gráficas para rangos muy amplios",
        incorrectas: [
            "Escala normal",
            "Escala de madera"
        ]
    },
    {
        enunciado: "¿Para qué se usan las escalas 1:20000 o 1:50000?",
        correcta: "Cartografía y topografía (mapas militares, carreteras)",
        incorrectas: [
            "Planos de casas",
            "Piezas de reloj"
        ]
    },
    {
        enunciado: "¿Para qué se usa la escala 10:1?",
        correcta: "Mecánica de precisión y relojería (piezas muy pequeñas)",
        incorrectas: [
            "Arquitectura",
            "Mapas mundi"
        ]
    },
    {
        enunciado: "¿Cómo se construye una escala gráfica volante?",
        correcta: "Marcando en el borde de un papel las divisiones correspondientes a unidades reales calculadas con E",
        incorrectas: [
            "Con tijeras",
            "A ojo"
        ]
    },
    {
        enunciado: "¿Qué significa 'A escala'?",
        correcta: "Que el dibujo mantiene una proporción constante y exacta con el objeto real en todas sus partes",
        incorrectas: [
            "Que está dibujado grande",
            "Que tiene colores"
        ]
    },
    {
        enunciado: "¿Qué es la 'Apreciación' de una escala?",
        correcta: "La menor medida que se puede leer o estimar con fiabilidad en la escala gráfica",
        incorrectas: [
            "Lo mucho que te gusta",
            "El precio"
        ]
    },
    {
        enunciado: "¿Qué es el 'escalado' en CAD?",
        correcta: "Comando para cambiar el tamaño de entidades; pero en Espacio Papel (presentación) se define la escala de impresión de las ventanas",
        incorrectas: [
            "Subir escaleras",
            "Medir la pantalla"
        ]
    },
    {
        enunciado: "¿En un plano a escala E, las cotas indican valores...?",
        correcta: "REALES siempre, nunca los valores medidos en el papel",
        incorrectas: [
            "Del papel",
            "Escalados"
        ]
    },
    {
        enunciado: "¿Qué es la 'proporcionalidad'?",
        correcta: "Fundamento geométrico de las escalas; semejanza entre figuras (Teorema de Tales)",
        incorrectas: [
            "Igualdad",
            "Simetría"
        ]
    },
    {
        enunciado: "¿Cómo calcular la distancia real D con distancia en mapa d y escala 1/M?",
        correcta: "D = d · M",
        incorrectas: [
            "D = d / M",
            "D = d + M"
        ]
    },
    {
        enunciado: "¿Qué es una escala de 'falsa perspectiva' (eje Z)?",
        correcta: "Coeficiente de reducción axonométrico aplicado como una escala (ej. 0.816)",
        incorrectas: [
            "Escala mentirosa",
            "Perspectiva cónica"
        ]
    },
    {
        enunciado: "¿Se puede usar un escalímetro para trazar líneas?",
        correcta: "No, se estropea el borde graduado; solo se debe usar para marcar puntos de medida",
        incorrectas: [
            "Sí, es una regla",
            "Para cortar papel"
        ]
    },
    {
        enunciado: "¿Qué es la 'escala de intensidad' (artístico)?",
        correcta: "Gradación de valores tonales, no tiene que ver con medidas métricas (polisemia)",
        incorrectas: [
            "Escala de grises",
            "Escala 1:100"
        ]
    },
    {
        enunciado: "¿Para pasar de 1:100 a 1:50 se debe...?",
        correcta: "Ampliar al doble (x2)",
        incorrectas: [
            "Reducir a la mitad",
            "Quedarse igual"
        ]
    },
    {
        enunciado: "¿Qué es el 'pantógrafo' (aplicación)?",
        correcta: "Instrumento para copiar dibujos a diferente escala mecánicamente",
        incorrectas: [
            "Un bolígrafo",
            "Un mapa"
        ]
    },
    {
        enunciado: "¿Qué es la 'escala numérica'?",
        correcta: "La fracción 1/M (ej. 1:500)",
        incorrectas: [
            "La regla dibujada",
            "El precio"
        ]
    }
];
