'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Cuál es la vía de acceso preferente para nutrición enteral si la duración prevista es inferior a 4 semanas?",
		correcta: "Sonda nasogástrica (SNG)",
		incorrectas: [
			"Gastrostomía endoscópica percutánea (PEG)",
			"Yeyunostomía quirúrgica",
			"Sonda de faringostomía"
		]
	},
	{
		enunciado: "La complicación mecánica más frecuente y grave de la nutrición parenteral central es:",
		correcta: "Neumotórax durante la punción y oclusión del catéter",
		incorrectas: [
			"Diarrea osmótica persistente",
			"Atrofia vellositaria intestinal",
			"Reflujo gastroesofágico"
		]
	},
	{
		enunciado: "Una fórmula enteral 'polimérica' se define por:",
		correcta: "Contener nutrientes intactos que requieren digestión completa",
		incorrectas: [
			"Tener los nutrientes predigeridos en forma de aminoácidos",
			"Aportar únicamente un nutriente de forma aislada (módulos)",
			"Ser administrada exclusivamente por vía intravenosa"
		]
	},
	{
		enunciado: "¿Qué técnica de administración enteral reduce el riesgo de distensión abdominal en pacientes críticos?",
		correcta: "Administración continua mediante bomba de infusión",
		incorrectas: [
			"Administración en bolo con jeringa",
			"Administración por gravedad en menos de 5 minutos",
			"Administración intermitente nocturna rápida"
		]
	},
	{
		enunciado: "La nutrición parenteral periférica (NPP) está condicionada principalmente por:",
		correcta: "La osmolaridad de la mezcla (límite 800-900 mOsm/L)",
		incorrectas: [
			"La imposibilidad absoluta de administrar lípidos",
			"El riesgo de infección, que es mayor que en la vía central",
			"La necesidad de sondaje gástrico previo"
		]
	},
	{
		enunciado: "El síndrome de realimentación se caracteriza bioquímicamente por:",
		correcta: "Hipofosfatemia, hipopotasemia e hipomagnesemia graves",
		incorrectas: [
			"Hipernatremia y deshidratación celular",
			"Aumento súbito de los niveles de creatinina",
			"Hipocalcemia con alcalosis respiratoria"
		]
	},
	{
		enunciado: "Para prevenir la neumonía por aspiración en nutrición enteral gástrica, se debe:",
		correcta: "Mantener el cabecero de la cama elevado 30-45 grados",
		incorrectas: [
			"Colocar al paciente en decúbito prono tras la toma",
			"Administrar la fórmula a temperatura de 4°C",
			"Aumentar la velocidad de infusión bruscamente"
		]
	},
	{
		enunciado: "Las fórmulas 'elementales' u 'oligoméricas' están indicadas en:",
		correcta: "Alteraciones severas de la absorción o digestión (páncreas, intestino corto)",
		incorrectas: [
			"Pacientes con función digestiva intacta y normal",
			"Tratamiento inicial de la obesidad mórbida",
			"Anorexia nerviosa sin patología orgánica asociada"
		]
	},
	{
		enunciado: "¿Cómo se confirma de forma definitiva la posición de una sonda nasogástrica antes de usarla?",
		correcta: "Radiografía de tórax/abdomen o medición de pH del aspirado",
		incorrectas: [
			"Insuflación de aire y auscultación (método no seguro)",
			"Observando si el paciente puede hablar",
			"Sumergiendo el extremo en agua para ver si hay burbujas"
		]
	},
	{
		enunciado: "La nutrición parenteral complementaria se define como:",
		correcta: "Soporte intravenoso cuando la vía enteral no cubre el 60% de los requerimientos",
		incorrectas: [
			"Suplementación oral con batidos proteicos",
			"Administración de vitaminas únicamente por vía parenteral",
			"Ayuno intermitente combinado con dieta líquida"
		]
	},
	{
		enunciado: "La vía de acceso por gastrostomía (PEG) está indicada cuando la nutrición enteral superará:",
		correcta: "Las 4-6 semanas de duración",
		incorrectas: [
			"Los 3 días de estancia hospitalaria",
			"La fase de postoperatorio inmediato",
			"Las 24 horas de ayuno"
		]
	},
	{
		enunciado: "La principal complicación metabólica de la nutrición parenteral es:",
		correcta: "Hiperglucemia y alteraciones de las pruebas hepáticas",
		incorrectas: [
			"Diarrea acuosa por alta osmolaridad",
			"Estreñimiento crónico por falta de residuo",
			"Déficit agudo de vitamina C"
		]
	},
	{
		enunciado: "En la nutrición enteral, la 'contaminación de la fórmula' es una complicación:",
		correcta: "Infecciosa, evitable mediante técnica aséptica y manipulación mínima",
		incorrectas: [
			"Metabólica, por exceso de minerales",
			"Mecánica, por obstrucción de la luz de la sonda",
			"Psicológica, por rechazo al sabor"
		]
	},
	{
		enunciado: "La administración de nutrición enteral por yeyunostomía evita:",
		correcta: "El vaciamiento gástrico y el reflujo gastroesofágico",
		incorrectas: [
			"La absorción en el intestino delgado",
			"La necesidad de usar bombas de infusión",
			"La digestión de los lípidos"
		]
	},
	{
		enunciado: "El residuo gástrico debe medirse sistemáticamente en pacientes con:",
		correcta: "Nutrición enteral gástrica y sospecha de retraso del vaciamiento",
		incorrectas: [
			"Nutrición parenteral total central",
			"Nutrición enteral yeyunal",
			"Suplementación oral exclusivamente"
		]
	},
	{
		enunciado: "La nutrición parenteral central requiere un catéter insertado en:",
		correcta: "Vena cava superior (vía subclavia o yugular)",
		incorrectas: [
			"Vena cefálica del antebrazo",
			"Arteria femoral",
			"Vena safena mayor"
		]
	},
	{
		enunciado: "La densidad calórica estándar de una fórmula enteral es de:",
		correcta: "1 kcal/ml",
		incorrectas: [
			"5 kcal/ml",
			"0.5 kcal/ml",
			"2.5 kcal/ml"
		]
	},
	{
		enunciado: "Las fórmulas 'hipercalóricas' suelen aportar:",
		correcta: "1.5 - 2.0 kcal/ml",
		incorrectas: [
			"0.8 kcal/ml",
			"10 kcal/ml",
			"Igual que la leche de vaca"
		]
	},
	{
		enunciado: "La complicación infecciosa más grave de la nutrición parenteral es:",
		correcta: "Sepsis asociada al catéter",
		incorrectas: [
			"Gastroenteritis por Salmonella",
			"Cistitis bacteriana",
			"Faringitis estreptocócica"
		]
	},
	{
		enunciado: "El 'bolus' o administración en bolo es la técnica de elección para:",
		correcta: "Pacientes estables con sonda gástrica y vaciamiento normal",
		incorrectas: [
			"Pacientes en cuidados intensivos con ventilación mecánica",
			"Nutrición enteral yeyunal",
			"Pacientes con riesgo elevado de broncoaspiración"
		]
	},
	{
		enunciado: "Un módulo nutricional es un preparado que:",
		correcta: "Contiene un único nutriente (proteínas, grasas o HC)",
		incorrectas: [
			"Aporta todos los nutrientes en proporciones equilibradas",
			"Solo contiene agua y electrolitos",
			"Es una mezcla de fármacos y vitaminas"
		]
	},
	{
		enunciado: "La colestasis asociada a nutrición parenteral se previene mediante:",
		correcta: "Ciclar la nutrición y aportar pequeñas cantidades de enteral si es posible",
		incorrectas: [
			"Eliminar totalmente los carbohidratos de la mezcla",
			"Administrar solo suero salino",
			"Inyectar antibióticos en la bolsa de nutrición"
		]
	},
	{
		enunciado: "¿Cuál es el diámetro habitual de una sonda nasogástrica de nutrición (tipo Levin o Fine-bore)?",
		correcta: "8 - 12 French (Ch)",
		incorrectas: [
			"25 - 30 French (Ch)",
			"2 - 4 French (Ch)",
			"50 French (Ch)"
		]
	},
	{
		enunciado: "La nutrición enteral 'artesanal' (comida triturada) se desaconseja en hospital por:",
		correcta: "Riesgo de contaminación microbiológica e imprecisión nutricional",
		incorrectas: [
			"Su excesivo coste económico",
			"Su bajo contenido en fibra natural",
			"La imposibilidad de pasar por la boca"
		]
	},
	{
		enunciado: "En la nutrición parenteral, la estabilidad de la emulsión lipídica se altera por:",
		correcta: "Mezcla inadecuada, pH extremo o adición de fármacos incompatibles",
		incorrectas: [
			"La exposición a la luz ambiental normal",
			"La temperatura de 25°C",
			"El uso de envases de vidrio"
		]
	},
	{
		enunciado: "La monitorización de la diuresis y el balance hídrico es fundamental para evitar:",
		correcta: "Sobrecarga de volumen o deshidratación",
		incorrectas: [
			"Déficit de hierro",
			"Atrofia muscular",
			"Obstrucción de la sonda"
		]
	},
	{
		enunciado: "La gastrostomía percutánea (PEG) se realiza habitualmente bajo:",
		correcta: "Sedación y control endoscópico",
		incorrectas: [
			"Anestesia general en quirófano central",
			"Anestesia local sin sedación",
			"No requiere ningún tipo de anestesia"
		]
	},
	{
		enunciado: "Las fórmulas de 'fibra' en nutrición enteral están indicadas para:",
		correcta: "Regular el tránsito intestinal y mejorar el microbioma",
		incorrectas: [
			"Reducir la viscosidad de la fórmula",
			"Pacientes con obstrucción intestinal completa",
			"Disminuir la saciedad"
		]
	},
	{
		enunciado: "La nutrición parenteral 'total' significa que:",
		correcta: "Cubre el 100% de los requerimientos nutricionales por vía venosa",
		incorrectas: [
			"Se administra durante 24 horas seguidas sin parar",
			"Solo contiene glucosa y agua",
			"El paciente no puede beber agua"
		]
	},
	{
		enunciado: "El cambio de los sistemas de infusión (líneas) en nutrición parenteral debe hacerse:",
		correcta: "Cada 24 horas (especialmente si contiene lípidos)",
		incorrectas: [
			"Una vez a la semana",
			"Solo si se obstruyen",
			"Cada mes"
		]
	},
	{
		enunciado: "La obstrucción de la sonda nasogástrica se previene principalmente:",
		correcta: "Lavando la sonda con agua tras cada toma o administración de fármacos",
		incorrectas: [
			"Pasando aire a presión una vez al día",
			"Usando solo fórmulas líquidas claras",
			"Cambiando la sonda cada 48 horas"
		]
	},
	{
		enunciado: "El aporte de nitrógeno en la nutrición parenteral se realiza mediante:",
		correcta: "Soluciones de L-aminoácidos cristalinos",
		incorrectas: [
			"Proteínas de suero de leche",
			"Péptidos de cadena corta",
			"Urea sintética"
		]
	},
	{
		enunciado: "Las bolsas de nutrición parenteral 'todo en uno' (3 en 1) contienen:",
		correcta: "Aminoácidos, glucosa y lípidos en una sola bolsa",
		incorrectas: [
			"Tres tipos distintos de antibióticos",
			"Nutrición enteral, parenteral y agua",
			"Líquidos para tres días seguidos"
		]
	},
	{
		enunciado: "La 'atención domiciliaria' en nutrición artificial requiere:",
		correcta: "Educación al paciente/cuidador y seguimiento especializado",
		incorrectas: [
			"La presencia permanente de un enfermero en casa",
			"Un quirófano portátil en el domicilio",
			"Que el paciente esté siempre en cama"
		]
	},
	{
		enunciado: "En la nutrición enteral, el uso de procinéticos (metoclopramida, eritromicina) busca:",
		correcta: "Mejorar el vaciamiento gástrico y la tolerancia",
		incorrectas: [
			"Frenar la diarrea osmótica",
			"Aumentar el apetito del paciente",
			"Eliminar los gases del colon"
		]
	},
	{
		enunciado: "La presencia de glucosuria en un paciente con nutrición parenteral puede indicar:",
		correcta: "Hiperglucemia por infusión excesiva o estrés metabólico",
		incorrectas: [
			"Funcionamiento normal del riñón",
			"Déficit de aporte proteico",
			"Exceso de hidratación"
		]
	},
	{
		enunciado: "La administración de fármacos por sonda requiere:",
		correcta: "No mezclarlos con la fórmula y lavar antes y después",
		incorrectas: [
			"Mezclarlos todos en la misma bolsa de nutrición",
			"Triturar comprimidos de liberación retardada",
			"No requiere ninguna precaución especial"
		]
	},
	{
		enunciado: "La nutrición enteral precoz tras cirugía abdominal:",
		correcta: "Es segura y favorece la cicatrización (protocolos ERAS/VIA)",
		incorrectas: [
			"Está contraindicada por riesgo de dehiscencia",
			"Debe retrasarse hasta la aparición de gases",
			"Solo se permite tras 7 días de ayuno"
		]
	},
	{
		enunciado: "La 'osmolaridad' elevada en fórmulas enterales puede provocar:",
		correcta: "Diarrea por arrastre osmótico de agua al lumen intestinal",
		incorrectas: [
			"Obstrucción mecánica de la sonda",
			"Hipertensión arterial aguda",
			"Aumento de la masa ósea"
		]
	},
	{
		enunciado: "El objetivo principal de la nutrición artificial es:",
		correcta: "Evitar o corregir la desnutrición y mejorar el pronóstico clínico",
		incorrectas: [
			"Sustituir a la alimentación natural permanentemente",
			"Aumentar la grasa corporal del paciente",
			"Reducir el tiempo de sueño del paciente"
		]
	}
];