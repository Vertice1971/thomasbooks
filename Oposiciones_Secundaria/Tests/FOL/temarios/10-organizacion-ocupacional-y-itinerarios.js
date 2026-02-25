'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué se entiende por 'área ocupacional' dentro del sistema productivo?",
correcta: "Conjunto de ocupaciones con funciones y competencias afines dentro de una familia profesional",
incorrectas: [
"Espacio físico o taller donde se desarrolla una actividad técnica",
"Sector geográfico donde se concentra la producción industrial"
]
},
{
enunciado: "El Catálogo Nacional de Cualificaciones Profesionales (CNCP) organiza el sistema en:",
correcta: "26 familias profesionales y 3 niveles de cualificación",
incorrectas: [
"10 categorías salariales y 5 zonas geográficas",
"50 departamentos ministeriales y 2 niveles educativos"
]
},
{
enunciado: "¿Qué define técnicamente a un 'perfil profesional'?",
correcta: "Conjunto de competencias profesionales con significación en el empleo que posee una persona",
incorrectas: [
"Imagen personal y rasgos de carácter detectados en una entrevista",
"Grado de afinidad política y social con la dirección de la empresa"
]
},
{
enunciado: "Un 'itinerario tipo' en orientación profesional se define como:",
correcta: "Secuencia lógica de etapas formativas y laborales para alcanzar una meta profesional",
incorrectas: [
"Mapa de transporte para acceder a los polígonos industriales",
"Listado de centros educativos ordenados por antigüedad"
]
},
{
enunciado: "En la elaboración de un itinerario formativo-profesionalizador, el punto de partida es:",
correcta: "El análisis de la situación de partida y el autoconocimiento del sujeto",
incorrectas: [
"La firma del contrato de trabajo por tiempo indefinido",
"La obtención del título de doctor en ciencias sanitarias"
]
},
{
enunciado: "Las 'competencias profesionales' en el sistema productivo se dividen en:",
correcta: "Unidades de competencia, que son el agregado mínimo de funciones profesionales",
incorrectas: [
"Horas lectivas totales cursadas en el centro educativo",
"Número de páginas del currículum vítae del candidato"
]
},
{
enunciado: "El nivel 1 de cualificación profesional se caracteriza por:",
correcta: "Actividades simples y repetitivas con instrucciones directas",
incorrectas: [
"Funciones de gestión y mando en grandes organizaciones",
"Diseño de proyectos de investigación científica avanzada"
]
},
{
enunciado: "El nivel 3 de cualificación profesional implica:",
correcta: "Competencia en actividades complejas y capacidad de supervisión y gestión",
incorrectas: [
"Ejecución de tareas bajo supervisión constante y estrecha",
"Ausencia total de responsabilidad sobre el trabajo de otros"
]
},
{
enunciado: "¿Qué es la 'ocupación' en el marco del mercado laboral?",
correcta: "Conjunto de puestos de trabajo con tareas similares en diferentes empresas",
incorrectas: [
"El tiempo que un alumno pasa dentro del aula de orientación",
"La cantidad de personas que caben en un laboratorio sanitario"
]
},
{
enunciado: "Un itinerario formativo 'vertical' es aquel que:",
correcta: "Supone el ascenso progresivo por los niveles de cualificación del sistema",
incorrectas: [
"Implica el cambio constante entre familias profesionales distintas",
"Se realiza en un solo año académico sin posibilidad de mejora"
]
},
{
enunciado: "La 'polivalencia profesional' en la organización ocupacional permite:",
correcta: "Desempeñar diversas funciones dentro de un área o sector productivo",
incorrectas: [
"Trabajar en más de cinco empresas al mismo tiempo legalmente",
"Obtener todos los títulos de formación profesional sin estudiar"
]
},
{
enunciado: "En el sector de Procesos Sanitarios, un área ocupacional típica es:",
correcta: "Diagnóstico Clínico y Ortoprótesis",
incorrectas: [
"Mecánica de Vehículos Pesados y Maquinaria Agrícola",
"Gestión de Redes de Suministro Eléctrico de Alta Tensión"
]
},
{
enunciado: "El diseño de itinerarios personalizados en orientación debe ser:",
correcta: "Flexible, revisable y adaptado a la realidad del mercado",
incorrectas: [
"Rígido, inmutable y decidido por el orientador en solitario",
"Idéntico para todos los alumnos que cursan el mismo ciclo"
]
},
{
enunciado: "La 'Clasificación Nacional de Ocupaciones' (CNO) sirve para:",
correcta: "Codificar y uniformar las ocupaciones a efectos estadísticos y laborales",
incorrectas: [
"Decidir el salario exacto de cada trabajador en España",
"Establecer el ranking de las empresas con más beneficios"
]
},
{
enunciado: "Un componente esencial del itinerario profesionalizador es la:",
correcta: "Formación en centros de trabajo (FCT) o formación dual",
incorrectas: [
"Asistencia a eventos deportivos organizados por la empresa",
"Compra de uniformes de marca para las prácticas de aula"
]
},
{
enunciado: "¿Qué función cumple el 'módulo profesional' en la estructura del itinerario?",
correcta: "Unidad coherente de formación asociada a una o varias unidades de competencia",
incorrectas: [
"Espacio físico donde se guardan las herramientas de taller",
"Tiempo de descanso entre las sesiones teóricas y prácticas"
]
},
{
enunciado: "La 'transversalidad' de los perfiles profesionales implica que:",
correcta: "Ciertas competencias son comunes a varias áreas u ocupaciones",
incorrectas: [
"El perfil profesional desaparece al cambiar de comunidad autónoma",
"Solo se puede trabajar en la empresa donde se hicieron las prácticas"
]
},
{
enunciado: "En la elaboración de itinerarios, la fase de 'toma de decisiones' requiere:",
correcta: "Contrastar las aspiraciones personales con las demandas del sistema productivo",
incorrectas: [
"Elegir la opción que tenga el nombre más atractivo visualmente",
"Seguir la tradición familiar sin analizar otras posibilidades"
]
},
{
enunciado: "La 'movilidad profesional' dentro de un itinerario puede ser:",
correcta: "Horizontal (cambio de funciones) o vertical (ascenso de nivel)",
incorrectas: [
"Solo permitida dentro de la misma provincia de residencia",
"Exclusivamente reservada para personal con titulación universitaria"
]
},
{
enunciado: "El 'perfil de egreso' de un título de FP define:",
correcta: "Las competencias que el alumno habrá adquirido al finalizar sus estudios",
incorrectas: [
"El listado de empresas donde el alumno no podrá trabajar nunca",
"La nota media mínima necesaria para aprobar el ciclo completo"
]
},
{
enunciado: "La organización del sistema productivo actual demanda perfiles:",
correcta: "Flexibles, con alta capacidad de aprendizaje y adaptación tecnológica",
incorrectas: [
"Estáticos, especializados en una sola tarea para toda la vida",
"Basados exclusivamente en el esfuerzo físico sin base teórica"
]
},
{
enunciado: "Un itinerario 'formativo-profesionalizador' debe incluir acciones de:",
correcta: "Orientación, formación técnica y búsqueda activa de empleo",
incorrectas: [
"Ocio, tiempo libre y actividades recreativas ajenas al sector",
"Inversión financiera y gestión de carteras de acciones"
]
},
{
enunciado: "La 'acreditación de competencias' permite en el itinerario:",
correcta: "Reconocer oficialmente la experiencia laboral como formación",
incorrectas: [
"Eliminar la necesidad de tener un contrato legal de trabajo",
"Obtener un salario superior al de los directivos de la empresa"
]
},
{
enunciado: "¿Qué papel juega la 'formación continua' en el itinerario profesional?",
correcta: "Asegura la actualización permanente ante los cambios del sector",
incorrectas: [
"Es un castigo para los trabajadores que rinden menos",
"Sustituye a la formación básica inicial obligatoria"
]
},
{
enunciado: "En los Procesos Sanitarios, el perfil profesional está regulado por:",
correcta: "Normativa educativa y legislaciones específicas de salud",
incorrectas: [
"Acuerdos verbales entre el alumno y el tutor de prácticas",
"Las tendencias de moda en vestuario para laboratorios"
]
},
{
enunciado: "La 'segmentación' del mercado laboral influye en los itinerarios mediante:",
correcta: "La existencia de nichos con diferentes condiciones y estabilidad",
incorrectas: [
"La división de las empresas por el color de sus logotipos",
"El número de ventanas que tiene cada centro de trabajo"
]
},
{
enunciado: "Un 'indicador de inserción' en un itinerario tipo es:",
correcta: "El porcentaje de titulados que encuentran empleo en su área",
incorrectas: [
"La cantidad de papel utilizado para imprimir los currículos",
"El número de llamadas telefónicas recibidas por el orientador"
]
},
{
enunciado: "El diseño de itinerarios para colectivos vulnerables busca:",
correcta: "La eliminación de barreras y la mejora de la empleabilidad",
incorrectas: [
"La creación de puestos de trabajo ficticios sin utilidad social",
"La reducción de las exigencias técnicas de los títulos oficiales"
]
},
{
enunciado: "La 'prospectiva profesional' en orientación sirve para:",
correcta: "Anticipar qué perfiles serán necesarios en el futuro próximo",
incorrectas: [
"Analizar la historia de las profesiones en la antigua Grecia",
"Predecir los resultados de la lotería para financiar al centro"
]
},
{
enunciado: "En la organización ocupacional, el 'puesto de trabajo' es:",
correcta: "La concreción de una ocupación en una empresa específica",
incorrectas: [
"El lugar físico donde se guarda el material de limpieza",
"La plaza de aparcamiento reservada para la dirección"
]
},
{
enunciado: "El 'itinerario de retorno' al sistema educativo es aquel donde:",
correcta: "Un trabajador vuelve a formarse para mejorar su cualificación",
incorrectas: [
"El alumno abandona los estudios para trabajar en el campo",
"El profesor deja su plaza para trabajar en una empresa privada"
]
},
{
enunciado: "La 'competencia digital' es hoy en todos los itinerarios:",
correcta: "Una competencia transversal indispensable en cualquier sector",
incorrectas: [
"Un módulo que solo deben cursar los informáticos",
"Una pérdida de tiempo para los profesionales sanitarios"
]
},
{
enunciado: "Un itinerario profesionalizador debe contemplar el 'autoempleo' como:",
correcta: "Una opción de inserción mediante la creación de la propia empresa",
incorrectas: [
"Una forma de evitar cumplir con la normativa laboral vigente",
"El último recurso para quienes no sirven para trabajar con otros"
]
},
{
enunciado: "La evaluación de un itinerario personalizado se realiza comparando:",
correcta: "Los objetivos iniciales con los logros y metas alcanzadas",
incorrectas: [
"Las notas del alumno con las de sus compañeros de clase",
"El sueldo del primer mes con el precio del coche del jefe"
]
},
{
enunciado: "En la organización productiva, el 'sector servicios' en sanidad incluye:",
correcta: "Atención hospitalaria, laboratorios y asistencia domiciliaria",
incorrectas: [
"Extracción de minerales y materias primas pesadas",
"Fabricación de muebles de madera para oficinas"
]
},
{
enunciado: "El 'aprendizaje a lo largo de la vida' (Lifelong learning) implica:",
correcta: "Que el itinerario formativo no termina nunca realmente",
incorrectas: [
"Que los alumnos deben estar en el instituto hasta los 65 años",
"Que no es necesario obtener títulos oficiales en ningún momento"
]
},
{
enunciado: "Un 'obstáculo' en el itinerario profesional puede ser:",
correcta: "La falta de ajuste entre la formación y la demanda real",
incorrectas: [
"Tener demasiada formación y experiencia para un puesto",
"Que la empresa esté situada a diez minutos del domicilio"
]
},
{
enunciado: "La 'orientación para la transición' se activa especialmente:",
correcta: "Al pasar del sistema educativo al mercado laboral activo",
incorrectas: [
"Durante los periodos de vacaciones de Navidad y Semana Santa",
"Al finalizar cada jornada diaria en el centro educativo"
]
},
{
enunciado: "La 'deontología profesional' forma parte del perfil porque:",
correcta: "Regula la ética y el comportamiento correcto en la profesión",
incorrectas: [
"Permite cobrar más por los servicios prestados ilegalmente",
"Es una técnica de estudio para mejorar la memoria visual"
]
},
{
enunciado: "El éxito de un itinerario profesionalizador depende de:",
correcta: "La coherencia entre el proyecto personal y la realidad ocupacional",
incorrectas: [
"La cantidad de horas que el alumno pase navegando por internet",
"La suerte que tenga el orientador al elegir el ciclo para el alumno"
]
}
];