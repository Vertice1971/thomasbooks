'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué concepto define el grado de bienestar y satisfacción que un trabajador experimenta en su entorno laboral?",
correcta: "Calidad de vida laboral.",
incorrectas: [
"Rendimiento marginal operativo.",
"Índice de presencialidad efectiva."
]
},
{
enunciado: "Según el modelo de Herzberg, ¿cuál de los siguientes se considera un factor motivador?",
correcta: "El reconocimiento y la responsabilidad en las tareas.",
incorrectas: [
"El salario y las condiciones físicas del entorno.",
"La relación jerárquica con los mandos intermedios."
]
},
{
enunciado: "¿Qué factor determina principalmente la satisfacción laboral desde una perspectiva psicosocial?",
correcta: "La posibilidad de desarrollo personal y la autonomía en el trabajo.",
incorrectas: [
"La ubicación geográfica exacta del centro sanitario.",
"El número de días festivos anuales por encima del convenio."
]
},
{
enunciado: "En relación con el medio ambiente laboral, ¿qué es la 'confortabilidad térmica'?",
correcta: "El estado mental que expresa satisfacción con el ambiente térmico existente.",
incorrectas: [
"La temperatura mínima para evitar la congelación de reactivos.",
"El calor emitido por la maquinaria de esterilización en quirófano."
]
},
{
enunciado: "¿Qué norma española transpone la directiva sobre la evaluación y gestión del ruido ambiental?",
correcta: "La Ley 37/2003 del Ruido.",
incorrectas: [
"La Ley 31/1995 de Prevención de Riesgos Laborales.",
"El Real Decreto 486/1997 de lugares de trabajo."
]
},
{
enunciado: "La gestión ambiental en las empresas según la norma ISO 14001 se basa en el ciclo:",
correcta: "PDCA (Planificar, Hacer, Verificar y Actuar).",
incorrectas: [
"LIFO (Last In, First Out) aplicado a residuos.",
"PERT (Program Evaluation and Review Technique)."
]
},
{
enunciado: "¿Qué se entiende por 'externalidades negativas' en el contexto de medio ambiente y trabajo?",
correcta: "Efectos perjudiciales de la actividad productiva sobre el entorno no asumidos por la empresa.",
incorrectas: [
"Los costes de formación del personal recién contratado.",
"Las bajas laborales derivadas de enfermedades comunes."
]
},
{
enunciado: "¿Cuál es el objetivo principal de una auditoría ambiental en un centro sanitario?",
correcta: "Evaluar el cumplimiento de la normativa ambiental y la eficacia del sistema de gestión.",
incorrectas: [
"Contabilizar el número de pacientes atendidos en el área de urgencias.",
"Verificar que el personal lleva el uniforme correctamente planchado."
]
},
{
enunciado: "El enriquecimiento de tareas (job enrichment) busca aumentar la satisfacción laboral mediante:",
correcta: "La integración de tareas de mayor complejidad y responsabilidad.",
incorrectas: [
"La suma de más tareas mecánicas del mismo nivel jerárquico.",
"La reducción drástica de la jornada laboral manteniendo el sueldo."
]
},
{
enunciado: "¿Qué es la huella de carbono de una organización?",
correcta: "La totalidad de gases de efecto invernadero emitidos por efecto directo o indirecto.",
incorrectas: [
"El rastro físico de partículas de hollín en las chimeneas.",
"La cantidad de papel reciclado utilizado en la gestión administrativa."
]
},
{
enunciado: "Dentro de los factores ambientales, el síndrome del edificio enfermo (SEE) se caracteriza por:",
correcta: "Un conjunto de síntomas que afectan a más del 20% de los ocupantes sin una causa específica clara.",
incorrectas: [
"La presencia de grietas estructurales en los cimientos del hospital.",
"El fallo generalizado de los sistemas de radiodiagnóstico."
]
},
{
enunciado: "¿Qué técnica permite medir el grado de satisfacción de los trabajadores de forma sistemática?",
correcta: "Encuesta de clima organizacional.",
incorrectas: [
"Análisis de sangre para medir niveles de cortisol en ayunas.",
"Control biométrico de entradas y salidas del centro."
]
},
{
enunciado: "La 'responsabilidad social corporativa' (RSC) en materia ambiental implica:",
correcta: "Compromisos voluntarios de la empresa que van más allá del estricto cumplimiento legal.",
incorrectas: [
"El pago obligatorio de las multas por vertidos tóxicos accidentales.",
"La contratación de personal exclusivo para la limpieza de viales."
]
},
{
enunciado: "¿Cuál es un contaminante químico ambiental común en servicios de anatomía patológica?",
correcta: "Formaldehído.",
incorrectas: [
"Ozono atmosférico.",
"Nitrógeno líquido purificado."
]
},
{
enunciado: "La 'economía circular' aplicada a la gestión sanitaria promueve:",
correcta: "El aprovechamiento de recursos y la reducción de residuos mediante el reciclaje y la reutilización.",
incorrectas: [
"La compra masiva de material de un solo uso para evitar procesos de limpieza.",
"El incremento del consumo energético para mejorar la rapidez de las pruebas."
]
},
{
enunciado: "¿Qué factor físico ambiental influye más en el bienestar psicológico en oficinas?",
correcta: "La iluminación natural y las vistas al exterior.",
incorrectas: [
"La frecuencia de vibración de los ascensores de carga.",
"El color de las baldosas de los cuartos de baño."
]
},
{
enunciado: "En el análisis de la calidad de vida laboral, el 'estrés' se considera un:",
correcta: "Desajuste entre las demandas del entorno y los recursos del individuo.",
incorrectas: [
"Factor motivador necesario para alcanzar la excelencia clínica.",
"Síntoma exclusivo de trabajadores con baja formación técnica."
]
},
{
enunciado: "Los residuos sanitarios del Grupo III (específicos de riesgo) deben ser:",
correcta: "Gestionados mediante tratamiento especial por su peligrosidad infecciosa.",
incorrectas: [
"Eliminados junto a la basura orgánica doméstica sin más trámite.",
"Vertidos directamente a la red de alcantarillado público previo filtrado."
]
},
{
enunciado: "¿Qué se entiende por 'trabajo decente' según la OIT?",
correcta: "Aquel realizado en condiciones de libertad, equidad, seguridad y dignidad humana.",
incorrectas: [
"Cualquier ocupación que genere un salario superior al mínimo interprofesional.",
"Aquel que no requiere esfuerzo físico alguno por parte del trabajador."
]
},
{
enunciado: "La gestión de residuos en el origen (minimización) consiste en:",
correcta: "Reducir la cantidad y peligrosidad de los residuos generados antes de su producción.",
incorrectas: [
"Almacenar los residuos en un sótano hasta que pierdan su toxicidad.",
"Contratar a una empresa externa para que los traslade a otro país."
]
},
{
enunciado: "¿Qué elemento del diseño de puestos mejora la calidad de vida laboral?",
correcta: "La ergonomía participativa.",
incorrectas: [
"La estandarización extrema de todos los movimientos posibles.",
"La vigilancia por circuito cerrado de televisión en los descansos."
]
},
{
enunciado: "La norma EMAS (Eco-Management and Audit Scheme) es:",
correcta: "Un sistema comunitario de gestión y auditoría ambientales más exigente que la ISO 14001.",
incorrectas: [
"Un protocolo médico para la atención de urgencias ambientales.",
"Una ley nacional sobre la gestión de residuos radiactivos."
]
},
{
enunciado: "¿Cuál es la principal ventaja de la ventilación natural frente a la forzada?",
correcta: "Mejor control de la calidad del aire y reducción del consumo energético.",
incorrectas: [
"Garantiza el mantenimiento exacto de la humedad al 50%.",
"Evita la entrada de polen y alérgenos exteriores en el hospital."
]
},
{
enunciado: "El 'burnout' o síndrome de estar quemado afecta directamente a:",
correcta: "La calidad de vida laboral y la seguridad del paciente.",
incorrectas: [
"El balance contable de activos fijos de la empresa.",
"La temperatura de consigna de las calderas del edificio."
]
},
{
enunciado: "¿Qué técnica ambiental identifica y evalúa los impactos de un producto desde su origen hasta su fin?",
correcta: "Análisis de Ciclo de Vida (ACV).",
incorrectas: [
"Balance de masas de laboratorio clínico.",
"Evaluación de impacto social (EIS)."
]
},
{
enunciado: "En centros de trabajo, un nivel de iluminación insuficiente puede generar:",
correcta: "Fatiga visual, cefaleas e incremento de la tasa de errores.",
incorrectas: [
"Mejora de la visión nocturna a largo plazo por adaptación.",
"Ahorro significativo que permite duplicar los sueldos del personal."
]
},
{
enunciado: "La protección medioambiental en la empresa sanitaria incluye la gestión de:",
correcta: "Emisiones atmosféricas, vertidos líquidos y residuos sólidos.",
incorrectas: [
"El vestuario de calle de los pacientes ingresados.",
"La oferta de canales de televisión en las salas de espera."
]
},
{
enunciado: "¿Qué factor de satisfacción laboral se asocia al 'clima social'?",
correcta: "La calidad de las relaciones interpersonales y el apoyo de los compañeros.",
incorrectas: [
"La climatización de las zonas de paso comunes.",
"La velocidad de los terminales informáticos de consulta."
]
},
{
enunciado: "Los planes de movilidad sostenible en las empresas buscan:",
correcta: "Reducir el impacto ambiental de los desplazamientos casa-trabajo.",
incorrectas: [
"Obligar a los trabajadores a vivir a menos de 500 metros del centro.",
"Eliminar los ascensores para fomentar el ejercicio físico."
]
},
{
enunciado: "¿Cuál es el riesgo de una mala calidad del aire interior (CAI)?",
correcta: "Aparición de irritaciones, fatiga y dificultades respiratorias.",
incorrectas: [
"Aumento de la resistencia eléctrica de los equipos médicos.",
"Reducción de la luminosidad de las lámparas quirúrgicas."
]
},
{
enunciado: "La 'ecoeﬁciencia' se define como:",
correcta: "Producir más bienes y servicios con menos recursos y menos contaminación.",
incorrectas: [
"Apagar todas las luces del hospital durante el horario nocturno.",
"Utilizar únicamente papel reciclado para las historias clínicas."
]
},
{
enunciado: "¿Qué caracteriza a un líder que favorece la calidad de vida laboral?",
correcta: "Fomenta la participación, la escucha activa y el reconocimiento.",
incorrectas: [
"Toma todas las decisiones sin consultar para evitar perder tiempo.",
"Utiliza el miedo a la sanción como principal motor de rendimiento."
]
},
{
enunciado: "El amianto o asbesto es un riesgo ambiental laboral porque:",
correcta: "Sus fibras pueden causar mesotelioma y otras enfermedades pulmonares graves.",
incorrectas: [
"Es un gas incoloro que provoca mareos inmediatos por inhalación.",
"Produce quemaduras químicas por contacto dérmico accidental."
]
},
{
enunciado: "¿Qué se entiende por 'conciliación de la vida laboral y familiar'?",
correcta: "La armonización de las responsabilidades profesionales con las personales.",
incorrectas: [
"Permitir que los hijos de los trabajadores acudan al quirófano.",
"Trabajar exclusivamente en horario nocturno para dormir de día."
]
},
{
enunciado: "En la jerarquía de gestión de residuos, ¿qué opción es preferible al reciclaje?",
correcta: "La reducción en el origen y la reutilización.",
incorrectas: [
"La incineración con recuperación de energía.",
"El vertido controlado en depósitos de seguridad."
]
},
{
enunciado: "¿Cómo influye el ruido ambiental en la satisfacción laboral?",
correcta: "Dificulta la concentración, aumenta el estrés y altera la comunicación.",
incorrectas: [
"Favorece la agilidad mental al mantener el cerebro en alerta constante.",
"No influye si el trabajador utiliza auriculares de música personal."
]
},
{
enunciado: "El concepto de 'desarrollo sostenible' une tres pilares:",
correcta: "Económico, social y ambiental.",
incorrectas: [
"Legal, técnico y administrativo.",
"Médico, sanitario y preventivo."
]
},
{
enunciado: "¿Qué es el 'greenwashing'?",
correcta: "Prácticas de marketing engañosas para proyectar una imagen ecológica falsa.",
incorrectas: [
"El lavado sistemático de los uniformes con detergentes biodegradables.",
"La pintura de color verde de los contenedores de residuos peligrosos."
]
},
{
enunciado: "¿Qué mide un sonómetro en el medio ambiente laboral?",
correcta: "El nivel de presión sonora expresado en decibelios.",
incorrectas: [
"La pureza del aire en partes por millón de oxígeno.",
"La cantidad de luz que incide sobre una superficie determinada."
]
},
{
enunciado: "La ergonomía cognitiva se centra en:",
correcta: "La adecuación del trabajo a las capacidades intelectuales y mentales del individuo.",
incorrectas: [
"El diseño de sillas que eviten el dolor de espalda crónico.",
"La selección de calzado que minimice el cansancio en bipedestación."
]
}
];
