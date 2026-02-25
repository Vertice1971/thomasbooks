'use strict';
var PREGUNTAS = [
{
enunciado: "¿Cuál es la norma básica que regula la organización de los servicios de prevención en España?",
correcta: "El Real Decreto 39/1997, Reglamento de los Servicios de Prevención.",
incorrectas: [
"El Real Decreto 486/1997 sobre lugares de trabajo.",
"La Ley 14/1986 General de Sanidad."
]
},
{
enunciado: "¿Cuándo es obligatorio constituir un Servicio de Prevención Propio en una empresa?",
correcta: "Cuando la empresa tiene más de 500 trabajadores o entre 250 y 500 con actividades de especial peligrosidad.",
incorrectas: [
"Siempre que la empresa supere los 100 trabajadores fijos en plantilla.",
"Únicamente cuando lo solicite la autoridad laboral tras una inspección desfavorable."
]
},
{
enunciado: "¿Qué modalidad preventiva permite que el empresario asuma personalmente la prevención?",
correcta: "En empresas de hasta 10 trabajadores, o hasta 25 si tienen un único centro, siempre que desarrolle su actividad habitualmente en él.",
incorrectas: [
"En cualquier empresa de menos de 100 trabajadores si el empresario tiene un título universitario.",
"Solo en empresas familiares sin trabajadores por cuenta ajena contratados."
]
},
{
enunciado: "¿Cuál es el órgano paritario y colegiado de participación destinado a la consulta regular sobre prevención de riesgos?",
correcta: "El Comité de Seguridad y Salud.",
incorrectas: [
"La Junta de Personal Sanitario.",
"El Servicio de Prevención Mancomunado."
]
},
{
enunciado: "¿Quiénes son los representantes de los trabajadores con funciones específicas en prevención de riesgos laborales?",
correcta: "Los Delegados de Prevención.",
incorrectas: [
"Los Inspectores de Trabajo en excedencia.",
"Los enlaces sindicales de la sección administrativa."
]
},
{
enunciado: "¿Qué constituye una infracción muy grave por parte del empresario en materia preventiva?",
correcta: "No paralizar los trabajos cuando exista un riesgo grave e inminente para los trabajadores.",
incorrectas: [
"No disponer de un botiquín de primeros auxilios actualizado en cada planta.",
"La falta de limpieza y orden en los pasillos de las oficinas centrales."
]
},
{
enunciado: "¿Qué caracteriza a un Servicio de Prevención Mancomunado?",
correcta: "Es un servicio compartido por empresas de un mismo sector o que desarrollan actividades en un mismo edificio o polígono.",
incorrectas: [
"Es una entidad pública dependiente del Instituto Nacional de Seguridad y Salud en el Trabajo.",
"Es una mutua de accidentes que asume la vigilancia de la salud de forma gratuita."
]
},
{
enunciado: "¿Qué capacidad de decisión tiene el Comité de Seguridad y Salud?",
correcta: "Es un órgano de consulta y participación, no tiene poder ejecutivo directo sobre la gestión de la empresa.",
incorrectas: [
"Tiene potestad sancionadora inmediata sobre los trabajadores que incumplen las normas.",
"Sus actas tienen rango de ley orgánica dentro del ámbito sectorial sanitario."
]
},
{
enunciado: "La responsabilidad penal del empresario en materia de prevención requiere que:",
correcta: "Se ponga en peligro grave la vida o salud del trabajador por infracción de las normas de seguridad.",
incorrectas: [
"Se produzca un accidente mortal de forma inevitable por fuerza mayor.",
"El trabajador haya firmado una renuncia previa a sus derechos preventivos."
]
},
{
enunciado: "¿A partir de cuántos trabajadores es obligatoria la constitución del Comité de Seguridad y Salud?",
correcta: "A partir de 50 trabajadores.",
incorrectas: [
"A partir de 10 trabajadores.",
"A partir de 100 trabajadores."
]
},
{
enunciado: "¿Qué obligación técnica tiene el Servicio de Prevención Ajeno respecto a la empresa?",
correcta: "Asesorar y asistir al empresario en la evaluación de riesgos y planificación preventiva.",
incorrectas: [
"Asumir la responsabilidad civil subsidiaria en caso de negligencia del empresario.",
"Sustituir al empresario en la firma de los contratos de trabajo del personal."
]
},
{
enunciado: "El recargo de las prestaciones económicas de la Seguridad Social por falta de medidas de seguridad oscila entre:",
correcta: "El 30% y el 50% de la cuantía de la prestación.",
incorrectas: [
"El 10% y el 20% del salario base del trabajador accidentado.",
"El 60% y el 80% de la facturación anual de la empresa."
]
},
{
enunciado: "¿Qué derecho tienen los trabajadores ante un riesgo grave e inminente?",
correcta: "Derecho a interrumpir su actividad y, si fuera necesario, abandonar el lugar de trabajo.",
incorrectas: [
"Derecho a exigir una indemnización inmediata en efectivo antes de reanudar la tarea.",
"Derecho a sancionar a los mandos intermedios sin intervención de la dirección."
]
},
{
enunciado: "¿Quién designa a los Delegados de Prevención?",
correcta: "Son elegidos por y entre los representantes del personal (Delegados de Personal o miembros del Comité de Empresa).",
incorrectas: [
"Son designados directamente por el empresario entre el personal de confianza.",
"Son seleccionados por el Ministerio de Sanidad mediante concurso-oposición."
]
},
{
enunciado: "La responsabilidad administrativa en prevención de riesgos laborales se sustancia mediante:",
correcta: "Actas de infracción de la Inspección de Trabajo y Seguridad Social.",
incorrectas: [
"Querellas criminales ante el Tribunal Supremo.",
"Reclamaciones previas ante la mutua colaboradora."
]
},
{
enunciado: "¿Qué es un 'recurso preventivo'?",
correcta: "Uno o varios trabajadores designados para vigilar el cumplimiento de las medidas preventivas en situaciones de especial riesgo.",
incorrectas: [
"Un fondo económico reservado para el pago de multas administrativas.",
"Un dispositivo electrónico de alarma conectado con el 112."
]
},
{
enunciado: "¿Cuál es una obligación del trabajador según el artículo 29 de la LPRL?",
correcta: "Cooperar con el empresario para que este pueda garantizar unas condiciones de trabajo seguras.",
incorrectas: [
"Elaborar por escrito el plan de prevención del servicio médico.",
"Contratar su propio seguro de vida para cubrir accidentes profesionales."
]
},
{
enunciado: "¿Qué sucede si una empresa no realiza la auditoría del sistema de prevención cuando es legalmente obligatorio?",
correcta: "Incurre en una infracción grave que puede ser sancionada por la autoridad laboral.",
incorrectas: [
"La empresa pierde automáticamente su licencia de apertura de forma definitiva.",
"El empresario debe ser encarcelado de forma preventiva durante el proceso de inspección."
]
},
{
enunciado: "Los Servicios de Prevención Ajenos deben estar acreditados por:",
correcta: "La autoridad laboral competente.",
incorrectas: [
"La Cámara de Comercio de la provincia correspondiente.",
"La asociación de consumidores más representativa."
]
},
{
enunciado: "¿Qué funciones tienen los servicios de prevención en relación con la vigilancia de la salud?",
correcta: "Deben contar con una sección sanitaria que realice los reconocimientos médicos específicos.",
incorrectas: [
"Deben realizar diagnósticos de enfermedades comunes no relacionadas con el trabajo.",
"Deben recetar fármacos a los familiares de los trabajadores afectados."
]
},
{
enunciado: "¿Quién preside las reuniones del Comité de Seguridad y Salud?",
correcta: "El empresario o persona en quien delegue.",
incorrectas: [
"El delegado de prevención con mayor antigüedad.",
"El técnico externo del servicio de prevención ajeno."
]
},
{
enunciado: "La responsabilidad civil en prevención de riesgos laborales busca:",
correcta: "La reparación económica de los daños y perjuicios causados al trabajador.",
incorrectas: [
"El castigo ejemplarizante con penas de privación de libertad.",
"La inhabilitación profesional de los técnicos de prevención intervinientes."
]
},
{
enunciado: "¿Qué debe hacer un trabajador si detecta que un equipo de seguridad está defectuoso?",
correcta: "Informar de inmediato a su superior jerárquico directo y a los trabajadores designados.",
incorrectas: [
"Intentar repararlo por su cuenta sin herramientas específicas.",
"Ignorar el defecto y continuar trabajando para no retrasar la producción."
]
},
{
enunciado: "¿A quién corresponde la vigilancia y control del cumplimiento de la normativa laboral?",
correcta: "A la Inspección de Trabajo y Seguridad Social.",
incorrectas: [
"Al departamento de contabilidad de la empresa.",
"A los servicios de seguridad privada contratados por el centro."
]
},
{
enunciado: "¿Cuál es la función principal de los trabajadores designados?",
correcta: "Desarrollar actividades preventivas en apoyo al empresario cuando no se recurre a un servicio externo total.",
incorrectas: [
"Realizar las autopsias en caso de accidente mortal en el centro sanitario.",
"Gestionar las nóminas y las altas en la Seguridad Social."
]
},
{
enunciado: "El Plan de Prevención de Riesgos Laborales debe incluir:",
correcta: "La estructura organizativa, las responsabilidades y los procesos de la empresa en materia preventiva.",
incorrectas: [
"El balance de situación y la cuenta de pérdidas y ganancias del ejercicio anterior.",
"La biografía detallada de los fundadores de la sociedad mercantil."
]
},
{
enunciado: "¿Qué se entiende por 'principio de suficiencia' en los servicios de prevención?",
correcta: "Contar con los medios humanos y materiales necesarios para cubrir los riesgos de la empresa.",
incorrectas: [
"Tener el presupuesto justo para cumplir los mínimos legales sin excederse.",
"Contratar solo a personal que tenga la titulación de medicina de familia."
]
},
{
enunciado: "¿Cuál es la frecuencia mínima de las reuniones del Comité de Seguridad y Salud?",
correcta: "Trimestralmente, o cuando lo solicite alguna de las representaciones.",
incorrectas: [
"Mensualmente de forma obligatoria e improrrogable.",
"Una vez al año coincidiendo con el cierre del ejercicio fiscal."
]
},
{
enunciado: "¿Quién debe abonar el recargo de prestaciones por falta de medidas de seguridad?",
correcta: "El empresario infractor, sin que pueda ser objeto de seguro.",
incorrectas: [
"La Mutua Colaboradora con la Seguridad Social.",
"El propio trabajador a través de una deducción en su pensión."
]
},
{
enunciado: "¿Qué derecho tienen los delegados de prevención respecto a la información médica?",
correcta: "Derecho a conocer las conclusiones de la vigilancia de la salud sin acceso a datos confidenciales sin consentimiento.",
incorrectas: [
"Acceso total a las historias clínicas completas de todos los empleados.",
"Derecho a decidir qué tratamiento médico debe seguir un accidentado."
]
},
{
enunciado: "¿Qué tipo de infracción es no realizar los reconocimientos médicos obligatorios?",
correcta: "Infracción grave.",
incorrectas: [
"Infracción leve.",
"Delito contra la salud pública de carácter administrativo."
]
},
{
enunciado: "¿Qué es la 'Memoria Anual' del Servicio de Prevención?",
correcta: "Un documento que recoge las actividades preventivas realizadas durante el año.",
incorrectas: [
"Un informe secreto para uso exclusivo del consejo de administración.",
"El listado de compras de material de oficina del departamento de salud."
]
},
{
enunciado: "La coordinación de actividades empresariales es obligatoria cuando:",
correcta: "Trabajadores de dos o más empresas coinciden en un mismo centro de trabajo.",
incorrectas: [
"Las empresas pertenecen al mismo dueño pero están en provincias distintas.",
"El empresario decide contratar a familiares de sus empleados actuales."
]
},
{
enunciado: "¿Qué formación mínima debe tener el personal que asume las funciones de nivel básico en prevención?",
correcta: "Un curso con el contenido y duración establecidos en el Anexo IV del RD 39/1997.",
incorrectas: [
"Un título de Doctor en Medicina y Cirugía.",
"No se requiere formación si el trabajador tiene más de 10 años de experiencia."
]
},
{
enunciado: "El empresario debe consultar a los trabajadores con la debida antelación sobre:",
correcta: "La planificación y organización de la formación en materia preventiva.",
incorrectas: [
"El cambio de logotipo o imagen corporativa de la entidad.",
"La selección de los proveedores de servicios de limpieza de zonas comunes."
]
},
{
enunciado: "En un centro sanitario, el Director Gerente es responsable de:",
correcta: "Garantizar la integración de la prevención en todos los niveles de gestión del centro.",
incorrectas: [
"Realizar personalmente las mediciones de ruido en las salas de espera.",
"Limpiar las áreas quirúrgicas después de cada intervención."
]
},
{
enunciado: "¿Qué documento debe estar a disposición de la autoridad sanitaria y laboral permanentemente?",
correcta: "La evaluación de riesgos y el plan de actividad preventiva.",
incorrectas: [
"El libro de visitas de clientes y proveedores externos.",
"La relación de vacaciones de los mandos intermedios del centro."
]
},
{
enunciado: "¿Qué responsabilidad recae sobre el fabricante de una máquina defectuosa que causa un accidente?",
correcta: "Responsabilidad civil de producto, que puede derivar en responsabilidad solidaria.",
incorrectas: [
"Ninguna, la responsabilidad es siempre exclusivamente del empresario que la compra.",
"Responsabilidad política ante el Parlamento Europeo por falta de ética."
]
},
{
enunciado: "Los técnicos de prevención de nivel superior deben poseer:",
correcta: "Una titulación universitaria oficial y formación especializada de postgrado.",
incorrectas: [
"Un certificado de asistencia a un seminario de fin de semana.",
"El carnet de conducir de vehículos pesados y mercancías peligrosas."
]
},
{
enunciado: "¿Qué principio rige la relación entre la LPRL y las normas sancionadoras?",
correcta: "El principio de 'non bis in idem' (no sancionar dos veces por el mismo hecho en el mismo orden).",
incorrectas: [
"El principio de presunción de culpabilidad del empresario por defecto.",
"El principio de gratuidad absoluta de todas las medidas de seguridad colectiva."
]
}
];