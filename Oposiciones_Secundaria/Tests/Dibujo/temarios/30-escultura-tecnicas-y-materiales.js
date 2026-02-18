var PREGUNTAS = [
    {
        enunciado: "¿Qué diferencia la escultura de 'bulto redondo' del relieve?",
        correcta: "El bulto redondo es una obra exenta que puede ser rodeada y vista desde todos los ángulos; el relieve está adherido a un plano de fondo",
        incorrectas: [
            "El bulto redondo siempre es abstracto y el relieve figurativo",
            "El bulto redondo es de madera y el relieve de piedra"
        ]
    },
    {
        enunciado: "¿Qué es la técnica de la 'talla' (sustractiva)?",
        correcta: "Proceso de quitar material de un bloque duro (madera, piedra) mediante herramientas cortantes para liberar la forma",
        incorrectas: [
            "Añadir material blando sobre una armadura",
            "Fundir metal en un molde"
        ]
    },
    {
        enunciado: "¿Qué es el 'modelado' (aditiva)?",
        correcta: "Proceso de dar forma a un material blando y maleable (arcilla, cera) añadiendo y quitando materia con las manos y palillos",
        incorrectas: [
            "Tallar mármol con cincel",
            "Ensamblar piezas metálicas soldadas"
        ]
    },
    {
        enunciado: "¿Qué es el 'vaciado' o fundición?",
        correcta: "Técnica de reproducción que consiste en verter un material líquido (bronce, escayola) dentro de un molde hueco donde solidifica",
        incorrectas: [
            "Vaciar el interior de una piedra tallada",
            "Tallar madera hueca"
        ]
    },
    {
        enunciado: "¿Qué es la técnica de la 'cera perdida'?",
        correcta: "Método complejo para fundir bronce: se crea un modelo de cera que se recubre de molde refractario; al calentar, la cera se derrite y escapa, dejando hueco para el metal",
        incorrectas: [
            "Modelar con cera y dejarla endurecer para siempre",
            "Usar velas para iluminar la escultura"
        ]
    },
    {
        enunciado: "¿Qué es el 'ensamblaje' (assemblage)?",
        correcta: "Técnica moderna de construcción escultórica uniendo objetos preexistentes o materiales diversos (madera, metal, chatarra) en una sola obra",
        incorrectas: [
            "Pegar trozos de piedra rota",
            "Montar un mueble de kit"
        ]
    },
    {
        enunciado: "¿Qué es un 'boceto' o maqueta en escultura?",
        correcta: "Estudio previo a pequeña escala realizado en material barato (barro, cera) para definir la composición antes de la obra definitiva",
        incorrectas: [
            "Un dibujo en papel de la estatua",
            "La base donde se coloca la escultura"
        ]
    },
    {
        enunciado: "¿Qué es la 'pátina'?",
        correcta: "Acabado superficial (natural por el tiempo o artificial con químicos) que cambia el color y textura del material (esp. bronce) y lo protege",
        incorrectas: [
            "La capa de polvo sucio",
            "Pintura plástica de colores"
        ]
    },
    {
        enunciado: "¿Qué herramienta es fundamental para tallar piedra?",
        correcta: "El cincel y la maza (o martillo neumático)",
        incorrectas: [
            "La gubia (uso en madera)",
            "El palillo de modelar"
        ]
    },
    {
        enunciado: "¿Qué es una 'armadura' o estructura interna?",
        correcta: "Esqueleto de alambre o madera que soporta el peso del material blando (arcilla) durante el modelado para evitar que se derrumbe",
        incorrectas: [
            "El traje de un caballero medieval esculpido",
            "El andamio para esculpir obras grandes"
        ]
    },
    {
        enunciado: "¿Qué es el 'bajorrelieve'?",
        correcta: "Relieve donde las figuras sobresalen muy poco del fondo (menos de la mitad de su volumen real), a veces creando ilusión de profundidad",
        incorrectas: [
            "Relieve situado en la parte baja de un edificio",
            "Escultura enterrada en el suelo"
        ]
    },
    {
        enunciado: "¿Qué es la 'forja'?",
        correcta: "Técnica de trabajar el metal (hierro) deformándolo mediante golpes de martillo, generalmente en caliente (al rojo)",
        incorrectas: [
            "Fundir metal en moldes",
            "Cortar metal con láser"
        ]
    },
    {
        enunciado: "¿Qué es el 'sacado de puntos'?",
        correcta: "Método mecánico tradicional para copiar fielmente un modelo de yeso en piedra, midiendo profundidades con una máquina de puntos",
        incorrectas: [
            "Contar los puntos ganados en un concurso",
            "Sacar punta a los lápices de dibujo"
        ]
    },
    {
        enunciado: "¿Qué es la 'terracota' en escultura?",
        correcta: "Arcilla modelada y cocida al horno, que endurece y toma color rojizo; puede dejarse vista o policromarse",
        incorrectas: [
            "Tierra cruda secada al sol",
            "Piedra volcánica roja tallada"
        ]
    },
    {
        enunciado: "¿Qué es el 'contrapposto'?",
        correcta: "Posición armónica de la figura humana de pie donde el peso descansa en una pierna, curvando la cadera y hombros en oposición",
        incorrectas: [
            "Poner una escultura frente a otra",
            "Escultura abstracta geométrica"
        ]
    },
    {
        enunciado: "¿Qué es una escultura 'cinética'?",
        correcta: "Obra que incorpora movimiento real, ya sea por motores, viento o interacción del espectador (ej. móviles de Calder)",
        incorrectas: [
            "Escultura relacionada con el cine",
            "Estatua de un atleta corriendo"
        ]
    },
    {
        enunciado: "¿Qué es el 'mármol' y por qué se usa?",
        correcta: "Roca metamórfica caliza, apreciada por su grano fino que permite gran detalle y su traslucidez superficial que imita la piel",
        incorrectas: [
            "Piedra artificial hecha de resina",
            "Roca muy blanda que se deshace con agua"
        ]
    },
    {
        enunciado: "¿Qué es el 'hueco' en la escultura contemporánea (Henry Moore)?",
        correcta: "El espacio vacío que atraviesa la masa escultórica, convirtiéndose en un elemento activo de composición y volumen negativo",
        incorrectas: [
            "Un error al fundir el bronce",
            "El interior hueco para ahorrar material"
        ]
    },
    {
        enunciado: "¿Qué es la 'soldadura'?",
        correcta: "Proceso de unión de piezas metálicas mediante la fusión de sus bordes o un material de aporte, clave en la escultura en hierro s. XX",
        incorrectas: [
            "Pegar metal con pegamento fuerte",
            "Atar piezas con alambre"
        ]
    },
    {
        enunciado: "¿Qué es una 'instalación' escultórica?",
        correcta: "Obra de arte contemporáneo que ocupa y transforma un espacio tridimensional completo, diseñada para ser transitada y experimentada",
        incorrectas: [
            "Instalar una estatua en la plaza",
            "El sistema eléctrico del museo"
        ]
    },
    {
        enunciado: "¿Qué es el 'poliestireno expandido' (porexpán) en escultura?",
        correcta: "Material sintético ligero y fácil de tallar, usado para maquetas, escenografía o como núcleo para moldes de fundición",
        incorrectas: [
            "Un tipo de piedra pómez",
            "Plástico líquido para moldes"
        ]
    },
    {
        enunciado: "¿Qué es el 'land art'?",
        correcta: "Corriente artística que interviene directamente en el paisaje natural, usando materiales del entorno (tierra, piedras) a gran escala",
        incorrectas: [
            "Pintar paisajes realistas",
            "Esculturas de jardín"
        ]
    },
    {
        enunciado: "¿Qué es la 'talla directa'?",
        correcta: "Esculpir directamente sobre el material definitivo (piedra/madera) sin un modelo previo detallado, guiándose por el material",
        incorrectas: [
            "Copiar un modelo con máquina de puntos",
            "Tallar con herramientas eléctricas"
        ]
    },
    {
        enunciado: "¿Qué es el 'encofrado' en escultura de hormigón?",
        correcta: "El molde (generalmente de madera) donde se vierte el hormigón fresco hasta que fragua y endurece con la forma deseada",
        incorrectas: [
            "Guardar la escultura en un cofre",
            "Cubrir la escultura con oro"
        ]
    },
    {
        enunciado: "¿Qué es el 'bronce'?",
        correcta: "Aleación de cobre y estaño, el metal más noble y tradicional para la fundición escultórica por su fluidez y durabilidad",
        incorrectas: [
            "Hierro puro fundido",
            "Oro mezclado con plomo"
        ]
    },
    {
        enunciado: "¿Qué es una 'gubia'?",
        correcta: "Herramienta de acero con filo curvo o en V, utilizada para tallar madera arrancando virutas",
        incorrectas: [
            "Herramienta para golpear piedra",
            "Lija para pulir metal"
        ]
    },
    {
        enunciado: "¿Qué es la 'escayola' o yeso?",
        correcta: "Sulfato cálcico que, mezclado con agua, fragua rápidamente. Se usa para moldes, bocetos y reproducciones baratas",
        incorrectas: [
            "Polvo de mármol con resina",
            "Arcilla blanca que se cuece"
        ]
    },
    {
        enunciado: "¿Qué es el 'repujado'?",
        correcta: "Técnica de trabajar chapas metálicas finas golpeándolas por el reverso para crear relieve en la cara frontal",
        incorrectas: [
            "Dibujar sobre el metal con ácido",
            "Pondar textura rugosa a la piedra"
        ]
    },
    {
        enunciado: "¿Qué es la 'policromía'?",
        correcta: "El acto de pintar la superficie de una escultura con colores para darle realismo o valor decorativo (ej. imaginería)",
        incorrectas: [
            "Esculpir con muchos materiales distintos",
            "Usar mármoles de colores naturales"
        ]
    },
    {
        enunciado: "¿Qué es una 'estatua ecuestre'?",
        correcta: "Escultura que representa a una figura montada a caballo, tradicionalmente reservada para gobernantes o militares",
        incorrectas: [
            "Estatua situada en el campo",
            "Estatua de un caballo solo"
        ]
    },
    {
        enunciado: "¿Qué es la 'resina' (poliéster/epoxi) en escultura actual?",
        correcta: "Polímero sintético líquido que, mezclado con catalizador, endurece como plástico; permite coladas, transparencias e imitaciones",
        incorrectas: [
            "Savia de árbol natural sin tratar",
            "Pegamento para unir piedra"
        ]
    },
    {
        enunciado: "¿Qué es el 'granito'?",
        correcta: "Roca ígnea muy dura, granular y difícil de tallar, usada para escultura monumental exterior por su resistencia",
        incorrectas: [
            "Grano de arena para lija",
            "Una piedra blanda tipo arenisca"
        ]
    },
    {
        enunciado: "¿Qué es el 'ready-made' (objeto encontrado)?",
        correcta: "Objeto cotidiano manufacturado que el artista selecciona y expone como obra de arte, modificando su contexto (Duchamp)",
        incorrectas: [
            "Una escultura hecha muy rápido",
            "Un kit de escultura para principiantes"
        ]
    },
    {
        enunciado: "¿Qué es la 'gradina'?",
        correcta: "Cincel dentado utilizado en la talla de piedra para desbastar y dejar una textura rayada característica antes del pulido",
        incorrectas: [
            "Una escalera pequeña",
            "Piedra de grano fino"
        ]
    },
    {
        enunciado: "¿Qué es el 'torso'?",
        correcta: "Representación escultórica del cuerpo humano sin cabeza, brazos ni piernas, centrada en el tronco",
        incorrectas: [
            "Una columna retorcida",
            "La espalda de la estatua"
        ]
    },
    {
        enunciado: "¿Qué es la 'silicona' de moldes?",
        correcta: "Material elástico y antiadherente usado para hacer moldes flexibles que capturan gran detalle y permiten desmoldar formas complejas",
        incorrectas: [
            "Pegamento para sellar juntas",
            "Plástico rígido para copias"
        ]
    },
    {
        enunciado: "¿Qué es el 'non finito' (Miguel Ángel)?",
        correcta: "Técnica o estética de dejar partes de la escultura sin terminar (en bruto) para contrastar con las pulidas o por expresividad",
        incorrectas: [
            "Una obra abandonada por pereza",
            "Escultura invisible"
        ]
    },
    {
        enunciado: "¿Qué es el 'móvil' (mobile)?",
        correcta: "Escultura cinética colgante formada por piezas equilibradas que se mueven con las corrientes de aire (Alexander Calder)",
        incorrectas: [
            "Una escultura con ruedas",
            "Un teléfono celular"
        ]
    },
    {
        enunciado: "¿Qué es la 'fibra de vidrio'?",
        correcta: "Material de refuerzo en forma de tela o hilos que se combina con resina para crear esculturas huecas ligeras y muy resistentes",
        incorrectas: [
            "Vidrio estirado para decorar",
            "Cable de comunicaciones ópticas"
        ]
    },
    {
        enunciado: "¿Qué es el 'altorrelieve' vs 'bulto redondo'?",
        correcta: "El altorrelieve sobresale mucho del fondo (>50%) pero sigue pegado a él; el bulto redondo es totalmente independiente",
        incorrectas: [
            "Es lo mismo",
            "El altorrelieve está colgado en alto"
        ]
    }
];
