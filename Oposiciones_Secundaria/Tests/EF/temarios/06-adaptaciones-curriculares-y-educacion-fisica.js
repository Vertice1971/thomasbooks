// -06-adaptaciones-curriculares-y-educacion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "En el marco de la LOMLOE, ¿cómo se definen las adaptaciones que afectan a los elementos prescriptivos del currículo para el alumnado con necesidades educativas especiales (nee)?",
    correcta: "Adaptaciones Curriculares Significativas (ACIs).",
    incorrectas: ["Medidas de Flexibilización Organizativa.", "Adaptaciones de Acceso al Currículo."]
  },
  {
    enunciado: "¿Qué concepto de la actual normativa sustituye la visión de 'déficit' por una visión centrada en la interacción del alumno con su entorno para facilitar el aprendizaje?",
    correcta: "Barreras para el Aprendizaje y la Participación (BAP).",
    incorrectas: ["Minusvalía motriz funcional.", "Incapacidad técnica de ejecución."]
  },
  {
    enunciado: "El Diseño Universal para el Aprendizaje (DUA) propone como principio fundamental en Educación Física:",
    correcta: "Proporcionar múltiples formas de representación, de acción y expresión, y de implicación.",
    incorrectas: ["Diseñar una única tarea estándar y que el alumno con discapacidad la observe.", "Eliminar la evaluación para el alumnado con necesidades específicas."]
  },
  {
    enunciado: "¿Cuál es un elemento de 'acceso al currículo' en una sesión de Educación Física para un alumno con discapacidad motriz?",
    correcta: "La eliminación de barreras arquitectónicas en el pabellón y el uso de materiales adaptados.",
    incorrectas: ["La modificación de los criterios de evaluación de la asignatura.", "La reducción del número de saberes básicos a impartir."]
  },
  {
    enunciado: "En una adaptación curricular significativa, ¿qué elemento es el último en ser modificado tras agotar otras medidas?",
    correcta: "Los criterios de evaluación y las competencias específicas.",
    incorrectas: ["La metodología de enseñanza.", "El tipo de material utilizado en la tarea."]
  },
  {
    enunciado: "¿Qué se entiende por 'Inclusión' frente a 'Integración' en el contexto de la Educación Física escolar?",
    correcta: "La inclusión implica transformar el sistema para que responda a la diversidad; la integración busca que el alumno se adapte al sistema preexistente.",
    incorrectas: ["Son sinónimos que se utilizan indistintamente en la legislación actual.", "La inclusión solo se aplica a alumnos con altas capacidades intelectuales."]
  },
  {
    enunciado: "Para un alumno con discapacidad visual (ceguera total), ¿cuál es la adaptación metodológica más relevante en una tarea de orientación?",
    correcta: "El uso de referencias sonoras estables y el acompañamiento mediante contacto físico o guías táctiles.",
    incorrectas: ["El uso de mapas con colores de alto contraste.", "La realización de la tarea exclusivamente de forma teórica en el aula."]
  },
  {
    enunciado: "El documento que recoge las medidas de respuesta educativa para un alumno con nee de forma individualizada se denomina generalmente:",
    correcta: "Plan de Actuación Personalizado (PAP) o Adaptación Curricular Individualizada.",
    incorrectas: ["Proyecto Educativo de Centro (PEC).", "Memoria Final de Departamento."]
  },
  {
    enunciado: "¿Qué estrategia de enseñanza favorece la inclusión de un alumno con Trastorno del Espectro Autista (TEA) en el gimnasio?",
    correcta: "La estructuración espacial y temporal mediante apoyos visuales (pictogramas) y rutinas predecibles.",
    incorrectas: ["El uso de señales acústicas estridentes y cambios constantes en la programación.", "La competición de alta intensidad sin reglas claras."]
  },
  {
    enunciado: "En la evaluación de alumnos con discapacidad, la normativa actual enfatiza que esta debe ser:",
    correcta: "Continua, formativa y basada en el grado de consecución de sus objetivos adaptados.",
    incorrectas: ["Idéntica en estándares de rendimiento a la del resto del grupo para no discriminar.", "Inexistente, otorgando un aprobado por imperativo legal."]
  },
  {
    enunciado: "Las 'Adaptaciones de Acceso' a la comunicación en Educación Física pueden incluir:",
    correcta: "Sistemas aumentativos y alternativos de comunicación (SAAC).",
    incorrectas: ["La enseñanza de la historia del deporte paralímpico.", "El aumento del volumen de los gritos del profesor."]
  },
  {
    enunciado: "¿Qué papel juega el 'Profesorado de Apoyo a la Inclusión' (PT/AL) en la clase de Educación Física?",
    correcta: "Colaborar con el docente de EF en el diseño y aplicación de las adaptaciones curriculares.",
    incorrectas: ["Sustituir al profesor de EF cuando hay un alumno con discapacidad en clase.", "Llevarse al alumno con nee fuera del gimnasio para que no estorbe."]
  },
  {
    enunciado: "Una adaptación en el 'Cómo enseñar' (metodología) para un alumno con discapacidad intelectual leve sería:",
    correcta: "Simplificar las instrucciones, utilizar el modelado y fragmentar la tarea en pasos sencillos.",
    incorrectas: ["Explicar la biomecánica del movimiento con terminología médica compleja.", "Dar todas las instrucciones únicamente por escrito."]
  },
  {
    enunciado: "¿Cuál es un ejemplo de adaptación en los saberes básicos para un alumno con cardiopatía severa?",
    correcta: "Priorizar saberes de control postural y relajación sobre los de resistencia aeróbica de alta intensidad.",
    incorrectas: ["Eximir al alumno de asistir a las clases de Educación Física.", "Obligar al alumno a realizar el test de Cooper para evaluar su límite."]
  },
  {
    enunciado: "En el marco del DUA, proporcionar 'múltiples formas de implicación' significa:",
    correcta: "Ofrecer opciones que fomenten la motivación, el interés y la autorregulación del alumnado.",
    incorrectas: ["Que todos los alumnos hagan exactamente lo mismo al mismo tiempo.", "Obligar a los alumnos a participar mediante sanciones."]
  },
  {
    enunciado: "Para un alumno con movilidad reducida en silla de ruedas, una adaptación en el reglamento del baloncesto escolar podría ser:",
    correcta: "Permitir dos botes simultáneos o llevar el balón en el regazo durante dos impulsos de la silla.",
    incorrectas: ["Prohibir que el resto de jugadores corra para igualar las velocidades.", "Eliminar las canastas para que no tenga que mirar hacia arriba."]
  },
  {
    enunciado: "El concepto de 'Equidad' en Educación Física implica:",
    correcta: "Dar a cada alumno los recursos y ayudas necesarios para alcanzar el máximo desarrollo de sus capacidades.",
    incorrectas: ["Tratar a todos los alumnos de forma idéntica sin considerar sus diferencias.", "Aprobar a todos los alumnos con la misma calificación independientemente de su esfuerzo."]
  },
  {
    enunciado: "Las adaptaciones curriculares 'no significativas' actúan sobre:",
    correcta: "La metodología, las actividades y los instrumentos de evaluación, sin modificar los objetivos prescriptivos.",
    incorrectas: ["La eliminación de competencias clave del perfil de salida.", "La sustitución de la Educación Física por otra materia."]
  },
  {
    enunciado: "Para un alumno con discapacidad auditiva, ¿qué recurso técnico es fundamental en el pabellón?",
    correcta: "Sistemas de inducción magnética o emisoras de frecuencia modulada (FM).",
    incorrectas: ["El uso de altavoces de gran potencia para aumentar el ruido.", "La oscuridad total para evitar distracciones visuales."]
  },
  {
    enunciado: "En la organización de grupos inclusivos, la técnica de 'Aprendizaje Cooperativo' favorece:",
    correcta: "La interdependencia positiva y la responsabilidad individual dentro de la diversidad.",
    incorrectas: ["La segregación de los alumnos más capaces para que avancen más rápido.", "La competición extrema entre subgrupos de niveles similares."]
  },
  {
    enunciado: "¿Qué es una 'tarea multinivel'?",
    correcta: "Una tarea diseñada con un tronco común pero con diferentes grados de dificultad o exigencia según el alumno.",
    incorrectas: ["Una tarea que se realiza en diferentes plantas de un edificio.", "Una tarea que solo pueden realizar los alumnos con un nivel de condición física excelente."]
  },
  {
    enunciado: "Para un alumno con TDAH, ¿cuál es una estrategia organizativa eficaz en Educación Física?",
    correcta: "Ubicación en lugares libres de distracciones y supervisión frecuente mediante contacto ocular.",
    incorrectas: ["Permitir que corra libremente por todo el centro sin ningún tipo de norma.", "Sentarlo en el banco durante toda la sesión para que se calme."]
  },
  {
    enunciado: "La 'evaluación auténtica' en el contexto de la diversidad busca:",
    correcta: "Evaluar el desempeño del alumno en situaciones reales y significativas ajustadas a sus posibilidades.",
    incorrectas: ["Evaluar solo mediante exámenes teóricos tipo test.", "Comparar el rendimiento del alumno con el de un atleta paralímpico."]
  },
  {
    enunciado: "¿Qué término define la capacidad de los entornos y productos para ser utilizados por todas las personas sin necesidad de adaptación posterior?",
    correcta: "Accesibilidad Universal.",
    incorrectas: ["Movilidad segregada.", "Adaptación reactiva."]
  },
  {
    enunciado: "Ante un alumno con una discapacidad degenerativa, el enfoque de la Educación Física debe ser principalmente:",
    correcta: "Mantenimiento funcional, bienestar emocional y fomento de la autonomía.",
    incorrectas: ["Entrenamiento de alta intensidad para revertir la patología.", "Exclusión de la práctica para evitar el cansancio."]
  },
  {
    enunciado: "El principio de 'Normalización' postula que:",
    correcta: "Las personas con discapacidad deben tener una vida lo más parecida posible a la del resto de ciudadanos.",
    incorrectas: ["Todos los alumnos deben ser normales y sin diferencias.", "La discapacidad debe ser tratada únicamente en centros médicos."]
  },
  {
    enunciado: "En alumnos con Altas Capacidades Intelectuales, las adaptaciones en Educación Física suelen dirigirse a:",
    correcta: "El enriquecimiento curricular, la profundización táctica y el liderazgo positivo.",
    incorrectas: ["Hacer que recojan el material de todos los compañeros.", "Obligarlos a repetir los mismos ejercicios básicos indefinidamente."]
  },
  {
    enunciado: "¿Cuál es la función del 'Dictamen de Escolarización'?",
    correcta: "Determinar las necesidades del alumno y proponer la modalidad de escolarización más adecuada.",
    incorrectas: ["Dar una nota final al alumno antes de que empiece el curso.", "Autorizar la compra de balones nuevos para el departamento."]
  },
  {
    enunciado: "Para un alumno con parálisis cerebral que utiliza un comunicador, la Educación Física debe:",
    correcta: "Integrar el uso del comunicador en las situaciones de juego para garantizar su interacción social.",
    incorrectas: ["Ignorar su capacidad de comunicación para centrarse solo en sus piernas.", "Prohibir el uso de tecnología en el gimnasio."]
  },
  {
    enunciado: "La 'atención a la diversidad' es un principio que debe aplicarse:",
    correcta: "A todo el alumnado, no solo a los que presentan discapacidad.",
    incorrectas: ["Solo a los alumnos extranjeros.", "Solo a los alumnos que suspenden la materia."]
  },
  {
    enunciado: "En la LOMLOE, el enfoque de 'Inclusión Educativa' se considera:",
    correcta: "Un derecho fundamental del alumnado y un principio rector del sistema educativo.",
    incorrectas: ["Una opción voluntaria de cada centro según su presupuesto.", "Una medida aplicable solo en la etapa de Primaria."]
  },
  {
    enunciado: "¿Qué se entiende por 'ajustes razonables'?",
    correcta: "Modificaciones necesarias y adecuadas que no impongan una carga desproporcionada para garantizar la igualdad.",
    incorrectas: ["Cambios químicos en el metabolismo durante el ejercicio.", "Ajustes de las tuercas de las canastas de baloncesto."]
  },
  {
    enunciado: "Un alumno con 'dificultades específicas de aprendizaje' (DEA) puede requerir en EF:",
    correcta: "Adaptaciones en la comprensión de las reglas escritas y en la gestión de secuencias complejas.",
    incorrectas: ["La exención total de la práctica de deportes de equipo.", "El uso obligatorio de silla de ruedas aunque no la necesite."]
  },
  {
    enunciado: "La colaboración con la familia en el proceso de adaptación curricular es:",
    correcta: "Preceptiva y esencial para asegurar la coherencia de las medidas adoptadas.",
    incorrectas: ["Ilegal según la ley de protección de datos.", "Irrelevante, ya que el docente es el único experto."]
  },
  {
    enunciado: "Para trabajar la expresión corporal con un alumno sordo, el docente debe:",
    correcta: "Asegurarse de que el alumno vea siempre su cara y utilizar vibraciones o luces para marcar el ritmo.",
    incorrectas: ["Gritar muy fuerte para que el alumno intente oír algo.", "Poner la música a un volumen bajo para no molestar."]
  },
  {
    enunciado: "El 'índice de inclusión' es una herramienta que sirve para:",
    correcta: "Evaluar y mejorar el grado de participación y aprendizaje de todo el alumnado en el centro.",
    incorrectas: ["Calcular el porcentaje de grasa corporal de los alumnos.", "Medir la velocidad de carrera de un deportista."]
  },
  {
    enunciado: "En una sesión inclusiva de 'atletismo', una adaptación para un alumno con hemiplejía en carreras sería:",
    correcta: "Permitir salidas compensadas o el uso de apoyos si fueran necesarios.",
    incorrectas: ["Obligar al resto de alumnos a correr con un brazo atado.", "Que el alumno realice la carrera en un dibujo en papel."]
  },
  {
    enunciado: "El 'enfoque competencial' de la LOMLOE favorece la inclusión porque:",
    correcta: "Permite valorar diferentes niveles de desempeño y diversas formas de resolver una misma situación motriz.",
    incorrectas: ["Elimina la necesidad de realizar cualquier tipo de esfuerzo físico.", "Establece un único modelo de éxito basado en la marca deportiva."]
  },
  {
    enunciado: "¿Qué importancia tiene la 'autoestima' en el alumnado con nee en Educación Física?",
    correcta: "Es un factor crítico, ya que la vivencia de competencia motriz influye directamente en su autoconcepto global.",
    incorrectas: ["Ninguna, lo único importante es la mejora del sistema cardiovascular.", "Es secundaria frente a la memorización de los huesos."]
  },
  {
    enunciado: "La Educación Física inclusiva debe buscar, en última instancia:",
    correcta: "La participación plena, el aprendizaje efectivo y el sentimiento de pertenencia del alumno al grupo.",
    incorrectas: ["La separación definitiva de los alumnos según sus patologías.", "La formación de equipos profesionales para ligas de élite."]
  }
];