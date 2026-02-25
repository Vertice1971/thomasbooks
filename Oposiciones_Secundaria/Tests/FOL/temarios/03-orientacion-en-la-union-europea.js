'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué red europea facilita información sobre oportunidades de aprendizaje y empleo en Europa, además de marcos de cualificaciones?",
correcta: "Euroguidance",
incorrectas: [
"Eurydice",
"Cedefop",
"EURES"
]
},
{
enunciado: "El Marco Europeo de Cualificaciones (EQF) se basa fundamentalmente en:",
correcta: "Los resultados de aprendizaje (conocimientos, destrezas y competencias)",
incorrectas: [
"La duración acumulada de los años de escolarización",
"El prestigio académico de la institución que otorga el título",
"La nacionalidad del estudiante que solicita la homologación"
]
},
{
enunciado: "¿Cuál es el objetivo principal de la red EURES (European Employment Services)?",
correcta: "Facilitar la libre circulación de trabajadores en el Espacio Económico Europeo",
incorrectas: [
"Gestionar las becas de investigación de alto nivel (CERN)",
"Homologar títulos sanitarios de países extracomunitarios",
"Financiar infraestructuras hospitalarias en regiones desfavorecidas"
]
},
{
enunciado: "El programa Erasmus+ (2021-2027) integra, entre otros, el antiguo programa sectorial de formación profesional denominado:",
correcta: "Leonardo da Vinci",
incorrectas: [
"Comenius",
"Grundtvig",
"Erasmus Mundus"
]
},
{
enunciado: "En el contexto de la UE, el documento Europass que detalla las capacidades y competencias adquiridas en otros países europeos se denomina:",
correcta: "Documento de Movilidad Europass",
incorrectas: [
"Suplemento al Título de Técnico",
"Pasaporte de Lenguas",
"Currículum Vítae Único"
]
},
{
enunciado: "¿Qué organismo de la UE se encarga específicamente de la promoción y desarrollo de la Formación Profesional?",
correcta: "Cedefop",
incorrectas: [
"Agencia Europea para la Seguridad y Salud en el Trabajo",
"Consejo Económico y Social Europeo",
"Oficina de Publicaciones de la Unión Europea"
]
},
{
enunciado: "El sistema ECVET (European Credit System for Vocational Education and Training) tiene como fin:",
correcta: "Transferir, reconocer y acumular unidades de resultados de aprendizaje",
incorrectas: [
"Establecer una moneda única para el pago de matrículas educativas",
"Unificar los salarios mínimos de los técnicos sanitarios en Europa",
"Sustituir los currículos nacionales por un currículo europeo único"
]
},
{
enunciado: "¿Cuál es la función principal de la red Eurydice?",
correcta: "Proporcionar información sobre la estructura y organización de los sistemas educativos",
incorrectas: [
"Gestionar las ofertas de empleo público de la Comisión Europea",
"Organizar las pruebas de acceso a la formación profesional dual",
"Evaluar el desempeño clínico de los profesionales de enfermería"
]
},
{
enunciado: "El Marco de Referencia Europeo de Garantía de la Calidad en la FP (EQAVET) se basa en:",
correcta: "Un ciclo de calidad de planificación, implementación, evaluación y revisión",
incorrectas: [
"Un examen final europeo obligatorio para todos los técnicos",
"La inspección directa de centros por parte de funcionarios de Bruselas",
"El ranking de centros basado exclusivamente en la inserción laboral"
]
},
{
enunciado: "La iniciativa 'Garantía Juvenil' de la UE garantiza que los jóvenes reciban una oferta de empleo o formación en un plazo de:",
correcta: "Cuatro meses tras quedar desempleados o terminar la formación formal",
incorrectas: [
"Un año tras inscribirse en las oficinas de empleo",
"Seis meses desde que cumplen la mayoría de edad",
"Dos meses tras solicitar la prestación por desempleo"
]
},
{
enunciado: "En los países nórdicos (ej. Dinamarca), el modelo de orientación se caracteriza por:",
correcta: "Una fuerte vinculación entre educación y mercado laboral con alta inversión pública",
incorrectas: [
"La ausencia de servicios de orientación en la etapa de secundaria",
"Un modelo puramente privado basado en el pago por consulta",
"La centralización absoluta de las decisiones en el Ministerio de Sanidad"
]
},
{
enunciado: "¿Qué documento Europass facilita a los empleadores la comprensión del contenido y valor de un título de FP?",
correcta: "Suplemento al Título",
incorrectas: [
"Certificado de Antecedentes Penales",
"Carné de Vacunación Internacional",
"Informe de Vida Laboral"
]
},
{
enunciado: "La estrategia 'Europa 2020' y sus sucesivas actualizaciones ponen el foco en el crecimiento inteligente mediante:",
correcta: "Inversiones en educación, investigación e innovación",
incorrectas: [
"La reducción drástica de las plazas en formación profesional",
"El fomento exclusivo de las industrias pesadas tradicionales",
"La eliminación de la movilidad de trabajadores entre estados"
]
},
{
enunciado: "El modelo alemán de orientación profesional está intrínsecamente ligado a su:",
correcta: "Sistema Dual de formación profesional",
incorrectas: [
"Sistema de sanidad privada obligatoria",
"Estructura educativa de bachillerato único y general",
"Ausencia de departamentos de orientación en los centros"
]
},
{
enunciado: "¿Qué es el Programa de Aprendizaje Permanente (Life Long Learning Programme)?",
correcta: "El marco que englobaba programas como Erasmus, Leonardo y Comenius",
incorrectas: [
"Un curso obligatorio para los trabajadores sanitarios jubilados",
"Un sistema de préstamos bancarios para estudiantes de posgrado",
"La normativa que regula el acceso a la función pública europea"
]
},
{
enunciado: "La Red Europea de Políticas de Orientación a lo largo de la vida (ELGPN) busca:",
correcta: "Promover la cooperación en políticas de orientación entre estados miembros",
incorrectas: [
"Diseñar los exámenes de oposición para el cuerpo de profesores",
"Centralizar los expedientes académicos de todos los ciudadanos",
"Gestionar los fondos de pensiones de los orientadores europeos"
]
},
{
enunciado: "En Francia, los CIO (Centres d'Information et d'Orientation) dependen de:",
correcta: "El Ministerio de Educación Nacional",
incorrectas: [
"Las cámaras de comercio e industria exclusivamente",
"Los ayuntamientos de cada localidad",
"Empresas privadas de recursos humanos"
]
},
{
enunciado: "El portal 'Your Europe' ofrece información sobre:",
correcta: "Derechos y trámites para vivir, trabajar y estudiar en la UE",
incorrectas: [
"El estado del tiempo en las capitales europeas",
"La cartelera cinematográfica de los países miembros",
"Resultados deportivos de competiciones continentales"
]
},
{
enunciado: "¿Qué nivel del EQF corresponde generalmente a un Técnico Superior de FP en España?",
correcta: "Nivel 5",
incorrectas: [
"Nivel 3",
"Nivel 7",
"Nivel 1"
]
},
{
enunciado: "La validación de aprendizajes no formales e informales es una prioridad de la UE para:",
correcta: "Aumentar la empleabilidad y la movilidad de los trabajadores",
incorrectas: [
"Sustituir la formación en los institutos de educación secundaria",
"Reducir el gasto público en formación profesional inicial",
"Evitar que los trabajadores se desplacen a otros países"
]
},
{
enunciado: "El Fondo Social Europeo Plus (FSE+) es el principal instrumento de la UE para:",
correcta: "Invertir en las personas y apoyar la aplicación del Pilar Europeo de Derechos Sociales",
incorrectas: [
"Financiar la compra de material bélico defensivo",
"Construir autopistas de peaje en el centro de Europa",
"Sustentar las producciones cinematográficas en lenguas minoritarias"
]
},
{
enunciado: "¿Qué competencia se considera fundamental en la orientación europea para la 'gestión de la carrera' (CMS)?",
correcta: "La capacidad de planificar y gestionar el propio aprendizaje y trabajo",
incorrectas: [
"La obediencia ciega a las instrucciones del empleador",
"El conocimiento de las leyes de un único estado miembro",
"La especialización en una sola tarea mecánica inmutable"
]
},
{
enunciado: "La Red de Centros de Referencia Nacional en España colabora con la UE en:",
correcta: "La innovación y experimentación en formación profesional",
incorrectas: [
"La gestión de las becas de comedor escolar",
"La vigilancia de las fronteras exteriores de la Unión",
"La impresión de los títulos universitarios de grado"
]
},
{
enunciado: "En el sistema de orientación del Reino Unido (modelo precit), las 'Careers Companies' eran:",
correcta: "Organizaciones externas contratadas para prestar servicios de orientación",
incorrectas: [
"Empresas dedicadas a la fabricación de material escolar",
"Sindicatos de profesores de procesos sanitarios",
"Departamentos internos de los ministerios de economía"
]
},
{
enunciado: "El concepto europeo de 'Orientación a lo largo de la vida' incluye:",
correcta: "Orientación educativa, profesional y laboral de forma integrada",
incorrectas: [
"Solo la orientación recibida durante la infancia",
"Únicamente el asesoramiento para la jubilación",
"El marketing de productos educativos en televisión"
]
},
{
enunciado: "El Europass CV permite al usuario:",
correcta: "Crear un perfil estandarizado reconocido en toda Europa",
incorrectas: [
"Ocultar su formación académica para evitar la sobrecualificación",
"Traducir automáticamente sus documentos legales al latín",
"Acceder a préstamos personales sin intereses en cualquier banco"
]
},
{
enunciado: "La cooperación europea en materia de juventud (Estrategia de la UE para la Juventud) busca:",
correcta: "Fomentar la participación cívica y la inclusión social de los jóvenes",
incorrectas: [
"Obligar a los jóvenes a trabajar en el sector agrario",
"Prohibir el acceso a redes sociales en horario lectivo",
"Uniformar la vestimenta de los estudiantes de FP sanitaria"
]
},
{
enunciado: "Los 'Eurostat' son fundamentales para la orientación profesional porque:",
correcta: "Proporcionan datos estadísticos comparativos sobre empleo y educación",
incorrectas: [
"Son los encargados de emitir las tarjetas sanitarias europeas",
"Organizan las olimpiadas de formación profesional (WorldSkills)",
"Son los jueces que resuelven conflictos laborales en la UE"
]
},
{
enunciado: "En la UE, la 'competencia digital' en orientación implica:",
correcta: "El uso ético y crítico de las TIC para la búsqueda de empleo y formación",
incorrectas: [
"La capacidad de programar en lenguajes complejos como C++",
"El conocimiento de la historia del hardware de los años 80",
"La reparación física de ordenadores en los centros educativos"
]
},
{
enunciado: "El programa 'Cuerpo Europeo de Solidaridad' ofrece oportunidades de:",
correcta: "Voluntariado y proyectos de solidaridad para jóvenes",
incorrectas: [
"Formación militar profesional en ejércitos extranjeros",
"Empleo como administrativo en la sede de la ONU",
"Intervenciones quirúrgicas gratuitas en hospitales privados"
]
},
{
enunciado: "¿Qué nivel del EQF corresponde a los certificados de profesionalidad de nivel 1 en España?",
correcta: "Nivel 2",
incorrectas: [
"Nivel 4",
"Nivel 6",
"Nivel 8"
]
},
{
enunciado: "La resolución del Consejo sobre la orientación permanente (2008) subraya que esta es:",
correcta: "Un derecho de los ciudadanos y un objetivo estratégico de las políticas públicas",
incorrectas: [
"Una actividad opcional que deben financiar las familias",
"Un servicio innecesario en economías de mercado libre",
"Una competencia exclusiva de las empresas de seguros"
]
},
{
enunciado: "En Portugal, el sistema de orientación se organiza principalmente a través de:",
correcta: "SPO (Serviços de Psicologia e Orientação)",
incorrectas: [
"Agencias de viajes especializadas en educación",
"Colegios de médicos especialistas",
"Departamentos de recursos humanos de las fábricas"
]
},
{
enunciado: "El 'Skills Panorama' del Cedefop es una herramienta para:",
correcta: "Prever las necesidades de capacidades futuras en el mercado laboral",
incorrectas: [
"Ver imágenes satelitales de los centros de formación",
"Calcular la distancia entre hospitales europeos",
"Analizar el ADN de los estudiantes de procesos sanitarios"
]
},
{
enunciado: "La red de Centros ENIC-NARIC se ocupa de:",
correcta: "El reconocimiento académico de títulos y periodos de estudio",
incorrectas: [
"La gestión de residuos sanitarios peligrosos en Europa",
"El control de calidad de los medicamentos genéricos",
"La formación de pilotos de aviación comercial"
]
},
{
enunciado: "El aprendizaje 'informal' en el contexto europeo es aquel que:",
correcta: "Resulta de actividades diarias relacionadas con el trabajo o el ocio",
incorrectas: [
"Se imparte en universidades de prestigio internacional",
"Requiere una matrícula previa y el pago de tasas",
"No tiene ningún valor para la adquisición de competencias"
]
},
{
enunciado: "La Agenda de Capacidades para Europa busca:",
correcta: "Mejorar la pertinencia de las capacidades para el mercado laboral",
incorrectas: [
"Reducir el número de personas con estudios superiores",
"Aumentar la burocracia para la homologación de títulos",
"Fomentar el abandono escolar temprano en zonas rurales"
]
},
{
enunciado: "El 'Suplemento Europass al Título' incluye información sobre:",
correcta: "La naturaleza, nivel y contexto de los estudios cursados",
incorrectas: [
"Las notas numéricas detalladas de cada examen parcial",
"La dirección privada del director del centro educativo",
"El balance contable anual de la institución emisora"
]
},
{
enunciado: "En el ámbito de Procesos Sanitarios, la movilidad europea permite:",
correcta: "Conocer diferentes protocolos clínicos y sistemas de salud",
incorrectas: [
"Ejercer la medicina sin necesidad de título habilitante",
"Evitar el cumplimiento de las normas de asepsia nacionales",
"Trabajar exclusivamente en cruceros de lujo por el Mediterráneo"
]
},
{
enunciado: "La dimensión europea en la orientación busca, en última instancia:",
correcta: "La convergencia de los sistemas y la cohesión social en la Unión",
incorrectas: [
"La eliminación de todas las lenguas nacionales en la enseñanza",
"La creación de una única universidad para toda Europa",
"El control político de las preferencias vocacionales de los ciudadanos"
]
}
];