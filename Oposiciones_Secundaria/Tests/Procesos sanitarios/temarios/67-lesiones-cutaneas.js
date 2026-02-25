'use strict';

var PREGUNTAS = [
{
enunciado: "Una lesión plana, circunscrita, no palpable, que se manifiesta únicamente por un cambio en la coloración de la piel y mide menos de 1 cm se define como:",
correcta: "Mácula",
incorrectas: [
"Pápula",
"Mancha"
]
},
{
enunciado: "La pápula se diferencia del nódulo principalmente en que:",
correcta: "Es una elevación sólida y superficial que mide menos de 1 cm de diámetro",
incorrectas: [
"Tiene un contenido líquido seroso en su interior",
"Se localiza exclusivamente en la hipodermis"
]
},
{
enunciado: "¿Cómo se denomina la lesión sobreelevada de consistencia sólida que mide más de 1 cm y cuya profundidad es mayor que la de la pápula?",
correcta: "Nódulo",
incorrectas: [
"Vesícula",
"Placa"
]
},
{
enunciado: "Una lesión de contenido líquido seroso o hemorrágico, con un tamaño superior a 0,5 - 1 cm, se clasifica como:",
correcta: "Ampolla o flictena",
incorrectas: [
"Vesícula",
"Pústula"
]
},
{
enunciado: "La lesión elemental caracterizada por una elevación edematosa, transitoria y de evolución fugaz, típica de la urticaria, es el:",
correcta: "Habón o roncha",
incorrectas: [
"Tumor",
"Quiste"
]
},
{
enunciado: "Se define como pústula a aquella lesión que presenta:",
correcta: "Una elevación circunscrita de la piel con contenido purulento",
incorrectas: [
"Una pérdida de sustancia que llega a la dermis",
"Una acumulación de queratina desprendida de la epidermis"
]
},
{
enunciado: "Las escamas son lesiones secundarias que consisten en:",
correcta: "Láminas de queratina que se desprenden del estrato córneo",
incorrectas: [
"Masas de exudados y restos celulares desecados",
"Neoformaciones de tejido conjuntivo tras una herida"
]
},
{
enunciado: "La diferencia fundamental entre erosión y úlcera es que:",
correcta: "La erosión es superficial y no deja cicatriz, mientras que la úlcera afecta a la dermis y sí deja rastro",
incorrectas: [
"La erosión tiene contenido líquido y la úlcera es sólida",
"La úlcera es una lesión primaria y la erosión es secundaria"
]
},
{
enunciado: "Una masa sólida, no inflamatoria, con tendencia a persistir o crecer de forma indefinida se denomina:",
correcta: "Tumor",
incorrectas: [
"Quiste",
"Roncha"
]
},
{
enunciado: "La costra es una lesión secundaria que se forma por:",
correcta: "La desecación de exudados, sangre o pus sobre la superficie cutánea",
incorrectas: [
"El engrosamiento de la epidermis por rascado crónico",
"La proliferación de tejido fibroso tras una quemadura"
]
},
{
enunciado: "La liquenificación es un proceso secundario caracterizado por:",
correcta: "El engrosamiento de la piel con acentuación de los pliegues normales, debido al rascado",
incorrectas: [
"La formación de un trayecto fistuloso entre la dermis y el exterior",
"La muerte celular masiva de los queratinocitos basales"
]
},
{
enunciado: "La escoriación es una lesión secundaria producida generalmente por:",
correcta: "Un traumatismo superficial, habitualmente el rascado",
incorrectas: [
"La obstrucción del conducto de una glándula sebácea",
"La exposición prolongada a radiación ionizante"
]
},
{
enunciado: "En el examen de una lesión pigmentada, la asimetría y la irregularidad de los bordes son criterios de:",
correcta: "Sospecha de malignidad (Melanoma)",
incorrectas: [
"Benignidad confirmada en nevos melanocíticos",
"Proceso infeccioso por dermatofitos"
]
},
{
enunciado: "El término 'fisura' o 'grieta' se refiere a:",
correcta: "Un desgarro lineal de la piel que puede extenderse hasta la dermis",
incorrectas: [
"Una depresión de la piel por atrofia del tejido adiposo",
"Una placa eritematosa cubierta de escamas nacaradas"
]
},
{
enunciado: "¿Qué lesión primaria se define como una cavidad cerrada, con revestimiento epitelial o endotelial, que contiene material líquido o semisólido?",
correcta: "Quiste",
incorrectas: [
"Absceso",
"Pápula"
]
},
{
enunciado: "La atrofia cutánea se manifiesta clínicamente como:",
correcta: "Una disminución del espesor y elasticidad de la piel, que se vuelve delgada y brillante",
incorrectas: [
"Un aumento de la pigmentación tras la exposición solar",
"La aparición de vegetaciones verrugosas en mucosas"
]
},
{
enunciado: "Una placa es una lesión elemental que se caracteriza por:",
correcta: "Ser una elevación en meseta que ocupa una superficie mayor que su altura",
incorrectas: [
"Ser una pérdida de sustancia lineal en pliegues",
"Ser una mácula de origen vascular que no desaparece a la vitropresión"
]
},
{
enunciado: "La presencia de 'púrpura' indica:",
correcta: "Extravasación de hematíes en la dermis que no blanquea a la presión",
incorrectas: [
"Dilatación de capilares superficiales que desaparece al presionar",
"Infección fúngica activa en el estrato córneo"
]
},
{
enunciado: "Ante una lesión cutánea sospechosa de etiología infecciosa, la primera medida de actuación es:",
correcta: "Uso de precauciones estándar y valoración de la morfología de la lesión",
incorrectas: [
"Aplicación inmediata de corticoides tópicos",
"Desbridamiento quirúrgico antes de la toma de muestras"
]
},
{
enunciado: "Las telangiectasias son:",
correcta: "Dilataciones permanentes de capilares pequeños que desaparecen a la vitropresión",
incorrectas: [
"Neoformaciones sólidas de origen melanocítico",
"Depósitos de lípidos en los párpados"
]
},
{
enunciado: "La regla ABCDE es una herramienta de cribado donde la 'D' representa:",
correcta: "Diámetro superior a 6 mm",
incorrectas: [
"Dolor a la palpación profunda",
"Descamación intensa de la superficie"
]
},
{
enunciado: "Se denomina vegetación a:",
correcta: "Una proliferación de las papilas dérmicas que se proyecta por encima del nivel de la piel",
incorrectas: [
"Una acumulación de pus en una cavidad neoformada",
"La pérdida de las líneas normales de la piel por edema"
]
},
{
enunciado: "Una escara se define como:",
correcta: "Tejido necrótico negro, seco y endurecido que el cuerpo intenta eliminar",
incorrectas: [
"Una cicatriz hipertrófica que desborda los límites de la herida",
"Un depósito de calcio en la dermis reticular"
]
},
{
enunciado: "¿Qué criterio de actuación es prioritario ante una quemadura que presenta ampollas?",
correcta: "No romper las ampollas para evitar el riesgo de infección",
incorrectas: [
"Vaciar el contenido líquido y aplicar alcohol de 96º",
"Aplicar pomadas antibióticas y dejar al aire sin apósito"
]
},
{
enunciado: "La esclerosis es una alteración que implica:",
correcta: "Induración de la piel por condensación de los elementos de la dermis, dificultando su plegado",
incorrectas: [
"La aparición de múltiples vesículas agrupadas en un dermatoma",
"El desprendimiento espontáneo de la placa ungueal"
]
},
{
enunciado: "Un exudado es:",
correcta: "Líquido que sale de los capilares debido a la inflamación, rico en proteínas y células",
incorrectas: [
"El sudor producido por las glándulas ecrinas",
"El contenido graso producido por las glándulas sebáceas"
]
},
{
enunciado: "La morfología 'circinada' de una lesión describe:",
correcta: "Una forma de arco de círculo",
incorrectas: [
"Una disposición lineal siguiendo un nervio",
"Una lesión con centro deprimido y bordes elevados"
]
},
{
enunciado: "Las lesiones elementales se dividen en primarias y secundarias. ¿Cuál de las siguientes es secundaria?",
correcta: "Cicatriz",
incorrectas: [
"Mácula",
"Habón"
]
},
{
enunciado: "Ante una úlcera por presión, el primer signo clínico de alarma es:",
correcta: "Eritema que no blanquea a la presión",
incorrectas: [
"Aparición de flictenas hemorrágicas",
"Pérdida de continuidad de la epidermis"
]
},
{
enunciado: "El signo de Nikolsky positivo, donde la epidermis se desprende al presionar, es característico de:",
correcta: "Pénfigo vulgar o necrólisis epidérmica tóxica",
incorrectas: [
"Psoriasis en placas",
"Dermatitis atópica"
]
},
{
enunciado: "Una cicatriz queloide se diferencia de una hipertrófica en que:",
correcta: "El queloide sobrepasa los límites de la herida original",
incorrectas: [
"La hipertrófica nunca desaparece espontáneamente",
"El queloide es siempre de color blanquecino"
]
},
{
enunciado: "La disposición 'herpetiforme' de las lesiones significa:",
correcta: "Agrupación en racimo de pequeñas vesículas sobre una base eritematosa",
incorrectas: [
"Lesiones que se extienden de forma simétrica por todo el tronco",
"Presencia de una lesión única de gran tamaño"
]
},
{
enunciado: "La vitropresión o diascopia se utiliza para:",
correcta: "Diferenciar el eritema (desaparece) de la púrpura (no desaparece)",
incorrectas: [
"Evaluar la profundidad de una úlcera",
"Determinar el grado de hidratación del estrato córneo"
]
},
{
enunciado: "La 'mancha' se define técnicamente como:",
correcta: "Una mácula de más de 1 cm de diámetro",
incorrectas: [
"Una elevación palpable de origen dérmico",
"Una lesión provocada por el depósito de pigmentos exógenos"
]
},
{
enunciado: "Ante una lesión cutánea con sospecha de melanoma (ABCDE positivo), la actuación correcta es:",
correcta: "Derivación preferente a dermatología para biopsia escisional",
incorrectas: [
"Crioterapia inmediata en la consulta de atención primaria",
"Observación evolutiva cada 12 meses"
]
},
{
enunciado: "Las lesiones 'diana' o en 'escarapela' son típicas de:",
correcta: "Eritema multiforme",
incorrectas: [
"Lupus eritematoso sistémico",
"Escabiosis (sarna)"
]
},
{
enunciado: "La diferencia entre una vesícula y una pápula es:",
correcta: "La vesícula tiene contenido líquido y la pápula es sólida",
incorrectas: [
"La pápula es siempre mayor de 2 cm",
"La vesícula se localiza en la hipodermis"
]
},
{
enunciado: "La presencia de 'escamas micáceas' (parecidas a la mica) es característica de:",
correcta: "Psoriasis",
incorrectas: [
"Impétigo contagioso",
"Pitiriasis rosada"
]
},
{
enunciado: "La actuación ante una pústula infecciosa debe incluir:",
correcta: "No manipularla para evitar la diseminación y realizar cultivo si es preciso",
incorrectas: [
"Drenaje mediante presión manual sin guantes",
"Aplicación de calor húmedo para favorecer la rotura"
]
},
{
enunciado: "Una cicatriz atrófica se caracteriza por:",
correcta: "Presentar una depresión respecto al nivel de la piel circundante",
incorrectas: [
"Ser una sobreelevación fibrosa muy pruriginosa",
"Aparecer únicamente tras procesos alérgicos"
]
}
];