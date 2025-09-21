// temarios/56-formas-originales-del-ensayo-literario-evolucion-en-los-siglos-xviii-y-xix-el-ensayo-en-el-siglo-xx.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo define con mayor precisión al ensayo literario?",
    correcta: "Prosa de ideas, abierta y personal, que explora y argumenta sin sistema cerrado",
    incorrectas: [
      "Relato de ficción con trama y personajes imprescindibles",
      "Tratado científico con demostraciones formales y axiomas"
    ]
  },
  {
    enunciado: "¿Quiénes se consideran los dos grandes precursores del ensayo moderno en Europa?",
    correcta: "Montaigne y Francis Bacon",
    incorrectas: [
      "Descartes y Pascal",
      "Voltaire y Rousseau"
    ]
  },
  {
    enunciado: "¿En qué se distingue el ensayo del tratado?",
    correcta: "En su carácter tentativo, dialogante y no sistemático",
    incorrectas: [
      "En su métrica fija y rima consonante",
      "En que carece de autor explícito"
    ]
  },
  {
    enunciado: "¿Qué contexto favorece en España el auge del ensayo en el siglo XVIII?",
    correcta: "La Ilustración y el desarrollo de la prensa periódica",
    incorrectas: [
      "La Contrarreforma y la clausura de imprentas",
      "El auge exclusivo de la poesía épica"
    ]
  },
  {
    enunciado: "¿Cuál es el par de obras más representativo de Feijoo?",
    correcta: "Teatro crítico universal y Cartas eruditas y curiosas",
    incorrectas: [
      "Cartas marruecas y Noches lúgubres",
      "La cuestión palpitante y La tribuna"
    ]
  },
  {
    enunciado: "¿Qué texto encarna el programa reformista de Jovellanos en economía?",
    correcta: "Informe sobre la Ley Agraria",
    incorrectas: [
      "El sí de las niñas",
      "La Poética"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracteriza a Cartas marruecas de Cadalso?",
    correcta: "Estructura epistolar y crítica de costumbres desde miradas contrastadas",
    incorrectas: [
      "Novela pastoril con diálogos bucólicos",
      "Poema didáctico en tercetos encadenados"
    ]
  },
  {
    enunciado: "¿Qué tendencia anuncia Noches lúgubres dentro del XVIII español?",
    correcta: "El prerromanticismo y la sensibilidad melancólica",
    incorrectas: [
      "El naturalismo positivista",
      "El conceptismo barroco"
    ]
  },
  {
    enunciado: "¿Qué función tuvieron los periódicos y papeles morales del siglo XVIII?",
    correcta: "Ser vehículo de difusión del ensayo divulgativo y crítico",
    incorrectas: [
      "Sustituir completamente el libro impreso",
      "Publicar exclusivamente poesía cortesana"
    ]
  },
  {
    enunciado: "¿Qué autor consolida el ‘artículo de costumbres’ en el XIX español?",
    correcta: "Mariano José de Larra",
    incorrectas: [
      "Gustavo Adolfo Bécquer",
      "José Echegaray"
    ]
  },
  {
    enunciado: "¿Qué obra de Emilia Pardo Bazán debate la recepción del naturalismo?",
    correcta: "La cuestión palpitante",
    incorrectas: [
      "Los pazos de Ulloa",
      "La Regenta"
    ]
  },
  {
    enunciado: "¿Qué obra monumental de Menéndez Pelayo articula una historia ideológica de España?",
    correcta: "Historia de los heterodoxos españoles",
    incorrectas: [
      "España invertebrada",
      "Del sentimiento trágico de la vida"
    ]
  },
  {
    enunciado: "¿Qué obra de Antonio Ponz se considera clave para el ensayo de viaje ilustrado?",
    correcta: "Viage de España",
    incorrectas: [
      "Cartas marruecas",
      "Fábulas morales"
    ]
  },
  {
    enunciado: "En la poética neoclásica del XVIII, ¿qué principio se impone frente al barroquismo?",
    correcta: "Claridad, verosimilitud y buen gusto",
    incorrectas: [
      "Oscuridad deliberada y artificio extremo",
      "Preferencia por la alegoría hermética"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue al ensayo frente al discurso académico rígido?",
    correcta: "Mayor libertad compositiva y presencia de la voz del autor",
    incorrectas: [
      "Impersonalidad absoluta y citas sin comentario",
      "Obligación de dividirse en hipótesis, método y resultados"
    ]
  },
  {
    enunciado: "¿Qué institución editorial y cultural impulsa el ensayo español en 1923?",
    correcta: "Revista de Occidente (fundada por Ortega y Gasset)",
    incorrectas: [
      "La Real Academia Española",
      "La Generación del 27 como editorial"
    ]
  },
  {
    enunciado: "¿Cuál de estas obras pertenece a Ortega y Gasset?",
    correcta: "La rebelión de las masas",
    incorrectas: [
      "Campos de Castilla",
      "La casa de Aizgorri"
    ]
  },
  {
    enunciado: "¿Qué núcleo temático vertebra Del sentimiento trágico de la vida de Unamuno?",
    correcta: "La tensión entre razón y fe y la conciencia de la muerte",
    incorrectas: [
      "El análisis positivista de la ciencia",
      "La teoría pura de la métrica"
    ]
  },
  {
    enunciado: "¿Cómo definía Ramón Gómez de la Serna la ‘greguería’?",
    correcta: "Metáfora + humor (microensayo poético)",
    incorrectas: [
      "Silogismo + axioma",
      "Epopeya + sátira"
    ]
  },
  {
    enunciado: "¿Qué forma breve popularizó Eugenio d’Ors en su práctica ensayística?",
    correcta: "La glosa como microensayo diario",
    incorrectas: [
      "El romance épico",
      "La égloga dialogada"
    ]
  },
  {
    enunciado: "¿Qué noción central propone María Zambrano para pensar el ensayo filosófico-lírico?",
    correcta: "La ‘razón poética’",
    incorrectas: [
      "La ‘razón matemática’",
      "El ‘determinismo histórico’"
    ]
  },
  {
    enunciado: "¿Qué rasgo comparten muchos ensayos de Azorín?",
    correcta: "Prosa de paisaje, tiempo y memoria con subjetividad intensa",
    incorrectas: [
      "Didascalias escénicas y parlamentos en verso",
      "Exposición geométrica sin imágenes"
    ]
  },
  {
    enunciado: "¿Qué orientación estilística identifica a Baroja en sus prosas ensayísticas?",
    correcta: "Sencillez expresiva, escepticismo y tono antidogmático",
    incorrectas: [
      "Grandilocuencia retórica barroca",
      "Simbolismo hermético constante"
    ]
  },
  {
    enunciado: "¿Qué etiqueta designa la práctica del ensayo breve en prensa cultural del siglo XX?",
    correcta: "Articulismo",
    incorrectas: [
      "Versificación",
      "Entremesismo"
    ]
  },
  {
    enunciado: "¿Qué forma dialógica puede adoptar el ensayo desde sus orígenes humanistas?",
    correcta: "El diálogo filosófico como exploración de ideas",
    incorrectas: [
      "El monólogo dramático en endecasílabos",
      "El tratado legal con artículos numerados"
    ]
  },
  {
    enunciado: "¿Qué modalidad epistolar funciona como soporte frecuente del ensayo?",
    correcta: "La carta como reflexión dirigida a un interlocutor",
    incorrectas: [
      "El edicto judicial",
      "El parte militar"
    ]
  },
  {
    enunciado: "¿Qué función cumple a menudo el prólogo-manifiesto en la tradición ensayística?",
    correcta: "Declarar una poética o un programa crítico",
    incorrectas: [
      "Narrar una fábula con moraleja",
      "Introducir la nómina de personajes"
    ]
  },
  {
    enunciado: "¿Qué género oral se transforma con frecuencia en ensayo escrito?",
    correcta: "La conferencia publicada",
    incorrectas: [
      "El auto sacramental",
      "La égloga escénica"
    ]
  },
  {
    enunciado: "¿Qué microforma se aproxima al ‘pensamiento en cápsula’ en el ensayo?",
    correcta: "El aforismo",
    incorrectas: [
      "La tirada épica",
      "La anáfora dramática"
    ]
  },
  {
    enunciado: "¿Qué rasgo hace de la crónica de viaje un campo fértil para el ensayo?",
    correcta: "La mezcla de observación, lectura del paisaje e ideas",
    incorrectas: [
      "La exigencia de rima y metro regulares",
      "La prohibición de referencias culturales"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento condiciona la geografía del ensayo español a partir de 1939?",
    correcta: "El exilio intelectual y la duplicación de espacios editoriales en América",
    incorrectas: [
      "La abolición de la prosa ensayística",
      "El cierre definitivo de las universidades"
    ]
  },
  {
    enunciado: "¿Cómo se diferencia el ensayo divulgativo del académico?",
    correcta: "Por su voluntad de claridad y público amplio sin renunciar al rigor",
    incorrectas: [
      "Por prescindir de toda referencia y datos",
      "Porque debe escribirse siempre en verso"
    ]
  },
  {
    enunciado: "¿Qué tríada retórica se activa con frecuencia en la persuasión ensayística?",
    correcta: "Ethos, logos y pathos",
    incorrectas: [
      "Mímesis, catarsis y peripeteia",
      "Sujeto, predicado y complemento"
    ]
  },
  {
    enunciado: "¿Qué recursos son característicos del estilo del ensayo?",
    correcta: "Analogía, paradoja, antítesis y ejemplo",
    incorrectas: [
      "Sinalefa, sinéresis y diéresis métricas",
      "Acotación, mutis y aparte"
    ]
  },
  {
    enunciado: "¿Para qué sirve la intertextualidad (cita y alusión) en el ensayo?",
    correcta: "Para dialogar con tradiciones y fortalecer la argumentación",
    incorrectas: [
      "Para ocultar la autoría del texto",
      "Para sustituir el razonamiento por enumeraciones"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al ‘artículo de costumbres’ decimonónico?",
    correcta: "Cuadros de vida urbana con crítica moral e ironía",
    incorrectas: [
      "Monólogos épicos de héroes mitológicos",
      "Descripciones de batallas en hexámetros"
    ]
  },
  {
    enunciado: "¿Qué define al ensayo científico-divulgativo del siglo XX?",
    correcta: "Explicar avances y conceptos con lenguaje accesible y preciso",
    incorrectas: [
      "Imitar el estilo barroco para impresionar",
      "Evitar cualquier ejemplo o analogía"
    ]
  },
  {
    enunciado: "¿Qué papel tuvo Revista de Occidente en el sistema del ensayo español?",
    correcta: "Difundir corrientes europeas y consolidar un espacio para la prosa de ideas",
    incorrectas: [
      "Publicar exclusivamente poesía de vanguardia",
      "Sustituir las universidades en su labor docente"
    ]
  },
  {
    enunciado: "¿Qué rasgo comparte el ensayo del 98 español?",
    correcta: "Subjetividad existencial y preocupación por la identidad cultural",
    incorrectas: [
      "Celebración triunfalista sin crítica social",
      "Silencio ante los problemas nacionales"
    ]
  },
  {
    enunciado: "¿Qué oposición distingue ensayo y novela en su núcleo?",
    correcta: "Primacía de la argumentación y la idea frente a la ficción narrativa",
    incorrectas: [
      "Obligación del verso frente a la prosa",
      "Ausencia de autor frente a narrador omnisciente"
    ]
  }
];
