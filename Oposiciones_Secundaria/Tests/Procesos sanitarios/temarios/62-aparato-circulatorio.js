'use strict';

var PREGUNTAS = [
	{
		enunciado: "La capa más gruesa de la pared del corazón, formada por tejido muscular cardíaco, se denomina:",
		correcta: "Miocardio",
		incorrectas: [
			"Endocardio",
			"Epicardio"
		]
	},
	{
		enunciado: "La válvula que comunica la aurícula derecha con el ventrículo derecho es la:",
		correcta: "Válvula tricúspide",
		incorrectas: [
			"Válvula mitral",
			"Válvula sigmoidea aórtica"
		]
	},
	{
		enunciado: "¿Cuál es el marcapasos natural del corazón, donde se inicia normalmente el impulso eléctrico?",
		correcta: "Nodo sinoauricular (SA)",
		incorrectas: [
			"Nodo auriculoventricular (AV)",
			"Haz de His"
		]
	},
	{
		enunciado: "En la circulación sistémica, la sangre oxigenada sale del corazón a través de:",
		correcta: "El ventrículo izquierdo por la arteria aorta",
		incorrectas: [
			"El ventrículo derecho por la arteria pulmonar",
			"La aurícula izquierda por las venas pulmonares"
		]
	},
	{
		enunciado: "El volumen de sangre expulsado por un ventrículo en cada latido se denomina:",
		correcta: "Volumen sistólico",
		incorrectas: [
			"Gasto cardíaco",
			"Frecuencia cardíaca"
		]
	},
	{
		enunciado: "Las venas se diferencian de las arterias por poseer:",
		correcta: "Válvulas para impedir el retroceso de la sangre",
		incorrectas: [
			"Una capa muscular media mucho más gruesa",
			"Presiones sanguíneas más elevadas"
		]
	},
	{
		enunciado: "La fase del ciclo cardíaco en la que los ventrículos se relajan y se llenan de sangre es la:",
		correcta: "Diástole",
		incorrectas: [
			"Sístole",
			"Fase de eyección"
		]
	},
	{
		enunciado: "Los vasos sanguíneos donde se produce el intercambio de nutrientes y gases con los tejidos son:",
		correcta: "Capilares",
		incorrectas: [
			"Arteriolas",
			"Vénulas"
		]
	},
	{
		enunciado: "La circulación menor o pulmonar finaliza en:",
		correcta: "La aurícula izquierda a través de las venas pulmonares",
		incorrectas: [
			"El ventrículo izquierdo a través de la aorta",
			"La aurícula derecha a través de las venas cavas"
		]
	},
	{
		enunciado: "El primer ruido cardíaco ('lub') corresponde al cierre de:",
		correcta: "Las válvulas auriculoventriculares (tricúspide y mitral)",
		incorrectas: [
			"Las válvulas semilunares (aórtica y pulmonar)",
			"La válvula de Eustaquio"
		]
	},
	{
		enunciado: "La arteria que suministra sangre oxigenada al propio tejido del miocardio es la:",
		correcta: "Arteria coronaria",
		incorrectas: [
			"Arteria carótida",
			"Arteria subclavia"
		]
	},
	{
		enunciado: "El complejo QRS en un electrocardiograma representa:",
		correcta: "La despolarización de los ventrículos",
		incorrectas: [
			"La despolarización de las aurículas",
			"La repolarización de los ventrículos"
		]
	},
	{
		enunciado: "¿Qué estructura eléctrica del corazón retrasa el impulso para permitir el llenado ventricular?",
		correcta: "Nodo auriculoventricular (AV)",
		incorrectas: [
			"Fibras de Purkinje",
			"Haz de Bachmann"
		]
	},
	{
		enunciado: "La presión arterial máxima registrada durante la contracción ventricular se llama:",
		correcta: "Presión sistólica",
		incorrectas: [
			"Presión diastólica",
			"Presión arterial media"
		]
	},
	{
		enunciado: "El retorno venoso hacia el corazón se ve favorecido por:",
		correcta: "La bomba muscular esquelética y la bomba respiratoria",
		incorrectas: [
			"La resistencia periférica total",
			"La sístole auricular"
		]
	},
	{
		enunciado: "Las cuerdas tendinosas del corazón tienen la función de:",
		correcta: "Evitar que los velos de las válvulas AV se evertan hacia las aurículas",
		incorrectas: [
			"Provocar la contracción de los ventrículos",
			"Cerrar las válvulas semilunares"
		]
	},
	{
		enunciado: "¿Cuál es la única arteria del cuerpo humano adulto que transporta sangre desoxigenada?",
		correcta: "Arteria pulmonar",
		incorrectas: [
			"Arteria renal",
			"Arteria mesentérica"
		]
	},
	{
		enunciado: "El gasto cardíaco se calcula multiplicando:",
		correcta: "La frecuencia cardíaca por el volumen sistólico",
		incorrectas: [
			"La presión arterial por la resistencia periférica",
			"La frecuencia cardíaca por el tiempo de diástole"
		]
	},
	{
		enunciado: "La túnica o capa de los vasos sanguíneos que está en contacto directo con la sangre es:",
		correcta: "Túnica íntima (endotelio)",
		incorrectas: [
			"Túnica media",
			"Túnica adventicia"
		]
	},
	{
		enunciado: "El lugar de mayor resistencia al flujo sanguíneo en el árbol vascular es:",
		correcta: "Las arteriolas",
		incorrectas: [
			"Las grandes arterias elásticas",
			"Las venas cavas"
		]
	},
	{
		enunciado: "La repolarización auricular en el ECG queda enmascarada por:",
		correcta: "El complejo QRS",
		incorrectas: [
			"La onda P",
			"La onda T"
		]
	},
	{
		enunciado: "La estimulación del sistema nervioso parasimpático sobre el corazón produce:",
		correcta: "Disminución de la frecuencia cardíaca (bradicardia)",
		incorrectas: [
			"Aumento de la fuerza de contracción",
			"Aumento de la velocidad de conducción"
		]
	},
	{
		enunciado: "La onda T del electrocardiograma representa:",
		correcta: "La repolarización ventricular",
		incorrectas: [
			"La sístole auricular",
			"La despolarización ventricular"
		]
	},
	{
		enunciado: "La comunicación entre la circulación fetal y la materna se realiza a través de:",
		correcta: "La placenta",
		incorrectas: [
			"El conducto arterioso únicamente",
			"El agujero oval"
		]
	},
	{
		enunciado: "Los barorreceptores que regulan la presión arterial a corto plazo se encuentran en:",
		correcta: "Seno carotídeo y arco aórtico",
		incorrectas: [
			"Aurícula derecha y ventrículo izquierdo",
			"Riñones y bazo"
		]
	},
	{
		enunciado: "El edema se produce cuando existe un desequilibrio entre:",
		correcta: "La presión hidrostática y la presión oncótica capilar",
		incorrectas: [
			"La frecuencia cardíaca y el volumen sistólico",
			"El flujo laminar y el flujo turbulento"
		]
	},
	{
		enunciado: "La linfa es un líquido que procede de:",
		correcta: "El exceso de líquido intersticial filtrado desde los capilares",
		incorrectas: [
			"La secreción directa de los ganglios linfáticos",
			"El plasma absorbido en el intestino únicamente"
		]
	},
	{
		enunciado: "¿Qué válvula cardíaca se sitúa entre el ventrículo izquierdo y la arteria aorta?",
		correcta: "Válvula semilunar aórtica",
		incorrectas: [
			"Válvula bicúspide",
			"Válvula semilunar pulmonar"
		]
	},
	{
		enunciado: "La ley de Frank-Starling establece que:",
		correcta: "A mayor estiramiento de las fibras miocárdicas, mayor fuerza de contracción",
		incorrectas: [
			"El flujo es inversamente proporcional a la viscosidad",
			"La presión depende del radio del vaso"
		]
	},
	{
		enunciado: "El tabique que separa ambos ventrículos se denomina:",
		correcta: "Tabique interventricular",
		incorrectas: [
			"Tabique interauricular",
			"Septum primum"
		]
	},
	{
		enunciado: "La sístole auricular contribuye al llenado ventricular en aproximadamente un:",
		correcta: "20-25%",
		incorrectas: [
			"70-80%",
			"5-10%"
		]
	},
	{
		enunciado: "El conducto linfático que drena la mayor parte de la linfa del cuerpo es:",
		correcta: "Conducto torácico",
		incorrectas: [
			"Gran vena linfática derecha",
			"Conducto quilífero"
		]
	},
	{
		enunciado: "Las arterias elásticas, como la aorta, tienen la función de:",
		correcta: "Amortiguar la pulsatilidad del flujo sanguíneo",
		incorrectas: [
			"Ser el principal sitio de intercambio gaseoso",
			"Regular la distribución local de sangre mediante vasomoción"
		]
	},
	{
		enunciado: "La hematocrito es:",
		correcta: "El porcentaje del volumen total de sangre ocupado por glóbulos rojos",
		incorrectas: [
			"La cantidad de hemoglobina por decilitro",
			"El recuento total de leucocitos"
		]
	},
	{
		enunciado: "La proteína plasmática más abundante, responsable de la presión oncótica, es:",
		correcta: "Albúmina",
		incorrectas: [
			"Fibrinógeno",
			"Gammaglobulina"
		]
	},
	{
		enunciado: "El foramen oval en el corazón fetal comunica:",
		correcta: "La aurícula derecha con la aurícula izquierda",
		incorrectas: [
			"El ventrículo derecho con el izquierdo",
			"La aorta con la arteria pulmonar"
		]
	},
	{
		enunciado: "Un agente inotrópico positivo es aquel que:",
		correcta: "Aumenta la fuerza de contracción del miocardio",
		incorrectas: [
			"Aumenta la frecuencia cardíaca",
			"Disminuye la velocidad de conducción"
		]
	},
	{
		enunciado: "La vena que drena la sangre desoxigenada de la parte superior del cuerpo hacia la aurícula derecha es:",
		correcta: "Vena cava superior",
		incorrectas: [
			"Vena yugular interna",
			"Vena cava inferior"
		]
	},
	{
		enunciado: "En la fase de contracción ventricular isovolumétrica:",
		correcta: "Todas las válvulas cardíacas están cerradas",
		incorrectas: [
			"Las válvulas AV están abiertas",
			"Se está produciendo la eyección de sangre"
		]
	},
	{
		enunciado: "La velocidad de flujo sanguíneo es mínima en:",
		correcta: "Los capilares",
		incorrectas: [
			"Las arteriolas",
			"La aorta"
		]
	}
];