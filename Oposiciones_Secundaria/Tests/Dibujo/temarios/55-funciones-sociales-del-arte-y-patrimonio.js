var PREGUNTAS = [
    {
        enunciado: "¿Cuál fue la función principal del arte en el Paleolítico?",
        correcta: "Mágico-ritual, propiciatoria de la caza y la fertilidad (magia simpática)",
        incorrectas: [
            "Puramente estética y decorativa de las viviendas",
            "Documental para registrar la historia de la tribu"
        ]
    },
    {
        enunciado: "¿Qué función cumplía fundamentalmente el arte egipcio en las tumbas?",
        correcta: "Función religiosa de garantía de inmortalidad (morada del Ka) y soporte para la vida en el más allá",
        incorrectas: [
            "Función propagandística dirigida al pueblo llano (que no entraba en las tumbas)",
            "Exposición pública de la riqueza del faraón"
        ]
    },
    {
        enunciado: "¿Qué es la función 'áulica' del arte?",
        correcta: "Exaltación del poder político y la monarquía (propaganda imperial, retratos reales, palacios)",
        incorrectas: [
            "Función relacionada con el culto a los dioses domésticos",
            "Función educativa para las clases bajas"
        ]
    },
    {
        enunciado: "¿Qué función didáctica tuvo el arte románico ('Biblia en piedra')?",
        correcta: "Adoctrinar y enseñar los dogmas sagrados a una población mayoritariamente analfabeta",
        incorrectas: [
            "Demostrar la habilidad técnica de los canteros",
            "Decorar las ciudades para atraer mercaderes"
        ]
    },
    {
        enunciado: "¿Qué es el 'Euergetismo' en el mundo antiguo?",
        correcta: "Práctica de los ricos y gobernantes de financiar obras públicas y fiestas para ganar favor y prestigio social",
        incorrectas: [
            "Una escuela filosófica griega sobre la estética",
            "La prohibición de imágenes religiosas"
        ]
    },
    {
        enunciado: "¿Qué cambio de función artística se produce en el Renacimiento?",
        correcta: "Aparece el coleccionismo privado y la autonomía estética, aunque persiste el mecenazgo religioso y político",
        incorrectas: [
            "El arte deja de tener contenido religioso por completo",
            "Se prohíbe el arte profano"
        ]
    },
    {
        enunciado: "¿Qué es el 'Patrimonio Cultural' según la UNESCO?",
        correcta: "El conjunto de bienes materiales e inmateriales que, por su valor histórico, artístico o científico, deben ser protegidos para las generaciones futuras",
        incorrectas: [
            "Únicamente los monumentos y edificios antiguos",
            "Las reservas naturales y parques nacionales exclusivamente"
        ]
    },
    {
        enunciado: "¿Qué son los 'Bienes de Interés Cultural' (BIC) en España?",
        correcta: "La máxima categoría de protección legal para bienes del patrimonio histórico español",
        incorrectas: [
            "Bienes que se pueden vender libremente al extranjero",
            "Obras de arte contemporáneo de autores vivos"
        ]
    },
    {
        enunciado: "¿Qué es la 'Conservación Preventiva'?",
        correcta: "Actuaciones sobre el entorno de la obra (control de luz, humedad, temperatura) para evitar su deterioro sin intervenir directamente en ella",
        incorrectas: [
            "La restauración directa de las partes dañadas de la obra",
            "La realización de copias de seguridad para sustituir al original"
        ]
    },
    {
        enunciado: "¿Qué es el 'Expolio'?",
        correcta: "La incautación, robo o destrucción ilícita de bienes culturales, descontextualizándolos",
        incorrectas: [
            "La venta legal de obras de arte en subastas",
            "La exposición pública de obras privadas"
        ]
    },
    {
        enunciado: "¿Qué función tiene el Museo contemporáneo según el ICOM?",
        correcta: "Adquisición, conservación, investigación, comunicación y exposición del patrimonio con fines de estudio, educación y deleite",
        incorrectas: [
            "Ser un almacén de objetos antiguos para su venta",
            "Servir exclusivamente como atracción turística rentable"
        ]
    },
    {
        enunciado: "¿Qué es el 'Patrimonio Inmaterial'?",
        correcta: "Usos, representaciones, expresiones, conocimientos y técnicas (tradiciones orales, artes del espectáculo, rituales)",
        incorrectas: [
            "Los archivos digitales y bases de datos",
            "Las ideas abstractas no registradas"
        ]
    },
    {
        enunciado: "¿Qué es la 'Iconoclasia'?",
        correcta: "Rechazo y destrucción de imágenes sagradas por considerarlas idólatras (ej. Bizancio, Reforma Protestante)",
        incorrectas: [
            "La adoración excesiva de las imágenes",
            "La pintura de iconos sobre madera"
        ]
    },
    {
        enunciado: "¿Qué es la 'Damnatio Memoriae'?",
        correcta: "Condena romana consistente en eliminar todo rastro (imágenes, inscripciones) de un personaje para borrarlo de la historia",
        incorrectas: [
            "La pérdida de memoria histórica de una sociedad",
            "Un monumento funerario en memoria de los caídos"
        ]
    },
    {
        enunciado: "¿Qué función cumple el arte de vanguardia (S. XX)?",
        correcta: "Cuestionamiento de la propia institución arte, experimentación formal y crítica social/política",
        incorrectas: [
            "Mímesis o imitación fiel de la naturaleza",
            "Decoración de interiores burgueses exclusivamente"
        ]
    },
    {
        enunciado: "¿Qué es el 'Patrimonio Industrial'?",
        correcta: "Restos de la cultura industrial (fábricas, maquinaria, minas) que poseen valor histórico, tecnológico o arquitectónico",
        incorrectas: [
            "Los productos fabricados en serie actualmente",
            "Las patentes industriales vigentes"
        ]
    },
    {
        enunciado: "¿La 'Carta de Venecia' (1964) establece criterios sobre...",
        correcta: "La conservación y restauración de monumentos y sitios, priorizando la autenticidad y diferenciación de partes nuevas",
        incorrectas: [
            "La regulación del mercado del arte internacional",
            "Los derechos de autor de los artistas plásticos"
        ]
    },
    {
        enunciado: "¿Qué es el '1,5% Cultural' (anteriormente 1%)?",
        correcta: "Porcentaje del presupuesto de obras públicas del Estado que debe destinarse a trabajos de conservación del patrimonio",
        incorrectas: [
            "Impuesto sobre la venta de entradas de cine",
            "Comisión que cobran las galerías de arte"
        ]
    },
    {
        enunciado: "¿Qué es la 'Museología'?",
        correcta: "Ciencia que estudia la historia, rol social y sistemas de funcionamiento del museo",
        incorrectas: [
            "La técnica práctica de montar exposiciones (Museografía)",
            "El estudio de las musas griegas"
        ]
    },
    {
        enunciado: "¿Qué es el 'Mercado del Arte'?",
        correcta: "Sistema de circulación comercial de obras (galerías, ferias, subastas) que asigna valor económico al arte",
        incorrectas: [
            "Tiendas de suministros para pintores",
            "El intercambio de obras entre museos públicos"
        ]
    },
    {
        enunciado: "¿Qué es la función 'Estética'?",
        correcta: "Valoración de la obra por su belleza, armonía o capacidad de generar experiencia sensible, más allá de utilidades prácticas",
        incorrectas: [
            "Uso de la obra para decorar espacios públicos",
            "Valor de la obra como inversión financiera"
        ]
    },
    {
        enunciado: "¿Qué es el 'Arte Efímero'?",
        correcta: "Obras concebidas para durar un tiempo limitado (instalaciones, performances, arquitecturas festivas barrocas)",
        incorrectas: [
            "Arte que ha sido destruido por accidente",
            "Arte de mala calidad material"
        ]
    },
    {
        enunciado: "¿Qué es la 'Puesta en Valor'?",
        correcta: "Proceso de adecuación de un bien patrimonial para que pueda ser visitado, comprendido y disfrutado socialmente",
        incorrectas: [
            "La tasación económica de una obra para su venta",
            "La subasta pública de bienes del estado"
        ]
    },
    {
        enunciado: "¿Qué es un 'Bien Mueble' en patrimonio?",
        correcta: "Objeto susceptible de ser trasladado (pinturas, esculturas, libros, orfebrería)",
        incorrectas: [
            "Un edificio o monumento anclado al suelo",
            "El mobiliario de una oficina moderna"
        ]
    },
    {
        enunciado: "¿Qué es la 'Arqueología de Gestión' o preventiva?",
        correcta: "Intervenciones arqueológicas realizadas antes o durante obras de construcción para documentar o proteger restos afectados",
        incorrectas: [
            "La gestión administrativa de los museos arqueológicos",
            "La búsqueda de tesoros para venta privada"
        ]
    },
    {
        enunciado: "¿Qué es el 'Patrimonio Etnológico'?",
        correcta: "Lugares y bienes muebles/inmuebles asociados a las formas de vida, cultura y costumbres tradicionales de un pueblo",
        incorrectas: [
            "El patrimonio genético de una población",
            "Las obras de arte de civilizaciones extraterrestres"
        ]
    },
    {
        enunciado: "¿Qué es la 'Gentrificación' en relación al patrimonio urbano?",
        correcta: "Proceso de transformación de barrios históricos que desplaza a la población tradicional por clases más acomodadas o turistas",
        incorrectas: [
            "La restauración fiel de los edificios antiguos",
            "La degradación física de los monumentos"
        ]
    },
    {
        enunciado: "¿Qué es el 'Turismo Cultural'?",
        correcta: "Desplazamiento motivado por el deseo de conocer y disfrutar el arte, historia y cultura de un lugar",
        incorrectas: [
            "Turismo de sol y playa exclusivamente",
            "Viajes de negocios internacionales"
        ]
    },
    {
        enunciado: "¿Qué es la 'interpretación del patrimonio'?",
        correcta: "Arte de comunicar el significado y valor del patrimonio al público no especializado (paneles, guías, realidad aumentada)",
        incorrectas: [
            "La traducción de textos antiguos",
            "La opinión subjetiva del crítico de arte"
        ]
    },
    {
        enunciado: "¿Qué es el 'Patrimonio de la Humanidad'?",
        correcta: "Título conferido por la UNESCO a sitios de valor universal excepcional",
        incorrectas: [
            "Propiedad de todos los seres humanos por igual",
            "Bienes sin dueño legal"
        ]
    },
    {
        enunciado: "¿En el siglo XIX, el museo asume una función de...",
        correcta: "Templo del saber y consolidación de la identidad nacional (Museo Nacional)",
        incorrectas: [
            "Centro comercial de objetos de lujo",
            "Lugar de culto religioso exclusivamente"
        ]
    },
    {
        enunciado: "¿Qué es el 'Mecenazgo'?",
        correcta: "Patrocinio y protección de artistas por parte de personas o instituciones con recursos",
        incorrectas: [
            "Compraventa de obras en mercadillos",
            "Robo de obras de arte"
        ]
    },
    {
        enunciado: "¿Qué es la 'falsificación' artística?",
        correcta: "Creación fraudulenta que imita estilo/firma para engañar sobre su autoría/autenticidad",
        incorrectas: [
            "Una copia de estudio declarada como tal",
            "Una restauración agresiva"
        ]
    },
    {
        enunciado: "¿Qué es el 'Expresionismo' (función)?",
        correcta: "Prioriza la expresión subjetiva de emociones (angustia, pasión) sobre la representación objetiva",
        incorrectas: [
            "Impresión visual de la luz",
            "Geometrización analítica"
        ]
    },
    {
        enunciado: "¿Qué son los 'Derechos Morales' del autor?",
        correcta: "Derechos irrenunciables (paternidad de la obra, integridad) que persisten aunque se venda la obra física",
        incorrectas: [
            "El precio de venta de la obra",
            "Los impuestos sobre el arte"
        ]
    },
    {
        enunciado: "¿Qué es la 'reversibilidad' en restauración?",
        correcta: "Principio que exige que los materiales/técnicas usados puedan retirarse en el futuro sin dañar el original",
        incorrectas: [
            "Poder dar la vuelta al cuadro",
            "Rehacer la obra como nueva"
        ]
    }
];
