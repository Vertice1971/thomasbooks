// temarios/40-el-ensayo-el-periodismo-y-su-irrupcion-en-la-literatura.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo define operativamente al ensayo moderno desde Montaigne?",
    correcta: "Una escritura exploratoria y personal que prueba ideas sin necesidad de cierre concluyente.",
    incorrectas: [
      "Un tratado sistemático que agota un tema con demostración formal.",
      "Un relato ficcional con pacto de invención explícito."
    ]
  },
  {
    enunciado: "¿Qué distingue el contrato factual del periodismo frente al literario de ficción?",
    correcta: "Compromiso con verificación, fuentes y contrastes, orientado a hechos verificables.",
    incorrectas: [
      "Libertad absoluta para inventar sin referencia a la realidad.",
      "Primacía de la rima y la métrica sobre el contenido."
    ]
  },
  {
    enunciado: "¿Qué aportó Michel de Montaigne al género del ensayo?",
    correcta: "Instituyó una voz reflexiva que piensa en público con estilo conversacional.",
    incorrectas: [
      "Formalizó el reportaje de investigación con entrevistas extensas.",
      "Creó la pirámide invertida para redactar noticias."
    ]
  },
  {
    enunciado: "Vincula autor y tradición ensayística correctamente.",
    correcta: "Bacon: ensayo moral y aforístico con voluntad práctica.",
    incorrectas: [
      "Capote: manual de métrica y rima en verso clásico.",
      "Larra: dramaturgia simbolista de fin de siglo."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al artículo de costumbres de Larra?",
    correcta: "Observación crítica de la vida social con ironía y propósito cívico.",
    incorrectas: [
      "Relato fantástico con pacto de ficción explícito.",
      "Comentario deportivo basado en estadísticas de juego."
    ]
  },
  {
    enunciado: "¿Qué rasgo es típico del ensayo de Ortega y Gasset?",
    correcta: "Reflexión teórica con prosa clara, conceptos e imágenes orientadas al lector culto.",
    incorrectas: [
      "Monólogo poético en verso isométrico.",
      "Inventario de fuentes sin interpretación."
    ]
  },
  {
    enunciado: "La 'razón poética' de María Zambrano se entiende como:",
    correcta: "Una forma de conocimiento que integra pensamiento y experiencia simbólica.",
    incorrectas: [
      "Un método de verificación estadística en periodismo de datos.",
      "Una técnica de métrica cuantitativa para sonetos."
    ]
  },
  {
    enunciado: "¿Cuál es una tipología válida del ensayo?",
    correcta: "Filosófico, crítico-literario, sociocultural, autobiográfico.",
    incorrectas: [
      "Épico, lírico, dramático exclusivamente.",
      "Didáctico rimado, épico musical, tragedia factual."
    ]
  },
  {
    enunciado: "¿Qué rasgo es propio del Nuevo Periodismo de los años 60 en EE. UU.?",
    correcta: "Uso de escenas, puntos de vista y detalles significativos con verificación factual.",
    incorrectas: [
      "Eliminación total de fuentes y testimonios.",
      "Redacción en verso con rima consonante."
    ]
  },
  {
    enunciado: "¿Por qué 'A sangre fría' de Capote es un hito?",
    correcta: "Por articular técnicas novelísticas con investigación documental rigurosa.",
    incorrectas: [
      "Por ser una obra de pura ficción fantástica sin base real.",
      "Por introducir la métrica alejandrina en la prosa informativa."
    ]
  },
  {
    enunciado: "Diferencia básica entre crónica y reportaje informativo.",
    correcta: "La crónica enfatiza la mirada y el tiempo del cronista; el reportaje prioriza datos y contexto explicativo.",
    incorrectas: [
      "La crónica siempre es ficción; el reportaje, poesía.",
      "El reportaje prescinde de fuentes; la crónica no cita jamás."
    ]
  },
  {
    enunciado: "¿Qué caracteriza la estructura de la noticia en pirámide invertida?",
    correcta: "Presenta primero lo más relevante (qué, quién, cuándo, dónde, por qué, cómo) y luego detalle.",
    incorrectas: [
      "Oculta el dato principal para generar suspense literario.",
      "Exige una conclusión moral explícita al final."
    ]
  },
  {
    enunciado: "Diferencia entre editorial y columna de opinión.",
    correcta: "El editorial expresa la postura del medio; la columna, la voz autoral de una firma concreta.",
    incorrectas: [
      "La columna fija la línea del medio y el editorial es personal.",
      "Ambas son géneros estrictamente informativos sin opinión."
    ]
  },
  {
    enunciado: "¿Qué distingue una entrevista-perfil?",
    correcta: "Construye un retrato narrativo del entrevistado integrando citas, escenas y contexto.",
    incorrectas: [
      "Se limita a un cuestionario de sí/no sin descripción.",
      "Evita cualquier referencia a la trayectoria del sujeto."
    ]
  },
  {
    enunciado: "Función del lead o entradilla en prensa.",
    correcta: "Anclar el ángulo informativo y captar al lector con lo esencial del texto.",
    incorrectas: [
      "Proporcionar bibliografía académica completa.",
      "Sustituir el cuerpo del artículo por un resumen poético."
    ]
  },
  {
    enunciado: "En clave retórica, 'ethos' remite a:",
    correcta: "La imagen de credibilidad y carácter que proyecta quien escribe.",
    incorrectas: [
      "La estructura silábica del verso periodístico.",
      "El orden cronológico estricto de los hechos."
    ]
  },
  {
    enunciado: "Según Toulmin, ¿qué es la 'garantía' (warrant) en un argumento?",
    correcta: "La regla o principio que conecta los datos con la conclusión.",
    incorrectas: [
      "El adorno estilístico que embellece la prosa.",
      "La cita textual que repite un dato sin interpretación."
    ]
  },
  {
    enunciado: "Perelman y Olbrechts-Tyteca subrayan que la argumentación busca:",
    correcta: "Adhesión de una audiencia mediante razones pertinentes y aceptables.",
    incorrectas: [
      "La certeza matemática en todo discurso periodístico.",
      "La neutralización total de cualquier punto de vista."
    ]
  },
  {
    enunciado: "¿Qué papel cumplen Fundéu/RAE para periodistas?",
    correcta: "Orientar sobre uso y norma en lengua española para mejorar claridad y corrección.",
    incorrectas: [
      "Emitir licencias para ejercer como cronistas.",
      "Determinar qué temas son publicables legalmente."
    ]
  },
  {
    enunciado: "Una regla deontológica central en periodismo es:",
    correcta: "Rectificar errores con prontitud y visibilidad.",
    incorrectas: [
      "Ocultar fuentes para mantener el suspense.",
      "Evitar el contraste cuando la noticia es urgente."
    ]
  },
  {
    enunciado: "¿Para qué sirve el fact-checking en un texto factual?",
    correcta: "Para verificar datos, citas y contexto antes de publicar.",
    incorrectas: [
      "Para ajustar el estilo a rimas y metáforas.",
      "Para añadir subjetividad sin evidencia."
    ]
  },
  {
    enunciado: "Riesgo principal del 'clickbait' para la escritura pública.",
    correcta: "Prioriza titulares engañosos sobre la veracidad y deteriora la confianza.",
    incorrectas: [
      "Mejora la argumentación al exigir más citas.",
      "Refuerza el ethos al transparentar fuentes."
    ]
  },
  {
    enunciado: "Diferencia entre ensayo y artículo académico.",
    correcta: "El ensayo privilegia la exploración personal; el académico exige aparato metodológico y citación formal.",
    incorrectas: [
      "El ensayo prohíbe toda referencia y cita.",
      "El académico evita cualquier estructura lógica."
    ]
  },
  {
    enunciado: "Un rasgo estructural del ensayo abierto es:",
    correcta: "La deriva reflexiva con progresión por asociaciones y ejemplos, no por pruebas concluyentes.",
    incorrectas: [
      "La obligación de una hipótesis estadística verificada.",
      "La rima consonante como cierre canónico."
    ]
  },
  {
    enunciado: "¿Qué es la analogía como recurso en ensayo y columna?",
    correcta: "Un puente comparativo que ilumina un concepto complejo con otro más conocido.",
    incorrectas: [
      "Una técnica de ocultación de fuentes.",
      "Una figura exclusiva de la poesía métrica."
    ]
  },
  {
    enunciado: "Un paratexto periodístico típico es:",
    correcta: "Titular, antetítulo y fotografía con pie explicativo.",
    incorrectas: [
      "Índice onomástico y aparato crítico con variantes.",
      "Acotaciones escénicas y reparto de personajes."
    ]
  },
  {
    enunciado: "Diferencia entre reportaje de datos y de color.",
    correcta: "El de datos se apoya en evidencias cuantitativas; el de color recrea ambiente y detalles sensoriales.",
    incorrectas: [
      "Ambos prescinden de fuentes para centrarse en estilo.",
      "El de color exige tablas y gráficos obligatorios."
    ]
  },
  {
    enunciado: "Seña de identidad de la crónica literaria hispánica contemporánea.",
    correcta: "Primera persona estratégica, escenas y mirada autoral con verificación de hechos.",
    incorrectas: [
      "Ficción declarada sin compromiso factual.",
      "Análisis métrico de poemas sin contexto."
    ]
  },
  {
    enunciado: "¿Qué designa 'longform' en medios digitales?",
    correcta: "Piezas extensas y profundas, a veces multimedia, con narrativa cuidada.",
    incorrectas: [
      "Mensajes de 140 caracteres con enlaces.",
      "Notas breves sin desarrollo contextual."
    ]
  },
  {
    enunciado: "Una newsletter autoral se caracteriza por:",
    correcta: "Periodicidad, voz propia y comunidad de lectores suscritos.",
    incorrectas: [
      "Publicación anónima sin firma ni contacto.",
      "Formato exclusivo en papel sin versión digital."
    ]
  },
  {
    enunciado: "¿Qué distingue un pódcast narrativo de un informativo breve?",
    correcta: "Construcción de escenas sonoras, personajes y estructura de relato.",
    incorrectas: [
      "Lectura de titulares sin ambientación.",
      "Silencio total para fomentar la imaginación."
    ]
  },
  {
    enunciado: "En textos autobiográficos y de no ficción, el 'pacto' con el lector implica:",
    correcta: "Responsabilidad con la veracidad de lo narrado y transparencia de recursos.",
    incorrectas: [
      "Derecho a alterar hechos sin indicarlo.",
      "Prohibición de describir escenas con detalle."
    ]
  },
  {
    enunciado: "Relación histórica entre prensa y ensayo en los siglos XIX y XX.",
    correcta: "La prensa fue plataforma de circulación del ensayo y de nuevos modos de prosa pública.",
    incorrectas: [
      "La prensa impidió la publicación de cualquier ensayo.",
      "El ensayo desapareció al surgir los periódicos."
    ]
  },
  {
    enunciado: "¿Qué describe un 'ensayo-reportaje' híbrido?",
    correcta: "Reflexión personal articulada con trabajo de campo y fuentes verificables.",
    incorrectas: [
      "Versificación lírica de una noticia policial.",
      "Catálogo de citas sin hilo argumental."
    ]
  },
  {
    enunciado: "Uso responsable de IA en escritura periodística y ensayística significa:",
    correcta: "Transparencia sobre el uso, verificación humana y atribución clara de autoría.",
    incorrectas: [
      "Sustituir el proceso de reporte por completo.",
      "Omitir la revisión para publicar más rápido."
    ]
  },
  {
    enunciado: "La 'cadencia' o cierre eficaz en columna o ensayo breve suele:",
    correcta: "Reforzar la tesis o abrir una resonancia final con imagen o giro conceptual.",
    incorrectas: [
      "Añadir datos nuevos que cambian el tema central.",
      "Citar bibliografía técnica sin relación con el texto."
    ]
  },
  {
    enunciado: "Una marca propia de la columna de autor es:",
    correcta: "Voz reconocible, enfoque subjetivo y regularidad de publicación.",
    incorrectas: [
      "Anonimato obligatorio y ausencia de estilo.",
      "Neutralidad estricta sin posicionamiento."
    ]
  },
  {
    enunciado: "Función de los suplementos culturales en el ecosistema mediático.",
    correcta: "Curar conversación literaria y crítica, y servir de espacio para ensayo y reseña.",
    incorrectas: [
      "Sustituir las secciones de actualidad política.",
      "Publicar exclusivamente poesía rimada."
    ]
  },
  {
    enunciado: "¿Qué es el 'scrollytelling' en narrativa digital?",
    correcta: "Relato que integra texto, visualización y multimedia a medida que el lector desplaza la página.",
    incorrectas: [
      "Una técnica para acortar todos los artículos a 200 palabras.",
      "Un sistema de citas en nota al pie."
    ]
  },
  {
    enunciado: "Diferencia entre reseña crítica y nota informativa sobre un libro.",
    correcta: "La reseña valora e interpreta; la nota informa de hechos básicos sin juicio.",
    incorrectas: [
      "Ambas rehúyen cualquier referencia a la obra.",
      "La reseña carece de autor y la nota es siempre firmada."
    ]
  }
];
