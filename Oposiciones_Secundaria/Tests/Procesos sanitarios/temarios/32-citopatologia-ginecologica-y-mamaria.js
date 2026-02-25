'use strict';

var PREGUNTAS = [
	{
		enunciado: "En el Sistema Bethesda, ¿qué término sustituye a la antigua nomenclatura de Displasia Leve o CIN I?",
		correcta: "Lesión Intraepitelial Escamosa de Bajo Grado (LSIL)",
		incorrectas: [
			"Lesión Intraepitelial Escamosa de Alto Grado (HSIL)",
			"Atipia de Células Escamosas de Significado Incierto (ASC-US)"
		]
	},
	{
		enunciado: "¿Cuál es el signo citológico patognomónico de la infección por el Virus del Papiloma Humano (VPH)?",
		correcta: "Koilocitosis (halo perinuclear claro y atipia nuclear)",
		incorrectas: [
			"Presencia de núcleos en 'vidrio esmerilado'",
			"Aparición de cuerpos de Psammoma en el frotis"
		]
	},
	{
		enunciado: "Las células de la metaplasia escamosa del cérvix se caracterizan citológicamente por:",
		correcta: "Ser células poligonales con citoplasma denso y prolongaciones aracniformes",
		incorrectas: [
			"Ser células de gran tamaño con citoplasma vacuolado y núcleo excéntrico",
			"Presentar una queratinización intensa con núcleos picnóticos"
		]
	},
	{
		enunciado: "Un frotis vaginal con predominio de células basales y parabasales es característico de:",
		correcta: "Menopausia (estado de atrofia hormonal)",
		incorrectas: [
			"Fase ovulatoria del ciclo menstrual",
			"Tratamiento con anticonceptivos orales combinados"
		]
	},
	{
		enunciado: "¿Qué microorganismo se identifica citológicamente por la presencia de 'clue cells' o células clave?",
		correcta: "Gardnerella vaginalis",
		incorrectas: [
			"Trichomonas vaginalis",
			"Actinomyces israelii"
		]
	},
	{
		enunciado: "En el Sistema Bethesda, las siglas ASC-H hacen referencia a:",
		correcta: "Células escamosas atípicas que no permiten descartar una lesión de alto grado",
		incorrectas: [
			"Células escamosas atípicas de significado incierto",
			"Células glandulares atípicas de origen endocervical"
		]
	},
	{
		enunciado: "La presencia de grupos tridimensionales de células con núcleos hipercromáticos y superpuestos sugiere:",
		correcta: "Lesión Intraepitelial Escamosa de Alto Grado (HSIL)",
		incorrectas: [
			"Cambios celulares reactivos asociados a inflamación",
			"Efecto citopático por virus del herpes simple"
		]
	},
	{
		enunciado: "En la citología mamaria, un fibroadenoma suele presentar macroscópicamente:",
		correcta: "Placas de células epiteliales en 'asta de reno' y núcleos desnudos bipolares",
		incorrectas: [
			"Células tumorales aisladas con pleomorfismo nuclear severo",
			"Abundante material necrótico con detritus celulares"
		]
	},
	{
		enunciado: "¿Cuál es la característica citológica fundamental del carcinoma ductal infiltrante de mama?",
		correcta: "Pérdida de la cohesión celular y marcada atipia nuclear",
		incorrectas: [
			"Presencia exclusiva de células mioepiteliales sin atipia",
			"Formación de quistes con contenido líquido proteináceo"
		]
	},
	{
		enunciado: "La categoría C3 en el sistema de informe de citología mamaria corresponde a:",
		correcta: "Atipia, probablemente benigna",
		incorrectas: [
			"Maligno",
			"Sospechoso de malignidad"
		]
	},
	{
		enunciado: "Las células de 'reparación' en un frotis cervical se diferencian de las malignas por:",
		correcta: "Mantener la polaridad, poseer nucleolos prominentes y cromatina fina",
		incorrectas: [
			"Presentar una relación núcleo-citoplasma muy elevada y bordes irregulares",
			"Aparecer siempre como células aisladas y queratinizadas"
		]
	},
	{
		enunciado: "La infección por Trichomonas vaginalis se identifica por:",
		correcta: "Organismos piriformes con núcleo pálido y gránulos citoplasmáticos",
		incorrectas: [
			"Hifas y esporas que atraviesan las células escamosas",
			"Grandes inclusiones intranucleares eosinófilas"
		]
	},
	{
		enunciado: "¿Qué hallazgo es típico de la citología mamaria en un quiste simple?",
		correcta: "Macrófagos espumosos y células apocrinas sobre fondo acelular",
		incorrectas: [
			"Grupos papilares con ejes fibrovasculares",
			"Células en anillo de sello muy abundantes"
		]
	},
	{
		enunciado: "En el adenocarcinoma de endometrio, las células neoplásicas suelen aparecer en la citología cervical como:",
		correcta: "Pequeños grupos de células glandulares vacuoladas con diátesis tumoral",
		incorrectas: [
			"Células gigantes multinucleadas con cuerpos de inclusión",
			"Células escamosas con perlas de queratina"
		]
	},
	{
		enunciado: "La metaplasia apocrina en la mama se reconoce citológicamente por:",
		correcta: "Células con citoplasma granular eosinófilo y nucleolos centrales grandes",
		incorrectas: [
			"Células pequeñas con núcleos en 'grano de café'",
			"Células cilíndricas con cilios apicales conservados"
		]
	},
	{
		enunciado: "Un frotis citológico clasificado como Bethesda 'NILM' significa:",
		correcta: "Negativo para lesión intraepitelial o malignidad",
		incorrectas: [
			"Muestra no adecuada para el diagnóstico",
			"Presencia de células glandulares atípicas"
		]
	},
	{
		enunciado: "La presencia de hifas tabicadas en 'pseudohifas' y esporas es indicativo de:",
		correcta: "Infección por Candida spp",
		incorrectas: [
			"Infección por Leptothrix",
			"Vaginosis bacteriana"
		]
	},
	{
		enunciado: "En citología de mama, la presencia de células mioepiteliales (núcleos desnudos) es un criterio de:",
		correcta: "Benignidad",
		incorrectas: [
			"Malignidad",
			"Inadecuación de la muestra"
		]
	},
	{
		enunciado: "¿Qué término define el aumento de tamaño nuclear con bordes lisos en respuesta a una agresión?",
		correcta: "Cambios reactivos",
		incorrectas: [
			"Discariosis",
			"Anisonucleosis"
		]
	},
	{
		enunciado: "El carcinoma lobulillar de mama se caracteriza en citología por:",
		correcta: "Células pequeñas monomorfas en 'fila de indios' o aisladas",
		incorrectas: [
			"Grandes placas de células pleomórficas con necrosis",
			"Abundantes células de hábito columnar con moco extracelular"
		]
	},
	{
		enunciado: "La presencia de cuerpos de mijo o gránulos de azufre en citología vaginal sugiere:",
		correcta: "Infección por Actinomyces (frecuente en portadoras de DIU)",
		incorrectas: [
			"Contaminación por talco",
			"Carcinoma de células claras"
		]
	},
	{
		enunciado: "Un criterio citológico de malignidad es la 'diátesis tumoral', que consiste en:",
		correcta: "Fondo de la extensión con restos necróticos, sangre digerida y fibrina",
		incorrectas: [
			"Presencia de abundantes linfocitos y células plasmáticas",
			"Fondo limpio con abundantes lactobacilos"
		]
	},
	{
		enunciado: "¿Cuál de las siguientes es una característica nuclear de HSIL?",
		correcta: "Irregularidad del contorno nuclear y aclaramiento de la cromatina",
		incorrectas: [
			"Núcleo pequeño y redondo de contornos lisos",
			"Ausencia total de núcleo (célula anucleada)"
		]
	},
	{
		enunciado: "En la mastitis granulomatosa, el hallazgo citológico predominante es:",
		correcta: "Células epitelioides, células gigantes multinucleadas y linfocitos",
		incorrectas: [
			"Predominio absoluto de neutrófilos y detritus",
			"Células neoplásicas con moco intracitoplasmático"
		]
	},
	{
		enunciado: "La categoría C5 en citología mamaria indica:",
		correcta: "Maligno",
		incorrectas: [
			"Benigno",
			"Sospechoso"
		]
	},
	{
		enunciado: "Las células 'naviculares' con abundantes depósitos de glucógeno son típicas de:",
		correcta: "Citología del embarazo",
		incorrectas: [
			"Citología prepuberal",
			"Citología postradioterapia"
		]
	},
	{
		enunciado: "El tumor filodes de mama se diferencia del fibroadenoma citológicamente por:",
		correcta: "Mayor celularidad estromal y atipia en los fragmentos de estroma",
		incorrectas: [
			"Ausencia total de componente epitelial",
			"Presencia de moco abundante en el fondo"
		]
	},
	{
		enunciado: "En citología cervical, la paraqueratosis se manifiesta como:",
		correcta: "Células escamosas pequeñas y densas con núcleos picnóticos",
		incorrectas: [
			"Células glandulares con cilios en el borde apical",
			"Células de gran tamaño con núcleos dobles"
		]
	},
	{
		enunciado: "El sistema Bethesda clasifica las anomalías de células glandulares (AGC) según:",
		correcta: "Su origen (endocervical, endometrial o no especificado)",
		incorrectas: [
			"El tamaño del nucleolo exclusivamente",
			"La presencia de pigmento melánico"
		]
	},
	{
		enunciado: "¿Qué efecto citológico produce la radioterapia en las células epiteliales?",
		correcta: "Citomegalia y nucleomegalia manteniendo la relación núcleo/citoplasma",
		incorrectas: [
			"Reducción masiva del tamaño celular",
			"Desaparición de las vacuolas citoplasmáticas"
		]
	},
	{
		enunciado: "La presencia de células de 'hábito papilar' en mama sin atipia sugiere:",
		correcta: "Papiloma intraductal",
		incorrectas: [
			"Ectasia ductal",
			"Carcinoma medular"
		]
	},
	{
		enunciado: "En el LSIL, los núcleos suelen presentar un tamaño:",
		correcta: "Al menos tres veces superior al de una célula intermedia normal",
		incorrectas: [
			"Igual al de un hematíe",
			"Menor que el de una célula basal"
		]
	},
	{
		enunciado: "La 'hipercromasia' nuclear se define como:",
		correcta: "Aumento de la intensidad de tinción del núcleo por mayor contenido de ADN",
		incorrectas: [
			"Palidez nuclear extrema por pérdida de cromatina",
			"Presencia de pigmento biliar dentro del núcleo"
		]
	},
	{
		enunciado: "Un criterio de muestra 'insuficiente' en citología cervical convencional es:",
		correcta: "Escasa celularidad escamosa bien conservada (menos de 8.000-12.000)",
		incorrectas: [
			"Presencia de más de 10 células endocervicales",
			"Existencia de flora bacteriana de Döderlein"
		]
	},
	{
		enunciado: "En mama, la necrosis grasa macroscópicamente puede simular un carcinoma por:",
		correcta: "La presencia de abundantes macrófagos y fondo sucio",
		incorrectas: [
			"La presencia de células ductales con macronucleolos",
			"La ausencia de respuesta inflamatoria"
		]
	},
	{
		enunciado: "La 'disqueratosis' es un hallazgo frecuente en:",
		correcta: "Lesiones asociadas a VPH y carcinomas escamosos",
		incorrectas: [
			"Vaginitis atrófica simple",
			"Frotis normales de recién nacidas"
		]
	},
	{
		enunciado: "Los cuerpos de Curtin-Cajal son estructuras observadas en:",
		correcta: "Infecciones por Chlamydia",
		incorrectas: [
			"Infecciones por Herpes",
			"Infecciones por Trichomonas"
		]
	},
	{
		enunciado: "La mastopatía fibroquística citológicamente muestra:",
		correcta: "Mezcla de células ductales, células apocrinas y macrófagos",
		incorrectas: [
			"Población celular monomorfa maligna",
			"Ausencia total de material de fondo"
		]
	},
	{
		enunciado: "El índice de maduración citológica evalúa la relación entre:",
		correcta: "Células profundas, intermedias y superficiales",
		incorrectas: [
			"Células epiteliales y leucocitos",
			"Células normales y células neoplásicas"
		]
	},
	{
		enunciado: "La presencia de 'perlas córneas' es característica de:",
		correcta: "Carcinoma escamoso queratinizante",
		incorrectas: [
			"Adenocarcinoma in situ",
			"Linfoma mamario"
		]
	}
];