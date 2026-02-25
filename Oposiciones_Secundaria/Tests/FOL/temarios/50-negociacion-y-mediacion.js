'use strict';

var PREGUNTAS = [
{
enunciado: "La negociación se define como un proceso en el que dos o más partes:",
correcta: "Intentan resolver intereses contrapuestos para llegar a un acuerdo aceptable",
incorrectas: [
"Se enfrentan físicamente para determinar quién posee el material técnico",
"Esperan a que el Estado dicte una sentencia de obligado cumplimiento"
]
},
{
enunciado: "En una negociación distributiva (ganar-perder):",
correcta: "Lo que una parte gana es exactamente lo que la otra parte pierde",
incorrectas: [
"Ambas partes colaboran para aumentar el beneficio total del laboratorio",
"Se busca una solución creativa que satisfaga a todos los técnicos"
]
},
{
enunciado: "La negociación integrativa (ganar-ganar) se caracteriza por:",
correcta: "Buscar intereses comunes y crear valor para ambas partes",
incorrectas: [
"Utilizar el engaño sobre el precio de los reactivos para vencer al otro",
"Mantener una postura rígida hasta que la otra parte ceda por agotamiento"
]
},
{
enunciado: "El MAAN (Mejor Alternativa a un Acuerdo Negociado) sirve para:",
correcta: "Saber cuándo retirarse de una negociación si el acuerdo es desfavorable",
incorrectas: [
"Calcular el tiempo exacto que tarda en completarse un cultivo biológico",
"Determinar el número de técnicos que deben asistir a una huelga"
]
},
{
enunciado: "La fase de preparación de la negociación incluye:",
correcta: "Recopilar información, definir objetivos y establecer límites",
incorrectas: [
"La firma del contrato final ante el notario de la empresa",
"El intercambio de muestras químicas con el laboratorio rival"
]
},
{
enunciado: "Una estrategia de negociación 'acomodativa' consiste en:",
correcta: "Ceder a corto plazo para mantener la relación y ganar en el futuro",
incorrectas: [
"Presionar al máximo al proveedor de instrumental para bajar el precio",
"Ignorar sistemáticamente las peticiones del comité de empresa"
]
},
{
enunciado: "En el proceso negociador, las 'concesiones' son:",
correcta: "Renuncias que hace cada parte para acercar posturas hacia el acuerdo",
incorrectas: [
"Permisos administrativos para verter residuos químicos al alcantarillado",
"Títulos honoríficos entregados a los técnicos de mayor antigüedad"
]
},
{
enunciado: "Un elemento fundamental de la negociación es la 'zona de posible acuerdo' (ZOPA), que es:",
correcta: "El espacio entre los puntos de reserva de ambas partes",
incorrectas: [
"El área del laboratorio donde se permite hablar de temas sindicales",
"La franja horaria en la que los técnicos pueden realizar descansos"
]
},
{
enunciado: "La táctica del 'policía bueno y policía malo' busca:",
correcta: "Confundir y presionar a la otra parte mediante roles contrastados",
incorrectas: [
"Garantizar la seguridad física durante la toma de muestras biológicas",
"Cumplir con la normativa de prevención de riesgos laborales del centro"
]
},
{
enunciado: "La personalidad de un negociador 'cooperativo' tiende a:",
correcta: "Priorizar la confianza y la búsqueda de soluciones conjuntas",
incorrectas: [
"Ver la negociación como una guerra donde solo importa la victoria propia",
"Evitar cualquier tipo de contacto visual con los representantes técnicos"
]
},
{
enunciado: "Un conflicto laboral se define como:",
correcta: "Una disputa entre trabajadores y empresarios sobre condiciones de trabajo",
incorrectas: [
"La rotura accidental de una centrífuga por parte de un técnico superior",
"La falta de reactivos debido a un retraso en el transporte internacional"
]
},
{
enunciado: "La mediación es un proceso de resolución de conflictos en el que:",
correcta: "Un tercero neutral ayuda a las partes a alcanzar su propio acuerdo",
incorrectas: [
"Un juez impone una solución que es de obligado cumplimiento para todos",
"El director del laboratorio despide a los técnicos que no están de acuerdo"
]
},
{
enunciado: "Una cualidad esencial del mediador es:",
correcta: "La imparcialidad y la capacidad de escucha activa",
incorrectas: [
"Poseer el 51% de las acciones de la empresa de diagnóstico",
"Tener potestad para sancionar económicamente a los técnicos"
]
},
{
enunciado: "El arbitraje se diferencia de la mediación en que el árbitro:",
correcta: "Dicta una decisión (laudo) que es obligatoria para las partes",
incorrectas: [
"Solo puede dar consejos técnicos sobre cómo realizar los análisis",
"Es elegido exclusivamente por el sindicato de técnicos más votado"
]
},
{
enunciado: "La fase de desarrollo o discusión de la negociación sirve para:",
correcta: "Intercambiar argumentos y explorar las posiciones de cada parte",
incorrectas: [
"Redactar las cláusulas legales del convenio colectivo de sanidad",
"Celebrar el éxito del acuerdo con una cena para toda la plantilla"
]
},
{
enunciado: "El 'punto de reserva' en una negociación es:",
correcta: "El valor mínimo o máximo aceptable más allá del cual se rompe el trato",
incorrectas: [
"El lugar donde se guardan los reactivos químicos más peligrosos",
"La fecha límite para presentar el informe de resultados al paciente"
]
},
{
enunciado: "Una táctica de presión denominada 'el farol' consiste en:",
correcta: "Engañar a la otra parte sobre las propias posibilidades o alternativas",
incorrectas: [
"Iluminar intensamente la mesa de negociación para cansar al rival",
"Suministrar información técnica real y contrastada por laboratorios"
]
},
{
enunciado: "El conflicto intragrupal es aquel que se produce:",
correcta: "Entre miembros de un mismo equipo o departamento técnico",
incorrectas: [
"Entre el laboratorio de análisis y la empresa suministradora de gas",
"Entre dos sindicatos de técnicos de diferentes comunidades autónomas"
]
},
{
enunciado: "La asertividad en la negociación permite:",
correcta: "Defender los intereses propios sin agredir ni ser sumiso",
incorrectas: [
"Aceptar todas las condiciones del jefe para evitar el enfrentamiento",
"Gritar al interlocutor para demostrar mayor autoridad profesional"
]
},
{
enunciado: "El cierre de la negociación debe incluir:",
correcta: "La formalización del acuerdo y la verificación de su comprensión",
incorrectas: [
"El inicio de una nueva ronda de quejas sobre el material técnico",
"La destrucción de todos los documentos utilizados durante el proceso"
]
},
{
enunciado: "Un negociador 'competitivo' se enfoca en:",
correcta: "Obtener el máximo beneficio propio a corto plazo",
incorrectas: [
"Ayudar a la otra parte a conseguir sus objetivos personales",
"Estudiar la composición química de las muestras del adversario"
]
},
{
enunciado: "La técnica del 'paquete de medidas' consiste en:",
correcta: "Negociar varios puntos a la vez para permitir intercambios",
incorrectas: [
"Enviar todos los reactivos en un solo embalaje para ahorrar costes",
"Agrupar a los técnicos por parejas según su afinidad personal"
]
},
{
enunciado: "El conflicto funcional es aquel que:",
correcta: "Resulta constructivo y ayuda a mejorar el desempeño de la empresa",
incorrectas: [
"Impide el funcionamiento normal de las máquinas del laboratorio",
"Termina siempre con el despido disciplinario de los técnicos involucrados"
]
},
{
enunciado: "La escucha activa en la negociación sirve para:",
correcta: "Identificar las necesidades reales subyacentes de la otra parte",
incorrectas: [
"Grabar las conversaciones para utilizarlas en un juicio posterior",
"Evitar que el interlocutor pueda terminar sus frases lógicas"
]
},
{
enunciado: "Un mediador debe fomentar la 'lluvia de ideas' para:",
correcta: "Explorar soluciones creativas que las partes no habían considerado",
incorrectas: [
"Determinar qué técnico es el culpable del error en el diagnóstico",
"Limpiar la atmósfera del laboratorio tras un vertido químico"
]
},
{
enunciado: "La empatía en la negociación es:",
correcta: "Comprender la posición del otro sin necesidad de compartirla",
incorrectas: [
"Sentir el mismo dolor físico que el paciente durante la extracción",
"Regalar material técnico a la otra parte por pura compasión"
]
},
{
enunciado: "Se denomina 'impasse' o bloqueo a la situación donde:",
correcta: "La negociación se detiene porque ninguna parte está dispuesta a ceder",
incorrectas: [
"El director del centro decide subir el sueldo a todos los técnicos",
"Se agotan las existencias de reactivos para realizar los análisis"
]
},
{
enunciado: "La negociación colectiva es la que se realiza entre:",
correcta: "Representantes de los trabajadores y de los empresarios",
incorrectas: [
"Dos técnicos superiores para decidir quién limpia el instrumental",
"El laboratorio de análisis y el ministerio de industria y comercio"
]
},
{
enunciado: "El uso de 'preguntas abiertas' en negociación permite:",
correcta: "Obtener más información y hacer que la otra parte se explique",
incorrectas: [
"Cerrar el trato de forma inmediata sin posibilidad de réplica",
"Evaluar los conocimientos técnicos de química del interlocutor"
]
},
{
enunciado: "La estrategia de 'evitación' en el conflicto es adecuada cuando:",
correcta: "El asunto es trivial o el coste del enfrentamiento es demasiado alto",
incorrectas: [
"Se está decidiendo el salario base de toda la plantilla técnica",
"Existe un riesgo grave para la salud de los trabajadores del centro"
]
},
{
enunciado: "El lenguaje corporal en la negociación puede indicar:",
correcta: "Inseguridad, apertura, rechazo o interés del interlocutor",
incorrectas: [
"El nivel de glóbulos rojos del técnico que está hablando",
"La calidad del tejido de los uniformes de trabajo del laboratorio"
]
},
{
enunciado: "En una negociación, los 'intereses' son:",
correcta: "Las necesidades, deseos o temores que motivan a las partes",
incorrectas: [
"Los porcentajes que cobra el banco por los préstamos técnicos",
"Las horas extras que el técnico superior realiza voluntariamente"
]
},
{
enunciado: "La táctica de 'el salami' consiste en:",
correcta: "Ir obteniendo pequeñas concesiones una a una",
incorrectas: [
"Repartir comida entre los técnicos durante las reuniones largas",
"Cortar los reactivos químicos en láminas muy finas para el estudio"
]
},
{
enunciado: "El mediador debe garantizar que el acuerdo sea:",
correcta: "Equilibrado, realista y duradero",
incorrectas: [
"Escrito exclusivamente en inglés para laboratorios internacionales",
"Favorable únicamente a los intereses de la dirección del centro"
]
},
{
enunciado: "El conflicto jerárquico se produce entre:",
correcta: "Diferentes niveles de mando de la organización empresarial",
incorrectas: [
"Técnicos que poseen exactamente el mismo título académico",
"Empresas competidoras que ofrecen el mismo tipo de análisis"
]
},
{
enunciado: "La preparación de la negociación incluye el análisis del entorno, que es:",
correcta: "Estudiar factores externos que pueden influir en el proceso",
incorrectas: [
"Limpiar y ordenar la mesa donde se van a dejar los microscopios",
"Medir la temperatura y humedad del almacén de reactivos"
]
},
{
enunciado: "Un negociador 'evasivo' se caracteriza por:",
correcta: "Intentar posponer o esquivar la resolución de los problemas",
incorrectas: [
"Hablar constantemente sobre temas de investigación técnica avanzada",
"Llegar siempre puntual a todas las citas con los proveedores"
]
},
{
enunciado: "La fase de propuestas en la negociación sigue a la de:",
correcta: "Discusión o intercambio de información",
incorrectas: [
"Firma del acuerdo definitivo y entrega de las llaves del centro",
"Selección del personal técnico para el nuevo laboratorio"
]
},
{
enunciado: "El arbitraje voluntario requiere que:",
correcta: "Ambas partes acepten someterse a la decisión de un tercero",
incorrectas: [
"El técnico superior trabaje sin cobrar durante el periodo de prueba",
"Se utilicen reactivos de baja calidad para abaratar el diagnóstico"
]
},
{
enunciado: "La conciliación es un paso previo en el que el conciliador:",
correcta: "Se limita a facilitar el diálogo sin proponer soluciones propias",
incorrectas: [
"Dicta una sentencia judicial contra la dirección de la empresa",
"Sustituye al técnico en sus tareas de análisis microbiológico"
]
}
];