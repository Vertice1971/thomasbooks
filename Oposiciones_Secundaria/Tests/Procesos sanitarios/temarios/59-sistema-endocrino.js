'use strict';

var PREGUNTAS = [
{
enunciado: "En la estructura histológica de la glándula tiroides, las unidades funcionales formadas por un epitelio simple cúbico que rodea una cavidad con coloide son:",
correcta: "Folículos tiroideos",
incorrectas: [
"Acinos glandulares",
"Islotes de Langerhans"
]
},
{
enunciado: "Las células parafoliculares o células C de la glándula tiroides tienen como función la secreción de:",
correcta: "Calcitonina",
incorrectas: [
"Triyodotironina (T3)",
"Hormona paratiroidea (PTH)"
]
},
{
enunciado: "La zona de la corteza suprarrenal responsable de la síntesis y secreción de glucocorticoides, principalmente cortisol, es:",
correcta: "Zona fasciculada",
incorrectas: [
"Zona glomerulosa",
"Zona reticular"
]
},
{
enunciado: "Histológicamente, la adenohipófisis se divide en tres partes, siendo la más voluminosa y con mayor actividad endocrina la:",
correcta: "Pars distalis",
incorrectas: [
"Pars intermedia",
"Pars nervosa"
]
},
{
enunciado: "¿Qué tipo celular de la adenohipófisis es responsable de la secreción de la Hormona del Crecimiento (GH)?",
correcta: "Células somatotropas",
incorrectas: [
"Células lactotropas",
"Células gonadotropas"
]
},
{
enunciado: "La neurohipófisis no sintetiza hormonas, sino que almacena y libera sustancias producidas en el hipotálamo, las cuales son:",
correcta: "Oxitocina y ADH (Vasopresina)",
incorrectas: [
"Prolactina y Oxitocina",
"Somatostatina y Dopamina"
]
},
{
enunciado: "En los islotes pancreáticos, las células beta representan la mayoría de la población celular y secretan:",
correcta: "Insulina",
incorrectas: [
"Glucagón",
"Somatostatina"
]
},
{
enunciado: "La glándula paratiroides presenta células principales y células oxífilas. La función de las células principales es producir:",
correcta: "Paratohormona (PTH)",
incorrectas: [
"Calcitriol",
"Aldosterona"
]
},
{
enunciado: "¿Qué hormona es producida por la zona glomerulosa de la corteza suprarrenal para regular el equilibrio electrolítico?",
correcta: "Aldosterona",
incorrectas: [
"Dehidroepiandrosterona (DHEA)",
"Adrenalina"
]
},
{
enunciado: "La médula suprarrenal se considera funcionalmente un ganglio simpático modificado cuyas células secretoras se denominan:",
correcta: "Células cromafines",
incorrectas: [
"Células foliculoestrelladas",
"Células claras"
]
},
{
enunciado: "La glándula pineal o epífisis cerebral contiene células especializadas en la producción de melatonina denominadas:",
correcta: "Pinealocitos",
incorrectas: [
"Pituicitos",
"Astrocitos fibrosos"
]
},
{
enunciado: "El mecanismo de acción de las hormonas esteroideas se caracteriza por:",
correcta: "Atravesar la membrana plasmática y unirse a receptores intracelulares",
incorrectas: [
"Unirse a receptores de membrana acoplados a proteínas G",
"Actuar exclusivamente a través de segundos mensajeros como el AMPc"
]
},
{
enunciado: "Las hormonas peptídicas y catecolaminas requieren para su acción celular la presencia de:",
correcta: "Receptores de superficie y segundos mensajeros",
incorrectas: [
"Proteínas transportadoras nucleares",
"Colesterol como precursor directo"
]
},
{
enunciado: "El precursor químico común de todas las hormonas esteroideas producidas en la corteza suprarrenal y gónadas es:",
correcta: "El colesterol",
incorrectas: [
"La tirosina",
"El triptófano"
]
},
{
enunciado: "La regulación de la secreción de la mayoría de las glándulas endocrinas se realiza mediante un mecanismo de:",
correcta: "Retroalimentación negativa (Feedback negativo)",
incorrectas: [
"Retroalimentación positiva persistente",
"Control nervioso voluntario"
]
},
{
enunciado: "¿Cuál es la función primordial de la insulina en el metabolismo de los carbohidratos?",
correcta: "Facilitar la entrada de glucosa en las células y promover la glucogenogénesis",
incorrectas: [
"Estimular la gluconeogénesis hepática",
"Aumentar la glucogenólisis en el músculo esquelético"
]
},
{
enunciado: "La hormona liberadora de tirotropina (TRH), sintetizada en el hipotálamo, actúa sobre la adenohipófisis para estimular la liberación de:",
correcta: "TSH",
incorrectas: [
"ACTH",
"FSH"
]
},
{
enunciado: "La deficiencia de yodo en la dieta afecta directamente a la síntesis de:",
correcta: "Hormonas tiroideas (T3 y T4)",
incorrectas: [
"Calcitonina",
"Catecolaminas"
]
},
{
enunciado: "La diabetes insípida se produce por una deficiencia en la secreción o acción de la hormona:",
correcta: "Antidiurética (ADH)",
incorrectas: [
"Insulina",
"Aldosterona"
]
},
{
enunciado: "En la histología de la neurohipófisis, las células de sostén de naturaleza glial se denominan:",
correcta: "Pituicitos",
incorrectas: [
"Células principales",
"Células intersticiales"
]
},
{
enunciado: "La hormona que estimula la eyección de leche y las contracciones uterinas durante el parto es:",
correcta: "Oxitocina",
incorrectas: [
"Prolactina",
"Hormona luteinizante (LH)"
]
},
{
enunciado: "El glucagón, producido por las células alfa del páncreas, ejerce un efecto:",
correcta: "Hiperglucemiante, al estimular la glucogenólisis hepática",
incorrectas: [
"Hipoglucemiante, al inhibir la salida de glucosa del hígado",
"Anabólico proteico en el tejido adiposo"
]
},
{
enunciado: "La enfermedad de Cushing se caracteriza por una producción excesiva de:",
correcta: "Cortisol",
incorrectas: [
"Aldosterona",
"Adrenalina"
]
},
{
enunciado: "La glándula endocrina que experimenta una involución progresiva tras la pubertad y participa en la maduración de linfocitos T es:",
correcta: "El timo",
incorrectas: [
"La glándula pineal",
"La hipófisis"
]
},
{
enunciado: "La zona reticular de la corteza suprarrenal secreta principalmente:",
correcta: "Andrógenos débiles",
incorrectas: [
"Mineralocorticoides",
"Glucocorticoides"
]
},
{
enunciado: "¿Qué órgano endocrino contiene los cuerpos de Herring, que son dilataciones axónicas con gránulos de secreción?",
correcta: "Neurohipófisis",
incorrectas: [
"Adenohipófisis",
"Hipotálamo posterior"
]
},
{
enunciado: "La síntesis de hormonas tiroideas requiere la yodación de residuos de un aminoácido específico en la tiroglobulina, este es:",
correcta: "Tirosina",
incorrectas: [
"Fenilalanina",
"Histidina"
]
},
{
enunciado: "La hormona adrenocorticotropa (ACTH) tiene como tejido diana principal:",
correcta: "La corteza suprarrenal",
incorrectas: [
"La médula suprarrenal",
"El riñón"
]
},
{
enunciado: "El receptor de las hormonas tiroideas se localiza principalmente en:",
correcta: "El núcleo celular",
incorrectas: [
"La membrana plasmática",
"El retículo endoplásmico rugoso"
]
},
{
enunciado: "La hormona estimulante de los folículos (FSH) en el varón actúa sobre:",
correcta: "Las células de Sertoli para estimular la espermatogénesis",
incorrectas: [
"Las células de Leydig para producir testosterona",
"La próstata para aumentar el volumen seminal"
]
},
{
enunciado: "La somatostatina secretada por las células delta del páncreas tiene una función de:",
correcta: "Inhibición de la secreción de insulina y glucagón",
incorrectas: [
"Estimulación del crecimiento tisular",
"Regulación del ritmo circadiano"
]
},
{
enunciado: "La calcitonina y la PTH tienen efectos opuestos sobre la calcemia. La PTH:",
correcta: "Aumenta la calcemia estimulando la resorción ósea",
incorrectas: [
"Disminuye la calcemia favoreciendo el depósito de calcio en hueso",
"Aumenta la excreción renal de calcio"
]
},
{
enunciado: "¿Cuál es el principal estímulo para la liberación de eritropoyetina (EPO) por el riñón?",
correcta: "La hipoxia (baja presión de oxígeno en tejidos)",
incorrectas: [
"La hipertensión arterial",
"El aumento de la volemia"
]
},
{
enunciado: "La eminencia media es una estructura clave en la regulación endocrina porque:",
correcta: "Es el punto de entrada de las hormonas hipotalámicas al sistema porta hipofisario",
incorrectas: [
"Sintetiza directamente la hormona de crecimiento",
"Actúa como barrera hematoencefálica infranqueable"
]
},
{
enunciado: "El sistema porta hipofisario conecta:",
correcta: "El hipotálamo con la adenohipófisis",
incorrectas: [
"El hipotálamo con la neurohipófisis",
"La hipófisis con las glándulas suprarrenales"
]
},
{
enunciado: "La inhibina es una hormona producida en las gónadas que regula específicamente la secreción de:",
correcta: "FSH",
incorrectas: [
"LH",
"GnRH"
]
},
{
enunciado: "En la fisiología del estrés, la fase de resistencia está mediada principalmente por:",
correcta: "Glucocorticoides",
incorrectas: [
"Catecolaminas",
"Hormonas tiroideas"
]
},
{
enunciado: "La liberación de catecolaminas por la médula suprarrenal es estimulada directamente por:",
correcta: "Acetilcolina de fibras preganglionares simpáticas",
incorrectas: [
"Hormonas tróficas de la adenohipófisis",
"Niveles bajos de potasio en sangre"
]
},
{
enunciado: "¿Qué hormona es necesaria para que el riñón reabsorba agua de forma facultativa en el túbulo colector?",
correcta: "Hormona antidiurética (ADH)",
incorrectas: [
"Péptido natriurético auricular",
"Renina"
]
},
{
enunciado: "La formación de 'arenilla cerebral' (acérvulos) es un rasgo histológico característico de:",
correcta: "La glándula pineal",
incorrectas: [
"La hipófisis",
"La glándula tiroides"
]
}
];