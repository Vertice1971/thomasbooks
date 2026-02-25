'use strict';

var PREGUNTAS = [
{
enunciado: "Según la Ley General de la Seguridad Social, el accidente de trabajo es:",
correcta: "Toda lesión corporal que el trabajador sufra con ocasión o por consecuencia del trabajo ejecutado por cuenta ajena",
incorrectas: [
"Cualquier patología crónica preexistente que se manifieste durante el periodo de vacaciones anuales",
"Una indisposición física leve derivada exclusivamente de la vida privada del técnico fuera del centro"
]
},
{
enunciado: "El accidente 'in itinere' es aquel que ocurre:",
correcta: "Al ir o al volver del lugar de trabajo por el trayecto habitual y sin interrupciones",
incorrectas: [
"Dentro de las instalaciones del laboratorio durante el tiempo destinado al descanso para el café",
"En el domicilio del técnico mientras realiza tareas domésticas antes de entrar en su turno laboral"
]
},
{
enunciado: "La teoría de la causalidad natural sostiene que un accidente:",
correcta: "No es fruto del azar, sino que existen causas naturales que lo provocan y pueden ser analizadas",
incorrectas: [
"Se debe a factores metafísicos o de mala suerte imposibles de prever mediante la técnica",
"Depende únicamente de la predisposición genética del trabajador a sufrir lesiones óseas"
]
},
{
enunciado: "Los costes directos de la siniestralidad laboral incluyen:",
correcta: "Las indemnizaciones, las primas de seguros y los gastos de asistencia sanitaria",
incorrectas: [
"La pérdida de prestigio comercial de la empresa ante sus competidores internacionales",
"El descenso de la motivación del resto de técnicos que presenciaron el suceso"
]
},
{
enunciado: "En la investigación de accidentes, el 'modelo de causalidad de Bird' visualiza el accidente como:",
correcta: "Una cadena de sucesos representada por fichas de dominó que caen una tras otra",
incorrectas: [
"Un proceso circular donde el resultado final vuelve a ser la causa inicial de forma perpetua",
"Una pirámide invertida donde la base representa el fallecimiento del trabajador técnico"
]
},
{
enunciado: "Se presume que son constitutivas de accidente de trabajo las lesiones ocurridas:",
correcta: "Durante el tiempo y en el lugar de trabajo, salvo prueba en contrario",
incorrectas: [
"En el centro de salud mientras el técnico acude como paciente particular por una gripe",
"Durante la participación en huelgas legales convocadas por los sindicatos del sector"
]
},
{
enunciado: "Los costes indirectos (u ocultos) de un accidente suelen ser:",
correcta: "Superiores a los costes directos, incluyendo el tiempo perdido y daños a la maquinaria",
incorrectas: [
"Inexistentes para el laboratorio si este tiene contratada una mutua de accidentes de trabajo",
"Pagados íntegramente por el sistema público de salud sin repercutir en la empresa"
]
},
{
enunciado: "El factor humano en la causalidad de los accidentes se refiere a:",
correcta: "Actos inseguros cometidos por el trabajador, como imprudencias o incumplimiento de normas",
incorrectas: [
"La falta de mantenimiento preventivo de las centrífugas y equipos de diagnóstico automático",
"Las condiciones ambientales de iluminación y ruido presentes en la zona de análisis clínico"
]
},
{
enunciado: "El factor técnico (o condición insegura) implica:",
correcta: "Deficiencias en las instalaciones, herramientas o equipos de protección del laboratorio",
incorrectas: [
"La distracción del técnico superior por el uso del teléfono móvil personal durante la jornada",
"El estado de fatiga emocional derivado de la excesiva presión asistencial en el centro"
]
},
{
enunciado: "La imprudencia profesional del trabajador:",
correcta: "No impide la calificación como accidente de trabajo si se deriva del ejercicio habitual de la tarea",
incorrectas: [
"Anula cualquier derecho a prestación económica por parte de la Seguridad Social",
"Es considerada siempre como falta muy grave que conlleva el despido procedente inmediato"
]
},
{
enunciado: "La 'imprudencia temeraria' se diferencia de la profesional en que:",
correcta: "El trabajador actúa con desprecio manifiesto del riesgo, rompiendo la causalidad laboral",
incorrectas: [
"Es una categoría técnica que solo se aplica si el accidente ocurre fuera del horario de trabajo",
"Requiere que el técnico superior haya avisado por escrito de su intención de lesionarse"
]
},
{
enunciado: "El coste salarial de un accidente para la empresa incluye:",
correcta: "El tiempo del trabajador accidentado y el de sus compañeros que dejan de trabajar para auxiliarle",
incorrectas: [
"La deducción del IRPF que el Estado deja de percibir durante el periodo de baja médica",
"El pago de las cuotas de la Seguridad Social de los técnicos que están de vacaciones"
]
},
{
enunciado: "Los accidentes ocurridos en el desempeño de cargos electivos de carácter sindical son:",
correcta: "Considerados accidentes de trabajo por la legislación española",
incorrectas: [
"Considerados contingencias comunes al no estar realizando la tarea técnica del laboratorio",
"Excluidos de cualquier cobertura si el sindicato no tiene representación en el comité"
]
},
{
enunciado: "El origen de los accidentes según la teoría multicausal se debe a:",
correcta: "La concurrencia simultánea de diversos factores (técnicos, organizativos y humanos)",
incorrectas: [
"Una única causa principal que siempre es el fallo del instrumental de laboratorio",
"La decisión consciente de la dirección de la empresa de ahorrar en equipos de protección"
]
},
{
enunciado: "Se entiende por 'blanco' o 'incidente':",
correcta: "Un suceso que no ha producido lesiones pero que en condiciones diferentes habría sido accidente",
incorrectas: [
"Un diagnóstico clínico erróneo que obliga a repetir la toma de muestras del paciente",
"La mancha blanca que aparece en los reactivos cuando estos se encuentran caducados"
]
},
{
enunciado: "El índice de frecuencia mide:",
correcta: "El número de accidentes ocurridos por cada millón de horas trabajadas",
incorrectas: [
"La cantidad de reactivos químicos consumidos en relación al número de análisis realizados",
"El porcentaje de técnicos que tienen una titulación de grado superior en la plantilla"
]
},
{
enunciado: "El índice de gravedad representa:",
correcta: "El número de jornadas perdidas por cada mil horas de exposición al riesgo",
incorrectas: [
"La profundidad de la lesión cutánea sufrida por el técnico superior de laboratorio",
"El coste económico total en euros de las reparaciones de la maquinaria averiada"
]
},
{
enunciado: "El modelo de Heinrich establece que por cada accidente grave ocurren:",
correcta: "29 accidentes leves y 300 incidentes sin lesión",
incorrectas: [
"5 fallecimientos y 10 incapacidades permanentes en el sector sanitario",
"100 despidos procedentes por negligencia técnica del personal sanitario"
]
},
{
enunciado: "Un accidente de trabajo ocurrido en misión es aquel que sucede:",
correcta: "Durante el cumplimiento de servicios encomendados por el empresario fuera del centro",
incorrectas: [
"En el trayecto desde el domicilio del técnico hasta el laboratorio habitual de trabajo",
"Cuando el trabajador se encuentra realizando un curso de formación por iniciativa propia"
]
},
{
enunciado: "Los daños psicológicos derivados de un accidente laboral:",
correcta: "Están incluidos en el concepto de lesión corporal y son indemnizables",
incorrectas: [
"Quedan excluidos de la cobertura de la mutua al no ser lesiones físicas visibles",
"Solo se consideran si el técnico ha trabajado más de veinte años en el laboratorio"
]
},
{
enunciado: "La causa 'mediata' o básica de un accidente se refiere a:",
correcta: "Factores profundos como fallos en el diseño, formación insuficiente o falta de mantenimiento",
incorrectas: [
"La caída inmediata del objeto sobre el pie del técnico superior de laboratorio",
"La firma del contrato de trabajo entre el profesional y el centro de diagnóstico"
]
},
{
enunciado: "El coste para la sociedad de la siniestralidad laboral incluye:",
correcta: "La pérdida de potencial humano y los gastos de prestaciones de la Seguridad Social",
incorrectas: [
"El aumento del precio de los servicios de laboratorio en el mercado privado",
"La reducción del número de estudiantes matriculados en grados superiores sanitarios"
]
},
{
enunciado: "El dolo en un accidente de trabajo ocurre cuando:",
correcta: "El trabajador provoca voluntaria y maliciosamente el accidente para obtener un beneficio",
incorrectas: [
"El técnico comete un error por falta de atención debido al cansancio acumulado",
"Se produce una rotura accidental de un tubo de ensayo por un movimiento brusco"
]
},
{
enunciado: "El principio de 'seguridad integrada' busca que la prevención esté:",
correcta: "Presente desde la fase de diseño de las máquinas, locales y métodos de trabajo",
incorrectas: [
"Limitada a la colocación de carteles de advertencia en las puertas del laboratorio",
"Centrada exclusivamente en la contratación de personal con seguro de vida privado"
]
},
{
enunciado: "Las enfermedades que el trabajador contraiga con motivo de la realización de su trabajo son:",
correcta: "Consideradas accidente de trabajo si no están incluidas en el cuadro de enfermedades profesionales",
incorrectas: [
"Excluidas de la protección laboral y tratadas como enfermedad común por el médico de familia",
"Sancionadas por la empresa al considerarse una falta de higiene del técnico superior"
]
},
{
enunciado: "La investigación de accidentes debe realizarse para:",
correcta: "Identificar las causas reales y evitar que el suceso vuelva a repetirse",
incorrectas: [
"Buscar un culpable para proceder a su despido disciplinario de forma inmediata",
"Justificar ante la prensa que el laboratorio cumple con todos los estándares técnicos"
]
},
{
enunciado: "El árbol de causas es una técnica que permite:",
correcta: "Relacionar cronológica y lógicamente los hechos que dieron lugar al accidente",
incorrectas: [
"Clasificar las muestras biológicas según su nivel de peligrosidad para el técnico",
"Organizar la jerarquía de mando dentro del departamento de seguridad y salud"
]
},
{
enunciado: "El coste de oportunidad por la pérdida de producción se considera un coste:",
correcta: "Indirecto o interno",
incorrectas: [
"Fijo y deducible de la base imponible del IVA",
"Directo y cubierto por la póliza de la mutua"
]
},
{
enunciado: "Un accidente provocado por fuerza mayor extraña al trabajo es aquel causado por:",
correcta: "Fenómenos de la naturaleza de carácter insólito (terremotos, inundaciones)",
incorrectas: [
"La caída de un rayo en un pararrayos correctamente instalado en el laboratorio",
"La falta de pericia de un técnico superior al manejar una centrífuga de alta velocidad"
]
},
{
enunciado: "La agudeza visual o auditiva del trabajador es un factor de causalidad de tipo:",
correcta: "Individual o humano",
incorrectas: [
"Organizativo o de gestión del centro",
"Tecnológico o de mantenimiento mecánico"
]
},
{
enunciado: "El registro de accidentes de trabajo es obligatorio para:",
correcta: "Todas las empresas, debiendo notificar los accidentes con baja a la autoridad laboral",
incorrectas: [
"Solo los laboratorios públicos que dependen del ministerio de sanidad",
"Aquellos centros que tengan una siniestralidad superior a la media del sector"
]
},
{
enunciado: "El modelo de Reason (queso suizo) explica los accidentes como:",
correcta: "Fallas alineadas en las diferentes barreras de defensa de la organización",
incorrectas: [
"La acumulación de gases tóxicos en los conductos de ventilación del laboratorio",
"El consumo excesivo de lácteos por parte de los técnicos superiores de guardia"
]
},
{
enunciado: "La reincorporación del trabajador tras un accidente puede requerir:",
correcta: "Una adaptación del puesto de trabajo o una vigilancia de la salud específica",
incorrectas: [
"La realización obligatoria de un examen de reválida de su título técnico",
"La reducción automática del 50% de su salario bruto de forma permanente"
]
},
{
enunciado: "El coste de la prima de accidentes de trabajo depende de:",
correcta: "La peligrosidad de la actividad y la siniestralidad real de la empresa",
incorrectas: [
"El número de metros cuadrados que tenga el laboratorio clínico de diagnóstico",
"La cantidad de técnicos superiores que sean familiares directos del director"
]
},
{
enunciado: "La rotura de una probeta que no causa cortes al técnico es:",
correcta: "Un incidente de trabajo",
incorrectas: [
"Una enfermedad profesional latente",
"Un accidente de trabajo in itinere"
]
},
{
enunciado: "Se considera causa inmediata de un accidente:",
correcta: "La acción o condición insegura que se presenta justo antes del suceso",
incorrectas: [
"La falta de una política clara de prevención por parte de la alta dirección",
"La crisis económica que impide la compra de nuevos equipos de diagnóstico"
]
},
{
enunciado: "El fallecimiento de un técnico por infarto en su puesto de trabajo es:",
correcta: "Presuntamente accidente de trabajo si ocurre en jornada laboral",
incorrectas: [
"Siempre una contingencia común ajena por completo al ámbito laboral",
"Sancionable por la empresa si el trabajador no informó de sus problemas cardíacos"
]
},
{
enunciado: "El análisis de la siniestralidad permite a la empresa:",
correcta: "Comparar su situación con otras empresas del mismo sector técnico",
incorrectas: [
"Evitar el pago de las nóminas a los técnicos que están de baja por accidente",
"Sustituir a los delegados de prevención por programas de inteligencia artificial"
]
},
{
enunciado: "La fatiga como causa de accidente se clasifica dentro de los factores:",
correcta: "Psicofisiológicos del individuo",
incorrectas: [
"Mecánicos de las herramientas de mano",
"Climatológicos externos al laboratorio"
]
},
{
enunciado: "Un sistema de gestión de la seguridad eficaz reduce:",
correcta: "Tanto los costes humanos como los económicos derivados de los accidentes",
incorrectas: [
"La calidad de los análisis clínicos para priorizar la rapidez de ejecución",
"La autonomía técnica de los profesionales superiores de laboratorio"
]
}
];