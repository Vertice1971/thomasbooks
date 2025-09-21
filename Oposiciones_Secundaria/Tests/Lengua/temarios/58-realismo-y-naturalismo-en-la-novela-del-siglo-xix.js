// temarios/58-realismo-y-naturalismo-en-la-novela-del-siglo-xix.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define mejor al Realismo decimonónico en narrativa?",
    correcta: "Representación verosímil y crítica de la vida contemporánea con atención a lo social y psicológico",
    incorrectas: [
      "Idealización alegórica de asuntos mitológicos",
      "Reescritura caballeresca con héroes sobrenaturales"
    ]
  },
  {
    enunciado: "¿Cuál es el núcleo teórico del Naturalismo según Zola?",
    correcta: "Determinismo de herencia, medio y momento, con observación experimental",
    incorrectas: [
      "Inspiración mística y libre albedrío absoluto",
      "Imitación de modelos clásicos y regla de las tres unidades"
    ]
  },
  {
    enunciado: "¿Qué función cumple el narrador en la novela realista canónica?",
    correcta: "Omnisciente modulable con distancia irónica y control del punto de vista",
    incorrectas: [
      "Narrador lírico en primera persona siempre",
      "Ausencia total de narrador y solo diálogos"
    ]
  },
  {
    enunciado: "¿Qué técnica permite fundir voz del narrador y conciencia del personaje?",
    correcta: "Estilo indirecto libre",
    incorrectas: [
      "Verso blanco narrativo",
      "Monólogo dramático en segunda persona"
    ]
  },
  {
    enunciado: "¿Qué circuito de publicación impulsó la difusión de la novela realista?",
    correcta: "El folletín y la serialización en prensa",
    incorrectas: [
      "Exclusivamente manuscritos cortesanos",
      "Ediciones únicas de lujo sin tiradas"
    ]
  },
  {
    enunciado: "¿Qué espacios son emblemáticos del Realismo español?",
    correcta: "Ciudad moderna, provincias, cafés, casinos y ámbitos domésticos",
    incorrectas: [
      "Bosques encantados y castillos feéricos",
      "Islas desiertas y reinos mitológicos"
    ]
  },
  {
    enunciado: "¿Qué autor se considera vértice del Realismo español por amplitud y variedad?",
    correcta: "Benito Pérez Galdós",
    incorrectas: [
      "José de Espronceda",
      "Leandro F. de Moratín"
    ]
  },
  {
    enunciado: "¿Cuál es una novela capital de Galdós en el ciclo contemporáneo?",
    correcta: "Fortunata y Jacinta",
    incorrectas: [
      "La Celestina",
      "Don Juan Tenorio"
    ]
  },
  {
    enunciado: "¿Qué ciudad ficcional satiriza Clarín en La Regenta?",
    correcta: "Vetusta (trasunto de Oviedo)",
    incorrectas: [
      "Orbajosa (trasunto de Toledo)",
      "Brumelburgo (trasunto de Burgos)"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes es obra de Juan Valera?",
    correcta: "Pepita Jiménez",
    incorrectas: [
      "La desheredada",
      "La barraca"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a Pereda dentro del realismo español?",
    correcta: "Tradicionalismo regional y pintura de costumbres",
    incorrectas: [
      "Vanguardismo simbolista",
      "Sátira urbana cosmopolita exclusiva"
    ]
  },
  {
    enunciado: "¿Qué novela de Pereda es paradigmática del litoral cántabro?",
    correcta: "Sotileza",
    incorrectas: [
      "La madre naturaleza",
      "Su único hijo"
    ]
  },
  {
    enunciado: "¿Qué autor representa un naturalismo social de fin de siglo con escenarios levantinos?",
    correcta: "Vicente Blasco Ibáñez",
    incorrectas: [
      "Pío Baroja",
      "Azorín"
    ]
  },
  {
    enunciado: "¿Cuál de estas novelas es de Blasco Ibáñez?",
    correcta: "La barraca",
    incorrectas: [
      "Miau",
      "Doña Luz"
    ]
  },
  {
    enunciado: "¿Qué ensayo abrió la gran polémica sobre el Naturalismo en España?",
    correcta: "La cuestión palpitante, de Emilia Pardo Bazán",
    incorrectas: [
      "El romancero viejo, de Agustín Durán",
      "El Quijote comentado, de Menéndez Pelayo"
    ]
  },
  {
    enunciado: "¿Cuál es una novela fundamental de Pardo Bazán con impronta naturalista?",
    correcta: "Los pazos de Ulloa",
    incorrectas: [
      "La hermana San Sulpicio",
      "Cañas y barro"
    ]
  },
  {
    enunciado: "¿Cómo se caracteriza el Naturalismo español frente al de Zola?",
    correcta: "Matiza el determinismo con consideraciones morales y religiosas",
    incorrectas: [
      "Radicaliza el determinismo negando toda ética",
      "Abandona la observación por la alegoría"
    ]
  },
  {
    enunciado: "¿Qué diferencia operativa separa Realismo y Naturalismo?",
    correcta: "El Naturalismo enfatiza causalidad biológica y ambiental; el Realismo, observación social y psicológica",
    incorrectas: [
      "El Realismo es alegórico y el Naturalismo, caballeresco",
      "El Naturalismo usa verso y el Realismo solo prosa"
    ]
  },
  {
    enunciado: "¿Qué tema femenino recorre la novela realista española?",
    correcta: "Conflicto entre matrimonio, deseo y autonomía de la mujer",
    incorrectas: [
      "Heroísmo bélico de reinas amazónicas",
      "Predominio de monjas guerreras medievales"
    ]
  },
  {
    enunciado: "¿Qué función simbólica adquiere Madrid en Galdós?",
    correcta: "Organismo moderno que articula clases, comercio y política",
    incorrectas: [
      "Mito pastoril intemporal",
      "Ciudad fantástica sin referencias reales"
    ]
  },
  {
    enunciado: "¿Qué obra galdosiana afronta el choque ideológico en una ciudad de provincias?",
    correcta: "Doña Perfecta",
    incorrectas: [
      "El sombrero de tres picos",
      "Marianela"
    ]
  },
  {
    enunciado: "¿Qué novela de Galdós aborda la burocracia y el fracaso administrativo?",
    correcta: "Miau",
    incorrectas: [
      "La Fontana de Oro",
      "La Tribuna"
    ]
  },
  {
    enunciado: "¿Cuál de estas novelas galdosianas centra la compasión y la marginalidad urbana?",
    correcta: "Misericordia",
    incorrectas: [
      "Cañas y barro",
      "Juanita la Larga"
    ]
  },
  {
    enunciado: "¿Qué título marca en Galdós una exploración de la miseria moral y social de la periferia?",
    correcta: "La desheredada",
    incorrectas: [
      "El señor de Bembibre",
      "La Regenta"
    ]
  },
  {
    enunciado: "¿Qué personaje encarna la cuestión de la emancipación femenina en Galdós?",
    correcta: "Tristana",
    incorrectas: [
      "Fortunata (como noble viuda)",
      "Ana Karenina (personaje galdosiano)"
    ]
  },
  {
    enunciado: "¿Qué otra novela mayor compuso Clarín además de La Regenta?",
    correcta: "Su único hijo",
    incorrectas: [
      "La de Bringas",
      "Peñas arriba"
    ]
  },
  {
    enunciado: "¿Qué procedimiento estructural es típico en el Realismo para articular el tiempo narrativo?",
    correcta: "Alternancia de escenas y sumarios con progresión cronológica",
    incorrectas: [
      "Episodios oníricos sin conexión causal",
      "Estructuras circulares puramente alegóricas"
    ]
  },
  {
    enunciado: "¿Qué rasgo de voz narrativa destaca en muchos realistas españoles?",
    correcta: "Ironía moderada y focalización variable",
    incorrectas: [
      "Neutralidad muda sin juicio",
      "Segunda persona imperativa constante"
    ]
  },
  {
    enunciado: "¿Qué ciclo define mejor el proyecto total de Balzac?",
    correcta: "La Comédie humaine",
    incorrectas: [
      "La Recherche du temps perdu",
      "Les Fleurs du mal"
    ]
  },
  {
    enunciado: "¿Qué rasgo técnico defiende Flaubert en Madame Bovary?",
    correcta: "Estilo impersonal y precisión léxica extrema",
    incorrectas: [
      "Improvisación sentimental y digresión libre",
      "Narración en verso alejandrino"
    ]
  },
  {
    enunciado: "¿Qué aportan Tolstói y Dostoievski al horizonte realista europeo?",
    correcta: "Profundidad moral y psicológica de los conflictos",
    incorrectas: [
      "Evasión mitológica y maravilla medieval",
      "Normativismo clasicista estricto"
    ]
  },
  {
    enunciado: "¿Cómo se integran sociolectos y registros en la novela realista?",
    correcta: "Reproducen diferencias de clase y oficio en diálogos y descripciones",
    incorrectas: [
      "Se eliminan para homogeneizar el habla",
      "Se sustituyen por latinismos arcaicos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la llamada ‘novela de tesis’ en el XIX español?",
    correcta: "Plantea un conflicto ideológico explícito con intención demostrativa",
    incorrectas: [
      "Evita cualquier postura ética",
      "Se construye solo con documentos legales"
    ]
  },
  {
    enunciado: "¿Qué oposición es correcta entre dos modelos galdosianos?",
    correcta: "Doña Perfecta (tesis) vs. Fortunata y Jacinta (fresco social polifónico)",
    incorrectas: [
      "Fortunata y Jacinta (épica en verso) vs. Miau (leyenda medieval)",
      "La desheredada (novela pastoril) vs. Misericordia (cuento mitológico)"
    ]
  },
  {
    enunciado: "¿Cuál de estas es una novela naturalista de Pardo Bazán ambientada en Galicia rural?",
    correcta: "La madre naturaleza",
    incorrectas: [
      "Juanita la Larga",
      "Tristana"
    ]
  },
  {
    enunciado: "¿Qué temática recorre con fuerza el naturalismo social de Blasco Ibáñez?",
    correcta: "Conflictos colectivos y lucha por la supervivencia en contextos laborales",
    incorrectas: [
      "Crónicas cortesanas renacentistas",
      "Fábulas moralizantes con animales"
    ]
  },
  {
    enunciado: "¿Qué práctica documental acompaña a menudo la escritura naturalista?",
    correcta: "Observación de ambientes y consulta de informes médicos y judiciales",
    incorrectas: [
      "Reclusión en monasterios para inspiración mística",
      "Copia literal de epopeyas griegas"
    ]
  },
  {
    enunciado: "¿Qué efecto industrial-editorial cambió los hábitos de lectura en el XIX?",
    correcta: "Abaratamiento del libro y aumento de tiradas por la imprenta moderna",
    incorrectas: [
      "Encarecimiento extremo que anuló al público",
      "Sustitución total del libro por manuscritos"
    ]
  },
  {
    enunciado: "¿Qué tensión ideológica atraviesa la novelística realista española?",
    correcta: "Modernización y crítica social frente a tradición y moral establecida",
    incorrectas: [
      "Neoclasicismo rígido vs. barroco culterano",
      "Existencialismo vs. surrealismo"
    ]
  }
];
