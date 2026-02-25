'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuál es el principal catión del compartimento extracelular?",
		correcta: "Sodio (Na⁺)",
		incorrectas: [
			"Potasio (K⁺)",
			"Magnesio (Mg²⁺)",
			"Calcio (Ca²⁺)"
		]
	},
	{
		enunciado: "La hiponatremia se define técnicamente como una concentración de sodio plasmático inferior a:",
		correcta: "135 mEq/L",
		incorrectas: [
			"145 mEq/L",
			"125 mEq/L",
			"130 mEq/L"
		]
	},
	{
		enunciado: "¿Qué alteración electrolítica es una emergencia médica por su riesgo de arritmias letales?",
		correcta: "Hiperpotasemia (Hiperkalemia)",
		incorrectas: [
			"Hipocalcemia leve",
			"Hiponatremia crónica",
			"Hipermagnesemia leve"
		]
	},
	{
		enunciado: "El signo de Chvostek y el de Trousseau son indicativos de:",
		correcta: "Hipocalcemia",
		incorrectas: [
			"Hipernatremia",
			"Hipomagnesemia profunda",
			"Hiperpotasemia"
		]
	},
	{
		enunciado: "La regulación principal de la osmolaridad plasmática corre a cargo de:",
		correcta: "Hormona antidiurética (ADH) y la sed",
		incorrectas: [
			"Insulina y glucagón",
			"Calcitonina y hormona paratiroidea",
			"Aldosterona y cortisol"
		]
	},
	{
		enunciado: "La acidosis metabólica suele compensarse mediante:",
		correcta: "Hiperventilación (disminución de pCO₂)",
		incorrectas: [
			"Retención renal de bicarbonato únicamente",
			"Bradicardia extrema",
			"Hipoventilación alveolar"
		]
	},
	{
		enunciado: "¿Qué mineral es fundamental para la formación de la hidroxiapatita ósea?",
		correcta: "Fósforo y Calcio",
		incorrectas: [
			"Hierro y Cobre",
			"Potasio y Sodio",
			"Flúor y Magnesio"
		]
	},
	{
		enunciado: "El déficit de magnesio se asocia frecuentemente con:",
		correcta: "Alcoholismo crónico y uso de diuréticos",
		incorrectas: [
			"Consumo excesivo de vegetales de hoja verde",
			"Hipertiroidismo primario",
			"Uso crónico de suplementos de calcio"
		]
	},
	{
		enunciado: "El edema se produce cuando el líquido se desplaza desde el capilar al espacio intersticial debido a:",
		correcta: "Aumento de la presión hidrostática o disminución de la presión oncótica",
		incorrectas: [
			"Aumento de la presión oncótica plasmática",
			"Disminución de la permeabilidad capilar",
			"Aumento de la presión osmótica intracelular"
		]
	},
	{
		enunciado: "¿Cuál es el valor normal del pH arterial?",
		correcta: "7.35 - 7.45",
		incorrectas: [
			"7.00 - 7.10",
			"7.50 - 7.60",
			"7.20 - 7.30"
		]
	},
	{
		enunciado: "El principal catión intracelular es:",
		correcta: "Potasio (K⁺)",
		incorrectas: [
			"Sodio (Na⁺)",
			"Cloro (Cl⁻)",
			"Bicarbonato (HCO₃⁻)"
		]
	},
	{
		enunciado: "La aldosterona actúa a nivel renal favoreciendo:",
		correcta: "La reabsorción de sodio y la excreción de potasio",
		incorrectas: [
			"La excreción de sodio y agua",
			"La reabsorción de potasio y calcio",
			"La síntesis de vitamina D activa"
		]
	},
	{
		enunciado: "La causa más frecuente de hiperpotasemia en la práctica clínica es:",
		correcta: "Insuficiencia renal",
		incorrectas: [
			"Vómitos repetidos",
			"Uso de diuréticos de asa",
			"Dieta rica en manzanas"
		]
	},
	{
		enunciado: "La brecha aniónica (Anion Gap) se calcula para el diagnóstico diferencial de:",
		correcta: "Acidosis metabólica",
		incorrectas: [
			"Alcalosis respiratoria",
			"Hiponatremia dilucional",
			"Hipercalcemia tumoral"
		]
	},
	{
		enunciado: "¿Cuál es el principal sistema tampón (buffer) extracelular?",
		correcta: "Bicarbonato / Ácido carbónico",
		incorrectas: [
			"Hemoglobina",
			"Fosfatos intracelulares",
			"Proteínas plasmáticas"
		]
	},
	{
		enunciado: "La hipernatremia suele ser consecuencia de:",
		correcta: "Pérdida de agua superior a la pérdida de solutos",
		incorrectas: [
			"Ingesta excesiva de agua destilada",
			"Secreción inadecuada de ADH (SIADH)",
			"Uso de diuréticos ahorradores de potasio"
		]
	},
	{
		enunciado: "La hipopotasemia se asocia en el ECG con:",
		correcta: "Aparición de onda U y aplanamiento de la onda T",
		incorrectas: [
			"Ondas T picudas y simétricas",
			"Acortamiento del intervalo QT",
			"Bloqueo auriculoventricular de tercer grado"
		]
	},
	{
		enunciado: "La hormona paratiroidea (PTH) aumenta los niveles de calcio plasmático mediante:",
		correcta: "Resorción ósea y reabsorción renal de calcio",
		incorrectas: [
			"Inhibición de la absorción intestinal de calcio",
			"Estimulación de la excreción renal de calcio",
			"Aumento de la excreción biliar de magnesio"
		]
	},
	{
		enunciado: "El agua corporal total en un adulto joven sano representa aproximadamente el:",
		correcta: "60% del peso corporal",
		incorrectas: [
			"40% del peso corporal",
			"80% del peso corporal",
			"20% del peso corporal"
		]
	},
	{
		enunciado: "La hipomagnesemia grave puede provocar:",
		correcta: "Hipocalcemia e hipopotasemia refractarias",
		incorrectas: [
			"Hipernatremia extrema",
			"Alcalosis metabólica grave",
			"Aumento de la densidad ósea"
		]
	},
	{
		enunciado: "La alcalosis respiratoria se produce por:",
		correcta: "Hiperventilación alveolar (descenso de pCO₂)",
		incorrectas: [
			"Retención de CO₂ por EPOC",
			"Vómitos de contenido gástrico",
			"Ingesta de bicarbonato sódico"
		]
	},
	{
		enunciado: "¿Qué efecto tiene la insulina sobre el potasio plasmático?",
		correcta: "Promueve su entrada en la célula (hipopotasemiante)",
		incorrectas: [
			"Estimula su salida de la célula",
			"Aumenta su excreción por el sudor",
			"No tiene efecto sobre el potasio"
		]
	},
	{
		enunciado: "El principal anión extracelular es:",
		correcta: "Cloro (Cl⁻)",
		incorrectas: [
			"Fosfato (PO₄³⁻)",
			"Bicarbonato (HCO₃⁻)",
			"Sodio (Na⁺)"
		]
	},
	{
		enunciado: "El Síndrome de Secreción Inadecuada de ADH (SIADH) cursa con:",
		correcta: "Hiponatremia e hipoosmolaridad plasmática",
		incorrectas: [
			"Hipernatremia y poliuria",
			"Hipercalcemia e hipertensión",
			"Diabetes insípida"
		]
	},
	{
		enunciado: "La vitamina D3 activa (calcitriol) actúa principalmente:",
		correcta: "Aumentando la absorción intestinal de calcio y fósforo",
		incorrectas: [
			"Inhibiendo la síntesis de PTH",
			"Aumentando la excreción renal de calcio",
			"Reduciendo la densidad mineral ósea"
		]
	},
	{
		enunciado: "La causa más común de hipomagnesemia en pacientes hospitalizados es:",
		correcta: "Uso de diuréticos y nutrición parenteral sin suplementos",
		incorrectas: [
			"Ingesta excesiva de chocolate",
			"Hiperparatiroidismo secundario",
			"Reposo prolongado en cama"
		]
	},
	{
		enunciado: "La hipovolemia estimula la liberación de:",
		correcta: "Renina, angiotensina II y aldosterona",
		incorrectas: [
			"Péptido natriurético auricular",
			"Insulina",
			"Calcitonina"
		]
	},
	{
		enunciado: "El exceso de fósforo en sangre (hiperfosfatemía) en la insuficiencia renal produce:",
		correcta: "Precipitación de calcio y riesgo de calcificaciones extraóseas",
		incorrectas: [
			"Aumento de los niveles de vitamina D activa",
			"Disminución de la PTH",
			"Mejora de la conducción nerviosa"
		]
	},
	{
		enunciado: "La diabetes insípida se caracteriza por:",
		correcta: "Déficit de ADH o resistencia a su acción, con poliuria masiva",
		incorrectas: [
			"Hiperglucemia extrema y cetonuria",
			"Aumento de la reabsorción de agua en el túbulo colector",
			"Niveles elevados de aldosterona"
		]
	},
	{
		enunciado: "En una alcalosis metabólica por vómitos, el cloro urinario suele estar:",
		correcta: "Disminuido (< 10-20 mEq/L)",
		incorrectas: [
			"Elevado (> 40 mEq/L)",
			"Normal",
			"No se puede medir"
		]
	},
	{
		enunciado: "La presión osmótica depende de:",
		correcta: "El número de partículas de soluto por unidad de volumen",
		incorrectas: [
			"El tamaño de las moléculas de soluto",
			"La temperatura de la solución únicamente",
			"La presión arterial sistólica"
		]
	},
	{
		enunciado: "El edema por insuficiencia cardíaca es un edema de tipo:",
		correcta: "Generalizado por aumento de la presión hidrostática venosa",
		incorrectas: [
			"Localizado por inflamación",
			"Linfedema por obstrucción",
			"Angioedema por histamina"
		]
	},
	{
		enunciado: "La hipercalcemia se asocia con mayor frecuencia a:",
		correcta: "Hiperparatiroidismo primario y neoplasias",
		incorrectas: [
			"Raquitismo",
			"Hipoalbuminemia",
			"Pancreatitis aguda"
		]
	},
	{
		enunciado: "La pCO₂ normal en sangre arterial es de:",
		correcta: "35 - 45 mmHg",
		incorrectas: [
			"20 - 30 mmHg",
			"50 - 60 mmHg",
			"80 - 100 mmHg"
		]
	},
	{
		enunciado: "El bicarbonato plasmático normal se sitúa en:",
		correcta: "22 - 26 mEq/L",
		incorrectas: [
			"10 - 15 mEq/L",
			"35 - 40 mEq/L",
			"5 - 8 mEq/L"
		]
	},
	{
		enunciado: "Un pH de 7.20, pCO₂ de 60 mmHg y HCO₃⁻ de 26 mEq/L indica:",
		correcta: "Acidosis respiratoria aguda",
		incorrectas: [
			"Acidosis metabólica compensada",
			"Alcalosis respiratoria",
			"Acidosis metabólica pura"
		]
	},
	{
		enunciado: "La causa más común de acidosis respiratoria es:",
		correcta: "Hipoventilación alveolar (EPOC, sedantes)",
		incorrectas: [
			"Ansiedad e hiperventilación",
			"Insuficiencia renal crónica",
			"Cetoacidosis diabética"
		]
	},
	{
		enunciado: "La corrección rápida de una hiponatremia crónica puede causar:",
		correcta: "Mielinólisis pontina central",
		incorrectas: [
			"Edema cerebral",
			"Insuficiencia renal aguda",
			"Tetania muscular"
		]
	},
	{
		enunciado: "La corrección rápida de una hipernatremia puede causar:",
		correcta: "Edema cerebral",
		incorrectas: [
			"Mielinólisis pontina",
			"Necrosis tubular aguda",
			"Alcalosis metabólica"
		]
	},
	{
		enunciado: "El péptido natriurético auricular (ANP) se libera en respuesta a:",
		correcta: "Estiramiento de las aurículas por aumento de volumen",
		incorrectas: [
			"Descenso de la presión arterial",
			"Aumento de la osmolaridad plasmática",
			"Hipopotasemia"
		]
	}
];