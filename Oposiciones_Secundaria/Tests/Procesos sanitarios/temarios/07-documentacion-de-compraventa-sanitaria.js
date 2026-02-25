'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Qué ley regula con carácter general la facturación electrónica en el sector público español, afectando a los suministros sanitarios?",
    correcta: "Ley 25/2013",
    incorrectas: [
      "Ley General de Sanidad 14/1986",
      "Ley de Autonomía del Paciente 41/2002"
    ]
  },
  {
    enunciado: "El documento que emite el comprador para solicitar formalmente las mercancías al proveedor se denomina:",
    correcta: "Nota de pedido o pedido",
    incorrectas: [
      "Albarán",
      "Factura proforma"
    ]
  },
  {
    enunciado: "En un contrato de compraventa mercantil sanitaria, el elemento 'real' está constituido por:",
    correcta: "La cosa objeto del contrato (material sanitario) y el precio",
    incorrectas: [
      "El comprador y el vendedor exclusivamente",
      "El consentimiento verbal de las partes"
    ]
  },
  {
    enunciado: "El documento que acredita la entrega de la mercancía y sirve para que el comprador verifique el pedido se llama:",
    correcta: "Albarán o nota de entrega",
    incorrectas: [
      "Factura definitiva",
      "Presupuesto"
    ]
  },
  {
    enunciado: "¿Cuál es el plazo general de conservación de las facturas y documentos contables según el Código de Comercio?",
    correcta: "6 años",
    incorrectas: [
      "5 años",
      "2 años"
    ]
  },
  {
    enunciado: "La factura que se emite para corregir un error en una factura anterior o para gestionar una devolución se denomina:",
    correcta: "Factura rectificativa",
    incorrectas: [
      "Factura recapitulativa",
      "Factura proforma"
    ]
  },
  {
    enunciado: "En el ámbito sanitario, los servicios de asistencia médica y quirúrgica están, por regla general:",
    correcta: "Exentos de IVA",
    incorrectas: [
      "Gravados con el tipo general del 21%",
      "Gravados siempre con el tipo superreducido del 4%"
    ]
  },
  {
    enunciado: "El sistema EDI (Electronic Data Interchange) se utiliza en logística sanitaria para:",
    correcta: "El intercambio electrónico de documentos comerciales de forma estandarizada",
    incorrectas: [
      "El diagnóstico remoto de imágenes radiológicas",
      "La gestión de las vacaciones del personal"
    ]
  },
  {
    enunciado: "¿Qué documento comercial no tiene validez contable ni sirve de justificante de pago, siendo meramente informativo?",
    correcta: "Factura proforma",
    incorrectas: [
      "Factura electrónica",
      "Cheque conformado"
    ]
  },
  {
    enunciado: "El 'vencimiento' de una factura indica:",
    correcta: "La fecha límite legal para hacer efectivo el pago",
    incorrectas: [
      "La fecha en la que caducan los productos recibidos",
      "La fecha de emisión del albarán"
    ]
  },
  {
    enunciado: "En una licitación pública para el suministro de prótesis, el documento que establece las condiciones técnicas se llama:",
    correcta: "Pliego de Prescripciones Técnicas",
    incorrectas: [
      "Pliego de Cláusulas Administrativas",
      "Escritura de constitución"
    ]
  },
  {
    enunciado: "¿Qué es el 'descuento comercial' en una factura de material fungible?",
    correcta: "Una reducción sobre el precio de catálogo por volumen o promoción",
    incorrectas: [
      "Un impuesto adicional que se paga al ayuntamiento",
      "El recargo por pagar fuera de plazo"
    ]
  },
  {
    enunciado: "La base imponible de una factura es:",
    correcta: "El importe total de los productos antes de aplicar los impuestos",
    incorrectas: [
      "El total líquido a percibir por el proveedor",
      "La cuota resultante de aplicar el IVA"
    ]
  },
  {
    enunciado: "El punto de entrada de facturas electrónicas de la Administración General del Estado se conoce como:",
    correcta: "FACe",
    incorrectas: [
      "DIR3",
      "SEPE"
    ]
  },
  {
    enunciado: "¿Qué dato NO es obligatorio en una factura ordinaria según el RD 1619/2012?",
    correcta: "La fotografía de los productos suministrados",
    incorrectas: [
      "El Número de Identificación Fiscal (NIF) de ambas partes",
      "La fecha de expedición y numeración correlativa"
    ]
  },
  {
    enunciado: "El contrato de suministro se diferencia de la compraventa puntual en que:",
    correcta: "La entrega de bienes se realiza de forma sucesiva y periódica en el tiempo",
    incorrectas: [
      "Solo puede realizarse entre hospitales públicos",
      "No requiere factura, solo albaranes"
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'portes debidos' en el envío de material médico?",
    correcta: "El coste del transporte lo debe pagar el comprador al recibir la mercancía",
    incorrectas: [
      "El transporte ya ha sido pagado por el vendedor",
      "La mercancía viaja sin seguro de rotura"
    ]
  },
  {
    enunciado: "Un 'Rappel' en una operación de compraventa sanitaria es:",
    correcta: "Un descuento concedido por alcanzar un determinado volumen de compras",
    incorrectas: [
      "Una penalización por retraso en la entrega",
      "Un tipo de envase especial para material biológico"
    ]
  },
  {
    enunciado: "La firma del albarán por parte del servicio receptor implica:",
    correcta: "La conformidad con la recepción física de la mercancía",
    incorrectas: [
      "La aceptación del pago inmediato de la factura",
      "La renuncia a cualquier garantía técnica posterior"
    ]
  },
  {
    enunciado: "El devengo del IVA en la entrega de material sanitario se produce:",
    correcta: "En el momento de la puesta a disposición de los bienes (entrega)",
    incorrectas: [
      "Cuando el hospital recibe el presupuesto",
      "Al finalizar el año natural"
    ]
  },
  {
    enunciado: "En la gestión de compras, el 'homologar a un proveedor' consiste en:",
    correcta: "Verificar que cumple con los estándares de calidad y solvencia exigidos",
    incorrectas: [
      "Obligarle a bajar el precio un 50%",
      "Comprarle exclusivamente a él todos los productos del hospital"
    ]
  },
  {
    enunciado: "¿Qué documento administrativo justifica una devolución de material al proveedor por estar defectuoso?",
    correcta: "Albarán de retorno o nota de abono",
    incorrectas: [
      "Pedido de reposición",
      "Hoja de reclamaciones del paciente"
    ]
  },
  {
    enunciado: "El número DIR3 en la administración sanitaria española sirve para:",
    correcta: "Identificar de forma única la unidad administrativa u órgano gestor",
    incorrectas: [
      "Codificar los diagnósticos médicos",
      "Numerar correlativamente las camas de hospital"
    ]
  },
  {
    enunciado: "Las facturas simplificadas (antiguos tiques) pueden emitirse en lugar de facturas ordinarias cuando:",
    correcta: "El importe no supera los 400 euros (IVA incluido) en ciertos supuestos",
    incorrectas: [
      "El comprador es una entidad pública",
      "Se trata de la venta de equipos de resonancia magnética"
    ]
  },
  {
    enunciado: "El pago mediante transferencia bancaria se considera un medio de pago:",
    correcta: "Diferido o a crédito, según el plazo acordado",
    incorrectas: [
      "En metálico",
      "No legal en transacciones mercantiles"
    ]
  },
  {
    enunciado: "¿Qué es el 'incoterm' en una compraventa internacional de equipos médicos?",
    correcta: "Términos que definen las responsabilidades de costes y riesgos en el transporte",
    incorrectas: [
      "Un tipo de software para gestionar la historia clínica",
      "La marca comercial del fabricante"
    ]
  },
  {
    enunciado: "La factura recapitulativa permite:",
    correcta: "Agrupar en un solo documento varias operaciones realizadas en distintas fechas para un mismo destinatario",
    incorrectas: [
      "Incluir facturas de diferentes años en una sola",
      "Evitar el pago del IVA"
    ]
  },
  {
    enunciado: "El registro de facturas recibidas es obligatorio para:",
    correcta: "Todas las empresas y profesionales en el ejercicio de su actividad",
    incorrectas: [
      "Solo para hospitales de más de 500 camas",
      "Exclusivamente para los proveedores extranjeros"
    ]
  },
  {
    enunciado: "En el sector público, el retraso en el pago de facturas genera a favor del proveedor:",
    correcta: "Intereses de demora y una indemnización por costes de cobro",
    incorrectas: [
      "El derecho a llevarse la mercancía de vuelta sin avisar",
      "La exención de pagar sus propios impuestos"
    ]
  },
  {
    enunciado: "¿Cuál es el IVA aplicable a los equipos médicos, aparatos y demás instrumental destinado a compensar deficiencias físicas de personas?",
    correcta: "Tipo reducido (10%)",
    incorrectas: [
      "Tipo general (21%)",
      "Tipo superreducido (4%)"
    ]
  },
  {
    enunciado: "El documento que detalla la relación de bultos, pesos y contenidos de un envío se denomina:",
    correcta: "Packing list o lista de bultos",
    incorrectas: [
      "Factura recapitulativa",
      "Libro diario"
    ]
  },
  {
    enunciado: "El subsistema de gestión de compras de un hospital se integra generalmente en:",
    correcta: "El ERP (Enterprise Resource Planning)",
    incorrectas: [
      "El sistema de triaje de urgencias",
      "El archivo de anatomía patológica"
    ]
  },
  {
    enunciado: "El 'pago al contado' en términos mercantiles suele implicar el pago en un plazo máximo de:",
    correcta: "30 días (según Ley de Morosidad si no se pacta otra cosa)",
    incorrectas: [
      "12 meses",
      "Inmediatamente antes de fabricar el producto"
    ]
  },
  {
    enunciado: "La firma digital en una factura electrónica garantiza:",
    correcta: "La autenticidad del origen y la integridad del contenido",
    incorrectas: [
      "Que el banco tenga fondos suficientes para pagar",
      "Que el producto no va a caducar nunca"
    ]
  },
  {
    enunciado: "¿Qué organismo asigna el Código Nacional (CN) a los productos de parafarmacia en España?",
    correcta: "Consejo General de Colegios Oficiales de Farmacéuticos",
    incorrectas: [
      "Ministerio de Economía",
      "Registro Mercantil"
    ]
  },
  {
    enunciado: "El proceso de 'comulgar' una factura con su albarán y pedido se llama:",
    correcta: "Casación o conciliación de documentos",
    incorrectas: [
      "Liquidación de haberes",
      "Auditoría externa"
    ]
  },
  {
    enunciado: "En el caso de suministros menores en centros públicos, se suele utilizar:",
    correcta: "El contrato menor (procedimiento simplificado)",
    incorrectas: [
      "La licitación internacional abierta",
      "El trueque de materiales"
    ]
  },
  {
    enunciado: "La obligación de emitir factura recae sobre:",
    correcta: "El empresario o profesional que realiza la entrega del bien",
    incorrectas: [
      "El transportista que entrega el bulto",
      "El paciente que recibe el tratamiento"
    ]
  },
  {
    enunciado: "¿Qué elemento es indispensable en el cuerpo de una factura para identificar el producto?",
    correcta: "Descripción de la mercancía, cantidad y precio unitario",
    incorrectas: [
      "Nombre de los accionistas de la empresa",
      "Color de las paredes del almacén de origen"
    ]
  },
  {
    enunciado: "La gestión de la compraventa sanitaria tiene como fin último:",
    correcta: "Asegurar el suministro eficiente para garantizar la asistencia sanitaria",
    incorrectas: [
      "Acumular el máximo stock posible sin importar el coste",
      "Pagar siempre al precio más alto para asegurar calidad"
    ]
  }
];