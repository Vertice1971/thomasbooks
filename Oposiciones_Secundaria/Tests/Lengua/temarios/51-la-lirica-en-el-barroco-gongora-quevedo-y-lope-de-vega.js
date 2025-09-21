// temarios/51-la-lirica-en-el-barroco-gongora-quevedo-y-lope-de-vega.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué pareja de etiquetas resume las dos grandes tendencias expresivas de la lírica barroca en España?",
    correcta: "Culteranismo y conceptismo",
    incorrectas: [
      "Trovadorismo y manierismo",
      "Realismo social y simbolismo"
    ]
  },
  {
    enunciado: "¿Qué rasgo temático es característico del Barroco literario hispano?",
    correcta: "El desengaño ante la fugacidad del tiempo y la inestabilidad del mundo",
    incorrectas: [
      "La exaltación optimista del progreso científico sin matices",
      "La confianza renacentista en la armonía universal sin conflicto"
    ]
  },
  {
    enunciado: "¿Qué define con precisión la ‘silva’ usada por los poetas barrocos?",
    correcta: "Estrofa de extensión libre que combina heptasílabos y endecasílabos con rima consonante variable",
    incorrectas: [
      "Serie fija de dodecasílabos con rima asonante alterna",
      "Estancia compuesta solo por alejandrinos con cesura obligatoria"
    ]
  },
  {
    enunciado: "¿Qué elemento formal distingue a la letrilla barroca?",
    correcta: "La presencia de un estribillo que se repite periódicamente",
    incorrectas: [
      "El uso exclusivo de versos de arte mayor",
      "La ausencia total de refranes o sentencias"
    ]
  },
  {
    enunciado: "En el romance barroco, ¿qué rasgo métrico es canónico?",
    correcta: "Versos octosílabos con rima asonante en los pares",
    incorrectas: [
      "Endecasílabos con rima consonante en todos los versos",
      "Heptasílabos con rima cruzada constante"
    ]
  },
  {
    enunciado: "¿En qué estrofa está escrita la ‘Fábula de Polifemo y Galatea’ de Góngora?",
    correcta: "En octavas reales (ABABABCC) de endecasílabos",
    incorrectas: [
      "En tercetos encadenados (ABA BCB CDC)",
      "En redondillas de arte menor"
    ]
  },
  {
    enunciado: "¿Qué forma métrica vertebra las ‘Soledades’ de Góngora?",
    correcta: "La silva, que permite libertad rítmica y variación de rimas",
    incorrectas: [
      "El soneto, con dos cuartetos y dos tercetos",
      "La lira, con esquema 7a 11B 7a 7b 11B"
    ]
  },
  {
    enunciado: "¿Qué proyecto estructural se atribuye a las ‘Soledades’ y qué ocurrió de hecho?",
    correcta: "Se proyectaron cuatro; se escribieron dos completas",
    incorrectas: [
      "Se pensaron dos; se publicaron íntegramente cuatro",
      "Se concibió una única soledad y quedó inconclusa"
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo estilístico nuclear del culteranismo gongorino?",
    correcta: "El hipérbaton radical acompañado de cultismos y metáfora continuada",
    incorrectas: [
      "El minimalismo léxico y la parataxis desnuda",
      "El realismo llano sin imágenes ni alusiones clásicas"
    ]
  },
  {
    enunciado: "¿Qué tópico articula el soneto gongorino “Mientras por competir con tu cabello”?",
    correcta: "El carpe diem y el memento mori",
    incorrectas: [
      "El beatus ille de retiro campestre sin tensión temporal",
      "La alabanza épica de un héroe guerrero"
    ]
  },
  {
    enunciado: "¿Qué letrilla satírica de Góngora comienza con una declaración de vida modesta?",
    correcta: "“Ándeme yo caliente y ríase la gente”",
    incorrectas: [
      "“Poderoso caballero es Don Dinero”",
      "“Miré los muros de la patria mía”"
    ]
  },
  {
    enunciado: "¿Qué define con precisión el conceptismo en Quevedo?",
    correcta: "La densidad semántica y la agudeza que concentran sentido en el mínimo espacio verbal",
    incorrectas: [
      "La acumulación de periífrasis mitológicas como fin en sí mismo",
      "La prioridad absoluta del color sensorial sobre el pensamiento"
    ]
  },
  {
    enunciado: "¿Cuál es el verso final del soneto de Quevedo “Amor constante más allá de la muerte”?",
    correcta: "“polvo serán, mas polvo enamorado”",
    incorrectas: [
      "“ceniza helada, mas ceniza pura”",
      "“sombra seré, mas sombra sin pecado”"
    ]
  },
  {
    enunciado: "¿Qué composición satírica de Quevedo denuncia el poder del dinero?",
    correcta: "La letrilla “Poderoso caballero es Don Dinero”",
    incorrectas: [
      "El romance “Servía en Orán al rey”",
      "El soneto “Desmayarse, atreverse, estar furioso”"
    ]
  },
  {
    enunciado: "¿Qué recursos retóricos son habituales en la poesía conceptista de Quevedo?",
    correcta: "Antítesis, retruécano, dilogía, paronomasia y elipsis",
    incorrectas: [
      "Hipérbaton periático y sinestesia de corte pictórico",
      "Anáforas épicas y epítetos formularios medievales"
    ]
  },
  {
    enunciado: "¿Qué registro temático no es ajeno a la lírica de Quevedo?",
    correcta: "El amoroso petrarquista reinterpretado con desengaño",
    incorrectas: [
      "El misticismo doctrinal escolástico en verso didáctico",
      "La autobiografía novelesca en prosa rimada"
    ]
  },
  {
    enunciado: "¿Qué libro de Lope de Vega reúne sonetos de conversión y devoción?",
    correcta: "Rimas sacras",
    incorrectas: [
      "Rimas humanas",
      "La Dorotea"
    ]
  },
  {
    enunciado: "¿Qué rasgo define la dicción lírica de Lope en comparación con Góngora?",
    correcta: "La claridad emotiva y la versatilidad métrica frente al hermetismo",
    incorrectas: [
      "La renuncia a toda tradición popular en favor del latín",
      "El uso exclusivo de silvas en toda su producción"
    ]
  },
  {
    enunciado: "¿Qué soneto de Lope enumera contradicciones del enamorado con ritmo impetuoso?",
    correcta: "“Desmayarse, atreverse, estar furioso…”",
    incorrectas: [
      "“¡Ah de la vida!… ¿Nadie me responde?”",
      "“Mientras por competir con tu cabello”"
    ]
  },
  {
    enunciado: "¿Qué conjunto atribuido a Lope juega con un alter ego poético irónico?",
    correcta: "Rimas humanas y divinas del licenciado Tomé de Burguillos",
    incorrectas: [
      "Rimas de Tomé de Aquino",
      "Canta sola a Lisi"
    ]
  },
  {
    enunciado: "¿Cómo se relacionan culteranismo y conceptismo en la práctica poética del Siglo de Oro?",
    correcta: "Son tendencias porosas que a veces se hibridan en un mismo autor",
    incorrectas: [
      "Son escuelas cerradas e incompatibles por definición",
      "Designan géneros distintos, no estilos"
    ]
  },
  {
    enunciado: "¿Qué topos barroco expresa la vanidad de lo mundano y la inestabilidad de la fortuna?",
    correcta: "Vanitas y teatrum mundi",
    incorrectas: [
      "Ubi sunt y locus amoenus exclusivamente",
      "Laus Hispaniae y alabanza de aldea"
    ]
  },
  {
    enunciado: "¿Qué define con exactitud la octava real?",
    correcta: "Estrofa de ocho endecasílabos con rima ABABABCC",
    incorrectas: [
      "Ocho heptasílabos con rima ABBAABBA",
      "Diez endecasílabos con rima encadenada"
    ]
  },
  {
    enunciado: "¿Qué rasgo métrico es propio del soneto clásico practicado por los tres autores?",
    correcta: "Catorce endecasílabos distribuidos en dos cuartetos y dos tercetos",
    incorrectas: [
      "Doce alejandrinos con pareado final",
      "Veinte octosílabos con estribillo"
    ]
  },
  {
    enunciado: "¿Qué figura sintáctica extrema caracteriza numerosos periodos de Góngora?",
    correcta: "El hipérbaton de largo alcance",
    incorrectas: [
      "El paralelismo monótono sin inversión",
      "La aposición nominal sin adjetivación"
    ]
  },
  {
    enunciado: "¿Qué figura sensorial emplea Góngora para intensificar la imagen poética?",
    correcta: "La sinestesia, que cruza impresiones de distintos sentidos",
    incorrectas: [
      "La anadiplosis puramente lógica",
      "La prosopopeya exclusiva de animales"
    ]
  },
  {
    enunciado: "¿Qué tensión crítica vertebra la relación literaria entre Quevedo y Góngora?",
    correcta: "La sátira quevediana contra el culteranismo y la defensa del ingenio propio",
    incorrectas: [
      "La colaboración constante en poemas pastoriles conjuntos",
      "El magisterio público de Góngora sobre Quevedo en Salamanca"
    ]
  },
  {
    enunciado: "¿Qué hito crítico del siglo XX revalorizó decisivamente a Góngora?",
    correcta: "La celebración del tricentenario en 1927 por la Generación del 27",
    incorrectas: [
      "La edición príncipe de 1605 realizada por Cervantes",
      "El informe inquisitorial de 1630 que lo absolvió de culteranismo"
    ]
  },
  {
    enunciado: "¿Qué orientación ética late en buena parte de la lírica grave de Quevedo?",
    correcta: "Un estoicismo cristiano que subraya la caducidad y la virtud",
    incorrectas: [
      "Un hedonismo pagano que celebra el lujo sin límites",
      "Un naturalismo determinista ajeno a la moral"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña lo popular en la lírica de Lope?",
    correcta: "Aporta moldes y tonos (romances, canciones) que Lope eleva con maestría",
    incorrectas: [
      "Desaparece por completo en favor del latín clásico",
      "Se limita a simples coplas sin trabajo formal"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la metáfora en Góngora frente al concepto en Quevedo?",
    correcta: "En Góngora, expansión sensorial y periífrasis; en Quevedo, concentración y agudeza lógica",
    incorrectas: [
      "En Góngora predominan juegos de palabras; en Quevedo, descripciones pintorescas",
      "En ambos, la metáfora se evita para ganar claridad"
    ]
  },
  {
    enunciado: "¿Qué personaje mítico encarna el erotismo y la plasticidad sensorial en el ‘Polifemo’?",
    correcta: "Galatea frente al deseo de Polifemo y Acis",
    incorrectas: [
      "Dafne frente a Apolo",
      "Ariadna frente a Teseo"
    ]
  },
  {
    enunciado: "¿Qué poema quevediano interroga con ‘¡Ah de la vida!...’ el sentido del tiempo vivido?",
    correcta: "Un soneto de desengaño metafísico sobre la brevedad de la vida",
    incorrectas: [
      "Una égloga pastoril de tema bucólico",
      "Una letrilla devota con estribillo mariano"
    ]
  },
  {
    enunciado: "¿Qué rasgo técnico usa con frecuencia Quevedo para intensificar el sentido con pocos elementos?",
    correcta: "La elipsis y el zeugma",
    incorrectas: [
      "La perífrasis mitológica continuada",
      "La anáfora épica de largo aliento"
    ]
  },
  {
    enunciado: "¿Qué relación establece Lope entre poesía y experiencia vital en sus ‘Rimas sacras’?",
    correcta: "Una voz confesional que explora culpa, misericordia y conversión",
    incorrectas: [
      "Una poética exclusivamente filosófica sin yo lírico",
      "Una sátira política contra validos y ministros"
    ]
  },
  {
    enunciado: "¿Cómo se manifiesta la sátira social en la lírica barroca?",
    correcta: "Mediante letrillas y romances que caricaturizan vicios e hipocresías",
    incorrectas: [
      "Por tratados doctrinales en latín sin elementos poéticos",
      "Solo a través de autos sacramentales"
    ]
  },
  {
    enunciado: "¿Qué noción teórica sistematiza Baltasar Gracián en ‘Agudeza y arte de ingenio’ (1648)?",
    correcta: "La agudeza conceptista como fundamento del ingenio poético y retórico",
    incorrectas: [
      "La métrica italiana del endecasílabo heroico",
      "La prosodia árabe como base del culteranismo"
    ]
  },
  {
    enunciado: "¿Qué función cumple el decoro en la lírica barroca de estos autores?",
    correcta: "Adecuar registro y estilo a la materia (grave, amorosa, burlesca) para potenciar el efecto",
    incorrectas: [
      "Uniformar todos los poemas al estilo sublime",
