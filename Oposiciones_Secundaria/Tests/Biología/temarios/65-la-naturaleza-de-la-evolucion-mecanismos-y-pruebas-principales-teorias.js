// temarios/65-la-naturaleza-de-la-evolucion-mecanismos-y-pruebas-principales-teorias.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué enunciado expresa con mayor precisión el concepto biológico de evolución?",
    correcta: "Cambio en las frecuencias alélicas de una población a lo largo del tiempo",
    incorrectas: [
      "Transformación dirigida de individuos durante su vida",
      "Aumento progresivo de la complejidad en todas las líneas evolutivas"
    ]
  },
  {
    enunciado: "¿Qué proposición central comparten Darwin y Wallace?",
    correcta: "Las poblaciones muestran variación heredable y la selección natural favorece a quienes dejan más descendencia",
    incorrectas: [
      "Los caracteres adquiridos se heredan por uso y desuso",
      "La evolución siempre procede por saltos bruscos sin gradualismo"
    ]
  },
  {
    enunciado: "¿Cuál fue el aporte clave del mutacionismo de Hugo de Vries?",
    correcta: "Considerar las mutaciones como fuente de novedad que puede originar cambios evolutivos",
    incorrectas: [
      "Demostrar la herencia de caracteres adquiridos",
      "Negar la existencia de variación heredable en las poblaciones"
    ]
  },
  {
    enunciado: "¿Qué integró la Síntesis Moderna de la evolución?",
    correcta: "Genética mendeliana, biología de poblaciones y selección natural",
    incorrectas: [
      "Embriología y fijismo",
      "Catastrofismo y herencia lamarckista"
    ]
  },
  {
    enunciado: "¿Qué describe el modelo de equilibrio puntuado?",
    correcta: "Largos periodos de estasis interrumpidos por episodios relativamente breves de cambio rápido",
    incorrectas: [
      "Cambio gradual y continuo sin periodos de estabilidad",
      "Ausencia total de especiación en el registro fósil"
    ]
  },
  {
    enunciado: "En genética de poblaciones, ¿qué significa p + q = 1 en un locus bialélico?",
    correcta: "La suma de las frecuencias alélicas en la población es igual a 1",
    incorrectas: [
      "La suma de las frecuencias genotípicas es igual a 1/2",
      "Las frecuencias alélicas cambian siempre generación tras generación"
    ]
  },
  {
    enunciado: "¿Cuál NO es un supuesto de equilibrio de Hardy–Weinberg?",
    correcta: "Selección direccional constante a favor de un alelo",
    incorrectas: [
      "Ausencia de mutación y migración",
      "Apareamiento aleatorio y población de tamaño infinito"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la deriva genética en poblaciones pequeñas?",
    correcta: "Fluctuaciones aleatorias que pueden fijar o perder alelos independientemente de su efecto adaptativo",
    incorrectas: [
      "Incremento sistemático de la aptitud media",
      "Mantenimiento indefinido de todos los alelos raros"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de efecto fundador?",
    correcta: "Una nueva población con diversidad genética reducida establecida por pocos colonos",
    incorrectas: [
      "Aumento de variación por flujo génico intenso",
      "Equilibrio estable entre selección y mutación"
    ]
  },
  {
    enunciado: "¿Qué es el cuello de botella poblacional?",
    correcta: "Reducción drástica del tamaño efectivo que disminuye la variabilidad genética",
    incorrectas: [
      "Aumento súbito de la migración entre poblaciones",
      "Incremento de la tasa de recombinación durante la meiosis"
    ]
  },
  {
    enunciado: "¿Qué proceso tiende a homogenizar genéticamente poblaciones diferentes?",
    correcta: "Flujo génico",
    incorrectas: [
      "Deriva genética",
      "Aislamiento reproductivo"
    ]
  },
  {
    enunciado: "¿Cuál es la fuente última de la variación genética sobre la que actúa la selección?",
    correcta: "Mutación",
    incorrectas: [
      "Selección sexual",
      "Deriva genética"
    ]
  },
  {
    enunciado: "¿Qué patrón describe la selección estabilizadora?",
    correcta: "Favorece fenotipos intermedios y reduce la varianza",
    incorrectas: [
      "Favorece los extremos del rasgo (disruptiva)",
      "Desplaza la media del rasgo hacia un extremo (direccional)"
    ]
  },
  {
    enunciado: "En selección sexual, ¿qué factor explica el desarrollo de rasgos llamativos en machos?",
    correcta: "Ventaja en el éxito de apareamiento pese a un posible coste de supervivencia",
    incorrectas: [
      "Ausencia total de presión selectiva",
      "Mayor eficiencia metabólica sin relación con el apareamiento"
    ]
  },
  {
    enunciado: "¿Qué distingue la selección natural de la deriva genética?",
    correcta: "La selección es no aleatoria y depende del efecto del rasgo sobre la aptitud; la deriva es aleatoria",
    incorrectas: [
      "La deriva siempre aumenta la aptitud media",
      "La selección no altera frecuencias alélicas"
    ]
  },
  {
    enunciado: "¿Cuál es un mecanismo precigótico de aislamiento reproductivo?",
    correcta: "Aislamiento temporal en la época de reproducción",
    incorrectas: [
      "Esterilidad del híbrido",
      "Inviabilidad del cigoto híbrido"
    ]
  },
  {
    enunciado: "¿Qué afirma la especiación alopátrica?",
    correcta: "La separación geográfica facilita la divergencia genética y la formación de nuevas especies",
    incorrectas: [
      "La especiación requiere siempre poliploidía",
      "La presencia de flujo génico elevado acelera la especiación"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo clásico de evidencia paleontológica para la evolución?",
    correcta: "Especies transicionales que muestran caracteres intermedios en series estratigráficas",
    incorrectas: [
      "Registro fósil completamente continuo sin lagunas",
      "Fósiles idénticos y sin cambios a lo largo de millones de años en todos los linajes"
    ]
  },
  {
    enunciado: "¿Qué comparaciones sustentan la evidencia anatómica de evolución?",
    correcta: "Órganos homólogos con estructuras similares y funciones distintas",
    incorrectas: [
      "Órganos análogos con origen común",
      "Órganos vestigiales con función aumentada respecto al ancestral"
    ]
  },
  {
    enunciado: "¿Qué sugiere la similitud de secuencias de ADN entre especies?",
    correcta: "Relación filogenética y descendencia con modificación",
    incorrectas: [
      "Convergencia sin ancestro común",
      "Ausencia de presión selectiva en el genoma"
    ]
  },
  {
    enunciado: "¿Qué explicación biogeográfica apoya la evolución?",
    correcta: "Endemismos en islas coherentes con colonización y radiación adaptativa",
    incorrectas: [
      "Distribución idéntica de todas las especies en todos los continentes",
      "Aparición espontánea independiente de cada especie en cada región"
    ]
  },
  {
    enunciado: "¿Qué aporta la embriología comparada como prueba evolutiva?",
    correcta: "Patrones de desarrollo conservados que reflejan relaciones de parentesco",
    incorrectas: [
      "Desarrollo completamente divergente sin homologías",
      "Identidad absoluta de todas las etapas embrionarias entre todas las especies"
    ]
  },
  {
    enunciado: "¿Qué postula la teoría neutralista de la evolución molecular de Kimura?",
    correcta: "Muchas sustituciones a nivel molecular son selectivamente neutras y se fijan por deriva",
    incorrectas: [
      "Todas las mutaciones son beneficiosas y se fijan por selección",
      "La selección natural no opera en el nivel fenotípico"
    ]
  },
  {
    enunciado: "¿Qué relación se espera entre tasa de sustitución neutra y tiempo de divergencia?",
    correcta: "Acumulación aproximadamente lineal de cambios, base del reloj molecular",
    incorrectas: [
      "Ausencia de relación temporal en sustituciones",
      "Disminución obligada de sustituciones con el tiempo"
    ]
  },
  {
    enunciado: "¿Qué ejemplo ilustra adaptación por selección natural en tiempo histórico?",
    correcta: "Resistencia a antibióticos en bacterias tras uso clínico",
    incorrectas: [
      "Aparición instantánea de un órgano completamente nuevo",
      "Herencia de músculos desarrollados por entrenamiento"
    ]
  },
  {
    enunciado: "¿Qué es una exaptación?",
    correcta: "Rasgo que adquiere una función diferente de aquella para la que evolucionó originalmente",
    incorrectas: [
      "Rasgo que pierde toda función y desaparece",
      "Rasgo surgido solo por mutación letal"
    ]
  },
  {
    enunciado: "¿Qué rol desempeña la recombinación meiótica en la evolución?",
    correcta: "Genera nuevas combinaciones génicas que pueden ser seleccionadas",
    incorrectas: [
      "Elimina toda variación genética",
      "Fija de inmediato los alelos favorables en toda la población"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la selección disruptiva?",
    correcta: "Favorece los extremos del rasgo y puede generar bimodalidad",
    incorrectas: [
      "Reduce la varianza favoreciendo el promedio",
      "Desplaza la media del rasgo hacia un extremo"
    ]
  },
  {
    enunciado: "¿Qué se entiende por aptitud (fitness) en biología evolutiva?",
    correcta: "Contribución relativa de un genotipo a la siguiente generación",
    incorrectas: [
      "Fuerza física del individuo medida en laboratorio",
      "Longevidad absoluta sin relación con la reproducción"
    ]
  },
  {
    enunciado: "¿Qué evidencia molecular apoya la descendencia común?",
    correcta: "Universalidad casi total del código genético con pocas excepciones",
    incorrectas: [
      "Códigos genéticos completamente distintos sin patrones compartidos",
      "Ausencia de genes homólogos entre taxones"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la radiación adaptativa?",
    correcta: "Diversificación rápida desde un ancestro común al ocupar nichos distintos",
    incorrectas: [
      "Convergencia hacia un mismo nicho por especies no emparentadas",
      "Estasis prolongada sin diversificación"
    ]
  },
  {
    enunciado: "¿Cuál es un mecanismo postcigótico de aislamiento reproductivo?",
    correcta: "Esterilidad del híbrido",
    incorrectas: [
      "Aislamiento etológico",
      "Aislamiento temporal"
    ]
  },
  {
    enunciado: "¿Qué papel tienen los genes reguladores del desarrollo (evo-devo) en la evolución morfológica?",
    correcta: "Pequeños cambios en su expresión pueden producir grandes efectos fenotípicos",
    incorrectas: [
      "No afectan a la morfología",
      "Actúan solo en organismos unicelulares"
    ]
  },
  {
    enunciado: "¿Qué conclusión sugiere la presencia de órganos vestigiales?",
    correcta: "Evidencian cambios de función o pérdida de utilidad a lo largo de la historia evolutiva",
    incorrectas: [
      "Prueban la inmutabilidad de las especies",
      "Indican perfección de diseño sin cambios"
    ]
  },
  {
    enunciado: "¿Qué implica la selección dependiente de la frecuencia?",
    correcta: "La aptitud de un fenotipo varía según su frecuencia relativa en la población",
    incorrectas: [
      "La aptitud de todos los fenotipos es constante",
      "Los fenotipos raros siempre son desfavorables"
    ]
  },
  {
    enunciado: "¿Cuál es un efecto del balance entre selección y mutación en un alelo nocivo recesivo?",
    correcta: "Puede mantenerse a baja frecuencia por nuevas mutaciones que lo reintroducen",
    incorrectas: [
      "Se elimina por completo en una sola generación",
      "Aumenta indefinidamente sin límite"
    ]
  },
  {
    enunciado: "¿Qué método filogenético compara caracteres para inferir relaciones evolutivas minimizando cambios?",
    correcta: "Máxima parsimonia",
    incorrectas: [
      "Electroforesis en gel",
      "Selección estabilizadora"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre homología y analogía?",
    correcta: "La homología implica origen común; la analogía, convergencia funcional sin origen común reciente",
    incorrectas: [
      "Ambas indican siempre origen común",
      "La analogía se basa en similitud genética comprobada"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes afirmaciones es coherente con la síntesis evolutiva moderna?",
    correcta: "La evolución es el resultado combinado de mutación, recombinación, selección, deriva y flujo génico",
    incorrectas: [
      "La selección natural por sí sola explica toda la variación observada",
      "La herencia de caracteres adquiridos es el motor principal del cambio"
    ]
  },
  {
    enunciado: "¿Qué implicación práctica tiene la teoría evolutiva en salud pública?",
    correcta: "Guía estrategias contra la resistencia antimicrobiana y la evolución de patógenos",
    incorrectas: [
      "Impide el uso de vacunas por selección natural",
      "Niega la variabilidad intraespecífica de patógenos"
    ]
  }
];
