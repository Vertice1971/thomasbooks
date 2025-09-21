
// temarios/45-lirica-culta-y-lirica-popular-en-el-siglo-xv-los-cancioneros-jorge-manrique-el-romancero.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué dos polos conviven en la poesía castellana del siglo XV?",
    correcta: "La lírica culta cortesana y la lírica popular de transmisión oral",
    incorrectas: [
      "La épica caballeresca y la tragedia humanística",
      "La prosa jurídica y la prosa historiográfica"
    ]
  },
  {
    enunciado: "¿Cuál es el tema central más frecuente en la lírica culta cancioneril?",
    correcta: "El amor cortés con su código de servicio y mesura",
    incorrectas: [
      "La sátira política exclusivamente",
      "La hagiografía mariana en metros populares"
    ]
  },
  {
    enunciado: "¿Qué rasgo formal caracteriza a muchos poemas de cancionero?",
    correcta: "El artificio retórico y la elaboración culta del lenguaje",
    incorrectas: [
      "La improvisación métrica sin rima",
      "El uso preferente del verso libre"
    ]
  },
  {
    enunciado: "¿Qué es un cancionero en el contexto del siglo XV?",
    correcta: "Una recopilación manuscrita de poemas de diversos autores",
    incorrectas: [
      "Un instrumento musical para acompañar poemas",
      "Un romance suelto impreso en pliego"
    ]
  },
  {
    enunciado: "¿Cuál es una colección clave para conocer la poesía de la corte de Juan II?",
    correcta: "El Cancionero de Baena",
    incorrectas: [
      "El Romancero General (1600)",
      "El Cancionero sevillano del Siglo de Oro"
    ]
  },
  {
    enunciado: "¿Qué cancionero impreso marca la transición al siglo XVI?",
    correcta: "El Cancionero General (1511) de Hernando del Castillo",
    incorrectas: [
      "El Cancionero de Palacio (1701)",
      "El Cancionero de Ripoll (1200)"
    ]
  },
  {
    enunciado: "¿Qué poeta castellano introdujo sonetos a la manera italiana y cultivó las serranillas?",
    correcta: "El Marqués de Santillana",
    incorrectas: [
      "Juan de Mena",
      "Gómez Manrique"
    ]
  },
  {
    enunciado: "¿Qué obra alegórico-moral es célebre en Juan de Mena?",
    correcta: "El Laberinto de Fortuna",
    incorrectas: [
      "Las Coplas a la muerte de su padre",
      "La Coronación"
    ]
  },
  {
    enunciado: "¿Qué rasgo distintivo presenta a menudo la lírica culta frente a la popular?",
    correcta: "Mayor densidad retórica y conceptual",
    incorrectas: [
      "Ausencia total de rima",
      "Carencia de referencias cortesanas"
    ]
  },
  {
    enunciado: "¿Qué forma estrófica emplean las Coplas manriqueñas?",
    correcta: "Coplas de pie quebrado (8a 8b 4c 8a 8b 4c)",
    incorrectas: [
      "Décimas espinelas",
      "Liras garcilasianas"
    ]
  },
  {
    enunciado: "¿Qué tópicos medievales articulan el pensamiento de las Coplas de Jorge Manrique?",
    correcta: "Ubi sunt y contemptus mundi",
    incorrectas: [
      "Carpe diem y locus amoenus exclusivamente renacentistas",
      "Beatus ille y furor poeticus"
    ]
  },
  {
    enunciado: "¿Qué triple noción de vida ordena la meditación de las Coplas?",
    correcta: "La vida terrenal, la vida de la fama y la vida eterna",
    incorrectas: [
      "La vida de la corte, la vida campesina y la vida monástica",
      "La niñez, la madurez y la vejez como únicas categorías"
    ]
  },
  {
    enunciado: "¿Qué tono domina en el estilo de Jorge Manrique?",
    correcta: "Sobriedad, equilibrio y gravedad emotiva",
    incorrectas: [
      "Grandilocuencia barroca y culterana",
      "Sátira burlesca constante"
    ]
  },
  {
    enunciado: "¿Cómo se define el romance del Romancero viejo?",
    correcta: "Verso octosílabo con rima asonante en los pares",
    incorrectas: [
      "Endecasílabo blanco sin rima",
      "Alejandrino con rima consonante fija"
    ]
  },
  {
    enunciado: "¿Qué rasgo de autoría presenta el Romancero viejo?",
    correcta: "Anonimato y creación colectiva",
    incorrectas: [
      "Autoría firmada y documentada",
      "Atribución a un único poeta de corte"
    ]
  },
  {
    enunciado: "¿Qué vías aseguraron la conservación del Romancero en la Edad Moderna?",
    correcta: "La tradición oral y los pliegos sueltos impresos",
    incorrectas: [
      "Los códices iluminados exclusivamente",
      "La notación musical mensural"
    ]
  },
  {
    enunciado: "¿Cuál de estos grupos temáticos pertenece al Romancero?",
    correcta: "Históricos, fronterizos, novelescos y líricos",
    incorrectas: [
      "Idílicos pastoriles, culteranos y gongorinos",
      "Tragedias clásicas, autos y entremeses"
    ]
  },
  {
    enunciado: "¿Qué función social desempeñó el romance en su contexto original?",
    correcta: "Memoria colectiva, entretenimiento y difusión de noticias",
    incorrectas: [
      "Exclusiva catequesis doctrinal",
      "Tratado jurídico de la nobleza"
    ]
  },
  {
    enunciado: "¿Qué relación hubo entre lírica culta y Romancero?",
    correcta: "Interinfluencia: los cortesanos imitan romances y lo popular asimila fórmulas cultas",
    incorrectas: [
      "Aislamiento absoluto entre ambos registros",
      "Sustitución inmediata de lo popular por lo culto"
    ]
  },
  {
    enunciado: "¿Qué cancionero es clave para el repertorio musical cortesano del período?",
    correcta: "El Cancionero de Palacio",
    incorrectas: [
      "El Cancionero de Amberes (siglo XVIII)",
      "El Cancionero de Barcelona (romántico)"
    ]
  },
  {
    enunciado: "¿Qué figura poética del XV sirve de puente hacia el Renacimiento por su ética de la fama?",
    correcta: "Jorge Manrique",
    incorrectas: [
      "Gonzalo de Berceo",
      "Arcipreste de Hita"
    ]
  },
  {
    enunciado: "¿Qué rasgo lingüístico distingue a la lírica popular frente a la culta?",
    correcta: "Lenguaje sencillo, fórmulas repetitivas y musicalidad directa",
    incorrectas: [
      "Latinizaciones y léxico filosófico denso",
      "Quebrantamiento sistemático de la rima"
    ]
  },
  {
    enunciado: "¿Qué poeta del XV elaboró un corpus moral y religioso además de piezas cortesanas?",
    correcta: "Gómez Manrique",
    incorrectas: [
      "Fernando de Rojas",
      "Garcilaso de la Vega"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el Cancionero General con la lírica del XV?",
    correcta: "Recoge y fija gran parte de la tradición cancioneril y su transición a comienzos del XVI",
    incorrectas: [
      "Es un romancero viejo exclusivamente oral",
      "Es un tratado métrico de Quintiliano"
    ]
  },
  {
    enunciado: "¿Qué elemento rítmico favorece la memorización de romances?",
    correcta: "Paralelismos, repeticiones y estribillos",
    incorrectas: [
      "Versificación silábica irregular sin patrones",
      "Isometría endecasilábica con rima consonante"
    ]
  },
  {
    enunciado: "¿Cuál es una diferencia típica de enunciación entre romance y canción cortesana?",
    correcta: "El romance narra con economía y foco en la acción; la canción elabora con conceptualismo amoroso",
    incorrectas: [
      "El romance es siempre dialogado y la canción, nunca",
      "La canción carece de rima y el romance, también"
    ]
  },
  {
    enunciado: "¿Qué tópico amoroso recorre la cancioneril culta?",
    correcta: "La vasallía amorosa y el servicio a la dama",
    incorrectas: [
      "El desprecio absoluto del amor",
      "La exaltación mística exclusivamente"
    ]
  },
  {
    enunciado: "En la poética cortesana, ¿qué valor se concede al ingenio formal?",
    correcta: "Es esencial: se premia la agudeza retórica y el artificio",
    incorrectas: [
      "Se evita por completo el ornato",
      "Se prohíben metáforas y recursos"
    ]
  },
  {
    enunciado: "¿Qué relación guardan los cancioneros con la vida cortesana?",
    correcta: "Funcionan como archivo de sociabilidad poética de corte",
    incorrectas: [
      "Son manuales devocionales monásticos",
      "Compilaciones de leyes municipales"
    ]
  },
  {
    enunciado: "¿Qué rasgo narrativo distingue a muchos romances históricos y fronterizos?",
    correcta: "Vivacidad escénica con diálogos insertos",
    incorrectas: [
      "Narración abstracta sin personajes",
      "Exposición ensayística en prosa"
    ]
  },
  {
    enunciado: "¿Qué recurso métrico define el pie quebrado de Manrique?",
    correcta: "Alternancia de versos octosílabos con tetrasílabos",
    incorrectas: [
      "Alternancia de endecasílabos y heptasílabos",
      "Uso de alejandrinos con estribillo fijo"
    ]
  },
  {
    enunciado: "¿Qué dimensión ética subrayan las Coplas al contraponer vida terrenal y fama?",
    correcta: "La caducidad de lo mundano frente a la perduración del buen obrar",
    incorrectas: [
      "La vanidad de la fama como único fin",
      "El hedonismo cortesano como ideal supremo"
    ]
  },
  {
    enunciado: "¿Qué interacción hubo entre música y poesía en el siglo XV cortesano?",
    correcta: "Frecuente musicalización de poemas en ámbitos palaciegos",
    incorrectas: [
      "Separación total: la poesía no se cantaba",
      "Sólo se usaban melodías gregorianas"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los romances novelescos dentro del Romancero?",
    correcta: "Exploran pasiones y conflictos amorosos en clave narrativa",
    incorrectas: [
      "Establecen normas jurídicas de herencia",
      "Comentan tratados de escolástica"
    ]
  },
  {
    enunciado: "¿Qué diferencia de difusión existe entre lírica culta y popular?",
    correcta: "La culta circula en manuscritos cortesanos; la popular en oralidad y pliegos",
    incorrectas: [
      "Ambas sólo por imprenta en el XV",
      "Ambas exclusivamente por notaciones musicales"
    ]
  },
  {
    enunciado: "¿Qué motivo formal favorece la continuidad del romance a lo largo de siglos?",
    correcta: "Su estructura métrica simple y adaptable",
    incorrectas: [
      "Su dependencia de un único autor canónico",
      "Su alta dependencia de latín clásico"
    ]
  },
  {
    enunciado: "¿Qué rasgo valoran los cancioneros en el tratamiento del amor?",
    correcta: "La mesura, la fineza y el sufrimiento estilizado",
    incorrectas: [
      "La violencia explícita y escatológica",
      "La indiferencia absoluta ante la dama"
    ]
  },
  {
    enunciado: "¿Qué puente histórico-literario simboliza Jorge Manrique?",
    correcta: "La transición de valores medievales a una ética prehumanista",
    incorrectas: [
      "El paso directo al Barroco",
      "La ruptura con toda tradición anterior"
    ]
  },
  {
    enunciado: "¿Qué unidad rítmica sostiene el fluir del romance viejo?",
    correcta: "La asonancia en los versos pares",
    incorrectas: [
      "La rima consonante encadenada",
      "El verso libre sin rima ni medida"
    ]
  },
  {
    enunciado: "¿Qué define globalmente el panorama lírico del siglo XV castellano?",
    correcta: "Una dinámica interacción entre lo cortesano culto y lo popular tradicional",
    incorrectas: [
      "La desaparición de la poesía frente a la prosa",
      "La hegemonía exclusiva del teatro religioso"
    ]
  }
];
