// -25-sistema-nervioso.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué estructura del sistema nervioso central es la responsable de la coordinación de los movimientos balísticos, el ajuste fino de la fuerza y el aprendizaje de secuencias motoras complejas?",
    correcta: "Los ganglios basales (especialmente el cuerpo estriado y la sustancia negra).",
    incorrectas: ["El área motora suplementaria del lóbulo parietal.", "El núcleo geniculado lateral del tálamo."]
  },
  {
    enunciado: "En la transmisión del impulso nervioso, ¿cuál es el mecanismo iónico responsable de la fase de repolarización del potencial de acción?",
    correcta: "La apertura de los canales de potasio (K+) dependientes de voltaje y su salida al espacio extracelular.",
    incorrectas: ["La entrada masiva de iones sodio (Na+) a través de canales de fuga.", "El cierre de las bombas de calcio en el retículo sarcoplásmico."]
  },
  {
    enunciado: "El cerebelo recibe información propioceptiva inconsciente para regular el equilibrio. ¿A través de qué tractos espinales llega esta información?",
    correcta: "Tractos espinocerebelosos dorsal (de Flechsig) y ventral (de Gowers).",
    incorrectas: ["Fascículos de Grácil y Cuneiforme del cordón posterior.", "Tractos corticoespinales laterales y anteriores."]
  },
  {
    enunciado: "La sinapsis química presenta un 'retardo sináptico' que no existe en la eléctrica. Este retraso se debe principalmente a:",
    correcta: "El tiempo necesario para la entrada de Ca2+ y la liberación por exocitosis de los neurotransmisores.",
    incorrectas: ["La baja velocidad de conducción de los axones amielínicos.", "La resistencia eléctrica de la membrana postsináptica."]
  },
  {
    enunciado: "¿Qué función desempeñan las células de Schwann en la regeneración del sistema nervioso periférico?",
    correcta: "Forman los tubos de regeneración que guían el crecimiento de los axones dañados hacia sus efectores.",
    incorrectas: ["Actúan como macrófagos eliminando la barrera hematoencefálica.", "Producen líquido cefalorraquídeo para amortiguar el nervio."]
  },
  {
    enunciado: "El reflejo miotático (o de estiramiento) es monosináptico. ¿Qué receptores sensoriales y qué fibras aferentes intervienen directamente?",
    correcta: "Husos neuromusculares y fibras aferentes primarias tipo Ia.",
    incorrectas: ["Órganos tendinosos de Golgi y fibras tipo Ib.", "Corpúsculos de Pacini y fibras tipo II."]
  },
  {
    enunciado: "¿Qué neurotransmisor es el principal mediador de la unión neuromuscular en el sistema somático?",
    correcta: "Acetilcolina (ACh).",
    incorrectas: ["Noradrenalina (NA).", "GABA (ácido gamma-aminobutírico)."]
  },
  {
    enunciado: "La fatiga central, a diferencia de la periférica, se caracteriza neurofisiológicamente por:",
    correcta: "Una reducción en la frecuencia de descarga de las motoneuronas alfa debido a cambios en la concentración de serotonina y dopamina central.",
    incorrectas: ["La acumulación de fosfatos inorgánicos en el citosol de la fibra muscular.", "El agotamiento de las reservas de glucógeno en el retículo sarcoplásmico."]
  },
  {
    enunciado: "El sistema gamma (motoneuronas gamma) tiene una función crítica en el control motor consistente en:",
    correcta: "Ajustar la sensibilidad de los husos neuromusculares durante la contracción para mantener el flujo de información propioceptiva.",
    incorrectas: ["Provocar la contracción de las fibras extrafusales para generar fuerza máxima.", "Inhibir la respuesta del reflejo de retirada ante estímulos dolorosos."]
  },
  {
    enunciado: "Durante una situación de competición deportiva de alta intensidad, el sistema nervioso simpático produce:",
    correcta: "Midriasis pupilar, broncodilatación y redistribución del flujo sanguíneo hacia los músculos esqueléticos.",
    incorrectas: ["Miosis pupilar, aumento del peristaltismo y secreción de insulina.", "Vasoconstricción coronaria y descenso del gasto cardíaco."]
  },
  {
    enunciado: "¿Qué zona de la corteza cerebral se encarga de la planificación y programación de movimientos complejos antes de que se ejecuten?",
    correcta: "Área premotora y área motora suplementaria (Área 6 de Brodmann).",
    incorrectas: ["Corteza somatosensorial primaria (Áreas 1, 2 y 3).", "Corteza visual primaria (Área 17)."]
  },
  {
    enunciado: "El periodo refractario relativo es aquel momento del potencial de acción en el que:",
    correcta: "Solo un estímulo supraumbral puede generar un nuevo potencial debido a la hiperpolarización residual.",
    incorrectas: ["Es imposible generar un potencial de acción sin importar la intensidad del estímulo.", "La neurona está en reposo absoluto y no responde a estímulos químicos."]
  },
  {
    enunciado: "La propiocepción consciente, que informa sobre la posición articular al alumno, asciende por la médula a través de:",
    correcta: "El sistema del lemnisco medial (cordones posteriores).",
    incorrectas: ["El sistema anterolateral (tractos espinotalámicos).", "Los tractos rubroespinales de la formación reticular."]
  },
  {
    enunciado: "¿Qué efecto tiene la mielinización sobre la constante de tiempo y de espacio de la membrana axonal?",
    correcta: "Aumenta la resistencia de la membrana, permitiendo que el potencial viaje más lejos y más rápido (conducción saltatoria).",
    incorrectas: ["Reduce la capacitancia de la membrana haciendo que el impulso se detenga en cada nodo.", "Aumenta la permeabilidad al sodio en toda la longitud del axón."]
  },
  {
    enunciado: "El reflejo miotático inverso (inhibición autogénica) está mediado por el Órgano Tendinoso de Golgi. ¿Cuál es su función técnica?",
    correcta: "Detectar la tensión excesiva y provocar la relajación del músculo agonista para evitar avulsiones tendinosas.",
    incorrectas: ["Detectar la longitud muscular y provocar la contracción inmediata del antagonista.", "Aumentar la fuerza de contracción cuando la carga es muy pesada."]
  },
  {
    enunciado: "¿Qué estructura del tronco encefálico es fundamental para el control del tono muscular antigravitatorio y los reflejos de enderezamiento?",
    correcta: "La formación reticular y los núcleos vestibulares.",
    incorrectas: ["La glándula pineal.", "El cuerpo calloso."]
  },
  {
    enunciado: "La plasticidad neuronal durante el aprendizaje de una nueva habilidad deportiva en Secundaria implica:",
    correcta: "El fortalecimiento de sinapsis existentes (Potenciación a Largo Plazo) y la creación de nuevas espinas dendríticas.",
    incorrectas: ["La sustitución de neuronas motoras por células de glía macrofágicas.", "El aumento del volumen total del cerebro debido al ejercicio."]
  },
  {
    enunciado: "En la jerarquía del control motor, ¿cuál es el papel del tálamo?",
    correcta: "Actuar como estación de relevo y filtro sensorial, integrando la información antes de enviarla a la corteza.",
    incorrectas: ["Generar de forma autónoma los patrones de marcha humana.", "Almacenar los programas motores de forma permanente."]
  },
  {
    enunciado: "La dopamina producida en la sustancia negra es vital para:",
    correcta: "Facilitar el inicio del movimiento y regular la vía directa de los ganglios basales.",
    incorrectas: ["Provocar la contracción del músculo liso bronquial.", "Inhibir el sueño durante las fases de vigilia."]
  },
  {
    enunciado: "La sumación espacial en una neurona ocurre cuando:",
    correcta: "Múltiples terminales presinápticos liberan neurotransmisor simultáneamente sobre distintas zonas de la misma neurona.",
    incorrectas: ["Un solo terminal libera neurotransmisor a una frecuencia muy alta.", "La neurona se desplaza físicamente hacia el estímulo."]
  },
  {
    enunciado: "¿Qué nervio craneal es el principal responsable de la regulación parasimpática del corazón y los pulmones durante el ejercicio?",
    correcta: "Nervio Vago (X par craneal).",
    incorrectas: ["Nervio Glosofaríngeo (IX par).", "Nervio Accesorio (XI par)."]
  },
  {
    enunciado: "En el control del equilibrio dinámico, los conductos semicirculares del oído interno detectan:",
    correcta: "Aceleraciones angulares de la cabeza en los tres planos del espacio.",
    incorrectas: ["Aceleraciones lineales y la posición de la cabeza respecto a la gravedad.", "La presión sonora de los gritos en el pabellón."]
  },
  {
    enunciado: "La 'barrera hematoencefálica' protege al SNC, pero durante el ejercicio intenso puede verse alterada por:",
    correcta: "El aumento de la temperatura central y los cambios extremos en la osmolaridad plasmática.",
    incorrectas: ["El uso de ropa deportiva sintética.", "La práctica de ejercicios de flexibilidad estática."]
  },
  {
    enunciado: "¿Cuál es la función de los astrocitos en el tejido nervioso?",
    correcta: "Sostén metabólico, regulación del potasio extracelular y formación de la barrera hematoencefálica.",
    incorrectas: ["Generar potenciales de acción a larga distancia.", "Mielinizar los axones del sistema periférico."]
  },
  {
    enunciado: "El potencial postsináptico inhibidor (EPSI) se produce habitualmente por:",
    correcta: "La apertura de canales de cloro (Cl-) o potasio (K+), provocando una hiperpolarización de la membrana.",
    incorrectas: ["La apertura de canales de sodio, acercando el potencial al umbral.", "El cierre total de todos los canales iónicos de la neurona."]
  },
  {
    enunciado: "La unidad motora de tipo 'FF' (Fast-Fatigable) se caracteriza por:",
    correcta: "Tener un soma neuronal grande, alta velocidad de conducción y generar mucha fuerza pero fatigarse rápido.",
    incorrectas: ["Inervar pocas fibras musculares de tipo lento y oxidativo.", "Ser reclutada siempre en primer lugar según el principio del tamaño."]
  },
  {
    enunciado: "El concepto de 'Homúnculo Motor' de Penfield describe:",
    correcta: "La representación desproporcionada de las partes del cuerpo en la corteza según la complejidad de su control motor.",
    incorrectas: ["La evolución del hombre desde el sedentarismo al deporte.", "Un tipo de lesión medular que afecta solo a la cara."]
  },
  {
    enunciado: "La técnica de 'Visualización' en psicología deportiva activa:",
    correcta: "Las mismas áreas corticales motoras y suplementarias que la ejecución real del movimiento.",
    incorrectas: ["Únicamente el lóbulo occipital sin afectar al sistema motor.", "El sistema parasimpático para reducir el gasto energético a cero."]
  },
  {
    enunciado: "La 'inhibición recíproca' es un mecanismo que garantiza que:",
    correcta: "Cuando un músculo agonista se contrae, su antagonista se relaja para permitir el movimiento fluido.",
    incorrectas: ["Ambos músculos, agonista y antagonista, se bloqueen para proteger la articulación.", "El cerebro deje de enviar señales a los músculos durante el descanso."]
  },
  {
    enunciado: "El sistema nervioso periférico entérico es responsable de:",
    correcta: "La regulación autónoma del aparato digestivo, funcionando a menudo de manera independiente al SNC.",
    incorrectas: ["El control de la musculatura estriada de las piernas.", "La percepción visual de las trayectorias de los balones."]
  },
  {
    enunciado: "¿Qué ocurre con la velocidad de conducción nerviosa ante un aumento de la temperatura corporal (calentamiento)?",
    correcta: "Aumenta significativamente, mejorando la coordinación y el tiempo de reacción.",
    incorrectas: ["Disminuye debido a la mayor resistencia de los axones al calor.", "Se mantiene constante ya que es un parámetro genético inamovible."]
  },
  {
    enunciado: "La microglía tiene una función esencial en el sistema nervioso consistente en:",
    correcta: "Actuar como sistema inmunitario celular, eliminando restos y protegiendo contra infecciones.",
    incorrectas: ["Sintetizar la vaina de mielina en el cerebro.", "Producir glucosa para las neuronas motoras."]
  },
  {
    enunciado: "El 'arco reflejo' más simple consta de:",
    correcta: "Receptor, neurona aferente, sinapsis (o interneurona), neurona eferente y efector.",
    incorrectas: ["Cerebro, médula espinal y músculo únicamente.", "Ojo, nervio óptico y músculo del brazo."]
  },
  {
    enunciado: "La noradrenalina actúa en los receptores beta-adrenérgicos del corazón para:",
    correcta: "Aumentar la frecuencia cardíaca (cronotropismo) y la fuerza de contracción (inotropismo).",
    incorrectas: ["Reducir el gasto cardíaco y favorecer el sueño.", "Provocar la relajación total del miocardio."]
  },
  {
    enunciado: "La fatiga sináptica puede ocurrir tras ejercicios de alta intensidad debido a:",
    correcta: "El agotamiento de las vesículas de neurotransmisor en el terminal presináptico.",
    incorrectas: ["La rotura de la vaina de mielina por el exceso de velocidad.", "El aumento del número de neuronas en la médula."]
  },
  {
    enunciado: "¿Qué parte del sistema nervioso central regula la temperatura corporal y la sed durante el ejercicio?",
    correcta: "El hipotálamo.",
    incorrectas: ["El bulbo raquídeo.", "El cerebelo."]
  },
  {
    enunciado: "La ley de Dale (clásica) en neurofisiología sugería que:",
    correcta: "Cada neurona libera el mismo tipo de neurotransmisor en todas sus terminaciones sinápticas.",
    incorrectas: ["El cerebro solo funciona al 10% de su capacidad.", "Las neuronas no pueden comunicarse entre sí."],
    imagen: ""
  },
  {
    enunciado: "La 'propiocepción' se diferencia de la 'exterocepción' en que la primera informa sobre:",
    correcta: "El estado interno del cuerpo, la posición de los segmentos y la tensión muscular.",
    incorrectas: ["Los estímulos del mundo exterior como la luz o el sonido.", "La temperatura del agua de la piscina."]
  },
  {
    enunciado: "En la LOMLOE, el conocimiento del sistema nervioso se aplica para entender:",
    correcta: "La relación entre la salud mental, el control del estrés y la práctica de actividad física.",
    incorrectas: ["La anatomía quirúrgica de la columna vertebral.", "La clasificación de los fármacos psicoactivos."]
  },
  {
    enunciado: "El potencial de membrana en reposo está determinado principalmente por la permeabilidad a qué ion?",
    correcta: "Potasio (K+).",
    incorrectas: ["Sodio (Na+).", "Calcio (Ca2+)."]
  }
];