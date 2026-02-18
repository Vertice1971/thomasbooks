var PREGUNTAS = [
    {
        enunciado: "¿Qué significa el término 'Renacimiento' culturalmente?",
        correcta: "La recuperación consciente de la antigüedad clásica (Grecia y Roma) como modelo de perfección y el paso al antropocentrismo",
        incorrectas: [
            "El nacimiento de una nueva religión",
            "La vuelta al arte medieval gótico"
        ]
    },
    {
        enunciado: "¿Qué es el 'Humanismo'?",
        correcta: "Corriente intelectual que sitúa al ser humano y su razón en el centro del universo (antropocentrismo), valorando el conocimiento y la dignidad humana",
        incorrectas: [
            "La creencia de que solo los humanos tienen alma",
            "Una doctrina política sobre la caridad"
        ]
    },
    {
        enunciado: "¿Qué aporte fundamental hace Brunelleschi a la arquitectura?",
        correcta: "La invención (o sistematización) de la perspectiva lineal cónica y la recuperación de órdenes clásicos con rigor matemático (ej. Cúpula de Florencia)",
        incorrectas: [
            "La invención del arco apuntado",
            "El uso del hormigón armado"
        ]
    },
    {
        enunciado: "¿Qué diferencia la escultura de Donatello (ej. David) de la medieval?",
        correcta: "La recuperación del desnudo exento en bronce, el contrapposto clásico y la valoración de la belleza física como reflejo de la espiritual",
        incorrectas: [
            "El uso exclusivo de madera policromada sangrante",
            "La rigidez y falta de movimiento"
        ]
    },
    {
        enunciado: "¿Qué es la 'Perspectiva Aérea' (Leonardo da Vinci)?",
        correcta: "Técnica (sfumato) que simula la profundidad difuminando los contornos y enfriando los colores de los objetos lejanos (atmósfera)",
        incorrectas: [
            "Dibujar los objetos desde un avión",
            "Usar solo líneas geométricas para la profundidad"
        ]
    },
    {
        enunciado: "¿Qué caracteriza al 'Cinquecento' (S. XVI) frente al Quattrocento?",
        correcta: "La búsqueda de la grandiosidad monumental, el equilibrio clásico perfecto y la superación del modelo antiguo (Roma capital del arte)",
        incorrectas: [
            "La vuelta al estilo gótico decorativo",
            "El abandono de la figura humana"
        ]
    },
    {
        enunciado: "¿Qué es el 'Mecenazgo' en el Renacimiento (Médici, Papas)?",
        correcta: "Protección y financiación de artistas por prestigio político y social, convirtiendo el arte en instrumento de poder y propaganda culta",
        incorrectas: [
            "La compra de arte por internet",
            "La prohibición de obras paganas"
        ]
    },
    {
        enunciado: "¿Qué es el 'Manierismo'?",
        correcta: "Estilo final del Renacimiento que rompe el equilibrio clásico (anti-clásico), alargando figuras, usando colores ácidos y composiciones inestables",
        incorrectas: [
            "El estilo de pintar con las manos",
            "Un estilo realista fotográfico"
        ]
    },
    {
        enunciado: "¿Qué es la 'Terribilità' de Miguel Ángel?",
        correcta: "La fuerza expresiva, tensión dramática y potencia titánica contenida en sus figuras (ej. Moisés, Esclavos)",
        incorrectas: [
            "Que esculpía muy mal",
            "El miedo que daba su carácter"
        ]
    },
    {
        enunciado: "¿Qué novedad introduce la pintura al óleo (Van Eyck, luego Italia)?",
        correcta: "Mayor luminosidad, posibilidad de veladuras, correcciones y gran detallismo frente al temple de huevo",
        incorrectas: [
            "Que se seca más rápido",
            "Que es más barata"
        ]
    },
    {
        enunciado: "¿Qué es el 'Neoplatonismo' florentino (Ficino)?",
        correcta: "Filosofía que concilia a Platón con el Cristianismo: la belleza física es un camino para ascender a Dios (Venus celeste)",
        incorrectas: [
            "Una nueva forma de hacer platos",
            "El rechazo total de la religión"
        ]
    },
    {
        enunciado: "¿Qué es la 'Planta Centralizada' (ideal renacentista)?",
        correcta: "Iglesias de planta circular o cruz griega (simetría perfecta), símbolo de la perfección divina y el universo (ej. San Pietro in Montorio)",
        incorrectas: [
            "Planta basilical alargada medieval",
            "Planta irregular orgánica"
        ]
    },
    {
        enunciado: "¿Qué obra inicia el Renacimiento pictórico (Masaccio)?",
        correcta: "La Trinidad (Santa Maria Novella), por el uso magistral de la perspectiva lineal arquitectónica y el volumen de las figuras",
        incorrectas: [
            "El Jardín de las Delicias",
            "Los frescos románicos"
        ]
    },
    {
        enunciado: "¿Qué es el 'Sfumato'?",
        correcta: "Difuminado suave de los contornos para integrar la figura en el fondo, eliminando la línea dura (Mona Lisa)",
        incorrectas: [
            "Pintura con humo",
            "Dibujo con línea negra gruesa"
        ]
    },
    {
        enunciado: "¿Qué es el 'Grutesco'?",
        correcta: "Motivo decorativo caprichoso (vegetal, animal, fantástico) inspirado en las ruinas romanas (Domus Aurea)",
        incorrectas: [
            "Algo feo y desagradable",
            "Una gruta natural"
        ]
    },
    {
        enunciado: "¿Qué es la 'Villa' renacentista (Palladio)?",
        correcta: "Residencia campestre aristocrática diseñada con principios de simetría y armonía con el paisaje (ej. Villa Rotonda)",
        incorrectas: [
            "Una ciudad pequeña",
            "Una fortaleza militar"
        ]
    },
    {
        enunciado: "¿El 'Tratado de Arquitectura' de Alberti defiende...",
        correcta: "Que la belleza es la armonía de las partes (concinnitas) y no se puede añadir ni quitar nada sin empeorarlo",
        incorrectas: [
            "Que la belleza es subjetiva",
            "Que hay que copiar el gótico"
        ]
    },
    {
        enunciado: "¿Qué es la 'Piedad' del Vaticano (Miguel Ángel)?",
        correcta: "Obra de juventud de belleza idealizada, mármol pulido, composición piramidal y serenidad clásica (Virgen joven)",
        incorrectas: [
            "Obra expresionista y tosca",
            "Escultura de madera policromada"
        ]
    },
    {
        enunciado: "¿Qué es la 'Escuela de Atenas' (Rafael)?",
        correcta: "Fresco que representa la Filosofía (Platón y Aristóteles) en un espacio arquitectónico grandioso, síntesis del saber clásico y cristiano",
        incorrectas: [
            "Una escuela de pintura real",
            "Un paisaje de Grecia"
        ]
    },
    {
        enunciado: "¿Qué caracteriza a la pintura veneciana (Tiziano, Tintoretto)?",
        correcta: "La primacía del color y la luz sobre el dibujo, la pincelada suelta y la sensualidad atmosférica",
        incorrectas: [
            "El dibujo lineal estricto y colores planos",
            "La falta de color"
        ]
    },
    {
        enunciado: "¿Qué es el 'Hombre de Vitruvio'?",
        correcta: "Dibujo de Leonardo que inscribe el cuerpo humano en un cuadrado y un círculo, estudiando sus proporciones ideales",
        incorrectas: [
            "Un retrato de Vitruvio",
            "Un hombre muy fuerte"
        ]
    },
    {
        enunciado: "¿Qué es el 'Palacio renacentista' (ej. Palazzo Rucellai)?",
        correcta: "Edificio urbano de fachada almohadillada ordenada por pisos, cornisa potente y patio interior clásico",
        incorrectas: [
            "Un castillo con foso y almenas",
            "Una torre defensiva"
        ]
    },
    {
        enunciado: "¿Qué es el 'Almohadillado'?",
        correcta: "Labra de la piedra de la fachada dejando las juntas rehundidas para dar sensación de relieve y fuerza (rústico o liso)",
        incorrectas: [
            "Poner almohadas en las ventanas",
            "Pintar la fachada"
        ]
    },
    {
        enunciado: "¿Qué es el 'David' de Miguel Ángel?",
        correcta: "Símbolo de la República de Florencia, coloso de mármol en tensión (momento previo a la acción), anatomía perfecta y 'terribilità'",
        incorrectas: [
            "Una estatua pequeña de bronce",
            "David matando a Goliat (acción)"
        ]
    },
    {
        enunciado: "¿Qué es el 'Plateresco' español?",
        correcta: "Primer Renacimiento español; arquitectura estructuralmente gótica pero decorada con motivos renacentistas muy minuciosos (como platería)",
        incorrectas: [
            "Estilo hecho de plata",
            "Renacimiento puro italiano"
        ]
    },
    {
        enunciado: "¿Qué es el 'Estilo Herreriano' (El Escorial)?",
        correcta: "Renacimiento final español, caracterizado por la desnudez decorativa, la geometría pura, el rigor matemático y la monumentalidad",
        incorrectas: [
            "Estilo muy decorado con hierro",
            "Barroco temprano"
        ]
    },
    {
        enunciado: "¿El 'Juicio Final' de la Capilla Sixtina (Manierismo) muestra...",
        correcta: "Cuerpos hercúleos en movimiento convulso, falta de orden arquitectónico, Cristo juez severo y pesimismo espiritual",
        incorrectas: [
            "Un cielo ordenado y tranquilo",
            "Paisajes bonitos"
        ]
    },
    {
        enunciado: "¿Qué es la 'Perspectiva Lineal'?",
        correcta: "Sistema geométrico matemático para representar el espacio 3D en 2D, donde las líneas paralelas convergen en un punto de fuga único",
        incorrectas: [
            "Dibujar líneas curvas",
            "Adivinar la profundidad a ojo"
        ]
    },
    {
        enunciado: "¿Qué es la 'Tratadística'?",
        correcta: "Literatura teórica (libros de arquitectura, pintura) que difunde las normas y principios del arte renacentista (ej. Vitruvio editado)",
        incorrectas: [
            "Hacer tratos comerciales",
            "Novelas de ficción"
        ]
    },
    {
        enunciado: "¿Qué es un 'Tondo'?",
        correcta: "Obra de arte (pintura o relieve) de formato circular (ej. Tondo Doni)",
        incorrectas: [
            "Una moneda",
            "Un cuadro cuadrado"
        ]
    },
    {
        enunciado: "¿Qué es el 'Stiacciato' (Donatello)?",
        correcta: "Técnica de relieve muy plano ('aplastado') que logra sensación de profundidad atmosférica mediante variaciones milimétricas",
        incorrectas: [
            "Escultura de bulto redondo",
            "Pintura al fresco"
        ]
    },
    {
        enunciado: "¿El Renacimiento supone la ruptura con...",
        correcta: "La tradición medieval gótica (considerada 'bárbara' por Vasari), aunque hay continuidad en muchos aspectos",
        incorrectas: [
            "La tradición clásica",
            "El cristianismo"
        ]
    },
    {
        enunciado: "¿Qué es la 'Venus de Urbino' (Tiziano)?",
        correcta: "Desnudo femenino recostado, sensual y mundano, que establece el canon de belleza erótica veneciana",
        incorrectas: [
            "Una estatua griega",
            "Una virgen vestida"
        ]
    },
    {
        enunciado: "¿Qué es la 'Sacra Conversazione'?",
        correcta: "Tema pictórico donde la Virgin con el Niño está rodeada de santos en un mismo espacio unificado, conversando o en silencio",
        incorrectas: [
            "Un debate teológico",
            "La Anunciación"
        ]
    },
    {
        enunciado: "¿El 'Hombre Universal' (Uomo Universale) es...",
        correcta: "El ideal del humanista: dominar todas las artes y ciencias (ej. Leonardo: pintor, ingeniero, anatomista...)",
        incorrectas: [
            "Un hombre que viaja mucho",
            "Un hombre común"
        ]
    }
];
