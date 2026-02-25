'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuál es la recomendación de suplementación universal de ácido fólico antes de la concepción?",
		correcta: "400 µg/día para prevenir defectos del tubo neural",
		incorrectas: [
			"10 mg/día para evitar la anemia ferropénica",
			"100 µg/día solo durante el tercer trimestre",
			"5 mg/día únicamente si hay antecedentes de diabetes"
		]
	},
	{
		enunciado: "El aumento de peso recomendado durante el embarazo para una mujer con IMC normal es de:",
		correcta: "11.5 - 16 kg",
		incorrectas: [
			"5 - 9 kg",
			"18 - 25 kg",
			"No debe aumentar de peso"
		]
	},
	{
		enunciado: "Durante el segundo y tercer trimestre, las necesidades energéticas aumentan aproximadamente:",
		correcta: "300 - 450 kcal/día adicionales",
		incorrectas: [
			"1000 kcal/día adicionales",
			"No aumentan respecto al estado pregestacional",
			"Disminuyen por la reducción de la actividad física"
		]
	},
	{
		enunciado: "La ingesta de yodo durante el embarazo es crítica para prevenir:",
		correcta: "Cretinismo y alteraciones del desarrollo neurocognitivo",
		incorrectas: [
			"Espina bífida",
			"Macrosomía fetal",
			"Hipertensión gestacional"
		]
	},
	{
		enunciado: "Para evitar la toxoplasmosis, la embarazada seronegativa debe:",
		correcta: "Evitar carnes crudas o poco cocinadas y lavar bien frutas y verduras",
		incorrectas: [
			"Eliminar el consumo de lácteos pasteurizados",
			"No comer pescado azul por el mercurio",
			"Beber solo agua destilada"
		]
	},
	{
		enunciado: "¿Qué nutriente requiere duplicar su ingesta durante el embarazo debido a la expansión del volumen sanguíneo?",
		correcta: "Hierro",
		incorrectas: [
			"Vitamina C",
			"Sodio",
			"Potasio"
		]
	},
	{
		enunciado: "La diabetes gestacional se asocia frecuentemente con:",
		correcta: "Macrosomía fetal (peso elevado al nacer)",
		incorrectas: [
			"Bajo peso para la edad gestacional",
			"Microcefalia",
			"Anemia perniciosa materna"
		]
	},
	{
		enunciado: "La lactancia materna exclusiva se recomienda, según la OMS, hasta los:",
		correcta: "6 meses de vida",
		incorrectas: [
			"2 meses de vida",
			"12 meses de vida",
			"4 meses de vida"
		]
	},
	{
		enunciado: "La producción de leche materna depende principalmente de:",
		correcta: "El vaciamiento de la mama y la estimulación por succión",
		incorrectas: [
			"La ingesta masiva de leche de vaca por la madre",
			"El tamaño previo de las mamas",
			"El consumo de suplementos de levadura de cerveza"
		]
	},
	{
		enunciado: "El calostro se caracteriza por ser rico en:",
		correcta: "Inmunoglobulinas (IgA), lactoferrina y sales minerales",
		incorrectas: [
			"Lactosa y grasas saturadas",
			"Caseína de difícil digestión",
			"Agua y glucosa exclusivamente"
		]
	},
	{
		enunciado: "Durante la lactancia, el gasto energético materno aumenta aproximadamente:",
		correcta: "500 kcal/día",
		incorrectas: [
			"100 kcal/día",
			"1500 kcal/día",
			"No aumenta"
		]
	},
	{
		enunciado: "La suplementación con vitamina D en el lactante amamantado:",
		correcta: "Es necesaria (400 UI/día) para prevenir el raquitismo",
		incorrectas: [
			"Está contraindicada por riesgo de toxicidad renal",
			"Solo es necesaria si la madre es vegetariana",
			"Se sustituye por la exposición solar de 5 minutos al mes"
		]
	},
	{
		enunciado: "La preeclampsia se caracteriza clínicamente por:",
		correcta: "Hipertensión arterial y proteinuria tras la semana 20",
		incorrectas: [
			"Hipoglucemia y cetonuria",
			"Anemia y leucopenia",
			"Aumento de la agudeza visual"
		]
	},
	{
		enunciado: "El consumo de alcohol durante el embarazo puede causar:",
		correcta: "Síndrome alcohólico fetal (retraso mental y malformaciones)",
		incorrectas: [
			"Aumento de la inteligencia del recién nacido",
			"Solo afecta si se consume en el tercer trimestre",
			"Mejora la circulación placentaria"
		]
	},
	{
		enunciado: "¿Cuál es la recomendación sobre el consumo de cafeína en el embarazo?",
		correcta: "Limitar a menos de 200 mg/día (aprox. 1-2 tazas de café)",
		incorrectas: [
			"Consumo ilimitado para evitar la fatiga",
			"Prohibición absoluta bajo riesgo de aborto inmediato",
			"Solo se permite cafeína en cápsulas"
		]
	},
	{
		enunciado: "La listeriosis es una infección alimentaria peligrosa en el embarazo que se encuentra en:",
		correcta: "Quesos no pasteurizados, embutidos y ahumados",
		incorrectas: [
			"Legumbres secas",
			"Pan integral y cereales",
			"Frutos secos tostados"
		]
	},
	{
		enunciado: "El estreñimiento en el embarazo se debe principalmente a:",
		correcta: "Efecto de la progesterona sobre el músculo liso y presión del útero",
		incorrectas: [
			"Aumento de la actividad física",
			"Consumo excesivo de fibra soluble",
			"Déficit de suplementación con hierro"
		]
	},
	{
		enunciado: "La vitamina A en dosis muy elevadas durante el embarazo tiene efecto:",
		correcta: "Teratogénico (malformaciones fetales)",
		incorrectas: [
			"Antioxidante beneficioso para el feto",
			"Estimulante de la visión nocturna fetal",
			"Preventivo de la diabetes gestacional"
		]
	},
	{
		enunciado: "El DHA (ácido docosahexaenoico) es esencial en el embarazo para:",
		correcta: "El desarrollo cerebral y visual del feto",
		incorrectas: [
			"La formación del esmalte dental materno",
			"La regulación del calcio óseo",
			"Evitar las estrías cutáneas"
		]
	},
	{
		enunciado: "La pirosis (acidez) en el embarazo se maneja dietéticamente con:",
		correcta: "Comidas pequeñas, frecuentes y evitar acostarse tras comer",
		incorrectas: [
			"Aumento de alimentos picantes y grasos",
			"Ingesta de grandes volúmenes de líquido en las comidas",
			"Consumo de café en ayunas"
		]
	},
	{
		enunciado: "¿Qué mineral debe vigilarse especialmente en embarazadas vegetarianas/veganas?",
		correcta: "Hierro, Zinc, Calcio y Vitamina B12",
		incorrectas: [
			"Sodio y Potasio",
			"Vitamina C",
			"Magnesio únicamente"
		]
	},
	{
		enunciado: "La transferencia de calcio al feto es máxima durante:",
		correcta: "El tercer trimestre",
		incorrectas: [
			"El primer trimestre",
			"El periodo embrionario inicial",
			"No hay transferencia de calcio"
		]
	},
	{
		enunciado: "La absorción de hierro aumenta significativamente en el embarazo por:",
		correcta: "Adaptación fisiológica mediada por la reducción de hepcidina",
		incorrectas: [
			"Disminución de la acidez gástrica",
			"Consumo de suplementos de calcio",
			"Ingesta de té durante las comidas"
		]
	},
	{
		enunciado: "La pica (deseo de comer sustancias no nutritivas como tierra o hielo) se asocia a:",
		correcta: "Déficit de hierro (anemia ferropénica)",
		incorrectas: [
			"Exceso de vitamina D",
			"Falta de carbohidratos complejos",
			"Niveles elevados de progesterona"
		]
	},
	{
		enunciado: "En la lactancia, el sabor de la leche:",
		correcta: "Puede variar según la dieta materna, facilitando la aceptación de nuevos sabores",
		incorrectas: [
			"Es siempre idéntico independientemente de lo que coma la madre",
			"Se vuelve amargo si la madre hace ejercicio",
			"Solo depende de la cantidad de agua ingerida"
		]
	},
	{
		enunciado: "La hipogalactia (baja producción de leche) verdadera suele deberse a:",
		correcta: "Frecuencia de tomas insuficiente o técnica de agarre deficiente",
		incorrectas: [
			"Beber menos de 5 litros de agua al día",
			"Tener el pecho pequeño",
			"Comer pocos lácteos"
		]
	},
	{
		enunciado: "La mastitis es una complicación de la lactancia que consiste en:",
		correcta: "Inflamación/infección de uno o varios lóbulos mamarios",
		incorrectas: [
			"Aparición de estrías en el pezón",
			"Exceso de producción de leche",
			"Cese repentino de la secreción de oxitocina"
		]
	},
	{
		enunciado: "La vitamina B12 en madres lactantes veganas:",
		correcta: "Debe suplementarse obligatoriamente para evitar daño neurológico en el bebé",
		incorrectas: [
			"No es necesaria si consume algas",
			"Se sintetiza por el propio lactante",
			"Solo es necesaria si el bebé nace prematuro"
		]
	},
	{
		enunciado: "El reflejo de eyección de la leche está mediado por la hormona:",
		correcta: "Oxitocina",
		incorrectas: [
			"Prolactina (esta media la producción)",
			"Estradiol",
			"Progesterona"
		]
	},
	{
		enunciado: "La restricción de energía severa durante el embarazo aumenta el riesgo de:",
		correcta: "Bajo peso al nacer y parto prematuro",
		incorrectas: [
			"Diabetes gestacional",
			"Hijo con obesidad inmediata",
			"Aumento de la talla fetal"
		]
	},
	{
		enunciado: "¿Qué pescado debe evitarse en el embarazo por su alto contenido en mercurio?",
		correcta: "Pez espada, tiburón, atún rojo y lucio",
		incorrectas: [
			"Sardinas y boquerones",
			"Merluza y bacalao",
			"Salmón de granja"
		]
	},
	{
		enunciado: "El edema fisiológico en el último trimestre del embarazo:",
		correcta: "No requiere restricción de sodio si no hay hipertensión",
		incorrectas: [
			"Debe tratarse con diuréticos potentes",
			"Indica siempre fallo renal grave",
			"Se soluciona eliminando las proteínas de la dieta"
		]
	},
	{
		enunciado: "La ganancia de peso excesiva en el embarazo aumenta el riesgo de:",
		correcta: "Cesárea, macrosomía y obesidad infantil posterior",
		incorrectas: [
			"Anemia megaloblástica",
			"Bajo peso al nacer",
			"Hipotiroidismo fetal"
		]
	},
	{
		enunciado: "La OMS recomienda el inicio de la lactancia materna:",
		correcta: "En la primera hora tras el nacimiento (contacto piel con piel)",
		incorrectas: [
			"A las 24 horas del parto",
			"Tras la primera toma de suero glucosado",
			"Solo cuando la madre suba a planta"
		]
	},
	{
		enunciado: "La leche de continuación (tipo 2) está diseñada para bebés de:",
		correcta: "6 a 12 meses",
		incorrectas: [
			"0 a 6 meses",
			"Mayores de 2 años",
			"Recién nacidos prematuros"
		]
	},
	{
		enunciado: "La principal fuente de energía de la leche materna son:",
		correcta: "Los lípidos (50% de las calorías totales)",
		incorrectas: [
			"Las proteínas de suero",
			"La lactosa únicamente",
			"Los nucleótidos"
		]
	},
	{
		enunciado: "La anemia del embarazo se define habitualmente por hemoglobina inferior a:",
		correcta: "11 g/dl",
		incorrectas: [
			"13 g/dl",
			"9 g/dl",
			"15 g/dl"
		]
	},
	{
		enunciado: "El estreñimiento y las náuseas son síntomas comunes del:",
		correcta: "Primer trimestre",
		incorrectas: [
			"Tercer trimestre",
			"Momento del parto",
			"Postparto inmediato"
		]
	},
	{
		enunciado: "La suplementación con flúor durante el embarazo:",
		correcta: "No se recomienda de forma rutinaria para la prevención de caries fetal",
		incorrectas: [
			"Es obligatoria desde la semana 4",
			"Sustituye al calcio",
			"Solo si la madre tiene ortodoncia"
		]
	},
	{
		enunciado: "El objetivo nutricional principal en el embarazo es:",
		correcta: "Garantizar el crecimiento fetal y preservar las reservas maternas",
		incorrectas: [
			"Que la madre pierda grasa acumulada",
			"Evitar cualquier tipo de suplementación química",
			"Sustituir la comida sólida por batidos"
		]
	}
];