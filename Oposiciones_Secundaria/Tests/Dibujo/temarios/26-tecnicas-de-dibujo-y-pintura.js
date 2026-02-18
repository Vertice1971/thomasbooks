var PREGUNTAS = [
    {
        enunciado: "¿En la técnica del óleo, qué función cumple el principio de 'graso sobre magro'?",
        correcta: "Evitar grietas asegurando que las capas superiores sean más flexibles y aceitosas que las inferiores, permitiendo un secado uniforme",
        incorrectas: [
            "Aumentar el brillo final del cuadro aplicando barniz entre cada capa",
            "Reducir el tiempo de secado aplicando capas cada vez más diluidas en trementina"
        ]
    },
    {
        enunciado: "¿Qué es el 'a la prima' (alla prima) en pintura?",
        correcta: "Técnica de pintura directa donde se aplica el color final en una sola sesión, sin capas previas de secado ni veladuras",
        incorrectas: [
            "Técnica que requiere aplicar primero una capa monocroma de grisalla",
            "Método de pintura que utiliza exclusivamente colores primarios"
        ]
    },
    {
        enunciado: "¿Qué diferencia principal existe entre la acuarela y el gouache?",
        correcta: "La acuarela es transparente y utiliza el blanco del papel para la luz; el gouache es opaco y contiene cargas blancas que permiten superponer claros sobre oscuros",
        incorrectas: [
            "La acuarela utiliza aglutinante de huevo y el gouache utiliza aceite de linaza",
            "La acuarela es una técnica seca y el gouache es una técnica húmeda"
        ]
    },
    {
        enunciado: "¿Qué es el 'estofado' en la imaginería policromada?",
        correcta: "Técnica que consiste en cubrir el oro bruñido con pintura y luego rasparla para dejar ver el dorado subyacente formando patrones",
        incorrectas: [
            "Aplicación de capas de yeso para alisar la superficie antes de pintar",
            "Mezcla de pigmentos con cera caliente para dar relieve"
        ]
    },
    {
        enunciado: "¿Qué es el 'frottis' o pincel seco?",
        correcta: "Aplicación de poca pintura con el pincel casi seco sobre una superficie texturada, depositando color solo en las crestas del relieve",
        incorrectas: [
            "Técnica de lavado con abundante agua para crear fondos uniformes",
            "Uso de una esponja para aplicar grandes manchas de color"
        ]
    },
    {
        enunciado: "¿Qué es la 'sinopia' en la pintura al fresco?",
        correcta: "El dibujo preparatorio realizado con tierra roja sobre la capa de arriccio previo a la aplicación del intonaco final",
        incorrectas: [
            "La mezcla de cal y arena que forma el mortero base",
            "El pigmento azul utilizado para los cielos en el fresco"
        ]
    },
    {
        enunciado: "¿Qué característica define a la pintura al 'temple de huevo'?",
        correcta: "Utiliza la yema de huevo como emulsionante natural, secando rápido y produciendo una superficie satinada, dura e insoluble al agua",
        incorrectas: [
            "Utiliza clara de huevo para crear barnices brillantes y transparentes",
            "Mezcla pigmentos con cera virgen para lograr texturas en relieve"
        ]
    },
    {
        enunciado: "¿Qué es el 'pentimento' o arrepentimiento en una obra pictórica?",
        correcta: "Alteración realizada por el artista durante el proceso, visible posteriormente por la transparencia de las capas de pintura con el tiempo",
        incorrectas: [
            "La firma falsa añadida posteriormente para aumentar el valor de la obra",
            "El deterioro de los colores debido a la exposición a la luz"
        ]
    },
    {
        enunciado: "¿Qué función tiene la 'imprimación' en un soporte pictórico?",
        correcta: "Aislar el soporte (tela, madera) de la pintura para evitar su deterioro y proporcionar una superficie adherente y con la absorción adecuada",
        incorrectas: [
            "Dar el acabado final brillante a la obra para protegerla del polvo",
            "Mezclar los colores en la paleta antes de aplicarlos"
        ]
    },
    {
        enunciado: "¿Qué es el 'esgrafiado' en dibujo?",
        correcta: "Técnica que consiste en raspar una superficie coloreada para descubrir la capa inferior de otro color (comúnmente usado en ceras)",
        incorrectas: [
            "Dibujar con tinta china sobre papel mojado para crear manchas",
            "Aplicar polvo de grafito con un algodón para crear sombras suaves"
        ]
    },
    {
        enunciado: "¿Qué es el 'marouflage'?",
        correcta: "Técnica de adherir un lienzo pintado o un papel sobre un soporte rígido (muro, tabla) utilizando un adhesivo fuerte",
        incorrectas: [
            "Técnica de pintura mural que imita texturas de mármol",
            "Barnizado final de un cuadro con resina dammar"
        ]
    },
    {
        enunciado: "¿En el dibujo a lápiz, qué es el 'valor tonal'?",
        correcta: "El grado de luminosidad u oscuridad de un área, independiente de su color (escala de grises)",
        incorrectas: [
            "La intensidad o saturación del color del grafito",
            "El precio de mercado de los materiales utilizados"
        ]
    },
    {
        enunciado: "¿Qué es una 'aguada' en tinta china?",
        correcta: "Dilución de la tinta en agua para conseguir diferentes gradaciones de gris transparente, aplicada con pincel",
        incorrectas: [
            "Aplicación de tinta pura con pluma para crear contornos negros",
            "Técnica de borrar tinta seca con una cuchilla"
        ]
    },
    {
        enunciado: "¿Qué es el 'medium' en la pintura al óleo?",
        correcta: "Sustancia (mezcla de aceite, barniz y disolvente) que se añade al color para modificar su fluidez, transparencia o tiempo de secado",
        incorrectas: [
            "El soporte físico sobre el que se pinta (lienzo o tabla)",
            "El tamaño intermedio de los pinceles utilizados"
        ]
    },
    {
        enunciado: "¿Qué es la técnica del 'puntillismo' o divisionismo?",
        correcta: "Aplicación de puntos de color puro yuxtapuestos que se mezclan ópticamente en la retina del espectador al ser vistos a distancia",
        incorrectas: [
            "Dibujar exclusivamente con líneas continuas sin levantar el lápiz",
            "Técnica de grabado que usa punzones para crear texturas"
        ]
    },
    {
        enunciado: "¿Qué es el 'encaje' en la fase de dibujo?",
        correcta: "La simplificación inicial de las formas complejas en volúmenes geométricos básicos y líneas estructurales para establecer proporciones y composición",
        incorrectas: [
            "El marco decorativo que se pone al dibujo final",
            "La técnica de sombrear con tramas cruzadas muy finas"
        ]
    },
    {
        enunciado: "¿Qué es la 'grisalla' como técnica subyacente?",
        correcta: "Representación monocroma en grises para modelar el volumen antes de aplicar las capas de color transparente (veladuras)",
        incorrectas: [
            "Mezcla de todos los colores sobrantes de la paleta",
            "Técnica de dibujo con tiza blanca sobre papel negro"
        ]
    },
    {
        enunciado: "¿Qué es un 'fixativo' y cuándo se usa?",
        correcta: "Resina disuelta en alcohol pulverizada sobre técnicas secas (pastel, carbón) para adherir el pigmento al soporte y evitar que se desprenda",
        incorrectas: [
            "Diluyente para limpiar los pinceles de óleo",
            "Pegamento para unir el lienzo al bastidor"
        ]
    },
    {
        enunciado: "¿Qué es la pintura 'encáustica'?",
        correcta: "Técnica que utiliza cera de abejas caliente mezclada con pigmentos y resina, aplicada con espátulas o pinceles sobre tabla",
        incorrectas: [
            "Pintura mural realizada sobre yeso seco con cola orgánica",
            "Técnica de esmalte sobre metal fundido al horno"
        ]
    },
    {
        enunciado: "¿Qué es el 'cuerpo' de la pintura (impasto)?",
        correcta: "La densidad y consistencia material de la pintura, que permite crear texturas y relieves visibles sobre el soporte",
        incorrectas: [
            "La figura humana representada en el cuadro",
            "La transparencia líquida de la acuarela"
        ]
    },
    {
        enunciado: "¿Qué es el 'lavado' en pintura acrílica?",
        correcta: "Aplicación de pintura muy diluida en agua o medio para crear capas transparentes similares a la acuarela, pero insolubles al secar",
        incorrectas: [
            "Limpieza del lienzo viejo para reutilizarlo",
            "Mezcla de colores complementarios para obtener gris"
        ]
    },
    {
        enunciado: "¿Qué es el 'contorno ciego' en ejercicios de dibujo?",
        correcta: "Dibujar mirando exclusivamente al modelo sin mirar el papel, para potenciar la coordinación ojo-mano y la observación pura",
        incorrectas: [
            "Dibujar con los ojos vendados para estimular la memoria",
            "Trazar el contorno de una sombra proyectada en la pared"
        ]
    },
    {
        enunciado: "¿Qué es la 'perspectiva aérea' o atmosférica en pintura?",
        correcta: "Recurso pictórico que simula profundidad desaturando colores, reduciendo contrastes y azulando los tonos en los planos lejanos",
        incorrectas: [
            "Dibujar objetos vistos desde un punto de vista cenital (vista de pájaro)",
            "Sistema geométrico con tres puntos de fuga en el horizonte"
        ]
    },
    {
        enunciado: "¿Qué es el 'bruñido' en el dibujo con lápices de color?",
        correcta: "Saturar el papel presionando fuerte o usando un lápiz mezclador (blender) para fundir los trazos y crear una superficie lisa y brillante",
        incorrectas: [
            "Afilar la punta del lápiz con lija para obtener polvo",
            "Borrar suavemente para sacar luces"
        ]
    },
    {
        enunciado: "¿Qué es la 'reserva' en la acuarela?",
        correcta: "Dejar zonas del papel en blanco sin pintar (o cubrirlas con líquido enmascarador) para representar las luces más brillantes",
        incorrectas: [
            "Guardar la pintura sobrante para otra sesión",
            "Aplicar pintura blanca opaca sobre el color seco"
        ]
    },
    {
        enunciado: "¿Qué es el 'trampantojo' (trompe-l'œil)?",
        correcta: "Técnica ilusionista que intenta engañar a la vista mediante perspectiva y sombreado realistas, haciendo que lo pintado parezca tridimensional",
        incorrectas: [
            "Estilo de pintura abstracta basado en manchas aleatorias",
            "Técnica de grabado que imita el dibujo a lápiz"
        ]
    },
    {
        enunciado: "¿Qué es el 'modelado' mediante tramas?",
        correcta: "Crear volumen y sombras mediante la superposición de líneas paralelas o cruzadas (hatching); mayor densidad implica mayor oscuridad",
        incorrectas: [
            "Dar forma a la arcilla con las manos",
            "Copiar la postura de un modelo al natural"
        ]
    },
    {
        enunciado: "¿Qué es el 'barniz de retoque'?",
        correcta: "Barniz ligero aplicado durante el proceso de pintura al óleo para avivar zonas que se han quedado mates (rechupados) y facilitar la adhesión de nuevas capas",
        incorrectas: [
            "Barniz final muy brillante para proteger el cuadro terminado",
            "Disolvente fuerte para eliminar pintura seca"
        ]
    },
    {
        enunciado: "¿Qué es la 'caseína' en pintura?",
        correcta: "Proteína de la leche utilizada como aglutinante fuerte y duradero en pinturas al temple y murales antiguos",
        incorrectas: [
            "Pigmento blanco derivado del plomo",
            "Tipo de tela sintética para lienzos modernos"
        ]
    },
    {
        enunciado: "¿Qué es el 'collage' pictórico?",
        correcta: "Incorporación de materiales extra-pictóricos (papel, tela, arena) a la superficie del cuadro, adheridos con cola o medio",
        incorrectas: [
            "Pintar copiando fotografías proyectadas en el lienzo",
            "Mezcla de óleo y agua en la misma obra"
        ]
    },
    {
        enunciado: "¿Qué es el 'lienzo de imprimación magra'?",
        correcta: "Lienzo preparado con cola y yeso (gesso) que absorbe parte del aceite de la pintura, permitiendo un secado más rápido y acabado mate",
        incorrectas: [
            "Lienzo preparado con varias capas de aceite o barniz graso",
            "Lienzo sin ninguna preparación, color crudo"
        ]
    },
    {
        enunciado: "¿Qué es el 'glaseado' (scumbling) u veladura seca?",
        correcta: "Aplicar una capa fina de color opaco o semiopaco de forma irregular sobre una capa seca más oscura, modificando el tono sin cubrirlo totalmente",
        incorrectas: [
            "Aplicar un barniz final muy brillante como cristal",
            "Mezclar pintura con polvo de vidrio"
        ]
    },
    {
        enunciado: "¿Qué es la 'espátula' como herramienta pictórica?",
        correcta: "Instrumento de metal flexible usado para mezclar colores en la paleta o aplicarlos directamente al lienzo creando empastes planos",
        incorrectas: [
            "Herramienta para tensar el lienzo en el bastidor",
            "Pincel de pelo muy duro para frotar"
        ]
    },
    {
        enunciado: "¿Qué es la 'trementina rectificada'?",
        correcta: "Aguarrás vegetal purificado, libre de resinas gomosas, ideal como diluyente volátil para las primeras capas de óleo",
        incorrectas: [
            "Aceite de linaza espesado al sol",
            "Barniz final de alta protección UV"
        ]
    },
    {
        enunciado: "¿Qué es el 'color quebrado'?",
        correcta: "Color cuya intensidad o saturación ha sido rebajada mezclándolo con su complementario o con tierra, haciéndolo más grisáceo y natural",
        incorrectas: [
            "Pintura seca que se agrieta en el lienzo",
            "Color primario puro sin mezclar"
        ]
    },
    {
        enunciado: "¿Qué es el 'bloqueo' (blocking in)?",
        correcta: "Fase inicial de la pintura donde se establecen las grandes formas y colores generales con pinceladas amplias, antes de detallar",
        incorrectas: [
            "Tapar partes del cuadro con cinta adhesiva",
            "Fijar el cuadro terminado con barniz"
        ]
    },
    {
        enunciado: "¿Qué es la técnica 'mixta' óleo-acrílico?",
        correcta: "Usar acrílico para las bases de secado rápido y terminar con óleo encima (graso sobre magro); el proceso inverso no es viable",
        incorrectas: [
            "Mezclar pintura de óleo y acrílico en el mismo bote",
            "Pintar con óleo sobre una base de cera fresca"
        ]
    },
    {
        enunciado: "¿Qué es el 'trazo gestual'?",
        correcta: "Pincelada o línea rápida y expresiva que captura el movimiento y la energía de la acción del artista, típica del expresionismo abstracto",
        incorrectas: [
            "Dibujar midiendo con regla y compás",
            "Copiar pacientemente los detalles de una foto"
        ]
    },
    {
        enunciado: "¿Qué es la 'goma arábiga'?",
        correcta: "Resina natural soluble en agua extraída de la acacia, utilizada como aglutinante principal en la acuarela y el gouache",
        incorrectas: [
            "Goma sintética para borrar lápiz",
            "Disolvente para limpiar pintura al óleo"
        ]
    },
    {
        enunciado: "¿Qué es el 'papel prensado en caliente' (satinado)?",
        correcta: "Papel de superficie muy lisa y poco poro, ideal para dibujo detallado a pluma o lápiz y aguadas uniformes",
        incorrectas: [
            "Papel de textura rugosa para acuarela expresiva",
            "Papel de lija para pastel"
        ]
    }
];
