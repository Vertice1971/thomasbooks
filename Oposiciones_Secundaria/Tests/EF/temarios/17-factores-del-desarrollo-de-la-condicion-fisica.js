
// -17-factores-del-desarrollo-de-la-condicion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "En la metodología del entrenamiento, el 'Volumen' se define como:",
    correcta: "La cantidad total de trabajo realizado (distancia, tiempo, kilos, repeticiones).",
    incorrectas: ["El grado de esfuerzo o dificultad de la tarea.", "El espacio físico que ocupa el alumno en el gimnasio."]
  },
  {
    enunciado: "La 'Intensidad' del esfuerzo en el desarrollo de la condición física representa:",
    correcta: "El aspecto cualitativo de la carga, la potencia del estímulo por unidad de tiempo.",
    incorrectas: ["La duración total de la sesión de clase.", "El número de veces que el alumno asiste al centro."]
  },
  {
    enunciado: "¿Cuál es el método más común en Educación Física para controlar la intensidad de un esfuerzo aeróbico?",
    correcta: "La frecuencia cardíaca (pulsaciones por minuto).",
    incorrectas: ["La medición del ácido láctico en sangre cada minuto.", "El color de la camiseta tras sudar."]
  },
  {
    enunciado: "La 'Recuperación' es el factor que permite:",
    correcta: "Restaurar las reservas energéticas y permitir que se produzca la supercompensación.",
    incorrectas: ["Aumentar la fatiga de forma indefinida hasta el agotamiento.", "Que el profesor de Educación Física se vaya a su casa antes."]
  },
  {
    enunciado: "La 'Duración' de un estímulo físico se refiere a:",
    correcta: "El tiempo durante el cual la carga de entrenamiento actúa sobre el organismo.",
    incorrectas: ["El número de años que el alumno lleva escolarizado.", "La velocidad a la que se realiza un sprint."]
  },
  {
    enunciado: "En el entrenamiento de fuerza, las 'Repeticiones' son:",
    correcta: "El número de veces que se realiza un mismo movimiento dentro de una serie.",
    incorrectas: ["El número total de alumnos que hacen el mismo ejercicio.", "Las veces que el profesor repite la explicación."]
  },
  {
    enunciado: "¿Cómo se denomina a la relación entre el tiempo de esfuerzo y el tiempo de descanso?",
    correcta: "Densidad de la carga.",
    incorrectas: ["Masa de la carga.", "Frecuencia de la carga."]
  },
  {
    enunciado: "Para mejorar la resistencia aeróbica en secundaria, la intensidad de trabajo debe situarse generalmente entre:",
    correcta: "El 60% y el 80% de la frecuencia cardíaca máxima.",
    incorrectas: ["El 10% y el 20% de la frecuencia cardíaca máxima.", "Por encima del 100% de la capacidad del alumno."]
  },
  {
    enunciado: "La 'Frecuencia' de entrenamiento es:",
    correcta: "El número de sesiones de actividad física realizadas en un periodo (semana, mes).",
    incorrectas: ["La velocidad a la que late el corazón en reposo.", "El número de veces que el alumno se lesiona."]
  },
  {
    enunciado: "Un aumento del volumen de trabajo con una intensidad baja es típico de la etapa de:",
    correcta: "Pretemporada o inicio de un programa de acondicionamiento físico.",
    incorrectas: ["Competición máxima o final de curso.", "Recuperación tras una cirugía grave."]
  },
  {
    enunciado: "La 'Carga de Entrenamiento' es el resultado de la combinación de:",
    correcta: "Volumen, intensidad, duración, densidad y frecuencia.",
    incorrectas: ["Peso del alumno y altura del profesor.", "Nota de matemáticas y nota de lengua."]
  },
  {
    enunciado: "En el entrenamiento de la velocidad de reacción, la recuperación entre repeticiones debe ser:",
    correcta: "Completa, para asegurar que el sistema nervioso esté totalmente descansado.",
    incorrectas: ["Mínima (5 segundos) para que el alumno esté muy cansado.", "Inexistente, se deben hacer 100 repeticiones sin parar."]
  },
  {
    enunciado: "¿Qué escala subjetiva permite al alumno valorar su propia intensidad del esfuerzo?",
    correcta: "Escala de Borg (Percepción subjetiva del esfuerzo).",
    incorrectas: ["Escala de Richter.", "Escala de pH."]
  },
  {
    enunciado: "La 'Carga Externa' es lo que el alumno realiza (ej. correr 5 km), mientras que la 'Carga Interna' es:",
    correcta: "La respuesta fisiológica y psicológica de su organismo a ese esfuerzo.",
    incorrectas: ["La mochila que lleva el alumno dentro del instituto.", "La cantidad de comida que el alumno ingiere."]
  },
  {
    enunciado: "Para trabajar la 'Fuerza Explosiva' en Secundaria, el número de repeticiones por serie debe ser:",
    correcta: "Bajo (entre 4 y 8) con una ejecución a la máxima velocidad posible.",
    incorrectas: ["Muy alto (más de 50) a velocidad muy lenta.", "Infinito hasta que el alumno no pueda más."]
  },
  {
    enunciado: "La 'Recuperación Activa' consiste en:",
    correcta: "Realizar una actividad de muy baja intensidad tras el esfuerzo para acelerar la eliminación de lactato.",
    incorrectas: ["Quedarse totalmente inmóvil en el suelo sin respirar apenas.", "Seguir entrenando a la misma intensidad máxima."]
  },
  {
    enunciado: "En la planificación escolar, el factor 'Volumen' suele medirse por:",
    correcta: "El tiempo total de práctica motriz efectiva durante la sesión.",
    incorrectas: ["El nivel de ruido que hacen los alumnos en el pabellón.", "La cantidad de agua que beben de la fuente."]
  },
  {
    enunciado: "La 'Supercompensación' ocurre solo si:",
    correcta: "Existe un equilibrio óptimo entre la carga aplicada y el tiempo de recuperación.",
    incorrectas: ["El alumno no descansa nada durante tres semanas.", "La carga es tan baja que no produce fatiga."]
  },
  {
    enunciado: "¿Qué factor determina la intensidad en un ejercicio de flexibilidad?",
    correcta: "El grado de estiramiento alcanzado respecto al límite de dolor o amplitud máxima.",
    incorrectas: ["La velocidad a la que se estira el músculo de forma violenta.", "El peso de las mancuernas que se sujetan mientras se estira."]
  },
  {
    enunciado: "Un aumento excesivo del volumen sin la recuperación adecuada conduce al:",
    correcta: "Síndrome de sobreentrenamiento.",
    incorrectas: ["Estado de salud perfecta.", "Aumento de la estatura del alumno."]
  },
  {
    enunciado: "La 'Densidad' aumenta cuando:",
    correcta: "Se reduce el tiempo de descanso manteniendo el mismo tiempo de esfuerzo.",
    incorrectas: ["Se aumenta el tiempo de descanso y se reduce el esfuerzo.", "El alumno gana masa muscular de forma brusca."]
  },
  {
    enunciado: "En la ESO, el control de los factores de la carga sirve para que el alumno:",
    correcta: "Aprenda a autorregular su esfuerzo de forma segura.",
    incorrectas: ["Se convierta en un esclavo del cronómetro sin pensar.", "Pueda dar órdenes de entrenamiento a sus amigos."]
  },
  {
    enunciado: "La 'Duración' de una serie de ejercicios anaeróbicos lácticos en secundaria no debería superar los:",
    correcta: "45-60 segundos para evitar niveles excesivos de acidez metabólica.",
    incorrectas: ["10 minutos sin parar al máximo nivel.", "2 horas seguidas de sprint."]
  },
  {
    enunciado: "La frecuencia de 2-3 sesiones semanales en Educación Física es suficiente para:",
    correcta: "Mantener niveles básicos de salud, pero insuficiente para grandes mejoras del rendimiento.",
    incorrectas: ["Ganar el Tour de Francia.", "Convertirse en maestro de yoga profesional."]
  },
  {
    enunciado: "¿Qué factor de la carga se modifica si aumentamos la inclinación de la cinta de correr?",
    correcta: "La intensidad.",
    incorrectas: ["El volumen.", "La frecuencia semanal."]
  },
  {
    enunciado: "La 'Micropausa' es el descanso que se produce:",
    correcta: "Entre repeticiones dentro de una misma serie (si el método lo requiere).",
    incorrectas: ["Entre un curso escolar y el siguiente.", "Durante las vacaciones de Navidad."]
  },
  {
    enunciado: "Un método de entrenamiento 'continuo' se caracteriza por:",
    correcta: "Una duración larga sin pausas de recuperación.",
    incorrectas: ["Realizar muchos descansos largos y pocos esfuerzos.", "No empezar nunca el ejercicio."]
  },
  {
    enunciado: "La 'Carga Proyectada' es la que el docente planifica, mientras que la 'Carga Real' es:",
    correcta: "La que el alumno termina realizando efectivamente según su estado y motivación.",
    incorrectas: ["El peso de la tiza con la que escribe el profesor.", "La nota que el alumno saca en el examen final."]
  },
  {
    enunciado: "En el entrenamiento de la 'Resistencia Aeróbica', la intensidad se puede medir mediante el 'Test del Habla', que consiste en:",
    correcta: "Comprobar si el alumno puede mantener una conversación mientras corre.",
    incorrectas: ["Hacer un examen oral mientras se realizan flexiones.", "Gritar muy fuerte para ver quién llega más lejos con la voz."]
  },
  {
    enunciado: "La 'Macropausa' es el descanso que se produce:",
    correcta: "Entre diferentes series de ejercicios o bloques de la sesión.",
    incorrectas: ["Cuando el alumno termina la educación secundaria.", "Cada vez que el alumno parpadea."]
  },
  {
    enunciado: "¿Qué factor de la carga es prioritario desarrollar en las primeras etapas de un programa de EF?",
    correcta: "El volumen (aumentar el tiempo de práctica a intensidades moderadas).",
    incorrectas: ["La intensidad máxima (hacer todo lo más rápido posible).", "La densidad (no descansar nada entre ejercicios)."]
  },
  {
    enunciado: "La relación carga-recuperación en el entrenamiento de la flexibilidad suele ser:",
    correcta: "Tiempos de estiramiento de 15-30 segundos con pausas cortas de relajación.",
    incorrectas: ["1 segundo de estiramiento y 1 hora de descanso.", "Estirar durante 24 horas seguidas sin parar."]
  },
  {
    enunciado: "¿Qué ocurre con la frecuencia cardíaca de reserva a medida que mejora la condición física?",
    correcta: "Aumenta, ya que la frecuencia cardíaca en reposo suele disminuir.",
    incorrectas: ["Disminuye, ya que el corazón deja de latir en reposo.", "Se mantiene siempre en 200 latidos por minuto."]
  },
  {
    enunciado: "La 'Variabilidad' de la carga evita que el organismo:",
    correcta: "Se acomode al estímulo y deje de producir adaptaciones.",
    incorrectas: ["Se vuelva demasiado inteligente.", "Pierda la capacidad de sentir hambre."]
  },
  {
    enunciado: "En un circuito de condición física, si hay 10 estaciones y se da una vuelta, el 'Volumen' es:",
    correcta: "Las 10 tareas realizadas.",
    incorrectas: ["La velocidad a la que se ha corrido entre estaciones.", "El cansancio subjetivo del profesor al mirar."]
  },
  {
    enunciado: "La 'Reserva de Adaptación' es:",
    correcta: "La diferencia entre el nivel actual del alumno y su potencial genético máximo.",
    incorrectas: ["Una cantidad de dinero ahorrada para comprar material.", "El número de alumnos suplentes en un equipo."]
  },
  {
    enunciado: "El factor 'Repeticiones' en el aprendizaje de una técnica busca:",
    correcta: "La automatización del patrón motor y la mejora de la precisión.",
    incorrectas: ["Que el alumno se aburra y deje de practicar.", "Que el material deportivo se gaste lo antes posible."]
  },
  {
    enunciado: "La 'Sobreintensidad' en adolescentes puede provocar:",
    correcta: "Lesiones en las placas epifisarias y estrés cardiovascular excesivo.",
    incorrectas: ["Un aumento de la estatura de 20 centímetros en un mes.", "Que el alumno hable más rápido de lo normal."]
  },
  {
    enunciado: "En la LOMLOE, entender los factores de la carga permite al alumno:",
    correcta: "Transferir estos conocimientos a su práctica de actividad física autónoma.",
    incorrectas: ["Aprobar el examen de física y química sin estudiar.", "Ser el director del centro deportivo municipal."]
  },
  {
    enunciado: "La carga de entrenamiento debe ser 'progresiva' para respetar:",
    correcta: "Los procesos biológicos de adaptación del organismo.",
    incorrectas: ["El orden alfabético de los ejercicios.", "El horario de apertura del instituto."]
  }
];
