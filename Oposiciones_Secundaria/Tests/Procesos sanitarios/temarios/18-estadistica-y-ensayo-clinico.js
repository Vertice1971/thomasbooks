'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué medida de tendencia central es más robusta frente a valores extremos en una distribución asimétrica de datos sanitarios?",
		correcta: "Mediana",
		incorrectas: [
			"Media aritmética",
			"Moda"
		]
	},
	{
		enunciado: "En un ensayo clínico, el procedimiento de 'aleatorización' tiene como objetivo principal:",
		correcta: "Garantizar la comparabilidad de los grupos controlando los factores de confusión conocidos y desconocidos",
		incorrectas: [
			"Asegurar que el investigador sepa qué paciente recibe cada tratamiento",
			"Aumentar artificialmente el tamaño de la muestra para obtener significación"
		]
	},
	{
		enunciado: "¿Qué fase de un ensayo clínico tiene como objetivo principal evaluar la seguridad y toxicidad en un pequeño grupo de voluntarios sanos?",
		correcta: "Fase I",
		incorrectas: [
			"Fase II",
			"Fase III"
		]
	},
	{
		enunciado: "Un valor de p < 0,05 en un contraste de hipótesis indica que:",
		correcta: "La probabilidad de que la diferencia observada se deba al azar es menor del 5%",
		incorrectas: [
			"La diferencia encontrada es clínicamente muy relevante en todos los casos",
			"Se acepta la hipótesis nula de igualdad entre los grupos"
		]
	},
	{
		enunciado: "El diseño de un ensayo clínico 'doble ciego' implica que:",
		correcta: "Ni el paciente ni el investigador conocen la asignación del tratamiento",
		incorrectas: [
			"El paciente desconoce el tratamiento pero el médico sí lo sabe",
			"Dos investigadores diferentes analizan los mismos datos por separado"
		]
	},
	{
		enunciado: "¿Qué medida de dispersión expresa la variabilidad de los datos en las mismas unidades que la variable original?",
		correcta: "Desviación típica",
		incorrectas: [
			"Varianza",
			"Coeficiente de variación"
		]
	},
	{
		enunciado: "El Real Decreto 1090/2015 regula en España:",
		correcta: "Los ensayos clínicos con medicamentos, los Comités de Ética y el Registro Español de Estudios Clínicos",
		incorrectas: [
			"La gestión de residuos sanitarios en laboratorios de análisis clínicos",
			"La formación profesional del personal técnico en procesos sanitarios"
		]
	},
	{
		enunciado: "En estadística inferencial, el error de Tipo I consiste en:",
		correcta: "Rechazar la hipótesis nula cuando esta es en realidad verdadera",
		incorrectas: [
			"Aceptar la hipótesis nula cuando existe una diferencia real",
			"Cometer un error en la transcripción de los datos al software"
		]
	},
	{
		enunciado: "La principal ventaja de un ensayo clínico cruzado (cross-over) es que:",
		correcta: "Cada sujeto actúa como su propio control, reduciendo la variabilidad",
		incorrectas: [
			"Requiere el doble de pacientes que un ensayo de grupos paralelos",
			"Puede realizarse en enfermedades agudas de muy corta duración"
		]
	},
	{
		enunciado: "El 'placebo' se utiliza en investigación clínica para:",
		correcta: "Controlar el efecto psicológico y las variaciones naturales de la enfermedad",
		incorrectas: [
			"Sustituir al fármaco real cuando este tiene un coste demasiado elevado",
			"Engañar al Comité de Ética sobre la verdadera intención del estudio"
		]
	},
	{
		enunciado: "¿Qué parámetro estadístico se utiliza para estimar el rango de valores donde se encuentra el verdadero parámetro poblacional?",
		correcta: "Intervalo de confianza",
		incorrectas: [
			"Rango intercuartílico",
			"Puntuación Z"
		]
	},
	{
		enunciado: "La Fase IV de un ensayo clínico se corresponde con:",
		correcta: "La farmacovigilancia tras la comercialización del medicamento",
		incorrectas: [
			"La búsqueda de la dosis mínima eficaz en pacientes enfermos",
			"La confirmación de la eficacia frente a un comparador activo"
		]
	},
	{
		enunciado: "Un sesgo de 'atrición' en un ensayo clínico se produce cuando:",
		correcta: "Existen pérdidas de sujetos durante el seguimiento de forma no aleatoria",
		incorrectas: [
			"El investigador prefiere incluir a pacientes con mejor pronóstico",
			"El aparato de medición no está correctamente calibrado"
		]
	},
	{
		enunciado: "La variable 'Nivel de glucosa en sangre (mg/dl)' es una variable de tipo:",
		correcta: "Cuantitativa continua",
		incorrectas: [
			"Cualitativa nominal",
			"Cuantitativa discreta"
		]
	},
	{
		enunciado: "El análisis por 'intención de tratar' implica que los pacientes se analizan:",
		correcta: "En el grupo al que fueron asignados originalmente, aunque no completaran el tratamiento",
		incorrectas: [
			"Solo si cumplieron estrictamente con todas las tomas de medicación",
			"Cambiándolos de grupo si presentan efectos secundarios graves"
		]
	},
	{
		enunciado: "¿Cuál es la función del CEIm (Comité de Ética de la Investigación con medicamentos)?",
		correcta: "Evaluar los aspectos éticos, metodológicos y legales del protocolo del ensayo",
		incorrectas: [
			"Suministrar las muestras gratuitas de fármacos a los hospitales",
			"Realizar el análisis estadístico final de los resultados del estudio"
		]
	},
	{
		enunciado: "En una distribución normal o campana de Gauss, la media, la mediana y la moda son:",
		correcta: "Coincidentes en el centro de la distribución",
		incorrectas: [
			"Valores totalmente alejados entre sí",
			"Siempre iguales a cero"
		]
	},
	{
		enunciado: "La 'validez externa' de un ensayo clínico se refiere a:",
		correcta: "La capacidad de generalizar los resultados a la población general",
		incorrectas: [
			"El rigor con el que se ha evitado el sesgo dentro del estudio",
			"La aprobación del diseño por parte de agencias internacionales"
		]
	},
	{
		enunciado: "En un ensayo clínico, el 'período de lavado' (wash-out) sirve para:",
		correcta: "Eliminar los efectos del primer tratamiento antes de iniciar el segundo en diseños cruzados",
		incorrectas: [
			"Desinfectar las instalaciones donde se realizan las pruebas",
			"Asegurar que el paciente ha comprendido el consentimiento informado"
		]
	},
	{
		enunciado: "La variable 'Grado de dolor (Leve, Moderado, Intenso)' es:",
		correcta: "Cualitativa ordinal",
		incorrectas: [
			"Cuantitativa de intervalo",
			"Cualitativa dicotómica"
		]
	},
	{
		enunciado: "El error de Tipo II (beta) se define como:",
		correcta: "No rechazar la hipótesis nula cuando existe una diferencia real",
		incorrectas: [
			"Afirmar que un fármaco funciona cuando es mentira",
			"Seleccionar una muestra demasiado grande para el estudio"
		]
	},
	{
		enunciado: "La potencia de un estudio estadístico (1-beta) indica:",
		correcta: "La capacidad del estudio para detectar una diferencia si esta realmente existe",
		incorrectas: [
			"La fuerza física de los sujetos participantes en el ensayo",
			"La cantidad de miligramos de principio activo por dosis"
		]
	},
	{
		enunciado: "Un estudio 'multicéntrico' es aquel que:",
		correcta: "Se realiza siguiendo un único protocolo en dos o más centros de investigación",
		incorrectas: [
			"Analiza diez enfermedades diferentes en un solo hospital",
			"Está financiado por varios gobiernos nacionales a la vez"
		]
	},
	{
		enunciado: "La desviación típica dividida por la raíz cuadrada del tamaño de la muestra (n) es:",
		correcta: "El error típico de la media",
		incorrectas: [
			"El coeficiente de correlación de Pearson",
			"La varianza poblacional estimada"
		]
	},
	{
		enunciado: "¿Qué documento debe firmar obligatoriamente un paciente para participar en un ensayo clínico?",
		correcta: "Consentimiento informado",
		incorrectas: [
			"Alta voluntaria",
			"Contrato de confidencialidad comercial"
		]
	},
	{
		enunciado: "En el diseño de bloques aleatorizados se busca:",
		correcta: "Reducir la varianza residual agrupando sujetos por una característica pronóstica",
		incorrectas: [
			"Impedir que los pacientes se comuniquen entre ellos durante el estudio",
			"Facilitar el trabajo de los enfermeros encargados de las analíticas"
		]
	},
	{
		enunciado: "El coeficiente de variación se utiliza para:",
		correcta: "Comparar la variabilidad de dos variables con diferentes unidades de medida",
		incorrectas: [
			"Calcular la media aritmética de una serie de datos agrupados",
			"Determinar si la muestra es lo suficientemente grande"
		]
	},
	{
		enunciado: "Un ensayo clínico de 'no inferioridad' pretende demostrar que:",
		correcta: "El nuevo tratamiento no es clínicamente peor que el tratamiento estándar",
		incorrectas: [
			"El fármaco nuevo es mucho más barato que el anterior",
			"El tratamiento no produce ningún tipo de efecto secundario"
		]
	},
	{
		enunciado: "La 'regresión lineal' se utiliza para:",
		correcta: "Modelar la relación entre una variable dependiente y una o más independientes",
		incorrectas: [
			"Clasificar a los pacientes en grupos de riesgo según su apellido",
			"Calcular el porcentaje de aciertos en un examen de oposición"
		]
	},
	{
		enunciado: "En un ensayo clínico, la variable 'desenlace' (endpoint) primaria debe ser:",
		correcta: "La más relevante clínicamente y capaz de responder al objetivo principal",
		incorrectas: [
			"Aquella que sea más fácil y barata de medir en el laboratorio",
			"Un síntoma subjetivo que solo el paciente pueda percibir"
		]
	},
	{
		enunciado: "¿Qué indica un coeficiente de correlación r = -0,9?",
		correcta: "Una fuerte relación lineal inversa entre las dos variables",
		incorrectas: [
			"Que no existe ninguna relación entre las variables estudiadas",
			"Una relación directa perfecta donde ambas variables aumentan"
		]
	},
	{
		enunciado: "El 'enmascaramiento' protege fundamentalmente contra:",
		correcta: "El sesgo de información y de evaluación",
		incorrectas: [
			"El error de muestreo por tamaño insuficiente",
			"La falta de presupuesto para la investigación"
		]
	},
	{
		enunciado: "La distribución de Poisson es adecuada para modelar:",
		correcta: "Eventos raros que ocurren en un intervalo continuo de tiempo o espacio",
		incorrectas: [
			"Variables físicas como la altura o el peso de la población",
			"Lanzamientos de una moneda donde solo hay dos resultados"
		]
	},
	{
		enunciado: "La declaración de Helsinki es un documento ético fundamental sobre:",
		correcta: "Principios éticos para las investigaciones médicas en seres humanos",
		incorrectas: [
			"Normas de higiene en grandes eventos internacionales",
			"La protección de la capa de ozono y el medio ambiente"
		]
	},
	{
		enunciado: "En estadística descriptiva, el percentil 75 corresponde al:",
		correcta: "Tercer cuartil (Q3)",
		incorrectas: [
			"Primer cuartil (Q1)",
			"Segundo cuartil (Q2) o mediana"
		]
	},
	{
		enunciado: "Un estudio de 'superioridad' requiere habitualmente:",
		correcta: "Un tamaño muestral mayor que uno de equivalencia",
		incorrectas: [
			"Que el investigador sea jefe de servicio del hospital",
			"El uso obligatorio de cirugía en todos los pacientes"
		]
	},
	{
		enunciado: "La asimetría positiva (a la derecha) de una distribución significa que:",
		correcta: "Hay una cola larga de valores altos y la media es mayor que la mediana",
		incorrectas: [
			"La mayoría de los pacientes han obtenido resultados excelentes",
			"La curva es perfectamente simétrica y proporcional"
		]
	},
	{
		enunciado: "El test de Chi-cuadrado de Pearson se utiliza para comparar:",
		correcta: "Dos variables cualitativas o categóricas",
		incorrectas: [
			"Dos medias de variables cuantitativas normales",
			"La varianza de tres grupos independientes"
		]
	},
	{
		enunciado: "En la fase III de un ensayo, el grupo control recibe idealmente:",
		correcta: "El mejor tratamiento estándar disponible en ese momento",
		incorrectas: [
			"Agua destilada para asegurar que no hay efecto biológico",
			"Nada, para observar la evolución natural de la enfermedad"
		]
	},
	{
		enunciado: "El objetivo de la estadística descriptiva es:",
		correcta: "Resumir y organizar los datos para describir las características de la muestra",
		incorrectas: [
			"Extrapolar las conclusiones de la muestra a toda la población",
			"Probar que un nuevo fármaco es superior al placebo"
		]
	}
];