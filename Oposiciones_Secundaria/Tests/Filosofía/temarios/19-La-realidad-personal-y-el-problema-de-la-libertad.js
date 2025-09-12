// temarios/19-La-realidad-personal-y-el-problema-de-la-libertad.js
var PREGUNTAS = [
  {
    enunciado: "Según la definición clásica de Boecio, ¿qué es una persona?",
    correcta: "Una sustancia individual de naturaleza racional, dotada de dignidad propia",
    incorrectas: [
      "Un compuesto accidental de alma y cuerpo regido por causas ciegas",
      "Una ficción lingüística útil para designar miembros de una especie"
    ]
  },
  {
    enunciado: "¿Qué rasgo subraya san Agustín al pensar la realidad personal?",
    correcta: "La interioridad como lugar de verdad y libertad, articulada en memoria, entendimiento y voluntad",
    incorrectas: [
      "La primacía absoluta de la biología sobre cualquier dimensión espiritual",
      "La imposibilidad de la autoconciencia por la opacidad del alma"
    ]
  },
  {
    enunciado: "Para Tomás de Aquino, ¿en qué se enraíza el libre albedrío humano?",
    correcta: "En la racionalidad que conoce el bien y en la voluntad que se inclina libremente hacia él",
    incorrectas: [
      "En una fuerza irracional que decide sin motivo alguno",
      "En la necesidad física de las pasiones que determinan todo acto"
    ]
  },
  {
    enunciado: "¿Qué aporta Descartes a la comprensión moderna de la persona?",
    correcta: "La centralidad de la res cogitans y la autoconciencia como fundamento de certeza",
    incorrectas: [
      "La reducción del yo a pura extensión cuantificable",
      "La afirmación de que la conciencia es una ilusión evolutiva"
    ]
  },
  {
    enunciado: "Para Locke, la identidad personal se basa principalmente en…",
    correcta: "La continuidad de la conciencia y la memoria a lo largo del tiempo",
    incorrectas: [
      "La inmutabilidad sustancial del alma separada del cuerpo",
      "La pertenencia a una misma especie biológica sin referencia a la conciencia"
    ]
  },
  {
    enunciado: "¿Cómo formula Kant la dignidad de la persona?",
    correcta: "Como fin en sí misma, capaz de autonomía y de darse a sí misma la ley moral",
    incorrectas: [
      "Como medio óptimo para la felicidad social utilitaria",
      "Como resultado de la aprobación pública y el reconocimiento externo"
    ]
  },
  {
    enunciado: "¿Qué núcleo propone el personalismo contemporáneo (Mounier, Maritain, Wojtyła)?",
    correcta: "La persona como ser relacional, irreductible, con valor absoluto y apertura a la trascendencia y a la comunidad",
    incorrectas: [
      "El individuo como átomosocial autosuficiente sin vínculos constitutivos",
      "La persona como máscara teatral sin consistencia ontológica"
    ]
  },
  {
    enunciado: "En Aristóteles, la libertad se vincula a la prohairesis. ¿Qué significa esto?",
    correcta: "Que la elección deliberada racional orienta las acciones hacia fines virtuosos",
    incorrectas: [
      "Que toda acción libre es espontánea e irreflexiva por definición",
      "Que la virtud es indiferente a la elección porque solo cuenta el resultado"
    ]
  },
  {
    enunciado: "¿Qué entiende Hegel por libertad ‘concreta’?",
    correcta: "La libertad que se realiza en instituciones y relaciones de reconocimiento dentro de la eticidad",
    incorrectas: [
      "La pura ausencia de coacción sin vínculos sociales de ningún tipo",
      "La indiferencia moral del sujeto respecto a la comunidad política"
    ]
  },
  {
    enunciado: "¿Cómo distingue Isaiah Berlin las dos grandes nociones de libertad?",
    correcta: "Libertad negativa como ausencia de interferencia y libertad positiva como autogobierno o autorrealización",
    incorrectas: [
      "Libertad teórica y libertad empírica según el método científico",
      "Libertad política y libertad económica, sin conexión conceptual alguna"
    ]
  },
  {
    enunciado: "¿Qué tesis sostiene Sartre sobre la condición humana?",
    correcta: "Que estamos ‘condenados a ser libres’, asumiendo la responsabilidad por nuestros proyectos",
    incorrectas: [
      "Que la libertad es una ilusión causada por la gramática del lenguaje",
      "Que la autenticidad consiste en obedecer ciegamente las normas sociales"
    ]
  },
  {
    enunciado: "¿Cómo critica Nietzsche ciertas nociones morales de libertad?",
    correcta: "Presentándolas como máscaras de la voluntad de poder y de la moral de rebaño",
    incorrectas: [
      "Defendiendo el libre albedrío como verdad metafísica indiscutible",
      "Identificando libertad con sumisión a los valores tradicionales"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa el reconocimiento en las teorías contemporáneas de la persona?",
    correcta: "Es clave para la constitución de la identidad y la autoestima en marcos sociales y culturales",
    incorrectas: [
      "Es irrelevante, porque la identidad es puramente biológica",
      "Es un mero adorno retórico sin efectos éticos o políticos"
    ]
  },
  {
    enunciado: "¿Qué problema plantean los experimentos tipo Libet sobre la libertad?",
    correcta: "Que algunos marcadores neuronales parecen anticipar decisiones conscientes, reabriendo el debate sobre el libre albedrío",
    incorrectas: [
      "Que la neurociencia ha demostrado concluyentemente la inexistencia del cerebro",
      "Que toda decisión humana es azarosa sin correlato neurofisiológico"
    ]
  },
  {
    enunciado: "¿Qué propone Charles Taylor respecto a la libertad y la identidad?",
    correcta: "Que la libertad se comprende dentro de marcos de sentido y bienes fuertes compartidos culturalmente",
    incorrectas: [
      "Que la libertad es un cálculo puramente hedonista sin horizontes de valor",
      "Que la identidad personal no guarda relación con la comunidad lingüística"
    ]
  },
  {
    enunciado: "En el personalismo de Wojtyła (Juan Pablo II), ¿cómo se entiende el ‘acto’?",
    correcta: "Como expresión de la autodonación y del carácter autoposesivo de la persona, que se realiza en el amor y la responsabilidad",
    incorrectas: [
      "Como pura reacción mecánica a estímulos externos",
      "Como negación de todo vínculo con los demás por preservar la autonomía"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre libertad ontológica y libertad psicológica?",
    correcta: "La primera alude a la capacidad real de elegir; la segunda, a la vivencia subjetiva de sentirse libre",
    incorrectas: [
      "Son sinónimos estrictos en toda la tradición filosófica",
      "La libertad ontológica es solo un sentimiento y la psicológica, una facultad metafísica"
    ]
  },
  {
    enunciado: "¿Qué papel concede Tomás de Aquino a las pasiones en la acción libre?",
    correcta: "Pueden cooperar con la razón y la voluntad, perfeccionando la acción cuando están ordenadas",
    incorrectas: [
      "Anulan toda libertad por definición y siempre deben suprimirse",
      "Son la única fuente de moralidad porque determinan el fin del acto"
    ]
  },
  {
    enunciado: "¿Qué significa para Agustín la ‘interioridad’ en relación con la libertad?",
    correcta: "Es el ámbito en el que el alma se orienta hacia la verdad y el bien, haciendo posible la decisión libre",
    incorrectas: [
      "Un espacio vacío sin relevancia para la vida moral",
      "Una ilusión retórica incompatible con la gracia"
    ]
  },
  {
    enunciado: "¿Cómo se relaciona la noción kantiana de autonomía con la ley moral?",
    correcta: "La voluntad libre se da a sí misma la ley universalizable, tratándose siempre a sí y a los demás como fines",
    incorrectas: [
      "La autonomía consiste en seguir los deseos inmediatos sin restricciones",
      "La ley moral depende de cada cultura y no admite principios universales"
    ]
  },
  {
    enunciado: "En Hegel, ¿qué supera la ‘libertad abstracta’?",
    correcta: "La libertad concreta, que integra instituciones, costumbres y derecho en la eticidad",
    incorrectas: [
      "La libertad natural, entendida como instinto biológico puro",
      "La libertad estética, que prescinde de toda normatividad"
    ]
  },
  {
    enunciado: "¿Qué relación establece Aristóteles entre hábito (hexis) y libertad?",
    correcta: "Los hábitos virtuosos, formados por la repetición deliberada, facilitan elecciones libres hacia el bien",
    incorrectas: [
      "Los hábitos son cadenas que impiden toda decisión libre",
      "La virtud es innata y no depende de la formación práctica"
    ]
  },
  {
    enunciado: "¿Por qué Levinas cuestiona ciertos enfoques centrados en el yo?",
    correcta: "Porque prioriza la responsabilidad ante el rostro del otro como llamada ética que funda la subjetividad",
    incorrectas: [
      "Porque niega la existencia de los otros como meras apariencias",
      "Porque identifica ética y cálculo utilitarista de placeres"
    ]
  },
  {
    enunciado: "¿Qué sugiere la fenomenología sobre la experiencia de libertad?",
    correcta: "Que la libertad se manifiesta en la intencionalidad y en la vivencia situada del decidir",
    incorrectas: [
      "Que solo podemos hablar de libertad en proposiciones lógicas formales",
      "Que la experiencia carece de toda estructura intencional"
    ]
  },
  {
    enunciado: "¿Cómo entiende Ricoeur la identidad personal?",
    correcta: "Como ‘ipseidad’ narrativa que integra continuidad y cambio mediante el relato de la propia vida",
    incorrectas: [
      "Como un dato inmutable ajeno a toda interpretación",
      "Como una suma de impulsos sin articulación simbólica"
    ]
  },
  {
    enunciado: "¿Cuál es un riesgo asociado a ciertas versiones de la libertad positiva?",
    correcta: "Que deriven en paternalismo o imposición en nombre de una supuesta ‘verdadera’ voluntad del sujeto",
    incorrectas: [
      "Que impidan cualquier forma de cooperación social",
      "Que nieguen la posibilidad de proyectos de autorrealización"
    ]
  },
  {
    enunciado: "¿Qué sostiene el compatibilismo contemporáneo sobre libertad y causalidad?",
    correcta: "Que libertad y causalidad pueden coexistir si entendemos la acción como causada por razones del agente",
    incorrectas: [
      "Que la libertad exige indeterminismo absoluto en todos los niveles",
      "Que la causalidad es incompatible incluso con la responsabilidad mínima"
    ]
  },
  {
    enunciado: "¿Cuál es la crítica central de MacIntyre a la modernidad ética?",
    correcta: "La fragmentación moral y la pérdida de narrativas de virtud que den sentido a las prácticas humanas",
    incorrectas: [
      "La excesiva dependencia de tradiciones y bienes internos",
      "La introducción de la prudencia como virtud intelectual"
    ]
  },
  {
    enunciado: "¿Qué relación propone Jonas entre libertad y responsabilidad?",
    correcta: "La técnica amplía el poder humano y exige una ética de la responsabilidad hacia el futuro y la biosfera",
    incorrectas: [
      "La responsabilidad se limita al presente inmediato y a uno mismo",
      "La libertad moral queda disuelta en la eficacia tecnológica"
    ]
  },
  {
    enunciado: "En el debate sobre neuroderechos, ¿qué se busca proteger?",
    correcta: "La privacidad mental, la identidad personal y la libertad cognitiva frente a tecnologías intrusivas",
    incorrectas: [
      "Únicamente la propiedad intelectual de los dispositivos",
      "La sustitución total de la decisión humana por algoritmos"
    ]
  },
  {
    enunciado: "¿Cómo articula el personalismo el vínculo entre dignidad y derechos humanos?",
    correcta: "Considera los derechos como exigencias de la dignidad inherente a toda persona, con independencia de su utilidad",
    incorrectas: [
      "Los entiende como concesiones del Estado según la productividad del individuo",
      "Los supedita a la pertenencia a grupos mayoritarios"
    ]
  },
  {
    enunciado: "¿Qué problema plantea el determinismo duro para la responsabilidad penal?",
    correcta: "Si toda acción está necesitada por causas previas, parece cuestionarse la imputabilidad moral y jurídica",
    incorrectas: [
      "Que los jueces ya no podrían aplicar ninguna ley escrita",
      "Que las acciones libres serían físicamente imposibles de describir"
    ]
  },
  {
    enunciado: "¿Qué destaca Kierkegaard al pensar la libertad?",
    correcta: "La angustia como vértigo de la posibilidad y la necesidad de elegir auténticamente",
    incorrectas: [
      "La libertad como descanso en la costumbre sin decisión",
      "La imposibilidad de la fe en contextos modernos"
    ]
  },
  {
    enunciado: "En la tradición escolástica, ¿qué es la ‘voluntas ut natura’ frente a la ‘voluntas ut ratio’?",
    correcta: "La primera designa la inclinación al bien en general; la segunda, la elección racional de medios y fines",
    incorrectas: [
      "Dos nombres para la misma facultad sin distinción funcional",
      "La voluntad espiritual y la voluntad corporal separadas ontológicamente"
    ]
  },
  {
    enunciado: "¿Qué papel juegan los valores en la libertad personal según la ética material de Scheler?",
    correcta: "La captación emotiva de valores orienta la preferencia y la elección responsable",
    incorrectas: [
      "Los valores son proyecciones subjetivas sin contenido",
      "La razón práctica es irrelevante ante el impulso vital"
    ]
  },
  {
    enunciado: "¿Cómo relaciona Habermas libertad y comunicación?",
    correcta: "A través de la acción comunicativa y los procedimientos deliberativos que garantizan autonomía y legitimidad",
    incorrectas: [
      "Mediante el mandato de obediencia a autoridades carismáticas",
      "Mediante el secreto y la ausencia de rendición de cuentas"
    ]
  },
  {
    enunciado: "¿Qué indica la noción de ‘autotrascendencia’ de la persona?",
    correcta: "La capacidad de ir más allá de sí, abrirse a la verdad, al bien y a los otros en proyectos significativos",
    incorrectas: [
      "La autosuficiencia absoluta sin relación con nadie",
      "La reducción del yo a un conjunto de reflejos condicionados"
    ]
  },
  {
    enunciado: "¿Por qué el libre albedrío es condición de posibilidad de la ética?",
    correcta: "Porque sin capacidad de elegir no hay imputación moral, mérito ni culpa",
    incorrectas: [
      "Porque la ética solo describe hechos naturales sin juicios",
      "Porque la moralidad depende exclusivamente de emociones automáticas"
    ]
  },
  {
    enunciado: "¿Qué tensión recorre las teorías contemporáneas de la libertad?",
    correcta: "Entre explicaciones naturalistas de la conducta y la defensa de la responsabilidad práctica del agente",
    incorrectas: [
      "Entre el dualismo cartesiano y el politeísmo griego",
      "Entre estética y retórica como únicas formas de verdad"
    ]
  },
  {
    enunciado: "¿Qué criterio práctico ayuda a educar la libertad según la tradición de la virtud?",
    correcta: "El ejercicio habitual de la deliberación prudencial (phronesis) en contextos reales",
    incorrectas: [
      "La renuncia a toda norma para evitar el conflicto",
      "La repetición ciega de actos sin evaluación de fines"
    ]
  },
  {
    enunciado: "¿Qué significa que la dignidad sea ‘incondicionada’ en Kant?",
    correcta: "Que no tiene precio ni equivalente y no puede instrumentalizarse sin violar la moralidad",
    incorrectas: [
      "Que depende del reconocimiento social mayoritario",
      "Que se mide por la utilidad económica del individuo"
    ]
  },
  {
    enunciado: "¿Cómo conecta la libertad con la política en clave republicana?",
    correcta: "Como no-dominación: vivir sin estar sujeto a arbitrariedad, garantizado por instituciones y participación cívica",
    incorrectas: [
      "Como mera acumulación de bienes privados",
      "Como sumisión voluntaria a un líder virtuoso sin leyes"
    ]
  }
];
