// temarios/03-economia-de-la-salud.js
'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la economía de la salud como disciplina aplicada?",
    correcta: "Cómo se asignan y utilizan recursos escasos para producir salud con criterios de eficiencia y equidad",
    incorrectas: [
      "Cómo maximizar exclusivamente el beneficio económico de hospitales privados",
      "Cómo sustituir las decisiones clínicas por decisiones contables automáticas"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia conceptual entre salud y sanidad?",
    correcta: "La salud es un resultado o estado, mientras que la sanidad es el conjunto de recursos y servicios para mejorarla",
    incorrectas: [
      "La salud es un servicio hospitalario y la sanidad un indicador estadístico",
      "La sanidad es un estado biológico y la salud un conjunto de normas jurídicas"
    ]
  },
  {
    enunciado: "¿Cuál es uno de los objetivos centrales de la economía de la salud?",
    correcta: "Maximizar el nivel de salud alcanzado con recursos limitados",
    incorrectas: [
      "Eliminar cualquier forma de intervención pública en sanidad",
      "Garantizar que todas las intervenciones tengan el mismo coste independientemente del resultado"
    ]
  },
  {
    enunciado: "¿Por qué la salud no es un bien directamente transable en el mercado?",
    correcta: "Porque lo que se intercambia son servicios sanitarios que influyen en la salud, no la salud en sí misma",
    incorrectas: [
      "Porque la salud solo puede ser producida por el Estado",
      "Porque la salud tiene siempre un precio fijo establecido legalmente"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracteriza especialmente al sector sanitario desde el punto de vista económico?",
    correcta: "La presencia de información asimétrica entre profesional y paciente",
    incorrectas: [
      "La transparencia total y simétrica de toda la información clínica y técnica",
      "La ausencia de incertidumbre en los resultados de los tratamientos"
    ]
  },
  {
    enunciado: "¿Qué es la información asimétrica en el ámbito sanitario?",
    correcta: "La situación en la que el profesional dispone de más información técnica que el paciente",
    incorrectas: [
      "La obligación legal de publicar todos los historiales clínicos",
      "La igualdad absoluta de conocimientos médicos entre paciente y profesional"
    ]
  },
  {
    enunciado: "¿Qué describe el concepto de riesgo moral en sanidad?",
    correcta: "El aumento potencial del consumo de servicios cuando el paciente no asume el coste completo",
    incorrectas: [
      "La negligencia profesional por falta de ética individual",
      "La obligación de pagar todos los servicios sin cobertura de seguro"
    ]
  },
  {
    enunciado: "¿Qué es la selección adversa en el mercado de seguros sanitarios?",
    correcta: "La tendencia de personas con mayor riesgo a contratar más frecuentemente seguros voluntarios",
    incorrectas: [
      "La exclusión automática de pacientes con enfermedades crónicas por ley",
      "La obligación de asegurar solo a personas jóvenes y sanas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por externalidad en economía de la salud?",
    correcta: "Un efecto de una intervención sanitaria que afecta a terceros no directamente implicados",
    incorrectas: [
      "Un coste exclusivamente privado sin impacto social",
      "Una decisión clínica que no tiene consecuencias fuera del hospital"
    ]
  },
  {
    enunciado: "¿Por qué la vacunación es un ejemplo clásico de externalidad positiva?",
    correcta: "Porque protege no solo al vacunado sino también a la comunidad al reducir la transmisión",
    incorrectas: [
      "Porque genera ingresos directos para los profesionales sanitarios",
      "Porque elimina completamente el gasto sanitario futuro"
    ]
  },
  {
    enunciado: "¿Qué factor contribuye al crecimiento del gasto sanitario en las últimas décadas?",
    correcta: "El envejecimiento poblacional y el aumento de enfermedades crónicas",
    incorrectas: [
      "La desaparición de tecnologías médicas innovadoras",
      "La reducción sostenida de la esperanza de vida en todos los países"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el progreso tecnológico en el gasto sanitario?",
    correcta: "Introduce innovaciones que pueden mejorar resultados pero a menudo incrementan costes",
    incorrectas: [
      "Reduce siempre el coste total sin modificar la calidad asistencial",
      "Elimina la necesidad de evaluar eficiencia en las intervenciones"
    ]
  },
  {
    enunciado: "¿Qué es un coste en economía de la salud?",
    correcta: "El valor de los recursos sacrificados para obtener una intervención o servicio sanitario",
    incorrectas: [
      "El precio fijado arbitrariamente por el profesional en cada consulta",
      "Una estimación subjetiva del paciente sobre su enfermedad"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a un coste directo sanitario?",
    correcta: "El gasto en hospitalización, pruebas diagnósticas y medicamentos",
    incorrectas: [
      "La pérdida de productividad laboral por incapacidad temporal",
      "El tiempo de ocio perdido por el paciente"
    ]
  },
  {
    enunciado: "¿Qué son los costes indirectos?",
    correcta: "Las pérdidas de productividad asociadas a enfermedad, discapacidad o muerte prematura",
    incorrectas: [
      "Los gastos administrativos internos del hospital",
      "Los honorarios pactados con aseguradoras privadas"
    ]
  },
  {
    enunciado: "¿Qué miden los AVAC o QALY?",
    correcta: "Años de vida ajustados por calidad que combinan cantidad y calidad de vida",
    incorrectas: [
      "Número total de consultas realizadas en un año",
      "Coste total anual de un servicio hospitalario"
    ]
  },
  {
    enunciado: "¿Para qué sirve el análisis coste-efectividad?",
    correcta: "Para comparar el coste de alternativas en relación con resultados medidos en unidades naturales",
    incorrectas: [
      "Para convertir todos los resultados sanitarios en valores monetarios",
      "Para ignorar los resultados clínicos y centrarse solo en el gasto"
    ]
  },
  {
    enunciado: "¿Qué diferencia al análisis coste-utilidad del coste-efectividad?",
    correcta: "Que utiliza medidas de utilidad como los AVAC para permitir comparaciones entre intervenciones distintas",
    incorrectas: [
      "Que solo analiza intervenciones preventivas y no terapéuticas",
      "Que no considera el coste de las alternativas comparadas"
    ]
  },
  {
    enunciado: "¿Qué es el análisis coste-beneficio?",
    correcta: "Una evaluación que expresa tanto costes como beneficios en términos monetarios",
    incorrectas: [
      "Una comparación exclusivamente clínica sin valoración económica",
      "Un análisis limitado a describir presupuestos históricos"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene el análisis de impacto presupuestario?",
    correcta: "Estimar la carga financiera de introducir una intervención en un sistema concreto",
    incorrectas: [
      "Determinar la eficacia clínica sin tener en cuenta el presupuesto",
      "Eliminar cualquier restricción económica en la toma de decisiones"
    ]
  },
  {
    enunciado: "¿Qué implica definir la perspectiva en una evaluación económica?",
    correcta: "Determinar desde qué punto de vista se contabilizan costes y resultados, como sistema sanitario o sociedad",
    incorrectas: [
      "Elegir al azar los datos que se van a utilizar",
      "Excluir los costes indirectos de manera sistemática"
    ]
  },
  {
    enunciado: "¿Por qué se aplica descuento temporal en evaluaciones a largo plazo?",
    correcta: "Porque los costes y beneficios futuros tienen un valor diferente al presente",
    incorrectas: [
      "Porque los resultados clínicos no importan en el largo plazo",
      "Porque todos los costes futuros son siempre mayores que los actuales"
    ]
  },
  {
    enunciado: "¿Qué es un análisis de sensibilidad?",
    correcta: "Una prueba que evalúa cómo cambian los resultados cuando se modifican supuestos o parámetros clave",
    incorrectas: [
      "Una encuesta de satisfacción a pacientes sobre precios",
      "Un cálculo fijo que no admite variaciones"
    ]
  },
  {
    enunciado: "¿Por qué el mercado sanitario no es perfectamente competitivo?",
    correcta: "Por la existencia de información imperfecta, poder de mercado e intervención pública",
    incorrectas: [
      "Porque todos los hospitales compiten en igualdad total de condiciones",
      "Porque los precios se determinan únicamente por oferta y demanda sin regulación"
    ]
  },
  {
    enunciado: "¿Quiénes son los principales financiadores en un sistema sanitario público tipo Beveridge?",
    correcta: "El Estado y las comunidades autónomas a través de impuestos",
    incorrectas: [
      "Exclusivamente las aseguradoras privadas voluntarias",
      "Solo los pacientes mediante pago directo en cada acto"
    ]
  },
  {
    enunciado: "¿Qué es la capitación como forma de pago a proveedores?",
    correcta: "Un sistema en el que se paga una cantidad fija por persona asignada, independientemente del número de actos realizados",
    incorrectas: [
      "Un pago por cada prueba o intervención realizada",
      "Un salario variable según la satisfacción subjetiva del paciente"
    ]
  },
  {
    enunciado: "¿Qué es el pago por acto en sanidad?",
    correcta: "Un sistema en el que el proveedor recibe remuneración por cada servicio o procedimiento realizado",
    incorrectas: [
      "Un pago fijo anual independientemente de la actividad",
      "Un sistema exclusivo para profesionales de atención primaria"
    ]
  },
  {
    enunciado: "¿Qué significa eficiencia técnica?",
    correcta: "Producir un nivel determinado de servicios con el menor coste posible",
    incorrectas: [
      "Aumentar el gasto sanitario para mejorar la imagen institucional",
      "Reducir la calidad asistencial para ahorrar recursos"
    ]
  },
  {
    enunciado: "¿Qué es eficiencia asignativa?",
    correcta: "Asignar recursos a intervenciones que generan mayor beneficio en salud para la sociedad",
    incorrectas: [
      "Distribuir recursos de forma uniforme sin considerar resultados",
      "Priorizar siempre las intervenciones más costosas"
    ]
  },
  {
    enunciado: "¿Qué significa sostenibilidad del sistema sanitario?",
    correcta: "Capacidad de mantener prestaciones en el tiempo adaptándose a cambios demográficos y tecnológicos",
    incorrectas: [
      "Eliminar toda innovación para evitar gastos",
      "Aumentar indefinidamente el gasto sin control presupuestario"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la evaluación de tecnologías sanitarias en el SNS?",
    correcta: "Analizar eficacia, seguridad y coste para decidir financiación y condiciones de uso",
    incorrectas: [
      "Autorizar automáticamente cualquier innovación disponible en el mercado",
      "Evaluar solo el precio sin considerar resultados clínicos"
    ]
  },
  {
    enunciado: "¿Por qué es importante la economía de la salud para los profesionales sanitarios?",
    correcta: "Porque permite comprender la necesidad de priorizar intervenciones coste-efectivas en un contexto de recursos limitados",
    incorrectas: [
      "Porque sustituye completamente el criterio clínico individual",
      "Porque elimina la responsabilidad ética en la toma de decisiones"
    ]
  }
];