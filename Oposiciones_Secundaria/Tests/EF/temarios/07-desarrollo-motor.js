// -07-desarrollo-motor.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué autor define el desarrollo motor como un proceso continuo y progresivo que abarca desde la concepción hasta la muerte, influenciado por la biología y el entorno?",
    correcta: "David L. Gallahue",
    incorrectas: ["Jean Piaget", "B.F. Skinner"]
  },
  {
    enunciado: "Según el modelo de la 'Capa de la Montaña' de Clark y Metcalfe, ¿qué periodo se caracteriza por la aparición de las primeras formas de movimiento voluntario?",
    correcta: "Periodo preadaptado.",
    incorrectas: ["Periodo de movimientos fundamentales.", "Periodo de maestría deportiva."]
  },
  {
    enunciado: "El desarrollo motor sigue dos leyes fundamentales de maduración nerviosa. ¿Cómo se denomina la ley que indica que el control se adquiere desde el centro del cuerpo hacia las extremidades?",
    correcta: "Ley Próximo-distal.",
    incorrectas: ["Ley Céfalo-caudal.", "Ley de Flexo-extensión."]
  },
  {
    enunciado: "En la etapa de Educación Secundaria, la pubertad genera una 'desarmonía morfofuncional' que afecta principalmente a:",
    correcta: "La coordinación dinámica general y el esquema corporal debido al crecimiento longitudinal óseo acelerado.",
    incorrectas: ["La capacidad de memorizar reglas de juego complejas.", "La agudeza visual y auditiva de forma permanente."]
  },
  {
    enunciado: "Gallahue establece una jerarquía en el desarrollo. ¿En qué fase se encuentran normalmente los alumnos que comienzan 1º de ESO respecto a las habilidades motrices?",
    correcta: "Fase de habilidades motrices específicas.",
    incorrectas: ["Fase de movimientos reflejos.", "Fase de movimientos rudimentarios."]
  },
  {
    enunciado: "La 'mielinización' de las fibras nerviosas es un proceso clave en el desarrollo motor porque:",
    correcta: "Aumenta la velocidad y precisión de la transmisión del impulso nervioso, permitiendo movimientos más complejos.",
    incorrectas: ["Reduce la fatiga muscular en esfuerzos anaeróbicos lácticos.", "Permite que el hueso crezca en grosor mediante el depósito de calcio."]
  },
  {
    enunciado: "Un factor cualitativo del movimiento humano que evoluciona notablemente en la adolescencia es:",
    correcta: "La fluidez y la anticipación perceptiva.",
    incorrectas: ["La talla y el peso corporal.", "La cantidad de fibras musculares tipo I."]
  },
  {
    enunciado: "¿Qué diferencia el 'crecimiento' del 'desarrollo' en términos técnicos?",
    correcta: "El crecimiento es un aumento cuantitativo de masa; el desarrollo es un proceso cualitativo de diferenciación y maduración de funciones.",
    incorrectas: ["Son sinónimos que se refieren al aumento de la capacidad aeróbica.", "El crecimiento depende del entorno y el desarrollo solo de la genética."]
  },
  {
    enunciado: "El periodo 'crítico' o 'ventana de oportunidad' en el desarrollo motor se refiere a:",
    correcta: "Momentos del crecimiento donde el organismo es especialmente receptivo a ciertos estímulos de aprendizaje.",
    incorrectas: ["El momento de la competición donde el alumno sufre más estrés.", "La fase final del crecimiento donde ya no se puede aprender nada nuevo."]
  },
  {
    enunciado: "La teoría de los 'Sistemas Dinámicos' de Thelen sugiere que el desarrollo motor surge de:",
    correcta: "La auto-organización de múltiples sistemas (neurofisiológico, biomecánico, ambiental) sin un programa central rígido.",
    incorrectas: ["La ejecución de programas motores almacenados exclusivamente en el cerebelo.", "La imitación mecánica de modelos técnicos de élite."]
  },
  {
    enunciado: "En la adolescencia, el aumento de los niveles de testosterona en los varones conlleva:",
    correcta: "Un aumento significativo de la masa muscular y la capacidad de generar fuerza explosiva.",
    incorrectas: ["Una mayor flexibilidad articular por laxitud de los ligamentos.", "Un retraso en el cierre de las epífisis óseas."]
  },
  {
    enunciado: "¿Qué autor asocia los estadios del desarrollo cognitivo con el desarrollo motor, hablando del periodo 'Sensorio-motor'?",
    correcta: "Jean Piaget",
    incorrectas: ["Henri Wallon", "Arnold Gesell"]
  },
  {
    enunciado: "La 'disociación segmentaria' es un logro del desarrollo motor que permite:",
    correcta: "Mover partes del cuerpo de forma independiente y coordinada sin involucrar a todo el organismo.",
    incorrectas: ["Separar un hueso de su articulación de forma voluntaria.", "Realizar una carrera de resistencia sin mover los brazos."]
  },
  {
    enunciado: "El 'pico de velocidad de crecimiento' (PHV) es un indicador fundamental en EF para:",
    correcta: "Ajustar las cargas de entrenamiento y vigilar el riesgo de lesiones por sobrecarga.",
    incorrectas: ["Medir la velocidad máxima en un sprint de 30 metros.", "Calcular la nota del alumno en la asignatura."]
  },
  {
    enunciado: "En el desarrollo cualitativo, la 'lateralización' se considera consolidada normalmente hacia los:",
    correcta: "6-8 años, aunque en secundaria se perfecciona su aplicación en tareas complejas.",
    incorrectas: ["15-18 años, coincidiendo con la mayoría de edad.", "2-3 años, antes de la escolarización."]
  },
  {
    enunciado: "¿Qué capacidad perceptivo-motriz permite al adolescente situar su cuerpo en relación a los objetos y a los demás?",
    correcta: "Estructuración espacio-temporal.",
    incorrectas: ["Fuerza isométrica.", "Capacidad vital pulmonar."]
  },
  {
    enunciado: "La 'filogénesis' del movimiento humano se refiere a:",
    correcta: "La evolución de las habilidades motrices a lo largo de la historia de la especie humana.",
    incorrectas: ["El desarrollo motor de un individuo desde que nace hasta que muere.", "La capacidad de realizar movimientos de flexión y extensión."]
  },
  {
    enunciado: "Un aspecto cualitativo relevante en la evolución motriz del adolescente es la mejora de la 'retroalimentación intrínseca', que es:",
    correcta: "La capacidad del alumno para sentir y corregir su propio movimiento mediante sus sentidos (propiocepción).",
    incorrectas: ["La corrección que el profesor grita desde la banda.", "El aplauso de los compañeros tras una buena jugada."]
  },
  {
    enunciado: "La 'ontogénesis' motriz se define como:",
    correcta: "El proceso de adquisición y cambio de conductas motrices de un individuo particular a lo largo de su vida.",
    incorrectas: ["El estudio de los fósiles humanos en relación al ejercicio.", "La capacidad de los gemelos para moverse de forma idéntica."]
  },
  {
    enunciado: "En secundaria, la evolución de la flexibilidad muestra una tendencia:",
    correcta: "Inversamente proporcional al crecimiento óseo y muscular si no se trabaja específicamente.",
    incorrectas: ["Ascendente de forma natural hasta los 25 años.", "Estable independientemente de la actividad física realizada."]
  },
  {
    enunciado: "El concepto de 'afordancia' (affordance) de Gibson en el desarrollo motor se refiere a:",
    correcta: "Las posibilidades de acción que el entorno ofrece al sujeto en función de sus capacidades.",
    incorrectas: ["El coste económico de las zapatillas de deporte.", "La resistencia que ofrece el aire al correr."]
  },
  {
    enunciado: "La maduración del córtex prefrontal en la adolescencia permite una mejora en:",
    correcta: "La planificación motriz, el control de la impulsividad y la toma de decisiones tácticas.",
    incorrectas: ["La velocidad de contracción de las fibras rápidas.", "La elasticidad del tendón de Aquiles."]
  },
  {
    enunciado: "Gallahue denomina 'habilidades motrices especializadas' a aquellas que:",
    correcta: "Son habilidades fundamentales refinadas y aplicadas a deportes o danzas específicas.",
    incorrectas: ["Se realizan de forma inconsciente por reflejo.", "Solo pueden realizar los astronautas."]
  },
  {
    enunciado: "La 'sinaptogénesis' es un proceso del desarrollo nervioso que facilita:",
    correcta: "La creación de nuevas conexiones neuronales que sustentan nuevos aprendizajes motrices.",
    incorrectas: ["La producción de glóbulos rojos en la médula ósea.", "La expulsión de ácido láctico tras un esfuerzo intenso."]
  },
  {
    enunciado: "En la evaluación del desarrollo motor, los 'tests de proceso' se centran en:",
    correcta: "Cómo el alumno realiza el movimiento (forma, técnica, fluidez).",
    incorrectas: ["Cuánto salta o cuánto corre el alumno (resultado cuantitativo).", "Si el alumno trae la ropa deportiva limpia."]
  },
  {
    enunciado: "El 'retraso madurativo' en Educación Física debe abordarse desde la LOMLOE mediante:",
    correcta: "La individualización de la enseñanza y el respeto a los ritmos de aprendizaje personales.",
    incorrectas: ["La obligatoriedad de que el alumno alcance el mismo nivel que el resto en el mismo tiempo.", "La exención de las actividades motrices para que no se frustre."]
  },
  {
    enunciado: "La evolución de la coordinación óculo-manual en secundaria permite:",
    correcta: "Realizar tareas de precisión a mayor velocidad y en entornos de alta incertidumbre.",
    incorrectas: ["Cerrar los ojos durante la ejecución de cualquier salto.", "Sustituir la visión por el oído en todos los deportes."]
  },
  {
    enunciado: "¿Qué autor destaca la importancia de la 'función tónica' como base del desarrollo de la postura y la emoción?",
    correcta: "Henri Wallon",
    incorrectas: ["Sigmund Freud", "Ivan Pavlov"]
  },
  {
    enunciado: "La 'atereognosia' motriz en el desarrollo se manifiesta como una dificultad para:",
    correcta: "Reconocer formas u objetos mediante el tacto y el movimiento sin la ayuda de la vista.",
    incorrectas: ["Correr en línea recta sin marearse.", "Recordar el nombre del profesor de EF."]
  },
  {
    enunciado: "En el desarrollo motor, el 'estadio de transición' de Gallahue se sitúa típicamente en:",
    correcta: "El final de la infancia y comienzo de la adolescencia (7-10 años).",
    incorrectas: ["La etapa de jubilación.", "El periodo prenatal."]
  },
  {
    enunciado: "La 'plasticidad cerebral' es una característica del desarrollo que permite:",
    correcta: "Que el cerebro se reorganice y aprenda nuevas habilidades incluso tras lesiones o periodos de inactividad.",
    incorrectas: ["Que la cabeza sea flexible para amortiguar golpes.", "Que el cerebro se convierta en músculo tras mucho entrenamiento."]
  },
  {
    enunciado: "En las alumnas, la aparición de la menarquia suele coincidir con:",
    correcta: "Una deceleración del crecimiento longitudinal y una estabilización de algunas capacidades físicas.",
    incorrectas: ["Un aumento brusco de la velocidad de reacción.", "La pérdida total de la capacidad de equilibrio."]
  },
  {
    enunciado: "La 'coordinación intersegmentaria' requiere técnicamente:",
    correcta: "La integración armoniosa de movimientos de diferentes partes del cuerpo de forma simultánea.",
    incorrectas: ["El uso de un solo segmento corporal para realizar una tarea.", "La parálisis de una parte del cuerpo para mover otra."]
  },
  {
    enunciado: "¿Qué factor ambiental influye más poderosamente en el desarrollo motor del adolescente actual?",
    correcta: "El nivel de actividad física diaria y las oportunidades de práctica motriz variada.",
    incorrectas: ["El color de las paredes del instituto.", "La marca del balón utilizado en clase."]
  },
  {
    enunciado: "La 'esquema corporal' se define en el desarrollo como:",
    correcta: "La representación mental que el sujeto tiene de su propio cuerpo, tanto en reposo como en movimiento.",
    incorrectas: ["El dibujo que el alumno hace de sí mismo en una hoja de papel.", "La cantidad de ropa que el alumno lleva puesta."]
  },
  {
    enunciado: "En el desarrollo de la agilidad, influye de forma determinante:",
    correcta: "La combinación de velocidad, equilibrio dinámico y coordinación.",
    incorrectas: ["Únicamente la fuerza máxima absoluta.", "La capacidad de dormir 8 horas diarias."]
  },
  {
    enunciado: "La 'madurez motriz' se alcanza cuando el individuo:",
    correcta: "Es capaz de aplicar con éxito y autonomía su repertorio motor a situaciones complejas y diversas.",
    incorrectas: ["Cumple los 18 años independientemente de su experiencia previa.", "Gana su primera medalla en un campeonato nacional."]
  },
  {
    enunciado: "Un objetivo de la LOMLOE en relación al desarrollo motor es que el alumno logre:",
    correcta: "Una competencia motriz que le permita participar en actividades físico-deportivas de forma saludable a lo largo de su vida.",
    incorrectas: ["La especialización técnica en un solo deporte olímpico.", "La superación de las marcas obtenidas en la generación anterior."]
  },
  {
    enunciado: "La 'inhibición motriz' en el desarrollo se refiere a la capacidad de:",
    correcta: "Frenar o controlar movimientos innecesarios para mejorar la precisión y eficiencia de la tarea.",
    incorrectas: ["No querer moverse por pereza o falta de motivación.", "Estar en estado de coma tras un esfuerzo máximo."]
  },
  {
    enunciado: "La evolución de los 'patrones motores fundamentales' hacia los 'específicos' es un proceso de:",
    correcta: "Diferenciación y refinamiento técnico.",
    incorrectas: ["Simplificación y pérdida de riqueza motriz.", "Crecimiento óseo puramente biológico."]
  }
];
