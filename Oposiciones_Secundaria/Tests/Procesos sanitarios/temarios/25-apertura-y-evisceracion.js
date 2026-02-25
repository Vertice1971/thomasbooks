'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué técnica de evisceración se caracteriza por la extracción de los órganos en un solo bloque (en masa)?",
		correcta: "Técnica de Letulle",
		incorrectas: [
			"Técnica de Virchow",
			"Técnica de Ghon"
		]
	},
	{
		enunciado: "La técnica de Virchow para la evisceración consiste fundamentalmente en:",
		correcta: "La extracción de los órganos uno a uno y su estudio por separado",
		incorrectas: [
			"La extracción de los órganos en tres bloques funcionales",
			"El estudio de todos los órganos sin extraerlos de las cavidades"
		]
	},
	{
		enunciado: "Para la apertura del tronco, la incisión cutánea en 'I' se realiza desde:",
		correcta: "El borde inferior del mentón o sínfisis mentoniana hasta el pubis",
		incorrectas: [
			"Ambas regiones acromiales hasta el apéndice xifoides",
			"Detrás de las orejas cruzando el tórax"
		]
	},
	{
		enunciado: "¿Cuál es el primer paso tras la incisión cutánea y la disección de los planos musculares en el tronco?",
		correcta: "Apertura y examen de las cavidades pleural, pericárdica y peritoneal",
		incorrectas: [
			"Extracción inmediata del bloque hepatoduodenal",
			"Serrado de la columna vertebral para extraer la médula"
		]
	},
	{
		enunciado: "La apertura de la cavidad craneal requiere una incisión en el cuero cabelludo denominada:",
		correcta: "Incisión bimastoidea o coronal",
		incorrectas: [
			"Incisión sagital media",
			"Incisión circular supravOrbitaria"
		]
	},
	{
		enunciado: "Para extraer el encéfalo, es necesario seccionar previamente:",
		correcta: "La tienda del cerebelo, los nervios craneales y la médula cervical",
		incorrectas: [
			"El hueso hioides y la glándula tiroides",
			"Únicamente el ligamento amarillo cervical"
		]
	},
	{
		enunciado: "El método de Ghon se define como la evisceración por:",
		correcta: "Bloques orgánicos relacionados funcionalmente",
		incorrectas: [
			"Extracción del bloque cardiopulmonar exclusivamente",
			"Disección in situ sin extraer ninguna víscera"
		]
	},
	{
		enunciado: "Para la extracción del peto esternal seccionamos los cartílagos costales con:",
		correcta: "Costótomo o sierra",
		incorrectas: [
			"Enterótomo",
			"Cuchillo de Virchow"
		]
	},
	{
		enunciado: "En la disección del corazón, la apertura debe seguir:",
		correcta: "La dirección del flujo sanguíneo",
		incorrectas: [
			"Cortes transversales paralelos de 1 cm",
			"Una única incisión vertical posterior"
		]
	},
	{
		enunciado: "¿Qué técnica permite mantener mejor las relaciones anatómicas entre los órganos durante la necropsia?",
		correcta: "Técnica de Rokitansky",
		incorrectas: [
			"Técnica de Virchow",
			"Técnica de Letulle"
		]
	},
	{
		enunciado: "La extracción de la médula espinal puede realizarse por vía:",
		correcta: "Anterior o posterior",
		incorrectas: [
			"Únicamente transcraneal",
			"Exclusivamente a través del foramen magnum"
		]
	},
	{
		enunciado: "Tras retirar la calota craneal, la membrana que debe ser incidida para acceder al encéfalo es:",
		correcta: "Duramadre",
		incorrectas: [
			"Piamadre",
			"Aracnoides"
		]
	},
	{
		enunciado: "El bloque cervical en la técnica de Ghon incluye habitualmente:",
		correcta: "Lengua, esófago, tráquea y glándulas tiroides/paratiroides",
		incorrectas: [
			"Encéfalo y médula cervical alta",
			"Únicamente los grandes vasos del cuello"
		]
	},
	{
		enunciado: "Para la apertura de los pulmones, el corte principal se realiza desde:",
		correcta: "El borde convexo hacia el hilio",
		incorrectas: [
			"La tráquea hacia los bronquiolos terminales",
			"El lóbulo superior hacia la base en sentido vertical"
		]
	},
	{
		enunciado: "¿Cómo se denomina la maniobra para separar el intestino del mesenterio?",
		correcta: "Desenrollado o desbridamiento del intestino",
		incorrectas: [
			"Evisceración tipo Rokitansky",
			"Técnica de la doble ligadura"
		]
	},
	{
		enunciado: "La sección de los pilares del diafragma es necesaria para:",
		correcta: "Liberar el bloque de órganos toraco-abdominales",
		incorrectas: [
			"Facilitar la expansión de los pulmones post-mortem",
			"Acceder directamente a las glándulas suprarrenales"
		]
	},
	{
		enunciado: "En la disección del sistema biliar, es fundamental comprobar la permeabilidad de:",
		correcta: "Conducto colédoco y ampolla de Vater",
		incorrectas: [
			"Vena porta y arteria hepática",
			"Ligamento redondo y falciforme"
		]
	},
	{
		enunciado: "Para extraer el bloque urogenital, se debe realizar la disección de:",
		correcta: "La sínfisis del pubis y el suelo pélvico",
		incorrectas: [
			"El peritoneo parietal posterior únicamente",
			"Los ligamentos inguinales externos"
		]
	},
	{
		enunciado: "La disección del cerebro suele realizarse mediante cortes:",
		correcta: "Coronales o frontales (cortes de Charcot)",
		incorrectas: [
			"Sagitales estrictos de 5 cm de grosor",
			"Oblicuos siguiendo las circunvoluciones"
		]
	},
	{
		enunciado: "¿Qué órgano requiere una apertura por su curvatura mayor para examinar la mucosa?",
		correcta: "Estómago",
		incorrectas: [
			"Duodeno",
			"Vejiga urinaria"
		]
	},
	{
		enunciado: "La extracción de la lengua en bloque con los órganos del cuello requiere:",
		correcta: "Incisión por el suelo de la boca siguiendo el borde interno de la mandíbula",
		incorrectas: [
			"Fractura obligatoria de la mandíbula",
			"Extracción previa de todas las piezas dentales"
		]
	},
	{
		enunciado: "El examen de las arterias coronarias se realiza preferentemente mediante:",
		correcta: "Cortes transversales seriados cada 2-3 mm",
		incorrectas: [
			"Una sola sección longitudinal desde el origen",
			"Punción con aguja fina en el origen aórtico"
		]
	},
	{
		enunciado: "Para el estudio de la próstata, el corte debe ser:",
		correcta: "Transversal a la uretra prostática",
		incorrectas: [
			"Sagital siguiendo el recto",
			"Cualquiera, ya que es un órgano homogéneo"
		]
	},
	{
		enunciado: "La técnica de apertura del raquis por vía posterior requiere colocar al cadáver en:",
		correcta: "Decúbito prono",
		incorrectas: [
			"Decúbito supino",
			"Posición de Trendelenburg"
		]
	},
	{
		enunciado: "Antes de extraer los órganos abdominales, se debe medir la altura de:",
		correcta: "El diafragma",
		incorrectas: [
			"El bazo respecto a la cresta ilíaca",
			"La vejiga respecto al ombligo"
		]
	},
	{
		enunciado: "¿Qué estructura se utiliza como guía para localizar las glándulas paratiroides?",
		correcta: "Los lóbulos de la glándula tiroides",
		incorrectas: [
			"El cartílago cricoides",
			"La bifurcación carotídea"
		]
	},
	{
		enunciado: "El estudio de la médula ósea en la autopsia se suele realizar en:",
		correcta: "Cuerpo esternal o cuerpos vertebrales",
		incorrectas: [
			"Falanges de los dedos",
			"Huesos del carpo"
		]
	},
	{
		enunciado: "En la técnica de Letulle, la disección de los órganos se realiza:",
		correcta: "Fuera del cadáver, sobre la mesa de disección",
		incorrectas: [
			"Dentro de las cavidades sin cortar ligamentos",
			"Mediante endoscopia post-mortem"
		]
	},
	{
		enunciado: "La sección de la aorta para la evisceración abdominal se realiza a nivel de:",
		correcta: "El diafragma o por encima de las ilíacas según la técnica",
		incorrectas: [
			"El arco aórtico exclusivamente",
			"La salida de las arterias renales"
		]
	},
	{
		enunciado: "Para examinar la uretra masculina, es necesario seccionar:",
		correcta: "El pene y la sínfisis del pubis",
		incorrectas: [
			"Únicamente el escroto",
			"El recto en su totalidad"
		]
	},
	{
		enunciado: "La extracción del bloque retroperitoneal incluye:",
		correcta: "Riñones, glándulas suprarrenales, uréteres, aorta y cava",
		incorrectas: [
			"Páncreas y bazo exclusivamente",
			"Hígado y vesícula biliar"
		]
	},
	{
		enunciado: "En la apertura del cráneo, el corte óseo con la sierra debe ser:",
		correcta: "Circular o en cuña (V invertida en los temporales)",
		incorrectas: [
			"Solo en la línea media sagital",
			"Únicamente en el hueso occipital"
		]
	},
	{
		enunciado: "El examen de la glándula hipófisis requiere:",
		correcta: "La apertura de la silla turca tras extraer el encéfalo",
		incorrectas: [
			"La disección del paladar blando",
			"El serrado del hueso etmoides"
		]
	},
	{
		enunciado: "La presencia de bridas o adherencias en la cavidad peritoneal sugiere:",
		correcta: "Cirugías previas o procesos inflamatorios antiguos",
		incorrectas: [
			"Muerte por intoxicación aguda",
			"Un proceso normal de la putrefacción"
		]
	},
	{
		enunciado: "Para la extracción de los pulmones se deben seccionar los elementos del:",
		correcta: "Hilio pulmonar (bronquios y vasos)",
		incorrectas: [
			"Parenquima periférico",
			"Ligamento pulmonar exclusivamente"
		]
	},
	{
		enunciado: "La disección de los testículos se realiza mediante:",
		correcta: "Incisión del escroto y extracción a través del canal inguinal",
		incorrectas: [
			"Apertura directa desde la cavidad abdominal",
			"Punción aspiración con aguja gruesa"
		]
	},
	{
		enunciado: "En el método de Rokitansky, la disección es fundamentalmente:",
		correcta: "In situ, órgano por órgano",
		incorrectas: [
			"En masa y fuera del cuerpo",
			"Por bloques alejados del cadáver"
		]
	},
	{
		enunciado: "La apertura de la vena cava inferior es útil para buscar:",
		correcta: "Tromboembolismos",
		incorrectas: [
			"Placas de ateroma",
			"Signos de endocarditis"
		]
	},
	{
		enunciado: "Tras la evisceración torácica, se debe inspeccionar la columna vertebral para descartar:",
		correcta: "Fracturas, metástasis u osteofitos",
		incorrectas: [
			"El color de la médula espinal",
			"La presencia de líquido cefalorraquídeo"
		]
	},
	{
		enunciado: "El peso de los órganos es un dato:",
		correcta: "Obligatorio que debe registrarse antes de la disección detallada",
		incorrectas: [
			"Opcional que solo se toma si el órgano es muy grande",
			"Inútil para el diagnóstico clínico-patológico"
		]
	}
];