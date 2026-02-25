'use strict';

var PREGUNTAS = [
{
enunciado: "La Ley 31/1995 de Prevención de Riesgos Laborales tiene por objeto:",
correcta: "Promover la seguridad y la salud de los trabajadores mediante la aplicación de medidas y el desarrollo de las actividades necesarias",
incorrectas: [
"Regular exclusivamente el régimen disciplinario y sancionador aplicable a los técnicos de laboratorio",
"Establecer los baremos de las indemnizaciones económicas por accidentes de tráfico 'in itinere'"
]
},
{
enunciado: "Se entiende por 'riesgo laboral':",
correcta: "La posibilidad de que un trabajador sufra un determinado daño derivado del trabajo",
incorrectas: [
"El incumplimiento de los plazos de entrega de los informes de diagnóstico clínico",
"La probabilidad de que la empresa no alcance los beneficios económicos previstos en el ejercicio"
]
},
{
enunciado: "La normativa española de PRL tiene su base jurídica internacional en:",
correcta: "El Convenio 155 de la OIT y la Directiva Marco 89/391/CEE",
incorrectas: [
"El Tratado de Versalles y las resoluciones de la Organización Mundial del Comercio",
"La normativa estadounidense sobre el control de sustancias estupefacientes y psicotrópicas"
]
},
{
enunciado: "El principio de 'sustituir lo peligroso por lo que entrañe poco o ningún peligro' es:",
correcta: "Un principio de la acción preventiva de obligado cumplimiento para el empresario",
incorrectas: [
"Una recomendación facultativa que el técnico superior puede decidir si aplica o no",
"Una medida técnica de aplicación exclusiva en laboratorios de bioseguridad nivel 4"
]
},
{
enunciado: "La evaluación de riesgos debe ser realizada por:",
correcta: "Personal con formación técnica específica en prevención de riesgos laborales",
incorrectas: [
"El técnico superior de laboratorio con menor antigüedad en el centro sanitario",
"Una gestoría administrativa externa encargada de la contabilidad de la empresa"
]
},
{
enunciado: "La vigilancia de la salud será obligatoria para el trabajador cuando:",
correcta: "Sea imprescindible para evaluar los efectos de las condiciones de trabajo o existan riesgos para terceros",
incorrectas: [
"El director técnico del laboratorio desee conocer el historial clínico previo del personal",
"La mutua de accidentes necesite reducir el gasto en prestaciones por incapacidad temporal"
]
},
{
enunciado: "La formación preventiva debe impartirse:",
correcta: "Tanto en el momento de la contratación como cuando se produzcan cambios en las funciones o tecnologías",
incorrectas: [
"Únicamente a través de manuales en formato digital sin necesidad de tutorización presencial",
"Una sola vez durante la carrera profesional del técnico superior de laboratorio"
]
},
{
enunciado: "Los Delegados de Prevención tienen derecho a:",
correcta: "Ser consultados por el empresario sobre las decisiones que afecten a la seguridad y salud",
incorrectas: [
"Paralizar la producción del laboratorio de forma unilateral por motivos de eficiencia económica",
"Acceder a los datos médicos personales de todos los trabajadores sin su consentimiento expreso"
]
},
{
enunciado: "El Comité de Seguridad y Salud es obligatorio en centros que cuenten con:",
correcta: "50 o más trabajadores",
incorrectas: [
"Al menos un técnico superior de laboratorio titulado por cada departamento",
"Dos o más sedes físicas ubicadas en diferentes provincias del territorio nacional"
]
},
{
enunciado: "Los Equipos de Protección Individual (EPI) deben poseer:",
correcta: "El marcado CE de conformidad y folleto informativo del fabricante en castellano",
incorrectas: [
"La firma de aprobación de todos los técnicos del laboratorio donde se vayan a utilizar",
"Un seguro de responsabilidad civil específico para el caso de fallo del material"
]
},
{
enunciado: "La planificación de la prevención debe revisarse cuando:",
correcta: "Se ponga de manifiesto la ineficacia de las medidas tras un accidente o incidente",
incorrectas: [
"Cambie el precio de mercado de los reactivos químicos utilizados en los análisis",
"El laboratorio decida ampliar su cartera de servicios de diagnóstico a otras áreas"
]
},
{
enunciado: "El deber de protección del empresario es:",
correcta: "De carácter permanente, dinámico y no se agota con el cumplimiento formal de la ley",
incorrectas: [
"Limitado a la entrega inicial de los equipos de protección y manuales de seguridad",
"Delegable íntegramente en los técnicos superiores de laboratorio que supervisan el trabajo"
]
},
{
enunciado: "Se considera 'riesgo laboral grave e inminente' aquel que:",
correcta: "Sea racionalmente probable que se materialice en un futuro próximo con daños importantes",
incorrectas: [
"Afecte a la integridad estructural del edificio pero no a la salud de las personas",
"Haya sido detectado por un inspector de trabajo pero no haya causado lesiones aún"
]
},
{
enunciado: "El trabajador tiene la obligación de:",
correcta: "Informar de inmediato sobre cualquier situación que a su juicio entrañe un riesgo para la seguridad",
incorrectas: [
"Realizar el mantenimiento correctivo de la maquinaria de diagnóstico de alta complejidad",
"Pagar de su propio sueldo la reposición de los guantes de látex que haya utilizado"
]
},
{
enunciado: "La integración de la prevención implica que:",
correcta: "Debe estar presente en el conjunto de actividades y en todos los niveles jerárquicos",
incorrectas: [
"Solo los directivos tienen responsabilidad legal sobre los accidentes que ocurran",
"Debe existir un departamento estanco encargado exclusivamente de los temas de salud"
]
},
{
enunciado: "El Plan de Prevención de Riesgos Laborales es:",
correcta: "El documento que articula el sistema de gestión preventiva en la empresa",
incorrectas: [
"El cuadrante de turnos y vacaciones aprobado por el comité de empresa",
"La memoria económica anual que se presenta en el Registro Mercantil"
]
},
{
enunciado: "La vigilancia de la salud debe respetar siempre:",
correcta: "El derecho a la intimidad y la dignidad de la persona y la confidencialidad de los datos",
incorrectas: [
"El derecho del empresario a conocer el diagnóstico exacto de la enfermedad del técnico",
"La obligación de publicar los resultados de los análisis clínicos en el tablón de anuncios"
]
},
{
enunciado: "En centros de trabajo compartidos por varias empresas:",
correcta: "Existe un deber de coordinación de actividades preventivas para informar sobre los riesgos propios",
incorrectas: [
"Cada empresa debe ignorar los riesgos de las demás para evitar conflictos de competencia",
"La empresa de mayor tamaño asume automáticamente la responsabilidad civil de todas las demás"
]
},
{
enunciado: "La formación preventiva recibida por el trabajador:",
correcta: "Se considera tiempo de trabajo efectivo a todos los efectos",
incorrectas: [
"Debe recuperarse prolongando la jornada laboral sin compensación económica",
"Solo es válida si ha sido impartida por una universidad pública de medicina"
]
},
{
enunciado: "Los equipos de protección colectiva tienen prioridad sobre:",
correcta: "Los equipos de protección individual (EPI)",
incorrectas: [
"Las medidas de señalización de seguridad de los pasillos del centro",
"La formación teórica impartida a los técnicos superiores de laboratorio"
]
},
{
enunciado: "Se entiende por 'condición de trabajo':",
correcta: "Cualquier característica del trabajo que pueda tener una influencia significativa en la generación de riesgos",
incorrectas: [
"Únicamente el salario neto y los complementos por peligrosidad percibidos por el técnico",
"El estado civil y la situación familiar del trabajador que realiza los análisis clínicos"
]
},
{
enunciado: "La responsabilidad penal en materia de PRL surge cuando:",
correcta: "Se pone en peligro grave la vida o integridad por infracción de normas de seguridad",
incorrectas: [
"No se han registrado correctamente los tiempos de descanso en el libro de personal",
"El laboratorio ha cometido un error administrativo en la facturación a un cliente"
]
},
{
enunciado: "El recurso preventivo es una figura que:",
correcta: "Vigila el cumplimiento de las medidas preventivas en actividades de especial peligrosidad",
incorrectas: [
"Sustituye al técnico superior de laboratorio cuando este se encuentra de baja médica",
"Se encarga de la gestión de las nóminas y contratos de trabajo de la plantilla sanitaria"
]
},
{
enunciado: "La documentación preventiva debe estar a disposición de:",
correcta: "La autoridad laboral, la autoridad sanitaria y los representantes de los trabajadores",
incorrectas: [
"Cualquier paciente que acuda al centro de diagnóstico a solicitar un análisis",
"Las empresas de la competencia que operen en la misma zona geográfica"
]
},
{
enunciado: "El incumplimiento de las obligaciones preventivas por el trabajador:",
correcta: "Tendrá la consideración de incumplimiento laboral a efectos sancionadores",
incorrectas: [
"No tiene ninguna consecuencia legal si el técnico posee una titulación superior",
"Supone la pérdida automática y definitiva de su título oficial de grado superior"
]
},
{
enunciado: "Las auditorías preventivas son obligatorias para:",
correcta: "Empresas que no hayan concertado el servicio de prevención con una entidad ajena",
incorrectas: [
"Laboratorios de análisis que facturen menos de un millón de euros anuales",
"Pequeñas empresas que tengan menos de seis trabajadores en su plantilla"
]
},
{
enunciado: "El concepto de 'prevención' según la LPRL incluye:",
correcta: "Seguridad en el trabajo, higiene industrial, ergonomía y psicosociología aplicada",
incorrectas: [
"Derecho mercantil, contabilidad analítica, marketing y gestión de recursos humanos",
"Microbiología clínica, hematología, bioquímica y anatomía patológica"
]
},
{
enunciado: "El recargo de prestaciones es una sanción que consiste en:",
correcta: "Aumentar las prestaciones económicas de la Seguridad Social a cargo del empresario infractor",
incorrectas: [
"Obligar al técnico superior a trabajar horas extras sin remuneración por haber causado el daño",
"Reducir la base imponible del Impuesto sobre Sociedades por haber invertido en seguridad"
]
},
{
enunciado: "La Directiva 89/391/CEE establece que el trabajador:",
correcta: "No debe soportar ningún coste financiero derivado de las medidas de seguridad y salud",
incorrectas: [
"Debe pagar el 50% de los equipos de protección individual que utilice en el laboratorio",
"Es el único responsable de evaluar los riesgos de su propio puesto de trabajo"
]
},
{
enunciado: "En la evaluación de riesgos, se debe tener en cuenta especialmente a:",
correcta: "Trabajadores especialmente sensibles, embarazadas y menores",
incorrectas: [
"Técnicos que tengan una titulación académica de nivel inferior al grado superior",
"Personal administrativo que no tenga contacto directo con las muestras biológicas"
]
},
{
enunciado: "La actuación en caso de emergencia debe estar recogida en:",
correcta: "El plan de emergencia y evacuación",
incorrectas: [
"El convenio colectivo del sector de laboratorios de análisis clínicos",
"El manual de calidad de los procesos de diagnóstico microbiológico"
]
},
{
enunciado: "La señalización de seguridad se utiliza cuando:",
correcta: "No ha sido posible eliminar el riesgo o protegerlo colectivamente de forma suficiente",
incorrectas: [
"La dirección del laboratorio desea decorar las instalaciones con carteles de colores",
"Se quiere sustituir la formación obligatoria de los técnicos por avisos visuales"
]
},
{
enunciado: "El empresario debe proporcionar a los trabajadores EPI que sean:",
correcta: "Adecuados a los riesgos de los que deban proteger sin suponer un riesgo adicional",
incorrectas: [
"De la marca comercial más barata disponible en el mercado internacional de suministros",
"Los mismos para todo el personal independientemente de sus características físicas"
]
},
{
enunciado: "Se considera 'infracción muy grave' en materia de PRL:",
correcta: "La paralización de la actividad de los servicios de prevención sin causa justificada",
incorrectas: [
"El retraso de un día en la entrega del informe de evaluación de riesgos a los delegados",
"La falta de limpieza en las áreas comunes de descanso del personal del laboratorio"
]
},
{
enunciado: "La consulta a los trabajadores sobre prevención debe ser:",
correcta: "Previa a la adopción de las decisiones y de forma que puedan realizar propuestas",
incorrectas: [
"Posterior a la implementación de las medidas para no retrasar el trabajo técnico",
"Limitada a aquellos técnicos que formen parte de la dirección de la empresa"
]
},
{
enunciado: "La protección de la maternidad en PRL obliga a:",
correcta: "Adaptar las condiciones o el tiempo de trabajo y, si no es posible, cambiar de puesto",
incorrectas: [
"Conceder el despido inmediato con derecho a indemnización por riesgo biológico",
"Obligar a la técnica superior a realizar exclusivamente tareas administrativas sin sueldo"
]
},
{
enunciado: "El Servicio de Prevención Propio es obligatorio si la empresa tiene:",
correcta: "Más de 500 trabajadores",
incorrectas: [
"Más de tres laboratorios de diagnóstico en una misma comunidad autónoma",
"Un volumen de facturación superior a los diez millones de euros anuales"
]
},
{
enunciado: "La Inspección de Trabajo tiene potestad para:",
correcta: "Entrar libremente en el centro de trabajo y paralizar tareas en caso de riesgo inminente",
incorrectas: [
"Modificar los diagnósticos clínicos realizados por los técnicos superiores del centro",
"Despedir directamente a los trabajadores que no utilicen correctamente los EPI"
]
},
{
enunciado: "Se entiende por 'incidente laboral' aquel suceso:",
correcta: "Acaecido en el curso del trabajo que no ha producido lesiones pero podría haberlas causado",
incorrectas: [
"Que termina siempre con el fallecimiento o gran invalidez de un técnico de laboratorio",
"Derivado de la vida privada del trabajador fuera de las instalaciones del centro sanitario"
]
},
{
enunciado: "La LPRL establece que los costes de las medidas de seguridad:",
correcta: "No deberán recaer en modo alguno sobre los trabajadores",
incorrectas: [
"Serán financiados al 50% por el Estado y al 50% por los técnicos superiores",
"Se detraerán mensualmente de los complementos de productividad de la plantilla"
]
},
{
enunciado: "La designación de trabajadores para actividades preventivas requiere que:",
correcta: "Tengan la capacidad necesaria y dispongan de tiempo y medios suficientes",
incorrectas: [
"Sean elegidos por sorteo entre los técnicos que tengan menos carga de trabajo",
"Hayan sufrido previamente un accidente de trabajo en el laboratorio clínico"
]
},
{
enunciado: "La prevención de riesgos es una materia:",
correcta: "Multidisciplinar que requiere la colaboración de diferentes especialistas",
incorrectas: [
"Puramente administrativa basada en el cumplimiento de formularios impresos",
"Que no afecta a los técnicos de laboratorio por ser una profesión sin riesgos"
]
},
{
enunciado: "El derecho a la información preventiva significa que el trabajador debe conocer:",
correcta: "Los riesgos de su puesto de trabajo y las medidas de protección y emergencia",
incorrectas: [
"El balance de situación y la cuenta de pérdidas y ganancias de la sociedad",
"La vida privada y los méritos académicos de todos sus superiores jerárquicos"
]
},
{
enunciado: "El principio de 'anteponer la protección colectiva a la individual' se aplica:",
correcta: "Siempre, salvo que técnicamente no sea posible proteger al grupo de forma eficaz",
incorrectas: [
"Solo cuando los técnicos de laboratorio se nieguen a utilizar mascarillas y guantes",
"Cuando la empresa desee proyectar una imagen moderna ante los medios de comunicación"
]
}
];
