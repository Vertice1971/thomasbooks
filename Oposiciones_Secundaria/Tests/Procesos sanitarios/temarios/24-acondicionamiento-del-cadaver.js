'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cómo se denomina al enfriamiento progresivo del cadáver tras la muerte?",
		correcta: "Algor mortis",
		incorrectas: [
			"Livor mortis",
			"Rigor mortis"
		]
	},
	{
		enunciado: "Las livideces cadavéricas (livor mortis) se producen por:",
		correcta: "Acumulación de la sangre por gravedad en las zonas declives",
		incorrectas: [
			"La contracción muscular post-mortem",
			"La deshidratación de las capas superficiales de la piel"
		]
	},
	{
		enunciado: "¿Cuál es el orden habitual de aparición de la rigidez cadavérica (Ley de Nysten)?",
		correcta: "Mandíbula, cuello, tronco, extremidades superiores e inferiores",
		incorrectas: [
			"Extremidades inferiores, tronco y finalmente la cara",
			"Aparece de forma simultánea en todos los grupos musculares"
		]
	},
	{
		enunciado: "La mancha verdosa abdominal, signo precoz de putrefacción, suele aparecer inicialmente en:",
		correcta: "Fosa ilíaca derecha",
		incorrectas: [
			"Hipocondrio izquierdo",
			"Región epigástrica"
		]
	},
	{
		enunciado: "El examen externo del cadáver antes de la apertura se denomina técnicamente:",
		correcta: "Ectoscopia",
		incorrectas: [
			"Evisceración",
			"Epicrisis"
		]
	},
	{
		enunciado: "La antropometría básica en la necropsia incluye la medición de:",
		correcta: "Talla (longitud) y peso corporal",
		incorrectas: [
			"Perímetro craneal exclusivamente",
			"Distancia entre los pabellones auriculares"
		]
	},
	{
		enunciado: "En el acondicionamiento del cadáver, el taponamiento de orificios naturales tiene como fin:",
		correcta: "Evitar la salida de fluidos y olores durante el traslado",
		incorrectas: [
			"Asegurar que el fijador no se escape de las cavidades",
			"Facilitar la toma de muestras de microbiología"
		]
	},
	{
		enunciado: "Un signo de deshidratación cadavérica visible en los ojos es:",
		correcta: "La mancha negra esclerótica (de Sommer-Larcher)",
		incorrectas: [
			"La midriasis pupilar bilateral",
			"El cambio de color del iris a rojo"
		]
	},
	{
		enunciado: "¿Qué se debe documentar prioritariamente en la observación de la piel?",
		correcta: "Cicatrices, tatuajes, estigmas médicos y lesiones traumáticas",
		incorrectas: [
			"El tipo de vello corporal del fallecido",
			"La marca de la ropa que vestía el cadáver"
		]
	},
	{
		enunciado: "La rigidez cadavérica suele desaparecer cuando:",
		correcta: "Se inicia la fase de putrefacción por autólisis muscular",
		incorrectas: [
			"El cuerpo alcanza la temperatura ambiente",
			"Han transcurrido exactamente 2 horas tras el óbito"
		]
	},
	{
		enunciado: "En la ficha de identificación de un cadáver judicial es fundamental registrar:",
		correcta: "La dentición, malformaciones y rasgos físicos peculiares",
		incorrectas: [
			"El nivel socioeconómico percibido",
			"La preferencia política documentada"
		]
	},
	{
		enunciado: "Las livideces que cambian de posición al mover el cadáver indican que:",
		correcta: "La muerte ha ocurrido hace menos de 10-12 horas (no están fijadas)",
		incorrectas: [
			"El cadáver ha sido congelado previamente",
			"La causa de la muerte fue una intoxicación por monóxido"
		]
	},
	{
		enunciado: "La técnica de sutura más utilizada para cerrar las incisiones de la autopsia es:",
		correcta: "Sutura continua (en zigzag o de peletero)",
		incorrectas: [
			"Punto suelto simple con seda del 0",
			"Grapado quirúrgico automático"
		]
	},
	{
		enunciado: "Tras la necropsia, el aseo del cadáver implica:",
		correcta: "Eliminar restos de sangre y fluidos para presentar el cuerpo con dignidad",
		incorrectas: [
			"Aplicar maquillaje cosmético de alta cobertura",
			"Vestir al cadáver con su traje definitivo"
		]
	},
	{
		enunciado: "La observación de 'telas de araña' o red venosa póstuma se debe a:",
		correcta: "La difusión de la hemoglobina por los vasos sanguíneos superficiales",
		incorrectas: [
			"Una infección fúngica sistémica previa a la muerte",
			"El contacto directo del cuerpo con el suelo húmedo"
		]
	},
	{
		enunciado: "Si se encuentran insectos o larvas en el cadáver, estos deben:",
		correcta: "Recogerse para estudio por entomología forense (tanatocronodiagnóstico)",
		incorrectas: [
			"Eliminarse inmediatamente con insecticida",
			"Ignorarse por no formar parte de la anatomía humana"
		]
	},
	{
		enunciado: "La inspección de las manos puede revelar 'signos de defensa' que sugieren:",
		correcta: "Una muerte violenta con forcejeo previo",
		incorrectas: [
			"Falta de higiene personal del fallecido",
			"Una patología crónica de tipo reumático"
		]
	},
	{
		enunciado: "¿Qué material se utiliza habitualmente para rellenar las cavidades tras la evisceración?",
		correcta: "Serrín, papel absorbente o guata",
		incorrectas: [
			"Arena de sílice",
			"Malla metálica"
		]
	},
	{
		enunciado: "La presencia de 'espuma en hongo' por boca y nariz es un signo clásico de:",
		correcta: "Asfixia por sumersión o edema agudo de pulmón",
		incorrectas: [
			"Infarto agudo de miocardio silencioso",
			"Traumatismo craneoencefálico cerrado"
		]
	},
	{
		enunciado: "En el examen de los orificios naturales, se debe prestar especial atención a:",
		correcta: "La presencia de cuerpos extraños, lesiones o secreciones",
		incorrectas: [
			"El tamaño exacto de los pabellones auriculares",
			"La simetría de las fosas nasales"
		]
	},
	{
		enunciado: "La fotografía del cadáver debe incluir:",
		correcta: "Planos generales, de conjunto y de detalle con escala milimetrada",
		incorrectas: [
			"Solo fotos de la cara para el registro",
			"Fotos artísticas con fondos de colores"
		]
	},
	{
		enunciado: "La 'adiposa' o saponificación es un proceso de conservación natural que ocurre en:",
		correcta: "Medios con mucha humedad y escaso oxígeno",
		incorrectas: [
			"Ambientes extremadamente secos y calurosos",
			"Cámaras frigoríficas industriales"
		]
	},
	{
		enunciado: "La inspección del cuello debe buscar específicamente:",
		correcta: "Surcos de ahorcadura, hematomas o fracturas del hioides",
		incorrectas: [
			"La longitud exacta de la columna cervical",
			"La presencia de glándulas sudoríparas activas"
		]
	},
	{
		enunciado: "En la reconstrucción del cráneo, para evitar el desplazamiento de la calota se usa:",
		correcta: "Sutura de los temporales o masilla adhesiva específica",
		incorrectas: [
			"Pegamento de cianoacrilato industrial",
			"Cinta aislante de alta resistencia"
		]
	},
	{
		enunciado: "El color rosado cereza de las livideces es característico de intoxicación por:",
		correcta: "Monóxido de carbono (CO)",
		incorrectas: [
			"Cianuro",
			"Plaguicidas organofosforados"
		]
	},
	{
		enunciado: "Un signo de muerte cierta detectable en la observación externa es:",
		correcta: "La putrefacción manifiesta",
		incorrectas: [
			"La ausencia aparente de respiración",
			"La falta de respuesta a estímulos dolorosos"
		]
	},
	{
		enunciado: "La momificación se produce preferentemente en cadáveres:",
		correcta: "Delgados, en ambientes secos y con circulación de aire",
		incorrectas: [
			"Obesos, en ambientes cerrados y húmedos",
			"Sumergidos en agua dulce estancada"
		]
	},
	{
		enunciado: "El técnico debe registrar cualquier prótesis externa, como:",
		correcta: "Dentaduras postizas, extremidades artificiales o audífonos",
		incorrectas: [
			"La marca de las gafas del fallecido",
			"El tipo de calzado que portaba el cadáver"
		]
	},
	{
		enunciado: "El examen de las conjuntivas oculares busca detectar:",
		correcta: "Petequias (pequeñas hemorragias), signos de asfixia",
		incorrectas: [
			"La agudeza visual previa del paciente",
			"La presencia de cataratas operadas"
		]
	},
	{
		enunciado: "La 'piloerección' post-mortem (piel de gallina) se debe a:",
		correcta: "La rigidez de los músculos erectores del pelo",
		incorrectas: [
			"Una bajada brusca de la temperatura de la sala",
			"El miedo experimentado en el momento agónico"
		]
	},
	{
		enunciado: "En la reconstrucción post-autopsia, los órganos que no se envían a estudio deben:",
		correcta: "Introducirse en una bolsa de plástico dentro de las cavidades",
		incorrectas: [
			"Desecharse en el contenedor de residuos orgánicos",
			"Incinerarse de forma individual inmediata"
		]
	},
	{
		enunciado: "La palpación del esqueleto durante el examen externo sirve para:",
		correcta: "Detectar fracturas o movilidad anormal de los huesos",
		incorrectas: [
			"Medir la densidad mineral ósea del fallecido",
			"Contar el número exacto de vértebras"
		]
	},
	{
		enunciado: "¿Qué se debe hacer si el cadáver porta joyas o efectos personales de valor?",
		correcta: "Retirarlos, inventariarlos y custodiarlos según protocolo",
		incorrectas: [
			"Dejarlos puestos durante toda la autopsia",
			"Entregarlos al primer familiar que aparezca sin registro"
		]
	},
	{
		enunciado: "El enfisema putrefactivo produce:",
		correcta: "Hinchazón del cadáver por acumulación de gases en los tejidos",
		incorrectas: [
			"Una pérdida de peso drástica en pocas horas",
			"La petrificación de los órganos internos"
		]
	},
	{
		enunciado: "La descripción de las livideces debe incluir:",
		correcta: "Localización, color e intensidad de las mismas",
		incorrectas: [
			"La temperatura exacta de la mancha",
			"El nombre del médico que las observó primero"
		]
	},
	{
		enunciado: "El técnico debe verificar que el cuerpo esté bien identificado mediante:",
		correcta: "Pulsera hospitalaria o etiqueta judicial numerada",
		incorrectas: [
			"Reconocimiento visual por parte del celador",
			"Una marca con rotulador en la frente del cadáver"
		]
	},
	{
		enunciado: "Las heridas por arma blanca deben describirse según:",
		correcta: "Localización anatómica, forma, bordes y dimensiones",
		incorrectas: [
			"El precio estimado del cuchillo utilizado",
			"La trayectoria supuesta antes de abrir el cuerpo"
		]
	},
	{
		enunciado: "La observación de la región anal y genital es obligatoria en:",
		correcta: "Todas las autopsias, especialmente en sospecha de agresión sexual",
		incorrectas: [
			"Solo en pacientes de edad avanzada",
			"Únicamente si el juez lo solicita por escrito"
		]
	},
	{
		enunciado: "El acondicionamiento final busca que el cadáver sea:",
		correcta: "Entregable a los servicios funerarios en condiciones óptimas de higiene",
		incorrectas: [
			"Sumergido en formol para su conservación eterna",
			"Pesado de nuevo antes de salir de la sala"
		]
	},
	{
		enunciado: "El rigor mortis suele completarse totalmente hacia las:",
		correcta: "12-15 horas después de la muerte",
		incorrectas: [
			"2 horas después de la muerte",
			"72 horas después de la muerte"
		]
	}
];