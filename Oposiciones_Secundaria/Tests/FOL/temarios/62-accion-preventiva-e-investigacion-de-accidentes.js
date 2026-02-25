'use strict';
var PREGUNTAS = [
{
enunciado: "¿Cuál es la finalidad última de la investigación de accidentes en la acción preventiva?",
correcta: "Identificar las causas raíces para diseñar medidas que eviten su repetición.",
incorrectas: [
"Determinar la responsabilidad legal y las posibles sanciones disciplinarias.",
"Cuantificar los costes económicos derivados de la baja laboral del trabajador."
]
},
{
enunciado: "En la metodología de inspección de seguridad, ¿qué caracteriza a la inspección no planeada o informal?",
correcta: "Se realiza de forma espontánea durante la actividad rutinaria sin una guía previa.",
incorrectas: [
"Se ejecuta exclusivamente tras la ocurrencia de un accidente grave o mortal.",
"Requiere la presencia obligatoria de un técnico del organismo oficial de inspección."
]
},
{
enunciado: "Según el modelo de causalidad, ¿qué es una 'causa inmediata' de un accidente?",
correcta: "La acción insegura o la condición peligrosa que desencadena directamente el suceso.",
incorrectas: [
"El fallo en el sistema de gestión o la falta de formación previa del operario.",
"La consecuencia lesiva definitiva que sufre el trabajador tras el impacto."
]
},
{
enunciado: "¿Qué índice estadístico relaciona el número de accidentes con baja por cada millón de horas trabajadas?",
correcta: "Índice de Frecuencia.",
incorrectas: [
"Índice de Gravedad.",
"Índice de Incidencia."
]
},
{
enunciado: "En la investigación de accidentes, la técnica del 'Árbol de Causas' se basa en:",
correcta: "Partir del daño final y retroceder lógicamente hasta encontrar las causas primarias.",
incorrectas: [
"Analizar cronológicamente la vida laboral del accidentado desde su contratación.",
"Comparar el accidente actual con una base de datos de siniestros similares."
]
},
{
enunciado: "¿Cuál es la primera etapa de la acción preventiva tras la identificación inicial de peligros?",
correcta: "La evaluación de los riesgos que no hayan podido ser evitados.",
incorrectas: [
"La compra de equipos de protección individual certificados con el sello CE.",
"La formación específica de los delegados de prevención en la materia."
]
},
{
enunciado: "El Índice de Gravedad (IG) se define técnicamente como:",
correcta: "El número de jornadas perdidas por cada mil horas de exposición al riesgo.",
incorrectas: [
"El número de accidentes mortales ocurridos en un año natural por cada cien mil trabajadores.",
"El coste total de las indemnizaciones por incapacidad dividido por el número de empleados."
]
},
{
enunciado: "En una inspección de seguridad, ¿qué se entiende por 'condición insegura'?",
correcta: "Un factor del entorno físico de trabajo que puede originar un accidente.",
incorrectas: [
"Un error de ejecución cometido por el trabajador debido a la fatiga.",
"La falta de aptitud médica detectada en el reconocimiento de vigilancia de la salud."
]
},
{
enunciado: "¿Qué se debe investigar obligatoriamente según la Ley de Prevención de Riesgos Laborales?",
correcta: "Los accidentes que hayan producido daños a la salud y los indicios de medidas preventivas insuficientes.",
incorrectas: [
"Únicamente los accidentes que supongan una baja médica superior a treinta días.",
"Exclusivamente los accidentes ocurridos en el trayecto de ida o vuelta al trabajo."
]
},
{
enunciado: "¿Cuál es una fase crítica en la metodología de la investigación de accidentes?",
correcta: "La toma de datos y recogida de información 'in situ' lo más pronto posible.",
incorrectas: [
"La revisión de la solvencia económica de la mutua colaboradora.",
"La comunicación del suceso a los medios de comunicación locales."
]
},
{
enunciado: "Dentro de la acción preventiva, ¿qué es el control de las medidas correctoras?",
correcta: "El seguimiento para verificar que las medidas adoptadas son eficaces y se mantienen en el tiempo.",
incorrectas: [
"La inspección anual realizada por el Ministerio de Trabajo y Economía Social.",
"El registro contable de la inversión realizada en protecciones colectivas."
]
},
{
enunciado: "El concepto de 'incidente' o 'accidente blanco' se refiere a:",
correcta: "Un suceso que no ha causado lesiones pero que podría haberlas producido.",
incorrectas: [
"Un accidente que ocurre en una zona de atmósfera limpia o quirófano.",
"Una patología de origen laboral que no manifiesta síntomas externos claros."
]
},
{
enunciado: "En el cálculo del Índice de Gravedad, ¿cómo se contabilizan las muertes o incapacidades permanentes?",
correcta: "Mediante la suma de baremos de días equivalentes según tablas estandarizadas.",
incorrectas: [
"Como 365 días naturales independientemente de la edad del trabajador.",
"No se incluyen en este índice, ya que solo mide jornadas reales de baja."
]
},
{
enunciado: "¿Qué diferencia a una inspección de seguridad de una auditoría de prevención?",
correcta: "La inspección observa condiciones materiales; la auditoría analiza el sistema de gestión.",
incorrectas: [
"La inspección es voluntaria para la empresa y la auditoría es siempre obligatoria.",
"La inspección la realizan los trabajadores y la auditoría el personal directivo."
]
},
{
enunciado: "El análisis de las causas básicas o de origen se centra en:",
correcta: "Los factores personales y los factores del trabajo o de la organización.",
incorrectas: [
"La identificación de la pieza exacta de la máquina que falló mecánicamente.",
"La determinación de la hora exacta y las condiciones climáticas del suceso."
]
},
{
enunciado: "La planificación de la acción preventiva debe incluir:",
correcta: "Plazo, responsables y recursos económicos para ejecutar las medidas.",
incorrectas: [
"El historial médico completo de todos los trabajadores del departamento.",
"La firma de todos los proveedores de materias primas de la empresa."
]
},
{
enunciado: "¿Qué mide el Índice de Incidencia (II)?",
correcta: "El número de accidentes con baja por cada mil trabajadores expuestos.",
incorrectas: [
"El número de accidentes que ocurren en la primera hora de la jornada laboral.",
"La relación entre accidentes leves y accidentes graves en un trimestre."
]
},
{
enunciado: "Durante la recogida de datos en una investigación de accidentes, se recomienda:",
correcta: "Entrevistar a los testigos por separado y evitar emitir juicios de valor prematuros.",
incorrectas: [
"Realizar interrogatorios grupales para fomentar el careo entre los operarios.",
"Limpiar inmediatamente la zona del accidente para no interrumpir la producción."
]
},
{
enunciado: "¿Qué técnica preventiva actúa sobre el accidente antes de que ocurra detectando riesgos?",
correcta: "Inspección de seguridad.",
incorrectas: [
"Investigación de accidentes.",
"Notificación de riesgos."
]
},
{
enunciado: "Las inspecciones de seguridad reglamentarias son aquellas que:",
correcta: "Vienen exigidas por reglamentos específicos de seguridad industrial.",
incorrectas: [
"Se realizan únicamente en empresas con más de quinientos trabajadores.",
"Son llevadas a cabo exclusivamente por los delegados de personal."
]
},
{
enunciado: "¿Qué tipo de causas se sitúan en el escalón más alto del árbol de causas (el inicio del diagrama)?",
correcta: "El daño o lesión producida.",
incorrectas: [
"La falta de control administrativo.",
"El acto inseguro del trabajador."
]
},
{
enunciado: "La 'Acción Preventiva' debe ser un proceso:",
correcta: "Dinámico y cíclico, que se retroalimenta con los resultados obtenidos.",
incorrectas: [
"Estático, que se define una sola vez al inicio de la actividad empresarial.",
"Individualizado, donde cada trabajador decide sus propios estándares de seguridad."
]
},
{
enunciado: "¿Cuál es el objetivo de las inspecciones de seguridad periódicas?",
correcta: "Detectar desgastes o variaciones en las condiciones de seguridad estandarizadas.",
incorrectas: [
"Sustituir la necesidad de realizar la evaluación de riesgos trienal.",
"Garantizar que no existan bajas laborales durante el periodo inspeccionado."
]
},
{
enunciado: "El informe de investigación de un accidente debe ser redactado por:",
correcta: "El técnico de prevención o el responsable de la línea donde ocurrió el suceso.",
incorrectas: [
"El abogado de la empresa especializado en derecho laboral.",
"Cualquier trabajador que haya presenciado los hechos de forma fortuita."
]
},
{
enunciado: "¿Qué relación estadística se conoce como la 'Pirámide de Heinrich'?",
correcta: "La proporción existente entre incidentes, accidentes leves y accidentes graves.",
incorrectas: [
"La jerarquía de mando en un servicio de prevención mancomunado.",
"El coste creciente de la prevención según el tamaño de la organización."
]
},
{
enunciado: "¿Cuál de los siguientes datos es innecesario en un parte de accidente de trabajo?",
correcta: "La filiación política o sindical del trabajador accidentado.",
incorrectas: [
"La descripción detallada del agente material que causó la lesión.",
"El lugar exacto y la hora en la que se produjo el evento."
]
},
{
enunciado: "La metodología de las 4 'P' en inspecciones de seguridad se refiere a:",
correcta: "Personas, Procesos, Posiciones y Partes (elementos materiales).",
incorrectas: [
"Prevención, Protección, Planificación y Presupuesto.",
"Peligro, Probabilidad, Precaución y Penalización."
]
},
{
enunciado: "¿Cuándo se considera que un accidente es 'in itinere'?",
correcta: "Cuando ocurre al ir o volver del lugar de trabajo por el trayecto habitual.",
incorrectas: [
"Cuando ocurre durante un viaje de ocio pagado por la empresa.",
"Cuando el trabajador se accidenta realizando una tarea personal en horas libres."
]
},
{
enunciado: "¿Qué técnica estadística permite comparar la siniestralidad de empresas de distinto tamaño?",
correcta: "Índice de Frecuencia.",
incorrectas: [
"Número total de accidentes anuales.",
"Suma de días de baja por departamento."
]
},
{
enunciado: "En la investigación de accidentes, el 'factor humano' suele ser:",
correcta: "Una causa inmediata que a menudo esconde causas organizativas profundas.",
incorrectas: [
"La única causa real en el 100% de los accidentes laborales registrados.",
"Un elemento que no debe ser tenido en cuenta para no culpabilizar al operario."
]
},
{
enunciado: "¿Qué se busca en la fase de 'análisis de información' de una inspección?",
correcta: "Determinar el grado de cumplimiento de las normas y estándares establecidos.",
incorrectas: [
"Identificar a los trabajadores con mayor número de quejas laborales.",
"Establecer la comparativa de ventas del sector en el último ejercicio."
]
},
{
enunciado: "Las inspecciones de seguridad especiales se centran en:",
correcta: "Procesos o instalaciones de especial peligrosidad o tras cambios técnicos significativos.",
incorrectas: [
"La revisión de la limpieza de las oficinas administrativas centrales.",
"El control de acceso de personal ajeno a la empresa en horario nocturno."
]
},
{
enunciado: "El concepto de 'acción correctora' implica:",
correcta: "Modificar las condiciones de trabajo para eliminar la causa detectada.",
incorrectas: [
"Sancionar económicamente al responsable del departamento accidentado.",
"Notificar el accidente a la autoridad laboral en el plazo de 24 horas."
]
},
{
enunciado: "¿Cuál es el valor del 'K' (constante) más habitual para el Índice de Frecuencia en España?",
correcta: "Un millón (10⁶).",
incorrectas: [
"Cien mil (10⁵).",
"Mil (10³)."
]
},
{
enunciado: "¿Qué documento debe actualizarse tras una investigación de accidente que revele un riesgo no previsto?",
correcta: "La Evaluación de Riesgos y la Planificación de la Actividad Preventiva.",
incorrectas: [
"El Reglamento de Régimen Interno de la empresa.",
"El contrato mercantil con los proveedores de energía eléctrica."
]
},
{
enunciado: "La notificación de accidentes de trabajo se realiza actualmente a través de:",
correcta: "El sistema Delt@ (Declaración Electrónica de Trabajadores Accidentados).",
incorrectas: [
"Correo certificado dirigido a la Tesorería General de la Seguridad Social.",
"Una aplicación de mensajería instantánea del servicio de prevención."
]
},
{
enunciado: "En una inspección, la comprobación de los resguardos de una máquina es una acción de:",
correcta: "Seguridad técnica.",
incorrectas: [
"Higiene operativa.",
"Vigilancia biológica."
]
},
{
enunciado: "¿Qué fase sigue a la identificación de causas en la investigación de accidentes?",
correcta: "La propuesta de medidas preventivas y correctoras.",
incorrectas: [
"La celebración de un juicio para dirimir responsabilidades penales.",
"La baja definitiva del trabajador en la Seguridad Social."
]
},
{
enunciado: "El Índice de Duración Media (DM) indica:",
correcta: "El promedio de jornadas perdidas por cada accidente con baja.",
incorrectas: [
"El tiempo que tarda el técnico en llegar al lugar del accidente.",
"La antigüedad media de los trabajadores que sufren accidentes."
]
},
{
enunciado: "¿Cuál es un error común en las inspecciones de seguridad?",
correcta: "Centrarse exclusivamente en aspectos mecánicos olvidando los organizativos.",
incorrectas: [
"Utilizar listas de comprobación (check-lists) para sistematizar la observación.",
"Informar previamente a los mandos intermedios sobre la realización de la visita."
]
}
];
