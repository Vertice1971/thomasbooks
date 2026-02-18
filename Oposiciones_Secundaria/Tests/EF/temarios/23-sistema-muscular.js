// -23-sistema-muscular.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué componente del citoesqueleto muscular actúa como un muelle molecular de alta elasticidad, conectando la línea Z con la línea M y manteniendo la miosina centrada?",
    correcta: "La proteína titina (conectina).",
    incorrectas: [
      "La nebulina, que regula la longitud de la actina.",
      "La distrofina, que conecta el citoesqueleto con la matriz extracelular."
    ]
  },
  {
    enunciado: "El retículo sarcoplásmico es una organela especializada cuya función crítica en el acoplamiento excitación-contracción es:",
    correcta: "El secuestro, almacenamiento y liberación pulsátil de iones de calcio ($Ca^{2+}$).",
    incorrectas: [
      "La síntesis de moléculas de ATP a través de la fosforilación oxidativa.",
      "La hidrólisis de la acetilcolina en la hendidura sináptica."
    ]
  },
  {
    enunciado: "Las fibras musculares de Tipo I (lentas-oxidativas) presentan una alta resistencia a la fatiga debido a:",
    correcta: "Su elevada densidad mitocondrial, alto contenido en mioglobina y densa red capilar.",
    incorrectas: [
      "Su gran capacidad para el metabolismo anaeróbico láctico y alta actividad de la miosín-ATPasa.",
      "Su gran diámetro transversal y la baja concentración de enzimas oxidativas."
    ]
  },
  {
    enunciado: "Según la teoría de los filamentos deslizantes, ¿qué ocurre mecánicamente dentro del sarcómero durante la contracción muscular?",
    correcta: "Los filamentos de actina se deslizan sobre los de miosina hacia el centro de la banda A, reduciendo la zona H y la banda I.",
    incorrectas: [
      "Los filamentos de miosina se acortan físicamente por la pérdida de moléculas de meromiosina.",
      "La banda A se estrecha proporcionalmente a la fuerza generada por los puentes cruzados."
    ]
  },
  {
    enunciado: "¿Cuál es el papel fundamental de la troponina C en el mecanismo de contracción muscular estriada?",
    correcta: "Unirse a los iones de calcio para inducir un cambio conformacional en la tropomiosina que libere los sitios activos de la actina.",
    incorrectas: [
      "Actuar como enzima para la hidrólisis del ATP en la cabeza de la miosina.",
      "Anclar los filamentos gruesos al disco Z para evitar el sobreestiramiento."
    ]
  },
  {
    enunciado: "La unidad motora se rige por la 'Ley del Todo o Nada'. ¿Qué implicación técnica tiene esto en la graduación de la fuerza?",
    correcta: "La fuerza no se gradúa variando la intensidad del impulso en una fibra, sino mediante el reclutamiento de más unidades o el aumento de su frecuencia de disparo.",
    incorrectas: [
      "Que todas las unidades motoras de un músculo se activan simultáneamente ante cualquier estímulo.",
      "Que la fibra muscular se contrae parcialmente si el potencial de acción no alcanza el umbral de descarga."
    ]
  },
  {
    enunciado: "En la arquitectura muscular, los músculos penniformes (en forma de pluma) se caracterizan por:",
    correcta: "Tener un mayor número de fibras por unidad de volumen, lo que aumenta la sección transversal fisiológica y la fuerza absoluta.",
    incorrectas: [
      "Tener fibras muy largas dispuestas en paralelo que favorecen grandes amplitudes de movimiento y velocidad.",
      "Carecer de tejido conectivo (epimisio), lo que facilita una contracción más rápida."
    ]
  },
  {
    enunciado: "¿Qué neurotransmisor es el encargado de despolarizar el sarcolema al unirse a los receptores nicotínicos de la placa motora?",
    correcta: "Acetilcolina (ACh).",
    incorrectas: [
      "Noradrenalina.",
      "Glutamato monosódico."
    ]
  },
  {
    enunciado: "La fatiga periférica de origen muscular se asocia frecuentemente con la acumulación de fosfato inorgánico ($P_{i}$), el cual interfiere en:",
    correcta: "La liberación de calcio del retículo y la formación de puentes cruzados fuertes entre actina y miosina.",
    incorrectas: [
      "La síntesis de dopamina en los ganglios basales del cerebro.",
      "La conducción saltatoria en los nódulos de Ranvier del axón motor."
    ]
  },
  {
    enunciado: "Las células satélite musculares, localizadas entre la lámina basal y el sarcolema, son vitales para:",
    correcta: "La regeneración, reparación y crecimiento del tejido muscular (hipertrofia) mediante la donación de núcleos.",
    incorrectas: [
      "La transmisión de impulsos eléctricos entre fibras adyacentes a través de uniones gap.",
      "La producción de líquido sinovial en las inserciones tendinosas."
    ]
  },
  {
    enunciado: "¿Cómo se denomina el estado de contracción muscular sostenida y sin relajación que ocurre ante estímulos de muy alta frecuencia?",
    correcta: "Tétanos (contracción tetánica).",
    incorrectas: [
      "Sacudida muscular simple.",
      "Sumación espacial post-isométrica."
    ]
  },
  {
    enunciado: "La mioglobina es una proteína globular cuya curva de disociación es hiperbólica. Esto le permite:",
    correcta: "Almacenar oxígeno intracelularmente y liberarlo solo cuando la $PO_{2}$ cae a niveles muy bajos durante el ejercicio intenso.",
    incorrectas: [
      "Transportar el dióxido de carbono directamente al alvéolo pulmonar.",
      "Sustituir a la hemoglobina en el transporte sistémico de gases."
    ]
  },
  {
    enunciado: "Un músculo sinergista se define como aquel que:",
    correcta: "Colabora con el agonista realizando la misma acción o estabilizando las articulaciones intermedias para que el movimiento sea eficiente.",
    incorrectas: [
      "Se opone directamente al movimiento deseado para proteger la articulación de una hiperextensión.",
      "Produce la acción principal del movimiento mediante una contracción excéntrica controlada."
    ]
  },
  {
    enunciado: "Durante la adolescencia, ¿por qué los músculos fásicos (como el recto abdominal) tienen tendencia a la debilidad o hipotonía?",
    correcta: "Debido a factores posturales y a un desarrollo muscular que a menudo no sigue el ritmo del crecimiento óseo acelerado.",
    incorrectas: [
      "Porque pierden todas sus mitocondrias por el efecto de las hormonas sexuales.",
      "Porque se transforman en tejido graso si no se entrenan diariamente con pesas."
    ]
  },
  {
    enunciado: "La 'insuficiencia activa' de un músculo biarticular (como los isquiosurales) se manifiesta cuando:",
    correcta: "El músculo se acorta simultáneamente en ambas articulaciones, perdiendo capacidad de generar tensión mecánica efectiva.",
    incorrectas: [
      "El músculo es estirado pasivamente por el antagonista hasta alcanzar su límite elástico.",
      "El nervio motor deja de enviar impulsos debido a un bloqueo por frío extremo."
    ]
  },
  {
    enunciado: "La elasticidad muscular es la propiedad que permite al tejido:",
    correcta: "Recuperar su forma y longitud original tras cesar la fuerza de deformación.",
    incorrectas: [
      "Alcanzar la máxima longitud posible sin romperse bajo carga estática.",
      "Generar fuerza concéntrica a una velocidad constante."
    ]
  },
  {
    enunciado: "¿Qué enzima hidroliza la acetilcolina en la hendidura sináptica para permitir la repolarización de la placa motora?",
    correcta: "Acetilcolinesterasa.",
    incorrectas: [
      "Miosín-ATPasa.",
      "Creatín-fosfoquinasa."
    ]
  },
  {
    enunciado: "El 'tono muscular' se mantiene de forma refleja mediante un arco bi-neuronal que depende principalmente de:",
    correcta: "La actividad tónica de los husos neuromusculares y el bucle gamma.",
    incorrectas: [
      "La voluntad consciente del sujeto desde la corteza prefrontal.",
      "La concentración de glucógeno en el líquido intersticial."
    ]
  },
  {
    enunciado: "En un análisis kinesiológico, ¿qué función cumple un músculo fijador?",
    correcta: "Inmoviliza un segmento óseo para proporcionar una base sólida sobre la cual otro músculo pueda actuar.",
    incorrectas: [
      "Realiza el movimiento de retorno a la posición anatómica inicial.",
      "Produce la energía elástica necesaria para el ciclo estiramiento-acortamiento."
    ]
  },
  {
    enunciado: "La miocardiopatía hipertrófica en el sistema muscular cardíaco se diferencia de la hipertrofia del deportista en que:",
    correcta: "Presenta una desorganización de los miocardiocitos y fibrosis, aumentando el riesgo de arritmias fatales.",
    incorrectas: [
      "Es una adaptación reversible tras un periodo de reposo absoluto de tres semanas.",
      "Solo afecta a los músculos de las piernas y no al ventrículo izquierdo."
    ]
  },
  {
    enunciado: "¿Qué tipo de fibras musculares presentan una mayor actividad de la enzima succinato deshidrogenasa (SDH)?",
    correcta: "Fibras de Tipo I y Tipo IIa (oxidativas).",
    incorrectas: [
      "Fibras de Tipo IIb (puramente glucolíticas).",
      "Fibras musculares lisas de los vasos sanguíneos."
    ]
  },
  {
    enunciado: "La 'viscosidad' muscular es una propiedad que:",
    correcta: "Genera una resistencia interna al movimiento debido al rozamiento de los fluidos y componentes estructurales.",
    incorrectas: [
      "Permite que el músculo se pegue al hueso con más fuerza durante el esfuerzo.",
      "Aumenta la velocidad de acortamiento al disminuir la temperatura muscular."
    ]
  },
  {
    enunciado: "En una contracción excéntrica, el número de puentes cruzados unidos es mayor que en la concéntrica porque:",
    correcta: "La fuerza externa fuerza el desenganche mecánico de las cabezas de miosina, aumentando la rigidez estructural.",
    incorrectas: [
      "Se consume el doble de ATP por cada ciclo de contracción.",
      "El calcio desaparece del sarcómero durante el estiramiento."
    ]
  },
  {
    enunciado: "El músculo diafragma es el principal motor de la inspiración. Su inervación depende del:",
    correcta: "Nervio frénico (procedente del plexo cervical C3-C5).",
    incorrectas: [
      "Nervio vago (X par craneal).",
      "Nervio accesorio (XI par craneal)."
    ]
  },
  {
    enunciado: "La 'atrofia por denervación' se produce cuando:",
    correcta: "Se interrumpe la conexión nerviosa, perdiendo el efecto trófico de la motoneurona sobre la fibra muscular.",
    incorrectas: [
      "El alumno no realiza ejercicio de fuerza durante más de tres días.",
      "Se agota la glucosa sanguínea durante un maratón escolar."
    ]
  },
  {
    enunciado: "El complejo de proteínas distrofina-glucoproteína tiene como misión:",
    correcta: "Transmitir la fuerza de la contracción del sarcómero hacia el endomisio y el tendón.",
    incorrectas: [
      "Sintetizar nuevas fibras musculares a partir de los aminoácidos del plasma.",
      "Regular el paso de potasio a través de los túbulos T."
    ]
  },
  {
    enunciado: "Las fibras musculares de Tipo IIb (rápidas) se fatigan rápidamente debido a:",
    correcta: "Su baja capacidad oxidativa y la rápida acumulación de hidrogeniones ($H^{+}$) que acidifican el medio.",
    incorrectas: [
      "Su incapacidad para utilizar el glucógeno como fuente de energía.",
      "La falta de receptores de acetilcolina en su membrana plasmática."
    ]
  },
  {
    enunciado: "En la fase de relajación muscular, ¿qué mecanismo transporta el calcio de vuelta al retículo sarcoplásmico?",
    correcta: "La bomba SERCA (un transporte activo que consume ATP).",
    incorrectas: [
      "La difusión pasiva simple a través de canales de fuga de magnesio.",
      "La presión osmótica ejercida por las proteínas plasmáticas."
    ]
  },
  {
    enunciado: "Un músculo con una organización de fibras 'fusiforme' está diseñado biomecánicamente para:",
    correcta: "Lograr grandes amplitudes de movimiento y altas velocidades de contracción.",
    incorrectas: [
      "Soportar cargas extremas con muy poco desplazamiento segmentario.",
      "Ser extremadamente resistente a las roturas fibrilares traumáticas."
    ]
  },
  {
    enunciado: "La 'contractura muscular' se define fisiológicamente como:",
    correcta: "Un estado de contracción involuntaria y persistente de un grupo de fibras, con isquemia local y dolor.",
    incorrectas: [
      "La rotura total de la fascia muscular con salida del vientre muscular.",
      "El aumento del tono muscular propio de un calentamiento óptimo."
    ]
  },
  {
    enunciado: "Los túbulos transversos (Túbulos T) son invaginaciones del sarcolema cuya función es:",
    correcta: "Conducir el potencial de acción hacia el interior de la fibra para alcanzar las cisternas del retículo.",
    incorrectas: [
      "Eliminar el exceso de ácido láctico hacia el sistema linfático.",
      "Almacenar triglicéridos para el metabolismo aeróbico de larga duración."
    ]
  },
  {
    enunciado: "¿Qué ocurre con el pH muscular durante un esfuerzo anaeróbico láctico intenso en la clase de EF?",
    correcta: "Desciende (acidosis), lo que inhibe la enzima fosfofructoquinasa y la afinidad del calcio por la troponina.",
    incorrectas: [
      "Aumenta (alcalosis), facilitando una contracción más vigorosa y eterna.",
      "Se mantiene neutro gracias al efecto tampón de la hemoglobina ósea."
    ]
  },
  {
    enunciado: "El músculo Psoas-Iliaco, desde el punto de vista de la salud postural, suele presentar:",
    correcta: "Tendencia al acortamiento, provocando una anteversión pélvica e hiperlordosis lumbar.",
    incorrectas: [
      "Tendencia a la debilidad extrema, provocando una rectificación de la columna dorsal.",
      "Una estructura puramente de fibras blancas que no influye en la postura."
    ]
  },
  {
    enunciado: "La fatiga sináptica se produce técnicamente por:",
    correcta: "El agotamiento de las vesículas de neurotransmisor ante estímulos de alta frecuencia y duración prolongada.",
    incorrectas: [
      "La falta de aire en el gimnasio durante la explicación teórica.",
      "La desaparición de los huesos sesamoideos por el roce muscular."
    ]
  },
  {
    enunciado: "Un músculo agonista es aquel que:",
    correcta: "Es el principal responsable de realizar el movimiento deseado mediante su contracción activa.",
    incorrectas: [
      "Se relaja para permitir que el movimiento ocurra sin interferencias.",
      "Actúa solo si el profesor de Educación Física da la orden verbal."
    ]
  },
  {
    enunciado: "La mioglobina se diferencia de la hemoglobina en que:",
    correcta: "Es monomérica (una sola cadena) y tiene una afinidad por el oxígeno mucho más alta.",
    incorrectas: [
      "Solo se encuentra en el plasma sanguíneo y no dentro del músculo.",
      "Transporta glucosa en lugar de oxígeno."
    ]
  },
  {
    enunciado: "El 'calambre muscular' se asocia frecuentemente con:",
    correcta: "Una hiperexcitabilidad de las motoneuronas alfa debido a fatiga y desequilibrios electrolíticos.",
    incorrectas: [
      "El exceso de estiramientos pasivos realizados en el calentamiento.",
      "La ingestión de demasiada vitamina C antes del ejercicio."
    ]
  },
  {
    enunciado: "La arquitectura muscular de tipo 'circumpenniforme' es característica de:",
    correcta: "Músculos con un tendón central y fibras convergiendo desde todas las direcciones (ej. el tibial anterior).",
    incorrectas: [
      "Músculos circulares que cierran orificios (ej. orbicular de los labios).",
      "Músculos en forma de abanico con un origen muy ancho (ej. pectoral mayor)."
    ]
  },
  {
    enunciado: "En el marco de la LOMLOE, el conocimiento del sistema muscular permite al alumno:",
    correcta: "Gestionar su propia higiene postural y entender las descompensaciones entre agonistas y antagonistas.",
    incorrectas: [
      "Realizar diagnósticos médicos de roturas fibrilares en el patio.",
      "Prescribir fármacos anabolizantes para mejorar el rendimiento escolar."
    ]
  },
  {
    enunciado: "La sumación espacial de unidades motoras consiste en:",
    correcta: "Aumentar la fuerza total mediante el reclutamiento progresivo de un mayor número de unidades motoras.",
    incorrectas: [
      "Aumentar la fuerza mediante el crecimiento del tamaño del cerebro.",
      "Hacer que el músculo ocupe más espacio físico en el brazo."
    ]
  }
];