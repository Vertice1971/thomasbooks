// temarios/07-minerales-petrogeneticos-minerales-y-rocas-de-interes-economico.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué son los minerales petrogenéticos?",
    correcta: "Minerales que forman parte esencial o accesoria de las rocas",
    incorrectas: [
      "Minerales exclusivos de yacimientos hidrotermales",
      "Minerales únicamente empleados en joyería"
    ]
  },
  {
    enunciado: "¿Qué diferencia a un mineral esencial de uno accesorio?",
    correcta: "El esencial determina el tipo de roca y el accesorio no",
    incorrectas: [
      "El esencial siempre es metálico y el accesorio no metálico",
      "El esencial se explota económicamente y el accesorio no"
    ]
  },
  {
    enunciado: "¿Qué porcentaje aproximado de la corteza terrestre está formado por silicatos?",
    correcta: "Alrededor del 90%",
    incorrectas: [
      "Alrededor del 50%",
      "Alrededor del 30%"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un nesosilicato?",
    correcta: "Olivino",
    incorrectas: [
      "Moscovita",
      "Cuarzo"
    ]
  },
  {
    enunciado: "¿Qué grupo mineralógico incluye a los piroxenos?",
    correcta: "Inosilicatos",
    incorrectas: [
      "Filosilicatos",
      "Carbonatos"
    ]
  },
  {
    enunciado: "¿Qué mineral es un tectosilicato?",
    correcta: "Cuarzo",
    incorrectas: [
      "Biotita",
      "Yeso"
    ]
  },
  {
    enunciado: "¿Qué mineral es un carbonato?",
    correcta: "Calcita",
    incorrectas: [
      "Halita",
      "Magnetita"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un sulfato?",
    correcta: "Yeso",
    incorrectas: [
      "Cuarzo",
      "Galena"
    ]
  },
  {
    enunciado: "¿Qué tipo de mineral es la magnetita?",
    correcta: "Un óxido de hierro",
    incorrectas: [
      "Un sulfuro de hierro",
      "Un silicato de hierro"
    ]
  },
  {
    enunciado: "¿Qué tipo de mineral es la galena?",
    correcta: "Un sulfuro de plomo",
    incorrectas: [
      "Un óxido de zinc",
      "Un carbonato de calcio"
    ]
  },
  {
    enunciado: "¿Qué nombre recibe el mineral del que se extrae principalmente el cobre?",
    correcta: "Calcopirita",
    incorrectas: [
      "Yeso",
      "Halita"
    ]
  },
  {
    enunciado: "¿Qué metal se obtiene de la esfalerita?",
    correcta: "Zinc",
    incorrectas: [
      "Plomo",
      "Estaño"
    ]
  },
  {
    enunciado: "¿Qué metal se obtiene de la casiterita?",
    correcta: "Estaño",
    incorrectas: [
      "Hierro",
      "Aluminio"
    ]
  },
  {
    enunciado: "¿Cuál es el mineral principal del aluminio?",
    correcta: "Bauxita",
    incorrectas: [
      "Cuarzo",
      "Pirita"
    ]
  },
  {
    enunciado: "¿Qué mineral es la mena del plomo?",
    correcta: "Galena",
    incorrectas: [
      "Magnetita",
      "Calcita"
    ]
  },
  {
    enunciado: "¿Qué nombre recibe la parte aprovechable de un yacimiento?",
    correcta: "Mena",
    incorrectas: [
      "Ganga",
      "Reserva"
    ]
  },
  {
    enunciado: "¿Qué nombre recibe la parte no útil de un yacimiento mineral?",
    correcta: "Ganga",
    incorrectas: [
      "Mena",
      "Roca madre"
    ]
  },
  {
    enunciado: "¿Qué mineral se utiliza como sal común?",
    correcta: "Halita",
    incorrectas: [
      "Yeso",
      "Apatito"
    ]
  },
  {
    enunciado: "¿Qué mineral se emplea en la fabricación de cemento y yeso?",
    correcta: "Yeso",
    incorrectas: [
      "Cuarzo",
      "Diamante"
    ]
  },
  {
    enunciado: "¿Qué mineral se emplea como principal fuente de fósforo en fertilizantes?",
    correcta: "Apatito",
    incorrectas: [
      "Pirita",
      "Fluorita"
    ]
  },
  {
    enunciado: "¿Qué tipo de mineral es el diamante?",
    correcta: "Un alótropo del carbono",
    incorrectas: [
      "Un óxido de carbono",
      "Un silicato de carbono"
    ]
  },
  {
    enunciado: "¿Qué roca se utiliza habitualmente como piedra ornamental y de construcción?",
    correcta: "Granito",
    incorrectas: [
      "Basalto vesicular",
      "Arcilla común"
    ]
  },
  {
    enunciado: "¿Qué roca metamórfica es muy apreciada como roca ornamental?",
    correcta: "Mármol",
    incorrectas: [
      "Antracita",
      "Pizarra bituminosa"
    ]
  },
  {
    enunciado: "¿Qué roca sedimentaria es la base del cemento?",
    correcta: "Caliza",
    incorrectas: [
      "Granito",
      "Gabro"
    ]
  },
  {
    enunciado: "¿Qué roca es utilizada tradicionalmente como cubierta de tejados?",
    correcta: "Pizarra",
    incorrectas: [
      "Peridotita",
      "Arenisca"
    ]
  },
  {
    enunciado: "¿Qué tipo de roca es el carbón?",
    correcta: "Roca sedimentaria orgánica",
    incorrectas: [
      "Roca ígnea volcánica",
      "Roca metamórfica regional"
    ]
  },
  {
    enunciado: "¿Qué tipo de recurso es el petróleo?",
    correcta: "Un recurso geológico no renovable",
    incorrectas: [
      "Un mineral metálico",
      "Una roca ígnea"
    ]
  },
  {
    enunciado: "¿Qué tipo de yacimiento se forma por precipitación química de sales en ambientes áridos?",
    correcta: "Evaporítico",
    incorrectas: [
      "Magmático",
      "Metamórfico"
    ]
  },
  {
    enunciado: "¿Qué tipo de yacimiento se asocia a fluidos calientes que circulan por fracturas?",
    correcta: "Hidrotermal",
    incorrectas: [
      "Sedimentario detrítico",
      "Volcánico extrusivo"
    ]
  },
  {
    enunciado: "¿Qué tipo de depósitos forman los placeres auríferos?",
    correcta: "Sedimentarios de concentración aluvial",
    incorrectas: [
      "Metamórficos de contacto",
      "Hidrotermales de sulfuros"
    ]
  },
  {
    enunciado: "¿Qué técnica se utiliza para separar minerales mediante burbujas?",
    correcta: "Flotación",
    incorrectas: [
      "Difracción de rayos X",
      "Lixiviación ácida"
    ]
  },
  {
    enunciado: "¿Qué problema ambiental puede producir la pirita al alterarse?",
    correcta: "Drenaje ácido de minas",
    incorrectas: [
      "Contaminación por hidrocarburos",
      "Deforestación"
    ]
  },
  {
    enunciado: "¿Qué impacto ambiental es típico de la minería a cielo abierto?",
    correcta: "Alteración del relieve y pérdida de hábitats",
    incorrectas: [
      "Disminución del ozono estratosférico",
      "Acidificación oceánica"
    ]
  },
  {
    enunciado: "¿Qué medida favorece la sostenibilidad en la explotación minera?",
    correcta: "Reciclaje y rehabilitación de espacios mineros",
    incorrectas: [
      "Aumento de la extracción sin control",
      "Abandono de escombreras sin tratar"
    ]
  },
  {
    enunciado: "¿Qué minerales forman parte de las denominadas tierras raras?",
    correcta: "Lantánidos y escandio e itrio",
    incorrectas: [
      "Carbonatos de calcio y magnesio",
      "Silicatos de hierro y magnesio"
    ]
  },
  {
    enunciado: "¿Qué recurso es fundamental para la fabricación de microchips?",
    correcta: "Silicio",
    incorrectas: [
      "Halita",
      "Yeso"
    ]
  },
  {
    enunciado: "¿Qué mineral se emplea en la fabricación de baterías de litio?",
    correcta: "Espodumena",
    incorrectas: [
      "Galena",
      "Magnetita"
    ]
  },
  {
    enunciado: "¿Qué roca se utiliza para producir cal viva?",
    correcta: "Caliza",
    incorrectas: [
      "Granito",
      "Pizarra"
    ]
  },
  {
    enunciado: "¿Qué roca volcánica se emplea como puzolana en la industria cementera?",
    correcta: "Ceniza volcánica",
    incorrectas: [
      "Granito",
      "Caliza marmórea"
    ]
  },
  {
    enunciado: "¿Qué mineral es la mena principal del wolframio?",
    correcta: "Wolframita",
    incorrectas: [
      "Casiterita",
      "Calcopirita"
    ]
  }
];
