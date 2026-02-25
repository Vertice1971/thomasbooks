'use strict';

var PREGUNTAS = [
{
enunciado: "En la estructura del recibo de salarios, el 'salario base' se define como:",
correcta: "La parte de la retribución del trabajador fijada por unidad de tiempo o de obra",
incorrectas: [
"La suma total de todos los devengos antes de aplicar las retenciones de IRPF",
"La cantidad mínima que el Estado garantiza a los desempleados de larga duración"
]
},
{
enunciado: "Los complementos salariales fijados en función de circunstancias relativas a las condiciones personales del trabajador se denominan:",
correcta: "Complementos personales (como la antigüedad o títulos)",
incorrectas: [
"Complementos de puesto de trabajo (como la peligrosidad o turnicidad)",
"Complementos por resultados de la empresa (participación en beneficios)"
]
},
{
enunciado: "¿Cuál de los siguientes conceptos tiene naturaleza de percepción 'extrasalarial'?",
correcta: "Las indemnizaciones por gastos de material y las dietas de viaje",
incorrectas: [
"El plus de nocturnidad por trabajar en el laboratorio entre las 22:00 y las 06:00",
"Las gratificaciones extraordinarias de Navidad y verano"
]
},
{
enunciado: "Las deducciones en la nómina consisten fundamentalmente en:",
correcta: "Las aportaciones del trabajador a la Seguridad Social y las retenciones a cuenta del IRPF",
incorrectas: [
"Los pagos directos que el trabajador realiza a los proveedores del laboratorio",
"El descuento por el uso de la maquinaria técnica fuera del horario laboral"
]
},
{
enunciado: "La base de cotización a la Seguridad Social se calcula sumando:",
correcta: "Las retribuciones devengadas con carácter mensual y la parte proporcional de las pagas extras",
incorrectas: [
"Únicamente el salario neto que el trabajador recibe en su cuenta bancaria",
"El salario base multiplicado por el coeficiente de peligrosidad del centro"
]
},
{
enunciado: "El tipo de retención del IRPF que se aplica en la nómina depende de:",
correcta: "La cuantía de los ingresos anuales y las circunstancias familiares del trabajador",
incorrectas: [
"El número de metros cuadrados del laboratorio clínico donde se trabaja",
"La antigüedad del título de Técnico Especialista del profesional sanitario"
]
},
{
enunciado: "La 'liquidación de haberes' o finiquito es el documento que:",
correcta: "Refleja las cantidades adeudadas al finalizar la relación laboral por cualquier causa",
incorrectas: [
"Se entrega anualmente para informar sobre la salud financiera de la empresa",
"Sirve para solicitar el adelanto del salario antes de que finalice el mes natural"
]
},
{
enunciado: "En el recibo de salarios, los 'devengos' representan:",
correcta: "Las cantidades totales brutas que percibe el trabajador por todos los conceptos",
incorrectas: [
"Las deudas que el trabajador mantiene con la Seguridad Social por impagos",
"El tiempo total de descanso semanal que no ha sido disfrutado efectivamente"
]
},
{
enunciado: "Los complementos de 'puesto de trabajo' se perciben en función de:",
correcta: "Las características del puesto o la forma de realizar la actividad laboral",
incorrectas: [
"La posesión de idiomas o conocimientos técnicos no requeridos por el puesto",
"La buena relación del trabajador con el director técnico del laboratorio"
]
},
{
enunciado: "La base sujeta a retención del IRPF está constituida por:",
correcta: "La totalidad de las retribuciones que tengan la consideración de rendimientos del trabajo",
incorrectas: [
"La base de cotización de accidentes de trabajo exclusivamente",
"El importe de las dietas de manutención que no superen los límites legales"
]
},
{
enunciado: "El recibo de salarios debe conservarse por la empresa, junto con los boletines de cotización, durante:",
correcta: "Cuatro años",
incorrectas: [
"Un año",
"Diez años"
]
},
{
enunciado: "La cuota obrera es la parte de la cotización a la Seguridad Social que:",
correcta: "Corre a cargo del trabajador y el empresario descuenta en la nómina",
incorrectas: [
"Paga el Estado íntegramente para fomentar el empleo técnico",
"El trabajador debe ingresar directamente en el banco cada mes"
]
},
{
enunciado: "¿Qué ocurre con las percepciones extrasalariales en el cálculo de la base de cotización?",
correcta: "Están excluidas siempre que no superen los límites legales establecidos",
incorrectas: [
"Se suman íntegramente al salario base sin ningún tipo de límite",
"Se restan de la base de cotización para reducir los impuestos del técnico"
]
},
{
enunciado: "El 'salario neto' o líquido a percibir es el resultado de:",
correcta: "Restar el total de deducciones al total de devengos",
incorrectas: [
"Sumar el salario base a las retenciones del impuesto sobre la renta",
"Dividir el salario bruto anual por las catorce pagas reglamentarias"
]
},
{
enunciado: "Las pagas extraordinarias se pueden prorratear mensualmente si:",
correcta: "Así se acuerda en convenio colectivo o por pacto entre las partes",
incorrectas: [
"El empresario decide hacerlo unilateralmente para mejorar su liquidez",
"El trabajador es mayor de 45 años y tiene cargas familiares directas"
]
},
{
enunciado: "La base de cotización por Contingencias Comunes sirve para cubrir:",
correcta: "Enfermedad común, accidente no laboral, jubilación, maternidad y paternidad",
incorrectas: [
"Accidentes ocurridos estrictamente dentro del laboratorio por negligencia",
"El pago de las cuotas sindicales de los representantes de los trabajadores"
]
},
{
enunciado: "Las horas extraordinarias tienen un apartado específico en la nómina porque:",
correcta: "Tienen un tipo de cotización adicional y diferente al de las horas ordinarias",
incorrectas: [
"Se consideran siempre percepciones de carácter extrasalarial e indemnizatorio",
"Están exentas de tributar en el Impuesto sobre la Renta de las Personas Físicas"
]
},
{
enunciado: "En la liquidación de haberes por despido, se debe incluir proporcionalmente:",
correcta: "La parte de vacaciones no disfrutadas y la parte proporcional de pagas extras",
incorrectas: [
"El salario de los próximos tres meses en concepto de ayuda al desempleo",
"La devolución de las cuotas de seguridad social pagadas durante el último año"
]
},
{
enunciado: "El modelo oficial de recibo de salarios contiene tres grandes bloques:",
correcta: "Encabezamiento, cuerpo (devengos y deducciones) y pie (bases de cotización)",
incorrectas: [
"Datos médicos, historial laboral y previsiones de producción técnica",
"Firma del notario, sello de la inspección y datos de la empresa usuaria"
]
},
{
enunciado: "La base de cotización por Contingencias Profesionales incluye la cotización por:",
correcta: "Accidentes de Trabajo (AT) y Enfermedades Profesionales (EP)",
incorrectas: [
"Gastos de odontología y oftalmología privada del trabajador técnico",
"Seguro de vida obligatorio para viajes de ocio fuera de la jornada"
]
},
{
enunciado: "La retención de IRPF es un pago anticipado que el trabajador hace a:",
correcta: "La Agencia Tributaria (Hacienda)",
incorrectas: [
"La Tesorería General de la Seguridad Social",
"El Ayuntamiento donde reside el profesional"
]
},
{
enunciado: "Si un trabajador tiene un salario en especie, este debe:",
correcta: "Valorarse económicamente e incluirse en los devengos y en la base de cotización",
incorrectas: [
"Entregarse sin que aparezca reflejado en el recibo de salarios oficial",
"Descontarse del salario base antes de calcular las horas extraordinarias"
]
},
{
enunciado: "La base de cotización tiene unos límites denominados:",
correcta: "Bases mínimas y máximas fijadas anualmente para cada grupo profesional",
incorrectas: [
"Márgenes de beneficio técnico establecidos por la empresa de diagnóstico",
"Límites de gasto farmacéutico impuestos por el Ministerio de Sanidad"
]
},
{
enunciado: "El concepto de 'Mejora Voluntaria' de la Seguridad Social es:",
correcta: "Un complemento salarial que aumenta las prestaciones legales de la Seguridad Social",
incorrectas: [
"Una donación obligatoria que el trabajador hace al sistema de pensiones",
"La renuncia del técnico a disfrutar de sus días de asuntos propios"
]
},
{
enunciado: "Las deducciones por 'Formación Profesional' en la nómina se destinan a:",
correcta: "Financiar el sistema público de formación para el empleo",
incorrectas: [
"Pagar los cursos privados que el trabajador realice por su cuenta",
"Mantener las instalaciones de las universidades técnicas de la región"
]
},
{
enunciado: "La cotización por Desempleo es obligatoria para:",
correcta: "Todos los trabajadores por cuenta ajena y sus empresarios",
incorrectas: [
"Solo los técnicos que tienen un contrato de duración determinada",
"Únicamente los empleados que perciben el Salario Mínimo Interprofesional"
]
},
{
enunciado: "El 'encabezamiento' de la nómina debe identificar obligatoriamente a:",
correcta: "La empresa (nombre, CIF, código cuenta cotización) y al trabajador (nombre, NIF, categoría, antigüedad)",
incorrectas: [
"Los clientes principales del laboratorio y el volumen de muestras procesadas",
"Los miembros del sindicato al que está afiliado el trabajador sanitario"
]
},
{
enunciado: "Un 'atraso salarial' reflejado en el recibo de salarios corresponde a:",
correcta: "Cantidades devengadas en meses anteriores por incrementos con efecto retroactivo",
incorrectas: [
"Sanciones económicas impuestas al trabajador por falta de diligencia técnica",
"El pago de las vacaciones del año anterior que no fueron disfrutadas por baja"
]
},
{
enunciado: "El FOGASA aparece en las deducciones de la nómina como una aportación del:",
correcta: "Empresario únicamente (no se le descuenta nada al trabajador)",
incorrectas: [
"Trabajador exclusivamente (se detrae de su salario base mensual)",
"Estado como subvención directa a los salarios más bajos del sector"
]
},
{
enunciado: "La firma del recibo de salarios por el trabajador cuando el pago es por transferencia:",
correcta: "No es obligatoria, ya que el justificante bancario acredita el pago",
incorrectas: [
"Sigue siendo imprescindible para que el contrato mantenga su validez",
"Debe realizarse ante un representante de la Inspección de Trabajo"
]
},
{
enunciado: "Los 'complementos de vencimiento superior al mes' son habitualmente:",
correcta: "Las gratificaciones extraordinarias (pagas extras)",
incorrectas: [
"El plus de transporte que se cobra todos los meses por desplazamiento",
"La retribución de las horas extraordinarias realizadas en la última semana"
]
},
{
enunciado: "La base de cotización por desempleo, formación profesional y FOGASA es:",
correcta: "La misma que la base de contingencias profesionales",
incorrectas: [
"Siempre inferior al salario base fijado en el convenio colectivo",
"Igual al salario neto percibido por el trabajador en el mes anterior"
]
},
{
enunciado: "En el cálculo de la base de cotización, las pagas extras se:",
correcta: "Prorratean dividiendo su importe anual entre doce meses",
incorrectas: [
"Incluyen solo en el mes en el que el trabajador las cobra efectivamente",
"Ignoran completamente ya que tributan de forma independiente al IRPF"
]
},
{
enunciado: "El certificado de empresa es un documento que se entrega junto al finiquito para:",
correcta: "Acreditar la situación de desempleo y las bases de cotización ante el SEPE",
incorrectas: [
"Demostrar que el trabajador tiene buena salud para ser contratado de nuevo",
"Solicitar la devolución total de los impuestos pagados durante la carrera"
]
},
{
enunciado: "La retención de IRPF se considera en la nómina como:",
correcta: "Una deducción o descuento sobre el total devengado",
incorrectas: [
"Un beneficio social que la empresa otorga al trabajador técnico",
"Un complemento salarial de carácter variable por objetivos logrados"
]
},
{
enunciado: "Se entiende por 'Salario Bruto' la cifra resultante de:",
correcta: "La suma de todos los conceptos salariales y extrasalariales antes de descuentos",
incorrectas: [
"La cantidad que el trabajador se lleva a casa tras pagar los impuestos",
"El salario mínimo fijado por el gobierno para ese año natural"
]
},
{
enunciado: "El Mecanismo de Equidad Intergeneracional (MEI) es una cotización que:",
correcta: "Se aplica sobre la base de cotización para reforzar el sistema de pensiones",
incorrectas: [
"Permite a los trabajadores jóvenes cobrar más que los veteranos del centro",
"Sustituye a la retención de IRPF en los contratos de formación técnica"
]
},
{
enunciado: "La determinación de la categoría profesional en la nómina es relevante para:",
correcta: "Identificar la base mínima de cotización aplicable al trabajador",
incorrectas: [
"Saber en qué planta del edificio debe desarrollar sus tareas el técnico",
"Establecer el número de días de vacaciones que puede elegir en verano"
]
},
{
enunciado: "Las indemnizaciones por despido están exentas de tributar IRPF:",
correcta: "Hasta la cuantía establecida como obligatoria en el Estatuto de los Trabajadores",
incorrectas: [
"En su totalidad, independientemente de la cantidad que se abone al técnico",
"Nunca, siempre deben tributar al tipo máximo del 45% de retención"
]
},
{
enunciado: "El cuerpo del recibo de salarios finaliza con el apartado de:",
correcta: "Determinación de las bases de cotización y base imponible de IRPF",
incorrectas: [
"La lista de tareas realizadas por el profesional durante la jornada",
"El organigrama jerárquico actualizado de la empresa sanitaria"
]
}
];