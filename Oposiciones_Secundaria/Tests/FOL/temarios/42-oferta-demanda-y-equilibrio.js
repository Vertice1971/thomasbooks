'use strict';

var PREGUNTAS = [
{
enunciado: "La ley de la demanda establece que, manteniendo todo lo demás constante:",
correcta: "Al aumentar el precio de un bien, disminuye la cantidad demandada del mismo",
incorrectas: [
"Al aumentar la renta de los consumidores, disminuye siempre el consumo de bienes",
"Al aumentar el precio, los productores ofrecen menos cantidad al mercado"
]
},
{
enunciado: "Un desplazamiento de la curva de demanda hacia la derecha puede ser causado por:",
correcta: "Un aumento en la renta de los consumidores para un bien normal",
incorrectas: [
"Una mejora tecnológica en el proceso de producción del bien",
"Un aumento en el precio de un bien complementario"
]
},
{
enunciado: "Si dos bienes son sustitutivos, un aumento en el precio de uno de ellos provoca:",
correcta: "Un aumento en la demanda del otro bien",
incorrectas: [
"Una disminución en la demanda del otro bien",
"Que la curva de oferta de ambos bienes se desplace a la izquierda"
]
},
{
enunciado: "Los bienes complementarios son aquellos que:",
correcta: "Se consumen conjuntamente para satisfacer una necesidad",
incorrectas: [
"Pueden reemplazarse entre sí según su precio de mercado",
"No guardan ninguna relación técnica ni económica entre ellos"
]
},
{
enunciado: "La curva de oferta suele tener pendiente positiva porque:",
correcta: "A mayores precios, los productores están dispuestos a ofrecer más cantidad",
incorrectas: [
"A mayores precios, los consumidores desean comprar más unidades",
"Los costes de producción disminuyen siempre que aumenta el precio de venta"
]
},
{
enunciado: "Una mejora tecnológica en la fabricación de reactivos químicos provocará:",
correcta: "Un desplazamiento de la curva de oferta hacia la derecha",
incorrectas: [
"Un desplazamiento de la curva de demanda hacia la izquierda",
"Un aumento inmediato del precio de equilibrio por escasez"
]
},
{
enunciado: "El equilibrio del mercado se produce en el punto donde:",
correcta: "La cantidad demandada es igual a la cantidad ofrecida",
incorrectas: [
"El Estado fija el precio máximo de venta para los laboratorios",
"Los costes fijos de la empresa igualan a los beneficios netos"
]
},
{
enunciado: "Si el precio de mercado es superior al precio de equilibrio, se produce:",
correcta: "Un exceso de oferta o excedente",
incorrectas: [
"Un exceso de demanda o escasez",
"Un equilibrio inestable por falta de compradores técnicos"
]
},
{
enunciado: "Cuando existe un exceso de demanda en el mercado, la tendencia del precio es:",
correcta: "A subir hasta alcanzar el nuevo punto de equilibrio",
incorrectas: [
"A bajar para incentivar el consumo de las familias",
"A mantenerse fijo por intervención directa del sector público"
]
},
{
enunciado: "La elasticidad-precio de la demanda mide:",
correcta: "La sensibilidad de la cantidad demandada ante variaciones en el precio",
incorrectas: [
"El cambio en el coste total de producción al variar la tecnología",
"La variación de la renta de los técnicos tras una subida de impuestos"
]
},
{
enunciado: "Se dice que una demanda es inelástica cuando:",
correcta: "La variación porcentual de la cantidad es menor que la del precio",
incorrectas: [
"Un pequeño cambio en el precio provoca que la demanda caiga a cero",
"El consumidor deja de comprar el bien independientemente del precio"
]
},
{
enunciado: "Los bienes de primera necesidad suelen tener una demanda:",
correcta: "Inelástica",
incorrectas: [
"Perfectamente elástica",
"Unitaria respecto al gasto total"
]
},
{
enunciado: "Si la elasticidad de la demanda es mayor que 1 (elástica), una subida de precio provocará:",
correcta: "Una disminución del ingreso total de la empresa",
incorrectas: [
"Un aumento proporcional de los beneficios por unidad vendida",
"Que los consumidores compren más cantidad por miedo a nuevas subidas"
]
},
{
enunciado: "Un desplazamiento de la curva de oferta hacia la izquierda puede deberse a:",
correcta: "Un aumento en el precio de los factores productivos (salarios, energía)",
incorrectas: [
"Un aumento en el número de empresas que operan en el mercado",
"Una disminución del precio del bien en el mercado de valores"
]
},
{
enunciado: "La elasticidad-renta de la demanda permite clasificar los bienes en:",
correcta: "Normales e inferiores",
incorrectas: [
"Sustitutivos y complementarios",
"Elásticos e inelásticos"
]
},
{
enunciado: "Un bien inferior es aquel cuya demanda disminuye cuando:",
correcta: "Aumenta la renta de los consumidores",
incorrectas: [
"Disminuye el precio de los bienes sustitutivos técnicos",
"Aumenta el precio de los reactivos de laboratorio"
]
},
{
enunciado: "La elasticidad cruzada de la demanda entre dos bienes complementarios es:",
correcta: "Negativa",
incorrectas: [
"Positiva",
"Igual a la unidad"
]
},
{
enunciado: "La curva de oferta se desplaza a la derecha si:",
correcta: "Bajan los impuestos sobre la producción",
incorrectas: [
"Aumentan los costes de transporte de las muestras biológicas",
"Disminuye la preferencia de los usuarios por el servicio"
]
},
{
enunciado: "En el corto plazo, la elasticidad de la oferta suele ser:",
correcta: "Más inelástica que en el largo plazo",
incorrectas: [
"Perfectamente elástica debido a la tecnología digital",
"Infinita por la capacidad de almacenamiento de productos"
]
},
{
enunciado: "Si el Estado fija un precio máximo por debajo del nivel de equilibrio, aparecerá:",
correcta: "Escasez en el mercado",
incorrectas: [
"Un excedente de producción que las empresas no podrán vender",
"Un aumento en la calidad técnica de los servicios prestados"
]
},
{
enunciado: "La elasticidad-precio de la demanda es unitaria cuando:",
correcta: "El cambio porcentual en el precio y en la cantidad es idéntico",
incorrectas: [
"La curva de demanda es una línea totalmente horizontal",
"El precio del bien no influye en absoluto en la decisión de compra"
]
},
{
enunciado: "Un aumento simultáneo de la oferta y la demanda provocará siempre:",
correcta: "Un aumento en la cantidad de equilibrio",
incorrectas: [
"Un aumento en el precio de equilibrio",
"Una disminución de los costes marginales de producción"
]
},
{
enunciado: "La pendiente de la curva de demanda es generalmente:",
correcta: "Negativa",
incorrectas: [
"Positiva",
"Nula en los mercados de competencia perfecta"
]
},
{
enunciado: "Si la demanda de servicios de laboratorio es muy elástica, una pequeña rebaja de precios:",
correcta: "Aumentará mucho la cantidad demandada",
incorrectas: [
"No tendrá efecto sobre el número de análisis realizados",
"Reducirá el ingreso total percibido por el centro"
]
},
{
enunciado: "El excedente del consumidor es la diferencia entre:",
correcta: "Lo que el consumidor está dispuesto a pagar y lo que realmente paga",
incorrectas: [
"El precio de coste y el precio de venta al público",
"La renta disponible y el gasto total en bienes de lujo"
]
},
{
enunciado: "La oferta de un bien es perfectamente inelástica si la curva es:",
correcta: "Vertical",
incorrectas: [
"Horizontal",
"Creciente con pendiente de 45 grados"
]
},
{
enunciado: "La elasticidad cruzada positiva indica que los bienes son:",
correcta: "Sustitutivos",
incorrectas: [
"Complementarios",
"Independientes"
]
},
{
enunciado: "Si disminuye la renta de los consumidores y la demanda de un bien aumenta, este es:",
correcta: "Un bien inferior",
incorrectas: [
"Un bien de lujo",
"Un bien normal"
]
},
{
enunciado: "Los factores que desplazan la curva de oferta son:",
correcta: "Costes de producción, tecnología, expectativas y número de oferentes",
incorrectas: [
"Renta de los consumidores, gustos y precios de bienes relacionados",
"Únicamente el precio del bien en el mercado actual"
]
},
{
enunciado: "Un aumento en los costes de la energía para un laboratorio desplazará:",
correcta: "La curva de oferta hacia la izquierda",
incorrectas: [
"La curva de demanda hacia la derecha",
"La curva de oferta hacia la derecha"
]
},
{
enunciado: "En una demanda perfectamente elástica, el valor de la elasticidad es:",
correcta: "Infinito",
incorrectas: [
"Cero",
"Uno"
]
},
{
enunciado: "La curva de demanda de un técnico por un bien de lujo es:",
correcta: "Muy elástica respecto a la renta",
incorrectas: [
"Perfectamente inelástica respecto al tiempo",
"Decreciente solo si el Estado subvenciona el bien"
]
},
{
enunciado: "Si aumenta el precio de los reactivos y baja la cantidad vendida de probetas, ambos son:",
correcta: "Bienes complementarios",
incorrectas: [
"Bienes sustitutivos",
"Bienes independientes"
]
},
{
enunciado: "El mercado tiende al equilibrio de forma automática mediante:",
correcta: "La variación de los precios",
incorrectas: [
"La regulación de los delegados de personal",
"La emisión de informes técnicos de la inspección"
]
},
{
enunciado: "La elasticidad-precio de la oferta depende fundamentalmente de:",
correcta: "La flexibilidad de los factores productivos y del tiempo",
incorrectas: [
"Los gustos y preferencias de los técnicos de laboratorio",
"La renta media de la población en edad de trabajar"
]
},
{
enunciado: "Un bien cuya demanda no varía ante cambios en el precio tiene una elasticidad:",
correcta: "Igual a cero",
incorrectas: [
"Igual a uno",
"Superior a diez"
]
},
{
enunciado: "Si la renta aumenta un 10% y la demanda de un bien aumenta un 5%, el bien es:",
correcta: "Normal de primera necesidad",
incorrectas: [
"Inferior de baja calidad",
"Normal de lujo"
]
},
{
enunciado: "El efecto de un impuesto sobre las ventas suele ser:",
correcta: "Un desplazamiento de la curva de oferta hacia arriba/izquierda",
incorrectas: [
"Un aumento de la cantidad de equilibrio en el mercado",
"Un desplazamiento de la curva de demanda hacia la derecha"
]
},
{
enunciado: "La 'mano invisible' de Adam Smith hace referencia a:",
correcta: "La capacidad del mercado para autorregularse mediante los precios",
incorrectas: [
"La intervención del Estado en los sectores estratégicos",
"El poder de los sindicatos en la negociación colectiva"
]
},
{
enunciado: "Cuando la oferta es más elástica que la demanda, la carga de un impuesto recae más en:",
correcta: "El consumidor",
incorrectas: [
"El productor",
"El Estado"
]
}
];