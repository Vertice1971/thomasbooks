// temarios/30-el-texto-argumentativo-estructura-y-tecnicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el propósito central de un texto argumentativo?",
    correcta: "Sostener una tesis y persuadir con razones y evidencias pertinentes.",
    incorrectas: [
      "Describir rasgos sin tomar postura alguna.",
      "Narrar acontecimientos con fines exclusivamente estéticos."
    ]
  },
  {
    enunciado: "¿Qué lo distingue prototípicamente de un texto expositivo?",
    correcta: "La toma explícita de postura y la justificación orientada a convencer.",
    incorrectas: [
      "El uso exclusivo de primera persona del singular.",
      "La prohibición de presentar datos verificables."
    ]
  },
  {
    enunciado: "En retórica aristotélica, ¿qué combinación es correcta?",
    correcta: "Ethos (credibilidad), logos (razón), pathos (afecto).",
    incorrectas: [
      "Ethos (afecto), logos (autoridad), pathos (veracidad).",
      "Ethos (estilo), logos (ritmo), pathos (métrica)."
    ]
  },
  {
    enunciado: "En el modelo de Toulmin, ¿qué componente enlaza datos y tesis como regla inferencial?",
    correcta: "La garantía (warrant).",
    incorrectas: [
      "El respaldo (backing).",
      "El modalizador (qualifier)."
    ]
  },
  {
    enunciado: "En el modelo de Toulmin, el ‘respaldo’ (backing) sirve para:",
    correcta: "Aportar apoyo teórico o empírico a la garantía utilizada.",
    incorrectas: [
      "Reformular la tesis en términos más contundentes.",
      "Introducir objeciones ajenas sin respuesta."
    ]
  },
  {
    enunciado: "¿Qué función cumple el ‘modalizador’ (qualifier) en Toulmin?",
    correcta: "Indicar la fuerza o alcance de la conclusión (p. ej., “probablemente”).",
    incorrectas: [
      "Presentar el contraargumento definitivo del adversario.",
      "Sustituir los datos por opiniones personales."
    ]
  },
  {
    enunciado: "En un texto persuasivo, ¿qué es la refutación?",
    correcta: "La respuesta razonada a objeciones o posturas contrarias.",
    incorrectas: [
      "Una digresión descriptiva sin relación con la tesis.",
      "La simple negación enfática sin pruebas."
    ]
  },
  {
    enunciado: "¿Qué es la concesión en argumentación?",
    correcta: "Reconocer parcialmente un punto del adversario para luego reencauzar la tesis propia.",
    incorrectas: [
      "Ceder por completo y abandonar la tesis defendida.",
      "Evitar mencionar objeciones para no debilitarlas."
    ]
  },
  {
    enunciado: "Para que un argumento por analogía sea sólido debe:",
    correcta: "Basarse en similitudes relevantes y atender a diferencias críticas.",
    incorrectas: [
      "Apoyarse en semejanzas superficiales y emotivas.",
      "Asumir que dos casos son idénticos por compartir un rasgo menor."
    ]
  },
  {
    enunciado: "Detecta el error lógico: generalizar a partir de un caso aislado.",
    correcta: "Generalización apresurada.",
    incorrectas: [
      "Falso dilema.",
      "Apelación a la autoridad."
    ]
  },
  {
    enunciado: "Identifica la falacia: desacreditar la tesis atacando a la persona que la defiende.",
    correcta: "Ad hominem.",
    incorrectas: [
      "Ad populum.",
      "Non sequitur."
    ]
  },
  {
    enunciado: "Plantear dos opciones como únicas cuando hay más alternativas es un:",
    correcta: "Falso dilema.",
    incorrectas: [
      "Argumento por analogía.",
      "Apelación a la misericordia."
    ]
  },
  {
    enunciado: "Sugerir que un primer paso inevitablemente conduce a desenlaces extremos es la falacia de:",
    correcta: "Pendiente resbaladiza.",
    incorrectas: [
      "Composición.",
      "Equívoco."
    ]
  },
  {
    enunciado: "Apelar a lo que “la mayoría cree” como prueba suficiente es:",
    correcta: "Ad populum.",
    incorrectas: [
      "Ad verecundiam (autoridad).",
      "Ad baculum (amenaza)."
    ]
  },
  {
    enunciado: "Confundir correlación con causalidad conduce a:",
    correcta: "Atribuir una relación causal sin evidencia suficiente del mecanismo.",
    incorrectas: [
      "Negar toda relación posible entre variables.",
      "Reducir la muestra para mejorar la precisión."
    ]
  },
  {
    enunciado: "Una organización deductiva se caracteriza por:",
    correcta: "Presentar la tesis al inicio y desarrollarla con razones y pruebas.",
    incorrectas: [
      "Reservar la tesis para el último párrafo siempre.",
      "Evitar el uso de datos en favor de anécdotas."
    ]
  },
  {
    enunciado: "Una organización inductiva se caracteriza por:",
    correcta: "Exponer razones y evidencias para culminar en la tesis final.",
    incorrectas: [
      "Alternar tesis contradictorias sin cierre.",
      "Repetir la tesis sin justificación empírica."
    ]
  },
  {
    enunciado: "La estructura ‘encuadrada’ se reconoce porque:",
    correcta: "Formula la tesis, aporta razones y la reafirma al cierre.",
    incorrectas: [
      "Suprime la tesis para mantener ambigüedad deliberada.",
      "Presenta solo objeciones y ninguna conclusión."
    ]
  },
  {
    enunciado: "El patrón ‘problema–solución–evaluación’ exige:",
    correcta: "Definir el problema, proponer soluciones y valorar su idoneidad con criterios explícitos.",
    incorrectas: [
      "Evitar criterios para no condicionar la lectura.",
      "Sustituir la solución por anécdotas emotivas."
    ]
  },
  {
    enunciado: "¿Qué es el ‘steel-manning’?",
    correcta: "Presentar la postura contraria en su versión más fuerte antes de refutarla.",
    incorrectas: [
      "Caricaturizar la postura contraria para facilitar su rechazo.",
      "Ignorar las objeciones para no darles visibilidad."
    ]
  },
  {
    enunciado: "El ‘hedging’ o atenuación responsable consiste en:",
    correcta: "Expresar el grado de certeza con marcas como “probablemente” cuando la evidencia es limitada.",
    incorrectas: [
      "Evitar cualquier compromiso con los datos.",
      "Reemplazar la evidencia por opiniones rotundas."
    ]
  },
  {
    enunciado: "Un ‘booster’ (reforzador) se usa adecuadamente cuando:",
    correcta: "Existe consenso sólido o evidencia robusta que avala la afirmación.",
    incorrectas: [
      "Se desea ocultar la falta de fuentes.",
      "Se pretende aumentar la emotividad sin datos."
    ]
  },
  {
    enunciado: "“Ahora bien,” funciona típicamente como marcador de:",
    correcta: "Giro contraargumentativo o matización de lo anterior.",
    incorrectas: [
      "Enumeración aditiva sin contraste.",
      "Causa estrictamente lógica."
    ]
  },
  {
    enunciado: "Un cierre eficaz de un texto argumentativo debe:",
    correcta: "Sintetizar razones y proyectar implicaciones o recomendaciones coherentes.",
    incorrectas: [
      "Introducir un tema nuevo no tratado.",
      "Culminar con una anécdota sin relación."
    ]
  },
  {
    enunciado: "Un párrafo argumentativo eficaz suele incluir:",
    correcta: "Enunciado rector, desarrollo con evidencia y microcierre conclusivo.",
    incorrectas: [
      "Listas de citas sin explicación.",
      "Metáforas extensas sin datos."
    ]
  },
  {
    enunciado: "En pragma-dialéctica, vulnerar las reglas de la discusión crítica conduce a:",
    correcta: "Falacias que obstaculizan la resolución razonable del desacuerdo.",
    incorrectas: [
      "Mejoras automáticas de claridad.",
      "Un aumento de la validez deductiva."
    ]
  },
  {
    enunciado: "Las ‘preguntas críticas’ de Walton sirven para:",
    correcta: "Evaluar la solidez de un esquema argumental (autoridad, analogía, causa, etc.).",
    incorrectas: [
      "Sustituir los datos empíricos por opiniones.",
      "Determinar la métrica y la rima del texto."
    ]
  },
  {
    enunciado: "Para valorar un argumento de autoridad, conviene verificar:",
    correcta: "Competencia, independencia, evidencia citada y grado de consenso.",
    incorrectas: [
      "Popularidad del autor en redes sociales.",
      "Número de páginas del libro citado."
    ]
  },
  {
    enunciado: "Sobre el soporte visual de argumentos (tablas, gráficos), es correcto afirmar que:",
    correcta: "Deben llevar título claro, fuente y guía de lectura que conecte con la tesis.",
    incorrectas: [
      "Basta con incluir imágenes sin etiquetar.",
      "Deben sustituir todo razonamiento verbal."
    ]
  },
  {
    enunciado: "Clasifica correctamente: “por tanto”, “sin embargo”.",
    correcta: "‘Por tanto’ es consecutivo; ‘sin embargo’ es contraargumentativo.",
    incorrectas: [
      "Ambos son marcadores de ejemplificación.",
      "Ambos son marcadores de apertura de tema."
    ]
  },
  {
    enunciado: "¿Qué género NO sigue la estructura IMRaD de modo prototípico?",
    correcta: "La columna de opinión periodística.",
    incorrectas: [
      "El artículo científico especializado.",
      "Algunos informes de investigación."
    ]
  },
  {
    enunciado: "Una tesis operativa debe ser:",
    correcta: "Clara, acotada y susceptible de ser defendida con pruebas pertinentes.",
    incorrectas: [
      "Ambigua, maximalista e inmune a la refutación.",
      "Una definición de diccionario sin enfoque."
    ]
  },
  {
    enunciado: "En argumentos definicionales, es buena práctica:",
    correcta: "Precisar el sentido de los términos para evitar equívocos y circularidades.",
    incorrectas: [
      "Usar el término a definir dentro de la propia definición.",
      "Cambiar de definición según convenga al cierre."
    ]
  },
  {
    enunciado: "En RST, la relación ‘concesión’ (concession) se usa para:",
    correcta: "Reconocer un punto contrario sin abandonar la conclusión principal.",
    incorrectas: [
      "Introducir un ejemplo no relacionado.",
      "Cerrar el texto con un nuevo tema."
    ]
  },
  {
    enunciado: "La cohesión en textos persuasivos se apoya en:",
    correcta: "Conectores adecuados, cadenas léxicas y referencias claras a premisas y datos.",
    incorrectas: [
      "Saltos temáticos no marcados.",
      "Acumulación de sinónimos sin control."
    ]
  },
  {
    enunciado: "Un criterio ético básico en argumentación académica es:",
    correcta: "Trazabilidad de datos y citas precisas de las fuentes utilizadas.",
    incorrectas: [
      "Ocultar limitaciones metodológicas para no debilitar la tesis.",
      "Preferir testimonios anónimos a estudios revisados."
    ]
  },
  {
    enunciado: "¿Para qué sirven los mapas argumentales en la revisión?",
    correcta: "Para visualizar tesis, razones, evidencias y objeciones y detectar lagunas.",
    incorrectas: [
      "Para reemplazar la escritura completa del texto.",
      "Para decidir la tipografía del documento."
    ]
  },
  {
    enunciado: "El uso de contraejemplos en un texto argumentativo permite:",
    correcta: "Poner a prueba la generalidad de una afirmación y afinar su alcance.",
    incorrectas: [
      "Evitar la revisión de la tesis aunque falle.",
      "Demostrar cualquier tesis por contraste emotivo."
    ]
  },
  {
    enunciado: "Cambiar el sentido de un término dentro del mismo argumento incurre en la falacia de:",
    correcta: "Equívoco.",
    incorrectas: [
      "Apelación a la novedad.",
      "Falsa causa."
    ]
  }
];
