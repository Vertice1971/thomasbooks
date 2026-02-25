'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué caracteriza al liderazgo entendido exclusivamente como un 'rasgo de personalidad'?",
correcta: "La creencia de que ciertas cualidades innatas determinan la capacidad de mando",
incorrectas: [
"La consideración de que el líder se adapta según las demandas de la situación",
"La primacía de la formación técnica sobre el carisma personal del individuo"
]
},
{
enunciado: "En el marco de la organización, la influencia del líder se manifiesta principalmente en:",
correcta: "La capacidad de alinear los objetivos individuales con la visión estratégica",
incorrectas: [
"El control exhaustivo de los procesos administrativos y contables",
"La aplicación rigurosa de las sanciones previstas en el régimen disciplinario"
]
},
{
enunciado: "El liderazgo de tipo 'Laissez-faire' se distingue por:",
correcta: "La mínima intervención del líder, otorgando total libertad a los subordinados",
incorrectas: [
"Un enfoque basado en la motivación extrínseca y el refuerzo positivo",
"La delegación de tareas técnicas manteniendo la supervisión de resultados"
]
},
{
enunciado: "¿Cuál es la diferencia sustancial entre 'poder' y 'autoridad' en la jerarquía?",
correcta: "El poder es la capacidad de influir; la autoridad es el derecho legítimo a hacerlo",
incorrectas: [
"El poder emana del grupo, mientras que la autoridad es impuesta por la dirección",
"La autoridad es una cualidad psicológica y el poder una herramienta jurídica"
]
},
{
enunciado: "En la tipología de Kurt Lewin, el liderazgo democrático favorece:",
correcta: "El compromiso y la calidad de las decisiones mediante la participación",
incorrectas: [
"La rapidez en la toma de decisiones ante situaciones de emergencia sanitaria",
"La eliminación de la estructura jerárquica en favor de la autogestión total"
]
},
{
enunciado: "El liderazgo 'transaccional' se basa fundamentalmente en:",
correcta: "El intercambio de recompensas por el cumplimiento de objetivos específicos",
incorrectas: [
"La inspiración y el cambio de valores dentro de la cultura organizacional",
"La atención personalizada a las necesidades de crecimiento del seguidor"
]
},
{
enunciado: "El liderazgo 'transformacional' busca influir en los seguidores mediante:",
correcta: "La estimulación intelectual y la motivación inspiradora hacia un propósito superior",
incorrectas: [
"El establecimiento de procedimientos estandarizados para cada tarea laboral",
"El uso del carisma para evitar el cuestionamiento de las decisiones directivas"
]
},
{
enunciado: "Según French y Raven, el 'poder de experto' emana de:",
correcta: "La percepción de que el líder posee conocimientos o destrezas superiores",
incorrectas: [
"La posición formal que ocupa el individuo dentro del organigrama",
"La capacidad de otorgar beneficios o incentivos a los miembros del equipo"
]
},
{
enunciado: "El 'poder legítimo' en una organización se fundamenta en:",
correcta: "La aceptación de las normas y la posición formal del líder en la estructura",
incorrectas: [
"La identificación afectiva de los subordinados con la figura del jefe",
"La posesión de información privilegiada que otros miembros desconocen"
]
},
{
enunciado: "La jerarquía en la organización cumple la función técnica de:",
correcta: "Coordinar la división del trabajo y asegurar la unidad de mando",
incorrectas: [
"Garantizar que los salarios sean equitativos en todos los niveles del centro",
"Fomentar la competencia interna para mejorar el rendimiento individual"
]
},
{
enunciado: "El modelo de liderazgo situacional de Hersey y Blanchard vincula el estilo a:",
correcta: "El nivel de madurez o competencia de los seguidores para una tarea",
incorrectas: [
"La personalidad del líder y su capacidad de adaptación al cambio",
"La complejidad técnica de los recursos disponibles en el laboratorio"
]
},
{
enunciado: "Una desventaja potencial del liderazgo autocrático en entornos sanitarios es:",
correcta: "La desmotivación del personal cualificado y la falta de iniciativa",
incorrectas: [
"La ambigüedad en la asignación de responsabilidades ante un error clínico",
"La ralentización de los procesos de intervención en situaciones críticas"
]
},
{
enunciado: "El liderazgo 'carismático' puede presentar riesgos para la organización si:",
correcta: "Los objetivos del líder divergen de los intereses de la institución",
incorrectas: [
"El líder posee una formación técnica excesivamente especializada",
"Se fomenta una comunicación excesivamente abierta con los subordinados"
]
},
{
enunciado: "El 'poder coercitivo' se caracteriza por basarse en:",
correcta: "El temor a las consecuencias negativas o sanciones por el incumplimiento",
incorrectas: [
"La autoridad moral del líder ante situaciones de conflicto ético",
"La capacidad de influir mediante la persuasión y la retórica avanzada"
]
},
{
enunciado: "En la jerarquía, el 'tramo de control' se refiere a:",
correcta: "El número de subordinados que un superior puede supervisar eficazmente",
incorrectas: [
"La duración del contrato laboral de los cargos de responsabilidad",
"El límite geográfico de actuación de un directivo en la empresa"
]
},
{
enunciado: "El liderazgo ético en la organización se define por:",
correcta: "La promoción de conductas normativamente adecuadas mediante el ejemplo",
incorrectas: [
"El cumplimiento estricto de los beneficios económicos para los accionistas",
"La aplicación de la normativa de seguridad sin excepciones de ningún tipo"
]
},
{
enunciado: "El 'poder de referencia' se fundamenta en:",
correcta: "El deseo de los seguidores de identificarse o parecerse al líder",
incorrectas: [
"La capacidad del líder para resolver problemas técnicos complejos",
"El derecho legal que otorga el nombramiento en el Boletín Oficial"
]
},
{
enunciado: "La centralización en la jerarquía organizativa implica:",
correcta: "Que la toma de decisiones se concentra en los niveles superiores",
incorrectas: [
"Que todos los trabajadores realizan sus tareas en un mismo espacio físico",
"Que el poder de experto es el único reconocido para la gestión técnica"
]
},
{
enunciado: "Un líder con enfoque en la 'relación' prioriza:",
correcta: "El bienestar, la confianza y el respeto hacia los miembros del grupo",
incorrectas: [
"El cumplimiento estricto de los plazos y la calidad del producto final",
"La optimización de los costes materiales en el proceso productivo"
]
},
{
enunciado: "La 'cadena de mando' es un concepto jerárquico que establece:",
correcta: "La línea continua de autoridad que comunica a todos los niveles",
incorrectas: [
"El orden de preferencia para la promoción interna de los empleados",
"La secuencia de pasos técnicos para realizar una analítica clínica"
]
},
{
enunciado: "El estilo de liderazgo 'dictador' o paternalista se caracteriza por:",
correcta: "Tomar todas las decisiones considerando que es lo mejor para los empleados",
incorrectas: [
"Fomentar la participación activa pero reservarse el derecho a veto final",
"Ignorar las necesidades personales para centrarse exclusivamente en la tarea"
]
},
{
enunciado: "En el Grid Gerencial de Blake y Mouton, el liderazgo 'equipo' destaca por:",
correcta: "Un alto interés tanto por la producción como por las personas",
incorrectas: [
"Un equilibrio medio que evita los conflictos pero no maximiza resultados",
"Una preocupación exclusiva por mantener el clima laboral agradable"
]
},
{
enunciado: "La 'autoridad de staff' se diferencia de la lineal en que:",
correcta: "Ofrece asesoramiento y apoyo especializado sin mando directo",
incorrectas: [
"Tiene capacidad para sancionar disciplinariamente a los técnicos",
"Es de carácter temporal y solo actúa en situaciones de crisis"
]
},
{
enunciado: "La influencia del líder en la 'cultura organizacional' es clave para:",
correcta: "Institucionalizar valores y normas de comportamiento compartidos",
incorrectas: [
"Sustituir la normativa laboral por criterios de amistad personal",
"Garantizar que todos los empleados tengan la misma ideología"
]
},
{
enunciado: "El poder 'de información' se basa en:",
correcta: "El acceso y control de datos necesarios para la gestión",
incorrectas: [
"La capacidad comunicativa y el dominio de varios idiomas",
"El uso de tecnologías de la información de última generación"
]
},
{
enunciado: "En un entorno de alta incertidumbre, el liderazgo directivo suele:",
correcta: "Proporcionar estructura y reducir la ambigüedad de rol de los seguidores",
incorrectas: [
"Incrementar la libertad de acción para favorecer la creatividad individual",
"Delegar la responsabilidad de la toma de decisiones en los mandos intermedios"
]
},
{
enunciado: "La 'legitimidad' de un líder puede verse mermada si:",
correcta: "Sus acciones se perciben como inconsistentes con los valores del grupo",
incorrectas: [
"Delega funciones técnicas en subordinados con mayor experiencia",
"Utiliza un estilo comunicativo directo y orientado a resultados"
]
},
{
enunciado: "El liderazgo 'instructivo' es más eficaz cuando los colaboradores:",
correcta: "Tienen poca experiencia y necesitan guías claras de actuación",
incorrectas: [
"Poseen una alta cualificación y autonomía en sus funciones",
"Están altamente motivados pero carecen de recursos materiales"
]
},
{
enunciado: "La 'micropolítica' en la organización se refiere a:",
correcta: "El uso del poder y la influencia para lograr intereses particulares",
incorrectas: [
"La gestión de los pequeños gastos corrientes del departamento",
"El cumplimiento de las normas de convivencia en zonas comunes"
]
},
{
enunciado: "Un rasgo de personalidad frecuentemente asociado al liderazgo es la 'autoeficacia', que es:",
correcta: "La confianza en la propia capacidad para influir en los resultados",
incorrectas: [
"La habilidad para realizar tareas técnicas sin necesidad de ayuda",
"El nivel de autoestima general medido por pruebas psicológicas"
]
},
{
enunciado: "La jerarquía 'funcional' permite que un subordinado reciba órdenes de:",
correcta: "Varios superiores según la especialidad de la tarea realizada",
incorrectas: [
"Un único jefe directo para evitar la duplicidad de mandos",
"Cualquier miembro de la organización con mayor antigüedad"
]
},
{
enunciado: "El liderazgo 'servicial' (servant leadership) pone el foco en:",
correcta: "El desarrollo y crecimiento de los seguidores antes que en el líder",
incorrectas: [
"La prestación de servicios técnicos de alta calidad al cliente externo",
"La obediencia ciega del líder hacia las directrices de la propiedad"
]
},
{
enunciado: "La resistencia al poder jerárquico suele aumentar cuando:",
correcta: "Se percibe que las órdenes son arbitrarias o carentes de lógica técnica",
incorrectas: [
"El líder posee una autoridad basada en el conocimiento experto",
"Se establecen cauces de participación en el diseño de protocolos"
]
},
{
enunciado: "En la organización, el 'clima' de liderazgo se refiere a:",
correcta: "La percepción colectiva sobre cómo se ejerce la autoridad",
incorrectas: [
"La temperatura ambiental regulada en los despachos de dirección",
"El estado de ánimo individual del líder en un momento concreto"
]
},
{
enunciado: "El liderazgo 'visionario' es fundamental en etapas de:",
correcta: "Cambio organizacional o crisis que requiere un nuevo rumbo",
incorrectas: [
"Estabilidad absoluta donde se busca optimizar procesos rutinarios",
"Cierre de la empresa para liquidar los activos existentes"
]
},
{
enunciado: "El concepto de 'distancia de poder' mide:",
correcta: "El grado de aceptación de la desigualdad jerárquica por los miembros",
incorrectas: [
"La separación física entre el despacho del líder y los empleados",
"La diferencia salarial entre el nivel superior y el nivel básico"
]
},
{
enunciado: "La 'delegación' efectiva por parte del líder requiere:",
correcta: "Transferir autoridad y responsabilidad junto con la tarea",
incorrectas: [
"Encargar tareas tediosas manteniendo el control absoluto del proceso",
"Asignar funciones sin proporcionar los recursos necesarios para el éxito"
]
},
{
enunciado: "El líder 'integrador' en un equipo de salud busca:",
correcta: "Cohesionar las distintas especialidades hacia un objetivo común",
incorrectas: [
"Sustituir el trabajo de cada especialista por una visión generalista",
"Reducir el número de profesionales para simplificar la comunicación"
]
},
{
enunciado: "La influencia del líder es 'informal' cuando:",
correcta: "Se ejerce por prestigio personal sin ocupar un cargo directivo",
incorrectas: [
"Se comunica de forma verbal sin dejar constancia escrita oficial",
"Ocurre fuera del horario laboral en contextos puramente sociales"
]
},
{
enunciado: "El estudio del liderazgo como 'proceso' implica analizar:",
correcta: "La interacción dinámica entre el líder, los seguidores y el contexto",
incorrectas: [
"La biografía y rasgos físicos de los grandes líderes históricos",
"El cumplimiento de los trámites legales para el nombramiento"
]
}
];