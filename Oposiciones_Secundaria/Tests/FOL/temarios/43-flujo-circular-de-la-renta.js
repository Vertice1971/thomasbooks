'use strict';

var PREGUNTAS = [
{
enunciado: "En la teoría del flujo circular de la renta, las economías domésticas cumplen la función de:",
correcta: "Vender el uso de sus factores productivos a las empresas a cambio de una renta",
incorrectas: [
"Producir bienes de equipo para el autoconsumo sanitario",
"Regular el mercado de valores a través del ahorro obligatorio"
]
},
{
enunciado: "El Producto Interior Bruto (PIB) se define como el valor de mercado de:",
correcta: "Todos los bienes y servicios finales producidos en un país durante un periodo",
incorrectas: [
"La suma de todas las transacciones de bienes usados y de segunda mano",
"Los bienes intermedios que se transforman dentro del proceso técnico"
]
},
{
enunciado: "La macromagnitud que mide la renta total que reciben los residentes de un país, incluyendo lo ganado en el extranjero, es:",
correcta: "Producto Nacional Bruto (PNB)",
incorrectas: [
"Renta Disponible de las familias técnicas",
"Inversión Bruta de Capital Fijo"
]
},
{
enunciado: "Desde la perspectiva del gasto, el PIB es la suma de:",
correcta: "Consumo, Inversión, Gasto Público y Exportaciones Netas",
incorrectas: [
"Salarios, Alquileres, Intereses y Beneficios empresariales",
"Importaciones de reactivos y Exportaciones de muestras biológicas"
]
},
{
enunciado: "La diferencia entre una magnitud 'bruta' y una 'neta' (por ejemplo, PIB y PIN) es:",
correcta: "La amortización o depreciación del capital",
incorrectas: [
"El pago de impuestos indirectos sobre el valor añadido",
"La suma de las subvenciones a la explotación técnica"
]
},
{
enunciado: "El consumo privado depende fundamentalmente de:",
correcta: "La renta disponible de las familias",
incorrectas: [
"La capacidad productiva de las máquinas de análisis",
"El número de técnicos con contrato de interinidad"
]
},
{
enunciado: "La inversión económica consiste en:",
correcta: "La adquisición de bienes de capital para aumentar la producción futura",
incorrectas: [
"La compra de acciones en el mercado secundario de valores",
"El ahorro de dinero en cuentas corrientes de alta remuneración"
]
},
{
enunciado: "En una economía cerrada y sin sector público, el ahorro es igual a:",
correcta: "La inversión",
incorrectas: [
"El consumo total",
"La renta nacional neta"
]
},
{
enunciado: "El PIB 'nominal' se diferencia del PIB 'real' en que el primero:",
correcta: "No elimina el efecto de la variación de los precios (inflación)",
incorrectas: [
"Solo contabiliza los servicios prestados por el sector público",
"Mide exclusivamente la producción de los técnicos autónomos"
]
},
{
enunciado: "La Renta Per Cápita es un indicador que relaciona la renta nacional con:",
correcta: "El número total de habitantes del país",
incorrectas: [
"La tasa de actividad de los técnicos superiores",
"El volumen de exportaciones de productos químicos"
]
},
{
enunciado: "Las transferencias del Estado a las familias (como el desempleo) se caracterizan porque:",
correcta: "No tienen como contrapartida una producción de bienes o servicios",
incorrectas: [
"Forman parte directa del cálculo del PIB por el método del gasto",
"Deben ser devueltas íntegramente al finalizar el año fiscal"
]
},
{
enunciado: "El deflactor del PIB es un índice que se utiliza para:",
correcta: "Eliminar el efecto de los precios y calcular el crecimiento real",
incorrectas: [
"Aumentar el valor de las rentas percibidas por el factor trabajo",
"Medir el coste de oportunidad de la inversión en tecnología"
]
},
{
enunciado: "La Renta Disponible es aquella que las familias pueden destinar a:",
correcta: "Consumo y ahorro",
incorrectas: [
"Pago de impuestos directos y cotizaciones sociales",
"Inversión en activos financieros de alto riesgo"
]
},
{
enunciado: "La propensión marginal al consumo indica:",
correcta: "Cuánto aumenta el consumo por cada euro adicional de renta",
incorrectas: [
"El porcentaje de salario destinado a la compra de material técnico",
"La cantidad de bienes que se dejan de consumir al subir los precios"
]
},
{
enunciado: "Desde el punto de vista de la producción (valor añadido), el PIB se obtiene:",
correcta: "Sumando el valor de las ventas de las empresas y restando las compras intermedias",
incorrectas: [
"Multiplicando el número de trabajadores por el salario mínimo",
"Dividiendo el gasto público entre el déficit comercial externo"
]
},
{
enunciado: "La paradoja de la frugalidad o del ahorro sugiere que:",
correcta: "Si todos intentan ahorrar más, la renta nacional puede caer y el ahorro total disminuir",
incorrectas: [
"El ahorro de los técnicos es la única fuente de riqueza del laboratorio",
"Las empresas invierten más cuanto mayor es el tipo de interés bancario"
]
},
{
enunciado: "Un país con un PNB superior a su PIB indica que:",
correcta: "Los factores nacionales en el extranjero ganan más que los extranjeros en el país",
incorrectas: [
"La balanza comercial tiene un déficit estructural permanente",
"El Estado está gastando más de lo que ingresa por impuestos"
]
},
{
enunciado: "La formación bruta de capital fijo (FBCF) es un componente de:",
correcta: "La inversión",
incorrectas: [
"El consumo público",
"La renta de los trabajadores"
]
},
{
enunciado: "El análisis de la coyuntura económica se centra en:",
correcta: "La evolución de la economía a corto plazo",
incorrectas: [
"El estudio de las estructuras productivas a lo largo de los siglos",
"La comparación de los sistemas fisiócratas y mercantilistas"
]
},
{
enunciado: "Los bienes intermedios no se cuentan en el PIB para:",
correcta: "Evitar la doble contabilización de su valor",
incorrectas: [
"Fomentar la exportación de materias primas sin procesar",
"Reducir la carga fiscal sobre las empresas del sector sanitario"
]
},
{
enunciado: "El valor añadido de una empresa es:",
correcta: "La diferencia entre el valor de su producción y el de las materias primas utilizadas",
incorrectas: [
"La suma de los beneficios netos y las gratificaciones de los técnicos",
"El precio final de venta al público incluyendo el IVA y otros impuestos"
]
},
{
enunciado: "La Renta Nacional se obtiene restando al Producto Nacional Neto a coste de factores:",
correcta: "Nada, son conceptos equivalentes en términos de agregación",
incorrectas: [
"Las pensiones de jubilación y las becas de estudio técnico",
"Los intereses de la deuda pública contraída por el Estado"
]
},
{
enunciado: "Un aumento de las existencias en el almacén de un laboratorio se considera:",
correcta: "Inversión en existencias",
incorrectas: [
"Consumo diferido del técnico",
"Gasto público corriente"
]
},
{
enunciado: "El PIB a precios de mercado incluye:",
correcta: "Los impuestos indirectos netos de subvenciones",
incorrectas: [
"El impuesto sobre la renta de las personas físicas (IRPF)",
"La valoración de las actividades de voluntariado y ocio"
]
},
{
enunciado: "En el flujo circular, las subvenciones son:",
correcta: "Transferencias del sector público a las empresas",
incorrectas: [
"Pagos de las familias a los laboratorios de análisis",
"Préstamos bancarios para la compra de instrumental"
]
},
{
enunciado: "La inversión neta es igual a la inversión bruta menos:",
correcta: "La depreciación",
incorrectas: [
"El tipo de interés",
"La inflación anual"
]
},
{
enunciado: "El ahorro público se produce cuando:",
correcta: "Los ingresos impositivos superan al gasto público (superávit presupuestario)",
incorrectas: [
"El Estado vende sus empresas públicas a inversores privados",
"Los técnicos de la administración pública deciden no gastar su salario"
]
},
{
enunciado: "Las macromagnitudes relacionadas con la renta miden:",
correcta: "La remuneración de los factores productivos (trabajo y capital)",
incorrectas: [
"El peso físico de las mercancías producidas en el país",
"El número de patentes técnicas registradas en el año"
]
},
{
enunciado: "La balanza de bienes y servicios influye en el PIB a través de:",
correcta: "Las exportaciones netas (Exportaciones menos Importaciones)",
incorrectas: [
"El pago de intereses de préstamos entre bancos centrales",
"La llegada de turistas extranjeros que no realizan gasto alguno"
]
},
{
enunciado: "Si el deflactor del PIB es 110, significa que:",
correcta: "Los precios han subido un 10% respecto al año base",
incorrectas: [
"La producción real ha aumentado un 110% en un solo ejercicio",
"El desempleo en el sector técnico ha bajado diez puntos"
]
},
{
enunciado: "Un ciclo económico en fase de 'recesión' se caracteriza por:",
correcta: "Una disminución continuada de la actividad económica y del PIB",
incorrectas: [
"Un aumento generalizado de la inversión y el empleo técnico",
"La estabilidad absoluta de los precios de los servicios de salud"
]
},
{
enunciado: "El PIB no mide aspectos como:",
correcta: "La calidad del medio ambiente o la distribución de la riqueza",
incorrectas: [
"El valor de los servicios de peluquería o transporte privado",
"La producción de medicamentos en laboratorios nacionales"
]
},
{
enunciado: "La renta personal se diferencia de la nacional en que:",
correcta: "Excluye los beneficios no distribuidos y las cotizaciones, e incluye transferencias",
incorrectas: [
"Es siempre mayor debido al efecto multiplicador del dinero",
"Solo tiene en cuenta los salarios de los técnicos superiores"
]
},
{
enunciado: "La inversión inducida es aquella que:",
correcta: "Varía en función de los cambios en el nivel de renta o producción",
incorrectas: [
"Viene obligada por la legislación de prevención de riesgos",
"Realiza el Estado para construir nuevos centros de salud"
]
},
{
enunciado: "El consumo autónomo es aquel que:",
correcta: "Se realiza incluso si la renta disponible es cero",
incorrectas: [
"Solo llevan a cabo los trabajadores por cuenta propia (autónomos)",
"Depende exclusivamente del tipo de interés de los créditos"
]
},
{
enunciado: "La demanda agregada representa:",
correcta: "El gasto total que están dispuestos a realizar los agentes económicos",
incorrectas: [
"La oferta total de reactivos químicos en el mercado nacional",
"La suma de las horas trabajadas por todos los técnicos del país"
]
},
{
enunciado: "El efecto multiplicador de la inversión implica que:",
correcta: "Un aumento de la inversión genera un aumento mayor en la renta nacional",
incorrectas: [
"Cada máquina nueva debe ser operada por al menos dos técnicos",
"Los beneficios de las empresas se duplican cada cinco años"
]
},
{
enunciado: "Las macromagnitudes relacionadas con el gasto analizan:",
correcta: "Cómo se emplea el producto generado por la economía",
incorrectas: [
"El detalle de las facturas de electricidad de los laboratorios",
"El coste unitario de cada análisis clínico realizado"
]
},
{
enunciado: "Un indicador adelantado de la coyuntura económica podría ser:",
correcta: "El índice de confianza de los consumidores",
incorrectas: [
"La tasa de inflación del año pasado ya publicada",
"El número de jubilaciones de técnicos de laboratorio"
]
},
{
enunciado: "En el flujo circular, los impuestos son:",
correcta: "Detracciones de renta que fluyen de familias y empresas al sector público",
incorrectas: [
"Aportaciones voluntarias para la investigación técnica",
"Pagos que realiza el Estado a los proveedores extranjeros"
]
}
];