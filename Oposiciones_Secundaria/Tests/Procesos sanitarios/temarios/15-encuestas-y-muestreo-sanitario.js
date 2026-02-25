'use strict';

var PREGUNTAS = [
	{
		enunciado: "En investigación sanitaria, ¿cómo se denomina al conjunto completo de individuos que poseen la característica objeto de estudio?",
		correcta: "Población o universo",
		incorrectas: [
			"Muestra representativa",
			"Estrato poblacional"
		]
	},
	{
		enunciado: "El error que se produce cuando los resultados de la muestra no coinciden con los de la población por causas ajenas al azar se denomina:",
		correcta: "Sesgo o error sistemático",
		incorrectas: [
			"Error aleatorio",
			"Varianza muestral"
		]
	},
	{
		enunciado: "¿Qué condición es imprescindible para que un muestreo sea considerado probabilístico?",
		correcta: "Que todos los elementos tengan una probabilidad conocida y distinta de cero de ser elegidos",
		incorrectas: [
			"Que el investigador seleccione personalmente a los sujetos más colaboradores",
			"Que la muestra incluya al menos al 50% de la población total"
		]
	},
	{
		enunciado: "En el muestreo aleatorio sistemático, si el tamaño de la población es N=1000 y la muestra n=100, el intervalo de selección (k) será:",
		correcta: "10",
		incorrectas: [
			"100",
			"1"
		]
	},
	{
		enunciado: "El muestreo estratificado es especialmente útil cuando:",
		correcta: "La población es heterogénea respecto a la variable de estudio y se busca representatividad de subgrupos",
		incorrectas: [
			"No se dispone de un listado completo de los miembros de la población",
			"Se desea reducir el coste al mínimo utilizando solo voluntarios"
		]
	},
	{
		enunciado: "En el diseño de una encuesta, la 'validez de criterio' se refiere a:",
		correcta: "La correlación de la escala con un estándar de referencia o 'gold standard'",
		incorrectas: [
			"La apariencia externa de legalidad del cuestionario impreso",
			"La capacidad de los encuestadores para caer bien a los entrevistados"
		]
	},
	{
		enunciado: "¿Qué tipo de muestreo se realiza cuando se seleccionan grupos naturales (como hospitales o colegios) en lugar de individuos?",
		correcta: "Muestreo por conglomerados",
		incorrectas: [
			"Muestreo aleatorio simple",
			"Muestreo por cuotas"
		]
	},
	{
		enunciado: "Un cuestionario 'autoadministrado' presenta como ventaja principal:",
		correcta: "La eliminación del sesgo del entrevistador y el menor coste económico",
		incorrectas: [
			"La alta tasa de respuesta en comparación con la entrevista personal",
			"La posibilidad de aclarar dudas complejas al encuestado en tiempo real"
		]
	},
	{
		enunciado: "La 'fiabilidad' de un instrumento de recogida de datos indica:",
		correcta: "El grado de consistencia y reproducibilidad de las medidas en condiciones similares",
		incorrectas: [
			"Que el instrumento mide exactamente la variable que pretende medir",
			"Que los datos obtenidos son almacenados siguiendo la LOPDGDD"
		]
	},
	{
		enunciado: "En una encuesta, las preguntas de 'filtro' sirven para:",
		correcta: "Seleccionar a los encuestados que deben pasar a una sección específica del cuestionario",
		incorrectas: [
			"Eliminar a los participantes que no tienen un nivel cultural alto",
			"Reducir el número de opciones de respuesta en preguntas cerradas"
		]
	},
	{
		enunciado: "El muestreo 'por bola de nieve' es una técnica no probabilística empleada para:",
		correcta: "Acceder a poblaciones de difícil localización o marginales",
		incorrectas: [
			"Garantizar que todos los estratos sociales estén representados proporcionalmente",
			"Seleccionar pacientes en servicios de urgencias durante el invierno"
		]
	},
	{
		enunciado: "La 'exhaustividad' en las categorías de respuesta de una pregunta cerrada significa que:",
		correcta: "Deben incluirse todas las opciones posibles para que el encuestado pueda ubicarse en una",
		incorrectas: [
			"Las respuestas deben ser lo más largas y detalladas posible",
			"El encuestado debe terminar el cuestionario hasta quedar exhausto"
		]
	},
	{
		enunciado: "¿Qué técnica de recogida de datos permite observar el comportamiento real sin depender del relato del sujeto?",
		correcta: "Observación directa",
		incorrectas: [
			"Entrevista estructurada",
			"Encuesta postal"
		]
	},
	{
		enunciado: "Un sesgo de 'memoria' o recuerdo es típico en estudios:",
		correcta: "Retrospectivos basados en encuestas sobre hábitos pasados",
		incorrectas: [
			"Prospectivos de seguimiento clínico a veinte años",
			"De intervención experimental en entornos controlados"
		]
	},
	{
		enunciado: "En la escala de Likert, el encuestado debe expresar:",
		correcta: "Su grado de acuerdo o desacuerdo con una serie de afirmaciones",
		incorrectas: [
			"El valor numérico exacto de su presión arterial sistólica",
			"El orden de preferencia de una lista de cinco alimentos"
		]
	},
	{
		enunciado: "¿Cuál es la principal desventaja del muestreo de conveniencia?",
		correcta: "La falta de representatividad y la imposibilidad de generalizar resultados",
		incorrectas: [
			"Su elevada complejidad técnica y requerimientos estadísticos",
			"El alto coste por cada individuo seleccionado para la muestra"
		]
	},
	{
		enunciado: "La 'tasa de no respuesta' puede invalidar una encuesta si:",
		correcta: "Los que no responden difieren sistemáticamente de los que sí lo hacen",
		incorrectas: [
			"El número de encuestas perdidas es superior a diez",
			"Los encuestadores no han cobrado sus dietas por desplazamiento"
		]
	},
	{
		enunciado: "Para asegurar la protección de datos en la recogida de información sanitaria, se debe aplicar:",
		correcta: "El principio de minimización de datos y el consentimiento informado",
		incorrectas: [
			"La publicación de los nombres de los pacientes en el tablón de anuncios",
			"El almacenamiento de los cuestionarios en servidores extranjeros sin cifrar"
		]
	},
	{
		enunciado: "Un indicador de la 'sensibilidad' de un cuestionario clínico es:",
		correcta: "Su capacidad para detectar cambios pequeños en el estado de salud",
		incorrectas: [
			"El grosor del papel utilizado para imprimir las preguntas",
			"La empatía que muestra el encuestador hacia el paciente"
		]
	},
	{
		enunciado: "En un muestreo por cuotas, el investigador selecciona a los sujetos:",
		correcta: "De forma no aleatoria hasta completar un número prefijado por características",
		incorrectas: [
			"Mediante un sorteo ante notario con todos los censados",
			"Siguiendo estrictamente el orden alfabético del registro hospitalario"
		]
	},
	{
		enunciado: "La pregunta: '¿Le parece mal que el gobierno reduzca el presupuesto en salud?' es un ejemplo de:",
		correcta: "Pregunta sesgada o dirigida",
		incorrectas: [
			"Pregunta neutra objetiva",
			"Pregunta abierta de opinión"
		]
	},
	{
		enunciado: "El 'marco muestral' se define como:",
		correcta: "La lista o registro de donde se extraen los elementos de la muestra",
		incorrectas: [
			"El soporte físico donde se anotan las respuestas de la encuesta",
			"El límite temporal establecido para finalizar la recogida de datos"
		]
	},
	{
		enunciado: "La técnica Delphi para la recogida de información se basa en:",
		correcta: "La consulta sistemática a un panel de expertos en rondas sucesivas",
		incorrectas: [
			"La realización de encuestas telefónicas masivas al azar",
			"El análisis de las historias clínicas de un solo paciente"
		]
	},
	{
		enunciado: "En estadística, el 'n-muestral' es:",
		correcta: "El número de sujetos que componen la muestra seleccionada",
		incorrectas: [
			"El nivel de significación estadística del estudio",
			"El número de variables analizadas en el cuestionario"
		]
	},
	{
		enunciado: "Las preguntas sociodemográficas (edad, sexo, profesión) suelen situarse:",
		correcta: "Al principio o al final, dependiendo de la estrategia de rapport",
		incorrectas: [
			"Mezcladas aleatoriamente entre las preguntas de opinión técnica",
			"En un sobre aparte que se entrega una semana después"
		]
	},
	{
		enunciado: "¿Qué ventaja ofrece la entrevista telefónica frente a la postal?",
		correcta: "Mayor rapidez y posibilidad de aclarar malentendidos",
		incorrectas: [
			"Menor coste unitario por cada encuesta completada",
			"Permite observar la comunicación no verbal del encuestado"
		]
	},
	{
		enunciado: "El uso de incentivos económicos en encuestas sanitarias:",
		correcta: "Puede aumentar la participación pero introducir sesgos de selección",
		incorrectas: [
			"Es obligatorio por ley en todas las investigaciones públicas",
			"Garantiza siempre la veracidad de todas las respuestas obtenidas"
		]
	},
	{
		enunciado: "La 'prueba piloto' o pretest de un cuestionario sirve para:",
		correcta: "Identificar preguntas ambiguas y estimar la duración de la encuesta",
		incorrectas: [
			"Obtener los resultados definitivos de la investigación",
			"Sustituir la fase de análisis de datos estadísticos"
		]
	},
	{
		enunciado: "En un estudio de satisfacción del usuario, el anonimato favorece:",
		correcta: "La sinceridad en las respuestas críticas sobre el servicio",
		incorrectas: [
			"La pérdida de validez externa de los resultados obtenidos",
			"El aumento de errores en la grabación de los datos"
		]
	},
	{
		enunciado: "El muestreo 'biápico' es un tipo de muestreo que se realiza en:",
		correcta: "Dos etapas sucesivas de selección",
		incorrectas: [
			"Dos países diferentes de forma simultánea",
			"Dos idiomas distintos para el mismo cuestionario"
		]
	},
	{
		enunciado: "Un indicador de calidad de la recogida de datos es la 'trazabilidad', que permite:",
		correcta: "Rastrear el dato desde su origen hasta el análisis final",
		incorrectas: [
			"Dibujar gráficos de líneas con los resultados de la encuesta",
			"Conocer la dirección exacta del domicilio de todos los encuestados"
		]
	},
	{
		enunciado: "En el muestreo estratificado 'proporcional', el tamaño de cada estrato en la muestra es:",
		correcta: "Acorde al peso relativo que tiene ese estrato en la población total",
		incorrectas: [
			"Idéntico para todos los estratos independientemente de su población",
			"Decidido por el encuestador según la facilidad de acceso"
		]
	},
	{
		enunciado: "Las preguntas de 'control' en una encuesta se utilizan para:",
		correcta: "Verificar la consistencia y veracidad de las respuestas del encuestado",
		incorrectas: [
			"Controlar que el encuestador no se salte ninguna página",
			"Medir el tiempo exacto que tarda en contestar cada ítem"
		]
	},
	{
		enunciado: "¿Qué programa de software es estándar para el análisis de datos de encuestas en salud?",
		correcta: "SPSS o R",
		incorrectas: [
			"Adobe Photoshop",
			"AutoCAD"
		]
	},
	{
		enunciado: "La 'mutua exclusión' en las respuestas de una encuesta significa que:",
		correcta: "Cada respuesta posible pertenece a una única categoría sin solapamientos",
		incorrectas: [
			"El encuestado no puede hablar con nadie mientras rellena el test",
			"Si se contesta una pregunta, ya no se puede contestar la siguiente"
		]
	},
	{
		enunciado: "En la recogida de información, el 'sesgo de cortesía' es la tendencia a:",
		correcta: "Dar respuestas que el encuestado cree que agradarán al investigador",
		incorrectas: [
			"Saludar educadamente antes de comenzar la entrevista",
			"Ofrecer café o comida al encuestador durante la visita"
		]
	},
	{
		enunciado: "Un muestreo por conglomerados es 'monetápico' si:",
		correcta: "Se analizan todos los individuos de los conglomerados seleccionados",
		incorrectas: [
			"Se realiza una segunda selección aleatoria dentro de cada grupo",
			"Solo se selecciona un único individuo por cada ciudad"
		]
	},
	{
		enunciado: "La validez 'concurrente' se establece cuando el instrumento:",
		correcta: "Correlaciona con otro instrumento validado aplicado al mismo tiempo",
		incorrectas: [
			"Es capaz de predecir el futuro estado de salud del paciente",
			"Ha sido redactado por más de cinco médicos especialistas"
		]
	},
	{
		enunciado: "El 'error de cobertura' se produce cuando:",
		correcta: "Existen elementos de la población que no están en el marco muestral",
		incorrectas: [
			"La señal del teléfono móvil se interrumpe durante la encuesta",
			"El encuestador no lleva suficiente material de oficina"
		]
	},
	{
		enunciado: "La codificación de las preguntas abiertas se realiza para:",
		correcta: "Agrupar las respuestas libres en categorías numéricas analizables",
		incorrectas: [
			"Ocultar la identidad de los pacientes para que nadie los reconozca",
			"Traducir las respuestas a un lenguaje de programación informático"
		]
	}
];