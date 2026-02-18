var PREGUNTAS = [
    {
        enunciado: "¿Qué significan las siglas 'DIN' en normalización?",
        correcta: "Deutsches Institut für Normung (Instituto Alemán de Normalización); normas históricas base de muchas actuales",
        incorrectas: [
            "Diseño Industrial Normalizado",
            "Dibujo Internacional de Normas"
        ]
    },
    {
        enunciado: "¿Qué es la 'ISO'?",
        correcta: "International Organization for Standardization; organismo encargado de coordinar las normas nacionales para crear estándares internacionales unificados",
        incorrectas: [
            "Instituto de Seguridad en Obra",
            "International Standard Office"
        ]
    },
    {
        enunciado: "¿Qué es una norma 'UNE'?",
        correcta: "Una Norma Española creada por AENOR (Asociación Española de Normalización); equivalente a las ISO en España",
        incorrectas: [
            "Una Norma Europea",
            "Unión de Normas Estatales"
        ]
    },
    {
        enunciado: "¿Qué es la 'normalización'?",
        correcta: "El conjunto de reglas y preceptos que regulan la fabricación y representación gráfica (dibujo técnico) para unificar criterios y facilitar la comunicación",
        incorrectas: [
            "Hacer dibujos normales",
            "La ley de la industria"
        ]
    },
    {
        enunciado: "¿Qué es un 'croquis'?",
        correcta: "Un dibujo realizado a mano alzada, sin escala exacta (aunque proporcionado) pero con toda la información, medidas y acotación necesarias para fabricar la pieza",
        incorrectas: [
            "Un dibujo artístico rápido sin medidas",
            "Un plano delineation final a escala"
        ]
    },
    {
        enunciado: "¿Qué es la 'acotación'?",
        correcta: "El proceso de indicar en un plano las dimensiones reales de un objeto mediante líneas, cifras, símbolos y notas, siguiendo normas estrictas (UNE 1-039)",
        incorrectas: [
            "Dibujar a tamaño real",
            "Medir el papel"
        ]
    },
    {
        enunciado: "¿Las cifras de cota deben indicar...?",
        correcta: "Siempre las dimensiones reales de la pieza, independientemente de la escala a la que esté dibujada",
        incorrectas: [
            "Las dimensiones del dibujo en el papel",
            "Las dimensiones en milímetros siempre"
        ]
    },
    {
        enunciado: "¿Qué elementos componen una cota?",
        correcta: "Líneas de cota, líneas auxiliares de cota, flechas de extremos y cifra de cota",
        incorrectas: [
            "Líneas curvas y números",
            "Solo flechas y números"
        ]
    },
    {
        enunciado: "¿A qué distancia mínima deben estar las líneas de cota del contorno?",
        correcta: "Normalmente 8 mm para la primera línea y 5 mm entre líneas paralelas sucesivas (según normas UNE)",
        incorrectas: [
            "1 mm para ahorrar espacio",
            "No importa la distancia"
        ]
    },
    {
        enunciado: "¿Qué es la 'acotación en serie'?",
        correcta: "Colocar las cotas una a continuación de otra en una misma línea alineada; los errores de tolerancia se acumulan",
        incorrectas: [
            "Acotar muchas piezas a la vez",
            "Acotar en paralelo"
        ]
    },
    {
        enunciado: "¿Qué es la 'acotación en paralelo'?",
        correcta: "Todas las cotas parten de un mismo origen o línea de referencia (línea base) para evitar la acumulación de errores de tolerancia",
        incorrectas: [
            "Poner líneas paralelas al azar",
            "Acotar solo las alturas"
        ]
    },
    {
        enunciado: "¿Cómo se acotan los radios?",
        correcta: "Con una línea de cota que parte del centro (o apunta hacia él), lleva una sola flecha en contacto con el arco y la cifra precedida de 'R'",
        incorrectas: [
            "Con dos flechas como un diámetro",
            "Poniendo 'D' antes del número"
        ]
    },
    {
        enunciado: "¿Cómo se acotan los diámetros?",
        correcta: "Con una línea que pasa por el centro y dos flechas, o anteponiendo el símbolo Ø a la cifra si no se ve la forma circular",
        incorrectas: [
            "Con el símbolo R",
            "Escribiendo 'diam' al lado"
        ]
    },
    {
        enunciado: "¿Qué es la 'escritura normalizada' (UNE 1-034)?",
        correcta: "Tipografía técnica legible (recta o cursiva a 75º) con grosores del trazo normalizados (ej. 1/14 de la altura)",
        incorrectas: [
            "Times New Roman",
            "Caligrafía artística"
        ]
    },
    {
        enunciado: "¿Qué son los 'formatos de papel' (Serie A)?",
        correcta: "Serie basada en un rectángulo de área 1 m² (A0) con relación de lados 1:√2, de modo que al doblar por la mitad se obtiene el formato siguiente",
        incorrectas: [
            "Formatos basados en pulgadas",
            "Papeles cuadrados"
        ]
    },
    {
        enunciado: "¿Qué mide un A4?",
        correcta: "210 x 297 mm",
        incorrectas: [
            "200 x 300 mm",
            "215 x 280 mm"
        ]
    },
    {
        enunciado: "¿Qué es el 'cuadro de rotulación' o cajetín?",
        correcta: "Espacio reservado (normalmente esquina inferior derecha) para la identificación del plano, autor, escala, fecha y título",
        incorrectas: [
            "El marco del dibujo",
            "La firma del autor"
        ]
    },
    {
        enunciado: "¿Se pueden cruzar las líneas de cota?",
        correcta: "Se debe evitar siempre que sea posible; nunca deben cortar a una cifra de cota",
        incorrectas: [
            "Sí, no pasa nada",
            "Es obligatorio cruzarlas"
        ]
    },
    {
        enunciado: "¿Qué es una 'cota funcional'?",
        correcta: "Aquella esencial para el funcionamiento o montaje de la pieza (se acota directamente y con tolerancias más estrictas)",
        incorrectas: [
            "Una cota decorativa",
            "Una cota auxiliar"
        ]
    },
    {
        enunciado: "¿Qué es una 'cota auxiliar' (AUX)?",
        correcta: "Cota dada a título informativo, deducible de otras; se suele poner entre paréntesis y no lleva tolerancia",
        incorrectas: [
            "Una cota muy importante",
            "Una cota incorrecta"
        ]
    },
    {
        enunciado: "¿Qué significa el símbolo de un cuadrado antes de una cota?",
        correcta: "Que la forma de la sección es cuadrada (evita dibujar otra vista)",
        incorrectas: [
            "Que es una caja",
            "Que la cota es aproximada"
        ]
    },
    {
        enunciado: "¿Qué indican las líneas de trazos (discontinuas) en un croquis?",
        correcta: "Aristas o contornos ocultos no visibles desde el punto de vista elegido",
        incorrectas: [
            "Líneas de eje",
            "Líneas imaginarias"
        ]
    },
    {
        enunciado: "¿Qué indican las líneas de trazo y punto?",
        correcta: "Ejes de simetría y ejes de revolución",
        incorrectas: [
            "Líneas de corte",
            "Aristas visibles"
        ]
    },
    {
        enunciado: "¿Qué es la 'acotación por coordenadas'?",
        correcta: "Indicar las medidas X e Y de los centros de taladros o puntos respecto a un origen común (0,0) en una tabla o directamente",
        incorrectas: [
            "Usar GPS",
            "Acotar en 3D"
        ]
    },
    {
        enunciado: "¿Qué es el 'plegado' de planos?",
        correcta: "Doblar planos de gran formato para reducirlos a tamaño A4, dejando el cajetín visible en la portada archivable",
        incorrectas: [
            "Arrugar el papel",
            "Enrollar en tubo"
        ]
    },
    {
        enunciado: "¿La escala 5:1 es una escala de...?",
        correcta: "Ampliación (el dibujo es 5 veces más grande que la realidad)",
        incorrectas: [
            "Reducción",
            "Natural"
        ]
    },
    {
        enunciado: "¿La escala 1:100 es una escala de...?",
        correcta: "Reducción (el dibujo es 100 veces más pequeño)",
        incorrectas: [
            "Ampliación",
            "Natural"
        ]
    },
    {
        enunciado: "¿Qué es un 'croquis acotado'?",
        correcta: "El documento base de taller o diseño preliminar, hecho a mano pero con todas las especificaciones técnicas rigurosas",
        incorrectas: [
            "Un boceto artístico",
            "Un dibujo sucio"
        ]
    },
    {
        enunciado: "¿Qué es la 'normalización de roscas' (Representación)?",
        correcta: "La cresta de la rosca se dibuja con línea gruesa y el fondo con línea fina (en tornillos); en agujeros roscados al revés",
        incorrectas: [
            "Dibujar los dientes realistas",
            "Usar zigzag"
        ]
    },
    {
        enunciado: "¿Qué símbolo se usa para 'pendiente' en acotación?",
        correcta: "Un triángulo rectángulo o flecha indicando la inclinación sobre la línea de referencia",
        incorrectas: [
            "Una curva",
            "Un círculo"
        ]
    },
    {
        enunciado: "¿Qué es una 'línea de rotura'?",
        correcta: "Línea fina a mano alzada (o zig-zag) que interrumpe la pieza para ahorrar espacio en partes largas y uniformes",
        incorrectas: [
            "Donde se ha roto el papel",
            "Una grieta en la pieza"
        ]
    },
    {
        enunciado: "¿Qué es la 'lista de despiece'?",
        correcta: "Tabla que acompaña al plano de conjunto enumerando cada componente, cantidad, material y norma",
        incorrectas: [
            "El precio de las piezas",
            "Instrucciones de montaje"
        ]
    },
    {
        enunciado: "¿Qué es 'M20' en una acotación?",
        correcta: "Rosca Métrica de diámetro nominal 20 mm",
        incorrectas: [
            "Metros 20",
            "Mueble 20"
        ]
    },
    {
        enunciado: "¿El rayado de un corte se hace con...?",
        correcta: "Línea fina continua inclinada a 45º respecto a los ejes o contorno principal",
        incorrectas: [
            "Línea gruesa",
            "Puntos"
        ]
    },
    {
        enunciado: "¿Qué se debe evitar al acotar?",
        correcta: "La duplicidad de cotas (sobreacotación) y acotar sobre aristas ocultas salvo que sea imprescindible",
        incorrectas: [
            "Usar números claros",
            "Acotar longitudes totales"
        ]
    },
    {
        enunciado: "¿Qué son los 'márgenes' normalizados?",
        correcta: "Espacio en blanco alrededor del dibujo; mínimo 20 mm en el borde de encuadernación y 10 mm en los otros (en A4)",
        incorrectas: [
            "El precio del dibujo",
            "Zonas para notas"
        ]
    },
    {
        enunciado: "¿Qué son las 'vistas' principales?",
        correcta: "Alzado, Planta, Perfil (izquierdo/derecho), Vista inferior y Vista posterior",
        incorrectas: [
            "Norte, Sur, Este, Oeste",
            "Arriba y Abajo"
        ]
    },
    {
        enunciado: "¿Qué es el 'sistema europeo' de proyección?",
        correcta: "Símbolo del cono truncado con el círculo a la derecha (proyección del primer diedro): el objeto está entre observador y plano",
        incorrectas: [
            "Sistema americano",
            "Sistema japonés"
        ]
    },
    {
        enunciado: "¿Qué es la 'conicidad'?",
        correcta: "Relación entre la diferencia de diámetros de dos secciones de un cono y la distancia entre ellas (C = (D-d)/L)",
        incorrectas: [
            "La forma del cono",
            "La punta del lápiz"
        ]
    },
    {
        enunciado: "¿Qué papel juega la 'proporción' en el croquis?",
        correcta: "Es fundamental; el dibujo debe respetar visualmente las relaciones de tamaño aunque no esté a escala exacta, para no confundir",
        incorrectas: [
            "No importa en el croquis",
            "Debe ser exacto al milímetro"
        ]
    }
];
