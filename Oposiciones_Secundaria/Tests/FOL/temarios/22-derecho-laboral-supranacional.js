'use strict';

var PREGUNTAS = [
{
enunciado: "En el Derecho Comunitario, el 'Derecho Originario' está constituido por:",
correcta: "Los Tratados fundacionales y sus modificaciones posteriores",
incorrectas: [
"Las sentencias dictadas por los Tribunales Superiores de Justicia de los Estados",
"Los Reglamentos aprobados por la Comisión Europea en materia técnica"
]
},
{
enunciado: "Un 'Reglamento' de la Unión Europea se caracteriza por:",
correcta: "Tener alcance general, ser obligatorio en todos sus elementos y directamente aplicable",
incorrectas: [
"Obligar al Estado miembro solo en cuanto al resultado, dejando libertad de forma",
"Ser una recomendación no vinculante para los sectores de la sanidad privada"
]
},
{
enunciado: "¿Qué diferencia a una 'Directiva' de un Reglamento comunitario?",
correcta: "La Directiva exige una transposición al derecho interno de cada Estado miembro",
incorrectas: [
"La Directiva solo es aplicable a las instituciones de la propia Unión Europea",
"El Reglamento solo tiene validez si es ratificado por el Parlamento nacional"
]
},
{
enunciado: "La Organización Internacional del Trabajo (OIT) tiene una estructura 'tripartita' porque participan:",
correcta: "Gobiernos, empleadores y trabajadores de los Estados miembros",
incorrectas: [
"Los poderes legislativo, ejecutivo y judicial de las Naciones Unidas",
"Médicos, técnicos de laboratorio y personal administrativo sanitario"
]
},
{
enunciado: "Las 'Decisiones' de la Unión Europea son normas que:",
correcta: "Son obligatorias para sus destinatarios, ya sean Estados o particulares",
incorrectas: [
"No tienen carácter vinculante y funcionan como dictámenes consultivos",
"Modifican directamente el texto constitucional de los países miembros"
]
},
{
enunciado: "¿Qué sucede si una norma nacional contradice lo dispuesto en un Reglamento Comunitario?",
correcta: "Prevalece el Reglamento de la UE en virtud del principio de primacía",
incorrectas: [
"La norma nacional se mantiene vigente hasta que expire su plazo de validez",
"El conflicto debe ser resuelto mediante un referéndum en el Estado afectado"
]
},
{
enunciado: "Los Convenios de la OIT solo obligan a España cuando:",
correcta: "Han sido ratificados por España y publicados en el BOE",
incorrectas: [
"Son aprobados por la mayoría de los sindicatos del sector sanitario",
"Se mencionan en el preámbulo de cualquier Ley Orgánica del Estado"
]
},
{
enunciado: "El principio de 'efecto directo' del Derecho Comunitario implica que:",
correcta: "Los particulares pueden invocar normas europeas ante sus tribunales nacionales",
incorrectas: [
"Las leyes europeas se aplican antes en los países con mayor renta per cápita",
"Las directivas no necesitan ser publicadas para entrar en vigor de inmediato"
]
},
{
enunciado: "La función de los Estados miembros en la aplicación del derecho derivado consiste en:",
correcta: "Adoptar todas las medidas de derecho interno necesarias para su efectividad",
incorrectas: [
"Reescribir los reglamentos para adaptarlos a sus intereses comerciales",
"Elegir qué artículos de los tratados originarios desean cumplir cada año"
]
},
{
enunciado: "¿Cuál es el principal objetivo de las Directivas de la UE en materia laboral?",
correcta: "Armonizar las legislaciones nacionales manteniendo unos niveles mínimos de protección",
incorrectas: [
"Unificar el salario mínimo de todos los trabajadores de la Unión Europea",
"Sustituir a los inspectores de trabajo nacionales por funcionarios de Bruselas"
]
},
{
enunciado: "La Carta de los Derechos Fundamentales de la Unión Europea tiene:",
correcta: "El mismo valor jurídico que los Tratados (Derecho Originario)",
incorrectas: [
"Un carácter meramente informativo para los tribunales de lo social",
"Rango de ley ordinaria subordinada a los reglamentos de la Comisión"
]
},
{
enunciado: "Las 'Recomendaciones' y 'Dictámenes' de la UE se distinguen por:",
correcta: "No tener carácter vinculante para los Estados miembros",
incorrectas: [
"Ser obligatorios solo para los países que han adoptado el euro",
"Requerir mayoría absoluta en el Parlamento Europeo para su validez"
]
},
{
enunciado: "La OIT fue creada en 1919 bajo el marco del:",
correcta: "Tratado de Versalles",
incorrectas: [
"Tratado de Roma",
"Tratado de Maastricht"
]
},
{
enunciado: "En el Derecho Comunitario, el control de la legalidad de las normas corresponde a:",
correcta: "El Tribunal de Justicia de la Unión Europea (TJUE)",
incorrectas: [
"El Tribunal Penal Internacional con sede en La Haya",
"La Organización para la Cooperación y el Desarrollo Económico (OCDE)"
]
},
{
enunciado: "El principio de 'subsidiariedad' en la Unión Europea establece que:",
correcta: "La Unión actúa solo si los objetivos no pueden ser alcanzados de forma suficiente por los Estados",
incorrectas: [
"Todas las normas laborales deben ser aprobadas primero por los ayuntamientos",
"Las empresas privadas tienen prioridad sobre el Estado en la creación de leyes"
]
},
{
enunciado: "Un ejemplo de materia laboral regulada frecuentemente por Directivas europeas es:",
correcta: "La ordenación del tiempo de trabajo y la seguridad y salud laboral",
incorrectas: [
"La cuantía exacta de las dietas por desplazamiento en el sector privado",
"El color de los uniformes del personal técnico en laboratorios clínicos"
]
},
{
enunciado: "La 'transposición' de una Directiva debe realizarse en:",
correcta: "El plazo previsto en la propia Directiva, bajo riesgo de sanción por incumplimiento",
incorrectas: [
"Un periodo máximo de seis meses tras la celebración de elecciones nacionales",
"Cualquier momento, ya que las Directivas no tienen caducidad para los Estados"
]
},
{
enunciado: "Las normas de la OIT que no son Convenios se denominan:",
correcta: "Recomendaciones, que ofrecen directrices para las políticas nacionales",
incorrectas: [
"Decretos leyes de obligado cumplimiento internacional",
"Contratos tipo para la contratación de personal sanitario extranjero"
]
},
{
enunciado: "El Reglamento Comunitario entra en vigor:",
correcta: "En la fecha que él mismo fije o a los 20 días de su publicación en el DOUE",
incorrectas: [
"Cuando el Presidente del Gobierno español firma el decreto de aplicación",
"Inmediatamente después de ser leído en las noticias de la televisión oficial"
]
},
{
enunciado: "La libre circulación de trabajadores en la UE permite:",
correcta: "Acceder a un empleo en cualquier Estado miembro en igualdad de condiciones que sus nacionales",
incorrectas: [
"Ejercer la profesión sin necesidad de poseer ninguna titulación técnica",
"Percibir el subsidio de desempleo de dos países diferentes simultáneamente"
]
},
{
enunciado: "El Derecho Derivado de la Unión Europea emana fundamentalmente de:",
correcta: "El Parlamento Europeo junto con el Consejo, a propuesta de la Comisión",
incorrectas: [
"La Asamblea General de las Naciones Unidas en Nueva York",
"Los Ministerios de Trabajo de los veintisiete países miembros de forma unánime"
]
},
{
enunciado: "¿Qué función cumple el Comité Económico y Social Europeo (CESE)?",
correcta: "Órgano consultivo que representa a los interlocutores sociales y grupos de interés",
incorrectas: [
"Tribunal encargado de sancionar a las empresas que no cumplen los horarios",
"Banco central destinado a la financiación de hospitales públicos europeos"
]
},
{
enunciado: "La aplicación del Derecho Comunitario por los jueces nacionales implica que:",
correcta: "Son los encargados de asegurar la plena eficacia de las normas europeas",
incorrectas: [
"Deben consultar al Gobierno antes de aplicar cualquier Reglamento de la UE",
"Solo pueden aplicar leyes españolas en los juicios de reclamación de cantidad"
]
},
{
enunciado: "Los Reglamentos de la UE no necesitan transposición porque gozan de:",
correcta: "Aplicabilidad directa",
incorrectas: [
"Inmunidad diplomática",
"Carencia de efectos jurídicos"
]
},
{
enunciado: "En la OIT, la 'Memoria' anual que envían los Estados sirve para:",
correcta: "Controlar el grado de cumplimiento de los Convenios ratificados",
incorrectas: [
"Solicitar préstamos económicos para la modernización de laboratorios",
"Listar los nombres de todos los trabajadores técnicos del país"
]
},
{
enunciado: "El Derecho Comunitario en materia de igualdad de género ha sido impulsado principalmente por:",
correcta: "Directivas que prohíben la discriminación en el acceso al empleo y salario",
incorrectas: [
"Reglamentos que obligan a usar el mismo nombre en todos los contratos",
"Decisiones individuales que afectan a cada trabajador de forma separada"
]
},
{
enunciado: "La 'Cuestión Prejudicial' ante el TJUE permite a un juez español:",
correcta: "Consultar sobre la interpretación o validez de una norma comunitaria aplicable al caso",
incorrectas: [
"Pedir permiso para dictar una sentencia condenatoria contra una empresa pública",
"Solicitar el traslado del juicio a una sede judicial en Bruselas o Luxemburgo"
]
},
{
enunciado: "La competencia de la UE para legislar en materia laboral es:",
correcta: "Compartida con los Estados miembros",
incorrectas: [
"Exclusiva de la Unión e impide cualquier ley nacional",
"Inexistente, ya que la UE solo regula aspectos comerciales"
]
},
{
enunciado: "El 'Diálogo Social Europeo' busca acuerdos entre:",
correcta: "Las organizaciones sindicales y empresariales a nivel de la Unión",
incorrectas: [
"Los pacientes y los directivos de los centros sanitarios privados",
"Los estudiantes de ciclos formativos y las universidades europeas"
]
},
{
enunciado: "La constitución de la OIT establece que la paz universal solo puede basarse en:",
correcta: "La justicia social",
incorrectas: [
"El libre comercio",
"El equilibrio militar"
]
},
{
enunciado: "Un Estado que ratifica un Convenio de la OIT se compromete a:",
correcta: "Incorporarlo a su legislación nacional y velar por su aplicación efectiva",
incorrectas: [
"Pagar una cuota anual proporcional al número de trabajadores técnicos",
"Traducir todas sus leyes laborales a los idiomas oficiales de la ONU"
]
},
{
enunciado: "Las Directivas laborales suelen establecer 'cláusulas de no regresión', lo que impide:",
correcta: "Reducir el nivel de protección nacional existente alegando la aplicación de la Directiva",
incorrectas: [
"Volver a contratar a trabajadores que han sido despedidos por causas técnicas",
"Modificar el calendario laboral una vez que ha sido aprobado por el Ministerio"
]
},
{
enunciado: "La primacía del Derecho de la Unión fue establecida por la jurisprudencia del TJUE en el caso:",
correcta: "Costa contra ENEL",
incorrectas: [
"Marbury contra Madison",
"Roe contra Wade"
]
},
{
enunciado: "La Agencia Europea para la Seguridad y la Salud en el Trabajo (EU-OSHA) tiene como función:",
correcta: "Proporcionar información técnica y científica para mejorar el entorno laboral",
incorrectas: [
"Inspeccionar físicamente cada laboratorio sanitario de la Unión Europea",
"Sancionar económicamente a los trabajadores que no usen los EPIs"
]
},
{
enunciado: "En la jerarquía del Derecho de la UE, las normas de Derecho Derivado:",
correcta: "Están subordinadas a los Tratados (Derecho Originario)",
incorrectas: [
"Tienen mayor rango que los Tratados fundacionales de la Unión",
"Son de aplicación voluntaria para los países con sistemas de derecho civil"
]
},
{
enunciado: "El 'DOUE' es el acrónimo de:",
correcta: "Diario Oficial de la Unión Europea",
incorrectas: [
"Documento Ordinario de Urgencia Española",
"Departamento de Ordenación Universitaria Europea"
]
},
{
enunciado: "Las funciones de la OIT incluyen la asistencia técnica para:",
correcta: "Ayudar a los países a desarrollar legislaciones y sistemas de inspección laboral",
incorrectas: [
"Reparar la maquinaria defectuosa de los laboratorios públicos estatales",
"Gestionar las nóminas de las empresas con dificultades financieras"
]
},
{
enunciado: "La libre prestación de servicios en la UE permite a una empresa sanitaria:",
correcta: "Ofrecer sus servicios en otro Estado miembro de forma temporal sin establecerse en él",
incorrectas: [
"Evitar el cumplimiento de las normas de seguridad del país de destino",
"Contratar a personal sin contrato legal aprovechando el desplazamiento"
]
},
{
enunciado: "La Conferencia Internacional del Trabajo se reúne con una periodicidad:",
correcta: "Anual",
incorrectas: [
"Cada diez años",
"Mensual"
]
},
{
enunciado: "La jurisprudencia del TJUE en materia de vacaciones anuales ha establecido que:",
correcta: "Es un principio del derecho social de la Unión de especial importancia",
incorrectas: [
"Se pueden sustituir por una compensación económica si el trabajador lo prefiere",
"Solo tienen derecho a ellas los trabajadores con contrato indefinido"
]
}
];