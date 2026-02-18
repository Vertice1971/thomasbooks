
// -14-principios-del-desarrollo-de-la-condicion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué principio del entrenamiento postula que la carga de trabajo debe superar el umbral de adaptación para producir mejoras?",
    correcta: "Principio de Sobrecarga (o de Intensidad del Estímulo).",
    incorrectas: ["Principio de Reversibilidad.", "Principio de Especialización."]
  },
  {
    enunciado: "El 'Principio de Progresión' sugiere que para seguir obteniendo adaptaciones es necesario:",
    correcta: "Aumentar gradualmente el volumen o la intensidad a medida que el alumno mejora su condición.",
    incorrectas: ["Mantener siempre la misma carga para no estresar al organismo.", "Empezar con la máxima intensidad posible desde el primer día."]
  },
  {
    enunciado: "¿Qué principio establece que las adaptaciones se pierden si se interrumpe la práctica de actividad física de forma prolongada?",
    correcta: "Principio de Continuidad (o Reversibilidad).",
    incorrectas: ["Principio de Individualización.", "Principio de Transferencia."]
  },
  {
    enunciado: "El 'Principio de Individualización' es fundamental en Educación Física porque:",
    correcta: "Cada alumno tiene una respuesta biológica y ritmos de maduración diferentes ante un mismo estímulo.",
    incorrectas: ["Cada alumno debe tener su propio gimnasio privado.", "El profesor debe dar una clase distinta a cada uno de los 30 alumnos a la vez."]
  },
  {
    enunciado: "Según el 'Principio de Variedad', el entrenamiento en adolescentes debe:",
    correcta: "Utilizar múltiples medios y tareas para evitar el estancamiento y la monotonía, favoreciendo la motivación.",
    incorrectas: ["Centrarse en un solo ejercicio repetido miles de veces.", "Cambiar las reglas del centro educativo cada semana."]
  },
  {
    enunciado: "El 'Principio de Especificidad' indica que las adaptaciones son:",
    correcta: "Dependientes del tipo de estímulo aplicado (por ejemplo, entrenar fuerza no mejora directamente la flexibilidad).",
    incorrectas: ["Iguales para cualquier tipo de ejercicio realizado.", "Solo aplicables a los alumnos que quieren ser científicos."]
  },
  {
    enunciado: "¿Qué principio postula que el organismo funciona como un todo y debe desarrollarse de forma armónica?",
    correcta: "Principio de Multilateralidad (o de Desarrollo General).",
    incorrectas: ["Principio de Aislamiento Muscular.", "Principio de Economía de Esfuerzo."]
  },
  {
    enunciado: "El 'Principio de Recuperación' establece que:",
    correcta: "El descanso es una parte activa del entrenamiento donde se producen las mejoras fisiológicas.",
    incorrectas: ["No se debe descansar nunca si se quiere mejorar rápido.", "Solo se descansa cuando el alumno se lesiona gravemente."]
  },
  {
    enunciado: "En la Educación Física escolar, el 'Principio de Participación Activa y Consciente' busca que el alumno:",
    correcta: "Comprenda el porqué de las tareas y se involucre en su propio proceso de mejora.",
    incorrectas: ["Obedezca las órdenes sin preguntar absolutamente nada.", "Esté presente en el gimnasio aunque esté durmiendo."]
  },
  {
    enunciado: "El 'Principio de Transferencia' analiza cómo:",
    correcta: "Un aprendizaje o desarrollo físico influye positiva o negativamente en la adquisición de otro nuevo.",
    incorrectas: ["Se transfiere el dinero de las becas deportivas.", "Se contagian los virus en el vestuario."]
  },
  {
    enunciado: "¿Qué ocurre si se aplica el 'Principio de Progresión' de forma demasiado brusca en adolescentes?",
    correcta: "Aumenta exponencialmente el riesgo de lesión y de sobreentrenamiento.",
    incorrectas: ["El alumno se convierte en atleta profesional en una semana.", "Mejora la calidad del sueño de forma inmediata."]
  },
  {
    enunciado: "El 'Principio de Periodización' en el marco escolar suele organizarse en torno a:",
    correcta: "Las unidades didácticas y los trimestres escolares.",
    incorrectas: ["Los ciclos lunares y las mareas.", "El calendario de competiciones de la NBA exclusivamente."]
  },
  {
    enunciado: "Según el 'Ley de Arnodt-Schulz' (relacionada con la sobrecarga), un estímulo demasiado débil:",
    correcta: "No produce ninguna adaptación.",
    incorrectas: ["Produce adaptaciones máximas inmediatas.", "Causa lesiones graves en el tejido óseo."]
  },
  {
    enunciado: "El 'Principio de Alternancia' sugiere coordinar adecuadamente:",
    correcta: "El trabajo de diferentes capacidades y los periodos de esfuerzo con los de descanso.",
    incorrectas: ["El uso de zapatillas izquierdas y derechas.", "La asistencia a clase de los alumnos pares e impares."]
  },
  {
    enunciado: "En el desarrollo de la condición física en Secundaria, el principio de 'Multilateralidad' debe primar sobre el de:",
    correcta: "Especialización precoz.",
    incorrectas: ["Higiene personal.", "Respeto a las normas."]
  },
  {
    enunciado: "El 'Principio de Eficacia' busca obtener el máximo resultado con:",
    correcta: "La inversión de tiempo y esfuerzo más racional posible.",
    incorrectas: ["El mayor gasto de dinero en suplementación.", "El uso de la fuerza bruta sin ningún tipo de técnica."]
  },
  {
    enunciado: "¿Qué principio advierte que las adaptaciones son reversibles si cesa el estímulo?",
    correcta: "Principio de Reversibilidad.",
    incorrectas: ["Principio de Gravedad.", "Principio de Inercia."]
  },
  {
    enunciado: "El 'Principio de Relación Óptima entre Carga y Recuperación' se fundamenta en la ley de:",
    correcta: "Supercompensación.",
    incorrectas: ["Termodinámica.", "Relatividad general."]
  },
  {
    enunciado: "En Educación Física, aplicar el 'Principio de Individualización' requiere:",
    correcta: "Realizar una evaluación inicial para conocer el nivel de cada alumno.",
    incorrectas: ["Que todos los alumnos realicen el mismo número de repeticiones obligatoriamente.", "Ignorar las patologías previas de los estudiantes."]
  },
  {
    enunciado: "El 'Principio de Especialización' debe aplicarse en el entrenamiento deportivo solo después de:",
    correcta: "Haber consolidado una amplia base de desarrollo multilateral.",
    incorrectas: ["Los primeros cinco minutos de la primera clase.", "Que el alumno compre el uniforme del equipo."]
  },
  {
    enunciado: "Un estímulo que supera el umbral de tolerancia del sujeto (según la Ley del Umbral) producirá:",
    correcta: "Daño orgánico o sobreentrenamiento.",
    incorrectas: ["Una mejora saludable de la resistencia.", "Ningún efecto en absoluto."]
  },
  {
    enunciado: "El 'Principio de Continuidad' en el ámbito escolar se ve dificultado por:",
    correcta: "Los periodos vacacionales y la baja frecuencia semanal de las clases.",
    incorrectas: ["El exceso de horas de Educación Física en el currículo.", "La falta de aire en el gimnasio."]
  },
  {
    enunciado: "¿Qué principio se aplica cuando variamos los métodos de entrenamiento para evitar el estancamiento biológico?",
    correcta: "Principio de Variabilidad.",
    incorrectas: ["Principio de Inmovilidad.", "Principio de Identidad."]
  },
  {
    enunciado: "El 'Principio de Carga Creciente' es sinónimo de:",
    correcta: "Principio de Progresión.",
    incorrectas: ["Principio de Inacción.", "Principio de Recogida de Material."]
  },
  {
    enunciado: "Para respetar el 'Principio de Salud', toda carga de entrenamiento debe:",
    correcta: "Ser fisiológicamente tolerable y no comprometer el desarrollo normal del adolescente.",
    incorrectas: ["Buscar el rendimiento a cualquier precio, incluso con riesgo de lesión.", "Realizarse sin que el alumno sude en absoluto."]
  },
  {
    enunciado: "El 'Principio de Unidad' considera que:",
    correcta: "El entrenamiento debe afectar al individuo de forma global, integrando aspectos físicos y psíquicos.",
    incorrectas: ["Solo se debe entrenar una unidad didáctica al año.", "Todos los alumnos deben pesar exactamente lo mismo."]
  },
  {
    enunciado: "En la planificación de una sesión, el principio de 'Calentamiento y Vuelta a la Calma' asegura:",
    correcta: "La transición progresiva del organismo hacia y desde el estado de esfuerzo.",
    incorrectas: ["Que el profesor tenga tiempo para pasar lista tranquilamente.", "Que el gimnasio esté siempre a la misma temperatura."]
  },
  {
    enunciado: "¿Qué principio se vulnera si un alumno de 12 años realiza un entrenamiento de fuerza máxima igual al de un adulto?",
    correcta: "Principio de Individualización y Adecuación a la edad.",
    incorrectas: ["Principio de Gravedad Terrestre.", "Principio de Acción y Reacción."]
  },
  {
    enunciado: "La 'Transferencia Negativa' ocurre cuando:",
    correcta: "La práctica de una actividad interfiere perjudicialmente en el aprendizaje o ejecución de otra.",
    incorrectas: ["El alumno suspende el examen de teoría.", "Se pierde peso de forma saludable."]
  },
  {
    enunciado: "El 'Principio de Estabilidad de la Carga' sugiere que:",
    correcta: "Es necesario mantener un estímulo durante un tiempo suficiente para que las adaptaciones se consoliden.",
    incorrectas: ["La carga debe cambiar cada segundo para confundir al músculo.", "El peso de las mancuernas debe ser siempre de 100 kg."]
  },
  {
    enunciado: "En secundaria, el 'Principio de Diversión' (vinculado a la variedad) es clave para:",
    correcta: "Fomentar la adherencia a largo plazo a un estilo de vida activo.",
    incorrectas: ["Que los alumnos no hagan nada y solo hablen entre ellos.", "Eliminar la figura del profesor de la clase."]
  },
  {
    enunciado: "El 'Umbral de Entrenamiento' es:",
    correcta: "La intensidad mínima necesaria para que se produzca una respuesta adaptativa.",
    incorrectas: ["La puerta de entrada al pabellón polideportivo.", "El número máximo de faltas que puede tener un alumno."]
  },
  {
    enunciado: "Según el 'Principio de Modelación', el entrenamiento debe:",
    correcta: "Simular las condiciones reales de la competición o actividad para la que se prepara.",
    incorrectas: ["Basarse en modelos de arcilla para estudiar la anatomía.", "Ser siempre idéntico para todos los deportes."]
  },
  {
    enunciado: "El 'Principio de Simplicidad' en las tareas escolares busca:",
    correcta: "Que la complejidad técnica no sea una barrera para el desarrollo de la capacidad física pretendida.",
    incorrectas: ["Que los alumnos no tengan que aprender ninguna regla difícil.", "Que los exámenes sean de una sola pregunta."]
  },
  {
    enunciado: "La 'Carga Excesiva' produce un estado de:",
    correcta: "Sobreentrenamiento y agotamiento de las reservas funcionales.",
    incorrectas: ["Salud sobrehumana y energía infinita.", "Felicidad absoluta e inmediata."]
  },
  {
    enunciado: "El 'Principio de Sostenibilidad' en EF implica que el ejercicio debe:",
    correcta: "Poder mantenerse como hábito a lo largo de los años sin causar desgaste prematuro.",
    incorrectas: ["Realizarse solo con materiales que no pesen nada.", "Utilizar solo energía solar para mover los brazos."]
  },
  {
    enunciado: "¿Qué principio justifica que un corredor de maratón no necesite tener una fuerza explosiva máxima en los brazos?",
    correcta: "Principio de Especificidad.",
    incorrectas: ["Principio de Inercia.", "Principio de Arquímedes."]
  },
  {
    enunciado: "La 'Densidad del Entrenamiento' es la relación entre:",
    correcta: "La duración del esfuerzo y el tiempo de descanso dentro de una sesión.",
    incorrectas: ["La masa del alumno y su volumen corporal.", "El número de alumnos por metro cuadrado en el gimnasio."]
  },
  {
    enunciado: "El 'Principio de Adaptación' es un proceso:",
    correcta: "Dinámico que busca el equilibrio (homeostasis) ante agresiones externas (estímulos).",
    incorrectas: ["Estático que nunca cambia independientemente de lo que hagamos.", "Exclusivamente mental que no afecta a los músculos."]
  },
  {
    enunciado: "En la LOMLOE, los principios del entrenamiento deben explicarse para que el alumno:",
    correcta: "Adquiera autonomía en la planificación de su vida activa.",
    incorrectas: ["Memorice los nombres en alemán de los autores que los crearon.", "Pueda trabajar como entrenador profesional sin título."]
  }
];
