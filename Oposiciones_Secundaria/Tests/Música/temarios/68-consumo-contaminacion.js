// 68-consumo-contaminacion.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por 'Industria Cultural' en el ámbito musical?",
    correcta: "El sistema de producción y comercialización que convierte la música en un bien de consumo masivo.",
    incorrectas: [
      "La fabricación de instrumentos musicales de forma artesanal.",
      "El estudio de las culturas antiguas a través de sus cantos."
    ]
  },
  {
    enunciado: "¿Qué factor tecnológico ha transformado el consumo musical de 'posesión' (comprar discos) a 'acceso'?",
    correcta: "Las plataformas de streaming.",
    incorrectas: [
      "La invención del gramófono.",
      "El uso de cintas de cassette de larga duración."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música de Fondo' (Muzak) en los espacios comerciales?",
    correcta: "Música diseñada para influir en el comportamiento del consumidor y crear ambientes relajados.",
    incorrectas: [
      "Música que suena al final de un disco como pista oculta.",
      "Música clásica que se toca en el foso de una orquesta."
    ]
  },
  {
    enunciado: "¿Qué define a la 'Contaminación Sonora'?",
    correcta: "La presencia de ruidos o vibraciones que impliquen molestia, riesgo o daño para las personas o el medio ambiente.",
    incorrectas: [
      "Escuchar música con letras de contenido negativo.",
      "Tocar un instrumento musical sin haberlo afinado previamente."
    ]
  },
  {
    enunciado: "¿Cuál es la unidad de medida utilizada para determinar la intensidad del sonido y el nivel de ruido?",
    correcta: "Decibelio (dB).",
    incorrectas: [
      "Hercio (Hz).",
      "Vatio (W)."
    ]
  },
  {
    enunciado: "Según la OMS, ¿cuál es el límite de ruido recomendado durante el día para no afectar la salud humana?",
    correcta: "55 a 65 decibelios.",
    incorrectas: [
      "120 a 140 decibelios.",
      "10 a 20 decibelios."
    ]
  },
  {
    enunciado: "¿Qué es el 'Umbral del Dolor' en la audición humana?",
    correcta: "La intensidad sonora a partir de la cual el sonido produce una sensación de dolor físico (aprox. 120-140 dB).",
    incorrectas: [
      "El momento en que un músico se cansa de ensayar.",
      "La frecuencia más baja que puede percibir un oído humano."
    ]
  },
  {
    enunciado: "¿Qué efecto fisiológico puede causar la exposición prolongada al ruido intenso?",
    correcta: "Pérdida de audición (hipoacusia), estrés, insomnio y problemas cardiovasculares.",
    incorrectas: [
      "Mejora de la capacidad pulmonar.",
      "Aumento de la agudeza visual nocturna."
    ]
  },
  {
    enunciado: "¿Qué son los 'Acúfenos' o Tinnitus?",
    correcta: "La percepción de un pitido o zumbido en el oído sin que exista una fuente sonora externa.",
    incorrectas: [
      "Un tipo de instrumento de percusión metálico.",
      "Las notas más agudas de un coro de sopranos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Paisaje Sonoro' (Soundscape)?",
    correcta: "El entorno acústico que percibimos en un lugar determinado (natural o urbano).",
    incorrectas: [
      "Un cuadro que representa a músicos tocando en el campo.",
      "La distancia que alcanza el sonido de una campana."
    ]
  },
  {
    enunciado: "¿Qué medida de protección es fundamental para los músicos profesionales frente a la contaminación sonora?",
    correcta: "El uso de tapones con filtros especiales que atenúan el volumen sin perder calidad.",
    incorrectas: [
      "Tocar siempre con los ojos cerrados para concentrarse.",
      "Utilizar instrumentos de plástico que suenan menos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Obsolescencia Programada' en los productos musicales tecnológicos?",
    correcta: "La tendencia a diseñar dispositivos con una vida útil limitada para fomentar el consumo de nuevos modelos.",
    incorrectas: [
      "Cuando un músico decide retirarse antes de cumplir los 60 años.",
      "El tiempo que tarda una canción en pasar de moda en la radio."
    ]
  },
  {
    enunciado: "¿Cómo afecta la contaminación sonora a la fauna urbana y natural?",
    correcta: "Altera sus ciclos de apareamiento, comunicación y migración.",
    incorrectas: [
      "Hace que los pájaros canten con más volumen y mejor afinación.",
      "No les afecta en absoluto porque los animales no tienen oídos."
    ]
  },
  {
    enunciado: "¿Qué es una 'Barrera Acústica'?",
    correcta: "Una estructura diseñada para absorber o desviar el ruido, común en autopistas o vías de tren.",
    incorrectas: [
      "La prohibición de hablar durante un concierto de ópera.",
      "Un tipo de micrófono que no deja pasar los sonidos graves."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Música Ubicua'?",
    correcta: "La presencia constante de música en casi todos los momentos y lugares de la vida diaria.",
    incorrectas: [
      "Música que se compone utilizando solo dos notas diferentes.",
      "El estilo musical propio de las regiones árticas."
    ]
  },
  {
    enunciado: "¿Qué papel juegan los 'Derechos de Autor' en la industria musical?",
    correcta: "Protegen la propiedad intelectual y aseguran una remuneración para los creadores por el uso de su obra.",
    incorrectas: [
      "Son los permisos necesarios para poder tocar un instrumento en la calle.",
      "Es el título que otorga el conservatorio al finalizar los estudios."
    ]
  },
  {
    enunciado: "¿Qué es el 'Marketing Sensorial' aplicado a la música?",
    correcta: "El uso de sonidos para crear una identidad de marca y mejorar la experiencia de compra.",
    incorrectas: [
      "Vender instrumentos que se pueden oler y saborear.",
      "Un examen auditivo que se hace antes de entrar en una tienda."
    ]
  },
  {
    enunciado: "¿Qué es la 'Presión Sonora'?",
    correcta: "La variación de presión atmosférica causada por una onda sonora.",
    incorrectas: [
      "El nerviosismo que siente un músico antes de salir al escenario.",
      "El peso físico de un altavoz de gran tamaño."
    ]
  },
  {
    enunciado: "¿Qué legislación regula los niveles de ruido en España?",
    correcta: "La Ley del Ruido y las ordenanzas municipales de cada ayuntamiento.",
    incorrectas: [
      "El Código Civil y la Constitución únicamente.",
      "No existe legislación, el ruido es libre."
    ]
  },
  {
    enunciado: "¿Qué es el 'Aislamiento Acústico'?",
    correcta: "El conjunto de materiales y técnicas para evitar que el sonido penetre o salga de un recinto.",
    incorrectas: [
      "Castigar a un músico sin ensayar durante una semana.",
      "Poner el volumen del televisor al mínimo."
    ]
  },
  {
    enunciado: "¿Qué es el 'Acondicionamiento Acústico'?",
    correcta: "Mejorar la calidad sonora interna de una sala (evitando ecos o reverberaciones excesivas).",
    incorrectas: [
      "Instalar aire acondicionado en una sala de conciertos.",
      "Limpiar los instrumentos con productos especiales."
    ]
  },
  {
    enunciado: "¿Qué es la 'Hipoacusia'?",
    correcta: "La disminución de la capacidad auditiva.",
    incorrectas: [
      "Un tipo de música grabada debajo del agua.",
      "Tener un oído mucho más grande que el otro."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ruido Blanco'?",
    correcta: "Un sonido que contiene todas las frecuencias audibles con la misma intensidad.",
    incorrectas: [
      "El sonido del silencio absoluto.",
      "Música compuesta por personas albinas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Sociedad de la Escucha'?",
    correcta: "Un concepto que reflexiona sobre nuestra capacidad de prestar atención en un mundo saturado de estímulos sonoros.",
    incorrectas: [
      "Un grupo de personas que se reúnen para oír discos antiguos.",
      "La asociación nacional de fabricantes de audífonos."
    ]
  },
  {
    enunciado: "¿Qué impacto tiene el uso excesivo de auriculares a volumen alto?",
    correcta: "Aumenta drásticamente el riesgo de lesiones auditivas permanentes en jóvenes.",
    incorrectas: [
      "Ayuda a que los oídos se mantengan más limpios.",
      "Mejora la memoria a largo plazo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Psicoacústica'?",
    correcta: "El estudio de cómo el ser humano percibe e interpreta los sonidos.",
    incorrectas: [
      "Un estilo de música que intenta volver loca a la gente.",
      "La terapia para músicos que tienen miedo al escenario."
    ]
  },
  {
    enunciado: "¿Qué es el 'Mapa de Ruido' de una ciudad?",
    correcta: "Una representación gráfica que muestra los niveles de presión sonora en diferentes zonas urbanas.",
    incorrectas: [
      "Una lista de todas las tiendas de música de un barrio.",
      "Un dibujo de dónde están situados los músicos callejeros."
    ]
  },
  {
    enunciado: "¿Qué es el 'Zonning' acústico?",
    correcta: "La división de una ciudad en áreas con diferentes límites máximos de ruido permitidos (industrial, residencial, etc.).",
    incorrectas: [
      "Un tipo de danza urbana que se baila en zonas de silencio.",
      "Poner altavoces en los semáforos de toda la ciudad."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Programática' en relación al consumo?",
    correcta: "Música que evoca una imagen o historia, muy usada en publicidad para guiar la emoción del consumidor.",
    incorrectas: [
      "Música compuesta exclusivamente por algoritmos de ordenador.",
      "Un programa de radio que dura todo el día."
    ]
  },
  {
    enunciado: "¿Cómo influye el ritmo de la música en un supermercado?",
    correcta: "Un ritmo lento suele fomentar que los clientes caminen despacio y compren más.",
    incorrectas: [
      "Un ritmo rápido hace que la gente compre productos más caros.",
      "No influye, la gente compra igual con cualquier música."
    ]
  },
  {
    enunciado: "¿Qué es la 'Ecología Acústica'?",
    correcta: "El estudio de los efectos del entorno sonoro en el equilibrio biológico y social.",
    incorrectas: [
      "Reciclar instrumentos musicales viejos.",
      "Tocar el violín usando solo energía solar."
    ]
  },
  {
    enunciado: "¿Qué es el 'Enmascaramiento' sonoro?",
    correcta: "Cuando un sonido impide la percepción de otro debido a su intensidad o frecuencia.",
    incorrectas: [
      "Disfrazarse de nota musical en el carnaval.",
      "Ponerse una máscara para cantar en la ópera."
    ]
  },
  {
    enunciado: "¿Qué es el 'Derecho al Silencio'?",
    correcta: "El derecho ciudadano a no ser sometido a ruidos que perturben su intimidad o descanso.",
    incorrectas: [
      "La obligación de no hablar durante las clases de música.",
      "Un tipo de contrato que firman los músicos mudos."
    ]
  },
  {
    enunciado: "¿Qué es un 'Sonómetro'?",
    correcta: "Un instrumento de precisión que mide el nivel de presión sonora.",
    incorrectas: [
      "Un aparato para medir la longitud de las cuerdas del piano.",
      "Un metrónomo que suena muy fuerte."
    ]
  },
  {
    enunciado: "¿Qué es el 'Velo del Sonido'?",
    correcta: "La pérdida de nitidez en la audición causada por el ruido ambiental constante.",
    incorrectas: [
      "La tela que cubre los altavoces de los equipos de música.",
      "Un tipo de bufanda que usan los cantantes para proteger la garganta."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cultura del Descarte' en la música?",
    correcta: "La tendencia a consumir canciones de forma rápida y olvidarlas casi de inmediato.",
    incorrectas: [
      "Tirar los instrumentos que no están perfectamente afinados.",
      "Un festival donde se tiran discos de vinilo al público."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sonido Directo'?",
    correcta: "El sonido que llega al oyente sin haber rebotado previamente en ninguna superficie.",
    incorrectas: [
      "Música que se toca sin ningún tipo de partitura.",
      "Un mensaje de audio enviado por teléfono."
    ]
  },
  {
    enunciado: "¿Qué es la 'Reverberación' en una sala con mucho ruido?",
    correcta: "La permanencia del sonido después de que la fuente ha dejado de emitir, lo que puede emborronar la audición.",
    incorrectas: [
      "El eco que se produce en una montaña muy alta.",
      "La vibración de las cuerdas vocales al cantar."
    ]
  },
  {
    enunciado: "¿Qué es un 'Absorbente Acústico'?",
    correcta: "Materiales (como espumas o lanas) que reducen la reflexión del sonido en una sala.",
    incorrectas: [
      "Un trapo para secar el sudor de los músicos.",
      "Un tipo de esponja para limpiar el interior de la trompeta."
    ]
  },
  {
    enunciado: "La educación sobre el consumo y el ruido permite:",
    correcta: "Fomentar un uso responsable de la tecnología y proteger la salud auditiva propia y ajena.",
    incorrectas: [
      "Aprender a fabricar altavoces que no necesiten cables.",
      "Saber qué discos son los más caros del mercado."
    ]
  }
];