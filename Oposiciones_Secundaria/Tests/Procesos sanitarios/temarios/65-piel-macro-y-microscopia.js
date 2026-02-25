'use strict';

var PREGUNTAS = [
	{
		enunciado: "La capa más superficial de la piel, compuesta por epitelio plano estratificado queratinizado, es:",
		correcta: "La epidermis",
		incorrectas: [
			"La dermis",
			"La hipodermis"
		]
	},
	{
		enunciado: "El estrato de la epidermis donde se produce la división celular constante es el:",
		correcta: "Estrato basal o germinativo",
		incorrectas: [
			"Estrato córneo",
			"Estrato granuloso"
		]
	},
	{
		enunciado: "Las células de la epidermis responsables de la producción del pigmento melamina son los:",
		correcta: "Melanocitos",
		incorrectas: [
			"Queratinocitos",
			"Células de Merkel"
		]
	},
	{
		enunciado: "¿Cuál de los siguientes estratos epidérmicos se encuentra únicamente en la piel gruesa (palmas y plantas)?",
		correcta: "Estrato lúcido",
		incorrectas: [
			"Estrato espinoso",
			"Estrato córneo"
		]
	},
	{
		enunciado: "La capa de la dermis más superficial que presenta proyecciones hacia la epidermis se llama:",
		correcta: "Dermis papilar",
		incorrectas: [
			"Dermis reticular",
			"Hipodermis"
		]
	},
	{
		enunciado: "La proteína fibrosa que otorga resistencia y dureza a la piel, pelo y uñas es:",
		correcta: "Queratina",
		incorrectas: [
			"Colágeno",
			"Elastina"
		]
	},
	{
		enunciado: "Las glándulas sudoríparas que se activan con el calor y se distribuyen por casi todo el cuerpo son:",
		correcta: "Glándulas ecrinas",
		incorrectas: [
			"Glándulas apocrinas",
			"Glándulas sebáceas"
		]
	},
	{
		enunciado: "Las células de la epidermis que participan en la respuesta inmunitaria capturando antígenos son:",
		correcta: "Células de Langerhans",
		incorrectas: [
			"Células de Merkel",
			"Melanocitos"
		]
	},
	{
		enunciado: "La hipodermis o tejido subcutáneo está compuesta principalmente por:",
		correcta: "Tejido adiposo y conectivo laxo",
		incorrectas: [
			"Tejido epitelial estratificado",
			"Cartílago hialino"
		]
	},
	{
		enunciado: "El músculo erector del pelo está compuesto por tejido:",
		correcta: "Muscular liso",
		incorrectas: [
			"Muscular estriado",
			"Conectivo denso"
		]
	},
	{
		enunciado: "Las glándulas sebáceas suelen desembocar en:",
		correcta: "El folículo piloso",
		incorrectas: [
			"La superficie cutánea directamente",
			"La dermis profunda únicamente"
		]
	},
	{
		enunciado: "La parte visible de la uña se denomina:",
		correcta: "Cuerpo o placa ungueal",
		incorrectas: [
			"Lúnula",
			"Eponiquio"
		]
	},
	{
		enunciado: "Los receptores sensoriales táctiles situados en las papilas dérmicas para el tacto fino son los:",
		correcta: "Corpúsculos de Meissner",
		incorrectas: [
			"Corpúsculos de Pacini",
			"Corpúsculos de Ruffini"
		]
	},
	{
		enunciado: "La dermis reticular se caracteriza por ser rica en:",
		correcta: "Fibras de colágeno entrelazadas y fibras elásticas",
		incorrectas: [
			"Células epiteliales muertas",
			"Tejido adiposo exclusivamente"
		]
	},
	{
		enunciado: "La coloración azulada de la piel por falta de oxígeno se denomina:",
		correcta: "Cianosis",
		incorrectas: [
			"Ictericia",
			"Eritema"
		]
	},
	{
		enunciado: "El estrato córneo está formado por:",
		correcta: "Múltiples capas de queratinocitos muertos y planos",
		incorrectas: [
			"Una sola capa de células columnares",
			"Células ricas en ADN activo"
		]
	},
	{
		enunciado: "Las glándulas apocrinas se localizan principalmente en:",
		correcta: "Axilas, región anogenital y aureolas",
		incorrectas: [
			"Palmas de las manos y plantas de los pies",
			"Frente y mejillas"
		]
	},
	{
		enunciado: "La función de la melanina es:",
		correcta: "Proteger el ADN de los queratinocitos frente a la radiación UV",
		incorrectas: [
			"Dar resistencia mecánica a la dermis",
			"Regular la temperatura corporal"
		]
	},
	{
		enunciado: "El 'eponiquio' de la uña es comúnmente conocido como:",
		correcta: "Cutícula",
		incorrectas: [
			"Matriz",
			"Lecho ungueal"
		]
	},
	{
		enunciado: "Los corpúsculos de Pacini son receptores especializados en detectar:",
		correcta: "Presión profunda y vibraciones",
		incorrectas: [
			"Calor",
			"Dolor agudo"
		]
	},
	{
		enunciado: "La síntesis de vitamina D comienza en la piel por acción de:",
		correcta: "La radiación ultravioleta B (UVB)",
		incorrectas: [
			"El calor corporal",
			"La secreción sebácea"
		]
	},
	{
		enunciado: "La renovación completa de la epidermis tarda aproximadamente:",
		correcta: "De 4 a 6 semanas",
		incorrectas: [
			"10 días",
			"6 meses"
		]
	},
	{
		enunciado: "¿Qué estructura es responsable de las huellas dactilares?",
		correcta: "Las crestas epidérmicas (reflejo de las papilas dérmicas)",
		incorrectas: [
			"El estrato granuloso",
			"La hipodermis"
		]
	},
	{
		enunciado: "Las células de Merkel se asocian con terminaciones nerviosas para la función de:",
		correcta: "Tacto y presión ligera",
		incorrectas: [
			"Termorregulación",
			"Fagocitosis"
		]
	},
	{
		enunciado: "La secreción de las glándulas sebáceas tiene propiedades:",
		correcta: "Lubricantes y antibacterianas",
		incorrectas: [
			"Ricas en proteínas para la nutrición cutánea",
			"Exclusivamente hormonales"
		]
	},
	{
		enunciado: "El albinismo se debe a:",
		correcta: "La incapacidad genética para producir melanina",
		incorrectas: [
			"La ausencia total de melanocitos",
			"Un exceso de carotenos"
		]
	},
	{
		enunciado: "La dermis es un tejido:",
		correcta: "Vascularizado e inervado",
		incorrectas: [
			"Avascular y sin nervios",
			"Epitelial puramente"
		]
	},
	{
		enunciado: "Las líneas de tensión o de Langer en la piel se deben a:",
		correcta: "La orientación de los haces de colágeno en la dermis",
		incorrectas: [
			"Los pliegues del estrato córneo",
			"La distribución de la grasa subcutánea"
		]
	},
	{
		enunciado: "La función termorreguladora de la piel se realiza mediante:",
		correcta: "Sudoración y vasodilatación/vasoconstricción dérmica",
		incorrectas: [
			"Descamación del estrato córneo",
			"Producción de sebo"
		]
	},
	{
		enunciado: "El pelo crece a partir de una zona de división celular llamada:",
		correcta: "Matriz del pelo",
		incorrectas: [
			"Tallo del pelo",
			"Corteza"
		]
	},
	{
		enunciado: "La quemadura de segundo grado se caracteriza por afectar a:",
		correcta: "Epidermis y parte de la dermis, con aparición de ampollas",
		incorrectas: [
			"Solo la epidermis, con eritema",
			"Todas las capas, con destrucción de nervios"
		]
	},
	{
		enunciado: "La zona blanquecina en forma de media luna en la base de la uña es:",
		correcta: "La lúnula",
		incorrectas: [
			"La raíz",
			"El hiponiquio"
		]
	},
	{
		enunciado: "Los gránulos de queratohialina son característicos del estrato:",
		correcta: "Granuloso",
		incorrectas: [
			"Espinoso",
			"Basal"
		]
	},
	{
		enunciado: "El caroteno es un pigmento de color:",
		correcta: "Anaranjado-amarillento",
		incorrectas: [
			"Marrón oscuro",
			"Rojizo"
		]
	},
	{
		enunciado: "La piel delgada carece de:",
		correcta: "Estrato lúcido y tiene folículos pilosos",
		incorrectas: [
			"Estrato córneo",
			"Glándulas sebáceas"
		]
	},
	{
		enunciado: "Las glándulas ceruminosas son glándulas sudoríparas modificadas situadas en:",
		correcta: "El conducto auditivo externo",
		incorrectas: [
			"Los párpados",
			"La nariz"
		]
	},
	{
		enunciado: "La pérdida de elasticidad de la piel con la edad se debe principalmente a:",
		correcta: "La disminución y alteración de las fibras de colágeno y elastina",
		incorrectas: [
			"El aumento del grosor de la epidermis",
			"La hiperactividad de las glándulas sebáceas"
		]
	},
	{
		enunciado: "El vello fetal fino y suave que recubre el cuerpo se llama:",
		correcta: "Lanugo",
		incorrectas: [
			"Vello",
			"Pelo terminal"
		]
	},
	{
		enunciado: "La técnica de administrar fármacos 'hipodérmicamente' significa inyectar en:",
		correcta: "El tejido subcutáneo",
		incorrectas: [
			"La epidermis",
			"El músculo profundo"
		]
	},
	{
		enunciado: "Los melanocitos transfieren la melamina a los queratinocitos mediante prolongaciones en un proceso de:",
		correcta: "Secreción citocrina",
		incorrectas: [
			"Exocitosis simple",
			"Difusión facilitada"
		]
	}
];