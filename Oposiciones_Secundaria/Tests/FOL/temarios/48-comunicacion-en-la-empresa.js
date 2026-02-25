'use strict';

var PREGUNTAS = [
{
enunciado: "En el proceso de comunicación, el 'código' se define como:",
correcta: "El conjunto de signos y reglas compartidos por emisor y receptor",
incorrectas: [
"El soporte físico a través del cual viaja la información técnica",
"La respuesta que el técnico envía tras recibir una instrucción"
]
},
{
enunciado: "La comunicación descendente es aquella que fluye desde:",
correcta: "La dirección hacia los niveles inferiores de la jerarquía",
incorrectas: [
"Los técnicos de laboratorio hacia el gerente del centro",
"Personal del mismo rango profesional en distintos departamentos"
]
},
{
enunciado: "Un ejemplo de comunicación ascendente en la empresa sería:",
correcta: "Una encuesta de satisfacción o una sugerencia enviada por un técnico",
incorrectas: [
"La publicación de una orden interna en el tablón de anuncios",
"Un manual de procedimientos entregado por el jefe de laboratorio"
]
},
{
enunciado: "La comunicación horizontal tiene como objetivo principal:",
correcta: "La coordinación entre personas del mismo nivel jerárquico",
incorrectas: [
"Imponer sanciones disciplinarias por errores en los análisis",
"Transmitir las órdenes de la dirección general a los operarios"
]
},
{
enunciado: "Se denomina 'ruido' en el proceso comunicativo a:",
correcta: "Cualquier interferencia que distorsione o impida la recepción del mensaje",
incorrectas: [
"El sonido ambiental producido por las centrífugas del laboratorio",
"La falta de titulación académica de uno de los interlocutores"
]
},
{
enunciado: "La comunicación no verbal incluye elementos como:",
correcta: "Los gestos, la postura corporal, el tono de voz y la mirada",
incorrectas: [
"Los correos electrónicos cifrados enviados entre técnicos",
"Las circulares impresas que se reparten en mano a la plantilla"
]
},
{
enunciado: "Una barrera semántica en la comunicación ocurre cuando:",
correcta: "Emisor y receptor dan un significado distinto a las palabras utilizadas",
incorrectas: [
"Existe una avería técnica en los sistemas de telefonía del centro",
"El receptor tiene un prejuicio negativo hacia la figura del emisor"
]
},
{
enunciado: "La comunicación informal en la empresa se caracteriza por:",
correcta: "Surgir de forma espontánea y no seguir los cauces oficiales",
incorrectas: [
"Estar regulada estrictamente por el estatuto de los trabajadores",
"Utilizar exclusivamente documentos firmados y sellados por el director"
]
},
{
enunciado: "El 'feedback' o retroalimentación es fundamental para:",
correcta: "Confirmar que el receptor ha comprendido correctamente el mensaje",
incorrectas: [
"Aumentar la velocidad de los equipos informáticos del laboratorio",
"Garantizar que el emisor no vuelva a hablar con el mismo técnico"
]
},
{
enunciado: "Las barreras psicológicas de la comunicación están relacionadas con:",
correcta: "La situación emocional o la personalidad de los interlocutores",
incorrectas: [
"La distancia física entre los puestos de trabajo del laboratorio",
"El uso de tecnicismos químicos excesivamente complejos"
]
},
{
enunciado: "La red de comunicación en 'estrella' o centralizada implica que:",
correcta: "Toda la información pasa por una persona central que la distribuye",
incorrectas: [
"Todos los técnicos se comunican libremente sin jerarquía alguna",
"La información solo fluye entre los laboratorios de la misma planta"
]
},
{
enunciado: "La comunicación escrita tiene la ventaja sobre la oral de:",
correcta: "Proporcionar un registro permanente y permitir mayor reflexión",
incorrectas: [
"Ser mucho más rápida y permitir una respuesta inmediata",
"Eliminar por completo la posibilidad de que existan ruidos"
]
},
{
enunciado: "El canal de comunicación es:",
correcta: "El medio físico a través del cual se transmite el mensaje",
incorrectas: [
"La persona que inicia el proceso enviando la información",
"El conjunto de normas éticas que rigen el comportamiento técnico"
]
},
{
enunciado: "Los rumores son un fenómeno típico de la comunicación:",
correcta: "Informal",
incorrectas: [
"Institucional",
"Ascendente"
]
},
{
enunciado: "Una comunicación eficaz requiere que el mensaje sea:",
correcta: "Claro, conciso, oportuno y completo",
incorrectas: [
"Extenso, complejo y con abundantes términos en latín",
"Enviado exclusivamente a través de servicios de mensajería privada"
]
},
{
enunciado: "La escucha activa consiste en:",
correcta: "Escuchar con atención plena y demostrar comprensión al emisor",
incorrectas: [
"Grabar las conversaciones de los técnicos para su análisis posterior",
"Interrumpir constantemente para corregir los errores del interlocutor"
]
},
{
enunciado: "Las barreras físicas incluyen dificultades como:",
correcta: "El ruido ambiental, la distancia o fallos en los equipos",
incorrectas: [
"La diferencia de idiomas entre los técnicos superiores",
"El miedo al despido que siente el receptor del mensaje"
]
},
{
enunciado: "La comunicación externa de la empresa se dirige a:",
correcta: "Clientes, proveedores, entidades financieras y sociedad en general",
incorrectas: [
"Los propios trabajadores del centro de diagnóstico sanitario",
"Únicamente a los familiares directos de los socios capitalistas"
]
},
{
enunciado: "El control de la información en la empresa sirve para:",
correcta: "Asegurar la confidencialidad, integridad y disponibilidad de los datos",
incorrectas: [
"Impedir que los técnicos lean el convenio colectivo del sector",
"Ocultar los resultados de los análisis clínicos a los pacientes"
]
},
{
enunciado: "Una barrera fisiológica sería aquella derivada de:",
correcta: "Alguna limitación física de los sentidos (oído, vista) de los sujetos",
incorrectas: [
"La falta de presupuesto para comprar ordenadores nuevos",
"La estructura excesivamente jerarquizada del laboratorio"
]
},
{
enunciado: "La red de comunicación en 'círculo' permite que cada miembro:",
correcta: "Se comunique con los dos compañeros más cercanos",
incorrectas: [
"Envíe información directamente al director general sin filtros",
"Reciba órdenes exclusivamente del responsable de limpieza"
]
},
{
enunciado: "La comunicación asertiva se define como la capacidad de:",
correcta: "Expresar opiniones y sentimientos de forma clara y respetuosa",
incorrectas: [
"Imponer el criterio propio mediante el uso de la fuerza verbal",
"Dar siempre la razón al jefe aunque esté equivocado técnicamente"
]
},
{
enunciado: "El 'contexto' en la comunicación es:",
correcta: "La situación o entorno en que se produce el acto comunicativo",
incorrectas: [
"El precio que el laboratorio cobra por cada informe emitido",
"El historial académico del técnico que recibe la instrucción"
]
},
{
enunciado: "La comunicación formal se basa en:",
correcta: "Canales preestablecidos según la estructura organizativa",
incorrectas: [
"Encuentros fortuitos en los pasillos del centro de salud",
"La publicación de opiniones personales en redes sociales externas"
]
},
{
enunciado: "La principal desventaja de la comunicación oral es:",
correcta: "Su carácter efímero y el riesgo de distorsión del mensaje",
incorrectas: [
"El elevado coste económico de realizar llamadas telefónicas",
"La imposibilidad de utilizar gestos o expresiones faciales"
]
},
{
enunciado: "En la comunicación descendente, el riesgo de 'filtrado' implica que:",
correcta: "El mensaje pierde contenido o veracidad al pasar por varios niveles",
incorrectas: [
"Los reactivos químicos se contaminan por falta de higiene técnica",
"Los técnicos de base conocen los secretos de la empresa antes que nadie"
]
},
{
enunciado: "La empatía en el proceso comunicativo favorece:",
correcta: "La comprensión de los sentimientos y puntos de vista del otro",
incorrectas: [
"La realización más rápida de los cultivos microbiológicos",
"El aumento del precio de los servicios de análisis clínico"
]
},
{
enunciado: "Las circulares y notas interiores son instrumentos de comunicación:",
correcta: "Formal y escrita",
incorrectas: [
"Informal y verbal",
"Ascendente y anónima"
]
},
{
enunciado: "La red de comunicación en 'cadena' es propia de:",
correcta: "Organizaciones muy jerarquizadas y burocráticas",
incorrectas: [
"Equipos de investigación con estructura plana y flexible",
"Laboratorios que funcionan sin ningún tipo de jefe"
]
},
{
enunciado: "Un mensaje ambiguo es aquel que:",
correcta: "Puede interpretarse de varias maneras diferentes",
incorrectas: [
"Está escrito en un lenguaje técnico extremadamente preciso",
"Ha sido verificado por tres supervisores del laboratorio"
]
},
{
enunciado: "La comunicación diagonal se produce entre:",
correcta: "Personas de distintos departamentos y niveles jerárquicos",
incorrectas: [
"Técnicos del mismo rango dentro del mismo laboratorio",
"La dirección del centro y los proveedores de reactivos químicos"
]
},
{
enunciado: "El paralenguaje se refiere a:",
correcta: "Las variaciones en la voz como el volumen, ritmo o entonación",
incorrectas: [
"El uso de idiomas extranjeros durante la jornada de trabajo",
"La comunicación mediante señales de humo o banderas"
]
},
{
enunciado: "La etapa de 'decodificación' la realiza:",
correcta: "El receptor al interpretar los signos recibidos",
incorrectas: [
"El emisor al transformar la idea en un mensaje concreto",
"La máquina de análisis al imprimir el resultado del estudio"
]
},
{
enunciado: "El control de la información evita la 'infoxicación', que es:",
correcta: "El exceso de información que impide tomar decisiones acertadas",
incorrectas: [
"La intoxicación accidental de un técnico con reactivos caducados",
"La falta absoluta de noticias sobre la marcha económica del centro"
]
},
{
enunciado: "La comunicación interpersonal es aquella que se da:",
correcta: "Entre dos o más personas físicamente próximas o conectadas",
incorrectas: [
"Dentro de la mente de un solo técnico mientras reflexiona",
"A través de medios de comunicación de masas como la televisión"
]
},
{
enunciado: "Las barreras administrativas derivan de:",
correcta: "Una mala estructura organizativa o planificación deficiente",
incorrectas: [
"El uso de uniformes de trabajo de tallas inadecuadas",
"La diferencia de edad entre los socios de la empresa"
]
},
{
enunciado: "La comunicación verbal puede ser:",
correcta: "Oral y escrita",
incorrectas: [
"Exclusivamente gestual y corporal",
"Únicamente a través de señales luminosas"
]
},
{
enunciado: "La comunicación gestual forma parte de:",
correcta: "La comunicación no verbal",
incorrectas: [
"La comunicación escrita formal",
"La comunicación administrativa centralizada"
]
},
{
enunciado: "En una red 'multicanal', la información fluye:",
correcta: "Entre todos los miembros en todas las direcciones",
incorrectas: [
"En una única dirección impuesta por el jefe técnico",
"Desde el laboratorio hacia el exterior sin retorno posible"
]
},
{
enunciado: "La credibilidad del emisor influye en la comunicación como:",
correcta: "Un facilitador que reduce las barreras psicológicas",
incorrectas: [
"Un ruido semántico que dificulta la comprensión del técnico",
"Un canal físico adicional para el envío de muestras biológicas"
]
}
];