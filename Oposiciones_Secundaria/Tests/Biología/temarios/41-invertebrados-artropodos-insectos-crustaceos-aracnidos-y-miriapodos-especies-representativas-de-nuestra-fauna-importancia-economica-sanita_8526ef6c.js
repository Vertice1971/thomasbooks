// temarios/41-invertebrados-artropodos-insectos-crustaceos-aracnidos-y-miriapodos-especies-representativas-importancia-economica-sanitaria-y-alimentaria.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es un rasgo definitorio de los artrópodos?",
    correcta: "Exoesqueleto quitinoso con apéndices articulados y mudas (ecdisis)",
    incorrectas: [
      "Endoesqueleto calcáreo con osículos",
      "Pared celular de celulosa y vacuolas"
    ]
  },
  {
    enunciado: "En los insectos, la organización corporal típica se divide en:",
    correcta: "Cabeza, tórax y abdomen",
    incorrectas: [
      "Prosoma y opistosoma",
      "Caparazón y plastrón"
    ]
  },
  {
    enunciado: "¿Cuántas patas presentan los insectos adultos típicos?",
    correcta: "Seis patas (tres pares)",
    incorrectas: [
      "Ocho patas (cuatro pares)",
      "Diez patas (cinco pares)"
    ]
  },
  {
    enunciado: "La metamorfosis completa (holometabolía) incluye los estadios:",
    correcta: "Huevo, larva, pupa y adulto",
    incorrectas: [
      "Huevo, ninfa y adulto",
      "Larva, pupa y huevo sin adulto"
    ]
  },
  {
    enunciado: "Un polinizador clave en la Península Ibérica es:",
    correcta: "Apis mellifera",
    incorrectas: [
      "Periplaneta americana",
      "Carcinus maenas"
    ]
  },
  {
    enunciado: "Una mariquita depredadora de pulgones frecuente en España es:",
    correcta: "Coccinella septempunctata",
    incorrectas: [
      "Pieris brassicae",
      "Blattella germanica"
    ]
  },
  {
    enunciado: "Entre los lepidópteros plaga de brassicáceas destaca:",
    correcta: "Pieris brassicae",
    incorrectas: [
      "Papilio machaon (interés conservacionista)",
      "Bombyx mori en estado silvestre"
    ]
  },
  {
    enunciado: "¿Qué mosquito se ha expandido en España y puede transmitir arbovirus?",
    correcta: "Aedes albopictus",
    incorrectas: [
      "Anopheles darlingi (neotropical)",
      "Culiseta longiareolata no vector de dengue"
    ]
  },
  {
    enunciado: "La respiración en la mayoría de insectos terrestres se realiza por:",
    correcta: "Sistema traqueal con espiráculos",
    incorrectas: [
      "Pulmones en libro",
      "Branquias laminares internas"
    ]
  },
  {
    enunciado: "Un ejemplo de orden de insectos con piezas bucales chupadoras en hemípteros es:",
    correcta: "Heteroptera (chinches verdaderas)",
    incorrectas: [
      "Odonata (libélulas)",
      "Orthoptera (saltamontes)"
    ]
  },
  {
    enunciado: "¿Cuál es un crustáceo decápodo de alto valor comercial en costas españolas?",
    correcta: "Nephrops norvegicus (cigala)",
    incorrectas: [
      "Arenicola marina (anélido)",
      "Helix aspersa (gasterópodo terrestre)"
    ]
  },
  {
    enunciado: "El percebe recolectado en el Atlántico ibérico corresponde a:",
    correcta: "Pollicipes pollicipes (Cirripedia)",
    incorrectas: [
      "Loligo vulgaris (cefalópodo)",
      "Mytilus galloprovincialis (bivalvo)"
    ]
  },
  {
    enunciado: "Un crustáceo introducido que desplazó al autóctono en ríos ibéricos es:",
    correcta: "Procambarus clarkii (cangrejo rojo americano)",
    incorrectas: [
      "Carcinus maenas autóctono atlántico",
      "Homarus gammarus exclusivamente marino"
    ]
  },
  {
    enunciado: "Los crustáceos se distinguen de los insectos por presentar típicamente:",
    correcta: "Dos pares de antenas y apéndices birrámeos",
    incorrectas: [
      "Un par de antenas y tres pares de patas",
      "Pulmones en libro sin antenas"
    ]
  },
  {
    enunciado: "En arácnidos, los apéndices bucales modificados para inyección de veneno o sujeción se llaman:",
    correcta: "Quelíceros",
    incorrectas: [
      "Mandíbulas",
      "Maxilípedos"
    ]
  },
  {
    enunciado: "Un arácnido escorpiónido característico de ambientes mediterráneos españoles es:",
    correcta: "Buthus occitanus",
    incorrectas: [
      "Argiope bruennichi (araña araneomorfa)",
      "Scolopendra cingulata (miriápodo)"
    ]
  },
  {
    enunciado: "Una araña tejedora conspicua en praderas y lindes ibéricas es:",
    correcta: "Argiope bruennichi",
    incorrectas: [
      "Ixodes ricinus (garrapata)",
      "Vespa velutina (himenóptero)"
    ]
  },
  {
    enunciado: "Las garrapatas duras como Ixodes ricinus son importantes porque:",
    correcta: "Pueden transmitir patógenos como Borrelia (enfermedad de Lyme)",
    incorrectas: [
      "Son polinizadores de frutales",
      "Son filtradores marinos de plancton"
    ]
  },
  {
    enunciado: "Los arácnidos típicamente presentan:",
    correcta: "Dos tagmas: prosoma y opistosoma, y cuatro pares de patas",
    incorrectas: [
      "Tres tagmas y tres pares de patas",
      "Dos pares de antenas y branquias"
    ]
  },
  {
    enunciado: "En miriápodos, los ciempiés (Chilopoda) se caracterizan por:",
    correcta: "Ser depredadores con un par de patas por segmento y forcípulas venenosas",
    incorrectas: [
      "Ser detritívoros con dos pares de patas por segmento",
      "Poseer ocho patas y pedipalpos desarrollados"
    ]
  },
  {
    enunciado: "Un miriápodo diplópodo común en suelos ibéricos es:",
    correcta: "Julus spp.",
    incorrectas: [
      "Lumbricus terrestris (anélido, no artrópodo quelicerado)",
      "Carabus auronitens (insecto coleóptero)"
    ]
  },
  {
    enunciado: "La importancia económica positiva de los insectos incluye:",
    correcta: "Polinización y control biológico de plagas",
    incorrectas: [
      "Aumento de resistencias a insecticidas",
      "Transmisión de arbovirosis"
    ]
  },
  {
    enunciado: "Una plaga agrícola emergente en frutales blandos en España es:",
    correcta: "Drosophila suzukii",
    incorrectas: [
      "Aplysia depilans",
      "Paracentrotus lividus"
    ]
  },
  {
    enunciado: "La apicultura aporta productos como:",
    correcta: "Miel, cera, propóleos y polinización dirigida",
    incorrectas: [
      "Perlas y nácar",
      "Corcho y resinas"
    ]
  },
  {
    enunciado: "La Gestión Integrada de Plagas (GIP) promueve:",
    correcta: "Monitoreo, umbrales, control biológico y rotación de modos de acción",
    incorrectas: [
      "Aplicación calendarizada sin diagnóstico",
      "Uso exclusivo de un insecticida de amplio espectro"
    ]
  },
  {
    enunciado: "Una especie invasora que afecta a las abejas melíferas es:",
    correcta: "Vespa velutina",
    incorrectas: [
      "Coccinella septempunctata",
      "Formica rufa"
    ]
  },
  {
    enunciado: "Un decápodo de interés pesquero presente en el Cantábrico es:",
    correcta: "Homarus gammarus (bogavante europeo)",
    incorrectas: [
      "Gadus morhua (pez, no artrópodo)",
      "Anodonta cygnea (bivalvo de agua dulce)"
    ]
  },
  {
    enunciado: "Los crustáceos anfípodos e isópodos contribuyen ecológicamente como:",
    correcta: "Detritívoros y piezas clave del bentos",
    incorrectas: [
      "Polinizadores de plantas halófitas",
      "Productores primarios de arrecifes"
    ]
  },
  {
    enunciado: "Una cucaracha urbana frecuente en climas templados es:",
    correcta: "Blattella germanica",
    incorrectas: [
      "Lycosa tarantula",
      "Julus terrestris"
    ]
  },
  {
    enunciado: "Los arácnidos poseen sistemas respiratorios que pueden incluir:",
    correcta: "Pulmones en libro y/o tráqueas",
    incorrectas: [
      "Branquias con opérculo",
      "Pulmones alveolares con diafragma"
    ]
  },
  {
    enunciado: "El cangrejo verde Carcinus maenas se considera:",
    correcta: "Una especie eurihalina con potencial invasor fuera de su área nativa",
    incorrectas: [
      "Un insecto acuático hemíptero",
      "Un arácnido de agua dulce"
    ]
  },
  {
    enunciado: "La importancia alimentaria de crustáceos en España se refleja en:",
    correcta: "Pesquerías y acuicultura de decápodos (gambas, cigalas, langosta)",
    incorrectas: [
      "Cría de ciempiés para consumo masivo",
      "Recolección de garrapatas comestibles"
    ]
  },
  {
    enunciado: "Un riesgo sanitario asociado a garrapatas en la Península Ibérica es:",
    correcta: "Transmisión de rickettsiosis y enfermedad de Lyme",
    incorrectas: [
      "Cólera marino por Vibrio directamente",
      "Triquinosis por ingestión de larvas en carne"
    ]
  },
  {
    enunciado: "En insectos, la hembra de muchos himenópteros puede producir machos por:",
    correcta: "Haplodiploidía (machos haploides por partenogénesis arrenotoca)",
    incorrectas: [
      "Autopoliploidía obligada",
      "Cigotos triploides fértiles"
    ]
  },
  {
    enunciado: "Un ejemplo de insecto depredador útil en agricultura protegida es:",
    correcta: "Chrysoperla carnea (neúróptero, larvas “leones de pulgón”)",
    incorrectas: [
      "Pieris brassicae",
      "Ixodes ricinus"
    ]
  },
  {
    enunciado: "Los miriápodos diplópodos contribuyen a la calidad del suelo mediante:",
    correcta: "Descomposición de hojarasca y reciclaje de nutrientes",
    incorrectas: [
      "Polinización de cultivos",
      "Filtración de fitoplancton"
    ]
  },
  {
    enunciado: "Un arácnido con actividad nocturna frecuente bajo piedras y muros es:",
    correcta: "Scorpiones como Buthus occitanus",
    incorrectas: [
      "Carabus auratus (insecto)",
      "Procambarus clarkii (crustáceo de agua dulce)"
    ]
  },
  {
    enunciado: "La mayoría de insectos holometábolos pasan al estado adulto tras:",
    correcta: "Completar la metamorfosis en la pupa",
    incorrectas: [
      "Mudar directamente de ninfa a adulto sin pupa",
      "Aparearse en fase larvaria"
    ]
  },
  {
    enunciado: "Una ventaja del exoesqueleto quitinoso es:",
    correcta: "Protección mecánica y soporte para inserción muscular",
    incorrectas: [
      "Intercambio gaseoso directo a través de poros alveolares",
      "Crecimiento continuo sin mudas"
    ]
  },
  {
    enunciado: "En gestión de riesgos sanitarios por artrópodos, una medida transversal es:",
    correcta: "Prevención y vigilancia integrada (entornos urbanos y rurales)",
    incorrectas: [
      "Aplicación indiscriminada de insecticidas sin diagnóstico",
      "Eliminación de setos y lindes para reducir biodiversidad"
    ]
  }
];
