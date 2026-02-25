'use strict';

var PREGUNTAS = [
  {
    enunciado: "¿Qué tipo de evaluación se realiza con el fin de mejorar el programa mientras se está ejecutando?",
    correcta: "Evaluación formativa o de proceso",
    incorrectas: [
      "Evaluación diagnóstica",
      "Evaluación sumativa"
    ]
  },
  {
    enunciado: "La evaluación que mide el grado en que se han alcanzado los objetivos al finalizar la intervención se denomina:",
    correcta: "Evaluación sumativa o de resultados",
    incorrectas: [
      "Evaluación de estructura",
      "Evaluación de impacto"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de la evaluación diagnóstica?",
    correcta: "Establecer el punto de partida y ajustar el programa a las necesidades previas",
    incorrectas: [
      "Determinar el coste final por participante una vez cerrado el programa",
      "Sancionar a los alumnos que no han asistido a las sesiones"
    ]
  },
  {
    enunciado: "Un indicador de 'estructura' evalúa aspectos relacionados con:",
    correcta: "La adecuación de los recursos humanos, materiales y financieros",
    incorrectas: [
      "El cumplimiento del cronograma de actividades",
      "El cambio de actitud de la población diana"
    ]
  },
  {
    enunciado: "La 'efectividad' de un programa de educación sanitaria se define como:",
    correcta: "El grado en que se logran los objetivos en condiciones de práctica habitual",
    incorrectas: [
      "El logro de objetivos en condiciones ideales y controladas de laboratorio",
      "La relación entre los resultados obtenidos y los recursos invertidos"
    ]
  },
  {
    enunciado: "¿Qué característica de un indicador asegura que este mida realmente lo que se pretende medir?",
    correcta: "Validez",
    incorrectas: [
      "Fiabilidad",
      "Sensibilidad"
    ]
  },
  {
    enunciado: "Un indicador es 'sensible' cuando:",
    correcta: "Es capaz de detectar cambios significativos en la situación evaluada",
    incorrectas: [
      "Produce los mismos resultados al ser aplicado por distintos observadores",
      "Resulta fácil de comprender para personas sin formación técnica"
    ]
  },
  {
    enunciado: "La evaluación de la 'eficiencia' pone en relación los resultados con:",
    correcta: "Los costes y recursos empleados para obtenerlos",
    incorrectas: [
      "Las expectativas previas de los usuarios",
      "La mortalidad general de la zona básica de salud"
    ]
  },
  {
    enunciado: "En el modelo de Donabedian, el análisis de 'cómo se han realizado las actividades' corresponde a:",
    correcta: "La evaluación de proceso",
    incorrectas: [
      "La evaluación de estructura",
      "La evaluación de resultados"
    ]
  },
  {
    enunciado: "La técnica de 'observación directa' durante una charla de EpS sirve para evaluar:",
    correcta: "La participación y la dinámica del grupo en tiempo real",
    incorrectas: [
      "El nivel de conocimientos teóricos adquiridos a largo plazo",
      "La veracidad de los datos demográficos del censo"
    ]
  },
  {
    enunciado: "¿Qué documento debe recoger de forma sistemática los hallazgos y las propuestas de mejora tras la evaluación?",
    correcta: "Informe final de evaluación",
    incorrectas: [
      "Libro de actas de la junta de personal",
      "Folleto publicitario del centro de salud"
    ]
  },
  {
    enunciado: "La retroalimentación o 'feedback' en evaluación permite:",
    correcta: "Reorientar la planificación futura basándose en la experiencia previa",
    incorrectas: [
      "Confirmar que no es necesario realizar más evaluaciones",
      "Aumentar el precio de los materiales fungibles"
    ]
  },
  {
    enunciado: "Un indicador de 'resultado a medio plazo' que mide cambios en el estado de salud se denomina:",
    correcta: "Indicador de impacto",
    incorrectas: [
      "Indicador de esfuerzo",
      "Indicador de cobertura"
    ]
  },
  {
    enunciado: "La 'fiabilidad' de un indicador asistencial significa que:",
    correcta: "Ofrece resultados consistentes si se aplica en condiciones similares",
    incorrectas: [
      "Es aceptado legalmente por el tribunal de cuentas",
      "Mide únicamente aspectos positivos del programa"
    ]
  },
  {
    enunciado: "El cuestionario de satisfacción al usuario es un instrumento típico de la:",
    correcta: "Evaluación de resultados (percepción del servicio)",
    incorrectas: [
      "Evaluación de estructura (presupuesto)",
      "Evaluación diagnóstica (necesidades)"
    ]
  },
  {
    enunciado: "¿Qué mide un indicador de 'cobertura'?",
    correcta: "El porcentaje de población alcanzada respecto a la población diana",
    incorrectas: [
      "El número de metros cuadrados del aula de formación",
      "La cantidad de temas impartidos por el educador"
    ]
  },
  {
    enunciado: "En evaluación, el término 'sesgo' se refiere a:",
    correcta: "Un error sistemático que compromete la validez de los resultados",
    incorrectas: [
      "El análisis estadístico de la desviación típica",
      "La opinión favorable de los alumnos hacia el profesor"
    ]
  },
  {
    enunciado: "La evaluación cualitativa en EpS se centra principalmente en:",
    correcta: "Comprender los significados, percepciones y vivencias de los participantes",
    incorrectas: [
      "Contabilizar el número exacto de asistentes a cada sesión",
      "Calcular la media aritmética de las calificaciones obtenidas"
    ]
  },
  {
    enunciado: "Un indicador de 'productividad' relaciona:",
    correcta: "El volumen de servicios prestados con el tiempo o personal empleado",
    incorrectas: [
      "La calidad del material con el país de origen",
      "La satisfacción del paciente con el número de recetas"
    ]
  },
  {
    enunciado: "La 'evaluabilidad' de un programa se garantiza si:",
    correcta: "Los objetivos operativos son específicos y cuentan con indicadores asociados",
    incorrectas: [
      "El presupuesto es lo suficientemente amplio como para no ser auditado",
      "Todos los participantes tienen un nivel académico universitario"
    ]
  },
  {
    enunciado: "La evaluación externa es aquella que:",
    correcta: "Es realizada por personas o entes ajenos a la ejecución del programa",
    incorrectas: [
      "Se realiza en el patio o zonas exteriores del hospital",
      "Solo tiene en cuenta la opinión de los proveedores extranjeros"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal de la evaluación de la transferencia?",
    correcta: "Comprobar si los participantes aplican lo aprendido en su vida cotidiana",
    incorrectas: [
      "Medir la velocidad de conexión a internet durante el curso",
      "Analizar el movimiento de fondos entre partidas presupuestarias"
    ]
  },
  {
    enunciado: "Un indicador de 'proceso' que mide el cumplimiento del calendario es:",
    correcta: "Índice de ejecución temporal",
    incorrectas: [
      "Índice de mortalidad específica",
      "Tasa de ahorro farmacéutico"
    ]
  },
  {
    enunciado: "La 'especificidad' de un indicador se refiere a:",
    correcta: "Su capacidad para medir solo el fenómeno que se desea estudiar",
    incorrectas: [
      "Su capacidad para atraer la atención de los medios de comunicación",
      "La obligatoriedad de que sea redactado por un especialista"
    ]
  },
  {
    enunciado: "En la evaluación sumativa, el análisis 'antes-después' permite:",
    correcta: "Comparar el estado de los indicadores al inicio y al final de la intervención",
    incorrectas: [
      "Saber quién llegó primero a la sala de conferencias",
      "Justificar el inicio de un programa sin diagnóstico previo"
    ]
  },
  {
    enunciado: "Un indicador de 'cumplimiento de objetivos' se calcula generalmente mediante:",
    correcta: "(Resultado alcanzado / Objetivo previsto) x 100",
    incorrectas: [
      "(Coste total / Número de participantes)",
      "(Población diana - Población asistida)"
    ]
  },
  {
    enunciado: "La evaluación participativa implica que:",
    correcta: "Los propios destinatarios del programa intervienen en el proceso evaluativo",
    incorrectas: [
      "Se regalan premios a quienes contestan correctamente las encuestas",
      "El evaluador debe asistir como alumno a todas las clases"
    ]
  },
  {
    enunciado: "¿Qué elemento es indispensable para realizar una evaluación de resultados?",
    correcta: "Tener definidos objetivos operativos medibles en la planificación",
    incorrectas: [
      "Disponer de una cámara de vídeo para grabar las sesiones",
      "Contar con la autorización expresa del Ministerio de Justicia"
    ]
  },
  {
    enunciado: "La evaluación de 'coste-beneficio' expresa los resultados en:",
    correcta: "Unidades monetarias (dinero ahorrado vs dinero invertido)",
    incorrectas: [
      "Años de vida ganados por el paciente",
      "Número de folletos entregados por hora"
    ]
  },
  {
    enunciado: "Un informe de evaluación riguroso debe incluir siempre:",
    correcta: "Metodología, resultados, conclusiones y recomendaciones de mejora",
    incorrectas: [
      "Únicamente las fotos de la clausura del evento",
      "El listado de los precios de los menús de la cafetería"
    ]
  },
  {
    enunciado: "El término 'indicador centinela' se refiere a:",
    correcta: "Un indicador que detecta un suceso grave que requiere investigación inmediata",
    incorrectas: [
      "Un sensor de movimiento instalado en el almacén de farmacia",
      "El personal de seguridad que vigila la entrada del centro"
    ]
  },
  {
    enunciado: "La evaluación de la formación de los profesionales que imparten el programa es una:",
    correcta: "Evaluación de estructura (recursos humanos)",
    incorrectas: [
      "Evaluación de impacto social",
      "Evaluación de efectividad clínica"
    ]
  },
  {
    enunciado: "¿Cuál es la principal utilidad de los indicadores cuantitativos?",
    correcta: "Permiten la comparación objetiva y el análisis estadístico de los datos",
    incorrectas: [
      "Explican en profundidad las emociones de los participantes",
      "Sustituyen la necesidad de realizar un informe escrito"
    ]
  },
  {
    enunciado: "La autoevaluación por parte del educador sirve para:",
    correcta: "Identificar áreas de mejora en su propia práctica pedagógica",
    incorrectas: [
      "Evitar que la dirección del centro conozca los resultados reales",
      "Aumentar automáticamente el salario por méritos propios"
    ]
  },
  {
    enunciado: "En un programa de vacunación, el 'porcentaje de niños vacunados' es un indicador de:",
    correcta: "Resultado inmediato (o cobertura)",
    incorrectas: [
      "Estructura física",
      "Proceso administrativo"
    ]
  },
  {
    enunciado: "La 'pertinencia' de un indicador mide:",
    correcta: "Si el indicador es adecuado para los fines de la evaluación planteada",
    incorrectas: [
      "Si el indicador se ha publicado en una revista de impacto",
      "Si el indicador es fácil de calcular sin calculadora"
    ]
  },
  {
    enunciado: "Un indicador de 'proceso' referente a la accesibilidad sería:",
    correcta: "El tiempo medio de espera para acceder a la actividad educativa",
    incorrectas: [
      "El nivel de colesterol tras finalizar el programa de dieta",
      "El número de médicos especialistas en el hospital"
    ]
  },
  {
    enunciado: "La evaluación sumativa se diferencia de la formativa en que la sumativa es:",
    correcta: "Fundamentalmente de carácter conclusivo y se realiza al final",
    incorrectas: [
      "Realizada exclusivamente por el personal de limpieza",
      "De carácter exploratorio y se realiza antes de empezar"
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'universo' en la toma de datos para evaluación?",
    correcta: "El conjunto total de elementos que cumplen las características a estudiar",
    incorrectas: [
      "La zona del espacio exterior donde se ubican los satélites GPS",
      "El grupo de expertos que ha diseñado el programa"
    ]
  },
  {
    enunciado: "La fase de evaluación cierra el ciclo de planificación, pero a su vez:",
    correcta: "Inicia un nuevo ciclo de planificación mediante la retroalimentación",
    incorrectas: [
      "Obliga al despido inmediato de todo el equipo de salud",
      "Impide que se puedan realizar más programas en el futuro"
    ]
  }
];