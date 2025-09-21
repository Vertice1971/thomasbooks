// temarios/33-el-discurso-literario-producto-linguistico-estetico-social-estilistica-retorica.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo define prototípicamente al discurso literario según Jakobson?",
    correcta: "El predominio de la función poética, que focaliza la forma del mensaje.",
    incorrectas: [
      "La primacía absoluta de la función referencial en todo contexto.",
      "La eliminación total de recursos expresivos para lograr neutralidad."
    ]
  },
  {
    enunciado: "¿Qué designa el concepto de foregrounding o ‘desviación’ en poética?",
    correcta: "La saliencia de rasgos formales que llaman la atención por su alejamiento de la norma.",
    incorrectas: [
      "La estricta adhesión a la norma para borrar cualquier efecto estético.",
      "La sustitución del contenido por paratextos sin texto principal."
    ]
  },
  {
    enunciado: "Según Shklovski, ¿qué busca el ‘extrañamiento’ (ostranenie)?",
    correcta: "Desautomatizar la percepción para renovar la experiencia del lector.",
    incorrectas: [
      "Simplificar la dicción hasta su mínima expresión informativa.",
      "Suprimir las figuras de pensamiento a favor de tecnicismos."
    ]
  },
  {
    enunciado: "Para el Círculo de Praga (Mukarovsky), la literariedad se explica por:",
    correcta: "La actualización respecto a una norma y la valoración estética del lenguaje.",
    incorrectas: [
      "La ausencia de valores sociales en el texto artístico.",
      "La identidad perfecta entre lengua literaria y lengua cotidiana."
    ]
  },
  {
    enunciado: "¿Cuál de las parejas de funciones está correctamente asociada a Jakobson?",
    correcta: "Poética–mensaje; conativa–destinatario; emotiva–emisor.",
    incorrectas: [
      "Poética–emisor; conativa–mensaje; emotiva–destinatario.",
      "Referencial–canal; fática–contexto; metalingüística–código."
    ]
  },
  {
    enunciado: "¿Qué propone Jauss con el ‘horizonte de expectativas’?",
    correcta: "Que la recepción está mediada por expectativas históricas del público.",
    incorrectas: [
      "Que la obra solo se explica por la biografía del autor.",
      "Que toda interpretación válida debe coincidir con la del autor."
    ]
  },
  {
    enunciado: "¿Qué es el ‘lector modelo’ según Eco?",
    correcta: "Una competencia prevista por el texto para cooperar en su interpretación.",
    incorrectas: [
      "El lector real y empírico que compra el libro.",
      "Un personaje ficticio que narra la historia."
    ]
  },
  {
    enunciado: "¿Qué aporta el dialogismo de Bajtín al estudio de la literatura?",
    correcta: "La idea de polifonía y heteroglosia en la construcción del sentido.",
    incorrectas: [
      "La reducción del texto a un monólogo autoral invariable.",
      "La prohibición de mezclar registros dentro de una obra."
    ]
  },
  {
    enunciado: "Señala la relación correcta en la transtextualidad de Genette.",
    correcta: "Paratexto: umbrales como títulos, prólogos y notas.",
    incorrectas: [
      "Metatexto: relación de rima entre versos consecutivos.",
      "Hipertexto: notas a pie de página del propio texto."
    ]
  },
  {
    enunciado: "La distinción mímesis/diégesis alude a:",
    correcta: "Mostrar frente a narrar, respectivamente, modos de representación.",
    incorrectas: [
      "Relación autor–lector frente a relación personaje–escenario.",
      "Versificación frente a prosa libre en el mismo texto."
    ]
  },
  {
    enunciado: "¿Qué es un ‘leitmotiv’ en el análisis literario?",
    correcta: "Un motivo recurrente que organiza y unifica sentidos en la obra.",
    incorrectas: [
      "Un tecnicismo retórico que prohíbe la repetición.",
      "Una figura exclusivamente fónica sin valor semántico."
    ]
  },
  {
    enunciado: "La isotopía designa en semiótica literaria:",
    correcta: "La recurrencia coherente de rasgos semánticos que estabilizan la lectura.",
    incorrectas: [
      "La repetición de grafías sin contenido semántico.",
      "La ruptura aleatoria de la cohesión textual."
    ]
  },
  {
    enunciado: "Indica la definición correcta de metáfora.",
    correcta: "Traslado semántico por semejanza que reinterpreta un dominio en términos de otro.",
    incorrectas: [
      "Sustitución por contigüidad espacial o causal exclusivamente.",
      "Nombrar el todo por la parte de forma literal."
    ]
  },
  {
    enunciado: "¿Qué distingue metonimia de sinécdoque?",
    correcta: "La metonimia opera por contigüidad; la sinécdoque por inclusión parte–todo.",
    incorrectas: [
      "Ambas dependen exclusivamente de rima consonante.",
      "La sinécdoque requiere siempre comparación explícita."
    ]
  },
  {
    enunciado: "Selecciona la opción que define mejor el oxímoron.",
    correcta: "Unión de términos aparentemente contradictorios con efecto de tensión semántica.",
    incorrectas: [
      "Repetición de la misma palabra al inicio de versos consecutivos.",
      "Sustitución del nombre propio por un circunloquio."
    ]
  },
  {
    enunciado: "La ironía suele consistir en:",
    correcta: "Decir lo contrario de lo que se quiere dar a entender en un contexto reconocible.",
    incorrectas: [
      "Repetir mecánicamente una idea para enfatizarla.",
      "Suprimir toda valoración para lograr neutralidad."
    ]
  },
  {
    enunciado: "La hipérbole se usa principalmente para:",
    correcta: "Exagerar con fines expresivos o irónicos.",
    incorrectas: [
      "Reducir cualquier rasgo distintivo del estilo.",
      "Asegurar literalidad estricta del enunciado."
    ]
  },
  {
    enunciado: "¿Qué es la prosopopeya o personificación?",
    correcta: "Atribuir rasgos humanos a entidades no humanas o abstractas.",
    incorrectas: [
      "Sustituir un nombre común por uno propio alusivo.",
      "Eliminar el sujeto gramatical de toda oración."
    ]
  },
  {
    enunciado: "La litotes se reconoce por:",
    correcta: "Afirmar atenuando mediante la negación del contrario.",
    incorrectas: [
      "Acumular sinónimos en una enumeración caótica.",
      "Reforzar mediante exclamaciones continuas."
    ]
  },
  {
    enunciado: "¿Qué función cumple el apóstrofe?",
    correcta: "Interpelar directamente a un destinatario real o imaginario.",
    incorrectas: [
      "Romper la métrica para crear rima interna.",
      "Introducir una cita bibliográfica obligatoria."
    ]
  },
  {
    enunciado: "La aliteración produce efecto estético mediante:",
    correcta: "La repetición de sonidos semejantes con valor expresivo.",
    incorrectas: [
      "La supresión de toda repetición fónica.",
      "La dislocación sintáctica sin patrón sonoro."
    ]
  },
  {
    enunciado: "Diferencia correcta entre rima asonante y consonante.",
    correcta: "Asonante: coinciden vocales; consonante: coinciden vocales y consonantes desde la última tónica.",
    incorrectas: [
      "Asonante: coincide todo; consonante: solo vocales.",
      "No existe diferencia formal entre ambas."
    ]
  },
  {
    enunciado: "El encabalgamiento en poesía suele:",
    correcta: "Romper la unidad sintáctica al final del verso para continuar en el siguiente.",
    incorrectas: [
      "Sincronizar siempre sintaxis y verso de forma rígida.",
      "Anular la necesidad de puntuación en el poema."
    ]
  },
  {
    enunciado: "El hipérbaton consiste en:",
    correcta: "Alterar el orden habitual de los constituyentes con efecto expresivo.",
    incorrectas: [
      "Eliminar nexos de coordinación en una serie.",
      "Repetir el mismo inicio de verso de forma anafórica."
    ]
  },
  {
    enunciado: "Polisíndeton y asíndeton se distinguen porque:",
    correcta: "El primero acumula conjunciones; el segundo las suprime en series coordinadas.",
    incorrectas: [
      "Ambos exigen rima interna para funcionar.",
      "El primero suprime verbos y el segundo sustantivos."
    ]
  },
  {
    enunciado: "Paralelismo y quiasmo se relacionan así:",
    correcta: "El paralelismo repite estructuras; el quiasmo las invierte cruzadamente.",
    incorrectas: [
      "El paralelismo invierte estructuras; el quiasmo las repite idénticas.",
      "No guardan relación sintáctica alguna."
    ]
  },
  {
    enunciado: "La gradación (clímax) se reconoce por:",
    correcta: "Encadenar términos en progresión ascendente o descendente.",
    incorrectas: [
      "Interrumpir la serie con términos sin relación.",
      "Sustituir la serie por una metáfora fija."
    ]
  },
  {
    enunciado: "La onomatopeya es un recurso que:",
    correcta: "Imita acústicamente ruidos o sonidos con fines expresivos.",
    incorrectas: [
      "Obliga a usar tecnicismos científicos en verso.",
      "Equivale siempre a la rima interna."
    ]
  },
  {
    enunciado: "La estilística estudia principalmente:",
    correcta: "La selección y organización de rasgos lingüísticos que producen efectos expresivos.",
    incorrectas: [
      "La cronología de autores sin análisis del lenguaje.",
      "La productividad editorial como única variable estética."
    ]
  },
  {
    enunciado: "Las cinco partes clásicas de la retórica incluyen:",
    correcta: "Inventio, dispositio, elocutio, memoria y actio.",
    incorrectas: [
      "Invención, demostración, edición, impresión y venta.",
      "Exordio, narratio, confirmatio, refutatio, peroratio (que son fases, no ‘partes’)."
    ]
  },
  {
    enunciado: "Entre las virtudes del estilo clásico figuran:",
    correcta: "Corrección, claridad, propiedad y ornato en equilibrio con la finalidad.",
    incorrectas: [
      "Oscuridad deliberada como norma general.",
      "Redundancia permanente como única estrategia."
    ]
  },
  {
    enunciado: "La ‘Nueva Retórica’ de Perelman subraya:",
    correcta: "La adhesión del auditorio y las técnicas de presencia para persuadir.",
    incorrectas: [
      "La neutralidad absoluta del lenguaje literario.",
      "La imposibilidad de argumentar en textos artísticos."
    ]
  },
  {
    enunciado: "Según el Groupe μ, las operaciones retóricas básicas son:",
    correcta: "Adición, supresión, permutación y sustitución.",
    incorrectas: [
      "Comparación, imitación, traducción y paráfrasis.",
      "Elipsis, hipérbole, ironía y prosopopeya."
    ]
  },
  {
    enunciado: "La metáfora conceptual, en poética cognitiva, se entiende como:",
    correcta: "Un mapeo sistemático entre dominios fuente y meta que estructura el pensamiento.",
    incorrectas: [
      "Una coincidencia fonética entre dos palabras sin sentido figurado.",
      "Una rima consonante aplicada a términos abstractos."
    ]
  },
  {
    enunciado: "El ‘blending’ (integración conceptual) describe:",
    correcta: "La combinación de espacios mentales que genera significados emergentes.",
    incorrectas: [
      "La sustitución de toda figura por definiciones literales.",
      "La prohibición de mezclar metáforas en un mismo texto."
    ]
  },
  {
    enunciado: "Desde la sociología de Bourdieu, el ‘campo literario’ es:",
    correcta: "Un espacio de posiciones y luchas por capital simbólico entre agentes.",
    incorrectas: [
      "Un conjunto de reglas métricas universales e inmutables.",
      "Una biblioteca de géneros fijados por ley."
    ]
  },
  {
    enunciado: "Señala un ejemplo de recurso fónico–prosódico en prosa artística.",
    correcta: "Clausulación rítmica e isocolon para crear cadencias perceptibles.",
    incorrectas: [
      "El uso exclusivo de tecnicismos de jerga científica.",
      "La eliminación de toda repetición para evitar musicalidad."
    ]
  },
  {
    enunciado: "La retórica visual y multimodal en literatura implica:",
    correcta: "La articulación de imagen, tipografía y disposición con el texto para producir sentido.",
    incorrectas: [
      "Que la imagen sustituya siempre al contenido verbal.",
      "Que el diseño gráfico sea independiente del significado."
    ]
  },
  {
    enunciado: "¿Por qué los recursos expresivos operan también en discursos no literarios?",
    correcta: "Porque potencian atención, recuerdo y persuasión en diversos géneros públicos.",
    incorrectas: [
      "Porque anulan la necesidad de datos en textos informativos.",
      "Porque su uso está restringido por norma a la poesía."
    ]
  },
  {
    enunciado: "Una ‘pregunta retórica’ funciona típicamente para:",
    correcta: "Orientar la interpretación o enfatizar una idea sin esperar respuesta real.",
    incorrectas: [
      "Solicitar información que el emisor desconoce de verdad.",
      "Sustituir la conclusión por una definición técnica."
    ]
  },
  {
    enunciado: "En estilística de corpus, un indicador cuantitativo de estilo puede ser:",
    correcta: "La frecuencia de n-gramas, la densidad léxica o la complejidad sintáctica.",
    incorrectas: [
      "El precio de venta del libro como variable textual.",
      "La fecha de publicación como métrica lingüística."
    ]
  },
  {
    enunciado: "La enseñanza de la competencia literaria en el aula busca que el alumnado:",
    correcta: "Reconozca convenciones, interprete recursos y produzca textos creativos con conciencia de estilo.",
    incorrectas: [
      "Memorice listados de figuras sin lectura ni escritura.",
      "Evite la argumentación sobre efectos estéticos por ser ‘subjetiva’."
    ]
  }
];
