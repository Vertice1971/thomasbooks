'use strict';

var PREGUNTAS = [
	{
		enunciado: "El objetivo de hemoglobina glicosilada (HbA1c) para la mayoría de adultos con diabetes no gestacional es:",
		correcta: "< 7.0%",
		incorrectas: [
			"< 5.0%",
			"< 8.5%",
			"< 9.0%"
		]
	},
	{
		enunciado: "¿Qué nutriente tiene el impacto más directo y rápido sobre la glucemia postpandrial?",
		correcta: "Hidratos de carbono",
		incorrectas: [
			"Proteínas de alto valor biológico",
			"Lípidos monoinsaturados",
			"Vitaminas hidrosolubles"
		]
	},
	{
		enunciado: "El índice glucémico (IG) mide:",
		correcta: "La capacidad de un alimento de elevar la glucemia comparado con un patrón",
		incorrectas: [
			"La cantidad total de azúcar por gramo de alimento",
			"La velocidad de vaciamiento gástrico exclusivamente",
			"El contenido de fibra insoluble del alimento"
		]
	},
	{
		enunciado: "En la diabetes tipo 1, el pilar fundamental del tratamiento es:",
		correcta: "Insulinoterapia y educación en el conteo de hidratos",
		incorrectas: [
			"Antidiabéticos orales únicamente",
			"Dieta cetogénica estricta sin insulina",
			"Actividad física sin control de ingesta"
		]
	},
	{
		enunciado: "¿Qué efecto tiene la fibra soluble en el paciente diabético?",
		correcta: "Retrasa la absorción de glucosa y mejora el perfil lipídico",
		incorrectas: [
			"Provoca picos de insulina innecesarios",
			"Inactiva la acción de la metformina",
			"Acelera el tránsito intestinal reduciendo la absorción de B12"
		]
	},
	{
		enunciado: "La hipoglucemia clínica se define generalmente por valores de glucosa inferiores a:",
		correcta: "70 mg/dl",
		incorrectas: [
			"90 mg/dl",
			"110 mg/dl",
			"50 mg/dl (solo en no diabéticos)"
		]
	},
	{
		enunciado: "El método del plato para personas con diabetes recomienda que la mitad del plato sea:",
		correcta: "Verduras y hortalizas no feculentas",
		incorrectas: [
			"Alimentos proteicos magros",
			"Cereales integrales y tubérculos",
			"Fruta fresca de temporada"
		]
	},
	{
		enunciado: "Los edulcorantes no calóricos (sacarina, aspartamo, sucralosa):",
		correcta: "No elevan la glucemia y son útiles para reducir la carga calórica",
		incorrectas: [
			"Están estrictamente prohibidos por riesgo de cetosis",
			"Tienen el mismo impacto glucémico que la sacarosa",
			"Deben sustituir a todas las proteínas de la dieta"
		]
	},
	{
		enunciado: "La microalbuminuria es un marcador precoz de:",
		correcta: "Nefropatía diabética",
		incorrectas: [
			"Retinopatía diabética",
			"Neuropatía autonómica",
			"Pie diabético isquémico"
		]
	},
	{
		enunciado: "El ejercicio físico en el paciente diabético:",
		correcta: "Aumenta la captación de glucosa muscular por vías independientes de la insulina",
		incorrectas: [
			"Siempre debe realizarse en ayunas para favorecer la proteólisis",
			"Está contraindicado si la glucemia es de 140 mg/dl",
			"Solo es efectivo si se realiza a intensidad máxima"
		]
	},
	{
		enunciado: "La carga glucémica (CG), a diferencia del índice glucémico (IG), tiene en cuenta:",
		correcta: "La cantidad de hidratos de carbono presentes en una ración común",
		incorrectas: [
			"El contenido total de grasas saturadas",
			"La presencia de edulcorantes artificiales",
			"El orden en el que se consumen los alimentos"
		]
	},
	{
		enunciado: "¿Qué complicación aguda es más frecuente en la diabetes tipo 1 ante un déficit grave de insulina?",
		correcta: "Cetoacidosis diabética",
		incorrectas: [
			"Estado hiperosmolar hiperglucémico",
			"Coma hipoglucémico por exceso de glucagón",
			"Acidosis láctica por metformina"
		]
	},
	{
		enunciado: "En el tratamiento de la diabetes tipo 2, la metformina actúa principalmente:",
		correcta: "Reduciendo la producción hepática de glucosa y mejorando la sensibilidad periférica",
		incorrectas: [
			"Estimulando la secreción de insulina por las células beta",
			"Inhibiendo la absorción de glucosa en el intestino delgado",
			"Aumentando la excreción renal de glucosa"
		]
	},
	{
		enunciado: "La 'regla del 15' para tratar una hipoglucemia consiste en:",
		correcta: "Ingerir 15g de HC rápidos y esperar 15 minutos para reevaluar",
		incorrectas: [
			"Tomar 15 vasos de agua en 15 minutos",
			"Inyectar 15 unidades de insulina rápida",
			"Caminar 15 minutos antes de comer"
		]
	},
	{
		enunciado: "La diabetes gestacional suele diagnosticarse mediante el test de O'Sullivan entre las semanas:",
		correcta: "24 y 28 de gestación",
		incorrectas: [
			"8 y 12 de gestación",
			"36 y 38 de gestación",
			"En el primer trimestre exclusivamente"
		]
	},
	{
		enunciado: "Un factor de riesgo mayor para la diabetes tipo 2 es:",
		correcta: "El sedentarismo y la obesidad",
		incorrectas: [
			"El consumo elevado de sal",
			"La exposición solar prolongada",
			"El déficit de vitamina K"
		]
	},
	{
		enunciado: "El fenómeno de 'Amanecer' en diabéticos se refiere a:",
		correcta: "Hiperglucemia matutina por liberación de hormonas contra-reguladoras (GH, cortisol)",
		incorrectas: [
			"Hipoglucemia severa tras el desayuno",
			"Aumento de la visión nocturna por retinopatía",
			"Efecto rebote tras una hipoglucemia nocturna (Somogyi)"
		]
	},
	{
		enunciado: "El recuento de hidratos de carbono se basa en el concepto de ración, que equivale a:",
		correcta: "10 gramos de hidratos de carbono",
		incorrectas: [
			"100 gramos de peso del alimento",
			"5 gramos de azúcares simples",
			"20 gramos de almidón"
		]
	},
	{
		enunciado: "La retinopatía diabética es una complicación de tipo:",
		correcta: "Microvascular",
		incorrectas: [
			"Macrovascular",
			"Infecciosa aguda",
			"Iatrogénica"
		]
	},
	{
		enunciado: "¿Cuál es el principal riesgo macrovascular en la diabetes?",
		correcta: "Cardiopatía isquémica e ictus",
		incorrectas: [
			"Glomeruloesclerosis",
			"Cataratas",
			"Neuropatía de fibras pequeñas"
		]
	},
	{
		enunciado: "La insulina de acción prolongada (glargina, detemir) tiene como función principal:",
		correcta: "Cubrir las necesidades basales de insulina durante 24 horas",
		incorrectas: [
			"Controlar el pico glucémico inmediatamente después de comer",
			"Tratar rápidamente una cetoacidosis en urgencias",
			"Aumentar la producción de glucagón"
		]
	},
	{
		enunciado: "En pacientes diabéticos con enfermedad renal, se debe vigilar especialmente el aporte de:",
		correcta: "Proteínas y potasio",
		incorrectas: [
			"Vitamina C",
			"Grasas poliinsaturadas",
			"Fibra insoluble"
		]
	},
	{
		enunciado: "Los inhibidores de la SGLT2 (gliflozinas) actúan:",
		correcta: "Favoreciendo la eliminación de glucosa por la orina (glucosuria)",
		incorrectas: [
			"Bloqueando la enzima alfa-glucosidasa",
			"Aumentando la síntesis de glucógeno",
			"Reduciendo la absorción de lípidos"
		]
	},
	{
		enunciado: "Se considera diagnóstico de diabetes una glucemia plasmática en ayunas superior o igual a:",
		correcta: "126 mg/dl en dos determinaciones",
		incorrectas: [
			"100 mg/dl",
			"110 mg/dl",
			"200 mg/dl en ayunas"
		]
	},
	{
		enunciado: "La fructosamina refleja el control glucémico de las últimas:",
		correcta: "2 a 3 semanas",
		incorrectas: [
			"2 a 3 meses",
			"24 horas",
			"6 meses"
		]
	},
	{
		enunciado: "El alcohol en el paciente diabético puede provocar:",
		correcta: "Hipoglucemia tardía al inhibir la gluconeogénesis hepática",
		incorrectas: [
			"Hiperglucemia inmediata permanente",
			"Aumento de la síntesis de insulina",
			"Mejora de la visión periférica"
		]
	},
	{
		enunciado: "La acantosis nigricans (manchas oscuras en pliegues) es un signo clínico de:",
		correcta: "Resistencia a la insulina",
		incorrectas: [
			"Déficit de vitamina A",
			"Exceso de hierro plasmático",
			"Alergia a la insulina"
		]
	},
	{
		enunciado: "En la dieta por intercambios, ¿qué grupo de alimentos suele tener un valor de 1 ración por cada 10g?",
		correcta: "Farínaceos, frutas y lácteos (según tablas)",
		incorrectas: [
			"Carnes y pescados",
			"Aceites y grasas",
			"Huevos"
		]
	},
	{
		enunciado: "Los ácidos grasos trans en la dieta del diabético deben:",
		correcta: "Eliminarse o reducirse al mínimo por el riesgo cardiovascular",
		incorrectas: [
			"Aumentarse para estabilizar las membranas",
			"Sustituir a los carbohidratos en el desayuno",
			"Consumirse solo junto con insulina rápida"
		]
	},
	{
		enunciado: "La neuropatía diabética suele manifestarse inicialmente como:",
		correcta: "Parestesias y pérdida de sensibilidad en 'guante y calcetín'",
		incorrectas: [
			"Pérdida súbita de la audición",
			"Aumento de la fuerza muscular en extremidades",
			"Hipertensión arterial maligna"
		]
	},
	{
		enunciado: "La educación diabetológica tiene como objetivo principal:",
		correcta: "Fomentar el autocontrol y la autonomía del paciente",
		incorrectas: [
			"Sustituir la necesidad de visitas médicas",
			"Imponer una dieta restrictiva universal",
			"Eliminar el uso de fármacos en todos los casos"
		]
	},
	{
		enunciado: "La presencia de cuerpos cetónicos en orina con glucemia elevada indica:",
		correcta: "Déficit severo de insulina y riesgo de acidosis",
		incorrectas: [
			"Control glucémico óptimo",
			"Exceso de ingesta de proteínas",
			"Efecto normal del ejercicio intenso"
		]
	},
	{
		enunciado: "¿Cuál es la principal causa de muerte en pacientes con diabetes tipo 2?",
		correcta: "Enfermedad cardiovascular",
		incorrectas: [
			"Insuficiencia renal",
			"Cetoacidosis",
			"Infecciones respiratorias"
		]
	},
	{
		enunciado: "Los análogos de GLP-1 (liraglutida, semaglutida) destacan por:",
		correcta: "Promover la pérdida de peso y tener beneficios cardiovasculares",
		incorrectas: [
			"Provocar hipoglucemias frecuentes",
			"Aumentar el apetito de forma significativa",
			"Administrarse exclusivamente de forma oral"
		]
	},
	{
		enunciado: "El índice glucémico de un alimento disminuye cuando:",
		correcta: "Se consume junto con fibra, grasa o proteína",
		incorrectas: [
			"El alimento está muy cocido o puré",
			"Se consume de forma aislada en ayunas",
			"Se trata de un cereal refinado"
		]
	},
	{
		enunciado: "La diabetes tipo LADA es:",
		correcta: "Diabetes autoinmune latente del adulto (tipo 1 de progresión lenta)",
		incorrectas: [
			"Diabetes producida por lesiones hepáticas",
			"Diabetes gestacional recidivante",
			"Diabetes tipo 2 en niños obesos"
		]
	},
	{
		enunciado: "El objetivo de tensión arterial en diabéticos suele ser:",
		correcta: "< 130/80 mmHg",
		incorrectas: [
			"< 140/90 mmHg",
			"< 110/70 mmHg",
			"< 150/100 mmHg"
		]
	},
	{
		enunciado: "En la diabetes, el cuidado de los pies es crítico para prevenir:",
		correcta: "Úlceras y amputaciones por neuropatía y vasculopatía",
		incorrectas: [
			"Crecimiento excesivo de las uñas",
			"Dermatitis por contacto con calzado",
			"Artrosis de tobillo"
		]
	},
	{
		enunciado: "La gastroparesia diabética es una complicación que afecta a:",
		correcta: "La motilidad gástrica por daño en el nervio vago",
		incorrectas: [
			"La absorción de hierro en el colon",
			"La síntesis de ácidos biliares",
			"La secreción de saliva"
		]
	},
	{
		enunciado: "Un valor de glucemia al azar superior a 200 mg/dl junto con síntomas cardinales (poliuria, polidipsia, pérdida de peso) es:",
		correcta: "Diagnóstico directo de diabetes",
		incorrectas: [
			"Normal tras una comida copiosa",
			"Indicativo de prediabetes",
			"Error del glucómetro habitualmente"
		]
	}
];