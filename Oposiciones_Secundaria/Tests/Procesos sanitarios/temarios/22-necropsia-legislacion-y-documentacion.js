'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué normativa regula en España las autopsias clínicas?",
		correcta: "Real Decreto 2230/1982",
		incorrectas: [
			"Ley de Enjuiciamiento Criminal",
			"Ley Orgánica de Libertad Sindical"
		]
	},
	{
		enunciado: "La autopsia médico-legal o judicial se realiza por orden de:",
		correcta: "La autoridad judicial competente (Juez de Instrucción)",
		incorrectas: [
			"El Director Gerente del Hospital",
			"La familia directa del fallecido"
		]
	},
	{
		enunciado: "¿Cuál es el objetivo principal de una autopsia clínica hospitalaria?",
		correcta: "Confirmar el diagnóstico y determinar la correlación clínico-patológica",
		incorrectas: [
			"Determinar la responsabilidad penal en muertes violentas",
			"Acelerar los trámites de la herencia del fallecido"
		]
	},
	{
		enunciado: "En una autopsia judicial, el médico encargado de su realización es:",
		correcta: "Un Médico Forense",
		incorrectas: [
			"Un Patólogo del Sistema Nacional de Salud",
			"El médico de cabecera que trataba al paciente"
		]
	},
	{
		enunciado: "El documento legal donde se autoriza la autopsia clínica por parte de los allegados es:",
		correcta: "El Consentimiento Informado",
		incorrectas: [
			"El Certificado de Defunción",
			"El Boletín Estadístico de Defunción"
		]
	},
	{
		enunciado: "La Ley de Enjuiciamiento Criminal obliga a realizar la autopsia cuando:",
		correcta: "Exista sospecha de muerte violenta o sospechosa de criminalidad",
		incorrectas: [
			"El paciente fallece en el hospital tras una larga enfermedad",
			"La familia quiere conocer si hubo negligencia médica"
		]
	},
	{
		enunciado: "El 'Informe Provisional de Autopsia' debe entregarse habitualmente:",
		correcta: "En las primeras 24-48 horas tras la realización de la macroscopía",
		incorrectas: [
			"Una vez finalizados todos los estudios inmunohistoquímicos",
			"Justo antes de proceder a la incineración del cadáver"
		]
	},
	{
		enunciado: "¿Qué pieza de instrumental se utiliza específicamente para la apertura del cráneo?",
		correcta: "Sierra vibratoria oscilante",
		incorrectas: [
			"Costótomo de Gluck",
			"Cuchillo de Virchow"
		]
	},
	{
		enunciado: "En la organización de la sala de autopsias, la 'zona sucia' comprende:",
		correcta: "La mesa de autopsias y el área de evisceración",
		incorrectas: [
			"El despacho del patólogo y la zona de secretaría",
			"El almacén de bloques de parafina y portaobjetos"
		]
	},
	{
		enunciado: "El Certificado Médico de Defunción es necesario para:",
		correcta: "Inscribir la defunción en el Registro Civil y autorizar el enterramiento",
		incorrectas: [
			"Confirmar que se ha realizado la autopsia clínica",
			"Solicitar la baja laboral de los familiares"
		]
	},
	{
		enunciado: "Una autopsia blanca o negativa es aquella en la que:",
		correcta: "No se encuentra una causa de muerte tras el examen macro y microscópico",
		incorrectas: [
			"El cadáver presenta una palidez extrema por hemorragia",
			"Solo se estudian los pulmones y el corazón"
		]
	},
	{
		enunciado: "¿Cuál es la función del técnico en anatomía patológica durante la necropsia?",
		correcta: "Preparación del instrumental, apertura de cavidades y reconstrucción",
		incorrectas: [
			"Firma del informe definitivo con el diagnóstico etiológico",
			"Notificación del fallecimiento a los juzgados"
		]
	},
	{
		enunciado: "La técnica de 'apertura en Y' cutánea se inicia habitualmente en:",
		correcta: "Las articulaciones acromioclaviculares o regiones mastoideas",
		incorrectas: [
			"La sínfisis del pubis hacia arriba",
			"El apéndice xifoides hacia los lados"
		]
	},
	{
		enunciado: "El instrumental utilizado para cortar las costillas y abrir el peto esternal es:",
		correcta: "Costótomo",
		incorrectas: [
			"Escalpelo de hoja fija",
			"Pinzas de disección con dientes"
		]
	},
	{
		enunciado: "En el contexto de la necropsia, el término 'prosector' se refiere a:",
		correcta: "La persona que realiza la disección del cadáver",
		incorrectas: [
			"El administrativo encargado de los archivos",
			"El familiar que identifica el cuerpo"
		]
	},
	{
		enunciado: "La confidencialidad de los datos obtenidos en la autopsia está sujeta a:",
		correcta: "El secreto profesional y la Ley de Protección de Datos",
		incorrectas: [
			"La voluntad del jefe de servicio de patología",
			"Publicación obligatoria en la web del hospital"
		]
	},
	{
		enunciado: "¿Qué se debe comprobar antes de iniciar cualquier necropsia clínica?",
		correcta: "La identidad del cadáver y la existencia de autorización firmada",
		incorrectas: [
			"Si el paciente tenía deudas pendientes con el centro",
			"El color de los ojos del fallecido para el informe"
		]
	},
	{
		enunciado: "El 'Informe Definitivo de Autopsia' incluye:",
		correcta: "Los hallazgos macroscópicos, microscópicos y el juicio diagnóstico final",
		incorrectas: [
			"La lista de objetos personales entregados a la familia",
			"El presupuesto del entierro y los gastos de tanatorio"
		]
	},
	{
		enunciado: "El instrumental de necropsia debe ser desinfectado tras cada uso para evitar:",
		correcta: "Contaminación cruzada y riesgos biológicos para el personal",
		incorrectas: [
			"Que los cuchillos pierdan el filo por el frío",
			"Que el metal brille demasiado bajo las luces"
		]
	},
	{
		enunciado: "Las autopsias clínicas se realizan generalmente en:",
		correcta: "Los servicios de Anatomía Patológica de los hospitales",
		incorrectas: [
			"Los Institutos de Medicina Legal",
			"Las propias habitaciones de los pacientes"
		]
	},
	{
		enunciado: "En caso de muerte por enfermedad infectocontagiosa de alto riesgo, la autopsia:",
		correcta: "Puede ser desaconsejada o requerir niveles de bioseguridad especiales (P3/P4)",
		incorrectas: [
			"Es obligatoria para todos los estudiantes del hospital",
			"Debe realizarse al aire libre para ventilar"
		]
	},
	{
		enunciado: "La mesa de autopsias debe disponer idealmente de:",
		correcta: "Agua corriente, sistema de aspiración y desagüe",
		incorrectas: [
			"Calefacción interna para mantener la temperatura del cuerpo",
			"Conexión directa a internet para el paciente"
		]
	},
	{
		enunciado: "El estudio de los cambios del cadáver con el tiempo se denomina:",
		correcta: "Tanatoquimia y tanatocronodiagnóstico",
		incorrectas: [
			"Histotecnología forense",
			"Biopsia post-mortem"
		]
	},
	{
		enunciado: "El consentimiento para la autopsia clínica puede ser revocado por los familiares:",
		correcta: "En cualquier momento antes del inicio del procedimiento",
		incorrectas: [
			"Solo si pagan una tasa administrativa",
			"Nunca, una vez firmado es irrevocable"
		]
	},
	{
		enunciado: "El 'Boletín Estadístico de Defunción' es enviado a:",
		correcta: "El Instituto Nacional de Estadística (INE)",
		incorrectas: [
			"La biblioteca del hospital",
			"El colegio de médicos local"
		]
	},
	{
		enunciado: "El equipo de protección individual (EPI) básico en una autopsia incluye:",
		correcta: "Bata impermeable, guantes de malla o doble guante, mascarilla y pantalla",
		incorrectas: [
			"Ropa de calle cómoda y zuecos abiertos",
			"Solo mascarilla quirúrgica simple"
		]
	},
	{
		enunciado: "La autorización judicial para la autopsia médico-legal prevalece sobre:",
		correcta: "La oposición de los familiares",
		incorrectas: [
			"La disponibilidad del médico forense",
			"El horario de cierre del cementerio"
		]
	},
	{
		enunciado: "¿Qué se entiende por 'correlación clínico-patológica'?",
		correcta: "El contraste entre los síntomas del paciente y los hallazgos de la autopsia",
		incorrectas: [
			"La relación entre el médico y el técnico de anatomía",
			"El parecido físico del fallecido con sus antecesores"
		]
	},
	{
		enunciado: "El registro de entrada de cadáveres debe incluir:",
		correcta: "Fecha, hora, procedencia e identificación del cuerpo",
		incorrectas: [
			"Estado civil y religión del fallecido",
			"Nivel de estudios y profesión previa"
		]
	},
	{
		enunciado: "La autopsia clínica está indicada en muertes hospitalarias cuando:",
		correcta: "La causa de la muerte no está clara o tiene interés científico",
		incorrectas: [
			"El paciente ha muerto por un disparo en la vía pública",
			"El médico tiene tiempo libre para practicar técnicas"
		]
	},
	{
		enunciado: "En la sala de autopsias, el uso de formaldehído requiere:",
		correcta: "Sistemas de extracción localizada y ventilación ambiental",
		incorrectas: [
			"Que la sala esté herméticamente cerrada sin ventanas",
			"El uso de estufas para evaporar el líquido"
		]
	},
	{
		enunciado: "El instrumental denominado 'Enterótomo' se utiliza para:",
		correcta: "Abrir el intestino siguiendo su eje longitudinal",
		incorrectas: [
			"Cortar el hueso del fémur",
			"Extraer el humor vítreo del ojo"
		]
	},
	{
		enunciado: "La 'Ecoscopia' o examen externo del cadáver debe ser:",
		correcta: "Exhaustiva, sistemática y documentada",
		incorrectas: [
			"Opcional si el diagnóstico clínico era claro",
			"Realizada solo por el personal de enfermería"
		]
	},
	{
		enunciado: "En una autopsia médico-legal, si se hallan proyectiles, estos deben:",
		correcta: "Recuperarse evitando dañarlos y mantener la cadena de custodia",
		incorrectas: [
			"Desecharse en el contenedor de objetos punzantes",
			"Limpiarse con ácido para ver el número de serie"
		]
	},
	{
		enunciado: "El tiempo mínimo recomendado de espera tras la muerte para iniciar la autopsia es:",
		correcta: "Suele establecerse tras la confirmación de muerte cierta (24h legalmente para enterramiento)",
		incorrectas: [
			"Inmediatamente, antes de que el cuerpo se enfríe",
			"Cinco días después para asegurar la putrefacción"
		]
	},
	{
		enunciado: "La normativa sobre residuos sanitarios clasifica los restos humanos de la autopsia como:",
		correcta: "Residuos de Clase IV (Cadáveres y restos humanos)",
		incorrectas: [
			"Residuos asimilables a urbanos",
			"Residuos químicos peligrosos (Clase V)"
		]
	},
	{
		enunciado: "El técnico debe asegurar que, tras la autopsia, el cadáver:",
		correcta: "Sea reconstruido y aseado respetando la dignidad del fallecido",
		incorrectas: [
			"Se entregue a la familia sin suturar las incisiones",
			"Permanezca en la mesa hasta la llegada de la funeraria"
		]
	},
	{
		enunciado: "La solicitud de autopsia clínica debe ir firmada por:",
		correcta: "El médico responsable del paciente y la dirección del centro",
		incorrectas: [
			"El celador que trasladó el cuerpo",
			"El juez de guardia exclusivamente"
		]
	},
	{
		enunciado: "En la autopsia neuropatológica, el cerebro suele extraerse y:",
		correcta: "Fijarse en formol durante 2-3 semanas antes de su disección",
		incorrectas: [
			"Cortarse inmediatamente en fresco con el cuchillo de pan",
			"Congelarse a -80 grados de forma indefinida"
		]
	},
	{
		enunciado: "La presencia de marcapasos o prótesis debe:",
		correcta: "Registrarse en el informe y, en ocasiones, retirarse según protocolo",
		incorrectas: [
			"Omitirse para no alargar el informe",
			"Destruirse con la sierra oscilante"
		]
	}
];