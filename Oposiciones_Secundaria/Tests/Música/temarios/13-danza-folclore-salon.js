// 13-danza-folclore-salon.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función social primaria de la danza folclórica en las sociedades tradicionales?",
    correcta: "Reforzar la identidad colectiva, celebrar hitos del ciclo vital o agrícola y fomentar la cohesión comunitaria.",
    incorrectas: [
      "Servir de entrenamiento físico exclusivo para soldados de élite.",
      "Generar beneficios económicos mediante la venta de entradas en teatros nacionales."
    ]
  },
  {
    enunciado: "En la suite barroca, ¿cuál de estas danzas históricas es de origen francés, tiene un compás de 3/4 y un carácter noble y moderado?",
    correcta: "El Minué (Minuet).",
    incorrectas: [
      "La Giga.",
      "La Allemande."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al Vals como baile de salón desde su aparición a finales del siglo XVIII?",
    correcta: "Su compás ternario y el hecho de ser un baile de pareja enlazada que gira por la pista.",
    incorrectas: [
      "Su ritmo binario muy rápido y la obligación de bailar separados.",
      "El uso exclusivo de castañuelas por parte de ambos bailarines."
    ]
  },
  {
    enunciado: "La 'Pavana' es una danza histórica del Renacimiento que se define por ser:",
    correcta: "Una danza de pasos procesionales, binaria, lenta y de carácter solemne.",
    incorrectas: [
      "Un baile de saltos acrobáticos muy rápidos en compás de 6/8.",
      "La antecesora directa del rock and roll contemporáneo."
    ]
  },
  {
    enunciado: "¿Qué instrumento es fundamental en el acompañamiento de las danzas folclóricas de la zona andina?",
    correcta: "El charango y la quena.",
    incorrectas: [
      "El sintetizador digital.",
      "El oboe de llaves moderno."
    ]
  },
  {
    enunciado: "En el contexto de los bailes de salón, ¿cuál es el origen del Tango?",
    correcta: "Los suburbios de Buenos Aires y Montevideo, fusionando influencias africanas, criollas y europeas.",
    incorrectas: [
      "Las cortes imperiales de la Viena del siglo XIX.",
      "Los templos budistas del sudeste asiático."
    ]
  },
  {
    enunciado: "La 'Gallarda' era una danza renacentista que solía interpretarse después de la Pavana, caracterizada por:",
    correcta: "Su ritmo ternario, tempo rápido y el uso de saltos.",
    incorrectas: [
      "Ser una danza circular de ritmo monótono y lento.",
      "Interpretarse en silencio absoluto sin acompañamiento musical."
    ]
  },
  {
    enunciado: "Dentro de las danzas folclóricas españolas, la Jota se identifica por:",
    correcta: "Su compás ternario, el uso de castañuelas y el baile por parejas con saltos y punteados.",
    incorrectas: [
      "Ser una danza exclusivamente sentada que se acompaña con flautas traversas.",
      "Su origen celta y el uso obligatorio de gaitas en todas sus variantes."
    ]
  },
  {
    enunciado: "¿Qué danza barroca de origen español o americano tiene un carácter lento y una acentuación característica en el segundo tiempo del compás de 3/4?",
    correcta: "La Zarabanda.",
    incorrectas: [
      "El Courante.",
      "La Bourrée."
    ]
  },
  {
    enunciado: "El 'Cha-cha-chá' es un baile de salón que tiene sus raíces rítmicas en:",
    correcta: "El danzón y el mambo cubano.",
    incorrectas: [
      "La polca bohemia.",
      "El minueto francés."
    ]
  },
  {
    enunciado: "En la danza, el término 'Coreografía' se refiere a:",
    correcta: "El arte de crear estructuras de movimientos y pasos que se suceden en el tiempo y el espacio.",
    incorrectas: [
      "La biografía escrita de los bailarines más famosos de la historia.",
      "El análisis químico de los materiales del suelo de los escenarios."
    ]
  },
  {
    enunciado: "La 'Polca' es una danza de salón del siglo XIX que destaca por su ritmo:",
    correcta: "Binario y rápido, con un característico paso saltado.",
    incorrectas: [
      "Ternario y melancólico, similar a una nana.",
      "Irregular (amalgama) y de gran complejidad metafísica."
    ]
  },
  {
    enunciado: "¿Qué es una 'Danza de Espadas' en el folclore europeo?",
    correcta: "Una danza ritual masculina que simboliza la fuerza o la protección de la comunidad.",
    incorrectas: [
      "Un duelo a muerte entre dos músicos para decidir quién dirige la orquesta.",
      "Una técnica de cocina para cortar alimentos al ritmo de la música."
    ]
  },
  {
    enunciado: "El 'Pasodoble' es un baile de salón español que musicalmente se basa en:",
    correcta: "Una marcha binaria que evoca el desfile de las cuadrillas en la tauromaquia.",
    incorrectas: [
      "Un ritmo de vals lento con influencias de la ópera italiana.",
      "Una estructura de jazz experimental con improvisación de trompeta."
    ]
  },
  {
    enunciado: "La 'Branle' era una danza folclórica medieval y renacentista que se bailaba en:",
    correcta: "Círculo o cadena, con desplazamientos laterales.",
    incorrectas: [
      "Parejas enlazadas con contacto físico permanente.",
      "Solitario, mirando hacia una pared para no distraerse."
    ]
  },
  {
    enunciado: "En los bailes de salón 'Standard', ¿cuál de estos géneros se incluye?",
    correcta: "El Quickstep.",
    incorrectas: [
      "La Rumba-Bolero.",
      "La Samba."
    ]
  },
  {
    enunciado: "¿Qué danza folclórica de origen polaco, en compás ternario y con acentos en el segundo o tercer tiempo, fue universalizada por Chopin?",
    correcta: "La Mazurca.",
    incorrectas: [
      "La Sardana.",
      "El Charleston."
    ]
  },
  {
    enunciado: "La 'Giga' es una danza histórica que suele cerrar la suite barroca, caracterizada por:",
    correcta: "Su compás compuesto (6/8, 9/8 o 12/8) y su carácter muy vivo y saltado.",
    incorrectas: [
      "Ser una danza fúnebre de ritmo extremadamente lento.",
      "El uso de una sola nota repetida durante toda la pieza."
    ]
  },
  {
    enunciado: "El 'Charleston' se convirtió en el baile emblemático de la década de 1920 por:",
    correcta: "Su ritmo frenético, el uso de síncopas y el movimiento de rodillas y pies hacia dentro y fuera.",
    incorrectas: [
      "Ser el primer baile que prohibió el uso de instrumentos de percusión.",
      "Su carácter extremadamente conservador y religioso."
    ]
  },
  {
    enunciado: "La 'Sardana' es la danza nacional de Cataluña y se baila en:",
    correcta: "Círculos cerrados con las manos enlazadas, alternando pasos cortos y largos.",
    incorrectas: [
      "Parejas que se lanzan por el aire como en el rock acrobático.",
      "Filas separadas por sexos que nunca llegan a tocarse."
    ]
  },
  {
    enunciado: "¿Qué baile de salón de origen brasileño se caracteriza por su ritmo sincopado y movimientos de cadera?",
    correcta: "La Samba.",
    incorrectas: [
      "El Foxtrot.",
      "La Bourrée."
    ]
  },
  {
    enunciado: "En la danza folclórica, el 'Punteado' consiste en:",
    correcta: "Golpear el suelo con la punta del pie de forma rítmica.",
    incorrectas: [
      "Escribir las notas de la melodía en un papel mientras se baila.",
      "Coser los trajes regionales antes de empezar la actuación."
    ]
  },
  {
    enunciado: "La 'Allemande' es una danza barroca que, a pesar de su nombre francés, es de origen:",
    correcta: "Alemán.",
    incorrectas: [
      "Español.",
      "Italiano."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cobla' en el contexto de la danza folclórica?",
    correcta: "La agrupación instrumental que acompaña específicamente a la Sardana.",
    incorrectas: [
      "Un paso de baile que consiste en dar tres vueltas sobre uno mismo.",
      "El nombre del sombrero que llevan los bailarines de flamenco."
    ]
  },
  {
    enunciado: "El 'Bolero' como baile de salón clásico español nació en el siglo XVIII y se baila en compás:",
    correcta: "Ternario moderado.",
    incorrectas: [
      "Binario muy rápido.",
      "Cuaternario pesado."
    ]
  },
  {
    enunciado: "En el Rock and Roll como baile de salón, el paso básico suele estructurarse en:",
    correcta: "Seis tiempos.",
    incorrectas: [
      "Tres tiempos (como el vals).",
      "Dieciséis tiempos sin pausas."
    ]
  },
  {
    enunciado: "La 'Gavota' es una danza barroca francesa que comienza habitualmente:",
    correcta: "En la mitad del compás (anacrúsica).",
    incorrectas: [
      "Con un grito del bailarín principal.",
      "Después de que termine toda la música instrumental."
    ]
  },
  {
    enunciado: "¿Qué danza folclórica de origen napolitano se bailaba para supuestamente curar la picadura de una araña?",
    correcta: "La Tarantela.",
    incorrectas: [
      "El Fandango.",
      "La Siciliana."
    ]
  },
  {
    enunciado: "El 'Foxtrot' es un baile de salón de origen estadounidense cuyo nombre significa:",
    correcta: "Trote del zorro.",
    incorrectas: [
      "Salto del conejo.",
      "Vuelo del águila."
    ]
  },
  {
    enunciado: "La 'Danza de Cintas' es una manifestación folclórica común en varios países que consiste en:",
    correcta: "Tejer y destejer cintas de colores alrededor de un mástil central mientras se baila.",
    incorrectas: [
      "Atar a los músicos para que no puedan dejar de tocar.",
      "Lanzar cintas magnetofónicas al público durante el estribillo."
    ]
  },
  {
    enunciado: "¿Cuál es el compás característico de la Habanera, danza que influyó en el Tango?",
    correcta: "Binario (2/4) con ritmo de corchea con puntillo, semicorchea y dos corcheas.",
    incorrectas: [
      "Ternario de subdivisión ternaria (9/8).",
      "Un solo tiempo extremadamente largo de 10 segundos."
    ]
  },
  {
    enunciado: "En los bailes de salón, la 'Línea de Danza' es:",
    correcta: "El sentido contrario a las agujas del reloj en el que las parejas se desplazan por la pista.",
    incorrectas: [
      "Una raya pintada en el suelo que nadie puede pisar.",
      "La fila que forman los caballeros para pedir baile a las damas."
    ]
  },
  {
    enunciado: "La 'Seguidilla' es una danza folclórica española que se distingue de la Jota por:",
    correcta: "Su ritmo más rápido, estrofas poéticas específicas y pasos más picados.",
    incorrectas: [
      "Que se baila obligatoriamente con los ojos cerrados.",
      "No utilizar ningún tipo de instrumento de percusión."
    ]
  },
  {
    enunciado: "El 'Mambo' alcanzó su popularidad internacional en la década de 1950 gracias a músicos como:",
    correcta: "Pérez Prado.",
    incorrectas: [
      "Johann Strauss.",
      "Ludwig van Beethoven."
    ]
  },
  {
    enunciado: "La 'Courante' barroca se divide principalmente en dos estilos:",
    correcta: "La francesa (solemne y compleja) y la italiana (rápida y fluida).",
    incorrectas: [
      "La eléctrica y la acústica.",
      "La que se baila sentado y la que se baila saltando."
    ]
  },
  {
    enunciado: "En el folclore mexicano, el 'Jarabe Tapatío' es conocido internacionalmente como:",
    correcta: "El baile del sombrero mexicano.",
    incorrectas: [
      "La danza del fuego sagrado.",
      "El vals de las flores aztecas."
    ]
  },
  {
    enunciado: "¿Qué baile de salón se realiza sobre un ritmo de 4/4 con un paso 'lento, lento, rápido, rápido'?",
    correcta: "El Foxtrot (en su versión social).",
    incorrectas: [
      "El Vals vienés.",
      "La Giga barroca."
    ]
  },
  {
    enunciado: "La 'Bourrée' es una danza folclórica y cortesana francesa que destaca por su:",
    correcta: "Ritmo alegre y el uso frecuente de síncopas.",
    incorrectas: [
      "Tristeza profunda y ritmo de marcha fúnebre.",
      "Ausencia de melodía, basada solo en palmadas."
    ]
  },
  {
    enunciado: "El 'Breakdance', aunque no es un baile de salón tradicional, se estudia en la evolución de la danza por:",
    correcta: "Su vinculación con la cultura Hip-Hop y su complejidad física y rítmica.",
    incorrectas: [
      "Haber sido inventado en la corte de Luis XIV en Versalles.",
      "Ser el baile oficial de todas las bodas reales europeas."
    ]
  },
  {
    enunciado: "El objetivo de enseñar danza en el aula de música es:",
    correcta: "Integrar el ritmo corporal, la coordinación social y el conocimiento de la historia cultural.",
    incorrectas: [
      "Seleccionar a los alumnos que podrán trabajar en un ballet profesional.",
      "Sustituir la teoría musical por ejercicio físico intenso para quemar calorías."
    ]
  }
];