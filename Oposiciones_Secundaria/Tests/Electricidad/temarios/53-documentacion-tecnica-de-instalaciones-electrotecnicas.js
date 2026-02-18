// 53-documentacion-tecnica-de-instalaciones-electrotecnicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué documento es preceptivo para la ejecución de instalaciones cuando la potencia supera los límites establecidos en la ITC-BT-04?",
    correcta: "Proyecto Técnico redactado y firmado por un técnico titulado competente",
    incorrectas: [
      "Memoria Técnica de Diseño (MTD)",
      "Certificado de Instalación Eléctrica (CIE) únicamente"
    ]
  },
  {
    enunciado: "¿Cuál es el contenido mínimo que debe incluir una Memoria Técnica de Diseño (MTD) según el REBT?",
    correcta: "Datos del titular, emplazamiento, uso, potencia prevista, relación de receptores, cálculos de líneas, esquema unifilar y croquis de trazado",
    incorrectas: [
      "Únicamente el presupuesto detallado y la marca de los mecanismos",
      "Plan de emergencia y evacuación firmado por el cuerpo de bomberos"
    ]
  },
  {
    enunciado: "¿Qué función tiene el Certificado de Instalación Eléctrica (CIE) o 'boletín'?",
    correcta: "Documento que fehacientemente refleja que la instalación se ha realizado conforme al REBT y al proyecto o memoria de diseño",
    incorrectas: [
      "Un contrato de mantenimiento entre el usuario y la empresa instaladora",
      "El permiso de obra concedido por el ayuntamiento"
    ]
  },
  {
    enunciado: "¿Quién es el responsable de emitir y firmar el Certificado de Fin de Obra en una instalación que requirió proyecto?",
    correcta: "El Director de Obra (técnico titulado competente)",
    incorrectas: [
      "El instalador autorizado exclusivamente",
      "El titular de la propiedad"
    ]
  },
  {
    enunciado: "En la documentación gráfica de un proyecto, ¿qué representa un esquema unifilar?",
    correcta: "Representación técnica simplificada donde cada circuito se indica con una sola línea, mostrando protecciones, secciones y características de la carga",
    incorrectas: [
      "Un dibujo en perspectiva de la ubicación de los enchufes",
      "Un diagrama que muestra todos los hilos físicos (fase, neutro y tierra) por separado"
    ]
  },
  {
    enunciado: "¿Qué normativa regula la estructura y contenido de los proyectos de ingeniería en España de forma general?",
    correcta: "Norma UNE 157001",
    incorrectas: [
      "Reglamento de Seguridad Industrial",
      "Código Técnico de la Edificación (CTE)"
    ]
  },
  {
    enunciado: "¿Qué documento debe entregar el instalador al titular de la instalación tras su finalización y puesta en servicio?",
    correcta: "El Certificado de Instalación junto con las instrucciones de uso, mantenimiento y precauciones de seguridad",
    incorrectas: [
      "El libro de órdenes del colegio profesional",
      "Copia de los recibos de compra del material"
    ]
  },
  {
    enunciado: "¿Qué es el Libro de Mantenimiento de una instalación eléctrica?",
    correcta: "Documento donde se registran todas las operaciones de mantenimiento preventivo, correctivo e inspecciones periódicas realizadas",
    incorrectas: [
      "El manual de instrucciones de la lavadora",
      "La factura de la compañía comercializadora"
    ]
  },
  {
    enunciado: "Para locales de pública concurrencia, ¿cada cuánto tiempo debe realizarse una inspección periódica por parte de un Organismo de Control (OCA)?",
    correcta: "Cada 5 años",
    incorrectas: [
      "Cada 10 años",
      "Cada año"
    ]
  },
  {
    enunciado: "¿Qué debe reflejar el Acta de Inspección de un Organismo de Control?",
    correcta: "El resultado de la verificación (Favorable, Favorable con defectos leves, o Desfavorable) respecto al REBT",
    incorrectas: [
      "El precio de mercado de la instalación",
      "La identidad de todos los trabajadores que ejecutaron la obra"
    ]
  },
  {
    enunciado: "En un proyecto eléctrico, ¿qué contiene el Pliego de Condiciones?",
    correcta: "Las cláusulas administrativas y técnicas que rigen la ejecución, calidad de materiales y pruebas de recepción",
    incorrectas: [
      "Los dibujos detallados de las canalizaciones",
      "El listado de precios unitarios de cada elemento"
    ]
  },
  {
    enunciado: "¿Qué es el Cuadro de Precios n.º 1 en el presupuesto de un proyecto?",
    correcta: "El que indica los precios unitarios en letra y número de las unidades de obra, sin incluir mediciones",
    incorrectas: [
      "El precio total final con IVA incluido",
      "El listado de proveedores recomendados"
    ]
  },
  {
    enunciado: "¿Qué documento es necesario para que la empresa distribuidora proceda al suministro de energía?",
    correcta: "El Certificado de Instalación (CIE) debidamente registrado ante el órgano competente de la Comunidad Autónoma",
    incorrectas: [
      "La licencia de apertura del local",
      "El DNI del electricista"
    ]
  },
  {
    enunciado: "¿Qué debe incluir obligatoriamente el Anexo de Cálculos de un proyecto fotovoltaico?",
    correcta: "Cálculo de la energía anual estimada, dimensionado de conductores (caída de tensión e I admisible) y cálculo de protecciones",
    incorrectas: [
      "La previsión de beneficios económicos por venta de excedentes",
      "El color de los marcos de los paneles"
    ]
  },
  {
    enunciado: "En el dibujo técnico asistido por ordenador (CAD), ¿qué es una capa (layer)?",
    correcta: "Una herramienta de organización que permite agrupar elementos similares (ej. iluminación) para visualizar o editar de forma independiente",
    incorrectas: [
      "El grosor del papel al imprimir",
      "La protección plástica de los cables"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo del esquema de principio o funcional?",
    correcta: "Explicar el funcionamiento lógico del circuito eléctrico facilitando su comprensión y la localización de averías",
    incorrectas: [
      "Mostrar la ubicación exacta de los cables en la pared",
      "Calcular el presupuesto de los conductores"
    ]
  },
  {
    enunciado: "¿Qué es el croquis de trazado en una Memoria Técnica de Diseño?",
    correcta: "Un esquema o planta que indica gráficamente por dónde discurren las canalizaciones y la ubicación de los receptores",
    incorrectas: [
      "Una fotografía de la fachada del edificio",
      "Un listado de los nombres de las calles adyacentes"
    ]
  },
  {
    enunciado: "¿Qué significa la legalización de una instalación eléctrica?",
    correcta: "El proceso administrativo de presentar la documentación técnica ante la Administración para obtener la autorización de puesta en servicio",
    incorrectas: [
      "Pagar el impuesto de bienes inmuebles",
      "Contratar un seguro de incendios"
    ]
  },
  {
    enunciado: "Según el CTE, ¿qué es el 'Proyecto de Ejecución'?",
    correcta: "La fase del proyecto que desarrolla el proyecto básico, con determinación completa de detalles y especificaciones de todos los materiales",
    incorrectas: [
      "El documento que firma el juez para iniciar una obra",
      "El manual que explica cómo usar los interruptores"
    ]
  },
  {
    enunciado: "¿Qué escala es habitual para representar planos de planta de instalaciones eléctricas en viviendas?",
    correcta: "1:50 o 1:100",
    incorrectas: [
      "1:5000",
      "1:1"
    ]
  },
  {
    enunciado: "¿Qué debe figurar en el cajetín de un plano técnico?",
    correcta: "Título del proyecto, nombre del plano, escala, fecha, autor y número de plano",
    incorrectas: [
      "La marca de la mesa de dibujo",
      "El historial médico del proyectista"
    ]
  },
  {
    enunciado: "¿Qué es un 'As-Built' en documentación técnica?",
    correcta: "Planos y documentos que reflejan cómo ha quedado realmente la instalación tras sufrir modificaciones durante la obra",
    incorrectas: [
      "Un plano de lo que se pretende construir inicialmente",
      "Un catálogo de mobiliario de oficina"
    ]
  },
  {
    enunciado: "¿Qué indica la simbología normalizada en los planos?",
    correcta: "El uso de representaciones gráficas universales (UNE/IEC) para que cualquier técnico pueda interpretar el diseño",
    incorrectas: [
      "El precio de los componentes",
      "La marca comercial del fabricante"
    ]
  },
  {
    enunciado: "¿Qué es el Programa de Control de Calidad en un proyecto?",
    correcta: "Documento que define las pruebas y ensayos que se realizarán para verificar que la instalación cumple las especificaciones",
    incorrectas: [
      "Un software para editar fotos de la obra",
      "El horario de entrada de los trabajadores"
    ]
  },
  {
    enunciado: "¿Para qué sirve el presupuesto por capítulos?",
    correcta: "Para agrupar económicamente unidades de obra afines (ej. Capítulo de Iluminación, Capítulo de Cuadros Eléctricos)",
    incorrectas: [
      "Para leer el proyecto como si fuera una novela",
      "Para dividir el pago entre varios bancos"
    ]
  },
  {
    enunciado: "¿Qué es la Declaración CE de Conformidad?",
    correcta: "Documento en el que el fabricante asegura que el equipo cumple con los requisitos de seguridad de las directivas europeas",
    incorrectas: [
      "Un permiso para exportar cables a China",
      "El título de propiedad de la empresa"
    ]
  },
  {
    enunciado: "¿Qué documentación técnica específica requiere una ICT (Infraestructura Común de Telecomunicaciones)?",
    correcta: "Proyecto de ICT, Acta de Replanteo, Boletín de Instalación y Protocolo de Pruebas",
    incorrectas: [
      "Solo el manual del router",
      "Certificado de eficiencia energética"
    ]
  },
  {
    enunciado: "¿Qué es el Estudio Básico de Seguridad y Salud?",
    correcta: "Documento que identifica los riesgos laborales y las medidas preventivas durante la ejecución de la instalación",
    incorrectas: [
      "Un examen médico para los inquilinos",
      "Un curso de primeros auxilios"
    ]
  },
  {
    enunciado: "¿Qué función tiene el Visado Colegial en un proyecto?",
    correcta: "Acreditar la identidad del autor, su habilitación profesional y la corrección formal de la documentación",
    incorrectas: [
      "Garantizar que los cálculos matemáticos son 100% exactos",
      "Sustituir a la licencia municipal"
    ]
  },
  {
    enunciado: "¿Qué información proporciona la leyenda en un plano de instalaciones?",
    correcta: "La correspondencia entre los símbolos gráficos utilizados y el nombre del elemento representado",
    incorrectas: [
      "La historia del edificio",
      "El listado de materiales sobrantes"
    ]
  },
  {
    enunciado: "¿Qué documento describe el funcionamiento de los automatismos en un proyecto industrial?",
    correcta: "Memoria descriptiva de funcionamiento o diagrama de secuencia",
    incorrectas: [
      "El presupuesto de mano de obra",
      "El plano de cimentación"
    ]
  },
  {
    enunciado: "En un esquema de circuitos de control, ¿qué diferencia al circuito de mando del de potencia?",
    correcta: "El de mando gestiona la lógica (baja corriente) y el de potencia alimenta los receptores (alta corriente)",
    incorrectas: [
      "El de mando siempre va por el suelo y el de potencia por el techo",
      "No hay diferencia, son el mismo cable"
    ]
  },
  {
    enunciado: "¿Qué es una unidad de obra?",
    correcta: "La parte del proyecto que puede medirse y valorarse de forma independiente (ej. metro de canalización, unidad de cuadro)",
    incorrectas: [
      "El despacho donde trabaja el ingeniero",
      "Un camión de herramientas"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la medición en el presupuesto?",
    correcta: "Determinar las cantidades exactas de cada unidad de obra para calcular el coste total",
    incorrectas: [
      "Saber el peso total para el transporte",
      "Comprobar que los planos caben en la mesa"
    ]
  },
  {
    enunciado: "¿Qué indica la ITC-BT-05 sobre las verificaciones?",
    correcta: "Que las instalaciones deben ser verificadas por el instalador antes de su puesta en servicio mediante inspección visual y ensayos",
    incorrectas: [
      "Que los cables deben ser de color azul siempre",
      "Que el dueño de la casa debe probar todos los enchufes"
    ]
  },
  {
    enunciado: "¿Qué ensayo es crítico documentar en la puesta en marcha de una instalación?",
    correcta: "Resistencia de aislamiento, continuidad de conductores de protección e impedancia de bucle",
    incorrectas: [
      "Temperatura de la pintura de los cuadros",
      "Resistencia al viento de los interruptores"
    ]
  },
  {
    enunciado: "¿Qué formato de archivo es el estándar de intercambio para planos CAD?",
    correcta: ".dxf (Drawing Exchange Format) o .dwg",
    incorrectas: [
      ".mp3",
      ".exe"
    ]
  },
  {
    enunciado: "¿Qué es la Memoria Descriptiva de un proyecto?",
    correcta: "El apartado que explica el objeto, antecedentes, descripción de la solución técnica adoptada y cumplimiento de normativa",
    incorrectas: [
      "Un resumen de los gastos de gasolina del técnico",
      "El listado de marcas comerciales utilizadas"
    ]
  },
  {
    enunciado: "¿Quién debe custodiar la documentación técnica durante la vida de la instalación?",
    correcta: "El titular o propietario de la instalación",
    incorrectas: [
      "La ferretería donde se compró el material",
      "El ayuntamiento exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué documentación se requiere para una modificación de importancia en una instalación existente?",
    correcta: "Actualización del proyecto o memoria técnica y nuevo Certificado de Instalación (CIE)",
    incorrectas: [
      "Ninguna, si la instalación ya tiene corriente",
      "Solo una nota manuscrita en el cuadro eléctrico"
    ]
  }
];