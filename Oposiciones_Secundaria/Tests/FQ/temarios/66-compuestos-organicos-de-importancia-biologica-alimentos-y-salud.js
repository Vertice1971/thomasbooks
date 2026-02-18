// temarios/66-compuestos-organicos-de-importancia-biologica-alimentos-y-salud.js
var PREGUNTAS = [
  {
    enunciado: "¿Por qué el carbono es especialmente apto para formar biomoléculas complejas?",
    correcta: "Porque su tetravalencia permite formar enlaces covalentes estables y cadenas y anillos muy variados",
    incorrectas: [
      "Porque es el elemento más electronegativo de la tabla periódica",
      "Porque solo puede formar enlaces iónicos, que son los más resistentes en agua"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al enlace peptídico en una proteína?",
    correcta: "Es un enlace tipo amida entre el grupo carboxilo de un aminoácido y el amino de otro",
    incorrectas: [
      "Es un enlace iónico entre dos radicales R",
      "Es un enlace fosfodiéster entre pentosas"
    ]
  },
  {
    enunciado: "¿Qué propiedad química explica que un aminoácido pueda actuar como ácido y como base?",
    correcta: "Su carácter anfótero por contener un grupo carboxilo y un grupo amino",
    incorrectas: [
      "Que no tiene grupos funcionales reactivos",
      "Que es siempre apolar y no interacciona con el agua"
    ]
  },
  {
    enunciado: "¿Qué define la estructura primaria de una proteína?",
    correcta: "La secuencia lineal de aminoácidos unidos por enlaces peptídicos",
    incorrectas: [
      "La asociación de varias subunidades proteicas en un complejo",
      "La disposición de hélices α y láminas β estabilizadas solo por lípidos"
    ]
  },
  {
    enunciado: "¿Qué estabiliza principalmente una hélice α y una lámina β?",
    correcta: "Puentes de hidrógeno entre grupos del esqueleto peptídico",
    incorrectas: [
      "Puentes disulfuro entre bases nitrogenadas",
      "Enlaces metálicos entre aminoácidos"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la desnaturalización proteica?",
    correcta: "La pérdida de la conformación tridimensional con disminución o pérdida de función",
    incorrectas: [
      "La ruptura de todos los enlaces peptídicos hasta aminoácidos libres",
      "La conversión de la proteína en un polisacárido de reserva"
    ]
  },
  {
    enunciado: "¿Qué es una enzima desde el punto de vista químico-funcional?",
    correcta: "Un biocatalizador, generalmente proteico, que acelera reacciones sin consumirse",
    incorrectas: [
      "Un lípido de membrana que transporta electrones por difusión simple",
      "Un glúcido estructural que forma microtúbulos"
    ]
  },
  {
    enunciado: "¿Qué significa que un aminoácido es esencial en la dieta humana?",
    correcta: "Que el organismo no lo sintetiza en cantidad suficiente y debe obtenerse en los alimentos",
    incorrectas: [
      "Que se fabrica solo en el hígado y por eso es imprescindible",
      "Que no se incorpora a proteínas y solo sirve como reserva energética"
    ]
  },
  {
    enunciado: "¿Qué se entiende por valor biológico de una proteína alimentaria?",
    correcta: "El grado en que aporta aminoácidos esenciales en proporciones adecuadas para el organismo",
    incorrectas: [
      "La cantidad total de calorías que produce al oxidarse",
      "La capacidad de formar enlaces iónicos en el estómago"
    ]
  },
  {
    enunciado: "¿Qué es un enlace O-glucosídico?",
    correcta: "Un enlace covalente que une monosacáridos mediante un átomo de oxígeno, por condensación",
    incorrectas: [
      "Un enlace metálico que une glucosas en presencia de hierro",
      "Un enlace peptídico entre dos azúcares"
    ]
  },
  {
    enunciado: "¿Cuál es una función principal del glucógeno en animales?",
    correcta: "Reserva energética a corto plazo en hígado y músculo",
    incorrectas: [
      "Estructura rígida de la pared celular vegetal",
      "Transmisión de información genética en el núcleo"
    ]
  },
  {
    enunciado: "¿Qué diferencia explica que la celulosa no sea digerible por humanos?",
    correcta: "Sus enlaces β forman fibras que requieren enzimas específicas que el ser humano no posee",
    incorrectas: [
      "Porque está formada por aminoácidos y no por glucosa",
      "Porque contiene enlaces fosfodiéster en lugar de enlaces glucosídicos"
    ]
  },
  {
    enunciado: "¿Qué es la fibra dietética en términos generales?",
    correcta: "Una fracción de carbohidratos no digeribles que modula el tránsito y la respuesta glucémica",
    incorrectas: [
      "Un conjunto de proteínas que se absorben sin digestión",
      "Un tipo de vitamina liposoluble presente solo en carnes"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el índice glucémico?",
    correcta: "La rapidez con la que un alimento eleva la glucosa en sangre respecto a un patrón",
    incorrectas: [
      "La cantidad de lípidos saturados por 100 g de alimento",
      "El porcentaje de agua en un alimento"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a muchos lípidos en sistemas biológicos?",
    correcta: "Son hidrófobos o anfipáticos y se asocian formando fases como bicapas",
    incorrectas: [
      "Son siempre iónicos y por eso atraviesan membranas sin ayuda",
      "Son polímeros de nucleótidos con bases nitrogenadas"
    ]
  },
  {
    enunciado: "¿Qué son los lípidos saponificables?",
    correcta: "Los que contienen enlaces éster y pueden hidrolizarse para dar jabones",
    incorrectas: [
      "Los que contienen enlaces fosfodiéster y forman ADN",
      "Los que no se pueden hidrolizar porque carecen de enlaces covalentes"
    ]
  },
  {
    enunciado: "¿Qué diferencia estructural típica hay entre grasas y aceites?",
    correcta: "Las grasas suelen tener más ácidos grasos saturados y mayor punto de fusión que los aceites",
    incorrectas: [
      "Los aceites están formados por monosacáridos y por eso son líquidos",
      "Las grasas son siempre esteroides, y los aceites siempre vitaminas"
    ]
  },
  {
    enunciado: "¿Qué significa que un ácido graso es insaturado?",
    correcta: "Que posee uno o más dobles enlaces en su cadena hidrocarbonada",
    incorrectas: [
      "Que no tiene átomos de carbono en su estructura",
      "Que contiene siempre un grupo amino y un grupo carboxilo"
    ]
  },
  {
    enunciado: "¿Qué se considera un ácido graso esencial?",
    correcta: "Un ácido graso que el organismo no sintetiza y necesita para membranas y señalización",
    incorrectas: [
      "Un ácido graso que solo se encuentra en el ADN",
      "Un ácido graso que siempre es trans y por eso es imprescindible"
    ]
  },
  {
    enunciado: "¿Cuál es una función clave de los fosfolípidos?",
    correcta: "Formar bicapas que constituyen la estructura básica de las membranas celulares",
    incorrectas: [
      "Almacenar información hereditaria en cromosomas",
      "Actuar como enzimas que catalizan la replicación"
    ]
  },
  {
    enunciado: "¿Qué es un nucleótido?",
    correcta: "La unidad formada por base nitrogenada, pentosa y grupo fosfato",
    incorrectas: [
      "Un aminoácido con dos grupos carboxilo",
      "Un lípido con tres ácidos grasos y glicerol"
    ]
  },
  {
    enunciado: "¿Qué tipo de enlace une nucleótidos en una cadena de ADN o ARN?",
    correcta: "Un enlace fosfodiéster entre el fosfato y las pentosas",
    incorrectas: [
      "Un enlace peptídico entre bases nitrogenadas",
      "Un enlace glucosídico entre ribosas"
    ]
  },
  {
    enunciado: "¿Qué significa complementariedad de bases en el ADN?",
    correcta: "Que A se aparea con T y G con C por puentes de hidrógeno",
    incorrectas: [
      "Que A siempre se aparea con G para estabilizar la hélice",
      "Que las bases se unen por enlaces iónicos con el fosfato"
    ]
  },
  {
    enunciado: "¿Cuál es una diferencia general entre ADN y ARN?",
    correcta: "El ADN suele ser bicatenario y el ARN suele ser monocatenario y funcionalmente diverso",
    incorrectas: [
      "El ARN contiene desoxirribosa y el ADN ribosa",
      "El ADN usa uracilo y el ARN usa timina"
    ]
  },
  {
    enunciado: "¿Qué papel central tiene el ARN mensajero (ARNm)?",
    correcta: "Transportar la información del ADN para dirigir la síntesis de proteínas",
    incorrectas: [
      "Formar la bicapa lipídica de la membrana plasmática",
      "Almacenar glucosa en forma de polímero"
    ]
  },
  {
    enunciado: "¿Qué es una mutación en términos generales?",
    correcta: "Un cambio en la secuencia de nucleótidos que puede alterar la expresión o función genética",
    incorrectas: [
      "Una variación del número de enlaces peptídicos en una proteína sin cambiar aminoácidos",
      "La conversión espontánea de lípidos en glúcidos en el citoplasma"
    ]
  },
  {
    enunciado: "¿Qué define a una vitamina?",
    correcta: "Un compuesto orgánico necesario en pequeñas cantidades para funciones metabólicas",
    incorrectas: [
      "Un macronutriente que aporta la mayor parte de la energía diaria",
      "Una sal mineral insoluble que forma tejidos calcificados"
    ]
  },
  {
    enunciado: "¿Qué diferencia general hay entre vitaminas hidrosolubles y liposolubles?",
    correcta: "Las hidrosolubles se disuelven en agua y se almacenan menos; las liposolubles se almacenan más",
    incorrectas: [
      "Las hidrosolubles solo se encuentran en aceites y las liposolubles solo en frutas",
      "Las liposolubles no pueden causar toxicidad por exceso"
    ]
  },
  {
    enunciado: "¿Cuál es una función típica de vitaminas del grupo B?",
    correcta: "Actuar como coenzimas en rutas del metabolismo energético y de aminoácidos",
    incorrectas: [
      "Servir como principal material estructural de huesos",
      "Formar enlaces glucosídicos para sintetizar almidón"
    ]
  },
  {
    enunciado: "¿Qué patología se asocia clásicamente a déficit de vitamina C?",
    correcta: "Escorbuto por alteración en síntesis de colágeno",
    incorrectas: [
      "Raquitismo por falta de mineralización ósea",
      "Anemia perniciosa por falta de B12"
    ]
  },
  {
    enunciado: "¿Por qué las hipervitaminosis son más probables con vitaminas liposolubles?",
    correcta: "Porque se almacenan en tejidos grasos y no se eliminan tan fácilmente",
    incorrectas: [
      "Porque se destruyen siempre al cocinar y hay que tomar muchas",
      "Porque actúan como macronutrientes y se consumen en grandes cantidades"
    ]
  },
  {
    enunciado: "¿Qué componentes químicos suelen considerarse macronutrientes?",
    correcta: "Glúcidos, lípidos y proteínas, por su aporte energético y estructural",
    incorrectas: [
      "Vitaminas y oligoelementos, por su alta contribución calórica",
      "Sales minerales y agua, por su elevado contenido en carbono"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre densidad energética y densidad nutritiva?",
    correcta: "La primera es calorías por cantidad de alimento y la segunda es riqueza en nutrientes esenciales",
    incorrectas: [
      "La densidad energética mide solo vitaminas y la nutritiva solo grasas",
      "Ambas son lo mismo y no tienen utilidad en nutrición"
    ]
  },
  {
    enunciado: "¿Qué es el metabolismo basal?",
    correcta: "El gasto energético mínimo para mantener funciones vitales en reposo",
    incorrectas: [
      "La energía que se obtiene solo al hacer ejercicio intenso",
      "El almacenamiento de glucosa en forma de celulosa"
    ]
  },
  {
    enunciado: "¿Qué caracteriza una dieta equilibrada desde el punto de vista nutricional?",
    correcta: "Aporte suficiente de energía y nutrientes con variedad y proporciones adecuadas",
    incorrectas: [
      "Eliminación total de grasas y carbohidratos para evitar enfermedades",
      "Consumo exclusivo de alimentos de origen animal por su valor energético"
    ]
  },
  {
    enunciado: "¿Qué es la malnutrición por defecto?",
    correcta: "Un aporte insuficiente de energía y/o nutrientes esenciales con efectos sobre función y salud",
    incorrectas: [
      "Un consumo excesivo de calorías que siempre produce hipertensión",
      "Una enfermedad infecciosa causada por bacterias en alimentos"
    ]
  },
  {
    enunciado: "¿Qué es el síndrome metabólico?",
    correcta: "Un conjunto de alteraciones como obesidad central, dislipemia e insulinorresistencia que elevan riesgo cardiovascular",
    incorrectas: [
      "Un déficit exclusivo de vitamina D en la infancia",
      "Una intoxicación aguda por aditivos alimentarios legales"
    ]
  },
  {
    enunciado: "¿Qué es la ingesta diaria admisible (IDA) para un aditivo?",
    correcta: "La cantidad que puede consumirse a diario durante la vida sin riesgo apreciable",
    incorrectas: [
      "La dosis mínima necesaria para que el aditivo funcione en el alimento",
      "La cantidad que provoca efectos tóxicos en cualquier persona"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de contaminante químico relevante en alimentos?",
    correcta: "Metales pesados como mercurio o plomo, por su toxicidad acumulativa",
    incorrectas: [
      "Oxígeno molecular, por ser reactivo en el aire",
      "Cloruro sódico, por ser siempre venenoso en cualquier dosis"
    ]
  },
  {
    enunciado: "¿Qué aporta el análisis del etiquetado nutricional a la educación para la salud?",
    correcta: "Permite interpretar cantidades de energía y nutrientes y tomar decisiones informadas",
    incorrectas: [
      "Garantiza que un alimento no contiene ningún contaminante biológico",
      "Sustituye la necesidad de una dieta variada porque todo está calculado"
    ]
  }
];
