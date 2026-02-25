'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuándo debe iniciarse la nutrición enteral en el paciente crítico si existe estabilidad hemodinámica?",
		correcta: "En las primeras 24-48 horas",
		incorrectas: [
			"Tras una semana de observación",
			"Inmediatamente antes de la extubación",
			"Solo si el paciente lo solicita"
		]
	},
	{
		enunciado: "La fase 'Ebb' o de choque tras una agresión grave se caracteriza por:",
		correcta: "Descenso del gasto metabólico, hipotermia e hipoperfusión",
		incorrectas: [
			"Hipermetabolismo extremo y fiebre",
			"Aumento de la síntesis proteica muscular",
			"Balance nitrogenado positivo"
		]
	},
	{
		enunciado: "En la fase 'Flow' o catabólica, predomina la acción de las siguientes hormonas:",
		correcta: "Catecolaminas, glucagón y cortisol",
		incorrectas: [
			"Insulina y hormona de crecimiento",
			"Estrógenos y progesterona",
			"Somatostatina y melatonina"
		]
	},
	{
		enunciado: "El objetivo proteico en el paciente crítico suele situarse en el rango de:",
		correcta: "1.2 - 2.0 g/kg/día",
		incorrectas: [
			"0.5 - 0.8 g/kg/día",
			"3.5 - 5.0 g/kg/día",
			"0.1 - 0.3 g/kg/día"
		]
	},
	{
		enunciado: "La nutrición enteral es preferible a la parenteral en el crítico porque:",
		correcta: "Mantiene la barrera intestinal y reduce la translocación bacteriana",
		incorrectas: [
			"Aporta más calorías de forma más rápida",
			"No requiere monitorización de electrolitos",
			"Es menos propensa a causar diarrea"
		]
	},
	{
		enunciado: "La sobrealimentación (hiperalimentación) en el crítico puede causar:",
		correcta: "Hipercapnia (exceso de CO₂) y dificultad para el destete del ventilador",
		incorrectas: [
			"Atrofia de las vellosidades intestinales",
			"Hipotensión severa transitoria",
			"Hipoglucemia refractaria"
		]
	},
	{
		enunciado: "¿Qué inmunonutriente se utiliza frecuentemente en pacientes quirúrgicos críticos o quemados por su papel en la mucosa?",
		correcta: "Glutamina",
		incorrectas: [
			"Vitamina K",
			"Hierro dextrano",
			"Ácido fólico"
		]
	},
	{
		enunciado: "La hiperglucemia de estrés en el paciente crítico se debe principalmente a:",
		correcta: "Aumento de la gluconeogénesis hepática y resistencia a la insulina",
		incorrectas: [
			"Agotamiento de las reservas de glucógeno",
			"Fallo de la función exocrina del páncreas",
			"Exceso de ingesta de fibra"
		]
	},
	{
		enunciado: "El gasto energético en el paciente crítico se determina de forma más precisa mediante:",
		correcta: "Calorimetría indirecta",
		incorrectas: [
			"Ecuación de Harris-Benedict sin factores de corrección",
			"Bioimpedancia eléctrica de un solo canal",
			"Peso diario y medición de pliegues"
		]
	},
	{
		enunciado: "La nutrición parenteral total (NPT) está indicada obligatoriamente si:",
		correcta: "El tracto gastrointestinal no es funcionante o existe contraindicación de enteral",
		incorrectas: [
			"El paciente tiene apetito conservado",
			"La estancia prevista es inferior a 12 horas",
			"Existe una infección urinaria leve"
		]
	},
	{
		enunciado: "¿Qué complicación metabólica es característica del síndrome de realimentación?",
		correcta: "Hipofosfatemia, hipopotasemia e hipomagnesemia",
		incorrectas: [
			"Hipernatremia grave",
			"Hipercalcemia aguda",
			"Acidosis respiratoria pura"
		]
	},
	{
		enunciado: "La presencia de residuo gástrico elevado (>500 ml) en nutrición enteral:",
		correcta: "Obliga a reevaluar al paciente y considerar procinéticos",
		incorrectas: [
			"Indica el cese inmediato y definitivo de la alimentación",
			"Es normal y no requiere ninguna acción",
			"Requiere el cambio inmediato a nutrición parenteral"
		]
	},
	{
		enunciado: "En pacientes con insuficiencia respiratoria y retención de CO₂, se suele:",
		correcta: "Reducir el aporte de hidratos de carbono y vigilar el exceso calórico",
		incorrectas: [
			"Aumentar masivamente los carbohidratos simples",
			"Eliminar totalmente las proteínas",
			"Restringir el agua a 500 ml/día"
		]
	},
	{
		enunciado: "La nutrición enteral precoz ayuda a prevenir:",
		correcta: "La úlcera de estrés y la atrofia mucosa",
		incorrectas: [
			"La formación de cataratas",
			"La hipertensión intracraneal idiopática",
			"La alopecia areata"
		]
	},
	{
		enunciado: "En la fase aguda de la enfermedad crítica, el objetivo calórico inicial suele ser:",
		correcta: "Hipocalórico (20-25 kcal/kg/día) para evitar el estrés metabólico",
		incorrectas: [
			"Hipercalórico (>45 kcal/kg/día)",
			"Normocalórico estricto desde la primera hora",
			"Ayuno completo durante los primeros 5 días"
		]
	},
	{
		enunciado: "La glutamina parenteral en pacientes críticos con fallo multiorgánico:",
		correcta: "No se recomienda de forma rutinaria según guías actuales",
		incorrectas: [
			"Es obligatoria en todos los ingresos",
			"Sustituye a la necesidad de glucosa",
			"Se administra solo por vía subcutánea"
		]
	},
	{
		enunciado: "El cociente respiratorio (CR) mayor a 1.0 en calorimetría sugiere:",
		correcta: "Sobrealimentación y lipogénesis",
		incorrectas: [
			"Ayuno prolongado y cetosis",
			"Oxidación predominante de grasas",
			"Déficit severo de oxígeno"
		]
	},
	{
		enunciado: "La administración de lípidos en nutrición parenteral central:",
		correcta: "Debe monitorizarse mediante los niveles de triglicéridos plasmáticos",
		incorrectas: [
			"Está contraindicada en todos los pacientes críticos",
			"Solo se permite si el paciente es obeso",
			"No aporta valor calórico significativo"
		]
	},
	{
		enunciado: "La vía de elección para nutrición enteral en pacientes con alto riesgo de aspiración es:",
		correcta: "Sonda post-pilórica (duodenal o yeyunal)",
		incorrectas: [
			"Sonda nasogástrica estándar",
			"Alimentación oral asistida",
			"Gastrostomía de descarga"
		]
	},
	{
		enunciado: "El balance nitrogenado negativo en el paciente crítico indica:",
		correcta: "Un estado de catabolismo proteico",
		incorrectas: [
			"Un estado de anabolismo y recuperación",
			"Equilibrio perfecto entre ingesta y gasto",
			"Exceso de hidratación"
		]
	},
	{
		enunciado: "La arginina en la inmunonutrición debe usarse con precaución en:",
		correcta: "Pacientes con sepsis grave o shock séptico",
		incorrectas: [
			"Pacientes con fracturas óseas",
			"Pacientes con cirugía programada de colon",
			"Pacientes con desnutrición leve"
		]
	},
	{
		enunciado: "La monitorización de la glucemia en el crítico debe mantenerse preferentemente en:",
		correcta: "140 - 180 mg/dl",
		incorrectas: [
			"< 80 mg/dl",
			"> 250 mg/dl",
			"70 - 90 mg/dl"
		]
	},
	{
		enunciado: "La pérdida de masa muscular en el crítico se denomina:",
		correcta: "Autocanibalismo metabólico o sarcopenia aguda",
		incorrectas: [
			"Miositis infecciosa",
			"Hipertrofia compensatoria",
			"Distrofia simpática"
		]
	},
	{
		enunciado: "El aporte de micronutrientes (vitaminas y oligoelementos):",
		correcta: "Es esencial desde el inicio del soporte nutricional",
		incorrectas: [
			"Solo es necesario tras un mes de soporte",
			"Está contraindicado por riesgo de toxicidad",
			"Se cubren totalmente con el suero salino"
		]
	},
	{
		enunciado: "En la pancreatitis aguda grave, la nutrición enteral es:",
		correcta: "Superior a la parenteral por menor tasa de complicaciones infecciosas",
		incorrectas: [
			"Contraindicada por riesgo de estimular el páncreas",
			"Igual de eficaz que el ayuno absoluto",
			"Administrada solo si hay ictericia"
		]
	},
	{
		enunciado: "La diarrea en el paciente con nutrición enteral suele deberse a:",
		correcta: "Causas multifactoriales (antibióticos, osmolaridad, velocidad)",
		incorrectas: [
			"Falta de ejercicio físico",
			"Exceso de vitamina D",
			"Posición elevada del cabecero"
		]
	},
	{
		enunciado: "La nutrición parenteral de 'tres cámaras' incluye:",
		correcta: "Glucosa, aminoácidos y lípidos",
		incorrectas: [
			"Agua, sal y potasio",
			"Vitaminas, minerales y fibra",
			"Insulina, heparina y antibióticos"
		]
	},
	{
		enunciado: "El riesgo de aspiración aumenta en pacientes con:",
		correcta: "Bajo nivel de conciencia y ausencia de reflejo tusígeno",
		incorrectas: [
			"Deambulación precoz",
			"Sedestación a 90 grados",
			"Integridad de los pares craneales"
		]
	},
	{
		enunciado: "La medición de la circunferencia de la pantorrilla en el crítico:",
		correcta: "Puede verse alterada por la presencia de edemas",
		incorrectas: [
			"Es el mejor indicador de grasa visceral",
			"No tiene ninguna utilidad clínica",
			"Mide la capacidad pulmonar"
		]
	},
	{
		enunciado: "¿Qué marcador de laboratorio es útil para valorar la respuesta al soporte nutricional?",
		correcta: "Prealbúmina (por su vida media corta)",
		incorrectas: [
			"Albúmina (por su vida media larga)",
			"Colesterol total",
			"Hemoglobina"
		]
	},
	{
		enunciado: "La 'nutrición trófica' consiste en:",
		correcta: "Aportar pequeñas cantidades de enteral para mantener el trofismo intestinal",
		incorrectas: [
			"Aportar el 100% de las necesidades calóricas por vena",
			"Dar solo agua con azúcar al paciente",
			"Utilizar fórmulas ricas en hormonas del crecimiento"
		]
	},
	{
		enunciado: "La intolerancia a la nutrición enteral se manifiesta frecuentemente por:",
		correcta: "Distensión abdominal, vómitos y aumento del residuo gástrico",
		incorrectas: [
			"Aumento de la diuresis",
			"Hipotermia",
			"Mejora del nivel de conciencia"
		]
	},
	{
		enunciado: "La embolia gaseosa es una complicación potencial de:",
		correcta: "La nutrición parenteral central",
		incorrectas: [
			"La nutrición enteral por sonda",
			"La dieta oral triturada",
			"La suplementación con batidos"
		]
	},
	{
		enunciado: "En pacientes quemados críticos, los requerimientos energéticos:",
		correcta: "Son de los más elevados debido al hipermetabolismo extremo",
		incorrectas: [
			"Son mínimos por la inactividad",
			"Se reducen para evitar el sudor",
			"Solo dependen de la edad"
		]
	},
	{
		enunciado: "Los ácidos grasos omega-3 en el soporte del crítico tienen como fin:",
		correcta: "Modular la respuesta inflamatoria",
		incorrectas: [
			"Aumentar la presión arterial",
			"Reducir la absorción de carbohidratos",
			"Causar somnolencia terapéutica"
		]
	},
	{
		enunciado: "La sonda de yeyunostomía se coloca habitualmente mediante:",
		correcta: "Cirugía o endoscopia intervencionista",
		incorrectas: [
			"Inserción ciega en la cama del paciente",
			"Vía rectal",
			"Vía subclavia"
		]
	},
	{
		enunciado: "La monitorización de la función hepática en NPT es necesaria para detectar:",
		correcta: "Colestasis asociada a la nutrición parenteral",
		incorrectas: [
			"Aparición de cálculos renales",
			"Gastritis erosiva",
			"Aumento de la capacidad de detoxificación"
		]
	},
	{
		enunciado: "En la desnutrición grave previa al ingreso, el soporte nutricional debe ser:",
		correcta: "Cauto y progresivo para evitar el síndrome de realimentación",
		incorrectas: [
			"Agresivo y masivo desde el primer minuto",
			"Inexistente hasta que el paciente se recupere solo",
			"Basado solo en la administración de suero glucosado 5%"
		]
	},
	{
		enunciado: "La vitamina B1 (tiamina) debe suplementarse en el crítico para prevenir:",
		correcta: "La encefalopatía de Wernicke, especialmente si hay realimentación",
		incorrectas: [
			"La ceguera nocturna",
			"El escorbuto",
			"La osteomalacia"
		]
	},
	{
		enunciado: "El objetivo final del soporte nutricional en el crítico es:",
		correcta: "Preservar la masa magra y la función de los órganos",
		incorrectas: [
			"Aumentar el tejido adiposo",
			"Curar la enfermedad de base por sí mismo",
			"Sustituir a la ventilación mecánica"
		]
	}
];