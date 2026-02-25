'use strict';

var PREGUNTAS = [
{
enunciado: "El convenio colectivo se define jurídicamente como:",
correcta: "Un acuerdo suscrito entre representantes de trabajadores y empresarios para regular condiciones de trabajo y productividad",
incorrectas: [
"Una norma dictada exclusivamente por el Ministerio de Trabajo para el sector sanitario",
"Un contrato individual que firma cada técnico de laboratorio al iniciar su actividad"
]
},
{
enunciado: "La naturaleza jurídica de los convenios colectivos estatutarios es la de:",
correcta: "Norma jurídica con eficacia general o 'erga omnes'",
incorrectas: [
"Contrato civil que solo obliga a los firmantes del documento original",
"Recomendación técnica sin carácter vinculante para la dirección de la empresa"
]
},
{
enunciado: "Para que un convenio colectivo sea válido, debe celebrarse obligatoriamente:",
correcta: "Por escrito, bajo pena de nulidad",
incorrectas: [
"De palabra ante la presencia de un inspector de trabajo de guardia",
"Mediante acta notarial en la sede de la Seguridad Social provincial"
]
},
{
enunciado: "¿Qué órganos tienen legitimación para negociar un convenio de empresa?",
correcta: "El Comité de Empresa, los delegados de personal o las secciones sindicales",
incorrectas: [
"Cualquier grupo de tres técnicos que trabaje en el laboratorio de análisis",
"El consejo de administración de la empresa de forma unilateral"
]
},
{
enunciado: "La vigencia de un convenio colectivo es la que:",
correcta: "Acuerden las partes negociadoras, pudiendo pactarse distintos periodos para cada materia",
incorrectas: [
"Establezca la Ley de Presupuestos Generales del Estado cada primero de año",
"Dure el mandato de los delegados de personal que lo firmaron"
]
},
{
enunciado: "La 'denuncia' del convenio colectivo es el acto por el cual:",
correcta: "Una de las partes comunica a la otra su voluntad de no prorrogarlo y negociar uno nuevo",
incorrectas: [
"El empresario informa a la policía de un sabotaje en el material técnico",
"Los trabajadores solicitan la anulación del contrato de un compañero eventual"
]
},
{
enunciado: "La 'ultraactividad' de un convenio colectivo se refiere a:",
correcta: "La vigencia del convenio una vez terminada su duración pactada mientras se negocia el nuevo",
incorrectas: [
"La capacidad del convenio para regular actividades realizadas fuera de España",
"La obligación de pagar un plus de rendimiento superior al 50% del salario base"
]
},
{
enunciado: "Las unidades de negociación de un convenio pueden ser:",
correcta: "De ámbito inferior a la empresa, de empresa, o de ámbito superior (sectorial)",
incorrectas: [
"Únicamente de carácter internacional para técnicos de la Unión Europea",
"Exclusivamente provinciales para centros de salud con menos de diez empleados"
]
},
{
enunciado: "¿Qué es el 'deber de negociar' en la constitución de la comisión negociadora?",
correcta: "La obligación de la parte receptora de la comunicación de contestar y sentarse a negociar",
incorrectas: [
"La prohibición de que los técnicos abandonen el laboratorio hasta firmar el acuerdo",
"La obligación legal de llegar siempre a un acuerdo final sin posibilidad de huelga"
]
},
{
enunciado: "El contenido mínimo de un convenio colectivo debe incluir obligatoriamente:",
correcta: "Partes que lo conciertan, ámbitos de aplicación, vigencia y forma de denuncia",
incorrectas: [
"El menú diario del comedor de la empresa y la marca de los reactivos químicos",
"La dirección particular de todos los técnicos sanitarios de la plantilla"
]
},
{
enunciado: "Los acuerdos de adhesión permiten que las partes legitimadas:",
correcta: "Se adhieran a la totalidad de un convenio colectivo en vigor siempre que no estén afectadas por otro",
incorrectas: [
"Modifiquen el salario base de un técnico superior sin consultar al sindicato",
"Compren acciones de la empresa a un precio inferior al valor de mercado"
]
},
{
enunciado: "El acto de extensión de un convenio es una facultad de la autoridad laboral para:",
correcta: "Aplicar un convenio en vigor a una empresa o sector con dificultades para la negociación",
incorrectas: [
"Obligar a todos los técnicos a trabajar los domingos y festivos sin descanso",
"Aumentar la duración de la jornada laboral por encima de las 40 horas semanales"
]
},
{
enunciado: "La comisión paritaria del convenio tiene como función principal:",
correcta: "La interpretación y vigilancia del cumplimiento de lo pactado en el convenio",
incorrectas: [
"Organizar las vacaciones de Navidad de la dirección del centro sanitario",
"Sancionar disciplinariamente a los técnicos que cometan faltas leves"
]
},
{
enunciado: "Un convenio colectivo de ámbito superior al de empresa requiere para su validez:",
correcta: "El registro, depósito y publicación en el boletín oficial correspondiente (BOE o Boletín Provincial)",
incorrectas: [
"La aprobación por mayoría absoluta en referéndum nacional de técnicos",
"El visto bueno de la cámara de comercio y del colegio oficial de médicos"
]
},
{
enunciado: "El 'descuelgue salarial' o inaplicación de condiciones del convenio procede cuando:",
correcta: "Existen causas económicas, técnicas, organizativas o de producción justificadas",
incorrectas: [
"El empresario desea aumentar su margen de beneficio para comprar nuevos equipos",
"Más del 10% de la plantilla de técnicos se encuentra de baja por enfermedad"
]
},
{
enunciado: "Los acuerdos marcos son convenios que tienen por objeto:",
correcta: "Establecer la estructura de la negociación colectiva y reglas de resolución de conflictos",
incorrectas: [
"Fijar el precio de los análisis clínicos en todos los laboratorios privados",
"Regular el uso de las redes sociales de los técnicos durante la jornada"
]
},
{
enunciado: "La paz laboral durante la vigencia del convenio implica que:",
correcta: "No se puede convocar huelga para modificar lo pactado mientras el convenio esté vigente",
incorrectas: [
"El empresario no puede despedir a ningún trabajador técnico por causas objetivas",
"Los sindicatos deben disolverse una vez que se ha firmado el documento final"
]
},
{
enunciado: "El ámbito funcional de un convenio determina:",
correcta: "Las actividades económicas o sectores a los que resulta de aplicación el acuerdo",
incorrectas: [
"El número de funciones técnicas que puede realizar un auxiliar de laboratorio",
"La cantidad de reactivos químicos que se pueden utilizar por cada turno"
]
},
{
enunciado: "La legitimación para negociar convenios sectoriales estatales corresponde a:",
correcta: "Sindicatos y asociaciones empresariales más representativos a nivel estatal",
incorrectas: [
"Cualquier técnico sanitario que tenga más de veinte años de experiencia profesional",
"Las juntas de personal de los hospitales públicos exclusivamente"
]
},
{
enunciado: "Un convenio colectivo posterior:",
correcta: "Deroga en su integridad al anterior, salvo los aspectos que expresamente se mantengan",
incorrectas: [
"Se suma al anterior creando una norma de doble extensión para los técnicos",
"Es nulo si no mejora en al menos un 10% el salario base del convenio previo"
]
},
{
enunciado: "La impugnación de un convenio colectivo ante la jurisdicción social puede ser por:",
correcta: "Ilegalidad o lesión grave del interés de terceros",
incorrectas: [
"Falta de ortografía en el título del documento registrado oficialmente",
"No haber incluido un plus de transporte para los técnicos que viven cerca"
]
},
{
enunciado: "El principio de jerarquía normativa en el derecho laboral implica que el convenio:",
correcta: "Debe respetar lo establecido en las leyes y disposiciones reglamentarias del Estado",
incorrectas: [
"Está por encima de la Constitución Española en materia de salarios técnicos",
"Puede eliminar el derecho a vacaciones anuales si el sindicato está de acuerdo"
]
},
{
enunciado: "La concurrencia de convenios establece como regla general que:",
correcta: "Un convenio colectivo no podrá ser afectado por lo dispuesto en otro de ámbito distinto",
incorrectas: [
"Siempre se aplica el convenio que sea más antiguo en su fecha de registro",
"El convenio de empresa nunca puede mejorar las condiciones del convenio sectorial"
]
},
{
enunciado: "El ámbito territorial del convenio puede ser:",
correcta: "Local, provincial, autonómico o estatal",
incorrectas: [
"Limitado al edificio físico donde se encuentra ubicado el laboratorio",
"Exclusivamente referido a países del área económica del dólar"
]
},
{
enunciado: "La comisión negociadora en convenios de empresa tiene un límite de:",
correcta: "13 miembros por cada una de las partes",
incorrectas: [
"5 miembros en total sumando ambas representaciones",
"Sin límite, pudiendo asistir todos los técnicos del centro sanitario"
]
},
{
enunciado: "El registro de los convenios colectivos se realiza en:",
correcta: "El Registro de Convenios y Acuerdos Colectivos de Trabajo (REGCON)",
incorrectas: [
"El Registro de la Propiedad Intelectual y Patentes Químicas",
"La base de datos de la Organización Mundial de la Salud"
]
},
{
enunciado: "Las cláusulas obligacionales de un convenio son aquellas que:",
correcta: "Vinculan directamente a las partes firmantes para asegurar la aplicación del convenio",
incorrectas: [
"Obligan al técnico a comprar su propio uniforme de trabajo anualmente",
"Permiten al empresario reducir la jornada sin avisar a los representantes"
]
},
{
enunciado: "El procedimiento negociador comienza con:",
correcta: "La solicitud por escrito de una de las partes a la otra con la propuesta de materias",
incorrectas: [
"Una huelga de brazos caídos en el laboratorio de microbiología",
"La publicación de un anuncio en la prensa nacional de mayor difusión"
]
},
{
enunciado: "La validez de los acuerdos de la comisión negociadora requiere:",
correcta: "El voto favorable de la mayoría de cada una de las representaciones",
incorrectas: [
"La unanimidad de todos los técnicos sanitarios de la provincia afectada",
"La ratificación por parte del consejo de ministros en sesión ordinaria"
]
},
{
enunciado: "El ámbito personal de un convenio define:",
correcta: "Los trabajadores y empresarios incluidos en el campo de aplicación del convenio",
incorrectas: [
"La lista de nombres y apellidos de los técnicos que tienen derecho a plus",
"La edad mínima y máxima para poder trabajar en un laboratorio de análisis"
]
},
{
enunciado: "La interpretación de los convenios en caso de duda corresponde en vía judicial a:",
correcta: "Los órganos de la Jurisdicción Social",
incorrectas: [
"El Tribunal de Cuentas o la Agencia Tributaria",
"Los colegios profesionales de técnicos de laboratorio"
]
},
{
enunciado: "Se consideran convenios 'extraestatutarios' aquellos que:",
correcta: "No cumplen los requisitos del Estatuto de los Trabajadores y solo obligan a los firmantes",
incorrectas: [
"Se negocian fuera del territorio español por técnicos extranjeros",
"Establecen salarios superiores a los 100.000 euros anuales por técnico"
]
},
{
enunciado: "El contenido 'normativo' del convenio colectivo es aquel que:",
correcta: "Se integra en los contratos individuales de trabajo de los trabajadores afectados",
incorrectas: [
"Solo puede ser modificado mediante una ley orgánica del parlamento",
"Desaparece automáticamente si la empresa cambia de dueño o razón social"
]
},
{
enunciado: "La prioridad aplicativa del convenio de empresa sobre el sectorial se da en materias como:",
correcta: "Abono de horas extras, horario, turnos y clasificación profesional",
incorrectas: [
"La duración del descanso mínimo entre jornadas establecido por ley",
"El derecho a la huelga y la libertad sindical de los técnicos"
]
},
{
enunciado: "En la negociación de convenios sectoriales, la comisión no puede exceder de:",
correcta: "15 miembros por cada parte",
incorrectas: [
"50 miembros por cada sindicato representativo",
"Un solo portavoz por cada provincia afectada"
]
},
{
enunciado: "La publicación de un convenio en el boletín oficial es:",
correcta: "Un requisito de eficacia imprescindible y gratuita",
incorrectas: [
"Un trámite opcional que solo se hace si el convenio es muy largo",
"Un servicio que debe pagar el sindicato negociador a la empresa"
]
},
{
enunciado: "Un convenio colectivo puede ser declarado nulo si:",
correcta: "Vulnera la legalidad vigente o los derechos de libertad sindical",
incorrectas: [
"Se firma en un día festivo nacional o autonómico",
"No utiliza el papel oficial de la administración laboral"
]
},
{
enunciado: "La mediación y el arbitraje en la negociación colectiva son:",
correcta: "Sistemas voluntarios de solución extrajudicial de conflictos",
incorrectas: [
"Procedimientos obligatorios antes de poder acudir al baño en el trabajo",
"Técnicas de análisis químico para determinar la pureza de los reactivos"
]
},
{
enunciado: "El convenio colectivo de franja es aquel que afecta a:",
correcta: "Un grupo específico de trabajadores con una categoría o profesión determinada",
incorrectas: [
"Trabajadores que solo prestan servicios en horario de tarde (franja horaria)",
"Técnicos que trabajan en laboratorios situados en la frontera nacional"
]
},
{
enunciado: "La firma del convenio colectivo corresponde a:",
correcta: "Los componentes de la comisión negociadora",
incorrectas: [
"Todos y cada uno de los técnicos sanitarios de la empresa",
"Únicamente al empresario y al inspector de trabajo"
]
}
];