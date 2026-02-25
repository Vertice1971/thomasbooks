'use strict';

var PREGUNTAS = [
{
enunciado: "En el proceso de creación de una empresa, la 'localización' debe decidirse basándose en:",
correcta: "Factores estratégicos como la proximidad a clientes, proveedores y costes del local",
incorrectas: [
"La preferencia estética del emprendedor por un barrio o zona geográfica concreta",
"La disponibilidad exclusiva de plazas de aparcamiento gratuitas para la dirección"
]
},
{
enunciado: "La elección de la forma jurídica de una empresa depende principalmente de:",
correcta: "El número de socios, el capital disponible y el grado de responsabilidad asumida",
incorrectas: [
"El tipo de reactivos químicos que se vayan a utilizar en el laboratorio clínico",
"La nacionalidad de los proveedores de instrumental técnico de diagnóstico"
]
},
{
enunciado: "El Plan de Viabilidad económica tiene como objetivo fundamental:",
correcta: "Demostrar que el proyecto es capaz de generar beneficios y ser sostenible",
incorrectas: [
"Listar los nombres y apellidos de todos los futuros empleados del centro",
"Justificar el cumplimiento de las normas de seguridad e higiene en el trabajo"
]
},
{
enunciado: "Un trámite legal imprescindible para la constitución de una Sociedad Limitada es:",
correcta: "La obtención de la Certificación Negativa del Nombre en el Registro Mercantil",
incorrectas: [
"La compra de una póliza de seguros contra incendios de cobertura internacional",
"El registro de la propiedad intelectual de cada análisis realizado en el centro"
]
},
{
enunciado: "La principal diferencia entre un empresario individual y una sociedad mercantil es:",
correcta: "La responsabilidad limitada al capital aportado en el caso de las sociedades",
incorrectas: [
"La obligación de pagar impuestos sobre los beneficios obtenidos anualmente",
"La capacidad legal para contratar a técnicos superiores de laboratorio titulados"
]
},
{
enunciado: "En el análisis del sector, las 'barreras de entrada' son:",
correcta: "Obstáculos que dificultan la aparición de nuevos competidores en el mercado",
incorrectas: [
"Las medidas físicas de seguridad para impedir el acceso al laboratorio",
"Los protocolos técnicos que impiden mezclar reactivos de distintas marcas"
]
},
{
enunciado: "El Código de Identificación Fiscal (CIF) es ahora sustituido en España por:",
correcta: "El Número de Identificación Fiscal (NIF) de la persona jurídica",
incorrectas: [
"La Licencia de Apertura y Funcionamiento otorgada por el ayuntamiento",
"El número de registro en el Colegio Oficial de Técnicos de Laboratorio"
]
},
{
enunciado: "Las subvenciones a fondo perdido para emprendedores se caracterizan por:",
correcta: "No tener obligación de devolución si se cumplen las condiciones de la concesión",
incorrectas: [
"Ser préstamos con un tipo de interés variable referenciado al Euríbor",
"Estar destinadas exclusivamente a la compra de mobiliario de oficina usado"
]
},
{
enunciado: "La escritura pública de constitución debe realizarse obligatoriamente ante:",
correcta: "Un notario",
incorrectas: [
"El director del servicio público de empleo estatal",
"Un técnico superior con más de diez años de experiencia"
]
},
{
enunciado: "El análisis DAFO en la creación de una empresa sirve para evaluar:",
correcta: "Fortalezas y debilidades internas frente a oportunidades y amenazas externas",
incorrectas: [
"Únicamente los activos fijos y pasivos corrientes del balance de situación",
"La distribución física de los puestos de trabajo dentro del laboratorio clínico"
]
},
{
enunciado: "La Licencia de Actividad es un trámite que se gestiona en:",
correcta: "El Ayuntamiento donde se ubicará el local de la empresa",
incorrectas: [
"La Agencia Tributaria para el pago del Impuesto sobre Sociedades",
"El Registro de la Propiedad para inscribir los bienes inmuebles"
]
},
{
enunciado: "El capital social mínimo para constituir una Sociedad Limitada en España es actualmente de:",
correcta: "1 euro (aunque con obligaciones de reserva hasta alcanzar los 3.000 euros)",
incorrectas: [
"60.000 euros desembolsados íntegramente mediante transferencia bancaria",
"La suma de los sueldos brutos anuales de todos los técnicos del centro"
]
},
{
enunciado: "El estudio de mercado debe permitir conocer, entre otros datos:",
correcta: "El perfil de los clientes potenciales y el comportamiento de la competencia",
incorrectas: [
"La estructura molecular exacta de los reactivos suministrados por el proveedor",
"El número de serie de los microscopios utilizados por laboratorios extranjeros"
]
},
{
enunciado: "La Tesorería General de la Seguridad Social interviene en la puesta en marcha para:",
correcta: "Inscribir la empresa y dar de alta a los trabajadores en el sistema",
incorrectas: [
"Validar la calidad técnica de los análisis de diagnóstico realizados",
"Conceder las patentes de nuevos métodos de investigación microbiológica"
]
},
{
enunciado: "Una ventaja de la franquicia como forma de creación de empresa es:",
correcta: "Contar con una marca consolidada y el 'saber hacer' (know-how) del franquiciador",
incorrectas: [
"La total libertad para cambiar los procesos técnicos y la imagen corporativa",
"No tener que pagar ningún tipo de canon o comisión por las ventas realizadas"
]
},
{
enunciado: "El Plan de Operaciones dentro del proyecto empresarial describe:",
correcta: "Los recursos técnicos y los procesos necesarios para prestar el servicio",
incorrectas: [
"La biografía detallada de los socios fundadores y sus méritos académicos",
"La previsión de ventas netas para los próximos diez ejercicios económicos"
]
},
{
enunciado: "La responsabilidad subsidiaria de los socios implica que:",
correcta: "Responden con su patrimonio personal si el de la sociedad es insuficiente",
incorrectas: [
"Deben trabajar obligatoriamente como técnicos de laboratorio en el centro",
"Tienen derecho a cobrar el doble que los técnicos superiores contratados"
]
},
{
enunciado: "El Registro Mercantil es el organismo encargado de:",
correcta: "Dar publicidad oficial a los actos jurídicos de las sociedades mercantiles",
incorrectas: [
"Almacenar las muestras biológicas peligrosas de todos los laboratorios",
"Controlar el cumplimiento de la jornada laboral de los técnicos superiores"
]
},
{
enunciado: "En un análisis del sector, el 'poder de negociación de los proveedores' es alto si:",
correcta: "Existen pocos suministradores de un producto crítico para el laboratorio",
incorrectas: [
"El laboratorio puede fabricar sus propios reactivos de forma sencilla y barata",
"Hay una gran cantidad de empresas que venden el mismo instrumental técnico"
]
},
{
enunciado: "La capitalización del desempleo (pago único) permite:",
correcta: "Percibir el importe de la prestación para financiar la inversión inicial",
incorrectas: [
"Cobrar el paro mientras se trabaja por cuenta ajena en otro laboratorio",
"Pagar las multas de la inspección de trabajo con los fondos del estado"
]
},
{
enunciado: "El objeto social de una empresa es:",
correcta: "La actividad o actividades a las que se va a dedicar la sociedad",
incorrectas: [
"La finalidad benéfica de los beneficios obtenidos por el laboratorio",
"El conjunto de técnicos que trabajan de forma coordinada en el centro"
]
},
{
enunciado: "Un Plan de Marketing debe definir, entre otros puntos:",
correcta: "La estrategia de precios, comunicación y canales de distribución",
incorrectas: [
"La fórmula química de los colorantes utilizados en las tinciones",
"El número de extintores necesarios según la superficie del local"
]
},
{
enunciado: "La Declaración Censal (Modelo 036 o 037) sirve para:",
correcta: "Comunicar a Hacienda el inicio de la actividad y las obligaciones tributarias",
incorrectas: [
"Solicitar el carné de manipulador de alimentos para los técnicos",
"Informar al ayuntamiento sobre el nivel de ruido de las centrífugas"
]
},
{
enunciado: "Se entiende por 'entorno general' de la empresa:",
correcta: "Factores externos (económicos, legales, sociales) que afectan a todas las empresas",
incorrectas: [
"El espacio físico inmediato donde se sitúan las mesas de trabajo técnico",
"La relación personal entre los técnicos superiores y la dirección del centro"
]
},
{
enunciado: "El 'umbral de rentabilidad' en el plan de viabilidad indica:",
correcta: "A partir de qué volumen de ventas la empresa deja de tener pérdidas",
incorrectas: [
"La temperatura máxima que pueden soportar los reactivos sin degradarse",
"El número máximo de análisis que puede realizar un técnico por hora"
]
},
{
enunciado: "Las Sociedades Laborales se caracterizan porque:",
correcta: "La mayoría del capital social es propiedad de los trabajadores",
incorrectas: [
"Todos los socios deben tener obligatoriamente el título de médico",
"Están exentas de cumplir cualquier normativa de prevención de riesgos"
]
},
{
enunciado: "El trámite de 'Afiliación' en la Seguridad Social consiste en:",
correcta: "El acto administrativo por el que la persona se incorpora al sistema",
incorrectas: [
"El pago de la primera nómina al técnico superior de laboratorio",
"La firma del contrato de arrendamiento del local de la empresa"
]
},
{
enunciado: "La segmentación del mercado consiste en:",
correcta: "Dividir a los clientes potenciales en grupos con características similares",
incorrectas: [
"Separar las áreas del laboratorio según el tipo de muestra analizada",
"Clasificar las facturas de los proveedores por orden de vencimiento"
]
},
{
enunciado: "El Documento Único Electrónico (DUE) permite:",
correcta: "Realizar múltiples trámites de constitución de forma telemática",
incorrectas: [
"Identificar al paciente en todos los centros de salud del país",
"Garantizar que los reactivos químicos no han caducado todavía"
]
},
{
enunciado: "En la puesta en marcha, el alta en el IAE es obligatorio para:",
correcta: "Todas las empresas, aunque muchas están exentas del pago del impuesto",
incorrectas: [
"Solo los laboratorios que realizan análisis de carácter privado",
"Únicamente los técnicos que trabajan por cuenta propia como autónomos"
]
},
{
enunciado: "La inversión inicial en el plan de viabilidad incluye:",
correcta: "La adquisición de activos necesarios para comenzar la actividad",
incorrectas: [
"Los gastos de papelería y suministros del segundo año de funcionamiento",
"Las posibles multas de tráfico del director técnico de la empresa"
]
},
{
enunciado: "El 'Estudio del Sector' analiza específicamente:",
correcta: "La estructura competitiva del ámbito concreto donde opera la empresa",
incorrectas: [
"El estado general de la economía mundial y la inflación del país",
"La normativa internacional sobre el transporte de muestras biológicas"
]
},
{
enunciado: "Una Sociedad Cooperativa busca principalmente:",
correcta: "Satisfacer las necesidades de sus socios mediante una actividad común",
incorrectas: [
"Maximizar el beneficio económico de un único inversor externo",
"Evitar la contratación de técnicos titulados para ahorrar costes"
]
},
{
enunciado: "La legalización de los Libros Oficiales se realiza en:",
correcta: "El Registro Mercantil",
incorrectas: [
"La comisaría de policía más cercana al centro sanitario",
"El Colegio de Abogados de la provincia donde resida el dueño"
]
},
{
enunciado: "El resumen ejecutivo del proyecto empresarial tiene como fin:",
correcta: "Ofrecer una visión rápida y atractiva de los puntos clave del negocio",
incorrectas: [
"Detallar cada uno de los pasos técnicos de un análisis microbiológico",
"Registrar todas las llamadas telefónicas realizadas durante el proceso"
]
},
{
enunciado: "El entorno específico o microentorno incluye a:",
correcta: "Proveedores, clientes, competidores y productos sustitutivos",
incorrectas: [
"La política monetaria y los tipos de interés fijados por el banco central",
"La evolución de la pirámide de población a nivel nacional y europeo"
]
},
{
enunciado: "Las pymes (Pequeñas y Medianas Empresas) se definen por:",
correcta: "Su número de trabajadores, volumen de negocio o balance general",
incorrectas: [
"La edad media de los técnicos superiores que forman su plantilla",
"La cantidad de reactivos químicos que almacenan en sus dependencias"
]
},
{
enunciado: "La protección de datos (RGPD) es un trámite obligatorio que afecta a:",
correcta: "Cualquier empresa que maneje datos de carácter personal",
incorrectas: [
"Solo los laboratorios que realizan análisis genéticos avanzados",
"Únicamente las sociedades que tienen más de cincuenta socios"
]
},
{
enunciado: "La ventaja competitiva es aquello que:",
correcta: "Hace que una empresa sea superior a sus competidores para los clientes",
incorrectas: [
"Permite al director técnico trabajar menos horas que sus subordinados",
"Obliga a la competencia a cerrar sus centros de diagnóstico por ley"
]
},
{
enunciado: "El plan de financiación detalla:",
correcta: "De dónde obtendrá la empresa el dinero para realizar las inversiones",
incorrectas: [
"El sueldo que cobrará cada técnico superior de laboratorio al mes",
"La lista de precios de los análisis químicos para los clientes finales"
]
}
];