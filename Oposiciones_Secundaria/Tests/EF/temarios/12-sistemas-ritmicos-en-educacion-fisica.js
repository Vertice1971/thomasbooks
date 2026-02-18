
// -12-sistemas-ritmicos-en-educacion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué autor es considerado el padre de la 'Rítmica' y un pionero en vincular el movimiento corporal con la educación musical?",
    correcta: "Émile Jaques-Dalcroze",
    incorrectas: ["Pehr Henrik Ling", "Thomas Arnold"]
  },
  {
    enunciado: "El objetivo principal del método Dalcroze es:",
    correcta: "Desarrollar la sensibilidad rítmica y la coordinación mediante la interpretación corporal de la música.",
    incorrectas: ["Aumentar la fuerza explosiva para el lanzamiento de jabalina.", "Corregir escoliosis mediante ejercicios estáticos."]
  },
  {
    enunciado: "¿Cuál es la característica técnica fundamental de los sistemas rítmicos?",
    correcta: "La subordinación del movimiento al tempo, la intensidad y la estructura de un estímulo sonoro.",
    incorrectas: ["La ausencia total de cualquier tipo de sonido o música.", "El uso exclusivo de máquinas de resistencia neumática."]
  },
  {
    enunciado: "La 'Gimnasia Moderna' (o Gimnasia Rítmica actual) tiene sus raíces en la escuela centroeuropea de:",
    correcta: "Rudolf Bode y Heinrich Medau.",
    incorrectas: ["Georges Hébert.", "James Naismith."]
  },
  {
    enunciado: "Un aporte clave de Heinrich Medau a los sistemas rítmicos fue:",
    correcta: "La introducción de pequeños aparatos manuales (pelota, aro, mazas) y el trabajo de respiración.",
    incorrectas: ["La invención del cronómetro digital.", "El uso de uniformes de camuflaje en Educación Física."]
  },
  {
    enunciado: "¿Qué concepto técnico define Dalcroze como la capacidad de transformar rápidamente una orden mental en una acción motriz rítmica?",
    correcta: "Eurritmia.",
    incorrectas: ["Hipertrofia rítmica.", "Apnea musical."]
  },
  {
    enunciado: "En los sistemas rítmicos, el 'pulso' se define como:",
    correcta: "La unidad básica de tiempo constante que divide la estructura musical.",
    incorrectas: ["El número de veces que el corazón late por hora.", "La fuerza con la que se golpea un balón."]
  },
  {
    enunciado: "La 'Danza Moderna' de Isadora Duncan influyó en la Educación Física al promover:",
    correcta: "El movimiento natural, libre y expresivo frente a la rigidez del ballet clásico.",
    incorrectas: ["El uso de puntas de acero en los pies para bailar.", "La prohibición de cualquier tipo de expresión emocional."]
  },
  {
    enunciado: "La aplicación actual de los sistemas rítmicos en Secundaria se manifiesta en contenidos de:",
    correcta: "Coreografías, Aeróbic, Zumba y bailes de salón.",
    incorrectas: ["Lanzamiento de peso y disco.", "Escalada en roca y rappel."]
  },
  {
    enunciado: "¿Qué beneficio psicomotor aportan los sistemas rítmicos al adolescente?",
    correcta: "Mejora de la estructuración espacio-temporal y de la coordinación dinámica general.",
    incorrectas: ["Disminución de la capacidad de audición por el exceso de ruido.", "Aumento del sedentarismo durante las sesiones."]
  },
  {
    enunciado: "En la terminología rítmica, el 'acento' es:",
    correcta: "El pulso o tiempo que destaca sobre los demás por su intensidad.",
    incorrectas: ["La forma de hablar del profesor de Educación Física.", "El lugar donde se colocan las tildes en los nombres de los músculos."]
  },
  {
    enunciado: "El 'Aeróbic', surgido en los años 60-70, adaptó los sistemas rítmicos para:",
    correcta: "La mejora de la resistencia cardiovascular mediante movimientos gimnásticos coreografiados.",
    incorrectas: ["La preparación para competiciones de halterofilia.", "El estudio de la física del sonido en el vacío."]
  },
  {
    enunciado: "¿Qué autor desarrolló la 'Expresión Corporal' como una disciplina pedagógica en España?",
    correcta: "Patricia Stokoe (aunque argentina, es la gran referente en el ámbito hispano).",
    incorrectas: ["José María Cagigal.", "Miguel de Unamuno."]
  },
  {
    enunciado: "Un elemento técnico esencial en la enseñanza de sistemas rítmicos es la 'Frase Musical', que consiste en:",
    correcta: "Un conjunto de compases que forman una unidad con sentido dentro de una melodía.",
    incorrectas: ["Una oración que el profesor grita durante el ejercicio.", "El nombre de una canción famosa."]
  },
  {
    enunciado: "Los sistemas rítmicos favorecen la coeducación en Secundaria porque:",
    correcta: "Permiten el trabajo cooperativo y expresivo en grupos mixtos, rompiendo estereotipos de género.",
    incorrectas: ["Son actividades exclusivamente femeninas según la ley.", "Obligan a los alumnos varones a no moverse."]
  },
  {
    enunciado: "En la LOMLOE, los sistemas rítmicos se integran en el saber básico de:",
    correcta: "Manifestaciones de la cultura motriz (Expresión Corporal y Danza).",
    incorrectas: ["Vida activa y saludable (solo nutrición).", "Interacción eficiente en medios naturales."]
  },
  {
    enunciado: "¿Qué caracteriza al 'Compás' en la estructura del movimiento rítmico?",
    correcta: "La división del tiempo en partes iguales que organiza los acentos.",
    incorrectas: ["Un instrumento para dibujar círculos en la pizarra.", "La dirección del viento durante la carrera."]
  },
  {
    enunciado: "El 'Ritmo Biológico' (circadiano) se diferencia del 'Ritmo Musical' en que el primero:",
    correcta: "Es una periodicidad interna del organismo (sueño-vigilia, temperatura).",
    incorrectas: ["Se puede bailar en una discoteca.", "Depende únicamente de la voluntad del sujeto."]
  },
  {
    enunciado: "La 'Gimnasia Jazz' es una evolución de los sistemas rítmicos que combina:",
    correcta: "Técnica de danza jazz con objetivos de acondicionamiento físico.",
    incorrectas: ["El levantamiento de pesas con música clásica.", "La natación sincronizada en seco."]
  },
  {
    enunciado: "¿Qué importancia tiene la 'improvisación' en los sistemas rítmicos pedagógicos?",
    correcta: "Fomenta la creatividad motriz y la respuesta espontánea al estímulo sonoro.",
    incorrectas: ["Es una falta de preparación del profesor que debe evitarse.", "Sirve para que los alumnos no sigan ninguna regla."]
  },
  {
    enunciado: "En la evaluación de una coreografía en Secundaria, se debe valorar técnicamente:",
    correcta: "La sincronización con el ritmo, el uso del espacio y la fluidez de los enlaces.",
    incorrectas: ["La marca de las zapatillas de los alumnos.", "El número de veces que parpadean durante el baile."]
  },
  {
    enunciado: "El 'Step' es una variante del aeróbic que utiliza:",
    correcta: "Una plataforma de altura regulable para aumentar la intensidad del trabajo cardiovascular.",
    incorrectas: ["Unos zapatos con muelles en la suela.", "Una escalera mecánica de centro comercial."]
  },
  {
    enunciado: "Los sistemas rítmicos consideran el cuerpo como un instrumento de:",
    correcta: "Comunicación, expresión y percusión.",
    incorrectas: ["Carga para el transporte de mercancías.", "Inmovilidad absoluta."]
  },
  {
    enunciado: "¿Qué autor propuso la 'Danza Educativa Moderna' basándose en el análisis del movimiento (Labanotation)?",
    correcta: "Rudolf Laban",
    incorrectas: ["Isadora Duncan", "Martha Graham"]
  },
  {
    enunciado: "En los sistemas rítmicos, el 'canon' es una estructura en la que:",
    correcta: "Diferentes grupos realizan el mismo movimiento pero empezando en tiempos distintos.",
    incorrectas: ["Todos los alumnos disparan un arma antigua a la vez.", "Se paga una tasa económica por entrar al gimnasio."]
  },
  {
    enunciado: "La aplicación de los sistemas rítmicos ayuda a los alumnos a mejorar su:",
    correcta: "Autoestima, imagen corporal y desinhibición social.",
    incorrectas: ["Capacidad de cálculo matemático avanzado.", "Velocidad de crecimiento óseo."]
  },
  {
    enunciado: "Un ejercicio rítmico 'binario' es aquel cuyo compás se divide en:",
    correcta: "Dos partes o pulsos (ej. 2/4).",
    incorrectas: ["Tres partes (ej. 3/4).", "Diez partes iguales."]
  },
  {
    enunciado: "La 'Percusión Corporal' (Body Percussion) consiste en:",
    correcta: "Utilizar el propio cuerpo como instrumento rítmico mediante palmadas, pisotones, etc.",
    incorrectas: ["Golpear al compañero para marcar el ritmo.", "Tocar el tambor mientras se corre."]
  },
  {
    enunciado: "En el sistema rítmico de Medau, el 'balanceo' es un movimiento fundamental que busca:",
    correcta: "La fluidez, la relajación segmentaria y la inercia natural del cuerpo.",
    incorrectas: ["La rigidez absoluta para evitar caídas.", "El aumento brusco de la presión arterial."]
  },
  {
    enunciado: "¿Qué relación existe entre 'Ritmo' y 'Agilidad'?",
    correcta: "Un buen sentido del ritmo facilita la coordinación necesaria para los cambios rápidos de dirección.",
    incorrectas: ["Son conceptos opuestos: el ritmo es lento y la agilidad rápida.", "No tienen ninguna relación fisiológica ni mecánica."]
  },
  {
    enunciado: "La 'Salsa', el 'Merengue' o el 'Hip-hop' se integran en EF como:",
    correcta: "Danzas sociales y urbanas con un alto componente motivador y rítmico.",
    incorrectas: ["Actividades prohibidas por no ser deportes olímpicos.", "Formas de estudiar la geografía del Caribe."]
  },
  {
    enunciado: "El 'Tempo' musical indica:",
    correcta: "La velocidad de ejecución de la pieza musical (Largo, Allegro, Presto).",
    incorrectas: ["El tiempo atmosférico que hace fuera del gimnasio.", "La duración total de la clase de Educación Física."]
  },
  {
    enunciado: "En la enseñanza rítmica, el método 'global' consiste en:",
    correcta: "Presentar la frase musical y el movimiento completo para que el alumno capte el sentido rítmico.",
    incorrectas: ["Analizar cada nota musical por separado antes de moverse.", "Realizar el ejercicio solo con el dedo índice."]
  },
  {
    enunciado: "Los sistemas rítmicos en Secundaria contribuyen al desarrollo de la competencia específica de:",
    correcta: "Expresión y comunicación a través de la cultura motriz.",
    incorrectas: ["Competencia matemática y ciencia nuclear.", "Competencia lingüística en latín clásico."]
  },
  {
    enunciado: "La 'Estructuralidad' del ritmo implica que este tiene:",
    correcta: "Un orden, una jerarquía y una repetición que el cerebro puede predecir.",
    incorrectas: ["Una falta total de sentido y coherencia.", "Una estructura física de metal y madera."]
  },
  {
    enunciado: "¿Qué papel juega el 'silencio' en los sistemas rítmicos?",
    correcta: "Es un elemento rítmico activo que requiere control motor e inhibición de la acción.",
    incorrectas: ["Es el momento en el que el alumno puede irse a casa.", "Es un error que debe ser castigado por el profesor."]
  },
  {
    enunciado: "La 'Respiración' en la gimnasia rítmica de Medau debe estar:",
    correcta: "Sincronizada con el movimiento para favorecer la fluidez y la oxigenación.",
    incorrectas: ["Bloqueada en apnea durante todo el ejercicio.", "Realizada solo por la boca de forma forzada."]
  },
  {
    enunciado: "Un ejercicio de 'desplazamiento rítmico' en Secundaria podría ser:",
    correcta: "Realizar pasos de polca o galope siguiendo el ritmo de un pandero.",
    incorrectas: ["Arrastrarse por el suelo en silencio absoluto.", "Estar sentado en un banco sin mover los pies."]
  },
  {
    enunciado: "La 'Danza Creativa' permite que el alumno:",
    correcta: "Explore sus propias posibilidades de movimiento sin modelos rígidos preestablecidos.",
    incorrectas: ["Copie exactamente lo que hace el profesor sin ninguna variación.", "No se mueva en absoluto durante toda la sesión."]
  },
  {
    enunciado: "La vigencia de los sistemas rítmicos en la Educación Física actual radica en:",
    correcta: "Su capacidad para integrar lo físico, lo artístico y lo emocional en una misma tarea.",
    incorrectas: ["Que son la única forma de perder peso rápidamente.", "Que no requieren ningún tipo de esfuerzo por parte del profesor."]
  }
];
