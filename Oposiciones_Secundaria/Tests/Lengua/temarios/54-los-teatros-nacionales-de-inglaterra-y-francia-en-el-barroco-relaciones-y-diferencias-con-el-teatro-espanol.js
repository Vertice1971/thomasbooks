// temarios/54-los-teatros-nacionales-de-inglaterra-y-francia-en-el-barroco-relaciones-y-diferencias-con-el-teatro-espanol.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo general comparten los teatros inglés y español frente al francés en el Barroco?",
    correcta: "Flexibilidad de reglas y mezcla de tonos frente al normativismo francés",
    incorrectas: [
      "Observancia estricta de las tres unidades en ambos",
      "Uso exclusivo de prosa sin verso en ambos"
    ]
  },
  {
    enunciado: "¿Qué metro o forma verbal predomina en el teatro isabelino-jacobeo?",
    correcta: "El verso blanco (blank verse) en pentámetro yámbico, alternado con prosa",
    incorrectas: [
      "El alexandrino rimado en pareados",
      "La polimetría rimada con romances y redondillas"
    ]
  },
  {
    enunciado: "¿Qué rasgo métrico identifica al clasicismo francés del XVII?",
    correcta: "El alexandrino rimado con fuerte regularidad estrófica",
    incorrectas: [
      "El verso blanco sin rima predominante",
      "El octosílabo asonantado de romance"
    ]
  },
  {
    enunciado: "¿Cuál es el rasgo métrico más característico de la comedia nueva española?",
    correcta: "La polimetría funcional (redondillas, romance, décimas, sonetos, silvas)",
    incorrectas: [
      "La isometría obligatoria de alejandrinos",
      "El uso exclusivo de prosa dialogada"
    ]
  },
  {
    enunciado: "¿Qué postura respecto a las tres unidades distingue al teatro francés clásico?",
    correcta: "Defensa normativa de unidades de acción, tiempo y lugar",
    incorrectas: [
      "Rechazo absoluto de toda verosimilitud",
      "Mezcla libre sin criterio de unidad"
    ]
  },
  {
    enunciado: "¿Qué estructura de actos es normativa en Francia y cuál en España?",
    correcta: "Cinco actos en Francia; tres jornadas en España",
    incorrectas: [
      "Tres actos en Francia; cinco jornadas en España",
      "Dos actos en Francia; cuatro jornadas en España"
    ]
  },
  {
    enunciado: "¿Qué tipo de espacio escénico caracterizó a los teatros públicos de Londres como The Globe?",
    correcta: "Escenario de proyección (thrust) sin telón y escenografía mínima",
    incorrectas: [
      "Sala a la italiana con arco de proscenio y decorado en perspectiva",
      "Corral cerrado con patio y aposentos laterales"
    ]
  },
  {
    enunciado: "¿Qué tipo de sala y aparato escénico distingue al teatro francés cortesano?",
    correcta: "Sala a la italiana con proscenio y decorados de perspectiva",
    incorrectas: [
      "Patio abierto sin bastidores ni telones",
      "Carros triunfales en plazas como dispositivo central"
    ]
  },
  {
    enunciado: "¿Qué rasgo define al corral de comedias español?",
    correcta: "Patio con mosqueteros, cazuela para mujeres y aposentos en galerías",
    incorrectas: [
      "Anfiteatro de mármol romano al aire libre",
      "Caja escénica con foso de orquesta a la italiana"
    ]
  },
  {
    enunciado: "Antes de 1660, ¿qué peculiaridad tenía la actuación en Inglaterra?",
    correcta: "Los papeles femeninos eran representados por muchachos; no había actrices",
    incorrectas: [
      "Las actrices dominaban todas las compañías",
      "La ley prohibía a menores aparecer en escena"
    ]
  },
  {
    enunciado: "¿Qué institución supervisaba licencias y repertorios en el teatro inglés?",
    correcta: "El Master of the Revels",
    incorrectas: [
      "La Académie Française",
      "El Consejo de Castilla"
    ]
  },
  {
    enunciado: "¿En qué año se ordenó el cierre de los teatros públicos en Inglaterra durante la Guerra Civil?",
    correcta: "En 1642",
    incorrectas: [
      "En 1601",
      "En 1680"
    ]
  },
  {
    enunciado: "¿Qué cambio trajo la Restauración inglesa en 1660 al teatro?",
    correcta: "Reapertura de salas y presencia estable de actrices en escena",
    incorrectas: [
      "Prohibición del verso y obligación de prosa",
      "Supresión de la música y del baile escénico"
    ]
  },
  {
    enunciado: "¿Qué compañía estuvo ligada a Shakespeare tras 1603?",
    correcta: "The King’s Men",
    incorrectas: [
      "La Comédie-Italienne",
      "La Compañía del Príncipe (Madrid)"
    ]
  },
  {
    enunciado: "¿Qué institución francesa de 1680 consolidó el canon clásico?",
    correcta: "La Comédie-Française",
    incorrectas: [
      "El Hôtel de Bourgogne (fundación original del XVI)",
      "El Théâtre de l’Odéon del XIX"
    ]
  },
  {
    enunciado: "¿Qué forma de espectáculo cortesano combinaron Ben Jonson e Inigo Jones?",
    correcta: "El masque, con poesía, música, danza y aparato escenográfico",
    incorrectas: [
      "El auto sacramental callejero con carros",
      "La ópera italiana en tres actos del siglo XIX"
    ]
  },
  {
    enunciado: "¿Quién colaboró con Molière en la comédie-ballet de la corte de Luis XIV?",
    correcta: "Jean-Baptiste Lully",
    incorrectas: [
      "Jean Racine",
      "Georges Bizet"
    ]
  },
  {
    enunciado: "¿Qué debate crítico fijó las reglas de verosimilitud y decoro en Francia?",
    correcta: "La Querelle du Cid en torno a la obra de Corneille",
    incorrectas: [
      "El debate sobre Hamlet entre cervantistas",
      "La polémica del Arte nuevo de Lope en 1598"
    ]
  },
  {
    enunciado: "¿Qué rasgo temático se asocia a Racine en la tragedia clásica francesa?",
    correcta: "Psicología de la pasión sometida al deber y a la bienséance",
    incorrectas: [
      "Realismo costumbrista urbano sin nobleza",
      "Parodia burlesca de héroes caballerescos"
    ]
  },
  {
    enunciado: "¿Qué subgénero inglés satiriza la vida mercantil y urbana londinense?",
    correcta: "La city comedy",
    incorrectas: [
      "El auto sacramental",
      "La comédie-ballet"
    ]
  },
  {
    enunciado: "¿Qué tema es central en el teatro español del Siglo de Oro en contraste con el inglés?",
    correcta: "El honor individual y colectivo como eje de conflicto",
    incorrectas: [
      "La sátira de doctores y hipócritas como único motor",
      "El colonialismo marítimo como tema dominante"
    ]
  },
  {
    enunciado: "¿Qué combinación comparativa es correcta sobre verso y forma?",
    correcta: "Inglaterra: verso blanco; Francia: alexandrino rimado; España: polimetría rimada",
    incorrectas: [
      "Inglaterra: octosílabo rimado; Francia: prosa; España: verso blanco",
      "Inglaterra: alejandrino rimado; Francia: blank verse; España: prosa"
    ]
  },
  {
    enunciado: "¿Qué pieza española de aparato y alegoría doctrinal no tiene equivalente exacto inglés?",
    correcta: "El auto sacramental del Corpus",
    incorrectas: [
      "La city comedy",
      "La comédie-ballet"
    ]
  },
  {
    enunciado: "¿Qué autor español está en el origen del mito de Don Juan retomado por Molière?",
    correcta: "Tirso de Molina con El burlador de Sevilla",
    incorrectas: [
      "Calderón con La vida es sueño",
      "Lope con El caballero de Olmedo"
    ]
  },
  {
    enunciado: "En la Restauración inglesa, ¿qué tradición continental influyó en la comedia?",
    correcta: "La comedia de enredo española y modelos franceses",
    incorrectas: [
      "El teatro litúrgico medieval exclusivamente",
      "La tragedia griega sin modificaciones"
    ]
  },
  {
    enunciado: "¿Qué diferencia escenográfica es correcta?",
    correcta: "Inglaterra: minimalismo verbal y escenografía escasa; Francia: decorado en perspectiva y proscenio",
    incorrectas: [
      "Inglaterra: decorado en perspectiva; Francia: escenario desnudo",
      "Ambas comparten carros triunfales como base"
    ]
  },
  {
    enunciado: "¿Qué teatro público español es característico del sistema de corrales?",
    correcta: "El Corral del Príncipe (Madrid)",
    incorrectas: [
      "Blackfriars (Londres)",
      "Hôtel de Bourgogne (París)"
    ]
  },
  {
    enunciado: "¿Qué regla de bienséance afecta a la representación de violencia en la tragedia francesa?",
    correcta: "Tendencia a desplazar la violencia fuera de escena por decoro",
    incorrectas: [
      "Obligación de mostrar muertes en escena",
      "Prohibición de relatos en estilo indirecto"
    ]
  },
  {
    enunciado: "¿Qué noción de vraisemblance guía la poética francesa?",
    correcta: "Verosimilitud: lo plausible dentro de normas y expectativas",
    incorrectas: [
      "Veracidad histórica estricta sin invención",
      "Capricho escénico sin reglas de coherencia"
    ]
  },
  {
    enunciado: "¿Qué figura típica del teatro español no tiene equivalente estable en el francés clásico?",
    correcta: "El gracioso como contrapunto cómico",
    incorrectas: [
      "El rey justiciero",
      "El galán noble"
    ]
  },
  {
    enunciado: "¿Qué género inglés de corte integra aparato visual y alegoría moral, aunque no doctrinal eucarística?",
    correcta: "El masque cortesano",
    incorrectas: [
      "El auto sacramental",
      "La mojiganga urbana"
    ]
  },
  {
    enunciado: "¿Qué relación público/escena es más propia de Inglaterra y España que de Francia?",
    correcta: "Teatros comerciales con fuerte presencia de público popular",
    incorrectas: [
      "Representaciones privadas exclusivas de corte en todos los casos",
      "Prohibición de venta de entradas al público general"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico de Molière define su comedia?",
    correcta: "Sátira de costumbres y de tipos con integración de música y baile",
    incorrectas: [
      "Tragedia de pasiones nobles en alexandrino",
      "Farsa sin diálogo ni estructura"
    ]
  },
  {
    enunciado: "¿Qué subgénero inglés se nutre de crónica y poder político con gran densidad de escenas públicas?",
    correcta: "El history play",
    incorrectas: [
      "La comédie-ballet",
      "El auto sacramental"
    ]
  },
  {
    enunciado: "¿Qué rasgo de organización distingue a la escena francesa respecto a la inglesa?",
    correcta: "Mayor estática y declamación enmarcadas por decorado perspectívico",
    incorrectas: [
      "Mayor improvisación con actores sin texto",
      "Ausencia de reglas de decoro y bienséance"
    ]
  },
  {
    enunciado: "¿Qué par comparativo de edificios teatrales es correcto?",
    correcta: "The Globe (Londres) – Comédie-Française (París) – Corral del Príncipe (Madrid)",
    incorrectas: [
      "Blackfriars – Odéon – Coliseo romano de Itálica",
      "Teatro Español – La Scala – The Rose"
    ]
  },
  {
    enunciado: "¿Qué combinación de autores representa con precisión cada tradición?",
    correcta: "Shakespeare (EN), Corneille/Racine/Molière (FR), Lope/Calderón/Tirso (ES)",
    incorrectas: [
      "Marlowe (FR), Racine (EN), Lope (IT)",
      "Jonson (ES), Molière (EN), Calderón (FR)"
    ]
  },
  {
    enunciado: "¿Qué principio poético declara Lope y que comparten, en la práctica, los isabelinos?",
    correcta: "Gustar al público sin someterse rígidamente a preceptos",
    incorrectas: [
      "Someterse a la preceptiva aunque el público se aburra",
      "Eliminar la mezcla de tonos por decreto"
    ]
  },
  {
    enunciado: "¿Qué elemento musical/visual se integra especialmente en la corte francesa del XVII?",
    correcta: "Ballet y música cortesana en colaboración con dramaturgia",
    incorrectas: [
      "Canto llano litúrgico como único soporte",
      "Improvisación sin partitura ni coreografía"
    ]
  },
  {
    enunciado: "¿Qué afirmación comparativa es correcta sobre actrices en escena?",
    correcta: "Francia y España cuentan con actrices; en Inglaterra aparecen con la Restauración (1660)",
    incorrectas: [
      "En los tres países hubo actrices desde 1550",
      "En ninguno hubo actrices hasta el siglo XVIII"
    ]
  },
  {
    enunciado: "¿Qué dinámica de cierre escénico aparece con frecuencia en España e Inglaterra?",
    correcta: "Restauración del orden por revelaciones, castigos y bodas finales",
    incorrectas: [
      "Suspensión permanente sin resolución por norma",
      "Ejecución pública del protagonista en todas las comedias"
    ]
  }
];
