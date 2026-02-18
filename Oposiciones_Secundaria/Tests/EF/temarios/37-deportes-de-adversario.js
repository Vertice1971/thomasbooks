// 37-deportes-de-adversario.js

var PREGUNTAS = [
  {
    enunciado: "Según la clasificación de Parlebas, ¿qué define la lógica interna de un deporte de adversario como el tenis o el judo?",
    correcta: "Situación sociomotriz de oposición (CAI: 010), caracterizada por un duelo lúdico con incertidumbre centrada en el adversario.",
    incorrectas: [
      "Situación de cooperación-oposición donde la incertidumbre recae exclusivamente en el medio físico.",
      "Situación psicomotriz donde no existe interacción motriz con otros participantes."
    ]
  },
  {
    enunciado: "En el bádminton, ¿cuál es la función biomecánica de realizar el golpeo en el punto más alto posible (fase de asalto)?",
    correcta: "Aumentar el ángulo de picado del volante y reducir el tiempo de reacción del adversario.",
    incorrectas: [
      "Permitir que el volante planee más tiempo debido a la menor densidad del aire en altura.",
      "Evitar que las plumas del volante se dañen por el contacto con el suelo."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Centro de Gravedad' en la lucha o judo durante la fase de desequilibrio (Kuzushi)?",
    correcta: "El punto sobre el cual actúa la gravedad; desplazarlo fuera de la base de sustentación del oponente es clave para la proyección.",
    incorrectas: [
      "El punto exacto donde se anuda el cinturón reglamentario (Obi).",
      "La capacidad del luchador para concentrar su mente en un solo pensamiento."
    ]
  },
  {
    enunciado: "En el tenis, el efecto 'Topspin' (rotación hacia adelante) provoca que la pelota:",
    correcta: "Caiga más rápido por la diferencia de presiones (Efecto Magnus) y rebote con mayor altura y velocidad.",
    incorrectas: [
      "Flote en el aire durante más tiempo desafiando las leyes de la gravedad.",
      "Se detenga en seco inmediatamente después de tocar el suelo de la pista."
    ]
  },
  {
    enunciado: "En el reglamento de esgrima, el concepto de 'Prioridad' o derecho a la estocada significa que:",
    correcta: "El tirador que inicia el ataque correctamente tiene la prioridad de puntuación sobre un contraataque directo.",
    incorrectas: [
      "El tirador de mayor estatura siempre tiene derecho a tocar primero.",
      "Está prohibido tocar al adversario si este se encuentra de espaldas."
    ]
  },
  {
    enunciado: "En el bádminton, el servicio se considera legal si el golpeo al volante se realiza:",
    correcta: "Por debajo de la cintura y con la cabeza de la raqueta claramente por debajo de la mano.",
    incorrectas: [
      "Por encima de los hombros para imprimir la máxima velocidad inicial.",
      "Saltando de forma que ambos pies pierdan contacto con el suelo en el momento del impacto."
    ]
  },
  {
    enunciado: "La 'Táctica de Anticipación' en deportes de raqueta consiste en:",
    correcta: "Leer los índices cinemáticos del adversario (posición del hombro, pies) para predecir la trayectoria del móvil.",
    incorrectas: [
      "Gritar antes de golpear la bola para asustar al oponente y que falle su respuesta.",
      "Llegar al pabellón media hora antes de que empiece el partido oficial."
    ]
  },
  {
    enunciado: "En el judo, ¿cuál es el objetivo de un 'Uke' durante la práctica técnica?",
    correcta: "Ser el sujeto que recibe la técnica, manteniendo la actitud adecuada para facilitar el aprendizaje del compañero.",
    incorrectas: [
      "Ser el juez principal que decide quién gana el combate por puntos.",
      "Realizar el máximo número de llaves de estrangulación en el menor tiempo posible."
    ]
  },
  {
    enunciado: "En el tenis de mesa, el efecto 'Backspin' o cortado busca:",
    correcta: "Que la pelota frene su avance tras el bote y tienda a quedarse en la red del adversario al ser golpeada.",
    incorrectas: [
      "Aumentar la velocidad lineal de la pelota hasta superar los 200 km/h.",
      "Que la pelota cambie de color debido a la fricción con el aire."
    ]
  },
  {
    enunciado: "¿Cuál es la función de la 'Línea de Fondo' en la táctica de deportes de adversario de red?",
    correcta: "Actuar como referencia de profundidad para obligar al oponente a retroceder y generar espacios cortos.",
    incorrectas: [
      "Es el lugar donde los jugadores deben sentarse cuando el árbitro pide un tiempo muerto.",
      "Marcar el límite donde está permitido utilizar las manos para tocar el móvil."
    ]
  },
  {
    enunciado: "En los deportes de lucha, el concepto de 'Esquiva' se diferencia del 'Bloqueo' en que:",
    correcta: "La esquiva evita el contacto mediante el desplazamiento del cuerpo, manteniendo la inercia para un contraataque.",
    incorrectas: [
      "El bloqueo es ilegal en todas las modalidades de lucha olímpica.",
      "La esquiva requiere cerrar los ojos en el momento del impacto del adversario."
    ]
  },
  {
    enunciado: "En el reglamento de tenis, un 'Let' (o neto) en el servicio ocurre cuando:",
    correcta: "La pelota toca la red y cae en el cuadro de saque correspondiente; el servicio se repite sin penalización.",
    incorrectas: [
      "El jugador falla los dos intentos de saque y pierde el punto automáticamente.",
      "La raqueta se escapa de la mano del jugador y golpea la red."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Empuñadura' (Grip) en la técnica de los deportes de raqueta?",
    correcta: "Determina el ángulo de la cara de la raqueta y la movilidad de la muñeca para los diferentes tipos de golpeo.",
    incorrectas: [
      "Sirve para que el sudor no estropee la madera de la raqueta tras el ejercicio.",
      "Es puramente estética y no influye en la dirección que toma el móvil."
    ]
  },
  {
    enunciado: "En el bádminton, el golpe de 'Clear' tiene como objetivo táctico:",
    correcta: "Enviar el volante al fondo de la pista contraria para ganar tiempo y obligar al rival a desplazarse.",
    incorrectas: [
      "Golpear el volante lo más flojo posible para que caiga justo pegado a la red.",
      "Realizar un remate picado que busque el cuerpo del adversario."
    ]
  },
  {
    enunciado: "La 'Distancia de Combate' (Ma-ai) en las artes marciales es:",
    correcta: "El espacio óptimo que permite atacar con éxito o defenderse eficazmente de las acciones del oponente.",
    incorrectas: [
      "La longitud total del tatami medida de esquina a esquina.",
      "La distancia mínima que debe haber entre el público y los combatientes."
    ]
  },
  {
    enunciado: "En el tenis de mesa, si la pelota toca el borde de la mesa (canto) en la superficie superior, el golpe es:",
    correcta: "Válido y el juego continúa; si toca el lateral de la mesa, se considera fuera.",
    incorrectas: [
      "Nulo y se debe repetir el punto desde el servicio.",
      "Falta directa del jugador que ha realizado el envío."
    ]
  },
  {
    enunciado: "Un 'Ippon' en judo se consigue cuando:",
    correcta: "Se proyecta al adversario sobre su espalda con fuerza, velocidad y control, o mediante inmovilización o sumisión.",
    incorrectas: [
      "El adversario sale del área de combate por voluntad propia tres veces.",
      "El combate dura más de diez minutos sin que nadie consiga puntuar."
    ]
  },
  {
    enunciado: "En la esgrima, la 'Daga' o el arma blanca se utiliza en la modalidad de Florete para tocar únicamente en:",
    correcta: "El tronco (incluyendo el cuello pero excluyendo cabeza y extremidades).",
    incorrectas: [
      "Cualquier parte del cuerpo, desde la punta del pie hasta la máscara.",
      "Exclusivamente en las manos y los antebrazos del rival."
    ]
  },
  {
    enunciado: "El 'Footwork' o juego de pies en el boxeo o bádminton es vital para:",
    correcta: "Mantener el equilibrio dinámico y situar el cuerpo en la posición óptima de golpeo en el menor tiempo.",
    incorrectas: [
      "Hacer ruido sobre el parqué para distraer la atención auditiva del juez.",
      "Ahorrar energía evitando cualquier tipo de desplazamiento lateral."
    ]
  },
  {
    enunciado: "En el reglamento de bádminton, si el volante toca la red durante un intercambio y pasa al campo contrario:",
    correcta: "El golpe es válido y el juego continúa con normalidad.",
    incorrectas: [
      "Se considera falta y pierde el punto el jugador que lanzó el volante.",
      "El punto se detiene y el árbitro lanza una moneda al aire para decidir."
    ]
  },
  {
    enunciado: "¿Qué es una 'Finta' en el contexto de los deportes de adversario?",
    correcta: "Un movimiento técnico falso destinado a provocar una reacción defensiva en el oponente para crear una apertura.",
    incorrectas: [
      "Una técnica prohibida que conlleva la expulsión inmediata del deportista.",
      "El momento en que el jugador decide beber agua durante el descanso."
    ]
  },
  {
    enunciado: "En el tenis, el sistema de puntuación (15, 30, 40, Juego) tiene su origen histórico probable en:",
    correcta: "El uso de cuadrantes de reloj para llevar la cuenta en los antiguos juegos de palma.",
    incorrectas: [
      "El número de metros que medía la primera pista de tenis construida en Francia.",
      "La cantidad de dinero que se pagaba por cada bola perdida en el siglo XIX."
    ]
  },
  {
    enunciado: "La 'Posición de Base' o de espera en deportes de raqueta requiere:",
    correcta: "Rodillas semiflexionadas, peso en la parte anterior de los pies y raqueta frente al cuerpo.",
    incorrectas: [
      "Estar sentado en un banco esperando la señal de inicio del árbitro.",
      "Piernas totalmente estiradas y bloqueadas para evitar movimientos bruscos."
    ]
  },
  {
    enunciado: "En la lucha grecorromana, a diferencia de la lucha libre, está prohibido:",
    correcta: "Atacar o utilizar las piernas para realizar cualquier técnica de derribo o defensa.",
    incorrectas: [
      "Tocar al adversario con las manos por encima de la cintura.",
      "Hablar con el entrenador durante los periodos de descanso."
    ]
  },
  {
    enunciado: "El golpe de 'Drop' o dejada en bádminton busca:",
    correcta: "Que el volante caiga lo más cerca posible de la red en el campo contrario.",
    incorrectas: [
      "Enviar el volante fuera de los límites del campo para ganar tiempo.",
      "Romper las plumas del volante para que el rival no pueda jugar bien."
    ]
  },
  {
    enunciado: "En el reglamento de pádel, el servicio debe realizarse siempre:",
    correcta: "Por debajo de la cintura y tras un bote previo del balón tras la línea de saque.",
    incorrectas: [
      "Lanzando la pelota al aire y golpeándola por encima de la cabeza.",
      "Sin que la pelota toque el suelo en ningún momento antes del impacto."
    ]
  },
  {
    enunciado: "¿Qué es el 'Check' o control en deportes de combate de contacto?",
    correcta: "La acción defensiva de bloquear un golpe del adversario con una parte resistente del cuerpo (ej. la tibia).",
    incorrectas: [
      "Mirar el reloj del pabellón para saber cuánto tiempo queda de combate.",
      "Preguntar al adversario si se encuentra bien después de un intercambio."
    ]
  },
  {
    enunciado: "En el tenis, el 'Tie-break' se juega cuando el set llega a un empate a:",
    correcta: "6-6 en juegos.",
    incorrectas: [
      "40-40 en el primer juego del partido.",
      "10-10 en juegos durante el quinto set exclusivamente."
    ]
  },
  {
    enunciado: "La 'Lateralidad' en el esgrima es una ventaja táctica cuando:",
    correcta: "Un tirador zurdo se enfrenta a uno diestro, debido a la falta de hábito en los ángulos de ataque opuestos.",
    incorrectas: [
      "El deportista utiliza ambas manos simultáneamente para empuñar el sable.",
      "El tirador decide competir de espaldas al adversario."
    ]
  },
  {
    enunciado: "En el bádminton, se considera que el volante está fuera si:",
    correcta: "La base del volante toca el suelo completamente fuera de las líneas limítrofes.",
    incorrectas: [
      "Las plumas del volante tocan la línea pero la base cae fuera.",
      "El volante toca el techo del pabellón y vuelve a caer dentro del campo."
    ]
  },
  {
    enunciado: "En la táctica del judo, el 'Ashi-waza' se refiere a:",
    correcta: "Técnicas realizadas predominantemente con el uso de las piernas y los pies.",
    incorrectas: [
      "Técnicas de estrangulación realizadas con el uso del cinturón.",
      "El saludo inicial que se realiza antes de pisar el tatami."
    ]
  },
  {
    enunciado: "En el tenis, el 'Drive' es el golpe que se realiza:",
    correcta: "Por el lado dominante del jugador (derecha para diestros, revés para zurdos que usan esa cara).",
    incorrectas: [
      "Exclusivamente con la mano no dominante para sorprender al rival.",
      "Solo cuando la pelota viene a una altura superior a los 2 metros."
    ]
  },
  {
    enunciado: "¿Cuál es la función del 'Árbitro de Silla' en un partido de tenis profesional?",
    correcta: "Es la máxima autoridad en la pista, encargado de anunciar los puntos y resolver disputas sobre el reglamento.",
    incorrectas: [
      "Recoger las pelotas que quedan en la red para dárselas a los jugadores.",
      "Vender entradas y bebidas al público durante los descansos."
    ]
  },
  {
    enunciado: "En el bádminton, el 'Smash' o remate es un golpe:",
    correcta: "Descendente y potente realizado por encima de la cabeza.",
    incorrectas: [
      "Defensivo que busca elevar mucho el volante para que caiga vertical.",
      "Que se realiza obligatoriamente golpeando el volante contra la red propia."
    ]
  },
  {
    enunciado: "En la esgrima, el 'Tocado' se registra electrónicamente cuando:",
    correcta: "La punta del arma ejerce una presión determinada sobre la superficie válida de la chaqueta metálica.",
    incorrectas: [
      "El árbitro grita '¡Touché!' al ver que los tiradores se han abrazado.",
      "El arma se rompe tras impactar con fuerza contra el suelo."
    ]
  },
  {
    enunciado: "La 'Resistencia Anaeróbica Aláctica' es clave en los deportes de adversario para:",
    correcta: "Realizar esfuerzos explosivos de muy corta duración (golpeos, proyecciones) sin acumulación de fatiga inmediata.",
    incorrectas: [
      "Mantener un trote suave durante más de 3 horas seguidas en la pista.",
      "Poder aguantar la respiración bajo el agua durante los descansos."
    ]
  },
  {
    enunciado: "En el reglamento de tenis de mesa, un jugador pierde el punto si:",
    correcta: "Toca la superficie de juego con la mano libre mientras la pelota está en juego.",
    incorrectas: [
      "La pelota bota dos veces en el campo del adversario tras un golpeo válido.",
      "Suda en exceso y moja accidentalmente su propia camiseta."
    ]
  },
  {
    enunciado: "El 'Uchi-komi' en la práctica del judo consiste en:",
    correcta: "La repetición rítmica de la entrada de una técnica sin llegar a completar la proyección.",
    incorrectas: [
      "El combate real a máxima intensidad para decidir el ganador de una medalla.",
      "La limpieza profunda del tatami al finalizar la jornada de entrenamiento."
    ]
  },
  {
    enunciado: "En el bádminton, si el marcador llega a 29-29, el ganador del set es:",
    correcta: "El primero que logre anotar el punto número 30.",
    incorrectas: [
      "El jugador que tenga el volante más nuevo en ese momento.",
      "Se declara empate y se juega un tercer set de desempate."
    ]
  },
  {
    enunciado: "La 'Concentración' en deportes de adversario es fundamental para:",
    correcta: "Mantener el foco en el estímulo relevante (el móvil o el rival) y gestionar el estrés de la competición.",
    incorrectas: [
      "Poder memorizar el nombre de todos los espectadores de la primera fila.",
      "Ignorar por completo las indicaciones del entrenador durante los descansos."
    ]
  }
];