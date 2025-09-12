// temarios/65-Picasso-dali-y-miro-en-su-contexto-artistico.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo general comparten Picasso, Dalí y Miró dentro del arte del siglo XX?",
    correcta: "Formaron parte de las vanguardias europeas y transformaron radicalmente el lenguaje pictórico",
    incorrectas: [
      "Se mantuvieron ajenos a las corrientes de su tiempo y trabajaron solo en estilos académicos",
      "Centraron toda su producción en copiar modelos renacentistas sin innovaciones formales"
    ]
  },
  {
    enunciado: "¿En qué ciudad se consolidó la trayectoria internacional de Picasso a partir de 1904?",
    correcta: "En París, donde se integró en la Escuela de París y colaboró con la vanguardia",
    incorrectas: [
      "En Roma, dentro de los círculos del clasicismo académico",
      "En Berlín, ligado exclusivamente al expresionismo alemán"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al periodo azul de Picasso?",
    correcta: "El uso dominante de gamas frías y temas de marginación y melancolía",
    incorrectas: [
      "La obsesión por la naturaleza muerta de factura hiperrealista",
      "La representación de batallas históricas con cromatismo cálido"
    ]
  },
  {
    enunciado: "¿Cuál es la novedad clave del cubismo impulsado por Picasso y Braque?",
    correcta: "La fragmentación del espacio y la representación simultánea de múltiples puntos de vista",
    incorrectas: [
      "La recuperación literal de la perspectiva renacentista de punto único",
      "La abolición de toda referencia a la realidad visible y al objeto"
    ]
  },
  {
    enunciado: "¿Qué obra de Picasso se convirtió en símbolo universal contra la barbarie bélica?",
    correcta: "Guernica, realizada en 1937 para el Pabellón de España en París",
    incorrectas: [
      "Las Meninas, reinterpretada de forma academicista",
      "La Gioconda, copiada con fidelidad fotográfica"
    ]
  },
  {
    enunciado: "¿Qué define el método paranoico-crítico de Salvador Dalí?",
    correcta: "Un procedimiento de asociación libre e interpretación de imágenes dobles surgidas del inconsciente",
    incorrectas: [
      "Una técnica matemática para construir perspectivas axonométricas exactas",
      "Un protocolo científico de laboratorio para mezclar pigmentos industriales"
    ]
  },
  {
    enunciado: "¿Qué rasgo pictórico destaca en la obra surrealista de Dalí?",
    correcta: "La precisión casi fotográfica aplicada a escenas oníricas y simbólicas",
    incorrectas: [
      "La pincelada impresionista que disuelve la forma en luz",
      "La geometría ortogonal estricta de volúmenes sin ornamento"
    ]
  },
  {
    enunciado: "¿Cuál de estas obras es de Salvador Dalí?",
    correcta: "La persistencia de la memoria, con relojes blandos como motivo principal",
    incorrectas: [
      "La granja, un hito del primer Miró",
      "Les Demoiselles d’Avignon, obra clave de Picasso"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el lenguaje plástico de Joan Miró?",
    correcta: "El uso de colores planos, signos y formas biomórficas de gran libertad poética",
    incorrectas: [
      "El naturalismo minucioso de anatomías y pliegues",
      "El claroscuro barroco con volúmenes escultóricos"
    ]
  },
  {
    enunciado: "¿Cuál de estas obras pertenece a Joan Miró?",
    correcta: "El carnaval de Arlequín, con un universo de signos y figuras fantásticas",
    incorrectas: [
      "Los tres músicos, perteneciente a la etapa cubista de Picasso",
      "El gran masturbador, atribuida a Dalí"
    ]
  },
  {
    enunciado: "¿Qué relación mantuvieron Picasso, Dalí y Miró con la llamada Escuela de París?",
    correcta: "Se vincularon a ese núcleo internacional que aglutinó a las vanguardias en la capital francesa",
    incorrectas: [
      "Rechazaron París y trabajaron siempre aislados en sus localidades de origen",
      "Se adscribieron a la Escuela de Nueva York desde comienzos del siglo XX"
    ]
  },
  {
    enunciado: "¿Qué etapa sigue al periodo azul en la evolución temprana de Picasso?",
    correcta: "El periodo rosa, con tonos más cálidos y temas circenses",
    incorrectas: [
      "El periodo blanco, centrado en marinas y glaciares",
      "El periodo negro, dedicado a escenas de minas y carbón"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue formalmente a Les Demoiselles d’Avignon (1907)?",
    correcta: "La deformación radical del cuerpo y la influencia de máscaras africanas y arte ibérico",
    incorrectas: [
      "La estricta proporción canónica clásica y el sombreado suave",
      "La perspectiva lineal perfecta y el sfumato leonardesco"
    ]
  },
  {
    enunciado: "¿Qué institución española fue un foco de contactos vanguardistas para Dalí y su generación?",
    correcta: "La Residencia de Estudiantes en Madrid, con intercambio entre artistas y escritores",
    incorrectas: [
      "La Escuela de Traductores de Toledo, de orientación medieval",
      "La Real Fábrica de Tapices, restringida a oficios artesanales"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó la Galería Dalmau de Barcelona en las vanguardias?",
    correcta: "Actuó como plataforma de difusión de las nuevas tendencias europeas en España",
    incorrectas: [
      "Fue un museo estatal dedicado solo al arte del Siglo de Oro",
      "Se limitó a exponer copias académicas sin artistas contemporáneos"
    ]
  },
  {
    enunciado: "¿Cómo se describe el vínculo de Dalí con el grupo surrealista de André Breton?",
    correcta: "Fue intenso pero conflictivo, con aportaciones decisivas y posteriores tensiones y expulsión",
    incorrectas: [
      "Nunca perteneció al surrealismo ni tuvo relación con Breton",
      "Dirigió en solitario el movimiento surrealista en París durante décadas"
    ]
  },
  {
    enunciado: "¿Qué entendemos por abstracción lírica en relación con Miró?",
    correcta: "Una tendencia a formas libres, signos y color poético alejados del naturalismo",
    incorrectas: [
      "Una copia literal de la realidad con enfoque descriptivo",
      "Una técnica de relieve escultórico aplicado al lienzo"
    ]
  },
  {
    enunciado: "¿Qué elemento común conecta a los tres artistas con la historia española del siglo XX?",
    correcta: "La Guerra Civil y su impacto directo o simbólico en sus trayectorias y obras",
    incorrectas: [
      "Su participación oficial como pintores de cámara de la monarquía",
      "Su renuncia total a tratar temas políticos o sociales"
    ]
  },
  {
    enunciado: "¿Cómo influyó el cubismo de Picasso en la evolución del arte moderno?",
    correcta: "Abrió la puerta a nuevas concepciones del espacio pictórico y a la autonomía de la forma",
    incorrectas: [
      "Restauró la tradición académica y cerró el camino a las vanguardias",
      "Impuso el retrato cortesano como género dominante"
    ]
  },
  {
    enunciado: "¿Qué relación mantuvo Miró con la poesía y la literatura?",
    correcta: "Colaboró y dialogó con poetas, integrando un imaginario poético en su lenguaje visual",
    incorrectas: [
      "Rechazó toda relación con la palabra por considerarla ajena a la pintura",
      "Se dedicó exclusivamente a ilustrar tratados científicos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la iconografía de Dalí respecto al tiempo y la memoria?",
    correcta: "La aparición de relojes blandos y metamorfosis que cuestionan la estabilidad temporal",
    incorrectas: [
      "La precisión astronómica de relojes de péndulo pintados al natural",
      "La ausencia total de símbolos asociados al tiempo"
    ]
  },
  {
    enunciado: "¿Qué función cumple el color en la pintura de Miró?",
    correcta: "Actúa como portador de energía poética y signo autónomo en la composición",
    incorrectas: [
      "Se subordina siempre al claroscuro académico tradicional",
      "Se limita a paletas monocromas sin valor expresivo"
    ]
  },
  {
    enunciado: "¿Qué relación tuvo Dalí con el cine?",
    correcta: "Colaboró con Buñuel y con Hitchcock, trasladando su imaginario surrealista al lenguaje fílmico",
    incorrectas: [
      "Dirigió una filmografía neorrealista de posguerra italiana",
      "Fue compositor de bandas sonoras para el cine mudo alemán"
    ]
  },
  {
    enunciado: "¿Qué entendemos por Escuela de París en el contexto de estos artistas?",
    correcta: "Una comunidad internacional de creadores que convirtieron París en capital de las vanguardias",
    incorrectas: [
      "Una institución oficial francesa con planes de estudio estatales",
      "Un colectivo exclusivo de artistas franceses nacidos en París"
    ]
  },
  {
    enunciado: "¿Cómo se define, en términos generales, el compromiso político de Picasso?",
    correcta: "Como una postura activa y visible, ejemplificada en obras como Guernica",
    incorrectas: [
      "Como un desinterés absoluto por los acontecimientos de su tiempo",
      "Como una defensa del academicismo oficial del régimen franquista"
    ]
  },
  {
    enunciado: "¿Qué elemento técnico favoreció el acabado ‘ilusionista’ en las pinturas de Dalí?",
    correcta: "Un dibujo preciso y una gradación suave que refuerzan la nitidez de las imágenes fantásticas",
    incorrectas: [
      "La pincelada fragmentaria de factura divisionista sin contornos claros",
      "El empaste matérico extremo que elimina toda definición formal"
    ]
  },
  {
    enunciado: "¿Qué aporta Miró a la evolución de la abstracción del siglo XX?",
    correcta: "Un vocabulario de signos, constelaciones y ritmos que amplían la poética abstracta",
    incorrectas: [
      "El retorno académico a la mímesis anatómica",
      "La sustitución de la pintura por escultura figurativa clásica"
    ]
  },
  {
    enunciado: "¿Cómo se relaciona la obra de Picasso con la tradición clásica en los años 20?",
    correcta: "A través de un neoclasicismo personal que convive con su investigación cubista",
    incorrectas: [
      "Mediante la negación total del pasado y la iconoclasia absoluta",
      "Por la copia literal de frescos romanos sin reinterpretación"
    ]
  },
  {
    enunciado: "¿Qué rasgo de trayectoria vital comparten Dalí y Miró respecto a Cataluña?",
    correcta: "Ambos mantuvieron vínculos constantes con Cataluña, integrando referencias culturales propias",
    incorrectas: [
      "Se desvincularon por completo de sus orígenes y repudiaron cualquier alusión local",
      "Nunca trabajaron ni expusieron en ámbitos catalanes"
    ]
  },
  {
    enunciado: "¿Qué relación estableció el joven Dalí con Picasso?",
    correcta: "Expresó admiración por Picasso y se interesó por su obra durante su formación",
    incorrectas: [
      "Rompió con Picasso desde el principio y rechazó toda influencia",
      "Ignoró a Picasso porque solo le interesaba el academicismo italiano"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa 'La granja' dentro de la evolución de Miró?",
    correcta: "Es una obra clave de transición hacia su lenguaje más sintético y simbólico",
    incorrectas: [
      "Es un ejercicio puramente académico sin relevancia en su evolución",
      "Es una copia de un mural romano sin elementos personales"
    ]
  },
  {
    enunciado: "¿Qué aporta la experiencia del exilio a la recepción internacional de estos artistas?",
    correcta: "Contribuye a su difusión global y a la lectura política de ciertas obras y trayectorias",
    incorrectas: [
      "Provoca el olvido inmediato de su obra fuera de España",
      "Les obliga a abandonar definitivamente toda experimentación formal"
    ]
  },
  {
    enunciado: "¿Qué define la noción de obra abierta en la recepción del cubismo picassiano?",
    correcta: "La invitación al espectador a reconstruir activamente el objeto desde fragmentos",
    incorrectas: [
      "La imposición de una lectura única cerrada por la perspectiva renacentista",
      "La negación de cualquier intervención perceptiva del espectador"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene Miró con el espacio público en su madurez?",
    correcta: "Realiza murales y esculturas que llevan su lenguaje a plazas, edificios y ciudades",
    incorrectas: [
      "Abandona toda obra de gran formato y se limita a miniaturas privadas",
      "Se restringe a la pintura de retratos oficiales por encargo"
    ]
  },
  {
    enunciado: "¿Qué distingue el uso del símbolo en Dalí frente al de Miró?",
    correcta: "En Dalí el símbolo aparece en escenas oníricas realistas; en Miró se integra en un sistema de signos abstractos",
    incorrectas: [
      "Ambos rechazan por completo el símbolo en favor del naturalismo estricto",
      "Los dos emplean exclusivamente alegorías mitológicas clásicas sin variaciones"
    ]
  },
  {
    enunciado: "¿Cómo se interpreta la relación de Picasso con España tras la Guerra Civil?",
    correcta: "Mantuvo una postura crítica con el régimen franquista y residió fuera de España",
    incorrectas: [
      "Fue nombrado pintor oficial del régimen y retornó como artista de corte",
      "Se desentendió de toda cuestión política y vivió en Madrid hasta su muerte"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la línea y el dibujo en la obra de Miró?",
    correcta: "Una sintaxis caligráfica de trazos simples que articulan constelaciones de signos",
    incorrectas: [
      "El sombreado volumétrico propio del tenebrismo barroco",
      "La rigidez geométrica de mallas ortogonales sin variación"
    ]
  },
  {
    enunciado: "¿Qué efecto tuvo la convivencia de Picasso con poetas y escritores de vanguardia?",
    correcta: "Enriqueció su imaginación y favoreció cruces entre imagen, palabra y experimentación formal",
    incorrectas: [
      "Le condujo a abandonar la pintura para dedicarse solo a la literatura",
      "Le alejó de la vanguardia y lo devolvió al academicismo"
    ]
  },
  {
    enunciado: "¿Por qué se considera a Dalí una figura mediática además de pictórica?",
    correcta: "Porque construyó un personaje público y exploró la cultura de masas, el cine y la publicidad",
    incorrectas: [
      "Porque renunció a exponer en museos y solo pintó para colecciones privadas",
      "Porque dirigió instituciones oficiales de arte durante décadas"
    ]
  },
  {
    enunciado: "¿Qué idea resume el lugar de Picasso, Dalí y Miró en la historia del arte?",
    correcta: "Son referentes universales cuya obra redefine la modernidad y sigue influyendo en la creación contemporánea",
    incorrectas: [
      "Son autores menores con repercusión limitada al ámbito local",
      "Son pintores académicos que apenas innovaron respecto al siglo XIX"
    ]
  }
];
