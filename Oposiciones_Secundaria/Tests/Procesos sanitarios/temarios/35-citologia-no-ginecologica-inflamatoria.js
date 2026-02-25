'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuál es el signo citológico más precoz de la muerte celular por degeneración?",
		correcta: "Picnosis nuclear (condensación de la cromatina)",
		incorrectas: [
			"Cariolisis (disolución del núcleo)",
			"Cariorrexis (fragmentación nuclear)"
		]
	},
	{
		enunciado: "La presencia de abundantes polimorfonucleares neutrófilos en un esputo sugiere:",
		correcta: "Inflamación aguda o infección bacteriana",
		incorrectas: [
			"Proceso alérgico o infestación parasitaria",
			"Insuficiencia cardíaca congestiva crónica"
		]
	},
	{
		enunciado: "En la inflamación crónica, la población celular predominante en la citología es:",
		correcta: "Linfocitos, células plasmáticas e histiocitos",
		incorrectas: [
			"Neutrófilos y eosinófilos",
			"Células escamosas queratinizadas"
		]
	},
	{
		enunciado: "Los cambios celulares reactivos o reparativos se caracterizan citológicamente por:",
		correcta: "Aumento del tamaño nuclear con nucleolos prominentes y cromatina fina",
		incorrectas: [
			"Reducción del tamaño celular con núcleos hipercromáticos e irregulares",
			"Pérdida total del citoplasma y presencia de núcleos desnudos pleomórficos"
		]
	},
	{
		enunciado: "¿Qué hallazgo citológico es característico de la infección por Herpes Simple?",
		correcta: "Células multinucleadas con núcleos en 'vidrio esmerilado' y amoldamiento",
		incorrectas: [
			"Células con inclusiones citoplasmáticas en 'ojo de buey'",
			"Células escamosas con halo perinuclear y bi-nucleación"
		]
	},
	{
		enunciado: "La vacuolización citoplasmática en células de descamación suele indicar:",
		correcta: "Degeneración celular por hipoxia o daño químico",
		incorrectas: [
			"Síntesis activa de proteínas estructurales",
			"Fase de mitosis celular acelerada"
		]
	},
	{
		enunciado: "En un líquido pleural, la presencia de abundantes eosinófilos (más del 10%) se asocia a:",
		correcta: "Neumotórax, hemotórax o reacciones de hipersensibilidad",
		incorrectas: [
			"Tuberculosis pleural primaria",
			"Mesotelioma maligno epitelioide"
		]
	},
	{
		enunciado: "Los macrófagos cargados de hemosiderina (siderófagos) en citología respiratoria indican:",
		correcta: "Hemorragia alveolar previa",
		incorrectas: [
			"Infección fúngica activa",
			"Inhalación masiva de polvo de carbón"
		]
	},
	{
		enunciado: "La metaplasia escamosa bronquial es una respuesta adaptativa que citológicamente muestra:",
		correcta: "Células poligonales de citoplasma denso que sustituyen al epitelio ciliado",
		incorrectas: [
			"Células cilíndricas que aumentan el número de sus cilios",
			"Células glandulares que segregan moco de baja densidad"
		]
	},
	{
		enunciado: "La cariolisis se define en citología como:",
		correcta: "Pérdida de la afinidad tintorial del núcleo hasta su desaparición",
		incorrectas: [
			"División del núcleo en dos partes iguales",
			"Fusión de los nucleolos en una masa única"
		]
	},
	{
		enunciado: "En la inflamación granulomatosa, las células epitelioides derivan de:",
		correcta: "Macrófagos activados",
		incorrectas: [
			"Linfocitos T colaboradores",
			"Fibroblastos del estroma"
		]
	},
	{
		enunciado: "La presencia de cristales de Charcot-Leyden en el esputo se asocia con:",
		correcta: "Asma bronquial (degradación de eosinófilos)",
		incorrectas: [
			"Neumonía lobar por neumococo",
			"Carcinoma bronquioalveolar"
		]
	},
	{
		enunciado: "Las células gigantes de tipo cuerpo extraño se caracterizan por:",
		correcta: "Núcleos numerosos dispuestos de forma anárquica en el citoplasma",
		incorrectas: [
			"Núcleos dispuestos en herradura en la periferia celular (Langhans)",
			"Un único núcleo gigante con múltiples nucleolos"
		]
	},
	{
		enunciado: "Un exudado inflamatorio en una cavidad serosa presenta típicamente:",
		correcta: "Alta celularidad y alta concentración de proteínas (>3 g/dL)",
		incorrectas: [
			"Escasa celularidad y baja densidad de proteínas",
			"Ausencia total de fibrina y restos celulares"
		]
	},
	{
		enunciado: "En la citología urinaria, la cistitis por Poliomavirus (virus BK) muestra:",
		correcta: "Células 'señuelo' (decoy cells) con grandes inclusiones intranucleares basófilas",
		incorrectas: [
			"Células escamosas con cuerpos de inclusión citoplasmáticos ácidos",
			"Cristales de fosfato amónico magnésico"
		]
	},
	{
		enunciado: "La presencia de detritus celulares y restos nucleares (polvo nuclear) es típica de:",
		correcta: "Necrosis tisular",
		incorrectas: [
			"Metaplasia inmadura",
			"Hiperplasia simple"
		]
	},
	{
		enunciado: "¿Qué indica la presencia de células de Langhans en una PAAF de ganglio?",
		correcta: "Sugiere fuertemente tuberculosis o sarcoidosis",
		incorrectas: [
			"Es diagnóstica de linfoma de Hodgkin",
			"Indica una linfadenitis reactiva inespecífica"
		]
	},
	{
		enunciado: "La 'amoldabilidad nuclear' en procesos benignos es característica de:",
		correcta: "Infecciones virales (como el virus del Herpes)",
		incorrectas: [
			"Degeneración vacuolar por fármacos",
			"Metaplasia intestinal gástrica"
		]
	},
	{
		enunciado: "En citología, la anfofilia citoplasmática se refiere a:",
		correcta: "Afinidad simultánea por colorantes ácidos y básicos por alteración del pH",
		incorrectas: [
			"Ausencia total de tinción en el citoplasma",
			"Presencia de pigmento endógeno color ocre"
		]
	},
	{
		enunciado: "La radioterapia provoca cambios degenerativos consistentes en:",
		correcta: "Citomegalia y nucleomegalia manteniendo la relación N/C",
		incorrectas: [
			"Aumento marcado de la relación núcleo-citoplasma",
			"Aparición de múltiples mitosis atípicas"
		]
	},
	{
		enunciado: "En la citología urinaria, la Malakoplakia se caracteriza por:",
		correcta: "Macrófagos con cuerpos de Michaelis-Gutmann (concreciones calcificadas)",
		incorrectas: [
			"Células epiteliales con inclusiones de glucógeno",
			"Presencia masiva de Schistosoma haematobium"
		]
	},
	{
		enunciado: "Las espirales de Curschmann en el moco bronquial son indicativas de:",
		correcta: "Obstrucción de pequeñas vías aéreas (frecuente en asma)",
		incorrectas: [
			"Presencia de hongos del género Aspergillus",
			"Carcinoma de células escamosas"
		]
	},
	{
		enunciado: "¿Qué indica el hallazgo de cuerpos de azufre en una PAAF de región cervical?",
		correcta: "Infección por Actinomyces",
		incorrectas: [
			"Degeneración quística de la tiroides",
			"Metástasis de un carcinoma de colon"
		]
	},
	{
		enunciado: "La degeneración hidrópica citológicamente se manifiesta como:",
		correcta: "Grandes vacuolas claras que desplazan el núcleo",
		incorrectas: [
			"Acúmulo de lípidos en el aparato de Golgi",
			"Condensación de los filamentos de queratina"
		]
	},
	{
		enunciado: "En un BAS, la presencia de numerosos macrófagos con vacuolas lipídicas sugiere:",
		correcta: "Neumonía lipoidea",
		incorrectas: [
			"Proteinosis alveolar",
			"Silicosis pulmonar"
		]
	},
	{
		enunciado: "La regeneración epitelial en la mucosa gástrica puede confundirse con neoplasia por:",
		correcta: "La presencia de macronucleolos prominentes en núcleos grandes",
		incorrectas: [
			"La pérdida total de la cohesión celular",
			"La presencia de pigmento de antracosis"
		]
	},
	{
		enunciado: "El fondo 'atigrado' en la PAAF de glándula salival es sugestivo de:",
		correcta: "Tumor de Warthin (fondo linfoide y detritus granular)",
		incorrectas: [
			"Carcinoma quístico adenoide",
			"Mucocele simple"
		]
	},
	{
		enunciado: "En la tiroiditis de Hashimoto, el hallazgo citológico clave es:",
		correcta: "Abundantes linfocitos y células de Hürthle (oncocitos)",
		incorrectas: [
			"Coloide fluido muy abundante",
			"Células gigantes tipo Langhans exclusivamente"
		]
	},
	{
		enunciado: "La presencia de detritus inflamatorio en una PAAF de nódulo tiroideo puede ocultar:",
		correcta: "Un carcinoma anaplásico con necrosis masiva",
		incorrectas: [
			"Un bocio multinodular normofuncionante",
			"Una tiroiditis de Quervain"
		]
	},
	{
		enunciado: "En el líquido cefalorraquídeo, la pleocitosis neutrofílica indica:",
		correcta: "Meningitis bacteriana aguda",
		incorrectas: [
			"Infiltración por leucemia linfoblástica",
			"Esclerosis múltiple"
		]
	},
	{
		enunciado: "Los cuerpos de psammoma en procesos benignos pueden verse en:",
		correcta: "Endosalpingiosis o inflamación crónica peritoneal",
		incorrectas: [
			"Adenoma pleomorfo de parótida",
			"Infarto esplénico"
		]
	},
	{
		enunciado: "La atipia nuclear debida a deficiencia de vitamina B12 o ácido fólico produce:",
		correcta: "Macrocitosis y núcleos agrandados con cromatina pálida",
		incorrectas: [
			"Microcitosis e hipercromasia nuclear intensa",
			"Fragmentación del citoplasma en múltiples vesículas"
		]
	},
	{
		enunciado: "La necrosis de licuefacción es típica de:",
		correcta: "Infecciones bacterianas piogénicas y abscesos",
		incorrectas: [
			"Infartos anémicos en órganos sólidos",
			"Degeneración de tumores cartilaginosos"
		]
	},
	{
		enunciado: "La presencia de moco 'sucio' y restos vegetales en un esputo indica:",
		correcta: "Contaminación orofaríngea o aspiración bronquial",
		incorrectas: [
			"Cáncer de pulmón avanzado",
			"Infección por micobacterias"
		]
	},
	{
		enunciado: "La hiperplasia de células mesoteliales en derrames crónicos puede mostrar:",
		correcta: "Multinucleación y proyecciones vellosas en la membrana",
		incorrectas: [
			"Pérdida de la relación núcleo-citoplasma",
			"Núcleos en anillo de sello"
		]
	},
	{
		enunciado: "¿Qué indica la presencia de abundantes células plasmáticas en una PAAF de ganglio?",
		correcta: "Estimulación antigénica crónica o sífilis",
		incorrectas: [
			"Infección viral aguda por gripe",
			"Linfoma de Burkitt"
		]
	},
	{
		enunciado: "El exudado proteináceo 'espumoso' en el lavado broncoalveolar es característico de:",
		correcta: "Infección por Pneumocystis jirovecii",
		incorrectas: [
			"Edema agudo de pulmón cardiogénico",
			"Carcinoma de células escamosas"
		]
	},
	{
		enunciado: "La presencia de cuerpos de inclusiones citoplasmáticas eosinófilas en células uroteliales se denomina:",
		correcta: "Cuerpos de inclusión de Melamed-Wolinska",
		incorrectas: [
			"Cuerpos de Negri",
			"Cuerpos de Councilman"
		]
	},
	{
		enunciado: "En la inflamación aguda severa, la 'picnosis' de los neutrófilos da lugar a:",
		correcta: "Linfocitoides (neutrófilos condensados que simulan linfocitos)",
		incorrectas: [
			"Células gigantes multinucleadas",
			"Células de sombra de Gumprecht"
		]
	},
	{
		enunciado: "La esteatosis hepática se manifiesta en citología por:",
		correcta: "Vacuolas lipídicas nítidas que desplazan el núcleo del hepatocito",
		incorrectas: [
			"Pigmento de lipofuscina granular fino",
			"Cariorrexis generalizada en toda la extensión"
		]
	}
];