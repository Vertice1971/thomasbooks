// temarios/21-expresion-de-la-duda-la-hipotesis-y-el-contraste.js
var PREGUNTAS = [
  {
    enunciado: "Los adverbios 'quizá(s)', 'tal vez' y 'acaso' introducen duda del hablante sobre el contenido proposicional.",
    correcta: "Verdadero: son marcadores de modalidad epistémica que expresan incertidumbre.",
    incorrectas: [
      "Falso: son conectores causales que explican razones.",
      "Falso: obligan siempre a lectura de certeza absoluta."
    ]
  },
  {
    enunciado: "'A lo mejor' se usa preferentemente con indicativo para expresar posibilidad en registro coloquial.",
    correcta: "Correcto: 'A lo mejor viene' es la pauta habitual en español actual.",
    incorrectas: [
      "Incorrecto: exige subjuntivo por norma general.",
      "Incorrecto: es un intensificador de certeza, no de duda."
    ]
  },
  {
    enunciado: "Con 'quizá(s)/tal vez' el indicativo suele implicar menor duda que el subjuntivo.",
    correcta: "Sí: 'quizá viene' (probable) vs. 'quizá venga' (más incierto).",
    incorrectas: [
      "No: el modo verbal no afecta al grado de duda.",
      "No: el indicativo siempre marca imposibilidad."
    ]
  },
  {
    enunciado: "'Deber de + infinitivo' expresa conjetura o inferencia, frente a 'deber + infinitivo' (obligación).",
    correcta: "Verdadero: 'Debe de ser tarde' conjetura; 'Debes estudiar' obligación.",
    incorrectas: [
      "Falso: ambas formas significan obligación estricta.",
      "Falso: 'deber de' solo es arcaísmo sin uso actual."
    ]
  },
  {
    enunciado: "'Poder + infinitivo' indica posibilidad: 'Puede estar en casa'.",
    correcta: "Correcto: modula la certeza hacia la hipótesis.",
    incorrectas: [
      "Incorrecto: expresa prohibición categórica.",
      "Incorrecto: es perífrasis de obligación."
    ]
  },
  {
    enunciado: "El futuro simple admite valor de conjetura presente: 'Estará en clase ahora'.",
    correcta: "Sí: es el llamado futuro de conjetura o probabilidad.",
    incorrectas: [
      "No: solo denota posterioridad cronológica.",
      "No: se restringe a mandatos formales."
    ]
  },
  {
    enunciado: "El condicional puede marcar rumor o conjetura reportada: 'El ministro habría dimitido'.",
    correcta: "Verdadero: introduce distancia evidencial respecto a la fuente.",
    incorrectas: [
      "Falso: el condicional jamás codifica evidencialidad.",
      "Falso: solo se usa para cortesía verbal."
    ]
  },
  {
    enunciado: "Estructuras como 'no sé si...' presentan explícitamente la duda del hablante.",
    correcta: "Correcto: introducen incertidumbre y a menudo subordinan en indicativo o subjuntivo según el matiz.",
    incorrectas: [
      "Incorrecto: son fórmulas de certeza encubierta.",
      "Incorrecto: funcionan como órdenes indirectas."
    ]
  },
  {
    enunciado: "Los parentéticos 'creo', 'me parece', 'diría' atenúan el compromiso epistémico.",
    correcta: "Sí: actúan como hedges que suavizan la aserción.",
    incorrectas: [
      "No: refuerzan la certeza absoluta del hablante.",
      "No: convierten el enunciado en exclamación."
    ]
  },
  {
    enunciado: "Las interrogativas retóricas pueden vehicular duda o presuposiciones sin requerir respuesta.",
    correcta: "Verdadero: gestionan modalidad epistémica y foco informativo.",
    incorrectas: [
      "Falso: siempre solicitan información nueva.",
      "Falso: equivalen a órdenes con imperativo."
    ]
  },
  {
    enunciado: "En condicionales reales: 'Si llueve, no salimos' (si + presente → futuro/imperativo/presente).",
    correcta: "Correcto: expresa condición posible o habitual.",
    incorrectas: [
      "Incorrecto: exige imperfecto de subjuntivo en la prótasis.",
      "Incorrecto: la apódosis debe ir en condicional."
    ]
  },
  {
    enunciado: "En condicionales potenciales del presente: 'Si lloviera, no saldríamos'.",
    correcta: "Cierto: si + imperfecto de subjuntivo → condicional simple.",
    incorrectas: [
      "Falso: si + pluscuamperfecto de subjuntivo → condicional simple.",
      "Falso: si + indicativo → condicional compuesto obligatoriamente."
    ]
  },
  {
    enunciado: "En contrafactuales de pasado: 'Si hubiera llovido, no habríamos salido'.",
    correcta: "Verdadero: si + pluscuamperfecto de subjuntivo → condicional compuesto.",
    incorrectas: [
      "Falso: si + presente → condicional compuesto.",
      "Falso: requiere obligatorio indicativo en la prótasis."
    ]
  },
  {
    enunciado: "La construcción 'Como + subjuntivo' expresa amenaza/aviso condicional: 'Como llegues tarde...'.",
    correcta: "Correcto: marca condicionamiento con valor sancionador.",
    incorrectas: [
      "Incorrecto: es una concesiva equivalente a 'aunque'.",
      "Incorrecto: introduce finalidad obligatoriamente."
    ]
  },
  {
    enunciado: "Estructuras como 'De saberlo, habría ido' funcionan como pseudocondicionales.",
    correcta: "Sí: el infinitivo preposicional codifica condición elíptica.",
    incorrectas: [
      "No: equivalen a comparativas de superioridad.",
      "No: solo aportan valor temporal de anterioridad."
    ]
  },
  {
    enunciado: "'Siempre que', 'con tal (de) que' introducen condición y seleccionan normalmente subjuntivo.",
    correcta: "Verdadero: expresan requisito no factual.",
    incorrectas: [
      "Falso: se construyen con indicativo de obligación.",
      "Falso: son marcadores de causa."
    ]
  },
  {
    enunciado: "'Como si' rige imperfecto o pluscuamperfecto de subjuntivo para expresar irrealidad.",
    correcta: "Correcto: 'Habla como si supiera' / 'como si hubiera sabido'.",
    incorrectas: [
      "Incorrecto: exige indicativo por ser comparativa.",
      "Incorrecto: alterna solo con condicional simple."
    ]
  },
  {
    enunciado: "'Aunque' con indicativo suele aceptar el hecho; con subjuntivo, lo presenta como hipotético o irrelevante.",
    correcta: "Sí: modo verbal diferencia concesión factual vs. no factual.",
    incorrectas: [
      "No: 'aunque' no admite subjuntivo en español.",
      "No: el modo no altera la interpretación concesiva."
    ]
  },
  {
    enunciado: "'A pesar de (que)' y 'pese a (que)' introducen concesión con valor contrastivo.",
    correcta: "Verdadero: contraponen un obstáculo al enunciado principal.",
    incorrectas: [
      "Falso: son marcadores de consecuencia.",
      "Falso: equivalen a conectores de adición."
    ]
  },
  {
    enunciado: "Conectores como 'pero', 'sin embargo', 'no obstante' marcan contraste y contraargumentación.",
    correcta: "Correcto: organizan la oposición en el discurso.",
    incorrectas: [
      "Incorrecto: son temporales anafóricos.",
      "Incorrecto: introducen definiciones léxicas."
    ]
  },
  {
    enunciado: "'Sino / sino que' corrigen tras negación: 'No fue Juan, sino Pedro' / '… sino que llegó tarde'.",
    correcta: "Cierto: 'sino' coordina; 'sino que' enlaza oraciones.",
    incorrectas: [
      "Falso: se usan sin negación previa.",
      "Falso: son equivalentes a 'pero'."
    ]
  },
  {
    enunciado: "'Si no' (condición) y 'sino' (adversativa de corrección) no son intercambiables.",
    correcta: "Verdadero: 'Si no vienes' ≠ 'No vienes, sino llamas'.",
    incorrectas: [
      "Falso: ambas variantes son libres según estilo.",
      "Falso: 'sino' solo es sustantivo siempre."
    ]
  },
  {
    enunciado: "La disyunción 'o/u' presenta alternativas; 'u' se usa ante palabra inicial 'o-' por eufonía.",
    correcta: "Correcto: 'u ocho' evita cacofonía con 'o'.",
    incorrectas: [
      "Incorrecto: 'u' se usa ante vocal cualquiera.",
      "Incorrecto: 'o' y 'u' se oponen semánticamente."
    ]
  },
  {
    enunciado: "Correlativos 'ya… ya', 'sea… sea', 'bien… bien' estructuran alternancias contrastivas.",
    correcta: "Sí: distribuyen opciones simétricas en el discurso.",
    incorrectas: [
      "No: introducen condicionales contrafactuales.",
      "No: son marcadores de tiempo perfecto."
    ]
  },
  {
    enunciado: "'Ni siquiera' minimiza el punto de partida de una escala y refuerza el contraste.",
    correcta: "Verdadero: activa lectura escalar intensamente contrastiva.",
    incorrectas: [
      "Falso: es un adverbio temporal de inicio.",
      "Falso: funciona como pronombre relativo."
    ]
  },
  {
    enunciado: "Los restrictivos 'solo/solamente' focalizan un constituyente y producen efectos contrastivos.",
    correcta: "Correcto: limitan el alcance de la afirmación.",
    incorrectas: [
      "Incorrecto: equivalen a negación absoluta.",
      "Incorrecto: son meros intensificadores cuantitativos."
    ]
  },
  {
    enunciado: "'Incluso' y 'hasta' actúan como aditivos escalares con posible valor de sorpresa.",
    correcta: "Sí: añaden el elemento más extremo y contrastan expectativas.",
    incorrectas: [
      "No: son conectores de causalidad.",
      "No: obligan a modo subjuntivo siempre."
    ]
  },
  {
    enunciado: "Ortográficamente, suele escribirse coma antes de 'pero'; 'sino' no lleva coma entre términos simples.",
    correcta: "Verdadero: responden a pautas de puntuación adversativa y de corrección.",
    incorrectas: [
      "Falso: 'pero' nunca admite coma previa.",
      "Falso: 'sino' exige coma obligatoria."
    ]
  },
  {
    enunciado: "La entonación puede realzar contraste focal al desplazar el acento informativo.",
    correcta: "Correcto: la prosodia contribuye al foco contrastivo.",
    incorrectas: [
      "Incorrecto: la entonación no afecta a la interpretación.",
      "Incorrecto: solo el orden sintáctico marca el foco."
    ]
  },
  {
    enunciado: "'Probablemente' puede combinarse con indicativo o subjuntivo según el grado de incertidumbre y el estilo.",
    correcta: "Verdadero: la elección modal perfila mayor o menor duda.",
    incorrectas: [
      "Falso: solo admite indicativo en cualquier contexto.",
      "Falso: es incompatible con verbos en futuro."
    ]
  },
  {
    enunciado: "'Igual' (Península) expresa posibilidad y suele acompañarse de indicativo.",
    correcta: "Sí: 'Igual llega tarde' es uso coloquial frecuente.",
    incorrectas: [
      "No: selecciona obligatoriamente subjuntivo.",
      "No: tiene valor de certeza enfática."
    ]
  },
  {
    enunciado: "'A lo mejor' no se usa con subjuntivo en español estándar.",
    correcta: "Correcto: se construye con indicativo en usos habituales.",
    incorrectas: [
      "Incorrecto: exige subjuntivo por ser dubitativo.",
      "Incorrecto: funciona solo como sustantivo."
    ]
  },
  {
    enunciado: "La apódosis condicional puede modularse con modales ('podrías', 'deberías') para atenuar la directividad.",
    correcta: "Verdadero: combina hipótesis con cortesía o recomendación.",
    incorrectas: [
      "Falso: debe ir siempre en futuro simple.",
      "Falso: el condicional es agramatical en apódosis."
    ]
  },
  {
    enunciado: "La construcción 'No X, sino Y' es correctiva: sustituye una opción por otra.",
    correcta: "Sí: opera contraste por rectificación, no por suma.",
    incorrectas: [
      "No: añade Y a X sin oponerlos.",
      "No: equivale a una concesiva factual."
    ]
  },
  {
    enunciado: "'Ahora bien' introduce un giro argumentativo de matización o restricción.",
    correcta: "Correcto: reorienta el discurso con contraste regulado.",
    incorrectas: [
      "Incorrecto: es un conector temporal anafórico.",
      "Incorrecto: funciona como marcador de cierre."
    ]
  },
  {
    enunciado: "Las exceptivas 'salvo que' y 'excepto que' operan como condicionales negativas encubiertas.",
    correcta: "Verdadero: establecen condición de excepción al enunciado.",
    incorrectas: [
      "Falso: son causales equivalentes a 'porque'.",
      "Falso: introducen solo explicaciones definitorias."
    ]
  },
  {
    enunciado: "'Si bien' es una concesiva de registro formal con valor contrastivo próximo a 'aunque'.",
    correcta: "Sí: admite indicativo en concesión factual.",
    incorrectas: [
      "No: es una consecutiva intensiva.",
      "No: exige subjuntivo por norma en todos los casos."
    ]
  },
  {
    enunciado: "'Por más/mucho que' intensifica la concesión y puede seleccionar indicativo o subjuntivo según la factualidad.",
    correcta: "Correcto: indicativo para hecho admitido; subjuntivo para hipótesis o irrelevancia.",
    incorrectas: [
      "Incorrecto: solo se usa con gerundio.",
      "Incorrecto: introduce condición necesaria, no concesión."
    ]
  }
];
