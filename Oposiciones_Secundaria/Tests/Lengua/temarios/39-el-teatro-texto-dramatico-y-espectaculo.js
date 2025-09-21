// temarios/39-el-teatro-texto-dramatico-y-espectaculo.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué describe mejor el fenómeno teatral contemporáneo?",
    correcta: "La articulación de texto dramático y representación escénica en presencia del público.",
    incorrectas: [
      "Un relato escrito para ser leído en silencio sin posibilidad de escena.",
      "Una secuencia de imágenes sin necesidad de actores ni espectadores."
    ]
  },
  {
    enunciado: "¿Qué distingue al texto dramático del espectáculo teatral?",
    correcta: "El texto es la partitura escrita; el espectáculo es su realización escénica con signos verbales y no verbales.",
    incorrectas: [
      "El texto incluye iluminación y sonido; el espectáculo solo diálogos.",
      "El espectáculo reproduce literalmente el texto sin interpretación."
    ]
  },
  {
    enunciado: "¿Cuál es el conjunto prototípico de componentes del texto dramático?",
    correcta: "Diálogo, monólogo/soliloquio, apartes y acotaciones o didascalias.",
    incorrectas: [
      "Índice onomástico, bibliografía y notas al pie académicas.",
      "Capítulos, prólogo narrativo y epílogo en verso libre."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al soliloquio frente a otros parlamentos?",
    correcta: "Un discurso del personaje consigo mismo que revela pensamiento y conflicto interior.",
    incorrectas: [
      "Una conversación a dos voces sin intervención del público.",
      "Un aparte dirigido a otro personaje fuera de escena."
    ]
  },
  {
    enunciado: "¿Qué es un aparte?",
    correcta: "Intervención dicha para que la oiga el público pero no los demás personajes.",
    incorrectas: [
      "Una acotación técnica del regidor durante el ensayo.",
      "Un monólogo prolongado que sustituye toda acción."
    ]
  },
  {
    enunciado: "¿Qué función cumplen las acotaciones o didascalias?",
    correcta: "Orientar la representación con indicaciones de gestos, espacio, tiempo, tono y efectos.",
    incorrectas: [
      "Resumir la obra para lectores que no asistirán al teatro.",
      "Proporcionar notas críticas del editor sin valor escénico."
    ]
  },
  {
    enunciado: "¿Cómo se define la escena en la división del texto dramático?",
    correcta: "Unidad marcada por la entrada o salida de personajes en un mismo espacio-tiempo.",
    incorrectas: [
      "Un bloque que siempre coincide con el cambio de iluminación.",
      "Una secuencia cerrada que contiene obligatoriamente un clímax."
    ]
  },
  {
    enunciado: "¿Qué es un cuadro dentro de la organización dramática?",
    correcta: "Unidades que mantienen continuidad de espacio y tiempo dentro de un acto.",
    incorrectas: [
      "Un resumen visual proyectado para sustituir la actuación.",
      "Un intermedio musical separado del argumento."
    ]
  },
  {
    enunciado: "Según la tradición del Siglo de Oro español, ¿cuál es la división típica de las obras?",
    correcta: "Tres jornadas con planteamiento, complicación y desenlace.",
    incorrectas: [
      "Cinco actos fijos con coro y episodio final obligatorio.",
      "Un solo acto continuo sin cambios de situación."
    ]
  },
  {
    enunciado: "En la Poética, la peripecia se entiende como:",
    correcta: "Giro de la acción que invierte la fortuna de los personajes.",
    incorrectas: [
      "Introducción de la obra donde se presentan los personajes.",
      "Monólogo final que explica la moraleja al público."
    ]
  },
  {
    enunciado: "¿Qué es la anagnórisis en el sentido aristotélico?",
    correcta: "Reconocimiento que transforma la comprensión de la situación o identidad.",
    incorrectas: [
      "Una acotación sobre iluminación y sonido.",
      "La simple entrada de un personaje secundario."
    ]
  },
  {
    enunciado: "¿Cómo se define la catarsis en el marco trágico?",
    correcta: "Efecto de purificación o transformación emocional que suscita la obra en el espectador.",
    incorrectas: [
      "Técnica de memorización actoral basada en repetición mecánica.",
      "Cambio de decorado que marca un nuevo cuadro."
    ]
  },
  {
    enunciado: "¿Cuál enuncia correctamente las 'unidades' clásicas del drama?",
    correcta: "Unidades de acción, tiempo y lugar como principio de verosimilitud.",
    incorrectas: [
      "Unidades de verso, rima y estrofa para toda comedia.",
      "Unidades de actor, músico y bailarín por escena."
    ]
  },
  {
    enunciado: "En la estructura dramática, el 'punto de giro' suele:",
    correcta: "Reorientar el conflicto y aumentar la tensión hacia el clímax.",
    incorrectas: [
      "Cerrar definitivamente la acción sin consecuencias.",
      "Corresponder siempre a un cambio de vestuario."
    ]
  },
  {
    enunciado: "¿Qué es el clímax dentro de la progresión dramática?",
    correcta: "El momento de máxima tensión y decisión del conflicto central.",
    incorrectas: [
      "La presentación inicial de la situación de partida.",
      "Un intermedio musical ajeno a la trama."
    ]
  },
  {
    enunciado: "El efecto de distanciamiento brechtiano busca:",
    correcta: "Romper la identificación automática para activar la mirada crítica del espectador.",
    incorrectas: [
      "Incrementar el ilusionismo y la empatía total.",
      "Eliminar toda dimensión política y social."
    ]
  },
  {
    enunciado: "¿Qué propugna Artaud con el 'teatro de la crueldad'?",
    correcta: "Una escena sensorial y convulsiva que sacuda al espectador más allá de la palabra.",
    incorrectas: [
      "Reducir el teatro a lectura silenciosa sin cuerpo.",
      "Limitar la obra a diálogos realistas cotidianos."
    ]
  },
  {
    enunciado: "¿Qué persigue Grotowski con el 'teatro pobre'?",
    correcta: "Depurar medios para centrarse en la relación actor–espectador.",
    incorrectas: [
      "Multiplicar maquinaria escénica y grandes efectos.",
      "Sustituir al actor por proyecciones audiovisuales."
    ]
  },
  {
    enunciado: "Una pauta del sistema Stanislavski es:",
    correcta: "Trabajar acciones físicas y memoria afectiva integradas en objetivos escénicos.",
    incorrectas: [
      "Construir personajes solo con improvisación sin texto.",
      "Evitar toda motivación interna para favorecer el azar."
    ]
  },
  {
    enunciado: "¿Qué introduce Augusto Boal con el Teatro del Oprimido?",
    correcta: "La figura del espect-actor que interviene para transformar la acción.",
    incorrectas: [
      "La prohibición de cualquier participación del público.",
      "El uso exclusivo de máscaras rituales sin palabra."
    ]
  },
  {
    enunciado: "¿Qué rasgo asocia Lehmann al teatro posdramático?",
    correcta: "Disolución de la primacía del relato y apuesta por la performatividad y la intermedialidad.",
    incorrectas: [
      "Retorno obligado a las unidades clásicas aristotélicas.",
      "Exclusión de todo elemento visual y sonoro."
    ]
  },
  {
    enunciado: "Desde la semiótica de la escena, ¿qué se considera signo no verbal?",
    correcta: "Luz, vestuario, escenografía, proxémica y movimiento.",
    incorrectas: [
      "Prefacios y notas del editor impreso.",
      "Índices alfabéticos de personajes."
    ]
  },
  {
    enunciado: "La proxémica, aplicada al teatro, estudia:",
    correcta: "Las distancias y posiciones entre cuerpos en escena con valor de sentido.",
    incorrectas: [
      "La construcción del verso endecasílabo.",
      "El número de focos disponibles en la sala."
    ]
  },
  {
    enunciado: "¿Qué analiza la kinésica en la actuación?",
    correcta: "Gestos y movimientos corporales como portadores de significado.",
    incorrectas: [
      "La estructura de actos y escenas de un libreto.",
      "El diseño de entradas y salidas del público al foyer."
    ]
  },
  {
    enunciado: "¿Qué implica la convención de la 'cuarta pared'?",
    correcta: "Actuar como si no existiera el público, manteniendo la ilusión de espacio cerrado.",
    incorrectas: [
      "Obligar a los actores a dialogar con la platea en cada escena.",
      "Eliminar toda escenografía para no distraer la atención."
    ]
  },
  {
    enunciado: "¿Qué entendemos por metateatro?",
    correcta: "El teatro que reflexiona sobre sí mismo o incorpora la representación como tema.",
    incorrectas: [
      "La sustitución del texto por música sin escena.",
      "La proyección de cine mudo entre actos."
    ]
  },
  {
    enunciado: "Una función central del diálogo teatral es:",
    correcta: "Hacer avanzar la acción mientras caracteriza a los personajes.",
    incorrectas: [
      "Sustituir la escenografía y la iluminación por completo.",
      "Evitar que el público infiera subtexto o conflicto."
    ]
  },
  {
    enunciado: "¿Cómo se distinguen tiempo escénico y tiempo diegético?",
    correcta: "El escénico es la duración real de la representación; el diegético es el tiempo de la historia contada.",
    incorrectas: [
      "El escénico depende del número de focos; el diegético del aforo.",
      "Ambos son siempre idénticos en toda obra dramática."
    ]
  },
  {
    enunciado: "Un teatro 'a la italiana' se caracteriza por:",
    correcta: "Arco de proscenio que separa escena y público con frontalidad marcada.",
    incorrectas: [
      "Pista central con público alrededor en 360 grados.",
      "Ausencia total de maquinaria y concha acústica."
    ]
  },
  {
    enunciado: "Una característica del espacio isabelino (elisabetano) es:",
    correcta: "Plataforma que se adentra en el patio con público circundante y escenografía mínima.",
    incorrectas: [
      "Camerinos a la vista del público integrados en la escena.",
      "Telón de boca permanente cerrado durante la acción."
    ]
  },
  {
    enunciado: "¿Qué rasgo define una 'black box' contemporánea?",
    correcta: "Espacio flexible y neutro que admite múltiples configuraciones escénicas.",
    incorrectas: [
      "Proscenio fijo y foso de orquesta obligatorio.",
      "Uso exclusivo para danza sin posibilidad teatral."
    ]
  },
  {
    enunciado: "El término site-specific alude a:",
    correcta: "Creaciones concebidas para un lugar concreto que condiciona sentido y forma.",
    incorrectas: [
      "Obras reproducibles idénticamente en cualquier sala.",
      "Piezas que solo pueden realizarse en teatros a la italiana."
    ]
  },
  {
    enunciado: "¿Qué persigue la dramaturgia de la luz en una puesta en escena?",
    correcta: "Construir atmósferas, ritmos y focos de atención como parte del discurso escénico.",
    incorrectas: [
      "Sustituir el trabajo actoral por efectos luminosos.",
      "Iluminar de forma homogénea sin intención expresiva."
    ]
  },
  {
    enunciado: "¿Qué diferencia escenografía y utilería (atrezzo)?",
    correcta: "La escenografía define el espacio general; la utilería son objetos manipulados en la acción.",
    incorrectas: [
      "Ambas designan exclusivamente los trajes de los actores.",
      "La utilería es siempre virtual y proyectada."
    ]
  },
  {
    enunciado: "¿Cuál es la función principal del regidor o stage manager?",
    correcta: "Coordinar en tiempo real la función: llamadas, entradas, cambios y seguridad escénica.",
    incorrectas: [
      "Redactar el libreto original de la obra.",
      "Sustituir al director en la interpretación del texto."
    ]
  },
  {
    enunciado: "¿Qué rasgo define el melodrama clásico?",
    correcta: "Polarización moral, apelación emotiva intensa y subrayado musical de la acción.",
    incorrectas: [
      "Ambigüedad ética radical y ausencia de música.",
      "Improvisación colectiva sin guion ni partitura."
    ]
  },
  {
    enunciado: "Una seña de la farsa es:",
    correcta: "Exageración, ritmo acelerado y ruptura frecuente de la verosimilitud.",
    incorrectas: [
      "Contención psicológica y naturalismo minucioso.",
      "Trama trágica con destino inapelable."
    ]
  },
  {
    enunciado: "La tragicomedia se caracteriza por:",
    correcta: "Combinar elementos trágicos y cómicos en una misma estructura conflictiva.",
    incorrectas: [
      "Excluir cualquier desenlace ambiguo o mixto.",
      "Ser un género exclusivamente musical sin diálogo."
    ]
  },
  {
    enunciado: "El teatro documental o verbatim suele basarse en:",
    correcta: "Testimonios, documentos y material real recontextualizado en escena.",
    incorrectas: [
      "Ficción fantástica sin anclaje con la realidad.",
      "Improvisación sin fuentes ni investigación previa."
    ]
  },
  {
    enunciado: "En términos de recepción, ¿qué se entiende por 'liveness' del teatro?",
    correcta: "La copresencia actor–público y la irrepetibilidad del evento escénico.",
    incorrectas: [
      "La posibilidad de rebobinar escenas durante la función.",
      "La sustitución del público por avatares virtuales siempre."
    ]
  }
];
