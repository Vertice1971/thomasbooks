'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué elemento celular en el esputo garantiza que la muestra procede del tracto respiratorio inferior?",
		correcta: "Macrófagos alveolares con pigmento (siderófagos o cargados de carbón)",
		incorrectas: [
			"Células escamosas superficiales con núcleos picnóticos",
			"Abundantes neutrófilos segmentados y moco"
		]
	},
	{
		enunciado: "El epitelio normal que reviste los grandes bronquios y se observa en BAS es:",
		correcta: "Cilíndrico pseudoestratificado ciliado",
		incorrectas: [
			"Escamoso estratificado no queratinizado",
			"Cúbico simple con microvellosidades apicales"
		]
	},
	{
		enunciado: "Las células caliciformes respiratorias se identifican citológicamente por:",
		correcta: "Citoplasma vacuolado repleto de mucina y núcleo basal",
		incorrectas: [
			"Presencia de cilios en el borde apical y núcleo central",
			"Forma aplanada con queratina densa"
		]
	},
	{
		enunciado: "¿Cuál es la función de los cilios en las células bronquiales normales?",
		correcta: "Transporte del moco y partículas hacia la orofaringe",
		incorrectas: [
			"Aumentar la superficie de absorción de oxígeno",
			"Anclaje de las células a la membrana basal"
		]
	},
	{
		enunciado: "En la citología urinaria, las células de la capa superficial del urotelio se denominan:",
		correcta: "Células en paraguas o de Dogiel",
		incorrectas: [
			"Células de reserva",
			"Células pavimentosas"
		]
	},
	{
		enunciado: "Las células en paraguas normales se caracterizan por:",
		correcta: "Ser de gran tamaño, frecuentemente multinucleadas y con citoplasma denso",
		incorrectas: [
			"Ser pequeñas, redondas y con nucleolos muy prominentes",
			"Presentar cilios vibrátiles en su superficie luminal"
		]
	},
	{
		enunciado: "El recubrimiento normal de las cavidades serosas está constituido por:",
		correcta: "Células mesoteliales",
		incorrectas: [
			"Células endoteliales",
			"Células sinoviales"
		]
	},
	{
		enunciado: "Las células mesoteliales en un líquido seroso normal suelen aparecer como:",
		correcta: "Células aisladas con bordes nítidos y 'ventanas' intercelulares",
		incorrectas: [
			"Sincitios de bordes borrosos y núcleos superpuestos",
			"Células en anillo de sello con moco intracitoplasmático"
		]
	},
	{
		enunciado: "En una PAAF de tiroides normal, el hallazgo predominante es:",
		correcta: "Coloide abundante y grupos de células foliculares en panal de abeja",
		incorrectas: [
			"Células de Hürthle y linfocitos en centros germinales",
			"Material proteináceo con cuerpos de Psammoma"
		]
	},
	{
		enunciado: "Las células foliculares tiroideas normales presentan:",
		correcta: "Núcleos redondos, pequeños y regulares con citoplasma escaso",
		incorrectas: [
			"Núcleos con surcos longitudinales y pseudoinclusiones",
			"Macronucleolos y aclaramiento de la cromatina"
		]
	},
	{
		enunciado: "En el líquido cefalorraquídeo (LCR) normal, la celularidad es:",
		correcta: "Muy escasa (menos de 5 células/µl), principalmente linfocitos",
		incorrectas: [
			"Rica en polimorfonucleares y células plasmáticas",
			"Compuesta por placas de células escamosas"
		]
	},
	{
		enunciado: "Las células de los plexos coroideos en el LCR se observan como:",
		correcta: "Pequeños grupos de células cúbicas de morfología uniforme",
		incorrectas: [
			"Células gigantes multinucleadas con pigmento",
			"Células de microglía con prolongaciones dendríticas"
		]
	},
	{
		enunciado: "En la citología de glándula salival normal, los acinos serosos se disponen en:",
		correcta: "Grupos tridimensionales compactos con citoplasma granular",
		incorrectas: [
			"Láminas monocapa de células claras",
			"Conductos largos con epitelio escamoso queratinizado"
		]
	},
	{
		enunciado: "Los conductos de las glándulas salivales en citología se identifican por:",
		correcta: "Células cúbicas dispuestas en hileras o estructuras tubulares",
		incorrectas: [
			"Células fusiformes con núcleos picnóticos",
			"Presencia de moco extracelular denso"
		]
	},
	{
		enunciado: "La presencia de cristales de fosfato triple en orina normal suele indicar:",
		correcta: "Orinas alcalinas, a menudo sin significación patológica inmediata",
		incorrectas: [
			"Cistitis tuberculosa activa",
			"Carcinoma urotelial de alto grado"
		]
	},
	{
		enunciado: "¿Qué componente es normal en un frotis gástrico por cepillado?",
		correcta: "Células cilíndricas mucosecretoras dispuestas en empalizada",
		incorrectas: [
			"Células caliciformes (metaplasia intestinal)",
			"Fibras musculares estriadas"
		]
	},
	{
		enunciado: "En la citología respiratoria, los cuerpos de Creola representan:",
		correcta: "Hiperplasia de células bronquiales (hallazgo reactivo frecuente)",
		incorrectas: [
			"Metástasis de adenocarcinoma",
			"Infecciones por Citomegalovirus"
		]
	},
	{
		enunciado: "La presencia de espermatozoides en el sedimento urinario masculino es:",
		correcta: "Un hallazgo normal por contaminación fisiológica",
		incorrectas: [
			"Signo patognomónico de prostatitis",
			"Indicador de infertilidad secundaria"
		]
	},
	{
		enunciado: "En un BAS normal, los neumocitos tipo II se identifican como:",
		correcta: "Células cúbicas aisladas con citoplasma vacuolado",
		incorrectas: [
			"Células planas muy largas que recubren los alvéolos",
			"Células con cilios muy largos y gruesos"
		]
	},
	{
		enunciado: "El coloide tiroideo normal en la tinción de Papanicolaou se observa como:",
		correcta: "Material transparente o ligeramente verdoso con 'cracks' (fracturas)",
		incorrectas: [
			"Material granular de color azul intenso",
			"Depósitos de calcio concéntricos"
		]
	},
	{
		enunciado: "En un frotis de esófago normal, el epitelio predominante es:",
		correcta: "Escamoso estratificado no queratinizado",
		incorrectas: [
			"Glandular de tipo fúndico",
			"Cilíndrico con ribete en cepillo"
		]
	},
	{
		enunciado: "Las células de la capa basal del urotelio son:",
		correcta: "Pequeñas, redondas y con alta relación núcleo/citoplasma",
		incorrectas: [
			"Grandes y aplanadas con núcleos picnóticos",
			"Multinucleadas y con citoplasma vacuolado"
		]
	},
	{
		enunciado: "En el líquido sinovial normal, la celularidad es:",
		correcta: "Muy baja, compuesta por escasos sinoviocitos y mononucleares",
		incorrectas: [
			"Muy alta, con predominio de neutrófilos",
			"Rica en cristales de urato sódico"
		]
	},
	{
		enunciado: "¿Qué se observa en una PAAF de ganglio linfático normal?",
		correcta: "Población linfoide polimorfa con predominio de linfocitos maduros",
		incorrectas: [
			"Población monomorfa de linfoblastos",
			"Sustitución del tejido por adipocitos"
		]
	},
	{
		enunciado: "Los histiocitos en los líquidos serosos tienen como función:",
		correcta: "Fagocitosis de restos celulares y material extraño",
		incorrectas: [
			"Producción de líquido pleural",
			"Síntesis de colágeno intersticial"
		]
	},
	{
		enunciado: "En el esputo, las células del epitelio bucal se distinguen por:",
		correcta: "Ser escamosas, grandes, con núcleos pequeños y citoplasma transparente",
		incorrectas: [
			"Tener cilios y núcleos basales",
			"Presentar gránulos de queratohialina"
		]
	},
	{
		enunciado: "El fondo de una citología de LCR normal debe ser:",
		correcta: "Limpio, sin sangre ni detritus",
		incorrectas: [
			"Turbio, con fibrina abundante",
			"Rojo, por presencia constante de hematíes"
		]
	},
	{
		enunciado: "Las células de la granulosa en un quiste folicular ovárico normal son:",
		correcta: "Pequeñas, uniformes y dispuestas en grupos cohesivos",
		incorrectas: [
			"Grandes y con marcada atipia nuclear",
			"Fusiformes con abundante colágeno"
		]
	},
	{
		enunciado: "En una citología de mama (secreción), los macrófagos espumosos indican:",
		correcta: "Limpieza de conductos (frecuente en cambios fibroquísticos)",
		incorrectas: [
			"Carcinoma ductal in situ",
			"Infección por micobacterias"
		]
	},
	{
		enunciado: "Las células ductales pancreáticas normales se disponen en:",
		correcta: "Placas monocapa con núcleos regulares",
		incorrectas: [
			"Acúmulos desorganizados con diátesis tumoral",
			"Estructuras en anillo de sello"
		]
	},
	{
		enunciado: "En el sedimento urinario, los cristales de oxalato cálcico tienen forma de:",
		correcta: "Sobre de carta o pesas de gimnasia",
		incorrectas: [
			"Ataúd o prismas triangulares",
			"Agujas finas agrupadas en haces"
		]
	},
	{
		enunciado: "La presencia de moco hialino en el esputo es:",
		correcta: "Normal, sirve para atrapar partículas inhaladas",
		incorrectas: [
			"Siempre patológica e indica fibrosis quística",
			"Un artefacto producido por la tinción"
		]
	},
	{
		enunciado: "En la PAAF de próstata normal, las células acinares son:",
		correcta: "Cúbicas o cilíndricas bajas con núcleos basales uniformes",
		incorrectas: [
			"Escamosas con perlas de queratina",
			"Células de gran tamaño con nucleolos rojos"
		]
	},
	{
		enunciado: "Los cuerpos amiláceos en la citología prostática son:",
		correcta: "Estructuras laminares redondas normales por condensación de secreción",
		incorrectas: [
			"Depósitos de amiloide sistémico",
			"Huevos de parásitos del tracto urinario"
		]
	},
	{
		enunciado: "En la citología nasal normal, predominan:",
		correcta: "Células cilíndricas ciliadas y caliciformes",
		incorrectas: [
			"Células basales queratinizadas",
			"Linfocitos y eosinófilos exclusivamente"
		]
	},
	{
		enunciado: "Las células mesoteliales reactivas (no neoplásicas) muestran:",
		correcta: "Aumento leve del tamaño nuclear pero manteniendo bordes lisos",
		incorrectas: [
			"Pérdida de la cohesión celular",
			"Hipercromasia extrema y mitosis atípicas"
		]
	},
	{
		enunciado: "En una PAAF de bazo normal se encontrarían:",
		correcta: "Esplenocitos y células de la pulpa roja y blanca",
		incorrectas: [
			"Células foliculares tiroideas metástasicas",
			"Láminas de cartílago hialino"
		]
	},
	{
		enunciado: "Los 'núcleos desnudos' en una citología ganglionar normal corresponden a:",
		correcta: "Linfocitos que han perdido el citoplasma por fragilidad mecánica",
		incorrectas: [
			"Células tumorales malignas",
			"Células epiteliales de recubrimiento"
		]
	},
	{
		enunciado: "En el líquido ascítico normal, el recuento de hematíes debe ser:",
		correcta: "Muy bajo o nulo, salvo traumatismo de la punción",
		incorrectas: [
			"Constantemente elevado por la presión intraabdominal",
			"Superior al recuento de glóbulos blancos"
		]
	},
	{
		enunciado: "La presencia de flora bacteriana tipo Lactobacilos en orina femenina suele ser:",
		correcta: "Contaminación vaginal normal",
		incorrectas: [
			"Signo de infección urinaria grave",
			"Efecto de la quimioterapia"
		]
	}
];