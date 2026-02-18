var PREGUNTAS = [
    {
        enunciado: "¿Qué es un 'grabado'?",
        correcta: "Técnica de impresión que consiste en dibujar una imagen sobre una matriz rígida (metal, madera, piedra) para luego transferirla al papel mediante presión",
        incorrectas: [
            "Dibujo realizado directamente sobre papel con tinta indeleble",
            "Técnica de pintura mural sobre yeso fresco"
        ]
    },
    {
        enunciado: "¿Qué diferencia principal existe entre el grabado en 'hueco' y en 'relieve'?",
        correcta: "En el hueco (calcografía) la tinta se aloja en las incisiones; en el relieve (xilografía) la tinta se deposita en la superficie no tallada",
        incorrectas: [
            "En el hueco se usa madera y en el relieve metal",
            "El hueco es una técnica planográfica y el relieve es serigrafía"
        ]
    },
    {
        enunciado: "¿Qué es la 'xilografía'?",
        correcta: "Técnica de grabado en relieve donde la matriz es de madera; se tallan las zonas que quedarán blancas y se entinta la superficie elevada",
        incorrectas: [
            "Grabado sobre piedra caliza pulida",
            "Técnica que utiliza ácido para morder una plancha de cobre"
        ]
    },
    {
        enunciado: "¿Qué es la 'calcografía'?",
        correcta: "Término genérico para el grabado en hueco sobre metal (cobre, zinc), donde la tinta se deposita en los surcos y requiere un tórculo para estamparse",
        incorrectas: [
            "Sistema de calco de dibujos mediante papel carbón",
            "Impresión mediante plantillas o estarcido"
        ]
    },
    {
        enunciado: "¿Qué es el 'aguafuerte' (etching)?",
        correcta: "Técnica indirecta de grabado en metal donde el ácido nítrico muerde la plancha en las zonas donde se ha retirado el barniz protector con una punta",
        incorrectas: [
            "Grabado directo con buril sobre la plancha sin usar ácidos",
            "Técnica de acuarela muy diluida sobre papel"
        ]
    },
    {
        enunciado: "¿Qué es la 'punta seca'?",
        correcta: "Técnica directa de grabado en metal donde se raya la plancha con un punzón de acero, levantando rebabas que retienen mucha tinta y dan un trazo aterciopelado",
        incorrectas: [
            "Dibujo con lápiz de grafito duro sobre papel rugoso",
            "Uso de ácido puro sin diluir en agua para morder la plancha"
        ]
    },
    {
        enunciado: "¿Qué es la 'litografía'?",
        correcta: "Técnica planográfica basada en la repulsión entre agua y grasa; se dibuja con lápiz graso sobre piedra caliza y se entinta la zona grasa mientras la húmeda rechaza la tinta",
        incorrectas: [
            "Grabado en relieve sobre planchas de linóleo",
            "Impresión digital mediante inyección de tinta"
        ]
    },
    {
        enunciado: "¿Qué es la 'serigrafía'?",
        correcta: "Técnica de impresión permeográfica que usa una malla tensada donde se bloquean zonas; la tinta pasa a través de las áreas abiertas mediante una racleta",
        incorrectas: [
            "Impresión de sellos de goma manuales",
            "Grabado al humo sobre plancha de cobre"
        ]
    },
    {
        enunciado: "¿Qué es el 'buril'?",
        correcta: "Herramienta de acero con punta en forma de V o rombo, usada para tallar surcos profundos y limpios directamente en el metal (talla dulce)",
        incorrectas: [
            "Rodillo de caucho para entintar la matriz",
            "Piedra pómez para pulir la superficie de la plancha"
        ]
    },
    {
        enunciado: "¿Qué es la 'manera negra' o mezzotinta?",
        correcta: "Técnica tonal de grabado donde se graneada toda la plancha para que imprima negro y luego se sacan las luces bruñendo y aplanando el grano",
        incorrectas: [
            "Imprimir con tinta negra sobre papel negro",
            "Dibujar siluetas recortadas en papel oscuro"
        ]
    },
    {
        enunciado: "¿Qué es el 'aguatinta'?",
        correcta: "Técnica de grabado al ácido que permite crear manchas planas y degradados tonales mediante el uso de resina en polvo (colofonia) espolvoreada y fundida sobre la plancha",
        incorrectas: [
            "Pintar con tinta china diluida en agua",
            "Sumergir el papel en agua antes de imprimir"
        ]
    },
    {
        enunciado: "¿Qué es un 'tórculo'?",
        correcta: "Prensa utilizada para estampar grabados calcográficos, compuesta por dos rodillos que ejercen gran presión sobre la platina donde van la plancha y el papel",
        incorrectas: [
            "Herramienta para tallar madera en xilografía",
            "Mesa de luz para calcar dibujos"
        ]
    },
    {
        enunciado: "¿Qué es una 'prueba de artista' (P/A)?",
        correcta: "Estampaciones realizadas por el artista para su colección personal o fuera de la numeración comercial de la serie (generalmente el 10% de la edición)",
        incorrectas: [
            "Bocetos previos hechos a lápiz en el cuaderno",
            "Copias defectuosas que se descartan"
        ]
    },
    {
        enunciado: "¿Qué es el 'linograbado' (linóleo)?",
        correcta: "Variante moderna de la xilografía que utiliza planchas de linóleo (material sintético blando) más fáciles de tallar y sin veta",
        incorrectas: [
            "Grabado sobre telas de lino",
            "Dibujo con líneas continuas sin levantar la mano"
        ]
    },
    {
        enunciado: "¿Qué es el 'barniz blando'?",
        correcta: "Técnica de grabado donde se aplica un barniz pegajoso sobre la plancha y se texturiza presionando objetos (telas, hojas) o dibujando sobre papel apoyado encima",
        incorrectas: [
            "Barniz final para proteger cuadros al óleo",
            "Técnica de pintura con cera derretida"
        ]
    },
    {
        enunciado: "¿Qué es la 'rebaba' en grabado a punta seca?",
        correcta: "El metal levantado a los lados del surco por la acción del punzón; retiene tinta y da un aspecto difuso y rico, pero se desgasta rápido al estampar",
        incorrectas: [
            "El borde irregular del papel hecho a mano",
            "El exceso de tinta que mancha los márgenes"
        ]
    },
    {
        enunciado: "¿Qué es el 'biselado' de la plancha?",
        correcta: "Limar los bordes cortantes de la plancha metálica en ángulo para evitar que rompan el papel o el fieltro bajo la presión del tórculo",
        incorrectas: [
            "Dar brillo a la superficie de la plancha",
            "Tallar el dibujo en el borde de la matriz"
        ]
    },
    {
        enunciado: "¿Qué es el 'entintado a la poupée'?",
        correcta: "Método para entintar una misma plancha calcográfica con varios colores a la vez, aplicándolos en zonas distintas con muñequillas de trapo",
        incorrectas: [
            "Entintar usando una muñeca de porcelana",
            "Mezclar la tinta con polvo de talco"
        ]
    },
    {
        enunciado: "¿Qué es la 'monotipia'?",
        correcta: "Técnica híbrida entre pintura y grabado que produce una impresión única (no seriada) pintando sobre una superficie lisa y estampándola fresca",
        incorrectas: [
            "Imprimir con un solo tipo de letra",
            "Grabado realizado con una sola línea continua"
        ]
    },
    {
        enunciado: "¿Qué es el 'fotograbado'?",
        correcta: "Proceso que utiliza emulsiones fotosensibles para transferir imágenes fotográficas a la matriz de grabado y procesarlas químicamente",
        incorrectas: [
            "Hacer fotos a los grabados terminados",
            "Grabar video con cámara de fotos"
        ]
    },
    {
        enunciado: "¿Qué es la 'numeración' de una serie (ej. 15/50)?",
        correcta: "Indica el número de ejemplar (15) y el tiraje total de la edición limitada (50), garantizando la exclusividad de la obra gráfica",
        incorrectas: [
            "El precio del grabado en euros",
            "La fecha de realización (día/año)"
        ]
    },
    {
        enunciado: "¿Qué es el 'offset' artístico?",
        correcta: "Derivado industrial de la litografía donde la imagen pasa de la plancha a un rodillo de goma y de ahí al papel; permite grandes tiradas",
        incorrectas: [
            "Imprimir fuera del centro de la hoja",
            "Técnica de grabado digital casero"
        ]
    },
    {
        enunciado: "¿Qué es el 'gofrado'?",
        correcta: "Estampación en seco (sin tinta) de una matriz con relieve profundo, creando una imagen puramente volumétrica y táctil en el papel",
        incorrectas: [
            "Tipo de papel ondulado para embalaje",
            "Manchar el papel de grasa accidentalmente"
        ]
    },
    {
        enunciado: "¿Qué es la 'colofonia'?",
        correcta: "Resina en polvo utilizada en la técnica del aguatinta; se funde sobre la plancha para crear un granulado resistente al ácido",
        incorrectas: [
            "El texto final de un libro impreso",
            "Un pigmento rojo mineral"
        ]
    },
    {
        enunciado: "¿Qué es el 'mordido' en grabado?",
        correcta: "La acción corrosiva del ácido sobre las partes expuestas de la plancha metálica, creando los surcos que alojarán la tinta",
        incorrectas: [
            "El defecto en el papel por exceso de presión",
            "Sujetar la plancha con pinzas dentadas"
        ]
    },
    {
        enunciado: "¿Qué es el papel 'barbas'?",
        correcta: "Papel de grabado de alta calidad (algodón) que presenta bordes irregulares naturales al no ser guillotinado industrialmente",
        incorrectas: [
            "Papel hecho con pelos de brocha",
            "Papel muy viejo y amarillento"
        ]
    },
    {
        enunciado: "¿Qué es la 'tarlatana'?",
        correcta: "Tejido de algodón almidonado tipo gasa usado para limpiar y retirar el exceso de tinta de la superficie de la plancha calcográfica",
        incorrectas: [
            "Una danza italiana",
            "La manta de fieltro del tórculo"
        ]
    },
    {
        enunciado: "¿Qué es el 'berceau' o graneador?",
        correcta: "Herramienta con filo dentado curvo usada en la 'manera negra' para granear (picar) uniformemente toda la superficie de la plancha",
        incorrectas: [
            "La cuna donde se seca el papel",
            "Un pincel de cerdas muy suaves"
        ]
    },
    {
        enunciado: "¿Qué es el 'registro' en la estampación a color?",
        correcta: "El sistema de marcas o guías que asegura que las diferentes planchas de color se superpongan en la posición exacta sobre el papel",
        incorrectas: [
            "Anotar el número de copias vendidas",
            "La firma del autor en el registro civil"
        ]
    },
    {
        enunciado: "¿Qué es la 'racleta' en serigrafía?",
        correcta: "Espátula de goma con mango usada para arrastrar y presionar la tinta a través de la malla de la pantalla",
        incorrectas: [
            "Herramienta para tensar el bastidor",
            "El marco de madera de la pantalla"
        ]
    },
    {
        enunciado: "¿Qué es el 'bloque de madera a la testa' (wood engraving)?",
        correcta: "Xilografía realizada sobre el corte transversal del tronco (anillos), permitiendo un grabado mucho más fino y detallado que a la fibra",
        incorrectas: [
            "Golpear la madera con la cabeza",
            "Grabar en madera blanda de chopo"
        ]
    },
    {
        enunciado: "¿Qué es el 'gouge' o gubia?",
        correcta: "Herramienta con hoja de acero curvada (en U o V) usada para vaciar la madera o linóleo en el grabado en relieve",
        incorrectas: [
            "Un tipo de barniz protector",
            "La tinta usada en xilografía"
        ]
    },
    {
        enunciado: "¿Qué es la 'emulsión fotosensible' en serigrafía?",
        correcta: "Líquido que se aplica a la pantalla y endurece con la luz; permite crear la plantilla exponiendo un fotolito (las zonas negras quedan solubles)",
        incorrectas: [
            "Una crema para proteger las manos",
            "La tinta especial que brilla en la oscuridad"
        ]
    },
    {
        enunciado: "¿Qué es el 'ácido nítrico'?",
        correcta: "El mordiente tradicionalmente usado para grabar planchas de zinc y cobre (aunque el cloruro férrico es más seguro)",
        incorrectas: [
            "Líquido para limpiar los pinceles",
            "Un tipo de tinta muy ácida"
        ]
    },
    {
        enunciado: "¿Qué es la 'iluminación' de un grabado antiguo?",
        correcta: "El coloreado manual con acuarela o témpera de una estampa que originalmente fue impresa solo en blanco y negro",
        incorrectas: [
            "Ponerle luz al marco",
            "Proyectar luz sobre el grabado al exponerlo"
        ]
    },
    {
        enunciado: "¿Qué es el 'BAT' (Bon à Tirer)?",
        correcta: "La prueba final aprobada por el artista que sirve de modelo de referencia para que el estampador realice toda la edición",
        incorrectas: [
            "Un murciélago dibujado en el margen",
            "Grabado malo para tirar"
        ]
    },
    {
        enunciado: "¿Qué es el 'mokuhanga'?",
        correcta: "Técnica tradicional japonesa de xilografía que usa tintas al agua y cepillos (baren) en lugar de prensas mecánicas",
        incorrectas: [
            "Un tipo de papel de arroz grueso",
            "Grabado en metal con martillo"
        ]
    },
    {
        enunciado: "¿Qué es el 'craquelado' en el barniz?",
        correcta: "Defecto o efecto buscado donde el barniz protector se rompe, permitiendo que el ácido cree líneas erráticas tipo tela de araña",
        incorrectas: [
            "El sonido que hace la plancha al romperse",
            "Usar barniz de mala calidad"
        ]
    },
    {
        enunciado: "¿Qué es la 'estampa'?",
        correcta: "El soporte (generalmente papel) que ha recibido la imagen impresa desde la matriz entintada; el resultado final de la obra",
        incorrectas: [
            "La matriz metálica original",
            "Una pegatina o cromo adhesivo"
        ]
    },
    {
        enunciado: "¿Qué es el 'carborundo' en grabado colalográfico?",
        correcta: "Polvo de carburo de silicio que se adhiere a la plancha para crear texturas arenosas que retienen mucha tinta",
        incorrectas: [
            "Un tipo de carbón para dibujar",
            "Pegamento industrial de secado rápido"
        ]
    }
];
