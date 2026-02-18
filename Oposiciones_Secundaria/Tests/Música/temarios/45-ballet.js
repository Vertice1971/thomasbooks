// 45-ballet.js

var PREGUNTAS = [
  {
    enunciado: "¿En qué país y periodo histórico tiene su origen el ballet como espectáculo cortesano?",
    correcta: "En Italia, durante el Renacimiento, antes de trasladarse a la corte francesa.",
    incorrectas: [
      "En Rusia, durante la Edad Media.",
      "En Estados Unidos en el siglo XX."
    ]
  },
  {
    enunciado: "¿Qué reina introdujo el ballet en la corte de Francia con el 'Ballet Comique de la Reine' (1581)?",
    correcta: "Catalina de Médici.",
    incorrectas: [
      "María Antonieta.",
      "Isabel la Católica."
    ]
  },
  {
    enunciado: "¿Qué monarca francés, apodado el 'Rey Sol', fue un gran bailarín e impulsó la creación de la Real Academia de Danza?",
    correcta: "Luis XIV.",
    incorrectas: [
      "Luis XVI.",
      "Napoleón Bonaparte."
    ]
  },
  {
    enunciado: "¿Quién estableció las cinco posiciones básicas de los pies que aún se utilizan en el ballet clásico?",
    correcta: "Pierre Beauchamp.",
    incorrectas: [
      "Jean-Georges Noverre.",
      "Marius Petipa."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ballet de cour' (Ballet de corte)?",
    correcta: "Un espectáculo que mezclaba danza, música, canto y poesía, interpretado por los propios nobles.",
    incorrectas: [
      "Una danza que se bailaba exclusivamente en los patios de las cárceles.",
      "Un tipo de ballet donde los bailarines no podían usar los brazos."
    ]
  },
  {
    enunciado: "En el siglo XVIII, Jean-Georges Noverre impulsó el 'Ballet d'action', que consistía en:",
    correcta: "Priorizar la expresión dramática y la narrativa sobre el virtuosismo técnico vacío.",
    incorrectas: [
      "Obligar a los bailarines a llevar armas reales en el escenario.",
      "Hacer que el público bailara junto con los profesionales."
    ]
  },
  {
    enunciado: "¿Qué elemento de vestuario fue eliminado por las reformas de Noverre para permitir mayor expresividad?",
    correcta: "Las máscaras rígidas.",
    incorrectas: [
      "Las zapatillas de seda.",
      "Los guantes blancos."
    ]
  },
  {
    enunciado: "¿Qué bailarina del siglo XVIII escandalizó a la corte al acortar sus faldas para mostrar su técnica de pies?",
    correcta: "Marie Camargo.",
    incorrectas: [
      "Marie Sallé.",
      "Anna Pavlova."
    ]
  },
  {
    enunciado: "El ballet romántico del siglo XIX se caracteriza por temas basados en:",
    correcta: "Seres sobrenaturales (sílfides, Willis), leyendas medievales y el amor imposible.",
    incorrectas: [
      "La vida en las fábricas modernas.",
      "Batallas navales de la época clásica."
    ]
  },
  {
    enunciado: "¿Qué innovación técnica permitió a las bailarinas del Romanticismo acentuar la sensación de ingravidez?",
    correcta: "El uso de las zapatillas de punta (en pointe).",
    incorrectas: [
      "El uso de patines de ruedas ocultos.",
      "Cuerdas invisibles que las colgaban del techo."
    ]
  },
  {
    enunciado: "¿Cuál es considerado el primer gran ballet romántico, protagonizado por Marie Taglioni en 1832?",
    correcta: "La Sílfide.",
    incorrectas: [
      "El lago de los cisnes.",
      "Giselle."
    ]
  },
  {
    enunciado: "¿Qué ballet de 1841 narra la historia de una joven que muere de amor y se convierte en una 'Willi'?",
    correcta: "Giselle.",
    incorrectas: [
      "Coppélia.",
      "Don Quijote."
    ]
  },
  {
    enunciado: "¿Qué es el 'Tutú' romántico original?",
    correcta: "Una falda larga y vaporosa hecha de varias capas de tul que llegaba hasta los tobillos.",
    incorrectas: [
      "Una falda corta y rígida en forma de plato.",
      "Un sombrero con plumas de avestruz."
    ]
  },
  {
    enunciado: "¿A qué ciudad se trasladó el centro creativo del ballet a finales del siglo XIX bajo la dirección de Marius Petipa?",
    correcta: "San Petersburgo.",
    incorrectas: [
      "Londres.",
      "Nueva York."
    ]
  },
  {
    enunciado: "¿Quién compuso la música de los tres ballets más famosos de Petipa: El lago de los cisnes, La bella durmiente y El Cascanueces?",
    correcta: "Piotr Ilich Chaikovski.",
    incorrectas: [
      "Igor Stravinsky.",
      "Johannes Brahms."
    ]
  },
  {
    enunciado: "¿Qué es el 'Grand Pas de Deux' estructural creado por Petipa?",
    correcta: "Una secuencia fija: Entrée, Adagio, Variación masculina, Variación femenina y Coda.",
    incorrectas: [
      "Un baile donde participan cien bailarines al unísono.",
      "Una danza lenta que solo realizan las mujeres."
    ]
  },
  {
    enunciado: "En el ballet clásico ruso, el 'Tutú' evolucionó hacia una forma:",
    correcta: "Corta y rígida (tutú de plato) para dejar ver el virtuosismo de las piernas.",
    incorrectas: [
      "Mucho más larga y pesada hecha de terciopelo.",
      "Que cubría el rostro de la bailarina."
    ]
  },
  {
    enunciado: "¿Qué ballet de Chaikovski incluye la famosa 'Danza del Hada de Azúcar' con el sonido de la celesta?",
    correcta: "El Cascanueces.",
    incorrectas: [
      "La bella durmiente.",
      "Raymonda."
    ]
  },
  {
    enunciado: "¿Qué empresario fundó los 'Ballets Rusos' en París a principios del siglo XX, revolucionando la danza moderna?",
    correcta: "Serguéi Diáguilev.",
    incorrectas: [
      "Vaslav Nijinsky.",
      "Michel Fokine."
    ]
  },
  {
    enunciado: "¿Qué compositor colaboró con Diáguilev en obras como 'La Consagración de la Primavera' y 'Petrushka'?",
    correcta: "Igor Stravinsky.",
    incorrectas: [
      "Claude Debussy.",
      "Maurice Ravel."
    ]
  },
  {
    enunciado: "El estreno de 'La Consagración de la Primavera' (1913) fue un escándalo debido a:",
    correcta: "Su coreografía de movimientos primitivos y su música rítmicamente agresiva y disonante.",
    incorrectas: [
      "Que los bailarines se quedaron dormidos en el escenario.",
      "Que no utilizaron música, solo el silencio."
    ]
  },
  {
    enunciado: "¿Qué bailarín y coreógrafo de los Ballets Rusos fue famoso por su increíble salto y su interpretación en 'La siesta de un fauno'?",
    correcta: "Vaslav Nijinsky.",
    incorrectas: [
      "Rudolf Nuréyev.",
      "Mikhail Baryshnikov."
    ]
  },
  {
    enunciado: "Anna Pavlova es mundialmente recordada por su interpretación solista en:",
    correcta: "La muerte del cisne.",
    incorrectas: [
      "Bolero de Ravel.",
      "El pájaro de fuego."
    ]
  },
  {
    enunciado: "¿Qué es un 'Divertissement' en un ballet clásico?",
    correcta: "Una serie de danzas cortas que no hacen avanzar la trama, diseñadas para mostrar la técnica de los solistas.",
    incorrectas: [
      "El momento en que los músicos de la orquesta afinan sus instrumentos.",
      "La salida de emergencia del teatro."
    ]
  },
  {
    enunciado: "¿Qué significa el término 'En dehors'?",
    correcta: "La rotación externa de las piernas desde la cadera, base de la técnica académica.",
    incorrectas: [
      "Bailar con los ojos cerrados.",
      "Caerse hacia atrás de forma controlada."
    ]
  },
  {
    enunciado: "¿Qué es el 'Corps de ballet'?",
    correcta: "El grupo de bailarines que no son solistas y bailan juntos creando patrones geométricos.",
    incorrectas: [
      "El nombre médico de la columna vertebral del bailarín.",
      "La caja de madera donde se guardan los trajes."
    ]
  },
  {
    enunciado: "¿Qué ballet de Léo Delibes introdujo por primera vez un autómata (muñeca) como personaje central?",
    correcta: "Coppélia.",
    incorrectas: [
      "Sylvia.",
      "Paquita."
    ]
  },
  {
    enunciado: "En el siglo XX, George Balanchine fundó el New York City Ballet, destacando por un estilo:",
    correcta: "Neoclásico, a menudo sin escenografía ni argumento, centrado en la música.",
    incorrectas: [
      "Cargado de decorados barrocos y vestidos de época.",
      "Que prohibía a los hombres bailar en el escenario."
    ]
  },
  {
    enunciado: "¿Qué coreógrafo creó 'El pájaro de fuego' y 'Scheherazade' para Diáguilev?",
    correcta: "Michel Fokine.",
    incorrectas: [
      "George Balanchine.",
      "Marius Petipa."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ballet Blanco'?",
    correcta: "Escenas del ballet romántico donde las bailarinas visten de blanco y representan seres etéreos.",
    incorrectas: [
      "Un ballet que solo se representa durante las tormentas de nieve.",
      "Danza interpretada exclusivamente por cocineros."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Maître de ballet'?",
    correcta: "Es el responsable de dirigir los ensayos y mantener el nivel técnico de la compañía.",
    incorrectas: [
      "El que vende las entradas en la taquilla.",
      "El crítico que escribe en el periódico."
    ]
  },
  {
    enunciado: "¿Qué compositor francés escribió la música para 'Giselle'?",
    correcta: "Adolphe Adam.",
    incorrectas: [
      "Georges Bizet.",
      "Charles Gounod."
    ]
  },
  {
    enunciado: "¿Qué es la 'Pantomima' en el ballet?",
    correcta: "El uso de gestos codificados de las manos y el cuerpo para narrar la historia sin palabras.",
    incorrectas: [
      "Un tipo de pirueta muy rápida.",
      "Cuando los bailarines se ríen del público."
    ]
  },
  {
    enunciado: "El ballet 'Don Quijote' de Petipa destaca por su carácter:",
    correcta: "Españolista, con uso de abanicos, castañuelas y ritmos de danza ibérica.",
    incorrectas: [
      "Extremadamente triste y fúnebre.",
      "Ambientado en la luna con marcianos."
    ]
  },
  {
    enunciado: "¿Qué es un 'Arabesque'?",
    correcta: "Una posición donde el bailarín se apoya sobre una pierna mientras la otra está extendida hacia atrás.",
    incorrectas: [
      "Un instrumento de percusión de origen árabe.",
      "El nombre del foso donde toca la orquesta."
    ]
  },
  {
    enunciado: "¿Qué importante bailarina y coreógrafa creó 'Les Noces' para los Ballets Rusos?",
    correcta: "Bronislava Nijinska.",
    incorrectas: [
      "Martha Graham.",
      "Isadora Duncan."
    ]
  },
  {
    enunciado: "El ballet contemporáneo se diferencia del clásico en:",
    correcta: "Un mayor uso del torso, el suelo y una ruptura con la rigidez de las cinco posiciones.",
    incorrectas: [
      "Que no se utiliza música de ningún tipo.",
      "Que los bailarines deben pesar más de cien kilos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Barra' en el entrenamiento de un bailarín?",
    correcta: "Un soporte de madera donde se realizan los ejercicios de calentamiento y técnica.",
    incorrectas: [
      "El lugar donde los músicos guardan las flautas.",
      "Un tipo de salto mortal hacia delante."
    ]
  },
  {
    enunciado: "¿Qué ballet narra la historia de una princesa convertida en cisne por el malvado Von Rothbart?",
    correcta: "El lago de los cisnes.",
    incorrectas: [
      "La Bayadère.",
      "Espartaco."
    ]
  },
  {
    enunciado: "¿Qué festival de verano en España es famoso por sus representaciones de ballet en los Jardines del Generalife?",
    correcta: "Festival Internacional de Música y Danza de Granada.",
    incorrectas: [
      "Festival de Eurovisión.",
      "Feria de Abril de Sevilla."
    ]
  }
];