// temarios/49-La-justicia-en-la-polis-como-objetivo-de-la-filosofia-de-platon.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué problema central intenta resolver Platón al desarrollar su teoría de la justicia?",
    correcta: "Cómo fundamentar racionalmente el orden de la ciudad y del alma frente al relativismo sofista",
    incorrectas: [
      "Cómo sustituir la filosofía por la poesía trágica en la educación",
      "Cómo eliminar la ley escrita en favor de costumbres orales"
    ]
  },
  {
    enunciado: "¿Qué desencadena el debate sobre la justicia en la República?",
    correcta: "Los retos de Trasímaco, Glaucón y Adimanto sobre si la justicia es más ventajosa que la injusticia",
    incorrectas: [
      "Una disputa técnica sobre astronomía entre Sócrates y Aristófanes",
      "La crítica de Sócrates a la aritmética pitagórica"
    ]
  },
  {
    enunciado: "¿Cómo define Platón la justicia en la ciudad?",
    correcta: "Que cada clase cumpla su función sin entrometerse en la de las demás",
    incorrectas: [
      "La obediencia ciega a los gobernantes en cualquier circunstancia",
      "El reparto igualitario de bienes con independencia del mérito"
    ]
  },
  {
    enunciado: "¿Cuál es la relación entre justicia y otras virtudes en la ciudad platónica?",
    correcta: "La justicia es el principio estructurador que hace posibles prudencia, valentía y templanza",
    incorrectas: [
      "La justicia es un subproducto aleatorio de la prosperidad económica",
      "La justicia es idéntica a la valentía de los guardianes"
    ]
  },
  {
    enunciado: "¿Qué paralelismo traza Platón entre la ciudad y el alma?",
    correcta: "Tres clases en la ciudad corresponden a tres partes del alma: razón, ánimo e inclinación apetitiva",
    incorrectas: [
      "Cuatro clases en la ciudad corresponden a cuatro elementos materiales",
      "Dos clases en la ciudad corresponden a cuerpo y alma sin subdivisión"
    ]
  },
  {
    enunciado: "¿Qué exige la justicia en el alma, según Platón?",
    correcta: "Armonía entre partes con hegemonía de la razón, apoyo del thymós y moderación del deseo",
    incorrectas: [
      "Supresión completa de los deseos corporales",
      "Alternancia periódica del mando entre razón y apetito"
    ]
  },
  {
    enunciado: "¿Qué virtud caracteriza a los gobernantes en la ciudad justa?",
    correcta: "Prudencia (sabiduría) para conocer el bien común",
    incorrectas: [
      "Destreza retórica para vencer siempre en los tribunales",
      "Fuerza física para imponer decisiones por la fuerza"
    ]
  },
  {
    enunciado: "¿Qué papel tiene el thymós (ánimo) en la psicología moral platónica?",
    correcta: "Aliarse con la razón para sostener la valentía y la disciplina",
    incorrectas: [
      "Identificarse con los deseos para maximizar el placer",
      "Sustituir a la razón como fuente suprema de conocimiento"
    ]
  },
  {
    enunciado: "¿Qué principio económico-político sustenta la justicia en la República?",
    correcta: "Especialización funcional: cada cual al trabajo para el que está mejor dispuesto",
    incorrectas: [
      "Rotación obligatoria de oficios cada año",
      "Acumulación ilimitada de riqueza en manos de los gobernantes"
    ]
  },
  {
    enunciado: "¿Qué instrumentos educativos propone Platón para formar guardianes?",
    correcta: "Música y gimnasia, seguidas de matemáticas y dialéctica",
    incorrectas: [
      "Retórica competitiva sin examen crítico",
      "Adivinación y ritos mistéricos como currículo central"
    ]
  },
  {
    enunciado: "¿Qué función cumple la ‘mentira noble’ o mito de los metales?",
    correcta: "Fundar la cohesión cívica presentando naturalezas diferenciadas para oficios diversos",
    incorrectas: [
      "Negar la posibilidad de movilidad entre clases de por vida",
      "Sustituir la ley por tradiciones mágicas"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre justicia y felicidad (eudaimonía) en Platón?",
    correcta: "La ciudad justa posibilita el florecimiento ordenado de sus miembros",
    incorrectas: [
      "La justicia sacrifica necesariamente la felicidad individual",
      "La felicidad depende solo de la riqueza privada"
    ]
  },
  {
    enunciado: "¿Por qué defiende Platón la participación de las mujeres guardianas?",
    correcta: "Porque la capacidad para la virtud cívica no depende del sexo sino de la naturaleza del alma",
    incorrectas: [
      "Porque las tareas militares requieren menos formación",
      "Porque la producción económica queda reservada a varones"
    ]
  },
  {
    enunciado: "¿Qué justifica el gobierno de los filósofos según la República?",
    correcta: "Su conocimiento de la Idea de Bien, criterio último del orden justo",
    incorrectas: [
      "Su linaje aristocrático y acumulación de patrimonio",
      "Su superioridad física sobre el resto de ciudadanos"
    ]
  },
  {
    enunciado: "¿Qué representa la Línea Dividida?",
    correcta: "Una jerarquía de modos de conocer desde opinión a ciencia y dialéctica",
    incorrectas: [
      "Una clasificación de regímenes políticos por riqueza",
      "Un esquema astronómico sobre el movimiento de los planetas"
    ]
  },
  {
    enunciado: "¿Qué enseña la alegoría de la cueva para la política?",
    correcta: "Que el gobernante debe contemplar el Bien y volver a la cueva para gobernar",
    incorrectas: [
      "Que la educación consiste en acumular opiniones mayoritarias",
      "Que el conocimiento verdadero exime del servicio público"
    ]
  },
  {
    enunciado: "¿Qué propiedad se exige a los guardianes respecto a bienes y familia?",
    correcta: "Comunidad de bienes y regulaciones estrictas para evitar corrupción",
    incorrectas: [
      "Acumulación de riqueza como estímulo de excelencia",
      "Herencia obligatoria de cargos políticos"
    ]
  },
  {
    enunciado: "¿Cómo responde Platón a Trasímaco en la República?",
    correcta: "Negando que justicia sea conveniencia del más fuerte y defendiendo su racionalidad",
    incorrectas: [
      "Aceptando que la ley es pura imposición del gobernante",
      "Sustituyendo la justicia por pura eficacia militar"
    ]
  },
  {
    enunciado: "¿Qué rol tiene la templanza en la ciudad?",
    correcta: "Vincula a las clases mediante acuerdo sobre quién debe mandar y obedecer",
    incorrectas: [
      "Equivale a la exuberancia festiva de los productores",
      "Es exclusiva de los filósofos-reyes"
    ]
  },
  {
    enunciado: "¿Cuál es la secuencia de degeneración de regímenes en la República?",
    correcta: "Aristocracia, timocracia, oligarquía, democracia, tiranía",
    incorrectas: [
      "Democracia, aristocracia, oligarquía, timocracia, tiranía",
      "Oligarquía, democracia, aristocracia, tiranía, timocracia"
    ]
  },
  {
    enunciado: "¿Qué critica Platón de la democracia ateniense?",
    correcta: "La erosión del orden por la primacía del deseo y la igualdad sin medida",
    incorrectas: [
      "La ausencia total de deliberación pública",
      "Su prohibición de la educación musical y gimnástica"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la tiranía en el análisis platónico?",
    correcta: "Domina el deseo desordenado y la ciudad se somete al tirano",
    incorrectas: [
      "Es el régimen de la sabiduría compartida",
      "Es la fase intermedia ideal entre oligarquía y aristocracia"
    ]
  },
  {
    enunciado: "¿Cómo se concibe la ley en el Platón tardío de las Leyes?",
    correcta: "Como instrumento prioritario de educación y gobierno cuando falta el sabio",
    incorrectas: [
      "Como obstáculo inevitable para la virtud pública",
      "Como sustituto de toda forma de paideia"
    ]
  },
  {
    enunciado: "¿Qué diferencia al Político respecto de la República?",
    correcta: "Subraya la ‘medida’ del arte de gobernar más allá del ideal del filósofo-rey",
    incorrectas: [
      "Abandona toda referencia a la educación",
      "Identifica justicia con mera fuerza coercitiva"
    ]
  },
  {
    enunciado: "¿Cómo se integra la censura poética en la educación?",
    correcta: "Orientando los mitos para modelar el carácter acorde con la virtud",
    incorrectas: [
      "Eliminando toda poesía por ser incompatible con la ley",
      "Imponiendo competencia desordenada de rapsodas"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene la selección educativa descrita por Platón?",
    correcta: "Detectar naturalezas aptas para tareas de guardia y gobierno",
    incorrectas: [
      "Asegurar que todos ejerzan cargos por turno",
      "Garantizar privilegios hereditarios inamovibles"
    ]
  },
  {
    enunciado: "¿Qué argumento ofrecen Glaucón y Adimanto con el anillo de Giges?",
    correcta: "Que incluso el justo, con impunidad, optaría por la injusticia si la justicia no fuera valiosa en sí",
    incorrectas: [
      "Que la justicia es siempre útil por su recompensa divina inmediata",
      "Que la injusticia produce armonía en el alma"
    ]
  },
  {
    enunciado: "¿Dónde sitúa Platón el criterio último de normatividad?",
    correcta: "En la Idea de Bien, ‘más allá del ser en dignidad y poder’",
    incorrectas: [
      "En el consenso mayoritario de la asamblea",
      "En el éxito militar de la polis"
    ]
  },
  {
    enunciado: "¿Qué vínculo postula Platón entre conocimiento y poder político?",
    correcta: "El gobierno legítimo exige conocimiento del bien común",
    incorrectas: [
      "El poder deriva exclusivamente de la riqueza",
      "La persuasión retórica legitima cualquier dominio"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la matemática en la paideia superior?",
    correcta: "Preparar el alma para la dialéctica al dirigirla a lo inteligible",
    incorrectas: [
      "Sustituir la ética por el cálculo utilitarista",
      "Limitar la educación a técnicas contables"
    ]
  },
  {
    enunciado: "¿Cómo entiende Platón el bien individual respecto del bien común?",
    correcta: "El bien del individuo florece en la estructura ordenada del conjunto",
    incorrectas: [
      "El bien del individuo exige aislarse de la polis",
      "El bien común es irrelevante para la virtud personal"
    ]
  },
  {
    enunciado: "¿Qué vicio institucional combate la comunidad de bienes de los guardianes?",
    correcta: "La corrupción derivada de intereses privados",
    incorrectas: [
      "La escasez de mano de obra agrícola",
      "La falta de entrenamiento gimnástico"
    ]
  },
  {
    enunciado: "¿Qué función atribuye Platón a la ley aun en la ciudad ideal?",
    correcta: "Servir de marco estable que guía la educación y el hábito",
    incorrectas: [
      "Sustituir el juicio prudente del gobernante",
      "Abolir la deliberación racional"
    ]
  },
  {
    enunciado: "¿Qué crítica formula Aristóteles a la comunidad de bienes en la República?",
    correcta: "Que diluye la responsabilidad y enfría la amistad cívica",
    incorrectas: [
      "Que impide la aritmética política",
      "Que genera exceso de propiedad privada"
    ]
  },
  {
    enunciado: "¿Qué relación establece Platón entre iusticia y stásis (facción interna)?",
    correcta: "La justicia previene la stásis al ordenar funciones y deseos",
    incorrectas: [
      "La justicia fomenta facciones para equilibrar poderes",
      "La stásis es condición de libertad auténtica"
    ]
  },
  {
    enunciado: "¿Qué distingue la prudencia (phronēsis) de la mera destreza retórica?",
    correcta: "Conocer fines verdaderos y ordenar medios al bien común",
    incorrectas: [
      "Incrementar votos independientemente de la verdad",
      "Dominar técnicas de memoria sin juicio"
    ]
  },
  {
    enunciado: "¿Cómo entiende Platón la libertad auténtica?",
    correcta: "Como autodominio racional frente a la tiranía del deseo",
    incorrectas: [
      "Como ausencia total de ley y medida",
      "Como privilegio hereditario de los guardianes"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la timocracia en la tipología platónica?",
    correcta: "Predominio del honor y del thymós sobre la razón",
    incorrectas: [
      "Gobierno de los productores por su riqueza",
      "Dominio del placer desenfrenado"
    ]
  },
  {
    enunciado: "¿Qué justifica el ‘regreso’ del filósofo a la cueva?",
    correcta: "El deber de gobernar y educar a quienes permanecen en la doxa",
    incorrectas: [
      "El deseo de competir en certámenes poéticos",
      "El rechazo de la contemplación intelectual"
    ]
  },
  {
    enunciado: "¿Por qué la justicia es fin de la filosofía política en Platón?",
    correcta: "Porque integra psicología, educación y ley en un orden orientado al Bien",
    incorrectas: [
      "Porque evita discutir sobre la virtud individual",
      "Porque renuncia a todo criterio universal"
    ]
  }
];
