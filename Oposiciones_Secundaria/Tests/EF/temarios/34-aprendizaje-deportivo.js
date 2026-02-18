// 34-aprendizaje-deportivo.js

var PREGUNTAS = [
  {
    enunciado: "En el contexto del aprendizaje deportivo, ¿cómo se define el término 'Transferencia Positiva'?",
    correcta: "Cuando los aprendizajes previos o la práctica de una habilidad facilitan la adquisición o ejecución de una nueva tarea motriz.",
    incorrectas: [
      "Cuando la práctica de una habilidad interfiere negativamente y dificulta el aprendizaje de una técnica similar.",
      "Cuando el alumno olvida una técnica antigua para poder integrar una nueva de forma aislada."
    ]
  },
  {
    enunciado: "Según el modelo de Fitts y Posner (1967), ¿cuál es la característica principal de la 'Fase Cognitiva'?",
    correcta: "El alumno intenta comprender los objetivos de la tarea y se produce una alta carga intelectual con errores frecuentes y groseros.",
    incorrectas: [
      "El movimiento se vuelve automático y el sujeto puede centrar su atención en estímulos tácticos externos.",
      "Se produce un refinamiento de la técnica y el alumno empieza a detectar sus propios errores sin ayuda externa."
    ]
  },
  {
    enunciado: "La 'Variabilidad de la Práctica', esencial en la iniciación deportiva, postula que:",
    correcta: "Practicar una misma habilidad bajo diferentes condiciones ambientales y de ejecución fortalece el esquema motor y la adaptabilidad.",
    incorrectas: [
      "Es mejor repetir el mismo gesto técnico de forma idéntica miles de veces para asegurar la fijación mecánica.",
      "Solo se debe cambiar de ejercicio cuando el alumno ha alcanzado la fase de autonomía técnica completa."
    ]
  },
  {
    enunciado: "En la teoría del procesamiento de la información, el mecanismo de 'Decisión' se encarga de:",
    correcta: "Elegir la respuesta motriz adecuada tras analizar los estímulos percibidos y compararlos con la memoria a largo plazo.",
    incorrectas: [
      "Captar las señales del entorno a través de los órganos sensoriales (vista, oído, propiocepción).",
      "Enviar las órdenes nerviosas a los músculos efectores para realizar el movimiento físico."
    ]
  },
  {
    enunciado: "¿Qué diferencia a una tarea 'Abierta' de una 'Cerrada' en el aprendizaje deportivo?",
    correcta: "Las tareas abiertas se realizan en entornos inestables e impredecibles, mientras que las cerradas se dan en medios fijos y estables.",
    incorrectas: [
      "Las tareas abiertas son individuales y las cerradas son obligatoriamente colectivas o de equipo.",
      "Las tareas cerradas no permiten el uso de material deportivo y las abiertas sí."
    ]
  },
  {
    enunciado: "El 'Feedback Intrínseco' es aquel que:",
    correcta: "Proviene de los propios receptores sensoriales del alumno (cinestesia, visión, equilibrio) durante o después de la acción.",
    incorrectas: [
      "Es proporcionado por el profesor o entrenador mediante correcciones verbales o grabaciones de vídeo.",
      "Se refiere exclusivamente a la nota o calificación numérica obtenida al final de una prueba física."
    ]
  },
  {
    enunciado: "En el aprendizaje deportivo, el 'Método Global' consiste en:",
    correcta: "Presentar y ejecutar la tarea motriz de forma completa, manteniendo la estructura y finalidad real del movimiento.",
    incorrectas: [
      "Dividir la técnica en partes separadas para practicarlas de forma aislada antes de unirlas.",
      "Practicar todos los deportes de una misma familia en una sola sesión de entrenamiento."
    ]
  },
  {
    enunciado: "La 'Fase Asociativa' del aprendizaje motor se caracteriza por:",
    correcta: "Una reducción del número de errores, una mayor fluidez en el movimiento y el inicio de la detección de fallos propios.",
    incorrectas: [
      "La ejecución mecánica perfecta que no requiere atención consciente por parte del deportista.",
      "La incapacidad total de coordinar los segmentos corporales debido a la fatiga nerviosa."
    ]
  },
  {
    enunciado: "El concepto de 'Retención' en el aprendizaje deportivo se refiere a:",
    correcta: "La capacidad de ejecutar una habilidad aprendida tras un periodo de tiempo sin haberla practicado.",
    incorrectas: [
      "La fuerza que ejerce el oponente para impedir que el jugador avance hacia la meta.",
      "La acumulación de líquidos en los músculos tras una sesión de carga física intensa."
    ]
  },
  {
    enunciado: "Según la Teoría del Esquema de Schmidt, el 'Programa Motor Generalizado' permite:",
    correcta: "Ejecutar una clase de movimientos similares ajustando parámetros como la fuerza o la velocidad según la situación.",
    incorrectas: [
      "Realizar un único movimiento específico que nunca varía independientemente del contexto.",
      "Aprender a nadar sin necesidad de entrar en contacto con el agua mediante la visualización."
    ]
  },
  {
    enunciado: "¿Qué es el 'Conocimiento de los Resultados' (CR)?",
    correcta: "Información extrínseca sobre el éxito de la acción en relación con el objetivo propuesto (ej. 'el balón entró').",
    incorrectas: [
      "La sensación interna de tensión muscular durante el golpeo de una pelota.",
      "El análisis biomecánico detallado de la posición del codo durante un lanzamiento."
    ]
  },
  {
    enunciado: "La 'Práctica Distribuida' es aquella en la que:",
    correcta: "Se intercalan periodos de descanso o de otras actividades entre las repeticiones de la tarea principal.",
    incorrectas: [
      "Se realiza la práctica de forma continua y sin pausas hasta que aparece la fatiga extrema.",
      "Los alumnos se reparten por todo el espacio disponible para no chocar entre ellos."
    ]
  },
  {
    enunciado: "En el aprendizaje deportivo, ¿qué es la 'Anticipación'? hoarding",
    correcta: "La capacidad de predecir lo que va a suceder en el entorno para iniciar la respuesta motriz antes del estímulo final.",
    incorrectas: [
      "Llegar al entrenamiento antes de que el profesor abra las instalaciones del gimnasio.",
      "Realizar un calentamiento excesivamente largo que agota las reservas de glucógeno."
    ]
  },
  {
    enunciado: "El 'Aprendizaje por Descubrimiento Guiado' implica que:",
    correcta: "El profesor plantea retos y preguntas para que el alumno encuentre la solución motriz por sí mismo.",
    incorrectas: [
      "El profesor demuestra la técnica perfecta y el alumno debe imitarla exactamente como un espejo.",
      "No hay ningún tipo de intervención docente y el alumno hace lo que quiere sin objetivos."
    ]
  },
  {
    enunciado: "La 'Fase Autónoma' es el estadio final del aprendizaje donde:",
    correcta: "El control del movimiento es automático y el deportista puede procesar información táctica ambiental compleja.",
    incorrectas: [
      "El alumno requiere la supervisión constante del profesor para no cometer errores técnicos graves.",
      "El sujeto decide libremente si quiere practicar deporte o prefiere estudiar teoría."
    ]
  },
  {
    enunciado: "La 'Transferencia Bilateral' se produce cuando:",
    correcta: "La práctica con un miembro del cuerpo (ej. mano derecha) mejora el rendimiento del miembro opuesto (mano izquierda).",
    incorrectas: [
      "Dos alumnos intercambian sus materiales deportivos durante el transcurso de una sesión.",
      "El aprendizaje de un deporte de equipo facilita el aprendizaje de un deporte individual."
    ]
  },
  {
    enunciado: "Un 'Error de Percepción' en el aprendizaje deportivo ocurre cuando:",
    correcta: "El alumno no interpreta correctamente los estímulos del entorno, como la trayectoria de un balón.",
    incorrectas: [
      "El alumno sabe qué hacer pero sus músculos no tienen la fuerza suficiente para ejecutarlo.",
      "El profesor evalúa de forma subjetiva y otorga una nota equivocada al estudiante."
    ]
  },
  {
    enunciado: "El 'Feedback Concurrente' es aquel que se proporciona:",
    correcta: "Durante la ejecución de la tarea motriz, permitiendo ajustes inmediatos.",
    incorrectas: [
      "Al finalizar la sesión de clase como resumen general de lo aprendido.",
      "Únicamente a los alumnos que han suspendido la evaluación inicial."
    ]
  },
  {
    enunciado: "En la jerarquía de las tareas motrices, una tarea de 'Gran Complejidad' es aquella que:",
    correcta: "Requiere procesar mucha información, tomar decisiones rápidas y coordinar muchos segmentos corporales.",
    incorrectas: [
      "Es muy aburrida y requiere mucho tiempo de práctica repetitiva sin sentido.",
      "No tiene ninguna regla establecida y depende solo del azar."
    ]
  },
  {
    enunciado: "El 'Modelado' como técnica de enseñanza se basa en:",
    correcta: "La observación de un modelo (compañero, vídeo o profesor) para facilitar la creación del plan motor.",
    incorrectas: [
      "La construcción de maquetas de instalaciones deportivas para entender la táctica.",
      "El fortalecimiento muscular mediante el uso de pesas y máquinas de gimnasio."
    ]
  },
  {
    enunciado: "La 'Práctica Mental' o visualización:",
    correcta: "Consiste en la representación simbólica de la tarea sin movimiento físico, ayudando a la retención y confianza.",
    incorrectas: [
      "Es un estado de sueño profundo que los deportistas deben alcanzar antes de competir.",
      "Sustituye por completo a la práctica física, siendo innecesario moverse para aprender."
    ]
  },
  {
    enunciado: "El 'Conocimiento de la Ejecución' (CE) se centra en:",
    correcta: "La información sobre la calidad del patrón de movimiento realizado (ej. 'has flexionado poco las rodillas').",
    incorrectas: [
      "Saber cuántos puntos faltan para que termine el partido oficial.",
      "La sensación de fatiga que siente el alumno al terminar una carrera de 12 minutos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Carga Cognitiva' en el aprendizaje deportivo?",
    correcta: "La cantidad de esfuerzo mental y procesamiento de información que requiere una tarea específica.",
    incorrectas: [
      "El peso del material didáctico que el alumno debe transportar al campo de juego.",
      "La cantidad de datos estadísticos que el entrenador debe memorizar sobre los rivales."
    ]
  },
  {
    enunciado: "El 'Aprendizaje Significativo' en Educación Física ocurre cuando:",
    correcta: "El alumno relaciona los nuevos contenidos deportivos con sus experiencias y conocimientos previos.",
    incorrectas: [
      "El alumno memoriza el reglamento de un deporte de forma literal para el examen escrito.",
      "El profesor utiliza silbatos de diferentes sonidos para dar órdenes contradictorias."
    ]
  },
  {
    enunciado: "La 'Transferencia Negativa' se produce cuando:",
    correcta: "Un hábito motor previo interfiere e impide el aprendizaje correcto de una técnica nueva similar.",
    incorrectas: [
      "El alumno suspende el examen de deportes individuales por falta de asistencia.",
      "La práctica de baloncesto ayuda a mejorar el salto en voleibol de forma indirecta."
    ]
  },
  {
    enunciado: "En el aprendizaje motor, la 'Meseta' es un periodo en el que:",
    correcta: "No se observan mejoras aparentes en el rendimiento a pesar de continuar con la práctica.",
    incorrectas: [
      "El alumno mejora de forma exponencial y muy rápida en cada sesión de clase.",
      "El deportista alcanza su máximo potencial genético y debe retirarse de la práctica."
    ]
  },
  {
    enunciado: "El 'Mecanismo de Ejecución' depende principalmente de:",
    correcta: "La condición física del sujeto (fuerza, velocidad, flexibilidad) y su coordinación neuromuscular.",
    incorrectas: [
      "La capacidad visual para detectar el color de la camiseta de los adversarios.",
      "El nivel de motivación extrínseca proporcionado por los premios económicos."
    ]
  },
  {
    enunciado: "La 'Práctica en Bloque' consiste en:",
    correcta: "Repetir la misma tarea motriz de forma sucesiva antes de pasar a otra diferente.",
    incorrectas: [
      "Realizar ejercicios de fuerza utilizando bloques de cemento o materiales pesados.",
      "Entrenar a todos los alumnos de un mismo barrio en el mismo horario escolar."
    ]
  },
  {
    enunciado: "El 'Feedback Terminal' es aquel que se recibe:",
    correcta: "Inmediatamente después de completar la acción o el intento motor.",
    incorrectas: [
      "Solo cuando el alumno decide abandonar definitivamente la práctica deportiva.",
      "Durante los primeros segundos de la fase de calentamiento articular."
    ]
  },
  {
    enunciado: "La 'Atención Selectiva' permite al deportista:",
    correcta: "Centrarse en los estímulos relevantes (balón, compañeros) e ignorar los irrelevantes (público, ruido).",
    incorrectas: [
      "Mirar a todos los puntos del campo al mismo tiempo sin fijar la vista en nada.",
      "Pensar en sus tareas escolares mientras realiza un lanzamiento de tiro libre."
    ]
  },
  {
    enunciado: "¿Qué define a la 'Habilidad Motriz Básica'?",
    correcta: "Patrones de movimiento generales (correr, saltar, lanzar) que sirven de base para habilidades más complejas.",
    incorrectas: [
      "Técnicas muy específicas y reglamentadas de un deporte olímpico concreto.",
      "La capacidad de realizar operaciones matemáticas mientras se camina por el bosque."
    ]
  },
  {
    enunciado: "El 'Tiempo de Reacción' es el intervalo entre:",
    correcta: "La aparición de un estímulo y el inicio de la respuesta motriz.",
    incorrectas: [
      "El pitido inicial del árbitro y el final del tiempo reglamentario del partido.",
      "El inicio del movimiento y la consecución del objetivo (ej. tocar la meta)."
    ]
  },
  {
    enunciado: "La 'Práctica Variable' comparada con la 'Práctica Constante' suele dar como resultado:",
    correcta: "Un menor rendimiento durante la adquisición, pero una mayor retención y capacidad de transferencia.",
    incorrectas: [
      "Una mejora inmediata y espectacular de la técnica desde el primer minuto de práctica.",
      "Un aburrimiento crónico del alumno que le lleva a abandonar la Educación Física."
    ]
  },
  {
    enunciado: "En la LOMLOE, el aprendizaje deportivo debe orientarse hacia:",
    correcta: "La alfabetización motriz y el desarrollo de la competencia necesaria para una vida activa y saludable.",
    incorrectas: [
      "La especialización temprana y la obtención de medallas en competiciones federadas.",
      "El aprendizaje memorístico de la biografía de los grandes mitos del deporte mundial."
    ]
  },
  {
    enunciado: "El 'Feedback Evaluativo' tiene como función:",
    correcta: "Informar al alumno sobre el nivel de logro alcanzado en relación con los criterios de evaluación.",
    incorrectas: [
      "Criticar negativamente la personalidad del alumno para motivarle por miedo.",
      "Sustituir el esfuerzo físico por charlas teóricas sobre la historia de la pedagogía."
    ]
  },
  {
    enunciado: "La 'Memoria Motriz' se localiza principalmente en:",
    correcta: "Estructuras como el cerebelo y los ganglios basales, encargadas de la automatización.",
    incorrectas: [
      "El lóbulo occipital, encargado exclusivamente de la interpretación de los colores.",
      "Los músculos de las piernas, que almacenan los recuerdos de forma autónoma."
    ]
  },
  {
    enunciado: "Un factor que influye negativamente en el aprendizaje deportivo es:",
    correcta: "Un nivel de ansiedad o activación (arousal) excesivamente alto o excesivamente bajo.",
    incorrectas: [
      "Tener una buena condición física de base antes de empezar a aprender la técnica.",
      "Contar con material deportivo en buen estado y un espacio amplio para la práctica."
    ]
  },
  {
    enunciado: "La 'Didáctica de la Educación Física' actual prioriza:",
    correcta: "Modelos comprensivos y situacionales donde la técnica se aprende dentro del contexto del juego.",
    incorrectas: [
      "Modelos puramente técnicos basados en la instrucción directa y la repetición sin juego.",
      "La eliminación total de la actividad física para centrarse en el dibujo técnico deportivo."
    ]
  },
  {
    enunciado: "La 'Motivación Intrínseca' se refiere a la práctica deportiva por:",
    correcta: "El placer y la satisfacción personal que genera la propia actividad.",
    incorrectas: [
      "La obtención de notas altas, trofeos o el reconocimiento social de los padres.",
      "El miedo a recibir un castigo por parte del profesor si no se corre lo suficiente."
    ]
  },
  {
    enunciado: "El aprendizaje deportivo es un proceso:",
    correcta: "Continuo, individualizado y mediado por la interacción entre el sujeto, la tarea y el entorno.",
    incorrectas: [
      "Instantáneo que se produce por el simple hecho de mirar un partido por televisión.",
      "Que termina obligatoriamente cuando el alumno cumple los 18 años de edad."
    ]
  }
];