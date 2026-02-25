'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿A qué edad se recomienda introducir la alimentación complementaria (Beikost)?",
		correcta: "A los 6 meses",
		incorrectas: [
			"A los 2 meses",
			"A los 9 meses",
			"A los 12 meses"
		]
	},
	{
		enunciado: "El orden de introducción de los alimentos en el lactante sano actualmente:",
		correcta: "Es flexible, priorizando alimentos ricos en hierro y zinc",
		incorrectas: [
			"Debe seguir una secuencia rígida: fruta, cereal, carne",
			"Requiere empezar siempre por el huevo entero",
			"Prohíbe la carne hasta los 2 años"
		]
	},
	{
		enunciado: "El Baby Led Weaning (BLW) se caracteriza por:",
		correcta: "Alimentación basada en trozos sólidos que el bebé maneja por sí mismo",
		incorrectas: [
			"Uso exclusivo de purés y papillas trituradas",
			"Alimentar al bebé con cuchara hasta los 18 meses",
			"Introducir solo lácteos durante el primer año"
		]
	},
	{
		enunciado: "¿Cuál es la recomendación sobre el consumo de leche de vaca entera?",
		correcta: "No introducir antes de los 12 meses de vida",
		incorrectas: [
			"Introducir a partir de los 4 meses",
			"Sustituir la lactancia materna por leche de vaca al nacer",
			"Solo se permite si es desnatada desde los 6 meses"
		]
	},
	{
		enunciado: "El principal riesgo de introducir la alimentación complementaria antes de los 4 meses es:",
		correcta: "Inmadurez renal y digestiva, y riesgo de atragantamiento",
		incorrectas: [
			"Exceso de crecimiento óseo",
			"Déficit de vitamina A",
			"Aparición de vello corporal prematuro"
		]
	},
	{
		enunciado: "En el primer año de vida, la miel debe evitarse por riesgo de:",
		correcta: "Botulismo infantil",
		incorrectas: [
			"Caries dental fulminante",
			"Alergia a la fructosa",
			"Hiperactividad motora"
		]
	},
	{
		enunciado: "Las necesidades de calcio alcanzan su pico máximo durante:",
		correcta: "La adolescencia (estirón puberal)",
		incorrectas: [
			"El periodo de recién nacido",
			"La etapa preescolar (3-5 años)",
			"La edad adulta temprana"
		]
	},
	{
		enunciado: "La 'neofobia' alimentaria es común en la etapa:",
		correcta: "Preescolar (2-5 años)",
		incorrectas: [
			"Lactante",
			"Adolescencia tardía",
			"Recién nacido"
		]
	},
	{
		enunciado: "¿Qué suplemento es obligatorio en todos los lactantes durante el primer año?",
		correcta: "Vitamina D (400 UI/día)",
		incorrectas: [
			"Hierro oral",
			"Vitamina C",
			"Flúor sistémico"
		]
	},
	{
		enunciado: "La obesidad infantil se define habitualmente por un IMC superior al:",
		correcta: "Percentil 95 para su edad y sexo",
		incorrectas: [
			"Percentil 50",
			"Percentil 15",
			"Percentil 3"
		]
	},
	{
		enunciado: "En la adolescencia, el déficit de hierro es más frecuente en mujeres debido a:",
		correcta: "Las pérdidas menstruales y el aumento de la masa magra",
		incorrectas: [
			"Un menor consumo de lácteos",
			"La práctica de deportes de contacto",
			"El crecimiento de los huesos largos"
		]
	},
	{
		enunciado: "El consumo de zumos de fruta en lactantes menores de 1 año:",
		correcta: "No se recomienda, es preferible la fruta entera",
		incorrectas: [
			"Debe ser la base de la hidratación",
			"Es necesario para evitar el escorbuto",
			"Sustituye a la leche en el desayuno"
		]
	},
	{
		enunciado: "La introducción del gluten debe hacerse:",
		correcta: "Entre los 4 y los 12 meses, preferiblemente mientras se mantiene la lactancia",
		incorrectas: [
			"Antes de los 2 meses obligatoriamente",
			"Después de los 3 años para evitar la celiaquía",
			"Solo si el bebé tiene bajo peso"
		]
	},
	{
		enunciado: "El aporte de grasas en la dieta del niño de 1 a 3 años debe suponer el:",
		correcta: "30 - 40 % de la energía total",
		incorrectas: [
			"Menos del 10 %",
			"Más del 60 %",
			"No deben consumir grasas"
		]
	},
	{
		enunciado: "La ingesta excesiva de leche (hiperconsumo) en el niño pequeño puede provocar:",
		correcta: "Anemia ferropénica (anemia de la leche)",
		incorrectas: [
			"Raquitismo",
			"Hipotensión",
			"Déficit de calcio"
		]
	},
	{
		enunciado: "En la dieta del adolescente, suele existir un déficit de:",
		correcta: "Calcio, magnesio, hierro y vitamina D",
		incorrectas: [
			"Sodio y fósforo",
			"Proteínas de origen animal",
			"Grasas saturadas"
		]
	},
	{
		enunciado: "¿Cuál es el mejor indicador de un estado nutricional adecuado a largo plazo en el niño?",
		correcta: "La evolución de la talla para la edad",
		incorrectas: [
			"El peso puntual en un momento dado",
			"El color de los ojos",
			"La circunferencia del cuello"
		]
	},
	{
		enunciado: "La sal en la alimentación del lactante (menor de 1 año):",
		correcta: "No debe añadirse a los alimentos",
		incorrectas: [
			"Es necesaria para el desarrollo renal",
			"Debe ser abundante para evitar la deshidratación",
			"Solo se permite la sal yodada en grandes dosis"
		]
	},
	{
		enunciado: "El reflejo de extrusión (expulsar sólidos con la lengua) desaparece hacia los:",
		correcta: "4 - 6 meses",
		incorrectas: [
			"12 meses",
			"2 meses",
			"18 meses"
		]
	},
	{
		enunciado: "La anorexia nerviosa y la bulimia tienen su mayor incidencia en:",
		correcta: "La adolescencia",
		incorrectas: [
			"La etapa preescolar",
			"La vejez",
			"La infancia temprana"
		]
	},
	{
		enunciado: "El desayuno en el niño en edad escolar debe aportar el:",
		correcta: "20 - 25 % de las calorías diarias",
		incorrectas: [
			"50 %",
			"5 %",
			"10 %"
		]
	},
	{
		enunciado: "La dentición temporal (dientes de leche) se completa habitualmente a los:",
		correcta: "2.5 - 3 años",
		incorrectas: [
			"12 meses",
			"6 años",
			"10 años"
		]
	},
	{
		enunciado: "El consumo de frutos secos enteros está contraindicado hasta los 4-5 años por:",
		correcta: "Riesgo elevado de aspiración y atragantamiento",
		incorrectas: [
			"Su alto contenido en fibra",
			"Producir alergias inmediatas siempre",
			"Falta de enzimas para digerirlos"
		]
	},
	{
		enunciado: "La recomendación de actividad física en niños y adolescentes es de:",
		correcta: "Al menos 60 minutos diarios de intensidad moderada a vigorosa",
		incorrectas: [
			"15 minutos a la semana",
			"Solo el fin de semana",
			"No es necesaria si la dieta es correcta"
		]
	},
	{
		enunciado: "Un factor protector contra la obesidad infantil es:",
		correcta: "La lactancia materna prolongada",
		incorrectas: [
			"El consumo de bebidas azucaradas",
			"El sedentarismo frente a pantallas",
			"Saltarse el desayuno"
		]
	},
	{
		enunciado: "En el retraso del crecimiento (Failure to thrive), la causa más común es:",
		correcta: "Ingesta calórica insuficiente",
		incorrectas: [
			"Enfermedades genéticas raras",
			"Exceso de ejercicio",
			"Consumo elevado de agua"
		]
	},
	{
		enunciado: "La maduración ósea se evalúa clínicamente mediante:",
		correcta: "Radiografía de la muñeca izquierda (edad ósea)",
		incorrectas: [
			"Análisis de sangre periférica",
			"Ecografía de tiroides",
			"Medición del perímetro cefálico"
		]
	},
	{
		enunciado: "La dieta vegetariana en niños es posible siempre que:",
		correcta: "Esté bien planificada y se suplemente con Vitamina B12",
		incorrectas: [
			"Se eliminen también los carbohidratos",
			"El niño sea mayor de 15 años",
			"Se base únicamente en el consumo de fruta"
		]
	},
	{
		enunciado: "El aporte proteico en el niño pequeño no debe ser excesivo para evitar:",
		correcta: "Sobrecarga renal y riesgo de obesidad futura",
		incorrectas: [
			"La caída del cabello",
			"El desarrollo de la visión",
			"La síntesis de hemoglobina"
		]
	},
	{
		enunciado: "La escala de Tanner se utiliza para valorar:",
		correcta: "El desarrollo de los caracteres sexuales secundarios y madurez puberal",
		incorrectas: [
			"La inteligencia emocional",
			"La agudeza auditiva",
			"La capacidad pulmonar"
		]
	},
	{
		enunciado: "Los niños con celiaquía deben eliminar de la dieta:",
		correcta: "Trigo, cebada, centeno y sus derivados",
		incorrectas: [
			"Arroz y maíz",
			"Lácteos y huevos",
			"Legumbres y hortalizas"
		]
	},
	{
		enunciado: "La fluorosis dental se produce por:",
		correcta: "Ingesta excesiva de flúor durante el desarrollo del esmalte",
		incorrectas: [
			"Déficit severo de calcio",
			"Consumo de azúcares simples",
			"Falta de higiene bucal"
		]
	},
	{
		enunciado: "Durante el estirón puberal, el aumento de peso puede ser de hasta:",
		correcta: "8 - 10 kg por año",
		incorrectas: [
			"1 kg por año",
			"25 kg por año",
			"No hay aumento de peso"
		]
	},
	{
		enunciado: "El estreñimiento funcional en el niño suele mejorar con:",
		correcta: "Aumento de fibra dietética, hidratación y hábitos de aseo",
		incorrectas: [
			"Reducción del consumo de agua",
			"Dieta exenta de residuos",
			"Eliminación de la actividad física"
		]
	},
	{
		enunciado: "La leche de fórmula de inicio (tipo 1) se utiliza:",
		correcta: "Desde el nacimiento hasta los 6 meses",
		incorrectas: [
			"Solo a partir del año",
			"Como suplemento del puré de verduras",
			"Exclusivamente en prematuros"
		]
	},
	{
		enunciado: "La alergia a las proteínas de la leche de vaca (APLV):",
		correcta: "Suele desaparecer espontáneamente en los primeros años de vida",
		incorrectas: [
			"Es una intolerancia a la lactosa",
			"Dura para toda la vida obligatoriamente",
			"Se trata dando leche de cabra directamente"
		]
	},
	{
		enunciado: "El principal combustible para el cerebro del niño es:",
		correcta: "La glucosa",
		incorrectas: [
			"Los aminoácidos ramificados",
			"Los ácidos grasos trans",
			"El colesterol"
		]
	},
	{
		enunciado: "Las 'ventanas de oportunidad' en nutrición infantil se refieren a:",
		correcta: "Los primeros 1000 días de vida",
		incorrectas: [
			"La etapa universitaria",
			"Las vacaciones escolares",
			"El momento de la merienda"
		]
	},
	{
		enunciado: "En la alimentación escolar, se debe priorizar:",
		correcta: "El consumo de productos frescos, locales y de temporada",
		incorrectas: [
			"Los alimentos ultraprocesados por su seguridad",
			"La eliminación de los hidratos de carbono",
			"El consumo de refrescos con gas"
		]
	},
	{
		enunciado: "La prevención de la salud del adulto comienza en:",
		correcta: "La nutrición y hábitos adquiridos en la infancia",
		incorrectas: [
			"La jubilación",
			"A partir de los 40 años",
			"Solo si hay enfermedad previa"
		]
	}
];