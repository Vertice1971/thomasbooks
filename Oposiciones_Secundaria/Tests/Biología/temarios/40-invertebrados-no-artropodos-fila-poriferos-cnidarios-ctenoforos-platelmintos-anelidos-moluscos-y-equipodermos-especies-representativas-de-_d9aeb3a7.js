// temarios/40-invertebrados-no-artropodos-poriferos-cnidarios-ctenoforos-platelmintos-anelidos-moluscos-y-equinodermos-especies-representativas-e-importancia.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál de los siguientes grupos carece de tejidos verdaderos y posee un sistema acuífero con coanocitos?",
    correcta: "Poríferos (esponjas)",
    incorrectas: [
      "Cnidarios",
      "Platelmintos"
    ]
  },
  {
    enunciado: "El tipo de célula responsable de la captura de partículas y circulación del agua en esponjas es:",
    correcta: "Coanocito",
    incorrectas: [
      "Cnidocito",
      "Coloblasto"
    ]
  },
  {
    enunciado: "¿Qué material forma las espículas de muchas esponjas demospóngidas?",
    correcta: "Sílice (espículas silíceas) y/o espongina",
    incorrectas: [
      "Carbonato cálcico exclusivamente",
      "Quitina"
    ]
  },
  {
    enunciado: "Una especie de esponja mediterránea citada con frecuencia en nuestras costas es:",
    correcta: "Oscarella lobularis",
    incorrectas: [
      "Aurelia aurita",
      "Paracentrotus lividus"
    ]
  },
  {
    enunciado: "Los cnidarios se caracterizan por presentar:",
    correcta: "Cnidocitos con cápsulas urticantes (nematocistos)",
    incorrectas: [
      "Coloblastos adhesivos",
      "Radula quitinosa"
    ]
  },
  {
    enunciado: "¿Cuál es la alternancia típica del ciclo de vida en muchos cnidarios?",
    correcta: "Pólipo asexual y medusa sexual",
    incorrectas: [
      "Trocofora–nauplio",
      "Larva pluteus–ofiuroides"
    ]
  },
  {
    enunciado: "Una medusa común en el litoral español perteneciente a Escifozos es:",
    correcta: "Aurelia aurita",
    incorrectas: [
      "Mnemiopsis leidyi",
      "Pleurobrachia pileus"
    ]
  },
  {
    enunciado: "Los corales rojos mediterráneos de interés en joyería pertenecen al género:",
    correcta: "Corallium",
    incorrectas: [
      "Mytilus",
      "Astropecten"
    ]
  },
  {
    enunciado: "Los ctenóforos se distinguen de los cnidarios por poseer:",
    correcta: "Filas de peines (ctenas) y coloblastos adhesivos",
    incorrectas: [
      "Cnidocitos y esqueleto calcáreo",
      "Probóscide eversible con rádula"
    ]
  },
  {
    enunciado: "La especie invasora de ctenóforo que afectó a pesquerías del Mar Negro es:",
    correcta: "Mnemiopsis leidyi",
    incorrectas: [
      "Pelagia noctiluca",
      "Loligo vulgaris"
    ]
  },
  {
    enunciado: "Los platelmintos parásitos cuya fase adulta habita el intestino humano como cintas segmentadas son:",
    correcta: "Cestodos (p. ej., Taenia)",
    incorrectas: [
      "Trematodos (p. ej., Schistosoma)",
      "Turbellarios (p. ej., planarias de vida libre)"
    ]
  },
  {
    enunciado: "La esquistosomiasis está causada por:",
    correcta: "Trematodos del género Schistosoma",
    incorrectas: [
      "Cestodos del género Taenia",
      "Anélidos del género Hirudo"
    ]
  },
  {
    enunciado: "Una característica morfológica general de los platelmintos es:",
    correcta: "Cuerpo aplanado dorsoventralmente y simetría bilateral",
    incorrectas: [
      "Simetría radial pentámera",
      "Pseudoceloma amplio lleno de fluido"
    ]
  },
  {
    enunciado: "Los anélidos se caracterizan por presentar:",
    correcta: "Metamería (segmentación) y sistema circulatorio cerrado en muchos grupos",
    incorrectas: [
      "Sistema ambulacral y endoesqueleto calcáreo",
      "Rádula y pie muscular"
    ]
  },
  {
    enunciado: "Una especie de anélido oligoqueto clave para la calidad del suelo es:",
    correcta: "Lumbricus terrestris",
    incorrectas: [
      "Helix aspersa",
      "Mytilus galloprovincialis"
    ]
  },
  {
    enunciado: "El uso médico histórico y actual (microcirugía) de anélidos corresponde a:",
    correcta: "Hirudo medicinalis (sanguijuela)",
    incorrectas: [
      "Arenicola marina",
      "Glycera dibranchiata"
    ]
  },
  {
    enunciado: "Los moluscos incluyen clases como:",
    correcta: "Gasterópodos, bivalvos y cefalópodos",
    incorrectas: [
      "Crustáceos, insectos y arácnidos",
      "Briozoos, hidrozoos y turbelarios"
    ]
  },
  {
    enunciado: "La rádula es una estructura característica de:",
    correcta: "Muchos gasterópodos (raspado/ingestión)",
    incorrectas: [
      "Bivalvos filtran sin rádula",
      "Equinodermos con linterna de Aristóteles"
    ]
  },
  {
    enunciado: "Un bivalvo cultivado y de gran importancia alimentaria en España es:",
    correcta: "Mytilus galloprovincialis (mejillón mediterráneo)",
    incorrectas: [
      "Aplysia depilans",
      "Octopus vulgaris"
    ]
  },
  {
    enunciado: "Un cefalópodo de interés pesquero común en nuestras aguas es:",
    correcta: "Loligo vulgaris (calamar común)",
    incorrectas: [
      "Pomacea canaliculata",
      "Paracentrotus lividus"
    ]
  },
  {
    enunciado: "Los equinodermos presentan como rasgo distintivo:",
    correcta: "Sistema ambulacral con pies ambulacrales y endoesqueleto calcáreo",
    incorrectas: [
      "Metamería con quetas",
      "Concha bivalva con valvas articuladas"
    ]
  },
  {
    enunciado: "El erizo de mar frecuente en litorales rocosos ibéricos es:",
    correcta: "Paracentrotus lividus",
    incorrectas: [
      "Aurelia aurita",
      "Helix pomatia"
    ]
  },
  {
    enunciado: "Una estrella de mar bentónica de fondos arenosos del Mediterráneo occidental es:",
    correcta: "Astropecten spp.",
    incorrectas: [
      "Mnemiopsis spp.",
      "Clathrina spp."
    ]
  },
  {
    enunciado: "Las holoturias (pepinos de mar) poseen interés:",
    correcta: "Alimentario en mercados asiáticos y como bioturbadores del sedimento",
    incorrectas: [
      "Principalmente en producción de perlas",
      "Como vectores de malaria"
    ]
  },
  {
    enunciado: "¿Qué grupo incluye especies con simbiosis coral–zooxantela clave para arrecifes?",
    correcta: "Cnidarios (Antozoos)",
    incorrectas: [
      "Ctenóforos pelágicos",
      "Poríferos calizos exclusivamente"
    ]
  },
  {
    enunciado: "Una amenaza sanitaria asociada a cnidarios en el Mediterráneo es:",
    correcta: "Picaduras de medusas como Pelagia noctiluca",
    incorrectas: [
      "Intoxicación por toxinas de tetrodotoxina en erizos",
      "Transmisión de tenias por estrellas de mar"
    ]
  },
  {
    enunciado: "Los coloblastos, células adhesivas para capturar presas, son propios de:",
    correcta: "Ctenóforos",
    incorrectas: [
      "Cnidarios",
      "Poríferos"
    ]
  },
  {
    enunciado: "Una diferencia clave entre bivalvos y gasterópodos es que los bivalvos:",
    correcta: "Son filtradores con branquias adaptadas y carecen de rádula",
    incorrectas: [
      "Presentan pie segmentado con quetas",
      "Poseen sistema ambulacral"
    ]
  },
  {
    enunciado: "Los compuestos bioactivos de esponjas marinas han sido fuente de:",
    correcta: "Moléculas con potencial anticancerígeno y antibiótico",
    incorrectas: [
      "Hormonas esteroideas humanas",
      "Clorofila para uso farmacéutico directo"
    ]
  },
  {
    enunciado: "Un gasterópodo terrestre de interés agrícola por su condición de plaga es:",
    correcta: "Helix (Cornu) aspersum en cultivos hortícolas",
    incorrectas: [
      "Lumbricus terrestris",
      "Aurelia aurita"
    ]
  },
  {
    enunciado: "Los anélidos poliquetos marinos contribuyen ecológicamente mediante:",
    correcta: "Bioturbación y oxigenación de sedimentos",
    incorrectas: [
      "Formación de arrecifes de coral",
      "Producción de perlas"
    ]
  },
  {
    enunciado: "La 'linterna de Aristóteles' es un aparato masticador propio de:",
    correcta: "Erizos de mar (Echinoidea)",
    incorrectas: [
      "Estrellas de mar (Asteroidea)",
      "Pepinos de mar (Holothuroidea)"
    ]
  },
  {
    enunciado: "Una aportación económica destacada de los moluscos en España es:",
    correcta: "Acuicultura de bivalvos (bateas de mejillón, ostras, vieiras)",
    incorrectas: [
      "Cultivo de ctenóforos para consumo masivo",
      "Explotación de sanguijuelas marinas como alimento humano"
    ]
  },
  {
    enunciado: "En el control de parásitos humanos, una medida relevante frente a cestodos es:",
    correcta: "Inspección cárnica y correcta cocción/congelación",
    incorrectas: [
      "Vacunación con toxoide tetánico",
      "Aplicación de antimaláricos"
    ]
  },
  {
    enunciado: "Una especie de bivalvo autóctono del Atlántico ibérico de interés pesquero es:",
    correcta: "Ruditapes decussatus (almeja fina)",
    incorrectas: [
      "Crassostrea gigas (introducida)",
      "Aplysia depilans (opistobranquio no pesquero)"
    ]
  },
  {
    enunciado: "Los cefalópodos se distinguen por:",
    correcta: "Cerebro desarrollado, ojos complejos y locomoción a reacción",
    incorrectas: [
      "Endoesqueleto calcáreo con osículos",
      "Filtración por branquias laminares con sifones fijos"
    ]
  },
  {
    enunciado: "Una importancia ecosistémica de equinodermos herbívoros como Paracentrotus es:",
    correcta: "Control de macroalgas y modulación de comunidades bentónicas",
    incorrectas: [
      "Fijación de nitrógeno atmosférico",
      "Producción de arrecifes de carbonato masivo"
    ]
  },
  {
    enunciado: "En cnidarios, el órgano sensorial y de equilibrio presente en medusas se denomina:",
    correcta: "Estatocisto (en ropalia)",
    incorrectas: [
      "Otolito branquial",
      "Ocelos compuestos de tipo insecto"
    ]
  },
  {
    enunciado: "Una medida de gestión para reducir impactos de blooms gelatinosos costeros es:",
    correcta: "Mejorar depuración y reducir eutrofización que favorece proliferaciones",
    incorrectas: [
      "Introducir ctenóforos exóticos como control biológico",
      "Eliminar praderas de fanerógamas marinas"
    ]
  }
];
