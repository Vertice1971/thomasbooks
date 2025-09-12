// 56-El-sujeto-etico-politico-en-spinoza.js
// Formato compatible con la plantilla del proyecto (0-Plantilla-temario.js).
// Cada ítem: { enunciado, correcta, incorrectas: [opción, opción] }

var PREGUNTAS = [
  {
    enunciado: "Según Spinoza, ¿qué significa la fórmula Deus sive Natura?",
    correcta: "Que Dios y la Naturaleza son la misma única sustancia con infinitos atributos",
    incorrectas: [
      "Que Dios creó la Naturaleza pero permanece separado de ella",
      "Que la Naturaleza es una ilusión producto del pecado"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa el ser humano en el sistema metafísico de Spinoza?",
    correcta: "Es un modo finito de la única sustancia, sin sustancialidad propia",
    incorrectas: [
      "Es una sustancia autónoma que interactúa con Dios",
      "Es un compuesto accidental al margen de la sustancia"
    ]
  },
  {
    enunciado: "¿Cómo concibe Spinoza la relación entre mente y cuerpo?",
    correcta: "Paralelismo: son el mismo individuo expresado bajo distintos atributos",
    incorrectas: [
      "Interacción causal: la mente mueve el cuerpo directamente",
      "Emergentismo: la mente surge de la complejidad corporal"
    ]
  },
  {
    enunciado: "¿Qué es el conatus en la ética spinozista?",
    correcta: "La tendencia esencial de cada cosa a perseverar en su ser",
    incorrectas: [
      "Un impulso irracional que debe ser suprimido",
      "Un mandato moral impuesto por la tradición"
    ]
  },
  {
    enunciado: "¿Qué distingue a las acciones de las pasiones en Spinoza?",
    correcta: "Las acciones proceden de causas adecuadas y aumentan la potencia de obrar",
    incorrectas: [
      "Las acciones son espontáneas y las pasiones son deliberadas",
      "Las acciones son sensibles y las pasiones, puramente intelectuales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al conocimiento de segundo género (razón)?",
    correcta: "Ofrece ideas adecuadas por nociones comunes y deducciones necesarias",
    incorrectas: [
      "Se basa en imágenes singulares sin conexión causal",
      "Es una intuición inmediata de la esencia de Dios"
    ]
  },
  {
    enunciado: "¿Qué entiende Spinoza por libertad?",
    correcta: "Comprender la necesidad: actuar desde la esencia conocida de uno mismo",
    incorrectas: [
      "Poder elegir arbitrariamente sin motivo",
      "Ausencia total de causas externas en la conducta"
    ]
  },
  {
    enunciado: "¿Cuál es el fin último de la vida humana según Spinoza?",
    correcta: "La beatitudo: gozo intelectual derivado del conocimiento adecuado",
    incorrectas: [
      "La acumulación de honores y riquezas",
      "El cumplimiento de preceptos por obediencia ciega"
    ]
  },
  {
    enunciado: "¿Cómo define Spinoza la virtud?",
    correcta: "Como potencia de obrar que se identifica con vivir según la razón",
    incorrectas: [
      "Como conformidad con mandatos positivos revelados",
      "Como término medio entre extremos pasionales"
    ]
  },
  {
    enunciado: "En Spinoza, ¿qué es el derecho natural (jus naturale)?",
    correcta: "La misma potencia de cada individuo para existir y actuar",
    incorrectas: [
      "Un conjunto de preceptos innatos grabados por Dios",
      "Una ficción útil creada por los juristas medievales"
    ]
  },
  {
    enunciado: "¿Qué sucede con el derecho natural al constituirse el Estado?",
    correcta: "Se transfiere en parte al poder común y se ejerce como derecho civil",
    incorrectas: [
      "Se extingue por completo y es sustituido por privilegios",
      "Permanece intacto y no guarda relación con el poder político"
    ]
  },
  {
    enunciado: "¿Cuál es el fin del Estado para Spinoza?",
    correcta: "Garantizar seguridad para que las personas puedan vivir y razonar libremente",
    incorrectas: [
      "Imponer una religión única a toda la ciudadanía",
      "Acrecentar la gloria del gobernante por encima del bien común"
    ]
  },
  {
    enunciado: "¿Qué régimen político considera Spinoza más conforme a la razón?",
    correcta: "La democracia, donde el poder reside en la multitud organizada",
    incorrectas: [
      "La teocracia, por asegurar obediencia religiosa",
      "La aristocracia hereditaria como culminación del orden natural"
    ]
  },
  {
    enunciado: "¿Qué significa multitudo en la teoría política spinozista?",
    correcta: "El conjunto de individuos cuya potencia se unifica en un poder común",
    incorrectas: [
      "Una asamblea de sabios que gobierna sin leyes",
      "El pueblo entendido como simple suma de voluntades privadas"
    ]
  },
  {
    enunciado: "¿Qué papel otorga Spinoza a la libertad de filosofar y opinar?",
    correcta: "Debe protegerse, pues su supresión mina la paz y la estabilidad del Estado",
    incorrectas: [
      "Puede suprimirse en nombre de la uniformidad ideológica",
      "Solo compete a los magistrados y no a la ciudadanía"
    ]
  },
  {
    enunciado: "¿Cómo entiende Spinoza la obediencia política racional?",
    correcta: "Como adhesión a leyes que aseguran la utilidad común y la libertad efectiva",
    incorrectas: [
      "Como sumisión incondicional a la voluntad del gobernante",
      "Como cumplimiento exterior sin convicción interna"
    ]
  },
  {
    enunciado: "¿Qué critica Spinoza de las religiones reveladas cuando se politizan?",
    correcta: "La superstición que explota el miedo y fomenta la obediencia servil",
    incorrectas: [
      "El uso de la razón natural para interpretar los textos",
      "La separación entre ética y vida pública"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre ética y política en Spinoza?",
    correcta: "La política prolonga en lo colectivo la racionalidad ética del individuo",
    incorrectas: [
      "Son ámbitos inconexos: la ética es privada y la política, irracional",
      "La ética queda subordinada a la obediencia religiosa"
    ]
  },
  {
    enunciado: "¿Qué condición hace posible la paz civil estable?",
    correcta: "Instituciones que encaucen los afectos y permitan deliberación razonable",
    incorrectas: [
      "El miedo permanente a un poder secreto e imprevisible",
      "El control total de conciencias por censura previa"
    ]
  },
  {
    enunciado: "¿Cómo valora Spinoza el libre albedrío entendido como indiferencia?",
    correcta: "Lo rechaza: toda elección está causalmente determinada",
    incorrectas: [
      "Lo acepta como fundamento de la teología moral",
      "Lo considera un misterio inaccesible a la razón"
    ]
  },
  {
    enunciado: "¿Qué es una idea adecuada en Spinoza?",
    correcta: "Una idea que expresa su causa y permite la acción activa",
    incorrectas: [
      "Una creencia probable aceptada por mayoría",
      "Una imagen sensible clara pero sin causa conocida"
    ]
  },
  {
    enunciado: "¿Qué define a la servidumbre humana (servitus) en la Ética?",
    correcta: "El dominio de las pasiones que disminuye la potencia de actuar",
    incorrectas: [
      "La mera pobreza material al margen de los afectos",
      "El desacuerdo político con el gobierno vigente"
    ]
  },
  {
    enunciado: "¿Cuál es el criterio de legitimidad política en Spinoza?",
    correcta: "La utilidad común: conservación y perfeccionamiento de la vida racional",
    incorrectas: [
      "La antigüedad de la dinastía gobernante",
      "La consagración religiosa del poder"
    ]
  },
  {
    enunciado: "¿Qué implica la noción spinozista de imperium (poder del Estado)?",
    correcta: "Poder efectivo que resulta de la potencia unida de la multitud",
    incorrectas: [
      "Autoridad mística conferida por derecho divino",
      "Suma de voluntades privadas sin institución común"
    ]
  },
  {
    enunciado: "¿Por qué la democracia minimiza la irracionalidad subjetiva?",
    correcta: "Porque transforma afectos dispersos en decisiones públicas bajo leyes comunes",
    incorrectas: [
      "Porque elimina el conflicto al imponer pensamiento único",
      "Porque delega todo poder en un líder carismático"
    ]
  },
  {
    enunciado: "¿Qué sostiene Spinoza sobre el derecho a pensar y decir lo que se piensa?",
    correcta: "Que no puede ser transferido ni anulado sin destruir el propio Estado",
    incorrectas: [
      "Que debe limitarse a materias no políticas",
      "Que pertenece solo a quienes poseen formación teológica"
    ]
  },
  {
    enunciado: "¿Qué es el tercer género de conocimiento (ciencia intuitiva)?",
    correcta: "Conocimiento de la esencia singular de las cosas en Dios",
    incorrectas: [
      "Acumulación de testimonios históricos fiables",
      "Cálculo probabilístico de causas desconocidas"
    ]
  },
  {
    enunciado: "¿Qué función cumplen las leyes civiles en una comunidad racional?",
    correcta: "Encauzar la potencia colectiva hacia la seguridad y la libertad común",
    incorrectas: [
      "Sancionar la superioridad natural de una casta",
      "Someter todas las conductas a ritos religiosos"
    ]
  },
  {
    enunciado: "En Spinoza, ¿cómo se entiende el pacto social?",
    correcta: "Como acuerdo que transfiere potencia al poder común para vivir seguros",
    incorrectas: [
      "Como renuncia absoluta a todo derecho individual",
      "Como contrato revocable a voluntad individual en cualquier momento"
    ]
  },
  {
    enunciado: "¿Qué actitud del gobernante favorece la estabilidad del Estado?",
    correcta: "Fomentar la libertad de juicio y la participación conforme a leyes claras",
    incorrectas: [
      "Ocultar las leyes para mantener el temor",
      "Prohibir la filosofía para evitar la crítica"
    ]
  },
  {
    enunciado: "¿Por qué la superstición es políticamente peligrosa según Spinoza?",
    correcta: "Porque manipula el miedo y sustrae a la razón el juicio público",
    incorrectas: [
      "Porque incrementa el espíritu cívico y la cooperación",
      "Porque obliga a estudiar geometría y lógica"
    ]
  },
  {
    enunciado: "¿Qué distingue el derecho civil del natural en Spinoza?",
    correcta: "El civil es la potencia común institucionalizada en leyes",
    incorrectas: [
      "El civil es innato y el natural, adquirido",
      "El civil rige solo la religión, no la vida social"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa la tolerancia religiosa en su pensamiento político?",
    correcta: "Es condición de la paz, pues las conciencias no pueden ser coaccionadas",
    incorrectas: [
      "Es un mal necesario hasta imponer la religión verdadera",
      "Es indiferente para la estabilidad del Estado"
    ]
  },
  {
    enunciado: "¿Qué significa que el hombre libre vive ‘más allá del bien y del mal’ en Spinoza?",
    correcta: "Que juzga por la utilidad racional, no por prejuicios morales imaginarios",
    incorrectas: [
      "Que carece de criterios para distinguir acciones",
      "Que actúa arbitrariamente sin causa ni finalidad"
    ]
  },
  {
    enunciado: "¿Cómo contribuye el conocimiento adecuado a la vida política?",
    correcta: "Reduce la servidumbre pasional y favorece decisiones públicas razonables",
    incorrectas: [
      "Disuelve todo vínculo social al hacer a todos autosuficientes",
      "Justifica la censura previa de opiniones discrepantes"
    ]
  },
  {
    enunciado: "¿Qué papel cumplen los profetas en el análisis del TTP?",
    correcta: "Transmiten enseñanzas morales útiles, no ciencia ni metafísica",
    incorrectas: [
      "Aportan verdades geométricas demostrativas",
      "Fundamentan el poder estatal por derecho divino"
    ]
  },
  {
    enunciado: "¿Por qué el castigo ejemplar no garantiza la obediencia racional?",
    correcta: "Porque el temor no transforma pasiones en comprensión de la utilidad común",
    incorrectas: [
      "Porque las leyes carecen de fuerza coercitiva",
      "Porque la justicia exige venganza y no corrección"
    ]
  },
  {
    enunciado: "¿Qué evalúa Spinoza al preferir leyes generales a mandatos ad hoc?",
    correcta: "La previsibilidad racional que facilita la obediencia y la confianza",
    incorrectas: [
      "La flexibilidad del capricho del gobernante",
      "La superioridad del secreto de Estado"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre potencia (potentia) y derecho (jus)?",
    correcta: "Se identifican: cada cual tiene tanto derecho como potencia de obrar",
    incorrectas: [
      "El derecho limita por principio cualquier potencia",
      "La potencia es ilegítima si no procede de tradición"
    ]
  },
  {
    enunciado: "¿Qué rasgo hace ‘natural’ a la democracia en Spinoza?",
    correcta: "Integra más plenamente la potencia de la multitud en el poder común",
    incorrectas: [
      "Elimina la necesidad de leyes escritas",
      "Prescinde de toda institución representativa"
    ]
  }
];
