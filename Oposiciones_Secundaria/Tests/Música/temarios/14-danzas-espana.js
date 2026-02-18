// 14-danzas-espana.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la danza folclórica más extendida geográficamente por toda España, con variantes regionales como la manchega, la aragonesa o la murciana?",
    correcta: "La Jota.",
    incorrectas: [
      "La Sardana.",
      "El Zortziko."
    ]
  },
  {
    enunciado: "El 'Zortziko' es una danza típica del País Vasco que se caracteriza musicalmente por su compás de:",
    correcta: "5/8 (amalgama).",
    incorrectas: [
      "3/4 (ternario).",
      "2/4 (binario)."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe la agrupación instrumental que acompaña a la Sardana en Cataluña?",
    correcta: "Cobla.",
    incorrectas: [
      "Rondalla.",
      "Cuadrilla."
    ]
  },
  {
    enunciado: "Las 'Seguidillas' se distinguen por su ritmo rápido y su estructura poética. ¿Cuál es su compás característico?",
    correcta: "3/4 o 3/8 (ternario).",
    incorrectas: [
      "4/4 (cuaternario).",
      "6/8 (binario compuesto)."
    ]
  },
  {
    enunciado: "¿Qué danza gallega, de ritmo muy vivo y binario compuesto, se acompaña tradicionalmente con gaita y percusión?",
    correcta: "La Muiñeira.",
    incorrectas: [
      "El Fandango.",
      "La Malagueña."
    ]
  },
  {
    enunciado: "En la comunidad de Madrid, el baile tradicional por excelencia, ligado a las festividades de San Isidro, es:",
    correcta: "El Chotis.",
    incorrectas: [
      "El Bolero.",
      "La Isa."
    ]
  },
  {
    enunciado: "La 'Isa' es una de las danzas más alegres y dinámicas de:",
    correcta: "Las Islas Canarias.",
    incorrectas: [
      "Asturias.",
      "Extremadura."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión, formado por dos piezas de madera cóncavas, es casi omnipresente en la danza tradicional española?",
    correcta: "Las castañuelas (o palillos).",
    incorrectas: [
      "El almirez.",
      "La pandereta."
    ]
  },
  {
    enunciado: "El 'Fandango' es una danza muy antigua que destaca por:",
    correcta: "Su carácter de cortejo, compás ternario y la alternancia entre coplas cantadas y variaciones instrumentales.",
    incorrectas: [
      "Bailarse en silencio absoluto para resaltar el zapateado.",
      "Su origen exclusivo en las cortes reales del siglo XX."
    ]
  },
  {
    enunciado: "En la zona de Castilla y León, es muy común la 'Danza de Rueda', que se define por:",
    correcta: "Bailarse en círculo, girando normalmente en sentido contrario a las agujas del reloj.",
    incorrectas: [
      "La obligación de utilizar patines de madera durante la ejecución.",
      "Ser una danza de guerreros que utilizan lanzas de metal."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Aurresku' vasco?",
    correcta: "Es una danza de honor, solemne y elegante, interpretada por un bailarín (dantzari) frente a una autoridad o persona homenajeada.",
    incorrectas: [
      "Es una danza circular multitudinaria que dura varias horas.",
      "Se baila exclusivamente durante la recogida de la uva en La Rioja."
    ]
  },
  {
    enunciado: "La 'Sardana' se baila en grupos formando un círculo. ¿Cuál es la disposición de las manos de los participantes?",
    correcta: "Manos enlazadas, manteniéndolas bajas en los 'pasos cortos' y altas en los 'pasos largos'.",
    incorrectas: [
      "Manos en la cintura de forma individual.",
      "Sujetando pañuelos de colores que no pueden tocarse entre sí."
    ]
  },
  {
    enunciado: "El 'Baile de Bastones' (Ball de Bastons), muy presente en Cataluña, Aragón y Valencia, es una danza:",
    correcta: "Ritual de tipo guerrero o agrario donde los danzantes chocan palos de madera entre sí.",
    incorrectas: [
      "Lenta y romántica propia de las bodas de la alta nobleza.",
      "Realizada por ancianos para demostrar la fuerza de sus brazos."
    ]
  },
  {
    enunciado: "En el folclore de Asturias y Cantabria, el 'Pericote' destaca por:",
    correcta: "Ser una danza de origen muy antiguo donde un hombre baila con dos mujeres (tríos).",
    incorrectas: [
      "El uso masivo de sintetizadores para acompañar a la gaita.",
      "Bailarse dentro del agua de los ríos durante el verano."
    ]
  },
  {
    enunciado: "La 'Sevillana' es la danza más popular del folclore andaluz. ¿Cuántas partes o 'coplas' componen habitualmente una sevillana completa?",
    correcta: "Cuatro.",
    incorrectas: [
      "Dos.",
      "Ocho."
    ]
  },
  {
    enunciado: "¿Qué es una 'Rondalla'?",
    correcta: "La agrupación de instrumentos de cuerda pulsada (guitarras, bandurrias, laúdes) que acompaña a jotas y otras danzas.",
    incorrectas: [
      "Un paso de baile que consiste en dar vueltas sobre una sola pierna.",
      "La falda tradicional que visten las bailarinas de muiñeira."
    ]
  },
  {
    enunciado: "El 'Vira' es una danza folclórica de ritmo rápido y saltado muy característica de:",
    correcta: "Galicia y el norte de Portugal.",
    incorrectas: [
      "Murcia y Almería.",
      "Madrid y Guadalajara."
    ]
  },
  {
    enunciado: "¿Qué danza de la zona de Valencia y Baleares es similar a la jota pero con un carácter más pausado y melódico?",
    correcta: "El Parado (o Bolero balear).",
    incorrectas: [
      "La Bachata.",
      "El Charleston."
    ]
  },
  {
    enunciado: "Las 'Danzas de Cintas', presentes en toda la península, simbolizan habitualmente:",
    correcta: "La llegada de la primavera y la fertilidad de la tierra (árbol de mayo).",
    incorrectas: [
      "La tristeza por el final de las vacaciones de invierno.",
      "El castigo a los prisioneros de las guerras carlistas."
    ]
  },
  {
    enunciado: "¿Cómo se llama el instrumento de viento de tres agujeros que, junto al tamboril, acompaña muchas danzas en Castilla, Extremadura y León?",
    correcta: "Flauta maragata (o gaita charra).",
    incorrectas: [
      "Clarinete bajo.",
      "Trompa de caza."
    ]
  },
  {
    enunciado: "La 'Mateixa' es una danza tradicional muy querida en:",
    correcta: "Mallorca.",
    incorrectas: [
      "País Vasco.",
      "Aragón."
    ]
  },
  {
    enunciado: "En la jota, el momento en que los músicos dejan de tocar y los bailarines se quedan quietos se denomina:",
    correcta: "Bien parado.",
    incorrectas: [
      "Corte de manga.",
      "Final feliz."
    ]
  },
  {
    enunciado: "El 'Corri-corri' es una danza ritual de Cabrales (Asturias) que se distingue por:",
    correcta: "Un solo hombre que baila frente a un grupo de mujeres que portan ramas de laurel.",
    incorrectas: [
      "Bailarse corriendo a máxima velocidad alrededor de un fuego.",
      "Ser la única danza española que se acompaña con piano de cola."
    ]
  },
  {
    enunciado: "La 'Parranda' es la danza más representativa de:",
    correcta: "La Región de Murcia.",
    incorrectas: [
      "Cantabria.",
      "Navarra."
    ]
  },
  {
    enunciado: "Musicalmente, la sevillana se diferencia de la seguidilla original por:",
    correcta: "Estar más aflamencada y tener una estructura rítmica y coreográfica muy fija.",
    incorrectas: [
      "Utilizar ritmos de jazz y blues en el acompañamiento.",
      "Cantar solo sobre la muerte y el dolor extremo."
    ]
  },
  {
    enunciado: "La 'Danza de los Zancos' es una manifestación espectacular de:",
    correcta: "Anguiano (La Rioja).",
    incorrectas: [
      "Cádiz.",
      "Barcelona."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Zapateado' en las danzas españolas?",
    correcta: "El uso del calzado como instrumento de percusión contra el suelo, marcando ritmos complejos.",
    incorrectas: [
      "Bailar sobre las puntas de los pies como en el ballet clásico.",
      "Lanzar los zapatos al aire al finalizar la interpretación."
    ]
  },
  {
    enunciado: "En las Islas Canarias, el 'Tajaraste' es una danza de origen prehispánico que se acompaña con:",
    correcta: "Chácaras (castañuelas grandes) y tambor.",
    incorrectas: [
      "Órgano de tubos y violín.",
      "Solo con el sonido de las palmas."
    ]
  },
  {
    enunciado: "La 'Muixeranga' de Algemesí (Valencia) es una danza que culmina con:",
    correcta: "La construcción de torres humanas.",
    incorrectas: [
      "Un salto colectivo al río Júcar.",
      "La quema de un muñeco de cartón."
    ]
  },
  {
    enunciado: "¿Cuál es el compás de la 'Malagueña' tradicional?",
    correcta: "3/4 (ternario).",
    incorrectas: [
      "2/4 (binario).",
      "5/4 (irregular)."
    ]
  },
  {
    enunciado: "El 'Paloteo' segoviano utiliza como música de acompañamiento habitualmente:",
    correcta: "La dulzaina y el tamboril.",
    incorrectas: [
      "La guitarra eléctrica con distorsión.",
      "El coro de monjes gregorianos."
    ]
  },
  {
    enunciado: "En la muiñeira, los gritos exclamativos que lanzan los bailarines se llaman:",
    correcta: "Aturuxos.",
    incorrectas: [
      "Irrintzis.",
      "Olés."
    ]
  },
  {
    enunciado: "La 'Danza Prima' es una danza circular colectiva y cantada típica de:",
    correcta: "Asturias.",
    incorrectas: [
      "Andalucía.",
      "Madrid."
    ]
  },
  {
    enunciado: "¿Qué danza de Extremadura se acompaña con la 'flauta de tres agujeros' y el tamboril?",
    correcta: "El Són.",
    incorrectas: [
      "El Bolero flamencado.",
      "La Jota castellana."
    ]
  },
  {
    enunciado: "La 'Bolangera' es una danza folclórica tradicional de:",
    correcta: "Cataluña.",
    incorrectas: [
      "Canarias.",
      "Extremadura."
    ]
  },
  {
    enunciado: "El 'Baile de la Era' es una danza típica de Estella, en:",
    correcta: "Navarra.",
    incorrectas: [
      "Valencia.",
      "Castilla-La Mancha."
    ]
  },
  {
    enunciado: "Las 'Folías' canarias se caracterizan por su carácter:",
    correcta: "Solemne, pausado y elegante.",
    incorrectas: [
      "Rápido, agresivo y guerrero.",
      "Muy similar al rock de los años 50."
    ]
  },
  {
    enunciado: "En la jota aragonesa, el paso básico consiste en:",
    correcta: "Un salto sobre una pierna mientras la otra se lanza hacia adelante (punta-tacón).",
    incorrectas: [
      "Caminar hacia atrás con las manos en los bolsillos.",
      "Girar sobre la cabeza como en el breakdance."
    ]
  },
  {
    enunciado: "La 'Chirimía' se usa en algunas danzas tradicionales para aportar un sonido:",
    correcta: "Potente y penetrante, propio de la lengüeta doble.",
    incorrectas: [
      "Dulce y aflautado, similar al silbido.",
      "Metálico y brillante como una trompeta."
    ]
  },
  {
    enunciado: "El objetivo de estudiar las danzas de España en el aula de música es:",
    correcta: "Conocer y valorar la diversidad cultural del país a través de su expresión motriz y musical.",
    incorrectas: [
      "Aprender a coser los trajes regionales de todas las provincias.",
      "Obligar a los alumnos a elegir una sola danza y despreciar las demás."
    ]
  }
];