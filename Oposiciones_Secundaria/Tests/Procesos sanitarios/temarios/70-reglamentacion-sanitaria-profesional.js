'use strict';

var PREGUNTAS = [
	{
		enunciado: "El Reglamento (CE) nº 852/2004 establece que la responsabilidad principal de la seguridad de un producto alimenticio recae en:",
		correcta: "El operador de la empresa alimentaria",
		incorrectas: [
			"La inspección técnica de Sanidad Exterior",
			"El consumidor final mediante el etiquetado"
		]
	},
	{
		enunciado: "¿Cuál es el primer paso en la aplicación de los principios del sistema APPCC?",
		correcta: "Realizar un análisis de peligros",
		incorrectas: [
			"Establecer un sistema de vigilancia",
			"Determinar los puntos de control crítico"
		]
	},
	{
		enunciado: "En el ámbito profesional, se define como 'Punto de Control Crítico' (PCC) a:",
		correcta: "Una etapa en la que se puede aplicar un control esencial para prevenir o eliminar un peligro alimentario",
		incorrectas: [
			"Cualquier lugar de la instalación donde se manipulen productos químicos",
			"El registro documental de las bajas laborales por enfermedades infecciosas"
		]
	},
	{
		enunciado: "Según el RD 664/1997, los agentes biológicos que pueden causar una enfermedad grave y presentan un serio peligro para los trabajadores, con riesgo de propagación pero con profilaxis eficaz, pertenecen al:",
		correcta: "Grupo 3",
		incorrectas: [
			"Grupo 2",
			"Grupo 4"
		]
	},
	{
		enunciado: "La trazabilidad alimentaria obligatoria permite rastrear un producto a través de:",
		correcta: "Todas las etapas de producción, transformación y distribución",
		incorrectas: [
			"Únicamente el proceso de venta al por menor",
			"El control de calidad interno de la materia prima exclusivamente"
		]
	},
	{
		enunciado: "En la higiene profesional de centros de estética, la esterilización del instrumental crítico (que atraviesa la piel) debe realizarse preferentemente mediante:",
		correcta: "Autoclave de vapor de agua",
		incorrectas: [
			"Radiación infrarroja de alta intensidad",
			"Inmersión en alcohol de 70º durante 5 minutos"
		]
	},
	{
		enunciado: "El 'carné de manipulador de alimentos' fue sustituido legalmente por:",
		correcta: "La responsabilidad de las empresas de garantizar la formación adecuada de sus trabajadores",
		incorrectas: [
			"Una certificación obligatoria emitida por el Ministerio de Educación",
			"Un examen anual realizado por los servicios de salud de las CCAA"
		]
	},
	{
		enunciado: "La 'contaminación cruzada' en el ámbito profesional ocurre cuando:",
		correcta: "Microorganismos de un área o producto contaminado se transfieren a uno limpio a través de manos o utensilios",
		incorrectas: [
			"Se mezclan dos tipos de desinfectantes en el mismo recipiente",
			"El agente biológico muta en el reservorio ambiental"
		]
	},
	{
		enunciado: "Un desinfectante profesional con acción 'esporicida' es capaz de eliminar:",
		correcta: "Bacterias, virus, hongos y esporas bacterianas resistentes",
		incorrectas: [
			"Únicamente bacterias gramnegativas y micobacterias",
			"Solo virus con envoltura lipídica como el VIH"
		]
	},
	{
		enunciado: "¿Qué documento debe estar a disposición de las autoridades sanitarias para acreditar el control de plagas en un establecimiento?",
		correcta: "El Certificado de Desratización, Desinsectación y Desinfección (DDD)",
		incorrectas: [
			"La ficha de seguridad de los detergentes de limpieza",
			"El contrato de alquiler del local debidamente visado"
		]
	},
	{
		enunciado: "En el sistema APPCC, el establecimiento de 'límites críticos' tiene como objetivo:",
		correcta: "Diferenciar lo aceptable de lo inaceptable en un Punto de Control Crítico",
		incorrectas: [
			"Limitar el número de trabajadores en el área de manipulación",
			"Reducir el coste de los procesos de limpieza y desinfección"
		]
	},
	{
		enunciado: "El RD 140/2003 establece los criterios sanitarios de la calidad del agua de consumo humano. El responsable de la calidad del agua en el grifo del consumidor es:",
		correcta: "El propietario del inmueble o la entidad gestora, según el tramo",
		incorrectas: [
			"La Confederación Hidrográfica correspondiente",
			"El fabricante de las tuberías de distribución"
		]
	},
	{
		enunciado: "La higiene profesional del personal de cocina prohíbe el uso de joyas y relojes principalmente porque:",
		correcta: "Pueden albergar suciedad y microorganismos, y suponer un riesgo de caída física al alimento",
		incorrectas: [
			"Pueden interferir con los campos electromagnéticos de los hornos industriales",
			"Es una norma estética para unificar la uniformidad laboral"
		]
	},
	{
		enunciado: "Los guantes de protección en el entorno sanitario se consideran un Equipo de Protección Individual (EPI) si su función es:",
		correcta: "Proteger al trabajador frente al contacto con agentes biológicos o químicos",
		incorrectas: [
			"Evitar que el paciente se contamine con la flora del sanitario",
			"Sustituir el lavado de manos quirúrgico"
		]
	},
	{
		enunciado: "La ventilación mecánica en locales profesionales debe asegurar un caudal de aire exterior suficiente para:",
		correcta: "Evitar la acumulación de contaminantes y mantener el bienestar térmico",
		incorrectas: [
			"Aumentar la presión atmosférica dentro del recinto de trabajo",
			"Sustituir totalmente la necesidad de limpieza de superficies"
		]
	},
	{
		enunciado: "¿Qué actuación es obligatoria ante un accidente biológico por pinchazo accidental en un centro sanitario?",
		correcta: "Notificación inmediata al Servicio de Prevención de Riesgos Laborales y seguimiento serológico",
		incorrectas: [
			"Administración de antibióticos de amplio espectro de forma profiláctica",
			"Tratamiento de la zona afectada únicamente con alcohol de 96º"
		]
	},
	{
		enunciado: "La norma ISO 22000 se refiere específicamente a:",
		correcta: "Sistemas de gestión de la inocuidad alimentaria en toda la cadena de suministro",
		incorrectas: [
			"Estándares de ergonomía en puestos de trabajo de oficina",
			"Calidad de los servicios de atención al cliente en hospitales públicos"
		]
	},
	{
		enunciado: "En la industria cosmética, el 'Expediente de Información sobre el Producto' debe incluir:",
		correcta: "El informe sobre la seguridad del producto cosmético",
		incorrectas: [
			"El listado de precios de venta al público sugeridos",
			"La biografía de los químicos que desarrollaron la fórmula"
		]
	},
	{
		enunciado: "La 'marcha adelante' en el diseño de instalaciones alimentarias es un principio que busca:",
		correcta: "Evitar que los productos limpios y los sucios se crucen en el espacio y el tiempo",
		incorrectas: [
			"Acelerar el proceso de producción para evitar el almacenamiento",
			"Garantizar que los trabajadores se muevan siempre en la misma dirección"
		]
	},
	{
		enunciado: "La desinfección de manos mediante soluciones alcohólicas en el ámbito profesional se recomienda porque:",
		correcta: "Es rápida, eficaz contra la mayoría de patógenos y facilita el cumplimiento de la higiene",
		incorrectas: [
			"Elimina la necesidad de usar jabón cuando las manos están visiblemente sucias",
			"Es el único método capaz de eliminar esporas de Clostridium difficile"
		]
	},
	{
		enunciado: "Los biocidas de uso profesional especializado deben estar inscritos en el registro del:",
		correcta: "Ministerio de Sanidad",
		incorrectas: [
			"Ministerio de Industria y Energía",
			"Consejo Superior de Investigaciones Científicas"
		]
	},
	{
		enunciado: "La temperatura reglamentaria de conservación para productos ultracongelados durante el transporte debe ser:",
		correcta: "Igual o inferior a -18 ºC",
		incorrectas: [
			"Entre -5 ºC y -10 ºC",
			"Exactamente 0 ºC"
		]
	},
	{
		enunciado: "En la gestión de residuos sanitarios, los contenedores rígidos de color rojo se utilizan habitualmente para:",
		correcta: "Residuos de riesgo citotóxico y citostático",
		incorrectas: [
			"Papel y cartón de administración",
			"Agujas y objetos cortantes sin riesgo químico"
		]
	},
	{
		enunciado: "La Ley 14/1986 General de Sanidad establece que las infracciones en materia sanitaria pueden ser calificadas como:",
		correcta: "Leves, graves y muy graves",
		incorrectas: [
			"Irrelevantes, culposas y dolosas",
			"Administrativas y penales únicamente"
		]
	},
	{
		enunciado: "En el etiquetado de alimentos, la indicación 'Fecha de caducidad' se utiliza para productos:",
		correcta: "Muy perecederos desde el punto de vista microbiológico que pueden suponer un peligro inmediato",
		incorrectas: [
			"Con larga vida útil que solo pierden cualidades organolépticas",
			"Que deben consumirse preferentemente antes de un año"
		]
	},
	{
		enunciado: "El 'lavado de manos quirúrgico' se diferencia del clínico por:",
		correcta: "El uso de antiséptico, la duración prolongada y el cepillado de uñas si es necesario",
		incorrectas: [
			"El uso exclusivo de agua caliente a más de 60 ºC",
			"Que no requiere el secado posterior de las extremidades"
		]
	},
	{
		enunciado: "El control de la cadena de frío es crítico porque:",
		correcta: "Evita la proliferación microbiana y la producción de toxinas en alimentos termolábiles",
		incorrectas: [
			"Mantiene el color original de los envases plásticos",
			"Reduce el consumo eléctrico de los equipos de refrigeración"
		]
	},
	{
		enunciado: "¿Cuál es el objetivo de las 'medidas correctoras' en el sistema APPCC?",
		correcta: "Actuar cuando la vigilancia indica que un PCC no está bajo control",
		incorrectas: [
			"Sustituir al análisis de peligros inicial",
			"Aumentar la producción en periodos de alta demanda"
		]
	},
	{
		enunciado: "La indumentaria de trabajo en establecimientos sanitarios debe:",
		correcta: "Ser de uso exclusivo en el centro y lavarse a temperaturas que aseguren la desinfección",
		incorrectas: [
			"Utilizarse también en el trayecto de casa al trabajo para ahorrar tiempo",
			"Cambiarse únicamente cuando presente manchas visibles de sangre"
		]
	},
	{
		enunciado: "La 'limpieza' en un entorno profesional se define como:",
		correcta: "La eliminación mecánica de la suciedad y materia orgánica mediante agua y detergentes",
		incorrectas: [
			"La destrucción total de toda forma de vida microbiana",
			"La aplicación de gases tóxicos en áreas cerradas"
		]
	},
	{
		enunciado: "El Reglamento (UE) 1169/2011 obliga a informar sobre la presencia de:",
		correcta: "Sustancias o productos que causan alergias o intolerancias",
		incorrectas: [
			"El nombre del transportista que entregó el producto",
			"La altitud sobre el nivel del mar de la planta de envasado"
		]
	},
	{
		enunciado: "En salud laboral, la vigilancia de la salud de los trabajadores debe ser:",
		correcta: "Voluntaria para el trabajador, salvo en casos específicos regulados por ley",
		incorrectas: [
			"Obligatoria y pública para todos los empleados de la empresa",
			"Realizada exclusivamente por el médico de familia del trabajador"
		]
	},
	{
		enunciado: "Los 'planes de prerrequisitos' en seguridad alimentaria incluyen:",
		correcta: "Plan de limpieza, plan de formación y plan de control de agua",
		incorrectas: [
			"Plan de marketing y plan de expansión comercial",
			"Plan de pensiones para los manipuladores veteranos"
		]
	},
	{
		enunciado: "La desinsectación mediante nebulización produce:",
		correcta: "Gotas muy finas que permanecen en suspensión y alcanzan lugares de difícil acceso",
		incorrectas: [
			"Un chorro de líquido a alta presión dirigido a un punto fijo",
			"La liberación de polvos sólidos sobre las superficies de contacto"
		]
	},
	{
		enunciado: "¿Qué se entiende por 'lote' en la reglamentación sanitaria?",
		correcta: "Conjunto de unidades de un producto fabricado en condiciones prácticamente idénticas",
		incorrectas: [
			"Toda la producción anual de una empresa alimentaria",
			"La cantidad de productos devueltos por los clientes"
		]
	},
	{
		enunciado: "El almacenamiento de productos de limpieza en un establecimiento profesional debe ser:",
		correcta: "Independiente y separado físicamente de los alimentos o productos sanitarios",
		incorrectas: [
			"En las estanterías superiores junto a las especias y condimentos",
			"Debajo de la mesa de preparación para facilitar su acceso rápido"
		]
	},
	{
		enunciado: "La auditoría del sistema APPCC sirve para:",
		correcta: "Verificar de forma sistemática e independiente que el sistema es eficaz y se cumple",
		incorrectas: [
			"Contabilizar las existencias en el almacén de materias primas",
			"Sustituir el autocontrol diario por parte de los trabajadores"
		]
	},
	{
		enunciado: "La legionelosis es una enfermedad cuya prevención profesional se centra en:",
		correcta: "Evitar el estancamiento del agua y la formación de aerosoles en instalaciones de riesgo",
		incorrectas: [
			"La vacunación obligatoria de todos los fontaneros de mantenimiento",
			"El uso de mascarillas quirúrgicas en todas las oficinas con aire acondicionado"
		]
	},
	{
		enunciado: "En la normativa de piscinas de uso colectivo, el parámetro 'cloro combinado' indica:",
		correcta: "La parte del cloro que ha reaccionado con materia orgánica (cloraminas), siendo irritante",
		incorrectas: [
			"La cantidad de cloro disponible para desinfectar inmediatamente",
			"La concentración de sal añadida para el proceso de electrólisis"
		]
	},
	{
		enunciado: "La responsabilidad civil del profesional sanitario ante una negligencia en la higiene implica:",
		correcta: "La obligación de reparar el daño causado mediante una indemnización",
		incorrectas: [
			"La pérdida automática de la nacionalidad española",
			"La imposibilidad permanente de ejercer cualquier otra profesión"
		]
	}
];