'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué propiedad de un indicador de salud define su capacidad para detectar cambios significativos en el fenómeno que se pretende medir?",
		correcta: "Sensibilidad",
		incorrectas: [
			"Especificidad",
			"Validez de constructo"
		]
	},
	{
		enunciado: "La tasa de letalidad se diferencia de la tasa de mortalidad en que el denominador de la primera es:",
		correcta: "El número de personas diagnosticadas de esa enfermedad específica",
		incorrectas: [
			"La población total expuesta al riesgo al inicio del periodo",
			"El número de defunciones totales por cualquier causa"
		]
	},
	{
		enunciado: "Según la OMS, la Clasificación Internacional del Funcionamiento, de la Discapacidad y de la Salud (CIF) se basa en un modelo:",
		correcta: "Biopsicosocial",
		incorrectas: [
			"Puramente biomédico",
			"Socioeconómico de estratificación"
		]
	},
	{
		enunciado: "El indicador AVPP (Años de Vida Potencialmente Perdidos) es especialmente útil para medir:",
		correcta: "El impacto de la mortalidad prematura en una población",
		incorrectas: [
			"La prevalencia de enfermedades crónicas en la tercera edad",
			"La calidad de vida relacionada con la salud percibida"
		]
	},
	{
		enunciado: "¿Qué indicador mide la aparición de nuevos casos de una enfermedad en una población en riesgo durante un periodo de tiempo determinado?",
		correcta: "Incidencia acumulada",
		incorrectas: [
			"Prevalencia de punto",
			"Densidad de morbilidad"
		]
	},
	{
		enunciado: "En la CIE-11, el uso de 'códigos de extensión' permite principalmente:",
		correcta: "Añadir detalles suplementarios como la severidad o etiología sin cambiar el código base",
		incorrectas: [
			"Sustituir el diagnóstico principal por síntomas aislados",
			"Reducir el número de categorías para facilitar la estadística"
		]
	},
	{
		enunciado: "La 'especificidad' de un indicador de salud se refiere a la capacidad de:",
		correcta: "Identificar correctamente a quienes no presentan la condición o fenómeno",
		incorrectas: [
			"Detectar el mayor número posible de casos positivos reales",
			"Mantener resultados constantes tras mediciones repetidas"
		]
	},
	{
		enunciado: "El Conjunto Mínimo Básico de Datos (CMBD) es una fuente de información de tipo:",
		correcta: "Administrativa hospitalaria basada en el alta del paciente",
		incorrectas: [
			"Encuesta poblacional sobre hábitos de vida saludables",
			"Registro de declaración obligatoria de enfermedades infecciosas"
		]
	},
	{
		enunciado: "¿Cuál es el denominador utilizado habitualmente para el cálculo de la tasa de mortalidad infantil?",
		correcta: "Número de nacidos vivos durante el año",
		incorrectas: [
			"Población total de menores de 14 años",
			"Número de nacimientos totales incluyendo mortinatos"
		]
	},
	{
		enunciado: "Un indicador de salud 'positivo' es aquel que:",
		correcta: "Mantiene una relación directa con el estado de salud (a mayor valor, mejor salud)",
		incorrectas: [
			"Solo analiza la presencia de patologías de transmisión sexual",
			"Arroja resultados favorables para la gestión económica del centro"
		]
	},
	{
		enunciado: "El concepto de 'Prevalencia' es un indicador de carga de enfermedad que depende de:",
		correcta: "La incidencia y la duración media de la enfermedad",
		incorrectas: [
			"Únicamente el número de defunciones por la patología",
			"La velocidad de propagación de un agente infeccioso"
		]
	},
	{
		enunciado: "Los AVAC (Años de Vida Ajustados por Calidad) combinan en un solo indicador:",
		correcta: "La cantidad de vida (supervivencia) y la calidad de vida",
		incorrectas: [
			"El coste del tratamiento y la efectividad del fármaco",
			"La discapacidad física y el nivel de renta per cápita"
		]
	},
	{
		enunciado: "¿Qué mide la Tasa de Mortalidad Específica por causa?",
		correcta: "El riesgo de morir por una enfermedad determinada en la población general",
		incorrectas: [
			"La proporción de muertes debidas a una causa respecto al total de muertes",
			"La probabilidad de morir tras el diagnóstico médico"
		]
	},
	{
		enunciado: "En la CIF, el término 'Participación' se refiere a:",
		correcta: "El acto de involucrarse en una situación vital o social",
		incorrectas: [
			"La ejecución de una tarea o acción por parte de un individuo",
			"La integridad estructural de los órganos y sistemas"
		]
	},
	{
		enunciado: "La fuente principal para conocer la morbilidad sentida y percibida por la población en España es:",
		correcta: "La Encuesta Nacional de Salud (ENSE)",
		incorrectas: [
			"El Registro Civil de defunciones y nacimientos",
			"El sistema de vigilancia epidemiológica de las EDO"
		]
	},
	{
		enunciado: "La tasa bruta de mortalidad puede estar sesgada al comparar poblaciones debido a:",
		correcta: "Diferencias en la estructura por edad de las poblaciones",
		incorrectas: [
			"El uso de distintos sistemas informáticos de registro",
			"La variabilidad climática entre las regiones comparadas"
		]
	},
	{
		enunciado: "Un indicador es 'valido' cuando:",
		correcta: "Mide realmente aquello que se supone que debe medir",
		incorrectas: [
			"Es fácil de calcular con una hoja de cálculo básica",
			"Proporciona los mismos datos en diferentes regiones"
		]
	},
	{
		enunciado: "¿Cuál de los siguientes es un indicador de impacto socioeconómico de la enfermedad?",
		correcta: "Tasa de absentismo laboral por causas médicas",
		incorrectas: [
			"Tasa de incidencia de gripe estacional",
			"Índice de masa corporal medio de la población"
		]
	},
	{
		enunciado: "La codificación diagnóstica bajo estándares internacionales permite:",
		correcta: "La comparabilidad de datos sanitarios entre diferentes países y centros",
		incorrectas: [
			"Eliminar la necesidad de secreto profesional en el hospital",
			"Reducir los costes de almacenamiento de la historia clínica"
		]
	},
	{
		enunciado: "El índice de Swaroop mide la proporción de fallecidos de 50 años o más respecto al total de muertes, indicando:",
		correcta: "El nivel de desarrollo sanitario de una población",
		incorrectas: [
			"La eficacia de los programas de vacunación infantil",
			"La prevalencia de enfermedades infectocontagiosas"
		]
	},
	{
		enunciado: "En el contexto de la CIF, las 'barreras' y 'facilitadores' forman parte de:",
		correcta: "Los Factores Ambientales",
		incorrectas: [
			"Las Funciones Corporales",
			"Las Actividades y Limitaciones"
		]
	},
	{
		enunciado: "La 'Incidencia' es el indicador de elección para:",
		correcta: "Estudiar la etiología y los factores de riesgo de enfermedades agudas",
		incorrectas: [
			"Planificar recursos para pacientes con patologías crónicas",
			"Conocer el número total de personas que necesitan prótesis"
		]
	},
	{
		enunciado: "El indicador de 'Mortalidad Proporcional' se define como:",
		correcta: "El porcentaje de defunciones por una causa concreta sobre el total de defunciones",
		incorrectas: [
			"El número de muertes por cada 100.000 habitantes en riesgo",
			"La relación entre nacimientos y defunciones en un año natural"
		]
	},
	{
		enunciado: "La Clasificación Internacional de Atención Primaria (CIAP-2) se organiza mediante:",
		correcta: "Un eje capitular basado en aparatos/sistemas y un eje de componentes",
		incorrectas: [
			"Una lista única de enfermedades infecciosas exclusivamente",
			"Un sistema jerárquico decimal de cinco niveles obligatorios"
		]
	},
	{
		enunciado: "¿Qué mide la esperanza de vida al nacer?",
		correcta: "El número medio de años que se espera que viva un recién nacido si se mantienen las tasas de mortalidad actuales",
		incorrectas: [
			"La edad máxima alcanzada por el individuo más longevo de la población",
			"La probabilidad de sobrevivir a enfermedades congénitas graves"
		]
	},
	{
		enunciado: "Un indicador con baja 'fiabilidad' se caracteriza por:",
		correcta: "Presentar gran variabilidad en los resultados al ser medido por diferentes observadores",
		incorrectas: [
			"No tener relación alguna con el fenómeno biológico estudiado",
			"Ser excesivamente caro de obtener para la administración pública"
		]
	},
	{
		enunciado: "La tasa de fecundidad general tiene como denominador:",
		correcta: "Mujeres en edad fértil (habitualmente de 15 a 49 años)",
		incorrectas: [
			"Población total de la zona básica de salud",
			"Número total de varones y mujeres casados"
		]
	},
	{
		enunciado: "En la CIE-11, el capítulo de 'Medicinas Tradicionales' se incluye para:",
		correcta: "Permitir la recogida de datos estadísticos sobre el uso de estas prácticas a nivel global",
		incorrectas: [
			"Sustituir los tratamientos de quimioterapia en países en desarrollo",
			"Obligar a todos los médicos a recetar productos homeopáticos"
		]
	},
	{
		enunciado: "La 'Mortalidad Perinatal' incluye las defunciones ocurridas:",
		correcta: "Desde la semana 28 de gestación hasta los primeros 7 días de vida",
		incorrectas: [
			"Desde el momento de la concepción hasta el parto",
			"Exclusivamente durante las primeras 24 horas tras el nacimiento"
		]
	},
	{
		enunciado: "¿Qué indicador refleja mejor el nivel de salud materno-infantil y las condiciones socioeconómicas?",
		correcta: "Tasa de mortalidad infantil",
		incorrectas: [
			"Tasa de incidencia de diabetes tipo 2",
			"Tasa bruta de natalidad"
		]
	},
	{
		enunciado: "La 'prevalencia de periodo' mide los casos que estaban enfermos:",
		correcta: "En algún momento dentro de un intervalo temporal determinado",
		incorrectas: [
			"Exactamente en el día 1 de enero de cada año",
			"Solo aquellos que fallecieron durante el primer mes de ingreso"
		]
	},
	{
		enunciado: "El índice de dependencia mide la relación entre:",
		correcta: "La población en edad no laboral y la población en edad laboral",
		incorrectas: [
			"El número de pacientes encamados y el número de enfermeras",
			"Las personas con seguro privado y las que usan el sistema público"
		]
	},
	{
		enunciado: "Un indicador de salud debe ser 'asequible', lo que implica:",
		correcta: "Que su obtención no suponga un coste o esfuerzo desproporcionado",
		incorrectas: [
			"Que pueda ser comprendido por personas sin formación técnica",
			"Que los datos sean publicados diariamente en la prensa local"
		]
	},
	{
		enunciado: "En la CIF, una 'deficiencia' es:",
		correcta: "Un problema en las funciones o estructuras corporales",
		incorrectas: [
			"La imposibilidad de encontrar empleo por razones de salud",
			"La falta de rampas de acceso en los centros hospitalarios"
		]
	},
	{
		enunciado: "La tasa de mortalidad neonatal precoz se refiere a las defunciones en:",
		correcta: "Los primeros 7 días de vida",
		incorrectas: [
			"Los primeros 28 días de vida",
			"Los primeros 12 meses de vida"
		]
	},
	{
		enunciado: "La estandarización de tasas por el método directo requiere conocer:",
		correcta: "Las tasas específicas por edad de la población en estudio y una población estándar",
		incorrectas: [
			"Solo el número total de muertos de ambas poblaciones",
			"La temperatura media anual de la zona de estudio"
		]
	},
	{
		enunciado: "Un indicador de salud funcional sería:",
		correcta: "El índice de actividades de la vida diaria (Katz)",
		incorrectas: [
			"La concentración de glucosa en sangre en ayunas",
			"La tasa de mortalidad por accidentes de tráfico"
		]
	},
	{
		enunciado: "La OMS define la salud no solo como ausencia de afecciones, sino como un estado de:",
		correcta: "Completo bienestar físico, mental y social",
		incorrectas: [
			"Capacidad de trabajo y producción económica constante",
			"Equilibrio biológico garantizado por la medicación preventiva"
		]
	},
	{
		enunciado: "¿Qué indicador se utiliza para monitorizar la velocidad de expansión de una epidemia?",
		correcta: "Tasa de incidencia",
		incorrectas: [
			"Tasa de prevalencia acumulada",
			"Mortalidad proporcional"
		]
	},
	{
		enunciado: "En la CIE-11, el código 'ZZ' se reserva para:",
		correcta: "Situaciones de diagnóstico desconocido o no especificado",
		incorrectas: [
			"Enfermedades erradicadas como la viruela",
			"Pacientes que han recibido el alta por curación total"
		]
	}
];