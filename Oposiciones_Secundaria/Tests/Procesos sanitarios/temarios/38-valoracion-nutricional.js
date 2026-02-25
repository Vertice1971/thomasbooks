'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué parámetro antropométrico se utiliza para estimar la masa muscular esquelética en la valoración nutricional?",
		correcta: "Circunferencia muscular del brazo (CMB)",
		incorrectas: [
			"Pliegue tricipital (PT)",
			"Índice de masa corporal (IMC)"
		]
	},
	{
		enunciado: "El pliegue cutáneo tricipital es un indicador indirecto de:",
		correcta: "Las reservas de grasa corporal (masa grasa)",
		incorrectas: [
			"La masa libre de grasa",
			"El contenido de agua extracelular"
		]
	},
	{
		enunciado: "¿Cuál es la proteína plasmática con una vida media más corta (2 días), lo que la hace útil para detectar cambios nutricionales agudos?",
		correcta: "Prealbúmina (transtiretina)",
		incorrectas: [
			"Albúmina",
			"Transferrina"
		]
	},
	{
		enunciado: "La Valoración Global Subjetiva (VGS) es una herramienta clínica que se basa en:",
		correcta: "Historia clínica (peso, ingesta, síntomas gastrointestinales) y examen físico",
		incorrectas: [
			"Cálculos matemáticos estrictos de la composición por DEXA",
			"Únicamente en el análisis de los niveles de electrolitos en sangre"
		]
	},
	{
		enunciado: "¿Qué indicador bioquímico se utiliza para evaluar la inmunidad celular ligada al estado nutricional?",
		correcta: "Recuento total de linfocitos (RTL)",
		incorrectas: [
			"Nivel de proteína C reactiva",
			"Concentración de hemoglobina glicosilada"
		]
	},
	{
		enunciado: "En la valoración del paciente anciano, el test de cribado nutricional más validado es el:",
		correcta: "MNA (Mini Nutritional Assessment)",
		incorrectas: [
			"MUST (Malnutrition Universal Screening Tool)",
			"NRS-2002 (Nutritional Risk Screening)"
		]
	},
	{
		enunciado: "La excreción de creatinina en orina de 24 horas es un marcador proporcional a:",
		correcta: "La masa muscular total",
		incorrectas: [
			"La ingesta de lípidos de la dieta",
			"El funcionamiento exclusivo de las glándulas suprarrenales"
		]
	},
	{
		enunciado: "El balance nitrogenado se utiliza para evaluar:",
		correcta: "El catabolismo proteico y la adecuación del aporte nitrogenado",
		incorrectas: [
			"El metabolismo de los hidratos de carbono",
			"La absorción de vitaminas liposolubles"
		]
	},
	{
		enunciado: "¿Qué técnica de composición corporal se basa en la resistencia de los tejidos al paso de una corriente eléctrica?",
		correcta: "Bioimpedancia eléctrica (BIA)",
		incorrectas: [
			"Absorciometría de doble fotón",
			"Dinamometría de mano"
		]
	},
	{
		enunciado: "Un descenso de la albúmina sérica por debajo de 2,8 g/dL indica generalmente:",
		correcta: "Desnutrición grave o proceso inflamatorio sistémico severo",
		incorrectas: [
			"Deshidratación hipertónica",
			"Estado nutricional óptimo"
		]
	},
	{
		enunciado: "El índice creatinina/altura (ICA) se considera normal cuando sus valores están:",
		correcta: "Por encima del 90% del valor de referencia",
		incorrectas: [
			"Entre el 40% y el 50%",
			"Por debajo del 20%"
		]
	},
	{
		enunciado: "La dinamometría (fuerza de prensión de la mano) evalúa:",
		correcta: "La funcionalidad muscular y es un predictor de morbimortalidad",
		incorrectas: [
			"El porcentaje exacto de grasa visceral",
			"La densidad mineral ósea del radio"
		]
	},
	{
		enunciado: "¿Qué situación clínica puede falsear la interpretación de las proteínas plasmáticas como marcadores nutricionales?",
		correcta: "Inflamación o infección (fase aguda)",
		incorrectas: [
			"Ingesta excesiva de agua destilada",
			"Realización de ejercicio físico ligero"
		]
	},
	{
		enunciado: "El pliegue subescapular se mide:",
		correcta: "Justo por debajo del ángulo inferior de la escápula",
		incorrectas: [
			"En la línea media axilar a la altura del ombligo",
			"En la parte anterior del muslo"
		]
	},
	{
		enunciado: "En el cribado MUST, los tres criterios clave son:",
		correcta: "IMC, pérdida de peso involuntaria y efecto de la enfermedad aguda",
		incorrectas: [
			"Edad, sexo y niveles de glucosa en ayunas",
			"Perímetro de pantorrilla, colesterol y anemia"
		]
	},
	{
		enunciado: "El cociente respiratorio (CR) medido por calorimetría indirecta indica:",
		correcta: "El tipo de sustrato energético (HC, grasas, mixto) que se está oxidando",
		incorrectas: [
			"La capacidad pulmonar total del paciente",
			"El grado de hidratación del tejido adiposo"
		]
	},
	{
		enunciado: "La pérdida de peso se considera clínicamente significativa si es superior al:",
		correcta: "10% del peso habitual en 6 meses",
		incorrectas: [
			"2% del peso habitual en un año",
			"20% del peso en una semana"
		]
	},
	{
		enunciado: "El edema en la desnutrición (tipo Kwashiorkor) se debe principalmente a:",
		correcta: "Hipoalbuminemia, que reduce la presión oncótica plasmática",
		incorrectas: [
			"Aumento de la ingesta de sodio",
			"Fallo en la excreción renal de potasio"
		]
	},
	{
		enunciado: "La valoración de la ingesta mediante 'recuerdo de 24 horas' es un método:",
		correcta: "Retrospectivo basado en la memoria del paciente",
		incorrectas: [
			"Prospectivo donde se anota el alimento antes de comerlo",
			"Bioquímico para medir la absorción de nutrientes"
		]
	},
	{
		enunciado: "El índice de riesgo nutricional (IRN) de Buzby utiliza para su cálculo:",
		correcta: "Albúmina sérica y relación entre peso actual/peso habitual",
		incorrectas: [
			"Glucemia y perímetro abdominal",
			"Recuento de linfocitos y edad del paciente"
		]
	},
	{
		enunciado: "La transferrina sérica tiene una vida media de aproximadamente:",
		correcta: "8 a 10 días",
		incorrectas: [
			"20 a 22 días",
			"12 horas"
		]
	},
	{
		enunciado: "¿Cuál es el principal inconveniente de la medición de pliegues cutáneos?",
		correcta: "Elevada variabilidad interobservador y dificultad en obesidad extrema",
		incorrectas: [
			"Su alto coste económico y necesidad de quirófano",
			"Que solo se puede realizar en pacientes inconscientes"
		]
	},
	{
		enunciado: "La Proteína Ligada al Retinol (RBP) es un marcador sensible pero se ve alterada por:",
		correcta: "La función renal (aumenta en insuficiencia renal)",
		incorrectas: [
			"La exposición solar prolongada",
			"El consumo de cafeína"
		]
	},
	{
		enunciado: "El perímetro de la pantorrilla es un indicador útil de masa muscular en:",
		correcta: "Pacientes ancianos encamados",
		incorrectas: [
			"Atletas de élite",
			"Recién nacidos prematuros"
		]
	},
	{
		enunciado: "En la exploración física, la presencia de 'pelo ralo y quebradizo' sugiere:",
		correcta: "Deficiencia de proteínas o zinc",
		incorrectas: [
			"Exceso de vitamina K",
			"Consumo elevado de glúcidos complejos"
		]
	},
	{
		enunciado: "La calorimetría indirecta mide el gasto energético en reposo mediante:",
		correcta: "El consumo de O₂ y la producción de CO₂",
		incorrectas: [
			"La pérdida de calor corporal a través de la piel",
			"La cantidad de agua marcada eliminada por la orina"
		]
	},
	{
		enunciado: "El método de 'agua doblemente marcada' se utiliza para medir:",
		correcta: "El gasto energético total en condiciones de vida libre",
		incorrectas: [
			"La absorción de hierro en el duodeno",
			"El volumen de sangre circulante"
		]
	},
	{
		enunciado: "La presencia de 'manchas de Bitot' en la conjuntiva es un signo de déficit de:",
		correcta: "Vitamina A",
		incorrectas: [
			"Vitamina B12",
			"Hierro"
		]
	},
	{
		enunciado: "¿Cuál es el objetivo del cribado nutricional?",
		correcta: "Identificar de forma rápida a pacientes con riesgo de desnutrición",
		incorrectas: [
			"Realizar un diagnóstico médico definitivo de la patología de base",
			"Prescribir el tipo de cirugía que requiere el paciente"
		]
	},
	{
		enunciado: "El índice de masa libre de grasa (IMLG) se obtiene mediante:",
		correcta: "Masa libre de grasa (kg) / Talla² (m)",
		incorrectas: [
			"Peso (kg) / Talla (m)",
			"Masa grasa (kg) / Peso total (kg)"
		]
	},
	{
		enunciado: "La somatometría incluye las siguientes mediciones:",
		correcta: "Peso, talla, perímetros y pliegues",
		incorrectas: [
			"Niveles de albúmina y transferrina",
			"Frecuencia cardíaca y respiratoria"
		]
	},
	{
		enunciado: "La desnutrición tipo Marasmo se caracteriza por:",
		correcta: "Déficit calórico predominante con pérdida de masa muscular y grasa",
		incorrectas: [
			"Déficit proteico con conservación de la grasa subcutánea",
			"Aumento de peso por retención de líquidos masiva"
		]
	},
	{
		enunciado: "¿Qué indica un ángulo de fase bajo en la bioimpedancia eléctrica?",
		correcta: "Deterioro de la integridad celular y peor pronóstico nutricional",
		incorrectas: [
			"Excelente estado de hidratación intracelular",
			"Bajo contenido en grasa visceral"
		]
	},
	{
		enunciado: "El Cuestionario de Frecuencia de Consumo (CFC) sirve para:",
		correcta: "Evaluar los hábitos alimentarios a largo plazo",
		incorrectas: [
			"Conocer exactamente lo ingerido en el desayuno de hoy",
			"Sustituir la medición de la talla en pacientes con escoliosis"
		]
	},
	{
		enunciado: "La 'atención nutricional' debe iniciarse en pacientes hospitalizados:",
		correcta: "En las primeras 24-48 horas tras el ingreso",
		incorrectas: [
			"Solo si el paciente va a estar más de un mes ingresado",
			"Únicamente si lo solicita el servicio de cirugía"
		]
	},
	{
		enunciado: "En pacientes obesos, el aclaramiento de creatinina para valorar masa muscular:",
		correcta: "Puede estar sobreestimado por la relación talla/peso",
		incorrectas: [
			"Es el método más exacto y fiable sin margen de error",
			"No tiene ninguna utilidad clínica"
		]
	},
	{
		enunciado: "Las tablas de referencia (percentiles) permiten comparar al paciente con:",
		correcta: "Individuos de su misma edad, sexo y población",
		incorrectas: [
			"Pacientes de cualquier edad de otros continentes",
			"Su propio peso ideal teórico corregido por edad"
		]
	},
	{
		enunciado: "La impedancia es la suma de:",
		correcta: "Resistencia y reactancia",
		incorrectas: [
			"Talla y peso al cuadrado",
			"Grasa y agua corporal"
		]
	},
	{
		enunciado: "La desnutrición hospitalaria se asocia directamente con:",
		correcta: "Aumento de la estancia media, de las infecciones y de la mortalidad",
		incorrectas: [
			"Disminución de los costes sanitarios",
			"Mejor respuesta a los tratamientos quimioterápicos"
		]
	},
	{
		enunciado: "El índice de Con測 (Controlling Nutritional Status) utiliza:",
		correcta: "Albúmina, colesterol total y recuento de linfocitos",
		incorrectas: [
			"Peso, talla e ingesta calórica diaria",
			"Sodio, potasio y cloro"
		]
	}
];