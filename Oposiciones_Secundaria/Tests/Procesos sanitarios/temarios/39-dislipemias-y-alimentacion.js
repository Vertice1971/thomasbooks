'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué lipoproteína es la encargada del transporte del colesterol desde los tejidos periféricos hacia el hígado (transporte inverso)?",
		correcta: "HDL",
		incorrectas: [
			"LDL",
			"VLDL"
		]
	},
	{
		enunciado: "La principal lipoproteína transportadora de triglicéridos de origen exógeno (dietético) es:",
		correcta: "Quilomicrón",
		incorrectas: [
			"LDL",
			"IDL"
		]
	},
	{
		enunciado: "Según el consenso de expertos, ¿qué nivel de colesterol LDL se considera óptimo para la población general sin otros factores de riesgo?",
		correcta: "< 115 mg/dl",
		incorrectas: [
			"< 200 mg/dl",
			"> 160 mg/dl"
		]
	},
	{
		enunciado: "¿Cuál es el principal efecto de los ácidos grasos saturados (AGS) sobre el perfil lipídico?",
		correcta: "Aumentan los niveles de colesterol LDL",
		incorrectas: [
			"Aumentan la sensibilidad a la insulina",
			"Disminuyen la síntesis de VLDL"
		]
	},
	{
		enunciado: "Los ácidos grasos trans tienen un efecto doblemente negativo porque:",
		correcta: "Aumentan el LDL y disminuyen el HDL",
		incorrectas: [
			"Aumentan el HDL y disminuyen el LDL",
			"Solo afectan a los niveles de quilomicrones"
		]
	},
	{
		enunciado: "En un plan de alimentación cardioprotector, el porcentaje de grasa saturada debe ser:",
		correcta: "< 7% - 10% de la energía total",
		incorrectas: [
			"Aproximadamente el 30% de la energía total",
			"Superior al 15% para proteger las membranas"
		]
	},
	{
		enunciado: "Los fitoesteroles (esteroles vegetales) reducen el colesterol plasmático mediante:",
		correcta: "La inhibición competitiva de la absorción del colesterol en el intestino",
		incorrectas: [
			"La estimulación de la lipoproteína lipasa",
			"El bloqueo de la síntesis endógena de colesterol en el hígado"
		]
	},
	{
		enunciado: "¿Qué tipo de fibra tiene mayor capacidad para reducir los niveles de colesterol LDL?",
		correcta: "Fibra soluble (pectinas, gomas, mucílagos)",
		incorrectas: [
			"Fibra insoluble (celulosa, lignina)",
			"Fibra de origen mineral"
		]
	},
	{
		enunciado: "Los ácidos grasos omega-3 de cadena larga (EPA y DHA) actúan principalmente:",
		correcta: "Reduciendo los niveles de triglicéridos plasmáticos",
		incorrectas: [
			"Aumentando drásticamente el colesterol LDL",
			"Disminuyendo la absorción de vitamina K"
		]
	},
	{
		enunciado: "La hipercolesterolemia familiar se caracteriza citogenéticamente por:",
		correcta: "Déficit o mal funcionamiento de los receptores de LDL",
		incorrectas: [
			"Exceso de producción de HDL",
			"Ausencia total de lipoproteína lipasa"
		]
	},
	{
		enunciado: "En la fórmula de Friedewald para el cálculo del LDL, ¿cuándo no es aplicable?",
		correcta: "Si los triglicéridos son superiores a 400 mg/dl",
		incorrectas: [
			"Si el paciente ha realizado ejercicio intenso",
			"Si el colesterol total es menor de 200 mg/dl"
		]
	},
	{
		enunciado: "La dieta mediterránea ha demostrado reducir el riesgo cardiovascular gracias a su alto contenido en:",
		correcta: "Ácidos grasos monoinsaturados (ácido oleico), fibra y antioxidantes",
		incorrectas: [
			"Proteínas de origen animal y grasas saturadas",
			"Carbohidratos refinados de absorción rápida"
		]
	},
	{
		enunciado: "¿Qué alimento es la fuente principal de ácido alfa-linolénico (omega-3 esencial)?",
		correcta: "Nueces y semillas de lino",
		incorrectas: [
			"Carne de vacuno",
			"Aceite de palma"
		]
	},
	{
		enunciado: "El consumo excesivo de alcohol se asocia directamente con un aumento de:",
		correcta: "Triglicéridos y VLDL",
		incorrectas: [
			"Colesterol LDL exclusivamente",
			"Quilomicrones postpandriales de forma crónica"
		]
	},
	{
		enunciado: "La lipoproteína (a) [Lp(a)] se considera un factor de riesgo independiente porque:",
		correcta: "Es proaterogénica y tiene similitud estructural con el plasminógeno",
		incorrectas: [
			"Aumenta la excreción biliar de colesterol",
			"Es la única lipoproteína que no contiene apolipoproteínas"
		]
	},
	{
		enunciado: "¿Cuál es el mecanismo de acción de la fibra soluble en la reducción del colesterol?",
		correcta: "Secuestro de ácidos biliares, aumentando su excreción fecal",
		incorrectas: [
			"Oxidación de las partículas de LDL en el plasma",
			"Inhibición de la enzima HMG-CoA reductasa"
		]
	},
	{
		enunciado: "En la hipertrigliceridemia grave (> 500 mg/dl), el riesgo clínico más inmediato es:",
		correcta: "Pancreatitis aguda",
		incorrectas: [
			"Infarto agudo de miocardio",
			"Ictus isquémico"
		]
	},
	{
		enunciado: "La sustitución de ácidos grasos saturados por monoinsaturados (AGM) provoca:",
		correcta: "Reducción del LDL sin afectar o aumentando ligeramente el HDL",
		incorrectas: [
			"Aumento del riesgo de formación de placa de ateroma",
			"Disminución de la sensibilidad a la insulina"
		]
	},
	{
		enunciado: "La Apo B-100 es la apolipoproteína principal de:",
		correcta: "VLDL, IDL y LDL",
		incorrectas: [
			"HDL",
			"Quilomicrones"
		]
	},
	{
		enunciado: "¿Qué efecto tiene el ejercicio físico aeróbico regular sobre el perfil lipídico?",
		correcta: "Aumenta los niveles de HDL y reduce los triglicéridos",
		incorrectas: [
			"Aumenta los niveles de LDL oxidado",
			"Disminuye la actividad de la lipoproteína lipasa"
		]
	},
	{
		enunciado: "Los xantomas y xantelasmas son signos físicos de:",
		correcta: "Depósito de lípidos en piel y tendones por hiperlipemia severa",
		incorrectas: [
			"Déficit severo de ácidos grasos esenciales",
			"Reacción alérgica a las estatinas"
		]
	},
	{
		enunciado: "En el tratamiento dietético de la hipertrigliceridemia, es fundamental limitar:",
		correcta: "Azúcares sencillos y alcohol",
		incorrectas: [
			"Proteínas vegetales",
			"Agua mineral"
		]
	},
	{
		enunciado: "El índice aterogénico se calcula mediante la relación:",
		correcta: "Colesterol total / Colesterol HDL",
		incorrectas: [
			"LDL / VLDL",
			"Triglicéridos / Glucosa"
		]
	},
	{
		enunciado: "La lecitina-colesterol aciltransferasa (LCAT) es necesaria para:",
		correcta: "La maduración y esterificación del colesterol en las HDL",
		incorrectas: [
			"La degradación de los quilomicrones en el endotelio",
			"La absorción de colesterol en las micelas intestinales"
		]
	},
	{
		enunciado: "¿Qué porcentaje de las calorías totales debe aportar la grasa en una dieta estándar para dislipemias?",
		correcta: "25% - 35%",
		incorrectas: [
			"10% - 15%",
			"50% - 60%"
		]
	},
	{
		enunciado: "Los ácidos grasos omega-6 (ácido linoleico) tienen un efecto:",
		correcta: "Hipocolesterolemiante al sustituir a las grasas saturadas",
		incorrectas: [
			"Proinflamatorio si se consumen en cualquier cantidad",
			"Neutro sobre los niveles de LDL"
		]
	},
	{
		enunciado: "La dieta DASH, aunque diseñada para la hipertensión, es útil en dislipemias por:",
		correcta: "Su alto contenido en potasio, calcio, magnesio y fibra",
		incorrectas: [
			"Su alto aporte de carnes rojas procesadas",
			"La restricción absoluta de legumbres"
		]
	},
	{
		enunciado: "La Apo A-I es la apolipoproteína estructural de:",
		correcta: "HDL",
		incorrectas: [
			"LDL",
			"VLDL"
		]
	},
	{
		enunciado: "El colesterol de la dieta tiene un impacto sobre el colesterol plasmático:",
		correcta: "Menor que el de las grasas saturadas y trans",
		incorrectas: [
			"Directo y proporcional en todos los individuos por igual",
			"Inexistente, ya que todo el colesterol se sintetiza en el hígado"
		]
	},
	{
		enunciado: "Se recomienda que el consumo de colesterol diario en pacientes con dislipemia sea:",
		correcta: "< 200 mg/día",
		incorrectas: [
			"Entre 500 y 1000 mg/día",
			"Sin límite si se consumen antioxidantes"
		]
	},
	{
		enunciado: "La enzima HMG-CoA reductasa es la diana farmacológica de:",
		correcta: "Las estatinas",
		incorrectas: [
			"Los fibratos",
			"La ezetimiba"
		]
	},
	{
		enunciado: "El arco corneal en personas jóvenes es un hallazgo sugestivo de:",
		correcta: "Hipercolesterolemia familiar",
		incorrectas: [
			"Déficit de vitamina A",
			"Ingesta excesiva de betacarotenos"
		]
	},
	{
		enunciado: "La hidrogenación parcial de aceites vegetales produce:",
		correcta: "Ácidos grasos trans",
		incorrectas: [
			"Ácidos grasos esenciales omega-3",
			"Ácido oleico de alta pureza"
		]
	},
	{
		enunciado: "El efecto de las proteínas de soja en el perfil lipídico se debe a:",
		correcta: "Sus isoflavonas y su efecto en la regulación de receptores LDL",
		incorrectas: [
			"Su contenido en colesterol vegetal",
			"Su capacidad para bloquear la digestión de carbohidratos"
		]
	},
	{
		enunciado: "En la clasificación de Fredrickson, la Tipo IIa corresponde a:",
		correcta: "Hipercolesterolemia pura (elevación de LDL)",
		incorrectas: [
			"Hipertrigliceridemia pura (elevación de VLDL)",
			"Hiperlipemia mixta"
		]
	},
	{
		enunciado: "Las partículas de LDL pequeñas y densas son:",
		correcta: "Más aterogénicas que las grandes y ligeras",
		incorrectas: [
			"Menos capaces de oxidarse",
			"Exclusivas de pacientes con niveles bajos de triglicéridos"
		]
	},
	{
		enunciado: "El objetivo de c-no-HDL (colesterol total - HDL) es útil porque:",
		correcta: "Engloba todas las lipoproteínas aterogénicas (LDL, VLDL, IDL)",
		incorrectas: [
			"Mide únicamente el nivel de quilomicrones en ayunas",
			"Es independiente de la edad y el sexo del paciente"
		]
	},
	{
		enunciado: "El consumo de frutos secos (30g/día) mejora el perfil lipídico debido a:",
		correcta: "Su perfil de ácidos grasos insaturados y contenido en fibra y arginina",
		incorrectas: [
			"Su alto contenido en sodio y grasas saturadas",
			"Su capacidad para inhibir la absorción de agua"
		]
	},
	{
		enunciado: "Las legumbres reducen el riesgo cardiovascular porque:",
		correcta: "Tienen un índice glucémico bajo y son ricas en saponinas y fibra",
		incorrectas: [
			"Sustituyen totalmente la necesidad de grasas esenciales",
			"Aumentan la síntesis hepática de triglicéridos"
		]
	},
	{
		enunciado: "La reducción de 1 mmol/L (aprox. 40 mg/dl) de LDL se asocia a:",
		correcta: "Una reducción del 20-25% en eventos cardiovasculares mayor",
		incorrectas: [
			"Un aumento del riesgo de diabetes tipo 1",
			"Ningún cambio significativo en la mortalidad"
		]
	}
];