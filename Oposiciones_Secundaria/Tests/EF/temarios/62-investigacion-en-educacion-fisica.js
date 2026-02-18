// 62-investigacion-en-educacion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la característica principal del Paradigma Positivista (cuantitativo) en la investigación de la Educación Física?",
    correcta: "Busca la objetividad, la medición de variables controladas y la generalización de resultados mediante el análisis estadístico.",
    incorrectas: [
      "Se centra exclusivamente en la interpretación subjetiva de las emociones del alumnado durante el juego.",
      "Utiliza el diálogo asambleario como única fuente de validación científica de los datos obtenidos."
    ]
  },
  {
    enunciado: "El Paradigma Interpretativo (cualitativo) se diferencia del cuantitativo en que su objetivo es:",
    correcta: "Comprender el significado de las acciones humanas y los procesos sociales en el contexto natural donde ocurren.",
    incorrectas: [
      "Establecer leyes universales de causa y efecto sobre el crecimiento óseo de los adolescentes.",
      "Maximizar el rendimiento deportivo mediante el uso de cronómetros y sensores de fuerza biomecánica."
    ]
  },
  {
    enunciado: "¿Qué define a la 'Investigación-Acción' en el ámbito docente?",
    correcta: "Un proceso reflexivo y cíclico de espiral (planificar, actuar, observar, reflexionar) para mejorar la propia práctica educativa.",
    incorrectas: [
      "Un experimento de laboratorio donde se aíslan a los alumnos de su entorno escolar habitual.",
      "La redacción de un libro de texto teórico que no se pone en práctica hasta pasados diez años."
    ]
  },
  {
    enunciado: "En una investigación cuantitativa, la 'Hipótesis' se define como:",
    correcta: "Una proposición provisional que expresa la relación esperada entre dos o más variables y que debe ser contrastada.",
    incorrectas: [
      "La conclusión definitiva que se alcanza antes de empezar a recoger cualquier dato del campo.",
      "El sentimiento personal del investigador sobre si los alumnos son simpáticos o no."
    ]
  },
  {
    enunciado: "¿Qué es una 'Variable Dependiente' en un estudio sobre el efecto del entrenamiento en la velocidad?",
    correcta: "El rendimiento alcanzado en la prueba de velocidad, que se ve afectado por el tipo de entrenamiento aplicado.",
    incorrectas: [
      "El método de entrenamiento elegido, que el investigador manipula de forma voluntaria.",
      "La marca de las zapatillas que los sujetos deciden utilizar de forma aleatoria."
    ]
  },
  {
    enunciado: "La 'Triangulación' en investigación cualitativa sirve para:",
    correcta: "Aumentar la validez y fiabilidad comparando datos de diferentes fuentes, métodos o investigadores.",
    incorrectas: [
      "Dibujar triángulos en el suelo para que los alumnos sepan dónde colocarse durante el test.",
      "Reducir el número de participantes a solo tres personas para simplificar el estudio."
    ]
  },
  {
    enunciado: "¿Qué instrumento es típico del paradigma cualitativo para recoger la experiencia del docente?",
    correcta: "El diario de campo o diario del profesor.",
    incorrectas: [
      "El análisis de sangre para medir los niveles de lactato tras una carrera.",
      "La hoja de cálculo con los tiempos exactos de llegada de una maratón."
    ]
  },
  {
    enunciado: "El Paradigma Crítico o Sociocrítico en Educación Física busca:",
    correcta: "La transformación social y la emancipación, analizando las relaciones de poder y las injusticias en el aula.",
    incorrectas: [
      "Aceptar las normas tradicionales del deporte sin cuestionar su origen ni su impacto social.",
      "La mejora exclusiva de la técnica del lanzamiento de jabalina mediante grabaciones de video."
    ]
  },
  {
    enunciado: "En investigación, ¿qué es la 'Validez Externa'?",
    correcta: "La capacidad de generalizar los resultados obtenidos en una muestra a la población general.",
    incorrectas: [
      "La resistencia que ofrece el aire cuando los alumnos realizan pruebas en el exterior.",
      "El permiso que otorga el centro educativo para publicar los datos en una revista."
    ]
  },
  {
    enunciado: "¿Qué diferencia existe entre un estudio 'Longitudinal' y uno 'Transversal'?",
    correcta: "El longitudinal estudia a los mismos sujetos durante un largo tiempo; el transversal compara diferentes grupos en un solo momento.",
    incorrectas: [
      "El transversal solo utiliza datos numéricos y el longitudinal solo utiliza fotografías y dibujos.",
      "El longitudinal se hace en línea recta y el transversal se hace en forma de cruz."
    ]
  },
  {
    enunciado: "La 'Observación Participante' implica que el investigador:",
    correcta: "Se integra en el grupo que estudia, formando parte de la actividad mientras recoge los datos.",
    incorrectas: [
      "Observa a través de una cámara oculta sin que nadie sepa que está allí presente.",
      "Se limita a mirar desde una grada lejana sin hablar con ninguno de los participantes."
    ]
  },
  {
    enunciado: "Un 'Estudio de Caso' se caracteriza por:",
    correcta: "El análisis intensivo y profundo de una unidad única (un alumno, una clase o un centro).",
    incorrectas: [
      "La realización de pruebas físicas a más de diez mil personas al mismo tiempo.",
      "El uso de encuestas telefónicas de respuesta rápida sobre preferencias deportivas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Fiabilidad' de un instrumento de medida?",
    correcta: "La constancia de los resultados al aplicar el instrumento en las mismas condiciones en diferentes momentos.",
    incorrectas: [
      "La belleza estética del diseño del aparato de medida utilizado por el profesor.",
      "Que el instrumento sea muy caro y esté fabricado con materiales de última tecnología."
    ]
  },
  {
    enunciado: "En el análisis de datos cualitativos, la 'Categorización' consiste en:",
    correcta: "Agrupar la información en unidades de significado para facilitar su interpretación.",
    incorrectas: [
      "Sumar todos los números obtenidos y dividirlos por el total de alumnos participantes.",
      "Poner a los alumnos en orden de lista según su apellido para pasar lista rápido."
    ]
  },
  {
    enunciado: "La 'Entrevista Semiestructurada' permite:",
    correcta: "Seguir un guion previo pero con flexibilidad para profundizar en temas que surjan durante la charla.",
    incorrectas: [
      "Hacer preguntas de 'sí' o 'no' de forma mecánica y sin posibilidad de réplica.",
      "Que el alumno haga las preguntas y el profesor se limite a responder con gestos."
    ]
  },
  {
    enunciado: "Según Kurt Lewin, la investigación-acción es necesaria porque:",
    correcta: "La investigación social debe estar ligada a la resolución de problemas prácticos inmediatos.",
    incorrectas: [
      "Los profesores no tienen suficiente trabajo y deben dedicar su tiempo libre a escribir tesis.",
      "Es la única forma de conseguir subvenciones económicas para comprar balones nuevos."
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Ética' en la investigación en Educación Física?",
    correcta: "Garantiza el anonimato, el consentimiento informado y la integridad física y moral de los participantes.",
    incorrectas: [
      "Obliga a los investigadores a ser amigos de todos los alumnos que participan en el estudio.",
      "Permite que el investigador se quede con el material deportivo del centro al finalizar el estudio."
    ]
  },
  {
    enunciado: "El 'Muestreo Aleatorio' busca que:",
    correcta: "Todos los individuos de la población tengan la misma probabilidad de ser seleccionados para el estudio.",
    incorrectas: [
      "Solo participen los alumnos que mejor se portan en la clase de Educación Física.",
      "Se elijan solo a los alumnos que el profesor considera que van a dar buenos resultados."
    ]
  },
  {
    enunciado: "En el paradigma crítico, la investigación debe ser 'Dialógica', lo que significa que:",
    correcta: "Se construye a través del diálogo y la reflexión compartida entre el investigador y los investigados.",
    incorrectas: [
      "Consiste en leer diálogos de obras de teatro mientras se realiza ejercicio físico.",
      "Solo puede llevarse a cabo si hay dos personas hablando por teléfono durante la sesión."
    ]
  },
  {
    enunciado: "La 'Etnografía' aplicada a la Educación Física estudia:",
    correcta: "La cultura, los rituales y los comportamientos de un grupo deportivo o escolar desde dentro.",
    incorrectas: [
      "El impacto de la gravedad sobre la velocidad de caída de los objetos esféricos.",
      "La composición química de los pavimentos sintéticos de las pistas de atletismo."
    ]
  },
  {
    enunciado: "Un 'Grupo de Discusión' (Focus Group) es una técnica útil para:",
    correcta: "Explorar la diversidad de opiniones y actitudes de un grupo sobre un tema específico de EF.",
    incorrectas: [
      "Enseñar a los alumnos a gritar más fuerte que sus compañeros en un debate político.",
      "Decidir quién es el ganador de una competición mediante una votación popular."
    ]
  },
  {
    enunciado: "¿Qué es el 'Dato' en la investigación cuantitativa?",
    correcta: "La expresión numérica de la medida de una variable.",
    incorrectas: [
      "La opinión personal que el profesor escribe en su cuenta de redes sociales.",
      "El dibujo que el alumno realiza sobre lo que ha sentido durante la carrera."
    ]
  },
  {
    enunciado: "La 'Investigación Descriptiva' se limita a:",
    correcta: "Relatar las características de un fenómeno sin buscar necesariamente las causas que lo producen.",
    incorrectas: [
      "Inventar historias fantásticas sobre el origen de los deportes olímpicos.",
      "Obligar a los alumnos a describir físicamente a sus compañeros de clase."
    ]
  },
  {
    enunciado: "¿Qué es un 'Cuestionario Ad Hoc'?",
    correcta: "Un cuestionario diseñado específicamente para los objetivos de una investigación concreta.",
    incorrectas: [
      "Un examen que se realiza después de que los alumnos hayan tomado un descanso de dos horas.",
      "Una encuesta que se pasa únicamente a los alumnos que han suspendido la asignatura."
    ]
  },
  {
    enunciado: "En la investigación-acción, la 'Observación' permite:",
    correcta: "Recoger evidencias sobre lo que realmente sucede cuando se aplica una nueva estrategia docente.",
    incorrectas: [
      "Mirar por la ventana para ver si va a llover y cancelar la clase de Educación Física.",
      "Controlar que los alumnos no hablen entre ellos durante la realización de los ejercicios."
    ]
  },
  {
    enunciado: "El 'Sesgo del Investigador' es:",
    correcta: "La influencia involuntaria de las expectativas o prejuicios del investigador en los resultados del estudio.",
    incorrectas: [
      "La inclinación de la pista de atletismo que ayuda a los corredores a ir más rápido.",
      "La parte del sueldo que el investigador debe pagar para publicar sus artículos científicos."
    ]
  },
  {
    enunciado: "Una 'Investigación Cuasi-experimental' se diferencia de una experimental pura en que:",
    correcta: "No existe una asignación aleatoria de los sujetos a los grupos (ej. se usan grupos-clase ya formados).",
    incorrectas: [
      "No se utilizan materiales deportivos, solo se trabaja con la imaginación de los alumnos.",
      "Los resultados no son reales, sino que se basan en suposiciones del profesor."
    ]
  },
  {
    enunciado: "La 'Fase de Reflexión' en la investigación-acción sirve para:",
    correcta: "Dar sentido a los datos recogidos y decidir qué cambios introducir en el siguiente ciclo de acción.",
    incorrectas: [
      "Hacer que los alumnos se miren en el espejo del gimnasio para mejorar su peinado.",
      "Sentarse en silencio durante 50 minutos sin realizar ninguna actividad física real."
    ]
  },
  {
    enunciado: "¿Qué es la 'Población' en un estudio de investigación?",
    correcta: "El conjunto total de individuos que poseen las características que se desean estudiar.",
    incorrectas: [
      "El número de personas que viven en el municipio donde está situado el instituto.",
      "El grupo pequeño de alumnos que el profesor ha elegido para hacer el experimento."
    ]
  },
  {
    enunciado: "En el análisis cualitativo, el 'Muestreo Intencional' consiste en:",
    correcta: "Seleccionar a los participantes que más información relevante pueden aportar al fenómeno estudiado.",
    incorrectas: [
      "Elegir a los alumnos lanzando una moneda al aire para que sea justo.",
      "Seleccionar solo a los alumnos que tienen el pelo de color oscuro."
    ]
  },
  {
    enunciado: "La 'Validación por Jueces' en un cuestionario implica:",
    correcta: "Someter el instrumento a la revisión de expertos para asegurar que mide lo que pretende medir.",
    incorrectas: [
      "Pedir a los jueces de una competición de atletismo que pongan la nota del examen.",
      "Llevar el cuestionario a un tribunal de justicia para que comprueben si hay faltas de ortografía."
    ]
  },
  {
    enunciado: "Un 'Análisis de Contenido' se aplica habitualmente a:",
    correcta: "Documentos escritos, entrevistas transcritas o diarios para identificar temas recurrentes.",
    incorrectas: [
      "La cantidad de azúcar que contiene la bebida energética de los alumnos.",
      "El peso total de los balones de baloncesto que hay en el almacén."
    ]
  },
  {
    enunciado: "La investigación en Educación Física es 'Multidisciplinar' porque:",
    correcta: "Se apoya en conocimientos de la fisiología, psicología, sociología y pedagogía.",
    incorrectas: [
      "Obliga a los alumnos a practicar más de diez deportes diferentes cada semana.",
      "Solo puede ser realizada por personas que han estudiado muchas carreras universitarias."
    ]
  },
  {
    enunciado: "¿Qué es un 'Meta-análisis'?",
    correcta: "Un estudio estadístico que combina los resultados de múltiples investigaciones previas sobre un mismo tema.",
    incorrectas: [
      "Un análisis de la mente de los alumnos que no quieren participar en clase.",
      "Una técnica para correr un maratón en menos de dos horas de forma constante."
    ]
  },
  {
    enunciado: "La 'Generalización' de resultados es un objetivo propio de:",
    correcta: "La investigación cuantitativa.",
    incorrectas: [
      "La investigación cualitativa profunda de un solo sujeto.",
      "El diario personal que un alumno escribe en su casa por la noche."
    ]
  },
  {
    enunciado: "En la LOMLOE, la investigación-acción se fomenta como:",
    correcta: "Un medio para el desarrollo profesional docente y la innovación en los centros.",
    incorrectas: [
      "Una forma de vigilar a los profesores para ver si llegan tarde a su puesto de trabajo.",
      "Un método para que los alumnos no tengan que hacer exámenes tradicionales."
    ]
  },
  {
    enunciado: "La 'Variable Independiente' es aquella que:",
    correcta: "El investigador manipula para observar qué efectos produce en la variable dependiente.",
    incorrectas: [
      "Cambia por sí sola sin que nadie la toque ni la controle durante el experimento.",
      "Es tan fuerte que no necesita la ayuda de ninguna otra variable para existir."
    ]
  },
  {
    enunciado: "El 'Informe de Investigación' debe ser, ante todo:",
    correcta: "Riguroso, transparente y replicable por otros investigadores.",
    incorrectas: [
      "Largo y aburrido para que parezca que se ha trabajado mucho en él.",
      "Un secreto que solo el investigador y el director del centro conocen."
    ]
  },
  {
    enunciado: "¿Qué es la 'Investigación Ex Post Facto'?",
    correcta: "Aquella que se realiza después de que el fenómeno ya ha ocurrido de forma natural.",
    incorrectas: [
      "Una investigación que se hace enviando cartas por correo postal a los participantes.",
      "Un estudio que se inventa los datos después de haber terminado las pruebas físicas."
    ]
  },
  {
    enunciado: "El fin último de la investigación en Educación Física es:",
    correcta: "Generar conocimiento científico que mejore la calidad de la enseñanza y la salud de la población.",
    incorrectas: [
      "Hacerse famoso y salir en la televisión explicando cómo se corre más rápido.",
      "Conseguir que la Educación Física sea la única asignatura importante del colegio."
    ]
  }
];