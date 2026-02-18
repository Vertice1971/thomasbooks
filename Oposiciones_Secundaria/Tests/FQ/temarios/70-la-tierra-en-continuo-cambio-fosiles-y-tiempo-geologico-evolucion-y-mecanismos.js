// temarios/70-la-tierra-en-continuo-cambio-fosiles-y-tiempo-geologico-evolucion-y-mecanismos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué significa afirmar que la Tierra es un planeta en continuo cambio?",
    correcta: "Que su superficie se transforma de manera permanente por la acción conjunta de procesos internos y externos",
    incorrectas: [
      "Que solo cambian los seres vivos y la geología permanece estable a escala histórica",
      "Que los cambios terrestres dependen exclusivamente de impactos de meteoritos"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia básica entre fuerzas internas y fuerzas externas en la dinámica terrestre?",
    correcta: "Las internas construyen y deforman la litosfera, mientras que las externas la desgastan y redistribuyen materiales",
    incorrectas: [
      "Las internas solo actúan en océanos y las externas solo actúan en continentes",
      "Las internas dependen del clima y las externas dependen del núcleo terrestre"
    ]
  },
  {
    enunciado: "¿Qué expresa el principio de actualismo asociado a Hutton y desarrollado por Lyell?",
    correcta: "Que los procesos geológicos actuales permiten interpretar los procesos del pasado",
    incorrectas: [
      "Que toda la historia de la Tierra ocurrió en pocos miles de años",
      "Que los fósiles son formaciones minerales sin relación con seres vivos"
    ]
  },
  {
    enunciado: "¿Qué implicación clave tiene el actualismo para el concepto de tiempo geológico?",
    correcta: "Que muchos cambios requieren escalas temporales muy largas para acumularse",
    incorrectas: [
      "Que la edad de la Tierra no puede estimarse con métodos científicos",
      "Que los periodos geológicos se definen solo por el clima actual"
    ]
  },
  {
    enunciado: "¿Qué proceso describe mejor la meteorización?",
    correcta: "La alteración física y química de las rocas in situ antes de que sus productos sean transportados",
    incorrectas: [
      "El plegamiento de capas rocosas por compresión tectónica",
      "La cristalización de magma en profundidad formando rocas plutónicas"
    ]
  },
  {
    enunciado: "¿Qué diferencia define mejor la erosión frente al transporte?",
    correcta: "La erosión implica arranque y desgaste del material, mientras que el transporte es su desplazamiento",
    incorrectas: [
      "La erosión ocurre solo en el fondo oceánico y el transporte solo en montañas",
      "La erosión es siempre química y el transporte es siempre biológico"
    ]
  },
  {
    enunciado: "¿Qué se entiende por sedimentación en geología?",
    correcta: "El depósito de materiales transportados cuando disminuye la energía del medio",
    incorrectas: [
      "La fusión parcial del manto que alimenta el vulcanismo",
      "La transformación de rocas por aumento de presión sin cambio mineral"
    ]
  },
  {
    enunciado: "¿Qué es la diagénesis en una secuencia sedimentaria?",
    correcta: "El conjunto de procesos que transforman sedimentos en roca, como compactación y cementación",
    incorrectas: [
      "La ruptura de continentes por formación de un rift",
      "La inversión del campo magnético terrestre cada pocos años"
    ]
  },
  {
    enunciado: "¿Qué idea recoge mejor el ciclo geológico construcción-destrucción-reconstrucción de la litosfera?",
    correcta: "Que se forman rocas y relieves, se desgastan y se generan nuevos materiales que vuelven a incorporarse a la litosfera",
    incorrectas: [
      "Que la litosfera solo se destruye y nunca se reconstruye",
      "Que la reconstrucción de la litosfera depende solo de la acción humana"
    ]
  },
  {
    enunciado: "¿Qué discontinuidad sísmica marca el límite entre la corteza y el manto superior?",
    correcta: "La discontinuidad de Mohorovicic (Moho)",
    incorrectas: [
      "La discontinuidad de Gutenberg",
      "La discontinuidad de Lehmann"
    ]
  },
  {
    enunciado: "¿Qué discontinuidad sísmica marca el límite entre el manto y el núcleo externo?",
    correcta: "La discontinuidad de Gutenberg",
    incorrectas: [
      "La discontinuidad de Mohorovicic (Moho)",
      "La discontinuidad de Conrad"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la convección del manto en la dinámica global del planeta?",
    correcta: "Actúa como motor de la tectónica de placas al transferir calor y generar movimiento",
    incorrectas: [
      "Impide el desplazamiento de placas al rigidizar la astenosfera",
      "Solo afecta al clima y no a la estructura interna"
    ]
  },
  {
    enunciado: "¿Qué describe el ciclo de Wilson en geodinámica?",
    correcta: "La apertura y cierre de océanos con fases de rifting, expansión, subducción y colisión",
    incorrectas: [
      "La sucesión anual de estaciones por la inclinación del eje terrestre",
      "La alternancia diaria de mareas como causa principal de orogenias"
    ]
  },
  {
    enunciado: "¿Qué es un fósil, en sentido geológico estricto?",
    correcta: "Un resto, molde o señal de actividad de un organismo del pasado preservado en materiales geológicos",
    incorrectas: [
      "Una roca ígnea reciente formada por enfriamiento de lava",
      "Un mineral que solo aparece en rocas metamórficas profundas"
    ]
  },
  {
    enunciado: "¿Qué condición favorece más la fosilización de un organismo?",
    correcta: "El enterramiento rápido y la presencia de partes duras resistentes a la descomposición",
    incorrectas: [
      "La exposición prolongada al aire en ambientes secos",
      "La disolución completa de tejidos antes del enterramiento"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo correcto de fosilización por carbonización?",
    correcta: "La preservación de una película de carbono que registra la forma de tejidos orgánicos comprimidos",
    incorrectas: [
      "El relleno de una cavidad por magma basáltico que luego cristaliza",
      "La transformación de un fósil en oro por precipitación hidrotermal"
    ]
  },
  {
    enunciado: "¿Qué describe mejor un molde y un contramolde fósil?",
    correcta: "El molde es la cavidad que deja el organismo y el contramolde es el relleno que reproduce su forma",
    incorrectas: [
      "El molde es siempre una huella y el contramolde es siempre un coprolito",
      "El molde es una roca metamórfica y el contramolde una roca ígnea"
    ]
  },
  {
    enunciado: "¿Qué son los icnofósiles?",
    correcta: "Huellas o rastros de actividad biológica como pisadas, galerías o pistas de desplazamiento",
    incorrectas: [
      "Cristales de minerales que imitan formas orgánicas sin relación biológica",
      "Fragmentos de meteoritos incorporados a sedimentos marinos"
    ]
  },
  {
    enunciado: "¿Qué son los coprolitos?",
    correcta: "Heces fosilizadas que informan sobre dieta y ecosistemas del pasado",
    incorrectas: [
      "Nódulos metálicos que se forman en dorsales oceánicas",
      "Intrusiones magmáticas que cortan estratos sedimentarios"
    ]
  },
  {
    enunciado: "¿Qué es un pseudofósil?",
    correcta: "Una estructura inorgánica que se parece a un fósil pero no procede de un organismo",
    incorrectas: [
      "Un fósil guía de amplia distribución geográfica",
      "Un microfósil usado en dataciones radiométricas"
    ]
  },
  {
    enunciado: "¿Qué establece el principio de superposición atribuido a Steno?",
    correcta: "Que en una serie no deformada los estratos inferiores son más antiguos que los superiores",
    incorrectas: [
      "Que los fósiles aparecen siempre en el mismo estrato en todos los continentes",
      "Que las rocas ígneas son siempre más antiguas que las sedimentarias"
    ]
  },
  {
    enunciado: "¿Qué afirma el principio de sucesión faunística en estratigrafía?",
    correcta: "Que las asociaciones fósiles se suceden en un orden reconocible y no se repiten arbitrariamente",
    incorrectas: [
      "Que todas las especies fósiles coexisten en cualquier época geológica",
      "Que la evolución impide que existan extinciones masivas"
    ]
  },
  {
    enunciado: "¿Cuál es una característica esencial de un fósil guía?",
    correcta: "Que tenga corta duración temporal y amplia distribución geográfica",
    incorrectas: [
      "Que pertenezca siempre a un vertebrado de gran tamaño",
      "Que solo aparezca en rocas metamórficas de alta presión"
    ]
  },
  {
    enunciado: "¿Por qué los microfósiles son especialmente útiles en datación y correlación estratigráfica?",
    correcta: "Porque suelen ser abundantes, de rápida evolución y aparecen en muchas cuencas sedimentarias",
    incorrectas: [
      "Porque se forman solo por procesos químicos sin intervención biológica",
      "Porque permiten medir directamente la edad radiométrica del núcleo terrestre"
    ]
  },
  {
    enunciado: "¿Qué mide, en general, una datación radiométrica?",
    correcta: "El tiempo transcurrido desde que un sistema mineral o roca quedó cerrado a la difusión de isótopos",
    incorrectas: [
      "La intensidad del campo magnético terrestre en la actualidad",
      "La cantidad de fósiles guía presentes en una capa"
    ]
  },
  {
    enunciado: "¿Qué relación básica explica la vida media (T1/2) en radiactividad?",
    correcta: "El tiempo necesario para que se desintegre la mitad de los núcleos radiactivos de una muestra",
    incorrectas: [
      "El tiempo que tarda una roca en pasar de sedimentaria a ígnea",
      "El tiempo que necesita un fósil para convertirse en pseudofósil"
    ]
  },
  {
    enunciado: "¿Para qué rango es especialmente apropiado el carbono-14?",
    correcta: "Para datar restos orgánicos relativamente recientes, hasta decenas de miles de años",
    incorrectas: [
      "Para datar la edad del manto inferior en miles de millones de años",
      "Para datar la formación del núcleo terrestre con precisión de millones de años"
    ]
  },
  {
    enunciado: "¿Qué pareja isotópica se usa de forma clásica para edades de miles de millones de años en rocas antiguas?",
    correcta: "U-238 a Pb-206 en minerales como el circón",
    incorrectas: [
      "C-14 a N-14 en basaltos oceánicos profundos",
      "Na-24 a Mg-24 en arenas de playa recientes"
    ]
  },
  {
    enunciado: "¿Qué aporta el paleomagnetismo al estudio del tiempo geológico y la tectónica?",
    correcta: "Registra inversiones y direcciones del campo magnético, útil para correlación y expansión oceánica",
    incorrectas: [
      "Mide directamente la temperatura del núcleo interno con precisión anual",
      "Demuestra que los continentes no pueden desplazarse lateralmente"
    ]
  },
  {
    enunciado: "¿Qué es una discordancia (unconformity) en estratigrafía?",
    correcta: "Una superficie que indica un hiato temporal por no sedimentación o erosión entre dos series",
    incorrectas: [
      "Un límite entre dos placas litosféricas en una dorsal oceánica",
      "Una zona de fusión parcial del manto situada bajo los continentes"
    ]
  },
  {
    enunciado: "¿Qué diferencia general existe entre tiempo geológico relativo y absoluto?",
    correcta: "El relativo ordena eventos y estratos, mientras que el absoluto asigna edades numéricas",
    incorrectas: [
      "El relativo solo sirve para rocas ígneas y el absoluto solo para rocas sedimentarias",
      "El relativo depende de GPS y el absoluto depende solo de fósiles guía"
    ]
  },
  {
    enunciado: "¿Qué postura defendió el catastrofismo clásico asociado a Cuvier?",
    correcta: "Que extinciones y cambios pueden explicarse por episodios bruscos y reemplazos de faunas",
    incorrectas: [
      "Que las especies cambian por uso y desuso transmitiendo caracteres adquiridos",
      "Que la selección natural explica por sí sola el origen del Sistema Solar"
    ]
  },
  {
    enunciado: "¿Qué idea caracteriza el lamarckismo en biología evolutiva histórica?",
    correcta: "Que los caracteres adquiridos por uso y desuso podrían heredarse y orientar el cambio",
    incorrectas: [
      "Que la variación heredable es aleatoria y la selección filtra esa variación",
      "Que la herencia se transmite solo por cromosomas descubiertos en el siglo XX"
    ]
  },
  {
    enunciado: "¿Qué propusieron Darwin y Wallace como mecanismo central de la evolución?",
    correcta: "La selección natural actuando sobre variación heredable en poblaciones",
    incorrectas: [
      "La aparición de especies por generación espontánea en cada época geológica",
      "La fijación de especies por ausencia total de variación dentro de las poblaciones"
    ]
  },
  {
    enunciado: "¿Qué problema tenía el darwinismo inicial antes de la genética moderna?",
    correcta: "No disponía de un mecanismo claro de herencia que explicara cómo se transmite la variación",
    incorrectas: [
      "Negaba la existencia de fósiles transicionales en el registro geológico",
      "Sostenía que las mutaciones no pueden ocurrir en ningún organismo"
    ]
  },
  {
    enunciado: "¿Qué aportó Mendel al fundamento de la teoría evolutiva moderna?",
    correcta: "Un modelo de herencia particulada que explica la transmisión de rasgos y mantiene variación",
    incorrectas: [
      "La demostración de que la Tierra tiene 4550 millones de años",
      "La explicación de la expansión de los fondos oceánicos por paleomagnetismo"
    ]
  },
  {
    enunciado: "¿Qué describe la síntesis moderna o neodarwinismo asociada a autores como Dobzhansky y Fisher?",
    correcta: "La integración de genética de poblaciones con selección natural, mutación, deriva y flujo génico",
    incorrectas: [
      "La sustitución de la selección natural por herencia de caracteres adquiridos",
      "La negación de la variación genética como base del cambio evolutivo"
    ]
  },
  {
    enunciado: "¿Qué expresa el equilibrio de Hardy-Weinberg en genética de poblaciones?",
    correcta: "Que, sin fuerzas evolutivas, las frecuencias alélicas y genotípicas permanecen constantes",
    incorrectas: [
      "Que toda mutación es adaptativa y siempre se fija en la población",
      "Que la selección natural elimina necesariamente toda variación genética"
    ]
  },
  {
    enunciado: "¿Qué es la deriva genética?",
    correcta: "El cambio azaroso de frecuencias alélicas, especialmente importante en poblaciones pequeñas",
    incorrectas: [
      "El movimiento de placas litosféricas sobre la astenosfera plástica",
      "La transformación de sedimentos en roca por compactación y cementación"
    ]
  },
  {
    enunciado: "¿Qué se entiende por flujo génico en evolución?",
    correcta: "El intercambio de alelos entre poblaciones por migración y reproducción",
    incorrectas: [
      "La sustitución química de minerales durante la fosilización",
      "La formación de fósiles guía por procesos radiométricos"
    ]
  }
];
