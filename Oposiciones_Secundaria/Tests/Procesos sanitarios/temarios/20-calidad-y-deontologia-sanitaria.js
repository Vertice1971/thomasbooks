'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué dimensión de la calidad de Donabedian evalúa los recursos materiales, humanos y organizativos de un centro sanitario?",
		correcta: "Estructura",
		incorrectas: [
			"Proceso",
			"Resultado"
		]
	},
	{
		enunciado: "El ciclo de Deming o PDCA es una herramienta para la mejora continua. ¿Qué significan sus siglas?",
		correcta: "Planificar, Hacer, Verificar, Actuar",
		incorrectas: [
			"Prevenir, Diagnosticar, Curar, Analizar",
			"Protocolizar, Dirigir, Controlar, Ajustar"
		]
	},
	{
		enunciado: "El principio bioético que obliga al profesional a no causar daño intencionadamente al paciente se denomina:",
		correcta: "No maleficencia",
		incorrectas: [
			"Beneficencia",
			"Justicia"
		]
	},
	{
		enunciado: "¿Cuál es la base legal del secreto profesional sanitario en España respecto a la autonomía del paciente?",
		correcta: "Ley 41/2002",
		incorrectas: [
			"Ley General de Presupuestos",
			"Ley Orgánica de Educación"
		]
	},
	{
		enunciado: "En el modelo EFQM de excelencia, el enfoque principal se centra en:",
		correcta: "La autoevaluación y la gestión por procesos orientada a resultados",
		incorrectas: [
			"El cumplimiento estricto de los horarios de entrada y salida",
			"La reducción exclusiva del gasto en material fungible"
		]
	},
	{
		enunciado: "El secreto profesional 'comitido' es aquel que:",
		correcta: "Se basa en una promesa explícita de reserva antes de recibir la confidencia",
		incorrectas: [
			"Surge de la propia naturaleza del dato (ej. una deformidad)",
			"Se revela accidentalmente por descuido del profesional"
		]
	},
	{
		enunciado: "La 'adecuación' como componente de la calidad asistencial implica:",
		correcta: "Realizar las intervenciones que el paciente necesita, ni más ni menos",
		incorrectas: [
			"Pintar las paredes del hospital con colores relajantes",
			"Dar el alta a todos los pacientes antes de las 48 horas"
		]
	},
	{
		enunciado: "¿Qué tipo de auditoría de calidad es realizada por una entidad externa para certificar una norma ISO?",
		correcta: "Auditoría de tercera parte",
		incorrectas: [
			"Auditoría interna",
			"Autoevaluación de servicio"
		]
	},
	{
		enunciado: "El principio de 'Justicia' en bioética hace referencia a:",
		correcta: "La equidad en la distribución de recursos y cargas sanitarias",
		incorrectas: [
			"La obligación de denunciar al paciente si comete un delito",
			"El derecho del médico a cobrar honorarios elevados"
		]
	},
	{
		enunciado: "La revelación del secreto profesional sin causa justificada está tipificada en el Código Penal como:",
		correcta: "Delito contra la intimidad",
		incorrectas: [
			"Falta administrativa leve",
			"Error diagnóstico involuntario"
		]
	},
	{
		enunciado: "Un indicador de 'Resultado' en la gestión de calidad sería:",
		correcta: "La tasa de mortalidad postoperatoria",
		incorrectas: [
			"El número de camas por cada 1.000 habitantes",
			"El porcentaje de pacientes con consentimiento firmado"
		]
	},
	{
		enunciado: "La 'Seguridad del Paciente' se define como:",
		correcta: "La reducción del riesgo de daños innecesarios asociados a la atención sanitaria",
		incorrectas: [
			"La presencia de guardias de seguridad en la puerta del centro",
			"El cierre con llave de todas las habitaciones de la planta"
		]
	},
	{
		enunciado: "El consentimiento informado es la máxima expresión del principio de:",
		correcta: "Autonomía",
		incorrectas: [
			"Beneficencia",
			"Paternalismo médico"
		]
	},
	{
		enunciado: "La deontología profesional se ocupa de:",
		correcta: "Los deberes y obligaciones éticas de una profesión",
		incorrectas: [
			"El estudio de los seres vivos en su entorno natural",
			"La gestión económica de las mutuas de accidentes"
		]
	},
	{
		enunciado: "En un mapa de procesos, un proceso 'estratégico' es aquel que:",
		correcta: "Define la orientación, objetivos y visión de la organización",
		incorrectas: [
			"Se realiza directamente sobre el paciente (ej. una cura)",
			"Proporciona los recursos necesarios (ej. mantenimiento)"
		]
	},
	{
		enunciado: "El deber de reserva persiste incluso después de:",
		correcta: "El fallecimiento del paciente o la finalización de la relación profesional",
		incorrectas: [
			"Que el paciente sea dado de alta por curación",
			"Que el profesional se jubile o cambie de centro"
		]
	},
	{
		enunciado: "Un 'incidente sin daño' en seguridad del paciente es aquel que:",
		correcta: "Alcanzó al paciente pero no le causó ninguna lesión",
		incorrectas: [
			"Se detectó antes de que llegara a afectar al paciente",
			"Produjo una secuela permanente de carácter leve"
		]
	},
	{
		enunciado: "Las normas ISO 9001 son estándares internacionales para:",
		correcta: "Sistemas de Gestión de la Calidad",
		incorrectas: [
			"La calibración de termómetros clínicos",
			"El diseño de uniformes para personal técnico"
		]
	},
	{
		enunciado: "La 'objeción de conciencia' es un derecho del profesional que consiste en:",
		correcta: "Negarse a realizar una acción que colisione con sus convicciones morales profundas",
		incorrectas: [
			"Pedir un aumento de sueldo por trabajar en días festivos",
			"No atender a un paciente porque le cae mal personalmente"
		]
	},
	{
		enunciado: "Se puede romper el secreto profesional legítimamente cuando:",
		correcta: "Exista un imperativo legal (ej. parte judicial) o riesgo para la salud pública",
		incorrectas: [
			"Un periodista solicita información para una noticia de interés social",
			"El profesional necesita desahogarse con sus amigos sobre un caso difícil"
		]
	},
	{
		enunciado: "La 'Satisfacción del Cliente' en sanidad es un indicador de:",
		correcta: "Calidad percibida",
		incorrectas: [
			"Calidad científico-técnica",
			"Calidad estructural"
		]
	},
	{
		enunciado: "El 'Check-list' de cirugía segura de la OMS busca reducir:",
		correcta: "Los errores en el lugar quirúrgico y las complicaciones anestésicas",
		incorrectas: [
			"El tiempo que el paciente pasa en la lista de espera",
			"El gasto en gasas y material de sutura"
		]
	},
	{
		enunciado: "El paternalismo médico tradicional vulneraba principalmente el principio de:",
		correcta: "Autonomía",
		incorrectas: [
			"Beneficencia",
			"No maleficencia"
		]
	},
	{
		enunciado: "Un 'Evento Centinela' es un suceso inesperado que produce:",
		correcta: "La muerte o un daño físico o psíquico grave al paciente",
		incorrectas: [
			"Un retraso de diez minutos en el inicio de la consulta",
			"La pérdida de una tarjeta sanitaria por parte del celador"
		]
	},
	{
		enunciado: "La acreditación sanitaria es un proceso mediante el cual:",
		correcta: "Se garantiza que un centro cumple niveles de calidad superiores a los mínimos legales",
		incorrectas: [
			"Se otorga el título de médico a los estudiantes que aprueban",
			"Se permite la entrada de visitantes a las unidades de cuidados intensivos"
		]
	},
	{
		enunciado: "El secreto profesional 'natural' se refiere a aquello que:",
		correcta: "Por su propia naturaleza, si se revela, causaría daño o pena al sujeto",
		incorrectas: [
			"Solo conocen los médicos que trabajan en entornos rurales",
			"Se ha publicado en una revista científica de prestigio"
		]
	},
	{
		enunciado: "La 'Guía de Práctica Clínica' (GPC) es una herramienta para:",
		correcta: "Reducir la variabilidad clínica y mejorar la efectividad basada en la evidencia",
		incorrectas: [
			"Controlar el gasto en farmacia de los pacientes crónicos",
			"Listar los nombres de todos los profesionales del servicio"
		]
	},
	{
		enunciado: "En bioética, la capacidad de decidir de un paciente se presume siempre:",
		correcta: "Salvo que se demuestre legal o clínicamente lo contrario",
		incorrectas: [
			"A partir de los 65 años de edad",
			"Solo si el paciente tiene estudios universitarios"
		]
	},
	{
		enunciado: "¿Qué técnica de gestión de calidad utiliza el análisis de causas raíz (espina de pescado)?",
		correcta: "Diagrama de Ishikawa",
		incorrectas: [
			"Gráfico de Pareto",
			"Histograma de frecuencias"
		]
	},
	{
		enunciado: "El 'privilegio terapéutico' permite al médico ocultar información al paciente si:",
		correcta: "Su revelación supone un peligro grave para la salud o la vida del paciente",
		incorrectas: [
			"El médico tiene mucha prisa y no puede pararse a explicar",
			"La familia ha pagado para que no se le diga la verdad"
		]
	},
	{
		enunciado: "La dimensión 'eficiencia' de la calidad busca:",
		correcta: "Conseguir los mejores resultados posibles con los recursos disponibles",
		incorrectas: [
			"Gastar la menor cantidad de dinero posible, sin importar el resultado",
			"Atender al mayor número de pacientes en el menor tiempo"
		]
	},
	{
		enunciado: "El Código de Deontología Médica es de obligado cumplimiento para:",
		correcta: "Todos los médicos colegiados en el ejercicio de su profesión",
		incorrectas: [
			"Solo los médicos que trabajan en la sanidad privada",
			"Únicamente los estudiantes de medicina de último curso"
		]
	},
	{
		enunciado: "Un indicador de 'Proceso' evaluaría:",
		correcta: "El tiempo de espera desde la solicitud hasta la realización de una prueba",
		incorrectas: [
			"El equipamiento tecnológico disponible en el área de rayos",
			"La disminución de los niveles de colesterol tras un año de dieta"
		]
	},
	{
		enunciado: "La confidencialidad es un derecho del paciente y un:",
		correcta: "Deber del profesional sanitario",
		incorrectas: [
			"Consejo opcional que se puede ignorar",
			"Servicio que se cobra aparte en la factura"
		]
	},
	{
		enunciado: "El 'Benchmarking' consiste en:",
		correcta: "Comparar los procesos de la propia organización con los mejores del sector",
		incorrectas: [
			"Sustituir a los jefes de servicio por personal de otros hospitales",
			"Cambiar los muebles de la sala de espera por unos más modernos"
		]
	},
	{
		enunciado: "En un ensayo clínico, el principio de justicia exige que:",
		correcta: "La selección de los sujetos no sea discriminatoria",
		incorrectas: [
			"Los participantes reciban un sueldo de por vida",
			"El médico sea también el juez que analice los datos"
		]
	},
	{
		enunciado: "La 'Lex Artis Ad Hoc' se refiere a:",
		correcta: "El cumplimiento de los estándares profesionales adaptados al caso concreto",
		incorrectas: [
			"La normativa legal sobre la arquitectura de los quirófanos",
			"El derecho de los pacientes a elegir el color de su pijama"
		]
	},
	{
		enunciado: "Un sistema de gestión de riesgos sanitarios busca identificar:",
		correcta: "Puntos críticos donde pueden ocurrir errores para prevenirlos",
		incorrectas: [
			"A los profesionales que cometen errores para despedirlos",
			"Los pacientes que tienen más probabilidades de quejarse"
		]
	},
	{
		enunciado: "La ética de mínimos se refiere a:",
		correcta: "Los principios de justicia que deben ser garantizados para todos",
		incorrectas: [
			"Hacer lo mínimo imprescindible para que no te denuncien",
			"Atender solo a los pacientes que tienen patologías leves"
		]
	},
	{
		enunciado: "El fin último de la auditoría de calidad es:",
		correcta: "Detectar desviaciones para proponer acciones de mejora",
		incorrectas: [
			"Encontrar culpables para aplicar medidas disciplinarias",
			"Justificar el cierre de servicios que no son rentables"
		]
	}
];