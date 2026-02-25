'use strict';

var PREGUNTAS = [
{
enunciado: "El patrimonio de la empresa se define contablemente como:",
correcta: "El conjunto de bienes, derechos y obligaciones de una entidad",
incorrectas: [
"La suma exclusiva de los saldos en las cuentas bancarias y efectivo",
"El valor de mercado de todas las acciones propiedad de los socios"
]
},
{
enunciado: "En la ecuación fundamental del patrimonio, el Patrimonio Neto es igual a:",
correcta: "Activo menos Pasivo",
incorrectas: [
"Activo más Pasivo exigible",
"Inmovilizado más Existencias"
]
},
{
enunciado: "Los elementos del Activo Corriente se caracterizan por:",
correcta: "Permanecer en la empresa menos de un ejercicio económico (corto plazo)",
incorrectas: [
"Ser bienes destinados a la estructura permanente como locales o maquinaria",
"Representar las deudas que la empresa debe abonar a sus proveedores"
]
},
{
enunciado: "El ratio de solvencia (o distancia a la quiebra) mide:",
correcta: "La capacidad del Activo total para hacer frente al Pasivo total",
incorrectas: [
"La rentabilidad obtenida por cada euro invertido por los accionistas",
"La velocidad con la que las existencias se transforman en ventas netas"
]
},
{
enunciado: "La masa patrimonial de Pasivo Corriente incluye:",
correcta: "Obligaciones y deudas con vencimiento inferior a un año",
incorrectas: [
"Créditos concedidos a clientes por la prestación de servicios técnicos",
"Reservas constituidas con los beneficios no repartidos del laboratorio"
]
},
{
enunciado: "El fondo de maniobra (o capital circulante) se calcula como:",
correcta: "Activo Corriente menos Pasivo Corriente",
incorrectas: [
"Patrimonio Neto dividido por el Activo no Corriente",
"Resultado del ejercicio antes de intereses e impuestos"
]
},
{
enunciado: "Un fondo de maniobra positivo indica generalmente que:",
correcta: "La empresa puede financiar su ciclo operativo sin tensiones de liquidez",
incorrectas: [
"El valor de las deudas supera al valor de todos los bienes de la entidad",
"La empresa ha incurrido en pérdidas estructurales durante el ejercicio"
]
},
{
enunciado: "El ratio de liquidez (o razón corriente) relaciona:",
correcta: "El Activo Corriente con el Pasivo Corriente",
incorrectas: [
"Los fondos propios con el total de la financiación ajena",
"El beneficio neto con el volumen total de ventas anuales"
]
},
{
enunciado: "El concepto de 'Disponible' dentro del Activo incluye:",
correcta: "Caja y saldos en cuentas bancarias de libre disposición",
incorrectas: [
"Facturas pendientes de cobro con vencimiento a treinta días",
"Maquinaria de análisis clínico pendiente de amortización"
]
},
{
enunciado: "La rentabilidad económica (ROA) mide la relación entre:",
correcta: "El beneficio antes de intereses e impuestos (BAII) y el activo total",
incorrectas: [
"El beneficio neto final y los fondos propios de la empresa",
"El precio de venta del servicio y el coste variable de producción"
]
},
{
enunciado: "El Pasivo No Corriente está formado por:",
correcta: "Deudas con vencimiento superior a un año",
incorrectas: [
"Aportaciones de capital realizadas por los socios fundadores",
"Derechos de cobro sobre clientes por análisis realizados"
]
},
{
enunciado: "El ratio de endeudamiento informa sobre:",
correcta: "La proporción que representan las deudas respecto al total de la financiación",
incorrectas: [
"El tiempo medio que tardan los clientes en pagar sus facturas",
"La eficiencia en el uso de los reactivos químicos del laboratorio"
]
},
{
enunciado: "El Activo No Corriente (o inmovilizado) comprende:",
correcta: "Elementos destinados a servir de forma duradera en la actividad",
incorrectas: [
"Material fungible y reactivos que se consumen en el día a día",
"Dinero efectivo guardado en la caja para gastos menores"
]
},
{
enunciado: "La cuenta de Pérdidas y Ganancias refleja:",
correcta: "El flujo de ingresos y gastos para determinar el resultado del ejercicio",
incorrectas: [
"La situación de los bienes y derechos en una fecha fija concreta",
"El inventario detallado de las existencias al final del trimestre"
]
},
{
enunciado: "El ratio de tesorería (o acid test) excluye del numerador:",
correcta: "Las existencias, por ser la masa menos líquida del corriente",
incorrectas: [
"Las deudas con las entidades bancarias a corto plazo",
"El capital social y las reservas legales de la sociedad"
]
},
{
enunciado: "La rentabilidad financiera (ROE) interesa especialmente a:",
correcta: "Los propietarios o accionistas de la empresa",
incorrectas: [
"Los proveedores de material de laboratorio y acreedores",
"La administración tributaria para el cálculo del IVA"
]
},
{
enunciado: "El equilibrio financiero total (estabilidad máxima) se produce cuando:",
correcta: "El activo está financiado íntegramente con recursos propios",
incorrectas: [
"El pasivo corriente es igual al activo no corriente del balance",
"Las pérdidas del ejercicio superan el valor del capital social"
]
},
{
enunciado: "En el análisis financiero, el 'Realizable' está compuesto por:",
correcta: "Derechos de cobro sobre clientes y deudores",
incorrectas: [
"Edificios, construcciones y terrenos propiedad de la empresa",
"Saldos de caja y bancos de disponibilidad inmediata"
]
},
{
enunciado: "El periodo medio de maduración es el tiempo que transcurre desde:",
correcta: "La inversión de un euro en el ciclo productivo hasta su recuperación",
incorrectas: [
"La firma del contrato de alquiler hasta la apertura del centro",
"La solicitud de un préstamo hasta la concesión por el banco"
]
},
{
enunciado: "Una suspensión de pagos técnica ocurre cuando:",
correcta: "La empresa tiene activos pero carece de liquidez inmediata para sus deudas",
incorrectas: [
"El pasivo total es superior al activo total (quiebra técnica)",
"Los socios deciden disolver la sociedad de mutuo acuerdo"
]
},
{
enunciado: "La amortización acumulada figura en el balance:",
correcta: "Restando valor al Activo No Corriente",
incorrectas: [
"Como una deuda en el Pasivo No Corriente",
"Dentro del Patrimonio Neto como una reserva"
]
},
{
enunciado: "Los fondos propios (o capitales propios) son:",
correcta: "Recursos aportados por los socios y beneficios no distribuidos",
incorrectas: [
"Créditos bancarios concedidos a muy largo plazo (más de 10 años)",
"Subvenciones de explotación para cubrir gastos corrientes de luz"
]
},
{
enunciado: "El análisis vertical del balance consiste en:",
correcta: "Calcular el peso porcentual de cada masa sobre el total del activo",
incorrectas: [
"Comparar las cifras del presente año con las del año anterior",
"Estudiar la evolución de las ventas mes a mes durante el ciclo"
]
},
{
enunciado: "El ratio de garantía mide:",
correcta: "La seguridad que ofrece la empresa a sus acreedores a largo plazo",
incorrectas: [
"La probabilidad de que las máquinas de diagnóstico se averíen",
"El cumplimiento de las normas de seguridad e higiene laboral"
]
},
{
enunciado: "La quiebra es una situación donde:",
correcta: "El Patrimonio Neto es negativo y el Pasivo supera al Activo",
incorrectas: [
"El fondo de maniobra es positivo pero excesivamente pequeño",
"La empresa no tiene clientes durante un mes determinado"
]
},
{
enunciado: "El apalancamiento financiero es positivo si:",
correcta: "La rentabilidad económica es superior al coste de la deuda",
incorrectas: [
"Los ingresos por ventas son mayores que los gastos de personal",
"El tipo impositivo del Impuesto sobre Sociedades disminuye"
]
},
{
enunciado: "El análisis de ratios es una técnica de análisis:",
correcta: "Cuantitativo para evaluar la salud financiera de la empresa",
incorrectas: [
"Cualitativo sobre la satisfacción de los técnicos de laboratorio",
"Administrativo para el control del horario de los trabajadores"
]
},
{
enunciado: "La autofinanciación forma parte de:",
correcta: "El Patrimonio Neto",
incorrectas: [
"El Pasivo No Corriente",
"El Activo Corriente"
]
},
{
enunciado: "El ratio de rotación de existencias indica:",
correcta: "Cuántas veces se renueva el almacén en un periodo dado",
incorrectas: [
"El volumen físico de reactivos que caben en las estanterías",
"El precio medio de compra de los suministros técnicos"
]
},
{
enunciado: "Las deudas con Hacienda y la Seguridad Social se clasifican como:",
correcta: "Pasivo Corriente",
incorrectas: [
"Derechos de cobro",
"Patrimonio Neto"
]
},
{
enunciado: "El principio de prudencia contable obliga a:",
correcta: "Contabilizar las pérdidas en cuanto se conocen y los beneficios al cierre",
incorrectas: [
"No gastar más del 10% del presupuesto en material de oficina",
"Ocultar las deudas a los bancos para facilitar la obtención de crédito"
]
},
{
enunciado: "Un ratio de liquidez inferior a 1 sugiere:",
correcta: "Posibles dificultades para pagar las deudas a corto plazo",
incorrectas: [
"Que la empresa tiene demasiado dinero ocioso en sus cuentas",
"Una excelente gestión de los cobros a los pacientes del centro"
]
},
{
enunciado: "La memoria es un estado contable que:",
correcta: "Amplía y comenta la información contenida en el Balance y la cuenta de PyG",
incorrectas: [
"Registra los datos biográficos de todos los técnicos superiores",
"Sustituye al Libro Diario en las empresas de pequeño tamaño"
]
},
{
enunciado: "El inmovilizado intangible incluye elementos como:",
correcta: "Aplicaciones informáticas, patentes y marcas",
incorrectas: [
"Muebles, herramientas y equipos de laboratorio",
"Préstamos concedidos a otras empresas del sector"
]
},
{
enunciado: "El resultado de explotación se obtiene de:",
correcta: "Ingresos de explotación menos gastos de explotación",
incorrectas: [
"Ingresos totales menos gastos financieros únicamente",
"Sumar el capital social y las deudas con proveedores"
]
},
{
enunciado: "El coste de los recursos ajenos es:",
correcta: "El interés que la empresa debe pagar por la financiación recibida",
incorrectas: [
"El precio de adquisición de los reactivos químicos importados",
"El sueldo bruto de los técnicos contratados por tiempo indefinido"
]
},
{
enunciado: "El análisis económico-financiero busca:",
correcta: "Evaluar la rentabilidad, solvencia y equilibrio de la organización",
incorrectas: [
"Determinar la composición química de las muestras biológicas",
"Organizar los turnos de guardia del personal de diagnóstico"
]
},
{
enunciado: "Los dividendos son:",
correcta: "La parte del beneficio neto que se reparte entre los socios",
incorrectas: [
"Los intereses fijos de los préstamos hipotecarios del local",
"Las facturas pendientes de pago a los suministradores de gas"
]
},
{
enunciado: "El activo circulante también es denominado:",
correcta: "Activo Corriente",
incorrectas: [
"Pasivo Exigible",
"Inmovilizado Material"
]
},
{
enunciado: "En un balance equilibrado, el Activo Corriente debe ser:",
correcta: "Mayor que el Pasivo Corriente",
incorrectas: [
"Igual a cero para evitar riesgos de mercado",
"Menor que las deudas comerciales a corto plazo"
]
}
];