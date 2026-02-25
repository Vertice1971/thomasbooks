'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué concepto define la fatiga mental derivada del uso continuado y excesivo de tecnologías de la información?",
correcta: "Tecnoestrés.",
incorrectas: [
"Sindrome de Burnout digital.",
"Desconexión cognitiva inducida."
]
},
{
enunciado: "En el trabajo con pantallas de visualización de datos (PVD), ¿cuál es la distancia recomendada entre el ojo y la pantalla?",
correcta: "Entre 40 y 75 centímetros.",
incorrectas: [
"Exactamente 30 centímetros para evitar la acomodación.",
"Mínimo 100 centímetros para reducir la radiación ionizante."
]
},
{
enunciado: "¿Qué patología musculoesquelética es más frecuente por el uso intensivo de ratón y teclado?",
correcta: "Síndrome del túnel carpiano.",
incorrectas: [
"Epicondilitis aguda de origen químico.",
"Espondilitis anquilosante tecnológica."
]
},
{
enunciado: "El RD 488/1997 establece que el trabajador tiene derecho a una interrupción de la labor ante PVD mediante pausas o cambios de actividad cuando:",
correcta: "El trabajo con pantalla sea continuado y represente una parte significativa de la jornada laboral.",
incorrectas: [
"Se superen las dos horas de conexión inalámbrica ininterrumpida.",
"El equipo informático carezca de filtro de luz azul homologado."
]
},
{
enunciado: "¿Qué es la 'tecnofobia' en el entorno laboral?",
correcta: "El rechazo o miedo persistente a la interacción con nuevas herramientas tecnológicas.",
incorrectas: [
"La adicción incontrolada al uso de dispositivos móviles durante la jornada.",
"El fallo sistémico de los servidores de seguridad de un centro sanitario."
]
},
{
enunciado: "Desde el punto de vista ergonómico, el borde superior de la pantalla debe quedar:",
correcta: "A la altura de los ojos o ligeramente por debajo.",
incorrectas: [
"Al menos 20 centímetros por encima de la línea de visión horizontal.",
"Inclinado hacia atrás con un ángulo de 45 grados respecto a la mesa."
]
},
{
enunciado: "¿Cómo se denomina la carga de trabajo derivada del procesamiento de información y toma de decisiones en entornos digitalizados?",
correcta: "Carga mental.",
incorrectas: [
"Esfuerzo sensorio-motor periférico.",
"Presión de rendimiento algorítmico."
]
},
{
enunciado: "La 'tecnoadicción' se caracteriza principalmente por:",
correcta: "La necesidad incontrolable de estar conectado y el uso compulsivo de las TIC.",
incorrectas: [
"El rechazo a utilizar el correo electrónico corporativo por desconfianza.",
"La incapacidad física para manejar periféricos de entrada de datos."
]
},
{
enunciado: "¿Qué efecto visual produce el uso de PVD si no hay una iluminación adecuada?",
correcta: "Astenopia o fatiga visual.",
incorrectas: [
"Glaucoma agudo por radiación de píxeles.",
"Presbicia prematura por enfoque fijo."
]
},
{
enunciado: "¿Cuál es una medida de prevención organizativa frente a los riesgos de las nuevas tecnologías?",
correcta: "Fomentar la autonomía en la gestión del tiempo y definir protocolos de desconexión digital.",
incorrectas: [
"Sustituir todas las pantallas de cristal líquido por monitores CRT.",
"Prohibir el uso de software de gestión clínica en horario nocturno."
]
},
{
enunciado: "En teletrabajo, ¿quién es responsable de garantizar la salud y seguridad del trabajador?",
correcta: "El empresario, debiendo evaluar los riesgos del espacio habilitado para el trabajo.",
incorrectas: [
"El propio trabajador exclusivamente, al ser su domicilio privado.",
"La empresa suministradora de los servicios de internet y telefonía."
]
},
{
enunciado: "El concepto 'nomofobia' se refiere a:",
correcta: "El miedo irracional a estar sin el teléfono móvil o desconectado.",
incorrectas: [
"La irritación cutánea por el contacto con carcasas plásticas.",
"El mareo producido por el uso de cascos de realidad virtual."
]
},
{
enunciado: "¿Qué característica debe tener el teclado según la normativa de PVD?",
correcta: "Inclinable y con espacio suficiente delante para apoyar brazos y manos.",
incorrectas: [
"Integrado obligatoriamente en la superficie de la mesa de trabajo.",
"De color negro mate con caracteres en relieve fluorescente."
]
},
{
enunciado: "La vigilancia de la salud para trabajadores usuarios de PVD debe incluir:",
correcta: "Una evaluación específica de la vista y del sistema musculoesquelético.",
incorrectas: [
"Pruebas de esfuerzo cardiovascular anuales obligatorias.",
"Análisis genético para detectar predisposición al estrés digital."
]
},
{
enunciado: "¿Qué es el 'FOMO' (Fear Of Missing Out) en el contexto laboral?",
correcta: "La ansiedad por miedo a perderse información relevante en las redes o canales corporativos.",
incorrectas: [
"La fatiga muscular por el uso de dispositivos de mano (tabletas).",
"El error técnico en el volcado de datos de la historia clínica."
]
},
{
enunciado: "Para evitar reflejos en la pantalla, esta debe colocarse:",
correcta: "En perpendicular a las ventanas y fuentes de luz natural.",
incorrectas: [
"Directamente frente a la ventana para aprovechar la luz máxima.",
"De espaldas a la ventana para que la luz incida directamente sobre el panel."
]
},
{
enunciado: "¿Cuál es la frecuencia de parpadeo recomendada para evitar la sequedad ocular frente a pantallas?",
correcta: "Es una acción refleja, pero debe fomentarse el parpadeo voluntario y descansos visuales.",
incorrectas: [
"Exactamente 50 parpadeos por minuto cronometrados.",
"No es necesario parpadear si se utilizan lágrimas artificiales preventivas."
]
},
{
enunciado: "El mobiliario para trabajar con nuevas tecnologías debe ser:",
correcta: "Regulable en altura y proporcionar un apoyo lumbar estable.",
incorrectas: [
"Rígido y de materiales metálicos para evitar la electricidad estática.",
"Bajo para obligar a una flexión de cuello que mejore el riego sanguíneo."
]
},
{
enunciado: "¿Qué riesgo psicosocial se asocia a la hiperconectividad fuera de la jornada laboral?",
correcta: "Interferencia trabajo-familia y falta de recuperación fisiológica.",
incorrectas: [
"Aumento de la capacidad de concentración en tareas complejas.",
"Mejora de las relaciones interpersonales con los mandos directivos."
]
},
{
enunciado: "La 'tecnofatiga' se manifiesta principalmente como:",
correcta: "Sentimientos de falta de competencia y agotamiento cognitivo ante el uso de TIC.",
incorrectas: [
"Dolor articular agudo en las falanges de los dedos índice.",
"Aumento del apetito debido al sedentarismo tecnológico."
]
},
{
enunciado: "¿Qué es el 'Vamping' laboral?",
correcta: "El uso de dispositivos electrónicos durante la noche restando horas al sueño.",
incorrectas: [
"La actualización constante de software de forma compulsiva.",
"El robo de datos clínicos mediante técnicas de ingeniería social."
]
},
{
enunciado: "Las radiaciones emitidas por las PVD modernas se consideran:",
correcta: "No peligrosas para la salud, al estar por debajo de los límites de exposición.",
incorrectas: [
"Radiaciones ionizantes de alta energía que requieren blindaje de plomo.",
"Inexistentes, ya que los monitores LED no generan campos electromagnéticos."
]
},
{
enunciado: "¿Qué ángulo deben formar los codos al trabajar con el teclado?",
correcta: "Aproximadamente 90 grados.",
incorrectas: [
"180 grados (brazos totalmente estirados).",
"45 grados para favorecer la tensión muscular necesaria."
]
},
{
enunciado: "En relación con el software, la normativa de PVD indica que este debe:",
correcta: "Ser fácil de utilizar y adaptarse al nivel de conocimientos del usuario.",
incorrectas: [
"Actualizarse diariamente sin previo aviso al trabajador.",
"Ser exclusivamente de código abierto para evitar dependencias mercantiles."
]
},
{
enunciado: "El síndrome de 'Burnout digital' es consecuencia de:",
correcta: "Un estrés crónico derivado de la mala gestión de las herramientas tecnológicas y la sobrecarga informativa.",
incorrectas: [
"Un cortocircuito en el hardware del equipo de trabajo personal.",
"La falta de luz solar en el despacho del trabajador sanitario."
]
},
{
enunciado: "¿Qué es la 'infoxicación'?",
correcta: "La sobrecarga informativa que impide procesar y tomar decisiones de forma eficaz.",
incorrectas: [
"La intoxicación por vapores de plomo en la fabricación de circuitos.",
"La entrada de virus informáticos en la red del hospital."
]
},
{
enunciado: "La Ley Orgánica 3/2018 (LOPDGDD) reconoce expresamente:",
correcta: "El derecho a la desconexión digital en el ámbito laboral.",
incorrectas: [
"La obligación de responder correos electrónicos en fines de semana.",
"El derecho a utilizar equipos de la empresa para fines de ocio personal."
]
},
{
enunciado: "¿Cuál es el riesgo ergonómico derivado de los dispositivos móviles (tablets/smartphones)?",
correcta: "Posturas forzadas de cuello y fatiga en los pulgares (tenosinovitis).",
incorrectas: [
"Pérdida de la audición por vibraciones de baja frecuencia.",
"Aumento de la densidad ósea en las muñecas por el peso del equipo."
]
},
{
enunciado: "¿Qué técnica preventiva se aplica para evitar el estatismo postural?",
correcta: "Alternancia de tareas y realización de ejercicios de estiramiento.",
incorrectas: [
"Uso de fajas lumbares rígidas durante toda la jornada.",
"Inmovilización de las extremidades inferiores mediante soportes fijos."
]
},
{
enunciado: "El deslumbramiento 'velo' en pantallas se produce por:",
correcta: "Reflejos de fuentes luminosas situadas detrás del observador.",
incorrectas: [
"La excesiva oscuridad de la habitación de trabajo.",
"El parpadeo de los tubos fluorescentes en mal estado."
]
},
{
enunciado: "¿Qué factor incrementa el tecnoestrés en los servicios de salud?",
correcta: "La introducción de sistemas complejos sin la formación adecuada del personal.",
incorrectas: [
"La simplificación de los trámites administrativos mediante IA.",
"El aumento de la velocidad de conexión a la red de banda ancha."
]
},
{
enunciado: "La fatiga 'psicológica' por TIC se diferencia de la física en que:",
correcta: "Afecta a las funciones cognitivas y emocionales más que a las estructuras musculares.",
incorrectas: [
"Desaparece inmediatamente al apagar el monitor del ordenador.",
"Solo afecta a trabajadores de edad avanzada con baja cualificación."
]
},
{
enunciado: "El uso de 'filtros de pantalla' está recomendado cuando:",
correcta: "Existan problemas de reflejos que no puedan eliminarse por otros medios técnicos.",
incorrectas: [
"Se trabaje con información clasificada como secreto de estado.",
"El trabajador tenga una agudeza visual superior a la media."
]
},
{
enunciado: "En ergonomía informática, los pies deben estar:",
correcta: "Apoyados planos sobre el suelo o en un reposapiés si fuera necesario.",
incorrectas: [
"Cruzados para favorecer la circulación de retorno.",
"Colocados sobre la base de la silla giratoria."
]
},
{
enunciado: "¿Qué trastorno del sueño se asocia a la luz azul de las pantallas?",
correcta: "Inhibición de la melatonina y retraso en la conciliación del sueño.",
incorrectas: [
"Aparición de pesadillas relacionadas con el entorno laboral.",
"Hipersomnia diurna incontrolada (narcolepsia tecnológica)."
]
},
{
enunciado: "¿Cuál es el principal objetivo de la formación en riesgos de nuevas tecnologías?",
correcta: "Dotar al trabajador de estrategias de afrontamiento y uso seguro de las herramientas.",
incorrectas: [
"Enseñar a programar en lenguajes de bajo nivel para reparar averías.",
"Fomentar la competitividad extrema entre los empleados del centro."
]
},
{
enunciado: "¿Qué es el 'E-presentismo'?",
correcta: "Estar conectado digitalmente al trabajo fuera del horario laboral para demostrar compromiso.",
incorrectas: [
"La asistencia física obligatoria a reuniones telemáticas.",
"La falta de atención durante las videoconferencias formativas."
]
},
{
enunciado: "Un puesto de trabajo con PVD bien diseñado debe permitir:",
correcta: "Espacio suficiente para los muslos y libertad de movimientos bajo la mesa.",
incorrectas: [
"La colocación de la unidad central (torre) sobre las rodillas del usuario.",
"El almacenamiento de materiales pesados bajo el teclado."
]
},
{
enunciado: "La 'vigilancia técnica' en prevención ante nuevas tecnologías consiste en:",
correcta: "Evaluar el impacto de las nuevas herramientas antes de su implantación definitiva.",
incorrectas: [
"Espiar las comunicaciones privadas de los trabajadores para evitar fugas de datos.",
"Contratar más personal de mantenimiento informático que sanitario."
]
},
{
enunciado: "¿Qué normativa española traspone la directiva europea sobre PVD?",
correcta: "El Real Decreto 488/1997.",
incorrectas: [
"El Real Decreto 664/1997 sobre agentes biológicos.",
"El Real Decreto 1215/1997 sobre equipos de trabajo."
]
}
];
