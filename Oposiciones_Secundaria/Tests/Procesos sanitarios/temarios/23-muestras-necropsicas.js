'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuál es el fijador de elección estándar para las muestras de tejido obtenidas en una necropsia?",
		correcta: "Formol neutro al 10%",
		incorrectas: [
			"Alcohol de 96°",
			"Glutaraldehído"
		]
	},
	{
		enunciado: "Para una correcta fijación, la proporción recomendada entre el volumen del fijador y el volumen de la muestra es:",
		correcta: "20:1",
		incorrectas: [
			"2:1",
			"5:1"
		]
	},
	{
		enunciado: "En un estudio toxicológico médico-legal, ¿cuál es la muestra de referencia para determinar la alcoholemia?",
		correcta: "Sangre periférica (femoral)",
		incorrectas: [
			"Contenido gástrico",
			"Bilis"
		]
	},
	{
		enunciado: "Si se sospecha de una infección sistémica, ¿cómo deben obtenerse las muestras para microbiología?",
		correcta: "Mediante técnica estéril antes de la manipulación excesiva de las vísceras",
		incorrectas: [
			"Tras el lavado de los órganos en el fregadero de la mesa",
			"Después de haber fijado los órganos en formol"
		]
	},
	{
		enunciado: "¿Qué muestra es especialmente útil en toxicología cuando el cadáver presenta una putrefacción avanzada?",
		correcta: "Humor vítreo",
		incorrectas: [
			"Orina",
			"Sangre cardíaca"
		]
	},
	{
		enunciado: "El tamaño ideal de los fragmentos de tejido para su procesamiento histológico convencional no debe exceder los:",
		correcta: "3-4 mm de grosor",
		incorrectas: [
			"10 mm de grosor",
			"2 cm de grosor"
		]
	},
	{
		enunciado: "En caso de sospecha de intoxicación por drogas de abuso, ¿qué víscera es fundamental remitir a toxicología?",
		correcta: "Hígado y riñón",
		incorrectas: [
			"Páncreas",
			"Bazo"
		]
	},
	{
		enunciado: "La cadena de custodia en muestras necrópsicas judiciales tiene como fin:",
		correcta: "Garantizar la integridad e identidad de la muestra desde su recogida hasta el análisis",
		incorrectas: [
			"Asegurar que el laboratorio reciba el pago por el análisis",
			"Permitir que la familia guarde una copia de las muestras"
		]
	},
	{
		enunciado: "¿Cómo deben conservarse las muestras destinadas a estudios genéticos (ADN)?",
		correcta: "En fresco, refrigeradas o congeladas sin fijadores químicos",
		incorrectas: [
			"Sumergidas en alcohol etílico de 70°",
			"Fijadas en formol durante al menos 48 horas"
		]
	},
	{
		enunciado: "Para el estudio de lípidos en tejidos mediante cortes por congelación, la muestra debe enviarse:",
		correcta: "En fresco, sin fijación previa",
		incorrectas: [
			"Fijada en parafina",
			"Incluida en resina epoxi"
		]
	},
	{
		enunciado: "La toma de muestras de pulmón para microbiología debe realizarse preferentemente en:",
		correcta: "Zonas con consolidación o sospecha de infección, evitando la contaminación",
		incorrectas: [
			"El ápex pulmonar exclusivamente",
			"Cualquier zona tras la evisceración en masa"
		]
	},
	{
		enunciado: "El etiquetado de los botes de muestras debe realizarse:",
		correcta: "En el cuerpo del bote, nunca solo en la tapa",
		incorrectas: [
			"Únicamente mediante un código de colores",
			"En una hoja aparte que se deja sobre la mesa"
		]
	},
	{
		enunciado: "En muertes por sospecha de sumersión (ahogamiento), se suelen recoger muestras de:",
		correcta: "Médula ósea para búsqueda de diatomeas",
		incorrectas: [
			"Líquido cefalorraquídeo",
			"Tejido muscular estriado"
		]
	},
	{
		enunciado: "¿Qué recipiente es el más adecuado para enviar vísceras a toxicología?",
		correcta: "Botes de plástico o vidrio de boca ancha con cierre hermético",
		incorrectas: [
			"Bolsas de papel perforado",
			"Tubos de ensayo sin tapón"
		]
	},
	{
		enunciado: "La fijación del sistema nervioso central (cerebro completo) requiere:",
		correcta: "Gran volumen de formol y suspensión mediante un hilo para evitar deformaciones",
		incorrectas: [
			"Corte inmediato en lonchas de 1 cm antes de fijar",
			"Sumergirlo en agua destilada durante las primeras 24 horas"
		]
	},
	{
		enunciado: "Si se requiere un estudio de microscopía electrónica, el fijador de elección es:",
		correcta: "Glutaraldehído",
		incorrectas: [
			"Formol neutro",
			"Líquido de Bouin"
		]
	},
	{
		enunciado: "La muestra de orina en una autopsia se obtiene preferentemente mediante:",
		correcta: "Punción directa de la vejiga tras abrir la cavidad abdominal",
		incorrectas: [
			"Expresión manual de la uretra",
			"Recogida del líquido derramado en la mesa de autopsias"
		]
	},
	{
		enunciado: "Los botes destinados a microbiología deben ser:",
		correcta: "Estériles",
		incorrectas: [
			"Opacos a la luz",
			"De cartón prensado"
		]
	},
	{
		enunciado: "La presencia de aire o gas en las muestras de fijación puede provocar:",
		correcta: "Artefactos de flotación y mala penetración del fijador",
		incorrectas: [
			"Una aceleración beneficiosa del proceso de fijación",
			"Cambios en el color de los núcleos celulares"
		]
	},
	{
		enunciado: "¿Cuál es la temperatura adecuada para la conservación temporal de muestras de tejido en fresco antes de su envío?",
		correcta: "4°C (refrigeración)",
		incorrectas: [
			"20°C (temperatura ambiente)",
			"37°C (estufa)"
		]
	},
	{
		enunciado: "El líquido de Bouin es un fijador compuesto por:",
		correcta: "Ácido pícrico, formol y ácido acético",
		incorrectas: [
			"Alcohol metílico y acetona",
			"Cloruro sódico y agua destilada"
		]
	},
	{
		enunciado: "Para el estudio médico-legal de manchas en la piel o heridas por arma de fuego, se debe remitir:",
		correcta: "El rodete cutáneo que rodea el orificio de entrada",
		incorrectas: [
			"Únicamente una fotografía de la lesión",
			"Un frotis seco de la piel sana adyacente"
		]
	},
	{
		enunciado: "La toma de muestras de corazón para estudio histológico debe incluir siempre:",
		correcta: "Muestras de ambos ventrículos, tabique e hitos del sistema de conducción",
		incorrectas: [
			"Solo el ápex del corazón",
			"Únicamente las válvulas cardíacas"
		]
	},
	{
		enunciado: "¿Qué volumen de sangre se recomienda recoger para un análisis toxicológico completo?",
		correcta: "Entre 20 y 50 ml",
		incorrectas: [
			"Menos de 2 ml",
			"Al menos 500 ml"
		]
	},
	{
		enunciado: "En la conservación de muestras, el proceso de autólisis se detiene mediante:",
		correcta: "La fijación química rápida",
		incorrectas: [
			"La exposición del tejido al aire",
			"El lavado con suero fisiológico templado"
		]
	},
	{
		enunciado: "La muestra de bilis es especialmente útil para detectar:",
		correcta: "Metabolitos de ciertos fármacos y opiáceos",
		incorrectas: [
			"La presencia de monóxido de carbono",
			"El tiempo transcurrido desde la última comida"
		]
	},
	{
		enunciado: "Para evitar la contaminación de las muestras de toxicología, se debe:",
		correcta: "Usar recipientes limpios y no añadir fijadores químicos",
		incorrectas: [
			"Lavar las vísceras con abundante lejía antes de enviarlas",
			"Mezclar todos los órganos en un mismo bote grande"
		]
	},
	{
		enunciado: "El envío de muestras de hueso (ej. fémur) para identificación requiere:",
		correcta: "Remitir el hueso limpio de partes blandas y en seco",
		incorrectas: [
			"Sumergir el hueso en ácido clorhídrico concentrado",
			"Pulverizar el hueso antes de meterlo en el bote"
		]
	},
	{
		enunciado: "¿Qué información mínima debe constar en la solicitud de análisis de muestras?",
		correcta: "Identificación del cadáver, tipo de muestra, fecha de toma y estudio solicitado",
		incorrectas: [
			"Nombre de los herederos legales",
			"Marca del instrumental utilizado en la necropsia"
		]
	},
	{
		enunciado: "La recogida de cabellos para toxicología permite:",
		correcta: "Estudiar el consumo crónico o histórico de sustancias",
		incorrectas: [
			"Determinar la causa inmediata de la muerte",
			"Medir el nivel de alcohol en el momento del fallecimiento"
		]
	},
	{
		enunciado: "En una muestra de tejido fijada, una coloración amarillenta excesiva puede deberse al uso de:",
		correcta: "Ácido pícrico (Líquido de Bouin)",
		incorrectas: [
			"Formol neutro",
			"Alcohol de 96°"
		]
	},
	{
		enunciado: "La fijación por inmersión es el método donde:",
		correcta: "La muestra se sumerge completamente en el líquido fijador",
		incorrectas: [
			"El fijador se inyecta a través del sistema vascular",
			"Se aplican vapores de formaldehído sobre la muestra"
		]
	},
	{
		enunciado: "La 'estabilización' de las muestras de orina para toxicología puede requerir:",
		correcta: "Adición de conservantes específicos según el tóxico sospechado (ej. fluoruro sódico)",
		incorrectas: [
			"Hervir la orina antes de su envío",
			"Diluirla al 50% con agua del grifo"
		]
	},
	{
		enunciado: "Para estudios histoquímicos de enzimas, la muestra debe ser:",
		correcta: "Congelada rápidamente (ej. con nitrógeno líquido)",
		incorrectas: [
			"Fijada en formol caliente",
			"Secada al horno a 60°C"
		]
	},
	{
		enunciado: "El transporte de muestras infecciosas debe cumplir la normativa de:",
		correcta: "Triple embalaje (recipiente primario, secundario y embalaje exterior)",
		incorrectas: [
			"Envío en sobre convencional de correos",
			"Transporte en cajas de madera abiertas para ventilación"
		]
	},
	{
		enunciado: "¿Cuál es la función del humor vítreo en el estudio del intervalo post-mortem?",
		correcta: "Determinación de los niveles de potasio",
		incorrectas: [
			"Análisis de la cantidad de vitamina C",
			"Medición de la presión intraocular post-médica"
		]
	},
	{
		enunciado: "En la toma de muestras de hígado, se recomienda obtener fragmentos de:",
		correcta: "Lóbulo derecho, alejados de la vesícula biliar para evitar la tinción",
		incorrectas: [
			"La zona hiliar exclusivamente",
			"Solo de las áreas que presenten cirrosis"
		]
	},
	{
		enunciado: "El principal riesgo de una mala fijación (insuficiente volumen de fijador) es:",
		correcta: "La putrefacción interna del centro de la muestra",
		incorrectas: [
			"Que la muestra se vuelva demasiado dura para cortar",
			"Que el bote explote por la presión"
		]
	},
	{
		enunciado: "Las muestras de contenido gástrico son fundamentales para:",
		correcta: "Identificar tóxicos ingeridos recientemente y restos de alimentos",
		incorrectas: [
			"Estudiar la función renal del fallecido",
			"Determinar el grupo sanguíneo del sujeto"
		]
	},
	{
		enunciado: "Tras la toma de muestras, el técnico debe asegurarse de que:",
		correcta: "Los botes estén bien cerrados, limpios exteriormente y documentados",
		incorrectas: [
			"Se envíen todas las muestras en la misma bolsa sin separar",
			"Se guarden las muestras en el maletero del coche del patólogo"
		]
	}
];