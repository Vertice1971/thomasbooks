'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué característica macroscópica es fundamental para sospechar la malignidad de un melanoma pigmentado?",
		correcta: "Asimetría, bordes irregulares y variabilidad de color en la lesión",
		incorrectas: [
			"Superficie lisa, brillante y de coloración homogénea rosada",
			"Presencia de un pedículo largo con base de implantación estrecha"
		]
	},
	{
		enunciado: "El carcinoma basocelular suele presentarse macroscópicamente como:",
		correcta: "Pápula perlada con telangiectasias y posible ulceración central (ulcus rodens)",
		incorrectas: [
			"Masa de crecimiento rápido con abundante producción de queratina",
			"Mancha eritematosa descamativa de bordes mal definidos"
		]
	},
	{
		enunciado: "Una fractura ósea se denomina 'conminuta' cuando macroscópicamente se observa:",
		correcta: "La fragmentación del hueso en múltiples trozos pequeños",
		incorrectas: [
			"Una línea de fractura única que no llega a separar los extremos",
			"La salida del extremo óseo a través de una solución de continuidad en la piel"
		]
	},
	{
		enunciado: "La osteomielitis crónica se identifica macroscópicamente por la presencia de:",
		correcta: "Secuestro óseo (fragmento necrótico) envuelto por un involucro de hueso nuevo",
		incorrectas: [
			"Engrosamiento uniforme de la cortical sin formación de pus",
			"Sustitución total de la médula ósea por tejido adiposo maduro"
		]
	},
	{
		enunciado: "El osteosarcoma convencional presenta macroscópicamente una morfología de:",
		correcta: "Masa destructiva que rompe la cortical y eleva el periostio (triángulo de Codman)",
		incorrectas: [
			"Nódulo pequeño bien delimitado rodeado de un nido de hueso esclerótico",
			"Crecimiento exofítico en forma de hongo con capuchón cartilaginoso"
		]
	},
	{
		enunciado: "¿Qué hallazgo macroscópico caracteriza a la artrosis (enfermedad articular degenerativa)?",
		correcta: "Erosión del cartílago articular, eburneación ósea y presencia de osteofitos",
		incorrectas: [
			"Presencia de un pannus sinovial que recubre y destruye la articulación",
			"Anquilosis ósea completa con desaparición del espacio articular"
		]
	},
	{
		enunciado: "Un lipoma de partes blandas se reconoce macroscópicamente por ser:",
		correcta: "Masa amarillenta, lobulada, blanda y bien encapsulada",
		incorrectas: [
			"Masa grisácea, infiltrante y con áreas de necrosis hemorrágica",
			"Lesión quística rellena de material mucoide translúcido"
		]
	},
	{
		enunciado: "La apariencia de 'carne de pescado' en un tumor de partes blandas sugiere:",
		correcta: "Un sarcoma (tumor mesenquimal maligno)",
		incorrectas: [
			"Una miositis osificante en fase de resolución",
			"Un fibroma desmoide de crecimiento lento"
		]
	},
	{
		enunciado: "El queratoacantoma se diferencia macroscópicamente del carcinoma espinocelular por:",
		correcta: "Su crecimiento rápido y presencia de un cráter central lleno de queratina",
		incorrectas: [
			"Su localización exclusiva en mucosas y zonas no expuestas al sol",
			"La ausencia total de bordes sobreelevados en la lesión"
		]
	},
	{
		enunciado: "Un condroma (tumor cartilaginoso benigno) se observa macroscópicamente como:",
		correcta: "Masa de aspecto azulado, translúcido y consistencia firme-elástica",
		incorrectas: [
			"Área de rarefacción ósea con contenido hemático fluyente",
			"Proliferación de espículas óseas dispuestas de forma anárquica"
		]
	},
	{
		enunciado: "La gota tofácea se caracteriza macroscópicamente por:",
		correcta: "Depósitos de material blanquecino y calcáreo (uratos) en tejidos periarticulares",
		incorrectas: [
			"Hemorragia intraarticular masiva con destrucción de los ligamentos",
			"Presencia de múltiples pequeños quistes de líquido sinovial"
		]
	},
	{
		enunciado: "En la enfermedad de Paget ósea, el hueso macroscópicamente se presenta:",
		correcta: "Engrosado, deformado y con una arquitectura trabecular grosera y desorganizada",
		incorrectas: [
			"Extremadamente fino y frágil con múltiples microfracturas",
			"De coloración azulada por depósito excesivo de sales de cobre"
		]
	},
	{
		enunciado: "El carcinoma espinocelular cutáneo suele presentarse macroscópicamente como:",
		correcta: "Placa eritematosa, costrosa o nodular con tendencia a la queratinización",
		incorrectas: [
			"Nódulo subcutáneo móvil sin afectación de la epidermis",
			"Lesión pigmentada de color azul oscuro y bordes regulares"
		]
	},
	{
		enunciado: "La miositis osificante macroscópica muestra:",
		correcta: "Una masa firme en el músculo con una periferia ósea y centro blando",
		incorrectas: [
			"Atrofia muscular completa con sustitución por colágeno hialino",
			"Presencia de gas en el interior de los fascículos musculares"
		]
	},
	{
		enunciado: "Un quiste de Baker se localiza macroscópicamente en:",
		correcta: "El hueco poplíteo, por distensión de una bursa o hernia sinovial",
		incorrectas: [
			"La cara anterior de la tibia, bajo el ligamento rotuliano",
			"El interior del canal medular de los huesos largos"
		]
	},
	{
		enunciado: "El aspecto macroscópico de la necrosis avascular de la cabeza femoral es:",
		correcta: "Área de hueso subcondral amarillenta y cuneiforme con colapso de la superficie",
		incorrectas: [
			"Hipertrofia de la cabeza femoral con formación de múltiples quistes aéreos",
			"Fusión completa de la cabeza femoral con el acetábulo"
		]
	},
	{
		enunciado: "Un dermatofibroma se identifica macroscópicamente como:",
		correcta: "Nódulo dérmico pequeño, firme, de color pardo y signo de la depresión positivo",
		incorrectas: [
			"Lesión vesicular llena de líquido seroso distribuida en dermatomas",
			"Placa verrucosa de gran tamaño localizada en plantas de los pies"
		]
	},
	{
		enunciado: "El osteocondroma se caracteriza macroscópicamente por:",
		correcta: "Excrecencia ósea unida a la metáfisis por un pedículo y cubierta de cartílago",
		incorrectas: [
			"Destrucción lítica del cuerpo vertebral con colapso posterior",
			"Masa de tejido fibroso que sustituye la cavidad medular"
		]
	},
	{
		enunciado: "La artritis reumatoide avanzada muestra macroscópicamente:",
		correcta: "Desviación cubital, nódulos subcutáneos y destrucción articular con pannus",
		incorrectas: [
			"Conservación perfecta de la movilidad a pesar de la inflamación",
			"Aparición de manchas violáceas en la piel periarticular"
		]
	},
	{
		enunciado: "Un sarcoma de Ewing macroscópicamente suele presentarse como:",
		correcta: "Masa blanda e invasiva en la diáfisis de huesos largos con reacción en 'piel de cebolla'",
		incorrectas: [
			"Pequeño nódulo calcificado en las falanges de las manos",
			"Tumor de crecimiento exofítico limitado a la epífisis distal"
		]
	},
	{
		enunciado: "¿Qué hallazgo macroscópico define a la gangrena seca?",
		correcta: "Tejido negro, seco, retraído y bien delimitado del tejido sano",
		incorrectas: [
			"Tejido edematoso, con ampollas y olor fétido por infección bacteriana",
			"Presencia de burbujas de gas en el espesor del tejido muscular"
		]
	},
	{
		enunciado: "El tumor de células gigantes del hueso se localiza macroscópicamente en:",
		correcta: "La epífisis de huesos largos tras el cierre del cartílago de crecimiento",
		incorrectas: [
			"La cortical de la diáfisis de los huesos cortos del carpo",
			"El interior de los huesos planos del cráneo exclusivamente"
		]
	},
	{
		enunciado: "La lepra lepromatosa macroscópicamente produce en la piel:",
		correcta: "Nódulos y placas (lepromas) que pueden dar la 'facies leonina'",
		incorrectas: [
			"Únicas manchas hipocrómicas con pérdida total de sensibilidad",
			"Grandes ampollas de contenido purulento en tronco y extremidades"
		]
	},
	{
		enunciado: "Un hemangioma cutáneo infantil ('en fresa') se observa como:",
		correcta: "Placa roja brillante, sobreelevada y de consistencia blanda",
		incorrectas: [
			"Mancha de color vino rosado que no desaparece con el tiempo",
			"Nódulo profundo de color azulado y consistencia pétrea"
		]
	},
	{
		enunciado: "La osteoporosis macroscópica se caracteriza por:",
		correcta: "Adelgazamiento de las trabéculas y de la cortical con aumento de la porosidad",
		incorrectas: [
			"Presencia de hueso excesivamente mineralizado y muy denso",
			"Engrosamiento de las epífisis con incurvación de los huesos largos"
		]
	},
	{
		enunciado: "Un fibrosarcoma macroscópicamente muestra un patrón de corte en:",
		correcta: "Espina de pescado (espina de arenque) por la disposición de los fascículos",
		incorrectas: [
			"Mosaico de colores debido a la presencia de múltiples pigmentos",
			"Cápsula de cebolla por capas concéntricas de tejido adiposo"
		]
	},
	{
		enunciado: "La psoriasis macroscópicamente presenta lesiones tipo:",
		correcta: "Placas eritematosas cubiertas por escamas blanquecinas nacaradas",
		incorrectas: [
			"Pápulas umbilicadas de aspecto vítreo y centro deprimido",
			"Erosiones lineales causadas por el rascado intenso"
		]
	},
	{
		enunciado: "El rabdomiosarcoma macroscópico de tipo botrioide se presenta como:",
		correcta: "Masas polipoideas con aspecto de racimo de uvas",
		incorrectas: [
			"Nódulos duros y calcificados en el espesor del músculo",
			"Úlceras de fondo necrótico en la fascia profunda"
		]
	},
	{
		enunciado: "Un encondroma macroscópicamente se identifica por:",
		correcta: "Masa cartilaginosa en el interior de la cavidad medular de huesos pequeños",
		incorrectas: [
			"Crecimiento de tejido óseo fuera de los límites del esqueleto",
			"Fractura patológica con formación de abundante callo óseo"
		]
	},
	{
		enunciado: "La sinovitis vellonodular pigmentada muestra macroscópicamente:",
		correcta: "Sinovial con proyecciones vellosas y coloración parda por hemosiderina",
		incorrectas: [
			"Líquido articular transparente con ausencia de células inflamatorias",
			"Destrucción total de los meniscos con sustitución por calcio"
		]
	},
	{
		enunciado: "El xantoma cutáneo se reconoce macroscópicamente por:",
		correcta: "Pápulas o nódulos amarillentos formados por acumulación de lípidos",
		incorrectas: [
			"Manchas de color café con leche de bordes irregulares",
			"Vesículas agrupadas con base eritematosa y prurito"
		]
	},
	{
		enunciado: "La necrosis grasa traumática de la piel se observa macroscópicamente como:",
		correcta: "Nódulo firme y blanquecino que puede simular una neoplasia",
		incorrectas: [
			"Área de licuefacción purulenta con fiebre asociada",
			"Mancha violácea persistente que no palidece a la presión"
		]
	},
	{
		enunciado: "El granuloma piogénico macroscópicamente es:",
		correcta: "Nódulo rojo, friable y sangrante, a menudo tras un traumatismo mínimo",
		incorrectas: [
			"Lesión plana de color marrón oscuro y crecimiento muy lento",
			"Quiste epidérmico con contenido de queratina maloliente"
		]
	},
	{
		enunciado: "Un quiste sinovial (ganglión) se localiza típicamente en:",
		correcta: "Dorso de la muñeca, conectado con la vaina tendinosa o cápsula",
		incorrectas: [
			"Planta del pie, asociado a una hiperqueratosis severa",
			"Interior de los grandes senos venosos craneales"
		]
	},
	{
		enunciado: "La micosis fungoide (linfoma T cutáneo) presenta una fase macroscópica de:",
		correcta: "Placa, eccema y finalmente fase tumoral con grandes masas",
		incorrectas: [
			"Únicamente pequeñas pústulas que curan sin dejar cicatriz",
			"Despigmentación total de la piel en áreas fotoexpuestas"
		]
	},
	{
		enunciado: "El osteoma osteoide macroscópicamente presenta un 'nidus' que es:",
		correcta: "Un núcleo central pequeño, rojizo y menor de 2 cm",
		incorrectas: [
			"Una gran cavidad llena de pus y restos de médula ósea",
			"Una zona de cartílago hialino que invade la articulación"
		]
	},
	{
		enunciado: "La calcinosis cutis se identifica macroscópicamente por:",
		correcta: "Nódulos pétreos blanquecinos por depósito de sales de calcio en la dermis",
		incorrectas: [
			"Áreas de piel extremadamente fina y transparente con vasos visibles",
			"Presencia de vello excesivo en zonas inusuales del cuerpo"
		]
	},
	{
		enunciado: "El sarcoma de Kaposi macroscópicamente muestra:",
		correcta: "Máculas, placas o nódulos de color violáceo o rojizo",
		incorrectas: [
			"Pápulas de color piel con una depresión central umbilicada",
			"Grandes masas de tejido adiposo que deforman la extremidad"
		]
	},
	{
		enunciado: "La miositis supurativa (piomiositis) se caracteriza por:",
		correcta: "Presencia de abscesos intramusculares con destrucción de fibras",
		incorrectas: [
			"Osificación progresiva de los tendones de inserción",
			"Atrofia muscular por denervación motora"
		]
	},
	{
		enunciado: "Un queloide es una lesión macroscópica consistente en:",
		correcta: "Cicatriz exuberante que sobrepasa los límites de la herida original",
		incorrectas: [
			"Cicatriz deprimida y atrófica secundaria a un acné severo",
			"Tejido de granulación normal que cierra una úlcera tórpida"
		]
	}
];