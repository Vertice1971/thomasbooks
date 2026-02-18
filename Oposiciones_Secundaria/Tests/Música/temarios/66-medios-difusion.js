// 66-medios-difusion.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál fue el primer medio de comunicación masivo que permitió la escucha de música en el hogar a principios del siglo XX?",
    correcta: "La Radio.",
    incorrectas: [
      "La Televisión.",
      "El Cine sonoro."
    ]
  },
  {
    enunciado: "La 'Radiofórmula' es un modelo de programación basado en:",
    correcta: "La repetición sistemática de una lista de éxitos (playlist) o géneros específicos.",
    incorrectas: [
      "La emisión de óperas completas sin interrupciones.",
      "La lectura de partituras a través de las ondas."
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo la aparición de la televisión en la carrera de los artistas musicales?",
    correcta: "Potenció la importancia de la imagen y el carisma visual del intérprete.",
    incorrectas: [
      "Provocó que los músicos dejaran de grabar discos.",
      "Hizo que la música fuera solo para ser vista, eliminando el sonido."
    ]
  },
  {
    enunciado: "¿Qué es un 'Videoclip'?",
    correcta: "Un cortometraje musical creado para promocionar una canción y difundirla en medios audiovisuales.",
    incorrectas: [
      "Una noticia breve sobre un músico en la prensa escrita.",
      "Un pequeño instrumento de cuerda usado en televisión."
    ]
  },
  {
    enunciado: "¿Qué canal de televisión, nacido en 1981, convirtió al videoclip en el centro de la industria musical?",
    correcta: "MTV.",
    incorrectas: [
      "VH1.",
      "BBC Music."
    ]
  },
  {
    enunciado: "¿Qué es el 'Jingle' en la publicidad radiofónica y televisiva?",
    correcta: "Un mensaje musical corto y pegadizo que sirve para identificar un producto o marca.",
    incorrectas: [
      "El ruido de fondo que hace la radio cuando no está afinada.",
      "Un tipo de micrófono de gran tamaño usado en televisión."
    ]
  },
  {
    enunciado: "¿Qué función cumple la música en la publicidad?",
    correcta: "Ayuda a fijar el mensaje en la memoria y asocia valores emocionales a la marca.",
    incorrectas: [
      "Sirve para que el anuncio dure exactamente 10 minutos.",
      "Evita que el espectador escuche el nombre del producto."
    ]
  },
  {
    enunciado: "¿Qué es el 'Payola'?",
    correcta: "El pago ilegal a emisoras de radio para que una canción suene con más frecuencia.",
    incorrectas: [
      "Un tipo de danza tradicional de la radio.",
      "El nombre del primer locutor de radio musical."
    ]
  },
  {
    enunciado: "¿Qué papel ha jugado la Prensa Musical especializada (revistas y blogs)?",
    correcta: "Ha actuado como prescriptora de tendencias y espacio de crítica técnica y artística.",
    incorrectas: [
      "Es la encargada de fabricar el papel para las partituras.",
      "Se encarga de afinar los instrumentos de los grupos famosos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música de Librería' (Stock Music) en los medios de comunicación?",
    correcta: "Música pregrabada y catalogada para ser usada como fondo en programas o anuncios.",
    incorrectas: [
      "Música que se compone dentro de una biblioteca pública.",
      "Libros que suenan cuando abres sus páginas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Product Placement' musical?",
    correcta: "La inclusión de una marca o producto dentro de un videoclip de forma estratégica.",
    incorrectas: [
      "Colocar los discos en la parte más alta de la estantería.",
      "Vender guitarras a la salida de los estudios de TV."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el 'Rating' o audiencia para un programa musical?",
    correcta: "Determina su viabilidad económica y el coste de su publicidad.",
    incorrectas: [
      "Indica la afinación media de los cantantes del programa.",
      "Es el peso total del equipo técnico de televisión."
    ]
  },
  {
    enunciado: "¿Qué es la 'Sincronización'?",
    correcta: "El uso de una obra musical preexistente en una película, serie o anuncio publicitario.",
    incorrectas: [
      "Que el cantante y el batería empiecen a la vez.",
      "Ajustar los relojes de todos los músicos de la orquesta."
    ]
  },
  {
    enunciado: "¿Qué fenómeno mediático actual ha sustituido en gran parte a la radiofórmula tradicional?",
    correcta: "Las listas de reproducción (playlists) en plataformas de streaming.",
    incorrectas: [
      "El telégrafo musical.",
      "Los conciertos a través de cartas postales."
    ]
  },
  {
    enunciado: "¿Qué es un 'Lyric Video'?",
    correcta: "Un video musical centrado en mostrar la letra de la canción de forma artística.",
    incorrectas: [
      "Un video donde el cantante no abre la boca.",
      "Una entrevista sobre la poesía en la música."
    ]
  },
  {
    enunciado: "¿Qué papel juegan las Redes Sociales en la difusión musical actual?",
    correcta: "Permiten la viralidad inmediata y la interacción directa entre el artista y el público.",
    incorrectas: [
      "Son programas para aprender a fabricar instrumentos de madera.",
      "Han prohibido el uso de la música en internet."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música de consumo' en los medios de comunicación?",
    correcta: "Música diseñada para ser fácilmente asimilada por el gran público y generar ventas rápidas.",
    incorrectas: [
      "Música que se puede comer físicamente.",
      "Música que solo se escucha mientras se cena."
    ]
  },
  {
    enunciado: "¿Qué es el 'Hit'?",
    correcta: "Una canción que alcanza un gran éxito comercial y de audiencia en los medios.",
    incorrectas: [
      "Un golpe fuerte que se da al bombo.",
      "El nombre técnico de la pausa entre canciones."
    ]
  },
  {
    enunciado: "¿Qué es un 'Influencer' musical?",
    correcta: "Persona que, a través de medios digitales, condiciona los gustos musicales de sus seguidores.",
    incorrectas: [
      "Un músico que tiene la gripe.",
      "Un tipo de amplificador muy potente."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sound Logo' (Logo sonoro)?",
    correcta: "Una melodía muy breve que identifica visualmente a una marca (ej. Intel o Netflix).",
    incorrectas: [
      "Un dibujo que suena cuando lo tocas.",
      "El nombre de la empresa escrito con notas musicales."
    ]
  },
  {
    enunciado: "¿Qué es la 'Prensa Amarilla' en la música?",
    correcta: "Publicaciones que se centran en la vida privada de los músicos más que en su obra artística.",
    incorrectas: [
      "Revistas que solo se imprimen en papel de color amarillo.",
      "Libros de teoría musical muy antiguos."
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo la radio en la música clásica?",
    correcta: "Permitió que grandes obras llegaran a personas que no podían asistir a los teatros.",
    incorrectas: [
      "Hizo que las sinfonías tuvieran que durar máximo 3 minutos.",
      "Prohibió el uso de instrumentos de cuerda en las emisiones."
    ]
  },
  {
    enunciado: "¿Qué es el 'Podcast' musical?",
    correcta: "Contenido de audio bajo demanda que permite análisis profundos o programas temáticos.",
    incorrectas: [
      "Un tipo de altavoz inalámbrico.",
      "La antena de una emisora de radio."
    ]
  },
  {
    enunciado: "¿Qué es el 'Marketing Viral'?",
    correcta: "Estrategias que buscan que los usuarios compartan un contenido musical de forma masiva en la red.",
    incorrectas: [
      "Música que se compone para curar enfermedades.",
      "Vender discos en los hospitales."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Imagen de Marca' de un artista en los medios?",
    correcta: "Es fundamental para crear una identidad que el público pueda reconocer y consumir.",
    incorrectas: [
      "Es el dibujo que el músico se hace en la cara.",
      "Es el nombre del fabricante de su instrumento."
    ]
  },
  {
    enunciado: "¿Qué es la 'Música Diegética' en un programa de televisión?",
    correcta: "Aquella que los personajes pueden oír porque forma parte de la escena.",
    incorrectas: [
      "Música que suena solo en los créditos finales.",
      "El sonido de las risas enlatadas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Teaser' musical?",
    correcta: "Un avance muy corto de una canción o video para generar expectativa.",
    incorrectas: [
      "Un tipo de flauta muy pequeña.",
      "El estuche de transporte de una mesa de mezclas."
    ]
  },
  {
    enunciado: "¿Cómo influye la radio en la estandarización del gusto musical?",
    correcta: "Al emitir los mismos éxitos de forma global, tiende a uniformar lo que el público consume.",
    incorrectas: [
      "Haciendo que cada persona escuche una nota diferente.",
      "Obligando a los músicos a vivir todos en la misma ciudad."
    ]
  },
  {
    enunciado: "¿Qué es la 'Audición Pasiva' en los medios de comunicación?",
    correcta: "Cuando la música suena de fondo mientras el oyente realiza otra actividad sin prestarle atención.",
    incorrectas: [
      "Escuchar música sentado sin moverse nada.",
      "No oír nada porque la radio está apagada."
    ]
  },
  {
    enunciado: "¿Qué es el 'Streaming'?",
    correcta: "La distribución de audio o video a través de internet de forma continua y sin descarga previa.",
    incorrectas: [
      "Un tipo de micrófono que se sumerge en el agua.",
      "Cantar mientras se corre una maratón."
    ]
  },
  {
    enunciado: "¿Qué función tiene la música en un Telediario o programa de noticias?",
    correcta: "Da seriedad, dinamismo y sirve de separación entre las diferentes secciones.",
    incorrectas: [
      "Hacer que las noticias parezcan una película de comedia.",
      "Sustituir la voz del presentador por canciones."
    ]
  },
  {
    enunciado: "¿Qué es el 'Crossover' en la difusión mediática?",
    correcta: "Cuando un artista de un género específico (ej. clásica) alcanza éxito en las listas de pop.",
    incorrectas: [
      "Cruzar los cables de los altavoces por error.",
      "Cambiar de canal de televisión muy rápido."
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo el 'Walkman' en la difusión musical?",
    correcta: "Permitió que la música de los medios fuera portátil e individual por primera vez.",
    incorrectas: [
      "Hizo que los altavoces de casa fueran gigantes.",
      "Hizo que la música solo se pudiera escuchar caminando."
    ]
  },
  {
    enunciado: "¿Qué es la 'Globalización' sonora?",
    correcta: "La difusión universal de los mismos contenidos musicales gracias a los medios de comunicación globales.",
    incorrectas: [
      "Que el planeta tierra emite un sonido constante.",
      "La obligación de que todos los músicos hablen inglés."
    ]
  },
  {
    enunciado: "¿Qué es el 'Live Streaming' de conciertos?",
    correcta: "La emisión en directo de una actuación a través de plataformas digitales.",
    incorrectas: [
      "Grabar un concierto y guardarlo en un cajón.",
      "Un concierto que se hace en un barco en movimiento."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Algoritmo' en la difusión musical actual?",
    correcta: "Decide qué música recomendar a cada usuario basándose en sus hábitos de escucha.",
    incorrectas: [
      "Afila las notas de las canciones que suenan desafinadas.",
      "Elimina las canciones que duran más de un minuto."
    ]
  },
  {
    enunciado: "¿Qué es el 'Spot' publicitario?",
    correcta: "Un anuncio breve en radio o televisión donde la música es un elemento clave de persuasión.",
    incorrectas: [
      "El foco de luz que ilumina al cantante.",
      "Una mancha de tinta en una partitura."
    ]
  },
  {
    enunciado: "¿Qué es la 'Identidad Sonora' de una cadena de televisión?",
    correcta: "El conjunto de sonidos y ráfagas musicales que permiten reconocer el canal sin verlo.",
    incorrectas: [
      "El nombre del director de la televisión.",
      "El ruido que hacen las cámaras al grabar."
    ]
  },
  {
    enunciado: "¿Qué es el 'Bumper' musical?",
    correcta: "Una pieza musical muy corta que separa el contenido del programa de la publicidad.",
    incorrectas: [
      "Un tipo de coche que usan los músicos en las giras.",
      "El protector de plástico de los micrófonos."
    ]
  },
  {
    enunciado: "El estudio de la música en los medios permite comprender:",
    correcta: "Cómo el canal de comunicación modifica la percepción y la función social de la obra musical.",
    incorrectas: [
      "Cómo se fabrican las antenas de televisión.",
      "La biografía de todos los locutores de radio del mundo."
    ]
  }
];