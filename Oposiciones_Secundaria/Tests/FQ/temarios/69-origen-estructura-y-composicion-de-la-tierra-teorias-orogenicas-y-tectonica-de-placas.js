// temarios/Tema69.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué idea resume mejor la geología dinámica aplicada a la Tierra?",
    correcta: "Que el planeta cambia continuamente por la interacción de procesos internos y externos",
    incorrectas: [
      "Que la superficie terrestre permanece esencialmente inmutable desde su formación",
      "Que solo la erosión explica la evolución de los continentes y océanos"
    ]
  },
  {
    enunciado: "¿Qué describe la hipótesis planetesimal o mareal de Chamberlin y Moulton?",
    correcta: "La formación de planetesimales a partir de material solar arrancado por una aproximación estelar",
    incorrectas: [
      "La condensación directa de los planetas a partir de un único anillo gaseoso uniforme",
      "La creación súbita de los continentes por expansión térmica de la corteza"
    ]
  },
  {
    enunciado: "¿Cuál es una objeción clásica a la hipótesis mareal de Chamberlin-Moulton?",
    correcta: "Que el resultado dinámico esperado no reproduce bien las órbitas y distancias planetarias reales",
    incorrectas: [
      "Que niega por completo la existencia de gravedad en el Sistema Solar",
      "Que predice una Tierra sin núcleo metálico desde el inicio"
    ]
  },
  {
    enunciado: "¿Qué problema pretende resolver el enfoque magnetohidrodinámico asociado a Hoyle y Alfvén?",
    correcta: "La transferencia del momento angular desde el protosol hacia el disco y los planetas en formación",
    incorrectas: [
      "La imposibilidad de que exista agua líquida en cualquier planeta rocoso",
      "La ausencia total de meteoritos como registros del Sistema Solar primitivo"
    ]
  },
  {
    enunciado: "¿Qué expresa, de manera general, el llamado problema del momento angular en el Sistema Solar?",
    correcta: "Que la mayor parte del momento angular está en los planetas y no en el Sol",
    incorrectas: [
      "Que el Sol posee casi todo el momento angular y los planetas prácticamente ninguno",
      "Que el momento angular solo puede existir si hay vida en un planeta"
    ]
  },
  {
    enunciado: "¿Qué proceso explica la diferenciación temprana de la Tierra tras su acreción?",
    correcta: "La separación de materiales por densidad, con hundimiento de metales y ascenso de silicatos",
    incorrectas: [
      "La mezcla perfecta y permanente de todos los materiales sin estratificación",
      "La solidificación inicial de la Tierra como un bloque homogéneo de basalto"
    ]
  },
  {
    enunciado: "¿Qué fuente de energía contribuyó al calentamiento interno temprano de la Tierra?",
    correcta: "La energía de impactos y el calor radiogénico de isótopos como U, Th y K-40",
    incorrectas: [
      "La fricción del viento solar sobre la corteza terrestre",
      "La fotosíntesis como proceso dominante en el interior planetario"
    ]
  },
  {
    enunciado: "¿Qué indica una anomalía gravimétrica medida en una región concreta?",
    correcta: "La existencia de variaciones de densidad o distribución de masas en el subsuelo",
    incorrectas: [
      "Que la gravedad deja de actuar localmente durante parte del día",
      "Que la región carece por completo de rocas metamórficas"
    ]
  },
  {
    enunciado: "¿Qué característica básica distingue a las ondas sísmicas P de las ondas S?",
    correcta: "Las P se propagan en sólidos y líquidos, mientras que las S no se propagan en fluidos",
    incorrectas: [
      "Las S viajan más rápido que las P en todos los materiales posibles",
      "Las P solo existen en el océano y las S solo existen en continentes"
    ]
  },
  {
    enunciado: "¿Qué deducción clave se obtiene al observar que las ondas S no atraviesan el núcleo externo?",
    correcta: "Que el núcleo externo es líquido o tiene comportamiento reológico fluido",
    incorrectas: [
      "Que el núcleo externo está formado exclusivamente por granito",
      "Que el manto superior es completamente líquido hasta los 700 km"
    ]
  },
  {
    enunciado: "¿Qué representa la discontinuidad de Mohorovičić (Moho)?",
    correcta: "El límite sísmico entre la corteza y el manto superior",
    incorrectas: [
      "El límite entre el núcleo externo y el núcleo interno",
      "El límite entre la astenosfera y la mesosfera a 2900 km"
    ]
  },
  {
    enunciado: "¿Qué representa la discontinuidad de Gutenberg?",
    correcta: "El límite entre el manto y el núcleo externo",
    incorrectas: [
      "El límite entre la corteza continental y la corteza oceánica",
      "El límite entre la litosfera y la astenosfera en todos los lugares"
    ]
  },
  {
    enunciado: "¿Qué representa la discontinuidad de Lehmann (o del núcleo interno)?",
    correcta: "El límite entre el núcleo externo líquido y el núcleo interno sólido",
    incorrectas: [
      "El límite entre el manto superior y la corteza",
      "El límite entre la dorsal oceánica y la llanura abisal"
    ]
  },
  {
    enunciado: "¿Qué expresa el modelo dinámico o reológico de la Tierra frente al composicional?",
    correcta: "Clasifica capas por su comportamiento mecánico, no solo por su química",
    incorrectas: [
      "Elimina la necesidad de datos sísmicos porque solo usa fósiles",
      "Afirma que la Tierra no tiene núcleo y es totalmente silicatada"
    ]
  },
  {
    enunciado: "¿Qué definición describe mejor la litosfera?",
    correcta: "La envoltura rígida formada por la corteza y la parte superior más fría del manto",
    incorrectas: [
      "Una capa líquida de hierro y níquel que genera el campo magnético",
      "La zona de máxima fusión del manto inferior situada bajo 2900 km"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a la astenosfera en los modelos geodinámicos?",
    correcta: "Su comportamiento dúctil y la presencia de una zona de baja velocidad sísmica",
    incorrectas: [
      "Su rigidez absoluta que impide cualquier desplazamiento de placas",
      "Su composición exclusiva de cuarzo y feldespato en estado sólido cristalino"
    ]
  },
  {
    enunciado: "¿Qué sostiene, de forma simplificada, la teoría geosinclinal de Hall y Dana?",
    correcta: "Que grandes cuencas sedimentarias sufren subsidencia y luego deformación y levantamiento",
    incorrectas: [
      "Que las cordilleras aparecen solo por impacto de meteoritos gigantes",
      "Que los océanos se forman porque la Tierra se enfría y se expande uniformemente"
    ]
  },
  {
    enunciado: "¿Qué limitación general tienen las explicaciones puramente contraccionistas de la orogenia?",
    correcta: "No explican bien el conjunto de evidencias modernas sobre movilidad lateral y tectónica global",
    incorrectas: [
      "Explican la expansión oceánica, pero niegan el vulcanismo de arco",
      "Predicen que no pueden existir terremotos en los márgenes de placas"
    ]
  },
  {
    enunciado: "¿Qué propuso Wegener con la deriva continental?",
    correcta: "Que los continentes se han desplazado y estuvieron unidos en un supercontinente",
    incorrectas: [
      "Que las dorsales oceánicas son grietas producidas solo por erosión",
      "Que las placas litosféricas permanecen fijas y el manto es inmóvil"
    ]
  },
  {
    enunciado: "¿Qué evidencia es típica en apoyo de la deriva continental de Wegener?",
    correcta: "La coincidencia de fósiles y paleoclimas en continentes hoy separados por océanos",
    incorrectas: [
      "La existencia de atmósfera de helio en la Tierra primitiva",
      "La observación directa de corrientes oceánicas como motor de continentes"
    ]
  },
  {
    enunciado: "¿Qué crítica principal recibió Wegener respecto al mecanismo del movimiento continental?",
    correcta: "Que las fuerzas propuestas eran insuficientes para mover continentes a través de la litosfera",
    incorrectas: [
      "Que su teoría negaba la existencia de glaciaciones en el pasado",
      "Que la teoría exigía que la Tierra fuese hueca para funcionar"
    ]
  },
  {
    enunciado: "¿Qué idea central introduce la expansión del fondo oceánico asociada a Hess y Dietz?",
    correcta: "Que en las dorsales se crea nueva litosfera oceánica que se separa lateralmente",
    incorrectas: [
      "Que la corteza oceánica es siempre más antigua que la continental",
      "Que las fosas oceánicas son zonas de creación de corteza basáltica"
    ]
  },
  {
    enunciado: "¿Qué patrón paleomagnético en los fondos oceánicos apoyó decisivamente la expansión oceánica?",
    correcta: "Las bandas simétricas de polaridad magnética alternante a ambos lados de las dorsales",
    incorrectas: [
      "La ausencia total de minerales magnéticos en basaltos oceánicos",
      "La inversión anual de polos magnéticos causada por mareas lunares"
    ]
  },
  {
    enunciado: "¿Qué es una falla transformante en tectónica de placas?",
    correcta: "Un límite conservativo donde dos placas se deslizan lateralmente sin crear ni destruir litosfera",
    incorrectas: [
      "Un límite divergente donde asciende magma y se forma dorsal",
      "Un límite convergente donde se produce colisión continente-continente"
    ]
  },
  {
    enunciado: "¿Qué ocurre típicamente en un límite divergente de placas?",
    correcta: "Se forma nueva litosfera por ascenso y solidificación de material mantélico en dorsales",
    incorrectas: [
      "Se consume litosfera por subducción bajo una placa más densa",
      "Se produce metamorfismo de alta presión sin actividad magmática posible"
    ]
  },
  {
    enunciado: "¿Qué describe mejor un límite convergente con subducción?",
    correcta: "Una placa desciende bajo otra, se destruye litosfera y se generan fosas y arcos volcánicos",
    incorrectas: [
      "Dos placas se separan y forman una dorsal con volcanismo fisural",
      "Dos placas se desplazan paralelas sin sismicidad apreciable"
    ]
  },
  {
    enunciado: "¿Qué representa el plano de Benioff?",
    correcta: "La zona inclinada de sismicidad que marca el descenso de una placa en subducción",
    incorrectas: [
      "La superficie de contacto entre corteza continental y corteza oceánica en la dorsal",
      "El límite entre litosfera y astenosfera deducido por métodos gravimétricos"
    ]
  },
  {
    enunciado: "¿Qué fuerzas se citan habitualmente como contribuciones al movimiento de placas?",
    correcta: "La tracción de la losa subducida y el empuje gravitatorio desde las dorsales",
    incorrectas: [
      "La presión atmosférica y la acción de las mareas como motores principales",
      "La rotación diaria de la Tierra como causa única y suficiente del movimiento"
    ]
  },
  {
    enunciado: "¿Qué son los puntos calientes en el marco de la tectónica de placas?",
    correcta: "Zonas de volcanismo intraplaca asociadas a plumas mantélicas relativamente estacionarias",
    incorrectas: [
      "Límites transformantes con fricción extrema y ausencia de magma",
      "Regiones polares donde el campo magnético se invierte con mayor frecuencia"
    ]
  },
  {
    enunciado: "¿Qué ejemplo típico se utiliza para ilustrar una cadena volcánica por punto caliente?",
    correcta: "Hawai como alineación de islas formada por el desplazamiento de una placa sobre una pluma",
    incorrectas: [
      "Los Alpes como arco de islas oceánicas creadas en una dorsal",
      "El Mar Rojo como ejemplo de colisión continental completa"
    ]
  },
  {
    enunciado: "¿Qué expresa el ciclo de Wilson?",
    correcta: "La apertura y cierre de océanos mediante rifting, expansión, subducción y colisión",
    incorrectas: [
      "La alternancia anual de estaciones como causa de orogenias",
      "La evolución de los fósiles como prueba directa del núcleo interno sólido"
    ]
  },
  {
    enunciado: "¿Qué situación corresponde a un margen pasivo tipo atlántico?",
    correcta: "Un borde continental con poca sismicidad y sin subducción activa, dominado por sedimentación",
    incorrectas: [
      "Un borde con fosa oceánica profunda y arco volcánico asociado",
      "Un borde marcado por fallas transformantes que cortan una dorsal"
    ]
  },
  {
    enunciado: "¿Qué tipo de orógeno se asocia a una colisión continente-continente?",
    correcta: "Un orógeno intracontinental con gran engrosamiento cortical, como el Himalaya",
    incorrectas: [
      "Un arco insular oceánico generado en una dorsal",
      "Un orógeno exclusivamente submarino formado por erosión diferencial"
    ]
  },
  {
    enunciado: "¿Qué explica mejor la asociación entre subducción y vulcanismo de arco?",
    correcta: "La liberación de volátiles desde la placa subducida favorece la fusión parcial del manto superior",
    incorrectas: [
      "La fusión completa de la corteza continental por la presión atmosférica",
      "El enfriamiento del manto superior que genera magma por solidificación"
    ]
  },
  {
    enunciado: "¿Qué relación general se observa entre límites de placas y sismicidad?",
    correcta: "La mayor parte de los terremotos se concentra en los bordes de placas por acumulación y liberación de tensiones",
    incorrectas: [
      "Los terremotos se distribuyen al azar y no guardan relación con estructuras tectónicas",
      "Los terremotos solo se producen en dorsales y nunca en zonas de subducción"
    ]
  },
  {
    enunciado: "¿Qué característica general diferencia la corteza oceánica de la continental?",
    correcta: "La oceánica suele ser más delgada y más densa, con composición basáltica",
    incorrectas: [
      "La oceánica es siempre más antigua que cualquier corteza continental",
      "La continental está formada principalmente por hierro y níquel metálicos"
    ]
  },
  {
    enunciado: "¿Qué idea resume la utilidad de los xenolitos y meteoritos en el estudio del interior terrestre?",
    correcta: "Aportan muestras indirectas que ayudan a inferir composiciones profundas y procesos de diferenciación",
    incorrectas: [
      "Permiten observar directamente la discontinuidad de Gutenberg sin métodos sísmicos",
      "Demuestran que el núcleo interno es basáltico y el manto es metálico"
    ]
  },
  {
    enunciado: "¿Qué se entiende por cratón en geología histórica?",
    correcta: "Un bloque continental antiguo y estable que actúa como núcleo de los continentes",
    incorrectas: [
      "Una dorsal oceánica joven con intensa creación de litosfera",
      "Una fosa oceánica donde se forma corteza nueva por acreción magmática"
    ]
  },
  {
    enunciado: "¿Qué afirma la tectónica de placas como paradigma frente a teorías orogénicas previas?",
    correcta: "Integra deformación, magmatismo y sismicidad en un marco global basado en la movilidad litosférica",
    incorrectas: [
      "Sustituye la geofísica por explicaciones exclusivamente descriptivas del relieve",
      "Niega la existencia de convección mantélica y explica todo por contracción superficial"
    ]
  },
  {
    enunciado: "¿Qué aportación didáctica es coherente con este tema en Secundaria?",
    correcta: "Usar modelos de ondas y mapas de placas para relacionar estructura interna con riesgos geológicos",
    incorrectas: [
      "Evitar cualquier modelo porque la estructura interna no puede inferirse científicamente",
      "Reducir el tema a la clasificación de nubes porque es el principal motor geológico"
    ]
  }
];
