// -33-el-deporte-como-fenomeno-social.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué autor define el deporte moderno como una 'situación motriz de competición institucionalizada', diferenciándolo del juego por la presencia de una estructura federativa?",
    correcta: "Pierre Parlebas.",
    incorrectas: [
      "José María Cagigal.",
      "Roger Caillois."
    ]
  },
  {
    enunciado: "En la sociología del deporte, el proceso de 'deportivización' descrito por Norbert Elias se asocia con:",
    correcta: "El control de la violencia y la reglamentación estricta de las conductas en el marco del proceso civilizador.",
    incorrectas: [
      "La expansión masiva de los gimnasios comerciales en las zonas urbanas.",
      "La eliminación de cualquier componente lúdico en las clases de Educación Física."
    ]
  },
  {
    enunciado: "Según el análisis de José María Cagigal, ¿cuáles son las dos vertientes fundamentales del fenómeno deportivo?",
    correcta: "Deporte-espectáculo y Deporte-praxis (o deporte para todos).",
    incorrectas: [
      "Deporte federado y Deporte escolar únicamente.",
      "Deporte profesional y Deporte olímpico de alto rendimiento."
    ]
  },
  {
    enunciado: "¿Qué característica define la 'institucionalización' del deporte moderno?",
    correcta: "La existencia de organismos rectores (federaciones) que unifican reglas, calendarios y homologan marcas a nivel global.",
    incorrectas: [
      "La práctica espontánea de actividad física en parques y entornos naturales.",
      "La enseñanza de habilidades motrices básicas sin componente competitivo."
    ]
  },
  {
    enunciado: "La 'Carta Europea del Deporte' (1992) define el deporte como:",
    correcta: "Todas las formas de actividades físicas que tienen por objeto la expresión o la mejora de la condición física y psíquica y el desarrollo de las relaciones sociales.",
    incorrectas: [
      "Exclusivamente las disciplinas presentes en el programa oficial de los Juegos Olímpicos.",
      "Aquella actividad física que requiere de un implemento o móvil para su ejecución."
    ]
  },
  {
    enunciado: "Desde una perspectiva sociológica, la 'mercantilización' del deporte se manifiesta en:",
    correcta: "La transformación del evento deportivo en un producto de consumo supeditado a los intereses de los medios de comunicación y patrocinadores.",
    incorrectas: [
      "El aumento del número de alumnos que compran zapatillas deportivas de marca.",
      "La obligatoriedad de pagar cuotas en los clubes deportivos municipales."
    ]
  },
  {
    enunciado: "El concepto de 'Deporte para Todos' surge como una respuesta social para:",
    correcta: "Democratizar la práctica físico-deportiva, priorizando la salud, la recreación y la integración sobre el rendimiento.",
    incorrectas: [
      "Detectar talentos deportivos en edades tempranas mediante pruebas físicas masivas.",
      "Unificar a todos los deportistas profesionales en un solo sindicato mundial."
    ]
  },
  {
    enunciado: "En la LOMLOE, el deporte escolar debe ser abordado principalmente como:",
    correcta: "Un medio educativo para el desarrollo de competencias personales, sociales y hábitos de vida saludable.",
    incorrectas: [
      "Una plataforma de selección para el deporte de alta competición.",
      "Una actividad centrada exclusivamente en el aprendizaje de reglamentos técnicos federativos."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Fair Play' (Juego Limpio) en el marco sociopedagógico?",
    correcta: "La aceptación ética de las reglas y el respeto al adversario, incluso en situaciones de máxima tensión competitiva.",
    incorrectas: [
      "La capacidad de ganar un partido sin cometer ninguna falta técnica reglamentaria.",
      "El saludo protocolario entre capitanes antes de iniciar un encuentro oficial."
    ]
  },
  {
    enunciado: "El deporte como 'transmisor de valores' es un concepto cuestionado por algunos sociólogos (como Brohm), quienes argumentan que:",
    correcta: "El deporte competitivo reproduce las desigualdades, el autoritarismo y la alienación del sistema capitalista.",
    incorrectas: [
      "El deporte es la única actividad humana capaz de erradicar la violencia de forma natural.",
      "Los valores del deporte son inamovibles y siempre positivos independientemente del contexto."
    ]
  },
  {
    enunciado: "La influencia de los medios de comunicación en el deporte ha provocado cambios en el reglamento para:",
    correcta: "Aumentar la espectacularidad y ajustarse a los tiempos de las pausas publicitarias (ej. tie-break en tenis).",
    incorrectas: [
      "Mejorar la salud a largo plazo de los deportistas profesionales.",
      "Reducir el número de árbitros necesarios para dirigir un encuentro."
    ]
  },
  {
    enunciado: "¿Qué función social cumple el deporte como 'mecanismo de integración'?",
    correcta: "Favorece la cohesión social y la inclusión de colectivos en riesgo de exclusión mediante un lenguaje motriz común.",
    incorrectas: [
      "Permite separar a los individuos según su capacidad económica para acceder a instalaciones.",
      "Establece jerarquías inamovibles basadas en el éxito deportivo personal."
    ]
  },
  {
    enunciado: "El fenómeno del 'Hooliganismo' se analiza sociológicamente como:",
    correcta: "Una manifestación de subculturas violentas que utilizan el entorno deportivo como catalizador de conflictos sociales y de identidad.",
    incorrectas: [
      "Una falta de técnica táctica por parte de los jugadores en el campo.",
      "La consecuencia directa de no haber realizado un calentamiento psicológico adecuado."
    ]
  },
  {
    enunciado: "En la clasificación de los juegos y deportes de Roger Caillois, la categoría 'Agon' se refiere a:",
    correcta: "Actividades basadas en la competición, el esfuerzo y la demostración de superioridad bajo reglas.",
    incorrectas: [
      "Actividades basadas en el azar y la fortuna (Alea).",
      "Actividades basadas en el vértigo y la pérdida de control sensorial (Ilinx)."
    ]
  },
  {
    enunciado: "La 'globalización' del deporte ha facilitado:",
    correcta: "La difusión masiva de modalidades deportivas y la estandarización de las formas de consumo y equipamiento.",
    incorrectas: [
      "La desaparición total de los juegos y deportes tradicionales locales.",
      "Que todos los países del mundo tengan el mismo número de medallas olímpicas."
    ]
  },
  {
    enunciado: "El papel de la mujer en el deporte ha evolucionado socialmente hacia:",
    correcta: "Una progresiva profesionalización y visibilidad, aunque persisten brechas salariales y techos de cristal en la gestión.",
    incorrectas: [
      "La prohibición de participar en pruebas de resistencia para proteger su fisiología.",
      "La creación de deportes exclusivos donde los hombres no pueden participar bajo ninguna circunstancia."
    ]
  },
  {
    enunciado: "En el contexto de la Educación Física, el 'deporte de invasión' es aquel donde la esencia táctica es:",
    correcta: "Alcanzar la meta contraria o introducir un móvil en ella dentro del espacio del oponente.",
    incorrectas: [
      "Lanzar un objeto lo más lejos posible sin que el adversario lo toque.",
      "Realizar coreografías grupales sin interacción directa con el rival."
    ]
  },
  {
    enunciado: "El doping se considera una desviación social del deporte profesional causada por:",
    correcta: "La presión extrema por el rendimiento y la recompensa económica inmediata.",
    incorrectas: [
      "La falta de vitaminas en la dieta estándar de los deportistas.",
      "Un error en el diseño de las instalaciones deportivas oficiales."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el 'deporte tradicional' en el currículo de Secundaria?",
    correcta: "Preservar el patrimonio cultural y motriz de una región frente a la hegemonía de los deportes de masas.",
    incorrectas: [
      "Entrenar a los alumnos para que ganen campeonatos de videojuegos retro.",
      "Sustituir a la condición física como único contenido evaluable."
    ]
  },
  {
    enunciado: "La 'pirámide deportiva' es un modelo que sugiere que:",
    correcta: "Una base amplia de practicantes recreativos sustenta la cúspide del alto rendimiento.",
    incorrectas: [
      "Los deportistas deben entrenar siempre en forma triangular para mejorar la aerodinámica.",
      "El deporte solo debe practicarse en edificios con forma de pirámide."
    ]
  },
  {
    enunciado: "El concepto de 'agonística' se relaciona con:",
    correcta: "El espíritu de lucha y combatividad inherente a la competición deportiva.",
    incorrectas: [
      "El estudio de los músculos en estado de agonía por falta de oxígeno.",
      "La capacidad de correr sin sentir dolor en las articulaciones."
    ]
  },
  {
    enunciado: "¿Qué función cumple el deporte en la 'utilización del ocio' en la sociedad actual?",
    correcta: "Ofrecer una alternativa saludable y estructurada frente al sedentarismo y el ocio pasivo.",
    incorrectas: [
      "Obligar a las personas a entrenar durante su tiempo libre para producir más en el trabajo.",
      "Eliminar la necesidad de dormir durante los fines de semana."
    ]
  },
  {
    enunciado: "El deporte adaptado es aquel que:",
    correcta: "Ha sido modificado en sus reglas o materiales para permitir la participación de personas con discapacidad.",
    incorrectas: [
      "Se practica solo en el medio natural sin ningún tipo de tecnología.",
      "Solo pueden practicarlo personas con un nivel de agilidad superior a la media."
    ]
  },
  {
    enunciado: "La 'espectacularización' del deporte puede influir negativamente en los adolescentes al:",
    correcta: "Fomentar modelos de éxito basados únicamente en la victoria y la riqueza, ignorando el proceso y el esfuerzo.",
    incorrectas: [
      "Hacer que todos quieran ser profesores de Educación Física.",
      "Mejorar su capacidad de visión en 4K."
    ]
  },
  {
    enunciado: "¿Qué es el 'Comité Olímpico Internacional' (COI) en términos sociológicos?",
    correcta: "Una organización privada internacional que ejerce la máxima autoridad sobre el Movimiento Olímpico.",
    incorrectas: [
      "Un sindicato de trabajadores de la construcción de estadios.",
      "Una agencia gubernamental dependiente de las Naciones Unidas."
    ]
  },
  {
    enunciado: "El deporte como 'religión laica' es una metáfora que alude a:",
    correcta: "La presencia de rituales, mitos, héroes y una fe compartida por las masas de seguidores.",
    incorrectas: [
      "La obligatoriedad de rezar antes de cada partido de fútbol.",
      "La construcción de catedrales dentro de los polideportivos municipales."
    ]
  },
  {
    enunciado: "En la LOMLOE, el 'sentido socioafectivo' de la Educación Física incluye:",
    correcta: "La gestión de los conflictos, el trabajo en equipo y la empatía en situaciones competitivas.",
    incorrectas: [
      "El estudio de la historia de las guerras a través de los deportes de combate.",
      "La clasificación de los alumnos según su nivel de popularidad social."
    ]
  },
  {
    enunciado: "La 'identidad nacional' se refuerza a través del deporte mediante:",
    correcta: "La representación de selecciones nacionales que generan un sentimiento de pertenencia y orgullo colectivo.",
    incorrectas: [
      "La prohibición de que deportistas extranjeros jueguen en ligas locales.",
      "El uso exclusivo de banderas en lugar de balones en los entrenamientos."
    ]
  },
  {
    enunciado: "El término 'Citius, Altius, Fortius' refleja el espíritu de:",
    correcta: "Superación constante y rendimiento del olimpismo moderno.",
    incorrectas: [
      "Relajación, calma y meditación del yoga clásico.",
      "Solidaridad y cooperación de los juegos cooperativos."
    ]
  },
  {
    enunciado: "¿Qué impacto tiene la 'tecnificación' en el deporte social?",
    correcta: "Mejora el rendimiento y la seguridad, pero puede crear brechas de acceso por el coste del material.",
    incorrectas: [
      "Hace que los deportistas se conviertan en robots sin sentimientos.",
      "Elimina la necesidad de realizar esfuerzo físico para ganar."
    ]
  },
  {
    enunciado: "La 'estratificación social' en el deporte analiza:",
    correcta: "Cómo el nivel socioeconómico condiciona el acceso a determinadas modalidades deportivas (ej. polo vs fútbol).",
    incorrectas: [
      "El número de capas de ropa que un deportista debe llevar en invierno.",
      "La profundidad de las capas de la piel en relación con el sudor."
    ]
  },
  {
    enunciado: "El 'Turismo Deportivo' es una manifestación de:",
    correcta: "La interconexión entre el ocio, el consumo y la práctica deportiva en diferentes territorios.",
    incorrectas: [
      "Correr por el aeropuerto para no perder un avión.",
      "Visitar museos de arte mientras se hace marcha atlética."
    ]
  },
  {
    enunciado: "En Educación Física, el deporte debe desvincularse del 'sexismo' mediante:",
    correcta: "La promoción de grupos mixtos y la visibilización de referentes deportivos femeninos y masculinos por igual.",
    incorrectas: [
      "La realización de pruebas físicas diferentes para chicos y chicas basadas en prejuicios.",
      "La prohibición de que los chicos practiquen danza o expresión corporal."
    ]
  },
  {
    enunciado: "La 'Violencia Simbólica' en el deporte se refiere a:",
    correcta: "La imposición de normas y jerarquías que discriminan sutilmente a ciertos grupos.",
    incorrectas: [
      "Un golpe físico directo dado con un balón de espuma.",
      "El uso de uniformes de colores muy llamativos."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'árbitro' como figura social?",
    correcta: "Garante de la justicia, el orden y el cumplimiento del reglamento para la igualdad de oportunidades.",
    incorrectas: [
      "Un espectador que tiene derecho a gritar más que los demás.",
      "Un jugador extra que ayuda al equipo que va perdiendo."
    ]
  },
  {
    enunciado: "El 'sedentarismo' se considera el reverso negativo del fenómeno deportivo, provocando:",
    correcta: "Un aumento de las enfermedades no transmisibles y una carga económica para los sistemas de salud.",
    incorrectas: [
      "Un aumento de la inteligencia abstracta por falta de movimiento corporal.",
      "La desaparición total de los músculos en menos de una semana."
    ]
  },
  {
    enunciado: "La 'Pedagogía del Deporte' busca transformar la competición en:",
    correcta: "Un proceso de aprendizaje donde el resultado es secundario frente a la vivencia y la mejora personal.",
    incorrectas: [
      "Un examen eliminatorio donde solo los mejores obtienen el título de Secundaria.",
      "Una actividad donde no hay reglas para que nadie se sienta presionado."
    ]
  },
  {
    enunciado: "¿Qué es el 'patrocinio' (sponsorship) deportivo?",
    correcta: "Un acuerdo comercial donde una marca financia a un deportista o evento a cambio de publicidad.",
    incorrectas: [
      "El acto de que un padre acompañe a su hijo al entrenamiento.",
      "La donación anónima de material deportivo a un colegio."
    ]
  },
  {
    enunciado: "La 'democratización' del deporte implica:",
    correcta: "Garantizar el acceso universal a la práctica físico-deportiva sin discriminación de ningún tipo.",
    incorrectas: [
      "Que todos los jugadores de un equipo deben votar qué táctica usar en cada jugada.",
      "Que el ganador de una competición se elige por sorteo público."
    ]
  },
  {
    enunciado: "En la LOMLOE, el deporte contribuye a la 'ciudadanía democrática' al:",
    correcta: "Fomentar el respeto a las normas comunes, el diálogo y la resolución pacífica de conflictos.",
    incorrectas: [
      "Enseñar a los alumnos a ganar siempre por encima de cualquier consideración ética.",
      "Hacer que todos los alumnos piensen exactamente igual sobre el deporte profesional."
    ]
  }
];