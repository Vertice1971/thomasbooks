'use strict';

var PREGUNTAS = [
{
enunciado: "El principio de 'universalidad' del sistema de Seguridad Social español implica que:",
correcta: "Se extiende a todos los ciudadanos y extranjeros que residan o se encuentren legalmente en España",
incorrectas: [
"La cuantía de las pensiones es idéntica para todos los trabajadores con independencia de lo cotizado",
"El sistema es gestionado exclusivamente por organismos privados de ámbito internacional"
]
},
{
enunciado: "La norma básica que regula el sistema es el Texto Refundido de la Ley General de la Seguridad Social, aprobado por:",
correcta: "Real Decreto Legislativo 8/2015",
incorrectas: [
"Orden Ministerial de 23 de mayo de 1990 sobre centros sanitarios",
"Ley Orgánica de Libertad Sindical y Derechos de los Trabajadores"
]
},
{
enunciado: "Dentro de la estructura de la Seguridad Social, el Régimen General incluye a:",
correcta: "Los trabajadores por cuenta ajena que no estén incluidos en un régimen especial",
incorrectas: [
"Los profesionales colegiados que opten por una mutualidad privada de previsión",
"Únicamente a los altos directivos y personal con funciones de gerencia"
]
},
{
enunciado: "La inscripción de empresas es el acto administrativo por el que la Tesorería General asigna:",
correcta: "El Código de Cuenta de Cotización (CCC)",
incorrectas: [
"El número de registro sanitario para laboratorios de análisis clínicos",
"El Código de Identificación Fiscal para el pago del Impuesto de Sociedades"
]
},
{
enunciado: "La afiliación a la Seguridad Social se caracteriza por ser:",
correcta: "Única para toda la vida del trabajador y obligatoria para las personas incluidas en el sistema",
incorrectas: [
"Temporal, debiendo renovarse cada vez que se produce un cambio de centro de trabajo",
"Facultativa para los técnicos que acrediten la titularidad de un seguro de vida privado"
]
},
{
enunciado: "El plazo para solicitar el alta de un trabajador debe ser:",
correcta: "Con carácter previo al comienzo de la prestación de servicios",
incorrectas: [
"Dentro de los cinco días hábiles siguientes a la firma del contrato",
"Al finalizar el periodo de prueba pactado en el convenio colectivo"
]
},
{
enunciado: "La solicitud de baja de un trabajador debe presentarse en un plazo de:",
correcta: "Tres días naturales desde el cese en el trabajo",
incorrectas: [
"Diez días hábiles desde la comunicación del despido",
"Veinticuatro horas desde la finalización del contrato"
]
},
{
enunciado: "El sujeto obligado al ingreso de las cuotas de cotización es:",
correcta: "El empresario, que descontará la cuota obrera al trabajador",
incorrectas: [
"El trabajador mediante autoliquidación",
"La Mutua colaboradora correspondiente"
]
},
{
enunciado: "La Tesorería General de la Seguridad Social tiene como función principal:",
correcta: "La gestión recaudatoria y la administración del patrimonio del sistema",
incorrectas: [
"La resolución de expedientes disciplinarios laborales",
"La negociación colectiva sectorial"
]
},
{
enunciado: "La acción protectora del sistema cubre situaciones de:",
correcta: "Enfermedad, accidente, jubilación, desempleo y muerte y supervivencia",
incorrectas: [
"Descenso de beneficios empresariales",
"Falta de liquidez en la empresa"
]
},
{
enunciado: "La cotización por contingencias comunes financia principalmente:",
correcta: "Prestaciones derivadas de enfermedad común y accidente no laboral",
incorrectas: [
"Exclusivamente los accidentes de trabajo",
"Solo las pensiones de jubilación"
]
},
{
enunciado: "Las contingencias profesionales derivan de:",
correcta: "Accidente de trabajo y enfermedad profesional",
incorrectas: [
"Enfermedad común y accidente doméstico",
"Jubilación anticipada"
]
},
{
enunciado: "La obligación de cotizar comienza:",
correcta: "Desde el inicio de la prestación de servicios",
incorrectas: [
"Tras superar el periodo de prueba",
"Al cumplir seis meses de antigüedad"
]
},
{
enunciado: "El empresario que no da de alta a un trabajador será:",
correcta: "Responsable directo de las prestaciones que puedan generarse",
incorrectas: [
"Exonerado si paga una multa administrativa",
"Responsable únicamente si el trabajador lo denuncia"
]
},
{
enunciado: "La base de cotización incluye:",
correcta: "El salario más la parte proporcional de pagas extraordinarias",
incorrectas: [
"Solo el salario base sin complementos",
"Únicamente las horas extraordinarias"
]
},
{
enunciado: "El tope máximo y mínimo de cotización se fijan:",
correcta: "Anualmente en la Ley de Presupuestos Generales del Estado",
incorrectas: [
"Por acuerdo entre empresa y trabajador",
"Mediante convenio colectivo sectorial"
]
},
{
enunciado: "Las Mutuas Colaboradoras con la Seguridad Social son:",
correcta: "Asociaciones privadas de empresarios autorizadas para colaborar en la gestión",
incorrectas: [
"Sindicatos especializados en prevención",
"Empresas sanitarias públicas"
]
},
{
enunciado: "El recargo de prestaciones por falta de medidas de seguridad:",
correcta: "Es responsabilidad exclusiva del empresario y no asegurable",
incorrectas: [
"Puede cubrirse mediante seguro privado",
"Se financia con fondos públicos"
]
},
{
enunciado: "La incapacidad temporal supone:",
correcta: "La imposibilidad temporal de trabajar por enfermedad o accidente",
incorrectas: [
"La extinción automática del contrato",
"La jubilación anticipada"
]
},
{
enunciado: "La prestación por desempleo contributiva exige:",
correcta: "Un período mínimo de cotización previo",
incorrectas: [
"Haber trabajado al menos un mes",
"Ser mayor de 30 años"
]
},

/* 20 NUEVAS PREGUNTAS */

{
enunciado: "La jubilación contributiva requiere, con carácter general:",
correcta: "Haber cotizado un mínimo de años establecidos legalmente",
incorrectas: [
"Tener contrato indefinido",
"Haber trabajado solo en el sector público"
]
},
{
enunciado: "La pensión de viudedad se reconoce a:",
correcta: "El cónyuge o pareja en determinadas condiciones legales",
incorrectas: [
"Cualquier familiar conviviente",
"Solo a hijos menores de edad"
]
},
{
enunciado: "El Fondo de Reserva de la Seguridad Social tiene como finalidad:",
correcta: "Atender necesidades futuras en materia de pensiones contributivas",
incorrectas: [
"Financiar subvenciones empresariales",
"Gestionar ayudas sanitarias autonómicas"
]
},
{
enunciado: "El Régimen Especial de Trabajadores Autónomos (RETA) incluye a:",
correcta: "Quienes realizan actividad económica por cuenta propia",
incorrectas: [
"Solo profesionales colegiados",
"Exclusivamente empresarios con empleados"
]
},
{
enunciado: "La incapacidad permanente puede clasificarse en:",
correcta: "Parcial, total, absoluta y gran invalidez",
incorrectas: [
"Temporal y definitiva únicamente",
"Leve, grave y muy grave"
]
},
{
enunciado: "La asistencia sanitaria pública se financia principalmente mediante:",
correcta: "Impuestos generales",
incorrectas: [
"Cuotas empresariales exclusivas",
"Aportaciones voluntarias de trabajadores"
]
},
{
enunciado: "El parte de accidente de trabajo debe comunicarse:",
correcta: "A la autoridad laboral en los plazos establecidos",
incorrectas: [
"Solo al comité de empresa",
"Únicamente a la Mutua"
]
},
{
enunciado: "La incapacidad temporal derivada de contingencias profesionales se financia mediante:",
correcta: "Cotizaciones específicas a cargo del empresario",
incorrectas: [
"Impuestos municipales",
"Aportaciones del trabajador exclusivamente"
]
},
{
enunciado: "El sistema español de Seguridad Social se inspira en:",
correcta: "Un modelo mixto de reparto y solidaridad intergeneracional",
incorrectas: [
"Un modelo exclusivamente privado",
"Un sistema puramente asistencial"
]
},
{
enunciado: "El principio de solidaridad implica que:",
correcta: "Las personas con mayores ingresos contribuyen en mayor medida al sistema",
incorrectas: [
"Cada trabajador recibe exactamente lo que cotiza",
"No existe redistribución alguna"
]
},
{
enunciado: "La protección por maternidad y paternidad se integra en:",
correcta: "La acción protectora del sistema de Seguridad Social",
incorrectas: [
"El sistema privado de seguros médicos",
"La negociación colectiva empresarial"
]
},
{
enunciado: "La jubilación anticipada puede producirse:",
correcta: "En determinados supuestos regulados legalmente",
incorrectas: [
"Libremente a voluntad del trabajador sin requisitos",
"Solo en el sector público"
]
},
{
enunciado: "La pensión no contributiva se concede a:",
correcta: "Personas sin recursos suficientes que no han cotizado lo necesario",
incorrectas: [
"Todos los mayores de 60 años",
"Solo extranjeros residentes"
]
},
{
enunciado: "El Instituto Social de la Marina gestiona:",
correcta: "La protección social de los trabajadores del mar",
incorrectas: [
"Las pensiones de funcionarios",
"El régimen agrario exclusivamente"
]
},
{
enunciado: "La cotización por desempleo corresponde:",
correcta: "A empresario y trabajador según los tipos fijados",
incorrectas: [
"Solo al trabajador",
"Exclusivamente al Estado"
]
},
{
enunciado: "El sistema de reparto significa que:",
correcta: "Las cotizaciones actuales financian las prestaciones actuales",
incorrectas: [
"Cada trabajador ahorra su propia pensión",
"Las pensiones se pagan con inversiones privadas"
]
},
{
enunciado: "El alta de oficio puede producirse:",
correcta: "Cuando la Administración detecta una situación irregular",
incorrectas: [
"Solo a petición del trabajador",
"Exclusivamente mediante sentencia judicial"
]
},
{
enunciado: "La jubilación parcial permite:",
correcta: "Compatibilizar trabajo a tiempo parcial y pensión",
incorrectas: [
"Cobrar pensión íntegra trabajando a jornada completa",
"Extinguir definitivamente el contrato"
]
},
{
enunciado: "El principio de suficiencia económica implica que:",
correcta: "Las prestaciones deben garantizar un nivel digno de protección",
incorrectas: [
"Las pensiones son iguales para todos",
"Las cuantías dependen solo del IPC anual"
]
},
{
enunciado: "El sistema de Seguridad Social español es competencia de:",
correcta: "El Estado, sin perjuicio de la gestión de algunas prestaciones por las comunidades autónomas",
incorrectas: [
"Exclusivamente las comunidades autónomas",
"La Unión Europea directamente"
]
}
];