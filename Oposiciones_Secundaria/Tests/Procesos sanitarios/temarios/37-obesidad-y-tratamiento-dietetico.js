'use strict';

var PREGUNTAS = [
	{
		enunciado: "Según la OMS, ¿a partir de qué valor de Índice de Masa Corporal (IMC) se considera que un adulto padece obesidad?",
		correcta: "30 kg/m²",
		incorrectas: [
			"25 kg/m²",
			"35 kg/m²"
		]
	},
	{
		enunciado: "¿Qué tipo de distribución de grasa corporal se asocia con un mayor riesgo metabólico y cardiovascular?",
		correcta: "Distribución androide (obsesidad central o en forma de manzana)",
		incorrectas: [
			"Distribución ginoide (obsesidad periférica o en forma de pera)",
			"Distribución homogénea subcutánea"
		]
	},
	{
		enunciado: "¿Cuál es la hormona sintetizada por el tejido adiposo que informa al hipotálamo sobre las reservas energéticas e inhibe el apetito?",
		correcta: "Leptina",
		incorrectas: [
			"Ghrelina",
			"Adiponectina"
		]
	},
	{
		enunciado: "La ghrelina es una hormona orexigénica cuya función principal es:",
		correcta: "Estimular el hambre y se segrega principalmente en el estómago",
		incorrectas: [
			"Inducir la saciedad tras la ingesta de grasas",
			"Aumentar el gasto metabólico basal en reposo"
		]
	},
	{
		enunciado: "¿Qué parámetro antropométrico es el mejor predictor de riesgo para el desarrollo de síndrome metabólico?",
		correcta: "Circunferencia de la cintura",
		incorrectas: [
			"Pliegue tricipital",
			"Anchura biacromial"
		]
	},
	{
		enunciado: "En el tratamiento dietético de la obesidad, una dieta hipocalórica equilibrada suele plantear un déficit diario de:",
		correcta: "500 - 1000 kcal respecto al gasto energético total",
		incorrectas: [
			"100 - 200 kcal respecto al gasto energético total",
			"Más de 2500 kcal para asegurar pérdida rápida"
		]
	},
	{
		enunciado: "El principal mecanismo por el cual el ejercicio físico contribuye a la pérdida de peso es:",
		correcta: "El aumento del gasto energético y la preservación de la masa libre de grasa",
		incorrectas: [
			"La reducción drástica de la absorción intestinal de carbohidratos",
			"La inhibición directa de la secreción de insulina"
		]
	},
	{
		enunciado: "La obesidad de clase III o mórbida se define por un IMC de:",
		correcta: "Igual o superior a 40 kg/m²",
		incorrectas: [
			"Entre 30 y 34.9 kg/m²",
			"Superior a 50 kg/m² exclusivamente"
		]
	},
	{
		enunciado: "¿Cuál es la principal limitación del IMC como medida diagnóstica de la obesidad?",
		correcta: "No distingue entre masa muscular y masa grasa",
		incorrectas: [
			"Es muy difícil de calcular en la práctica clínica",
			"Varía significativamente según la presión arterial"
		]
	},
	{
		enunciado: "El efecto térmico de los alimentos (termogénesis inducida por la dieta) es mayor tras la ingesta de:",
		correcta: "Proteínas",
		incorrectas: [
			"Lípidos (grasas)",
			"Hidratos de carbono complejos"
		]
	},
	{
		enunciado: "¿Qué teoría etiopatogénica sugiere que el cuerpo tiende a mantener un peso determinado mediante mecanismos homeostáticos?",
		correcta: "Teoría del Set-Point (Punto de ajuste)",
		incorrectas: [
			"Teoría de la génesis adipocitaria",
			"Teoría del balance nitrogenado negativo"
		]
	},
	{
		enunciado: "La hiperplasia del tejido adiposo (aumento del número de células) ocurre principalmente en:",
		correcta: "La infancia y la adolescencia",
		incorrectas: [
			"La edad adulta tras dietas ricas en sodio",
			"Durante periodos de ayuno prolongado"
		]
	},
	{
		enunciado: "¿Qué porcentaje de pérdida de peso inicial se considera clínicamente significativo para mejorar las comorbilidades?",
		correcta: "5% - 10%",
		incorrectas: [
			"Mínimo un 30%",
			"Cualquier pérdida superior a 1 kg"
		]
	},
	{
		enunciado: "Las dietas de muy bajo contenido calórico (VLCD) aportan generalmente:",
		correcta: "Menos de 800 kcal/día y requieren supervisión médica estrecha",
		incorrectas: [
			"Entre 1200 y 1500 kcal/día",
			"Aportan solo grasas saturadas para inducir cetosis"
		]
	},
	{
		enunciado: "¿Cuál es la función de la adiponectina en el organismo?",
		correcta: "Aumentar la sensibilidad a la insulina y tiene efectos antiinflamatorios",
		incorrectas: [
			"Promover la acumulación de grasa visceral",
			"Bloquear la oxidación de ácidos grasos en el músculo"
		]
	},
	{
		enunciado: "El síndrome de apnea obstructiva del sueño (SAOS) es una complicación frecuente de tipo:",
		correcta: "Mecánico-respiratoria",
		incorrectas: [
			"Endocrino-metabólica",
			"Psicológica-conductual"
		]
	},
	{
		enunciado: "En una dieta para la obesidad, se recomienda aumentar el consumo de fibra para:",
		correcta: "Aumentar la saciedad y reducir la densidad energética de la dieta",
		incorrectas: [
			"Eliminar directamente los depósitos de grasa subcutánea",
			"Sustituir la necesidad de ingesta proteica"
		]
	},
	{
		enunciado: "El gasto metabólico basal (GMB) representa aproximadamente qué porcentaje del gasto energético total en individuos sedentarios?",
		correcta: "60% - 75%",
		incorrectas: [
			"10% - 20%",
			"90% - 100%"
		]
	},
	{
		enunciado: "La cirugía bariátrica se considera una opción de tratamiento generalmente cuando:",
		correcta: "El IMC > 40 o > 35 con comorbilidades graves tras fracaso de tratamiento convencional",
		incorrectas: [
			"El paciente tiene un IMC de 27 y desea una solución rápida",
			"Existen contraindicaciones psiquiátricas graves no tratadas"
		]
	},
	{
		enunciado: "¿Qué nutriente tiene la mayor densidad energética por gramo?",
		correcta: "Lípidos (9 kcal/g)",
		incorrectas: [
			"Hidratos de carbono (4 kcal/g)",
			"Alcohol (7 kcal/g)"
		]
	},
	{
		enunciado: "El neuropeptido Y (NPY) es un potente:",
		correcta: "Estimulante del apetito a nivel hipotalámico",
		incorrectas: [
			"Inhibidor de la ingesta de agua",
			"Precursor de la insulina pancreática"
		]
	},
	{
		enunciado: "¿Qué se entiende por 'ambiente obesogénico'?",
		correcta: "Entorno que promueve el sedentarismo y el acceso fácil a alimentos hipercalóricos",
		incorrectas: [
			"Clima cálido que favorece la retención de líquidos",
			"Predisposición genética individual a acumular grasa"
		]
	},
	{
		enunciado: "La termogénesis de actividad no vinculada al ejercicio (NEAT) incluye:",
		correcta: "Actividades cotidianas como caminar al trabajo, limpiar o permanecer de pie",
		incorrectas: [
			"Entrenamiento de resistencia en gimnasio",
			"Digestión de las proteínas de la cena"
		]
	},
	{
		enunciado: "En la obesidad, la resistencia a la insulina se ve favorecida por:",
		correcta: "El aumento de ácidos grasos libres y citoquinas inflamatorias (TNF-alfa)",
		incorrectas: [
			"La disminución del tejido adiposo visceral",
			"El aumento de la actividad de la lipoproteína lipasa muscular"
		]
	},
	{
		enunciado: "¿Qué técnica diagnóstica es el patrón oro (Gold Standard) para medir la composición corporal?",
		correcta: "DEXA (Absorciometría de rayos X de doble energía)",
		incorrectas: [
			"Bioimpedancia eléctrica (BIA)",
			"Pesaje hidrostático (aunque preciso, el DEXA es la referencia actual)"
		]
	},
	{
		enunciado: "Una dieta muy baja en carbohidratos (cetogénica) en el tratamiento de la obesidad actúa principalmente:",
		correcta: "Aumentando la oxidación de grasas y reduciendo el apetito por los cuerpos cetónicos",
		incorrectas: [
			"Aumentando los depósitos de glucógeno hepático",
			"Evitando la excreción de nitrógeno por la orina"
		]
	},
	{
		enunciado: "La 'obesidad metabólicamente sana' se caracteriza por:",
		correcta: "Exceso de grasa corporal sin alteraciones en glucemia, lípidos o presión arterial",
		incorrectas: [
			"Bajo porcentaje de grasa pero IMC elevado por musculatura",
			"Obesidad con diabetes tipo 1 controlada"
		]
	},
	{
		enunciado: "La enzima lipoproteína lipasa (LPL) tiene como función:",
		correcta: "Favorecer el almacenamiento de triglicéridos en los adipocitos",
		incorrectas: [
			"Movilizar las grasas del tejido adiposo durante el ejercicio",
			"Sintetizar colesterol en el hígado"
		]
	},
	{
		enunciado: "¿Cuál es el riesgo de las 'dietas milagro' o muy restrictivas sin control?",
		correcta: "Efecto rebote (yo-yo) y pérdida de masa muscular",
		incorrectas: [
			"Aumento permanente del gasto metabólico basal",
			"Mejora definitiva de los hábitos alimentarios"
		]
	},
	{
		enunciado: "El péptido similar al glucagón tipo 1 (GLP-1) actúa:",
		correcta: "Retrasando el vaciamiento gástrico y aumentando la saciedad",
		incorrectas: [
			"Estimulando la secreción de glucagón por el páncreas",
			"Reduciendo la sensibilidad periférica a la glucosa"
		]
	},
	{
		enunciado: "La circunferencia de cintura superior a qué valores indica riesgo muy elevado en hombres y mujeres (población europea)?",
		correcta: "> 102 cm en hombres y > 88 cm en mujeres",
		incorrectas: [
			"> 90 cm en hombres y > 80 cm en mujeres",
			"> 120 cm en hombres y > 110 cm en mujeres"
		]
	},
	{
		enunciado: "El tratamiento farmacológico de la obesidad suele iniciarse si:",
		correcta: "IMC > 30 o > 27 con comorbilidades tras fracaso de dieta y ejercicio",
		incorrectas: [
			"El paciente tiene sobrepeso leve (IMC 26) y quiere adelgazar rápido",
			"Exclusivamente en casos de obesidad mórbida grado III"
		]
	},
	{
		enunciado: "El orlistat es un fármaco para la obesidad cuyo mecanismo es:",
		correcta: "Inhibir la lipasa gastrointestinal reduciendo la absorción de grasas",
		incorrectas: [
			"Suprimir el apetito a nivel del sistema nervioso central",
			"Aumentar la excreción urinaria de glucosa"
		]
	},
	{
		enunciado: "La 'inflamación de bajo grado' en la obesidad está mediada por:",
		correcta: "Macrófagos infiltrados en el tejido adiposo",
		incorrectas: [
			"Infecciones bacterianas latentes en el sistema digestivo",
			"Exceso de consumo de vitamina C"
		]
	},
	{
		enunciado: "¿Qué factor genético explica la mayor parte de los casos de obesidad común?",
		correcta: "Poligenia (interacción de múltiples genes con el ambiente)",
		incorrectas: [
			"Mutación única en el gen de la leptina (monogénica)",
			"Alteración cromosómica en el par 21"
		]
	},
	{
		enunciado: "La recomendación de actividad física diaria mínima para mantener el peso perdido es:",
		correcta: "60 - 90 minutos de actividad moderada",
		incorrectas: [
			"10 minutos de estiramientos ligeros",
			"No es necesaria si la dieta es estricta"
		]
	},
	{
		enunciado: "En la evaluación conductual de la obesidad, los 'registros alimentarios' sirven para:",
		correcta: "Identificar estímulos y situaciones que desencadenan la sobreingesta",
		incorrectas: [
			"Calcular con exactitud matemática el peso que se perderá",
			"Sustituir la necesidad de realizar análisis de sangre"
		]
	},
	{
		enunciado: "La pérdida de peso rápida en las primeras fases de una dieta muy restrictiva se debe principalmente a:",
		correcta: "Pérdida de agua y glucógeno",
		incorrectas: [
			"Oxidación inmediata de la grasa visceral",
			"Reducción del tamaño de los huesos"
		]
	},
	{
		enunciado: "La esteatosis hepática no alcohólica se relaciona directamente con:",
		correcta: "Obesidad visceral y resistencia a la insulina",
		incorrectas: [
			"Consumo excesivo de proteínas de origen vegetal",
			"Déficit crónico de vitamina D"
		]
	},
	{
		enunciado: "El objetivo principal del tratamiento dietético a largo plazo es:",
		correcta: "La modificación de hábitos y el mantenimiento del peso perdido",
		incorrectas: [
			"Llegar al peso ideal estético en el menor tiempo posible",
			"Permitir el consumo ilimitado de alimentos procesados 'light'"
		]
	}
];