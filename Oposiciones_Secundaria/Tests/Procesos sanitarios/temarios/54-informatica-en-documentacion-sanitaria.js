'use strict';

var PREGUNTAS = [
	{
		enunciado: "El acrónimo HIS (Hospital Information System) se refiere a:",
		correcta: "El sistema informático integral de gestión hospitalaria",
		incorrectas: [
			"La herramienta interna de seguros de salud",
			"El hardware de impresión de etiquetas de sangre",
			"La historia individual de seguimiento social"
		]
	},
	{
		enunciado: "El estándar DICOM se utiliza fundamentalmente para:",
		correcta: "El intercambio y almacenamiento de imágenes médicas",
		incorrectas: [
			"La transmisión de resultados de análisis de orina",
			"La gestión de las nóminas del personal médico",
			"La comunicación de mensajes de texto entre enfermeras"
		]
	},
	{
		enunciado: "El protocolo HL7 es un estándar de comunicación que actúa en:",
		correcta: "El nivel de aplicación para el intercambio de datos clínicos",
		incorrectas: [
			"El nivel físico de los cables de red de fibra óptica",
			"La gestión de la alimentación eléctrica de los servidores",
			"El control de acceso físico a las salas de servidores"
		]
	},
	{
		enunciado: "Un PACS (Picture Archiving and Communication System) sirve para:",
		correcta: "Almacenar y distribuir imágenes digitales de radiodiagnóstico",
		incorrectas: [
			"Gestionar los pagos a los proveedores de papelería",
			"Controlar el acceso de los familiares a las habitaciones",
			"Archivar los documentos en papel de forma física"
		]
	},
	{
		enunciado: "En una red hospitalaria, una VPN (Virtual Private Network) permite:",
		correcta: "El acceso remoto seguro a la red interna desde el exterior",
		incorrectas: [
			"Aumentar la velocidad de descarga de vídeos de ocio",
			"Conectar impresoras antiguas que no tienen wifi",
			"Ocultar la identidad del hospital en las redes sociales"
		]
	},
	{
		enunciado: "Un Sistema de Gestión de Bases de Datos Relacionales (RDBMS) organiza los datos en:",
		correcta: "Tablas con filas y columnas relacionadas entre sí",
		incorrectas: [
			"Una lista larga de texto sin ningún orden específico",
			"Carpetas físicas ordenadas por el color del expediente",
			"Archivos de audio que el médico graba con su voz"
		]
	},
	{
		enunciado: "El 'Middleware' en informática sanitaria es el software que:",
		correcta: "Conecta y facilita la comunicación entre aplicaciones distintas",
		incorrectas: [
			"Se encarga de limpiar el virus de los ordenadores",
			"Sirve para diseñar las páginas web del hospital",
			"Gestiona el encendido y apagado de las luces del centro"
		]
	},
	{
		enunciado: "La firma electrónica reconocida garantiza:",
		correcta: "La identidad del firmante y la integridad del documento",
		incorrectas: [
			"Que el documento será borrado automáticamente en un año",
			"Que el médico ha cobrado por realizar el informe",
			"Que el documento solo puede ser leído en pantallas grandes"
		]
	},
	{
		enunciado: "Un 'Log' de accesos en un sistema de información sanitaria registra:",
		correcta: "Quién ha accedido a qué datos y en qué momento",
		incorrectas: [
			"La temperatura media de la sala de espera",
			"El número de veces que se ha limpiado el suelo",
			"Las llamadas telefónicas personales del personal"
		]
	},
	{
		enunciado: "El término 'Escalabilidad' en un sistema informático sanitario significa:",
		correcta: "Capacidad para adaptarse al aumento de carga de trabajo y datos",
		incorrectas: [
			"Que el programa puede instalarse en ordenadores de varios pisos",
			"Que los iconos del escritorio se pueden hacer más grandes",
			"Que el sistema solo funciona si hay escaleras de emergencia"
		]
	},
	{
		enunciado: "El LIS (Laboratory Information System) se encarga de gestionar:",
		correcta: "Las peticiones, muestras y resultados del laboratorio",
		incorrectas: [
			"Las listas de espera para operaciones de cataratas",
			"La lencería y uniformes de los profesionales",
			"El listado de canciones de la megafonía del hospital"
		]
	},
	{
		enunciado: "El 'Cloud Computing' (Computación en la nube) en sanidad permite:",
		correcta: "Acceder a servicios y almacenamiento a través de internet",
		incorrectas: [
			"Predecir el tiempo meteorológico para las ambulancias",
			"Imprimir documentos directamente sobre las nubes",
			"Que los datos se borren solos cuando llueve"
		]
	},
	{
		enunciado: "La 'Alta Disponibilidad' de un servidor sanitario asegura que:",
		correcta: "El sistema esté operativo el máximo tiempo posible (24/7)",
		incorrectas: [
			"El servidor esté colocado en la planta más alta del edificio",
			"Cualquier persona del mundo pueda entrar al sistema",
			"El servidor sea muy caro y de una marca muy conocida"
		]
	},
	{
		enunciado: "Un lenguaje de marcado como XML se usa en salud para:",
		correcta: "Estructurar y etiquetar datos para que sean legibles por máquinas",
		incorrectas: [
			"Dibujar los planos de las nuevas consultas externas",
			"Escribir poemas médicos en la revista del hospital",
			"Borrar los datos antiguos de forma irreversible"
		]
	},
	{
		enunciado: "La 'Virtualización' de servidores permite:",
		correcta: "Ejecutar varios sistemas operativos en un solo hardware físico",
		incorrectas: [
			"Que los médicos operen a distancia usando hologramas",
			"Simular que el hospital es más grande de lo que realmente es",
			"Eliminar la necesidad de usar monitores y teclados"
		]
	},
	{
		enunciado: "El RIS (Radiology Information System) gestiona principalmente:",
		correcta: "La agenda de citas y los informes de radiología",
		incorrectas: [
			"El riesgo de incendio en las plantas de hospitalización",
			"La rotación de los internos residentes del servicio",
			"El registro de ingresos por traumatismos graves"
		]
	},
	{
		enunciado: "La 'Criptografía' en documentación sanitaria se utiliza para:",
		correcta: "Cifrar la información para que sea ilegible por personas no autorizadas",
		incorrectas: [
			"Estudiar las inscripciones en las tumbas de los cementerios",
			"Mejorar la caligrafía de los médicos al escribir recetas",
			"Aumentar el tamaño de las letras en los informes de alta"
		]
	},
	{
		enunciado: "Un SAI (Sistema de Alimentación Ininterrumpida) es vital para:",
		correcta: "Mantener los equipos encendidos ante un corte eléctrico",
		incorrectas: [
			"Repartir la comida a los pacientes de forma automática",
			"Garantizar que el aire acondicionado nunca se apague",
			"Enviar mensajes de alerta a los familiares del enfermo"
		]
	},
	{
		enunciado: "El concepto de 'Interoperabilidad Semántica' se refiere a:",
		correcta: "Que los sistemas entiendan el significado exacto de los datos intercambiados",
		incorrectas: [
			"Que los cables de red tengan el mismo color en todo el país",
			"Que todos los médicos hablen el mismo idioma oficial",
			"Que los ordenadores tengan instalado el mismo antivirus"
		]
	},
	{
		enunciado: "En una base de datos, el proceso de 'Normalización' busca:",
		correcta: "Eliminar la redundancia y evitar anomalías en los datos",
		incorrectas: [
			"Que todos los nombres de los pacientes estén en mayúsculas",
			"Cumplir con las normas de cortesía en la atención al usuario",
			"Que el sistema funcione igual de bien por el día que por la noche"
		]
	},
	{
		enunciado: "La 'Arquitectura de Tres Capas' en software sanitario separa:",
		correcta: "Presentación (interfaz), Lógica de negocio y Datos",
		incorrectas: [
			"Mañana, Tarde y Noche en los turnos de enfermería",
			"Urgencias, Planta y Quirófano en el edificio",
			"Médico, Enfermero y Auxiliar en la historia clínica"
		]
	},
	{
		enunciado: "Un 'Firewall' (Cortafuegos) en la red del hospital sirve para:",
		correcta: "Controlar y filtrar el tráfico de red entrante y saliente",
		incorrectas: [
			"Extinguir incendios en la sala de calderas automáticamente",
			"Evitar que los ordenadores se calienten demasiado",
			"Bloquear la salida de los pacientes de sus habitaciones"
		]
	},
	{
		enunciado: "La telemedicina requiere infraestructuras informáticas que garanticen:",
		correcta: "Ancho de banda suficiente y baja latencia para transmisiones",
		incorrectas: [
			"Que el paciente tenga un televisor de más de 50 pulgadas",
			"La eliminación total de la necesidad de médicos humanos",
			"El uso exclusivo de satélites espaciales de comunicación"
		]
	},
	{
		enunciado: "La 'Usabilidad' de una aplicación informática sanitaria mide:",
		correcta: "La facilidad con la que los profesionales pueden usar el sistema",
		incorrectas: [
			"El número de horas que el ordenador está encendido al día",
			"La cantidad de aplicaciones diferentes que tiene el hospital",
			"Si el ratón y el teclado están limpios y desinfectados"
		]
	},
	{
		enunciado: "Un 'Data Lake' es un repositorio informático que almacena:",
		correcta: "Grandes cantidades de datos brutos en su formato original",
		incorrectas: [
			"Agua para refrigerar los procesadores de los servidores",
			"Solo los datos de los pacientes que se han curado",
			"Información que ha sido borrada por error del sistema"
		]
	},
	{
		enunciado: "La 'Auditoría' de sistemas informáticos sanitarios busca:",
		correcta: "Verificar que el sistema cumple con las normas de seguridad y uso",
		incorrectas: [
			"Contar el número de teclados que hay en el hospital",
			"Saber cuánto dinero ha ganado la empresa de software",
			"Evaluar la simpatía de los informáticos con el personal"
		]
	},
	{
		enunciado: "El estándar de terminología SNOMED-CT es importante en informática porque:",
		correcta: "Proporciona códigos únicos para conceptos clínicos complejos",
		incorrectas: [
			"Permite navegar por internet de forma anónima y segura",
			"Es el nombre del sistema operativo que usan los TAC",
			"Sustituye a la firma electrónica de los facultativos"
		]
	},
	{
		enunciado: "Un error de 'Hardware' en documentación sanitaria sería:",
		correcta: "La rotura física del disco duro donde se alojan los datos",
		incorrectas: [
			"Un fallo en el código de programación del HIS",
			"Que el médico olvide su contraseña de acceso",
			"Una falta de ortografía en el diagnóstico del paciente"
		]
	},
	{
		enunciado: "La integración de la 'Receta Electrónica' requiere conexión entre:",
		correcta: "El centro de salud, el colegio de farmacéuticos y las oficinas de farmacia",
		incorrectas: [
			"El hospital y la casa del paciente por televisión",
			"El médico de familia y el supermercado más cercano",
			"El banco del paciente y el servicio de admisiones"
		]
	},
	{
		enunciado: "El 'Big Data' aplicado a la informática sanitaria permite:",
		correcta: "Procesar y analizar conjuntos de datos masivos para investigación",
		incorrectas: [
			"Escribir los informes con una letra muy grande",
			"Usar solo ordenadores que ocupan habitaciones enteras",
			"Contratar a informáticos de gran altura física"
		]
	},
	{
		enunciado: "Un sistema 'Legacy' en un hospital es aquel que:",
		correcta: "Es antiguo pero sigue siendo necesario para consultar datos históricos",
		incorrectas: [
			"Ha sido heredado gratuitamente de otro país",
			"Se utiliza solo para la gestión de herencias y testamentos",
			"Funciona sin necesidad de electricidad ni internet"
		]
	},
	{
		enunciado: "La 'redundancia' de datos en una base de datos mal diseñada provoca:",
		correcta: "Inconsistencia de la información y desperdicio de espacio",
		incorrectas: [
			"Que el sistema sea mucho más rápido y eficiente",
			"Que los datos sean más fáciles de leer por el paciente",
			"Que no sea necesario hacer copias de seguridad"
		]
	},
	{
		enunciado: "El 'Single Sign-On' (SSO) permite al profesional sanitario:",
		correcta: "Acceder a múltiples aplicaciones con una sola identificación",
		incorrectas: [
			"Firmar todas las recetas de un solo golpe",
			"Entrar al hospital por una puerta especial",
			"Tener un solo paciente a su cargo cada día"
		]
	},
	{
		enunciado: "La digitalización 'Certificada' de documentos asegura:",
		correcta: "Que la copia digital tiene el mismo valor legal que el original",
		incorrectas: [
			"Que el documento ha sido escaneado en color",
			"Que el proceso ha sido realizado por un notario",
			"Que la hoja de papel está libre de virus y bacterias"
		]
	},
	{
		enunciado: "Un código QR en una pulsera de paciente puede usarse para:",
		correcta: "Acceder rápidamente a la identificación y datos críticos del paciente",
		incorrectas: [
			"Pagar la estancia en el hospital al salir",
			"Abrir la puerta de la cafetería para familiares",
			"Ver vídeos de entretenimiento en el monitor de la cama"
		]
	},
	{
		enunciado: "La 'Latencia' en una red de telemedicina es:",
		correcta: "El retardo temporal en la transmisión de los datos",
		incorrectas: [
			"La capacidad de almacenamiento del disco duro central",
			"El número de ordenadores conectados a la vez",
			"La duración de la batería de los equipos portátiles"
		]
	},
	{
		enunciado: "El formato de archivo PDF/A es el estándar para:",
		correcta: "El archivo y preservación de documentos a largo plazo",
		incorrectas: [
			"La edición rápida de imágenes radiológicas",
			"El envío de mensajes cortos entre profesionales",
			"La grabación de las constantes vitales en tiempo real"
		]
	},
	{
		enunciado: "La 'Minería de Procesos' en informática sanitaria busca:",
		correcta: "Analizar los flujos reales de los pacientes por el sistema",
		incorrectas: [
			"Extraer datos de las minas de carbón para salud laboral",
			"Calcular el número de cirugías realizadas al año",
			"Fabricar nuevos procesadores para los ordenadores del centro"
		]
	},
	{
		enunciado: "En informática, un 'Bug' en el sistema de gestión de citas es:",
		correcta: "Un error en el código de programación que causa fallos",
		incorrectas: [
			"Un insecto físico que se ha metido dentro del teclado",
			"Un micrófono oculto para escuchar a los pacientes",
			"Una función nueva que se añade para mejorar el servicio"
		]
	},
	{
		enunciado: "La 'Copia de Seguridad' (Backup) debe guardarse idealmente en:",
		correcta: "Una ubicación física diferente a la del servidor principal",
		incorrectas: [
			"El mismo disco duro para que sea fácil de encontrar",
			"Una carpeta compartida con todos los usuarios del hospital",
			"Un cuaderno escrito a mano por el administrativo"
		]
	}
];