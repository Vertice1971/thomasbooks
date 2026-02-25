'use strict';

var PREGUNTAS = [
{
enunciado: "¿Cuál es la norma básica que regula la relación laboral común en el ordenamiento español?",
correcta: "El Texto Refundido de la Ley del Estatuto de los Trabajadores",
incorrectas: [
"La Ley General de la Seguridad Social y sus reglamentos de desarrollo",
"El Código de Comercio y la Ley de Sociedades de Capital"
]
},
{
enunciado: "Dentro de la Administración Laboral, ¿qué órgano se encarga de vigilar el cumplimiento de la normativa y sancionar las infracciones?",
correcta: "La Inspección de Trabajo y Seguridad Social",
incorrectas: [
"El Servicio Público de Empleo Estatal a través de sus oficinas",
"La Dirección General de Costes de Personal del Ministerio de Hacienda"
]
},
{
enunciado: "El Fondo de Garantía Salarial (FOGASA) es un organismo autónomo que tiene la función de:",
correcta: "Abonar salarios e indemnizaciones pendientes por insolvencia o concurso del empresario",
incorrectas: [
"Gestionar las prestaciones por desempleo y los subsidios extraordinarios",
"Financiar la formación continua de los trabajadores en activo"
]
},
{
enunciado: "¿Qué función principal cumple el SMAC (Servicio de Mediación, Arbitraje y Conciliación)?",
correcta: "Intentar la evitación del pleito judicial mediante un acto de conciliación previa obligatorio",
incorrectas: [
"Dictar sentencias firmes en conflictos colectivos de interpretación de convenios",
"Asesorar jurídicamente de forma gratuita a las empresas en procesos de despido"
]
},
{
enunciado: "La Jurisdicción Social es la encargada de resolver conflictos entre:",
correcta: "Trabajadores y empresarios derivados del contrato de trabajo y en materia de Seguridad Social",
incorrectas: [
"Empresas privadas por deudas comerciales o incumplimiento de suministros",
"La Administración Pública y los ciudadanos por sanciones de tráfico o administrativas"
]
},
{
enunciado: "¿Cuál es el órgano judicial de primera instancia en el orden social?",
correcta: "Los Juzgados de lo Social",
incorrectas: [
"Las Salas de lo Social de los Tribunales Superiores de Justicia",
"La Audiencia Nacional en su sección de derecho laboral"
]
},
{
enunciado: "El Ministerio de Trabajo y Economía Social es el órgano de la Administración encargado de:",
correcta: "La propuesta y ejecución de la política del Gobierno en materia de empleo y relaciones laborales",
incorrectas: [
"La gestión directa de los hospitales y centros de salud de titularidad pública",
"El control de la inflación y la política monetaria en coordinación con el Banco de España"
]
},
{
enunciado: "En el ámbito de las Comunidades Autónomas, las competencias en materia laboral suelen recaer en:",
correcta: "Las Consejerías de Empleo o Trabajo a través de sus Direcciones Generales",
incorrectas: [
"Las Delegaciones del Gobierno dependientes del Ministerio del Interior",
"Los Ayuntamientos mediante las ordenanzas municipales de industria"
]
},
{
enunciado: "¿Qué órgano judicial conoce de los conflictos que afectan a un ámbito superior al de una Comunidad Autónoma?",
correcta: "La Sala de lo Social de la Audiencia Nacional",
incorrectas: [
"El Tribunal Supremo a través de su Sala de Casación ordinaria",
"El Tribunal Constitucional mediante el recurso de amparo laboral"
]
},
{
enunciado: "El SEPE (Servicio Público de Empleo Estatal) tiene entre sus competencias:",
correcta: "La gestión y control de las prestaciones por desempleo",
incorrectas: [
"La resolución de litigios por despido nulo o improcedente",
"La fijación anual del Salario Mínimo Interprofesional mediante decreto"
]
},
{
enunciado: "El acta levantada por la Inspección de Trabajo tiene presunción de certeza, lo que significa que:",
correcta: "Los hechos constatados por el inspector se consideran ciertos salvo prueba en contrario",
incorrectas: [
"El trabajador no puede recurrir la sanción impuesta en ningún caso",
"La empresa debe pagar la multa de forma inmediata antes de presentar alegaciones"
]
},
{
enunciado: "La Tesorería General de la Seguridad Social (TGSS) se encarga de:",
correcta: "La gestión de la afiliación, altas, bajas y la recaudación de cuotas",
incorrectas: [
"La determinación de la incapacidad permanente de los trabajadores",
"El pago de las nóminas de los empleados públicos del sector sanitario"
]
},
{
enunciado: "Contra las sentencias de los Juzgados de lo Social cabe interponer, por regla general:",
correcta: "Recurso de Suplicación ante el Tribunal Superior de Justicia",
incorrectas: [
"Recurso de Apelación ante la Audiencia Provincial correspondiente",
"Recurso de Alzada ante el Ministro de Trabajo y Economía Social"
]
},
{
enunciado: "El Instituto Nacional de la Seguridad Social (INSS) tiene como función principal:",
correcta: "La gestión y administración de las prestaciones económicas del sistema (pensiones, bajas)",
incorrectas: [
"La supervisión de las condiciones de higiene en los laboratorios clínicos",
"El registro de los convenios colectivos de ámbito estatal y autonómico"
]
},
{
enunciado: "La Autoridad Laboral debe intervenir obligatoriamente en procesos como:",
correcta: "Los Expedientes de Regulación de Empleo (ERE) y el registro de convenios",
incorrectas: [
"La selección del personal técnico de las empresas privadas de diagnóstico",
"La fijación de los precios de los servicios ofrecidos por las mutuas"
]
},
{
enunciado: "El FOGASA financia sus recursos fundamentalmente a través de:",
correcta: "Aportaciones de los empresarios mediante una cuota sobre los salarios",
incorrectas: [
"Multas impuestas a los trabajadores por negligencia en el puesto",
"Subvenciones directas de la Unión Europea para el fomento del empleo"
]
},
{
enunciado: "La representación legal de los trabajadores en la empresa se ejerce a través de:",
correcta: "Delegados de Personal y Comités de Empresa",
incorrectas: [
"El SMAC y los órganos de mediación autonómicos",
"Los colegios profesionales de cada rama sanitaria"
]
},
{
enunciado: "Un conflicto individual de trabajo debe presentarse ante el juzgado en el plazo de:",
correcta: "20 días hábiles si se trata de un despido o sanción",
incorrectas: [
"Un año natural para cualquier tipo de reclamación de derechos",
"Tres meses desde que se produjo el hecho que motiva la demanda"
]
},
{
enunciado: "El INSST (Instituto Nacional de Seguridad y Salud en el Trabajo) es el órgano científico-técnico para:",
correcta: "El análisis y mejora de las condiciones de seguridad y salud en el trabajo",
incorrectas: [
"La tramitación de las jubilaciones anticipadas por enfermedad profesional",
"La concesión de licencias de apertura para nuevos centros sanitarios"
]
},
{
enunciado: "La Jurisdicción Social se rige principalmente por la Ley:",
correcta: "36/2011, Reguladora de la Jurisdicción Social",
incorrectas: [
"1/2000, de Enjuiciamiento Civil aplicada de forma supletoria",
"39/2015, del Procedimiento Administrativo Común"
]
}
];