// temarios/60-El-arte-del-renacimiento-italiano-y-su-influencia.js
var PREGUNTAS = [
  {
    enunciado: "¿En qué contexto urbano y político surge con fuerza el Renacimiento italiano?",
    correcta: "En las ciudades-estado (Florencia, Venecia, Roma, Milán)",
    incorrectas: ["En aldeas feudales aisladas", "En colonias americanas del siglo XVII"]
  },
  {
    enunciado: "¿Cómo se periodiza habitualmente el Renacimiento italiano?",
    correcta: "Quattrocento (siglo XV) y Cinquecento (siglo XVI)",
    incorrectas: ["Trecento y Seicento exclusivamente", "Barroco y Rococó"]
  },
  {
    enunciado: "¿Qué corriente intelectual sitúa al ser humano en el centro del conocimiento?",
    correcta: "El humanismo",
    incorrectas: ["El estoicismo medieval", "El positivismo decimonónico"]
  },
  {
    enunciado: "¿Qué tratado de Alberti sistematiza la representación pictórica renacentista?",
    correcta: "De pictura",
    incorrectas: ["De architectura", "De sculptura moderna"]
  },
  {
    enunciado: "¿Quién formuló experimentalmente la perspectiva lineal en el Quattrocento?",
    correcta: "Filippo Brunelleschi",
    incorrectas: ["Giorgio Vasari", "Caravaggio"]
  },
  {
    enunciado: "¿Qué noción espacial organiza la perspectiva central renacentista?",
    correcta: "Un punto de fuga único que ordena la escena",
    incorrectas: ["Múltiples horizontes sin regla", "Superposición jerárquica medieval"]
  },
  {
    enunciado: "¿Qué valores compositivos definen la estética renacentista?",
    correcta: "Equilibrio, simetría y armonía",
    incorrectas: ["Dinamismo barroco y teatralidad", "Fragmentación cubista"]
  },
  {
    enunciado: "¿Qué técnicas consolidó el Renacimiento en artes figurativas?",
    correcta: "Óleo y fresco; mármol y bronce en escultura",
    incorrectas: ["Pastel y acrílico; resina epoxi", "Esmalte cloisonné exclusivamente"]
  },
  {
    enunciado: "¿Qué obras definen la arquitectura del Quattrocento?",
    correcta: "Cúpula de Santa María del Fiore y Santa María Novella",
    incorrectas: ["Basílica de San Pedro concluida por Bernini", "La Torre Eiffel"]
  },
  {
    enunciado: "¿Qué arquitectos lideran el Cinquecento romano?",
    correcta: "Bramante y Miguel Ángel",
    incorrectas: ["Borromini y Guarini", "Palladio y Le Corbusier"]
  },
  {
    enunciado: "¿Qué rasgo tipológico buscó la arquitectura ideal renacentista?",
    correcta: "La planta centralizada",
    incorrectas: ["La nave única sin transepto", "La planta oval barroca"]
  },
  {
    enunciado: "¿Qué escultor recuperó el desnudo clásico en bronce?",
    correcta: "Donatello",
    incorrectas: ["Bernini", "Rodin"]
  },
  {
    enunciado: "¿Qué conjunto de puertas diseñó Ghiberti en Florencia?",
    correcta: "Las Puertas del Paraíso del Baptisterio",
    incorrectas: ["Las Puertas de Brandenburgo", "Las Puertas del Infierno"]
  },
  {
    enunciado: "¿Qué tres obras encarnan la maestría de Miguel Ángel?",
    correcta: "David, Moisés y La Piedad",
    incorrectas: ["Apolo y Dafne, Éxtasis de Santa Teresa", "La Victoria de Samotracia, Laocoonte"]
  },
  {
    enunciado: "¿Qué pintor del Quattrocento introdujo un nuevo naturalismo en fresco?",
    correcta: "Masaccio (Capilla Brancacci)",
    incorrectas: ["Uccello en mosaico bizantino", "El Greco en óleo tardío"]
  },
  {
    enunciado: "¿Qué obra de Botticelli sintetiza la mitología clásica?",
    correcta: "El Nacimiento de Venus",
    incorrectas: ["La Ronda de Noche", "Las Meninas"]
  },
  {
    enunciado: "¿Qué recurso técnico caracteriza a Leonardo?",
    correcta: "El sfumato y el estudio anatómico",
    incorrectas: ["El puntillismo", "El tenebrismo radical"]
  },
  {
    enunciado: "¿Qué pintura de Rafael es emblema del ideal humanista?",
    correcta: "La Escuela de Atenas",
    incorrectas: ["La Tempestad", "El Jardín de las Delicias"]
  },
  {
    enunciado: "¿Qué rasgo distingue a la escuela veneciana?",
    correcta: "Primacía del color (colorito)",
    incorrectas: ["Supremacía absoluta del dibujo (disegno)", "Abstracción geométrica"]
  },
  {
    enunciado: "¿Qué autores encarnan el Renacimiento nórdico?",
    correcta: "Durero y Holbein",
    incorrectas: ["Rubens y Rembrandt", "Goya y Velázquez"]
  },
  {
    enunciado: "¿Qué figura y obra simbolizan la recepción en España?",
    correcta: "El Greco y El Escorial (Herrera)",
    incorrectas: ["Zurbarán y La Alhambra", "Gaudí y la Sagrada Familia"]
  },
  {
    enunciado: "¿Qué foco francés difunde modelos italianos en el XVI?",
    correcta: "La Escuela de Fontainebleau",
    incorrectas: ["La Bauhaus", "El Quattrocento boloñés exclusivamente"]
  },
  {
    enunciado: "¿Qué movimientos se inspiran en el legado renacentista?",
    correcta: "Barroco y Neoclasicismo",
    incorrectas: ["Románico y mudéjar", "Expresionismo y surrealismo"]
  },
  {
    enunciado: "¿Cómo cambia el estatus del artista en el Renacimiento?",
    correcta: "Se reconoce como intelectual y creador individual",
    incorrectas: ["Permanece como artesano anónimo", "Se subordina a los gremios sin firma"]
  },
  {
    enunciado: "¿Qué innovación favoreció la difusión de tratados artísticos?",
    correcta: "La imprenta",
    incorrectas: ["La xilografía china en Europa medieval", "El daguerrotipo"]
  },
  {
    enunciado: "¿Qué hallazgos avivaron el clasicismo en Roma?",
    correcta: "Redescubrimientos arqueológicos de obras antiguas",
    incorrectas: ["Tumbas etruscas inéditas en Florencia", "Cromlech neolíticos urbanos"]
  },
  {
    enunciado: "¿Qué instituciones cortesanas y académicas impulsaron la difusión?",
    correcta: "Academias y cortes renacentistas",
    incorrectas: ["Concilios rurales", "Gremios monásticos exclusivamente"]
  },
  {
    enunciado: "¿Qué principio ideológico resume el cambio de paradigma?",
    correcta: "Antropocentrismo frente al teocentrismo medieval",
    incorrectas: ["Fatalismo estoico pagano", "Deísmo ilustrado decimonónico"]
  },
  {
    enunciado: "¿Qué tipo de perspectiva estudió también Leonardo además de la lineal?",
    correcta: "La perspectiva aérea (atmósfera y gradación tonal)",
    incorrectas: ["La axonométrica industrial", "La isométrica informática"]
  },
  {
    enunciado: "¿Qué rasgo arquitectónico impulsó Bramante en Roma?",
    correcta: "Proyectos centralizados de clara referencia clásica",
    incorrectas: ["Arbotantes góticos", "Plantas elípticas borrominianas"]
  },
  {
    enunciado: "¿Qué obra arquitectónica bibliográfica firma Miguel Ángel en Florencia?",
    correcta: "La Biblioteca Laurenciana",
    incorrectas: ["La Biblioteca Marciana de Sansovino", "El Palazzo Pitti de Ammannati"]
  },
  {
    enunciado: "¿Qué edificio antiguo inspiró las cúpulas renacentistas?",
    correcta: "El Panteón de Roma",
    incorrectas: ["El Coliseo", "La Torre de Pisa"]
  },
  {
    enunciado: "¿Qué pintores venecianos consolidan la primacía del color?",
    correcta: "Giorgione y Tiziano",
    incorrectas: ["Piero della Francesca y Uccello", "Mantegna y Signorelli"]
  },
  {
    enunciado: "¿Qué género pictórico gana dignidad en el Renacimiento?",
    correcta: "El retrato individual",
    incorrectas: ["La caricatura satírica", "El bodegón exclusivamente"]
  },
  {
    enunciado: "¿Qué temática alegórica suele dialogar con la Antigüedad?",
    correcta: "Alegorías humanistas",
    incorrectas: ["Alegorías góticas de la luz", "Alegorías barrocas del éxtasis"]
  },
  {
    enunciado: "¿Cómo se adaptó el ideal clásico a la iconografía cristiana?",
    correcta: "Buscando equilibrio formal y claridad doctrinal",
    incorrectas: ["Suprimiendo todo motivo clásico", "Imitando sincréticamente dioses paganos"]
  },
  {
    enunciado: "¿Qué medio circuló modelos italianos por Europa además de artistas viajeros?",
    correcta: "Grabados y tratados ilustrados",
    incorrectas: ["Códices miniados románicos", "Mapas portulanos náuticos"]
  },
  {
    enunciado: "¿Qué factor económico favoreció el mecenazgo artístico?",
    correcta: "La expansión del comercio urbano",
    incorrectas: ["El cierre de rutas mediterráneas", "La autarquía feudal"]
  },
  {
    enunciado: "¿Qué obra de Vasari es fuente primaria para el conocimiento del periodo?",
    correcta: "Vidas de los más excelentes arquitectos, pintores y escultores",
    incorrectas: ["Diálogos sobre la pintura de Leonardo", "Tratado de la pintura de Pacheco"]
  }
];
