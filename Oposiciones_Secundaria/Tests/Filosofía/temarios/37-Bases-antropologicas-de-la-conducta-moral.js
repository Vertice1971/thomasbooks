// temarios/37-Bases-antropologicas-de-la-conducta-moral.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué significa afirmar que la moralidad tiene una base antropológica?",
    correcta: "Que se fundamenta en rasgos de la naturaleza humana articulados con la cultura",
    incorrectas: [
      "Que depende exclusivamente de decretos legales contingentes",
      "Que es un fenómeno puramente biológico sin dimensión social"
    ]
  },
  {
    enunciado: "Según José Luis López Aranguren, la moral como 'estructura' alude a...",
    correcta: "Una disposición formal y estable de la existencia humana hacia normas y valores",
    incorrectas: [
      "Un código positivo de leyes coercitivas",
      "Un conjunto de hábitos instintivos preprogramados"
    ]
  },
  {
    enunciado: "En la distinción 'moral como contenido', ¿qué se destaca?",
    correcta: "La concreción histórica de normas, valores y principios en una comunidad",
    incorrectas: [
      "La universalidad inmutable de todos los códigos morales",
      "La indiferencia de la moral ante el contexto cultural"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la libertad en la conducta moral desde una perspectiva clásica?",
    correcta: "Es condición de posibilidad del obrar responsable y del juicio moral",
    incorrectas: [
      "Es irrelevante, pues todo acto moral es involuntario",
      "Se opone siempre a cualquier norma cultural"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia relevante entre acción humana y conducta animal en ética filosófica?",
    correcta: "La intencionalidad reflexiva y la capacidad de justificación normativa",
    incorrectas: [
      "La mera movilidad corporal",
      "La ausencia de emociones en los animales"
    ]
  },
  {
    enunciado: "Para Tomás de Aquino, ¿en qué se funda la moralidad humana?",
    correcta: "En la naturaleza racional y libre que participa de la ley natural",
    incorrectas: [
      "En el relativismo cultural absoluto",
      "En la obediencia ciega sin deliberación"
    ]
  },
  {
    enunciado: "¿Qué subraya Ortega y Gasset al caracterizar al ser humano como 'proyecto'?",
    correcta: "Que debe construirse a sí mismo, eligiendo normas y fines",
    incorrectas: [
      "Que su conducta está fijada por el instinto",
      "Que la historia personal es irrelevante para la ética"
    ]
  },
  {
    enunciado: "¿Qué muestra la psicología evolutiva de Piaget sobre el desarrollo moral?",
    correcta: "Un tránsito del realismo moral heterónomo a la autonomía",
    incorrectas: [
      "La invariabilidad de las normas desde la infancia",
      "La ausencia de juego en la adquisición de reglas"
    ]
  },
  {
    enunciado: "¿Qué propone Kohlberg en su teoría del juicio moral?",
    correcta: "Niveles preconvencional, convencional y postconvencional en la razonamiento moral",
    incorrectas: [
      "Que el razonamiento moral no cambia con la edad",
      "Que las emociones impiden cualquier juicio moral"
    ]
  },
  {
    enunciado: "¿Qué crítica introduce Carol Gilligan a Kohlberg?",
    correcta: "Que su modelo privilegia una 'ética de la justicia' e infravalora la 'ética del cuidado'",
    incorrectas: [
      "Que la moral carece de dimensión social",
      "Que el razonamiento moral es idéntico al lógico-formal"
    ]
  },
  {
    enunciado: "¿Cómo entiende Durkheim la moral?",
    correcta: "Como un hecho social que integra y cohesiona a la comunidad",
    incorrectas: [
      "Como un fenómeno estrictamente privado y asocial",
      "Como un instinto biológico sin variación cultural"
    ]
  },
  {
    enunciado: "¿Qué tensión estudia la antropología cultural respecto a la moral?",
    correcta: "Universalismo de ciertos valores frente a relativismo cultural",
    incorrectas: [
      "Determinismo biológico irrebatible",
      "Reducción de la moral a economía de mercado"
    ]
  },
  {
    enunciado: "¿Qué aporta Charles Darwin a la comprensión de la moral?",
    correcta: "Una hipótesis evolutiva sobre el origen del altruismo y la simpatía",
    incorrectas: [
      "La defensa de una moral revelada e inmutable",
      "La negación del papel de la selección natural"
    ]
  },
  {
    enunciado: "¿Qué hallazgos clave aporta Frans de Waal a la etología moral?",
    correcta: "Evidencias de empatía, reciprocidad y reconciliación en primates",
    incorrectas: [
      "La inexistencia de cooperación animal",
      "La superioridad moral automática del humano por naturaleza"
    ]
  },
  {
    enunciado: "La 'aversión a la inequidad' en primates, mostrada por Brosnan y de Waal, sugiere que...",
    correcta: "Existen sensibilidades proto-morales relacionadas con justicia distributiva",
    incorrectas: [
      "Los primates carecen de cualquier preferencia social",
      "La justicia es un concepto exclusivamente legal"
    ]
  },
  {
    enunciado: "¿Qué diferencia etológica destaca a chimpancés y bonobos en clave moral?",
    correcta: "Los bonobos muestran más conductas de apaciguamiento y cooperación sexual-social",
    incorrectas: [
      "Los chimpancés carecen por completo de cooperación",
      "Los bonobos son naturalmente incapaces de empatía"
    ]
  },
  {
    enunciado: "Según Antonio Damasio, ¿qué papel tienen las emociones en la decisión moral?",
    correcta: "Funcionan como marcadores somáticos que orientan la deliberación",
    incorrectas: [
      "Bloquean siempre la racionalidad práctica",
      "Son irrelevantes ante reglas abstractas"
    ]
  },
  {
    enunciado: "¿Qué sugiere la hipótesis de neuronas espejo para la moralidad?",
    correcta: "Que la empatía podría tener una base neurobiológica de resonancia",
    incorrectas: [
      "Que la empatía es puramente lingüística",
      "Que la imitación impide el juicio moral"
    ]
  },
  {
    enunciado: "En los estudios de Joshua Greene sobre dilemas como el 'tranvía', ¿qué modelo propone?",
    correcta: "Un modelo de doble proceso: emocional e intuitivo frente a deliberativo",
    incorrectas: [
      "Un proceso exclusivamente lógico sin afectos",
      "Una aleatoriedad sin patrón cognitivo"
    ]
  },
  {
    enunciado: "La teoría de las 'fundaciones morales' de Jonathan Haidt defiende que...",
    correcta: "Distintas sensibilidades morales (cuidado, justicia, lealtad, autoridad, pureza, libertad) se combinan culturalmente",
    incorrectas: [
      "La moral se reduce a maximizar el placer individual",
      "No hay diferencias morales entre culturas"
    ]
  },
  {
    enunciado: "¿Qué muestran los estudios interculturales del 'juego del ultimátum' (Henrich y col.)?",
    correcta: "Variabilidad cultural en nociones de equidad y castigo al rechazo",
    incorrectas: [
      "Uniformidad absoluta de criterios morales",
      "Irrelevancia de la cultura en decisiones económicas"
    ]
  },
  {
    enunciado: "¿Cómo integran Nussbaum y Sen la moral en su enfoque de capacidades?",
    correcta: "Vinculando dignidad, agencia y oportunidades reales para una vida floreciente",
    incorrectas: [
      "Identificando moral con crecimiento del PIB",
      "Negando la universalidad de cualquier derecho humano"
    ]
  },
  {
    enunciado: "¿Qué propone Habermas para la validez de normas morales?",
    correcta: "Una justificación discursiva mediante la racionalidad comunicativa",
    incorrectas: [
      "La imposición técnica de expertos",
      "El consenso por aclamación sin argumentos"
    ]
  },
  {
    enunciado: "¿Qué recupera MacIntyre con su ética de las virtudes?",
    correcta: "La centralidad de prácticas, bienes internos y tradiciones",
    incorrectas: [
      "La autosuficiencia del individuo al margen de comunidades",
      "El decisionismo moral sin narratividad"
    ]
  },
  {
    enunciado: "¿Cuál es el núcleo del 'principio de responsabilidad' de Hans Jonas?",
    correcta: "Responder ante las consecuencias futuras de nuestras acciones tecnológicas",
    incorrectas: [
      "Atenerse solo a intenciones presentes",
      "Desentenderse de impactos ecológicos"
    ]
  },
  {
    enunciado: "Rawls entiende la justicia como equidad prioritariamente mediante...",
    correcta: "Un procedimiento hipotético de elección tras un velo de ignorancia",
    incorrectas: [
      "La maximización de utilidad sin restricciones",
      "La tradición como única fuente de legitimidad"
    ]
  },
  {
    enunciado: "¿Qué aporta la etología del cuidado parental a la comprensión de la moral?",
    correcta: "Ilustra bases de empatía y cooperación relevantes para el desarrollo moral",
    incorrectas: [
      "Demuestra la futilidad de todas las normas",
      "Sostiene que el cuidado es antinatural"
    ]
  },
  {
    enunciado: "¿Qué relación se establece entre cultura y biología en la génesis de normas?",
    correcta: "Co-constitución: predisposiciones biológicas moduladas por aprendizaje e instituciones",
    incorrectas: [
      "Autonomía absoluta de lo biológico sin cultura",
      "Independencia total de la cultura respecto del cuerpo"
    ]
  },
  {
    enunciado: "¿Qué muestra la reconciliación post-conflicto en primates para la proto-moralidad?",
    correcta: "Mecanismos de reparación social que reducen la agresión futura",
    incorrectas: [
      "Ausencia de memoria social en animales",
      "Indiferencia ante rupturas de vínculo"
    ]
  },
  {
    enunciado: "¿Por qué es relevante la teoría del apego (Bowlby/Ainsworth) para la moral?",
    correcta: "Porque patrones de apego influyen en empatía, regulación emocional y prosocialidad",
    incorrectas: [
      "Porque elimina la necesidad de normas",
      "Porque reduce la moral a lenguaje"
    ]
  },
  {
    enunciado: "¿Qué advierte el debate 'naturaleza vs. cultura' en ética?",
    correcta: "Que ni el biologicismo ni el relativismo extremo explican por sí solos la moralidad",
    incorrectas: [
      "Que la moral es genética y fija",
      "Que la moral es arbitraria y sin función"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la educación ética en la formación del carácter?",
    correcta: "Articula virtudes, hábitos deliberativos y sensibilidad al otro",
    incorrectas: [
      "Sustituye la autonomía por obediencia ciega",
      "Evita el razonamiento en favor de castigos"
    ]
  },
  {
    enunciado: "¿Qué sugiere la sociología sobre instituciones y moral?",
    correcta: "Que las instituciones estabilizan expectativas y canalizan conductas prosociales",
    incorrectas: [
      "Que desincentivan toda cooperación",
      "Que son prescindibles para la convivencia"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre emociones morales (culpa, vergüenza, indignación) y normas?",
    correcta: "Funcionan como reguladores sociales que refuerzan expectativas compartidas",
    incorrectas: [
      "Son obstáculos irracionales que deben suprimirse",
      "No guardan vínculo con la vida social"
    ]
  },
  {
    enunciado: "¿Por qué es clave distinguir entre empatía y simpatía en moral?",
    correcta: "Porque la empatía es ponerse en el lugar del otro y la simpatía orientar ayuda compasiva",
    incorrectas: [
      "Porque ambas son idénticas e intercambiables",
      "Porque ninguna influye en la prosocialidad"
    ]
  },
  {
    enunciado: "¿Qué enseñan los estudios sobre cooperación indirecta y reputación?",
    correcta: "Que la reputación y el castigo altruista sostienen normas en grupos amplios",
    incorrectas: [
      "Que la cooperación requiere parentesco cercano",
      "Que la reputación es irrelevante para la moral"
    ]
  },
  {
    enunciado: "En términos antropológicos, ¿qué expresa el 'universalismo débil' de valores?",
    correcta: "Que existen núcleos valorativos transversales modulados por contextos culturales",
    incorrectas: [
      "Que todas las culturas comparten idénticas normas",
      "Que no hay ningún valor común en la humanidad"
    ]
  },
  {
    enunciado: "¿Qué rol cumple la deliberación pública en sociedades plurales?",
    correcta: "Permite justificar normas aceptables para personas con cosmovisiones distintas",
    incorrectas: [
      "Impone silencios en favor de expertos",
      "Sustituye derechos por modas de opinión"
    ]
  },
  {
    enunciado: "¿Qué muestra la cooperación entre no parientes en humanos frente a otros mamíferos?",
    correcta: "Una prosocialidad ampliada sostenida por lenguaje, normas e instituciones",
    incorrectas: [
      "Una incapacidad humana para cooperar fuera del clan",
      "Una dependencia exclusiva de la fuerza física"
    ]
  },
  {
    enunciado: "¿Por qué es relevante integrar etología, psicología y filosofía en el estudio de la moral?",
    correcta: "Porque ofrece una comprensión multiescalar del fenómeno moral sin reduccionismos",
    incorrectas: [
      "Porque disuelve la ética en biología",
      "Porque niega la racionalidad práctica"
    ]
  },
  {
    enunciado: "¿Qué idea central resume la 'base antropológica' de la conducta moral?",
    correcta: "La moral emerge de capacidades humanas naturales configuradas por cultura, lenguaje e instituciones",
    incorrectas: [
      "La moral es un accidente histórico sin función",
      "La moral es un reflejo inevitable de la economía"
    ]
  }
];
