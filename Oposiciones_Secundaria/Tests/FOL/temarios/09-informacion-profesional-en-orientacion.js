'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué se entiende por 'información profesional' en el contexto de la orientación?",
correcta: "Conjunto de datos sobre el sistema educativo y el mercado laboral para la toma de decisiones",
incorrectas: [
"Conjunto de secretos industriales protegidos por patentes",
"Publicidad comercial de centros privados de formación"
]
},
{
enunciado: "En la fase de 'búsqueda de información', el orientador debe priorizar fuentes:",
correcta: "Primarias, oficiales y actualizadas",
incorrectas: [
"Basadas en rumores de redes sociales no profesionales",
"Documentos históricos con más de veinte años de antigüedad"
]
},
{
enunciado: "¿Cuál es el criterio fundamental para la 'selección de la información' profesional?",
correcta: "Pertinencia, fiabilidad y adecuación a la demanda del usuario",
incorrectas: [
"Extensión del texto y número de adjetivos utilizados",
"Orden alfabético de los autores de la fuente"
]
},
{
enunciado: "El 'tratamiento de la información' implica un proceso de:",
correcta: "Análisis, síntesis y adaptación al nivel de comprensión del destinatario",
incorrectas: [
"Acumulación masiva de datos en formato bruto",
"Ocultación de los datos que resulten negativos para el sector"
]
},
{
enunciado: "Una fuente de información profesional de carácter institucional en España es:",
correcta: "El portal TodoFP del Ministerio de Educación",
incorrectas: [
"Un foro de opinión sobre ocio y tiempo libre",
"La sección de sucesos de un diario nacional"
]
},
{
enunciado: "Los sistemas de información 'informatizados' en orientación permiten:",
correcta: "Interactividad y personalización de la búsqueda según el perfil",
incorrectas: [
"Sustituir la voluntad del individuo por una decisión algorítmica",
"Eliminar la necesidad de cualquier contacto humano en el proceso"
]
},
{
enunciado: "El concepto de 'infoxicación' aplicado a la orientación se refiere a:",
correcta: "Sobrecarga informativa que genera confusión e incapacidad de elección",
incorrectas: [
"Falta total de recursos documentales en el centro educativo",
"Intoxicación por el uso de materiales de laboratorio obsoletos"
]
},
{
enunciado: "La Red Euroguidance se especializa en ofrecer información sobre:",
correcta: "Oportunidades de aprendizaje y movilidad en el ámbito europeo",
incorrectas: [
"Sanciones penales para profesionales del sector sanitario",
"Precios de los suministros eléctricos en los hospitales"
]
},
{
enunciado: "En el método de búsqueda, el uso de 'descriptores' sirve para:",
correcta: "Catalogar la información de forma sistemática para su recuperación",
incorrectas: [
"Describir la apariencia física de los trabajadores del sector",
"Medir el tiempo que el alumno tarda en leer un folleto"
]
},
{
enunciado: "La información profesional 'no formal' es aquella que se obtiene por:",
correcta: "Contactos con expertos, visitas a empresas y redes profesionales",
incorrectas: [
"Decretos leyes publicados en los boletines oficiales",
"Currículos oficiales aprobados por las administraciones"
]
},
{
enunciado: "Un criterio ético en el tratamiento de la información profesional es:",
correcta: "La objetividad y la ausencia de prejuicios sesgados",
incorrectas: [
"La promoción exclusiva de los centros que financian al orientador",
"La alteración de los datos para favorecer la matriculación rápida"
]
},
{
enunciado: "Los observatorios de ocupaciones del SEPE son herramientas para conocer:",
correcta: "Tendencias del mercado de trabajo y perfiles con mayor empleabilidad",
incorrectas: [
"La ubicación exacta de las estrellas para la navegación aérea",
"Los resultados de las auditorías económicas de las empresas"
]
},
{
enunciado: "¿Qué función cumple el Suplemento Europass al Título?",
correcta: "Facilitar la comprensión de las competencias adquiridas ante terceros países",
incorrectas: [
"Actuar como visado de entrada para trabajadores extracomunitarios",
"Certificar la ausencia de enfermedades infecciosas en el titular"
]
},
{
enunciado: "La búsqueda de información profesional debe ser un proceso:",
correcta: "Activo, continuo y vinculado al proyecto vital del sujeto",
incorrectas: [
"Estático y finalizado tras la obtención del título de grado medio",
"Delegado totalmente en la decisión de los progenitores"
]
},
{
enunciado: "Un sistema de información profesional 'eficaz' debe asegurar:",
correcta: "La accesibilidad de los datos para todo tipo de usuarios",
incorrectas: [
"El cobro de una tasa por cada consulta realizada al orientador",
"El uso de un lenguaje complejo para restringir el acceso"
]
},
{
enunciado: "Las redes sociales de carácter profesional (ej. LinkedIn) se utilizan para:",
correcta: "Networking, marca personal y acceso al mercado laboral oculto",
incorrectas: [
"La descarga ilegal de software de gestión sanitaria",
"El intercambio de vídeos de entretenimiento sin relación laboral"
]
},
{
enunciado: "La información sobre 'itinerarios formativos' permite al alumno visualizar:",
correcta: "Las diferentes pasarelas y niveles del sistema de formación",
incorrectas: [
"El plano de evacuación de incendios del instituto",
"La lista de precios de la cafetería de la universidad"
]
},
{
enunciado: "En orientación, la información 'socioeconómica' incluye datos sobre:",
correcta: "Niveles salariales, tipos de contrato y situación de los sectores",
incorrectas: [
"Preferencias políticas de los directivos de las multinacionales",
"Número de festivos locales de cada municipio de la provincia"
]
},
{
enunciado: "El tratamiento de la información para alumnos con NEAE debe priorizar:",
correcta: "La adaptación de formatos y el enfoque en las capacidades",
incorrectas: [
"La ocultación de la normativa laboral por ser muy compleja",
"La derivación automática a empleos de baja cualificación"
]
},
{
enunciado: "La 'fiabilidad' de una fuente de internet se comprueba mediante:",
correcta: "La verificación de la autoría, el dominio y la fecha de actualización",
incorrectas: [
"La cantidad de anuncios publicitarios que tenga la página",
"El número de seguidores en redes sociales de entretenimiento"
]
},
{
enunciado: "Un método de búsqueda de información profesional 'basado en el campo' es:",
correcta: "La realización de entrevistas a trabajadores en su entorno laboral",
incorrectas: [
"La lectura de diccionarios técnicos en la biblioteca del centro",
"La consulta del BOE desde el ordenador de casa"
]
},
{
enunciado: "Los 'portales de empleo' se consideran sistemas de información porque:",
correcta: "Agrupan demandas y ofertas permitiendo el análisis del mercado",
incorrectas: [
"Son la única fuente legal para conseguir un trabajo público",
"Sustituyen a los títulos oficiales de formación profesional"
]
},
{
enunciado: "La información sobre 'competencias transversales' es necesaria porque:",
correcta: "Son habilidades transferibles a distintas ocupaciones y sectores",
incorrectas: [
"Son capacidades que solo se usan en el sector de la sanidad",
"Se adquieren únicamente mediante el pago de cursos privados"
]
},
{
enunciado: "El 'fichero de ocupaciones' es una herramienta que organiza:",
correcta: "La descripción de puestos, tareas y requisitos de acceso",
incorrectas: [
"Los expedientes disciplinarios de los alumnos del ciclo",
"Las facturas de compra de material de oficina del departamento"
]
},
{
enunciado: "En el sector sanitario, la información profesional debe incluir:",
correcta: "Requisitos de colegiación, riesgos laborales y deontología",
incorrectas: [
"Manuales de reparación de vehículos de transporte pesado",
"Técnicas de marketing para la venta de ropa deportiva"
]
},
{
enunciado: "La 'vigilancia informativa' en orientación profesional consiste en:",
correcta: "Estar al tanto de cambios legislativos y nuevos perfiles emergentes",
incorrectas: [
"Controlar las horas que los alumnos pasan en internet",
"Vigilar el acceso físico a la biblioteca del centro"
]
},
{
enunciado: "Un sesgo común en la información profesional que debe evitarse es:",
correcta: "Asociar determinadas profesiones exclusivamente a un género",
incorrectas: [
"Incluir la dirección web de los servicios públicos de empleo",
"Diferenciar entre formación profesional básica y superior"
]
},
{
enunciado: "El método 'didáctico' en la entrega de información profesional busca:",
correcta: "Que el alumno aprenda a buscar y procesar información por sí mismo",
incorrectas: [
"Que el alumno memorice la lista de todos los ciclos existentes",
"Que el orientador tome la decisión final por el alumno"
]
},
{
enunciado: "Las fuentes de información 'privadas' (Económicas) pueden ser:",
correcta: "Consultoras de RR.HH., empresas de selección o portales de pago",
incorrectas: [
"Boletines oficiales de las Comunidades Autónomas",
"Servicios de orientación de los institutos públicos"
]
},
{
enunciado: "La información sobre 'oferta formativa' debe incluir siempre:",
correcta: "Requisitos de acceso, duración, contenidos y centros donde se imparte",
incorrectas: [
"Listado de aprobados y suspensos del año anterior",
"Opiniones personales de los vecinos del centro educativo"
]
},
{
enunciado: "El uso de 'operadores booleanos' en la búsqueda de información permite:",
correcta: "Refinar los resultados combinando o excluyendo términos específicos",
incorrectas: [
"Traducir automáticamente los textos a otros idiomas",
"Calcular el salario neto tras las retenciones legales"
]
},
{
enunciado: "La información profesional 'cualitativa' aporta datos sobre:",
correcta: "Satisfacción laboral, prestigio social y cultura organizativa",
incorrectas: [
"Número exacto de desempleados en un mes concreto",
"Porcentaje de aumento del PIB en el sector servicios"
]
},
{
enunciado: "Un sistema de información profesional 'integrado' es aquel que:",
correcta: "Conecta datos educativos con datos del mercado laboral",
incorrectas: [
"Se encuentra en un solo ordenador sin conexión a la red",
"Solo puede ser consultado por el equipo directivo"
]
},
{
enunciado: "La búsqueda de información profesional en la ESO se centra en:",
correcta: "El autoconocimiento y la exploración general de familias profesionales",
incorrectas: [
"La especialización técnica en una sola tarea mecánica",
"La firma de contratos de trabajo indefinidos a tiempo completo"
]
},
{
enunciado: "La 'transparencia' en los sistemas de información profesional garantiza:",
correcta: "Que el usuario conozca las fuentes y la vigencia de los datos",
incorrectas: [
"Que los datos personales de los alumnos sean públicos",
"Que no haya secretos de estado en los manuales de biología"
]
},
{
enunciado: "En la orientación laboral, la información sobre 'derechos laborales' incluye:",
correcta: "Convenios colectivos, tipos de contrato y seguridad social",
incorrectas: [
"Reglas de etiqueta para cenas de gala en empresas",
"Cómo evitar el pago de impuestos de forma ilegal"
]
},
{
enunciado: "El 'análisis comparativo' de fuentes sirve para:",
correcta: "Detectar contradicciones y asegurar la veracidad de la información",
incorrectas: [
"Saber qué fuente tiene la tipografía más bonita",
"Elegir la información que sea más corta de leer"
]
},
{
enunciado: "La información sobre 'emprendimiento' debe informar sobre:",
correcta: "Trámites de constitución, subvenciones y plan de negocio",
incorrectas: [
"Cómo ganar dinero sin realizar ninguna actividad productiva",
"Listado de vacaciones de los inspectores de hacienda"
]
},
{
enunciado: "El papel del orientador como 'curador de contenidos' implica:",
correcta: "Filtrar y organizar la información relevante para facilitar su uso",
incorrectas: [
"Eliminar toda la información que no esté en formato papel",
"Cobrar por el acceso a la información que es pública"
]
},
{
enunciado: "La evaluación del sistema de información profesional se hace mediante:",
correcta: "Indicadores de uso, satisfacción y utilidad para la toma de decisiones",
incorrectas: [
"El peso físico de los servidores donde se aloja la web",
"El número de veces que se ha cambiado la contraseña del sistema"
]
}
];