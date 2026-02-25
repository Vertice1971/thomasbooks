'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cómo se denomina al proceso por el cual el receptor interpreta los signos emitidos por el emisor para comprender el mensaje?",
		correcta: "Descodificación",
		incorrectas: [
			"Codificación",
			"Retroalimentación"
		]
	},
	{
		enunciado: "En la relación clínica, la 'escucha activa' se diferencia de la audición pasiva por:",
		correcta: "La implicación psicológica y la verificación de la comprensión del mensaje",
		incorrectas: [
			"El mantenimiento de un silencio absoluto durante toda la consulta",
			"La toma de notas exhaustiva de cada palabra pronunciada por el paciente"
		]
	},
	{
		enunciado: "La técnica de comunicación denominada 'paráfrasis' consiste en:",
		correcta: "Repetir con las propias palabras del profesional el contenido principal del mensaje del paciente",
		incorrectas: [
			"Interrumpir al paciente para corregir su terminología anatómica",
			"Realizar una interpretación psicoanalítica de los sueños del paciente"
		]
	},
	{
		enunciado: "¿Qué barrera de la comunicación se produce cuando existen diferencias en el significado de las palabras entre emisor y receptor?",
		correcta: "Barrera semántica",
		incorrectas: [
			"Barrera física",
			"Barrera fisiológica"
		]
	},
	{
		enunciado: "El concepto de 'empatía' en el entorno sanitario implica:",
		correcta: "Comprender el estado emocional del paciente manteniendo la distancia terapéutica",
		incorrectas: [
			"Sentir el mismo dolor físico y emocional que experimenta el enfermo",
			"Dar la razón al paciente en todas sus demandas para evitar conflictos"
		]
	},
	{
		enunciado: "En la comunicación no verbal, el estudio del uso del espacio y las distancias personales se denomina:",
		correcta: "Proxémica",
		incorrectas: [
			"Cinésica",
			"Paralingüística"
		]
	},
	{
		enunciado: "La 'asertividad' como estilo comunicativo del profesional de procesos sanitarios permite:",
		correcta: "Defender los criterios clínicos de forma firme y respetuosa, sin agresividad",
		incorrectas: [
			"Priorizar siempre los deseos del paciente sobre la evidencia científica",
			"Utilizar un tono de voz autoritario para asegurar el cumplimiento terapéutico"
		]
	},
	{
		enunciado: "Señale un componente paralingüístico de la comunicación:",
		correcta: "El volumen, el tono y la velocidad del habla",
		incorrectas: [
			"La postura corporal y el contacto visual",
			"La distancia mantenida durante la entrevista clínica"
		]
	},
	{
		enunciado: "El 'efecto halo' en la interacción con el paciente ocurre cuando:",
		correcta: "Una característica positiva del profesional sesga la percepción general del paciente",
		incorrectas: [
			"El paciente presenta una visión borrosa debido a una patología ocular",
			"La iluminación de la consulta impide la correcta observación de signos"
		]
	},
	{
		enunciado: "¿Cuál es la función principal de la retroalimentación o feedback en el proceso comunicativo?",
		correcta: "Asegurar que el mensaje ha sido recibido y comprendido según la intención del emisor",
		incorrectas: [
			"Sancionar al receptor si no ha prestado atención a las instrucciones",
			"Aumentar el tiempo de la consulta para facturar más servicios"
		]
	},
	{
		enunciado: "Una pregunta de tipo 'abierta' en la entrevista clínica es útil para:",
		correcta: "Fomentar que el paciente se exprese con sus propias palabras y aporte matices",
		incorrectas: [
			"Confirmar datos administrativos como el número de la seguridad social",
			"Limitar el tiempo de respuesta cuando hay mucha presión asistencial"
		]
	},
	{
		enunciado: "El modelo de comunicación de Shannon y Weaver introdujo el concepto de 'ruido' para referirse a:",
		correcta: "Cualquier interferencia que altere o distorsione la señal en el canal",
		incorrectas: [
			"Únicamente el sonido ambiental que supera los 80 decibelios",
			"La falta de educación del paciente durante la anamnesis"
		]
	},
	{
		enunciado: "La técnica de la 'recapitulación' al final de la consulta sirve para:",
		correcta: "Sintetizar los puntos clave tratados y los acuerdos alcanzados sobre el plan terapéutico",
		incorrectas: [
			"Cobrar los honorarios antes de que el paciente abandone el edificio",
			"Criticar el comportamiento de otros profesionales que trataron al paciente"
		]
	},
	{
		enunciado: "¿Qué distancia se considera 'social' en la interacción profesional, según Hall?",
		correcta: "De 1,2 a 3,6 metros",
		incorrectas: [
			"Menos de 45 centímetros",
			"Más de 7 metros"
		]
	},
	{
		enunciado: "El estilo de comunicación 'inhibido' o pasivo en un profesional sanitario suele generar:",
		correcta: "Inseguridad en el paciente y falta de control sobre la adherencia terapéutica",
		incorrectas: [
			"Una imagen de gran autoridad y respeto ante la comunidad",
			"Una resolución rápida y eficaz de todos los problemas clínicos"
		]
	},
	{
		enunciado: "En la comunicación no verbal, los 'emblemas' son gestos que:",
		correcta: "Tienen una traducción verbal directa y conocida en una cultura",
		incorrectas: [
			"Acompañan al habla para enfatizar una palabra pero carecen de significado propio",
			"Sirven para canalizar la tensión emocional sin intención comunicativa"
		]
	},
	{
		enunciado: "La 'falsa confianza' como error de comunicación consiste en:",
		correcta: "Asegurar resultados positivos sin base científica para tranquilizar momentáneamente",
		incorrectas: [
			"Permitir que el paciente tutee al profesional desde el primer momento",
			"Compartir datos personales del sanitario con la familia del paciente"
		]
	},
	{
		enunciado: "¿Qué se entiende por 'encuadre' en la entrevista clínica?",
		correcta: "Definir los objetivos, roles y límites de tiempo de la interacción",
		incorrectas: [
			"Colocar el título oficial del profesional en un lugar visible de la pared",
			"Ajustar la cámara de vídeo para realizar una sesión de telemedicina"
		]
	},
	{
		enunciado: "La 'barrera psicológica' en la comunicación sanitaria puede deberse a:",
		correcta: "Prejuicios, estados emocionales intensos o estereotipos del emisor o receptor",
		incorrectas: [
			"La afasia del paciente provocada por un accidente cerebrovascular",
			"El mal funcionamiento de los audífonos en pacientes geriátricos"
		]
	},
	{
		enunciado: "El uso de la mirada en la relación clínica (oculésica) tiene como función principal:",
		correcta: "Regular los turnos de palabra y mostrar interés o disposición",
		incorrectas: [
			"Detectar patologías hepáticas mediante la observación de la esclera",
			"Intimidar al paciente para que no realice demasiadas preguntas"
		]
	},
	{
		enunciado: "En la transmisión de malas noticias, el protocolo SPIKES (o EPICE) recomienda:",
		correcta: "Explorar la percepción del paciente antes de dar la información",
		incorrectas: [
			"Dar toda la información de forma técnica y rápida para evitar el llanto",
			"Ocultar la verdad si la familia lo solicita expresamente"
		]
	},
	{
		enunciado: "La comunicación 'vertical' ascendente en una organización sanitaria fluye desde:",
		correcta: "Los profesionales operativos hacia la dirección del centro",
		incorrectas: [
			"La gerencia hacia los supervisores de enfermería",
			"El hospital de referencia hacia los centros de salud de la zona"
		]
	},
	{
		enunciado: "Un 'mensaje yo' en la comunicación asertiva se caracteriza por:",
		correcta: "Expresar los propios sentimientos o necesidades sin culpar al otro",
		incorrectas: [
			"Hablar exclusivamente de la propia carrera profesional del sanitario",
			"Utilizar la primera persona del plural para diluir responsabilidades"
		]
	},
	{
		enunciado: "La 'congruencia' comunicativa se alcanza cuando:",
		correcta: "El lenguaje verbal y el no verbal transmiten el mismo significado",
		incorrectas: [
			"El paciente acepta el tratamiento sin realizar ninguna objeción",
			"El diagnóstico coincide con las expectativas previas del enfermo"
		]
	},
	{
		enunciado: "En la escucha activa, los 'reflejos' sirven para:",
		correcta: "Mostrar al paciente que se comprenden sus sentimientos",
		incorrectas: [
			"Comprobar la integridad de los nervios craneales del paciente",
			"Repetir mecánicamente las últimas tres palabras del interlocutor"
		]
	},
	{
		enunciado: "La Ley 41/2002, básica reguladora de la autonomía del paciente, destaca en comunicación:",
		correcta: "El derecho a una información asistencial veraz, comprensible y adecuada",
		incorrectas: [
			"La prohibición de que los pacientes hablen entre ellos en las habitaciones",
			"La obligatoriedad de usar soporte informático para todas las comunicaciones"
		]
	},
	{
		enunciado: "Un distractor en la comunicación conocido como 'estereotipia' consiste en:",
		correcta: "Utilizar frases hechas o respuestas automáticas que ignoran la individualidad",
		incorrectas: [
			"Copiar los gestos del paciente para intentar generar empatía",
			"Realizar movimientos repetitivos con las manos debido al nerviosismo"
		]
	},
	{
		enunciado: "¿Qué tipo de comunicación es la que se produce entre miembros de un mismo nivel jerárquico?",
		correcta: "Comunicación horizontal",
		incorrectas: [
			"Comunicación descendente",
			"Comunicación informal"
		]
	},
	{
		enunciado: "La técnica de la 'claudicación simulada' (banco de niebla) ante un paciente agresivo busca:",
		correcta: "Dar la razón en parte a la crítica sin entrar en discusiones directas",
		incorrectas: [
			"Abandonar la consulta de forma inmediata pidiendo ayuda a seguridad",
			"Reconocer que el profesional no tiene ninguna formación sobre el tema"
		]
	},
	{
		enunciado: "La 'sonrisa social' en el entorno clínico debe utilizarse para:",
		correcta: "Facilitar el rapport y reducir la tensión inicial de la entrevista",
		incorrectas: [
			"Reírse de las dudas o confusiones que presente el paciente",
			"Sustituir la necesidad de dar explicaciones técnicas complejas"
		]
	},
	{
		enunciado: "El uso excesivo de jerga médica con pacientes de bajo nivel instructivo es un ejemplo de:",
		correcta: "Asimetría comunicativa disfuncional",
		incorrectas: [
			"Adaptación curricular del mensaje sanitario",
			"Promoción de la alfabetización científica"
		]
	},
	{
		enunciado: "En la comunicación no verbal, los 'adaptadores' son conductas que:",
		correcta: "Sirven para manejar emociones o necesidades físicas (ej. rascarse)",
		incorrectas: [
			"Indican el final de un turno de palabra de forma explícita",
			"Son gestos universales idénticos en todas las culturas del mundo"
		]
	},
	{
		enunciado: "La 'validación' como herramienta comunicativa consiste en:",
		correcta: "Aceptar y reconocer las emociones del paciente como legítimas",
		incorrectas: [
			"Firmar el volante de derivación a la medicina especialista",
			"Confirmar que los datos de la tarjeta sanitaria son correctos"
		]
	},
	{
		enunciado: "¿Qué caracteriza a la comunicación 'informal' en un centro sanitario?",
		correcta: "Surge espontáneamente entre los trabajadores fuera de los canales oficiales",
		incorrectas: [
			"Se basa exclusivamente en circulares y protocolos escritos por la dirección",
			"Es la única que tiene validez legal ante un juicio por negligencia"
		]
	},
	{
		enunciado: "El 'ruido fisiológico' se produce cuando el proceso comunicativo falla debido a:",
		correcta: "Alteraciones orgánicas en el emisor o receptor (ej. sordera, dolor intenso)",
		incorrectas: [
			"La presencia de obras en la calle adyacente al consultorio",
			"Diferencias ideológicas profundas entre el médico y el enfermo"
		]
	},
	{
		enunciado: "La 'distancia íntima' (0-45 cm) solo debe utilizarse en sanidad para:",
		correcta: "Procedimientos de exploración física o cuidados directos",
		incorrectas: [
			"Dar consejos generales sobre alimentación saludable",
			"Discutir el presupuesto de una intervención con el paciente"
		]
	},
	{
		enunciado: "La 'escucha empática' requiere que el profesional:",
		correcta: "Suspenda temporalmente sus propios juicios de valor",
		incorrectas: [
			"Mire fijamente a los ojos del paciente sin pestañear",
			"Interrumpa frecuentemente para dar consejos morales"
		]
	},
	{
		enunciado: "¿Qué elemento es fundamental para transformar la comunicación en 'interacción'?",
		correcta: "La reciprocidad",
		incorrectas: [
			"El uso de medios digitales",
			"La velocidad de transmisión"
		]
	},
	{
		enunciado: "El 'doble vínculo' en comunicación ocurre cuando:",
		correcta: "Se envían mensajes contradictorios simultáneamente por distintos canales",
		incorrectas: [
			"El paciente debe acudir a dos especialistas el mismo día",
			"Se utiliza un idioma que ambos interlocutores dominan a la perfección"
		]
	},
	{
		enunciado: "La comunicación terapéutica tiene como objetivo final:",
		correcta: "El bienestar del paciente y la mejora de su estado de salud",
		incorrectas: [
			"La satisfacción personal y el lucimiento intelectual del profesional",
			"El ahorro de costes en pruebas diagnósticas complementarias"
		]
	}
];