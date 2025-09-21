// temarios/47-la-lirica-renacentista-las-formas-y-el-espiritu-italianos-en-la-poesia-espanola-garcilaso-de-la-vega.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por 'lírica italianizante' en el contexto hispánico del siglo XVI?",
    correcta: "La adopción en castellano de temas, metros y estilos procedentes de Petrarca y la poesía renacentista italiana",
    incorrectas: [
      "La recuperación medieval de los cantares de gesta en octosílabos",
      "La sustitución total de la tradición castellana por la poesía provenzal"
    ]
  },
  {
    enunciado: "¿Qué verso introduce y consolida la lírica renacentista española bajo influencia italiana?",
    correcta: "El endecasílabo de tradición itálica, adaptado al castellano",
    incorrectas: [
      "El alejandrino con cesura heroica clásica",
      "El eneasílabo característico de los romances viejos"
    ]
  },
  {
    enunciado: "¿Qué estrofa combina heptasílabos y endecasílabos con esquema típico 7a 11B 7a 7b 11B?",
    correcta: "La lira renacentista",
    incorrectas: [
      "La octava real",
      "La redondilla"
    ]
  },
  {
    enunciado: "¿Cuál es el modelo europeo fundamental para el amor introspectivo en la poesía del Renacimiento?",
    correcta: "El 'Canzoniere' de Francesco Petrarca",
    incorrectas: [
      "La 'Commedia' de Dante como manual de métrica amorosa",
      "Las 'Bucólicas' de Virgilio como tratado de amor cortesano"
    ]
  },
  {
    enunciado: "¿Qué poeta catalán-cortesano actúa como puente decisivo para introducir las formas italianas en castellano?",
    correcta: "Juan Boscán",
    incorrectas: [
      "Jorge Manrique",
      "Íñigo López de Mendoza, marqués de Santillana, en su etapa final"
    ]
  },
  {
    enunciado: "¿Qué motivo paisajístico clásico se asocia al ideal de armonía y refugio del yo poético?",
    correcta: "El 'locus amoenus' renacentista",
    incorrectas: [
      "El 'ubi sunt' elegíaco medieval",
      "El 'mare tenebrarum' épico"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracteriza el petrarquismo en su configuración del sujeto lírico?",
    correcta: "La tensión entre deseo y frustración amorosa, con introspección psicológica",
    incorrectas: [
      "La celebración burlesca del amor como juego cortesano sin conflicto",
      "La negación del yo poético en favor de una voz colectiva"
    ]
  },
  {
    enunciado: "¿Qué género pastoril alcanza en castellano una cumbre con Garcilaso de la Vega?",
    correcta: "La égloga dialogada con marco bucólico",
    incorrectas: [
      "La sátira menipea con personajes alegóricos",
      "El auto sacramental con alegoría eucarística"
    ]
  },
  {
    enunciado: "¿Cuál es la disposición general del soneto renacentista castellano?",
    correcta: "Dos cuartetos y dos tercetos en endecasílabos con variaciones de rima consonante",
    incorrectas: [
      "Tres serventesios y un pareado final en heptasílabos",
      "Una sextina de palabras-rima con versos dodecasílabos"
    ]
  },
  {
    enunciado: "¿Qué ideal filosófico impregna la concepción del amor en la lírica renacentista española?",
    correcta: "El neoplatonismo, que eleva la belleza sensible hacia una verdad espiritual",
    incorrectas: [
      "El nominalismo radical, que niega toda universalidad del amor",
      "El epicureísmo materialista entendido como rechazo de la belleza"
    ]
  },
  {
    enunciado: "¿Cuál de estos temas es nuclear en Garcilaso de la Vega?",
    correcta: "La experiencia amorosa como conflicto entre plenitud deseada y ausencia",
    incorrectas: [
      "La sátira política directa contra figuras cortesanas",
      "La epopeya nacional con tono bélico extensivo"
    ]
  },
  {
    enunciado: "¿Qué égloga de Garcilaso presenta a Salicio lamentando el desdén amoroso?",
    correcta: "La Égloga I",
    incorrectas: [
      "La Égloga II",
      "La Égloga III"
    ]
  },
  {
    enunciado: "¿Qué función cumple la mitología clásica en la poesía de Garcilaso?",
    correcta: "Actúa como código cultural simbólico que amplifica el sentido emocional y moral",
    incorrectas: [
      "Sustituye la realidad histórica por fábulas sin relación con el yo poético",
      "Limita el vocabulario a nombres grecolatinos sin valor alusivo"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico se asocia a la 'naturalidad' en Garcilaso?",
    correcta: "La fluidez sintáctica y la musicalidad sin artificios retóricos ostentosos",
    incorrectas: [
      "La acumulación barroca de hipérbatos forzados",
      "El conceptismo punzante basado en agudezas constantes"
    ]
  },
  {
    enunciado: "¿Cuál es el papel de Boscán respecto de Garcilaso en la lírica renacentista?",
    correcta: "Es colaborador y amigo que impulsa la adopción de metros italianos en castellano",
    incorrectas: [
      "Es rival encarnizado que rechaza la innovación métrica",
      "Es teórico escolástico ajeno a la práctica poética"
    ]
  },
  {
    enunciado: "¿Qué metro español tradicional continúa vivo durante el Renacimiento pese a la italianización?",
    correcta: "El octosílabo, especialmente en romances y cancioneros",
    incorrectas: [
      "El pentasílabo, que sustituye al endecasílabo",
      "El tridecasílabo, que se impone en toda la lírica cortesana"
    ]
  },
  {
    enunciado: "¿Qué ideal formal se busca con la imitación de los modelos italianos?",
    correcta: "Equilibrio, proporción y armonía expresiva",
    incorrectas: [
      "Oscuridad deliberada y ruptura sintáctica extrema",
      "Desorden métrico y variación caprichosa de rimas"
    ]
  },
  {
    enunciado: "¿Qué recurso retórico aparece con frecuencia para expresar la vivencia amorosa en Garcilaso?",
    correcta: "La antítesis que contrasta gozo y dolor",
    incorrectas: [
      "La parodia burlesca sostenida de mitos clásicos",
      "La apóstrofe exclusivamente política al lector"
    ]
  },
  {
    enunciado: "¿Qué soneto de Garcilaso se cita a menudo por su reflexión sobre el paso del tiempo y la fortuna?",
    correcta: "El soneto que comienza “Escrito está en mi alma vuestro gesto” no, sino otros como “En tanto que de rosa y azucena”",
    incorrectas: [
      "El soneto “Ninfas del Tajo, hermosas y contentas”",
      "El soneto “Oh dulces prendas por mi mal halladas” pertenece únicamente a Boscán"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene la naturaleza con el yo poético en la égloga renacentista?",
    correcta: "La naturaleza funciona como espejo y correlato del estado anímico",
    incorrectas: [
      "La naturaleza aparece como escenario indiferente sin valor simbólico",
      "La naturaleza sirve solo para enumeraciones botánicas eruditas"
    ]
  },
  {
    enunciado: "¿Qué supone la adaptación del endecasílabo al castellano en términos fónicos?",
    correcta: "Ajustar el ritmo acentual y la distribución de sílabas a la prosodia del español",
    incorrectas: [
      "Imitar sin cambios la prosodia italiana, con las mismas sinalefas obligatorias",
      "Evitar cualquier sinalefa para mantener doce sílabas constantes"
    ]
  },
  {
    enunciado: "¿Qué valores humanistas se reflejan en la poesía de Garcilaso?",
    correcta: "La dignidad del hombre, el cultivo del ingenio y la educación afectiva",
    incorrectas: [
      "El desprecio de la experiencia personal en favor de dogmas inmutables",
      "La negación de la belleza sensible como vía de conocimiento"
    ]
  },
  {
    enunciado: "¿Cómo se articula la herencia clásica en la lírica renacentista española?",
    correcta: "Por medio de alusiones mitológicas y tópicos latinos resemantizados en clave cristiana y humanista",
    incorrectas: [
      "Rechazando toda alusión clásica por considerarla pagana",
      "Sustituyendo el léxico castellano por latín macarrónico"
    ]
  },
  {
    enunciado: "¿Qué figura se asocia a la musicalidad y brevedad significativa en los sonetos de Garcilaso?",
    correcta: "La encabalgamiento suave que sostiene el fluir del pensamiento",
    incorrectas: [
      "El políptoton constante que entorpece la lectura",
      "El hipérbaton extremo con inversión sistemática del orden"
    ]
  },
  {
    enunciado: "¿Cuál es el horizonte emocional que domina en el petrarquismo garcilasiano?",
    correcta: "La oscilación entre esperanza y desengaño amoroso",
    incorrectas: [
      "La indiferencia estoica sin implicación afectiva",
      "La jactancia heroica propia de la épica bélica"
    ]
  },
  {
    enunciado: "¿Qué relación establece la lírica renacentista con la tradición castellana previa?",
    correcta: "Convivencia y síntesis: se integran las novedades italianas sin eliminar del todo las formas hispánicas",
    incorrectas: [
      "Ruptura total: se prohíben los metros tradicionales",
      "Continuismo absoluto: se niega toda innovación métrica"
    ]
  },
  {
    enunciado: "¿Qué autor sevillano del siglo XVI glosa y eleva a Garcilaso con comentarios y emulación estilística?",
    correcta: "Fernando de Herrera",
    incorrectas: [
      "Lope de Rueda",
      "Juan de Mena"
    ]
  },
  {
    enunciado: "¿Qué función tiene el mito de Apolo y Dafne en la lírica amorosa renacentista?",
    correcta: "Ejemplificar la persecución del amante y la huida de la amada como alegoría del deseo",
    incorrectas: [
      "Explicar el origen del verso endecasílabo como mandato divino",
      "Justificar la sátira social contra la corte imperial"
    ]
  },
  {
    enunciado: "¿Qué rasgo de dicción contribuye a la 'claridad' garcilasiana?",
    correcta: "El léxico selecto pero cotidiano, sin culteranismos extremos",
    incorrectas: [
      "La proliferación de neologismos latinizantes opacos",
      "El uso sistemático de arcaísmos leoneses incomprensibles"
    ]
  },
  {
    enunciado: "¿Qué estructura temática suele presentar el soneto amoroso renacentista?",
    correcta: "Planteamiento del conflicto amoroso y resolución o giro reflexivo en los tercetos",
    incorrectas: [
      "Narración de hechos bélicos con epílogo moralizante",
      "Desarrollo dramático con acotaciones escénicas"
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo distintivo de la Égloga III de Garcilaso?",
    correcta: "La pintura de tapices mitológicos que enmarcan el canto de las ninfas",
    incorrectas: [
      "La invectiva directa contra la guerra italiana",
      "La presencia de un coro satírico urbano"
    ]
  },
  {
    enunciado: "¿Qué actitud vital sintetiza el espíritu renacentista en poesía?",
    correcta: "La búsqueda de armonía entre razón, sensibilidad y forma artística",
    incorrectas: [
      "La exaltación del exceso y la ruptura como fines en sí mismos",
      "La renuncia al placer estético por motivos ascéticos"
    ]
  },
  {
    enunciado: "¿Qué recurso métrico comparte la lira de Fray Luis con la tradición garcilasiana?",
    correcta: "La combinación heptasílabo–endecasílabo en estrofas de cinco versos",
    incorrectas: [
      "La rima asonante libre sin patrón fijo",
      "El uso del arte mayor de catorce sílabas con cesura"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el 'decoro' clásico en la lírica renacentista?",
    correcta: "Adecuar estilo y tono al asunto para mantener la armonía expresiva",
    incorrectas: [
      "Forzar siempre el tono sublime, sin importar el tema",
      "Imponer el registro jocoso en toda circunstancia"
    ]
  },
  {
    enunciado: "¿Qué dimensión ética se atribuye al amor en clave neoplatónica?",
    correcta: "El amor educa el alma, orientándola hacia la virtud mediante la belleza",
    incorrectas: [
      "El amor es pura pasión corporal sin proyección moral",
      "El amor es incompatible con cualquier forma de conocimiento"
    ]
  },
  {
    enunciado: "¿Qué innovación de Garcilaso fue decisiva para la poesía posterior del Siglo de Oro?",
    correcta: "La naturalización del endecasílabo y del soneto en castellano",
    incorrectas: [
      "La introducción del verso blanco sin rima en toda la lírica",
      "La sustitución del romance por la sextina medieval"
    ]
  },
  {
    enunciado: "¿Qué relación guarda la música con la lírica renacentista española?",
    correcta: "La musicalidad del verso se persigue como ideal de belleza y ritmo interno",
    incorrectas: [
      "Se rechaza la musicalidad por considerarla artificio profano",
      "Se delega la musicalidad solo a la métrica octosilábica"
    ]
  },
  {
    enunciado: "¿Qué figura retórica ayuda a elevar lo cotidiano a un plano ideal en Garcilaso?",
    correcta: "La metáfora transparente que vincula lo sensible con lo espiritual",
    incorrectas: [
      "La ironía corrosiva contra los códigos amorosos",
      "La hipérbole grotesca de intención paródica"
    ]
  },
  {
    enunciado: "¿Qué poeta del XVI afirmó con su crítica y emulación el canon garcilasiano?",
    correcta: "Fernando de Herrera, con sus 'Anotaciones' a Garcilaso",
    incorrectas: [
      "Gonzalo de Berceo, con glosas a los sonetos",
      "Quevedo, con comentarios escolares al 'Canzoniere'"
    ]
  },
  {
    enunciado: "¿Qué define el 'espíritu italiano' en la recepción castellana del Renacimiento?",
    correcta: "La asimilación de ideal clásico, humanismo y técnica métrica en una nueva sensibilidad lírica",
    incorrectas: [
      "La mera copia servil de modelos sin adaptación lingüística",
      "La negación de la tradición peninsular anterior al siglo XVI"
    ]
  },
  {
    enunciado: "¿Por qué se considera a Garcilaso fundamento de la lírica moderna en español?",
    correcta: "Porque fija un estándar de forma y naturalidad que influye en todo el Siglo de Oro y más allá",
    incorrectas: [
      "Porque abandona toda rima y crea el verso libre contemporáneo",
      "Porque sustituye la métrica por prosa rítmica en sus églogas"
    ]
  },
  {
    enunciado: "¿Qué convivencia formal caracteriza el periodo renacentista hispánico?",
    correcta: "La de metros italianos con formas tradicionales como el romance",
    incorrectas: [
      "La desaparición absoluta del octosílabo",
      "La exclusión del soneto por considerarse foráneo"
    ]
  }
];
