// temarios/63-la-genetica-mendeliana-la-teoria-cromosomica-de-la-herencia-las-mutaciones.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estableció Mendel al formular la ley de la uniformidad en la F1?",
    correcta: "Que el cruce entre líneas puras para un carácter da una descendencia F1 fenotípicamente uniforme",
    incorrectas: [
      "Que los caracteres se mezclan de forma irreversible en la F1",
      "Que los alelos recesivos desaparecen definitivamente tras el primer cruce"
    ]
  },
  {
    enunciado: "Según la ley de la segregación, ¿qué ocurre con los alelos de un gen durante la meiosis?",
    correcta: "Se separan en la formación de gametos, de modo que cada gameto recibe un solo alelo",
    incorrectas: [
      "Se duplican para que cada gameto reciba dos alelos",
      "Se recombinan siempre dando lugar a nuevos alelos"
    ]
  },
  {
    enunciado: "¿En qué condiciones se cumple la herencia independiente de caracteres en un dihíbrido?",
    correcta: "Cuando los genes residen en cromosomas distintos o están muy alejados en el mismo cromosoma",
    incorrectas: [
      "Cuando los genes están estrechamente ligados en el mismo cromosoma",
      "Únicamente cuando el organismo es haploide"
    ]
  },
  {
    enunciado: "¿Qué proporción fenotípica esperas en F2 para un monohíbrido con dominancia completa?",
    correcta: "3:1",
    incorrectas: [
      "1:1",
      "1:2:1"
    ]
  },
  {
    enunciado: "¿Qué proporción fenotípica clásica se observa en F2 de un dihíbrido con segregación independiente y dominancia completa?",
    correcta: "9:3:3:1",
    incorrectas: [
      "12:3:1",
      "9:7"
    ]
  },
  {
    enunciado: "En herencia intermedia, ¿qué relación genotipo-fenotipo es correcta?",
    correcta: "El heterocigoto muestra un fenotipo intermedio respecto a los homocigotos",
    incorrectas: [
      "El heterocigoto expresa solo el fenotipo recesivo",
      "El heterocigoto es idéntico al homocigoto dominante"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de codominancia en humanos?",
    correcta: "El sistema ABO cuando se expresa el tipo AB",
    incorrectas: [
      "El color de flores en *Mirabilis jalapa*",
      "El carácter 'virola' en guisantes"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la epistasia recesiva?",
    correcta: "Un alelo recesivo en un gen enmascara la expresión de otro gen no alélico",
    incorrectas: [
      "Dos alelos recesivos del mismo gen se anulan mutuamente",
      "Un alelo dominante siempre se impone sobre cualquier gen"
    ]
  },
  {
    enunciado: "¿Qué proporción fenotípica sugiere epistasia recesiva en un dihíbrido?",
    correcta: "9:3:4",
    incorrectas: [
      "15:1",
      "9:7"
    ]
  },
  {
    enunciado: "¿Qué significa que un alelo sea letal recesivo en heterocigosis?",
    correcta: "Que no es letal en heterocigosis, pero sí en homocigosis",
    incorrectas: [
      "Que provoca la muerte inmediata del heterocigoto",
      "Que siempre produce esterilidad en los heterocigotos"
    ]
  },
  {
    enunciado: "¿Qué es un cruce de prueba (test cross)?",
    correcta: "El cruce de un individuo con fenotipo dominante con un homocigoto recesivo para conocer su genotipo",
    incorrectas: [
      "Un cruce entre dos heterocigotos para aumentar la variabilidad",
      "El cruce de líneas puras para producir F1 uniforme"
    ]
  },
  {
    enunciado: "¿Qué mide una prueba de chi-cuadrado en genética mendeliana?",
    correcta: "La adecuación entre proporciones observadas y esperadas según una hipótesis",
    incorrectas: [
      "La distancia física entre genes en pares de bases",
      "La tasa de mutación por generación"
    ]
  },
  {
    enunciado: "¿Qué aportó la teoría cromosómica de Sutton y Boveri?",
    correcta: "La idea de que los genes están en los cromosomas y su comportamiento explica las leyes de Mendel",
    incorrectas: [
      "La demostración de que el citoplasma porta la información genética",
      "La propuesta de que la herencia es exclusivamente ambiental"
    ]
  },
  {
    enunciado: "¿Qué demostró Thomas H. Morgan con *Drosophila melanogaster*?",
    correcta: "La existencia de ligamiento génico y su relación con la recombinación",
    incorrectas: [
      "Que la herencia es siempre independiente",
      "Que los genes se localizan en las mitocondrias"
    ]
  },
  {
    enunciado: "¿Qué indica una frecuencia de recombinación del 1% entre dos genes?",
    correcta: "Una distancia genética aproximada de 1 centimorgan",
    incorrectas: [
      "Una distancia física exacta de 1 kilobase",
      "Ausencia total de ligamiento"
    ]
  },
  {
    enunciado: "Si dos genes muestran 50% de recombinación, ¿qué conclusión es correcta?",
    correcta: "Se comportan como no ligados (independientes) en ese análisis",
    incorrectas: [
      "Están muy ligados en el mismo cromosoma",
      "Pertenecen necesariamente al cromosoma X"
    ]
  },
  {
    enunciado: "¿Cuál es una característica de los genes ligados?",
    correcta: "Tienden a heredarse juntos porque están próximos en el mismo cromosoma",
    incorrectas: [
      "Siempre segregan de forma independiente",
      "Solo existen en organismos diploides"
    ]
  },
  {
    enunciado: "¿Qué suceso meiótico produce la recombinación génica entre cromosomas homólogos?",
    correcta: "El entrecruzamiento (crossing-over) durante la profase I",
    incorrectas: [
      "La segregación de cromátidas hermanas en mitosis",
      "La duplicación del ADN en fase S"
    ]
  },
  {
    enunciado: "¿Qué término describe la posición física de un gen en el cromosoma?",
    correcta: "Locus",
    incorrectas: [
      "Alelo",
      "Genoma"
    ]
  },
  {
    enunciado: "¿Cómo se hereda típicamente el daltonismo rojo-verde?",
    correcta: "Como carácter recesivo ligado al cromosoma X",
    incorrectas: [
      "Como carácter dominante ligado al Y",
      "Como rasgo mitocondrial"
    ]
  },
  {
    enunciado: "¿Qué patrón sugiere una herencia mitocondrial?",
    correcta: "Transmisión materna a toda la descendencia",
    incorrectas: [
      "Transmisión exclusiva a los hijos varones",
      "Separación 3:1 en F2"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal hay entre penetrancia y expresividad?",
    correcta: "La penetrancia es la proporción de individuos que expresan el fenotipo y la expresividad es el grado de esa expresión",
    incorrectas: [
      "Son sinónimos que describen lo mismo",
      "Penetrancia se usa solo en genes ligados al sexo y expresividad solo en autosómicos"
    ]
  },
  {
    enunciado: "¿Qué son los alelos múltiples?",
    correcta: "Más de dos alternativas alélicas para un mismo locus en la población",
    incorrectas: [
      "La presencia de más de dos copias del cromosoma",
      "La duplicación de todo el genoma"
    ]
  },
  {
    enunciado: "¿Qué tipo de variación explican los caracteres cuantitativos como la estatura?",
    correcta: "Herencia poligénica con influencia ambiental",
    incorrectas: [
      "Herencia monogénica con dominancia completa",
      "Herencia ligada al Y sin influencia ambiental"
    ]
  },
  {
    enunciado: "¿Qué es una mutación puntual sinónima?",
    correcta: "Un cambio de base que no altera la secuencia de aminoácidos",
    incorrectas: [
      "Una inserción que cambia el marco de lectura",
      "Una deleción de todo un exón"
    ]
  },
  {
    enunciado: "¿Qué describe mejor una mutación con cambio de sentido (missense)?",
    correcta: "Sustitución de un aminoácido por otro en la proteína",
    incorrectas: [
      "Conversión de un codón en señal de parada",
      "Eliminación de varios genes contiguos"
    ]
  },
  {
    enunciado: "¿Qué es una mutación nonsense?",
    correcta: "Una sustitución que genera un codón de parada prematuro",
    incorrectas: [
      "Una duplicación cromosómica entera",
      "Una inversión pericéntrica"
    ]
  },
  {
    enunciado: "¿Qué efecto típico tienen inserciones o deleciones no múltiplos de 3 en una región codificante?",
    correcta: "Provocan un corrimiento del marco de lectura (frameshift)",
    incorrectas: [
      "No tienen efecto porque el código es degenerado",
      "Solo alteran intrones y nunca exones"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de mutación cromosómica estructural?",
    correcta: "Una translocación recíproca entre cromosomas no homólogos",
    incorrectas: [
      "Una sustitución puntual G→A en un codón",
      "Una mutación sinónima en un exón"
    ]
  },
  {
    enunciado: "¿Qué define una aneuploidía?",
    correcta: "La ganancia o pérdida de uno o pocos cromosomas respecto al cariotipo normal",
    incorrectas: [
      "La multiplicación completa del juego cromosómico (poliploidía)",
      "Una inversión de un segmento dentro del mismo cromosoma"
    ]
  },
  {
    enunciado: "¿Qué proceso causa con frecuencia aneuploidías como la trisomía 21?",
    correcta: "No disyunción de cromosomas homólogos o cromátidas hermanas durante la meiosis",
    incorrectas: [
      "Reparación por escisión de nucleótidos",
      "Transcripción inversa del ARN"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un agente mutagénico?",
    correcta: "Radiación ionizante",
    incorrectas: [
      "Glucosa en sangre",
      "Oxígeno disuelto a niveles fisiológicos normales"
    ]
  },
  {
    enunciado: "¿Qué sistema corrige apareamientos erróneos tras la replicación del ADN?",
    correcta: "Reparación de errores de apareamiento (MMR)",
    incorrectas: [
      "Traducción ribosomal",
      "Glicosilación de proteínas en el Golgi"
    ]
  },
  {
    enunciado: "¿Qué vía repara dímeros de pirimidina causados por UV eliminando un tramo de nucleótidos?",
    correcta: "Reparación por escisión de nucleótidos (NER)",
    incorrectas: [
      "Reparación por escisión de bases (BER) exclusivamente",
      "Reparación por unión de extremos no homólogos sin eliminación previa"
    ]
  },
  {
    enunciado: "¿Qué mecanismo repara roturas de doble cadena con alta fidelidad usando una copia hermana?",
    correcta: "Recombinación homóloga",
    incorrectas: [
      "Unión de extremos no homólogos siempre sin errores",
      "Desaminación espontánea de citosina"
    ]
  },
  {
    enunciado: "¿Qué describe la pleiotropía?",
    correcta: "Un solo gen afecta a múltiples rasgos fenotípicos",
    incorrectas: [
      "Múltiples genes afectan a un único rasgo",
      "Un gen solo se expresa en un tejido concreto"
    ]
  },
  {
    enunciado: "¿Qué ejemplo ilustra interacción gen-ambiente?",
    correcta: "El fenotipo de pelaje en conejos Himalaya afectado por la temperatura",
    incorrectas: [
      "El grupo sanguíneo AB determinado solo por el genotipo",
      "La determinación del sexo en mamíferos sin influencia ambiental"
    ]
  },
  {
    enunciado: "En un cruce X-ligado, ¿por qué los varones expresan más a menudo el fenotipo recesivo?",
    correcta: "Porque son hemicigotos para el cromosoma X y expresan el alelo presente",
    incorrectas: [
      "Porque poseen dos copias del X y enmascaran el alelo",
      "Porque el cromosoma Y siempre aporta dominancia"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre distancia genética y frecuencia de recombinación para genes ligados?",
    correcta: "A mayor distancia genética, mayor frecuencia de recombinación hasta un máximo del 50%",
    incorrectas: [
      "La recombinación disminuye al aumentar la distancia",
      "La recombinación puede superar el 75% en genes muy lejanos"
    ]
  },
  {
    enunciado: "¿Qué afirma correctamente la teoría cromosómica respecto a la segregación?",
    correcta: "La segregación de alelos refleja la separación de cromosomas homólogos en anafase I",
    incorrectas: [
      "La segregación ocurre por separación de cromátidas en profase I",
      "La segregación depende de la traducción de ARNm"
    ]
  },
  {
    enunciado: "¿Qué define mejor una mutación espontánea?",
    correcta: "Una alteración del ADN originada por errores intrínsecos de replicación o procesos químicos naturales",
    incorrectas: [
      "Una alteración inducida por exposición experimental a radiación",
      "Un cambio heredable exclusivamente por aprendizaje"
    ]
  }
];
