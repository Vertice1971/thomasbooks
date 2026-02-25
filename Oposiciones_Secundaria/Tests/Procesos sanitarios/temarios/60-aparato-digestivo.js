'use strict';

var PREGUNTAS = [
{
enunciado: "La túnica del tubo digestivo compuesta por tejido conectivo laxo que contiene vasos sanguíneos, linfáticos y el plexo submucoso de Meissner es:",
correcta: "La submucosa",
incorrectas: [
"La mucosa",
"La muscular externa"
]
},
{
enunciado: "Las células de la mucosa gástrica encargadas de la secreción del factor intrínseco y del ácido clorhídrico (HCl) son:",
correcta: "Células parietales u oxínticas",
incorrectas: [
"Células principales o zimogénicas",
"Células G"
]
},
{
enunciado: "En el intestino delgado, las estructuras que representan proyecciones digitiformes de la mucosa para aumentar la superficie de absorción son:",
correcta: "Vellosidades intestinales",
incorrectas: [
"Válvulas conviventes o pliegues circulares",
"Microvellosidades (borde en cepillo)"
]
},
{
enunciado: "La enzima proteolítica producida en el estómago que se activa a partir de su cimógeno en presencia de un pH ácido es:",
correcta: "Pepsina",
incorrectas: [
"Tripsina",
"Quimiotripsina"
]
},
{
enunciado: "¿Cuál es la función principal de la bilis en el proceso de la digestión de las grasas?",
correcta: "Emulsión de los lípidos para facilitar la acción de las lipasas",
incorrectas: [
"Hidrólisis directa de los triglicéridos en ácidos grasos",
"Absorción de vitaminas hidrosolubles"
]
},
{
enunciado: "El esfínter que regula el paso del quimo desde el estómago hacia el duodeno se denomina:",
correcta: "Píloro",
incorrectas: [
"Cardias",
"Esfínter de Oddi"
]
},
{
enunciado: "Las glándulas salivales de mayor tamaño, cuya secreción es predominantemente serosa y rica en amilasa, son:",
correcta: "Glándulas parótidas",
incorrectas: [
"Glándulas submandibulares",
"Glándulas sublinguales"
]
},
{
enunciado: "La mayor parte de la digestión química y la absorción de nutrientes se lleva a cabo en:",
correcta: "El intestino delgado",
incorrectas: [
"El estómago",
"El intestino grueso"
]
},
{
enunciado: "El componente del jugo pancreático encargado de neutralizar la acidez del quimo procedente del estómago es:",
correcta: "Bicarbonato de sodio",
incorrectas: [
"Amilasa pancreática",
"Nucleasas"
]
},
{
enunciado: "Las células hepáticas especializadas en la fagocitosis de eritrocitos envejecidos y bacterias se denominan:",
correcta: "Células de Kupffer",
incorrectas: [
"Hepatocitos",
"Células estrelladas o de Ito"
]
},
{
enunciado: "La vitamina cuya absorción en el íleon depende estrictamente de la presencia del factor intrínseco gástrico es:",
correcta: "Vitamina B12 (Cobalamina)",
incorrectas: [
"Vitamina K",
"Vitamina C"
]
},
{
enunciado: "¿Qué hormona gastrointestinal estimula la contracción de la vesícula biliar y la secreción de enzimas pancreáticas?",
correcta: "Colecistoquinina (CCK)",
incorrectas: [
"Secretina",
"Gastrina"
]
},
{
enunciado: "Las bandas longitudinales de músculo liso en el colon que producen la formación de haustras se llaman:",
correcta: "Tenias del colon",
incorrectas: [
"Apéndices epiploicos",
"Pliegues semilunares"
]
},
{
enunciado: "La digestión de los hidratos de carbono comienza en la boca mediante la acción de la enzima:",
correcta: "Ptialina o amilasa salival",
incorrectas: [
"Maltasa",
"Sacarasa"
]
},
{
enunciado: "El plexo nervioso situado entre las capas muscular longitudinal y circular, responsable del control de la motilidad gastrointestinal, es:",
correcta: "Plexo mientérico de Auerbach",
incorrectas: [
"Plexo de Meissner",
"Plexo celíaco"
]
},
{
enunciado: "¿En qué segmento del intestino delgado desembocan el conducto colédoco y el conducto pancreático principal?",
correcta: "Segunda porción del duodeno (Ampolla de Vater)",
incorrectas: [
"Yeyuno proximal",
"Íleon terminal"
]
},
{
enunciado: "La función principal del intestino grueso en el proceso digestivo es:",
correcta: "Absorción de agua, electrolitos y formación de heces",
incorrectas: [
"Digestión final de las proteínas",
"Secreción de enzimas para la degradación de la celulosa"
]
},
{
enunciado: "El proceso de transporte de los productos de la digestión desde la luz intestinal hacia la sangre o linfa se denomina:",
correcta: "Absorción",
incorrectas: [
"Ingestión",
"Defecación"
]
},
{
enunciado: "Las células principales del estómago secretan una enzima inactiva llamada:",
correcta: "Pepsinógeno",
incorrectas: [
"Gastrina",
"Tripsinógeno"
]
},
{
enunciado: "El conducto que transporta la bilis desde la vesícula biliar hasta su unión con el conducto hepático común es:",
correcta: "Conducto cístico",
incorrectas: [
"Conducto colédoco",
"Conducto de Wirsung"
]
},
{
enunciado: "La unidad funcional del hígado, de forma hexagonal y con una vena central, es:",
correcta: "Lobulillo hepático clásico",
incorrectas: [
"Acino hepático",
"Tríada portal"
]
},
{
enunciado: "Los quilomicrones, partículas que transportan lípidos absorbidos, entran inicialmente en:",
correcta: "Los vasos quilíferos (sistema linfático)",
incorrectas: [
"Los capilares sanguíneos de las vellosidades",
"La vena porta hepática"
]
},
{
enunciado: "La hormona secretada por las células G del antro gástrico que estimula la secreción de ácido es:",
correcta: "Gastrina",
incorrectas: [
"Histamina",
"Somatostatina"
]
},
{
enunciado: "La dentina de los dientes es producida por células especializadas denominadas:",
correcta: "Odontoblastos",
incorrectas: [
"Ameloblastos",
"Cementocitos"
]
},
{
enunciado: "El reflejo de la defecación se inicia por:",
correcta: "La distensión de las paredes del recto",
incorrectas: [
"La llegada de bilis al colon transverso",
"El aumento de pH en el sigma"
]
},
{
enunciado: "La fase de la secreción gástrica que se activa por la visión, olor o pensamiento de la comida es:",
correcta: "Fase cefálica",
incorrectas: [
"Fase gástrica",
"Fase intestinal"
]
},
{
enunciado: "Las enzimas del 'borde en cepillo' del intestino delgado incluyen:",
correcta: "Disacaridasas y dipeptidasas",
incorrectas: [
"Pepsina y lipasa gástrica",
"Carboxipeptidasas pancreáticas"
]
},
{
enunciado: "¿Cuál es el órgano que recibe la sangre rica en nutrientes procedentes del tracto digestivo a través de la vena porta?",
correcta: "Hígado",
incorrectas: [
"Páncreas",
"Bazo"
]
},
{
enunciado: "El moco que protege la mucosa gástrica de la autodigestión ácida es rico en:",
correcta: "Bicarbonato",
incorrectas: [
"Ácido clorhídrico",
"Sales biliares"
]
},
{
enunciado: "La capa más externa del esófago (por encima del diafragma) se denomina:",
correcta: "Adventicia",
incorrectas: [
"Serosa",
"Peritoneo visceral"
]
},
{
enunciado: "La degradación bacteriana de residuos no digeridos en el colon produce gases y vitamina:",
correcta: "Vitamina K",
incorrectas: [
"Vitamina D",
"Vitamina A"
]
},
{
enunciado: "Las contracciones rítmicas que propulsan el bolo alimenticio a lo largo del tubo digestivo se llaman:",
correcta: "Peristaltismo",
incorrectas: [
"Segmentación",
"Haustración"
]
},
{
enunciado: "El principal estímulo para la liberación de secretina es:",
correcta: "La llegada de quimo ácido al duodeno",
incorrectas: [
"La presencia de péptidos en el estómago",
"La distensión del esófago"
]
},
{
enunciado: "La unión de los conductos hepáticos derecho e izquierdo forma:",
correcta: "Conducto hepático común",
incorrectas: [
"Conducto colédoco",
"Conducto cístico"
]
},
{
enunciado: "En la boca, el frenillo es una estructura que limita el movimiento de:",
correcta: "La lengua",
incorrectas: [
"El paladar blando",
"Los labios"
]
},
{
enunciado: "El tipo de epitelio que reviste la mucosa del esófago es:",
correcta: "Plano estratificado no queratinizado",
incorrectas: [
"Cilíndrico simple con células caliciformes",
"Pseudoestratificado ciliado"
]
},
{
enunciado: "¿Qué enzima pancreática se encarga de degradar los triglicéridos?",
correcta: "Lipasa pancreática",
incorrectas: [
"Amilasa",
"Nucleidasa"
]
},
{
enunciado: "La porción final del intestino delgado que se une al intestino grueso es:",
correcta: "Íleon",
incorrectas: [
"Yeyuno",
"Duodeno"
]
},
{
enunciado: "Las células enteroendocrinas del intestino delgado secretan principalmente:",
correcta: "Hormonas como CCK y secretina",
incorrectas: [
"Mucus protector",
"Lisozima y defensinas"
]
},
{
enunciado: "El peritoneo que une el intestino delgado a la pared abdominal posterior se denomina:",
correcta: "Mesenterio",
incorrectas: [
"Omento mayor",
"Mesocolon"
]
}
];