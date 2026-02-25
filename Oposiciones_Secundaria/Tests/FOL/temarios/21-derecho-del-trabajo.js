'use strict';

var PREGUNTAS = [
{
enunciado: "Para que una actividad sea objeto del Derecho del Trabajo, el trabajo debe ser 'por cuenta ajena', lo que significa:",
correcta: "Que los frutos del trabajo pertenecen al empresario y no al trabajador",
incorrectas: [
"Que el trabajador asume el riesgo económico de las pérdidas de la empresa",
"Que la actividad se realiza exclusivamente en el domicilio del empleador"
]
},
{
enunciado: "¿Cuál es el orden jerárquico correcto de las normas laborales en España?",
correcta: "Constitución, Normas de la UE, Leyes, Reglamentos y Convenios Colectivos",
incorrectas: [
"Convenio Colectivo, Contrato de Trabajo, Leyes y Constitución",
"Leyes Orgánicas, Reglamentos, Constitución y Costumbre laboral"
]
},
{
enunciado: "El principio 'in dubio pro operario' implica que, ante una norma con varios sentidos:",
correcta: "Se debe aplicar la interpretación que resulte más beneficiosa para el trabajador",
incorrectas: [
"La autoridad laboral debe anular la norma por falta de precisión técnica",
"El empresario tiene la facultad de elegir la interpretación que menos costes genere"
]
},
{
enunciado: "La nota de 'dependencia' en el trabajo productivo se refiere a:",
correcta: "Que el trabajador se halla bajo el círculo rector y organizativo del empresario",
incorrectas: [
"La necesidad económica del trabajador de percibir un salario para subsistir",
"La obligación del trabajador de realizar la tarea sin usar medios tecnológicos"
]
},
{
enunciado: "¿Qué supone el principio de 'condición más beneficiosa'?",
correcta: "El mantenimiento de los derechos adquiridos individualmente frente a normas nuevas peores",
incorrectas: [
"La obligación de aplicar siempre el salario más alto de todo el sector nacional",
"La posibilidad de que el trabajador renuncie a sus vacaciones a cambio de dinero"
]
},
{
enunciado: "La 'Costumbre Laboral' solo se aplica como fuente del derecho cuando:",
correcta: "Es local, profesional y no existe una norma legal o convenio aplicable",
incorrectas: [
"El trabajador y el empresario lo acuerdan verbalmente en el contrato",
"Ha sido publicada previamente en el Boletín Oficial del Estado"
]
},
{
enunciado: "El principio de 'irrenunciabilidad de derechos' prohíbe que el trabajador:",
correcta: "Disponga de derechos conferidos por normas legales o convenios colectivos",
incorrectas: [
"Decida voluntariamente cambiar de puesto de trabajo dentro de la empresa",
"Solicite una excedencia para el cuidado de hijos menores de tres años"
]
},
{
enunciado: "En el Derecho del Trabajo, los reglamentos del Gobierno:",
correcta: "No pueden establecer condiciones laborales peores que las fijadas por las Leyes",
incorrectas: [
"Tienen el mismo rango jerárquico que la Constitución Española",
"Pueden modificar libremente lo pactado en los Convenios Colectivos"
]
},
{
enunciado: "El principio 'norma más favorable' se aplica cuando:",
correcta: "Existen dos o más normas en vigor que regulan el mismo conflicto",
incorrectas: [
"El empresario desea sancionar a un trabajador por una falta muy grave",
"No existe ninguna norma escrita y se debe recurrir a la analogía"
]
},
{
enunciado: "Se considera trabajo 'libre' a efectos del Derecho del Trabajo cuando:",
correcta: "La prestación de servicios emana de una decisión voluntaria del individuo",
incorrectas: [
"La actividad no está sujeta a ningún horario ni control por parte de terceros",
"El trabajador puede ausentarse de su puesto sin necesidad de justificación"
]
},
{
enunciado: "¿Cuál es la función del Convenio Colectivo como fuente del derecho?",
correcta: "Regular las condiciones de trabajo y productividad mediante el pacto entre representantes",
incorrectas: [
"Sustituir íntegramente a la Ley en todas las materias de orden público",
"Establecer las sanciones penales para los delitos cometidos en la empresa"
]
},
{
enunciado: "La jerarquía normativa laboral impide que un contrato de trabajo:",
correcta: "Establezca condiciones menos favorables que las legales o convencionales",
incorrectas: [
"Mejore las vacaciones mínimas establecidas en el Estatuto de los Trabajadores",
"Fije un salario superior al mínimo interprofesional vigente"
]
},
{
enunciado: "El 'trabajo productivo' como objeto del Derecho del Trabajo busca:",
correcta: "La obtención de una utilidad económica a cambio de una retribución",
incorrectas: [
"El desarrollo de actividades benéficas o de voluntariado social",
"La realización de tareas domésticas para el propio consumo familiar"
]
},
{
enunciado: "La potestad reglamentaria del Estado en materia laboral corresponde a:",
correcta: "El Gobierno, a través de Reales Decretos u Órdenes Ministeriales",
incorrectas: [
"Las centrales sindicales más representativas a nivel autonómico",
"Los jueces de lo social mediante la emisión de sentencias de instancia"
]
},
{
enunciado: "La aplicación de las normas laborales debe realizarse respetando el principio de:",
correcta: "Legalidad y seguridad jurídica en las relaciones de producción",
incorrectas: [
"Discrecionalidad absoluta del empresario en la interpretación de los contratos",
"Primacía de los usos sociales sobre las leyes orgánicas del Estado"
]
},
{
enunciado: "Un elemento esencial del Derecho del Trabajo es el carácter 'personalísimo', que implica:",
correcta: "Que el trabajador no puede ser sustituido por otra persona en su prestación",
incorrectas: [
"Que el empresario debe conocer la vida privada del empleado antes de contratarlo",
"Que el contrato se extingue automáticamente por el matrimonio del trabajador"
]
},
{
enunciado: "Los Tratados Internacionales forman parte del ordenamiento interno español desde:",
correcta: "Su publicación íntegra en el Boletín Oficial del Estado (BOE)",
incorrectas: [
"Su firma por parte de los representantes diplomáticos en el extranjero",
"Su aprobación por mayoría simple en el Consejo de la Unión Europea"
]
},
{
enunciado: "¿Qué significa que el Derecho del Trabajo es un derecho 'tuitivo'?",
correcta: "Que tiene una función protectora de la parte más débil de la relación",
incorrectas: [
"Que busca exclusivamente la máxima rentabilidad de las empresas privadas",
"Que regula de forma única y estricta la administración pública del Estado"
]
},
{
enunciado: "El principio de 'modernidad' en la interpretación de las leyes laborales aconseja:",
correcta: "Atender a la realidad social del tiempo en que han de ser aplicadas",
incorrectas: [
"Ignorar los precedentes judiciales para aplicar criterios siempre novedosos",
"Priorizar las directrices de las redes sociales sobre el texto legal"
]
},
{
enunciado: "La autonomía de la voluntad en el contrato de trabajo está limitada por:",
correcta: "El cumplimiento de los contenidos mínimos e irrenunciables de la Ley",
incorrectas: [
"La prohibición de negociar mejoras salariales por encima de convenio",
"La obligación de consultar cada cláusula con la inspección de trabajo"
]
},
{
enunciado: "La jurisprudencia del Tribunal Supremo tiene como función:",
correcta: "Complementar el ordenamiento jurídico con la doctrina reiterada",
incorrectas: [
"Crear leyes nuevas de obligado cumplimiento para todos los ciudadanos",
"Anular los convenios colectivos que no le parezcan oportunos"
]
},
{
enunciado: "La 'relación laboral común' se regula principalmente en:",
correcta: "El Real Decreto Legislativo 2/2015, por el que se aprueba el Estatuto de los Trabajadores",
incorrectas: [
"El Código Civil y la Ley de Arrendamientos Urbanos vigente",
"La Ley de Procedimiento Administrativo Común de las Administraciones Públicas"
]
},
{
enunciado: "El principio de 'buena fe' en la relación laboral obliga a:",
correcta: "Actuar con lealtad y honestidad en el cumplimiento de los deberes",
incorrectas: [
"Aceptar cualquier modificación sustancial sin posibilidad de reclamación",
"Revelar secretos industriales de la competencia si el jefe lo solicita"
]
},
{
enunciado: "Se excluyen del Derecho del Trabajo las prestaciones personales obligatorias, como:",
correcta: "La participación en una mesa electoral o el servicio de protección civil",
incorrectas: [
"El trabajo realizado por técnicos superiores en laboratorios privados",
"Las prácticas no laborales de alumnos de ciclos formativos en empresas"
]
},
{
enunciado: "La 'retribución' como nota del trabajo laboral consiste en:",
correcta: "La percepción de un salario a cambio de la puesta a disposición del trabajo",
incorrectas: [
"El pago de los gastos de transporte del domicilio al centro de trabajo",
"La entrega de acciones de la empresa como única forma de pago"
]
},
{
enunciado: "Las Directivas de la Unión Europea en materia laboral deben:",
correcta: "Ser traspuestas al derecho interno por los estados miembros",
incorrectas: [
"Aplicarse directamente sin necesidad de ninguna ley nacional previa",
"Ser aprobadas por referéndum vinculante en cada sector profesional"
]
},
{
enunciado: "La 'presunción de laboralidad' en el ordenamiento español implica que:",
correcta: "Se presume que existe contrato de trabajo entre quien da servicio y quien lo recibe",
incorrectas: [
"Todo trabajador tiene derecho a ser fijo desde el primer día de contrato",
"El empresario siempre tiene la razón en caso de conflicto judicial"
]
},
{
enunciado: "La fuente del derecho 'Convenio de la OIT' tiene rango de:",
correcta: "Tratado Internacional una vez ratificado y publicado",
incorrectas: [
"Recomendación no vinculante para los tribunales de justicia españoles",
"Ley Orgánica de aplicación preferente sobre la Constitución"
]
},
{
enunciado: "El 'trabajo familiar' se excluye de la relación laboral siempre que:",
correcta: "Se realice para parientes convivan con el empresario y no haya salario",
incorrectas: [
"La empresa sea una sociedad limitada con más de cincuenta empleados",
"El familiar posea una titulación técnica superior a la del empresario"
]
},
{
enunciado: "La analogía como método de aplicación normativa consiste en:",
correcta: "Aplicar una norma a un caso no previsto que guarde identidad de razón",
incorrectas: [
"Ignorar la ley para decidir según el sentido común del evaluador",
"Utilizar leyes de otros países para resolver conflictos nacionales"
]
},
{
enunciado: "El principio 'pro operario' no se puede aplicar cuando:",
correcta: "La norma es clara y no admite dudas interpretativas",
incorrectas: [
"El trabajador tiene un salario superior a la media de su categoría",
"El conflicto laboral afecta a más de diez personas simultáneamente"
]
},
{
enunciado: "La jerarquía normativa impide que un Real Decreto ministerial:",
correcta: "Contradiga lo dispuesto en una Ley aprobada en el Congreso",
incorrectas: [
"Regule aspectos técnicos del uso de maquinaria en laboratorios",
"Sea aplicado por los inspectores de trabajo en sus visitas"
]
},
{
enunciado: "En la interpretación de las normas, el criterio 'teleológico' busca:",
correcta: "La finalidad o el espíritu que perseguía la norma al ser creada",
incorrectas: [
"El significado literal de cada palabra según el diccionario de la RAE",
"La relación de la norma con el resto de artículos del mismo código"
]
},
{
enunciado: "El objeto del Derecho del Trabajo excluye a los autónomos porque:",
correcta: "No trabajan por cuenta ajena ni bajo la dependencia de otro",
incorrectas: [
"No perciben ningún tipo de remuneración por sus servicios técnicos",
"Están exentos de cumplir con la normativa de prevención de riesgos"
]
},
{
enunciado: "La 'Ley Orgánica' se diferencia de la 'Ley Ordinaria' en que:",
correcta: "Requiere mayoría absoluta y regula derechos fundamentales",
incorrectas: [
"Es dictada por el Rey sin necesidad de pasar por las Cortes",
"Solo se aplica en el ámbito de las administraciones públicas"
]
},
{
enunciado: "El principio de 'territorialidad' en las leyes laborales españolas implica:",
correcta: "Que se aplican a todo trabajo realizado en suelo español",
incorrectas: [
"Que cada Comunidad Autónoma tiene sus propias leyes de huelga",
"Que el contrato de trabajo solo es válido en la ciudad donde se firma"
]
},
{
enunciado: "La exclusión de los funcionarios públicos del Estatuto de los Trabajadores se debe a:",
correcta: "Que su relación es de carácter administrativo y no laboral",
incorrectas: [
"Que no realizan un trabajo productivo ni por cuenta ajena",
"Que tienen prohibido por ley la sindicación y la negociación"
]
},
{
enunciado: "La 'norma mínima' significa que el Estado establece:",
correcta: "Un suelo de derechos que los convenios solo pueden mejorar",
incorrectas: [
"El máximo de salario que una empresa puede pagar a sus directivos",
"La duración exacta de cada tarea técnica en el laboratorio"
]
},
{
enunciado: "El poder disciplinario del empresario es una manifestación de:",
correcta: "La nota de dependencia y ajenidad de la relación laboral",
incorrectas: [
"La libertad de empresa recogida en el Código de Comercio",
"El derecho a la huelga reconocido en la Constitución Española"
]
},
{
enunciado: "La aplicación de las normas laborales en el tiempo se rige por:",
correcta: "El principio de irretroactividad de las disposiciones restrictivas",
incorrectas: [
"La obligatoriedad de aplicar siempre la ley más antigua vigente",
"La caducidad de todos los convenios colectivos cada seis meses"
]
}
];