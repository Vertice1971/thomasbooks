'use strict';

var PREGUNTAS = [
{
enunciado: "El derecho a la 'libre elección de profesión u oficio' está reconocido en la Constitución Española en su artículo:",
correcta: "35",
incorrectas: [
"14",
"27"
]
},
{
enunciado: "¿Qué se entiende por 'profesión regulada' en el ordenamiento jurídico?",
correcta: "Aquella cuya actividad requiere una titulación específica y cumple condiciones legales de ejercicio",
incorrectas: [
"Cualquier ocupación que se realice mediante un contrato de trabajo escrito",
"Toda actividad laboral que cuente con un convenio colectivo propio"
]
},
{
enunciado: "La libre circulación de trabajadores en la Unión Europea implica el derecho de:",
correcta: "Desplazarse y residir en otros Estados miembros para ejercer una actividad laboral",
incorrectas: [
"Percibir el salario del país de origen aunque se trabaje en un país con rentas más altas",
"Votar en las elecciones legislativas nacionales del país de destino desde el primer día"
]
},
{
enunciado: "El 'derecho de establecimiento' en la Unión Europea permite a un profesional:",
correcta: "Instalarse de forma permanente en otro Estado miembro para ejercer su actividad",
incorrectas: [
"Abrir una sede comercial sin necesidad de inscribirse en el registro mercantil local",
"Ejercer funciones públicas reservadas exclusivamente a los nacionales del país"
]
},
{
enunciado: "La 'libre prestación de servicios' se distingue del derecho de establecimiento por:",
correcta: "Su carácter temporal y la ausencia de una infraestructura permanente en el país de destino",
incorrectas: [
"La obligación de pagar los impuestos de seguridad social en ambos países simultáneamente",
"El requisito de homologar el título académico antes de cada desplazamiento puntual"
]
},
{
enunciado: "¿Cuál es el límite constitucional al derecho de libre elección de profesión?",
correcta: "El cumplimiento de las normas que regulan los títulos académicos y profesionales",
incorrectas: [
"La prohibición de trabajar en sectores que tengan pérdidas económicas declaradas",
"La obligatoriedad de ejercer solo la profesión para la que se ha estudiado en la universidad"
]
},
{
enunciado: "En España, la colegiación obligatoria para determinadas profesiones busca:",
correcta: "Garantizar el control deontológico y la protección de los derechos de los destinatarios",
incorrectas: [
"Limitar el número de profesionales para evitar la competencia de precios en el mercado",
"Recaudar fondos destinados exclusivamente al mantenimiento de la administración central"
]
},
{
enunciado: "El reconocimiento de cualificaciones profesionales en la UE se rige por el principio de:",
correcta: "Confianza mutua y proporcionalidad en las medidas de compensación",
incorrectas: [
"Superioridad técnica de los títulos expedidos por los países fundadores",
"Exención total de requisitos para las profesiones del sector de la construcción"
]
},
{
enunciado: "Se considera que una profesión es una 'realidad social' porque:",
correcta: "Agrupa a individuos que desempeñan funciones similares con un estatus y cultura comunes",
incorrectas: [
"Está definida exclusivamente por los códigos de la Seguridad Social y el INE",
"Desaparece automáticamente cuando el mercado deja de demandar ese servicio concreto"
]
},
{
enunciado: "El artículo 36 de la Constitución Española remite a la Ley para regular:",
correcta: "Las peculiaridades del régimen jurídico de los Colegios Profesionales",
incorrectas: [
"El salario mínimo que deben percibir todos los graduados universitarios",
"La prohibición de las huelgas en los sectores considerados esenciales"
]
},
{
enunciado: "La directiva relativa al reconocimiento de cualificaciones profesionales establece:",
correcta: "Sistemas para que los nacionales de un Estado ejerzan en otro una profesión regulada",
incorrectas: [
"La creación de un título único europeo que sustituya a todos los títulos nacionales",
"La obligación de hablar tres idiomas oficiales para poder trabajar fuera del país de origen"
]
},
{
enunciado: "El acceso a las profesiones sanitarias en España requiere:",
correcta: "La posesión del título oficial y, habitualmente, la inscripción en el colegio correspondiente",
incorrectas: [
"Un certificado de buena conducta expedido por el Ministerio de Asuntos Exteriores",
"Haber nacido en un Estado miembro de la Unión Europea o del Espacio Económico"
]
},
{
enunciado: "La libre circulación de trabajadores prohíbe cualquier discriminación por:",
correcta: "Razón de nacionalidad en el empleo, la retribución y las condiciones de trabajo",
incorrectas: [
"Falta de experiencia previa en puestos de alta dirección de la administración pública",
"No poseer la nacionalidad del país de destino para cualquier puesto en el sector privado"
]
},
{
enunciado: "La 'profesión regulada' se diferencia de la ocupación libre en que:",
correcta: "El Estado impone requisitos de acceso por razones de interés general",
incorrectas: [
"Está prohibido percibir honorarios por encima de los baremos establecidos por ley",
"El trabajador no puede ser despedido sin la autorización previa del Colegio Profesional"
]
},
{
enunciado: "Un ciudadano de la UE que trabaje en España tiene derecho a:",
correcta: "La igualdad de trato respecto a los trabajadores españoles en materia sindical",
incorrectas: [
"Exigir que su contrato de trabajo se redacte únicamente en su lengua materna",
"No pagar impuestos sobre la renta durante los primeros cinco años de estancia"
]
},
{
enunciado: "La configuración jurídica de las profesiones busca equilibrar:",
correcta: "La libertad individual con la seguridad y calidad de los servicios prestados",
incorrectas: [
"El número de hombres y mujeres que acceden a las facultades de medicina",
"Los horarios de apertura de los centros públicos y los laboratorios privados"
]
},
{
enunciado: "El derecho a la libre elección de profesión no ampara:",
correcta: "El ejercicio de actividades ilícitas o que carezcan de la titulación exigida",
incorrectas: [
"La posibilidad de cambiar de oficio más de tres veces a lo largo de la vida laboral",
"La opción de trabajar como autónomo en lugar de por cuenta ajena"
]
},
{
enunciado: "Las 'medidas de compensación' en el reconocimiento de títulos pueden consistir en:",
correcta: "Un periodo de prácticas o una prueba de aptitud si existen diferencias sustanciales",
incorrectas: [
"El pago de una tasa adicional para equiparar el coste de la matrícula universitaria",
"La realización de un nuevo grado completo en la universidad del país de acogida"
]
},
{
enunciado: "La libre prestación de servicios permite a un profesional sanitario:",
correcta: "Atender a un paciente en otro Estado miembro sin necesidad de residencia fija",
incorrectas: [
"Ignorar las normas éticas del país de destino mientras dure la prestación",
"Cobrar sus honorarios en una moneda distinta al euro dentro de la zona euro"
]
},
{
enunciado: "La reserva de determinados puestos en la Administración Pública a nacionales se limita a:",
correcta: "Aquellos que impliquen el ejercicio de poder público y soberanía del Estado",
incorrectas: [
"Todos los puestos de personal administrativo y de limpieza de los hospitales",
"Las plazas de técnicos de laboratorio en centros de investigación privados"
]
}
];