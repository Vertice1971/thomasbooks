// -03-taxonomias-de-objetivos-y-ambito-motor.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la principal diferencia entre la taxonomía de Bloom y las taxonomías específicas del ámbito motor como la de Harrow?",
    correcta: "La de Bloom se centra en procesos cognitivos, mientras que la de Harrow jerarquiza niveles de eficiencia neuromuscular y comunicación no discursiva.",
    incorrectas: ["No hay diferencias, ambas miden únicamente la velocidad de reacción.", "La de Harrow solo es aplicable a deportistas de élite y la de Bloom a educación infantil."]
  },
  {
    enunciado: "En la taxonomía de Anita Harrow, el nivel de 'Movimientos Reflejos' se define como:",
    correcta: "Respuestas motoras involuntarias a estímulos que forman la base del desarrollo sensorio-motor.",
    incorrectas: ["Habilidades deportivas complejas como el remate en voleibol.", "La capacidad de realizar un salto de longitud con técnica de extensión."]
  },
  {
    enunciado: "¿Qué autor propone una taxonomía del ámbito motor dividida en: Percibir, Disponerse, Actuar bajo dirección, Mecanizar y Organizar?",
    correcta: "Elizabeth Simpson",
    incorrectas: ["Robert Gagné", "Abraham Maslow"]
  },
  {
    enunciado: "Dentro de la taxonomía de Harrow, ¿qué categoría engloba la agilidad, el equilibrio y la flexibilidad?",
    correcta: "Habilidades Físicas (Physical Abilities).",
    incorrectas: ["Movimientos Fundamentales.", "Comunicación no Discursiva."]
  },
  {
    enunciado: "El nivel de 'Comunicación no Discursiva' en la taxonomía motriz se refiere a:",
    correcta: "La capacidad de expresar sentimientos y mensajes a través del movimiento corporal estético y creativo.",
    incorrectas: ["La incapacidad del alumno para hablar durante el esfuerzo físico.", "El uso de silbatos y señales acústicas por parte del docente."]
  },
  {
    enunciado: "¿Qué nivel de la taxonomía de Simpson se alcanza cuando el alumno realiza una tarea motriz con confianza, eficiencia y de forma automática?",
    correcta: "Mecanización (Mechanism).",
    incorrectas: ["Percepción.", "Respuesta compleja manifiesta."]
  },
  {
    enunciado: "La taxonomía de Jewett (Muevan Concept Model) se organiza en torno a tres grandes funciones del movimiento:",
    correcta: "Hombre Maestro de sí mismo, Hombre en el Espacio y Hombre en el Mundo Social.",
    incorrectas: ["Fuerza, Resistencia y Velocidad.", "Entrada, Proceso y Salida de información."]
  },
  {
    enunciado: "¿Cuál es el valor didáctico primordial de utilizar taxonomías en la programación de Educación Física?",
    correcta: "Permiten secuenciar los aprendizajes de lo simple a lo complejo y facilitar la evaluación por criterios objetivos.",
    incorrectas: ["Garantizar que todos los alumnos saquen la misma nota.", "Evitar que el profesor tenga que explicar la sesión."]
  },
  {
    enunciado: "En la taxonomía de objetivos de Bloom, el nivel de 'Análisis' aplicado a la Educación Física implicaría:",
    correcta: "Descomponer una técnica deportiva en sus fases biomecánicas para comprender su funcionamiento.",
    incorrectas: ["Repetir diez veces un lanzamiento a canasta.", "Correr durante veinte minutos sin parar."]
  },
  {
    enunciado: "Según la taxonomía de Harrow, los 'Movimientos Fundamentales' incluyen habilidades como:",
    correcta: "Caminar, correr, saltar, manipular y alcanzar.",
    incorrectas: ["El ciclo de Krebs y la glucólisis.", "La interpretación de una danza contemporánea."]
  },
  {
    enunciado: "¿Qué autor desarrolló una taxonomía que clasifica los objetivos en los dominios cognoscitivo, afectivo y psicomotor, siendo este último el menos desarrollado por él mismo?",
    correcta: "Benjamin Bloom",
    incorrectas: ["B.F. Skinner", "Jerome Bruner"]
  },
  {
    enunciado: "El concepto de 'Ajuste Físico' en la taxonomía de objetivos motrices hace referencia a:",
    correcta: "La adaptación de las funciones orgánicas y estructurales necesarias para el movimiento vigoroso.",
    incorrectas: ["La compra de ropa deportiva de la talla adecuada.", "La corrección de una falta reglamentaria."]
  },
  {
    enunciado: "En la taxonomía de Harrow, la 'Percepción Cinestésica' forma parte del nivel de:",
    correcta: "Habilidades Perceptivas.",
    incorrectas: ["Movimientos Reflejos.", "Habilidades Físicas."]
  },
  {
    enunciado: "¿Qué nivel de la taxonomía psicomotriz de Simpson implica la creación de nuevos movimientos para resolver una situación motriz inédita?",
    correcta: "Originación.",
    incorrectas: ["Imitación.", "Respuesta dirigida."]
  },
  {
    enunciado: "La taxonomía de Dave para el dominio psicomotor establece como nivel más alto:",
    correcta: "Naturalización.",
    incorrectas: ["Precisión.", "Manipulación."]
  },
  {
    enunciado: "Un objetivo centrado en que el alumno sea capaz de 'discriminar auditivamente el ritmo de una música para adecuar su paso' pertenece, según Harrow, a:",
    correcta: "Habilidades Perceptivas (Discriminación Auditiva).",
    incorrectas: ["Movimientos Fundamentales.", "Comunicación no Discursiva."]
  },
  {
    enunciado: "La crítica principal a las taxonomías rígidas en la Educación Física actual es:",
    correcta: "Que a menudo fragmentan la conducta humana, perdiendo la visión integral y sistémica del movimiento.",
    incorrectas: ["Que son demasiado fáciles de aplicar en el aula.", "Que no requieren el uso de material deportivo."]
  },
  {
    enunciado: "¿En qué nivel de la taxonomía de Simpson se sitúa la preparación mental, física y emocional para realizar un acto motor?",
    correcta: "Disposición (Set).",
    incorrectas: ["Percepción.", "Mecanización."]
  },
  {
    enunciado: "Las taxonomías del ámbito motor son herramientas esenciales para la elaboración de:",
    correcta: "Criterios de evaluación y estándares de aprendizaje.",
    incorrectas: ["Listas de asistencia.", "Dietas personalizadas."]
  },
  {
    enunciado: "En el nivel de 'Habilidades Destrezas' (Skilled Movements) de Harrow, se enfatiza:",
    correcta: "El grado de maestría en la ejecución de tareas complejas con eficiencia y economía de esfuerzo.",
    incorrectas: ["La realización de movimientos automáticos por puro instinto de supervivencia.", "La capacidad de estar quieto durante largos periodos."]
  },
  {
    enunciado: "Un objetivo que pida al alumno 'modificar un pase de pecho en baloncesto para evitar un defensor' se clasificaría en Simpson como:",
    correcta: "Adaptación.",
    incorrectas: ["Imitación.", "Percepción."]
  },
  {
    enunciado: "La taxonomía de objetivos del ámbito afectivo de Krathwohl es relevante en EF para evaluar:",
    correcta: "Actitudes, valores, respeto a las normas y trabajo cooperativo.",
    incorrectas: ["La potencia de salto vertical.", "La capacidad vital pulmonar."]
  },
  {
    enunciado: "¿Qué término define el nivel de la taxonomía donde el sujeto integra el movimiento en su forma de ser y actuar sin esfuerzo consciente?",
    correcta: "Naturalización.",
    incorrectas: ["Instrucción.", "Inhibición."]
  },
  {
    enunciado: "La 'Agudeza Táctil' es un subnivel dentro de las Habilidades Perceptivas de Harrow que se trabaja en EF mediante:",
    correcta: "Juegos de reconocimiento de objetos o superficies con los ojos vendados.",
    incorrectas: ["Carreras de velocidad de 50 metros.", "Lanzamientos de precisión a larga distancia."]
  },
  {
    enunciado: "Para que un objetivo motor sea operativo y evaluable, debe incluir:",
    correcta: "Una conducta observable, las condiciones de ejecución y el criterio de éxito.",
    incorrectas: ["Solo el nombre del alumno y la fecha.", "Una descripción poética del movimiento deseado."]
  },
  {
    enunciado: "En la taxonomía de Harrow, el 'Desarrollo de la Resistencia Cardiovascular' se ubica en:",
    correcta: "Habilidades Físicas.",
    incorrectas: ["Habilidades Perceptivas.", "Movimientos Reflejos."]
  },
  {
    enunciado: "La 'Estructura Corporal' (conciencia de las partes del cuerpo) es, según Harrow, una:",
    correcta: "Habilidad Perceptiva.",
    incorrectas: ["Comunicación no Discursiva.", "Habilidad Física."]
  },
  {
    enunciado: "¿Qué nivel de la taxonomía de Bloom se alcanza cuando el alumno diseña su propio plan de entrenamiento personal?",
    correcta: "Creación (o Síntesis en la versión original).",
    incorrectas: ["Comprensión.", "Conocimiento."]
  },
  {
    enunciado: "Las taxonomías ayudan al profesor de Educación Física a evitar la:",
    correcta: "Improvisación incoherente y la falta de progresión pedagógica.",
    incorrectas: ["Fatiga muscular propia.", "Sudoración excesiva de los alumnos."]
  },
  {
    enunciado: "En el ámbito motor, la 'Imitación' (nivel bajo en Simpson) consiste en:",
    correcta: "La repetición de un acto motor observado siguiendo el modelo del profesor.",
    incorrectas: ["La invención de un nuevo deporte.", "La crítica de la técnica de un compañero."]
  },
  {
    enunciado: "La 'Relajación' se considera en la taxonomía de Harrow dentro de las Habilidades Físicas porque:",
    correcta: "Implica el control voluntario de la tensión muscular para la eficiencia motriz.",
    incorrectas: ["Es lo mismo que dormir en clase.", "No requiere ningún tipo de control nervioso."]
  },
  {
    enunciado: "¿Cuál es el propósito de la categoría 'Respuesta Dirigida' en Simpson?",
    correcta: "Aprender mediante el ensayo-error bajo la supervisión del docente.",
    incorrectas: ["Ganar una medalla de oro en los Juegos Olímpicos.", "Ignorar las correcciones del entrenador."]
  },
  {
    enunciado: "La taxonomía de objetivos debe ser coherente con:",
    correcta: "El nivel de desarrollo motor y psico-evolutivo del alumnado de secundaria.",
    incorrectas: ["El color del uniforme del centro educativo.", "La marca de las zapatillas del profesor."]
  },
  {
    enunciado: "En el nivel de 'Coordinación Ojo-Mano', Harrow lo clasifica como una:",
    correcta: "Habilidad Perceptiva.",
    incorrectas: ["Habilidad Física.", "Movimiento Reflejo."]
  },
  {
    enunciado: "¿Qué autor asocia los objetivos motrices a 'dominios de aprendizaje'?",
    correcta: "Robert Gagné",
    incorrectas: ["Sigmund Freud", "Charles Darwin"]
  },
  {
    enunciado: "La 'Destreza' en taxonomía motriz se diferencia de la 'Habilidad' por:",
    correcta: "Un mayor componente de precisión, control y adaptación fina al entorno.",
    incorrectas: ["Que la destreza es innata y la habilidad se aprende.", "Son términos opuestos que no pueden aparecer en el mismo objetivo."]
  },
  {
    enunciado: "El dominio 'Psicomotor' fue el último en recibir atención taxonómica debido a:",
    correcta: "El predominio histórico del intelectualismo en el sistema educativo.",
    incorrectas: ["Que el movimiento humano no se puede medir.", "Que no existían profesores de Educación Física antes de 1990."]
  },
  {
    enunciado: "Un objetivo que pida 'realizar una voltereta lateral con corrección técnica' se sitúa en Dave en el nivel de:",
    correcta: "Precisión.",
    incorrectas: ["Imitación.", "Naturalización."]
  },
  {
    enunciado: "La 'Lateralidad' y el 'Dominio Espacial' se categorizan en las taxonomías motrices como:",
    correcta: "Habilidades Perceptivo-motrices.",
    incorrectas: ["Capacidades Condicionales.", "Técnicas Deportivas."]
  },
  {
    enunciado: "La aplicación práctica de las taxonomías en Secundaria permite:",
    correcta: "Personalizar los objetivos según la diversidad de niveles de competencia motriz en el aula.",
    incorrectas: ["Eliminar la necesidad de que el profesor asista a las sesiones.", "Hacer que todos los alumnos sean atletas profesionales en un trimestre."]
  }
];