// temarios/01-organizacion-del-sistema-sanitario-espanol.js
'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Qué es un sistema sanitario en sentido técnico?",
    correcta: "Un conjunto organizado de recursos, normas y actividades orientados a proteger y mejorar la salud de una población",
    incorrectas: [
      "Un servicio hospitalario aislado que atiende urgencias y altas médicas",
      "Una red de seguros privados que sustituye completamente a la sanidad pública"
    ]
  },
  {
    enunciado: "¿Cuál es un objetivo general clásico de cualquier sistema sanitario?",
    correcta: "Garantizar el acceso a prestaciones sanitarias con equidad, calidad y seguridad",
    incorrectas: [
      "Aumentar el beneficio económico de las empresas sanitarias como fin principal",
      "Reducir la atención primaria para concentrar la asistencia solo en hospitales"
    ]
  },
  {
    enunciado: "¿Qué factor condiciona de forma directa la demanda sanitaria en España por su efecto sobre la cronicidad?",
    correcta: "El envejecimiento demográfico de la población",
    incorrectas: [
      "La disminución de la esperanza de vida en todos los grupos de edad",
      "La ausencia de tecnologías diagnósticas en el sistema sanitario"
    ]
  },
  {
    enunciado: "¿Qué se entiende por equidad sanitaria?",
    correcta: "Que el acceso y la atención se ajusten a la necesidad de salud, evitando desigualdades injustas",
    incorrectas: [
      "Que toda persona reciba exactamente el mismo tratamiento en cualquier situación clínica",
      "Que el acceso dependa de la capacidad de pago para incentivar el esfuerzo individual"
    ]
  },
  {
    enunciado: "¿Qué componente describe mejor la financiación de un sistema sanitario?",
    correcta: "El modo principal de obtener recursos económicos para sostener las prestaciones",
    incorrectas: [
      "El listado de especialidades médicas que existen en un país",
      "El organigrama interno de un hospital comarcal"
    ]
  },
  {
    enunciado: "¿Qué mecanismo de financiación corresponde al modelo Beveridge?",
    correcta: "Financiación mayoritaria mediante impuestos con cobertura universal",
    incorrectas: [
      "Financiación por cotizaciones obligatorias gestionadas por cajas de seguro ligadas al empleo",
      "Financiación por pago directo y seguros voluntarios como vía predominante"
    ]
  },
  {
    enunciado: "¿Qué característica es propia del modelo Bismarck clásico?",
    correcta: "La financiación por cotizaciones sociales obligatorias y la gestión a través de entidades aseguradoras",
    incorrectas: [
      "La financiación exclusiva por impuestos y la provisión enteramente pública en todo el país",
      "La ausencia de cobertura para trabajadores y la atención solo por beneficencia"
    ]
  },
  {
    enunciado: "¿Qué rasgo define al modelo liberal o de mercado en sanidad?",
    correcta: "El peso predominante del pago directo y/o seguros privados con cobertura no necesariamente universal",
    incorrectas: [
      "La cobertura universal garantizada por impuestos sin copagos",
      "La gestión exclusivamente estatal con planificación central de todos los servicios"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la provisión de servicios sanitarios?",
    correcta: "Quién presta efectivamente la atención: entidades públicas, privadas o mixtas",
    incorrectas: [
      "La norma constitucional que reconoce el derecho a la salud",
      "El sistema de codificación clínica utilizado en los hospitales"
    ]
  },
  {
    enunciado: "¿Qué significa cobertura universal en un sistema sanitario?",
    correcta: "Que toda la población tiene derecho a acceder a las prestaciones esenciales con independencia de su situación laboral",
    incorrectas: [
      "Que solo las personas aseguradas voluntariamente pueden acceder a la atención",
      "Que la cobertura se limita a urgencias y no incluye prevención ni seguimiento"
    ]
  },
  {
    enunciado: "¿Qué ley crea y configura el Sistema Nacional de Salud moderno en España?",
    correcta: "La Ley 14/1986, General de Sanidad",
    incorrectas: [
      "La Ley 31/1995, de Prevención de Riesgos Laborales",
      "El Real Decreto 486/1997, sobre lugares de trabajo"
    ]
  },
  {
    enunciado: "¿Qué norma refuerza la coordinación entre comunidades autónomas y define elementos comunes de prestaciones?",
    correcta: "La Ley 16/2003, de Cohesión y Calidad del Sistema Nacional de Salud",
    incorrectas: [
      "El Real Decreto 1277/2003, de autorización de centros sanitarios",
      "La Ley 44/2003, de ordenación de las profesiones sanitarias, como norma principal de coordinación territorial"
    ]
  },
  {
    enunciado: "¿Qué artículo de la Constitución Española reconoce el derecho a la protección de la salud?",
    correcta: "El artículo 43",
    incorrectas: [
      "El artículo 1",
      "El artículo 66"
    ]
  },
  {
    enunciado: "¿Qué significa que el SNS sea descentralizado?",
    correcta: "Que la gestión y organización de los servicios corresponde en gran medida a las comunidades autónomas",
    incorrectas: [
      "Que cada hospital actúa sin normas comunes ni coordinación",
      "Que el Ministerio de Sanidad gestiona directamente todos los centros y plantillas"
    ]
  },
  {
    enunciado: "¿Qué órgano se asocia de forma típica a la coordinación entre administraciones sanitarias en el SNS?",
    correcta: "El Consejo Interterritorial del Sistema Nacional de Salud",
    incorrectas: [
      "La Inspección de Trabajo como órgano principal de coordinación sanitaria",
      "El Colegio profesional como órgano superior de planificación del SNS"
    ]
  },
  {
    enunciado: "¿Cuál es una función habitual de la Administración General del Estado en sanidad?",
    correcta: "Establecer bases generales y coordinar aspectos comunes del sistema en el marco de sus competencias",
    incorrectas: [
      "Asignar a cada paciente un médico de familia en cada zona básica de salud",
      "Gestionar de forma ordinaria todas las listas de espera hospitalarias autonómicas"
    ]
  },
  {
    enunciado: "¿Qué son las áreas de salud y las zonas básicas de salud en la organización territorial sanitaria?",
    correcta: "Unidades territoriales para organizar y planificar la asistencia, especialmente la atención primaria",
    incorrectas: [
      "Departamentos administrativos exclusivos de la sanidad privada",
      "Servicios clínicos internos de un hospital para dividir quirófanos y laboratorios"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la atención primaria dentro del sistema sanitario público?",
    correcta: "Actúa como puerta de entrada, con funciones de promoción, prevención, asistencia y seguimiento",
    incorrectas: [
      "Se limita a técnicas de alta complejidad y hospitalización prolongada",
      "Se centra únicamente en intervenciones quirúrgicas urgentes"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la atención especializada?",
    correcta: "Atención de mayor complejidad que se presta en hospitales y centros de especialidades",
    incorrectas: [
      "Atención domiciliaria exclusivamente administrativa y sin actividad clínica",
      "Atención comunitaria dedicada solo a educación para la salud en colegios"
    ]
  },
  {
    enunciado: "¿Qué son los recursos humanos del sistema sanitario?",
    correcta: "El conjunto de profesionales sanitarios y no sanitarios que sostienen la actividad asistencial y de gestión",
    incorrectas: [
      "Solo el personal médico, excluyendo enfermería y técnicos",
      "Únicamente los pacientes y sus familias como parte del sistema"
    ]
  },
  {
    enunciado: "¿Qué incluye típicamente un recurso material y tecnológico sanitario?",
    correcta: "Infraestructuras, equipamiento diagnóstico-terapéutico y sistemas de información clínica",
    incorrectas: [
      "Solo documentos legales, sin centros ni equipamiento",
      "Únicamente los presupuestos, sin medios físicos ni tecnológicos"
    ]
  },
  {
    enunciado: "¿Cuál es la fuente principal de financiación del SNS en el modelo español actual?",
    correcta: "La financiación pública mediante impuestos a través de presupuestos del Estado y de las comunidades autónomas",
    incorrectas: [
      "La financiación casi exclusiva por pago directo del paciente en el acto sanitario",
      "La financiación obligatoria por cajas de seguro ligadas al empleo como sistema general"
    ]
  },
  {
    enunciado: "¿Qué significa que exista una cartera común de servicios en el SNS?",
    correcta: "Que se definen prestaciones esenciales comunes para toda la población, con garantías de acceso y calidad",
    incorrectas: [
      "Que todas las comunidades deben ofrecer exactamente los mismos horarios de consulta en todos los centros",
      "Que la asistencia se limita a urgencias y excluye prevención, rehabilitación y farmacia"
    ]
  },
  {
    enunciado: "¿Qué es un concierto sanitario en términos de provisión?",
    correcta: "Un acuerdo por el que el sistema público utiliza recursos privados para cubrir prestaciones con condiciones de control y calidad",
    incorrectas: [
      "Una norma constitucional que sustituye a la Ley General de Sanidad",
      "Un sistema de copago obligatorio por cada consulta en atención primaria"
    ]
  },
  {
    enunciado: "¿Qué son las mutualidades administrativas como MUFACE, ISFAS o MUGEJU?",
    correcta: "Entidades que gestionan la cobertura sanitaria de determinados colectivos de empleados públicos mediante modelos específicos",
    incorrectas: [
      "Hospitales públicos que solo atienden a pacientes extranjeros",
      "Empresas privadas que sustituyen legalmente al SNS en todo el territorio"
    ]
  },
  {
    enunciado: "¿Cuál es un reto estructural del SNS en las próximas décadas?",
    correcta: "El aumento de la cronicidad y la demanda asociada al envejecimiento, con presión sobre recursos y organización",
    incorrectas: [
      "La desaparición de la necesidad de prevención por el control total de enfermedades transmisibles",
      "La reducción del gasto farmacéutico por eliminación completa de innovaciones terapéuticas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por variabilidad en la práctica clínica como problema del sistema?",
    correcta: "Diferencias no justificadas en decisiones y procedimientos que pueden afectar a resultados y equidad",
    incorrectas: [
      "La obligación de que cada profesional aplique siempre un tratamiento distinto al anterior",
      "La variación estacional del clima como factor principal de organización hospitalaria"
    ]
  },
  {
    enunciado: "¿Qué norma es la referencia básica en España para la prevención de riesgos laborales?",
    correcta: "La Ley 31/1995, de Prevención de Riesgos Laborales",
    incorrectas: [
      "La Ley 16/2003, de Cohesión y Calidad del SNS",
      "La Ley 14/1986, General de Sanidad, como norma única y suficiente de prevención laboral"
    ]
  },
  {
    enunciado: "¿Qué regula de forma general las condiciones de los lugares de trabajo en la normativa española?",
    correcta: "El Real Decreto 486/1997, sobre disposiciones mínimas de seguridad y salud en los lugares de trabajo",
    incorrectas: [
      "El Real Decreto 1277/2003, sobre autorización de centros sanitarios",
      "La Constitución Española, como reglamento técnico de señalización y ventilación"
    ]
  },
  {
    enunciado: "¿Qué real decreto establece bases generales para la autorización de centros, servicios y establecimientos sanitarios?",
    correcta: "El Real Decreto 1277/2003",
    incorrectas: [
      "El Real Decreto 843/2011",
      "El Real Decreto 486/1997"
    ]
  },
  {
    enunciado: "¿Qué norma fija requisitos y condiciones mínimas de los servicios sanitarios de los servicios de prevención?",
    correcta: "El Real Decreto 843/2011",
    incorrectas: [
      "La Ley 14/1986, General de Sanidad",
      "La Ley 16/2003, de Cohesión y Calidad"
    ]
  },
  {
    enunciado: "¿Qué significa seguridad e higiene en un centro sanitario?",
    correcta: "Conjunto de medidas para proteger la salud de profesionales, pacientes y usuarios reduciendo riesgos y eventos adversos",
    incorrectas: [
      "Un conjunto de acciones solo estéticas para mejorar la imagen del edificio",
      "La sustitución de la prevención por sanciones cuando ocurre un accidente"
    ]
  },
  {
    enunciado: "¿Cuál es un riesgo específico frecuente en instituciones sanitarias?",
    correcta: "El riesgo biológico por exposición a sangre y otros fluidos potencialmente infecciosos",
    incorrectas: [
      "El riesgo de radiación solar directa como principal amenaza en quirófanos",
      "El riesgo de caídas de nieve como peligro habitual en consultas"
    ]
  },
  {
    enunciado: "¿Qué significa evaluar riesgos laborales en un hospital?",
    correcta: "Identificar peligros por áreas y tareas, valorar su probabilidad y gravedad y planificar medidas preventivas",
    incorrectas: [
      "Registrar solo los accidentes ya ocurridos sin modificar procedimientos",
      "Medir únicamente el gasto económico del hospital sin analizar condiciones de trabajo"
    ]
  },
  {
    enunciado: "¿Qué es un servicio de prevención en un centro sanitario?",
    correcta: "La estructura encargada de asesorar y aplicar la actividad preventiva, pudiendo ser propio, ajeno o mancomunado",
    incorrectas: [
      "Un servicio clínico que realiza únicamente pruebas diagnósticas de laboratorio",
      "Una unidad administrativa dedicada solo a facturar a pacientes"
    ]
  },
  {
    enunciado: "¿Qué incluye la planificación de la actividad preventiva?",
    correcta: "Acciones programadas como formación, información, vigilancia de la salud y protocolos según riesgos detectados",
    incorrectas: [
      "Solo la compra de equipamiento nuevo sin cambios organizativos",
      "Únicamente la redacción de un documento sin implantación ni seguimiento"
    ]
  },
  {
    enunciado: "¿Qué son las precauciones estándar en control de infecciones?",
    correcta: "Medidas básicas aplicables a toda persona asistida para reducir transmisión, incluyendo higiene de manos y uso de barreras",
    incorrectas: [
      "Medidas aplicables solo cuando el paciente tiene diagnóstico confirmado de una infección concreta",
      "Medidas que sustituyen completamente a la desinfección y esterilización del material"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la seguridad química en un centro sanitario?",
    correcta: "La gestión segura de sustancias peligrosas mediante almacenamiento, etiquetado, fichas de seguridad, ventilación y EPIs",
    incorrectas: [
      "La eliminación de todo producto químico, incluso desinfectantes, por principio",
      "El uso de productos sin etiqueta para evitar alarmas en el personal"
    ]
  },
  {
    enunciado: "¿Qué medida se asocia a la seguridad ergonómica en sanidad?",
    correcta: "Aplicar técnicas y ayudas para movilización de pacientes y prevenir lesiones musculoesqueléticas",
    incorrectas: [
      "Reducir la iluminación de pasillos para ahorrar energía",
      "Aumentar el peso de las cargas para fortalecer a la plantilla"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la documentación preventiva en un centro sanitario?",
    correcta: "Acreditar y ordenar evaluación de riesgos, planificación, formación, mantenimiento y controles, permitiendo seguimiento y auditoría",
    incorrectas: [
      "Sustituir la formación práctica por archivado de documentos",
      "Evitar inspecciones eliminando registros de incidentes y mantenimiento"
    ]
  },
  {
    enunciado: "¿Qué significa cultura de seguridad del paciente en una organización sanitaria?",
    correcta: "Un enfoque compartido que prioriza identificar riesgos, aprender de incidentes y mejorar procesos para reducir daño evitable",
    incorrectas: [
      "Un sistema que busca culpables individuales como única forma de prevención",
      "Un conjunto de normas que solo afecta a la limpieza y no a la práctica clínica"
    ]
  }
];