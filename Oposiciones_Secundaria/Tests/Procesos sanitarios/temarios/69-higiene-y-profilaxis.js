'use strict';

var PREGUNTAS = [
	{
		enunciado: "En la cadena epidemiológica, un objeto inanimado que transporta microorganismos infectantes se denomina:",
		correcta: "Fómite",
		incorrectas: [
			"Vector",
			"Reservorio"
		]
	},
	{
		enunciado: "La desinfección de nivel intermedio se caracteriza por eliminar:",
		correcta: "Bacterias vegetativas, la mayoría de los virus y hongos, y Mycobacterium tuberculosis",
		incorrectas: [
			"Todos los microorganismos, incluyendo las esporas bacterianas",
			"Únicamente bacterias grampositivas y virus con envoltura lipídica"
		]
	},
	{
		enunciado: "La profilaxis de exposición que consiste en la administración de anticuerpos preformados se denomina:",
		correcta: "Inmunización pasiva",
		incorrectas: [
			"Inmunización activa",
			"Inmunidad celular inespecífica"
		]
	},
	{
		enunciado: "¿Qué tipo de residuos sanitarios requieren una gestión especial (Clase III) debido a su riesgo infeccioso?",
		correcta: "Residuos de pacientes con enfermedades infecciosas de transmisión exótica o altamente contagiosas",
		incorrectas: [
			"Residuos urbanos generados en las salas de espera de los hospitales",
			"Material de cura como gasas y vendas manchadas con sangre de pacientes sin patología infecciosa conocida"
		]
	},
	{
		enunciado: "El método de potabilización del agua que garantiza una acción desinfectante residual es:",
		correcta: "La cloración",
		incorrectas: [
			"La ozonización",
			"La filtración por carbón activo"
		]
	},
	{
		enunciado: "La transmisión indirecta de una enfermedad se produce cuando:",
		correcta: "El agente infectante requiere un medio intermedio como agua, alimentos o vectores",
		incorrectas: [
			"Existe un contacto físico íntimo entre la fuente y el huésped",
			"Se produce una transferencia por gotas de Flügge en una distancia inferior a un metro"
		]
	},
	{
		enunciado: "En el control de plagas, la 'Lucha Integrada' se define por:",
		correcta: "La combinación de métodos físicos, químicos y biológicos priorizando el menor impacto ambiental",
		incorrectas: [
			"El uso masivo de insecticidas organofosforados para asegurar la erradicación",
			"La eliminación selectiva de los reservorios humanos exclusivamente"
		]
	},
	{
		enunciado: "La prevención primaria de las enfermedades transmisibles actúa fundamentalmente sobre:",
		correcta: "El periodo prepatogénico, eliminando factores de riesgo o aumentando la resistencia del huésped",
		incorrectas: [
			"El diagnóstico precoz mediante programas de cribado masivo",
			"La rehabilitación de las secuelas tras la fase aguda de la enfermedad"
		]
	},
	{
		enunciado: "¿Cuál es el parámetro microbiológico indicador de contaminación fecal más utilizado en el análisis de aguas?",
		correcta: "Escherichia coli",
		incorrectas: [
			"Staphylococcus aureus",
			"Legionella pneumophila"
		]
	},
	{
		enunciado: "Los filtros HEPA se utilizan en ambientes sanitarios de alto riesgo para:",
		correcta: "Retener partículas y microorganismos del aire con una eficiencia superior al 99,97%",
		incorrectas: [
			"Aumentar la humedad relativa en las salas de hospitalización",
			"Eliminar los gases anestésicos mediante adsorción química"
		]
	},
	{
		enunciado: "Una vacuna de tipo 'atenuada' se caracteriza por:",
		correcta: "Contener microorganismos vivos que han perdido su virulencia pero mantienen su inmunogenicidad",
		incorrectas: [
			"Estar compuesta únicamente por fragmentos proteicos o polisacáridos del agente",
			"Requerir siempre múltiples dosis de refuerzo al no replicarse en el huésped"
		]
	},
	{
		enunciado: "La vigilancia epidemiológica se define como:",
		correcta: "La recogida sistemática, análisis e interpretación de datos de salud para la planificación sanitaria",
		incorrectas: [
			"El tratamiento profiláctico de todos los contactos de un caso índice",
			"La inspección técnica obligatoria de las instalaciones de saneamiento"
		]
	},
	{
		enunciado: "En higiene hospitalaria, la zona 'limpia' y la zona 'sucia' deben estar físicamente separadas para evitar:",
		correcta: "La contaminación cruzada",
		incorrectas: [
			"El aumento de la temperatura ambiente",
			"La fatiga del personal sanitario"
		]
	},
	{
		enunciado: "La enfermedad periodontal se asocia principalmente con una higiene deficiente que permite:",
		correcta: "La formación de biopelículas bacterianas y el posterior cálculo dental",
		incorrectas: [
			"El aumento excesivo de la secreción de saliva salina",
			"La desmineralización del esmalte por el consumo de flúor"
		]
	},
	{
		enunciado: "El reservorio de una enfermedad es:",
		correcta: "El hábitat natural donde el agente vive, se reproduce y depende para su supervivencia",
		incorrectas: [
			"El mecanismo físico por el cual el agente llega al huésped",
			"La persona sana que se infecta accidentalmente"
		]
	},
	{
		enunciado: "¿Qué medida de saneamiento ambiental es clave para prevenir la proliferación de Legionella?",
		correcta: "El control de la temperatura y la limpieza de torres de refrigeración y sistemas de agua caliente",
		incorrectas: [
			"La desinsectación sistemática de las redes de alcantarillado",
			"El aumento de la presión en las tuberías de agua potable"
		]
	},
	{
		enunciado: "La quimioprofilaxis está indicada especialmente en:",
		correcta: "Contactos íntimos de pacientes con meningitis meningocócica",
		incorrectas: [
			"La población general para prevenir la gripe estacional",
			"Individuos inmunizados correctamente según el calendario vacunal"
		]
	},
	{
		enunciado: "Un desinfectante se diferencia de un antiséptico en que:",
		correcta: "El primero se aplica sobre objetos inertes y el segundo sobre tejidos vivos",
		incorrectas: [
			"El antiséptico tiene siempre un espectro de acción mucho más amplio",
			"El desinfectante es una sustancia biológica y el antiséptico es química"
		]
	},
	{
		enunciado: "La pediculosis capitis es una infestación cuya profilaxis principal es:",
		correcta: "El examen periódico y la evitación del intercambio de objetos de uso personal (peines, gorros)",
		incorrectas: [
			"La vacunación sistemática en la edad escolar",
			"La desinfección química de las aulas mediante aerosoles"
		]
	},
	{
		enunciado: "El índice de Langelier se utiliza en el tratamiento de aguas para evaluar:",
		correcta: "La tendencia del agua a ser incrustante o corrosiva",
		incorrectas: [
			"La concentración de cloro libre residual",
			"La presencia de metales pesados en suspensión"
		]
	},
	{
		enunciado: "La esterilización por calor húmedo (autoclave) actúa mediante:",
		correcta: "La desnaturalización y coagulación de las proteínas de los microorganismos",
		incorrectas: [
			"La oxidación de los componentes citoplasmáticos por aire seco",
			"La rotura de las cadenas de ADN mediante radiación gamma"
		]
	},
	{
		enunciado: "Se considera un portador sano a aquel individuo que:",
		correcta: "Alberga y excreta el agente infeccioso sin presentar síntomas de la enfermedad",
		incorrectas: [
			"Se encuentra en el periodo de convalecencia tras haber estado enfermo",
			"Presenta síntomas inespecíficos que no permiten el diagnóstico"
		]
	},
	{
		enunciado: "El aislamiento respiratorio está diseñado para prevenir la transmisión por:",
		correcta: "Gotículas de tamaño superior a 5 micras que se sedimentan rápidamente",
		incorrectas: [
			"Núcleos de gotas de tamaño inferior a 5 micras que permanecen suspendidos",
			"Contacto directo con secreciones cutáneas del paciente"
		]
	},
	{
		enunciado: "La gestión de residuos radiactivos en España es competencia de:",
		correcta: "ENRESA (Empresa Nacional de Residuos Radiactivos)",
		incorrectas: [
			"Las corporaciones locales de forma exclusiva",
			"Los servicios de mantenimiento de cada hospital"
		]
	},
	{
		enunciado: "La profilaxis de la hidatidosis incluye como medida fundamental:",
		correcta: "El control sanitario de los perros y la prohibición de alimentarles con vísceras crudas",
		incorrectas: [
			"La pasteurización de la leche de vaca",
			"La vacunación sistemática de los trabajadores de mataderos"
		]
	},
	{
		enunciado: "El 'punto de rocío' en climatización ambiental es importante para evitar:",
		correcta: "Condensaciones que favorezcan el crecimiento de mohos y hongos",
		incorrectas: [
			"El aumento excesivo de la presión parcial de oxígeno",
			"La formación de corrientes de aire por convección"
		]
	},
	{
		enunciado: "Un toxoide o anatoxina es:",
		correcta: "Una toxina bacteriana modificada para que pierda su toxicidad pero mantenga su inmunogenicidad",
		incorrectas: [
			"Un anticuerpo obtenido a partir de suero animal hiperinmunizado",
			"Una sustancia química que bloquea los receptores celulares para toxinas"
		]
	},
	{
		enunciado: "La higiene de manos es la medida más importante para reducir:",
		correcta: "Las infecciones relacionadas con la asistencia sanitaria (IRAS)",
		incorrectas: [
			"La incidencia de enfermedades degenerativas óseas",
			"La resistencia genética de los huéspedes susceptibles"
		]
	},
	{
		enunciado: "La 'Estrategia de Seguridad del Paciente' del SNS incluye la higiene de manos como:",
		correcta: "Un objetivo prioritario para la seguridad clínica",
		incorrectas: [
			"Una medida opcional supeditada a la disponibilidad de guantes",
			"Un procedimiento exclusivo de las unidades de cuidados intensivos"
		]
	},
	{
		enunciado: "En el control de roedores, el uso de rodenticidas anticoagulantes se prefiere porque:",
		correcta: "Evitan el recelo al cebo al retrasar el momento de la muerte del animal",
		incorrectas: [
			"Provocan la muerte instantánea del roedor a la vista de los demás",
			"Son sustancias totalmente inocuas para otras especies animales"
		]
	},
	{
		enunciado: "El tratamiento secundario de las aguas residuales consiste fundamentalmente en:",
		correcta: "Procesos biológicos para eliminar la materia orgánica biodegradable",
		incorrectas: [
			"El desbaste de sólidos gruesos y la decantación primaria",
			"La eliminación de nitrógeno y fósforo mediante procesos químicos avanzados"
		]
	},
	{
		enunciado: "La 'inmunidad de grupo' o de rebaño se alcanza cuando:",
		correcta: "Una proporción elevada de la población está inmunizada, protegiendo indirectamente a los no inmunes",
		incorrectas: [
			"Se vacuna al 100% de la población mundial simultáneamente",
			"El patógeno muta hacia formas menos virulentas de forma natural"
		]
	},
	{
		enunciado: "La fuente de infección se define como:",
		correcta: "El ser vivo o sustrato desde el cual el agente pasa inmediatamente al huésped",
		incorrectas: [
			"El lugar donde el agente se multiplica habitualmente de forma permanente",
			"El vector mecánico que transporta el microorganismo"
		]
	},
	{
		enunciado: "En salud ambiental, los compuestos orgánicos volátiles (COV) son preocupantes porque:",
		correcta: "Actúan como precursores en la formación de ozono troposférico y pueden ser cancerígenos",
		incorrectas: [
			"Favorecen la precipitación de la lluvia ácida de forma directa",
			"Aumentan la dureza del agua potable en las redes de distribución"
		]
	},
	{
		enunciado: "¿Qué técnica de desinfección utiliza ondas sonoras de alta frecuencia para limpiar instrumental?",
		correcta: "Ultrasonidos",
		incorrectas: [
			"Termodesinfectadora",
			"Pulverización catódica"
		]
	},
	{
		enunciado: "La zoonosis es una enfermedad que:",
		correcta: "Se transmite de forma natural de los animales vertebrados al ser humano",
		incorrectas: [
			"Afecta exclusivamente a animales en cautividad",
			"Es producida por el consumo de vegetales contaminados con plaguicidas"
		]
	},
	{
		enunciado: "El periodo de incubación es el tiempo transcurrido entre:",
		correcta: "La entrada del agente en el huésped y la aparición de los primeros síntomas",
		incorrectas: [
			"El inicio de los síntomas y la curación completa de la enfermedad",
			"La exposición al riesgo y la producción de anticuerpos detectables"
		]
	},
	{
		enunciado: "La desinsectación mediante geles de contacto se basa en:",
		correcta: "La ingestión del producto y la posterior transmisión por contacto entre los insectos (efecto cascada)",
		incorrectas: [
			"La creación de una barrera sónica que ahuyenta a los artrópodos",
			"La liberación de feromonas de confusión para evitar el apareamiento"
		]
	},
	{
		enunciado: "La educación para la salud en higiene ambiental busca:",
		correcta: "Modificar comportamientos individuales y colectivos para mejorar el entorno",
		incorrectas: [
			"Sancionar económicamente a quienes no reciclan correctamente",
			"Sustituir las labores de inspección técnica del Estado"
		]
	},
	{
		enunciado: "¿Cuál es la función principal de la flora residente de la piel en la higiene?",
		correcta: "Competir con los microorganismos patógenos por los nutrientes y el espacio",
		incorrectas: [
			"Producir vitaminas que se absorben a través de la epidermis",
			"Degradar el exceso de queratina para evitar la hiperqueratosis"
		]
	}
];