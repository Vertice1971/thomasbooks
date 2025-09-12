// Archivo: 52-La-sintesis-escolastica-de-santo-tomas-de-aquino.js


var PREGUNTAS = [
  {
    enunciado: "La escolástica medieval se caracteriza por integrar la investigación racional con la revelación cristiana mediante procedimientos sistemáticos.",
    correcta: "Esto es cierto, pues articula la razón filosófica con la teología usando quaestio, disputatio y lectio.",
    incorrectas: [
      "Es falso, porque la escolástica prohíbe el uso de la lógica formal en cuestiones de fe.",
      "Es falso, ya que la escolástica elimina cualquier referencia a la Escritura y a los Padres."
    ]
  },
  {
    enunciado: "La síntesis de Tomás de Aquino utiliza la filosofía aristotélica como herramienta de fundamentación.",
    correcta: "Sí, adopta conceptos aristotélicos (acto/potencia, hilemorfismo, causas) al servicio de la teología.",
    incorrectas: [
      "No, rechaza por completo a Aristóteles en favor del platonismo puro.",
      "No, porque su marco teórico depende exclusivamente del estoicismo."
    ]
  },
  {
    enunciado: "Según Tomás, entre fe y razón existe una relación de complementariedad sin doble verdad.",
    correcta: "Correcto, porque la verdad es una y la filosofía no contradice la revelación auténtica.",
    incorrectas: [
      "Incorrecto, ya que mantiene dos verdades paralelas e incompatibles.",
      "Incorrecto, pues subordina toda razón a la fe negando cualquier autonomía filosófica."
    ]
  },
  {
    enunciado: "El principio de analogía del ser en Tomás describe cómo se predica 'ser' de Dios y de las criaturas.",
    correcta: "Se predica de modo análogo: ni unívoco ni puramente equívoco, guardando proporción causal.",
    incorrectas: [
      "Es unívoco, porque 'ser' significa exactamente lo mismo en Dios y en criaturas.",
      "Es equívoco, porque 'ser' significa cosas totalmente distintas sin relación."
    ]
  },
  {
    enunciado: "La distinción esencia–existencia en los entes creados es central en la metafísica tomista.",
    correcta: "Sí, pues en las criaturas esencia y existencia son principios realmente distintos.",
    incorrectas: [
      "No, porque en todo ente creado esencia y existencia se identifican sin distinción.",
      "No, ya que Tomás niega la existencia como principio metafísico."
    ]
  },
  {
    enunciado: "En Dios se identifican esencia y existencia.",
    correcta: "Sí, Dios es el ipsum esse subsistens, sin composición real de esencia y acto de ser.",
    incorrectas: [
      "No, Dios posee esencia sin existencia y la recibe de otra causa superior.",
      "No, Dios es compuesto de materia y forma como las sustancias corpóreas."
    ]
  },
  {
    enunciado: "El actus essendi en Tomás designa la actualidad radical por la que algo es.",
    correcta: "Exacto, el acto de ser fundamenta toda perfección y precede a la esencia en el orden del acto.",
    incorrectas: [
      "No, es un sinónimo de potencia pura sin actualización.",
      "No, es simplemente la forma sustancial separada de la materia."
    ]
  },
  {
    enunciado: "La teoría hilemórfica explica la composición de sustancias corpóreas en Tomás.",
    correcta: "Sí, toda sustancia corpórea es compuesta de materia y forma.",
    incorrectas: [
      "No, las sustancias corpóreas son puras formas sin materia.",
      "No, la materia y la forma son accidentes añadidos a la sustancia."
    ]
  },
  {
    enunciado: "Para Tomás, el alma humana es la forma sustancial del cuerpo.",
    correcta: "Correcto, la persona humana es una única sustancia hilemórfica con alma racional.",
    incorrectas: [
      "Incorrecto, el alma es un accidente separable que no constituye la sustancia.",
      "Incorrecto, el alma es una sustancia distinta que habita temporalmente el cuerpo sin unidad sustancial."
    ]
  },
  {
    enunciado: "La inmortalidad del alma en Tomás se fundamenta en su carácter espiritual.",
    correcta: "Sí, por ser forma subsistente con operaciones inmateriales como el intelección.",
    incorrectas: [
      "No, porque toda forma sustancial perece con la corrupción del cuerpo.",
      "No, porque depende de la recepción material de especies sensibles."
    ]
  },
  {
    enunciado: "Las 'Cinco vías' son argumentos de teología natural para la existencia de Dios.",
    correcta: "Exacto, parten del movimiento, causalidad eficiente, contingencia, grados de perfección y orden.",
    incorrectas: [
      "No, son dogmas revelados que no admiten argumentación filosófica.",
      "No, son alegorías morales sin pretensión demostrativa."
    ]
  },
  {
    enunciado: "La vía de la contingencia concluye en un ser necesario.",
    correcta: "Sí, de la contingencia de los entes se infiere un ser cuya esencia es existir.",
    incorrectas: [
      "No, concluye en una serie infinita de causas contingentes autosuficiente.",
      "No, concluye en una forma platónica universal sin existencia real."
    ]
  },
  {
    enunciado: "La ley natural, según Tomás, es participación de la ley eterna en la criatura racional.",
    correcta: "Correcto, por eso sus preceptos primeros son universales y cognoscibles por la razón.",
    incorrectas: [
      "Incorrecto, es un código positivo variable sin fundamento racional.",
      "Incorrecto, es una inspiración privada ajena a la racionalidad común."
    ]
  },
  {
    enunciado: "El fin último del ser humano se alcanza en la visión de Dios.",
    correcta: "Sí, la beatitudo plena consiste en la visión beatífica del Bien sumo.",
    incorrectas: [
      "No, el fin último es el placer sensible como satisfacción suprema.",
      "No, el fin último es la autosuficiencia política del Estado."
    ]
  },
  {
    enunciado: "La ética tomista integra virtudes cardinales y teologales.",
    correcta: "Así es, ordenadas al perfeccionamiento de las potencias y al fin último.",
    incorrectas: [
      "No, descarta las virtudes cardinales por considerarlas paganas.",
      "No, reduce toda moral a mandatos externos sin hábito virtuoso."
    ]
  },
  {
    enunciado: "El entendimiento agente y posible explican en Tomás la abstracción de lo inteligible.",
    correcta: "Sí, el agente ilumina las formas para que el posible las reciba como especies inteligibles.",
    incorrectas: [
      "No, la intelección se produce por inscripción innata de todas las ideas claras y distintas.",
      "No, la intelección es pasiva y depende de especies sensibles sin universalidad."
    ]
  },
  {
    enunciado: "El conocimiento verdadero es 'adaequatio intellectus ad rem'.",
    correcta: "Correcto, la verdad consiste en la conformidad del entendimiento con la realidad.",
    incorrectas: [
      "Incorrecto, la verdad es pura coherencia interna sin referencia a lo real.",
      "Incorrecto, la verdad es solo utilidad práctica y carece de dimensión ontológica."
    ]
  },
  {
    enunciado: "El realismo moderado sobre los universales sostiene que la universalidad está en el intelecto, fundada en la realidad.",
    correcta: "Sí, hay naturaleza común en las cosas, universalizada por la abstracción intelectual.",
    incorrectas: [
      "No, los universales existen separados en un mundo de Ideas subsistentes.",
      "No, los universales son meros nombres sin fundamento en la realidad."
    ]
  },
  {
    enunciado: "La creación en Tomás es ex nihilo y por libre voluntad divina.",
    correcta: "Exacto, Dios comunica el ser sin materia preexistente ni necesidad natural.",
    incorrectas: [
      "No, el mundo emana necesariamente de la esencia divina por necesidad.",
      "No, el mundo es eterno e increado al modo de Aristóteles sin intervención divina."
    ]
  },
  {
    enunciado: "La jerarquía del ser expresa grados de perfección según cercanía al acto puro.",
    correcta: "Sí, desde los entes materiales hasta las sustancias separadas y Dios.",
    incorrectas: [
      "No, todos los entes poseen idéntico grado de perfección sin jerarquía.",
      "No, la jerarquía depende solo de convenciones sociales."
    ]
  },
  {
    enunciado: "En la teoría política, el bien común orienta la legitimidad de las leyes.",
    correcta: "Correcto, la ley positiva debe derivar de la ley natural y ordenarse al bien común.",
    incorrectas: [
      "Incorrecto, la ley se legitima solo por la voluntad del príncipe.",
      "Incorrecto, la ley se legitima por consenso aunque contradiga principios morales básicos."
    ]
  },
  {
    enunciado: "Sobre la tiranía, Tomás admite la resistencia al poder injusto en determinadas condiciones.",
    correcta: "Sí, porque el poder se mide por su servicio al bien común y no por la fuerza.",
    incorrectas: [
      "No, sostiene obediencia absoluta al tirano por principio teológico.",
      "No, defiende que todo poder es ilegítimo y debe abolirse."
    ]
  },
  {
    enunciado: "Tomás rechaza la 'unidad del entendimiento' defendida por algunos averroístas latinos.",
    correcta: "Cierto, afirma la pluralidad de almas intelectivas individuales en cada ser humano.",
    incorrectas: [
      "Falso, acepta un único entendimiento para toda la especie humana.",
      "Falso, niega la existencia del entendimiento agente."
    ]
  },
  {
    enunciado: "La voluntad, en Tomás, sigue al intelecto que presenta el bien.",
    correcta: "Sí, la voluntad tiende al bien conocido y se perfecciona por las virtudes.",
    incorrectas: [
      "No, la voluntad es ciega y actúa sin referencia al conocimiento.",
      "No, la voluntad determina qué es verdadero con independencia del intelecto."
    ]
  },
  {
    enunciado: "Los trascendentales del ente en Tomás incluyen unidad, verdad y bondad.",
    correcta: "Correcto, se convierten con el ser y lo explicitan bajo diversos aspectos.",
    incorrectas: [
      "Incorrecto, los trascendentales son accidente, cantidad y relación.",
      "Incorrecto, solo la cantidad es trascendental y funda los demás predicados."
    ]
  },
  {
    enunciado: "El argumento desde los grados de perfección remite a un máximo que es causa de los demás en su género.",
    correcta: "Sí, concluye en un ser sumamente perfecto que fundamenta las perfecciones graduadas.",
    incorrectas: [
      "No, concluye en una media aritmética de perfecciones finitas.",
      "No, concluye en la inexistencia de todo grado objetivo de perfección."
    ]
  },
  {
    enunciado: "La finalidad intrínseca de la naturaleza apoya la vía del orden o gobierno del mundo.",
    correcta: "Exacto, el orden teleológico indica una inteligencia ordenadora.",
    incorrectas: [
      "No, la finalidad es una ilusión lingüística sin correlato real.",
      "No, la vía se basa en la identidad entre azar y necesidad."
    ]
  },
  {
    enunciado: "La doctrina de la participación explica la dependencia ontológica de lo creado respecto del Creador.",
    correcta: "Sí, los entes participan del ser recibido y limitado frente al Ser por esencia.",
    incorrectas: [
      "No, la participación es solo un tropo retórico sin alcance metafísico.",
      "No, la participación indica igualdad ontológica entre Dios y las criaturas."
    ]
  },
  {
    enunciado: "En el orden moral, los primeros preceptos de la ley natural son indemostrables en cuanto principios prácticos primeros.",
    correcta: "Cierto, son per se nota para la razón práctica (por ejemplo, 'hay que hacer el bien y evitar el mal').",
    incorrectas: [
      "Falso, todos los preceptos morales son deducidos de axiomas matemáticos.",
      "Falso, los preceptos morales dependen exclusivamente de la costumbre variable."
    ]
  },
  {
    enunciado: "La felicidad imperfecta en esta vida consiste en el ejercicio de las virtudes y la contemplación natural de la verdad.",
    correcta: "Sí, pero la beatitud perfecta trasciende esta vida en la visión de Dios.",
    incorrectas: [
      "No, la felicidad perfecta se alcanza por bienes sensibles y honor temporal.",
      "No, la felicidad depende de la fortuna sin relación con la virtud."
    ]
  },
  {
    enunciado: "La recepción de Aristóteles llega a Tomás también mediada por pensadores árabes y judíos.",
    correcta: "Correcto, estudia y discute posiciones de Averroes, Avicena y Maimónides.",
    incorrectas: [
      "Incorrecto, desconoce la tradición árabe y judía por completo.",
      "Incorrecto, adopta sin crítica todo el averroísmo latino."
    ]
  },
  {
    enunciado: "La relación entre gracia y naturaleza en Tomás puede resumirse en que la gracia no destruye la naturaleza, sino que la perfecciona.",
    correcta: "Exacto, la eleva respetando su orden propio.",
    incorrectas: [
      "No, la gracia sustituye la naturaleza anulando sus operaciones.",
      "No, la gracia es indiferente a la naturaleza y no la transforma."
    ]
  },
  {
    enunciado: "El método escolástico de la quaestio incluye objeciones, sed contra y respuesta articulada.",
    correcta: "Sí, busca claridad, distinción de tesis y solución ordenada de las dificultades.",
    incorrectas: [
      "No, se basa en la autoridad única sin considerar objeciones.",
      "No, prohíbe formular contraargumentos por respeto a la tradición."
    ]
  },
  {
    enunciado: "La doctrina tomista influye notablemente en la Escuela de Salamanca.",
    correcta: "Cierto, autores como Vitoria y Suárez reelaboran temas de ley natural, derecho y política.",
    incorrectas: [
      "Falso, la Escuela de Salamanca rompe totalmente con el tomismo.",
      "Falso, se inspira exclusivamente en el escepticismo moderno."
    ]
  },
  {
    enunciado: "El magisterio moderno promovió el tomismo como marco filosófico-teológico de referencia.",
    correcta: "Sí, especialmente con la encíclica Aeterni Patris de León XIII (1879).",
    incorrectas: [
      "No, se prohibió el tomismo en documentos oficiales del siglo XIX.",
      "No, se sustituyó por el positivismo como doctrina oficial eclesial."
    ]
  },
  {
    enunciado: "En el orden causal, Tomás defiende que no es posible una serie infinita de causas esencialmente subordinadas.",
    correcta: "Correcto, una serie per se exige una causa primera en acto.",
    incorrectas: [
      "Incorrecto, una serie infinita per se explica por sí misma sin primer término.",
      "Incorrecto, niega toda causalidad eficiente por principio."
    ]
  },
  {
    enunciado: "La noción tomista de persona humana subraya unidad sustancial, dignidad y racionalidad.",
    correcta: "Sí, cada individuo humano es un suppositum racional con fin trascendente.",
    incorrectas: [
      "No, la persona se define solo por su función social cambiante.",
      "No, la persona es un agregado accidental de alma y cuerpo."
    ]
  },
  {
    enunciado: "La virtud de la prudencia regula los medios hacia el fin bueno en la vida moral.",
    correcta: "Exacto, dirige las otras virtudes en el obrar concreto.",
    incorrectas: [
      "No, la prudencia consiste en evitar compromisos morales por miedo.",
      "No, la prudencia es una simple memoria de normas sin juicio práctico."
    ]
  },
  {
    enunciado: "En la teoría del conocimiento, Tomás admite que todo nuestro conocer humano inicia en los sentidos.",
    correcta: "Sí, nihil est in intellectu quod non prius fuerit in sensu, salvo el intelecto mismo.",
    incorrectas: [
      "No, niega toda función de los sentidos en favor de ideas innatas completas.",
      "No, sostiene que los sentidos captan universales como tales."
    ]
  },
  {
    enunciado: "La caridad, como virtud teologal, ordena todas las virtudes hacia Dios.",
    correcta: "Correcto, es forma de las virtudes al ordenar el amor al fin último.",
    incorrectas: [
      "Incorrecto, la caridad se reduce a filantropía natural sin dimensión teologal.",
      "Incorrecto, la caridad es inferior a la templanza en la jerarquía moral."
    ]
  },
  {
    enunciado: "La noción de providencia en Tomás implica gobierno divino del mundo sin anular las causas segundas.",
    correcta: "Sí, Dios causa el ser y concurre con las causas creadas respetando su causalidad propia.",
    incorrectas: [
      "No, la providencia suprime toda causalidad creada y todo orden natural.",
      "No, la providencia se limita a conocer sin causar ni gobernar."
    ]
  },
  {
    enunciado: "El principio de razón suficiente tomista se expresa en la prioridad del acto sobre la potencia y en la causalidad ordenada.",
    correcta: "Cierto, nada pasa de potencia a acto sin causa actual.",
    incorrectas: [
      "Falso, la potencia se actualiza por sí misma sin principio en acto.",
      "Falso, el cambio es ilusorio y carece de causa."
    ]
  }
];
