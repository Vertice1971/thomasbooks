'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el método de valoración de existencias obligatorio en el ámbito sanitario para productos con fecha de caducidad?",
    correcta: "FIFO / PEPS (First-In, First-Out)",
    incorrectas: [
      "LIFO / UEPS (Last-In, First-Out)",
      "NIFO (Next-In, First-Out)"
    ]
  },
  {
    enunciado: "En la gestión de inventarios mediante el análisis ABC, los artículos del grupo A se caracterizan por:",
    correcta: "Tener un alto valor económico y requerir un control muy riguroso",
    incorrectas: [
      "Ser los más numerosos en el almacén pero de escaso valor",
      "Tener una rotación nula y ser prescindibles para la actividad"
    ]
  },
  {
    enunciado: "El 'Punto de Pedido' se define técnicamente como:",
    correcta: "El nivel de existencias que indica la necesidad de realizar un nuevo pedido",
    incorrectas: [
      "La cantidad máxima que puede albergar físicamente el almacén",
      "El momento exacto en el que el proveedor entrega la mercancía"
    ]
  },
  {
    enunciado: "¿A qué temperatura debe mantenerse habitualmente la cadena de frío para la mayoría de las vacunas en un almacén de farmacia?",
    correcta: "Entre +2ºC y +8ºC",
    incorrectas: [
      "Entre -5ºC y 0ºC",
      "A temperatura ambiente controlada (20-25ºC)"
    ]
  },
  {
    enunciado: "El código de barras utilizado internacionalmente en logística sanitaria para incluir lote y caducidad es el:",
    correcta: "GS1-128",
    incorrectas: [
      "EAN-8",
      "Code 39"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de la 'Zona de Cuarentena' en un almacén sanitario?",
    correcta: "Alojar productos pendientes de validación, control de calidad o con alertas sanitarias",
    incorrectas: [
      "Almacenar exclusivamente productos radiactivos",
      "Servir de vestuario para el personal que manipula material estéril"
    ]
  },
  {
    enunciado: "En la gestión de almacenes, el concepto 'Lead Time' se refiere a:",
    correcta: "El tiempo que transcurre desde que se detecta la necesidad de un pedido hasta que se recibe",
    incorrectas: [
      "El tiempo que tarda el operario en recorrer el pasillo de picking",
      "La vida útil del producto antes de su caducidad"
    ]
  },
  {
    enunciado: "Un inventario 'perpetuo' es aquel que:",
    correcta: "Mantiene el stock actualizado en tiempo real tras cada entrada o salida",
    incorrectas: [
      "Se realiza únicamente una vez al año por imperativo legal",
      "Solo registra los productos que han caducado"
    ]
  },
  {
    enunciado: "¿Qué sigla identifica el sistema de clasificación química y terapéutica de los medicamentos?",
    correcta: "ATC",
    incorrectas: [
      "CIE-10",
      "Snomed-CT"
    ]
  },
  {
    enunciado: "El riesgo ergonómico más frecuente en el personal de almacenes sanitarios es:",
    correcta: "Trastornos musculoesqueléticos por manipulación manual de cargas",
    incorrectas: [
      "Hipoacusia por ruido de maquinaria",
      "Exposición a radiaciones ionizantes"
    ]
  },
  {
    enunciado: "La señalización de seguridad de color rojo en un almacén indica:",
    correcta: "Prohibición, peligro o material de lucha contra incendios",
    incorrectas: [
      "Situación de seguridad o salvamento",
      "Obligación de usar un equipo de protección individual"
    ]
  },
  {
    enunciado: "¿Qué documento debe acompañar siempre a la mercancía enviada por el proveedor para verificar el pedido?",
    correcta: "Albarán de entrega",
    incorrectas: [
      "Factura proforma",
      "Libro de estilo del fabricante"
    ]
  },
  {
    enunciado: "En el almacenamiento de material estéril, la principal medida de seguridad es:",
    correcta: "Mantener la integridad del envase y evitar condiciones de humedad excesiva",
    incorrectas: [
      "Mantener el material en contacto directo con el suelo",
      "Exponer el material a luz solar directa para su desinfección"
    ]
  },
  {
    enunciado: "El índice de rotación de stocks indica:",
    correcta: "El número de veces que se renuevan las existencias en un periodo",
    incorrectas: [
      "El peso máximo que soporta una estantería",
      "La cantidad de productos defectuosos devueltos al proveedor"
    ]
  },
  {
    enunciado: "La técnica de 'Picking' consiste en:",
    correcta: "La preparación de pedidos seleccionando unidades de distintas ubicaciones",
    incorrectas: [
      "El etiquetado de precios en el escaparate de la farmacia",
      "La limpieza de los muelles de carga con maquinaria pesada"
    ]
  },
  {
    enunciado: "Según el análisis de Pareto, ¿qué porcentaje aproximado del valor total del stock representan los artículos tipo C?",
    correcta: "5-10%",
    incorrectas: [
      "80-90%",
      "40-50%"
    ]
  },
  {
    enunciado: "¿Qué método contable calcula el valor de las existencias dividiendo el coste total de las compras entre el número de unidades?",
    correcta: "Precio Medio Ponderado (PMP)",
    incorrectas: [
      "Precio de última factura",
      "Valor de reposición mercado"
    ]
  },
  {
    enunciado: "Los estupefacientes en un almacén sanitario deben custodiarse en:",
    correcta: "Armarios o cajas fuertes bajo llave y con control estricto de entradas/salidas",
    incorrectas: [
      "Estanterías abiertas de fácil acceso para agilizar el picking",
      "En la zona de recepción junto a los bultos generales"
    ]
  },
  {
    enunciado: "El sistema de radiofrecuencia para identificar materiales sin contacto visual se denomina:",
    correcta: "RFID",
    incorrectas: [
      "ERP",
      "NFC Hospitalario"
    ]
  },
  {
    enunciado: "¿Cuál es la principal ventaja de un almacén sanitario centralizado para un área de salud?",
    correcta: "Reducción de costes por economías de escala y unificación de stocks",
    incorrectas: [
      "Mayor lentitud en la respuesta ante emergencias",
      "Necesidad de aumentar el stock de seguridad en cada centro"
    ]
  },
  {
    enunciado: "La rotura de stock se produce cuando:",
    correcta: "La demanda de un producto supera las existencias disponibles",
    incorrectas: [
      "Un envase de cristal se quiebra en el transporte",
      "El valor del inventario es superior al presupuesto anual"
    ]
  },
  {
    enunciado: "En un layout de almacén, el flujo 'unidireccional' sirve para:",
    correcta: "Evitar interferencias entre las operaciones de entrada y salida",
    incorrectas: [
      "Garantizar que solo trabaje una persona por pasillo",
      "Reducir el consumo eléctrico de las carretillas"
    ]
  },
  {
    enunciado: "¿Qué acción se debe realizar ante la detección de un lote de material defectuoso con alerta sanitaria?",
    correcta: "Inmovilización inmediata y traslado a zona de cuarentena",
    incorrectas: [
      "Reparto urgente a los servicios antes de que caduque",
      "Ocultación del dato para no generar alarma social"
    ]
  },
  {
    enunciado: "La estantería tipo 'compacta' o 'Drive-in' es ideal para:",
    correcta: "Almacenar grandes cantidades de palets de una misma referencia",
    incorrectas: [
      "Productos de picking manual muy variado",
      "Material clínico de uso diario en planta"
    ]
  },
  {
    enunciado: "¿Qué norma regula las condiciones mínimas de los lugares de trabajo, aplicable a los almacenes?",
    correcta: "Real Decreto 486/1997",
    incorrectas: [
      "Real Decreto 1277/2003",
      "Ley de Sociedades de Capital"
    ]
  },
  {
    enunciado: "El 'Stock Mínimo' es:",
    correcta: "La cantidad de producto que cubre la demanda durante el tiempo de reposición",
    incorrectas: [
      "La cantidad que cabe en una sola caja de cartón",
      "El número de empleados necesarios para mover la carga"
    ]
  },
  {
    enunciado: "El uso de termohigrógrafos en el almacén sanitario es necesario para:",
    correcta: "Registrar y controlar de forma continua la temperatura y humedad",
    incorrectas: [
      "Medir el peso exacto de las paletas de suero",
      "Detectar fugas de gas radón en los sótanos"
    ]
  },
  {
    enunciado: "¿Cuál es el fin último de la trazabilidad en logística sanitaria?",
    correcta: "Poder localizar y retirar cualquier producto en toda la cadena de suministro si falla la seguridad",
    incorrectas: [
      "Aumentar el precio final del servicio sanitario",
      "Evitar que el personal de enfermería realice pedidos"
    ]
  },
  {
    enunciado: "En la gestión 'Lean' aplicada al almacén, el término 'Seiri' significa:",
    correcta: "Clasificar y eliminar lo innecesario",
    incorrectas: [
      "Limpiar el suelo de las cámaras",
      "Estandarizar los turnos de trabajo"
    ]
  },
  {
    enunciado: "Los inflamables y alcoholes deben almacenarse en:",
    correcta: "Armarios ignífugos ventilados y alejados de focos de calor",
    incorrectas: [
      "Neveras de vacunas para evitar su evaporación",
      "Pasillos principales para su rápida distribución"
    ]
  },
  {
    enunciado: "El código Datamatrix se diferencia del código de barras lineal en que:",
    correcta: "Permite almacenar mucha más información en una superficie muy pequeña",
    incorrectas: [
      "No necesita escáner para ser leído",
      "Solo puede ser de color rojo"
    ]
  },
  {
    enunciado: "El material estéril debe colocarse en estanterías que estén:",
    correcta: "Separadas del suelo al menos 20 cm y de la pared",
    incorrectas: [
      "En contacto directo con el techo para aprovechar el calor",
      "Mezcladas con los productos de limpieza para desinfectar el aire"
    ]
  },
  {
    enunciado: "¿Qué indicador mide el tiempo que el capital está invertido en existencias antes de ser consumido?",
    correcta: "Días de inventario",
    incorrectas: [
      "Margen de beneficio por jeringuilla",
      "Tasa de absentismo logístico"
    ]
  },
  {
    enunciado: "La distribución 'en cascada' de los almacenes hospitalarios implica:",
    correcta: "Un almacén central que suministra a almacenes de planta o servicios",
    incorrectas: [
      "Que los productos caen por gravedad desde la azotea",
      "Que cada médico compra sus propios materiales"
    ]
  },
  {
    enunciado: "La señalización de color verde en seguridad laboral indica:",
    correcta: "Información de salvamento, auxilio o vía de salida",
    incorrectas: [
      "Peligro inminente de explosión",
      "Obligación de usar protección ocular"
    ]
  },
  {
    enunciado: "Un 'Recall' en logística sanitaria es:",
    correcta: "La retirada del mercado de un producto por defectos de calidad o seguridad",
    incorrectas: [
      "La llamada telefónica al proveedor para pedir descuento",
      "La devolución de un palet por error en el color de la caja"
    ]
  },
  {
    enunciado: "El método de almacenamiento 'caótico' u organizado por hueco libre requiere obligatoriamente:",
    correcta: "Un sistema informático (SGA/ERP) robusto que gestione las ubicaciones",
    incorrectas: [
      "Que no haya ningún tipo de orden en las estanterías",
      "Que los operarios memoricen dónde está cada producto"
    ]
  },
  {
    enunciado: "El transporte interno de muestras biológicas dentro del hospital debe realizarse en:",
    correcta: "Contenedores estancos con triple embalaje según normativa",
    incorrectas: [
      "Bolsas de plástico abiertas para ventilación",
      "Carros de picking junto con la comida"
    ]
  },
  {
    enunciado: "¿Qué autoridad supervisa las Buenas Prácticas de Distribución de Medicamentos en España?",
    correcta: "AEMPS (Agencia Española de Medicamentos y Productos Sanitarios)",
    incorrectas: [
      "Ministerio de Hacienda",
      "Ayuntamientos locales"
    ]
  },
  {
    enunciado: "El uso de carretillas elevadoras en pasillos de almacén requiere:",
    correcta: "Formación específica del operador y señalización de seguridad",
    incorrectas: [
      "Que el operario sea personal sanitario facultativo",
      "No requiere ninguna medida si la carretilla es eléctrica"
    ]
  }
];