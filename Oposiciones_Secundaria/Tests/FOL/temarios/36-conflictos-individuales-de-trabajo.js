'use strict';

var PREGUNTAS = [
{
enunciado: "El intento de conciliación previa ante el servicio administrativo correspondiente (SMAC) es:",
correcta: "Un requisito preprocesal obligatorio para la admisión de la demanda en el proceso ordinario",
incorrectas: [
"Un trámite facultativo que el trabajador puede omitir si el despido es verbal",
"Una fase del proceso que solo se realiza ante el Juez de lo Social el día del juicio"
]
},
{
enunciado: "El plazo de caducidad para presentar la demanda por despido se suspende por la presentación de la papeleta de conciliación durante un máximo de:",
correcta: "15 días hábiles",
incorrectas: [
"10 días naturales",
"30 días hábiles"
]
},
{
enunciado: "En el proceso laboral, si las partes no llegan a un acuerdo en la conciliación judicial ante el Letrado de la Administración de Justicia:",
correcta: "Se pasa seguidamente a la fase de juicio ante el Juez o Tribunal",
incorrectas: [
"El expediente se archiva definitivamente sin posibilidad de recurso",
"Se dicta sentencia de conformidad con las pretensiones del empresario"
]
},
{
enunciado: "En la fase de juicio, el orden de intervención tras la ratificación de la demanda es:",
correcta: "Contestación del demandado, práctica de prueba y conclusiones",
incorrectas: [
"Práctica de prueba, conclusiones y propuesta de conciliación",
"Sentencia inmediata, alegaciones de las partes y depósito de tasas"
]
},
{
enunciado: "En el proceso ordinario, la carga de la prueba en los despidos corresponde a:",
correcta: "El empresario, que debe acreditar la veracidad de los hechos imputados",
incorrectas: [
"El trabajador, que debe demostrar su inocencia mediante pruebas técnicas",
"El Ministerio Fiscal como garante de la legalidad en el sector sanitario"
]
},
{
enunciado: "¿Cuál es el recurso ordinario contra las sentencias dictadas por los Juzgados de lo Social?",
correcta: "Recurso de suplicación ante la Sala de lo Social del Tribunal Superior de Justicia",
incorrectas: [
"Recurso de apelación ante la Audiencia Provincial correspondiente",
"Recurso de reposición ante el mismo juez que dictó la resolución"
]
},
{
enunciado: "El recurso de casación para la unificación de doctrina se interpone ante:",
correcta: "La Sala de lo Social del Tribunal Supremo",
incorrectas: [
"La Audiencia Nacional por afectar a convenios colectivos estatales",
"El Tribunal Constitucional por vulneración de normas procesales"
]
},
{
enunciado: "Se exceptúan del requisito de la conciliación previa las demandas que versen sobre:",
correcta: "Seguridad Social, vacaciones, movilidad geográfica y modificación sustancial",
incorrectas: [
"Reclamaciones de cantidad superiores a tres mil euros de salario",
"Sanciones por faltas leves cometidas por técnicos de laboratorio"
]
},
{
enunciado: "El proceso de despido se considera un proceso:",
correcta: "Especial",
incorrectas: [
"Ordinario de cuantía indeterminada",
"Monitorio laboral"
]
},
{
enunciado: "Si el demandado, legalmente citado, no comparece al juicio sin causa justificada:",
correcta: "El juicio se celebra en su ausencia y no se suspende",
incorrectas: [
"Se le declara culpable de forma automática por allanamiento",
"Se archivan las actuaciones por falta de colaboración procesal"
]
},
{
enunciado: "La sentencia en el proceso laboral debe dictarse, salvo excepciones, en el plazo de:",
correcta: "Cinco días",
incorrectas: [
"Veinte días",
"Dos meses"
]
},
{
enunciado: "El recurso de revisión se interpone contra sentencias firmes cuando:",
correcta: "Se recobren documentos decisivos que no se pudieron aportar por fuerza mayor",
incorrectas: [
"El trabajador no esté de acuerdo con la cuantía de la indemnización fijada",
"Haya cambiado la jurisprudencia del Tribunal Supremo tras la sentencia"
]
},
{
enunciado: "En el juicio, el interrogatorio de las partes se realiza sobre:",
correcta: "Hechos personales que tengan relación con el objeto del pleito",
incorrectas: [
"Opiniones políticas o religiosas del técnico de laboratorio",
"Antecedentes penales cancelados del representante de la empresa"
]
},
{
enunciado: "La modalidad procesal de 'reclamación de salarios' sigue los cauces del:",
correcta: "Proceso ordinario",
incorrectas: [
"Proceso especial de tutela de derechos fundamentales",
"Juicio ejecutivo de títulos no judiciales"
]
},
{
enunciado: "La ejecución de sentencias firmes en el ámbito social corresponde a:",
correcta: "El Juzgado que hubiera conocido del asunto en la instancia",
incorrectas: [
"El servicio de recaudación de la Tesorería de la Seguridad Social",
"La policía judicial adscrita al tribunal superior de justicia"
]
},
{
enunciado: "En los procesos de Seguridad Social, es requisito necesario haber presentado:",
correcta: "Reclamación previa en vía administrativa",
incorrectas: [
"Demanda de conciliación ante el SMAC provincial",
"Denuncia ante la fiscalía de guardia del juzgado"
]
},
{
enunciado: "El beneficio de justicia gratuita en el orden social se reconoce a:",
correcta: "Todos los trabajadores y beneficiarios de la Seguridad Social",
incorrectas: [
"Solo a aquellos técnicos que perciban menos del salario mínimo",
"Exclusivamente a los delegados de personal en ejercicio de sus funciones"
]
},
{
enunciado: "Contra los autos y providencias dictados por el Juez de lo Social cabe:",
correcta: "Recurso de reposición",
incorrectas: [
"Recurso de queja ante el Consejo General del Poder Judicial",
"Recurso de amparo ante el tribunal de derechos humanos"
]
},
{
enunciado: "El proceso de conflicto colectivo se caracteriza por su tramitación:",
correcta: "Urgente y preferente",
incorrectas: [
"Lenta para facilitar la negociación extrajudicial de las partes",
"Escrita en su totalidad sin necesidad de vista oral ante el juez"
]
},
{
enunciado: "La demanda debe contener, entre otros datos:",
correcta: "La designación del órgano ante quien se presenta y la enumeración clara de los hechos",
incorrectas: [
"El historial médico completo del trabajador demandante",
"La lista de todos los técnicos que trabajan en la competencia"
]
},
{
enunciado: "¿Qué ocurre si la demanda tiene defectos u omisiones?",
correcta: "El Letrado de la Administración de Justicia concede cuatro días para subsanarla",
incorrectas: [
"Se rechaza de plano y se condena al trabajador al pago de costas",
"Se admite directamente para no retrasar el derecho a la tutela efectiva"
]
},
{
enunciado: "El recurso de queja se utiliza cuando:",
correcta: "Se deniega la tramitación de un recurso de suplicación o casación",
incorrectas: [
"El trato recibido por los funcionarios del juzgado ha sido incorrecto",
"El abogado de la parte contraria utiliza un tono de voz elevado"
]
},
{
enunciado: "En los juicios sobre accidentes de trabajo, la prueba pericial suele versar sobre:",
correcta: "El grado de incapacidad y el nexo causal con la actividad laboral",
incorrectas: [
"La solvencia económica de los herederos del empresario",
"La calidad técnica de los reactivos químicos no relacionados"
]
},
{
enunciado: "La acumulación de acciones permite en una misma demanda:",
correcta: "Ejercitar varias pretensiones contra un mismo demandado si son compatibles",
incorrectas: [
"Pedir el divorcio y la reclamación de cantidad salarial simultáneamente",
"Denunciar a la empresa y a un vecino por ruidos en el domicilio"
]
},
{
enunciado: "El acta de conciliación administrativa tiene:",
correcta: "Fuerza ejecutiva entre las partes intervinientes",
incorrectas: [
"Valor meramente informativo sin posibilidad de ejecución judicial",
"Eficacia frente a terceros que no estuvieron presentes en el acto"
]
},
{
enunciado: "La declaración de insolvencia de la empresa en fase de ejecución permite acudir a:",
correcta: "El Fondo de Garantía Salarial (FOGASA)",
incorrectas: [
"La mutua de accidentes para cobrar las nóminas atrasadas",
"El banco del trabajador para solicitar la condonación de deudas"
]
},
{
enunciado: "El recurso de casación común se interpone ante el Supremo contra sentencias de:",
correcta: "La Sala de lo Social de la Audiencia Nacional y del TSJ en ciertos casos",
incorrectas: [
"Los Juzgados de lo Social en reclamaciones superiores a 600 euros",
"Los colegios profesionales en materia de deontología técnica"
]
},
{
enunciado: "En el proceso por despido nulo por violencia de género, el Ministerio Fiscal:",
correcta: "Debe ser parte en el proceso siempre",
incorrectas: [
"Solo interviene si el empresario es una entidad pública estatal",
"No tiene competencias al ser una cuestión puramente laboral"
]
},
{
enunciado: "La sentencia estimatoria de una reclamación de cantidad condenará al pago de:",
correcta: "El principal adeudado más el interés de demora del 10%",
incorrectas: [
"El doble de lo solicitado en concepto de multa civil",
"El salario bruto multiplicado por el IPC de los últimos diez años"
]
},
{
enunciado: "Las costas procesales en el orden social:",
correcta: "No incluyen honorarios de abogado para el trabajador, salvo temeridad",
incorrectas: [
"Se imponen siempre al trabajador si pierde el juicio ordinario",
"Son fijadas libremente por el sindicato que haya asesorado"
]
},
{
enunciado: "En el juicio oral, las conclusiones sirven para:",
correcta: "Valorar las pruebas practicadas y resumir las tesis jurídicas",
incorrectas: [
"Aportar nuevos documentos que no se presentaron con la demanda",
"Solicitar un aumento de la cuantía reclamada inicialmente"
]
},
{
enunciado: "La ejecución provisional de sentencias de despido improcedente obliga a:",
correcta: "El pago de los salarios de tramitación mientras dure el recurso",
incorrectas: [
"La readmisión inmediata sin posibilidad de fianza por la empresa",
"El embargo preventivo de todas las cuentas bancarias del centro"
]
},
{
enunciado: "El procedimiento de 'oficio' se inicia a instancia de:",
correcta: "La autoridad laboral mediante comunicación al juzgado tras acta de infracción",
incorrectas: [
"El trabajador que no desea contratar los servicios de un abogado",
"El juez que detecta una irregularidad leyendo la prensa local"
]
},
{
enunciado: "La mediación laboral extrajudicial se diferencia del arbitraje en que:",
correcta: "El mediador propone una solución no vinculante y el árbitro dicta una decisión obligatoria",
incorrectas: [
"La mediación solo se hace en hospitales y el arbitraje en laboratorios",
"El árbitro es siempre un funcionario de la seguridad social en activo"
]
},
{
enunciado: "Un conflicto individual se diferencia de uno colectivo por:",
correcta: "El interés jurídico afectado y el número de trabajadores implicados",
incorrectas: [
"La nacionalidad de los técnicos que presentan la reclamación",
"La marca del instrumental técnico que ha causado la disputa"
]
},
{
enunciado: "El recurso de suplicación debe anunciarse en el plazo de:",
correcta: "Cinco días desde la notificación de la sentencia",
incorrectas: [
"Un mes natural contado de fecha a fecha",
"Quince días hábiles mediante burofax al juzgado"
]
},
{
enunciado: "Las sentencias recaídas en procesos de vacaciones:",
correcta: "No son recurribles, salvo excepciones muy específicas",
incorrectas: [
"Siempre admiten recurso de casación ante el Tribunal Supremo",
"Requieren un depósito de 600 euros para ser impugnadas"
]
},
{
enunciado: "En la demanda contra el Estado por salarios de tramitación, el plazo es de:",
correcta: "Un año desde la firmeza de la sentencia de despido",
incorrectas: [
"Veinte días desde que la empresa se declara insolvente",
"Tres meses desde el cierre patronal del laboratorio clínico"
]
},
{
enunciado: "La conciliación judicial se celebra ante:",
correcta: "El Letrado de la Administración de Justicia",
incorrectas: [
"El médico de guardia del centro sanitario afectado",
"El representante del sindicato con mayor número de votos"
]
},
{
enunciado: "El allanamiento del demandado implica que:",
correcta: "Acepta las pretensiones del demandante, dictándose sentencia condenatoria",
incorrectas: [
"El técnico de laboratorio renuncia a su derecho a ser indemnizado",
"La empresa cierra sus instalaciones de forma definitiva y voluntaria"
]
}
];