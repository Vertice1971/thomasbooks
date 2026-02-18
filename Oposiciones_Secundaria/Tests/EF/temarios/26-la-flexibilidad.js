// -26-la-flexibilidad.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué componente del tejido conectivo intramuscular ofrece la mayor resistencia pasiva al estiramiento cuando el sarcómero se elonga más allá de su longitud de reposo?",
    correcta: "El perimisio, debido a su red de fibras de colágeno dispuestas en celosía.",
    incorrectas: ["El sarcolema, por su composición fosfolipídica elástica.", "Los puentes cruzados de miosina en estado de rigor."]
  },
  {
    enunciado: "El método de Facilitación Neuromuscular Propioceptiva (PNF) tipo 'Hold-Relax' aprovecha fundamentalmente el fenómeno de:",
    correcta: "Inhibición autogénica mediada por los órganos tendinosos de Golgi tras una contracción isométrica.",
    incorrectas: ["Inhibición recíproca por la activación de las motoneuronas gamma.", "Reflejo miotático inverso desencadenado por los husos neuromusculares."]
  },
  {
    enunciado: "En la arquitectura del tejido conectivo, la histéresis se define como:",
    correcta: "La energía disipada en forma de calor cuando un tejido viscoelástico es sometido a un ciclo de carga y descarga.",
    incorrectas: ["La capacidad de un ligamento para recuperar su longitud inicial de forma instantánea.", "El punto de ruptura estructural por deformación plástica irreversible."]
  },
  {
    enunciado: "¿Cuál es la función biomecánica de la proteína estructural titina en relación con la flexibilidad?",
    correcta: "Actuar como un muelle molecular que genera tensión pasiva y mantiene la integridad del sarcómero en el estiramiento.",
    incorrectas: ["Facilitar el deslizamiento de los filamentos de actina durante la contracción concéntrica.", "Anclar los filamentos de miosina a la línea Z de forma rígida e inextensible."]
  },
  {
    enunciado: "Durante la adolescencia, el retroceso en los niveles de flexibilidad se debe principalmente a un fenómeno de 'asincronía' consistente en:",
    correcta: "Un crecimiento longitudinal óseo más rápido que la adaptación por elongación de la unidad músculo-tendinosa.",
    incorrectas: ["Una calcificación prematura de las cápsulas articulares en las diartrosis.", "La sustitución masiva de fibras de elastina por fibras de colágeno tipo III."]
  },
  {
    enunciado: "El estiramiento estático prolongado (>60 segundos) antes de una tarea explosiva es contraindicado porque:",
    correcta: "Reduce la rigidez (stiffness) de la unidad músculo-tendinosa, disminuyendo la capacidad de transmisión de fuerza.",
    incorrectas: ["Provoca una activación excesiva de las unidades motoras tipo IIb.", "Aumenta la viscosidad del citosol dificultando el flujo de calcio."]
  },
  {
    enunciado: "¿Qué estructura es responsable de limitar el rango de movimiento (ROM) en una articulación de tipo trocoide?",
    correcta: "La configuración de las superficies óseas y la tensión de los ligamentos anulares.",
    incorrectas: ["La presión del líquido cefalorraquídeo.", "La longitud de los nervios periféricos aferentes."]
  },
  {
    enunciado: "La 'fluencia' (creep) en los tejidos blandos se observa cuando:",
    correcta: "El tejido se deforma progresivamente bajo una carga de estiramiento constante mantenida en el tiempo.",
    incorrectas: ["El tejido recupera su forma original inmediatamente tras el cese de la fuerza.", "Se produce una contracción refleja ante un estímulo nociceptivo."]
  },
  {
    enunciado: "¿Qué efecto tiene el aumento de la temperatura intratisular (calentamiento) sobre las propiedades biomecánicas del colágeno?",
    correcta: "Aumenta la extensibilidad al reducir la estabilidad de los enlaces de hidrógeno en la triple hélice.",
    incorrectas: ["Incrementa la viscosidad del perimisio dificultando el estiramiento pasivo.", "Provoca la cristalización de las proteínas de la matriz extracelular."]
  },
  {
    enunciado: "La 'tolerancia al estiramiento' (stretch tolerance) como adaptación crónica implica:",
    correcta: "Una alteración neurosensorial que permite mayores amplitudes sin un cambio real en la rigidez del tejido.",
    incorrectas: ["La adición de nuevos sarcómeros en paralelo a lo largo de toda la miofibrilla.", "La desensibilización total de los nociceptores de la cápsula articular."]
  },
  {
    enunciado: "El estiramiento balístico activa el reflejo miotático dinámico. ¿Qué fibras aferentes son las encargadas de enviar esta señal de velocidad de estiramiento?",
    correcta: "Fibras tipo Ia.",
    incorrectas: ["Fibras tipo Ib.", "Fibras amielínicas tipo C."]
  },
  {
    enunciado: "En la metodología PNF, la técnica 'CRAC' (Contract-Relax-Antagonist-Contract) añade a la inhibición autogénica:",
    correcta: "La inhibición recíproca mediante la activación del músculo opuesto al que se estira.",
    incorrectas: ["Un componente de apnea para aumentar la presión intratorácica.", "La estimulación eléctrica externa de la placa motora."]
  },
  {
    enunciado: "¿Qué componente del tejido conectivo proporciona elasticidad y capacidad de recuperación tras pequeñas deformaciones?",
    correcta: "Las fibras de elastina.",
    incorrectas: ["Los cristales de hidroxiapatita.", "Las fibras de colágeno tipo I."]
  },
  {
    enunciado: "La movilidad articular funcional depende de la 'congruencia articular'. Este término se refiere a:",
    correcta: "El grado de ajuste y contacto entre las superficies óseas que conforman la articulación.",
    incorrectas: ["La fuerza de los músculos que cruzan la articulación.", "La cantidad de glucógeno almacenado en el cartílago."]
  },
  {
    enunciado: "Un factor limitante de la flexibilidad en la flexión de la cadera con la rodilla extendida es:",
    correcta: "La insuficiencia pasiva de la musculatura isquiosural.",
    incorrectas: ["La insuficiencia activa del cuádriceps femoral.", "El choque óseo del trocánter menor con el ilion."]
  },
  {
    enunciado: "La flexibilidad 'dinámica' se manifiesta principalmente en:",
    correcta: "La capacidad de utilizar una gran amplitud articular durante movimientos ejecutados a velocidad funcional.",
    incorrectas: ["El mantenimiento de una postura extrema durante 30 segundos sin oscilaciones.", "La resistencia de los tendones a la rotura por tracción lenta."]
  },
  {
    enunciado: "Desde el punto de vista de la salud postural, el acortamiento del músculo psoas-iliaco se asocia con:",
    correcta: "Un aumento de la anteversión pélvica y de la lordosis lumbar.",
    incorrectas: ["Una rectificación de la curva cervical.", "Una rotación interna del fémur con valgo de rodilla."]
  },
  {
    enunciado: "En la evaluación de la flexibilidad, el test de 'Adams' se utiliza para:",
    correcta: "Detectar la presencia de escoliosis estructural mediante la observación de la giba costal en flexión de tronco.",
    incorrectas: ["Medir la elasticidad del cuádriceps en decúbito prono.", "Valorar la movilidad de la articulación escapulohumeral."]
  },
  {
    enunciado: "La 'relajación de tensión' (stress relaxation) describe cómo:",
    correcta: "La fuerza necesaria para mantener un tejido estirado a una longitud constante disminuye con el tiempo.",
    incorrectas: ["El músculo genera más fuerza tras ser estirado rápidamente.", "Los ligamentos se vuelven más rígidos al aumentar la carga."]
  },
  {
    enunciado: "Un estiramiento 'activo-asistido' en Secundaria requiere que el alumno:",
    correcta: "Llegue al límite de su amplitud mediante su propia fuerza y un compañero ayude a profundizar levemente.",
    incorrectas: ["Permanezca totalmente pasivo mientras el profesor fuerza la articulación.", "Realice rebotes rápidos para alcanzar la máxima extensión."]
  },
  {
    enunciado: "¿Qué estructura sinovial actúa como almohadilla para reducir la fricción entre tendones y huesos durante el movimiento?",
    correcta: "Bursa o bolsa sinovial.",
    incorrectas: ["Menisco fibrocartilaginoso.", "Ligamento colateral."]
  },
  {
    enunciado: "La flexibilidad es una capacidad 'involutiva' debido a:",
    correcta: "La progresiva deshidratación de los tejidos y el aumento de los enlaces cruzados de colágeno con la edad.",
    incorrectas: ["La pérdida de masa muscular que ocurre desde el nacimiento.", "El aumento de la velocidad de conducción nerviosa en la madurez."]
  },
  {
    enunciado: "En un estiramiento estático, ¿qué ocurre con el flujo sanguíneo intramuscular?",
    correcta: "Se reduce temporalmente debido a la compresión de los capilares por la tensión del tejido.",
    incorrectas: ["Aumenta drásticamente para suministrar oxígeno a las fibras estiradas.", "Se mantiene constante gracias a la autorregulación capilar."]
  },
  {
    enunciado: "¿Qué papel juega el 'reflejo de enderezamiento' en el trabajo de flexibilidad en equilibrio?",
    correcta: "Puede generar tensiones musculares parásitas que dificultan la relajación necesaria para el estiramiento.",
    incorrectas: ["Facilita la elongación de los músculos del cuello y tronco superior.", "Inhibe automáticamente los órganos tendinosos de Golgi."]
  },
  {
    enunciado: "La flexibilidad 'general' se diferencia de la 'especial' en que la primera:",
    correcta: "Se refiere a la movilidad de los principales sistemas articulares (columna, cadera, hombro).",
    incorrectas: ["Solo se trabaja en el calentamiento de las sesiones de atletismo.", "Es exclusiva de los alumnos con hiperlaxitud ligamentosa."]
  },
  {
    enunciado: "¿Qué técnica de estiramiento es preferible en la fase de activación de una sesión de velocidad?",
    correcta: "Movilidad articular dinámica y estiramientos activos de corta duración.",
    incorrectas: ["Estiramientos estáticos pasivos mantenidos durante 45 segundos.", "Método PNF con contracciones máximas."]
  },
  {
    enunciado: "El colágeno tipo III es más abundante en:",
    correcta: "Tejidos jóvenes o en procesos de reparación tras una lesión, siendo más elástico que el tipo I.",
    incorrectas: ["Huesos largos de adultos sanos.", "El esmalte dental."]
  },
  {
    enunciado: "La 'estabilidad articular' y la 'flexibilidad' deben trabajarse de forma equilibrada para evitar:",
    correcta: "Microtraumatismos por cizallamiento en articulaciones con exceso de rango y falta de control motor.",
    incorrectas: ["Un aumento excesivo de la densidad mineral ósea.", "La pérdida de audición por cambios en la presión interna."]
  },
  {
    enunciado: "La respiración durante los ejercicios de flexibilidad debe ser:",
    correcta: "Lenta, profunda y exhalando durante la fase de mayor estiramiento para favorecer la relajación.",
    incorrectas: ["Rápida y superficial para aumentar la activación del sistema simpático.", "Mantenida en apnea (Valsalva) para fijar la columna."]
  },
  {
    enunciado: "Un factor limitante externo de la flexibilidad es:",
    correcta: "La vestimenta restrictiva que impide el movimiento completo de los segmentos.",
    incorrectas: ["El nivel de glucemia en sangre periférica.", "La presión parcial de oxígeno en el aire ambiente."]
  },
  {
    enunciado: "La flexibilidad influye en la 'economía de carrera' al:",
    correcta: "Reducir la resistencia interna del tejido durante la fase de oscilación de la pierna.",
    incorrectas: ["Permitir una zancada tan larga que el pie contacte muy por delante del centro de gravedad.", "Aumentar el peso de los tendones para generar más inercia."]
  },
  {
    enunciado: "¿Qué se entiende por 'rango de movimiento funcional' (fROM)?",
    correcta: "La amplitud mínima necesaria para realizar las actividades de la vida diaria o deportiva con seguridad.",
    incorrectas: ["El máximo ángulo alcanzable antes de que se produzca una luxación.", "La longitud de los brazos del alumno medida en centímetros."]
  },
  {
    enunciado: "El cartílago hialino presente en las diartrosis se caracteriza por ser:",
    correcta: "Avascular y aneural, obteniendo nutrientes por difusión desde el líquido sinovial.",
    incorrectas: ["Rico en terminaciones nerviosas que alertan del estiramiento.", "Un tejido con gran capacidad de regeneración espontánea tras rotura."]
  },
  {
    enunciado: "Un exceso de flexibilidad en la musculatura isquiosural sin fuerza compensatoria en el cuádriceps puede provocar:",
    correcta: "Inestabilidad en la articulación de la rodilla y riesgo de lesiones ligamentosas.",
    incorrectas: ["Una mejora en la potencia de salto vertical.", "Un aumento de la velocidad de reacción simple."]
  },
  {
    enunciado: "El método de 'estiramiento isométrico' consiste en:",
    correcta: "Realizar una contracción isométrica del músculo mientras este se encuentra en una posición estirada.",
    incorrectas: ["Estirar el músculo mientras se duerme mediante el uso de férulas.", "Correr cuesta arriba manteniendo los brazos fijos."]
  },
  {
    enunciado: "¿Cómo influye el sistema endocrino en la flexibilidad durante el ciclo menstrual?",
    correcta: "La relaxina y los estrógenos pueden aumentar la laxitud de los tejidos colaginosos.",
    incorrectas: ["La progesterona endurece los huesos de forma temporal cada mes.", "No existe ninguna relación entre hormonas y extensibilidad tisular."]
  },
  {
    enunciado: "La 'fricción interna' de un músculo se reduce con la flexibilidad, lo que permite:",
    correcta: "Una mayor velocidad de contracción al disminuir la resistencia de los componentes no contráctiles.",
    incorrectas: ["Que el músculo no necesite ATP para moverse.", "Que la piel se vuelva más gruesa y resistente."]
  },
  {
    enunciado: "En el marco de la LOMLOE, el desarrollo de la flexibilidad debe enfocarse como un medio para:",
    correcta: "La mejora del bienestar, la prevención de dolores musculares crónicos y la conciencia corporal.",
    incorrectas: ["Lograr el rendimiento atlético de élite como único objetivo evaluable.", "Sustituir el trabajo de fuerza y resistencia en el currículo."]
  },
  {
    enunciado: "La elasticidad del tendón de Aquiles es crucial en la carrera porque:",
    correcta: "Permite almacenar energía elástica en la fase de apoyo y liberarla en la impulsión.",
    incorrectas: ["Mantiene el pie rígido como una palanca de madera.", "Evita que la sangre baje hacia los dedos del pie."]
  },
  {
    enunciado: "¿Cuál es el riesgo biomecánico de los estiramientos con rebote (balísticos) en principiantes?",
    correcta: "Superar el límite elástico del tejido y entrar en la zona de deformación plástica o rotura.",
    incorrectas: ["Hacer que los músculos crezcan demasiado rápido.", "Provocar un estado de somnolencia profunda durante la clase."]
  }
];