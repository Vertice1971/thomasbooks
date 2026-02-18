// -02-la-educacion-fisica-en-el-sistema-educativo.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué ley orgánica española supuso la integración definitiva de la Educación Física en el sistema educativo general, otorgándole un carácter pedagógico y curricular pleno?",
    correcta: "Ley Orgánica 1/1990 de Ordenación General del Sistema Educativo (LOGSE).",
    incorrectas: ["Ley General de Educación de 1970 (LGE).", "Ley Orgánica de Educación de 2006 (LOE)."]
  },
  {
    enunciado: "En la evolución de las funciones de la Educación Física, la 'función compensatoria' se refiere históricamente a:",
    correcta: "La compensación de las restricciones de movimiento impuestas por el sedentarismo escolar y la vida urbana.",
    incorrectas: ["La compensación económica de los docentes por actividades extraescolares.", "La sustitución de horas de matemáticas por ejercicio físico en alumnos con bajo rendimiento."]
  },
  {
    enunciado: "El modelo de currículo de Educación Física propuesto en la LOGSE se caracteriza por ser:",
    correcta: "Abierto, flexible y orientado a procesos, frente a modelos anteriores cerrados y orientados a resultados.",
    incorrectas: ["Prescriptivo y centrado exclusivamente en la técnica deportiva.", "Un currículo oculto basado en la libre elección del alumnado sin supervisión."]
  },
  {
    enunciado: "¿Cuál era el enfoque principal de la Educación Física en la Ley General de Educación de 1970?",
    correcta: "Un enfoque tecnocrático y deportivo, muy influenciado por el rendimiento y la condición física.",
    incorrectas: ["Un enfoque basado en la expresión corporal y la danza contemporánea.", "Un enfoque centrado en la salud pública y la prevención de la obesidad."]
  },
  {
    enunciado: "La función 'agonística' de la Educación Física escolar está vinculada principalmente a:",
    correcta: "El desarrollo del espíritu de superación, la competición reglada y el respeto al adversario.",
    incorrectas: ["El aprendizaje de técnicas de relajación y control de la ansiedad.", "La corrección de desviaciones de la columna vertebral."]
  },
  {
    enunciado: "El concepto de 'Transversalidad' en el diseño curricular de los años 90 implicaba que la Educación Física debía:",
    correcta: "Abordar valores como la educación para la salud, la paz y la igualdad de forma interdisciplinar.",
    incorrectas: ["Realizarse únicamente de forma transversal en el patio de recreo.", "Centrarse en el desplazamiento transversal en deportes de cancha dividida."]
  },
  {
    enunciado: "Históricamente, la 'Gimnástica' en los planes de estudio del siglo XIX tenía una función predominantemente:",
    correcta: "Militar e higienista, enfocada en la disciplina y el fortalecimiento del carácter nacional.",
    incorrectas: ["Recreativa y lúdica, basada en juegos populares.", "Artística, vinculada a las bellas artes."]
  },
  {
    enunciado: "¿Qué autor destaca la función de 'catarsis' de la Educación Física como liberación de tensiones emocionales?",
    correcta: "José María Cagigal",
    incorrectas: ["Pierre Parlebas", "Jean Le Boulch"]
  },
  {
    enunciado: "En el actual marco curricular (LOMLOE), el elemento que sustituye a los antiguos 'Objetivos Didácticos' como referente de evaluación es:",
    correcta: "Los Criterios de Evaluación asociados a las Competencias Específicas.",
    incorrectas: ["Los Estándares de Aprendizaje Evaluables.", "Las Unidades de Programación Mensuales."]
  },
  {
    enunciado: "La función 'anatómico-fisiológica' de la Educación Física busca principalmente:",
    correcta: "El desarrollo armónico de las estructuras corporales y la mejora de los sistemas orgánicos.",
    incorrectas: ["El estudio teórico de la anatomía en libros de texto.", "La memorización de las inserciones musculares."]
  },
  {
    enunciado: "La evolución del modelo curricular en España ha pasado de un enfoque centrado en los contenidos a un enfoque centrado en:",
    correcta: "Las Competencias, buscando el 'saber hacer' en contextos reales.",
    incorrectas: ["La instrucción directa y el mando directo.", "La repetición de modelos técnicos ideales."]
  },
  {
    enunciado: "¿Qué organismo internacional ha influido notablemente en la promoción de la 'Educación Física de Calidad' (EFC)?",
    correcta: "UNESCO",
    incorrectas: ["Comité Olímpico Internacional (COI)", "Federación Internacional de Fútbol (FIFA)"]
  },
  {
    enunciado: "La función 'estética' de la Educación Física se manifiesta especialmente en contenidos de:",
    correcta: "Expresión corporal, danza y gimnasia rítmica.",
    incorrectas: ["Resistencia aeróbica y cross-training.", "Deportes de contacto y artes marciales."]
  },
  {
    enunciado: "El 'Currículo Oculto' en Educación Física se refiere a:",
    correcta: "Los aprendizajes no explícitos (valores, actitudes) que se transmiten de forma inconsciente en la práctica.",
    incorrectas: ["El temario que el profesor no llega a dar por falta de tiempo.", "Las actividades prohibidas por la normativa del centro."]
  },
  {
    enunciado: "La función 'socializadora' de la materia destaca la importancia de:",
    correcta: "La interacción grupal, el trabajo en equipo y la adquisición de normas sociales.",
    incorrectas: ["El aislamiento del alumno para mejorar su concentración motriz.", "La competición individual por encima de los intereses del grupo."]
  },
  {
    enunciado: "¿Cuál es el tercer nivel de concreción curricular en el sistema educativo español?",
    correcta: "La Programación de Aula realizada por el docente.",
    incorrectas: ["El Proyecto Educativo de Centro (PEC).", "Los Reales Decretos de Enseñanzas Mínimas."]
  },
  {
    enunciado: "La corriente 'Psicocinética' influyó en el currículo escolar proponiendo:",
    correcta: "La utilización del movimiento para la estructuración de la personalidad y el esquema corporal.",
    incorrectas: ["La formación de atletas de élite en los institutos.", "El estudio de la física cuántica aplicada al deporte."]
  },
  {
    enunciado: "La función 'comunicativa' del movimiento permite al alumno:",
    correcta: "Expresar sentimientos y estados de ánimo mediante el lenguaje corporal.",
    incorrectas: ["Hablar por señas durante los partidos para engañar al árbitro.", "Escribir crónicas deportivas en el periódico escolar."]
  },
  {
    enunciado: "El concepto de 'Cultura Física' en el currículo actual implica:",
    correcta: "La comprensión de las manifestaciones sociales del deporte y el ejercicio como patrimonio humano.",
    incorrectas: ["El culto excesivo al cuerpo y la musculación estética.", "La asistencia obligatoria a museos de historia del deporte."]
  },
  {
    enunciado: "La función 'compensatoria' respecto a las Necesidades Educativas Especiales (NEE) busca:",
    correcta: "Garantizar el acceso y la participación de todo el alumnado mediante adaptaciones.",
    incorrectas: ["Aprobar a los alumnos con dificultades aunque no realicen actividad física.", "Eximir de la clase de gimnasia a los alumnos con discapacidad."]
  },
  {
    enunciado: "En la jerarquía normativa, ¿qué documento define las competencias clave y el perfil de salida al finalizar la etapa?",
    correcta: "El Real Decreto de currículo de la etapa correspondiente.",
    incorrectas: ["El reglamento de régimen interno del centro.", "El cuaderno de clase del alumno."]
  },
  {
    enunciado: "¿Qué característica define a la Educación Física como área 'procedimental'?",
    correcta: "Que su aprendizaje se basa fundamentalmente en la acción y la práctica motriz.",
    incorrectas: ["Que solo requiere seguir procesos administrativos de evaluación.", "Que carece de cualquier fundamento conceptual o teórico."]
  },
  {
    enunciado: "La 'Educación Física de Base' (EFB) tiene como objetivo curricular:",
    correcta: "Proporcionar un soporte motor polivalente y variado.",
    incorrectas: ["Especializar al alumno en un puesto específico de balonmano.", "Preparar físicamente para el servicio militar."]
  },
  {
    enunciado: "La función 'recreativa' busca que el alumno desarrolle hábitos de:",
    correcta: "Ocupación activa del tiempo libre y ocio saludable.",
    incorrectas: ["Sedentarismo lúdico mediante videojuegos.", "Gasto económico en material deportivo de lujo."]
  },
  {
    enunciado: "¿Qué autor asocia la evolución de la EF escolar con el paso de la 'pedagogía del mando' a la 'pedagogía del descubrimiento'?",
    correcta: "Muska Mosston",
    incorrectas: ["Lev Vygotsky", "B.F. Skinner"]
  },
  {
    enunciado: "La función 'cognitiva' de la actividad física se fundamenta en:",
    correcta: "La implicación de procesos perceptivos y de toma de decisiones en la acción motriz.",
    incorrectas: ["La capacidad de leer libros mientras se corre en cinta.", "El desarrollo de la musculatura cerebral mediante ejercicios isométricos."]
  },
  {
    enunciado: "En la transición de la EGB a la ESO (LOGSE), el área de Educación Física pasó a ser:",
    correcta: "Obligatoria en todos los cursos de la enseñanza básica.",
    incorrectas: ["Optativa para aquellos que no practicaran deporte federado.", "Sustituible por horas de música o dibujo."]
  },
  {
    enunciado: "La 'Pedagogía Crítica' en Educación Física propone que el currículo debe:",
    correcta: "Cuestionar las injusticias sociales y los estereotipos presentes en el deporte.",
    incorrectas: ["Ignorar los conflictos sociales para centrarse en el sudor.", "Fomentar la competitividad extrema para preparar para el mercado laboral."]
  },
  {
    enunciado: "La función 'preventiva' de la Educación Física se centra en:",
    correcta: "La adquisición de posturas correctas y hábitos que eviten enfermedades hipocinéticas.",
    incorrectas: ["La prevención de suspensos mediante trabajos teóricos.", "La contratación de seguros de accidentes para el pabellón."]
  },
  {
    enunciado: "¿Cuál de los siguientes es un elemento del currículo de Educación Física según la normativa vigente?",
    correcta: "Saberes básicos.",
    incorrectas: ["Tácticas de juego profesional.", "Listado de atletas olímpicos."]
  },
  {
    enunciado: "La evolución del modelo curricular hacia la 'Inclusión' implica:",
    correcta: "Diseñar tareas que permitan el éxito de todo el alumnado independientemente de su nivel de habilidad.",
    incorrectas: ["Separar a los alumnos por niveles de aptitud física en grupos distintos.", "Permitir que los alumnos con discapacidad miren la clase desde la grada."]
  },
  {
    enunciado: "La función 'moral y ética' se trabaja en EF principalmente a través de:",
    correcta: "El respeto a las reglas, el juego limpio y la aceptación del resultado.",
    incorrectas: ["El castigo físico ante el incumplimiento de normas.", "La memorización de códigos deontológicos deportivos."]
  },
  {
    enunciado: "El enfoque de 'Salud Integral' en el currículo actual considera la salud como:",
    correcta: "Un estado de bienestar físico, mental y social, no solo la ausencia de enfermedad.",
    incorrectas: ["La capacidad de levantar grandes cargas sin lesionarse.", "Un resultado genético inmutable por el ejercicio."]
  },
  {
    enunciado: "¿Qué autor introdujo el concepto de 'espectro de estilos de enseñanza' en Educación Física?",
    correcta: "Muska Mosston",
    incorrectas: ["Howard Gardner", "Jean Piaget"]
  },
  {
    enunciado: "La función 'laboral' de la EF en el pasado se relacionaba con:",
    correcta: "La preparación física del trabajador para aumentar la productividad industrial.",
    incorrectas: ["La búsqueda de empleo como monitor de gimnasio.", "El estudio de la legislación laboral deportiva."]
  },
  {
    enunciado: "El concepto de 'Autonomía' en el currículo de EF busca que el alumno:",
    correcta: "Sea capaz de planificar y realizar su propia actividad física de forma independiente fuera del aula.",
    incorrectas: ["Pueda salir de clase cuando quiera sin permiso.", "Se ponga su propia nota de evaluación."]
  },
  {
    enunciado: "La integración de las TIC en la Educación Física escolar tiene como objetivo:",
    correcta: "Mejorar el análisis del movimiento y el registro de la actividad física para el autoconocimiento.",
    incorrectas: ["Sustituir la práctica motriz por el juego con tabletas.", "Aumentar el tiempo de sedentarismo en el pabellón."]
  },
  {
    enunciado: "La 'Globalidad' en el tratamiento de los contenidos en secundaria implica:",
    correcta: "Integrar aspectos físicos, cognitivos y socioafectivos en cada situación de aprendizaje.",
    incorrectas: ["Realizar todas las clases alrededor del globo terráqueo.", "Enseñar solo deportes globales como el fútbol."]
  },
  {
    enunciado: "La función de 'identidad' en Educación Física se relaciona con:",
    correcta: "El conocimiento y aceptación del propio cuerpo y la construcción de la autoimagen.",
    incorrectas: ["El uso obligatorio de uniformes deportivos idénticos.", "La memorización del DNI de los compañeros de equipo."]
  },
  {
    enunciado: "¿Qué componente del currículo responde a la pregunta '¿qué, cómo y cuándo evaluar?'?",
    correcta: "Los criterios de evaluación.",
    incorrectas: ["Los saberes básicos.", "La metodología didáctica."]
  }
];