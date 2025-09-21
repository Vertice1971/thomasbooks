// temarios/53-evolucion-del-teatro-barroco-calderon-de-la-barca-y-tirso-de-molina.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo distingue la fase calderoniana respecto al primer modelo lopista?",
    correcta: "Mayor concentración estructural y simbolismo unificador de tiempo y espacio",
    incorrectas: [
      "Proliferación improvisada de acciones sin unidad",
      "Predominio de la prosa y abandono del verso"
    ]
  },
  {
    enunciado: "¿Qué doble circuito de representación caracteriza al Barroco hispano?",
    correcta: "Teatro comercial en corrales y teatro cortesano/palaciego",
    incorrectas: [
      "Teatro escolar y teatro monacal exclusivamente",
      "Solo representaciones callejeras sin edificios estables"
    ]
  },
  {
    enunciado: "¿Para qué sirve la polimetría en el teatro áureo?",
    correcta: "Para adecuar metro y tono a la situación dramática y al decoro",
    incorrectas: [
      "Para impedir la memorización de los actores",
      "Para eliminar toda rima y mantener verso blanco"
    ]
  },
  {
    enunciado: "¿Qué es un auto sacramental en el contexto barroco?",
    correcta: "Una pieza alegórica en un acto, de tema eucarístico, para la fiesta del Corpus",
    incorrectas: [
      "Una comedia de enredo urbano con bodas finales",
      "Un entremés cómico breve sin significación religiosa"
    ]
  },
  {
    enunciado: "¿Qué innovación dramática se asocia a Tirso de Molina en la configuración de personajes?",
    correcta: "Protagonismo femenino con alta agencia y manejo del disfraz",
    incorrectas: [
      "Exclusión de personajes femeninos de la intriga",
      "Reducción de la dama a papel meramente ornamental"
    ]
  },
  {
    enunciado: "¿Cuál de estas comedias de enredo es paradigmática de Tirso?",
    correcta: "Don Gil de las calzas verdes",
    incorrectas: [
      "La dama duende",
      "Casa con dos puertas mala es de guardar"
    ]
  },
  {
    enunciado: "¿Qué obra inaugura el mito escénico de Don Juan en la tradición española?",
    correcta: "El burlador de Sevilla y convidado de piedra (atribuida a Tirso de Molina)",
    incorrectas: [
      "El médico de su honra",
      "El gran teatro del mundo"
    ]
  },
  {
    enunciado: "¿Qué figura histórica centra la comedia tirsiana La prudencia en la mujer?",
    correcta: "Isabel de Portugal como modelo de gobierno y virtud",
    incorrectas: [
      "Isabel la Católica en su juventud",
      "María Tudor en la corte inglesa"
    ]
  },
  {
    enunciado: "En términos de técnica de intriga, ¿qué privilegia Tirso?",
    correcta: "Simetrías, paralelismos y economía de pistas en el enredo",
    incorrectas: [
      "Escenas sueltas sin relación causal",
      "Monólogos extensos sin función en la acción"
    ]
  },
  {
    enunciado: "¿Cuál es el núcleo filosófico de La vida es sueño de Calderón?",
    correcta: "Libertad humana frente a destino y apariencia de la realidad",
    incorrectas: [
      "Defensa del determinismo astrológico",
      "Elogio del absolutismo sin matices"
    ]
  },
  {
    enunciado: "¿Qué conflicto central articula El alcalde de Zalamea?",
    correcta: "Justicia civil contra abuso militar y defensa del honor ciudadano",
    incorrectas: [
      "Rivalidad entre dos compañías de teatro",
      "Guerra de religión entre nobles castellanos"
    ]
  },
  {
    enunciado: "¿Cuál de estas comedias calderonianas explota el enredo doméstico con puertas y espacios ocultos?",
    correcta: "La dama duende",
    incorrectas: [
      "La celosa de sí misma",
      "La prudencia en la mujer"
    ]
  },
  {
    enunciado: "¿Qué propone el auto El gran teatro del mundo?",
    correcta: "Una alegoría de la vida como representación con papeles morales",
    incorrectas: [
      "Una sátira política sobre los corrales madrileños",
      "Una crónica histórica del teatro renacentista"
    ]
  },
  {
    enunciado: "¿Qué explora trágicamente El médico de su honra?",
    correcta: "Los límites destructivos del código de honor",
    incorrectas: [
      "La sátira de la moda cortesana",
      "El elogio de la vida pastoril idílica"
    ]
  },
  {
    enunciado: "¿Qué mezcla tonal define la comedia nueva heredada por Tirso y Calderón?",
    correcta: "La convivencia de lo trágico y lo cómico en una misma obra",
    incorrectas: [
      "La separación estricta de géneros sin interacciones",
      "La prohibición de escenas humorísticas en dramas serios"
    ]
  },
  {
    enunciado: "¿Qué función cumple el entremés en la sesión teatral barroca?",
    correcta: "Pieza breve cómica intercalada entre jornadas para distensión del público",
    incorrectas: [
      "Alegoría eucarística obligatoria al inicio",
      "Conclusión solemne con moraleja trágica"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el gracioso en estas comedias?",
    correcta: "Contrapunto cómico y mediador entre escena y público",
    incorrectas: [
      "Censor que corrige los versos en escena",
      "Narrador externo que lee acotaciones en prosa"
    ]
  },
  {
    enunciado: "¿Qué función dramática tiene el disfraz en el teatro barroco?",
    correcta: "Motor del enredo que pone a prueba honor, identidad y deseo",
    incorrectas: [
      "Adorno escénico sin incidencia en la intriga",
      "Recurso prohibido por el decoro teatral"
    ]
  },
  {
    enunciado: "¿Qué se entiende por decoro en la práctica escénica?",
    correcta: "Adecuación de conducta y estilo al rango y situación del personaje",
    incorrectas: [
      "Uso obligatorio de endecasílabos en toda escena",
      "Ausencia de personajes populares por ‘indecoros’"
    ]
  },
  {
    enunciado: "¿Qué es un ‘aparte’ en la técnica teatral áurea?",
    correcta: "Intervención dirigida al público no oída por otros personajes",
    incorrectas: [
      "Cambio de escena con telón bajado",
      "Entrada musical que abre la jornada"
    ]
  },
  {
    enunciado: "¿Qué innovación escénica potencia el teatro palaciego en tiempos de Calderón?",
    correcta: "Máquinas, tramoyas, telones pintados y música integrada",
    incorrectas: [
      "Representaciones silenciosas sin canto ni danza",
      "Prohibición del uso de decorados móviles"
    ]
  },
  {
    enunciado: "¿Con qué músico colabora Calderón en el desarrollo de la zarzuela cortesana?",
    correcta: "Juan Hidalgo",
    incorrectas: [
      "Tomás Luis de Victoria",
      "Antonio de Nebrija"
    ]
  },
  {
    enunciado: "¿Qué corrales madrileños fueron emblemáticos del circuito comercial?",
    correcta: "El Corral del Príncipe y el de la Cruz",
    incorrectas: [
      "El Buen Retiro y Aranjuez",
      "El Corral del Carbón y La Maestranza"
    ]
  },
  {
    enunciado: "¿Qué mecanismo institucional condicionaba representación e impresión de comedias?",
    correcta: "La licencia y censura previa de autoridades competentes",
    incorrectas: [
      "El voto vecinal por aclamación",
      "El examen de pureza de sangre de los autores"
    ]
  },
  {
    enunciado: "¿Cómo se organiza la arquitectura básica de las comedias barrocas?",
    correcta: "En tres jornadas (exposición, nudo y desenlace)",
    incorrectas: [
      "En cinco actos de duración equitativa",
      "En un único acto continuo sin pausas"
    ]
  },
  {
    enunciado: "¿Qué metro se asocia a menudo a pasajes de reflexión grave en estas obras?",
    correcta: "Los tercetos encadenados",
    incorrectas: [
      "Las seguidillas manchegas",
      "Los pareados alejandrinos exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué rasgo de caracterización destaca en las damas tirsianas?",
    correcta: "Ingenio estratégico, iniciativa y dominio del juego escénico",
    incorrectas: [
      "Sumisión pasiva sin intervención en la trama",
      "Mudez escénica por convención"
    ]
  },
  {
    enunciado: "En El burlador de Sevilla, ¿qué episodio culmina el recorrido moral del protagonista?",
    correcta: "La cena con la estatua del Comendador (convidado de piedra) y su castigo",
    incorrectas: [
      "El perdón del rey tras una confesión sincera",
      "La boda con Doña Ana para reparar la afrenta"
    ]
  },
  {
    enunciado: "¿Qué rasgo central tienen los autos sacramentales calderonianos?",
    correcta: "Alegoría orgánica con personajes-concepto (Mundo, Gracia, etc.)",
    incorrectas: [
      "Realismo costumbrista sin símbolos",
      "Improvisación sin texto escrito"
    ]
  },
  {
    enunciado: "¿Cómo distribuye Calderón la jerarquía de escenas y entradas?",
    correcta: "Mediante una organización ‘piramidal’ que centra al protagonista",
    incorrectas: [
      "Por sorteo previo entre actores",
      "De forma aleatoria en cada función"
    ]
  },
  {
    enunciado: "Comparativamente, ¿qué tendencia de intriga diferencia a Tirso y Calderón?",
    correcta: "Tirso multiplica disfraces y espejos; Calderón concentra y reordena nudos",
    incorrectas: [
      "Tirso evita el disfraz; Calderón lo prohíbe siempre",
      "Ambos suprimen el enredo en favor de monólogos filosóficos"
    ]
  },
  {
    enunciado: "¿Qué obra calderoniana de enredo subraya la fragilidad del secreto doméstico?",
    correcta: "Casa con dos puertas mala es de guardar",
    incorrectas: [
      "Peribáñez y el Comendador de Ocaña",
      "El vergonzoso en palacio"
    ]
  },
  {
    enunciado: "¿Qué tragedia mitológico-política de Calderón reescribe la figura de Semíramis?",
    correcta: "La hija del aire",
    incorrectas: [
      "La devoción de la cruz",
      "Traidor, inconfeso y mártir"
    ]
  },
  {
    enunciado: "¿Qué valores articula El príncipe constante dentro del repertorio calderoniano?",
    correcta: "Constancia, honor y fe llevados hasta el sacrificio",
    incorrectas: [
      "Cinismo político y triunfo del engaño",
      "Hedonismo cortesano sin trascendencia"
    ]
  },
  {
    enunciado: "¿Qué papel simbólico adopta con frecuencia el rey en estos dramas?",
    correcta: "Árbitro de justicia que restablece el orden",
    incorrectas: [
      "Antagonista demoníaco constante",
      "Figurante mudo sin intervención"
    ]
  },
  {
    enunciado: "¿Qué elementos musicales y visuales se integran en el espectáculo barroco?",
    correcta: "Tonadas, bailes, coros y tramoyas con mutaciones rápidas",
    incorrectas: [
      "Silencio absoluto y escenas sin movimiento",
      "Solo telones fijos sin cambios ni canto"
    ]
  },
  {
    enunciado: "¿Hacia qué movimiento se orienta la reforma teatral tras el ciclo barroco?",
    correcta: "Hacia el neoclasicismo dieciochesco con mayor normatividad",
    incorrectas: [
      "Hacia el surrealismo de vanguardia",
      "Hacia el simbolismo decadentista del XIX"
    ]
  },
  {
    enunciado: "¿Qué recurso central sostiene el enredo de Don Gil de las calzas verdes?",
    correcta: "El travestismo y el juego de identidades de la protagonista",
    incorrectas: [
      "La alegoría doctrinal eucarística",
      "La ausencia total de disfraces por decoro"
    ]
  },
  {
    enunciado: "¿Cómo se clasifica El vergonzoso en palacio dentro de las tipologías tirsianas?",
    correcta: "Comedia palatina de enredo cortesano",
    incorrectas: [
      "Auto sacramental",
      "Tragedia senequista en cinco actos"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes NO es obra de Calderón de la Barca?",
    correcta: "Don Gil de las calzas verdes",
    incorrectas: [
      "A secreto agravio, secreta venganza",
      "La dama duende"
    ]
  }
];
