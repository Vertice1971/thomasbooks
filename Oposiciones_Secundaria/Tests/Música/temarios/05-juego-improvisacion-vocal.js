// 05-juego-improvisacion-vocal.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué objetivo pedagógico primordial persigue el juego vocal en la educación secundaria?",
    correcta: "Fomentar la desinhibición, la exploración tímbrica y la creatividad colectiva sin la presión de la técnica académica rígida.",
    incorrectas: [
      "Sustituir el aprendizaje de la lectura de partituras por el silencio absoluto durante las clases.",
      "Entrenar a los alumnos para que puedan cantar óperas completas de forma improvisada en una sola sesión."
    ]
  },
  {
    enunciado: "En la improvisación vocal, el término 'Scat' se refiere a:",
    correcta: "La improvisación vocal utilizando sílabas y palabras sin sentido fonético real, típica del Jazz.",
    incorrectas: [
      "Una técnica de respiración que consiste en aguantar el aire mientras se baila.",
      "El análisis escrito de las armonías de una canción antes de ser interpretada."
    ]
  },
  {
    enunciado: "Un ejercicio de improvisación 'dirigida' mediante señales manuales del profesor se denomina frecuentemente:",
    correcta: "Soundpainting o conducción.",
    incorrectas: [
      "Mando directo tradicional.",
      "Dictado musical rítmico."
    ]
  },
  {
    enunciado: "¿Qué es una 'Onomatopeya' en el contexto de los juegos vocales?",
    correcta: "La imitación vocal de sonidos de la naturaleza, objetos o animales para explorar texturas sonoras.",
    incorrectas: [
      "Un intervalo de cuarta aumentada que suena de forma desagradable.",
      "La repetición de una misma nota durante más de un minuto."
    ]
  },
  {
    enunciado: "La improvisación vocal 'libre' se caracteriza por:",
    correcta: "La ausencia de reglas preestablecidas de ritmo, armonía o estructura, primando la escucha y la intuición.",
    incorrectas: [
      "Tener que leer obligatoriamente un texto en latín mientras se improvisa.",
      "Seguir estrictamente una partitura escrita por el docente punto por punto."
    ]
  },
  {
    enunciado: "Un juego vocal basado en la 'Pregunta-Respuesta' fomenta:",
    correcta: "La atención auditiva, la imitación rítmico-melódica y el diálogo musical entre alumnos.",
    incorrectas: [
      "La capacidad de los alumnos para discutir sobre política internacional.",
      "El aislamiento individual para evitar que los alumnos se escuchen entre sí."
    ]
  },
  {
    enunciado: "¿Qué es un 'Ostinato' vocal improvisado?",
    correcta: "Un patrón rítmico o melódico breve que se repite de forma constante mientras otras voces improvisan encima.",
    incorrectas: [
      "Un tipo de voz que solo puede cantar notas extremadamente graves.",
      "Un instrumento de percusión que se toca con la lengua."
    ]
  },
  {
    enunciado: "En los juegos vocales 'sin melodía', el foco de atención suele estar en:",
    correcta: "El ritmo, la dinámica, la articulación y los efectos tímbricos (susurros, chasquidos, soplidos).",
    incorrectas: [
      "La afinación perfecta de una escala menor armónica.",
      "La resolución de acordes de séptima de dominante."
    ]
  },
  {
    enunciado: "La técnica del 'Circle Song' (popularizada por Bobby McFerrin) consiste en:",
    correcta: "La creación de capas sonoras cíclicas distribuidas en diferentes grupos que forman un conjunto armónico y rítmico.",
    incorrectas: [
      "Cantar canciones infantiles mientras se corre en círculos por el patio.",
      "Un concurso para ver quién es capaz de cantar la nota más alta del grupo."
    ]
  },
  {
    enunciado: "¿Cómo influye el 'juego' en el aprendizaje de la técnica vocal en adolescentes?",
    correcta: "Permite trabajar la respiración y la emisión de forma lúdica, reduciendo el miedo al error y al 'gallo'.",
    incorrectas: [
      "Hace que la laringe crezca el doble de rápido de lo normal.",
      "Impide que el alumno aprenda los nombres de las notas musicales."
    ]
  },
  {
    enunciado: "En la improvisación vocal grupal, el concepto de 'textura' se refiere a:",
    correcta: "La densidad y forma en que se combinan las diferentes propuestas sonoras de los participantes.",
    incorrectas: [
      "El tacto de las cuerdas vocales del compañero de al lado.",
      "El color del uniforme del coro municipal."
    ]
  },
  {
    enunciado: "Un juego de 'Sombra Vocal' consiste en:",
    correcta: "Imitar en tiempo real, de la forma más exacta posible, los sonidos o frases que emite un compañero.",
    incorrectas: [
      "Cantar a oscuras para que nadie vea quién se equivoca.",
      "Esconderse detrás de una cortina para que la voz suene más lejana."
    ]
  },
  {
    enunciado: "La improvisación sobre un 'Bordón' vocal implica:",
    correcta: "Cantar o improvisar sobre una nota o intervalo de quinta mantenido de forma continua.",
    incorrectas: [
      "Seguir el ritmo que marca un tambor de grandes dimensiones.",
      "Utilizar un bastón para marcar el pulso sobre el suelo de madera."
    ]
  },
  {
    enunciado: "¿Qué es el 'Beatboxing' en el contexto del aula de música?",
    correcta: "La percusión vocal que imita cajas de ritmos y sonidos electrónicos, muy motivadora en secundaria.",
    incorrectas: [
      "Una pelea de boxeo donde se intercambian gritos en lugar de golpes.",
      "El almacenamiento de partituras en cajas de cartón cuadradas."
    ]
  },
  {
    enunciado: "La improvisación vocal colectiva mejora la 'competencia social' porque:",
    correcta: "Requiere empatía, escucha activa y respeto por las aportaciones de los demás miembros del grupo.",
    incorrectas: [
      "Obliga a los alumnos a pelear por ser el solista principal de la clase.",
      "Permite que los alumnos más tímidos no tengan que abrir la boca durante el curso."
    ]
  },
  {
    enunciado: "En un juego vocal dirigido, ¿qué indica el gesto de 'abrir los brazos' del director?",
    correcta: "Generalmente solicita un aumento de la intensidad (crescendo) o una expansión de la textura.",
    incorrectas: [
      "Que los alumnos deben abandonar el aula de forma inmediata.",
      "Que la clase ha terminado y pueden irse al recreo."
    ]
  },
  {
    enunciado: "El uso de textos 'inventados' o 'jitanjáforas' en la improvisación sirve para:",
    correcta: "Centrarse exclusivamente en los valores musicales y fonéticos del sonido, sin el peso del significado.",
    incorrectas: [
      "Aprender a hablar idiomas de otros planetas mediante la imaginación.",
      "Sustituir la asignatura de lengua española por la de música."
    ]
  },
  {
    enunciado: "Un ejercicio de 'Paisaje Sonoro' vocal busca:",
    correcta: "Evocar un entorno específico (una selva, una ciudad, el mar) utilizando únicamente recursos vocales.",
    incorrectas: [
      "Dibujar montañas en un papel mientras se escucha una sinfonía de Beethoven.",
      "Realizar una excursión al campo para cantar a pleno pulmón."
    ]
  },
  {
    enunciado: "La 'Improvisación Estructural' es aquella que:",
    correcta: "Sigue un esquema o guion previo (ej: A-B-A), permitiendo libertad dentro de cada sección.",
    incorrectas: [
      "Se realiza mientras se construye un edificio o una estructura metálica.",
      "No tiene ningún tipo de orden ni concierto, siendo puro ruido caótico."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Silencio' en la improvisación vocal?",
    correcta: "Es un elemento expresivo fundamental que permite la articulación de las frases y la escucha del grupo.",
    incorrectas: [
      "Es el momento en que el profesor aprovecha para poner una mala nota a los alumnos.",
      "Es un error que debe evitarse a toda costa para que la música no se detenga."
    ]
  },
  {
    enunciado: "En un juego de 'Transformación Sonora', los alumnos deben:",
    correcta: "Modificar gradualmente un sonido inicial hasta convertirlo en algo totalmente diferente.",
    incorrectas: [
      "Disfrazarse de instrumentos musicales para actuar en el teatro del centro.",
      "Cambiar su voz de niño a adulto mediante un filtro de ordenador."
    ]
  },
  {
    enunciado: "La improvisación sobre una 'Escala Pentatónica' es ideal para principiantes porque:",
    correcta: "Evita las disonancias de semitono, facilitando que cualquier combinación de notas suene armónica.",
    incorrectas: [
      "Solo tiene cinco notas y así los alumnos no tienen que estudiar tanto.",
      "Es la única escala que está permitida por la normativa educativa vigente."
    ]
  },
  {
    enunciado: "¿Qué es la 'Polirritmia' vocal?",
    correcta: "La ejecución simultánea de diferentes patrones rítmicos por distintos grupos de voces.",
    incorrectas: [
      "Cantar una canción muy rápido mientras se toca el piano muy lento.",
      "Utilizar muchos micrófonos de diferentes colores para cantar un solo ritmo."
    ]
  },
  {
    enunciado: "El juego vocal 'El Director Mudo' fomenta:",
    correcta: "La comunicación no verbal y la atención visual del coro hacia los gestos del compañero que dirige.",
    incorrectas: [
      "Que el profesor de música no pueda hablar durante todo el trimestre.",
      "El aprendizaje del lenguaje de signos para personas sordas exclusivamente."
    ]
  },
  {
    enunciado: "La improvisación 'Melismática' consiste en:",
    correcta: "Cantar muchas notas sobre una sola sílaba de texto.",
    incorrectas: [
      "Cantar una nota diferente para cada sílaba, como en un rap.",
      "No utilizar ninguna sílaba y limitarse a dar palmas rítmicas."
    ]
  },
  {
    enunciado: "En los juegos vocales, el uso del 'Cuerpo como Resonador' implica:",
    correcta: "Utilizar percusión corporal (pecho, muslos, palmas) para acompañar las improvisaciones de voz.",
    incorrectas: [
      "Golpearse la cabeza contra la pared para producir sonidos huecos.",
      "Meterse dentro de un bombo para que la voz resuene más fuerte."
    ]
  },
  {
    enunciado: "Un juego de 'Acumulación' vocal se realiza cuando:",
    correcta: "Cada alumno añade un sonido o motivo nuevo a lo que ya están haciendo los anteriores.",
    incorrectas: [
      "Se guardan todos los instrumentos en un armario muy pequeño al final de la clase.",
      "Se suman las notas de todos los exámenes para dar una sola calificación grupal."
    ]
  },
  {
    enunciado: "La 'Improvisación Modal' en la voz se basa en:",
    correcta: "Explorar las sonoridades de los modos antiguos o escalas específicas (dórico, frigio, etc.).",
    incorrectas: [
      "Improvisar siguiendo las últimas modas de la ropa de los cantantes famosos.",
      "Cantar solo las notas que se encuentran en el modo de espera del teléfono."
    ]
  },
  {
    enunciado: "¿Qué es el 'Overtoning' o canto de armónicos?",
    correcta: "Una técnica vocal que permite producir dos sonidos simultáneos resaltando los armónicos superiores.",
    incorrectas: [
      "Gritar por encima de la voz de los demás para que solo se nos escuche a nosotros.",
      "Cantar una canción entera utilizando solo la letra 'O'."
    ]
  },
  {
    enunciado: "En el aula de secundaria, la improvisación vocal colectiva ayuda a reducir:",
    correcta: "La ansiedad escénica y el miedo al juicio de los iguales.",
    incorrectas: [
      "El hambre y la sed de los alumnos después del recreo.",
      "La estatura de los alumnos que son demasiado altos para el coro."
    ]
  },
  {
    enunciado: "Un juego de 'Dialectos Inventados' permite trabajar:",
    correcta: "La articulación, el acento rítmico y la expresividad dramática de la voz.",
    incorrectas: [
      "La traducción de textos antiguos del griego al castellano actual.",
      "El estudio de los mapas de las lenguas románicas en Europa."
    ]
  },
  {
    enunciado: "La 'Improvisación por Imitación' (Ecos) es el primer paso para:",
    correcta: "Desarrollar el vocabulario musical necesario para realizar improvisaciones libres posteriormente.",
    incorrectas: [
      "Copiar los exámenes de los compañeros sin que el profesor se dé cuenta.",
      "Aprender a hablar exactamente igual que el profesor de música."
    ]
  },
  {
    enunciado: "En los juegos vocales, la 'Dinámica' se trabaja mediante:",
    correcta: "La variación consciente del volumen, desde el murmullo casi inaudible hasta el forte pleno.",
    incorrectas: [
      "La velocidad a la que los alumnos mueven los brazos durante el canto.",
      "El número de veces que el alumno salta mientras improvisa."
    ]
  },
  {
    enunciado: "¿Qué es una 'Máquina Sonora' vocal?",
    correcta: "Un juego grupal donde cada alumno realiza un movimiento y sonido repetitivo acoplado al de los demás.",
    incorrectas: [
      "Un ordenador que compone música automáticamente sin intervención humana.",
      "Un aparato que se coloca en la garganta para cantar como un robot."
    ]
  },
  {
    enunciado: "La improvisación vocal en el aula de música se vincula con la metodología de:",
    correcta: "Murray Schafer y su concepto de limpieza de oídos y educación sonora.",
    incorrectas: [
      "La educación física de alto rendimiento para atletas olímpicos.",
      "El aprendizaje de las matemáticas mediante el cálculo mental silencioso."
    ]
  },
  {
    enunciado: "Un juego de 'Pregunta-Respuesta' rítmica sin altura definida trabaja:",
    correcta: "La precisión en el ataque, la duración de los sonidos y la memoria rítmica.",
    incorrectas: [
      "La capacidad de cantar un do de pecho perfectamente afinado.",
      "El conocimiento de la historia de la ópera italiana del siglo XIX."
    ]
  },
  {
    enunciado: "En la improvisación dirigida, el gesto de 'cerrar el puño' suele significar:",
    correcta: "Corte inmediato del sonido (silencio).",
    incorrectas: [
      "Que los alumnos deben apretar los dientes y cantar con rabia.",
      "Que el profesor va a lanzar un objeto al alumno que esté distraído."
    ]
  },
  {
    enunciado: "La 'Evaluación' de la improvisación vocal debe centrarse en:",
    correcta: "La participación, la originalidad de las propuestas y la capacidad de escucha y adaptación al grupo.",
    incorrectas: [
      "La perfección técnica de cada nota según el estándar de un conservatorio superior.",
      "Contar el número exacto de palabras que el alumno ha inventado."
    ]
  },
  {
    enunciado: "Un reto de improvisación 'con melodía' para alumnos de 4º de ESO podría ser:",
    correcta: "Improvisar una variante melódica sobre la estructura armónica de un Blues de 12 compases.",
    incorrectas: [
      "Cantar una canción que ya se saben de memoria sin cambiar ni una sola nota.",
      "Escribir una fuga a cuatro voces siguiendo las reglas de J.S. Bach."
    ]
  },
  {
    enunciado: "El fin último de los juegos e improvisaciones vocales es:",
    correcta: "Desarrollar la autonomía expresiva y el placer por la creación musical compartida.",
    incorrectas: [
      "Conseguir que el aula de música sea el lugar más ruidoso del instituto.",
      "Demostrar que no hace falta estudiar música para ser un gran artista."
    ]
  }
];