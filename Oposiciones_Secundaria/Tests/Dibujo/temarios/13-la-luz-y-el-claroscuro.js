var PREGUNTAS = [
    {
        enunciado: "¿Qué relación fundamental existe entre la luz y el volumen (claroscuro)?",
        correcta: "El volumen de los objetos se percibe gracias a las gradaciones de luz y sombra (modelado) que se producen sobre sus superficies",
        incorrectas: [
            "El volumen existe independientemente de la luz y se ve igual en la oscuridad",
            "La luz aplana los objetos y les quita volumen"
        ]
    },
    {
        enunciado: "¿Qué es la 'luz propia' de un objeto?",
        correcta: "La zona del objeto iluminada directamente por la fuente de luz, donde se encuentra el brillo máximo (si la superficie es pulida)",
        incorrectas: [
            "La luz que emite el objeto porque es fosforescente",
            "La luz que lleva el objeto en el bolsillo"
        ]
    },
    {
        enunciado: "¿Qué es la 'sombra propia'?",
        correcta: "La zona oscura sobre la superficie del propio objeto que no recibe luz directa, definiendo su volumen",
        incorrectas: [
            "La sombra que proyecta el objeto en el suelo",
            "La sombra de la persona que mira el objeto"
        ]
    },
    {
        enunciado: "¿Qué es la 'sombra arrojada' o 'proyectada'?",
        correcta: "La silueta oscura que el objeto proyecta sobre las superficies cercanas (suelo, pared) al interceptar la luz, anclándolo al espacio",
        incorrectas: [
            "La sombra del propio objeto sobre sí mismo",
            "Tirar sombras a la basura"
        ]
    },
    {
        enunciado: "¿Qué es la 'luz reflejada' o 'reflejo' en la zona de sombra?",
        correcta: "Una tenue iluminación en la zona de sombra propia producida por la luz que rebota en superficies cercanas, suavizando la oscuridad",
        incorrectas: [
            "Un error del pintor",
            "Una luz que viene de dentro del objeto"
        ]
    },
    {
        enunciado: "¿Qué es el 'tenebrismo' (ej. Caravaggio)?",
        correcta: "Un estilo caracterizado por contrastes violentos y dramáticos entre luz y sombra (claroscuro extremo), con fondos oscuros y focos de luz dirigidos",
        incorrectas: [
            "Pintar siempre de noche",
            "Tener miedo a la oscuridad"
        ]
    },
    {
        enunciado: "¿Qué es la 'luz natural'?",
        correcta: "La que proviene del sol; se caracteriza por ser una única fuente, con rayos paralelos y cambiante según la hora del día y el clima",
        incorrectas: [
            "La luz de las velas naturales",
            "La luz que no cuesta dinero"
        ]
    },
    {
        enunciado: "¿Qué es la 'luz artificial'?",
        correcta: "La producida por el hombre (bombillas, fuego); suele ser una fuente puntual, de intensidad constante y con rayos divergentes (radial)",
        incorrectas: [
            "Una luz pintada, no real",
            "La luz de la luna llena"
        ]
    },
    {
        enunciado: "¿Qué efecto produce la 'luz cenital'?",
        correcta: "Proviene de arriba (vertical); aplana los volúmenes, crea sombras cortas y duras bajo cejas y nariz, y da un aire dramático o sagrado",
        incorrectas: [
            "Viene del suelo hacia arriba",
            "Es la luz de las cenizas"
        ]
    },
    {
        enunciado: "¿Qué efecto produce la 'luz nadir' o contrapicado?",
        correcta: "Proviene de abajo hacia arriba; invierte las sombras naturales, produciendo un efecto antinatural, siniestro o fantasmal",
        incorrectas: [
            "Viene de lado y es muy favorecedora",
            "Es la luz usada para nadar"
        ]
    },
    {
        enunciado: "¿Qué es el 'sfumato' leonardesco?",
        correcta: "Una técnica de difuminado suave de los contornos y transiciones de luz a sombra, logrando una atmósfera vaporosa y realista",
        incorrectas: [
            "Fumar mientras se pinta",
            "Pintar con humo de vela"
        ]
    },
    {
        enunciado: "¿Qué es una luz 'difusa'?",
        correcta: "Luz que no proyecta sombras duras ni definidas, suave y envolvente (ej. día nublado, luz rebotada), ideal para mostrar detalles",
        incorrectas: [
            "Una luz que está confundida",
            "Un foco muy potente directo a los ojos"
        ]
    },
    {
        enunciado: "¿Qué es el 'contraluz'?",
        correcta: "Cuando la fuente de luz está detrás del objeto, dejando su cara visible en sombra total y recortando su silueta contra el fondo iluminado",
        incorrectas: [
            "Pintar contra la luz de la ventana",
            "Una luz que va en dirección contraria"
        ]
    },
    {
        enunciado: "¿Qué es la 'clave alta' (high key) en iluminación?",
        correcta: "Una imagen donde predominan los tonos claros y blancos, con pocas sombras profundas, transmitiendo luz, alegría o pureza",
        incorrectas: [
            "Una clave musical muy aguda",
            "Poner la luz en un sitio muy alto"
        ]
    },
    {
        enunciado: "¿Qué es el 'modelado' en dibujo?",
        correcta: "El proceso de generar la ilusión de volumen 3D en un plano 2D mediante la valoración tonal (sombrear)",
        incorrectas: [
            "Hacer figuras con plastilina",
            "Posar como modelo para un cuadro"
        ]
    },
    {
        enunciado: "¿Qué es la 'penumbra'?",
        correcta: "La zona de transición gradual entre la luz y la sombra, donde la iluminación disminuye progresivamente",
        incorrectas: [
            "La sombra más oscura de todas",
            "Una pena muy grande"
        ]
    },
    {
        enunciado: "¿Cómo afecta la 'dirección' de la luz a la textura?",
        correcta: "La luz rasante (lateral) resalta al máximo las texturas y relieves, mientras que la luz frontal las aplana y disimula",
        incorrectas: [
            "La luz no afecta a la textura",
            "La luz frontal crea más textura que la lateral"
        ]
    },
    {
        enunciado: "¿Qué es el 'claroscuro' (chiaroscuro) como técnica histórica?",
        correcta: "El uso magistral de contrastes fuertes entre volúmenes iluminados y fondos oscuros para destacar figuras y crear profundidad",
        incorrectas: [
            "Pillar a alguien copiando un examen",
            "Pintar con los ojos cerrados"
        ]
    },
    {
        enunciado: "¿Qué es el 'borde' o 'línea del terminador' en una sombra?",
        correcta: "La zona (línea ficticia) donde termina la luz y empieza la sombra propia en un cuerpo curvo; su suavidad indica la curvatura",
        incorrectas: [
            "El final de la película Terminator",
            "El marco del cuadro"
        ]
    },
    {
        enunciado: "¿Qué es la 'luminismo'?",
        correcta: "Estilo pictórico que da protagonismo absoluto a la representación de la luz atmosférica y sus efectos sobre el paisaje",
        incorrectas: [
            "Instalar luces de navidad",
            "Una secta que adora al sol"
        ]
    },
    {
        enunciado: "¿Qué es una fuente de luz 'puntual'?",
        correcta: "Una fuente de tamaño pequeño y concentrado (bombilla, sol lejano) que produce sombras duras y bordes nítidos",
        incorrectas: [
            "Una luz que llega siempre a su hora",
            "Una luz que se enciende y apaga sola"
        ]
    },
    {
        enunciado: "¿Qué es una fuente de luz 'extensa' o de área?",
        correcta: "Una fuente de gran tamaño (ventana grande, softbox) que envuelve al objeto y produce sombras suaves y difusas",
        incorrectas: [
            "Una luz que dura mucho tiempo encendida",
            "Muchos focos pequeños juntos"
        ]
    },
    {
        enunciado: "¿Qué es el 'brillo especular'?",
        correcta: "El punto de luz más intenso y pequeño en una superficie brillante (reflejo directo de la fuente), indicando que el material es liso o húmedo",
        incorrectas: [
            "Un brillo que se ve en el espejo",
            "Especular con el precio de los cuadros"
        ]
    },
    {
        enunciado: "¿Cómo cambia el color en la zona de sombra (impresionismo)?",
        correcta: "La sombra no es negra, sino coloreada; suele teñirse del complementario de la luz o del color del objeto, y de tonos fríos (azulados/violetas) en exteriores",
        incorrectas: [
            "La sombra siempre es negra pura",
            "La sombra es blanca"
        ]
    },
    {
        enunciado: "¿Qué es la 'luz frontal'?",
        correcta: "Luz que incide desde la posición del observador; elimina sombras visibles y aplana el volumen, dando un aspecto gráfico",
        incorrectas: [
            "Una luz en la frente del pintor",
            "La luz de los faros de un coche"
        ]
    },
    {
        enunciado: "¿Qué es la 'valoración tonal'?",
        correcta: "La organización de los grados de gris (escala de valores) en una obra para representar la luz y la estructura espacial",
        incorrectas: [
            "Poner precio al cuadro",
            "Valorar si el cuadro es bueno o malo"
        ]
    },
    {
        enunciado: "¿Qué es la 'luz lateral'?",
        correcta: "Incide desde un lado; modela fuertemente el volumen y destaca la tridimensionalidad, dividiendo el objeto en zona de luz y sombra",
        incorrectas: [
            "Una luz que se mueve de lado a lado",
            "Luz de emergencia"
        ]
    },
    {
        enunciado: "¿Qué es la 'irradiación' óptica?",
        correcta: "Fenómeno por el cual una superficie muy iluminada parece más grande que una oscura del mismo tamaño (el blanco 'se come' al negro)",
        incorrectas: [
            "La radiación nuclear",
            "Pintar con materiales radioactivos"
        ]
    },
    {
        enunciado: "¿Qué es el 'grisalla'?",
        correcta: "Técnica pictórica basada en el uso exclusivo de tonos de gris (monocromo) para modelar formas, pareciendo relieve escultórico",
        incorrectas: [
            "Estar triste en un día gris",
            "Gritar en francés"
        ]
    },
    {
        enunciado: "¿Qué importancia tiene el 'fondo' en el claroscuro?",
        correcta: "Fundamental; el contraste del objeto con el fondo (oscuro sobre claro o viceversa) determina su silueta y posición espacial",
        incorrectas: [
            "Ninguna, el fondo se deja en blanco",
            "El fondo siempre debe ser negro"
        ]
    },
    {
        enunciado: "¿Qué es la 'luz de relleno'?",
        correcta: "Una luz secundaria, más suave, usada para aclarar las sombras producidas por la luz principal y reducir el contraste excesivo",
        incorrectas: [
            "Luz para rellenar huecos vacíos",
            "Rellenar una bombilla de gas"
        ]
    },
    {
        enunciado: "¿Qué es la 'caída de la luz' (falloff)?",
        correcta: "La disminución de la intensidad de la luz a medida que aumenta la distancia desde la fuente (ley del cuadrado inverso)",
        incorrectas: [
            "Cuando se cae la lámpara al suelo",
            "El atardecer"
        ]
    },
    {
        enunciado: "¿Qué hizo Rembrandt característico con la luz?",
        correcta: "Maestro del claroscuro, usaba una luz dorada y cálida que emergía de la oscuridad, con sombras ricas y transparentes, centrando la emoción en los rostros",
        incorrectas: [
            "Inventó la luz de neón",
            "Pintaba sin sombras, todo plano"
        ]
    },
    {
        enunciado: "¿Qué es el 'tramado' o 'hatch' para sombrear?",
        correcta: "Crear valores tonales mediante líneas paralelas o cruzadas; cuanto más juntas y cruzadas, más oscura es la sombra",
        incorrectas: [
            "Tramar un plan malvado",
            "Usar una trama de novela"
        ]
    },
    {
        enunciado: "¿Qué es la 'atmósfera' lumínica?",
        correcta: "El 'aire' visible interpuesto entre el ojo y los objetos, modificado por la luz, el humo o la niebla, que unifica la escena",
        incorrectas: [
            "La presión atmosférica del estudio",
            "Pintar nubes solamente"
        ]
    },
    {
        enunciado: "¿Qué es la 'luz divina' o sobrenatural en el arte religioso?",
        correcta: "Luz que no proviene de una fuente física natural, sino que emana de figuras sagradas o del cielo, simbolizando la presencia de Dios",
        incorrectas: [
            "La luz de la iglesia",
            "Una bombilla muy potente"
        ]
    },
    {
        enunciado: "¿Qué es la 'silueta'?",
        correcta: "La forma plana y oscura de un objeto vista contra un fondo claro, donde se pierde el volumen interno y solo se ve el contorno",
        incorrectas: [
            "Una marca de ropa",
            "El dibujo de los ojos"
        ]
    },
    {
        enunciado: "¿Qué es el 'degradado'?",
        correcta: "Transición suave y progresiva de un tono claro a uno oscuro (o entre colores), fundamental para representar superficies curvas",
        incorrectas: [
            "Un militar que ha perdido su rango",
            "Una pintura que se ha estropeado"
        ]
    },
    {
        enunciado: "¿Qué es la 'sombra de oclusión' (ambient occlusion)?",
        correcta: "Las sombras más profundas que se producen en grietas, rincones y zonas de contacto donde la luz ambiental apenas puede entrar",
        incorrectas: [
            "Ocluir el paso a la luz con la mano",
            "Una sombra que tapa toda la imagen"
        ]
    },
    {
        enunciado: "¿Qué es el 'bloqueo' de luces y sombras?",
        correcta: "Fase inicial del dibujo o pintura donde se establecen las grandes zonas de luz y sombra de forma simplificada antes de detallar",
        incorrectas: [
            "Impedir que entre luz en el estudio",
            "Sufrir un bloqueo creativo"
        ]
    }
];
