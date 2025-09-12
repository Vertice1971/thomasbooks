// temarios/14-La-metafisica-como-problema.js
var PREGUNTAS = [
  {
    enunciado: "Aristóteles definió la metafísica como la ciencia que estudia el ser en cuanto ser.",
    correcta: "Verdadero.",
    incorrectas: [
      "Falso, Aristóteles la definió como la ciencia de la política.",
      "Falso, Aristóteles negó la existencia de una ciencia del ser."
    ]
  },
  {
    enunciado: "Platón aportó a la metafísica la teoría del mundo de las Ideas.",
    correcta: "El mundo inteligible de las Ideas es fundamento del conocimiento y del ser.",
    incorrectas: [
      "Platón rechazó toda noción de realidad trascendente.",
      "Platón identificó lo real únicamente con lo sensible."
    ]
  },
  {
    enunciado: "La metafísica estudia causas primeras, principios supremos y realidades suprasensibles.",
    correcta: "Su objeto no son hechos empíricos, sino fundamentos últimos.",
    incorrectas: [
      "La metafísica estudia únicamente datos de laboratorio.",
      "La metafísica es sinónimo de técnicas artesanales."
    ]
  },
  {
    enunciado: "La metafísica se diferencia de las ciencias empíricas por su carácter especulativo.",
    correcta: "Busca fundamentos y no leyes observables.",
    incorrectas: [
      "Es idéntica a la física experimental.",
      "Se limita a describir procesos técnicos."
    ]
  },
  {
    enunciado: "El carácter problemático de la metafísica radica en sus preguntas últimas.",
    correcta: "Se interroga por la sustancia, la causa primera y la realidad última.",
    incorrectas: [
      "Se debe a que carece totalmente de objeto.",
      "Radica en su dependencia de la biología experimental."
    ]
  },
  {
    enunciado: "Kant criticó la metafísica tradicional al señalar que pretendía conocer lo nouménico.",
    correcta: "La razón solo puede conocer fenómenos, no la cosa en sí.",
    incorrectas: [
      "Kant defendió que la cosa en sí era cognoscible empíricamente.",
      "Kant identificó fenómeno y noúmeno sin distinción."
    ]
  },
  {
    enunciado: "La metafísica crítica kantiana se ocupa de los límites del conocimiento.",
    correcta: "Busca determinar las condiciones de posibilidad del saber humano.",
    incorrectas: [
      "Propone una metafísica dogmática de verdades absolutas.",
      "Sostiene que la metafísica es innecesaria e imposible."
    ]
  },
  {
    enunciado: "Christian Wolff representa la metafísica racionalista y sistemática previa a Kant.",
    correcta: "Planteó la metafísica como ciencia rigurosa de la razón.",
    incorrectas: [
      "Negó toda posibilidad de metafísica.",
      "Redujo la metafísica a impresiones sensibles."
    ]
  },
  {
    enunciado: "Nietzsche criticó la tradición metafísica occidental.",
    correcta: "Denunció la metafísica como negación de la vida y expresión de resentimiento.",
    incorrectas: [
      "Defendió la metafísica como culminación de la ciencia positiva.",
      "Redujo la metafísica a silogismos matemáticos."
    ]
  },
  {
    enunciado: "En Nietzsche, la noción de voluntad de poder desafía a la metafísica clásica.",
    correcta: "Afirma la vida y el devenir frente a la fijación en esencias eternas.",
    incorrectas: [
      "Sostiene que el ser es estático e inmutable.",
      "Equivale a la negación de toda perspectiva vital."
    ]
  },
  {
    enunciado: "Heidegger criticó la metafísica como olvido del ser.",
    correcta: "Consideró que la metafísica redujo el ser a ente sin atender a la pregunta fundamental.",
    incorrectas: [
      "Defendió que la metafísica resolvía definitivamente la cuestión del ser.",
      "Rechazó la pregunta por el ser como irrelevante."
    ]
  },
  {
    enunciado: "Para Heidegger, la tarea filosófica consiste en recuperar la pregunta por el ser.",
    correcta: "La ontología fundamental es un replanteamiento de la metafísica.",
    incorrectas: [
      "Su tarea fue demostrar experimentalmente el ser.",
      "Negó la relevancia de la pregunta por el ser."
    ]
  },
  {
    enunciado: "El problema de la sustancia ha sido central en la tradición metafísica.",
    correcta: "Se define como lo que existe en sí y no en otro.",
    incorrectas: [
      "Se entiende como mera sensación pasajera.",
      "Se identifica con la suma de percepciones subjetivas."
    ]
  },
  {
    enunciado: "Una de las cuestiones clásicas de la metafísica es la causa primera.",
    correcta: "Investiga el fundamento último de todo lo real.",
    incorrectas: [
      "Se limita a describir costumbres sociales.",
      "Se identifica con un experimento repetido."
    ]
  },
  {
    enunciado: "La pluralidad de definiciones dificulta el consenso sobre la naturaleza de la metafísica.",
    correcta: "Cada época la ha entendido de forma diferente.",
    incorrectas: [
      "Siempre ha tenido una única definición idéntica.",
      "Nunca se ha definido en la historia."
    ]
  },
  {
    enunciado: "La relación entre metafísica y ciencia es objeto de debate contemporáneo.",
    correcta: "Se discute si la metafísica tiene estatuto autónomo o depende de la ciencia.",
    incorrectas: [
      "No hay debate, ambas son idénticas.",
      "La discusión terminó en el siglo XVIII."
    ]
  },
  {
    enunciado: "El positivismo lógico rechazó la metafísica como carente de significado verificable.",
    correcta: "Consideraba que sus proposiciones no eran empíricamente contrastables.",
    incorrectas: [
      "Aceptaba la metafísica como ciencia experimental.",
      "La convirtió en la rama principal de la física."
    ]
  },
  {
    enunciado: "El idealismo alemán desarrolló una metafísica sistemática tras Kant.",
    correcta: "Hegel concibió la realidad como totalidad racional.",
    incorrectas: [
      "El idealismo negó toda posibilidad de metafísica.",
      "Se limitó a experimentos de laboratorio."
    ]
  },
  {
    enunciado: "En la Edad Media, la metafísica se integró en la teología.",
    correcta: "Se entendió como fundamentación racional de las verdades reveladas.",
    incorrectas: [
      "Se rechazó toda relación entre metafísica y teología.",
      "Se limitó a la descripción de fenómenos naturales."
    ]
  },
  {
    enunciado: "Parménides inauguró la reflexión metafísica al afirmar que el ser es y el no ser no es.",
    correcta: "Su planteamiento abre la pregunta por el ser.",
    incorrectas: [
      "Negó toda importancia a la noción de ser.",
      "Reducía la filosofía a cálculos matemáticos."
    ]
  },
  {
    enunciado: "La metafísica como problema implica que no existen respuestas definitivas.",
    correcta: "Es un campo abierto de interrogación permanente.",
    incorrectas: [
      "Se resolvió definitivamente en la Edad Moderna.",
      "Es idéntica a la ingeniería aplicada."
    ]
  },
  {
    enunciado: "El valor de la metafísica está en cuestionar los fundamentos de la realidad.",
    correcta: "Su función es crítica y reflexiva.",
    incorrectas: [
      "Su valor es puramente técnico.",
      "Es válida solo si es empíricamente verificable."
    ]
  },
  {
    enunciado: "Kant transformó la metafísica en una disciplina crítica.",
    correcta: "Analizó las condiciones de posibilidad del conocimiento.",
    incorrectas: [
      "Convirtió la metafísica en ciencia natural.",
      "La identificó con la práctica política."
    ]
  },
  {
    enunciado: "Nietzsche proclamó la muerte de Dios como crítica a la metafísica tradicional.",
    correcta: "Denunció la pérdida de fundamentos absolutos en Occidente.",
    incorrectas: [
      "Defendió la permanencia eterna de la metafísica cristiana.",
      "Negó toda relación entre metafísica y valores."
    ]
  },
  {
    enunciado: "Heidegger afirmó que la metafísica occidental olvidó la pregunta por el ser.",
    correcta: "La identificó con un pensar que reduce el ser a ente.",
    incorrectas: [
      "Sostuvo que la metafísica resolvió la cuestión del ser.",
      "Redujo la metafísica a simple lógica formal."
    ]
  },
  {
    enunciado: "El carácter autónomo de la metafísica radica en que no depende de ciencias empíricas.",
    correcta: "Se ocupa de principios supremos y no de fenómenos particulares.",
    incorrectas: [
      "Depende enteramente de la biología experimental.",
      "Es idéntica a la estadística matemática."
    ]
  },
  {
    enunciado: "El problema del ser es núcleo permanente de la metafísica.",
    correcta: "Preguntar por qué hay ser y no nada es central.",
    incorrectas: [
      "Nunca ha sido tratado en filosofía.",
      "Es un problema técnico de la ingeniería."
    ]
  },
  {
    enunciado: "La metafísica no es un saber cerrado, sino una búsqueda crítica.",
    correcta: "Se entiende como interrogación constante.",
    incorrectas: [
      "Es un catálogo definitivo de dogmas.",
      "Se reduce a fórmulas matemáticas."
    ]
  },
  {
    enunciado: "Nietzsche consideraba que la metafísica negaba el valor de la vida.",
    correcta: "La tradición metafísica occidental era expresión del nihilismo.",
    incorrectas: [
      "Defendió la metafísica como afirmación de la vida.",
      "La identificó con la física experimental."
    ]
  },
  {
    enunciado: "Heidegger replanteó la filosofía como ontología fundamental.",
    correcta: "Quiso superar la metafísica tradicional mediante el análisis del ser.",
    incorrectas: [
      "Redujo la filosofía a ciencias naturales.",
      "Negó toda relevancia a la pregunta por el ser."
    ]
  },
  {
    enunciado: "El debate contemporáneo discute si la metafísica es saber fundamental o especulación.",
    correcta: "Se confrontan posturas que la ven como ciencia de fundamentos o como mera especulación.",
    incorrectas: [
      "Existe consenso en que es ciencia experimental.",
      "Ya no hay debate en torno a la metafísica."
    ]
  },
  {
    enunciado: "La crítica posmoderna cuestiona la idea de una racionalidad metafísica única.",
    correcta: "Afirma la pluralidad de perspectivas y la imposibilidad de fundamentos absolutos.",
    incorrectas: [
      "Defiende un único sistema metafísico indiscutible.",
      "Identifica metafísica con ciencia exacta."
    ]
  },
  {
    enunciado: "El sentido del mundo y la condición humana son preguntas propias de la metafísica.",
    correcta: "Trascienden lo empírico y apuntan a los fundamentos últimos.",
    incorrectas: [
      "Son problemas técnicos de la biología.",
      "Nunca fueron objeto de la metafísica."
    ]
  },
  {
    enunciado: "La metafísica sigue siendo relevante en la filosofía actual.",
    correcta: "Es indispensable para pensar la realidad y el sentido humano.",
    incorrectas: [
      "Fue abandonada definitivamente en el siglo XIX.",
      "Se limita a manuales de física clásica."
    ]
  },
  {
    enunciado: "El carácter problemático de la metafísica la convierte en motor del pensamiento filosófico.",
    correcta: "Su vigencia se debe a que mantiene abiertas las preguntas fundamentales.",
    incorrectas: [
      "La hace irrelevante y superada.",
      "Implica que la filosofía no tiene objeto."
    ]
  },
  {
    enunciado: "Comprender la metafísica como problema implica aceptarla como búsqueda abierta.",
    correcta: "No es un sistema cerrado, sino una interrogación constante.",
    incorrectas: [
      "Es un conjunto acabado de verdades indiscutibles.",
      "Es idéntica al conocimiento empírico de laboratorio."
    ]
  }
];
