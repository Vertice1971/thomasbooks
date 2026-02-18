// 41-preclasicismo-clasicismo.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué corriente estética y filosófica del siglo XVIII fundamentó el Clasicismo musical?",
    correcta: "La Ilustración, que promovía la razón, la claridad y el orden.",
    incorrectas: [
      "El Existencialismo, centrado en la angustia humana.",
      "El Hermetismo medieval."
    ]
  },
  {
    enunciado: "El 'Estilo Galante' se caracteriza por ser:",
    correcta: "Una reacción contra la complejidad del contrapunto barroco, buscando la sencillez y la elegancia melódica.",
    incorrectas: [
      "Un estilo extremadamente denso con 12 voces independientes.",
      "Música militar destinada exclusivamente a las batallas navales."
    ]
  },
  {
    enunciado: "¿Qué es el 'Empfindsamer Stil' (Estilo Sentimental)?",
    correcta: "Un estilo alemán que buscaba expresar sentimientos íntimos y cambios subjetivos de humor.",
    incorrectas: [
      "Un método para aprender a tocar el tambor en silencio.",
      "La prohibición de usar instrumentos de cuerda en la corte."
    ]
  },
  {
    enunciado: "¿Qué instrumento de teclado terminó desplazando al clave por su capacidad de realizar gradaciones dinámicas?",
    correcta: "El Pianoforte.",
    incorrectas: [
      "El Órgano de cámara.",
      "La Celesta."
    ]
  },
  {
    enunciado: "La 'Escuela de Mannheim' es fundamental en este periodo por:",
    correcta: "Desarrollar la orquesta moderna y efectos dinámicos como el 'Crescendo de Mannheim'.",
    incorrectas: [
      "Ser la primera escuela en enseñar música solo por ordenador.",
      "Prohibir el uso del violín en las sinfonías."
    ]
  },
  {
    enunciado: "¿Quién fue el principal impulsor de la orquesta de Mannheim?",
    correcta: "Johann Stamitz.",
    incorrectas: [
      "Johann Sebastian Bach.",
      "Antonio Vivaldi."
    ]
  },
  {
    enunciado: "La textura predominante en el Clasicismo es:",
    correcta: "La melodía acompañada, donde la voz superior lleva el protagonismo claro.",
    incorrectas: [
      "La polifonía imitativa densa del Renacimiento.",
      "La monodia sin ningún tipo de apoyo armónico."
    ]
  },
  {
    enunciado: "En el Clasicismo, el 'Bajo Continuo' fue:",
    correcta: "Desapareciendo gradualmente hasta ser sustituido por un acompañamiento escrito íntegramente.",
    incorrectas: [
      "Reforzado con el uso de tres claves y dos órganos.",
      "Obligatorio por ley en todas las obras de Mozart."
    ]
  },
  {
    enunciado: "¿Qué es la 'Frase Clásica' estándar?",
    correcta: "Una estructura de 8 compases dividida en dos frases simétricas de 4 (antecedente y consecuente).",
    incorrectas: [
      "Una línea melódica que dura 50 compases sin respirar.",
      "Un conjunto de gritos aleatorios sin ritmo definido."
    ]
  },
  {
    enunciado: "El concepto de 'Sonata' en el Clasicismo se refiere a:",
    correcta: "Tanto a un género para uno o dos instrumentos como a una estructura formal (forma sonata).",
    incorrectas: [
      "Exclusivamente a las piezas que se tocan en el exterior de las iglesias.",
      "Un tipo de danza muy rápida originaria de Rusia."
    ]
  },
  {
    enunciado: "¿Cuál es la estructura formal de un primer movimiento de sonata clásica?",
    correcta: "Exposición, Desarrollo y Reexposición.",
    incorrectas: [
      "Introducción, Fuga y Final.",
      "Estribillo, Estrofa y Puente."
    ]
  },
  {
    enunciado: "En la organología clásica, el 'Clarinete' se convirtió en:",
    correcta: "Un miembro estable y esencial de la sección de madera de la orquesta.",
    incorrectas: [
      "Un instrumento que solo se usaba para imitar a los pájaros.",
      "El sustituto permanente de todos los violines."
    ]
  },
  {
    enunciado: "¿Qué instrumento de metal se perfeccionó en esta época permitiendo tocar más notas de la serie armónica?",
    correcta: "La Trompa (especialmente con la técnica de la mano en el pabellón).",
    incorrectas: [
      "El Saxofón alto.",
      "La Tuba eléctrica."
    ]
  },
  {
    enunciado: "La 'Música de Cámara' clásica tiene como agrupación reina a:",
    correcta: "El Cuarteto de Cuerda.",
    incorrectas: [
      "La Big Band de viento metal.",
      "El dúo de flauta y tambor."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bajo de Alberti'?",
    correcta: "Un tipo de acompañamiento arpegiado que da movimiento a la armonía en el piano.",
    incorrectas: [
      "Un cantante con voz de bajo que nació en la ciudad de Alberti.",
      "Un instrumento de percusión de madera."
    ]
  },
  {
    enunciado: "Christoph Willibald Gluck es el gran reformador de:",
    correcta: "La Ópera, buscando el equilibrio entre música y drama.",
    incorrectas: [
      "La fabricación de violines en Cremona.",
      "El sistema de notación por números."
    ]
  },
  {
    enunciado: "El 'Trío de Cuerda' clásico está formado por:",
    correcta: "Violín, Viola y Violonchelo.",
    incorrectas: [
      "Tres violines tocando al unísono.",
      "Violín, Piano y Trompeta."
    ]
  },
  {
    enunciado: "¿Qué compositor es el principal representante del 'Estilo Sentimental'?",
    correcta: "Carl Philipp Emanuel Bach.",
    incorrectas: [
      "Wolfgang Amadeus Mozart.",
      "Antonio Salieri."
    ]
  },
  {
    enunciado: "La 'Forma Lied' ternaria se representa con el esquema:",
    correcta: "ABA.",
    incorrectas: [
      "AABB.",
      "ABCD."
    ]
  },
  {
    enunciado: "En el Clasicismo, el uso de la 'Disonancia' es:",
    correcta: "Funcional, usándose para crear tensión que siempre resuelve en consonancia.",
    incorrectas: [
      "Evitado totalmente para no molestar al oyente.",
      "El elemento principal de todas las melodías."
    ]
  },
  {
    enunciado: "¿Qué es un 'Divertimento'?",
    correcta: "Una forma musical ligera destinada al entretenimiento en eventos sociales.",
    incorrectas: [
      "Un tipo de castigo para los músicos que llegaban tarde.",
      "Una pieza religiosa para ser cantada en latín."
    ]
  },
  {
    enunciado: "La orquesta clásica estandarizada cuenta con secciones de:",
    correcta: "Cuerda, Madera, Metal y Percusión (timbales).",
    incorrectas: [
      "Cuerda y sintetizadores solamente.",
      "Solo instrumentos de viento madera."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe la sección que cierra definitivamente una obra o movimiento?",
    correcta: "Coda.",
    incorrectas: [
      "Preludio.",
      "Intermezzo."
    ]
  },
  {
    enunciado: "El 'Concierto Solista' clásico suele tener:",
    correcta: "Tres movimientos (Rápido-Lento-Rápido).",
    incorrectas: [
      "Un solo movimiento de una hora de duración.",
      "Diez movimientos muy cortos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cadenza' en un concierto?",
    correcta: "Un pasaje de lucimiento para el solista, a menudo situado al final del primer movimiento.",
    incorrectas: [
      "El momento en que el director de orquesta se sienta a descansar.",
      "La caída de un instrumento al suelo por accidente."
    ]
  },
  {
    enunciado: "En la forma sonata, la 'Exposición' suele terminar en:",
    correcta: "La tonalidad de la dominante (o relativo mayor si la obra es en menor).",
    incorrectas: [
      "La misma tonalidad de la tónica sin haber modulado.",
      "Un silencio absoluto de diez compases."
    ]
  },
  {
    enunciado: "¿Qué es el 'Desarrollo' en la forma sonata?",
    correcta: "La sección más libre donde se transforman los temas y se modula frecuentemente.",
    incorrectas: [
      "La repetición exacta de la exposición sin cambiar nada.",
      "El momento en que el público debe levantarse de sus asientos."
    ]
  },
  {
    enunciado: "La 'Sinfonía' clásica consta habitualmente de:",
    correcta: "Cuatro movimientos.",
    incorrectas: [
      "Dos movimientos.",
      "Veinte movimientos."
    ]
  },
  {
    enunciado: "¿Qué instrumento de madera se utilizaba a menudo en parejas en la orquesta clásica?",
    correcta: "El Oboe.",
    incorrectas: [
      "El Saxofón tenor.",
      "El Contrabajo eléctrico."
    ]
  },
  {
    enunciado: "El 'Minueto' clásico solía ser el:",
    correcta: "Tercer movimiento de la sinfonía o el cuarteto.",
    incorrectas: [
      "Primer movimiento obligatorio.",
      "Final de todas las óperas de Gluck."
    ]
  },
  {
    enunciado: "¿Qué es el 'Trío' dentro de un Minueto?",
    correcta: "Una sección central de carácter contrastante, tras la cual se repite el Minueto inicial.",
    incorrectas: [
      "Una pieza que solo pueden tocar tres músicos de viento.",
      "El nombre del director del teatro."
    ]
  },
  {
    enunciado: "La 'Ópera Buffa' influyó en el Clasicismo al introducir:",
    correcta: "Un mayor dinamismo, realismo y personajes de la vida cotidiana.",
    incorrectas: [
      "El uso de máscaras de monstruos gigantes.",
      "La obligación de cantar solo en alemán antiguo."
    ]
  },
  {
    enunciado: "En la organología del piano clásico, el 'Mecanismo de escape' permitía:",
    correcta: "La repetición rápida de una misma nota.",
    incorrectas: [
      "Que el pianista pudiera salir corriendo del escenario.",
      "Apagar el sonido del piano instantáneamente."
    ]
  },
  {
    enunciado: "¿Qué es el 'Rondó' clásico?",
    correcta: "Una forma basada en la repetición de un tema principal que alterna con episodios (ABACA).",
    incorrectas: [
      "Una canción que se canta mientras se corre en círculos.",
      "Un tipo de sombrero que usaban los músicos."
    ]
  },
  {
    enunciado: "La 'Sinfonía Concertante' es un género que mezcla:",
    correcta: "La sinfonía orquestal con elementos del concierto para varios solistas.",
    incorrectas: [
      "La música clásica con el canto gregoriano medieval.",
      "El sonido de las campanas con el del tambor."
    ]
  },
  {
    enunciado: "En el Clasicismo, la 'Armonía' se basa principalmente en:",
    correcta: "Los acordes de tónica, dominante y subdominante como pilares tonales.",
    incorrectas: [
      "Escalas orientales sin ninguna relación de tensión.",
      "Ruidos industriales producidos por máquinas."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el estilo de acompañamiento para teclado que divide los acordes en notas sucesivas?",
    correcta: "Bajo de Alberti.",
    incorrectas: [
      "Arpegio barroco denso.",
      "Trino continuo."
    ]
  },
  {
    enunciado: "El 'Clasicismo' musical tiene su centro geográfico principal en:",
    correcta: "Viena.",
    incorrectas: [
      "Madrid.",
      "París."
    ]
  },
  {
    enunciado: "La 'Reexposición' de la sonata clásica se caracteriza por:",
    correcta: "Presentar ambos temas (A y B) en la tonalidad de la tónica.",
    incorrectas: [
      "Ser el doble de rápida que la exposición.",
      "No utilizar instrumentos de cuerda."
    ]
  },
  {
    enunciado: "El fin del Clasicismo se asocia a menudo con:",
    correcta: "La evolución de Beethoven hacia un estilo más subjetivo y apasionado (Romanticismo).",
    incorrectas: [
      "La invención de la radio y la televisión.",
      "El regreso a la polifonía del Renacimiento."
    ]
  }
];