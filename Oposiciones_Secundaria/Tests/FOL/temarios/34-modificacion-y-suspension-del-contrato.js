'use strict';

var PREGUNTAS = [
{
enunciado: "La movilidad funcional ascendente para realizar funciones de un grupo superior por un periodo superior a seis meses en un año da derecho a:",
correcta: "Solicitar el ascenso o la cobertura de la vacante correspondiente",
incorrectas: [
"Percibir una indemnización a tanto alzado por el esfuerzo técnico realizado",
"La consolidación automática del puesto de dirección sin proceso selectivo"
]
},
{
enunciado: "Se considera movilidad geográfica el traslado de trabajadores que exija:",
correcta: "Un cambio de residencia habitual del trabajador",
incorrectas: [
"Un desplazamiento diario a un centro situado a más de diez kilómetros",
"La utilización de medios de transporte públicos financiados por la empresa"
]
},
{
enunciado: "En el traslado individual, el trabajador debe ser notificado con una antelación mínima de:",
correcta: "30 días a la fecha de su ejecución",
incorrectas: [
"15 días naturales mediante comunicación verbal del encargado",
"Tres meses para permitir la conciliación de la vida familiar"
]
},
{
enunciado: "Ante una decisión de traslado, el trabajador puede optar por la extinción del contrato con una indemnización de:",
correcta: "20 días de salario por año de servicio, con un máximo de 12 mensualidades",
incorrectas: [
"33 días de salario por año de servicio sin límite de cuantía máxima",
"10 días de salario por año trabajado más el finiquito de vacaciones"
]
},
{
enunciado: "La modificación sustancial de condiciones de trabajo puede afectar, entre otros, a:",
correcta: "La jornada de trabajo, el horario y el régimen de trabajo a turnos",
incorrectas: [
"La obligatoriedad de estar afiliado a un sindicato determinado",
"El derecho a la libertad de expresión técnica dentro del laboratorio"
]
},
{
enunciado: "Para que una modificación de condiciones de trabajo sea legal, la empresa debe acreditar razones:",
correcta: "Económicas, técnicas, organizativas o de producción",
incorrectas: [
"Personales del empresario relacionadas con su residencia habitual",
"Disciplinarias basadas en la falta de puntualidad reiterada del técnico"
]
},
{
enunciado: "La subrogación empresarial se produce cuando tiene lugar:",
correcta: "El cambio de titularidad de una empresa, centro de trabajo o unidad productiva autónoma",
incorrectas: [
"La contratación de un nuevo técnico para sustituir a un jubilado",
"El cambio de la marca comercial de los reactivos utilizados en análisis"
]
},
{
enunciado: "En la subrogación, el nuevo empresario queda subrogado en:",
correcta: "Los derechos y obligaciones laborales y de Seguridad Social del anterior",
incorrectas: [
"Las deudas personales y privadas que el antiguo dueño tuviera con bancos",
"La obligación de contratar a los familiares directos de la plantilla anterior"
]
},
{
enunciado: "La suspensión del contrato de trabajo se diferencia de la extinción en que:",
correcta: "Existe una interrupción temporal con reserva del puesto de trabajo",
incorrectas: [
"No se mantiene el alta en la Seguridad Social durante el periodo",
"El trabajador pierde el derecho a la antigüedad acumulada hasta la fecha"
]
},
{
enunciado: "Es causa de suspensión del contrato con reserva de puesto:",
correcta: "El nacimiento, adopción, guarda con fines de adopción o acogimiento",
incorrectas: [
"La realización de un viaje de ocio superior a quince días naturales",
"El despido disciplinario por transgresión de la buena fe contractual"
]
},
{
enunciado: "La excedencia voluntaria requiere que el trabajador tenga una antigüedad en la empresa de al menos:",
correcta: "Un año",
incorrectas: [
"Seis meses",
"Cinco años"
]
},
{
enunciado: "El trabajador en excedencia voluntaria conserva solo un derecho de:",
correcta: "Preferencial al reingreso en las vacantes de igual o similar categoría",
incorrectas: [
"Reserva absoluta del mismo puesto de trabajo que ocupaba anteriormente",
"Percepción del 50% del salario base durante el tiempo de su ausencia"
]
},
{
enunciado: "La movilidad funcional dentro del mismo grupo profesional es:",
correcta: "Libre para el empresario, respetando la titulación y la dignidad",
incorrectas: [
"Prohibida si el trabajador no presta su consentimiento por escrito",
"Limitada a un máximo de tres meses dentro de cada año natural"
]
},
{
enunciado: "El desplazamiento temporal a otra localidad requiere un preaviso no inferior a cinco días si dura más de:",
correcta: "Tres meses",
incorrectas: [
"Un mes",
"Quince días"
]
},
{
enunciado: "La suspensión del contrato por incapacidad temporal dura mientras el trabajador:",
correcta: "Reciba asistencia sanitaria y esté impedido para el trabajo",
incorrectas: [
"Mantenga una deuda pendiente con la mutua de accidentes de trabajo",
"No haya sido sustituido por un técnico de formación en alternancia"
]
},
{
enunciado: "En la movilidad funcional descendente, el trabajador conservará:",
correcta: "La retribución de origen si es superior a la del nuevo puesto",
incorrectas: [
"El derecho a elegir el horario de entrada y salida del laboratorio",
"Únicamente los complementos salariales vinculados a la peligrosidad"
]
},
{
enunciado: "La modificación sustancial de carácter colectivo requiere un periodo de consultas de no más de:",
correcta: "15 días",
incorrectas: [
"30 días",
"7 días"
]
},
{
enunciado: "La excedencia por cuidado de hijos tiene una duración máxima de:",
correcta: "Tres años",
incorrectas: [
"Un año",
"Cinco años"
]
},
{
enunciado: "Durante el primer año de excedencia por cuidado de un hijo, el trabajador tiene derecho a:",
correcta: "La reserva de su puesto de trabajo",
incorrectas: [
"El cobro íntegro del salario a cargo del Servicio Público de Empleo",
"Seguir utilizando los equipos informáticos de la empresa para uso privado"
]
},
{
enunciado: "La suspensión por ejercicio de cargo público representativo se denomina:",
correcta: "Excedencia forzosa",
incorrectas: [
"Permiso retribuido especial",
"Suspensión por causas organizativas"
]
},
{
enunciado: "El traslado colectivo es aquel que afecta a la totalidad del centro si este tiene más de:",
correcta: "Cinco trabajadores",
incorrectas: [
"Cincuenta trabajadores",
"Veinticinco trabajadores"
]
},
{
enunciado: "En caso de subrogación, cedente y cesionario responden solidariamente durante:",
correcta: "Tres años de las obligaciones laborales nacidas antes de la transmisión",
incorrectas: [
"Un año de las deudas contraídas con los proveedores de reactivos",
"Toda la vida laboral de los técnicos que permanezcan en la plantilla"
]
},
{
enunciado: "La suspensión del contrato por mutuo acuerdo de las partes es:",
correcta: "Lícita siempre que no constituya abuso de derecho",
incorrectas: [
"Nula si no interviene un delegado de personal como testigo",
"Obligatoria cuando la empresa reduce su producción un 10%"
]
},
{
enunciado: "El trabajador que impugna una modificación sustancial y el juez la declara injustificada tiene derecho a:",
correcta: "Ser repuesto en sus anteriores condiciones de trabajo",
incorrectas: [
"Una indemnización de 45 días por año y la extinción del contrato",
"Un ascenso de categoría profesional como compensación por daños"
]
},
{
enunciado: "La movilidad geográfica temporal se denomina legalmente:",
correcta: "Desplazamiento",
incorrectas: [
"Permuta",
"Excedencia técnica"
]
},
{
enunciado: "La suspensión del contrato por huelga legal implica que el trabajador:",
correcta: "No percibe salario ni cotiza a la Seguridad Social",
incorrectas: [
"Mantiene el derecho al cobro de los pluses de transporte y distancia",
"Puede ser sustituido por trabajadores de empresas de trabajo temporal"
]
},
{
enunciado: "La excedencia voluntaria para cuidar a un familiar hasta segundo grado dura un máximo de:",
correcta: "Dos años, salvo que se establezca más por convenio",
incorrectas: [
"Seis meses improrrogables",
"Diez años si el familiar reside en el extranjero"
]
},
{
enunciado: "La formación de los trabajadores en la subrogación debe ser facilitada por:",
correcta: "El nuevo empresario (cesionario)",
incorrectas: [
"El sindicato mayoritario del sector sanitario",
"El propio trabajador mediante cursos online fuera de horas"
]
},
{
enunciado: "Se considera causa de suspensión la privación de libertad del trabajador mientras:",
correcta: "No exista sentencia condenatoria firme",
incorrectas: [
"El empresario no haya contratado a un sustituto técnico",
"Dure el periodo de vacaciones no disfrutadas del año anterior"
]
},
{
enunciado: "En los desplazamientos, el trabajador tiene derecho a un permiso de 4 días laborables cada:",
correcta: "Tres meses de desplazamiento",
incorrectas: [
"Mes de estancia fuera del domicilio",
"Semana de trabajo técnico intenso"
]
},
{
enunciado: "La movilidad funcional ascendente requiere que el trabajador posea:",
correcta: "La titulación académica o profesional precisa para el puesto",
incorrectas: [
"Una carta de recomendación de los delegados de personal",
"Al menos 50 años de edad cumplidos en el momento del cambio"
]
},
{
enunciado: "La suspensión del contrato por causas económicas (ERTE) da derecho a:",
correcta: "Solicitar la prestación por desempleo si se cumplen los requisitos",
incorrectas: [
"Exigir el pago del 100% del salario base a la empresa usuaria",
"La extinción definitiva del contrato con 33 días de indemnización"
]
},
{
enunciado: "El reingreso tras una excedencia forzosa debe solicitarse dentro del:",
correcta: "Mes siguiente al cese en el cargo público o causa que la motivó",
incorrectas: [
"Año siguiente a la finalización de la suspensión laboral",
"Plazo de 24 horas desde que desaparece la causa suspensiva"
]
},
{
enunciado: "La modificación sustancial de condiciones de trabajo que afecte a la cuantía salarial:",
correcta: "No puede reducir el salario por debajo de lo establecido en convenio",
incorrectas: [
"Permite al empresario eliminar todas las pagas extraordinarias",
"Es nula si el trabajador tiene una antigüedad superior a 20 años"
]
},
{
enunciado: "En la movilidad geográfica, los gastos de traslado del trabajador y familiares corren por cuenta de:",
correcta: "La empresa, en los términos pactados o legalmente establecidos",
incorrectas: [
"El trabajador, que los deducirá de su declaración del IRPF",
"La Seguridad Social mediante un subsidio de movilidad especial"
]
},
{
enunciado: "La suspensión del contrato por riesgo durante el embarazo finaliza cuando:",
correcta: "Se inicia la suspensión por nacimiento o desaparece la imposibilidad",
incorrectas: [
"El técnico de laboratorio es sustituido por un contrato de relevo",
"La trabajadora cumple el séptimo mes de gestación natural"
]
},
{
enunciado: "La subrogación no extingue por sí misma:",
correcta: "Los mandatos de los representantes de los trabajadores",
incorrectas: [
"La obligación de cerrar el centro de trabajo por inventario",
"El periodo de prueba si este ya ha sido superado con creces"
]
},
{
enunciado: "El 'cierre patronal' legal suspende el contrato de trabajo por:",
correcta: "Existencia de peligro de violencia o ocupación irregular del centro",
incorrectas: [
"Falta de pago de los suministros eléctricos del laboratorio",
"Decisión del empresario de realizar obras de reforma estética"
]
},
{
enunciado: "La excedencia voluntaria no da derecho a la reserva del puesto de trabajo, sino a:",
correcta: "Un derecho preferente al reingreso",
incorrectas: [
"Una indemnización por cese temporal de actividad técnica",
"La obligación de la empresa de mantener el pago de la mutua"
]
},
{
enunciado: "La notificación de una modificación sustancial individual debe hacerse al trabajador y a:",
correcta: "Los representantes de los trabajadores",
incorrectas: [
"La comisaría de policía más cercana al centro sanitario",
"El Registro Mercantil de la provincia correspondiente"
]
}
];