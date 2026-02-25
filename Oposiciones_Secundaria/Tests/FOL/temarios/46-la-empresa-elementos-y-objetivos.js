'use strict';

var PREGUNTAS = [
{
enunciado: "La empresa se define desde un punto de vista económico como:",
correcta: "La unidad básica de producción que combina factores para crear bienes o servicios",
incorrectas: [
"Un conjunto de trabajadores que se asocian exclusivamente para fines sindicales",
"Una entidad sin ánimo de lucro dedicada a la beneficencia técnica"
]
},
{
enunciado: "Dentro de los elementos de la empresa, el 'capital instrumental' está formado por:",
correcta: "Los activos técnicos, maquinaria, existencias y recursos financieros",
incorrectas: [
"La suma de los conocimientos y habilidades de los técnicos de laboratorio",
"El conjunto de normas legales que regulan el funcionamiento del centro"
]
},
{
enunciado: "El objetivo de 'maximización del beneficio' consiste en:",
correcta: "Lograr la mayor diferencia posible entre ingresos totales y costes totales",
incorrectas: [
"Aumentar el número de técnicos contratados con independencia del gasto",
"Reducir el precio de venta por debajo del coste de los reactivos"
]
},
{
enunciado: "Según el criterio de titularidad del capital, una empresa es pública si:",
correcta: "El capital pertenece al Estado o a alguna entidad de derecho público",
incorrectas: [
"Sus acciones cotizan libremente en la Bolsa de valores nacional",
"Presta servicios sanitarios a personas con bajos recursos económicos"
]
},
{
enunciado: "Las pequeñas y medianas empresas (PYMES) se clasifican principalmente por:",
correcta: "Su número de trabajadores, volumen de negocio y balance general",
incorrectas: [
"La calidad técnica de los microscopios que utilizan en sus análisis",
"El número de años que llevan operando en el sector químico-sanitario"
]
},
{
enunciado: "El área funcional de producción se encarga de:",
correcta: "La transformación de los inputs en bienes o servicios finales",
incorrectas: [
"La captación de recursos financieros en los mercados de capitales",
"El diseño de las campañas publicitarias del laboratorio de diagnóstico"
]
},
{
enunciado: "El área de recursos humanos tiene entre sus funciones:",
correcta: "La selección, formación, gestión y motivación del personal",
incorrectas: [
"El mantenimiento preventivo de las máquinas de análisis clínico",
"La compra de materias primas a proveedores extranjeros de confianza"
]
},
{
enunciado: "El área comercial o de marketing se ocupa de:",
correcta: "El estudio del mercado y la distribución y venta de los productos",
incorrectas: [
"La elaboración de la contabilidad y el pago de impuestos estatales",
"La investigación básica en nuevas fórmulas de reactivos químicos"
]
},
{
enunciado: "El área de inversión y financiación se centra en:",
correcta: "La obtención y gestión de los fondos necesarios para la actividad",
incorrectas: [
"La supervisión técnica de los procesos de esterilización del material",
"La atención directa a las reclamaciones de los usuarios del centro"
]
},
{
enunciado: "Los elementos inmateriales de la empresa incluyen:",
correcta: "La organización, la cultura empresarial, la imagen y el 'know-how'",
incorrectas: [
"El mobiliario de oficina y los ordenadores del laboratorio técnico",
"Las facturas pendientes de cobro de los clientes del sector privado"
]
},
{
enunciado: "Una empresa del sector primario es aquella que:",
correcta: "Extrae recursos directamente de la naturaleza",
incorrectas: [
"Transforma materias primas en productos semielaborados",
"Ofrece servicios de consultoría técnica a otros laboratorios"
]
},
{
enunciado: "El empresario, en el pensamiento económico moderno, se considera:",
correcta: "El agente que asume riesgos y coordina los factores productivos",
incorrectas: [
"Únicamente el propietario que aporta el capital inicial al proyecto",
"Un funcionario público encargado de supervisar la sanidad privada"
]
},
{
enunciado: "Los objetivos sociales de la empresa se refieren a:",
correcta: "La creación de empleo, respeto al medio ambiente y ética profesional",
incorrectas: [
"La acumulación de reservas de oro para situaciones de crisis nacional",
"El control de la vida personal de los técnicos superiores del centro"
]
},
{
enunciado: "Una Sociedad Anónima (S.A.) se caracteriza porque:",
correcta: "El capital está dividido en acciones y la responsabilidad es limitada",
incorrectas: [
"Los socios deben trabajar obligatoriamente en el laboratorio de análisis",
"No existe un capital mínimo legal para su constitución formal"
]
},
{
enunciado: "El entorno general de la empresa incluye factores:",
correcta: "Económicos, políticos, legales, sociales y tecnológicos",
incorrectas: [
"Referidos exclusivamente a los clientes y proveedores del laboratorio",
"Internos de la propia organización como la motivación técnica"
]
},
{
enunciado: "La responsabilidad social corporativa (RSC) implica:",
correcta: "Integrar voluntariamente preocupaciones sociales y medioambientales",
incorrectas: [
"Pagar exclusivamente los impuestos mínimos marcados por la ley",
"Contratar solo a técnicos que no pertenezcan a ningún sindicato"
]
},
{
enunciado: "En la clasificación por ámbito geográfico, una empresa multinacional es la que:",
correcta: "Opera en varios países con una estrategia global",
incorrectas: [
"Tiene técnicos de laboratorio de diversas nacionalidades en su plantilla",
"Exporta ocasionalmente reactivos químicos a un país vecino"
]
},
{
enunciado: "El valor añadido de la empresa es:",
correcta: "La utilidad que la empresa incorpora a los bienes y servicios que produce",
incorrectas: [
"El precio final de los análisis antes de aplicar los descuentos",
"La suma de los salarios de los técnicos más los beneficios del dueño"
]
},
{
enunciado: "El área de I+D+i se dedica a:",
correcta: "La investigación, desarrollo e innovación técnica de productos o procesos",
incorrectas: [
"La limpieza y desinfección diaria de las instalaciones sanitarias",
"El cobro de las facturas a las compañías de seguros privadas"
]
},
{
enunciado: "Una empresa individual se caracteriza porque:",
correcta: "El propietario es una persona física que responde con todo su patrimonio",
incorrectas: [
"Se requiere un mínimo de cinco técnicos titulados para su apertura",
"La gestión debe ser llevada a cabo por un consejo de administración"
]
},
{
enunciado: "El objetivo de crecimiento de la empresa busca:",
correcta: "Aumentar la cuota de mercado y el tamaño de la organización",
incorrectas: [
"Reducir el número de sucursales para ahorrar en costes de alquiler",
"Mantener la producción estable sin introducir nuevas tecnologías"
]
},
{
enunciado: "Las cooperativas son empresas que buscan principalmente:",
correcta: "Satisfacer las necesidades de sus socios en condiciones ventajosas",
incorrectas: [
"La obtención del máximo beneficio posible para inversores externos",
"El monopolio de la venta de material técnico en una comunidad autónoma"
]
},
{
enunciado: "El capital humano está integrado por:",
correcta: "Los conocimientos, experiencias y motivación de los trabajadores",
incorrectas: [
"El dinero que la empresa tiene disponible en la caja del laboratorio",
"Los uniformes y equipos de protección individual de la plantilla"
]
},
{
enunciado: "El entorno específico de la empresa incluye:",
correcta: "Clientes, proveedores, competidores y entidades financieras",
incorrectas: [
"La tasa de inflación nacional y la política fiscal del Gobierno",
"La pirámide de edad de la población del país donde opera"
]
},
{
enunciado: "Las empresas del sector terciario son aquellas cuya actividad es:",
correcta: "La prestación de servicios",
incorrectas: [
"La construcción de infraestructuras para laboratorios químicos",
"El cultivo de microorganismos para su venta a la industria farmacéutica"
]
},
{
enunciado: "La sinergia en la empresa ocurre cuando:",
correcta: "El resultado del conjunto es superior a la suma de las partes aisladas",
incorrectas: [
"Dos departamentos del laboratorio tienen objetivos contradictorios",
"El coste de los reactivos sube al mismo ritmo que el precio de venta"
]
},
{
enunciado: "Una empresa mediana tiene un número de trabajadores comprendido entre:",
correcta: "50 y 249",
incorrectas: [
"1 y 9",
"10 y 49"
]
},
{
enunciado: "La misión de la empresa es:",
correcta: "Su razón de ser, lo que justifica su existencia en el mercado",
incorrectas: [
"La lista de objetivos técnicos para el próximo trimestre",
"El presupuesto asignado a la compra de material fungible"
]
},
{
enunciado: "La visión de la empresa representa:",
correcta: "La imagen de lo que la empresa quiere ser a largo plazo",
incorrectas: [
"El balance de situación al cierre del ejercicio económico",
"La descripción detallada del puesto de técnico superior"
]
},
{
enunciado: "Una Sociedad de Responsabilidad Limitada (S.R.L.) tiene el capital dividido en:",
correcta: "Participaciones",
incorrectas: [
"Acciones",
"Bonos del tesoro"
]
},
{
enunciado: "El elemento 'organización' de la empresa se refiere a:",
correcta: "Las relaciones de autoridad, coordinación y comunicación internas",
incorrectas: [
"El registro oficial de la empresa en la Seguridad Social",
"La disposición física de las mesas en el laboratorio de análisis"
]
},
{
enunciado: "Las fuentes de financiación propia son aquellas que:",
correcta: "No tienen que ser devueltas, como el capital social y las reservas",
incorrectas: [
"Provienen de préstamos bancarios a largo plazo con intereses bajos",
"Se obtienen mediante la venta de reactivos usados a otros técnicos"
]
},
{
enunciado: "El flujo real de la empresa consiste en:",
correcta: "La entrada de materias primas y salida de productos finales",
incorrectas: [
"El cobro de facturas y el pago de las nóminas de los trabajadores",
"El envío de correos electrónicos entre los técnicos de laboratorio"
]
},
{
enunciado: "La clasificación de empresas según la forma jurídica distingue entre:",
correcta: "Empresa individual y sociedades mercantiles",
incorrectas: [
"Empresas de limpieza y empresas de diagnóstico clínico",
"Empresas nacionales y empresas con sede en el extranjero"
]
},
{
enunciado: "Los grupos de interés o 'stakeholders' son:",
correcta: "Cualquier persona o grupo afectado por la actividad de la empresa",
incorrectas: [
"Únicamente los accionistas que tienen más del 50% del capital",
"Los competidores directos que buscan el cierre del laboratorio"
]
},
{
enunciado: "Una empresa local es aquella que desarrolla su actividad en:",
correcta: "Una población o ciudad determinada",
incorrectas: [
"Toda la geografía de una comunidad autónoma",
"Internet, vendiendo sus servicios a nivel mundial"
]
},
{
enunciado: "El subsistema de administración de la empresa se ocupa de:",
correcta: "La planificación, organización, dirección y control",
incorrectas: [
"La realización técnica de los cultivos microbiológicos",
"La compra de reactivos y el almacenamiento de muestras"
]
},
{
enunciado: "La deslocalización empresarial consiste en:",
correcta: "Trasladar la producción a países con menores costes",
incorrectas: [
"Cambiar la sede del laboratorio al centro de la ciudad",
"Vender los servicios técnicos solo a través de una página web"
]
},
{
enunciado: "Los costes fijos de una empresa son aquellos que:",
correcta: "No varían con el nivel de producción a corto plazo",
incorrectas: [
"Dependen directamente de la cantidad de análisis realizados",
"Se pagan únicamente cuando el laboratorio obtiene beneficios"
]
},
{
enunciado: "La eficiencia técnica en la empresa se logra cuando:",
correcta: "Se produce la mayor cantidad con el mínimo de factores posible",
incorrectas: [
"El beneficio neto es superior al del año anterior",
"Todos los técnicos poseen el título de doctor en ciencias"
]
}
];