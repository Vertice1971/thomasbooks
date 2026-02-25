'use strict';
var PREGUNTAS = [
{
enunciado: "¿Cuál es la diferencia fundamental entre una medida de prevención y una de protección?",
correcta: "La prevención actúa sobre la probabilidad de que ocurra el daño y la protección sobre las consecuencias.",
incorrectas: [
"La prevención es de carácter colectivo mientras que la protección es exclusivamente individual.",
"La prevención se aplica antes de que el riesgo exista y la protección cuando el riesgo ya ha causado un daño."
]
},
{
enunciado: "Según la Ley 31/1995, ¿cuál es el primer principio de la acción preventiva?",
correcta: "Evitar los riesgos.",
incorrectas: [
"Evaluar los riesgos que no se puedan evitar.",
"Sustituir lo peligroso por lo que entrañe poco o ningún peligro."
]
},
{
enunciado: "¿Qué caracteriza a las medidas de protección colectiva frente a los equipos de protección individual (EPI)?",
correcta: "Protegen simultáneamente a varios trabajadores y su eficacia no depende de la voluntad del usuario.",
incorrectas: [
"Son siempre más costosas y requieren un mantenimiento preventivo más exhaustivo.",
"Se aplican únicamente en sectores industriales con riesgos químicos o biológicos elevados."
]
},
{
enunciado: "¿Cuál de los siguientes es un ejemplo de medida de protección colectiva?",
correcta: "Un sistema de ventilación general o extracción localizada.",
incorrectas: [
"Una máscara de protección respiratoria con filtro FFP3.",
"La realización de reconocimientos médicos específicos de vigilancia de la salud."
]
},
{
enunciado: "En la jerarquía de la acción preventiva, ¿cuándo se deben utilizar los EPI?",
correcta: "Como último recurso, cuando los riesgos no se han podido evitar o limitar por medios técnicos de protección colectiva.",
incorrectas: [
"De forma prioritaria si el coste de la protección colectiva es excesivo para la empresa.",
"Simultáneamente con las medidas de prevención para garantizar la máxima seguridad posible."
]
},
{
enunciado: "¿Qué es técnicamente un mapa de riesgos?",
correcta: "Una representación gráfica de los riesgos existentes en un área de trabajo para facilitar su identificación y control.",
incorrectas: [
"Un listado exhaustivo de los accidentes laborales ocurridos en la empresa durante el último año.",
"El documento legal que sustituye a la evaluación de riesgos en empresas de menos de diez trabajadores."
]
},
{
enunciado: "¿Cuál es el objetivo principal de la fase de análisis en la elaboración de un mapa de riesgos?",
correcta: "Identificar los peligros y valorar la magnitud de los riesgos presentes en cada puesto de trabajo.",
incorrectas: [
"Sancionar a los trabajadores que no cumplen con las normas de seguridad establecidas.",
"Calcular el presupuesto necesario para la compra de material de primeros auxilios."
]
},
{
enunciado: "¿Qué tipo de medida es el diseño ergonómico de un puesto de trabajo?",
correcta: "Una medida de prevención que actúa sobre la fuente del riesgo.",
incorrectas: [
"Una medida de protección individual que minimiza la fatiga del operario.",
"Una medida de protección colectiva de tipo organizativo."
]
},
{
enunciado: "Dentro de la clasificación de las medidas de prevención, las que actúan sobre el medio de transmisión se denominan:",
correcta: "Medidas de prevención técnicas.",
incorrectas: [
"Medidas de prevención facultativas.",
"Medidas de protección de carácter pasivo."
]
},
{
enunciado: "¿Qué información debe contener necesariamente un mapa de riesgos para ser eficaz?",
correcta: "Localización del riesgo, número de trabajadores expuestos y gravedad potencial.",
incorrectas: [
"Nombre de los trabajadores accidentados y cuantía de las indemnizaciones pagadas.",
"Identificación del servicio de prevención ajeno y fecha de la próxima auditoría."
]
},
{
enunciado: "Las medidas de prevención organizativas actúan principalmente sobre:",
correcta: "La exposición, modificando factores como el tiempo de permanencia o la rotación de tareas.",
incorrectas: [
"El foco del contaminante, instalando sistemas de cerramiento.",
"El trabajador, proporcionándole ropa de trabajo ignífuga."
]
},
{
enunciado: "¿Cuál es una ventaja fundamental de la protección colectiva sobre la individual?",
correcta: "No requiere una actitud activa o aprendizaje complejo por parte del trabajador para ser efectiva.",
incorrectas: [
"Es más fácil de seleccionar ya que no requiere certificación de conformidad CE.",
"Elimina totalmente la necesidad de realizar la evaluación de riesgos laborales."
]
},
{
enunciado: "En un mapa de riesgos, ¿cómo se suelen representar los riesgos con alta probabilidad y gravedad?",
correcta: "Mediante códigos de colores cálidos, habitualmente el rojo.",
incorrectas: [
"Con círculos concéntricos de color verde para indicar urgencia técnica.",
"A través de siglas alfanuméricas que remiten al manual de calidad de la empresa."
]
},
{
enunciado: "La señalización de seguridad se considera una medida de:",
correcta: "Protección de carácter complementario que no sustituye a las medidas técnicas u organizativas.",
incorrectas: [
"Prevención primaria que elimina el riesgo en el origen.",
"Protección individual obligatoria en todos los centros de trabajo sanitarios."
]
},
{
enunciado: "¿Qué concepto define la probabilidad de que un trabajador sufra un determinado daño derivado del trabajo?",
correcta: "Riesgo laboral.",
incorrectas: [
"Peligro inminente.",
"Incidente de trabajo."
]
},
{
enunciado: "Las medidas de protección activa son aquellas que:",
correcta: "Requieren la intervención directa del trabajador para cumplir su función, como un interruptor de emergencia.",
incorrectas: [
"Funcionan de forma automática sin que nadie las accione, como una barandilla.",
"Están diseñadas exclusivamente para la protección frente a incendios."
]
},
{
enunciado: "¿Qué fase sigue a la identificación de riesgos en la elaboración de un mapa de riesgos?",
correcta: "La evaluación o valoración de los riesgos para priorizar las actuaciones.",
incorrectas: [
"La compra inmediata de los equipos de protección individual necesarios.",
"La notificación obligatoria al Instituto Nacional de Seguridad y Salud en el Trabajo."
]
},
{
enunciado: "¿Cuál es el fin último de la política preventiva en la empresa?",
correcta: "La mejora progresiva de los niveles de protección existentes.",
incorrectas: [
"El cumplimiento formal de la normativa para evitar sanciones administrativas.",
"La reducción de las primas de seguro de accidentes de trabajo."
]
},
{
enunciado: "Un resguardo en una máquina es una medida de:",
correcta: "Protección colectiva.",
incorrectas: [
"Prevención en el origen.",
"Protección individual técnica."
]
},
{
enunciado: "¿Qué se entiende por 'prevención integrada'?",
correcta: "La inclusión de la prevención en todas las actividades y niveles jerárquicos de la empresa.",
incorrectas: [
"La contratación de un servicio de prevención que asuma todas las responsabilidades del empresario.",
"La unificación de la prevención de riesgos con la gestión medioambiental y de calidad."
]
},
{
enunciado: "¿Qué técnica de prevención se ocupa de la adaptación del trabajo al hombre?",
correcta: "Ergonomía.",
incorrectas: [
"Psicosociología aplicada.",
"Seguridad en el trabajo."
]
},
{
enunciado: "Las medidas que pretenden evitar la aparición de enfermedades profesionales se encuadran en:",
correcta: "Higiene Industrial.",
incorrectas: [
"Vigilancia de la salud.",
"Seguridad del trabajo."
]
},
{
enunciado: "¿Cuál es un requisito para que una medida de protección sea considerada eficaz?",
correcta: "Que no introduzca por sí misma nuevos riesgos de importancia.",
incorrectas: [
"Que sea la opción más económica disponible en el mercado nacional.",
"Que haya sido aprobada mediante votación por el comité de empresa."
]
},
{
enunciado: "El mapa de riesgos permite, fundamentalmente:",
correcta: "Visualizar de forma rápida las zonas críticas donde intervenir prioritariamente.",
incorrectas: [
"Sustituir la formación teórica de los trabajadores por información visual.",
"Documentar los procesos de fabricación para la obtención de patentes."
]
},
{
enunciado: "¿Cómo se denomina la medida de prevención que consiste en alejar al trabajador del foco de peligro?",
correcta: "Medida organizativa sobre la exposición.",
incorrectas: [
"Protección colectiva intrínseca.",
"Prevención pasiva estructural."
]
},
{
enunciado: "La revisión periódica de las medidas de prevención es obligatoria cuando:",
correcta: "Se produzcan daños en la salud o se introduzcan cambios en las condiciones de trabajo.",
incorrectas: [
"Lo solicite un trabajador de forma individual sin necesidad de justificación.",
"La empresa cambie de mutua colaboradora con la Seguridad Social."
]
},
{
enunciado: "¿Cuál es el principal inconveniente de los mapas de riesgos estáticos?",
correcta: "Que pierden validez rápidamente si los procesos productivos son muy dinámicos.",
incorrectas: [
"Que requieren un software de diseño gráfico extremadamente complejo para su lectura.",
"Que no pueden ser consultados por los delegados de prevención."
]
},
{
enunciado: "La formación de los trabajadores en materia de prevención es una medida de:",
correcta: "Prevención que actúa sobre el factor humano.",
incorrectas: [
"Protección individual de carácter cognitivo.",
"Prevención técnica de baja intensidad."
]
},
{
enunciado: "¿A quién corresponde la obligación de proporcionar los equipos de protección individual?",
correcta: "Al empresario, de forma gratuita para el trabajador.",
incorrectas: [
"Al trabajador, aunque el empresario debe subvencionar el 50% de su coste.",
"Al servicio de prevención ajeno, como parte de su contrato de asesoramiento."
]
},
{
enunciado: "¿Qué tipo de medida es la automatización de un proceso peligroso?",
correcta: "Medida de prevención técnica en el foco.",
incorrectas: [
"Medida de protección colectiva estructural.",
"Medida de prevención administrativa."
]
},
{
enunciado: "En el contexto de un mapa de riesgos, ¿qué representa la vulnerabilidad?",
correcta: "La susceptibilidad de los trabajadores o del sistema a sufrir daños ante un peligro.",
incorrectas: [
"El número total de sanciones impuestas por la Inspección de Trabajo.",
"La probabilidad matemática de que ocurra un fallo en una máquina."
]
},
{
enunciado: "¿Cuál de estas opciones no es una clase de medida de prevención?",
correcta: "Medida de indemnización económica.",
incorrectas: [
"Medida de protección colectiva.",
"Medida de información y formación."
]
},
{
enunciado: "Las medidas de prevención que actúan sobre el individuo se seleccionan cuando:",
correcta: "Las medidas sobre el foco y el medio no son suficientes para garantizar la seguridad.",
incorrectas: [
"El trabajador prefiere usar su propio equipo de seguridad.",
"La normativa sectorial prohíbe el uso de ventilación forzada."
]
},
{
enunciado: "¿Qué criterio debe prevalecer al elegir entre dos medidas de protección similares?",
correcta: "La que ofrezca mayor nivel de protección y menor molestia al trabajador.",
incorrectas: [
"La que tenga un diseño más estético y moderno.",
"La que haya sido fabricada en el territorio de la Unión Europea."
]
},
{
enunciado: "La 'Seguridad en el Trabajo' se centra primordialmente en evitar:",
correcta: "Accidentes de trabajo.",
incorrectas: [
"Enfermedades profesionales.",
"Trastornos musculoesqueléticos crónicos."
]
},
{
enunciado: "La elaboración del mapa de riesgos debe contar con la participación de:",
correcta: "Los trabajadores y sus representantes.",
incorrectas: [
"Únicamente el personal directivo de la empresa.",
"Exclusivamente técnicos externos acreditados."
]
},
{
enunciado: "Un sistema de enclavamiento en una puerta de acceso a una zona de radiación es una medida de:",
correcta: "Protección colectiva activa.",
incorrectas: [
"Protección individual facultativa.",
"Prevención de riesgos administrativos."
]
},
{
enunciado: "¿Cuál es la función de los 'distractores' en la identificación de riesgos?",
correcta: "Son factores que pueden desviar la atención del trabajador aumentando la probabilidad de error.",
incorrectas: [
"Son elementos decorativos que mejoran el clima laboral.",
"Son dispositivos de seguridad que fallan de forma controlada."
]
},
{
enunciado: "Las medidas de prevención 'in situ' son aquellas que:",
correcta: "Se aplican directamente en el lugar donde se genera el riesgo.",
incorrectas: [
"Solo se pueden aplicar en laboratorios de alta seguridad.",
"Requieren la paralización total de la actividad productiva."
]
},
{
enunciado: "¿Qué norma española transpone la Directiva Marco 89/391/CEE?",
correcta: "La Ley 31/1995 de Prevención de Riesgos Laborales.",
incorrectas: [
"La Ley 14/1986 General de Sanidad.",
"El Real Decreto 486/1997 de lugares de trabajo."
]
}
];