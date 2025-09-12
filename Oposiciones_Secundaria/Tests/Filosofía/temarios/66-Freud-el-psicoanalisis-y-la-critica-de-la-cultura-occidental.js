// temarios/66-Freud-el-psicoanalisis-y-la-critica-de-la-cultura-occidental.js
// Basado en la plantilla 0-Plantilla-temario.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué representa Freud dentro de la llamada filosofía de la sospecha?",
    correcta: "La crítica a la conciencia transparente y la revelación del inconsciente como motor de la conducta",
    incorrectas: [
      "La defensa del sujeto cartesiano plenamente racional",
      "La afirmación del progreso ilustrado sin fisuras"
    ]
  },
  {
    enunciado: "¿Qué instancia psíquica describe la primera tópica freudiana?",
    correcta: "Consciente, preconsciente e inconsciente",
    incorrectas: [
      "Ello, yo y superyó",
      "Id, ego y alter ego"
    ]
  },
  {
    enunciado: "¿Qué diferencia introduce la segunda tópica respecto de la primera?",
    correcta: "Describe las instancias ello, yo y superyó como dinámicas de conflicto psíquico",
    incorrectas: [
      "Rechaza la existencia del inconsciente",
      "Identifica el inconsciente con la memoria biológica"
    ]
  },
  {
    enunciado: "¿Cuál es el método fundamental del psicoanálisis?",
    correcta: "La asociación libre, complementada por la interpretación de sueños y lapsus",
    incorrectas: [
      "El experimento de laboratorio estandarizado",
      "La deducción lógica a partir de axiomas"
    ]
  },
  {
    enunciado: "¿Qué núcleo del desarrollo infantil explica el complejo de Edipo?",
    correcta: "La estructuración del deseo y la identidad mediante la relación con los progenitores",
    incorrectas: [
      "El aprendizaje del lenguaje en la etapa escolar",
      "La adquisición de hábitos sociales en la adolescencia"
    ]
  },
  {
    enunciado: "¿Qué analogía establece Freud entre neurosis individual y cultura?",
    correcta: "Ambas muestran conflictos entre pulsiones y normas represivas",
    incorrectas: [
      "Ambas responden a leyes naturales de la biología",
      "Ambas son explicables solo por la economía"
    ]
  },
  {
    enunciado: "¿Qué analiza Freud en 'Totem y tabú'?",
    correcta: "El origen mítico de la cultura a partir del parricidio y la instauración de la ley",
    incorrectas: [
      "La superioridad científica del positivismo sobre la religión",
      "La imposibilidad de una moral universal"
    ]
  },
  {
    enunciado: "¿Qué sostiene Freud en 'El porvenir de una ilusión'?",
    correcta: "Que la religión es una ilusión derivada de deseos infantiles colectivos",
    incorrectas: [
      "Que la religión es indispensable como verdad absoluta",
      "Que la religión desaparecerá en favor del positivismo"
    ]
  },
  {
    enunciado: "¿Qué tesis central expone 'El malestar en la cultura'?",
    correcta: "Que la cultura reprime pulsiones básicas y genera culpa e insatisfacción",
    incorrectas: [
      "Que la cultura elimina por completo el sufrimiento humano",
      "Que la cultura no influye en la vida psíquica"
    ]
  },
  {
    enunciado: "¿Qué papel juega la pulsión de muerte en Freud?",
    correcta: "Explica la tendencia destructiva y la agresividad reprimida en la cultura",
    incorrectas: [
      "Es la energía que sostiene la creatividad artística",
      "Es una metáfora sin valor teórico"
    ]
  },
  {
    enunciado: "¿Qué significa que el yo no es dueño en su propia casa?",
    correcta: "Que el yo está condicionado por fuerzas inconscientes que no controla",
    incorrectas: [
      "Que el yo controla plenamente todos los procesos conscientes",
      "Que el yo desaparece en la madurez"
    ]
  },
  {
    enunciado: "¿Qué función cumple el superyó en la segunda tópica?",
    correcta: "Interiorizar normas y valores sociales generando culpa y autocontrol",
    incorrectas: [
      "Regular funciones biológicas básicas",
      "Asegurar la supervivencia corporal inmediata"
    ]
  },
  {
    enunciado: "¿Qué relación establece Freud entre cultura y represión?",
    correcta: "La cultura se funda en la represión de pulsiones sexuales y agresivas",
    incorrectas: [
      "La cultura elimina toda represión y garantiza placer ilimitado",
      "La cultura es ajena al funcionamiento psíquico"
    ]
  },
  {
    enunciado: "¿Qué significa sublimación en la teoría freudiana?",
    correcta: "Transformación de pulsiones en actividades socialmente aceptadas como arte o ciencia",
    incorrectas: [
      "Supresión total de la energía pulsional",
      "Negación de toda motivación inconsciente"
    ]
  },
  {
    enunciado: "¿Qué papel atribuye Freud a los sueños?",
    correcta: "Son la vía regia al inconsciente y expresan deseos reprimidos",
    incorrectas: [
      "Son fenómenos fisiológicos sin significado",
      "Son visiones proféticas de origen divino"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el ello?",
    correcta: "Es la instancia pulsional regida por el principio del placer",
    incorrectas: [
      "Es la parte racional que negocia con la realidad",
      "Es el conjunto de valores morales interiorizados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el yo en la segunda tópica?",
    correcta: "Media entre el ello, el superyó y la realidad",
    incorrectas: [
      "Es la sede exclusiva de lo inconsciente",
      "Es una ficción sin función alguna"
    ]
  },
  {
    enunciado: "¿Qué función cumple el principio de realidad?",
    correcta: "Modera el principio del placer para adecuarse a las exigencias externas",
    incorrectas: [
      "Anula por completo el principio del placer",
      "Impone el goce inmediato sin restricciones"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa la sexualidad en el psicoanálisis freudiano?",
    correcta: "Es central para explicar el desarrollo infantil y los síntomas neuróticos",
    incorrectas: [
      "Es secundaria frente a la razón pura",
      "Es un tema ajeno a la teoría psicoanalítica"
    ]
  },
  {
    enunciado: "¿Qué relación establece Freud entre arte y psicoanálisis?",
    correcta: "El arte es expresión sublimada de pulsiones inconscientes",
    incorrectas: [
      "El arte es independiente de la vida psíquica",
      "El arte es mera copia de la realidad objetiva"
    ]
  },
  {
    enunciado: "¿Qué crítica se hace al valor científico del psicoanálisis?",
    correcta: "Que no es falsable y carece de verificabilidad empírica",
    incorrectas: [
      "Que usa demasiado el método experimental",
      "Que es idéntico a la psicología conductista"
    ]
  },
  {
    enunciado: "¿Qué aporta la noción de represión en el psicoanálisis?",
    correcta: "Explica cómo contenidos inconscientes se mantienen fuera de la conciencia",
    incorrectas: [
      "Es un mecanismo que genera siempre satisfacción",
      "Es un concepto exclusivamente biológico"
    ]
  },
  {
    enunciado: "¿Qué influencias tuvo el psicoanálisis en la Escuela de Frankfurt?",
    correcta: "Inspiró análisis de la represión cultural y del malestar social",
    incorrectas: [
      "Reforzó la confianza en el positivismo científico",
      "Eliminó toda preocupación por la subjetividad"
    ]
  },
  {
    enunciado: "¿Qué representa Freud respecto a la Ilustración?",
    correcta: "Un cuestionamiento radical a la autonomía del sujeto racional",
    incorrectas: [
      "La culminación del optimismo ilustrado",
      "El abandono de toda crítica cultural"
    ]
  },
  {
    enunciado: "¿Qué describe Freud como 'malestar cultural'?",
    correcta: "La insatisfacción y la culpa generadas por la represión necesaria para la vida social",
    incorrectas: [
      "La falta de progreso material en Europa",
      "La ausencia de religión en la sociedad moderna"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la agresividad en la teoría freudiana de la cultura?",
    correcta: "Debe ser restringida, pero su represión genera culpa y sufrimiento psíquico",
    incorrectas: [
      "Es eliminada completamente por la civilización",
      "Es un instinto secundario sin importancia"
    ]
  },
  {
    enunciado: "¿Qué significa transferencia en el método psicoanalítico?",
    correcta: "Proyección de sentimientos inconscientes hacia el analista",
    incorrectas: [
      "Traspaso de datos objetivos en el diálogo clínico",
      "Sustitución del paciente por otro en la terapia"
    ]
  },
  {
    enunciado: "¿Qué critica Freud de la religión en 'El porvenir de una ilusión'?",
    correcta: "Que es ilusión infantil que perpetúa la dependencia psíquica",
    incorrectas: [
      "Que es fundamento racional de la moral",
      "Que es la base científica de la cultura"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el superyó en el individuo?",
    correcta: "Funciona como juez interno que produce sentimientos de culpa",
    incorrectas: [
      "Es la instancia pulsional que busca placer",
      "Es un órgano biológico del cerebro"
    ]
  },
  {
    enunciado: "¿Qué significa que Freud compara cultura y neurosis?",
    correcta: "Que la civilización reprime deseos y produce síntomas colectivos",
    incorrectas: [
      "Que la cultura elimina toda neurosis individual",
      "Que la cultura no tiene relación con la vida psíquica"
    ]
  },
  {
    enunciado: "¿Qué describe Freud en 'El yo y el ello'?",
    correcta: "La formulación de la segunda tópica con ello, yo y superyó",
    incorrectas: [
      "El análisis del inconsciente mediante hipnosis",
      "La interpretación exclusiva de sueños"
    ]
  },
  {
    enunciado: "¿Qué significa pulsión en el psicoanálisis?",
    correcta: "Una fuerza básica que impulsa al organismo hacia la satisfacción",
    incorrectas: [
      "Una idea abstracta sin base fisiológica",
      "Un simple hábito adquirido por repetición"
    ]
  },
  {
    enunciado: "¿Qué función cumple la interpretación de sueños en Freud?",
    correcta: "Revela deseos reprimidos y contenidos inconscientes",
    incorrectas: [
      "Predice acontecimientos futuros",
      "Justifica normas morales universales"
    ]
  },
  {
    enunciado: "¿Qué significa que la cultura limita el principio del placer?",
    correcta: "Que subordina la satisfacción inmediata a normas y leyes sociales",
    incorrectas: [
      "Que elimina por completo el deseo humano",
      "Que garantiza felicidad universal"
    ]
  },
  {
    enunciado: "¿Qué significa regresión en el psicoanálisis?",
    correcta: "Retorno a etapas anteriores del desarrollo ante conflictos actuales",
    incorrectas: [
      "Progreso lineal hacia la madurez plena",
      "Expansión ilimitada de la conciencia"
    ]
  },
  {
    enunciado: "¿Qué influencia tuvo Freud en el existencialismo?",
    correcta: "Aportó análisis de la angustia y la conflictividad del sujeto",
    incorrectas: [
      "Reafirmó la autonomía absoluta del yo racional",
      "Negó toda relevancia a la subjetividad"
    ]
  },
  {
    enunciado: "¿Qué función cumple el psicoanálisis en la crítica social?",
    correcta: "Ofrecer claves para entender cómo la represión cultural genera malestar colectivo",
    incorrectas: [
      "Defender el progreso científico como garantía de felicidad",
      "Promover un sistema político concreto"
    ]
  },
  {
    enunciado: "¿Qué significa la noción de 'Eros' en Freud?",
    correcta: "Pulsión de vida que busca unir, conservar y crear",
    incorrectas: [
      "Instinto puramente destructivo",
      "Idea metafísica sin valor clínico"
    ]
  },
  {
    enunciado: "¿Qué significa la noción de 'Tánatos' en Freud?",
    correcta: "Pulsión de muerte que tiende a la agresividad y a la destrucción",
    incorrectas: [
      "Impulso de superación creadora",
      "Una metáfora literaria sin contenido teórico"
    ]
  }
];
