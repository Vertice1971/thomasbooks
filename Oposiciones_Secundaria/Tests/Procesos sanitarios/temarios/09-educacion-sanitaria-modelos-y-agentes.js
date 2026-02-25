'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la característica definitoria del modelo unidireccional o tradicional de Educación para la Salud?",
    correcta: "El educador es el único poseedor del conocimiento y el receptor es un agente pasivo",
    incorrectas: [
      "Se prioriza el análisis de los determinantes sociales sobre la sintomatología clínica",
      "El objetivo principal es la capacitación del individuo para el autocuidado independiente"
    ]
  },
  {
    enunciado: "En el modelo de educación sanitaria basado en la persuasión coercitiva, el cambio de conducta se busca mediante:",
    correcta: "La comunicación de las consecuencias negativas y el miedo a la enfermedad",
    incorrectas: [
      "El refuerzo de las habilidades sociales y la autoestima del paciente",
      "La modificación de las condiciones ambientales que rodean al sujeto"
    ]
  },
  {
    enunciado: "El modelo biopsicosocial de EpS considera que la salud es un proceso dinámico influido por:",
    correcta: "La interacción entre factores biológicos, equilibrio psicológico y el entorno social",
    incorrectas: [
      "Exclusivamente la ausencia de alteraciones fisiológicas o agentes patógenos",
      "La correcta administración de fármacos y el cumplimiento de protocolos hospitalarios"
    ]
  },
  {
    enunciado: "¿Qué agente de educación sanitaria se considera fundamental en el medio escolar según el modelo participativo?",
    correcta: "El profesorado, actuando como facilitador y referente cotidiano del alumnado",
    incorrectas: [
      "El médico de atención primaria, que debe impartir todas las sesiones técnicas",
      "Los servicios de inspección educativa, encargados de la ejecución directa en el aula"
    ]
  },
  {
    enunciado: "Los 'agentes de salud informales' desempeñan un papel crítico en la comunidad debido a:",
    correcta: "Su capacidad de influencia basada en la confianza, la cercanía y el liderazgo natural",
    incorrectas: [
      "Su formación académica reglada en ciencias de la salud y prevención",
      "Su potestad administrativa para sancionar conductas poco saludables en el barrio"
    ]
  },
  {
    enunciado: "En el ámbito laboral, ¿cuál es el enfoque principal de la educación sanitaria?",
    correcta: "La prevención de riesgos específicos y la promoción de entornos de trabajo saludables",
    incorrectas: [
      "El tratamiento curativo de las patologías crónicas no relacionadas con el puesto",
      "La selección de personal basada exclusivamente en criterios de resistencia biológica"
    ]
  },
  {
    enunciado: "La educación terapéutica en el campo asistencial tiene como fin último:",
    correcta: "Que el paciente crónico adquiera las competencias para autogestionar su tratamiento",
    incorrectas: [
      "Lograr la curación total de la patología mediante el cumplimiento de órdenes",
      "Delegar toda la responsabilidad del cuidado en el personal de enfermería de planta"
    ]
  },
  {
    enunciado: "¿Cuál es el campo de actuación de la EpS que permite trabajar con mayor eficacia sobre los hábitos de vida en formación?",
    correcta: "El ámbito escolar, por la plasticidad cognitiva y la continuidad del aprendizaje",
    incorrectas: [
      "El ámbito hospitalario, por la gravedad de las situaciones atendidas",
      "El ámbito farmacéutico, por la accesibilidad a los productos de consumo"
    ]
  },
  {
    enunciado: "Un agente de salud 'multiplicador' es aquel que:",
    correcta: "Capacita a otros individuos para que estos actúen a su vez como educadores",
    incorrectas: [
      "Atiende al mayor número posible de pacientes en una sola jornada laboral",
      "Financia las campañas de promoción de la salud de la administración pública"
    ]
  },
  {
    enunciado: "El modelo de EpS de 'empoderamiento' (empowerment) se diferencia de otros en que:",
    correcta: "Busca que la comunidad tome conciencia y controle sus propios determinantes de salud",
    incorrectas: [
      "Sustituye la atención médica profesional por remedios tradicionales comunitarios",
      "Se basa en el cumplimiento estricto de la legislación sanitaria vigente"
    ]
  },
  {
    enunciado: "En el ámbito comunitario, el educador sanitario debe actuar como:",
    correcta: "Un dinamizador social que facilita la identificación de problemas y soluciones locales",
    incorrectas: [
      "Un experto técnico que impone las prioridades sin consultar a la población",
      "Un mero transmisor de folletos elaborados por el Ministerio de Sanidad"
    ]
  },
  {
    enunciado: "El papel del Técnico en Procesos Sanitarios como agente de educación incluye:",
    correcta: "La promoción de hábitos saludables y la correcta transmisión de pautas de autocuidado",
    incorrectas: [
      "La prescripción de fármacos específicos para el cambio de conducta tabaquista",
      "El diagnóstico definitivo de patologías mentales derivadas del estilo de vida"
    ]
  },
  {
    enunciado: "La principal barrera del modelo informativo tradicional en EpS es:",
    correcta: "Que el conocimiento por sí solo no garantiza el cambio de comportamiento",
    incorrectas: [
      "La dificultad de encontrar profesionales con titulación académica superior",
      "El alto coste económico de los materiales de lectura distribuidos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al agente de salud en el modelo de relación 'paternalista'?",
    correcta: "Asume la toma de decisiones por el paciente basándose en su autoridad técnica",
    incorrectas: [
      "Establece una relación de igualdad y respeto a la autonomía del individuo",
      "Se desentiende de la evolución del paciente una vez dada la información"
    ]
  },
  {
    enunciado: "En la educación sanitaria grupal, el papel del agente debe ser preferentemente:",
    correcta: "Moderador y conductor del aprendizaje colectivo",
    incorrectas: [
      "Expositor magistral que evita el debate para no perder tiempo",
      "Observador pasivo que no interviene en las dinámicas de grupo"
    ]
  },
  {
    enunciado: "El ámbito escolar de la EpS debe integrarse en:",
    correcta: "El Proyecto Educativo de Centro y de forma transversal en el currículo",
    incorrectas: [
      "Únicamente en charlas aisladas impartidas por personal externo",
      "Solo en las asignaturas relacionadas con la educación física"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo de la EpS en el campo de la salud comunitaria?",
    correcta: "Desarrollar la capacidad de autogestión y participación de la población",
    incorrectas: [
      "Reducir las listas de espera de los hospitales de especialidades",
      "Realizar un cribado masivo de enfermedades raras en la zona básica"
    ]
  },
  {
    enunciado: "Un ejemplo de agente de salud en el medio laboral sería:",
    correcta: "El personal de enfermería del trabajo o el delegado de prevención",
    incorrectas: [
      "El director comercial encargado de las ventas externas",
      "El administrativo encargado de la gestión de nóminas"
    ]
  },
  {
    enunciado: "La educación sanitaria dirigida a la familia se considera prioritaria porque:",
    correcta: "Es el núcleo donde se adquieren y refuerzan los hábitos de vida básicos",
    incorrectas: [
      "Permite al sistema sanitario ahorrar en personal de enfermería a domicilio",
      "Es el único ámbito donde la ley permite la intervención obligatoria"
    ]
  },
  {
    enunciado: "En el modelo democrático de EpS, el profesional sanitario debe:",
    correcta: "Ayudar al paciente a elegir entre las opciones de salud según sus valores",
    incorrectas: [
      "Indicar la única opción válida según la evidencia científica",
      "Delegar toda la responsabilidad médica en el criterio del paciente"
    ]
  },
  {
    enunciado: "La eficacia de un agente de salud depende en gran medida de su:",
    correcta: "Empatía, capacidad comunicativa y credibilidad ante el receptor",
    incorrectas: [
      "Antigüedad en el puesto de trabajo y cargo administrativo",
      "Capacidad para utilizar tecnicismos complejos que denoten autoridad"
    ]
  },
  {
    enunciado: "El campo de actuación hospitalario se diferencia del comunitario en que:",
    correcta: "Se centra más en la recuperación y manejo de la enfermedad instalada",
    incorrectas: [
      "No requiere la participación activa del sujeto que recibe la educación",
      "Solo intervienen agentes de salud informales y voluntarios"
    ]
  },
  {
    enunciado: "El modelo crítico de educación sanitaria pone el énfasis en:",
    correcta: "El análisis de las desigualdades sociales y las estructuras de poder",
    incorrectas: [
      "La mejora de las técnicas de marketing para vender productos dietéticos",
      "El perfeccionamiento de los sistemas de videovigilancia en centros de salud"
    ]
  },
  {
    enunciado: "Un agente de salud escolar debe evitar:",
    correcta: "Culpabilizar al alumnado por conductas derivadas de su entorno socioeconómico",
    incorrectas: [
      "Utilizar juegos o dinámicas de grupo en el proceso de aprendizaje",
      "Colaborar con el equipo de orientación del centro educativo"
    ]
  },
  {
    enunciado: "¿Qué técnica es propia de un agente que utiliza el modelo participativo?",
    correcta: "La escucha activa y la validación de las experiencias del grupo",
    incorrectas: [
      "La lectura ininterrumpida de textos técnicos durante la sesión",
      "La prohibición de realizar preguntas hasta la finalización del curso"
    ]
  },
  {
    enunciado: "En EpS, el concepto de 'agente facilitador' se refiere a:",
    correcta: "Aquel que proporciona los recursos y el apoyo para que el cambio sea posible",
    incorrectas: [
      "El administrativo que gestiona las citas en el centro de salud",
      "El proveedor de material de papelería para el aula"
    ]
  },
  {
    enunciado: "La formación de los agentes de salud debe incluir necesariamente:",
    correcta: "Habilidades pedagógicas, de comunicación y conocimientos técnicos",
    incorrectas: [
      "Únicamente conocimientos profundos de anatomía y fisiopatología",
      "Habilidades de oratoria política y gestión de presupuestos públicos"
    ]
  },
  {
    enunciado: "La educación sanitaria en pacientes ingresados debe iniciarse:",
    correcta: "En cuanto el estado clínico del paciente permita la comunicación",
    incorrectas: [
      "Justo en el momento de subir a la ambulancia para el traslado al alta",
      "Únicamente si el paciente solicita explícitamente recibir formación"
    ]
  },
  {
    enunciado: "Un agente de salud que actúa en los medios de comunicación debe cuidar especialmente:",
    correcta: "La veracidad de la información y la sencillez del mensaje para el gran público",
    incorrectas: [
      "El uso de términos latinos para prestigiar la profesión sanitaria",
      "La promoción de marcas comerciales específicas de suplementos"
    ]
  },
  {
    enunciado: "¿Cuál es una limitación del ámbito laboral como campo de actuación de la EpS?",
    correcta: "La posible desconfianza del trabajador ante programas que perciba como control empresarial",
    incorrectas: [
      "La ausencia total de riesgos para la salud en las oficinas modernas",
      "La obligatoriedad legal de que todos los trabajadores sean médicos"
    ]
  },
  {
    enunciado: "El modelo de EpS de 'habilidades para la vida' se centra en:",
    correcta: "Competencias psicosociales como el pensamiento crítico y el manejo de emociones",
    incorrectas: [
      "El aprendizaje técnico de maniobras de cirugía menor",
      "La memorización del calendario vacunal vigente en la comunidad"
    ]
  },
  {
    enunciado: "La coordinación entre agentes de salud de distintos niveles (primaria y especializada) garantiza:",
    correcta: "La coherencia del mensaje educativo y la continuidad de los cuidados",
    incorrectas: [
      "Que el paciente reciba el doble de información en la mitad de tiempo",
      "El aumento del gasto farmacéutico por duplicidad de recetas"
    ]
  },
  {
    enunciado: "En la EpS comunitaria, la identificación de los 'actores clave' sirve para:",
    correcta: "Asegurar la aceptación y la sostenibilidad de las intervenciones en el barrio",
    incorrectas: [
      "Seleccionar a los vecinos que tienen mejores condiciones de salud",
      "Delegar en ellos la responsabilidad legal de los posibles accidentes"
    ]
  },
  {
    enunciado: "El modelo preventivista de educación sanitaria tiene como foco principal:",
    correcta: "Evitar la aparición de enfermedades específicas mediante el control de factores de riesgo",
    incorrectas: [
      "Fomentar la felicidad del individuo por encima de su estado biológico",
      "La gestión administrativa de las bajas laborales por enfermedad común"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'aprendizaje significativo' en educación sanitaria?",
    correcta: "El alumno relaciona la nueva información con sus conocimientos y experiencias previas",
    incorrectas: [
      "El alumno memoriza conceptos aunque no comprenda su utilidad práctica",
      "La información se olvida rápidamente tras la realización del examen"
    ]
  },
  {
    enunciado: "La educación para la salud en grupos de autoayuda se basa en:",
    correcta: "El apoyo emocional y el aprendizaje compartido entre personas con el mismo problema",
    incorrectas: [
      "La dirección autoritaria de un profesional que no padece la enfermedad",
      "La distribución de medicamentos gratuitos entre los miembros del grupo"
    ]
  },
  {
    enunciado: "El uso de las TICs por parte de los agentes de salud permite:",
    correcta: "Ampliar el alcance de los mensajes y facilitar el acceso a recursos interactivos",
    incorrectas: [
      "Eliminar la necesidad de contacto humano en el proceso educativo",
      "Garantizar que el 100% de la población cambie de conducta inmediatamente"
    ]
  },
  {
    enunciado: "En el campo asistencial, la educación sanitaria debe dirigirse también a la familia para:",
    correcta: "Crear un entorno de apoyo que facilite la adherencia al tratamiento del paciente",
    incorrectas: [
      "Que la familia asuma las funciones del médico de guardia en el hospital",
      "Evitar que el paciente tenga contacto con otros enfermos de la planta"
    ]
  },
  {
    enunciado: "El agente de salud 'educador' debe poseer la capacidad de:",
    correcta: "Adaptar el lenguaje y la metodología a las características del receptor",
    incorrectas: [
      "Convencer al receptor mediante el uso de estadísticas manipuladas",
      "Imponer su estilo de vida personal como el único saludable posible"
    ]
  },
  {
    enunciado: "La EpS se considera una herramienta de salud pública porque:",
    correcta: "Mejora la salud de la población y reduce la carga de enfermedad de forma sostenible",
    incorrectas: [
      "Permite controlar policialmente los hábitos de consumo de los ciudadanos",
      "Es el método más rápido para curar infecciones bacterianas agudas"
    ]
  }
];