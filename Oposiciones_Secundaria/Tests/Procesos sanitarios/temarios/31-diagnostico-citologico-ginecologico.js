'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿En qué consiste la triple toma de Wied para el estudio citológico cérvico-vaginal?",
		correcta: "Toma de fondo de saco vaginal posterior, exocérvix y endocérvix",
		incorrectas: [
			"Toma de introito, paredes vaginales y cuello uterino",
			"Toma de mucosa yugal, mamas y conducto endocervical"
		]
	},
	{
		enunciado: "Para la fijación de extensiones citológicas en la técnica de Papanicolaou, se utiliza habitualmente:",
		correcta: "Alcohol etílico de 96º o alcohol-éter",
		incorrectas: [
			"Formol tamponado al 10%",
			"Glutaraldehído al 2%"
		]
	},
	{
		enunciado: "¿Cuál es la principal ventaja de la citología en medio líquido frente a la convencional?",
		correcta: "Elimina elementos que dificultan la visión como sangre o moco y permite técnicas auxiliares",
		incorrectas: [
			"Es una técnica más económica y requiere menos equipamiento",
			"Permite mantener la arquitectura tisular para el estudio histológico"
		]
	},
	{
		enunciado: "El cepillado endocervical mediante 'citobrush' está especialmente indicado para la obtención de:",
		correcta: "Células de la zona de transformación y canal endocervical",
		incorrectas: [
			"Células escamosas maduras del epitelio vaginal superficial",
			"Muestras microbiológicas del exudado vulvar"
		]
	},
	{
		enunciado: "En la tinción de Papanicolaou, el colorante encargado de teñir los núcleos es:",
		correcta: "Hematoxilina de Harris",
		incorrectas: [
			"Orange G (OG-6)",
			"Eosina-Alcohol (EA-50)"
		]
	},
	{
		enunciado: "La técnica de PAAF (Punción Aspiración con Aguja Fina) en mama permite:",
		correcta: "La obtención de células y material proteináceo para estudio citológico",
		incorrectas: [
			"La extracción de un cilindro de tejido para estudio histológico",
			"El vaciado terapéutico de tumores sólidos malignos"
		]
	},
	{
		enunciado: "¿Qué coloración se utiliza frecuentemente en la PAAF para el diagnóstico rápido (en el acto de la punción)?",
		correcta: "Diff-Quik (tinción tipo Romanowsky rápida)",
		incorrectas: [
			"PAS (Periodic Acid-Schiff)",
			"Tinción de Rojo Congo"
		]
	},
	{
		enunciado: "Para que una muestra de PAAF de mama sea considerada adecuada, debe contener al menos:",
		correcta: "6 grupos de células epiteliales bien conservadas",
		incorrectas: [
			"Abundantes macrófagos cargados de hemosiderina",
			"Únicamente tejido adiposo y material acelular"
		]
	},
	{
		enunciado: "La impronta citológica es una técnica que consiste en:",
		correcta: "Apoyar suavemente el tejido fresco sobre un portaobjetos",
		incorrectas: [
			"Centrifugar un líquido orgánico a altas revoluciones",
			"Realizar un raspado profundo de una lesión cutánea"
		]
	},
	{
		enunciado: "En el procesamiento de muestras líquidas (líquido de quiste mamario), el paso previo a la extensión es:",
		correcta: "Centrifugación o citocentrifugación",
		incorrectas: [
			"Inclusión en parafina de la muestra total",
			"Congelación rápida en nitrógeno líquido"
		]
	},
	{
		enunciado: "El fijador de aerosol (spray) debe aplicarse a una distancia aproximada de:",
		correcta: "25-30 cm de la extensión",
		incorrectas: [
			"2-5 cm para asegurar la saturación",
			"1 metro para evitar el efecto mecánico"
		]
	},
	{
		enunciado: "La fase de rehidratación en la coloración de Papanicolaou se realiza mediante:",
		correcta: "Batería de alcoholes en concentraciones decrecientes",
		incorrectas: [
			"Sumergir el porta directamente en agua destilada hirviendo",
			"Uso exclusivo de xileno y bálsamo de Canadá"
		]
	},
	{
		enunciado: "¿Qué componente de la tinción de Papanicolaou permite diferenciar los distintos grados de maduración citoplasmática?",
		correcta: "EA-50 (Eosina, Verde Luz y Pardo Bismarck)",
		incorrectas: [
			"Hematoxilina de Mayer",
			"Fucsina ácida"
		]
	},
	{
		enunciado: "La toma citológica de la zona de transformación es crítica porque:",
		correcta: "Es el lugar donde se originan la mayoría de las lesiones precursoras de cáncer de cérvix",
		incorrectas: [
			"Es la única zona donde se pueden identificar infecciones por Candida",
			"Presenta el menor número de leucocitos de todo el tracto genital"
		]
	},
	{
		enunciado: "En la PAAF de mama, el uso de agujas de calibre fino (23G-25G) tiene como objetivo:",
		correcta: "Minimizar el traumatismo y evitar la contaminación hemática de la muestra",
		incorrectas: [
			"Permitir la aspiración de fragmentos de tejido conectivo",
			"Facilitar la inyección de contraste dentro del nódulo"
		]
	},
	{
		enunciado: "Un material 'acelular' en una PAAF de nódulo sólido mamario se informa como:",
		correcta: "Muestra insuficiente o no diagnóstica (C1)",
		incorrectas: [
			"Muestra compatible con benignidad (C2)",
			"Muestra sospechosa de malignidad (C4)"
		]
	},
	{
		enunciado: "La técnica de 'frotis en espejo' se utiliza para:",
		correcta: "Repartir la muestra entre dos portaobjetos de forma uniforme",
		incorrectas: [
			"Fijar la muestra por ambas caras del cristal",
			"Observar la muestra con luz polarizada"
		]
	},
	{
		enunciado: "La citología de descarga por el pezón está indicada ante la presencia de:",
		correcta: "Telorrea espontánea, especialmente si es hemática o serosa",
		incorrectas: [
			"Mastalgia cíclica sin nódulo palpable",
			"Presencia de estrías cutáneas en la mama"
		]
	},
	{
		enunciado: "¿Cuál es el tiempo mínimo de fijación recomendado en alcohol de 96º para una citología ginecológica?",
		correcta: "15 a 30 minutos",
		incorrectas: [
			"24 horas obligatorias",
			"Menos de 30 segundos"
		]
	},
	{
		enunciado: "El sistema de clasificación Bethesda 2014 es el estándar para informar sobre:",
		correcta: "Citopatología cervical",
		incorrectas: [
			"Citopatología de glándula tiroides",
			"Grado de diferenciación del cáncer de mama"
		]
	},
	{
		enunciado: "En la citología en medio líquido, el proceso de 'dispersión' sirve para:",
		correcta: "Homogeneizar la muestra y disgregar los cúmulos de moco",
		incorrectas: [
			"Destruir las células neoplásicas para estudiar su ADN",
			"Añadir colorantes vitales antes del envío al laboratorio"
		]
	},
	{
		enunciado: "La toma de la pared vaginal lateral se utiliza principalmente para:",
		correcta: "Evaluación del estado hormonal (índices de maduración)",
		incorrectas: [
			"Detección de adenocarcinoma de endometrio",
			"Diagnóstico de herpes simple tipo II"
		]
	},
	{
		enunciado: "Un artefacto por desecación al aire en la técnica de Papanicolaou provoca:",
		correcta: "Aumento del tamaño nuclear y pérdida de detalle de la cromatina",
		incorrectas: [
			"Intensa coloración basófila del citoplasma",
			"Preservación perfecta de los bordes celulares"
		]
	},
	{
		enunciado: "¿Cuál de estos instrumentos se utiliza para la toma del exocérvix?",
		correcta: "Espátula de Ayre",
		incorrectas: [
			"Pinza de Magill",
			"Sonda de Miller-Abbott"
		]
	},
	{
		enunciado: "La PAAF dirigida por ecografía está indicada en:",
		correcta: "Nódulos mamarios no palpables o profundos",
		incorrectas: [
			"Mastitis agudas con clara fluctuación",
			"Autoexploración mamaria negativa en pacientes jóvenes"
		]
	},
	{
		enunciado: "En la técnica de Papanicolaou, el viraje o 'pavonado' se consigue con:",
		correcta: "Agua corriente o soluciones alcalinas tras la hematoxilina",
		incorrectas: [
			"Uso de alcohol absoluto",
			"Exposición prolongada al xileno"
		]
	},
	{
		enunciado: "La evaluación de la adecuación de la muestra (Bethesda) incluye:",
		correcta: "Identificación del tipo de muestra y presencia de células endocervicales",
		incorrectas: [
			"Conteo exacto del número de eritrocitos por campo",
			"Determinación del pH vaginal en el portaobjetos"
		]
	},
	{
		enunciado: "El cribado poblacional de cáncer de cérvix se basa fundamentalmente en:",
		correcta: "Citología cervical y/o detección de VPH",
		incorrectas: [
			"Ecografía transvaginal anual",
			"Determinación de marcadores tumorales en sangre"
		]
	},
	{
		enunciado: "En el laboratorio, la recepción de la PAAF de mama en fresco permite realizar:",
		correcta: "Bloque celular para estudio inmunocitoquímico",
		incorrectas: [
			"Cultivo microbiológico de rutina en todas las muestras",
			"Secuenciación genómica completa del paciente"
		]
	},
	{
		enunciado: "El raspado con espátula en lesiones vulvares sospechosas requiere:",
		correcta: "Eliminación previa de la queratina superficial",
		incorrectas: [
			"Anestesia general en todos los casos",
			"Uso de fijadores ácidos de forma exclusiva"
		]
	},
	{
		enunciado: "La zona de transformación del cérvix es el área comprendida entre:",
		correcta: "La unión escamo-columnar original y la actual",
		incorrectas: [
			"El orificio cervical interno y el istmo",
			"El fondo de saco vaginal y el introito"
		]
	},
	{
		enunciado: "Para evitar la contaminación cruzada en el laboratorio de citología:",
		correcta: "Se deben filtrar los colorantes periódicamente",
		incorrectas: [
			"Se utiliza el mismo baño de colorante para 1000 muestras",
			"No es necesario el tapado de las cubetas de tinción"
		]
	},
	{
		enunciado: "La toma endocervical en mujeres embarazadas debe realizarse:",
		correcta: "Con precaución y habitualmente con espátula de Ayre modificada",
		incorrectas: [
			"Está terminantemente prohibida durante todo el embarazo",
			"Solo mediante curetaje endocervical profundo"
		]
	},
	{
		enunciado: "El índice picnótico es un parámetro citológico que mide:",
		correcta: "El porcentaje de células escamosas con núcleo picnótico",
		incorrectas: [
			"La velocidad de sedimentación globular de la muestra",
			"El número de mitosis por cada 100 campos"
		]
	},
	{
		enunciado: "En la técnica de procesamiento 'ThinPrep', el principio de obtención de la capa celular es:",
		correcta: "Filtración por presión controlada",
		incorrectas: [
			"Sedimentación por gravedad",
			"Adhesión electrostática inducida"
		]
	},
	{
		enunciado: "Un frotis ginecológico con abundante inflamación puede dar lugar a un diagnóstico de:",
		correcta: "Atipia de células escamosas de significado incierto (ASC-US)",
		incorrectas: [
			"Carcinoma escamoso invasor de forma automática",
			"Muestra perfecta para estudio hormonal"
		]
	},
	{
		enunciado: "La coloración con Orange G en Papanicolaou tiñe selectivamente:",
		correcta: "La queratina",
		incorrectas: [
			"El ARN citoplasmático",
			"El nucleolo de las células tumorales"
		]
	},
	{
		enunciado: "La PAAF de mama tiene una sensibilidad diagnóstica para cáncer superior al:",
		correcta: "90% en manos experimentadas",
		incorrectas: [
			"10%, por lo que siempre requiere biopsia abierta",
			"50%, similar al azar"
		]
	},
	{
		enunciado: "La presencia de células metaplásicas en una citología cervical indica:",
		correcta: "Que se ha muestreado la zona de transformación",
		incorrectas: [
			"Un proceso maligno irreversible",
			"Una infección fúngica activa"
		]
	},
	{
		enunciado: "El montaje final de la citología se realiza con:",
		correcta: "Cubreobjetos y medio de montaje resinoso",
		incorrectas: [
			"Papel de filtro y parafina líquida",
			"Sellanado con laca de uñas únicamente"
		]
	}
];