// 32-medievo-espana.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué importante códice del siglo XII, conservado en Santiago de Compostela, contiene una de las primeras polifonías a tres voces de Europa?",
    correcta: "Codex Calixtinus.",
    incorrectas: [
      "Códice de Madrid.",
      "Códice de las Huelgas."
    ]
  },
  {
    enunciado: "La pieza a tres voces 'Congaudeant Catholici' se encuentra en el:",
    correcta: "Codex Calixtinus.",
    incorrectas: [
      "Llibre Vermell de Montserrat.",
      "Antifonario de León."
    ]
  },
  {
    enunciado: "¿Qué monarca castellano impulsó la creación de las 'Cantigas de Santa María' en el siglo XIII?",
    correcta: "Alfonso X el Sabio.",
    incorrectas: [
      "Sancho IV.",
      "Jaime I el Conquistador."
    ]
  },
  {
    enunciado: "Las 'Cantigas de Santa María' están escritas en:",
    correcta: "Galaico-portugués.",
    incorrectas: [
      "Castellano antiguo.",
      "Latín eclesiástico."
    ]
  },
  {
    enunciado: "¿Cuál es la temática principal de las 'Cantigas de Santa María'?",
    correcta: "Milagros de la Virgen María y loores a su figura.",
    incorrectas: [
      "Crónicas de batallas contra los reinos árabes.",
      "Poemas de amor cortés al estilo de los trovadores provenzales."
    ]
  },
  {
    enunciado: "El 'Códice de las Huelgas' es fundamental porque representa el repertorio de:",
    correcta: "Un monasterio cisterciense femenino con polifonía del Ars Antiqua y Ars Nova.",
    incorrectas: [
      "Los juglares que recorrían el Camino de Santiago.",
      "La corte mudéjar de la Sevilla del siglo XIV."
    ]
  },
  {
    enunciado: "¿Qué manuscrito del siglo XIV contiene cantos y danzas destinados a los peregrinos del monasterio de Montserrat?",
    correcta: "Llibre Vermell.",
    incorrectas: [
      "Códice de Azagra.",
      "Códice de Roda."
    ]
  },
  {
    enunciado: "En el 'Llibre Vermell', el 'Cuncti simus concanentes' es un ejemplo de:",
    correcta: "Danza circular o virelai para ser bailado por los peregrinos.",
    incorrectas: [
      "Misa solemne para la coronación de reyes.",
      "Canto fúnebre de origen visigótico."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el drama litúrgico medieval que aún se representa en Elche?",
    correcta: "Misteri d'Elx.",
    incorrectas: [
      "Canto de la Sibila.",
      "Auto de los Reyes Magos."
    ]
  },
  {
    enunciado: "El 'Canto de la Sibila' es una tradición profética de origen medieval que se mantiene viva en:",
    correcta: "Mallorca y Alguer.",
    incorrectas: [
      "Galicia y Asturias.",
      "Castilla-La Mancha."
    ]
  },
  {
    enunciado: "¿Qué es la 'Mozarabía' en el contexto musical español?",
    correcta: "El canto litúrgico de los cristianos que vivían bajo dominio musulmán (Canto Hispánico).",
    incorrectas: [
      "Un tipo de danza con espadas típica de Al-Ándalus.",
      "La técnica de fabricar laúdes con madera de olivo."
    ]
  },
  {
    enunciado: "El 'Antifonario de León' es la fuente principal para conocer la notación del:",
    correcta: "Canto Hispánico o Mozárabe (en neumas sin líneas).",
    incorrectas: [
      "Canto Gregoriano reformado por Roma.",
      "Ars Nova en la Corona de Aragón."
    ]
  },
  {
    enunciado: "¿Qué importante centro cultural medieval facilitó la llegada de la polifonía francesa a España?",
    correcta: "El Camino de Santiago.",
    incorrectas: [
      "La Universidad de Salamanca.",
      "La Escuela de Traductores de Toledo."
    ]
  },
  {
    enunciado: "¿Qué son las 'Cantigas de Amigo'?",
    correcta: "Canciones líricas en voz femenina dirigidas a un amado o 'amigo'.",
    incorrectas: [
      "Cantos religiosos para el bautismo de adultos.",
      "Himnos de guerra compuestos por los templarios."
    ]
  },
  {
    enunciado: "Martín Codax es el autor de un famoso conjunto de siete:",
    correcta: "Cantigas de Amigo.",
    incorrectas: [
      "Cantigas de Santa María.",
      "Misas polifónicas."
    ]
  },
  {
    enunciado: "En el siglo XIV, la corte de la Corona de Aragón destacó por su conexión con:",
    correcta: "El Ars Nova francés y la corte de Aviñón.",
    incorrectas: [
      "La música folclórica del norte de África.",
      "La polifonía primitiva de las islas británicas."
    ]
  },
  {
    enunciado: "¿Qué instrumento de origen árabe se convirtió en el antecesor del laúd europeo tras entrar por España?",
    correcta: "Al-ud.",
    incorrectas: [
      "Aulós.",
      "Siringa."
    ]
  },
  {
    enunciado: "El 'Cant de la Sibil·la' se interpreta tradicionalmente en la noche de:",
    correcta: "Nochebuena (Misa del Gallo).",
    incorrectas: [
      "Jueves Santo.",
      "Pascua de Resurrección."
    ]
  },
  {
    enunciado: "¿Qué técnica polifónica, consistente en una voz que 'vuela' sobre otra, aparece en el Códice de las Huelgas?",
    correcta: "Hoquetus.",
    incorrectas: [
      "Bajo Continuo.",
      "Estilo Galante."
    ]
  },
  {
    enunciado: "La influencia de Al-Ándalus en la música española medieval se observa en:",
    correcta: "La organología (rabel, laúd) y en sistemas de ornamentación melódica.",
    incorrectas: [
      "La imposición de la polifonía a tres voces en las mezquitas.",
      "El uso del pentagrama antes que en el resto de Europa."
    ]
  },
  {
    enunciado: "¿Qué es una 'Cantiga de Escarnio y Maldecir'?",
    correcta: "Un género satírico y burlesco de la lírica galaico-portuguesa.",
    incorrectas: [
      "Un canto fúnebre para los reyes de Castilla.",
      "Una oración para pedir perdón por los pecados."
    ]
  },
  {
    enunciado: "El 'Códice de las Huelgas' contiene ejemplos de:",
    correcta: "Prosa, conductus, motetes y piezas de misa.",
    incorrectas: [
      "Solo música profana de trovadores.",
      "Solo dibujos de instrumentos sin música escrita."
    ]
  },
  {
    enunciado: "¿Qué sistema de notación utiliza el Llibre Vermell?",
    correcta: "Notación mensural (Ars Nova).",
    incorrectas: [
      "Neumas visigóticos.",
      "Tablatura de órgano."
    ]
  },
  {
    enunciado: "¿Quiénes eran las 'Soldadeiras' en el contexto de las Cantigas?",
    correcta: "Mujeres artistas, a menudo bailarinas o cantoras, que acompañaban a los trovadores.",
    incorrectas: [
      "Mujeres que fabricaban armaduras para los músicos.",
      "Monjas encargadas de copiar los códices."
    ]
  },
  {
    enunciado: "El 'Códice Calixtino' recibe su nombre del Papa:",
    correcta: "Calixto II.",
    incorrectas: [
      "Calixto III.",
      "Juan Pablo II."
    ]
  },
  {
    enunciado: "¿Qué instrumento medieval de teclado y tubos, que se colgaba del cuello, aparece en las miniaturas de las Cantigas?",
    correcta: "Órgano Portativo.",
    incorrectas: [
      "Clavecín.",
      "Zanfona."
    ]
  },
  {
    enunciado: "La 'Zanfona' es un instrumento de cuerda frotada por una rueda, muy vinculado en España a:",
    correcta: "La música de los juglares y mendigos del Camino de Santiago.",
    incorrectas: [
      "La liturgia solemne dentro de las catedrales.",
      "La música de cámara de los reyes de Aragón."
    ]
  },
  {
    enunciado: "El 'Rabel' es un instrumento de cuerda frotada de origen árabe (rebab) que destaca por:",
    correcta: "Su uso en el folclore pastoril y su sonoridad aguda.",
    incorrectas: [
      "Tener 47 cuerdas de metal.",
      "Ser el antecesor directo del piano de cola."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ductia'?",
    correcta: "Una danza medieval de ritmo marcado y rápido.",
    incorrectas: [
      "Un tipo de silencio de larga duración.",
      "La parte del coro donde se sientan los niños."
    ]
  },
  {
    enunciado: "La lírica galaico-portuguesa se considera:",
    correcta: "La continuación y adaptación peninsular del arte de los trovadores provenzales.",
    incorrectas: [
      "Un invento totalmente aislado sin influencias externas.",
      "La base rítmica de la ópera barroca."
    ]
  },
  {
    enunciado: "¿Qué catedral española fue pionera en la adopción del rito romano frente al mozárabe?",
    correcta: "Catedral de Jaca y San Juan de la Peña.",
    incorrectas: [
      "Mezquita de Córdoba.",
      "Catedral de Sevilla."
    ]
  },
  {
    enunciado: "En las miniaturas de las Cantigas de Alfonso X se representan:",
    correcta: "Músicos de las tres culturas (cristiana, judía y musulmana) tocando juntos.",
    incorrectas: [
      "Solo ángeles tocando arpas doradas.",
      "Esquemas matemáticos de la teoría de cuerdas."
    ]
  },
  {
    enunciado: "El 'Ad mortem festinamus' del Llibre Vermell es:",
    correcta: "Una danza de la muerte (Danse Macabre) con carácter moralizante.",
    incorrectas: [
      "Un canto de cuna muy dulce.",
      "Un himno de victoria tras una batalla."
    ]
  },
  {
    enunciado: "¿Qué es el 'Virelai' en el contexto del Llibre Vermell?",
    correcta: "Una forma poético-musical de origen francés aplicada a cantos de peregrinación.",
    incorrectas: [
      "Un tipo de comida que se daba a los peregrinos.",
      "El bastón que usaban para caminar."
    ]
  },
  {
    enunciado: "La 'Música Ficta' se aplicaba en los códices españoles para:",
    correcta: "Evitar intervalos prohibidos como el tritono mediante alteraciones no escritas.",
    incorrectas: [
      "Inventar melodías que no existían en el papel.",
      "Engañar al público haciendo que la música sonara más fuerte."
    ]
  },
  {
    enunciado: "¿Qué instrumento de percusión con sonajas es mencionado habitualmente en el medievo español?",
    correcta: "Pandero o adufo.",
    incorrectas: [
      "Xilófono.",
      "Timbal de orquesta."
    ]
  },
  {
    enunciado: "La 'Sinfonía' (Organistrum) medieval requería para ser tocada:",
    correcta: "Dos personas: una para girar la manivela y otra para pulsar las teclas.",
    incorrectas: [
      "Diez músicos soplando a la vez.",
      "Nadie, era un instrumento mecánico automático."
    ]
  },
  {
    enunciado: "El 'Perseverat' es un término que aparece en la polifonía española para indicar:",
    correcta: "La repetición o mantenimiento de una estructura rítmica.",
    incorrectas: [
      "Que el músico debe seguir tocando aunque el director se vaya.",
      "Un castigo para los cantores que desafinaban."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el manuscrito de la 'Capilla Real de Granada'?",
    correcta: "Es una fuente posterior pero que conserva vestigios del repertorio medieval tardío.",
    incorrectas: [
      "Contiene las primeras óperas de Mozart.",
      "Es un manual de afinación para guitarras eléctricas."
    ]
  },
  {
    enunciado: "El fin del estudio de la música medieval en España es:",
    correcta: "Valorar la Península como un espacio de intercambio cultural único entre Oriente y Occidente.",
    incorrectas: [
      "Demostrar que en España no se hacía música hasta el Renacimiento.",
      "Aprender a fabricar instrumentos con huesos de animales prehistóricos."
    ]
  }
];