
// -15-el-calentamiento.js

var PREGUNTAS = [
  {
    enunciado: "Desde un punto de vista fisiológico, ¿cuál es el objetivo principal del calentamiento?",
    correcta: "Elevar la temperatura corporal y muscular para optimizar las reacciones metabólicas y la contractilidad.",
    incorrectas: ["Enfriar el cuerpo para evitar la sudoración excesiva durante la sesión.", "Aumentar la viscosidad muscular para proteger las articulaciones."]
  },
  {
    enunciado: "¿Cómo afecta el calentamiento a la curva de disociación de la oxihemoglobina?",
    correcta: "La desplaza hacia la derecha, facilitando la liberación de oxígeno a los tejidos musculares.",
    incorrectas: ["La desplaza hacia la izquierda, dificultando la llegada de oxígeno al músculo.", "No produce ningún efecto sobre el transporte de gases."]
  },
  {
    enunciado: "El calentamiento 'específico' se diferencia del 'general' en que:",
    correcta: "Incluye movimientos y gestos técnicos propios de la actividad o deporte que se va a realizar a continuación.",
    incorrectas: ["Se realiza exclusivamente en una habitación a alta temperatura.", "Dura exactamente el triple de tiempo que el general."]
  },
  {
    enunciado: "En la fase de calentamiento general, el orden lógico de los ejercicios suele ser:",
    correcta: "Activación vegetativa, movilidad articular y estiramientos dinámicos.",
    incorrectas: ["Sprints de 100 metros seguidos de reposo absoluto en el suelo.", "Levantamiento de cargas máximas para despertar el sistema nervioso."]
  },
  {
    enunciado: "Una de las funciones preventivas del calentamiento es reducir el riesgo de lesiones debido a:",
    correcta: "La disminución de la viscosidad muscular y el aumento de la elasticidad de tendones y ligamentos.",
    incorrectas: ["El endurecimiento de los huesos mediante el impacto repetido.", "La eliminación total del ácido láctico antes de empezar a moverse."]
  },
  {
    enunciado: "¿Cuál es la duración recomendada de un calentamiento estándar en una sesión de Educación Física de 60 minutos?",
    correcta: "Entre 10 y 15 minutos, adaptándolo a la intensidad de la parte principal y al clima.",
    incorrectas: ["Exactamente 45 minutos para asegurar que el alumno esté cansado.", "Menos de 2 minutos para no perder tiempo de juego."]
  },
  {
    enunciado: "El calentamiento 'psicológico' o mental tiene como fin:",
    correcta: "Mejorar la concentración, la motivación y el estado de alerta del alumno hacia la tarea.",
    incorrectas: ["Dormir durante unos minutos para soñar con la victoria.", "Memorizar la biografía del inventor del deporte que se va a practicar."]
  },
  {
    enunciado: "¿Qué efecto produce el calentamiento sobre la velocidad de conducción del impulso nervioso?",
    correcta: "La aumenta, mejorando el tiempo de reacción y la coordinación neuromuscular.",
    incorrectas: ["La disminuye, provocando una respuesta motora más lenta y torpe.", "No tiene influencia sobre el sistema nervioso central."]
  },
  {
    enunciado: "En el calentamiento para adolescentes, se deben evitar los estiramientos pasivos forzados de larga duración porque:",
    correcta: "Pueden disminuir temporalmente la capacidad de generar fuerza explosiva y el tono muscular.",
    incorrectas: ["Hacen que los alumnos crezcan demasiado rápido de forma asimétrica.", "Provocan una sudoración fría muy peligrosa."]
  },
  {
    enunciado: "El calentamiento 'pasivo' consiste en el uso de medios como:",
    correcta: "Masajes, duchas calientes o cremas de calor, aunque no sustituyen al calentamiento activo.",
    incorrectas: ["Quedarse sentado mirando cómo calientan los compañeros.", "Realizar ejercicios de alta intensidad sin moverse del sitio."]
  },
  {
    enunciado: "¿Qué factor externo condiciona más la duración necesaria del calentamiento?",
    correcta: "La temperatura ambiental (a menor temperatura, mayor duración del calentamiento).",
    incorrectas: ["El color de las líneas de la pista polideportiva.", "La marca de la ropa que llevan los alumnos."]
  },
  {
    enunciado: "La función de 'aprendizaje' del calentamiento permite al docente:",
    correcta: "Introducir o repasar habilidades motrices básicas o técnicas de forma suave.",
    incorrectas: ["Evaluar con nota numérica el nivel de sudor del alumno.", "Castigar a los alumnos que llegaron tarde."]
  },
  {
    enunciado: "Un indicador subjetivo de que el calentamiento ha sido efectivo es:",
    correcta: "La aparición de una ligera sudoración y la sensación de preparación psicofísica.",
    incorrectas: ["Tener una frecuencia cardíaca por encima de 200 latidos por minuto.", "Sentir un dolor agudo en todas las articulaciones."]
  },
  {
    enunciado: "En la parte de 'movilidad articular', se busca:",
    correcta: "Lubricar las articulaciones mediante el aumento de la producción de líquido sinovial.",
    incorrectas: ["Bloquear las articulaciones para que no se muevan durante el ejercicio.", "Aumentar el peso de los huesos mediante el roce."]
  },
  {
    enunciado: "¿Cómo debe evolucionar la intensidad durante el calentamiento?",
    correcta: "De forma progresiva, de menor a mayor intensidad, sin llegar a producir fatiga significativa.",
    incorrectas: ["Empezar al máximo y terminar descansando en el suelo.", "Mantener la misma intensidad mínima durante todo el tiempo."]
  },
  {
    enunciado: "El calentamiento ayuda a prevenir 'isquemias miocárdicas' transitorias al:",
    correcta: "Asegurar un aumento gradual del flujo sanguíneo coronario antes del esfuerzo intenso.",
    incorrectas: ["Cerrar las arterias para que no pase demasiada sangre al corazón.", "Aumentar la cantidad de grasa en la sangre."]
  },
  {
    enunciado: "Un calentamiento específico para voleibol debería incluir:",
    correcta: "Desplazamientos laterales, saltos suaves y toques de dedos/antebrazos.",
    incorrectas: ["Lanzamientos de jabalina a máxima distancia.", "Carreras de 1 kilómetro con pesas en los tobillos."]
  },
  {
    enunciado: "La 'Vuelta a la Calma' es el proceso inverso al calentamiento cuyo objetivo es:",
    correcta: "Facilitar la recuperación, la eliminación de desechos metabólicos y el retorno a la homeostasis.",
    incorrectas: ["Aumentar la temperatura corporal aún más después de jugar.", "Salir corriendo del pabellón nada más terminar el partido."]
  },
  {
    enunciado: "¿Qué sistema energético predomina durante un calentamiento estándar bien realizado?",
    correcta: "Sistema aeróbico.",
    incorrectas: ["Sistema anaeróbico láctico (glucólisis rápida).", "Sistema de los fosfágenos al máximo nivel."]
  },
  {
    enunciado: "En la ESO, el docente debe enseñar al alumno a realizar un calentamiento autónomo para:",
    correcta: "Fomentar la responsabilidad y la seguridad en su práctica de ocio fuera del centro.",
    incorrectas: ["Poder sentarse a leer el periódico mientras los alumnos calientan solos.", "Evitar que los alumnos hablen entre ellos antes de la clase."]
  },
  {
    enunciado: "La 'activación vegetativa' en el calentamiento consiste en:",
    correcta: "Poner en marcha los sistemas cardiovascular y respiratorio mediante ejercicios globales.",
    incorrectas: ["Comer vegetales para tener más energía inmediata.", "Realizar ejercicios de cálculo mental mientras se corre."]
  },
  {
    enunciado: "¿Cuál de estos ejercicios NO sería adecuado en un calentamiento general escolar?",
    correcta: "Series de 1 repetición máxima (1RM) en sentadilla.",
    incorrectas: ["Carrera continua suave con cambios de dirección.", "Círculos con los brazos y rotaciones de tronco controladas."]
  },
  {
    enunciado: "El calentamiento aumenta la actividad enzimática, lo que favorece:",
    correcta: "La velocidad de las reacciones químicas de obtención de energía (ATP).",
    incorrectas: ["La formación de caries dentales durante el ejercicio.", "La degradación de los huesos largos."]
  },
  {
    enunciado: "¿Qué papel juega el calentamiento en la prevención de lesiones musculares como las roturas fibrilares?",
    correcta: "Mejora la elasticidad y disminuye la resistencia interna del músculo al estiramiento brusco.",
    incorrectas: ["Hace que los músculos sean de hierro e imposibles de romper.", "No tiene ninguna relación con las lesiones musculares."]
  },
  {
    enunciado: "Un calentamiento excesivamente largo y fatigante puede provocar:",
    correcta: "Una disminución de las reservas de glucógeno y del rendimiento en la parte principal.",
    incorrectas: ["Un aumento de la inteligencia del alumno de forma exponencial.", "La desaparición total del sudor corporal."]
  },
  {
    enunciado: "En la fase de estiramientos del calentamiento, la tendencia actual en EF es:",
    correcta: "Utilizar estiramientos dinámicos y balísticos controlados para activar la musculatura.",
    incorrectas: ["Utilizar el método PNF (Facilitación Neuromuscular Propioceptiva) máximo con todos los alumnos.", "Prohibir cualquier tipo de estiramiento por ser peligroso."]
  },
  {
    enunciado: "¿Cómo influye la 'hora del día' en el calentamiento?",
    correcta: "Por la mañana la temperatura corporal es más baja y se requiere un calentamiento más progresivo y largo.",
    incorrectas: ["Por la noche no hace falta calentar porque el cuerpo ya está cansado.", "La hora del día no tiene ninguna relevancia biológica."]
  },
  {
    enunciado: "El calentamiento 'recreativo' utiliza:",
    correcta: "Juegos sencillos y motivadores para lograr la activación fisiológica.",
    incorrectas: ["Consolas de videojuegos para calentar los dedos.", "Chistes y bromas sin realizar ningún tipo de movimiento."]
  },
  {
    enunciado: "Un error común en el calentamiento escolar es:",
    correcta: "Realizarlo siempre de la misma forma, provocando desmotivación y falta de transferencia.",
    incorrectas: ["Cambiar los ejercicios según el deporte que se vaya a practicar.", "Explicar a los alumnos los beneficios fisiológicos del mismo."]
  },
  {
    enunciado: "La 'capacidad de carga' de las articulaciones tras el calentamiento:",
    correcta: "Aumenta debido a la mejor hidratación del cartílago articular.",
    incorrectas: ["Disminuye, haciendo que las articulaciones sean más frágiles.", "Se mantiene exactamente igual que en reposo."]
  },
  {
    enunciado: "En el calentamiento, el aumento del volumen sistólico permite:",
    correcta: "Enviar más sangre oxigenada a los músculos en cada latido.",
    incorrectas: ["Reducir el tamaño del corazón para que quepa mejor en la caja torácica.", "Aumentar la cantidad de orina producida."]
  },
  {
    enunciado: "¿Qué importancia tiene la 'ropa deportiva' en el calentamiento?",
    correcta: "Ayuda a mantener el calor corporal generado, especialmente en ambientes fríos.",
    incorrectas: ["Debe ser de color negro para absorber toda la radiación solar.", "No tiene ninguna importancia si el alumno calienta bien."]
  },
  {
    enunciado: "Un calentamiento bien estructurado debe durar hasta que la frecuencia cardíaca alcance aproximadamente:",
    correcta: "Entre 120 y 140 latidos por minuto, dependiendo de la edad y nivel.",
    incorrectas: ["Exactamente 60 latidos por minuto.", "Más de 220 latidos por minuto."]
  },
  {
    enunciado: "La 'interacción social' durante el calentamiento en Secundaria:",
    correcta: "Puede usarse mediante juegos cooperativos para mejorar el clima del grupo desde el inicio.",
    incorrectas: ["Debe estar estrictamente prohibida para mantener la disciplina militar.", "Solo debe permitirse si los alumnos calientan en silencio absoluto."]
  },
  {
    enunciado: "¿Qué se entiende por 'calentamiento mental' en deportes de precisión (como el tiro con arco escolar)?",
    correcta: "La visualización técnica de los movimientos y la focalización de la atención.",
    incorrectas: ["Leer un libro de matemáticas antes de lanzar.", "Intentar mover los objetos con el poder de la mente."]
  },
  {
    enunciado: "El calentamiento previene el 'flato' (dolor abdominal transitorio) al:",
    correcta: "Adaptar progresivamente el flujo sanguíneo y los ritmos respiratorios al esfuerzo.",
    incorrectas: ["Hacer que el estómago desaparezca durante la sesión.", "Beber 2 litros de agua helada antes de empezar."]
  },
  {
    enunciado: "En la LOMLOE, el diseño de un calentamiento propio es un criterio de evaluación que mide:",
    correcta: "La autonomía y el conocimiento de los fundamentos de la actividad física saludable.",
    incorrectas: ["La capacidad de obediencia ciega a las órdenes del docente.", "La velocidad a la que el alumno es capaz de cambiarse de ropa."]
  },
  {
    enunciado: "¿Qué autor destaca la importancia del calentamiento como 'rito de entrada' a la sesión de EF?",
    correcta: "Muchos autores de didáctica (como Florence o Piéron) lo consideran esencial para el encuadre pedagógico.",
    incorrectas: ["Ninguno, el calentamiento se considera una pérdida de tiempo en didáctica moderna.", "Solo los autores de la antigua Grecia."]
  },
  {
    enunciado: "Tras un calentamiento, el 'tiempo de reacción' del alumno suele:",
    correcta: "Disminuir (es decir, reacciona más rápido).",
    incorrectas: ["Aumentar (reacciona más lento).", "Mantenerse idéntico al estado de sueño profundo."]
  },
  {
    enunciado: "El calentamiento general termina cuando el organismo está:",
    correcta: "En un estado de 'listo para la acción' sin presentar signos de fatiga previa.",
    incorrectas: ["Totalmente agotado y sin energía para la parte principal.", "En el mismo estado basal que cuando estaba sentado en clase de historia."]
  }
];
