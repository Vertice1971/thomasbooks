// 02-voz-y-adolescencia.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el órgano principal de la fonación donde se encuentran las cuerdas vocales?",
    correcta: "La laringe.",
    incorrectas: [
      "La faringe.",
      "La tráquea."
    ]
  },
  {
    enunciado: "En la fisiología de la voz, ¿qué papel juegan los resonadores?",
    correcta: "Amplificar y modificar el sonido laríngeo, aportando el timbre característico a cada voz.",
    incorrectas: [
      "Producir la vibración inicial mediante el paso del aire.",
      "Controlar exclusivamente la presión subglótica del diafragma."
    ]
  },
  {
    enunciado: "La clasificación de las voces femeninas, de la más aguda a la más grave, es:",
    correcta: "Soprano, Mezzosoprano y Contralto.",
    incorrectas: [
      "Tenor, Barítono y Bajo.",
      "Soprano, Tenor y Contralto."
    ]
  },
  {
    enunciado: "¿Qué es la 'muda de la voz' o puberfonía?",
    correcta: "El proceso de cambio en la frecuencia fundamental de la voz debido al crecimiento de la laringe en la pubertad.",
    incorrectas: [
      "La pérdida total de la capacidad de cantar durante la edad adulta.",
      "Una patología crónica que impide la articulación de las palabras."
    ]
  },
  {
    enunciado: "Durante la adolescencia, el crecimiento de la laringe en los varones suele ser:",
    correcta: "Más acentuado que en las mujeres, provocando un descenso de aproximadamente una octava en su tesitura.",
    incorrectas: [
      "Inexistente, ya que la voz masculina se estabiliza en la infancia.",
      "Exactamente igual al de las mujeres, bajando solo una tercera mayor."
    ]
  },
  {
    enunciado: "La clasificación de las voces masculinas, de la más aguda a la más grave, es:",
    correcta: "Tenor, Barítono y Bajo.",
    incorrectas: [
      "Soprano, Mezzosoprano y Contralto.",
      "Contralto, Tenor y Bajo."
    ]
  },
  {
    enunciado: "¿A qué se refiere el término 'tesitura'?",
    correcta: "Al ámbito de frecuencias en el que una voz se mueve con comodidad y calidad óptima.",
    incorrectas: [
      "A la nota más aguda que un cantante puede alcanzar gritando.",
      "Al volumen máximo que puede emitir un coro profesional."
    ]
  },
  {
    enunciado: "En la voz adolescente, la aparición de 'gallos' o diplofonía se debe a:",
    correcta: "La falta de control muscular y la asimetría temporal en el crecimiento de los cartílagos laríngeos.",
    incorrectas: [
      "Una infección bacteriana común en los centros de secundaria.",
      "El consumo excesivo de bebidas frías durante el periodo de muda."
    ]
  },
  {
    enunciado: "¿Qué cartílago laríngeo forma la protuberancia conocida como 'nuez de Adán'?",
    correcta: "El cartílago tiroides.",
    incorrectas: [
      "El cartílago cricoides.",
      "La epiglotis."
    ]
  },
  {
    enunciado: "La voz de 'Contratenor' es una voz de hombre que canta en el registro de:",
    correcta: "Soprano o Contralto, utilizando principalmente el registro de cabeza o falsete.",
    incorrectas: [
      "Bajo profundo, utilizando resonadores pectorales.",
      "Barítono lírico con gran potencia en el registro de pecho."
    ]
  },
  {
    enunciado: "¿Cuál es el registro vocal más común en el hombre adulto medio?",
    correcta: "Barítono.",
    incorrectas: [
      "Tenor ligero.",
      "Bajo profundo."
    ]
  },
  {
    enunciado: "En la adolescencia femenina, la muda vocal se manifiesta habitualmente como:",
    correcta: "Un oscurecimiento del timbre y un descenso de la tesitura de aproximadamente una tercera o cuarta.",
    incorrectas: [
      "Un aumento súbito de la agudeza vocal hacia registros de soprano coloratura.",
      "No existe cambio alguno en la voz femenina durante la pubertad."
    ]
  },
  {
    enunciado: "Los pliegues vocales (cuerdas vocales) producen sonido cuando:",
    correcta: "Se aproximan (aducción) y vibran por la presión del aire que sale de los pulmones.",
    incorrectas: [
      "Se separan completamente (abducción) dejando pasar el aire libremente.",
      "Permanecen rígidas y estáticas mientras la lengua vibra contra el paladar."
    ]
  },
  {
    enunciado: "¿Qué es el 'pasaje' o puente vocal?",
    correcta: "La zona de transición entre los diferentes registros de la voz (pecho, medio, cabeza).",
    incorrectas: [
      "El momento en que el aire pasa de la nariz a la boca.",
      "La distancia física entre el escenario y la primera fila del público."
    ]
  },
  {
    enunciado: "Una de las problemáticas psicológicas de la muda vocal en secundaria es:",
    correcta: "La inseguridad y el miedo al ridículo por la inestabilidad del tono (gallos).",
    incorrectas: [
      "El aumento repentino de la capacidad de memoria visual.",
      "La mejora automática de la afinación sin necesidad de estudio."
    ]
  },
  {
    enunciado: "La voz de 'Castrato' se obtenía históricamente mediante:",
    correcta: "La intervención quirúrgica antes de la pubertad para impedir la muda vocal masculina.",
    incorrectas: [
      "Un entrenamiento intensivo basado en el consumo de miel y limón.",
      "El uso de máscaras resonadoras especiales durante el canto barroco."
    ]
  },
  {
    enunciado: "¿Qué función tiene la epiglotis durante la deglución?",
    correcta: "Cerrar la entrada de la laringe para evitar que el alimento pase a las vías respiratorias.",
    incorrectas: [
      "Vibrar para producir sonidos sobreagudos.",
      "Regular el paso del aire hacia las fosas nasales."
    ]
  },
  {
    enunciado: "La clasificación vocal según la 'extensión' se refiere a:",
    correcta: "El rango total de notas que una voz puede emitir, desde la más grave a la más aguda.",
    incorrectas: [
      "La duración máxima de una nota mantenida en un solo aliento.",
      "La distancia física a la que llega el sonido de un cantante de ópera."
    ]
  },
  {
    enunciado: "En el aula de música, ante un alumno en plena muda vocal, el profesor debe:",
    correcta: "Adaptar el repertorio a su tesitura actual y no forzar los extremos del registro.",
    incorrectas: [
      "Obligarle a cantar las notas más agudas para que la laringe crezca más rápido.",
      "Prohibirle hablar y cantar durante todo el curso escolar."
    ]
  },
  {
    enunciado: "¿Qué diferencia a una voz 'lírica' de una voz 'ligera'?",
    correcta: "La lírica tiene más cuerpo y volumen; la ligera tiene mayor facilidad para la agilidad y el registro agudo.",
    incorrectas: [
      "La voz lírica solo se usa para el pop y la ligera para la ópera.",
      "No existe diferencia; son términos sinónimos en la clasificación vocal."
    ]
  },
  {
    enunciado: "El registro de 'falsete' en el hombre se caracteriza por:",
    correcta: "Una vibración solo de los bordes ligamentosos de las cuerdas vocales, produciendo un sonido aflautado.",
    incorrectas: [
      "Una vibración de toda la masa de la cuerda vocal con gran potencia sonora.",
      "Ser el registro natural que se utiliza para hablar habitualmente."
    ]
  },
  {
    enunciado: "¿Cómo afecta el crecimiento de las cuerdas vocales a la altura del sonido?",
    correcta: "A mayor longitud y masa de las cuerdas, el sonido resultante es más grave.",
    incorrectas: [
      "A mayor longitud, el sonido es más agudo y brillante.",
      "La longitud de las cuerdas no tiene ninguna relación con la frecuencia del sonido."
    ]
  },
  {
    enunciado: "La 'voz blanca' es el término utilizado para referirse a:",
    correcta: "La voz de los niños y niñas antes de la muda vocal.",
    incorrectas: [
      "La voz de las personas que no tienen formación musical.",
      "Un tipo de canto sin vibrato típico de la música contemporánea."
    ]
  },
  {
    enunciado: "En la clasificación de las voces, ¿qué es un Barítono?",
    correcta: "Una voz masculina intermedia entre el Tenor y el Bajo.",
    incorrectas: [
      "La voz masculina más aguda de todas.",
      "Una voz femenina que puede cantar notas muy graves."
    ]
  },
  {
    enunciado: "La fatiga vocal en el adolescente suele estar causada por:",
    correcta: "El sobreesfuerzo para mantener una voz infantil o intentar imitar voces adultas.",
    incorrectas: [
      "El exceso de descanso y la falta de uso de la voz.",
      "Cantar exclusivamente en el registro medio sin saltos interválicos."
    ]
  },
  {
    enunciado: "El registro de 'pecho' se asocia principalmente a:",
    correcta: "Las notas graves y medias, donde la resonancia se siente más en la cavidad torácica.",
    incorrectas: [
      "Las notas más agudas de una soprano coloratura.",
      "El susurro débil que se produce al hablar en voz baja."
    ]
  },
  {
    enunciado: "¿Qué es la 'intensidad' de la voz?",
    correcta: "La fuerza o volumen del sonido, determinada por la presión del aire subglótico.",
    incorrectas: [
      "El color especial que permite distinguir una voz de otra.",
      "El número de vibraciones por segundo de las cuerdas vocales."
    ]
  },
  {
    enunciado: "La clasificación de 'Soprano Dramática' indica:",
    correcta: "Una voz de soprano con gran potencia, volumen y un timbre más oscuro y denso.",
    incorrectas: [
      "Una cantante que solo actúa en obras de teatro trágicas.",
      "Una voz infantil que tiene mucha facilidad para el llanto."
    ]
  },
  {
    enunciado: "En la adolescencia, el periodo de muda suele durar aproximadamente:",
    correcta: "Entre 6 meses y 2 años, dependiendo de factores genéticos y hormonales.",
    incorrectas: [
      "Exactamente un mes tras cumplir los 12 años.",
      "Toda la etapa de la educación primaria."
    ]
  },
  {
    enunciado: "La 'Voz de Cabeza' es un registro que:",
    correcta: "Utiliza las cavidades de resonancia superiores (cráneo y cara) para las notas agudas.",
    incorrectas: [
      "Solo se puede producir si el cantante está boca abajo.",
      "Es exclusivo de los bajos para dar sus notas más profundas."
    ]
  },
  {
    enunciado: "¿Qué son los 'nódulos' vocales?",
    correcta: "Pequeños engrosamientos en las cuerdas vocales debidos al mal uso o abuso de la voz.",
    incorrectas: [
      "Los huesos que sujetan la lengua en su posición correcta.",
      "Las cavidades nasales que ayudan a la resonancia del sonido."
    ]
  },
  {
    enunciado: "La voz de 'Mezzosoprano' se sitúa:",
    correcta: "Entre la Soprano y la Contralto.",
    incorrectas: [
      "Por encima de la Soprano ligera.",
      "Por debajo de la Contralto profunda."
    ]
  },
  {
    enunciado: "El principal músculo encargado de la respiración para el canto es:",
    correcta: "El diafragma.",
    incorrectas: [
      "El esternocleidomastoideo.",
      "El bíceps braquial."
    ]
  },
  {
    enunciado: "La clasificación vocal 'Bajo Cantante' se diferencia del 'Bajo Profundo' por:",
    correcta: "Tener un timbre más ágil y un registro agudo más fácil y brillante.",
    incorrectas: [
      "No poder cantar notas graves en absoluto.",
      "Ser el único que puede cantar con acompañamiento de piano."
    ]
  },
  {
    enunciado: "En la pedagogía vocal en secundaria, se recomienda:",
    correcta: "Realizar ejercicios de vocalización suaves para ayudar a la laringe a adaptarse a su nuevo tamaño.",
    incorrectas: [
      "Gritar durante 10 minutos al día para fortalecer los músculos del cuello.",
      "Evitar cualquier tipo de calentamiento previo antes de cantar en el coro."
    ]
  },
  {
    enunciado: "¿Qué es el 'timbre' vocal?",
    correcta: "La cualidad que nos permite identificar a una persona por su voz, resultante de su anatomía y resonadores.",
    incorrectas: [
      "La nota más alta que puede dar un coro de niños.",
      "La velocidad a la que se canta una pieza musical."
    ]
  },
  {
    enunciado: "El término 'Voix Sombrée' (voz sombría) se introdujo en el siglo XIX para:",
    correcta: "Bajar la laringe y ampliar los resonadores, permitiendo voces más potentes en la ópera romántica.",
    incorrectas: [
      "Cantar en voz baja para no despertar al resto de los actores.",
      "Un estilo de canto popular que se realiza con la boca cerrada."
    ]
  },
  {
    enunciado: "Un síntoma de muda vocal inminente es:",
    correcta: "La pérdida de control en las notas agudas que antes eran fáciles y la ronquera frecuente.",
    incorrectas: [
      "El crecimiento repentino de los dientes de leche.",
      "La mejora instantánea de la lectura a primera vista."
    ]
  },
  {
    enunciado: "La clasificación de 'Soprano Coloratura' destaca por:",
    correcta: "Su extraordinaria capacidad para realizar ornamentos, escalas rápidas y notas sobreagudas.",
    incorrectas: [
      "Su capacidad para pintar cuadros mientras canta en el escenario.",
      "Tener un registro tan grave que parece un hombre."
    ]
  },
  {
    enunciado: "El objetivo final de conocer la voz en la adolescencia es:",
    correcta: "Fomentar una práctica vocal saludable que respete los cambios biológicos y evite lesiones.",
    incorrectas: [
      "Conseguir que todos los alumnos del instituto sean cantantes profesionales de ópera.",
      "Demostrar que la voz no cambia nunca a lo largo de la vida."
    ]
  }
];