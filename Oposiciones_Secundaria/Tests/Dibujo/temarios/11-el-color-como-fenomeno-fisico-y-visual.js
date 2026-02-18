var PREGUNTAS = [
    {
        enunciado: "¿Qué es la luz visible en el espectro electromagnético?",
        correcta: "Una estrecha franja de radiación electromagnética (aprox. 380-750 nm) que el ojo humano es capaz de detectar y procesar como color",
        incorrectas: [
            "Toda la radiación que emite el sol, incluyendo rayos X y gamma",
            "Una sustancia química que viaja por el aire"
        ]
    },
    {
        enunciado: "¿Cuál es la diferencia entre color luz y color pigmento?",
        correcta: "El color luz es aditivo (suma de luces da blanco) y el color pigmento es sustractivo (suma de pigmentos da negro/gris oscuro)",
        incorrectas: [
            "El color luz se usa de día y el pigmento de noche",
            "No hay diferencia, son lo mismo"
        ]
    },
    {
        enunciado: "¿Cuáles son los colores primarios luz (Síntesis Aditiva)?",
        correcta: "Rojo (Red), Verde (Green) y Azul (Blue) - RGB",
        incorrectas: [
            "Cian, Magenta y Amarillo",
            "Rojo, Amarillo y Azul"
        ]
    },
    {
        enunciado: "¿Cuáles son los colores primarios pigmento (Síntesis Sustractiva CMY)?",
        correcta: "Cian, Magenta y Amarillo (Yellow)",
        incorrectas: [
            "Rojo, Verde y Azul",
            "Blanco, Negro y Gris"
        ]
    },
    {
        enunciado: "¿Qué ocurre cuando la luz blanca atraviesa un prisma de cristal (Experimento de Newton)?",
        correcta: "Se refracta y descompone en los colores del espectro visible debido a sus diferentes longitudes de onda (dispersión refractiva)",
        incorrectas: [
            "El prisma se calienta y emite luz propia",
            "La luz desaparece y se convierte en oscuridad"
        ]
    },
    {
        enunciado: "¿Por qué vemos un objeto de color rojo?",
        correcta: "Porque la superficie del objeto absorbe todas las longitudes de onda de la luz excepto las correspondientes al rojo, que son reflejadas hacia nuestros ojos",
        incorrectas: [
            "Porque el objeto emite luz roja propia como uan bombilla",
            "Porque tenemos sangre roja en los ojos"
        ]
    },
    {
        enunciado: "¿Qué es el 'metamerismo'?",
        correcta: "Fenómeno por el cual dos muestras de color parecen idénticas bajo una fuente de luz pero diferentes bajo otra distinta",
        incorrectas: [
            "La transformación de un color en otro con el tiempo",
            "Un estilo de arte abstracto minimalista"
        ]
    },
    {
        enunciado: "¿Qué es el 'tono', 'matiz' o 'hue'?",
        correcta: "La cualidad que define el color en sí mismo y permite clasificarlo (rojo, verde, azul) según su longitud de onda dominante",
        incorrectas: [
            "La cantidad de blanco que tiene un color",
            "La oscuridad de un color"
        ]
    },
    {
        enunciado: "¿Qué es la 'saturación' o 'croma'?",
        correcta: "El grado de pureza o intensidad de un color; un color muy saturado es vivo, uno desaturado es agrisado o pálido",
        incorrectas: [
            "Cuando el papel ya no absorbe más pintura",
            "El brillo que tiene la pintura al óleo"
        ]
    },
    {
        enunciado: "¿Qué es la 'luminosidad', 'valor' o 'brillo'?",
        correcta: "El grado de claridad u oscuridad de un color, es decir, la cantidad de luz que refleja",
        incorrectas: [
            "El precio del tubo de pintura",
            "La transparencia del pigmento"
        ]
    },
    {
        enunciado: "¿Qué son los colores complementarios?",
        correcta: "Son aquellos que se encuentran diametralmente opuestos en el círculo cromático y que, al mezclarse, se neutralizan (gris/negro) y al yuxtaponerse se potencian",
        incorrectas: [
            "Colores que se llevan bien y son parecidos",
            "Colores que se usan para rellenar el fondo"
        ]
    },
    {
        enunciado: "¿Qué células de la retina son responsables de la visión en color?",
        correcta: "Los conos (sensibles a longitudes de onda larga, media y corta: rojo, verde y azul)",
        incorrectas: [
            "Los bastones",
            "Las corneas"
        ]
    },
    {
        enunciado: "¿Qué es el sistema de color CIE 1931?",
        correcta: "El primer espacio de color definido matemáticamente por la Comisión Internacional de Iluminación para estandarizar la colorimetría",
        incorrectas: [
            "Una marca de pinturas acrílicas",
            "Un código secreto de los pintores impresionistas"
        ]
    },
    {
        enunciado: "¿Qué es el 'círculo cromático'?",
        correcta: "Una representación circular ordenada de los colores según su tono, mostrando la relación entre primarios, secundarios y terciarios",
        incorrectas: [
            "Un círculo pintado de un solo color",
            "Un juego de niños"
        ]
    },
    {
        enunciado: "¿Qué es un color 'secundario'?",
        correcta: "Un color obtenido mediante la mezcla equitativa de dos primarios (ej. Verde = Amarillo + Cian/Azul)",
        incorrectas: [
            "Un color menos importante en el cuadro",
            "Un color que se compra ya hecho"
        ]
    },
    {
        enunciado: "¿Qué es la 'temperatura del color'?",
        correcta: "Una cualidad sinestésica (y física en iluminación) que clasifica los colores en cálidos (rojos, amarillos) y fríos (azules, verdes)",
        incorrectas: [
            "La temperatura real a la que hierve la pintura",
            "Si la pintura está fría al tacto"
        ]
    },
    {
        enunciado: "¿Qué ocurre en la 'síntesis sustractiva' si mezclamos cian, magenta y amarillo puros?",
        correcta: "Se obtiene un color muy oscuro, teóricamente negro (negro compuesto), ya que se sustraen todas las longitudes de onda reflejadas",
        incorrectas: [
            "Se obtiene blanco puro",
            "Se obtiene un arcoíris"
        ]
    },
    {
        enunciado: "¿Qué es el 'negro' desde el punto de vista físico (luz)?",
        correcta: "La ausencia de luz visible llegando al ojo; un objeto negro absorbe teóricamente toda la luz que incide sobre él",
        incorrectas: [
            "La suma de todos los colores del arcoíris",
            "Una luz muy brillante que ciega"
        ]
    },
    {
        enunciado: "¿Qué es el 'blanco' desde el punto de vista físico (luz)?",
        correcta: "La suma o superposición de todas las longitudes de onda del espectro visible con alta intensidad",
        incorrectas: [
            "La ausencia de todo color",
            "Un color frío como la nieve"
        ]
    },
    {
        enunciado: "¿Qué es la 'refracción' de la luz?",
        correcta: "El cambio de dirección que experimenta una onda luminosa al pasar de un medio material a otro de distinta densidad (ej. aire a agua)",
        incorrectas: [
            "Cuando la luz rebota en un espejo",
            "Cuando se rompe un rayo de luz"
        ]
    },
    {
        enunciado: "¿Qué es el modelo de color HSL?",
        correcta: "Un modelo de representación cilíndrica del color basado en tono (Hue), saturación (Saturation) y luminosidad (Lightness), más intuitivo para humanos que RGB",
        incorrectas: [
            "High Speed Light, luz de alta velocidad",
            "Un modelo para ciegos"
        ]
    },
    {
        enunciado: "¿Qué es un color 'terciario'?",
        correcta: "El resultado de mezclar un color primario con su secundario adyacente (ej. rojo-anaranjado, azul-verdoso)",
        incorrectas: [
            "Un color que se usa en tercer lugar",
            "La mezcla de tres primarios"
        ]
    },
    {
        enunciado: "¿Qué es la 'persistencia retiniana' o postimagen negativa?",
        correcta: "Fenómeno visual por el que tras mirar fijamente un color saturado y apartar la vista a un fondo blanco, vemos su color complementario",
        incorrectas: [
            "Quedarse ciego por mirar al sol",
            "Tener buena memoria fotográfica"
        ]
    },
    {
        enunciado: "¿Qué es el 'color indexado' en informática gráfica?",
        correcta: "Una técnica para ahorrar memoria donde la imagen usa una paleta limitada de colores (ej. 256) codificados en una tabla o índice",
        incorrectas: [
            "El índice de un libro de arte",
            "Colores prohibidos en internet"
        ]
    },
    {
        enunciado: "¿Qué es la 'interferencia' como causa de color (ej. pompas de jabón, manchas de aceite)?",
        correcta: "Fenómeno ondulatorio donde ondas de luz reflejadas en las superficies externas e internas de una película delgada se suman o restan, creando colores iridiscentes",
        incorrectas: [
            "Cuando alguien se pone delante y no deja ver",
            "Mezclar pintura con aceite de motor"
        ]
    },
    {
        enunciado: "¿Qué es el 'daltonismo'?",
        correcta: "Una anomalía genética en la visión del color debida a la alteración o ausencia de uno o más tipos de conos (frecuentemente confusión rojo-verde)",
        incorrectas: [
            "Ver todo en blanco y negro",
            "Tener visión de rayos X"
        ]
    },
    {
        enunciado: "¿Qué es el color 'estructural' (ej. plumas de pavo real, mariposa Morpho)?",
        correcta: "Color producido por la microestructura física de la superficie (difracción, interferencia) y no por pigmentos químicos",
        incorrectas: [
            "Pintar las estructuras de los edificios",
            "Un pigmento muy duro y resistente"
        ]
    },
    {
        enunciado: "¿Qué define la teoría retinex de Edwin Land?",
        correcta: "Propone que la percepción del color no depende solo de la longitud de onda en un punto, sino de la relación de reflectancias en toda la escena (constancia del color)",
        incorrectas: [
            "Que la retina es como una pantalla de cine",
            "Que los colores solo existen en la mente"
        ]
    },
    {
        enunciado: "¿Qué es un espectrofotómetro?",
        correcta: "Un instrumento científico que mide la cantidad de luz reflejada o transmitida por un objeto en cada longitud de onda del espectro",
        incorrectas: [
            "Una cámara para fotografiar fantasmas",
            "Unas gafas para ver mejor los colores"
        ]
    },
    {
        enunciado: "¿Qué significa el acrónimo CMYK?",
        correcta: "Cyan, Magenta, Yellow, Key (Black); modelo de color sustractivo utilizado en impresión estándar",
        incorrectas: [
            "Color, Mancha, Yema, Kilo",
            "Círculo, Medio, Yunque, Kala"
        ]
    },
    {
        enunciado: "¿Qué es la 'mezcla óptica' (puntillismo)?",
        correcta: "Aplicar pequeñas pinceladas de colores puros yuxtapuestos para que se mezclen en la retina del espectador al ser vistos desde cierta distancia",
        incorrectas: [
            "Mezclar pintura dentro del ojo",
            "Usar gafas con cristales de colores"
        ]
    },
    {
        enunciado: "¿Qué es el 'gamut' o gama de color de un dispositivo?",
        correcta: "El subconjunto o rango total de colores que un dispositivo (monitor, impresora) es capaz de reproducir o captar",
        incorrectas: [
            "Un animal parecido al mamut",
            "La gama de grises de una foto antigua"
        ]
    },
    {
        enunciado: "¿Qué es el 'color local'?",
        correcta: "El color propio de un objeto bajo luz blanca normal, sin considerar las influencias de la atmósfera, sombras o reflejos",
        incorrectas: [
            "El color típico de una región o país",
            "Pintar solo en el local del estudio"
        ]
    },
    {
        enunciado: "¿Qué son los 'colores análogos'?",
        correcta: "Colores vecinos en el círculo cromático que comparten un tono común (ej. rojo, rojo-anaranjado, naranja), creando armonía suave",
        incorrectas: [
            "Colores digitales convertidos a analógicos",
            "Colores opuestos que se pelean"
        ]
    },
    {
        enunciado: "¿Qué efecto tiene la luz ultravioleta en ciertos pigmentos?",
        correcta: "Puede causar fluorescencia (emisión de luz visible) o degradación fotoquímica del pigmento a largo plazo",
        incorrectas: [
            "Los hace invisibles al ojo humano",
            "Los congela instantáneamente"
        ]
    },
    {
        enunciado: "¿Qué es el 'color plano' o 'tinta plana'?",
        correcta: "Una zona de color uniforme, sin gradaciones, texturas ni matices, característica del cartelismo, cómic o pop art",
        incorrectas: [
            "Un color que no tiene brillo",
            "Pintar sobre una superficie plana"
        ]
    },
    {
        enunciado: "¿Qué es la 'adaptación cromática' del ojo?",
        correcta: "La capacidad del sistema visual para ajustar su sensibilidad a la iluminación ambiente, haciendo que un papel blanco parezca blanco bajo luz solar o tungsteno",
        incorrectas: [
            "Ponerse lentillas de colores",
            "Acostumbrarse a ver mal"
        ]
    },
    {
        enunciado: "¿Qué es el 'tinte' en términos pictóricos?",
        correcta: "Cualquier materia colorante (pigmento o colorante) usada para dar color, o la acción de alterar un color añadiendo otro",
        incorrectas: [
            "El café que se toma el pintor",
            "Una mancha accidental en la ropa"
        ]
    },
    {
        enunciado: "¿Qué es la 'ley del contraste simultáneo' enunciada por Chevreul?",
        correcta: "Establece que dos colores adyacentes se modifican perceptualmente entre sí, tendiendo cada uno a teñir al otro con su complementario",
        incorrectas: [
            "Una ley que prohíbe usar contrastes fuertes",
            "Que no se pueden pintar dos cosas a la vez"
        ]
    },
    {
        enunciado: "¿Qué es un 'pigmento' a diferencia de un 'tinte' (dye)?",
        correcta: "El pigmento es una partícula sólida insoluble que se dispersa en un vehículo, mientras que el tinte es soluble y penetra molecularmente en el material",
        incorrectas: [
            "No hay diferencia, son palabras sinónimas",
            "El pigmento es líquido y el tinte es polvo"
        ]
    }
];
