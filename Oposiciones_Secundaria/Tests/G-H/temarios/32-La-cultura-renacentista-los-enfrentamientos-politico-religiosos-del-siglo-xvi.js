// temarios/32-La-cultura-renacentista-los-enfrentamientos-politico-religiosos-del-siglo-xvi.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué significa el término Renacimiento en su sentido histórico-cultural?",
    correcta: "Un movimiento que busca el renacer de los valores y formas de la Antigüedad clásica",
    incorrectas: [
      "Un estilo artístico exclusivo del barroco español",
      "La restauración política del Imperio romano en el siglo XVI"
    ]
  },
  {
    enunciado: "¿En qué país europeo surgió inicialmente el Renacimiento?",
    correcta: "Italia",
    incorrectas: [
      "Francia",
      "España"
    ]
  },
  {
    enunciado: "¿Cuál fue el núcleo urbano que destacó como centro inicial del Renacimiento?",
    correcta: "Florencia",
    incorrectas: [
      "París",
      "Roma"
    ]
  },
  {
    enunciado: "¿Qué disciplina impulsó el Humanismo renacentista como núcleo de su programa educativo?",
    correcta: "Las studia humanitatis",
    incorrectas: [
      "La ingeniería mecánica",
      "La alquimia"
    ]
  },
  {
    enunciado: "¿Quién escribió la 'Oratio de hominis dignitate', considerada un manifiesto del humanismo?",
    correcta: "Pico della Mirandola",
    incorrectas: [
      "Maquiavelo",
      "Tomás Moro"
    ]
  },
  {
    enunciado: "¿Qué técnica artística se perfeccionó durante el Renacimiento para representar la profundidad?",
    correcta: "La perspectiva lineal",
    incorrectas: [
      "El claroscuro barroco",
      "La pintura al fresco medieval"
    ]
  },
  {
    enunciado: "¿Qué artista es autor de la 'Última Cena' y de estudios anatómicos pioneros?",
    correcta: "Leonardo da Vinci",
    incorrectas: [
      "Miguel Ángel",
      "Rafael Sanzio"
    ]
  },
  {
    enunciado: "¿Cuál de estos arquitectos o artistas trabajó en El Escorial bajo Felipe II?",
    correcta: "Juan de Herrera",
    incorrectas: [
      "Donato Bramante",
      "Andrea Palladio"
    ]
  },
  {
    enunciado: "¿Quién formuló el modelo heliocéntrico a mediados del siglo XVI?",
    correcta: "Nicolás Copérnico",
    incorrectas: [
      "Johannes Kepler",
      "Galileo Galilei"
    ]
  },
  {
    enunciado: "¿Qué invento facilitó la difusión masiva de ideas en el Renacimiento?",
    correcta: "La imprenta de tipos móviles",
    incorrectas: [
      "La brújula magnética",
      "El reloj mecánico"
    ]
  },
  {
    enunciado: "¿Qué movimiento religioso inició Martín Lutero en 1517?",
    correcta: "La Reforma protestante",
    incorrectas: [
      "La Contrarreforma",
      "El Cisma de Oriente"
    ]
  },
  {
    enunciado: "¿Qué documento marcó el inicio de la Reforma de Lutero?",
    correcta: "Las 95 tesis",
    incorrectas: [
      "El Edicto de Nantes",
      "La Paz de Augsburgo"
    ]
  },
  {
    enunciado: "¿Qué doctrina protestante afirmaba que la salvación dependía únicamente de la fe?",
    correcta: "Justificación por la fe",
    incorrectas: [
      "Predestinación absoluta",
      "Venta de indulgencias"
    ]
  },
  {
    enunciado: "¿Quién fue el principal impulsor del calvinismo?",
    correcta: "Juan Calvino",
    incorrectas: [
      "Ulrich Zwinglio",
      "Enrique VIII"
    ]
  },
  {
    enunciado: "¿Qué rey inglés rompió con Roma y fundó la Iglesia anglicana?",
    correcta: "Enrique VIII",
    incorrectas: [
      "Eduardo VI",
      "Jacobo I"
    ]
  },
  {
    enunciado: "¿Qué asamblea eclesiástica definió la doctrina católica frente a la Reforma?",
    correcta: "El Concilio de Trento",
    incorrectas: [
      "El Concilio de Nicea",
      "El Concilio Vaticano I"
    ]
  },
  {
    enunciado: "¿Qué orden religiosa fundada por Ignacio de Loyola fue clave en la Contrarreforma?",
    correcta: "La Compañía de Jesús",
    incorrectas: [
      "Los dominicos",
      "Los franciscanos"
    ]
  },
  {
    enunciado: "¿Qué guerra religiosa terminó con la Paz de Augsburgo en 1555?",
    correcta: "La Guerra de Esmalcalda",
    incorrectas: [
      "La Guerra de los Treinta Años",
      "La Guerra de los Cien Años"
    ]
  },
  {
    enunciado: "¿Qué rey francés promulgó el Edicto de Nantes en 1598?",
    correcta: "Enrique IV",
    incorrectas: [
      "Francisco I",
      "Luis XIII"
    ]
  },
  {
    enunciado: "¿Qué batalla naval de 1571 enfrentó a la Liga Santa contra el Imperio otomano?",
    correcta: "Lepanto",
    incorrectas: [
      "Gravelinas",
      "San Quintín"
    ]
  },
  {
    enunciado: "¿Qué monarca español fue conocido como el 'Rey Prudente'?",
    correcta: "Felipe II",
    incorrectas: [
      "Carlos V",
      "Felipe III"
    ]
  },
  {
    enunciado: "¿Qué conflicto en los Países Bajos combinó causas religiosas y políticas contra España?",
    correcta: "La rebelión de Flandes",
    incorrectas: [
      "La guerra de los Cien Años",
      "La guerra de sucesión austríaca"
    ]
  },
  {
    enunciado: "¿Qué sistema político-religioso buscó Carlos V para el Sacro Imperio?",
    correcta: "Unidad católica bajo la autoridad imperial",
    incorrectas: [
      "Pluralismo confesional",
      "Independencia absoluta de cada principado"
    ]
  },
  {
    enunciado: "¿Qué institución en España controlaba la ortodoxia religiosa mediante juicios y censura?",
    correcta: "La Inquisición",
    incorrectas: [
      "El Santo Oficio romano",
      "El Consejo de Indias"
    ]
  },
  {
    enunciado: "¿Qué fenómeno cultural favoreció la traducción de la Biblia a lenguas vernáculas?",
    correcta: "La Reforma protestante",
    incorrectas: [
      "El Concilio de Trento",
      "El humanismo cívico"
    ]
  },
  {
    enunciado: "¿Qué filósofo inglés defendió la supremacía del soberano en cuestiones religiosas?",
    correcta: "Thomas Hobbes",
    incorrectas: [
      "John Locke",
      "Francis Bacon"
    ]
  },
  {
    enunciado: "¿Qué medida adoptó el Concilio de Trento respecto a la Vulgata latina?",
    correcta: "Declararla texto oficial de la Iglesia católica",
    incorrectas: [
      "Prohibir su uso en liturgia",
      "Traducirla a lenguas vernáculas"
    ]
  },
  {
    enunciado: "¿Qué conflicto europeo se vio directamente influido por la división confesional del siglo XVI?",
    correcta: "La Guerra de los Treinta Años",
    incorrectas: [
      "La Guerra de Crimea",
      "La Guerra de Sucesión española"
    ]
  },
  {
    enunciado: "¿Qué país se convirtió en la principal potencia católica defensora de la Contrarreforma?",
    correcta: "España",
    incorrectas: [
      "Francia",
      "Portugal"
    ]
  },
  {
    enunciado: "¿Qué elemento caracterizó la política exterior de Felipe II?",
    correcta: "Defensa del catolicismo como eje de alianzas y guerras",
    incorrectas: [
      "Neutralidad confesional",
      "Expansión colonial exclusivamente pacífica"
    ]
  },
  {
    enunciado: "¿Qué edicto inglés reafirmó la supremacía del monarca sobre la Iglesia?",
    correcta: "Acta de Supremacía",
    incorrectas: [
      "Petición de Derechos",
      "Carta Magna"
    ]
  },
  {
    enunciado: "¿Qué papel cumplía el arte en la Contrarreforma según el Concilio de Trento?",
    correcta: "Transmitir de forma clara y persuasiva la doctrina católica",
    incorrectas: [
      "Eliminar toda representación figurativa",
      "Representar temas exclusivamente mitológicos"
    ]
  },
  {
    enunciado: "¿Qué minoría religiosa fue expulsada de Francia tras la revocación del Edicto de Nantes?",
    correcta: "Los hugonotes",
    incorrectas: [
      "Los moriscos",
      "Los puritanos"
    ]
  },
  {
    enunciado: "¿Qué alianza naval formaron España, Venecia y el Papado contra los turcos?",
    correcta: "La Liga Santa",
    incorrectas: [
      "La Santa Alianza",
      "La Liga de Augsburgo"
    ]
  },
  {
    enunciado: "¿Qué rey español heredó un imperio en el que 'nunca se ponía el sol'?",
    correcta: "Felipe II",
    incorrectas: [
      "Carlos V",
      "Felipe IV"
    ]
  },
  {
    enunciado: "¿Qué conflicto francés del siglo XVI enfrentó a católicos y protestantes?",
    correcta: "Las Guerras de Religión",
    incorrectas: [
      "La Fronda",
      "La Guerra de los Cien Años"
    ]
  },
  {
    enunciado: "¿Qué recurso utilizó la monarquía española para controlar la ortodoxia cultural?",
    correcta: "El Índice de libros prohibidos",
    incorrectas: [
      "La libertad de imprenta",
      "Las cartas de hidalguía"
    ]
  },
  {
    enunciado: "¿Qué figura española del manierismo destacó en la pintura religiosa contrarreformista?",
    correcta: "El Greco",
    incorrectas: [
      "Murillo",
      "Velázquez"
    ]
  },
  {
    enunciado: "¿Qué tratado permitió la coexistencia legal de luteranos y católicos en el Sacro Imperio en 1555?",
    correcta: "La Paz de Augsburgo",
    incorrectas: [
      "La Paz de Westfalia",
      "El Tratado de Cateau-Cambrésis"
    ]
  }
];
