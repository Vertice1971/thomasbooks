// 04-medios-de-comunicacion-de-masas-y-codigos-visuales.js
var PREGUNTAS = [
  {
    enunciado: "¿Cómo define Marshall McLuhan su tesis 'el medio es el mensaje' en el contexto de la comunicación de masas?",
    correcta: "Las características formales y estructurales del medio de comunicación tienen más impacto en la sociedad y el pensamiento que el contenido transmitido",
    incorrectas: [
      "El contenido de un mensaje debe ser siempre superior en calidad técnica al soporte que lo transporta",
      "Los medios de comunicación son herramientas neutras que no alteran la percepción del receptor"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la 'Cultura de Masas' según el análisis de la Escuela de Frankfurt (Adorno y Horkheimer)?",
    correcta: "La mercantilización del arte y la estandarización de productos culturales diseñados para el consumo pasivo y la alienación",
    incorrectas: [
      "El fomento de la individualidad y el pensamiento crítico a través de los medios audiovisuales",
      "La democratización absoluta de la alta cultura mediante el acceso gratuito a la información"
    ]
  },
  {
    enunciado: "En el análisis de la imagen publicitaria, ¿qué es la 'Función Implicativa' o conativa?",
    correcta: "Aquella que busca llamar la atención del receptor y dirigir su comportamiento hacia la adquisición de un producto o idea",
    incorrectas: [
      "La que se limita a describir las características físicas y técnicas del objeto anunciado",
      "La que utiliza la imagen para explicar conceptos abstractos de carácter científico"
    ]
  },
  {
    enunciado: "¿Qué define a la 'Sociedad del Espectáculo' según Guy Debord?",
    correcta: "Una condición social donde la vida real es sustituida por su representación, convirtiendo las relaciones humanas en un intercambio de imágenes",
    incorrectas: [
      "El auge de los teatros y cines como principales centros de reunión social en el siglo XX",
      "La obligatoriedad de los medios de comunicación de informar con veracidad y transparencia"
    ]
  },
  {
    enunciado: "¿Qué es el 'Código Ideológico' en un mensaje visual?",
    correcta: "El conjunto de valores, creencias y visiones del mundo que el emisor proyecta de forma implícita o explícita en la imagen",
    incorrectas: [
      "El sistema de colores y tipografías que define la identidad corporativa de una marca",
      "La normativa legal que regula la emisión de contenidos violentos en televisión"
    ]
  },
  {
    enunciado: "Dentro del lenguaje cinematográfico, ¿qué se entiende por 'Mise-en-scène' (Puesta en escena)?",
    correcta: "La organización deliberada de todos los elementos visuales dentro del encuadre: decorado, iluminación, vestuario y disposición de actores",
    incorrectas: [
      "El proceso de edición y montaje de los planos en la fase de postproducción",
      "La estrategia de distribución de la película en las salas de exhibición comercial"
    ]
  },
  {
    enunciado: "¿Qué es la 'Cultura Visual' como campo de estudio académico?",
    correcta: "El análisis interdisciplinar de la centralidad de la imagen en la vida contemporánea y cómo esta construye nuestra identidad",
    incorrectas: [
      "La técnica de aprender a pintar cuadros famosos de forma idéntica",
      "El estudio exclusivo de las bellas artes tradicionales como la pintura y la escultura"
    ]
  },
  {
    enunciado: "¿Qué define al 'Hipertexto' en los medios de comunicación digitales?",
    correcta: "Una estructura no lineal de información que permite la navegación a través de nodos conectados mediante enlaces",
    incorrectas: [
      "Un texto escrito con una tipografía de gran tamaño para facilitar la lectura",
      "Un libro que contiene más de mil páginas de información técnica"
    ]
  },
  {
    enunciado: "En la retórica de la imagen publicitaria, ¿qué es una 'Metonimia'?",
    correcta: "La sustitución de un término por otro basado en una relación de contigüidad espacial, temporal o causal (ej. la causa por el efecto)",
    incorrectas: [
      "La exageración desmesurada de las cualidades de un producto",
      "La comparación explícita entre dos objetos mediante la conjunción 'como'"
    ]
  },
  {
    enunciado: "¿Qué es la 'Globalización Cultural' facilitada por los medios de comunicación?",
    correcta: "El proceso de homogeneización de gustos y hábitos de consumo a nivel mundial debido a la influencia de los medios transnacionales",
    incorrectas: [
      "La protección de las identidades locales frente a las influencias extranjeras",
      "La prohibición del uso de internet en países en vías de desarrollo"
    ]
  },
  {
    enunciado: "¿A qué se refiere el término 'Prosumidor' (Prosumer) en la Web 2.0?",
    correcta: "Al usuario que no solo consume contenidos, sino que también los produce y distribuye activamente",
    incorrectas: [
      "A un consumidor profesional que solo compra productos de alta gama",
      "Al técnico encargado de la reparación de los servidores de red"
    ]
  },
  {
    enunciado: "¿Qué es el 'Product Placement'?",
    correcta: "Una técnica publicitaria que consiste en insertar productos o marcas dentro de la narrativa de un programa, película o serie",
    incorrectas: [
      "El diseño del envase de un producto para que destaque en el estante del supermercado",
      "La devolución de productos defectuosos a la fábrica de origen"
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Storyboard' en la producción audiovisual?",
    correcta: "Representar gráficamente, secuencia por secuencia, la planificación de los planos de una obra audiovisual",
    incorrectas: [
      "Registrar el guion literario de forma definitiva para los actores",
      "Calcular el presupuesto económico total del rodaje"
    ]
  },
  {
    enunciado: "¿Qué es la 'Agenda-Setting'?",
    correcta: "La capacidad de los medios de comunicación de masas para determinar qué temas son importantes para la opinión pública",
    incorrectas: [
      "La agenda personal donde los periodistas anotan sus citas",
      "El proceso de configuración técnica de una cámara de televisión"
    ]
  },
  {
    enunciado: "En semiótica, ¿qué es un 'Código Estético'?",
    correcta: "Un sistema de convenciones que rige la creación y recepción de obras de arte en un periodo o movimiento determinado",
    incorrectas: [
      "La mezcla química de los pigmentos para asegurar su durabilidad",
      "El código de barras que identifica las obras en una subasta"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Diseño de Información'?",
    correcta: "La organización visual de datos complejos para que sean accesibles y comprensibles de forma eficiente",
    incorrectas: [
      "El uso de muchos colores y adornos en una página web",
      "La creación de logotipos artísticos para empresas de tecnología"
    ]
  },
  {
    enunciado: "¿Qué es la 'Intertextualidad' en los medios de comunicación?",
    correcta: "La relación que un mensaje visual establece con otros textos o imágenes precedentes, mediante citas o alusiones",
    incorrectas: [
      "El envío de mensajes de texto entre dos teléfonos móviles",
      "La traducción de un guion de un idioma a otro"
    ]
  },
  {
    enunciado: "¿Qué define a la 'Narrativa Transmedia'?",
    correcta: "Una historia que se despliega a través de múltiples medios y plataformas de comunicación, donde cada canal aporta algo único",
    incorrectas: [
      "Contar la misma historia exactamente igual en la radio y en la televisión",
      "Una técnica de dibujo que utiliza diferentes tipos de lápices"
    ]
  },
  {
    enunciado: "¿Qué es el 'Marketing Viral'?",
    correcta: "Estrategias que buscan que los propios usuarios compartan un contenido de forma exponencial a través de redes sociales",
    incorrectas: [
      "La venta de medicamentos a través de anuncios de televisión",
      "Un tipo de software malicioso que daña los archivos de imagen"
    ]
  },
  {
    enunciado: "¿Qué es el 'Encuadre' (Framing) en el análisis de noticias?",
    correcta: "La selección de ciertos aspectos de la realidad para hacerlos más relevantes en un texto comunicativo, promoviendo una interpretación particular",
    incorrectas: [
      "Poner un marco de madera a una fotografía periodística",
      "El ajuste del enfoque de la lente de la cámara"
    ]
  },
  {
    enunciado: "¿Qué es la 'Iconosfera'?",
    correcta: "El entorno cultural contemporáneo saturado de imágenes en el que vivimos y nos comunicamos",
    incorrectas: [
      "Una capa de la atmósfera que refleja las ondas de radio",
      "Un tipo de museo dedicado exclusivamente a los iconos religiosos"
    ]
  },
  {
    enunciado: "¿Qué es el 'Briefing' en el proceso de diseño publicitario?",
    correcta: "El documento que contiene la información básica, objetivos y necesidades que el cliente entrega a la agencia de publicidad",
    incorrectas: [
      "La factura final que se cobra por el diseño de un logotipo",
      "La reunión donde los diseñadores descansan para tomar café"
    ]
  },
  {
    enunciado: "En el análisis de la imagen, ¿qué es la 'Estereotipación'?",
    correcta: "La representación simplificada y generalizada de grupos de personas basada en prejuicios o convenciones sociales",
    incorrectas: [
      "La técnica de imprimir imágenes en relieve para personas ciegas",
      "El proceso de copiar un dibujo a través de un papel de calco"
    ]
  },
  {
    enunciado: "¿Qué define a los 'Mass Media' tradicionales?",
    correcta: "Medios con un emisor centralizado que envía mensajes unidireccionales a una audiencia masiva y heterogénea",
    incorrectas: [
      "Plataformas donde los usuarios hablan entre sí sin intermediarios",
      "Pequeñas revistas de arte con una tirada limitada a 10 ejemplares"
    ]
  },
  {
    enunciado: "¿Qué es la 'Postverdad' en los medios de comunicación?",
    correcta: "Circunstancia en la que los hechos objetivos influyen menos en la opinión pública que las apelaciones a las emociones y creencias personales",
    incorrectas: [
      "La verdad absoluta que se descubre tras una investigación científica larga",
      "Un tipo de periodismo que solo publica noticias positivas y alegres"
    ]
  },
  {
    enunciado: "¿Qué función tiene el 'Logotipo' en la comunicación visual de marca?",
    correcta: "Identificar visualmente a una entidad mediante un diseño tipográfico o icónico diferenciado y memorable",
    incorrectas: [
      "Describir detalladamente todos los servicios que ofrece una empresa",
      "Servir de decoración para los camiones de reparto"
    ]
  },
  {
    enunciado: "¿Qué es la 'Infografía'?",
    correcta: "Una combinación de imágenes sintéticas y textos con el fin de comunicar información visual de forma rápida y clara",
    incorrectas: [
      "Un dibujo hecho a mano alzada en un cuaderno de bocetos",
      "La biografía escrita de un diseñador gráfico famoso"
    ]
  },
  {
    enunciado: "¿Qué es el 'Efecto Kuleshov' en el montaje?",
    correcta: "El fenómeno por el cual el espectador deriva un significado de la interacción de dos planos sucesivos que no tienen relación entre sí",
    incorrectas: [
      "Un error técnico que hace que la imagen salga borrosa en el cine",
      "La técnica de pintar sombras muy profundas en el dibujo de retrato"
    ]
  },
  {
    enunciado: "¿Qué define a la 'Opinión Pública' según Habermas?",
    correcta: "El resultado del debate racional en la esfera pública sobre asuntos de interés general",
    incorrectas: [
      "Lo que piensa el director de un periódico de forma privada",
      "La suma de los votos en unas elecciones democráticas"
    ]
  },
  {
    enunciado: "¿Qué es un 'Arquetipo' en la comunicación visual?",
    correcta: "Un modelo original o símbolo universal que evoca respuestas emocionales profundas e inconscientes",
    incorrectas: [
      "Un plano arquitectónico de un edificio muy antiguo",
      "El primer dibujo que hace un estudiante en la facultad"
    ]
  },
  {
    enunciado: "¿Qué es la 'Publicidad Subliminal'?",
    correcta: "Estímulos presentados por debajo del umbral de la percepción consciente para influir en los deseos del consumidor",
    incorrectas: [
      "Anuncios que se colocan en vallas publicitarias muy altas",
      "Publicidad que utiliza colores muy brillantes y llamativos"
    ]
  },
  {
    enunciado: "¿Qué es el 'Copywriting'?",
    correcta: "La redacción persuasiva de textos publicitarios orientada a la venta o a la acción del usuario",
    incorrectas: [
      "La ley que protege los derechos de autor de las imágenes",
      "La técnica de copiar cuadros en los museos con permiso"
    ]
  },
  {
    enunciado: "¿Qué define al 'Sensacionalismo' periodístico?",
    correcta: "La tendencia a presentar las noticias de forma que produzcan emoción, asombro o impresión, a menudo sacrificando la veracidad",
    incorrectas: [
      "Informar de manera técnica y aburrida sobre la economía mundial",
      "El uso de cámaras de alta resolución para captar el detalle de la piel"
    ]
  },
  {
    enunciado: "¿Qué es un 'Código Binario' en la comunicación digital?",
    correcta: "El sistema de representación de datos mediante dos estados (0 y 1) que fundamenta la computación",
    incorrectas: [
      "Un sistema de comunicación basado en el uso de dos idiomas a la vez",
      "El conjunto de reglas para emparejar colores en el diseño textil"
    ]
  },
  {
    enunciado: "¿Qué es la 'Realidad Aumentada' (AR)?",
    correcta: "La superposición de elementos digitales sobre la visión del mundo real a través de un dispositivo tecnológico",
    incorrectas: [
      "Llevar gafas graduadas para ver mejor los objetos pequeños",
      "Pintar un cuadro con colores mucho más vivos que los de la realidad"
    ]
  },
  {
    enunciado: "¿Qué es el 'Branding'?",
    correcta: "El proceso de construcción y gestión de una marca para crear una conexión emocional con el público",
    incorrectas: [
      "El acto de poner una marca de fuego a los animales",
      "La técnica de quemar madera para crear dibujos artísticos"
    ]
  },
  {
    enunciado: "¿Qué es la 'Convergencia Mediática'?",
    correcta: "La integración de diversos medios de comunicación (audio, vídeo, texto) en una sola plataforma digital",
    incorrectas: [
      "Cuando dos canales de televisión emiten la misma película a la vez",
      "La reunión de periodistas de diferentes países en una cumbre"
    ]
  },
  {
    enunciado: "¿Qué es la 'Alfabetización Visual' (Visual Literacy)?",
    correcta: "La capacidad de comprender, interpretar y crear mensajes visuales de forma crítica y reflexiva",
    incorrectas: [
      "Aprender a escribir el alfabeto utilizando pinceles y tinta",
      "La habilidad para leer libros que no tienen ninguna imagen"
    ]
  },
  {
    enunciado: "¿Qué es el 'Newsfeed'?",
    correcta: "Un flujo continuo de contenidos actualizados que aparece en la interfaz de un usuario en redes sociales o lectores de noticias",
    incorrectas: [
      "El papel que se utiliza para alimentar las máquinas de imprenta",
      "El salario que cobran los presentadores de noticias"
    ]
  },
  {
    enunciado: "¿Qué es el 'Target' en comunicación?",
    correcta: "El segmento específico del público al que se dirige un mensaje o campaña publicitaria",
    incorrectas: [
      "El objetivo de metal al que disparan los arqueros",
      "La fecha límite para entregar un proyecto de diseño"
    ]
  }
];