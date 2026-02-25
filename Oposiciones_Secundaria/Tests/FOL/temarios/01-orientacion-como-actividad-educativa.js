'use strict';

var PREGUNTAS = [
{
enunciado: "¿Cuál es el principio de la orientación que enfatiza la intervención antes de que surja un problema o déficit detectado?",
correcta: "Principio de prevención primaria",
incorrectas: [
"Principio de intervención terapéutica",
"Principio de desarrollo evolutivo"
]
},
{
enunciado: "En el modelo de consulta o triádico, ¿quién ejerce la función de mediador principal entre el orientador y el alumno?",
correcta: "El profesorado o la familia",
incorrectas: [
"El equipo directivo del centro",
"El inspector de educación"
]
},
{
enunciado: "Según la normativa vigente, la orientación se considera un elemento fundamental para:",
correcta: "Garantizar la calidad y equidad del sistema educativo",
incorrectas: [
"Sustituir la función tutorial del profesorado",
"Seleccionar al alumnado según sus capacidades intelectuales"
]
},
{
enunciado: "¿Qué técnica sociométrica permite representar gráficamente las relaciones de atracción y rechazo en un grupo-clase?",
correcta: "Sociograma",
incorrectas: [
"Inventario de personalidad",
"Escala de Likert profesional"
]
},
{
enunciado: "El modelo de programas en orientación educativa se caracteriza principalmente por ser:",
correcta: "Anticipador, preventivo y basado en objetivos medibles",
incorrectas: [
"Exclusivamente individualizado y de carácter clínico",
"Reactivo ante las demandas específicas del alumnado"
]
},
{
enunciado: "En la Formación Profesional actual, la orientación debe enfocarse especialmente hacia:",
correcta: "El aprendizaje a lo largo de la vida y la inserción laboral",
incorrectas: [
"La especialización técnica exclusiva en una sola tarea",
"La compensación de déficits académicos de etapas previas"
]
},
{
enunciado: "¿Qué autor es la referencia principal en el modelo de rasgos y factores aplicado a la orientación vocacional?",
correcta: "Parsons",
incorrectas: [
"Rogers",
"Skinner"
]
},
{
enunciado: "El principio de desarrollo en orientación asume que el proceso de maduración:",
correcta: "Es continuo y requiere intervención en todas las etapas vitales",
incorrectas: [
"Finaliza al concluir la etapa de escolarización obligatoria",
"Se centra únicamente en las crisis de identidad del sujeto"
]
},
{
enunciado: "La entrevista de orientación educativa se diferencia de la clínica en que la primera:",
correcta: "Tiene un carácter predominantemente preventivo y formativo",
incorrectas: [
"Carece de planificación previa y es totalmente libre",
"Busca exclusivamente el diagnóstico de patologías mentales"
]
},
{
enunciado: "¿Cuál de los siguientes es un componente esencial del modelo de consulta?",
correcta: "La relación colaborativa y simétrica entre profesionales",
incorrectas: [
"La imposición de directrices por parte del orientador",
"La atención directa y única al alumno destinatario"
]
},
{
enunciado: "El enfoque DUA (Diseño Universal para el Aprendizaje) se relaciona con la orientación al:",
correcta: "Identificar y eliminar barreras a la participación y el aprendizaje",
incorrectas: [
"Establecer niveles de inteligencia fijos para el alumnado",
"Diseñar programas específicos solo para alumnos con discapacidad"
]
},
{
enunciado: "Las técnicas de 'Role-playing' en el aula de Secundaria son útiles principalmente para:",
correcta: "Entrenar habilidades sociales y resolución de conflictos",
incorrectas: [
"Evaluar cuantitativamente el rendimiento académico",
"Sustituir las pruebas de evaluación psicométrica"
]
},
{
enunciado: "En el contexto de la orientación, el término 'empoderamiento' se refiere a:",
correcta: "Capacitar al alumno para gestionar su propia toma de decisiones",
incorrectas: [
"Dar autoridad legal al orientador sobre el equipo docente",
"Asegurar que el alumno siga el criterio del tutor siempre"
]
},
{
enunciado: "¿Qué herramienta permite el registro longitudinal de los logros y reflexiones del alumno sobre su carrera?",
correcta: "Portafolio de orientación",
incorrectas: [
"Expediente académico ordinario",
"Informe de evaluación psicopedagógica"
]
},
{
enunciado: "El modelo tecnológico de orientación se basa fundamentalmente en:",
correcta: "Sistemas de autoorientación mediante recursos digitales",
incorrectas: [
"La aplicación de test exclusivamente en formato papel",
"El uso de maquinaria técnica en talleres de FP"
]
},
{
enunciado: "La orientación en Bachillerato tiene como uno de sus objetivos específicos:",
correcta: "Facilitar la transición a la educación superior o al mundo laboral",
incorrectas: [
"La detección temprana de dificultades de lectoescritura",
"La organización de los servicios de comedor escolar"
]
},
{
enunciado: "¿Cuál es la función del orientador en el modelo de programas respecto al currículo?",
correcta: "Asesorar en la adaptación y diversificación curricular",
incorrectas: [
"Dictar los contenidos mínimos de las materias científicas",
"Evaluar el desempeño administrativo del centro"
]
},
{
enunciado: "La madurez vocacional se define técnicamente como:",
correcta: "La capacidad para afrontar las tareas de desarrollo profesional",
incorrectas: [
"El conocimiento absoluto de todas las profesiones existentes",
"La obtención de una titulación académica de grado superior"
]
},
{
enunciado: "En la intervención comunitaria, la orientación debe colaborar principalmente con:",
correcta: "Servicios sociales, sanitarios y agentes locales",
incorrectas: [
"Empresas de publicidad y marketing educativo",
"Sindicatos docentes exclusivamente"
]
},
{
enunciado: "Un cuestionario de intereses profesionales evalúa predominantemente:",
correcta: "Las preferencias y gustos hacia diferentes campos laborales",
incorrectas: [
"La capacidad intelectual general del individuo",
"El nivel de conocimientos técnicos en Procesos Sanitarios"
]
},
{
enunciado: "El modelo de servicios actuando por programas implica que:",
correcta: "La intervención se planifica a partir de necesidades del centro",
incorrectas: [
"El orientador solo atiende a quien acude a su despacho",
"Las actividades son improvisadas según surjan conflictos"
]
},
{
enunciado: "La observación sistemática en orientación requiere obligatoriamente:",
correcta: "Un registro previo de indicadores y criterios de observación",
incorrectas: [
"La presencia de un observador externo al centro educativo",
"La grabación en vídeo de todas las sesiones de clase"
]
},
{
enunciado: "La orientación profesional en la Formación Profesional de Grado Medio debe priorizar:",
correcta: "El autoconocimiento y la exploración del entorno laboral",
incorrectas: [
"La investigación científica teórica a alto nivel",
"La preparación exclusiva para oposiciones de secundaria"
]
},
{
enunciado: "La dimensión 'proactiva' de la orientación significa que:",
correcta: "Se interviene antes de que aparezcan las necesidades críticas",
incorrectas: [
"Se espera a que el alumno solicite ayuda voluntariamente",
"La responsabilidad recae solo en el equipo directivo"
]
},
{
enunciado: "En los Procesos Sanitarios, la orientación debe integrar contenidos sobre:",
correcta: "Riesgos laborales, ética profesional y normativa sanitaria",
incorrectas: [
"Historia del arte aplicado a la medicina",
"Técnicas de venta y marketing farmacéutico"
]
},
{
enunciado: "El consejo individual (Counseling) se considera un modelo de:",
correcta: "Intervención directa e individualizada",
incorrectas: [
"Intervención indirecta y grupal",
"Intervención sociocomunitaria masiva"
]
},
{
enunciado: "¿Qué técnica permite evaluar el clima de convivencia en un aula de FP?",
correcta: "Cuestionarios de clima escolar y sociogramas",
incorrectas: [
"Pruebas de rendimiento en anatomía patológica",
"Análisis de sangre y constantes vitales"
]
},
{
enunciado: "La función de 'asesoramiento' del orientador al profesorado se incluye en el:",
correcta: "Modelo de consulta",
incorrectas: [
"Modelo de servicios",
"Modelo clínico"
]
},
{
enunciado: "La orientación educativa es un proceso continuo que se desarrolla:",
correcta: "Durante toda la escolaridad y la vida adulta",
incorrectas: [
"Únicamente en los cambios de etapa educativa",
"Exclusivamente durante el último año de Bachillerato"
]
},
{
enunciado: "El principio de intervención social sugiere que el orientador debe:",
correcta: "Actuar sobre el contexto ambiental y no solo sobre el sujeto",
incorrectas: [
"Ignorar las variables familiares del alumno",
"Centrarse solo en los resultados de los exámenes"
]
},
{
enunciado: "¿Cuál es el objetivo primordial de la orientación en la etapa de la ESO?",
correcta: "Favorecer el desarrollo integral y la elección de itinerarios",
incorrectas: [
"Garantizar que todos los alumnos sigan estudios de medicina",
"Clasificar al alumnado por su nivel socioeconómico"
]
},
{
enunciado: "Las dinámicas de grupo en orientación profesional sirven para:",
correcta: "Mejorar la cohesión y trabajar competencias transversales",
incorrectas: [
"Ahorrar tiempo en la corrección de pruebas individuales",
"Sustituir la docencia técnica de Procesos Sanitarios"
]
},
{
enunciado: "Un orientador educativo debe poseer competencias técnicas en:",
correcta: "Evaluación psicopedagógica y diseño de programas",
incorrectas: [
"Contabilidad financiera avanzada de centros privados",
"Mantenimiento de infraestructuras de edificios públicos"
]
},
{
enunciado: "La 'atención a la diversidad' desde la orientación implica:",
correcta: "Ajustar la respuesta educativa a las necesidades de cada alumno",
incorrectas: [
"Agrupar a los alumnos por su origen geográfico",
"Exigir el mismo nivel de contenidos sin adaptaciones"
]
},
{
enunciado: "En el modelo clínico, la técnica fundamental es:",
correcta: "La entrevista terapéutica",
incorrectas: [
"La charla informativa masiva",
"El diseño de folletos publicitarios"
]
},
{
enunciado: "La evaluación de un programa de orientación debe ser:",
correcta: "Formativa, continua y basada en criterios de eficacia",
incorrectas: [
"Únicamente final y centrada en el gasto económico",
"Opcional y realizada por personal ajeno al centro"
]
},
{
enunciado: "La coordinación entre el orientador y el tutor es esencial para:",
correcta: "Unificar criterios en la acción tutorial y el seguimiento",
incorrectas: [
"Evitar que el tutor tenga contacto con las familias",
"Reducir las horas lectivas del orientador"
]
},
{
enunciado: "La orientación laboral se diferencia de la educativa en que:",
correcta: "Se centra específicamente en la empleabilidad e inserción",
incorrectas: [
"No utiliza técnicas de entrevista ni cuestionarios",
"Solo se puede realizar en empresas privadas"
]
},
{
enunciado: "El enfoque preventivo en el ámbito sanitario de la FP incluye:",
correcta: "La promoción de la salud y la seguridad en el trabajo",
incorrectas: [
"El tratamiento de enfermedades infecciosas agudas",
"La cirugía estética de baja complejidad"
]
},
{
enunciado: "La resiliencia, como capacidad a fomentar desde la orientación, es:",
correcta: "La capacidad de adaptarse positivamente a situaciones adversas",
incorrectas: [
"La resistencia física ante esfuerzos prolongados",
"La velocidad de aprendizaje de conceptos técnicos"
]
}
];