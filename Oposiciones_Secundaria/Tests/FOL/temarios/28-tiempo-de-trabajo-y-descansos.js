'use strict';

var PREGUNTAS = [
{
enunciado: "La duración máxima de la jornada ordinaria de trabajo tiene un promedio semanal de:",
correcta: "40 horas de trabajo efectivo en cómputo anual",
incorrectas: [
"35 horas de trabajo efectivo para técnicos de laboratorio",
"48 horas de trabajo efectivo sumando las horas complementarias"
]
},
{
enunciado: "Entre el final de una jornada y el comienzo de la siguiente debe mediar un descanso mínimo de:",
correcta: "12 horas",
incorrectas: [
"8 horas",
"10 horas"
]
},
{
enunciado: "¿Cuál es el límite máximo de horas extraordinarias que puede realizar un trabajador al año?",
correcta: "80 horas",
incorrectas: [
"100 horas",
"50 horas"
]
},
{
enunciado: "Cuando la jornada diaria continuada exceda de seis horas, el período de descanso debe ser de al menos:",
correcta: "15 minutos",
incorrectas: [
"30 minutos",
"10 minutos"
]
},
{
enunciado: "El descanso semanal mínimo para los trabajadores mayores de edad es de:",
correcta: "Un día y medio ininterrumpido",
incorrectas: [
"Dos días completos durante el fin de semana",
"24 horas consecutivas coincidiendo con el domingo"
]
},
{
enunciado: "Las horas extraordinarias se compensarán, salvo pacto en contrario, mediante:",
correcta: "Descanso dentro de los cuatro meses siguientes a su realización",
incorrectas: [
"Un pago adicional del 50% sobre el valor de la hora ordinaria",
"Días de vacaciones adicionales al finalizar el año natural"
]
},
{
enunciado: "La duración de las vacaciones anuales no podrá ser inferior a:",
correcta: "30 días naturales",
incorrectas: [
"22 días laborables",
"25 días naturales"
]
},
{
enunciado: "El trabajador tiene derecho a un permiso retribuido por matrimonio de:",
correcta: "15 días naturales",
incorrectas: [
"10 días hábiles",
"20 días naturales"
]
},
{
enunciado: "Se considera trabajo nocturno el realizado entre las:",
correcta: "10 de la noche y las 6 de la mañana",
incorrectas: [
"11 de la noche y las 7 de la mañana",
"8 de la tarde y las 8 de la mañana"
]
},
{
enunciado: "Por fallecimiento, accidente o enfermedad grave de parientes hasta segundo grado, el permiso es de:",
correcta: "5 días",
incorrectas: [
"3 días",
"10 días"
]
},
{
enunciado: "¿Con cuánta antelación mínima debe conocer el trabajador el calendario de vacaciones?",
correcta: "Dos meses antes del comienzo del disfrute",
incorrectas: [
"Un mes antes de la fecha solicitada",
"Quince días antes del inicio del período"
]
},
{
enunciado: "En el caso de menores de 18 años, el descanso tras jornada superior a cuatro horas y media será de:",
correcta: "30 minutos",
incorrectas: [
"15 minutos",
"45 minutos"
]
},
{
enunciado: "Las fiestas laborales, que tendrán carácter retribuido y no recuperable, no podrán exceder de:",
correcta: "14 al año",
incorrectas: [
"12 al año",
"10 al año"
]
},
{
enunciado: "El descanso semanal para los menores de 18 años será de:",
correcta: "Dos días ininterrumpidos",
incorrectas: [
"Un día y medio",
"Tres días consecutivos"
]
},
{
enunciado: "Si las vacaciones coinciden con una incapacidad temporal por embarazo o parto:",
correcta: "Se tiene derecho a disfrutarlas en fecha distinta al finalizar la suspensión",
incorrectas: [
"Se pierden definitivamente al haber transcurrido el año natural",
"Se compensan económicamente en la nómina del mes siguiente"
]
},
{
enunciado: "La jornada de los trabajadores nocturnos no podrá exceder de:",
correcta: "8 horas diarias de promedio en un período de quince días",
incorrectas: [
"6 horas diarias para evitar la fatiga técnica",
"10 horas diarias si existe acuerdo con el Comité de Empresa"
]
},
{
enunciado: "El permiso por traslado de domicilio habitual es de:",
correcta: "Un día",
incorrectas: [
"Dos días",
"Tres días"
]
},
{
enunciado: "Las horas extraordinarias realizadas para reparar siniestros (fuerza mayor):",
correcta: "No computan para el límite máximo de 80 horas anuales",
incorrectas: [
"Son voluntarias para el técnico de laboratorio",
"Se pagan obligatoriamente con un recargo del 75%"
]
},
{
enunciado: "El tiempo de trabajo se computará de modo que el trabajador se encuentre en:",
correcta: "Su puesto de trabajo tanto al comienzo como al final de la jornada",
incorrectas: [
"El recinto de la empresa tras haber fichado en la entrada principal",
"El vestuario realizando el cambio de ropa técnica de laboratorio"
]
},
{
enunciado: "El permiso para la realización de exámenes prenatales y técnicas de preparación al parto es:",
correcta: "Por el tiempo indispensable",
incorrectas: [
"De tres horas diarias",
"De un día completo por cada prueba"
]
},
{
enunciado: "El trabajador tiene derecho a adaptar la duración y distribución de la jornada para:",
correcta: "Hacer efectivo su derecho a la conciliación de la vida familiar y laboral",
incorrectas: [
"Poder cursar estudios universitarios ajenos a la actividad de la empresa",
"Realizar actividades de voluntariado en centros de salud extranjeros"
]
},
{
enunciado: "La distribución irregular de la jornada a lo largo del año puede afectar al:",
correcta: "10% de la jornada de trabajo",
incorrectas: [
"25% de la jornada de trabajo",
"5% de la jornada de trabajo"
]
},
{
enunciado: "En la jornada partida, el tiempo de interrupción para la comida se considera:",
correcta: "Tiempo de descanso y no de trabajo efectivo",
incorrectas: [
"Tiempo de trabajo efectivo si el trabajador permanece en el centro",
"Horas extraordinarias estructurales sujetas a cotización especial"
]
},
{
enunciado: "El registro diario de jornada debe conservarse por la empresa durante:",
correcta: "Cuatro años",
incorrectas: [
"Cinco años",
"Dos años"
]
},
{
enunciado: "Para el cumplimiento de un deber inexcusable de carácter público y personal, el permiso es:",
correcta: "Por el tiempo indispensable",
incorrectas: [
"De un máximo de tres días",
"De una semana natural"
]
},
{
enunciado: "¿Quién fija el periodo de disfrute de las vacaciones en caso de desacuerdo?",
correcta: "La Jurisdicción Social a través de un procedimiento sumario y preferente",
incorrectas: [
"El empresario de forma unilateral atendiendo a la producción",
"El delegado de personal mediante sorteo público en el centro"
]
},
{
enunciado: "Los trabajadores nocturnos tienen prohibida la realización de:",
correcta: "Horas extraordinarias",
incorrectas: [
"Turnos rotatorios",
"Descansos de 15 minutos"
]
},
{
enunciado: "El permiso por lactancia de un hijo menor de nueve meses permite:",
correcta: "Una hora de ausencia del trabajo, que puede dividirse en dos fracciones",
incorrectas: [
"La reducción de la jornada en dos horas con el mismo salario",
"Un mes de excedencia retribuida tras la baja por maternidad"
]
},
{
enunciado: "La fijación del horario de trabajo es competencia de:",
correcta: "El empresario, dentro del marco legal y convencional",
incorrectas: [
"La Inspección de Trabajo mediante resolución motivada",
"El Ayuntamiento donde se ubique el laboratorio clínico"
]
},
{
enunciado: "El permiso por nacimiento de gran prematuro que deba permanecer hospitalizado permite:",
correcta: "Ausentarse del trabajo durante dos horas retribuidas",
incorrectas: [
"Una licencia de 30 días naturales sin derecho a sueldo",
"El teletrabajo obligatorio hasta el alta médica del neonato"
]
},
{
enunciado: "Las vacaciones anuales no son sustituibles por compensación económica salvo:",
correcta: "Extinción del contrato que impida el disfrute de las mismas",
incorrectas: [
"Acuerdo mutuo por escrito para aumentar la liquidez del técnico",
"Necesidades urgentes de procesamiento de muestras en el laboratorio"
]
},
{
enunciado: "El derecho a la formación permite al trabajador el disfrute de los permisos necesarios para:",
correcta: "Concurrir a exámenes cuando curse con regularidad estudios para un título",
incorrectas: [
"Asistir a conferencias de divulgación general durante la jornada",
"Preparar oposiciones al sector público sin límite de horas"
]
},
{
enunciado: "La consideración de trabajador nocturno requiere realizar en periodo nocturno una parte de:",
correcta: "Al menos tres horas de su jornada diaria",
incorrectas: [
"Al menos una hora de su jornada diaria",
"La totalidad de su jornada semanal"
]
},
{
enunciado: "En el cómputo de las 80 horas extraordinarias anuales no se incluyen:",
correcta: "Las que hayan sido compensadas mediante descanso en los cuatro meses siguientes",
incorrectas: [
"Las realizadas en horario de tarde por técnicos especialistas",
"Las que superen el salario base establecido en el convenio"
]
},
{
enunciado: "El trabajador debe preavisar y justificar el permiso por:",
correcta: "Cualquiera de las causas legalmente previstas (matrimonio, deber público, etc.)",
incorrectas: [
"Asistir a la fiesta de cumpleaños de un familiar de primer grado",
"Realizar compras de material técnico para uso estrictamente personal"
]
},
{
enunciado: "La jornada reducida por guarda legal de un menor de doce años implica:",
correcta: "Una disminución proporcional del salario",
incorrectas: [
"El mantenimiento íntegro de la retribución mensual",
"El cobro de un plus de ayuda familiar por parte del Estado"
]
},
{
enunciado: "Se entiende por horario de trabajo:",
correcta: "La distribución de la jornada en periodos de trabajo y descanso",
incorrectas: [
"El número total de horas que el técnico trabaja al mes",
"La suma de las horas ordinarias y las horas de formación"
]
},
{
enunciado: "El período de vacaciones debe ser común para toda la plantilla si:",
correcta: "Así se pacta en el convenio colectivo o el calendario de la empresa",
incorrectas: [
"Lo solicita al menos el 10% de los trabajadores eventuales",
"La empresa se dedica al análisis de muestras biológicas urgentes"
]
},
{
enunciado: "El incumplimiento del descanso semanal por parte del empresario se considera:",
correcta: "Infracción grave en materia laboral",
incorrectas: [
"Falta leve subsanable con una amonestación verbal",
"Delito penal tipificado en el Código de Comercio"
]
},
{
enunciado: "La duración de la jornada de trabajo será la pactada en:",
correcta: "Los convenios colectivos o contratos de trabajo",
incorrectas: [
"Las resoluciones anuales de la Tesorería de la Seguridad Social",
"Los estatutos de los colegios profesionales de técnicos sanitarios"
]
}
];
