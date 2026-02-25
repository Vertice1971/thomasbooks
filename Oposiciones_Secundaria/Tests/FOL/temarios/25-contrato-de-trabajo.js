'use strict';

var PREGUNTAS = [
{
enunciado: "El contrato de trabajo se define técnicamente como un acuerdo por el cual:",
correcta: "El trabajador se obliga voluntariamente a prestar servicios por cuenta ajena y dentro del ámbito de organización de otra persona",
incorrectas: [
"El trabajador arrienda sus herramientas de producción a una empresa para que esta las explote",
"El empresario adquiere la propiedad de la capacidad física del individuo durante la vigencia del pacto"
]
},
{
enunciado: "¿A qué edad se adquiere la capacidad plena para contratar la prestación del propio trabajo en España?",
correcta: "A los 18 años, o a los 16 si se está emancipado legalmente",
incorrectas: [
"A los 14 años con la simple autorización del tutor académico del centro",
"A los 21 años para puestos de responsabilidad técnica en laboratorios"
]
},
{
enunciado: "Como regla general, la forma del contrato de trabajo puede ser:",
correcta: "Por escrito o de palabra, presumiéndose existente entre quien presta un servicio y quien lo recibe",
incorrectas: [
"Únicamente mediante escritura pública ante notario para ser plenamente válido",
"Exclusivamente telemática a través de la firma digital de la Casa de la Moneda"
]
},
{
enunciado: "Se presume que el contrato de trabajo se ha concertado por tiempo indefinido cuando:",
correcta: "No se hubiera observado la exigencia de forma escrita en contratos que la requieran o exista fraude de ley",
incorrectas: [
"El trabajador posea una titulación técnica superior a la del director de la entidad",
"La empresa tenga menos de diez trabajadores en su plantilla de personal fijo"
]
},
{
enunciado: "El período de prueba tiene como finalidad jurídica:",
correcta: "Verificar la aptitud del trabajador para el puesto y permitir al trabajador conocer las condiciones reales",
incorrectas: [
"Reducir los costes de seguridad social del empresario durante los primeros meses",
"Eximir al trabajador de cumplir con las normas de seguridad e higiene en el centro"
]
},
{
enunciado: "Según el Estatuto de los Trabajadores, la duración máxima del período de prueba para técnicos titulados es de:",
correcta: "Seis meses, salvo que el convenio colectivo establezca otra duración",
incorrectas: [
"Un año natural improrrogable para facilitar la adaptación tecnológica",
"Tres semanas para evitar el uso abusivo de la figura del despido libre"
]
},
{
enunciado: "Durante el período de prueba, la resolución de la relación laboral se caracteriza por:",
correcta: "Poder producirse a instancia de cualquiera de las partes sin necesidad de preaviso ni indemnización",
incorrectas: [
"Requerir la aprobación previa de la Inspección de Trabajo mediante acta administrativa",
"Obligar al empresario a abonar veinte días por año de servicio trabajado"
]
},
{
enunciado: "Se definen como 'relaciones laborales de carácter especial' aquellas que:",
correcta: "Están sometidas a una regulación específica por sus características singulares de la prestación",
incorrectas: [
"Se realizan sin ánimo de lucro en organizaciones de carácter religioso o benéfico",
"Están reguladas únicamente por el Código Civil al no existir dependencia laboral"
]
},
{
enunciado: "Un ejemplo de relación laboral especial en el ordenamiento español es la de:",
correcta: "El personal de alta dirección que no sea exclusivamente consejero o administrador",
incorrectas: [
"Los técnicos especialistas de laboratorio en el sistema público de salud (SERGAS, SES)",
"Los trabajadores autónomos económicamente dependientes que facturan el 75%"
]
},
{
enunciado: "¿Cuál de los siguientes trabajos queda excluido del ámbito de aplicación de la ley laboral?",
correcta: "Los trabajos realizados por amistad, benevolencia o buena vecindad",
incorrectas: [
"Los contratos de duración determinada superiores a veinticuatro meses continuos",
"La prestación de servicios de técnicos sanitarios en empresas privadas de diagnóstico"
]
},
{
enunciado: "La forma escrita del contrato de trabajo es obligatoria por ley para:",
correcta: "Contratos de formación, a tiempo parcial, fijos-discontinuos y de duración determinada",
incorrectas: [
"Cualquier contrato que supere el salario mínimo interprofesional en un 50%",
"Los pactos verbales sobre el uso de uniforme y calzado de seguridad en el laboratorio"
]
},
{
enunciado: "Los menores de 16 años tienen prohibida la contratación laboral, con la excepción de:",
correcta: "Espectáculos públicos, previa autorización escrita de la autoridad laboral",
incorrectas: [
"Empresas familiares dedicadas exclusivamente a la investigación científica básica",
"Puestos de aprendizaje manual que no conlleven contacto con agentes biológicos"
]
},
{
enunciado: "La nulidad de una cláusula específica del contrato de trabajo implica que:",
correcta: "Dicha cláusula queda sin efecto, pero el contrato permanece válido en el resto de su contenido",
incorrectas: [
"El contrato completo se extingue ipso facto por carecer de los elementos esenciales",
"El empresario es inhabilitado para la contratación de personal técnico de por vida"
]
},
{
enunciado: "La 'duración del contrato' en el ordenamiento laboral español actual:",
correcta: "Es por regla general indefinida, limitándose la temporalidad a causas muy tasadas",
incorrectas: [
"Es de libre designación por el empresario sin necesidad de justificar la causa",
"Debe ser renovada anualmente de forma obligatoria ante el registro de la propiedad"
]
},
{
enunciado: "El período de prueba debe constar por escrito para ser válido; en caso contrario:",
correcta: "Se entiende que no existe período de prueba y el trabajador es fijo desde el primer día",
incorrectas: [
"El contrato se considera nulo y el trabajador debe devolver los salarios percibidos",
"La duración del mismo se extiende automáticamente hasta los doce meses"
]
},
{
enunciado: "Se excluye de la relación laboral el trabajo de los administradores en empresas si:",
correcta: "Su actividad se limita puramente al desempeño de las funciones de cargo societario",
incorrectas: [
"Poseen una titulación de Técnico Superior en el área de actividad de la empresa",
"Perciben una dieta de asistencia inferior a la base mínima de cotización"
]
},
{
enunciado: "La incapacidad para contratar de los menores de 18 años no emancipados se complementa con:",
correcta: "La autorización de sus padres o tutores legales o de la institución que los tenga a su cargo",
incorrectas: [
"Un examen psicotécnico de madurez realizado por la Inspección de Educación",
"La firma obligatoria del director del centro donde cursaron sus estudios técnicos"
]
},
{
enunciado: "En los contratos de duración determinada por circunstancias de la producción, se debe indicar:",
correcta: "La causa habilitante de la contratación, las circunstancias que lo justifican y su duración",
incorrectas: [
"El balance de cuentas de la empresa del último trimestre para demostrar falta de liquidez",
"La filiación política de los representantes sindicales que aprobaron la modalidad"
]
},
{
enunciado: "El contrato de trabajo 'fijo-discontinuo' es aquel que se concierta para realizar:",
correcta: "Trabajos de naturaleza estacional o vinculados a actividades productivas de temporada",
incorrectas: [
"Sustituciones de personal administrativo que se encuentra en período de vacaciones",
"Tareas de investigación científica que carecen de un presupuesto fijo anual"
]
},
{
enunciado: "La 'causa' en el contrato de trabajo se identifica jurídicamente con:",
correcta: "El intercambio de la prestación de servicios por el pago de una retribución garantizada",
incorrectas: [
"La motivación psicológica interna que lleva a una persona a buscar empleo",
"El fin social de disminuir la tasa de desempleo en una región determinada"
]
},
{
enunciado: "El contrato de formación en alternancia tiene por objeto principal:",
correcta: "Compatibilizar la actividad laboral retribuida con los correspondientes procesos formativos",
incorrectas: [
"Permitir la realización de tareas auxiliares de limpieza sin abonar el salario mínimo",
"Facilitar la contratación de personal jubilado que desea reincorporarse al mercado"
]
},
{
enunciado: "¿Cuál es la duración mínima permitida para un contrato de formación en alternancia?",
correcta: "Tres meses",
incorrectas: [
"Un año",
"Quince días"
]
},
{
enunciado: "El contrato formativo para la obtención de la práctica profesional se dirige a:",
correcta: "Quienes poseen un título universitario, de formación profesional o grado medio/superior",
incorrectas: [
"Cualquier ciudadano sin estudios que desee aprender un oficio técnico de forma manual",
"Trabajadores que han cumplido los 65 años y no tienen el periodo mínimo de carencia"
]
},
{
enunciado: "En el contrato de práctica profesional, el puesto de trabajo debe asegurar:",
correcta: "La obtención de la práctica profesional adecuada al nivel de estudios cursados",
incorrectas: [
"La adjudicación de una plaza fija en el sector público tras finalizar el contrato",
"La realización de funciones de gestión de recursos humanos ajenas a la titulación"
]
},
{
enunciado: "La falta de alta en la Seguridad Social del trabajador conlleva que el contrato:",
correcta: "Se presuma celebrado por tiempo indefinido, salvo que se pruebe la naturaleza temporal",
incorrectas: [
"Quede suspendido hasta que el trabajador abone las cuotas de forma individual",
"Sea considerado nulo y no genere derecho a ninguna prestación por desempleo"
]
},
{
enunciado: "El contrato a tiempo parcial se define por el desarrollo de una jornada:",
correcta: "Inferior a la de un trabajador a tiempo completo comparable en la misma empresa",
incorrectas: [
"Que no puede superar las diez horas semanales bajo ningún concepto legal",
"Distribuida únicamente en horario nocturno para facilitar la conciliación"
]
},
{
enunciado: "Las 'horas complementarias' en la contratación a tiempo parcial son:",
correcta: "Aquellas cuya posibilidad de realización ha sido pactada expresamente por escrito",
incorrectas: [
"Horas extraordinarias que se pagan un 50% por encima de la hora ordinaria",
"Horas destinadas al estudio de normativas de prevención de riesgos fuera del centro"
]
},
{
enunciado: "El contrato de duración determinada por circunstancias de la producción tiene un límite de:",
correcta: "Seis meses, ampliables a un año si el convenio colectivo sectorial así lo prevé",
incorrectas: [
"Tres años consecutivos sin posibilidad de prórroga ni interrupción",
"Noventa días naturales para cubrir las bajas por maternidad o paternidad"
]
},
{
enunciado: "El contrato de sustitución (interinidad) tiene como objeto:",
correcta: "Sustituir a un trabajador con derecho a reserva de su puesto de trabajo",
incorrectas: [
"Cubrir las necesidades de producción durante las épocas de rebajas o picos de demanda",
"Realizar obras o servicios con autonomía dentro de la actividad de la empresa"
]
},
{
enunciado: "La 'capacidad del empresario' para contratar puede ser ejercida por:",
correcta: "Personas físicas, personas jurídicas y las comunidades de bienes",
incorrectas: [
"Únicamente los ciudadanos de nacionalidad española con pleno uso de derechos civiles",
"Exclusivamente las Sociedades Anónimas con capital superior a 60.000 euros"
]
},
{
enunciado: "El deber de información al trabajador obliga al empresario a comunicar por escrito:",
correcta: "Los elementos esenciales del contrato si no figuran en el documento formal",
incorrectas: [
"La lista de enfermedades crónicas del resto de los empleados del departamento",
"Los antecedentes penales de los miembros del consejo de administración"
]
},
{
enunciado: "Un contrato celebrado en 'fraude de ley' se produce cuando:",
correcta: "Se utiliza una modalidad contractual temporal para cubrir una necesidad permanente de la empresa",
incorrectas: [
"El trabajador firma el documento con un seudónimo artístico para evitar ser identificado",
"La empresa paga el salario en moneda extranjera sin autorización del Banco de España"
]
},
{
enunciado: "La interrupción del cómputo del período de prueba se produce por:",
correcta: "Situaciones de incapacidad temporal, nacimiento, adopción o acogimiento, si hay acuerdo",
incorrectas: [
"La asistencia del trabajador a cursos de formación no relacionados con el puesto",
"El retraso en el suministro de reactivos químicos por parte de los proveedores externos"
]
},
{
enunciado: "El contrato de trabajo para artistas en espectáculos públicos se regula como:",
correcta: "Una relación laboral de carácter especial por sus particularidades",
incorrectas: [
"Una actividad mercantil excluida totalmente del Derecho del Trabajo",
"Un contrato de arrendamiento de servicios regulado por el Código Civil"
]
},
{
enunciado: "El 'trabajo autónomo' se excluye de la relación laboral porque el profesional:",
correcta: "Realiza la actividad con autonomía, asume el riesgo económico y no hay dependencia",
incorrectas: [
"Percibe sus ingresos de forma gratuita por voluntad de los clientes finales",
"Está exento de cumplir con las normas de prevención de riesgos laborales"
]
},
{
enunciado: "La 'copia básica' del contrato de trabajo debe entregarse por el empresario a:",
correcta: "La representación legal de los trabajadores en un plazo no superior a diez días",
incorrectas: [
"La comisaría de policía más cercana al centro de trabajo para su validación",
"Todos los proveedores de la empresa para que conozcan al nuevo personal técnico"
]
},
{
enunciado: "En los contratos formativos, la retribución no podrá ser en ningún caso inferior a:",
correcta: "El Salario Mínimo Interprofesional en proporción al tiempo de trabajo efectivo",
incorrectas: [
"La mitad del salario que perciba el trabajador de menor categoría en la empresa",
"El importe de las tasas de matrícula del ciclo formativo cursado por el empleado"
]
},
{
enunciado: "El contrato para la formación en alternancia puede celebrarse con:",
correcta: "Personas que carezcan de la cualificación profesional reconocida para el puesto",
incorrectas: [
"Técnicos que ya hayan trabajado más de cinco años en la misma función profesional",
"Ciudadanos extranjeros que no posean permiso de residencia ni de trabajo"
]
},
{
enunciado: "La 'forma verbal' en la contratación laboral genera el riesgo de:",
correcta: "Incertidumbre probatoria sobre los pactos alcanzados en caso de conflicto judicial",
incorrectas: [
"La anulación inmediata de los títulos académicos por parte del Ministerio de Educación",
"La pérdida de la antigüedad acumulada en otras empresas del mismo sector técnico"
]
},
{
enunciado: "Se considera 'objeto cierto' del contrato de trabajo a:",
correcta: "La prestación de servicios laborales que el trabajador se obliga a realizar",
incorrectas: [
"La maquinaria y herramientas que el empresario pone a disposición del técnico",
"El edificio físico donde se encuentran ubicados los laboratorios de la empresa"
]
}
];