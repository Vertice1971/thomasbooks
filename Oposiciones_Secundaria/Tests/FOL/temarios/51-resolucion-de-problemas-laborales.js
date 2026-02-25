'use strict';

var PREGUNTAS = [
{
enunciado: "La toma de decisiones en el ámbito laboral se define como:",
correcta: "El proceso racional de elegir una alternativa entre varias para resolver una situación",
incorrectas: [
"La ejecución automática de las instrucciones del manual de laboratorio",
"La delegación sistemática de cualquier duda técnica al superior jerárquico"
]
},
{
enunciado: "La primera fase del proceso de resolución de problemas es:",
correcta: "Identificar y definir el problema con precisión",
incorrectas: [
"Implementar la solución más rápida para evitar el retraso técnico",
"Evaluar los resultados obtenidos tras aplicar una medida correctora"
]
},
{
enunciado: "En la evaluación de riesgos, el riesgo se calcula multiplicando:",
correcta: "La probabilidad de ocurrencia por la gravedad de las consecuencias",
incorrectas: [
"El número de técnicos presentes por el coste de los reactivos",
"La duración del turno laboral por la cantidad de análisis realizados"
]
},
{
enunciado: "La estrategia de resolución de problemas mediante 'ensayo y error' es adecuada cuando:",
correcta: "Las opciones son limitadas y el coste del error es muy bajo",
incorrectas: [
"Se manejan muestras biológicas de alta peligrosidad y contagio",
"El protocolo técnico exige una precisión absoluta en el diagnóstico"
]
},
{
enunciado: "El método de 'lluvia de ideas' (brainstorming) busca fomentar la creatividad mediante:",
correcta: "La generación libre de ideas sin críticas iniciales para luego evaluarlas",
incorrectas: [
"La selección inmediata de la idea propuesta por el jefe del laboratorio",
"El análisis estadístico estricto de los fallos cometidos en el pasado"
]
},
{
enunciado: "Una decisión programada es aquella que:",
correcta: "Se aplica a problemas repetitivos mediante reglas o procedimientos establecidos",
incorrectas: [
"Requiere una reunión urgente de la dirección para situaciones críticas",
"Depende exclusivamente de la intuición personal del técnico de guardia"
]
},
{
enunciado: "La técnica de los 'Seis sombreros para pensar' de Edward de Bono sirve para:",
correcta: "Analizar un problema desde seis perspectivas distintas (lógica, emocional, etc.)",
incorrectas: [
"Clasificar a los técnicos de laboratorio según su rango y vestimenta",
"Establecer los turnos de limpieza de las instalaciones sanitarias"
]
},
{
enunciado: "El análisis de causas mediante el 'Diagrama de Ishikawa' (espina de pescado) organiza la información por:",
correcta: "Categorías como mano de obra, máquinas, métodos y materiales",
incorrectas: [
"Orden cronológico de aparición de los síntomas del paciente",
"Nivel de estudios de los técnicos implicados en el proceso clínico"
]
},
{
enunciado: "La toma de decisiones bajo condiciones de incertidumbre ocurre cuando:",
correcta: "No se conocen las probabilidades de éxito de las alternativas disponibles",
incorrectas: [
"Existe un manual técnico que explica paso a paso qué debe hacerse",
"El laboratorio dispone de todos los reactivos necesarios para la prueba"
]
},
{
enunciado: "El sesgo de confirmación en la toma de decisiones consiste en:",
correcta: "Buscar solo información que respalde nuestra opinión previa",
incorrectas: [
"Confirmar mediante un segundo análisis el resultado de una muestra",
"Solicitar la firma del director técnico para validar un informe externo"
]
},
{
enunciado: "La técnica Delphi para resolver problemas se basa en:",
correcta: "Consultar a un panel de expertos de forma anónima y sucesiva",
incorrectas: [
"Realizar una votación a mano alzada entre todos los trabajadores",
"Elegir la solución que proponga la empresa con mayor facturación"
]
},
{
enunciado: "En la fase de evaluación de alternativas, se deben considerar criterios como:",
correcta: "Coste, tiempo, viabilidad técnica y aceptabilidad social",
incorrectas: [
"La marca comercial de las batas utilizadas por el personal sanitario",
"La distancia entre el laboratorio y el domicilio del gerente"
]
},
{
enunciado: "La creatividad mimética se basa en:",
correcta: "Adaptar soluciones que han funcionado con éxito en otros ámbitos",
incorrectas: [
"Inventar un proceso técnico totalmente nuevo sin referencias previas",
"Copiar los errores de la competencia para desprestigiar su imagen"
]
},
{
enunciado: "Un árbol de decisión es una herramienta que permite:",
correcta: "Visualizar gráficamente los posibles resultados de diferentes opciones",
incorrectas: [
"Clasificar las plantas medicinales utilizadas en el laboratorio",
"Organizar las vacaciones de los técnicos de forma jerárquica"
]
},
{
enunciado: "La 'sinéctica' es una técnica creativa que utiliza:",
correcta: "Analogías y metáforas para encontrar soluciones a problemas complejos",
incorrectas: [
"Cálculos matemáticos avanzados para determinar el pH de las muestras",
"La repetición mecánica de las tareas para mejorar la velocidad técnica"
]
},
{
enunciado: "El control de resultados es la última fase del proceso y sirve para:",
correcta: "Verificar si la solución aplicada ha resuelto el problema inicial",
incorrectas: [
"Archivar las facturas de los reactivos comprados durante el trimestre",
"Sancionar económicamente a los técnicos por preguntar sus dudas"
]
},
{
enunciado: "La toma de decisiones intuitiva se apoya principalmente en:",
correcta: "La experiencia acumulada y el reconocimiento de patrones",
incorrectas: [
"El lanzamiento de una moneda para elegir entre dos reactivos distintos",
"La aplicación estricta de una fórmula matemática de segundo grado"
]
},
{
enunciado: "En el ámbito laboral, los problemas 'abiertos' son aquellos que:",
correcta: "Admiten varias soluciones válidas dependiendo del enfoque",
incorrectas: [
"Se producen porque alguien ha dejado la puerta del laboratorio sin llave",
"Tienen una única respuesta numérica que aparece en el libro técnico"
]
},
{
enunciado: "La técnica SCAMPER para fomentar la creatividad utiliza acciones como:",
correcta: "Sustituir, Combinar, Adaptar, Modificar, Poner otros usos, Eliminar y Reordenar",
incorrectas: [
"Saludar, Caminar, Analizar, Medir, Probar, Escribir y Revisar",
"Seleccionar, Clasificar, Almacenar, Mezclar, Preparar, Enfriar y Recoger"
]
},
{
enunciado: "El riesgo residual es aquel que:",
correcta: "Permanece después de haber aplicado las medidas de control",
incorrectas: [
"Deriva de la gestión de los residuos químicos del laboratorio",
"Afecta únicamente a los técnicos que están en periodo de prácticas"
]
},
{
enunciado: "La heurística en la resolución de problemas se refiere a:",
correcta: "Atajos mentales o reglas empíricas que simplifican la decisión",
incorrectas: [
"El estudio de los virus a través de un microscopio electrónico",
"La obligación legal de contratar a un mediador para cada conflicto"
]
},
{
enunciado: "La toma de decisiones grupal suele tener como ventaja:",
correcta: "Una mayor variedad de puntos de vista y aceptación del acuerdo",
incorrectas: [
"La rapidez extrema en comparación con la decisión individual",
"La eliminación total de cualquier tipo de responsabilidad legal"
]
},
{
enunciado: "El pensamiento lateral busca resolver problemas mediante:",
correcta: "Caminos indirectos y creativos, rompiendo patrones habituales",
incorrectas: [
"La aplicación de la lógica matemática pura de forma vertical",
"El seguimiento estricto de las órdenes del director del centro"
]
},
{
enunciado: "Un factor que dificulta la toma de decisiones eficaz es:",
correcta: "La falta de información o el exceso de la misma (infoxicación)",
incorrectas: [
"El uso de guantes y mascarilla durante el proceso de análisis",
"La posesión de un título oficial de técnico superior de laboratorio"
]
},
{
enunciado: "En la evaluación de riesgos laborales (ERL), la probabilidad puede ser:",
correcta: "Baja, media o alta",
incorrectas: [
"Dulce, ácida o amarga",
"Roja, verde o azul"
]
},
{
enunciado: "La técnica de 'agrupamiento' (clustering) en creatividad sirve para:",
correcta: "Clasificar ideas generadas por similitud temática",
incorrectas: [
"Separar a los técnicos según su grupo sanguíneo para el estudio",
"Almacenar los reactivos químicos por orden alfabético de marca"
]
},
{
enunciado: "El principio de Pareto aplicado a los problemas sugiere que:",
correcta: "El 20% de las causas genera el 80% de los problemas",
incorrectas: [
"Todos los técnicos deben trabajar exactamente el mismo número de horas",
"El coste de los análisis debe ser igual al beneficio neto de la empresa"
]
},
{
enunciado: "La decisión por consenso requiere que:",
correcta: "Todos los miembros acepten la decisión final, aunque no sea su preferida",
incorrectas: [
"Se elija la opción que ha propuesto el técnico más joven del grupo",
"La dirección tome la medida sin consultar a ningún trabajador"
]
},
{
enunciado: "El bloqueo creativo puede superarse mediante técnicas como:",
correcta: "El cambio de entorno, el descanso o la técnica del extrañamiento",
incorrectas: [
"El aumento de la presión jerárquica y la amenaza de despido",
"La realización de tareas mecánicas durante 24 horas seguidas"
]
},
{
enunciado: "Una solución 'óptima' es aquella que:",
correcta: "Ofrece el mejor resultado posible dadas las restricciones existentes",
incorrectas: [
"Cuesta menos de diez euros y se implementa en cinco minutos",
"Ha sido diseñada por un ordenador sin intervención humana"
]
},
{
enunciado: "La técnica del 'Análisis de Campos de Fuerzas' estudia:",
correcta: "Las fuerzas impulsoras y las fuerzas frenadoras ante un cambio",
incorrectas: [
"La potencia eléctrica necesaria para las máquinas de diagnóstico",
"La atracción magnética entre los diferentes tipos de reactivos"
]
},
{
enunciado: "La 'incubación' en el proceso creativo es la etapa en la que:",
correcta: "El subconsciente trabaja en el problema mientras descansamos",
incorrectas: [
"Se mantienen los cultivos microbiológicos a temperatura constante",
"Se redacta el informe final con los resultados de los análisis"
]
},
{
enunciado: "El pensamiento convergente se utiliza para:",
correcta: "Evaluar las ideas y seleccionar la mejor solución posible",
incorrectas: [
"Generar el mayor número de ideas disparatadas en poco tiempo",
"Ignorar las normas de seguridad del laboratorio de diagnóstico"
]
},
{
enunciado: "La asunción de riesgos calculados implica:",
correcta: "Aceptar la posibilidad de fallo tras analizar sus consecuencias",
incorrectas: [
"Actuar de forma temeraria sin pensar en los efectos técnicos",
"No tomar ninguna decisión por miedo a cometer un error mínimo"
]
},
{
enunciado: "El método 'PNI' para evaluar soluciones consiste en analizar lo:",
correcta: "Positivo, Negativo e Interesante",
incorrectas: [
"Próximo, Necesario e Inmediato",
"Público, Notorio e Independiente"
]
},
{
enunciado: "La autoconfianza del técnico influye en la toma de decisiones:",
correcta: "Aportando seguridad y rapidez en situaciones habituales",
incorrectas: [
"Obligando a cambiar de opinión cada vez que el jefe entra al centro",
"Garantizando que nunca se cometerá un error en el diagnóstico clínico"
]
},
{
enunciado: "Un problema 'bien estructurado' es aquel que tiene:",
correcta: "Objetivos claros e información completa para su resolución",
incorrectas: [
"Una base física sólida fabricada con materiales de construcción",
"Muchos técnicos trabajando en él de forma desorganizada"
]
},
{
enunciado: "La creatividad disruptiva busca:",
correcta: "Romper con lo establecido y crear un cambio de paradigma",
incorrectas: [
"Mantener los mismos procesos técnicos durante varias décadas",
"Reducir el número de análisis realizados para ahorrar en reactivos"
]
},
{
enunciado: "El 'pensamiento de grupo' (groupthink) es un riesgo que implica:",
correcta: "La presión hacia la conformidad que anula el pensamiento crítico",
incorrectas: [
"La suma de las inteligencias de todos los técnicos del laboratorio",
"La elaboración de un manual de estilo para la ropa de trabajo"
]
},
{
enunciado: "La resolución de problemas en equipo fomenta:",
correcta: "La cohesión del grupo y la transferencia de conocimientos",
incorrectas: [
"La competitividad agresiva entre los técnicos superiores",
"El anonimato de quien comete los errores técnicos graves"
]
}
];