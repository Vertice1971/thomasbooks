'use strict';

var PREGUNTAS = [
{
enunciado: "La unidad estructural y funcional del hueso compacto, caracterizada por laminillas concéntricas alrededor de un conducto central, se denomina:",
correcta: "Osteona o sistema de Havers",
incorrectas: [
"Trabécula",
"Laguna de Howship"
]
},
{
enunciado: "En la contracción muscular, el complejo proteico que bloquea los sitios de unión de la miosina en el filamento de actina durante el reposo es:",
correcta: "Tropomiosina",
incorrectas: [
"Troponina C",
"Titina"
]
},
{
enunciado: "Las articulaciones cuya movilidad es nula por la interposición de tejido fibroso, como las suturas craneales, se clasifican como:",
correcta: "Sinartrosis",
incorrectas: [
"Anfiartrosis",
"Diartrosis"
]
},
{
enunciado: "La vaina de tejido conectivo denso que rodea a todo el músculo en su conjunto se denomina:",
correcta: "Epimisio",
incorrectas: [
"Perimisio",
"Endomisio"
]
},
{
enunciado: "¿Qué tipo de osificación se produce a partir de un molde de cartílago hialino, siendo característica de los huesos largos?",
correcta: "Osificación endocondral",
incorrectas: [
"Osificación intramembranosa",
"Osificación aposicional"
]
},
{
enunciado: "Las células encargadas de la resorción y degradación de la matriz ósea mediante la secreción de enzimas lisosómicas son los:",
correcta: "Osteoclastos",
incorrectas: [
"Osteoblastos",
"Osteocitos"
]
},
{
enunciado: "La unidad funcional de la miofibrilla comprendida entre dos líneas Z se denomina:",
correcta: "Sarcómero",
incorrectas: [
"Sarcolema",
"Retículo sarcoplásmico"
]
},
{
enunciado: "La liberación de qué ion desde el retículo sarcoplásmico es indispensable para iniciar el proceso de contracción muscular:",
correcta: "Calcio (Ca²⁺)",
incorrectas: [
"Sodio (Na⁺)",
"Magnesio (Mg²⁺)"
]
},
{
enunciado: "El crecimiento de los huesos largos en longitud depende de la actividad de:",
correcta: "La placa epifisaria o cartílago de crecimiento",
incorrectas: [
"El periostio",
"El endostio"
]
},
{
enunciado: "Las articulaciones sinoviales que permiten el movimiento en un solo eje, como la articulación del codo (humerocubital), son de tipo:",
correcta: "Troclear o gínglimo",
incorrectas: [
"Enartrosis",
"Artrodia"
]
},
{
enunciado: "La membrana de tejido conectivo que recubre la superficie externa del hueso y es esencial para el crecimiento en grosor es:",
correcta: "Periostio",
incorrectas: [
"Endostio",
"Cartílago articular"
]
},
{
enunciado: "En la jerarquía muscular, un conjunto de fibras musculares rodeadas por perimisio constituye un:",
correcta: "Fascículo",
incorrectas: [
"Sincitio",
"Miofilamento"
]
},
{
enunciado: "¿Cuál de las siguientes proteínas forma los filamentos gruesos del sarcómero?",
correcta: "Miosina",
incorrectas: [
"Actina",
"Nebulina"
]
},
{
enunciado: "El fenómeno de 'fatiga muscular' se asocia principalmente a la acumulación de:",
correcta: "Ácido láctico",
incorrectas: [
"Creatina fosfato",
"Glucógeno"
]
},
{
enunciado: "Las vértebras, debido a su morfología compleja que no encaja en las categorías estándar, se clasifican como:",
correcta: "Huesos irregulares",
incorrectas: [
"Huesos cortos",
"Huesos sesamoideos"
]
},
{
enunciado: "La zona de la neurona motora y el conjunto de fibras musculares que esta inerva se denomina:",
correcta: "Unidad motora",
incorrectas: [
"Placa motora",
"Huso neuromuscular"
]
},
{
enunciado: "En una contracción de tipo isotónica excéntrica, el músculo:",
correcta: "Se alarga mientras mantiene la tensión",
incorrectas: [
"Se acorta produciendo movimiento",
"Mantiene su longitud constante"
]
},
{
enunciado: "La hematopoyesis o formación de células sanguíneas tiene lugar en:",
correcta: "La médula ósea roja",
incorrectas: [
"La médula ósea amarilla",
"La cavidad medular de la diáfisis adulta"
]
},
{
enunciado: "¿Qué estructura sinovial actúa como una almohadilla reduciendo la fricción entre tendones y huesos?",
correcta: "Bolsa o bursa",
incorrectas: [
"Ligamento",
"Menisco"
]
},
{
enunciado: "La falta de vitamina D en adultos, que provoca un déficit de mineralización en la matriz ósea, se denomina:",
correcta: "Osteomalacia",
incorrectas: [
"Raquitismo",
"Osteoporosis"
]
},
{
enunciado: "La fuente de energía más inmediata para la contracción muscular, tras agotar el ATP celular, es:",
correcta: "Fosfocreatina",
incorrectas: [
"Glucólisis anaerobia",
"Oxidación de ácidos grasos"
]
},
{
enunciado: "El principal componente inorgánico de la matriz ósea, responsable de la dureza del hueso, es:",
correcta: "Hidroxiapatita",
incorrectas: [
"Carbonato cálcico",
"Colágeno tipo I"
]
},
{
enunciado: "En la mecánica articular, el movimiento que disminuye el ángulo entre dos huesos se llama:",
correcta: "Flexión",
incorrectas: [
"Extensión",
"Abducción"
]
},
{
enunciado: "Las células óseas maduras que mantienen el metabolismo diario del tejido y se alojan en lagunas son los:",
correcta: "Osteocitos",
incorrectas: [
"Osteoblastos",
"Células osteoprogenitoras"
]
},
{
enunciado: "El neurotransmisor liberado en la hendidura sináptica de la unión neuromuscular es:",
correcta: "Acetilcolina",
incorrectas: [
"Noradrenalina",
"Glutamato"
]
},
{
enunciado: "El tipo de músculo que carece de estrías visibles al microscopio y posee contracción involuntaria es:",
correcta: "Músculo liso",
incorrectas: [
"Músculo cardíaco",
"Músculo esquelético"
]
},
{
enunciado: "Los discos intervertebrales, formados por un anillo fibroso y un núcleo pulposo, son un ejemplo de:",
correcta: "Sínfisis (anfiartrosis)",
incorrectas: [
"Sindesmosis",
"Gónfosis"
]
},
{
enunciado: "La curvatura fisiológica de la columna vertebral con convexidad anterior en las regiones cervical y lumbar se denomina:",
correcta: "Lordosis",
incorrectas: [
"Cifosis",
"Escoliosis"
]
},
{
enunciado: "El hueso de la pierna que no soporta peso y sirve principalmente para la inserción muscular es:",
correcta: "Peroné (fíbula)",
incorrectas: [
"Tibia",
"Rótula"
]
},
{
enunciado: "La proteína encargada de transportar oxígeno dentro de la fibra muscular es la:",
correcta: "Mioglobina",
incorrectas: [
"Hemoglobina",
"Calmodulina"
]
},
{
enunciado: "En el tejido óseo esponjoso, las laminillas se organizan en una red irregular de columnas delgadas llamadas:",
correcta: "Trabéculas",
incorrectas: [
"Conductos de Volkmann",
"Osteonas"
]
},
{
enunciado: "La fontanela anterior del cráneo del recién nacido se localiza entre los huesos:",
correcta: "Frontal y parietales",
incorrectas: [
"Parietales y occipital",
"Frontal y esfenoides"
]
},
{
enunciado: "El músculo agonista en el movimiento de flexión del codo es el:",
correcta: "Bíceps braquial",
incorrectas: [
"Tríceps braquial",
"Braquiorradial"
]
},
{
enunciado: "¿Cómo se denomina la vaina de tejido conectivo que envuelve una fibra muscular individual?",
correcta: "Endomisio",
incorrectas: [
"Sarcolema",
"Fascia"
]
},
{
enunciado: "La parte del hueso largo que comprende la zona de transición entre la epífisis y la diáfisis es la:",
correcta: "Metáfisis",
incorrectas: [
"Apófisis",
"Diáfisis"
]
},
{
enunciado: "En la contracción muscular, ¿qué sucede con la banda A del sarcómero?",
correcta: "Se mantiene constante en longitud",
incorrectas: [
"Se estrecha notablemente",
"Se expande"
]
},
{
enunciado: "El principal estímulo hormonal para la resorción ósea y el aumento de calcio en sangre es:",
correcta: "Paratohormona (PTH)",
incorrectas: [
"Calcitonina",
"Somatotropina"
]
},
{
enunciado: "Las articulaciones en 'silla de montar' o encaje recíproco son características de:",
correcta: "La articulación trapeciometacarpiana",
incorrectas: [
"La articulación de la cadera",
"La articulación del atlas con el axis"
]
},
{
enunciado: "La acumulación de sales de urato en las articulaciones produce la patología denominada:",
correcta: "Gota",
incorrectas: [
"Artritis reumatoide",
"Artrosis"
]
},
{
enunciado: "El hueso hioides se distingue de los demás huesos del cuerpo por:",
correcta: "No articularse directamente con ningún otro hueso",
incorrectas: [
"Ser el único hueso de origen puramente cartilaginoso",
"Carecer de periostio"
]
}
];