// temarios/19-elementos-linguisticos-para-la-expresion-del-tiempo-el-espacio-y-el-modo.js
var PREGUNTAS = [
  {
    enunciado: "Los morfemas verbales del español permiten ubicar los eventos en relación con el momento de la enunciación.",
    correcta: "Verdadero: los tiempos verbales expresan simultaneidad, anterioridad o posterioridad respecto al habla.",
    incorrectas: [
      "Falso: la ubicación temporal depende solo del léxico y no de la flexión verbal.",
      "Falso: el sistema verbal español carece de valores deícticos temporales."
    ]
  },
  {
    enunciado: "El pretérito perfecto compuesto peninsular (‘he cantado’) suele relacionarse con un intervalo temporal aún abierto.",
    correcta: "Correcto: en muchos usos peninsulares, marca vínculo con el presente o periodo no concluido.",
    incorrectas: [
      "Incorrecto: siempre refiere a un pasado remoto desvinculado del presente.",
      "Incorrecto: únicamente se usa como futuro de probabilidad."
    ]
  },
  {
    enunciado: "El futuro simple puede emplearse con valor de conjetura o probabilidad en el presente.",
    correcta: "Sí: en enunciados como ‘Estará en casa’, expresa suposición sobre el ahora.",
    incorrectas: [
      "No: el futuro simple solo denota posterioridad cronológica objetiva.",
      "No: se restringe a órdenes y mandatos, no a conjeturas."
    ]
  },
  {
    enunciado: "Las expresiones ‘antes de’, ‘después de’ y ‘desde’ introducen relaciones temporales de anterioridad y posterioridad.",
    correcta: "Verdadero: son preposiciones y locuciones prepositivas temporales.",
    incorrectas: [
      "Falso: funcionan exclusivamente como conectores causales.",
      "Falso: son marcadores aspectuales sin contenido temporal."
    ]
  },
  {
    enunciado: "Las oraciones introducidas por ‘cuando’, ‘mientras’ o ‘apenas’ se consideran subordinadas temporales.",
    correcta: "Cierto: sitúan el evento principal en una cronología relativa.",
    incorrectas: [
      "Falso: son oraciones impersonales carentes de nexo temporal.",
      "Falso: expresan únicamente modalidad interrogativa."
    ]
  },
  {
    enunciado: "La distinción entre complementos de duración y de frecuencia es relevante para describir el tiempo extensional.",
    correcta: "Correcto: ‘durante dos horas’ expresa duración y ‘cada lunes’ expresa frecuencia.",
    incorrectas: [
      "Incorrecto: ambos se clasifican como lugar por su forma preposicional.",
      "Incorrecto: la gramática del español no distingue duración de frecuencia."
    ]
  },
  {
    enunciado: "Los adverbios ‘ayer’, ‘hoy’ y ‘mañana’ son temporales deícticos porque dependen del momento del habla.",
    correcta: "Verdadero: su referencia cambia según la fecha de enunciación.",
    incorrectas: [
      "Falso: remiten a fechas fijas independientes del contexto.",
      "Falso: son adverbios locativos usados metafóricamente."
    ]
  },
  {
    enunciado: "‘Aquí’, ‘ahí’ y ‘allí’ establecen un sistema de deixis espacial en función de la distancia respecto al hablante.",
    correcta: "Sí: codifican proximidad, distancia media y lejanía en el espacio.",
    incorrectas: [
      "No: son marcadores de modalidad epistémica.",
      "No: equivalen a preposiciones de dirección."
    ]
  },
  {
    enunciado: "Los sintagmas preposicionales ‘debajo de la mesa’ y ‘frente a la escuela’ cumplen función locativa en la oración.",
    correcta: "Cierto: expresan ubicación espacial del evento o del participante.",
    incorrectas: [
      "Falso: son siempre complementos de régimen verbal sin valor espacial.",
      "Falso: su análisis corresponde únicamente a la semántica temporal."
    ]
  },
  {
    enunciado: "Las subordinadas introducidas por ‘donde’, ‘adonde’ y ‘de donde’ especifican lugar de situación, destino o procedencia.",
    correcta: "Verdadero: constituyen oraciones adverbiales de lugar.",
    incorrectas: [
      "Falso: son relativos de tiempo y no expresan espacio.",
      "Falso: su función es modal y no locativa."
    ]
  },
  {
    enunciado: "El espacio deíctico se organiza a partir de la posición de emisor y receptor en la situación comunicativa.",
    correcta: "Correcto: la interpretación de proximidad o lejanía es contextual.",
    incorrectas: [
      "Incorrecto: la deixis espacial es fija y no depende de los participantes.",
      "Incorrecto: la deixis espacial solo existe en textos literarios."
    ]
  },
  {
    enunciado: "Los adverbios ‘bien’, ‘mal’, ‘así’ y los en -mente son típicos modificadores del modo de la acción.",
    correcta: "Sí: expresan manera o calidad de la realización del evento.",
    incorrectas: [
      "No: son exclusivamente intensificadores cuantitativos.",
      "No: forman parte del núcleo nominal del sujeto."
    ]
  },
  {
    enunciado: "Las locuciones ‘a escondidas’, ‘de repente’ o ‘en voz baja’ se usan como complementos circunstanciales de modo.",
    correcta: "Verdadero: funcionan como modificadores modales complejos.",
    incorrectas: [
      "Falso: son conectores argumentativos de conclusión.",
      "Falso: introducen siempre oraciones condicionales."
    ]
  },
  {
    enunciado: "Las subordinadas modales pueden introducirse con ‘como’, ‘según’ o ‘conforme’, aportando el modo de realización del evento.",
    correcta: "Cierto: establecen el ‘cómo’ de la acción principal.",
    incorrectas: [
      "Falso: esas conjunciones solo introducen comparativas.",
      "Falso: se reservan para proposiciones concesivas."
    ]
  },
  {
    enunciado: "Las formas no personales del verbo pueden codificar relaciones modales o temporales en conexión con el contexto.",
    correcta: "Sí: gerundio, participio e infinitivo aportan valores de simultaneidad, anterioridad o modo.",
    incorrectas: [
      "No: carecen por completo de contenido temporal o modal.",
      "No: funcionan únicamente como sustantivos plenos."
    ]
  },
  {
    enunciado: "El sufijo -mente forma adverbios que, en su mayoría, expresan modo a partir de adjetivos.",
    correcta: "Verdadero: derivan adverbios de manera como ‘rápidamente’ o ‘cuidadosamente’.",
    incorrectas: [
      "Falso: -mente produce comparativos y superlativos adjetivales.",
      "Falso: -mente forma únicamente adverbios temporales."
    ]
  },
  {
    enunciado: "La perífrasis ‘soler + infinitivo’ aporta información de habitualidad, relacionada con la frecuencia temporal.",
    correcta: "Correcto: indica repetición característica en un periodo.",
    incorrectas: [
      "Incorrecto: expresa obligación inminente e ineludible.",
      "Incorrecto: es una perífrasis perfectiva de culminación."
    ]
  },
  {
    enunciado: "El llamado ‘futuro de cortesía’ puede atenuar una petición o pregunta (‘¿Querrá pasar?’).",
    correcta: "Sí: el futuro modula la actitud del hablante con valor modal cortés.",
    incorrectas: [
      "No: el futuro no admite usos modales en español.",
      "No: la cortesía se codifica solo con subjuntivo."
    ]
  },
  {
    enunciado: "En ‘desde hace dos años’, la preposición ‘desde’ fija el punto inicial y el complemento ‘hace dos años’ mide el intervalo hasta el presente.",
    correcta: "Verdadero: combina anclaje inicial con duración hasta ahora.",
    incorrectas: [
      "Falso: ‘desde’ indica destino y no inicio temporal.",
      "Falso: ‘hace’ siempre se usa con pasado absoluto cerrado."
    ]
  },
  {
    enunciado: "‘Entre las tres y las cinco’ expresa un lapso temporal delimitado que funciona como complemento circunstancial.",
    correcta: "Cierto: es un sintagma preposicional de tiempo extensional.",
    incorrectas: [
      "Falso: es un complemento de lugar con lectura metafórica.",
      "Falso: se analiza como sujeto partitivo del verbo."
    ]
  },
  {
    enunciado: "‘A la derecha de’, ‘junto a’ y ‘al fondo de’ son esquemas preposicionales locativos frecuentes en descripciones espaciales.",
    correcta: "Verdadero: codifican relaciones topológicas y direccionales.",
    incorrectas: [
      "Falso: son preposiciones temporales equivalentes a ‘antes de’.",
      "Falso: solo se emplean en lenguaje científico-técnico."
    ]
  },
  {
    enunciado: "La expresión del movimiento suele combinar verbo de trayectoria y complemento direccional (‘ir hacia’, ‘subir a’, ‘salir de’).",
    correcta: "Correcto: la preposición especifica destino, origen o ruta.",
    incorrectas: [
      "Incorrecto: los verbos de movimiento no admiten complementos.",
      "Incorrecto: la dirección se expresa exclusivamente con adverbios."
    ]
  },
  {
    enunciado: "Las correlaciones temporales en discurso referido exigen ajustar los tiempos verbales al cambio de centro deíctico.",
    correcta: "Sí: estilo indirecto desplaza las referencias temporales respecto al estilo directo.",
    incorrectas: [
      "No: la correlación temporal es idéntica en directo e indirecto.",
      "No: solo cambia la persona gramatical, no los tiempos."
    ]
  },
  {
    enunciado: "En narración, el orden de los hechos puede alterarse mediante analepsis y prolepsis sin cambiar la cronología del mundo narrado.",
    correcta: "Verdadero: el relato reordena la presentación manteniendo las relaciones lógicas de tiempo interno.",
    incorrectas: [
      "Falso: toda narración debe seguir estrictamente el orden cronológico.",
      "Falso: analepsis y prolepsis son figuras modales, no temporales."
    ]
  },
  {
    enunciado: "‘Como si’ introduce con frecuencia construcciones modales de simulación o irrealidad con subjuntivo.",
    correcta: "Cierto: expresa modo hipotético o contrafactual de la acción.",
    incorrectas: [
      "Falso: ‘como si’ solo presenta causa real y comprobable.",
      "Falso: exige siempre indicativo de presente."
    ]
  },
  {
    enunciado: "El gerundio circunstancial (‘Entró sonriendo’) suele aportar simultaneidad y modo respecto al verbo principal.",
    correcta: "Sí: añade manera y coocurrencia temporal con el evento principal.",
    incorrectas: [
      "No: aporta necesariamente anterioridad perfecta.",
      "No: funciona como sujeto oracional en toda circunstancia."
    ]
  },
  {
    enunciado: "‘Al + infinitivo’ (‘Al llegar…’) introduce valor temporal de inmediatez y puede matizar el modo de inicio del evento principal.",
    correcta: "Verdadero: es construcción no personal con valor temporal-modalespecífico.",
    incorrectas: [
      "Falso: solo indica finalidad y nunca tiempo.",
      "Falso: es una perífrasis de obligación equivalente a ‘tener que’."
    ]
  },
  {
    enunciado: "Los adverbios de modo pueden admitirse como foco en estructuras intensificadas (‘muy cuidadosamente’).",
    correcta: "Correcto: permiten graduación del modo con cuantificadores de grado.",
    incorrectas: [
      "Incorrecto: los adverbios de modo no se gradúan en español.",
      "Incorrecto: el intensificador ‘muy’ es exclusivo de adjetivos."
    ]
  },
  {
    enunciado: "La diferencia entre ‘donde’ relativo y ‘donde’ interrogativo depende de su función oracional y del contexto.",
    correcta: "Sí: el relativo introduce subordinadas; el interrogativo encabeza interrogativas directas o indirectas.",
    incorrectas: [
      "No: ambos son siempre relativos locativos.",
      "No: ambos son siempre interrogativos exclamativos."
    ]
  },
  {
    enunciado: "‘Ya’, ‘todavía’ y ‘aún’ son adverbios que combinan valor temporal con matices aspectuales de completitud o persistencia.",
    correcta: "Verdadero: relacionan el evento con su culminación o continuidad respecto al presente.",
    incorrectas: [
      "Falso: carecen de cualquier matiz aspectual.",
      "Falso: son exclusivamente adverbios de modo."
    ]
  },
  {
    enunciado: "La oposición ‘estar’ vs. ‘ser’ en descripciones espaciales puede activar lecturas diferentes (‘está en Madrid’ ubicación; ‘es de Madrid’ origen).",
    correcta: "Correcto: la selección verbal incide en el tipo de relación espacial codificada.",
    incorrectas: [
      "Incorrecto: ambos verbos son intercambiables sin cambio de significado.",
      "Incorrecto: ninguno de los dos participa en lecturas espaciales."
    ]
  },
  {
    enunciado: "Las perífrasis ‘ir a + infinitivo’ y ‘estar por + infinitivo’ pueden codificar inminencia con matiz modal de intención o expectativa.",
    correcta: "Sí: ambas expresan cercanía del evento con valores modales distintos.",
    incorrectas: [
      "No: se limitan a expresar pasado perfecto.",
      "No: son perífrasis de obligación estricta."
    ]
  },
  {
    enunciado: "En ‘Lo hizo como quería’, la subordinada ‘como quería’ expresa el modo conforme a un patrón o intención previa.",
    correcta: "Verdadero: especifica la manera de realización de la acción.",
    incorrectas: [
      "Falso: expresa causa necesaria del evento principal.",
      "Falso: es una subordinada comparativa de cantidad."
    ]
  },
  {
    enunciado: "‘En aquel entonces’ y ‘por aquellos días’ son grupos nominales temporales anafóricos que dependen del contexto textual previo.",
    correcta: "Correcto: retoman un tiempo ya introducido en el discurso.",
    incorrectas: [
      "Incorrecto: son deícticos absolutos independientes del texto.",
      "Incorrecto: funcionan exclusivamente como marcadores espaciales."
    ]
  },
  {
    enunciado: "Las preposiciones ‘hacia’, ‘hasta’ y ‘desde’ pueden combinarse con nombres y topónimos para codificar trayectorias espaciales.",
    correcta: "Sí: introducen dirección, límite y origen del desplazamiento.",
    incorrectas: [
      "No: solo se usan con pronombres personales tónicos.",
      "No: son preposiciones temporales y no espaciales."
    ]
  },
  {
    enunciado: "Las exclamativas con adverbios (‘¡Qué bien canta!’, ‘¡Cómo corre!’) intensifican el modo o la cualidad de la acción.",
    correcta: "Verdadero: aportan foco expresivo sobre la manera de ejecución.",
    incorrectas: [
      "Falso: son interrogativas indirectas sin valor modal.",
      "Falso: expresan únicamente cantidad numérica."
    ]
  },
  {
    enunciado: "En instrucciones y recetas, los adverbios de modo y los complementos instrumentales (‘con cuidado’, ‘a fuego lento’) guían la forma de ejecución.",
    correcta: "Cierto: codifican el ‘cómo’ procedimental del proceso.",
    incorrectas: [
      "Falso: solo aportan información estética irrelevante.",
      "Falso: equivalen a marcadores adversativos del discurso."
    ]
  },
  {
    enunciado: "El orden de los constituyentes puede contribuir a la focalización de tiempo, espacio o modo en la oración.",
    correcta: "Verdadero: posiciones periféricas o iniciales pueden resaltar circunstantes (‘Ayer, fuimos al museo’).",
    incorrectas: [
      "Falso: el orden no tiene efectos informativos en español.",
      "Falso: solo el acento léxico determina el foco."
    ]
  },
  {
    enunciado: "En ‘No vendrá hasta mañana’, ‘hasta’ fija un límite temporal a partir del cual se espera la realización del evento.",
    correcta: "Correcto: marca el inicio del intervalo de posibilidad futura.",
    incorrectas: [
      "Incorrecto: ‘hasta’ siempre indica lugar, no tiempo.",
      "Incorrecto: ‘hasta’ es un intensificador modal de obligación."
    ]
  },
  {
    enunciado: "Los marcadores ‘entonces’, ‘luego’ y ‘después’ cohesionan el discurso al encadenar la progresión temporal entre enunciados.",
    correcta: "Sí: funcionan como conectores temporales en la macroestructura textual.",
    incorrectas: [
      "No: son exclusivamente adverbios de modo oracional.",
      "No: su uso se limita a fórmulas de cortesía."
    ]
  },
  {
    enunciado: "En descripciones geográficas, las relaciones espaciales pueden jerarquizarse con ejes cardinales y relativos (‘al norte de’, ‘al lado de’).",
    correcta: "Verdadero: combinan orientación absoluta y relativa para situar entidades.",
    incorrectas: [
      "Falso: el español carece de expresiones para orientación cardinal.",
      "Falso: estas expresiones se reservan a la astronomía."
    ]
  }
];
