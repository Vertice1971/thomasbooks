'use strict';

var PREGUNTAS = [
{
enunciado: "La investigación de mercados consiste en:",
correcta: "La recopilación y análisis sistemático de datos para la toma de decisiones comerciales",
incorrectas: [
"La inspección técnica de los niveles de pureza de los reactivos químicos",
"El registro contable de las nóminas de los técnicos superiores"
]
},
{
enunciado: "En el análisis de la competencia, los competidores directos son aquellos que:",
correcta: "Ofrecen el mismo producto o servicio al mismo mercado",
incorrectas: [
"Venden productos totalmente diferentes en otros países",
"Suministran las materias primas necesarias para el laboratorio"
]
},
{
enunciado: "El marketing mix se compone de las denominadas '4 P', que son:",
correcta: "Producto, Precio, Distribución (Place) y Promoción",
incorrectas: [
"Producción, Personal, Planificación y Presupuesto",
"Patentes, Procesos, Protocolos y Pruebas"
]
},
{
enunciado: "La segmentación de mercados es el proceso de:",
correcta: "Dividir el mercado en grupos homogéneos de consumidores con necesidades similares",
incorrectas: [
"Separar físicamente las muestras de sangre de las de orina",
"Clasificar a los proveedores según el tiempo de entrega del material"
]
},
{
enunciado: "Una fuente de información secundaria es aquella que:",
correcta: "Ya existe y ha sido elaborada por otros para fines distintos",
incorrectas: [
"Obtenemos nosotros mismos mediante encuestas directas a los técnicos",
"Proviene de la observación directa de los pacientes en el centro"
]
},
{
enunciado: "El ciclo de vida del producto describe las etapas de:",
correcta: "Introducción, crecimiento, madurez y declive",
incorrectas: [
"Compra, almacenamiento, utilización y eliminación de residuos",
"Diseño, calibración, análisis y emisión de informe técnico"
]
},
{
enunciado: "La estrategia de precios de 'penetración' consiste en:",
correcta: "Fijar precios bajos inicialmente para captar cuota de mercado rápidamente",
incorrectas: [
"Establecer precios muy altos para dar imagen de exclusividad técnica",
"Cobrar exactamente lo mismo que el laboratorio más antiguo de la zona"
]
},
{
enunciado: "El canal de distribución es el camino que sigue el producto desde:",
correcta: "El productor hasta el consumidor final",
incorrectas: [
"La recepción de la muestra hasta la entrega del resultado del análisis",
"El laboratorio central hasta sus sucursales en la misma provincia"
]
},
{
enunciado: "La promoción tiene como objetivo principal:",
correcta: "Informar, persuadir y recordar al mercado la existencia del producto",
incorrectas: [
"Ascender de categoría profesional a los técnicos de laboratorio",
"Reducir el gasto en material fungible para aumentar el beneficio"
]
},
{
enunciado: "La publicidad se diferencia de la venta personal en que es:",
correcta: "Masiva, impersonal y de pago",
incorrectas: [
"Individualizada y basada en el contacto directo con el paciente",
"Un servicio gratuito prestado por los medios de comunicación estatales"
]
},
{
enunciado: "El 'merchandising' consiste en un conjunto de técnicas para:",
correcta: "Favorecer la venta del producto en el punto de venta",
incorrectas: [
"Analizar la composición química de los reactivos de la competencia",
"Gestionar las vacaciones y turnos de los técnicos del centro"
]
},
{
enunciado: "La técnica de atención al cliente 'AIDA' responde a las siglas de:",
correcta: "Atención, Interés, Deseo y Acción",
incorrectas: [
"Análisis, Informe, Diagnóstico y Archivo",
"Aptitud, Inteligencia, Destreza y Agilidad"
]
},
{
enunciado: "En marketing, el producto se define como:",
correcta: "Cualquier bien, servicio o idea capaz de satisfacer una necesidad",
incorrectas: [
"Únicamente los objetos físicos que el técnico puede tocar",
"El beneficio neto obtenido tras realizar un proceso de diagnóstico"
]
},
{
enunciado: "El análisis DAFO estudia de la empresa sus:",
correcta: "Debilidades, Amenazas, Fortalezas y Oportunidades",
incorrectas: [
"Deudas, Activos, Facturas y Operaciones",
"Departamentos, Áreas, Funciones y Objetivos"
]
},
{
enunciado: "Una estrategia de distribución 'exclusiva' implica vender el producto:",
correcta: "A través de un único intermediario en una zona geográfica",
incorrectas: [
"Únicamente a pacientes que tengan un nivel de renta muy elevado",
"Solo durante los fines de semana y festivos nacionales"
]
},
{
enunciado: "La marca tiene como función:",
correcta: "Identificar y diferenciar el producto de los de la competencia",
incorrectas: [
"Indicar el precio de venta recomendado por el colegio oficial",
"Garantizar que el técnico que realizó el análisis es titulado"
]
},
{
enunciado: "El 'posicionamiento' de un producto es:",
correcta: "El lugar que ocupa el producto en la mente del consumidor",
incorrectas: [
"La ubicación física de los reactivos en las estanterías del laboratorio",
"El puesto que ocupa la empresa en el ranking de facturación nacional"
]
},
{
enunciado: "Las encuestas son una técnica de investigación de mercados de tipo:",
correcta: "Cuantitativa",
incorrectas: [
"Cualitativa basada en la introspección del técnico",
"Administrativa para el control de la jornada laboral"
]
},
{
enunciado: "La distribución intensiva busca:",
correcta: "Llegar al mayor número posible de puntos de venta",
incorrectas: [
"Vender solo a través de laboratorios de alta tecnología",
"Centrar el esfuerzo comercial en una única ciudad pequeña"
]
},
{
enunciado: "La propaganda se diferencia de la publicidad en que su objetivo es:",
correcta: "Difundir ideas o doctrinas, no necesariamente vender un producto",
incorrectas: [
"Ser mucho más cara y utilizar solo medios de comunicación impresos",
"Estar prohibida en el sector de la sanidad y el diagnóstico clínico"
]
},
{
enunciado: "Un producto 'perro' en la matriz BCG es aquel que tiene:",
correcta: "Baja cuota de mercado y bajo crecimiento",
incorrectas: [
"Alta rentabilidad y requiere poca inversión técnica",
"Gran demanda pero solo entre los técnicos de laboratorio"
]
},
{
enunciado: "La fidelización de clientes busca:",
correcta: "Mantener una relación duradera y estable con el cliente",
incorrectas: [
"Evitar que el paciente pueda acudir a otros laboratorios por contrato",
"Regalar material técnico usado a los clientes más antiguos"
]
},
{
enunciado: "El precio de 'descremación' consiste en:",
correcta: "Fijar un precio alto inicial para captar a los clientes menos sensibles al precio",
incorrectas: [
"Bajar el precio de los análisis hasta eliminar a toda la competencia",
"Vender los servicios técnicos a precio de coste durante diez años"
]
},
{
enunciado: "La atención al cliente de calidad requiere:",
correcta: "Empatía, rapidez, fiabilidad y buena comunicación",
incorrectas: [
"Suministrar información técnica extremadamente compleja al paciente",
"Cobrar por adelantado todos los servicios solicitados al centro"
]
},
{
enunciado: "En la investigación cualitativa, el 'focus group' es:",
correcta: "Una reunión de un grupo reducido para discutir sobre un producto",
incorrectas: [
"Un conjunto de técnicos que analizan muestras bajo un microscopio",
"La base de datos de los precios de los reactivos de la competencia"
]
},
{
enunciado: "El envase (packaging) cumple funciones de:",
correcta: "Protección, transporte e información comercial",
incorrectas: [
"Reducción del peso neto de los reactivos químicos",
"Ocultación de la fecha de caducidad del material sanitario"
]
},
{
enunciado: "La venta personal permite:",
correcta: "Adaptar el mensaje a las necesidades específicas de cada cliente",
incorrectas: [
"Llegar a millones de consumidores de forma simultánea y barata",
"Evitar que el técnico tenga que hablar directamente con el usuario"
]
},
{
enunciado: "Los canales de distribución cortos tienen:",
correcta: "Pocos intermediarios entre el productor y el consumidor",
incorrectas: [
"Una longitud física de menos de cien metros dentro del laboratorio",
"Solo técnicos superiores trabajando en el departamento de ventas"
]
},
{
enunciado: "Las relaciones públicas buscan:",
correcta: "Crear y mantener una imagen positiva de la empresa ante la sociedad",
incorrectas: [
"Aumentar el número de amistades personales del director del centro",
"Vender reactivos químicos a través de las redes sociales privadas"
]
},
{
enunciado: "La elasticidad de la demanda respecto al precio indica:",
correcta: "Cómo varía la cantidad demandada ante cambios en el precio",
incorrectas: [
"El tiempo que tarda el técnico en realizar un análisis clínico",
"La resistencia de los guantes de látex utilizados en el laboratorio"
]
},
{
enunciado: "El telemarketing es una técnica de venta basada en:",
correcta: "El uso del teléfono para contactar con clientes potenciales",
incorrectas: [
"La utilización de la televisión para emitir anuncios de laboratorios",
"El envío de muestras biológicas a través de drones teledirigidos"
]
},
{
enunciado: "Un mercado de competencia perfecta se caracteriza por:",
correcta: "Muchos compradores y vendedores con productos homogéneos",
incorrectas: [
"Una sola empresa que domina toda la oferta de análisis clínicos",
"Precios fijados por el sindicato de técnicos más representativo"
]
},
{
enunciado: "La cartera de productos es:",
correcta: "El conjunto de todos los productos y servicios que ofrece la empresa",
incorrectas: [
"El maletín donde el técnico transporta el instrumental de campo",
"La lista de deudas pendientes de los clientes con el laboratorio"
]
},
{
enunciado: "La publicidad subliminal es aquella que:",
correcta: "Se percibe de forma inconsciente por el espectador",
incorrectas: [
"Aparece en periódicos técnicos especializados de gran tirada",
"Es emitida por radio durante las horas de menor audiencia"
]
},
{
enunciado: "La encuesta personal permite obtener información:",
correcta: "Más profunda y detallada pero con mayor coste",
incorrectas: [
"De forma anónima y extremadamente rápida mediante internet",
"Exclusivamente sobre la salud física de los técnicos superiores"
]
},
{
enunciado: "El marketing directo consiste en:",
correcta: "Contactar directamente con consumidores individuales preseleccionados",
incorrectas: [
"Vender los reactivos químicos en la puerta del laboratorio",
"Eliminar el departamento de marketing para ahorrar costes"
]
},
{
enunciado: "El servicio post-venta incluye actividades como:",
correcta: "Instalación, mantenimiento, garantías y resolución de quejas",
incorrectas: [
"La limpieza del laboratorio antes de que lleguen los clientes",
"El cobro de los análisis clínicos antes de realizar la toma de muestras"
]
},
{
enunciado: "Una muestra representativa es:",
correcta: "Un subgrupo de la población que refleja fielmente las características del total",
incorrectas: [
"Un pequeño frasco de reactivo químico que se regala a los técnicos",
"El primer paciente que entra en el centro sanitario cada mañana"
]
},
{
enunciado: "La distribución selectiva se produce cuando:",
correcta: "Se eligen solo algunos puntos de venta que cumplen ciertos criterios",
incorrectas: [
"El técnico elige a qué pacientes quiere realizar el análisis",
"Solo se venden productos que han sido seleccionados por el Estado"
]
},
{
enunciado: "El objetivo de la publicidad informativa es:",
correcta: "Dar a conocer un nuevo producto o explicar su funcionamiento",
incorrectas: [
"Atacar directamente a la imagen de los laboratorios competidores",
"Convencer al técnico de que debe trabajar más horas por el mismo sueldo"
]
}
];