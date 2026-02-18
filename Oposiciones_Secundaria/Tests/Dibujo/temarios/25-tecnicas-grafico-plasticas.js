var PREGUNTAS = [
    {
        enunciado: "¿Qué se entiende por 'técnicas gráfico-plásticas'?",
        correcta: "El conjunto de procedimientos, materiales y herramientas utilizados para crear obras de arte visual bidimensional (dibujo, pintura, grabado)",
        incorrectas: [
            "Hacer gráficos de plástico",
            "Técnicas de cirugía estética"
        ]
    },
    {
        enunciado: "¿Qué diferencia básica hay entre técnicas 'secas' y 'húmedas'?",
        correcta: "Las secas (lápiz, carbón, pastel) se aplican directamente sin disolvente; las húmedas (acuarela, óleo, acrílico) requieren un vehículo líquido y secado",
        incorrectas: [
            "Las secas son para el verano y las húmedas para invierno",
            "Las secas son aburridas y las húmedas divertidas"
        ]
    },
    {
        enunciado: "¿Qué es el 'grafito'?",
        correcta: "Un mineral de carbono gris y blando que, mezclado con arcilla, forma la mina de los lápices modernos (la dureza H/B depende de la arcilla)",
        incorrectas: [
            "Una pintura en spray de los grafiteros",
            "Plomo puro tóxico"
        ]
    },
    {
        enunciado: "¿Qué significa la escala de dureza HB en los lápices?",
        correcta: "H (Hard) indica dureza y trazo claro y limpio; B (Black/Bold) indica blandura y trazo oscuro y suave; HB es el intermedio",
        incorrectas: [
            "Hombre y Bestia",
            "High Brightness"
        ]
    },
    {
        enunciado: "¿Qué es el 'carboncillo'?",
        correcta: "Palillos de madera (sauce, viña) carbonizada, usados para encajar y abocetar por su trazo negro intenso, mate y muy fácil de borrar (volátil)",
        incorrectas: [
            "Carbón de barbacoa para pintar",
            "Un lápiz negro graso"
        ]
    },
    {
        enunciado: "¿Qué es la 'sanguina'?",
        correcta: "Una técnica de dibujo seca que utiliza barras de óxido de hierro (hematites) de color rojizo/teja, muy usada en el Renacimiento para retratos y desnudos",
        incorrectas: [
            "Pintar con sangre real",
            "Un tipo de fruta"
        ]
    },
    {
        enunciado: "¿Qué es el 'pastel'?",
        correcta: "Barras de pigmento puro aglutinado con muy poca goma, produciendo colores opacos, aterciopelados y luminosos que no cambian al aplicarse",
        incorrectas: [
            "Un dulce para comer",
            "Pintura mezclada con agua"
        ]
    },
    {
        enunciado: "¿Qué es un 'fijador' en técnicas secas?",
        correcta: "Un barniz pulverizado (spray) que se aplica sobre el dibujo (carboncillo, pastel) para adherir el polvo al papel y evitar que se emborrone",
        incorrectas: [
            "Pegamento de barra",
            "Una persona que mira fijamente"
        ]
    },
    {
        enunciado: "¿Qué es la 'acuarela'?",
        correcta: "Pintura al agua compuesta de pigmentos y goma arábiga, caracterizada por su transparencia (veladuras) y el uso del blanco del papel como luz",
        incorrectas: [
            "Pintura plástica escolar",
            "Pintura al aceite"
        ]
    },
    {
        enunciado: "¿Qué es el 'gouache' o témpera?",
        correcta: "Similar a la acuarela pero opaca (cuerpo), ya que contiene cargas blancas o aglutinantes que cubren el papel, permitiendo correcciones y superposiciones",
        incorrectas: [
            "Una salsa mexicana",
            "Acuarela mal hecha"
        ]
    },
    {
        enunciado: "¿Qué es el 'óleo'?",
        correcta: "Técnica pictórica cuyo aglutinante es un aceite secante (linaza, nuez). Permite gran versatilidad, mezclas suaves, empastes y tarda en secar",
        incorrectas: [
            "Pintar con aceite de cocina",
            "Pintura que huele a oleada"
        ]
    },
    {
        enunciado: "¿Qué es la 'trementina' o aguarrás?",
        correcta: "Un disolvente volátil destilado de la resina de pino, usado para diluir el óleo y limpiar los pinceles",
        incorrectas: [
            "Un tipo de menta",
            "Agua sucia"
        ]
    },
    {
        enunciado: "¿Qué es el 'acrílico'?",
        correcta: "Pintura moderna con aglutinante de resina plástica sintética (polímero acrílico). Es soluble en agua pero impermeable e indeleble al secar rápidamente",
        incorrectas: [
            "Plástico derretido",
            "Pintura de uñas"
        ]
    },
    {
        enunciado: "¿Qué es el 'fresco' (affresco)?",
        correcta: "Técnica mural donde se aplica pigmento diluido en agua sobre una capa de cal húmeda, que al secar carbonata y fija el color químicamente",
        incorrectas: [
            "Pintar en una habitación fría",
            "Pintura fresca que mancha"
        ]
    },
    {
        enunciado: "¿Qué es el 'temple' (témpera al huevo)?",
        correcta: "Técnica antigua donde el aglutinante es una emulsión natural (yema de huevo, caseína, goma) y agua. Seca rápido y es muy duradera",
        incorrectas: [
            "Pintar en el templo",
            "Tener buen temple para pintar"
        ]
    },
    {
        enunciado: "¿Qué es un 'aglutinante' o medio?",
        correcta: "La sustancia que mantiene unidas las partículas de pigmento y las adhiere al soporte (aceite, goma, cera, resina)",
        incorrectas: [
            "El pegamento de la tela",
            "Alguien que aglutina gente"
        ]
    },
    {
        enunciado: "¿Qué es el 'encáustica'?",
        correcta: "Técnica antigua (Egipto/Roma) que usa cera de abejas caliente mezclada con pigmentos, aplicada con espátulas o pinceles",
        incorrectas: [
            "Pintar con fuego",
            "Encerrar la pintura"
        ]
    },
    {
        enunciado: "¿Qué es el 'sfumato' leonardesco?",
        correcta: "Técnica de difuminado extremo de los contornos mediante capas finísimas de óleo, eliminando las líneas duras y creando atmósfera",
        incorrectas: [
            "Fumar mientras se pinta",
            "Pintar con humo negro"
        ]
    },
    {
        enunciado: "¿Qué es una 'veladura'?",
        correcta: "Una capa de pintura transparente y fina aplicada sobre otra capa seca opaca, modificando su color sin cubrirlo totalmente (como un filtro)",
        incorrectas: [
            "Poner una vela al cuadro",
            "Tapar el cuadro con una tela"
        ]
    },
    {
        enunciado: "¿Qué es el 'empaste' o impasto?",
        correcta: "Aplicación de pintura espesa y con relieve, dejando visible la huella del pincel o la espátula (ej. Van Gogh)",
        incorrectas: [
            "Un empaste dental",
            "Pegar pasta en el cuadro"
        ]
    },
    {
        enunciado: "¿Qué es el 'frottage' (Max Ernst)?",
        correcta: "Técnica de calco de texturas frotando un lápiz sobre un papel colocado encima de una superficie rugosa (madera, moneda, hoja)",
        incorrectas: [
            "Frotarse las manos",
            "Pintar frutas"
        ]
    },
    {
        enunciado: "¿Qué es el 'collage'?",
        correcta: "Técnica que incorpora fragmentos de materiales reales (papel, tela, fotos) pegados sobre el soporte, introducida por los cubistas",
        incorrectas: [
            "Una marca de pegamento",
            "Copiar un examen"
        ]
    },
    {
        enunciado: "¿Qué es la 'plumilla' y la tinta china?",
        correcta: "Técnica de dibujo a tinta que usa plumillas metálicas de distintos grosores para crear líneas, tramas y puntos de gran precisión y contraste",
        incorrectas: [
            "Escribir con plumas de pájaro",
            "Tinta hecha en China barata"
        ]
    },
    {
        enunciado: "¿Qué es el 'papel torchon' o de grano grueso?",
        correcta: "Un papel de acuarela con textura rugosa muy marcada, que permite efectos de granulado al pasar el pincel rápido",
        incorrectas: [
            "Papel de cocina",
            "Papel de lija"
        ]
    },
    {
        enunciado: "¿Qué es la 'grisalla'?",
        correcta: "Pintura monocroma en tonos grises que imita el relieve escultórico, usada a menudo como base subyacente para aplicar luego color",
        incorrectas: [
            "Una salsa gris",
            "Pintar en días nublados"
        ]
    },
    {
        enunciado: "¿Qué es un 'pincel de marta'?",
        correcta: "Un pincel de pelo natural de alta calidad (y precio), muy suave y elástico, ideal para acuarela y detalles finos",
        incorrectas: [
            "Un pincel para matar martas",
            "Un pincel sintético barato"
        ]
    },
    {
        enunciado: "¿Qué es el 'estarcido' o estencil?",
        correcta: "Técnica de impresión usando una plantilla recortada a través de la cual se aplica la pintura (con brocha o spray)",
        incorrectas: [
            "Estar sido pintado",
            "Tirar pintura al aire"
        ]
    },
    {
        enunciado: "¿Qué es el 'aerógrafo'?",
        correcta: "Herramienta que pulveriza pintura mediante aire comprimido, permitiendo degradados muy suaves, fotorrealismo y acabados sin huella",
        incorrectas: [
            "Un avión que pinta",
            "Escribir en el aire"
        ]
    },
    {
        enunciado: "¿Qué es el 'mixed media' o técnica mixta?",
        correcta: "El uso combinado de varios materiales o técnicas en una misma obra (ej. acuarela y tinta, acrílico y pastel)",
        incorrectas: [
            "Mezclar medios de comunicación",
            "Pintar a medias"
        ]
    },
    {
        enunciado: "¿Qué es la 'goma de borrar moldeable' o de miga de pan?",
        correcta: "Una goma blanda y amasable que no abrasiona el papel y absorbe el grafito o carbón por contacto, usada para abrir luces",
        incorrectas: [
            "Miga de pan real",
            "Una goma para moldes"
        ]
    },
    {
        enunciado: "¿Qué es el 'gesso' o imprimación?",
        correcta: "Una base blanca (mezcla de yeso/tiza y cola) que se aplica al lienzo o tabla para prepararlo, sellarlo y recibir la pintura",
        incorrectas: [
            "Yeso de escayola puro",
            "Un queso italiano"
        ]
    },
    {
        enunciado: "¿Qué es el 'dripping' (Pollock)?",
        correcta: "Técnica de chorrear o gotear pintura directamente desde el bote o palo sobre el lienzo en el suelo, sin tocarlo (Action Painting)",
        incorrectas: [
            "Se te cae la pintura sin querer",
            "Pintar bajo la lluvia"
        ]
    },
    {
        enunciado: "¿Qué es el 'grattage'?",
        correcta: "Técnica surrealista de raspar pintura húmeda o seca sobre un lienzo para crear texturas o revelar colores inferiores",
        incorrectas: [
            "Dar las gracias en francés",
            "Rascarse la espalda"
        ]
    },
    {
        enunciado: "¿Qué es la 'punta de plata'?",
        correcta: "Técnica de dibujo renacentista que usa un estilete de plata sobre papel preparado; el trazo gris se oxida y vuelve sepia con el tiempo",
        incorrectas: [
            "Una bala de plata",
            "Un lápiz plateado"
        ]
    },
    {
        enunciado: "¿Qué es el 'lápiz conté' o barra conté?",
        correcta: "Barra de grafito y arcilla con pigmentos naturales (negro, blanco, sanguina, sepia), más dura y grasa que el carboncillo",
        incorrectas: [
            "Un lápiz que cuenta historias",
            "Un conde francés"
        ]
    },
    {
        enunciado: "¿Qué es el 'aguada' o lavado?",
        correcta: "Diluir tinta china o acuarela en agua para crear tonos grises o de color uniformes o degradados cubriendo grandes áreas",
        incorrectas: [
            "Una fiesta con agua",
            "Tirar agua al cuadro"
        ]
    },
    {
        enunciado: "¿Qué es el soporte 'lienzo'?",
        correcta: "Tela (lino, algodón, cáñamo) tensada sobre un bastidor de madera e imprimada, soporte estándar de la pintura al óleo desde el Renacimiento",
        incorrectas: [
            "Un pañuelo de papel",
            "Una pared de piedra"
        ]
    },
    {
        enunciado: "¿Qué es la 'cera' o crayón?",
        correcta: "Barra de pigmento aglutinado con cera o grasa; repele el agua (técnica de resistencia) y permite esgrafiados",
        incorrectas: [
            "Cera de los oídos",
            "Una vela para iluminar"
        ]
    },
    {
        enunciado: "¿Qué es el 'difumino'?",
        correcta: "Un rollo de papel apretado en forma de lápiz usado para extender y suavizar trazos de carbón o pastel, creando degradados",
        incorrectas: [
            "Humo difuso",
            "Un borrador mágico"
        ]
    },
    {
        enunciado: "¿Qué es el 'guarismo' o reserva?",
        correcta: "Enmascarar zonas del papel (con líquido enmascarador o cinta) para que no se pinten y queden blancas, retirándolo al final",
        incorrectas: [
            "Un número",
            "Esconderse en una guarida"
        ]
    }
];
