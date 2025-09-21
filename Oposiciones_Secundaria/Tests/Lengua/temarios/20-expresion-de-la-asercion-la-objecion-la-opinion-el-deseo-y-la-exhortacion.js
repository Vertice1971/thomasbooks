// temarios/20-expresion-de-la-asercion-la-objecion-la-opinion-el-deseo-y-la-exhortacion.js
var PREGUNTAS = [
  {
    enunciado: "Una aserción compromete al hablante con la verdad del enunciado que profiere.",
    correcta: "Verdadero: implica asumir responsabilidad epistémica sobre lo afirmado.",
    incorrectas: [
      "Falso: la aserción es un acto expresivo sin contenido proposicional.",
      "Falso: la aserción suspende todo compromiso con la verdad."
    ]
  },
  {
    enunciado: "Las oraciones enunciativas negativas con 'no', 'nunca', 'jamás' siguen siendo aserciones.",
    correcta: "Correcto: se afirma la verdad de un contenido con polaridad negativa.",
    incorrectas: [
      "Incorrecto: toda negación anula el compromiso asertivo.",
      "Incorrecto: las negativas son siempre interrogativas encubiertas."
    ]
  },
  {
    enunciado: "Marcadores como 'sin duda', 'es evidente que' refuerzan el grado de certeza del hablante.",
    correcta: "Sí: intensifican el compromiso asertivo y la fuerza ilocutiva.",
    incorrectas: [
      "No: atenúan la certeza y expresan duda.",
      "No: funcionan únicamente como conectores causales."
    ]
  },
  {
    enunciado: "Las objeciones totales suelen introducirse con 'pero', 'sin embargo', 'no obstante'.",
    correcta: "Cierto: marcan contraste fuerte con lo dicho previamente.",
    incorrectas: [
      "Falso: son marcadores de adición sin oposición.",
      "Falso: su uso restringe la oración a valores temporales."
    ]
  },
  {
    enunciado: "Una objeción parcial modula o matiza una afirmación previa sin negarla por completo.",
    correcta: "Verdadero: restringe el alcance del enunciado anterior.",
    incorrectas: [
      "Falso: toda objeción invalida totalmente lo anterior.",
      "Falso: la objeción parcial es un sinónimo de concesión temporal."
    ]
  },
  {
    enunciado: "Las concesivas con 'aunque' permiten afirmar A reconociendo simultáneamente B.",
    correcta: "Correcto: integran un contenido que podría obstaculizar la conclusión.",
    incorrectas: [
      "Incorrecto: 'aunque' introduce siempre causa necesaria.",
      "Incorrecto: 'aunque' nunca puede combinarse con indicativo."
    ]
  },
  {
    enunciado: "Expresiones como 'opino que', 'creo que', 'a mi juicio' presentan un punto de vista subjetivo.",
    correcta: "Sí: introducen enunciados de opinión del hablante.",
    incorrectas: [
      "No: introducen definiciones léxicas objetivas.",
      "No: se usan exclusivamente para citar autoridad ajena."
    ]
  },
  {
    enunciado: "La combinación 'me parece que + indicativo' suele expresar opinión moderada.",
    correcta: "Verdadero: sitúa el contenido como valoración personal no categórica.",
    incorrectas: [
      "Falso: es una orden directa de alta obligación.",
      "Falso: equivale semánticamente a una negación rotunda."
    ]
  },
  {
    enunciado: "Los adverbios 'quizá', 'tal vez', 'probablemente' atenúan el grado de certeza.",
    correcta: "Correcto: marcan modalidad epistémica de duda o probabilidad.",
    incorrectas: [
      "Incorrecto: intensifican la certeza absoluta del hablante.",
      "Incorrecto: se limitan a valores espaciales deícticos."
    ]
  },
  {
    enunciado: "Las fórmulas desiderativas 'ojalá' y 'así' seleccionan normalmente subjuntivo.",
    correcta: "Cierto: expresan deseo con modalidad no factual.",
    incorrectas: [
      "Falso: exigen imperativo de segunda persona.",
      "Falso: requieren siempre indicativo de presente."
    ]
  },
  {
    enunciado: "En 'Quisiera comentar algo', el condicional cortesía atenúa el acto de habla.",
    correcta: "Verdadero: reduce la imposición y suaviza la petición o deseo.",
    incorrectas: [
      "Falso: el condicional incrementa la fuerza imperativa.",
      "Falso: no tiene efecto pragmático, solo temporal."
    ]
  },
  {
    enunciado: "Expresiones como 'me encantaría que vinieras' codifican deseo dirigido a otra persona.",
    correcta: "Sí: combinan valoración afectiva y subjuntivo prospectivo.",
    incorrectas: [
      "No: son objeciones que niegan la venida.",
      "No: equivalen a 'te prohíbo venir'."
    ]
  },
  {
    enunciado: "La exhortación busca provocar una acción en el destinatario.",
    correcta: "Correcto: puede manifestarse como orden, sugerencia o ruego.",
    incorrectas: [
      "Incorrecto: describe estados sin intención perlocutiva.",
      "Incorrecto: es un acto de definición metalingüística."
    ]
  },
  {
    enunciado: "El imperativo es un medio prototípico para la exhortación: 'Ven', 'Escucha'.",
    correcta: "Verdadero: expresa mandato directo al destinatario.",
    incorrectas: [
      "Falso: el imperativo expresa únicamente deseo propio.",
      "Falso: el imperativo carece de sujeto lógico."
    ]
  },
  {
    enunciado: "La construcción 'Que + subjuntivo' funciona como exhortación: '¡Que nadie se mueva!'.",
    correcta: "Sí: realiza mandato indirecto con valor colectivo o impersonal.",
    incorrectas: [
      "No: únicamente introduce subordinadas finales.",
      "No: solo aporta énfasis exclamativo sin mandato."
    ]
  },
  {
    enunciado: "Formas como 'vamos a + infinitivo' pueden usarse para exhortación inclusiva.",
    correcta: "Cierto: 'Vamos a empezar' invita a una acción conjunta.",
    incorrectas: [
      "Falso: es siempre futuro perifrástico neutro.",
      "Falso: expresa exclusivamente una hipótesis remota."
    ]
  },
  {
    enunciado: "Las recomendaciones y sugerencias modulan la exhortación con menor grado de imposición.",
    correcta: "Verdadero: 'Deberías', 'Conviene que' atenúan la fuerza directiva.",
    incorrectas: [
      "Falso: una sugerencia implica obligatoriedad absoluta.",
      "Falso: recomendaciones y órdenes son equivalentes."
    ]
  },
  {
    enunciado: "La entonación descendente y el modo indicativo suelen asociarse a aserciones plenas.",
    correcta: "Correcto: apoyan la lectura de certeza informativa.",
    incorrectas: [
      "Incorrecto: la aserción exige entonación interrogativa.",
      "Incorrecto: la aserción requiere siempre subjuntivo."
    ]
  },
  {
    enunciado: "Las negativas de polaridad ('No', 'En absoluto', 'De ninguna manera') sirven para objeción frontal.",
    correcta: "Sí: niegan explícitamente una proposición previa.",
    incorrectas: [
      "No: introducen ejemplos explicativos.",
      "No: son marcadores de conclusión."
    ]
  },
  {
    enunciado: "En 'No es que discrepe, pero…', el hablante prepara una objeción atenuada.",
    correcta: "Verdadero: estrategia de cortesía para introducir desacuerdo.",
    incorrectas: [
      "Falso: es una concesión temporal sin relación argumentativa.",
      "Falso: expresa acuerdo pleno sin matices."
    ]
  },
  {
    enunciado: "Los verbos factivos como 'saber' o 'comprobar' fortalecen la aserción.",
    correcta: "Correcto: presuponen la verdad del complemento.",
    incorrectas: [
      "Incorrecto: introducen mera conjetura incierta.",
      "Incorrecto: convierten la oración en desiderativa."
    ]
  },
  {
    enunciado: "Marcadores como 'sin embargo', 'con todo', 'aun así' son típicos de objeción o contraargumento.",
    correcta: "Sí: gestionan la estructura dialógica del desacuerdo.",
    incorrectas: [
      "No: se limitan a enumerar ejemplos.",
      "No: expresan solo refuerzo asertivo."
    ]
  },
  {
    enunciado: "Las opiniones pueden graduarse con 'creo', 'pienso firmemente', 'tengo la impresión de'.",
    correcta: "Verdadero: permiten ajustar la fuerza epistémica.",
    incorrectas: [
      "Falso: todas las fórmulas de opinión son equivalentes.",
      "Falso: solo 'creo' es válido; las otras son agramaticales."
    ]
  },
  {
    enunciado: "El deseo impersonal se formula con 'ojalá' + subjuntivo: 'Ojalá lleguen pronto'.",
    correcta: "Correcto: no exige sujeto agente del hablante.",
    incorrectas: [
      "Incorrecto: requiere imperativo en segunda persona.",
      "Incorrecto: 'ojalá' selecciona infinitivo sin flexión."
    ]
  },
  {
    enunciado: "El imperativo negativo en español usa el subjuntivo: 'No hables', 'No corráis'.",
    correcta: "Verdadero: se realiza con formas de subjuntivo.",
    incorrectas: [
      "Falso: se forma con 'no' + imperativo simple.",
      "Falso: solo existe en tercera persona."
    ]
  },
  {
    enunciado: "Las fórmulas '¿Podrías…?', '¿Le importaría…?' expresan exhortación con cortesía mitigada.",
    correcta: "Sí: se presentan como preguntas para suavizar la imposición.",
    incorrectas: [
      "No: son aserciones categóricas.",
      "No: equivalen a objeciones enfáticas."
    ]
  },
  {
    enunciado: "La combinación 'aunque + subjuntivo' suele expresar concesión hipotética o no factual.",
    correcta: "Correcto: la verdad del miembro concesivo no se afirma.",
    incorrectas: [
      "Incorrecto: con subjuntivo expresa causa necesaria.",
      "Incorrecto: obliga a lectura temporal estricta."
    ]
  },
  {
    enunciado: "Expresiones como 'es preferible que', 'sería aconsejable que' son directivas atenuadas.",
    correcta: "Verdadero: orientan la acción sin mandato explícito.",
    incorrectas: [
      "Falso: manifiestan duda epistémica sin orientación.",
      "Falso: equivalen a aserciones descriptivas."
    ]
  },
  {
    enunciado: "Un enunciado puede combinar aserción y objeción: 'Es un buen plan, pero caro'.",
    correcta: "Sí: afirma una cualidad y la limita con un contraargumento.",
    incorrectas: [
      "No: los actos son incompatibles en una sola oración.",
      "No: la segunda parte es siempre concesiva temporal."
    ]
  },
  {
    enunciado: "Las citas con 'según X' anclan una opinión en una fuente externa.",
    correcta: "Correcto: desplazan la responsabilidad epistémica.",
    incorrectas: [
      "Incorrecto: convierten el enunciado en orden directa.",
      "Incorrecto: obligan a negación del contenido citado."
    ]
  },
  {
    enunciado: "Las fórmulas 'Que descanses', 'Que te vaya bien' son exhortativas benevolentes.",
    correcta: "Sí: usan subjuntivo con valor de deseo para el otro.",
    incorrectas: [
      "No: son aserciones sobre hechos pasados.",
      "No: expresan objeciones implícitas."
    ]
  },
  {
    enunciado: "El empleo de 'debes', 'tienes que', 'hay que' incrementa la fuerza de la exhortación.",
    correcta: "Verdadero: son modalizadores de obligación.",
    incorrectas: [
      "Falso: atenúan la directividad con cortesía.",
      "Falso: se limitan a expresar posibilidad."
    ]
  },
  {
    enunciado: "En '¡Por favor, siéntese!', el mitigador de cortesía coexiste con la directiva.",
    correcta: "Correcto: combina deferencia y mandato.",
    incorrectas: [
      "Incorrecto: 'por favor' anula el carácter directivo.",
      "Incorrecto: convierte la orden en aserción."
    ]
  },
  {
    enunciado: "Una pregunta retórica puede vehicular aserción implícita: '¿Quién no desea paz?'.",
    correcta: "Sí: comunica una creencia compartida sin esperar respuesta.",
    incorrectas: [
      "No: carece de contenido proposicional.",
      "No: siempre solicita información nueva."
    ]
  },
  {
    enunciado: "En debates, 'con todo' y 'aun así' introducen objeciones tras reconocer méritos de la postura contraria.",
    correcta: "Verdadero: señalan giro dialéctico de contraargumentación.",
    incorrectas: [
      "Falso: son conectores de suma equivalentes a 'además'.",
      "Falso: marcan únicamente conclusión final."
    ]
  },
  {
    enunciado: "Las perífrasis 'venir a + infinitivo' pueden aproximar una opinión ('viene a significar').",
    correcta: "Correcto: atenúan y aproximan el contenido opinativo.",
    incorrectas: [
      "Incorrecto: expresan mandato inapelable.",
      "Incorrecto: sustituyen a 'deber' de obligación."
    ]
  },
  {
    enunciado: "El uso de 'creo' parentético ('Es, creo, una buena solución') marca opinión sin interrumpir la aserción principal.",
    correcta: "Sí: inserta la postura del hablante con baja intrusividad.",
    incorrectas: [
      "No: vuelve interrogativa la oración.",
      "No: convierte el enunciado en deseo."
    ]
  },
  {
    enunciado: "Las exclamativas desiderativas '¡A ver si acabamos!' expresan deseo con matiz exhortativo.",
    correcta: "Verdadero: invitan a realizar la acción pronto.",
    incorrectas: [
      "Falso: son negativas enfáticas sin deseo.",
      "Falso: equivalen a objeciones concesivas."
    ]
  },
  {
    enunciado: "En 'No digo que sea imposible, pero...', el hablante formula una objeción cautelosa.",
    correcta: "Correcto: abre espacio a la disensión con mitigación.",
    incorrectas: [
      "Incorrecto: es una aserción categórica sin matices.",
      "Incorrecto: expresa solo deseo personal."
    ]
  },
  {
    enunciado: "Los actos de exhortación pueden dirigirse a primera persona del plural para incluir al hablante ('Hagamos una pausa').",
    correcta: "Sí: el subjuntivo exhortativo incluye al emisor en la acción.",
    incorrectas: [
      "No: la exhortación solo puede ser a segunda persona.",
      "No: en plural siempre expresa opinión, no directiva."
    ]
  },
  {
    enunciado: "En textos académicos, 'se recomienda', 'conviene', 'es pertinente' vehiculan exhortaciones impersonalizadas.",
    correcta: "Verdadero: reducen la imposición y aumentan objetividad.",
    incorrectas: [
      "Falso: son meras marcas temporales.",
      "Falso: equivalen a negaciones enfáticas."
    ]
  }
];
