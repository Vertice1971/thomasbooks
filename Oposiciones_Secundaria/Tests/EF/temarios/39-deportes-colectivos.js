// 39-deportes-colectivos.js

var PREGUNTAS = [
  {
    enunciado: "Según la clasificación de Parlebas, ¿cuál es la lógica interna de los deportes colectivos de invasión como el balonmano o el hockey?",
    correcta: "Situación sociomotriz de cooperación-oposición (CAI: 110), con incertidumbre derivada de compañeros y adversarios en un medio estable.",
    incorrectas: [
      "Situación psicomotriz de alta incertidumbre ambiental donde la técnica es secundaria a la adaptación al medio.",
      "Situación sociomotriz de cooperación pura donde el objetivo es la armonía estética sin presencia de rivales."
    ]
  },
  {
    enunciado: "En la táctica colectiva de los deportes de invasión, el concepto de 'Amplitud' busca principalmente:",
    correcta: "Aprovechar todo el ancho del terreno de juego para separar las líneas defensivas del oponente y crear pasillos internos.",
    incorrectas: [
      "Aumentar la altura del salto de los jugadores para interceptar balones aéreos.",
      "Realizar el máximo número de pases posibles en el menor tiempo sin avanzar hacia la meta."
    ]
  },
  {
    enunciado: "En el reglamento de Baloncesto (FIBA), la 'Regla de los 24 segundos' tiene como objetivo primordial:",
    correcta: "Fomentar el dinamismo y la ofensividad, obligando al equipo con posesión a realizar un lanzamiento a canasta en ese tiempo.",
    incorrectas: [
      "Permitir que los jugadores descansen cada medio minuto para evitar lesiones por fatiga crónica.",
      "Limitar el número de faltas personales que un equipo puede cometer en cada cuarto."
    ]
  },
  {
    enunciado: "En el voleibol, el concepto de 'Especialización por Roles' implica que un 'Líbero' tiene prohibido reglamentariamente:",
    correcta: "Completar un golpe de ataque si el balón está por encima del borde superior de la red o realizar servicios.",
    incorrectas: [
      "Recibir el saque del equipo adversario o desplazarse a las zonas de defensa.",
      "Hablar con el entrenador durante los tiempos muertos o sustituir a un jugador de la zona de zagueros."
    ]
  },
  {
    enunciado: "La 'Comunicación Motriz' en los deportes de equipo se manifiesta técnicamente a través de:",
    correcta: "Acciones como el pase, el apoyo o el desmarque, que transmiten intenciones tácticas entre compañeros.",
    incorrectas: [
      "El uso de señales acústicas mediante silbatos electrónicos portados por los capitanes.",
      "La memorización de las jugadas en una pizarra antes de entrar al vestuario."
    ]
  },
  {
    enunciado: "En balonmano, la 'Defensa 6:0' se caracteriza por:",
    correcta: "Una disposición lineal de todos los jugadores defensores en la zona de 6 metros, priorizando la protección de la zona central.",
    incorrectas: [
      "Una presión individual en todo el campo para forzar el error en el saque de centro.",
      "Colocar a seis porteros dentro del área para impedir cualquier lanzamiento de larga distancia."
    ]
  },
  {
    enunciado: "En la biomecánica del golpeo de fútbol, ¿qué factor es determinante para imprimir una trayectoria curva al balón (efecto)?",
    correcta: "El impacto excéntrico respecto al centro de masas del balón para generar una rotación sobre su eje (Efecto Magnus).",
    incorrectas: [
      "La fuerza máxima isométrica del cuádriceps sin movimiento de la articulación de la cadera.",
      "El uso de botas de cuero natural que aumenten la temperatura del aire circundante al balón."
    ]
  },
  {
    enunciado: "En el reglamento de Rugby, un 'Melé' (Scrum) se utiliza para reiniciar el juego después de:",
    correcta: "Una infracción menor como un pase adelantado (Avant) o una caída accidental del balón hacia adelante.",
    incorrectas: [
      "Un ensayo marcado por el equipo visitante en la zona de marca contraria.",
      "La expulsión definitiva de un jugador por conducta antideportiva grave."
    ]
  },
  {
    enunciado: "La 'Táctica de Contracomunicación' en los deportes de oposición colectiva consiste en:",
    correcta: "El uso de fintas y engaños para transmitir información errónea a los adversarios sobre la acción motriz real.",
    incorrectas: [
      "Ignorar las instrucciones del entrenador para sorprender tanto a rivales como a compañeros.",
      "Cortar las líneas de comunicación visual mediante el uso de humo artificial en el pabellón."
    ]
  },
  {
    enunciado: "En el baloncesto, el 'Bloqueo Directo' (Pick and Roll) es una acción táctica coordinada entre:",
    correcta: "El jugador con balón y un compañero que interpone su cuerpo en la trayectoria del defensor del primero.",
    incorrectas: [
      "El entrenador y el árbitro para detener el tiempo reglamentario de juego.",
      "Dos defensores que intentan atrapar al atacante en una esquina del campo (Trap)."
    ]
  },
  {
    enunciado: "En el voleibol, el sistema de ataque '5-1' se define por la presencia de:",
    correcta: "Un solo colocador que distribuye el juego en todas las rotaciones y cinco posibles rematadores.",
    incorrectas: [
      "Cinco colocadores y un solo rematador encargado de finalizar todos los puntos del set.",
      "Una disposición defensiva donde cinco jugadores se sitúan en la red y uno en el fondo."
    ]
  },
  {
    enunciado: "En el fútbol sala, el 'Sistema 2-2' (cuadrado) es especialmente eficaz para:",
    correcta: "Equipos en fase de iniciación o para defensas cerradas, permitiendo un reparto equilibrado del espacio.",
    incorrectas: [
      "Realizar ataques rápidos de contraataque con un solo pívot avanzado permanentemente.",
      "Evitar que el portero pueda participar en el juego de ataque como jugador de campo."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Transición' en los deportes colectivos de invasión?",
    correcta: "La fase de cambio de mentalidad y organización táctica que ocurre inmediatamente después de recuperar o perder el balón.",
    incorrectas: [
      "El periodo de tiempo que transcurre entre la finalización de una temporada y el inicio de la siguiente.",
      "El desplazamiento de los jugadores desde el vestuario hasta el terreno de juego."
    ]
  },
  {
    enunciado: "En el reglamento de Balonmano, un jugador puede dar un máximo de:",
    correcta: "Tres pasos con el balón en las manos antes de botar, pasar o lanzar.",
    incorrectas: [
      "Diez pasos siempre que no mire al suelo durante el desplazamiento.",
      "Cinco pasos si el equipo adversario está en zona de defensa pasiva."
    ]
  },
  {
    enunciado: "En el béisbol, un 'Home Run' ocurre cuando el bateador:",
    correcta: "Golpea la pelota fuera de los límites del campo de juego (fair territory), permitiéndole recorrer todas las bases.",
    incorrectas: [
      "Logra llegar a la primera base antes de que el defensor atrape la pelota en el aire.",
      "Falla tres veces consecutivas el intento de golpeo y es eliminado por el pitcher."
    ]
  },
  {
    enunciado: "La 'Defensa Individual' en deportes colectivos se basa en que:",
    correcta: "Cada jugador tiene la responsabilidad directa de marcar a un oponente específico durante la fase defensiva.",
    incorrectas: [
      "Cada jugador defiende una zona geométrica del campo independientemente de dónde estén los rivales.",
      "Solo el portero tiene la obligación de defender, mientras el resto espera el contraataque."
    ]
  },
  {
    enunciado: "En el reglamento de Fútbol (IFAB), el 'Fuera de Juego' se señala cuando el atacante:",
    correcta: "Está en campo contrario y más cerca de la línea de meta que el balón y el penúltimo adversario en el momento del pase.",
    incorrectas: [
      "Se encuentra en su propio campo pero corre más rápido que los defensores rivales.",
      "Toca el balón con la mano de forma accidental dentro del área de penalti propia."
    ]
  },
  {
    enunciado: "¿Cuál es la función del 'Pívot' en un sistema táctico de baloncesto?",
    correcta: "Jugar habitualmente cerca de la canasta para rebotear, taponar y realizar tiros de corta distancia.",
    incorrectas: [
      "Subir el balón desde el campo propio y organizar los sistemas de ataque estático.",
      "Encargarse exclusivamente de lanzar tiros libres cuando hay una falta técnica del entrenador rival."
    ]
  },
  {
    enunciado: "En el voleibol, la 'Rotación' obligatoria de los jugadores se realiza en sentido:",
    correcta: "De las agujas del reloj, cada vez que el equipo recupera el derecho al saque.",
    incorrectas: [
      "Contrario a las agujas del reloj, al inicio de cada set de forma aleatoria.",
      "Lateral, intercambiando posiciones solo con los jugadores que miden lo mismo."
    ]
  },
  {
    enunciado: "En el balonmano, el lanzamiento de '7 metros' se concede cuando:",
    correcta: "Se frustra una clara ocasión de gol mediante una infracción en cualquier parte del terreno de juego.",
    incorrectas: [
      "Un jugador defensor pisa accidentalmente la línea del área de portería sin interferir en el juego.",
      "El portero sale de su área para realizar un pase largo a un extremo."
    ]
  },
  {
    enunciado: "La 'Profundidad' como principio táctico ofensivo busca:",
    correcta: "Alejar a los defensores de su propia meta para crear espacios libres a la espalda de la defensa.",
    incorrectas: [
      "Que el balón se mantenga siempre cerca de la línea de banda para evitar robos centrales.",
      "Aumentar el peso de los jugadores para que no puedan ser desplazados por el viento."
    ]
  },
  {
    enunciado: "En el baloncesto, una 'Falta Personal' cometida sobre un jugador que está tirando de tres puntos conlleva:",
    correcta: "Tres tiros libres si el lanzamiento no entró en la canasta.",
    incorrectas: [
      "La expulsión inmediata del jugador defensor por el resto del partido.",
      "Un solo tiro libre y la posesión del balón para el equipo atacante."
    ]
  },
  {
    enunciado: "En la táctica de fútbol, el 'Repliegue' es la acción defensiva que consiste en:",
    correcta: "Retornar rápidamente a las posiciones defensivas preestablecidas tras perder la posesión del balón.",
    incorrectas: [
      "Avanzar todas las líneas hacia el campo contrario para asfixiar la salida del rival.",
      "Cambiar a todos los jugadores del equipo titular por los suplentes a la vez."
    ]
  },
  {
    enunciado: "En el voleibol, un 'Zaguero' tiene prohibido:",
    correcta: "Saltar para realizar un ataque por delante de la línea de tres metros si el balón está por encima de la red.",
    incorrectas: [
      "Realizar un toque de dedos para pasar el balón a un compañero de la zona delantera.",
      "Participar en la recepción del saque o realizar una defensa en plancha."
    ]
  },
  {
    enunciado: "El 'Ataque en Apoyo' se diferencia del 'Ataque en Ruptura' en que el primero:",
    correcta: "Ofrece opciones de pase al poseedor del balón por detrás o a los lados de su posición.",
    incorrectas: [
      "Busca superar la última línea defensiva mediante un desmarque en velocidad hacia la meta.",
      "Se realiza exclusivamente mediante lanzamientos de larga distancia sin intervención de compañeros."
    ]
  },
  {
    enunciado: "En el reglamento de Rugby, el balón solo puede ser pasado con las manos hacia:",
    correcta: "Atrás o de forma lateral; nunca hacia adelante.",
    incorrectas: [
      "Adelante, siempre que el receptor esté en el suelo.",
      "Cualquier dirección, siempre que no se use el pie para golpear el balón."
    ]
  },
  {
    enunciado: "En el baloncesto, el 'Doble Bote' (dobles) se sanciona cuando el jugador:",
    correcta: "Bota el balón con las dos manos simultáneamente o vuelve a botar tras haber detenido el balón con ambas manos.",
    incorrectas: [
      "Realiza un cambio de mano por delante del cuerpo de forma muy rápida.",
      "Bota el balón tan alto que este supera la altura de su propia cabeza."
    ]
  },
  {
    enunciado: "La 'Basculación' defensiva es un movimiento coordinado que consiste en:",
    correcta: "Desplazar el bloque defensivo hacia el lado del campo donde se encuentra el balón para reducir espacios.",
    incorrectas: [
      "Hacer que todos los jugadores giren sobre sí mismos para no perder de vista el móvil.",
      "Moverse exclusivamente hacia adelante y hacia atrás en una línea recta imaginaria."
    ]
  },
  {
    enunciado: "En el voleibol, el bloqueo se considera completado cuando:",
    correcta: "Uno o varios jugadores delanteros interceptan el balón que viene del campo contrario por encima de la red.",
    incorrectas: [
      "El líbero toca el balón con los pies para evitar que este caiga en el suelo propio.",
      "El entrenador pide un tiempo muerto justo antes de que el rival remate."
    ]
  },
  {
    enunciado: "En el balonmano, un 'Golpe Franco' se ejecuta desde:",
    correcta: "El lugar donde se cometió la infracción, fuera de la línea de 9 metros si la falta fue dentro de esa zona.",
    incorrectas: [
      "El centro del campo, con todos los jugadores sentados en el suelo.",
      "La portería contraria, sin que el portero pueda intentar parar el balón."
    ]
  },
  {
    enunciado: "La 'Estrategia' en los deportes colectivos se diferencia de la 'Táctica' en que la primera es:",
    correcta: "La planificación previa al encuentro (alineación, estudio del rival, jugadas ensayadas).",
    incorrectas: [
      "La respuesta motriz inmediata e improvisada ante una situación imprevista del juego.",
      "El reglamento técnico que los jugadores deben leer durante los descansos."
    ]
  },
  {
    enunciado: "En el reglamento de béisbol, un 'Strike' se anota cuando el bateador:",
    correcta: "Intenta golpear la pelota y falla, o cuando la pelota pasa por la zona de strike y no intenta batear.",
    incorrectas: [
      "Consigue golpear la pelota y corre hacia la tercera base directamente.",
      "Lanza el bate hacia el público de forma accidental tras un giro completo."
    ]
  },
  {
    enunciado: "En el fútbol, la 'Permuta' es una acción táctica defensiva donde:",
    correcta: "Un jugador que ha sido superado ocupa el lugar del compañero que salió a ayudarle.",
    incorrectas: [
      "Se intercambia el balón oficial por uno de repuesto porque el primero se ha desinflado.",
      "El capitán decide cambiar de portería al ganar el sorteo inicial."
    ]
  },
  {
    enunciado: "En el baloncesto, la 'Falta Antideportiva' se señala cuando:",
    correcta: "Existe un contacto excesivo o no se tiene intención legítima de jugar directamente el balón.",
    incorrectas: [
      "Un jugador encesta desde su propio campo de forma involuntaria.",
      "El balón sale por la línea lateral tras tocar el pie de un árbitro."
    ]
  },
  {
    enunciado: "La 'Ayuda Defensiva' en deportes de invasión requiere:",
    correcta: "El abandono momentáneo del propio par para cubrir la progresión de un atacante libre de marca.",
    incorrectas: [
      "Pedir al público que anime más fuerte para intimidar al equipo que tiene el balón.",
      "Que los jugadores suplentes entren al campo sin permiso para detener un contraataque."
    ]
  },
  {
    enunciado: "En el voleibol, un equipo gana un set (excepto el 5º) cuando llega a:",
    correcta: "25 puntos con una ventaja mínima de 2 puntos.",
    incorrectas: [
      "15 puntos independientemente de la ventaja que tenga sobre el rival.",
      "100 puntos o cuando se agota el tiempo de 60 minutos de juego."
    ]
  },
  {
    enunciado: "En el balonmano, el 'Pasivo' es una advertencia arbitral que se da cuando:",
    correcta: "El equipo atacante no muestra una intención clara de lanzar a portería o progresar.",
    incorrectas: [
      "El portero tarda más de 5 segundos en sacar el balón de su área.",
      "Los jugadores se quedan quietos en el centro del campo para descansar."
    ]
  },
  {
    enunciado: "El 'Desmarque de Apoyo' busca:",
    correcta: "Facilitar la conservación del balón ofreciendo una línea de pase segura al poseedor.",
    incorrectas: [
      "Superar a la defensa mediante una carrera explosiva hacia el área penal.",
      "Engañar al árbitro simulando una falta para obtener un tiro libre."
    ]
  },
  {
    enunciado: "En el fútbol, el 'Saque de Esquina' (córner) se concede cuando el balón cruza la línea de meta tras haber sido tocado por última vez por:",
    correcta: "Un jugador del equipo defensor.",
    incorrectas: [
      "Un jugador del equipo atacante.",
      "El árbitro principal mientras se encontraba dentro del área pequeña."
    ]
  },
  {
    enunciado: "Un factor determinante en la eficacia de los deportes colectivos es la 'Cohesión Grupal', que se define como:",
    correcta: "El grado de unión y compromiso de los miembros del equipo hacia un objetivo común.",
    incorrectas: [
      "La suma exacta de las alturas de todos los jugadores dividida por el número de camisetas.",
      "La capacidad de los jugadores para comer exactamente lo mismo antes de un partido."
    ]
  }
];