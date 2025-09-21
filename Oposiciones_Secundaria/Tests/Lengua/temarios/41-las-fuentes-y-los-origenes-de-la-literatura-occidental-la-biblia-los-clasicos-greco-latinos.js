// temarios/41-las-fuentes-y-los-origenes-de-la-literatura-occidental-la-biblia-los-clasicos-greco-latinos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué dos raíces principales identifican el origen de la literatura occidental?",
    correcta: "La tradición grecolatina y la tradición bíblica judeocristiana",
    incorrectas: [
      "Las literaturas china y japonesa",
      "Las literaturas nórdica y eslava exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué obra sumeria suele considerarse antecedente lejano de la épica occidental por sus temas de viaje y heroísmo?",
    correcta: "La Epopeya de Gilgamesh",
    incorrectas: [
      "El Cantar de los Nibelungos",
      "La Canción de Roldán"
    ]
  },
  {
    enunciado: "¿Qué rasgo formal caracteriza a gran parte de la poesía bíblica hebrea?",
    correcta: "El paralelismo de miembros",
    incorrectas: [
      "El uso sistemático de la rima consonante",
      "El alejandrino isométrico"
    ]
  },
  {
    enunciado: "¿Qué traducción griega del Antiguo Testamento facilitó la difusión de la Biblia en el mundo helenístico?",
    correcta: "La Septuaginta",
    incorrectas: [
      "La Peshitta",
      "La Vulgata"
    ]
  },
  {
    enunciado: "¿Cuál fue la traducción latina de la Biblia que se convirtió en referencia en Occidente durante siglos?",
    correcta: "La Vulgata de San Jerónimo",
    incorrectas: [
      "La Vetus Latina de Tertuliano",
      "La Biblia del Oso"
    ]
  },
  {
    enunciado: "¿Qué géneros literarios se reconocen en la Biblia además del narrativo?",
    correcta: "Poético, sapiencial, profético y apocalíptico",
    incorrectas: [
      "Únicamente lírico y dramático",
      "Solo épico y elegíaco"
    ]
  },
  {
    enunciado: "¿Qué autor grecolatino fijó el modelo de épica nacional romana?",
    correcta: "Virgilio con la Eneida",
    incorrectas: [
      "Horacio con las Odas",
      "Ovidio con el Arte de amar"
    ]
  },
  {
    enunciado: "¿Qué poeta latino es fundamental para la pervivencia de los mitos clásicos a través de relatos en cadena?",
    correcta: "Ovidio con las Metamorfosis",
    incorrectas: [
      "Lucano con la Farsalia",
      "Juvenal con las Sátiras"
    ]
  },
  {
    enunciado: "¿Qué autor griego formuló la teoría de la mímesis y de la catarsis en relación con la tragedia?",
    correcta: "Aristóteles en la Poética",
    incorrectas: [
      "Platón en el Fedro",
      "Longino en Sobre lo sublime"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a la tragedia griega clásica?",
    correcta: "El conflicto entre destino y libertad humana",
    incorrectas: [
      "La burla directa de dioses y héroes como norma",
      "La improvisación sin coro ni episodios"
    ]
  },
  {
    enunciado: "¿Cuál es la dupla de poemas homéricos que funda la épica griega?",
    correcta: "Ilíada y Odisea",
    incorrectas: [
      "Teogonía y Trabajos y días",
      "Eneida y Metamorfosis"
    ]
  },
  {
    enunciado: "¿Qué dramaturgo griego cultiva la comedia de tono político y satírico?",
    correcta: "Aristófanes",
    incorrectas: [
      "Eurípides",
      "Esquilo"
    ]
  },
  {
    enunciado: "¿Qué figura retórica es especialmente frecuente en los Salmos bíblicos?",
    correcta: "La anáfora",
    incorrectas: [
      "El hipérbaton barroco",
      "La sinestesia simbolista"
    ]
  },
  {
    enunciado: "¿Qué autores latinos son referencia en oratoria y prosa moral respectivamente?",
    correcta: "Cicerón y Séneca",
    incorrectas: [
      "Catulo y Propercio",
      "Virgilio y Horacio"
    ]
  },
  {
    enunciado: "¿Qué tipo de relato aparece con fuerza en los Evangelios y fue muy influyente en la narrativa occidental?",
    correcta: "La parábola",
    incorrectas: [
      "La égloga",
      "La epístola heroica"
    ]
  },
  {
    enunciado: "¿Qué institución cultural fue clave para la conservación manuscrita de textos bíblicos y clásicos en la Alta Edad Media?",
    correcta: "Los scriptoria monásticos",
    incorrectas: [
      "Las academias renacentistas italianas",
      "Las universidades ilustradas"
    ]
  },
  {
    enunciado: "¿Qué centro peninsular medieval destacó en la mediación y traducción de saberes grecoárabes al latín y al romance?",
    correcta: "La Escuela de Traductores de Toledo",
    incorrectas: [
      "La Sorbona de París",
      "El Estudio salmantino del siglo XVIII"
    ]
  },
  {
    enunciado: "¿Qué tríada de tragediógrafos griegos constituye el canon clásico?",
    correcta: "Esquilo, Sófocles y Eurípides",
    incorrectas: [
      "Plauto, Terencio y Séneca",
      "Heródoto, Tucídides y Jenofonte"
    ]
  },
  {
    enunciado: "¿Qué historiadores griegos sientan las bases del relato histórico crítico?",
    correcta: "Heródoto y Tucídides",
    incorrectas: [
      "Livio y Suetonio",
      "Plutarco y Diodoro como únicos iniciadores"
    ]
  },
  {
    enunciado: "¿Qué rasgo define la lírica de Horacio en las Odas?",
    correcta: "El ideal de medida y equilibrio (aurea mediocritas)",
    incorrectas: [
      "La exaltación del exceso dionisíaco",
      "La defensa del irracionalismo trágico"
    ]
  },
  {
    enunciado: "¿Qué género cultivaron Plauto y Terencio que influyó en el teatro europeo posterior?",
    correcta: "La comedia latina",
    incorrectas: [
      "La sátira menipea exclusivamente",
      "La tragedia lírica"
    ]
  },
  {
    enunciado: "¿Qué motivo bíblico ha inspirado innumerables reescrituras sobre culpa y responsabilidad?",
    correcta: "El relato de Caín y Abel",
    incorrectas: [
      "La maldición de Cam como mito central del Barroco español",
      "La torre de Babel solo en la comedia áurea"
    ]
  },
  {
    enunciado: "¿Qué obra renacentista integra tradición clásica y cristiana en una epopeya en lengua inglesa?",
    correcta: "El Paraíso perdido de John Milton",
    incorrectas: [
      "La Jerusalén liberada de Tasso en prosa inglesa",
      "Los Ensayos de Montaigne"
    ]
  },
  {
    enunciado: "¿Qué concepto explica la presencia de ecos y reescrituras de textos bíblicos y clásicos en autores modernos?",
    correcta: "Intertextualidad",
    incorrectas: [
      "Parataxis",
      "Diegesis"
    ]
  },
  {
    enunciado: "¿Qué obra de Safo representa el valor de la lírica monódica arcaica?",
    correcta: "Los fragmentos líricos conservados",
    incorrectas: [
      "El himno homérico a Hermes",
      "La Anábasis"
    ]
  },
  {
    enunciado: "¿Qué obra latina compila metamorfosis míticas que inspiraron a pintores y poetas del Renacimiento y Barroco?",
    correcta: "Metamorfosis de Ovidio",
    incorrectas: [
      "Bucólicas de Virgilio",
      "La Farsalia de Lucano"
    ]
  },
  {
    enunciado: "¿Qué dualidad de valores suele articular la tragedia griega clásica?",
    correcta: "Ley divina y ley humana",
    incorrectas: [
      "Ocio y negocio como polos trágicos",
      "Risa y llanto como polos cómicos"
    ]
  },
  {
    enunciado: "¿Qué texto griego narra el retorno de Odiseo y funda el motivo del viaje de regreso?",
    correcta: "La Odisea",
    incorrectas: [
      "La Eneida",
      "Los Trabajos y días"
    ]
  },
  {
    enunciado: "¿Qué autor latino escribió cartas morales de gran influjo en la prosa ética europea?",
    correcta: "Séneca",
    incorrectas: [
      "Catulo",
      "Marcial"
    ]
  },
  {
    enunciado: "¿Qué conjunto bíblico reúne poemas de alabanza y súplica que han marcado la lírica religiosa occidental?",
    correcta: "El Libro de los Salmos",
    incorrectas: [
      "El Eclesiastés exclusivamente narrativo",
      "El Levítico como cancionero"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron los humanistas del Renacimiento respecto a los clásicos?",
    correcta: "Recuperar, editar y comentar textos grecolatinos con métodos filológicos",
    incorrectas: [
      "Negar todo valor a los textos paganos",
      "Traducirlos al árabe para su ocultación"
    ]
  },
  {
    enunciado: "¿Qué rasgo formal de la Biblia influyó en la prosa oratoria y ensayística occidental?",
    correcta: "El ritmo solemne y el paralelismo sintáctico",
    incorrectas: [
      "El verso alejandrino emparejado",
      "La rima consonante fija en prosa"
    ]
  },
  {
    enunciado: "¿Qué poeta latino fijó un ideal de arte poética y medida que inspiró a neoclásicos y clasicistas?",
    correcta: "Horacio",
    incorrectas: [
      "Propercio",
      "Estacio"
    ]
  },
  {
    enunciado: "¿Qué cómico latino adaptó con frecuencia modelos griegos de la comedia nueva?",
    correcta: "Terencio",
    incorrectas: [
      "Esquilo",
      "Lucrecio"
    ]
  },
  {
    enunciado: "¿Qué autor griego de prosa histórica es clave por su análisis de la guerra del Peloponeso?",
    correcta: "Tucídides",
    incorrectas: [
      "Jenofonte en la Guerra Gálica",
      "Heródoto en la Historia de Roma"
    ]
  },
  {
    enunciado: "¿Qué concepto explica la continuidad de motivos y símbolos desde la Antigüedad hasta la literatura moderna?",
    correcta: "Tradición clásica",
    incorrectas: [
      "Anacronismo voluntario",
      "Parodia universal"
    ]
  },
  {
    enunciado: "¿Qué héroe homérico encarna el ideal de fuerza guerrera frente a la astucia del retorno?",
    correcta: "Aquiles",
    incorrectas: [
      "Eneas como arquero tracio",
      "Orfeo como general aqueo"
    ]
  },
  {
    enunciado: "¿Qué obra latina narra el viaje de Eneas y ofrece un mito fundacional de Roma?",
    correcta: "La Eneida",
    incorrectas: [
      "La Odisea",
      "La Teogonía"
    ]
  },
  {
    enunciado: "¿Qué rasgo de la comedia de Aristófanes pervive en la sátira política contemporánea?",
    correcta: "La crítica directa a personajes y costumbres cívicas",
    incorrectas: [
      "El silencio del coro como norma",
      "La ausencia total de referencias actuales"
    ]
  },
  {
    enunciado: "¿Qué sabio bíblico es símbolo de la paciencia frente al sufrimiento y ha inspirado a la literatura europea?",
    correcta: "Job",
    incorrectas: [
      "Sansón",
      "Jonás como rey penitente"
    ]
  },
  {
    enunciado: "¿Qué prosa latina de Tácito es ejemplar por su concisión y mirada moral sobre el poder?",
    correcta: "Los Anales",
    incorrectas: [
      "Las Bucólicas",
      "La Retórica a Herenio"
    ]
  }
];
