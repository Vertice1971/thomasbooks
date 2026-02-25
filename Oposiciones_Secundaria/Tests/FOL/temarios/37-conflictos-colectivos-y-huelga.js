'use strict';

var PREGUNTAS = [
{
enunciado: "Un conflicto colectivo de trabajo se diferencia del individual porque:",
correcta: "Afecta a un grupo genérico de trabajadores y el interés en juego es abstracto y colectivo",
incorrectas: [
"Intervienen más de diez técnicos de laboratorio de forma simultánea",
"La cuantía de la reclamación económica supera los 50.000 euros anuales"
]
},
{
enunciado: "Los conflictos colectivos 'jurídicos' son aquellos que versan sobre:",
correcta: "La interpretación o aplicación de una norma estatal, convenio o práctica de empresa",
incorrectas: [
"La creación de una nueva categoría profesional no existente en el sector",
"La modificación de la cuantía salarial por causas económicas sobrevenidas"
]
},
{
enunciado: "En los procedimientos de solución de conflictos, la mediación se caracteriza porque:",
correcta: "Un tercero propone soluciones no vinculantes que las partes pueden o no aceptar",
incorrectas: [
"El mediador dicta una resolución de obligado cumplimiento denominada laudo",
"Es un proceso exclusivamente judicial que se celebra ante el Tribunal Supremo"
]
},
{
enunciado: "El derecho a la huelga es un derecho fundamental reconocido en:",
correcta: "El artículo 28.2 de la Constitución Española",
incorrectas: [
"El Código de Comercio y las normas de derecho administrativo",
"La Ley de Prevención de Riesgos Laborales en centros sanitarios"
]
},
{
enunciado: "¿Quién tiene la facultad de declarar la huelga en una empresa?",
correcta: "Los representantes de los trabajadores, los sindicatos o los propios trabajadores",
incorrectas: [
"Únicamente el sindicato mayoritario a nivel estatal (UGT o CCOO)",
"El Ministerio de Trabajo tras realizar una consulta previa al empresario"
]
},
{
enunciado: "El preaviso para la convocatoria de huelga debe comunicarse con una antelación de:",
correcta: "5 días naturales (10 días si afecta a servicios públicos)",
incorrectas: [
"24 horas por tratarse de un derecho de ejercicio inmediato",
"Un mes para permitir la reprogramación de los análisis clínicos"
]
},
{
enunciado: "Se considera huelga ilegal aquella que:",
correcta: "Se inicia por motivos puramente políticos o ajenos al interés profesional",
incorrectas: [
"Reclama una mejora salarial superior al 10% del salario base",
"Es secundada por menos de la mitad de la plantilla del laboratorio"
]
},
{
enunciado: "Durante el ejercicio del derecho de huelga, el contrato de trabajo se encuentra en situación de:",
correcta: "Suspensión, con interrupción de la obligación de trabajar y de remunerar",
incorrectas: [
"Extinción definitiva, pudiendo el empresario contratar nuevos técnicos",
"Actividad reducida, manteniendo el derecho al cobro de pluses fijos"
]
},
{
enunciado: "La figura de los 'esquiroles' o sustitución de huelguistas está:",
correcta: "Prohibida, salvo para garantizar la seguridad y el mantenimiento",
incorrectas: [
"Permitida si la empresa contrata a través de empresas de trabajo temporal",
"Fomentada por la ley para no interrumpir el servicio de diagnóstico"
]
},
{
enunciado: "El comité de huelga tiene como función principal:",
correcta: "Participar en actuaciones sindicales, administrativas o judiciales para solucionar el conflicto",
incorrectas: [
"Impedir físicamente el acceso de los directivos al centro sanitario",
"Cobrar las cuotas sindicales de los trabajadores que no secundan el paro"
]
},
{
enunciado: "Los 'servicios de mantenimiento' durante una huelga tienen por objeto:",
correcta: "Garantizar la seguridad de las personas y de las instalaciones de la empresa",
incorrectas: [
"Finalizar los análisis técnicos que estaban pendientes del día anterior",
"Limpiar las zonas comunes para evitar sanciones de la inspección sanitaria"
]
},
{
enunciado: "El cierre patronal es una medida de conflicto colectiva que consiste en:",
correcta: "El cierre del centro de trabajo por el empresario ante riesgo de violencia u ocupación",
incorrectas: [
"La clausura del laboratorio por falta de pago de los impuestos municipales",
"El despido colectivo de toda la plantilla de técnicos de forma simultánea"
]
},
{
enunciado: "El empresario que efectúe un cierre patronal debe comunicarlo a la autoridad laboral en:",
correcta: "12 horas desde que se produzca",
incorrectas: [
"48 horas previas al cierre efectivo de las puertas del centro",
"Cinco días hábiles mediante correo certificado administrativo"
]
},
{
enunciado: "Los efectos del cierre patronal legal sobre el salario son:",
correcta: "La suspensión del derecho al salario del trabajador",
incorrectas: [
"El pago obligatorio del 50% de la retribución por parte del Estado",
"La obligación de la empresa de abonar el salario base y el de antigüedad"
]
},
{
enunciado: "Se consideran 'servicios esenciales de la comunidad' aquellos que:",
correcta: "Afectan a derechos fundamentales como la vida o la salud",
incorrectas: [
"Producen bienes de lujo para la exportación a mercados internacionales",
"Permiten el mantenimiento de la cotización de la empresa en bolsa"
]
},
{
enunciado: "La huelga de 'celo' o 'a reglamento' consiste en:",
correcta: "El cumplimiento minucioso y lento de las normas para paralizar el trabajo",
incorrectas: [
"La realización de horas extraordinarias sin permiso de la dirección",
"El uso exclusivo de batas blancas en zonas no autorizadas del centro"
]
},
{
enunciado: "Un conflicto colectivo de 'intereses' o económico es aquel que busca:",
correcta: "La modificación o creación de una norma, como un nuevo convenio",
incorrectas: [
"La reclamación de una nómina impagada a un técnico concreto",
"La interpretación de una cláusula oscura sobre el plus de nocturnidad"
]
},
{
enunciado: "¿Puede un trabajador ser sancionado por participar en una huelga legal?",
correcta: "No, el ejercicio de un derecho fundamental no puede ser causa de sanción",
incorrectas: [
"Sí, mediante la pérdida de los días de vacaciones correspondientes al mes",
"Solo si el técnico es el responsable de la guardia en el laboratorio"
]
},
{
enunciado: "La situación de 'alta especial' en la Seguridad Social durante la huelga implica que:",
correcta: "No existe obligación de cotizar por parte de la empresa ni del trabajador",
incorrectas: [
"El trabajador sigue acumulando derecho a la prestación por desempleo",
"La mutua de accidentes debe pagar el subsidio íntegro de hospitalización"
]
},
{
enunciado: "El arbitraje obligatorio puede ser impuesto por el Gobierno cuando:",
correcta: "La huelga cause grave perjuicio a la economía nacional o sea muy prolongada",
incorrectas: [
"El empresario se niegue a hablar con los delegados de personal del centro",
"Se trate de un laboratorio de análisis que trabaje para la sanidad privada"
]
}
];