'use strict';
var PREGUNTAS = [
{
enunciado: "¿Cuál es la jerarquía normativa que establece la prioridad de la protección colectiva sobre la individual?",
correcta: "El artículo 15 de la Ley 31/1995 de Prevención de Riesgos Laborales.",
incorrectas: [
"El Reglamento General de Selección de Personal y Formación.",
"La Orden Ministerial sobre Equipos de Protección Respiratoria de 1999."
]
},
{
enunciado: "¿Qué condición es indispensable para que un equipo sea considerado Equipo de Protección Individual (EPI)?",
correcta: "Que esté destinado a ser llevado o sujetado por el trabajador para protegerle de uno o varios riesgos.",
incorrectas: [
"Que sea propiedad del trabajador y esté validado por el servicio de prevención.",
"Que proteja a un grupo de trabajadores de forma simultánea frente a riesgos ambientales."
]
},
{
enunciado: "En la selección de personal, ¿qué principio debe prevalecer desde la perspectiva de la prevención?",
correcta: "La adecuación entre las capacidades del trabajador y las exigencias preventivas del puesto.",
incorrectas: [
"La exclusión de cualquier candidato que presente una patología crónica previa.",
"La priorización de trabajadores con experiencia previa en el uso de EPI complejos."
]
},
{
enunciado: "¿Cuándo debe impartirse la formación en materia preventiva según el artículo 19 de la LPRL?",
correcta: "En el momento de la contratación, independientemente de la modalidad o duración del contrato.",
incorrectas: [
"Tras superar el periodo de prueba establecido en el convenio colectivo.",
"Únicamente cuando el trabajador va a desempeñar tareas de alta peligrosidad."
]
},
{
enunciado: "Un EPI debe disponer obligatoriamente de:",
correcta: "Marcado CE y folleto informativo del fabricante en el idioma oficial.",
incorrectas: [
"Seguro de responsabilidad civil asociado al número de serie del equipo.",
"Autorización expresa de la Inspección de Trabajo para su uso en centros sanitarios."
]
},
{
enunciado: "¿Qué se entiende por 'factor humano' en el contexto de la siniestralidad laboral?",
correcta: "El conjunto de aspectos psicológicos, fisiológicos y sociales que influyen en el comportamiento seguro.",
incorrectas: [
"La predisposición genética del trabajador a sufrir enfermedades profesionales.",
"El error voluntario y negligente del operario para evitar seguir los protocolos."
]
},
{
enunciado: "La formación preventiva impartida por la empresa debe considerarse como:",
correcta: "Tiempo de trabajo efectivo y realizarse, preferentemente, dentro de la jornada laboral.",
incorrectas: [
"Una actividad voluntaria fuera del horario lectivo o laboral del trabajador.",
"Un coste deducible del salario base en concepto de especialización técnica."
]
},
{
enunciado: "¿Cuál es un ejemplo de medida de protección colectiva técnica?",
correcta: "Campaña de extracción de gases y vapores en un laboratorio de anatomía patológica.",
incorrectas: [
"Uso de guantes de nitrilo de alta resistencia frente a agentes químicos.",
"Instrucción escrita sobre el manejo de residuos biosanitarios del Grupo III."
]
},
{
enunciado: "¿Qué categoría de EPI protege contra riesgos de consecuencias muy graves, como la muerte o daños irreversibles?",
correcta: "Categoría III.",
incorrectas: [
"Categoría I.",
"Categoría II."
]
},
{
enunciado: "En el diseño de la formación preventiva, ¿qué nivel es fundamental para asegurar la transferencia del aprendizaje?",
correcta: "El nivel operativo, centrado en los procedimientos seguros específicos del puesto.",
incorrectas: [
"El nivel teórico-administrativo, centrado en la cuantía de las sanciones.",
"El nivel académico superior, centrado en la historia de la medicina del trabajo."
]
},
{
enunciado: "¿Qué obligación tiene el trabajador respecto a los EPI puestos a su disposición?",
correcta: "Utilizarlos correctamente y velar por su buen estado de conservación.",
incorrectas: [
"Adquirir los repuestos necesarios en caso de desgaste por uso habitual.",
"Almacenarlos en su domicilio particular para garantizar su higiene personal."
]
},
{
enunciado: "¿Qué técnica se utiliza en selección para evaluar la aptitud psicofísica ante riesgos específicos?",
correcta: "Profesiograma preventivo.",
incorrectas: [
"Encuesta de clima laboral.",
"Análisis de costes marginales de contratación."
]
},
{
enunciado: "¿Cuál es una característica esencial de la protección colectiva frente a la individual?",
correcta: "No requiere el aprendizaje de técnicas de uso por parte del operario para ser efectiva.",
incorrectas: [
"Debe renovarse anualmente según el calendario de caducidad del fabricante.",
"Es siempre de uso obligatorio aunque el riesgo sea calificado como trivial."
]
},
{
enunciado: "La formación preventiva debe estar centrada en:",
correcta: "Los riesgos específicos del puesto de trabajo o función desempeñada.",
incorrectas: [
"La normativa general del Estado independientemente de la actividad de la empresa.",
"El adiestramiento en primeros auxilios como único bloque de contenidos."
]
},
{
enunciado: "¿Qué documento debe entregar el empresario al trabajador junto con un EPI?",
correcta: "Manual de instrucciones y, si procede, el certificado de entrega y formación.",
incorrectas: [
"Copia de la póliza de seguros de la mutua patronal.",
"Relación nominal de los delegados de prevención de la zona."
]
},
{
enunciado: "En relación con el factor humano, ¿qué es la 'percepción del riesgo'?",
correcta: "El proceso cognitivo por el cual el trabajador identifica y valora la peligrosidad de una situación.",
incorrectas: [
"La capacidad visual del trabajador medida en el reconocimiento médico.",
"El límite de tolerancia al dolor físico durante la ejecución de una tarea."
]
},
{
enunciado: "Los equipos de protección individual contra caídas de altura se clasifican como:",
correcta: "Categoría III.",
incorrectas: [
"Categoría II.",
"Categoría I."
]
},
{
enunciado: "¿Cuál es el objetivo de las actuaciones preventivas en la selección de personal?",
correcta: "Garantizar que el trabajador no suponga un riesgo para sí mismo o para terceros.",
incorrectas: [
"Reducir la tasa de absentismo mediante la exclusión de candidatos fumadores.",
"Aumentar la productividad mediante la selección de los perfiles más jóvenes."
]
},
{
enunciado: "¿Qué tipo de EPI es un delantal de protección frente a radiaciones ionizantes?",
correcta: "Un equipo de protección parcial del cuerpo.",
incorrectas: [
"Un equipo de protección colectiva móvil.",
"Un dispositivo de prevención de categoría I."
]
},
{
enunciado: "La formación en prevención de riesgos laborales es un derecho del trabajador y una:",
correcta: "Obligación del empresario que debe ser gratuita para el empleado.",
incorrectas: [
"Opción de mejora salarial vinculada a la carrera profesional.",
"Competencia exclusiva de las centrales sindicales más representativas."
]
},
{
enunciado: "¿Qué factor humano se asocia a la 'fatiga laboral'?",
correcta: "La disminución de la capacidad de respuesta y el aumento de la probabilidad de error.",
incorrectas: [
"La falta de motivación intrínseca por el salario percibido.",
"La resistencia al cambio ante nuevas tecnologías informáticas."
]
},
{
enunciado: "Las gafas de protección contra impactos de partículas se consideran generalmente EPI de:",
correcta: "Categoría II.",
incorrectas: [
"Categoría I.",
"Categoría III."
]
},
{
enunciado: "¿Qué papel juega el 'adiestramiento' dentro de la formación preventiva?",
correcta: "La adquisición de destrezas prácticas y hábitos de trabajo seguros.",
incorrectas: [
"La memorización de los artículos de la Ley de Prevención.",
"La preparación psicológica para afrontar sanciones administrativas."
]
},
{
enunciado: "¿Cuándo debe repetirse la formación preventiva?",
correcta: "Cuando cambien las funciones, los equipos de trabajo o las tecnologías.",
incorrectas: [
"Cada vez que el trabajador cumpla un trienio de antigüedad.",
"Solo si se produce un accidente grave en la sección del trabajador."
]
},
{
enunciado: "¿Cuál es un inconveniente de la protección individual (EPI)?",
correcta: "Puede generar incomodidad o limitar la movilidad del trabajador.",
incorrectas: [
"Requiere una inversión inicial mucho mayor que la protección colectiva.",
"Elimina por completo la necesidad de vigilancia de la salud."
]
},
{
enunciado: "En el análisis del factor humano, ¿qué es un 'acto inseguro'?",
correcta: "Una violación de un procedimiento de seguridad aceptado como necesario.",
incorrectas: [
"Una deficiencia en el mantenimiento preventivo de una caldera.",
"El fallo estructural de un andamio correctamente montado."
]
},
{
enunciado: "¿Quién debe determinar la necesidad de uso de un EPI tras la evaluación de riesgos?",
correcta: "El técnico de prevención o el servicio de prevención de la empresa.",
incorrectas: [
"El departamento de compras basándose en el stock disponible.",
"El propio trabajador según su sensación de inseguridad diaria."
]
},
{
enunciado: "La señalización de seguridad, ¿se considera una protección colectiva o individual?",
correcta: "Protección colectiva de tipo informativo o complementario.",
incorrectas: [
"Protección individual visual.",
"Medida de prevención administrativa de categoría III."
]
},
{
enunciado: "En la formación preventiva, el método 'aprender haciendo' se asocia a:",
correcta: "Formación práctica en el propio puesto de trabajo.",
incorrectas: [
"Estudio individual de manuales técnicos en formato digital.",
"Asistencia a conferencias magistrales en salones de actos externos."
]
},
{
enunciado: "Los guantes de jardinería o protección contra riesgos mecánicos superficiales son de:",
correcta: "Categoría I.",
incorrectas: [
"Categoría II.",
"Categoría III."
]
},
{
enunciado: "¿Qué elemento del factor humano es decisivo en la gestión de emergencias?",
correcta: "La capacidad de control del estrés y la toma de decisiones bajo presión.",
incorrectas: [
"La agudeza auditiva para distinguir frecuencias ultrasónicas.",
"La formación académica previa en áreas de humanidades o artes."
]
},
{
enunciado: "Un protector auditivo tipo orejera se clasifica como EPI de:",
correcta: "Categoría II (o III según el nivel de ruido y certificación específica).",
incorrectas: [
"Categoría I.",
"Protección colectiva modular."
]
},
{
enunciado: "La información a los trabajadores sobre los riesgos de la empresa debe ser:",
correcta: "Previa, clara, comprensible y adaptada al nivel del trabajador.",
incorrectas: [
"Opcional si el trabajador posee un título universitario sanitario.",
"Exclusivamente escrita en el tablón de anuncios de la entrada."
]
},
{
enunciado: "¿Qué técnica de selección evalúa la reacción del candidato ante situaciones de riesgo simuladas?",
correcta: "Pruebas situacionales o de simulación.",
incorrectas: [
"Entrevista biográfica estructurada.",
"Test de inteligencia general Raven."
]
},
{
enunciado: "La eficacia de un EPI depende críticamente de:",
correcta: "Su correcto ajuste fisiológico y el mantenimiento según el fabricante.",
incorrectas: [
"El color y el diseño ergonómico de la marca comercial.",
"La antigüedad de la empresa que lo suministra."
]
},
{
enunciado: "¿Qué se busca mitigar con la 'protección colectiva'?",
correcta: "El riesgo en el origen o en el medio de transmisión antes de que llegue al individuo.",
incorrectas: [
"La responsabilidad penal del trabajador accidentado.",
"El gasto en uniformidad general del personal administrativo."
]
},
{
enunciado: "¿Qué es la 'vigilancia de la salud' en relación con la formación?",
correcta: "Una herramienta para verificar si la formación y protección aplicadas son efectivas.",
incorrectas: [
"El sustituto legal de la formación teórica obligatoria.",
"Una técnica de selección para descartar candidatos con alergias."
]
},
{
enunciado: "Los EPI deben ser compatibles entre sí cuando:",
correcta: "El trabajador deba utilizar varios simultáneamente frente a distintos riesgos.",
incorrectas: [
"Se compren a distintos proveedores de la zona geográfica.",
"Sean utilizados por trabajadores de distintas categorías profesionales."
]
},
{
enunciado: "En el factor humano, la 'complacencia' se define como:",
correcta: "La pérdida de percepción del riesgo debido a la excesiva confianza o rutina.",
incorrectas: [
"El cumplimiento estricto de todas las normas de seguridad del centro.",
"La satisfacción del trabajador por haber recibido el equipo de protección."
]
},
{
enunciado: "¿Cuál es la norma de referencia para el uso de equipos de protección individual?",
correcta: "Real Decreto 773/1997.",
incorrectas: [
"Real Decreto 486/1997.",
"Real Decreto 1215/1997."
]
}
];