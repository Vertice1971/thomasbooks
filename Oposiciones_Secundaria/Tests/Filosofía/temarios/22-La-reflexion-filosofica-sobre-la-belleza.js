// temarios/22-La-reflexion-filosofica-sobre-la-belleza.js
var PREGUNTAS = [
  {
    enunciado: "En la tradición metafísica clásica, ¿cómo se ubica la belleza respecto de los trascendentales del ser?",
    correcta: "Se la considera un trascendental junto a la unidad, la verdad y el bien",
    incorrectas: [
      "Se la tiene por un accidente subjetivo sin valor ontológico",
      "Se la identifica con la utilidad práctica del objeto"
    ]
  },
  {
    enunciado: "¿Qué expresaba el ideal griego de kalokagathía en relación con la belleza?",
    correcta: "La unidad de lo bello y lo bueno como perfección humana",
    incorrectas: [
      "La oposición necesaria entre estética y ética",
      "La primacía de la fuerza física sobre la forma"
    ]
  },
  {
    enunciado: "En Platón, ¿qué significa que lo bello sensible ‘participa’ de la Idea de Belleza?",
    correcta: "Que las cosas bellas remiten a un modelo inteligible superior",
    incorrectas: [
      "Que la belleza es meramente relativa a cada individuo",
      "Que la belleza se reduce a la imitación técnica del artista"
    ]
  },
  {
    enunciado: "Según la pedagogía del eros en el ‘Banquete’ platónico, ¿qué papel juega la belleza?",
    correcta: "Conduce desde la atracción sensible a la contemplación de la Belleza en sí",
    incorrectas: [
      "Encierra al amante en el deseo corporal sin salida racional",
      "Se opone al conocimiento y debe reprimirse"
    ]
  },
  {
    enunciado: "¿Qué función atribuye Aristóteles a la mímesis en el arte?",
    correcta: "Es imitación creadora que produce aprendizaje y placer",
    incorrectas: [
      "Es copia servil sin valor cognitivo",
      "Es una ilusión sin relación con la verdad"
    ]
  },
  {
    enunciado: "En la Poética de Aristóteles, ¿qué efecto vincula con lo bello trágico?",
    correcta: "La catarsis, purificación de emociones mediante temor y compasión",
    incorrectas: [
      "La supresión total de emociones por ascetismo",
      "La inducción de risa como fin principal"
    ]
  },
  {
    enunciado: "En estética clásica, ¿qué expresan proporción y armonía?",
    correcta: "Criterios objetivos de orden que hacen bella una forma",
    incorrectas: [
      "Arbitrariedades de moda sin relación con la forma",
      "Exclusivamente una convención lingüística"
    ]
  },
  {
    enunciado: "¿Cómo entiende Plotino la belleza en su metafísica de lo Uno?",
    correcta: "Como irradiación de la unidad originaria presente en las formas",
    incorrectas: [
      "Como pura multiplicidad sin referencia a un principio",
      "Como propiedad exclusivamente material"
    ]
  },
  {
    enunciado: "En la tradición dionisiana, ¿qué significa que lo bello sea ‘resplandor’ del bien?",
    correcta: "Que la belleza manifiesta el bien a modo de iluminación de la forma",
    incorrectas: [
      "Que la belleza nada tiene que ver con la bondad",
      "Que el bien depende del gusto individual"
    ]
  },
  {
    enunciado: "¿Cuáles son las tres condiciones de lo bello en Santo Tomás de Aquino?",
    correcta: "Integridad, proporción y claridad",
    incorrectas: [
      "Novedad, emoción y utilidad",
      "Simetría, colorido y rareza"
    ]
  },
  {
    enunciado: "En Tomás de Aquino, ¿qué expresa la ‘claritas’ de lo bello?",
    correcta: "El esplendor de la forma que hace inteligible y deleitable el objeto",
    incorrectas: [
      "La opacidad que oculta la estructura del ser",
      "El brillo superficial carente de forma"
    ]
  },
  {
    enunciado: "¿Qué aporta el Renacimiento al concepto de belleza en el arte?",
    correcta: "La matematización de la forma y la perspectiva como orden de lo visible",
    incorrectas: [
      "La negación de toda regla en favor del azar",
      "La reducción del arte a mera artesanía utilitaria"
    ]
  },
  {
    enunciado: "¿Cómo reinterpreta el neoplatonismo renacentista la belleza?",
    correcta: "Como vía de ascenso espiritual desde lo sensible a lo inteligible",
    incorrectas: [
      "Como negación de toda dimensión espiritual",
      "Como simple placer corporal sin trascendencia"
    ]
  },
  {
    enunciado: "¿Qué introduce Baumgarten al acuñar el término ‘estética’?",
    correcta: "Una ciencia del conocimiento sensible y de lo bello como perfección de lo sensible",
    incorrectas: [
      "La identificación de estética y lógica formal",
      "La idea de que lo bello es incognoscible"
    ]
  },
  {
    enunciado: "En Kant, ¿qué define al juicio de gusto como estético?",
    correcta: "Es desinteresado y pretende validez universal sin concepto",
    incorrectas: [
      "Depende del interés por la utilidad del objeto",
      "Se verifica empíricamente como un juicio científico"
    ]
  },
  {
    enunciado: "¿Qué significa en Kant la ‘finalidad sin fin’ de lo bello?",
    correcta: "Que el objeto parece hecho para nuestra facultad de juzgar sin tener fin práctico",
    incorrectas: [
      "Que todo objeto bello debe servir a un fin técnico",
      "Que lo bello carece de toda forma aprehensible"
    ]
  },
  {
    enunciado: "¿Cómo distingue Kant lo sublime de lo bello?",
    correcta: "Lo sublime desborda la sensibilidad (matemático o dinámico) y remite a la razón",
    incorrectas: [
      "Lo sublime es un grado débil de lo bello",
      "Lo sublime se reduce a proporciones agradables"
    ]
  },
  {
    enunciado: "Para Hegel, ¿qué es la belleza artística?",
    correcta: "La manifestación sensible de la Idea en la obra de arte",
    incorrectas: [
      "Un puro juego sin contenido de verdad",
      "Un residuo prefilosófico carente de interés"
    ]
  },
  {
    enunciado: "¿Qué rasgo estético enfatiza el Romanticismo?",
    correcta: "La experiencia de lo sublime, el genio y la interioridad creadora",
    incorrectas: [
      "La supremacía absoluta de la regla sobre la inspiración",
      "La indiferencia hacia naturaleza y emoción"
    ]
  },
  {
    enunciado: "¿Cómo concibe Schopenhauer el arte en relación con la belleza?",
    correcta: "Como suspensión del querer que posibilita contemplación desinteresada de las Ideas",
    incorrectas: [
      "Como técnica para intensificar deseos y apetitos",
      "Como afirmación exclusiva de la utilidad"
    ]
  },
  {
    enunciado: "En ‘El nacimiento de la tragedia’, ¿qué oposición integra Nietzsche estéticamente?",
    correcta: "Apolíneo y dionisíaco como polos de forma y desmesura vital",
    incorrectas: [
      "Racional e irracional como dicotomía absoluta e irreconciliable",
      "Técnica y ética como idénticos sin tensión"
    ]
  },
  {
    enunciado: "¿Qué sostiene Croce con su teoría de la intuición-expresión?",
    correcta: "Que lo estético es la intuición individual expresada en forma",
    incorrectas: [
      "Que lo estético es una deducción lógica de conceptos",
      "Que lo estético es cálculo matemático de proporciones"
    ]
  },
  {
    enunciado: "En fenomenología, ¿cómo se aborda la experiencia de belleza?",
    correcta: "Como vivencia intencional de sentido en la obra y su aparición",
    incorrectas: [
      "Como simple estímulo fisiológico sin significado",
      "Como verificación empírica independiente del sujeto"
    ]
  },
  {
    enunciado: "Según Heidegger, ¿qué verdad acontece en la obra de arte bella?",
    correcta: "La desocultación del ser en un mundo que se abre",
    incorrectas: [
      "El encubrimiento deliberado de toda verdad",
      "La imposición de un concepto científico"
    ]
  },
  {
    enunciado: "¿Qué subraya Merleau-Ponty para la experiencia estética?",
    correcta: "El papel del cuerpo y la percepción encarnada en el aparecer del mundo",
    incorrectas: [
      "La anulación del cuerpo en favor del puro intelecto",
      "La independencia total de la visión respecto del movimiento"
    ]
  },
  {
    enunciado: "¿Cómo interpreta Gadamer la experiencia de arte y belleza?",
    correcta: "Como experiencia de verdad que acontece en la comprensión hermenéutica",
    incorrectas: [
      "Como entretenimiento sin contenido cognitivo",
      "Como juego privado imposible de comunicar"
    ]
  },
  {
    enunciado: "¿Qué diagnóstico estético formula Walter Benjamin sobre la reproducción técnica?",
    correcta: "La pérdida o transformación del ‘aura’ de la obra en la era reproductiva",
    incorrectas: [
      "La imposibilidad de reproducir imágenes en masa",
      "La completa indiferencia del público por el arte"
    ]
  },
  {
    enunciado: "En la crítica estética, ¿qué advierte Adorno sobre la industria cultural?",
    correcta: "La estandarización que compromete la autonomía de la obra y su verdad",
    incorrectas: [
      "La total emancipación de la obra respecto del mercado",
      "La identidad entre arte y mercancía como progreso estético"
    ]
  },
  {
    enunciado: "¿Qué plantea la ‘transfiguración del lugar común’ en la teoría contemporánea del arte?",
    correcta: "Que el contexto interpretativo puede convertir objetos ordinarios en obras",
    incorrectas: [
      "Que solo la imitación fiel de la naturaleza es arte",
      "Que el significado de la obra es fijo y ahistórico"
    ]
  },
  {
    enunciado: "¿Qué postula la teoría institucional del arte sobre belleza y obra?",
    correcta: "Que algo es obra si es aceptado como tal por el ‘mundo del arte’ en prácticas institucionales",
    incorrectas: [
      "Que la belleza objetiva basta siempre para definir obra",
      "Que la autoría individual es irrelevante para cualquier obra"
    ]
  },
  {
    enunciado: "En estética analítica, ¿qué afirma Sibley sobre conceptos estéticos?",
    correcta: "Que no se derivan mecánicamente de rasgos no estéticos",
    incorrectas: [
      "Que son reducibles a medidas físicas",
      "Que son sinónimos de propiedades geométricas"
    ]
  },
  {
    enunciado: "¿Qué contribuye Nelson Goodman al análisis de la obra bella?",
    correcta: "La noción de sistemas simbólicos y ejemplificación en ‘lenguajes del arte’",
    incorrectas: [
      "La identificación del arte con la ciencia empírica",
      "La eliminación del símbolo en la interpretación"
    ]
  },
  {
    enunciado: "¿Qué propone Susanne Langer sobre forma artística y significado?",
    correcta: "Que la obra es un símbolo presentacional de formas de sentir",
    incorrectas: [
      "Que la obra significa solo por descripción literal",
      "Que el arte carece de toda estructura simbólica"
    ]
  },
  {
    enunciado: "¿Qué resalta John Dewey al vincular arte, belleza y vida?",
    correcta: "La continuidad entre experiencia estética y experiencia ordinaria",
    incorrectas: [
      "La separación absoluta del arte respecto de la vida",
      "La prioridad de la técnica sobre la experiencia"
    ]
  },
  {
    enunciado: "¿Cómo entiende Rancière la política de la estética?",
    correcta: "Como reparto de lo sensible que configura modos de ver y decir",
    incorrectas: [
      "Como neutralidad total del arte en lo social",
      "Como mera propaganda doctrinal sin ambigüedad"
    ]
  },
  {
    enunciado: "¿Qué rasgo subraya la reflexión posmoderna sobre lo sublime?",
    correcta: "Lo inpresentable que excede formas clásicas de representación",
    incorrectas: [
      "La completa transparencia de lo bello al concepto",
      "La identidad entre lo sublime y lo decorativo"
    ]
  },
  {
    enunciado: "¿Qué cuestiones abre la estética digital respecto a belleza y autoría?",
    correcta: "La agencia técnica, la curaduría algorítmica y nuevos criterios de valoración",
    incorrectas: [
      "La imposibilidad de crear obras con medios digitales",
      "La obsolescencia de toda crítica e interpretación"
    ]
  },
  {
    enunciado: "¿Qué distingue la belleza natural de la artística en debates contemporáneos?",
    correcta: "La primera se aprecia en entornos no intencionales; la segunda surge de prácticas y contextos artísticos",
    incorrectas: [
      "Ambas son idénticas por definición",
      "La natural siempre es inferior a la artística"
    ]
  },
  {
    enunciado: "¿Cómo se concibe hoy la evaluación estética en contextos plurales?",
    correcta: "Como juicio argumentado que admite disenso informado y criterios múltiples",
    incorrectas: [
      "Como suma de preferencias privadas imposibles de discutir",
      "Como imposición de un único canon fijo e inmutable"
    ]
  },
  {
    enunciado: "¿Qué relación mantienen belleza y verdad en las tradiciones clásicas y hermenéuticas?",
    correcta: "Se implican mutuamente: la belleza puede ser un modo de aparición de la verdad",
    incorrectas: [
      "Se excluyen por principio como ámbitos incompatibles",
      "Solo la verdad científica puede manifestarse en el arte"
    ]
  }
];
