// temarios/64-La-arquitectura-en-los-siglos-xix-y-xx-el-modernismo.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza al eclecticismo arquitectónico del siglo XIX?",
    correcta: "La combinación de estilos históricos como neogótico, neoclásico o neomudéjar",
    incorrectas: [
      "La renuncia total a cualquier referencia histórica",
      "El uso exclusivo de formas orgánicas inspiradas en la naturaleza"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron las exposiciones universales en la arquitectura del XIX?",
    correcta: "Sirvieron como escaparate de los avances técnicos con hierro y vidrio",
    incorrectas: [
      "Reforzaron exclusivamente el clasicismo académico",
      "Fomentaron el retorno al gótico medieval como estilo único"
    ]
  },
  {
    enunciado: "¿Quién fue el responsable del plan urbanístico de París en el XIX?",
    correcta: "Georges-Eugène Haussmann",
    incorrectas: [
      "Le Corbusier",
      "Ildefonso Cerdà"
    ]
  },
  {
    enunciado: "¿Qué arquitecto proyectó el ensanche de Barcelona en el siglo XIX?",
    correcta: "Ildefonso Cerdà",
    incorrectas: [
      "Antoni Gaudí",
      "Josep Puig i Cadafalch"
    ]
  },
  {
    enunciado: "¿Qué materiales permitieron las grandes cubiertas de estaciones y mercados?",
    correcta: "Hierro y vidrio",
    incorrectas: [
      "Madera y barro cocido",
      "Hormigón y plástico"
    ]
  },
  {
    enunciado: "¿Qué edificio construyó Joseph Paxton en 1851 como símbolo de la arquitectura de hierro?",
    correcta: "El Crystal Palace",
    incorrectas: [
      "La Torre Eiffel",
      "El Palacio de Versalles"
    ]
  },
  {
    enunciado: "¿Quién diseñó la Torre Eiffel para la Exposición de París de 1889?",
    correcta: "Gustave Eiffel",
    incorrectas: [
      "Charles Garnier",
      "Otto Wagner"
    ]
  },
  {
    enunciado: "¿Qué buscaba el Modernismo frente al eclecticismo historicista?",
    correcta: "Crear un lenguaje arquitectónico nuevo y coherente",
    incorrectas: [
      "Imitar exclusivamente modelos medievales",
      "Volver al purismo del clasicismo griego"
    ]
  },
  {
    enunciado: "¿Qué elemento formal define al Modernismo arquitectónico?",
    correcta: "Las líneas curvas y motivos inspirados en la naturaleza",
    incorrectas: [
      "La simetría rígida de los templos clásicos",
      "La austeridad geométrica sin ornamentación"
    ]
  },
  {
    enunciado: "¿Qué arquitecto belga es considerado pionero del Modernismo?",
    correcta: "Victor Horta",
    incorrectas: [
      "Walter Gropius",
      "Lluís Domènech i Montaner"
    ]
  },
  {
    enunciado: "¿Qué arquitecto francés diseñó las bocas del metro de París?",
    correcta: "Hector Guimard",
    incorrectas: [
      "Eugène Viollet-le-Duc",
      "Le Corbusier"
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el Modernismo en Alemania y Austria?",
    correcta: "Jugendstil",
    incorrectas: [
      "Liberty",
      "Art Déco"
    ]
  },
  {
    enunciado: "¿Qué edificio de Otto Wagner simboliza la transición al racionalismo?",
    correcta: "La estación de metro de Karlsplatz en Viena",
    incorrectas: [
      "El Palau de la Música Catalana",
      "El Museo Guggenheim de Nueva York"
    ]
  },
  {
    enunciado: "¿Qué arquitecto lideró la Secession vienesa?",
    correcta: "Joseph Maria Olbrich",
    incorrectas: [
      "Antoni Gaudí",
      "Frank Lloyd Wright"
    ]
  },
  {
    enunciado: "¿Qué denominación recibe el Modernismo en Italia?",
    correcta: "Estilo Liberty",
    incorrectas: [
      "Futurismo",
      "Art Brut"
    ]
  },
  {
    enunciado: "¿Quién construyó el Palau de la Música Catalana?",
    correcta: "Lluís Domènech i Montaner",
    incorrectas: [
      "Josep Puig i Cadafalch",
      "Antonio Gaudí"
    ]
  },
  {
    enunciado: "¿Qué arquitecto catalán diseñó la Casa Amatller en Barcelona?",
    correcta: "Josep Puig i Cadafalch",
    incorrectas: [
      "Lluís Domènech i Montaner",
      "Enric Miralles"
    ]
  },
  {
    enunciado: "¿Qué obra de Gaudí combina fantasía naturalista y simbolismo religioso?",
    correcta: "La Sagrada Familia",
    incorrectas: [
      "La Casa Milà",
      "El Pabellón de Alemania"
    ]
  },
  {
    enunciado: "¿Qué característica distingue a Antoni Gaudí?",
    correcta: "El organicismo y la integración de formas naturales en la estructura",
    incorrectas: [
      "El uso exclusivo de la geometría clásica",
      "El rechazo del simbolismo religioso"
    ]
  },
  {
    enunciado: "¿Qué espacio urbano barcelonés alberga varias obras de Gaudí?",
    correcta: "El Parque Güell",
    incorrectas: [
      "La Plaça Catalunya",
      "La Rambla"
    ]
  },
  {
    enunciado: "¿Qué movimiento inglés inspiró parte del Modernismo europeo?",
    correcta: "El Arts and Crafts de William Morris",
    incorrectas: [
      "El Neoclasicismo",
      "El Cubismo"
    ]
  },
  {
    enunciado: "¿Qué escuela alemana fue clave en la modernidad arquitectónica del siglo XX?",
    correcta: "La Bauhaus",
    incorrectas: [
      "La Academia de San Fernando",
      "La Escuela de Bellas Artes de París"
    ]
  },
  {
    enunciado: "¿Quién fundó la Bauhaus en 1919?",
    correcta: "Walter Gropius",
    incorrectas: [
      "Mies van der Rohe",
      "Le Corbusier"
    ]
  },
  {
    enunciado: "¿Qué arquitecto propuso los cinco puntos de la nueva arquitectura?",
    correcta: "Le Corbusier",
    incorrectas: [
      "Antoni Gaudí",
      "Victor Horta"
    ]
  },
  {
    enunciado: "¿Qué principios incluían los cinco puntos de Le Corbusier?",
    correcta: "Pilotis, planta libre, fachada libre, ventana longitudinal y terraza-jardín",
    incorrectas: [
      "Decoración orgánica, mosaicos, vitrales, forja y simbolismo religioso",
      "Uso exclusivo de piedra natural y bóvedas de cañón"
    ]
  },
  {
    enunciado: "¿Qué arquitecto diseñó la Casa de la Cascada en Pensilvania?",
    correcta: "Frank Lloyd Wright",
    incorrectas: [
      "Mies van der Rohe",
      "Walter Gropius"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la arquitectura de Frank Lloyd Wright?",
    correcta: "La integración orgánica con el entorno natural",
    incorrectas: [
      "La imitación estricta del gótico medieval",
      "El uso de ornamentos metálicos modernistas"
    ]
  },
  {
    enunciado: "¿Qué es el estilo internacional en arquitectura?",
    correcta: "Una corriente racionalista de formas geométricas y funcionales",
    incorrectas: [
      "Una versión neoclásica de la arquitectura académica",
      "Un movimiento decorativo inspirado en la naturaleza"
    ]
  },
  {
    enunciado: "¿Quién fue autor del Pabellón de Alemania en la Exposición de Barcelona de 1929?",
    correcta: "Mies van der Rohe",
    incorrectas: [
      "Antonio Palacios",
      "Gustave Eiffel"
    ]
  },
  {
    enunciado: "¿Qué objetivo perseguía el Modernismo en relación con las artes decorativas?",
    correcta: "Integrar arquitectura, mobiliario, cerámica y joyería en una unidad estética",
    incorrectas: [
      "Separar radicalmente arte y vida cotidiana",
      "Prohibir el uso de artes aplicadas en la arquitectura"
    ]
  },
  {
    enunciado: "¿Qué relación tuvo el Modernismo con la burguesía industrial?",
    correcta: "Fue promovido por la burguesía como signo de prestigio y distinción cultural",
    incorrectas: [
      "Se vinculó solo a proyectos populares y proletarios",
      "Fue rechazado por las élites urbanas"
    ]
  },
  {
    enunciado: "¿Qué arquitecto madrileño desarrolló obras con influencias modernistas?",
    correcta: "Antonio Palacios",
    incorrectas: [
      "Juan de Villanueva",
      "Ricardo Velázquez Bosco"
    ]
  },
  {
    enunciado: "¿Qué estilo arquitectónico precedió al Modernismo en España?",
    correcta: "El eclecticismo historicista",
    incorrectas: [
      "El racionalismo de la Bauhaus",
      "El expresionismo alemán"
    ]
  },
  {
    enunciado: "¿Qué característica diferencia al Art Déco del Modernismo?",
    correcta: "El Art Déco utiliza geometría y ornamentación estilizada, no formas orgánicas",
    incorrectas: [
      "El Art Déco renuncia por completo a la decoración",
      "El Art Déco es idéntico al Jugendstil"
    ]
  },
  {
    enunciado: "¿Qué edificio de Domènech i Montaner es Patrimonio de la Humanidad?",
    correcta: "El Hospital de Sant Pau",
    incorrectas: [
      "La Casa Milà",
      "El Palacio Real de Madrid"
    ]
  },
  {
    enunciado: "¿Qué arquitecto definió el modernismo catalán como 'nuestra forma de ser modernos'?",
    correcta: "Lluís Domènech i Montaner",
    incorrectas: [
      "Josep Puig i Cadafalch",
      "Antoni Gaudí"
    ]
  },
  {
    enunciado: "¿Qué elemento técnico facilitó el desarrollo de rascacielos en el siglo XX?",
    correcta: "La estructura metálica con ascensores",
    incorrectas: [
      "El refuerzo de las bóvedas románicas",
      "El uso de adobe y piedra caliza"
    ]
  },
  {
    enunciado: "¿Qué arquitecto proyectó la Casa Milà o 'La Pedrera'?",
    correcta: "Antoni Gaudí",
    incorrectas: [
      "Lluís Domènech i Montaner",
      "Walter Gropius"
    ]
  },
  {
    enunciado: "¿Qué simboliza el Modernismo en la historia de la arquitectura?",
    correcta: "El puente entre el historicismo del XIX y la racionalidad del XX",
    incorrectas: [
      "La desaparición total del arte en la arquitectura",
      "La continuidad sin cambios del clasicismo académico"
    ]
  }
];
