// -29-cualidades-motrices.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo define Gundlach (1967) las capacidades coordinativas en su taxonomía de las capacidades físicas?",
    correcta: "Como aquellas capacidades determinadas por los procesos de organización, control y regulación del movimiento.",
    incorrectas: [
      "Como aquellas que dependen exclusivamente de la obtención y transformación de energía metabólica.",
      "Como habilidades técnicas específicas resultantes de la suma de la fuerza y la flexibilidad."
    ]
  },
  {
    enunciado: "En el control del equilibrio dinámico, ¿qué función desempeñan las máculas del utrículo y el sáculo?",
    correcta: "Detectar aceleraciones lineales y la posición de la cabeza respecto al eje gravitatorio.",
    incorrectas: [
      "Detectar aceleraciones angulares mediante el desplazamiento de la endolinfa en los canales semicirculares.",
      "Proporcionar retroalimentación propioceptiva a través de los órganos tendinosos de Golgi."
    ]
  },
  {
    enunciado: "La coordinación 'Intermuscular' se diferencia de la 'Intramuscular' en que:",
    correcta: "La primera se refiere a la interacción armónica entre músculos agonistas, antagonistas y sinergistas durante un gesto.",
    incorrectas: [
      "La primera se refiere a la sincronización de las unidades motoras dentro de un mismo vientre muscular.",
      "La primera depende únicamente de la sección transversal del músculo y no del sistema nervioso."
    ]
  },
  {
    enunciado: "¿Cuál es la 'Fase Sensible' óptima para el desarrollo de la coordinación general debido a la plasticidad del SNC y la baja influencia hormonal?",
    correcta: "Entre los 6 y los 12 años (final de la infancia), antes del estirón puberal.",
    incorrectas: [
      "La etapa de la adolescencia tardía (16-18 años) por la maduración del eje hipotálamo-hipofisario.",
      "Exclusivamente el periodo prenatal y los primeros 24 meses de vida."
    ]
  },
  {
    enunciado: "Durante la pubertad, se describe una 'crisis de la coordinación'. ¿Cuál es su etiología biomecánica?",
    correcta: "La alteración de la palanca ósea y el desplazamiento del centro de gravedad por el crecimiento longitudinal acelerado.",
    incorrectas: [
      "Una degeneración temporal de las vainas de mielina en las motoneuronas alfa.",
      "El aumento desproporcionado de la capacidad vital pulmonar respecto a la masa muscular."
    ]
  },
  {
    enunciado: "La coordinación óculo-segmentaria (manual/pédica) requiere técnicamente de:",
    correcta: "Una integración de la información visual periférica y central con el ajuste motor fino del efector distal.",
    incorrectas: [
      "Una alta capacidad de resistencia anaeróbica láctica para mantener la precisión.",
      "La inhibición total de los receptores vestibulares para evitar el mareo."
    ]
  },
  {
    enunciado: "En la teoría de la información aplicada al movimiento, el 'mecanismo de decisión' se ve afectado por la Ley de Hick, que postula:",
    correcta: "Que el tiempo de reacción aumenta de forma logarítmica según el número de alternativas de respuesta.",
    incorrectas: [
      "Que la fuerza es inversamente proporcional a la velocidad de contracción muscular.",
      "Que el aprendizaje motor es irreversible una vez consolidada la mielinización."
    ]
  },
  {
    enunciado: "El equilibrio estático depende de que la proyección del centro de gravedad:",
    correcta: "Caiga dentro de la base de sustentación del individuo.",
    incorrectas: [
      "Se sitúe por encima del nivel de las crestas iliacas de forma permanente.",
      "Coincida exactamente con el centro de presiones del líquido cefalorraquídeo."
    ]
  },
  {
    enunciado: "La lateralidad 'contrariada' en Educación Física puede generar problemas en:",
    correcta: "La estructuración espacial, la organización temporal y la eficiencia mecánica del gesto técnico.",
    incorrectas: [
      "El crecimiento longitudinal de los huesos largos de la extremidad dominante.",
      "La capacidad de transporte de oxígeno por la hemoglobina."
    ]
  },
  {
    enunciado: "¿Qué estructura del tronco encefálico regula el tono muscular necesario para mantener la postura erguida?",
    correcta: "La formación reticular y sus núcleos vestibulares asociados.",
    incorrectas: [
      "El lóbulo occipital a través de la vía visual dorsal.",
      "El área de Broca en el hemisferio izquierdo."
    ]
  },
  {
    enunciado: "La coordinación dinámica general implica el control de:",
    correcta: "Grandes cadenas musculares en desplazamientos que requieren ajustes globales del esquema corporal.",
    incorrectas: [
      "Pequeños grupos musculares para tareas de precisión como la escritura o el dibujo.",
      "La frecuencia cardíaca a través del sistema nervioso autónomo."
    ]
  },
  {
    enunciado: "En el aprendizaje motor, el 'feedback intrínseco' en las cualidades motrices es:",
    correcta: "La información sensorial (visual, cinestésica, vestibular) que el alumno percibe de su propio movimiento.",
    incorrectas: [
      "La corrección técnica que el profesor comunica verbalmente al finalizar la tarea.",
      "El resultado cuantitativo obtenido en un test de rendimiento estandarizado."
    ]
  },
  {
    enunciado: "La capacidad de 'Diferenciación Kinestésica' permite al alumno:",
    correcta: "Ajustar con precisión la fuerza, el espacio y el tiempo en la ejecución de un movimiento.",
    incorrectas: [
      "Distinguir entre estímulos visuales de diferente color y forma a gran distancia.",
      "Mantener un esfuerzo aeróbico prolongado por encima del umbral de lactato."
    ]
  },
  {
    enunciado: "La capacidad de 'Orientación' se define técnicamente como:",
    correcta: "La habilidad para determinar y variar la posición del cuerpo en el espacio y el tiempo respecto a un campo de acción.",
    incorrectas: [
      "La capacidad de seguir un ritmo musical marcado por un instrumento de percusión.",
      "El conocimiento anatómico de los planos y ejes del cuerpo humano."
    ]
  },
  {
    enunciado: "En la LOMLOE, el desarrollo de las cualidades motrices es fundamental para alcanzar:",
    correcta: "La competencia motriz necesaria para resolver situaciones motrices con eficacia y autonomía.",
    incorrectas: [
      "El nivel de hipertrofia muscular exigido en los estándares de rendimiento olímpico.",
      "La memorización de las leyes de la física aplicadas al deporte profesional."
    ]
  },
  {
    enunciado: "La 'Agilidad' es considerada una capacidad resultante de la combinación de:",
    correcta: "Coordinación, equilibrio, velocidad de reacción y toma de decisiones.",
    incorrectas: [
      "Fuerza máxima absoluta, flexibilidad pasiva y resistencia aeróbica.",
      "Capacidad vital, volumen sistólico y densidad mineral ósea."
    ]
  },
  {
    enunciado: "El test de 'Barrow' se utiliza habitualmente en Educación Física para valorar:",
    correcta: "La agilidad y la coordinación dinámica general mediante un circuito de desplazamientos.",
    incorrectas: [
      "La potencia aeróbica máxima a través de una carrera incremental de 20 metros.",
      "La flexibilidad de la cadena posterior en posición de sentado."
    ]
  },
  {
    enunciado: "La capacidad de 'Ritmo' en el ámbito coordinativo consiste en:",
    correcta: "Registrar y reproducir un orden dinámico-temporal de movimientos estructurados de forma externa o interna.",
    incorrectas: [
      "La capacidad de correr a una velocidad constante de 10 km/h durante una hora.",
      "El número de latidos cardíacos por unidad de tiempo durante el reposo."
    ]
  },
  {
    enunciado: "¿Qué papel juega la propiocepción en las cualidades motrices?",
    correcta: "Proporciona información sobre la tensión muscular y la posición articular mediante mecanorreceptores.",
    incorrectas: [
      "Regula la temperatura corporal mediante la activación de las glándulas sudoríparas.",
      "Permite la visión en condiciones de baja luminosidad durante la práctica nocturna."
    ]
  },
  {
    enunciado: "La 'Disociación Segmentaria' es la capacidad coordinativa que permite:",
    correcta: "Mover de forma independiente diferentes segmentos corporales sin interferencias recíprocas.",
    incorrectas: [
      "Separar un hueso de su articulación mediante una técnica de estiramiento forzado.",
      "Dividir el tiempo de la clase en fases de calentamiento y parte principal."
    ]
  },
  {
    enunciado: "El equilibrio 'Postural' se mantiene gracias a la oscilación constante del centro de presiones. Este fenómeno se denomina:",
    correcta: "Sway corporal o balanceo postural.",
    incorrectas: [
      "Síncope vasovagal por bipedestación prolongada.",
      "Apnea refleja por inmersión acuática."
    ]
  },
  {
    enunciado: "En tareas de coordinación fina, la precisión mejora si existe un buen control de:",
    correcta: "La musculatura distal y la fijación proximal de la articulación adyacente.",
    incorrectas: [
      "La capacidad anaeróbica aláctica de los músculos del tronco.",
      "El volumen corriente respiratorio durante el esfuerzo máximo."
    ]
  },
  {
    enunciado: "La 'Adaptación Motriz' como capacidad coordinativa permite al sujeto:",
    correcta: "Variar el programa de acción previsto ante cambios repentinos de la situación ambiental.",
    incorrectas: [
      "Aumentar el tamaño de las fibras musculares tras un entrenamiento de fuerza.",
      "Reducir el tiempo de recuperación entre dos sesiones de resistencia."
    ]
  },
  {
    enunciado: "La 'Reacción Motriz' se mide técnicamente por el tiempo de reacción, que es:",
    correcta: "El intervalo entre la aparición de un estímulo y el inicio de la respuesta mecánica muscular.",
    incorrectas: [
      "El tiempo total que dura la ejecución de un movimiento complejo.",
      "La velocidad a la que el impulso nervioso viaja por la médula espinal."
    ]
  },
  {
    enunciado: "¿Qué influencia tiene la visión periférica en los deportes de equipo?",
    correcta: "Permite percibir la posición de compañeros y adversarios sin perder el foco en el móvil.",
    incorrectas: [
      "Mejora la agudeza visual necesaria para leer el reglamento desde la distancia.",
      "Aumenta la resistencia de la retina a los rayos ultravioleta."
    ]
  },
  {
    enunciado: "La lateralidad 'homogénea' es aquella en la que:",
    correcta: "El ojo, mano, pie y oído dominantes se sitúan en el mismo lado del cuerpo.",
    incorrectas: [
      "El alumno utiliza ambas manos con la misma destreza para cualquier tarea.",
      "La dominancia lateral cambia de lado cada seis meses de forma natural."
    ]
  },
  {
    enunciado: "En Educación Física, una tarea de 'coordinación dinámica segmentaria' sería:",
    correcta: "Lanzar y recepcionar una pelota mientras se camina sobre una línea.",
    incorrectas: [
      "Realizar una plancha abdominal isométrica durante 60 segundos.",
      "Correr un maratón manteniendo un ritmo cardíaco estable."
    ]
  },
  {
    enunciado: "La capacidad de 'Acoplamiento' de los movimientos consiste en:",
    correcta: "Coordinar movimientos parciales de diferentes partes del cuerpo para lograr una acción global final única.",
    incorrectas: [
      "Unir dos piezas de material deportivo mediante un anclaje mecánico.",
      "Sincronizar la respiración con el ritmo de paso de los compañeros."
    ]
  },
  {
    enunciado: "El 'Esquema Corporal' según Le Boulch se construye a través de:",
    correcta: "La experiencia vivida y la elaboración de las sensaciones propioceptivas y exteroceptivas.",
    incorrectas: [
      "La observación pasiva de vídeos de atletas profesionales.",
      "El estudio de la nomenclatura ósea en libros de texto."
    ]
  },
  {
    enunciado: "¿Qué papel juega el cerebelo en las cualidades motrices?",
    correcta: "Actúa como comparador entre el movimiento previsto y el ejecutado, corrigiendo desviaciones en tiempo real.",
    incorrectas: [
      "Es el lugar donde se originan los impulsos voluntarios para la contracción muscular.",
      "Almacena las reservas de glucógeno necesarias para el control nervioso."
    ]
  },
  {
    enunciado: "La coordinación 'Óculo-pédica' es fundamental para el éxito en:",
    correcta: "El regate, el pase y el tiro en deportes como el fútbol o el fútbol sala.",
    incorrectas: [
      "El lanzamiento de disco y la jabalina en atletismo.",
      "La natación sincronizada y el salto de trampolín."
    ]
  },
  {
    enunciado: "El equilibrio 'Reflejo' es aquel que:",
    correcta: "Se produce de forma automática e inconsciente ante un desequilibrio inesperado (reacción enderezamiento).",
    incorrectas: [
      "Se entrena mediante la visualización de imágenes de estatuas griegas.",
      "Requiere una planificación táctica previa antes de iniciarse."
    ]
  },
  {
    enunciado: "La 'Estructuración Espacio-Temporal' permite al alumno:",
    correcta: "Situar su cuerpo y los objetos en un entorno dinámico, calculando trayectorias y velocidades.",
    incorrectas: [
      "Recordar el horario de las clases de Educación Física durante todo el curso.",
      "Medir la distancia exacta de una pista de atletismo con una cinta métrica."
    ]
  },
  {
    enunciado: "Una característica de las capacidades coordinativas es que:",
    correcta: "No se desgastan con el uso, sino que mejoran con la repetición variada (aprendizaje).",
    incorrectas: [
      "Se agotan rápidamente al consumirse las reservas de fosfocreatina.",
      "Son inamovibles desde el nacimiento y no responden al entrenamiento."
    ]
  },
  {
    enunciado: "La 'Coordinación Dinámica Manual' es evaluada frecuentemente mediante:",
    correcta: "Tests de golpeo de placas (tapping) o tareas de enhebrado y manipulación de objetos pequeños.",
    incorrectas: [
      "Pruebas de fuerza de prensión manual con un dinamómetro.",
      "Carreras de velocidad de 50 metros lisos."
    ]
  },
  {
    enunciado: "En secundaria, el trabajo de las cualidades motrices debe:",
    correcta: "Aumentar la complejidad mediante la integración en situaciones de juego real y oposición.",
    incorrectas: [
      "Reducirse al mínimo para centrarse solo en la fuerza hipertrófica.",
      "Realizarse siempre de forma aislada sin ningún estímulo externo."
    ]
  },
  {
    enunciado: "La 'Ambidiestría' técnica en el deporte (ej. usar ambas piernas en fútbol) es:",
    correcta: "Un recurso táctico de gran valor resultante de un entrenamiento coordinativo bilateral.",
    incorrectas: [
      "Una patología neurológica que impide la especialización motriz.",
      "Algo que ocurre de forma natural en el 90% de la población."
    ]
  },
  {
    enunciado: "El 'Vértigo' como alteración del equilibrio se debe técnicamente a:",
    correcta: "Un conflicto o fallo en la integración de las señales vestibulares, visuales y propioceptivas.",
    incorrectas: [
      "Un exceso de entrenamiento de resistencia aeróbica en ayunas.",
      "La falta de flexibilidad en los músculos del antebrazo."
    ]
  },
  {
    enunciado: "Las cualidades motrices influyen en la 'Economía de Esfuerzo' porque:",
    correcta: "Minimizan la actividad de los músculos antagonistas y optimizan la aplicación de fuerzas.",
    incorrectas: [
      "Aumentan la cantidad de aire que los pulmones pueden retener.",
      "Permiten comprar material deportivo a un precio más reducido."
    ]
  },
  {
    enunciado: "Un objetivo de la Educación Física según la LOMLOE en este ámbito es:",
    correcta: "Desarrollar un repertorio motriz amplio que facilite la transferencia a nuevas situaciones físicas.",
    incorrectas: [
      "Especializar al alumno en un único gesto técnico para la competición profesional.",
      "Eliminar cualquier tipo de juego que implique contacto físico."
    ]
  }
];