var PREGUNTAS = [
    {
        enunciado: "¿Qué es la 'arcilla' desde el punto de vista químico?",
        correcta: "Un silicato de alúmina hidratado, procedente de la descomposición de rocas feldespáticas (granito), que se vuelve plástico con agua",
        incorrectas: [
            "Un carbonato cálcico sedimentario compuesto de conchas marinas",
            "Una mezcla de arena sílice y resina vegetal fósil"
        ]
    },
    {
        enunciado: "¿Qué es la 'bi-cocción' en cerámica?",
        correcta: "El proceso que requiere dos hornadas: una primera (bizcochado) para endurecer la pieza y una segunda para fijar el esmalte vítreo",
        incorrectas: [
            "Cocer la pieza dos veces para asegurar que no se rompa",
            "Quemar la pieza con fuego directo y luego en horno eléctrico"
        ]
    },
    {
        enunciado: "¿Qué es el 'bizcocho' cerámico?",
        correcta: "La pieza de arcilla que ha sido cocida una vez (entre 900-1000°C), volviéndose dura y porosa, lista para ser esmaltada",
        incorrectas: [
            "Una pasta cerámica mezclada con levadura",
            "El residuo defectuoso de una cocción fallida"
        ]
    },
    {
        enunciado: "¿Qué es el 'esmalte' cerámico?",
        correcta: "Una cubierta vítrea compuesta de sílice, fundentes y óxidos metálicos que se funde sobre la pieza, impermeabilizándola y decorándola",
        incorrectas: [
            "Una pintura acrílica brillante para acabados en frío",
            "Barniz de resina natural aplicado tras la cocción"
        ]
    },
    {
        enunciado: "¿Qué es el 'torno de alfarero'?",
        correcta: "Máquina con un plato giratorio impulsada por pie o motor que permite modelar piezas de revolución simétricas (vasijas, platos) con las manos",
        incorrectas: [
            "Herramienta para triturar la arcilla seca",
            "Horno rotatorio para cocción uniforme"
        ]
    },
    {
        enunciado: "¿Qué es la 'barbotina'?",
        correcta: "Suspensión de arcilla en agua con consistencia cremosa, usada como pegamento para unir piezas crudas o para colada en moldes",
        incorrectas: [
            "Arcilla seca pulverizada para reciclar",
            "El barro que sobra al tornear"
        ]
    },
    {
        enunciado: "¿Qué es el 'gres'?",
        correcta: "Cerámica de alta temperatura (1200-1300°C) vitrificada, muy dura e impermeable, utilizada para vajillas resistentes y pavimentos",
        incorrectas: [
            "Arcilla roja porosa de baja temperatura (terracota)",
            "Mezcla de cemento y arena"
        ]
    },
    {
        enunciado: "¿Qué es la 'porcelana'?",
        correcta: "Cerámica de pasta blanca, fina y translúcida hecha de caolín, feldespato y cuarzo, cocida a muy alta temperatura (>1300°C)",
        incorrectas: [
            "Vidrio opaco pintado de blanco",
            "Cerámica esmaltada con estaño (mayólica)"
        ]
    },
    {
        enunciado: "¿Qué es el 'rakú'?",
        correcta: "Técnica japonesa donde las piezas se sacan del horno al rojo vivo y se reducen en serrín, creando efectos metálicos y craquelados únicos",
        incorrectas: [
            "Tipo de decoración con pinceles de pelo de rata",
            "Horno eléctrico de alta eficiencia programable"
        ]
    },
    {
        enunciado: "¿Qué es la 'engobe'?",
        correcta: "Pasta de arcilla coloreada con óxidos que se aplica sobre la pieza cruda (en estado de cuero) para decorarla antes de la cocción",
        incorrectas: [
            "Barniz transparente final",
            "Pegamento para reparar piezas rotas cocidas"
        ]
    },
    {
        enunciado: "¿Qué es el 'estado de cuero'?",
        correcta: "Fase de secado donde la arcilla ha perdido parte del agua, está firme pero aún húmeda, ideal para retornea, pegar asas o esgrafiar",
        incorrectas: [
            "Cuando la pieza está totalmente seca y quebradiza",
            "Arcilla mezclada con fibras de piel"
        ]
    },
    {
        enunciado: "¿Qué es la 'terracota'?",
        correcta: "Arcilla modelada y cocida a baja temperatura (900°C-1000°C), porosa y de color rojizo/ocre debido a la presencia de hierro",
        incorrectas: [
            "Cerámica vitrificada impermeable blanca",
            "Tierra cruda sin cocer (adobe)"
        ]
    },
    {
        enunciado: "¿Qué es un 'fundente' en los esmaltes?",
        correcta: "Sustancia (ej. plomo, boro, feldespato) que reduce el punto de fusión de la sílice, permitiendo que el esmalte vitrifique a menor temperatura",
        incorrectas: [
            "Material que aumenta la resistencia al choque térmico",
            "Pigmento que da el color base"
        ]
    },
    {
        enunciado: "¿Qué es la 'chamota'?",
        correcta: "Arcilla cocida y molida que se añade a la pasta fresca para darle estructura, reducir la contracción y evitar grietas en el secado",
        incorrectas: [
            "Combustible usado en los hornos de leña",
            "Esmalte defectuoso que hace burbujas"
        ]
    },
    {
        enunciado: "¿Qué es la técnica del 'churros' o colombín?",
        correcta: "Método manual de construcción levantando paredes mediante rollos alargados de arcilla superpuestos y unidos",
        incorrectas: [
            "Tornear piezas muy altas y estrechas",
            "Decoración en espiral incisa"
        ]
    },
    {
        enunciado: "¿Qué es el 'vidrio soplado'?",
        correcta: "Técnica de conformar vidrio fundido insuflando aire a través de una caña hueca para expandir una burbuja de material",
        incorrectas: [
            "Enfriar el vidrio con ventiladores",
            "Limpiar cristales con aire comprimido"
        ]
    },
    {
        enunciado: "¿Qué es el 'recocido' del vidrio?",
        correcta: "Enfriamiento lento y controlado en un horno (arca) para eliminar las tensiones internas y evitar que la pieza estalle",
        incorrectas: [
            "Volver a fundir vidrio reciclado",
            "Cocer el vidrio dos veces para darle color"
        ]
    },
    {
        enunciado: "¿Qué es el 'fusing' (vitroifusión)?",
        correcta: "Técnica de unir vidrios de diferentes colores superpuestos mediante calor en un horno hasta que se funden en una sola pieza plana o con relieve",
        incorrectas: [
            "Pegar vidrios con adhesivos UV",
            "Soldar vidrio con plomo (vidriera emplomada)"
        ]
    },
    {
        enunciado: "¿Qué es el 'cloisonné' en esmaltado?",
        correcta: "Técnica de esmalte sobre metal donde los alveolos para el color se forman con finos hilos metálicos soldados (tabiques)",
        incorrectas: [
            "Esmalte pintado libremente como un cuadro",
            "Excavar el metal para rellenar huecos (champlevé)"
        ]
    },
    {
        enunciado: "¿Qué es el 'champlevé'?",
        correcta: "Técnica de esmalte donde se excavan huecos en la base metálica (cincelado o ácido) para rellenarlos con esmalte fundido",
        incorrectas: [
            "Esmalte vítreo transparente (plique-à-jour)",
            "Aplicar esmalte sobre una superficie lisa"
        ]
    },
    {
        enunciado: "¿Qué es la 'oxidación' en la cocción cerámica?",
        correcta: "Atmósfera del horno rica en oxígeno, permitiendo que los metales de los esmaltes y pastas desarrollen sus colores oxidados típicos",
        incorrectas: [
            "Que el horno se oxide por la humedad",
            "Atmósfera con humo y falta de oxígeno"
        ]
    },
    {
        enunciado: "¿Qué es la 'reducción' en la cocción cerámica?",
        correcta: "Atmósfera pobre en oxígeno (con humo) que roba oxígeno a los óxidos de la pieza, cambiando drásticamente sus colores (ej. cobre rojo, lustre)",
        incorrectas: [
            "Reducir el tamaño de las piezas al cocer",
            "Bajar la temperatura rápidamente"
        ]
    },
    {
        enunciado: "¿Qué es el 'caolín'?",
        correcta: "Arcilla primaria blanca, muy pura y refractaria, ingrediente esencial de la porcelana",
        incorrectas: [
            "Arcilla roja común de alfarería",
            "Un fundente para bajar la temperatura"
        ]
    },
    {
        enunciado: "¿Qué es el 'conos pirométricos'?",
        correcta: "Pequeñas pirámides de material cerámico calibrado que se doblan a una temperatura específica, indicando el trabajo térmico real dentro del horno",
        incorrectas: [
            "Termómetros digitales de infrarrojos",
            "Moldes cónicos para hacer tazas"
        ]
    },
    {
        enunciado: "¿Qué es el 'vidriado a la sal'?",
        correcta: "Técnica donde se introduce sal común en el horno a alta temperatura; el sodio vaporizado reacciona con la sílice formando un vidriado de piel de naranja",
        incorrectas: [
            "Limpiar las piezas con agua salada",
            "Esmalte hecho con cristales de sal sin cocer"
        ]
    },
    {
        enunciado: "¿Qué es el 'tiffany' en vidrieras?",
        correcta: "Técnica inventada por L.C. Tiffany que sustituye el plomo por cinta de cobre adhesiva soldada con estaño, permitiendo diseños más finos y curvos",
        incorrectas: [
            "Vidrio pintado con óleo transparente",
            "Vidrio blindado de seguridad"
        ]
    },
    {
        enunciado: "¿Qué es la 'losa' o loza?",
        correcta: "Cerámica porosa cocida a baja temperatura y cubierta con un esmalte opaco (generalmente estannífero) para hacerla impermeable",
        incorrectas: [
            "Piedra natural pulida",
            "Cerámica sin esmaltar para macetas"
        ]
    },
    {
        enunciado: "¿Qué es el 'azulejo'?",
        correcta: "Pieza de cerámica plana vidriada (ladrillo pequeño), usada para revestimiento de paredes y suelos",
        incorrectas: [
            "Pieza de vidrio azul",
            "Cualquier cerámica pintada de azul"
        ]
    },
    {
        enunciado: "¿Qué es el 'esmalte sobre cubierta' (tercer fuego)?",
        correcta: "Decoración aplicada sobre el esmalte ya cocido (vitrificado) que requiere una tercera cocción a menor temperatura (ej. dorados, calcas)",
        incorrectas: [
            "Pintar sobre la pieza cruda",
            "Esmalte que cubre toda la pieza por inmersión"
        ]
    },
    {
        enunciado: "¿Qué es la 'calcina'?",
        correcta: "Mezcla de ingredientes cerámicos cocida y molida previamente para estabilizarla antes de usarla en esmaltes o pastas",
        incorrectas: [
            "La cal que se usa en construcción",
            "Yeso quemado"
        ]
    },
    {
        enunciado: "¿Qué es el 'criado' o 'maturado' del esmalte?",
        correcta: "El punto óptimo de fusión en el horno donde el esmalte se ha alisado y ha desarrollado plenamente sus propiedades físicas y estéticas",
        incorrectas: [
            "Dejar reposar el esmalte líquido antes de usarlo",
            "El envejecimiento de la pieza con los años"
        ]
    },
    {
        enunciado: "¿Qué es el 'plomo' en las vidrieras góticas?",
        correcta: "Perfil en forma de H (cañuela) que ensambla y sujeta las piezas de vidrio recortado formando el panel rígido",
        incorrectas: [
            "Pintura gris para simular sombras",
            "El peso que sujeta la vidriera al muro"
        ]
    },
    {
        enunciado: "¿Qué es la 'grisalla' en vidrieras?",
        correcta: "Pintura vitrificable de óxidos (negro/marrón) usada para trazar contornos y sombras sobre el vidrio antes de cocerlo",
        incorrectas: [
            "Vidrio de color gris neutro",
            "La suciedad acumulada por los siglos"
        ]
    },
    {
        enunciado: "¿Qué es el 'reflejo metálico' o loza dorada?",
        correcta: "Técnica hispano-árabe de tercera cocción en atmósfera reductora que deposita una fina capa de metal (cobre/plata) sobre el esmalte, haciéndolo iridiscente",
        incorrectas: [
            "Pegar pan de oro sobre la cerámica",
            "Usar pintura metálica de coche"
        ]
    },
    {
        enunciado: "¿Qué es el 'amasado' de la arcilla?",
        correcta: "Proceso manual o mecánico para homogeneizar la pasta y eliminar burbujas de aire que podrían hacer explotar la pieza en el horno",
        incorrectas: [
            "Mezclar arcilla con agua para hacer barbotina",
            "Dar forma a la pieza con las manos"
        ]
    },
    {
        enunciado: "¿Qué es la 'contracción' cerámica?",
        correcta: "La reducción de tamaño que sufre la pieza durante el secado y la cocción debido a la pérdida de agua y la vitrificación (un 10-15%)",
        incorrectas: [
            "Cuando la pieza se deforma por el calor",
            "La expansión térmica al calentarse"
        ]
    },
    {
        enunciado: "¿Qué es un 'torno de terraja'?",
        correcta: "Técnica industrial o semi-industrial donde una plantilla perfilada (terraja) conforma el interior o exterior de la pieza mientras gira en un molde",
        incorrectas: [
            "Un torno de madera antiguo",
            "Herramienta para hacer roscas en cerámica"
        ]
    },
    {
        enunciado: "¿Qué es el 'vidrio de plomo' (cristal)?",
        correcta: "Vidrio con alto contenido en óxido de plomo, lo que aumenta su densidad, brillo y sonoridad, siendo más blando para tallar",
        incorrectas: [
            "Vidrio blindado antibalas",
            "Espejo recubierto de plomo"
        ]
    },
    {
        enunciado: "¿Qué es la 'pasta de papel' (paper clay)?",
        correcta: "Mezcla de arcilla y celulosa que permite modelar piezas más finas y complejas, con mayor resistencia en crudo y menor peso",
        incorrectas: [
            "Papel maché pintado como cerámica",
            "Arcilla para escribir encima"
        ]
    },
    {
        enunciado: "¿Qué es el 'craquelado' (cracklé)?",
        correcta: "Red de finas grietas en el esmalte causada por la diferente tensión entre el cuerpo cerámico y el vidriado al enfriarse; puede ser decorativo o defecto",
        incorrectas: [
            "Rotura de la pieza en el horno",
            "Textura rugosa como de piedra"
        ]
    }
];
