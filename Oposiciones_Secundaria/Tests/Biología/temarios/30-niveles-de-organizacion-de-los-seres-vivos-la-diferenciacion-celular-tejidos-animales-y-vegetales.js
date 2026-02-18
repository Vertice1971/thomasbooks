// temarios/30-niveles-de-organizacion-de-los-seres-vivos-la-diferenciacion-celular-tejidos-animales-y-vegetales.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la secuencia jerárquica correcta de los niveles de organización biológica desde menor a mayor?",
    correcta: "Átomo → molécula → orgánulo → célula → tejido → órgano → sistema → organismo → población → comunidad → ecosistema → biosfera",
    incorrectas: [
      "Molécula → átomo → orgánulo → tejido → célula → órgano → sistema → organismo → ecosistema → población → biosfera → comunidad",
      "Átomo → célula → molécula → orgánulo → tejido → órgano → organismo → sistema → población → ecosistema → comunidad → biosfera"
    ]
  },
  {
    enunciado: "¿Qué afirma el principio celular básico sobre la unidad de vida?",
    correcta: "La célula es la unidad estructural, funcional y genética de los seres vivos",
    incorrectas: [
      "El tejido es la unidad funcional de los seres vivos",
      "El orgánulo es la unidad genética de los seres vivos"
    ]
  },
  {
    enunciado: "En organismos pluricelulares, ¿qué vincula físicamente a las células dentro de un tejido epitelial animal?",
    correcta: "Uniones estrechas, adherentes y desmosomas",
    incorrectas: [
      "Plasmodesmos y lignificación",
      "Interacciones hidrofóbicas inespecíficas exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue al nivel tisular respecto al celular?",
    correcta: "Emergen funciones colectivas no presentes en células aisladas",
    incorrectas: [
      "Desaparece la especialización celular por completo",
      "Se rompe toda comunicación intercelular"
    ]
  },
  {
    enunciado: "La diferenciación celular implica principalmente:",
    correcta: "Expresión diferencial de genes regulada por señales y mecanismos epigenéticos",
    incorrectas: [
      "Pérdida de ADN en las células que se especializan",
      "Cambio irreversible del código genético"
    ]
  },
  {
    enunciado: "Una célula madre multipotente se caracteriza por:",
    correcta: "Generar varios tipos celulares de un linaje determinado",
    incorrectas: [
      "Generar cualquier tipo celular del organismo (totipotencia)",
      "No dividirse nunca en condiciones fisiológicas"
    ]
  },
  {
    enunciado: "En animales, ¿qué tejido recubre superficies y cavidades y forma glándulas?",
    correcta: "Tejido epitelial",
    incorrectas: [
      "Tejido nervioso",
      "Tejido muscular"
    ]
  },
  {
    enunciado: "Un epitelio simple pavimentoso está especializado sobre todo en:",
    correcta: "Intercambio y difusión rápida",
    incorrectas: [
      "Contracción y generación de fuerza",
      "Conducción de impulsos eléctricos a larga distancia"
    ]
  },
  {
    enunciado: "Los epitelios glandulares exocrinos se distinguen por:",
    correcta: "Secretar su producto a superficies o cavidades a través de conductos",
    incorrectas: [
      "Liberar hormonas directamente al torrente sanguíneo siempre",
      "Carecer de polaridad apico-basal"
    ]
  },
  {
    enunciado: "El tejido conectivo se caracteriza por:",
    correcta: "Abundante matriz extracelular producida por sus propias células",
    incorrectas: [
      "Escasez de matriz y uniones celulares muy ocluyentes",
      "Membranas basales continuas como rasgo definitorio"
    ]
  },
  {
    enunciado: "¿Cuál es una célula típica del tejido conectivo laxo?",
    correcta: "Fibroblasto",
    incorrectas: [
      "Condrocito exclusivamente",
      "Célula de Purkinje"
    ]
  },
  {
    enunciado: "El cartílago hialino presenta como componente principal de su matriz:",
    correcta: "Colágeno tipo II y proteoglucanos",
    incorrectas: [
      "Colágeno tipo I exclusivamente como en tendón",
      "Fibrina y elastina en proporción dominante"
    ]
  },
  {
    enunciado: "La hidroxiapatita es característica de:",
    correcta: "Tejido óseo mineralizado",
    incorrectas: [
      "Tejido adiposo pardo",
      "Parénquima clorofiliano"
    ]
  },
  {
    enunciado: "La sangre se considera un tejido conectivo porque:",
    correcta: "Tiene elementos formes suspendidos en una matriz líquida (plasma)",
    incorrectas: [
      "Carece por completo de matriz extracelular",
      "Sus células están unidas por desmosomas como en el epitelio"
    ]
  },
  {
    enunciado: "El tejido muscular estriado esquelético se define por:",
    correcta: "Contracción voluntaria y fibras multinucleadas con sarcómeros",
    incorrectas: [
      "Contracción involuntaria y discos intercalares",
      "Ausencia de filamentación de actina y miosina"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue al músculo cardíaco?",
    correcta: "Discos intercalares que coordinan la contracción",
    incorrectas: [
      "Fibras multinucleadas gigantes como en el esquelético",
      "Inervación somática voluntaria directa"
    ]
  },
  {
    enunciado: "El tejido nervioso se compone fundamentalmente de:",
    correcta: "Neuronas y células gliales",
    incorrectas: [
      "Fibroblastos y condrocitos",
      "Miocitos y osteoclastos"
    ]
  },
  {
    enunciado: "Una función esencial de los oligodendrocitos en SNC es:",
    correcta: "Formar vainas de mielina alrededor de axones",
    incorrectas: [
      "Fagocitar eritrocitos envejecidos en bazo",
      "Regular apertura estomática"
    ]
  },
  {
    enunciado: "En plantas, los tejidos meristemáticos se caracterizan por:",
    correcta: "Células pequeñas, isodiamétricas y con alta actividad mitótica",
    incorrectas: [
      "Células gigantes multinucleadas y sin pared primaria",
      "Presencia constante de lignina en sus paredes"
    ]
  },
  {
    enunciado: "El crecimiento primario de la planta se debe a:",
    correcta: "Meristemos apicales de raíz y tallo",
    incorrectas: [
      "Cambios en el xilema secundario exclusivamente",
      "Tejidos de sostén maduros (esclerénquima)"
    ]
  },
  {
    enunciado: "El crecimiento secundario (engrosamiento) depende principalmente de:",
    correcta: "Cámbium vascular y felógeno",
    incorrectas: [
      "Epidermis y colénquima",
      "Parénquima esponjoso exclusivamente"
    ]
  },
  {
    enunciado: "El parénquima clorofiliano (clorénquima) se especializa en:",
    correcta: "Fotosíntesis gracias a abundantes cloroplastos",
    incorrectas: [
      "Conducción de savia bruta a larga distancia",
      "Lignificación temprana para sostén rígido"
    ]
  },
  {
    enunciado: "El colénquima vegetal aporta principalmente:",
    correcta: "Sostén flexible en órganos jóvenes",
    incorrectas: [
      "Transporte de azúcares vía elementos cribosos",
      "Impermeabilización peridérmica con suberina"
    ]
  },
  {
    enunciado: "El esclerénquima se distingue por:",
    correcta: "Paredes secundarias engrosadas con lignina y células a menudo muertas",
    incorrectas: [
      "Pared primaria delgada y células vivas con cloroplastos",
      "Almacenamiento principal de almidón en amiloplastos"
    ]
  },
  {
    enunciado: "El xilema transporta:",
    correcta: "Agua y sales minerales desde la raíz hacia órganos aéreos",
    incorrectas: [
      "Fotoasimilados desde hojas a órganos de reserva",
      "Fitohormonas exclusivamente en flujo bidireccional"
    ]
  },
  {
    enunciado: "En el floema, los elementos cribosos se acompañan de:",
    correcta: "Células acompañantes que soportan su metabolismo",
    incorrectas: [
      "Traqueidas con punteaduras areoladas",
      "Esclereidas tipo braquiesclereidas exclusivamente"
    ]
  },
  {
    enunciado: "La epidermis vegetal cumple principalmente funciones de:",
    correcta: "Protección, intercambio gaseoso y regulación hídrica mediante estomas",
    incorrectas: [
      "Conducción de savia elaborada",
      "Mineralización de pared con lignina secundaria"
    ]
  },
  {
    enunciado: "La peridermis sustituye a la epidermis en órganos maduros gracias a la actividad de:",
    correcta: "Felógeno que produce súber (hacia fuera) y felodermis (hacia dentro)",
    incorrectas: [
      "Cámbium vascular que forma exclusivamente xilema",
      "Meristemo apical que produce tricomas"
    ]
  },
  {
    enunciado: "Un ejemplo claro de órgano vegetal formado por varios tejidos es:",
    correcta: "La hoja con epidermis, mesófilo parenquimático y haces vasculares",
    incorrectas: [
      "Una célula guardia aislada",
      "Un grano de polen como tejido conductor"
    ]
  },
  {
    enunciado: "La especialización funcional de un miocito esquelético depende en gran parte de:",
    correcta: "Organización sarcomérica de actina y miosina y abundantes mitocondrias",
    incorrectas: [
      "Ausencia de retículo sarcoplásmico",
      "Secreción apocrina de hormonas"
    ]
  },
  {
    enunciado: "¿Qué componente de la matriz extracelular conecta células con fibras mediante integrinas?",
    correcta: "Fibronectina",
    incorrectas: [
      "Lignina",
      "Celulosa cristalina"
    ]
  },
  {
    enunciado: "La diferenciación del epidermis en raíces produce pelos radicales que:",
    correcta: "Aumentan la superficie de absorción de agua y minerales",
    incorrectas: [
      "Transportan activamente fotoasimilados al xilema",
      "Forman parte del floema secundario"
    ]
  },
  {
    enunciado: "En el desarrollo animal, los gradientes de morfógenos influyen en la diferenciación celular porque:",
    correcta: "Activan programas génicos dependientes de concentración",
    incorrectas: [
      "Eliminan físicamente cromosomas de células distales",
      "Impiden cualquier comunicación intercelular"
    ]
  },
  {
    enunciado: "Un epitelio seudoestratificado cilíndrico ciliado típico se localiza en:",
    correcta: "Vías respiratorias, donde participa en limpieza mucociliar",
    incorrectas: [
      "Músculo liso intestinal",
      "Médula ósea hematopoyética"
    ]
  },
  {
    enunciado: "El tejido adiposo blanco cumple funciones de:",
    correcta: "Reserva energética, aislamiento térmico y señalización endocrina",
    incorrectas: [
      "Conducción eléctrica rápida",
      "Mineralización de matriz para sostén rígido"
    ]
  },
  {
    enunciado: "Las traqueidas y los elementos de vaso son células propias de:",
    correcta: "Xilema, especializadas en conducción de agua",
    incorrectas: [
      "Floema, especializadas en conducción de azúcares",
      "Parénquima aerífero"
    ]
  },
  {
    enunciado: "La variabilidad de tipos celulares con el mismo genoma en un organismo se debe sobre todo a:",
    correcta: "Regulación de la expresión génica y modificaciones epigenéticas",
    incorrectas: [
      "Diferencias masivas en la secuencia del ADN nuclear entre tejidos",
      "Pérdida completa de cromosomas en células diferenciadas"
    ]
  },
  {
    enunciado: "Los tejidos de sostén vegetales contribuyen a:",
    correcta: "Resistir tensiones y mantener la forma del órgano",
    incorrectas: [
      "Regular fugazmente la apertura de poros nucleares",
      "Iniciar la germinación mediante secreción de amilasas"
    ]
  },
  {
    enunciado: "Un sistema u órgano animal se define mejor como:",
    correcta: "Conjunto integrado de órganos y tejidos coordinados para una función",
    incorrectas: [
      "Una sola célula gigante que realiza todas las funciones",
      "Un grupo de moléculas sin interacción entre sí"
    ]
  },
  {
    enunciado: "En plantas, los plasmodesmos permiten:",
    correcta: "Comunicación y transporte simbióntico entre células adyacentes",
    incorrectas: [
      "Contracción muscular coordinada",
      "Generación de potenciales de acción en axones mielinizados"
    ]
  }
];
