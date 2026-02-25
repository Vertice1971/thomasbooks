'use strict';

var PREGUNTAS = [
	{
		enunciado: "La unidad funcional y estructural del riñón se denomina:",
		correcta: "Nefrona",
		incorrectas: [
			"Glomérulo",
			"Cáliz renal"
		]
	},
	{
		enunciado: "El proceso inicial de formación de la orina que ocurre en el corpúsculo renal se llama:",
		correcta: "Filtración glomerular",
		incorrectas: [
			"Reabsorción tubular",
			"Secreción tubular"
		]
	},
	{
		enunciado: "La mayor parte del agua y de los nutrientes filtrados (como la glucosa) se reabsorben en:",
		correcta: "El túbulo contorneado proximal (TCP)",
		incorrectas: [
			"El túbulo contorneado distal (TCD)",
			"El asa de Henle"
		]
	},
	{
		enunciado: "¿Qué hormona aumenta la reabsorción de agua en el túbulo colector al aumentar la permeabilidad de sus paredes?",
		correcta: "Hormona antidiurética (ADH)",
		incorrectas: [
			"Aldosterona",
			"Renina"
		]
	},
	{
		enunciado: "El conducto que transporta la orina desde el riñón hasta la vejiga urinaria es:",
		correcta: "El uréter",
		incorrectas: [
			"La uretra",
			"El túbulo colector"
		]
	},
	{
		enunciado: "La red de capilares de alta presión donde se produce la filtración se denomina:",
		correcta: "Glomérulo",
		incorrectas: [
			"Vasa recta",
			"Capilares peritubulares"
		]
	},
	{
		enunciado: "La aldosterona actúa sobre el túbulo distal y el colector promoviendo principalmente:",
		correcta: "La reabsorción de sodio y la secreción de potasio",
		incorrectas: [
			"La filtración de proteínas",
			"La secreción de glucosa"
		]
	},
	{
		enunciado: "La estructura anatómica que separa la corteza renal de la médula renal es:",
		correcta: "La base de las pirámides renales",
		incorrectas: [
			"La cápsula de Bowman",
			"La pelvis renal"
		]
	},
	{
		enunciado: "El esfínter uretral que está bajo control voluntario (músculo esquelético) es:",
		correcta: "Esfínter uretral externo",
		incorrectas: [
			"Esfínter uretral interno",
			"Músculo detrusor"
		]
	},
	{
		enunciado: "El área triangular en la base de la vejiga urinaria delimitada por las aberturas de los uréteres y la uretra se llama:",
		correcta: "Trígono vesical",
		incorrectas: [
			"Vértice vesical",
			"Cuerpo vesical"
		]
	},
	{
		enunciado: "Las células que forman la capa visceral de la cápsula de Bowman y que rodean los capilares glomerulares son los:",
		correcta: "Podocitos",
		incorrectas: [
			"Células mesangiales",
			"Células yuxtaglomerulares"
		]
	},
	{
		enunciado: "La renina es secretada por el aparato yuxtaglomerular en respuesta a:",
		correcta: "Una disminución de la presión arterial o del volumen sanguíneo",
		incorrectas: [
			"Un aumento de la presión osmótica plasmática",
			"Una ingesta elevada de agua"
		]
	},
	{
		enunciado: "El segmento de la nefrona encargado de crear un gradiente osmótico en la médula renal mediante el mecanismo de contracorriente es:",
		correcta: "El asa de Henle",
		incorrectas: [
			"El glomérulo",
			"La pelvis renal"
		]
	},
	{
		enunciado: "¿Qué componente no debe encontrarse normalmente en la orina de un individuo sano?",
		correcta: "Proteínas de alto peso molecular (albúmina)",
		incorrectas: [
			"Urea",
			"Creatinina"
		]
	},
	{
		enunciado: "La uretra masculina, a diferencia de la femenina, tiene una función compartida con:",
		correcta: "El aparato reproductor",
		incorrectas: [
			"El aparato digestivo",
			"El sistema linfático"
		]
	},
	{
		enunciado: "La presencia de glucosa en la orina (glucosuria) suele indicar:",
		correcta: "Que se ha superado el umbral renal de reabsorción de glucosa",
		incorrectas: [
			"Un exceso de filtración glomerular de agua",
			"Un fallo en la secreción tubular de insulina"
		]
	},
	{
		enunciado: "El pH normal de la orina suele ser:",
		correcta: "Ligeramente ácido (alrededor de 6)",
		incorrectas: [
			"Fuertemente alcalino (alrededor de 9)",
			"Neutro exacto (7)"
		]
	},
	{
		enunciado: "Las pirámides renales se localizan en la región de la:",
		correcta: "Médula renal",
		incorrectas: [
			"Corteza renal",
			"Cápsula renal"
		]
	},
	{
		enunciado: "El músculo liso que forma la pared de la vejiga urinaria se denomina:",
		correcta: "Músculo detrusor",
		incorrectas: [
			"Músculo trigonal",
			"Músculo transverso"
		]
	},
	{
		enunciado: "La arteriola que lleva la sangre hacia el glomérulo es:",
		correcta: "Arteriola aferente",
		incorrectas: [
			"Arteriola eferente",
			"Arteria renal"
		]
	},
	{
		enunciado: "El reflejo de micción se activa principalmente por:",
		correcta: "Los receptores de estiramiento en la pared vesical",
		incorrectas: [
			"La concentración de urea en la orina",
			"La presión arterial sistémica elevada"
		]
	},
	{
		enunciado: "La porción del túbulo renal que se encuentra entre el asa de Henle y el túbulo colector es:",
		correcta: "Túbulo contorneado distal",
		incorrectas: [
			"Túbulo contorneado proximal",
			"Conducto papilar"
		]
	},
	{
		enunciado: "La filtración glomerular es un proceso:",
		correcta: "Pasivo, impulsado por la presión hidrostática",
		incorrectas: [
			"Activo, que consume gran cantidad de ATP",
			"Selectivo para todas las proteínas plasmáticas"
		]
	},
	{
		enunciado: "¿Cuál es el principal desecho nitrogenado eliminado por el riñón?",
		correcta: "Urea",
		incorrectas: [
			"Ácido úrico",
			"Amoníaco"
		]
	},
	{
		enunciado: "La capacidad de concentración de la orina depende directamente de:",
		correcta: "La longitud de las asas de Henle de las nefronas yuxtamedulares",
		incorrectas: [
			"El tamaño del glomérulo",
			"La presión arterial en la vena renal"
		]
	},
	{
		enunciado: "La eritropoyetina (EPO) es una hormona producida por el riñón que estimula:",
		correcta: "La producción de glóbulos rojos en la médula ósea",
		incorrectas: [
			"La reabsorción de calcio",
			"La contracción de los uréteres"
		]
	},
	{
		enunciado: "El aparato yuxtaglomerular se localiza en el punto de contacto entre:",
		correcta: "La arteriola aferente y el túbulo contorneado distal",
		incorrectas: [
			"El túbulo proximal y el asa de Henle",
			"La cápsula de Bowman y el uréter"
		]
	},
	{
		enunciado: "La función de los cálices renales es:",
		correcta: "Recoger la orina de las papilas renales y conducirla a la pelvis",
		incorrectas: [
			"Filtrar la sangre",
			"Reabsorber electrolitos"
		]
	},
	{
		enunciado: "La uretra femenina tiene una longitud aproximada de:",
		correcta: "4 cm",
		incorrectas: [
			"20 cm",
			"12 cm"
		]
	},
	{
		enunciado: "El aclaramiento renal (clearance) de una sustancia se define como:",
		correcta: "El volumen de plasma que queda libre de esa sustancia por unidad de tiempo",
		incorrectas: [
			"La cantidad total de sustancia excretada en 24 horas",
			"La velocidad de secreción tubular"
		]
	},
	{
		enunciado: "La angiotensina II produce:",
		correcta: "Vasoconstricción potente y estimulación de la secreción de aldosterona",
		incorrectas: [
			"Vasodilatación y aumento de la excreción de agua",
			"Inhibición de la sed"
		]
	},
	{
		enunciado: "¿Qué efecto tiene el Péptido Natriurético Auricular (ANP) sobre el riñón?",
		correcta: "Aumenta la excreción de sodio y agua",
		incorrectas: [
			"Aumenta la reabsorción de agua",
			"Estimula la secreción de renina"
		]
	},
	{
		enunciado: "La membrana de filtración glomerular está compuesta por:",
		correcta: "Endotelio capilar, membrana basal y podocitos",
		incorrectas: [
			"Epitelio de transición y lámina propia",
			"Músculo liso y tejido conectivo"
		]
	},
	{
		enunciado: "El riñón derecho suele estar ligeramente más bajo que el izquierdo debido a:",
		correcta: "La presencia del hígado",
		incorrectas: [
			"La posición del corazón",
			"La curvatura de la aorta"
		]
	},
	{
		enunciado: "La hemodiálisis es un procedimiento que sustituye artificialmente la función de:",
		correcta: "Filtración y depuración renal",
		incorrectas: [
			"Producción de hormonas tiroideas",
			"Digestión de proteínas"
		]
	},
	{
		enunciado: "La 'mácula densa' es un grupo de células especializadas del:",
		correcta: "Túbulo contorneado distal",
		incorrectas: [
			"Túbulo contorneado proximal",
			"Asa de Henle ascendente fina"
		]
	},
	{
		enunciado: "La reabsorción de glucosa en el TCP se realiza mediante:",
		correcta: "Transporte activo secundario acoplado al sodio",
		incorrectas: [
			"Difusión simple a través de canales de agua",
			"Pinocitosis"
		]
	},
	{
		enunciado: "Los uréteres entran en la vejiga a través de la pared:",
		correcta: "Posterior e inferior de forma oblicua",
		incorrectas: [
			"Superior y anterior",
			"Lateral y superior"
		]
	},
	{
		enunciado: "La arteria renal es una rama directa de la:",
		correcta: "Aorta abdominal",
		incorrectas: [
			"Arteria mesentérica superior",
			"Arteria ilíaca común"
		]
	},
	{
		enunciado: "La formación de cálculos renales (litiasis) ocurre con mayor frecuencia en:",
		correcta: "La pelvis renal y cálices",
		incorrectas: [
			"El glomérulo",
			"La uretra distal"
		]
	}
];