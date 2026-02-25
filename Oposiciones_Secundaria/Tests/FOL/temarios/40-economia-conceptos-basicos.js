'use strict';

var PREGUNTAS = [
{
enunciado: "La economía se define como la ciencia que estudia la asignación de recursos escasos para:",
correcta: "Satisfacer necesidades humanas mediante bienes de uso alternativo",
incorrectas: [
"Garantizar el pleno empleo de los técnicos de laboratorio por decreto",
"Eliminar por completo el deseo de consumo de bienes de lujo"
]
},
{
enunciado: "El problema de la escasez económica tiene un carácter:",
correcta: "Relativo, al existir una disparidad entre necesidades y medios disponibles",
incorrectas: [
"Absoluto, derivado exclusivamente de la falta de materias primas",
"Temporal, que desaparece en las fases de expansión del ciclo"
]
},
{
enunciado: "Se denomina coste de oportunidad a:",
correcta: "El valor de la mejor alternativa a la que se renuncia al elegir una opción",
incorrectas: [
"La suma de los costes fijos y variables de un proceso productivo",
"El precio de mercado de los reactivos tras aplicar el IVA"
]
},
{
enunciado: "Los factores productivos tradicionales son:",
correcta: "Tierra, trabajo y capital",
incorrectas: [
"Consumo, ahorro e inversión pública",
"Oferta, demanda y precio de equilibrio"
]
},
{
enunciado: "En economía, el factor 'tierra' incluye:",
correcta: "Todos los recursos naturales utilizables en el proceso productivo",
incorrectas: [
"Únicamente los solares destinados a la construcción de laboratorios",
"El valor inmobiliario de la sede social de la empresa"
]
},
{
enunciado: "El factor 'capital' se refiere específicamente a:",
correcta: "Bienes producidos que sirven para producir otros bienes o servicios",
incorrectas: [
"El dinero en efectivo depositado en las cuentas de la empresa",
"La suma de los conocimientos técnicos de los trabajadores"
]
},
{
enunciado: "La actividad económica de 'producción' consiste en:",
correcta: "Combinar factores para crear bienes o servicios útiles",
incorrectas: [
"Distribuir la renta entre los diferentes estamentos sociales",
"Agotar la utilidad de los bienes para satisfacer necesidades"
]
},
{
enunciado: "La población activa está integrada por:",
correcta: "Personas de 16 o más años que suministran mano de obra o desean hacerlo",
incorrectas: [
"La totalidad de ciudadanos que perciben una prestación por desempleo",
"Aquellos que habiendo cumplido los 65 años siguen en activo por elección"
]
},
{
enunciado: "La tasa de actividad se calcula como el cociente entre:",
correcta: "La población activa y la población en edad de trabajar",
incorrectas: [
"El número de parados y el total de la población residente",
"Los técnicos con contrato y los estudiantes de formación profesional"
]
},
{
enunciado: "Los bienes de consumo se distinguen de los bienes de capital en que:",
correcta: "Los primeros satisfacen directamente una necesidad y los segundos no",
incorrectas: [
"Los de capital son siempre más caros que los de consumo final",
"Solo los de consumo pueden ser propiedad de personas físicas"
]
},
{
enunciado: "La división del trabajo permite aumentar la productividad mediante:",
correcta: "La especialización de los trabajadores en tareas concretas",
incorrectas: [
"El incremento de la jornada laboral sin aumentar los salarios",
"La sustitución de técnicos titulados por maquinaria automatizada"
]
},
{
enunciado: "La población inactiva incluye a personas que:",
correcta: "No tienen empleo ni lo buscan, como estudiantes o jubilados",
incorrectas: [
"Trabajan a tiempo parcial menos de quince horas semanales",
"Están de baja temporal por accidente de trabajo o enfermedad"
]
},
{
enunciado: "La frontera de posibilidades de producción (FPP) representa:",
correcta: "La cantidad máxima de bienes que puede producir una economía con sus recursos",
incorrectas: [
"El límite geográfico para la exportación de productos sanitarios",
"La relación entre los impuestos indirectos y el consumo privado"
]
},
{
enunciado: "Un desplazamiento de la FPP hacia la derecha indica:",
correcta: "Crecimiento económico por aumento de recursos o mejora tecnológica",
incorrectas: [
"Una situación de ineficiencia por infrautilización del capital",
"Un aumento del desempleo en el sector de los servicios técnicos"
]
},
{
enunciado: "El flujo circular de la renta describe la relación entre:",
correcta: "Economías domésticas y empresas a través de los mercados",
incorrectas: [
"El Ministerio de Hacienda y las entidades bancarias internacionales",
"Los sindicatos y las asociaciones patronales del sector químico"
]
},
{
enunciado: "En una economía de mercado, la escasez se resuelve mediante:",
correcta: "El sistema de precios y la interacción de oferta y demanda",
incorrectas: [
"La planificación centralizada por parte de los órganos del Estado",
"El reparto equitativo de bienes según el número de hijos del técnico"
]
},
{
enunciado: "Se consideran bienes públicos aquellos caracterizados por:",
correcta: "La no exclusión y la no rivalidad en su consumo",
incorrectas: [
"Ser propiedad exclusiva del Estado y de uso prohibido a privados",
"Tener un coste de producción nulo gracias a la automatización"
]
},
{
enunciado: "La microeconomía estudia el comportamiento de:",
correcta: "Los agentes individuales como familias, empresas y mercados específicos",
incorrectas: [
"Las magnitudes globales como el PIB o la inflación nacional",
"Las relaciones comerciales entre los diferentes continentes"
]
},
{
enunciado: "La macroeconomía se ocupa de:",
correcta: "El funcionamiento de la economía en su conjunto y sus variables agregadas",
incorrectas: [
"La fijación del precio de un reactivo concreto en el laboratorio",
"La gestión interna de los recursos humanos de una pequeña empresa"
]
},
{
enunciado: "La inversión en 'capital humano' consiste en:",
correcta: "Mejorar la formación y cualificación de los trabajadores",
incorrectas: [
"Aumentar el número de empleados sin variar su nivel técnico",
"Adquirir uniformes y material de protección para la plantilla"
]
},
{
enunciado: "El sector primario de la actividad económica comprende:",
correcta: "Actividades de extracción directa de recursos de la naturaleza",
incorrectas: [
"La transformación industrial de materias primas en el laboratorio",
"La prestación de servicios de consultoría técnica y sanitaria"
]
},
{
enunciado: "El sector secundario incluye actividades relacionadas con:",
correcta: "La industria, la construcción y la transformación de bienes",
incorrectas: [
"La sanidad, el transporte y la educación de los ciudadanos",
"La agricultura, la ganadería y la explotación forestal"
]
},
{
enunciado: "El sector terciario o de servicios se caracteriza por:",
correcta: "Producir bienes inmateriales y actividades de apoyo a la producción",
incorrectas: [
"La obtención de metales pesados para su uso en investigación",
"La fabricación de maquinaria pesada para el análisis de muestras"
]
},
{
enunciado: "La pirámide de población es una herramienta para analizar:",
correcta: "La estructura de la población por sexo y edad en un momento dado",
incorrectas: [
"El nivel de renta per cápita de los técnicos de un país",
"La jerarquía de mando dentro de una organización empresarial"
]
},
{
enunciado: "El envejecimiento de la población condiciona la actividad económica al:",
correcta: "Aumentar la tasa de dependencia y la demanda de servicios sanitarios",
incorrectas: [
"Reducir la necesidad de innovación técnica en los laboratorios",
"Eliminar por completo el riesgo de desempleo en la población joven"
]
},
{
enunciado: "Un bien libre se diferencia de un bien económico en que:",
correcta: "Es abundante y no tiene precio ni requiere proceso productivo",
incorrectas: [
"Solo puede ser consumido por personas con rentas muy bajas",
"Su venta está prohibida por las leyes de comercio internacional"
]
},
{
enunciado: "La ley de rendimientos decrecientes establece que:",
correcta: "Añadir más de un factor variable a uno fijo reduce el incremento de producción",
incorrectas: [
"Los salarios deben bajar a medida que el técnico cumple años",
"La calidad del análisis empeora si se utilizan reactivos baratos"
]
},
{
enunciado: "El desarrollo sostenible busca compatibilizar el crecimiento económico con:",
correcta: "La preservación del medio ambiente y los recursos para el futuro",
incorrectas: [
"El aumento ilimitado de la jornada laboral de los técnicos",
"La eliminación de la propiedad privada en el sector sanitario"
]
},
{
enunciado: "La renta per cápita se obtiene dividiendo:",
correcta: "El Producto Interior Bruto entre el número de habitantes",
incorrectas: [
"El salario bruto entre las horas efectivamente trabajadas",
"La recaudación de impuestos entre el número de empresas"
]
},
{
enunciado: "La demanda de un bien suele disminuir cuando:",
correcta: "Aumenta su precio, manteniéndose constantes los demás factores",
incorrectas: [
"Mejoran las preferencias de los consumidores hacia dicho bien",
"Se incrementa la renta disponible de las economías domésticas"
]
},
{
enunciado: "La oferta de un bien tiende a aumentar si:",
correcta: "Mejora la tecnología aplicada a su proceso de producción",
incorrectas: [
"Se encarecen las materias primas necesarias para su fabricación",
"El Estado impone un impuesto especial sobre la venta del producto"
]
},
{
enunciado: "El equilibrio de mercado se alcanza cuando:",
correcta: "La cantidad ofrecida coincide con la cantidad demandada a un precio dado",
incorrectas: [
"Todas las empresas del sector obtienen el mismo beneficio neto",
"El Gobierno fija el precio de venta de forma obligatoria"
]
},
{
enunciado: "La especialización económica favorece el intercambio a través de:",
correcta: "El comercio y el uso del dinero como medio de pago",
incorrectas: [
"El trueque directo de servicios entre técnicos de laboratorio",
"La autarquía o autosuficiencia de cada unidad familiar"
]
},
{
enunciado: "Los fallos de mercado justifican:",
correcta: "La intervención del Estado para corregir ineficiencias o desigualdades",
incorrectas: [
"El cierre inmediato de las empresas que no tengan beneficios",
"La prohibición de la huelga en sectores estratégicos nacionales"
]
},
{
enunciado: "Se denomina productividad a la relación entre:",
correcta: "La cantidad producida y los factores empleados para ello",
incorrectas: [
"El beneficio total y el número de accionistas de la empresa",
"El salario base y el índice de precios al consumo anual"
]
},
{
enunciado: "Los bienes complementarios son aquellos que:",
correcta: "Deben utilizarse conjuntamente para satisfacer una necesidad",
incorrectas: [
"Pueden sustituirse entre sí para cumplir la misma función técnica",
"Se regalan con la compra de un equipo de análisis principal"
]
},
{
enunciado: "Un bien sustitutivo es aquel que:",
correcta: "Satisface la misma necesidad que otro bien",
incorrectas: [
"Aumenta su demanda cuando sube la renta del consumidor",
"Es de obligatoria adquisición por parte de los laboratorios"
]
},
{
enunciado: "La economía sumergida se refiere a:",
correcta: "Actividades económicas no declaradas que escapan al control oficial",
incorrectas: [
"La producción de bienes relacionados con la exploración marina",
"El intercambio de divisas en los mercados bursátiles extranjeros"
]
},
{
enunciado: "La eficiencia económica se logra cuando:",
correcta: "No es posible aumentar la producción de un bien sin reducir la de otro",
incorrectas: [
"Se gasta todo el presupuesto anual antes de finalizar el ejercicio",
"Todos los técnicos trabajan el máximo de horas extras permitidas"
]
},
{
enunciado: "La necesidad de elección surge debido a que:",
correcta: "Los recursos son limitados frente a necesidades ilimitadas",
incorrectas: [
"Existen demasiadas marcas de instrumental técnico en el mercado",
"El Estado obliga a los ciudadanos a consumir bienes públicos"
]
}
];