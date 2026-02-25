'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué implica técnicamente la 'adaptación al medio laboral' para un nuevo trabajador?",
correcta: "Proceso de ajuste a la cultura organizativa, normas y relaciones del entorno",
incorrectas: [
"Modificación de las leyes nacionales para ajustarse al contrato",
"Cambio de domicilio obligatorio a menos de un kilómetro del centro"
]
},
{
enunciado: "En la gestión moderna, la 'flexibilidad funcional' se refiere a:",
correcta: "Capacidad del trabajador para desempeñar distintas tareas o puestos",
incorrectas: [
"Posibilidad de llegar al trabajo a cualquier hora sin avisar",
"Realización de ejercicios físicos obligatorios antes de la jornada"
]
},
{
enunciado: "La 'formación continua' (lifelong learning) tiene como objetivo primordial:",
correcta: "Mantener actualizadas las competencias ante los cambios tecnológicos",
incorrectas: [
"Obtener el título de graduado escolar por segunda vez",
"Sustituir la experiencia práctica por el estudio de diccionarios"
]
},
{
enunciado: "¿Qué caracteriza a las 'organizaciones planas' en las nuevas concepciones empresariales?",
correcta: "Reducción de niveles jerárquicos y fomento de la comunicación directa",
incorrectas: [
"Empresas situadas exclusivamente en edificios de una sola planta",
"Eliminación total de cualquier tipo de responsabilidad laboral"
]
},
{
enunciado: "La 'participación de los trabajadores' en la empresa actual se canaliza mediante:",
correcta: "Equipos de trabajo autogestionados y sugerencias de mejora",
incorrectas: [
"La toma de decisiones sobre el reparto de dividendos bancarios",
"El control de las cuentas personales de los directivos"
]
},
{
enunciado: "La 'flexibilidad cuantitativa' externa se manifiesta a través de:",
correcta: "Ajuste de la plantilla mediante diferentes modalidades contractuales",
incorrectas: [
"Aumento del sueldo base según el número de hijos del empleado",
"Variación del peso del instrumental de laboratorio cada mes"
]
},
{
enunciado: "Un factor crítico en la adaptación al puesto de trabajo es:",
correcta: "La claridad en la definición de funciones y responsabilidades",
incorrectas: [
"El color de las paredes de la oficina o del laboratorio",
"La marca del coche que utiliza el jefe de departamento"
]
},
{
enunciado: "Las 'capacidades generales' (transversales) son valoradas porque:",
correcta: "Son transferibles entre diferentes sectores y puestos",
incorrectas: [
"Permiten trabajar sin tener ninguna formación específica",
"Son exclusivas de los puestos de alta dirección técnica"
]
},
{
enunciado: "¿Qué es el 'reskilling' en el entorno laboral actual?",
correcta: "Reciclaje profesional para aprender un oficio o competencia nueva",
incorrectas: [
"Reducción del salario por falta de rendimiento técnico",
"Renuncia voluntaria a los derechos de protección social"
]
},
{
enunciado: "La 'gestión por procesos' en el ámbito sanitario busca:",
correcta: "Optimizar la eficiencia centrando la actividad en el paciente",
incorrectas: [
"Aumentar el número de trámites burocráticos innecesarios",
"Eliminar la necesidad de personal cualificado en los hospitales"
]
},
{
enunciado: "La adaptabilidad proactiva implica que el trabajador:",
correcta: "Anticipa los cambios y se prepara para nuevas exigencias",
incorrectas: [
"Espera a recibir órdenes directas para realizar cualquier cambio",
"Rechaza el uso de nuevas tecnologías por miedo al error"
]
},
{
enunciado: "En la flexibilidad horaria, el 'tiempo de trabajo efectivo' es:",
correcta: "Periodo en el que el trabajador está a disposición del empresario",
incorrectas: [
"Suma de las horas de sueño y descanso fuera de la empresa",
"Tiempo empleado en los desplazamientos desde el domicilio"
]
},
{
enunciado: "La 'cultura de empresa' se transmite principalmente mediante:",
correcta: "Valores compartidos, rituales, símbolos y normas internas",
incorrectas: [
"El envío mensual de libros de historia de la ciudad",
"La asistencia obligatoria a cursos de idiomas antiguos"
]
},
{
enunciado: "El 'upskilling' se diferencia del reskilling en que busca:",
correcta: "Mejorar y profundizar en las competencias que ya se poseen",
incorrectas: [
"Aprender una profesión totalmente distinta a la actual",
"Disminuir el nivel de cualificación para ocupar otro puesto"
]
},
{
enunciado: "La 'flexibilidad salarial' suele vincular una parte del sueldo a:",
correcta: "Resultados, objetivos alcanzados o productividad",
incorrectas: [
"La antigüedad de los antepasados en la misma localidad",
"El número de veces que el trabajador usa el ascensor"
]
},
{
enunciado: "El 'trabajo en equipo' en las nuevas empresas exige:",
correcta: "Habilidades de comunicación, empatía y compromiso compartido",
incorrectas: [
"Que una sola persona realice todo el trabajo de los demás",
"La prohibición de hablar con compañeros de otros departamentos"
]
},
{
enunciado: "La formación continua financiada mediante bonificaciones se gestiona en España por:",
correcta: "FUNDAE (Fundación Estatal para la Formación en el Empleo)",
incorrectas: [
"La Real Academia de la Lengua Española (RAE)",
"El Instituto Nacional de Estadística (INE)"
]
},
{
enunciado: "Un síntoma de mala adaptación al puesto de trabajo es:",
correcta: "El aumento del estrés laboral y la falta de identificación con la tarea",
incorrectas: [
"La solicitud de nuevos cursos de formación técnica",
"El cumplimiento riguroso de las medidas de seguridad"
]
},
{
enunciado: "La 'empresa de aprendizaje' (learning organization) es aquella que:",
correcta: "Fomenta el conocimiento compartido y la innovación constante",
incorrectas: [
"Se dedica exclusivamente a la venta de material escolar",
"Solo contrata a estudiantes que aún no han terminado el ciclo"
]
},
{
enunciado: "La 'digitalización' del puesto de trabajo requiere capacidades de:",
correcta: "Manejo de herramientas software, ciberseguridad y gestión de datos",
incorrectas: [
"Reparación física de los circuitos integrados de la CPU",
"Escritura manual con caligrafía artística en los informes"
]
},
{
enunciado: "En la flexibilidad de lugar, el 'teletrabajo' implica:",
correcta: "Realizar la actividad fuera de las dependencias de la empresa mediante TIC",
incorrectas: [
"Acudir físicamente a la oficina solo para ver la televisión",
"Trabajar exclusivamente por teléfono sin usar ordenadores"
]
},
{
enunciado: "La 'polivalencia' es especialmente útil en pequeñas empresas porque:",
correcta: "Permite cubrir diversas necesidades con una plantilla ajustada",
incorrectas: [
"Evita tener que pagar la seguridad social de los empleados",
"Obliga a los trabajadores a no tener vacaciones nunca"
]
},
{
enunciado: "El 'mentoring' en la adaptación laboral consiste en:",
correcta: "Acompañamiento de un trabajador experto a uno recién incorporado",
incorrectas: [
"Control estricto de los movimientos del personal mediante GPS",
"Evaluación psicológica para detectar mentiras en el currículum"
]
},
{
enunciado: "La flexibilidad 'interna' se diferencia de la 'externa' en que:",
correcta: "Busca ajustar la organización sin extinguir los contratos",
incorrectas: [
"Se refiere únicamente al horario de las luces del edificio",
"Implica el despido inmediato de toda la plantilla fija"
]
},
{
enunciado: "¿Qué papel juega la inteligencia emocional en la adaptación laboral?",
correcta: "Facilita la gestión de conflictos y la relación con pacientes y colegas",
incorrectas: [
"Permite ignorar las normas de seguridad si el ánimo es alto",
"Sirve para calcular dosis de medicamentos sin usar matemáticas"
]
},
{
enunciado: "Un entorno laboral 'volátil' (VUCA) exige a los perfiles profesionales:",
correcta: "Alta tolerancia a la incertidumbre y agilidad de aprendizaje",
incorrectas: [
"Mantener los mismos métodos de trabajo durante décadas",
"Evitar cualquier tipo de formación que no sea presencial"
]
},
{
enunciado: "La 'evaluación del desempeño' sirve para:",
correcta: "Identificar necesidades de formación y potencial de desarrollo",
incorrectas: [
"Publicar las faltas de puntualidad en el tablón de anuncios",
"Decidir quién debe limpiar las zonas comunes del centro"
]
},
{
enunciado: "En los Procesos Sanitarios, la adaptación técnica implica:",
correcta: "Dominio de protocolos de seguridad, higiene y manejo de equipos",
incorrectas: [
"Venta de productos farmacéuticos por canales no oficiales",
"Diseño de campañas publicitarias para marcas de ropa"
]
},
{
enunciado: "La 'flexibilidad de jornada' puede incluir:",
correcta: "Bolsas de horas, jornadas intensivas o turnos rotatorios",
incorrectas: [
"Trabajar 24 horas seguidas sin descanso legal posterior",
"Eliminar el registro horario obligatorio por ley"
]
},
{
enunciado: "La 'formación de oferta' en el sistema de formación profesional es aquella:",
correcta: "Programada por la administración para trabajadores y desempleados",
incorrectas: [
"Que solo pueden cursar los hijos de los dueños de la empresa",
"Gratuita únicamente para personas que ya poseen un doctorado"
]
},
{
enunciado: "Un obstáculo para la flexibilidad participativa es:",
correcta: "El estilo de liderazgo autoritario y la falta de confianza",
incorrectas: [
"El uso de software de gestión de tareas compartido",
"La celebración de reuniones semanales de coordinación"
]
},
{
enunciado: "La 'capacidad de aprendizaje' (learnability) se considera hoy:",
correcta: "Más importante que los conocimientos técnicos estáticos",
incorrectas: [
"Una pérdida de tiempo si ya se tiene un título oficial",
"Una habilidad que solo se desarrolla en la infancia"
]
},
{
enunciado: "La adaptación al 'clima laboral' supone ajustarse a:",
correcta: "La atmósfera psicológica y las relaciones humanas en el trabajo",
incorrectas: [
"La temperatura y humedad reguladas por el aire acondicionado",
"El pronóstico del tiempo para realizar actividades al aire libre"
]
},
{
enunciado: "La 'autonomía' en el puesto de trabajo moderno busca:",
correcta: "Responsabilizar al trabajador sobre la gestión de sus tareas",
incorrectas: [
"Que el empleado trabaje sin ningún tipo de contrato ni sueldo",
"Permitir que el personal ignore las leyes de prevención de riesgos"
]
},
{
enunciado: "Las microformaciones (nanodegrees) son útiles porque:",
correcta: "Permiten una actualización rápida en competencias muy específicas",
incorrectas: [
"Duran varios años y cubren toda una familia profesional",
"Son obligatorias para poder entrar en cualquier hospital"
]
},
{
enunciado: "El 'ajuste persona-puesto' se logra cuando:",
correcta: "Hay coherencia entre las capacidades del sujeto y las demandas del trabajo",
incorrectas: [
"El trabajador acepta un sueldo inferior al mínimo legal",
"La empresa cambia su nombre para coincidir con el del empleado"
]
},
{
enunciado: "La 'rotación de puestos' es una técnica de flexibilidad que:",
correcta: "Evita la monotonía y aumenta la visión global del proceso",
incorrectas: [
"Obliga a cambiar de empresa cada seis meses por ley",
"Consiste en girar las sillas del laboratorio 360 grados"
]
},
{
enunciado: "La formación continua 'en la empresa' (on-the-job training) destaca por:",
correcta: "La aplicación inmediata de lo aprendido al entorno real",
incorrectas: [
"Realizarse exclusivamente en horario nocturno y fuera del centro",
"No tener ninguna relación con las tareas habituales del puesto"
]
},
{
enunciado: "Un perfil profesional adaptable debe poseer 'pensamiento crítico' para:",
correcta: "Evaluar la información y proponer soluciones a problemas complejos",
incorrectas: [
"Criticar negativamente a todos los compañeros en público",
"Aceptar cualquier orden sin cuestionar su seguridad o ética"
]
},
{
enunciado: "¿Qué promueve la flexibilidad laboral respecto a la conciliación?",
correcta: "Mejorar la compatibilidad entre la vida personal y profesional",
incorrectas: [
"Aumentar el número de horas extras obligatorias sin descanso",
"Prohibir que los trabajadores tengan responsabilidades familiares"
]
}
];