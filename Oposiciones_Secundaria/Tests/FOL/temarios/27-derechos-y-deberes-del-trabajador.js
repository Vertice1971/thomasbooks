'use strict';

var PREGUNTAS = [
{
enunciado: "El deber de diligencia del trabajador implica:",
correcta: "Prestar el servicio con el cuidado y la rapidez necesarios según su categoría profesional",
incorrectas: [
"Superar en un 50% la productividad media de sus compañeros de departamento",
"Realizar las tareas utilizando únicamente sus propias herramientas personales"
]
},
{
enunciado: "El principio de buena fe contractual obliga al trabajador a:",
correcta: "Actuar con lealtad, honestidad y fidelidad a los intereses legítimos de la empresa",
incorrectas: [
"Aceptar cualquier cambio de horario sin derecho a reclamación ni indemnización",
"Informar al empresario sobre las opiniones políticas de los representantes sindicales"
]
},
{
enunciado: "La clasificación profesional de los trabajadores se realiza mediante:",
correcta: "La determinación de grupos profesionales a través de la negociación colectiva",
incorrectas: [
"La edad cronológica y la antigüedad acumulada en el sector servicios",
"El número de hijos y la situación civil declarada en el contrato de trabajo"
]
},
{
enunciado: "El poder de dirección del empresario le permite:",
correcta: "Dictar órdenes e instrucciones sobre el modo, tiempo y lugar de la prestación laboral",
incorrectas: [
"Intervenir en la vida privada del trabajador fuera del horario de servicio",
"Modificar el salario base por debajo de lo establecido en el convenio colectivo"
]
},
{
enunciado: "El poder disciplinario del empresario prescribe para faltas muy graves a los:",
correcta: "60 días desde que tuvo conocimiento y, en todo caso, a los 6 meses de cometidas",
incorrectas: [
"10 días naturales desde que se produjo el hecho causante de la sanción",
"2 años, independientemente de cuándo se haya detectado el incumplimiento"
]
},
{
enunciado: "Se considera una manifestación del poder de dirección el 'ius variandi', que es:",
correcta: "La facultad de modificar accidentalmente las condiciones de trabajo por razones de urgencia",
incorrectas: [
"El derecho a despedir a cualquier técnico sin necesidad de justificación alguna",
"La obligación de pagar las horas extraordinarias siempre en metálico y no en descanso"
]
},
{
enunciado: "Las sanciones por faltas laborales no podrán consistir nunca en:",
correcta: "Reducción de las vacaciones, descanso semanal o multa de haber",
incorrectas: [
"Amonestación verbal o escrita comunicada de forma privada al trabajador",
"Suspensión de empleo y sueldo por un tiempo proporcional a la gravedad"
]
},
{
enunciado: "¿Qué límite tiene el poder de dirección del empresario respecto a la dignidad del trabajador?",
correcta: "Debe respetar la intimidad y la consideración debida a la dignidad del trabajador",
incorrectas: [
"Solo debe respetar la dignidad si el trabajador tiene contrato indefinido",
"No tiene límites si las órdenes se dan dentro del recinto del laboratorio"
]
},
{
enunciado: "El deber de no concurrencia desleal implica que el trabajador:",
correcta: "No puede trabajar para otro empresario del mismo sector sin consentimiento",
incorrectas: [
"No puede hablar con trabajadores de otras empresas durante su tiempo libre",
"Debe denunciar a cualquier compañero que busque empleo en la competencia"
]
},
{
enunciado: "La formación profesional en el trabajo es un:",
correcta: "Derecho del trabajador para mejorar su empleabilidad y promoción",
incorrectas: [
"Deber que el trabajador debe costear íntegramente de su propio salario",
"Poder del empresario para obligar al técnico a estudiar materias ajenas al puesto"
]
},
{
enunciado: "Las faltas leves prescriben a los:",
correcta: "10 días",
incorrectas: [
"30 días",
"5 días"
]
},
{
enunciado: "El deber de obediencia tiene como límite:",
correcta: "Las órdenes que sean manifiestamente ilegales o atenten contra la integridad física",
incorrectas: [
"Las órdenes que resulten aburridas o poco motivadoras para el personal técnico",
"Cualquier instrucción que suponga trabajar más de cuatro horas seguidas"
]
},
{
enunciado: "La polivalencia funcional permite que el trabajador:",
correcta: "Desempeñe funciones de varios grupos profesionales si así se ha pactado",
incorrectas: [
"Cobre el salario más bajo de todos los grupos profesionales en los que trabaje",
"Sea despedido si no domina todas las áreas técnicas de la empresa el primer día"
]
},
{
enunciado: "El procedimiento sancionador para faltas graves o muy graves requiere:",
correcta: "Comunicación escrita al trabajador haciendo constar fecha y hechos",
incorrectas: [
"Aprobación previa por parte de un notario y de la guardia civil local",
"Publicación de la sanción en el tablón de anuncios de la entrada del centro"
]
},
{
enunciado: "El derecho a la ocupación efectiva significa que:",
correcta: "El empresario debe proporcionar al trabajador el trabajo pactado",
incorrectas: [
"El trabajador tiene derecho a ocupar el despacho del director si este se ausenta",
"La empresa puede dejar al trabajador sin tareas si le sigue pagando el sueldo"
]
},
{
enunciado: "La transgresión de la buena fe contractual es causa de:",
correcta: "Despido disciplinario",
incorrectas: [
"Sanción económica de hasta el 50% de la base imponible anual",
"Traslado forzoso a una sucursal de la empresa en el extranjero"
]
},
{
enunciado: "En la clasificación profesional, el grupo profesional agrupa:",
correcta: "Aptitudes profesionales, titulaciones y contenido general de la prestación",
incorrectas: [
"Únicamente a los trabajadores que tienen el mismo nivel de renta anual",
"A los empleados según su lugar de residencia y proximidad al centro"
]
},
{
enunciado: "El empresario puede verificar el estado de salud del trabajador mediante reconocimiento:",
correcta: "Cuando el trabajador se encuentre en situación de incapacidad temporal",
incorrectas: [
"Siempre que lo desee, aunque el trabajador no esté de baja médica",
"Únicamente si el trabajador ha cometido una falta grave contra la empresa"
]
},
{
enunciado: "El deber de contribuir a la mejora de la productividad es un:",
correcta: "Deber del trabajador derivado del contrato",
incorrectas: [
"Derecho del trabajador para exigir bonus trimestrales ilimitados",
"Poder que solo tienen los representantes de los trabajadores"
]
},
{
enunciado: "Las sanciones impuestas por el empresario pueden ser revisadas por:",
correcta: "La Jurisdicción Social",
incorrectas: [
"El Ministerio de Hacienda",
"La Organización Internacional del Trabajo"
]
},
{
enunciado: "El pacto de permanencia en la empresa es válido si:",
correcta: "El trabajador ha recibido una especialización profesional con cargo al empresario",
incorrectas: [
"El empresario lo impone a todos los técnicos sin ofrecer formación a cambio",
"La duración del pacto es superior a los diez años de servicio ininterrumpido"
]
},
{
enunciado: "El registro de jornada es una obligación del empresario para:",
correcta: "Garantizar el cumplimiento de los límites de la jornada laboral",
incorrectas: [
"Controlar las conversaciones privadas de los trabajadores durante los descansos",
"Evitar que los técnicos utilicen el material de laboratorio para fines propios"
]
},
{
enunciado: "El ius variandi no puede afectar a:",
correcta: "Los derechos fundamentales del trabajador",
incorrectas: [
"La colocación de las mesas de trabajo en el laboratorio de análisis",
"El uso de una marca específica de guantes de protección técnica"
]
},
{
enunciado: "El deber de secreto profesional obliga al trabajador a:",
correcta: "No revelar información confidencial de la empresa conocida por su puesto",
incorrectas: [
"No decir a su familia cuál es el salario neto que percibe mensualmente",
"Informar a la competencia sobre los nuevos protocolos de investigación"
]
},
{
enunciado: "La movilidad funcional ascendente da derecho a percibir:",
correcta: "La retribución correspondiente a las funciones de superior categoría",
incorrectas: [
"El mismo salario de origen más un 10% en concepto de peligrosidad",
"Una indemnización por daños morales al asumir más responsabilidad"
]
},
{
enunciado: "Las faltas graves prescriben a los:",
correcta: "20 días",
incorrectas: [
"60 días",
"15 días"
]
},
{
enunciado: "El poder disciplinario se ejerce para corregir:",
correcta: "Incumplimientos contractuales del trabajador",
incorrectas: [
"Errores personales del trabajador fuera del ámbito de la empresa",
"La falta de simpatía del empleado hacia la dirección técnica"
]
},
{
enunciado: "El trabajador tiene derecho a la protección de su integridad física, lo que implica:",
correcta: "Una política adecuada de seguridad y salud en el trabajo por el empresario",
incorrectas: [
"El derecho a negarse a trabajar si no hay aire acondicionado en verano",
"La obligación de la empresa de pagarle un gimnasio privado mensualmente"
]
},
{
enunciado: "La desobediencia es sancionable cuando es:",
correcta: "Indisciplinada, injustificada y afecta a una orden legítima",
incorrectas: [
"Puntual y no afecta al desarrollo normal de la actividad técnica",
"Realizada por un representante de los trabajadores durante una huelga"
]
},
{
enunciado: "El acoso laboral o 'mobbing' se considera:",
correcta: "Una falta muy grave y una vulneración de derechos fundamentales",
incorrectas: [
"Una técnica de gestión de personal aceptada para aumentar la presión",
"Un conflicto menor que debe resolverse sin intervención judicial"
]
},
{
enunciado: "El derecho a la promoción profesional permite al trabajador:",
correcta: "Acceder a un trabajo más cualificado según su formación y méritos",
incorrectas: [
"Exigir el puesto de jefe de laboratorio tras el primer año de contrato",
"Cobrar el mismo salario que el dueño de la empresa por antigüedad"
]
},
{
enunciado: "La vigilancia de la salud por parte del empresario es, por regla general:",
correcta: "Voluntaria para el trabajador, salvo en riesgos específicos",
incorrectas: [
"Obligatoria y semanal para todos los empleados del sector sanitario",
"Prohibida por la Ley Orgánica de Protección de Datos de carácter personal"
]
},
{
enunciado: "El pacto de plena dedicación impide al trabajador:",
correcta: "Realizar cualquier otra actividad laboral para otros empresarios",
incorrectas: [
"Tener aficiones que impliquen esfuerzo físico fuera del horario laboral",
"Participar en las reuniones de la comunidad de vecinos de su domicilio"
]
},
{
enunciado: "La movilidad funcional fuera del grupo profesional requiere:",
correcta: "Razones económicas, técnicas, organizativas o de producción",
incorrectas: [
"La simple voluntad verbal del encargado de planta del laboratorio",
"Que el trabajador sea menor de 30 años en el momento del cambio"
]
},
{
enunciado: "El derecho a la intimidad frente a dispositivos de videovigilancia prohíbe:",
correcta: "Instalar cámaras en vestuarios, aseos o zonas de descanso",
incorrectas: [
"Grabar las zonas de trabajo donde se manipulan reactivos peligrosos",
"Utilizar el registro de imágenes para sancionar incumplimientos laborales"
]
},
{
enunciado: "La embriaguez habitual en el trabajo es causa de despido si:",
correcta: "Repercute negativamente en el trabajo desempeñado",
incorrectas: [
"Se produce únicamente durante las cenas de Navidad de la empresa",
"El trabajador es capaz de realizar sus tareas técnicas sin errores"
]
},
{
enunciado: "El principio de 'indemnidad' significa que el trabajador:",
correcta: "No puede sufrir represalias por ejercer acciones legales contra la empresa",
incorrectas: [
"No tiene que pagar los daños que cause por negligencia en el laboratorio",
"Debe cobrar una indemnización diaria por el simple hecho de acudir al centro"
]
},
{
enunciado: "El registro de los dispositivos digitales entregados al trabajador requiere:",
correcta: "Criterios fijados por la empresa y respeto a la intimidad",
incorrectas: [
"La presencia obligatoria de un agente de la autoridad en el despacho",
"Que el trabajador no esté presente durante la revisión de los archivos"
]
},
{
enunciado: "La falta de puntualidad puede ser sancionada si es:",
correcta: "Reiterada e injustificada",
incorrectas: [
"Ocasional y debida a problemas de tráfico comprobados",
"Autorizada previamente por el delegado de personal de la empresa"
]
},
{
enunciado: "El trabajador tiene derecho a la desconexión digital para:",
correcta: "Garantizar el respeto de su tiempo de descanso y vacaciones",
incorrectas: [
"Apagar el teléfono móvil durante las horas de trabajo efectivo",
"No leer los manuales de instrucciones de los equipos de laboratorio"
]
}
];