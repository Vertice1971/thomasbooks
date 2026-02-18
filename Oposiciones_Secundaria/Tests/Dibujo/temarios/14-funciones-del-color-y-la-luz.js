var PREGUNTAS = [
    {
        enunciado: "¿Cuál es la función 'descriptiva' o 'representativa' del color?",
        correcta: "Imitar fielmente los colores de la realidad para describir objetos y materiales de forma objetiva y reconocible (color local)",
        incorrectas: [
            "Describir con texto el color del cuadro",
            "Inventar colores nuevos que no existen"
        ]
    },
    {
        enunciado: "¿En qué consiste la función 'simbólica' del color?",
        correcta: "El uso del color para transmitir ideas, conceptos abstractos, estatus social o creencias religiosas codificadas culturalmente",
        incorrectas: [
            "Usar símbolos matemáticos en vez de colores",
            "Que el color simbolice siempre lo mismo en todo el mundo"
        ]
    },
    {
        enunciado: "¿Cuál es la función 'expresiva' o 'emocional' del color?",
        correcta: "Provocar una respuesta afectiva directa en el espectador, transmitiendo estados de ánimo o sentimientos subjetivos del artista",
        incorrectas: [
            "Expresar el precio de la pintura",
            "Hacer gestos expresivos al pintar"
        ]
    },
    {
        enunciado: "¿Qué es la función 'estética' o 'decorativa' del color?",
        correcta: "La búsqueda de la belleza, la armonía y el placer visual mediante combinaciones cromáticas equilibradas y agradables",
        incorrectas: [
            "Decorar la casa con luces de colores",
            "Maquillarse para estar guapo"
        ]
    },
    {
        enunciado: "¿Qué es la función 'señalética' o 'codificada' del color?",
        correcta: "El uso del color en sistemas de comunicación visual para transmitir información rápida y universal (ej. señales de tráfico, seguridad)",
        incorrectas: [
            "Hacer señales de humo de colores",
            "El código secreto de los espías"
        ]
    },
    {
        enunciado: "¿Qué es la función 'constructiva' o 'espacial' del color (ej. Cézanne)?",
        correcta: "Uso del color para definir planos, volúmenes y profundidad (perspectiva cromática) sin depender exclusivamente de la línea y el claroscuro clásico",
        incorrectas: [
            "Construir edificios con ladrillos de colores",
            "Usar casco de obra de color amarillo"
        ]
    },
    {
        enunciado: "¿Qué función cumple el color en el 'camuflaje' (mimetismo natural o militar)?",
        correcta: "Ocultar la forma rompiendo su silueta y asimilándola al entorno para evitar ser detectado",
        incorrectas: [
            "Hacerse ver desde muy lejos",
            "Ir a la moda militar"
        ]
    },
    {
        enunciado: "¿Qué es la función 'hierática' o 'jerárquica' de la luz?",
        correcta: "Iluminar selectivamente lo más importante (ej. a Dios o al Rey) para establecer rangos de importancia, dejando en sombra lo secundario",
        incorrectas: [
            "Una luz que congela a la gente",
            "La luz de las jerarquías eclesiásticas"
        ]
    },
    {
        enunciado: "¿Qué es la función 'dramática' o 'teatral' de la luz?",
        correcta: "El uso de iluminaciones contrastadas, focos dirigidos y sombras profundas para crear tensión, misterio y enfatizar la acción narrativa",
        incorrectas: [
            "Llorar mucho porque se ha fundido la bombilla",
            "Actuar en un teatro a oscuras"
        ]
    },
    {
        enunciado: "¿Qué función cumple el 'color litúrgico' en la iglesia?",
        correcta: "Identificar los tiempos y festividades religiosas (blanco: pascua; morado: adviento/cuaresma; rojo: mártires; verde: tiempo ordinario)",
        incorrectas: [
            "Decorar para que quede bonito",
            "Identificar a los sacerdotes por su equipo de fútbol"
        ]
    },
    {
        enunciado: "¿Qué es la función 'psicológica' del color en arquitectura/interiorismo?",
        correcta: "Modificar la percepción del espacio y el estado de ánimo de los habitantes (relajación, estimulación, concentración)",
        incorrectas: [
            "Analizar psicológicamente al arquitecto",
            "Pintar las paredes como un test de Rorschach"
        ]
    },
    {
        enunciado: "¿Qué función tiene el color en la 'identidad corporativa' (branding)?",
        correcta: "Diferenciar la marca, hacerla reconocible, memorable y transmitir sus valores al público objetivo",
        incorrectas: [
            "Ninguna, las marcas eligen color al azar",
            "Ahorrar tinta en los logotipos"
        ]
    },
    {
        enunciado: "¿Qué es la función 'compositiva' del color?",
        correcta: "Organizar la estructura del cuadro, equilibrar pesos visuales, crear ritmos y guiar la mirada del espectador",
        incorrectas: [
            "Componer canciones sobre colores",
            "Mezclar todos los colores en el centro"
        ]
    },
    {
        enunciado: "¿Qué es la función 'atmosférica' de la luz?",
        correcta: "Crear un ambiente envolvente que unifica la escena, sugiriendo la hora del día, el clima y la densidad del aire",
        incorrectas: [
            "La luz de la estratosfera",
            "Hacer agujeros en la capa de ozono"
        ]
    },
    {
        enunciado: "¿Qué función 'publicitaria' tiene el color?",
        correcta: "Captar la atención (AIDA), seducir, persuadir y motivar la compra, apelando a deseos subconscientes",
        incorrectas: [
            "Hacer que el anuncio sea más caro",
            "Solo sirve para anuncios de pintura"
        ]
    },
    {
        enunciado: "¿Qué es la función 'fantástica' o 'surreal' de la luz y color?",
        correcta: "Crear mundos oníricos o imposibles mediante iluminaciones irracionales y colores extraños ajenos a la lógica natural",
        incorrectas: [
            "Una luz que hace magia de verdad",
            "Tener alucinaciones"
        ]
    },
    {
        enunciado: "¿Qué función tiene el 'código de colores' en una instalación industrial (tuberías)?",
        correcta: "Identificar el contenido y peligro de los conductos (agua, gas, electricidad, antiincendios) por seguridad y mantenimiento",
        incorrectas: [
            "Hacer la fábrica más bonita",
            "Aprovechar la pintura que sobra"
        ]
    },
    {
        enunciado: "¿Qué función cumple la 'luz cenital' en museografía?",
        correcta: "Iluminar las obras de manera uniforme y natural (si es claraboya) o evitar sombras arrojadas molestas del espectador sobre la obra",
        incorrectas: [
            "Iluminar solo el techo",
            "Molestar al visitante"
        ]
    },
    {
        enunciado: "¿Qué es la función 'cronológica' o 'temporal' de la luz?",
        correcta: "Indicar el paso del tiempo o el momento narrativo mediante el cambio de iluminación (amanecer, mediodía, noche)",
        incorrectas: [
            "Un reloj con luces",
            "Viajar en el tiempo a la velocidad de la luz"
        ]
    },
    {
        enunciado: "¿Qué función tiene el color en la 'heráldica'?",
        correcta: "Identificar linajes, familias o reinos mediante escudos de armas con reglas estrictas de esmaltes (colores) y metales",
        incorrectas: [
            "Identificar a los heraldos negros",
            "Pintar escudos antimisiles"
        ]
    },
    {
        enunciado: "¿Qué función 'térmica' visual tiene el color?",
        correcta: "Transmitir sensación subjetiva de frío o calor, influyendo en la percepción térmica real del ambiente",
        incorrectas: [
            "Calentar la comida con colores rojos",
            "Enfriar la bebida con azul"
        ]
    },
    {
        enunciado: "¿Qué uso 'terapéutico' tiene la luz y el color (cromoterapia/luminoterapia)?",
        correcta: "Tratar dolencias físicas o psicológicas (ej. depresión estacional, ictericia neonatal) mediante la exposición a luces específicas",
        incorrectas: [
            "Curar huesos rotos con pintura",
            "Es brujería sin base científica"
        ]
    },
    {
        enunciado: "¿Qué función de 'aviso' o 'alerta' tiene la bioluminiscencia o color aposemático en animales?",
        correcta: "Advertir a los depredadores de su toxicidad o peligro mediante colores brillantes y contrastados",
        incorrectas: [
            "Avisar de que tienen hambre",
            "Iluminar el camino para leer"
        ]
    },
    {
        enunciado: "¿Qué función 'narrativa' tiene el color en el cine?",
        correcta: "Apoyar la historia, definir personajes, marcar cambios de trama o establecer el tono emocional de una escena (etalonaje)",
        incorrectas: [
            "Colorear películas antiguas de blanco y negro",
            "Que los actores lleven ropa bonita"
        ]
    },
    {
        enunciado: "¿Qué es la función 'taxonómica' o 'clasificatoria' del color?",
        correcta: "Agrupar y diferenciar elementos por categorías (ej. contenedores de reciclaje, carpetas de archivos)",
        incorrectas: [
            "Disecar animales con color",
            "Clasificar taxis por colores"
        ]
    },
    {
        enunciado: "¿Qué función 'erótica' puede tener la luz?",
        correcta: "Sugerir, ocultar y revelar parcialmente el cuerpo mediante sombras suaves y atmósferas cálidas, estimulando la imaginación",
        incorrectas: [
            "Ninguna, la luz es asexuada",
            "Iluminar quirófanos"
        ]
    },
    {
        enunciado: "¿Qué es la función 'kinestésica' del color?",
        correcta: "Sugerir movimiento, vibración o ritmo mediante contrastes ópticos o progresiones cromáticas",
        incorrectas: [
            "El color de los cines",
            "Mover objetos con la mente"
        ]
    },
    {
        enunciado: "¿Qué función 'cultural' tiene el color de los vestidos de novia?",
        correcta: "Simbolizar valores sociales; blanco en occidente (pureza), rojo en China (buena suerte y alegría)",
        incorrectas: [
            "Que el novio la vea bien",
            "No tiene función, es moda"
        ]
    },
    {
        enunciado: "¿Qué función cumple el 'croma' o pantalla verde en cine?",
        correcta: "Técnica de postproducción para sustituir un fondo de color sólido (verde/azul) por otra imagen digital (incrustación)",
        incorrectas: [
            "Ahorrar pintura de decorados",
            "Que los actores descansen la vista"
        ]
    },
    {
        enunciado: "¿Qué función 'higiénica' se asocia al color blanco en hospitales y cocinas?",
        correcta: "Facilitar la detección de suciedad y transmitir sensación de esterilidad, limpieza y desinfección",
        incorrectas: [
            "Que se ensucien menos",
            "Que los médicos parezcan ángeles"
        ]
    },
    {
        enunciado: "¿Qué función 'lúdica' tiene el color?",
        correcta: "Estimular el juego, la diversión y la fantasía, especialmente en entornos y juguetes infantiles (colores primarios vivos)",
        incorrectas: [
            "Hacer trampas en el juego",
            "Jugar a las tinieblas"
        ]
    },
    {
        enunciado: "¿Qué función 'política' puede tener un color?",
        correcta: "Identificar partidos e ideologías (rojo=izquierda, azul=conservador, verde=ecologista, mucho=feminismo)",
        incorrectas: [
            "Pintar el parlamento",
            "Los políticos no usan colores"
        ]
    },
    {
        enunciado: "¿Qué función 'didáctica' usa el color en un libro de texto o infografía?",
        correcta: "Facilitar la comprensión, diferenciar partes, destacar lo importante y hacer el aprendizaje más atractivo y claro",
        incorrectas: [
            "Hacer el libro más caro",
            "Distraer al alumno para que no estudie"
        ]
    },
    {
        enunciado: "¿Qué función 'naturalista' tiene la luz en el Barroco holandés (Vermeer)?",
        correcta: "Captar la calidad poética y real de la luz doméstica entrando por una ventana, bañando objetos y figuras con serenidad",
        incorrectas: [
            "Pintar tulipanes",
            "Usar luz artificial de neón"
        ]
    },
    {
        enunciado: "¿Qué es la función 'sinestésica' (sabor) en el color de los envases?",
        correcta: "Sugerir el sabor del producto (amarillo=limón, rosa=fresa, marrón=chocolate) anticipando la experiencia gustativa",
        incorrectas: [
            "Que el envase se pueda comer",
            "Dar sabor a la tinta"
        ]
    },
    {
        enunciado: "¿Qué función 'mágica' tenía el color en las pinturas rupestres?",
        correcta: "Se cree que propiciatoria de la caza o ritual, usando ocres y tierras para dar vida al animal representado",
        incorrectas: [
            "Decorar la cueva para las visitas",
            "Hacer grafiti prehistórico"
        ]
    }
];
