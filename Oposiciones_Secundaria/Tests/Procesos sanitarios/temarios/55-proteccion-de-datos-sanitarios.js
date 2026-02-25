'use strict';

var PREGUNTAS = [
	{
		enunciado: "Según el RGPD (UE) 2016/679, los datos relativos a la salud se consideran:",
		correcta: "Categorías especiales de datos con protección reforzada",
		incorrectas: [
			"Datos de acceso público y libre difusión",
			"Datos administrativos de baja peligrosidad",
			"Información que no requiere consentimiento bajo ningún concepto"
		]
	},
	{
		enunciado: "La figura del Delegado de Protección de Datos (DPD) es obligatoria en:",
		correcta: "Cualquier autoridad u organismo público, incluidos hospitales públicos",
		incorrectas: [
			"Solo en empresas con menos de diez trabajadores",
			"Exclusivamente en centros de estética y bienestar",
			"Únicamente si el hospital tiene más de mil camas"
		]
	},
	{
		enunciado: "El 'Derecho a la Portabilidad' permite al paciente:",
		correcta: "Recibir sus datos en un formato estructurado y transmitirlos a otro responsable",
		incorrectas: [
			"Llevarse su historial clínico en papel a su domicilio de forma definitiva",
			"Exigir que el médico se desplace a su casa para la consulta",
			"Cambiar su número de teléfono manteniendo el mismo operador"
		]
	},
	{
		enunciado: "El 'Responsable del Tratamiento' en un Hospital Público es:",
		correcta: "La institución o el Servicio de Salud correspondiente",
		incorrectas: [
			"El administrativo que graba los datos en el sistema",
			"El médico de guardia que atiende al paciente",
			"La empresa externa que limpia las instalaciones"
		]
	},
	{
		enunciado: "Una Evaluación de Impacto relativa a la Protección de Datos (EIPD) debe realizarse:",
		correcta: "Antes de iniciar un tratamiento que entrañe un alto riesgo para los derechos",
		incorrectas: [
			"Cada vez que un paciente solicita una copia de su historia",
			"Al finalizar el año para ver cuántos datos se han borrado",
			"Solo si se produce una fuga de información confirmada"
		]
	},
	{
		enunciado: "El principio de 'Integridad y Confidencialidad' obliga a:",
		correcta: "Garantizar la seguridad de los datos contra el tratamiento no autorizado o pérdida",
		incorrectas: [
			"Que los datos sean exactos y se actualicen cada hora",
			"Publicar el nombre de los pacientes en la puerta de la habitación",
			"Permitir que los estudiantes consulten cualquier historia sin permiso"
		]
	},
	{
		enunciado: "En el ámbito sanitario, el tratamiento de datos para asistencia médica es lícito:",
		correcta: "Sin necesidad de consentimiento explícito por ser necesario para el diagnóstico",
		incorrectas: [
			"Solo si el paciente firma un documento ante notario cada vez",
			"Únicamente si el paciente es mayor de 21 años",
			"Bajo ninguna circunstancia, siempre se requiere permiso judicial"
		]
	},
	{
		enunciado: "El 'Derecho al Olvido' (Supresión) en sanidad está limitado por:",
		correcta: "La obligación legal de conservación de la documentación clínica",
		incorrectas: [
			"La falta de espacio en los servidores para borrar archivos",
			"El deseo del médico de mantener sus estadísticas personales",
			"El precio que el hospital cobra por borrar cada registro"
		]
	},
	{
		enunciado: "Un 'Encargado del Tratamiento' es:",
		correcta: "Una entidad externa que trata datos por cuenta del responsable",
		incorrectas: [
			"El director gerente del hospital exclusivamente",
			"El paciente que se encarga de vigilar su propia información",
			"Cualquier profesional sanitario que tenga acceso a la historia"
		]
	},
	{
		enunciado: "El principio de 'Limitación de la Finalidad' significa que:",
		correcta: "Los datos solo pueden recogerse para fines determinados y legítimos",
		incorrectas: [
			"Solo se pueden recoger datos de pacientes que vivan cerca del hospital",
			"El tratamiento de datos debe durar como máximo diez minutos",
			"La información solo puede ser leída por una persona a la vez"
		]
	},
	{
		enunciado: "La 'Pseudonimización' se diferencia de la anonimización en que:",
		correcta: "Aún es posible reidentificar al sujeto mediante información adicional separada",
		incorrectas: [
			"Es un proceso irreversible que destruye la identidad para siempre",
			"Consiste en inventar diagnósticos falsos para proteger al paciente",
			"Solo se puede realizar en documentos escritos a mano"
		]
	},
	{
		enunciado: "La notificación de una 'Violación de Seguridad' a la Agencia de Protección de Datos debe hacerse en:",
		correcta: "Un máximo de 72 horas tras tener constancia de ella",
		incorrectas: [
			"Un plazo de un mes desde que ocurrió el suceso",
			"Cualquier momento antes de que termine el año natural",
			"No es obligatorio notificarlo si los datos están cifrados"
		]
	},
	{
		enunciado: "El consentimiento de un menor para el tratamiento de sus datos de salud es válido:",
		correcta: "A partir de los 14 años (en España), según la LOPDGDD",
		incorrectas: [
			"Desde el momento del nacimiento",
			"A partir de los 18 años exclusivamente",
			"Solo si el menor tiene el título de bachillerato"
		]
	},
	{
		enunciado: "Las aplicaciones de 'mHealth' (salud móvil) deben garantizar:",
		correcta: "Privacidad desde el diseño y por defecto",
		incorrectas: [
			"Que los datos se compartan automáticamente en Facebook",
			"El acceso libre de los desarrolladores a toda la galería de fotos",
			"Que la batería del móvil dure siempre más de 24 horas"
		]
	},
	{
		enunciado: "El registro de 'Actividades de Tratamiento' (RAT) es un documento que:",
		correcta: "Describe qué datos se tratan, para qué y quién es el responsable",
		incorrectas: [
			"Anota las horas de entrada y salida de los pacientes",
			"Listado de todas las medicinas que toma cada usuario",
			"Resumen de las operaciones quirúrgicas realizadas al día"
		]
	},
	{
		enunciado: "El principio de 'Minimización de Datos' implica:",
		correcta: "Tratar solo los datos adecuados y estrictamente necesarios para el fin",
		incorrectas: [
			"Escribir los informes con un tamaño de letra muy pequeño",
			"Reducir el número de pacientes atendidos al día",
			"Borrar la mitad de la historia clínica para ahorrar espacio"
		]
	},
	{
		enunciado: "El acceso a la historia clínica de un paciente fallecido se permite a:",
		correcta: "Personas vinculadas al fallecido por razones familiares, salvo prohibición expresa",
		incorrectas: [
			"Cualquier persona que lo solicite por curiosidad",
			"Exclusivamente a los herederos que presenten el testamento",
			"Nadie, los datos de los fallecidos son secretos absolutos"
		]
	},
	{
		enunciado: "Una medida de seguridad 'Organizativa' sería:",
		correcta: "Establecer una política de contraseñas y formación del personal",
		incorrectas: [
			"Instalar un sistema de alimentación ininterrumpida (SAI)",
			"Colocar cámaras de vigilancia en todos los pasillos",
			"Cifrar el disco duro del servidor central"
		]
	},
	{
		enunciado: "El 'Interés Vital' como base jurídica para tratar datos de salud se aplica cuando:",
		correcta: "El tratamiento es necesario para salvar la vida de un paciente inconsciente",
		incorrectas: [
			"El hospital necesita ganar dinero para seguir funcionando",
			"El médico tiene mucho interés en publicar un libro",
			"El paciente tiene mucha curiosidad por saber su diagnóstico"
		]
	},
	{
		enunciado: "Las aplicaciones informáticas para 'Gestión de Turnos' deben evitar:",
		correcta: "Mostrar el nombre completo y la patología del paciente en pantallas públicas",
		incorrectas: [
			"Usar números o códigos para llamar a los pacientes",
			"Funcionar con pantallas de tecnología LED o LCD",
			"Estar conectadas a la red eléctrica del hospital"
		]
	},
	{
		enunciado: "La 'Transparencia' en protección de datos obliga a:",
		correcta: "Informar al paciente de forma clara sobre el uso de sus datos",
		incorrectas: [
			"Hacer que todas las paredes de la consulta sean de cristal",
			"Publicar los sueldos de todos los médicos en la web",
			"Dejar que el paciente vea la pantalla mientras el médico escribe"
		]
	},
	{
		enunciado: "El tratamiento de datos para 'Salud Pública' (ej. control de pandemias) es lícito:",
		correcta: "Por razones de interés público esencial, sin consentimiento",
		incorrectas: [
			"Solo si el paciente está de acuerdo con las medidas del gobierno",
			"Únicamente si la enfermedad es mortal en menos de 24 horas",
			"Si el paciente es extranjero y no tiene tarjeta sanitaria"
		]
	},
	{
		enunciado: "La 'Seguridad Física' de los datos implica:",
		correcta: "Protección de los servidores contra incendios, robos o inundaciones",
		incorrectas: [
			"Que el personal informático haga ejercicio diariamente",
			"Instalar un antivirus potente en todos los ordenadores",
			"Cambiar la contraseña cada quince días obligatoriamente"
		]
	},
	{
		enunciado: "El derecho de 'Oposición' permite al interesado:",
		correcta: "Solicitar que no se traten sus datos por motivos personales concretos",
		incorrectas: [
			"Negarse a ser explorado por un médico que no sea de su agrado",
			"Prohibir que el hospital use electricidad para su tratamiento",
			"Exigir que su diagnóstico se cambie por otro menos grave"
		]
	},
	{
		enunciado: "La LOPDGDD garantiza el 'Derecho a la desconexión digital' en el ámbito laboral para:",
		correcta: "Respetar el tiempo de descanso y la intimidad del trabajador",
		incorrectas: [
			"Permitir que el médico apague el monitor durante la cirugía",
			"Evitar que el hospital tenga que pagar la factura de internet",
			"Que los pacientes no puedan llamar al hospital por la noche"
		]
	},
	{
		enunciado: "Un sistema de 'Auditoría' en una aplicación sanitaria debe detectar:",
		correcta: "Accesos indebidos o intentos de intrusión en la base de datos",
		incorrectas: [
			"El número de veces que se ha usado la cafetera del servicio",
			"La cantidad de folios que se han gastado en la impresora",
			"Si el personal lleva el uniforme correctamente puesto"
		]
	},
	{
		enunciado: "La Agencia Española de Protección de Datos (AEPD) tiene potestad para:",
		correcta: "Sancionar a las instituciones que incumplan la normativa",
		incorrectas: [
			"Operar a los pacientes que han sufrido fugas de datos",
			"Escribir las historias clínicas en lugar de los médicos",
			"Decidir qué medicamentos deben recetarse en cada caso"
		]
	},
	{
		enunciado: "El tratamiento de datos con fines de 'Investigación Científica' requiere:",
		correcta: "El cumplimiento de garantías específicas y, preferiblemente, anonimización",
		incorrectas: [
			"Que el investigador sea el dueño del hospital",
			"Publicar el nombre de todos los participantes en el estudio",
			"Que el estudio se realice siempre fuera de horario laboral"
		]
	},
	{
		enunciado: "La 'Exactitud' de los datos personales implica que:",
		correcta: "Los datos deben ser veraces y estar actualizados",
		incorrectas: [
			"Los diagnósticos deben coincidir con lo que el paciente cree que tiene",
			"La caligrafía del médico debe ser perfectamente legible por todos",
			"El peso del paciente debe medirse con una precisión de miligramos"
		]
	},
	{
		enunciado: "En las aplicaciones de 'Carpeta de Salud', el acceso del ciudadano se realiza mediante:",
		correcta: "Sistemas de identificación segura como Cl@ve o certificado digital",
		incorrectas: [
			"Simplemente introduciendo el nombre y el primer apellido",
			"Una contraseña que se envía por correo postal ordinario",
			"Llamando por teléfono y diciendo el número de la seguridad social"
		]
	},
	{
		enunciado: "La 'Limitación del Tratamiento' significa que:",
		correcta: "El responsable solo podrá conservar los datos pero no usarlos",
		incorrectas: [
			"Solo se pueden tratar los datos de diez pacientes al día",
			"El médico solo puede mirar la historia durante cinco minutos",
			"La aplicación informática solo funciona en un horario limitado"
		]
	},
	{
		enunciado: "El concepto de 'Privacidad por Defecto' implica que:",
		correcta: "Solo se tratan los datos necesarios para cada fin específico de forma automática",
		incorrectas: [
			"El sistema viene configurado para compartir todo por internet",
			"El médico debe pedir permiso al informático para ver cada dato",
			"Los datos se borran solos si el médico no pulsa un botón"
		]
	},
	{
		enunciado: "El deber de 'Sigilo' o secreto profesional es:",
		correcta: "Obligatorio para todo el personal que acceda a los datos, sea sanitario o no",
		incorrectas: [
			"Una recomendación que solo afecta a los médicos titulados",
			"Algo que desaparece una vez que el paciente recibe el alta",
			"Un acuerdo voluntario que se firma si el trabajador quiere"
		]
	},
	{
		enunciado: "Las aplicaciones para 'Gestión de Cuidados' de enfermería permiten:",
		correcta: "Registrar las actividades y constantes de forma inmediata a pie de cama",
		incorrectas: [
			"Controlar las redes sociales de los familiares del paciente",
			"Pedir la cena del personal en restaurantes externos",
			"Que el paciente elija qué enfermero quiere que le atienda"
		]
	},
	{
		enunciado: "El tratamiento de datos de salud por las mutuas de accidentes requiere:",
		correcta: "Una base jurídica legítima vinculada a la gestión de la prestación",
		incorrectas: [
			"Que el trabajador sea el mejor amigo del director de la mutua",
			"La publicación de los datos del accidente en el tablón de la empresa",
			"Que la empresa pague un extra por acceder a la historia clínica"
		]
	},
	{
		enunciado: "Un 'Análisis de Riesgos' previo al tratamiento de datos busca:",
		correcta: "Identificar posibles amenazas y establecer medidas de seguridad adecuadas",
		incorrectas: [
			"Saber si el hospital va a quebrar en los próximos meses",
			"Evaluar si los médicos están cansados y pueden cometer errores",
			"Calcular el número de pacientes que van a morir este año"
		]
	},
	{
		enunciado: "El 'Consentimiento' debe ser, según el RGPD:",
		correcta: "Libre, específico, informado e inequívoco",
		incorrectas: [
			"Tácito u obtenido mediante el silencio del interesado",
			"Válido para siempre y para cualquier uso futuro desconocido",
			"Obligatorio para poder recibir asistencia en urgencias"
		]
	},
	{
		enunciado: "La 'Garantía de Derechos Digitales' en la LOPDGDD incluye:",
		correcta: "El derecho al testamento digital y a la educación digital",
		incorrectas: [
			"El derecho a tener un ordenador de última generación gratis",
			"La obligación de usar redes sociales para comunicarse con el médico",
			"El derecho a piratear software médico para investigación"
		]
	},
	{
		enunciado: "El acceso a la HC por parte de la Inspección Médica es:",
		correcta: "Lícito para el cumplimiento de sus funciones de control y evaluación",
		incorrectas: [
			"Prohibido si el paciente no da su permiso por escrito",
			"Solo posible si hay una orden judicial de un tribunal superior",
			"Limitado a los datos de la última semana de hospitalización"
		]
	},
	{
		enunciado: "Las sanciones económicas por incumplir el RGPD pueden alcanzar:",
		correcta: "Hasta 20 millones de euros o el 4% de la facturación global",
		incorrectas: [
			"Un máximo de 100 euros y una amonestación verbal",
			"Solo la inhabilitación del administrativo durante un día",
			"No existen sanciones económicas para organismos públicos"
		]
	}
];