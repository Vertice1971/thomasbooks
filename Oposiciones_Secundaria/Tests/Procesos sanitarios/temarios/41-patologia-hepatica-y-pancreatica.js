'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuál es el marcador bioquímico más específico de colestasis?",
		correcta: "Gama-glutamil transferasa (GGT) y Fosfatasa alcalina (FA)",
		incorrectas: [
			"Alanina aminotransferasa (ALT/GPT)",
			"Amilasa pancreática",
			"Albúmina sérica"
		]
	},
	{
		enunciado: "En la cirrosis hepática, la presencia de ascitis se debe principalmente a:",
		correcta: "Hipertensión portal e hipoalbuminemia",
		incorrectas: [
			"Aumento de la excreción renal de sodio",
			"Disminución de la hormona antidiurética",
			"Infección bacteriana crónica por H. pylori"
		]
	},
	{
		enunciado: "La encefalopatía hepática se asocia frecuentemente con niveles elevados de:",
		correcta: "Amoniaco (NH3)",
		incorrectas: [
			"Bilirrubina directa",
			"Glucosa plasmática",
			"Creatinina cinasa"
		]
	},
	{
		enunciado: "El tratamiento dietético de la pancreatitis aguda en fase de recuperación prioriza:",
		correcta: "Restricción de grasas y fraccionamiento de las tomas",
		incorrectas: [
			"Dieta hiperlipídica para estimular la bilis",
			"Consumo elevado de fibra insoluble",
			"Ayuno absoluto prolongado superior a 15 días"
		]
	},
	{
		enunciado: "¿Qué tipo de cálculos biliares son los más frecuentes en el mundo occidental?",
		correcta: "Cálculos de colesterol",
		incorrectas: [
			"Cálculos pigmentarios negros",
			"Cálculos de fosfato cálcico",
			"Cálculos de cistina"
		]
	},
	{
		enunciado: "La dieta en la colelitiasis sintomática (cólico biliar) debe ser:",
		correcta: "Baja en grasas (hipocolecistoquinética)",
		incorrectas: [
			"Rica en ácidos grasos saturados",
			"Basada en el consumo de lácteos enteros",
			"Hiperproteica de origen cárnico rojo"
		]
	},
	{
		enunciado: "El principal factor de riesgo nutricional para el desarrollo de hígado graso no alcohólico (NAFLD) es:",
		correcta: "Obesidad abdominal y resistencia a la insulina",
		incorrectas: [
			"Consumo excesivo de proteínas magras",
			"Déficit crónico de vitamina C",
			"Ingesta elevada de fibra soluble"
		]
	},
	{
		enunciado: "En la pancreatitis crónica, la malabsorción de grasas ocurre cuando la secreción de lipasa es inferior al:",
		correcta: "10% de su capacidad normal",
		incorrectas: [
			"50% de su capacidad normal",
			"90% de su capacidad normal",
			"5% de su capacidad normal"
		]
	},
	{
		enunciado: "La vitamina cuya absorción se ve más comprometida en la colestasis crónica es:",
		correcta: "Vitamina K",
		incorrectas: [
			"Vitamina B12",
			"Vitamina C",
			"Vitamina B1"
		]
	},
	{
		enunciado: "¿Qué complicación nutricional es típica de la cirrosis avanzada?",
		correcta: "Desnutrición calórico-proteica (sarcopenia)",
		incorrectas: [
			"Exceso de vitamina A",
			"Hiperglucemia persistente por exceso de glucógeno",
			"Aumento de la masa ósea"
		]
	},
	{
		enunciado: "La bilirrubina indirecta o no conjugada aumenta principalmente por:",
		correcta: "Hemólisis o defectos en la conjugación hepática",
		incorrectas: [
			"Obstrucción de la vía biliar principal",
			"Carcinoma de cabeza de páncreas",
			"Colecistitis aguda litiásica"
		]
	},
	{
		enunciado: "La secreción exocrina del páncreas está estimulada principalmente por:",
		correcta: "Secretina y colecistoquinina (CCK)",
		incorrectas: [
			"Insulina y glucagón",
			"Gastrina y pepsina",
			"Somatostatina y leptina"
		]
	},
	{
		enunciado: "En la insuficiencia hepática grave, se recomienda una dieta con proteínas de:",
		correcta: "Alto valor biológico y predominio de aminoácidos ramificados",
		incorrectas: [
			"Bajo valor biológico ricas en aminoácidos aromáticos",
			"Origen exclusivamente sintético",
			"Alta concentración de gelatina"
		]
	},
	{
		enunciado: "La esteatosis hepática macrovascular se caracteriza por:",
		correcta: "Una única gota de grasa que desplaza el núcleo a la periferia",
		incorrectas: [
			"Múltiples gotas pequeñas que no desplazan el núcleo",
			"Presencia de hierro dentro de los lisosomas",
			"Acúmulo de glucógeno en el citoplasma"
		]
	},
	{
		enunciado: "¿Cuál es la causa más común de pancreatitis crónica en adultos?",
		correcta: "Consumo excesivo de alcohol",
		incorrectas: [
			"Hipertrigliceridemia leve",
			"Infección por virus de la hepatitis A",
			"Consumo de dietas ricas en selenio"
		]
	},
	{
		enunciado: "El signo de Grey-Turner en la pancreatitis aguda indica:",
		correcta: "Equimosis en los flancos por hemorragia retroperitoneal",
		incorrectas: [
			"Dolor a la descompresión en el punto de McBurney",
			"Coloración amarillenta de las conjuntivas",
			"Presencia de líquido libre en la cavidad abdominal"
		]
	},
	{
		enunciado: "Las sales biliares son esenciales para:",
		correcta: "La emulsión de las grasas y formación de micelas",
		incorrectas: [
			"La digestión de los carbohidratos complejos",
			"La absorción de la vitamina B12",
			"La síntesis de albúmina"
		]
	},
	{
		enunciado: "La colangitis esclerosante primaria se asocia frecuentemente a:",
		correcta: "Colitis ulcerosa",
		incorrectas: [
			"Enfermedad celíaca",
			"Pancreatitis autoinmune tipo 2",
			"Cirrosis biliar primaria"
		]
	},
	{
		enunciado: "¿Qué enzima pancreática se eleva más precozmente en la pancreatitis aguda?",
		correcta: "Amilasa",
		incorrectas: [
			"Lipasa (es más específica)",
			"Tripsina",
			"Quimiotripsina"
		]
	},
	{
		enunciado: "El síntoma clínico más frecuente de la colelitiasis es:",
		correcta: "Dolor en hipocondrio derecho irradiado a escápula",
		incorrectas: [
			"Diarrea osmótica",
			"Fiebre elevada con escalofríos",
			"Heces acólicas permanentes"
		]
	},
	{
		enunciado: "La hipertensión portal puede dar lugar a la formación de:",
		correcta: "Varices esofágicas",
		incorrectas: [
			"Divertículos de colon",
			"Pólipos gástricos",
			"Úlceras duodenales"
		]
	},
	{
		enunciado: "En la cirrosis compensada, el aporte calórico recomendado es de:",
		correcta: "25-35 kcal/kg de peso seco/día",
		incorrectas: [
			"10-15 kcal/kg de peso seco/día",
			"50-60 kcal/kg de peso seco/día",
			"20 kcal/kg de peso total/día"
		]
	},
	{
		enunciado: "La restricción de sodio en el paciente cirrótico con ascitis debe ser de:",
		correcta: "1500-2000 mg de sodio/día",
		incorrectas: [
			"Sin restricción",
			"Menos de 500 mg de sodio/día",
			"Solo se restringe el potasio"
		]
	},
	{
		enunciado: "¿Qué complicación de la cirrosis requiere el uso de lactulosa?",
		correcta: "Encefalopatía hepática",
		incorrectas: [
			"Peritonitis bacteriana espontánea",
			"Síndrome hepatorrenal",
			"Hemorragia por varices"
		]
	},
	{
		enunciado: "La prueba de la secretina evalúa:",
		correcta: "La capacidad del páncreas para secretar bicarbonato",
		incorrectas: [
			"La síntesis de insulina basal",
			"La absorción de triglicéridos",
			"La contractilidad de la vesícula biliar"
		]
	},
	{
		enunciado: "La tríada de Charcot (dolor, ictericia y fiebre) es típica de:",
		correcta: "Colangitis aguda",
		incorrectas: [
			"Pancreatitis aguda",
			"Colecistitis crónica",
			"Hepatitis fulminante"
		]
	},
	{
		enunciado: "El hepatocarcinoma tiene como marcador tumoral más utilizado:",
		correcta: "Alfafetoproteína (AFP)",
		incorrectas: [
			"Antígeno carcinoembrionario (CEA)",
			"CA 19.9",
			"PSA"
		]
	},
	{
		enunciado: "La cirrosis biliar primaria afecta principalmente a:",
		correcta: "Conductos biliares intrahepáticos",
		incorrectas: [
			"Conducto colédoco",
			"Conducto cístico",
			"Conductos pancreáticos"
		]
	},
	{
		enunciado: "En la pancreatitis crónica, la administración de enzimas debe hacerse:",
		correcta: "Durante las comidas",
		incorrectas: [
			"En ayunas exclusivamente",
			"Antes de dormir",
			"Solo si hay dolor abdominal"
		]
	},
	{
		enunciado: "El síndrome de Budd-Chiari se debe a:",
		correcta: "Obstrucción del flujo venoso hepático",
		incorrectas: [
			"Obstrucción de la arteria hepática",
			"Atresia biliar congénita",
			"Infección por parásitos del género Fasciola"
		]
	},
	{
		enunciado: "La hemocromatosis es una enfermedad por depósito de:",
		correcta: "Hierro",
		incorrectas: [
			"Cobre",
			"Glucógeno",
			"Lípidos"
		]
	},
	{
		enunciado: "La enfermedad de Wilson se caracteriza por la acumulación de:",
		correcta: "Cobre en hígado y cerebro",
		incorrectas: [
			"Hierro en el páncreas",
			"Calcio en las arterias",
			"Magnesio en los riñones"
		]
	},
	{
		enunciado: "El anillo de Kayser-Fleischer es patognomónico de:",
		correcta: "Enfermedad de Wilson",
		incorrectas: [
			"Hemocromatosis hereditaria",
			"Cirrosis alcohólica",
			"Hepatitis autoinmune"
		]
	},
	{
		enunciado: "¿Cuál es el tratamiento definitivo de la cirrosis hepática terminal?",
		correcta: "Trasplante hepático",
		incorrectas: [
			"Derivación portosistémica intrahepática transyugular (TIPS)",
			"Intervención nutricional intensiva",
			"Tratamiento antibiótico crónico"
		]
	},
	{
		enunciado: "La bilis se almacena y concentra en:",
		correcta: "La vesícula biliar",
		incorrectas: [
			"El hígado",
			"El duodeno",
			"El bazo"
		]
	},
	{
		enunciado: "La ictericia se hace clínicamente evidente cuando la bilirrubina total supera:",
		correcta: "2.0 - 2.5 mg/dl",
		incorrectas: [
			"1.0 mg/dl",
			"5.0 mg/dl",
			"0.5 mg/dl"
		]
	},
	{
		enunciado: "El páncreas anular es una malformación congénita que puede causar:",
		correcta: "Obstrucción duodenal",
		incorrectas: [
			"Cirrosis hepática",
			"Insuficiencia suprarrenal",
			"Esplenomegalia"
		]
	},
	{
		enunciado: "La complicación más frecuente de la CPRE es:",
		correcta: "Pancreatitis post-CPRE",
		incorrectas: [
			"Perforación gástrica",
			"Hepatitis viral",
			"Insuficiencia renal aguda"
		]
	},
	{
		enunciado: "En el fallo hepático agudo, la hipoglucemia se debe a:",
		correcta: "Agotamiento del glucógeno y fallo de la gluconeogénesis",
		incorrectas: [
			"Hiperinsulinismo secundario",
			"Malabsorción de carbohidratos",
			"Exceso de consumo de glucosa por bacterias"
		]
	},
	{
		enunciado: "La peritonitis bacteriana espontánea se diagnostica mediante:",
		correcta: "Paracentesis y recuento de neutrófilos en líquido ascítico (>250/mm³)",
		incorrectas: [
			"Ecografía abdominal únicamente",
			"Hemocultivos seriados",
			"Biopsia hepática"
		]
	}
];