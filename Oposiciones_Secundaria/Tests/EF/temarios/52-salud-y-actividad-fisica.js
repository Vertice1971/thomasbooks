// 52-salud-y-actividad-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo define la Organización Mundial de la Salud (OMS) el concepto de 'Salud'?",
    correcta: "Un estado de completo bienestar físico, mental y social, y no solo la ausencia de afecciones o enfermedades.",
    incorrectas: [
      "La capacidad de realizar un maratón por debajo de las tres horas sin fatiga aparente.",
      "Un estado biológico de silencio orgánico donde no existe ninguna sensación de dolor."
    ]
  },
  {
    enunciado: "¿Cuál es el efecto principal del entrenamiento aeróbico sobre el sistema cardiovascular?",
    correcta: "Aumento del volumen sistólico, bradicardia en reposo e hipertrofia excéntrica del ventrículo izquierdo.",
    incorrectas: [
      "Reducción del número de capilares sanguíneos para aumentar la presión arterial.",
      "Aumento de la frecuencia cardíaca en reposo por encima de las 100 pulsaciones por minuto."
    ]
  },
  {
    enunciado: "El concepto de 'Sedentarismo' se asocia didácticamente con:",
    correcta: "Un estilo de vida con niveles mínimos de actividad física, factor de riesgo clave para enfermedades no transmisibles (ENT).",
    incorrectas: [
      "Realizar ejercicio físico solo tres veces por semana en lugar de todos los días.",
      "La obligación de estar sentado exclusivamente durante las horas de sueño nocturno."
    ]
  },
  {
    enunciado: "¿Qué beneficio aporta la actividad física regular al sistema óseo durante la adolescencia?",
    correcta: "Aumento de la densidad mineral ósea mediante el estrés mecánico, previniendo la osteoporosis futura.",
    incorrectas: [
      "El acortamiento de los huesos largos para mejorar la agilidad en deportes de equipo.",
      "La transformación del tejido óseo en cartílago flexible para evitar fracturas."
    ]
  },
  {
    enunciado: "En la LOMLOE, la relación entre salud y actividad física se aborda desde una perspectiva:",
    correcta: "Integral, que incluye la salud física, emocional, social y la sostenibilidad ambiental.",
    incorrectas: [
      "Puramente estética, centrada en el control del peso y la musculatura visible.",
      "Exclusivamente competitiva, donde la salud es un medio para ganar medallas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Efecto Hipoglucemiante' del ejercicio físico?",
    correcta: "La capacidad del músculo esquelético de captar glucosa en sangre, mejorando la sensibilidad a la insulina.",
    incorrectas: [
      "El aumento repentino de los niveles de azúcar tras comer dulces antes de correr.",
      "La sensación de mareo que aparece al subir a una montaña de gran altitud."
    ]
  },
  {
    enunciado: "Un beneficio psicológico contrastado de la práctica de actividad física es:",
    correcta: "La liberación de endorfinas y dopamina, que actúan reduciendo los niveles de ansiedad y depresión ligera.",
    incorrectas: [
      "La eliminación total de la necesidad de dormir o descansar durante el fin de semana.",
      "El aumento de la agresividad necesaria para resolver conflictos escolares de forma violenta."
    ]
  },
  {
    enunciado: "¿Cuál es una 'Contraindicación Absoluta' temporal para la práctica de ejercicio físico intenso?",
    correcta: "Fiebre alta, procesos infecciosos agudos o miocarditis reciente.",
    incorrectas: [
      "Tener un nivel de flexibilidad ligeramente inferior a la media de la clase.",
      "Haber olvidado el pulsómetro o la botella de agua en el vestuario."
    ]
  },
  {
    enunciado: "La 'Vigorexia' es un trastorno de la salud relacionado con el deporte que consiste en:",
    correcta: "La obsesión por un cuerpo musculado y una percepción distorsionada de debilidad física.",
    incorrectas: [
      "La falta total de ganas de moverse debido a una pereza crónica extrema.",
      "El miedo irracional a sudar durante las sesiones de Educación Física."
    ]
  },
  {
    enunciado: "¿Cómo influye el ejercicio en el sistema respiratorio a largo plazo?",
    correcta: "Mejora la eficiencia de los músculos respiratorios y aumenta la capacidad de difusión alveolo-capilar.",
    incorrectas: [
      "Reduce el tamaño de los pulmones para que el corazón tenga más espacio en el tórax.",
      "Permite que el ser humano pueda dejar de respirar durante periodos de más de una hora."
    ]
  },
  {
    enunciado: "La 'Triada de la Mujer Deportista' es un riesgo para la salud que incluye:",
    correcta: "Baja disponibilidad energética, disfunción menstrual y baja densidad mineral ósea.",
    incorrectas: [
      "Fuerza, velocidad y resistencia por encima de los niveles masculinos normales.",
      "Uso de zapatillas, mallas y tops de alta tecnología deportiva."
    ]
  },
  {
    enunciado: "El 'Sobreentrenamiento' se manifiesta fisiológicamente por:",
    correcta: "Fatiga persistente, alteraciones del sueño, pérdida de apetito y descenso del rendimiento.",
    incorrectas: [
      "Una mejora espectacular de todas las marcas personales en una sola semana.",
      "La ausencia total de latidos cardíacos durante la fase de recuperación profunda."
    ]
  },
  {
    enunciado: "¿Qué papel juega la actividad física en la prevención del cáncer de colon?",
    correcta: "Acelera el tránsito intestinal, reduciendo el tiempo de contacto de posibles carcinógenos con la mucosa.",
    incorrectas: [
      "Elimina todas las células del cuerpo de forma aleatoria para que nazcan nuevas.",
      "Sustituye la necesidad de realizarse revisiones médicas periódicas."
    ]
  },
  {
    enunciado: "En el marco de la salud, ¿qué es la 'Carga de Entrenamiento'?",
    correcta: "El conjunto de estímulos (volumen, intensidad, densidad) que provocan adaptaciones en el organismo.",
    incorrectas: [
      "El peso total en kilogramos de todo el material que se guarda en el almacén de EF.",
      "La cantidad de deberes que el alumno debe hacer al llegar a su casa tras la clase."
    ]
  },
  {
    enunciado: "La actividad física contribuye a la 'Salud Social' en la escuela mediante:",
    correcta: "El desarrollo de habilidades de comunicación, cooperación y respeto a la diversidad.",
    incorrectas: [
      "La creación de grupos exclusivos donde solo pueden entrar los alumnos más rápidos.",
      "Fomentar que los alumnos se juzguen entre sí basándose en su marca de ropa."
    ]
  },
  {
    enunciado: "Un riesgo derivado de la práctica de ejercicio en ambientes calurosos es:",
    correcta: "La deshidratación severa, que puede derivar en un golpe de calor y fallo multiorgánico.",
    incorrectas: [
      "Que los músculos se derritan debido al exceso de temperatura interna.",
      "Un aumento de la inteligencia lógica debido a la evaporación del sudor."
    ]
  },
  {
    enunciado: "La 'Higiene Corporal' tras la práctica física es una recomendación de salud que busca:",
    correcta: "Eliminar el sudor y las bacterias, además de favorecer la relajación muscular y el bienestar.",
    incorrectas: [
      "Que los alumnos gasten la mayor cantidad de agua posible para ayudar al centro.",
      "Evitar que el profesor sienta malos olores durante el resto de la jornada lectiva."
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el ejercicio físico sobre el 'Perfil Lipídico'?",
    correcta: "Aumenta los niveles de colesterol HDL (bueno) y reduce los triglicéridos y el colesterol LDL.",
    incorrectas: [
      "Convierte todas las proteínas del cuerpo en grasa saturada de reserva.",
      "Elimina por completo la necesidad de ingerir grasas a través de la alimentación."
    ]
  },
  {
    enunciado: "La 'Adherencia' al ejercicio es fundamental para la salud porque:",
    correcta: "Los beneficios fisiológicos solo se mantienen si la práctica es regular y duradera en el tiempo.",
    incorrectas: [
      "Permite que los alumnos se peguen literalmente a las paredes del gimnasio.",
      "Es una técnica para correr por superficies resbaladizas sin caerse."
    ]
  },
  {
    enunciado: "Desde el punto de vista metabólico, la actividad física ayuda a controlar el peso porque:",
    correcta: "Aumenta el gasto calórico total y eleva el metabolismo basal tras el esfuerzo (EPOC).",
    incorrectas: [
      "Hace que la comida no tenga calorías cuando se ingiere justo antes de correr.",
      "Reduce el tamaño del estómago de forma física y permanente."
    ]
  },
  {
    enunciado: "¿Cuál es la recomendación de actividad física diaria de la OMS para adolescentes?",
    correcta: "Al menos 60 minutos de actividad física de intensidad moderada a vigorosa, principalmente aeróbica.",
    incorrectas: [
      "Realizar 10 minutos de estiramientos pasivos una vez al mes.",
      "Estar de pie al menos 24 horas seguidas sin sentarse en ningún momento."
    ]
  },
  {
    enunciado: "La 'Sarcopenia' es un proceso que la actividad física (especialmente de fuerza) ayuda a prevenir. Consiste en:",
    correcta: "La pérdida progresiva de masa y fuerza muscular asociada al envejecimiento o al sedentarismo.",
    incorrectas: [
      "Un aumento excesivo del número de pecas en la piel por la exposición al sol.",
      "La inflamación de las encías por morder el material deportivo de goma."
    ]
  },
  {
    enunciado: "¿Qué es la 'Reserva Funcional'?",
    correcta: "La diferencia entre la capacidad máxima de un sistema (ej. cardiovascular) y la exigencia en reposo.",
    incorrectas: [
      "La cantidad de dinero que el centro educativo guarda para comprar balones nuevos.",
      "El número de alumnos suplentes que esperan en la banda durante un partido."
    ]
  },
  {
    enunciado: "Un factor protector de la salud mental en el deporte escolar es:",
    correcta: "El enfoque hacia la mejora personal y el disfrute, evitando la presión excesiva por el resultado.",
    incorrectas: [
      "La comparación humillante entre los alumnos más hábiles y los que tienen dificultades.",
      "La obligatoriedad de ganar todos los partidos para poder aprobar la asignatura."
    ]
  },
  {
    enunciado: "La 'Muerte Súbita' en el deporte, aunque poco común, suele estar relacionada en jóvenes con:",
    correcta: "Patologías cardíacas congénitas no diagnosticadas, como la miocardiopatía hipertrófica.",
    incorrectas: [
      "Correr con las zapatillas desatadas durante más de cinco minutos seguidos.",
      "Haber comido un chicle justo antes de empezar la sesión de resistencia."
    ]
  },
  {
    enunciado: "El ejercicio de 'Impacto' (saltos, carrera) está contraindicado en personas con:",
    correcta: "Lesiones articulares degenerativas graves o fracturas por estrés en fase aguda.",
    incorrectas: [
      "Un nivel de inteligencia muy alto o una gran capacidad de memoria visual.",
      "Haber nacido en un mes de invierno con temperaturas muy bajas."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el 'Sueño' en la relación salud-actividad física?",
    correcta: "Es el periodo crítico para la regeneración de tejidos, la consolidación del aprendizaje motor y la recuperación hormonal.",
    incorrectas: [
      "Ninguna; dormir es una pérdida de tiempo que resta horas al entrenamiento.",
      "Sirve para que los músculos se vuelvan más largos de forma puramente mágica."
    ]
  },
  {
    enunciado: "La 'Anorexia Atlética' se diferencia de la anorexia nerviosa común en que:",
    correcta: "La restricción calórica busca mejorar el rendimiento deportivo o cumplir con un estándar de peso competitivo.",
    incorrectas: [
      "Consiste en comer el doble de lo normal para ganar fuerza rápidamente.",
      "Solo afecta a los deportistas que practican natación sincronizada en invierno."
    ]
  },
  {
    enunciado: "La actividad física mejora la 'Función Cognitiva' en estudiantes porque:",
    correcta: "Aumenta el flujo sanguíneo cerebral y la síntesis de factores neurotróficos (BDNF).",
    incorrectas: [
      "Hace que el cerebro sea más pequeño y por tanto la información esté más apretada.",
      "Permite leer libros sin necesidad de abrir los ojos gracias a la telepatía motriz."
    ]
  },
  {
    enunciado: "El 'Enfoque de Género' en salud y deporte escolar debe considerar:",
    correcta: "Las diferencias fisiológicas (ciclo menstrual) y socioculturales para garantizar una práctica equitativa y segura.",
    incorrectas: [
      "Que las chicas no pueden realizar esfuerzos intensos porque su corazón es más débil.",
      "Que los chicos no necesitan calentar porque su musculatura es siempre resistente."
    ]
  },
  {
    enunciado: "Un indicador de salud metabólica que se puede trabajar en EF es el 'IMC' (Índice de Masa Corporal), que se calcula:",
    correcta: "Peso (kg) / [Estatura (m)]².",
    incorrectas: [
      "Estatura (cm) + Edad (años).",
      "Número de pulsaciones / Talla de pantalón."
    ]
  },
  {
    enunciado: "La 'Diabetes Tipo 2' se puede prevenir y mejorar con ejercicio porque:",
    correcta: "Reduce la resistencia a la insulina y ayuda a controlar los niveles de hemoglobina glicosilada.",
    incorrectas: [
      "Elimina por completo la necesidad de que el páncreas funcione en el cuerpo.",
      "Transforma el azúcar de la sangre en oxígeno puro de forma instantánea."
    ]
  },
  {
    enunciado: "La 'Condición Física Saludable' incluye componentes como:",
    correcta: "Resistencia cardiorrespiratoria, fuerza muscular, flexibilidad y composición corporal.",
    incorrectas: [
      "Velocidad de reacción ante un rayo y capacidad de saltar desde un avión.",
      "Belleza del rostro, color de los ojos y longitud del cabello."
    ]
  },
  {
    enunciado: "El 'Calentamiento' es una medida de salud preventiva que busca:",
    correcta: "Aumentar la temperatura muscular, mejorar la viscosidad sinovial y preparar el sistema nervioso.",
    incorrectas: [
      "Que los alumnos se cansen antes de empezar para que no den problemas.",
      "Hacer que la ropa de deporte se estire para que sea más cómoda."
    ]
  },
  {
    enunciado: "Un hábito saludable vinculado a la actividad física es la 'Ergonomía', que estudia:",
    correcta: "La adaptación de las herramientas y el entorno a las capacidades y necesidades físicas del usuario.",
    incorrectas: [
      "El estudio de los erguimientos de los animales salvajes en la naturaleza.",
      "La capacidad de ahorrar dinero comprando material deportivo de segunda mano."
    ]
  },
  {
    enunciado: "La 'Autoestima' mejora con la actividad física cuando el alumno:",
    correcta: "Percibe una mejora en su competencia motriz y se siente integrado en el grupo.",
    incorrectas: [
      "Gana a todos sus compañeros y se siente superior a ellos como persona.",
      "Recibe regalos caros por cada vez que asiste a la clase de Educación Física."
    ]
  },
  {
    enunciado: "¿Qué es el 'Efecto Rebote' en las dietas asociadas al deporte?",
    correcta: "La recuperación rápida del peso perdido tras abandonar una dieta restrictiva, a menudo con un aumento extra.",
    incorrectas: [
      "La capacidad de un balón de baloncesto para volver a la mano tras botar.",
      "El salto que realiza un deportista cuando se golpea accidentalmente el pie."
    ]
  },
  {
    enunciado: "La 'Sostenibilidad' en la salud deportiva implica:",
    correcta: "Realizar actividades físicas que respeten el medio ambiente y utilicen recursos de forma responsable.",
    incorrectas: [
      "Entrenar solo en gimnasios que utilicen muchísima luz artificial y aire acondicionado.",
      "Tirar el material deportivo a la basura cada vez que se ensucia un poco."
    ]
  },
  {
    enunciado: "La 'Evaluación de la Salud' en EF debe ser respetuosa y evitar:",
    correcta: "La estigmatización por el aspecto físico o la exposición pública de datos sensibles (peso, grasa).",
    incorrectas: [
      "Que los alumnos aprendan a tomarse las pulsaciones por sí mismos.",
      "El uso de cronómetros para medir la duración de una carrera de resistencia."
    ]
  },
  {
    enunciado: "El fin último de la relación entre salud y actividad física en el currículo es:",
    correcta: "La adquisición de un estilo de vida activo y autónomo que perdure tras la etapa escolar.",
    incorrectas: [
      "Que todos los alumnos consigan un cuerpo de culturista profesional antes de los 16 años.",
      "Sustituir a los médicos de familia por profesores de Educación Física en los hospitales."
    ]
  }
];