// 67-desarrollo-de-proyectos-electrotecnicos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué documento de un proyecto tiene como objeto la justificación de las soluciones adoptadas y el cumplimiento de la normativa?",
    correcta: "La Memoria",
    incorrectas: [
      "El Pliego de Condiciones",
      "El Presupuesto"
    ]
  },
  {
    enunciado: "¿Qué parte de la memoria técnica describe los cálculos eléctricos (caídas de tensión, intensidades, etc.)?",
    correcta: "Anexo de Cálculos",
    incorrectas: [
      "Pliego de condiciones técnicas",
      "Estado de mediciones"
    ]
  },
  {
    enunciado: "¿Qué documento contractual establece las calidades de los materiales y las normas de ejecución de las unidades de obra?",
    correcta: "Pliego de Condiciones",
    incorrectas: [
      "Memoria Descriptiva",
      "Estudio de Seguridad y Salud"
    ]
  },
  {
    enunciado: "En la elaboración de planos, ¿qué representa un esquema unifilar?",
    correcta: "Una representación simplificada donde se muestran los conductores de un circuito mediante una sola línea, indicando el número de hilos con trazos oblicuos",
    incorrectas: [
      "Un plano de situación de la parcela en el municipio",
      "Un dibujo en perspectiva 3D de la canalización"
    ]
  },
  {
    enunciado: "¿Qué es el Cuadro de Precios nº 1 en un proyecto electrotécnico?",
    correcta: "El documento que contiene los precios unitarios de los materiales, mano de obra y maquinaria, expresados en letra y número",
    incorrectas: [
      "El resumen total del coste del proyecto incluyendo el IVA",
      "La lista de proveedores autorizados para la obra"
    ]
  },
  {
    enunciado: "¿Cuál es la función del Estudio de Seguridad y Salud?",
    correcta: "Identificar los riesgos laborales asociados al proyecto y establecer las medidas preventivas y protecciones técnicas necesarias",
    incorrectas: [
      "Garantizar que la instalación no se queme por un cortocircuito",
      "Asegurar que el proyecto sea rentable económicamente"
    ]
  },
  {
    enunciado: "¿Qué significa que un proyecto deba ser visado por un Colegio Profesional?",
    correcta: "Es un acto de control formal que comprueba la identidad y habilitación del autor y la integridad documental del proyecto según la norma",
    incorrectas: [
      "Que el Colegio paga los materiales de la instalación",
      "Que el proyecto se convierte automáticamente en ley nacional"
    ]
  },
  {
    enunciado: "En la fase de licitación, ¿qué es el 'Presupuesto de Ejecución Material' (PEM)?",
    correcta: "La suma del coste de los materiales y la mano de obra necesaria para ejecutar la instalación",
    incorrectas: [
      "El precio final que paga el cliente incluyendo beneficios e impuestos",
      "El dinero que se pide al banco para empezar la obra"
    ]
  },
  {
    enunciado: "¿Qué documento se utiliza para realizar el seguimiento económico de la obra mes a mes?",
    correcta: "Certificaciones de Obra",
    incorrectas: [
      "Libro de Órdenes",
      "Acta de Replanteo"
    ]
  },
  {
    enunciado: "¿Qué es el Acta de Replanteo?",
    correcta: "Documento que formaliza el inicio de la obra, comprobando que la realidad del terreno coincide con lo proyectado",
    incorrectas: [
      "La factura final de los trabajos realizados",
      "El plano donde se dibujan las modificaciones finales"
    ]
  },
  {
    enunciado: "¿Qué norma española regula la estructura y contenido de los proyectos?",
    correcta: "Norma UNE 157001",
    incorrectas: [
      "Reglamento Electrotécnico para Baja Tensión (REBT)",
      "Código Técnico de la Edificación (CTE)"
    ]
  },
  {
    enunciado: "¿Qué es un plano 'As Built'?",
    correcta: "Un plano que refleja fielmente cómo ha quedado la instalación tras la obra, incluyendo todas las modificaciones respecto al diseño original",
    incorrectas: [
      "Un plano de cómo debería ser la instalación en el futuro",
      "Un esquema que solo muestra las averías"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre un Proyecto y una Memoria Técnica de Diseño (MTD)?",
    correcta: "La MTD se utiliza para instalaciones sencillas o de baja potencia que no requieren la complejidad de un proyecto visado",
    incorrectas: [
      "El Proyecto es para instalaciones domésticas y la MTD para industrias",
      "No hay ninguna diferencia, son términos sinónimos"
    ]
  },
  {
    enunciado: "En la gestión de proyectos, ¿qué representa el diagrama de Gantt?",
    correcta: "Una herramienta gráfica que muestra la duración y el orden cronológico de las tareas del proyecto",
    incorrectas: [
      "El flujo de electrones en un conductor",
      "La distribución de costes por cada unidad de obra"
    ]
  },
  {
    enunciado: "¿Qué es el Camino Crítico (CPM) en la planificación de una instalación?",
    correcta: "La secuencia de tareas que determina la duración mínima del proyecto; si una de estas tareas se retrasa, se retrasa todo el proyecto",
    incorrectas: [
      "La zanja por donde pasan los cables principales de alta tensión",
      "La normativa de seguridad más difícil de cumplir"
    ]
  },
  {
    enunciado: "¿Qué incluyen los Gastos Generales en un Presupuesto de Ejecución por Contrata?",
    correcta: "Costes indirectos como oficinas, seguros, administración y vigilancia, normalmente entre un 13% y 17%",
    incorrectas: [
      "El sueldo directo de los instaladores",
      "El beneficio neto que gana el empresario"
    ]
  },
  {
    enunciado: "¿Cuál es la función del Director de Obra?",
    correcta: "Dirigir la ejecución técnica, económica y estética de la obra conforme al proyecto y las autorizaciones administrativas",
    incorrectas: [
      "Suministrar los materiales a pie de obra",
      "Realizar el mantenimiento de la instalación una vez terminada"
    ]
  },
  {
    enunciado: "¿Qué documento debe firmar el técnico al finalizar la instalación para solicitar el suministro eléctrico?",
    correcta: "Certificado de Fin de Obra",
    incorrectas: [
      "Presupuesto aceptado",
      "Pliego de condiciones particulares"
    ]
  },
  {
    enunciado: "¿Qué es la descomposición de una unidad de obra?",
    correcta: "Desglosar una partida (ej. metro de línea) en sus componentes básicos: cable, tubo, mano de obra y pequeño material",
    incorrectas: [
      "Reciclar los materiales sobrantes al final de la jornada",
      "Analizar por qué una bombilla se ha fundido"
    ]
  },
  {
    enunciado: "En un plano de planta, ¿qué escala es habitual para representar una vivienda?",
    correcta: "1:50 o 1:100",
    incorrectas: [
      "1:5000",
      "5:1"
    ]
  },
  {
    enunciado: "¿Qué es la Dirección Facultativa?",
    correcta: "El equipo de técnicos (Director de Obra y Director de Ejecución) encargados de la supervisión técnica de la obra",
    incorrectas: [
      "La directiva de la empresa eléctrica",
      "El conjunto de normas que rigen la profesión"
    ]
  },
  {
    enunciado: "¿Qué documento justifica que el proyecto cumple con el Reglamento Electrotécnico para Baja Tensión?",
    correcta: "Memoria Justificativa",
    incorrectas: [
      "Plano de situación",
      "Anuncio en el boletín oficial"
    ]
  },
  {
    enunciado: "¿Qué es el Libro de Órdenes y Asistencias?",
    correcta: "Documento donde el Director de Obra anota las instrucciones y observaciones dadas al constructor durante la ejecución",
    incorrectas: [
      "El manual de usuario de la caldera",
      "La lista de herramientas del taller"
    ]
  },
  {
    enunciado: "¿Para qué sirve el Plano de Situación?",
    correcta: "Para ubicar la obra dentro del término municipal y facilitar su localización geográfica exacta",
    incorrectas: [
      "Para saber dónde poner los enchufes en el salón",
      "Para dibujar el cuadro general de mando y protección"
    ]
  },
  {
    enunciado: "¿Qué es una Adenda a un proyecto?",
    correcta: "Un documento complementario que modifica o añade información al proyecto original antes de su ejecución definitiva",
    incorrectas: [
      "La factura del visado colegial",
      "El nombre del técnico que firma el plano"
    ]
  },
  {
    enunciado: "¿Qué es el Beneficio Industrial en un presupuesto?",
    correcta: "El margen de beneficio neto para la empresa constructora, establecido normalmente en un 6%",
    incorrectas: [
      "El ahorro que consigue el cliente al pedir varios presupuestos",
      "El dinero que se paga al ayuntamiento por la licencia"
    ]
  },
  {
    enunciado: "¿Qué se define en el 'Estado de Mediciones'?",
    correcta: "La relación detallada de las cantidades de cada unidad de obra necesarias para ejecutar el proyecto",
    incorrectas: [
      "La medida de la tensión y corriente en las pruebas finales",
      "El tamaño físico de los planos en papel"
    ]
  },
  {
    enunciado: "¿Qué es el Pliego de Cláusulas Administrativas?",
    correcta: "Documento que regula los aspectos legales y económicos de la relación entre el promotor y el contratista",
    incorrectas: [
      "El que describe cómo conectar los cables al motor",
      "Un anexo con las fórmulas de cálculo de secciones"
    ]
  },
  {
    enunciado: "¿Cuál es la última fase de un proyecto antes de su puesta en servicio?",
    correcta: "Recepción y Liquidación de la Obra",
    incorrectas: [
      "Diseño de los planos",
      "Cálculo de la caída de tensión"
    ]
  },
  {
    enunciado: "¿Qué es la Inspección Inicial en instalaciones de enlace?",
    correcta: "Verificación realizada por un Organismo de Control Autorizado (OCA) antes de la puesta en marcha en ciertos tipos de locales",
    incorrectas: [
      "La revisión que hace el dueño para ver si le gusta el color",
      "El examen que hace el alumno en el módulo de proyectos"
    ]
  }
];