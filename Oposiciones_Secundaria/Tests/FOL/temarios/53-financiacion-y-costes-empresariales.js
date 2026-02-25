'use strict';

var PREGUNTAS = [
{
enunciado: "Las fuentes de financiación interna o autofinanciación son aquellas que:",
correcta: "Se generan en la propia empresa mediante beneficios no repartidos y dotaciones",
incorrectas: [
"Proceden de ampliaciones de capital suscritas por nuevos socios externos",
"Se obtienen a través de la emisión de obligaciones y bonos corporativos"
]
},
{
enunciado: "El 'leasing' o arrendamiento financiero se caracteriza por:",
correcta: "Permitir el uso de un bien a cambio de cuotas con opción de compra final",
incorrectas: [
"Ser una subvención a fondo perdido otorgada por organismos públicos",
"Consistir en la venta de derechos de cobro de clientes a una entidad"
]
},
{
enunciado: "Los costes fijos son aquellos que:",
correcta: "Permanecen constantes ante variaciones en el volumen de producción",
incorrectas: [
"Están vinculados exclusivamente al consumo de materias primas y energía",
"Se anulan completamente cuando la empresa decide cerrar temporalmente"
]
},
{
enunciado: "El umbral de rentabilidad o punto muerto se define como:",
correcta: "El volumen de ventas para el cual el beneficio de la empresa es cero",
incorrectas: [
"El nivel máximo de producción que permite la capacidad técnica instalada",
"La diferencia entre los ingresos totales y los costes variables medios"
]
},
{
enunciado: "En la fijación de precios, el método basado en el coste consiste en:",
correcta: "Añadir un margen de beneficio al coste total unitario del producto",
incorrectas: [
"Ajustar el precio final según el valor percibido por el segmento de mercado",
"Igualar sistemáticamente la tarifa a la del competidor con mayor cuota"
]
},
{
enunciado: "La amortización tiene como finalidad económica:",
correcta: "Reflejar la depreciación del inmovilizado y crear un fondo de renovación",
incorrectas: [
"Aumentar el valor contable de los activos al finalizar cada ejercicio",
"Registrar el pago de los intereses derivados de préstamos bancarios"
]
},
{
enunciado: "El 'factoring' es un método de financiación que consiste en:",
correcta: "Ceder los derechos de cobro de facturas a una entidad financiera",
incorrectas: [
"Obtener créditos comerciales directos de los proveedores de materiales",
"La emisión de pagarés de empresa a corto plazo para obtener liquidez"
]
},
{
enunciado: "Los costes directos son aquellos que:",
correcta: "Se pueden asignar de forma inequívoca a un producto o servicio concreto",
incorrectas: [
"Afectan a la estructura general de la empresa y requieren un reparto",
"Varían proporcionalmente al tiempo de funcionamiento de la maquinaria"
]
},
{
enunciado: "El apalancamiento financiero ocurre cuando:",
correcta: "Se utiliza deuda para financiar una inversión esperando aumentar la rentabilidad",
incorrectas: [
"La empresa decide autofinanciarse exclusivamente con sus propias reservas",
"Se reducen los costes fijos mediante una reestructuración de la plantilla"
]
},
{
enunciado: "La financiación ajena a corto plazo incluye:",
correcta: "Créditos comerciales, préstamos bancarios menores a un año y descuento de efectos",
incorrectas: [
"Reservas estatutarias, previsiones para riesgos y capital social inicial",
"Préstamos hipotecarios y emisiones de deuda pública a largo plazo"
]
},
{
enunciado: "El coste de oportunidad se define como:",
correcta: "El valor de la mejor alternativa a la que se renuncia al tomar una decisión",
incorrectas: [
"La suma de los gastos financieros soportados por la mora en los pagos",
"El precio total de adquisición de un activo incluyendo impuestos y transporte"
]
},
{
enunciado: "Una fuente de financiación propia externa es:",
correcta: "El capital social aportado por los socios en el momento de la constitución",
incorrectas: [
"El beneficio neto del ejercicio que se destina a reservas voluntarias",
"La línea de crédito abierta con una entidad bancaria de ámbito nacional"
]
},
{
enunciado: "Los costes variables totales son aquellos que:",
correcta: "Aumentan o disminuyen en función directa del nivel de actividad",
incorrectas: [
"Deben pagarse obligatoriamente aunque no se produzca ninguna unidad",
"Corresponden a los gastos de administración y dirección de la empresa"
]
},
{
enunciado: "Si una empresa vende por debajo de su punto muerto:",
correcta: "Incurre en pérdidas al no cubrir la totalidad de sus costes fijos",
incorrectas: [
"Obtiene beneficios netos pero con una rentabilidad financiera negativa",
"Está optimizando su estructura de costes variables por unidad de producto"
]
},
{
enunciado: "El renting se diferencia del leasing principalmente en que:",
correcta: "No suele incluir opción de compra y comprende servicios de mantenimiento",
incorrectas: [
"Se aplica exclusivamente a bienes inmuebles y naves industriales",
"La propiedad del bien pasa a la empresa desde el primer pago mensual"
]
},
{
enunciado: "La autofinanciación de mantenimiento tiene como objetivo:",
correcta: "Conservar la capacidad productiva de la empresa mediante amortizaciones",
incorrectas: [
"Financiar nuevas inversiones de expansión en mercados internacionales",
"Repartir dividendos entre los accionistas para mantener su fidelidad"
]
},
{
enunciado: "Los costes indirectos requieren para su imputación:",
correcta: "El uso de claves de reparto o criterios de asignación subjetivos",
incorrectas: [
"Una medición directa mediante contadores en la línea de producción",
"Su inclusión automática en el precio de coste variable de fabricación"
]
},
{
enunciado: "El margen de contribución unitario es:",
correcta: "La diferencia entre el precio de venta y el coste variable unitario",
incorrectas: [
"El resultado de dividir el beneficio total entre el número de unidades",
"La suma de los costes fijos y los costes variables de un producto"
]
},
{
enunciado: "La financiación a través de proveedores (crédito comercial) consiste en:",
correcta: "Aplazar el pago de las compras de materiales sin coste financiero explícito",
incorrectas: [
"Recibir préstamos en efectivo de las empresas que suministran reactivos",
"Vender los productos terminados a los proveedores para obtener liquidez"
]
},
{
enunciado: "El coste medio o unitario se calcula como:",
correcta: "El cociente entre el coste total y el número de unidades producidas",
incorrectas: [
"La suma del coste fijo unitario y el precio de venta del mercado",
"La multiplicación de los costes variables por el margen de beneficio"
]
},
{
enunciado: "Las subvenciones de capital son:",
correcta: "Fondos públicos no reintegrables destinados a financiar activos fijos",
incorrectas: [
"Préstamos a bajo interés que deben ser devueltos en el corto plazo",
"Ingresos extraordinarios procedentes de la venta de participaciones"
]
},
{
enunciado: "Un incremento en los costes fijos de la empresa provoca:",
correcta: "Un desplazamiento hacia arriba del umbral de rentabilidad",
incorrectas: [
"Una reducción inmediata del precio de venta para mantener la cuota",
"Un descenso en el volumen de ventas necesario para cubrir gastos"
]
},
{
enunciado: "El descuento comercial o de efectos permite a la empresa:",
correcta: "Anticipar el importe de una letra o pagaré antes de su vencimiento",
incorrectas: [
"Reducir el precio de los productos a los clientes que pagan al contado",
"Pagar menos impuestos sobre el beneficio al final del año fiscal"
]
},
{
enunciado: "La autofinanciación de enriquecimiento está constituida por:",
correcta: "Las reservas formadas con beneficios no distribuidos",
incorrectas: [
"Las cuotas de amortización del inmovilizado material e inmaterial",
"Las aportaciones suplementarias de los socios ante una crisis"
]
},
{
enunciado: "En la fijación de precios según la competencia, la empresa:",
correcta: "Establece sus precios en función de las reacciones de sus rivales",
incorrectas: [
"Calcula estrictamente su umbral de rentabilidad para fijar el mínimo",
"Prioriza el coste variable unitario sobre cualquier otra variable"
]
},
{
enunciado: "Los costes de personal se consideran fijos cuando:",
correcta: "La retribución no está vinculada a la cantidad de producto obtenido",
incorrectas: [
"El trabajador percibe comisiones por cada análisis clínico realizado",
"Se contrata personal temporal para cubrir picos de demanda técnica"
]
},
{
enunciado: "La diferencia entre préstamo y crédito bancario es que en el crédito:",
correcta: "Solo se pagan intereses por la cantidad de dinero realmente utilizada",
incorrectas: [
"Se entrega la totalidad del dinero al inicio de la operación financiera",
"El plazo de devolución es obligatoriamente superior a los cinco años"
]
},
{
enunciado: "El margen de seguridad de una empresa indica:",
correcta: "La distancia entre las ventas actuales y el punto muerto",
incorrectas: [
"El porcentaje de beneficio neto respecto a los ingresos totales",
"La cantidad de reactivos almacenados para evitar una rotura de stock"
]
},
{
enunciado: "La financiación espontánea es aquella que:",
correcta: "Surge del funcionamiento habitual sin negociación previa, como los salarios devengados",
incorrectas: [
"Se obtiene mediante una oferta pública de adquisición en la bolsa",
"Procede de inversores particulares atraídos por la publicidad del centro"
]
},
{
enunciado: "El coste marginal representa:",
correcta: "El incremento del coste total al producir una unidad adicional",
incorrectas: [
"El valor residual del activo una vez finalizada su vida útil",
"La parte proporcional de los costes fijos asignada a cada producto"
]
},
{
enunciado: "Las obligaciones son títulos de deuda que:",
correcta: "Representan una parte alícuota de un préstamo concedido a la empresa",
incorrectas: [
"Otorgan derechos políticos y de voto en las juntas de accionistas",
"Son emitidas exclusivamente por empresas de responsabilidad limitada"
]
},
{
enunciado: "La inversión se define desde el punto de vista financiero como:",
correcta: "El empleo de capital para la adquisición de activos con esperanza de beneficio",
incorrectas: [
"El pago de las nóminas y seguros sociales de los técnicos titulados",
"La venta de maquinaria usada para obtener liquidez inmediata"
]
},
{
enunciado: "Los costes semivariables son aquellos que:",
correcta: "Tienen un componente fijo y otro que varía con la actividad",
incorrectas: [
"Cambian según el criterio del director técnico en cada ejercicio",
"Se aplican exclusivamente a los impuestos de ámbito municipal"
]
},
{
enunciado: "Si el precio de venta unitario es igual al coste variable unitario:",
correcta: "No se pueden cubrir los costes fijos independientemente del volumen",
incorrectas: [
"La empresa alcanza su umbral de rentabilidad con la primera unidad",
"El beneficio total es igual a la suma de los costes fijos mensuales"
]
},
{
enunciado: "El crédito de firma consiste en que el banco:",
correcta: "Garantiza el cumplimiento de una obligación mediante un aval",
incorrectas: [
"Presta dinero en efectivo para la compra de instrumental técnico",
"Firma las facturas de los clientes para asegurar el cobro futuro"
]
},
{
enunciado: "Los costes de oportunidad en la financiación propia son:",
correcta: "La rentabilidad que los socios habrían obtenido en otra inversión",
incorrectas: [
"Los gastos de notaría y registro mercantil de la nueva sociedad",
"La tasa de inflación que reduce el poder adquisitivo del capital"
]
},
{
enunciado: "En un mercado de competencia perfecta, el precio de venta es:",
correcta: "Un dato externo que la empresa no puede modificar individualmente",
incorrectas: [
"Fijado por la empresa líder tras analizar sus costes de producción",
"Acordado por los sindicatos de técnicos de laboratorio del sector"
]
},
{
enunciado: "La financiación externa a largo plazo es adecuada para:",
correcta: "Financiar la adquisición de inmovilizado y activos estructurales",
incorrectas: [
"Cubrir desfases temporales de caja derivados de pagos corrientes",
"Pagar los suministros de agua y luz de los centros de diagnóstico"
]
},
{
enunciado: "El análisis de apalancamiento operativo estudia el efecto de:",
correcta: "Los costes fijos sobre el beneficio ante variaciones en las ventas",
incorrectas: [
"La deuda bancaria sobre la rentabilidad neta de los accionistas",
"El aumento de los salarios sobre la motivación de los técnicos"
]
},
{
enunciado: "Las reservas legales en una sociedad son:",
correcta: "Beneficios no repartidos cuya dotación es obligatoria por ley",
incorrectas: [
"Existencias mínimas de seguridad depositadas en el laboratorio",
"Cantidades de dinero guardadas para el pago de multas sanitarias"
]
}
];