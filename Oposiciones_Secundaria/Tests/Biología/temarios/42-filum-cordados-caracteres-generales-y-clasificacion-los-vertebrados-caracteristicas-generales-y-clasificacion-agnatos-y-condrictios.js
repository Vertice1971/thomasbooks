// temarios/42-filum-cordados-vertebrados-caracteristicas-clasificacion-agnatos-y-condrictios.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál NO es un rasgo diagnóstico de los cordados?",
    correcta: "Metamorfosis holometábola",
    incorrectas: [
      "Notocorda al menos embrionaria",
      "Tubo neural dorsal hueco"
    ]
  },
  {
    enunciado: "El endostilo de los cordados es homólogo funcional a:",
    correcta: "La glándula tiroides de vertebrados",
    incorrectas: [
      "El páncreas exocrino",
      "Las glándulas salivales parótidas"
    ]
  },
  {
    enunciado: "¿Cuál de estos subfilos de Chordata mantiene notocorda y somitos a lo largo del cuerpo en el adulto?",
    correcta: "Cefalocordados (p. ej., Branchiostoma)",
    incorrectas: [
      "Urocordados (ascidias adultas)",
      "Equinodermos"
    ]
  },
  {
    enunciado: "En urocordados, los caracteres cordados se observan principalmente en:",
    correcta: "La larva natante",
    incorrectas: [
      "El adulto sésil siempre",
      "Los gonoductos exclusivamente"
    ]
  },
  {
    enunciado: "Un rasgo que distingue Vertebrata (=Craniata) es la presencia de:",
    correcta: "Cráneo y elementos vertebrales",
    incorrectas: [
      "Exoesqueleto quitinoso",
      "Circulación abierta"
    ]
  },
  {
    enunciado: "La circulación en vertebrados es:",
    correcta: "Cerrada, con corazón muscular",
    incorrectas: [
      "Abierta sin vasos definidos",
      "Mixta abierta-cerrada como norma"
    ]
  },
  {
    enunciado: "El grupo Agnatha sensu moderno equivale a:",
    correcta: "Cyclostomata: mixinos y lampreas",
    incorrectas: [
      "Elasmobranchii",
      "Actinopterygii"
    ]
  },
  {
    enunciado: "¿Qué estructura falta en los agnatos?",
    correcta: "Mandíbulas articuladas",
    incorrectas: [
      "Notocorda",
      "Cordón nervioso dorsal"
    ]
  },
  {
    enunciado: "La larva de las lampreas se denomina:",
    correcta: "Ammocoete",
    incorrectas: [
      "Náuplio",
      "Trocofora"
    ]
  },
  {
    enunciado: "Los mixinos se caracterizan por:",
    correcta: "Producción de abundante moco defensivo",
    incorrectas: [
      "Aletas pares desarrolladas",
      "Esqueleto óseo denso"
    ]
  },
  {
    enunciado: "Una especie anádroma citada en la Península Ibérica es:",
    correcta: "Petromyzon marinus (lamprea marina)",
    incorrectas: [
      "Scyliorhinus canicula",
      "Chimaera monstrosa"
    ]
  },
  {
    enunciado: "En agnatos, la notocorda es:",
    correcta: "Persistente y funcional en el adulto",
    incorrectas: [
      "Sólo embrionaria y reemplazada por vértebras",
      "Ausente por completo"
    ]
  },
  {
    enunciado: "Los condrictios presentan típicamente:",
    correcta: "Esqueleto cartilaginoso con calcificación prismática",
    incorrectas: [
      "Esqueleto óseo esponjoso predominante",
      "Quitina en el endoesqueleto"
    ]
  },
  {
    enunciado: "Las escamas de tiburones y rayas son:",
    correcta: "Placoides (dermales)",
    incorrectas: [
      "Cicloides",
      "Ganoides"
    ]
  },
  {
    enunciado: "La cola heterocerca es característica de muchos:",
    correcta: "Tiburones (Elasmobranchii)",
    incorrectas: [
      "Cefalópodos",
      "Anfibios anuros"
    ]
  },
  {
    enunciado: "¿Cuántas hendiduras branquiales abiertas sin opérculo muestran típicamente los condrictios?",
    correcta: "De 5 a 7 pares",
    incorrectas: [
      "Un único opérculo por lado",
      "De 8 a 10 pares"
    ]
  },
  {
    enunciado: "Las ampollas de Lorenzini permiten a los condrictios detectar:",
    correcta: "Campos eléctricos débiles",
    incorrectas: [
      "Ultravioleta solar",
      "Radiación gamma natural"
    ]
  },
  {
    enunciado: "En muchos condrictios la fecundación es:",
    correcta: "Interna mediante clásperes",
    incorrectas: [
      "Externa obligatoria",
      "Por partenogénesis obligada"
    ]
  },
  {
    enunciado: "¿Cuál NO pertenece a Chondrichthyes?",
    correcta: "Anguilla anguilla",
    incorrectas: [
      "Isurus oxyrinchus",
      "Raja clavata"
    ]
  },
  {
    enunciado: "Las quimeras (Holocephali) se distinguen por:",
    correcta: "Operculo cartilaginoso continuo y dientes en placas",
    incorrectas: [
      "Escamas cicloides grandes",
      "Mandíbulas ausentes"
    ]
  },
  {
    enunciado: "Un tiburón común en aguas ibéricas es:",
    correcta: "Scyliorhinus canicula (tollo/tiburón gato)",
    incorrectas: [
      "Salmo salar",
      "Lophius piscatorius (pez óseo)"
    ]
  },
  {
    enunciado: "Una raya frecuente en plataformas continentales europeas es:",
    correcta: "Raja clavata",
    incorrectas: [
      "Thunnus thynnus",
      "Molva molva"
    ]
  },
  {
    enunciado: "Las estrategias reproductivas en condrictios incluyen:",
    correcta: "Oviparidad, ovoviviparidad y viviparidad",
    incorrectas: [
      "Sólo oviparidad externa",
      "Sólo viviparidad placentaria"
    ]
  },
  {
    enunciado: "Funcionalmente, los condrictios suelen ser:",
    correcta: "Depredadores ápice o mesodepredadores",
    incorrectas: [
      "Productores primarios",
      "Descomponedores obligados"
    ]
  },
  {
    enunciado: "La línea lateral en peces detecta principalmente:",
    correcta: "Movimientos y vibraciones del agua",
    incorrectas: [
      "Cambios de pH sanguíneo",
      "Presión osmótica interna"
    ]
  },
  {
    enunciado: "En lampreas adultas parásitas, la alimentación se realiza mediante:",
    correcta: "Boca suctora con dientes córneos y lengua raspadora",
    incorrectas: [
      "Mandíbulas trituradoras con esmalte",
      "Rádula de quitina"
    ]
  },
  {
    enunciado: "¿Qué estructura falta en agnatos y está presente en gnatóstomos?",
    correcta: "Mandíbulas derivadas de arcos viscerales",
    incorrectas: [
      "Notocorda embrionaria",
      "Tubo neural dorsal"
    ]
  },
  {
    enunciado: "Comparando con osteíctios, muchos condrictios carecen de:",
    correcta: "Vejiga natatoria funcional (usan hígado rico en escualeno)",
    incorrectas: [
      "Aletas pares",
      "Sistema de línea lateral"
    ]
  },
  {
    enunciado: "La electrorecepción en tiburones es útil para:",
    correcta: "Localizar presas enterradas y orientación",
    incorrectas: [
      "Respirar fuera del agua",
      "Producir bioluminiscencia"
    ]
  },
  {
    enunciado: "Un riesgo principal para condrictios a escala global es:",
    correcta: "Sobrepesca y capturas accesorias (bycatch)",
    incorrectas: [
      "Exceso de reclutamiento",
      "Hibridación natural masiva con óseos"
    ]
  },
  {
    enunciado: "El esqueleto de los condrictios está compuesto por:",
    correcta: "Cartílago, a menudo parcialmente calcificado",
    incorrectas: [
      "Hueso compacto con osteonas",
      "Quitina laminar"
    ]
  },
  {
    enunciado: "En elasmobranquios, la boca se sitúa normalmente:",
    correcta: "En posición ventral",
    incorrectas: [
      "En posición terminal protráctil siempre",
      "En posición dorsal"
    ]
  },
  {
    enunciado: "Los espiráculos en rayas y tiburones permiten:",
    correcta: "Entrada de agua para ventilación cuando están en el fondo",
    incorrectas: [
      "Excreción de sales por difusión",
      "Almacenamiento de aire para flotabilidad"
    ]
  },
  {
    enunciado: "La cola de las rayas (Batoidea) suele estar:",
    correcta: "Aplanadas dorsoventralmente con aletas pectorales expandidas formando el disco",
    incorrectas: [
      "Lateralmente comprimida con aleta caudal simétrica",
      "Fusionada al opérculo óseo"
    ]
  },
  {
    enunciado: "Una diferencia clave entre lampreas y mixinos es que las primeras:",
    correcta: "Poseen ojos funcionales y etapas fluviales anádromas en muchas especies",
    incorrectas: [
      "Carecen de notocorda",
      "Tienen placas dentarias verdaderas"
    ]
  },
  {
    enunciado: "En condrictios, los dientes son:",
    correcta: "Estructuras dérmicas reemplazables en hileras",
    incorrectas: [
      "Placas permanentes de esmalte óseo",
      "Prolongaciones de la mandíbula superior fusionadas"
    ]
  },
  {
    enunciado: "La función de la notocorda en cordados primitivos es:",
    correcta: "Soporte axial flexible para la musculatura segmentada",
    incorrectas: [
      "Almacenamiento de calcio para el esqueleto",
      "Intercambio gaseoso interno"
    ]
  },
  {
    enunciado: "En vertebrados, el SNC deriva embriológicamente de:",
    correcta: "Tubo neural dorsal",
    incorrectas: [
      "Endodermo faríngeo",
      "Cresta neural exclusivamente"
    ]
  },
  {
    enunciado: "Un ejemplo de raya eléctrica presente en el Mediterráneo occidental es:",
    correcta: "Torpedo marmorata",
    incorrectas: [
      "Rutilus rutilus",
      "Engraulis encrasicolus"
    ]
  },
  {
    enunciado: "La gestión de conservación de condrictios incluye medidas como:",
    correcta: "Tallas mínimas, vedas, áreas cerradas y liberación de capturas",
    incorrectas: [
      "Aumentar artes de enmalle en zonas de cría",
      "Eliminar límites de esfuerzo pesquero"
    ]
  }
];
