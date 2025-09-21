var PREGUNTAS = [
  {
    enunciado: "¿Qué es el sujeto en una oración?",
    correcta: "La función que, por regla general, concuerda en persona y número con el verbo",
    incorrectas: [
      "El grupo que siempre lleva preposición",
      "El complemento que expresa circunstancias de la acción"
    ]
  },
  {
    enunciado: "¿Qué es el predicado?",
    correcta: "La función cuyo núcleo es un verbo que expresa la acción, estado o proceso",
    incorrectas: [
      "Un modificador del sustantivo núcleo del sujeto",
      "Una construcción sin núcleo obligatorio"
    ]
  },
  {
    enunciado: "¿Cuál es el núcleo del predicado?",
    correcta: "El verbo",
    incorrectas: [
      "El sustantivo",
      "El adjetivo"
    ]
  },
  {
    enunciado: "¿En qué consiste la concordancia básica entre sujeto y predicado?",
    correcta: "En la correspondencia de persona y número entre el sujeto y el verbo",
    incorrectas: [
      "En la coincidencia de caso y modo",
      "En la igualdad de género y tiempo verbal exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al sujeto tácito o elíptico?",
    correcta: "No aparece explícito pero se recupera por la forma verbal",
    incorrectas: [
      "Siempre va introducido por preposición",
      "Se expresa con un adjetivo sustantivado"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre sujeto simple y sujeto compuesto?",
    correcta: "El simple tiene un núcleo; el compuesto, varios núcleos coordinados",
    incorrectas: [
      "El simple carece de núcleo y el compuesto lo tiene",
      "El simple siempre es tácito y el compuesto expreso"
    ]
  },
  {
    enunciado: "En pasiva perifrástica, ¿qué tipo de sujeto aparece?",
    correcta: "Sujeto paciente (lo que en activa era el complemento directo)",
    incorrectas: [
      "Sujeto agente siempre tácito",
      "Sujeto oracional obligatoriamente"
    ]
  },
  {
    enunciado: "¿Qué prueba ayuda a localizar el sujeto en una oración simple?",
    correcta: "Comprobar la concordancia en persona y número con el verbo",
    incorrectas: [
      "Buscar el primer sintagma con preposición",
      "Reemplazar por ‘lo/la’ y ver si es posible"
    ]
  },
  {
    enunciado: "¿Qué es el predicado nominal?",
    correcta: "El que se forma con verbo copulativo (ser, estar, parecer) y atributo",
    incorrectas: [
      "El que tiene un verbo transitivo y complemento directo",
      "El que incluye siempre un complemento agente"
    ]
  },
  {
    enunciado: "¿Qué es el predicado verbal?",
    correcta: "El que tiene como núcleo un verbo predicativo",
    incorrectas: [
      "El que carece de verbo",
      "El que se forma sin ningún complemento"
    ]
  },
  {
    enunciado: "¿Qué es el atributo?",
    correcta: "El constituyente que, con verbo copulativo, asigna una propiedad al sujeto",
    incorrectas: [
      "Un adverbio que modifica al verbo",
      "Un complemento de régimen exigido por el verbo"
    ]
  },
  {
    enunciado: "¿Cuál es una prueba típica del atributo?",
    correcta: "Puede sustituirse por el pronombre neutro ‘lo’",
    incorrectas: [
      "Puede conmutarse por ‘le/les’",
      "Debe ir siempre introducido por ‘de’"
    ]
  },
  {
    enunciado: "¿Qué es el complemento predicativo?",
    correcta: "Un complemento que concuerda con el sujeto o el CD y expresa una cualidad ligada al verbo",
    incorrectas: [
      "Un sinónimo del atributo",
      "Un tipo de complemento agente"
    ]
  },
  {
    enunciado: "¿Qué es el complemento agente?",
    correcta: "El complemento introducido por ‘por’ en pasivas que designa al ejecutor de la acción",
    incorrectas: [
      "El complemento que designa destinatario",
      "El complemento que expresa modo"
    ]
  },
  {
    enunciado: "¿Qué define a las oraciones impersonales meteorológicas?",
    correcta: "Carecen de sujeto léxico y el verbo no concuerda con ningún SN",
    incorrectas: [
      "Tienen sujeto tácito de primera persona",
      "Llevan siempre un sujeto oracional"
    ]
  },
  {
    enunciado: "En ‘Hay tres alumnos’, ¿qué función desempeña ‘tres alumnos’?",
    correcta: "No es sujeto; es un complemento interno de ‘haber’ impersonal",
    incorrectas: [
      "Es el sujeto y concuerda con ‘hay’",
      "Es un atributo del verbo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al ‘se’ impersonal?",
    correcta: "Construye oraciones sin sujeto léxico; el verbo va en 3.ª persona del singular",
    incorrectas: [
      "Funciona como pasiva perifrástica con ‘ser’ + participio",
      "Exige siempre un complemento agente"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes oraciones presenta sujeto pospuesto?",
    correcta: "Llegaron temprano los invitados",
    incorrectas: [
      "Los invitados llegaron temprano",
      "Temprano llegaron"
    ]
  },
  {
    enunciado: "¿Cuál es el núcleo del sujeto en “Los viejos amigos del barrio”?",
    correcta: "Amigos",
    incorrectas: [
      "Los",
      "Del barrio"
    ]
  },
  {
    enunciado: "¿Qué es un sujeto oracional?",
    correcta: "Una subordinada sustantiva que desempeña la función de sujeto",
    incorrectas: [
      "Una oración adjetiva que modifica al núcleo del sujeto",
      "Una coordinación de dos sujetos simples"
    ]
  },
  {
    enunciado: "¿Qué ocurre con la concordancia en sujetos compuestos coordinados?",
    correcta: "El verbo suele ir en plural",
    incorrectas: [
      "El verbo debe ir en singular",
      "La concordancia se realiza solo con el último núcleo"
    ]
  },
  {
    enunciado: "¿Cómo se trata la concordancia con un sustantivo colectivo singular (‘la gente’)?",
    correcta: "Puede concordar en singular; en uso coloquial, a veces en plural por sentido",
    incorrectas: [
      "Debe concordar siempre en plural",
      "Debe concordar siempre en dual"
    ]
  },
  {
    enunciado: "Señala el caso de concordancia semántica correcta:",
    correcta: "Más de uno lo intentaron",
    incorrectas: [
      "Más de uno lo intentó es incorrecto siempre",
      "Más de uno intentaste"
    ]
  },
  {
    enunciado: "¿Qué es una aposición en el sujeto?",
    correcta: "Un SN yuxtapuesto que precisa o identifica al núcleo del sujeto",
    incorrectas: [
      "Un adverbio que modifica al verbo",
      "Un atributo obligatorio"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia entre pasiva perifrástica y pasiva refleja?",
    correcta: "La perifrástica usa ‘ser’ + participio; la refleja usa ‘se’ + verbo en 3.ª",
    incorrectas: [
      "Ambas exigen complemento agente",
      "La refleja lleva siempre atributo"
    ]
  },
  {
    enunciado: "¿‘Ser’ en las pasivas perifrásticas funciona como…?",
    correcta: "Auxiliar de voz pasiva, no como verbo copulativo",
    incorrectas: [
      "Verbo copulativo con atributo",
      "Verbo intransitivo pleno"
    ]
  },
  {
    enunciado: "En ‘Los alumnos parecen cansados’, ‘cansados’ es…",
    correcta: "Atributo con verbo semicopulativo",
    incorrectas: [
      "Complemento directo",
      "Complemento agente"
    ]
  },
  {
    enunciado: "¿Cuál es una prueba útil para distinguir atributo de CD?",
    correcta: "Sustitución por ‘lo’ con copulativos y semicopulativos; con transitivos suele ser CD",
    incorrectas: [
      "El atributo siempre admite ‘le/les’",
      "Ambos se sustituyen por ‘se’ indistintamente"
    ]
  },
  {
    enunciado: "¿Qué función cumple ‘médica’ en ‘Ella es médica’?",
    correcta: "Atributo",
    incorrectas: [
      "Predicativo del CD",
      "Complemento de régimen"
    ]
  },
  {
    enunciado: "¿Qué etiqueta describe ‘predicado’ en un análisis funcional?",
    correcta: "La función que agrupa al verbo y a sus complementos",
    incorrectas: [
      "Un tipo de complemento del nombre",
      "Un conector discursivo"
    ]
  },
  {
    enunciado: "En ‘Se vendieron todas las entradas’, ¿qué construcción es?",
    correcta: "Pasiva refleja; ‘todas las entradas’ funciona como sujeto paciente",
    incorrectas: [
      "Impersonal con ‘se’",
      "Activa transitiva con sujeto tácito"
    ]
  },
  {
    enunciado: "¿Qué es una oración impersonal con ‘se’?",
    correcta: "Una construcción sin sujeto, con ‘se’ y verbo en 3.ª singular",
    incorrectas: [
      "Una pasiva perifrástica con sujeto paciente",
      "Una activa intransitiva con sujeto tácito"
    ]
  },
  {
    enunciado: "¿Cómo concuerda el atributo?",
    correcta: "Con el sujeto en género y número",
    incorrectas: [
      "Con el complemento directo",
      "Con el verbo en modo y tiempo"
    ]
  },
  {
    enunciado: "En “Fueron premiadas las investigadoras”, el participio ‘premiadas’ concuerda con…",
    correcta: "El sujeto ‘las investigadoras’ en género y número",
    incorrectas: [
      "El complemento agente tácito",
      "El tiempo verbal ‘fueron’"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre sujeto y complemento directo respecto a la concordancia verbal?",
    correcta: "El verbo concuerda con el sujeto, no con el CD",
    incorrectas: [
      "El verbo concuerda con el CD si va antepuesto",
      "El verbo concuerda con ambos simultáneamente"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes presenta oración impersonal léxica?",
    correcta: "Hace frío",
    incorrectas: [
      "Los chicos hacen ruido",
      "Se hicieron tareas por los alumnos"
    ]
  },
  {
    enunciado: "En un período coordinado, ¿cómo se identifica el predicado?",
    correcta: "Cada proposición coordinada aporta su propio predicado con su núcleo verbal",
    incorrectas: [
      "La coordinación elimina la necesidad de predicado",
      "Solo la primera proposición tiene predicado"
    ]
  },
  {
    enunciado: "¿Qué recurso didáctico ayuda a separar sujeto y predicado en el aula?",
    correcta: "Someter la oración a pruebas de conmutación y concordancia",
    incorrectas: [
      "Buscar siempre el primer artículo como sujeto",
      "Marcar como sujeto cualquier grupo antepuesto"
    ]
  }
];
