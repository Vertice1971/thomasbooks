// 01-audicion-y-oido.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función principal de la cadena de huesecillos (martillo, yunque y estribo) en el oído medio?",
    correcta: "Transmitir y amplificar las vibraciones sonoras desde el tímpano hasta la ventana oval.",
    incorrectas: [
      "Regular el equilibrio dinámico mediante la detección de aceleraciones angulares.",
      "Transformar las ondas mecánicas en impulsos eléctricos de forma directa."
    ]
  },
  {
    enunciado: "En la psicología de la audición, el fenómeno de la 'percepción categórica' se refiere a:",
    correcta: "La capacidad del cerebro para clasificar sonidos continuos en categorías discretas, como fonemas o intervalos musicales.",
    incorrectas: [
      "La imposibilidad de distinguir entre dos frecuencias que se presentan simultáneamente.",
      "La respuesta emocional involuntaria ante sonidos de alta intensidad o ruidos blancos."
    ]
  },
  {
    enunciado: "¿Qué estructura del oído interno contiene el órgano de Corti, responsable de la transducción mecano-eléctrica?",
    correcta: "La cóclea o caracol.",
    incorrectas: [
      "Los canales semicirculares.",
      "La trompa de Eustaquio."
    ]
  },
  {
    enunciado: "La 'Memoria Ecoica' se define como:",
    correcta: "Un registro sensorial a corto plazo que retiene la información auditiva durante unos pocos segundos tras el estímulo.",
    incorrectas: [
      "La capacidad de recordar la letra de una canción aprendida en la infancia.",
      "El proceso de análisis formal de una obra musical de gran complejidad estructural."
    ]
  },
  {
    enunciado: "Dentro del análisis auditivo, la audición 'estructural' implica:",
    correcta: "La capacidad de comprender la organización formal, rítmica y armónica de una obra mientras se escucha.",
    incorrectas: [
      "La percepción aislada de la altura de los sonidos sin relación con el contexto.",
      "El análisis puramente físico de las frecuencias fundamentales y sus armónicos."
    ]
  },
  {
    enunciado: "¿Cuál es la función de la Trompa de Eustaquio?",
    correcta: "Igualar la presión de aire entre el oído medio y la atmósfera externa.",
    incorrectas: [
      "Amplificar las frecuencias bajas para mejorar la percepción del bajo continuo.",
      "Proteger al nervio auditivo de posibles infecciones bacterianas externas."
    ]
  },
  {
    enunciado: "El área del cerebro encargada del procesamiento primario de la información auditiva es:",
    correcta: "El lóbulo temporal (área de Brodmann 41 y 42).",
    incorrectas: [
      "El lóbulo occipital, encargado de la visión.",
      "El lóbulo frontal, dedicado exclusivamente a la motricidad fina."
    ]
  },
  {
    enunciado: "En psicología de la música, el término 'Gestalt' aplicado a la audición sugiere que:",
    correcta: "Percibimos las melodías como totalidades estructuradas y no como una simple suma de notas aisladas.",
    incorrectas: [
      "El oído solo es capaz de procesar una frecuencia a la vez para evitar la saturación.",
      "La memoria musical depende únicamente de la repetición mecánica de intervalos."
    ]
  },
  {
    enunciado: "¿Qué son las células ciliadas?",
    correcta: "Receptores sensoriales que convierten el movimiento del líquido coclear en señales nerviosas.",
    incorrectas: [
      "Huesos minúsculos que protegen el tímpano de presiones excesivas.",
      "Neuronas situadas en el bulbo raquídeo que filtran el ruido ambiental."
    ]
  },
  {
    enunciado: "La 'Teoría del Lugar' de Helmholtz sobre la percepción de la altura postula que:",
    correcta: "Diferentes frecuencias activan lugares específicos de la membrana basilar de la cóclea.",
    incorrectas: [
      "La altura se percibe según el lugar físico donde se encuentra la fuente sonora respecto al oyente.",
      "El cerebro identifica la altura mediante la comparación de los ecos que rebotan en el pabellón auricular."
    ]
  },
  {
    enunciado: "¿A qué se refiere el análisis auditivo de tipo 'paramétrico'?",
    correcta: "Al estudio aislado de los elementos constituyentes del sonido: altura, duración, intensidad y timbre.",
    incorrectas: [
      "Al análisis de la biografía del compositor antes de escuchar la obra.",
      "A la medición de los decibelios en una sala de conciertos para evitar riesgos laborales."
    ]
  },
  {
    enunciado: "La memoria musical a largo plazo se divide principalmente en:",
    correcta: "Memoria semántica (conceptos) y memoria procedimental (habilidades técnicas).",
    incorrectas: [
      "Memoria visual de la partitura y memoria táctil del instrumento únicamente.",
      "Memoria episódica de conciertos pasados y memoria ecoica de corto plazo."
    ]
  },
  {
    enunciado: "El pabellón auricular y el conducto auditivo externo forman parte del:",
    correcta: "Oído externo.",
    incorrectas: [
      "Oído medio.",
      "Oído interno."
    ]
  },
  {
    enunciado: "¿Qué es la 'tonotopía'?",
    correcta: "La organización espacial de la percepción de frecuencias a lo largo de la cóclea y el córtex auditivo.",
    incorrectas: [
      "La capacidad de cantar una nota perfectamente afinada sin referencia externa.",
      "El cansancio auditivo producido por la exposición a sonidos monótonos."
    ]
  },
  {
    enunciado: "En el análisis auditivo, la 'audición dirigida' es aquella que:",
    correcta: "Se realiza con una guía o pauta para focalizar la atención en elementos específicos de la obra.",
    incorrectas: [
      "Ocurre de forma pasiva mientras se realiza otra actividad cotidiana.",
      "Se limita a la valoración estética de 'me gusta' o 'no me gusta'."
    ]
  },
  {
    enunciado: "La ventana oval es la puerta de entrada a:",
    correcta: "El oído interno (vestíbulo y cóclea).",
    incorrectas: [
      "La faringe a través de la trompa de Eustaquio.",
      "El canal auditivo externo tras atravesar el tímpano."
    ]
  },
  {
    enunciado: "¿Cuál es el papel de la 'atención selectiva' en la audición?",
    correcta: "Permite aislar un instrumento o voz específica dentro de una textura polifónica compleja.",
    incorrectas: [
      "Aumentar la sensibilidad del oído ante sonidos de frecuencia ultrasónica.",
      "Impedir que el sonido llegue al cerebro cuando el sujeto está distraído."
    ]
  },
  {
    enunciado: "El líquido que llena la rampa vestibular y la rampa timpánica de la cóclea se llama:",
    correcta: "Perilinfa.",
    incorrectas: [
      "Endolinfa.",
      "Sangre arterial."
    ]
  },
  {
    enunciado: "La audición 'interna' es la capacidad de:",
    correcta: "Representar mentalmente sonidos y estructuras musicales en ausencia de un estímulo físico externo.",
    incorrectas: [
      "Escuchar los propios latidos del corazón y procesos digestivos.",
      "Identificar el timbre de los instrumentos que suenan dentro de una orquesta."
    ]
  },
  {
    enunciado: "La membrana que separa el oído externo del oído medio es:",
    correcta: "El tímpano.",
    incorrectas: [
      "La membrana basilar.",
      "La membrana de Reissner."
    ]
  },
  {
    enunciado: "¿Qué es el 'análisis morfológico' en la audición musical?",
    correcta: "El estudio de la forma y la estructura de las frases, motivos y secciones de una obra.",
    incorrectas: [
      "El estudio de la evolución biológica del oído humano a través de los siglos.",
      "El análisis químico de los materiales con los que se fabrican los instrumentos."
    ]
  },
  {
    enunciado: "Los canales semicirculares del oído interno tienen como función principal:",
    correcta: "El control del equilibrio y la detección del movimiento de la cabeza.",
    incorrectas: [
      "La audición de frecuencias extremadamente agudas.",
      "La regulación de la intensidad del sonido antes de llegar a la cóclea."
    ]
  },
  {
    enunciado: "La percepción de la 'Consonancia' y 'Disonancia' tiene componentes:",
    correcta: "Tanto físicos (batimentos de frecuencias) como culturales y psicológicos.",
    incorrectas: [
      "Únicamente biológicos, siendo iguales para todas las culturas del mundo.",
      "Exclusivamente matemáticos basados en la serie de armónicos de Pitágoras."
    ]
  },
  {
    enunciado: "El nervio que transporta la información desde la cóclea hasta el cerebro es el:",
    correcta: "Nervio auditivo (VIII par craneal).",
    incorrectas: [
      "Nervio óptico.",
      "Nervio trigémino."
    ]
  },
  {
    enunciado: "¿Qué define a la 'Sinestesia' auditiva?",
    correcta: "La asociación involuntaria de sonidos con otras sensaciones, como colores o formas.",
    incorrectas: [
      "La pérdida de audición en un solo oído manteniendo el equilibrio perfecto.",
      "La capacidad de escuchar sonidos por debajo del umbral de los 20 Hz."
    ]
  },
  {
    enunciado: "En la psicología de la audición, el 'efecto de precedencia' (o efecto Haas) explica:",
    correcta: "Cómo el cerebro localiza la fuente sonora basándose en el primer sonido que llega a los oídos.",
    incorrectas: [
      "Por qué recordamos mejor el final de una obra que el principio.",
      "La preferencia por la música que hemos escuchado durante nuestra adolescencia."
    ]
  },
  {
    enunciado: "El órgano de Corti descansa sobre:",
    correcta: "La membrana basilar.",
    incorrectas: [
      "La ventana redonda.",
      "El estribo."
    ]
  },
  {
    enunciado: "La audición 'crítica' se caracteriza por:",
    correcta: "La emisión de juicios razonados sobre la calidad de la interpretación, el estilo y la técnica compositiva.",
    incorrectas: [
      "Escuchar música solo para buscar errores en la afinación de los cantantes.",
      "La sensación de placer absoluto que impide cualquier tipo de razonamiento lógico."
    ]
  },
  {
    enunciado: "El rango de frecuencias audible para un oído humano joven y sano es de aproximadamente:",
    correcta: "20 Hz a 20.000 Hz.",
    incorrectas: [
      "100 Hz a 5.000 Hz.",
      "10 Hz a 100.000 Hz."
    ]
  },
  {
    enunciado: "La memoria de 'trabajo' musical permite:",
    correcta: "Mantener y manipular información musical breve para realizar tareas como el dictado o la improvisación.",
    incorrectas: [
      "Olvidar rápidamente los sonidos desagradables para proteger el sistema nervioso.",
      "Recordar únicamente el nombre de los compositores y sus fechas de nacimiento."
    ]
  },
  {
    enunciado: "El yunque es el huesecillo situado entre:",
    correcta: "El martillo y el estribo.",
    incorrectas: [
      "El tímpano y el martillo.",
      "El estribo y la ventana oval."
    ]
  },
  {
    enunciado: "La 'Amusia' es un trastorno que consiste en:",
    correcta: "La incapacidad para reconocer o reproducir tonos o ritmos musicales, a pesar de tener una audición normal.",
    incorrectas: [
      "El odio irracional hacia la música clásica o académica.",
      "La sordera total provocada por una explosión de gran intensidad."
    ]
  },
  {
    enunciado: "En el análisis auditivo, la 'textura' se refiere a:",
    correcta: "La forma en que se combinan los materiales melódicos, rítmicos y armónicos en una composición.",
    incorrectas: [
      "La suavidad o rugosidad de los materiales con los que se construye un instrumento.",
      "El volumen en decibelios de una sección orquestal determinada."
    ]
  },
  {
    enunciado: "La endolinfa se encuentra en:",
    correcta: "El conducto coclear (rampa media).",
    incorrectas: [
      "El canal auditivo externo.",
      "El oído medio, rodeando a los huesecillos."
    ]
  },
  {
    enunciado: "La 'localización biaural' depende de:",
    correcta: "La diferencia de tiempo y de intensidad con la que el sonido llega a cada oído.",
    incorrectas: [
      "La fuerza con la que el sonido rebota en las paredes de la sala de audición.",
      "La capacidad de mover las orejas voluntariamente hacia la fuente sonora."
    ]
  },
  {
    enunciado: "¿Qué es el 'análisis estilístico'?",
    correcta: "La identificación de los rasgos comunes que sitúan a una obra en un periodo o autor concreto.",
    incorrectas: [
      "El estudio de la moda y vestimenta de los músicos durante un concierto.",
      "El análisis del precio de las entradas según el estilo musical programado."
    ]
  },
  {
    enunciado: "El umbral de 'dolor' auditivo se sitúa aproximadamente en los:",
    correcta: "120-140 dB.",
    incorrectas: [
      "60-80 dB.",
      "200-250 dB."
    ]
  },
  {
    enunciado: "La 'memoria episódica' musical nos permite asociar una canción con:",
    correcta: "Un momento o experiencia personal específica de nuestra vida.",
    incorrectas: [
      "La estructura técnica de una fuga de Bach.",
      "El nombre científico de los intervalos de cuarta aumentada."
    ]
  },
  {
    enunciado: "El reflejo estapedial tiene como función:",
    correcta: "Proteger al oído interno de sonidos excesivamente fuertes contrayendo el músculo del estribo.",
    incorrectas: [
      "Aumentar la sensibilidad ante sonidos susurrados en la oscuridad.",
      "Provocar el estornudo cuando se limpia el conducto auditivo externo."
    ]
  },
  {
    enunciado: "El análisis auditivo integral debe combinar:",
    correcta: "La percepción sensorial, la comprensión intelectual y la respuesta emocional.",
    incorrectas: [
      "Únicamente la lectura de la partitura sin necesidad de escuchar la obra.",
      "El recuento matemático de todas las notas de la composición."
    ]
  }
];