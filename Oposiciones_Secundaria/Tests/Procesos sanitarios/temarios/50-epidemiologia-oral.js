'use strict';

var PREGUNTAS = [
	{
		enunciado: "El índice CAOD es un indicador de:",
		correcta: "Prevalencia de caries y experiencia de enfermedad pasada y presente",
		incorrectas: [
			"Incidencia anual de nuevas lesiones en superficies lisas",
			"Necesidad de tratamiento ortodoncico en dentición mixta",
			"Grado de higiene oral mediante la detección de placa"
		]
	},
	{
		enunciado: "En la metodología de la OMS, la edad de 12 años se selecciona como grupo índice porque:",
		correcta: "Es la edad internacional para comparar datos y evaluar tendencias globales",
		incorrectas: [
			"A esta edad ya han erupcionado todos los terceros molares permanentes",
			"Representa el momento de máxima prevalencia de enfermedad periodontal",
			"Es cuando se produce la exfoliación completa de los caninos temporales"
		]
	},
	{
		enunciado: "El índice CPITN (o CPI) evalúa las necesidades de tratamiento periodontal basándose en:",
		correcta: "Presencia de sangrado, cálculo y profundidad de las bolsas",
		incorrectas: [
			"La movilidad dental y el grado de recesión gingival",
			"La pérdida de inserción medida en diez puntos por diente",
			"El recuento de colonias de bacterias anaerobias en el surco"
		]
	},
	{
		enunciado: "Un CAOD igual a 6 en un niño de 12 años indica:",
		correcta: "Que la suma de dientes cariados, ausentes y obturados es 6",
		incorrectas: [
			"Que el niño tiene 6 caries activas en el momento del examen",
			"Que se han perdido 6 dientes permanentes por causas traumáticas",
			"Que el paciente presenta 6 obturaciones defectuosas en molares"
		]
	},
	{
		enunciado: "La calibración de los examinadores en una encuesta epidemiológica tiene como fin:",
		correcta: "Minimizar la variabilidad diagnóstica (sesgo del examinador)",
		incorrectas: [
			"Asegurar que el instrumental esté correctamente afilado",
			"Garantizar que todos los pacientes reciban el mismo tratamiento",
			"Aumentar la velocidad de recogida de datos en el campo"
		]
	},
	{
		enunciado: "¿Qué indica un Índice de Restauración (IR) del 100%?",
		correcta: "Que todos los dientes afectados por caries han sido obturados",
		incorrectas: [
			"Que la población estudiada no presenta ninguna caries activa",
			"Que todos los habitantes tienen acceso a prótesis dentales",
			"Que el 100% de la población requiere tratamiento de urgencia"
		]
	},
	{
		enunciado: "El índice de Dean se utiliza específicamente para cuantificar:",
		correcta: "La severidad de la fluorosis dental",
		incorrectas: [
			"La cantidad de placa bacteriana adherida",
			"El grado de maloclusión en dentición temporal",
			"La erosión dental provocada por ácidos extrínsecos"
		]
	},
	{
		enunciado: "El muestreo 'Pathfinder' (o de puntos de control) propuesto por la OMS permite:",
		correcta: "Obtener datos representativos con un coste y tiempo reducidos",
		incorrectas: [
			"Examinar a toda la población escolar de una región geográfica",
			"Identificar solo a los individuos con patologías graves",
			"Sustituir el examen clínico por encuestas de autopercepción"
		]
	},
	{
		enunciado: "En el índice CPI, el Código 4 significa:",
		correcta: "Presencia de bolsa periodontal patológica profunda (6 mm o más)",
		incorrectas: [
			"Ausencia total de signos de enfermedad periodontal",
			"Presencia de sangrado provocado tras el sondaje suave",
			"Cálculo supragingival o subgingival detectable con sonda"
		]
	},
	{
		enunciado: "El índice Kappa se utiliza en epidemiología oral para medir:",
		correcta: "La concordancia entre examinadores más allá del azar",
		incorrectas: [
			"La tasa de incidencia de cáncer oral en un quinquenio",
			"La cantidad de flúor en las aguas de abastecimiento público",
			"La resistencia del esmalte a la desmineralización ácida"
		]
	},
	{
		enunciado: "Para evaluar la dentición temporal, el índice equivalente al CAOD es:",
		correcta: "cod (cariados, obturados, dientes)",
		incorrectas: [
			"CAOD-T",
			"Índice de Silness",
			"Índice de Loe"
		]
	},
	{
		enunciado: "El grupo de edad de 65-74 años en las encuestas de la OMS es vital para estudiar:",
		correcta: "El edentulismo y la necesidad de prótesis en la población anciana",
		incorrectas: [
			"La erupción tardía de los terceros molares superiores",
			"El impacto de los selladores de fisuras a largo plazo",
			"La prevalencia de caries de biberón de forma retrospectiva"
		]
	},
	{
		enunciado: "Un factor crítico en la realización del examen clínico epidemiológico es:",
		correcta: "La iluminación adecuada y el uso de la sonda de la OMS",
		incorrectas: [
			"La toma de radiografías periapicales de todos los sectores",
			"La realización de una limpieza dental previa al examen",
			"El uso de anestesia local para sondar las bolsas"
		]
	},
	{
		enunciado: "El índice de prevalencia de caries se expresa habitualmente como:",
		correcta: "El porcentaje de individuos con CAOD > 0",
		incorrectas: [
			"La media de dientes perdidos por cada mil habitantes",
			"El número de casos nuevos por cada cien niños al año",
			"El tiempo medio transcurrido entre dos revisiones dentales"
		]
	},
	{
		enunciado: "El Índice de Higiene Oral Simplificado (IHO-S) evalúa:",
		correcta: "Tanto la presencia de detritos (placa) como de cálculo",
		incorrectas: [
			"Únicamente el uso declarado de hilo dental por el paciente",
			"La calidad del cepillado observado en directo",
			"El pH salival antes y después de las comidas"
		]
	},
	{
		enunciado: "En la ficha de la OMS, un diente se considera 'Ausente' (A) en el CAOD si:",
		correcta: "Se ha perdido como consecuencia directa de la caries dental",
		incorrectas: [
			"Ha sido extraído por motivos ortodóncicos",
			"Presenta una agenesia congénita confirmada",
			"Se ha perdido debido a un traumatismo accidental"
		]
	},
	{
		enunciado: "El objetivo principal de una encuesta epidemiológica nacional es:",
		correcta: "Obtener una base de datos para la planificación de programas de salud",
		incorrectas: [
			"Diagnosticar y tratar individualmente a todos los participantes",
			"Validar el uso de una nueva marca comercial de dentífrico",
			"Identificar a los dentistas con menor rendimiento laboral"
		]
	},
	{
		enunciado: "¿Cuál es el componente del CAOD que refleja la 'necesidad de tratamiento' acumulada?",
		correcta: "C (Cariados)",
		incorrectas: [
			"A (Ausentes)",
			"O (Obturados)",
			"D (Dientes totales)"
		]
	},
	{
		enunciado: "La sonda periodontal de la OMS se caracteriza por:",
		correcta: "Tener una bola de 0.5 mm en el extremo y una banda negra",
		incorrectas: [
			"Ser angulada a 90 grados para acceso a furcas",
			"Tener marcas milimetradas cada 1 mm hasta los 15 mm",
			"Ser ultrasónica para medir la densidad del hueso"
		]
	},
	{
		enunciado: "El término 'experiencia de caries' se refiere a:",
		correcta: "La evidencia clínica de caries actual, dientes perdidos y tratados",
		incorrectas: [
			"El dolor referido por el paciente en el último año",
			"El número de visitas al dentista realizadas en la infancia",
			"La susceptibilidad genética a la desmineralización"
		]
	},
	{
		enunciado: "En epidemiología, la 'incidencia' de caries se diferencia de la 'prevalencia' en que:",
		correcta: "Mide el número de casos nuevos en un periodo de tiempo definido",
		incorrectas: [
			"Se calcula dividiendo el número de obturaciones por los dientes totales",
			"Mide el total de casos en un momento puntual de la encuesta",
			"Solo tiene en cuenta los dientes ausentes por enfermedad periodontal"
		]
	},
	{
		enunciado: "Un código CPI de 0 indica:",
		correcta: "Periodonto sano, sin sangrado ni cálculo",
		incorrectas: [
			"Pérdida de inserción superior a 12 milímetros",
			"Necesidad urgente de cirugía de colgajo",
			"Diente excluido del examen por presentar una corona"
		]
	},
	{
		enunciado: "El grupo de edad de 35-44 años se utiliza en las encuestas para evaluar:",
		correcta: "El efecto acumulativo de las enfermedades orales en adultos",
		incorrectas: [
			"La erupción de la dentición permanente en condiciones ideales",
			"El éxito de los programas de sellado de fisuras escolares",
			"La prevalencia de maloclusiones esqueléticas graves"
		]
	},
	{
		enunciado: "Para que un diente sea considerado 'Obturado' (O) en el CAOD:",
		correcta: "Debe presentar una restauración permanente sin caries asociada",
		incorrectas: [
			"Puede tener una caries secundaria bajo la obturación",
			"Debe ser una corona protésica colocada por estética",
			"Basta con que el paciente refiera haber sido tratado"
		]
	},
	{
		enunciado: "El índice CAOS se diferencia del CAOD en que:",
		correcta: "Utiliza como unidad de medida las superficies dentales",
		incorrectas: [
			"Solo evalúa molares y premolares superiores",
			"Se realiza mediante inspección visual sin instrumental",
			"Es específico para medir la movilidad de los órganos dentarios"
		]
	},
	{
		enunciado: "La OMS define 'salud bucodental' como:",
		correcta: "Ausencia de dolor orofacial y enfermedades que limiten el bienestar",
		incorrectas: [
			"Presencia de todos los dientes con CAOD igual a cero",
			"Tener una oclusión perfecta sin necesidad de ortodoncia",
			"Ausencia total de bacterias en la cavidad oral"
		]
	},
	{
		enunciado: "El error 'intra-examinador' ocurre cuando:",
		correcta: "El mismo examinador da diagnósticos distintos a la misma lesión en tiempos diferentes",
		incorrectas: [
			"Dos examinadores no se ponen de acuerdo sobre una caries",
			"El paciente miente sobre sus hábitos de higiene oral",
			"La sonda utilizada no cumple los estándares de la OMS"
		]
	},
	{
		enunciado: "La fluorosis 'moderada' según el índice de Dean se caracteriza por:",
		correcta: "Desgaste marcado y coloración parda en las superficies dentales",
		incorrectas: [
			"Pocas manchas blancas pequeñas dispersas por el esmalte",
			"Esmalte con translucidez normal y superficie lisa",
			"Afectación de menos del 25% de la superficie coronaria"
		]
	},
	{
		enunciado: "En la planificación sanitaria, un CAOD comunitario alto con un IR muy bajo sugiere:",
		correcta: "Gran necesidad de tratamiento no satisfecha por los servicios",
		incorrectas: [
			"Un programa preventivo de fluoración muy exitoso",
			"Exceso de dentistas en la región geográfica estudiada",
			"Baja prevalencia de caries en la población general"
		]
	},
	{
		enunciado: "El índice de placa de O'Leary se expresa en:",
		correcta: "Porcentaje (%)",
		incorrectas: [
			"Milímetros (mm)",
			"Unidades de pH",
			"Escala de 0 a 4"
		]
	},
	{
		enunciado: "En una encuesta a niños de 5 años, el componente 'a' (ausente) del índice cod:",
		correcta: "No suele utilizarse debido a la dificultad de distinguir exfoliación de caries",
		incorrectas: [
			"Es el parámetro más importante para predecir el CAOD futuro",
			"Solo incluye los dientes perdidos por traumatismos en el patio",
			"Se suma al índice de molares permanentes obligatoriamente"
		]
	},
	{
		enunciado: "La 'vigilancia epidemiológica' en salud oral permite:",
		correcta: "Observar la evolución de las enfermedades a lo largo de los años",
		incorrectas: [
			"Controlar que los pacientes cumplan con su higiene diaria",
			"Sancionar a los centros que no sigan las guías de la OMS",
			"Reducir el coste de los materiales de obturación"
		]
	},
	{
		enunciado: "Para evaluar la necesidad de prótesis, la OMS registra:",
		correcta: "La presencia y tipo de prótesis en cada maxilar",
		incorrectas: [
			"El precio pagado por el paciente por su prótesis actual",
			"La marca del laboratorio que fabricó la estructura",
			"La opinión estética de los familiares del paciente"
		]
	},
	{
		enunciado: "En el examen de la mucosa oral durante la encuesta se busca:",
		correcta: "Leucoplasias, eritroplasias y otras lesiones sospechosas",
		incorrectas: [
			"La profundidad de las glándulas salivales menores",
			"El grado de hidratación del paladar blando únicamente",
			"La presencia de sarro en las caras yugales"
		]
	},
	{
		enunciado: "El índice SIC (Significant Caries Index) se utiliza para:",
		correcta: "Identificar al tercio de la población con los valores más altos de caries",
		incorrectas: [
			"Medir el impacto de la caries en la calidad de vida",
			"Calcular el número de bacterias en la placa",
			"Evaluar la resistencia del esmalte al ataque ácido"
		]
	},
	{
		enunciado: "La maloclusión se registra en las encuestas de la OMS mediante:",
		correcta: "El Índice de Estética Dental (DAI)",
		incorrectas: [
			"La clasificación de Angle exclusivamente",
			"El número de dientes con atrición severa",
			"La medición de la apertura máxima bucal"
		]
	},
	{
		enunciado: "El consentimiento informado en una encuesta epidemiológica es:",
		correcta: "Un requisito ético indispensable previo al examen",
		incorrectas: [
			"Opcional si el examen se realiza en una escuela pública",
			"Necesario solo si se van a realizar extracciones",
			"Un documento que firma el examinador para su seguro"
		]
	},
	{
		enunciado: "La ficha de recogida de datos debe ser:",
		correcta: "Estandarizada, clara y fácil de procesar informáticamente",
		incorrectas: [
			"Un diario narrativo de la vida del paciente",
			"Diferente para cada examinador según su especialidad",
			"Escrita exclusivamente en latín médico"
		]
	},
	{
		enunciado: "El análisis de la fluorosis se realiza habitualmente en el grupo de edad de:",
		correcta: "12 y 15 años",
		incorrectas: [
			"5 años (antes de la erupción)",
			"Mayores de 65 años",
			"Recién nacidos"
		]
	},
	{
		enunciado: "Los resultados de la encuesta deben comunicarse a:",
		correcta: "Las autoridades sanitarias para la toma de decisiones",
		incorrectas: [
			"Las empresas de seguros dentales privados únicamente",
			"Nadie, ya que son datos confidenciales sin utilidad pública",
			"Los fabricantes de golosinas para ajustar su producción"
		]
	}
];