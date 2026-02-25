'use strict';

var PREGUNTAS = [
{
enunciado: "En el contexto de la orientación profesional, el principio de prevención primaria se centra en:",
correcta: "Actuar sobre el entorno para reducir riesgos de desempleo o inadaptación",
incorrectas: [
"Intervenir una vez que el sujeto ha perdido su puesto de trabajo",
"Realizar un tratamiento psicológico ante el estrés laboral crónico",
"Evaluar exclusivamente las competencias técnicas tras el despido"
]
},
{
enunciado: "¿Qué autor es el referente del modelo de rasgos y factores que postula la adecuación hombre-puesto?",
correcta: "Parsons",
incorrectas: [
"Super",
"Holland",
"Krumboltz"
]
},
{
enunciado: "El modelo evolutivo de Donald Super introduce el concepto de 'madurez vocacional' como:",
correcta: "La congruencia entre el comportamiento vocacional y la edad del sujeto",
incorrectas: [
"La capacidad de realizar una elección profesional definitiva a los 16 años",
"El nivel de conocimientos técnicos adquiridos en la formación inicial",
"La estabilidad económica alcanzada en la etapa de mantenimiento"
]
},
{
enunciado: "Según la tipología de Holland (RIASEC), una persona con perfil 'Realista' prefiere actividades:",
correcta: "Manipulativas, técnicas, mecánicas y con objetos o máquinas",
incorrectas: [
"Persuasivas, de liderazgo y orientadas al éxito económico",
"Sistemáticas, de archivo y procesamiento de datos",
"Creativas, ambiguas y de expresión emocional"
]
},
{
enunciado: "¿En qué consiste esencialmente la 'autoorientación'?",
correcta: "Capacidad del sujeto para gestionar su itinerario con autonomía y recursos técnicos",
incorrectas: [
"Ausencia total de servicios de orientación en los centros educativos",
"Proceso de búsqueda de empleo sin hacer uso de Internet",
"Elección profesional basada únicamente en la tradición familiar"
]
},
{
enunciado: "La formación profesional inicial en el sistema educativo español tiene como fin:",
correcta: "La adquisición de competencias profesionales y la inserción laboral",
incorrectas: [
"La preparación exclusiva para el acceso a la universidad",
"El fomento de habilidades puramente académicas y teóricas",
"La acreditación de competencias obtenidas solo por experiencia laboral"
]
},
{
enunciado: "La formación continua se define como el conjunto de acciones formativas dirigidas a:",
correcta: "Trabajadores en activo para la actualización de sus competencias",
incorrectas: [
"Alumnos de Educación Secundaria Obligatoria con dificultades",
"Personas jubiladas que desean ampliar su cultura general",
"Estudiantes de grado universitario en su primer año"
]
},
{
enunciado: "El modelo de intervención por programas en orientación profesional exige:",
correcta: "Análisis previo de necesidades, planificación de objetivos y evaluación",
incorrectas: [
"Atención individualizada por orden de llegada al despacho",
"Intervención directa del orientador sin contar con el profesorado",
"Uso exclusivo de pruebas psicométricas de inteligencia general"
]
},
{
enunciado: "En el enfoque cognitivo de toma de decisiones (CASVE), la fase de 'Síntesis' implica:",
correcta: "Expandir y luego estrechar las opciones de carrera viables",
incorrectas: [
"Identificar la brecha entre el estado actual y el ideal",
"Valorar los costes y beneficios de cada opción elegida",
"Ejecutar el plan de acción en el mercado de trabajo"
]
},
{
enunciado: "La Ley Orgánica 3/2022 de Formación Profesional establece un sistema:",
correcta: "Dual e integrador que unifica la formación reglada y la laboral",
incorrectas: [
"Que separa estrictamente la formación inicial de la continua",
"Basado únicamente en la enseñanza teórica en centros públicos",
"Que elimina la figura del tutor de empresa en las prácticas"
]
},
{
enunciado: "¿Qué técnica de orientación profesional facilita el autoconocimiento mediante la reflexión sobre la historia de vida?",
correcta: "La autobiografía vocacional",
incorrectas: [
"El test de aptitudes diferenciales",
"La técnica del grupo nominal",
"El análisis DAFO del mercado laboral"
]
},
{
enunciado: "El concepto de 'Lifelong Learning' implica que la orientación debe ser:",
correcta: "Un proceso que acompaña al individuo durante toda su vida",
incorrectas: [
"Una intervención puntual antes de finalizar el Bachillerato",
"Un servicio exclusivo para personas en riesgo de exclusión",
"Una formación técnica obligatoria cada cinco años"
]
},
{
enunciado: "En la formación profesional, el 'Acompañamiento' se distingue de la información en que:",
correcta: "Aporta apoyo sostenido en la toma de decisiones y transiciones",
incorrectas: [
"Solo entrega listados de empresas con vacantes actuales",
"Se limita a la corrección de errores en el currículum vítae",
"Es un proceso burocrático de matriculación en los ciclos"
]
},
{
enunciado: "Un distractor común en la toma de decisiones profesionales es el 'locus de control externo', que consiste en:",
correcta: "Atribuir el éxito o fracaso profesional a la suerte o al azar",
incorrectas: [
"Asumir la responsabilidad personal sobre el propio itinerario",
"Analizar objetivamente las demandas del mercado de trabajo",
"Planificar metas a corto y medio plazo con criterios realistas"
]
},
{
enunciado: "El modelo de consulta en orientación profesional se caracteriza por:",
correcta: "La relación del orientador con mediadores (profesores/tutores)",
incorrectas: [
"La aplicación directa de terapias de choque al desempleado",
"La gestión administrativa de las becas de formación",
"La impartición de clases magistrales sobre procesos sanitarios"
]
},
{
enunciado: "Dentro del modelo de Holland, el perfil 'Social' muestra preferencia por:",
correcta: "Informar, ayudar, desarrollar o curar a los demás",
incorrectas: [
"Trabajar con datos, números y tareas administrativas",
"Investigar fenómenos físicos, biológicos o culturales",
"Influir en los demás para alcanzar metas organizativas"
]
},
{
enunciado: "La 'empleabilidad' se define técnicamente como:",
correcta: "Capacidad de una persona para encontrar, mantener y cambiar de empleo",
incorrectas: [
"Número total de contratos firmados en un año natural",
"Derecho legal a percibir una prestación por desempleo",
"Nivel de estudios alcanzado en la formación profesional inicial"
]
},
{
enunciado: "En la fase de 'Exploración' de Super, el individuo busca:",
correcta: "Ensayar roles a través de estudios y trabajos a tiempo parcial",
incorrectas: [
"Estabilizarse en una ocupación y consolidar su estatus",
"Reducir su actividad laboral antes de la jubilación",
"Identificar sus intereses básicos en la infancia temprana"
]
},
{
enunciado: "Las técnicas de 'Job Search Training' se centran en el entrenamiento de:",
correcta: "Habilidades de búsqueda activa, como entrevistas y redacción de CV",
incorrectas: [
"Competencias técnicas específicas de laboratorio clínico",
"Capacidades de memorización para exámenes teóricos",
"Habilidades de gestión financiera para emprendedores"
]
},
{
enunciado: "La acreditación de competencias profesionales permite:",
correcta: "Reconocer oficialmente la experiencia laboral y formación no formal",
incorrectas: [
"Obtener un título universitario sin realizar exámenes",
"Trabajar en el sector público sin superar una oposición",
"Eliminar la necesidad de realizar formación continua"
]
},
{
enunciado: "El 'Balance de Competencias' es una herramienta de orientación que:",
correcta: "Analiza el capital profesional y personal para proyectar el futuro laboral",
incorrectas: [
"Calcula el salario neto anual de una categoría profesional",
"Mide únicamente el coeficiente intelectual del trabajador",
"Evalúa el estado físico de los trabajadores de sanidad"
]
},
{
enunciado: "Un modelo de intervención directo e individual es:",
correcta: "El Counseling o consejo profesional",
incorrectas: [
"La orientación a través del currículo (infusión)",
"El modelo de servicios por programas sectoriales",
"Las ferias de empleo y jornadas de puertas abiertas"
]
},
{
enunciado: "La orientación laboral para personas con discapacidad debe priorizar:",
correcta: "La adaptación del puesto y la eliminación de barreras",
incorrectas: [
"La exclusión de tareas de responsabilidad técnica",
"La formación en centros segregados del mercado ordinario",
"El enfoque asistencialista por encima de la autonomía"
]
},
{
enunciado: "El aprendizaje 'no formal' se refiere a aquel que:",
correcta: "Se da de forma estructurada fuera del sistema educativo oficial",
incorrectas: [
"Se obtiene de manera involuntaria en la vida cotidiana",
"Conduce directamente a un título de Graduado en ESO",
"No tiene ninguna utilidad para el mercado de trabajo"
]
},
{
enunciado: "La técnica del 'In-basket' o bandeja de llegada se usa para evaluar:",
correcta: "La capacidad de organización, prioridad y toma de decisiones",
incorrectas: [
"La fuerza física en el manejo de cargas sanitarias",
"El conocimiento de idiomas extranjeros a nivel experto",
"La ortografía y gramática en informes administrativos"
]
},
{
enunciado: "En la orientación profesional, la técnica de 'Shadowing' consiste en:",
correcta: "Observar a un profesional durante su jornada laboral real",
incorrectas: [
"Realizar un examen escrito sobre ética profesional",
"Simular una entrevista de trabajo frente a un espejo",
"Investigar la historia de una empresa en su página web"
]
},
{
enunciado: "El principio de desarrollo en orientación profesional asume que:",
correcta: "La carrera profesional es un proceso de autorrealización continua",
incorrectas: [
"La personalidad se fija a los 5 años y determina el empleo",
"El mercado laboral es estático y no requiere adaptación",
"Solo los jóvenes necesitan orientación antes del primer empleo"
]
},
{
enunciado: "Los 'observatorios de empleo' son herramientas que sirven para:",
correcta: "Analizar tendencias, demandas de perfiles y tasas de inserción",
incorrectas: [
"Vigilar el cumplimiento de horarios de los trabajadores",
"Tramitar las altas y bajas en la Seguridad Social",
"Impartir cursos de prevención de riesgos laborales"
]
},
{
enunciado: "¿Qué caracteriza al 'aprendizaje a lo largo de la vida' en la era digital?",
correcta: "La necesidad constante de reskilling (reciclaje) y upskilling",
incorrectas: [
"La obtención de un único título que sirve para toda la vida",
"La desestimación de las competencias digitales básicas",
"El estudio exclusivo de manuales impresos antiguos"
]
},
{
enunciado: "El Inventario de Intereses Profesionales de Kuder evalúa:",
correcta: "Preferencias por distintas áreas de actividad ocupacional",
incorrectas: [
"El grado de psicopatología relacionada con el trabajo",
"La velocidad de reacción ante estímulos visuales",
"La capacidad de memoria a corto plazo del aspirante"
]
},
{
enunciado: "La orientación profesional en Procesos Sanitarios debe incluir:",
correcta: "Información sobre especialidades, bioética y salud pública",
incorrectas: [
"Marketing avanzado para grandes superficies comerciales",
"Diseño de estructuras arquitectónicas hospitalarias",
"Legislación minera y de extracción de hidrocarburos"
]
},
{
enunciado: "La técnica de 'Role-playing' en orientación profesional es útil para:",
correcta: "Ensayar situaciones de conflicto o negociación laboral",
incorrectas: [
"Sustituir la formación técnica en anatomía aplicada",
"Evaluar la resistencia cardiovascular de los alumnos",
"Medir el conocimiento de la Ley General de Sanidad"
]
},
{
enunciado: "El modelo de servicios en orientación suele ser criticado por:",
correcta: "Su carácter reactivo y centrarse más en el problema que en la prevención",
incorrectas: [
"Ser demasiado proactivo y anticiparse a las necesidades",
"Utilizar demasiados recursos tecnológicos modernos",
"Integrarse plenamente en el currículo de todas las áreas"
]
},
{
enunciado: "La 'identidad profesional' se construye principalmente mediante:",
correcta: "La interacción entre el autoconcepto y la experiencia laboral",
incorrectas: [
"La asignación arbitraria de un puesto por la administración",
"El pago de cuotas a colegios profesionales oficiales",
"La compra de uniformes y herramientas de trabajo"
]
},
{
enunciado: "En el contexto de la FP, el portafolio de competencias sirve para:",
correcta: "Documentar y evidenciar el progreso y logros del estudiante",
incorrectas: [
"Guardar exclusivamente los justificantes de faltas de asistencia",
"Almacenar las facturas de compra de material escolar",
"Registrar las sanciones disciplinarias impuestas al alumno"
]
},
{
enunciado: "La orientación para el autoempleo debe fomentar:",
correcta: "La iniciativa, la gestión del riesgo y el plan de negocio",
incorrectas: [
"La dependencia absoluta de las subvenciones públicas",
"La evitación de cualquier responsabilidad administrativa",
"El trabajo sin cumplir la normativa de seguridad vigente"
]
},
{
enunciado: "¿Qué es la 'infusión curricular' en orientación profesional?",
correcta: "Integrar contenidos de orientación en las materias del currículo",
incorrectas: [
"Eliminar la orientación para dar más horas de matemáticas",
"Realizar una charla externa una vez al año en el centro",
"Subcontratar la orientación a una empresa de consultoría"
]
},
{
enunciado: "El concepto de 'transición' en orientación profesional se refiere a:",
correcta: "Cambios significativos entre etapas educativas o hacia el trabajo",
incorrectas: [
"El desplazamiento físico de casa al lugar de estudios",
"La sustitución de un libro de texto por otro más actual",
"El paso de una evaluación trimestral a la siguiente"
]
},
{
enunciado: "La madurez profesional según Crites implica dimensiones como:",
correcta: "Competencia en la toma de decisiones y actitudes hacia el trabajo",
incorrectas: [
"Tener más de 45 años y 20 años de experiencia cotizada",
"Poseer un doctorado en una materia de procesos sanitarios",
"Haber trabajado en al menos tres países diferentes"
]
},
{
enunciado: "La evaluación de la eficacia de una intervención orientadora debe basarse en:",
correcta: "El grado de consecución de los objetivos previstos en el programa",
incorrectas: [
"La satisfacción subjetiva inmediata del orientador",
"El número de test aplicados independientemente de su uso",
"La cantidad de folletos repartidos durante las jornadas"
]
}
];