// temarios/61-la-renovacion-de-la-lirica-espanola-final-del-siglo-xix-y-principios-del-xx.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo expresa mejor la renovación lírica de fin de siglo en España?",
    correcta: "La búsqueda de nuevas formas y musicalidad heredadas del simbolismo y parnasianismo",
    incorrectas: [
      "El retorno a la épica clasicista y a la estrofa de arte mayor estricta",
      "La supresión total de la subjetividad en favor del objetivismo realista"
    ]
  },
  {
    enunciado: "¿Qué obra de Rubén Darío suele considerarse clave en la madurez modernista?",
    correcta: "Cantos de vida y esperanza",
    incorrectas: [
      "Epístola moral a Fabio",
      "La Regenta"
    ]
  },
  {
    enunciado: "En la poesía modernista, la sinestesia se emplea principalmente para...",
    correcta: "Fundir sensaciones distintas y crear correspondencias musicales y cromáticas",
    incorrectas: [
      "Eliminar toda metáfora y privilegiar la literalidad del lenguaje",
      "Describir procesos lógicos con precisión matemática"
    ]
  },
  {
    enunciado: "¿Qué libro marca el primer Machado, de tono simbolista e intimista?",
    correcta: "Soledades",
    incorrectas: [
      "Campos de Castilla",
      "Nuevas canciones"
    ]
  },
  {
    enunciado: "La llamada Generación del 98 se caracteriza por...",
    correcta: "Una preocupación ética e histórica por España y una expresión sobria y reflexiva",
    incorrectas: [
      "El exotismo orientalizante y el preciosismo cromático como fines primordiales",
      "La adhesión plena al naturalismo científico"
    ]
  },
  {
    enunciado: "¿Qué revista y redes culturales favorecieron la difusión modernista en España?",
    correcta: "Revistas como Helios y Juventud, junto con cafés y ateneos",
    incorrectas: [
      "Boletines gremiales agrícolas y almanaques de ferias",
      "Exclusivamente gacetas oficiales del Estado"
    ]
  },
  {
    enunciado: "¿Cuál de estos rasgos es propio del parnasianismo que influye en el modernismo?",
    correcta: "El culto a la forma y la perfección plástica del poema",
    incorrectas: [
      "La ruptura total con el metro regular y la rima",
      "La prioridad de la tesis política sobre la estética"
    ]
  },
  {
    enunciado: "En la evolución de Juan Ramón Jiménez, el ideal de 'poesía pura' se afirma a partir de...",
    correcta: "Diario de un poeta recién casado",
    incorrectas: [
      "El estudiante de Salamanca",
      "Platero y yo (prosa poética)"
    ]
  },
  {
    enunciado: "¿Cuál es un tema central en la lírica del 98?",
    correcta: "La meditación sobre el tiempo, el paisaje y el 'problema de España'",
    incorrectas: [
      "La celebración cortesana del absolutismo monárquico",
      "El relato mitológico de héroes grecolatinos sin lectura crítica"
    ]
  },
  {
    enunciado: "¿Qué obra consolida la etapa reflexiva y cívica de Antonio Machado?",
    correcta: "Campos de Castilla",
    incorrectas: [
      "Soledades, galerías y otros poemas",
      "Arias tristes"
    ]
  },
  {
    enunciado: "Manuel Machado destaca por una poesía...",
    correcta: "Colorista y musical de raíz modernista, abierta al casticismo andaluz",
    incorrectas: [
      "Determinista y cientificista, enemiga de la musicalidad",
      "Exclusivamente épica, en versos blancos sin rima"
    ]
  },
  {
    enunciado: "En la renovación métrica modernista se recuperan y experimentan...",
    correcta: "El alejandrino, el dodecasílabo, combinaciones estróficas y ritmos nuevos",
    incorrectas: [
      "Solo el romance octosilábico medieval, de forma exclusiva",
      "Únicamente versos libres sin rima ni ritmo"
    ]
  },
  {
    enunciado: "¿Qué rasgo NO se asocia a la lírica modernista?",
    correcta: "La renuncia a toda imaginería y a la musicalidad",
    incorrectas: [
      "El gusto por el cromatismo y el exotismo",
      "La adjetivación sensorial y la sinestesia"
    ]
  },
  {
    enunciado: "La noción de 'Edad de Plata' en España alude a...",
    correcta: "Un periodo de gran esplendor cultural y artístico en las primeras décadas del siglo XX",
    incorrectas: [
      "Un ciclo de decadencia literaria sin obras relevantes",
      "Una etapa exclusivamente teatral sin poesía"
    ]
  },
  {
    enunciado: "Unamuno, en poesía, se orienta hacia...",
    correcta: "Una lírica reflexiva de tono existencial y meditativo",
    incorrectas: [
      "La experimentación dadaísta radical",
      "La celebración cortesana barroca"
    ]
  },
  {
    enunciado: "Valle-Inclán en su etapa modernista poética publica...",
    correcta: "Aromas de leyenda",
    incorrectas: [
      "El rayo que no cesa",
      "Poeta en Nueva York"
    ]
  },
  {
    enunciado: "¿Cuál de estos libros pertenece a la madurez ideológica de Antonio Machado?",
    correcta: "Nuevas canciones",
    incorrectas: [
      "Prosas profanas",
      "Arias tristes"
    ]
  },
  {
    enunciado: "En Darío, 'Prosas profanas' se asocia a...",
    correcta: "El esplendor sensorial y el preciosismo formal del primer modernismo",
    incorrectas: [
      "La negación de la musicalidad y la rima",
      "El costumbrismo realista castizo"
    ]
  },
  {
    enunciado: "La oposición Modernismo/98, según parte de la crítica, es...",
    correcta: "Una simplificación historiográfica con zonas de contacto y autores puente",
    incorrectas: [
      "Una división jurídica oficial fijada en 1898",
      "Una diferencia métrica estricta entre heptasílabos y endecasílabos"
    ]
  },
  {
    enunciado: "¿Qué elemento simbolista europeo influyó fuertemente en los modernistas hispánicos?",
    correcta: "La música como modelo estructural del poema",
    incorrectas: [
      "El tratado escolástico como molde métrico",
      "La prosa científica como canon único"
    ]
  },
  {
    enunciado: "El paisaje castellano en Machado actúa como...",
    correcta: "Símbolo moral e histórico que propicia la meditación",
    incorrectas: [
      "Decorado indiferente sin carga semántica",
      "Ícono exclusivamente folclórico"
    ]
  },
  {
    enunciado: "Una forma estrófica frecuente en la lírica de entresiglos es...",
    correcta: "El soneto, recreado con matices modernistas",
    incorrectas: [
      "La sextina provenzal exclusivamente",
      "El haiku como forma dominante de la época"
    ]
  },
  {
    enunciado: "La musicalidad modernista se apoya, entre otros recursos, en...",
    correcta: "Aliteraciones, ritmos marcados y léxico cromático",
    incorrectas: [
      "Paronomasias y retruécanos burlescos como norma exclusiva",
      "El verso siempre isosilábico de arte mayor sin variaciones"
    ]
  },
  {
    enunciado: "¿Qué obra de Juan Ramón Jiménez anuncia su giro hacia una lírica intelectualizada y esencial?",
    correcta: "Diario de un poeta recién casado",
    incorrectas: [
      "Rimas",
      "Campos de Castilla"
    ]
  },
  {
    enunciado: "En el tránsito al siglo XX, ¿qué movimiento prepara el terreno del 27?",
    correcta: "La depuración modernista y las primeras vanguardias (ultraísmo, creacionismo)",
    incorrectas: [
      "El neoclasicismo del XVIII",
      "El costumbrismo romántico exclusivamente"
    ]
  },
  {
    enunciado: "El exotismo modernista suele incorporar...",
    correcta: "Ambientes orientales, mitologías y paisajes lejanos como proyección estética",
    incorrectas: [
      "Manual de urbanidad y buenos modales",
      "Crónicas parlamentarias en prosa rimada"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene el modernismo con la tradición?",
    correcta: "La reinterpreta: recupera metros y estrofas clásicas con nueva sensibilidad",
    incorrectas: [
      "La excluye por completo, anulando cualquier herencia",
      "La copia sin matices ni innovación formal"
    ]
  },
  {
    enunciado: "¿Qué poeta español encarna el modernismo más colorista y musical de comienzos de siglo?",
    correcta: "Manuel Machado",
    incorrectas: [
      "Jorge Manrique",
      "Luis de Góngora (barroco)"
    ]
  },
  {
    enunciado: "La 'poesía pura' en JRJ tiende a...",
    correcta: "Eliminar lo anecdótico en busca de la esencia verbal",
    incorrectas: [
      "Narrativizar el poema con trama y personajes",
      "Sustituir el ritmo por prosa periodística"
    ]
  },
  {
    enunciado: "Un rasgo compartido, aunque con orientaciones distintas, por Modernismo y 98 es...",
    correcta: "La voluntad de renovación frente a los moldes decimonónicos",
    incorrectas: [
      "El rechazo absoluto de cualquier innovación",
      "El retorno al neoclasicismo ilustrado sin mediaciones"
    ]
  },
  {
    enunciado: "¿Cuál de estas parejas autor–obra está correctamente asociada?",
    correcta: "Rubén Darío – Prosas profanas",
    incorrectas: [
      "Azorín – Poeta en Nueva York",
      "Unamuno – Platero y yo"
    ]
  },
  {
    enunciado: "El tono de 'Campos de Castilla' se caracteriza por...",
    correcta: "Una meditación ética e histórica con sobriedad expresiva",
    incorrectas: [
      "El preciosismo cromático y el exotismo oriental continuos",
      "La sátira burlesca constante de personajes mitológicos"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el simbolismo francés con el modernismo hispánico?",
    correcta: "Proporciona un ideal de sugerencia y musicalidad que renueva la dicción poética",
    incorrectas: [
      "Impone reglas de versificación rígidas medievales",
      "Sustituye la metáfora por silogismos"
    ]
  },
  {
    enunciado: "En la poesía del 98, el 'yo' lírico suele adoptar un tono...",
    correcta: "Contemplativo, inquisitivo y moral",
    incorrectas: [
      "Triunfalista épico-cortesano",
      "Científico-técnico sin emoción"
    ]
  },
  {
    enunciado: "¿Qué rasgo métrico reaparece con fuerza en el modernismo español?",
    correcta: "El verso alejandrino y combinaciones acentuales novedosas",
    incorrectas: [
      "El verso monorrítmico de 6 sílabas como norma única",
      "La eliminación total de rima y ritmo"
    ]
  },
  {
    enunciado: "La función del color en la lírica modernista es sobre todo...",
    correcta: "Crear atmósferas simbólicas y sensoriales",
    incorrectas: [
      "Codificar datos estadísticos del poema",
      "Señalar rimas internas obligatorias"
    ]
  },
  {
    enunciado: "¿Qué figura literaria fue especialmente relevante para la musicalidad modernista?",
    correcta: "La aliteración",
    incorrectas: [
      "El hipérbaton llevado al extremo gongorino sin más",
      "La antonomasia técnica"
    ]
  },
  {
    enunciado: "La crisis de fin de siglo (1898) influyó en la poesía porque...",
    correcta: "Reforzó la reflexión existencial y el afán regeneracionista",
    incorrectas: [
      "Consolidó el realismo naturalista como única vía lírica",
      "Impidió cualquier innovación formal"
    ]
  },
  {
    enunciado: "¿Cuál es un puente claro entre modernismo y 98 en la poesía española?",
    correcta: "La trayectoria de Antonio Machado, del simbolismo al tono cívico-meditativo",
    incorrectas: [
      "El abandono de la poesía por todos los autores del 98",
      "La prohibición de experimentar con el metro"
    ]
  },
  {
    enunciado: "¿Qué elemento institucional favoreció la difusión de la lírica nueva?",
    correcta: "Ateneos, cafés y revistas literarias como espacios de sociabilidad intelectual",
    incorrectas: [
      "Tribunales militares y bandos de guerra",
      "Academias de matemáticas aplicadas al verso"
    ]
  },
  {
    enunciado: "En resumen, la renovación lírica finisecular española supuso...",
    correcta: "Una transformación del lenguaje poético que prepara las vanguardias y el 27",
    incorrectas: [
      "Un retorno escolástico sin influencia posterior",
      "La desaparición de la lírica frente a la novela"
    ]
  }
];
