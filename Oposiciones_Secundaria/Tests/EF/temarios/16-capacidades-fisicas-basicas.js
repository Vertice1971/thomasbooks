
// -16-capacidades-fisicas-basicas.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué autor propuso la clasificación clásica de las Capacidades Físicas Básicas en Fuerza, Resistencia, Velocidad y Flexibilidad?",
    correcta: "Bellin de Coteau",
    incorrectas: ["Pierre Parlebas", "Sigmund Freud"]
  },
  {
    enunciado: "Las Capacidades Físicas Básicas se definen técnicamente como:",
    correcta: "Factores determinantes de la condición física, de base genética y mejorables mediante el entrenamiento.",
    incorrectas: ["Habilidades técnicas aprendidas exclusivamente mediante la imitación de modelos.", "Manifestaciones artísticas del movimiento sin relación con el metabolismo."]
  },
  {
    enunciado: "¿En qué se diferencian las capacidades 'condicionales' de las 'coordinativas'?",
    correcta: "Las condicionales dependen de procesos energéticos y metabólicos; las coordinativas del sistema nervioso central.",
    incorrectas: ["Son sinónimos que se refieren a la fuerza muscular.", "Las condicionales son psicológicas y las coordinativas son físicas."]
  },
  {
    enunciado: "La 'Resistencia' se define como la capacidad de:",
    correcta: "Soportar un esfuerzo durante un tiempo prolongado retrasando la aparición de la fatiga.",
    incorrectas: ["Levantar la máxima carga posible en una sola repetición.", "Recorrer 50 metros en el menor tiempo posible."]
  },
  {
    enunciado: "Dentro de la clasificación de la 'Fuerza', la capacidad de vencer una resistencia media a gran velocidad se denomina:",
    correcta: "Fuerza explosiva (o potencia).",
    incorrectas: ["Fuerza máxima absoluta.", "Fuerza resistencia estática."]
  },
  {
    enunciado: "¿Qué capacidad física básica tiende a involucionar de forma natural desde el nacimiento si no se trabaja?",
    correcta: "La flexibilidad.",
    incorrectas: ["La resistencia aeróbica.", "La fuerza muscular."]
  },
  {
    enunciado: "La 'Velocidad de Reacción' es el tiempo que transcurre entre:",
    correcta: "La aparición de un estímulo y el inicio de la respuesta motora.",
    incorrectas: ["El inicio del movimiento y el final del mismo.", "La salida del sol y la puesta del mismo."]
  },
  {
    enunciado: "Según Gundlach, la flexibilidad se clasifica dentro de las capacidades físicas como:",
    correcta: "Una capacidad intermedia o coadyuvante, ya que no depende directamente de la energía pero condiciona a las demás.",
    incorrectas: ["Una capacidad condicional pura igual que la fuerza.", "Una capacidad coordinativa compleja."]
  },
  {
    enunciado: "En la evolución del desarrollo motor de los alumnos de Secundaria, ¿cuándo se produce el mayor incremento de la fuerza en los varones?",
    correcta: "Durante el estirón puberal, debido al aumento de los niveles de testosterona.",
    incorrectas: ["A los 6 años de edad.", "Tras la jubilación."]
  },
  {
    enunciado: "La 'Resistencia Anaeróbica Aláctica' se utiliza en esfuerzos de:",
    correcta: "Muy alta intensidad y muy corta duración (menos de 15-20 segundos).",
    incorrectas: ["Baja intensidad y larga duración (más de 30 minutos).", "Intensidad moderada con presencia de oxígeno constante."]
  },
  {
    enunciado: "La flexibilidad depende de dos factores principales:",
    correcta: "La movilidad articular y la elasticidad muscular.",
    incorrectas: ["La fuerza de los huesos y la cantidad de agua en la sangre.", "La velocidad de carrera y la capacidad pulmonar."]
  },
  {
    enunciado: "¿Cuál es la 'fase sensible' óptima para el desarrollo de la velocidad de reacción y la coordinación?",
    correcta: "Entre los 7 y los 12 años, antes de la pubertad.",
    incorrectas: ["Después de los 20 años.", "Durante la etapa prenatal."]
  },
  {
    enunciado: "La 'Fuerza Resistencia' es la capacidad de:",
    correcta: "Mantener niveles de fuerza muscular durante un tiempo prolongado frente a la fatiga.",
    incorrectas: ["Realizar un solo movimiento lo más rápido posible.", "Mover una carga pesada solo con la mente."]
  },
  {
    enunciado: "¿Qué capacidad física se ve más afectada negativamente por el aumento de peso graso durante la adolescencia?",
    correcta: "La resistencia aeróbica y la agilidad.",
    incorrectas: ["La fuerza máxima absoluta.", "La flexibilidad de los dedos."]
  },
  {
    enunciado: "La clasificación de 'Capacidades Resultantes' incluye a:",
    correcta: "La agilidad y la potencia.",
    incorrectas: ["La resistencia y la flexibilidad.", "La velocidad y el equilibrio."]
  },
  {
    enunciado: "La 'Velocidad de Desplazamiento' depende técnicamente de:",
    correcta: "La frecuencia y la amplitud de zancada (o brazada).",
    incorrectas: ["El número de alumnos que corren a la vez.", "El color de la pista de atletismo."]
  },
  {
    enunciado: "En Secundaria, el trabajo de la flexibilidad debe enfocarse prioritariamente hacia:",
    correcta: "La compensación postural y el mantenimiento de los rangos articulares saludables.",
    incorrectas: ["Lograr contorsiones imposibles para el circo.", "Eliminar el tejido óseo para ser más elásticos."]
  },
  {
    enunciado: "La 'Fuerza Explosiva' es determinante en actividades de:",
    correcta: "Saltos, lanzamientos y salidas de velocidad.",
    incorrectas: ["Maratón y triatlón de larga distancia.", "Dormir y descansar profundamente."]
  },
  {
    enunciado: "¿Cómo evoluciona la resistencia aeróbica en las chicas de secundaria en comparación con los chicos?",
    correcta: "Tiende a estabilizarse o disminuir ligeramente si no hay entrenamiento, debido al cambio en la composición corporal.",
    incorrectas: ["Aumenta de forma explosiva superando a los chicos en todas las edades.", "Se mantiene exactamente igual que a los 5 años."]
  },
  {
    enunciado: "El desarrollo de las capacidades físicas en el currículo de la LOMLOE debe estar orientado a:",
    correcta: "La mejora de la salud y la autonomía personal para la práctica física.",
    incorrectas: ["La formación de un equipo de élite para ganar campeonatos escolares.", "La comparación constante de marcas entre compañeros."]
  },
  {
    enunciado: "La 'Velocidad Gestual' se refiere a la rapidez en:",
    correcta: "La ejecución de un movimiento técnico aislado (ej. un remate o un pase).",
    incorrectas: ["Correr 100 metros lisos.", "Reaccionar al disparo de salida."]
  },
  {
    enunciado: "La flexibilidad 'activa' es aquella en la que:",
    correcta: "El sujeto alcanza la máxima amplitud mediante la contracción de sus propios músculos antagonistas.",
    incorrectas: ["Una fuerza externa (compañero o gravedad) ayuda a alcanzar la amplitud.", "El sujeto está totalmente relajado y no se mueve."]
  },
  {
    enunciado: "La 'Resistencia Aeróbica' se caracteriza metabólicamente por:",
    correcta: "Realizar esfuerzos en equilibrio entre el aporte y el consumo de oxígeno.",
    incorrectas: ["Producir grandes cantidades de ácido láctico de forma inmediata.", "No utilizar oxígeno en absoluto para obtener energía."]
  },
  {
    enunciado: "¿Qué capacidad física se ve más beneficiada por la mejora de la 'coordinación intramuscular'?",
    correcta: "La fuerza.",
    incorrectas: ["La flexibilidad.", "La resistencia de larga duración."]
  },
  {
    enunciado: "En la etapa de la ESO, el trabajo de la fuerza debe evitar prioritariamente:",
    correcta: "Las cargas máximas (1RM) que comprometan el cartílago de crecimiento.",
    incorrectas: ["Cualquier ejercicio que implique mover el propio peso corporal.", "Subir escaleras o saltar obstáculos bajos."]
  },
  {
    enunciado: "La 'Flexibilidad Estática' consiste en:",
    correcta: "Mantener una posición de estiramiento durante un tiempo determinado sin movimiento.",
    incorrectas: ["Realizar lanzamientos de piernas de forma repetida.", "Correr mientras se estiran los brazos."]
  },
  {
    enunciado: "La 'Velocidad de Reacción Compleja' se da cuando el sujeto:",
    correcta: "Debe elegir entre varias respuestas posibles ante diferentes estímulos (ej. en deportes de equipo).",
    incorrectas: ["Solo tiene que reaccionar ante un único sonido conocido.", "No tiene que pensar nada para moverse."]
  },
  {
    enunciado: "La 'Resistencia Anaeróbica Láctica' predomina en esfuerzos de alta intensidad que duran entre:",
    correcta: "30 segundos y 2 minutos aproximadamente.",
    incorrectas: ["1 segundo y 5 segundos.", "2 horas y 5 horas."]
  },
  {
    enunciado: "Las capacidades físicas básicas actúan de forma:",
    correcta: "Interrelacionada, siendo difícil encontrar un movimiento donde solo actúe una.",
    incorrectas: ["Totalmente independiente y nunca se mezclan.", "Exclusivamente mental y no afectan al cuerpo."]
  },
  {
    enunciado: "¿Qué factor biológico limita más la flexibilidad?",
    correcta: "El tope óseo articular y la resistencia de ligamentos y cápsula articular.",
    incorrectas: ["El color del pelo del alumno.", "La cantidad de libros que lleva en la mochila."]
  },
  {
    enunciado: "En el desarrollo de la velocidad en secundaria, es fundamental trabajar:",
    correcta: "La técnica de carrera y la coordinación para optimizar la eficiencia motriz.",
    incorrectas: ["La resistencia de larga duración para ser más rápido.", "La inmovilidad absoluta de los brazos al correr."]
  },
  {
    enunciado: "La 'Fuerza Isométrica' se produce cuando:",
    correcta: "Existe tensión muscular pero no hay variación en la longitud del músculo ni movimiento articular.",
    incorrectas: ["El músculo se acorta al vencer una resistencia.", "El músculo se alarga al ser vencido por una carga."]
  },
  {
    enunciado: "¿Qué capacidad física es la base para desarrollar la 'Resistencia a la Velocidad'?",
    correcta: "La resistencia anaeróbica láctica.",
    incorrectas: ["La flexibilidad estática.", "La fuerza máxima absoluta."]
  },
  {
    enunciado: "El entrenamiento de las capacidades físicas en Secundaria debe ser:",
    correcta: "Variado, lúdico y motivador, integrando retos y juegos.",
    incorrectas: ["Aburrido, repetitivo y basado en el castigo.", "Exclusivamente teórico mediante el uso de libros de texto."]
  },
  {
    enunciado: "La 'Amplitud de Movimiento' (ADM) es sinónimo de:",
    correcta: "Flexibilidad.",
    incorrectas: ["Velocidad de desplazamiento.", "Fuerza explosiva."]
  },
  {
    enunciado: "La mejora de la resistencia aeróbica en adolescentes produce adaptaciones como:",
    correcta: "Aumento del volumen sistólico y mejora de la capilarización muscular.",
    incorrectas: ["Disminución del tamaño de los pulmones.", "Aumento de la frecuencia cardíaca en reposo."]
  },
  {
    enunciado: "La 'Potencia' es el producto de:",
    correcta: "Fuerza por Velocidad.",
    incorrectas: ["Resistencia por Flexibilidad.", "Masa por Aceleración de la gravedad."]
  },
  {
    enunciado: "En la evaluación de las capacidades físicas, es importante valorar:",
    correcta: "La progresión individual y el esfuerzo, no solo el resultado absoluto.",
    incorrectas: ["Quién es el más fuerte de la clase para darle un premio.", "Únicamente a los alumnos que sacan sobresaliente."]
  },
  {
    enunciado: "La 'Velocidad Mental' o de anticipación es clave en:",
    correcta: "La táctica de los deportes colectivos de invasión.",
    incorrectas: ["El levantamiento de pesas en gimnasio.", "La realización de estiramientos pasivos."]
  },
  {
    enunciado: "La Educación Física en la LOMLOE busca que las capacidades físicas permitan al alumno:",
    correcta: "Disfrutar de una vida activa y saludable con autonomía.",
    incorrectas: ["Ser el mejor deportista de su ciudad.", "No tener que ir nunca al médico."]
  }
];
