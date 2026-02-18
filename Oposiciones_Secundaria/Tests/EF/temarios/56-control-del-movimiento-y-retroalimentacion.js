// 56-desarrollo-motor-y-crecimiento.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué diferencia técnica define los conceptos de 'Crecimiento' y 'Maduración'?",
    correcta: "El crecimiento es un proceso cuantitativo (aumento de masa y tamaño); la maduración es cualitativa (evolución hacia el estado adulto de sistemas y funciones).",
    incorrectas: [
      "El crecimiento depende exclusivamente de la genética y la maduración depende únicamente del entorno social.",
      "El crecimiento termina en la pubertad y la maduración continúa de forma lineal durante toda la vejez."
    ]
  },
  {
    enunciado: "La 'Ley Céfalo-Caudal' del desarrollo motor establece que:",
    correcta: "El control voluntario y la maduración nerviosa progresan desde la cabeza hacia los pies.",
    incorrectas: [
      "Los órganos internos maduran antes que las estructuras óseas y musculares periféricas.",
      "El desarrollo de la fuerza máxima ocurre antes en las extremidades inferiores que en el tronco."
    ]
  },
  {
    enunciado: "¿En qué consiste la 'Ley Próximo-Distal'?",
    correcta: "El control motor se adquiere desde el eje central del cuerpo hacia las extremidades.",
    incorrectas: [
      "La maduración de los sentidos precede a la maduración de las funciones motoras complejas.",
      "El crecimiento de los huesos largos es más rápido en la zona distal que en la proximal durante la infancia."
    ]
  },
  {
    enunciado: "En la etapa de los 6 a los 12 años (Educación Primaria), ¿qué caracteriza al desarrollo motor según Gallahue?",
    correcta: "La transición de las habilidades motrices básicas hacia las habilidades motrices específicas y combinadas.",
    incorrectas: [
      "El predominio de los reflejos arcaicos y la ausencia de control segmentario voluntario.",
      "La especialización técnica de alto rendimiento y la estabilización definitiva de la talla."
    ]
  },
  {
    enunciado: "El 'Estirón Puberal' o pico de velocidad de crecimiento (PHV) suele provocar temporalmente:",
    correcta: "Una desestabilización en la coordinación motriz debido a la alteración de las palancas óseas y el esquema corporal.",
    incorrectas: [
      "Un aumento inmediato de la flexibilidad debido a la elongación pasiva de los ligamentos.",
      "La fijación definitiva de los patrones de movimiento que ya no podrán modificarse en el futuro."
    ]
  },
  {
    enunciado: "¿Qué es la 'Edad Ósea' y por qué es un indicador de maduración más fiable que la edad cronológica?",
    correcta: "Mide el grado de osificación de los cartílagos de crecimiento, reflejando el estado real de desarrollo biológico.",
    incorrectas: [
      "Es la suma de los años de vida multiplicada por el peso del esqueleto del individuo.",
      "Mide la resistencia a la fractura de la diáfisis de los huesos largos mediante ultrasonidos."
    ]
  },
  {
    enunciado: "Según Piaget, el desarrollo motor es la base del desarrollo cognitivo en el estadio:",
    correcta: "Sensoriomotor (0-2 años), donde la inteligencia se manifiesta a través de la acción y los sentidos.",
    incorrectas: [
      "De las operaciones formales, donde el movimiento desaparece para dar paso al pensamiento abstracto.",
      "Preoperacional, donde el juego simbólico impide el desarrollo de nuevas habilidades motrices."
    ]
  },
  {
    enunciado: "¿Cuál es el periodo crítico para el desarrollo de las 'Capacidades Coordinativas'?",
    correcta: "Entre los 6 y los 12 años, debido a la gran plasticidad del sistema nervioso central.",
    incorrectas: [
      "Durante la primera infancia (0-3 años), antes de que el niño empiece a caminar.",
      "Tras la maduración sexual completa, cuando los niveles hormonales se estabilizan."
    ]
  },
  {
    enunciado: "El concepto de 'Alfabetización Motriz' (Physical Literacy) implica:",
    correcta: "Poseer la motivación, confianza y competencia física para valorar y mantener la actividad física de por vida.",
    incorrectas: [
      "Saber escribir y nombrar correctamente todas las partes del sistema locomotor humano.",
      "La capacidad de leer reglamentos deportivos y memorizar las marcas olímpicas."
    ]
  },
  {
    enunciado: "En la adolescencia, el aumento de la fuerza muscular se debe principalmente a:",
    correcta: "Factores hormonales (testosterona, GH) y el aumento del área de sección transversal del músculo.",
    incorrectas: [
      "Una reducción del número de fibras musculares para aumentar la densidad de las existentes.",
      "La transformación de las fibras tipo I (lentas) en fibras tipo II (rápidas) de forma espontánea."
    ]
  },
  {
    enunciado: "La 'Disociación Segmentaria' es un hito del desarrollo que permite:",
    correcta: "Mover de forma independiente diferentes partes del cuerpo para realizar tareas complejas.",
    incorrectas: [
      "Separar los huesos de las articulaciones mediante ejercicios de estiramiento extremo.",
      "Dividir la clase de Educación Física en grupos según su nivel de maduración biológica."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al desarrollo motor en la 'Tercera Infancia' (9-12 años)?",
    correcta: "Una fase de equilibrio y eficiencia motriz conocida como 'la edad de oro' del aprendizaje.",
    incorrectas: [
      "Una pérdida de control postural debido al inicio prematuro del crecimiento longitudinal.",
      "La consolidación de los reflejos posturales que impiden la adquisición de nuevas técnicas."
    ]
  },
  {
    enunciado: "El 'Somatotipo' de un individuo (ectomorfia, mesomorfia, endomorfia) es un factor de crecimiento que:",
    correcta: "Describe la forma física y composición corporal predominante, influenciada por la genética y el ambiente.",
    incorrectas: [
      "Determina de forma inamovible la inteligencia y la capacidad de aprendizaje cognitivo.",
      "Cambia radicalmente cada semana según el tipo de ejercicio realizado en la sesión de EF."
    ]
  },
  {
    enunciado: "La 'Mielinización' de las fibras nerviosas es un proceso de maduración que provoca:",
    correcta: "Un aumento en la velocidad y precisión de la transmisión de los impulsos nerviosos.",
    incorrectas: [
      "Una disminución de la capacidad de respuesta ante estímulos externos visuales.",
      "La desaparición de la memoria motriz a corto plazo en favor de la de largo plazo."
    ]
  },
  {
    enunciado: "En la LOMLOE, el desarrollo motor se vincula con la 'Competencia Motriz' para:",
    correcta: "Integrar conocimientos, procedimientos y actitudes que permitan responder a demandas complejas.",
    incorrectas: [
      "Asegurar que todos los alumnos alcancen la misma estatura al finalizar la etapa de Secundaria.",
      "Eliminar las diferencias biológicas entre individuos mediante el entrenamiento estandarizado."
    ]
  },
  {
    enunciado: "¿Qué es el 'Diferencial de Maduración'?",
    correcta: "La discrepancia que puede existir entre la edad cronológica y la edad biológica de un sujeto.",
    incorrectas: [
      "La resta entre la altura del padre y la altura del hijo en el momento de la pubertad.",
      "La diferencia de fuerza entre el brazo dominante y el brazo no dominante."
    ]
  },
  {
    enunciado: "La 'Flexibilidad' es la única capacidad física que:",
    correcta: "Involuciona de forma natural con la edad si no se trabaja de manera específica.",
    incorrectas: [
      "Mejora espontáneamente durante la adolescencia sin necesidad de práctica.",
      "Depende exclusivamente del tamaño del corazón y la capacidad pulmonar."
    ]
  },
  {
    enunciado: "El desarrollo motor 'Filogenético' hace referencia a:",
    correcta: "Los patrones de movimiento comunes a toda la especie humana (gatear, caminar).",
    incorrectas: [
      "Las habilidades aprendidas de forma individual por un sujeto (nadar, esquiar).",
      "El estudio de los huesos de los antepasados para predecir el crecimiento futuro."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Entorno' en el desarrollo motor según el modelo bioecológico de Bronfenbrenner?",
    correcta: "Actúa como un sistema de contextos interconectados que influyen en las oportunidades de práctica y desarrollo.",
    incorrectas: [
      "No influye en absoluto, ya que el desarrollo motor es un proceso 100% genético y predeterminado.",
      "Es el único factor determinante, anulando cualquier influencia de la herencia biológica."
    ]
  },
  {
    enunciado: "La 'Inhibición Muscular' voluntaria es fundamental en el desarrollo para:",
    correcta: "Permitir la relajación de los músculos antagonistas y lograr un movimiento fluido y coordinado.",
    incorrectas: [
      "Impedir que el alumno realice cualquier tipo de ejercicio físico durante las horas de clase.",
      "Bloquear el crecimiento de los músculos para que no superen el tamaño de los huesos."
    ]
  }
];