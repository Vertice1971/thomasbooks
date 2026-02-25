'use strict';

var PREGUNTAS = [
{
enunciado: "El documento que acredita la compraventa de un bien o servicio y sirve de soporte contable es:",
correcta: "La factura",
incorrectas: [
"El albarán de entrega",
"La nota de pedido o presupuesto"
]
},
{
enunciado: "El libro de contabilidad donde se registran cronológicamente todas las operaciones económicas es:",
correcta: "El Libro Diario",
incorrectas: [
"El Libro Mayor",
"El Libro de Inventarios y Cuentas Anuales"
]
},
{
enunciado: "El Impuesto sobre Actividades Económicas (IAE) es un tributo de carácter:",
correcta: "Municipal",
incorrectas: [
"Estatal sobre el beneficio neto",
"Autonómico sobre el consumo de recursos"
]
},
{
enunciado: "En la gestión de existencias, el método PMP consiste en valorar las salidas según:",
correcta: "El Precio Medio Ponderado de las adquisiciones y las existencias iniciales",
incorrectas: [
"El valor de mercado del producto en el momento de la emisión de la factura",
"El precio de la última unidad entrada en el almacén del laboratorio"
]
},
{
enunciado: "El IVA es un impuesto indirecto que recae sobre:",
correcta: "El consumo de bienes y la prestación de servicios",
incorrectas: [
"La obtención de rentas por parte de las personas físicas",
"La titularidad de bienes inmuebles urbanos y rústicos"
]
},
{
enunciado: "El documento que justifica la salida de mercancías del almacén y la recepción por el cliente es:",
correcta: "El albarán",
incorrectas: [
"La orden de compra",
"La letra de cambio"
]
},
{
enunciado: "El Libro Mayor tiene como función principal:",
correcta: "Clasificar las operaciones por cuentas para conocer su saldo y evolución",
incorrectas: [
"Registrar las actas de las juntas generales de accionistas",
"Detallar exclusivamente las deudas con la Seguridad Social"
]
},
{
enunciado: "El Impuesto sobre Sociedades (IS) grava:",
correcta: "La renta o beneficio obtenido por las personas jurídicas",
incorrectas: [
"El volumen de ventas anual con independencia de los costes",
"La contratación de técnicos superiores de laboratorio"
]
},
{
enunciado: "El método FIFO de valoración de existencias asume que:",
correcta: "La primera unidad en entrar en el almacén es la primera en salir",
incorrectas: [
"Las unidades se valoran al precio de reposición del día del inventario",
"La última unidad comprada es la que primero se consume en el proceso"
]
},
{
enunciado: "El calendario fiscal de una empresa es el documento que recoge:",
correcta: "Las fechas y plazos para el cumplimiento de las obligaciones tributarias",
incorrectas: [
"El horario de apertura y cierre del centro de diagnóstico sanitario",
"La programación de las inspecciones técnicas de la maquinaria"
]
},
{
enunciado: "Un sujeto pasivo en el ámbito tributario es la persona que:",
correcta: "Está obligada por ley al cumplimiento de la prestación tributaria",
incorrectas: [
"Recauda los impuestos en nombre de la administración pública",
"Se beneficia de las deducciones por inversión en I+D+i"
]
},
{
enunciado: "El modelo 303 de la Agencia Tributaria se utiliza para:",
correcta: "La autoliquidación trimestral o mensual del IVA",
incorrectas: [
"La declaración anual del Impuesto sobre la Renta de las Personas Físicas",
"Comunicar la baja de un trabajador en el régimen de la Seguridad Social"
]
},
{
enunciado: "La gestión de existencias mediante el modelo de Wilson busca:",
correcta: "Determinar el pedido óptimo que minimiza los costes totales de inventario",
incorrectas: [
"Calcular el tiempo de caducidad de los reactivos microbiológicos",
"Asignar un código de barras único a cada muestra de los pacientes"
]
},
{
enunciado: "El Libro de Inventarios y Cuentas Anuales debe abrirse con:",
correcta: "El balance detallado inicial de la empresa",
incorrectas: [
"La lista alfabética de los proveedores de material fungible",
"El organigrama funcional de la dirección del laboratorio"
]
},
{
enunciado: "El devengo de un impuesto es:",
correcta: "El momento en el que nace la obligación de contribuir",
incorrectas: [
"El acto físico de realizar el pago en la entidad bancaria",
"La solicitud de aplazamiento de la deuda tributaria ante Hacienda"
]
},
{
enunciado: "Las tasas se diferencian de los impuestos en que:",
correcta: "Existe una contraprestación directa o un aprovechamiento especial",
incorrectas: [
"Son voluntarias y solo las pagan las empresas con beneficios altos",
"Se aplican exclusivamente a los productos importados del extranjero"
]
},
{
enunciado: "El 'stock' de seguridad es la cantidad de existencias que se mantiene para:",
correcta: "Evitar roturas de inventario ante variaciones imprevistas de demanda",
incorrectas: [
"Cumplir con la normativa técnica de almacenamiento de inflamables",
"Aumentar artificialmente el valor del patrimonio neto en el balance"
]
},
{
enunciado: "El balance de sumas y saldos tiene como objetivo:",
correcta: "Comprobar que no existen errores de transcripción en el Libro Diario",
incorrectas: [
"Determinar el beneficio neto después de impuestos del ejercicio",
"Valorar los activos inmateriales como la marca y las patentes"
]
},
{
enunciado: "El Impuesto sobre Bienes Inmuebles (IBI) es un tributo que grava:",
correcta: "La propiedad o titularidad de derechos reales sobre inmuebles",
incorrectas: [
"El incremento de valor de los terrenos de naturaleza urbana",
"La realización de obras de reforma en el laboratorio técnico"
]
},
{
enunciado: "Un albarán 'valorado' se diferencia de uno ordinario en que:",
correcta: "Incluye el precio unitario y el importe total de la mercancía",
incorrectas: [
"Ha sido revisado por un técnico superior de diagnóstico clínico",
"Lleva incorporado el sello oficial del registro mercantil"
]
},
{
enunciado: "La contabilidad de costes (o analítica) sirve para:",
correcta: "Proporcionar información interna para la gestión y toma de decisiones",
incorrectas: [
"Elaborar las cuentas anuales obligatorias para su registro público",
"Calcular el importe de las retenciones del IRPF de los trabajadores"
]
},
{
enunciado: "El punto de pedido es:",
correcta: "El nivel de existencias en el que se debe realizar un nuevo pedido",
incorrectas: [
"La ubicación física donde el transportista deja la mercancía",
"El importe mínimo en euros para que el proveedor no cobre portes"
]
},
{
enunciado: "Las retenciones a cuenta del IRPF que realiza la empresa son:",
correcta: "Cantidades detraídas de la nómina que se ingresan en Hacienda",
incorrectas: [
"Pagos extra que realiza la empresa como incentivo a la productividad",
"Sanciones económicas por el incumplimiento del horario laboral"
]
},
{
enunciado: "El Plan General Contable (PGC) es:",
correcta: "El texto que regula las normas de registro y valoración contable",
incorrectas: [
"La estrategia de marketing para la venta de servicios sanitarios",
"El esquema de vacunación obligatoria para el personal del centro"
]
},
{
enunciado: "El IVA soportado es aquel que:",
correcta: "La empresa paga a sus proveedores por la compra de bienes y servicios",
incorrectas: [
"La empresa repercute a sus clientes en las facturas de venta",
"Se ingresa directamente en la cuenta de la Seguridad Social"
]
},
{
enunciado: "La nota de abono es un documento que se emite para:",
correcta: "Corregir una factura anterior o reflejar una devolución de mercancía",
incorrectas: [
"Confirmar que el cliente ha realizado el pago por transferencia",
"Solicitar un préstamo bancario para la compra de un microscopio"
]
},
{
enunciado: "El coste de almacenamiento incluye gastos como:",
correcta: "Alquiler, seguros, amortización del local y obsolescencia",
incorrectas: [
"Comisiones de venta y campañas de publicidad en medios digitales",
"Intereses bancarios por el descuento de efectos comerciales"
]
},
{
enunciado: "El balance de situación refleja:",
correcta: "El patrimonio de la empresa en un momento determinado del tiempo",
incorrectas: [
"El flujo de caja esperado para el próximo ejercicio económico",
"La relación detallada de los clientes que han pagado al contado"
]
},
{
enunciado: "El Impuesto sobre Transmisiones Patrimoniales (ITP) se aplica en:",
correcta: "La compraventa de bienes de segunda mano entre particulares",
incorrectas: [
"La venta de reactivos nuevos por parte de un fabricante nacional",
"El pago de los salarios netos a los técnicos superiores de laboratorio"
]
},
{
enunciado: "El 'Just in Time' (JIT) en la gestión de almacén busca:",
correcta: "Reducir los niveles de existencias al mínimo necesario para producir",
incorrectas: [
"Acumular grandes cantidades de material para evitar subidas de precio",
"Eliminar el control de calidad de los productos que entran al centro"
]
},
{
enunciado: "La base imponible de un impuesto es:",
correcta: "La cuantificación del hecho imponible sobre la que se aplica el tipo",
incorrectas: [
"El porcentaje que se aplica para calcular la cuota tributaria",
"La cantidad final que el contribuyente debe ingresar en el banco"
]
},
{
enunciado: "El Libro de Actas es obligatorio para las sociedades y recoge:",
correcta: "Los acuerdos adoptados por los órganos colegiados de la sociedad",
incorrectas: [
"El registro de las temperaturas diarias de las estufas de cultivo",
"La lista de pacientes que han solicitado un análisis de sangre"
]
},
{
enunciado: "El IVA repercutido es aquel que:",
correcta: "La empresa cobra a sus clientes por los servicios prestados",
incorrectas: [
"Se paga al ayuntamiento por la recogida de residuos sanitarios",
"Representa un gasto deducible en el Impuesto sobre Sociedades"
]
},
{
enunciado: "El arqueo de caja consiste en:",
correcta: "Contar el dinero efectivo y comparar con el saldo contable",
incorrectas: [
"Verificar la fecha de caducidad de todos los billetes y monedas",
"Solicitar un extracto de movimientos a la entidad financiera"
]
},
{
enunciado: "La conciliación bancaria sirve para:",
correcta: "Identificar diferencias entre los registros de la empresa y del banco",
incorrectas: [
"Negociar una reducción de los intereses de la póliza de crédito",
"Garantizar que el banco no cobre comisiones por el mantenimiento"
]
},
{
enunciado: "El modelo 200 de la Agencia Tributaria se corresponde con:",
correcta: "La declaración anual del Impuesto sobre Sociedades",
incorrectas: [
"La declaración trimestral de retenciones del alquiler del local",
"El alta de la empresa en el censo de empresarios y profesionales"
]
},
{
enunciado: "Las existencias 'obsoletas' son aquellas que:",
correcta: "Han perdido valor por el paso del tiempo o cambios tecnológicos",
incorrectas: [
"Se encuentran situadas en la parte más alta de las estanterías",
"Han sido compradas a proveedores que ya no operan en el mercado"
]
},
{
enunciado: "La cuota tributaria es el resultado de:",
correcta: "Aplicar el tipo impositivo a la base liquidable",
incorrectas: [
"Dividir el beneficio bruto entre el número de técnicos del centro",
"Sumar el IVA soportado y el IVA repercutido del trimestre"
]
},
{
enunciado: "El Libro Registro de Facturas Emitidas es obligatorio para:",
correcta: "El control y liquidación del Impuesto sobre el Valor Añadido",
incorrectas: [
"Justificar el nivel técnico de los análisis ante Sanidad",
"Archivar las copias de los informes entregados a los pacientes"
]
},
{
enunciado: "Un inventario físico es el proceso de:",
correcta: "Verificar mediante recuento real las existencias del almacén",
incorrectas: [
"Calcular el valor de las acciones de la empresa en la bolsa",
"Evaluar la motivación de los trabajadores mediante cuestionarios"
]
}
];