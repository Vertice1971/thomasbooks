// 68-organizacion-y-direccion-de-proyectos.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por proyecto en el ámbito técnico y profesional?",
    correcta: "Un conjunto de actividades planificadas con un objetivo definido, plazo y recursos asignados",
    incorrectas: [
      "Una tarea rutinaria sin fecha de finalización",
      "Un proceso continuo sin planificación previa"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal de la dirección de proyectos?",
    correcta: "Alcanzar los objetivos del proyecto cumpliendo alcance, plazo, coste y calidad",
    incorrectas: [
      "Aumentar indefinidamente el número de tareas",
      "Sustituir la ejecución técnica por gestión administrativa"
    ]
  },
  {
    enunciado: "¿Qué se entiende por organización de un proyecto?",
    correcta: "La definición de estructura, roles, responsabilidades y flujos de trabajo",
    incorrectas: [
      "La ejecución directa de las tareas técnicas",
      "La redacción final de la memoria del proyecto"
    ]
  },
  {
    enunciado: "¿Qué es el alcance de un proyecto?",
    correcta: "El conjunto de trabajos y objetivos que el proyecto debe cumplir",
    incorrectas: [
      "El coste económico total",
      "La duración temporal del proyecto"
    ]
  },
  {
    enunciado: "¿Qué ocurre si el alcance no está bien definido?",
    correcta: "Aumenta el riesgo de desviaciones, conflictos y sobrecostes",
    incorrectas: [
      "Mejora la flexibilidad sin riesgos",
      "Se reduce la necesidad de planificación"
    ]
  },
  {
    enunciado: "¿Qué es la planificación de un proyecto?",
    correcta: "El proceso de definir tareas, recursos, tiempos y secuencia de actividades",
    incorrectas: [
      "La fase final de cierre",
      "La ejecución directa sin análisis previo"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para descomponer un proyecto en tareas?",
    correcta: "La estructura de desglose del trabajo (EDT o WBS)",
    incorrectas: [
      "El organigrama de la empresa",
      "El balance económico anual"
    ]
  },
  {
    enunciado: "¿Qué representa un diagrama de Gantt?",
    correcta: "La planificación temporal de tareas y su duración",
    incorrectas: [
      "La relación jerárquica del equipo",
      "El presupuesto detallado del proyecto"
    ]
  },
  {
    enunciado: "¿Qué es una ruta crítica?",
    correcta: "La secuencia de tareas que determina la duración mínima del proyecto",
    incorrectas: [
      "Las tareas menos importantes",
      "Las tareas que pueden retrasarse sin impacto"
    ]
  },
  {
    enunciado: "¿Qué implica retrasar una tarea crítica?",
    correcta: "Retrasar la finalización del proyecto",
    incorrectas: [
      "No tiene consecuencias",
      "Reduce el coste total"
    ]
  },
  {
    enunciado: "¿Qué es la gestión de recursos?",
    correcta: "La asignación y control de personas, materiales y equipos",
    incorrectas: [
      "La eliminación de tareas no técnicas",
      "La reducción automática del presupuesto"
    ]
  },
  {
    enunciado: "¿Qué recurso es fundamental en la dirección de proyectos?",
    correcta: "El recurso humano",
    incorrectas: [
      "El recurso decorativo",
      "El recurso publicitario"
    ]
  },
  {
    enunciado: "¿Qué es el presupuesto de un proyecto?",
    correcta: "La estimación económica de los costes necesarios para ejecutarlo",
    incorrectas: [
      "El beneficio final garantizado",
      "Un documento opcional sin valor técnico"
    ]
  },
  {
    enunciado: "¿Qué se entiende por control de costes?",
    correcta: "El seguimiento y corrección de desviaciones económicas",
    incorrectas: [
      "La eliminación de gastos imprevistos por decreto",
      "El aumento automático del presupuesto"
    ]
  },
  {
    enunciado: "¿Qué es la gestión de la calidad en proyectos?",
    correcta: "Asegurar que el proyecto cumple los requisitos técnicos y normativos",
    incorrectas: [
      "Aumentar el número de tareas",
      "Reducir la documentación técnica"
    ]
  },
  {
    enunciado: "¿Qué documento define responsabilidades dentro del proyecto?",
    correcta: "El organigrama o matriz de responsabilidades",
    incorrectas: [
      "El albarán de materiales",
      "El plano unifilar"
    ]
  },
  {
    enunciado: "¿Qué papel tiene el director de proyecto?",
    correcta: "Planificar, coordinar, supervisar y tomar decisiones",
    incorrectas: [
      "Ejecutar todas las tareas técnicas",
      "Limitarse a tareas administrativas"
    ]
  },
  {
    enunciado: "¿Qué es la gestión de riesgos?",
    correcta: "Identificar, analizar y minimizar posibles problemas del proyecto",
    incorrectas: [
      "Ignorar situaciones imprevistas",
      "Eliminar toda incertidumbre"
    ]
  },
  {
    enunciado: "¿Qué es un riesgo en un proyecto?",
    correcta: "Un evento incierto que puede afectar negativamente a los objetivos",
    incorrectas: [
      "Un error ya ocurrido",
      "Una tarea planificada"
    ]
  },
  {
    enunciado: "¿Qué es un hito en un proyecto?",
    correcta: "Un punto de control que marca un logro importante",
    incorrectas: [
      "Una tarea secundaria sin impacto",
      "Un gasto no previsto"
    ]
  },
  {
    enunciado: "¿Qué es la comunicación en la dirección de proyectos?",
    correcta: "El intercambio estructurado de información entre los implicados",
    incorrectas: [
      "La difusión informal sin control",
      "La eliminación de informes"
    ]
  },
  {
    enunciado: "¿Qué documento recoge el estado del proyecto?",
    correcta: "El informe de seguimiento",
    incorrectas: [
      "El manual de usuario",
      "El plano de situación"
    ]
  },
  {
    enunciado: "¿Qué es el control del plazo?",
    correcta: "El seguimiento del calendario y corrección de retrasos",
    incorrectas: [
      "La ampliación automática de fechas",
      "La supresión de tareas críticas"
    ]
  },
  {
    enunciado: "¿Qué significa coordinación de equipos?",
    correcta: "Alinear el trabajo de distintos profesionales hacia un objetivo común",
    incorrectas: [
      "Trabajar de forma aislada",
      "Duplicar funciones"
    ]
  },
  {
    enunciado: "¿Qué conflicto es habitual en proyectos mal organizados?",
    correcta: "Solapamiento de tareas y responsabilidades",
    incorrectas: [
      "Exceso de claridad",
      "Planificación detallada"
    ]
  },
  {
    enunciado: "¿Qué es la toma de decisiones en proyectos?",
    correcta: "Elegir la opción más adecuada según información y objetivos",
    incorrectas: [
      "Evitar cualquier cambio",
      "Delegar siempre sin análisis"
    ]
  },
  {
    enunciado: "¿Qué es el cierre de un proyecto?",
    correcta: "La fase final donde se valida, documenta y entrega el proyecto",
    incorrectas: [
      "El inicio de la planificación",
      "La fase de mayor incertidumbre"
    ]
  },
  {
    enunciado: "¿Qué documento suele elaborarse al cierre?",
    correcta: "El informe final o memoria del proyecto",
    incorrectas: [
      "El plan de riesgos inicial",
      "El diagrama de Gantt provisional"
    ]
  },
  {
    enunciado: "¿Qué se evalúa en la dirección de proyectos?",
    correcta: "Resultados, cumplimiento de objetivos y proceso seguido",
    incorrectas: [
      "Solo el coste económico",
      "Únicamente la duración"
    ]
  },
  {
    enunciado: "¿Qué significa liderazgo en proyectos?",
    correcta: "Capacidad de guiar y motivar al equipo hacia los objetivos",
    incorrectas: [
      "Imponer decisiones sin comunicación",
      "Evitar responsabilidades"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la documentación del proyecto?",
    correcta: "Permite trazabilidad, control y mantenimiento futuro",
    incorrectas: [
      "Aumenta innecesariamente el trabajo",
      "Sustituye la ejecución técnica"
    ]
  },
  {
    enunciado: "¿Qué es la mejora continua en proyectos?",
    correcta: "Aplicar lecciones aprendidas para futuros proyectos",
    incorrectas: [
      "Repetir siempre los mismos errores",
      "Evitar la evaluación final"
    ]
  },
  {
    enunciado: "¿Qué rol tiene la normativa en la dirección de proyectos?",
    correcta: "Garantizar legalidad, seguridad y calidad",
    incorrectas: [
      "Limitar la ejecución técnica",
      "Eliminar la planificación"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre organización y éxito del proyecto?",
    correcta: "Una buena organización aumenta la probabilidad de éxito",
    incorrectas: [
      "No existe relación directa",
      "La organización dificulta la ejecución"
    ]
  },
  {
    enunciado: "¿Qué se entiende por desviación en un proyecto?",
    correcta: "Diferencia entre lo planificado y lo ejecutado",
    incorrectas: [
      "Un logro adelantado",
      "Un hito alcanzado"
    ]
  },
  {
    enunciado: "¿Qué debe hacerse ante una desviación importante?",
    correcta: "Analizar causas y aplicar medidas correctoras",
    incorrectas: [
      "Ignorarla",
      "Finalizar el proyecto inmediatamente"
    ]
  },
  {
    enunciado: "¿Qué competencia es clave en el profesorado al enseñar dirección de proyectos?",
    correcta: "Integrar planificación, técnica y gestión con casos reales",
    incorrectas: [
      "Memorizar definiciones sin aplicación",
      "Evitar ejemplos prácticos"
    ]
  },
  {
    enunciado: "¿Qué debe garantizar una correcta organización y dirección de proyectos?",
    correcta: "Ejecución eficiente, controlada y orientada a objetivos",
    incorrectas: [
      "Complejidad máxima",
      "Ausencia total de cambios"
    ]
  }
];
