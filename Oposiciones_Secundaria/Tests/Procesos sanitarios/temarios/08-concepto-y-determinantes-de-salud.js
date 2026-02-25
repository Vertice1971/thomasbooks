'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la principal crítica técnica que se realiza a la definición de salud de la OMS de 1946?",
    correcta: "Su carácter estático, utópico y la equiparación de felicidad con salud",
    incorrectas: [
      "Que no considera los aspectos psicológicos del individuo",
      "Que define la salud únicamente como la ausencia de afecciones o enfermedades"
    ]
  },
  {
    enunciado: "Según el Informe Lalonde (1974), ¿qué determinante tiene menor peso relativo en la reducción de la mortalidad pero recibe mayor inversión económica?",
    correcta: "El sistema sanitario (asistencia sanitaria)",
    incorrectas: [
      "El estilo de vida",
      "La biología humana"
    ]
  },
  {
    enunciado: "La definición de salud como 'un estado de bienestar físico, mental y social, con capacidad de funcionamiento y no solo ausencia de enfermedad' corresponde a:",
    correcta: "Milton Terris",
    incorrectas: [
      "Luis Salleras Sanmartí",
      "Henry Sigerist"
    ]
  },
  {
    enunciado: "El modelo de Leavell y Clark divide la historia natural de la enfermedad en dos periodos denominados:",
    correcta: "Prepatogénico y patogénico",
    incorrectas: [
      "Sintomático y asintomático",
      "Epidemiológico y clínico"
    ]
  },
  {
    enunciado: "La realización de una citología vaginal para la detección precoz del cáncer de cérvix es una medida de:",
    correcta: "Prevención secundaria",
    incorrectas: [
      "Prevención primaria",
      "Prevención terciaria"
    ]
  },
  {
    enunciado: "¿Qué concepto se define como el proceso que proporciona a las poblaciones los medios necesarios para ejercer un mayor control sobre su propia salud y mejorarla?",
    correcta: "Promoción de la salud",
    incorrectas: [
      "Prevención cuaternaria",
      "Protección de la salud"
    ]
  },
  {
    enunciado: "En el marco de los determinantes de salud, el entorno físico y social se agrupa bajo el concepto de:",
    correcta: "Medio ambiente",
    incorrectas: [
      "Biología humana",
      "Estilos de vida"
    ]
  },
  {
    enunciado: "¿Qué documento internacional de 1986 es considerado el pilar fundamental de la promoción de la salud moderna?",
    correcta: "Carta de Ottawa",
    incorrectas: [
      "Declaración de Alma-Ata",
      "Informe Chadwick"
    ]
  },
  {
    enunciado: "La prevención terciaria tiene como objetivo principal:",
    correcta: "La rehabilitación y la mejora de la calidad de vida del paciente crónico",
    incorrectas: [
      "Evitar la aparición inicial de la enfermedad mediante vacunas",
      "Detectar la enfermedad en fases presintomáticas"
    ]
  },
  {
    enunciado: "El concepto de 'Prevención Cuaternaria' hace referencia a:",
    correcta: "Las acciones para identificar a pacientes en riesgo de sobremedicalización",
    incorrectas: [
      "La desinfección de quirófanos tras intervenciones complejas",
      "El tratamiento de enfermedades raras en centros de referencia"
    ]
  },
  {
    enunciado: "Según Marc Lalonde, el determinante que más influye en la salud de la población actual es:",
    correcta: "El estilo de vida",
    incorrectas: [
      "El sistema de seguridad social",
      "La herencia genética"
    ]
  },
  {
    enunciado: "¿Qué autor define la Educación para la Salud como un proceso que informa, motiva y ayuda a la población a adoptar y mantener prácticas saludables?",
    correcta: "Salleras Sanmartí",
    incorrectas: [
      "Winslow",
      "Florence Nightingale"
    ]
  },
  {
    enunciado: "La educación sanitaria se diferencia de la promoción de la salud en que:",
    correcta: "La educación es una herramienta o método dentro de la promoción",
    incorrectas: [
      "La educación es exclusiva de los colegios y la promoción de los hospitales",
      "Son conceptos opuestos y excluyentes según la OMS"
    ]
  },
  {
    enunciado: "El cribado neonatal (prueba del talón) se clasifica técnicamente como:",
    correcta: "Prevención secundaria",
    incorrectas: [
      "Prevención primaria",
      "Protección de la salud"
    ]
  },
  {
    enunciado: "En la evolución histórica de la salud, el 'modelo mágico-religioso' atribuía la enfermedad a:",
    correcta: "Castigos divinos o fuerzas sobrenaturales",
    incorrectas: [
      "Desequilibrios de los humores corporales",
      "La presencia de microorganismos patógenos"
    ]
  },
  {
    enunciado: "¿Qué factor de la biología humana es un determinante no modificable de la salud?",
    correcta: "La carga genética y el envejecimiento biológico",
    incorrectas: [
      "El nivel de ejercicio físico",
      "El consumo de tabaco y alcohol"
    ]
  },
  {
    enunciado: "La cloración del agua para consumo humano es una medida de:",
    correcta: "Protección de la salud",
    incorrectas: [
      "Promoción de la salud",
      "Restauración de la salud"
    ]
  },
  {
    enunciado: "El periodo prepatogénico de una enfermedad se caracteriza por:",
    correcta: "La interacción entre el agente, el huésped y el medio ambiente antes de la infección",
    incorrectas: [
      "La aparición de los primeros síntomas clínicos claros",
      "La fase de recuperación o muerte del individuo"
    ]
  },
  {
    enunciado: "La Educación para la Salud tiene como fin último:",
    correcta: "La modificación de conductas de riesgo y la adquisición de hábitos saludables",
    incorrectas: [
      "La imposición de tratamientos médicos obligatorios",
      "El ahorro exclusivo de costes farmacéuticos"
    ]
  },
  {
    enunciado: "¿Cuál es el componente del estilo de vida con mayor impacto negativo en la salud pública de los países desarrollados?",
    correcta: "El tabaquismo y el sedentarismo",
    incorrectas: [
      "El uso excesivo de gafas de sol",
      "La práctica de deportes de aventura"
    ]
  },
  {
    enunciado: "La Declaración de Alma-Ata (1978) se centró específicamente en potenciar:",
    correcta: "La Atención Primaria de Salud como estrategia central",
    incorrectas: [
      "La alta tecnología en cirugía robótica",
      "La privatización de los servicios de salud pública"
    ]
  },
  {
    enunciado: "El diagnóstico precoz se basa fundamentalmente en:",
    correcta: "La aplicación de pruebas a personas aparentemente sanas para detectar enfermedad",
    incorrectas: [
      "La cirugía de urgencia en pacientes politraumatizados",
      "El aislamiento de pacientes con enfermedades infecciosas avanzadas"
    ]
  },
  {
    enunciado: "En EpS, el modelo informativo-prescriptivo se basa en:",
    correcta: "La transmisión unidireccional de información del experto al receptor",
    incorrectas: [
      "El diálogo igualitario y la toma de decisiones compartida",
      "El uso exclusivo de redes sociales para la educación"
    ]
  },
  {
    enunciado: "Un determinante social de la salud es:",
    correcta: "El nivel de ingresos y el nivel educativo de la persona",
    incorrectas: [
      "El grupo sanguíneo del individuo",
      "La capacidad pulmonar tras el ejercicio"
    ]
  },
  {
    enunciado: "¿Qué etapa de la historia natural de la enfermedad incluye el periodo de incubación?",
    correcta: "Periodo patogénico (fase subclínica)",
    incorrectas: [
      "Periodo prepatogénico",
      "Periodo de resolución"
    ]
  },
  {
    enunciado: "La educación para la salud grupal permite:",
    correcta: "El intercambio de experiencias y el apoyo mutuo entre iguales",
    incorrectas: [
      "Personalizar el tratamiento farmacológico de cada asistente",
      "Sustituir la consulta médica obligatoria"
    ]
  },
  {
    enunciado: "La 'equidad en salud' implica:",
    correcta: "Que cada persona tenga la misma oportunidad de alcanzar su pleno potencial de salud",
    incorrectas: [
      "Que todos los hospitales tengan el mismo número de camas",
      "Que el estado pague el 100% de los medicamentos estéticos"
    ]
  },
  {
    enunciado: "El término 'salud comunitaria' añade al concepto de salud pública:",
    correcta: "La participación activa de la comunidad en la planificación de su salud",
    incorrectas: [
      "La obligatoriedad de vivir en núcleos rurales",
      "El control policial de las cartillas de vacunación"
    ]
  },
  {
    enunciado: "¿A qué nivel de prevención corresponde la fisioterapia tras un accidente cerebrovascular?",
    correcta: "Prevención terciaria",
    incorrectas: [
      "Prevención primaria",
      "Prevención secundaria"
    ]
  },
  {
    enunciado: "La quimioprofilaxis (uso de fármacos para evitar una infección) es una medida de:",
    correcta: "Prevención primaria",
    incorrectas: [
      "Prevención secundaria",
      "Prevención cuaternaria"
    ]
  },
  {
    enunciado: "El modelo biopsicosocial de salud defiende que:",
    correcta: "La salud depende de factores biológicos, psicológicos y sociales interrelacionados",
    incorrectas: [
      "La mente y el cuerpo son entidades totalmente separadas",
      "Solo los médicos pueden definir qué es estar sano"
    ]
  },
  {
    enunciado: "El concepto de 'empoderamiento' (empowerment) en salud se refiere a:",
    correcta: "El aumento de la capacidad de los individuos para tomar decisiones sobre su salud",
    incorrectas: [
      "El derecho a automedicarse sin supervisión profesional",
      "La autoridad de los gestores para cerrar centros de salud"
    ]
  },
  {
    enunciado: "La Educación para la Salud en el ámbito escolar es fundamental porque:",
    correcta: "Facilita la adquisición de hábitos saludables en etapas de gran plasticidad",
    incorrectas: [
      "Permite diagnosticar enfermedades raras a los profesores",
      "Evita que los niños tengan que ir al médico en el futuro"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo de la prevención secundaria?",
    correcta: "Reducir la prevalencia de la enfermedad acortando su evolución",
    incorrectas: [
      "Reducir la incidencia disminuyendo la tasa de nuevos casos",
      "Eliminar las secuelas físicas del tratamiento quirúrgico"
    ]
  },
  {
    enunciado: "En el medio ambiente como determinante, los factores 'psicosociales' incluyen:",
    correcta: "El estrés laboral, la cohesión social y el desempleo",
    incorrectas: [
      "La calidad del aire y del agua",
      "La presencia de virus y bacterias en el suelo"
    ]
  },
  {
    enunciado: "La 'Estrategia de Salud en Todas las Políticas' sugiere que:",
    correcta: "Todas las áreas de gobierno (urbanismo, educación, etc.) influyen en la salud",
    incorrectas: [
      "Los médicos deben dirigir todos los ministerios del gobierno",
      "La salud solo debe tratarse en el Ministerio de Sanidad"
    ]
  },
  {
    enunciado: "Un ejemplo de prevención primaria actuando sobre el medio ambiente es:",
    correcta: "La legislación sobre la prohibición de fumar en lugares públicos",
    incorrectas: [
      "La realización de electrocardiogramas de control",
      "La prescripción de estatinas para el colesterol alto"
    ]
  },
  {
    enunciado: "La resiliencia en salud se define como:",
    correcta: "La capacidad de un individuo o comunidad para adaptarse positivamente a la adversidad",
    incorrectas: [
      "La resistencia total a la infección por cualquier virus",
      "La velocidad de cicatrización de una herida quirúrgica"
    ]
  },
  {
    enunciado: "¿Qué autor introdujo el concepto de 'Historia Natural de la Enfermedad'?",
    correcta: "Leavell y Clark",
    incorrectas: [
      "Lalonde y Dever",
      "Terris y Koch"
    ]
  },
  {
    enunciado: "La educación para la salud individual (consejo breve) se realiza preferentemente en:",
    correcta: "La consulta de Atención Primaria",
    incorrectas: [
      "El quirófano durante la anestesia",
      "A través de megafonía en los centros comerciales"
    ]
  }
];