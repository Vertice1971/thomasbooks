'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Qué tipo de necesidad de salud se define como la diferencia entre la situación de una población y una norma o estándar establecido por expertos?",
    correcta: "Necesidad normativa",
    incorrectas: [
      "Necesidad expresada",
      "Necesidad comparativa"
    ]
  },
  {
    enunciado: "En la planificación sanitaria, el análisis de la situación sirve fundamentalmente para:",
    correcta: "Identificar los problemas de salud y los factores que los determinan",
    incorrectas: [
      "Evaluar el impacto final de una intervención ya concluida",
      "Justificar el despido de personal administrativo no cualificado"
    ]
  },
  {
    enunciado: "El método de Hanlon utiliza cuatro componentes para priorizar. ¿Qué mide el componente 'C' (Eficacia de la solución)?",
    correcta: "La capacidad teórica de que la intervención resuelva el problema",
    incorrectas: [
      "El número de personas que se verán afectadas por el programa",
      "La pérdida de años de vida potenciales por la enfermedad"
    ]
  },
  {
    enunciado: "Dentro del factor PEARL del método Hanlon, la letra 'R' hace referencia a:",
    correcta: "Recursos: disponibilidad de medios para realizar la intervención",
    incorrectas: [
      "Rentabilidad: beneficio económico directo para el hospital",
      "Relevancia: importancia política subjetiva del problema"
    ]
  },
  {
    enunciado: "¿Cuál es la característica principal de un objetivo operativo o específico?",
    correcta: "Debe ser medible mediante indicadores cuantitativos o cualitativos",
    incorrectas: [
      "Debe redactarse de forma abstracta para no limitar la creatividad",
      "Debe expresar un deseo general a largo plazo de la población"
    ]
  },
  {
    enunciado: "Un objetivo que busca 'que el 80% de los diabéticos sepa realizarse la punción de insulina' es un objetivo de tipo:",
    correcta: "Procedimental o de habilidades",
    incorrectas: [
      "Cognitivo o de conocimientos",
      "Actitudinal o de valores"
    ]
  },
  {
    enunciado: "En la elaboración de un cronograma, el diagrama de Gantt permite visualizar:",
    correcta: "La duración de cada actividad y su secuencia temporal en el proyecto",
    incorrectas: [
      "El presupuesto detallado asignado a cada recurso humano",
      "La estructura jerárquica de mando dentro del equipo de salud"
    ]
  },
  {
    enunciado: "La 'población diana' en un programa de educación sanitaria es:",
    correcta: "El grupo específico de personas al que va dirigida la intervención",
    incorrectas: [
      "El total de habitantes de la comunidad autónoma",
      "Únicamente las personas que ya padecen la enfermedad aguda"
    ]
  },
  {
    enunciado: "¿Qué técnica de priorización se basa en el consenso de un grupo de expertos mediante cuestionarios sucesivos y anónimos?",
    correcta: "Método Delphi",
    incorrectas: [
      "Método Hanlon",
      "Técnica de grupo nominal"
    ]
  },
  {
    enunciado: "En la fase de diseño de actividades, la 'metodología' responde a la pregunta:",
    correcta: "¿Cómo se van a alcanzar los objetivos propuestos?",
    incorrectas: [
      "¿Para qué se realiza el programa de salud?",
      "¿Cuánto dinero va a costar la intervención?"
    ]
  },
  {
    enunciado: "Un recurso 'fungible' en un taller de educación sanitaria sería:",
    correcta: "El papel, los bolígrafos y el material de curas utilizado",
    incorrectas: [
      "El proyector de vídeo y la pantalla de proyección",
      "El local o sala de conferencias del centro de salud"
    ]
  },
  {
    enunciado: "La formulación de un objetivo debe comenzar siempre con:",
    correcta: "Un verbo en infinitivo que indique una acción evaluable",
    incorrectas: [
      "Una descripción detallada de la patología a tratar",
      "El nombre del responsable de impartir la charla"
    ]
  },
  {
    enunciado: "La 'necesidad expresada' de Bradshaw se manifiesta mediante:",
    correcta: "La demanda de servicios sanitarios por parte de la población",
    incorrectas: [
      "El deseo interno de salud que el paciente no comunica",
      "Las estadísticas de mortalidad publicadas por el INE"
    ]
  },
  {
    enunciado: "En el método de priorización Simplex, los criterios se valoran mediante:",
    correcta: "Una escala numérica que pondera la magnitud y la trascendencia",
    incorrectas: [
      "El azar o sorteo ante el tribunal de salud",
      "La decisión unilateral del gerente del centro"
    ]
  },
  {
    enunciado: "Un objetivo general se diferencia de uno específico en que el general:",
    correcta: "Marca la dirección del programa pero no es directamente medible",
    incorrectas: [
      "Se debe cumplir en un plazo máximo de una semana",
      "Solo lo conocen los directivos del programa"
    ]
  },
  {
    enunciado: "El análisis DAFO en la fase de planificación permite identificar:",
    correcta: "Factores internos (fortalezas/debilidades) y externos (oportunidades/amenazas)",
    incorrectas: [
      "Únicamente los errores cometidos en programas de años anteriores",
      "El coste por hora de cada profesional interviniente"
    ]
  },
  {
    enunciado: "La fase de 'análisis de la situación' incluye el estudio de la demografía, lo que implica:",
    correcta: "Analizar la estructura de edad, sexo y distribución de la población",
    incorrectas: [
      "Estudiar exclusivamente los niveles de contaminación del aire",
      "Revisar el inventario de medicamentos de la farmacia"
    ]
  },
  {
    enunciado: "¿Qué recurso se considera 'estructural' en la programación sanitaria?",
    correcta: "El espacio físico y las instalaciones donde se desarrolla el programa",
    incorrectas: [
      "El tiempo que el personal dedica a la formación",
      "Los folletos informativos que se entregan al alta"
    ]
  },
  {
    enunciado: "Un indicador de 'cobertura' mide:",
    correcta: "El porcentaje de la población diana que ha participado en el programa",
    incorrectas: [
      "La satisfacción de los profesionales con su sueldo",
      "La cantidad de bombillas necesarias para iluminar la sala"
    ]
  },
  {
    enunciado: "La limitación temporal de un objetivo operativo sirve para:",
    correcta: "Establecer un plazo concreto en el cual se debe evaluar el logro",
    incorrectas: [
      "Evitar que los alumnos se cansen durante la sesión",
      "Reducir el consumo de energía eléctrica del centro"
    ]
  },
  {
    enunciado: "En planificación, los recursos 'humanos' deben especificarse por:",
    correcta: "Categoría profesional, número de personas y tiempo de dedicación",
    incorrectas: [
      "Nombre, apellidos y dirección particular de cada trabajador",
      "Exclusivamente por el nivel de simpatía personal"
    ]
  },
  {
    enunciado: "La 'priorización' es necesaria en salud pública porque:",
    correcta: "Los recursos son limitados y las necesidades de salud son múltiples",
    incorrectas: [
      "Es obligatorio por ley cambiar de programa cada tres meses",
      "No se pueden realizar dos charlas en el mismo edificio"
    ]
  },
  {
    enunciado: "La técnica de 'lluvia de ideas' en planificación se usa para:",
    correcta: "Generar una lista amplia de posibles problemas o soluciones",
    incorrectas: [
      "Evaluar de forma rigurosa la base imponible de una factura",
      "Seleccionar al azar a los participantes de un curso"
    ]
  },
  {
    enunciado: "El factor 'L' del PEARL (Legalidad) asegura que:",
    correcta: "La intervención propuesta no contraviene ninguna norma vigente",
    incorrectas: [
      "El educador tiene el título de abogado además de sanitario",
      "Los participantes firman un contrato de confidencialidad"
    ]
  },
  {
    enunciado: "Los objetivos cognitivos están relacionados con:",
    correcta: "La adquisición de conocimientos e información teórica",
    incorrectas: [
      "El cambio de actitudes y predisposiciones emocionales",
      "El aprendizaje de técnicas manuales o destrezas"
    ]
  },
  {
    enunciado: "¿Qué componente de la planificación responde a '¿Con qué se va a hacer?'?",
    correcta: "Los recursos",
    incorrectas: [
      "Los objetivos",
      "La justificación"
    ]
  },
  {
    enunciado: "Un programa de salud es 'pertinente' cuando:",
    correcta: "Se adecua a las necesidades reales de la población a la que se dirige",
    incorrectas: [
      "Utiliza la tecnología más cara disponible en el mercado",
      "Se ha redactado en menos de veinticuatro horas"
    ]
  },
  {
    enunciado: "La 'justificación' de un programa debe incluir:",
    correcta: "La importancia del problema basada en datos epidemiológicos y bibliografía",
    incorrectas: [
      "La lista completa de asistentes con su número de teléfono",
      "El horario de apertura de la cafetería del hospital"
    ]
  },
  {
    enunciado: "En el Método Hanlon, la puntuación de prioridad se obtiene mediante la fórmula:",
    correcta: "(A + B) x C x D",
    incorrectas: [
      "A x B x C x D",
      "(A x B) + (C x D)"
    ]
  },
  {
    enunciado: "La técnica de grupo nominal permite:",
    correcta: "Que todos los miembros del grupo aporten ideas y voten de forma equitativa",
    incorrectas: [
      "Que solo el jefe de servicio tome las decisiones importantes",
      "Realizar un sorteo para ver quién trabaja el fin de semana"
    ]
  },
  {
    enunciado: "Un objetivo de 'actitud' busca que el individuo:",
    correcta: "Desarrolle una predisposición favorable hacia una conducta saludable",
    incorrectas: [
      "Memorice el nombre científico de los nutrientes",
      "Aprenda a vendar una herida de forma técnica"
    ]
  },
  {
    enunciado: "La 'factibilidad' de un programa se refiere a:",
    correcta: "La posibilidad real de llevarlo a cabo con los recursos existentes",
    incorrectas: [
      "La cantidad de folletos de colores que se pueden imprimir",
      "La distancia en kilómetros entre el centro de salud y la universidad"
    ]
  },
  {
    enunciado: "En la fase de diagnóstico, el estudio del 'medio ambiente' analiza:",
    correcta: "Factores físicos, químicos y sociales que pueden afectar a la salud",
    incorrectas: [
      "Únicamente el número de plantas que hay en la sala de espera",
      "El nivel de ruido de los monitores de la UCI"
    ]
  },
  {
    enunciado: "Un indicador de 'proceso' evaluaría:",
    correcta: "Si las actividades se han realizado según el calendario previsto",
    incorrectas: [
      "Si el presupuesto ha sobrado al final del ejercicio",
      "Si ha disminuido la tasa de mortalidad por infarto"
    ]
  },
  {
    enunciado: "La 'necesidad comparativa' surge cuando:",
    correcta: "Un grupo recibe un servicio y otro de similares características no",
    incorrectas: [
      "El paciente compara su salud con la de un deportista de élite",
      "El experto decide que el paciente necesita una cirugía urgente"
    ]
  },
  {
    enunciado: "Un programa de educación sanitaria es una intervención de:",
    correcta: "Prevención primaria, generalmente",
    incorrectas: [
      "Prevención terciaria en todos los casos",
      "Protección de la salud ambiental exclusivamente"
    ]
  },
  {
    enunciado: "La 'magnitud del problema' en Hanlon se refiere a:",
    correcta: "La frecuencia con la que aparece el problema (incidencia/prevalencia)",
    incorrectas: [
      "El coste en euros de tratar a un solo paciente",
      "La dificultad técnica de operar la patología"
    ]
  },
  {
    enunciado: "Los recursos 'financieros' especifican:",
    correcta: "El origen de los fondos y el presupuesto detallado por partidas",
    incorrectas: [
      "La marca del papel utilizado en las fotocopias",
      "La cuenta bancaria personal del educador sanitario"
    ]
  },
  {
    enunciado: "La 'evaluabilidad' de un programa depende de:",
    correcta: "La correcta definición de los objetivos y los indicadores en la fase de diseño",
    incorrectas: [
      "La buena voluntad de los participantes para rellenar encuestas",
      "Que no haya llovido durante el desarrollo de las actividades"
    ]
  },
  {
    enunciado: "Un objetivo operativo debe ser 'alcanzable', lo que implica:",
    correcta: "Que sea realista considerando los recursos y el tiempo disponibles",
    incorrectas: [
      "Que se pueda llegar a él caminando desde el centro de salud",
      "Que todos los habitantes del mundo lo cumplan a la vez"
    ]
  }
];