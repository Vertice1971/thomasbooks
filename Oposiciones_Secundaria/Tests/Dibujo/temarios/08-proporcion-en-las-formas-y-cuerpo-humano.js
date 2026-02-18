var PREGUNTAS = [
    {
        enunciado: "¿Qué se entiende por 'canon' en la representación de la figura humana?",
        correcta: "Un sistema de reglas matemáticas que establece las proporciones ideales entre las diferentes partes del cuerpo y el todo",
        incorrectas: [
            "Una ley religiosa que prohíbe el desnudo en el arte",
            "Un tipo de pincel usado para detalles anatómicos"
        ]
    },
    {
        enunciado: "¿Cuál es la unidad de medida básica (módulo) que utilizaba Policleto en su canon?",
        correcta: "La altura de la cabeza, estableciendo que el cuerpo ideal debe medir 7 cabezas",
        incorrectas: [
            "La longitud del pie, estableciendo la medida de 6 pies",
            "La anchura de los hombros, siendo el cuerpo igual a 3 anchos"
        ]
    },
    {
        enunciado: "¿Qué diferencia principal introduce el canon de Lisipo respecto al de Policleto?",
        correcta: "Alarga la figura a 8 cabezas (8 ½ según algunas fuentes), estilizando el cuerpo para darle mayor elegancia y movimiento",
        incorrectas: [
            "Reduce la figura a 6 cabezas para hacerla más robusta",
            "Elimina cualquier referencia matemática y se basa en la intuición"
        ]
    },
    {
        enunciado: "¿Qué es la 'Sección Áurea' o 'Número de Oro' ($/phi$) en el contexto de la proporción?",
        correcta: "Una relación proporcional irracional (aprox 1:1,618) considerada estéticamente perfecta y presente en la naturaleza y el arte clásico",
        incorrectas: [
            "Una sección del museo donde se guardan las joyas",
            "Un número entero exacto (3) que representa la trinidad"
        ]
    },
    {
        enunciado: "¿En qué consiste el 'Hombre de Vitruvio' dibujado por Leonardo da Vinci?",
        correcta: "En el estudio de las proporciones humanas ideales inscritas simultáneamente en un círculo y un cuadrado, basándose en los textos de Vitruvio",
        incorrectas: [
            "En un retrato del arquitecto romano Vitruvio construyendo un templo",
            "En un boceto médico de una autopsia real"
        ]
    },
    {
        enunciado: "¿Qué es el 'Modulor' y quién lo propuso?",
        correcta: "Un sistema de medidas antropométricas basado en el cuerpo humano y la sección áurea, propuesto por Le Corbusier para la arquitectura",
        incorrectas: [
            "Un instrumento musical inventado por Gaudí",
            "Un sistema de perspectiva ideado por Picasso"
        ]
    },
    {
        enunciado: "¿Qué relación proporcional describe la 'Serie de Fibonacci'?",
        correcta: "Una sucesión infinita de números donde cada uno es la suma de los dos anteriores, aproximándose progresivamente a la proporción áurea",
        incorrectas: [
            "Una serie de números primos usados en criptografía",
            "Una tabla de multiplicar italiana del Renacimiento"
        ]
    },
    {
        enunciado: "¿Qué es la 'antropometría'?",
        correcta: "La ciencia que estudia las medidas y dimensiones de las diferentes partes del cuerpo humano con fines ergonómicos, antropológicos o artísticos",
        incorrectas: [
            "La medición de los astros en relación con el hombre",
            "El estudio de los insectos antropomorfos"
        ]
    },
    {
        enunciado: "¿Según el canon egipcio, cuántos 'puños' medía la figura humana de pie hasta la línea del cabello?",
        correcta: "18 puños (desde la planta de los pies, subiendo hasta la frente)",
        incorrectas: [
            "10 puños exactos",
            "25 puños para los faraones y 15 para los esclavos"
        ]
    },
    {
        enunciado: "¿Qué significa que una figura esté 'desproporcionada' en un dibujo?",
        correcta: "Que la relación de tamaño entre sus partes no corresponde a la realidad anatómica ni a un canon estético intencionado, generando distorsión involuntaria",
        incorrectas: [
            "Que es demasiado fea para ser arte",
            "Que está dibujada en blanco y negro sin color"
        ]
    },
    {
        enunciado: "¿A qué edad (aproximadamente) el cuerpo humano alcanza la proporción de adulto de 7,5 u 8 cabezas?",
        correcta: "En la edad adulta; un niño pequeño tiene una proporción de 4 a 5 cabezas, que va aumentando con el crecimiento",
        incorrectas: [
            "A los 3 años de edad",
            "Nunca cambia, nacemos con la proporción de 8 cabezas"
        ]
    },
    {
        enunciado: "¿Qué es el 'contraposto' y cómo afecta a la proporción visual?",
        correcta: "Una postura clásica donde el peso recae en una pierna, curvando la columna y desnivelando hombros y caderas, rompiendo la simetría frontal estricta",
        incorrectas: [
            "Ponerse de espaldas al espectador",
            "Un soporte para cuadros muy pesados"
        ]
    },
    {
        enunciado: "¿Qué es la 'proporción divina' según Luca Pacioli?",
        correcta: "El nombre renacentista dado a la Sección Áurea, considerándola una manifestación de la perfección de Dios en la geometría",
        incorrectas: [
            "La cantidad de vino que se debe beber en misa",
            "La altura de las catedrales góticas"
        ]
    },
    {
        enunciado: "¿Qué papel juega el centro del cuerpo (el ombligo) en el canon vitruviano?",
        correcta: "Es el centro geométrico del círculo en el que se inscribe el hombre con brazos y piernas extendidos",
        incorrectas: [
            "No tiene ninguna importancia geométrica",
            "Es el punto de fuga de la perspectiva cónica"
        ]
    },
    {
        enunciado: "¿Qué es un 'fémur' en términos de proporción artística?",
        correcta: "El hueso del muslo, cuya longitud es una referencia clave para proporcionar las piernas con el resto del tronco (aprox. 2 cabezas)",
        incorrectas: [
            "Un tipo de lápiz de carbón duro",
            "La distancia entre los ojos"
        ]
    },
    {
        enunciado: "¿Cómo varía la proporción de la figura humana en el Manierismo (ej. El Greco)?",
        correcta: "Se altera intencionadamente, alargando las figuras hasta 9, 10 o más cabezas para aumentar la expresividad espiritual y estilizada",
        incorrectas: [
            "Se hace muy baja y ancha, imitando esferas",
            "Se sigue estrictamente el canon de Policleto sin cambios"
        ]
    },
    {
        enunciado: "¿Qué es la 'belleza' según la teoría clásica de la proporción?",
        correcta: "Es el resultado de la armonía, la simetría y la correcta relación matemática de las partes entre sí (concinnitas)",
        incorrectas: [
            "Es algo subjetivo que no se puede medir",
            "Es el uso de colores muy brillantes y caros"
        ]
    },
    {
        enunciado: "¿Qué es el 'rectángulo raíz de 2' (Din A)?",
        correcta: "Un rectángulo cuya proporción permite que al dividirlo por la mitad, las mitades resultantes conserven exactamente la misma proporción que el original",
        incorrectas: [
            "Un rectángulo que tiene raíces cuadradas dibujadas",
            "El formato de las pantallas de cine panorámicas"
        ]
    },
    {
        enunciado: "¿Qué es la 'braza' en las medidas humanas tradicionales?",
        correcta: "La distancia de punta a punta de los dedos con los brazos extendidos en cruz, que equivale aproximadamente a la altura total del cuerpo",
        incorrectas: [
            "Un estilo de natación artística",
            "La medida del brazo desde el codo a la muñeca"
        ]
    },
    {
        enunciado: "¿Qué importancia tiene el esqueleto en el estudio de la proporción humana?",
        correcta: "Constituye la estructura rígida interna que determina las longitudes fijas y los puntos de articulación inalterables del cuerpo",
        incorrectas: [
            "Ninguna, solo importan los músculos",
            "Sirve para decorar estudios de tatuaje"
        ]
    },
    {
        enunciado: "¿Cuál es el punto medio clásico del cuerpo humano adulto de pie?",
        correcta: "El pubis (sínfisis púbica) suele marcar la mitad de la altura total en el canon de 8 cabezas",
        incorrectas: [
            "El ombligo siempre es el centro exacto",
            "Las rodillas marcan la mitad de la altura"
        ]
    },
    {
        enunciado: "¿Qué es la 'morfopsicología' aplicada al retrato?",
        correcta: "El estudio de la correspondencia entre las formas y proporciones del rostro y el carácter o personalidad del individuo",
        incorrectas: [
            "La psicología de las formas geométricas puras",
            "Pintar caras con formas de animales"
        ]
    },
    {
        enunciado: "¿Qué es un 'escorzo' pronunciado en relación a la proporción?",
        correcta: "Una vista donde las proporciones lineales se acortan drásticamente debido a la perspectiva, alterando la medición estándar del canon",
        incorrectas: [
            "Un dibujo hecho con muy poca luz",
            "Una persona muy baja de estatura"
        ]
    },
    {
        enunciado: "¿Qué es el 'triángulo de Reuleaux'?",
        correcta: "Una figura de ancho constante basada en un triángulo curvo, usada en diseño pero rara en proporciones humanas naturales",
        incorrectas: [
            "El triángulo que forman nariz y ojos",
            "Un instrumento de dibujo francés"
        ]
    },
    {
        enunciado: "¿Qué canon se suele utilizar para dibujar una figura idealizada de moda o figurín?",
        correcta: "Un canon estilizado de 9 a 10 cabezas, alargando especialmente las piernas para dar esbeltez",
        incorrectas: [
            "Un canon de 5 cabezas para que parezca más real",
            "El canon egipcio de perfil"
        ]
    },
    {
        enunciado: "¿Qué dice la regla del 'tercio facial'?",
        correcta: "Que el rostro se puede dividir en tres partes iguales: del nacimiento del pelo a las cejas, de las cejas a la base de la nariz, y de la nariz al mentón",
        incorrectas: [
            "Que solo se debe dibujar un tercio de la cara",
            "Que la cara mide un tercio del cuerpo total"
        ]
    },
    {
        enunciado: "¿Qué es la 'macrocefalia' en la representación artística?",
        correcta: "La representación de la cabeza con un tamaño desproporcionadamente grande respecto al cuerpo, común en arte infantil o caricatura",
        incorrectas: [
            "Tener la cabeza muy pequeña",
            "Un estilo de sombrero grande"
        ]
    },
    {
        enunciado: "¿Qué es el 'canon de 7 cabezas y media'?",
        correcta: "Un estándar común en la enseñanza de dibujo académico por ser considerado más realista para la estatura media que el de 8 cabezas",
        incorrectas: [
            "Un error matemático, no existen medias cabezas",
            "El canon usado solo para los dioses griegos"
        ]
    },
    {
        enunciado: "¿Qué es la 'simetría bilateral' en el cuerpo humano?",
        correcta: "La propiedad por la cual la mitad izquierda y derecha del cuerpo son imágenes especulares una de la otra respecto al eje sagital",
        incorrectas: [
            "Tener dos lados exactamente iguales sin ninguna diferencia",
            "Poder escribir con las dos manos"
        ]
    },
    {
        enunciado: "¿Qué es la 'ergonomía' y cómo se relaciona con la proporción?",
        correcta: "El diseño de objetos y espacios adaptados a las dimensiones (proporciones) y capacidades del cuerpo humano para su uso eficiente y seguro",
        incorrectas: [
            "El estudio del ego en el arte",
            "Una técnica de masaje muscular"
        ]
    },
    {
        enunciado: "¿Qué es el 'hombre percentil 95'?",
        correcta: "Un concepto estadístico antropométrico que indica que el 95% de la población tiene medidas iguales o menores a ese modelo",
        incorrectas: [
            "Un hombre que ha sacado un 95 en un examen",
            "Un cyborg casi perfecto"
        ]
    },
    {
        enunciado: "¿Qué proporción guarda, aproximadamente, la mano respecto a la cara?",
        correcta: "La longitud de la mano abierta (desde la muñeca) es similar a la altura del rostro (desde el mentón al nacimiento del pelo)",
        incorrectas: [
            "La mano es el doble de grande que la cara",
            "La mano es tan pequeña como un ojo"
        ]
    },
    {
        enunciado: "¿Qué es el 'canon de Praxíteles'?",
        correcta: "Asociado a la 'Curva Praxiteliana', introduce una silueta en 'S' suave y sensual, manteniendo proporciones esbeltas similares a Lisipo",
        incorrectas: [
            "Un canon geométrico rígido y militar",
            "Esculpir solo en bronce"
        ]
    },
    {
        enunciado: "¿Qué influencia tiene la perspectiva cónica en la proporción aparente?",
        correcta: "Hace que los objetos y partes del cuerpo más cercanos al espectador se vean desproporcionadamente grandes respecto a los lejanos",
        incorrectas: [
            "Ninguna, la perspectiva respeta las medidas reales siempre",
            "Hace que todo se vea más pequeño igual"
        ]
    },
    {
        enunciado: "¿Qué es el 'somatotipo'?",
        correcta: "La clasificación de la estructura corporal según su forma y metabolismo (ectomorfo, mesomorfo, endomorfo), variando sus proporciones de ancho/grosor",
        incorrectas: [
            "Un tipo de sombrero romano",
            "La suma de todos los tipos de arte"
        ]
    },
    {
        enunciado: "¿Qué relación hay entre el 'pie' y la 'altura' en el canon estándar?",
        correcta: "La longitud del pie es aproximadamente 1/6 o 1/7 de la altura total, dependiendo del canon (Vitruvio dice 1/6)",
        incorrectas: [
            "El pie mide lo mismo que la pierna entera",
            "El pie es 1/12 de la altura"
        ]
    },
    {
        enunciado: "¿Qué es la 'regla de la L' en la mano?",
        correcta: "Una observación de proporción donde el pulgar y el índice extendidos forman una L, y la distancia entre sus puntas guarda relación con otras medidas",
        incorrectas: [
            "Una regla para no equivocarse de mano",
            "Una letra que se tatúa en la mano"
        ]
    },
    {
        enunciado: "¿Qué es una 'cariátide' en relación al cuerpo y la arquitectura?",
        correcta: "Una columna esculpida con figura femenina que soporta una carga arquitectónica (entablamento), integrando la proporción humana en el edificio",
        incorrectas: [
            "Una muela con caries",
            "Una diosa de la destrucción"
        ]
    },
    {
        enunciado: "¿Qué es el 'módulo' en el diseño de una retícula compositiva?",
        correcta: "La unidad de medida base que se repite para crear la estructura de la cuadrícula, asegurando la proporción armónica del diseño",
        incorrectas: [
            "El mueble donde se guardan los papeles",
            "El modo de hacer las cosas"
        ]
    },
    {
        enunciado: "¿Qué proporción guardan los hombros en el hombre respecto a la mujer (estándar)?",
        correcta: "En el hombre los hombros suelen ser más anchos (aprox. 2 cabezas o más) que las caderas, mientras que en la mujer esta relación es más equilibrada o inversa",
        incorrectas: [
            "Son exactamente iguales en ambos sexos siempre",
            "Las mujeres tienen los hombros tres veces más anchos"
        ]
    }
];
