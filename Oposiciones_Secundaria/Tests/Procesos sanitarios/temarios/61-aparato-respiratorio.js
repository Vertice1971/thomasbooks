'use strict';

var PREGUNTAS = [
	{
		enunciado: "La estructura laríngea que impide el paso del alimento a la vía respiratoria durante la deglución es:",
		correcta: "La epiglotis",
		incorrectas: [
			"El cartílago tiroides",
			"La glotis"
		]
	},
	{
		enunciado: "El volumen de aire que entra y sale de los pulmones en una respiración normal en reposo se denomina:",
		correcta: "Volumen corriente (VC)",
		incorrectas: [
			"Volumen de reserva inspiratoria",
			"Capacidad vital"
		]
	},
	{
		enunciado: "¿Qué células alveolares son las responsables de la secreción del surfactante pulmonar?",
		correcta: "Neumocitos tipo II",
		incorrectas: [
			"Neumocitos tipo I",
			"Macrófagos alveolares"
		]
	},
	{
		enunciado: "La mayor parte del dióxido de carbono (CO2) se transporta en la sangre en forma de:",
		correcta: "Ión bicarbonato (HCO3-)",
		incorrectas: [
			"Disuelto físicamente en el plasma",
			"Carbaminohemoglobina"
		]
	},
	{
		enunciado: "El principal músculo responsable de la inspiración tranquila y normal es:",
		correcta: "El diafragma",
		incorrectas: [
			"Los intercostales internos",
			"El esternocleidomastoideo"
		]
	},
	{
		enunciado: "La membrana serosa que recubre directamente la superficie externa de los pulmones es:",
		correcta: "La pleura visceral",
		incorrectas: [
			"La pleura parietal",
			"El pericardio"
		]
	},
	{
		enunciado: "El lugar geométrico donde los bronquios, vasos y nervios entran y salen del pulmón se denomina:",
		correcta: "Hilio pulmonar",
		incorrectas: [
			"Vértice pulmonar",
			"Base pulmonar"
		]
	},
	{
		enunciado: "La presión intrapleural respecto a la presión atmosférica durante la respiración normal es:",
		correcta: "Siempre negativa (menor)",
		incorrectas: [
			"Siempre positiva (mayor)",
			"Igual a la atmosférica en la espiración"
		]
	},
	{
		enunciado: "El centro respiratorio que establece el ritmo básico de la respiración se localiza en:",
		correcta: "El bulbo raquídeo",
		incorrectas: [
			"La protuberancia",
			"El cerebelo"
		]
	},
	{
		enunciado: "La capacidad residual funcional (CRF) es la suma de:",
		correcta: "El volumen de reserva espiratoria más el volumen residual",
		incorrectas: [
			"El volumen corriente más el volumen residual",
			"La capacidad vital más el volumen residual"
		]
	},
	{
		enunciado: "La tráquea se divide en los dos bronquios principales a nivel de una cresta interna llamada:",
		correcta: "Carina",
		incorrectas: [
			"Ápex",
			"Cartílago cricoides"
		]
	},
	{
		enunciado: "¿Cuál es el principal estímulo químico que regula la ventilación en condiciones normales?",
		correcta: "El aumento de la PCO2 (hipercapnia)",
		incorrectas: [
			"La disminución de la PO2 (hipoxia)",
			"El aumento del pH sanguíneo"
		]
	},
	{
		enunciado: "El intercambio de gases entre los alvéolos y la sangre capilar se denomina:",
		correcta: "Respiración externa o hematosis",
		incorrectas: [
			"Respiración interna",
			"Ventilación colateral"
		]
	},
	{
		enunciado: "Los senos paranasales tienen como función, entre otras:",
		correcta: "Actuar como cámaras de resonancia para el habla",
		incorrectas: [
			"Sintetizar surfactante",
			"Realizar el intercambio de gases"
		]
	},
	{
		enunciado: "En la hemoglobina, el oxígeno se une específicamente a:",
		correcta: "El átomo de hierro del grupo hemo",
		incorrectas: [
			"Las cadenas de globina",
			"El grupo fosfato"
		]
	},
	{
		enunciado: "El espacio muerto anatómico se refiere a:",
		correcta: "El aire en las vías de conducción que no llega a los alvéolos",
		incorrectas: [
			"Los alvéolos que no están bien perfundidos",
			"El aire que queda en el pulmón tras una espiración forzada"
		]
	},
	{
		enunciado: "¿Cuántos lóbulos presenta el pulmón izquierdo humano?",
		correcta: "Dos",
		incorrectas: [
			"Tres",
			"Uno"
		]
	},
	{
		enunciado: "La Ley de Boyle aplicada a la respiración establece que:",
		correcta: "El volumen de un gas es inversamente proporcional a su presión",
		incorrectas: [
			"La presión total es la suma de las presiones parciales",
			"La solubilidad de un gas depende de su presión parcial"
		]
	},
	{
		enunciado: "La zona de la faringe que se comunica con el oído medio a través de las trompas de Eustaquio es:",
		correcta: "Nasofaringe",
		incorrectas: [
			"Orofaringe",
			"Laringofaringe"
		]
	},
	{
		enunciado: "La función de los cornetes nasales es:",
		correcta: "Crear turbulencias para calentar y filtrar el aire",
		incorrectas: [
			"Soportar el tabique nasal",
			"Detectar sustancias odoríferas únicamente"
		]
	},
	{
		enunciado: "La compliance o distensibilidad pulmonar se define como:",
		correcta: "El cambio de volumen por unidad de cambio de presión",
		incorrectas: [
			"La resistencia al flujo aéreo en los bronquios",
			"La velocidad de difusión a través de la membrana"
		]
	},
	{
		enunciado: "El efecto Bohr describe cómo:",
		correcta: "La afinidad de la hemoglobina por el O2 disminuye al bajar el pH",
		incorrectas: [
			"El CO2 se desplaza por la luz ultravioleta",
			"La presión arterial afecta a la frecuencia respiratoria"
		]
	},
	{
		enunciado: "Los bronquiolos se diferencian de los bronquios principalmente por:",
		correcta: "La ausencia de cartílago en sus paredes",
		incorrectas: [
			"La ausencia de músculo liso",
			"Tener un epitelio plano estratificado"
		]
	},
	{
		enunciado: "El volumen residual es:",
		correcta: "El aire que permanece en los pulmones tras una espiración forzada máxima",
		incorrectas: [
			"El aire que entra en una inspiración forzada",
			"El aire atrapado en la laringe"
		]
	},
	{
		enunciado: "¿Qué cartílago laríngeo forma la 'nuez de Adán'?",
		correcta: "Cartílago tiroides",
		incorrectas: [
			"Cartílago cricoides",
			"Cartílago aritenoides"
		]
	},
	{
		enunciado: "La barrera hematogaseosa tiene un grosor aproximado de:",
		correcta: "0,5 micrómetros",
		incorrectas: [
			"5 milímetros",
			"50 nanómetros"
		]
	},
	{
		enunciado: "La capacidad vital es la suma de:",
		correcta: "VC + VRI + VRE",
		incorrectas: [
			"VC + VR",
			"VRI + VRE + VR"
		]
	},
	{
		enunciado: "La inervación motora del diafragma depende del:",
		correcta: "Nervio frénico",
		incorrectas: [
			"Nervio vago",
			"Nervio glosofaríngeo"
		]
	},
	{
		enunciado: "En un individuo sano a nivel del mar, la saturación arterial de hemoglobina suele ser de:",
		correcta: "95-98%",
		incorrectas: [
			"70-75%",
			"100% siempre"
		]
	},
	{
		enunciado: "La espiración forzada es un proceso activo que requiere la contracción de:",
		correcta: "Músculos abdominales e intercostales internos",
		incorrectas: [
			"Músculo diafragma y escalenos",
			"Músculo trapecio"
		]
	},
	{
		enunciado: "La unidad anatómica del pulmón rodeada de tejido conectivo que contiene bronquiolos respiratorios se llama:",
		correcta: "Lobulillo pulmonar",
		incorrectas: [
			"Segmento broncopulmonar",
			"Ápice"
		]
	},
	{
		enunciado: "La enzima anhidrasa carbónica es fundamental para:",
		correcta: "La conversión rápida de CO2 y agua en ácido carbónico",
		incorrectas: [
			"La síntesis de surfactante",
			"La degradación de moco"
		]
	},
	{
		enunciado: "El reflejo de Hering-Breuer tiene como función:",
		correcta: "Impedir la sobreinsuflación pulmonar",
		incorrectas: [
			"Estimular el estornudo",
			"Aumentar la frecuencia cardíaca durante la apnea"
		]
	},
	{
		enunciado: "La zona respiratoria del árbol bronquial comienza en:",
		correcta: "Los bronquiolos respiratorios",
		incorrectas: [
			"Los bronquiolos terminales",
			"Los bronquios segmentarios"
		]
	},
	{
		enunciado: "¿Cuál de las siguientes estructuras no pertenece a la porción conductora?",
		correcta: "Sacos alveolares",
		incorrectas: [
			"Tráquea",
			"Bronquios"
		]
	},
	{
		enunciado: "El pH fisiológico de la sangre arterial es aproximadamente:",
		correcta: "7,4",
		incorrectas: [
			"7,0",
			"7,8"
		]
	},
	{
		enunciado: "La laringe se sitúa entre:",
		correcta: "La faringe y la tráquea",
		incorrectas: [
			"La cavidad nasal y la faringe",
			"La tráquea y los bronquios"
		]
	},
	{
		enunciado: "La hematosis se produce por un mecanismo de:",
		correcta: "Difusión simple",
		incorrectas: [
			"Transporte activo",
			"Ósmosis"
		]
	},
	{
		enunciado: "La resistencia de las vías aéreas está determinada principalmente por:",
		correcta: "El diámetro de los bronquiolos",
		incorrectas: [
			"La longitud de la tráquea",
			"La viscosidad del surfactante"
		]
	},
	{
		enunciado: "Los quimiorreceptores periféricos que detectan cambios en la PO2 se localizan en:",
		correcta: "Cuerpos carotídeos y aórticos",
		incorrectas: [
			"Hipotálamo posterior",
			"Ventrículos cerebrales"
		]
	}
];