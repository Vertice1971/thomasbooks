
// -18-adaptacion-del-organismo-al-esfuerzo.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué autor definió el Síndrome General de Adaptación (SGA) como la respuesta no específica del organismo ante cualquier demanda?",
    correcta: "Hans Selye",
    incorrectas: ["Archibald Hill", "Claude Bernard"]
  },
  {
    enunciado: "¿Cuáles son las tres fases que componen el Síndrome General de Adaptación?",
    correcta: "Alarma, Resistencia y Agotamiento.",
    incorrectas: ["Calentamiento, Parte principal y Vuelta a la calma.", "Iniciación, Desarrollo y Maestría."]
  },
  {
    enunciado: "La 'Homeostasis' se define técnicamente como:",
    correcta: "El estado de equilibrio dinámico del medio interno del organismo.",
    incorrectas: ["La capacidad de los músculos para contraerse a máxima velocidad.", "El proceso de crecimiento óseo longitudinal."]
  },
  {
    enunciado: "En la fase de 'Alarma' del SGA, el organismo reacciona mediante:",
    correcta: "La activación del sistema simpático y la liberación de catecolaminas (adrenalina).",
    incorrectas: ["La relajación profunda y el sueño reparador inmediato.", "La disminución del gasto cardíaco para ahorrar energía."]
  },
  {
    enunciado: "¿Qué ocurre durante la fase de 'Resistencia' del SGA?",
    correcta: "El organismo intenta adaptarse al estímulo manteniendo el equilibrio mediante ajustes fisiológicos.",
    incorrectas: ["El organismo se rinde y deja de funcionar por completo.", "Se produce una rotura masiva de todas las fibras musculares."]
  },
  {
    enunciado: "La 'Supercompensación' es el proceso por el cual el organismo:",
    correcta: "Tras la recuperación de un esfuerzo, alcanza un nivel de capacidad superior al inicial.",
    incorrectas: ["Consume todas sus reservas y no puede volver a entrenar.", "Sustituye el tejido muscular por tejido graso de forma inmediata."]
  },
  {
    enunciado: "¿Qué sucede si el estímulo (estrés) es demasiado intenso o duradero y supera la capacidad del organismo?",
    correcta: "Se entra en la fase de Agotamiento, pudiendo aparecer lesiones o sobreentrenamiento.",
    incorrectas: ["Se alcanza la salud eterna de forma instantánea.", "El organismo deja de necesitar oxígeno para vivir."]
  },
  {
    enunciado: "La adaptación 'Aguda' al esfuerzo es aquella que ocurre:",
    correcta: "De forma inmediata durante la realización del ejercicio (ej. aumento de la frecuencia cardíaca).",
    incorrectas: ["Tras meses de entrenamiento constante y planificado.", "Únicamente en los alumnos que tienen una enfermedad grave."]
  },
  {
    enunciado: "La adaptación 'Crónica' al ejercicio físico se manifiesta por:",
    correcta: "Cambios estructurales y funcionales estables (ej. hipertrofia cardíaca o bradicardia de reposo).",
    incorrectas: ["Un aumento pasajero del sudor durante cinco minutos.", "El cansancio momentáneo tras subir una escalera."]
  },
  {
    enunciado: "En la Ley de Arnodt-Schulz (Ley del Umbral), ¿qué tipo de estímulo produce adaptaciones óptimas?",
    correcta: "El estímulo fuerte que se sitúa por encima del umbral de adaptación sin llegar al límite de tolerancia.",
    incorrectas: ["El estímulo débil que no rompe la homeostasis.", "El estímulo excesivo que agota las reservas del sujeto."]
  },
  {
    enunciado: "La 'Bradicardia del deportista' es una adaptación crónica consistente en:",
    correcta: "Una disminución de la frecuencia cardíaca en reposo debido a un mayor volumen sistólico.",
    incorrectas: ["Un aumento peligroso de los latidos del corazón mientras se duerme.", "La parada total del corazón durante el ejercicio de alta intensidad."]
  },
  {
    enunciado: "¿Qué papel juega el 'Cortisol' en la respuesta de adaptación al esfuerzo prolongado?",
    correcta: "Es una hormona que ayuda a movilizar reservas energéticas pero que en exceso es catabólica.",
    incorrectas: ["Es la hormona responsable del crecimiento de los huesos largos.", "Es un neurotransmisor que solo se produce durante el sueño profundo."]
  },
  {
    enunciado: "La 'Capilarización' es una adaptación crónica de la resistencia que consiste en:",
    correcta: "El aumento del número de capilares sanguíneos que rodean las fibras musculares.",
    incorrectas: ["La pérdida de pelo debido al sudor ácido.", "El engrosamiento de las paredes de la aorta."]
  },
  {
    enunciado: "En la Educación Física escolar, el conocimiento de los procesos de adaptación sirve para:",
    correcta: "Diseñar cargas de trabajo seguras y eficaces ajustadas a la maduración del alumno.",
    incorrectas: ["Obligar a todos los alumnos a alcanzar el agotamiento en cada clase.", "Sustituir la práctica motriz por el estudio de la medicina interna."]
  },
  {
    enunciado: "La adaptación es un proceso 'específico', lo que significa que:",
    correcta: "El organismo se adapta exactamente al tipo de estrés que recibe (fuerza, resistencia, etc.).",
    incorrectas: ["Cualquier ejercicio mejora todas las capacidades por igual.", "La adaptación solo ocurre en los alumnos de una clase específica."]
  },
  {
    enunciado: "¿Qué diferencia la 'Heterocronía' en los procesos de recuperación?",
    correcta: "Que los diferentes sistemas orgánicos (ATP, glucógeno, proteínas) se recuperan en tiempos distintos.",
    incorrectas: ["Que todos los alumnos se recuperan exactamente en el mismo segundo.", "Que la recuperación solo ocurre durante las horas de luz solar."]
  },
  {
    enunciado: "La adaptación 'Metabólica' en esfuerzos aeróbicos incluye:",
    correcta: "Un aumento en el tamaño y número de mitocondrias musculares.",
    incorrectas: ["La desaparición del páncreas por falta de uso.", "La transformación de los carbohidratos en oro."]
  },
  {
    enunciado: "¿Cuál es el riesgo de aplicar un nuevo estímulo de entrenamiento antes de que finalice la recuperación del anterior?",
    correcta: "Sobreentrenamiento y descenso del rendimiento (Sobrecompensación negativa).",
    incorrectas: ["Una mejora el doble de rápida de la condición física.", "Que el alumno se vuelva inmune a cualquier tipo de fatiga."]
  },
  {
    enunciado: "La 'Hipertrofia Muscular' es una adaptación crónica de la fuerza que consiste en:",
    correcta: "El aumento del grosor de las fibras musculares existentes por síntesis de proteínas.",
    incorrectas: ["El aumento del número de huesos en el esqueleto humano.", "La disminución del tamaño de los músculos para ser más aerodinámicos."]
  },
  {
    enunciado: "En la fase de Alarma, la 'reacción de lucha o huida' prepara al organismo aumentando:",
    correcta: "La presión arterial, la glucemia y la frecuencia respiratoria.",
    incorrectas: ["La capacidad de digestión de alimentos pesados.", "La producción de orina concentrada."]
  },
  {
    enunciado: "La adaptación funcional en adolescentes de secundaria debe tener en cuenta:",
    correcta: "Que el sistema óseo está en pleno crecimiento y es más vulnerable a cargas compresivas excesivas.",
    incorrectas: ["Que los adolescentes no pueden adaptarse al esfuerzo porque sus células son inmaduras.", "Que a partir de los 12 años el cuerpo ya no cambia más."]
  },
  {
    enunciado: "La 'Economía Funcional' es una adaptación que permite:",
    correcta: "Realizar el mismo trabajo con un menor gasto energético y menor estrés orgánico.",
    incorrectas: ["Gastar menos dinero en equipamiento deportivo.", "Hacer ejercicio sin tener que respirar."]
  },
  {
    enunciado: "¿Qué sistema orgánico es el primero en mostrar adaptaciones agudas ante el inicio del ejercicio?",
    correcta: "El sistema nervioso y el sistema cardiovascular.",
    incorrectas: ["El sistema óseo-articular.", "El sistema digestivo."]
  },
  {
    enunciado: "La adaptación al calor (aclimatación) se produce mediante:",
    correcta: "Un inicio más temprano de la sudoración y una menor pérdida de electrolitos en el sudor.",
    incorrectas: ["La eliminación total de la necesidad de beber agua.", "El aumento del espesor de la piel para aislar el calor."]
  },
  {
    enunciado: "El 'Principio de Carga y Recuperación' es la aplicación práctica de:",
    correcta: "La teoría de la supercompensación.",
    incorrectas: ["La ley de la gravedad universal.", "El principio de Arquímedes."]
  },
  {
    enunciado: "Una adaptación crónica del sistema respiratorio al entrenamiento es:",
    correcta: "El aumento de la capacidad de difusión alveolo-capilar.",
    incorrectas: ["La disminución del número de alvéolos pulmonares.", "El cese de la respiración durante los periodos de descanso."]
  },
  {
    enunciado: "¿Qué se entiende por 'Desadaptación'?",
    correcta: "La pérdida de las adaptaciones conseguidas debido al cese prolongado del entrenamiento.",
    incorrectas: ["La capacidad de vivir en el espacio exterior sin protección.", "El aumento de la inteligencia tras dejar de hacer deporte."]
  },
  {
    enunciado: "La 'Eutonía' es un estado de adaptación que se refiere a:",
    correcta: "El tono muscular equilibrado y óptimo para la acción o el reposo.",
    incorrectas: ["La sordera total producida por el ruido del gimnasio.", "La capacidad de cantar a un tono muy elevado."]
  },
  {
    enunciado: "En el SGA, la 'Energía de Adaptación' es un concepto de Selye que sugiere que:",
    correcta: "La capacidad de adaptación es finita y puede agotarse si el estrés es crónico.",
    incorrectas: ["La energía se obtiene solo de los rayos solares.", "El cuerpo humano tiene energía infinita que nunca se agota."]
  },
  {
    enunciado: "La mejora del VO2 máx (consumo máximo de oxígeno) es la adaptación reina de:",
    correcta: "La resistencia aeróbica.",
    incorrectas: ["La flexibilidad estática.", "La fuerza máxima isométrica."]
  },
  {
    enunciado: "¿Qué factor puede frenar las adaptaciones biológicas en un alumno de Secundaria?",
    correcta: "La falta de sueño, el estrés académico y una nutrición deficiente.",
    incorrectas: ["Tener una buena relación con el profesor de Educación Física.", "Hacer los deberes de matemáticas todos los días."]
  },
  {
    enunciado: "La adaptación 'Psicológica' al esfuerzo incluye:",
    correcta: "Una mayor tolerancia a la incomodidad física y una mejor autoconfianza.",
    incorrectas: ["La capacidad de teletransportarse de un lugar a otro.", "La pérdida total de la memoria a corto plazo."]
  },
  {
    enunciado: "En la fase de agotamiento del SGA, el sistema inmunológico suele:",
    correcta: "Debilitarse, aumentando el riesgo de infecciones y enfermedades.",
    incorrectas: ["Fortalecerse de forma sobrehumana.", "No verse afectado por el nivel de estrés."]
  },
  {
    enunciado: "La 'especificidad de la adaptación' justifica que para correr rápido debamos entrenar:",
    correcta: "Velocidad y gestos explosivos, no solo resistencia de larga duración.",
    incorrectas: ["Lanzamiento de peso y fuerza lenta.", "Flexibilidad de dedos y manos."]
  },
  {
    enunciado: "¿Qué adaptación crónica mejora el retorno venoso en deportistas?",
    correcta: "La mejora de la bomba muscular y la mayor eficiencia de las válvulas venosas.",
    incorrectas: ["La desaparición de las venas para que no se vean bajo la piel.", "El aumento de la presión atmosférica dentro del cuerpo."]
  },
  {
    enunciado: "La LOMLOE promueve el conocimiento del cuerpo y sus respuestas para que el alumno:",
    correcta: "Evite el sobreesfuerzo y practique de forma saludable según sus límites.",
    incorrectas: ["Pueda realizarse sus propias cirugías en caso de lesión.", "Sepa cómo engañar al profesor sobre su nivel de fatiga."]
  },
  {
    enunciado: "La 'Volemia' (volumen total de sangre) en un sujeto adaptado al entrenamiento de resistencia:",
    correcta: "Aumenta, principalmente por un incremento del volumen plasmático.",
    incorrectas: ["Disminuye drásticamente para pesar menos.", "Se mantiene siempre en 1 litro exacto."]
  },
  {
    enunciado: "La adaptación al esfuerzo en la Educación Física escolar busca, en última instancia:",
    correcta: "Mejorar la capacidad funcional para una vida plena y saludable.",
    incorrectas: ["Ganar todas las medallas de oro en las Olimpiadas.", "No tener que volver a moverse nunca más tras terminar la ESO."]
  },
  {
    enunciado: "¿Cómo influye el 'calentamiento' en la fase de Alarma del SGA?",
    correcta: "Prepara gradualmente los sistemas para que la entrada en la fase de resistencia sea menos traumática.",
    incorrectas: ["Evita que se produzca cualquier tipo de adaptación al esfuerzo.", "Es el único responsable de que el alumno se agote rápido."]
  },
  {
    enunciado: "La adaptación es un proceso reversible porque:",
    correcta: "El organismo busca la economía y tiende a eliminar estructuras metabólicamente costosas que no se usan.",
    incorrectas: ["Los músculos se convierten en vapor de agua si no se entrenan.", "El ADN cambia cada vez que el alumno deja de ir al gimnasio."]
  }
];
