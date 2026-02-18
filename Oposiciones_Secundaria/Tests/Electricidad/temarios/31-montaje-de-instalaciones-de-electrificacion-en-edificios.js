// 31-montaje-de-instalaciones-de-electrificacion-en-edificios.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué herramienta es imprescindible para realizar rozas en muros de ladrillo de forma eficiente y limpia?",
    correcta: "La rozadora eléctrica de doble disco con aspiración de polvo",
    incorrectas: [
      "El martillo y el cincel manual exclusivamente",
      "La sierra de calar de madera"
    ]
  },
  {
    enunciado: "¿Qué profundidad mínima deben tener las rozas para alojar tubos empotrados?",
    correcta: "La suficiente para que el tubo quede recubierto por una capa de yeso/mortero de al menos 1 cm de espesor",
    incorrectas: [
      "Exactamente el diámetro del tubo, quedando a ras",
      "No importa la profundidad siempre que no se caiga"
    ]
  },
  {
    enunciado: "¿Qué es una guía pasacables o guía de nylon?",
    correcta: "Una herramienta flexible que se introduce primero en el tubo vacío para luego traccionar de los cables y pasarlos de un extremo a otro",
    incorrectas: [
      "Un libro de instrucciones para pasar cables",
      "Un cable que se deja fijo para siempre"
    ]
  },
  {
    enunciado: "¿Qué lubricante se utiliza para facilitar el paso de cables por tubos corrugados?",
    correcta: "Lubricante específico para cables (gel o espuma) o agua jabonosa neutra, evitando grasas que ataquen el aislamiento",
    incorrectas: [
      "Aceite de motor usado",
      "Vaselina industrial y grasa de litio"
    ]
  },
  {
    enunciado: "¿Qué es el 'peinado' de cables en un cuadro eléctrico?",
    correcta: "La organización ordenada, alineada y curvada de los conductores dentro del cuadro para mejorar la estética, refrigeración y facilidad de mantenimiento",
    incorrectas: [
      "Limpiar los cables con un peine",
      "Cortar los cables sobrantes al ras"
    ]
  },
  {
    enunciado: "¿Qué tipo de tubo se recomienda para instalaciones empotradas en hormigón prefabricado?",
    correcta: "Tubo corrugado reforzado (o 'de forjado') capaz de soportar la presión del vertido y vibrado del hormigón sin aplastarse",
    incorrectas: [
      "Tubo corrugado ligero estándar",
      "Manguera de jardín"
    ]
  },
  {
    enunciado: "¿Cómo se deben realizar las curvas en tubos rígidos de PVC?",
    correcta: "Utilizando un muelle interior para que no se chafe y aplicando calor suave (decapador) o usando curvas prefabricadas",
    incorrectas: [
      "Doblándolos a fuerza bruta con la rodilla",
      "Cortando y pegando con cinta"
    ]
  },
  {
    enunciado: "¿Qué distancia máxima se recomienda entre registros (cajas de paso) en tramos rectos largos?",
    correcta: "Aproximadamente 15 metros, para facilitar el tendido y sustitución de conductores",
    incorrectas: [
      "50 metros",
      "2 metros"
    ]
  },
  {
    enunciado: "¿Qué es un puntero láser o nivel láser en el montaje?",
    correcta: "Una herramienta de trazado que proyecta líneas horizontales/verticales para alinear cajas, tubos y mecanismos perfectamente",
    incorrectas: [
      "Un juguete para marcar paredes",
      "Una herramienta de corte por láser"
    ]
  },
  {
    enunciado: "¿Qué se debe hacer antes de introducir los cables en una canalización subterránea existente?",
    correcta: "Verificar que el tubo no está obstruido pasando un 'mandril' o una rata de limpieza",
    incorrectas: [
      "Llenarla de agua para limpiar",
      "Meter los cables a presión sin mirar"
    ]
  },
  {
    enunciado: "¿Qué es la 'cinta de pescado' o guía de acero?",
    correcta: "Una guía pasacables metálica plana, más rígida y resistente que el nylon, ideal para tramos difíciles o largos",
    incorrectas: [
      "Una cinta para envolver pescado",
      "Una cinta métrica"
    ]
  },
  {
    enunciado: "¿Qué precaución hay que tener al pelar la cubierta de una manguera multiconductora?",
    correcta: "No dañar el aislamiento de los conductores interiores al cortar la cubierta exterior",
    incorrectas: [
      "Cortar también el cobre para sanearlo",
      "Quemarla con un mechero siempre"
    ]
  },
  {
    enunciado: "¿Qué es el par de apriete en las bornas de conexión?",
    correcta: "La fuerza de torsión adecuada (Nm) para asegurar un contacto eléctrico óptimo sin deformar excesivamente el conductor ni pasar la rosca",
    incorrectas: [
      "Apretar hasta que rompa el tornillo por seguridad",
      "Apretar con los dedos solamente"
    ]
  },
  {
    enunciado: "¿Qué son los terminales preaislados tipo puntera o 'ferrule'?",
    correcta: "Piezas metálicas que se crimpan al final del cable flexible para mantener los hilos unidos y mejorar la conexión en la borna",
    incorrectas: [
      "Tapones para que no salga la electricidad",
      "Adornos de colores"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para fijar cables con grapas en superficie de madera?",
    correcta: "Grapadora de cables (o martillo y grapas de puente)",
    incorrectas: [
      "Pistola de clavos de acero",
      "Pegamento de barra"
    ]
  },
  {
    enunciado: "¿Qué es el trazado de la instalación?",
    correcta: "Marcar en paredes y techos el recorrido exacto de tubos y situación de cajas antes de empezar a picar o taladrar",
    incorrectas: [
      "Dibujar graffitis en la pared",
      "Hacer un esquema unifilar en papel"
    ]
  },
  {
    enunciado: "¿Qué se usa para fijar tubos en superficie en pared de hormigón?",
    correcta: "Abrazaderas (metálicas o plásticas) fijadas mediante tacos y tornillos",
    incorrectas: [
      "Cinta de carrocero",
      "Solo silicona"
    ]
  },
  {
    enunciado: "¿Por qué se dejan bucles de cable (cocas) en los registros?",
    correcta: "Para tener margen de maniobra en caso de tener que volver a conectar o sanear puntas en el futuro",
    incorrectas: [
      "Para que la electricidad descanse",
      "Para gastar más cable y cobrar más"
    ]
  },
  {
    enunciado: "¿Qué es un 'empalme en derivación' con conectores rápidos?",
    correcta: "Usar bornas de conexión rápida (tipo Wago) para sacar una línea derivada sin necesidad de herramientas ni cinta aislante",
    incorrectas: [
      "Un empalme retorcido con cinta",
      "Soldar tres cables juntos"
    ]
  },
  {
    enunciado: "¿Qué precaución se debe tener al taladrar en un techo con vigas?",
    correcta: "Evitar dañar la estructura (viguetas) o perforar tuberías/instalaciones del vecino de arriba",
    incorrectas: [
      "Taladrar lo más profundo posible siempre",
      "Usar broca de madera para hormigón"
    ]
  },
  {
    enunciado: "¿Qué es el código de colores de las guías pasacables?",
    correcta: "A veces indica el diámetro o material, pero no está estandarizado universalmente; el color ayuda a su visibilidad en tubos oscuros",
    incorrectas: [
      "Indica el voltaje que soportan",
      "Indica la longitud exacta"
    ]
  },
  {
    enunciado: "¿Cómo se identifica el conductor de fase en una instalación monofásica antigua sin colores?",
    correcta: "Usando un buscapolos o multímetro (con referencia a tierra) con tensión, o por seguimiento visual desconectado",
    incorrectas: [
      "Tocando a ver cuál da calambre",
      "Por el olor del cable"
    ]
  },
  {
    enunciado: "¿Qué es el yeso rápido o de control?",
    correcta: "Yeso que fragua en pocos minutos, usado para fijar puntos de tubos y cajas ('recibir') antes de rellenar la roza completa",
    incorrectas: [
      "Yeso que corre mucho",
      "Cemento armado"
    ]
  },
  {
    enunciado: "¿Qué herramienta pule y alisa las paredes tras tapar las rozas?",
    correcta: "La llagana o tustel (herramientas de albañilería) y lijadora para el acabado final",
    incorrectas: [
      "El martillo",
      "La radial"
    ]
  },
  {
    enunciado: "¿Qué es una caja de mecanismos universal?",
    correcta: "La caja empotrada cuadrada/redonda estándar donde se atornillan los interruptores y enchufes de la mayoría de fabricantes",
    incorrectas: [
      "Una caja que sirve para guardar cualquier cosa",
      "La caja del contador"
    ]
  },
  {
    enunciado: "¿Qué es el 'replanteo' en obra?",
    correcta: "Trasladar las medidas del plano a la realidad de la obra, marcando dónde va cada elemento",
    incorrectas: [
      "Plantearse si seguir trabajando",
      "Volver a plantar árboles"
    ]
  },
  {
    enunciado: "¿Qué diámetro de broca se usa habitualmente para tacos de fijación ligera (abrazaderas)?",
    correcta: "6 mm (taco de 6) es lo más estándar para cargas ligeras en instalación eléctrica",
    incorrectas: [
      "20 mm",
      "2 mm"
    ]
  },
  {
    enunciado: "¿Qué es una pistola de fijación directa (de gas o pólvora)?",
    correcta: "Herramienta que clava clavos de acero en hormigón/acero mediante un disparo, muy rápida para fijar canaletas o abrazaderas en grandes obras",
    incorrectas: [
      "Una pistola de agua",
      "Una grapadora de oficina"
    ]
  },
  {
    enunciado: "¿Qué es el 'tiro' de cables mecanizado?",
    correcta: "Usar cabrestantes eléctricos para arrastrar cables de gran sección en tendidos largos, controlando la tensión para no romperlos",
    incorrectas: [
      "Tirar los cables a la basura",
      "Disparar a los cables"
    ]
  },
  {
    enunciado: "¿Qué es la malla de señalización en zanjas?",
    correcta: "Una malla de plástico de color (normalmente amarilla o roja) que se entierra unos cm por encima del cable para avisar a quien excave en el futuro",
    incorrectas: [
      "Una red para pescar en la zanja",
      "Decoración subterránea"
    ]
  },
  {
    enunciado: "¿Qué es el tubo termorretráctil?",
    correcta: "Un tubo de plástico que se contrae con calor, usado para aislar empalmes, reparar cubiertas o identificar cables",
    incorrectas: [
      "Un tubo que se estira con el frío",
      "Tubo de fontanería"
    ]
  },
  {
    enunciado: "¿Para qué sirve el collarín de identificación?",
    correcta: "Pequeñas anillas con números/letras o etiquetas que se ponen en los extremos del cable para saber a qué circuito pertenece",
    incorrectas: [
      "Un collar para el perro del electricista",
      "Para sujetar el cable a la pared"
    ]
  },
  {
    enunciado: "¿Qué es la continuidad del conductor de protección?",
    correcta: "Comprobar que el cable de tierra llega sin cortes desde el cuadro hasta el último enchufe (obligatorio en verificación)",
    incorrectas: [
      "Que el cable sea muy largo",
      "Que no tenga nudos"
    ]
  },
  {
    enunciado: "¿Qué es el factor de llenado máximo de un tubo?",
    correcta: "El porcentaje de la sección interior del tubo ocupada por cables; no debe superarse (ej. 50% aprox) para disipar calor y facilitar ampliaciones",
    incorrectas: [
      "Llenarlo al 100% apretando fuerte",
      "Dejarlo vacío siempre"
    ]
  },
  {
    enunciado: "¿Qué es una caja de derivación estanca?",
    correcta: "Una caja con conos pasacables de goma y tapa con junta, usada en exteriores o locales húmedos (IP55/IP65)",
    incorrectas: [
      "Una caja llena de agua",
      "Una caja normal envuelta en plástico"
    ]
  },
  {
    enunciado: "¿Qué se usa para cortar canaleta de plástico limpiamente?",
    correcta: "Tijera cortacanales (con trinquete) o sierra de arco de diente fino",
    incorrectas: [
      "Un hacha",
      "Romperla doblándola"
    ]
  },
  {
    enunciado: "¿Qué es la 'coca' al desenrollar el cable?",
    correcta: "La torsión helicoidal que coge el cable si se saca mal del rollo; hay que desenrollarlo girando la bobina, no sacando espiras laterales",
    incorrectas: [
      "La bebida del electricista",
      "Un nudo corredizo"
    ]
  },
  {
    enunciado: "¿Qué se debe verificar antes de cerrar un falso techo?",
    correcta: "Que todas las cajas de registro y derivación quedan accesibles o registrables, y los cables correctamente sujetos y entubados",
    incorrectas: [
      "Nada, lo que no se ve no importa",
      "Que no se hayan dejado el bocadillo dentro"
    ]
  },
  {
    enunciado: "¿Qué es una regleta de conexión de 'chimenea' o clema?",
    correcta: "El sistema clásico de conexión con tornillo que prensa el cable, aunque tiende a sustituirse por conexión rápida",
    incorrectas: [
      "Una salida de humos",
      "Una regla de medir"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para comprobar el apriete de conexiones críticas?",
    correcta: "El destornillador dinamométrico (con par ajustable)",
    incorrectas: [
      "El destornillador de impacto a tope",
      "La mano"
    ]
  }
];
