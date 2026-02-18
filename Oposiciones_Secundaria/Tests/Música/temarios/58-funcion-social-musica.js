// 58-funcion-social-musica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué disciplina estudia la relación entre la música y la sociedad, analizando cómo se influyen mutuamente?",
    correcta: "Sociología de la música.",
    incorrectas: [
      "Etnomusicología pura.",
      "Acústica musical."
    ]
  },
  {
    enunciado: "En las sociedades primitivas, la función primordial de la música solía ser:",
    correcta: "Mágica, ritual y vinculada a la cohesión del grupo.",
    incorrectas: [
      "Puramente estética y de entretenimiento individual.",
      "Comercial para la venta de grabaciones."
    ]
  },
  {
    enunciado: "¿Qué filósofo griego defendía la 'Teoría del Ethos', afirmando que la música puede influir en el carácter moral de las personas?",
    correcta: "Platón.",
    incorrectas: [
      "Pitágoras.",
      "Arquímedes."
    ]
  },
  {
    enunciado: "Durante la Edad Media, la principal función social de la música culta era:",
    correcta: "Litúrgica y religiosa, sirviendo como vehículo de oración y adoctrinamiento.",
    incorrectas: [
      "De crítica política contra el feudalismo.",
      "Exclusivamente para el baile en las cortes."
    ]
  },
  {
    enunciado: "¿Cómo cambió el estatus social del músico durante el Renacimiento?",
    correcta: "Comenzó a ser valorado como un artista individual y profesional al servicio de cortes y capillas.",
    incorrectas: [
      "Pasó a ser considerado un esclavo sin derechos.",
      "Se convirtió en la figura política más poderosa de las ciudades."
    ]
  },
  {
    enunciado: "En el Barroco, la música funcionaba frecuentemente como un símbolo de:",
    correcta: "Poder y prestigio del absolutismo monárquico y de la Iglesia de la Contrarreforma.",
    incorrectas: [
      "Rebeldía juvenil contra las normas establecidas.",
      "Igualdad social entre todas las clases."
    ]
  },
  {
    enunciado: "¿Qué acontecimiento social del siglo XVIII permitió que la música dejara de ser exclusiva de la aristocracia y llegara a la burguesía?",
    correcta: "El nacimiento de los conciertos públicos con pago de entrada.",
    incorrectas: [
      "La invención del gramófono.",
      "La prohibición de la música en los palacios."
    ]
  },
  {
    enunciado: "En el Romanticismo, el músico se presenta ante la sociedad como:",
    correcta: "Un genio libre e independiente que expresa su propio mundo interior.",
    incorrectas: [
      "Un artesano anónimo que no firma sus obras.",
      "Un funcionario público que solo escribe por encargo estatal."
    ]
  },
  {
    enunciado: "¿Qué sociólogo y filósofo alemán de la Escuela de Frankfurt escribió extensamente sobre la regresión de la escucha en la cultura de masas?",
    correcta: "Theodor W. Adorno.",
    incorrectas: [
      "Max Weber.",
      "Karl Marx."
    ]
  },
  {
    enunciado: "La función 'conativa' o persuasiva de la música es aquella que busca:",
    correcta: "Provocar una respuesta o comportamiento específico en el oyente (como en la publicidad).",
    incorrectas: [
      "Describir un paisaje natural con sonidos.",
      "Explicar la teoría de la armonía mediante el canto."
    ]
  },
  {
    enunciado: "¿Qué es el 'Hilo Musical' o música ambiental (Muzak) desde una perspectiva sociológica?",
    correcta: "Una herramienta de control ambiental para mejorar la productividad o estimular el consumo.",
    incorrectas: [
      "Un género de vanguardia para ser escuchado con atención absoluta.",
      "Una técnica de afinación para pianos antiguos."
    ]
  },
  {
    enunciado: "La música como 'seña de identidad' permite a los grupos sociales:",
    correcta: "Diferenciarse de otros grupos y fortalecer el sentimiento de pertenencia.",
    incorrectas: [
      "Aprender idiomas extranjeros más rápido.",
      "Evitar el uso de instrumentos electrónicos."
    ]
  },
  {
    enunciado: "¿Qué término define el fenómeno por el cual la música se convierte en un producto industrial sujeto a leyes de mercado?",
    correcta: "Mercantilización de la música.",
    incorrectas: [
      "Inspiración artística pura.",
      "Mecenazgo aristocrático."
    ]
  },
  {
    enunciado: "Las 'Tribus Urbanas' se caracterizan frecuentemente por:",
    correcta: "Utilizar un estilo musical específico como eje central de su estética y valores.",
    incorrectas: [
      "Rechazar cualquier tipo de sonido rítmico.",
      "Vivir exclusivamente en el campo alejadas de la tecnología."
    ]
  },
  {
    enunciado: "¿Qué función cumple la música en los rituales de paso (bodas, funerales)?",
    correcta: "Solemnizar el acto y ayudar a la transición emocional de los participantes.",
    incorrectas: [
      "Distraer al público para que no presten atención al evento.",
      "Ninguna, es un elemento puramente decorativo sin significado."
    ]
  },
  {
    enunciado: "La música de protesta o reivindicativa tiene como objetivo social:",
    correcta: "Denunciar injusticias y movilizar la conciencia colectiva hacia el cambio.",
    incorrectas: [
      "Dormir a la población para que no se queje.",
      "Promocionar productos de lujo en los medios."
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo la radio en la función social de la música en el siglo XX?",
    correcta: "La democratización del acceso a la música y la creación de éxitos de alcance nacional.",
    incorrectas: [
      "La desaparición definitiva de los conciertos en directo.",
      "Hacer que la música fuera solo para gente rica."
    ]
  },
  {
    enunciado: "¿Qué es el 'Fenómeno Fan'?",
    correcta: "Una respuesta social de admiración extrema hacia un artista, generada a menudo por la industria cultural.",
    incorrectas: [
      "Un tipo de instrumento de viento de origen japonés.",
      "El estudio de la acústica en estadios de fútbol."
    ]
  },
  {
    enunciado: "La función de la música en el cine es principalmente:",
    correcta: "Subrayar la emoción de la imagen, dar continuidad narrativa y crear atmósfera.",
    incorrectas: [
      "Tapar los errores de los actores al hablar.",
      "Hacer que las películas duren el doble de tiempo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Democratización de la cultura' aplicada a la música?",
    correcta: "El proceso de hacer la música culta o de calidad accesible a toda la población.",
    incorrectas: [
      "Votar en las elecciones mediante canciones.",
      "Prohibir la música que no sea popular."
    ]
  },
  {
    enunciado: "¿Qué papel juega la música en los deportes masivos (como el fútbol)?",
    correcta: "Fomentar la unión de la afición a través de himnos y cánticos colectivos.",
    incorrectas: [
      "Ayudar a los árbitros a tomar decisiones técnicas.",
      "Sustituir el ejercicio físico por el baile."
    ]
  },
  {
    enunciado: "¿Cómo influye la globalización en la música actual?",
    correcta: "Facilita la fusión de estilos pero también puede llevar a la estandarización y pérdida de tradiciones locales.",
    incorrectas: [
      "Elimina la posibilidad de grabar música en estudios profesionales.",
      "Obliga a todos los países a usar solo un instrumento."
    ]
  },
  {
    enunciado: "El 'Mecenazgo' moderno es ejercido principalmente por:",
    correcta: "Instituciones públicas, fundaciones privadas y grandes empresas patrocinadoras.",
    incorrectas: [
      "Reyes absolutistas del siglo XXI.",
      "Músicos que se pagan todo a sí mismos sin ayuda."
    ]
  },
  {
    enunciado: "La función social de la música en los centros de trabajo busca:",
    correcta: "Mejorar el estado de ánimo de los empleados y aumentar la eficiencia.",
    incorrectas: [
      "Hacer que los trabajadores se queden dormidos.",
      "Ocultar el ruido de las conversaciones privadas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cultura de Masas'?",
    correcta: "Un conjunto de productos culturales fabricados industrialmente para un público numeroso y heterogéneo.",
    incorrectas: [
      "La música que se toca exclusivamente en las misas religiosas.",
      "Un grupo de músicos que pesan mucho físicamente."
    ]
  },
  {
    enunciado: "¿Cómo afecta el 'Streaming' a la relación social con la música?",
    correcta: "Fomenta un consumo inmediato, fragmentado y personalizado de listas de reproducción.",
    incorrectas: [
      "Hace que la gente solo escuche discos de vinilo en casa.",
      "Impide que los jóvenes conozcan artistas nuevos."
    ]
  },
  {
    enunciado: "La 'Etnomusicología' se diferencia de la sociología en que:",
    correcta: "Se centra más en el estudio de la música en su contexto cultural y tradicional (folclore).",
    incorrectas: [
      "Solo estudia música electrónica de vanguardia.",
      "No utiliza grabadoras ni cámaras para su investigación."
    ]
  },
  {
    enunciado: "¿Qué función cumple el himno nacional de un país?",
    correcta: "Representar la soberanía, la unidad y los valores de una nación.",
    incorrectas: [
      "Servir de música de fondo para las cenas de gala solamente.",
      "Enseñar la geografía del país a los extranjeros."
    ]
  },
  {
    enunciado: "La música 'funcional' es aquella que:",
    correcta: "Se diseña para cumplir un objetivo práctico más allá de la mera audición estética.",
    incorrectas: [
      "Solo funciona si se toca con instrumentos eléctricos.",
      "Es compuesta por matemáticos sin formación musical."
    ]
  },
  {
    enunciado: "¿Qué impacto social tienen los grandes festivales de música?",
    correcta: "Generan un fuerte impacto económico local y crean espacios de convivencia temporal intensiva.",
    incorrectas: [
      "Hacen que la gente deje de escuchar música el resto del año.",
      "Están prohibidos en las ciudades con más de mil habitantes."
    ]
  },
  {
    enunciado: "¿Qué es la 'Discriminación auditiva' social?",
    correcta: "La capacidad de un individuo para valorar y distinguir diferentes propuestas musicales de su entorno.",
    incorrectas: [
      "No permitir que ciertas personas escuchen la radio.",
      "Hacer que la música suene más fuerte para los ancianos."
    ]
  },
  {
    enunciado: "La música en la prehistoria se asocia frecuentemente a:",
    correcta: "El chamanismo y la comunicación con el mundo espiritual.",
    incorrectas: [
      "La creación de una industria discográfica de piedra.",
      "La competición por ver quién cantaba más alto."
    ]
  },
  {
    enunciado: "En la actualidad, la música en los centros comerciales tiene una función:",
    correcta: "De estimulación del gasto y creación de una experiencia de compra agradable.",
    incorrectas: [
      "Educativa para que los clientes aprendan solfeo.",
      "Religiosa para bendecir los productos."
    ]
  },
  {
    enunciado: "El 'Star System' musical es:",
    correcta: "Un mecanismo de la industria para promocionar a ciertos artistas como iconos sociales.",
    incorrectas: [
      "Un software para componer música sobre las estrellas del cielo.",
      "Un sistema de afinación de instrumentos de metal."
    ]
  },
  {
    enunciado: "¿Qué es la 'Identidad Sonora' de una marca (Audio Branding)?",
    correcta: "El uso de sonidos o melodías breves para que el consumidor identifique rápidamente a una empresa.",
    incorrectas: [
      "El nombre que eligen los músicos para sus grupos.",
      "El ruido que hacen las máquinas al fabricar instrumentos."
    ]
  },
  {
    enunciado: "La música en la educación obligatoria busca:",
    correcta: "El desarrollo integral de la persona, su sensibilidad estética y su capacidad crítica.",
    incorrectas: [
      "Que todos los niños se conviertan obligatoriamente en estrellas del pop.",
      "Sustituir a las clases de matemáticas por el baile."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cultura Alternativa' o Underground?",
    correcta: "Música que se desarrolla fuera de los circuitos comerciales principales y cuestiona el orden establecido.",
    incorrectas: [
      "Música que se graba en los túneles del metro exclusivamente.",
      "Un tipo de jazz que se toca muy bajo de volumen."
    ]
  },
  {
    enunciado: "La música 'terapéutica' o musicoterapia utiliza la música para:",
    correcta: "Mejorar la salud física, mental y emocional de los pacientes.",
    incorrectas: [
      "Dormir a los médicos durante las operaciones.",
      "Hacer que los hospitales parezcan salas de conciertos."
    ]
  },
  {
    enunciado: "La 'Piratería' y el intercambio de archivos afectaron a la función social del músico al:",
    correcta: "Obligarle a buscar nuevas formas de ingresos, centrándose más en el directo.",
    incorrectas: [
      "Hacer que los músicos dejaran de usar instrumentos de madera.",
      "Prohibir la venta de entradas para conciertos."
    ]
  },
  {
    enunciado: "¿Cómo se manifiesta la música como 'herramienta política'?",
    correcta: "A través del uso de canciones en mítines, campañas y como símbolo de ideologías.",
    incorrectas: [
      "Haciendo que los políticos tengan que cantar sus discursos.",
      "Sustituyendo las leyes por partituras musicales."
    ]
  }
];