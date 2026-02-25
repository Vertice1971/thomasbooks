'use strict';

var PREGUNTAS = [
	{
		enunciado: "La capa del útero que se desprende durante la menstruación es:",
		correcta: "La capa funcional del endometrio",
		incorrectas: [
			"El miometrio",
			"La capa basal del endometrio"
		]
	},
	{
		enunciado: "La fecundación del óvulo por el espermatozoide ocurre normalmente en:",
		correcta: "Las trompas de Falopio (ampolla)",
		incorrectas: [
			"El fondo del útero",
			"El interior del ovario"
		]
	},
	{
		enunciado: "La hormona responsable de la ovulación tras alcanzar un pico máximo en la mitad del ciclo es:",
		correcta: "Hormona luteinizante (LH)",
		incorrectas: [
			"Hormona folículo estimulante (FSH)",
			"Estrógeno"
		]
	},
	{
		enunciado: "Después de la ovulación, el folículo vacío se transforma en una estructura endocrina llamada:",
		correcta: "Cuerpo lúteo",
		incorrectas: [
			"Cuerpo albicans",
			"Folículo de Graaf"
		]
	},
	{
		enunciado: "La principal hormona secretada por el cuerpo lúteo para mantener el endometrio preparado es:",
		correcta: "Progesterona",
		incorrectas: [
			"Estradiol",
			"Testosterona"
		]
	},
	{
		enunciado: "Los genitales externos femeninos se conocen en su conjunto como:",
		correcta: "Vulva",
		incorrectas: [
			"Vagina",
			"Periné"
		]
	},
	{
		enunciado: "La hormona que estimula la producción de leche en las glándulas mamarias es:",
		correcta: "Prolactina",
		incorrectas: [
			"Oxitocina",
			"Estrógeno"
		]
	},
	{
		enunciado: "El órgano eréctil femenino, homólogo al pene masculino, es:",
		correcta: "El clítoris",
		incorrectas: [
			"Los labios mayores",
			"El himen"
		]
	},
	{
		enunciado: "La fase del ciclo uterino que coincide con la fase lútea del ovario es la:",
		correcta: "Fase secretora",
		incorrectas: [
			"Fase proliferativa",
			"Fase menstrual"
		]
	},
	{
		enunciado: "Los ligamentos que mantienen el útero en su posición inclinada hacia adelante son los:",
		correcta: "Ligamentos redondos",
		incorrectas: [
			"Ligamentos anchos",
			"Ligamentos suspensorios"
		]
	},
	{
		enunciado: "La porción inferior y estrecha del útero que se abre a la vagina se llama:",
		correcta: "Cérvix o cuello uterino",
		incorrectas: [
			"Istmo",
			"Fondo uterino"
		]
	},
	{
		enunciado: "En la glándula mamaria, la leche se almacena justo antes de su eyección en los:",
		correcta: "Senos galactóforos",
		incorrectas: [
			"Conductos alveolares",
			"Lóbulos mamarios"
		]
	},
	{
		enunciado: "La hormona FSH tiene como función principal en el ciclo ovárico:",
		correcta: "Estimular el crecimiento y desarrollo de los folículos",
		incorrectas: [
			"Provocar la rotura del folículo",
			"Inhibir la producción de moco cervical"
		]
	},
	{
		enunciado: "El pH vaginal es normalmente:",
		correcta: "Ácido, para prevenir infecciones",
		incorrectas: [
			"Alcalino, para favorecer a los espermatozoides",
			"Neutro"
		]
	},
	{
		enunciado: "La primera menstruación de una mujer se denomina:",
		correcta: "Menarquia",
		incorrectas: [
			"Menopausia",
			"Amenorrea"
		]
	},
	{
		enunciado: "El proceso de liberación de un ovocito secundario desde el ovario es:",
		correcta: "Ovulación",
		incorrectas: [
			"Oogénesis",
			"Atresia"
		]
	},
	{
		enunciado: "¿Qué estructura ovárica contiene el ovocito maduro listo para ser liberado?",
		correcta: "Folículo maduro o de Graaf",
		incorrectas: [
			"Folículo primordial",
			"Folículo primario"
		]
	},
	{
		enunciado: "El miometrio está compuesto por:",
		correcta: "Tres capas de músculo liso",
		incorrectas: [
			"Tejido conectivo denso únicamente",
			"Epitelio cúbico simple"
		]
	},
	{
		enunciado: "La hormona que provoca la eyección (salida) de la leche durante la lactancia es:",
		correcta: "Oxitocina",
		incorrectas: [
			"Prolactina",
			"Progesterona"
		]
	},
	{
		enunciado: "La región de piel pigmentada que rodea al pezón se denomina:",
		correcta: "Aureola",
		incorrectas: [
			"Cápsula",
			"Papila"
		]
	},
	{
		enunciado: "El proceso de formación de gametos femeninos se llama:",
		correcta: "Ovogénesis",
		incorrectas: [
			"Espermatogénesis",
			"Foliculogénesis"
		]
	},
	{
		enunciado: "Los pliegues cutáneos longitudinales que carecen de vello y rodean el vestíbulo vaginal son:",
		correcta: "Labios menores",
		incorrectas: [
			"Labios mayores",
			"Monte de Venus"
		]
	},
	{
		enunciado: "La hormona liberadora de gonadotropinas (GnRH) se secreta en:",
		correcta: "El hipotálamo",
		incorrectas: [
			"La hipófisis",
			"El ovario"
		]
	},
	{
		enunciado: "El endometrio alcanza su máximo grosor y vascularización durante:",
		correcta: "La fase secretora",
		incorrectas: [
			"La fase proliferativa",
			"La fase menstrual"
		]
	},
	{
		enunciado: "Las fimbrias son estructuras en forma de flecos que se encuentran en:",
		correcta: "El extremo distal (infundíbulo) de las trompas de Falopio",
		incorrectas: [
			"El interior del útero",
			"La superficie del ovario"
		]
	},
	{
		enunciado: "La glándulas de Bartolino tienen como función:",
		correcta: "Secretar moco para lubricar el vestíbulo vaginal",
		incorrectas: [
			"Producir hormonas sexuales",
			"Secretar leche"
		]
	},
	{
		enunciado: "El fin permanente de los ciclos menstruales se denomina:",
		correcta: "Menopausia",
		incorrectas: [
			"Climaterio",
			"Pubertad"
		]
	},
	{
		enunciado: "La hormona coriónica gonadotropa humana (hCG) es producida por:",
		correcta: "El embrión/placenta tras la implantación",
		incorrectas: [
			"La adenohipófisis",
			"El hipotálamo"
		]
	},
	{
		enunciado: "El ligamento suspensorio del ovario contiene:",
		correcta: "Los vasos sanguíneos y nervios ováricos",
		incorrectas: [
			"El conducto de Gartner",
			"Músculo estriado"
		]
	},
	{
		enunciado: "La vagina se localiza anatómicamente entre:",
		correcta: "La vejiga (anterior) y el recto (posterior)",
		incorrectas: [
			"El útero y los ovarios",
			"La uretra y el clítoris"
		]
	},
	{
		enunciado: "El fondo de saco de Douglas se sitúa entre:",
		correcta: "El útero y el recto",
		incorrectas: [
			"La vejiga y el útero",
			"La vagina y el útero"
		]
	},
	{
		enunciado: "Durante la menopausia, los niveles de FSH y LH suelen estar:",
		correcta: "Elevados",
		incorrectas: [
			"Muy bajos o ausentes",
			"Normales"
		]
	},
	{
		enunciado: "El moco cervical se vuelve más fluido y elástico bajo la influencia de:",
		correcta: "Los estrógenos (cerca de la ovulación)",
		incorrectas: [
			"La progesterona",
			"La prolactina"
		]
	},
	{
		enunciado: "La arteria principal que irriga el útero es una rama de la:",
		correcta: "Arteria ilíaca interna (hipogástrica)",
		incorrectas: [
			"Arteria aorta abdominal",
			"Arteria renal"
		]
	},
	{
		enunciado: "¿Cuántos cromosomas tiene un óvulo maduro?",
		correcta: "23 cromosomas",
		incorrectas: [
			"46 cromosomas",
			"22 cromosomas"
		]
	},
	{
		enunciado: "La secreción de estrógenos en el folículo es realizada principalmente por:",
		correcta: "Las células de la teca y la granulosa",
		incorrectas: [
			"Las células de la corona radiada",
			"El estroma ovárico únicamente"
		]
	},
	{
		enunciado: "La implantación del blastocisto ocurre normalmente en el endometrio a los:",
		correcta: "6-7 días después de la fecundación",
		incorrectas: [
			"14 días después",
			"2 días después"
		]
	},
	{
		enunciado: "La mama se sitúa sobre el músculo:",
		correcta: "Pectoral mayor",
		incorrectas: [
			"Serrato anterior",
			"Dorsal ancho"
		]
	},
	{
		enunciado: "Los conductos que drenan los lóbulos mamarios hacia el pezón son los:",
		correcta: "Conductos galactóforos",
		incorrectas: [
			"Conductos linfáticos",
			"Conductos biliares"
		]
	},
	{
		enunciado: "La principal función de los estrógenos en la pubertad es:",
		correcta: "El desarrollo de los caracteres sexuales secundarios femeninos",
		incorrectas: [
			"El cierre de las suturas craneales",
			"La producción de glóbulos rojos"
		]
	}
];