// temarios/38-morfologia-y-fisiologia-de-las-estructuras-vegetativas-y-reproductoras-de-las-cormofitas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza morfológicamente a las cormófitas?",
    correcta: "Presentan órganos diferenciados: raíz, tallo y hojas",
    incorrectas: [
      "Carecen de tejidos y son taloides",
      "Sólo poseen hojas y rizoides"
    ]
  },
  {
    enunciado: "La zona de una raíz donde aparecen pelos absorbentes es principalmente la:",
    correcta: "Zona de diferenciación o maduración",
    incorrectas: [
      "Caliptra o cofia",
      "Zona meristemática apical"
    ]
  },
  {
    enunciado: "La banda de Caspary, típica de la endodermis radical, obliga al agua a pasar por:",
    correcta: "Vía simplástica a través del citoplasma de las células endodérmicas",
    incorrectas: [
      "Vía apoplástica sin restricciones",
      "Vía transmembrana exclusivamente a través del xilema"
    ]
  },
  {
    enunciado: "La raíz axonomorfa (pivotante) es típica de:",
    correcta: "Dicotiledóneas leñosas con una raíz principal dominante",
    incorrectas: [
      "Monocotiledóneas con sistema fasciculado",
      "Plantas acuáticas flotantes sin raíces"
    ]
  },
  {
    enunciado: "Una modificación radical de almacenamiento en la que la raíz se engrosa de forma muy acusada es:",
    correcta: "Napiforme",
    incorrectas: [
      "Estolón",
      "Cladodio"
    ]
  },
  {
    enunciado: "Las raíces adventicias son aquellas que:",
    correcta: "Se originan a partir del tallo u otras partes no radicales",
    incorrectas: [
      "Se forman exclusivamente del meristemo apical radical",
      "Únicamente aparecen en la raíz primaria"
    ]
  },
  {
    enunciado: "Los neumatóforos son raíces modificadas que:",
    correcta: "Favorecen el intercambio gaseoso en suelos anóxicos",
    incorrectas: [
      "Almacenan almidón en bulbos subterráneos",
      "Realizan fotosíntesis CAM nocturna"
    ]
  },
  {
    enunciado: "Los haustorios son estructuras radicales de plantas:",
    correcta: "Parásitas o hemiparásitas que penetran tejidos del hospedador",
    incorrectas: [
      "Halófitas para excretar sal",
      "Crasas para acumular agua"
    ]
  },
  {
    enunciado: "El xilema conduce principalmente:",
    correcta: "Agua y sales minerales desde la raíz hacia los órganos aéreos",
    incorrectas: [
      "Fotoasimilados desde fuentes a sumideros",
      "Hormonas exclusivamente hacia la raíz"
    ]
  },
  {
    enunciado: "La teoría de cohesión-tensión explica:",
    correcta: "El ascenso de la savia bruta por tracción generada en la transpiración",
    incorrectas: [
      "El flujo de floema por gradiente de presión de carga-descarga",
      "El movimiento de agua por presión positiva en tallos leñosos únicamente"
    ]
  },
  {
    enunciado: "El modelo presión-flujo (Münch) describe el transporte en:",
    correcta: "Floema, desde fuentes (hojas) a sumideros (frutos/raíces)",
    incorrectas: [
      "Xilema, desde raíces a hojas",
      "Apoplasto, entre espacios celulares"
    ]
  },
  {
    enunciado: "¿Cuál es una función principal del tallo?",
    correcta: "Soporte y conducción entre órganos subterráneos y aéreos",
    incorrectas: [
      "Fijación del dióxido de carbono mediante Rubisco",
      "Absorción selectiva de iones del suelo"
    ]
  },
  {
    enunciado: "Un rizoma es un tallo que:",
    correcta: "Es subterráneo, con nudos y yemas, y produce raíces adventicias",
    incorrectas: [
      "Es una raíz engrosada sin nudos",
      "Es un fruto carnoso con semillas"
    ]
  },
  {
    enunciado: "Un tubérculo como la patata es:",
    correcta: "Un tallo subterráneo engrosado que almacena almidón",
    incorrectas: [
      "Una raíz napiforme",
      "Un bulbo compuesto por bases foliares carnosas"
    ]
  },
  {
    enunciado: "Los estolones son:",
    correcta: "Tallos aéreos rastreros que enraízan en los nudos",
    incorrectas: [
      "Raíces laterales profundas",
      "Estructuras reproductivas del gineceo"
    ]
  },
  {
    enunciado: "Un cladodio es:",
    correcta: "Un tallo aplanado con función fotosintética que sustituye a las hojas",
    incorrectas: [
      "Una hoja reducida en espina",
      "Un esporofilo portador de microsporangios"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre espinas y aguijones (acúleos)?",
    correcta: "Las espinas derivan de hojas o tallos y están vascularizadas; los acúleos son protuberancias epidérmicas",
    incorrectas: [
      "Ambas son hojas modificadas sin vasculatura",
      "Los acúleos son raíces transformadas"
    ]
  },
  {
    enunciado: "La hoja dorsiventral típica posee:",
    correcta: "Parénquima en empalizada adaxial y esponjoso abaxial",
    incorrectas: [
      "Dos epidermis con cloroplastos abundantes y sin mesófilo",
      "Sólo parénquima acuoso sin estomas"
    ]
  },
  {
    enunciado: "La apertura estomática se favorece generalmente por:",
    correcta: "Entrada de K+ en células oclusivas con luz y bajo CO₂",
    incorrectas: [
      "Ácido abscísico (ABA) y déficit hídrico",
      "Alta humedad foliar y oscuridad"
    ]
  },
  {
    enunciado: "La filotaxia decusada corresponde a hojas:",
    correcta: "Opuestas en pares sucesivos girados 90° entre sí",
    incorrectas: [
      "Verticiladas en grupos de tres o más por nudo",
      "Alternas helicoidales sin regularidad"
    ]
  },
  {
    enunciado: "Una hoja compuesta pinnada se diferencia de una simple porque:",
    correcta: "Sus folíolos se insertan sobre un raquis y no poseen yema axilar propia",
    incorrectas: [
      "Siempre tiene margen entero",
      "Carece de pecíolo y nerviación"
    ]
  },
  {
    enunciado: "Las brácteas son:",
    correcta: "Hojas modificadas asociadas a flores o inflorescencias",
    incorrectas: [
      "Epidermis pluriestratificada del limbo",
      "Semillas inmaduras del ovario"
    ]
  },
  {
    enunciado: "En angiospermas, el perianto formado por piezas indiferenciadas se denomina:",
    correcta: "Tépalo (periantos con tépalos)",
    incorrectas: [
      "Cáliz y corola siempre diferenciados",
      "Androceo"
    ]
  },
  {
    enunciado: "Una flor actinomorfa es aquella que:",
    correcta: "Presenta simetría radial",
    incorrectas: [
      "Es cigomorfa (bilateral)",
      "Carece de perianto"
    ]
  },
  {
    enunciado: "Un gineceo súpero implica que el ovario está:",
    correcta: "Por encima de la inserción del perianto y androceo",
    incorrectas: [
      "Parcialmente inferior en receptáculo concavo",
      "Totalmente por debajo de las piezas florales"
    ]
  },
  {
    enunciado: "La placentación axilar se caracteriza por:",
    correcta: "Óvulos insertos en un eje central con tabiques que separan lóculos",
    incorrectas: [
      "Óvulos sobre las paredes del ovario sin tabiques (parietal)",
      "Óvulos sobre el receptáculo sin carpelos"
    ]
  },
  {
    enunciado: "En el óvulo anatropo (el más común) el micropilo queda:",
    correcta: "Próximo al funículo por incurvación del óvulo",
    incorrectas: [
      "Opuesto al hilo por enderezamiento",
      "Ausente por falta de tegumentos"
    ]
  },
  {
    enunciado: "El saco embrionario tipo Polygonum posee típicamente:",
    correcta: "Siete células y ocho núcleos",
    incorrectas: [
      "Cuatro células haploides idénticas",
      "Ocho células con ocho núcleos y pared gruesa"
    ]
  },
  {
    enunciado: "En la microsporogénesis, cada microsporo procede de:",
    correcta: "Una tétrada formada tras la meiosis del microsporocito",
    incorrectas: [
      "La mitosis del grano de polen bicelular",
      "La división del megasporocito"
    ]
  },
  {
    enunciado: "La doble fecundación de angiospermas origina:",
    correcta: "Un cigoto (2n) y un endospermo (3n) en la mayoría de especies",
    incorrectas: [
      "Dos cigotos diploides",
      "Un endospermo haploide y un cigoto triploide"
    ]
  },
  {
    enunciado: "El tubo polínico lo emite la célula:",
    correcta: "Vegetativa del polen, que guía a las dos células espermáticas",
    incorrectas: [
      "Generativa tras fusionarse con el sinérgido",
      "Merosoma del antipodal"
    ]
  },
  {
    enunciado: "Un fruto simple carnoso derivado de un ovario súpero con mesocarpo carnoso y endocarpo no leñoso es:",
    correcta: "Baya",
    incorrectas: [
      "Drupa (endocarpo leñoso)",
      "Sámara (indehiscente alada)"
    ]
  },
  {
    enunciado: "Una cipsela es característica de:",
    correcta: "Asteraceae (fruto indehiscente derivado de ovario ínfero)",
    incorrectas: [
      "Fabaceae (legumbre dehiscente)",
      "Poaceae (cariópside con pericarpio soldado)"
    ]
  },
  {
    enunciado: "La semilla de gramíneas (cariópside) se distingue porque:",
    correcta: "El pericarpio está soldado a la testa y al endospermo",
    incorrectas: [
      "Carece de embrión",
      "Posee cotiledones múltiples"
    ]
  },
  {
    enunciado: "Durante la germinación de cereales, la giberelina (GA) producida por el embrión induce:",
    correcta: "Síntesis de amilasas en el aleurona para movilizar almidón",
    incorrectas: [
      "Cierre estomático y latencia prolongada",
      "Formación del tubo polínico"
    ]
  },
  {
    enunciado: "La dormancia de semillas puede romperse por:",
    correcta: "Escarificación, estratificación fría o tratamientos con GA",
    incorrectas: [
      "Exposición continua a ABA y anoxia",
      "Desecación extrema indefinida sin rehidratación"
    ]
  },
  {
    enunciado: "Una adaptación xeromórfica foliar típica es:",
    correcta: "Estomas hundidos y cutícula gruesa",
    incorrectas: [
      "Mesófilo sin cloroplastos",
      "Epidermis uniestratificada sin cutícula en desierto"
    ]
  },
  {
    enunciado: "La polinización anemófila se asocia con flores:",
    correcta: "Pequeñas, sin néctar, con abundante polen y estigmas plumosos",
    incorrectas: [
      "Grandes, vistosas y nectaríferas para polinizadores",
      "Siempre hermafroditas y perfumadas"
    ]
  },
  {
    enunciado: "¿Cuál es el principal gradiente físico que impulsa la transpiración?",
    correcta: "El déficit de presión de vapor entre hoja y atmósfera",
    incorrectas: [
      "Gradiente de potencial químico del floema",
      "Gradiente gravitacional positivo"
    ]
  },
  {
    enunciado: "Las micorrizas mejoran principalmente:",
    correcta: "La absorción de fósforo y agua por parte de la raíz",
    incorrectas: [
      "La fotosíntesis del tallo por aumento de cloroplastos",
      "El cierre estomático permanente"
    ]
  }
];
