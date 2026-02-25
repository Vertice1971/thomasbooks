'use strict';

var PREGUNTAS = [
{
enunciado: "¿Cómo se define la 'toma de decisiones' en el ámbito de la orientación profesional?",
correcta: "Proceso cognitivo y conductual de elección entre distintas alternativas formativas y laborales",
incorrectas: [
"Acto impulsivo basado exclusivamente en la intuición del momento",
"Asignación obligatoria de una profesión por parte de la administración"
]
},
{
enunciado: "En el modelo de toma de decisiones de Katz, el elemento central es:",
correcta: "El sistema de valores del individuo como predictor de la elección",
incorrectas: [
"El azar y las circunstancias imprevistas del entorno",
"La presión económica directa del mercado de trabajo"
]
},
{
enunciado: "El modelo CASVE (Peterson et al.) organiza la decisión en las fases de:",
correcta: "Comunicación, Análisis, Síntesis, Valoración y Ejecución",
incorrectas: [
"Cálculo, Aspiración, Selección, Validación y Éxito",
"Control, Apoyo, Seguridad, Vigilancia y Estabilidad"
]
},
{
enunciado: "¿Qué caracteriza a la 'Madurez Vocacional' según Super?",
correcta: "La disposición para hacer frente a las tareas del desarrollo profesional en cada etapa",
incorrectas: [
"Haber alcanzado una edad cronológica superior a los treinta años",
"Poseer un contrato de trabajo de carácter indefinido"
]
},
{
enunciado: "La conducta decisoria 'racional' se distingue por:",
correcta: "La búsqueda sistemática de información y el análisis de pros y contras",
incorrectas: [
"Dejar la decisión en manos de terceras personas o expertos",
"Postergar la elección indefinidamente para evitar el riesgo de error"
]
},
{
enunciado: "En el modelo de Gelatt, la toma de decisiones se describe como:",
correcta: "Un sistema de tratamiento de información con carácter cíclico",
incorrectas: [
"Un proceso lineal que finaliza con la primera inserción laboral",
"Una respuesta refleja ante la oferta y la demanda económica"
]
},
{
enunciado: "El concepto de 'Indecisión Crónica' en orientación profesional suele estar vinculado a:",
correcta: "Rasgos de personalidad como la ansiedad elevada o la baja autoestima",
incorrectas: [
"La falta puntual de un folleto informativo sobre un ciclo de FP",
"El exceso de ofertas de empleo en una zona geográfica concreta"
]
},
{
enunciado: "Dentro de la madurez profesional, la 'planificación' implica:",
correcta: "La capacidad de anticipar el futuro y establecer pasos intermedios",
incorrectas: [
"La memorización de las leyes educativas vigentes en el país",
"La realización de tareas de mantenimiento en el aula de taller"
]
},
{
enunciado: "El modelo de 'Aprendizaje Social' de Krumboltz enfatiza que la decisión depende de:",
correcta: "Factores genéticos, condiciones ambientales, experiencias de aprendizaje y destrezas",
incorrectas: [
"La posición de los astros y el horóscopo vocacional del sujeto",
"El nivel de ingresos brutos de los antepasados del individuo"
]
},
{
enunciado: "La 'exploración' como componente de la madurez vocacional consiste en:",
correcta: "La búsqueda activa de información sobre uno mismo y sobre el mundo laboral",
incorrectas: [
"El viaje a otros países por motivos exclusivamente turísticos",
"La realización de prácticas en empresas sin un plan educativo previo"
]
},
{
enunciado: "Un estilo de toma de decisiones 'dependiente' se observa cuando el sujeto:",
correcta: "Busca que otros decidan por él para evitar la responsabilidad",
incorrectas: [
"Utiliza bases de datos informáticas para contrastar opciones",
"Asume las consecuencias de sus actos de forma autónoma"
]
},
{
enunciado: "La 'autoeficacia' en la toma de decisiones (Hackett y Betz) se refiere a:",
correcta: "La creencia en la propia capacidad para organizar y ejecutar la elección",
incorrectas: [
"La rapidez con la que se rellena un formulario de matrícula",
"El número de títulos que se poseen antes de buscar empleo"
]
},
{
enunciado: "En la organización de una conducta decisoria, la fase de 'Síntesis' busca:",
correcta: "Reducir el número de opciones a unas pocas alternativas viables",
incorrectas: [
"Ampliar el catálogo de dudas para retrasar la elección final",
"Eliminar todas las opciones que no garanticen riqueza inmediata"
]
},
{
enunciado: "El modelo de 'Tiedeman y O’Hara' divide el proceso de decisión en dos periodos:",
correcta: "Anticipación e Implementación (ajuste)",
incorrectas: [
"Infancia y Jubilación profesional",
"Teoría técnica y Práctica de laboratorio"
]
},
{
enunciado: "La madurez profesional en la etapa de secundaria se centra en:",
correcta: "El desarrollo de actitudes y destrezas para la futura elección",
incorrectas: [
"La especialización definitiva en un único puesto de trabajo",
"La obtención de la jubilación anticipada en el sector público"
]
},
{
enunciado: "¿Qué es el 'estilo intuitivo' en la toma de decisiones?",
correcta: "Aquel que se basa en sentimientos e impresiones sin análisis formal",
incorrectas: [
"El uso de algoritmos matemáticos para elegir carrera",
"La consulta obligatoria a expertos en orientación laboral"
]
},
{
enunciado: "El Inventario de Madurez Vocacional (CMI) de Crites evalúa:",
correcta: "Actitudes y competencias para el proceso de elección",
incorrectas: [
"El coeficiente intelectual general del alumnado de FP",
"La capacidad física para realizar esfuerzos en el hospital"
]
},
{
enunciado: "La 'cristalización' de una preferencia vocacional implica:",
correcta: "La formulación de una meta profesional clara y definida",
incorrectas: [
"La pérdida de interés por cualquier tipo de formación",
"El enfriamiento de las relaciones laborales en la empresa"
]
},
{
enunciado: "En la orientación para Procesos Sanitarios, la toma de decisiones debe considerar:",
correcta: "La vocación de servicio, la ética y las exigencias de la titulación",
incorrectas: [
"La posibilidad de trabajar sin tener contacto con personas",
"La ausencia de responsabilidad legal ante errores técnicos"
]
},
{
enunciado: "La conducta decisoria 'ajustada' es aquella que:",
correcta: "Consigue un equilibrio entre deseos personales y realidad externa",
incorrectas: [
"Se adapta ciegamente a lo que dicen los medios de comunicación",
"Busca solo el beneficio económico ignorando las capacidades"
]
},
{
enunciado: "El modelo cognitivo-informacional asume que decidir es:",
correcta: "Resolver un problema mediante el procesamiento de datos",
incorrectas: [
"Un acto místico dictado por la inspiración del momento",
"Una conducta puramente biológica heredada genéticamente"
]
},
{
enunciado: "La 'especificación' dentro del proceso de madurez vocacional es:",
correcta: "La elección de un itinerario concreto dentro de un área general",
incorrectas: [
"La duda constante entre dos opciones muy parecidas",
"La redacción de un currículo sin objetivos definidos"
]
},
{
enunciado: "Un obstáculo cognitivo en la decisión es el 'pensamiento dicotómico', que consiste en:",
correcta: "Ver las opciones solo como éxito total o fracaso absoluto",
incorrectas: [
"Analizar múltiples variables de forma simultánea y compleja",
"Utilizar dos idiomas diferentes para buscar información"
]
},
{
enunciado: "La 'orientación para la carrera' entiende que la toma de decisiones es:",
correcta: "Un proceso recurrente a lo largo de toda la vida (Life-span)",
incorrectas: [
"Un evento único que ocurre exclusivamente a los 16 años",
"Un trámite burocrático que solo realizan los desempleados"
]
},
{
enunciado: "En la fase de 'Valoración' del modelo CASVE, el individuo:",
correcta: "Juzga el coste y beneficio de cada opción para sí mismo y otros",
incorrectas: [
"Pone nota a los profesores que le han impartido clase",
"Calcula el precio de los libros de texto de la universidad"
]
},
{
enunciado: "La madurez profesional requiere de 'realismo', lo que significa:",
correcta: "Conocimiento de las limitaciones personales y del mercado",
incorrectas: [
"Ignorar las dificultades para mantener una actitud optimista",
"Creer que se puede conseguir cualquier puesto sin formación"
]
},
{
enunciado: "El modelo de Ginzberg describe la elección vocacional como un proceso de:",
correcta: "Compromiso entre intereses, capacidades y valores",
incorrectas: [
"Lucha contra la autoridad familiar y escolar",
"Sustitución de la formación técnica por ocio"
]
},
{
enunciado: "La 'organización de la conducta decisoria' en el aula implica:",
correcta: "Enseñar al alumnado estrategias de resolución de problemas",
incorrectas: [
"Elegir por el alumno el ciclo que debe cursar el próximo año",
"Prohibir el acceso a información que sea contradictoria"
]
},
{
enunciado: "El estilo de decisión 'procrastinador' se caracteriza por:",
correcta: "Aplazar sistemáticamente el momento de la elección",
incorrectas: [
"Tomar decisiones de forma extremadamente rápida y eficaz",
"Basar la elección en el análisis estadístico de datos"
]
},
{
enunciado: "La 'identidad vocacional' es el resultado de:",
correcta: "Un proceso de diferenciación e integración del yo profesional",
incorrectas: [
"Poseer un carné de identidad con la profesión escrita",
"Comprar la ropa de trabajo antes de empezar el ciclo"
]
},
{
enunciado: "En el modelo de toma de decisiones, la retroalimentación sirve para:",
correcta: "Evaluar las consecuencias de la elección y reajustar el proceso",
incorrectas: [
"Aumentar el volumen de los altavoces durante una charla",
"Criticar las decisiones tomadas por los compañeros"
]
},
{
enunciado: "La madurez para la elección en FP de Grado Superior exige:",
correcta: "Un alto grado de autonomía y conocimiento del sector sanitario",
incorrectas: [
"Dependencia total de las instrucciones del tutor de prácticas",
"Falta de interés por las salidas laborales de la titulación"
]
},
{
enunciado: "Un factor ambiental que influye en la toma de decisiones es:",
correcta: "La situación del mercado laboral y la oferta formativa",
incorrectas: [
"El tipo de letra utilizado en el examen de orientación",
"La decoración del despacho del jefe de estudios"
]
},
{
enunciado: "La conducta decisoria es 'responsable' cuando el sujeto:",
correcta: "Asume el compromiso de llevar a cabo la opción elegida",
incorrectas: [
"Culpa a los demás si la opción elegida no le gusta",
"Abandona la formación ante la primera dificultad técnica"
]
},
{
enunciado: "En el modelo de 'compromiso' de Gottfredson, el proceso implica:",
correcta: "Renunciar a alternativas menos compatibles con el autoconcepto",
incorrectas: [
"Firmar un contrato legal de permanencia en un instituto",
"Aceptar cualquier empleo sin considerar las condiciones"
]
},
{
enunciado: "La madurez vocacional se correlaciona positivamente con:",
correcta: "El autoconocimiento y la autoestima del individuo",
incorrectas: [
"El número de suspensos en materias de ciencias",
"La distancia física entre el domicilio y el centro"
]
},
{
enunciado: "La 'jerarquización de valores' en la decisión permite:",
correcta: "Priorizar qué aspectos (sueldo, horario, ayuda) son más importantes",
incorrectas: [
"Ordenar a los compañeros por orden de simpatía",
"Hacer una lista de los libros más caros de la biblioteca"
]
},
{
enunciado: "El papel del orientador en la toma de decisiones es:",
correcta: "Asesorar en el proceso para que el alumno decida por sí mismo",
incorrectas: [
"Actuar como un oráculo que predice el futuro laboral",
"Imponer su propio criterio profesional sobre el del alumno"
]
},
{
enunciado: "La madurez profesional es un constructo:",
correcta: "Multidimensional que incluye aspectos cognitivos y afectivos",
incorrectas: [
"Unidimensional que solo mide la inteligencia lógica",
"Físico que se mide a través del desarrollo biológico"
]
},
{
enunciado: "Un programa de mejora de la conducta decisoria debe incluir:",
correcta: "Entrenamiento en búsqueda de información y autoevaluación",
incorrectas: [
"Sesiones de hipnosis para elegir la carrera ideal",
"El sorteo de las plazas de formación mediante azar"
]
}
];