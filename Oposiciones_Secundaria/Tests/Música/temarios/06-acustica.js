// 06-acustica.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define físicamente el sonido en el contexto de la acústica?",
    correcta: "Una onda mecánica longitudinal que se propaga a través de un medio elástico debido a una vibración.",
    incorrectas: [
      "Una onda electromagnética que puede viajar por el vacío absoluto a la velocidad de la luz.",
      "Un flujo de partículas llamadas fotones que chocan contra el tímpano de forma rítmica."
    ]
  },
  {
    enunciado: "La 'Frecuencia' de una onda sonora determina la cualidad musical de:",
    correcta: "La altura (si el sonido es agudo o grave).",
    incorrectas: [
      "La intensidad o volumen del sonido.",
      "El timbre o color característico del instrumento."
    ]
  },
  {
    enunciado: "¿Cuál es la velocidad aproximada del sonido en el aire a una temperatura de 20°C?",
    correcta: "343 metros por segundo.",
    incorrectas: [
      "1.500 metros por segundo.",
      "300.000 kilómetros por segundo."
    ]
  },
  {
    enunciado: "El fenómeno por el cual un cuerpo empieza a vibrar al recibir ondas sonoras de su misma frecuencia natural se denomina:",
    correcta: "Resonancia.",
    incorrectas: [
      "Reverberación.",
      "Efecto Doppler."
    ]
  },
  {
    enunciado: "¿Qué unidad se utiliza habitualmente para medir el nivel de intensidad sonora?",
    correcta: "Decibelio (dB).",
    incorrectas: [
      "Hercio (Hz).",
      "Vatio por metro cuadrado (W/m²)."
    ]
  },
  {
    enunciado: "El 'Timbre' de un sonido depende fundamentalmente de:",
    correcta: "La cantidad y la intensidad relativa de los armónicos que acompañan a la frecuencia fundamental.",
    incorrectas: [
      "La amplitud máxima de la onda senoidal pura.",
      "La duración total de la vibración desde el ataque hasta la extinción."
    ]
  },
  {
    enunciado: "¿Qué ocurre con la velocidad del sonido cuando aumenta la densidad y elasticidad del medio (por ejemplo, al pasar del aire al acero)?",
    correcta: "La velocidad aumenta significativamente.",
    incorrectas: [
      "La velocidad disminuye hasta casi detenerse.",
      "La velocidad se mantiene constante independientemente del medio."
    ]
  },
  {
    enunciado: "La serie de armónicos de un sonido fundamental de 100 Hz tendría como segundo y tercer armónico las frecuencias de:",
    correcta: "200 Hz y 300 Hz.",
    incorrectas: [
      "150 Hz y 200 Hz.",
      "400 Hz y 800 Hz."
    ]
  },
  {
    enunciado: "El fenómeno de la 'Reverberación' consiste en:",
    correcta: "La permanencia del sonido en un espacio cerrado tras cesar la fuente, debido a múltiples reflexiones.",
    incorrectas: [
      "La repetición nítida de un sonido tras rebotar en una superficie a más de 17 metros.",
      "La distorsión de la frecuencia cuando la fuente sonora se mueve hacia el oyente."
    ]
  },
  {
    enunciado: "Un sonido cuya forma de onda es irregular y no presenta una periodicidad definida se clasifica musicalmente como:",
    correcta: "Ruido.",
    incorrectas: [
      "Nota pura.",
      "Acorde consonante."
    ]
  },
  {
    enunciado: "El 'Efecto Doppler' explica por qué:",
    correcta: "Percibimos un sonido más agudo cuando la fuente se acerca y más grave cuando se aleja.",
    incorrectas: [
      "El sonido desaparece cuando entramos en una habitación insonorizada.",
      "Los murciélagos pueden volar en la oscuridad total sin chocar."
    ]
  },
  {
    enunciado: "¿Qué es la 'Longitud de Onda'?",
    correcta: "La distancia física entre dos puntos idénticos sucesivos de una onda (ej. de cresta a cresta).",
    incorrectas: [
      "El tiempo que tarda una vibración completa en realizarse.",
      "La altura máxima que alcanza la vibración respecto al punto de equilibrio."
    ]
  },
  {
    enunciado: "La 'Amplitud' de la onda sonora está directamente relacionada con:",
    correcta: "La intensidad o volumen del sonido.",
    incorrectas: [
      "La afinación de la nota musical.",
      "La duración del sonido en el tiempo."
    ]
  },
  {
    enunciado: "El intervalo de 'Octava' supone físicamente:",
    correcta: "Duplicar la frecuencia del sonido original (proporción 2:1).",
    incorrectas: [
      "Triplicar la amplitud de la onda sonora.",
      "Sumar 500 hercios a la frecuencia fundamental."
    ]
  },
  {
    enunciado: "La 'Reflexión' del sonido se produce cuando la onda sonora:",
    correcta: "Choca contra un obstáculo y cambia de dirección volviendo al medio de origen.",
    incorrectas: [
      "Pasa de un medio a otro cambiando su velocidad y dirección.",
      "Es absorbida por completo por un material poroso como la lana de roca."
    ]
  },
  {
    enunciado: "¿A partir de qué distancia mínima del obstáculo se percibe el fenómeno del 'Eco'?",
    correcta: "Aproximadamente 17 metros.",
    incorrectas: [
      "Aproximadamente 2 metros.",
      "Aproximadamente 100 metros."
    ]
  },
  {
    enunciado: "El 'Envolvente' de un sonido (ADSR) describe su evolución temporal en cuatro fases:",
    correcta: "Ataque (Attack), Decaimiento (Decay), Sostenimiento (Sustain) y Relajación (Release).",
    incorrectas: [
      "Agudo, Dinámico, Suave y Rápido.",
      "Afinación, Densidad, Serie y Resonancia."
    ]
  },
  {
    enunciado: "¿Qué es un 'Nodo' en una onda estacionaria (como la de una cuerda de guitarra)?",
    correcta: "El punto de la cuerda donde la amplitud de la vibración es siempre cero.",
    incorrectas: [
      "El punto donde la cuerda alcanza su máxima oscilación vertical.",
      "El nombre técnico de la clavija que tensa la cuerda."
    ]
  },
  {
    enunciado: "La 'Difracción' sonora es la propiedad que permite al sonido:",
    correcta: "Bordear obstáculos o pasar a través de aberturas y seguir propagándose.",
    incorrectas: [
      "Convertirse en luz cuando la frecuencia supera los 20.000 Hz.",
      "Atravesar paredes de plomo sin perder intensidad."
    ]
  },
  {
    enunciado: "Un 'Sonido Puro' o tono puro se representa gráficamente como una:",
    correcta: "Onda senoidal.",
    incorrectas: [
      "Onda cuadrada.",
      "Onda en diente de sierra."
    ]
  },
  {
    enunciado: "En acústica arquitectónica, el 'Tiempo de Reverberación' (RT60) es el tiempo que tarda el sonido en caer:",
    correcta: "60 decibelios por debajo de su nivel original.",
    incorrectas: [
      "A la mitad de su frecuencia fundamental.",
      "Hasta ser completamente inaudible para un perro."
    ]
  },
  {
    enunciado: "¿Qué determina la 'Frecuencia Fundamental' en un instrumento de cuerda?",
    correcta: "La longitud, la tensión, la masa por unidad de longitud y la elasticidad de la cuerda.",
    incorrectas: [
      "Únicamente el color de la madera del cuerpo del instrumento.",
      "La fuerza con la que el público aplaude al finalizar la pieza."
    ]
  },
  {
    enunciado: "Los 'Infrasonidos' son aquellos cuya frecuencia es:",
    correcta: "Inferior a 20 Hz, siendo inaudibles para el oído humano.",
    incorrectas: [
      "Superior a 20.000 Hz.",
      "Exactamente igual a 440 Hz."
    ]
  },
  {
    enunciado: "La 'Refracción' del sonido ocurre habitualmente en la atmósfera debido a:",
    correcta: "Diferencias de temperatura en las capas de aire, que curvan la trayectoria de la onda.",
    incorrectas: [
      "El rebote del sonido en las nubes durante una tormenta.",
      "La presencia de pájaros que absorben las frecuencias agudas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Umbral de Audición'?",
    correcta: "La intensidad mínima necesaria para que un sonido sea percibido por el oído humano.",
    incorrectas: [
      "La nota más aguda que puede cantar una soprano profesional.",
      "La distancia máxima a la que se puede escuchar una orquesta."
    ]
  },
  {
    enunciado: "La 'Absorción Acústica' es la capacidad de un material para:",
    correcta: "Transformar la energía sonora en energía calorífica, evitando la reflexión.",
    incorrectas: [
      "Almacenar el sonido para reproducirlo varias horas después.",
      "Aumentar el volumen de los instrumentos sin usar electricidad."
    ]
  },
  {
    enunciado: "En un tubo abierto, la frecuencia del sonido producido es:",
    correcta: "Inversamente proporcional a la longitud del tubo.",
    incorrectas: [
      "Directamente proporcional al peso del metal del tubo.",
      "Independiente de si el tubo es largo o corto."
    ]
  },
  {
    enunciado: "¿Qué es la 'Fase' de una onda sonora?",
    correcta: "La posición relativa de la onda en un ciclo determinado respecto a un punto de referencia.",
    incorrectas: [
      "El momento en que el músico decide dejar de tocar.",
      "La parte de la ópera donde el protagonista canta solo."
    ]
  },
  {
    enunciado: "El fenómeno de 'Batimiento' ocurre cuando:",
    correcta: "Suenan simultáneamente dos frecuencias muy cercanas, produciendo una variación periódica de amplitud.",
    incorrectas: [
      "Un percusionista golpea un bombo con demasiada fuerza.",
      "El sonido desaparece por completo debido al vacío."
    ]
  },
  {
    enunciado: "La 'Psicoacústica' estudia:",
    correcta: "La respuesta psicológica y la percepción subjetiva humana ante los estímulos sonoros.",
    incorrectas: [
      "La reparación de instrumentos musicales antiguos.",
      "La composición de bandas sonoras para películas de terror."
    ]
  },
  {
    enunciado: "¿Cuál es la frecuencia del 'La' estándar utilizado para la afinación orquestal?",
    correcta: "440 Hz.",
    incorrectas: [
      "220 Hz.",
      "1.000 Hz."
    ]
  },
  {
    enunciado: "Un 'Antinodo' en una onda estacionaria es:",
    correcta: "El punto de máxima amplitud de oscilación.",
    incorrectas: [
      "El punto donde la onda se detiene por completo.",
      "El inicio de la cuerda donde está atada al puente."
    ]
  },
  {
    enunciado: "La 'Presión Sonora' se mide físicamente en:",
    correcta: "Pascales (Pa).",
    incorrectas: [
      "Kilogramos por centímetro cúbico.",
      "Voltios."
    ]
  },
  {
    enunciado: "El 'Espectro Sonoro' de un instrumento es:",
    correcta: "La representación de todas las frecuencias (fundamental y armónicos) que lo componen.",
    incorrectas: [
      "La sombra que proyecta el instrumento bajo la luz del sol.",
      "El listado de canciones que el instrumento puede tocar."
    ]
  },
  {
    enunciado: "La 'Contaminación Sonora' se define como:",
    correcta: "La presencia de niveles de ruido ambiental que implican molestia, riesgo o daño para las personas.",
    incorrectas: [
      "Cantar fuera de tono durante un concierto de coro.",
      "Tocar el piano después de las 10 de la noche."
    ]
  },
  {
    enunciado: "En un medio gaseoso, el sonido se propaga mediante sucesivas:",
    correcta: "Compresiones y rarefacciones (descompresiones) de las moléculas del medio.",
    incorrectas: [
      "Explosiones de gas que empujan el aire hacia adelante.",
      "Corrientes eléctricas invisibles."
    ]
  },
  {
    enunciado: "¿Qué es un 'Aislante Acústico'?",
    correcta: "Un material denso que impide el paso del sonido de un espacio a otro.",
    incorrectas: [
      "Un cable que impide que los músicos se electrocuten.",
      "Una tela fina que se usa para limpiar los violines."
    ]
  },
  {
    enunciado: "La 'Audición Estereofónica' permite al ser humano:",
    correcta: "Localizar la dirección y procedencia de la fuente sonora en el espacio.",
    incorrectas: [
      "Escuchar dos canciones diferentes al mismo tiempo sin confundirse.",
      "Grabar sonidos en un disco de vinilo."
    ]
  },
  {
    enunciado: "Físicamente, el 'Silencio' absoluto se define como:",
    correcta: "La ausencia total de vibración mecánica en un medio.",
    incorrectas: [
      "Estar en una biblioteca donde nadie habla.",
      "Un sonido con una frecuencia de 0 Hz y amplitud infinita."
    ]
  },
  {
    enunciado: "El fin último del estudio de la acústica en música es:",
    correcta: "Comprender la naturaleza del sonido para optimizar la creación, interpretación y recepción musical.",
    incorrectas: [
      "Aprender a fabricar altavoces para fiestas.",
      "Sustituir a los músicos por fórmulas matemáticas."
    ]
  }
];