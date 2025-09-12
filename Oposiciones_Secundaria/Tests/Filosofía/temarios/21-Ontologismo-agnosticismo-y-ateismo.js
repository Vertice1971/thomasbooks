// temarios/21-Ontologismo-agnosticismo-y-ateismo.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por ontologismo en filosofía?",
    correcta: "Una corriente que afirma que la idea de Dios es innata y fundamento inmediato de todo conocimiento",
    incorrectas: [
      "Una posición que reduce toda realidad a materia sensible",
      "Una doctrina que sostiene que solo existen construcciones lingüísticas sin referencia"
    ]
  },
  {
    enunciado: "¿Qué autor está vinculado al ontologismo del siglo XIX?",
    correcta: "Vincenzo Gioberti, que defendió la intuición originaria de Dios como base del conocer",
    incorrectas: [
      "David Hume, que lo redujo todo a impresiones y percepciones",
      "Jean-Paul Sartre, que identificó la existencia con el absurdo"
    ]
  },
  {
    enunciado: "¿Qué crítica principal se hace al ontologismo?",
    correcta: "Que confunde lo innato con lo trascendente y no respeta la autonomía de la razón",
    incorrectas: [
      "Que ignora por completo la tradición escolástica medieval",
      "Que reduce toda religión a pura emotividad subjetiva"
    ]
  },
  {
    enunciado: "¿Qué significa agnosticismo en sentido filosófico?",
    correcta: "La posición que sostiene la imposibilidad de conocer racionalmente la existencia de Dios o lo absoluto",
    incorrectas: [
      "La aceptación entusiasta de toda fe revelada",
      "La reducción de la religión a pura superstición sin reflexión crítica"
    ]
  },
  {
    enunciado: "¿Quién acuñó el término ‘agnosticismo’ en el siglo XIX?",
    correcta: "Thomas Huxley, en el contexto del debate sobre ciencia y religión",
    incorrectas: [
      "Karl Marx, al criticar la religión como opio del pueblo",
      "Immanuel Kant, en su Crítica de la razón práctica"
    ]
  },
  {
    enunciado: "¿Cómo se vincula el agnosticismo con la filosofía de Kant?",
    correcta: "Kant afirmó que la existencia de Dios no puede ser demostrada teóricamente, solo postulada moralmente",
    incorrectas: [
      "Kant identificó la existencia de Dios con un hecho empírico verificable",
      "Kant negó cualquier relación entre moralidad y religión"
    ]
  },
  {
    enunciado: "¿Qué implica el ateísmo en sentido estricto?",
    correcta: "La negación de la existencia de Dios o de cualquier realidad trascendente",
    incorrectas: [
      "La suspensión del juicio sobre lo trascendente",
      "La aceptación de múltiples dioses en una religión politeísta"
    ]
  },
  {
    enunciado: "¿Qué forma de ateísmo propone Feuerbach?",
    correcta: "La religión es proyección de la esencia humana, por lo que Dios no existe fuera del hombre",
    incorrectas: [
      "La religión es manifestación racional de verdades objetivas eternas",
      "La religión debe aceptarse como única forma de ciencia auténtica"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el ateísmo de Marx?",
    correcta: "La religión es superestructura ideológica al servicio de la explotación",
    incorrectas: [
      "La religión es la culminación de la libertad de la conciencia",
      "La religión es mero juego lingüístico sin efectos sociales"
    ]
  },
  {
    enunciado: "¿Qué rasgo define el ateísmo de Nietzsche?",
    correcta: "Proclama la muerte de Dios como diagnóstico cultural de la modernidad",
    incorrectas: [
      "Afirma la necesidad de Dios como fundamento del ser",
      "Identifica la religión con la verdad absoluta de la ciencia"
    ]
  },
  {
    enunciado: "¿Qué distingue al ateísmo práctico del teórico?",
    correcta: "El práctico vive sin referencia a lo trascendente, el teórico niega explícitamente la existencia de Dios",
    incorrectas: [
      "El práctico formula teorías metafísicas sistemáticas",
      "El teórico se limita a vivir de manera indiferente a la religión"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el positivismo con el agnosticismo?",
    correcta: "Ambos reducen el conocimiento válido a lo empíricamente verificable",
    incorrectas: [
      "Ambos afirman que Dios es un dato científico demostrable",
      "Ambos niegan el valor de la ciencia en cuestiones religiosas"
    ]
  },
  {
    enunciado: "¿Qué representa el ateísmo existencialista de Sartre?",
    correcta: "La existencia precede a la esencia y no hay Dios que funde valores o sentido",
    incorrectas: [
      "La esencia divina es fundamento inmediato de todo existir",
      "La fe es condición necesaria para la libertad"
    ]
  },
  {
    enunciado: "¿Qué aspecto comparte el agnosticismo con el escepticismo clásico?",
    correcta: "La suspensión del juicio sobre realidades últimas que no pueden demostrarse",
    incorrectas: [
      "La identificación de la verdad con dogmas religiosos",
      "La aceptación de cualquier creencia sin crítica"
    ]
  },
  {
    enunciado: "¿Qué propone el nuevo ateísmo de autores como Richard Dawkins?",
    correcta: "Un rechazo militante de la religión por considerarla dañina e irracional",
    incorrectas: [
      "Una defensa de la compatibilidad entre fe y ciencia",
      "Una postura neutral de suspensión de juicio"
    ]
  },
  {
    enunciado: "¿Qué vínculo se establece entre ateísmo y humanismo secular?",
    correcta: "El ser humano se afirma como único fundamento de valores y sentido",
    incorrectas: [
      "Los valores provienen de la revelación sobrenatural",
      "El sentido humano depende de rituales mágicos"
    ]
  },
  {
    enunciado: "¿Qué crítica se ha hecho al agnosticismo?",
    correcta: "Que en la práctica se convierte en una forma encubierta de ateísmo",
    incorrectas: [
      "Que es una forma extrema de fideísmo religioso",
      "Que se opone frontalmente a la ciencia experimental"
    ]
  },
  {
    enunciado: "¿Qué distingue al deísmo del ateísmo?",
    correcta: "El deísmo afirma a Dios como creador sin intervención, el ateísmo niega su existencia",
    incorrectas: [
      "El deísmo rechaza la razón y se basa en emociones",
      "El ateísmo acepta la revelación pero rechaza la filosofía"
    ]
  },
  {
    enunciado: "¿Qué influencia tuvo Darwin en el auge del agnosticismo y ateísmo?",
    correcta: "La teoría de la evolución cuestionó explicaciones religiosas literales de la creación",
    incorrectas: [
      "Demostró empíricamente la existencia de Dios",
      "Confirmó la necesidad de una interpretación teológica literal de la Biblia"
    ]
  },
  {
    enunciado: "¿Qué defiende el ateísmo científico de Laplace?",
    correcta: "No necesita la hipótesis de Dios para explicar el funcionamiento del universo",
    incorrectas: [
      "Sostiene que Dios es la única causa científica aceptable",
      "Proclama que la física demuestra la existencia de ángeles"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre agnosticismo fuerte y débil?",
    correcta: "El fuerte afirma que no es posible conocer nada sobre lo divino; el débil sostiene que aún no sabemos",
    incorrectas: [
      "El fuerte proclama certeza sobre Dios y el débil lo niega categóricamente",
      "El fuerte identifica fe y razón, el débil las separa radicalmente"
    ]
  },
  {
    enunciado: "¿Qué autor afirma que ‘el hombre está condenado a ser libre’ como consecuencia del ateísmo?",
    correcta: "Jean-Paul Sartre, en su filosofía existencialista",
    incorrectas: [
      "San Anselmo, en sus argumentos ontológicos",
      "Gioberti, en su defensa del ontologismo"
    ]
  },
  {
    enunciado: "¿Qué vinculación establece Camus entre ateísmo y absurdo?",
    correcta: "Niega sentido último en el universo y postula la necesidad de vivir con dignidad en el absurdo",
    incorrectas: [
      "Defiende que la fe religiosa resuelve todo problema humano",
      "Declara que el universo es una máquina divina con finalidad perfecta"
    ]
  },
  {
    enunciado: "¿Qué representa el término ‘laicismo’ en relación con ateísmo y agnosticismo?",
    correcta: "Una postura política que defiende la separación entre religión y Estado",
    incorrectas: [
      "Una doctrina teológica sobre la naturaleza de Dios",
      "Un sistema religioso alternativo basado en mitología griega"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el método científico en el agnosticismo moderno?",
    correcta: "Se presenta como límite del conocimiento válido, dejando fuera lo trascendente",
    incorrectas: [
      "Se usa para probar dogmas revelados",
      "Sirve para confirmar milagros por repetición experimental"
    ]
  },
  {
    enunciado: "¿Qué postura adopta Unamuno respecto al agnosticismo?",
    correcta: "Considera insuficiente la suspensión del juicio y afirma la lucha entre fe y duda",
    incorrectas: [
      "Acepta sin crítica el escepticismo radical",
      "Declara que la fe es siempre irracional y despreciable"
    ]
  },
  {
    enunciado: "¿Qué significa el llamado ‘ateísmo metodológico’ en ciencia?",
    correcta: "Trabajar sin suponer intervención divina en hipótesis científicas",
    incorrectas: [
      "Negar por principio cualquier investigación empírica",
      "Afirmar que toda teoría debe fundarse en revelación religiosa"
    ]
  },
  {
    enunciado: "¿Qué argumento ontológico refutado por Kant influye en el debate?",
    correcta: "Que la existencia de Dios se deduce como perfección necesaria de la idea de ser supremo",
    incorrectas: [
      "Que la existencia de Dios se observa directamente en los sentidos",
      "Que la fe basta como argumento racional de existencia"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre ateísmo materialista y espiritualista?",
    correcta: "El materialista niega lo trascendente por reducir todo a materia, el espiritualista niega dioses pero admite valores inmateriales",
    incorrectas: [
      "Ambos afirman la revelación como fuente de verdad",
      "El espiritualista identifica el alma con Dios creador"
    ]
  },
  {
    enunciado: "¿Qué cuestiona el ateísmo humanista de Bertrand Russell?",
    correcta: "La religión carece de base racional suficiente y no responde a la evidencia",
    incorrectas: [
      "La religión es indispensable para fundamentar toda ciencia",
      "La religión garantiza el progreso tecnológico"
    ]
  },
  {
    enunciado: "¿Qué papel otorga el agnosticismo al problema del mal?",
    correcta: "Señala que la existencia del mal agrava la imposibilidad de probar un Dios bueno y omnipotente",
    incorrectas: [
      "Declara que el mal prueba de forma concluyente la existencia de Dios",
      "Sostiene que el mal carece de relevancia en debates filosóficos"
    ]
  },
  {
    enunciado: "¿Qué vinculación tiene Nietzsche entre ateísmo y nihilismo?",
    correcta: "El ateísmo radical desemboca en el vacío de valores tradicionales y la necesidad de crear nuevos",
    incorrectas: [
      "El ateísmo confirma la vigencia de la moral cristiana",
      "El nihilismo fundamenta la existencia de un Dios absoluto"
    ]
  },
  {
    enunciado: "¿Qué afirmaba Gioberti como núcleo del ontologismo?",
    correcta: "La intuición inmediata de Dios como ser absoluto es fundamento de todo conocer",
    incorrectas: [
      "La imposibilidad de toda intuición metafísica",
      "La reducción de Dios a una construcción lingüística"
    ]
  },
  {
    enunciado: "¿Qué crítica hace la Iglesia católica al ontologismo?",
    correcta: "Lo considera incompatible con la doctrina sobre el origen mediato del conocimiento de Dios",
    incorrectas: [
      "Lo adopta como dogma oficial de fe",
      "Lo interpreta como la mejor defensa del tomismo"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre agnosticismo religioso y científico?",
    correcta: "El religioso suspende juicio sobre lo divino, el científico limita el conocimiento a lo verificable",
    incorrectas: [
      "Ambos niegan de manera concluyente la existencia de Dios",
      "Ambos confunden fe con certeza matemática"
    ]
  },
  {
    enunciado: "¿Qué alternativa plantea el teísmo frente al ateísmo?",
    correcta: "Afirma la existencia de Dios como ser personal y creador del mundo",
    incorrectas: [
      "Sostiene la inexistencia de toda realidad objetiva",
      "Reduce el universo a azar sin causa ni sentido"
    ]
  },
  {
    enunciado: "¿Qué función desempeña el agnosticismo en debates contemporáneos sobre ciencia y religión?",
    correcta: "Sirve como posición intermedia que evita afirmaciones dogmáticas en ambos extremos",
    incorrectas: [
      "Reemplaza a la religión como credo obligatorio",
      "Identifica ciencia con fe sin distinción metodológica"
    ]
  }
];
