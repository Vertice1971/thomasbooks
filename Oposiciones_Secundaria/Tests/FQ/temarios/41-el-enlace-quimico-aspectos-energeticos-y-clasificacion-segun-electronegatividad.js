// temarios/41-el-enlace-quimico-aspectos-energeticos-y-clasificacion-segun-electronegatividad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es, en términos energéticos, la energía de enlace entre dos átomos?",
    correcta: "La cantidad de energía necesaria para separar a los átomos desde la distancia de equilibrio hasta el infinito",
    incorrectas: [
      "La energía liberada al comprimir los átomos por debajo de la distancia de equilibrio",
      "La energía térmica mínima para iniciar una reacción exotérmica cualquiera"
    ]
  },
  {
    enunciado: "¿Por qué la formación de un enlace químico suele ir acompañada de liberación de energía?",
    correcta: "Porque el sistema pasa a un estado de menor energía potencial y mayor estabilidad",
    incorrectas: [
      "Porque aumenta la energía interna del sistema y se disipa como calor",
      "Porque la repulsión núcleo-núcleo domina sobre la atracción electrostática"
    ]
  },
  {
    enunciado: "¿Qué representa el mínimo de la curva de energía potencial entre dos átomos?",
    correcta: "La distancia de equilibrio del enlace donde se compensa atracción y repulsión",
    incorrectas: [
      "El punto donde el enlace se rompe espontáneamente",
      "La distancia promedio entre átomos en el estado gaseoso ideal"
    ]
  },
  {
    enunciado: "¿Cuál es una magnitud adecuada para estimar la fortaleza de un enlace covalente específico?",
    correcta: "La energía de disociación del enlace medida para esa molécula",
    incorrectas: [
      "El punto de ebullición del disolvente en el que se encuentra la molécula",
      "La masa molar de los átomos enlazados"
    ]
  },
  {
    enunciado: "En redes iónicas, ¿qué magnitud recoge el aporte electrostático a la estabilidad del cristal?",
    correcta: "La entalpía reticular del sólido iónico",
    incorrectas: [
      "La presión de vapor de la disolución saturada",
      "El calor específico a presión constante"
    ]
  },
  {
    enunciado: "¿Qué herramienta termodinámica permite estimar la entalpía reticular a partir de datos atómicos?",
    correcta: "El ciclo de Born-Haber",
    incorrectas: [
      "La ecuación de Van’t Hoff",
      "El principio de Le Châtelier"
    ]
  },
  {
    enunciado: "¿Qué constante geométrica aparece en el cálculo electrostático de una red iónica ideal?",
    correcta: "La constante de Madelung",
    incorrectas: [
      "La constante de Avogadro",
      "La constante de Planck reducida"
    ]
  },
  {
    enunciado: "Según las reglas de Fajans, ¿cuándo aumenta el carácter covalente de un compuesto iónico?",
    correcta: "Cuando el catión es pequeño y de alta carga y el anión es grande y polarizable",
    incorrectas: [
      "Cuando el catión es grande y el anión pequeño y poco polarizable",
      "Cuando ambos iones tienen radios muy similares y baja carga"
    ]
  },
  {
    enunciado: "¿Qué es la electronegatividad en el contexto del enlace químico?",
    correcta: "La capacidad relativa de un átomo para atraer electrones en un enlace",
    incorrectas: [
      "La energía necesaria para extraer un electrón de un átomo aislado en fase gaseosa",
      "La tendencia de un elemento a formar cationes en estado sólido"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la escala de electronegatividad de Pauling?",
    correcta: "Se deduce de diferencias de energías de enlace experimentales",
    incorrectas: [
      "Se obtiene promediando radios iónicos en cristales",
      "Se calcula solo a partir de datos fotoelectrónicos de sólidos"
    ]
  },
  {
    enunciado: "¿Cómo define Mulliken la electronegatividad de un elemento?",
    correcta: "Como la media entre su energía de ionización y su afinidad electrónica",
    incorrectas: [
      "Como el inverso del radio covalente",
      "Como la suma de todas sus energías de ionización"
    ]
  },
  {
    enunciado: "¿Qué criterio práctico usa con frecuencia el alumnado para clasificar enlaces por Δχ?",
    correcta: "Enlace iónico si Δχ es grande, covalente polar si es intermedio y no polar si es pequeño",
    incorrectas: [
      "Enlace metálico si Δχ es intermedio y covalente si es muy grande",
      "Enlace no polar si Δχ es grande y polar si es cercano a cero"
    ]
  },
  {
    enunciado: "¿Cuál es una limitación importante de usar solo Δχ para clasificar un enlace?",
    correcta: "No considera polarizabilidad, tamaño iónico ni estructura, que pueden alterar el carácter del enlace",
    incorrectas: [
      "No puede aplicarse a moléculas diatómicas",
      "Requiere conocer la entalpía de formación estándar del compuesto"
    ]
  },
  {
    enunciado: "¿Qué ocurre con el momento dipolar de CO₂ pese a tener enlaces C–O polares?",
    correcta: "Se anula por la geometría lineal y la simetría de la molécula",
    incorrectas: [
      "Se maximiza por la suma de los dipolos en el mismo sentido",
      "Permanece alto por el gran Δχ entre C y O independientemente de la geometría"
    ]
  },
  {
    enunciado: "¿Qué propiedad distingue típicamente a los sólidos iónicos a temperatura ambiente?",
    correcta: "Son malos conductores en estado sólido pero conducen en fusión o disolución",
    incorrectas: [
      "Conducen muy bien en el sólido por electrones deslocalizados",
      "Son maleables y dúctiles como los metales"
    ]
  },
  {
    enunciado: "¿Qué modelo explica la conductividad y la maleabilidad de los metales?",
    correcta: "La deslocalización de electrones y la formación de bandas de energía",
    incorrectas: [
      "La presencia de enlaces por pares electrónicos localizados en direcciones fijas",
      "La ruptura continua de enlaces iónicos en la red metálica"
    ]
  },
  {
    enunciado: "En la teoría de orbitales moleculares, ¿qué implica un mayor orden de enlace?",
    correcta: "Mayor estabilidad y, en general, menor longitud de enlace",
    incorrectas: [
      "Menor estabilidad y mayor longitud de enlace",
      "Ninguna relación con la estabilidad del sistema"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la resonancia en moléculas como el benceno?",
    correcta: "Una deslocalización electrónica que estabiliza la molécula respecto a estructuras límite",
    incorrectas: [
      "La alternancia real entre dos estructuras que se transforman constantemente",
      "La existencia de un único enlace doble fijo en cada anillo"
    ]
  },
  {
    enunciado: "¿Cómo cambia la polaridad de un enlace al aumentar la diferencia de electronegatividad?",
    correcta: "Aumenta el carácter iónico del enlace y su momento dipolar de enlace",
    incorrectas: [
      "Disminuye el carácter iónico y el momento dipolar",
      "No se modifica el carácter polar, solo la longitud del enlace"
    ]
  },
  {
    enunciado: "¿Qué combinación favorece un compuesto fuertemente iónico según tendencias periódicas?",
    correcta: "Catión pequeño de baja electronegatividad y anión grande de alta electronegatividad",
    incorrectas: [
      "Catión grande de alta electronegatividad y anión pequeño de baja electronegatividad",
      "Dos especies con electronegatividades idénticas"
    ]
  },
  {
    enunciado: "¿Qué magnitud vectorial permite relacionar polaridad molecular con propiedades macroscópicas?",
    correcta: "El momento dipolar molecular",
    incorrectas: [
      "La constante dieléctrica del vacío",
      "La presión osmótica de la disolución"
    ]
  },
  {
    enunciado: "¿Qué suele ocurrir con la energía de enlace al aumentar el orden de enlace C–C de sencillo a triple?",
    correcta: "Aumenta la energía de enlace y disminuye la longitud",
    incorrectas: [
      "Disminuye la energía de enlace y aumenta la longitud",
      "Permanece constante la energía y cambia solo la polaridad"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia típica de la polaridad del agua sobre sus propiedades?",
    correcta: "Presenta alta constante dieléctrica y excelentes capacidades de solvatación iónica",
    incorrectas: [
      "Es un disolvente apolar que no estabiliza iones en disolución",
      "No forma puentes de hidrógeno por su geometría angular"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica hay entre enlace iónico y covalente en su mecanismo idealizado?",
    correcta: "Transferencia de electrones en el iónico y compartición de pares en el covalente",
    incorrectas: [
      "Compartición en el iónico y transferencia en el covalente",
      "Deslocalización metálica en ambos casos"
    ]
  },
  {
    enunciado: "¿Qué propiedad cristalina influye en el valor de la entalpía reticular de un sólido iónico?",
    correcta: "La coordinación y el tipo de red (NaCl, CsCl, blenda, wurtzita)",
    incorrectas: [
      "La presión de vapor del disolvente con el que se cristaliza",
      "La viscosidad del fundido metálico"
    ]
  },
  {
    enunciado: "¿Qué combinación de factores aumenta la polarización de un anión por un catión?",
    correcta: "Catión con alta carga y pequeño radio y anión de gran tamaño",
    incorrectas: [
      "Catión de baja carga y gran radio y anión muy pequeño",
      "Catión y anión con idéntico radio iónico"
    ]
  },
  {
    enunciado: "¿Qué propiedad de las moléculas covalentes polares influye en su punto de ebullición?",
    correcta: "La intensidad de las fuerzas intermoleculares como dipolo–dipolo y puentes de hidrógeno",
    incorrectas: [
      "El número atómico del elemento más electronegativo exclusivamente",
      "La masa molar del disolvente con el que se mezclan"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la electronegatividad de Allred-Rochow?",
    correcta: "Una medida basada en la fuerza electrostática efectiva sobre los electrones de valencia",
    incorrectas: [
      "Una media entre potencial químico y entropía molar",
      "Una suma de afinidades electrónicas sucesivas"
    ]
  },
  {
    enunciado: "¿Qué sucede con NaCl en agua en términos de enlace y conducción eléctrica?",
    correcta: "Se disocia en iones hidratados que permiten la conducción en disolución",
    incorrectas: [
      "Permanece como moléculas neutras y no conduce en absoluto",
      "Forma enlaces metálicos transitorios que explican la conductividad"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia del carácter direccional de los enlaces covalentes en sólidos?",
    correcta: "Alta dureza y fragilidad en redes covalentes tridimensionales como el diamante",
    incorrectas: [
      "Gran maleabilidad y ductilidad comparables a los metales",
      "Elevada conductividad electrónica similar al cobre"
    ]
  },
  {
    enunciado: "¿Qué afirma correctamente sobre BeCl₂ en el continuo iónico–covalente?",
    correcta: "Presenta mayor covalencia de la esperada por Δχ debido a la alta polarización del Be²⁺",
    incorrectas: [
      "Es totalmente iónico por su elevado número atómico",
      "Es apolar por tratarse de un halogenuro de metal alcalino"
    ]
  },
  {
    enunciado: "En la teoría de valencia, ¿qué explica las geometrías moleculares típicas?",
    correcta: "La hibridación de orbitales y la repulsión entre pares electrónicos de valencia",
    incorrectas: [
      "La existencia de redes iónicas en todas las moléculas",
      "La ausencia de direccionalidad en los pares enlazantes"
    ]
  },
  {
    enunciado: "¿Cuál es el efecto de la deslocalización electrónica en el enlace metálico?",
    correcta: "Favorece la conductividad térmica y eléctrica y la cohesión del sólido",
    incorrectas: [
      "Impide la conducción eléctrica al inmovilizar electrones",
      "Reduce la cohesión al romper la simetría de la red"
    ]
  },
  {
    enunciado: "¿Cómo se relaciona el momento dipolar experimental con el porcentaje de carácter iónico de un enlace?",
    correcta: "Un momento dipolar menor al teórico de cargas puntuales indica menor porcentaje iónico",
    incorrectas: [
      "Un momento dipolar mayor al teórico siempre implica enlace metálico",
      "El momento dipolar no aporta información sobre el carácter iónico"
    ]
  },
  {
    enunciado: "¿Qué combinación es típica de un enlace covalente no polar?",
    correcta: "Dos átomos idénticos como en H₂ u O₂",
    incorrectas: [
      "Un metal alcalino con un halógeno",
      "Un átomo de flúor con uno de hidrógeno"
    ]
  },
  {
    enunciado: "¿Qué factor NO se usa directamente para calcular una entalpía reticular con Born-Landé?",
    correcta: "La constante dieléctrica del disolvente donde se disolverá la sal",
    incorrectas: [
      "La constante de Madelung de la red",
      "Los radios iónicos efectivos y un exponente de repulsión"
    ]
  },
  {
    enunciado: "¿Qué explica que HF tenga un punto de ebullición anómalamente alto respecto a HCl, HBr y HI?",
    correcta: "La formación de una red extensa de puentes de hidrógeno entre moléculas de HF",
    incorrectas: [
      "La ausencia total de polaridad en la molécula de HF",
      "La gran masa molar del flúor frente al cloro y al bromo"
    ]
  },
  {
    enunciado: "¿Qué describe mejor un enlace multicéntrico como en el diborano (B₂H₆)?",
    correcta: "Pares electrónicos deslocalizados que unen tres átomos simultáneamente",
    incorrectas: [
      "Dos enlaces iónicos independientes que se alternan",
      "Un par electrónico clásico localizado entre cada B y H"
    ]
  },
  {
    enunciado: "¿Cuál es una tendencia general en energías de cohesión de metales de transición frente a alcalinos?",
    correcta: "Las energías de cohesión son mayores en muchos metales de transición por la participación de orbitales d",
    incorrectas: [
      "Las energías de cohesión son siempre menores por su mayor masa atómica",
      "No hay diferencias sistemáticas entre ambos grupos"
    ]
  },
  {
    enunciado: "¿Qué correlación cualitativa suele observarse entre longitud y energía de enlace para una misma pareja de átomos?",
    correcta: "Enlaces más cortos tienden a ser más fuertes",
    incorrectas: [
      "Enlaces más largos tienden a ser más fuertes",
      "No existe relación entre longitud y fortaleza"
    ]
  },
  {
    enunciado: "¿Cuál es un error común al distinguir polaridad de enlace y polaridad molecular?",
    correcta: "Suponer que tener enlaces polares asegura una molécula polar sin considerar la geometría",
    incorrectas: [
      "Asumir que toda molécula lineal es necesariamente polar",
      "Creer que la electronegatividad no afecta a la polaridad"
    ]
  }
];
