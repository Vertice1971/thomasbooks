// 25-procedimientos-compositivos.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué procedimiento compositivo se basa en la reaparición de una idea musical de forma idéntica o muy similar?",
    correcta: "Repetición.",
    incorrectas: [
      "Contraste.",
      "Eliminación."
    ]
  },
  {
    enunciado: "La 'Variación' consiste fundamentalmente en:",
    correcta: "Modificar algunos aspectos de un tema (ritmo, melodía, armonía) manteniendo su esencia reconocible.",
    incorrectas: [
      "Tocar una obra diferente para que el público no se aburra.",
      "Cambiar de director de orquesta en cada movimiento."
    ]
  },
  {
    enunciado: "¿Qué técnica consiste en la repetición de un motivo por una voz diferente a la que lo expuso originalmente?",
    correcta: "Imitación.",
    incorrectas: [
      "Unísono.",
      "Atonalismo."
    ]
  },
  {
    enunciado: "El 'Desarrollo' como procedimiento compositivo implica:",
    correcta: "La transformación profunda de los elementos de un tema para extraer sus posibilidades expresivas.",
    incorrectas: [
      "Hacer que la partitura ocupe más páginas mediante una letra más grande.",
      "Aumentar el número de músicos conforme avanza la obra."
    ]
  },
  {
    enunciado: "¿Qué es una 'Secuencia' o progresión?",
    correcta: "La repetición de un motivo a distintas alturas, ascendentes o descendentes.",
    incorrectas: [
      "El orden en el que los músicos salen al escenario.",
      "Un silencio que dura exactamente cuatro compases."
    ]
  },
  {
    enunciado: "La 'Inversión' de un tema consiste en:",
    correcta: "Cambiar la dirección de los intervalos (lo que antes subía, ahora baja y viceversa).",
    incorrectas: [
      "Tocar la música con los instrumentos colocados al revés.",
      "Empezar la obra por el acorde de tónica final."
    ]
  },
  {
    enunciado: "¿Qué es el 'Retrogradado' (o movimiento cancrizante)?",
    correcta: "Interpretar el tema desde la última nota hasta la primera.",
    incorrectas: [
      "Bajar el volumen hasta que no se escuche nada.",
      "Aumentar la velocidad hasta que el ritmo se rompa."
    ]
  },
  {
    enunciado: "La 'Aumentación' es un recurso que consiste en:",
    correcta: "Alargar proporcionalmente la duración de las notas de un tema.",
    incorrectas: [
      "Añadir más instrumentos de viento metal a la sección.",
      "Subir la afinación de toda la orquesta un tono entero."
    ]
  },
  {
    enunciado: "El procedimiento de 'Disminución' implica:",
    correcta: "Reducir proporcionalmente la duración de las notas de un tema original.",
    incorrectas: [
      "Quitar instrumentos para que la textura sea más delgada.",
      "Tocar con menos energía de la habitual."
    ]
  },
  {
    enunciado: "¿Qué es un 'Ostinato'?",
    correcta: "Un esquema rítmico o melódico que se repite de forma insistente durante toda una sección.",
    incorrectas: [
      "Un instrumento de percusión de origen medieval.",
      "El nombre técnico del final de una sinfonía."
    ]
  },
  {
    enunciado: "La 'Ornamentación' como técnica compositiva sirve para:",
    correcta: "Añadir notas secundarias o adornos que embellecen la línea melódica principal.",
    incorrectas: [
      "Decorar el escenario con flores y luces de colores.",
      "Pintar los instrumentos con diseños artísticos."
    ]
  },
  {
    enunciado: "¿En qué consiste la técnica del 'Espejo'?",
    correcta: "En realizar la inversión y el retrogradado simultáneamente.",
    incorrectas: [
      "En que dos músicos se miren fijamente mientras tocan.",
      "En duplicar todas las notas en el registro de octava."
    ]
  },
  {
    enunciado: "La 'Fragmentación' es un recurso del desarrollo que consiste en:",
    correcta: "Utilizar solo una parte o motivo del tema original para crear nuevas texturas.",
    incorrectas: [
      "Romper los instrumentos al finalizar la interpretación.",
      "Dividir al público en dos grupos para que canten cosas distintas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Elisión'?",
    correcta: "La supresión de algún fragmento de la frase musical que el oyente espera escuchar.",
    incorrectas: [
      "La elección de los músicos mediante un sorteo público.",
      "El aumento de la intensidad sonora de forma descontrolada."
    ]
  },
  {
    enunciado: "La 'Reexposición' es un tipo de repetición que suele aparecer:",
    correcta: "Tras una sección de contraste o desarrollo, para dar unidad y cierre a la obra.",
    incorrectas: [
      "Solo al principio de la obra antes de que suene el tema.",
      "Como un ruido de fondo que no tiene relación con el tema."
    ]
  },
  {
    enunciado: "¿Qué es la 'Interpolación'?",
    correcta: "Insertar material musical nuevo en medio de un tema preexistente.",
    incorrectas: [
      "Afinar el instrumento mientras se está tocando una nota larga.",
      "Cambiar el orden de los movimientos de una suite."
    ]
  },
  {
    enunciado: "La 'Imitación Real' es aquella donde:",
    correcta: "Los intervalos de la respuesta son exactamente iguales a los del sujeto original.",
    incorrectas: [
      "El músico imita el sonido de un animal real de la naturaleza.",
      "Se utiliza una grabación en lugar de músicos en directo."
    ]
  },
  {
    enunciado: "El 'Contraste' como procedimiento compositivo busca:",
    correcta: "Presentar ideas nuevas y diferentes para evitar la monotonía y generar tensión.",
    incorrectas: [
      "Que todos los instrumentos suenen exactamente igual.",
      "Escribir la partitura con colores opuestos."
    ]
  },
  {
    enunciado: "¿Qué es el 'Pedal'?",
    correcta: "Una nota que se mantiene fija mientras el resto de la armonía cambia.",
    incorrectas: [
      "Una pieza del piano que se pisa con el pie izquierdo.",
      "El nombre técnico de la baqueta del bombo."
    ]
  },
  {
    enunciado: "La 'Ampliación' interválica consiste en:",
    correcta: "Aumentar la distancia de los intervalos de una melodía manteniendo su perfil rítmico.",
    incorrectas: [
      "Hacer que el piano tenga más teclas de las habituales.",
      "Tocar más notas por segundo que en la sección anterior."
    ]
  },
  {
    enunciado: "En el procedimiento de 'Transformación Tímbrica', el compositor:",
    correcta: "Mantiene la melodía y el ritmo pero cambia los instrumentos que la interpretan.",
    incorrectas: [
      "Cambia el nombre de la obra justo antes del estreno.",
      "Elimina todas las notas agudas de la composición."
    ]
  },
  {
    enunciado: "¿Qué es la 'Eliminación' o reducción rítmica?",
    correcta: "Suprimir notas de un tema original para dejar solo su estructura básica.",
    incorrectas: [
      "Echar a un músico de la orquesta por tocar mal.",
      "Borrar el compás de la partitura."
    ]
  },
  {
    enunciado: "La técnica de 'Acortamiento' consiste en:",
    correcta: "Eliminar el final de una frase o motivo para acelerar el discurso musical.",
    incorrectas: [
      "Cortar las cuerdas del violín para que suenen más agudas.",
      "Reducir la duración total del concierto a la mitad."
    ]
  },
  {
    enunciado: "El 'Canon' es una forma basada estrictamente en:",
    correcta: "La imitación continua entre dos o más voces.",
    incorrectas: [
      "La repetición de un solo acorde durante diez minutos.",
      "La improvisación libre sin ninguna regla."
    ]
  },
  {
    enunciado: "¿Qué es la 'Flexión' melódica?",
    correcta: "Una pequeña alteración de la altura de algunas notas del tema original.",
    incorrectas: [
      "La gimnasia que deben hacer los músicos antes de tocar.",
      "Doblar la partitura para que ocupe menos espacio."
    ]
  },
  {
    enunciado: "La 'Variación Armónica' ocurre cuando:",
    correcta: "Se mantiene la melodía original pero se cambian los acordes que la acompañan.",
    incorrectas: [
      "Se canta la melodía en un idioma diferente.",
      "Se cambia el ritmo de binario a ternario."
    ]
  },
  {
    enunciado: "¿Qué es la 'Sustitución rítmica'?",
    correcta: "Cambiar los valores de duración de un tema manteniendo sus alturas melódicas.",
    incorrectas: [
      "Cambiar al batería por un metrónomo electrónico.",
      "Tocar las palmas en lugar de soplar por la flauta."
    ]
  },
  {
    enunciado: "El 'Hoquetus' es un procedimiento medieval de imitación donde:",
    correcta: "La melodía se reparte entre voces mediante la alternancia de notas y silencios.",
    incorrectas: [
      "Los músicos imitan el sonido de un hipo constante.",
      "Se prohíbe el uso de instrumentos de cuerda."
    ]
  },
  {
    enunciado: "La 'Densificación' textural consiste en:",
    correcta: "Añadir más voces o capas sonoras a un tema para hacerlo más complejo.",
    incorrectas: [
      "Hacer que la música suene más pesada bajando el tempo.",
      "Llenar la sala de conciertos con mucho humo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Combinatoria'?",
    correcta: "Superponer diferentes motivos que antes habían aparecido por separado.",
    incorrectas: [
      "Mezclar diferentes estilos de música en una sola canción.",
      "Elegir las notas lanzando unos dados al aire."
    ]
  },
  {
    enunciado: "La 'Transposición' consiste en:",
    correcta: "Transportar el tema original a una tonalidad o altura diferente.",
    incorrectas: [
      "Cambiar la posición de los músicos en el escenario.",
      "Escribir la partitura en un papel transparente."
    ]
  },
  {
    enunciado: "¿Qué es el 'Contramotivo'?",
    correcta: "Una idea musical secundaria que acompaña habitualmente a la imitación del tema principal.",
    incorrectas: [
      "Un motivo que se usa para anular el sonido anterior.",
      "El silencio que separa dos temas diferentes."
    ]
  },
  {
    enunciado: "La 'Permutación' es una técnica donde:",
    correcta: "Se cambia el orden de las notas o motivos de un tema.",
    incorrectas: [
      "Se cambia el instrumento por otro de la misma familia.",
      "Se pide permiso al director para improvisar una nota."
    ]
  },
  {
    enunciado: "¿Qué es el 'Estrecho' (Stretto)?",
    correcta: "Un procedimiento donde las imitaciones entran antes de que termine el tema anterior.",
    incorrectas: [
      "Un pasaje muy estrecho por donde solo cabe un flautista.",
      "Tocar la música con los labios muy apretados."
    ]
  },
  {
    enunciado: "La 'Adición' consiste en:",
    correcta: "Añadir nuevas notas al final o en medio de una frase musical.",
    incorrectas: [
      "Sumar el número de compases para saber el tiempo total.",
      "Añadir más público a la sala de conciertos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Simplificación'?",
    correcta: "Eliminar adornos y notas de paso para dejar la línea melódica desnuda.",
    incorrectas: [
      "Hacer que la música sea más fácil para que la toquen niños.",
      "Utilizar solo una cuerda del violín en toda la obra."
    ]
  },
  {
    enunciado: "La 'Variación Tímbrica' es fundamental en la música de:",
    correcta: "Klangfarbenmelodie (Melodía de timbres).",
    incorrectas: [
      "El Canto Gregoriano medieval.",
      "Las bandas de cornetas y tambores."
    ]
  },
  {
    enunciado: "¿Qué es un 'Bordón'?",
    correcta: "Una nota grave persistente sobre la que se desarrolla una melodía.",
    incorrectas: [
      "Un tipo de guitarra que solo tiene una cuerda.",
      "El final de una pieza folclórica."
    ]
  },
  {
    enunciado: "En la técnica de 'Motivo conductor', el procedimiento principal es:",
    correcta: "La repetición y variación de un tema asociado a una idea o personaje.",
    incorrectas: [
      "La improvisación total sin ningún tipo de base previa.",
      "Seguir el ritmo que marca el motor de un coche."
    ]
  },
  {
    enunciado: "La 'Economía de medios' en composición significa:",
    correcta: "Extraer el máximo partido posible a partir de un material temático muy breve.",
    incorrectas: [
      "Gastar el mínimo dinero posible en la contratación de músicos.",
      "Escribir obras que duren menos de un minuto."
    ]
  }
];