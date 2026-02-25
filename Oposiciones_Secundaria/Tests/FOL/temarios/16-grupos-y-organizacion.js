'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué define al grupo dentro de una organización como un 'sistema abierto'?",
correcta: "Su interacción constante con el entorno, intercambiando información y recursos",
incorrectas: [
"Su estructura hermética que impide la entrada de nuevos miembros",
"La ausencia total de normas internas para favorecer la libertad"
]
},
{
enunciado: "En la formación de un grupo, la etapa de 'tormenta' (storming) se caracteriza por:",
correcta: "La aparición de conflictos internos y la negociación de roles",
incorrectas: [
"La disolución inmediata del grupo por falta de objetivos comunes",
"La armonía absoluta y la ausencia de discrepancias entre miembros"
]
},
{
enunciado: "¿Qué es la 'cohesión' en el mantenimiento de los grupos?",
correcta: "El grado en que los miembros se sienten atraídos y permanecen unidos al grupo",
incorrectas: [
"La obligación legal de firmar un contrato de permanencia indefinida",
"El número de veces que los miembros se ven fuera del horario laboral"
]
},
{
enunciado: "La influencia del grupo sobre sus miembros a través de la 'conformidad' implica:",
correcta: "El ajuste de las opiniones o conductas del individuo a las normas del grupo",
incorrectas: [
"La rebelión constante contra cualquier instrucción de la jerarquía",
"El abandono de las tareas técnicas para realizar solo labores sociales"
]
},
{
enunciado: "¿Cuál es la principal característica de los 'grupos informales' en la empresa?",
correcta: "Surgen de forma espontánea basados en afinidades y relaciones personales",
incorrectas: [
"Están definidos estrictamente por el organigrama oficial de la entidad",
"Tienen prohibida la comunicación sobre temas ajenos al trabajo"
]
},
{
enunciado: "Un 'grupo temporal' o ad hoc se crea específicamente para:",
correcta: "Realizar una tarea concreta y disolverse una vez alcanzado el objetivo",
incorrectas: [
"Gestionar las funciones básicas de la empresa durante toda su vida",
"Sustituir de forma permanente a la dirección general del centro"
]
},
{
enunciado: "En el desarrollo de un grupo, la fase de 'desempeño' (performing) ocurre cuando:",
correcta: "La estructura es funcional y el grupo trabaja de forma eficaz hacia la meta",
incorrectas: [
"Los miembros aún no se conocen y reina la desconfianza inicial",
"El grupo decide dejar de trabajar para centrarse en el ocio"
]
},
{
enunciado: "La 'facilitación social' como influencia grupal se refiere a:",
correcta: "La mejora del rendimiento en tareas sencillas por la presencia de otros",
incorrectas: [
"La reducción del esfuerzo individual al trabajar en tareas colectivas",
"La organización de fiestas de cumpleaños dentro del laboratorio"
]
},
{
enunciado: "Los 'grupos permanentes' en una organización sanitaria suelen ser:",
correcta: "Los departamentos o secciones estables (ej. Laboratorio, Rayos X)",
incorrectas: [
"Comités creados para elegir el menú de la cena de Navidad",
"Equipos de investigación que solo se reúnen una vez al año"
]
},
{
enunciado: "El 'pensamiento grupal' (groupthink) es un fenómeno negativo que implica:",
correcta: "El deterioro de la eficiencia mental por la presión hacia la unanimidad",
incorrectas: [
"La lluvia de ideas creativa para resolver problemas técnicos",
"El estudio individual de protocolos antes de entrar a quirófano"
]
},
{
enunciado: "¿Qué factor favorece el crecimiento y desarrollo de un grupo?",
correcta: "La existencia de metas claras y un sistema de comunicación abierto",
incorrectas: [
"La rotación semanal de todos los miembros del grupo por azar",
"La competencia agresiva entre los integrantes para destacar"
]
},
{
enunciado: "Un rol 'orientado a la tarea' dentro del grupo busca:",
correcta: "Facilitar y coordinar los esfuerzos para lograr los objetivos técnicos",
incorrectas: [
"Mantener el buen clima emocional ignorando los plazos de entrega",
"Obstruir el trabajo de los demás para ganar protagonismo personal"
]
},
{
enunciado: "La 'holgazanería social' es un riesgo en el grupo que consiste en:",
correcta: "La reducción del esfuerzo individual cuando los resultados no son identificables",
incorrectas: [
"El exceso de trabajo de un miembro para compensar a los demás",
"La realización de tareas de limpieza de forma voluntaria"
]
},
{
enunciado: "En la formación de grupos, el modelo de Tuckman incluye las etapas de:",
correcta: "Formación, Tormenta, Normatividad, Desempeño y Disolución",
incorrectas: [
"Entrada, Salida, Descanso, Trabajo y Jubilación",
"Lectura, Escritura, Cálculo, Análisis y Síntesis"
]
},
{
enunciado: "Los grupos informales cumplen la función de:",
correcta: "Satisfacer necesidades sociales y de seguridad de los trabajadores",
incorrectas: [
"Dictar las nóminas y los contratos legales de la empresa",
"Sustituir los protocolos de seguridad por opiniones personales"
]
},
{
enunciado: "¿Qué es la 'normatividad' en el desarrollo grupal?",
correcta: "El establecimiento de reglas de comportamiento aceptadas por todos",
incorrectas: [
"La denuncia sistemática de los compañeros ante la dirección",
"El uso de uniformes de diferentes colores según el rango"
]
},
{
enunciado: "La influencia del grupo puede producir 'desindividualización', que es:",
correcta: "La pérdida de la autoconciencia y del sentido de responsabilidad individual",
incorrectas: [
"El aumento del orgullo personal por pertenecer a un equipo de éxito",
"La formación técnica avanzada en una sola competencia específica"
]
},
{
enunciado: "En la organización, un 'grupo de mando' se define por:",
correcta: "La relación jerárquica entre un subordinado y su superior directo",
incorrectas: [
"La amistad surgida entre empleados de diferentes niveles",
"El conjunto de personas que usan la misma zona de descanso"
]
},
{
enunciado: "El mantenimiento del grupo requiere 'roles socioemocionales' para:",
correcta: "Reducir tensiones y mejorar la moral y satisfacción del equipo",
incorrectas: [
"Controlar el tiempo exacto que dura cada prueba de laboratorio",
"Redactar los informes técnicos de forma fría y objetiva"
]
},
{
enunciado: "La 'identidad grupal' se fortalece cuando:",
correcta: "El grupo percibe una amenaza externa o compite con otros grupos",
incorrectas: [
"Cada miembro trabaja en una ciudad diferente sin comunicarse",
"Se prohíbe el intercambio de opiniones entre los integrantes"
]
},
{
enunciado: "Un factor de eficacia en los grupos de trabajo sanitarios es:",
correcta: "La complementariedad de las habilidades de sus miembros",
incorrectas: [
"Que todos los miembros tengan exactamente el mismo título",
"La ausencia de un líder que coordine las intervenciones"
]
},
{
enunciado: "Los grupos 'de interés' dentro de la organización se forman para:",
correcta: "Alcanzar un objetivo específico que afecta a sus integrantes",
incorrectas: [
"Realizar las tareas rutinarias de mantenimiento del edificio",
"Estudiar la vida privada de los clientes de la empresa"
]
},
{
enunciado: "La 'presión de grupo' puede ser positiva cuando:",
correcta: "Fomenta altos estándares de calidad y ética profesional",
incorrectas: [
"Obliga a los miembros a realizar acciones ilegales por lealtad",
"Impide que los nuevos miembros aporten ideas innovadoras"
]
},
{
enunciado: "La fase de 'disolución' (adjourning) es crítica en grupos temporales para:",
correcta: "Cerrar tareas y gestionar las emociones tras la separación",
incorrectas: [
"Asegurar que nadie vuelva a hablarse después del proyecto",
"Destruir toda la documentación generada durante el trabajo"
]
},
{
enunciado: "La comunicación en los grupos informales suele ser:",
correcta: "Multidireccional, rápida y basada en rumores o confidencias",
incorrectas: [
"Exclusivamente descendente y mediante circulares oficiales",
"Lenta, burocratizada y solo por escrito en papel timbrado"
]
},
{
enunciado: "La 'madurez grupal' implica que el grupo ha aprendido a:",
correcta: "Resolver sus conflictos de forma constructiva y autónoma",
incorrectas: [
"Depender totalmente de las órdenes de la dirección externa",
"Ignorar los errores de los compañeros para no crear tensión"
]
},
{
enunciado: "Un síntoma de 'crecimiento' de un grupo es:",
correcta: "La capacidad de adaptarse a nuevas demandas del entorno",
incorrectas: [
"El aumento del número de discusiones sin solución",
"La salida constante de miembros desmotivados"
]
},
{
enunciado: "En los grupos de Procesos Sanitarios, la jerarquía informal suele basarse en:",
correcta: "La experiencia técnica y el prestigio profesional reconocido",
incorrectas: [
"El sorteo aleatorio de cargos cada lunes por la mañana",
"La posesión de los equipos de laboratorio más caros"
]
},
{
enunciado: "La 'sociometría' es una técnica que permite:",
correcta: "Medir las relaciones de atracción y rechazo dentro del grupo",
incorrectas: [
"Calcular la dosis exacta de un fármaco según el peso",
"Medir el espacio físico necesario para cada trabajador"
]
},
{
enunciado: "Un grupo se convierte en 'equipo' cuando:",
correcta: "Existe una responsabilidad compartida y objetivos comunes",
incorrectas: [
"Sus miembros simplemente trabajan en el mismo despacho",
"Todos visten el mismo uniforme de la empresa"
]
},
{
enunciado: "La influencia grupal denominada 'polarización' consiste en:",
correcta: "La tendencia del grupo a adoptar decisiones más extremas que el individuo",
incorrectas: [
"La división del grupo en dos mitades que no se hablan",
"El uso de gafas de sol para trabajar en el laboratorio"
]
},
{
enunciado: "Los 'grupos de referencia' son aquellos que:",
correcta: "Sirven de modelo para que el individuo evalúe sus propias conductas",
incorrectas: [
"Están formados exclusivamente por personas que no trabajan",
"Son citados en los libros de texto de historia antigua"
]
},
{
enunciado: "La 'entropía' en un grupo como sistema implica:",
correcta: "La tendencia al desorden si no se introduce nueva energía/información",
incorrectas: [
"La capacidad de realizar tareas en la mitad de tiempo",
"La obligación de reciclar todos los materiales usados"
]
},
{
enunciado: "El 'liderazgo emergente' en grupos informales suele recaer en quien:",
correcta: "Mejor satisface las necesidades del grupo en un momento dado",
incorrectas: [
"Tiene el contrato de trabajo con mayor antigüedad legal",
"Es designado por el director general mediante una carta"
]
},
{
enunciado: "La 'socialización grupal' es el proceso por el cual:",
correcta: "Los nuevos miembros aprenden las normas y valores del grupo",
incorrectas: [
"Los trabajadores salen juntos de fiesta todos los fines de semana",
"Se prohíbe el uso de términos técnicos ante personas ajenas"
]
},
{
enunciado: "Un obstáculo para el desarrollo del grupo es la 'resistencia al cambio' debido a:",
correcta: "El miedo a perder la seguridad o el estatus alcanzado",
incorrectas: [
"El deseo constante de aprender nuevas técnicas sanitarias",
"La mejora de las condiciones salariales de todo el equipo"
]
},
{
enunciado: "Los grupos de 'tarea' se diferencian de los de 'mando' en que:",
correcta: "Pueden estar formados por personas de diferentes niveles jerárquicos",
incorrectas: [
"Solo se reúnen para comer y no para trabajar",
"Tienen una duración infinita independientemente del trabajo"
]
},
{
enunciado: "La 'sinergia' en el trabajo grupal significa que:",
correcta: "El resultado del conjunto es superior a la suma de las partes",
incorrectas: [
"El grupo trabaja menos que si cada uno lo hiciera por separado",
"Todos los miembros deben pensar exactamente igual siempre"
]
},
{
enunciado: "La 'atribución de roles' en el grupo debe ser:",
correcta: "Clara para evitar el conflicto y la ambigüedad de rol",
incorrectas: [
"Cambiante cada hora para generar confusión y reto",
"Secreta para que nadie sepa qué tiene que hacer el otro"
]
},
{
enunciado: "El mantenimiento del grupo a largo plazo depende de:",
correcta: "El equilibrio entre la satisfacción de tareas y la satisfacción social",
incorrectas: [
"Ignorar por completo los sentimientos de los integrantes",
"Centrarse exclusivamente en los beneficios económicos de la empresa"
]
}
];