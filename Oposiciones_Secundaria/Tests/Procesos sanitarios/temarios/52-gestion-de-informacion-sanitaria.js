'use strict';

var PREGUNTAS = [
	{
		enunciado: "Según la Ley 41/2002, el tratamiento de los datos de la historia clínica tiene como fin principal:",
		correcta: "Facilitar la asistencia sanitaria del paciente",
		incorrectas: [
			"La publicación de casos clínicos en redes sociales",
			"El control disciplinario del personal de enfermería",
			"La venta de estadísticas a aseguradoras privadas"
		]
	},
	{
		enunciado: "En la gestión de la información, el proceso de 'validación' consiste en:",
		correcta: "Comprobar que los datos son coherentes, lógicos y completos",
		incorrectas: [
			"Imprimir los resultados para que el médico los firme",
			"Borrar los datos de los pacientes que han fallecido",
			"Traducir los diagnósticos a varios idiomas oficiales"
		]
	},
	{
		enunciado: "La 'Disponibilidad' como dimensión de la seguridad informática garantiza:",
		correcta: "Que los usuarios autorizados tengan acceso a los datos cuando lo necesiten",
		incorrectas: [
			"Que los datos no sean modificados accidentalmente",
			"Que nadie pueda leer la información sin permiso",
			"Que la información sea veraz y esté actualizada"
		]
	},
	{
		enunciado: "En estadística sanitaria, la 'Mediana' se define como:",
		correcta: "El valor que divide a la muestra en dos partes iguales",
		incorrectas: [
			"El promedio aritmético de todos los valores obtenidos",
			"El valor que más veces se repite en una serie de datos",
			"La diferencia entre el valor máximo y el valor mínimo"
		]
	},
	{
		enunciado: "La propiedad de la información que asegura que el autor de una acción no puede negar su intervención se llama:",
		correcta: "No repudio",
		incorrectas: [
			"Confidencialidad",
			"Granularidad",
			"Escalabilidad"
		]
	},
	{
		enunciado: "Un repositorio de datos 'Data Warehouse' en gestión sanitaria sirve para:",
		correcta: "Integrar datos de múltiples fuentes para su análisis y explotación",
		incorrectas: [
			"Almacenar las copias de seguridad en formato físico",
			"Registrar solo los datos de facturación y nóminas",
			"Gestionar las contraseñas de los usuarios del hospital"
		]
	},
	{
		enunciado: "La Ley 41/2002 establece que la custodia de las historias clínicas corresponde a:",
		correcta: "El centro sanitario",
		incorrectas: [
			"El paciente en su domicilio",
			"El médico de familia de forma personal",
			"El Ministerio de Sanidad exclusivamente"
		]
	},
	{
		enunciado: "En el tratamiento de datos, la 'Anonimización' es el proceso de:",
		correcta: "Eliminar el nexo de unión entre el dato y la identidad del titular",
		incorrectas: [
			"Cambiar el nombre del paciente por un apodo cariñoso",
			"Codificar los diagnósticos mediante la clasificación CIE-10",
			"Cifrar la información para que solo el médico tenga la clave"
		]
	},
	{
		enunciado: "¿Qué documento clínico se considera el resumen de todo el proceso asistencial tras un ingreso?",
		correcta: "Informe de Alta",
		incorrectas: [
			"Hoja de consentimiento informado",
			"Gráfica de constantes vitales",
			"Hoja de citación para consultas externas"
		]
	},
	{
		enunciado: "La 'Minería de datos' (Data Mining) aplicada a la salud busca:",
		correcta: "Descubrir patrones y relaciones no evidentes en grandes bases de datos",
		incorrectas: [
			"Extraer minerales de los reactivos usados en laboratorio",
			"Contar el número de folios impresos en el archivo central",
			"Recuperar datos de discos duros que han sido dañados"
		]
	},
	{
		enunciado: "Un error de 'integridad' en una base de datos sanitaria ocurre si:",
		correcta: "Se modifican o borran datos de forma no autorizada o accidental",
		incorrectas: [
			"El sistema tarda más de tres segundos en cargar la ficha",
			"Dos pacientes tienen el mismo apellido en el registro",
			"El médico olvida cerrar la sesión al salir de la consulta"
		]
	},
	{
		enunciado: "En una base de datos relacional, la 'Clave Primaria' es:",
		correcta: "Un campo que identifica de forma única a cada registro",
		incorrectas: [
			"La contraseña que usa el administrativo para entrar",
			"El código asignado a la enfermedad principal",
			"La dirección física donde se encuentra el servidor"
		]
	},
	{
		enunciado: "La estadística 'Inferencial' permite:",
		correcta: "Extraer conclusiones para una población a partir de una muestra",
		incorrectas: [
			"Describir detalladamente las características de un solo paciente",
			"Organizar los datos en tablas de frecuencias exclusivamente",
			"Calcular el presupuesto del hospital para el año siguiente"
		]
	},
	{
		enunciado: "El 'Diccionario de Datos' en un sistema de información sirve para:",
		correcta: "Definir el significado, formato y uso de cada campo de datos",
		incorrectas: [
			"Traducir términos médicos del latín al castellano",
			"Corregir las faltas de ortografía de los informes clínicos",
			"Listar los nombres de todos los pacientes por orden alfabético"
		]
	},
	{
		enunciado: "La conservación de la documentación clínica debe garantizarse, como mínimo, durante:",
		correcta: "Cinco años contados desde la fecha del alta de cada proceso asistencial",
		incorrectas: [
			"Toda la vida del paciente más cien años",
			"Seis meses desde que el paciente abandona el hospital",
			"Diez años únicamente si el paciente es menor de edad"
		]
	},
	{
		enunciado: "Un indicador de 'Dispersión' estadística es:",
		correcta: "La Desviación Típica",
		incorrectas: [
			"La Media Aritmética",
			"La Moda",
			"El Porcentaje de incidencia"
		]
	},
	{
		enunciado: "La Historia Clínica Electrónica se diferencia de la de papel en que:",
		correcta: "Permite el acceso concurrente de varios profesionales al mismo tiempo",
		incorrectas: [
			"No tiene validez legal ante un tribunal de justicia",
			"Es imposible de borrar o modificar por error humano",
			"Solo puede contener texto y nunca imágenes o vídeos"
		]
	},
	{
		enunciado: "El 'Tratamiento' de datos personales incluye operaciones como:",
		correcta: "Recogida, registro, consulta y difusión de la información",
		incorrectas: [
			"Solo la eliminación definitiva de los archivos antiguos",
			"Únicamente la prescripción de medicamentos en la receta",
			"La reparación física de los componentes del ordenador"
		]
	},
	{
		enunciado: "En gestión sanitaria, la analítica 'Predictiva' se usa para:",
		correcta: "Anticipar necesidades de recursos o riesgos de complicaciones",
		incorrectas: [
			"Analizar lo que ocurrió en el hospital el mes pasado",
			"Contar el número de vacunas puestas en la campaña actual",
			"Justificar el gasto realizado en papelería de oficina"
		]
	},
	{
		enunciado: "La autenticidad de un documento clínico digital se garantiza mediante:",
		correcta: "La firma electrónica o certificados digitales",
		incorrectas: [
			"El uso de una tipografía específica de letra",
			"La impresión en papel con sello de caucho azul",
			"El almacenamiento en una carpeta con nombre del médico"
		]
	},
	{
		enunciado: "El derecho de 'Acceso' del paciente a su historia clínica implica:",
		correcta: "Obtener copia de los datos que figuran en su expediente",
		incorrectas: [
			"Poder borrar los diagnósticos que no le gusten",
			"Modificar las anotaciones subjetivas del facultativo",
			"Conocer los datos de otros pacientes con su misma enfermedad"
		]
	},
	{
		enunciado: "La gestión del archivo de historias clínicas tiene como función pasiva:",
		correcta: "La custodia y conservación de la documentación",
		incorrectas: [
			"La creación de nuevos informes de alta",
			"El préstamo de expedientes para la asistencia activa",
			"La formación de los estudiantes de medicina"
		]
	},
	{
		enunciado: "Un sistema de información 'Escalable' es aquel que:",
		correcta: "Puede crecer para gestionar más datos sin perder rendimiento",
		incorrectas: [
			"Está instalado en los ordenadores de las plantas superiores",
			"Requiere que el usuario suba de nivel profesional para usarlo",
			"Permite imprimir los datos en formato de escalera"
		]
	},
	{
		enunciado: "La 'p-valor' en un contraste de hipótesis indica:",
		correcta: "La probabilidad de que los resultados se deban al azar",
		incorrectas: [
			"El número de pacientes que han participado en el estudio",
			"La potencia del fármaco analizado en el laboratorio",
			"El precio total del estudio estadístico realizado"
		]
	},
	{
		enunciado: "Los datos agregados en gestión sanitaria son aquellos que:",
		correcta: "Muestran información de grupos sin identificar individuos",
		incorrectas: [
			"Se añaden a la historia clínica tras el fallecimiento",
			"Están pendientes de ser validados por el supervisor",
			"Se refieren únicamente a las constantes vitales del paciente"
		]
	},
	{
		enunciado: "La interoperabilidad 'Semántica' garantiza que:",
		correcta: "El significado de los datos intercambiados es entendido por ambos sistemas",
		incorrectas: [
			"Los cables de red son compatibles entre los edificios",
			"El software se puede instalar en sistemas Android e iOS",
			"La información se transmite a través de fibra óptica"
		]
	},
	{
		enunciado: "Un 'sesgo' en el tratamiento de la información estadística es:",
		correcta: "Un error sistemático que distorsiona los resultados",
		incorrectas: [
			"Una técnica para mejorar la velocidad del análisis",
			"El uso de un color diferente para los gráficos de barras",
			"La participación voluntaria de los pacientes en una encuesta"
		]
	},
	{
		enunciado: "La gestión de la información basada en la 'Evidencia' busca:",
		correcta: "Tomar decisiones apoyadas en datos científicos y probados",
		incorrectas: [
			"Utilizar solo la información que el paciente puede probar",
			"Eliminar los datos que no tengan una firma manuscrita",
			"Priorizar la intuición del gestor sobre los informes técnicos"
		]
	},
	{
		enunciado: "En un entorno digital, el 'Backup' es fundamental para asegurar:",
		correcta: "La recuperación de la información ante desastres o fallos",
		incorrectas: [
			"La confidencialidad de los datos frente a hackers",
			"La velocidad de procesamiento de los diagnósticos",
			"La traducción automática de los informes al inglés"
		]
	},
	{
		enunciado: "La función del personal de Documentación Sanitaria en la gestión es:",
		correcta: "Organizar, codificar y garantizar el flujo de la información clínica",
		incorrectas: [
			"Realizar la exploración física de los pacientes en planta",
			"Administrar la medicación prescrita en la historia",
			"Diseñar los planos arquitectónicos de los nuevos hospitales"
		]
	},
	{
		enunciado: "En estadística, la 'Moda' es el valor que:",
		correcta: "Aparece con mayor frecuencia en una distribución",
		incorrectas: [
			"Representa el centro de gravedad de los datos",
			"Se sitúa en el extremo superior de la muestra",
			"El paciente prefiere según sus gustos personales"
		]
	},
	{
		enunciado: "La digitalización de documentos en papel mediante escáner requiere:",
		correcta: "Procesos que garanticen la fidelidad de la copia digital",
		incorrectas: [
			"Que el papel original sea destruido en menos de 24 horas",
			"Que todas las hojas sean de tamaño DIN A4 exclusivamente",
			"El uso de tintas especiales para que el escáner las lea"
		]
	},
	{
		enunciado: "El 'Cloud Computing' en salud plantea retos específicos de:",
		correcta: "Seguridad y ubicación física de los datos personales",
		incorrectas: [
			"Falta de espacio para colocar los servidores en el sótano",
			"Excesivo peso de la información almacenada",
			"Imposibilidad de usar teclados y ratones inalámbricos"
		]
	},
	{
		enunciado: "La Ley 41/2002 permite el acceso a la HC con fines epidemiológicos siempre que:",
		correcta: "Se preserve la identificación personal del paciente (anonimización)",
		incorrectas: [
			"El paciente haya pagado la tasa de investigación",
			"Se publique el nombre y apellidos en el boletín oficial",
			"El investigador sea un familiar directo del paciente"
		]
	},
	{
		enunciado: "Un sistema de información 'Tiempo Real' es aquel donde:",
		correcta: "Los datos se actualizan y están disponibles en el mismo instante",
		incorrectas: [
			"El reloj del servidor está sincronizado con la hora solar",
			"Los registros se graban solo durante el horario de mañana",
			"La información desaparece automáticamente a las 24 horas"
		]
	},
	{
		enunciado: "La 'Estandarización' de los procesos de información sanitaria permite:",
		correcta: "La comparación de resultados entre diferentes centros y países",
		incorrectas: [
			"Que cada médico escriba con su propio estilo personal",
			"Aumentar el gasto en software personalizado y único",
			"Evitar que los pacientes puedan entender su diagnóstico"
		]
	},
	{
		enunciado: "La analítica de datos en salud contribuye a la 'Seguridad del Paciente' mediante:",
		correcta: "La detección precoz de efectos adversos y errores de medicación",
		incorrectas: [
			"El aumento de la burocracia en las plantas de hospitalización",
			"La reducción del tiempo que el médico dedica a la escucha",
			"La impresión masiva de etiquetas para las camas"
		]
	},
	{
		enunciado: "En un gráfico de 'Sectores' (tarta), el área de cada porción es proporcional a:",
		correcta: "La frecuencia relativa de la categoría representada",
		incorrectas: [
			"La importancia subjetiva del dato para el gestor",
			"La edad media de los pacientes de ese grupo",
			"El coste en euros de la intervención realizada"
		]
	},
	{
		enunciado: "La 'Integridad Referencial' en una base de datos asegura que:",
		correcta: "No existan registros 'huérfanos' (datos sin relación válida)",
		incorrectas: [
			"El médico siempre diga la verdad en sus informes",
			"La información clínica coincida con la del DNI",
			"Los datos se guarden en tres discos duros distintos"
		]
	},
	{
		enunciado: "La transformación de datos en 'Conocimiento' requiere:",
		correcta: "Análisis, interpretación y contextualización de la información",
		incorrectas: [
			"Simplemente acumular el mayor número posible de archivos",
			"Imprimir todos los datos en libros de gran formato",
			"Borrar la información antigua para dejar espacio a la nueva"
		]
	}
];