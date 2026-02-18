// 65-municipio-y-actividad-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el marco legal que otorga a los municipios competencias en materia de instalaciones y actividades deportivas en España?",
    correcta: "La Ley de Bases del Régimen Local (LBRL).",
    incorrectas: [
      "El Reglamento General de Centros Educativos de Secundaria.",
      "La Ley Orgánica de Universidades y Centros de Investigación."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Deporte para Todos' en el ámbito de la gestión municipal?",
    correcta: "Una filosofía de fomento de la actividad física orientada a la salud, la integración y el ocio, sin barreras de edad o condición.",
    incorrectas: [
      "La selección de los mejores deportistas locales para su participación en competiciones nacionales.",
      "La obligación de que todos los ciudadanos practiquen fútbol al menos una vez por semana."
    ]
  },
  {
    enunciado: "En la planificación municipal, los 'Planes Locales de Instalaciones Deportivas' (PLID) sirven para:",
    correcta: "Analizar las necesidades de la población y ordenar la construcción y mejora de espacios deportivos públicos.",
    incorrectas: [
      "Vigilar que los alumnos de los institutos no utilicen las pistas públicas sin pagar.",
      "Establecer el precio de las entradas a los estadios de fútbol profesional de la capital."
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Patronato Municipal de Deportes' o Servicio Municipal de Deportes?",
    correcta: "Es el organismo autónomo o área encargada de gestionar los recursos, instalaciones y programas deportivos locales.",
    incorrectas: [
      "Es una asociación de padres y madres de alumnos que se encarga de comprar el material de Educación Física.",
      "Es el tribunal encargado de sancionar a los deportistas que cometen infracciones de dopaje."
    ]
  },
  {
    enunciado: "La colaboración entre el centro escolar y el municipio en la LOMLOE favorece:",
    correcta: "La apertura del centro al entorno y el uso compartido de recursos para fomentar hábitos de vida activos.",
    incorrectas: [
      "Que los profesores de Educación Física sean sustituidos por monitores de gimnasio municipales.",
      "La privatización de los pabellones escolares para su uso exclusivamente comercial."
    ]
  },
  {
    enunciado: "Un 'Recurso No Convencional' del municipio para la actividad física sería:",
    correcta: "Parques, zonas peatonales, carriles bici o escaleras urbanas aprovechadas didácticamente.",
    incorrectas: [
      "Pabellones polideportivos con gradas telescópicas y suelo de parqué homologado.",
      "Piscinas olímpicas cubiertas con sistemas de climatización solar."
    ]
  },
  {
    enunciado: "¿Qué es la 'Animación Deportiva' en el contexto local?",
    correcta: "El conjunto de estrategias para dinamizar a la población e incentivar su participación en programas físico-recreativos.",
    incorrectas: [
      "La realización de dibujos animados sobre temas deportivos para la televisión local.",
      "Gritar con megáfonos durante los partidos de los equipos infantiles del municipio."
    ]
  },
  {
    enunciado: "Las 'Escuelas Deportivas Municipales' tienen como objetivo prioritario:",
    correcta: "La formación de base y el aprendizaje de diferentes disciplinas en horario extraescolar.",
    incorrectas: [
      "Sustituir las clases de Educación Física del currículo oficial obligatorio.",
      "Preparar a los niños para que firmen contratos profesionales antes de los 12 años."
    ]
  },
  {
    enunciado: "Un criterio de 'Sostenibilidad' en la gestión deportiva municipal es:",
    correcta: "El mantenimiento eficiente de las instalaciones y el fomento de actividades en el medio natural respetuosas.",
    incorrectas: [
      "El uso masivo de plásticos de un solo uso en todos los eventos populares.",
      "La construcción de grandes estadios que solo se utilizan una vez al año."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el 'Inventario de Recursos Deportivos' del municipio para el docente de EF?",
    correcta: "Permite conocer las posibilidades del entorno para enriquecer la programación didáctica fuera del centro.",
    incorrectas: [
      "Sirve para que el profesor pueda vender el material sobrante en mercados de segunda mano.",
      "Es una lista de los alumnos del instituto que están federados en clubes locales."
    ]
  },
  {
    enunciado: "En el municipio, las 'Barreras de Acceso' a la actividad física pueden ser:",
    correcta: "Económicas, arquitectónicas, geográficas o socioculturales.",
    incorrectas: [
      "La falta de conexión Wi-Fi en las pistas de atletismo exteriores.",
      "El color de las camisetas de los monitores de natación de la piscina pública."
    ]
  },
  {
    enunciado: "El 'Turismo Activo' local consiste en:",
    correcta: "El aprovechamiento de los recursos naturales y culturales del municipio para ofrecer experiencias de ocio físico.",
    incorrectas: [
      "Viajar a otros municipios exclusivamente para ver partidos de fútbol por televisión.",
      "Quedarse en el hotel del municipio sin realizar ningún tipo de movimiento."
    ]
  },
  {
    enunciado: "La figura del 'Técnico Deportivo Municipal' tiene entre sus funciones:",
    correcta: "Diseñar, coordinar y supervisar los programas deportivos dirigidos a los diferentes sectores de la población.",
    incorrectas: [
      "Arbitrar todos los partidos de los juegos escolares de forma voluntaria y gratuita.",
      "Limpiar personalmente todas las instalaciones del municipio cada noche."
    ]
  },
  {
    enunciado: "¿Qué es un 'Convenio de Colaboración' en el ámbito deportivo local?",
    correcta: "Un acuerdo formal entre instituciones (ej. Ayuntamiento e Instituto) para compartir espacios o programas.",
    incorrectas: [
      "Un contrato de compraventa de balones entre el centro y una tienda de deportes local.",
      "Un examen que los alumnos deben superar para poder usar las instalaciones públicas."
    ]
  },
  {
    enunciado: "La 'Agenda 21' y el deporte municipal se relacionan mediante:",
    correcta: "La promoción de un desarrollo urbano que integre espacios para la movilidad activa y el deporte sostenible.",
    incorrectas: [
      "La obligatoriedad de que todas las competiciones duren exactamente 21 minutos.",
      "El uso de una pelota de cuero de 21 centímetros de diámetro en todos los juegos."
    ]
  },
  {
    enunciado: "En la LOMLOE, el uso de 'Vías Verdes' o carriles bici municipales permite trabajar:",
    correcta: "La competencia en movilidad segura, sostenible y saludable.",
    incorrectas: [
      "La velocidad máxima de las bicicletas motorizadas por zonas peatonales.",
      "La resistencia de los neumáticos de caucho ante el calor del asfalto."
    ]
  },
  {
    enunciado: "¿Qué son los 'Juegos Escolares Municipales'?",
    correcta: "Competiciones y encuentros deportivos entre centros educativos organizados por la administración local.",
    incorrectas: [
      "Exámenes de Educación Física que se realizan en la plaza del ayuntamiento.",
      "Juegos de mesa sobre temática deportiva que se reparten por las clases."
    ]
  },
  {
    enunciado: "La 'Inclusión' en el deporte municipal se garantiza mediante:",
    correcta: "Programas de deporte adaptado y la eliminación de barreras en las instalaciones públicas.",
    incorrectas: [
      "La creación de gimnasios exclusivos donde solo puedan entrar personas con discapacidad.",
      "Hacer que todos los ciudadanos paguen la misma cuota aunque no utilicen los servicios."
    ]
  },
  {
    enunciado: "Un impacto positivo del deporte en el municipio es:",
    correcta: "La mejora de la cohesión social, la salud pública y la dinamización económica local.",
    incorrectas: [
      "El aumento del ruido nocturno debido a los gritos de los entrenadores.",
      "La desaparición de los espacios verdes en favor de pistas de cemento."
    ]
  },
  {
    enunciado: "¿Qué es el 'Asociacionismo Deportivo' local?",
    correcta: "El tejido de clubes y entidades ciudadanas que organizan y promueven la práctica deportiva.",
    incorrectas: [
      "La obligación de los alumnos de asociarse en parejas para realizar los ejercicios de clase.",
      "Un sindicato de jugadores profesionales que solo actúa dentro del municipio."
    ]
  },
  {
    enunciado: "La 'Gestión Indirecta' de una instalación municipal ocurre cuando:",
    correcta: "El Ayuntamiento cede la explotación y gestión a una empresa privada o entidad externa.",
    incorrectas: [
      "El alcalde decide quién puede entrar al pabellón mediante gestos con la mano.",
      "La instalación se gestiona sola mediante sistemas de inteligencia artificial."
    ]
  },
  {
    enunciado: "El 'Mapa de Instalaciones Deportivas' de un municipio permite analizar:",
    correcta: "El equilibrio territorial de la oferta deportiva y las posibles carencias en determinados barrios.",
    incorrectas: [
      "El color exacto de las paredes de cada gimnasio para combinarlas con la ropa.",
      "La marca de los balones que utiliza cada club del municipio."
    ]
  },
  {
    enunciado: "Una actividad de 'Orientación Urbana' organizada por el municipio busca:",
    correcta: "Dar a conocer el patrimonio local mientras se trabaja la capacidad de navegación espacial.",
    incorrectas: [
      "Que los alumnos se pierdan a propósito por las calles para que aprendan a pedir ayuda.",
      "Publicitar los comercios locales mediante balizas situadas dentro de las tiendas."
    ]
  },
  {
    enunciado: "La 'Participación Ciudadana' en el deporte local se fomenta a través de:",
    correcta: "Consejos Municipales de Deportes donde las asociaciones y ciudadanos pueden opinar.",
    incorrectas: [
      "Obligar a todos los vecinos a votar qué deporte debe ser el oficial del pueblo.",
      "Cobrar una multa a los ciudadanos que no asistan a los partidos del equipo local."
    ]
  },
  {
    enunciado: "En la planificación de eventos deportivos populares (carreras, marchas), el municipio debe asegurar:",
    correcta: "La seguridad vial, los servicios sanitarios y la cobertura de seguros necesaria.",
    incorrectas: [
      "Que todos los participantes ganen una medalla de oro real al cruzar la meta.",
      "Que no haya ningún tipo de agua para beber durante el recorrido para evitar charcos."
    ]
  },
  {
    enunciado: "La 'Actividad Física para Mayores' en el municipio tiene como fin:",
    correcta: "La prevención de la dependencia, la mejora de la movilidad y la socialización del colectivo.",
    incorrectas: [
      "Preparar a las personas de 80 años para que ganen el maratón de Nueva York.",
      "Obligarles a realizar ejercicios de fuerza máxima para que parezcan adolescentes."
    ]
  },
  {
    enunciado: "¿Qué es la 'Tasa Pública' por el uso de instalaciones deportivas?",
    correcta: "El precio establecido por el Ayuntamiento que los usuarios deben pagar por acceder a los servicios.",
    incorrectas: [
      "Un impuesto que se cobra a los alumnos por sudar dentro del gimnasio escolar.",
      "La cantidad de balones que un club debe regalar al municipio cada año."
    ]
  },
  {
    enunciado: "El concepto de 'Ciudad Activa' se refiere a aquella que:",
    correcta: "Diseña su urbanismo para facilitar que el ciudadano se mueva a pie o en bici de forma cotidiana.",
    incorrectas: [
      "Tiene luces encendidas las 24 horas del día para que la gente no duerma.",
      "Está construida sobre un volcán en activo para que el suelo esté siempre caliente."
    ]
  },
  {
    enunciado: "En la LOMLOE, los proyectos de 'Aprendizaje-Servicio' (ApS) en el municipio implican:",
    correcta: "Que los alumnos realicen una actividad física que suponga un beneficio real para la comunidad local.",
    incorrectas: [
      "Que los alumnos trabajen como camareros en las fiestas del municipio para ganar dinero.",
      "Que el profesor de Educación Física sea el encargado de limpiar las calles del pueblo."
    ]
  },
  {
    enunciado: "La 'Multifuncionalidad' de los espacios urbanos permite:",
    correcta: "Que una plaza o parque pueda ser zona de descanso y a la vez espacio para el ejercicio físico.",
    incorrectas: [
      "Que los coches puedan circular por dentro de los pabellones polideportivos.",
      "Que los alumnos puedan comer, dormir y estudiar dentro de la piscina municipal."
    ]
  },
  {
    enunciado: "¿Qué es el 'Ventanilla Única' en la gestión deportiva local?",
    correcta: "Un sistema simplificado para que clubes y ciudadanos realicen todos sus trámites administrativos.",
    incorrectas: [
      "Un pequeño agujero en la pared del pabellón por donde se pasan los balones.",
      "La única ventana del gimnasio que el profesor tiene permiso para abrir."
    ]
  },
  {
    enunciado: "El 'Deporte Federado' en el municipio se apoya a menudo mediante:",
    correcta: "Subvenciones públicas y la cesión de uso de las instalaciones municipales.",
    incorrectas: [
      "La compra de los jugadores más caros del mundo con el dinero de los impuestos.",
      "La prohibición de que jueguen personas que no hayan nacido en el municipio."
    ]
  },
  {
    enunciado: "La 'Evaluación del Impacto' de un programa deportivo municipal mide:",
    correcta: "El grado de cumplimiento de los objetivos de salud, participación y satisfacción de los usuarios.",
    incorrectas: [
      "La fuerza con la que los balones golpean las paredes de la instalación pública.",
      "El número de veces que el alcalde sale en las fotos de los eventos deportivos."
    ]
  },
  {
    enunciado: "Un recurso del municipio para el 'Senderismo' escolar es:",
    correcta: "La red de senderos homologados (PR o GR) que atraviesan el término municipal.",
    incorrectas: [
      "La cinta de correr automática que hay en el despacho del concejal de deportes.",
      "Los pasillos del ayuntamiento utilizados para caminar rápido entre oficinas."
    ]
  },
  {
    enunciado: "La 'Comunicación' de la oferta deportiva municipal debe ser:",
    correcta: "Accesible, multicanal (web, redes, cartelería) y dirigida a todos los sectores sociales.",
    incorrectas: [
      "Un secreto que solo conocen los trabajadores del ayuntamiento.",
      "Transmitida únicamente mediante señales de humo desde la torre del reloj."
    ]
  },
  {
    enunciado: "En la gestión municipal, el 'Aforo' es:",
    correcta: "El número máximo de personas que pueden permanecer legalmente en una instalación por seguridad.",
    incorrectas: [
      "La cantidad de dinero que se recauda en un día de alquiler de pistas.",
      "El hueco que se hace en el suelo para saltar con pértiga."
    ]
  },
  {
    enunciado: "¿Qué papel juegan las 'Empresas de Servicios Deportivos' en el municipio?",
    correcta: "Aportan personal técnico cualificado y programas especializados que complementan la oferta pública.",
    incorrectas: [
      "Se encargan de prohibir el acceso a los ciudadanos que no llevan ropa de marca.",
      "Fabrican todos los balones del mundo dentro de las oficinas del ayuntamiento."
    ]
  },
  {
    enunciado: "La 'Educación Vial' en el municipio se trabaja en EF mediante:",
    correcta: "El uso responsable de la bicicleta y el patinete en el entorno urbano real.",
    incorrectas: [
      "Aprender a conducir camiones de gran tonelaje por el patio del instituto.",
      "Correr por el centro de la carretera para ver quién es más rápido que los coches."
    ]
  },
  {
    enunciado: "Un indicador de 'Éxito' de una política deportiva municipal es:",
    correcta: "El aumento del porcentaje de población que cumple con las recomendaciones de actividad física de la OMS.",
    incorrectas: [
      "El número de balones que se han pinchado durante el año escolar.",
      "La cantidad de helados que se venden en la puerta del polideportivo."
    ]
  },
  {
    enunciado: "El fin último de la coordinación entre municipio y Educación Física es:",
    correcta: "Crear una comunidad activa donde el ejercicio físico sea un derecho y un hábito accesible para todos.",
    incorrectas: [
      "Conseguir que el municipio sea el que más trofeos de plástico tenga en sus vitrinas.",
      "Eliminar el tiempo libre de los ciudadanos para que solo se dediquen a entrenar."
    ]
  }
];