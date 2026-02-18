// 48-vocal-romantica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué género vocal breve, que une música y poesía para voz y piano, es el más representativo del Romanticismo alemán?",
    correcta: "El Lied.",
    incorrectas: [
      "La Cantata de iglesia.",
      "El Madrigal espiritual."
    ]
  },
  {
    enunciado: "¿Qué compositor es considerado el creador del Lied moderno, autor de ciclos como 'La bella molinera'?",
    correcta: "Franz Schubert.",
    incorrectas: [
      "Ludwig van Beethoven.",
      "Johannes Brahms."
    ]
  },
  {
    enunciado: "En un Lied, el papel del piano es:",
    correcta: "Igual de importante que la voz, actuando como un intérprete del poema y no solo como acompañante.",
    incorrectas: [
      "Secundario, limitándose a dar los acordes básicos.",
      "Inexistente, ya que el Lied es siempre a capella."
    ]
  },
  {
    enunciado: "¿Qué compositora, hermana de Felix Mendelssohn, compuso numerosos Lieder de gran calidad a pesar de las limitaciones sociales de su época?",
    correcta: "Fanny Mendelssohn.",
    incorrectas: [
      "Clara Schumann.",
      "Alma Mahler."
    ]
  },
  {
    enunciado: "¿Qué ciclo de canciones de Schubert narra el viaje desesperado de un amante rechazado a través de un paisaje invernal?",
    correcta: "Viaje de invierno (Winterreise).",
    incorrectas: [
      "Amor de poeta.",
      "El canto del cisne."
    ]
  },
  {
    enunciado: "Robert Schumann compuso la mayoría de sus grandes Lieder en 1840, año conocido como el:",
    correcta: "Año de los Lieder (Liederjahr).",
    incorrectas: [
      "Siglo de las luces.",
      "Otoño musical."
    ]
  },
  {
    enunciado: "¿Qué es el 'Lied estrófico'?",
    correcta: "Aquel que utiliza la misma música para todas las estrofas del poema.",
    incorrectas: [
      "Aquel donde cada verso tiene una melodía totalmente diferente.",
      "Una canción que solo tiene una estrofa muy larga."
    ]
  },
  {
    enunciado: "¿Qué compositor francés llevó el género de la canción a su máxima expresión con sus 'Mélodies'?",
    correcta: "Gabriel Fauré.",
    incorrectas: [
      "Claude Debussy.",
      "Hector Berlioz."
    ]
  },
  {
    enunciado: "¿Qué autor italiano es el máximo representante de la ópera romántica, autor de 'La Traviata' y 'Aida'?",
    correcta: "Giuseppe Verdi.",
    incorrectas: [
      "Giacomo Puccini.",
      "Gioachino Rossini."
    ]
  },
  {
    enunciado: "El 'Bel Canto' de principios del XIX (Rossini, Bellini, Donizetti) se centraba en:",
    correcta: "La belleza de la línea melódica, el virtuosismo y la agilidad vocal.",
    incorrectas: [
      "El uso de gritos y ruidos guturales.",
      "La importancia de la orquesta por encima de los cantantes."
    ]
  },
  {
    enunciado: "¿Qué ópera de Rossini es una de las cumbres de la ópera buffa romántica?",
    correcta: "El barbero de Sevilla.",
    incorrectas: [
      "Norma.",
      "Lucia di Lammermoor."
    ]
  },
  {
    enunciado: "¿Qué concepto desarrolló Richard Wagner para definir su idea de obra de arte total?",
    correcta: "Gesamtkunstwerk.",
    incorrectas: [
      "Sprechgesang.",
      "Leitmotiv."
    ]
  },
  {
    enunciado: "¿Qué es el 'Leitmotiv' en la ópera wagneriana?",
    correcta: "Un motivo musical asociado a un personaje, objeto o idea que reaparece y se transforma.",
    incorrectas: [
      "El traje que usa el tenor principal.",
      "La batuta con la que dirige el director."
    ]
  },
  {
    enunciado: "La tetralogía de Wagner que dura unas 15 horas en total se titula:",
    correcta: "El anillo del Nibelungo.",
    incorrectas: [
      "Parsifal.",
      "Los maestros cantores de Núremberg."
    ]
  },
  {
    enunciado: "A diferencia de la ópera italiana, Wagner utilizaba la 'Melodía infinita', que consiste en:",
    correcta: "Evitar las interrupciones entre recitativo y aria, creando un flujo musical continuo.",
    incorrectas: [
      "Cantar una sola nota durante todo el acto.",
      "Una canción que no tiene final y el público debe irse mientras sigue sonando."
    ]
  },
  {
    enunciado: "¿Qué teatro fue construido específicamente por Wagner para la representación de sus obras?",
    correcta: "El Festspielhaus de Bayreuth.",
    incorrectas: [
      "La Scala de Milán.",
      "El Metropolitan de Nueva York."
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el estilo de Verdi en su periodo medio, con temas de fuerte carga política y social?",
    correcta: "Risorgimento.",
    incorrectas: [
      "Rococó.",
      "Impresionismo."
    ]
  },
  {
    enunciado: "El 'Coro de los esclavos' (Va, pensiero) pertenece a la ópera de Verdi:",
    correcta: "Nabucco.",
    incorrectas: [
      "Rigoletto.",
      "Otello."
    ]
  },
  {
    enunciado: "¿Qué es el 'Verismo'?",
    correcta: "Una corriente operística de finales del XIX que trata temas realistas, crudos y de clases populares.",
    incorrectas: [
      "Un estilo que solo utiliza la verdad histórica absoluta.",
      "La obligación de cantar sin usar pelucas."
    ]
  },
  {
    enunciado: "¿Qué compositor es el autor de 'La Bohème', 'Tosca' y 'Madama Butterfly'?",
    correcta: "Giacomo Puccini.",
    incorrectas: [
      "Ruggero Leoncavallo.",
      "Pietro Mascagni."
    ]
  },
  {
    enunciado: "¿Qué ópera de Puccini quedó inacabada a su muerte y contiene el famoso aria 'Nessun dorma'?",
    correcta: "Turandot.",
    incorrectas: [
      "Manon Lescaut.",
      "Gianni Schicchi."
    ]
  },
  {
    enunciado: "El 'Grand Opéra' francés se caracteriza por:",
    correcta: "Cinco actos, grandes coros, ballet obligatorio y escenografías espectaculares.",
    incorrectas: [
      "Ser óperas para una sola voz y un tambor.",
      "Tratarse de obras que solo duran media hora."
    ]
  },
  {
    enunciado: "¿Qué obra de Georges Bizet revolucionó la ópera francesa por su realismo y ambiente español?",
    correcta: "Carmen.",
    incorrectas: [
      "Fausto.",
      "Los cuentos de Hoffmann."
    ]
  },
  {
    enunciado: "¿Qué es una 'Opereta'?",
    correcta: "Un género satírico y ligero que alterna partes cantadas y habladas, muy popular en París y Viena.",
    incorrectas: [
      "Una ópera muy pequeña que se toca dentro de una caja.",
      "El nombre que recibe el programa de mano del teatro."
    ]
  },
  {
    enunciado: "¿Quién es el rey de la opereta vienesa, autor de 'El murciélago'?",
    correcta: "Johann Strauss hijo.",
    incorrectas: [
      "Jacques Offenbach.",
      "Franz Lehár."
    ]
  },
  {
    enunciado: "En la música religiosa romántica, el 'Réquiem' de Brahms destaca por:",
    correcta: "No usar el texto latino de la misa de difuntos, sino textos bíblicos en alemán.",
    incorrectas: [
      "Ser una obra para ser bailada por el coro.",
      "Usar guitarras eléctricas para dar miedo."
    ]
  },
  {
    enunciado: "¿Qué compositor romántico escribió el monumental 'Réquiem' (Messa da Requiem) dedicado a Manzoni?",
    correcta: "Giuseppe Verdi.",
    incorrectas: [
      "Gabriel Fauré.",
      "Anton Bruckner."
    ]
  },
  {
    enunciado: "¿Qué es el 'Sprechgesang' (precursor del siglo XX pero con raíces románticas)?",
    correcta: "Un estilo de canto que está a medio camino entre el habla y el canto entonado.",
    incorrectas: [
      "Cantar mientras se salta de un lado a otro del escenario.",
      "Cantar solo con la boca cerrada."
    ]
  },
  {
    enunciado: "La voz de 'Tenor Heroico' (Heldentenor) es típica de la ópera de:",
    correcta: "Richard Wagner.",
    incorrectas: [
      "Wolfgang Amadeus Mozart.",
      "Gioachino Rossini."
    ]
  },
  {
    enunciado: "¿Qué es un 'Oratorio' romántico como 'Elías' de Mendelssohn?",
    correcta: "Una obra dramática religiosa para solistas, coro y orquesta, sin representación escénica.",
    incorrectas: [
      "Un pequeño lugar donde los músicos van a rezar antes del concierto.",
      "Una canción corta para voz sola sin acompañamiento."
    ]
  },
  {
    enunciado: "Modest Músorgski representó el nacionalismo ruso en la ópera con:",
    correcta: "Boris Godunov.",
    incorrectas: [
      "El caballero de la rosa.",
      "Carmen."
    ]
  },
  {
    enunciado: "El 'Colorismo' en la ópera de finales del XIX busca:",
    correcta: "Evocar ambientes exóticos y lejanos (Orientalismo) a través de la orquestación.",
    incorrectas: [
      "Pintar las caras de los cantantes de diferentes colores.",
      "Que cada instrumento use una partitura de un color distinto."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Piano' en los ciclos de Lieder de Hugo Wolf?",
    correcta: "Alcanza una complejidad casi sinfónica, comentando cada palabra del texto.",
    incorrectas: [
      "Se limita a tocar solo tres notas de principio a fin.",
      "El piano desaparece y es sustituido por una armónica."
    ]
  },
  {
    enunciado: "¿Qué es el 'Dramma lirico'?",
    correcta: "Un tipo de ópera italiana del XIX que busca un mayor equilibrio entre música y poesía.",
    incorrectas: [
      "Una obra donde el protagonista llora durante toda la función.",
      "Una danza fúnebre para diez cantantes."
    ]
  },
  {
    enunciado: "El final de la ópera romántica se asocia a menudo con la muerte de Puccini y el estreno de:",
    correcta: "Turandot (1926).",
    incorrectas: [
      "La flauta mágica.",
      "West Side Story."
    ]
  },
  {
    enunciado: "¿Qué es una 'Romanza'?",
    correcta: "Un aria de carácter tierno, sentimental y estructura sencilla.",
    incorrectas: [
      "Un idioma que hablaban los músicos en Roma.",
      "Un tipo de arpa con cuerdas de seda."
    ]
  },
  {
    enunciado: "Gustav Mahler unió el Lied y la Sinfonía en obras como:",
    correcta: "La canción de la tierra (Das Lied von der Erde).",
    incorrectas: [
      "El Mesías.",
      "Las cuatro estaciones."
    ]
  },
  {
    enunciado: "¿Qué característica define al 'Tenor de gracia' en la ópera de Rossini?",
    correcta: "Voz ligera, muy ágil en el registro agudo y capaz de grandes ornamentaciones.",
    incorrectas: [
      "Voz muy grave y potente que asusta al público.",
      "Un tenor que no canta, solo hace malabares."
    ]
  },
  {
    enunciado: "La ópera 'Tristán e Isolda' de Wagner es famosa por su acorde inicial, que simboliza:",
    correcta: "La ruptura definitiva de las reglas de la armonía tonal tradicional.",
    incorrectas: [
      "El sonido de un barco llegando al puerto.",
      "El bostezo de un gigante."
    ]
  },
  {
    enunciado: "El estudio de la música vocal romántica permite entender:",
    correcta: "La exaltación máxima de la emoción humana a través de la unión de palabra y sonido.",
    incorrectas: [
      "Cómo se construían los teatros con ladrillos de barro.",
      "El origen biológico de las cuerdas vocales en los animales."
    ]
  }
];