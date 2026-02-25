'use strict';

var PREGUNTAS = [
	{
		enunciado: "El principal instrumento jurídico internacional que regula la respuesta de salud pública ante la propagación de enfermedades en fronteras es:",
		correcta: "El Reglamento Sanitario Internacional (RSI) de la OMS",
		incorrectas: [
			"El Convenio de Ginebra sobre sanidad marítima",
			"La Ley General de Sanidad 14/1986"
		]
	},
	{
		enunciado: "¿Cuál es la vigencia estándar del Certificado de Sanidad a Bordo o de su Exención?",
		correcta: "6 meses, prorrogable como máximo un mes adicional",
		incorrectas: [
			"1 año natural desde la fecha de inspección",
			"Indefinida mientras no cambie la bandera del buque"
		]
	},
	{
		enunciado: "El certificado que acredita que un buque está libre de roedores y otros vectores se denomina:",
		correcta: "Certificado de Exención de Control de Sanidad a Bordo",
		incorrectas: [
			"Patente de Sanidad Exterior",
			"Cuaderno de Desinsectación Portuaria"
		]
	},
	{
		enunciado: "En Sanidad Exterior, la 'Declaración Marítima de Sanidad' es un documento que debe cumplimentar:",
		correcta: "El Capitán del buque antes de la llegada al primer puerto de escala",
		incorrectas: [
			"El médico del puerto tras subir a bordo",
			"El consignatario de la carga al finalizar la descarga"
		]
	},
	{
		enunciado: "El Convenio MARPOL regula principalmente:",
		correcta: "La prevención de la contaminación del medio marino por los buques",
		incorrectas: [
			"La formación mínima de los oficiales médicos a bordo",
			"La estandarización de los botiquines de primeros auxilios"
		]
	},
	{
		enunciado: "El botiquín de Categoría A según el RD 258/1999 es obligatorio para buques que:",
		correcta: "Realizan navegaciones alejadas de la costa sin límite de tiempo o distancia",
		incorrectas: [
			"Son embarcaciones de recreo que no salen de aguas jurisdiccionales",
			"Realizan trayectos locales de menos de 24 horas de duración"
		]
	},
	{
		enunciado: "Para garantizar la potabilidad del agua almacenada en los tanques de un buque, se debe mantener un nivel de cloro libre residual de:",
		correcta: "Entre 0,2 y 0,5 mg/l en los puntos de consumo",
		incorrectas: [
			"Exactamente 5,0 mg/l para evitar la Legionella",
			"0 mg/l para evitar el sabor metálico del agua"
		]
	},
	{
		enunciado: "La desratización de un buque mediante fumigación con gases tóxicos requiere:",
		correcta: "La evacuación total de la tripulación y la posterior ventilación certificada",
		incorrectas: [
			"Únicamente el sellado de las bodegas de carga",
			"La presencia del Capitán en el puente durante todo el proceso"
		]
	},
	{
		enunciado: "El Centro Radio-Médico Español (CRME) depende orgánicamente de:",
		correcta: "El Instituto Social de la Marina (ISM)",
		incorrectas: [
			"El Ministerio de Sanidad (Sanidad Exterior)",
			"La Sociedad de Salvamento y Seguridad Marítima (SASEMAR)"
		]
	},
	{
		enunciado: "Ante un caso sospechoso de enfermedad infectocontagiosa a bordo en alta mar, la primera medida debe ser:",
		correcta: "El aislamiento del paciente en el camarote de enfermería o individual",
		incorrectas: [
			"El desembarco inmediato mediante helicóptero de rescate",
			"La administración de antibióticos a toda la tripulación de forma profiláctica"
		]
	},
	{
		enunciado: "¿Qué anexo del Convenio MARPOL regula específicamente la eliminación de basuras desde los buques?",
		correcta: "Anexo V",
		incorrectas: [
			"Anexo I",
			"Anexo IV"
		]
	},
	{
		enunciado: "Los tanques de agua potable a bordo deben estar revestidos internamente con:",
		correcta: "Pinturas epoxídicas homologadas para uso alimentario",
		incorrectas: [
			"Plomo para asegurar la impermeabilidad",
			"Cobre para aprovechar su acción bactericida natural"
		]
	},
	{
		enunciado: "La 'Libre Plática' es la autorización sanitaria que permite:",
		correcta: "El inicio de las operaciones de carga, descarga y el desembarco de la tripulación",
		incorrectas: [
			"La comunicación por radio con otros buques en la zona",
			"El uso de los botes salvavidas para ejercicios de entrenamiento"
		]
	},
	{
		enunciado: "En un buque, el sistema de tratamiento de aguas sucias (sewage) debe cumplir las normas del:",
		correcta: "Anexo IV del Convenio MARPOL",
		incorrectas: [
			"Reglamento General de Puertos",
			"Código Internacional de Seguridad (ISPS)"
		]
	},
	{
		enunciado: "¿Cuál es el vector principal que se intenta controlar en Sanidad Exterior para prevenir la peste bubónica?",
		correcta: "La pulga de la rata (Xenopsylla cheopis)",
		incorrectas: [
			"El mosquito Aedes aegypti",
			"La mosca del vinagre"
		]
	},
	{
		enunciado: "El botiquín de Categoría C está destinado generalmente a:",
		correcta: "Embarcaciones de cabotaje o navegación cercana a la costa y botes salvavidas",
		incorrectas: [
			"Buques factoría con más de 100 tripulantes",
			"Grandes cruceros transatlánticos"
		]
	},
	{
		enunciado: "El control de Legionella en buques es especialmente crítico en:",
		correcta: "Duchas, sistemas de aire acondicionado y bañeras de hidromasaje",
		incorrectas: [
			"Las sentinas de la sala de máquinas",
			"El almacenamiento de combustible diesel"
		]
	},
	{
		enunciado: "La inspección de Sanidad Exterior en buques de pasaje pone especial énfasis en:",
		correcta: "La higiene de las cocinas y la gestión de alimentos para prevenir brotes de norovirus",
		incorrectas: [
			"El calado del buque y la estabilidad de la carga",
			"La fecha de caducidad de los chalecos salvavidas"
		]
	},
	{
		enunciado: "El 'Libro de Registro de Basuras' es obligatorio para:",
		correcta: "Todos los buques de arqueo bruto igual o superior a 400 GT",
		incorrectas: [
			"Solo buques que transportan mercancías peligrosas",
			"Únicamente buques de bandera extranjera en puertos españoles"
		]
	},
	{
		enunciado: "¿Qué gas se utiliza habitualmente en la actualidad para la fumigación de bodegas contra insectos de productos almacenados?",
		correcta: "Fosfuro de aluminio (Fosfina)",
		incorrectas: [
			"Dióxido de carbono comprimido",
			"Argón líquido"
		]
	},
	{
		enunciado: "La cuarentena de un buque implica:",
		correcta: "La restricción de actividades y movimientos de personas sospechosas de estar infectadas",
		incorrectas: [
			"La prohibición total de suministrar víveres al buque",
			"El hundimiento controlado de la embarcación en caso de peste"
		]
	},
	{
		enunciado: "En la gestión del agua potable a bordo, la 'ósmosis inversa' se utiliza para:",
		correcta: "La desalinización del agua de mar para obtener agua dulce",
		incorrectas: [
			"La eliminación del exceso de cloro antes del consumo",
			"La oxigenación del agua almacenada en tanques profundos"
		]
	},
	{
		enunciado: "La Guía Médica Internacional para Buques es una publicación conjunta de:",
		correcta: "OMS, OMI y OIT",
		incorrectas: [
			"Interpol y la OTAN",
			"Ministerio de Sanidad y Ministerio de Fomento"
		]
	},
	{
		enunciado: "La presencia de cucarachas (Blattodea) en la zona de cocina de un buque se considera:",
		correcta: "Una deficiencia sanitaria grave que puede motivar la denegación del certificado",
		incorrectas: [
			"Un hecho inevitable en la navegación tropical",
			"Una infracción leve que no requiere medidas correctoras"
		]
	},
	{
		enunciado: "¿Qué autoridad española coordina las inspecciones de Sanidad Exterior en los puertos?",
		correcta: "Las Dependencias de Sanidad de las Delegaciones y Subdelegaciones del Gobierno",
		incorrectas: [
			"El Servicio de Vigilancia Aduanera",
			"La Capitanía Marítima de cada puerto"
		]
	},
	{
		enunciado: "El botiquín de Categoría B es el requerido para buques que operan:",
		correcta: "A una distancia de la costa no superior a 150 millas y menos de 24 horas del puerto",
		incorrectas: [
			"En cualquier zona marítima durante más de 6 meses",
			"Exclusivamente en aguas fluviales"
		]
	},
	{
		enunciado: "Las basuras compuestas por restos de alimentos pueden descargarse al mar fuera de zonas especiales si el buque está:",
		correcta: "En ruta y a más de 12 millas náuticas de la costa",
		incorrectas: [
			"Fondeado en la bahía de un puerto comercial",
			"A cualquier distancia, siempre que estén trituradas"
		]
	},
	{
		enunciado: "La desinsectación de las aeronaves en vuelos internacionales busca principalmente prevenir la entrada de:",
		correcta: "Mosquitos vectores de enfermedades como el Dengue o la Malaria",
		incorrectas: [
			"Termitas que puedan dañar la estructura del avión",
			"Abejas melíferas procedentes de otros continentes"
		]
	},
	{
		enunciado: "El examen de las condiciones sanitarias de un buque por Sanidad Exterior incluye:",
		correcta: "Agua potable, alimentos, residuos, vectores y registro médico",
		incorrectas: [
			"Solo la revisión de los títulos de los oficiales",
			"Exclusivamente el control de la carga declarada en aduanas"
		]
	},
	{
		enunciado: "La señal internacional de solicitud de 'Libre Plática' por radio o banderas (bandera Lima) indica:",
		correcta: "Que el buque está 'sano' y solicita el despacho de entrada",
		incorrectas: [
			"Que hay una enfermedad grave a bordo y solicita cuarentena",
			"Que el buque ha sufrido un abordaje y requiere remolque"
		]
	},
	{
		enunciado: "La inspección de Sanidad Exterior puede denegar la entrada a puerto de un buque si:",
		correcta: "Supone un riesgo inminente y grave para la salud pública de la población en tierra",
		incorrectas: [
			"La pintura del casco no es la adecuada según la normativa ambiental",
			"La tripulación no habla el idioma oficial del puerto de llegada"
		]
	},
	{
		enunciado: "En el control de vectores a bordo, las 'defensas de ratas' (rat guards) se colocan en:",
		correcta: "Las amarras que sujetan el buque al muelle",
		incorrectas: [
			"Las puertas de acceso a los camarotes",
			"Los conductos de ventilación de las bodegas"
		]
	},
	{
		enunciado: "La evacuación médica (MEDEVAC) desde un buque se coordina habitualmente entre:",
		correcta: "El CRME, el Centro de Coordinación de Salvamento Marítimo y el Capitán",
		incorrectas: [
			"El Ministerio de Asuntos Exteriores y la embajada del buque",
			"La policía portuaria y el práctico del puerto"
		]
	},
	{
		enunciado: "¿Cuál es el tratamiento físico más común a bordo para asegurar la desinfección continua del agua potable?",
		correcta: "Lámparas de radiación ultravioleta (UV)",
		incorrectas: [
			"Hervido constante de todo el suministro de agua",
			"Filtración por arena de sílice a baja presión"
		]
	},
	{
		enunciado: "El almacenamiento de cadáveres a bordo en navegaciones largas debe realizarse en:",
		correcta: "Cámaras frigoríficas específicas o el área destinada a tal fin en el botiquín A",
		incorrectas: [
			"Cualquier congelador de la cocina que esté vacío",
			"En la cubierta principal cubiertos por una lona"
		]
	},
	{
		enunciado: "La normativa española sobre botiquines a bordo exige que las medicinas estén:",
		correcta: "Etiquetadas de forma clara y con su fecha de caducidad vigente",
		incorrectas: [
			"Disponibles libremente para cualquier miembro de la tripulación",
			"Almacenadas en envases de vidrio transparente para su rápida identificación"
		]
	},
	{
		enunciado: "Un 'Punto de Entrada' designado según el RSI 2005 debe contar con:",
		correcta: "Capacidad para aplicar medidas de control sanitario y evaluar viajeros enfermos",
		incorrectas: [
			"Un hospital de campaña con al menos 500 camas",
			"Laboratorios de nivel de bioseguridad 4 (P4) de forma obligatoria"
		]
	},
	{
		enunciado: "La gestión de las aguas grises (procedentes de lavabos y duchas) en buques está regulada para evitar:",
		correcta: "La eutrofización y la contaminación microbiológica de las zonas costeras",
		incorrectas: [
			"La corrosión prematura de las hélices del buque",
			"El aumento de la salinidad del agua del puerto"
		]
	},
	{
		enunciado: "El Certificado de Sanidad a Bordo debe estar redactado, al menos, en:",
		correcta: "Inglés o francés, además del idioma nacional del país emisor",
		incorrectas: [
			"Español y latín exclusivamente",
			"Cualquier idioma siempre que se adjunte una traducción jurada"
		]
	},
	{
		enunciado: "La función de Sanidad Exterior en relación con la importación de alimentos es:",
		correcta: "Verificar que cumplen los requisitos sanitarios exigidos por la normativa nacional y comunitaria",
		incorrectas: [
			"Fijar el precio de mercado de los productos importados",
			"Garantizar que no se produzca competencia desleal con el producto local"
		]
	}
];