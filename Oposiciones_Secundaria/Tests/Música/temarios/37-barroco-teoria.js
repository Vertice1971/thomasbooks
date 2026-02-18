// 37-barroco-teoria.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué acontecimiento marca tradicionalmente el inicio del periodo Barroco en el año 1600?",
    correcta: "El nacimiento de la ópera con el estreno de 'Eurídice' y el desarrollo de la monodia acompañada.",
    incorrectas: [
      "La invención del piano por Bartolomeo Cristofori.",
      "La muerte de Johann Sebastian Bach."
    ]
  },
  {
    enunciado: "La principal característica técnica que articula toda la música barroca es:",
    correcta: "El Bajo Continuo.",
    incorrectas: [
      "La polifonía vocal a capella sin instrumentos.",
      "El uso exclusivo de escalas pentatónicas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Teoría de los Afectos' (Affektenlehre)?",
    correcta: "Un código estético que buscaba representar emociones específicas (alegría, tristeza, ira) mediante recursos musicales fijos.",
    incorrectas: [
      "Una ley que obligaba a los músicos a ser amables con el público.",
      "El estudio de las enfermedades que afectaban a los constructores de claves."
    ]
  },
  {
    enunciado: "El Barroco supuso el paso definitivo de la modalidad medieval/renacentista a:",
    correcta: "El sistema tonal (bi-modalidad: Mayor y Menor).",
    incorrectas: [
      "La atonalidad dodecafónica.",
      "El canto llano monódico."
    ]
  },
  {
    enunciado: "La textura barroca por excelencia, donde una voz aguda destaca sobre una base armónica, se llama:",
    correcta: "Monodia acompañada.",
    incorrectas: [
      "Heterofonía primitiva.",
      "Contrapunto de nota contra nota."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Estilo Concertato'?",
    correcta: "El contraste entre diversos planos sonoros (solistas vs. orquesta, fuerte vs. piano).",
    incorrectas: [
      "Tocar todos los instrumentos al mismo tiempo con la misma intensidad.",
      "Un concierto donde el público puede cantar con los músicos."
    ]
  },
  {
    enunciado: "El 'Bajo Continuo' solía ser interpretado por un grupo de instrumentos que incluía:",
    correcta: "Un instrumento polifónico (clave, órgano) y uno melódico grave (violonchelo, fagot).",
    incorrectas: [
      "Dos flautas y un triángulo.",
      "Solo voces masculinas sin apoyo instrumental."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el sistema de afinación que permitió el uso de todas las tonalidades y que Bach defendió en su obra?",
    correcta: "Temperamento igual.",
    incorrectas: [
      "Afinación pitagórica.",
      "Entonación justa."
    ]
  },
  {
    enunciado: "El 'Barroco Temprano' (1580-1630) se caracteriza por:",
    correcta: "El rechazo del contrapunto y el entusiasmo por la expresividad de la monodia.",
    incorrectas: [
      "La perfección de la fuga y las grandes formas orquestales.",
      "El predominio absoluto de la música para piano."
    ]
  },
  {
    enunciado: "El 'Barroco Pleno' (1630-1680) vio el nacimiento y consolidación de:",
    correcta: "La cantata, el oratorio y la distinción clara entre aria y recitativo.",
    incorrectas: [
      "La sinfonía clásica de cuatro movimientos.",
      "El canto gregoriano romano."
    ]
  },
  {
    enunciado: "El 'Barroco Tardío' (1680-1750) se distingue por:",
    correcta: "La absorción del contrapunto dentro del sistema tonal y el auge del virtuosismo instrumental.",
    incorrectas: [
      "La eliminación de los instrumentos de cuerda de la orquesta.",
      "La vuelta a la sencillez del estilo galante."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bajo Cifrado'?",
    correcta: "Una serie de números bajo la línea del bajo que indican al intérprete los acordes que debe improvisar.",
    incorrectas: [
      "Un código secreto para que los músicos no se perdieran.",
      "El número de veces que se debe repetir el estribillo."
    ]
  },
  {
    enunciado: "En la organología barroca, la familia del violín desplazó definitivamente a:",
    correcta: "La familia de las violas da gamba.",
    incorrectas: [
      "La familia de las flautas dulces.",
      "Los instrumentos de percusión metálica."
    ]
  },
  {
    enunciado: "¿Qué luthier de Cremona es el más famoso constructor de violines del Barroco?",
    correcta: "Antonio Stradivari.",
    incorrectas: [
      "Bartolomeo Cristofori.",
      "Claudio Monteverdi."
    ]
  },
  {
    enunciado: "El 'Clave' (o clavicémbalo) produce el sonido mediante:",
    correcta: "Plectros que pulsan las cuerdas.",
    incorrectas: [
      "Martillos que golpean las cuerdas.",
      "Corrientes de aire que pasan por tubos."
    ]
  },
  {
    enunciado: "¿Qué instrumento de viento madera se perfeccionó en Francia durante el siglo XVII, sustituyendo a la chirimía?",
    correcta: "El Oboe.",
    incorrectas: [
      "El Clarinete.",
      "El Saxofón."
    ]
  },
  {
    enunciado: "El 'Órgano Barroco' alcanzó su máximo desarrollo técnico en:",
    correcta: "Alemania, con una gran variedad de registros y pedales independientes.",
    incorrectas: [
      "Italia, donde solo se usaba para acompañar el baile.",
      "Inglaterra, donde no tenía tubos sino cuerdas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Retórica Musical'?",
    correcta: "El uso de figuras musicales análogas a las figuras del lenguaje para conmover al oyente.",
    incorrectas: [
      "La capacidad de los músicos para dar discursos políticos entre canciones.",
      "Escribir poemas en la parte trasera de las partituras."
    ]
  },
  {
    enunciado: "La dinámica barroca suele describirse como 'Dinámica de terrazas' porque:",
    correcta: "Cambia bruscamente de volumen (forte/piano) sin transiciones graduales.",
    incorrectas: [
      "La música solo se tocaba en las terrazas de los palacios.",
      "El volumen dependía de la altura a la que se situaban los músicos."
    ]
  },
  {
    enunciado: "¿Qué instrumento de cuerda pulsada, de gran tamaño y mástil largo, se usaba para el bajo continuo?",
    correcta: "Tiorba.",
    incorrectas: [
      "Vihuela.",
      "Ukelele."
    ]
  },
  {
    enunciado: "El 'Basso Ostinato' es un procedimiento que consiste en:",
    correcta: "Una línea de bajo que se repite constantemente mientras las voces superiores varían.",
    incorrectas: [
      "Un cantante de voz muy grave que nunca deja de cantar.",
      "Un instrumento que suena tan fuerte que es molesto."
    ]
  },
  {
    enunciado: "La 'Camerata Fiorentina' fue un grupo de intelectuales que propuso:",
    correcta: "Recuperar la tragedia griega a través del canto monódico, dando origen a la ópera.",
    incorrectas: [
      "Prohibir el uso de instrumentos de metal en las iglesias.",
      "Crear un sindicato de músicos en la ciudad de Florencia."
    ]
  },
  {
    enunciado: "¿Qué es el 'Horror Vacui' en la estética barroca?",
    correcta: "La tendencia a recargar la música con ornamentación y profusión de notas.",
    incorrectas: [
      "El miedo que tenían los músicos a los escenarios vacíos.",
      "La prohibición de usar silencios en las partituras."
    ]
  },
  {
    enunciado: "En la música barroca, el ritmo suele ser:",
    correcta: "Metrómico y mecánico, con una pulsación muy marcada ('ritmo de motor').",
    incorrectas: [
      "Totalmente libre y sin ningún pulso reconocible.",
      "Cambiante cada dos compases para confundir al oyente."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el virtuoso de la voz masculina, muy común en la ópera barroca?",
    correcta: "Castrato.",
    incorrectas: [
      "Barítono.",
      "Falsetista de jazz."
    ]
  },
  {
    enunciado: "El 'Estilo Galante' es en realidad:",
    correcta: "Una transición hacia el Clasicismo que reacciona contra la complejidad barroca.",
    incorrectas: [
      "El estilo más complejo y difícil de Johann Sebastian Bach.",
      "La música que se tocaba solo en las bodas reales."
    ]
  },
  {
    enunciado: "La 'Sonata' barroca originalmente significaba simplemente:",
    correcta: "Música para ser 'sonada' (instrumental) frente a la 'cantata' (vocal).",
    incorrectas: [
      "Música que se toca solo mientras se duerme.",
      "Una pieza que tiene obligatoriamente 40 minutos de duración."
    ]
  },
  {
    enunciado: "En el Barroco, la improvisación era:",
    correcta: "Esencial, tanto en la ornamentación de melodías como en la realización del bajo continuo.",
    incorrectas: [
      "Estrictamente prohibida por los compositores.",
      "Solo permitida a los percusionistas."
    ]
  },
  {
    enunciado: "¿Qué instrumento de viento metal no tenía válvulas en el Barroco y se tocaba mediante armónicos?",
    correcta: "Trompeta natural.",
    incorrectas: [
      "Saxofón tenor.",
      "Tuba wagneriana."
    ]
  },
  {
    enunciado: "El 'Tratado de Armonía' (1722) de Rameau es fundamental porque:",
    correcta: "Sentó las bases teóricas de la armonía tonal moderna basada en acordes.",
    incorrectas: [
      "Fue el primer libro de cocina para músicos franceses.",
      "Explicaba cómo fabricar violines de cristal."
    ]
  },
  {
    enunciado: "¿Qué es un 'Arpegio'?",
    correcta: "Tocar las notas de un acorde de forma sucesiva en lugar de simultánea.",
    incorrectas: [
      "Un instrumento de cuerda originario de Grecia.",
      "El final de una ópera donde todos mueren."
    ]
  },
  {
    enunciado: "La 'Suite' instrumental barroca tiene su origen en:",
    correcta: "La unión de diversas danzas de corte.",
    incorrectas: [
      "Los cantos gregorianos de los monjes.",
      "Las señales militares de las trompetas romanas."
    ]
  },
  {
    enunciado: "En la jerarquía instrumental barroca, el instrumento líder de la orquesta era:",
    correcta: "El Violín.",
    incorrectas: [
      "La Flauta dulce.",
      "El Trombón de varas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Contrapunto' barroco?",
    correcta: "La técnica de combinar dos o más voces independientes dentro de una estructura tonal.",
    incorrectas: [
      "Tocar en contra de lo que indica el director.",
      "La parte de la partitura que está en blanco."
    ]
  },
  {
    enunciado: "La 'Obertura Francesa' se define por su estructura:",
    correcta: "Lento (con ritmos punteados) - Rápido (fugado) - Lento.",
    incorrectas: [
      "Rápido - Lento - Rápido.",
      "Un solo de tambor que dura diez minutos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Basso Seguente'?",
    correcta: "Un bajo que se limita a doblar la voz más grave de una composición polifónica.",
    incorrectas: [
      "Un bajo que va corriendo detrás de los demás músicos.",
      "El nombre técnico del silencio de negra."
    ]
  },
  {
    enunciado: "La música barroca buscaba la 'Unidad de afecto', lo que significa que:",
    correcta: "Cada movimiento o sección solía mantener un único estado emocional de principio a fin.",
    incorrectas: [
      "Todos los músicos debían estar enamorados entre sí.",
      "La música debía ser igual en todos los países del mundo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Ornamentación' barroca?",
    correcta: "Notas de adorno (trinos, mordentes) que el intérprete añadía para embellecer la melodía.",
    incorrectas: [
      "Decorar los instrumentos con piedras preciosas.",
      "Pintar el escenario con colores brillantes."
    ]
  },
  {
    enunciado: "El final del periodo Barroco se sitúa en 1750 debido a:",
    correcta: "La muerte de Johann Sebastian Bach.",
    incorrectas: [
      "La Revolución Francesa.",
      "El descubrimiento de América."
    ]
  },
  {
    enunciado: "El estudio de la teoría barroca permite comprender:",
    correcta: "El nacimiento de la mayoría de las formas y estructuras de la música occidental actual.",
    incorrectas: [
      "Cómo se fabricaban las pelucas de los compositores.",
      "La vida privada de los reyes europeos."
    ]
  }
];