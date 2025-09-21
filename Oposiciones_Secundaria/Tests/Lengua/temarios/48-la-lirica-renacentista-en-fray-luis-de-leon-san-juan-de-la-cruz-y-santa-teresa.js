// temarios/48-la-lirica-renacentista-en-fray-luis-de-leon-san-juan-de-la-cruz-y-santa-teresa.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué comparten Fray Luis de León, San Juan de la Cruz y Santa Teresa en la lírica del XVI?",
    correcta: "La integración del humanismo renacentista con la experiencia espiritual",
    incorrectas: [
      "El rechazo total de la tradición clásica grecolatina",
      "La preferencia exclusiva por el romance octosilábico"
    ]
  },
  {
    enunciado: "¿Qué diferencia general se establece entre ascética y mística en el siglo XVI?",
    correcta: "La ascética enfatiza la purificación moral; la mística, la unión transformadora con Dios",
    incorrectas: [
      "La ascética es prosa y la mística solo poesía",
      "La ascética es privada y la mística, pública y litúrgica"
    ]
  },
  {
    enunciado: "¿Qué estrofa es característica en Fray Luis y San Juan?",
    correcta: "La lira (7a 11B 7a 7b 11B)",
    incorrectas: [
      "La décima espinela fija (abbaaccddc)",
      "La cuaderna vía monorrima de 14 sílabas"
    ]
  },
  {
    enunciado: "¿Qué ideal renacentista domina en Fray Luis de León?",
    correcta: "Armonía, claridad y equilibrio clásico",
    incorrectas: [
      "Oscuridad deliberada y conceptismo extremo",
      "Sátira política agresiva y continua"
    ]
  },
  {
    enunciado: "¿Qué poema expresa el ideal de retiro y serenidad en Fray Luis?",
    correcta: "Oda a la vida retirada",
    incorrectas: [
      "Llama de amor viva",
      "Noche oscura del alma"
    ]
  },
  {
    enunciado: "¿Qué valor simbólico tiene la naturaleza en Fray Luis?",
    correcta: "Es camino de contemplación y acceso a lo divino",
    incorrectas: [
      "Es escenario indiferente sin correlatos espirituales",
      "Es motivo cómico y burlesco preferente"
    ]
  },
  {
    enunciado: "¿Qué rasgo métrico destaca en Fray Luis?",
    correcta: "Naturaliza la lira en castellano con alto rigor rítmico",
    incorrectas: [
      "Impone el alejandrino francés en toda su obra",
      "Usa solo verso libre sin rima"
    ]
  },
  {
    enunciado: "¿Qué poema de Fray Luis contempla el orden cósmico y la visión de lo eterno?",
    correcta: "Noche serena",
    incorrectas: [
      "Cántico espiritual",
      "Nada te turbe"
    ]
  },
  {
    enunciado: "¿Qué relación tuvo Fray Luis con la filología bíblica?",
    correcta: "Dominó hebreo, latín y griego, y tradujo textos bíblicos",
    incorrectas: [
      "Rechazó cualquier contacto con lenguas clásicas",
      "Escribió exclusivamente en latín"
    ]
  },
  {
    enunciado: "¿Qué obra NO es de Fray Luis?",
    correcta: "Castillo interior",
    incorrectas: [
      "Oda a la vida retirada",
      "Noche serena"
    ]
  },
  {
    enunciado: "¿Cuál es el eje de la poesía de San Juan de la Cruz?",
    correcta: "La unión del alma con Dios mediante un proceso purgativo e iluminativo",
    incorrectas: [
      "La crítica política del imperio en clave satírica",
      "La autobiografía cortesana sin dimensión espiritual"
    ]
  },
  {
    enunciado: "¿Qué obra sanjuanista describe la purificación oscura del alma?",
    correcta: "Noche oscura del alma",
    incorrectas: [
      "Profecía del Tajo",
      "Camino de perfección"
    ]
  },
  {
    enunciado: "¿Qué obra sanjuanista explora la metáfora nupcial entre alma y Dios?",
    correcta: "Cántico espiritual",
    incorrectas: [
      "Libro de la vida",
      "Oda a Salinas"
    ]
  },
  {
    enunciado: "¿Qué símbolos reaparecen en San Juan?",
    correcta: "Noche, fuego, jardín, amada y amado",
    incorrectas: [
      "Ciudad moderna, fábrica, mercado y banquero",
      "Arlequín, carnaval y torneo caballeresco"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico define la dicción de San Juan?",
    correcta: "Sencillez intensa con gran musicalidad y densidad simbólica",
    incorrectas: [
      "Hipérbaton barroco y culteranismo saturado",
      "Registro judicial y notarial como efecto estético"
    ]
  },
  {
    enunciado: "¿Qué obra sanjuanista canta la plenitud de la unión?",
    correcta: "Llama de amor viva",
    incorrectas: [
      "Vivo sin vivir en mí",
      "Noche serena"
    ]
  },
  {
    enunciado: "¿Qué estructura espiritual ordena la exégesis de San Juan?",
    correcta: "Vías purgativa, iluminativa y unitiva",
    incorrectas: [
      "Vías retórica, dialéctica y gramática",
      "Vías cómica, trágica y pastoril"
    ]
  },
  {
    enunciado: "¿Qué relación mantienen los comentarios en prosa de San Juan con sus poemas?",
    correcta: "Interpretan alegóricamente los símbolos poéticos",
    incorrectas: [
      "Los sustituyen por paráfrasis profanas",
      "Los niegan por considerarlos solo ornamentales"
    ]
  },
  {
    enunciado: "¿Cuál es el rasgo expresivo central de Santa Teresa en poesía?",
    correcta: "Sencillez directa que comunica experiencia interior",
    incorrectas: [
      "Oscuridad hermética deliberada",
      "Exuberancia culterana de neologismos"
    ]
  },
  {
    enunciado: "¿Qué texto poético teresiano es emblemático?",
    correcta: "Vivo sin vivir en mí",
    incorrectas: [
      "Cántico espiritual",
      "Profecía del Tajo"
    ]
  },
  {
    enunciado: "¿Qué obra mayor en prosa es de Santa Teresa?",
    correcta: "Castillo interior (Las moradas)",
    incorrectas: [
      "De los nombres de Cristo",
      "Comentario al Cantar de los Cantares de Fray Luis"
    ]
  },
  {
    enunciado: "¿Qué figura retórica es frecuente en Santa Teresa para expresar lo inefable?",
    correcta: "Paradoja y oxímoron",
    incorrectas: [
      "Onomatopeya bélica continuada",
      "Retrúecano conceptista sistemático"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene Santa Teresa con la tradición bíblica?",
    correcta: "La asume como base experiencial y alegórica",
    incorrectas: [
      "La sustituye por mitología grecolatina exclusivamente",
      "La evita por su lenguaje simbólico"
    ]
  },
  {
    enunciado: "¿Qué define el tono de Santa Teresa frente a San Juan?",
    correcta: "Mayor coloquialidad y cercanía expresiva",
    incorrectas: [
      "Mayor énfasis en el juego conceptista",
      "Mayor interés en la sátira cortesana"
    ]
  },
  {
    enunciado: "¿Qué elemento formal comparten los tres autores del tema 48?",
    correcta: "La búsqueda de musicalidad y decoro clásico",
    incorrectas: [
      "El uso preferente de la redondilla narrativa",
      "El verso blanco dramático sin rima"
    ]
  },
  {
    enunciado: "¿Qué tópico renacentista dialoga con la espiritualidad en Fray Luis?",
    correcta: "La vida retirada como ideal ético y cognoscitivo",
    incorrectas: [
      "La guerra como única vía de santificación",
      "El carpe diem hedonista sin trascendencia"
    ]
  },
  {
    enunciado: "¿Qué tradición clásica pesa más en Fray Luis?",
    correcta: "Horacio y Virgilio, por su equilibrio y contemplación",
    incorrectas: [
      "Juvenal por su sátira mordaz predominante",
      "Ovidio por su erotismo explícito"
    ]
  },
  {
    enunciado: "¿Cómo se integra el humanismo en estos autores?",
    correcta: "Como cultivo de las letras que encauza la vida espiritual",
    incorrectas: [
      "Como rechazo del estudio y de la filología",
      "Como ruptura con toda tradición cristiana"
    ]
  },
  {
    enunciado: "¿Cuál es la relación entre símbolo y experiencia en la mística sanjuanista?",
    correcta: "El símbolo poético vehicula experiencias de transformación interior",
    incorrectas: [
      "El símbolo funciona solo como adorno erudito",
      "El símbolo reemplaza la vivencia por doctrina fría"
    ]
  },
  {
    enunciado: "¿Qué ritmo acentual requiere la lira castellana?",
    correcta: "Ajuste fino de heptasílabos y endecasílabos con encabalgamientos suaves",
    incorrectas: [
      "Isometría de 14 sílabas con cesura obligatoria",
      "Tetrámetros yámbicos de tradición inglesa"
    ]
  },
  {
    enunciado: "¿Qué oposición semántica vertebra el Cántico espiritual?",
    correcta: "Presencia/ausencia del Amado y búsqueda de la Esposa",
    incorrectas: [
      "Risa/llanto satírico de la corte",
      "Guerra/paz de ciudades renacentistas"
    ]
  },
  {
    enunciado: "¿Qué ideal ético subyace en Fray Luis?",
    correcta: "Virtud, templanza y paz interior",
    incorrectas: [
      "Astucia política y ascenso cortesano",
      "Provocación formal y ruptura gratuita"
    ]
  },
  {
    enunciado: "¿Qué define la musicalidad en San Juan?",
    correcta: "Isosilabismo cuidado, rimas plenas y léxico diáfano",
    incorrectas: [
      "Rima interna caótica buscada",
      "Prosa poética sin métrica alguna"
    ]
  },
  {
    enunciado: "¿Qué función tiene la alegoría en los tres autores?",
    correcta: "Conectar lo sensible con lo espiritual mediante correspondencias",
    incorrectas: [
      "Ocultar el sentido para lectores iniciados",
      "Sustituir toda emoción por doctrina jurídica"
    ]
  },
  {
    enunciado: "¿Qué rasgo lingüístico favorece la claridad garcilasiana y teresiana heredada por Fray Luis?",
    correcta: "Sintaxis fluida con hipérbatos discretos",
    incorrectas: [
      "Hipérbaton extremo como fin en sí mismo",
      "Anacolutos deliberados constantes"
    ]
  },
  {
    enunciado: "¿Qué eje doctrinal empapa la lírica del XVI en estos autores?",
    correcta: "Contrarreforma: interioridad, reforma de costumbres y ortodoxia",
    incorrectas: [
      "Neopaganismo explícito como programa literario",
      "Materialismo anticristiano militante"
    ]
  },
  {
    enunciado: "¿Qué correlato sensorial domina en Llama de amor viva?",
    correcta: "El fuego como metáfora de la caridad que transforma",
    incorrectas: [
      "El hielo como metáfora del odio",
      "El metal como signo de riqueza cortesana"
    ]
  },
  {
    enunciado: "¿Qué recurso expresivo hace comprensible la mística teresiana?",
    correcta: "Narratividad testimonial con ejemplos y comparaciones domésticas",
    incorrectas: [
      "Silogismos escolásticos sin experiencia",
      "Neologismos latinizantes opacos"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene el decoro clásico en su poesía?",
    correcta: "Adecuar estilo y tono al asunto espiritual para lograr armonía",
    incorrectas: [
      "Uniformar todo al estilo sublime, sea cual sea el tema",
      "Imponer burla sistemática para atraer al lector"
    ]
  },
  {
    enunciado: "¿Por qué son canónicos Fray Luis, San Juan y Santa Teresa?",
    correcta: "Porque fijan un modelo de lengua poética espiritual de alta calidad formal",
    incorrectas: [
      "Porque inventan el verso libre contemporáneo",
      "Porque rompen con la tradición métrica hispánica"
    ]
  }
];

