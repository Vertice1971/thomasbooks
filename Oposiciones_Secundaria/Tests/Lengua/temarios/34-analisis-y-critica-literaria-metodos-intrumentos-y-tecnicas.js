// temarios/34-analisis-y-critica-literaria-metodos-instrumentos-tecnicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué diferencia básica hay entre análisis literario y crítica literaria?",
    correcta: "El análisis descompone y describe el funcionamiento del texto; la crítica interpreta y valora con criterios explícitos.",
    incorrectas: [
      "El análisis se centra solo en biografía y la crítica solo en métrica.",
      "El análisis juzga gustos personales y la crítica evita cualquier valoración."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al ‘close reading’ del New Criticism?",
    correcta: "La lectura minuciosa del texto atendiendo a su forma y significación interna.",
    incorrectas: [
      "La dependencia exclusiva de datos extraliterarios para explicar la obra.",
      "La búsqueda prioritaria de la intención del autor mediante testimonios."
    ]
  },
  {
    enunciado: "Según el formalismo ruso, ¿qué persigue el ‘extrañamiento’ (ostranenie)?",
    correcta: "Desautomatizar la percepción para renovar la experiencia estética del lector.",
    incorrectas: [
      "Simplificar el lenguaje hasta la transparencia informativa total.",
      "Eliminar figuras y ritmos para lograr neutralidad."
    ]
  },
  {
    enunciado: "En narratología, ‘fábula’ y ‘trama’ se distinguen porque:",
    correcta: "La fábula es la secuencia lógica-cronológica de los hechos; la trama es su disposición artística.",
    incorrectas: [
      "Ambos términos son sinónimos sin diferencia alguna.",
      "La fábula se aplica solo a poesía y la trama solo a teatro."
    ]
  },
  {
    enunciado: "La ‘focalización cero’ en Genette se define como:",
    correcta: "Narración con conocimiento omnisciente no restringido por un punto de vista interno.",
    incorrectas: [
      "Restricción al saber de un personaje concreto siempre.",
      "Narración en segunda persona con focalización múltiple simultánea."
    ]
  },
  {
    enunciado: "Señala la opción correcta sobre la voz narrativa.",
    correcta: "Narrador homodiegético participa en la historia; heterodiegético no participa.",
    incorrectas: [
      "Homodiegético siempre es omnisciente y heterodiegético, testigo limitado.",
      "La distinción se basa en el número de personajes que aparecen."
    ]
  },
  {
    enunciado: "En el análisis del tiempo narrativo según Genette, ‘orden, duración y frecuencia’ aluden a:",
    correcta: "Relaciones entre secuencia de la historia y del relato, extensión temporal y repetición de acontecimientos narrados.",
    incorrectas: [
      "La métrica del poema, el número de estrofas y la rima.",
      "La cronología editorial, el tiraje y las reimpresiones."
    ]
  },
  {
    enunciado: "En la tipología de Genette, ¿qué es el paratexto?",
    correcta: "Títulos, prólogos, notas y otros umbrales que enmarcan la obra.",
    incorrectas: [
      "La relación de una obra con otra que la reescribe (hipertexto).",
      "Las alusiones internas entre capítulos de la misma novela."
    ]
  },
  {
    enunciado: "¿Qué es una isotopía en análisis semiótico?",
    correcta: "La recurrencia de rasgos semánticos que estabiliza la lectura de un texto.",
    incorrectas: [
      "La repetición métrica de sílabas átonas en verso suelto.",
      "La identidad entre narrador y autor empírico."
    ]
  },
  {
    enunciado: "El ‘leitmotiv’ en una obra cumple la función de:",
    correcta: "Motivo recurrente que articula y unifica sentidos a lo largo del texto.",
    incorrectas: [
      "Descripción accesoria sin relevancia estructural.",
      "Técnica exclusiva de la poesía lírica contemporánea."
    ]
  },
  {
    enunciado: "¿Qué aportan las figuras retóricas al análisis aplicado?",
    correcta: "Permiten explicar cómo la forma verbal produce efectos de sentido y emoción.",
    incorrectas: [
      "Sustituyen la necesidad de contexto histórico.",
      "Sirven solo para catalogar sin interpretar funciones."
    ]
  },
  {
    enunciado: "Según el Groupe μ, las operaciones retóricas básicas son:",
    correcta: "Adición, supresión, permutación y sustitución.",
    incorrectas: [
      "Descripción, narración, exposición y argumentación.",
      "Versificación, edición, impresión y distribución."
    ]
  },
  {
    enunciado: "En métrica española, la rima asonante se define por:",
    correcta: "Coincidencia de vocales desde la última vocal acentuada.",
    incorrectas: [
      "Identidad total de vocales y consonantes desde la tónica.",
      "Igualdad de número de sílabas en dos versos contiguos."
    ]
  },
  {
    enunciado: "El encabalgamiento en poesía se reconoce porque:",
    correcta: "La unidad sintáctica continúa en el verso siguiente rompiendo el final de verso.",
    incorrectas: [
      "Todo periodo sintáctico termina exactamente al final del verso.",
      "Se exige rima interna en la mitad de cada verso."
    ]
  },
  {
    enunciado: "¿Qué estudia la ecdótica dentro de la filología?",
    correcta: "La constitución del texto a partir de testimonios mediante recensio y establecimiento crítico.",
    incorrectas: [
      "La recepción histórica de la obra por diferentes públicos.",
      "El análisis del ritmo y la rima en poesía moderna."
    ]
  },
  {
    enunciado: "La crítica genética se ocupa de:",
    correcta: "Manuscritos, borradores y dossieres para reconstruir el proceso de escritura.",
    incorrectas: [
      "Clasificar géneros literarios por extensión del texto final.",
      "Determinar exclusivamente la autoría por firmas notariales."
    ]
  },
  {
    enunciado: "¿Qué explora la bibliografía material en literatura?",
    correcta: "Soporte, tipografía, diseño y materialidad que median la lectura.",
    incorrectas: [
      "Únicamente la biografía del autor y su generación.",
      "Las ventas y reseñas como únicos factores de valor estético."
    ]
  },
  {
    enunciado: "Desde Bourdieu, el ‘campo literario’ es:",
    correcta: "Un espacio de posiciones y luchas por capital simbólico entre agentes.",
    incorrectas: [
      "Un conjunto de normas métricas universales.",
      "Una biblioteca neutral sin relaciones de poder."
    ]
  },
  {
    enunciado: "La estética de la recepción (Jauss) subraya que:",
    correcta: "La lectura está mediada por el horizonte de expectativas histórico del público.",
    incorrectas: [
      "Solo importa la intención del autor para fijar sentidos.",
      "La interpretación válida es la del crítico con mayor prestigio."
    ]
  },
  {
    enunciado: "Para Iser, el lector implícito es:",
    correcta: "Una instancia textual que orienta la cooperación interpretativa del lector real.",
    incorrectas: [
      "Un personaje diegético que narra la historia.",
      "El editor responsable del paratexto impreso."
    ]
  },
  {
    enunciado: "El ‘círculo hermenéutico’ se entiende como:",
    correcta: "Relación parte–todo por la cual la comprensión de un elemento requiere la del conjunto y viceversa.",
    incorrectas: [
      "Un método exclusivamente cuantitativo de conteo de palabras.",
      "Una técnica de traducción literal sin interpretación."
    ]
  },
  {
    enunciado: "Un enfoque marxista en crítica literaria atiende sobre todo a:",
    correcta: "Condiciones sociohistóricas, ideología y relaciones de clase en la obra y su producción.",
    incorrectas: [
      "El análisis aislado de rimas sin contexto.",
      "La intención declarada del autor como verdad final."
    ]
  },
  {
    enunciado: "La crítica feminista y de género se centra en:",
    correcta: "Representaciones, voces, cuerpos y relaciones de poder vinculadas al género y la sexualidad.",
    incorrectas: [
      "Excluir autoras del canon para mantener la tradición.",
      "Sustituir el análisis textual por encuestas de mercado."
    ]
  },
  {
    enunciado: "La crítica poscolonial suele preguntar:",
    correcta: "Cómo operan poder, identidad y representación en contextos coloniales y sus herencias.",
    incorrectas: [
      "Qué rima conviene a cada estrofa del Siglo de Oro.",
      "Cuántos ejemplares vendió la primera edición."
    ]
  },
  {
    enunciado: "La ecocrítica tiende a examinar:",
    correcta: "La representación de la naturaleza, agencia no humana y crisis ecológicas en la literatura.",
    incorrectas: [
      "El rendimiento financiero de editoriales ‘verdes’.",
      "La métrica clásica como único parámetro de análisis."
    ]
  },
  {
    enunciado: "Una lectura deconstructiva (Derrida) pone énfasis en:",
    correcta: "Aporías, tensiones y jerarquías inestables que desestabilizan oposiciones binarias del texto.",
    incorrectas: [
      "Un significado único fijado por la intención autoral.",
      "La eliminación de toda ambigüedad mediante paráfrasis literal."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al ‘distant reading’ (Moretti)?",
    correcta: "El análisis de grandes corpus mediante métodos cuantitativos y visualizaciones para detectar patrones.",
    incorrectas: [
      "La lectura exclusivamente en voz alta de un solo poema.",
      "La sustitución definitiva de cualquier interpretación cualitativa."
    ]
  },
  {
    enunciado: "El ‘topic modeling’ aplicado a literatura permite:",
    correcta: "Inferir agrupaciones temáticas latentes en colecciones extensas de textos.",
    incorrectas: [
      "Medir el número de sílabas por verso con precisión métrica.",
      "Determinar automáticamente la intención del autor."
    ]
  },
  {
    enunciado: "La estilometría se usa para:",
    correcta: "Atribución de autoría y perfiles de estilo mediante rasgos cuantificables.",
    incorrectas: [
      "Medir el valor de mercado de primeras ediciones.",
      "Contar personajes sin atender al lenguaje."
    ]
  },
  {
    enunciado: "Un concordanciador en análisis de corpus sirve para:",
    correcta: "Explorar usos, colocaciones y contextos de palabras en grandes colecciones.",
    incorrectas: [
      "Editar imágenes paratextuales en alta resolución.",
      "Calcular automáticamente rimas asonantes."
    ]
  },
  {
    enunciado: "Una técnica eficaz de comentario literario combina:",
    correcta: "Microanálisis textual y síntesis interpretativa con evidencias del propio texto.",
    incorrectas: [
      "Opiniones generales sin cita de pasajes.",
      "Resumen argumental sin atención a la forma."
    ]
  },
  {
    enunciado: "El ‘comentario por capas’ suele ordenar el análisis en:",
    correcta: "Léxico-sintaxis, figuras/ritmos, organización macro, intertexto y contexto, hipótesis interpretativa.",
    incorrectas: [
      "Ventas, premios, portadas y reseñas de prensa.",
      "Cronograma vital del autor sin citar el texto."
    ]
  },
  {
    enunciado: "¿Qué se entiende por triangulación metodológica en crítica?",
    correcta: "Combinar enfoques (p. ej., narratología, sociología y recepción) para robustecer la interpretación.",
    incorrectas: [
      "Usar un único método para mantener pureza teórica.",
      "Sustituir el análisis textual por estadísticas."
    ]
  },
  {
    enunciado: "Entre los criterios internos de valoración se cuentan:",
    correcta: "Coherencia estructural, economía formal y densidad retórica.",
    incorrectas: [
      "Número de páginas y de ilustraciones a color.",
      "Popularidad en redes sociales del autor."
    ]
  },
  {
    enunciado: "Una práctica ética esencial del crítico es:",
    correcta: "Explicitar supuestos teóricos, citar fuentes y justificar inferencias con evidencias textuales.",
    incorrectas: [
      "Ocultar el marco teórico para aparentar objetividad.",
      "Apoyarse solo en autoridad sin análisis propio."
    ]
  },
  {
    enunciado: "Una rúbrica de comentario debería incluir dimensiones como:",
    correcta: "Identificación de recursos, función y sentido, coherencia argumentativa y calidad expresiva.",
    incorrectas: [
      "Longitud del texto y tipo de letra usado.",
      "Número de citas sin relación con el análisis."
    ]
  },
  {
    enunciado: "En análisis dramático, es pertinente atender a:",
    correcta: "Estructura de actos y escenas, acotaciones, apartes y dinámica del conflicto.",
    incorrectas: [
      "Únicamente a la biografía del dramaturgo.",
      "Exclusivamente a la rima de los parlamentos."
    ]
  },
  {
    enunciado: "En poesía, el cómputo silábico se ve afectado por fenómenos como:",
    correcta: "Sinalefa, sinéresis y diéresis, además de la posición del acento final.",
    incorrectas: [
      "El número de capítulos del libro y su tirada.",
      "La fecha de estreno de la primera lectura pública."
    ]
  },
  {
    enunciado: "La fiabilidad del narrador es un concepto útil para:",
    correcta: "Valorar la distancia entre lo que narra y lo que el texto sugiere como verosímil o verdadero.",
    incorrectas: [
      "Determinar la rima interna de los capítulos.",
      "Fijar de antemano la moral del autor empírico."
    ]
  },
  {
    enunciado: "¿Qué se denomina ‘falacia intencional’ en teoría crítica?",
    correcta: "Confundir la intención del autor con el significado del texto como criterio de verdad.",
    incorrectas: [
      "Atribuir un poema a un género incorrecto por error tipográfico.",
      "Suponer que toda metáfora posee un único sentido literal."
    ]
  }
];
