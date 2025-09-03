// temarios/22-Proceso-de-hominizacion-y-cultura-material-la-aportacion-de-la-antropologia-historica.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por proceso de hominización?",
    correcta: "El conjunto de transformaciones biológicas y culturales que dieron lugar al Homo sapiens moderno",
    incorrectas: [
      "El paso de las sociedades agrícolas a las industriales",
      "El desarrollo de las primeras ciudades en el Neolítico"
    ]
  },
  {
    enunciado: "¿Qué disciplinas se combinan para estudiar la hominización?",
    correcta: "Antropología física, arqueología prehistórica e historia cultural",
    incorrectas: [
      "Geografía, biología marina y cartografía histórica",
      "Psicología social, lingüística comparada y musicología"
    ]
  },
  {
    enunciado: "¿Qué especie es considerada el primer representante del género Homo?",
    correcta: "Homo habilis",
    incorrectas: [
      "Australopithecus afarensis",
      "Homo neanderthalensis"
    ]
  },
  {
    enunciado: "¿Qué descubrimiento en Georgia aportó datos clave sobre la evolución humana?",
    correcta: "Los fósiles de Homo georgicus en Dmanisi",
    incorrectas: [
      "Las pinturas rupestres de Lascaux",
      "La momia de Ötzi"
    ]
  },
  {
    enunciado: "¿Qué innovación caracteriza el Paleolítico inferior?",
    correcta: "La aparición de la industria lítica Achelense con bifaces",
    incorrectas: [
      "El desarrollo de la cerámica decorada",
      "La fundición del cobre"
    ]
  },
  {
    enunciado: "¿Qué cambio anatómico permitió liberar las manos para manipular herramientas?",
    correcta: "El bipedismo",
    incorrectas: [
      "La reducción de la dentadura",
      "La aparición del lenguaje simbólico"
    ]
  },
  {
    enunciado: "¿Qué avance cultural se documenta en el Paleolítico medio?",
    correcta: "La industria musteriense asociada a neandertales",
    incorrectas: [
      "La escritura cuneiforme en Mesopotamia",
      "La construcción de dólmenes megalíticos"
    ]
  },
  {
    enunciado: "¿Qué especie presenta un cráneo reducido y vivió en la isla de Flores?",
    correcta: "Homo floresiensis",
    incorrectas: [
      "Homo erectus",
      "Homo heidelbergensis"
    ]
  },
  {
    enunciado: "¿Qué factor ambiental influyó en el desarrollo del bipedismo?",
    correcta: "La expansión de las sabanas y reducción de áreas boscosas",
    incorrectas: [
      "El aumento de la actividad volcánica",
      "La glaciación del Pleistoceno medio"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al Paleolítico superior?",
    correcta: "Industria laminar, arte rupestre y objetos simbólicos",
    incorrectas: [
      "Inicio de la agricultura y domesticación de animales",
      "Aparición de la metalurgia del hierro"
    ]
  },
  {
    enunciado: "¿Qué es el materialismo cultural según Marvin Harris?",
    correcta: "Una teoría que explica la cultura en función del entorno y la economía",
    incorrectas: [
      "Una corriente que prioriza el simbolismo religioso sobre la economía",
      "Un método de datación por radiocarbono"
    ]
  },
  {
    enunciado: "¿Qué técnica lítica se asocia al Homo habilis?",
    correcta: "Industria Olduvayense",
    incorrectas: [
      "Industria Achelense",
      "Industria Magdaleniense"
    ]
  },
  {
    enunciado: "¿Qué corriente arqueológica impulsó Lewis Binford?",
    correcta: "Arqueología procesual",
    incorrectas: [
      "Arqueología post-procesual",
      "Arqueología experimental"
    ]
  },
  {
    enunciado: "¿Qué método de estudio utiliza la antropología histórica?",
    correcta: "Integrar evidencias físicas y materiales con marcos de interpretación histórica",
    incorrectas: [
      "Analizar exclusivamente textos escritos antiguos",
      "Estudiar únicamente la genética poblacional"
    ]
  },
  {
    enunciado: "¿Qué cambio craneal es clave en la hominización?",
    correcta: "Aumento de la capacidad craneal y reorganización cerebral",
    incorrectas: [
      "Aparición de la cresta sagital",
      "Reducción de la bóveda craneal"
    ]
  },
  {
    enunciado: "¿Qué especie es contemporánea de los primeros Homo sapiens en Eurasia?",
    correcta: "Homo neanderthalensis",
    incorrectas: [
      "Homo naledi",
      "Homo ergaster"
    ]
  },
  {
    enunciado: "¿Qué aporta la paleogenética al estudio de la hominización?",
    correcta: "Permite conocer relaciones de parentesco y flujos genéticos entre especies humanas",
    incorrectas: [
      "Determina la cronología exacta de los fósiles mediante carbono-14",
      "Analiza la erosión de yacimientos arqueológicos"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue al Homo sapiens de otras especies del género Homo?",
    correcta: "Un cráneo alto y globular con frente vertical",
    incorrectas: [
      "Una mandíbula robusta sin mentón",
      "Un toro supraorbital muy pronunciado"
    ]
  },
  {
    enunciado: "¿Qué significado tiene la cultura material para el estudio de la Prehistoria?",
    correcta: "Es la evidencia tangible del desarrollo tecnológico y simbólico humano",
    incorrectas: [
      "Son exclusivamente objetos de carácter ornamental",
      "Se limita a armas de caza de metal"
    ]
  },
  {
    enunciado: "¿Qué teórico defendió la arqueología post-procesual?",
    correcta: "Ian Hodder",
    incorrectas: [
      "Gordon Childe",
      "Raymond Dart"
    ]
  },
  {
    enunciado: "¿Qué industria lítica caracteriza al Neolítico?",
    correcta: "Pulimentado de piedra y herramientas agrícolas",
    incorrectas: [
      "Talla de sílex en forma de hojas",
      "Fabricación de hachas de bronce"
    ]
  },
  {
    enunciado: "¿En qué periodo aparecen las primeras manifestaciones artísticas?",
    correcta: "Paleolítico superior",
    incorrectas: [
      "Paleolítico inferior",
      "Mesolítico"
    ]
  },
  {
    enunciado: "¿Qué técnica de datación permite establecer cronologías en fósiles de más de 50.000 años?",
    correcta: "Datación por series de uranio",
    incorrectas: [
      "Carbono-14",
      "Termoluminiscencia"
    ]
  },
  {
    enunciado: "¿Qué papel tiene el pulgar oponible en la evolución humana?",
    correcta: "Facilitar la manipulación precisa de herramientas",
    incorrectas: [
      "Mejorar la capacidad auditiva",
      "Favorecer el desarrollo del lenguaje"
    ]
  },
  {
    enunciado: "¿Qué es el darwinismo social?",
    correcta: "Una interpretación sociopolítica de la selección natural aplicada a las sociedades humanas",
    incorrectas: [
      "La aplicación de la genética mendeliana a la agricultura",
      "Una teoría sobre el origen del lenguaje"
    ]
  },
  {
    enunciado: "¿Qué teoría prioriza el papel de la infraestructura económica en la evolución social?",
    correcta: "Materialismo histórico",
    incorrectas: [
      "Funcionalismo",
      "Estructuralismo"
    ]
  },
  {
    enunciado: "¿Qué especie utilizó de forma sistemática el fuego para cocinar?",
    correcta: "Homo erectus",
    incorrectas: [
      "Homo habilis",
      "Australopithecus africanus"
    ]
  },
  {
    enunciado: "¿Qué tipo de organización social se infiere en el Paleolítico superior?",
    correcta: "Grupos de cazadores-recolectores con división de tareas",
    incorrectas: [
      "Grandes ciudades fortificadas",
      "Sociedades jerarquizadas con reyes"
    ]
  },
  {
    enunciado: "¿Qué función tuvo la arqueología procesual en los años 60?",
    correcta: "Aplicar métodos científicos y cuantitativos al estudio arqueológico",
    incorrectas: [
      "Rechazar toda base empírica en favor de la interpretación simbólica",
      "Centrarse exclusivamente en colecciones de museo"
    ]
  },
  {
    enunciado: "¿Qué especie fue descubierta en Sudáfrica y presenta características primitivas y modernas?",
    correcta: "Homo naledi",
    incorrectas: [
      "Homo luzonensis",
      "Homo ergaster"
    ]
  },
  {
    enunciado: "¿Qué corriente antropológica destaca el análisis de instituciones y normas como elementos clave?",
    correcta: "Funcionalismo",
    incorrectas: [
      "Materialismo cultural",
      "Cladismo"
    ]
  },
  {
    enunciado: "¿Qué herramienta típica del Achelense se caracteriza por su forma bifacial?",
    correcta: "Bifaz",
    incorrectas: [
      "Raedera",
      "Microlito"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene Atapuerca en el estudio de la evolución humana?",
    correcta: "Proporciona una secuencia fósil única en Europa desde hace más de un millón de años",
    incorrectas: [
      "Es el primer yacimiento donde se halló Homo sapiens",
      "Contiene las pinturas rupestres más antiguas del mundo"
    ]
  },
  {
    enunciado: "¿Qué especie presenta evidencias de hibridación con Homo sapiens según estudios genéticos?",
    correcta: "Homo neanderthalensis",
    incorrectas: [
      "Homo habilis",
      "Homo floresiensis"
    ]
  },
  {
    enunciado: "¿Qué tipo de evidencias estudia la antropología histórica además de fósiles?",
    correcta: "Útiles, arte, restos de vivienda y patrones de enterramiento",
    incorrectas: [
      "Únicamente inscripciones epigráficas",
      "Datos astronómicos de observatorios prehistóricos"
    ]
  },
  {
    enunciado: "¿Qué avance cognitivo permitió planificar la fabricación de herramientas complejas?",
    correcta: "El pensamiento simbólico y la capacidad de abstracción",
    incorrectas: [
      "El aumento de la fuerza física",
      "La desaparición del pulgar oponible"
    ]
  },
  {
    enunciado: "¿Qué especie es considerada la primera en salir de África con amplia dispersión geográfica?",
    correcta: "Homo erectus",
    incorrectas: [
      "Homo naledi",
      "Homo floresiensis"
    ]
  },
  {
    enunciado: "¿Qué cultura lítica se asocia a la fase final del Paleolítico superior en Europa occidental?",
    correcta: "Magdaleniense",
    incorrectas: [
      "Olduvayense",
      "Achelense"
    ]
  }
];
