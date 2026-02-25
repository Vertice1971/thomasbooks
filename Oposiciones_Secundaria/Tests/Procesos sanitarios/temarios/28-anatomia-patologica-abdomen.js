'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué característica macroscópica define la cirrosis hepática en su fase establecida?",
		correcta: "Presencia de nódulos de regeneración rodeados de bandas de tejido fibroso",
		incorrectas: [
			"Aumento difuso del tamaño glandular con superficie lisa y amarillenta",
			"Presencia de múltiples quistes de contenido seroso en ambos lóbulos"
		]
	},
	{
		enunciado: "Un hígado con esteatosis macroscópica se caracteriza por ser:",
		correcta: "Aumentado de tamaño, de color amarillento y consistencia untuosa al corte",
		incorrectas: [
			"Reducido de volumen, de color verdoso y consistencia pétrea",
			"De tamaño normal, color rojo vinoso y superficie granular fina"
		]
	},
	{
		enunciado: "Las metástasis hepáticas masivas suelen presentar macroscópicamente:",
		correcta: "Múltiples nódulos blanquecinos con umbilicación central por necrosis",
		incorrectas: [
			"Una masa única encapsulada con contenido hemático fluyente",
			"Infiltración difusa que no altera la morfología externa del órgano"
		]
	},
	{
		enunciado: "La úlcera péptica gástrica benigna se identifica macroscópicamente por presentar:",
		correcta: "Bordes nítidos, no elevados, y fondo limpio con pliegues convergentes",
		incorrectas: [
			"Bordes irregulares, evertidos y sobreelevados con fondo necrótico",
			"Morfología polipoidea con pedículo corto y gran vascularización"
		]
	},
	{
		enunciado: "¿Cuál es el aspecto macroscópico típico del adenocarcinoma gástrico de tipo difuso (Linitis plástica)?",
		correcta: "Pared gástrica engrosada y rígida con pérdida de la distensibilidad",
		incorrectas: [
			"Masa exofítica de gran tamaño que ocupa la luz del antro pilórico",
			"Múltiples erosiones superficiales hemorrágicas en la mucosa fúndica"
		]
	},
	{
		enunciado: "La enfermedad de Crohn se caracteriza macroscópicamente en el intestino por:",
		correcta: "Afectación segmentaria (salteada) y aspecto de la mucosa en empedrado",
		incorrectas: [
			"Afectación continua desde el recto con pseudopólipos inflamatorios",
			"Dilatación masiva del colon con adelgazamiento extremo de la pared"
		]
	},
	{
		enunciado: "En la colitis ulcerosa, el hallazgo macroscópico predominante es:",
		correcta: "Afectación difusa y continua de la mucosa con ulceraciones superficiales",
		incorrectas: [
			"Presencia de fisuras profundas que atraviesan todas las capas de la pared",
			"Engrosamiento de la grasa mesentérica que envuelve el asa intestinal"
		]
	},
	{
		enunciado: "Un páncreas con pancreatitis aguda necrótica presenta macroscópicamente:",
		correcta: "Áreas de hemorragia intraparenquimatosa y focos de esteatonecrosis (saponificación)",
		incorrectas: [
			"Consistencia firme y fibrosa con dilatación del conducto de Wirsung",
			"Atrofia completa del parénquima con sustitución por tejido adiposo"
		]
	},
	{
		enunciado: "¿Qué hallazgo macroscópico sugiere un carcinoma de cabeza de páncreas?",
		correcta: "Masa firme, mal delimitada, que produce dilatación de la vía biliar extrahepática",
		incorrectas: [
			"Múltiples formaciones quísticas llenas de líquido seromucinoso",
			"Aumento difuso y edematoso de toda la glándula sin masas focales"
		]
	},
	{
		enunciado: "La colecistitis litiásica crónica muestra macroscópicamente una vesícula:",
		correcta: "De pared engrosada, fibrosa y blanquecina, con presencia de cálculos",
		incorrectas: [
			"Dilatada, de pared translúcida y llena de bilis de estasis clara",
			"Con mucosa aterciopelada y depósitos de colesterol (vesícula en fresa)"
		]
	},
	{
		enunciado: "El bazo en la congestión pasiva crónica (esplenomegalia congestiva) se presenta:",
		correcta: "Aumentado de tamaño, firme y de color rojo oscuro o violáceo",
		incorrectas: [
			"Pequeño, retraído y con cápsula arrugada (atrofia esplénica)",
			"De consistencia blanda, casi fluida, y coloración grisácea"
		]
	},
	{
		enunciado: "Un infarto esplénico macroscópico suele ser:",
		correcta: "De forma triangular o cuneiforme, pálido y con base hacia la cápsula",
		incorrectas: [
			"Circular, hemorrágico y localizado exclusivamente en el hilio",
			"Difuso, afectando a la totalidad del órgano de forma homogénea"
		]
	},
	{
		enunciado: "El divertículo de Meckel macroscópicamente se identifica como:",
		correcta: "Saco ciego en el borde antimesentérico del íleon terminal",
		incorrectas: [
			"Múltiples herniaciones de la mucosa a través de la capa muscular del colon",
			"Dilatación del ciego con comunicación anómala hacia el retroperitoneo"
		]
	},
	{
		enunciado: "Los pólipos adenomatosos vellosos del colon suelen ser macroscópicamente:",
		correcta: "Sésiles, de gran tamaño y con superficie papilar similar a una coliflor",
		incorrectas: [
			"Pediculados, pequeños, de superficie lisa y coloración rosada",
			"Múltiples excrecencias puntiformes de consistencia dura"
		]
	},
	{
		enunciado: "El carcinoma colorrectal de colon izquierdo suele presentarse como:",
		correcta: "Lesión anular y estenosante que produce una imagen en 'corazón de manzana'",
		incorrectas: [
			"Masa exofítica y fungoide que raramente obstruye la luz intestinal",
			"Engrosamiento difuso de la submucosa sin afectación de la luz"
		]
	},
	{
		enunciado: "En la apendicitis aguda gangrenosa, el apéndice se observa macroscópicamente:",
		correcta: "Friable, de color verde-negruzco y con restos de exudado purulento",
		incorrectas: [
			"Aumentado de longitud pero con serosa lisa y brillante",
			"Atrofiado, transformado en un cordón fibroso sólido"
		]
	},
	{
		enunciado: "La apariencia de 'hígado en nuez moscada' es macroscópicamente típica de:",
		correcta: "Congestión pasiva crónica por insuficiencia cardíaca derecha",
		incorrectas: [
			"Infiltración masiva por linfoma de Hodgkin",
			"Necrosis hepática masiva por intoxicación fúngica"
		]
	},
	{
		enunciado: "Un hemangioma cavernoso hepático se identifica macroscópicamente como:",
		correcta: "Nódulo bien delimitado, rojo-azulado, esponjoso y lleno de sangre",
		incorrectas: [
			"Lesión sólida, blanquecina y de consistencia similar al cartílago",
			"Masa amarillenta con una cicatriz central estrellada"
		]
	},
	{
		enunciado: "El linfoma intestinal macroscópico suele manifestarse como:",
		correcta: "Engrosamiento masivo de la pared con aspecto de 'carne de pescado'",
		incorrectas: [
			"Múltiples pequeñas úlceras de bordes geográficos",
			"Presencia de quistes aéreos en la submucosa (neumatosis)"
		]
	},
	{
		enunciado: "La peritonitis bacteriana aguda se reconoce macroscópicamente por:",
		correcta: "Serosa opaca, con depósitos de fibrina y presencia de líquido turbio o pus",
		incorrectas: [
			"Presencia de múltiples placas blanquecinas de consistencia pétrea",
			"Serosa brillante con petequias hemorrágicas aisladas"
		]
	},
	{
		enunciado: "Un bazo con múltiples nódulos blanquecinos distribuidos por la pulpa blanca recuerda a:",
		correcta: "Bazo en 'tarta de mijo' (tuberculosis miliar o linfoma)",
		incorrectas: [
			"Bazo en 'fresa' (colesterolosis esplénica)",
			"Bazo en 'porcelana' (calcificación capsular)"
		]
	},
	{
		enunciado: "¿Qué hallazgo macroscópico define a un insulinoma pancreático?",
		correcta: "Pequeño nódulo solitario, encapsulado y ricamente vascularizado",
		incorrectas: [
			"Masa infiltrante que invade el duodeno y el bazo",
			"Múltiples quistes rellenos de material sebáceo"
		]
	},
	{
		enunciado: "La obstrucción intestinal por vólvulo se identifica macroscópicamente por:",
		correcta: "Torsión de un asa intestinal sobre su mesenterio con compromiso vascular",
		incorrectas: [
			"Invaginación de un segmento intestinal dentro del segmento distal",
			"Presencia de una banda fibrosa que comprime extrínsecamente el asa"
		]
	},
	{
		enunciado: "El aspecto macroscópico de la 'colesterolosis' vesicular consiste en:",
		correcta: "Mucosa con finos puntos amarillentos sobre fondo rojizo (vesícula en fresa)",
		incorrectas: [
			"Pared vesicular calcificada que cruje al corte (vesícula en porcelana)",
			"Presencia de grandes masas de grasa en la capa serosa"
		]
	},
	{
		enunciado: "Un adenocarcinoma de la ampolla de Vater produce macroscópicamente:",
		correcta: "Ictericia obstructiva precoz por su localización anatómica",
		incorrectas: [
			"Ascitis masiva sin alteración de la vía biliar",
			"Hemorragia digestiva alta de origen arterial"
		]
	},
	{
		enunciado: "La invaginación intestinal macroscópica se observa como:",
		correcta: "Un segmento de intestino (intussusceptum) dentro de otro (intussuscipiens)",
		incorrectas: [
			"La salida de asas intestinales a través de un orificio herniario",
			"La dilatación del colon proximal a un segmento agangliónico"
		]
	},
	{
		enunciado: "El tumor estromal gastrointestinal (GIST) macroscópicamente suele ser:",
		correcta: "Una masa intramural redondeada que puede ulcerar la mucosa",
		incorrectas: [
			"Una lesión superficial puramente epitelial",
			"Un engrosamiento difuso de la muscular de la mucosa"
		]
	},
	{
		enunciado: "En la cirrosis biliar primaria, el hígado presenta macroscópicamente:",
		correcta: "Una coloración verdosa intensa (colestasis) y granulación fina",
		incorrectas: [
			"Grandes nódulos de más de 3 cm de diámetro (macronodular)",
			"Un aspecto totalmente normal hasta fases muy terminales"
		]
	},
	{
		enunciado: "¿Qué es el 'plastrón apendicular' macroscópico?",
		correcta: "Masa formada por el apéndice inflamado y las asas intestinales adyacentes pegadas",
		incorrectas: [
			"La perforación del apéndice hacia la cavidad peritoneal libre",
			"La presencia de un cálculo (fecalito) en la luz apendicular"
		]
	},
	{
		enunciado: "La necrosis hemorrágica central del hígado se observa macroscópicamente en:",
		correcta: "El estado de shock o insuficiencia cardíaca aguda severa",
		incorrectas: [
			"La hepatitis crónica por virus C sin tratamiento",
			"El adenoma hepático asociado a anticonceptivos"
		]
	},
	{
		enunciado: "Un bazo 'porcelanizado' se caracteriza por:",
		correcta: "Un engrosamiento hialino y blanquecino de la cápsula esplénica",
		incorrectas: [
			"La transformación del parénquima en tejido adiposo",
			"La presencia de múltiples infartos rojos subcapsulares"
		]
	},
	{
		enunciado: "El megacolon tóxico es una complicación macroscópica grave de:",
		correcta: "La colitis ulcerosa, con dilatación extrema y riesgo de perforación",
		incorrectas: [
			"El pólipo hiperplásico solitario de recto",
			"La diverticulosis colónica no inflamada"
		]
	},
	{
		enunciado: "El aspecto de 'carne de pescado' en una masa abdominal sugiere macroscópicamente:",
		correcta: "Sarcoma o linfoma de alto grado",
		incorrectas: [
			"Tumor benigno de origen mesenquimal (lipoma)",
			"Quiste hidatídico en fase de involución"
		]
	},
	{
		enunciado: "La esteatonecrosis pancreática se observa macroscópicamente como:",
		correcta: "Manchas blanquecinas opacas similares a gotas de cera o tiza",
		incorrectas: [
			"Áreas purpúreas de consistencia elástica",
			"Formaciones cavitadas llenas de gas"
		]
	},
	{
		enunciado: "Un hígado con enfermedad poliquística presenta macroscópicamente:",
		correcta: "Múltiples quistes de diversos tamaños que sustituyen al parénquima",
		incorrectas: [
			"Un único quiste de gran tamaño con vesículas hijas en su interior",
			"Pequeñas dilataciones de los conductos biliares hiliares"
		]
	},
	{
		enunciado: "El pseudoquiste pancreático macroscópico se diferencia del quiste verdadero por:",
		correcta: "Carecer de revestimiento epitelial, estando limitado por tejido fibroso",
		incorrectas: [
			"Tener un contenido sólido compuesto por restos de parénquima",
			"Localizarse siempre fuera de la cavidad abdominal"
		]
	},
	{
		enunciado: "La atrofia de las vellosidades en la enfermedad celíaca produce macroscópicamente:",
		correcta: "Mucosa duodenal aplanada, con aspecto de mosaico o 'empedrado' fino",
		incorrectas: [
			"Grandes pliegues mucosos hipertróficos que obstruyen la luz",
			"Presencia de múltiples adenomas tubulares vellosos"
		]
	},
	{
		enunciado: "Un bazo de gran tamaño (esplenomegalia masiva) de hasta 4 kg es típico de:",
		correcta: "Leucemia mieloide crónica o mielofibrosis",
		incorrectas: [
			"Mononucleosis infecciosa aguda",
			"Septicemia bacteriana fulminante"
		]
	},
	{
		enunciado: "El carcinoma hepatocelular fibrolamelar se caracteriza macroscópicamente por:",
		correcta: "Masa única en hígados no cirróticos con bandas fibrosas cruzadas",
		incorrectas: [
			"Pequeños nódulos múltiples distribuidos por todo el sistema portal",
			"Crecimiento exclusivo dentro de la luz de la vena cava inferior"
		]
	},
	{
		enunciado: "La presencia de aire en la pared del intestino (neumatosis intestinal) indica macroscópicamente:",
		correcta: "Isquemia intestinal o necrosis con producción de gas por bacterias",
		incorrectas: [
			"Un proceso normal de digestión de legumbres",
			"La presencia de un divertículo de Meckel perforado"
		]
	}
];