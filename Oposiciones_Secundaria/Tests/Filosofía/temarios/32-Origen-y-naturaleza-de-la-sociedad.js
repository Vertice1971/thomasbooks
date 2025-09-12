// temarios/32-Origen-y-naturaleza-de-la-sociedad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué idea central sostiene Aristóteles al definir al ser humano como zoon politikon?",
    correcta: "Que la vida en comunidad es un rasgo constitutivo de lo humano y condición para la virtud.",
    incorrectas: [
      "Que la sociedad es un mal necesario que conviene evitar siempre que sea posible.",
      "Que la comunidad solo es útil para protegerse de los animales salvajes."
    ]
  },
  {
    enunciado: "Según Hobbes, ¿qué motiva la formación de la sociedad civil a partir del estado de naturaleza?",
    correcta: "El miedo a la muerte violenta y el deseo de seguridad bajo un poder común.",
    incorrectas: [
      "La inclinación natural a la amistad y la solidaridad desinteresada.",
      "La búsqueda de gloria artística y reconocimiento cultural."
    ]
  },
  {
    enunciado: "En Locke, ¿qué limita legítimamente el poder político en la sociedad?",
    correcta: "El respeto a los derechos naturales de las personas: vida, libertad y propiedad.",
    incorrectas: [
      "La voluntad cambiante de la mayoría aunque vulnere derechos individuales.",
      "La tradición religiosa heredada sin consentimiento de los gobernados."
    ]
  },
  {
    enunciado: "¿Qué finalidad atribuye Rousseau al contrato social?",
    correcta: "Fundar una comunidad política basada en la voluntad general y la libertad civil.",
    incorrectas: [
      "Establecer una aristocracia hereditaria y divina.",
      "Eliminar toda forma de ley positiva y costumbre."
    ]
  },
  {
    enunciado: "¿Qué observa Adam Smith sobre el origen social de la cooperación económica?",
    correcta: "Que la cooperación puede surgir como efecto no intencionado de intereses individuales en el mercado.",
    incorrectas: [
      "Que la cooperación solo es posible mediante coerción estatal permanente.",
      "Que el intercambio es imposible sin una moral religiosa uniforme."
    ]
  },
  {
    enunciado: "¿Cómo caracteriza Durkheim a los hechos sociales?",
    correcta: "Como maneras de actuar, pensar y sentir exteriores al individuo y dotadas de poder coercitivo.",
    incorrectas: [
      "Como meras opiniones individuales sin fuerza normativa.",
      "Como impulsos biológicos que no pueden estudiarse científicamente."
    ]
  },
  {
    enunciado: "Para Durkheim, ¿qué distingue la solidaridad mecánica de la orgánica?",
    correcta: "La mecánica procede de la semejanza; la orgánica de la interdependencia funcional en sociedades complejas.",
    incorrectas: [
      "La mecánica se basa en contratos; la orgánica en tradiciones orales.",
      "La mecánica es urbana; la orgánica es rural y agrícola."
    ]
  },
  {
    enunciado: "¿Qué entiende Weber por acción social?",
    correcta: "Una conducta dotada de sentido subjetivo que se orienta por las acciones de otros.",
    incorrectas: [
      "Cualquier movimiento corporal, incluso reflejos automáticos.",
      "Toda norma jurídica independientemente de la intención del actor."
    ]
  },
  {
    enunciado: "En Marx, ¿qué relación existe entre infraestructura y superestructura?",
    correcta: "Las formas jurídicas, políticas e ideológicas se articulan sobre las relaciones materiales de producción.",
    incorrectas: [
      "La cultura determina mecánicamente las fuerzas productivas.",
      "No hay vínculo: la economía y la ideología evolucionan por separado."
    ]
  },
  {
    enunciado: "¿Qué tesis antropológica hace célebre a Marshall Sahlins en 'Stone Age Economics'?",
    correcta: "La crítica al homo economicus mostrando formas de abundancia y reciprocidad en cazadores-recolectores.",
    incorrectas: [
      "La defensa del mercado autorregulado como rasgo universal humano.",
      "La idea de que las sociedades primitivas carecen de normas de reparto."
    ]
  },
  {
    enunciado: "¿Qué papel atribuye Mauss al 'don' en la vida social?",
    correcta: "Constituye un sistema de prestaciones y contra-prestaciones que crea vínculos y obliga moralmente.",
    incorrectas: [
      "Es un acto puramente altruista sin expectativas sociales.",
      "Es irrelevante fuera de economías monetarias avanzadas."
    ]
  },
  {
    enunciado: "Según Lévi-Strauss, ¿qué estructura básica organiza el parentesco?",
    correcta: "Reglas de alianza y exogamia que regulan el intercambio de mujeres entre grupos.",
    incorrectas: [
      "Preferencias individuales sin pautas culturales estables.",
      "La herencia genética como único principio explicativo."
    ]
  },
  {
    enunciado: "¿Qué destaca Norbert Elias en 'El proceso de la civilización'?",
    correcta: "La autocontracción de los impulsos y la formación del Estado como procesos históricos interdependientes.",
    incorrectas: [
      "La desaparición del Estado en favor de comunidades locales autosuficientes.",
      "La constancia biológica de las emociones a lo largo de la historia."
    ]
  },
  {
    enunciado: "¿Cuál es la contribución de Bourdieu para entender la reproducción social?",
    correcta: "Los conceptos de habitus, campo y capital simbólico que explican la dominación y la distinción.",
    incorrectas: [
      "La teoría de los contratos perfectos como base de toda institución.",
      "La reducción de la cultura a elecciones puramente racionales."
    ]
  },
  {
    enunciado: "¿Qué contraposición clásica propone Tönnies?",
    correcta: "Comunidad (Gemeinschaft) frente a sociedad (Gesellschaft) como tipos ideales de integración social.",
    incorrectas: [
      "Estado frente a anarquía como fases biológicas del progreso.",
      "Religión frente a ciencia como esferas incompatibles."
    ]
  },
  {
    enunciado: "¿Cómo define Parsons el orden social?",
    correcta: "Como equilibrio de funciones integradas por normas y valores compartidos en el sistema social.",
    incorrectas: [
      "Como resultado de la fuerza militar sin legitimidad cultural.",
      "Como suma de decisiones individuales sin patrones normativos."
    ]
  },
  {
    enunciado: "¿Qué señala Harari sobre las ficciones intersubjetivas?",
    correcta: "Permiten la cooperación masiva al sostener instituciones, dinero y Estados mediante creencias compartidas.",
    incorrectas: [
      "Son errores cognitivos que las sociedades avanzadas ya han superado.",
      "Explican sólo fenómenos estéticos, no estructuras políticas."
    ]
  },
  {
    enunciado: "¿Qué preocupación recorre la obra de Bauman sobre la modernidad líquida?",
    correcta: "La fragilidad de los vínculos y la precariedad identitaria en sociedades de alta movilidad.",
    incorrectas: [
      "El retorno inevitable a comunidades cerradas y estables.",
      "La desaparición completa de los mercados globales."
    ]
  },
  {
    enunciado: "Para Castells, ¿qué define a la sociedad red?",
    correcta: "La centralidad de flujos de información y la reconfiguración de poder en redes globales.",
    incorrectas: [
      "El aislamiento local y la desconexión tecnológica generalizada.",
      "La primacía del territorio sobre los nodos comunicativos."
    ]
  },
  {
    enunciado: "¿Qué diferencia traza Weber entre dominación tradicional y legal-racional?",
    correcta: "La tradicional se apoya en la costumbre; la legal-racional en normas impersonales y burocracia.",
    incorrectas: [
      "La tradicional se basa en elecciones; la legal-racional en oráculos.",
      "Ambas reposan exclusivamente en el carisma del líder."
    ]
  },
  {
    enunciado: "¿Qué explica la teoría de la anomia en Durkheim?",
    correcta: "La desregulación normativa que aumenta el riesgo de desintegración y conductas desviadas.",
    incorrectas: [
      "La perfecta adaptación entre roles y aspiraciones en toda sociedad.",
      "La inevitabilidad biológica del suicidio en épocas de prosperidad."
    ]
  },
  {
    enunciado: "¿Qué ilustra la 'gran transformación' en Polanyi?",
    correcta: "El desanclaje de la economía respecto de lo social y la mercantilización del trabajo, tierra y dinero.",
    incorrectas: [
      "La autosuficiencia comunal sin mercados desde la Revolución Industrial.",
      "La sustitución completa del Estado por empresas privadas."
    ]
  },
  {
    enunciado: "¿Cuál es la crítica de Sahlins al reduccionismo biológico del parentesco?",
    correcta: "Sostiene que el parentesco es ante todo una relación cultural y práctica de solidaridad, no solo genética.",
    incorrectas: [
      "Afirma que el ADN determina por completo los roles familiares.",
      "Niega la existencia de adopciones en sociedades tradicionales."
    ]
  },
  {
    enunciado: "¿Qué enfatiza Giddens en su teoría de la estructuración?",
    correcta: "La dualidad de estructura: las reglas y recursos son a la vez medios y resultados de la acción.",
    incorrectas: [
      "La primacía absoluta de la estructura sin margen para la agencia.",
      "La acción individual como independiente de toda regla social."
    ]
  },
  {
    enunciado: "¿Qué diferencia clave ve Weber entre ética de la convicción y de la responsabilidad?",
    correcta: "La primera se guía por principios incondicionales; la segunda pondera consecuencias de los actos.",
    incorrectas: [
      "La convicción es utilitaria; la responsabilidad es mística.",
      "Ambas rechazan cualquier valoración sobre medios y fines."
    ]
  },
  {
    enunciado: "¿Cómo entiende Durkheim la religión en 'Las formas elementales de la vida religiosa'?",
    correcta: "Como sistema solidario de creencias y prácticas relativas a cosas sagradas que cohesiona al grupo.",
    incorrectas: [
      "Como ilusión individual sin función social.",
      "Como simple mito sin rituales vinculantes."
    ]
  },
  {
    enunciado: "¿Qué muestra Mauss con el potlatch?",
    correcta: "Un intercambio agonístico donde el prestigio se dirime mediante dar, recibir y devolver.",
    incorrectas: [
      "Un mercado de precios competitivos controlado por el Estado.",
      "Una ceremonia estética sin efectos sociales duraderos."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la burocracia moderna según Weber?",
    correcta: "La especialización funcional, la jerarquía formal y la impersonalidad de las reglas.",
    incorrectas: [
      "El liderazgo carismático como único principio organizativo.",
      "La rotación aleatoria de cargos sin competencias técnicas."
    ]
  },
  {
    enunciado: "¿Qué aporta Elias para comprender las etiquetas y modales?",
    correcta: "Son tecnologías del yo que internalizan autocontrol conforme avanza la interdependencia social.",
    incorrectas: [
      "Son caprichos individuales sin historia ni función.",
      "Son meros decretos estatales sin aprendizaje social."
    ]
  },
  {
    enunciado: "¿Cómo interpreta Harari el dinero?",
    correcta: "Como una ficción intersubjetiva extremadamente exitosa que facilita cooperación a gran escala.",
    incorrectas: [
      "Como una sustancia natural valiosa en sí misma.",
      "Como un fenómeno exclusivamente jurídico sin dimensión cultural."
    ]
  },
  {
    enunciado: "¿Qué rasgo subraya Bauman en los vínculos afectivos actuales?",
    correcta: "Tendencia a la fragilidad y a la reversibilidad de compromisos en contextos de consumo.",
    incorrectas: [
      "Estabilidad matrimonial universal creciente desde 1950.",
      "Desaparición de las redes digitales en la socialización."
    ]
  },
  {
    enunciado: "¿Qué distingue Tönnies entre comunidad y sociedad?",
    correcta: "La comunidad se sustenta en lazos afectivos y costumbres; la sociedad en acuerdos racionales y contratos.",
    incorrectas: [
      "La comunidad implica anonimato urbano; la sociedad, parentesco rural.",
      "La comunidad carece de normas; la sociedad carece de leyes."
    ]
  },
  {
    enunciado: "¿Qué función social tiene el rito según la antropología simbólica de Geertz?",
    correcta: "Actúa como texto cultural que fija significados compartidos y orienta prácticas.",
    incorrectas: [
      "Es un residuo irracional sin efecto en la conducta.",
      "Es únicamente una estrategia económica de maximización."
    ]
  },
  {
    enunciado: "¿Qué tensión describe Polanyi entre mercado y sociedad?",
    correcta: "La sociedad reacciona para re-incrustar la economía mediante protecciones y regulaciones.",
    incorrectas: [
      "El mercado siempre protege de forma espontánea a los vulnerables.",
      "La sociedad desaparece cuando surge el comercio internacional."
    ]
  },
  {
    enunciado: "¿Qué tipo de reciprocidad identifica Sahlins como propia del parentesco cercano?",
    correcta: "La reciprocidad generalizada, donde no se espera devolución inmediata ni equivalente.",
    incorrectas: [
      "La reciprocidad negativa, centrada en obtener ventaja unilateral.",
      "El trueque espectacular con cálculo exacto de precios monetarios."
    ]
  },
  {
    enunciado: "¿Qué indica Weber al hablar de desencantamiento del mundo?",
    correcta: "La racionalización creciente que reduce la magia y reordena la vida bajo criterios instrumentales.",
    incorrectas: [
      "El retorno universal de religiones tribales en la modernidad.",
      "La sustitución total de la técnica por rituales."
    ]
  },
  {
    enunciado: "¿Qué proceso reseña Elias sobre la violencia en la larga duración?",
    correcta: "Una tendencia al monopolio estatal de la fuerza y a menores umbrales de tolerancia a la agresión.",
    incorrectas: [
      "Un aumento inevitable de duelos y venganzas privadas.",
      "La privatización completa de ejércitos desde la Edad Media."
    ]
  },
  {
    enunciado: "¿Qué advierte Bourdieu sobre el gusto estético?",
    correcta: "Opera como marcador de distinción social ligado al capital cultural y la posición en el campo.",
    incorrectas: [
      "Es independiente de la socialización y del origen social.",
      "Es una elección puramente biológica establecida al nacer."
    ]
  },
  {
    enunciado: "¿Qué es la sociedad red según Castells en relación con el poder?",
    correcta: "Una reconfiguración donde el poder circula por nodos y protocolos de comunicación globales.",
    incorrectas: [
      "Una estructura piramidal fija e impermeable a la información.",
      "Un retorno al feudalismo sin tecnología."
    ]
  },
  {
    enunciado: "¿Qué integración propone Giddens entre agencia y estructura?",
    correcta: "La estructura condiciona y posibilita a la vez la acción, que reproduce o transforma dicha estructura.",
    incorrectas: [
      "La agencia elimina las reglas en cuanto aparece la innovación.",
      "La estructura es un determinismo absoluto sin creatividad."
    ]
  },
  {
    enunciado: "¿Qué sugiere Harari sobre los Estados modernos y la identidad colectiva?",
    correcta: "Se sostienen en relatos nacionales y símbolos que generan lealtades y cooperación ampliada.",
    incorrectas: [
      "Se sustentan exclusivamente en parentesco biológico.",
      "Carecen de elementos narrativos y simbólicos en su legitimidad."
    ]
  }
];
