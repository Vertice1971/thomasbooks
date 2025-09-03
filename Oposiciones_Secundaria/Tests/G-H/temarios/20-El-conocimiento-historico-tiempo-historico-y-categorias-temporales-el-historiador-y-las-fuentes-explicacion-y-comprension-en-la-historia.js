// temarios/20-El-conocimiento-historico-tiempo-historico-y-categorias-temporales-el-historiador-y-las-fuentes-explicacion-y-comprension-en-la-historia.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la Historia como disciplina científica en su acepción más aceptada?",
    correcta: "Los procesos humanos del pasado a partir de la interpretación crítica de sus huellas y testimonios",
    incorrectas: [
      "Los fenómenos naturales atemporales sin referencia a sociedades humanas",
      "Las creencias míticas sin contraste con fuentes verificables"
    ]
  },
  {
    enunciado: "¿Qué función social se atribuye habitualmente a la Historia en las sociedades democráticas?",
    correcta: "Contribuir a una ciudadanía crítica mediante la comprensión del pasado en su complejidad",
    incorrectas: [
      "Sustituir a las ciencias sociales en la toma de decisiones políticas",
      "Confirmar narrativas oficiales sin someterlas a revisión"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al ‘hecho histórico’ frente a un simple dato cronológico?",
    correcta: "Su contextualización y significación dentro de procesos más amplios",
    incorrectas: [
      "Su neutralidad absoluta independientemente del contexto",
      "Su independencia total de las fuentes que lo atestiguan"
    ]
  },
  {
    enunciado: "En el proceso de investigación, ¿qué papel desempeña la selección de fuentes por parte del historiador?",
    correcta: "Orienta la interpretación al establecer relevancias y límites del relato",
    incorrectas: [
      "Garantiza automáticamente la objetividad sin necesidad de crítica",
      "Evita la necesidad de un marco teórico explícito"
    ]
  },
  {
    enunciado: "¿Qué pretende la crítica externa de una fuente histórica?",
    correcta: "Determinar autenticidad, autoría, procedencia y datación del documento",
    incorrectas: [
      "Valorar la coherencia interna del texto con su propio contenido",
      "Estimar el impacto social de la obra a largo plazo"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo fundamental de la crítica interna de las fuentes?",
    correcta: "Valorar fiabilidad, significado e intencionalidad del testimonio",
    incorrectas: [
      "Reconstruir el soporte material del documento",
      "Identificar el archivo de depósito sin analizar el contenido"
    ]
  },
  {
    enunciado: "¿Qué distingue el tiempo histórico del tiempo cronológico?",
    correcta: "El tiempo histórico incorpora sentido, ritmos y duraciones cualitativas",
    incorrectas: [
      "El tiempo histórico es una simple sucesión de días y años",
      "El tiempo histórico elimina las relaciones de causa y efecto"
    ]
  },
  {
    enunciado: "¿Qué categoría temporal permite entender procesos que se extienden por generaciones?",
    correcta: "La larga duración como horizonte estructural de cambio y permanencia",
    incorrectas: [
      "La instantaneidad como ruptura de todo vínculo temporal",
      "La microsegundidad como unidad básica del análisis histórico"
    ]
  },
  {
    enunciado: "¿Qué noción ayuda a captar que varios procesos ocurren a la vez en lugares distintos?",
    correcta: "La simultaneidad como coexistencia de ritmos y acontecimientos",
    incorrectas: [
      "La unicidad, que impide toda comparación sincrónica",
      "La anacronía, que ignora el contexto de cada proceso"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene la periodización en Historia?",
    correcta: "Organizar el tiempo en etapas interpretativas útiles para el análisis",
    incorrectas: [
      "Fijar fronteras políticas inmutables",
      "Eliminar las continuidades entre procesos cercanos"
    ]
  },
  {
    enunciado: "¿Qué riesgo conlleva toda periodización histórica?",
    correcta: "Forzar rupturas artificiales y simplificar procesos complejos",
    incorrectas: [
      "Impedir la comparación entre sociedades",
      "Eliminar la necesidad de fuentes primarias"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al enfoque positivista clásico en historiografía?",
    correcta: "Confianza en el documento como base de una historia ‘tal como fue’",
    incorrectas: [
      "Rechazo de toda fuente escrita en favor de la oralidad",
      "Identificación de historia con ficción verosímil"
    ]
  },
  {
    enunciado: "¿Qué rasgo central introduce la historia-problema de tradición francesa?",
    correcta: "Plantea preguntas analíticas y compara escalas temporales diversas",
    incorrectas: [
      "Sustituye las fuentes por hipótesis no contrastables",
      "Reduce la historia a biografías de grandes personajes"
    ]
  },
  {
    enunciado: "¿Cuál es la aportación didáctica de las líneas de tiempo interactivas?",
    correcta: "Facilitan visualizar simultaneidades y secuencias en distintas escalas",
    incorrectas: [
      "Suprimen la multicausalidad al imponer un único hilo causal",
      "Evitan el trabajo con fuentes para no sobrecargar al alumnado"
    ]
  },
  {
    enunciado: "¿Qué se entiende por multicausalidad en la explicación histórica?",
    correcta: "Interacción de factores estructurales y coyunturales en un proceso",
    incorrectas: [
      "Primacía absoluta de una única causa eficiente",
      "Negación de las causas en favor del azar puro"
    ]
  },
  {
    enunciado: "¿Qué aporta el análisis comparativo en Historia?",
    correcta: "Permite identificar patrones y divergencias entre casos distintos",
    incorrectas: [
      "Impone que todos los procesos concluyan de la misma manera",
      "Elimina las particularidades culturales de cada sociedad"
    ]
  },
  {
    enunciado: "¿Qué es la empatía histórica en el trabajo comprensivo?",
    correcta: "Reconstruir significados desde categorías de la época estudiada",
    incorrectas: [
      "Juzgar el pasado con criterios morales presentes sin contexto",
      "Adoptar una visión relativista que prescinde de las fuentes"
    ]
  },
  {
    enunciado: "¿Qué busca la alteridad en la comprensión histórica?",
    correcta: "Reconocer la diferencia de mentalidades y cosmovisiones del pasado",
    incorrectas: [
      "Uniformar todas las culturas bajo un único patrón interpretativo",
      "Confundir testimonios primarios con opiniones actuales"
    ]
  },
  {
    enunciado: "¿Por qué la Historia explicativa y la comprensiva se consideran complementarias?",
    correcta: "Porque articular causas y significados enriquece la interpretación",
    incorrectas: [
      "Porque se excluyen mutuamente en toda investigación",
      "Porque sustituyen el análisis crítico de las fuentes"
    ]
  },
  {
    enunciado: "¿Qué ventaja didáctica tiene trabajar con estudios de caso en el aula?",
    correcta: "Profundizar en evidencias concretas y transferir inferencias a otros contextos",
    incorrectas: [
      "Evitar la escritura argumentativa para centrarse solo en fechas",
      "Limitar el aprendizaje a memorizar definiciones generales"
    ]
  },
  {
    enunciado: "¿Qué tipo de fuentes incluye testimonios materiales como cerámica, monedas o útiles?",
    correcta: "Fuentes arqueológicas o materiales que complementan lo escrito",
    incorrectas: [
      "Fuentes exclusivamente estadísticas de épocas contemporáneas",
      "Fuentes secundarias producidas por manuales escolares"
    ]
  },
  {
    enunciado: "¿Qué aporta la geografía histórica a la investigación del pasado?",
    correcta: "Contextualiza procesos en el espacio mediante paisajes, redes y territorios",
    incorrectas: [
      "Sustituye la cronología por descripciones atemporales",
      "Elimina la necesidad de cartografía y trabajo de campo"
    ]
  },
  {
    enunciado: "¿Qué precaución exige la historia oral como fuente?",
    correcta: "Atender a memoria selectiva, contexto de la entrevista y corroboración",
    incorrectas: [
      "Suponer neutralidad total del testimonio por ser vivido",
      "Descartar toda transcripción por considerarla interpretación"
    ]
  },
  {
    enunciado: "¿Qué desafío plantean la digitalización y los repositorios en línea para el historiador?",
    correcta: "Gestionar autenticidad, preservación y sobreabundancia de información",
    incorrectas: [
      "Abandonar la crítica de fuentes por ser innecesaria en lo digital",
      "Sustituir la citación por enlaces sin metadatos"
    ]
  },
  {
    enunciado: "¿Qué competencia evalúa la capacidad de justificar una interpretación con evidencias?",
    correcta: "La argumentación histórica basada en pruebas pertinentes y suficientes",
    incorrectas: [
      "La memorización desvinculada de fuentes",
      "La creatividad narrativa sin contrastación documental"
    ]
  },
  {
    enunciado: "¿Qué estrategia favorece la comprensión de ritmos temporales distintos en un mismo proceso?",
    correcta: "Trabajar escalas (larga, media y corta duración) en paralelo",
    incorrectas: [
      "Elegir una única escala y excluir las demás",
      "Evitar toda comparación diacrónica por compleja"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el marco teórico con la selección de hechos en un relato?",
    correcta: "El marco teórico orienta qué se considera relevante y cómo se explica",
    incorrectas: [
      "El marco teórico se define al final para encajar cualquier resultado",
      "El marco teórico impide dialogar con fuentes de signo contrario"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre acontecimiento y proceso en Historia?",
    correcta: "El acontecimiento es puntual; el proceso implica desarrollo prolongado",
    incorrectas: [
      "El acontecimiento siempre es más importante que el proceso",
      "El proceso carece de causas al diluirse en el tiempo"
    ]
  },
  {
    enunciado: "¿Qué aporta la microhistoria como enfoque de investigación y enseñanza?",
    correcta: "Ilumina estructuras generales a partir de casos locales bien documentados",
    incorrectas: [
      "Prescinde de fuentes para centrarse en hipótesis generales",
      "Rechaza toda comparación con contextos más amplios"
    ]
  },
  {
    enunciado: "¿Qué utilidad didáctica tiene el trabajo con cartografía histórica interactiva?",
    correcta: "Relacionar cambios territoriales con procesos políticos, económicos y culturales",
    incorrectas: [
      "Sustituir la búsqueda de fuentes por mapas sin leyenda",
      "Desconectar el espacio de los fenómenos históricos"
    ]
  },
  {
    enunciado: "¿Qué propósito tiene la triangulación de fuentes en una investigación escolar?",
    correcta: "Corroborar hallazgos combinando testimonios de naturaleza distinta",
    incorrectas: [
      "Descartar fuentes que contradicen la hipótesis inicial",
      "Evitar el uso de fuentes primarias por su complejidad"
    ]
  },
  {
    enunciado: "¿Por qué es clave la contextualización en la comprensión histórica?",
    correcta: "Porque el significado de prácticas y textos depende de su época y entorno",
    incorrectas: [
      "Porque permite juzgar el pasado con criterios actuales",
      "Porque elimina la necesidad de analizar intencionalidades"
    ]
  },
  {
    enunciado: "¿Cuál es una buena práctica al diseñar actividades con fuentes para el aula?",
    correcta: "Plantear preguntas guiadas que ayuden a inferir evidencias y conclusiones",
    incorrectas: [
      "Pedir transcripciones extensas sin propósito analítico",
      "Reemplazar el análisis por resúmenes memorizados"
    ]
  },
  {
    enunciado: "¿Qué ventaja didáctica tiene el trabajo de campo histórico local?",
    correcta: "Vincula el aprendizaje con lugares, archivos y memorias de la comunidad",
    incorrectas: [
      "Evita el contraste con fuentes escritas por ser innecesario",
      "Limita el estudio a anécdotas sin valor explicativo"
    ]
  },
  {
    enunciado: "¿Qué dimensión ética debe cultivar la enseñanza de la Historia?",
    correcta: "Responsabilidad ante el uso público del pasado y rechazo de la manipulación",
    incorrectas: [
      "Neutralidad acrítica ante discursos negacionistas",
      "Supremacía de la propaganda sobre la evidencia"
    ]
  },
  {
    enunciado: "En términos evaluativos, ¿qué indica la habilidad de ‘sintetizar’ en Historia?",
    correcta: "Integrar evidencias diversas en un argumento coherente y ordenado",
    incorrectas: [
      "Seleccionar citas sin relación entre sí",
      "Enumerar fechas sin establecer relaciones causales"
    ]
  },
  {
    enunciado: "¿Qué tipo de explicación combina factores económicos, políticos, culturales y ambientales?",
    correcta: "Una explicación multicausal que integra niveles de análisis diferentes",
    incorrectas: [
      "Una explicación monocausal que se limita a un solo factor",
      "Una explicación que evita los datos para priorizar intuiciones"
    ]
  },
  {
    enunciado: "¿Qué indicador muestra progreso en pensamiento histórico del alumnado?",
    correcta: "Fundamentar interpretaciones con evidencias y contraargumentos razonados",
    incorrectas: [
      "Repetir definiciones sin aplicar a casos concretos",
      "Elegir siempre la opción más breve en los cuestionarios"
    ]
  },
  {
    enunciado: "¿Qué precaución metodológica debe tomarse al usar estadísticas históricas?",
    correcta: "Comprobar serie, escala, fuentes y contexto de producción del dato",
    incorrectas: [
      "Asumir neutralidad del número sin revisar metodología",
      "Sustituir toda fuente cualitativa por tablas y gráficos"
    ]
  }
];
