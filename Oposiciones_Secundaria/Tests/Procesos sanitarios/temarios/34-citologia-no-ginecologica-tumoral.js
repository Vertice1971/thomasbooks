'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuál es el criterio citológico de malignidad más fiable en citología no ginecológica?",
		correcta: "Atipia nuclear (irregularidad de la membrana, hipercromasia y aclaramiento de cromatina)",
		incorrectas: [
			"Presencia de abundantes células en la muestra",
			"Cambio en la coloración del citoplasma de basófilo a acidófilo"
		]
	},
	{
		enunciado: "La 'diátesis tumoral' en un líquido seroso o esputo se define como:",
		correcta: "Fondo de la extensión con restos de necrosis, sangre degradada y detritus",
		incorrectas: [
			"La capacidad de las células tumorales de formar estructuras glandulares",
			"La presencia de linfocitos maduros rodeando a las células neoplásicas"
		]
	},
	{
		enunciado: "En la citología urinaria, el carcinoma urotelial de alto grado se caracteriza por:",
		correcta: "Células con alta relación núcleo/citoplasma, pleomorfismo y bordes nucleares irregulares",
		incorrectas: [
			"Células de gran tamaño con citoplasma abundante y núcleos pequeños excéntricos",
			"Presencia única de células en paraguas con binucleación"
		]
	},
	{
		enunciado: "El carcinoma de células pequeñas de pulmón presenta citológicamente:",
		correcta: "Células pequeñas, escaso citoplasma, amoldamiento nuclear y cromatina en 'sal y pimienta'",
		incorrectas: [
			"Grandes células con abundantes puentes intercelulares y queratina",
			"Células cilíndricas dispuestas en estructuras papilares complejas"
		]
	},
	{
		enunciado: "¿Qué hallazgo es característico del adenocarcinoma en un líquido pleural?",
		correcta: "Grupos tridimensionales de células (mórulas) con vacuolas de moco",
		incorrectas: [
			"Células aisladas con proyecciones citoplasmáticas en forma de cepillo",
			"Placas de células mesoteliales con ventanas intercelulares"
		]
	},
	{
		enunciado: "Los cuerpos de Psammoma (calcificaciones laminares) son frecuentes en:",
		correcta: "Carcinoma papilar de tiroides y cistoadenocarcinoma de ovario",
		incorrectas: [
			"Carcinoma microcítico de pulmón",
			"Linfoma no Hodgkin de células grandes"
		]
	},
	{
		enunciado: "En una PAAF de tiroides, el carcinoma papilar se identifica por:",
		correcta: "Inclusiones intranucleares citoplasmáticas (seudoinclusiones) y surcos nucleares",
		incorrectas: [
			"Abundante coloide fluido y macrófagos cargados de hemosiderina",
			"Población monomorfa de células de Hürthle sin atipia"
		]
	},
	{
		enunciado: "El mesotelioma maligno se diferencia de la hiperplasia mesotelial citológicamente por:",
		correcta: "Gran tamaño de los grupos celulares, macronucleolos y diátesis tumoral",
		incorrectas: [
			"La ausencia total de células mesoteliales en el líquido",
			"La presencia de células escamosas maduras queratinizadas"
		]
	},
	{
		enunciado: "Un criterio de malignidad en citología de ganglio linfático es:",
		correcta: "Población celular monomorfa (linfocitos de un solo estadio madurativo)",
		incorrectas: [
			"Presencia de centroblastos, inmunoblastos y linfocitos maduros",
			"Abundantes macrófagos con cuerpos teñibles"
		]
	},
	{
		enunciado: "Las células en 'anillo de sello' son típicas de:",
		correcta: "Adenocarcinoma mucinoso (frecuentemente gástrico metástasico)",
		incorrectas: [
			"Carcinoma espinocelular no queratinizante",
			"Seminoma testicular"
		]
	},
	{
		enunciado: "El carcinoma epidermoide de pulmón queratinizante muestra en la citología:",
		correcta: "Células de formas extrañas (en raqueta o renacuajo) con citoplasma naranja (OG-6)",
		incorrectas: [
			"Células pequeñas redondas con núcleos desnudos",
			"Grupos de células con bordes apicales ciliados"
		]
	},
	{
		enunciado: "En la citología urinaria, el hallazgo de células neoplásicas aisladas y pleomórficas suele indicar:",
		correcta: "Carcinoma urotelial in situ (CIS)",
		incorrectas: [
			"Pielonefritis aguda supurada",
			"Papiloma urotelial benigno"
		]
	},
	{
		enunciado: "¿Qué característica define al melanoma metastásico en citología?",
		correcta: "Células pleomórficas habitualmente aisladas con pigmento melánico intracitoplasmático",
		incorrectas: [
			"Formación de glándulas con moco extracelular abundante",
			"Células pequeñas con amoldamiento nuclear evidente"
		]
	},
	{
		enunciado: "El amoldamiento nuclear (molding) es un signo clásico de:",
		correcta: "Carcinomas de tipo neuroendocrino (como el microcítico)",
		incorrectas: [
			"Tumores estromales gastrointestinales",
			"Adenomas de glándula salival"
		]
	},
	{
		enunciado: "En una PAAF de páncreas, la presencia de células con macronucleolos y desorganización sugiere:",
		correcta: "Adenocarcinoma ductal de páncreas",
		incorrectas: [
			"Pancreatitis crónica fibrosante",
			"Islote de Langerhans hiperplásico"
		]
	},
	{
		enunciado: "La presencia de células de Reed-Sternberg en una citología ganglionar es diagnóstica de:",
		correcta: "Linfoma de Hodgkin",
		incorrectas: [
			"Linfoma folicular",
			"Sarcoidosis ganglionar"
		]
	},
	{
		enunciado: "Un osteosarcoma en PAAF de hueso mostraría:",
		correcta: "Células fusiformes o pleomórficas con presencia de osteoide denso",
		incorrectas: [
			"Láminas de cartílago hialino maduro sin atipia",
			"Población pura de osteoclastos normales"
		]
	},
	{
		enunciado: "¿Qué se entiende por 'canibalismo celular' en citología tumoral?",
		correcta: "Una célula tumoral que engloba a otra célula (fagocitosis celular)",
		incorrectas: [
			"La fragmentación del núcleo en múltiples micronúcleos",
			"La invasión de las células tumorales en los vasos linfáticos"
		]
	},
	{
		enunciado: "El carcinoma de células claras de riñón se identifica en PAAF por:",
		correcta: "Células con citoplasma muy vacuolado (claro) y nucleolos prominentes",
		incorrectas: [
			"Células con gránulos de queratohialina densos",
			"Células pequeñas con escaso citoplasma y sin nucleolo"
		]
	},
	{
		enunciado: "La presencia de abundantes mitosis atípicas (tripolares o multipolares) es un signo de:",
		correcta: "Malignidad de alto grado",
		incorrectas: [
			"Reparación tisular vigorosa",
			"Infección viral por Molusco contagioso"
		]
	},
	{
		enunciado: "El patrón en 'bala de cañón' en un líquido pleural sugiere:",
		correcta: "Metástasis de adenocarcinoma (frecuentemente mama u ovario)",
		incorrectas: [
			"Infección por micobacterias atípicas",
			"Reacción mesotelial a la insuficiencia cardíaca"
		]
	},
	{
		enunciado: "En el linfoma de Burkitt, las células presentan citológicamente:",
		correcta: "Citoplasma intensamente basófilo con vacuolas lipídicas",
		incorrectas: [
			"Núcleos en forma de trébol con cromatina densa",
			"Ausencia total de nucléolos visibles"
		]
	},
	{
		enunciado: "Un condrosarcoma en citología por PAAF se caracteriza por:",
		correcta: "Células pleomórficas en una matriz condroide irregular y metacromática",
		incorrectas: [
			"Población uniforme de adipocitos con núcleos periféricos",
			"Fondo hemático con abundantes osteoclastos"
		]
	},
	{
		enunciado: "El carcinoma medular de tiroides muestra citológicamente:",
		correcta: "Células aisladas o en nidos, plasmacitoides, con depósito de amiloide",
		incorrectas: [
			"Grupos papilares con vacuolas de grasa",
			"Células escamosas con perlas de queratina"
		]
	},
	{
		enunciado: "La presencia de macronucléolos 'rojos' o eosinófilos es muy sugestiva de:",
		correcta: "Adenocarcinoma o melanoma",
		incorrectas: [
			"Carcinoma microcítico",
			"Linfoma linfocítico"
		]
	},
	{
		enunciado: "En la citología de LCR, la presencia de 'blastos' indica:",
		correcta: "Infiltración por leucemia o linfoma de alto grado",
		incorrectas: [
			"Meningitis química postquirúrgica",
			"Degeneración normal de los plexos coroideos"
		]
	},
	{
		enunciado: "El tumor de Wilms (nefroblastoma) en PAAF muestra un componente de:",
		correcta: "Células blastematosas pequeñas, estroma y epitelio tubular inmaduro",
		incorrectas: [
			"Células claras ricas en glucógeno únicamente",
			"Oncocitos con abundantes mitocondrias"
		]
	},
	{
		enunciado: "¿Qué característica nuclear diferencia a las células malignas de las reactivas?",
		correcta: "Cromatina granular gruesa y distribución irregular",
		incorrectas: [
			"Presencia de doble nucleolo pequeño y redondo",
			"Núcleo de gran tamaño con bordes perfectamente lisos"
		]
	},
	{
		enunciado: "El carcinoma anaplásico de tiroides se presenta en citología como:",
		correcta: "Células gigantes pleomórficas, fusiformes y necrosis masiva",
		incorrectas: [
			"Células foliculares organizadas en microfolículos",
			"Células con núcleos en vidrio esmerilado"
		]
	},
	{
		enunciado: "La presencia de 'cuerpos de inclusión' en el núcleo de células de melanoma es:",
		correcta: "En realidad son pseudoinclusiones (invaginaciones del citoplasma)",
		incorrectas: [
			"Acúmulos de ADN viral",
			"Depósitos de calcio intracelular"
		]
	},
	{
		enunciado: "Un adenocarcinoma de páncreas en PAAF muestra típicamente:",
		correcta: "Desorganización de los grupos ductales y 'borramiento' de bordes celulares",
		incorrectas: [
			"Acinos perfectamente configurados con secreción serosa",
			"Células pequeñas con amoldamiento nuclear"
		]
	},
	{
		enunciado: "El seminoma testicular en PAAF presenta un fondo:",
		correcta: "Atigrado o en 'encaje' (tigroid background)",
		incorrectas: [
			"Limpio con abundantes espermatozoides",
			"Purulento con restos necróticos"
		]
	},
	{
		enunciado: "En el carcinoma espinocelular no queratinizante, las células son:",
		correcta: "Poligonales, con núcleos pleomórficos y citoplasma denso cianófilo",
		incorrectas: [
			"Muy alargadas con citoplasma intensamente naranja",
			"Pequeñas y redondas con núcleos desnudos"
		]
	},
	{
		enunciado: "La presencia de mucina extracelular abundante con escasas células atípicas sugiere:",
		correcta: "Carcinoma mucinoso (coloide)",
		incorrectas: [
			"Carcinoma adenoescamoso",
			"Sarcoma de Kaposi"
		]
	},
	{
		enunciado: "El linfoma difuso de células B grandes se caracteriza por:",
		correcta: "Células de tamaño 2-3 veces superior a un linfocito pequeño, con nucleolos",
		incorrectas: [
			"Población mixta de linfocitos y células plasmáticas",
			"Células pequeñas con núcleos hendidos (centrocitos)"
		]
	},
	{
		enunciado: "En la citología urinaria, los grupos papilares uroteliales sin atipia sugieren:",
		correcta: "Neoplasia urotelial papilar de bajo potencial de malignidad",
		incorrectas: [
			"Carcinoma urotelial de alto grado",
			"Litiasis renal obstructiva"
		]
	},
	{
		enunciado: "Las células tumorales de un cordoma muestran citológicamente:",
		correcta: "Células fisalíforas (grandes y muy vacuoladas)",
		incorrectas: [
			"Células pequeñas con gránulos de queratohialina",
			"Células fusiformes con bandas de contracción"
		]
	},
	{
		enunciado: "La diátesis tumoral 'granular' es típica de:",
		correcta: "Carcinomas invasores",
		incorrectas: [
			"Lesiones premalignas in situ",
			"Procesos inflamatorios agudos"
		]
	},
	{
		enunciado: "El tumor neuroendocrino (carcinoide) muestra citológicamente:",
		correcta: "Células monomorfas con cromatina en 'sal y pimienta'",
		incorrectas: [
			"Células con marcada pleomorfismo y macronucleolos",
			"Células escamosas con puentes intercelulares"
		]
	},
	{
		enunciado: "La presencia de células malignas en el LCR indica frecuentemente:",
		correcta: "Carcinomatosis meníngea",
		incorrectas: [
			"Absceso cerebral bacteriano",
			"Infarto cerebral extenso"
		]
	}
];