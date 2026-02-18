// -32-la-relajacion.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el fundamento neurofisiológico de la Relajación Progresiva de Edmund Jacobson?",
    correcta: "La identificación consciente de la tensión muscular para lograr, mediante contracciones previas, una inhibición de las motoneuronas alfa y una reducción del tono basal.",
    incorrectas: [
      "La autosugestión de sensaciones térmicas que provocan una vasodilatación periférica mediada por el hipotálamo.",
      "La movilización del líquido cefalorraquídeo mediante ejercicios de respiración forzada en apnea."
    ]
  },
  {
    enunciado: "El Entrenamiento Autógeno de Johannes Schultz se basa en la 'desconexión organísmica'. ¿Cuál es el primer ejercicio de la serie inferior?",
    correcta: "La experiencia de peso, que busca la relajación de la musculatura estriada mediante fórmulas de pesadez.",
    incorrectas: [
      "La experiencia de calor, orientada a la regulación del sistema vascular periférico.",
      "La regulación de la pulsación cardíaca mediante la visualización del miocardio."
    ]
  },
  {
    enunciado: "En el ámbito de la psicomotricidad, ¿cómo define Ajuriaguerra el estado de relajación?",
    correcta: "Como una técnica que permite el control del tono muscular y la distensión psíquica, favoreciendo la conciencia del esquema corporal.",
    incorrectas: [
      "Como una fase de sueño ligero necesaria para la consolidación de la memoria a corto plazo.",
      "Como el cese total de la actividad eléctrica en el sistema nervioso periférico."
    ]
  },
  {
    enunciado: "La técnica de Alexander se distingue de otros métodos de relajación por centrarse en:",
    correcta: "La corrección de hábitos posturales y la relación entre la cabeza, el cuello y la espalda para optimizar el tono postural.",
    incorrectas: [
      "La realización de estiramientos balísticos para liberar la tensión de las fascias profundas.",
      "La inducción de un estado hipnótico profundo mediante la privación sensorial."
    ]
  },
  {
    enunciado: "¿Qué rama del sistema nervioso autónomo predomina durante un estado de relajación efectiva y cuáles son sus efectos?",
    correcta: "El sistema nervioso parasimpático; produce bradicardia, miosis, estimulación digestiva y reducción de la tasa metabólica.",
    incorrectas: [
      "El sistema nervioso simpático; provoca la liberación de catecolaminas y aumenta la glucogenólisis hepática.",
      "El sistema somático voluntario; bloquea la entrada de aferencias sensoriales a nivel del tálamo."
    ]
  },
  {
    enunciado: "La relajación 'estática' se diferencia de la relajación 'dinámica' de Caycedo (Sofrología) en que esta última:",
    correcta: "Utiliza movimientos corporales suaves y la respiración para alcanzar un estado de conciencia isocaycedonal.",
    incorrectas: [
      "Prohíbe cualquier tipo de movimiento segmentario durante la sesión para evitar la fatiga.",
      "Se realiza exclusivamente en fase de sueño REM bajo supervisión médica."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Eutonía' según Gerda Alexander?",
    correcta: "La capacidad de adaptar el tono muscular de forma óptima a cualquier situación de la vida, buscando el equilibrio justo entre tensión y distensión.",
    incorrectas: [
      "La ausencia total de tono muscular (flacidez) en todos los grupos musculares simultáneamente.",
      "El aumento del tono muscular necesario para realizar un levantamiento de potencia."
    ]
  },
  {
    enunciado: "En la LOMLOE, la relajación se integra como un saber básico orientado a:",
    correcta: "La gestión emocional, el autoconocimiento y el desarrollo de estrategias frente al estrés y la ansiedad.",
    incorrectas: [
      "Sustituir la actividad física intensa por periodos prolongados de inactividad obligatoria.",
      "La formación de expertos en hipnosis clínica dentro del aula de Educación Física."
    ]
  },
  {
    enunciado: "¿Cuál es el papel de la respiración diafragmática en los procesos de relajación?",
    correcta: "Estimula el nervio vago, lo que induce una respuesta de calma y reduce los niveles de cortisol y la presión arterial.",
    incorrectas: [
      "Aumenta la presión intratorácica para forzar la salida de dióxido de carbono acumulado en el bazo.",
      "Inhibe la actividad del cerebelo para evitar el control motor fino."
    ]
  },
  {
    enunciado: "La técnica de Wintrebert es especialmente utilizada en la etapa escolar para:",
    correcta: "La inducción a la relajación mediante movimientos pasivos realizados por el educador (balanceos, rotaciones segmentarias).",
    incorrectas: [
      "El entrenamiento de la fuerza explosiva mediante contracciones concéntricas rápidas.",
      "La mejora de la visión periférica a través de estímulos luminosos parpadeantes."
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la relajación sobre el lactato sanguíneo tras un esfuerzo intenso?",
    correcta: "Facilita su remoción al mejorar la perfusión tisular y reducir la tensión muscular que podría comprimir los capilares.",
    incorrectas: [
      "Aumenta su producción al transformar los lípidos en ácidos lácticos de reserva.",
      "No tiene ningún efecto, ya que el lactato solo se elimina mediante el ciclo de Krebs en el hígado."
    ]
  },
  {
    enunciado: "El estado 'Alfa' detectado por electroencefalografía (EEG) se asocia con:",
    correcta: "Un estado de relajación despierta, calma mental y visualización creativa (8-13 Hz).",
    incorrectas: [
      "El estado de alerta máxima y resolución de problemas complejos (Beta alta).",
      "El sueño profundo y reparador sin actividad onírica (Delta)."
    ]
  },
  {
    enunciado: "La 'atención plena' o mindfulness aplicada a la Educación Física busca:",
    correcta: "Centrar la conciencia en el momento presente y en las sensaciones corporales sin juzgarlas.",
    incorrectas: [
      "Ignorar las señales de dolor del cuerpo para alcanzar el máximo rendimiento deportivo.",
      "Memorizar las reglas de todos los deportes de equipo en una sola sesión."
    ]
  },
  {
    enunciado: "¿Qué contraindicación principal presenta la relajación profunda en el ámbito escolar?",
    correcta: "Sujetos con trastornos psicóticos o disociativos graves, donde la introspección puede ser contraproducente.",
    incorrectas: [
      "Alumnos con una alta capacidad aeróbica, ya que podrían perder su resistencia.",
      "El uso de ropa deportiva de algodón durante la práctica."
    ]
  },
  {
    enunciado: "La 'Ley de Weber-Fechner' aplicada a la relajación muscular sugiere que:",
    correcta: "Cuanto menor sea el tono de base, más sensibles seremos a pequeñas variaciones de tensión (mejora de la sensibilidad cinestésica).",
    incorrectas: [
      "La fuerza es inversamente proporcional al tiempo de descanso entre series.",
      "El cerebro olvida los movimientos que no se repiten al menos diez veces al día."
    ]
  },
  {
    enunciado: "En el Entrenamiento Autógeno, el ejercicio del 'Corazón' busca:",
    correcta: "La regulación de la actividad cardíaca mediante la fórmula 'mi corazón late tranquilo y regular'.",
    incorrectas: [
      "Aumentar la frecuencia cardíaca al máximo para probar la resistencia de las válvulas.",
      "Detener el latido cardíaco de forma voluntaria durante unos segundos."
    ]
  },
  {
    enunciado: "Un indicador externo de que un alumno ha alcanzado un estado de relajación es:",
    correcta: "La regularización del ritmo respiratorio, la laxitud de los segmentos y la pérdida de parpadeo.",
    incorrectas: [
      "Un aumento del tono de voz y una mayor gesticulación manual.",
      "La aparición de sudor frío en las palmas de las manos."
    ]
  },
  {
    enunciado: "La relajación favorece la 'recuperación' biológica porque:",
    correcta: "Optimiza la síntesis de glucógeno y la reparación proteica al minimizar el gasto energético basal.",
    incorrectas: [
      "Aumenta la excreción de calcio a través de la orina.",
      "Reduce la absorción de nutrientes en el intestino delgado."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Sinestesia' en el contexto de la relajación?",
    correcta: "La integración de sensaciones de diferentes sentidos para profundizar en la conciencia corporal (ej. asociar relax con un color).",
    incorrectas: [
      "Una inflamación de los tendones de la mano por exceso de escritura.",
      "La pérdida de equilibrio al cerrar los ojos."
    ]
  },
  {
    enunciado: "El método de relajación de Berges y Bounes se enfoca en:",
    correcta: "La relación madre-hijo/educador-alumno y la comunicación táctil y verbal durante el proceso.",
    incorrectas: [
      "La realización de ejercicios de calistenia extrema antes de dormir.",
      "El uso de música electrónica de alta fidelidad para inducir el trance."
    ]
  },
  {
    enunciado: "La 'Visualización' es una herramienta de relajación que consiste en:",
    correcta: "Crear imágenes mentales placenteras que generen respuestas fisiológicas de calma.",
    incorrectas: [
      "Mirar fijamente una luz brillante hasta que la retina se fatigue.",
      "Intentar leer un libro con los ojos cerrados."
    ]
  },
  {
    enunciado: "¿Qué relación existe entre la ansiedad y el tono muscular (hipertonía)?",
    correcta: "La ansiedad eleva el tono muscular de forma refleja; la relajación busca romper este círculo vicioso somato-psíquico.",
    incorrectas: [
      "No existe relación, ya que la ansiedad es puramente mental y el tono es puramente físico.",
      "La ansiedad reduce el tono muscular hasta provocar el desmayo siempre."
    ]
  },
  {
    enunciado: "El 'Reflejo Oculocardíaco' se utiliza a veces en relajación para:",
    correcta: "Disminuir la frecuencia cardíaca mediante una ligera presión sobre los globos oculares (vía vagal).",
    incorrectas: [
      "Mejarar la visión nocturna del alumno deportista.",
      "Aumentar la presión arterial de forma súbita."
    ]
  },
  {
    enunciado: "En la Sofrología, el nivel 'Sofroliminal' es:",
    correcta: "El estado de conciencia entre la vigilia y el sueño, óptimo para el trabajo de relajación y sugestión.",
    incorrectas: [
      "El momento de máxima fatiga tras correr un maratón.",
      "El estado de coma profundo inducido por fármacos."
    ]
  },
  {
    enunciado: "La relajación contribuye a la 'disociación segmentaria' al:",
    correcta: "Permitir relajar los músculos que no intervienen en una acción técnica, mejorando la eficiencia.",
    incorrectas: [
      "Hacer que el alumno pierda la sensibilidad en las piernas durante la carrera.",
      "Permitir que el brazo se separe del hombro de forma voluntaria."
    ]
  },
  {
    enunciado: "El ejercicio del 'Plexo Solar' en Schultz busca:",
    correcta: "Una sensación de calor en la zona abdominal, relacionada con la relajación de los órganos internos.",
    incorrectas: [
      "Endurecer los músculos abdominales para resistir golpes.",
      "Mejorar la visión mediante la exposición directa al sol."
    ]
  },
  {
    enunciado: "La 'bio-retroalimentación' (biofeedback) en relajación utiliza dispositivos para:",
    correcta: "Informar al sujeto en tiempo real sobre sus variables fisiológicas (FC, tensión muscular) para que aprenda a controlarlas.",
    incorrectas: [
      "Inyectar nutrientes directamente en el músculo cansado.",
      "Descargar electricidad sobre los músculos para que se contraigan solos."
    ]
  },
  {
    enunciado: "¿Por qué es importante la temperatura de la sala durante una sesión de relajación?",
    correcta: "Porque el frío induce tiritona (contracción involuntaria) y vasoconstricción, impidiendo la relajación muscular.",
    incorrectas: [
      "Porque el calor extremo mejora la capacidad pulmonar de forma permanente.",
      "Porque los virus se reproducen más rápido en salas templadas."
    ]
  },
  {
    enunciado: "La relajación 'diferencial' de Jacobson se aplica a:",
    correcta: "Relajar solo los músculos innecesarios para una tarea, mientras otros mantienen la tensión justa.",
    incorrectas: [
      "Relajar un brazo por la mañana y el otro por la tarde.",
      "Estudiar las diferencias entre los músculos de los chicos y las chicas."
    ]
  },
  {
    enunciado: "Un objetivo pedagógico de la relajación en el primer ciclo de la ESO es:",
    correcta: "El descubrimiento de las sensaciones de tensión-distensión y la respiración consciente.",
    incorrectas: [
      "El dominio total de la levitación mediante la meditación trascendental.",
      "La capacidad de dormir 12 horas seguidas sin interrupciones."
    ]
  },
  {
    enunciado: "La 'Respuesta de Relajación' de Herbert Benson propone como elementos clave:",
    correcta: "Un ambiente tranquilo, un dispositivo mental (mantra/palabra), una actitud pasiva y una posición cómoda.",
    incorrectas: [
      "Música de rock pesado, luces estroboscópicas y una actividad de alta intensidad previa.",
      "Correr 5 km antes de intentar sentarse en silencio."
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la relajación sobre el sistema endocrino?",
    correcta: "Reduce la secreción de cortisol y aumenta la liberación de endorfinas y serotonina.",
    incorrectas: [
      "Aumenta la producción de adrenalina para mantener al alumno en alerta constante.",
      "Inhibe la producción de hormona del crecimiento durante el sueño."
    ]
  },
  {
    enunciado: "La 'Relajación Creativa' suele utilizar como recurso didáctico:",
    correcta: "Cuentos motores, metáforas y música ambiental evocadora.",
    incorrectas: [
      "Exámenes de matemáticas de alta dificultad.",
      "Competiciones de lucha grecorromana."
    ]
  },
  {
    enunciado: "El término 'Psicosomático' se refiere a:",
    correcta: "La íntima relación entre la mente (psique) y el cuerpo (soma), fundamental en las técnicas de relajación.",
    incorrectas: [
      "Una enfermedad que solo afecta a los deportistas de élite.",
      "Un tipo de músculo que se encuentra en el cerebro."
    ]
  },
  {
    enunciado: "La relajación es fundamental en la 'Vuelta a la Calma' para:",
    correcta: "Facilitar el paso del estado de activación simpática al de predominio parasimpático.",
    incorrectas: [
      "Aumentar el ácido láctico en los músculos antes de ir a casa.",
      "Que los alumnos no hablen mientras salen del gimnasio."
    ]
  },
  {
    enunciado: "¿Qué papel juega la musculatura facial en la relajación general?",
    correcta: "Debido a su alta representación cortical, la relajación de la cara favorece la relajación de todo el cuerpo.",
    incorrectas: [
      "Ninguno, solo los músculos grandes (piernas/espalda) influyen en el cerebro.",
      "La cara nunca se relaja porque siempre estamos expresando emociones."
    ]
  },
  {
    enunciado: "En la técnica de Jacobson, ¿cuánto tiempo debe durar aproximadamente la fase de tensión?",
    correcta: "Entre 5 y 7 segundos, evitando una tensión excesiva que cause dolor.",
    incorrectas: [
      "Al menos 30 minutos para agotar el músculo por completo.",
      "Un microsegundo, para que el sistema nervioso no se entere."
    ]
  },
  {
    enunciado: "La 'Sofropresencia' en la técnica caycediana es:",
    correcta: "La toma de conciencia de la realidad del propio cuerpo en el momento presente.",
    incorrectas: [
      "La capacidad de ver el futuro durante la relajación.",
      "El acto de presentarse a un examen de educación física con ropa adecuada."
    ]
  },
  {
    enunciado: "Un beneficio de la relajación para el aprendizaje motor es:",
    correcta: "La reducción de la fatiga atencional y la mejora de la capacidad de concentración.",
    incorrectas: [
      "El aumento de la velocidad de carrera de forma pasiva.",
      "La desaparición de la necesidad de practicar el gesto técnico."
    ]
  },
  {
    enunciado: "La relajación en la LOMLOE se vincula con el perfil de salida del alumnado al promover:",
    correcta: "Estilos de vida saludables y el bienestar emocional y físico.",
    incorrectas: [
      "La formación de atletas capaces de competir sin sentir emociones.",
      "El estudio científico de las ondas cerebrales en el laboratorio."
    ]
  }
];