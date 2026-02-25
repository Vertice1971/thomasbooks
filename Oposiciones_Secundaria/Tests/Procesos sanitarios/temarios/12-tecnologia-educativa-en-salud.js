'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué término define el conjunto de recursos tecnológicos que permiten la gestión de datos sanitarios y la educación para la salud a distancia?",
		correcta: "eSalud o eHealth",
		incorrectas: [
			"mHealth de soporte físico",
			"Telemedicina de diagnóstico terciario"
		]
	},
	{
		enunciado: "En el diseño de materiales multimedia para EpS, el principio de 'contigüidad espacial' de Mayer sugiere:",
		correcta: "Presentar las palabras cerca de las imágenes correspondientes",
		incorrectas: [
			"Separar las instrucciones textuales de los gráficos para evitar saturación",
			"Utilizar solo un canal sensorial para evitar la carga cognitiva"
		]
	},
	{
		enunciado: "La principal ventaja de la tecnología educativa basada en 'Web 2.0' frente a la 'Web 1.0' en promoción de la salud es:",
		correcta: "La bidireccionalidad y la creación de contenidos por el propio usuario",
		incorrectas: [
			"La mayor velocidad de descarga de archivos estáticos informativos",
			"La seguridad absoluta de que los contenidos están validados por expertos"
		]
	},
	{
		enunciado: "¿Qué norma técnica española regula los requisitos de accesibilidad para contenidos web, afectando a la difusión de información sanitaria?",
		correcta: "UNE-EN 301549",
		incorrectas: [
			"UNE-ISO 9001",
			"Real Decreto 1030/2006"
		]
	},
	{
		enunciado: "El concepto de 'alfabetización digital en salud' (eHealth Literacy) implica:",
		correcta: "Capacidad de buscar, encontrar, comprender y evaluar información de salud en fuentes electrónicas",
		incorrectas: [
			"Saber programar aplicaciones móviles orientadas al seguimiento de enfermedades",
			"Poseer dispositivos de última generación para la monitorización de constantes"
		]
	},
	{
		enunciado: "En el contexto de la simulación clínica, la fidelidad de 'bajo realismo' es más útil para:",
		correcta: "La adquisición de habilidades psicomotoras básicas y repetitivas",
		incorrectas: [
			"La toma de decisiones complejas en situaciones de urgencia vital",
			"El entrenamiento en habilidades de comunicación asertiva con pacientes"
		]
	},
	{
		enunciado: "La aplicación de la gamificación en programas de prevención de la salud busca:",
		correcta: "Aumentar el compromiso mediante sistemas de retroalimentación y recompensa",
		incorrectas: [
			"Sustituir el tratamiento farmacológico por dinámicas de ocio digital",
			"Simplificar los contenidos científicos para que parezcan infantiles"
		]
	},
	{
		enunciado: "¿Qué característica define a un Objeto de Aprendizaje (OA) en tecnología educativa sanitaria?",
		correcta: "Es una unidad digital mínima, reutilizable y con un objetivo pedagógico",
		incorrectas: [
			"Es un libro de texto digitalizado de más de cien páginas",
			"Es un hardware específico para la toma de tensión arterial"
		]
	},
	{
		enunciado: "El estándar SCORM en la creación de contenidos de formación sanitaria sirve para:",
		correcta: "Garantizar la interoperabilidad entre diferentes plataformas de aprendizaje (LMS)",
		incorrectas: [
			"Encriptar los datos personales de los pacientes según la LOPDGDD",
			"Medir la frecuencia cardíaca de los alumnos durante el examen"
		]
	},
	{
		enunciado: "La técnica del 'Flipped Classroom' aplicada a la educación sanitaria permite:",
		correcta: "Optimizar el tiempo de aula para la resolución de dudas y casos prácticos",
		incorrectas: [
			"Que el profesor evalúe a los alumnos sin necesidad de examen previo",
			"Eliminar los contenidos teóricos para centrarse solo en la tecnología"
		]
	},
	{
		enunciado: "En el desarrollo de APPs de salud, el 'marcado CE' es obligatorio cuando:",
		correcta: "La aplicación tiene una finalidad de diagnóstico, prevención o tratamiento",
		incorrectas: [
			"La aplicación es gratuita y se descarga de repositorios públicos",
			"La aplicación solo ofrece consejos generales sobre nutrición y deporte"
		]
	},
	{
		enunciado: "¿Qué riesgo ético es más relevante en el uso de Big Data aplicado a la prevención de enfermedades?",
		correcta: "La posible discriminación de individuos por su perfil de riesgo genético",
		incorrectas: [
			"La falta de espacio en los servidores para almacenar datos históricos",
			"La lentitud de los procesos administrativos para autorizar estudios"
		]
	},
	{
		enunciado: "La Realidad Virtual (RV) inmersiva en educación sanitaria se diferencia de la Realidad Aumentada (RA) en:",
		correcta: "Aislar completamente al usuario del entorno físico real",
		incorrectas: [
			"Superponer elementos gráficos sobre la visión del mundo real",
			"Requerir obligatoriamente conexión a internet de alta velocidad"
		]
	},
	{
		enunciado: "El término 'Edutainment' en promoción de la salud se refiere a:",
		correcta: "Contenidos diseñados para educar a través del entretenimiento",
		incorrectas: [
			"Plataformas exclusivas para la formación de médicos especialistas",
			"Sistemas de gestión de turnos en salas de espera de urgencias"
		]
	},
	{
		enunciado: "La 'brecha digital de segundo nivel' hace referencia a:",
		correcta: "Las diferencias en las habilidades y el uso que se hace de la tecnología",
		incorrectas: [
			"La falta de acceso físico o infraestructuras de conexión",
			"El coste elevado de los ordenadores de última generación"
		]
	},
	{
		enunciado: "Un MOOC (Massive Open Online Course) sobre prevención de ITS destaca por:",
		correcta: "Su carácter abierto, gratuito y orientado a un número ilimitado de usuarios",
		incorrectas: [
			"Exigir una titulación universitaria previa para poder matricularse",
			"Tener una duración mínima obligatoria de doce meses académicos"
		]
	},
	{
		enunciado: "En los sistemas de tutoría inteligente (ITS), el 'modelo del estudiante' sirve para:",
		correcta: "Adaptar el contenido y el ritmo según el progreso y errores del alumno",
		incorrectas: [
			"Almacenar los datos de contacto y facturación del usuario",
			"Comparar el rendimiento del alumno con el de otros centros educativos"
		]
	},
	{
		enunciado: "El uso de redes sociales como Twitter en vigilancia epidemiológica permite:",
		correcta: "La detección precoz de brotes mediante el análisis de tendencias y síntomas",
		incorrectas: [
			"La sustitución de los partes de declaración obligatoria (EDO)",
			"El diagnóstico clínico individualizado de cada seguidor de la cuenta"
		]
	},
	{
		enunciado: "¿Cuál es la función de los metadatos en un recurso educativo sanitario digital?",
		correcta: "Facilitar la descripción, búsqueda y recuperación del recurso en repositorios",
		incorrectas: [
			"Aumentar la resolución de las imágenes diagnósticas adjuntas",
			"Reducir el peso del archivo para su envío por correo electrónico"
		]
	},
	{
		enunciado: "La teleducación para pacientes con patologías crónicas busca fundamentalmente:",
		correcta: "Mejorar el empoderamiento y la adherencia al plan terapéutico",
		incorrectas: [
			"Evitar que el paciente acuda nunca más al centro de salud",
			"Reducir el coste de la medicación mediante la compra online"
		]
	},
	{
		enunciado: "En el aprendizaje basado en problemas (ABP) mediado por tecnología, el docente actúa como:",
		correcta: "Facilitador y guía del proceso de investigación del alumno",
		incorrectas: [
			"Única fuente de información válida y transmisor de lecciones",
			"Evaluador externo que no interviene en el desarrollo del caso"
		]
	},
	{
		enunciado: "El 'Personal Learning Network' (PLN) de un profesional de procesos sanitarios es:",
		correcta: "El conjunto de herramientas y personas con las que aprende e intercambia información",
		incorrectas: [
			"La red local de ordenadores del departamento de sanidad del instituto",
			"El historial de cursos realizados en los centros de formación del profesorado"
		]
	},
	{
		enunciado: "La principal crítica al uso de buscadores genéricos para la información de salud es:",
		correcta: "La variabilidad en la calidad y el rigor científico de los resultados",
		incorrectas: [
			"La lentitud en la carga de las páginas web de organismos oficiales",
			"La ausencia de publicidad relacionada con productos farmacéuticos"
		]
	},
	{
		enunciado: "Un podcast de educación sanitaria es un recurso de tipo:",
		correcta: "Asíncrono y predominantemente auditivo",
		incorrectas: [
			"Síncrono y de obligatoria visualización en directo",
			"Interactivo y basado en la realidad virtual no inmersiva"
		]
	},
	{
		enunciado: "En el modelo TPACK para la integración de tecnología, la intersección clave es:",
		correcta: "El conocimiento tecnológico pedagógico del contenido",
		incorrectas: [
			"La suma de los conocimientos de hardware y software del centro",
			"La capacidad de usar proyectores en clases de anatomía aplicada"
		]
	},
	{
		enunciado: "La seguridad del paciente en el uso de apps de salud se garantiza mediante:",
		correcta: "Procesos de certificación y validación clínica de algoritmos",
		incorrectas: [
			"El aumento de la memoria disponible en el dispositivo móvil",
			"La prohibición de usar internet en entornos hospitalarios"
		]
	},
	{
		enunciado: "¿Qué es el 'Aprendizaje Ubicuo' (u-learning) en el contexto sanitario?",
		correcta: "Aprendizaje que se produce en cualquier momento y lugar gracias a dispositivos móviles",
		incorrectas: [
			"Aprendizaje que requiere la presencia física en una unidad de cuidados intensivos",
			"Formación reglada exclusivamente en centros de educación secundaria"
		]
	},
	{
		enunciado: "La inteligencia artificial generativa aplicada a la educación sanitaria permite:",
		correcta: "Crear escenarios de casos clínicos personalizados y simulaciones de diálogo",
		incorrectas: [
			"Sustituir la responsabilidad legal del docente en la evaluación final",
			"Predecir con exactitud la nota de oposición de cada aspirante"
		]
	},
	{
		enunciado: "En la elaboración de un vídeo educativo sanitario, el 'guion técnico' debe especificar:",
		correcta: "Los planos, encuadres, sonidos y acciones de cada secuencia",
		incorrectas: [
			"El número de veces que el vídeo será compartido en redes sociales",
			"El coste total de las licencias de software de edición profesional"
		]
	},
	{
		enunciado: "La interoperabilidad semántica en salud digital garantiza:",
		correcta: "Que el significado de los datos sea el mismo entre diferentes sistemas",
		incorrectas: [
			"Que los cables de los equipos sean compatibles con los enchufes",
			"Que todos los profesionales sanitarios hablen el mismo idioma oficial"
		]
	},
	{
		enunciado: "El conectivismo, como teoría de aprendizaje de la era digital (Siemens), postula que:",
		correcta: "El aprendizaje reside en la red de conexiones entre nodos de información",
		incorrectas: [
			"El conocimiento es un proceso individual de almacenamiento de datos",
			"La tecnología debe usarse solo para reforzar el aprendizaje conductista"
		]
	},
	{
		enunciado: "Los sistemas de soporte a la decisión clínica (CDSS) integrados en la formación sanitaria:",
		correcta: "Proporcionan recomendaciones basadas en evidencia ante datos específicos",
		incorrectas: [
			"Sustituyen la necesidad de estudio teórico por parte del alumno",
			"Son obligatorios para todos los ciudadanos según la Ley de Cohesión"
		]
	},
	{
		enunciado: "¿Qué define a la 'curación de contenidos' en el ámbito de la promoción de la salud?",
		correcta: "Seleccionar, filtrar y añadir valor a la información relevante para un público",
		incorrectas: [
			"Eliminar los virus informáticos de las bases de datos del hospital",
			"Aplicar tratamientos médicos a través de plataformas de telemedicina"
		]
	},
	{
		enunciado: "En el diseño instruccional ADDIE, la fase de 'Implementación' consiste en:",
		correcta: "La puesta en práctica del programa formativo con los alumnos",
		incorrectas: [
			"El análisis de las necesidades formativas iniciales",
			"La creación física de los materiales y recursos multimedia"
		]
	},
	{
		enunciado: "La tecnología 'Blockchain' en educación sanitaria podría utilizarse para:",
		correcta: "Verificar la autenticidad de títulos y certificaciones de forma descentralizada",
		incorrectas: [
			"Aumentar la velocidad de carga de los vídeos de cirugía en streaming",
			"Sustituir a los docentes por algoritmos de toma de decisiones"
		]
	},
	{
		enunciado: "Un 'Ple' (Personal Learning Environment) se caracteriza por ser:",
		correcta: "Un ecosistema personal de herramientas, fuentes y redes de conocimiento",
		incorrectas: [
			"Una plataforma institucional cerrada y gestionada por la administración",
			"Un programa de ordenador que se instala en el disco duro local"
		]
	},
	{
		enunciado: "La accesibilidad cognitiva en recursos digitales de salud busca:",
		correcta: "Hacer que la información sea fácil de comprender para personas con dificultades intelectuales",
		incorrectas: [
			"Que el contraste de colores permita la lectura con luz solar directa",
			"Asegurar que los ciegos puedan escuchar el contenido mediante lectores"
		]
	},
	{
		enunciado: "El microaprendizaje (microlearning) en salud se basa en:",
		correcta: "Cápsulas formativas breves enfocadas en un concepto o habilidad única",
		incorrectas: [
			"El uso de microscopios electrónicos para la formación en microbiología",
			"Sesiones de estudio de larga duración sin interrupciones técnicas"
		]
	},
	{
		enunciado: "Los sistemas LMS (Learning Management Systems) permiten al docente:",
		correcta: "Gestionar el seguimiento, evaluación y comunicación con los alumnos",
		incorrectas: [
			"Diagnosticar patologías infecciosas a través de la webcam",
			"Comprar suministros médicos para el laboratorio del instituto"
		]
	},
	{
		enunciado: "La ética en la inteligencia artificial educativa exige 'transparencia', lo que significa:",
		correcta: "Que los criterios y procesos de decisión de los algoritmos sean explicables",
		incorrectas: [
			"Que las pantallas de los ordenadores sean de cristal transparente",
			"Que los datos de los alumnos sean públicos y accesibles para cualquiera"
		]
	}
];