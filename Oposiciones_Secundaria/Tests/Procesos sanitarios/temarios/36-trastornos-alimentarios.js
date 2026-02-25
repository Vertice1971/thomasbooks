'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuál es la característica nuclear de la Anorexia Nerviosa según el DSM-5?",
		correcta: "Restricción de la ingesta, miedo intenso a ganar peso y alteración de la percepción corporal",
		incorrectas: [
			"Presencia de atracones recurrentes con conductas compensatorias",
			"Consumo compulsivo de alimentos durante la noche tras despertar del sueño"
		]
	},
	{
		enunciado: "La Bulimia Nerviosa se diferencia del Trastorno por Atracón principalmente por:",
		correcta: "La presencia de conductas compensatorias inapropiadas (vómito, laxantes, ejercicio excesivo)",
		incorrectas: [
			"La cantidad de calorías ingeridas durante el episodio de descontrol",
			"La pérdida de control sobre la ingesta durante el episodio"
		]
	},
	{
		enunciado: "¿Qué hallazgo físico es típico en pacientes con Bulimia Nerviosa debido a la provocación del vómito?",
		correcta: "Signo de Russell (callosidades en los nudillos de las manos)",
		incorrectas: [
			"Lanugo (vello fino y suave en el tronco y extremidades)",
			"Hipertrofia del ventrículo izquierdo"
		]
	},
	{
		enunciado: "En la Anorexia Nerviosa, el tipo 'restrictivo' se define por:",
		correcta: "La ausencia de atracones o purgas en los últimos 3 meses",
		incorrectas: [
			"El uso exclusivo de diuréticos para perder peso",
			"La pérdida de peso mediante ayuno absoluto sin ejercicio"
		]
	},
	{
		enunciado: "El Trastorno por Atracón se asocia frecuentemente con:",
		correcta: "Obesidad y ausencia de conductas compensatorias",
		incorrectas: [
			"Peso corporal significativamente bajo (IMC < 17)",
			"Uso crónico de ipecacuana para inducir el vómito"
		]
	},
	{
		enunciado: "¿Cuál es la complicación hidroelectrolítica más grave derivada de las purgas recurrentes?",
		correcta: "Hipopotasemia (hipocaliemia)",
		incorrectas: [
			"Hipernatremia",
			"Hipercalcemia"
		]
	},
	{
		enunciado: "La triada de la atleta femenina incluye:",
		correcta: "Baja disponibilidad energética, disfunción menstrual y baja densidad mineral ósea",
		incorrectas: [
			"Anemia ferropénica, hipertensión y bradicardia",
			"Hipervitaminosis A, vigorexia y amenorrea"
		]
	},
	{
		enunciado: "El Trastorno de Evitación/Restricción de la Ingesta de Alimentos (ARFID) se diferencia de la Anorexia en:",
		correcta: "La ausencia de distorsión de la imagen corporal o miedo a engordar",
		incorrectas: [
			"La edad de inicio, que es exclusivamente en la edad adulta",
			"La preferencia única por alimentos de origen animal"
		]
	},
	{
		enunciado: "¿Qué alteración dental es frecuente en la Bulimia Nerviosa?",
		correcta: "Erosión del esmalte dental (perimolisis) por el ácido gástrico",
		incorrectas: [
			"Fluorosis dental por exceso de colutorios",
			"Hipertrofia de las encías por déficit de vitamina C"
		]
	},
	{
		enunciado: "El Síndrome de Realimentación se caracteriza bioquímicamente por:",
		correcta: "Hipofosfatemia grave tras reiniciar la ingesta tras un ayuno prolongado",
		incorrectas: [
			"Hiperglucemia persistente e hipermagnesemia",
			"Elevación de la creatinina y urea plasmática"
		]
	},
	{
		enunciado: "En la evaluación de un TCA, ¿qué escala es el patrón oro para el cribado?",
		correcta: "EAT-26 (Eating Attitudes Test)",
		incorrectas: [
			"Test de Richmond",
			"Cuestionario SCOFF (aunque es muy usado, es de detección rápida)"
		]
	},
	{
		enunciado: "La amenorrea en la Anorexia Nerviosa es de origen:",
		correcta: "Hipotalámico (disminución de GnRH, LH y FSH)",
		incorrectas: [
			"Uterino por atrofia del endometrio",
			"Adrenal por exceso de cortisol"
		]
	},
	{
		enunciado: "El término 'Pica' se define como:",
		correcta: "Consumo persistente de sustancias no nutritivas y no alimentarias",
		incorrectas: [
			"Regurgitación repetida de alimentos para volver a masticarlos",
			"Obsesión extrema por el consumo de comida saludable"
		]
	},
	{
		enunciado: "¿Qué glándulas suelen presentar hipertrofia en pacientes con vómitos autoinducidos?",
		correcta: "Glándulas parótidas (sialoadenosis)",
		incorrectas: [
			"Glándulas suprarrenales",
			"Glándula tiroides"
		]
	},
	{
		enunciado: "La Vigorexia (dismorfia muscular) se clasifica actualmente dentro de:",
		correcta: "Trastorno dismórfico corporal",
		incorrectas: [
			"Trastornos de la conducta alimentaria específicos",
			"Trastornos de la personalidad de tipo B"
		]
	},
	{
		enunciado: "En la Anorexia Nerviosa, la bradicardia y la hipotermia son:",
		correcta: "Mecanismos adaptativos de ahorro energético ante la desnutrición",
		incorrectas: [
			"Signos de una infección sistémica subyacente",
			"Efectos secundarios de la toma de ansiolíticos"
		]
	},
	{
		enunciado: "El trastorno de rumiación consiste en:",
		correcta: "Regurgitación repetida de alimentos que pueden volver a masticarse, tragarse o escupirse",
		incorrectas: [
			"Ingesta exclusiva de alimentos líquidos durante la noche",
			"Rechazo de alimentos por sus características organolépticas"
		]
	},
	{
		enunciado: "¿Cuál es el objetivo nutricional prioritario en el tratamiento de la Anorexia Nerviosa severa?",
		correcta: "Restauración del peso y estabilización hemodinámica",
		incorrectas: [
			"Administración de megadosis de vitaminas liposolubles",
			"Eliminación de los miedos fóbicos a la comida mediante exposición"
		]
	},
	{
		enunciado: "La Ortorexia se define como:",
		correcta: "Obsesión patológica por la comida biológicamente pura y saludable",
		incorrectas: [
			"Consumo compulsivo de alimentos ricos en grasas trans",
			"Miedo a comer frente a otras personas"
		]
	},
	{
		enunciado: "El índice de masa corporal (IMC) para definir desnutrición leve en adultos con AN según la OMS es:",
		correcta: "17 - 18,49 kg/m²",
		incorrectas: [
			"15 - 16 kg/m²",
			"18,5 - 20 kg/m²"
		]
	},
	{
		enunciado: "¿Qué alteración en el ECG es más frecuente en TCA con purgas?",
		correcta: "Prolongación del intervalo QTc e inversión de la onda T",
		incorrectas: [
			"Acortamiento del intervalo PR",
			"Bloqueo de rama derecha completo"
		]
	},
	{
		enunciado: "La 'pseudopubertad' en la Anorexia Nerviosa se caracteriza bioquímicamente por:",
		correcta: "Niveles de prepúber de gonadotropinas",
		incorrectas: [
			"Elevación masiva de la progesterona",
			"Aumento de los caracteres sexuales secundarios"
		]
	},
	{
		enunciado: "El tratamiento de elección en la Bulimia Nerviosa incluye:",
		correcta: "Terapia cognitivo-conductual y, en ocasiones, Fluoxetina",
		incorrectas: [
			"Dieta restrictiva de 1000 kcal y benzodiacepinas",
			"Ingreso hospitalario obligatorio en todos los casos"
		]
	},
	{
		enunciado: "¿Qué factor de riesgo sociocultural tiene mayor peso en el desarrollo de un TCA?",
		correcta: "Internalización del ideal de delgadez y presión estética",
		incorrectas: [
			"Nivel socioeconómico extremadamente bajo",
			"Vivir en áreas geográficas con clima frío"
		]
	},
	{
		enunciado: "En la Anorexia Nerviosa, la piel suele aparecer amarillenta debido a:",
		correcta: "Hipercarotenemia por alteración en el metabolismo de la vitamina A",
		incorrectas: [
			"Ictericia por fallo hepático fulminante",
			"Exceso de consumo de suplementos de hierro"
		]
	},
	{
		enunciado: "La osteopenia en TCA se debe fundamentalmente a:",
		correcta: "Hipoestrogenismo y elevación de los niveles de cortisol",
		incorrectas: [
			"Exceso de ejercicio aeróbico únicamente",
			"Consumo excesivo de fibra que impide la absorción de calcio"
		]
	},
	{
		enunciado: "El término 'Anorexia' es técnicamente un nombre inapropiado porque:",
		correcta: "El hambre suele estar presente, lo que hay es una negación a comer",
		incorrectas: [
			"Define solo la pérdida de peso y no el estado mental",
			"Solo ocurre en mujeres jóvenes"
		]
	},
	{
		enunciado: "¿Qué es la Potomanía en el contexto de un TCA?",
		correcta: "Ingesta compulsiva de grandes cantidades de agua para saciarse o falsear el peso",
		incorrectas: [
			"Adicción a las bebidas alcohólicas de alta graduación",
			"Miedo irracional a los líquidos"
		]
	},
	{
		enunciado: "El curso clínico de la Bulimia Nerviosa suele ser:",
		correcta: "Crónico o intermitente, con periodos de remisión y recaída",
		incorrectas: [
			"Siempre agudo y de resolución rápida tras 2 semanas",
			"Fatal en el 50% de los casos en el primer año"
		]
	},
	{
		enunciado: "En pacientes con purgas por laxantes, es común encontrar:",
		correcta: "Acidosis metabólica o alcalosis dependiendo del tipo de purga",
		incorrectas: [
			"Aumento del peristaltismo de forma permanente",
			"Hipervitaminosis del grupo B"
		]
	},
	{
		enunciado: "La percepción de la imagen corporal en la AN se evalúa mediante:",
		correcta: "Técnicas de siluetas o cuestionarios como el BSQ",
		incorrectas: [
			"Resonancia magnética funcional exclusivamente",
			"Test de agudeza visual"
		]
	},
	{
		enunciado: "El 'atracón' se define por dos elementos:",
		correcta: "Ingesta de gran cantidad de comida en poco tiempo y sensación de pérdida de control",
		incorrectas: [
			"Comer rápido y masticar mucho los alimentos",
			"Ingerir alimentos solo de noche y con mucha sal"
		]
	},
	{
		enunciado: "¿Cuál es el riesgo principal de la ipecacuana en la Bulimia?",
		correcta: "Cardiotoxicidad irreversible",
		incorrectas: [
			"Tiroiditis autoinmune",
			"Anosmia persistente"
		]
	},
	{
		enunciado: "El Síndrome de Pequeño Comedor (en niños) se asocia a:",
		correcta: "Escaso interés por la comida y saciedad rápida",
		incorrectas: [
			"Atracones nocturnos de dulces",
			"Obsesión por el recuento de calorías"
		]
	},
	{
		enunciado: "En la AN grave, el recuento leucocitario suele mostrar:",
		correcta: "Leucopenia con linfocitosis relativa",
		incorrectas: [
			"Leucocitosis con neutrofilia",
			"Eosinofilia marcada"
		]
	},
	{
		enunciado: "La Pregorexia se refiere a:",
		correcta: "Conductas de restricción alimentaria durante el embarazo para no ganar peso",
		incorrectas: [
			"Anorexia en la edad preescolar",
			"Fobia a los alimentos antes de un examen"
		]
	},
	{
		enunciado: "El tratamiento dietético en la bulimia busca:",
		correcta: "Regularizar el patrón de comidas y evitar periodos largos de ayuno",
		incorrectas: [
			"Restringir los hidratos de carbono para evitar picos de insulina",
			"Prescribir dietas hiperproteicas exclusivamente"
		]
	},
	{
		enunciado: "La mortalidad en la Anorexia Nerviosa se debe principalmente a:",
		correcta: "Complicaciones cardíacas (arritmias) y suicidio",
		incorrectas: [
			"Infecciones oportunistas por VIH",
			"Obstrucción intestinal por bezoares"
		]
	},
	{
		enunciado: "El 'peso meta' en el tratamiento de la AN suele situarse en un IMC de:",
		correcta: "19 - 20 kg/m²",
		incorrectas: [
			"15 kg/m²",
			"25 kg/m²"
		]
	},
	{
		enunciado: "La comorbilidad más frecuente en los TCA es con:",
		correcta: "Trastornos de ansiedad y depresión",
		incorrectas: [
			"Esquizofrenia paranoide",
			"Trastorno bipolar tipo I"
		]
	}
];