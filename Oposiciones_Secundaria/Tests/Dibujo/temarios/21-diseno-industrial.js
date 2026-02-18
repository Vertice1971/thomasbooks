var PREGUNTAS = [
    {
        enunciado: "¿Qué es el Diseño Industrial?",
        correcta: "Disciplina proyectual que busca concebir objetos y productos para ser fabricados en serie por medios industriales, optimizando función, valor y estética",
        incorrectas: [
            "Diseñar industrias y fábricas",
            "Hacer artesanía con máquinas"
        ]
    },
    {
        enunciado: "¿Qué diferencia clave existe entre el diseño industrial y la artesanía?",
        correcta: "El diseño industrial separa la fase de proyecto (intelectual) de la de ejecución (mecánica/serial), mientras que en la artesanía suelen ir unidas y ser manuales",
        incorrectas: [
            "El diseño industrial es más bonito",
            "La artesanía usa ordenadores y el diseño industrial no"
        ]
    },
    {
        enunciado: "¿Qué es la 'producción en serie'?",
        correcta: "Fabricación de múltiples copias idénticas de un mismo diseño mediante moldes, troqueles o maquinaria automatizada, reduciendo el coste unitario",
        incorrectas: [
            "Hacer una serie de televisión",
            "Producir cosas muy serias"
        ]
    },
    {
        enunciado: "¿Qué es el 'ciclo de vida' de un producto?",
        correcta: "Las etapas desde su concepción hasta su retirada del mercado: introducción, crecimiento, madurez y declive (y posterior desecho/reciclaje)",
        incorrectas: [
            "Cuánto dura la pila",
            "La vida del diseñador"
        ]
    },
    {
        enunciado: "¿Qué es la 'obsolescencia programada'?",
        correcta: "La planificación deliberada del fin de la vida útil de un producto para obligar al consumidor a comprar uno nuevo en poco tiempo",
        incorrectas: [
            "Un programa informático antiguo",
            "Que los productos se rompen por mala suerte"
        ]
    },
    {
        enunciado: "¿Qué importancia tiene la 'normalización' (normas ISO/UNE) en el diseño industrial?",
        correcta: "Fundamental para asegurar la compatibilidad de piezas, la calidad, la seguridad y el intercambio internacional de productos",
        incorrectas: [
            "Es una burocracia inútil",
            "Sirve para que todo sea aburrido"
        ]
    },
    {
        enunciado: "¿Qué es el 'Fordismo' en la historia del diseño?",
        correcta: "Sistema de producción en cadena (Henry Ford) que permitió la fabricación masiva y barata de productor estandarizados (Modelo T)",
        incorrectas: [
            "Diseñar coches fuertes (ford)",
            "Un estilo artístico de Detroit"
        ]
    },
    {
        enunciado: "¿Qué es el 'Taylorismo'?",
        correcta: "La organización científica del trabajo para maximizar la eficiencia, dividiendo las tareas en pasos simples y cronometrados",
        incorrectas: [
            "Diseñar ropa a medida (tailor)",
            "Un estilo de diseño rápido"
        ]
    },
    {
        enunciado: "¿Qué es un 'prototipo' funcional?",
        correcta: "Un modelo a escala real que funciona igual que el producto final, usado para testar la ingeniería y el uso antes de fabricar los moldes costosos",
        incorrectas: [
            "Un dibujo en papel",
            "Una foto del producto"
        ]
    },
    {
        enunciado: "¿Qué es el 'Eco-diseño'?",
        correcta: "Integrar criterios ambientales en el diseño para reducir el impacto negativo en todo el ciclo de vida (menor consumo, reciclabilidad)",
        incorrectas: [
            "Diseñar cosas que hacen eco",
            "Pintar los productos de verde"
        ]
    },
    {
        enunciado: "¿Qué es la 'ergonomía' cognitiva?",
        correcta: "Rama de la ergonomía que se ocupa de los procesos mentales (percepción, memoria) en la interacción hombre-máquina (ej. interfaces intuitivas)",
        incorrectas: [
            "Pensar en posturas cómodas",
            "Diseñar almohadas"
        ]
    },
    {
        enunciado: "¿Qué es el 'styling' aerodinámico (Streamlining)?",
        correcta: "Estilo americano de los años 30 que aplicaba formas de gota de agua y velocidad a todo (sacapuntas, neveras) para estimular el consumo tras la Gran Depresión",
        incorrectas: [
            "Diseñar aviones solamente",
            "Un estilo de natación"
        ]
    },
    {
        enunciado: "¿Qué es la 'biónica' aplicada al diseño industrial?",
        correcta: "El estudio de los sistemas naturales biológicos para aplicar sus principios estructurales o funcionales a objetos técnicos (ej. velcro, estructuras óseas)",
        incorrectas: [
            "Hacer piernas ortopédicas",
            "Diseñar animales robots"
        ]
    },
    {
        enunciado: "¿Qué fue la 'Braun' de Dieter Rams?",
        correcta: "Un referente del diseño funcionalista alemán (años 50-60), caracterizado por la sobriedad, el orden, los colores neutros y la eliminación de lo superfluo",
        incorrectas: [
            "Una marca de batidoras baratas",
            "Un estilo de diseño barroco"
        ]
    },
    {
        enunciado: "¿Qué es la 'ingeniería de producto'?",
        correcta: "La fase técnica que define cómo se va a fabricar el diseño, seleccionando materiales, tolerancias y procesos de manufactura",
        incorrectas: [
            "Ingeniárselas para vender",
            "Diseñar motores"
        ]
    },
    {
        enunciado: "¿Qué es el 'moldeo por inyección'?",
        correcta: "El proceso más común para fabricar piezas de plástico, inyectando polímero fundido a alta presión en un molde metálico cerrado",
        incorrectas: [
            "Poner inyecciones médicas",
            "Hacer figuras de barro"
        ]
    },
    {
        enunciado: "¿Qué es la 'modularidad'?",
        correcta: "Diseñar productos divididos en módulos independientes que pueden combinarse o intercambiarse, facilitando la reparación y personalización",
        incorrectas: [
            "Hablar con modales",
            "Diseñar monedas"
        ]
    },
    {
        enunciado: "¿Qué es el 'análisis de valor'?",
        correcta: "Método para reducir costes eliminando características que no aportan valor real al usuario o a la función del producto",
        incorrectas: [
            "Saber cuánto cuesta el producto",
            "Valorar si el diseño es bonito"
        ]
    },
    {
        enunciado: "¿Qué es el 'diseño inclusivo'?",
        correcta: "Diseñar productos que puedan ser usados por la mayor variedad de personas posible, sin estigmatizar ni requerir adaptaciones especiales",
        incorrectas: [
            "Incluir un regalo en la caja",
            "Diseñar cerraduras"
        ]
    },
    {
        enunciado: "¿Qué es la 'carcasa'?",
        correcta: "La envoltura exterior que protege los componentes internos, da forma al producto y es el principal campo de acción estética del diseñador",
        incorrectas: [
            "El esqueleto de un animal",
            "Una casa rodante"
        ]
    },
    {
        enunciado: "¿Qué es el 'despiece' o vista explotada?",
        correcta: "Dibujo técnico que muestra todas las partes de un conjunto separadas pero ordenadas según su eje de montaje",
        incorrectas: [
            "Romper el producto en trozos",
            "Vender piezas sueltas"
        ]
    },
    {
        enunciado: "¿Qué es el 'ready-made' en el contexto del objeto industrial (Duchamp)?",
        correcta: "La elevación de un objeto industrial común (ej. urinario) a la categoría de arte por la mera elección del artista, descontextualizándolo",
        incorrectas: [
            "Comida preparada",
            "Ropa lista para llevar"
        ]
    },
    {
        enunciado: "¿Qué es el 'diseño emocional'?",
        correcta: "Enfoque que considera que los aspectos afectivos y placenteros del objeto son tan importantes para su éxito como la función técnica",
        incorrectas: [
            "Diseñar llorando",
            "Objetos que tienen sentimientos"
        ]
    },
    {
        enunciado: "¿Qué es la 'democratización del diseño' (ej. IKEA)?",
        correcta: "Hacer accesible el buen diseño funcional y estético a la gran mayoría de la población mediante precios bajos y producción masiva",
        incorrectas: [
            "Votar los diseños en urna",
            "Que todos sean diseñadores"
        ]
    },
    {
        enunciado: "¿Qué es un 'briefing' de producto?",
        correcta: "Documento inicial que define los requisitos, restricciones, target y objetivos que debe cumplir el nuevo diseño",
        incorrectas: [
            "Un resumen corto",
            "Una reunión de amigos"
        ]
    },
    {
        enunciado: "¿Qué es la 'antropometría' dinámica?",
        correcta: "El estudio de las medidas del cuerpo humano en movimiento y realizando tareas, crucial para diseñar espacios de trabajo y herramientas",
        incorrectas: [
            "Medir a gente corriendo",
            "Bailar mientras mides"
        ]
    },
    {
        enunciado: "¿Qué es el 'packaging' estructural?",
        correcta: "El diseño de la forma física, material y sistema de apertura del envase, más allá de la gráfica impresa",
        incorrectas: [
            "Empaquetar estructuras metálicas",
            "El dibujo de la caja"
        ]
    },
    {
        enunciado: "¿Qué es la 'sostenibilidad' social en diseño?",
        correcta: "Considerar las condiciones laborales justas de quienes fabrican el producto y el impacto en la comunidad local (comercio justo)",
        incorrectas: [
            "Que el diseño sea sociable",
            "Hacer fiestas de diseño"
        ]
    },
    {
        enunciado: "¿Qué es el 'retro-styling'?",
        correcta: "Diseñar productos modernos con tecnología actual pero imitando estéticas del pasado (ej. Mini Cooper, neveras Smeg)",
        incorrectas: [
            "Diseñar mirando hacia atrás",
            "Estilo viejo y roto"
        ]
    },
    {
        enunciado: "¿Qué es la 'usabilidad'?",
        correcta: "La medida de qué tan fácil, intuitivo y eficiente es el uso de un objeto para el usuario objetivo",
        incorrectas: [
            "Si se usa o no",
            "Usar y tirar"
        ]
    },
    {
        enunciado: "¿Qué es el 'diseño de servicios'?",
        correcta: "Diseñar no un objeto físico, sino la planificación y organización de un servicio (ej. sistema de bicis compartidas) para mejorar la experiencia",
        incorrectas: [
            "Diseñar baños públicos",
            "Servir copas con estilo"
        ]
    },
    {
        enunciado: "¿Qué es el 'material compuesto' (composite)?",
        correcta: "Material formado por la unión de dos o más componentes (ej. fibra de carbono + resina) para obtener propiedades superiores a las individuales",
        incorrectas: [
            "Un material que compone música",
            "Basura compactada"
        ]
    },
    {
        enunciado: "¿Qué es el 'rapid prototyping' (prototipado rápido)?",
        correcta: "Uso de tecnologías como impresión 3D para fabricar maquetas físicas directamente desde el archivo CAD en muy poco tiempo",
        incorrectas: [
            "Correr mucho haciendo maquetas",
            "Hacer prototipos de mala calidad"
        ]
    },
    {
        enunciado: "¿Qué es la 'estética de la máquina'?",
        correcta: "Apreciación de la belleza en las formas puras, metálicas y precisas derivadas de la ingeniería mecánica, típica de las vanguardias del s. XX",
        incorrectas: [
            "Que las máquinas se maquillen",
            "Poner flores a los motores"
        ]
    },
    {
        enunciado: "¿Qué es un 'moodboard' en la fase de ideación?",
        correcta: "Un tablero de inspiración con imágenes, texturas y colores que define el estilo y atmósfera que se busca para el producto",
        incorrectas: [
            "Una tabla de planchar",
            "Un estado de ánimo aburrido"
        ]
    },
    {
        enunciado: "¿Qué es la 'patente de invención' vs 'modelo de utilidad'?",
        correcta: "La patente protege invenciones nuevas con alto nivel inventivo mundial; el modelo de utilidad protege mejoras menores en objetos ya conocidos",
        incorrectas: [
            "Son lo mismo",
            "La patente es para ricos y el modelo para pobres"
        ]
    },
    {
        enunciado: "¿Qué es el 'Cradle to Cradle' (de la cuna a la cuna)?",
        correcta: "Filosofía de diseño donde todo se recicla infinitamente o vuelve a la tierra como nutriente, eliminando el concepto de 'residuo'",
        incorrectas: [
            "Diseñar cunas para bebés",
            "De la cuna a la tumba"
        ]
    },
    {
        enunciado: "¿Qué es el 'affordance' falso?",
        correcta: "Cuando un objeto sugiere una acción que no realiza (ej. una puerta que parece que se empuja pero hay que tirar), provocando error y frustración",
        incorrectas: [
            "Una mentira piadosa",
            "Un precio falso"
        ]
    },
    {
        enunciado: "¿Qué es la 'cultura maker'?",
        correcta: "Movimiento contemporáneo basado en el 'hazlo tú mismo' (DIY) usando tecnología digital (impresoras 3D, Arduino) para fabricar objetos personalizados",
        incorrectas: [
            "Hacer cultura",
            "La marca de rotuladores"
        ]
    },
    {
        enunciado: "¿Qué es el 'diseño especulativo'?",
        correcta: "Diseño que no busca resolver problemas actuales, sino plantear preguntas y escenarios futuros posibles para provocar debate crítico",
        incorrectas: [
            "Especular con el precio de la vivienda",
            "Diseñar espejos"
        ]
    }
];
