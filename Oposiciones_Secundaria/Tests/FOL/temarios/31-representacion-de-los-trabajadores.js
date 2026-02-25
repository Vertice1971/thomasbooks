'use strict';

var PREGUNTAS = [
{
enunciado: "Los delegados de personal son los órganos de representación de los trabajadores en empresas de:",
correcta: "Más de 10 y menos de 50 trabajadores",
incorrectas: [
"Exactamente 100 trabajadores fijos en plantilla",
"Cualquier número de empleados siempre que sean técnicos superiores"
]
},
{
enunciado: "En empresas de entre 6 y 10 trabajadores, podrá haber un delegado de personal si:",
correcta: "Así lo deciden los trabajadores por mayoría",
incorrectas: [
"Lo solicita la dirección técnica del laboratorio",
"El Ministerio de Trabajo impone la tutoría sindical"
]
},
{
enunciado: "El Comité de Empresa es el órgano representativo y colegiado en centros de trabajo con:",
correcta: "50 o más trabajadores",
incorrectas: [
"Al menos 25 trabajadores con titulación universitaria",
"Más de 500 empleados exclusivamente en el sector público"
]
},
{
enunciado: "El número de miembros del Comité de Empresa se determina en función de:",
correcta: "La escala establecida en el Estatuto de los Trabajadores según el número de empleados",
incorrectas: [
"El volumen de beneficios anuales obtenidos por la empresa",
"La cantidad de secciones sindicales que operen en la provincia"
]
},
{
enunciado: "Son electores y elegibles para los órganos de representación los trabajadores:",
correcta: "Mayores de 16 años con 1 mes de antigüedad (electores) y 18 años con 6 meses (elegibles)",
incorrectas: [
"Únicamente aquellos con contrato indefinido y jornada completa",
"Solo los que posean la nacionalidad española y 10 años de servicios"
]
},
{
enunciado: "La duración del mandato de los delegados de personal y miembros del Comité es de:",
correcta: "Cuatro años, entendiéndose prorrogado si no se promueven nuevas elecciones",
incorrectas: [
"Dos años sin posibilidad de reelección consecutiva",
"Vitalicio mientras el trabajador permanezca en la misma categoría"
]
},
{
enunciado: "El 'crédito de horas mensuales retribuidas' es una garantía que permite a los representantes:",
correcta: "Disponer de tiempo para el ejercicio de sus funciones de representación",
incorrectas: [
"Cobrar horas extraordinarias sin necesidad de realizarlas efectivamente",
"Ausentarse de su puesto para realizar gestiones bancarias personales"
]
},
{
enunciado: "En caso de despido de un representante por faltas graves, es obligatorio tramitar:",
correcta: "Un expediente contradictorio donde se oiga al interesado y al resto de representantes",
incorrectas: [
"Una denuncia previa ante la fiscalía de menores de la localidad",
"La baja automática del trabajador en la Seguridad Social sin previo aviso"
]
},
{
enunciado: "Los representantes de los trabajadores tienen prioridad de permanencia en la empresa en casos de:",
correcta: "Suspensión o extinción por causas tecnológicas, económicas, organizativas o de producción",
incorrectas: [
"Jubilación forzosa por cumplimiento de la edad reglamentaria",
"Traslado voluntario del centro de trabajo a otra comunidad autónoma"
]
},
{
enunciado: "El Comité de Empresa tiene competencia para recibir información trimestral sobre:",
correcta: "La evolución general del sector económico y la situación de la producción de la empresa",
incorrectas: [
"El estado civil y la orientación religiosa de los nuevos contratados",
"Las claves de acceso personales a los correos electrónicos de la dirección"
]
},
{
enunciado: "El derecho de reunión de los trabajadores en la empresa se ejerce a través de:",
correcta: "La asamblea de trabajadores",
incorrectas: [
"El consejo de administración de la sociedad anónima",
"La junta de accionistas mayoritarios del laboratorio"
]
},
{
enunciado: "La convocatoria de una asamblea debe ser comunicada al empresario con una antelación de:",
correcta: "48 horas",
incorrectas: [
"10 días naturales",
"Una hora"
]
},
{
enunciado: "El empresario puede negarse a la celebración de una asamblea en el centro de trabajo si:",
correcta: "No han transcurrido dos meses desde la última reunión, salvo casos excepcionales",
incorrectas: [
"Los trabajadores pretenden hablar sobre las condiciones de seguridad técnica",
"La asamblea coincide con el horario de mayor productividad del laboratorio"
]
},
{
enunciado: "Las decisiones de la asamblea que afecten a toda la plantilla requieren para su validez:",
correcta: "El voto favorable de la mitad más uno de los trabajadores",
incorrectas: [
"La aprobación por escrito del director de recursos humanos",
"El visto bueno de la oficina de correos más cercana al centro"
]
},
{
enunciado: "Los delegados de personal ejercen ante el empresario la representación que ostentan:",
correcta: "De forma mancomunada",
incorrectas: [
"De forma independiente y sin necesidad de consultar entre ellos",
"Bajo la supervisión directa del jefe de personal del centro"
]
},
{
enunciado: "¿Quién preside el Comité de Empresa?",
correcta: "Un presidente elegido de entre sus miembros",
incorrectas: [
"El trabajador con mayor antigüedad técnica de la plantilla",
"El empresario o la persona en quien este delegue"
]
},
{
enunciado: "El deber de sigilo profesional de los representantes les prohíbe:",
correcta: "Utilizar la información confidencial de la empresa para fines ajenos a la representación",
incorrectas: [
"Hablar con los inspectores de trabajo durante las visitas reglamentarias",
"Informar a los trabajadores sobre el convenio colectivo aplicable"
]
},
{
enunciado: "La Mesa Electoral en las elecciones a representantes tiene la función de:",
correcta: "Vigilar todo el proceso electoral, presidir la votación y realizar el escrutinio",
incorrectas: [
"Seleccionar a los candidatos que mejor se lleven con la dirección técnica",
"Decidir el salario que cobrarán los delegados durante su mandato"
]
},
{
enunciado: "El centro de trabajo debe facilitar un local adecuado para los representantes en:",
correcta: "Empresas o centros de trabajo con más de 250 trabajadores",
incorrectas: [
"Centros con al menos 10 técnicos de laboratorio contratados",
"Cualquier empresa que trabaje con productos químicos peligrosos"
]
},
{
enunciado: "La garantía de libertad de expresión de los representantes permite:",
correcta: "Publicar y distribuir información de interés laboral y social en el centro",
incorrectas: [
"Revelar secretos industriales a empresas de la competencia directa",
"Difamar personalmente a los pacientes que acuden al centro sanitario"
]
},
{
enunciado: "En centros de hasta 30 trabajadores, el número de delegados de personal es de:",
correcta: "Uno",
incorrectas: [
"Tres",
"Cinco"
]
},
{
enunciado: "En centros de entre 31 y 49 trabajadores, el número de delegados de personal es de:",
correcta: "Tres",
incorrectas: [
"Uno",
"Siete"
]
},
{
enunciado: "El Comité de Empresa debe elaborar su propio:",
correcta: "Reglamento de procedimiento",
incorrectas: [
"Presupuesto de gastos anuales para viajes de ocio",
"Plan de formación técnica para la dirección del centro"
]
},
{
enunciado: "Los representantes tienen competencia para vigilar el cumplimiento de:",
correcta: "Las normas vigentes en materia laboral, seguridad social y empleo",
incorrectas: [
"La vida privada de los técnicos fuera del horario de laboratorio",
"El pago de los impuestos personales de cada trabajador de la plantilla"
]
},
{
enunciado: "¿Pueden los trabajadores temporales ser electores en las elecciones sindicales?",
correcta: "Sí, si cumplen los requisitos de edad y antigüedad mínima",
incorrectas: [
"No, la ley reserva el derecho de voto exclusivamente a los fijos",
"Solo si su contrato tiene una duración superior a los cinco años"
]
},
{
enunciado: "La impugnación de los actos electorales se realiza ante:",
correcta: "La oficina pública dependiente de la autoridad laboral",
incorrectas: [
"El juzgado de paz del domicilio del empresario",
"La fiscalía general del Estado por vía de urgencia"
]
},
{
enunciado: "El Comité Conjunto se constituye cuando la empresa tiene:",
correcta: "Dos o más centros de trabajo en la misma provincia que no suman 50 trabajadores cada uno",
incorrectas: [
"Sucursales en diferentes países de la Unión Europea exclusivamente",
"Menos de 6 trabajadores en total sumando todos sus centros de análisis"
]
},
{
enunciado: "Los representantes deben ser informados de todas las sanciones impuestas por faltas:",
correcta: "Muy graves",
incorrectas: [
"Leves",
"Ocasionales"
]
},
{
enunciado: "El tiempo de consultas en un despido colectivo requiere la intervención de:",
correcta: "El Comité de Empresa o los delegados de personal",
incorrectas: [
"El decano de la facultad de medicina más cercana al centro",
"La totalidad de los pacientes que hayan usado el servicio ese año"
]
},
{
enunciado: "La condición de representante de los trabajadores se pierde por:",
correcta: "Dimisión, revocación del mandato o finalización del contrato laboral",
incorrectas: [
"Cumplir 50 años de edad independientemente de la situación laboral",
"Cambiar de marca de bata técnica de laboratorio durante el servicio"
]
},
{
enunciado: "La revocación de los representantes solo puede ser acordada por:",
correcta: "Los trabajadores que los eligieron mediante asamblea convocada al efecto",
incorrectas: [
"El empresario tras acreditar falta de productividad en el laboratorio",
"El Ministerio de Sanidad por razones de interés público nacional"
]
},
{
enunciado: "El Comité de Empresa tiene derecho a emitir informe previo a la ejecución de:",
correcta: "Reestructuraciones de plantilla y cierres totales o parciales",
incorrectas: [
"El cambio de color de las paredes de la zona de recepción",
"La compra de material de oficina básico como folios y bolígrafos"
]
},
{
enunciado: "La protección contra el despido de los representantes se extiende hasta:",
correcta: "Un año después de la expiración de su mandato",
incorrectas: [
"Diez años tras haber abandonado la actividad sindical",
"El momento exacto en que entregan el acta de escrutinio"
]
},
{
enunciado: "En las asambleas, la presidencia corresponde a:",
correcta: "El Comité de Empresa o los delegados de personal",
incorrectas: [
"El inspector de trabajo de guardia en esa demarcación",
"El trabajador más joven de la empresa para fomentar la participación"
]
},
{
enunciado: "El empresario debe facilitar un tablón de anuncios para:",
correcta: "Que los representantes publiquen comunicaciones de carácter laboral",
incorrectas: [
"Que los trabajadores vendan objetos personales de segunda mano",
"Colgar las fotos de las vacaciones de la dirección técnica"
]
},
{
enunciado: "La participación de los trabajadores en la empresa es un derecho:",
correcta: "Reconocido en la Constitución Española y el Estatuto de los Trabajadores",
incorrectas: [
"Prohibido por las normas internacionales de libre comercio",
"Opcional que el empresario puede conceder o retirar cada mes"
]
},
{
enunciado: "El número de miembros del Comité para una empresa de 1.000 trabajadores es:",
correcta: "21 miembros",
incorrectas: [
"5 miembros",
"100 miembros"
]
},
{
enunciado: "Los representantes pueden ejercer acciones judiciales en nombre de:",
correcta: "Sus representados y en el ámbito de sus competencias",
incorrectas: [
"Cualquier ciudadano que pase por delante del centro sanitario",
"Los accionistas de la empresa para impugnar el reparto de dividendos"
]
},
{
enunciado: "El derecho a la huelga debe ser comunicado por los representantes con un preaviso de:",
correcta: "5 días naturales (10 en servicios públicos)",
incorrectas: [
"24 horas en todos los casos por razones de urgencia técnica",
"Un mes para que la empresa pueda contratar a otros técnicos"
]
},
{
enunciado: "La composición del Comité de Empresa debe ser:",
correcta: "Proporcional al número de trabajadores de cada colegio electoral",
incorrectas: [
"Formada solo por hombres si el laboratorio es de análisis químicos",
"Decidida por sorteo entre los trabajadores que tengan más de 10 años"
]
}
];
