// 59-manipuladores-y-robots.js
var PREGUNTAS = [
  {
    enunciado: "¿Cómo define la norma ISO 8373 a un robot industrial?",
    correcta: "Manipulador multifuncional, controlado automáticamente, reprogramable y con tres o más ejes programables",
    incorrectas: [
      "Máquina fija dotada de un solo brazo mecánico para tareas de transporte simple",
      "Dispositivo electrónico capaz de simular la inteligencia humana mediante redes neuronales"
    ]
  },
  {
    enunciado: "¿Qué es el volumen de trabajo (work envelope) de un robot?",
    correcta: "El espacio físico total que puede alcanzar el extremo del manipulador (punto P) durante sus movimientos",
    incorrectas: [
      "La cantidad máxima de datos que puede procesar el controlador por segundo",
      "El peso total de la estructura mecánica del robot"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un robot con configuración cartesiana (PPP)?",
    correcta: "Posee tres articulaciones prismáticas cuyos ejes son perpendiculares entre sí, definiendo un espacio de trabajo prismático",
    incorrectas: [
      "Utiliza tres articulaciones de rotación para imitar el brazo humano",
      "Combina una articulación rotacional con dos prismáticas para trabajar en cilindro"
    ]
  },
  {
    enunciado: "¿Cuál es la principal ventaja de la configuración SCARA (Selective Compliance Assembly Robot Arm)?",
    correcta: "Gran rigidez en el eje vertical y alta flexibilidad en el plano horizontal, ideal para tareas de inserción y montaje",
    incorrectas: [
      "Capacidad para trabajar en entornos submarinos a gran profundidad",
      "Ser el único tipo de robot que no requiere controlador electrónico"
    ]
  },
  {
    enunciado: "¿Qué representan los parámetros de Denavit-Hartenberg (D-H)?",
    correcta: "Un método matricial sistemático para establecer sistemas de coordenadas en cada eslabón y resolver la cinemática directa",
    incorrectas: [
      "Un conjunto de normas de seguridad para evitar colisiones entre humanos y robots",
      "Los coeficientes de fricción de los motores paso a paso"
    ]
  },
  {
    enunciado: "¿En qué consiste el problema de la cinemática inversa?",
    correcta: "Determinar los valores de las articulaciones (ángulos o distancias) necesarios para alcanzar una posición y orientación del extremo dadas",
    incorrectas: [
      "Calcular la posición del extremo conociendo los ángulos de los motores",
      "Medir la velocidad máxima que puede alcanzar el robot sin carga"
    ]
  },
  {
    enunciado: "¿Qué es el Jacobiano de un manipulador?",
    correcta: "La matriz diferencial que relaciona las velocidades de las articulaciones con las velocidades lineales y angulares del extremo",
    incorrectas: [
      "El software encargado de la interfaz de usuario del robot",
      "Un sensor que mide la aceleración de la gravedad en la base"
    ]
  },
  {
    enunciado: "¿Qué define el 'Grado de Libertad' (GDL) de un robot?",
    correcta: "El número de parámetros independientes que fijan la situación mecánica del sistema (generalmente coincide con el número de articulaciones)",
    incorrectas: [
      "La distancia máxima que puede recorrer el brazo en metros",
      "La capacidad del robot para tomar decisiones sin intervención humana"
    ]
  },
  {
    enunciado: "¿Qué es la repetibilidad en un robot industrial?",
    correcta: "La capacidad del robot de regresar al mismo punto de destino tras realizar varios ciclos de movimiento",
    incorrectas: [
      "La diferencia entre la posición programada y la posición real alcanzada por primera vez",
      "El número de veces que el robot puede fallar antes de necesitar mantenimiento"
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'TCP' (Tool Center Point)?",
    correcta: "Es el punto de referencia imaginario situado en la herramienta (pinza, soplete, etc.) para definir su posición en el espacio",
    incorrectas: [
      "Es el protocolo de comunicación usado para conectar el robot a internet",
      "El botón de parada de emergencia situado en la consola de mando"
    ]
  },
  {
    enunciado: "¿Qué diferencia a un actuador hidráulico de uno eléctrico en robótica?",
    correcta: "El hidráulico ofrece una altísima relación potencia/peso y gran capacidad de carga, pero es más sucio y difícil de mantener",
    incorrectas: [
      "El eléctrico es mucho más potente pero menos preciso que el hidráulico",
      "El hidráulico solo se utiliza para robots de menos de 1 kg de carga"
    ]
  },
  {
    enunciado: "¿Qué es un reductor armónico (Harmonic Drive)?",
    correcta: "Un mecanismo de transmisión de alta precisión, sin holgura (backlash) y alta relación de reducción, muy común en articulaciones de robots",
    incorrectas: [
      "Un dispositivo que reduce el ruido acústico de los motores del robot",
      "Un sistema de seguridad que frena el robot si detecta un obstáculo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la programación 'Gestual' o de guiado?",
    correcta: "El operario mueve físicamente el brazo del robot o un maniquí a través de la trayectoria deseada para que el sistema la grabe",
    incorrectas: [
      "Escribir líneas de código en un lenguaje de alto nivel como C++",
      "Usar comandos de voz para dirigir los movimientos del manipulador"
    ]
  },
  {
    enunciado: "¿Qué es un sensor de fuerza/par (F/T sensor) en robótica?",
    correcta: "Un sensor, generalmente situado en la muñeca, que mide las fuerzas y momentos resultantes del contacto con el entorno",
    incorrectas: [
      "Un dispositivo que mide el peso total de la base del robot",
      "Un sensor óptico que detecta la presencia de operarios"
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'singularidad' en un manipulador?",
    correcta: "Una configuración geométrica donde se pierde uno o más grados de libertad y el Jacobiano se vuelve singular",
    incorrectas: [
      "El momento en que el robot desarrolla conciencia de sí mismo",
      "Un fallo eléctrico que afecta a todos los motores simultáneamente"
    ]
  },
  {
    enunciado: "¿Qué es un robot colaborativo (Cobot)?",
    correcta: "Robot diseñado para interactuar físicamente con humanos en un entorno de trabajo compartido sin vallas de seguridad",
    incorrectas: [
      "Un grupo de robots que trabajan juntos para montar un coche",
      "Un robot que requiere que dos personas lo manejen a la vez"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza el lenguaje VAL II o RAPID?",
    correcta: "Son lenguajes de programación textual específicos de fabricantes (Unimation y ABB respectivamente) para el control de robots",
    incorrectas: [
      "Para diseñar los planos mecánicos de los engranajes",
      "Para calcular la nómina de los ingenieros de robótica"
    ]
  },
  {
    enunciado: "¿Qué es el 'Teach Pendant'?",
    correcta: "La unidad de control manual (consola) que permite mover el robot, programar puntos y visualizar estados",
    incorrectas: [
      "La base de hormigón donde se atornilla el robot",
      "El software de simulación 3D que se instala en el PC"
    ]
  },
  {
    enunciado: "¿Qué define la dinámica del manipulador?",
    correcta: "Las ecuaciones matemáticas que relacionan las fuerzas y pares aplicados con el movimiento resultante (aceleraciones)",
    incorrectas: [
      "La estética y el color del carenado del robot",
      "La rapidez con la que se puede reprogramar el sistema"
    ]
  },
  {
    enunciado: "¿Qué es una articulación prismática?",
    correcta: "Aquella que permite un movimiento relativo de traslación entre dos eslabones",
    incorrectas: [
      "Aquella que permite la rotación de un eslabón sobre otro",
      "Un sensor que refracta la luz en siete colores"
    ]
  },
  {
    enunciado: "¿Qué es la carga nominal (payload) de un robot?",
    correcta: "El peso máximo que puede transportar el manipulador en el extremo de su muñeca manteniendo sus prestaciones",
    incorrectas: [
      "El peso del robot cuando no tiene herramientas instaladas",
      "La corriente eléctrica que consume el controlador a plena carga"
    ]
  },
  {
    enunciado: "¿Qué es el control de impedancia?",
    correcta: "Una estrategia de control que regula la relación entre la fuerza de contacto y el desplazamiento del robot",
    incorrectas: [
      "Un sistema para evitar que los cables tengan cortocircuitos",
      "La resistencia que ofrece el robot a ser programado"
    ]
  },
  {
    enunciado: "En robótica, ¿qué es la 'muñeca'?",
    correcta: "El conjunto de articulaciones finales (normalmente tres) destinadas a orientar la herramienta en el espacio",
    incorrectas: [
      "La articulación que une el brazo a la base fija",
      "Un repuesto de goma que protege los motores de la humedad"
    ]
  },
  {
    enunciado: "¿Qué es un efector final?",
    correcta: "Cualquier dispositivo acoplado a la muñeca del robot para realizar una tarea específica (pinza, herramienta, sensor)",
    incorrectas: [
      "El último paso de la programación de una secuencia",
      "El operario que pulsa el botón de inicio"
    ]
  },
  {
    enunciado: "¿Qué es el control punto a punto (PTP)?",
    correcta: "El robot se mueve de un punto a otro sin importar la trayectoria exacta seguida por el extremo",
    incorrectas: [
      "El robot debe seguir una línea recta perfecta entre dos puntos",
      "El robot solo puede moverse si el punto de destino está iluminado"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al control de trayectoria continua?",
    correcta: "El controlador asegura que el extremo del robot siga una curva espacial definida a una velocidad determinada",
    incorrectas: [
      "El robot nunca se detiene, moviéndose siempre en círculos",
      "El robot solo puede seguir trayectorias en el suelo"
    ]
  },
  {
    enunciado: "¿Qué es la resolución de un robot?",
    correcta: "El incremento mínimo de movimiento que el sistema de control puede detectar o ejecutar",
    incorrectas: [
      "El número de píxeles de la cámara de visión artificial",
      "La calidad del dibujo en los planos del fabricante"
    ]
  },
  {
    enunciado: "¿Qué es un sensor exteroceptivo?",
    correcta: "Aquel que capta información sobre el entorno del robot (visión, ultrasonidos, fuerza)",
    incorrectas: [
      "Aquel que mide el estado interno (posición de los motores, temperatura)",
      "Un sensor que solo funciona dentro de la carcasa del robot"
    ]
  },
  {
    enunciado: "¿Qué es un Resolver?",
    correcta: "Un sensor electromagnético rotativo que permite conocer la posición angular del eje del motor",
    incorrectas: [
      "Un algoritmo para solucionar errores de programación",
      "Un tipo de motor que funciona con corriente continua"
    ]
  },
  {
    enunciado: "¿Qué es la 'zona de seguridad' de un robot?",
    correcta: "El área delimitada por protecciones físicas o sensores donde el robot puede operar sin riesgo para las personas",
    incorrectas: [
      "La caja donde se guarda el robot cuando no se usa",
      "La temperatura ideal de trabajo en la nave industrial"
    ]
  },
  {
    enunciado: "¿Qué diferencia a un manipulador de un robot inteligente?",
    correcta: "El robot inteligente posee sensores y capacidad de procesamiento para adaptar su comportamiento ante cambios en el entorno",
    incorrectas: [
      "El manipulador tiene motores y el robot inteligente no",
      "Solo el robot inteligente puede estar hecho de metal"
    ]
  },
  {
    enunciado: "¿Qué es la visión artificial en robótica?",
    correcta: "Procesamiento de imágenes mediante ordenador para permitir al robot identificar piezas, posicionarse o inspeccionar calidad",
    incorrectas: [
      "Ponerle gafas de protección a los sensores ópticos",
      "La capacidad del robot para ver a través de las paredes"
    ]
  },
  {
    enunciado: "¿Qué es un grado de libertad de orientación?",
    correcta: "Cada uno de los movimientos (roll, pitch, yaw) que permiten posicionar angularmente la herramienta",
    incorrectas: [
      "La capacidad de desplazarse por el suelo de la fábrica",
      "El permiso para usar diferentes lenguajes de programación"
    ]
  },
  {
    enunciado: "¿Qué es la configuración polar o esférica (RRP)?",
    correcta: "Consta de dos articulaciones de rotación y una prismática, permitiendo trabajar en un volumen esférico",
    incorrectas: [
      "Aquella que solo permite movimientos en el polo norte",
      "Un robot que tiene forma de bola"
    ]
  },
  {
    enunciado: "¿Qué es un 'End-Effector' de tipo pinza?",
    correcta: "Un actuador diseñado para agarrar y soltar objetos mediante presión mecánica, neumática o por vacío",
    incorrectas: [
      "Un sensor que detecta si la pieza está terminada",
      "El último operario de la cadena de montaje"
    ]
  },
  {
    enunciado: "¿Qué es la cinemática directa?",
    correcta: "Cálculo de la posición y orientación del extremo a partir de los valores conocidos de las articulaciones",
    incorrectas: [
      "Mover el robot directamente con la mano",
      "El estudio de los costes directos de fabricación del robot"
    ]
  },
  {
    enunciado: "¿Qué es el tiempo de ciclo?",
    correcta: "Tiempo mínimo necesario para que el robot realice una tarea completa y regrese a la posición inicial",
    incorrectas: [
      "La vida útil de la batería del controlador",
      "El tiempo que tarda el robot en encenderse por la mañana"
    ]
  },
  {
    enunciado: "¿Qué es la 'autocolisión'?",
    correcta: "Situación en la que un eslabón del robot choca con otro eslabón de su propia estructura",
    incorrectas: [
      "Cuando dos robots diferentes chocan entre sí",
      "Cuando el robot golpea una caja de material"
    ]
  },
  {
    enunciado: "¿Qué es el mantenimiento preventivo en robótica?",
    correcta: "Conjunto de tareas (engrase, revisión de cables, cambio de baterías) realizadas periódicamente para evitar averías",
    incorrectas: [
      "Reparar el robot una vez que ya se ha roto",
      "Actualizar el software para que el robot sea más inteligente"
    ]
  },
  {
    enunciado: "¿Qué es un sistema de coordenadas de usuario (User Frame)?",
    correcta: "Un sistema de referencia definido por el programador sobre una pieza o mesa para facilitar la programación de trayectorias",
    incorrectas: [
      "El manual de instrucciones traducido al idioma del usuario",
      "La ropa de seguridad que debe llevar el operario"
    ]
  }
];