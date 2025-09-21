// temarios/22-expresion-de-la-causa-la-consecuencia-y-la-finalidad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué expresa prototípicamente una construcción causal en español?",
    correcta: "La razón o el motivo que explica el hecho enunciado",
    incorrectas: [
      "La comparación entre dos entidades sin relación lógica",
      "La pertenencia de un elemento a una clase semántica"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes oraciones contiene una subordinada causal canónica?",
    correcta: "No salimos porque estaba lloviendo intensamente",
    incorrectas: [
      "No salimos para evitar perdernos",
      "No salimos, así que vimos la película"
    ]
  },
  {
    enunciado: "Señala el nexo típicamente causal en el español general",
    correcta: "porque",
    incorrectas: [
      "para que",
      "así que"
    ]
  },
  {
    enunciado: "¿Qué modo verbal predomina en las subordinadas causales factuales?",
    correcta: "Indicativo por su valor de hecho constatado",
    incorrectas: [
      "Subjuntivo por su valor hipotético",
      "Imperativo por su valor exhortativo"
    ]
  },
  {
    enunciado: "¿Qué relación semántica establece una construcción final?",
    correcta: "La intención u objetivo con que se realiza la acción",
    incorrectas: [
      "La simultaneidad temporal entre dos hechos",
      "La condición necesaria para que ocurra la acción"
    ]
  },
  {
    enunciado: "Elige la opción con subordinada final correctamente formada",
    correcta: "Bajó la voz para que no lo oyeran en la sala",
    incorrectas: [
      "Bajó la voz porque no lo oyeran en la sala",
      "Bajó la voz así que no lo oyeron en la sala"
    ]
  },
  {
    enunciado: "¿Qué construcción no oracional expresa finalidad de forma frecuente?",
    correcta: "para + infinitivo",
    incorrectas: [
      "por + sintagma nominal",
      "tan + adjetivo + que"
    ]
  },
  {
    enunciado: "¿Cuál es el modo verbal preferente en las subordinadas finales introducidas por “para que”?",
    correcta: "Subjuntivo por su valor prospectivo e irrealizado",
    incorrectas: [
      "Indicativo por su valor de constatación",
      "Condicional por su valor hipotético"
    ]
  },
  {
    enunciado: "¿Qué valor aportan los marcadores ‘por lo tanto / por consiguiente’?",
    correcta: "Valor ilativo o conclusivo de consecuencia lógica",
    incorrectas: [
      "Valor adversativo con corrección de lo dicho",
      "Valor concesivo con matiz de obstáculo"
    ]
  },
  {
    enunciado: "Señala la consecutiva intensiva con correlación adecuada",
    correcta: "Hizo tan buen trabajo que obtuvo el premio",
    incorrectas: [
      "Hizo buen trabajo para que obtuvo el premio",
      "Hizo tan buen trabajo para obtener el premio"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica separa causa y finalidad?",
    correcta: "La causa explica un hecho pasado o presente; la finalidad proyecta un objetivo futuro",
    incorrectas: [
      "La causa es subjetiva y la finalidad es objetiva",
      "La causa requiere subjuntivo y la finalidad, indicativo"
    ]
  },
  {
    enunciado: "¿Cuál de estas opciones es un sintagma preposicional de valor causal?",
    correcta: "A causa de la niebla, suspendieron el vuelo",
    incorrectas: [
      "Con vistas a la campaña, suspendieron el vuelo",
      "En cambio, suspendieron el vuelo"
    ]
  },
  {
    enunciado: "Elige el ejemplo con valor de consecuencia no intensiva (ilativa)",
    correcta: "Llegó tarde, por lo tanto perdió el tren",
    incorrectas: [
      "Llegó tan tarde que perdió el tren",
      "Llegó para perder el tren"
    ]
  },
  {
    enunciado: "¿Qué nexo es más propio de registros formales para introducir causa?",
    correcta: "puesto que",
    incorrectas: [
      "pues (interjectivo)",
      "así que"
    ]
  },
  {
    enunciado: "¿Cuál presenta una relación final léxica no oracional?",
    correcta: "Se reunió con el equipo con el objeto de cerrar el acuerdo",
    incorrectas: [
      "Se reunió con el equipo por el objeto de cerrar el acuerdo",
      "Se reunió con el equipo, por consiguiente cerró el acuerdo"
    ]
  },
  {
    enunciado: "Indica la alternativa donde ‘de ahí que’ está bien usada",
    correcta: "Se agotaron las entradas; de ahí que muchos no pudieran entrar",
    incorrectas: [
      "Se agotaron las entradas; de ahí que muchos no pueden entrar",
      "Se agotaron las entradas; de ahí que entrar muchos"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue ‘porque’ explicativo de ‘porque’ causal?",
    correcta: "El explicativo añade una razón conocida o inferible; el causal aporta la causa del hecho",
    incorrectas: [
      "El explicativo exige subjuntivo; el causal, indicativo",
      "El explicativo va siempre antepuesto; el causal, pospuesto"
    ]
  },
  {
    enunciado: "Señala el uso correcto de ‘ya que’",
    correcta: "Ya que no contestas, daré por cerrada la convocatoria",
    incorrectas: [
      "Ya que contesta, daré por cerrada la convocatoria",
      "Ya que contestes, doy por cerrada la convocatoria"
    ]
  },
  {
    enunciado: "¿Cuál de estas construcciones consecutivas es gramatical y formal?",
    correcta: "Estaba tan cansado que se quedó dormido en el tren",
    incorrectas: [
      "Estaba tanto cansado que se quedó dormido",
      "Estaba tan cansado para quedarse dormido"
    ]
  },
  {
    enunciado: "¿Qué opción muestra finalidad con infinitivo y el mismo sujeto en ambas acciones?",
    correcta: "Estudié toda la tarde para aprobar el examen",
    incorrectas: [
      "Estudié toda la tarde para que aprobó el examen",
      "Estudié toda la tarde porque apruebe el examen"
    ]
  },
  {
    enunciado: "¿En qué contexto es más natural ‘gracias a’ con valor causal?",
    correcta: "Gracias a tu ayuda, terminamos antes de lo previsto",
    incorrectas: [
      "Gracias a tu ayuda, para terminar antes de lo previsto",
      "Gracias a tu ayuda, así que terminamos después"
    ]
  },
  {
    enunciado: "Elige la opción con valor claramente consecuente, no causal ni final",
    correcta: "Estaba nublado; por eso, cancelaron el picnic",
    incorrectas: [
      "Estaba nublado porque cancelaron el picnic",
      "Estaba nublado para que cancelaran el picnic"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes marcadores no es conclusivo?",
    correcta: "sin embargo",
    incorrectas: [
      "por consiguiente",
      "en consecuencia"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al gerundio con valor causal aceptado por la norma?",
    correcta: "Su uso es limitado y debe evitar ambigüedades y anacolutos",
    incorrectas: [
      "Se prefiere sistemáticamente frente a las causales con ‘porque’",
      "Exige siempre un sujeto explícito independiente"
    ]
  },
  {
    enunciado: "¿Qué construcción presenta una finalidad institucionalizada en lenguaje administrativo?",
    correcta: "Con el fin de garantizar la transparencia, se publica el informe",
    incorrectas: [
      "Por el fin de garantizar la transparencia, se publica el informe",
      "Así que garantizar la transparencia, se publica el informe"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre ‘como’ causal antepuesto y pospuesto?",
    correcta: "Antepuesto introduce causa conocida con valor justificativo; pospuesto raramente es causal",
    incorrectas: [
      "Antepuesto obliga a subjuntivo; pospuesto impone imperativo",
      "No hay diferencia de uso ni de interpretación"
    ]
  },
  {
    enunciado: "Selecciona la consecutiva impropia (conclusiva) correcta",
    correcta: "Ha incumplido el contrato, por lo tanto deberá indemnizar",
    incorrectas: [
      "Ha incumplido el contrato, tan que deberá indemnizar",
      "Ha incumplido el contrato para que deberá indemnizar"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes opciones contrasta causa y finalidad de modo adecuado?",
    correcta: "Se vacunó porque era obligatorio; se vacunó para protegerse",
    incorrectas: [
      "Se vacunó porque protegerse; se vacunó para que era obligatorio",
      "Se vacunó así que era obligatorio; se vacunó tan protegido que"
    ]
  },
  {
    enunciado: "Escoge el ejemplo con uso correcto de ‘debido a’",
    correcta: "Debido a la avería, suspendieron el servicio",
    incorrectas: [
      "Debido a que la avería, suspendieron el servicio",
      "Debido la avería, suspendieron el servicio"
    ]
  },
  {
    enunciado: "¿Cuál es el error frecuente al distinguir ‘porque / por qué / porqué / por que’?",
    correcta: "Usar ‘porqué’ (sustantivo) cuando se necesita la conjunción ‘porque’",
    incorrectas: [
      "Usar ‘por que’ con relativo cuando se necesita ‘porqué’",
      "Usar ‘por qué’ en interrogativas directas"
    ]
  },
  {
    enunciado: "Señala la opción con finalidad admitida en registros coloquiales con gerundio",
    correcta: "Se levantó temprano, buscando evitar atascos",
    incorrectas: [
      "Se levantó temprano, buscando que evitara atascos el vecino",
      "Se levantó temprano, buscando que evitó atascos"
    ]
  },
  {
    enunciado: "¿Cuál de estos conectores introduce con naturalidad una consecuencia en textos académicos?",
    correcta: "en consecuencia",
    incorrectas: [
      "a pesar de",
      "si bien"
    ]
  },
  {
    enunciado: "¿Qué par de marcadores son más próximos en valor ilativo?",
    correcta: "por consiguiente / por lo tanto",
    incorrectas: [
      "sin embargo / no obstante",
      "aunque / pese a que"
    ]
  },
  {
    enunciado: "Selecciona la opción en la que ‘que’ introduce una consecutiva intensiva bien formada",
    correcta: "El río traía tanta agua que se desbordó",
    incorrectas: [
      "El río traía tanto agua para que se desbordó",
      "El río traía tan agua que se desbordó"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a ‘conque’ en el español actual?",
    correcta: "Conector coloquial con valor ilativo cercano a ‘así que’",
    incorrectas: [
      "Preposición culta de sentido final",
      "Conjunción causal exclusiva de registros formales"
    ]
  },
  {
    enunciado: "Indica la alternativa con causa interna (motivación del enunciador) y no del hecho",
    correcta: "Porque ya es tarde, lo dejamos aquí",
    incorrectas: [
      "Porque llueve, la calle está mojada",
      "Porque no había billetes, no viajamos"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes secuencias muestra una cadena causa → consecuencia?",
    correcta: "Se averió el motor, por eso perdimos potencia",
    incorrectas: [
      "Se averió el motor para perder potencia",
      "Se averió el motor aunque perdimos potencia"
    ]
  },
  {
    enunciado: "Elige la construcción final que evita redundancia con mismo sujeto",
    correcta: "Salió temprano para llegar a tiempo",
    incorrectas: [
      "Salió temprano para que llega a tiempo",
      "Salió temprano porque llegar a tiempo"
    ]
  },
  {
    enunciado: "¿Qué etiqueta funcional describe mejor el papel de un sintagma causal en la oración?",
    correcta: "Adjunto oracional con función de complemento circunstancial de causa",
    incorrectas: [
      "Atributo obligatorio del verbo copulativo",
      "Complemento de régimen preposicional fijo"
    ]
  },
  {
    enunciado: "Señala la oración donde ‘pues’ actúa como conector causal y no como muletilla discursiva",
    correcta: "No acudió a clase, pues estaba enfermo",
    incorrectas: [
      "Pues, no sé qué decir",
      "Pues, mira, que no voy"
    ]
  },
  {
    enunciado: "¿En cuál de las siguientes hay confusión entre consecuencia y finalidad?",
    correcta: "Se entrenó mucho, para que ganó la carrera",
    incorrectas: [
      "Se entrenó mucho, por lo que ganó la carrera",
      "Se entrenó mucho para ganar la carrera"
    ]
  }
];
