'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuál es la causa más frecuente de malabsorción por patología de la mucosa intestinal en países desarrollados?",
		correcta: "Enfermedad celíaca",
		incorrectas: [
			"Esprúe tropical",
			"Enfermedad de Whipple"
		]
	},
	{
		enunciado: "La enfermedad celíaca se define como una intolerancia permanente a:",
		correcta: "Las prolaminas del gluten (gliadina, aveina, secalina y hordeína)",
		incorrectas: [
			"La lactosa y otros azúcares de cadena corta",
			"Las grasas saturadas de origen animal"
		]
	},
	{
		enunciado: "¿Qué marcador serológico es el más sensible y específico para el diagnóstico inicial de la enfermedad celíaca?",
		correcta: "Anticuerpos antitransglutaminasa tisular IgA",
		incorrectas: [
			"Anticuerpos antigliadina IgG",
			"Anticuerpos anticélula parietal"
		]
	},
	{
		enunciado: "La clasificación de Marsh se utiliza para estadificar:",
		correcta: "Las lesiones histopatológicas de la mucosa duodenal en la celiaquía",
		incorrectas: [
			"El grado de estenosis en la enfermedad de Crohn",
			"La actividad enzimática de la lactasa en el borde en cepillo"
		]
	},
	{
		enunciado: "La esteatorrea, signo cardinal de malabsorción, se define como:",
		correcta: "Excreción excesiva de grasa en heces (> 7 g/24h)",
		incorrectas: [
			"Presencia de moco y sangre en las deposiciones",
			"Aumento del número de deposiciones líquidas sin restos grasos"
		]
	},
	{
		enunciado: "¿Qué déficit vitamínico es responsable de la anemia megaloblástica en la malabsorción ileal distal?",
		correcta: "Vitamina B12",
		incorrectas: [
			"Vitamina C",
			"Vitamina K"
		]
	},
	{
		enunciado: "El test de hidrógeno espirado se utiliza habitualmente para el diagnóstico de:",
		correcta: "Intolerancia a la lactosa y sobrecrecimiento bacteriano (SIBO)",
		incorrectas: [
			"Insuficiencia pancreática exocrina",
			"Déficit de factor intrínseco"
		]
	},
	{
		enunciado: "La dermatitis herpetiforme es una manifestación extraintestinal patognomónica de:",
		correcta: "Enfermedad celíaca",
		incorrectas: [
			"Enfermedad de Crohn",
			"Colitis ulcerosa"
		]
	},
	{
		enunciado: "¿Cuál es el tratamiento fundamental del síndrome de malabsorción por insuficiencia pancreática exocrina?",
		correcta: "Suplementación con enzimas pancreáticas (lipasa, amilasa y proteasa)",
		incorrectas: [
			"Dieta exenta de gluten de por vida",
			"Administración de antibióticos de amplio espectro"
		]
	},
	{
		enunciado: "El test de Schilling (actualmente en desuso clínico) evaluaba la absorción de:",
		correcta: "Vitamina B12",
		incorrectas: [
			"Hierro ferroso",
			"Ácidos biliares"
		]
	},
	{
		enunciado: "En el síndrome del intestino corto, la malabsorción depende principalmente de:",
		correcta: "La longitud y el tramo de intestino delgado resecado",
		incorrectas: [
			"La presencia o ausencia de la vesícula biliar",
			"El consumo de probióticos tras la cirugía"
		]
	},
	{
		enunciado: "La enfermedad de Whipple es una patología sistémica causada por:",
		correcta: "La bacteria Tropheryma whipplei",
		incorrectas: [
			"Un hongo oportunista del género Candida",
			"Un defecto genético en el transporte de aminoácidos"
		]
	},
	{
		enunciado: "¿Qué hallazgo es característico en la biopsia intestinal de la enfermedad de Whipple?",
		correcta: "Macrófagos con inclusiones PAS positivas en la lámina propia",
		incorrectas: [
			"Atrofia vellositaria con hiperplasia de criptas",
			"Presencia de granulomas no caseificantes"
		]
	},
	{
		enunciado: "La malabsorción de sales biliares por afectación ileal provoca:",
		correcta: "Diarrea colerética y malabsorción de grasas",
		incorrectas: [
			"Anemia ferropénica refractaria",
			"Estreñimiento crónico por falta de lubricación"
		]
	},
	{
		enunciado: "El signo de la 'huella del pulgar' en radiología intestinal puede sugerir:",
		correcta: "Isquemia intestinal con edema de la mucosa",
		incorrectas: [
			"Presencia de divertículos de Meckel",
			"Enfermedad celíaca no tratada"
		]
	},
	{
		enunciado: "La intolerancia secundaria a la lactosa suele deberse a:",
		correcta: "Daño en la mucosa intestinal (infecciones, celiaquía) que barre las enzimas",
		incorrectas: [
			"Déficit genético de tipo recesivo",
			"Exceso de producción de moco gástrico"
		]
	},
	{
		enunciado: "En la abetalipoproteinemia, el defecto de absorción reside en:",
		correcta: "La formación y exportación de quilomicrones desde el enterocito",
		incorrectas: [
			"La digestión intraluminal de los triglicéridos",
			"La hidrólisis de los péptidos en el borde en cepillo"
		]
	},
	{
		enunciado: "La prueba de D-xilosa se utiliza para valorar:",
		correcta: "La integridad funcional de la mucosa del intestino delgado proximal",
		incorrectas: [
			"La función proteolítica del páncreas",
			"La capacidad de vaciamiento gástrico"
		]
	},
	{
		enunciado: "¿Cuál es la complicación neoplásica más grave de la enfermedad celíaca no tratada?",
		correcta: "Linfoma de células T asociado a enteropatía",
		incorrectas: [
			"Adenocarcinoma de recto",
			"Tumor de GIST gástrico"
		]
	},
	{
		enunciado: "El sobrecrecimiento bacteriano (SIBO) produce malabsorción de grasas porque:",
		correcta: "Las bacterias desconjugan las sales biliares",
		incorrectas: [
			"Las bacterias consumen toda la lipasa pancreática",
			"Se bloquea físicamente la entrada al conducto biliar"
		]
	},
	{
		enunciado: "Los ácidos grasos de cadena media (MCT) son útiles en malabsorción porque:",
		correcta: "Se absorben directamente al sistema portal sin necesidad de micelas ni bilis",
		incorrectas: [
			"Estimulan la regeneración de las vellosidades intestinales",
			"Tienen un alto contenido en vitamina B12"
		]
	},
	{
		enunciado: "La presencia de 'heces flotantes', fétidas y aceitosas es indicativa de:",
		correcta: "Malabsorción de lípidos",
		incorrectas: [
			"Malabsorción exclusiva de carbohidratos",
			"Déficit de absorción de hierro"
		]
	},
	{
		enunciado: "¿Qué vitamina requiere del factor intrínseco gástrico para su absorción?",
		correcta: "Vitamina B12 (cobalamina)",
		incorrectas: [
			"Vitamina A (retinol)",
			"Ácido fólico"
		]
	},
	{
		enunciado: "En el síndrome de Zollinger-Ellison, la malabsorción ocurre por:",
		correcta: "Inactivación de enzimas pancreáticas debido al pH extremadamente ácido",
		incorrectas: [
			"Destrucción autoinmune de las vellosidades",
			"Infección bacteriana por Helicobacter pylori"
		]
	},
	{
		enunciado: "La linfangiectasia intestinal se caracteriza por:",
		correcta: "Obstrucción del drenaje linfático y pérdida de proteínas (enteropatía pierde-proteínas)",
		incorrectas: [
			"Aumento de la absorción de vitaminas liposolubles",
			"Hipertrofia de las vellosidades intestinales"
		]
	},
	{
		enunciado: "El déficit selectivo de IgA es frecuente en pacientes con:",
		correcta: "Enfermedad celíaca",
		incorrectas: [
			"Fibrosis quística",
			"Hepatitis alcohólica"
		]
	},
	{
		enunciado: "La prueba de Van de Kamer se considera el patrón oro para:",
		correcta: "La cuantificación de grasa en heces de 72 horas",
		incorrectas: [
			"La detección de sangre oculta en heces",
			"El estudio de parásitos intestinales"
		]
	},
	{
		enunciado: "La principal zona de absorción del hierro es:",
		correcta: "Duodeno y yeyuno proximal",
		incorrectas: [
			"Íleon distal",
			"Colon descendente"
		]
	},
	{
		enunciado: "¿Qué nutriente se ve afectado en la malabsorción de la enfermedad de Crohn ileal?",
		correcta: "Sales biliares y Vitamina B12",
		incorrectas: [
			"Calcio y Vitamina D únicamente",
			"Glucosa y fructosa"
		]
	},
	{
		enunciado: "La hipocalcemia en la malabsorción se debe a:",
		correcta: "Déficit de Vitamina D y formación de jabones cálcicos con ácidos grasos no absorbidos",
		incorrectas: [
			"Exceso de absorción de fósforo",
			"Inhibición de la hormona paratiroidea por el gluten"
		]
	},
	{
		enunciado: "En la enfermedad celíaca, los genes HLA asociados en >95% de casos son:",
		correcta: "DQ2 y DQ8",
		incorrectas: [
			"B27",
			"DR3 y DR4"
		]
	},
	{
		enunciado: "La deficiencia de lactasa es un ejemplo de malabsorción de tipo:",
		correcta: "Déficit enzimático en el borde en cepillo",
		incorrectas: [
			"Fallo en la fase luminal de la digestión",
			"Alteración del transporte linfático"
		]
	},
	{
		enunciado: "El esprúe tropical responde habitualmente al tratamiento con:",
		correcta: "Antibióticos (tetraciclinas) y ácido fólico",
		incorrectas: [
			"Dieta sin gluten exclusivamente",
			"Corticoides a dosis altas"
		]
	},
	{
		enunciado: "La presencia de vacuolas lipídicas dentro de los enterocitos tras la ingesta sugiere:",
		correcta: "Abetalipoproteinemia",
		incorrectas: [
			"Insuficiencia biliar",
			"Pancreatitis crónica"
		]
	},
	{
		enunciado: "¿Cuál es el riesgo de administrar ácido fólico en un paciente con malabsorción de B12 no diagnosticada?",
		correcta: "Corrección de la anemia pero progresión de los daños neurológicos",
		incorrectas: [
			"Inducción de una crisis hemolítica aguda",
			"Bloqueo total de la absorción de hierro"
		]
	},
	{
		enunciado: "La elastasa fecal disminuida es un marcador muy sensible de:",
		correcta: "Insuficiencia pancreática exocrina",
		incorrectas: [
			"Celiaquía refractaria",
			"Infección por Giardia lamblia"
		]
	},
	{
		enunciado: "En un paciente con esteatorrea, una prueba de D-xilosa normal sugiere:",
		correcta: "Origen pancreático de la malabsorción (mucosa intacta)",
		incorrectas: [
			"Enfermedad celíaca grave",
			"Sobrecrecimiento bacteriano masivo"
		]
	},
	{
		enunciado: "La resección de la válvula ileocecal en el intestino corto favorece:",
		correcta: "El sobrecrecimiento bacteriano desde el colon al intestino delgado",
		incorrectas: [
			"La absorción de agua y electrolitos",
			"La reducción de la motilidad intestinal"
		]
	},
	{
		enunciado: "La acrodermatitis enteropática es un trastorno de malabsorción de:",
		correcta: "Zinc",
		incorrectas: [
			"Magnesio",
			"Cobre"
		]
	},
	{
		enunciado: "El síntoma clínico más común de la malabsorción de carbohidratos es:",
		correcta: "Distensión abdominal, flatulencia y diarrea osmótica",
		incorrectas: [
			"Dolor óseo y fracturas patológicas",
			"Púrpuras y equimosis cutáneas"
		]
	}
];