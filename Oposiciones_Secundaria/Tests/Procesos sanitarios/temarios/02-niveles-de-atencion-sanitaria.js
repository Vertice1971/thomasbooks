// temarios/02-niveles-de-atencion-sanitaria.js
'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por nivel asistencial en un sistema sanitario?",
    correcta: "Una forma de organizar la atención según complejidad, recursos disponibles y capacidad de resolución",
    incorrectas: [
      "Un sistema de clasificación económica de hospitales según su presupuesto anual",
      "Un listado de especialidades médicas ordenadas por antigüedad histórica"
    ]
  },
  {
    enunciado: "¿Cuál es una finalidad principal de estructurar la asistencia por niveles?",
    correcta: "Garantizar accesibilidad, continuidad y uso eficiente de los recursos sanitarios",
    incorrectas: [
      "Aumentar la burocracia y fragmentar la atención del paciente",
      "Impedir la coordinación entre profesionales de distintos dispositivos"
    ]
  },
  {
    enunciado: "¿Qué criterio diferencia principalmente la atención primaria de la especializada?",
    correcta: "El grado de complejidad diagnóstica y terapéutica que pueden asumir",
    incorrectas: [
      "La edad de los profesionales que trabajan en cada nivel",
      "El número de documentos administrativos que generan"
    ]
  },
  {
    enunciado: "¿Qué nivel asistencial actúa como puerta de entrada habitual al sistema sanitario público?",
    correcta: "La atención primaria",
    incorrectas: [
      "La unidad de cuidados intensivos",
      "La comisión de farmacia hospitalaria"
    ]
  },
  {
    enunciado: "¿Qué principio caracteriza a la atención primaria según la OMS?",
    correcta: "La accesibilidad y la atención integral centrada en la persona y la comunidad",
    incorrectas: [
      "La alta especialización tecnológica como eje central",
      "La hospitalización prolongada como principal estrategia"
    ]
  },
  {
    enunciado: "¿Qué significa longitudinalidad en atención primaria?",
    correcta: "La relación continuada entre profesional y paciente a lo largo del tiempo",
    incorrectas: [
      "La atención exclusiva a enfermedades infecciosas",
      "La obligación de derivar todos los casos al hospital"
    ]
  },
  {
    enunciado: "¿Cuál es una función básica de la atención primaria?",
    correcta: "Promoción de la salud y prevención mediante programas como vacunaciones y cribados",
    incorrectas: [
      "Realizar exclusivamente intervenciones quirúrgicas de alta complejidad",
      "Limitarse a emitir informes administrativos sin actividad clínica"
    ]
  },
  {
    enunciado: "¿Qué profesional forma parte habitualmente de un Equipo de Atención Primaria?",
    correcta: "El médico o médica de familia junto con enfermería y otros profesionales multiprofesionales",
    incorrectas: [
      "Únicamente el personal de limpieza del centro",
      "Solo especialistas hospitalarios de tercer nivel"
    ]
  },
  {
    enunciado: "¿Qué es una zona básica de salud?",
    correcta: "Una unidad territorial para organizar la atención primaria a una población determinada",
    incorrectas: [
      "Un servicio hospitalario especializado en cuidados intensivos",
      "Un registro administrativo de pacientes privados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la atención especializada?",
    correcta: "Mayor complejidad diagnóstica y terapéutica apoyada en tecnología avanzada",
    incorrectas: [
      "Atención domiciliaria exclusivamente preventiva",
      "Actividades exclusivamente administrativas sin intervención clínica"
    ]
  },
  {
    enunciado: "¿Cuál es un dispositivo típico de atención especializada?",
    correcta: "El hospital general con servicios clínicos y unidades de hospitalización",
    incorrectas: [
      "El consultorio local de atención primaria sin especialidades",
      "El centro coordinador de transporte sanitario exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué es un hospital de día?",
    correcta: "Un dispositivo que permite tratamientos o pruebas sin ingreso convencional",
    incorrectas: [
      "Un hospital que solo abre en horario diurno",
      "Un centro exclusivamente administrativo sin actividad asistencial"
    ]
  },
  {
    enunciado: "¿Qué función cumple la UCI dentro del hospital?",
    correcta: "Atender pacientes críticos que requieren vigilancia y soporte avanzado continuo",
    incorrectas: [
      "Realizar exclusivamente consultas externas programadas",
      "Coordinar citas de atención primaria"
    ]
  },
  {
    enunciado: "¿Qué es la derivación entre niveles asistenciales?",
    correcta: "El envío de un paciente desde un nivel a otro cuando requiere mayor complejidad diagnóstica o terapéutica",
    incorrectas: [
      "La transferencia automática de todos los pacientes al hospital sin valoración",
      "La anulación del seguimiento en atención primaria"
    ]
  },
  {
    enunciado: "¿Qué debe incluir un informe de derivación adecuado?",
    correcta: "Motivo de consulta, antecedentes relevantes y pruebas realizadas para orientar al especialista",
    incorrectas: [
      "Solo datos administrativos sin información clínica",
      "Únicamente la firma del paciente sin diagnóstico provisional"
    ]
  },
  {
    enunciado: "¿Qué es la contrarreferencia?",
    correcta: "La devolución del paciente al nivel inicial con informe clínico y plan de seguimiento",
    incorrectas: [
      "La negativa a aceptar al paciente en atención primaria",
      "La eliminación del historial clínico tras el alta hospitalaria"
    ]
  },
  {
    enunciado: "¿Qué problema puede surgir por mala coordinación entre niveles?",
    correcta: "Duplicidad de pruebas y pérdida de información clínica relevante",
    incorrectas: [
      "Reducción automática del gasto sanitario total",
      "Eliminación completa de las listas de espera"
    ]
  },
  {
    enunciado: "¿Qué herramienta favorece la coordinación entre primaria y especializada?",
    correcta: "La historia clínica electrónica compartida entre niveles",
    incorrectas: [
      "La supresión del registro escrito de las actuaciones clínicas",
      "La prohibición de comunicación entre profesionales"
    ]
  },
  {
    enunciado: "¿Qué es la interconsulta virtual?",
    correcta: "Un mecanismo de consulta entre profesionales sin desplazamiento físico del paciente",
    incorrectas: [
      "Una consulta exclusiva para pacientes privados",
      "Un procedimiento administrativo sin contenido clínico"
    ]
  },
  {
    enunciado: "¿Qué se entiende por continuidad asistencial?",
    correcta: "La atención coordinada y coherente a lo largo del tiempo y entre distintos dispositivos",
    incorrectas: [
      "La atención fragmentada sin intercambio de información",
      "La repetición innecesaria de diagnósticos sin seguimiento"
    ]
  },
  {
    enunciado: "¿Qué es la atención sociosanitaria?",
    correcta: "La atención dirigida a personas con necesidades sanitarias y sociales combinadas, como crónicos o dependientes",
    incorrectas: [
      "La atención exclusiva a pacientes con procesos agudos leves",
      "Un servicio limitado a actividades recreativas sin contenido clínico"
    ]
  },
  {
    enunciado: "¿Qué dispositivo es típico de urgencias extrahospitalarias?",
    correcta: "Los equipos móviles coordinados a través de centros reguladores de emergencias",
    incorrectas: [
      "Las consultas externas programadas del hospital",
      "Las unidades administrativas de facturación"
    ]
  },
  {
    enunciado: "¿Qué es un sistema de información sanitaria?",
    correcta: "El conjunto organizado de datos y herramientas que apoyan la toma de decisiones clínicas y de gestión",
    incorrectas: [
      "Un archivo aislado sin conexión con la práctica asistencial",
      "Un sistema exclusivamente contable sin datos clínicos"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene la información sanitaria para la planificación?",
    correcta: "Permitir analizar actividad, necesidades y resultados para mejorar la organización del sistema",
    incorrectas: [
      "Sustituir la práctica clínica por estadísticas teóricas",
      "Eliminar la responsabilidad profesional individual"
    ]
  },
  {
    enunciado: "¿Qué documento es el núcleo de la información clínica individual?",
    correcta: "La historia clínica del paciente",
    incorrectas: [
      "El presupuesto anual del hospital",
      "El listado de turnos del personal"
    ]
  },
  {
    enunciado: "¿Qué estructura básica incluye una historia clínica?",
    correcta: "Datos identificativos, anamnesis, exploración, diagnósticos, tratamiento y evolución",
    incorrectas: [
      "Solo el nombre del paciente y su dirección",
      "Únicamente el diagnóstico final sin proceso evolutivo"
    ]
  },
  {
    enunciado: "¿Qué ventaja principal tiene la historia clínica electrónica?",
    correcta: "Mejora la accesibilidad, legibilidad e integración de información entre profesionales autorizados",
    incorrectas: [
      "Impide completamente el acceso a la información clínica",
      "Elimina la necesidad de medidas de seguridad"
    ]
  },
  {
    enunciado: "¿Qué riesgo puede asociarse a la historia clínica electrónica?",
    correcta: "La vulneración de la confidencialidad si no existen controles adecuados de acceso",
    incorrectas: [
      "La desaparición automática de errores clínicos",
      "La eliminación de la responsabilidad profesional"
    ]
  },
  {
    enunciado: "¿Qué principio rige el uso de la información clínica?",
    correcta: "La confidencialidad y el secreto profesional",
    incorrectas: [
      "La difusión libre de datos sin consentimiento",
      "El acceso indiscriminado de cualquier persona al historial"
    ]
  },
  {
    enunciado: "¿Qué derecho tiene el paciente respecto a su información sanitaria?",
    correcta: "Acceder a su historia clínica y solicitar rectificación de datos inexactos",
    incorrectas: [
      "Eliminar toda la información relevante para el seguimiento clínico",
      "Acceder a historias clínicas de otros pacientes"
    ]
  },
  {
    enunciado: "¿Qué son los registros de actividad asistencial?",
    correcta: "Sistemas que recogen datos sobre altas, consultas, intervenciones y otros actos sanitarios",
    incorrectas: [
      "Listas privadas de pacientes sin valor estadístico",
      "Registros exclusivamente económicos sin información clínica"
    ]
  },
  {
    enunciado: "¿Qué finalidad tienen los registros específicos como el de cáncer o vacunaciones?",
    correcta: "Facilitar vigilancia epidemiológica y planificación sanitaria basada en datos",
    incorrectas: [
      "Sustituir completamente la historia clínica individual",
      "Eliminar la necesidad de prevención poblacional"
    ]
  },
  {
    enunciado: "¿Qué es un indicador de calidad asistencial?",
    correcta: "Una medida cuantitativa que permite evaluar resultados y procesos sanitarios",
    incorrectas: [
      "Una opinión subjetiva sin base en datos",
      "Un documento legal que sustituye la práctica clínica"
    ]
  },
  {
    enunciado: "¿Qué indicador puede reflejar eficiencia hospitalaria?",
    correcta: "La estancia media ajustada a la complejidad de los casos",
    incorrectas: [
      "El número de documentos impresos por paciente",
      "El color de las paredes del hospital"
    ]
  },
  {
    enunciado: "¿Qué problema organizativo puede afectar la relación entre niveles?",
    correcta: "Diferencias en cultura organizativa y comunicación entre profesionales",
    incorrectas: [
      "La inexistencia de profesionales en ambos niveles",
      "La prohibición legal de compartir información clínica"
    ]
  },
  {
    enunciado: "¿Qué estrategia mejora la atención al paciente crónico complejo?",
    correcta: "Planes de cuidados compartidos y coordinación entre niveles y recursos sociales",
    incorrectas: [
      "Derivación constante sin seguimiento coordinado",
      "Supresión de la atención primaria en estos casos"
    ]
  },
  {
    enunciado: "¿Por qué es esencial el correcto registro de la información clínica?",
    correcta: "Porque garantiza continuidad asistencial, seguridad del paciente y respaldo legal profesional",
    incorrectas: [
      "Porque sustituye el contacto directo con el paciente",
      "Porque elimina la necesidad de coordinación entre niveles"
    ]
  }
];