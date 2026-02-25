'use strict';

var PREGUNTAS = [
{
enunciado: "¿Cuál es la característica definitoria que distingue a un 'equipo de trabajo' de un simple grupo?",
correcta: "La existencia de una responsabilidad compartida y objetivos comunes interdependientes",
incorrectas: [
"La proximidad física de los integrantes en un mismo departamento",
"El intercambio de información técnica de forma periódica y reglada"
]
},
{
enunciado: "En la dinámica de grupos, el rol de 'coordinador' se centra en:",
correcta: "Clarificar las metas y promover la toma de decisiones conjunta",
incorrectas: [
"Generar nuevas ideas y soluciones creativas ante problemas técnicos",
"Evaluar la viabilidad económica de las propuestas presentadas"
]
},
{
enunciado: "La técnica de dirección de grupos denominada 'Brainstorming' busca:",
correcta: "Fomentar la producción de un gran número de ideas suspendiendo el juicio crítico inicial",
incorrectas: [
"Analizar de forma pormenorizada los riesgos de una decisión ya tomada",
"Establecer un orden jerárquico de intervención según la antigüedad"
]
},
{
enunciado: "¿Cuál es la primera etapa fundamental para el desarrollo de una reunión eficaz?",
correcta: "La preparación previa mediante la definición de objetivos y la elaboración del orden del día",
incorrectas: [
"La designación de un secretario que tome acta de los acuerdos alcanzados",
"El control de la puntualidad de los asistentes mediante registro escrito"
]
},
{
enunciado: "En la fase de 'clausura' de una reunión, es imprescindible:",
correcta: "Resumir los acuerdos tomados y asignar responsables a las tareas acordadas",
incorrectas: [
"Debatir sobre temas no incluidos en el orden del día para aprovechar el tiempo",
"Evaluar el desempeño individual de los asistentes durante la sesión"
]
},
{
enunciado: "La técnica de 'Grupo Nominal' se utiliza para:",
correcta: "Facilitar la toma de decisiones estructurada minimizando la influencia de los líderes dominantes",
incorrectas: [
"Identificar las habilidades sociales de los candidatos en un proceso de selección",
"Entrenar la comunicación no verbal en situaciones de atención al paciente"
]
},
{
enunciado: "El fenómeno de la 'Sinergia' en los equipos de trabajo implica que:",
correcta: "La combinación de esfuerzos produce un resultado superior a la suma de las capacidades individuales",
incorrectas: [
"El equipo tiende a la especialización extrema de cada uno de sus miembros",
"La responsabilidad se diluye entre los integrantes ante un resultado negativo"
]
},
{
enunciado: "¿Qué función cumple el 'acta' en el contexto de una reunión laboral?",
correcta: "Servir de documento de referencia y memoria de los acuerdos y compromisos",
incorrectas: [
"Justificar legalmente la jornada laboral ante la inspección de trabajo",
"Recoger las opiniones personales y estados de ánimo de los participantes"
]
},
{
enunciado: "Un obstáculo común en la participación del equipo de trabajo es:",
correcta: "La falta de definición de roles que deriva en la duplicidad de tareas",
incorrectas: [
"La excesiva formación técnica de los miembros en el área sanitaria",
"El uso de herramientas digitales para la coordinación no presencial"
]
},
{
enunciado: "En la dirección de grupos, la 'escucha activa' por parte del moderador consiste en:",
correcta: "Validar la comprensión de los mensajes y demostrar interés por las aportaciones",
incorrectas: [
"Tomar notas detalladas de todas las intervenciones sin interrumpir nunca",
"Permitir que todos hablen el mismo tiempo independientemente del contenido"
]
},
{
enunciado: "La técnica 'Phillips 6.6' tiene como finalidad:",
correcta: "Lograr la participación de grupos grandes mediante su división en subgrupos pequeños",
incorrectas: [
"Evaluar la resistencia física del personal ante turnos de trabajo prolongados",
"Establecer los estándares de calidad en un laboratorio de microbiología"
]
},
{
enunciado: "El rol de 'observador' en una dinámica de grupo se encarga de:",
correcta: "Analizar el proceso de interacción sin participar directamente en la tarea",
incorrectas: [
"Garantizar que se cumplan estrictamente los tiempos asignados a cada fase",
"Proveer los recursos materiales necesarios para el desarrollo de la actividad"
]
},
{
enunciado: "En la fase de desarrollo de una reunión, el moderador debe actuar para:",
correcta: "Centrar el debate en el orden del día y gestionar las interrupciones",
incorrectas: [
"Imponer su criterio técnico para acelerar la resolución de conflictos",
"Evitar que se planteen dudas que puedan cuestionar el plan inicial"
]
},
{
enunciado: "La 'dinámica de grupos' como disciplina estudia:",
correcta: "Las fuerzas y procesos que se producen en el seno de los grupos humanos",
incorrectas: [
"La evolución histórica de las organizaciones empresariales en el sector salud",
"Las patologías psicológicas individuales que afectan al rendimiento laboral"
]
},
{
enunciado: "La participación en el equipo se ve favorecida cuando:",
correcta: "Existe un clima de confianza que permite expresar desacuerdos constructivos",
incorrectas: [
"El líder recompensa únicamente los resultados individuales más destacados",
"Se evitan las reuniones presenciales para no interferir en la labor técnica"
]
},
{
enunciado: "En el método Delphi, la consulta a expertos se realiza de forma:",
correcta: "Anónima e iterativa mediante cuestionarios para alcanzar un consenso",
incorrectas: [
"Presencial y mediante debate abierto para favorecer la confrontación",
"Directa y mediante votación secreta en una única sesión de trabajo"
]
},
{
enunciado: "La 'cohesión' de un equipo de trabajo sanitario influye directamente en:",
correcta: "La reducción del estrés laboral y la mejora de la seguridad del paciente",
incorrectas: [
"El incremento salarial automático vinculado a la antigüedad del grupo",
"La eliminación total de la jerarquía administrativa en el hospital"
]
},
{
enunciado: "Una reunión se considera 'ineficaz' cuando:",
correcta: "No se alcanzan acuerdos operativos o no se respetan los tiempos previstos",
incorrectas: [
"Se producen debates técnicos intensos sobre los protocolos de actuación",
"Participan profesionales de diferentes categorías y niveles formativos"
]
},
{
enunciado: "La técnica de 'Role-playing' aplicada al entorno laboral permite:",
correcta: "Ensayar respuestas ante situaciones conflictivas en un entorno seguro",
incorrectas: [
"Evaluar los conocimientos teóricos del personal mediante exámenes orales",
"Asignar los turnos de vacaciones de forma lúdica y participativa"
]
},
{
enunciado: "En la organización de equipos, el 'tamaño ideal' suele situarse entre:",
correcta: "5 y 9 miembros para facilitar la interacción y la operatividad",
incorrectas: [
"2 y 3 miembros para evitar cualquier tipo de discrepancia interna",
"Más de 20 miembros para asegurar la representación de todas las áreas"
]
},
{
enunciado: "¿Qué es la 'facilitación' en la dirección de grupos?",
correcta: "Conjunto de habilidades para guiar al grupo hacia sus propios resultados",
incorrectas: [
"La provisión de infraestructuras tecnológicas para el trabajo remoto",
"La simplificación de las tareas técnicas para reducir la carga de trabajo"
]
},
{
enunciado: "La participación 'informativa' en la empresa se limita a:",
correcta: "La transmisión por parte de la dirección de datos sobre la marcha de la entidad",
incorrectas: [
"La capacidad de los trabajadores para votar sobre el plan de inversiones",
"El diseño conjunto de los turnos y horarios por parte de la plantilla"
]
},
{
enunciado: "Un síntoma de 'disfunción' en un equipo de trabajo es:",
correcta: "La evitación de la rendición de cuentas sobre los resultados obtenidos",
incorrectas: [
"La presencia de conflictos centrados en la mejora de los procedimientos",
"La necesidad de realizar reuniones de coordinación semanales"
]
},
{
enunciado: "El 'orden del día' debe enviarse a los participantes con antelación para:",
correcta: "Permitir la preparación de los temas y agilizar la toma de decisiones",
incorrectas: [
"Informar sobre la ubicación exacta y el mobiliario de la sala de reuniones",
"Evitar que asistan personas no convocadas originalmente al encuentro"
]
},
{
enunciado: "En la dirección de una reunión, el 'control del tiempo' implica:",
correcta: "Asignar duraciones estimadas a cada punto y evitar digresiones innecesarias",
incorrectas: [
"Finalizar la sesión exactamente a la hora prevista aunque no haya acuerdos",
"Registrar el tiempo de intervención de cada asistente para su evaluación"
]
},
{
enunciado: "La técnica de los 'Seis sombreros para pensar' (De Bono) busca:",
correcta: "Analizar un problema desde distintas perspectivas (lógica, emoción, crítica, etc.)",
incorrectas: [
"Distribuir las funciones de mando entre seis personas diferentes del equipo",
"Evaluar la capacidad de improvisación del personal ante una emergencia"
]
},
{
enunciado: "En los equipos de Procesos Sanitarios, la 'interdisciplinariedad' permite:",
correcta: "Integrar conocimientos diversos para un abordaje integral del paciente",
incorrectas: [
"Sustituir la formación especializada por una formación generalista común",
"Reducir los costes operativos mediante la unificación de puestos de trabajo"
]
},
{
enunciado: "La 'toma de decisiones por consenso' se caracteriza por:",
correcta: "Buscar una solución que todos los miembros puedan aceptar y apoyar",
incorrectas: [
"Adoptar la opción que cuente con el apoyo de la mayoría simple de votos",
"Aceptar la propuesta del líder para evitar el alargamiento de la reunión"
]
},
{
enunciado: "Un líder de equipo 'orientado a las personas' se enfoca en:",
correcta: "Fomentar el apoyo mutuo y el desarrollo profesional de los integrantes",
incorrectas: [
"Asegurar el cumplimiento estricto de los plazos de entrega de los informes",
"Minimizar los errores técnicos mediante la supervisión constante de la tarea"
]
},
{
enunciado: "La fase de 'normalización' en el desarrollo de un equipo conlleva:",
correcta: "El establecimiento de reglas de juego y la aceptación de las diferencias",
incorrectas: [
"El aumento de la competitividad interna para alcanzar puestos de mando",
"La disolución del equipo tras haber completado el proyecto asignado"
]
},
{
enunciado: "La técnica de 'Seminario' se utiliza para:",
correcta: "El estudio profundo de un tema mediante la investigación y el debate",
incorrectas: [
"La difusión rápida de noticias de carácter administrativo a toda la plantilla",
"La resolución de conflictos interpersonales mediante la mediación externa"
]
},
{
enunciado: "En una reunión, el rol del 'secretario' tiene la responsabilidad de:",
correcta: "Registrar fielmente el desarrollo de la sesión y los compromisos adquiridos",
incorrectas: [
"Dirigir el debate y conceder los turnos de palabra a los asistentes",
"Asegurar que el equipo cuente con el presupuesto necesario para trabajar"
]
},
{
enunciado: "La 'participación operativa' se refiere a la capacidad de los trabajadores para:",
correcta: "Decidir sobre la organización diaria de su propio puesto de trabajo",
incorrectas: [
"Elegir democráticamente a los mandos intermedios del departamento",
"Intervenir en la elaboración de los presupuestos anuales de la empresa"
]
},
{
enunciado: "El 'pensamiento de equipo' (Teamthink) se diferencia del pensamiento grupal en que:",
correcta: "Fomenta la diversidad de opiniones antes de llegar al acuerdo final",
incorrectas: [
"Busca la unanimidad rápida para evitar el enfrentamiento entre miembros",
"Se basa en la intuición de los expertos más veteranos de la organización"
]
},
{
enunciado: "En la dirección de grupos, el 'uso del silencio' puede servir para:",
correcta: "Invitar a la reflexión o presionar para que surjan nuevas aportaciones",
incorrectas: [
"Sancionar comportamientos inadecuados de los miembros del equipo",
"Ahorrar tiempo en reuniones que se están extendiendo demasiado"
]
},
{
enunciado: "La 'madurez del equipo' se alcanza cuando:",
correcta: "Existe autonomía para resolver problemas y un alto nivel de rendimiento",
incorrectas: [
"Todos los integrantes poseen una antigüedad superior a diez años",
"Se han eliminado todas las diferencias de opinión entre los miembros"
]
},
{
enunciado: "La 'evaluación de la reunión' debe realizarse para:",
correcta: "Detectar áreas de mejora en la conducción y eficacia de futuros encuentros",
incorrectas: [
"Calificar el comportamiento individual de los asistentes con fines retributivos",
"Justificar el gasto realizado en dietas y desplazamientos de los convocados"
]
},
{
enunciado: "El trabajo en equipo en sanidad es un factor de calidad porque:",
correcta: "Reduce la probabilidad de errores por omisión o falta de comunicación",
incorrectas: [
"Permite que un solo profesional se haga cargo de todas las especialidades",
"Acelera la atención al paciente eliminando los trámites de consulta"
]
},
{
enunciado: "Un equipo 'transversal' está formado por:",
correcta: "Personas de diferentes departamentos que colaboran en un proyecto común",
incorrectas: [
"Miembros que ocupan el mismo nivel jerárquico dentro de una unidad",
"Profesionales que realizan la misma tarea técnica en distintos turnos"
]
},
{
enunciado: "La 'confianza' en el equipo de trabajo se construye mediante:",
correcta: "La integridad, la competencia demostrada y la previsibilidad de la conducta",
incorrectas: [
"El cumplimiento estricto de las normas de vestimenta y uniformidad",
"La realización de actividades sociales fuera del entorno del centro"
]
}
];