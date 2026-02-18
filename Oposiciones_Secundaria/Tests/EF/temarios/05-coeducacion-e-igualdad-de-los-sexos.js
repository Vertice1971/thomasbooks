// -05-coeducacion-e-igualdad-de-los-sexos.js

var PREGUNTAS = [
  {
    enunciado: "En el marco de la LOMLOE, ¿qué concepto define la superación de la educación mixta hacia un modelo que interviene activamente en la eliminación de prejuicios de género?",
    correcta: "Coeducación.",
    incorrectas: ["Enseñanza bimodal.", "Integración sexuada."]
  },
  {
    enunciado: "¿Cómo se denomina al conjunto de mensajes, expectativas y valores que se transmiten de forma no explícita en las clases de Educación Física, perpetuando a menudo estereotipos de género?",
    correcta: "Currículo oculto.",
    incorrectas: ["Currículo nulo.", "Saberes transversales."]
  },
  {
    enunciado: "Dentro de la sociología del deporte, el concepto de 'masculinidad hegemónica' se asocia en el contexto escolar con:",
    correcta: "La exaltación de la fuerza, la agresividad competitiva y el dominio del espacio central.",
    incorrectas: ["El desarrollo de la inteligencia emocional y la empatía motriz.", "La práctica sistemática de actividades rítmico-expresivas."]
  },
  {
    enunciado: "La 'socialización diferencial' en Educación Física se manifiesta cuando:",
    correcta: "Se asignan roles y expectativas motrices distintas a niños y niñas basándose en constructos culturales de género.",
    incorrectas: ["Se dividen los grupos según el nivel de habilidad técnica exclusivamente.", "Se aplican diferentes sistemas energéticos según la edad cronológica."]
  },
  {
    enunciado: "¿Qué estrategia metodológica es más eficaz para neutralizar las ventajas de socialización previa en deportes de invasión?",
    correcta: "La modificación de las reglas para priorizar la participación colectiva y la rotación de roles de liderazgo.",
    incorrectas: ["La segregación por sexos para evitar el contacto físico entre alumnos.", "El uso de balones más ligeros únicamente para el alumnado femenino."]
  },
  {
    enunciado: "El término 'androcentrismo' en el diseño de actividades físico-deportivas implica:",
    correcta: "Tomar la experiencia y capacidades masculinas como el estándar universal de referencia.",
    incorrectas: ["Fomentar la participación equitativa en todas las disciplinas.", "Centrar la enseñanza en el desarrollo del sistema endocrino."]
  },
  {
    enunciado: "En la evaluación coeducativa, el uso de baremos de condición física diferenciados por sexo es criticado por:",
    correcta: "Poder reforzar la creencia en una inferioridad biológica natural en lugar de valorar la progresión individual.",
    incorrectas: ["Ser una exigencia técnica imposible de calcular para el docente.", "Favorecer exclusivamente al alumnado con Necesidades Educativas Especiales."]
  },
  {
    enunciado: "¿Qué autor/a destaca la importancia de la 'interseccionalidad' para entender cómo el género interactúa con la etnia o la clase social en el deporte?",
    correcta: "Kimberlé Crenshaw",
    incorrectas: ["Pierre Parlebas", "José María Cagigal"]
  },
  {
    enunciado: "La 'teoría de las expectativas' o Efecto Pigmalión en Educación Física sugiere que:",
    correcta: "Las creencias del docente sobre la capacidad motriz según el género condicionan el rendimiento real del alumnado.",
    incorrectas: ["El alumno siempre rinde más cuando el docente ignora sus limitaciones.", "La genética es el único factor determinante en la adquisición de habilidades."]
  },
  {
    enunciado: "¿Cuál es el objetivo primordial de la LOMLOE respecto a los estereotipos sexistas en el deporte?",
    correcta: "Fomentar una visión crítica que permita al alumnado identificar y rechazar las desigualdades de género.",
    incorrectas: ["Prohibir la práctica de deportes tradicionales por ser intrínsecamente machistas.", "Obligar a que todos los equipos profesionales sean mixtos por ley."]
  },
  {
    enunciado: "En el análisis del espacio escolar, el 'dominio del centro' por parte de juegos masculinizados es un indicador de:",
    correcta: "Jerarquización espacial y exclusión de otras formas de expresión motriz.",
    incorrectas: ["Eficiencia en la gestión de los recursos materiales del centro.", "Estructuración espacio-temporal avanzada del alumnado."]
  },
  {
    enunciado: "El concepto de 'género' se diferencia del 'sexo' en que el primero es:",
    correcta: "Una construcción socio-cultural que define roles, comportamientos e identidades.",
    incorrectas: ["Una categoría biológica determinada por los cromosomas.", "Un término médico referido únicamente a la morfología externa."]
  },
  {
    enunciado: "La inclusión de referentes femeninos en la historia del deporte contribuye a combatir el:",
    correcta: "Currículo nulo.",
    incorrectas: ["Currículo prescriptivo.", "Saberes básicos."]
  },
  {
    enunciado: "Un lenguaje no sexista en las sesiones de Educación Física busca:",
    correcta: "Nombrar y visibilizar a todo el alumnado, evitando el masculino genérico que excluye simbólicamente.",
    incorrectas: ["Sustituir términos técnicos deportivos por palabras abstractas.", "Eliminar la comunicación verbal para favorecer el lenguaje gestual."]
  },
  {
    enunciado: "En las actividades de 'Expresión Corporal', la coeducación se trabaja especialmente a través de:",
    correcta: "La desinhibición y la ruptura de roles de género en la comunicación gestual y el contacto físico.",
    incorrectas: ["El aprendizaje de pasos de danza tradicional con roles de pareja fijos.", "La competición por ver quién realiza el movimiento más enérgico."]
  },
  {
    enunciado: "El 'techo de cristal' en el ámbito deportivo se refiere a:",
    correcta: "Las barreras invisibles que dificultan el acceso de las mujeres a puestos de dirección y gestión deportiva.",
    incorrectas: ["La altura máxima permitida para los saltos en gimnasia artística.", "La fragilidad ósea debida a una mala nutrición en deportistas."]
  },
  {
    enunciado: "La LOMLOE establece que la Educación Física debe promover la 'igualdad efectiva' mediante:",
    correcta: "Situaciones de aprendizaje que garanticen las mismas oportunidades de éxito para todos.",
    incorrectas: ["La realización de exámenes teóricos idénticos para chicos y chicas.", "La supresión de la evaluación de la condición física."]
  },
  {
    enunciado: "Un indicador de actitud sexista en el docente es el uso de 'refuerzos diferenciales', que consiste en:",
    correcta: "Premiar la técnica y el riesgo en chicos, mientras se premia la estética o el esfuerzo en chicas.",
    incorrectas: ["Dar feedback positivo a todo el alumnado por igual.", "Corregir los errores biomecánicos de forma individualizada."]
  },
  {
    enunciado: "La 'Pedagogía de la Fragilidad' aplicada a las alumnas en Educación Física conlleva:",
    correcta: "Una sobreprotección que limita su desarrollo motor y su autoconfianza ante retos físicos.",
    incorrectas: ["Un entrenamiento específico para mejorar la flexibilidad articular.", "El estudio de la fisiología del ejercicio en ambientes extremos."]
  },
  {
    enunciado: "En el bloque de 'Juegos y Deportes', la coeducación propone priorizar:",
    correcta: "Juegos cooperativos y deportes alternativos donde no existan prejuicios de género previos.",
    incorrectas: ["Deportes de contacto pleno para endurecer el carácter de las alumnas.", "La especialización temprana en fútbol para ambos sexos."]
  },
  {
    enunciado: "El análisis crítico del tratamiento mediático del deporte femenino permite trabajar:",
    correcta: "La competencia ciudadana y el pensamiento crítico frente a la cosificación de la mujer.",
    incorrectas: ["La mejora de la agudeza visual para el arbitraje deportivo.", "La memorización de las audiencias televisivas de las olimpiadas."]
  },
  {
    enunciado: "¿Cómo influyen los 'juguetes y juegos' de la infancia en la competencia motriz posterior en secundaria?",
    correcta: "Condicionan el desarrollo de habilidades espaciales y la confianza en la propia capacidad física.",
    incorrectas: ["No tienen ninguna influencia, ya que la motricidad es puramente genética.", "Solo afectan a la elección de la ropa deportiva en la adolescencia."]
  },
  {
    enunciado: "La 'identidad de género' en la adolescencia puede generar abandono de la práctica físico-deportiva en las chicas debido a:",
    correcta: "El conflicto entre el rol de género femenino tradicional y los valores de competitividad y sudor del deporte.",
    incorrectas: ["Una disminución repentina de la capacidad aeróbica tras la pubertad.", "La falta de instalaciones deportivas exclusivas para mujeres."]
  },
  {
    enunciado: "Una tarea motriz 'coeducativa' debe evitar la 'binarización', lo que significa:",
    correcta: "No organizar actividades o grupos basándose sistemáticamente en la división chicos/chicas.",
    incorrectas: ["No utilizar el sistema binario para contabilizar los puntos de un partido.", "Evitar que los alumnos utilicen ambos hemisferios cerebrales."]
  },
  {
    enunciado: "El concepto de 'cuerpo para otros' frente a 'cuerpo para sí mismo' en la coeducación denuncia:",
    correcta: "La presión social sobre las mujeres para que su cuerpo sea un objeto estético más que una herramienta de acción.",
    incorrectas: ["La importancia de los trasplantes de órganos en la medicina deportiva.", "La necesidad de entrenar en parejas para mejorar la motivación."]
  },
  {
    enunciado: "La intervención docente ante un insulto homófobo en clase debe ser:",
    correcta: "Inmediata y educativa, abordando la diversidad sexual como un valor de respeto mutuo.",
    incorrectas: ["Ignorarlo para no dar protagonismo al alumno que insulta.", "Una sanción administrativa sin explicación pedagógica alguna."]
  },
  {
    enunciado: "En la evaluación de la condición física bajo la LOMLOE, se recomienda:",
    correcta: "Sustituir los tests de rendimiento máximo por el autoseguimiento de la salud y el bienestar.",
    incorrectas: ["Utilizar siempre las tablas de la antigua Unión Soviética.", "Comparar los resultados de los alumnos con los récords mundiales."]
  },
  {
    enunciado: "La 'corresponsabilidad' en las tareas de organización (recoger material, arbitraje) es una estrategia para:",
    correcta: "Evitar que las alumnas asuman roles de servicio y los alumnos roles de poder de forma espontánea.",
    incorrectas: ["Ahorrar tiempo al profesor para que pueda descansar entre clases.", "Cumplir con las normas de seguridad e higiene del pabellón."]
  },
  {
    enunciado: "La 'heteronormatividad' en el deporte escolar se combate:",
    correcta: "Visibilizando la diversidad afectivo-sexual y rompiendo el mito de la virilidad asociada al éxito deportivo.",
    incorrectas: ["Asegurando que todos los alumnos tengan parejas del sexo opuesto en los bailes.", "Centrando la teoría en la reproducción biológica del ser humano."]
  },
  {
    enunciado: "El uso de 'referentes masculinos' que expresen vulnerabilidad o practiquen danza contribuye a:",
    correcta: "Ampliar el abanico de posibilidades de identidad para el alumnado masculino.",
    incorrectas: ["Confundir a los alumnos sobre las reglas del juego.", "Disminuir el nivel técnico de la asignatura de Educación Física."]
  },
  {
    enunciado: "La 'educación emocional' es clave en la coeducación porque permite:",
    correcta: "Que los alumnos varones aprendan a gestionar y expresar emociones más allá de la agresividad.",
    incorrectas: ["Mejorar la capacidad de memoria a corto plazo antes de los exámenes.", "Evitar que los alumnos suden durante las situaciones de competición."]
  },
  {
    enunciado: "En el bloque de 'Actividades en el Medio Natural', la igualdad se trabaja mediante:",
    correcta: "La distribución de cargas y tareas de supervivencia de forma equitativa y no estereotipada.",
    incorrectas: ["La realización de rutas más cortas para los grupos donde haya más mujeres.", "La obligación de que los alumnos varones monten todas las tiendas de campaña."]
  },
  {
    enunciado: "La 'reacción defensiva' de algunos alumnos ante la coeducación se debe a menudo a:",
    correcta: "La percepción de una pérdida de privilegios o estatus en el grupo-clase.",
    incorrectas: ["Una alergia biológica a los contenidos de expresión corporal.", "La falta de proteínas en la dieta escolar."]
  },
  {
    enunciado: "El 'Deporte Alternativo' (como el Kin-ball o el Colpbol) favorece la coeducación porque:",
    correcta: "Su reglamento está diseñado para obligar a la cooperación y minimizar la ventaja de la fuerza bruta.",
    incorrectas: ["Son deportes que se juegan sentados para que no haya fatiga.", "No tienen reglas fijas y cada alumno inventa las suyas."]
  },
  {
    enunciado: "Un objetivo de la LOMLOE en Secundaria es que el alumnado aprenda a 'valorar críticamente los hábitos sociales relacionados con la salud y el consumo'. Esto incluye:",
    correcta: "El análisis de los cánones estéticos de género y su relación con trastornos de la conducta alimentaria.",
    incorrectas: ["La memorización del precio de las zapatillas de deporte en el mercado.", "El estudio de la bolsa de valores en empresas de nutrición deportiva."]
  },
  {
    enunciado: "La coeducación requiere que el docente realice una 'autoevaluación' de:",
    correcta: "Sus propios sesgos, lenguaje y formas de interacción con el alumnado.",
    incorrectas: ["Su capacidad para correr el test de Course Navette con los alumnos.", "El número de balones que ha inflado durante el trimestre."]
  },
  {
    enunciado: "¿Qué impacto tiene la 'presión estética' en la clase de Educación Física?",
    correcta: "Puede generar inseguridad y evitación de la exposición corporal en adolescentes.",
    incorrectas: ["Mejora la higiene personal de los alumnos de forma espontánea.", "Aumenta la velocidad de desplazamiento en las pruebas de atletismo."]
  },
  {
    enunciado: "La 'competencia personal, social y de aprender a aprender' se relaciona con la coeducación al:",
    correcta: "Fomentar la resiliencia, la empatía y la resolución pacífica de conflictos de género.",
    incorrectas: ["Permitir que el alumno aprenda solo sin ayuda del profesor.", "Centrarse en el estudio individual de la anatomía humana."]
  },
  {
    enunciado: "El éxito de un proyecto coeducativo en un centro depende de su inclusión en:",
    correcta: "El Plan de Igualdad y el Proyecto Educativo de Centro (PEC).",
    incorrectas: ["El tablón de anuncios de la cafetería únicamente.", "El manual de instrucciones de la caldera del gimnasio."]
  },
  {
    enunciado: "¿Cuál es la finalidad última de la coeducación en Educación Física?",
    correcta: "Garantizar el pleno desarrollo de la personalidad y la competencia motriz de cada individuo sin limitaciones de género.",
    incorrectas: ["Hacer que chicos y chicas sean idénticos en fuerza y velocidad.", "Sustituir todos los deportes de equipo por juegos de mesa."]
  }
];