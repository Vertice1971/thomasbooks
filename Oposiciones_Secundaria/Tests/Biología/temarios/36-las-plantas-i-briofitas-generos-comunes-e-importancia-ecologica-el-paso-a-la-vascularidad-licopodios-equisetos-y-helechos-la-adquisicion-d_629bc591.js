// temarios/36-las-plantas-i-briofitas-generos-comunes-e-importancia-ecologica-el-paso-a-la-vascularidad-licopodios-equisetos-y-helechos-la-adquisicion-de-semillas-cicadofitos-y-ginkofitos.js
var PREGUNTAS = [
  {
    enunciado: "En las briofitas, ¿qué fase del ciclo vital es dominante y fotosintéticamente activa?",
    correcta: "El gametofito",
    incorrectas: [
      "El esporofito independiente",
      "El cigoto diploide plurianual"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes grupos NO posee tejidos vasculares lignificados verdaderos?",
    correcta: "Briofitas",
    incorrectas: [
      "Licófitos",
      "Helechos"
    ]
  },
  {
    enunciado: "¿Qué estructura anclante presentan típicamente las briofitas en lugar de raíces verdaderas?",
    correcta: "Rizoides",
    incorrectas: [
      "Pelos radicales",
      "Micorrizas arbusculares"
    ]
  },
  {
    enunciado: "En musgos, la cápsula esporangial suele abrirse y liberar esporas regulada por:",
    correcta: "Un peristomio dentado higroscópico",
    incorrectas: [
      "Un opérculo con estomas activos",
      "Una fisura longitudinal en el tallo"
    ]
  },
  {
    enunciado: "En hepáticas del género Marchantia, la reproducción asexual se realiza mediante:",
    correcta: "Cúpulas de propágulos (gemas)",
    incorrectas: [
      "Estolones subterráneos",
      "Bulbilos en hojas compuestas"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a las antocerotas respecto a musgos y hepáticas?",
    correcta: "Esporófito alargado con crecimiento intercalar prolongado",
    incorrectas: [
      "Frondes megafilas con soros",
      "Estrobilos con micro y megasporas"
    ]
  },
  {
    enunciado: "Las turberas dominadas por Sphagnum son importantes porque:",
    correcta: "Almacenan grandes cantidades de carbono y regulan el régimen hídrico",
    incorrectas: [
      "Fijan nitrógeno mediante nódulos",
      "Poseen raíces adventicias profundas"
    ]
  },
  {
    enunciado: "La transición evolutiva clave de pteridófitas frente a briofitas fue:",
    correcta: "La aparición de xilema y floema funcionales con lignina",
    incorrectas: [
      "La pérdida de estomas",
      "La aparición de flores y frutos"
    ]
  },
  {
    enunciado: "Los licófitos se caracterizan por presentar hojas de tipo:",
    correcta: "Microfilos con una sola vena",
    incorrectas: [
      "Megafilos con red venosa compleja",
      "Agujas sin nerviación"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes géneros presenta heterosporia dentro de los licófitos?",
    correcta: "Selaginella",
    incorrectas: [
      "Lycopodium",
      "Equisetum"
    ]
  },
  {
    enunciado: "En Equisetum, las esporas poseen estructuras higroscópicas llamadas:",
    correcta: "Eláteres",
    incorrectas: [
      "Peristomios",
      "Arquegonios"
    ]
  },
  {
    enunciado: "Un rasgo anatómico notable de Equisetum es:",
    correcta: "Tallos articulados con depósitos de sílice",
    incorrectas: [
      "Hojas megafilas palmadas",
      "Vasculatura secundaria extensa"
    ]
  },
  {
    enunciado: "En los helechos leptosporangiados, los esporangios se agrupan típicamente en:",
    correcta: "Soros en el envés de las frondes",
    incorrectas: [
      "Conos terminales leñosos",
      "Flores apétalas en inflorescencias"
    ]
  },
  {
    enunciado: "El indusio en helechos es:",
    correcta: "Una membrana que cubre y protege el soro",
    incorrectas: [
      "El tejido fotosintético del protalo",
      "El anillo de dehiscencia de la cápsula musgosa"
    ]
  },
  {
    enunciado: "El gametofito de muchos helechos típicamente es:",
    correcta: "Un protalo libre, cordiforme y fotosintético",
    incorrectas: [
      "Un saco embrionario en el óvulo",
      "Un grano de polen con tubo polínico"
    ]
  },
  {
    enunciado: "En pteridófitas, la fecundación requiere agua porque:",
    correcta: "Los anterozoides son flagelados y nadan hasta el arquegonio",
    incorrectas: [
      "El polen carece de exina",
      "El óvulo se libera al agua para ser fecundado"
    ]
  },
  {
    enunciado: "La heterosporia (micro y megasporas) es un paso previo evolutivo hacia:",
    correcta: "La formación de la semilla",
    incorrectas: [
      "La pérdida del esporófito",
      "La aparición de frutos carnosos"
    ]
  },
  {
    enunciado: "Las gimnospermas se definen por presentar:",
    correcta: "Semillas desnudas no encerradas en fruto",
    incorrectas: [
      "Flores hermafroditas con perianto",
      "Doble fecundación con endospermo triploide"
    ]
  },
  {
    enunciado: "Los cicadófitos (Cycadales) son típicamente:",
    correcta: "Dioicos, con hojas pinnadas en corona y conos separados",
    incorrectas: [
      "Monoicos con flores compuestas",
      "Herbáceos anuales de porte bajo"
    ]
  },
  {
    enunciado: "Una singularidad reproductiva de muchas cícadas y Ginkgo es que:",
    correcta: "Producen espermatozoides flagelados",
    incorrectas: [
      "Carecen de polen",
      "Tienen doble fecundación obligada"
    ]
  },
  {
    enunciado: "Las raíces coraloides de cícadas albergan frecuentemente:",
    correcta: "Cianobacterias fijadoras de nitrógeno",
    incorrectas: [
      "Hongos ectomicorrícicos exclusivamente",
      "Bacterias nitrosantes del género Nitrosomonas"
    ]
  },
  {
    enunciado: "Ginkgo biloba se reconoce por sus hojas:",
    correcta: "En abanico con nerviación dicótoma",
    incorrectas: [
      "Pinnadas con foliolos opuestos",
      "Agujas fasciculadas con resina"
    ]
  },
  {
    enunciado: "En Ginkgo, la cubierta carnosa y maloliente de la semilla corresponde a:",
    correcta: "La sarcotesta del tegumento",
    incorrectas: [
      "El pericarpo de un fruto verdadero",
      "El arilo procedente del funículo"
    ]
  },
  {
    enunciado: "En gimnospermas, el tejido de reserva de la semilla suele ser:",
    correcta: "El gametofito femenino haploide (endospermo primario)",
    incorrectas: [
      "Un tejido triploide de doble fecundación",
      "El perisperma derivado del integumento"
    ]
  },
  {
    enunciado: "¿Cuál es la relación correcta entre esporangio y esporófito en briofitas?",
    correcta: "El esporangio forma parte de un esporófito dependiente del gametofito",
    incorrectas: [
      "El esporangio es independiente y autotrófico",
      "El esporangio pertenece al gametofito"
    ]
  },
  {
    enunciado: "Los licopodios (Lycopodium) se diferencian de Selaginella porque:",
    correcta: "Suelen ser homospóricos, con un solo tipo de espora",
    incorrectas: [
      "Presentan megafilos con nerviación reticulada",
      "Carecen de estrobilos"
    ]
  },
  {
    enunciado: "Un ejemplo de helecho con soros muy visibles en praderas y claros es:",
    correcta: "Pteridium aquilinum",
    incorrectas: [
      "Isoëtes lacustris",
      "Ginkgo biloba"
    ]
  },
  {
    enunciado: "La función de la lignina en plantas vasculares es principalmente:",
    correcta: "Aportar rigidez y permitir el transporte de agua a tensión",
    incorrectas: [
      "Facilitar la fecundación por agua",
      "Fijar nitrógeno atmosférico en el xilema"
    ]
  },
  {
    enunciado: "¿Qué grupo presenta estomas en el esporófito, aunque el gametofito sea dominante?",
    correcta: "Musgos (en la cápsula del esporófito)",
    incorrectas: [
      "Hepáticas talosas (carecen de estomas verdaderos)",
      "Cícadas (sólo en gametofito)"
    ]
  },
  {
    enunciado: "El término 'protalo' hace referencia a:",
    correcta: "El gametofito libre de muchas pteridófitas",
    incorrectas: [
      "El primordio de la semilla en gimnospermas",
      "La cúpula de propágulos en hepáticas"
    ]
  },
  {
    enunciado: "La dominancia del esporófito aparece por primera vez de manera clara en:",
    correcta: "Plantas vasculares sin semilla (licófitos y helechos)",
    incorrectas: [
      "Briofitas",
      "Algas carófitas"
    ]
  },
  {
    enunciado: "¿Cuál de estas combinaciones es correcta respecto a la generación dominante?",
    correcta: "Briofitas: gametofito / Pteridófitas: esporófito",
    incorrectas: [
      "Briofitas: esporófito / Pteridófitas: gametofito",
      "Ambas: esporófito"
    ]
  },
  {
    enunciado: "La polinización en cícadas y ginkgo es principalmente:",
    correcta: "Anemófila (por viento), con casos de vectores especializados",
    incorrectas: [
      "Hidrófila obligada",
      "Zoófila estricta por aves"
    ]
  },
  {
    enunciado: "¿Qué innovación permitió a las espermatofitas independizarse del agua para la fecundación?",
    correcta: "El grano de polen y el tubo polínico",
    incorrectas: [
      "La aparición del indusio",
      "La producción de eláteres"
    ]
  },
  {
    enunciado: "En el registro fósil paleozoico, ¿qué plantas contribuyeron de forma relevante a la formación de carbón?",
    correcta: "Bosques de pteridófitas arborescentes y licófitos",
    incorrectas: [
      "Turberas de Sphagnum exclusivamente",
      "Coníferas cretácicas"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes emparejamientos es correcto?",
    correcta: "Equisetum – estróbilos con esporangióforos",
    incorrectas: [
      "Marchantia – soros leptosporangiados",
      "Ginkgo – frutos carnosos verdaderos"
    ]
  },
  {
    enunciado: "El paso de homosporia a heterosporia implica:",
    correcta: "Separación funcional de gametofitos masculinos y femeninos",
    incorrectas: [
      "Reducción del esporófito a talo",
      "Pérdida de meiosis en el ciclo"
    ]
  },
  {
    enunciado: "Una razón por la que briofitas son buenos bioindicadores locales es:",
    correcta: "Alta sensibilidad a cambios de humedad, acidez y contaminantes atmosféricos",
    incorrectas: [
      "Ausencia total de intercambio gaseoso",
      "Dependencia obligada de suelos salinos"
    ]
  },
  {
    enunciado: "En Selaginella, las megasporas dan origen a:",
    correcta: "Gametofitos femeninos reducidos",
    incorrectas: [
      "Gametofitos masculinos con anterozoides",
      "Esporófitos diploides directamente"
    ]
  }
];
