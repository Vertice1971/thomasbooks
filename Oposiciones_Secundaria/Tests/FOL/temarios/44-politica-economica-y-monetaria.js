'use strict';

var PREGUNTAS = [
{
enunciado: "La política fiscal se define como el conjunto de decisiones del Gobierno sobre:",
correcta: "El gasto público y los impuestos",
incorrectas: [
"La cantidad de dinero en circulación y los tipos de interés",
"La regulación de las patentes de reactivos en laboratorios"
]
},
{
enunciado: "Los Presupuestos Generales del Estado (PGE) son:",
correcta: "La previsión de ingresos y la autorización de gastos del sector público estatal",
incorrectas: [
"El balance de situación de todas las empresas privadas del país",
"Un registro de las deudas personales de los técnicos de la administración"
]
},
{
enunciado: "Se produce un déficit público cuando:",
correcta: "Los gastos públicos superan a los ingresos públicos en un ejercicio",
incorrectas: [
"Las exportaciones de muestras son menores que las importaciones",
"El número de técnicos en paro aumenta por encima del 10%"
]
},
{
enunciado: "El dinero fiduciario es aquel que:",
correcta: "Se basa en la confianza de que será aceptado como medio de pago",
incorrectas: [
"Tiene un valor intrínseco equivalente al metal con el que está fabricado",
"Solo puede ser emitido por laboratorios de análisis clínico autorizados"
]
},
{
enunciado: "El proceso de creación de dinero bancario se basa en:",
correcta: "El sistema de reservas fraccionarias que permite a los bancos prestar parte de los depósitos",
incorrectas: [
"La impresión física de billetes por parte de los bancos comerciales",
"El intercambio de divisas extranjeras en el mercado de valores"
]
},
{
enunciado: "La inflación se define como:",
correcta: "El crecimiento generalizado y continuo de los precios de una economía",
incorrectas: [
"El aumento del valor de la moneda nacional frente al dólar",
"La bajada de los tipos de interés para fomentar el consumo técnico"
]
},
{
enunciado: "El indicador más utilizado en España para medir la variación de los precios es:",
correcta: "El Índice de Precios al Consumo (IPC)",
incorrectas: [
"El Índice de Producción Industrial de material sanitario",
"El Euríbor a un año para préstamos hipotecarios"
]
},
{
enunciado: "La política monetaria en la zona euro es competencia de:",
correcta: "El Banco Central Europeo (BCE)",
incorrectas: [
"El Ministerio de Economía y Hacienda del Gobierno de España",
"La Comisión Nacional del Mercado de Valores (CNMV)"
]
},
{
enunciado: "Un instrumento de política fiscal expansiva sería:",
correcta: "Aumentar el gasto público o reducir los impuestos",
incorrectas: [
"Reducir las transferencias por desempleo a los técnicos",
"Elevar el coeficiente legal de reservas de los bancos"
]
},
{
enunciado: "El mercado de valores (la Bolsa) es un mercado donde se negocian:",
correcta: "Activos financieros como acciones y bonos",
incorrectas: [
"Contratos de trabajo indefinidos para el sector sanitario",
"Materias primas y reactivos químicos al por mayor"
]
},
{
enunciado: "La deflación es la situación económica caracterizada por:",
correcta: "Una caída generalizada y prolongada de los precios",
incorrectas: [
"Un aumento del poder adquisitivo de las empresas exportadoras",
"La estabilidad total de la oferta monetaria en el sistema"
]
},
{
enunciado: "El coeficiente de caja o de reservas es:",
correcta: "El porcentaje de depósitos que los bancos deben mantener sin prestar",
incorrectas: [
"La relación entre los beneficios del laboratorio y sus costes fijos",
"El interés que paga el Estado por los títulos de deuda pública"
]
},
{
enunciado: "La deuda pública es:",
correcta: "El conjunto de préstamos que el Estado solicita para financiar su déficit",
incorrectas: [
"La suma de las multas impagadas por las empresas del sector químico",
"El déficit comercial acumulado por la compra de tecnología exterior"
]
},
{
enunciado: "Un aumento de los tipos de interés es una medida de:",
correcta: "Política monetaria restrictiva",
incorrectas: [
"Política fiscal expansiva para fomentar la inversión técnica",
"Política de rentas para subir el salario de los técnicos"
]
},
{
enunciado: "La inflación de costes se produce cuando:",
correcta: "Aumenta el precio de los factores productivos (energía, salarios)",
incorrectas: [
"Los consumidores deciden ahorrar menos y gastar más",
"El Banco Central decide retirar billetes de la circulación"
]
},
{
enunciado: "El sistema financiero tiene como función principal:",
correcta: "Canalizar el ahorro de los excedentes hacia los prestatarios",
incorrectas: [
"Gestionar el pago de las nóminas de los centros de salud",
"Fabricar los reactivos necesarios para la investigación clínica"
]
},
{
enunciado: "Las acciones representan:",
correcta: "Partes alícuotas del capital social de una empresa",
incorrectas: [
"Títulos de deuda que garantizan un interés fijo anual",
"Permisos administrativos para abrir nuevos laboratorios"
]
},
{
enunciado: "La política fiscal restrictiva tiene como objetivo:",
correcta: "Frenar la inflación mediante la reducción de la demanda agregada",
incorrectas: [
"Estimular el crecimiento económico en periodos de crisis",
"Aumentar el número de técnicos contratados por el Estado"
]
},
{
enunciado: "El dinero legal está compuesto por:",
correcta: "Monedas y billetes emitidos por la institución competente",
incorrectas: [
"Tarjetas de crédito y cheques de viaje de empresas privadas",
"Pagarés de empresa firmados por los laboratorios de análisis"
]
},
{
enunciado: "El mercado primario de valores es aquel en el que:",
correcta: "Se emiten y venden activos financieros por primera vez",
incorrectas: [
"Los inversores intercambian acciones ya existentes",
"Se fijan los precios de los productos de primera necesidad"
]
},
{
enunciado: "La oferta monetaria (M3) incluye:",
correcta: "El efectivo en manos del público más los depósitos bancarios",
incorrectas: [
"Solo las monedas de curso legal y los lingotes de oro estatales",
"El valor total de las instalaciones de los centros de diagnóstico"
]
},
{
enunciado: "La hiperinflación se caracteriza por tasas de crecimiento de precios:",
correcta: "Extremadamente altas y fuera de control",
incorrectas: [
"Cercanas al 2% anual de forma estable y predecible",
"Negativas durante al menos tres trimestres consecutivos"
]
},
{
enunciado: "El Euríbor es:",
correcta: "El tipo de interés al que los bancos se prestan dinero entre sí",
incorrectas: [
"La moneda virtual utilizada exclusivamente en el sector sanitario",
"El índice que mide la rentabilidad media de las farmacias"
]
},
{
enunciado: "Un impuesto progresivo es aquel en el que:",
correcta: "El tipo impositivo aumenta a medida que aumenta la base imponible",
incorrectas: [
"Todos los ciudadanos pagan la misma cantidad absoluta de dinero",
"Solo se aplica a los productos químicos importados de fuera de la UE"
]
},
{
enunciado: "La CNMV tiene como misión:",
correcta: "Supervisar e inspeccionar los mercados de valores en España",
incorrectas: [
"Emitir los billetes de euro bajo mandato del Banco de España",
"Fijar el precio de los medicamentos en el sistema nacional de salud"
]
},
{
enunciado: "La base monetaria es:",
correcta: "El efectivo en manos del público más las reservas bancarias",
incorrectas: [
"La cantidad total de oro que custodia el Fondo Monetario Internacional",
"La suma de los salarios de todos los técnicos de la administración"
]
},
{
enunciado: "La política de rentas busca la estabilidad de precios mediante:",
correcta: "El control de salarios y beneficios empresariales",
incorrectas: [
"La manipulación del tipo de cambio de la moneda nacional",
"El aumento indiscriminado de la oferta de dinero bancario"
]
},
{
enunciado: "El dividendo es:",
correcta: "La parte del beneficio de la empresa que se reparte a los accionistas",
incorrectas: [
"El interés fijo que el Estado paga por las Letras del Tesoro",
"El descuento que se aplica a los técnicos por pronto pago"
]
},
{
enunciado: "La inflación de demanda ocurre cuando:",
correcta: "Los agentes económicos desean comprar más de lo que se produce",
incorrectas: [
"Las empresas deciden bajar los precios para liquidar existencias",
"El precio del petróleo cae bruscamente en los mercados mundiales"
]
},
{
enunciado: "Los estabilizadores automáticos son instrumentos que:",
correcta: "Atenúan las oscilaciones del ciclo económico sin intervención discrecional",
incorrectas: [
"Mantienen fijo el precio de los reactivos de análisis clínico",
"Impiden que los técnicos de laboratorio puedan ser despedidos"
]
},
{
enunciado: "El Banco de España tiene entre sus funciones:",
correcta: "Supervisar la solvencia de las entidades de crédito",
incorrectas: [
"Diseñar la política monetaria única de la zona euro",
"Aprobar los Presupuestos Generales del Estado cada año"
]
},
{
enunciado: "Un bono es un activo financiero de:",
correcta: "Renta fija",
incorrectas: [
"Renta variable dependiendo de los beneficios del laboratorio",
"Propiedad directa sobre la maquinaria de diagnóstico técnico"
]
},
{
enunciado: "La presión fiscal se calcula como:",
correcta: "El cociente entre los ingresos impositivos y el PIB",
incorrectas: [
"La diferencia entre el salario bruto y el salario neto del técnico",
"El número de inspecciones de trabajo realizadas en un año"
]
},
{
enunciado: "La estanflación es la combinación de:",
correcta: "Estancamiento económico (paro) con alta inflación",
incorrectas: [
"Estabilidad de precios con pleno empleo de técnicos titulados",
"Reducción del déficit público y aumento de las exportaciones"
]
},
{
enunciado: "La liquidez de un activo financiero es:",
correcta: "La facilidad para convertirse en dinero sin pérdida significativa de valor",
incorrectas: [
"El estado físico de los reactivos químicos utilizados en el análisis",
"La capacidad de la empresa para pagar las horas extras en efectivo"
]
},
{
enunciado: "El multiplicador del dinero bancario es inverso a:",
correcta: "El coeficiente legal de caja",
incorrectas: [
"El tipo impositivo del Impuesto de Sociedades",
"La tasa de inflación medida por el deflactor del PIB"
]
},
{
enunciado: "Los intermediarios financieros no bancarios incluyen:",
correcta: "Compañías de seguros y fondos de pensiones",
incorrectas: [
"Bancos comerciales y cajas de ahorro de ámbito regional",
"El Banco Central Europeo y el Fondo Monetario Internacional"
]
},
{
enunciado: "La política fiscal neutral es aquella que:",
correcta: "Mantiene un equilibrio entre ingresos y gastos públicos",
incorrectas: [
"No aplica impuestos a los técnicos superiores de laboratorio",
"Elimina todas las subvenciones a la investigación sanitaria"
]
},
{
enunciado: "El dinero cumple la función de:",
correcta: "Medio de cambio, unidad de cuenta y depósito de valor",
incorrectas: [
"Factor productivo junto a la tierra y el instrumental técnico",
"Documento acreditativo de la titulación profesional sanitaria"
]
},
{
enunciado: "En la Bolsa, un mercado 'bajista' es aquel donde:",
correcta: "Predomina la oferta y los precios de las acciones tienden a caer",
incorrectas: [
"Solo se permiten transacciones de empresas del sector primario",
"El Estado prohíbe la compra de acciones por parte de técnicos"
]
}
];