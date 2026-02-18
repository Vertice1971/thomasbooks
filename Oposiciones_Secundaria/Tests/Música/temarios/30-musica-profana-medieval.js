// 30-musica-profana-medieval.js

var PREGUNTAS = [
  {
    enunciado: "¿Quiénes eran los 'Trovadores' (Troubadours) surgidos en el siglo XI?",
    correcta: "Poetas-músicos de la nobleza que componían en lengua de oc (sur de Francia).",
    incorrectas: [
      "Monjes que escapaban de los monasterios para cantar en latín.",
      "Músicos ambulantes que solo tocaban instrumentos de percusión."
    ]
  },
  {
    enunciado: "¿En qué lengua componían los 'Troveros' (Trouvères) del norte de Francia?",
    correcta: "Lengua de oïl.",
    incorrectas: [
      "Latín clásico.",
      "Alemán antiguo."
    ]
  },
  {
    enunciado: "La temática principal de la lírica trovadoresca era el 'Fin'amors', que se traduce como:",
    correcta: "Amor cortés: un amor idealizado y a menudo imposible hacia una dama.",
    incorrectas: [
      "Amor a la patria y a las conquistas militares únicamente.",
      "Cantos dedicados exclusivamente a la Virgen María."
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental existía entre un trovador y un 'Juglar'?",
    correcta: "El trovador era el creador (autor); el juglar era el intérprete errante que solía ejecutar las obras de otros.",
    incorrectas: [
      "El juglar era noble y el trovador pertenecía al pueblo llano.",
      "El trovador solo cantaba en latín y el juglar en lenguas romances."
    ]
  },
  {
    enunciado: "Los 'Goliardos' eran:",
    correcta: "Estudiantes o clérigos vagabundos que cantaban al vino, al azar y al amor carnal en latín.",
    incorrectas: [
      "Fabricantes de laúdes y flautas de madera.",
      "Caballeros que participaban en las Cruzadas componiendo himnos de guerra."
    ]
  },
  {
    enunciado: "¿Cuál es la colección más famosa de cantos goliardos, encontrada en un monasterio bávaro?",
    correcta: "Carmina Burana.",
    incorrectas: [
      "Códice Calixtino.",
      "Cantigas de Santa María."
    ]
  },
  {
    enunciado: "En Alemania, los poetas-músicos equivalentes a los trovadores se denominaban:",
    correcta: "Minnesinger.",
    incorrectas: [
      "Meistersinger.",
      "Goliardos."
    ]
  },
  {
    enunciado: "¿Cuál es la estructura formal más común de las canciones de los trovadores?",
    correcta: "Forma 'Bar' (AAB).",
    incorrectas: [
      "Forma Sonata.",
      "Rondó francés."
    ]
  },
  {
    enunciado: "La 'Estampida' (Estampie) es una forma musical medieval destinada a:",
    correcta: "La danza instrumental.",
    incorrectas: [
      "El rezo en las catedrales.",
      "El entrenamiento militar de los escuderos."
    ]
  },
  {
    enunciado: "¿Qué instrumento de cuerda frotada, antecesor del violín, era muy usado por los juglares?",
    correcta: "Fídula o vihuela de arco.",
    incorrectas: [
      "Clavicordio.",
      "Piano de mesa."
    ]
  },
  {
    enunciado: "La 'Cansó' era el género trovadoresco dedicado a:",
    correcta: "El amor cortés.",
    incorrectas: [
      "La sátira política.",
      "El llanto por la muerte de un señor."
    ]
  },
  {
    enunciado: "El 'Sirventés' se caracteriza por ser un género de contenido:",
    correcta: "Sátira, política o moral, expresando las opiniones del trovador.",
    incorrectas: [
      "Puramente religioso y místico.",
      "Canto de cuna para niños nobles."
    ]
  },
  {
    enunciado: "¿Qué es una 'Pastorela'?",
    correcta: "Un género que narra el encuentro entre un caballero y una pastora.",
    incorrectas: [
      "Una danza que se baila con ovejas en el campo.",
      "Un canto de iglesia sobre el nacimiento de Jesús."
    ]
  },
  {
    enunciado: "¿Quién fue el primer trovador de nombre conocido?",
    correcta: "Guillermo IX de Aquitania.",
    incorrectas: [
      "Adam de la Halle.",
      "Ricardo Corazón de León."
    ]
  },
  {
    enunciado: "Las 'Trobairitz' eran:",
    correcta: "Mujeres trovadoras que también componían poesía y música.",
    incorrectas: [
      "Instrumentos de viento fabricados por los trovadores.",
      "Las esposas de los juglares que vendían comida en los mercados."
    ]
  },
  {
    enunciado: "El 'Jeu de Robin et Marion' de Adam de la Halle es considerado:",
    correcta: "Un antecedente lejano de la ópera cómica o teatro musical profano.",
    incorrectas: [
      "Un tratado sobre la caza del jabalí.",
      "Una misa polifónica dedicada a los campesinos."
    ]
  },
  {
    enunciado: "En la Península Ibérica, la influencia trovadoresca dio lugar a las:",
    correcta: "Cantigas de amigo y cantigas de escarnio.",
    incorrectas: [
      "Óperas flamencas.",
      "Sinfonías castellanas."
    ]
  },
  {
    enunciado: "Musicalmente, las melodías de los trovadores eran:",
    correcta: "Monódicas, aunque habitualmente se acompañaban de instrumentos de forma improvisada.",
    incorrectas: [
      "Polifónicas a cuatro voces estrictas.",
      "Solo para instrumentos de percusión sin voz."
    ]
  },
  {
    enunciado: "¿Qué instrumento medieval de lengüeta doble era el antecesor del oboe?",
    correcta: "Chirimía.",
    incorrectas: [
      "Flauta dulce.",
      "Serpentón."
    ]
  },
  {
    enunciado: "El 'Alba' era un género trovadoresco que trataba sobre:",
    correcta: "La separación de los amantes al llegar el amanecer.",
    incorrectas: [
      "La bendición de la mesa antes de comer.",
      "La alegría de ir a trabajar al campo."
    ]
  },
  {
    enunciado: "¿Qué es un 'Virelai'?",
    correcta: "Una forma poético-musical francesa con estribillo, muy popular entre los troveros.",
    incorrectas: [
      "Un tipo de calzado que usaban los músicos para bailar.",
      "El nombre de la bolsa donde el juglar guardaba sus monedas."
    ]
  },
  {
    enunciado: "La 'Zanfona' (Organistrum) producía sonido mediante:",
    correcta: "Una rueda frotada por una manivela que hacía vibrar las cuerdas.",
    incorrectas: [
      "Soplido directo a través de un tubo de hueso.",
      "Teclas que golpeaban láminas de metal."
    ]
  },
  {
    enunciado: "¿Qué función cumplía el 'Planh' (Llanto)?",
    correcta: "Lamentar la muerte de un personaje importante o de un ser querido.",
    incorrectas: [
      "Anunciar el inicio de un torneo de caballeros.",
      "Pedir lluvia durante las sequías."
    ]
  },
  {
    enunciado: "El 'Rondellus' es una forma musical basada en:",
    correcta: "El intercambio de frases melódicas entre varias voces de forma circular.",
    incorrectas: [
      "Una sola nota larga que dura toda la canción.",
      "El sonido de las campanas de la ciudad."
    ]
  },
  {
    enunciado: "¿Qué eran las 'Cantigas de Amigo'?",
    correcta: "Canciones puestas en boca de una mujer que espera a su amado, típicas de la lírica galaico-portuguesa.",
    incorrectas: [
      "Cantos de guerra para los soldados que iban a las Cruzadas.",
      "Cantos religiosos sobre la amistad entre santos."
    ]
  },
  {
    enunciado: "Los instrumentos de percusión en la música profana medieval incluían:",
    correcta: "Darbukas, panderos, tamboriles y címbalos.",
    incorrectas: [
      "Baterías electrónicas y cajas de ritmos.",
      "Solo campanas de iglesia."
    ]
  },
  {
    enunciado: "La 'Tenso' era un género trovadoresco consistente en:",
    correcta: "Un debate o disputa dialéctica entre dos trovadores sobre un tema determinado.",
    incorrectas: [
      "Un ejercicio de estiramiento para las cuerdas del laúd.",
      "Una canción de cuna para calmar a los guerreros."
    ]
  },
  {
    enunciado: "El 'Salterio' era un instrumento medieval que consistía en:",
    correcta: "Una caja de resonancia con cuerdas pulsadas o percutidas.",
    incorrectas: [
      "Una flauta gigante de tres metros.",
      "Un tambor que se llenaba de agua para cambiar el tono."
    ]
  },
  {
    enunciado: "¿Qué lengua utilizaban los Minnesinger alemanes?",
    correcta: "Mittelhochdeutsch (alemán medio).",
    incorrectas: [
      "Francés antiguo.",
      "Latín eclesiástico."
    ]
  },
  {
    enunciado: "El 'Lai' es un género literario y musical que suele narrar:",
    correcta: "Historias de aventuras y amor de carácter legendario o bretón.",
    incorrectas: [
      "La vida de los campesinos en el huerto.",
      "Fórmulas matemáticas para afinar instrumentos."
    ]
  },
  {
    enunciado: "La danza medieval llamada 'Carole' se bailaba generalmente:",
    correcta: "En corro o cadena, con los participantes cogidos de la mano.",
    incorrectas: [
      "En solitario frente a un espejo.",
      "Sentados en el suelo formando una cruz."
    ]
  },
  {
    enunciado: "¿Qué es un 'Trovador itinerante'?",
    correcta: "Aquel que viajaba de corte en corte para ofrecer sus servicios y composiciones.",
    incorrectas: [
      "Un trovador que nunca salía de su castillo.",
      "Un músico que solo tocaba en barcos."
    ]
  },
  {
    enunciado: "Los instrumentos de viento madera en el medievo profano solían ser:",
    correcta: "Flautas de pico, gaitas, chirimías y cromornos.",
    incorrectas: [
      "Clarinetes y saxofones modernos.",
      "Trompas de metal con válvulas."
    ]
  },
  {
    enunciado: "El 'Bal' o 'Ballade' profana francesa tenía una estructura:",
    correcta: "De tres estrofas con el mismo esquema y un estribillo final.",
    incorrectas: [
      "Totalmente improvisada sin repeticiones.",
      "Basada en el ruido de los pies al saltar."
    ]
  },
  {
    enunciado: "¿Qué nombre recibía el acompañamiento instrumental que solía improvisar el juglar?",
    correcta: "Disminución o glosa.",
    incorrectas: [
      "Bajo continuo funcional.",
      "Afinación electrónica."
    ]
  },
  {
    enunciado: "La 'Coda' en la música profana medieval era:",
    correcta: "Casi inexistente, las canciones solían terminar de forma abrupta o con una breve repetición del estribillo.",
    incorrectas: [
      "Una sección de diez minutos con toda la orquesta.",
      "Un solo de arpa que duraba más que la canción."
    ]
  },
  {
    enunciado: "El 'Códice de Montpellier' es una fuente fundamental para conocer:",
    correcta: "La polifonía profana y los motetes del siglo XIII.",
    incorrectas: [
      "Los cantos de los pastores de ovejas de España.",
      "Las recetas de cocina de la corte de Francia."
    ]
  },
  {
    enunciado: "¿Qué relación tenía la música profana con la danza?",
    correcta: "Era su motor principal; gran parte del repertorio profano instrumental se creó para ser bailado.",
    incorrectas: [
      "Estaba prohibido bailar música profana bajo pena de excomunión.",
      "La danza solo se permitía con música gregoriana."
    ]
  },
  {
    enunciado: "La 'Vielle' es el nombre francés para:",
    correcta: "La fídula o vihuela de arco.",
    incorrectas: [
      "La flauta travesera.",
      "El bombo de mano."
    ]
  },
  {
    enunciado: "El estudio de la música profana medieval nos permite entender:",
    correcta: "El nacimiento de las lenguas romances y el desarrollo de la música popular europea.",
    incorrectas: [
      "Cómo se fabricaban las espadas de los caballeros.",
      "La estructura atómica del sonido en el vacío."
    ]
  }
];