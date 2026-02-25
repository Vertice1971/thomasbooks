'use strict';

var PREGUNTAS = [
{
enunciado: "¿Cuál es el primer paso fundamental en la organización de la búsqueda de empleo?",
correcta: "Definir el objetivo profesional y realizar un balance de competencias",
incorrectas: [
"Enviar el currículum indiscriminadamente a todas las empresas de la provincia",
"Esperar a que el servicio público de empleo llame por teléfono"
]
},
{
enunciado: "En el proceso de selección, la 'entrevista por competencias' busca:",
correcta: "Evidencias de comportamientos pasados que predigan el desempeño futuro",
incorrectas: [
"Evaluar exclusivamente el expediente académico del candidato",
"Interrogar al aspirante sobre su vida privada y convicciones políticas"
]
},
{
enunciado: "El 'mercado de trabajo oculto' se caracteriza por:",
correcta: "Vacantes que no se publican y se gestionan mediante redes de contactos",
incorrectas: [
"Ofertas de empleo que solo existen en la economía sumergida",
"Puestos de trabajo reservados exclusivamente a familiares de directivos"
]
},
{
enunciado: "¿Qué herramienta es esencial para gestionar la marca personal y el networking hoy?",
correcta: "Las redes sociales profesionales como LinkedIn",
incorrectas: [
"Las páginas de anuncios clasificados en prensa de papel",
"El envío de cartas físicas por correo ordinario a buzones ciegos"
]
},
{
enunciado: "La técnica del 'Elevator Pitch' consiste en:",
correcta: "Una presentación breve y eficaz del perfil profesional en poco tiempo",
incorrectas: [
"Un examen técnico sobre el mantenimiento de ascensores",
"Una prueba de resistencia física para el personal sanitario"
]
},
{
enunciado: "En un proceso de selección, las pruebas psicotécnicas sirven para:",
correcta: "Medir aptitudes, capacidades intelectuales y rasgos de personalidad",
incorrectas: [
"Determinar el estado de salud física general del trabajador",
"Evaluar el nivel de ingresos previos del candidato"
]
},
{
enunciado: "El 'Autoempleo' se define como:",
correcta: "La actividad profesional generada por el propio trabajador de forma autónoma",
incorrectas: [
"La contratación de un empleado por parte de una multinacional",
"El trabajo voluntario no remunerado en organizaciones sociales"
]
},
{
enunciado: "¿Qué es la 'habilidad emprendedora' según el marco europeo?",
correcta: "La capacidad de transformar ideas en actos mediante la innovación y gestión",
incorrectas: [
"La habilidad para evitar el pago de impuestos de forma legal",
"El cumplimiento estricto de las órdenes de un superior jerárquico"
]
},
{
enunciado: "Una fuente de información primaria en la búsqueda de empleo es:",
correcta: "El contacto directo con los responsables de recursos humanos",
incorrectas: [
"Un informe estadístico sobre el desempleo del año pasado",
"Un artículo de opinión en un blog sobre economía general"
]
},
{
enunciado: "La 'Carta de Presentación' tiene como objetivo principal:",
correcta: "Suscitar el interés del reclutador para que lea el currículum",
incorrectas: [
"Repetir exactamente toda la información que ya está en el currículum",
"Solicitar el salario deseado de forma exigente antes de la entrevista"
]
},
{
enunciado: "En la organización de la búsqueda, el 'cronograma' sirve para:",
correcta: "Planificar las tareas diarias y hacer un seguimiento de las candidaturas",
incorrectas: [
"Medir el tiempo que el trabajador pasa en la cafetería",
"Calcular la fecha de jubilación según la edad actual"
]
},
{
enunciado: "Las ETT (Empresas de Trabajo Temporal) actúan como:",
correcta: "Intermediarios que contratan trabajadores para cederlos a empresas usuarias",
incorrectas: [
"Organismos públicos que gestionan el subsidio por desempleo",
"Centros de formación que solo imparten clases teóricas"
]
},
{
enunciado: "En un 'Assessment Center', los candidatos deben realizar:",
correcta: "Pruebas grupales, simulaciones y ejercicios prácticos supervisados",
incorrectas: [
"Exámenes escritos individuales de larga duración sobre leyes",
"Una carrera de obstáculos para medir la velocidad física"
]
},
{
enunciado: "El currículum 'cronológico inverso' destaca:",
correcta: "Las experiencias laborales más recientes al principio del documento",
incorrectas: [
"Los estudios de educación primaria por encima de los universitarios",
"Los periodos de inactividad laboral de forma detallada"
]
},
{
enunciado: "La 'Red de Contactos' o Networking debe iniciarse:",
correcta: "Desde antes de finalizar la formación y mantenerse siempre activa",
incorrectas: [
"Solo cuando ya se ha perdido el empleo actual",
"Únicamente con personas que tengan un cargo superior al nuestro"
]
},
{
enunciado: "Un plan de empresa para el autoempleo debe incluir necesariamente:",
correcta: "Un análisis de mercado y un plan de viabilidad económica",
incorrectas: [
"El árbol genealógico completo del futuro emprendedor",
"Un listado de los libros leídos durante la formación profesional"
]
},
{
enunciado: "En la entrevista de trabajo, la comunicación no verbal incluye:",
correcta: "La postura, el contacto visual y los gestos del candidato",
incorrectas: [
"El contenido técnico de las respuestas dadas al entrevistador",
"La ortografía utilizada en el envío del currículum previo"
]
},
{
enunciado: "Los 'Portales de Empleo' en internet permiten:",
correcta: "Inscribirse en ofertas y recibir alertas según el perfil profesional",
incorrectas: [
"Garantizar la contratación inmediata por el mero hecho de registrarse",
"Sustituir la necesidad de tener una titulación oficial para el puesto"
]
},
{
enunciado: "La 'actitud proactiva' en la búsqueda de empleo significa:",
correcta: "Tomar la iniciativa y generar oportunidades sin esperar a que surjan",
incorrectas: [
"Responder solo a las ofertas que llegan a través del correo postal",
"Aceptar cualquier condición laboral sin negociar por miedo al rechazo"
]
},
{
enunciado: "Un 'Currículum Funcional' es aquel que:",
correcta: "Agrupa la experiencia por áreas temáticas o habilidades destacadas",
incorrectas: [
"Solo contiene los datos de contacto y ninguna experiencia previa",
"Enumera los trabajos por orden alfabético de las empresas"
]
},
{
enunciado: "En el sector sanitario, los procesos de selección suelen valorar especialmente:",
correcta: "La experiencia práctica, la empatía y la capacidad de trabajo en equipo",
incorrectas: [
"La posesión de vehículos de lujo para desplazarse al centro",
"El conocimiento de idiomas antiguos como el latín o el griego"
]
},
{
enunciado: "La 'entrevista grupal' sirve a los reclutadores para observar:",
correcta: "Roles de liderazgo, capacidad de escucha y resolución de conflictos",
incorrectas: [
"La velocidad de lectura de cada uno de los aspirantes",
"Quién tiene el mejor aspecto físico de todos los candidatos"
]
},
{
enunciado: "El 'Autoempleo Colectivo' se manifiesta habitualmente en forma de:",
correcta: "Cooperativas de trabajo asociado o sociedades laborales",
incorrectas: [
"Contratos de prácticas en grandes empresas multinacionales",
"Plazas de funcionario de carrera en la administración local"
]
},
{
enunciado: "La 'Huella Digital' de un candidato es:",
correcta: "El rastro de información que deja en internet y redes sociales",
incorrectas: [
"La marca física de los dedos en los documentos entregados",
"El código numérico de seguridad de su tarjeta sanitaria"
]
},
{
enunciado: "Un error común en el currículum que debe evitarse es:",
correcta: "Incluir información irrelevante o cometer faltas de ortografía",
incorrectas: [
"Poner el número de teléfono móvil para ser localizado",
"Detallar las funciones realizadas en el último puesto ocupado"
]
},
{
enunciado: "La 'Franquicia' como forma de autoempleo permite:",
correcta: "Explotar un modelo de negocio ya probado a cambio de royalties",
incorrectas: [
"Trabajar sin tener que cumplir ninguna norma de la marca",
"Evitar la inversión inicial necesaria para abrir un local"
]
},
{
enunciado: "En la fase de seguimiento de la búsqueda, es útil:",
correcta: "Anotar el resultado de los contactos y preparar los próximos pasos",
incorrectas: [
"Llamar cada hora a la empresa para preguntar por el proceso",
"Borrar todos los datos de las empresas que no nos han contratado"
]
},
{
enunciado: "Las técnicas de 'Role-Playing' en orientación sirven para:",
correcta: "Ensayar la respuesta ante preguntas difíciles de una entrevista",
incorrectas: [
"Aprender a actuar en obras de teatro durante el tiempo libre",
"Sustituir la formación técnica por juegos de entretenimiento"
]
},
{
enunciado: "El SEPE y los servicios autonómicos ofrecen información sobre:",
correcta: "Ofertas de empleo, formación profesional y orientación laboral",
incorrectas: [
"Descuentos en entradas para conciertos y eventos masivos",
"Trámites para la obtención del pasaporte internacional"
]
},
{
enunciado: "La 'Resiliencia' en el proceso de búsqueda de empleo ayuda a:",
correcta: "Mantener la motivación tras recibir respuestas negativas",
incorrectas: [
"Conseguir que todas las empresas nos den una respuesta positiva",
"Evitar tener que buscar información sobre las empresas"
]
},
{
enunciado: "Una 'Candidatura Espontánea' es aquella que:",
correcta: "Se envía a una empresa sin que exista una oferta previa publicada",
incorrectas: [
"Se realiza de forma improvisada sin haber preparado el currículum",
"Es obligatoria para todos los alumnos que terminan la FP"
]
},
{
enunciado: "El 'Video-Currículum' es una técnica que destaca:",
correcta: "Las habilidades comunicativas y la creatividad del candidato",
incorrectas: [
"La capacidad de edición de cine profesional del técnico sanitario",
"El ahorro de papel al no tener que imprimir el documento"
]
},
{
enunciado: "Las 'Soft Skills' (Habilidades blandas) en la selección incluyen:",
correcta: "Comunicación, adaptabilidad, ética y pensamiento crítico",
incorrectas: [
"Manejo de instrumental de laboratorio y equipos médicos",
"Conocimiento profundo de la normativa de seguridad social"
]
},
{
enunciado: "En el autoempleo, el 'punto de equilibrio' es el momento en que:",
correcta: "Los ingresos igualan a los gastos y no hay ni pérdidas ni beneficios",
incorrectas: [
"El emprendedor decide cerrar el negocio por falta de ganas",
"Se contrata al primer trabajador por cuenta ajena"
]
},
{
enunciado: "La 'entrevista telefónica' suele utilizarse como:",
correcta: "Primer filtro para comprobar datos básicos y disponibilidad",
incorrectas: [
"Prueba definitiva para decidir la contratación del director general",
"Sustituto legal de la firma del contrato de trabajo"
]
},
{
enunciado: "Un perfil de LinkedIn optimizado debe tener:",
correcta: "Una foto profesional, un titular clave y extracto con logros",
incorrectas: [
"Fotos de las últimas vacaciones familiares en la playa",
"Un listado de todas las quejas sobre los empleos anteriores"
]
},
{
enunciado: "La 'formación para el emprendimiento' busca:",
correcta: "Desarrollar la autonomía y la capacidad de gestión de proyectos",
incorrectas: [
"Obligar a todos los alumnos a hacerse autónomos al terminar",
"Sustituir el aprendizaje técnico por la gestión de marketing"
]
},
{
enunciado: "En una entrevista, ante la pregunta sobre 'defectos', se debe:",
correcta: "Mencionar áreas de mejora reales y qué se está haciendo para superarlas",
incorrectas: [
"Responder que no se tiene ningún defecto y que se es perfecto",
"Contar problemas personales graves que no afectan al trabajo"
]
},
{
enunciado: "El 'trabajo por proyectos' es una tendencia que exige:",
correcta: "Gran capacidad de organización y adaptación a entornos cambiantes",
incorrectas: [
"Permanecer en la misma tarea durante treinta años sin cambios",
"Ignorar las necesidades del cliente para centrarse en la técnica"
]
},
{
enunciado: "La organización de la búsqueda de empleo finaliza cuando:",
correcta: "Se logra la inserción y se inicia el periodo de adaptación al puesto",
incorrectas: [
"Se termina la prestación por desempleo concedida por el estado",
"El orientador cierra el expediente del alumno por falta de interés"
]
}
];