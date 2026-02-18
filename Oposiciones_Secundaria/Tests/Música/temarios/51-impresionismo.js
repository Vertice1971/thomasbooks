// 51-impresionismo.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué país fue la cuna del Impresionismo musical y qué ciudad su centro neurálgico?",
    correcta: "Francia (París).",
    incorrectas: [
      "Alemania (Berlín).",
      "Italia (Roma)."
    ]
  },
  {
    enunciado: "¿Qué compositor es considerado el máximo representante y pionero del Impresionismo musical?",
    correcta: "Claude Debussy.",
    incorrectas: [
      "Richard Wagner.",
      "Johannes Brahms."
    ]
  },
  {
    enunciado: "El Impresionismo musical toma su nombre de una corriente de:",
    correcta: "La pintura (liderada por Monet).",
    incorrectas: [
      "La arquitectura gótica.",
      "La literatura épica medieval."
    ]
  },
  {
    enunciado: "¿Cuál es el elemento musical más importante para los compositores impresionistas?",
    correcta: "El timbre (el color del sonido).",
    incorrectas: [
      "El desarrollo contrapuntístico complejo.",
      "La estructura rígida de la forma sonata."
    ]
  },
  {
    enunciado: "¿Qué obra de Debussy (1894) se considera el punto de partida oficial de la música moderna?",
    correcta: "Preludio a la siesta de un fauno.",
    incorrectas: [
      "La consagración de la primavera.",
      "El mar."
    ]
  },
  {
    enunciado: "¿Qué escala, que divide la octava en seis partes iguales, es típica de la sonoridad de Debussy?",
    correcta: "Escala de tonos enteros (hexatónica).",
    incorrectas: [
      "Escala mayor diatónica.",
      "Escala cromática de doce notas."
    ]
  },
  {
    enunciado: "La armonía impresionista se caracteriza por:",
    correcta: "El uso de acordes por su color, con quintas y octavas paralelas y séptimas sin resolver.",
    incorrectas: [
      "La vuelta al bajo continuo barroco.",
      "El uso exclusivo de acordes de tónica y dominante."
    ]
  },
  {
    enunciado: "¿Qué exposición universal en París (1889) influyó en Debussy al descubrir las músicas orientales?",
    correcta: "La Exposición Universal de París.",
    incorrectas: [
      "La Feria del Libro de Madrid.",
      "La Bienal de Venecia."
    ]
  },
  {
    enunciado: "¿Qué conjunto instrumental indonesio fascinó a los impresionistas por sus escalas y texturas?",
    correcta: "Gamelán.",
    incorrectas: [
      "Mariachi.",
      "Sitar y Tabla."
    ]
  },
  {
    enunciado: "¿Cuál es la principal obra orquestal de Debussy que evoca el movimiento del agua?",
    correcta: "La Mer (El Mar).",
    incorrectas: [
      "Jeux.",
      "Images."
    ]
  },
  {
    enunciado: "¿Qué compositor francés, a menudo asociado al impresionismo, destacó por su precisión técnica y su maestría en la orquestación?",
    correcta: "Maurice Ravel.",
    incorrectas: [
      "Gabriel Fauré.",
      "Camille Saint-Saëns."
    ]
  },
  {
    enunciado: "El 'Bolero' de Ravel es un ejercicio magistral de:",
    correcta: "Crescendo orquestal y variedad tímbrica sobre un ritmo obstinado.",
    incorrectas: [
      "Polifonía vocal a 12 voces.",
      "Desarrollo temático basado en la fuga."
    ]
  },
  {
    enunciado: "¿Qué escala de origen antiguo fue recuperada por los impresionistas para dar un sabor arcaico a su música?",
    correcta: "Escala Pentatónica y modos eclesiásticos.",
    incorrectas: [
      "Escala menor armónica.",
      "Escala de blues."
    ]
  },
  {
    enunciado: "¿Qué es el 'Paralelismo' en la armonía impresionista?",
    correcta: "Mover bloques de acordes (tríadas, séptimas) manteniendo la misma distancia entre voces.",
    incorrectas: [
      "Que los músicos caminen en línea recta mientras tocan.",
      "Tocar siempre dos notas al unísono."
    ]
  },
  {
    enunciado: "En la música de piano de Debussy, el uso del pedal de resonancia sirve para:",
    correcta: "Crear una 'neblina' sonora donde las armonías se funden.",
    incorrectas: [
      "Hacer que el piano suene más corto y seco.",
      "Cambiar la afinación de las cuerdas."
    ]
  },
  {
    enunciado: "¿Qué compositor español recibió una fuerte influencia del impresionismo francés en obras como 'Noches en los jardines de España'?",
    correcta: "Manuel de Falla.",
    incorrectas: [
      "Tomás Luis de Victoria.",
      "Juan del Encina."
    ]
  },
  {
    enunciado: "¿Qué obra para piano de Ravel evoca el sonido de una fuente de agua?",
    correcta: "Jeux d'eau.",
    incorrectas: [
      "Pavana para una infanta difunta.",
      "Gaspard de la nuit."
    ]
  },
  {
    enunciado: "¿Qué corriente literaria francesa, con autores como Mallarmé o Verlaine, está íntimamente ligada al impresionismo?",
    correcta: "Simbolismo.",
    incorrectas: [
      "Realismo.",
      "Neoclasicismo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Melodía de timbres' (Klangfarbenmelodie) que empezó a asomar con el impresionismo?",
    correcta: "Una melodía cuya línea se reparte entre diferentes instrumentos para cambiar su color constantemente.",
    incorrectas: [
      "Cantar solo notas de color azul.",
      "Un tipo de xilófono de cristal."
    ]
  },
  {
    enunciado: "¿Qué ópera de Debussy rompió con el modelo de ópera tradicional y wagneriano?",
    correcta: "Peleas y Melisande.",
    incorrectas: [
      "Carmen.",
      "Tristán e Isolda."
    ]
  },
  {
    enunciado: "Ravel compuso el 'Concierto para la mano izquierda' para un pianista que perdió su brazo derecho en la guerra llamado:",
    correcta: "Paul Wittgenstein.",
    incorrectas: [
      "Glenn Gould.",
      "Arthur Rubinstein."
    ]
  },
  {
    enunciado: "La pieza 'Claro de Luna' pertenece a qué suite de Debussy?",
    correcta: "Suite bergamasque.",
    incorrectas: [
      "Children's Corner.",
      "Estampes."
    ]
  },
  {
    enunciado: "¿Qué instrumento de madera adquiere una importancia vital en el impresionismo por su capacidad evocadora?",
    correcta: "La Flauta travesera y el Corno Inglés.",
    incorrectas: [
      "El Trombón.",
      "Los Timbales."
    ]
  },
  {
    enunciado: "¿Qué es el 'Arpa' en la orquesta impresionista?",
    correcta: "Un instrumento esencial para crear texturas de ensueño y glissandos.",
    incorrectas: [
      "Un instrumento que solo se usa para marcar el ritmo.",
      "Un instrumento prohibido por Debussy."
    ]
  },
  {
    enunciado: "Ravel es autor de una famosa orquestación de una obra para piano de Músorgski:",
    correcta: "Cuadros de una exposición.",
    incorrectas: [
      "Una noche en el monte pelado.",
      "Boris Godunov."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al ritmo en el impresionismo?",
    correcta: "Suele ser vago, fluido y con frecuencia evita las acentuaciones fuertes.",
    incorrectas: [
      "Es un ritmo de motor constante y muy marcado.",
      "No existe el ritmo, solo el ruido blanco."
    ]
  },
  {
    enunciado: "¿Qué compositor inglés adaptó el lenguaje impresionista a su estilo nacional?",
    correcta: "Frederick Delius.",
    incorrectas: [
      "Edward Elgar.",
      "Henry Purcell."
    ]
  },
  {
    enunciado: "¿Qué es 'Gaspard de la nuit' de Ravel?",
    correcta: "Un tríptico para piano de extrema dificultad técnica basado en poemas de Aloysius Bertrand.",
    incorrectas: [
      "Una ópera cómica sobre un fantasma.",
      "Un método de canto para niños."
    ]
  },
  {
    enunciado: "En el impresionismo, la forma musical tiende a ser:",
    correcta: "Libre y orgánica, huyendo de los esquemas preestablecidos.",
    incorrectas: [
      "Estrictamente basada en la forma sonata clásica.",
      "Una repetición infinita de la misma nota."
    ]
  },
  {
    enunciado: "¿Qué es la escala 'Exótica'?",
    correcta: "Cualquier escala no occidental (como la de pelog o slendro) usada para evocar lugares lejanos.",
    incorrectas: [
      "La escala de Do Mayor sin alteraciones.",
      "Un tipo de escalera de madera para subir al escenario."
    ]
  },
  {
    enunciado: "¿Qué pieza orquestal de Ravel evoca un amanecer y es parte de un ballet?",
    correcta: "Daphnis et Chloé.",
    incorrectas: [
      "La Valse.",
      "Ma mère l'Oye."
    ]
  },
  {
    enunciado: "Erik Satie, precursor del impresionismo y las vanguardias, es famoso por sus:",
    correcta: "Gymnopédies.",
    incorrectas: [
      "Sinfonías heroicas.",
      "Óperas de diez horas."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los títulos de las obras impresionistas?",
    correcta: "Son sugerentes y descriptivos (ej. Pasos sobre la nieve, Nubes).",
    incorrectas: [
      "Son solo números de catálogo (Opus 1, Opus 2).",
      "No tienen títulos, solo nombres de planetas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Puntillismo' tímbrico?",
    correcta: "Uso de notas breves y aisladas que crean una textura de 'puntos' de color.",
    incorrectas: [
      "Pintar la partitura con puntos de colores.",
      "Afinar los instrumentos con un punzón."
    ]
  },
  {
    enunciado: "La obra 'L'isle joyeuse' de Debussy está inspirada en una pintura de:",
    correcta: "Watteau (Embarque para Citerea).",
    incorrectas: [
      "Monet.",
      "Picasso."
    ]
  },
  {
    enunciado: "En la orquesta de Ravel, el uso del Saxofón aparece de forma destacada en:",
    correcta: "El Bolero.",
    incorrectas: [
      "La tumba de Couperin.",
      "Pavana para una infanta difunta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Acorde de Novena' en el impresionismo?",
    correcta: "Un acorde muy utilizado que aporta una sonoridad rica y ambigua.",
    incorrectas: [
      "Un acorde que está prohibido usar.",
      "Un acorde que solo se toca con nueve dedos."
    ]
  },
  {
    enunciado: "¿Qué compositor polaco fusionó el nacionalismo con el impresionismo francés?",
    correcta: "Karol Szymanowski.",
    incorrectas: [
      "Frédéric Chopin.",
      "Witold Lutosławski."
    ]
  },
  {
    enunciado: "El impresionismo musical termina diluyéndose tras la Primera Guerra Mundial con la aparición de:",
    correcta: "El Neoclasicismo y la Nueva Objetividad.",
    incorrectas: [
      "El Canto Gregoriano.",
      "La música disco."
    ]
  },
  {
    enunciado: "¿Qué es la 'Vaga tonalidad'?",
    correcta: "Cuando la música no abandona totalmente la tonalidad pero sus centros no son claros.",
    incorrectas: [
      "Cuando los músicos tocan sin ver la partitura.",
      "Tocar en una tonalidad que no existe."
    ]
  }
];