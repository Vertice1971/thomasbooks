// 22-armonia.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define la 'Armonía' en la teoría musical occidental?",
    correcta: "El estudio de la formación y combinación de sonidos simultáneos (acordes) y sus relaciones de sucesión.",
    incorrectas: [
      "La organización de los sonidos en una línea horizontal sucesiva.",
      "El análisis exclusivo de los instrumentos de percusión en la orquesta."
    ]
  },
  {
    enunciado: "En el sistema tonal, ¿qué intervalo se considera la base para la construcción de los acordes tradicionales?",
    correcta: "La tercera.",
    incorrectas: [
      "La segunda mayor.",
      "La séptima aumentada."
    ]
  },
  {
    enunciado: "El 'Bajo Continuo' fue una práctica armónica esencial del Barroco que consistía en:",
    correcta: "Una línea de bajo cifrada que indicaba los acordes que el instrumentista polifónico debía improvisar.",
    incorrectas: [
      "Un bajo que tocaba siempre la misma nota sin cambiar durante toda la obra.",
      "La obligación de que el violonchelo tocara más fuerte que el resto del grupo."
    ]
  },
  {
    enunciado: "¿Qué es un 'Acorde de Tríada'?",
    correcta: "Un acorde formado por tres sonidos: fundamental, tercera y quinta.",
    incorrectas: [
      "Un acorde que solo pueden tocar tres músicos a la vez.",
      "La suma de tres melodías diferentes que no tienen relación armónica."
    ]
  },
  {
    enunciado: "En la armonía funcional, el acorde construido sobre el V grado se denomina:",
    correcta: "Dominante.",
    incorrectas: [
      "Tónica.",
      "Subdominante."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una 'Disonancia' desde el punto de vista armónico tradicional?",
    correcta: "Una combinación de sonidos que produce tensión y que requiere, generalmente, una resolución en una consonancia.",
    incorrectas: [
      "Un sonido que es tan flojo que resulta imposible de escuchar.",
      "Cualquier nota que se toque en un piano desafinado."
    ]
  },
  {
    enunciado: "Un acorde en 'Primera Inversión' es aquel en el que:",
    correcta: "La tercera del acorde se sitúa en el bajo.",
    incorrectas: [
      "La fundamental se mantiene como la nota más grave.",
      "Se eliminan todas las notas excepto la quinta."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cadencia Perfecta'?",
    correcta: "La sucesión armónica V - I, que produce una sensación de reposo total.",
    incorrectas: [
      "El final de una obra donde todos los músicos dejan de tocar a la vez.",
      "Un acorde que contiene todas las notas de la escala cromática."
    ]
  },
  {
    enunciado: "El 'Acorde de Séptima de Dominante' añade a la tríada mayor una:",
    correcta: "Séptima menor desde la fundamental.",
    incorrectas: [
      "Séptima mayor para que suene más dulce.",
      "Octava duplicada para aumentar el volumen."
    ]
  },
  {
    enunciado: "¿Qué autor escribió el 'Tratado de Armonía' (1722) que sentó las bases de la armonía tonal moderna?",
    correcta: "Jean-Philippe Rameau.",
    incorrectas: [
      "Johann Sebastian Bach.",
      "Claudio Monteverdi."
    ]
  },
  {
    enunciado: "La 'Armonía Cromática', desarrollada ampliamente en el Romanticismo, se caracteriza por:",
    correcta: "El uso frecuente de notas y acordes ajenos a la tonalidad principal para aumentar la expresividad.",
    incorrectas: [
      "Utilizar solo las teclas blancas del piano.",
      "Prohibir el uso de alteraciones como el sostenido o el bemol."
    ]
  },
  {
    enunciado: "¿Qué es una 'Modulación' armónica?",
    correcta: "El proceso de cambiar de una tonalidad a otra dentro de una misma pieza.",
    incorrectas: [
      "Girar el botón del volumen de un amplificador de guitarra.",
      "Cambiar el ritmo de negra a corchea de forma repentina."
    ]
  },
  {
    enunciado: "El 'Acorde de Sexta Aumentada' es un recurso armónico utilizado habitualmente para:",
    correcta: "Conducir con fuerza hacia la dominante (V).",
    incorrectas: [
      "Finalizar una obra en la nota más grave del contrabajo.",
      "Sustituir al acorde de tónica en los himnos nacionales."
    ]
  },
  {
    enunciado: "En el siglo XX, la 'Armonía Cuartal' se basa en:",
    correcta: "Construir acordes superponiendo intervalos de cuarta en lugar de terceras.",
    incorrectas: [
      "Utilizar solo cuatro instrumentos en toda la composición.",
      "Tocar cuatro notas al mismo tiempo con un solo dedo."
    ]
  },
  {
    enunciado: "¿Qué es un 'Cluster' o racimo sonoro?",
    correcta: "Un acorde formado por la superposición de segundas consecutivas (gran densidad disonante).",
    incorrectas: [
      "Un grupo de músicos que tocan en diferentes salas a la vez.",
      "El silencio que se produce cuando se apaga el ordenador del estudio."
    ]
  },
  {
    enunciado: "La 'Tónica' (I grado) representa en la armonía funcional:",
    correcta: "El centro de estabilidad, reposo y resolución.",
    incorrectas: [
      "El punto de máxima tensión que obliga a cambiar de tonalidad.",
      "La nota más aguda que puede alcanzar un violín."
    ]
  },
  {
    enunciado: "¿Qué define a una 'Consonancia'?",
    correcta: "Una combinación de sonidos que se percibe como estable, relajada y completa en sí misma.",
    incorrectas: [
      "Un sonido que viaja más rápido que la luz.",
      "Tocar dos notas que están muy lejos en el teclado."
    ]
  },
  {
    enunciado: "El 'Acorde de Novena de Dominante' es especialmente característico del estilo:",
    correcta: "Impresionista (Debussy, Ravel).",
    incorrectas: [
      "Renacentista (Palestrina).",
      "Barroco temprano (Monteverdi)."
    ]
  },
  {
    enunciado: "¿Qué es la 'Serie Físico-Harmónica'?",
    correcta: "La sucesión de sonidos que acompañan a una nota fundamental y que determinan la formación de los acordes.",
    incorrectas: [
      "Un conjunto de ejercicios de gimnasia para músicos de viento.",
      "La lista de compositores que escribieron armonía en el siglo XVIII."
    ]
  },
  {
    enunciado: "La 'Sustitución Tritonal' es un recurso armónico muy usado en el Jazz que consiste en:",
    correcta: "Reemplazar un acorde de dominante por otro situado a distancia de tritono.",
    incorrectas: [
      "Cambiar las tres cuerdas más agudas de la guitarra.",
      "Tocar tres notas a la vez en lugar de una."
    ]
  },
  {
    enunciado: "Un acorde 'Disminuido' (tríada) está compuesto por:",
    correcta: "Dos terceras menores superpuestas.",
    incorrectas: [
      "Dos terceras mayores superpuestas.",
      "Una quinta justa y una tercera mayor."
    ]
  },
  {
    enunciado: "En armonía, el 'Movimiento Paralelo' de quintas y octavas está prohibido en el estilo clásico porque:",
    correcta: "Resta independencia a las voces y empobrece la sonoridad armónica.",
    incorrectas: [
      "Produce una explosión en los altavoces de la sala.",
      "Es demasiado difícil de escribir para los compositores principiantes."
    ]
  },
  {
    enunciado: "¿Qué es un 'Retardo' armónico?",
    correcta: "Una nota de un acorde anterior que se prolonga sobre el siguiente acorde, creando una disonancia que luego resuelve.",
    incorrectas: [
      "Llegar tarde al ensayo de la orquesta.",
      "Tocar la música más despacio de lo que indica el metrónomo."
    ]
  },
  {
    enunciado: "La 'Politonalidad' implica el uso de:",
    correcta: "Dos o más tonalidades o planos armónicos diferentes de forma simultánea.",
    incorrectas: [
      "Muchos instrumentos de la misma familia tocando lo mismo.",
      "Cambiar de tonalidad cada dos segundos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Armonía Funcional'?",
    correcta: "El sistema que organiza los acordes según su papel o función (tónica, subdominante, dominante) respecto a un centro.",
    incorrectas: [
      "Música que sirve para que las máquinas de una fábrica funcionen mejor.",
      "La armonía que solo se utiliza en actos oficiales del gobierno."
    ]
  },
  {
    enunciado: "El 'Acorde de Sexta Napolitana' es un acorde de:",
    correcta: "Sexta mayor sobre el segundo grado rebajado de la escala.",
    incorrectas: [
      "Origen italiano que solo se toca con mandolinas.",
      "Sexta menor que se usa para terminar todas las óperas."
    ]
  },
  {
    enunciado: "La 'Atonalidad' supuso en la armonía:",
    correcta: "La ruptura definitiva con la jerarquía tonal y la emancipación de la disonancia.",
    incorrectas: [
      "La obligación de usar solo una nota durante toda la obra.",
      "El fin de la música escrita en partituras."
    ]
  },
  {
    enunciado: "¿Qué es una 'Nota Extraña' a la armonía?",
    correcta: "Una nota que no pertenece al acorde que suena en ese momento (ej. nota de paso, apoyatura).",
    incorrectas: [
      "Una nota que suena como un animal de la selva.",
      "Una nota que no existe en el piano."
    ]
  },
  {
    enunciado: "El 'Acorde de Tristán' (de la ópera de Wagner) es famoso por:",
    correcta: "Su ambigüedad armónica, que marcó el inicio de la disolución de la tonalidad tradicional.",
    incorrectas: [
      "Ser el acorde más largo de la historia de la música.",
      "Tener que ser tocado por diez pianistas simultáneamente."
    ]
  },
  {
    enunciado: "En la escritura a cuatro voces (SATB), la 'Disposición' del acorde puede ser:",
    correcta: "Cerrada (notas juntas) o abierta (notas separadas).",
    incorrectas: [
      "Alegre o triste.",
      "Rápida o lenta."
    ]
  },
  {
    enunciado: "¿Qué es la 'Armonía de Jazz'?",
    correcta: "Un sistema que utiliza extensiones de los acordes (9ª, 11ª, 13ª) y alteraciones constantes sobre estructuras cíclicas.",
    incorrectas: [
      "Tocar siempre las mismas tres notas en la trompeta.",
      "Un estilo de armonía que prohíbe el uso del piano."
    ]
  },
  {
    enunciado: "Un acorde 'Aumentado' (tríada) consta de:",
    correcta: "Dos terceras mayores superpuestas.",
    incorrectas: [
      "Dos terceras menores y una quinta disminuida.",
      "Una octava y una cuarta justa."
    ]
  },
  {
    enunciado: "La 'Cadencia Rota' o Deceptiva ocurre cuando el V grado resuelve en:",
    correcta: "Un grado inesperado, generalmente el VI, en lugar de la tónica (I).",
    incorrectas: [
      "Un silencio absoluto que dura diez minutos.",
      "El mismo acorde de dominante repetido cien veces."
    ]
  },
  {
    enunciado: "¿Qué es el 'Paralelismo Armónico'?",
    correcta: "La sucesión de acordes de la misma estructura que se mueven en la misma dirección (típico del Impresionismo).",
    incorrectas: [
      "Dos orquestas tocando la misma obra en dos ciudades distintas.",
      "Poner dos pianos uno al lado del otro."
    ]
  },
  {
    enunciado: "En la música contemporánea, la 'Armonía Espectral' se basa en:",
    correcta: "El análisis informático del espectro sonoro y sus armónicos para generar estructuras armónicas.",
    incorrectas: [
      "Componer música para películas de fantasmas.",
      "Utilizar solo instrumentos que no se ven a simple vista."
    ]
  },
  {
    enunciado: "Un 'Bajo Cifrado' con el número '6' indica que el acorde está en:",
    correcta: "Primera inversión.",
    incorrectas: [
      "Estado fundamental.",
      "Segunda inversión."
    ]
  },
  {
    enunciado: "La 'Resolución' armónica es:",
    correcta: "El paso de un acorde tenso (disonante) a uno estable (consonante).",
    incorrectas: [
      "La calidad de imagen de la pantalla donde se lee la partitura.",
      "La decisión del músico de dejar de tocar para siempre."
    ]
  },
  {
    enunciado: "¿Qué es la 'Bitonalidad' armónica?",
    correcta: "La superposición de dos acordes pertenecientes a tonalidades diferentes.",
    incorrectas: [
      "Un acorde que tiene dos nombres diferentes.",
      "Tocar el mismo acorde con las dos manos."
    ]
  },
  {
    enunciado: "En el Clasicismo, la armonía se caracteriza por:",
    correcta: "Su claridad, sencillez y el uso de funciones tonales muy definidas.",
    incorrectas: [
      "La complejidad extrema y el uso de ruidos industriales.",
      "No utilizar nunca el acorde de tónica."
    ]
  },
  {
    enunciado: "El 'Acorde de Cuarta y Sexta' (segunda inversión) suele tener una función:",
    correcta: "Cadencial o de paso, con fuerte necesidad de resolución.",
    incorrectas: [
      "De reposo final absoluto en todas las sinfonías.",
      "De inicio de cualquier obra musical sin excepción."
    ]
  }
];