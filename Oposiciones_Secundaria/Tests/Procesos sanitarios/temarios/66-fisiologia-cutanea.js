'use strict';

var PREGUNTAS = [
{
enunciado: "El manto ácido de la piel, con un pH entre 4.5 y 5.9, tiene como función primordial:",
correcta: "Inhibir el crecimiento de microorganismos patógenos y mantener la integridad de la barrera",
incorrectas: [
"Facilitar la absorción de vitaminas hidrosolubles a través del estrato córneo",
"Neutralizar la producción de sebo por parte de las glándulas holocrinas"
]
},
{
enunciado: "La síntesis de vitamina D3 (colecalciferol) en la piel se inicia mediante la fotólisis del precursor:",
correcta: "7-dehidrocolesterol por exposición a la radiación UVB",
incorrectas: [
"Ergosterol por la acción directa de la radiación UVA",
"Escualeno tras la oxidación por radicales libres en la dermis"
]
},
{
enunciado: "¿Qué estructura cutánea es responsable de la respuesta de vasoconstricción ante el descenso de la temperatura externa?",
correcta: "Las anastomosis arteriovenosas de la dermis",
incorrectas: [
"Los capilares fenestrados de las papilas dérmicas",
"El plexo subepidérmico de la unión dermoepidérmica"
]
},
{
enunciado: "La pérdida de agua transepidérmica (TEWL) se ve incrementada significativamente cuando:",
correcta: "Se produce una alteración en la composición de los lípidos intercelulares del estrato córneo",
incorrectas: [
"Aumenta la actividad de las glándulas sudoríparas apocrinas en la pubertad",
"Se produce una hiperqueratosis reactiva en zonas de fricción constante"
]
},
{
enunciado: "Los corpúsculos de Pacini son receptores sensoriales especializados en la detección de:",
correcta: "Vibraciones de alta frecuencia y presión profunda",
incorrectas: [
"Variaciones térmicas extremas por debajo de los 10 grados",
"Deformaciones ligeras de la superficie de la epidermis"
]
},
{
enunciado: "Las células de Langerhans, componentes esenciales del sistema inmune cutáneo (SALT), actúan como:",
correcta: "Células presentadoras de antígenos que migran a los ganglios linfáticos regionales",
incorrectas: [
"Células efectoras que fagocitan queratinocitos infectados por virus",
"Productores de anticuerpos IgA en la superficie de la epidermis"
]
},
{
enunciado: "La excreción de sudor ecrino contribuye a la homeostasis mediante:",
correcta: "El enfriamiento por evaporación y la eliminación de pequeñas cantidades de urea y lactato",
incorrectas: [
"La regulación de los niveles plasmáticos de glucosa en situaciones de estrés",
"La formación exclusiva de una película lipídica que evita la descamación"
]
},
{
enunciado: "En la fisiología de la pigmentación, la transferencia de melanosomas desde el melanocito al queratinocito se denomina:",
correcta: "Secreción citocrina",
incorrectas: [
"Exocitosis merocrina",
"Difusión facilitada intercelular"
]
},
{
enunciado: "La capacidad de la piel para actuar como reservorio de sangre se debe a que el flujo sanguíneo dérmico:",
correcta: "Supera con creces los requerimientos metabólicos del tejido para servir a la termorregulación",
incorrectas: [
"Se concentra exclusivamente en la hipodermis para evitar la pérdida de oxígeno",
"Depende únicamente del gasto cardíaco y no de la inervación simpática"
]
},
{
enunciado: "La función de los corpúsculos de Meissner es la percepción de:",
correcta: "Tacto ligero y discriminación de texturas, localizándose en las papilas dérmicas",
incorrectas: [
"Dolor punzante localizado en la dermis reticular",
"Tensión y estiramiento de las fibras de colágeno"
]
},
{
enunciado: "¿Cuál es el principal mecanismo de absorción percutánea para sustancias lipofílicas?",
correcta: "Vía transepidérmica intercelular",
incorrectas: [
"Vía transanexial a través del conducto de la glándula ecrina",
"Transporte activo mediado por proteínas de membrana en el estrato granuloso"
]
},
{
enunciado: "El Factor de Hidratación Natural (FHN) se localiza en el interior de los corneocitos y está compuesto principalmente por:",
correcta: "Aminoácidos libres, ácido pirrolidón carboxílico, urea y sales minerales",
incorrectas: [
"Triglicéridos, ceras y ácidos grasos de cadena larga",
"Glucógeno y restos de orgánulos celulares degradados"
]
},
{
enunciado: "La feomelanina se diferencia de la eumelanina en que:",
correcta: "Contiene azufre y proporciona tonalidades amarillentas o rojizas con menor capacidad de fotoprotección",
incorrectas: [
"Se sintetiza exclusivamente en el estrato córneo sin intervención de la tirosinasa",
"Es el pigmento predominante en las pieles con fototipos IV y V"
]
},
{
enunciado: "La respuesta de 'piel de gallina' o horripilación es mediada por:",
correcta: "Fibras nerviosas simpáticas que inervan el músculo erector del pelo",
incorrectas: [
"El sistema parasimpático para aumentar la pérdida de calor",
"La liberación local de histamina en respuesta al frío"
]
},
{
enunciado: "La barrera de Rein se localiza entre el estrato granuloso y el córneo, y su función es:",
correcta: "Impedir el paso de agua y solutos desde la dermis hacia el exterior",
incorrectas: [
"Permitir la libre difusión de electrolitos para mantener la turgencia",
"Sintetizar la queratina dura que forma las uñas"
]
},
{
enunciado: "La hipodermis actúa como aislante térmico gracias a:",
correcta: "La baja conductividad térmica de los adipocitos",
incorrectas: [
"La densa red de fibras de elastina que retiene el aire",
"La presencia de glándulas apocrinas que generan calor metabólico"
]
},
{
enunciado: "Los discos de Merkel se consideran:",
correcta: "Mecanorreceptores de adaptación lenta para el tacto sostenido y la presión",
incorrectas: [
"Termorreceptores de adaptación rápida para el calor intenso",
"Receptores específicos de estiramiento muscular cutáneo"
]
},
{
enunciado: "La degradación de la filagrina en el estrato córneo es fundamental para:",
correcta: "La formación de los componentes del Factor de Hidratación Natural",
incorrectas: [
"La activación de los melanocitos tras la exposición solar",
"La adhesión de los desmosomas en el estrato espinoso"
]
},
{
enunciado: "El efecto de la radiación infrarroja en la fisiología cutánea se asocia principalmente con:",
correcta: "Un aumento de la temperatura local que favorece la vasodilatación",
incorrectas: [
"La inducción de mutaciones directas en el núcleo de los queratinocitos",
"La inhibición de la síntesis de colágeno en la dermis reticular"
]
},
{
enunciado: "La vitamina E en la piel ejerce una función fisiológica de:",
correcta: "Antioxidante lipofílico que protege las membranas celulares de la peroxidación",
incorrectas: [
"Cofactor indispensable para la síntesis de melanina",
"Regulador del ciclo de división celular en el estrato basal"
]
},
{
enunciado: "La permeabilidad cutánea aumenta considerablemente cuando:",
correcta: "Se produce la oclusión de la piel, aumentando la hidratación del estrato córneo",
incorrectas: [
"El grosor de la capa de queratina se incrementa de forma fisiológica",
"El pH de la superficie se vuelve más ácido (por debajo de 4)"
]
},
{
enunciado: "Los corpúsculos de Ruffini responden fisiológicamente a:",
correcta: "El estiramiento de la dermis y el calor sostenido",
incorrectas: [
"Vibraciones rápidas producidas por herramientas mecánicas",
"El roce superficial de la ropa sobre la epidermis"
]
},
{
enunciado: "El manguito radicular del folículo piloso tiene una función de:",
correcta: "Crecimiento y anclaje del tallo piloso durante la fase anágena",
incorrectas: [
"Secreción de feromonas en la piel glabra",
"Almacenamiento de calcio para la osificación dérmica"
]
},
{
enunciado: "¿Cuál es el papel de los queratinocitos en la función inmune de la piel?",
correcta: "Liberar citoquinas proinflamatorias y expresar moléculas del MHC de clase II",
incorrectas: [
"Diferenciarse en linfocitos T citotóxicos ante una agresión",
"Sintetizar inmunoglobulinas específicas contra venenos de insectos"
]
},
{
enunciado: "La unidad epidérmica de melanización se define como:",
correcta: "La asociación funcional de un melanocito con aproximadamente 36 queratinocitos",
incorrectas: [
"El grupo de melanocitos localizados en una papila dérmica",
"La cantidad de melamina presente en un centímetro cuadrado de piel"
]
},
{
enunciado: "La glándula sebácea se caracteriza por una secreción de tipo:",
correcta: "Holocrina, donde la célula se destruye para liberar el contenido",
incorrectas: [
"Ecrina, mediante exocitosis sin pérdida de material celular",
"Apocrina, perdiendo la parte apical del citoplasma"
]
},
{
enunciado: "El enfriamiento del cuerpo por sudoración es menos efectivo cuando:",
correcta: "La humedad relativa ambiental es muy elevada",
incorrectas: [
"La velocidad del viento aumenta sobre la superficie cutánea",
"El individuo se encuentra en un estado de hipovolemia ligera"
]
},
{
enunciado: "Las terminaciones nerviosas libres en la epidermis transmiten principalmente sensaciones de:",
correcta: "Dolor (nocicepción) y temperatura",
incorrectas: [
"Presión estática para el mantenimiento de la postura",
"Discriminación entre dos puntos muy cercanos"
]
},
{
enunciado: "La renovación del estrato córneo (descamación) está regulada por:",
correcta: "Enzimas proteolíticas (serín-proteasas) que degradan los corneodesmosomas",
incorrectas: [
"La presión mecánica ejercida por la circulación sanguínea dérmica",
"La acción del oxígeno atmosférico sobre la queratina superficial"
]
},
{
enunciado: "El colágeno tipo I en la dermis tiene la función fisiológica de:",
correcta: "Aportar resistencia a la tensión y soporte estructural a la piel",
incorrectas: [
"Proporcionar la elasticidad necesaria para el retorno tras el estiramiento",
"Actuar como un gel hidratado que permite la difusión de nutrientes"
]
},
{
enunciado: "La turgencia de la piel depende fundamentalmente de:",
correcta: "El contenido de agua en la dermis unido a los glicosaminoglicanos como el ácido hialurónico",
incorrectas: [
"La cantidad de queratina acumulada en el estrato lúcido",
"El número de folículos pilosos por unidad de superficie"
]
},
{
enunciado: "La barrera cutánea frente a la penetración de microorganismos se refuerza por:",
correcta: "La presencia de péptidos antimicrobianos como las defensinas y la dermcidina",
incorrectas: [
"La secreción de glucógeno por las glándulas sudoríparas",
"La alcalinización del sudor en situaciones de reposo"
]
},
{
enunciado: "La absorción percutánea a través de los folículos pilosos se denomina vía:",
correcta: "Transanexial",
incorrectas: [
"Transepidérmica",
"Endocítica"
]
},
{
enunciado: "La función de las glándulas sudoríparas apocrinas en humanos se asocia principalmente con:",
correcta: "La secreción de sustancias precursoras de olores corporales por acción bacteriana",
incorrectas: [
"La regulación precisa de la temperatura central durante el ejercicio",
"La excreción masiva de cloruro sódico en ambientes áridos"
]
},
{
enunciado: "¿Qué efecto tiene la histamina sobre los vasos sanguíneos dérmicos?",
correcta: "Provoca vasodilatación y aumenta la permeabilidad capilar",
incorrectas: [
"Induce una vasoconstricción refleja inmediata",
"Inhibe la extravasación de plasma hacia el intersticio"
]
},
{
enunciado: "La dermis papilar tiene como función fisiológica principal:",
correcta: "Nutrir la epidermis avascular y proporcionar soporte mediante las papilas",
incorrectas: [
"Servir de depósito exclusivo para el almacenamiento de lípidos",
"Sintetizar la mayor parte de la vitamina D del organismo"
]
},
{
enunciado: "La elastina proporciona a la piel la propiedad de:",
correcta: "Recuperar la forma original tras una deformación mecánica",
incorrectas: [
"Resistir cortes y abrasiones profundas",
"Evitar la entrada de radiación ionizante"
]
},
{
enunciado: "La fase de reposo en el ciclo de crecimiento del pelo se denomina:",
correcta: "Telógena",
incorrectas: [
"Anágena",
"Catágena"
]
},
{
enunciado: "La inervación sensorial de la piel permite al sistema nervioso central:",
correcta: "Monitorizar el entorno y proteger al organismo frente a estímulos nocivos",
incorrectas: [
"Controlar la tasa de división celular de los melanocitos de forma directa",
"Regular la síntesis de colágeno mediante impulsos eléctricos"
]
},
{
enunciado: "La reparación de una herida cutánea superficial depende fisiológicamente de:",
correcta: "La proliferación y migración de los queratinocitos desde los bordes de la lesión",
incorrectas: [
"La transformación de adipocitos en células del estrato espinoso",
"La llegada de melanosomas para sellar la brecha epidérmica"
]
}
];