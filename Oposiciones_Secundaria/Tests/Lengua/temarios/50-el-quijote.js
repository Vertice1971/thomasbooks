// temarios/50-el-quijote.js
var PREGUNTAS = [
  {
    enunciado: "¿En qué años se publicaron las dos partes del Quijote?",
    correcta: "En 1605 la primera parte y en 1615 la segunda",
    incorrectas: [
      "En 1580 la primera parte y en 1605 la segunda",
      "En 1605 la primera parte y en 1614 la segunda auténtica"
    ]
  },
  {
    enunciado: "¿Cuál fue el impulso inicial de la obra según su autor y qué alcance terminó teniendo?",
    correcta: "Nació como parodia de libros de caballerías y alcanzó dimensión universal y metaficcional",
    incorrectas: [
      "Fue un manual histórico-militar que siempre se mantuvo técnico",
      "Se concibió como tragedia clásica estricta y no cambió de registro"
    ]
  },
  {
    enunciado: "¿Cómo se organiza el diseño de viajes del protagonista?",
    correcta: "Dos salidas en la Parte I y una salida final en la Parte II",
    incorrectas: [
      "Una única salida continua en toda la obra",
      "Tres salidas en la Parte I y dos en la Parte II"
    ]
  },
  {
    enunciado: "¿Quién es presentado como autor de la ‘historia’ dentro del propio libro?",
    correcta: "Cide Hamete Benengeli, un supuesto historiador árabe",
    incorrectas: [
      "Un cronista romano llamado Tito Livio",
      "Un fraile anónimo de Salamanca"
    ]
  },
  {
    enunciado: "¿Cómo justifica el relato que el texto de Cide Hamete llegue al lector en español?",
    correcta: "Mediante la traducción hecha por un morisco a partir del manuscrito árabe",
    incorrectas: [
      "Por una edición bilingüe oficial del Consejo de Castilla",
      "Gracias a que Cervantes afirma leer árabe con fluidez"
    ]
  },
  {
    enunciado: "¿Por qué la narración conduce a los protagonistas a Barcelona en la Parte II?",
    correcta: "Para responder al Quijote apócrifo de Avellaneda y evitar Zaragoza",
    incorrectas: [
      "Porque en Barcelona se celebra un torneo real de caballeros",
      "Para entrevistarse con el rey en el puerto"
    ]
  },
  {
    enunciado: "¿Qué confunde don Quijote en el célebre episodio de los molinos?",
    correcta: "Toma molinos de viento por gigantes a los que combatir",
    incorrectas: [
      "Confunde un rebaño de ovejas con un ejército de moros",
      "Ve un castillo encantado donde hay un teatro"
    ]
  },
  {
    enunciado: "¿Qué es en realidad el ‘yelmo de Mambrino’ que don Quijote cree ver?",
    correcta: "Una bacía de barbero que interpreta como yelmo",
    incorrectas: [
      "Una corona de plata perteneciente a un duque",
      "Un casco romano hallado en un yacimiento"
    ]
  },
  {
    enunciado: "¿Qué sucede cuando don Quijote libera a los galeotes?",
    correcta: "Los reos, ya libres, le apedrean y huyen",
    incorrectas: [
      "Agradecen la libertad y lo escoltan hasta su aldea",
      "Son arrestados de nuevo por el alguacil que le acompaña"
    ]
  },
  {
    enunciado: "¿Qué resultado tiene la intervención de don Quijote en el caso de Andrés, el mozo azotado?",
    correcta: "Su intervención agrava el castigo cuando él se marcha",
    incorrectas: [
      "El mozo es contratado como paje en una corte",
      "El amo se arrepiente y le da dinero y cobijo"
    ]
  },
  {
    enunciado: "¿Dónde se arma caballero don Quijote?",
    correcta: "En una venta que él toma por castillo, a manos del ventero",
    incorrectas: [
      "En la catedral de Toledo, por un arzobispo",
      "En la corte de Felipe II, por ceremonia real"
    ]
  },
  {
    enunciado: "¿Qué episodio doméstico refleja la crítica libraria en la Parte I?",
    correcta: "El escrutinio y quema de libros por el cura y el barbero",
    incorrectas: [
      "La fundación de una biblioteca pública en la aldea",
      "La venta de todos los libros a un librero sevillano"
    ]
  },
  {
    enunciado: "¿Cuál es la motivación ‘realista’ de Sancho para seguir a don Quijote?",
    correcta: "El deseo de mejorar su fortuna y obtener una ínsula",
    incorrectas: [
      "Aprender latín y teología con su amo",
      "Convertirse en caballero andante a su vez"
    ]
  },
  {
    enunciado: "¿Qué revela la experiencia de Sancho como gobernador de Barataria?",
    correcta: "Su prudencia práctica y su decisión final de renunciar al engaño",
    incorrectas: [
      "Su ambición tiránica y su afán de perpetuarse en el cargo",
      "Su incapacidad absoluta para dictar sentencias sensatas"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñan los duques en la Parte II?",
    correcta: "Organizan burlas teatrales y experimentan cruelmente con los protagonistas",
    incorrectas: [
      "Los protegen de todo peligro como mecenas benévolos",
      "Promueven su ascenso en la corte madrileña"
    ]
  },
  {
    enunciado: "¿Qué representa el episodio de Clavileño?",
    correcta: "Una falsa aventura en un caballo de madera que parodia lo maravilloso",
    incorrectas: [
      "Un viaje real por el Mediterráneo en una galera",
      "Una competición hípica organizada por los bandoleros"
    ]
  },
  {
    enunciado: "¿Qué sugiere la Cueva de Montesinos en la lectura de la Parte II?",
    correcta: "Una frontera ambigua entre sueño, visión y realidad",
    incorrectas: [
      "Una prueba física que certifica su cordura",
      "Un simple lugar para esconderse de la justicia"
    ]
  },
  {
    enunciado: "¿Por qué don Quijote se autodenomina ‘Caballero de los Leones’?",
    correcta: "Porque hace abrir una jaula de leones y estos no lo atacan",
    incorrectas: [
      "Porque vence a un caballero cuyo blasón lleva leones",
      "Porque doma a dos leones en un circo de Barcelona"
    ]
  },
  {
    enunciado: "¿Con qué figura histórica tratan en Cataluña antes de llegar a Barcelona?",
    correcta: "Con el bandolero Roque Guinart (Perot Rocaguinarda)",
    incorrectas: [
      "Con el corsario Barbarroja",
      "Con el Gran Capitán, Gonzalo Fernández de Córdoba"
    ]
  },
  {
    enunciado: "¿Qué relevancia tiene la imprenta en Barcelona dentro de la novela?",
    correcta: "Introducir la materialidad del libro y de la autoría en la propia ficción",
    incorrectas: [
      "Mostrar que el Quijote no pudo imprimirse en Castilla",
      "Explicar que Cide Hamete trabaja como impresor"
    ]
  },
  {
    enunciado: "¿Quién es el ‘Caballero de la Blanca Luna’ que derrota a don Quijote en la playa?",
    correcta: "Sansón Carrasco disfrazado, que le impone un año de retiro",
    incorrectas: [
      "Un noble portugués campeón de justas",
      "El propio duque que exige su destierro"
    ]
  },
  {
    enunciado: "¿Cuál es la naturaleza de Dulcinea del Toboso dentro de la obra?",
    correcta: "Es una idealización poética que el protagonista sostiene como real",
    incorrectas: [
      "Es una dama histórica de la corte madrileña",
      "Es una pastora que acompaña al héroe en sus viajes"
    ]
  },
  {
    enunciado: "¿Cómo se explica que don Quijote no reconozca a Dulcinea cuando Sancho le presenta a una labradora?",
    correcta: "Lo interpreta como encantamiento y persevera en su ideal",
    incorrectas: [
      "Cree que es una impostora contratada por el duque",
      "Piensa que Dulcinea ha muerto y guarda silencio"
    ]
  },
  {
    enunciado: "¿Qué describe el proceso de ‘quijotización’ y ‘sanchificación’?",
    correcta: "La evolución cruzada de ambos protagonistas hacia rasgos del otro",
    incorrectas: [
      "El abandono de Sancho y su sustitución por otro escudero",
      "La pérdida total de cordura de los dos al final"
    ]
  },
  {
    enunciado: "¿Qué función cumplen relatos como ‘El curioso impertinente’ o ‘El cautivo’ en la Parte I?",
    correcta: "Sirven de contraste y reflexión, insertos en la trama principal",
    incorrectas: [
      "Sustituyen definitivamente la historia de don Quijote",
      "Son anexos ajenos que Cervantes nunca quiso incluir"
    ]
  },
  {
    enunciado: "¿Qué diferencia formal hay entre la Parte I y la Parte II respecto a relatos interpolados?",
    correcta: "La Parte II reduce los injertos y concentra más la acción en la línea principal",
    incorrectas: [
      "La Parte II incrementa al doble las novelas intercaladas",
      "La Parte I carece por completo de relatos internos"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico hace del Quijote una obra ‘polifónica’?",
    correcta: "La convivencia de múltiples voces sociales y registros en diálogo",
    incorrectas: [
      "La voz única y monocorde del narrador omnisciente",
      "El uso exclusivo de estilo caballeresco elevado"
    ]
  },
  {
    enunciado: "¿Cómo se articula el humor cervantino en la obra?",
    correcta: "Entre la burla y la compasión, con ironía que humaniza y denuncia",
    incorrectas: [
      "Mediante insultos directos y constantes a los pobres",
      "Solo con chistes escatológicos y juegos de palabras"
    ]
  },
  {
    enunciado: "¿Qué aporta el detallismo de ventas, caminos y comidas al efecto literario?",
    correcta: "Refuerza la verosimilitud y el ‘realismo material’ del mundo narrado",
    incorrectas: [
      "Introduce digresiones científicas ajenas a la trama",
      "Sirve para disimular lagunas de argumento sin función"
    ]
  },
  {
    enunciado: "¿Qué significa el ‘perspectivismo’ en el Quijote?",
    correcta: "La presentación de hechos bajo puntos de vista diversos y problemáticos",
    incorrectas: [
      "La eliminación de cualquier punto de vista subjetivo",
      "La prioridad del narrador oficial por decreto real"
    ]
  },
  {
    enunciado: "¿Cómo concluye la novela respecto a su protagonista?",
    correcta: "Alonso Quijano recobra la lucidez, renuncia a las caballerías y muere",
    incorrectas: [
      "Don Quijote es coronado caballero en la corte y se casa",
      "Sancho y él parten hacia América en busca de aventuras"
    ]
  },
  {
    enunciado: "¿Qué efecto textual produjo el ‘Quijote de Avellaneda’ (1614) en la Parte II auténtica?",
    correcta: "Influyó en decisiones narrativas y reforzó la autorreflexividad de Cervantes",
    incorrectas: [
      "Obligó a Cervantes a retirar la primera parte de circulación",
      "Determinó que el autor cambiara al narrador por otro"
    ]
  },
  {
    enunciado: "¿Qué idea ilustra el paso de ‘bacía’ a ‘yelmo’ en la mente de don Quijote?",
    correcta: "Que el lenguaje y la imaginación modelan la percepción de la realidad",
    incorrectas: [
      "Que los objetos cambian físicamente por magia",
      "Que el narrador manipula el atrezzo en secreto"
    ]
  },
  {
    enunciado: "¿Qué tensión ética se evidencia al ‘desfacer entuertos’?",
    correcta: "La distancia entre la intención justa y los efectos reales de las acciones",
    incorrectas: [
      "La renuncia total de don Quijote a intervenir en injusticias",
      "La eficacia perfecta de todas sus empresas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el habla de Sancho Panza?",
    correcta: "El uso intensivo de refranes y proverbios con agudeza popular",
    incorrectas: [
      "La retórica culterana llena de latinismos oscuros",
      "El silencio casi absoluto por timidez"
    ]
  },
  {
    enunciado: "¿Cuál es el conflicto central que la obra explora una y otra vez?",
    correcta: "La tensión entre ideal y realidad en la vida individual y social",
    incorrectas: [
      "La disputa dinástica entre dos reinos peninsulares",
      "La colonización de islas del Atlántico por caballeros"
    ]
  },
  {
    enunciado: "¿Qué función tienen las ventas en la poética del libro?",
    correcta: "Son espacios liminares que el héroe confunde con castillos",
    incorrectas: [
      "Sirven de prisiones estatales para nobles",
      "Son talleres donde se imprimen los libros del relato"
    ]
  },
  {
    enunciado: "¿Qué es la ‘ínsula Barataria’ en términos narrativos?",
    correcta: "Un gobierno ficticio montado por los duques para probar a Sancho",
    incorrectas: [
      "Una auténtica isla mediterránea conquistada por don Quijote",
      "Una provincia real que Felipe III concede a Sancho"
    ]
  },
  {
    enunciado: "¿Qué peculiaridad metatextual aparece en la Parte II respecto al propio Quijote I?",
    correcta: "Algunos personajes han leído la primera parte y comentan a los protagonistas",
    incorrectas: [
      "Se prohíbe mencionar la Parte I bajo pena de destierro",
      "Se incluye íntegra la Parte I como apéndice documental"
    ]
  },
  {
    enunciado: "¿Por qué muchos consideran al Quijote ‘inicio de la novela moderna’?",
    correcta: "Por su polifonía, realismo, autorreflexividad y construcción del lector crítico",
    incorrectas: [
      "Porque fue la primera obra europea escrita en prosa",
      "Porque eliminó cualquier rastro de humor y parodia"
    ]
  }
];
