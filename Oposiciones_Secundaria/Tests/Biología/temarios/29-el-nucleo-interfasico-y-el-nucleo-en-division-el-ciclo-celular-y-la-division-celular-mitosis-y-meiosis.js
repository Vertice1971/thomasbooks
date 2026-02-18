// temarios/29-el-nucleo-interfasico-y-el-nucleo-en-division-el-ciclo-celular-y-la-division-celular-mitosis-y-meiosis.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estructura delimita el núcleo interfásico y regula el intercambio nucleo-citoplasmático?",
    correcta: "La envoltura nuclear con complejos de poro",
    incorrectas: [
      "La membrana plasmática con acuaporinas",
      "El retículo endoplásmico liso sin poros"
    ]
  },
  {
    enunciado: "¿Cómo se denomina la red proteica interna que tapiza la cara interna de la envoltura nuclear y da soporte mecánico al núcleo?",
    correcta: "Lámina nuclear",
    incorrectas: [
      "Corteza actínica",
      "Matriz mitocondrial"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia funcional típica entre eucromatina y heterocromatina en interfase?",
    correcta: "La eucromatina es más accesible y transcripcionalmente activa",
    incorrectas: [
      "La heterocromatina es la única región donde se replica el ADN",
      "Ambas presentan idéntica accesibilidad a los factores de transcripción"
    ]
  },
  {
    enunciado: "¿Qué ocurre con la envoltura nuclear durante la mitosis en la mayoría de células animales?",
    correcta: "Se desorganiza en prometafase y se reconstituye en telofase",
    incorrectas: [
      "Se mantiene intacta durante todas las fases",
      "Se transforma en retículo endoplásmico liso permanente"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal del nucleolo en interfase?",
    correcta: "Ensamblaje de subunidades ribosómicas a partir de rRNA y proteínas",
    incorrectas: [
      "Degradación de proteínas ubiquitinadas",
      "Síntesis de ácidos grasos de membrana"
    ]
  },
  {
    enunciado: "¿Qué complejos proteicos median el transporte selectivo de macromoléculas a través de la envoltura nuclear?",
    correcta: "Complejos de poro nuclear (NPC) con carioferinas/importinas-exportinas",
    incorrectas: [
      "Canales de sodio dependientes de voltaje",
      "Bombas de calcio SERCA"
    ]
  },
  {
    enunciado: "¿En qué fase del ciclo celular se replica el ADN?",
    correcta: "En la fase S de la interfase",
    incorrectas: [
      "En G1 inmediatamente antes de la mitosis",
      "En anafase para completar la separación cromosómica"
    ]
  },
  {
    enunciado: "¿Cuál es la secuencia correcta de fases de la interfase?",
    correcta: "G1 → S → G2",
    incorrectas: [
      "S → G2 → G0",
      "G2 → G1 → S"
    ]
  },
  {
    enunciado: "¿Qué control molecular permite la progresión ordenada del ciclo celular?",
    correcta: "La activación regulada de complejos ciclinas–CDK y puntos de control",
    incorrectas: [
      "Un reloj osmótico independiente de proteínas",
      "La polimerización espontánea de microfilamentos"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el punto de restricción G1/S?",
    correcta: "Decisión regulada por señales y daño en ADN para iniciar replicación",
    incorrectas: [
      "Control exclusivo de ensamblaje del huso mitótico",
      "Verifica el cierre de los poros nucleares en mitosis"
    ]
  },
  {
    enunciado: "¿Qué evento define la prometafase mitótica?",
    correcta: "Ruptura de la envoltura nuclear y unión de microtúbulos al cinetocoro",
    incorrectas: [
      "Máxima condensación cromosómica y citocinesis",
      "Separación de cromátidas hermanas"
    ]
  },
  {
    enunciado: "¿Cuál es la función del complejo cohesina durante la mitosis?",
    correcta: "Mantener unidas las cromátidas hermanas hasta la anafase",
    incorrectas: [
      "Anclar los cromosomas a la envoltura nuclear",
      "Catalizar el acortamiento de microtúbulos astrales"
    ]
  },
  {
    enunciado: "¿Qué activa la transición metafase–anafase en mitosis?",
    correcta: "El complejo promotor de la anafase (APC/C) al degradar securina y ciclinas",
    incorrectas: [
      "La polimerasa delta al completar la replicación",
      "La proteína p53 al fosforilar la actina"
    ]
  },
  {
    enunciado: "¿Qué comprueba el punto de control del ensamblaje del huso (SAC)?",
    correcta: "Que todos los cinetocoros estén correctamente unidos a microtúbulos del huso",
    incorrectas: [
      "Que el ADN se haya condensado durante G1",
      "Que los poros nucleares estén cerrados en telofase"
    ]
  },
  {
    enunciado: "¿Cuál es el resultado celular de una mitosis normal con citocinesis completa en células diploides?",
    correcta: "Dos células hijas diploides genéticamente idénticas",
    incorrectas: [
      "Dos células haploides con recombinación",
      "Cuatro células haploides distintas"
    ]
  },
  {
    enunciado: "¿Qué estructura organiza los microtúbulos del huso en células animales?",
    correcta: "El centrosoma con pares de centriolos",
    incorrectas: [
      "El nucleolo",
      "Las mitocondrias"
    ]
  },
  {
    enunciado: "¿Cómo ocurre típicamente la citocinesis en células animales?",
    correcta: "Mediante anillo contráctil de actina–miosina que forma un surco de segmentación",
    incorrectas: [
      "Por formación de placa celular y fragmoplasto",
      "Por exocitosis masiva de ribosomas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la citocinesis en células vegetales superiores?",
    correcta: "Formación de una placa celular a partir del fragmoplasto",
    incorrectas: [
      "Constricción por anillo de actina–miosina",
      "Separación por lisis osmótica controlada"
    ]
  },
  {
    enunciado: "¿Qué define globalmente a la meiosis?",
    correcta: "Dos divisiones sucesivas que reducen la ploidía y generan variabilidad genética",
    incorrectas: [
      "Una división que duplica la ploidía",
      "Una división conservativa sin recombinación"
    ]
  },
  {
    enunciado: "¿En qué subfase de la profase I se produce el entrecruzamiento visible como quiasmas?",
    correcta: "Paquiteno–diploteno",
    incorrectas: [
      "Leptoteno exclusivamente",
      "Diacinesis en células somáticas"
    ]
  },
  {
    enunciado: "¿Qué estructuras median la sinapsis de cromosomas homólogos en profase I?",
    correcta: "El complejo sinaptonémico",
    incorrectas: [
      "El fragmoplasto",
      "El cinetocoro de cromátidas hermanas"
    ]
  },
  {
    enunciado: "¿Qué sucede en la anafase I de la meiosis?",
    correcta: "Se separan los cromosomas homólogos hacia polos opuestos",
    incorrectas: [
      "Se separan las cromátidas hermanas",
      "Se reconstituye la envoltura nuclear definitiva"
    ]
  },
  {
    enunciado: "¿Cuál es el resultado final de la meiosis a partir de una célula diploide 2n?",
    correcta: "Cuatro células haploides n distintas entre sí",
    incorrectas: [
      "Dos células diploides idénticas",
      "Ocho células haploides iguales"
    ]
  },
  {
    enunciado: "¿Qué proceso contribuye a la variabilidad genética además del entrecruzamiento?",
    correcta: "La segregación independiente de cromosomas homólogos",
    incorrectas: [
      "La degradación de centrómeros",
      "La síntesis de rRNA en el nucleolo"
    ]
  },
  {
    enunciado: "¿Qué evento meiótico específico mantiene cohesionadas las cromátidas hermanas en meiosis I?",
    correcta: "Protección centromérica de cohesina por shugoshina en meiosis I",
    incorrectas: [
      "Degradación total de cohesina al inicio de profase I",
      "Fosforilación de actina centromérica"
    ]
  },
  {
    enunciado: "¿Cuál es una causa frecuente de aneuploidía en gametogénesis?",
    correcta: "La no disyunción de homólogos o cromátidas durante meiosis",
    incorrectas: [
      "La sobreexpresión de rRNA en nucleolo",
      "La persistencia de poros nucleares abiertos en telofase"
    ]
  },
  {
    enunciado: "¿Qué diferencia clave distingue mitosis de meiosis en términos de recombinación genética?",
    correcta: "La meiosis incluye recombinación entre homólogos; la mitosis no",
    incorrectas: [
      "Ambas presentan recombinación obligatoria",
      "La mitosis presenta recombinación solo en anafase"
    ]
  },
  {
    enunciado: "¿Qué estructura del cromosoma sirve de punto de unión de los microtúbulos del huso?",
    correcta: "El cinetocoro sobre el centrómero",
    incorrectas: [
      "El telómero",
      "El organizador nucleolar (NOR)"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el estado G0?",
    correcta: "Salida reversible o permanente del ciclo con actividad metabólica sin división",
    incorrectas: [
      "Una fase de replicación acelerada del ADN",
      "Una etapa obligatoria entre G2 y M"
    ]
  },
  {
    enunciado: "¿Qué proteínas tutelan la respuesta a daño en ADN y pueden detener el ciclo en G1?",
    correcta: "p53 y la vía RB–E2F",
    incorrectas: [
      "Tubulina γ y dineína",
      "GAPs de Ras que activan CDK2"
    ]
  },
  {
    enunciado: "¿Qué sucede con los telómeros en células somáticas sin telomerasa activa tras múltiples divisiones?",
    correcta: "Se acortan progresivamente favoreciendo la senescencia replicativa",
    incorrectas: [
      "Se alargan indefinidamente por recombinación mitocondrial",
      "Permanecen inalterados por acción del nucleolo"
    ]
  },
  {
    enunciado: "¿Cuál es la unidad básica de empaquetamiento de la cromatina?",
    correcta: "El nucleosoma con octámero de histonas y 146 pb de ADN",
    incorrectas: [
      "El cinetocoro con microtúbulos",
      "El poro nuclear con FG-nucleoporinas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la metafase mitótica al microscopio de luz?",
    correcta: "Cromosomas maximamente condensados alineados en la placa ecuatorial",
    incorrectas: [
      "Reaparición del nucleolo y descondensación",
      "Separación completa de cromátidas hermanas"
    ]
  },
  {
    enunciado: "En Meiosis II, la separación que ocurre es la de:",
    correcta: "Cromátidas hermanas en anafase II",
    incorrectas: [
      "Cromosomas homólogos en anafase II",
      "Telómeros en profase II"
    ]
  },
  {
    enunciado: "¿Qué diferencia estructural del huso es típica en plantas frente a animales?",
    correcta: "Ausencia de centriolos definidos; el huso se organiza sin centrosomas clásicos",
    incorrectas: [
      "Presencia de cilios basales en polos del huso",
      "Falta completa de microtúbulos interpolar"
    ]
  },
  {
    enunciado: "¿Qué combinación es correcta respecto a tipos de microtúbulos del huso?",
    correcta: "Astrales, cinetocóricos e interpolar",
    incorrectas: [
      "Intermembrana, nucleares y plasmáticos",
      "Cilios, flagelos y poros"
    ]
  },
  {
    enunciado: "¿Qué evento restaura la diploidía tras la meiosis en organismos con reproducción sexual?",
    correcta: "La fecundación al fusionar dos gametos haploides",
    incorrectas: [
      "La recombinación intramitótica en G2",
      "La citocinesis en telofase I"
    ]
  },
  {
    enunciado: "En la profase I, ¿qué subfase marca el inicio visible de la sinapsis entre homólogos?",
    correcta: "Cigoteno",
    incorrectas: [
      "Leptoteno tardío (sin sinapsis)",
      "Diacinesis (desinapsis completa)"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes afirmaciones sobre la meiosis en la ovogénesis humana es correcta?",
    correcta: "Puede permanecer detenida durante años en diploteno (dictioteno) antes de completarse",
    incorrectas: [
      "Se completa de forma continua desde la pubertad sin pausas",
      "No presenta entrecruzamiento en profase I"
    ]
  },
  {
    enunciado: "¿Qué diferencia funcional esencial resume mitosis frente a meiosis?",
    correcta: "Mitosis conserva el número cromosómico para crecimiento y reparación; meiosis lo reduce y genera diversidad para reproducción sexual",
    incorrectas: [
      "Ambas reducen la ploidía con idénticos resultados",
      "La mitosis crea diversidad genética por entrecruzamiento homólogo"
    ]
  }
];
