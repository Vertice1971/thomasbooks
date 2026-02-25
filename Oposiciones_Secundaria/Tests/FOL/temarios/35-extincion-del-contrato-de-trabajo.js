'use strict';

var PREGUNTAS = [
{
enunciado: "El despido disciplinario se basa en:",
correcta: "Un incumplimiento grave y culpable del trabajador",
incorrectas: [
"La necesidad de reducir costes salariales por pérdidas previstas",
"La falta de adaptación del técnico a las nuevas herramientas digitales"
]
},
{
enunciado: "Constituye causa de despido disciplinario la transgresión de la buena fe contractual, así como:",
correcta: "El abuso de confianza en el desempeño del trabajo",
incorrectas: [
"La solicitud reiterada de permisos para formación externa",
"El desacuerdo público con la política comercial de la empresa"
]
},
{
enunciado: "La forma obligatoria de notificación de un despido disciplinario es:",
correcta: "Mediante comunicación escrita (carta de despido) figurando los hechos y la fecha de efectos",
incorrectas: [
"Mediante comunicación verbal ante dos testigos de la misma categoría",
"A través de un anuncio en el tablón de notas del laboratorio"
]
},
{
enunciado: "Si el trabajador despedido es representante legal de los trabajadores, el empresario debe:",
correcta: "Abrir un expediente contradictorio antes de proceder al despido",
incorrectas: [
"Solicitar autorización previa a la Inspección de Trabajo y Seguridad Social",
"Publicar los motivos del despido en el boletín oficial de la provincia"
]
},
{
enunciado: "Un despido será calificado como procedente cuando:",
correcta: "Queden acreditados los incumplimientos alegados por el empresario",
incorrectas: [
"El trabajador reconozca su culpabilidad ante un notario público",
"La empresa abone la indemnización máxima de forma anticipada"
]
},
{
enunciado: "La calificación de despido improcedente conlleva para el empresario la opción entre:",
correcta: "La readmisión del trabajador o el abono de una indemnización",
incorrectas: [
"El traslado del técnico a otra provincia o una sanción de empleo y sueldo",
"La jubilación anticipada del trabajador o el pago de un curso de reciclaje"
]
},
{
enunciado: "La indemnización por despido improcedente para contratos suscritos a partir de febrero de 2012 es de:",
correcta: "33 días de salario por año de servicio, prorrateándose los periodos inferiores",
incorrectas: [
"45 días de salario por año sin límite de mensualidades acumuladas",
"20 días de salario por año trabajado con un máximo de 12 meses"
]
},
{
enunciado: "El despido será calificado como nulo cuando:",
correcta: "Tenga como móvil alguna de las causas de discriminación prohibidas o vulnere derechos fundamentales",
incorrectas: [
"El empresario no haya entregado el certificado de empresa en el momento",
"La carta de despido contenga errores gramaticales o de puntuación"
]
},
{
enunciado: "El efecto principal del despido nulo es:",
correcta: "La readmisión inmediata del trabajador con abono de los salarios de tramitación",
incorrectas: [
"El pago de una indemnización doble por daños y perjuicios morales",
"La disolución del contrato con derecho a una pensión vitalicia"
]
},
{
enunciado: "El plazo para impugnar un despido ante la Jurisdicción Social es de:",
correcta: "20 días hábiles desde que el despido sea efectivo",
incorrectas: [
"Un año natural desde la fecha de firma del contrato de trabajo",
"60 días naturales tras la finalización del periodo de huelga"
]
},
{
enunciado: "Son causas de extinción del contrato por voluntad del trabajador basadas en un incumplimiento contractual del empresario:",
correcta: "La falta de pago o retrasos continuados en el abono del salario pactado",
incorrectas: [
"La denegación de un ascenso por falta de méritos técnicos suficientes",
"El cambio de la dirección técnica del laboratorio por jubilación"
]
},
{
enunciado: "El despido disciplinario por faltas de asistencia o puntualidad requiere que estas sean:",
correcta: "Repetidas e injustificadas",
incorrectas: [
"Superiores al 5% de la jornada mensual aunque estén justificadas",
"Comunicadas por el trabajador con menos de 24 horas de antelación"
]
},
{
enunciado: "La embriaguez habitual o toxicomanía son causa de despido si:",
correcta: "Repercuten negativamente en el trabajo",
incorrectas: [
"Se producen fuera del horario laboral y del recinto de la empresa",
"El trabajador se niega a realizarse análisis de sangre diarios"
]
},
{
enunciado: "Se considera despido colectivo cuando la extinción afecta en un periodo de 90 días a:",
correcta: "Al menos 10 trabajadores en empresas de menos de 100 trabajadores",
incorrectas: [
"La totalidad de la plantilla independientemente del tamaño de la empresa",
"Al menos 5 trabajadores técnicos con titulación de grado superior"
]
},
{
enunciado: "El mutuo acuerdo entre las partes para extinguir el contrato:",
correcta: "No da derecho, por regla general, a percibir indemnización ni desempleo",
incorrectas: [
"Obliga al empresario a pagar 20 días por año de servicio prestado",
"Debe ser ratificado obligatoriamente por un juez de lo social"
]
},
{
enunciado: "La muerte, jubilación o incapacidad del empresario individual:",
correcta: "Extingue el contrato, dando derecho al trabajador a un mes de salario",
incorrectas: [
"Obliga a la clausura definitiva y sellado del laboratorio sanitario",
"Transfiere automáticamente la propiedad de la empresa a los delegados"
]
},
{
enunciado: "La extinción del contrato por causas objetivas da derecho a una indemnización de:",
correcta: "20 días por año de servicio con un máximo de 12 mensualidades",
incorrectas: [
"33 días por año con un máximo de 24 mensualidades prorrateadas",
"Ocho días de salario por cada año completo de servicio técnico"
]
},
{
enunciado: "La ineptitud del trabajador conocida o sobrevenida con posterioridad a su colocación es causa de:",
correcta: "Extinción del contrato por causas objetivas",
incorrectas: [
"Despido disciplinario por transgresión de la buena fe técnica",
"Modificación sustancial de las condiciones de trabajo y salario"
]
},
{
enunciado: "En el despido por causas objetivas, el trabajador tiene derecho a un preaviso de:",
correcta: "15 días",
incorrectas: [
"30 días",
"7 días"
]
},
{
enunciado: "Durante el periodo de preaviso en un despido objetivo, el trabajador tiene derecho a:",
correcta: "Una licencia de 6 horas semanales retribuidas para buscar nuevo empleo",
incorrectas: [
"No asistir al trabajo cobrando el 100% de los pluses de peligrosidad",
"Utilizar el laboratorio para realizar análisis clínicos por cuenta propia"
]
},
{
enunciado: "La disminución continuada y voluntaria en el rendimiento de trabajo normal es causa de:",
correcta: "Despido disciplinario",
incorrectas: [
"Extinción por causas objetivas de carácter técnico",
"Suspensión de empleo y sueldo durante tres meses"
]
},
{
enunciado: "El acoso por razón de origen racial, religión, discapacidad o edad al empresario o compañeros es:",
correcta: "Causa de despido disciplinario",
incorrectas: [
"Una falta leve que solo conlleva amonestación verbal privada",
"Motivo de traslado forzoso a otro centro de la misma provincia"
]
},
{
enunciado: "Si el empresario opta por la readmisión en un despido improcedente:",
correcta: "Debe abonar los salarios de tramitación devengados",
incorrectas: [
"El trabajador pierde el derecho a sus vacaciones del año anterior",
"La antigüedad del técnico se pone a cero como si fuera un nuevo contrato"
]
},
{
enunciado: "En el despido disciplinario, si el trabajador no es representante, el empresario:",
correcta: "No tiene obligación de abonar salarios de tramitación si no hay readmisión",
incorrectas: [
"Debe pagar siempre una indemnización mínima de 10 días por año",
"Está obligado a contratar a un familiar del despedido como sustituto"
]
},
{
enunciado: "La extinción del contrato por expiración del tiempo convenido da derecho a una indemnización de:",
correcta: "12 días de salario por cada año de servicio (salvo interinidad y formación)",
incorrectas: [
"20 días de salario por año trabajado en el sector sanitario",
"Ninguna cuantía, ya que el fin del contrato era conocido de antemano"
]
},
{
enunciado: "La dimisión del trabajador requiere:",
correcta: "Un preaviso según lo que establezcan los convenios colectivos o la costumbre",
incorrectas: [
"La aprobación por escrito de la dirección técnica del centro",
"El pago de una multa equivalente a un mes de salario base"
]
},
{
enunciado: "El abandono del puesto de trabajo sin preaviso se considera:",
correcta: "Dimisión, pero puede generar derecho a indemnización por daños a la empresa",
incorrectas: [
"Despido nulo por falta de procedimiento escrito del empresario",
"Suspensión forzosa del contrato con reserva del puesto técnico"
]
},
{
enunciado: "La resolución del contrato por parte de la trabajadora víctima de violencia de género:",
correcta: "Es una causa de extinción que permite el acceso a la prestación por desempleo",
incorrectas: [
"Requiere el pago de una indemnización por parte de la trabajadora a la empresa",
"Solo es posible si el agresor trabaja en el mismo laboratorio clínico"
]
},
{
enunciado: "Se considera despido nulo el de las trabajadoras durante el periodo de:",
correcta: "Suspensión del contrato por nacimiento, adopción o acogimiento",
incorrectas: [
"Vacaciones anuales retribuidas pactadas en el calendario laboral",
"Excedencia voluntaria para la realización de estudios técnicos"
]
},
{
enunciado: "La falta de pago de la indemnización en el despido objetivo en el momento de la entrega de la carta:",
correcta: "Hace que el despido sea calificado como improcedente, salvo falta de liquidez",
incorrectas: [
"No afecta a la validez del despido si se paga antes de los 60 días",
"Convierte automáticamente el despido en nulo por defecto de forma"
]
},
{
enunciado: "El despido verbal es siempre calificado como:",
correcta: "Improcedente, por incumplimiento de los requisitos formales",
incorrectas: [
"Procedente si existen más de tres testigos de la misma categoría",
"Válido si se confirma mediante correo electrónico el día siguiente"
]
},
{
enunciado: "El recibo de finiquito tiene valor liberatorio cuando:",
correcta: "Refleja la voluntad de las partes de poner fin a la relación y saldar deudas",
incorrectas: [
"Se firma en presencia de un agente de la policía nacional o local",
"Incluye una cláusula de renuncia a todos los derechos fundamentales"
]
},
{
enunciado: "La prescripción de las faltas muy graves a efectos de despido se produce a los:",
correcta: "60 días desde que la empresa tuvo conocimiento de su comisión",
incorrectas: [
"10 días naturales desde que se cometió la infracción técnica",
"Dos años independientemente de cuándo se detectara la falta"
]
},
{
enunciado: "El empresario puede despedir disciplinariamente por ofensas verbales o físicas a:",
correcta: "El empresario, los compañeros o familiares que convivan con ellos",
incorrectas: [
"Cualquier competidor del sector de análisis clínicos de la provincia",
"Representantes políticos municipales ajenos a la actividad laboral"
]
},
{
enunciado: "En el despido improcedente, si el trabajador es representante, la opción de readmisión corresponde a:",
correcta: "El trabajador",
incorrectas: [
"El empresario",
"El juez de lo social"
]
},
{
enunciado: "El despido colectivo requiere la apertura de un periodo de consultas con:",
correcta: "Los representantes legales de los trabajadores",
incorrectas: [
"La totalidad de los acreedores bancarios de la empresa",
"El servicio público de salud de la comunidad autónoma"
]
},
{
enunciado: "La extinción del contrato por gran invalidez del trabajador conlleva:",
correcta: "La finalización del contrato por causa ajena a la voluntad de las partes",
incorrectas: [
"El despido disciplinario por ineptitud sobrevenida del técnico",
"La obligación de la empresa de contratar a un enfermero privado"
]
},
{
enunciado: "La fuerza mayor como causa de extinción debe ser constatada por:",
correcta: "La Autoridad Laboral",
incorrectas: [
"El colegio profesional de técnicos",
"La junta de accionistas del centro"
]
},
{
enunciado: "Si el trabajador no reclama contra el despido en el plazo de 20 días:",
correcta: "La acción caduca y no podrá demandar a la empresa por ese motivo",
incorrectas: [
"El plazo se amplía automáticamente hasta los seis meses",
"El despido se convierte en nulo por falta de oposición legal"
]
},
{
enunciado: "La conciliación previa ante el SMAC es:",
correcta: "Un requisito preprocesal obligatorio antes de la demanda judicial",
incorrectas: [
"Un trámite voluntario que solo se realiza si el despido es colectivo",
"Una reunión informativa sin validez legal para el cálculo de atrasos"
]
}
];