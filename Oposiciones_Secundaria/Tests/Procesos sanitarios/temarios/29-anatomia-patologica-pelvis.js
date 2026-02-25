'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué hallazgo macroscópico caracteriza al carcinoma de células renales (hipernefroma)?",
		correcta: "Masa amarillenta bien delimitada con áreas de hemorragia, necrosis y quistificación",
		incorrectas: [
			"Infiltración difusa de la pelvis renal con aspecto blanquecino y firme",
			"Presencia de múltiples quistes de pared fina distribuidos por toda la corteza"
		]
	},
	{
		enunciado: "La pielonefritis crónica se identifica macroscópicamente por:",
		correcta: "Riñones contraídos con cicatrices corticales groseras y deformidad calicial",
		incorrectas: [
			"Aumento del tamaño renal con múltiples microabscesos en la superficie",
			"Corteza renal ensanchada y pálida con preservación de las pirámides"
		]
	},
	{
		enunciado: "En la hidronefrosis avanzada, el examen macroscópico del riñón muestra:",
		correcta: "Dilatación masiva del sistema colutor con atrofia marcada del parénquima",
		incorrectas: [
			"Presencia de depósitos de calcio en las papilas (nefrocalcinosis)",
			"Engrosamiento de la cápsula renal con adherencias al retroperitoneo"
		]
	},
	{
		enunciado: "¿Cuál es la apariencia macroscópica típica de un mioma uterino (leiomioma)?",
		correcta: "Masa sólida, blanquecina, bien delimitada y con superficie de corte arremolinada",
		incorrectas: [
			"Lesión quística con contenido hemorrágico (quiste de chocolate)",
			"Crecimiento exofítico friable con áreas de necrosis y mal olor"
		]
	},
	{
		enunciado: "La endometriosis ovárica se manifiesta macroscópicamente como:",
		correcta: "Quistes de pared fibrosa rellenos de material hemático espeso (quistes de chocolate)",
		incorrectas: [
			"Masas sólidas papilares que recubren la superficie externa del ovario",
			"Formaciones quísticas de gran tamaño con contenido seroso transparente"
		]
	},
	{
		enunciado: "Un teratoma quístico maduro de ovario (quiste dermoide) suele contener:",
		correcta: "Material sebáceo, pelos y, en ocasiones, estructuras dentarias o cartilaginosas",
		incorrectas: [
			"Únicamente líquido seroso de baja densidad y coloración cetrina",
			"Tejido sólido de aspecto sarcomatoso con invasión de la trompa"
		]
	},
	{
		enunciado: "La hiperplasia benigna de próstata (HBP) se localiza macroscópicamente en:",
		correcta: "La zona de transición (periuretral), comprimiendo la uretra",
		incorrectas: [
			"La zona periférica, cerca de la cápsula prostática",
			"Las vesículas seminales exclusivamente"
		]
	},
	{
		enunciado: "El carcinoma de próstata suele identificarse macroscópicamente como:",
		correcta: "Área de consistencia firme, arenosa y coloración amarillenta en la zona periférica",
		incorrectas: [
			"Nódulos elásticos y blanquecinos situados en el centro de la glándula",
			"Cavidades quísticas de paredes irregulares con contenido purulento"
		]
	},
	{
		enunciado: "Un seminoma testicular presenta macroscópicamente un aspecto:",
		correcta: "Homogéneo, lobulado, de color blanco-crema y sin necrosis ni hemorragia",
		incorrectas: [
			"Heterogéneo, con múltiples quistes y áreas extensas de sangrado",
			"Pequeño nódulo indurado con calcificación masiva central"
		]
	},
	{
		enunciado: "La cistitis hemorrágica se caracteriza macroscópicamente por:",
		correcta: "Mucosa vesical intensamente roja con focos de hemorragia puntiforme o difusa",
		incorrectas: [
			"Engrosamiento de la pared muscular sin cambios en la coloración de la mucosa",
			"Presencia de vegetaciones papilares blanquecinas que ocupan la luz"
		]
	},
	{
		enunciado: "El carcinoma urotelial de vejiga suele presentarse morfológicamente como:",
		correcta: "Lesiones papilares exofíticas o masas infiltrantes de base ancha",
		incorrectas: [
			"Úlceras de bordes netos similares a la úlcera péptica gástrica",
			"Quistes submucosos llenos de gas (cistitis enfisematosa)"
		]
	},
	{
		enunciado: "Un riñón poliquístico autosómico dominante (tipo adulto) se reconoce por:",
		correcta: "Aumento masivo de tamaño con parénquima sustituido por quistes de varios tamaños",
		incorrectas: [
			"Riñón de tamaño normal con un solo quiste gigante en el polo superior",
			"Presencia de pequeños quistes dispuestos radialmente en la corteza"
		]
	},
	{
		enunciado: "La torsión testicular produce macroscópicamente:",
		correcta: "Infarto hemorrágico masivo con testículo aumentado de tamaño y color negruzco",
		incorrectas: [
			"Atrofia isquémica pálida con consistencia pétrea del órgano",
			"Infiltración purulenta de la túnica vaginal"
		]
	},
	{
		enunciado: "¿Qué hallazgo macroscópico define a la adenomiosis uterina?",
		correcta: "Presencia de focos de endometrio en el espesor del miometrio, que se torna hipertrófico",
		incorrectas: [
			"Atrofia severa del endometrio con presencia de pólipos fibrosos",
			"Adherencias firmes entre la serosa uterina y el recto (fondo de saco de Douglas)"
		]
	},
	{
		enunciado: "El tumor de Wilms (nefroblastoma) es una masa renal macroscópica típica de:",
		correcta: "La infancia, presentándose como una masa solitaria, grande y bien delimitada",
		incorrectas: [
			"Pacientes de edad avanzada con antecedentes de tabaquismo",
			"Mujeres jóvenes asociada a la toma de anticonceptivos orales"
		]
	},
	{
		enunciado: "La nefrosclerosis benigna (asociada a hipertensión) muestra macroscópicamente:",
		correcta: "Superficie renal finamente granular ('en grano de cuero') y corteza adelgazada",
		incorrectas: [
			"Grandes cicatrices irregulares en los polos renales",
			"Nódulos amarillentos corticales de consistencia blanda"
		]
	},
	{
		enunciado: "Un cistoadenocarcinoma seroso de ovario suele presentar:",
		correcta: "Áreas sólidas y papilares que perforan la cápsula quística",
		incorrectas: [
			"Una pared lisa y fina con contenido líquido transparente",
			"Sustitución total del ovario por tejido graso maduro"
		]
	},
	{
		enunciado: "La litiasis renal (cálculo coraliforme) se localiza macroscópicamente en:",
		correcta: "La pelvis renal y los cálices, adoptando la forma del sistema colector",
		incorrectas: [
			"El interior de las pirámides medulares exclusivamente",
			"El espacio subcapsular comprimiendo la corteza"
		]
	},
	{
		enunciado: "El carcinoma de endometrio en el examen macroscópico suele ser:",
		correcta: "Una masa fungoide y friable que invade el miometrio",
		incorrectas: [
			"Un pólipo único con pedículo largo que asoma por el cérvix",
			"Un adelgazamiento extremo de la mucosa con pérdida de pliegues"
		]
	},
	{
		enunciado: "Un infarto renal antiguo se identifica macroscópicamente como:",
		correcta: "Cicatriz deprimida, blanquecina y de forma triangular",
		incorrectas: [
			"Nódulo prominente, rojo oscuro y de consistencia blanda",
			"Quiste de paredes calcificadas con contenido seroso"
		]
	},
	{
		enunciado: "La enfermedad inflamatoria pélvica (EIP) puede producir macroscópicamente:",
		correcta: "Salpingitis supurativa, abscesos tubo-ováricos y adherencias",
		incorrectas: [
			"Atrofia completa de los anejos sin signos inflamatorios",
			"Hipertrofia de los ligamentos redondos con calcificación"
		]
	},
	{
		enunciado: "Un riñón en 'herradura' es una malformación macroscópica que consiste en:",
		correcta: "Fusión de los polos inferiores de ambos riñones por delante de la aorta",
		incorrectas: [
			"Presencia de un tercer riñón funcional en la pelvis",
			"Rotación de 180 grados de ambos riñones sobre su eje hiliar"
		]
	},
	{
		enunciado: "La cistitis glandular macroscópica se observa como:",
		correcta: "Pequeñas formaciones nodulares o polipoideas en la mucosa vesical",
		incorrectas: [
			"Úlceras profundas que perforan la pared hacia el recto",
			"Dilatación masiva de la vejiga con pared transparente"
		]
	},
	{
		enunciado: "El corionangioma es un hallazgo macroscópico localizado en:",
		correcta: "La placenta (tumor vascular benigno)",
		incorrectas: [
			"El testículo de pacientes prepúberes",
			"La mucosa de la uretra femenina"
		]
	},
	{
		enunciado: "Un riñón afectado por amiloidosis presenta macroscópicamente:",
		correcta: "Aumento de tamaño, coloración pálida y consistencia firme o cerosa",
		incorrectas: [
			"Reducción extrema de tamaño con superficie irregular y hemorrágica",
			"Coloración verdosa intensa por depósito de pigmentos biliares"
		]
	},
	{
		enunciado: "La presencia de moco abundante en la cavidad peritoneal por rotura de un tumor ovárico se denomina:",
		correcta: "Pseudomixoma peritoneal",
		incorrectas: [
			"Ascitis serosa masiva",
			"Peritonitis química estéril"
		]
	},
	{
		enunciado: "Un adenocarcinoma de vejiga suele asociarse macroscópicamente a:",
		correcta: "Restos del uraco o metaplasia glandular extensa",
		incorrectas: [
			"Cistitis intersticial crónica (úlcera de Hunner)",
			"Divertículos vesicales congénitos de gran tamaño"
		]
	},
	{
		enunciado: "La necrosis papilar renal se identifica macroscópicamente por:",
		correcta: "Pérdida de sustancia o coloración pálida de los vértices de las pirámides",
		incorrectas: [
			"Hemorragia masiva de la corteza renal respetando la médula",
			"Presencia de quistes en la unión cortico-medular"
		]
	},
	{
		enunciado: "El carcinoma de células escamosas de cérvix puede presentarse como:",
		correcta: "Una lesión exofítica fungoide o una úlcera infiltrante en el exocérvix",
		incorrectas: [
			"Un quiste de Naboth de gran tamaño con contenido mucinoso",
			"Una hipertrofia uniforme del miometrio cervical"
		]
	},
	{
		enunciado: "Un testículo criptórquido macroscópicamente suele estar:",
		correcta: "Atrófico, pequeño y de consistencia firme",
		incorrectas: [
			"Hipertrófico por compensación funcional",
			"Transformado en una estructura quística multiloculada"
		]
	},
	{
		enunciado: "La mola hidatidiforme se reconoce macroscópicamente por:",
		correcta: "Vellosidades placentarias dilatadas similares a un racimo de uvas",
		incorrectas: [
			"Presencia de un feto con múltiples malformaciones graves",
			"Placenta de tamaño muy reducido con múltiples infartos"
		]
	},
	{
		enunciado: "El oncocitoma renal se distingue macroscópicamente por:",
		correcta: "Coloración caoba o marrón con una cicatriz central estrellada",
		incorrectas: [
			"Coloración amarillenta brillante con invasión de la vena renal",
			"Aspecto puramente quístico sin componente sólido"
		]
	},
	{
		enunciado: "La pielitis quística consiste macroscópicamente en:",
		correcta: "Pequeñas vesículas de contenido líquido en la mucosa de la pelvis renal",
		incorrectas: [
			"Presencia de grandes cálculos de cistina en el uréter",
			"Dilatación de los túbulos colectores en la médula renal"
		]
	},
	{
		enunciado: "Un tumor de saco vitelino testicular suele presentar macroscópicamente:",
		correcta: "Aspecto mucoide, gelatinoso y áreas de hemorragia",
		incorrectas: [
			"Consistencia pétrea con calcificaciones laminares",
			"Una cápsula fibrosa muy gruesa sin vasos visibles"
		]
	},
	{
		enunciado: "La hipernefrosis litiásica produce macroscópicamente:",
		correcta: "Destrucción del parénquima por presión y posibles infecciones añadidas",
		incorrectas: [
			"Aumento de la capacidad de filtración del riñón contralateral",
			"Desplazamiento del riñón hacia el hipocondrio opuesto"
		]
	},
	{
		enunciado: "La malacoplaquia vesical se identifica macroscópicamente por:",
		correcta: "Placas blandas, amarillentas y ligeramente elevadas en la mucosa",
		incorrectas: [
			"Pérdida total del epitelio de transición con exposición del músculo",
			"Engrosamiento difuso de la pared vesical por amiloide"
		]
	},
	{
		enunciado: "Un fibroma ovárico es macroscópicamente:",
		correcta: "Masa sólida, blanca, muy firme y habitualmente unilateral",
		incorrectas: [
			"Tumor quístico con material sebáceo y dientes",
			"Pequeña lesión hemorrágica en la superficie peritoneal"
		]
	},
	{
		enunciado: "La orquitis granulomatosa idiopática muestra macroscópicamente:",
		correcta: "Aumento de tamaño y consistencia del testículo que simula un tumor",
		incorrectas: [
			"Presencia de múltiples quistes rellenos de espermatozoides",
			"Testículo pequeño y blando con exudado purulento"
		]
	},
	{
		enunciado: "El carcinoma de pene suele localizarse macroscópicamente en:",
		correcta: "El glande o el prepucio, como una lesión verrucosa o ulcerada",
		incorrectas: [
			"El cuerpo cavernoso distal sin afectar a la piel",
			"El meato urinario exclusivamente, obstruyendo el flujo"
		]
	},
	{
		enunciado: "Un riñón hipoplásico macroscópicamente es:",
		correcta: "Pequeño pero con estructura y número de cálices normales",
		incorrectas: [
			"De tamaño normal pero con ausencia total de nefronas",
			"Un riñón que presenta una gran cicatriz por infarto previo"
		]
	}
];