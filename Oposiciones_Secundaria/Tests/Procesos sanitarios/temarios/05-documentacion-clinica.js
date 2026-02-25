'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la norma estatal básica que regula los derechos y obligaciones en materia de información y documentación clínica?",
    correcta: "Ley 41/2002",
    incorrectas: [
      "Ley 14/1986",
      "Ley 44/2003"
    ]
  },
  {
    enunciado: "Según la Ley 41/2002, ¿quién es el responsable de la custodia de la historia clínica en un centro hospitalario?",
    correcta: "La institución sanitaria",
    incorrectas: [
      "El médico responsable del paciente",
      "El paciente o sus representantes legales"
    ]
  },
  {
    enunciado: "¿Cuál es el plazo mínimo de conservación de la documentación clínica en España contado desde la fecha del alta de cada proceso asistencial?",
    correcta: "5 años",
    incorrectas: [
      "10 años",
      "2 años"
    ]
  },
  {
    enunciado: "El registro que recoge datos clínicos y administrativos de cada alta hospitalaria para su tratamiento estadístico se denomina:",
    correcta: "CMBD (Conjunto Mínimo Básico de Datos)",
    incorrectas: [
      "HCE (Historia Clínica Electrónica)",
      "CIE (Clasificación Internacional de Enfermedades)"
    ]
  },
  {
    enunciado: "¿Qué documento de la historia clínica debe ser entregado obligatoriamente al paciente al finalizar su estancia en el hospital?",
    correcta: "Informe de alta",
    incorrectas: [
      "Hoja de evolución clínica",
      "Copia de todas las gráficas de enfermería"
    ]
  },
  {
    enunciado: "El consentimiento informado debe ser, por regla general:",
    correcta: "Verbal, salvo en intervenciones quirúrgicas y procedimientos invasores",
    incorrectas: [
      "Siempre por escrito para cualquier acto médico",
      "Verbal en todos los casos si hay testigos presentes"
    ]
  },
  {
    enunciado: "¿En qué situación se puede omitir el consentimiento informado según la legislación vigente?",
    correcta: "Riesgo inmediato grave para la integridad física o psíquica del enfermo",
    incorrectas: [
      "Cuando el paciente es mayor de 65 años",
      "Cuando el médico considera que el tratamiento es el mejor disponible"
    ]
  },
  {
    enunciado: "En la Historia Clínica Electrónica, la capacidad de diferentes sistemas para intercambiar y utilizar información se define como:",
    correcta: "Interoperabilidad",
    incorrectas: [
      "Trazabilidad",
      "Integridad de datos"
    ]
  },
  {
    enunciado: "¿Qué tipo de documentación sanitaria es un 'parte de interconsulta'?",
    correcta: "Documentación clínica indirecta",
    incorrectas: [
      "Documentación no clínica interna",
      "Documentación administrativa externa"
    ]
  },
  {
    enunciado: "El documento que registra de forma gráfica la evolución de las constantes vitales se incluye en:",
    correcta: "La documentación de enfermería",
    incorrectas: [
      "La anamnesis médica",
      "El consentimiento informado"
    ]
  },
  {
    enunciado: "¿Quién tiene derecho a acceder a la historia clínica del paciente fallecido según la Ley 41/2002?",
    correcta: "Las personas vinculadas a él por razones familiares o de hecho, salvo prohibición expresa",
    incorrectas: [
      "Cualquier ciudadano que lo solicite por escrito",
      "Exclusivamente el personal de administración del centro"
    ]
  },
  {
    enunciado: "La clasificación de enfermedades utilizada actualmente en España para la codificación del CMBD es:",
    correcta: "CIE-10-ES",
    incorrectas: [
      "CIE-9-MC",
      "NANDA"
    ]
  },
  {
    enunciado: "Un documento sanitario 'extrahospitalario' es aquel que:",
    correcta: "Se transmite entre diferentes centros o niveles asistenciales",
    incorrectas: [
      "Solo puede ser leído por personal no sanitario",
      "Se destruye inmediatamente después del alta"
    ]
  },
  {
    enunciado: "¿Qué sigla identifica al nodo central que permite la consulta de datos clínicos entre distintas Comunidades Autónomas?",
    correcta: "HCDSNS",
    incorrectas: [
      "SNS-H",
      "INTRA-H"
    ]
  },
  {
    enunciado: "La 'anamnesis' en una historia clínica es:",
    correcta: "La parte que recoge la información subjetiva aportada por el paciente",
    incorrectas: [
      "El informe técnico detallado de una biopsia",
      "La autorización para una transfusión sanguínea"
    ]
  },
  {
    enunciado: "Un volante de transporte sanitario se clasifica como:",
    correcta: "Documentación no clínica externa",
    incorrectas: [
      "Documentación clínica directa",
      "Documentación de enfermería especializada"
    ]
  },
  {
    enunciado: "¿Qué principio garantiza que la información clínica no sea alterada de forma no autorizada?",
    correcta: "Integridad",
    incorrectas: [
      "Unicidad",
      "Accesibilidad"
    ]
  },
  {
    enunciado: "La firma electrónica en la documentación clínica digital garantiza:",
    correcta: "Autenticidad e integridad del documento",
    incorrectas: [
      "Que el documento sea gratuito para el sistema",
      "La curación del paciente tras el tratamiento"
    ]
  },
  {
    enunciado: "El informe de cuidados de enfermería es fundamental para garantizar:",
    correcta: "La continuidad asistencial entre niveles",
    incorrectas: [
      "La facturación de los materiales utilizados",
      "El cumplimiento del horario laboral"
    ]
  },
  {
    enunciado: "¿Cómo se denomina la unidad encargada de organizar, custodiar y gestionar las historias clínicas en un hospital?",
    correcta: "Servicio de Admisión y Documentación Clínica (SADC)",
    incorrectas: [
      "Unidad de Cuidados Intensivos",
      "Servicio de Atención al Usuario"
    ]
  },
  {
    enunciado: "La hoja de tratamiento farmacológico debe recoger:",
    correcta: "Fármaco, dosis, vía de administración y pauta horaria",
    incorrectas: [
      "Únicamente el nombre comercial del medicamento",
      "El coste de cada dosis para el hospital"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de la hoja clínico-estadística?",
    correcta: "Recoger datos para la gestión, planificación y evaluación sanitaria",
    incorrectas: [
      "Sustituir al informe de alta médica",
      "Informar a los familiares sobre el estado del paciente"
    ]
  },
  {
    enunciado: "El derecho a la rectificación de datos en la historia clínica está amparado por:",
    correcta: "LOPDGDD y RGPD",
    incorrectas: [
      "Código de Comercio",
      "Ley General de Sanidad exclusivamente"
    ]
  },
  {
    enunciado: "El documento donde el facultativo anota los cambios diarios observados en el paciente se llama:",
    correcta: "Hoja de evolución",
    incorrectas: [
      "Hoja de anamnesis",
      "Hoja de órdenes médicas"
    ]
  },
  {
    enunciado: "En el contexto de la documentación, ¿qué es la 'trazabilidad'?",
    correcta: "Capacidad de reconstruir la historia de un documento o actuación médica",
    incorrectas: [
      "El tiempo que tarda una ambulancia en llegar al centro",
      "La velocidad de conexión de la red hospitalaria"
    ]
  },
  {
    enunciado: "¿Qué documento es preceptivo para realizar una autopsia clínica?",
    correcta: "Autorización de los familiares o consentimiento previo del fallecido",
    incorrectas: [
      "Solo el informe médico de defunción",
      "Una orden judicial en todos los casos"
    ]
  },
  {
    enunciado: "El sistema de clasificación 'NANDA' se utiliza específicamente en:",
    correcta: "Diagnósticos de enfermería",
    incorrectas: [
      "Codificación de causas de muerte",
      "Clasificación de fármacos oncológicos"
    ]
  },
  {
    enunciado: "La gestión de agendas de citación en un centro de salud es competencia de:",
    correcta: "La unidad de atención al usuario / administrativo",
    incorrectas: [
      "El médico de cabecera directamente",
      "El servicio de urgencias hospitalario"
    ]
  },
  {
    enunciado: "¿Qué información NO suele incluirse en un informe de alta clínica?",
    correcta: "Datos de la cuenta bancaria del paciente",
    incorrectas: [
      "Resumen de la historia clínica y exploración",
      "Tratamiento recomendado al alta"
    ]
  },
  {
    enunciado: "El deber de secreto profesional en el acceso a la documentación clínica afecta a:",
    correcta: "Todo el personal (sanitario y no sanitario) que acceda a los datos",
    incorrectas: [
      "Exclusivamente a los médicos titulados",
      "Solo al personal que tiene contacto físico con el paciente"
    ]
  },
  {
    enunciado: "La historia clínica tiene un valor judicial porque:",
    correcta: "Es un documento público o privado que sirve de prueba en litigios de mala praxis",
    incorrectas: [
      "Contiene la firma del juez de guardia",
      "Se redacta siempre ante notario"
    ]
  },
  {
    enunciado: "En la HCE, un acceso no autorizado a los datos de un paciente puede constituir:",
    correcta: "Un delito contra la intimidad tipificado en el Código Penal",
    incorrectas: [
      "Una falta administrativa leve sin consecuencias",
      "Una acción permitida si es por curiosidad académica"
    ]
  },
  {
    enunciado: "¿Qué documento administrativo se utiliza para registrar la entrada de material en el almacén de un laboratorio?",
    correcta: "Albarán de entrega",
    incorrectas: [
      "Petición de analítica",
      "Hoja de carga de muestras"
    ]
  },
  {
    enunciado: "La epicrisis es un término médico-documental que hace referencia a:",
    correcta: "El resumen final y juicio crítico de un proceso asistencial",
    incorrectas: [
      "El momento de máximo dolor del paciente",
      "La solicitud de una segunda opinión"
    ]
  },
  {
    enunciado: "El documento de 'Instrucciones Previas' (testamento vital) debe constar en:",
    correcta: "La historia clínica del paciente",
    incorrectas: [
      "El registro de la propiedad únicamente",
      "La base de datos de la seguridad social del empleador"
    ]
  },
  {
    enunciado: "¿Qué sigla define al identificador único de cada paciente en el Sistema Nacional de Salud?",
    correcta: "CIP (Código de Identificación Personal)",
    incorrectas: [
      "NIF",
      "NUSS"
    ]
  },
  {
    enunciado: "El informe de anatomía patológica se considera:",
    correcta: "Documentación clínica indirecta o complementaria",
    incorrectas: [
      "Documentación no clínica de gestión",
      "Hoja de tratamiento"
    ]
  },
  {
    enunciado: "La 'unidosis' en farmacia hospitalaria requiere una documentación específica para:",
    correcta: "Garantizar la trazabilidad y seguridad en la administración del fármaco",
    incorrectas: [
      "Aumentar el gasto en envases de plástico",
      "Evitar que el paciente lea el prospecto"
    ]
  },
  {
    enunciado: "Los sistemas GRD (Grupos Relacionados por el Diagnóstico) permiten:",
    correcta: "Clasificar pacientes con consumo de recursos similares",
    incorrectas: [
      "Curar enfermedades crónicas más rápido",
      "Elegir el color de la habitación del hospital"
    ]
  },
  {
    enunciado: "En un servicio de Urgencias, el primer documento generado para clasificar la gravedad es:",
    correcta: "Hoja de triaje",
    incorrectas: [
      "Informe de necropsia",
      "Consentimiento para anestesia general"
    ]
  }
];