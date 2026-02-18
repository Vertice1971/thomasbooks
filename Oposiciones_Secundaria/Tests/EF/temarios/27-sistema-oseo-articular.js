// -27-sistema-oseo-articular.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué proceso fisiológico se encarga de la resorción de la matriz ósea envejecida para permitir su renovación constante mediante la actividad de los osteoclastos?",
    correcta: "Remodelación ósea (acoplamiento formación-resorción).",
    incorrectas: ["Osificación endocondral primaria.", "Calcificación metastásica por hipercalcemia."]
  },
  {
    enunciado: "En la arquitectura de un hueso largo, la zona de transición entre la diáfisis y la epífisis, donde se localiza el cartílago de crecimiento en adolescentes, es:",
    correcta: "La metáfisis.",
    incorrectas: ["El periostio fibroso.", "El endostio medular."]
  },
  {
    enunciado: "Las articulaciones de tipo 'Sínfisis' (como los discos intervertebrales) se clasifican funcionalmente como:",
    correcta: "Anfiartrosis (unión por fibrocartílago con movilidad limitada).",
    incorrectas: ["Sinartrosis (articulaciones fijas por sutura ósea).", "Diartrosis (articulaciones de gran movilidad con cápsula sinovial)."]
  },
  {
    enunciado: "¿Qué ligamento de la rodilla es el principal responsable de evitar el desplazamiento anterior de la tibia respecto al fémur?",
    correcta: "Ligamento cruzado anterior (LCA).",
    incorrectas: ["Ligamento colateral medial.", "Ligamento cruzado posterior (LCP)."]
  },
  {
    enunciado: "La 'Ley de Wolff' postula que el hueso se remodela en respuesta a las cargas mecánicas. En Educación Física, esto implica que:",
    correcta: "Los impactos controlados y la tracción muscular aumentan la densidad mineral ósea mediante el estímulo osteoblástico.",
    incorrectas: ["El reposo prolongado es el mejor método para fortalecer la cortical ósea.", "La natación es el deporte más eficaz para prevenir la osteoporosis debido a la falta de impacto."]
  },
  {
    enunciado: "¿Cuál es la función biomecánica de los meniscos en la articulación de la rodilla?",
    correcta: "Aumentar la congruencia articular, distribuir las cargas y absorber impactos mecánicos.",
    incorrectas: ["Actuar como el principal reservorio de calcio para la contracción muscular.", "Unir el tendón de los cuádriceps con la tuberosidad anterior de la tibia."]
  },
  {
    enunciado: "La 'tríada de la mujer atleta', riesgo potencial en Secundaria, incluye osteoporosis precoz debido a:",
    correcta: "Un déficit energético que provoca amenorrea y bajos niveles de estrógenos, afectando a la mineralización.",
    incorrectas: ["Un exceso de consumo de lácteos asociado a un entrenamiento de fuerza máxima.", "La realización de ejercicios de flexibilidad estática durante más de 60 minutos."]
  },
  {
    enunciado: "El cartílago hialino articular es avascular y aneural. ¿Cómo se nutre principalmente?",
    correcta: "Por difusión de nutrientes desde el líquido sinovial mediante procesos de compresión-descompresión (imbibición).",
    incorrectas: ["A través de los vasos sanguíneos que penetran desde el periostio externo.", "Mediante el transporte activo de glucosa desde la médula ósea roja."]
  },
  {
    enunciado: "En la columna vertebral, la escoliosis se define técnicamente como:",
    correcta: "Una desviación lateral del raquis en el plano frontal asociada a una rotación vertebral.",
    incorrectas: ["Un aumento de la curvatura dorsal en el plano sagital.", "Una inversión de la lordosis lumbar por debilidad del psoas."]
  },
  {
    enunciado: "¿Qué componente de la matriz ósea proporciona la resistencia a la tracción y la flexibilidad necesaria para evitar fracturas por fragilidad?",
    correcta: "Las fibras de colágeno (principalmente tipo I).",
    incorrectas: ["Los cristales de hidroxiapatita.", "Las sales de carbonato de magnesio."]
  },
  {
    enunciado: "Las articulaciones 'Enartrosis' (como la coxofemoral) permiten movimientos en:",
    correcta: "Tres ejes (triaxiales): flexión/extensión, abducción/aducción y rotación.",
    incorrectas: ["Un solo eje (uniaxiales), realizando únicamente flexo-extensión.", "Dos ejes (biaxiales), impidiendo la rotación sobre el eje longitudinal."]
  },
  {
    enunciado: "El periostio es una membrana esencial para el hueso porque:",
    correcta: "Contiene células osteogénicas para el crecimiento en grosor y terminaciones nerviosas sensoriales de dolor.",
    incorrectas: ["Es el lugar donde se produce la hematopoyesis de forma exclusiva.", "Recubre las superficies articulares para reducir la fricción entre huesos."]
  },
  {
    enunciado: "En adolescentes, las fracturas 'en tallo verde' son comunes debido a:",
    correcta: "La mayor elasticidad del hueso inmaduro y un periostio más grueso y resistente que en adultos.",
    incorrectas: ["La falta de mineralización por una dieta deficiente en vitamina C.", "La debilidad de las fibras de colágeno ante fuerzas de torsión."]
  },
  {
    enunciado: "La función de los ligamentos amarillos en la columna vertebral es:",
    correcta: "Ayudar a preservar la postura erguida y proteger el canal medular limitando la flexión excesiva.",
    incorrectas: ["Fijar las costillas a las apófisis transversas para facilitar la respiración.", "Permitir la rotación de la primera vértebra cervical sobre la segunda."]
  },
  {
    enunciado: "¿Qué patología del crecimiento óseo se caracteriza por una inflamación de la tuberosidad anterior de la tibia por tracción del tendón rotuliano?",
    correcta: "Enfermedad de Osgood-Schlatter.",
    incorrectas: ["Enfermedad de Sever (osteocondritis del calcáneo).", "Enfermedad de Scheuermann (cifosis juvenil)."]
  },
  {
    enunciado: "La estabilidad articular depende de factores estáticos (ligamentos) y dinámicos. ¿Cuál es el principal factor dinámico?",
    correcta: "La activación coordinada de la musculatura periarticular (estabilidad activa).",
    incorrectas: ["La viscosidad del líquido sinovial a bajas temperaturas.", "La presión atmosférica externa sobre la cápsula fibrosa."]
  },
  {
    enunciado: "Los huesos cortos (como los del carpo) tienen como función principal:",
    correcta: "Proporcionar estabilidad y soporte con una movilidad limitada y gran resistencia a la presión.",
    incorrectas: ["Actuar como palancas de largo alcance para maximizar la velocidad gestual.", "Proteger órganos vitales mediante grandes cavidades internas."]
  },
  {
    enunciado: "La 'Osificación Endocondral' es el proceso mediante el cual:",
    correcta: "El tejido óseo sustituye a un modelo previo de cartílago hialino.",
    incorrectas: ["El hueso se forma directamente a partir de una membrana de tejido conectivo.", "El hueso se degrada por falta de estímulo mecánico."]
  },
  {
    enunciado: "Un riesgo biomecánico de la 'hiperlordosis lumbar' mantenida en Secundaria es:",
    correcta: "El aumento de la fuerza de cizalla sobre L5-S1 y el riesgo de espondilólisis.",
    incorrectas: ["La reducción del volumen sistólico por compresión cardíaca.", "El crecimiento asimétrico de los huesos del carpo."]
  },
  {
    enunciado: "La cápsula articular fibrosa posee receptores de Ruffini que informan sobre:",
    correcta: "La posición articular estática y los límites del rango de movimiento.",
    incorrectas: ["La concentración de lactato en el líquido intersticial.", "La temperatura de la piel sobre la articulación."]
  },
  {
    enunciado: "¿Qué tipo de hueso es la rótula según su localización y función mecánica?",
    correcta: "Hueso sesamoideo (mejora el brazo de palanca del cuádriceps).",
    incorrectas: ["Hueso neumático (contiene cavidades aéreas).", "Hueso plano (protección de médula ósea)."]
  },
  {
    enunciado: "La médula ósea roja, responsable de la hematopoyesis, se localiza principalmente en:",
    correcta: "El tejido óseo esponjoso (trabecular) de las epífisis y huesos planos.",
    incorrectas: ["La cavidad medular de la diáfisis de los huesos largos adultos.", "El espacio intermembrana de los discos intervertebrales."]
  },
  {
    enunciado: "Un movimiento de 'Eversión' del pie combina técnicamente:",
    correcta: "Abducción, pronación y flexión dorsal.",
    incorrectas: ["Aducción, supinación y flexión plantar.", "Rotación interna con inversión plantar."]
  },
  {
    enunciado: "En la LOMLOE, el estudio del sistema óseo debe orientarse a prevenir patologías mediante:",
    correcta: "La higiene postural, la ergonomía y la práctica de ejercicio con carga gravitatoria.",
    incorrectas: ["La inmovilidad absoluta para evitar el desgaste del cartílago.", "La eliminación de la ingesta de vitamina D en el alumnado."]
  },
  {
    enunciado: "El disco intervertebral actúa como amortiguador gracias a:",
    correcta: "El núcleo pulposo, que redistribuye las presiones hacia el anillo fibroso.",
    incorrectas: ["La presencia de osteocitos activos en su interior.", "La rigidez de sus placas terminales de calcio puro."]
  },
  {
    enunciado: "La 'SINOVITIS' es una patología articular que consiste en:",
    correcta: "La inflamación de la membrana sinovial con un derrame excesivo de líquido.",
    incorrectas: ["La rotura del ligamento cruzado anterior con inestabilidad.", "La fusión de dos huesos tras una fractura mal curada."]
  },
  {
    enunciado: "Las suturas del cráneo son un ejemplo biomecánico de:",
    correcta: "Sinartrosis (articulaciones fibrosas inmóviles).",
    incorrectas: ["Trocleartrosis (articulaciones en bisagra).", "Selares (articulaciones en silla de montar)."]
  },
  {
    enunciado: "¿Qué hormona estimula la absorción de calcio en el intestino, siendo clave para la mineralización ósea?",
    correcta: "Vitamina D activa (Calcitriol).",
    incorrectas: ["Adrenalina.", "Glucagón."]
  },
  {
    enunciado: "La 'Aducción' es un movimiento segmentario que:",
    correcta: "Acerca el miembro o segmento a la línea media del cuerpo en el plano frontal.",
    incorrectas: ["Aleja el segmento de la línea media hacia el exterior.", "Gira el segmento sobre su eje longitudinal hacia fuera."]
  },
  {
    enunciado: "Un factor que limita la movilidad articular de origen óseo es:",
    correcta: "El choque de las superficies óseas (ej. el olécranon en la fosa olecraniana).",
    incorrectas: ["La viscosidad del citoplasma de las neuronas motoras.", "El color de la indumentaria deportiva del alumno."]
  },
  {
    enunciado: "El raquis cervical tiene su mayor rango de rotación en la articulación:",
    correcta: "Atlanto-axial (C1-C2).",
    incorrectas: ["Lumbosacra (L5-S1).", "Cervicodorsal (C7-T1)."]
  },
  {
    enunciado: "La 'Espondilólisis' es una patología ósea que consiste en:",
    correcta: "Una fractura por fatiga o estrés en la 'pars interarticularis' de la vértebra.",
    incorrectas: ["La inflamación de los discos intervertebrales por infección.", "El crecimiento de un tercer fémur de forma supernumeraria."]
  },
  {
    enunciado: "¿Qué función tiene el colágeno en la matriz ósea?",
    correcta: "Aportar flexibilidad y resistencia ante fuerzas de tracción y torsión.",
    incorrectas: ["Aportar dureza y resistencia ante la compresión pura.", "Almacenar energía química para la contracción muscular."]
  },
  {
    enunciado: "La articulación de la muñeca (radiocarpiana) es una articulación de tipo:",
    correcta: "Condílea (biaxial).",
    incorrectas: ["Trocoide (uniaxial).", "Enartrosis (triaxial)."]
  },
  {
    enunciado: "El 'Valgo de rodilla' (genu valgum) se identifica visualmente por:",
    correcta: "Una angulación interna de las rodillas (forma de 'X').",
    incorrectas: ["Una angulación externa de las rodillas (forma de '()').", "Una hiperextensión de la articulación de la rodilla."]
  },
  {
    enunciado: "La higiene postural escolar busca evitar el 'acuñamiento vertebral', que es:",
    correcta: "La deformación de los cuerpos vertebrales por presiones asimétricas durante el crecimiento.",
    incorrectas: ["La pérdida de calcio por falta de exposición solar.", "El crecimiento de vello sobre la columna vertebral."]
  },
  {
    enunciado: "¿Qué vitamina es esencial para la síntesis de colágeno en la matriz ósea y ligamentos?",
    correcta: "Vitamina C.",
    incorrectas: ["Vitamina B12.", "Vitamina K."]
  },
  {
    enunciado: "La 'Artrosis' se diferencia de la 'Artritis' en que la primera es:",
    correcta: "Un proceso degenerativo crónico del cartílago articular por desgaste.",
    incorrectas: ["Una inflamación aguda de origen infeccioso o autoinmune.", "Una fractura ósea traumática con desplazamiento."]
  },
  {
    enunciado: "En la mecánica del pie, el 'arco plantar' sirve para:",
    correcta: "Distribuir el peso y actuar como muelle elástico en la marcha y el salto.",
    incorrectas: ["Enfriar la planta del pie mediante la circulación de aire.", "Aumentar el peso total del individuo para mayor estabilidad."]
  },
  {
    enunciado: "La 'Sincondrosis' es una articulación unida temporal o permanentemente por:",
    correcta: "Cartílago hialino (ej. placas epifisarias de crecimiento).",
    incorrectas: ["Líquido sinovial a muy alta presión.", "Tejido fibroso denso cicatricial."]
  }
];
