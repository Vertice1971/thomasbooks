'use strict';

var PREGUNTAS = [
	{
		enunciado: "Según la Ley 16/2003 de Cohesión y Calidad, el Sistema de Información Sanitaria del SNS debe garantizar:",
		correcta: "La disponibilidad de información y la comunicación recíproca entre administraciones",
		incorrectas: [
			"La exclusividad de los datos para el Ministerio de Sanidad",
			"La eliminación de los registros en papel de forma inmediata",
			"El acceso público a las historias clínicas individuales"
		]
	},
	{
		enunciado: "El Conjunto Mínimo Básico de Datos (CMBD) es un registro administrativo que recoge:",
		correcta: "Información sobre el alta hospitalaria de los pacientes",
		incorrectas: [
			"El inventario diario de farmacia hospitalaria",
			"La nómina del personal estatutario del servicio",
			"El registro de temperaturas de las cámaras de vacunas"
		]
	},
	{
		enunciado: "Un indicador de salud se define técnicamente como:",
		correcta: "Una medida cuantitativa que refleja el estado de salud de una población",
		incorrectas: [
			"El nombre de la patología que padece un individuo",
			"La opinión de los usuarios sobre la hostelería del centro",
			"El código numérico asignado a un profesional sanitario"
		]
	},
	{
		enunciado: "¿Qué fuente de información sanitaria es fundamental para conocer la causa oficial de fallecimiento?",
		correcta: "El Boletín Estadístico de Defunción (BED)",
		incorrectas: [
			"El registro de admisiones de urgencias",
			"La hoja de interconsulta de medicina interna",
			"La encuesta de morbilidad hospitalaria anual"
		]
	},
	{
		enunciado: "La Red Nacional de Vigilancia Epidemiológica (RENAVE) se encarga de gestionar:",
		correcta: "Las Enfermedades de Declaración Obligatoria (EDO)",
		incorrectas: [
			"Las listas de espera para cirugía programada",
			"La facturación a terceros por accidentes de tráfico",
			"El control de calidad de los reactivos de laboratorio"
		]
	},
	{
		enunciado: "El Registro Estatal de Profesionales Sanitarios (REPS) tiene como fin principal:",
		correcta: "Facilitar la planificación de las necesidades de recursos humanos del SNS",
		incorrectas: [
			"Gestionar las vacaciones y permisos del personal",
			"Publicar el historial médico de los trabajadores",
			"Asignar el número de colegiado de forma automática"
		]
	},
	{
		enunciado: "En un SIS, la 'interoperabilidad' se refiere a:",
		correcta: "La capacidad de diferentes sistemas para intercambiar y usar información",
		incorrectas: [
			"La velocidad de conexión a internet del hospital",
			"El número de ordenadores por cada cien pacientes",
			"La resistencia de los servidores a cortes de luz"
		]
	},
	{
		enunciado: "Los indicadores de 'proceso' en la evaluación de la calidad miden:",
		correcta: "Las actividades realizadas durante la atención al paciente",
		incorrectas: [
			"El número de camas disponibles por habitante",
			"La tasa de mortalidad postoperatoria",
			"La satisfacción final del usuario con el alta"
		]
	},
	{
		enunciado: "El SIAP (Sistema de Información de Atención Primaria) recoge datos sobre:",
		correcta: "La actividad asistencial y la población con tarjeta sanitaria",
		incorrectas: [
			"Las intervenciones quirúrgicas de gran complejidad",
			"La investigación básica en biotecnología",
			"El consumo de oxígeno en unidades de cuidados críticos"
		]
	},
	{
		enunciado: "La 'especificidad' de un indicador sanitario es la capacidad para:",
		correcta: "Identificar correctamente los casos negativos",
		incorrectas: [
			"Detectar todos los casos positivos existentes",
			"Cambiar de valor ante pequeñas variaciones de salud",
			"Ser calculado con muy pocos recursos informáticos"
		]
	},
	{
		enunciado: "El Nodo Central del sistema de información del SNS reside en:",
		correcta: "El Ministerio de Sanidad",
		incorrectas: [
			"La Organización Mundial de la Salud",
			"Las Consejerías de Sanidad de cada comunidad autónoma",
			"El Consejo General de Colegios de Médicos"
		]
	},
	{
		enunciado: "La Encuesta Nacional de Salud (ENSE) es un instrumento que permite:",
		correcta: "Conocer la percepción de salud y hábitos de vida de la población",
		incorrectas: [
			"Medir la tensión arterial de todos los ciudadanos en casa",
			"Sustituir al Registro Civil en el conteo de población",
			"Evaluar el coste por proceso de cada hospital público"
		]
	},
	{
		enunciado: "La 'fiabilidad' de un dato en el SIS significa que:",
		correcta: "Se obtienen los mismos resultados en mediciones repetidas",
		incorrectas: [
			"El dato es siempre positivo para la gestión del centro",
			"La información llega en menos de un segundo al servidor",
			"Solo el gerente puede visualizar dicha información"
		]
	},
	{
		enunciado: "El Barómetro Sanitario es un estudio periódico que analiza:",
		correcta: "La opinión de los ciudadanos sobre el funcionamiento del SNS",
		incorrectas: [
			"La presión atmosférica dentro de los quirófanos",
			"El peso medio de los pacientes ingresados en pediatría",
			"La evolución de los precios de los medicamentos genéricos"
		]
	},
	{
		enunciado: "Los registros de cáncer son sistemas de información orientados a:",
		correcta: "Conocer la incidencia y supervivencia de tumores en un área",
		incorrectas: [
			"Asignar citas de oncología de forma automatizada",
			"Vender datos a empresas farmacéuticas internacionales",
			"Registrar solo a los pacientes fallecidos por neoplasia"
		]
	},
	{
		enunciado: "La información sanitaria para la gestión clínica debe ser, ante todo:",
		correcta: "Pertinente, oportuna y de calidad",
		incorrectas: [
			"Extensa, compleja y de difícil interpretación",
			"Exclusivamente numérica y sin contexto",
			"Pública y sin restricciones de acceso"
		]
	},
	{
		enunciado: "Un indicador de 'resultado' clásico es:",
		correcta: "La tasa de letalidad de una enfermedad",
		incorrectas: [
			"El tiempo de espera en la consulta de enfermería",
			"La disponibilidad de un equipo de resonancia magnética",
			"El cumplimiento de los protocolos de lavado de manos"
		]
	},
	{
		enunciado: "El SNOMED-CT es un sistema utilizado en los SIS para:",
		correcta: "La estandarización de la terminología clínica",
		incorrectas: [
			"La facturación de los servicios de urgencias",
			"El control del stock de lencería hospitalaria",
			"La identificación por radiofrecuencia de los pacientes"
		]
	},
	{
		enunciado: "La 'Validez' de un indicador se refiere a:",
		correcta: "Si el indicador realmente mide lo que se pretende medir",
		incorrectas: [
			"Si el dato ha sido firmado por un médico especialista",
			"Si la fecha de recogida es anterior al cierre del ejercicio",
			"Si el sistema informático es compatible con Windows"
		]
	},
	{
		enunciado: "En el CMBD hospitalario, el diagnóstico principal se define como:",
		correcta: "La afección que determinó el ingreso del paciente",
		incorrectas: [
			"La patología más costosa detectada durante el ingreso",
			"La enfermedad que causó la muerte si esta ocurrió",
			"Cualquier síntoma que presente el paciente al alta"
		]
	},
	{
		enunciado: "La Historia Clínica Electrónica (HCE) compartida del SNS permite:",
		correcta: "El acceso a datos relevantes del paciente desde cualquier comunidad",
		incorrectas: [
			"Que el paciente modifique sus diagnósticos desde casa",
			"La eliminación del secreto profesional médico",
			"El almacenamiento de copias en servidores no seguros"
		]
	},
	{
		enunciado: "La tasa de mortalidad infantil se utiliza habitualmente como indicador de:",
		correcta: "Nivel de desarrollo socioeconómico y sanitario",
		incorrectas: [
			"Calidad de la docencia universitaria en pediatría",
			"Efectividad de las leyes de seguridad vial",
			"Número de nacimientos por cada mil mujeres"
		]
	},
	{
		enunciado: "El portal estadístico del Ministerio de Sanidad sirve para:",
		correcta: "Difundir información agregada sobre la salud y el sistema",
		incorrectas: [
			"Consultar el análisis de sangre individual de un usuario",
			"Pedir cita previa con el médico de familia",
			"Comprar suministros médicos a nivel centralizado"
		]
	},
	{
		enunciado: "La 'accesibilidad' a la información sanitaria por los gestores debe estar:",
		correcta: "Regulada por perfiles de usuario y niveles de seguridad",
		incorrectas: [
			"Abierta a cualquier empleado del hospital",
			"Prohibida bajo cualquier circunstancia",
			"Limitada únicamente al personal administrativo"
		]
	},
	{
		enunciado: "Un 'cuadro de mando' (Dashboard) en gestión sanitaria es:",
		correcta: "Una herramienta visual que monitoriza indicadores clave",
		incorrectas: [
			"El teclado del ordenador central del hospital",
			"La lista de pacientes que esperan en una sala",
			"El organigrama de la dirección médica"
		]
	},
	{
		enunciado: "La codificación de los datos en el SIS es necesaria para:",
		correcta: "Permitir el tratamiento estadístico y comparativo de la información",
		incorrectas: [
			"Ocultar la información real a los pacientes",
			"Ahorrar espacio de almacenamiento en el disco duro",
			"Cumplir con las normas de caligrafía médica"
		]
	},
	{
		enunciado: "El índice de 'dependencia' es un indicador demográfico que mide:",
		correcta: "La relación entre población inactiva y población en edad de trabajar",
		incorrectas: [
			"El número de pacientes que necesitan ayuda para comer",
			"La cantidad de fármacos que toma un paciente de media",
			"La dependencia de un hospital respecto a su presupuesto externo"
		]
	},
	{
		enunciado: "El sistema de información sobre drogodependencias (OEDA) monitoriza:",
		correcta: "Admisiones a tratamiento y urgencias por consumo de sustancias",
		incorrectas: [
			"La venta de alcohol en supermercados",
			"El precio de las sustancias ilegales en la calle",
			"Las multas de tráfico por alcoholemia"
		]
	},
	{
		enunciado: "La calidad de los datos en un SIS se ve comprometida por:",
		correcta: "La infrautilización y el retraso en la grabación de la información",
		incorrectas: [
			"El exceso de profesionales informáticos en el centro",
			"El uso de software libre para la gestión de bases de datos",
			"La formación continua de los codificadores"
		]
	},
	{
		enunciado: "La Red de Agencias de Evaluación de Tecnologías Sanitarias (RedETS) genera:",
		correcta: "Informes basados en la evidencia sobre eficacia y coste",
		incorrectas: [
			"Noticias sobre nuevos descubrimientos espaciales",
			"Publicidad para empresas de equipamiento médico",
			"Listados de precios de seguros privados"
		]
	},
	{
		enunciado: "El 'Balance de situación' de un hospital es información de tipo:",
		correcta: "Económico-financiera",
		incorrectas: [
			"Clínico-asistencial",
			"Epidemiológica pura",
			"Demográfica"
		]
	},
	{
		enunciado: "La tasa de incidencia se diferencia de la prevalencia en que la primera mide:",
		correcta: "El riesgo de contraer la enfermedad en un tiempo dado",
		incorrectas: [
			"La carga total de enfermedad en la comunidad",
			"La duración media de la patología antes de la cura",
			"El porcentaje de fallecidos sobre los diagnosticados"
		]
	},
	{
		enunciado: "Un sistema de información 'distribuido' significa que:",
		correcta: "Los datos se almacenan en diferentes nodos interconectados",
		incorrectas: [
			"Toda la información está en un único ordenador central",
			"La información se reparte físicamente en papel por las plantas",
			"Los pacientes deben llevar sus datos en un pendrive"
		]
	},
	{
		enunciado: "La 'Granularidad' de la información sanitaria se refiere a:",
		correcta: "El nivel de detalle con el que se registra un dato",
		incorrectas: [
			"El peso en megabytes de una imagen radiológica",
			"La cantidad de fallos técnicos del sistema al mes",
			"La dureza de los dispositivos físicos de almacenamiento"
		]
	},
	{
		enunciado: "Los sistemas de ayuda a la decisión clínica (SADC):",
		correcta: "Proporcionan alertas y recordatorios basados en protocolos",
		incorrectas: [
			"Sustituyen al médico en el diagnóstico definitivo",
			"Calculan automáticamente la nómina del profesional",
			"Sirven para controlar el tiempo que el paciente está en sala"
		]
	},
	{
		enunciado: "El registro de interrupciones voluntarias del embarazo (IVE) es:",
		correcta: "Un registro de notificación obligatoria con fines estadísticos",
		incorrectas: [
			"Un sistema público donde cualquiera puede ver los nombres",
			"Una encuesta anónima que se rellena voluntariamente",
			"Un listado para la facturación a empresas farmacéuticas"
		]
	},
	{
		enunciado: "El concepto de 'Big Data' en salud se asocia con:",
		correcta: "El análisis de grandes volúmenes de datos variados y rápidos",
		incorrectas: [
			"El uso de ordenadores de gran tamaño físico",
			"La impresión de historias clínicas de muchas páginas",
			"La copia de seguridad en discos externos de gran capacidad"
		]
	},
	{
		enunciado: "La 'Trazabilidad' en un sistema de información permite:",
		correcta: "Conocer quién, cuándo y qué se ha hecho con un dato",
		incorrectas: [
			"Dibujar gráficos de líneas sobre la evolución del peso",
			"Mejorar la conexión wifi de las habitaciones",
			"Saber el camino físico que recorre una muestra de sangre"
		]
	},
	{
		enunciado: "Un indicador de 'estructura' valora:",
		correcta: "Los recursos físicos, humanos y organizativos disponibles",
		incorrectas: [
			"La evolución de los pacientes tras una terapia",
			"La amabilidad del personal de recepción",
			"El número de vacunas administradas en una campaña"
		]
	},
	{
		enunciado: "La normalización de los SIS a nivel internacional es liderada por:",
		correcta: "ISO y organismos como HL7",
		incorrectas: [
			"Las asociaciones de consumidores locales",
			"Los sindicatos de trabajadores de la informática",
			"Las empresas fabricantes de impresoras"
		]
	}
];