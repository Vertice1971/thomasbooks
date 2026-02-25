'use strict';

var PREGUNTAS = [
{
enunciado: "El contrato de formación en alternancia tiene como límite de edad máximo:",
correcta: "30 años cuando se vincula a certificados de profesionalidad de nivel 1 y 2",
incorrectas: [
"18 años, coincidiendo con la mayoría de edad legal en España",
"No existe límite de edad para ninguna modalidad de formación técnica"
]
},
{
enunciado: "La duración del contrato formativo para la obtención de la práctica profesional debe ser:",
correcta: "Entre un mínimo de seis meses y un máximo de un año",
incorrectas: [
"De al menos dos años para garantizar la especialización técnica",
"Exactamente de tres meses improrrogables según el Estatuto de los Trabajadores"
]
},
{
enunciado: "En el contrato a tiempo parcial, la realización de horas extraordinarias está:",
correcta: "Prohibida, salvo para prevenir o reparar siniestros y otros daños extraordinarios",
incorrectas: [
"Permitida siempre que no superen el 50% de la jornada pactada",
"Autorizada únicamente si se compensan con descansos en la semana siguiente"
]
},
{
enunciado: "El contrato de relevo se concierta para sustituir la jornada dejada vacante por:",
correcta: "Un trabajador que se jubila parcialmente",
incorrectas: [
"Un técnico que se encuentra en situación de excedencia por cuidado de hijos",
"Un empleado que ha sido despedido por causas objetivas de producción"
]
},
{
enunciado: "Las Empresas de Trabajo Temporal (ETT) se dedican fundamentalmente a:",
correcta: "Poner a disposición de otra empresa usuaria, con carácter temporal, trabajadores contratados por ella",
incorrectas: [
"Gestionar las prestaciones por desempleo de los trabajadores despedidos",
"Actuar como mediadores en la negociación de convenios colectivos sectoriales"
]
},
{
enunciado: "En la relación con una ETT, la facultad sancionadora sobre el trabajador corresponde a:",
correcta: "La Empresa de Trabajo Temporal",
incorrectas: [
"La empresa usuaria donde el trabajador presta sus servicios efectivamente",
"La Inspección de Trabajo exclusivamente tras denuncia del usuario"
]
},
{
enunciado: "El trabajo de menores de 18 años tiene prohibida la realización de:",
correcta: "Horas extraordinarias, trabajo nocturno y actividades declaradas insalubres o peligrosas",
incorrectas: [
"Cualquier tipo de actividad que implique el uso de pantallas de visualización",
"Contratos de duración determinada superiores a tres meses de vigencia"
]
},
{
enunciado: "Para que un extranjero no comunitario pueda trabajar legalmente en España requiere:",
correcta: "Autorización administrativa previa para residir y trabajar",
incorrectas: [
"La nacionalidad de origen de un país miembro de la Organización de Estados Americanos",
"Tener un familiar directo que trabaje en la misma empresa de destino"
]
},
{
enunciado: "Las Agencias de Colocación sin fines lucrativos tienen como objetivo:",
correcta: "Ayudar a las personas a encontrar empleo y a los empleadores a contratar trabajadores",
incorrectas: [
"Garantizar el pago de los salarios en caso de insolvencia del empresario",
"Sustituir a los sindicatos en la defensa de los derechos de los técnicos"
]
},
{
enunciado: "¿Qué retribución mínima establece la ley para el contrato de práctica profesional?",
correcta: "La fijada en convenio para el puesto o, en su defecto, la del grupo profesional",
incorrectas: [
"El 50% del salario mínimo interprofesional durante toda la vigencia",
"Una cantidad fija estipulada por la empresa de forma discrecional"
]
},
{
enunciado: "La 'puesta a disposición' es el contrato que vincula a:",
correcta: "La Empresa de Trabajo Temporal con la Empresa Usuaria",
incorrectas: [
"El trabajador con el Servicio Público de Empleo Estatal (SEPE)",
"La Seguridad Social con los centros sanitarios privados concertados"
]
},
{
enunciado: "El contrato de formación en alternancia requiere que el tiempo de trabajo efectivo no supere:",
correcta: "El 65% el primer año y el 85% el segundo de la jornada máxima legal",
incorrectas: [
"El 95% de la jornada para permitir la máxima productividad del técnico",
"El 20% de la jornada diaria para centrarse casi exclusivamente en la teoría"
]
},
{
enunciado: "Respecto a la maternidad, el despido de una trabajadora embarazada se considera:",
correcta: "Nulo, salvo que se acredite una causa ajena al embarazo",
incorrectas: [
"Procedente siempre que la empresa tenga menos de cincuenta empleados",
"Improcedente con una indemnización reducida por falta de antigüedad"
]
},
{
enunciado: "En las ETT, el trabajador tiene derecho a percibir como mínimo:",
correcta: "La retribución total establecida para el puesto en la empresa usuaria",
incorrectas: [
"El salario mínimo interprofesional más un complemento de transporte",
"La mitad de lo que cobre un trabajador fijo de la empresa de origen"
]
},
{
enunciado: "Las empresas usuarias no pueden celebrar contratos de puesta a disposición para:",
correcta: "Sustituir a trabajadores en huelga",
incorrectas: [
"Cubrir picos de producción previstos en el calendario anual",
"Sustituir a técnicos que están realizando cursos de formación"
]
},
{
enunciado: "El principio de igualdad para los trabajadores extranjeros implica:",
correcta: "Mismos derechos y deberes laborales que los trabajadores españoles",
incorrectas: [
"La exención de pagar las cuotas correspondientes a la Seguridad Social",
"El derecho a elegir el horario de trabajo por encima de las necesidades del centro"
]
},
{
enunciado: "Un contrato a tiempo parcial se entiende por tiempo indefinido cuando:",
correcta: "Se concierta para realizar trabajos fijos y periódicos dentro del volumen de actividad",
incorrectas: [
"El trabajador realiza más de diez horas complementarias a la semana",
"La empresa no entrega el recibo de salarios en el tiempo legalmente previsto"
]
},
{
enunciado: "La autorización para trabajar a un menor de 16 años en espectáculos debe ser:",
correcta: "Concedida por la autoridad laboral y para actos determinados",
incorrectas: [
"Otorgada verbalmente por el director del centro de enseñanza secundaria",
"Solicitada por el propio menor sin intervención de sus representantes legales"
]
},
{
enunciado: "En el contrato de formación, el tutor designado por la empresa debe:",
correcta: "Contar con la formación o experiencia profesional adecuada para el seguimiento",
incorrectas: [
"Ser obligatoriamente el jefe del departamento de Recursos Humanos",
"Poseer la nacionalidad española y más de diez años de antigüedad fija"
]
},
{
enunciado: "La duración máxima de un contrato por circunstancias de la producción es de:",
correcta: "Seis meses, o un año si así lo establece el convenio del sector",
incorrectas: [
"Tres años para facilitar la estabilidad del personal técnico contratado",
"Quince días naturales para evitar la consolidación de derechos laborales"
]
},
{
enunciado: "El contrato de sustitución puede iniciarse antes de que se produzca la ausencia:",
correcta: "Sí, por un máximo de 15 días para garantizar la transmisión de funciones",
incorrectas: [
"No, el contrato debe empezar exactamente el mismo día que se causa la baja",
"Sí, pero solo si el trabajador sustituido presta su consentimiento por escrito"
]
},
{
enunciado: "Los trabajadores contratados por ETT tienen derecho a utilizar:",
correcta: "Las instalaciones comunes y servicios de la empresa usuaria (comedor, transporte)",
incorrectas: [
"El despacho de la dirección general para sus reclamaciones individuales",
"Las cuentas bancarias de la empresa usuaria para el cobro de dietas"
]
},
{
enunciado: "El pacto de horas complementarias en tiempo parcial requiere:",
correcta: "Que la jornada contratada sea de al menos 10 horas semanales en cómputo anual",
incorrectas: [
"Que el trabajador tenga menos de 25 años en el momento de la firma",
"Que la empresa presente beneficios en el ejercicio contable anterior"
]
},
{
enunciado: "La formación teórica en el contrato de formación en alternancia:",
correcta: "Puede impartirse en el centro educativo o en la propia empresa si está acreditada",
incorrectas: [
"Debe realizarse siempre fuera de la jornada laboral y a cargo del trabajador",
"Es voluntaria y no influye en la validez del título técnico final"
]
},
{
enunciado: "¿Puede una ETT realizar contratos para la formación en alternancia?",
correcta: "Sí, para poner a disposición del usuario trabajadores con ese perfil",
incorrectas: [
"No, la ley reserva esa modalidad exclusivamente a las empresas ordinarias",
"Solo si la empresa usuaria pertenece al sector de la construcción"
]
},
{
enunciado: "El descanso mínimo de los menores de 18 años entre jornadas es de:",
correcta: "12 horas",
incorrectas: [
"8 horas",
"24 horas"
]
},
{
enunciado: "Las agencias de colocación deben garantizar en sus procesos:",
correcta: "La gratuidad para los trabajadores por la prestación de servicios",
incorrectas: [
"El cobro de una comisión del 10% del primer salario del técnico",
"La exclusión de candidatos extranjeros para priorizar a los nacionales"
]
},
{
enunciado: "La empresa usuaria responde de forma subsidiaria de las obligaciones:",
correcta: "Salariales y de Seguridad Social contraídas por la ETT con el trabajador",
incorrectas: [
"Personales del trabajador ante la justicia penal por delitos privados",
"De formación académica del trabajador ante la universidad de origen"
]
},
{
enunciado: "El contrato formativo para la práctica profesional se puede celebrar:",
correcta: "Dentro de los tres años siguientes a la terminación de los estudios",
incorrectas: [
"Únicamente durante los primeros tres meses tras obtener la titulación",
"En cualquier momento de la vida laboral sin límite temporal desde el título"
]
},
{
enunciado: "Un trabajador extranjero con permiso de trabajo temporal que pierde su empleo:",
correcta: "Mantiene la vigencia de su autorización hasta que esta expire",
incorrectas: [
"Debe abandonar el país de forma inmediata en un plazo de 48 horas",
"Pierde el derecho a percibir la prestación por desempleo acumulada"
]
},
{
enunciado: "En el contrato a tiempo parcial, el registro de la jornada debe ser:",
correcta: "Diario, incluyendo el horario de inicio y fin de la prestación",
incorrectas: [
"Mensual, mediante una declaración jurada del empresario sin firmas",
"Opcional, si el trabajador tiene confianza plena en la dirección técnica"
]
},
{
enunciado: "La duración del descanso semanal para menores de 18 años es de:",
correcta: "Dos días ininterrumpidos",
incorrectas: [
"Un día y medio",
"Doce horas"
]
},
{
enunciado: "Se considera fraude en la contratación temporal cuando:",
correcta: "No se especifica con claridad la causa que justifica la temporalidad",
incorrectas: [
"El salario es superior al que marca el convenio colectivo sectorial",
"El contrato se redacta en un folio de papel que no es oficial del Estado"
]
},
{
enunciado: "Las ETT tienen prohibido ceder trabajadores para:",
correcta: "Trabajos de especial peligrosidad para la seguridad y salud",
incorrectas: [
"Puestos de auxiliar administrativo en laboratorios privados",
"Tareas de limpieza en centros sanitarios durante el horario nocturno"
]
},
{
enunciado: "La 'cuota de reserva' para trabajadores con discapacidad obliga a empresas de más de 50 empleados a contratar un:",
correcta: "2% de la plantilla",
incorrectas: [
"10% de la plantilla",
"5% de la plantilla"
]
},
{
enunciado: "El contrato de formación en alternancia puede tener una duración de:",
correcta: "Hasta dos años",
incorrectas: [
"Cinco años",
"Diez años"
]
},
{
enunciado: "Los trabajadores de las ETT tienen derecho a que la empresa usuaria les informe sobre:",
correcta: "Las vacantes de puestos fijos que existan en la organización",
incorrectas: [
"El salario exacto de los miembros del consejo de administración",
"La vida privada y antecedentes de los otros técnicos del equipo"
]
},
{
enunciado: "El contrato para la práctica profesional no puede realizarse:",
correcta: "Si el trabajador ya ha desempeñado esa actividad en la misma empresa por tiempo superior a seis meses",
incorrectas: [
"Si el trabajador tiene una edad superior a los 25 años cumplidos",
"Si el título obtenido es de una universidad privada no concertada"
]
},
{
enunciado: "La maternidad no puede ser causa de:",
correcta: "Interrupción de los plazos de duración de los contratos formativos",
incorrectas: [
"Extensión del periodo de vacaciones anuales reglamentarias",
"Aumento del salario base establecido en el convenio colectivo"
]
},
{
enunciado: "Las agencias de colocación colaboran con el SEPE mediante:",
correcta: "Convenios de colaboración o contratos de gestión",
incorrectas: [
"La entrega del 50% de sus beneficios anuales al erario público",
"La obligación de contratar a todo aquel que solicite un empleo"
]
}
];