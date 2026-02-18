// 42-montaje-y-diagnostico-de-instalaciones-automatizadas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el carril DIN (o perfil omega) en un cuadro de automatización?",
    correcta: "Un perfil metálico estandarizado (35 mm) donde se fijan mecánicamente la mayoría de componentes (magnetotérmicos, contactores, PLCs, bornas)",
    incorrectas: [
      "Un carril para trenes en miniatura",
      "Una barra de puesta a tierra"
    ]
  },
  {
    enunciado: "¿Qué es una canaleta ranurada en un cuadro eléctrico?",
    correcta: "Un conducto de plástico con ranuras laterales que sirve para alojar y organizar el cableado interno del cuadro, permitiendo la salida de cables hacia los componentes",
    incorrectas: [
      "Una tubería de agua",
      "Un adorno estético"
    ]
  },
  {
    enunciado: "¿Qué color se utiliza normalmente para el cableado de potencia (Fases) según norma EN 60204-1?",
    correcta: "Negro (o Marrón/Gris en distribución, pero Negro es estándar internacional para potencia AC en maquinaria)",
    incorrectas: [
      "Azul claro",
      "Verde-Amarillo"
    ]
  },
  {
    enunciado: "¿Qué color se utiliza para el cableado de mando en corriente continua (24V)?",
    correcta: "Azul oscuro (según norma EN 60204-1, aunque el azul claro es neutro de potencia, el azul oscuro se usa para DC control)",
    incorrectas: [
      "Rojo (AC control)",
      "Naranja (circuitos externos)"
    ]
  },
  {
    enunciado: "¿Y para el mando en corriente alterna (ej. 230V o 110V)?",
    correcta: "Rojo",
    incorrectas: [
      "Azul oscuro",
      "Verde"
    ]
  },
  {
    enunciado: "¿Qué significa el color Naranja en el cableado de un cuadro?",
    correcta: "Circuitos que permanecen con tensión aunque se corte el interruptor general (ej. iluminación del cuadro, circuitos de interbloqueo externo)",
    incorrectas: [
      "Circuitos de emergencia",
      "Cables de datos"
    ]
  },
  {
    enunciado: "¿Qué es una borna de seccionamiento o cuchilla?",
    correcta: "Una borna que permite abrir el circuito mecánicamente sin soltar el cable, muy útil para diagnóstico, pruebas y aislamiento de sensores",
    incorrectas: [
      "Una borna que corta el cable sola",
      "Una borna peligrosa"
    ]
  },
  {
    enunciado: "¿Qué es el numerado o etiquetado de cables?",
    correcta: "Identificar cada extremo de cada cable con un anillo o etiqueta que coincida con el esquema eléctrico, imprescindible para el montaje y futuro mantenimiento",
    incorrectas: [
      "Poner el precio del cable",
      "Numerar solo los gordos"
    ]
  },
  {
    enunciado: "¿Cómo se debe realizar el apriete de tornillos en bornas de control?",
    correcta: "Utilizando el destornillador adecuado (plano/estrella/pozi) y el par de apriete recomendado, verificando que el cable no queda suelto ni se corta el hilo",
    incorrectas: [
      "Apretando al máximo con las dos manos",
      "Dejándolos flojos para que respiren"
    ]
  },
  {
    enunciado: "¿Qué es una puntera hueca (ferrule) y para qué sirve?",
    correcta: "Un terminal metálico que se crimpa en el extremo del cable flexible para agrupar los hilos de cobre, evitar que se deshilachen y asegurar un buen contacto en la borna",
    incorrectas: [
      "Un adorno de colores",
      "Un tapón aislante"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para pelar cables de maniobra sin dañar el cobre?",
    correcta: "Pelacables automático o ajustado al diámetro correcto",
    incorrectas: [
      "Tijeras de electricista a ojo (riesgo de marcar el cobre)",
      "Un mechero"
    ]
  },
  {
    enunciado: "¿Qué es el plano de layout o disposición del cuadro?",
    correcta: "Un dibujo que muestra la ubicación física de los componentes dentro del armario, respetando distancias de ventilación y orden lógico",
    incorrectas: [
      "El esquema unifilar",
      "Un dibujo artístico del cuadro"
    ]
  },
  {
    enunciado: "¿Qué distancia mínima debe haber entre canaleta y bornas de componentes?",
    correcta: "Suficiente para que el cableado fluya ordenadamente y se vean las etiquetas (ej. 30-50mm), y para poder meter el destornillador",
    incorrectas: [
      "Ninguna, pegado totalmente",
      "1 metro"
    ]
  },
  {
    enunciado: "¿Qué es un 'latiguillo' de prueba o puente?",
    correcta: "Un trozo de cable con bananas o pinzas usado temporalmente para simular señales o puentear contactos durante el diagnóstico (con precaución)",
    incorrectas: [
      "Un látigo pequeño",
      "Un cable de red"
    ]
  },
  {
    enunciado: "¿Qué síntoma provoca una fuente de alimentación de 24V sobrecargada?",
    correcta: "La tensión de salida cae por debajo de 24V (ej. a 12V o 0V) o entra en modo hipo (enciende/apaga), provocando fallos aleatorios en el PLC y relés",
    incorrectas: [
      "Sube el voltaje a 400V",
      "Se pone a cantar"
    ]
  },
  {
    enunciado: "¿Cómo se comprueba un sensor inductivo PNP de 3 hilos con un polímetro?",
    correcta: "Midiendo tensión DC entre el cable de señal (negro) y negativo (azul); debe dar 24V al detectar metal y 0V al no detectar (o viceversa si es NC)",
    incorrectas: [
      "Midiendo resistencia entre positivo y negativo",
      "Midiendo corriente en corto"
    ]
  },
  {
    enunciado: "¿Qué indica si un relé tiene la bobina caliente pero no conmuta?",
    correcta: "Posible fallo mecánico (atascado), tensión insuficiente para cerrar del todo, o bobina parcialmente en corto (o es normal si es de retención y lleva horas activado)",
    incorrectas: [
      "Que tiene fiebre",
      "Que funciona perfectamente"
    ]
  },
  {
    enunciado: "¿Qué es la comprobación 'punto a punto' (timbrado) en frío?",
    correcta: "Verificar con el multímetro (pitido) que cada conexión física coincide con el esquema, marcándolo en el papel, antes de dar tensión",
    incorrectas: [
      "Llamar por teléfono a cada punto",
      "Tocar los puntos con el dedo"
    ]
  },
  {
    enunciado: "¿Qué es el bucle de corriente 4-20 mA abierto?",
    correcta: "Si el cable de un sensor analógico se rompe, la corriente es 0 mA; el PLC lo detecta como fallo (wire break) diferenciándolo de 4 mA (0 físico)",
    incorrectas: [
      "Un bucle infinito",
      "Una corriente de aire"
    ]
  },
  {
    enunciado: "¿Qué hacer si un variador de frecuencia da fallo de 'Sobretensión en bus DC' al frenar?",
    correcta: "Aumentar el tiempo de rampa de deceleración o instalar una resistencia de frenado externa para disipar la energía regenerada",
    incorrectas: [
      "Cambiar el motor por uno más pequeño",
      "Echarle agua al variador"
    ]
  },
  {
    enunciado: "¿Qué es el apantallamiento de los cables de señal analógica?",
    correcta: "Conectar la malla del cable a tierra en un solo extremo (normalmente en el armario de control) para drenar interferencias sin crear bucles de masa",
    incorrectas: [
      "Conectar la malla a fase",
      "Dejar la malla suelta en ambos lados"
    ]
  },
  {
    enunciado: "¿Qué es una borna de tierra PE?",
    correcta: "Una borna (verde-amarilla) que hace contacto eléctrico directo con el carril DIN metálico (y a su vez con la chapa de fondo), llevando la tierra al chasis",
    incorrectas: [
      "Una borna de plástico",
      "Una borna para fase"
    ]
  },
  {
    enunciado: "¿Qué es el 'Force' o forzado de E/S en el PLC durante el diagnóstico?",
    correcta: "Una función del software que permite obligar a una entrada o salida a valer 1 o 0 lógicamente, ignorando el estado físico real, para probar el programa o la máquina",
    incorrectas: [
      "Romper el sensor a la fuerza",
      "Empujar el PLC"
    ]
  },
  {
    enunciado: "¿Qué precaución hay que tener al forzar salidas?",
    correcta: "Peligro extremo: se pueden activar motores o pistones inesperadamente causando accidentes; solo debe hacerlo personal experto y con seguridad",
    incorrectas: [
      "Ninguna, es seguro",
      "Se gasta la memoria"
    ]
  },
  {
    enunciado: "¿Qué significa que un LED de entrada del PLC esté encendido pero el software diga 0?",
    correcta: "Fallo en el módulo de entrada (óptico roto), o el PLC está en STOP y no actualiza la imagen de proceso, o error de configuración de dirección",
    incorrectas: [
      "El LED está fundido",
      "Es imposible"
    ]
  },
  {
    enunciado: "¿Qué es un filtro de red (EMI) a la entrada del cuadro?",
    correcta: "Un dispositivo que evita que el ruido eléctrico generado dentro del cuadro (variadores) salga a la red, y viceversa, protegiendo la electrónica",
    incorrectas: [
      "Un filtro de café",
      "Un colador"
    ]
  },
  {
    enunciado: "¿Qué es la ventilación forzada en un armario con variadores?",
    correcta: "El uso de ventiladores con filtro (y rejilla de salida) para evacuar el calor generado por la electrónica de potencia y evitar sobrecalentamiento",
    incorrectas: [
      "Soplar con la boca",
      "Abrir la puerta del cuadro siempre"
    ]
  },
  {
    enunciado: "¿Qué grado IP debe mantener un cuadro cerrado tras el montaje?",
    correcta: "El especificado en diseño (ej. IP54 o IP65). Hay que sellar bien las entradas de cables (prensaestopas) para que no entre polvo conductor o humedad",
    incorrectas: [
      "IP00",
      "No importa si queda abierto"
    ]
  },
  {
    enunciado: "¿Qué es el 'Común' en un grupo de salidas digitales a relé?",
    correcta: "La borna donde se conecta la alimentación que será conmutada por varios relés del mismo grupo (ahorra bornas)",
    incorrectas: [
      "El punto donde se juntan todos los cables",
      "Una salida que no hace nada"
    ]
  },
  {
    enunciado: "¿Cómo se verifica la polaridad de un motor DC?",
    correcta: "Si gira al revés, hay que intercambiar los dos cables de armadura (+ y -)",
    incorrectas: [
      "No tienen polaridad",
      "Cambiando la posición del motor"
    ]
  },
  {
    enunciado: "¿Qué es un esquema de borneros (X1, X2...)?",
    correcta: "Un documento que lista uno a uno los bornes de la regleta, indicando qué cable entra (interno) y qué cable sale (manguera a campo) y su destino",
    incorrectas: [
      "Un mapa del tesoro",
      "Una lista de la compra"
    ]
  },
  {
    enunciado: "¿Qué es la categoría de empleo AC-3 en un contactor?",
    correcta: "Diseñado para arranque y parada de motores de jaula de ardilla (cargas inductivas fuertes), soportando la corriente de arranque",
    incorrectas: [
      "Para cargas resistivas puras (calefacción) sería AC-1",
      "Para iluminación LED"
    ]
  },
  {
    enunciado: "¿Qué pasa si dimensionamos un contactor AC-1 para un motor grande?",
    correcta: "Se quemarán los contactos rápidamente porque no soportan el arco de ruptura inductivo de un motor",
    incorrectas: [
      "Funcionará mejor",
      "Ahorraremos dinero"
    ]
  },
  {
    enunciado: "¿Qué es un guardamotor magnético vs magnetotérmico?",
    correcta: "El magnético solo protege contra cortocircuitos (requiere térmico aparte); el magnetotérmico protege ambas (y el guardamotor suele tener curva específica de motor regulable)",
    incorrectas: [
      "El magnético atrae metales",
      "Son lo mismo"
    ]
  },
  {
    enunciado: "¿Qué es el bus de expansión lateral de un PLC?",
    correcta: "El conector (físico o de pines) que permite acoplar módulos extra de E/S al lado de la CPU para ampliar el sistema sin cables",
    incorrectas: [
      "Un autobús lateral",
      "Un puerto USB"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para cortar carril DIN?",
    correcta: "Sierra de arco, radial o cortadora guillotina específica para perfiles",
    incorrectas: [
      "Tijeras de papel",
      "Doblándolo con la mano"
    ]
  },
  {
    enunciado: "¿Qué es la reserva de espacio en el armario?",
    correcta: "Dejar un porcentaje de espacio libre en carril (ej. 20-30%) para futuras ampliaciones y para disipación térmica",
    incorrectas: [
      "Dejarlo vacío por si acapso",
      "Llenarlo de adornos"
    ]
  },
  {
    enunciado: "¿Qué es un diodo de rueda libre (Flyback) en bobinas DC?",
    correcta: "Un diodo en antiparalelo con la bobina (electroimán, relé) que elimina el pico de alta tensión inverso al desconectar, protegiendo la salida del PLC",
    incorrectas: [
      "Un diodo que gira",
      "Un diodo que da luz"
    ]
  },
  {
    enunciado: "¿Qué es un varistor (MOV)?",
    correcta: "Un componente que se pone en paralelo para absorber picos de sobretensión transitorios (baja su resistencia bruscamente)",
    incorrectas: [
      "Un transistor variable",
      "Un condensador"
    ]
  },
  {
    enunciado: "¿Cómo se localiza un falso contacto por vibración?",
    correcta: "Golpeando suavemente componentes y cables con el mango aislado de un destornillador mientras se monitoriza la señal, para ver si falla",
    incorrectas: [
      "Sacudiendo el armario entero",
      "Gritando"
    ]
  }
];
