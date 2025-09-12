// temarios/42-Etica-y-politica.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la relación básica entre ética y política en filosofía?",
    correcta: "La ética aporta criterios normativos y la política organiza el poder para realizar bienes comunes",
    incorrectas: [
      "La ética describe hechos y la política estudia emociones",
      "Ambas tratan exclusivamente de técnicas administrativas"
    ]
  },
  {
    enunciado: "¿Qué distingue legalidad de legitimidad?",
    correcta: "La legalidad es conformidad con la ley vigente; la legitimidad es justificación moral del poder",
    incorrectas: [
      "Legalidad y legitimidad significan exactamente lo mismo",
      "La legitimidad es mera popularidad sin razones"
    ]
  },
  {
    enunciado: "¿Cómo vincula Platón ética y política?",
    correcta: "Subordina la política a la justicia y al Bien como fines rectores de la ciudad",
    incorrectas: [
      "Propone separar completamente la política de la moral",
      "Reduce la justicia a utilidad privada"
    ]
  },
  {
    enunciado: "¿Qué idea central aporta Aristóteles a la ética política?",
    correcta: "La política busca la eudaimonía común mediante virtudes y leyes justas",
    incorrectas: [
      "La política solo gestiona intereses individuales sin fin común",
      "La felicidad es irrelevante para la ciudad"
    ]
  },
  {
    enunciado: "Para Tomás de Aquino, ¿qué es el bien común?",
    correcta: "Un fin superior que perfecciona a la comunidad y orienta la autoridad legítima",
    incorrectas: [
      "La suma de preferencias privadas sin límite",
      "Un privilegio exclusivo de las élites"
    ]
  },
  {
    enunciado: "¿Qué inaugura Maquiavelo respecto a ética y política?",
    correcta: "Una autonomía de lo político frente a la moral tradicional y la razón de Estado",
    incorrectas: [
      "La supremacía de la moral teológica sobre la política",
      "La abolición del poder civil a favor de costumbres"
    ]
  },
  {
    enunciado: "¿Qué contrasta Weber en su tipología ética aplicada a la política?",
    correcta: "Ética de la convicción vs. ética de la responsabilidad",
    incorrectas: [
      "Ética de la emoción vs. ética de la fe",
      "Ética de la fuerza vs. ética del arte"
    ]
  },
  {
    enunciado: "¿Qué exige Kant en la esfera pública?",
    correcta: "Publicidad de las máximas y respeto a la dignidad de las personas",
    incorrectas: [
      "Ocultar razones para evitar disenso",
      "Subordinar la dignidad a la utilidad"
    ]
  },
  {
    enunciado: "¿Qué núcleo tiene la justicia como equidad de Rawls?",
    correcta: "La elección imparcial de principios tras un velo de ignorancia",
    incorrectas: [
      "La supremacía de la tradición local sin crítica",
      "El cálculo de placer neto como único criterio"
    ]
  },
  {
    enunciado: "La legitimidad en Habermas depende de…",
    correcta: "Procedimientos discursivos inclusivos, simétricos y públicos",
    incorrectas: [
      "La coacción eficaz del Estado",
      "La opinión del líder sin deliberación"
    ]
  },
  {
    enunciado: "¿Qué propone el republicanismo de Pettit?",
    correcta: "La libertad como no-dominación y el control cívico del poder",
    incorrectas: [
      "La libertad como ausencia total de leyes",
      "La obediencia incondicional al gobernante"
    ]
  },
  {
    enunciado: "¿Qué distingue Isaiah Berlin con sus ‘dos conceptos de libertad’?",
    correcta: "Libertad negativa (no interferencia) y libertad positiva (autogobierno)",
    incorrectas: [
      "Libertad moral y libertad física como sinónimos",
      "Libertad solo como cumplimiento de deseos"
    ]
  },
  {
    enunciado: "¿Qué subraya Hannah Arendt sobre la política?",
    correcta: "La acción en común y la pluralidad en un espacio público de aparición",
    incorrectas: [
      "La política como administración técnica privada",
      "La homogeneidad como ideal supremo"
    ]
  },
  {
    enunciado: "¿Qué condiciones fija Rawls para la desobediencia civil?",
    correcta: "Publicidad, no violencia y apelación a principios de justicia en un régimen casi justo",
    incorrectas: [
      "Secrecía, violencia y ventaja estratégica",
      "Negar toda legalidad sin justificar"
    ]
  },
  {
    enunciado: "Según Locke, el derecho de resistencia se justifica cuando…",
    correcta: "La autoridad viola los derechos naturales y rompe el pacto",
    incorrectas: [
      "El gobernante es impopular aunque respete la ley",
      "Existe cualquier desacuerdo menor"
    ]
  },
  {
    enunciado: "¿Qué expresa el problema de las ‘manos sucias’ (Walzer)?",
    correcta: "Que a veces la autoridad incurre en acciones moralmente dudosas por razones públicas graves",
    incorrectas: [
      "Que toda acción política es impecable",
      "Que la ética no aplica a la política"
    ]
  },
  {
    enunciado: "La teoría de la ‘guerra justa’ exige, entre otros, criterios de…",
    correcta: "Causa justa, autoridad legítima, proporcionalidad y discriminación de objetivos",
    incorrectas: [
      "Victoria a cualquier precio y secreto absoluto",
      "Guerra preventiva siempre permitida"
    ]
  },
  {
    enunciado: "¿Qué significa la ‘Responsabilidad de Proteger’ (R2P)?",
    correcta: "Deber internacional de prevenir atrocidades masivas cuando un Estado falla",
    incorrectas: [
      "Derecho irrestricto a intervenir por intereses económicos",
      "Supremacía absoluta de la soberanía sin excepciones"
    ]
  },
  {
    enunciado: "¿Por qué son un reto ético-político las plataformas digitales?",
    correcta: "Por riesgos de desinformación, opacidad algorítmica y asimetrías de poder",
    incorrectas: [
      "Porque eliminan todo conflicto social",
      "Porque garantizan veracidad sin regulación"
    ]
  },
  {
    enunciado: "¿Qué implica la transparencia en ética pública?",
    correcta: "Acceso claro a información relevante y trazabilidad de decisiones",
    incorrectas: [
      "Publicitar solo éxitos y ocultar fallos",
      "Delegar toda información en consultoras privadas"
    ]
  },
  {
    enunciado: "La rendición de cuentas combina…",
    correcta: "Obligación de explicar (answerability) y posibilidad de sanción (enforceability)",
    incorrectas: [
      "Publicidad sin consecuencias",
      "Sanción sin explicación alguna"
    ]
  },
  {
    enunciado: "¿Qué son los conflictos de interés en el servicio público?",
    correcta: "Situaciones donde intereses privados pueden sesgar decisiones públicas",
    incorrectas: [
      "Diferencias de opinión entre partidos",
      "Críticas de la prensa a políticas vigentes"
    ]
  },
  {
    enunciado: "¿Qué describe la captura regulatoria?",
    correcta: "Cuando reguladores acaban sirviendo intereses de los regulados",
    incorrectas: [
      "Cuando el Estado ignora a todos los sectores",
      "Cuando la ley se aplica con imparcialidad"
    ]
  },
  {
    enunciado: "¿Qué protege el ‘whistleblowing’ en la administración?",
    correcta: "La denuncia responsable de corrupción o irregularidades de interés público",
    incorrectas: [
      "La filtración anónima de datos personales",
      "La propaganda partidista desde cargos"
    ]
  },
  {
    enunciado: "Un estado de excepción éticamente aceptable requiere…",
    correcta: "Legalidad, temporalidad estricta, control judicial y proporcionalidad",
    incorrectas: [
      "Duración indefinida y secreto total",
      "Suspender todos los derechos sin control"
    ]
  },
  {
    enunciado: "El principio de proporcionalidad en políticas públicas pide…",
    correcta: "Medios adecuados, necesarios y equilibrados respecto al fin perseguido",
    incorrectas: [
      "Medidas máximas por precaución siempre",
      "Medios más baratos sin atender a derechos"
    ]
  },
  {
    enunciado: "¿Qué diferencia igualdad de equidad en justicia social?",
    correcta: "Igualdad es trato igual; equidad ajusta según desventajas para lograr justicia",
    incorrectas: [
      "Equidad significa tratar peor a la mayoría",
      "Igualdad y equidad son idénticas"
    ]
  },
  {
    enunciado: "¿Qué es un ‘nudge’ en política pública?",
    correcta: "Un empujón conductual que preserva la libertad pero orienta elecciones",
    incorrectas: [
      "Una obligación coercitiva con sanción penal",
      "Una manipulación que oculta toda información"
    ]
  },
  {
    enunciado: "¿Cómo contribuye el enfoque de capacidades (Sen/Nussbaum) a la ética política?",
    correcta: "Define justicia por oportunidades reales para vivir con dignidad y agencia",
    incorrectas: [
      "Identifica justicia con crecimiento del PIB",
      "Sustituye derechos por costumbres locales"
    ]
  },
  {
    enunciado: "¿Qué subraya Thomas Pogge sobre pobreza global?",
    correcta: "Deberes negativos de no sostener estructuras que perpetúan privaciones graves",
    incorrectas: [
      "Que la justicia global es imposible por definición",
      "Que la pobreza es solo responsabilidad individual"
    ]
  },
  {
    enunciado: "¿Qué destaca Nussbaum sobre emociones en política democrática?",
    correcta: "Pueden educarse para sostener empatía, justicia y cohesión",
    incorrectas: [
      "Deben excluirse por completo de la vida pública",
      "Solo importan para propaganda electoral"
    ]
  },
  {
    enunciado: "¿Qué advierte Hans Jonas para decisiones políticas tecnológicas?",
    correcta: "Un principio de responsabilidad hacia generaciones futuras y la vida vulnerable",
    incorrectas: [
      "Primacía del corto plazo productivo",
      "Indiferencia ante riesgos inciertos"
    ]
  },
  {
    enunciado: "¿Qué denuncia Zuboff con ‘capitalismo de la vigilancia’?",
    correcta: "La extracción masiva de datos y su uso para control y predicción de conductas",
    incorrectas: [
      "La desaparición de toda publicidad digital",
      "La prohibición total del comercio electrónico"
    ]
  },
  {
    enunciado: "¿En qué difieren liberalismo y republicanismo sobre legitimidad?",
    correcta: "El liberalismo resalta no interferencia y derechos; el republicanismo, no-dominación y control cívico",
    incorrectas: [
      "Ambos identifican libertad con obediencia",
      "El republicanismo rechaza cualquier derecho"
    ]
  },
  {
    enunciado: "¿Qué objeta el comunitarismo a ciertos liberalismos?",
    correcta: "La neutralidad excesiva respecto a bienes compartidos y tradiciones",
    incorrectas: [
      "La defensa de derechos básicos",
      "La deliberación pública inclusiva"
    ]
  },
  {
    enunciado: "¿Qué aporta el agonismo democrático (Mouffe)?",
    correcta: "Reconocer el conflicto como constitutivo y convertir enemigos en adversarios legítimos",
    incorrectas: [
      "Eliminar el disenso mediante unanimidad forzosa",
      "Sustituir la política por tecnocracia"
    ]
  },
  {
    enunciado: "¿Qué significan ‘input’, ‘throughput’ y ‘output’ en legitimidad democrática?",
    correcta: "Entrada inclusiva, calidad procesual y resultados efectivos",
    incorrectas: [
      "Recursos, gasto y propaganda",
      "Ideología, carisma y obediencia"
    ]
  },
  {
    enunciado: "¿Qué asegura el Estado de derecho frente al poder?",
    correcta: "Sujeción de gobernantes y gobernados a leyes públicas, separación de poderes y control judicial",
    incorrectas: [
      "Discrecionalidad ilimitada del ejecutivo",
      "Primacía del líder sobre la ley"
    ]
  },
  {
    enunciado: "¿Cómo se define la corrupción en ética pública?",
    correcta: "Uso del cargo para beneficio privado vulnerando el interés general",
    incorrectas: [
      "Crítica ciudadana a las políticas",
      "Cambio de opinión por nueva evidencia"
    ]
  },
  {
    enunciado: "Un criterio ético para evaluar políticas es…",
    correcta: "Realizar evaluación de impacto en derechos y grupos vulnerables",
    incorrectas: [
      "Priorizar solo el ahorro presupuestario",
      "Evitar métricas para no rendir cuentas"
    ]
  },
  {
    enunciado: "Síntesis operativa de ética y política: una actuación correcta requiere…",
    correcta: "Fines justos y procedimientos públicos imparciales con responsabilidad por consecuencias",
    incorrectas: [
      "Resultados a cualquier precio",
      "Procedimientos secretos sin justificación"
    ]
  }
];
