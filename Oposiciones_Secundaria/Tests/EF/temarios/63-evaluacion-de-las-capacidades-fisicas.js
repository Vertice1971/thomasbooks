// 63-evaluacion-de-las-capacidades-fisicas.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el criterio de 'Validez' en un test de capacidad física?",
    correcta: "El grado en que el test mide realmente la capacidad física que pretende evaluar.",
    incorrectas: [
      "La constancia de los resultados cuando la prueba es realizada por diferentes evaluadores.",
      "La facilidad de aplicación del test en un grupo numeroso con poco material."
    ]
  },
  {
    enunciado: "La 'Fiabilidad' de una prueba de condición física se refiere a:",
    correcta: "La precisión y estabilidad de las medidas obtenidas al repetir la prueba en condiciones idénticas.",
    incorrectas: [
      "La relación entre el esfuerzo realizado y la mejora estética del alumno.",
      "La obligatoriedad de que todos los alumnos aprueben la prueba independientemente del resultado."
    ]
  },
  {
    enunciado: "¿Qué mide el 'Test de Course Navette' (o de Luc Léger)?",
    correcta: "La potencia aeróbica máxima y el VO2 máx mediante un esfuerzo máximo, progresivo y discontinuo.",
    incorrectas: [
      "La velocidad de reacción ante estímulos auditivos en una pista de atletismo.",
      "La flexibilidad de la cadena posterior mediante la flexión profunda de tronco."
    ]
  },
  {
    enunciado: "En la valoración de la fuerza explosiva del tren inferior, el test más utilizado en el ámbito escolar es:",
    correcta: "El salto de longitud a pies juntos desde parado.",
    incorrectas: [
      "La sentadilla máxima con carga externa equivalente al peso corporal.",
      "El mantenimiento de la posición de cuclillas durante más de cinco minutos."
    ]
  },
  {
    enunciado: "El 'Test de Cooper' consiste en:",
    correcta: "Recorrer la máxima distancia posible durante 12 minutos a un ritmo constante.",
    incorrectas: [
      "Realizar el mayor número de flexiones de brazos en 30 segundos.",
      "Subir y bajar un escalón de 50 cm siguiendo el ritmo de un metrónomo."
    ]
  },
  {
    enunciado: "¿Qué capacidad física evalúa el 'Test de Wells y Dillon' (Sit and Reach)?",
    correcta: "La flexibilidad de la musculatura isquiotibial y de la zona lumbar.",
    incorrectas: [
      "La fuerza resistencia de los músculos abdominales y flexores de cadera.",
      "La agilidad en desplazamientos laterales con cambios de dirección."
    ]
  },
  {
    enunciado: "Para que un test de condición física tenga 'Valor Formativo' en la LOMLOE, debe:",
    correcta: "Servir como herramienta de autoconocimiento y referencia para la mejora personal de la salud.",
    incorrectas: [
      "Utilizarse exclusivamente para establecer un ranking competitivo entre los alumnos.",
      "Ser la única fuente de calificación para decidir si un alumno promociona de curso."
    ]
  },
  {
    enunciado: "El 'Test de Ruffier-Dickson' se utiliza para valorar:",
    correcta: "La resistencia cardíaca al esfuerzo y la capacidad de recuperación del corazón.",
    incorrectas: [
      "La velocidad máxima de desplazamiento en una distancia de 50 metros.",
      "La potencia anaeróbica aláctica en saltos verticales repetidos."
    ]
  },
  {
    enunciado: "¿Qué es un 'Baremos de Rendimiento'?",
    correcta: "Tablas de referencia que permiten clasificar los resultados individuales en relación con una población similar.",
    incorrectas: [
      "La lista de materiales necesarios para montar un gimnasio escolar.",
      "El reglamento oficial que rige las competiciones de atletismo internacional."
    ]
  },
  {
    enunciado: "En la evaluación de la fuerza resistencia abdominal, el protocolo estándar suele ser:",
    correcta: "Realizar el máximo número de encogimientos abdominales (crunch) en un tiempo determinado (ej. 1 minuto).",
    incorrectas: [
      "Mantener una plancha isométrica hasta que se produzca el fallo muscular total.",
      "Levantar el máximo peso posible en un solo movimiento de flexión de tronco."
    ]
  },
  {
    enunciado: "La 'Objetividad' de un test se garantiza cuando:",
    correcta: "Los resultados son independientes del juicio subjetivo del evaluador.",
    incorrectas: [
      "El test es tan difícil que solo los alumnos más deportistas pueden terminarlo.",
      "Se permite que los alumnos se ayuden entre ellos durante la ejecución."
    ]
  },
  {
    enunciado: "¿Qué evalúa el 'Test de los 50 metros lisos'?",
    correcta: "La velocidad de desplazamiento o velocidad de traslación.",
    incorrectas: [
      "La resistencia aeróbica de larga duración.",
      "La fuerza máxima de los extensores del tobillo."
    ]
  },
  {
    enunciado: "El 'Índice de Masa Corporal' (IMC) es un instrumento de registro que relaciona:",
    correcta: "El peso y la estatura (kg/m²) para estimar el estado nutricional.",
    incorrectas: [
      "La fuerza de prensión manual con la edad cronológica.",
      "El volumen de aire espirado con la capacidad vital pulmonar."
    ]
  },
  {
    enunciado: "La 'Batería EUROFIT' es:",
    correcta: "Un conjunto de tests estandarizados por el Consejo de Europa para evaluar la condición física escolar.",
    incorrectas: [
      "Un tipo de examen teórico sobre la historia de los deportes en el continente europeo.",
      "Un programa de entrenamiento para mejorar la fuerza de los brazos en adolescentes."
    ]
  },
  {
    enunciado: "En la evaluación de la velocidad de reacción, el 'Test de la Regla de Galton' utiliza:",
    correcta: "La caída de una regla graduada para medir el tiempo de respuesta mediante la distancia recorrida.",
    incorrectas: [
      "Un cronómetro digital activado por una señal de salida luminosa.",
      "El recuento de las pulsaciones antes y después de un susto repentino."
    ]
  },
  {
    enunciado: "¿Qué mide el 'Test de Burpee'?",
    correcta: "La resistencia anaeróbica láctica y la coordinación general mediante un ejercicio de cuerpo completo.",
    incorrectas: [
      "La flexibilidad de la articulación escapulo-humeral.",
      "La velocidad gestual del miembro superior dominante."
    ]
  },
  {
    enunciado: "Un registro de datos 'Longitudinal' en las capacidades físicas permite:",
    correcta: "Observar la evolución y progreso del mismo alumno a lo largo de varios cursos escolares.",
    incorrectas: [
      "Comparar a un alumno con sus compañeros en un momento puntual del trimestre.",
      "Identificar el talento deportivo para enviarlo a un centro de alto rendimiento."
    ]
  },
  {
    enunciado: "En el test de 'Lanzamiento de Balón Medicinal', el objetivo es valorar:",
    correcta: "La fuerza explosiva del tren superior y el tronco.",
    incorrectas: [
      "La precisión en el pase de pecho en situaciones de juego real.",
      "La resistencia de los ligamentos del codo ante cargas repetitivas."
    ]
  },
  {
    enunciado: "La 'Normalización' de un test implica:",
    correcta: "Establecer un protocolo rígido de ejecución para que la prueba sea reproducible y comparable.",
    incorrectas: [
      "Hacer que la prueba sea tan fácil que todos los alumnos saquen la misma nota.",
      "Adaptar la prueba a los gustos personales de cada alumno."
    ]
  },
  {
    enunciado: "El 'Test de Flexión de Brazos en Suspensión' (o dominadas) mide:",
    correcta: "La fuerza resistencia o fuerza máxima relativa de la musculatura flexora del codo y tracto dorsal.",
    incorrectas: [
      "La capacidad pulmonar total durante un esfuerzo isométrico.",
      "La flexibilidad de la columna vertebral en la zona cervical."
    ]
  },
  {
    enunciado: "¿Qué precaución de seguridad es fundamental antes de aplicar tests de capacidad física máxima?",
    correcta: "Realizar una anamnesis previa o disponer de un certificado médico que descarte patologías contraindicadas.",
    incorrectas: [
      "Asegurarse de que los alumnos no hayan desayunado nada para evitar pesadez.",
      "Realizar la prueba siempre bajo la lluvia para refrescar el cuerpo de los alumnos."
    ]
  },
  {
    enunciado: "En la batería EUROFIT, el 'Test de Flamingo' evalúa:",
    correcta: "El equilibrio estático sobre una sola pierna en una superficie reducida.",
    incorrectas: [
      "La velocidad de desplazamiento lateral en zig-zag.",
      "La flexibilidad del arco plantar y el tendón de Aquiles."
    ]
  },
  {
    enunciado: "La 'Evaluación Inicial' de las capacidades físicas sirve para:",
    correcta: "Establecer el punto de partida y adaptar la programación a las necesidades del grupo.",
    incorrectas: [
      "Poner la nota final del curso antes de que los alumnos empiecen a entrenar.",
      "Seleccionar a los alumnos que van a representar al centro en las olimpiadas escolares."
    ]
  },
  {
    enunciado: "El 'Dinamómetro Manual' es un instrumento utilizado para medir:",
    correcta: "La fuerza máxima estática (prensión manual).",
    incorrectas: [
      "La velocidad de la sangre a través de las arterias del brazo.",
      "La potencia sonora de los gritos de ánimo de los compañeros."
    ]
  },
  {
    enunciado: "En el 'Test de Agilidad 4x10 metros', el alumno debe:",
    correcta: "Desplazarse a máxima velocidad ida y vuelta entre dos líneas, transportando o tocando testigos.",
    incorrectas: [
      "Caminar 40 metros en línea recta manteniendo el equilibrio sobre un banco sueco.",
      "Saltar 10 vallas de 1 metro de altura en el menor tiempo posible."
    ]
  },
  {
    enunciado: "La 'Sensibilidad' de un test es su capacidad para:",
    correcta: "Detectar pequeños cambios o mejoras en la capacidad física del sujeto evaluado.",
    incorrectas: [
      "Hacer que el alumno se sienta emocionado al conocer sus resultados.",
      "Identificar si el alumno tiene la piel sensible a las rozaduras del material."
    ]
  },
  {
    enunciado: "¿Qué evalúa el 'Harvard Step Test'?",
    correcta: "La recuperación cardiovascular tras un esfuerzo aeróbico submáximo de subir y bajar un escalón.",
    incorrectas: [
      "La fuerza máxima de los gemelos en contracción concéntrica.",
      "La coordinación óculo-manual necesaria para jugar al tenis de mesa."
    ]
  },
  {
    enunciado: "En la evaluación de la condición física, el 'Cuaderno de Entrenamiento' es un instrumento que:",
    correcta: "Favorece la autonomía y la autoevaluación del progreso del alumno a lo largo del tiempo.",
    incorrectas: [
      "Sustituye la práctica física por la escritura de poemas sobre el deporte.",
      "Solo sirve para que el profesor anote los castigos por mal comportamiento."
    ]
  },
  {
    enunciado: "El test de 'Tapping Test' de brazos mide:",
    correcta: "La velocidad cíclica de movimiento de los miembros superiores.",
    incorrectas: [
      "La fuerza de impacto de un golpe de boxeo sobre un saco.",
      "La resistencia a la fatiga de los músculos del cuello."
    ]
  },
  {
    enunciado: "¿Cuál es el principal inconveniente de los tests de campo frente a los de laboratorio?",
    correcta: "Tienen un menor control de las variables ambientales y, por tanto, una menor precisión científica.",
    incorrectas: [
      "Son mucho más caros y requieren personal médico especializado obligatoriamente.",
      "No permiten evaluar a más de un alumno al mismo tiempo."
    ]
  },
  {
    enunciado: "En la LOMLOE, los resultados de los tests deben comunicarse de forma:",
    correcta: "Privada y constructiva, evitando la comparación pública que pueda generar desmotivación.",
    incorrectas: [
      "Publicada en el tablón de anuncios del centro para que todos vean quién es el más fuerte.",
      "Mediante un megáfono en el patio del instituto durante el recreo."
    ]
  },
  {
    enunciado: "El 'Test de Leger-Boucher' es una variante que se realiza en:",
    correcta: "Pista de atletismo, utilizando señales sonoras para marcar el ritmo progresivo.",
    incorrectas: [
      "Piscina, para medir la apnea en reposo absoluto.",
      "Un laboratorio de fisiología con una máscara de gases conectada."
    ]
  },
  {
    enunciado: "La 'Economía de Esfuerzo' en una prueba de resistencia se observa cuando:",
    correcta: "El alumno mantiene la velocidad con una técnica eficiente y menores pulsaciones.",
    incorrectas: [
      "El alumno decide caminar para no gastar energía y terminar el último.",
      "El alumno compra unas zapatillas muy baratas para ahorrar dinero."
    ]
  },
  {
    enunciado: "En el test de 'Salto Vertical' (Sargent Test), se mide la diferencia entre:",
    correcta: "La altura alcanzada con el brazo extendido en parado y la altura máxima del salto.",
    incorrectas: [
      "La altura del alumno y el peso total de su cuerpo en kilogramos.",
      "El tiempo de vuelo y el tiempo que tarda en volver a respirar normal."
    ]
  },
  {
    enunciado: "¿Qué es la 'Percepción Subjetiva del Esfuerzo' (Escala de Borg)?",
    correcta: "Un método cualitativo donde el alumno valora numéricamente cómo de intensa siente la actividad.",
    incorrectas: [
      "Un test de inteligencia que se hace mientras se corre a máxima velocidad.",
      "La opinión del profesor sobre si el alumno se está esforzando mucho o poco."
    ]
  },
  {
    enunciado: "Los tests de capacidad física 'Submáximos' son preferibles en la escuela porque:",
    correcta: "Son más seguros y permiten estimar la capacidad sin llevar al alumno al agotamiento total.",
    incorrectas: [
      "Duran mucho más tiempo y así los alumnos no tienen tiempo de hablar.",
      "No requieren ningún tipo de esfuerzo por parte de los estudiantes."
    ]
  },
  {
    enunciado: "En la evaluación de la composición corporal, el 'Plicómetro' mide:",
    correcta: "El espesor de los pliegues cutáneos para estimar el porcentaje de grasa corporal.",
    incorrectas: [
      "La longitud de los huesos de los dedos para predecir la altura final.",
      "La presión arterial del alumno antes de empezar la clase de Educación Física."
    ]
  },
  {
    enunciado: "El 'Test de la Silla' (Senior Fitness Test) adaptado a jóvenes mide:",
    correcta: "La fuerza resistencia del tren inferior de forma segura.",
    incorrectas: [
      "La capacidad de estar sentado sin moverse durante ocho horas de clase.",
      "La resistencia de los materiales con los que están fabricadas las sillas del aula."
    ]
  },
  {
    enunciado: "La 'Validez de Contenido' asegura que:",
    correcta: "Los ítems del test representan de forma equilibrada todos los aspectos de la capacidad evaluada.",
    incorrectas: [
      "El test contiene suficientes preguntas teóricas para aprobar el examen escrito.",
      "El contenido de la botella de agua del alumno es adecuado para la hidratación."
    ]
  },
  {
    enunciado: "El fin último de la evaluación de las capacidades físicas es:",
    correcta: "Promover la autonomía del alumno en la gestión de su propia condición física y salud.",
    incorrectas: [
      "Eliminar a los alumnos menos aptos de la asignatura de Educación Física.",
      "Convertir el instituto en un centro de tecnificación deportiva de élite."
    ]
  }
];