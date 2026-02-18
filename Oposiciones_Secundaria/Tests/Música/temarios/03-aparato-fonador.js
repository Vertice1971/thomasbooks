// 03-aparato-fonador.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuáles son las tres fases o mecanismos fundamentales que componen el proceso de producción de la voz?",
    correcta: "Respiración (fuente de energía), fonación (vibración) y resonancia (amplificación).",
    incorrectas: [
      "Inspiración, deglución y articulación mandibular.",
      "Audición, interpretación y proyección espacial."
    ]
  },
  {
    enunciado: "En la técnica vocal, la 'Impostación' se define como:",
    correcta: "La colocación adecuada de la voz en los resonadores para obtener el máximo rendimiento con el mínimo esfuerzo muscular.",
    incorrectas: [
      "El aumento del volumen sonoro mediante el grito forzado desde la garganta.",
      "La capacidad de imitar timbres de instrumentos de viento madera con la voz."
    ]
  },
  {
    enunciado: "¿Cuál es el tipo de respiración más adecuado para el canto y la oratoria por su eficiencia y control?",
    correcta: "Costo-diafragmática-abdominal.",
    incorrectas: [
      "Clavicular o superior.",
      "Torácica pura sin intervención del diafragma."
    ]
  },
  {
    enunciado: "La 'Emisión' de la voz se produce específicamente cuando:",
    correcta: "El aire espirado pasa a través de la glotis haciendo vibrar los pliegues vocales en aducción.",
    incorrectas: [
      "El aire entra en los pulmones y expande la caja torácica hacia afuera.",
      "Las cuerdas vocales permanecen abiertas y el aire sale sin resistencia alguna."
    ]
  },
  {
    enunciado: "El 'Apoyo' (o appoggio) en la técnica fonatoria consiste en:",
    correcta: "El control consciente de la musculatura abdominal y diafragmática para regular la presión del aire durante la espiración.",
    incorrectas: [
      "Sujetar la laringe con los dedos para evitar que suba durante las notas agudas.",
      "Mantener el aire en los pulmones el mayor tiempo posible sin llegar a emitir sonido."
    ]
  },
  {
    enunciado: "¿Qué cavidades actúan como resonadores principales en el aparato fonador?",
    correcta: "La faringe, la boca y las fosas nasales.",
    incorrectas: [
      "Los pulmones, los bronquios y la tráquea.",
      "El esófago y el estómago."
    ]
  },
  {
    enunciado: "La diferencia fundamental entre la voz hablada y la voz cantada radica en:",
    correcta: "La precisión y mantenimiento de las frecuencias (alturas) y la mayor exigencia en el control del flujo aéreo en el canto.",
    incorrectas: [
      "Que en la voz hablada no vibran las cuerdas vocales.",
      "Que la voz cantada utiliza resonadores situados fuera del cuerpo humano."
    ]
  },
  {
    enunciado: "¿Qué es el 'ataque vocal'?",
    correcta: "El instante preciso en que las cuerdas vocales comienzan a vibrar al inicio de una nota o palabra.",
    incorrectas: [
      "La agresividad con la que un cantante interpreta un aria de ópera.",
      "La subida repentina de la laringe al intentar cantar un intervalo de octava."
    ]
  },
  {
    enunciado: "El 'pasaje' o puente (passaggio) es la zona donde el cantante debe:",
    correcta: "Modificar la resonancia y la tensión de los pliegues para pasar de un registro a otro sin quiebres sonoros.",
    incorrectas: [
      "Detener la fonación para tomar aire de forma ruidosa.",
      "Cambiar el idioma en el que está cantando la obra."
    ]
  },
  {
    enunciado: "¿Qué función tiene el músculo diafragma durante la inspiración?",
    correcta: "Se contrae y desciende, aumentando el volumen de la caja torácica y permitiendo la entrada de aire.",
    incorrectas: [
      "Se relaja y sube, empujando el aire hacia el exterior con fuerza.",
      "Se mantiene rígido para proteger el corazón de las vibraciones laríngeas."
    ]
  },
  {
    enunciado: "El timbre de la voz viene determinado principalmente por:",
    correcta: "La morfología de los resonadores y la forma en que estos filtran los armónicos del sonido laríngeo.",
    incorrectas: [
      "La cantidad de agua que el cantante ha bebido antes de la actuación.",
      "El tamaño de la tráquea y la profundidad de los bronquios únicamente."
    ]
  },
  {
    enunciado: "Un ataque vocal 'soplado' se caracteriza por:",
    correcta: "El paso de aire antes de que las cuerdas vocales se cierren completamente, produciendo un sonido velado.",
    incorrectas: [
      "Un cierre brusco y violento de las cuerdas que produce un sonido metálico.",
      "La ausencia total de vibración en la cavidad faríngea."
    ]
  },
  {
    enunciado: "La voz de 'pecho' utiliza como resonador predominante:",
    correcta: "La parte inferior de la faringe y la cavidad torácica (por simpatía).",
    incorrectas: [
      "Los senos frontales y los huesos del cráneo únicamente.",
      "La punta de la lengua y el paladar duro."
    ]
  },
  {
    enunciado: "En la impostación, la 'máscara' se refiere a:",
    correcta: "La sensación de vibración en la zona facial (ojos, nariz, pómulos) al proyectar correctamente el sonido.",
    incorrectas: [
      "Un accesorio físico que deben usar los cantantes para protegerse del polvo.",
      "El gesto de tensión facial que se produce al intentar cantar notas muy graves."
    ]
  },
  {
    enunciado: "¿Qué es la presión subglótica?",
    correcta: "La presión del aire acumulado debajo de las cuerdas vocales antes y durante la fonación.",
    incorrectas: [
      "La fuerza que ejerce la lengua contra los dientes durante la articulación.",
      "La presión atmosférica externa que dificulta la audición en salas grandes."
    ]
  },
  {
    enunciado: "El paladar blando o velo del paladar debe estar, generalmente, en posición:",
    correcta: "Elevada, para cerrar el paso a la nasofaringe y enriquecer la resonancia oral.",
    incorrectas: [
      "Descendida, para que todo el aire salga exclusivamente por la nariz.",
      "Relajada y caída para evitar que la voz tenga brillo."
    ]
  },
  {
    enunciado: "La articulación se encarga de:",
    correcta: "Transformar el sonido laringeo en palabras mediante el movimiento de labios, lengua, dientes y paladar.",
    incorrectas: [
      "Producir la energía necesaria para que el diafragma se mueva.",
      "Filtrar las frecuencias agudas para que la voz sea siempre grave."
    ]
  },
  {
    enunciado: "Un 'golpe de glotis' es:",
    correcta: "Un inicio de fonación brusco debido a un cierre excesivo de las cuerdas vocales.",
    incorrectas: [
      "Una enfermedad infecciosa que afecta a los bronquios del cantante.",
      "La técnica necesaria para cantar música pop sin usar micrófono."
    ]
  },
  {
    enunciado: "¿Qué papel juega el cartílago cricoides en la fonación?",
    correcta: "Sirve como base de la laringe y punto de articulación para el cartílago tiroides y los aritenoides.",
    incorrectas: [
      "Es el encargado de vibrar para producir las notas más agudas del registro.",
      "Se cierra para impedir que el aire salga de los pulmones durante el canto."
    ]
  },
  {
    enunciado: "La 'vibración' de las cuerdas vocales se explica mediante el efecto Bernoulli, que postula:",
    correcta: "Que la presión del aire disminuye al aumentar su velocidad, ayudando a que las cuerdas se junten.",
    incorrectas: [
      "Que el sonido viaja más rápido en el agua que en el aire de la tráquea.",
      "Que las cuerdas vocales se golpean entre sí de forma mecánica por la fuerza de los músculos."
    ]
  },
  {
    enunciado: "En la voz hablada, la entonación se denomina:",
    correcta: "Prosodia.",
    incorrectas: [
      "Solfatara.",
      "Diatonía."
    ]
  },
  {
    enunciado: "La capacidad vital es:",
    correcta: "La cantidad máxima de aire que una persona puede expulsar tras una inspiración máxima.",
    incorrectas: [
      "El número de años que un cantante puede trabajar profesionalmente.",
      "La fuerza con la que el diafragma golpea los pulmones al reír."
    ]
  },
  {
    enunciado: "Los cartílagos aritenoides tienen como función:",
    correcta: "Controlar la apertura, el cierre y la tensión de las cuerdas vocales mediante su rotación y deslizamiento.",
    incorrectas: [
      "Proteger la glándula tiroides de los cambios de temperatura.",
      "Amplificar el sonido en la zona de los senos paranasales."
    ]
  },
  {
    enunciado: "El término 'falsete' se produce cuando:",
    correcta: "Solo vibran los bordes libres de las cuerdas vocales, sin participación de toda la masa muscular.",
    incorrectas: [
      "El cantante finge que está cantando pero en realidad usa una grabación.",
      "La laringe desciende tanto que el sonido sale por los oídos."
    ]
  },
  {
    enunciado: "¿Qué es el 'vibrato' fisiológico?",
    correcta: "Una oscilación ligera y regular de la altura y la intensidad que aporta calidez a la voz impostada.",
    incorrectas: [
      "Un temblor incontrolado causado por el pánico escénico del intérprete.",
      "Una técnica que consiste en mover la mandíbula rápidamente hacia arriba y abajo."
    ]
  },
  {
    enunciado: "La fatiga vocal suele manifestarse mediante:",
    correcta: "Ronquera, pérdida de agudos y necesidad de aumentar el esfuerzo para emitir sonido.",
    incorrectas: [
      "Un aumento súbito de la extensión vocal hacia las notas sobreagudas.",
      "La mejora de la dicción y la claridad de las consonantes."
    ]
  },
  {
    enunciado: "¿Cuál es la función de los ventrículos de Morgagni?",
    correcta: "Secretar moco para lubricar las cuerdas vocales y facilitar su vibración.",
    incorrectas: [
      "Almacenar aire de reserva para las frases musicales largas.",
      "Actuar como resonadores de alta frecuencia para los contratenores."
    ]
  },
  {
    enunciado: "La clasificación de 'voz mixta' (voix mixte) busca:",
    correcta: "Unir las resonancias de pecho y cabeza para obtener un sonido homogéneo en todo el registro.",
    incorrectas: [
      "Cantar una canción alternando un verso en español y otro en italiano.",
      "Mezclar la voz de un hombre y una mujer mediante un procesador electrónico."
    ]
  },
  {
    enunciado: "Un factor que perjudica gravemente la salud del aparato fonador es:",
    correcta: "La deshidratación y la exposición a ambientes con humo o aire acondicionado excesivo.",
    incorrectas: [
      "Cantar canciones en modo menor durante la noche.",
      "Realizar ejercicios de respiración diafragmática de forma diaria."
    ]
  },
  {
    enunciado: "La 'extensión' de una voz es:",
    correcta: "El rango total de notas que un individuo es capaz de emitir, desde la más grave a la más aguda.",
    incorrectas: [
      "La distancia en metros que recorre el sonido en una sala de conciertos.",
      "La longitud física de las cuerdas vocales medida en milímetros."
    ]
  },
  {
    enunciado: "¿Qué es la glotis?",
    correcta: "El espacio triangular delimitado por las cuerdas vocales.",
    incorrectas: [
      "La tapa que cierra la laringe durante la deglución.",
      "El nombre técnico de la lengua en su parte más posterior."
    ]
  },
  {
    enunciado: "La voz hablada profesional (profesores, actores) requiere:",
    correcta: "Una impostación similar a la del canto para evitar la fatiga y las patologías como los nódulos.",
    incorrectas: [
      "Gritar lo más fuerte posible para que los alumnos de la última fila escuchen.",
      "Hablar siempre en un tono monótono para no cansar los músculos laringeos."
    ]
  },
  {
    enunciado: "El 'timbre brillante' se asocia a resonadores situados en:",
    correcta: "La parte anterior de la boca y la zona nasofacial.",
    incorrectas: [
      "La parte baja del pecho y el diafragma.",
      "La columna vertebral y la nuca."
    ]
  },
  {
    enunciado: "En la técnica de respiración, la 'inspiración' debe ser preferiblemente:",
    correcta: "Nasal, silenciosa y profunda, para filtrar y calentar el aire.",
    incorrectas: [
      "Bucal, ruidosa y muy rápida para llenar los pulmones en un segundo.",
      "Inexistente, utilizando el aire residual del estómago."
    ]
  },
  {
    enunciado: "La laringe se encuentra situada entre:",
    correcta: "La faringe y la tráquea.",
    incorrectas: [
      "La boca y la nariz.",
      "Los pulmones y el corazón."
    ]
  },
  {
    enunciado: "¿Qué son las 'cuerdas vocales falsas' o pliegues ventriculares?",
    correcta: "Estructuras situadas encima de las cuerdas verdaderas que no deberían vibrar en la fonación normal.",
    incorrectas: [
      "Cuerdas artificiales que se implantan a los cantantes que pierden la voz.",
      "Los tendones que sujetan la mandíbula durante el bostezo."
    ]
  },
  {
    enunciado: "El concepto de 'colocación' de la voz se refiere a:",
    correcta: "Dirigir mentalmente la columna de aire hacia los puntos de máxima resonancia ósea.",
    incorrectas: [
      "Ponerse en la posición correcta sobre el escenario para que el foco nos ilumine.",
      "Situar la lengua fuera de la boca para que el sonido sea más claro."
    ]
  },
  {
    enunciado: "La voz de 'bajo' produce frecuencias bajas porque sus cuerdas vocales son:",
    correcta: "Más largas y con mayor masa que las de un tenor.",
    incorrectas: [
      "Más cortas y finas, vibrando a una velocidad mucho mayor.",
      "De color más oscuro que las de un cantante de registro agudo."
    ]
  },
  {
    enunciado: "En el análisis de la voz cantada, el 'formante del cantante' es:",
    correcta: "Un refuerzo de energía en frecuencias agudas (alrededor de 3000 Hz) que permite a la voz proyectarse sobre la orquesta.",
    incorrectas: [
      "Un papel que el cantante debe rellenar antes de entrar a la academia de música.",
      "La vibración de los dientes de la mandíbula superior durante los sobreagudos."
    ]
  },
  {
    enunciado: "El fin último de la técnica vocal es:",
    correcta: "La expresión artística libre y comunicativa sin limitaciones físicas ni riesgo de lesión.",
    incorrectas: [
      "Cantar lo más fuerte posible para romper copas de cristal a distancia.",
      "Lograr que todas las voces del mundo suenen exactamente igual."
    ]
  }
];