// temarios/05-los-medios-de-comunicacion-hoy-informacion-opinion-y-persuasion-la-publicidad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué diferencia básica separa información de opinión en los medios?",
    correcta: "La información busca describir hechos verificables; la opinión interpreta y valora esos hechos.",
    incorrectas: [
      "La información se publica solo en redes sociales y la opinión solo en prensa.",
      "La información siempre es anónima y la opinión nunca se firma."
    ]
  },
  {
    enunciado: "¿Cuál es el género informativo prototípico por su estructura piramidal y enfoque factual?",
    correcta: "La noticia.",
    incorrectas: [
      "La columna.",
      "La crítica."
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue al reportaje frente a la noticia?",
    correcta: "Profundiza con contexto, fuentes diversas y narración más elaborada.",
    incorrectas: [
      "Evita toda fuente y se limita a un tuit.",
      "Se publica sin imágenes ni testimonios nunca."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la crónica?",
    correcta: "Relata hechos con presencia del narrador y orden temporal, mezclando información y estilo.",
    incorrectas: [
      "Es un editorial institucional sin firma.",
      "Es un anuncio publicitario encubierto."
    ]
  },
  {
    enunciado: "¿Qué define al editorial?",
    correcta: "Es la posición oficial del medio sobre un asunto, sin firma personal.",
    incorrectas: [
      "Es una entrevista a una personalidad sin edición.",
      "Es un publirreportaje pagado por una marca."
    ]
  },
  {
    enunciado: "¿Qué es una columna?",
    correcta: "Un texto de opinión firmado que interpreta la actualidad desde una voz autoral.",
    incorrectas: [
      "Un comunicado de prensa de una institución.",
      "Una crónica deportiva sin autor."
    ]
  },
  {
    enunciado: "¿Qué distingue a la entrevista informativa de la de opinión?",
    correcta: "La informativa prioriza el dato y la actualidad; la de opinión explora criterios y valoraciones del entrevistado.",
    incorrectas: [
      "La informativa es siempre por correo y la de opinión siempre presencial.",
      "La informativa no admite repreguntas."
    ]
  },
  {
    enunciado: "¿Qué postula la teoría del agenda-setting?",
    correcta: "Los medios influyen en qué temas considera importantes el público.",
    incorrectas: [
      "Los medios determinan exactamente qué piensa cada persona.",
      "Los medios solo reflejan agendas políticas sin intervenir."
    ]
  },
  {
    enunciado: "¿Qué es el framing (encuadre) en comunicación?",
    correcta: "Seleccionar y destacar ciertos aspectos de un asunto para darle un sentido interpretativo.",
    incorrectas: [
      "Ordenar legalmente los programas en la parrilla televisiva.",
      "Medir el tiempo de emisión de un informativo."
    ]
  },
  {
    enunciado: "¿Qué es el priming en efectos mediáticos?",
    correcta: "La activación de criterios con los que el público evalúa después a líderes o asuntos.",
    incorrectas: [
      "La verificación técnica del audio antes de una emisión.",
      "El pago previo de espacios publicitarios."
    ]
  },
  {
    enunciado: "¿Qué plantea el 'flujo en dos pasos' de Katz y Lazarsfeld?",
    correcta: "La influencia se difunde a través de líderes de opinión que median entre medios y audiencia.",
    incorrectas: [
      "Toda persuasión ocurre solo por mensajes masivos sin mediaciones.",
      "La influencia se limita a la familia y no a los medios."
    ]
  },
  {
    enunciado: "¿Cuál es la idea central de la teoría del cultivo de Gerbner?",
    correcta: "La exposición prolongada a ciertos contenidos moldea percepciones sociales a largo plazo.",
    incorrectas: [
      "Los espectadores olvidan todo lo visto en menos de un día.",
      "La TV solo influye en el vocabulario, no en creencias."
    ]
  },
  {
    enunciado: "Según el modelo ELM (Petty y Cacioppo), la ruta central de persuasión se activa cuando...",
    correcta: "La audiencia está motivada y capaz de procesar argumentos de calidad.",
    incorrectas: [
      "La audiencia rechaza toda evidencia y decide por azar.",
      "El mensaje evita argumentos y solo usa música."
    ]
  },
  {
    enunciado: "¿Qué ejemplo ilustra la ruta periférica del ELM?",
    correcta: "Convencer por atractivo del portavoz o música pegadiza sin analizar argumentos.",
    incorrectas: [
      "Analizar datos comparativos y metodologías del estudio citado.",
      "Debatir sobre validez interna y externa de una investigación."
    ]
  },
  {
    enunciado: "¿Cuál NO es un principio de influencia de Cialdini?",
    correcta: "Neutralidad métrica.",
    incorrectas: [
      "Escasez.",
      "Prueba social."
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial hay entre publicidad y propaganda?",
    correcta: "La publicidad busca fines comerciales; la propaganda persigue adhesión ideológica o política.",
    incorrectas: [
      "La publicidad siempre es anónima y la propaganda siempre firmada.",
      "La publicidad solo usa texto y la propaganda solo imágenes."
    ]
  },
  {
    enunciado: "En el embudo AIDA, ¿qué etapa corresponde a 'A' final?",
    correcta: "Acción (llamada a comprar, suscribirse, registrarse).",
    incorrectas: [
      "Atención.",
      "Afecto."
    ]
  },
  {
    enunciado: "¿Qué elementos suelen integrar la pieza publicitaria clásica impresa?",
    correcta: "Titular, cuerpo de texto, imagen/visual y eslogan o llamada a la acción.",
    incorrectas: [
      "Índice onomástico y bibliografía.",
      "Solo un logotipo sin texto alguno."
    ]
  },
  {
    enunciado: "En análisis semiótico, ¿qué diferencia hay entre denotación y connotación?",
    correcta: "La denotación describe literalmente; la connotación aporta sentidos asociados y valores.",
    incorrectas: [
      "La denotación es subjetiva y la connotación objetiva.",
      "La denotación solo existe en TV y la connotación en radio."
    ]
  },
  {
    enunciado: "¿Qué función de Jakobson se activa especialmente en la publicidad?",
    correcta: "La apelativa, orientada al receptor para inducir una respuesta.",
    incorrectas: [
      "La metalingüística como corrección ortográfica del anuncio.",
      "La referencial exclusiva al dato científico."
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo típico del lenguaje publicitario eficaz?",
    correcta: "Uso de recursos retóricos como metáfora, hipérbole y eslóganes memorables.",
    incorrectas: [
      "Evitar toda figura retórica por confundir a la audiencia.",
      "Employar oraciones interminables con tecnicismos sin foco."
    ]
  },
  {
    enunciado: "¿Qué ventaja competitiva ofrece la radio como soporte publicitario?",
    correcta: "Alta segmentación por franjas y costes relativamente bajos.",
    incorrectas: [
      "Máxima definición visual del producto.",
      "Imposibilidad de patrocinar programas."
    ]
  },
  {
    enunciado: "¿Qué rasgo diferencia al medio exterior/DOOH (digital out-of-home)?",
    correcta: "Cobertura y visibilidad en espacios públicos con formatos de alto impacto.",
    incorrectas: [
      "Capacidad nula de segmentación geográfica.",
      "Prohibición de usar animaciones o vídeo."
    ]
  },
  {
    enunciado: "¿Qué es la compra programática en publicidad digital?",
    correcta: "La automatización de compra/venta de inventario publicitario mediante pujas en tiempo real.",
    incorrectas: [
      "La prohibición de subastas en internet.",
      "La contratación exclusiva por teléfono con un comercial."
    ]
  },
  {
    enunciado: "¿Qué mide el CTR en una campaña digital?",
    correcta: "El porcentaje de clics sobre el total de impresiones.",
    incorrectas: [
      "El coste total de la campaña.",
      "La duración media del spot en segundos."
    ]
  },
  {
    enunciado: "¿Qué describe el CPM?",
    correcta: "El coste por mil impresiones.",
    incorrectas: [
      "El coste por minuto de emisión.",
      "El coste por mensaje privado."
    ]
  },
  {
    enunciado: "¿Qué evalúa la métrica 'brand lift'?",
    correcta: "El incremento en recuerdo, consideración o preferencia atribuible a la campaña.",
    incorrectas: [
      "El número de fallos ortográficos en un anuncio.",
      "La duración exacta del anuncio en fotogramas."
    ]
  },
  {
    enunciado: "¿Qué es la publicidad nativa (native)?",
    correcta: "Contenido de marca integrado en el entorno editorial con identificación clara como publicitario.",
    incorrectas: [
      "Cualquier contenido sin marca ni etiquetado.",
      "Anuncios solo en TV tradicionales."
    ]
  },
  {
    enunciado: "En contenidos de influencers, ¿qué exige la buena práctica identificativa?",
    correcta: "Etiquetas visibles como #publi o #ad y claridad sobre la relación comercial.",
    incorrectas: [
      "Ocultar la mención para no afectar al engagement.",
      "Usar solo emojis sin texto identificativo."
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre desinformación y malinformación?",
    correcta: "La desinformación es falsa y busca engañar; la malinformación usa datos reales fuera de contexto para dañar.",
    incorrectas: [
      "Ambas son siempre verdaderas.",
      "La malinformación solo ocurre en prensa impresa."
    ]
  },
  {
    enunciado: "¿Qué práctica básica forma parte del fact-checking?",
    correcta: "Rastrear la fuente original, contrastar con bases fiables y contextualizar citas e imágenes.",
    incorrectas: [
      "Asumir que si está viralizado es cierto.",
      "Evitar contactar con expertos para no sesgar."
    ]
  },
  {
    enunciado: "En el marco europeo, ¿qué objetivo central persigue el DSA para la publicidad en plataformas muy grandes?",
    correcta: "Aumentar transparencia y evaluar riesgos sistémicos asociados a la difusión de contenidos y anuncios.",
    incorrectas: [
      "Eliminar toda publicidad en internet.",
      "Obligar a que todos los anuncios sean anónimos."
    ]
  },
  {
    enunciado: "Según el RGPD, ¿qué base jurídica suele requerir la publicidad comportamental basada en seguimiento?",
    correcta: "El consentimiento informado, libre, específico y verificable del usuario.",
    incorrectas: [
      "El interés económico del anunciante basta siempre.",
      "No necesita base jurídica si el anuncio es útil."
    ]
  },
  {
    enunciado: "¿Qué principio recoge la Ley General de Comunicación Audiovisual respecto a menores?",
    correcta: "Protección específica frente a contenidos y comunicaciones comerciales perjudiciales.",
    incorrectas: [
      "Emisión ilimitada de publicidad de juego en horario infantil.",
      "Ausencia de obligaciones de clasificación por edades."
    ]
  },
  {
    enunciado: "¿Qué exige la normativa reciente sobre publicidad política en la UE?",
    correcta: "Más transparencia, etiquetado y archivos de anuncios accesibles para supervisión.",
    incorrectas: [
      "Prohibición total de mensajes políticos en periodo electoral.",
      "Permitir anuncios políticos anónimos sin rastro."
    ]
  },
  {
    enunciado: "¿Qué es el 'greenwashing' en comunicación comercial?",
    correcta: "Presentar como sostenible una actividad o producto sin respaldo real suficiente.",
    incorrectas: [
      "Reconocer impactos ambientales con datos auditados.",
      "Compensar emisiones mediante proyectos certificados."
    ]
  },
  {
    enunciado: "¿Cuál es una ventaja de los pódcast como soporte de marca?",
    correcta: "Audiencias fieles y atención sostenida en nichos temáticos.",
    incorrectas: [
      "Imposibilidad de segmentación temática.",
      "Prohibición de patrocinios por formato."
    ]
  },
  {
    enunciado: "¿Qué práctica didáctica favorece distinguir información y opinión en el aula?",
    correcta: "Comparar noticia y editorial sobre el mismo tema con rúbrica de evidencias.",
    incorrectas: [
      "Pedir solo titulares sin lectura del cuerpo.",
      "Calificar por número de 'me gusta' del artículo."
    ]
  },
  {
    enunciado: "¿Qué indicador ayuda a evaluar la visibilidad técnica de un anuncio display?",
    correcta: "La viewability (porcentaje de impresiones realmente visibles).",
    incorrectas: [
      "El número de comentarios en la noticia del día.",
      "El tamaño del logotipo del medio."
    ]
  },
  {
    enunciado: "¿Qué recurso retórico busca memorabilidad y asociación de marca en publicidad?",
    correcta: "El eslogan breve y repetible.",
    incorrectas: [
      "La cita bibliográfica completa.",
      "El pie de foto técnico del fotógrafo."
    ]
  }
];
