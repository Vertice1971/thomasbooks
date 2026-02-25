'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué implica considerar a la empresa como un 'sistema social integrado'?",
correcta: "Que es un conjunto de elementos interrelacionados donde el factor humano y la estructura técnica son interdependientes",
incorrectas: [
"Que la organización funciona como un ente aislado de las fluctuaciones del mercado exterior",
"Que los objetivos económicos de la entidad prevalecen siempre sobre cualquier norma de convivencia interna"
]
},
{
enunciado: "En el marco de la cultura empresarial, los 'artefactos' se refieren a:",
correcta: "Elementos visibles como la arquitectura, el lenguaje, los códigos de vestimenta y los rituales",
incorrectas: [
"Las creencias profundas e inconscientes que determinan la percepción de la realidad por los empleados",
"La maquinaria pesada y el instrumental técnico necesario para la producción sanitaria"
]
},
{
enunciado: "La función de personal o de Recursos Humanos tiene como objetivo estratégico:",
correcta: "Lograr el equilibrio entre la satisfacción de las metas organizativas y las necesidades de los trabajadores",
incorrectas: [
"Sustituir la toma de decisiones directiva por procesos puramente administrativos y contables",
"Garantizar que todos los empleados posean exactamente la misma personalidad y formación"
]
},
{
enunciado: "¿En qué consiste la 'Planificación de plantillas'?",
correcta: "Proceso de prever las necesidades de personal cuantitativa y cualitativamente a medio y largo plazo",
incorrectas: [
"Elaboración del cuadrante de turnos semanal para cubrir las ausencias por enfermedad",
"Registro de las jornadas laborales para el cumplimiento del control horario legal"
]
},
{
enunciado: "El 'Análisis previsional' de las necesidades de personal busca evitar:",
correcta: "Tanto el exceso de personal (infrautilización) como la escasez del mismo (cuellos de botella)",
incorrectas: [
"La contratación de trabajadores con una cualificación superior a la mínima exigida por la ley",
"El gasto en formación continua para los empleados que ya han superado el periodo de prueba"
]
},
{
enunciado: "¿Qué elemento es fundamental en una 'Descripción de puesto de trabajo' (DPT)?",
correcta: "La identificación de las tareas, responsabilidades y los requerimientos de competencia (profesiograma)",
incorrectas: [
"La lista detallada de los nombres de los anteriores ocupantes del puesto en la empresa",
"El historial de reparaciones técnicas de los equipos asociados a ese lugar de trabajo"
]
},
{
enunciado: "La evaluación del desempeño '360 grados' se caracteriza por:",
correcta: "Recoger información del evaluado proveniente de jefes, subordinados, compañeros y clientes",
incorrectas: [
"Realizar el análisis del rendimiento exclusivamente una vez cada año coincidiendo con el cierre contable",
"Utilizar un software de vigilancia que monitoriza cada movimiento físico del trabajador en el centro"
]
},
{
enunciado: "Un 'Plan de formación del personal' debe partir necesariamente de:",
correcta: "La detección previa de las necesidades o carencias de competencias en la organización",
incorrectas: [
"La oferta disponible en los catálogos de cursos gratuitos de las administraciones públicas",
"Las preferencias individuales de los trabajadores sobre temas ajenos a su actividad profesional"
]
},
{
enunciado: "En la evaluación del rendimiento, el 'error de halo' consiste en:",
correcta: "Calificar todas las dimensiones del trabajador basándose en una sola característica positiva",
incorrectas: [
"Otorgar una puntuación media a todos los empleados para evitar conflictos internos",
"Evaluar de forma más estricta a los empleados que han sido contratados recientemente"
]
},
{
enunciado: "Las políticas de Recursos Humanos denominadas 'de retención' buscan:",
correcta: "Fomentar el compromiso y evitar la fuga de talento hacia la competencia",
incorrectas: [
"Impedir legalmente que un trabajador pueda rescindir su contrato de forma voluntaria",
"Reducir los costes salariales mediante la congelación de los complementos de antigüedad"
]
},
{
enunciado: "La 'cultura fuerte' en una empresa se manifiesta cuando:",
correcta: "Los valores esenciales son compartidos de forma intensa y generalizada por los miembros",
incorrectas: [
"Existe un reglamento sancionador muy estricto que se aplica de forma automatizada",
"La dirección impone su criterio sin permitir ningún tipo de comunicación ascendente"
]
},
{
enunciado: "El análisis de puestos de trabajo es la base técnica para:",
correcta: "Los procesos de selección, valoración de puestos y diseño de planes de carrera",
incorrectas: [
"La determinación del precio de venta de los servicios sanitarios al público",
"La elección del mobiliario y la decoración de las zonas comunes de la empresa"
]
},
{
enunciado: "Un indicador clave de desempeño (KPI) para la función de personal es:",
correcta: "La tasa de rotación externa o el índice de absentismo laboral",
incorrectas: [
"El número total de folios utilizados en la oficina administrativa al mes",
"La temperatura media registrada en las salas de espera del centro sanitario"
]
},
{
enunciado: "La 'Gestión por Competencias' se enfoca en:",
correcta: "Las conductas y capacidades que los trabajadores ponen en juego para un desempeño excelente",
incorrectas: [
"El número de horas que el trabajador permanece físicamente en su puesto de trabajo",
"La acumulación de títulos académicos independientemente de su aplicación práctica"
]
},
{
enunciado: "En el plan de formación, la 'evaluación de la transferencia' mide:",
correcta: "En qué medida lo aprendido en el curso se aplica efectivamente en el puesto de trabajo",
incorrectas: [
"El grado de satisfacción de los alumnos con la calidad del material didáctico entregado",
"El coste económico total de la formación dividido por el número de asistentes"
]
},
{
enunciado: "La 'planificación sucesoria' como parte de la función de personal asegura:",
correcta: "La continuidad en los puestos clave ante jubilaciones o bajas imprevistas",
incorrectas: [
"Que los hijos de los actuales directivos hereden los cargos de responsabilidad",
"El reparto equitativo de las tareas más penosas entre toda la plantilla del centro"
]
},
{
enunciado: "Un método objetivo de evaluación del desempeño es el de 'incidentes críticos', que consiste en:",
correcta: "Registrar comportamientos del trabajador que han sido especialmente eficaces o ineficaces",
incorrectas: [
"Realizar un examen sorpresa sobre conocimientos teóricos cada seis meses",
"Comparar el rendimiento de un trabajador con la media del sector a nivel nacional"
]
},
{
enunciado: "La 'socialización organizacional' es el proceso por el cual:",
correcta: "El nuevo empleado adquiere la cultura, valores y conocimientos necesarios para integrarse",
incorrectas: [
"Los trabajadores organizan eventos lúdicos fuera del entorno estrictamente profesional",
"La empresa difunde su imagen de marca en las redes sociales para captar clientes"
]
},
{
enunciado: "El 'clima organizacional' se diferencia de la 'cultura' en que el clima es:",
correcta: "Una percepción coyuntural y descriptiva del ambiente de trabajo en un momento dado",
incorrectas: [
"Un conjunto de normas escritas y protocolos de obligado cumplimiento",
"La historia y tradiciones que han configurado la identidad de la empresa desde su origen"
]
},
{
enunciado: "¿Qué papel juega el 'mentoring' dentro de un plan de desarrollo de personal?",
correcta: "La guía y consejo de un profesional experto para el desarrollo de la carrera de otro con menos experiencia",
incorrectas: [
"La vigilancia estricta de las tareas técnicas para evitar errores en el laboratorio",
"La sustitución temporal de un mando intermedio durante su periodo vacacional"
]
},
{
enunciado: "El 'inventario de recursos humanos' sirve para:",
correcta: "Conocer las capacidades, habilidades y potencial de la plantilla actual",
incorrectas: [
"Contabilizar el material de oficina y los reactivos disponibles en el almacén",
"Listar las deudas pendientes de la empresa con los proveedores de servicios"
]
},
{
enunciado: "En la evaluación del desempeño, el 'sesgo de recencia' implica:",
correcta: "Valorar al empleado solo por sus actuaciones más próximas al momento de la evaluación",
incorrectas: [
"Dar prioridad en la promoción a los trabajadores con menos antigüedad en la empresa",
"Evaluar positivamente a quienes comparten los mismos intereses que el evaluador"
]
},
{
enunciado: "La 'valoración de puestos de trabajo' tiene como fin principal:",
correcta: "Determinar el valor relativo de cada puesto para establecer una estructura salarial justa",
incorrectas: [
"Decidir qué personas deben ocupar cada vacante en función de su simpatía",
"Analizar la eficiencia energética de cada ubicación física dentro del edificio"
]
},
{
enunciado: "Un plan de formación 'proactivo' es aquel que:",
correcta: "Se anticipa a los cambios tecnológicos y organizativos futuros",
incorrectas: [
"Se organiza únicamente cuando se detecta un fallo grave en la producción",
"Obliga a los trabajadores a formarse en su tiempo libre sin compensación"
]
},
{
enunciado: "El 'outsourcing' de la función de personal consiste en:",
correcta: "Externalizar ciertos procesos como la nómina o el reclutamiento a empresas especializadas",
incorrectas: [
"Contratar a trabajadores extranjeros para cubrir puestos técnicos de baja cualificación",
"Permitir que los empleados realicen su trabajo desde su domicilio particular"
]
},
{
enunciado: "En el análisis de puestos, el 'esfuerzo mental' evalúa:",
correcta: "El grado de atención, concentración y complejidad intelectual requerida por la tarea",
incorrectas: [
"La resistencia psicológica del trabajador ante las críticas de los superiores",
"La cantidad de horas que el empleado dedica al estudio de la normativa interna"
]
},
{
enunciado: "La 'entrevista de evaluación' debe ser un proceso:",
correcta: "Bidireccional, donde se analicen logros y se acuerden objetivos de mejora",
incorrectas: [
"Unidireccional, para que el jefe comunique las sanciones por los errores cometidos",
"Secreta, para que el resto de la organización no conozca el rendimiento del evaluado"
]
},
{
enunciado: "La cultura empresarial se transmite 'formalmente' a través de:",
correcta: "Manuales de bienvenida, planes estratégicos y comunicados oficiales",
incorrectas: [
"Conversaciones informales en la zona de descanso y rumores de pasillo",
"La observación del comportamiento de los compañeros veteranos durante la jornada"
]
},
{
enunciado: "La planificación de plantillas debe tener en cuenta la 'tasa de jubilación' para:",
correcta: "Prever la tasa de reposición necesaria y asegurar la transferencia de conocimiento",
incorrectas: [
"Calcular el ahorro de costes salariales al sustituir a veteranos por noveles",
"Impedir que los trabajadores de mayor edad sigan desempeñando funciones técnicas"
]
},
{
enunciado: "Un sistema de evaluación 'por objetivos' vincula el éxito a:",
correcta: "La consecución de resultados cuantificables previamente acordados",
incorrectas: [
"La demostración de una actitud positiva y colaboradora independientemente del resultado",
"El cumplimiento estricto de los procesos aunque no se alcancen las metas previstas"
]
},
{
enunciado: "La 'formación transversal' en un plan de formación incluye temas como:",
correcta: "Prevención de riesgos, igualdad, idiomas o habilidades de comunicación",
incorrectas: [
"El manejo específico de un modelo concreto de analizador de laboratorio",
"El conocimiento pormenorizado del manual de instrucciones de una centrífuga"
]
},
{
enunciado: "La 'auditoría de recursos humanos' permite:",
correcta: "Verificar si las políticas de personal se cumplen y son eficaces para la organización",
incorrectas: [
"Controlar el gasto en material sanitario de cada uno de los departamentos",
"Analizar la salud física de los trabajadores mediante reconocimientos médicos"
]
},
{
enunciado: "El concepto de 'employer branding' se refiere a:",
correcta: "La imagen de la empresa como un buen lugar para trabajar para atraer talento",
incorrectas: [
"El diseño del logotipo y la marca comercial de los productos de la empresa",
"La uniformidad de los empleados con los colores corporativos de la entidad"
]
},
{
enunciado: "En el análisis de necesidades de formación, el 'gap de competencias' es:",
correcta: "La diferencia entre las competencias que tiene el empleado y las que requiere el puesto",
incorrectas: [
"El tiempo que transcurre entre la solicitud de un curso y su realización efectiva",
"El espacio físico necesario para realizar las sesiones prácticas de formación"
]
},
{
enunciado: "La evaluación de 'potencial' se diferencia de la de 'desempeño' en que:",
correcta: "La de potencial mira hacia capacidades futuras; la de desempeño hacia resultados pasados",
incorrectas: [
"La de potencial es obligatoria por ley y la de desempeño es puramente voluntaria",
"La de potencial la realiza personal externo y la de desempeño el superior directo"
]
},
{
enunciado: "La 'flexibilidad interna' en la planificación de personal implica:",
correcta: "La capacidad de reasignar trabajadores a distintas tareas según las necesidades",
incorrectas: [
"La contratación de personal temporal para cubrir picos de demanda asistencial",
"La reducción de la jornada laboral de toda la plantilla de forma unilateral"
]
},
{
enunciado: "Un plan de formación eficaz debe evaluar el 'ROI' (Retorno de la Inversión) para:",
correcta: "Comprobar si el beneficio económico o de eficiencia justifica el gasto realizado",
incorrectas: [
"Asegurar que todos los trabajadores hayan recibido el mismo número de horas lectivas",
"Garantizar que los formadores externos cobren sus honorarios en el plazo previsto"
]
},
{
enunciado: "La 'descripción de tareas' en la DPT debe ser redactada utilizando:",
correcta: "Verbos de acción, de forma clara, concisa y objetiva",
incorrectas: [
"Adjetivos calificativos que describan la personalidad ideal del ocupante",
"Un lenguaje ambiguo que permita al jefe asignar cualquier función imprevista"
]
},
{
enunciado: "La 'coherencia externa' de la política salarial significa que:",
correcta: "Los salarios son competitivos en relación con el mercado laboral del sector",
incorrectas: [
"Todos los empleados de la misma categoría cobran exactamente el mismo sueldo",
"La empresa paga el salario mínimo interprofesional independientemente del puesto"
]
},
{
enunciado: "El sistema social de la empresa se mantiene estable gracias a:",
correcta: "La existencia de normas de conducta, valores compartidos y sistemas de comunicación",
incorrectas: [
"La imposición de un liderazgo autoritario que impide el conflicto interno",
"La renovación total de la plantilla cada cinco años para evitar vicios adquiridos"
]
}
];