'use strict';

var PREGUNTAS = [
{
enunciado: "¿Cómo se define técnicamente la 'motivación laboral'?",
correcta: "Fuerza energética que determina la dirección, intensidad y persistencia del esfuerzo en el trabajo",
incorrectas: [
"Satisfacción inmediata que experimenta el trabajador tras completar una tarea rutinaria",
"Estado de ánimo positivo condicionado exclusivamente por el entorno físico de la empresa"
]
},
{
enunciado: "En la jerarquía de necesidades de Maslow, una vez satisfechas las necesidades básicas, el individuo busca:",
correcta: "Seguridad y estabilidad en el empleo y en su entorno físico",
incorrectas: [
"Autorrealización mediante la asunción de riesgos financieros elevados",
"Reconocimiento público y estatus social por encima de sus compañeros"
]
},
{
enunciado: "La Teoría Bifactorial de Herzberg sostiene que los 'factores higiénicos' (como el sueldo):",
correcta: "Evitan la insatisfacción pero no generan por sí mismos una motivación duradera",
incorrectas: [
"Son los únicos responsables de aumentar el rendimiento a largo plazo",
"Deben eliminarse para que el trabajador se centre en el contenido del puesto"
]
},
{
enunciado: "Según la Teoría de las Expectativas de Vroom, la motivación es el resultado de:",
correcta: "La relación entre el esfuerzo, el desempeño esperado y el valor de la recompensa",
incorrectas: [
"La comparación entre los beneficios propios y los de los compañeros del sector",
"La satisfacción de impulsos biológicos inconscientes en el entorno laboral"
]
},
{
enunciado: "¿Qué caracteriza a la 'motivación intrínseca'?",
correcta: "La realización de la actividad por el placer y el interés inherente a la misma",
incorrectas: [
"La búsqueda de premios externos o la evitación de castigos disciplinarios",
"La presión social del grupo para alcanzar los estándares mínimos de producción"
]
},
{
enunciado: "La Teoría X y Teoría Y de McGregor describe dos visiones sobre el trabajador; la 'Y' asume que:",
correcta: "El trabajo es algo natural y las personas buscan responsabilidades y retos",
incorrectas: [
"El individuo es perezoso por naturaleza y debe ser controlado de forma coercitiva",
"La motivación depende exclusivamente de las condiciones salariales pactadas"
]
},
{
enunciado: "En la Teoría de las Necesidades de McClelland, la 'necesidad de logro' destaca en personas que:",
correcta: "Desean resolver problemas complejos y obtener retroalimentación sobre su éxito",
incorrectas: [
"Buscan influir y controlar a los demás para alcanzar posiciones de mando",
"Priorizan las relaciones interpersonales y la aceptación dentro del equipo"
]
},
{
enunciado: "La Teoría de la Equidad de Adams postula que un trabajador se siente desmotivado si:",
correcta: "Percibe una desigualdad entre su esfuerzo/recompensa y el de otros",
incorrectas: [
"El nivel de exigencia técnica es superior a su formación académica previa",
"No recibe instrucciones directas sobre cómo realizar cada paso de su tarea"
]
},
{
enunciado: "La motivación en el entorno laboral sanitario se ve reforzada por:",
correcta: "El sentido de utilidad social y la trascendencia de la ayuda al paciente",
incorrectas: [
"La ausencia total de protocolos técnicos para fomentar la libertad de acción",
"El incremento constante de la jornada laboral para evitar el tiempo de ocio"
]
},
{
enunciado: "¿Qué objetivo tiene el 'Diagnóstico de la motivación' en una organización?",
correcta: "Identificar las causas de la satisfacción o insatisfacción de la plantilla",
incorrectas: [
"Determinar el grado de cumplimiento estricto del horario de entrada",
"Evaluar la capacidad física de los trabajadores para manejar cargas"
]
},
{
enunciado: "El 'Job Enrichment' (enriquecimiento del puesto) consiste en:",
correcta: "Aumentar la autonomía y la complejidad de las tareas para motivar al empleado",
incorrectas: [
"Añadir más tareas de igual dificultad para evitar que el trabajador esté inactivo",
"Incrementar el sueldo base sin modificar las funciones del puesto de trabajo"
]
},
{
enunciado: "Una técnica de motivación basada en el diseño de objetivos es el método SMART; la 'M' indica que deben ser:",
correcta: "Medibles, para poder evaluar el progreso y los resultados",
incorrectas: [
"Moderados, para evitar que el trabajador se fatigue excesivamente",
"Multidisciplinares, involucrando a todos los departamentos del centro"
]
},
{
enunciado: "Las condiciones de trabajo 'ambientales' que influyen en la motivación incluyen:",
correcta: "La iluminación, el ruido, la temperatura y la ergonomía del puesto",
incorrectas: [
"El tipo de contrato legal y la duración del periodo de vacaciones",
"La personalidad del líder y el estilo de comunicación del departamento"
]
},
{
enunciado: "La 'indefensión aprendida' en el trabajo ocurre cuando el empleado siente que:",
correcta: "Sus acciones no tienen influencia alguna sobre los resultados o consecuencias",
incorrectas: [
"Necesita formación constante para no quedar obsoleto tecnológicamente",
"Debe ayudar a los nuevos compañeros para asegurar el éxito del equipo"
]
},
{
enunciado: "En la Teoría de ERC de Alderfer, la necesidad de 'Relación' equivale a:",
correcta: "Las necesidades sociales y de estima externa de otros modelos",
incorrectas: [
"Los requerimientos fisiológicos básicos para la supervivencia biológica",
"El deseo de crecimiento personal y desarrollo de las capacidades propias"
]
},
{
enunciado: "La evaluación de la motivación mediante cuestionarios anónimos permite:",
correcta: "Obtener información veraz sobre el clima laboral sin miedo a represalias",
incorrectas: [
"Asignar sanciones individuales a los trabajadores que expresen descontento",
"Garantizar que todos los empleados reciban el mismo incentivo económico"
]
},
{
enunciado: "La 'Dirección por Objetivos' (DPO) fomenta la motivación porque:",
correcta: "Hace partícipe al trabajador en el establecimiento de sus propias metas",
incorrectas: [
"Elimina la necesidad de supervisión por parte de los mandos intermedios",
"Establece un sistema de castigos claros ante el incumplimiento de la tarea"
]
},
{
enunciado: "Un factor motivador según Herzberg sería:",
correcta: "La responsabilidad asumida y la posibilidad de promoción profesional",
incorrectas: [
"La relación cordial con los compañeros del mismo nivel jerárquico",
"La seguridad física en el manejo de productos químicos peligrosos"
]
},
{
enunciado: "La 'motivación trascendente' se caracteriza por:",
correcta: "Actuar por las consecuencias que la acción tiene sobre otras personas",
incorrectas: [
"Realizar el trabajo buscando el prestigio y la admiración del grupo",
"Centrarse exclusivamente en el desarrollo de la propia espiritualidad"
]
},
{
enunciado: "El feedback o retroalimentación es una herramienta motivadora siempre que sea:",
correcta: "Específico, constructivo y orientado a la mejora del desempeño",
incorrectas: [
"Genérico y centrado en los rasgos de personalidad del trabajador",
"Público para que el resto de compañeros conozcan los errores cometidos"
]
},
{
enunciado: "La formación continua se considera una técnica de motivación porque:",
correcta: "Aumenta la autoeficacia y la empleabilidad del trabajador",
incorrectas: [
"Permite al empleado alejarse de sus tareas habituales durante unas horas",
"Es una obligación legal que evita sanciones administrativas a la empresa"
]
},
{
enunciado: "El 'burnout' o síndrome de estar quemado es un estado de:",
correcta: "Agotamiento emocional y cinismo derivado del estrés laboral crónico",
incorrectas: [
"Entusiasmo excesivo que lleva a realizar más horas de las contratadas",
"Falta de conocimientos técnicos para manejar nuevos equipos médicos"
]
},
{
enunciado: "En la motivación laboral, los 'incentivos no monetarios' incluyen:",
correcta: "El reconocimiento verbal, la flexibilidad horaria o la autonomía",
incorrectas: [
"El pago de las horas extraordinarias a un precio superior al convenio",
"Los bonus anuales vinculados a los beneficios netos de la empresa"
]
},
{
enunciado: "La Teoría del Refuerzo de Skinner aplicada al trabajo propone que:",
correcta: "Las conductas seguidas de consecuencias positivas tienden a repetirse",
incorrectas: [
"El pensamiento consciente es el único motor de la acción humana",
"El castigo es la herramienta más eficaz para generar compromiso"
]
},
{
enunciado: "La 'conciencia de la tarea' (Task Identity) motiva al trabajador cuando este:",
correcta: "Realiza una parte completa y plenamente identificable de un trabajo",
incorrectas: [
"Repite mecánicamente una sola operación sin conocer el resultado final",
"Delega todas sus responsabilidades en personal de menor cualificación"
]
},
{
enunciado: "El estilo de mando 'democrático' influye positivamente en la motivación al:",
correcta: "Fomentar la participación y el sentimiento de pertenencia",
incorrectas: [
"Dar instrucciones precisas y cerradas que no dejan margen de error",
"Evitar cualquier tipo de control sobre los resultados del equipo"
]
},
{
enunciado: "Un sistema de evaluación del desempeño motiva si el trabajador:",
correcta: "Siente que los criterios son objetivos, transparentes y justos",
incorrectas: [
"Sabe que la nota final depende de la simpatía que le tenga el jefe",
"Consigue que se ignoren sus áreas de mejora para no desanimarse"
]
},
{
enunciado: "La 'valencia' en la teoría de Vroom representa:",
correcta: "El valor o importancia que el individuo otorga a la recompensa",
incorrectas: [
"La probabilidad de que el esfuerzo conduzca a un buen desempeño",
"El número de títulos académicos necesarios para el puesto"
]
},
{
enunciado: "El 'locus de control interno' favorece la motivación porque el sujeto cree que:",
correcta: "Sus éxitos dependen de su propio esfuerzo y capacidad",
incorrectas: [
"La suerte o el azar son los factores determinantes de su carrera",
"Las decisiones de la dirección son siempre arbitrarias e inevitables"
]
},
{
enunciado: "En el sector sanitario, el contacto con el sufrimiento puede desmotivar si:",
correcta: "No existen estrategias de apoyo emocional o sobrecarga de trabajo",
incorrectas: [
"El trabajador tiene demasiada formación en ética y bioética",
"Se utilizan equipos tecnológicos de última generación en el hospital"
]
},
{
enunciado: "El 'autoempleo' como fuente de motivación ofrece:",
correcta: "Máxima autonomía y alineación con los valores personales",
incorrectas: [
"Garantía total de ingresos estables desde el primer día de actividad",
"Ausencia de cualquier tipo de riesgo o responsabilidad legal"
]
},
{
enunciado: "Las políticas de 'conciliación' motivan al trabajador al:",
correcta: "Reducir el conflicto entre el rol familiar y el rol laboral",
incorrectas: [
"Aumentar el número de horas de presencia física obligatoria en el centro",
"Eliminar la necesidad de trabajar por objetivos o resultados"
]
},
{
enunciado: "La 'autoestima profesional' es un proceso motivador que se nutre de:",
correcta: "La percepción de competencia y eficacia en el desempeño de las tareas",
incorrectas: [
"La comparación constante con trabajadores de otros sectores económicos",
"El aislamiento de las críticas constructivas de los supervisores"
]
},
{
enunciado: "La Teoría de la Finalidad de Locke afirma que la motivación aumenta cuando:",
correcta: "Los objetivos son específicos, difíciles pero alcanzables",
incorrectas: [
"Las metas son vagas y muy fáciles de conseguir sin esfuerzo",
"No se establecen plazos de finalización para las tareas asignadas"
]
},
{
enunciado: "El diseño de puestos ergonómicos motiva porque:",
correcta: "Disminuye la fatiga y previene la aparición de lesiones laborales",
incorrectas: [
"Aumenta la estética visual del mobiliario de la oficina técnica",
"Permite que el trabajador realice sus funciones con los ojos cerrados"
]
},
{
enunciado: "La 'curiosidad' como motor de motivación laboral es propia de:",
correcta: "Individuos con alta motivación intrínseca por el aprendizaje",
incorrectas: [
"Personas que solo buscan la estabilidad económica absoluta",
"Trabajadores que evitan cualquier cambio en sus rutinas diarias"
]
},
{
enunciado: "Un clima de 'confianza' en el equipo de trabajo permite:",
correcta: "Delegar tareas con seguridad y aumentar el compromiso mutuo",
incorrectas: [
"Ignorar las faltas de ortografía en los informes sanitarios",
"Compartir información privada de los pacientes sin restricciones"
]
},
{
enunciado: "La 'rotación de puestos' puede motivar a corto plazo al:",
correcta: "Romper la monotonía y ampliar el conocimiento de los procesos",
incorrectas: [
"Permitir que el trabajador elija cada día su propio horario",
"Garantizar que no se tenga que aprender ninguna técnica nueva"
]
},
{
enunciado: "La motivación es un proceso dinámico, lo que implica que:",
correcta: "Puede variar en función de factores personales y del entorno",
incorrectas: [
"Una vez que se alcanza un nivel alto, este permanece inalterable",
"Es idéntica para todos los trabajadores de una misma organización"
]
},
{
enunciado: "En la evaluación de la motivación, la observación directa permite:",
correcta: "Analizar conductas espontáneas y el lenguaje no verbal en el trabajo",
incorrectas: [
"Sustituir la necesidad de realizar entrevistas personales de seguimiento",
"Controlar el pensamiento íntimo del trabajador sobre la dirección"
]
}
];