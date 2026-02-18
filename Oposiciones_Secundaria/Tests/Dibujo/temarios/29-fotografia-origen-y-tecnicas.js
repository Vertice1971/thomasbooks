var PREGUNTAS = [
    {
        enunciado: "¿Qué significa etimológicamente 'fotografía'?",
        correcta: "Escritura o dibujo con luz (del griego phos y graphis)",
        incorrectas: [
            "Imagen congelada en el tiempo",
            "Captura de la realidad"
        ]
    },
    {
        enunciado: "¿Qué es la 'cámara oscura'?",
        correcta: "Un recinto cerrado con un pequeño orificio por donde entra la luz, proyectando en la pared opuesta una imagen invertida y natural del exterior (principio óptico de la fotografía)",
        incorrectas: [
            "Una habitación para revelar fotos a oscuras",
            "Una cámara de fotos antigua pintada de negro"
        ]
    },
    {
        enunciado: "¿Quién logró la primera fotografía permanente de la historia ('Vista desde la ventana en Le Gras', 1826)?",
        correcta: "Joseph Nicéphore Niépce, utilizando betún de Judea sobre una placa de peltre",
        incorrectas: [
            "Louis Daguerre, con el daguerrotipo",
            "William Henry Fox Talbot, con el calotipo"
        ]
    },
    {
        enunciado: "¿Qué es un 'daguerrotipo'?",
        correcta: "Primer procedimiento fotográfico comercial, que producía una imagen positiva única sobre una placa de cobre plateado y pulido, sin negativo previo",
        incorrectas: [
            "Una copia en papel a la albúmina",
            "Un negativo de vidrio al colodión húmedo"
        ]
    },
    {
        enunciado: "¿Qué aportación fundamental hizo W.H. Fox Talbot con el 'calotipo'?",
        correcta: "Introdujo el sistema negativo-positivo, permitiendo obtener múltiples copias en papel a partir de un solo negativo original",
        incorrectas: [
            "Inventó la fotografía en color",
            "Creó la primera cámara portátil Kodak"
        ]
    },
    {
        enunciado: "¿Qué es el 'colodión húmedo'?",
        correcta: "Técnica del s. XIX que usaba placas de vidrio recubiertas de emulsión pegajosa que debían prepararse, exponerse y revelarse mientras aún estaban húmedas",
        incorrectas: [
            "Una técnica de revelado bajo el agua",
            "Un tipo de papel fotográfico seco"
        ]
    },
    {
        enunciado: "¿Qué es la 'longitud focal' de un objetivo?",
        correcta: "La distancia (en mm) entre el centro óptico de la lente y el sensor/película cuando está enfocada al infinito; determina el ángulo de visión",
        incorrectas: [
            "La longitud física del tubo del objetivo",
            "La distancia máxima a la que puede enfocar"
        ]
    },
    {
        enunciado: "¿Qué es la 'apertura' o diafragma de la cámara?",
        correcta: "El mecanismo iris que regula la cantidad de luz que entra al objetivo, medido en números f (f/2.8, f/8, etc.)",
        incorrectas: [
            "La velocidad a la que se abre el obturador",
            "La tapa que cubre la lente"
        ]
    },
    {
        enunciado: "¿Qué efecto tiene una apertura grande (ej. f/1.8) en la imagen?",
        correcta: "Entra mucha luz y produce una profundidad de campo muy reducida (fondo desenfocado), ideal para retratos",
        incorrectas: [
            "Entra poca luz y todo sale enfocado",
            "La imagen sale deformada en los bordes"
        ]
    },
    {
        enunciado: "¿Qué es el 'tiempo de exposición' o velocidad de obturación?",
        correcta: "El lapso de tiempo durante el cual el obturador permanece abierto permitiendo que la luz impresione el sensor o película",
        incorrectas: [
            "El tiempo que tarda la cámara en encenderse",
            "El tiempo que tarda el fotógrafo en hacer la foto"
        ]
    },
    {
        enunciado: "¿Qué es el 'ISO' en fotografía digital?",
        correcta: "La medida de la sensibilidad del sensor a la luz; valores altos permiten disparar con poca luz pero generan ruido digital",
        incorrectas: [
            "La Organización Internacional de Estándares de calidad de la cámara",
            "Un formato de archivo de imagen sin compresión"
        ]
    },
    {
        enunciado: "¿Qué es la 'regla de los tercios'?",
        correcta: "Regla de composición que divide la imagen en una cuadrícula de 3x3 y sugiere colocar los elementos importantes en las intersecciones de las líneas",
        incorrectas: [
            "Hacer siempre tres fotos de cada sujeto",
            "Dividir el tiempo de exposición por tres"
        ]
    },
    {
        enunciado: "¿Qué es el 'balance de blancos' (WB)?",
        correcta: "Ajuste digital para compensar la temperatura de color de la luz ambiente, logrando que los blancos se vean neutros y no amarillentos o azulados",
        incorrectas: [
            "Ajustar el brillo de la pantalla de la cámara",
            "Usar un flash de luz blanca"
        ]
    },
    {
        enunciado: "¿Qué es un objetivo 'gran angular'?",
        correcta: "Lente con focal corta (ej. 24mm) que abarca un ángulo de visión muy amplio, exagerando la perspectiva y alejando los planos",
        incorrectas: [
            "Lente que permite hacer fotos desde muy lejos (teleobjetivo)",
            "Lente para hacer fotos de insectos (macro)"
        ]
    },
    {
        enunciado: "¿Qué es la 'profundidad de campo'?",
        correcta: "La zona de la escena, por delante y por detrás del punto de enfoque, que aparece nítida en la fotografía",
        incorrectas: [
            "La distancia hasta el fondo del paisaje",
            "La profundidad física de la cámara"
        ]
    },
    {
        enunciado: "¿Qué es el formato 'RAW'?",
        correcta: "Archivo digital 'crudo' que contiene toda la información captada por el sensor sin procesar ni comprimir, permitiendo máxima flexibilidad en edición",
        incorrectas: [
            "Archivo de imagen listo para imprimir",
            "Formato comprimido para subir a internet (JPEG)"
        ]
    },
    {
        enunciado: "¿Qué es el 'histograma'?",
        correcta: "Gráfico que muestra la distribución de los píxeles de una imagen según su luminosidad (de sombras a luces), útil para evaluar la exposición",
        incorrectas: [
            "La historia de los metadatos de la foto",
            "Un filtro artístico de la cámara"
        ]
    },
    {
        enunciado: "¿Qué es el 'efecto bokeh'?",
        correcta: "La calidad estética del desenfoque en las zonas fuera de foco de una imagen, producida por la forma del diafragma y la lente",
        incorrectas: [
            "Un defecto de lente que produce manchas",
            "El efecto de ojos rojos"
        ]
    },
    {
        enunciado: "¿Qué es la fotografía 'macro'?",
        correcta: "Técnica para fotografiar sujetos muy pequeños a tamaño real (relación 1:1) o mayor, revelando detalles invisibles a simple vista",
        incorrectas: [
            "Fotografía de grandes paisajes panorámicos",
            "Fotografía con teleobjetivos gigantes"
        ]
    },
    {
        enunciado: "¿Qué es el 'rango dinámico'?",
        correcta: "La capacidad del sensor o película para captar detalle simultáneamente en las luces más brillantes y las sombras más oscuras de una escena",
        incorrectas: [
            "La velocidad de ráfaga de la cámara",
            "El rango de zoom del objetivo"
        ]
    },
    {
        enunciado: "¿Qué es el 'obturador de plano focal'?",
        correcta: "Mecanismo de cortinillas situado justo delante del sensor/película que controla el tiempo de exposición",
        incorrectas: [
            "El diafragma situado dentro del objetivo",
            "La tapa del objetivo"
        ]
    },
    {
        enunciado: "¿Qué fue la cámara 'Kodak Brownie' (1900)?",
        correcta: "Cámara barata y sencilla que popularizó la fotografía amateur masiva bajo el lema 'Usted aprieta el botón, nosotros hacemos el resto'",
        incorrectas: [
            "La primera cámara digital de la historia",
            "Una cámara espía de la guerra fría"
        ]
    },
    {
        enunciado: "¿Qué es el 'ruido digital'?",
        correcta: "Granulado aleatorio y píxeles de color espurios que aparecen en la imagen al usar ISOs altos o largas exposiciones, degradando la calidad",
        incorrectas: [
            "El sonido del obturador al disparar",
            "Interferencias de radio en la tarjeta de memoria"
        ]
    },
    {
        enunciado: "¿Qué es la 'distancia hiperfocal'?",
        correcta: "La distancia de enfoque que consigue la máxima profundidad de campo posible (desde la mitad de esa distancia hasta el infinito)",
        incorrectas: [
            "La distancia mínima de enfoque de una lente macro",
            "Enfocar más allá del infinito"
        ]
    },
    {
        enunciado: "¿Qué es un 'teleobjetivo'?",
        correcta: "Lente de focal larga (ej. 200mm) que estrecha el ángulo de visión, magnifica los objetos lejanos y comprime la perspectiva",
        incorrectas: [
            "Lente para hacer fotos a la televisión",
            "Lente muy ancha tipo ojo de pez"
        ]
    },
    {
        enunciado: "¿Qué es el 'cyanotipo'?",
        correcta: "Técnica antigua de impresión fotográfica (Anna Atkins) que produce imágenes de color azul de Prusia usando sales de hierro y luz UV",
        incorrectas: [
            "Impresión en color cian de impresora",
            "Fotografía de planos arquitectónicos en negro"
        ]
    },
    {
        enunciado: "¿Qué es el 'latitud de exposición'?",
        correcta: "El margen de error en la exposición que permite una película o sensor manteniendo una calidad de imagen aceptable",
        incorrectas: [
            "La latitud geográfica donde se hizo la foto",
            "El ancho de la película"
        ]
    },
    {
        enunciado: "¿Qué es el sistema de zonas (Ansel Adams)?",
        correcta: "Método técnico para controlar la exposición y el revelado, visualizando la escena en 10 zonas de gris (del negro puro al blanco puro)",
        incorrectas: [
            "Dividir el paisaje en zonas para encuadrar",
            "Sistema de enfoque por zonas automáticas"
        ]
    },
    {
        enunciado: "¿Qué es el 'píxel'?",
        correcta: "La unidad mínima de información de color que compone una imagen digital (Picture Element)",
        incorrectas: [
            "El grano de la película química",
            "El sensor de la cámara"
        ]
    },
    {
        enunciado: "¿Qué es la 'aberración cromática'?",
        correcta: "Defecto óptico donde la lente no enfoca todos los colores en el mismo punto, creando halos de color (púrpura/verde) en bordes contrastados",
        incorrectas: [
            "Usar colores muy saturados y feos",
            "Un filtro artístico de colores raros"
        ]
    },
    {
        enunciado: "¿Qué es el 'parlaje' en cámaras telemétricas o compactas?",
        correcta: "El error de encuadre debido a que el visor y el objetivo están separados, viendo imágenes ligeramente distintas (diferencia en macro)",
        incorrectas: [
            "Cuando la cámara habla",
            "Un tipo de enfoque automático"
        ]
    },
    {
        enunciado: "¿Qué es el 'bracketing' u horquillado?",
        correcta: "Tomar varias fotos seguidas de la misma escena con diferentes ajustes de exposición (clara, normal, oscura) para asegurar una correcta",
        incorrectas: [
            "Usar un trípode (bracket)",
            "Encuadrar con los brazos"
        ]
    },
    {
        enunciado: "¿Qué es el sensor 'Full Frame'?",
        correcta: "Sensor digital cuyo tamaño equivale al fotograma de película de 35mm tradicional (36x24mm)",
        incorrectas: [
            "Sensor que graba video a pantalla completa",
            "Sensor cuadrado de formato medio"
        ]
    },
    {
        enunciado: "¿Qué es el 'HDR' (High Dynamic Range)?",
        correcta: "Técnica que combina varias exposiciones de la misma escena para capturar un rango de luces y sombras mayor al que permite una sola toma",
        incorrectas: [
            "Alta Definición de resolución",
            "Grabación de video rápida"
        ]
    },
    {
        enunciado: "¿Qué es el 'trepidación'?",
        correcta: "Falta de nitidez causada por el movimiento involuntario de la cámara durante la exposición (foto movida)",
        incorrectas: [
            "Miedo escénico del fotógrafo",
            "Fallo de enfoque del objetivo"
        ]
    },
    {
        enunciado: "¿Qué es la 'luz dura'?",
        correcta: "Iluminación directa y puntual que produce sombras negras muy definidas y alto contraste (ej. sol de mediodía, flash directo)",
        incorrectas: [
            "Luz de una bombilla muy resistente",
            "Luz difusa de un día nublado"
        ]
    },
    {
        enunciado: "¿Qué es el 'factor de recorte' (crop factor)?",
        correcta: "La relación entre el tamaño de un sensor pequeño (APS-C) y el Full Frame, que hace que los objetivos parezcan tener mayor focal",
        incorrectas: [
            "Recortar la foto en el ordenador",
            "El zoom digital"
        ]
    },
    {
        enunciado: "¿Qué es la 'distorsión de barril'?",
        correcta: "Deformación geométrica típica de los grandes angulares donde las líneas rectas se curvan hacia afuera en los bordes",
        incorrectas: [
            "Hacer fotos a barriles",
            "Imagen borrosa en el centro"
        ]
    },
    {
        enunciado: "¿Qué es el 'filtro polarizador'?",
        correcta: "Filtro que elimina reflejos no metálicos (agua, cristal) y satura el azul del cielo al bloquear luz polarizada determinada",
        incorrectas: [
            "Filtro para hacer fotos en el polo norte",
            "Filtro que convierte la foto a blanco y negro"
        ]
    },
    {
        enunciado: "¿Qué es el 'panning' o barrido?",
        correcta: "Seguir con la cámara a un sujeto en movimiento durante la exposición, logrando que el sujeto salga nítido y el fondo movido/rayado",
        incorrectas: [
            "Mover la cámara para buscar encuadre",
            "Limpiar la lente con un paño"
        ]
    }
];
