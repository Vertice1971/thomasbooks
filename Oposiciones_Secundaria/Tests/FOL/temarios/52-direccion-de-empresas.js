'use strict';

var PREGUNTAS = [
{
enunciado: "La función de dirección en la empresa consiste básicamente en:",
correcta: "Combinar los recursos humanos y materiales para alcanzar los objetivos",
incorrectas: [
"Realizar las tareas técnicas de laboratorio en sustitución de los técnicos",
"Garantizar que no existan beneficios económicos al final del ejercicio"
]
},
{
enunciado: "Dentro de las funciones de dirección, la 'planificación' implica:",
correcta: "Fijar objetivos y determinar las estrategias para lograrlos",
incorrectas: [
"Controlar las horas exactas de entrada y salida del personal de limpieza",
"Vender los reactivos caducados a laboratorios de otros países"
]
},
{
enunciado: "El estilo de dirección 'autoritario' o autocrático se caracteriza porque:",
correcta: "El directivo toma todas las decisiones sin consultar a los subordinados",
incorrectas: [
"Los técnicos superiores deciden libremente su horario y carga de trabajo",
"La dirección delega la responsabilidad total en los sindicatos del centro"
]
},
{
enunciado: "El estilo de dirección 'democrático' busca:",
correcta: "Fomentar la participación de los trabajadores en la toma de decisiones",
incorrectas: [
"Que el director sea elegido por sorteo entre los pacientes del hospital",
"Eliminar cualquier tipo de jerarquía dentro del laboratorio de análisis"
]
},
{
enunciado: "El estilo 'laissez-faire' (dejar hacer) implica que el directivo:",
correcta: "Concede total libertad a los subordinados para actuar y decidir",
incorrectas: [
"Vigila constantemente cada movimiento del técnico en el microscopio",
"Prohíbe la comunicación informal entre los miembros de la plantilla"
]
},
{
enunciado: "La autoridad lineal es aquella que:",
correcta: "Se ejerce directamente sobre los subordinados de un nivel inferior",
incorrectas: [
"Se otorga exclusivamente a los técnicos que tienen más de tres títulos",
"No permite dar órdenes relacionadas con la seguridad en el laboratorio"
]
},
{
enunciado: "La delegación de autoridad consiste en:",
correcta: "Asignar a un subordinado la facultad de tomar decisiones y ejecutar tareas",
incorrectas: [
"Obligar a los técnicos a pagar de su bolsillo los reactivos químicos",
"Despedir a los mandos intermedios para reducir los costes de gestión"
]
},
{
enunciado: "Una de las funciones principales del mando intermedio es:",
correcta: "Servir de enlace entre la alta dirección y los niveles operativos",
incorrectas: [
"Diseñar la estrategia política del país en materia de sanidad pública",
"Realizar las compras personales de alimentos para el director general"
]
},
{
enunciado: "La habilidad de dirección 'técnica' se refiere al:",
correcta: "Conocimiento y dominio de las herramientas y procesos específicos",
incorrectas: [
"Capacidad de hablar cinco idiomas para tratar con clientes extranjeros",
"Talento para convencer a los técnicos de trabajar sin cobrar incentivos"
]
},
{
enunciado: "La habilidad 'conceptual' es más necesaria en:",
correcta: "La alta dirección para ver la empresa como un todo",
incorrectas: [
"Los técnicos de base que realizan los análisis de orina diarios",
"El personal encargado de la vigilancia nocturna de las instalaciones"
]
},
{
enunciado: "El liderazgo en la dirección se define como la capacidad de:",
correcta: "Influir en las personas para que trabajen con entusiasmo por un fin común",
incorrectas: [
"Sancionar económicamente a los empleados que cometen errores leves",
"Ocupar el despacho más grande y lujoso del centro de diagnóstico"
]
},
{
enunciado: "La autoridad funcional es la que se ejerce sobre:",
correcta: "Actividades específicas independientemente de quién las realice",
incorrectas: [
"Los familiares de los técnicos que visitan el laboratorio ocasionalmente",
"El precio de venta de los reactivos químicos en el mercado internacional"
]
},
{
enunciado: "En la función de dirección, el 'control' consiste en:",
correcta: "Comparar los resultados obtenidos con los objetivos previstos",
incorrectas: [
"Instalar cámaras de seguridad en los aseos de los trabajadores",
"Impedir que los técnicos hablen entre ellos durante la jornada"
]
},
{
enunciado: "La responsabilidad en la delegación de autoridad:",
correcta: "Se comparte; el que delega sigue siendo el responsable final",
incorrectas: [
"Desaparece por completo para el directivo que cede la tarea",
"Recae exclusivamente sobre el técnico que tiene menos antigüedad"
]
},
{
enunciado: "Un directivo con estilo 'paternalista' se caracteriza por:",
correcta: "Preocuparse por el bienestar de los empleados pero sin dejarles decidir",
incorrectas: [
"Tratar a los trabajadores de forma agresiva y despectiva",
"Permitir que los hijos de los técnicos trabajen en el laboratorio"
]
},
{
enunciado: "La función de 'organización' dentro de la dirección consiste en:",
correcta: "Diseñar la estructura de relaciones y asignar recursos a las tareas",
incorrectas: [
"Limpiar las gradillas y los tubos de ensayo al finalizar el turno",
"Celebrar reuniones diarias para hablar de temas de actualidad política"
]
},
{
enunciado: "Las habilidades humanas de dirección son esenciales para:",
correcta: "Motivar, resolver conflictos y trabajar eficazmente con otros",
incorrectas: [
"Saber arreglar las averías eléctricas de las estufas de cultivo",
"Calcular el balance de situación sin ayuda de programas informáticos"
]
},
{
enunciado: "La 'cadena de mando' representa:",
correcta: "La línea continua de autoridad que une a todos los miembros",
incorrectas: [
"El conjunto de normas de seguridad para el manejo de muestras",
"La lista de precios de los análisis que se entrega a los clientes"
]
},
{
enunciado: "Un mando intermedio suele ser un:",
correcta: "Jefe de departamento, sección o supervisor de laboratorio",
incorrectas: [
"Accionista mayoritario que no trabaja físicamente en la empresa",
"Becario que acaba de empezar sus prácticas de técnico superior"
]
},
{
enunciado: "La dirección por objetivos (DPO) se basa en:",
correcta: "Establecer metas conjuntas entre directivo y subordinado",
incorrectas: [
"Imponer castigos si no se alcanza la producción máxima cada día",
"Cambiar los objetivos de la empresa cada vez que cambia el Gobierno"
]
},
{
enunciado: "La teoría X de McGregor asume que los trabajadores:",
correcta: "Tienen aversión al trabajo y necesitan ser controlados y presionados",
incorrectas: [
"Buscan responsabilidades y son creativos de forma natural",
"Solo aceptan órdenes si vienen firmadas por un técnico superior"
]
},
{
enunciado: "La teoría Y de McGregor sostiene que los trabajadores:",
correcta: "Consideran el trabajo como algo natural y pueden autodirigirse",
incorrectas: [
"Trabajan únicamente para conseguir dinero y no tienen ambición",
"Necesitan una vigilancia extrema para no cometer errores técnicos"
]
},
{
enunciado: "La 'comunicación' como función directiva permite:",
correcta: "Transmitir la visión, objetivos e instrucciones a toda la organización",
incorrectas: [
"Difundir rumores sobre la vida privada de los técnicos de laboratorio",
"Ocultar los fallos de gestión a los propietarios de la empresa"
]
},
{
enunciado: "La toma de decisiones es una tarea:",
correcta: "Inherente a todos los niveles de dirección",
incorrectas: [
"Exclusiva del conserje que abre la puerta del laboratorio",
"Que solo se realiza una vez al año durante la junta de socios"
]
},
{
enunciado: "Un obstáculo para la delegación eficaz es:",
correcta: "La desconfianza del jefe en la capacidad de sus subordinados",
incorrectas: [
"El exceso de instrumental técnico disponible en el almacén",
"La titulación académica de técnico superior del personal sanitario"
]
},
{
enunciado: "La autoridad formal se deriva de:",
correcta: "El puesto que se ocupa en la estructura organizativa",
incorrectas: [
"La fuerza física o el tono de voz que utilice el director",
"La cantidad de reactivos que el técnico sea capaz de mezclar"
]
},
{
enunciado: "El estilo de dirección 'burocrático' se centra en:",
correcta: "El cumplimiento estricto de las normas y reglamentos escritos",
incorrectas: [
"La improvisación constante según el estado de ánimo del jefe",
"El fomento de la creatividad artística de los técnicos de base"
]
},
{
enunciado: "La dirección de recursos humanos debe buscar:",
correcta: "El equilibrio entre los objetivos de la empresa y los del personal",
incorrectas: [
"El despido de los técnicos que tengan más experiencia profesional",
"La sustitución de todos los trabajadores por máquinas inteligentes"
]
},
{
enunciado: "Las 'decisiones estratégicas' son aquellas que afectan:",
correcta: "A la empresa a largo plazo y son tomadas por la alta dirección",
incorrectas: [
"Al orden de limpieza de los tubos de ensayo en el turno de tarde",
"A la marca de bolígrafos que se compran para la administración"
]
},
{
enunciado: "La motivación es una función directiva orientada a:",
correcta: "Impulsar a los trabajadores a actuar para satisfacer necesidades",
incorrectas: [
"Obligar a los técnicos a leer el código de comercio cada mañana",
"Reducir el salario neto para que el trabajador se esfuerce más"
]
},
{
enunciado: "Un líder 'transaccional' se basa en:",
correcta: "Intercambios de recompensas por el cumplimiento de objetivos",
incorrectas: [
"Inspirar un cambio profundo en los valores de los técnicos",
"Ignorar los resultados del laboratorio mientras se pague la nómina"
]
},
{
enunciado: "El líder 'transformacional' busca:",
correcta: "Motivar a los seguidores hacia una visión compartida y el cambio",
incorrectas: [
"Mantener la empresa exactamente igual durante toda su existencia",
"Vigilar que los técnicos no gasten demasiados guantes de látex"
]
},
{
enunciado: "La autoridad moral se basa en:",
correcta: "El prestigio, la coherencia y el ejemplo del directivo",
incorrectas: [
"La firma de un decreto por parte del ministerio de sanidad",
"La posesión de las llaves del almacén de reactivos inflamables"
]
},
{
enunciado: "La 'unidad de mando' como principio directivo significa que:",
correcta: "Cada subordinado debe recibir órdenes de un solo jefe",
incorrectas: [
"Todos los laboratorios del país deben tener el mismo director",
"Los técnicos solo pueden hablar con sus compañeros de turno"
]
},
{
enunciado: "La habilidad 'diagnóstica' permite al directivo:",
correcta: "Visualizar la respuesta adecuada ante una situación compleja",
incorrectas: [
"Realizar análisis de sangre sin necesidad de usar instrumental",
"Adivinar qué reactivos se van a caducar antes de comprarlos"
]
},
{
enunciado: "Un directivo que no delega suele sufrir de:",
correcta: "Sobrecarga de trabajo y falta de tiempo para lo estratégico",
incorrectas: [
"Exceso de tiempo libre para jugar con los microscopios",
"Un aumento injustificado de su sueldo bruto por parte del Estado"
]
},
{
enunciado: "La función de 'gestión' (staffing) se encarga de:",
correcta: "Cubrir y mantener los puestos de la estructura organizacional",
incorrectas: [
"Limpiar las vitrinas de gases del laboratorio de diagnóstico",
"Organizar las cenas de navidad para los familiares de los socios"
]
},
{
enunciado: "El mando intermedio debe poseer gran habilidad:",
correcta: "Humana y técnica",
incorrectas: [
"De adivinación del futuro económico",
"Para la fabricación artesanal de reactivos químicos"
]
},
{
enunciado: "La 'coordinación' busca:",
correcta: "Sincronizar las acciones de los diferentes departamentos",
incorrectas: [
"Que todos los técnicos vistan uniformes del mismo color exacto",
"Impedir que el laboratorio compre tecnología de otros países"
]
},
{
enunciado: "En la dirección moderna, la autoridad se entiende más como:",
correcta: "Servicio y apoyo para facilitar el trabajo de los subordinados",
incorrectas: [
"Poder absoluto para humillar a los técnicos superiores titulados",
"Capacidad de cambiar las leyes del país a favor del laboratorio"
]
}
];