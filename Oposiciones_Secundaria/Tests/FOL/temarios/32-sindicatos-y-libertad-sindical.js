'use strict';

var PREGUNTAS = [
{
enunciado: "El derecho a la libertad sindical, según la Constitución Española y la LOLS, incluye:",
correcta: "El derecho a fundar sindicatos, a afiliarse al de su elección y a la actividad sindical",
incorrectas: [
"La obligación de todos los técnicos de un centro de pertenecer al mismo sindicato mayoritario",
"El derecho a percibir un salario doble durante los periodos de huelga legalmente convocada"
]
},
{
enunciado: "¿Quiénes están excluidos del ejercicio del derecho de sindicación en España?",
correcta: "Los miembros de las Fuerzas Armadas y de los Institutos Armados de carácter militar",
incorrectas: [
"Los trabajadores extranjeros que no posean la nacionalidad de un país de la Unión Europea",
"Los técnicos superiores que desempeñen funciones de responsabilidad en laboratorios privados"
]
},
{
enunciado: "La libertad sindical individual negativa consiste en el derecho del trabajador a:",
correcta: "No afiliarse a ningún sindicato o abandonar el que estuviera afiliado",
incorrectas: [
"Negarse a cumplir las órdenes del empresario si no han sido visadas por el sindicato",
"No pagar impuestos si el sindicato no ha aprobado los presupuestos generales del Estado"
]
},
{
enunciado: "Un sindicato adquiere personalidad jurídica y plena capacidad de obrar tras:",
correcta: "El depósito de sus estatutos en la oficina pública correspondiente y su publicación",
incorrectas: [
"La firma de un acta notarial ante la presencia de al menos cien trabajadores fijos",
"La obtención de un beneficio económico neto en su primer ejercicio de actividad"
]
},
{
enunciado: "Se consideran sindicatos 'más representativos' a nivel estatal aquellos que:",
correcta: "Hayan obtenido al menos el 10% del total de delegados de personal y miembros de comités",
incorrectas: [
"Cuenten con más de un millón de afiliados que paguen su cuota mediante transferencia",
"Hayan sido fundados antes de la entrada en vigor de la Constitución Española de 1978"
]
},
{
enunciado: "Las secciones sindicales están formadas por:",
correcta: "El conjunto de trabajadores de una empresa o centro de trabajo afiliados a un mismo sindicato",
incorrectas: [
"Los representantes del empresario encargados de negociar con los técnicos sanitarios",
"Los inspectores de trabajo destinados a la vigilancia de un sector industrial específico"
]
},
{
enunciado: "Los delegados sindicales son elegidos por y entre los:",
correcta: "Afiliados al sindicato en la empresa o centro de trabajo",
incorrectas: [
"Trabajadores de la plantilla, sean o no afiliados al sindicato en cuestión",
"Directivos de la empresa para facilitar la comunicación interna con los técnicos"
]
},
{
enunciado: "¿En qué empresas pueden los afiliados designar delegados sindicales según la LOLS?",
correcta: "En aquellas que ocupen a más de 250 trabajadores",
incorrectas: [
"En cualquier centro de trabajo independientemente del número de empleados",
"Solo en empresas públicas con presupuesto dependiente del Estado central"
]
},
{
enunciado: "La tutela de la libertad sindical permite al trabajador o sindicato recabar la protección ante:",
correcta: "La Jurisdicción Social a través del proceso de tutela de derechos fundamentales",
incorrectas: [
"El consejo rector de la mutua de accidentes de trabajo de la empresa",
"La oficina de atención al consumidor del municipio donde radique el laboratorio"
]
},
{
enunciado: "Las asociaciones empresariales tienen como finalidad principal:",
correcta: "La defensa de los intereses económicos y sociales que les son propios",
incorrectas: [
"La gestión de las nóminas y seguros sociales de todos los técnicos del país",
"La sustitución de la autoridad laboral en la imposición de sanciones a los empleados"
]
},
{
enunciado: "El patrimonio de los sindicatos es inembargable cuando:",
correcta: "Se trate de bienes afectos al cumplimiento de sus fines estatutarios esenciales",
incorrectas: [
"El sindicato declare pérdidas económicas en su balance contable anual",
"Los bienes hayan sido donados por empresas del sector químico o sanitario"
]
},
{
enunciado: "La libertad sindical colectiva comprende el derecho de los sindicatos a:",
correcta: "La negociación colectiva, el ejercicio del derecho de huelga y el planteamiento de conflictos",
incorrectas: [
"Dictar leyes de obligado cumplimiento para todas las empresas de un sector técnico",
"Gestionar de forma privada los fondos de las pensiones públicas de jubilación"
]
},
{
enunciado: "Los delegados sindicales que no formen parte del Comité de Empresa tienen derecho a:",
correcta: "Asistir a las reuniones del Comité de Empresa y del Comité de Seguridad y Salud, con voz pero sin voto",
incorrectas: [
"Percibir el mismo salario que el director de recursos humanos del centro sanitario",
"Vetar las decisiones técnicas sobre el análisis de muestras en el laboratorio"
]
},
{
enunciado: "Se considera conducta antisindical del empresario:",
correcta: "Cualquier acto que dificulte o impida el ejercicio de los derechos sindicales",
incorrectas: [
"Exigir el cumplimiento del horario de trabajo pactado en el contrato laboral",
"Solicitar la titulación técnica requerida para el desempeño del puesto de trabajo"
]
},
{
enunciado: "La cuota sindical puede ser descontada de la nómina por el empresario si:",
correcta: "El trabajador lo autoriza previamente por escrito",
incorrectas: [
"El sindicato es el mayoritario en el sector de la sanidad privada",
"La empresa tiene pérdidas y necesita reducir los costes administrativos"
]
},
{
enunciado: "Los trabajadores que tengan la condición de cargos electivos a nivel provincial o superior en un sindicato tienen derecho a:",
correcta: "La excedencia forzosa con reserva del puesto de trabajo",
incorrectas: [
"Cobrar el sueldo de la empresa sin tener que acudir a su puesto técnico",
"Utilizar los vehículos de la empresa para sus desplazamientos personales"
]
},
{
enunciado: "La representatividad sindical a nivel de Comunidad Autónoma requiere obtener al menos el:",
correcta: "15% de los representantes y contar con un mínimo de 1.500 representantes",
incorrectas: [
"5% de los afiliados totales en el registro de la seguridad social",
"50% de los votos en las elecciones al parlamento autonómico"
]
},
{
enunciado: "El canon de negociación colectiva es una cantidad que:",
correcta: "Los trabajadores incluidos en el convenio pueden pagar para sufragar los gastos de negociación",
incorrectas: [
"La empresa debe pagar al Estado por cada contrato temporal realizado",
"El sindicato paga a la empresa por el uso de los locales del laboratorio"
]
},
{
enunciado: "Los estatutos de un sindicato deben contener obligatoriamente:",
correcta: "Denominación, domicilio, ámbito territorial y funcional, y órganos de gobierno",
incorrectas: [
"La lista completa de todos los afiliados y sus domicilios particulares",
"Los protocolos técnicos detallados de los análisis que realizan los afiliados"
]
},
{
enunciado: "El régimen jurídico de los sindicatos se fundamenta en los principios de:",
correcta: "Democracia y autonomía organizativa",
incorrectas: [
"Jerarquía militar y obediencia ciega a los líderes nacionales",
"Lucro económico y distribución de dividendos entre los afiliados"
]
},
{
enunciado: "La libertad sindical de los trabajadores autónomos que no tengan trabajadores a su servicio permite:",
correcta: "Afiliarse a un sindicato, pero no fundar uno que tenga como objeto la defensa de sus intereses",
incorrectas: [
"Fundar su propio sindicato de técnicos autónomos sin ninguna limitación legal",
"Obligar a las empresas para las que facturan a contratarles como fijos"
]
},
{
enunciado: "Las organizaciones sindicales tienen derecho a la 'irretroactividad' de las normas que:",
correcta: "Puedan restringir el ejercicio de la libertad sindical ya consolidado",
incorrectas: [
"Establezcan el pago obligatorio de impuestos sobre la renta de los técnicos",
"Regulen el uso de batas blancas en los laboratorios de microbiología"
]
},
{
enunciado: "La responsabilidad de los sindicatos por actos de sus afiliados se produce cuando:",
correcta: "Estos actúen en el ejercicio de sus funciones representativas o por cuenta del sindicato",
incorrectas: [
"El afiliado cometa una infracción de tráfico con su vehículo particular",
"El técnico rompa un material de laboratorio por negligencia individual"
]
},
{
enunciado: "Los sindicatos con consideración de 'más representativos' pueden:",
correcta: "Ostentar representación institucional ante las administraciones públicas",
incorrectas: [
"Sustituir a los jueces en la resolución de despidos disciplinarios",
"Expropiar bienes de empresas que no cumplan el convenio colectivo"
]
},
{
enunciado: "La disolución de un sindicato puede producirse por:",
correcta: "Resolución judicial firme en caso de incumplimiento grave de las leyes",
incorrectas: [
"Decisión unilateral del director general de la empresa más grande del sector",
"Haber perdido más del 5% de los afiliados en un periodo de dos meses"
]
},
{
enunciado: "En el ámbito de la libertad sindical, el principio de 'no discriminación' impide:",
correcta: "Tratar de forma diferente a un trabajador por su afiliación o actividad sindical",
incorrectas: [
"Asignar tareas diferentes a un técnico superior y a un auxiliar de laboratorio",
"Exigir el mismo nivel de puntualidad a los delegados que al resto de la plantilla"
]
},
{
enunciado: "El derecho a la huelga es un derecho fundamental que:",
correcta: "Los sindicatos pueden convocar para la defensa de los intereses de los trabajadores",
incorrectas: [
"Permite a los técnicos ausentarse del trabajo siempre que deseen descansar",
"Obliga a la empresa a cerrar todas sus instalaciones durante la protesta"
]
},
{
enunciado: "Los delegados sindicales tienen las mismas garantías que:",
correcta: "Los miembros del Comité de Empresa o delegados de personal",
incorrectas: [
"Los funcionarios de carrera de la escala superior del Estado",
"Los agentes de la autoridad en el ejercicio de sus funciones"
]
},
{
enunciado: "La LOLS es la sigla de:",
correcta: "Ley Orgánica de Libertad Sindical",
incorrectas: [
"Ley Ordinaria de Logística Sanitaria",
"Laboratorio Oficial de Libertades Sociales"
]
},
{
enunciado: "Las asociaciones empresariales se rigen principalmente por:",
correcta: "La Ley 19/1977 reguladora del derecho de asociación sindical",
incorrectas: [
"El Reglamento de Régimen Interior de la Cámara de Comercio",
"La Ley de Sociedades de Capital y el Código de Comercio"
]
},
{
enunciado: "Un trabajador jubilado tiene derecho a:",
correcta: "Mantener su afiliación a un sindicato, pero no fundar uno",
incorrectas: [
"Presentarse como candidato a las elecciones de delegados de personal",
"Negociar el convenio colectivo de la empresa donde trabajó"
]
},
{
enunciado: "El registro de los estatutos de un sindicato es:",
correcta: "Público para que cualquier persona pueda consultarlos",
incorrectas: [
"Secreto y solo accesible para los miembros de la junta directiva",
"Obligatorio pagarlo mediante una tasa al colegio de técnicos"
]
},
{
enunciado: "La financiación de los sindicatos procede de:",
correcta: "Cuotas de afiliados, subvenciones públicas y otras fuentes legales",
incorrectas: [
"El embargo de las cuentas bancarias de las empresas que pierden juicios",
"La venta obligatoria de material sanitario en las sedes sindicales"
]
},
{
enunciado: "El despido basado en la afiliación sindical del trabajador es:",
correcta: "Nulo por vulneración de derechos fundamentales",
incorrectas: [
"Procedente si la empresa demuestra que el sindicato es radical",
"Improcedente con una indemnización de diez días por año"
]
},
{
enunciado: "La libertad sindical 'funcional' se refiere al derecho a:",
correcta: "Desarrollar la actividad propia de los sindicatos sin injerencias externas",
incorrectas: [
"Cambiar de funciones técnicas dentro del laboratorio de análisis",
"Elegir el horario de trabajo en función de las necesidades de la sede"
]
},
{
enunciado: "Las asociaciones de empresarios más representativas a nivel estatal deben contar con el:",
correcta: "10% de las empresas y trabajadores a nivel nacional",
incorrectas: [
"50% de los beneficios brutos del sector de la sanidad privada",
"75% de las licencias de apertura de laboratorios químicos"
]
},
{
enunciado: "El derecho a la negociación colectiva es una manifestación de la libertad sindical:",
correcta: "Colectiva",
incorrectas: [
"Individual positiva",
"Individual negativa"
]
},
{
enunciado: "Los sindicatos pueden formar:",
correcta: "Federaciones y confederaciones",
incorrectas: [
"Empresas de trabajo temporal sin ánimo de lucro",
"Partidos políticos de carácter técnico-sanitario"
]
},
{
enunciado: "La impugnación de los estatutos de un sindicato corresponde a:",
correcta: "La Jurisdicción Social",
incorrectas: [
"La Agencia Española de Protección de Datos",
"El Tribunal de Cuentas del Estado"
]
},
{
enunciado: "La acción sindical en la empresa incluye el derecho a:",
correcta: "Disponer de un tablón de anuncios y recibir información",
incorrectas: [
"Acceder a las fórmulas magistrales secretas de los reactivos químicos",
"Cobrar una comisión por cada nuevo contrato que firme la empresa"
]
}
];