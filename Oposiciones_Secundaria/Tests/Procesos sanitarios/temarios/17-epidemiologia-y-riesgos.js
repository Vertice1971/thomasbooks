'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cómo se define la epidemiología según la concepción moderna de salud pública?",
		correcta: "El estudio de la distribución y los determinantes de estados o eventos relacionados con la salud",
		incorrectas: [
			"La ciencia que se ocupa exclusivamente del tratamiento de enfermedades infecciosas",
			"El registro administrativo de defunciones en una población hospitalaria"
		]
	},
	{
		enunciado: "En la tríada ecológica, el elemento que posee las características intrínsecas que permiten la infección se denomina:",
		correcta: "Huésped",
		incorrectas: [
			"Agente",
			"Reservorio"
		]
	},
	{
		enunciado: "Un factor de riesgo se define técnicamente como:",
		correcta: "Cualquier característica o exposición de un individuo que aumente su probabilidad de sufrir una enfermedad",
		incorrectas: [
			"La causa única, necesaria y suficiente para que se desarrolle una patología",
			"Un marcador biológico inmutable que garantiza la aparición de un síntoma"
		]
	},
	{
		enunciado: "En un estudio de cohortes, la medida de asociación fundamental que se calcula es:",
		correcta: "Riesgo Relativo (RR)",
		incorrectas: [
			"Odds Ratio (OR)",
			"Razón de Prevalencia"
		]
	},
	{
		enunciado: "¿Qué tipo de diseño epidemiológico parte de sujetos ya enfermos para investigar su exposición previa a un factor?",
		correcta: "Estudio de casos y controles",
		incorrectas: [
			"Estudio de cohortes prospectivo",
			"Ensayo clínico aleatorizado"
		]
	},
	{
		enunciado: "La 'vigilancia epidemiológica' basada en las Enfermedades de Declaración Obligatoria (EDO) tiene como fin:",
		correcta: "Detectar precozmente brotes para instaurar medidas de control inmediatas",
		incorrectas: [
			"Sancionar a los pacientes que han contraído una enfermedad contagiosa",
			"Publicar el nombre y apellidos de los afectados en el BOE"
		]
	},
	{
		enunciado: "El periodo de tiempo que transcurre desde la exposición al agente hasta la aparición de los primeros síntomas se denomina:",
		correcta: "Periodo de incubación",
		incorrectas: [
			"Periodo de latencia",
			"Intervalo de virulencia"
		]
	},
	{
		enunciado: "¿Cuál es la principal limitación de los estudios transversales o de prevalencia?",
		correcta: "La imposibilidad de establecer una secuencia temporal de causalidad",
		incorrectas: [
			"Su elevado coste económico y la larga duración del seguimiento",
			"La necesidad de utilizar placebos en el grupo de control"
		]
	},
	{
		enunciado: "La prevención secundaria tiene como objetivo principal:",
		correcta: "El diagnóstico precoz y el tratamiento temprano en fases asintomáticas",
		incorrectas: [
			"La reducción de la incidencia mediante la vacunación de la población sana",
			"La rehabilitación y reinserción social del paciente con secuelas"
		]
	},
	{
		enunciado: "El concepto de 'causa necesaria' implica que:",
		correcta: "La enfermedad no puede desarrollarse si el factor no está presente",
		incorrectas: [
			"El factor produce la enfermedad siempre que actúa, sin excepción",
			"Existen múltiples factores que pueden producir el mismo efecto de forma aislada"
		]
	},
	{
		enunciado: "Un estudio epidemiológico 'ecológico' se caracteriza por:",
		correcta: "Utilizar como unidad de análisis grupos de personas o poblaciones, no individuos",
		incorrectas: [
			"Analizar exclusivamente la relación entre la salud y el cambio climático",
			"Realizar un seguimiento exhaustivo de un solo paciente durante décadas"
		]
	},
	{
		enunciado: "La 'fuerza de asociación' en los criterios de causalidad de Bradford Hill se refiere a:",
		correcta: "La magnitud del Riesgo Relativo o la Odds Ratio obtenida",
		incorrectas: [
			"La repetición de los resultados en diferentes poblaciones y contextos",
			"La existencia de una relación dosis-respuesta biológicamente plausible"
		]
	},
	{
		enunciado: "El 'Riesgo Atribuible' o diferencia de riesgos indica:",
		correcta: "El exceso de riesgo en los expuestos que es debido exclusivamente al factor de riesgo",
		incorrectas: [
			"Cuántas veces es más probable enfermar si se está expuesto frente a no estarlo",
			"La proporción de enfermos que fallecen por la complicación de la patología"
		]
	},
	{
		enunciado: "En epidemiología, un 'reservorio' es:",
		correcta: "El hábitat natural donde el agente vive, crece y se multiplica",
		incorrectas: [
			"El vehículo inanimado (agua, alimentos) que transporta el agente",
			"La persona sana que transmite la enfermedad sin saberlo"
		]
	},
	{
		enunciado: "La 'cadena epidemiológica' es un modelo que describe:",
		correcta: "La secuencia de elementos que intervienen en la transmisión de un agente infeccioso",
		incorrectas: [
			"La jerarquía administrativa de los laboratorios de salud pública",
			"El proceso de fabricación y distribución de fármacos antivirales"
		]
	},
	{
		enunciado: "Un factor de confusión (confounder) debe cumplir la condición de:",
		correcta: "Estar asociado tanto a la exposición como al desenlace de forma independiente",
		incorrectas: [
			"Ser una variable intermedia en la cadena causal entre exposición y efecto",
			"Aparecer únicamente en el grupo de casos de un estudio retrospectivo"
		]
	},
	{
		enunciado: "La prevalencia de una enfermedad en una población aumenta cuando:",
		correcta: "Aumenta la duración de la enfermedad gracias a tratamientos que prolongan la vida sin curar",
		incorrectas: [
			"Se produce una curación masiva y rápida de todos los casos existentes",
			"Aumenta drásticamente la tasa de letalidad de la patología"
		]
	},
	{
		enunciado: "En un estudio de cohortes, el 'sesgo de seguimiento' se produce por:",
		correcta: "La pérdida diferencial de participantes entre el grupo de expuestos y no expuestos",
		incorrectas: [
			"El olvido de los pacientes sobre sus hábitos de consumo hace diez años",
			"La clasificación errónea de los sujetos en el momento del diagnóstico"
		]
	},
	{
		enunciado: "La 'incidencia densidencial' o densidad de incidencia utiliza como denominador:",
		correcta: "La suma de los periodos de tiempo (personas-tiempo) que cada individuo ha estado en riesgo",
		incorrectas: [
			"El total de la población a mitad del periodo de estudio",
			"El número de casos antiguos que permanecen enfermos"
		]
	},
	{
		enunciado: "La 'especificidad' de una causa en epidemiología clásica significa que:",
		correcta: "Un solo factor produce un único efecto o enfermedad",
		incorrectas: [
			"El factor de riesgo solo afecta a una raza o etnia determinada",
			"La enfermedad solo se manifiesta en el 100% de los expuestos"
		]
	},
	{
		enunciado: "El 'efecto del trabajador sano' es un sesgo de selección típico en:",
		correcta: "Epidemiología laboral",
		incorrectas: [
			"Epidemiología pediátrica",
			"Estudios de farmacovigilancia"
		]
	},
	{
		enunciado: "¿Cuál es la ventaja de la Odds Ratio (OR) sobre el Riesgo Relativo (RR)?",
		correcta: "Puede calcularse en estudios de casos y controles donde se desconoce la incidencia",
		incorrectas: [
			"Permite conocer directamente la probabilidad de curación de la enfermedad",
			"Es una medida que no se ve afectada por ningún tipo de sesgo sistemático"
		]
	},
	{
		enunciado: "La 'quimioprofilaxis' es una medida de prevención primaria consistente en:",
		correcta: "La administración de sustancias químicas para prevenir el desarrollo de una infección",
		incorrectas: [
			"El tratamiento agresivo con radioterapia en pacientes oncológicos",
			"La limpieza profunda de los quirófanos con desinfectantes de alto nivel"
		]
	},
	{
		enunciado: "Se considera que una enfermedad es endémica cuando:",
		correcta: "Se mantiene con una incidencia constante y esperada en una zona geográfica",
		incorrectas: [
			"Aparece de forma súbita afectando a un gran número de personas en poco tiempo",
			"Se propaga por varios continentes de forma simultánea y descontrolada"
		]
	},
	{
		enunciado: "En la cadena epidemiológica, la 'puerta de salida' más frecuente para virus respiratorios es:",
		correcta: "La vía respiratoria",
		incorrectas: [
			"La vía genitourinaria",
			"La vía digestiva"
		]
	},
	{
		enunciado: "El 'sesgo de Berkson' es un tipo de sesgo de selección que ocurre cuando:",
		correcta: "La muestra se toma exclusivamente de una población hospitalizada",
		incorrectas: [
			"El entrevistador sugiere inconscientemente la respuesta al paciente",
			"Los instrumentos de medida están mal calibrados desde el inicio"
		]
	},
	{
		enunciado: "La 'fracción etiológica en expuestos' indica:",
		correcta: "La proporción de la enfermedad que se evitaría si se eliminara el factor de riesgo",
		incorrectas: [
			"El número de personas que mueren a pesar de recibir tratamiento",
			"La cantidad de dinero que el estado ahorra en prevención primaria"
		]
	},
	{
		enunciado: "En un brote epidémico, la 'tasa de ataque' es en realidad:",
		correcta: "Una tasa de incidencia acumulada limitada a un grupo y tiempo concreto",
		incorrectas: [
			"La velocidad con la que los anticuerpos destruyen al antígeno",
			"El porcentaje de fallecidos sobre el total de hospitalizados"
		]
	},
	{
		enunciado: "¿Qué caracteriza a un 'estudio analítico' frente a uno 'descriptivo'?",
		correcta: "La presencia de un grupo de comparación para contrastar hipótesis",
		incorrectas: [
			"El uso exclusivo de datos procedentes de censos nacionales",
			"La redacción detallada de la historia clínica de un único paciente"
		]
	},
	{
		enunciado: "La 'plausibilidad biológica' como criterio de causalidad significa que:",
		correcta: "La relación causa-efecto debe ser coherente con los conocimientos científicos actuales",
		incorrectas: [
			"El experimento debe poder repetirse en ratas de laboratorio con éxito",
			"La causa debe preceder siempre en el tiempo al efecto observado"
		]
	},
	{
		enunciado: "Un 'portador precoz' o incubacionario es aquel que:",
		correcta: "Elimina el microorganismo antes de que aparezcan los síntomas de la enfermedad",
		incorrectas: [
			"Sigue transmitiendo el agente meses después de haberse curado clínicamente",
			"Posee inmunidad natural y nunca llegará a desarrollar la patología"
		]
	},
	{
		enunciado: "La 'inmunidad de rebaño' o de grupo se alcanza cuando:",
		correcta: "Una proporción suficiente de la población es inmune, dificultando la transmisión",
		incorrectas: [
			"Toda la población rural ha sido vacunada contra la rabia",
			"El agente infeccioso pierde su virulencia al pasar de humano a humano"
		]
	},
	{
		enunciado: "En epidemiología, la 'virulencia' se mide habitualmente mediante:",
		correcta: "La tasa de letalidad",
		incorrectas: [
			"La tasa de incidencia",
			"La proporción de portadores sanos"
		]
	},
	{
		enunciado: "Los estudios de cohortes suelen ser más adecuados para estudiar:",
		correcta: "Exposiciones raras o poco frecuentes",
		incorrectas: [
			"Enfermedades con periodos de latencia muy largos",
			"Patologías de muy baja prevalencia en la población"
		]
	},
	{
		enunciado: "El 'sesgo de información' se evita principalmente mediante:",
		correcta: "El enmascaramiento o técnicas de ciego",
		incorrectas: [
			"El aumento del tamaño de la muestra seleccionada",
			"La aleatorización de los sujetos en los grupos"
		]
	},
	{
		enunciado: "¿Qué nivel de prevención se aplica mediante la detección de fenilcetonuria en neonatos?",
		correcta: "Prevención secundaria",
		incorrectas: [
			"Prevención primaria",
			"Prevención terciaria"
		]
	},
	{
		enunciado: "El 'intervalo serie' en una epidemia es:",
		correcta: "El tiempo entre el inicio de síntomas del caso primario y del caso secundario",
		incorrectas: [
			"La duración total de la estancia hospitalaria del paciente",
			"El tiempo que tarda el laboratorio en confirmar el diagnóstico"
		]
	},
	{
		enunciado: "Un factor protector es aquel que tiene un Riesgo Relativo (RR):",
		correcta: "Menor a 1",
		incorrectas: [
			"Igual a 1",
			"Mayor a 1"
		]
	},
	{
		enunciado: "La 'fomite' es un ejemplo de mecanismo de transmisión:",
		correcta: "Indirecto a través de objetos inanimados",
		incorrectas: [
			"Directo por contacto físico estrecho",
			"Vertical de madre a hijo durante el parto"
		]
	},
	{
		enunciado: "El modelo multicausal de la enfermedad (red de causalidad) sostiene que:",
		correcta: "Los efectos son el resultado de la interacción compleja de múltiples factores",
		incorrectas: [
			"Cada enfermedad solo tiene una causa biológica específica",
			"La salud depende exclusivamente de la voluntad individual"
		]
	}
];