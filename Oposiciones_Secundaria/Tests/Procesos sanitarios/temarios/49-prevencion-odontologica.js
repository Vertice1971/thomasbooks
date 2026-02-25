'use strict';

var PREGUNTAS = [
	{
		enunciado: "En la etiopatogenia actual de la caries, el factor determinante que transforma la biopelícula en cariogénica es:",
		correcta: "La exposición frecuente a carbohidratos fermentables que acidifican el medio",
		incorrectas: [
			"La presencia aislada de Streptococcus mutans en la cavidad oral",
			"El déficit congénito de cristales de hidroxiapatita en el esmalte",
			"La ausencia total de higiene mecánica durante un periodo de 12 horas"
		]
	},
	{
		enunciado: "El mecanismo de acción del flúor sobre el esmalte dental se basa principalmente en:",
		correcta: "La sustitución de grupos hidroxilo por flúor formando fluorapatita",
		incorrectas: [
			"La creación de una capa orgánica impermeable sobre la corona",
			"La neutralización química de los ácidos pirúvico y láctico",
			"El aumento de la producción salival mediante estimulación química"
		]
	},
	{
		enunciado: "Según la Curva de Stephan, el pH crítico a partir del cual comienza la desmineralización del esmalte es:",
		correcta: "5.5",
		incorrectas: [
			"4.5",
			"6.5",
			"7.0"
		]
	},
	{
		enunciado: "La prevención primaria del cáncer oral incluye como medida fundamental:",
		correcta: "El consejo antitabaco y la reducción del consumo de alcohol",
		incorrectas: [
			"La realización de biopsias incisionales en lesiones blanquecinas",
			"La aplicación periódica de barnices de flúor de alta concentración",
			"El uso de prótesis removibles con base de resina hipoalergénica"
		]
	},
	{
		enunciado: "¿Cuál es el desorden oral potencialmente maligno (DOPM) con mayor tasa de transformación?" ,
		correcta: "Eritroplasia",
		incorrectas: [
			"Leucoplasia homogénea",
			"Liquen plano reticular",
			"Lengua geográfica"
		]
	},
	{
		enunciado: "Los selladores de fosas y fisuras basan su eficacia preventiva en:",
		correcta: "El aislamiento físico de las zonas anatómicas más susceptibles",
		incorrectas: [
			"La liberación sistémica de calcio hacia la pulpa dental",
			"La eliminación química de la placa bacteriana preexistente",
			"El endurecimiento del cemento radicular en pacientes adultos"
		]
	},
	{
		enunciado: "La técnica de cepillado recomendada por su eficacia en el control de placa en el surco gingival es:",
		correcta: "Técnica de Bass",
		incorrectas: [
			"Técnica de Fones",
			"Técnica de Charter",
			"Técnica de Stillman modificada"
		]
	},
	{
		enunciado: "La fluorosis dental es una patología que se produce por:",
		correcta: "La ingesta excesiva de flúor durante el periodo de formación del diente",
		incorrectas: [
			"El uso prolongado de colutorios con alcohol en la edad adulta",
			"La aplicación de geles de flúor sobre dientes ya erupcionados",
			"Un déficit crónico de yodo en la dieta durante la infancia"
		]
	},
	{
		enunciado: "La 'regla de las dos semanas' en el diagnóstico del cáncer oral implica:",
		correcta: "Biopsiar cualquier lesión que no cicatrice tras eliminar el factor causal",
		incorrectas: [
			"Esperar 14 días tras la exodoncia para iniciar el tratamiento oncológico",
			"Realizar una citología de control cada quince días en fumadores",
			"Prescribir antifúngicos durante dos semanas antes de derivar al cirujano"
		]
	},
	{
		enunciado: "El principal agente etiológico relacionado con el cáncer de orofaringe en pacientes no fumadores es:",
		correcta: "Virus del Papiloma Humano (VPH), especialmente el genotipo 16",
		incorrectas: [
			"Virus de Epstein-Barr asociado a linfomas orales",
			"Cándida albicans en su variante hiperplásica",
			"Virus del Herpes Simple tipo 1 recurrente"
		]
	},
	{
		enunciado: "La prevención secundaria en odontología tiene como objetivo principal:",
		correcta: "Detectar y tratar la enfermedad en sus etapas iniciales o precoces",
		incorrectas: [
			"Evitar la aparición de la enfermedad mediante vacunas o dieta",
			"Rehabilitar la función masticatoria mediante prótesis complejas",
			"Reducir las secuelas estéticas tras una cirugía maxilofacial"
		]
	},
	{
		enunciado: "Un factor de riesgo físico relevante para la aparición de carcinoma en el labio inferior es:",
		correcta: "La exposición crónica a la radiación ultravioleta solar",
		incorrectas: [
			"El uso de cepillos de dientes con cerdas de dureza media",
			"La microcorriente galvánica producida por amalgamas de plata",
			"El consumo habitual de alimentos con temperaturas superiores a 40 grados"
		]
	},
	{
		enunciado: "La clorhexidina es un agente quimioterápico cuya principal característica es:",
		correcta: "La sustantividad, permitiendo su liberación gradual en la boca",
		incorrectas: [
			"Su capacidad para remineralizar la dentina expuesta",
			"La inducción de la proliferación de fibroblastos gingivales",
			"Su nulo efecto sobre la coloración de las restauraciones estéticas"
		]
	},
	{
		enunciado: "En el asesoramiento dietético, se considera que un alimento es altamente cariogénico si:",
		correcta: "Tiene una consistencia pegajosa y una alta frecuencia de consumo",
		incorrectas: [
			"Contiene polialcoholes como el xilitol o el sorbitol",
			"Requiere una masticación vigorosa para su deglución",
			"Posee un alto contenido en grasas poliinsaturadas y proteínas"
		]
	},
	{
		enunciado: "La localización intraoral con mayor riesgo de malignización para una leucoplasia es:",
		correcta: "Suelo de la boca y cara ventral de la lengua",
		incorrectas: [
			"Encía adherida del sector anterosuperior",
			"Dorso de la lengua y papilas caliciformes",
			"Mucosa yugal en la línea de oclusión"
		]
	},
	{
		enunciado: "La biopsia por punción-aspiración con aguja fina (PAAF) se utiliza preferentemente para:",
		correcta: "El estudio de adenopatías cervicales sospechosas",
		incorrectas: [
			"El diagnóstico definitivo de una leucoplasia palatina",
			"La toma de muestra de una úlcera en el borde lingual",
			"La evaluación de la profundidad de una bolsa periodontal"
		]
	},
	{
		enunciado: "La protección específica mediante selladores de fisuras está especialmente indicada en:",
		correcta: "Pacientes con necesidades especiales y molares con morfología retentiva",
		incorrectas: [
			"Dientes temporales próximos a la exfoliación natural",
			"Superficies lisas de incisivos y caninos permanentes",
			"Pacientes con xerostomía severa sin surcos profundos"
		]
	},
	{
		enunciado: "El efecto antibacteriano del flúor se debe a la inhibición de la enzima:",
		correcta: "Enolasa",
		incorrectas: [
			"Amilasa",
			"Anhidrasa carbónica",
			"Fosfatasa alcalina"
		]
	},
	{
		enunciado: "La citología exfoliativa en el cribado del cáncer oral se considera:",
		correcta: "Una técnica complementaria que no sustituye a la biopsia",
		incorrectas: [
			"El 'gold standard' para el diagnóstico de tumores óseos",
			"Una prueba definitiva para determinar la invasión estromal",
			"Un método obsoleto debido al uso del azul de toluidina"
		]
	},
	{
		enunciado: "El xilitol es un edulcorante utilizado en prevención porque:",
		correcta: "No es fermentado por las bacterias y reduce el crecimiento de S. mutans",
		incorrectas: [
			"Aumenta la dureza del esmalte de forma similar al flúor",
			"Disuelve químicamente el cálculo dental ya formado",
			"Actúa como un antibiótico de amplio espectro en la saliva"
		]
	},
	{
		enunciado: "¿Cuál es la función del índice de O'Leary en los programas de prevención?",
		correcta: "Cuantificar el porcentaje de superficies dentales con placa bacteriana",
		incorrectas: [
			"Medir la profundidad media de las bolsas periodontales",
			"Evaluar la gravedad de las lesiones precancerosas orales",
			"Determinar la necesidad de tratamiento ortodóncico"
		]
	},
	{
		enunciado: "La xerostomía crónica aumenta el riesgo de caries debido a:",
		correcta: "La pérdida de la capacidad tampón y de la acción mecánica de limpieza",
		incorrectas: [
			"Un aumento excesivo de la viscosidad del esmalte dental",
			"La proliferación descontrolada de bacterias anaerobias estrictas",
			"La precipitación de sales de calcio sobre la superficie oclusal"
		]
	},
	{
		enunciado: "En la exploración oncológica, una característica de una adenopatía maligna es:",
		correcta: "Consistencia dura, indolora y adherida a planos profundos",
		incorrectas: [
			"Consistencia elástica, dolorosa y con movilidad clara",
			"Presencia de supuración activa y temperatura elevada",
			"Desaparición espontánea tras tratamiento antibiótico"
		]
	},
	{
		enunciado: "La aplicación de barnices de flúor en el entorno clínico se recomienda por:",
		correcta: "Su alta adherencia y liberación prolongada de iones flúor",
		incorrectas: [
			"Su nula toxicidad en caso de ingestión masiva por el paciente",
			"La posibilidad de aplicarlos sobre sarro calcificado",
			"Su capacidad para blanquear las manchas por tetraciclinas"
		]
	},
	{
		enunciado: "El carcinoma de células escamosas suele presentarse inicialmente como:",
		correcta: "Una úlcera de bordes elevados e infiltrados al tacto",
		incorrectas: [
			"Una vesícula transparente que drena contenido seroso",
			"Una mancha pigmentada de bordes geográficos y planos",
			"Un nódulo blando que fluctúa a la palpación bimanual"
		]
	},
	{
		enunciado: "La prevención terciaria en el cáncer oral se centra en:",
		correcta: "La rehabilitación maxilofacial y el soporte psicológico tras el tratamiento",
		incorrectas: [
			"El cribado masivo en poblaciones de bajo riesgo",
			"La aplicación de radioterapia previa a la cirugía",
			"La educación sanitaria sobre el riesgo del tabaco"
		]
	},
	{
		enunciado: "El potencial cariogénico del almidón aumenta significativamente cuando:",
		correcta: "Se somete a procesos de cocción que facilitan su hidrólisis",
		incorrectas: [
			"Se consume en crudo junto con proteínas animales",
			"Se combina con grasas saturadas de origen vegetal",
			"Se ingiere en una sola toma diaria junto con agua"
		]
	},
	{
		enunciado: "La presencia de irritación mecánica crónica (prótesis mal ajustadas) se asocia con:",
		correcta: "Un aumento del riesgo de desarrollo de lesiones proliferativas y cáncer",
		incorrectas: [
			"Una mayor resistencia del epitelio a la invasión bacteriana",
			"La remineralización espontánea de la dentina radicular",
			"La inmunización del paciente frente al virus del papiloma"
		]
	},
	{
		enunciado: "La inmunización contra el VPH es una estrategia de:",
		correcta: "Prevención primaria",
		incorrectas: [
			"Prevención secundaria",
			"Prevención terciaria",
			"Diagnóstico precoz"
		]
	},
	{
		enunciado: "El azul de toluidina se utiliza en el diagnóstico oral porque:",
		correcta: "Tiñe selectivamente zonas con alta densidad de ácidos nucleicos (neoplasias)",
		incorrectas: [
			"Actúa como un agente remineralizante de manchas blancas",
			"Identifica la presencia de bacterias del grupo mutans",
			"Permite visualizar la profundidad de las fisuras oclusales"
		]
	},
	{
		enunciado: "El concepto de 'biopelícula' implica que las bacterias en la boca:",
		correcta: "Viven en una comunidad organizada con mayor resistencia a agentes externos",
		incorrectas: [
			"Se encuentran flotando libremente en la saliva de forma aislada",
			"Son eliminadas totalmente mediante el uso de hilos dentales",
			"Solo son capaces de producir ácidos en ausencia total de oxígeno"
		]
	},
	{
		enunciado: "La principal contraindicación para el uso de selladores de resina es:",
		correcta: "La imposibilidad de mantener un aislamiento seco del campo",
		incorrectas: [
			"La presencia de una higiene bucodental excelente",
			"El consumo habitual de chicles sin azúcar",
			"La edad superior a los 12 años en el paciente"
		]
	},
	{
		enunciado: "En pacientes oncológicos, la mucositis oral es una complicación frecuente de:",
		correcta: "La radioterapia y quimioterapia que afecta a la división celular",
		incorrectas: [
			"El uso de colutorios con flúor durante el tratamiento",
			"La ingesta elevada de vitamina B12 y ácido fólico",
			"La realización de limpiezas profesionales preventivas"
		]
	},
	{
		enunciado: "El índice de placa de Silness y Löe evalúa:",
		correcta: "El espesor de la placa en el margen gingival",
		incorrectas: [
			"La extensión de la placa por toda la superficie coronaria",
			"La dureza del cálculo dental subgingival",
			"La capacidad de la saliva para eliminar restos"
		]
	},
	{
		enunciado: "La eritroplasia se define clínicamente como:",
		correcta: "Una lesión roja, aterciopelada, que no puede diagnosticarse como otra entidad",
		incorrectas: [
			"Una placa blanquecina que se desprende al raspado",
			"Un crecimiento óseo exofítico en el paladar duro",
			"Una inflamación gingival asociada al embarazo"
		]
	},
	{
		enunciado: "La autoclisis es un proceso preventivo natural que consiste en:",
		correcta: "La limpieza de las superficies dentales por la lengua, labios y saliva",
		incorrectas: [
			"La esterilización de los instrumentos en la clínica dental",
			"La desinfección de la encía mediante el uso de colutorios",
			"La remineralización del esmalte por el calcio de la dieta"
		]
	},
	{
		enunciado: "El autoexamen oral debe instruirse a los pacientes para detectar:",
		correcta: "Cambios de color, bultos o heridas que no curan",
		incorrectas: [
			"La presencia de sarro en los incisivos inferiores",
			"El grado de desgaste de las cúspides de los molares",
			"La necesidad de cambiar las obturaciones antiguas"
		]
	},
	{
		enunciado: "La prevención de la caries radicular en el anciano se basa en:",
		correcta: "El control de la recesión gingival y el uso de fluoruros específicos",
		incorrectas: [
			"El aumento de la ingesta de carbohidratos complejos",
			"La aplicación de selladores en las caras oclusales",
			"La extracción preventiva de dientes con movilidad grado I"
		]
	},
	{
		enunciado: "El potencial cariogénico de la leche materna se considera:",
		correcta: "Bajo, pero puede aumentar si se asocia a falta de higiene y tomas nocturnas",
		incorrectas: [
			"Nulo, debido a la presencia de anticuerpos protectores",
			"Extremo, superior al de cualquier bebida azucarada",
			"Igual al de las fórmulas infantiles con sacarosa"
		]
	},
	{
		enunciado: "¿Cuál es el objetivo de los programas de salud bucodental en la escuela?",
		correcta: "Adquisición de hábitos saludables y detección precoz de patologías",
		incorrectas: [
			"Sustituir la responsabilidad de los padres en la higiene",
			"Realizar tratamientos complejos de ortodoncia y cirugía",
			"Proveer de golosinas sin azúcar a todos los alumnos"
		]
	}
];