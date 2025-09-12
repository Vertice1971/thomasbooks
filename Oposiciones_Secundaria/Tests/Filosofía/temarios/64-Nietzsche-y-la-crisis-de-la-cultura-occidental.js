// temarios/64-Nietzsche-y-la-crisis-de-la-cultura-occidental.js
// Basado en la plantilla 0-Plantilla-temario.js
var PREGUNTAS = [
  {
    enunciado: "Según Nietzsche, ¿qué expresa la fórmula «Dios ha muerto»?",
    correcta: "El diagnóstico histórico-cultural del derrumbe de los fundamentos trascendentes de la moral y del sentido",
    incorrectas: [
      "La demostración lógica de la inexistencia de Dios mediante silogismos",
      "La invitación a sustituir la religión por el positivismo como nueva fe"
    ]
  },
  {
    enunciado: "¿Qué función desempeña la contraposición apolíneo/dionisíaco en El nacimiento de la tragedia?",
    correcta: "Caracterizar dos impulsos artísticos y vitales cuya tensión creativa funda la tragedia griega",
    incorrectas: [
      "Establecer una jerarquía donde lo apolíneo destruye definitivamente lo dionisíaco",
      "Probar que el arte es inferior a la ciencia como vía de conocimiento"
    ]
  },
  {
    enunciado: "¿A qué llama Nietzsche «nihilismo» en su diagnóstico de Occidente?",
    correcta: "A la desvalorización de los valores supremos que deja a la vida sin metas ni fundamentos",
    incorrectas: [
      "Al rechazo práctico de toda norma jurídica en política",
      "A una doctrina ética que propone la compasión universal como principio supremo"
    ]
  },
  {
    enunciado: "¿Qué critica Nietzsche del «socratismo» en la cultura europea?",
    correcta: "La primacía de la razón discursiva que domestica la vida y reprime lo trágico",
    incorrectas: [
      "El uso del diálogo como forma literaria para la filosofía",
      "La defensa del examen de conciencia como práctica pedagógica"
    ]
  },
  {
    enunciado: "En la genealogía de la moral, ¿qué distingue Nietzsche entre moral de señores y de esclavos?",
    correcta: "Dos evaluaciones del bien y del mal surgidas de distintos afectos: afirmación de fuerza frente a resentimiento",
    incorrectas: [
      "Dos códigos jurídicos medievales que regulan estamentos sociales",
      "Una diferencia entre religiones monoteístas y politeístas sin relación con la afectividad"
    ]
  },
  {
    enunciado: "¿Cómo entiende Nietzsche el «perspectivismo»?",
    correcta: "Como la tesis de que todo conocer es interpretación desde una posición vital, sin acceso a un punto de vista absoluto",
    incorrectas: [
      "Como relativismo total que equipara cualquier opinión a la verdad",
      "Como método geométrico para representar objetivamente el mundo"
    ]
  },
  {
    enunciado: "¿Qué significa «transvaloración de los valores» para Nietzsche?",
    correcta: "Crear nuevas tablas valorativas que afirmen la vida frente a valores decadentes heredados",
    incorrectas: [
      "Regresar a los valores clásicos grecolatinos sin modificación",
      "Sustituir lo moral por lo legal como único criterio de conducta"
    ]
  },
  {
    enunciado: "En La gaya ciencia y Así habló Zaratustra, ¿cómo aparece el «eterno retorno»?",
    correcta: "Como experiencia límite que pone a prueba la afirmación incondicional de la vida",
    incorrectas: [
      "Como prueba científica de la repetición cíclica del universo",
      "Como dogma religioso que promete salvación tras múltiples vidas"
    ]
  },
  {
    enunciado: "¿Qué papel otorga Nietzsche al arte en su filosofía temprana?",
    correcta: "Una potencia afirmativa que justifica la existencia y redime el sufrimiento",
    incorrectas: [
      "Un ornamento superfluo frente a la superioridad de la ciencia",
      "Una mera copia fiel de la realidad que evita la ilusión"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene Nietzsche con Schopenhauer en su evolución intelectual?",
    correcta: "Admira su diagnóstico del sufrimiento, pero abandona su pesimismo y niega la renuncia ascética",
    incorrectas: [
      "Adopta de modo definitivo el ascetismo como ideal supremo",
      "Rechaza desde el inicio toda influencia de Schopenhauer"
    ]
  },
  {
    enunciado: "¿Qué denuncia Nietzsche en el ideal ascético?",
    correcta: "Una voluntad de nada que convierte el sufrimiento en valor y somete la vida a la negación",
    incorrectas: [
      "Una disciplina útil para el entrenamiento físico del cuerpo",
      "La ausencia de normas para la investigación científica"
    ]
  },
  {
    enunciado: "¿Por qué la ciencia puede convertirse en “nuevo ídolo” según Nietzsche?",
    correcta: "Porque absolutiza sus métodos y hace pasar por verdad última una interpretación útil",
    incorrectas: [
      "Porque depende de las matemáticas, que son ficciones",
      "Porque sustituye la religión y por ello es moralmente inferior"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al «superhombre» (Übermensch) en Nietzsche?",
    correcta: "Figura simbólica de creación de valores, afirmación del devenir y superación del nihilismo",
    incorrectas: [
      "Modelo eugenésico de supremacía biológica racial",
      "Arquetipo de virtud cristiana que renuncia a la voluntad"
    ]
  },
  {
    enunciado: "¿Qué entiende Nietzsche por «resentimiento» en la moral de esclavos?",
    correcta: "Reactividad afectiva que invierte valores para desvalorizar lo fuerte y afirmar lo débil",
    incorrectas: [
      "Culpa legal por incumplir contratos",
      "Una emoción pasajera sin efectos culturales"
    ]
  },
  {
    enunciado: "¿Cómo se relaciona amor fati con la propuesta nietzscheana?",
    correcta: "Es la aceptación amorosa del destino y del devenir tal como acontece",
    incorrectas: [
      "Una técnica de indiferencia estoica ante toda emoción",
      "La negación del sufrimiento mediante consuelo trascendente"
    ]
  },
  {
    enunciado: "¿Qué denuncia Nietzsche con el término «ídolos» en El ocaso de los ídolos?",
    correcta: "Conceptos y valores sacralizados que paralizan la vida y el pensamiento crítico",
    incorrectas: [
      "Figuras artísticas de culto griego que deben restaurarse",
      "Únicamente supersticiones religiosas premodernas"
    ]
  },
  {
    enunciado: "¿Qué afirma Nietzsche sobre la verdad en su crítica a la metafísica?",
    correcta: "Que la verdad es un conjunto de metáforas y convenciones endurecidas por el uso",
    incorrectas: [
      "Que la verdad absoluta es accesible por intuición mística",
      "Que la verdad coincide con la utilidad económica"
    ]
  },
  {
    enunciado: "¿Qué papel tiene Zaratustra en la obra homónima?",
    correcta: "Es la voz poética y profética que anuncia la muerte de Dios y la creación de nuevos valores",
    incorrectas: [
      "Es un tratado sistemático en forma de silogismos demostrativos",
      "Es una biografía histórica de un reformador religioso persa"
    ]
  },
  {
    enunciado: "¿Por qué critica Nietzsche el igualitarismo moderno?",
    correcta: "Porque lo interpreta como herencia de la moral de compasión que nivela por abajo la excelencia creadora",
    incorrectas: [
      "Porque defiende una desigualdad jurídica ante la ley",
      "Porque rechaza toda forma de solidaridad social"
    ]
  },
  {
    enunciado: "¿Qué significa para Nietzsche «interpretación»?",
    correcta: "Actividad de la vida que configura el mundo desde fuerzas y perspectivas en lucha",
    incorrectas: [
      "Lectura neutral que refleja pasivamente los hechos",
      "Método filológico restringido a corregir textos antiguos"
    ]
  },
  {
    enunciado: "¿Qué transición se observa del periodo wagneriano al positivista en Nietzsche?",
    correcta: "Del entusiasmo estético-trágico a la crítica aforística y genealógica de la moral y la religión",
    incorrectas: [
      "Del ateísmo a una conversión religiosa final",
      "De la poesía a la lógica formal como proyecto central"
    ]
  },
  {
    enunciado: "¿Qué rasgo metodológico define la genealogía de Nietzsche?",
    correcta: "Indagar el origen histórico-afectivo de los valores mostrando sus condiciones de emergencia",
    incorrectas: [
      "Deducir principios morales universales a priori",
      "Verificar empíricamente leyes morales por experimentos"
    ]
  },
  {
    enunciado: "¿Cómo valora Nietzsche la compasión cristiana?",
    correcta: "Como afecto que perpetúa el sufrimiento y obstaculiza la afirmación de la vida",
    incorrectas: [
      "Como virtud suprema que hace posible la excelencia",
      "Como emoción neutra sin impacto cultural"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene Nietzsche con el antisemitismo y el nacionalismo de su tiempo?",
    correcta: "Los rechaza explícitamente y critica su vulgaridad y cerrazón",
    incorrectas: [
      "Los adopta como pilares de su filosofía política",
      "Permanece neutral por desinterés en la política"
    ]
  },
  {
    enunciado: "¿Qué advierte la investigación filológica sobre La voluntad de poder como libro?",
    correcta: "Que no fue obra publicada por Nietzsche, sino montaje póstumo y problemático de fragmentos",
    incorrectas: [
      "Que es el único texto que Nietzsche publicó en vida",
      "Que es un tratado acabado dictado por Nietzsche en 1889"
    ]
  },
  {
    enunciado: "¿Cómo comprende Nietzsche la «voluntad de poder»?",
    correcta: "Como interpretación ontológica de la vida y del devenir como expansión y configuración de fuerzas",
    incorrectas: [
      "Como programa político de dominación imperial",
      "Como instinto exclusivamente biológico de supervivencia"
    ]
  },
  {
    enunciado: "¿Qué papel otorga Nietzsche al cuerpo en el conocer?",
    correcta: "El cuerpo es una gran razón: la cognición se enraíza en afectos e impulsos",
    incorrectas: [
      "El cuerpo distrae del conocer, que es puramente intelectual",
      "El cuerpo solo importa para la estética, no para la verdad"
    ]
  },
  {
    enunciado: "En Genealogía de la moral, ¿qué función tiene la «mala conciencia»?",
    correcta: "Interioriza los impulsos agresivos convirtiéndolos en culpa y deuda consigo mismo",
    incorrectas: [
      "Opera como alegría espontánea ante el éxito",
      "Es un concepto jurídico romano sin relevancia moral"
    ]
  },
  {
    enunciado: "¿Qué significa para Nietzsche «decadencia» cultural?",
    correcta: "Empobrecimiento vital por sobrevaluación de lo racional, lo ascético y lo utilitario",
    incorrectas: [
      "Declive económico de las sociedades europeas",
      "Pérdida de tradición literaria griega en escuelas"
    ]
  },
  {
    enunciado: "¿Cómo lee Nietzsche a los presocráticos frente a Sócrates y Platón?",
    correcta: "Valora en ellos una sabiduría trágica y afirmativa opacada por el racionalismo posterior",
    incorrectas: [
      "Niega su relevancia por carecer de lógica formal",
      "Los considera precursores de la moral cristiana"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa el estilo aforístico en Nietzsche?",
    correcta: "Forma abierta que rompe con el sistema y deja ver el pensar como experimentación",
    incorrectas: [
      "Defecto literario que oculta tesis sistemáticas",
      "Recurso irónico sin contenido filosófico"
    ]
  },
  {
    enunciado: "¿Qué distingue al nihilismo activo del pasivo en Nietzsche?",
    correcta: "El activo destruye valores caducos como paso para crear; el pasivo conduce a la inercia y al vacío",
    incorrectas: [
      "El activo es religioso y el pasivo, ateo",
      "El activo es político y el pasivo, estético"
    ]
  },
  {
    enunciado: "¿Cuál es la crítica nietzscheana a la «voluntad de verdad»?",
    correcta: "Que es un impulso moral heredado que absolutiza un valor sin preguntarse por su valor para la vida",
    incorrectas: [
      "Que la verdad no existe en ningún sentido posible",
      "Que la verdad se reduce a utilidad técnica inmediata"
    ]
  },
  {
    enunciado: "¿Cómo entiende Nietzsche la educación y la cultura en sus Consideraciones intempestivas?",
    correcta: "Como formación para la grandeza y la afirmación, no como erudición servil o utilidad estrecha",
    incorrectas: [
      "Como instrucción profesional orientada al mercado",
      "Como adoctrinamiento patriótico sin dimensión crítica"
    ]
  },
  {
    enunciado: "¿Qué función tiene la crítica a Wagner en la madurez de Nietzsche?",
    correcta: "Marcar su ruptura con la redención artística de corte romántico-cristiano",
    incorrectas: [
      "Reivindicar el drama musical como vía de salvación religiosa",
      "Negar todo valor a la música como arte vital"
    ]
  },
  {
    enunciado: "¿Qué afirma Nietzsche sobre el sujeto y la unidad del yo?",
    correcta: "Que el yo es una ficción gramatical; hay una pluralidad de impulsos en tensión",
    incorrectas: [
      "Que el yo es substancia simple e inmutable",
      "Que el yo se identifica con el alma inmortal"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre moral y poder en la lectura nietzscheana?",
    correcta: "Los valores expresan relaciones de fuerzas; la moral es un efecto de interpretaciones dominantes",
    incorrectas: [
      "La moral es independiente de la vida social y del conflicto",
      "La moral deriva exclusivamente de mandatos divinos"
    ]
  },
  {
    enunciado: "¿Cómo interpreta Nietzsche la historia de la filosofía occidental?",
    correcta: "Como una serie de intelectualizaciones que han devaluado lo trágico y afirmativo de la vida",
    incorrectas: [
      "Como progreso lineal hacia verdades definitivas",
      "Como preparación para la moral cristiana perfecta"
    ]
  },
  {
    enunciado: "¿Qué pretende Nietzsche con su crítica a la piedad y a la compasión?",
    correcta: "Desenmascarar afectos que encubren voluntad de poder reactiva y consolidan la decadencia",
    incorrectas: [
      "Prohibir legalmente la ayuda al necesitado",
      "Sustituir la compasión por la crueldad sistemática"
    ]
  },
  {
    enunciado: "¿Qué expresa Ecce Homo respecto de la propia obra de Nietzsche?",
    correcta: "Una auto-interpretación irónica y provocadora sobre su estilo, intención y recepción",
    incorrectas: [
      "Una retractación de su crítica al cristianismo",
      "Un manual sistemático de ética normativa"
    ]
  },
  {
    enunciado: "¿Cómo influye Nietzsche en la filosofía del siglo XX según lecturas como las de Heidegger o Foucault?",
    correcta: "Impulsa críticas al fundamento y a la subjetividad, y métodos genealógicos de análisis del poder",
    incorrectas: [
      "Restaura la metafísica clásica con nuevos argumentos",
      "Establece un consenso ético universal para la democracia"
    ]
  },
  {
    enunciado: "¿Qué exige, para Nietzsche, superar el nihilismo?",
    correcta: "Prácticas de creación de sentido, afirmación del devenir y reconfiguración de afectos y valores",
    incorrectas: [
      "Regresar a la moral tradicional reforzando su autoridad",
      "Confiar en el progreso técnico como solución suficiente"
    ]
  }
];
