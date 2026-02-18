// temarios/59-quimica-del-carbono-estructura-enlaces-nomenclatura-isomeria-y-actividad-optica.js
var PREGUNTAS = [
  {
    enunciado: "La tetravalencia del carbono implica que normalmente forma:",
    correcta: "Cuatro enlaces covalentes",
    incorrectas: ["Tres enlaces iónicos", "Dos enlaces metálicos"]
  },
  {
    enunciado: "La geometría y el ángulo ideal de un centro sp3 son:",
    correcta: "Tetraédrica, ~109,5°",
    incorrectas: ["Trigonal plana, ~120°", "Lineal, 180°"]
  },
  {
    enunciado: "Un carbono sp2 posee enlaces:",
    correcta: "Tres enlaces σ y un sistema π",
    incorrectas: ["Cuatro enlaces σ", "Dos σ y dos π"]
  },
  {
    enunciado: "Un triple enlace C≡C está formado por:",
    correcta: "Un enlace σ y dos enlaces π",
    incorrectas: ["Dos σ y un π", "Tres σ"]
  },
  {
    enunciado: "La hibridación del carbono en el etino (acetileno) es:",
    correcta: "sp",
    incorrectas: ["sp2", "sp3"]
  },
  {
    enunciado: "La resonancia (mesomería) describe:",
    correcta: "La deslocalización electrónica entre estructuras límite",
    incorrectas: ["La vibración de enlaces por temperatura", "El cambio de hibridación con la presión"]
  },
  {
    enunciado: "El efecto inductivo −I de un sustituyente electronegativo tiende a:",
    correcta: "Retirar densidad electrónica por el esqueleto σ",
    incorrectas: ["Donar densidad por resonancia", "Aumentar el ángulo de enlace a 180°"]
  },
  {
    enunciado: "La regla de Hückel para aromaticidad establece que un sistema plano cíclico es aromático si:",
    correcta: "Posee 4n+2 electrones π (n entero)",
    incorrectas: ["Posee 4n electrones π", "No contiene electrones π"]
  },
  {
    enunciado: "En conformaciones del butano, la más estable suele ser:",
    correcta: "Alternada anti",
    incorrectas: ["Eclipsada total", "Gauche eclipsada"]
  },
  {
    enunciado: "En ciclohexano, los sustituyentes voluminosos prefieren la posición:",
    correcta: "Ecuatorial",
    incorrectas: ["Axial", "Puente bicíclico"]
  },
  {
    enunciado: "La representación adecuada para visualizar tensiones torsionales en alcanos es:",
    correcta: "Proyección de Newman",
    incorrectas: ["Proyección de Fischer (para centros quirales)", "Proyección de Haworth (para azúcares)"]
  },
  {
    enunciado: "En nomenclatura IUPAC, la cadena principal se elige por:",
    correcta: "El mayor número de carbonos que contiene la función principal y el mayor número de insaturaciones",
    incorrectas: ["La cadena más recta sin ramificaciones", "La que dé la numeración más alta a los sustituyentes"]
  },
  {
    enunciado: "El sufijo para un aldehído en IUPAC es:",
    correcta: "-al",
    incorrectas: ["-ona", "-ol"]
  },
  {
    enunciado: "El sufijo para un ácido carboxílico es:",
    correcta: "-oico",
    incorrectas: ["-amina", "-nitrilo"]
  },
  {
    enunciado: "Para alquenos con dos sustituyentes en cada carbono del doble enlace se usa la notación:",
    correcta: "E/Z (reglas CIP)",
    incorrectas: ["cis/trans siempre", "R/S"]
  },
  {
    enunciado: "La prioridad CIP para asignar E/Z o R/S se basa en:",
    correcta: "Número atómico del primer punto de diferencia",
    incorrectas: ["Masa molar total de la molécula", "Longitud del enlace"]
  },
  {
    enunciado: "La isomería de cadena es un tipo de:",
    correcta: "Isomería estructural (constitucional)",
    incorrectas: ["Isomería geométrica", "Isomería óptica"]
  },
  {
    enunciado: "Dos compuestos con la misma fórmula molecular pero diferente grupo funcional son:",
    correcta: "Isómeros de función",
    incorrectas: ["Enantiómeros", "Conformeros idénticos"]
  },
  {
    enunciado: "La isomería cis/trans en cicloalcanos se refiere a:",
    correcta: "La orientación relativa (mismo/diferente lado del plano del anillo)",
    incorrectas: ["La rotación libre de enlaces simples", "El número de carbonos de la cadena"]
  },
  {
    enunciado: "Un centro estereogénico típico en orgánica es:",
    correcta: "Un carbono sp3 con cuatro sustituyentes diferentes",
    incorrectas: ["Un carbono sp2 en un alqueno monosustituido", "Un carbono sp enlazado a dos hidrógenos iguales"]
  },
  {
    enunciado: "Los enantiómeros son:",
    correcta: "Imágenes especulares no superponibles",
    incorrectas: ["Isómeros de cadena", "Diasteréómeros superponibles"]
  },
  {
    enunciado: "Los diastereómeros son:",
    correcta: "Estereoisómeros que no son imágenes especulares",
    incorrectas: ["Isómeros con igual configuración en todos los centros", "Conformeros en equilibrio rápido"]
  },
  {
    enunciado: "Una mezcla racémica contiene:",
    correcta: "50 % de cada enantiómero (rotación neta 0)",
    incorrectas: ["Solo el enantiómero dextrógiro", "Solo el enantiómero levógiro"]
  },
  {
    enunciado: "La configuración R/S de un centro quiral se asigna usando:",
    correcta: "Reglas CIP y orientando el grupo de menor prioridad al fondo",
    incorrectas: ["El signo de la rotación óptica (+/−)", "El orden alfabético de los sustituyentes"]
  },
  {
    enunciado: "El signo de la rotación óptica (+/−) indica:",
    correcta: "El sentido de giro del plano de luz polarizada",
    incorrectas: ["La configuración R/S", "La prioridad CIP del sustituyente mayor"]
  },
  {
    enunciado: "Una molécula meso es:",
    correcta: "Aquiliral globalmente por tener plano de simetría aunque posea centros quirales",
    incorrectas: ["Una mezcla racémica", "Un aleno siempre quiral"]
  },
  {
    enunciado: "El número máximo de estereoisómeros para n centros quirales independientes (sin simetría) es:",
    correcta: "2^n",
    incorrectas: ["n!", "2n"]
  },
  {
    enunciado: "Para el ácido 2-bromobutano, el carbono C2 es:",
    correcta: "Centro quiral (cuatro sustituyentes distintos)",
    incorrectas: ["sp2 y no quiral", "sp3 pero con dos sustituyentes idénticos"]
  },
  {
    enunciado: "La proyección de Fischer se usa comúnmente para:",
    correcta: "Representar centros quirales (p. ej., azúcares/aa) en 2D",
    incorrectas: ["Visualizar torsiones (Newman)", "Proyectar anillos en conformación silla"]
  },
  {
    enunciado: "En la notación E/Z, E significa:",
    correcta: "Sustituyentes de mayor prioridad en lados opuestos",
    incorrectas: ["Mismo lado (juntos)", "Que el compuesto es ópticamente activo"]
  },
  {
    enunciado: "Un par de compuestos con igual conectividad pero diferente orientación espacial por la presencia de un doble enlace son:",
    correcta: "Estereoisómeros geométricos",
    incorrectas: ["Isómeros de función", "Constitucionales de cadena"]
  },
  {
    enunciado: "La deslocalización por resonancia suele:",
    correcta: "Estabilizar cationes alílicos y aromáticos",
    incorrectas: ["Desestabilizar todos los aniones", "Aumentar siempre la basicidad de aminas"]
  },
  {
    enunciado: "El orden de estabilidad de carbocationes simples es aproximadamente:",
    correcta: "Terciario > secundario > primario",
    incorrectas: ["Primario > terciario > secundario", "Secundario > primario > terciario"]
  },
  {
    enunciado: "La regla para contar electrones π en benceno (C6H6) da:",
    correcta: "6 e− π (aromático)",
    incorrectas: ["4 e− π (antiaromático)", "8 e− π (no se aplica)"]
  },
  {
    enunciado: "Al nombrar un alqueno, la numeración de la cadena debe:",
    correcta: "Dar el locante más bajo al doble enlace",
    incorrectas: ["Dar el locante más bajo al sustituyente más voluminoso", "Empezar siempre por el extremo izquierdo"]
  },
  {
    enunciado: "El sufijo para un alcohol es:",
    correcta: "-ol",
    incorrectas: ["-al", "-ona"]
  },
  {
    enunciado: "Los ésteres se nombran como:",
    correcta: "Alquilo (del alcohol) + oato (del ácido)",
    incorrectas: ["Alcano + -ol", "Alqueno + -al"]
  },
  {
    enunciado: "En un sistema con dos centros quirales sin elementos de simetría, el total de estereoisómeros es:",
    correcta: "4 (RR, SS, RS, SR)",
    incorrectas: ["2 (R y S)", "3 (incluye un meso siempre)"]
  },
  {
    enunciado: "La rotación específica [α] depende de:",
    correcta: "Longitud de celda, concentración, temperatura y λ (línea D)",
    incorrectas: ["Solo de la masa molar", "Únicamente del disolvente"]
  },
  {
    enunciado: "Un aleno puede ser quiral cuando:",
    correcta: "Presenta sustituyentes distintos en ambos extremos (ejes no coplanares)",
    incorrectas: ["Siempre, por tener dobles enlaces cumulados", "Nunca, por ser lineal"]
  },
  {
    enunciado: "Entre conformeros de butano, la diferencia principal entre anti y gauche es:",
    correcta: "El ángulo diedro C–C–C–C (180° vs ~60°)",
    incorrectas: ["El número de carbonos", "La hibridación del carbono terminal"]
  }
];
