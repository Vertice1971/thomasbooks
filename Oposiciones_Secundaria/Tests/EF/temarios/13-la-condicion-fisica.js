
// -13-la-condicion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "En la evolución de las corrientes sobre la condición física, el paso del modelo de 'Fitness' orientado al rendimiento hacia el 'Health-related Fitness' implica:",
    correcta: "Priorizar las capacidades que tienen una relación directa con el estado de salud y la calidad de vida por encima de las marcas deportivas.",
    incorrectas: ["Eliminar cualquier tipo de esfuerzo físico para evitar el estrés metabólico.", "Centrarse exclusivamente en la musculación estética para mejorar la autoimagen."]
  },
  {
    enunciado: "¿Qué autor define la Condición Física como la suma de las cualidades energéticas y plásticas que determinan el grado de eficacia del individuo en el trabajo físico?",
    correcta: "José María Cagigal",
    incorrectas: ["Pierre Parlebas", "Jean Le Boulch"]
  },
  {
    enunciado: "La 'Condición Física Saludable' (Health-related Physical Fitness) incluye como componentes básicos:",
    correcta: "Resistencia cardiorrespiratoria, fuerza y resistencia muscular, flexibilidad y composición corporal.",
    incorrectas: ["Velocidad de reacción, potencia anaeróbica aláctica y agilidad pura.", "Únicamente el índice de masa corporal (IMC) y el nivel de glucosa."]
  },
  {
    enunciado: "En la etapa de Educación Secundaria, la aplicación de sistemas de desarrollo de la condición física debe realizarse bajo el criterio de:",
    correcta: "Polivalencia y variedad de estímulos, evitando especializaciones metabólicas precoces.",
    incorrectas: ["Entrenamiento específico de alta intensidad para la competición federada.", "Repetición exclusiva de gestos técnicos de un solo deporte."]
  },
  {
    enunciado: "La 'Eficiencia Mecánica' en el contexto de la condición física se refiere a:",
    correcta: "La capacidad de realizar una tarea motriz con el menor gasto energético posible mediante una técnica optimizada.",
    incorrectas: ["El número total de máquinas de gimnasio disponibles en el centro.", "La velocidad máxima alcanzada en un sprint de 60 metros."]
  },
  {
    enunciado: "¿Cómo influye la pubertad en la condición física de las alumnas según la fisiología del ejercicio?",
    correcta: "Se produce un aumento relativo de la masa grasa y una estabilización de la fuerza explosiva en comparación con los varones.",
    incorrectas: ["Se incrementa de forma natural la capacidad de transporte de oxígeno por encima de los varones.", "Desaparece la necesidad de trabajar la flexibilidad debido a la laxitud hormonal."]
  },
  {
    enunciado: "El modelo de 'Acondicionamiento Físico General' busca prioritariamente:",
    correcta: "El desarrollo armónico de todas las capacidades físicas básicas como base para la salud integral.",
    incorrectas: ["La hipertrofia máxima de los grupos musculares del tren superior.", "La especialización en carreras de fondo de larga distancia."]
  },
  {
    enunciado: "En la LOMLOE, los contenidos de condición física se vinculan al saber básico de:",
    correcta: "Vida activa y saludable.",
    incorrectas: ["Cultura motriz.", "Sentido socioafectivo."]
  },
  {
    enunciado: "La 'Capacidad de Trabajo Físico' (PWC 170) es un indicador utilizado históricamente para valorar:",
    correcta: "La potencia aeróbica al alcanzar una frecuencia cardíaca de 170 latidos por minuto.",
    incorrectas: ["El número de flexiones que el alumno hace en 170 segundos.", "La velocidad de carrera en cinta a 170 km/h."]
  },
  {
    enunciado: "Un sistema de desarrollo de la condición física 'analítico' es aquel que:",
    correcta: "Se centra en la mejora aislada de una capacidad física o grupo muscular.",
    incorrectas: ["Integra todas las capacidades en una situación lúdica de juego real.", "No requiere ningún tipo de esfuerzo por parte del alumno."]
  },
  {
    enunciado: "La 'Condición Física Motriz' (Skill-related Fitness) se diferencia de la saludable por incluir:",
    correcta: "Equilibrio, coordinación, agilidad, potencia y velocidad de reacción.",
    incorrectas: ["Resistencia aeróbica y porcentaje de grasa corporal.", "Higiene postural y relajación segmentaria."]
  },
  {
    enunciado: "El principio de 'Multilateralidad' en el desarrollo físico de los adolescentes postula que:",
    correcta: "Se debe buscar un desarrollo equilibrado de todos los sistemas antes de la especialización.",
    incorrectas: ["Solo se debe entrenar un lado del cuerpo para evitar asimetrías.", "El entrenamiento debe realizarse en varios países simultáneamente."]
  },
  {
    enunciado: "¿Qué factor determina la 'Condición Física Anatómica'?",
    correcta: "La estructura ósea, muscular y la composición corporal del sujeto.",
    incorrectas: ["La capacidad de memorizar el nombre de los músculos.", "El número de pulsaciones en estado de reposo."]
  },
  {
    enunciado: "La evolución de la condición física en la adolescencia muestra una 'brecha de género' debido a:",
    correcta: "Factores hormonales (testosterona vs estrógenos) y diferentes niveles de socialización deportiva.",
    incorrectas: ["Que las chicas dejan de tener pulmones a partir de los 14 años.", "Que los chicos no necesitan dormir para recuperar el esfuerzo."]
  },
  {
    enunciado: "Un sistema de desarrollo 'global' de la condición física en Secundaria sería:",
    correcta: "Un circuito de juegos predeportivos de alta intensidad.",
    incorrectas: ["Series de extensiones de cuádriceps en máquina aislada.", "Estiramientos pasivos realizados individualmente en silencio."]
  },
  {
    enunciado: "La 'Autogestión' de la condición física según la LOMLOE implica que el alumno:",
    correcta: "Sepa diseñar y ajustar su propio plan de actividad física basándose en principios científicos básicos.",
    incorrectas: ["Se ponga su propia nota de Educación Física sin intervención del docente.", "No necesite calentar si no se siente cansado."]
  },
  {
    enunciado: "El concepto de 'Vitalidad' en la obra de Cagigal se asocia a:",
    correcta: "La alegría de movimiento y el equilibrio psicofísico derivado de una buena condición física.",
    incorrectas: ["La capacidad de sobrevivir sin comer durante varios días.", "El número de victorias obtenidas en competiciones oficiales."]
  },
  {
    enunciado: "La 'Batería ALPHA-Fitness' destaca por evaluar la condición física en relación con:",
    correcta: "Indicadores de salud cardiovascular, muscular y metabólica en niños y adolescentes.",
    incorrectas: ["El rendimiento en pruebas militares de alta montaña.", "La capacidad de reacción ante estímulos luminosos."]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Composición Corporal' en la salud del adolescente?",
    correcta: "Es un indicador del riesgo metabólico y cardiovascular, más preciso que el peso total.",
    incorrectas: ["Ninguna, solo sirve para saber si la ropa le queda bien.", "Es el único factor que determina la velocidad de carrera."]
  },
  {
    enunciado: "Los sistemas de entrenamiento de la condición física en el marco escolar deben evitar:",
    correcta: "Cargas máximas de compresión sobre el raquis y esfuerzos anaeróbicos lácticos extremos.",
    incorrectas: ["Cualquier tipo de movimiento que eleve la frecuencia cardíaca.", "El uso de música durante las sesiones de ejercicio."]
  },
  {
    enunciado: "La 'Condición Física de Base' es necesaria para:",
    correcta: "Soportar las cargas de aprendizaje de cualquier técnica deportiva sin riesgo de lesión o fatiga excesiva.",
    incorrectas: ["Ganar una medalla olímpica sin haber entrenado previamente.", "Sustituir la alimentación por el ejercicio diario."]
  },
  {
    enunciado: "¿Qué capacidad física es considerada por muchos autores como la 'capacidad física madre'?",
    correcta: "La fuerza.",
    incorrectas: ["La flexibilidad.", "La velocidad de reacción."]
  },
  {
    enunciado: "En el desarrollo de la condición física en Secundaria, la 'individualización' significa:",
    correcta: "Adaptar la intensidad y el volumen a las características biológicas y nivel de partida de cada alumno.",
    incorrectas: ["Que cada alumno debe entrenar solo en una parte distinta del patio.", "Que el profesor no puede dar instrucciones colectivas."]
  },
  {
    enunciado: "La corriente de 'Gimnasia Formativa' se centra en:",
    correcta: "Construir una estructura corporal sólida y funcional para la vida diaria.",
    incorrectas: ["La preparación específica para el combate cuerpo a cuerpo.", "El aprendizaje de coreografías de danza profesional."]
  },
  {
    enunciado: "Un indicador de mala condición física en el adolescente es:",
    correcta: "Una recuperación lenta de la frecuencia cardíaca tras un esfuerzo estandarizado.",
    incorrectas: ["Tener una frecuencia cardíaca de reposo baja (bradicardia funcional).", "Ser capaz de tocarse las puntas de los pies sin doblar las rodillas."]
  },
  {
    enunciado: "La 'Capacidad de Esfuerzo' en la condición física depende de factores:",
    correcta: "Fisiológicos (transporte de O2) y psicológicos (tolerancia a la fatiga).",
    incorrectas: ["Únicamente de la marca de la bebida isotónica que se consuma.", "Del número de seguidores en redes sociales del alumno."]
  },
  {
    enunciado: "Los sistemas de desarrollo 'lúdicos' en condición física favorecen:",
    correcta: "La motivación intrínseca y la adherencia a la práctica físico-deportiva.",
    incorrectas: ["El aburrimiento sistemático del alumnado.", "La pérdida total del control de la intensidad por parte del profesor."]
  },
  {
    enunciado: "¿Qué papel juega el 'descanso' en el desarrollo de la condición física?",
    correcta: "Es el periodo donde se producen las adaptaciones y la supercompensación.",
    incorrectas: ["Es una pérdida de tiempo que debe reducirse al mínimo posible.", "Solo es necesario para personas mayores de 65 años."]
  },
  {
    enunciado: "La 'Condición Física Integral' según los enfoques actuales debe incluir:",
    correcta: "Bienestar emocional y social además de la competencia motriz.",
    incorrectas: ["Exclusivamente el porcentaje de masa muscular magra.", "La capacidad de realizar apnea durante 5 minutos."]
  },
  {
    enunciado: "En 1º y 2º de ESO, los sistemas de condición física deben ser predominantemente:",
    correcta: "Globales y basados en el juego y el descubrimiento.",
    incorrectas: ["Analíticos y basados en series y repeticiones estrictas en gimnasio.", "Inexistentes, ya que a esa edad no se puede mejorar la condición física."]
  },
  {
    enunciado: "¿Qué se entiende por 'Nivel de Condición Física Inicial'?",
    correcta: "El estado de las capacidades del alumno al comienzo de un programa o curso escolar.",
    incorrectas: ["La nota que el alumno trae de la etapa de Primaria.", "El peso del alumno al nacer."]
  },
  {
    enunciado: "La 'Higiene de Vida' es un concepto vinculado a la condición física que incluye:",
    correcta: "Nutrición, descanso, ergonomía y ausencia de hábitos tóxicos.",
    incorrectas: ["Lavarse las manos 50 veces durante la clase de Educación Física.", "El uso de ropa deportiva de seda natural."]
  },
  {
    enunciado: "Un test de condición física saludable en Secundaria es aquel que:",
    correcta: "Informa al alumno sobre su estado de salud sin compararlo necesariamente con los demás.",
    incorrectas: ["Establece un ranking de 'mejores' y 'peores' en el tablón del instituto.", "Requiere realizar un esfuerzo hasta el desmayo."]
  },
  {
    enunciado: "La 'Evolución Ontogénica' de la condición física indica que:",
    correcta: "Existen periodos óptimos para el desarrollo de cada capacidad según la maduración biológica.",
    incorrectas: ["Todas las capacidades crecen de forma lineal desde los 0 a los 80 años.", "La condición física no cambia a lo largo de la vida del sujeto."]
  },
  {
    enunciado: "La 'Condición Física Funcional' permite al individuo:",
    correcta: "Realizar las actividades de la vida diaria de forma eficiente y sin fatiga excesiva.",
    incorrectas: ["Correr un maratón por debajo de las 3 horas obligatoriamente.", "Levantar el triple de su peso corporal en press de banca."]
  },
  {
    enunciado: "Los sistemas de desarrollo de la condición física deben ser 'seguros', lo que implica:",
    correcta: "Evitar ejercicios contraindicados y respetar la técnica de ejecución.",
    incorrectas: ["Realizarlos sentado en un sofá para no caerse.", "No moverse en absoluto durante toda la sesión."]
  },
  {
    enunciado: "La 'Motivación' en el desarrollo de la condición física en adolescentes se potencia mediante:",
    correcta: "La percepción de competencia, la variedad de tareas y la autonomía.",
    incorrectas: ["El miedo al castigo físico o a la mala nota.", "La repetición monótona de los mismos ejercicios cada día."]
  },
  {
    enunciado: "¿Qué componente de la condición física previene el dolor lumbar en adolescentes?",
    correcta: "La fuerza-resistencia de la musculatura lumbopélvica (CORE) y la flexibilidad de los isquiosurales.",
    incorrectas: ["La velocidad de reacción de los dedos de la mano.", "La capacidad de salto vertical."]
  },
  {
    enunciado: "La 'Cultura de la Salud' en Educación Física busca que la condición física sea:",
    correcta: "Un medio para lograr una vida plena y no un fin en sí mismo basado en la estética.",
    incorrectas: ["Una obligación impuesta por el Ministerio de Sanidad.", "Un contenido que solo se trate de forma teórica en el aula."]
  },
  {
    enunciado: "La 'Supercompensación' es el fenómeno por el cual:",
    correcta: "El organismo tras un esfuerzo y recuperación alcanza un nivel superior al inicial.",
    incorrectas: ["El alumno saca un 10 en el examen para compensar un suspenso anterior.", "Se consume más energía de la que se tiene acumulada."]
  }
];
