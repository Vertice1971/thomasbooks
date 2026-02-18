// 41-recreacion-y-tiempo-libre.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo define Joffre Dumazedier (1964) las funciones de la recreación a través de su teoría de las '3D'?",
    correcta: "Descanso, Diversión y Desarrollo de la personalidad.",
    incorrectas: [
      "Deporte, Disciplina y Dieta equilibrada.",
      "Desplazamiento, Dinamismo y Desempeño motriz."
    ]
  },
  {
    enunciado: "En el ámbito sociológico, ¿qué diferencia existe entre 'Tiempo Libre' y 'Tiempo Liberado'?",
    correcta: "El tiempo libre es de libre elección y autonomía, mientras que el tiempo liberado son pausas de obligaciones que no siempre implican ocio real.",
    incorrectas: [
      "El tiempo libre solo existe los fines de semana y el tiempo liberado es el de las vacaciones de verano.",
      "No existe diferencia; ambos términos son sinónimos absolutos en la sociología del ocio."
    ]
  },
  {
    enunciado: "Según la LOMLOE, los juegos deportivo-recreativos deben contribuir al currículo principalmente para:",
    correcta: "Generar hábitos de adherencia a la práctica física mediante experiencias positivas y lúdicas.",
    incorrectas: [
      "Sustituir las sesiones de condición física por tiempo de juego libre sin objetivos.",
      "Entrenar a los alumnos para que ganen competiciones de e-sports en el centro."
    ]
  },
  {
    enunciado: "¿Cuál es la característica fundamental de una actividad recreativa?",
    correcta: "Su carácter voluntario y la búsqueda de satisfacción inmediata y desinteresada.",
    incorrectas: [
      "La obligatoriedad de obtener una marca mínima para poder participar.",
      "La necesidad de que exista un premio económico al finalizar la actividad."
    ]
  },
  {
    enunciado: "La evolución histórica de la recreación muestra que en la Grecia Clásica el 'Skholé' era:",
    correcta: "Un tiempo dedicado a la contemplación, el estudio y el cultivo del espíritu, reservado a los hombres libres.",
    incorrectas: [
      "El periodo de entrenamiento militar obligatorio para los jóvenes espartanos.",
      "La obligación de trabajar en el campo para sustentar a la polis."
    ]
  },
  {
    enunciado: "En la Educación Física actual, el 'Ocio Activo' se contrapone al 'Ocio Pasivo'. Un ejemplo de ocio activo es:",
    correcta: "Realizar una ruta de senderismo o participar en un torneo de bádminton recreativo.",
    incorrectas: [
      "Ver un partido de fútbol profesional sentado en el sofá o en la grada.",
      "Jugar a un simulador de gestión deportiva en un ordenador portátil."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Recreación Educativa' en el contexto escolar?",
    correcta: "El uso del juego y la actividad física como medios para la formación integral y la adquisición de valores.",
    incorrectas: [
      "El tiempo que el profesor dedica a corregir exámenes mientras los alumnos juegan solos.",
      "Hacer que los alumnos reciten poemas mientras corren alrededor del patio."
    ]
  },
  {
    enunciado: "El concepto de 'Ocio' (Otium) en la Antigua Roma evolucionó hacia el 'Panem et Circenses', que buscaba:",
    correcta: "El control social de las masas mediante espectáculos públicos y entretenimiento pasivo.",
    incorrectas: [
      "La educación física obligatoria para que todos los ciudadanos fueran atletas.",
      "La prohibición de cualquier forma de juego que no fuera de carácter religioso."
    ]
  },
  {
    enunciado: "¿Cuál es el valor pedagógico del juego recreativo en la etapa de Secundaria?",
    correcta: "Favorece la integración del grupo-clase, reduce el estrés académico y mejora la competencia social.",
    incorrectas: [
      "Permite identificar a los alumnos con menor capacidad física para sancionarlos.",
      "Elimina la necesidad de que el profesor explique el reglamento de las actividades."
    ]
  },
  {
    enunciado: "La 'Pedagogía del Ocio' sostiene que se debe educar 'en' el tiempo libre, 'para' el tiempo libre y 'mediante' el ocio. ¿Qué significa educar 'para' el tiempo libre?",
    correcta: "Dotar al alumno de capacidades y recursos para que elija actividades saludables de forma autónoma en su vida privada.",
    incorrectas: [
      "Obligar al alumno a ir al gimnasio todos los días después de clase de forma estricta.",
      "Enseñar al alumno a no tener nunca tiempo libre para que sea más productivo."
    ]
  },
  {
    enunciado: "Los juegos deportivo-recreativos se diferencian del deporte federado en que:",
    correcta: "La regla es flexible y adaptable a los participantes, priorizando la participación sobre el resultado.",
    incorrectas: [
      "No tienen ningún tipo de regla y el objetivo es el caos total en el gimnasio.",
      "Solo pueden participar personas que tengan un certificado de aptitud olímpica."
    ]
  },
  {
    enunciado: "¿Cómo contribuye la recreación al bloque de 'Salud y Calidad de Vida' en la LOMLOE?",
    correcta: "Mediante el bienestar emocional y la prevención de enfermedades derivadas del sedentarismo.",
    incorrectas: [
      "Haciendo que los alumnos aprendan de memoria la composición química de todas las frutas.",
      "Asegurando que nadie se canse nunca durante las sesiones de Educación Física."
    ]
  },
  {
    enunciado: "El 'Clima de Aula' en las actividades recreativas debe ser:",
    correcta: "Seguro, motivador y con baja presión competitiva para permitir la participación de todos.",
    incorrectas: [
      "Extremadamente rígido para que nadie se ría durante la práctica.",
      "Basado en el miedo al castigo si no se gana el juego recreativo."
    ]
  },
  {
    enunciado: "Una actividad recreativa se considera 'Socializadora' cuando:",
    correcta: "Fomenta la interacción, el diálogo y el establecimiento de vínculos entre los participantes.",
    incorrectas: [
      "Se realiza siempre de forma individual en una sala cerrada sin contacto con nadie.",
      "El profesor dicta una conferencia sobre la historia de la sociología sin dejar hablar."
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Creatividad' en los juegos recreativos?",
    correcta: "Permite a los alumnos modificar reglas, inventar variantes y adaptar el juego a sus propios intereses.",
    incorrectas: [
      "No tiene ningún papel; las reglas deben seguirse de forma robótica y sin cambios.",
      "Sirve para que el alumno no tenga que realizar ningún esfuerzo físico."
    ]
  },
  {
    enunciado: "El 'Turismo Activo' es una manifestación de recreación que combina:",
    correcta: "El desplazamiento a entornos naturales o culturales con la práctica de actividades físicas recreativas.",
    incorrectas: [
      "Estar sentado en un autobús durante 12 horas mirando por la ventana.",
      "Ir a un centro comercial en otra ciudad para comprar ropa de deporte."
    ]
  },
  {
    enunciado: "En la LOMLOE, la recreación se vincula con la 'Competencia Personal, Social y de Aprender a Aprender' al:",
    correcta: "Fomentar la autorregulación emocional y el autoconocimiento en contextos lúdicos.",
    incorrectas: [
      "Hacer que los alumnos estudien para ser animadores turísticos profesionales.",
      "Aprender a ganar siempre haciendo trampas sin que el árbitro se dé cuenta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ocio Serio' (Stebbins) en el contexto de la recreación?",
    correcta: "La búsqueda de una actividad recreativa que requiere compromiso, desarrollo de habilidades y esfuerzo constante (ej. aprender danza).",
    incorrectas: [
      "Jugar a un juego de mesa donde está prohibido sonreír o hablar.",
      "Una sesión de gimnasia que dura 24 horas sin interrupción alguna."
    ]
  },
  {
    enunciado: "Un indicador de 'Adherencia' a la actividad física recreativa es:",
    correcta: "La continuidad de la práctica por parte del alumno fuera del entorno escolar de forma voluntaria.",
    incorrectas: [
      "El número de veces que el alumno se pega a la pared durante un juego de persecución.",
      "Tener muchas pegatinas de deportistas famosos en la carpeta de clase."
    ]
  },
  {
    enunciado: "Los 'Juegos Alternativos' (ej. Kin-ball, Indiaca) se utilizan en recreación porque:",
    correcta: "Presentan un nivel de incertidumbre bajo y no están condicionados por estereotipos de género o habilidad previa.",
    incorrectas: [
      "Son mucho más caros que los deportes convencionales y dan prestigio al centro.",
      "Están prohibidos en las federaciones oficiales y por eso son recreativos."
    ]
  },
  {
    enunciado: "¿Cómo influye la 'Globalización' en las formas de recreación actuales?",
    correcta: "A través de la digitalización del ocio y la estandarización de actividades comerciales de masas.",
    incorrectas: [
      "Haciendo que la gravedad sea diferente en cada continente para los juegos de saltos.",
      "Eliminando la necesidad de respirar cuando se hace ejercicio en el extranjero."
    ]
  },
  {
    enunciado: "La 'Autogestión' en la recreación escolar implica que los alumnos:",
    correcta: "Sean capaces de organizar, arbitrar y dinamizar sus propias actividades con la guía del docente.",
    incorrectas: [
      "Deban pagarse su propio seguro médico para poder entrar al gimnasio.",
      "No reciban ninguna nota al final del curso porque el ocio no se evalúa."
    ]
  },
  {
    enunciado: "El concepto de 'Ocio Humanista' defiende que el ocio debe ser:",
    correcta: "Una oportunidad para el crecimiento personal, la libertad y la vivencia de valores éticos.",
    incorrectas: [
      "Una herramienta para que el ser humano sea una máquina de trabajo más eficiente.",
      "Un tiempo dedicado exclusivamente al consumo de productos electrónicos caros."
    ]
  },
  {
    enunciado: "En un proyecto de 'Recreo Activo', la función de la Educación Física es:",
    correcta: "Dinamizar y ofrecer recursos motrices lúdicos para que el tiempo de descanso sea físicamente activo e inclusivo.",
    incorrectas: [
      "Obligar a todos los alumnos a correr mientras se comen el bocadillo.",
      "Prohibir que los alumnos hablen durante el recreo para que se centren en el ejercicio."
    ]
  },
  {
    enunciado: "La 'Inclusión' en la recreación deportiva se garantiza mediante:",
    correcta: "La adaptación de las actividades para que cualquier persona, independientemente de su nivel, encuentre un reto a su medida.",
    incorrectas: [
      "Hacer que los alumnos con discapacidad miren cómo juegan los demás desde un banco.",
      "Darle la victoria siempre al alumno que más se queja para evitar conflictos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Compensación' como función de la recreación laboral?",
    correcta: "Equilibrar el desgaste físico o psicológico del trabajo mediante actividades opuestas (ej. ejercicio físico para administrativos).",
    incorrectas: [
      "Pagar dinero extra a los trabajadores que deciden ir al gimnasio después del trabajo.",
      "Hacer que el trabajo sea tan divertido que no sea necesario tener tiempo libre."
    ]
  },
  {
    enunciado: "El 'Vandalismo' en los espacios recreativos públicos se combate didácticamente mediante:",
    correcta: "El fomento del sentido de pertenencia, la responsabilidad ciudadana y el valor de los bienes comunes.",
    incorrectas: [
      "La colocación de vallas electrificadas alrededor de todas las pistas de barrio.",
      "Prohibir la entrada a cualquier persona menor de 30 años en los parques públicos."
    ]
  },
  {
    enunciado: "En la LOMLOE, la recreación contribuye al 'Perfil de Salida' al promover:",
    correcta: "Estilos de vida saludables y la gestión crítica del tiempo de ocio.",
    incorrectas: [
      "Que todos los alumnos trabajen en hoteles de la costa como animadores.",
      "La capacidad de ganar todas las apuestas deportivas en el tiempo libre."
    ]
  },
  {
    enunciado: "Los 'Juegos Cooperativos' en recreación tienen como objetivo:",
    correcta: "Superar un reto común donde la victoria es compartida y nadie queda excluido.",
    incorrectas: [
      "Engañar al compañero para que realice todo el esfuerzo físico por nosotros.",
      "Que solo una persona gane pero que los demás deban aplaudirle obligatoriamente."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Naturaleza' como espacio recreativo?",
    correcta: "Ofrece un entorno de incertidumbre ambiental que enriquece la competencia motriz y la conciencia ecológica.",
    incorrectas: [
      "Es el lugar donde hay más oxígeno puro y por eso no es necesario calentar.",
      "No tiene importancia; es mejor hacer recreación en un pabellón cerrado con luz artificial."
    ]
  },
  {
    enunciado: "La 'Familiarización' con el tiempo libre en Secundaria busca que el alumno:",
    correcta: "Identifique las instalaciones y recursos de su municipio para la práctica física autónoma.",
    incorrectas: [
      "Sepa el nombre de todos los dueños de los gimnasios privados de su barrio.",
      "Aprenda a no hacer nada durante 5 horas seguidas para descansar el cerebro."
    ]
  },
  {
    enunciado: "El concepto de 'Flow' (Flujo) de Csikszentmihalyi en la recreación ocurre cuando:",
    correcta: "Existe un equilibrio perfecto entre la dificultad del reto y la habilidad de la persona, perdiendo la noción del tiempo.",
    incorrectas: [
      "El alumno se aburre profundamente porque la actividad es demasiado fácil.",
      "El alumno siente pánico porque la actividad es extremadamente peligrosa."
    ]
  },
  {
    enunciado: "Los 'Juegos Sensoriales' en recreación son útiles para:",
    correcta: "Desarrollar la percepción, el esquema corporal y la atención en un contexto relajado.",
    incorrectas: [
      "Hacer que los alumnos se queden dormidos en mitad de la clase de EF.",
      "Sustituir la comida por la visualización de imágenes de alimentos saludables."
    ]
  },
  {
    enunciado: "La 'Animación Sociodeportiva' se define como:",
    correcta: "Un conjunto de técnicas destinadas a promover la participación activa de los ciudadanos en la práctica física lúdica.",
    incorrectas: [
      "Gritar con un megáfono a los deportistas profesionales mientras compiten.",
      "Dibujar dibujos animados que traten sobre temas de anatomía y fisiología."
    ]
  },
  {
    enunciado: "¿Qué relación hay entre 'Consumismo' y recreación en la actualidad?",
    correcta: "Existe un riesgo de mercantilización del ocio, donde se valora más el equipamiento que la propia experiencia motriz.",
    incorrectas: [
      "El consumismo obliga a que los músculos crezcan más rápido para poder usar la ropa nueva.",
      "No hay relación; el ocio es totalmente gratuito en todas sus formas."
    ]
  },
  {
    enunciado: "La 'Recreación Inclusiva' según el DUA (Diseño Universal de Aprendizaje) propone:",
    correcta: "Ofrecer múltiples formas de participación para que no sea necesaria una adaptación 'especial' posterior.",
    incorrectas: [
      "Que los alumnos con discapacidad tengan su propio recreo aparte para no ser molestados.",
      "Eliminar el movimiento físico de la clase para que nadie se sienta diferente."
    ]
  },
  {
    enunciado: "Un proyecto de 'Ocio Nocturno Saludable' desde el área de EF busca:",
    correcta: "Ofrecer alternativas de ocio activo frente al consumo de alcohol u otras sustancias en adolescentes.",
    incorrectas: [
      "Que los alumnos no duerman por la noche para que estén más cansados en el instituto.",
      "Entrenar para ser portero de discoteca mediante ejercicios de fuerza máxima."
    ]
  },
  {
    enunciado: "El 'Ocio Digital' (videojuegos activos/exergames) en EF se utiliza para:",
    correcta: "Motivar a los alumnos sedentarios mediante la gamificación y el uso de la tecnología.",
    incorrectas: [
      "Sustituir el gimnasio por una sala con sofás y pantallas de 80 pulgadas.",
      "Hacer que los alumnos dejen de hablar entre ellos para que se centren en la pantalla."
    ]
  },
  {
    enunciado: "La 'Evaluación' en el bloque de recreación debe centrarse en:",
    correcta: "El grado de implicación, la capacidad de organización y la vivencia personal de la actividad.",
    incorrectas: [
      "La toma de tiempos en carreras de 50 metros lisos de forma cronometrada.",
      "El número de veces que el alumno ha sonreído durante la clase, medido por una app."
    ]
  },
  {
    enunciado: "El fin último de la recreación en el currículo de Secundaria es:",
    correcta: "La formación de ciudadanos autónomos capaces de disfrutar de un ocio activo, saludable y crítico.",
    incorrectas: [
      "Producir animadores para cruceros de lujo y hoteles de vacaciones.",
      "Que ningún alumno tenga nunca ni un solo minuto libre para no pensar."
    ]
  }
];