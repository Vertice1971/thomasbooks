'use strict';

var PREGUNTAS = [
	{
		enunciado: "La Clasificación Internacional de Enfermedades (CIE) es mantenida y publicada por:",
		correcta: "La Organización Mundial de la Salud (OMS)",
		incorrectas: [
			"La Asociación Médica Mundial",
			"El Ministerio de Hacienda de España",
			"La Agencia Europea del Medicamento"
		]
	},
	{
		enunciado: "¿Cuál es el sistema de codificación de diagnósticos vigente actualmente en el SNS español?",
		correcta: "CIE-10-ES",
		incorrectas: [
			"CIE-9-MC",
			"CIE-11 (como estándar de uso generalizado todavía)",
			"CIAP-1"
		]
	},
	{
		enunciado: "En la CIE-10-ES Diagnósticos, el primer carácter del código es siempre:",
		correcta: "Una letra",
		incorrectas: [
			"Un número del 0 al 9",
			"Un símbolo especial (como # o $)",
			"Un espacio en blanco"
		]
	},
	{
		enunciado: "La estructura de la CIE-10-ES Procedimientos (PCS) consta exactamente de:",
		correcta: "7 caracteres alfanuméricos",
		incorrectas: [
			"3 a 5 dígitos decimales",
			"Un código de barras de 13 cifras",
			"Una letra seguida de dos números"
		]
	},
	{
		enunciado: "Un Grupo Relacionado por el Diagnóstico (GRD) clasifica a los pacientes según:",
		correcta: "Su similitud clínica y el consumo de recursos (isoconsumo)",
		incorrectas: [
			"El orden de llegada al servicio de urgencias",
			"Su nivel de renta y tipo de tarjeta sanitaria",
			"El tiempo que tardan en recuperarse de la anestesia"
		]
	},
	{
		enunciado: "La terminología SNOMED-CT se organiza fundamentalmente mediante:",
		correcta: "Conceptos, términos y relaciones jerárquicas",
		incorrectas: [
			"Una lista alfabética de medicamentos genéricos",
			"Un sistema de numeración basado en el peso del órgano",
			"La fecha de descubrimiento de la enfermedad"
		]
	},
	{
		enunciado: "En codificación, la 'Comorbilidad' se define como:",
		correcta: "Una patología preexistente que acompaña al diagnóstico principal",
		incorrectas: [
			"Una infección que el paciente adquiere durante el ingreso",
			"La causa exacta por la que el paciente fallece en planta",
			"El efecto secundario de un fármaco mal administrado"
		]
	},
	{
		enunciado: "El sistema de clasificación CIAP-2 se utiliza preferentemente en:",
		correcta: "Atención Primaria",
		incorrectas: [
			"Servicios de Cirugía Cardiaca",
			"Unidades de Cuidados Intensivos",
			"Centros de Investigación Forense"
		]
	},
	{
		enunciado: "En la CIE-10-ES Procedimientos, el cuarto carácter representa:",
		correcta: "La localización anatómica o sitio corporal",
		incorrectas: [
			"El tipo de abordaje quirúrgico",
			"El dispositivo o implante utilizado",
			"La sección general del sistema"
		]
	},
	{
		enunciado: "Los códigos 'Z' de la CIE-10 se utilizan para describir:",
		correcta: "Factores que influyen en el estado de salud y contacto con servicios",
		incorrectas: [
			"Enfermedades infecciosas de origen desconocido",
			"Causas externas de lesiones y envenenamientos",
			"Procedimientos de medicina nuclear avanzada"
		]
	},
	{
		enunciado: "El 'Case-Mix' de un hospital hace referencia a:",
		correcta: "La variedad y complejidad de los pacientes atendidos",
		incorrectas: [
			"El menú diario que se sirve en la cafetería",
			"La mezcla de fármacos en una solución parenteral",
			"La distribución de camas por turnos de enfermería"
		]
	},
	{
		enunciado: "La 'Causa Externa' en codificación explica:",
		correcta: "Cómo ocurrió una lesión (accidente, agresión, etc.)",
		incorrectas: [
			"El nombre del hospital desde el que se deriva al paciente",
			"El patógeno ambiental que causó la infección",
			"La temperatura exterior en el momento del ingreso"
		]
	},
	{
		enunciado: "En el sistema GRD, una 'Complicación' (CC) es:",
		correcta: "Una afección que surge durante el ingreso y prolonga la estancia",
		incorrectas: [
			"Un síntoma que el paciente oculta al médico",
			"La falta de material para realizar una intervención",
			"La necesidad de repetir una prueba diagnóstica"
		]
	},
	{
		enunciado: "El 'Peso del GRD' es un valor numérico que representa:",
		correcta: "El coste relativo del grupo respecto a la media de todos los GRD",
		incorrectas: [
			"La masa corporal media de los pacientes del grupo",
			"La gravedad del dolor percibido por el enfermo",
			"El número de médicos necesarios para tratar el proceso"
		]
	},
	{
		enunciado: "LOINC es un sistema estándar utilizado para codificar:",
		correcta: "Pruebas de laboratorio y documentos clínicos",
		incorrectas: [
			"Alergias a alimentos y polen",
			"Recetas de anteojos y lentes de contacto",
			"Servicios de ambulancia y transporte sanitario"
		]
	},
	{
		enunciado: "En la CIE-10-ES, el 'carácter de relleno' cuando un código requiere 7 caracteres es:",
		correcta: "La letra X",
		incorrectas: [
			"El número 0",
			"Un punto (.)",
			"Una almohadilla (#)"
		]
	},
	{
		enunciado: "La codificación de procedimientos en CIE-10-ES utiliza un sistema:",
		correcta: "Multiaxial",
		incorrectas: [
			"Lineal simple",
			"Alfabético estricto",
			"Decimal de un solo eje"
		]
	},
	{
		enunciado: "Un 'GRD Quirúrgico' es aquel en el que el paciente:",
		correcta: "Ha sido sometido a un procedimiento en quirófano",
		incorrectas: [
			"Ha sido visitado por un cirujano en la consulta",
			"Tiene una herida que requiere una cura de enfermería",
			"Ha fallecido antes de entrar a la sala de operaciones"
		]
	},
	{
		enunciado: "La codificación clínica es una tarea que debe realizarse:",
		correcta: "Al finalizar el episodio asistencial, tras el alta",
		incorrectas: [
			"En el mismo momento de la admisión del paciente",
			"Únicamente si el paciente solicita su historia clínica",
			"Cuando el hospital se queda sin presupuesto anual"
		]
	},
	{
		enunciado: "En SNOMED-CT, los 'Hijos' de un concepto son:",
		correcta: "Conceptos más específicos que heredan características del 'Padre'",
		incorrectas: [
			"Los descendientes biológicos del paciente codificado",
			"Los códigos que se utilizan solo para pediatría",
			"Las versiones antiguas del sistema que ya no se usan"
		]
	},
	{
		enunciado: "El 'Indice Alfabético' de la CIE sirve para:",
		correcta: "Localizar el término clínico y dirigir hacia la lista tabular",
		incorrectas: [
			"Asignar el código definitivo sin necesidad de más comprobaciones",
			"Ver el nombre de los médicos que descubrieron la enfermedad",
			"Conocer el tratamiento farmacológico de la patología"
		]
	},
	{
		enunciado: "La codificación de la morfología de las neoplasias (CIE-O) se usa en:",
		correcta: "Anatomía Patológica y Registros de Cáncer",
		incorrectas: [
			"Consultas de Fisioterapia y Rehabilitación",
			"Servicios de Odontología Preventiva",
			"Gestión de suministros de material de oficina"
		]
	},
	{
		enunciado: "Un código 'Combinado' en la CIE-10 es aquel que:",
		correcta: "Clasifica dos afecciones o una afección con una complicación en un solo código",
		incorrectas: [
			"Se forma uniendo los nombres de dos médicos distintos",
			"Cambia de significado según el sexo del paciente",
			"Solo puede ser usado por residentes de primer año"
		]
	},
	{
		enunciado: "La principal ventaja de usar códigos en lugar de texto libre es:",
		correcta: "Facilitar el procesamiento informático y la comparación estadística",
		incorrectas: [
			"Que los médicos no tengan que aprender a escribir correctamente",
			"Evitar que el paciente sepa qué enfermedad padece",
			"Poder imprimir los informes en impresoras más pequeñas"
		]
	},
	{
		enunciado: "El 'Grouper' es un programa informático que:",
		correcta: "Asigna automáticamente el GRD a partir de los códigos CIE",
		incorrectas: [
			"Busca grupos de pacientes para ensayos clínicos",
			"Agrupa las facturas de la luz y el agua del hospital",
			"Clasifica los expedientes en el archivo por colores"
		]
	},
	{
		enunciado: "En la CIE-10-ES Procedimientos, el carácter para el abordaje 'Abierto' es:",
		correcta: "0",
		incorrectas: [
			"3 (Percutáneo)",
			"4 (Percutáneo endoscópico)",
			"Z (No aplicable)"
		]
	},
	{
		enunciado: "Los 'Códigos de Exclusión' en la CIE indican:",
		correcta: "Que una afección no debe codificarse junto con otra",
		incorrectas: [
			"Que el paciente ha sido expulsado del hospital",
			"Que el código es secreto y solo para uso interno",
			"Que la enfermedad ha sido erradicada del mundo"
		]
	},
	{
		enunciado: "La 'Nota de Inclusión' bajo un código de la CIE sirve para:",
		correcta: "Dar ejemplos de afecciones que se clasifican en ese código",
		incorrectas: [
			"Anotar el nombre del paciente que tiene esa patología",
			"Añadir el precio de la medicación recomendada",
			"Indicar que el código es solo para uso en pediatría"
		]
	},
	{
		enunciado: "La 'Severidad' en los nuevos sistemas de GRD (APR-GRD) valora:",
		correcta: "El riesgo de mortalidad y el grado de disfunción orgánica",
		incorrectas: [
			"La intensidad del ruido en la habitación del paciente",
			"La dureza del carácter del paciente según enfermería",
			"El número de visitas que recibe el paciente al día"
		]
	},
	{
		enunciado: "La codificación requiere que el documentalista analice:",
		correcta: "Toda la documentación contenida en la Historia Clínica",
		incorrectas: [
			"Solo la carátula o portada de la carpeta",
			"Únicamente el tratamiento que figura en la receta",
			"La opinión del familiar que acompaña al paciente"
		]
	},
	{
		enunciado: "SNOMED-CT se considera una ontología porque:",
		correcta: "Define los conceptos y las relaciones lógicas entre ellos",
		incorrectas: [
			"Se estudia solo en las facultades de filosofía",
			"Es una lista cerrada que no permite añadir nada nuevo",
			"Solo sirve para codificar enfermedades raras"
		]
	},
	{
		enunciado: "Un diagnóstico 'Secundario' influye en el GRD si:",
		correcta: "Es una complicación o comorbilidad mayor (MCC)",
		incorrectas: [
			"El paciente ya tenía la patología hace veinte años",
			"El diagnóstico es un resfriado común sin importancia",
			"Ha sido escrito con bolígrafo de color rojo"
		]
	},
	{
		enunciado: "En la sección de 'Osteopatías' de la CIE, los códigos suelen empezar por:",
		correcta: "M",
		incorrectas: [
			"S (Traumatismos)",
			"C (Neoplasias)",
			"K (Aparato digestivo)"
		]
	},
	{
		enunciado: "La 'Especificidad' en codificación significa seleccionar:",
		correcta: "El código que mejor describa la afección con el máximo detalle",
		incorrectas: [
			"El código más corto para terminar antes la tarea",
			"Un código inespecífico si el médico tiene mala letra",
			"El mismo código para todos los pacientes de la misma planta"
		]
	},
	{
		enunciado: "El CMBD es la fuente principal para:",
		correcta: "La obtención de los GRD a nivel hospitalario",
		incorrectas: [
			"La compra de alimentos para la cocina del hospital",
			"El control de asistencia de los trabajadores",
			"La gestión de las redes sociales del centro"
		]
	},
	{
		enunciado: "En la CIE-10, los corchetes [ ] se utilizan para:",
		correcta: "Identificar códigos de manifestación (etiología/manifestación)",
		incorrectas: [
			"Cerrar la historia clínica de forma definitiva",
			"Indicar que el código es opcional y no obligatorio",
			"Resaltar el nombre del cirujano jefe"
		]
	},
	{
		enunciado: "El 'Manual de Codificación' es una herramienta que:",
		correcta: "Establece las normas y pautas para asignar los códigos correctamente",
		incorrectas: [
			"Explica cómo arreglar los ordenadores del servicio",
			"Contiene los teléfonos de todos los hospitales de España",
			"Enseña al paciente a entender su enfermedad"
		]
	},
	{
		enunciado: "La codificación de 'Signos y Síntomas' solo se realiza cuando:",
		correcta: "No se ha alcanzado un diagnóstico definitivo al alta",
		incorrectas: [
			"El paciente tiene mucha fiebre de forma puntual",
			"El médico quiere escribir más texto en el informe",
			"La enfermedad es muy famosa y conocida por todos"
		]
	},
	{
		enunciado: "Un sistema de codificación 'Abierto' permite:",
		correcta: "La incorporación de nuevos códigos ante nuevas enfermedades",
		incorrectas: [
			"Que cualquier persona desde internet añada diagnósticos",
			"Que los códigos no tengan una estructura fija",
			"Usar el sistema sin tener que pagar ninguna licencia"
		]
	},
	{
		enunciado: "La calidad de la codificación depende directamente de:",
		correcta: "La calidad y exhaustividad de la documentación clínica",
		incorrectas: [
			"La marca del teclado utilizado por el codificador",
			"El número de impresoras que hay en el despacho",
			"La velocidad de la conexión a internet del hospital"
		]
	}
];