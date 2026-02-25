'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué siglas definen al sistema de información global que integra las áreas administrativas y clínicas de un centro hospitalario?",
		correcta: "HIS (Hospital Information System)",
		incorrectas: [
			"ERP (Enterprise Resource Planning) básico",
			"CRM (Customer Relationship Management) sanitario"
		]
	},
	{
		enunciado: "En la gestión de imágenes médicas, el estándar internacional para el intercambio y almacenamiento de archivos radiológicos es:",
		correcta: "DICOM",
		incorrectas: [
			"HL7",
			"JPEG-Med"
		]
	},
	{
		enunciado: "La interoperabilidad semántica en los sistemas de información sanitaria se logra principalmente mediante:",
		correcta: "El uso de terminologías normalizadas como SNOMED-CT",
		incorrectas: [
			"La conexión física de todos los ordenadores a la misma red",
			"El uso del mismo sistema operativo en todos los terminales"
		]
	},
	{
		enunciado: "¿Qué subsistema informático se encarga específicamente de la gestión de las peticiones y resultados de análisis clínicos?",
		correcta: "LIS (Laboratory Information System)",
		incorrectas: [
			"RIS (Radiology Information System)",
			"PACS (Picture Archiving and Communication System)"
		]
	},
	{
		enunciado: "El estándar HL7 (Health Level Seven) tiene como objetivo fundamental:",
		correcta: "Facilitar el intercambio electrónico de información clínica entre aplicaciones",
		incorrectas: [
			"Regular la potencia de emisión de los equipos de resonancia magnética",
			"Establecer el protocolo de limpieza de los teclados en quirófano"
		]
	},
	{
		enunciado: "Según la LOPDGDD 3/2018, el acceso a la historia clínica por parte de personal no sanitario está limitado a:",
		correcta: "Datos identificativos y fines administrativos o de gestión, salvo obligación legal",
		incorrectas: [
			"La totalidad del historial médico si el trabajador tiene contrato fijo",
			"Los diagnósticos de salud mental exclusivamente para control de bajas"
		]
	},
	{
		enunciado: "En un entorno de gestión sanitaria, la técnica de 'Business Intelligence' sirve para:",
		correcta: "Transformar datos masivos en información estructurada para la toma de decisiones",
		incorrectas: [
			"Vender los datos de los pacientes a empresas de seguros privadas",
			"Sustituir al director médico por un algoritmo de inteligencia artificial"
		]
	},
	{
		enunciado: "La arquitectura cliente-servidor en aplicaciones sanitarias permite:",
		correcta: "Centralizar la base de datos y la lógica de negocio en un servidor robusto",
		incorrectas: [
			"Que el paciente gestione su propia medicación sin supervisión técnica",
			"Eliminar la necesidad de usar cables de red en todo el hospital"
		]
	},
	{
		enunciado: "¿Qué función cumple el módulo de ADT en un sistema HIS?",
		correcta: "Gestión de Admisión, Altas y Traslados de pacientes",
		incorrectas: [
			"Análisis de Diagnóstico por Tomografía",
			"Administración de Terapias de Rehabilitación"
		]
	},
	{
		enunciado: "El almacenamiento de imágenes médicas a gran escala y su visualización remota se gestiona a través de:",
		correcta: "PACS",
		incorrectas: [
			"HIS",
			"LIS"
		]
	},
	{
		enunciado: "En seguridad informática sanitaria, la 'disponibilidad' de los datos asegura que:",
		correcta: "La información esté accesible para los usuarios autorizados cuando la necesiten",
		incorrectas: [
			"Los datos no sean modificados por personas ajenas al servicio",
			"La información se guarde en formato papel por si falla la luz"
		]
	},
	{
		enunciado: "La Historia Clínica Electrónica (HCE) compartida entre diferentes niveles asistenciales requiere:",
		correcta: "Un identificador único de paciente y protocolos de interoperabilidad",
		incorrectas: [
			"Que todos los médicos del país utilicen la misma marca de ordenador",
			"Que el paciente lleve consigo un pendrive con toda su información"
		]
	},
	{
		enunciado: "¿Qué es el 'Check-digit' en un sistema de codificación sanitaria?",
		correcta: "Un mecanismo de control para detectar errores en la entrada de códigos numéricos",
		incorrectas: [
			"La huella dactilar necesaria para acceder al terminal informático",
			"El número de veces que un médico accede a la ficha del paciente"
		]
	},
	{
		enunciado: "La receta electrónica mejora la seguridad del paciente porque:",
		correcta: "Permite la detección automática de interacciones medicamentosas y duplicidades",
		incorrectas: [
			"Evita que el farmacéutico tenga que leer la letra del médico",
			"Reduce el precio de los fármacos al no gastar papel"
		]
	},
	{
		enunciado: "En la gestión sanitaria, un cuadro de mando integral (Dashboard) permite:",
		correcta: "Visualizar indicadores clave de rendimiento (KPI) en tiempo real",
		incorrectas: [
			"Controlar la temperatura de las calderas de la cocina del hospital",
			"Listar los nombres de todos los pacientes que no han pagado"
		]
	},
	{
		enunciado: "La 'trazabilidad' de un dato en la historia clínica electrónica implica:",
		correcta: "Saber quién, cuándo y desde dónde se ha accedido o modificado la información",
		incorrectas: [
			"Dibujar la evolución de la fiebre en un gráfico de líneas continuo",
			"Enviar una copia de los datos a la familia del paciente por correo"
		]
	},
	{
		enunciado: "¿Qué nivel de seguridad según el Esquema Nacional de Seguridad (ENS) suelen requerir los datos de salud?",
		correcta: "Nivel Alto",
		incorrectas: [
			"Nivel Básico",
			"Nivel Medio"
		]
	},
	{
		enunciado: "El software de 'Ayuda a la Decisión Clínica' (CDSS) se caracteriza por:",
		correcta: "Cruzar datos del paciente con guías de práctica clínica para ofrecer alertas",
		incorrectas: [
			"Obligar al médico a seguir el tratamiento que dicte el ordenador",
			"Realizar el triaje de urgencias sin intervención humana"
		]
	},
	{
		enunciado: "Un sistema de información sanitaria 'vertical' es aquel que:",
		correcta: "Está especializado en un área o servicio concreto (ej. Nefrología)",
		incorrectas: [
			"Sigue la jerarquía desde el Ministro hasta el celador",
			"Se instala en edificios de más de diez plantas"
		]
	},
	{
		enunciado: "El 'Cloud Computing' en sanidad plantea como principal reto:",
		correcta: "La soberanía de los datos y el cumplimiento estricto de la privacidad",
		incorrectas: [
			"La falta de espacio físico para colocar los servidores en el hospital",
			"La imposibilidad de imprimir informes médicos desde la nube"
		]
	},
	{
		enunciado: "En una base de datos relacional, la 'Clave Primaria' sirve para:",
		correcta: "Identificar de forma unívoca cada registro de una tabla",
		incorrectas: [
			"Abrir la puerta del archivo central de historias clínicas",
			"Cifrar el contenido de los mensajes de correo electrónico"
		]
	},
	{
		enunciado: "La telemedicina síncrona se realiza mediante:",
		correcta: "Interacción en tiempo real (ej. videoconferencia)",
		incorrectas: [
			"Envío de correos electrónicos con fotos de lesiones",
			"Consulta de resultados en la carpeta de salud ciudadana"
		]
	},
	{
		enunciado: "El sistema 'CPOE' (Computerized Physician Order Entry) sirve para:",
		correcta: "La prescripción electrónica de órdenes médicas y tratamientos",
		incorrectas: [
			"La gestión de las vacaciones del personal facultativo",
			"El control de entradas y salidas de visitantes al hospital"
		]
	},
	{
		enunciado: "¿Qué ventaja aporta el uso de 'tablets' a pie de cama para el personal técnico?",
		correcta: "Registro inmediato de constantes y reducción de errores de transcripción",
		incorrectas: [
			"Permitir que el paciente vea películas durante las curas",
			"Sustituir la necesidad de hablar directamente con el enfermo"
		]
	},
	{
		enunciado: "La 'integridad' de la información sanitaria se vulnera si:",
		correcta: "Los datos son alterados de forma accidental o malintencionada",
		incorrectas: [
			"El sistema tarda más de cinco segundos en cargar una imagen",
			"El paciente solicita una copia de su historial médico"
		]
	},
	{
		enunciado: "En un sistema RIS, la función de 'dictado digital' permite:",
		correcta: "La transcripción rápida de informes radiológicos mediante reconocimiento de voz",
		incorrectas: [
			"Que el médico grabe recordatorios para sus tareas personales",
			"Enviar mensajes de audio a los familiares de los ingresados"
		]
	},
	{
		enunciado: "El 'Big Data' sanitario permite realizar estudios de:",
		correcta: "Medicina predictiva y análisis de tendencias poblacionales masivas",
		incorrectas: [
			"Contabilidad básica de los gastos en material de oficina",
			"Cálculo de la nómina de los trabajadores del centro"
		]
	},
	{
		enunciado: "¿Qué es un cortafuegos (Firewall) en la red de un centro de salud?",
		correcta: "Un sistema que protege la red interna de accesos externos no autorizados",
		incorrectas: [
			"Un extintor automático situado en la sala de servidores",
			"Un protocolo para evacuar el centro en caso de incendio"
		]
	},
	{
		enunciado: "La 'Firma Electrónica' en los documentos clínicos garantiza:",
		correcta: "La autenticidad del autor y la integridad del documento",
		incorrectas: [
			"Que el médico tiene el título de especialista homologado",
			"Que el paciente ha pagado las tasas correspondientes"
		]
	},
	{
		enunciado: "Un sistema 'Legacy' en informática sanitaria es:",
		correcta: "Un sistema antiguo que sigue en uso pese a su obsolescencia tecnológica",
		incorrectas: [
			"El software más avanzado y moderno del mercado actual",
			"Un programa diseñado exclusivamente para la gestión de herencias"
		]
	},
	{
		enunciado: "La 'Minería de Datos' (Data Mining) se utiliza para:",
		correcta: "Descubrir patrones y relaciones ocultas en grandes volúmenes de datos",
		incorrectas: [
			"Extraer minerales preciosos de los equipos informáticos viejos",
			"Borrar la información que ya no es útil para el hospital"
		]
	},
	{
		enunciado: "En el contexto de la ciberseguridad, el 'Ransomware' es un ataque que:",
		correcta: "Cifra los datos y exige un rescate económico para su liberación",
		incorrectas: [
			"Aumenta la velocidad del procesador de forma descontrolada",
			"Envía publicidad de farmacias a todos los contactos del médico"
		]
	},
	{
		enunciado: "El identificador de paciente 'IDP' en una base de datos sanitaria debe ser:",
		correcta: "Único, invariable y no reutilizable",
		incorrectas: [
			"El mismo que el número de teléfono móvil del paciente",
			"Cambiable cada vez que el paciente cambia de domicilio"
		]
	},
	{
		enunciado: "La formación de los profesionales en el uso de las TIC sanitarias busca:",
		correcta: "Mejorar la eficiencia y reducir la variabilidad clínica",
		incorrectas: [
			"Que los técnicos aprendan a reparar el hardware de los equipos",
			"Pasar el mayor tiempo posible frente a la pantalla del ordenador"
		]
	},
	{
		enunciado: "Un sistema de información 'abierto' se caracteriza por:",
		correcta: "Permitir la integración con aplicaciones de diferentes fabricantes",
		incorrectas: [
			"No tener ningún tipo de contraseña para facilitar el acceso",
			"Funcionar solo si las ventanas del centro están abiertas"
		]
	},
	{
		enunciado: "La gestión de 'stocks' mediante informática en sanidad permite:",
		correcta: "Optimizar el inventario y evitar la caducidad de productos",
		incorrectas: [
			"Comprar siempre el producto más caro para asegurar la calidad",
			"Eliminar la necesidad de tener un almacén físico en el centro"
		]
	},
	{
		enunciado: "El 'Portal del Paciente' fomenta:",
		correcta: "La corresponsabilidad y el acceso del ciudadano a su información",
		incorrectas: [
			"La automedicación sin necesidad de consulta médica previa",
			"Que el paciente pueda modificar su propio diagnóstico online"
		]
	},
	{
		enunciado: "El mantenimiento 'preventivo' de los sistemas informáticos consiste en:",
		correcta: "Acciones para evitar fallos antes de que estos ocurran",
		incorrectas: [
			"Reparar el equipo una vez que ya ha dejado de funcionar",
			"Cambiar todos los ordenadores del hospital cada seis meses"
		]
	},
	{
		enunciado: "La 'usabilidad' de una aplicación informática sanitaria mide:",
		correcta: "La facilidad con la que los profesionales pueden aprender y usar el sistema",
		incorrectas: [
			"El número total de horas que el ordenador permanece encendido",
			"La cantidad de aplicaciones diferentes que tiene instaladas"
		]
	},
	{
		enunciado: "El objetivo final de la informática médica es:",
		correcta: "Mejorar la calidad de la atención y la seguridad del paciente",
		incorrectas: [
			"Sustituir el contacto humano por interacciones digitales",
			"Reducir el número de trabajadores en los centros sanitarios"
		]
	}
];