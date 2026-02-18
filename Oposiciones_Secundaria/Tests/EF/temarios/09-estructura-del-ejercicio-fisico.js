
// -09-estructura-del-ejercicio-fisico.js

var PREGUNTAS = [
  {
    enunciado: "Desde un punto de vista mecánico, ¿cómo se define un ejercicio físico?",
    correcta: "Como un sistema de movimientos articulados dirigidos a resolver una tarea motriz concreta.",
    incorrectas: ["Como cualquier movimiento involuntario producido por el sistema nervioso vegetativo.", "Como la simple suma de contracciones musculares sin objetivo pedagógico."]
  },
  {
    enunciado: "En la estructura del ejercicio físico, la 'forma' se refiere a:",
    correcta: "El aspecto externo, la organización espacial y temporal de los movimientos que componen la tarea.",
    incorrectas: ["La cantidad de energía ATP consumida durante la ejecución.", "La motivación psicológica interna del alumno al realizarlo."]
  },
  {
    enunciado: "¿Qué elemento de la estructura del ejercicio define la eficiencia en la aplicación de las fuerzas para lograr el máximo rendimiento con el mínimo gasto?",
    correcta: "La técnica deportiva.",
    incorrectas: ["El volumen de entrenamiento.", "La indumentaria reglamentaria."]
  },
  {
    enunciado: "En el análisis kinesiológico del movimiento, los músculos que realizan la acción principal se denominan:",
    correcta: "Agonistas.",
    incorrectas: ["Antagonistas.", "Sinergistas."]
  },
  {
    enunciado: "¿Cuál de los siguientes es un elemento mecánico externo que influye en la estructura del ejercicio?",
    correcta: "La gravedad y la fricción del medio.",
    incorrectas: ["El nivel de glucógeno muscular.", "La frecuencia cardíaca en reposo."]
  },
  {
    enunciado: "La fase de 'preparación' en un ejercicio físico cíclico tiene como función:",
    correcta: "Crear las condiciones óptimas (posición, tensión) para la fase de ejecución o principal.",
    incorrectas: ["Relajar los músculos para irse a dormir.", "Recoger el material tras finalizar la sesión."]
  },
  {
    enunciado: "Desde el punto de vista funcional, un ejercicio físico produce en el organismo:",
    correcta: "Una ruptura de la homeostasis que desencadena procesos de adaptación.",
    incorrectas: ["Un estado de reposo absoluto y regeneración celular inmediata.", "Una disminución irreversible de la capacidad vital."]
  },
  {
    enunciado: "La 'técnica' en Educación Física escolar debe entenderse como:",
    correcta: "Un modelo de ejecución adaptable a las posibilidades individuales del alumno, priorizando la eficacia y seguridad.",
    incorrectas: ["La imitación exacta e inamovible de los campeones olímpicos.", "Cualquier movimiento realizado de forma desordenada y aleatoria."]
  },
  {
    enunciado: "En la estructura temporal del ejercicio, el 'ritmo' se define como:",
    correcta: "La organización de las fases fuertes y débiles, la periodicidad de los impulsos de fuerza.",
    incorrectas: ["La velocidad máxima alcanzada en un desplazamiento.", "El número de veces que se repite una sesión a la semana."]
  },
  {
    enunciado: "Un análisis funcional del ejercicio físico se centra en:",
    correcta: "Los sistemas energéticos implicados y la respuesta de los órganos (corazón, pulmones) al esfuerzo.",
    incorrectas: ["La trayectoria estética de los brazos en el aire.", "El precio del calzado deportivo utilizado."]
  },
  {
    enunciado: "La 'cadena cinética abierta' ocurre cuando:",
    correcta: "El extremo distal del segmento se mueve libremente en el espacio (ej. lanzamiento de balón).",
    incorrectas: ["El extremo distal está fijo y se mueve el cuerpo sobre él (ej. sentadilla).", "No hay movimiento muscular alguno."]
  },
  {
    enunciado: "¿Qué componente de la estructura mecánica se refiere a la capacidad de mantener la posición del cuerpo contra fuerzas externas?",
    correcta: "Equilibrio y estabilidad.",
    incorrectas: ["Inercia negativa.", "Aceleración angular."]
  },
  {
    enunciado: "La 'fase de recobro' en movimientos cíclicos (como la natación o la carrera) es fundamental para:",
    correcta: "Permitir la relajación momentánea de ciertos grupos musculares y preparar el siguiente ciclo.",
    incorrectas: ["Aumentar la resistencia del aire de forma intencionada.", "Detener el ejercicio de forma definitiva."]
  },
  {
    enunciado: "En un análisis kinesiológico, una contracción 'excéntrica' es aquella en la que:",
    correcta: "El músculo genera tensión mientras se alarga para frenar un movimiento.",
    incorrectas: ["El músculo se acorta manteniendo una tensión constante.", "No hay variación en la longitud del músculo."]
  },
  {
    enunciado: "La 'palanca de tercer grado', muy común en el cuerpo humano, se caracteriza por:",
    correcta: "Tener la fuerza aplicada entre el punto de apoyo y la resistencia (favorece la velocidad).",
    incorrectas: ["Tener el punto de apoyo entre la fuerza y la resistencia (favorece el equilibrio).", "Tener la resistencia entre el apoyo y la fuerza (favorece la fuerza)."]
  },
  {
    enunciado: "La repercusión de la estructura del ejercicio en la EF escolar implica que el docente debe:",
    correcta: "Adaptar la complejidad mecánica de las tareas al nivel de desarrollo motor del alumno.",
    incorrectas: ["Exigir solo ejercicios de alta complejidad biomecánica desde 1º de ESO.", "Eliminar cualquier ejercicio que requiera coordinación."]
  },
  {
    enunciado: "Desde la biomecánica, el 'centro de gravedad' del cuerpo humano:",
    correcta: "Es el punto donde se resume el peso del cuerpo y puede situarse fuera de este en ciertas posiciones.",
    incorrectas: ["Se encuentra siempre exactamente en el ombligo de todas las personas.", "No influye en la estabilidad del sujeto durante el movimiento."]
  },
  {
    enunciado: "La 'amplitud de movimiento' (ROM) de un ejercicio depende técnicamente de:",
    correcta: "La movilidad articular y la elasticidad de los tejidos blandos implicados.",
    incorrectas: ["El volumen de aire que el alumno puede inspirar.", "El número de alumnos que participan en la clase simultáneamente."]
  },
  {
    enunciado: "Un ejercicio 'poliarticular' es aquel que:",
    correcta: "Involucra el movimiento coordinado de varias articulaciones y grandes cadenas musculares.",
    incorrectas: ["Se realiza con una sola articulación de forma aislada.", "Solo se puede realizar en un quirófano de ortopedia."]
  },
  {
    enunciado: "En la estructura del ejercicio, el 'espacio de acción' se refiere a:",
    correcta: "Las dimensiones y características del entorno donde se desarrolla el movimiento.",
    incorrectas: ["La distancia entre el instituto y la casa del alumno.", "El área reservada para el aparcamiento de los profesores."]
  },
  {
    enunciado: "La eficacia de la técnica deportiva se mide mecánicamente por:",
    correcta: "La relación entre el resultado obtenido y el gasto energético o esfuerzo mecánico realizado.",
    incorrectas: ["Lo bonito que le parezca el movimiento al profesor.", "Si el alumno sonríe o no durante la ejecución."]
  },
  {
    enunciado: "La 'trayectoria' de un móvil en un ejercicio de lanzamiento es un elemento de:",
    correcta: "La estructura mecánica externa.",
    incorrectas: ["La estructura funcional interna.", "La estructura psicológica subjetiva."]
  },
  {
    enunciado: "Un ejercicio 'isométrico' se define funcionalmente por:",
    correcta: "Generar tensión muscular sin variaciones apreciables en la longitud del músculo ni movimiento articular.",
    incorrectas: ["Realizar movimientos muy rápidos con poco peso.", "Correr durante mucho tiempo a baja intensidad."]
  },
  {
    enunciado: "La 'coordinación intramuscular' se refiere a:",
    correcta: "La capacidad de reclutar y sincronizar las fibras de un mismo músculo de forma eficiente.",
    incorrectas: ["La armonía entre los movimientos de los brazos y las piernas.", "La relación afectiva entre los miembros de un equipo."]
  },
  {
    enunciado: "En la Educación Física escolar, el análisis de los elementos funcionales permite:",
    correcta: "Controlar la intensidad del esfuerzo para que sea saludable y educativo.",
    incorrectas: ["Aumentar el riesgo de lesión de forma intencionada.", "Sustituir la práctica por el estudio de fórmulas físicas."]
  },
  {
    enunciado: "¿Qué plano anatómico divide al cuerpo en mitad superior e inferior y es el eje de los movimientos de rotación?",
    correcta: "Plano Transversal.",
    incorrectas: ["Plano Sagital.", "Plano Frontal."]
  },
  {
    enunciado: "La 'aceleración' en un ejercicio de salto vertical es una magnitud mecánica de tipo:",
    correcta: "Cinemática.",
    incorrectas: ["Estática.", "Térmica."]
  },
  {
    enunciado: "El 'momento de fuerza' o torque depende de:",
    correcta: "La magnitud de la fuerza aplicada y la distancia perpendicular al eje de giro (brazo de palanca).",
    incorrectas: ["Únicamente la velocidad de la luz en el vacío.", "La cantidad de agua ingerida antes del ejercicio."]
  },
  {
    enunciado: "Un ejercicio con una estructura 'acíclica' es aquel que:",
    correcta: "Tiene un inicio, nudo y desenlace bien definidos que no se repiten de forma idéntica (ej. un salto).",
    incorrectas: ["Se repite rítmicamente de forma indefinida (ej. pedalear).", "No tiene ningún tipo de orden ni sentido."]
  },
  {
    enunciado: "La repercusión de la técnica en la prevención de lesiones radica en:",
    correcta: "La correcta alineación de los segmentos y la distribución equilibrada de las cargas sobre las articulaciones.",
    incorrectas: ["El uso de ropa de marcas extremadamente caras.", "No realizar nunca ningún tipo de calentamiento previo."]
  },
  {
    enunciado: "En un ejercicio de carrera, el análisis de la 'fase de vuelo' es fundamental para estudiar:",
    correcta: "La cinemática del centro de gravedad y la gestión del tiempo de suspensión.",
    incorrectas: ["La cantidad de oxígeno consumida por los pulmones en reposo.", "El impacto psicológico de la victoria."]
  },
  {
    enunciado: "¿Qué tipo de palanca biomecánica predomina en la extensión del codo por el tríceps (apoyo en el codo, fuerza en el olécranon)?",
    correcta: "Primer grado.",
    incorrectas: ["Segundo grado.", "Tercer grado."]
  },
  {
    enunciado: "La 'base de sustentación' es un factor clave para el equilibrio y se define como:",
    correcta: "El área delimitada por los puntos de contacto del cuerpo con la superficie de apoyo.",
    incorrectas: ["El calzado deportivo con mayor amortiguación del mercado.", "La cantidad de alumnos que caben en una colchoneta."]
  },
  {
    enunciado: "Un ejercicio físico 'analítico' se caracteriza por:",
    correcta: "Aislar un movimiento o grupo muscular específico para su desarrollo dirigido.",
    incorrectas: ["Involucrar a todo el cuerpo de forma espontánea y global.", "Ser realizado únicamente en un laboratorio de química."]
  },
  {
    enunciado: "La estructura funcional del ejercicio en Secundaria debe priorizar los sistemas metabólicos de tipo:",
    correcta: "Aeróbico, evitando esfuerzos anaeróbicos lácticos máximos prolongados.",
    incorrectas: ["Anaeróbicos alácticos puros de menos de 1 segundo.", "Únicamente el metabolismo de las proteínas."]
  },
  {
    enunciado: "La 'sinergia muscular' en el ejercicio físico es:",
    correcta: "La cooperación de varios músculos para realizar un movimiento complejo de forma fluida.",
    incorrectas: ["La lucha entre dos músculos que impide el movimiento.", "Un tipo de lesión grave del tejido conectivo."]
  },
  {
    enunciado: "En el análisis de la técnica, el 'error' debe ser visto en EF como:",
    correcta: "Una oportunidad de aprendizaje y ajuste mediante el feedback informativo.",
    incorrectas: ["Un motivo de castigo físico o humillación pública.", "Algo inexistente, ya que todos los movimientos son válidos."]
  },
  {
    enunciado: "¿Qué rama de la mecánica estudia las fuerzas que producen o modifican el movimiento humano?",
    correcta: "Dinámica (Cinética).",
    incorrectas: ["Cinemática.", "Termodinámica."]
  },
  {
    enunciado: "La 'economía de esfuerzo' en la estructura del ejercicio significa que el alumno:",
    correcta: "Logra el objetivo motor utilizando el mínimo de energía necesaria mediante una técnica eficiente.",
    incorrectas: ["No realiza ningún esfuerzo para no cansarse.", "Paga menos dinero por la equipación deportiva."]
  },
  {
    enunciado: "La repercusión de la estructura del ejercicio en la salud del adolescente incluye:",
    correcta: "La correcta higiene postural y la evitación de cargas asimétricas o excesivas sobre el raquis.",
    incorrectas: ["La obligación de realizar 100 abdominales diarios sin supervisión.", "El uso de suplementación proteica desde los 12 años."]
  }
];
