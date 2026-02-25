'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué hallazgo macroscópico define la hipertrofia concéntrica del ventrículo izquierdo?",
		correcta: "Aumento del espesor de la pared miocárdica con reducción del volumen de la cavidad",
		incorrectas: [
			"Aumento de la masa cardíaca con dilatación de la cavidad ventricular",
			"Adelgazamiento de la pared con presencia de tejido fibroso cicatricial"
		]
	},
	{
		enunciado: "En un infarto de miocardio de 3 a 7 días, ¿cuál es la apariencia morfológica característica?",
		correcta: "Zona central amarillenta reblandecida rodeada por un anillo hiperémico",
		incorrectas: [
			"Área deprimida, firme y blanquecina de consistencia nacarada",
			"Tejido de coloración rojo-azulada por estasis sanguínea aguda"
		]
	},
	{
		enunciado: "La presencia de vegetaciones friables, voluminosas y destructivas en las válvulas indica:",
		correcta: "Endocarditis infecciosa aguda",
		incorrectas: [
			"Endocarditis trombótica no bacteriana (marántica)",
			"Valvulopatía reumática crónica con fusión de comisuras"
		]
	},
	{
		enunciado: "La morfología de 'corazón velloso' es la expresión macroscópica de:",
		correcta: "Pericarditis fibrinosa por depósito de exudado en las hojas serosas",
		incorrectas: [
			"Hipertrofia de las trabéculas carnosas en miocardiopatía dilatada",
			"Presencia de múltiples metástasis pericárdicas en grano de mijo"
		]
	},
	{
		enunciado: "La estenosis mitral de origen reumático se reconoce macroscópicamente por:",
		correcta: "Engrosamiento fibroso de las valvas y fusión de comisuras en 'boca de pez'",
		incorrectas: [
			"Dilatación del anillo valvular con cuerdas tendinosas elongadas",
			"Presencia de nódulos de calcio aislados en la base de las valvas"
		]
	},
	{
		enunciado: "En la fase de hepatización gris de la neumonía lobar, el pulmón se presenta:",
		correcta: "Firme, seco, de color gris-pardo y consistencia similar al hígado",
		incorrectas: [
			"Rojo, pesado, de consistencia pastosa y con abundante líquido de edema",
			"Crepitante, de color rosáceo y con parénquima colapsado (atelectasia)"
		]
	},
	{
		enunciado: "El enfisema panacinar se caracteriza macroscópicamente por:",
		correcta: "Aumento uniforme de los espacios aéreos desde el bronquiolo respiratorio al alvéolo",
		incorrectas: [
			"Presencia de bullas de aire localizadas preferentemente en el ápex pulmonar",
			"Dilatación selectiva de la parte central del lobulillo con preservación distal"
		]
	},
	{
		enunciado: "Un tumor que tapiza la pleura formando una corteza blanquecina, densa y firme es un:",
		correcta: "Mesotelioma maligno",
		incorrectas: [
			"Carcinoma bronquioalveolar periférico",
			"Sarcoma de Ewing con afectación torácica"
		]
	},
	{
		enunciado: "La antracosis pulmonar macroscópica se identifica por:",
		correcta: "Pigmentación negruzca en el parénquima y en los ganglios linfáticos hiliares",
		incorrectas: [
			"Áreas de consolidación amarillenta con centros necróticos caseosos",
			"Presencia de cavidades de paredes finas rellenas de material purulento"
		]
	},
	{
		enunciado: "¿Qué signo macroscópico es típico del edema agudo de pulmón?",
		correcta: "Salida de líquido espumoso y rosado por los bronquios al corte",
		incorrectas: [
			"Presencia de moco espeso y adherente que obstruye la luz bronquial",
			"Parénquima pulmonar pálido, exangüe y de consistencia acartonada"
		]
	},
	{
		enunciado: "Un tromboembolismo pulmonar 'en silla de montar' se localiza en:",
		correcta: "La bifurcación de la arteria pulmonar principal",
		incorrectas: [
			"La desembocadura de las venas pulmonares en la aurícula izquierda",
			"El origen de las arterias bronquiales a partir de la aorta"
		]
	},
	{
		enunciado: "El infarto pulmonar macroscópico suele presentar una morfología:",
		correcta: "Hemorrágica, de base pleural y forma cuneiforme (triangular)",
		incorrectas: [
			"Anémica, de localización central y forma irregularmente estrellada",
			"Quística, con contenido gaseoso y paredes calcificadas"
		]
	},
	{
		enunciado: "Las bronquiectasias se identifican en el examen macroscópico como:",
		correcta: "Dilataciones cilíndricas o saculares de los bronquios que llegan hasta la pleura",
		incorrectas: [
			"Nódulos peribronquiales firmes con hialinización central",
			"Estrechamientos fibrosos de la luz bronquial con colapso distal"
		]
	},
	{
		enunciado: "El complejo primario de Ghon en la tuberculosis consiste macroscópicamente en:",
		correcta: "Foco parenquimatoso subpleural y linfadenopatía hiliar con necrosis caseosa",
		incorrectas: [
			"Presencia de múltiples cavitaciones (cavernas) en ambos vértices pulmonares",
			"Infiltrado intersticial difuso con formación de granulomas de cuerpo extraño"
		]
	},
	{
		enunciado: "Un aneurisma de aorta abdominal suele ser de tipo:",
		correcta: "Aterosclerótico y de morfología fusiforme",
		incorrectas: [
			"Sifilítico y localizado en la raíz de la aorta",
			"Congénito y de morfología sacular pequeña"
		]
	},
	{
		enunciado: "La miocardiopatía dilatada muestra macroscópicamente:",
		correcta: "Dilatación de las cuatro cavidades con paredes miocárdicas finas y flácidas",
		incorrectas: [
			"Rigidez extrema del miocardio con cavidades ventriculares pequeñas",
			"Engrosamiento asimétrico del tabique interventricular sin dilatación"
		]
	},
	{
		enunciado: "La presencia de placas ateromatosas complicadas en la aorta se reconoce por:",
		correcta: "Ulceraciones de la íntima, calcificación y trombos murales adheridos",
		incorrectas: [
			"Engrosamiento hialino de la capa media con pérdida de elasticidad",
			"Proliferación de tejido adiposo en la adventicia arterial"
		]
	},
	{
		enunciado: "El carcinoma microcítico de pulmón suele presentarse macroscópicamente como:",
		correcta: "Masa central, peribronquial, blanquecina y con temprana afectación ganglionar",
		incorrectas: [
			"Nódulo periférico solitario, bien delimitado y con cicatriz central",
			"Placa pleural extensa que invade la pared costal de forma difusa"
		]
	},
	{
		enunciado: "La pericarditis constrictiva se identifica macroscópicamente por:",
		correcta: "Un espacio pericárdico obliterado por fibrosis densa y a veces calcificada",
		incorrectas: [
			"La acumulación de más de 500 ml de líquido seroso claro",
			"La presencia de nódulos blanquecinos adheridos a la epicardio"
		]
	},
	{
		enunciado: "Un corazón con 'atrofia parda' presenta:",
		correcta: "Reducción de tamaño, tortuosidad coronaria y coloración marrón oscura",
		incorrectas: [
			"Aumento de volumen con depósitos amarillentos en el endocardio",
			"Morfología normal pero con consistencia pétrea por calcificación"
		]
	},
	{
		enunciado: "La disección aórtica (aneurisma disecante) se caracteriza macroscópicamente por:",
		correcta: "Un desgarro en la íntima y la creación de una falsa luz en la túnica media",
		incorrectas: [
			"Una dilatación global de todas las capas de la pared arterial",
			"La formación de un trombo oclusivo que distiende la luz del vaso"
		]
	},
	{
		enunciado: "¿Qué hallazgo macroscópico sugiere un cor pulmonale crónico?",
		correcta: "Hipertrofia y dilatación aislada del ventrículo derecho",
		incorrectas: [
			"Engrosamiento de la aurícula izquierda con estenosis mitral",
			"Presencia de vegetaciones en la válvula tricúspide"
		]
	},
	{
		enunciado: "En el pulmón, la atelectasia por reabsorción se observa como:",
		correcta: "Área deprimida, de color azul-violáceo y consistencia carnosa",
		incorrectas: [
			"Zona sobredistendida, pálida y que sobresale del parénquima",
			"Cavidad de pared gruesa rellena de material necrótico"
		]
	},
	{
		enunciado: "La estenosis aórtica calcificada senil se identifica por:",
		correcta: "Masas de calcio en los senos de Valsalva que impiden la apertura valvular",
		incorrectas: [
			"Fusión de las comisuras que da a la válvula aspecto de cúpula",
			"Destrucción de los bordes libres de las valvas por ulceración"
		]
	},
	{
		enunciado: "El mesotelioma pleural fibroso benigno suele ser:",
		correcta: "Un nódulo solitario, a menudo pediculado, unido a la pleura visceral",
		incorrectas: [
			"Una infiltración difusa de toda la cavidad pleural con derrame",
			"Un conjunto de quistes de contenido aéreo distribuidos por la pleura"
		]
	},
	{
		enunciado: "La presencia de sangre coagulada en el saco pericárdico se denomina:",
		correcta: "Hemopericardio",
		incorrectas: [
			"Quilotórax",
			"Hidropericardio"
		]
	},
	{
		enunciado: "Un infarto de miocardio antiguo (semanas o meses) se observa como:",
		correcta: "Una zona de color blanco-grisáceo, firme y de espesor reducido",
		incorrectas: [
			"Una masa gelatinosa de color pardo-rojizo con focos de pus",
			"Un área de hiperemia intensa con edema del tejido circundante"
		]
	},
	{
		enunciado: "La 'hepatización roja' de la neumonía se debe macroscópicamente a:",
		correcta: "Exudado masivo con eritrocitos, neutrófilos y fibrinógeno en los alvéolos",
		incorrectas: [
			"Congestión vascular masiva sin salida de elementos celulares",
			"Hemorragia alveolar difusa producida por un traumatismo torácico"
		]
	},
	{
		enunciado: "Las arterias coronarias en la cardiopatía isquémica suelen mostrar:",
		correcta: "Estenosis luminales por placas fibroadiposas calcificadas",
		incorrectas: [
			"Dilataciones aneurismáticas múltiples con paredes transparentes",
			"Engrosamiento uniforme de la adventicia por fibrosis hialina"
		]
	},
	{
		enunciado: "¿Qué característica define al adenocarcinoma de pulmón periférico?",
		correcta: "Localización subpleural, a menudo asociada a una cicatriz previa",
		incorrectas: [
			"Localización hiliar con obstrucción de un bronquio principal",
			"Crecimiento endobronquial en forma de coliflor"
		]
	},
	{
		enunciado: "La comunicación interauricular (CIA) tipo ostium secundum se sitúa en:",
		correcta: "La zona media del tabique, en la fosa oval",
		incorrectas: [
			"La parte inferior del tabique, junto a las válvulas AV",
			"La parte superior del tabique, cerca de la desembocadura de la cava"
		]
	},
	{
		enunciado: "El hamartoma pulmonar se identifica macroscópicamente como:",
		correcta: "Nódulo periférico bien delimitado con áreas de cartílago y grasa",
		incorrectas: [
			"Masa infiltrante que destruye el parénquima y los vasos hiliares",
			"Lesión cavitada con niveles hidroaéreos en su interior"
		]
	},
	{
		enunciado: "La rotura de la pared libre del ventrículo tras un infarto suele causar:",
		correcta: "Taponamiento cardíaco por hemopericardio agudo",
		incorrectas: [
			"Insuficiencia mitral aguda por disfunción de papilares",
			"Comunicación interventricular con cortocircuito izquierda-derecha"
		]
	},
	{
		enunciado: "La pleuritis purulenta (empiema) se caracteriza macroscópicamente por:",
		correcta: "Acumulación de exudado espeso amarillento en el espacio pleural",
		incorrectas: [
			"Presencia de líquido cetrino transparente con escasas células",
			"Engrosamiento pleural con aspecto de 'carne de pescado'"
		]
	},
	{
		enunciado: "La coartación de aorta suele localizarse macroscópicamente en:",
		correcta: "La zona de unión con el ductus arterioso (distal a la subclavia izquierda)",
		incorrectas: [
			"La raíz aórtica, afectando a los ostium coronarios",
			"La bifurcación ilíaca, impidiendo el flujo a miembros inferiores"
		]
	},
	{
		enunciado: "Un pulmón con estasis crónica (corazón izquierdo fallido) muestra:",
		correcta: "Induración parda por depósitos de hemosiderina y fibrosis",
		incorrectas: [
			"Atelectasia masiva de lóbulos inferiores por compresión",
			"Enfisema compensatorio en los lóbulos superiores"
		]
	},
	{
		enunciado: "El tumor carcinoide bronquial macroscópicamente se observa como:",
		correcta: "Masa polipoidea, muy vascularizada, que protruye en la luz bronquial",
		incorrectas: [
			"Área de consolidación difusa que simula una neumonía",
			"Lesión apical cavitada con infiltración de la pared torácica"
		]
	},
	{
		enunciado: "La arteritis de células gigantes afecta macroscópicamente a la aorta como:",
		correcta: "Engrosamiento de la pared y pérdida de elasticidad (aortitis)",
		incorrectas: [
			"Presencia de múltiples pequeños aneurismas saculares en la íntima",
			"Formación de trombos hialinos oclusivos en la luz del vaso"
		]
	},
	{
		enunciado: "En la valvulopatía aórtica bicúspide, el hallazgo principal es:",
		correcta: "Presencia de solo dos valvas funcionales, a menudo calcificadas",
		incorrectas: [
			"Atrofia total de las valvas con desaparición del anillo",
			"Engrosamiento mixoide de las valvas con prolapso hacia la aurícula"
		]
	},
	{
		enunciado: "La pericarditis tuberculosa se identifica por un exudado:",
		correcta: "Fibrinocaseoso o hemorrágico con engrosamiento masivo",
		incorrectas: [
			"Seroso transparente similar al de la insuficiencia cardíaca",
			"Purulento con abundantes cristales de colesterol"
		]
	}
];